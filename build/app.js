(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _spec = require('../specs/spec1');

var _spec2 = _interopRequireDefault(_spec);

var _createVegaView = require('./util/create-vega-view');

var _createVegaView2 = _interopRequireDefault(_createVegaView);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var toolTipOptions = {
    // showAllFields: true,
    fields: [{
        formatType: 'number',
        field: 'stortingen'
    }, {
        formatType: 'number',
        field: 'vulling'
    }, {
        formatType: 'number',
        field: 'meldingen'
    }]
};

window.addEventListener('DOMContentLoaded', function () {
    (0, _createVegaView2.default)(_spec2.default, 'app', 'canvas', true, function (view) {
        if (view && view.signals) {
            view.signals.forEach(function (signal) {
                view.addSignalListener(signal, function (name, data) {
                    console.log(name, data);
                });
            });
        }
        if (view && view.data) {
            var stamp = Date.now();
            var dataLoaded = setInterval(function () {
                var reports = view.data('reports');
                if (reports) {
                    console.log(Date.now() - stamp, reports);
                    clearInterval(dataLoaded);
                }
            }, 1);
        }
    });
});

},{"../specs/spec1":3,"./util/create-vega-view":2}],2:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// import vega from 'vega';
// import L from 'leaflet';
// import LeafletVega from './leaflet-vega';

var vega = window.vega;
var L = window.L;

exports.default = function (spec, id, renderer, withMap, callback) {
    if (withMap) {
        var map = L.map(id, {
            zoomAnimation: false
        }).setView([51.9309303, 4.3491274], 13);

        delete spec.projections;

        L.tileLayer('http://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.png', {
            attribution: '<a href="http://openstreetmap.org">OpenStreetMap</a> contributors',
            maxZoom: 18
        }).addTo(map);

        var layer = L.vega(spec, {
            renderer: renderer,
            // Make sure the legend stays in place
            delayRepaint: true
        }).addTo(map);

        setTimeout(function () {
            callback(layer._view);
        }, 0);
    } else {
        var view = new vega.View(vega.parse(spec)).renderer(renderer).initialize('#' + id).hover().run();

        callback(view);
    }
};

},{}],3:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
// const dataPath = 'http://localhost:8000/data/';// './data/';
var dataPath = './data/';
var imagePath = './img/';

var signals = [{
    name: 'buurt_hover',
    value: null,
    on: [{
        events: '@buurt:mouseover',
        update: 'datum'
    }, {
        events: '@buurt:mouseout',
        update: 'null'
    }]
}, {
    name: 'mouse_xy',
    on: [{
        events: 'mousemove',
        update: 'xy()'
    }]
}, {
    name: 'tooltip_mouse_xy',
    on: [{
        events: '@buurt:mouseover',
        update: 'xy()'
    }]
}, {
    name: 'date_start',
    value: 3,
    bind: {
        input: 'range',
        min: 0,
        max: 100
    }
}, {
    name: 'date_end',
    value: 4,
    bind: {
        input: 'range',
        min: 0,
        max: 100
    }
}, {
    name: 'selected_date_range',
    update: '[date_start, date_end]'
}, {
    name: 'zoom',
    value: 13
}, {
    name: 'latitude',
    value: 51.9309303
}, {
    name: 'longitude',
    value: 4.3491274
}];

var data = [{
    name: 'reports',
    // url: `${dataPath}reports.csv?${Date.now()}`,
    url: dataPath + 'reports.csv',
    format: {
        type: 'dsv',
        delimiter: ';'
    },
    transform: [
    // {
    //     type: 'geopoint',
    //     projection: 'projection',
    //     fields: [
    //         'x',
    //         'y',
    //     ],
    //     as: [
    //         'x2',
    //         'y2',
    //     ],
    // },
    {
        type: 'formula',
        as: 'datetime',
        expr: 'datetime(datum.date)'
    }]
}, {
    name: 'data',
    url: dataPath + 'data.json',
    format: {
        type: 'json'
    }
}, {
    name: 'buurten',
    url: dataPath + 'buurten.topo.json',
    format: {
        type: 'topojson',
        feature: 'Gebieden'
    },
    transform: [{
        type: 'geopath',
        projection: 'projection'
    }, {
        type: 'lookup',
        from: 'data',
        key: 'name',
        fields: ['properties.NAAM'],
        values: ['vulling', 'meldingen', 'stortingen']
    }]
}, {
    name: 'buurten2',
    source: 'buurten',
    transform: [{
        type: 'lookup',
        from: 'data',
        key: 'name',
        fields: ['properties.NAAM'],
        values: ['vulling', 'meldingen', 'stortingen']
    }, {
        type: 'filter',
        expr: 'datum.vulling != null'
    }]
}];

