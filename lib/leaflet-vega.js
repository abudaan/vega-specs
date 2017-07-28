/* leaflet-vega - v0.4.0 - Fri Jul 28 2017 13:37:05 GMT+0200 (CEST)
 * Copyright (c) 2017 Yuri Astrakhan <YuriAstrakhan@gmail.com>
 * BSD-2-Clause */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('leaflet')) :
	typeof define === 'function' && define.amd ? define(['leaflet'], factory) :
	(factory(global.L));
}(this, (function (L) { 'use strict';

L = 'default' in L ? L['default'] : L;

var version = "0.4.0";

L.vega = function (spec, options) {
  return new L.VegaLayer(spec, options);
};

L.VegaLayer = (L.Layer ? L.Layer : L.Class).extend({

  options: {
    // FIXME: uses window.vega
    vega: window && window.vega,

    // If Vega spec creates controls (inputs), put them all into this container
    bindingsContainer: undefined,

    // Options to be passed to the Vega's parse method
    parseConfig: undefined,

    // Options to be passed ot the Vega's View constructor
    viewConfig: undefined,

    // If true, graph will be repainted only after the map has finished moving (faster)
    delayRepaint: true,

    // optional warning handler:   (warning) => { ... }
    onWarning: false,

    // optional error handler:   (err) => { ...; throw err; }
    onError: false
  },

  initialize: function initialize(spec, options) {
    var _this = this;

    L.Util.setOptions(this, options);
    this._disableSignals = 0;
    this.disableSignals = function () {
      _this._disableSignals++;
    };
    this.enableSignals = function () {
      _this._disableSignals--;
      if (_this._disableSignals < 0) {
        throw new Error('too many signal enables');
      }
    };
    this._spec = this._updateGraphSpec(spec);
  },

  /**
   * @param {L.Map} map
   * @return {L.VegaLayer}
   */
  addTo: function addTo(map) {
    map.addLayer(this);
    return this;
  },

  onAdd: function onAdd(map) {
    var _this2 = this;

    return Promise.resolve().then(function () {
      _this2.disableSignals();


      _this2._map = map;
      _this2._vegaContainer = L.DomUtil.create('div', 'leaflet-vega-container');
      map._panes.overlayPane.appendChild(_this2._vegaContainer);

      var vega = _this2.options.vega;

      var dataflow = vega.parse(_this2._spec, _this2.options.parseConfigp);


      // var oldLoad = _this2.options.viewConfig.loader.load.bind(_this2.options.viewConfig.loader);
      // _this2.options.viewConfig.loader.load = function (uri, opt) {
      //   console.log('Load', uri, opt);
      //   return oldLoad(uri, opt);
      // };

      console.log('promise');

      _this2._view = new vega.View(dataflow, _this2.options.viewConfig);
      console.log('booom');

      if (_this2.options.onWarning) {
        _this2._view.warn = _this2.options.onWarning;
      }

      if (_this2.options.onError) {
        _this2._view.error = _this2.options.onError;
      }

      _this2._view.padding({ left: 0, right: 0, top: 0, bottom: 0 }).initialize(_this2._vegaContainer, _this2.options.bindingsContainer).hover();

      var onSignal = function onSignal(sig, value) {
        return _this2._onSignalChange(sig, value);
      };

      _this2._view.addSignalListener('latitude', onSignal).addSignalListener('longitude', onSignal).addSignalListener('zoom', onSignal);

      map.on(_this2.options.delayRepaint ? 'moveend' : 'move', function () {
        return _this2._reset();
      });
      map.on('zoomend', function () {
        return _this2._reset();
      });

      return _this2._reset(true);
    }).then(this.enableSignals, this.enableSignals);
  },

  onRemove: function onRemove() {
    if (this._view) {
      this._view.finalize();
      this._view = null;
    }

    // TODO: once Leaflet 0.7 is fully out of the picture, replace this with L.DomUtil.empty()
    var el = this._vegaContainer;
    while (el.firstChild) {
      el.removeChild(el.firstChild);
    }
  },

  _onSignalChange: function _onSignalChange(sig, value) {
    if (this._ignoreSignals) {
      return;
    }

    var map = this._map;
    var center = map.getCenter();
    var zoom = map.getZoom();

    switch (sig) {
      case 'latitude':
        center.lat = value;
        break;
      case 'longitude':
        center.lng = value;
        break;
      case 'zoom':
        zoom = value;
        break;
      default:
        return; // ignore
    }

    map.setView(center, zoom);

    this._reset(); // ignore promise
  },

  _reset: function _reset(force) {
    var _this3 = this;

    return Promise.resolve().then(function () {
      _this3.disableSignals();

      if (!_this3._view) {
        return 0;
      }

      var map = _this3._map;
      var view = _this3._view;
      var topLeft = map.containerPointToLayerPoint([0, 0]);
      L.DomUtil.setPosition(_this3._vegaContainer, topLeft);

      var size = map.getSize();
      var center = map.getCenter();
      var zoom = map.getZoom();

      function sendSignal(sig, value) {
        if (view.signal(sig) !== value) {
          view.signal(sig, value);
          return 1;
        }

        return 0;
      }

      // Only send changed signals to Vega. Detect if any of the signals have changed before calling run()
      var changed = 0;
      changed |= sendSignal('width', size.x);
      changed |= sendSignal('height', size.y);
      changed |= sendSignal('latitude', center.lat);
      changed |= sendSignal('longitude', center.lng);
      changed |= sendSignal('zoom', zoom);

      if (changed || force) {
        return view.runAsync();
      }
      return 0;
    }).then(this.enableSignals, this.enableSignals);
  },

  /*
   Inject signals into the spec
   TODO: make it less hacky - avoid spec modification
   */
  _updateGraphSpec: function _updateGraphSpec(spec) {
    var _this4 = this;

    /**
     * Find all names that are not defined in the spec's section
     * @param {string} section
     * @param {Iterable.<string>} names
     * @return {Iterable.<string>}
     */
    var findUndefined = function findUndefined(section, names) {
      if (!spec.hasOwnProperty(section)) {
        spec[section] = [];
        return names;
      } else if (!Array.isArray(spec[section])) {
        throw new Error('signals must be an array');
      }

      names = new Set(names);
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = spec[section][Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var obj = _step.value;

          // If obj has a name field, delete that name from the names
          // Set will silently ignore delete() for undefined names
          if (obj.name) names.delete(obj.name);
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      return names;
    };

    /**
     * Set spec field, and warn if overriding
     * @param {string} key
     * @param {*} value
     */
    var overrideField = function overrideField(key, value) {
      if (spec[key] && spec[key] !== value) {
        var msg = 'Overriding ' + key + ' \uD800\uDCD8 ' + value;
        if (_this4.options.onWarning) {
          _this4.options.onWarning(msg);
        } else {
          console.log(msg);
        }
      }
      spec[key] = value;
    };

    var mapSignals = ['zoom', 'latitude', 'longitude'];
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = findUndefined('signals', mapSignals)[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var sig = _step2.value;

        spec.signals.push({ name: sig });
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2.return) {
          _iterator2.return();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }

    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = findUndefined('projections', ['projection'])[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var prj = _step3.value;

        spec.projections.push({
          name: prj,
          type: 'mercator',
          scale: { signal: '256*pow(2,zoom)/2/PI' },
          rotate: [{ signal: '-longitude' }, 0, 0],
          center: [0, { signal: 'latitude' }],
          translate: [{ signal: 'width/2' }, { signal: 'height/2' }]
        });
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }

    overrideField('padding', 0);
    overrideField('autosize', 'none');

    return spec;
  },
});

L.VegaLayer.version = version;

})));
//# sourceMappingURL=bundle.js.map