var marks = [{
    type: 'path',
    name: 'buurt',
    from: {
        data: 'buurten'
    },
    encode: {
        enter: {
            fillOpacity: {
                value: 0.3
            },
            strokeWidth: {
                value: 1
            },
            stroke: {
                value: '#ee0000'
            },
            fill: {
                value: '#00ee00'
            }
        },
        update: {
            path: {
                field: 'path'
            }
        }
    }
}, {
    type: 'text',
    name: 'buurt-info',
    encode: {
        enter: {
            font: {
                value: 'Butcherman Caps'
            },
            align: {
                value: 'left'
            },
            fontSize: {
                value: 12
            },
            width: {
                value: 50
            },
            baseline: {
                value: 'bottom'
            },
            fill: {
                value: '#333'
            }
        },
        update: {
            text: {
                signal: 'mouse_xy'
            },
            x: {
                signal: 'mouse_xy[0]'
            },
            y: {
                signal: 'mouse_xy[1]'
            }
        }
    }
}, {
    type: 'image',
    name: 'report_image',
    from: {
        data: 'reports'
    },
    encode: {
        enter: {
            url: {
                value: imagePath + 'afval.png'
            },
            x: {
                field: 'x2'
            },
            y: {
                field: 'y2'
            }
        },
        update: {
            x: {
                field: 'x2'
            },
            y: {
                field: 'y2'
            }
        }
    },
    transform: [{
        type: 'geopoint',
        projection: 'projection',
        fields: ['x', 'y'],
        as: ['x2', 'y2']
    }]
}, {
    type: 'text',
    name: 'report_text',
    from: {
        data: 'reports'
    },
    encode: {
        enter: {
            text: {
                value: 'x'
            },
            x: {
                field: 'x2'
            },
            y: {
                field: 'y2'
            }
        },
        update: {
            x: {
                field: 'x2'
            },
            y: {
                field: 'y2'
            }
        }
    }
}];

var projections = [{
    name: 'projection',
    type: 'mercator',
    scale: {
        signal: '256*pow(2,zoom)/2/PI'
    },
    rotate: [{
        signal: '-longitude'
    }, 0, 0],
    center: [0, {
        signal: 'latitude'
    }],
    translate: [{
        signal: 'width/2'
    }, {
        signal: 'height/2'
    }]
}];

var scales = [{
    name: 'date_scale',
    type: 'time',
    domain: {
        data: 'reports',
        field: 'datetime'
    },
    range: [0, 100]
}];

exports.default = {
    $schema: 'https://vega.github.io/schema/vega/v3.0.json',
    width: 900,
    height: 600,
    autosize: 'none',
    scales: scales,
    signals: signals,
    data: data,
    marks: marks,
    projections: projections
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCJqcy9hcHAuanMiLCJqcy91dGlsL2NyZWF0ZS12ZWdhLXZpZXcuanMiLCJzcGVjcy9zcGVjMS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7O0FDQUE7Ozs7QUFDQTs7Ozs7O0FBRUEsSUFBTSxpQkFBaUI7QUFDbkI7QUFDQSxZQUFRLENBQ0o7QUFDSSxvQkFBWSxRQURoQjtBQUVJLGVBQU87QUFGWCxLQURJLEVBS0o7QUFDSSxvQkFBWSxRQURoQjtBQUVJLGVBQU87QUFGWCxLQUxJLEVBU0o7QUFDSSxvQkFBWSxRQURoQjtBQUVJLGVBQU87QUFGWCxLQVRJO0FBRlcsQ0FBdkI7O0FBa0JBLE9BQU8sZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQU07QUFDOUMsa0RBQXFCLEtBQXJCLEVBQTRCLFFBQTVCLEVBQXNDLElBQXRDLEVBQTRDLFVBQUMsSUFBRCxFQUFVO0FBQ2xELFlBQUksUUFBUSxLQUFLLE9BQWpCLEVBQTBCO0FBQ3RCLGlCQUFLLE9BQUwsQ0FBYSxPQUFiLENBQXFCLFVBQUMsTUFBRCxFQUFZO0FBQzdCLHFCQUFLLGlCQUFMLENBQXVCLE1BQXZCLEVBQStCLFVBQUMsSUFBRCxFQUFPLElBQVAsRUFBZ0I7QUFDM0MsNEJBQVEsR0FBUixDQUFZLElBQVosRUFBa0IsSUFBbEI7QUFDSCxpQkFGRDtBQUdILGFBSkQ7QUFLSDtBQUNELFlBQUksUUFBUSxLQUFLLElBQWpCLEVBQXVCO0FBQ25CLGdCQUFNLFFBQVEsS0FBSyxHQUFMLEVBQWQ7QUFDQSxnQkFBTSxhQUFhLFlBQVksWUFBTTtBQUNqQyxvQkFBTSxVQUFVLEtBQUssSUFBTCxDQUFVLFNBQVYsQ0FBaEI7QUFDQSxvQkFBSSxPQUFKLEVBQWE7QUFDVCw0QkFBUSxHQUFSLENBQVksS0FBSyxHQUFMLEtBQWEsS0FBekIsRUFBZ0MsT0FBaEM7QUFDQSxrQ0FBYyxVQUFkO0FBQ0g7QUFDSixhQU5rQixFQU1o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SkE7QUFPSCxlQUFHO0FBQ0MsdUJBQU87QUFEUjtBQVBBLFNBREg7QUFZSixnQkFBUTtBQUNKLGVBQUc7QUFDQyx1QkFBTztBQURSLGFBREM7QUFJSixlQUFHO0FBQ0MsdUJBQU87QUFEUjtBQUpDO0FBWko7QUFOWixDQTVHVSxDQUFkOztBQTJJQSxJQUFNLGNBQWMsQ0FDaEI7QUFDSSxVQUFNLFlBRFY7QUFFSSxVQUFNLFVBRlY7QUFHSSxXQUFPO0FBQ0gsZ0JBQVE7QUFETCxLQUhYO0FBTUksWUFBUSxDQUNKO0FBQ0ksZ0JBQVE7QUFEWixLQURJLEVBSUosQ0FKSSxFQUtKLENBTEksQ0FOWjtBQWFJLFlBQVEsQ0FDSixDQURJLEVBRUo7QUFDSSxnQkFBUTtBQURaLEtBRkksQ0FiWjtBQW1CSSxlQUFXLENBQ1A7QUFDSSxnQkFBUTtBQURaLEtBRE8sRUFJUDtBQUNJLGdCQUFRO0FBRFosS0FKTztBQW5CZixDQURnQixDQUFwQjs7QUErQkEsSUFBTSxTQUFTLENBQ1g7QUFDSSxVQUFNLFlBRFY7QUFFSSxVQUFNLE1BRlY7QUFHSSxZQUFRO0FBQ0osY0FBTSxTQURGO0FBRUosZUFBTztBQUZILEtBSFo7QUFPSSxXQUFPLENBQUMsQ0FBRCxFQUFJLEdBQUo7QUFQWCxDQURXLENBQWY7O2tCQWFlO0FBQ1gsYUFBUyw4Q0FERTtBQUVYLFdBQU8sR0FGSTtBQUdYLFlBQVEsR0FIRztBQUlYLGNBQVUsTUFKQztBQUtYLGtCQUxXO0FBTVgsb0JBTlc7QUFPWCxjQVBXO0FBUVgsZ0JBUlc7QUFTWDtBQVRXLEMiLCJmaWxlIjoiZ2VuZXJhdGVkLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiBlKHQsbixyKXtmdW5jdGlvbiBzKG8sdSl7aWYoIW5bb10pe2lmKCF0W29dKXt2YXIgYT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2lmKCF1JiZhKXJldHVybiBhKG8sITApO2lmKGkpcmV0dXJuIGkobywhMCk7dmFyIGY9bmV3IEVycm9yKFwiQ2Fubm90IGZpbmQgbW9kdWxlICdcIitvK1wiJ1wiKTt0aHJvdyBmLmNvZGU9XCJNT0RVTEVfTk9UX0ZPVU5EXCIsZn12YXIgbD1uW29dPXtleHBvcnRzOnt9fTt0W29dWzBdLmNhbGwobC5leHBvcnRzLGZ1bmN0aW9uKGUpe3ZhciBuPXRbb11bMV1bZV07cmV0dXJuIHMobj9uOmUpfSxsLGwuZXhwb3J0cyxlLHQsbixyKX1yZXR1cm4gbltvXS5leHBvcnRzfXZhciBpPXR5cGVvZiByZXF1aXJlPT1cImZ1bmN0aW9uXCImJnJlcXVpcmU7Zm9yKHZhciBvPTA7bzxyLmxlbmd0aDtvKyspcyhyW29dKTtyZXR1cm4gc30pIiwiaW1wb3J0IFRlc3RTcGVjIGZyb20gJy4uL3NwZWNzL3NwZWMxJztcbmltcG9ydCBjcmVhdGVWaWV3IGZyb20gJy4vdXRpbC9jcmVhdGUtdmVnYS12aWV3JztcblxuY29uc3QgdG9vbFRpcE9wdGlvbnMgPSB7XG4gICAgLy8gc2hvd0FsbEZpZWxkczogdHJ1ZSxcbiAgICBmaWVsZHM6IFtcbiAgICAgICAge1xuICAgICAgICAgICAgZm9ybWF0VHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICBmaWVsZDogJ3N0b3J0aW5nZW4nLFxuICAgICAgICB9LFxuICAgICAgICB7XG4gICAgICAgICAgICBmb3JtYXRUeXBlOiAnbnVtYmVyJyxcbiAgICAgICAgICAgIGZpZWxkOiAndnVsbGluZycsXG4gICAgICAgIH0sXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcm1hdFR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgZmllbGQ6ICdtZWxkaW5nZW4nLFxuICAgICAgICB9LFxuICAgIF0sXG59O1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICBjcmVhdGVWaWV3KFRlc3RTcGVjLCAnYXBwJywgJ2NhbnZhcycsIHRydWUsICh2aWV3KSA9PiB7XG4gICAgICAgIGlmICh2aWV3ICYmIHZpZXcuc2lnbmFscykge1xuICAgICAgICAgICAgdmlldy5zaWduYWxzLmZvckVhY2goKHNpZ25hbCkgPT4ge1xuICAgICAgICAgICAgICAgIHZpZXcuYWRkU2lnbmFsTGlzdGVuZXIoc2lnbmFsLCAobmFtZSwgZGF0YSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhuYW1lLCBkYXRhKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2aWV3ICYmIHZpZXcuZGF0YSkge1xuICAgICAgICAgICAgY29uc3Qgc3RhbXAgPSBEYXRlLm5vdygpO1xuICAgICAgICAgICAgY29uc3QgZGF0YUxvYWRlZCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXBvcnRzID0gdmlldy5kYXRhKCdyZXBvcnRzJyk7XG4gICAgICAgICAgICAgICAgaWYgKHJlcG9ydHMpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coRGF0ZS5ub3coKSAtIHN0YW1wLCByZXBvcnRzKTtcbiAgICAgICAgICAgICAgICAgICAgY2xlYXJJbnRlcnZhbChkYXRhTG9hZGVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgfVxuICAgIH0pO1xufSk7XG4iLCIvLyBpbXBvcnQgdmVnYSBmcm9tICd2ZWdhJztcbi8vIGltcG9ydCBMIGZyb20gJ2xlYWZsZXQnO1xuLy8gaW1wb3J0IExlYWZsZXRWZWdhIGZyb20gJy4vbGVhZmxldC12ZWdhJztcblxuY29uc3QgdmVnYSA9IHdpbmRvdy52ZWdhO1xuY29uc3QgTCA9IHdpbmRvdy5MO1xuXG5leHBvcnQgZGVmYXVsdCAoc3BlYywgaWQsIHJlbmRlcmVyLCB3aXRoTWFwLCBjYWxsYmFjaykgPT4ge1xuICAgIGlmICh3aXRoTWFwKSB7XG4gICAgICAgIGNvbnN0IG1hcCA9IEwubWFwKGlkLCB7XG4gICAgICAgICAgICB6b29tQW5pbWF0aW9uOiBmYWxzZSxcbiAgICAgICAgfSkuc2V0VmlldyhbNTEuOTMwOTMwMywgNC4zNDkxMjc0XSwgMTMpO1xuXG4gICAgICAgIGRlbGV0ZSBzcGVjLnByb2plY3Rpb25zO1xuXG4gICAgICAgIEwudGlsZUxheWVyKFxuICAgICAgICAgICAgJ2h0dHA6Ly97c30uYmFzZW1hcHMuY2FydG9jZG4uY29tL2xpZ2h0X2FsbC97en0ve3h9L3t5fS5wbmcnLCB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRpb246ICc8YSBocmVmPVwiaHR0cDovL29wZW5zdHJlZXRtYXAub3JnXCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJyxcbiAgICAgICAgICAgICAgICBtYXhab29tOiAxOCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICkuYWRkVG8obWFwKTtcblxuICAgICAgICBjb25zdCBsYXllciA9IEwudmVnYShzcGVjLCB7XG4gICAgICAgICAgICByZW5kZXJlcixcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgbGVnZW5kIHN0YXlzIGluIHBsYWNlXG4gICAgICAgICAgICBkZWxheVJlcGFpbnQ6IHRydWUsXG4gICAgICAgIH0pLmFkZFRvKG1hcCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjYWxsYmFjayhsYXllci5fdmlldyk7XG4gICAgICAgIH0sIDApO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnN0IHZpZXcgPSBuZXcgdmVnYS5WaWV3KHZlZ2EucGFyc2Uoc3BlYykpLnJlbmRlcmVyKHJlbmRlcmVyKS5pbml0aWFsaXplKGAjJHtpZH1gKVxuICAgICAgICAgICAgLmhvdmVyKClcbiAgICAgICAgICAgIC5ydW4oKTtcblxuICAgICAgICBjYWxsYmFjayh2aWV3KTtcbiAgICB9XG59O1xuIiwiLy8gY29uc3QgZGF0YVBhdGggPSAnaHR0cDovL2xvY2FsaG9zdDo4MDAwL2RhdGEvJzsvLyAnLi9kYXRhLyc7XG5jb25zdCBkYXRhUGF0aCA9ICcuL2RhdGEvJztcbmNvbnN0IGltYWdlUGF0aCA9ICcuL2ltZy8nO1xuXG5jb25zdCBzaWduYWxzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ2J1dXJ0X2hvdmVyJyxcbiAgICAgICAgdmFsdWU6IG51bGwsXG4gICAgICAgIG9uOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZXZlbnRzOiAnQGJ1dXJ0Om1vdXNlb3ZlcicsXG4gICAgICAgICAgICAgICAgdXBkYXRlOiAnZGF0dW0nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBldmVudHM6ICdAYnV1cnQ6bW91c2VvdXQnLFxuICAgICAgICAgICAgICAgIHVwZGF0ZTogJ251bGwnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ21vdXNlX3h5JyxcbiAgICAgICAgb246IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBldmVudHM6ICdtb3VzZW1vdmUnLFxuICAgICAgICAgICAgICAgIHVwZGF0ZTogJ3h5KCknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ3Rvb2x0aXBfbW91c2VfeHknLFxuICAgICAgICBvbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGV2ZW50czogJ0BidXVydDptb3VzZW92ZXInLFxuICAgICAgICAgICAgICAgIHVwZGF0ZTogJ3h5KCknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ2RhdGVfc3RhcnQnLFxuICAgICAgICB2YWx1ZTogMyxcbiAgICAgICAgYmluZDoge1xuICAgICAgICAgICAgaW5wdXQ6ICdyYW5nZScsXG4gICAgICAgICAgICBtaW46IDAsXG4gICAgICAgICAgICBtYXg6IDEwMCxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ2RhdGVfZW5kJyxcbiAgICAgICAgdmFsdWU6IDQsXG4gICAgICAgIGJpbmQ6IHtcbiAgICAgICAgICAgIGlucHV0OiAncmFuZ2UnLFxuICAgICAgICAgICAgbWluOiAwLFxuICAgICAgICAgICAgbWF4OiAxMDAsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdzZWxlY3RlZF9kYXRlX3JhbmdlJyxcbiAgICAgICAgdXBkYXRlOiAnW2RhdGVfc3RhcnQsIGRhdGVfZW5kXScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICd6b29tJyxcbiAgICAgICAgdmFsdWU6IDEzLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnbGF0aXR1ZGUnLFxuICAgICAgICB2YWx1ZTogNTEuOTMwOTMwMyxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ2xvbmdpdHVkZScsXG4gICAgICAgIHZhbHVlOiA0LjM0OTEyNzQsXG4gICAgfSxcbl07XG5cblxuY29uc3QgZGF0YSA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdyZXBvcnRzJyxcbiAgICAgICAgLy8gdXJsOiBgJHtkYXRhUGF0aH1yZXBvcnRzLmNzdj8ke0RhdGUubm93KCl9YCxcbiAgICAgICAgdXJsOiBgJHtkYXRhUGF0aH1yZXBvcnRzLmNzdmAsXG4gICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgdHlwZTogJ2RzdicsXG4gICAgICAgICAgICBkZWxpbWl0ZXI6ICc7JyxcbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnNmb3JtOiBbXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgICAgdHlwZTogJ2dlb3BvaW50JyxcbiAgICAgICAgICAgIC8vICAgICBwcm9qZWN0aW9uOiAncHJvamVjdGlvbicsXG4gICAgICAgICAgICAvLyAgICAgZmllbGRzOiBbXG4gICAgICAgICAgICAvLyAgICAgICAgICd4JyxcbiAgICAgICAgICAgIC8vICAgICAgICAgJ3knLFxuICAgICAgICAgICAgLy8gICAgIF0sXG4gICAgICAgICAgICAvLyAgICAgYXM6IFtcbiAgICAgICAgICAgIC8vICAgICAgICAgJ3gyJyxcbiAgICAgICAgICAgIC8vICAgICAgICAgJ3kyJyxcbiAgICAgICAgICAgIC8vICAgICBdLFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZm9ybXVsYScsXG4gICAgICAgICAgICAgICAgYXM6ICdkYXRldGltZScsXG4gICAgICAgICAgICAgICAgZXhwcjogJ2RhdGV0aW1lKGRhdHVtLmRhdGUpJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAvLyB7XG4gICAgICAgICAgICAvLyAgICAgJ3R5cGUnOiAnZmlsdGVyJyxcbiAgICAgICAgICAgIC8vICAgICAnZXhwcic6ICdkYXR1bS5kYXRldGltZSA+IHNlbGVjdGVkX2RhdGVfcmFuZ2VbMF0gJiYgZGF0dW0uZGF0ZXRpbWUgPCBzZWxlY3RlZF9kYXRlX3JhbmdlWzFdJ1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnZGF0YScsXG4gICAgICAgIHVybDogYCR7ZGF0YVBhdGh9ZGF0YS5qc29uYCxcbiAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICB0eXBlOiAnanNvbicsXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdidXVydGVuJyxcbiAgICAgICAgdXJsOiBgJHtkYXRhUGF0aH1idXVydGVuLnRvcG8uanNvbmAsXG4gICAgICAgIGZvcm1hdDoge1xuICAgICAgICAgICAgdHlwZTogJ3RvcG9qc29uJyxcbiAgICAgICAgICAgIGZlYXR1cmU6ICdHZWJpZWRlbicsXG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zZm9ybTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdnZW9wYXRoJyxcbiAgICAgICAgICAgICAgICBwcm9qZWN0aW9uOiAncHJvamVjdGlvbicsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdsb29rdXAnLFxuICAgICAgICAgICAgICAgIGZyb206ICdkYXRhJyxcbiAgICAgICAgICAgICAgICBrZXk6ICduYW1lJyxcbiAgICAgICAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICAgICAgICAgJ3Byb3BlcnRpZXMuTkFBTScsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtcbiAgICAgICAgICAgICAgICAgICAgJ3Z1bGxpbmcnLFxuICAgICAgICAgICAgICAgICAgICAnbWVsZGluZ2VuJyxcbiAgICAgICAgICAgICAgICAgICAgJ3N0b3J0aW5nZW4nLFxuICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnYnV1cnRlbjInLFxuICAgICAgICBzb3VyY2U6ICdidXVydGVuJyxcbiAgICAgICAgdHJhbnNmb3JtOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2xvb2t1cCcsXG4gICAgICAgICAgICAgICAgZnJvbTogJ2RhdGEnLFxuICAgICAgICAgICAgICAgIGtleTogJ25hbWUnLFxuICAgICAgICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAgICAgICAgICAncHJvcGVydGllcy5OQUFNJyxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIHZhbHVlczogW1xuICAgICAgICAgICAgICAgICAgICAndnVsbGluZycsXG4gICAgICAgICAgICAgICAgICAgICdtZWxkaW5nZW4nLFxuICAgICAgICAgICAgICAgICAgICAnc3RvcnRpbmdlbicsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2ZpbHRlcicsXG4gICAgICAgICAgICAgICAgZXhwcjogJ2RhdHVtLnZ1bGxpbmcgIT0gbnVsbCcsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgIH0sXG5dO1xuXG5jb25zdCBtYXJrcyA9IFtcbiAgICB7XG4gICAgICAgIHR5cGU6ICdwYXRoJyxcbiAgICAgICAgbmFtZTogJ2J1dXJ0JyxcbiAgICAgICAgZnJvbToge1xuICAgICAgICAgICAgZGF0YTogJ2J1dXJ0ZW4nLFxuICAgICAgICB9LFxuICAgICAgICBlbmNvZGU6IHtcbiAgICAgICAgICAgIGVudGVyOiB7XG4gICAgICAgICAgICAgICAgZmlsbE9wYWNpdHk6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDAuMyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAxLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnI2VlMDAwMCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBmaWxsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiAnIzAwZWUwMCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGU6IHtcbiAgICAgICAgICAgICAgICBwYXRoOiB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAncGF0aCcsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgbmFtZTogJ2J1dXJ0LWluZm8nLFxuICAgICAgICBlbmNvZGU6IHtcbiAgICAgICAgICAgIGVudGVyOiB7XG4gICAgICAgICAgICAgICAgZm9udDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ0J1dGNoZXJtYW4gQ2FwcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBhbGlnbjoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ2xlZnQnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZm9udFNpemU6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDEyLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgd2lkdGg6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IDUwLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgYmFzZWxpbmU6IHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6ICdib3R0b20nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZmlsbDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJyMzMzMnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBkYXRlOiB7XG4gICAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgICAgICBzaWduYWw6ICdtb3VzZV94eScsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB4OiB7XG4gICAgICAgICAgICAgICAgICAgIHNpZ25hbDogJ21vdXNlX3h5WzBdJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgICAgICAgc2lnbmFsOiAnbW91c2VfeHlbMV0nLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgIH0sXG4gICAge1xuICAgICAgICB0eXBlOiAnaW1hZ2UnLFxuICAgICAgICBuYW1lOiAncmVwb3J0X2ltYWdlJyxcbiAgICAgICAgZnJvbToge1xuICAgICAgICAgICAgZGF0YTogJ3JlcG9ydHMnLFxuICAgICAgICB9LFxuICAgICAgICBlbmNvZGU6IHtcbiAgICAgICAgICAgIGVudGVyOiB7XG4gICAgICAgICAgICAgICAgdXJsOiB7XG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBgJHtpbWFnZVBhdGh9YWZ2YWwucG5nYCxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHg6IHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICd4MicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB5OiB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAneTInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBkYXRlOiB7XG4gICAgICAgICAgICAgICAgeDoge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3gyJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICd5MicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zZm9ybTogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdnZW9wb2ludCcsXG4gICAgICAgICAgICAgICAgcHJvamVjdGlvbjogJ3Byb2plY3Rpb24nLFxuICAgICAgICAgICAgICAgIGZpZWxkczogW1xuICAgICAgICAgICAgICAgICAgICAneCcsXG4gICAgICAgICAgICAgICAgICAgICd5JyxcbiAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgIGFzOiBbXG4gICAgICAgICAgICAgICAgICAgICd4MicsXG4gICAgICAgICAgICAgICAgICAgICd5MicsXG4gICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgbmFtZTogJ3JlcG9ydF90ZXh0JyxcbiAgICAgICAgZnJvbToge1xuICAgICAgICAgICAgZGF0YTogJ3JlcG9ydHMnLFxuICAgICAgICB9LFxuICAgICAgICBlbmNvZGU6IHtcbiAgICAgICAgICAgIGVudGVyOiB7XG4gICAgICAgICAgICAgICAgdGV4dDoge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogJ3gnLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeDoge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3gyJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHk6IHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQ6ICd5MicsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB1cGRhdGU6IHtcbiAgICAgICAgICAgICAgICB4OiB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAneDInLFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgeToge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ3kyJyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuXTtcblxuXG5jb25zdCBwcm9qZWN0aW9ucyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdwcm9qZWN0aW9uJyxcbiAgICAgICAgdHlwZTogJ21lcmNhdG9yJyxcbiAgICAgICAgc2NhbGU6IHtcbiAgICAgICAgICAgIHNpZ25hbDogJzI1Nipwb3coMix6b29tKS8yL1BJJyxcbiAgICAgICAgfSxcbiAgICAgICAgcm90YXRlOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2lnbmFsOiAnLWxvbmdpdHVkZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIDAsXG4gICAgICAgIF0sXG4gICAgICAgIGNlbnRlcjogW1xuICAgICAgICAgICAgMCxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaWduYWw6ICdsYXRpdHVkZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdLFxuICAgICAgICB0cmFuc2xhdGU6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzaWduYWw6ICd3aWR0aC8yJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2lnbmFsOiAnaGVpZ2h0LzInLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuXTtcblxuY29uc3Qgc2NhbGVzID0gW1xuICAgIHtcbiAgICAgICAgbmFtZTogJ2RhdGVfc2NhbGUnLFxuICAgICAgICB0eXBlOiAndGltZScsXG4gICAgICAgIGRvbWFpbjoge1xuICAgICAgICAgICAgZGF0YTogJ3JlcG9ydHMnLFxuICAgICAgICAgICAgZmllbGQ6ICdkYXRldGltZScsXG4gICAgICAgIH0sXG4gICAgICAgIHJhbmdlOiBbMCwgMTAwXSxcbiAgICB9LFxuXTtcblxuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgJHNjaGVtYTogJ2h0dHBzOi8vdmVnYS5naXRodWIuaW8vc2NoZW1hL3ZlZ2EvdjMuMC5qc29uJyxcbiAgICB3aWR0aDogOTAwLFxuICAgIGhlaWdodDogNjAwLFxuICAgIGF1dG9zaXplOiAnbm9uZScsXG4gICAgc2NhbGVzLFxuICAgIHNpZ25hbHMsXG4gICAgZGF0YSxcbiAgICBtYXJrcyxcbiAgICBwcm9qZWN0aW9ucyxcbn07XG4iXX0=
