(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
'use strict';

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

var _spec8a = require('../src/specs/spec8a');

var _spec8a2 = _interopRequireDefault(_spec8a);

var _spec8b = require('../src/specs/spec8b');

var _spec8b2 = _interopRequireDefault(_spec8b);

var _createVegaView = require('../src/util/create-vega-view');

var _createVegaView2 = _interopRequireDefault(_createVegaView);

var _generateSpec = require('../src/util/generate-spec');

var _generateSpec2 = _interopRequireDefault(_generateSpec);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Vega rendering a map using leaflet-vega

window.addEventListener('DOMContentLoaded', function () {
    var view1 = null;
    var view2 = null;

    var connect = function connect() {
        view2.addSignalListener('detailDomain', function (name, value) {
            view1.signal('detailDomain', value).run();
        });
    };

    (0, _createVegaView2.default)({
        spec: _spec8a2.default,
        id: 'app1',
        renderer: 'svg',
        addLeaflet: false,
        addTooltip: true,
        tooltipOptions: {
            showAllFields: false,
            fields: [{
                formatType: 'string',
                field: 'name',
                title: 'buurt'
            }, {
                formatType: 'number',
                field: 'reports',
                title: 'reports'
            }, {
                formatType: 'number',
                field: 'dumps',
                title: 'dumps'
            }, {
                formatType: 'number',
                field: 'fillperc',
                title: 'fillperc'
            }]
        },
        callback: function callback(view) {
            view1 = view;
            if (view1 !== null && view2 !== null) {
                connect();
            }
        }
    });

    (0, _createVegaView2.default)({
        spec: _spec8b2.default,
        id: 'app2',
        renderer: 'canvas',
        addLeaflet: false,
        addTooltip: false,
        tooltipOptions: {},
        callback: function callback(view) {
            view2 = view;
            if (view1 !== null && view2 !== null) {
                connect();
            }
        }
    });

    document.getElementById('generate-spec1').addEventListener('click', function () {
        return (0, _generateSpec2.default)(_spec8a2.default);
    });

    document.getElementById('generate-spec2').addEventListener('click', function () {
        return (0, _generateSpec2.default)(_spec8b2.default);
    });
});

},{"../src/specs/spec8a":311,"../src/specs/spec8b":312,"../src/util/create-vega-view":314,"../src/util/generate-spec":315,"ramda":2}],2:[function(require,module,exports){
module.exports = {
  F: require('./src/F'),
  T: require('./src/T'),
  __: require('./src/__'),
  add: require('./src/add'),
  addIndex: require('./src/addIndex'),
  adjust: require('./src/adjust'),
  all: require('./src/all'),
  allPass: require('./src/allPass'),
  always: require('./src/always'),
  and: require('./src/and'),
  any: require('./src/any'),
  anyPass: require('./src/anyPass'),
  ap: require('./src/ap'),
  aperture: require('./src/aperture'),
  append: require('./src/append'),
  apply: require('./src/apply'),
  applySpec: require('./src/applySpec'),
  ascend: require('./src/ascend'),
  assoc: require('./src/assoc'),
  assocPath: require('./src/assocPath'),
  binary: require('./src/binary'),
  bind: require('./src/bind'),
  both: require('./src/both'),
  call: require('./src/call'),
  chain: require('./src/chain'),
  clamp: require('./src/clamp'),
  clone: require('./src/clone'),
  comparator: require('./src/comparator'),
  complement: require('./src/complement'),
  compose: require('./src/compose'),
  composeK: require('./src/composeK'),
  composeP: require('./src/composeP'),
  concat: require('./src/concat'),
  cond: require('./src/cond'),
  construct: require('./src/construct'),
  constructN: require('./src/constructN'),
  contains: require('./src/contains'),
  converge: require('./src/converge'),
  countBy: require('./src/countBy'),
  curry: require('./src/curry'),
  curryN: require('./src/curryN'),
  dec: require('./src/dec'),
  descend: require('./src/descend'),
  defaultTo: require('./src/defaultTo'),
  difference: require('./src/difference'),
  differenceWith: require('./src/differenceWith'),
  dissoc: require('./src/dissoc'),
  dissocPath: require('./src/dissocPath'),
  divide: require('./src/divide'),
  drop: require('./src/drop'),
  dropLast: require('./src/dropLast'),
  dropLastWhile: require('./src/dropLastWhile'),
  dropRepeats: require('./src/dropRepeats'),
  dropRepeatsWith: require('./src/dropRepeatsWith'),
  dropWhile: require('./src/dropWhile'),
  either: require('./src/either'),
  empty: require('./src/empty'),
  eqBy: require('./src/eqBy'),
  eqProps: require('./src/eqProps'),
  equals: require('./src/equals'),
  evolve: require('./src/evolve'),
  filter: require('./src/filter'),
  find: require('./src/find'),
  findIndex: require('./src/findIndex'),
  findLast: require('./src/findLast'),
  findLastIndex: require('./src/findLastIndex'),
  flatten: require('./src/flatten'),
  flip: require('./src/flip'),
  forEach: require('./src/forEach'),
  forEachObjIndexed: require('./src/forEachObjIndexed'),
  fromPairs: require('./src/fromPairs'),
  groupBy: require('./src/groupBy'),
  groupWith: require('./src/groupWith'),
  gt: require('./src/gt'),
  gte: require('./src/gte'),
  has: require('./src/has'),
  hasIn: require('./src/hasIn'),
  head: require('./src/head'),
  identical: require('./src/identical'),
  identity: require('./src/identity'),
  ifElse: require('./src/ifElse'),
  inc: require('./src/inc'),
  indexBy: require('./src/indexBy'),
  indexOf: require('./src/indexOf'),
  init: require('./src/init'),
  insert: require('./src/insert'),
  insertAll: require('./src/insertAll'),
  intersection: require('./src/intersection'),
  intersectionWith: require('./src/intersectionWith'),
  intersperse: require('./src/intersperse'),
  into: require('./src/into'),
  invert: require('./src/invert'),
  invertObj: require('./src/invertObj'),
  invoker: require('./src/invoker'),
  is: require('./src/is'),
  isArrayLike: require('./src/isArrayLike'),
  isEmpty: require('./src/isEmpty'),
  isNil: require('./src/isNil'),
  join: require('./src/join'),
  juxt: require('./src/juxt'),
  keys: require('./src/keys'),
  keysIn: require('./src/keysIn'),
  last: require('./src/last'),
  lastIndexOf: require('./src/lastIndexOf'),
  length: require('./src/length'),
  lens: require('./src/lens'),
  lensIndex: require('./src/lensIndex'),
  lensPath: require('./src/lensPath'),
  lensProp: require('./src/lensProp'),
  lift: require('./src/lift'),
  liftN: require('./src/liftN'),
  lt: require('./src/lt'),
  lte: require('./src/lte'),
  map: require('./src/map'),
  mapAccum: require('./src/mapAccum'),
  mapAccumRight: require('./src/mapAccumRight'),
  mapObjIndexed: require('./src/mapObjIndexed'),
  match: require('./src/match'),
  mathMod: require('./src/mathMod'),
  max: require('./src/max'),
  maxBy: require('./src/maxBy'),
  mean: require('./src/mean'),
  median: require('./src/median'),
  memoize: require('./src/memoize'),
  merge: require('./src/merge'),
  mergeAll: require('./src/mergeAll'),
  mergeWith: require('./src/mergeWith'),
  mergeWithKey: require('./src/mergeWithKey'),
  min: require('./src/min'),
  minBy: require('./src/minBy'),
  modulo: require('./src/modulo'),
  multiply: require('./src/multiply'),
  nAry: require('./src/nAry'),
  negate: require('./src/negate'),
  none: require('./src/none'),
  not: require('./src/not'),
  nth: require('./src/nth'),
  nthArg: require('./src/nthArg'),
  objOf: require('./src/objOf'),
  of: require('./src/of'),
  omit: require('./src/omit'),
  once: require('./src/once'),
  or: require('./src/or'),
  over: require('./src/over'),
  pair: require('./src/pair'),
  partial: require('./src/partial'),
  partialRight: require('./src/partialRight'),
  partition: require('./src/partition'),
  path: require('./src/path'),
  pathEq: require('./src/pathEq'),
  pathOr: require('./src/pathOr'),
  pathSatisfies: require('./src/pathSatisfies'),
  pick: require('./src/pick'),
  pickAll: require('./src/pickAll'),
  pickBy: require('./src/pickBy'),
  pipe: require('./src/pipe'),
  pipeK: require('./src/pipeK'),
  pipeP: require('./src/pipeP'),
  pluck: require('./src/pluck'),
  prepend: require('./src/prepend'),
  product: require('./src/product'),
  project: require('./src/project'),
  prop: require('./src/prop'),
  propEq: require('./src/propEq'),
  propIs: require('./src/propIs'),
  propOr: require('./src/propOr'),
  propSatisfies: require('./src/propSatisfies'),
  props: require('./src/props'),
  range: require('./src/range'),
  reduce: require('./src/reduce'),
  reduceBy: require('./src/reduceBy'),
  reduceRight: require('./src/reduceRight'),
  reduceWhile: require('./src/reduceWhile'),
  reduced: require('./src/reduced'),
  reject: require('./src/reject'),
  remove: require('./src/remove'),
  repeat: require('./src/repeat'),
  replace: require('./src/replace'),
  reverse: require('./src/reverse'),
  scan: require('./src/scan'),
  sequence: require('./src/sequence'),
  set: require('./src/set'),
  slice: require('./src/slice'),
  sort: require('./src/sort'),
  sortBy: require('./src/sortBy'),
  sortWith: require('./src/sortWith'),
  split: require('./src/split'),
  splitAt: require('./src/splitAt'),
  splitEvery: require('./src/splitEvery'),
  splitWhen: require('./src/splitWhen'),
  subtract: require('./src/subtract'),
  sum: require('./src/sum'),
  symmetricDifference: require('./src/symmetricDifference'),
  symmetricDifferenceWith: require('./src/symmetricDifferenceWith'),
  tail: require('./src/tail'),
  take: require('./src/take'),
  takeLast: require('./src/takeLast'),
  takeLastWhile: require('./src/takeLastWhile'),
  takeWhile: require('./src/takeWhile'),
  tap: require('./src/tap'),
  test: require('./src/test'),
  times: require('./src/times'),
  toLower: require('./src/toLower'),
  toPairs: require('./src/toPairs'),
  toPairsIn: require('./src/toPairsIn'),
  toString: require('./src/toString'),
  toUpper: require('./src/toUpper'),
  transduce: require('./src/transduce'),
  transpose: require('./src/transpose'),
  traverse: require('./src/traverse'),
  trim: require('./src/trim'),
  tryCatch: require('./src/tryCatch'),
  type: require('./src/type'),
  unapply: require('./src/unapply'),
  unary: require('./src/unary'),
  uncurryN: require('./src/uncurryN'),
  unfold: require('./src/unfold'),
  union: require('./src/union'),
  unionWith: require('./src/unionWith'),
  uniq: require('./src/uniq'),
  uniqBy: require('./src/uniqBy'),
  uniqWith: require('./src/uniqWith'),
  unless: require('./src/unless'),
  unnest: require('./src/unnest'),
  until: require('./src/until'),
  update: require('./src/update'),
  useWith: require('./src/useWith'),
  values: require('./src/values'),
  valuesIn: require('./src/valuesIn'),
  view: require('./src/view'),
  when: require('./src/when'),
  where: require('./src/where'),
  whereEq: require('./src/whereEq'),
  without: require('./src/without'),
  xprod: require('./src/xprod'),
  zip: require('./src/zip'),
  zipObj: require('./src/zipObj'),
  zipWith: require('./src/zipWith')
};

},{"./src/F":3,"./src/T":4,"./src/__":5,"./src/add":6,"./src/addIndex":7,"./src/adjust":8,"./src/all":9,"./src/allPass":10,"./src/always":11,"./src/and":12,"./src/any":13,"./src/anyPass":14,"./src/ap":15,"./src/aperture":16,"./src/append":17,"./src/apply":18,"./src/applySpec":19,"./src/ascend":20,"./src/assoc":21,"./src/assocPath":22,"./src/binary":23,"./src/bind":24,"./src/both":25,"./src/call":26,"./src/chain":27,"./src/clamp":28,"./src/clone":29,"./src/comparator":30,"./src/complement":31,"./src/compose":32,"./src/composeK":33,"./src/composeP":34,"./src/concat":35,"./src/cond":36,"./src/construct":37,"./src/constructN":38,"./src/contains":39,"./src/converge":40,"./src/countBy":41,"./src/curry":42,"./src/curryN":43,"./src/dec":44,"./src/defaultTo":45,"./src/descend":46,"./src/difference":47,"./src/differenceWith":48,"./src/dissoc":49,"./src/dissocPath":50,"./src/divide":51,"./src/drop":52,"./src/dropLast":53,"./src/dropLastWhile":54,"./src/dropRepeats":55,"./src/dropRepeatsWith":56,"./src/dropWhile":57,"./src/either":58,"./src/empty":59,"./src/eqBy":60,"./src/eqProps":61,"./src/equals":62,"./src/evolve":63,"./src/filter":64,"./src/find":65,"./src/findIndex":66,"./src/findLast":67,"./src/findLastIndex":68,"./src/flatten":69,"./src/flip":70,"./src/forEach":71,"./src/forEachObjIndexed":72,"./src/fromPairs":73,"./src/groupBy":74,"./src/groupWith":75,"./src/gt":76,"./src/gte":77,"./src/has":78,"./src/hasIn":79,"./src/head":80,"./src/identical":81,"./src/identity":82,"./src/ifElse":83,"./src/inc":84,"./src/indexBy":85,"./src/indexOf":86,"./src/init":87,"./src/insert":88,"./src/insertAll":89,"./src/intersection":160,"./src/intersectionWith":161,"./src/intersperse":162,"./src/into":163,"./src/invert":164,"./src/invertObj":165,"./src/invoker":166,"./src/is":167,"./src/isArrayLike":168,"./src/isEmpty":169,"./src/isNil":170,"./src/join":171,"./src/juxt":172,"./src/keys":173,"./src/keysIn":174,"./src/last":175,"./src/lastIndexOf":176,"./src/length":177,"./src/lens":178,"./src/lensIndex":179,"./src/lensPath":180,"./src/lensProp":181,"./src/lift":182,"./src/liftN":183,"./src/lt":184,"./src/lte":185,"./src/map":186,"./src/mapAccum":187,"./src/mapAccumRight":188,"./src/mapObjIndexed":189,"./src/match":190,"./src/mathMod":191,"./src/max":192,"./src/maxBy":193,"./src/mean":194,"./src/median":195,"./src/memoize":196,"./src/merge":197,"./src/mergeAll":198,"./src/mergeWith":199,"./src/mergeWithKey":200,"./src/min":201,"./src/minBy":202,"./src/modulo":203,"./src/multiply":204,"./src/nAry":205,"./src/negate":206,"./src/none":207,"./src/not":208,"./src/nth":209,"./src/nthArg":210,"./src/objOf":211,"./src/of":212,"./src/omit":213,"./src/once":214,"./src/or":215,"./src/over":216,"./src/pair":217,"./src/partial":218,"./src/partialRight":219,"./src/partition":220,"./src/path":221,"./src/pathEq":222,"./src/pathOr":223,"./src/pathSatisfies":224,"./src/pick":225,"./src/pickAll":226,"./src/pickBy":227,"./src/pipe":228,"./src/pipeK":229,"./src/pipeP":230,"./src/pluck":231,"./src/prepend":232,"./src/product":233,"./src/project":234,"./src/prop":235,"./src/propEq":236,"./src/propIs":237,"./src/propOr":238,"./src/propSatisfies":239,"./src/props":240,"./src/range":241,"./src/reduce":242,"./src/reduceBy":243,"./src/reduceRight":244,"./src/reduceWhile":245,"./src/reduced":246,"./src/reject":247,"./src/remove":248,"./src/repeat":249,"./src/replace":250,"./src/reverse":251,"./src/scan":252,"./src/sequence":253,"./src/set":254,"./src/slice":255,"./src/sort":256,"./src/sortBy":257,"./src/sortWith":258,"./src/split":259,"./src/splitAt":260,"./src/splitEvery":261,"./src/splitWhen":262,"./src/subtract":263,"./src/sum":264,"./src/symmetricDifference":265,"./src/symmetricDifferenceWith":266,"./src/tail":267,"./src/take":268,"./src/takeLast":269,"./src/takeLastWhile":270,"./src/takeWhile":271,"./src/tap":272,"./src/test":273,"./src/times":274,"./src/toLower":275,"./src/toPairs":276,"./src/toPairsIn":277,"./src/toString":278,"./src/toUpper":279,"./src/transduce":280,"./src/transpose":281,"./src/traverse":282,"./src/trim":283,"./src/tryCatch":284,"./src/type":285,"./src/unapply":286,"./src/unary":287,"./src/uncurryN":288,"./src/unfold":289,"./src/union":290,"./src/unionWith":291,"./src/uniq":292,"./src/uniqBy":293,"./src/uniqWith":294,"./src/unless":295,"./src/unnest":296,"./src/until":297,"./src/update":298,"./src/useWith":299,"./src/values":300,"./src/valuesIn":301,"./src/view":302,"./src/when":303,"./src/where":304,"./src/whereEq":305,"./src/without":306,"./src/xprod":307,"./src/zip":308,"./src/zipObj":309,"./src/zipWith":310}],3:[function(require,module,exports){
var always = require('./always');


/**
 * A function that always returns `false`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.T
 * @example
 *
 *      R.F(); //=> false
 */
module.exports = always(false);

},{"./always":11}],4:[function(require,module,exports){
var always = require('./always');


/**
 * A function that always returns `true`. Any passed in parameters are ignored.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig * -> Boolean
 * @param {*}
 * @return {Boolean}
 * @see R.always, R.F
 * @example
 *
 *      R.T(); //=> true
 */
module.exports = always(true);

},{"./always":11}],5:[function(require,module,exports){
/**
 * A special placeholder value used to specify "gaps" within curried functions,
 * allowing partial application of any combination of arguments, regardless of
 * their positions.
 *
 * If `g` is a curried ternary function and `_` is `R.__`, the following are
 * equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2, _)(1, 3)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @constant
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @example
 *
 *      var greet = R.replace('{name}', R.__, 'Hello, {name}!');
 *      greet('Alice'); //=> 'Hello, Alice!'
 */
module.exports = {'@@functional/placeholder': true};

},{}],6:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Adds two values.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a
 * @param {Number} b
 * @return {Number}
 * @see R.subtract
 * @example
 *
 *      R.add(2, 3);       //=>  5
 *      R.add(7)(10);      //=> 17
 */
module.exports = _curry2(function add(a, b) {
  return Number(a) + Number(b);
});

},{"./internal/_curry2":104}],7:[function(require,module,exports){
var _concat = require('./internal/_concat');
var _curry1 = require('./internal/_curry1');
var curryN = require('./curryN');


/**
 * Creates a new list iteration function from an existing one by adding two new
 * parameters to its callback function: the current index, and the entire list.
 *
 * This would turn, for instance, Ramda's simple `map` function into one that
 * more closely resembles `Array.prototype.map`. Note that this will only work
 * for functions in which the iteration callback function is the first
 * parameter, and where the list is the last parameter. (This latter might be
 * unimportant if the list parameter is not used.)
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Function
 * @category List
 * @sig ((a ... -> b) ... -> [a] -> *) -> (a ..., Int, [a] -> b) ... -> [a] -> *)
 * @param {Function} fn A list iteration function that does not pass index or list to its callback
 * @return {Function} An altered list iteration function that passes (item, index, list) to its callback
 * @example
 *
 *      var mapIndexed = R.addIndex(R.map);
 *      mapIndexed((val, idx) => idx + '-' + val, ['f', 'o', 'o', 'b', 'a', 'r']);
 *      //=> ['0-f', '1-o', '2-o', '3-b', '4-a', '5-r']
 */
module.exports = _curry1(function addIndex(fn) {
  return curryN(fn.length, function() {
    var idx = 0;
    var origFn = arguments[0];
    var list = arguments[arguments.length - 1];
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = function() {
      var result = origFn.apply(this, _concat(arguments, [idx, list]));
      idx += 1;
      return result;
    };
    return fn.apply(this, args);
  });
});

},{"./curryN":43,"./internal/_concat":99,"./internal/_curry1":103}],8:[function(require,module,exports){
var _concat = require('./internal/_concat');
var _curry3 = require('./internal/_curry3');


/**
 * Applies a function to the value at the given index of an array, returning a
 * new copy of the array with the element at the given index replaced with the
 * result of the function application.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig (a -> a) -> Number -> [a] -> [a]
 * @param {Function} fn The function to apply.
 * @param {Number} idx The index.
 * @param {Array|Arguments} list An array-like object whose value
 *        at the supplied index will be replaced.
 * @return {Array} A copy of the supplied array-like object with
 *         the element at index `idx` replaced with the value
 *         returned by applying `fn` to the existing element.
 * @see R.update
 * @example
 *
 *      R.adjust(R.add(10), 1, [1, 2, 3]);     //=> [1, 12, 3]
 *      R.adjust(R.add(10))(1)([1, 2, 3]);     //=> [1, 12, 3]
 * @symb R.adjust(f, -1, [a, b]) = [a, f(b)]
 * @symb R.adjust(f, 0, [a, b]) = [f(a), b]
 */
module.exports = _curry3(function adjust(fn, idx, list) {
  if (idx >= list.length || idx < -list.length) {
    return list;
  }
  var start = idx < 0 ? list.length : 0;
  var _idx = start + idx;
  var _list = _concat(list);
  _list[_idx] = fn(list[_idx]);
  return _list;
});

},{"./internal/_concat":99,"./internal/_curry3":105}],9:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xall = require('./internal/_xall');


/**
 * Returns `true` if all elements of the list match the predicate, `false` if
 * there are any that don't.
 *
 * Dispatches to the `all` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by every element, `false`
 *         otherwise.
 * @see R.any, R.none, R.transduce
 * @example
 *
 *      var equals3 = R.equals(3);
 *      R.all(equals3)([3, 3, 3, 3]); //=> true
 *      R.all(equals3)([3, 3, 1, 3]); //=> false
 */
module.exports = _curry2(_dispatchable(['all'], _xall, function all(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (!fn(list[idx])) {
      return false;
    }
    idx += 1;
  }
  return true;
}));

},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xall":140}],10:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var curryN = require('./curryN');
var max = require('./max');
var pluck = require('./pluck');
var reduce = require('./reduce');


/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if every one of the provided predicates is satisfied
 * by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.anyPass
 * @example
 *
 *      var isQueen = R.propEq('rank', 'Q');
 *      var isSpade = R.propEq('suit', '♠︎');
 *      var isQueenOfSpades = R.allPass([isQueen, isSpade]);
 *
 *      isQueenOfSpades({rank: 'Q', suit: '♣︎'}); //=> false
 *      isQueenOfSpades({rank: 'Q', suit: '♠︎'}); //=> true
 */
module.exports = _curry1(function allPass(preds) {
  return curryN(reduce(max, 0, pluck('length', preds)), function() {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (!preds[idx].apply(this, arguments)) {
        return false;
      }
      idx += 1;
    }
    return true;
  });
});

},{"./curryN":43,"./internal/_curry1":103,"./max":192,"./pluck":231,"./reduce":242}],11:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Returns a function that always returns the given value. Note that for
 * non-primitives the value returned is a reference to the original value.
 *
 * This function is known as `const`, `constant`, or `K` (for K combinator) in
 * other languages and libraries.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> (* -> a)
 * @param {*} val The value to wrap in a function
 * @return {Function} A Function :: * -> val.
 * @example
 *
 *      var t = R.always('Tee');
 *      t(); //=> 'Tee'
 */
module.exports = _curry1(function always(val) {
  return function() {
    return val;
  };
});

},{"./internal/_curry1":103}],12:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns `true` if both arguments are `true`; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if it is falsy, otherwise the second argument.
 * @see R.both
 * @example
 *
 *      R.and(true, true); //=> true
 *      R.and(true, false); //=> false
 *      R.and(false, true); //=> false
 *      R.and(false, false); //=> false
 */
module.exports = _curry2(function and(a, b) {
  return a && b;
});

},{"./internal/_curry2":104}],13:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xany = require('./internal/_xany');


/**
 * Returns `true` if at least one of elements of the list match the predicate,
 * `false` otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is satisfied by at least one element, `false`
 *         otherwise.
 * @see R.all, R.none, R.transduce
 * @example
 *
 *      var lessThan0 = R.flip(R.lt)(0);
 *      var lessThan2 = R.flip(R.lt)(2);
 *      R.any(lessThan0)([1, 2]); //=> false
 *      R.any(lessThan2)([1, 2]); //=> true
 */
module.exports = _curry2(_dispatchable(['any'], _xany, function any(fn, list) {
  var idx = 0;
  while (idx < list.length) {
    if (fn(list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
}));

},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xany":141}],14:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var curryN = require('./curryN');
var max = require('./max');
var pluck = require('./pluck');
var reduce = require('./reduce');


/**
 * Takes a list of predicates and returns a predicate that returns true for a
 * given list of arguments if at least one of the provided predicates is
 * satisfied by those arguments.
 *
 * The function returned is a curried function whose arity matches that of the
 * highest-arity predicate.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Logic
 * @sig [(*... -> Boolean)] -> (*... -> Boolean)
 * @param {Array} predicates An array of predicates to check
 * @return {Function} The combined predicate
 * @see R.allPass
 * @example
 *
 *      var isClub = R.propEq('suit', '♣');
 *      var isSpade = R.propEq('suit', '♠');
 *      var isBlackCard = R.anyPass([isClub, isSpade]);
 *
 *      isBlackCard({rank: '10', suit: '♣'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♠'}); //=> true
 *      isBlackCard({rank: 'Q', suit: '♦'}); //=> false
 */
module.exports = _curry1(function anyPass(preds) {
  return curryN(reduce(max, 0, pluck('length', preds)), function() {
    var idx = 0;
    var len = preds.length;
    while (idx < len) {
      if (preds[idx].apply(this, arguments)) {
        return true;
      }
      idx += 1;
    }
    return false;
  });
});

},{"./curryN":43,"./internal/_curry1":103,"./max":192,"./pluck":231,"./reduce":242}],15:[function(require,module,exports){
var _concat = require('./internal/_concat');
var _curry2 = require('./internal/_curry2');
var _reduce = require('./internal/_reduce');
var map = require('./map');


/**
 * ap applies a list of functions to a list of values.
 *
 * Dispatches to the `ap` method of the second argument, if present. Also
 * treats curried functions as applicatives.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig [a -> b] -> [a] -> [b]
 * @sig Apply f => f (a -> b) -> f a -> f b
 * @param {Array} fns An array of functions
 * @param {Array} vs An array of values
 * @return {Array} An array of results of applying each of `fns` to all of `vs` in turn.
 * @example
 *
 *      R.ap([R.multiply(2), R.add(3)], [1,2,3]); //=> [2, 4, 6, 4, 5, 6]
 *      R.ap([R.concat('tasty '), R.toUpper], ['pizza', 'salad']); //=> ["tasty pizza", "tasty salad", "PIZZA", "SALAD"]
 * @symb R.ap([f, g], [a, b]) = [f(a), f(b), g(a), g(b)]
 */
module.exports = _curry2(function ap(applicative, fn) {
  return (
    typeof applicative.ap === 'function' ?
      applicative.ap(fn) :
    typeof applicative === 'function' ?
      function(x) { return applicative(x)(fn(x)); } :
    // else
      _reduce(function(acc, f) { return _concat(acc, map(f, fn)); }, [], applicative)
  );
});

},{"./internal/_concat":99,"./internal/_curry2":104,"./internal/_reduce":135,"./map":186}],16:[function(require,module,exports){
var _aperture = require('./internal/_aperture');
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xaperture = require('./internal/_xaperture');


/**
 * Returns a new list, composed of n-tuples of consecutive elements If `n` is
 * greater than the length of the list, an empty list is returned.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @param {Number} n The size of the tuples to create
 * @param {Array} list The list to split into `n`-length tuples
 * @return {Array} The resulting list of `n`-length tuples
 * @see R.transduce
 * @example
 *
 *      R.aperture(2, [1, 2, 3, 4, 5]); //=> [[1, 2], [2, 3], [3, 4], [4, 5]]
 *      R.aperture(3, [1, 2, 3, 4, 5]); //=> [[1, 2, 3], [2, 3, 4], [3, 4, 5]]
 *      R.aperture(7, [1, 2, 3, 4, 5]); //=> []
 */
module.exports = _curry2(_dispatchable([], _xaperture, _aperture));

},{"./internal/_aperture":91,"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xaperture":142}],17:[function(require,module,exports){
var _concat = require('./internal/_concat');
var _curry2 = require('./internal/_curry2');


/**
 * Returns a new list containing the contents of the given list, followed by
 * the given element.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The element to add to the end of the new list.
 * @param {Array} list The list of elements to add a new item to.
 *        list.
 * @return {Array} A new list containing the elements of the old list followed by `el`.
 * @see R.prepend
 * @example
 *
 *      R.append('tests', ['write', 'more']); //=> ['write', 'more', 'tests']
 *      R.append('tests', []); //=> ['tests']
 *      R.append(['tests'], ['write', 'more']); //=> ['write', 'more', ['tests']]
 */
module.exports = _curry2(function append(el, list) {
  return _concat(list, [el]);
});

},{"./internal/_concat":99,"./internal/_curry2":104}],18:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Applies function `fn` to the argument list `args`. This is useful for
 * creating a fixed-arity function from a variadic function. `fn` should be a
 * bound function if context is significant.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> a) -> [*] -> a
 * @param {Function} fn The function which will be called with `args`
 * @param {Array} args The arguments to call `fn` with
 * @return {*} result The result, equivalent to `fn(...args)`
 * @see R.call, R.unapply
 * @example
 *
 *      var nums = [1, 2, 3, -99, 42, 6, 7];
 *      R.apply(Math.max, nums); //=> 42
 * @symb R.apply(f, [a, b, c]) = f(a, b, c)
 */
module.exports = _curry2(function apply(fn, args) {
  return fn.apply(this, args);
});

},{"./internal/_curry2":104}],19:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var apply = require('./apply');
var curryN = require('./curryN');
var map = require('./map');
var max = require('./max');
var pluck = require('./pluck');
var reduce = require('./reduce');
var values = require('./values');


/**
 * Given a spec object recursively mapping properties to functions, creates a
 * function producing an object of the same structure, by mapping each property
 * to the result of calling its associated function with the supplied arguments.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig {k: ((a, b, ..., m) -> v)} -> ((a, b, ..., m) -> {k: v})
 * @param {Object} spec an object recursively mapping properties to functions for
 *        producing the values for these properties.
 * @return {Function} A function that returns an object of the same structure
 * as `spec', with each property set to the value returned by calling its
 * associated function with the supplied arguments.
 * @see R.converge, R.juxt
 * @example
 *
 *      var getMetrics = R.applySpec({
 *                                      sum: R.add,
 *                                      nested: { mul: R.multiply }
 *                                   });
 *      getMetrics(2, 4); // => { sum: 6, nested: { mul: 8 } }
 * @symb R.applySpec({ x: f, y: { z: g } })(a, b) = { x: f(a, b), y: { z: g(a, b) } }
 */
module.exports = _curry1(function applySpec(spec) {
  spec = map(function(v) { return typeof v == 'function' ? v : applySpec(v); },
             spec);
  return curryN(reduce(max, 0, pluck('length', values(spec))),
                function() {
                  var args = arguments;
                  return map(function(f) { return apply(f, args); }, spec);
                });
});

},{"./apply":18,"./curryN":43,"./internal/_curry1":103,"./map":186,"./max":192,"./pluck":231,"./reduce":242,"./values":300}],20:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Makes an ascending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) < fn(b), `1` if fn(b) < fn(a), otherwise `0`
 * @example
 *
 *      var byAge = R.ascend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByYoungestFirst = R.sort(byAge, people);
 */
module.exports = _curry3(function ascend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa < bb ? -1 : aa > bb ? 1 : 0;
});

},{"./internal/_curry3":105}],21:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Makes a shallow clone of an object, setting or overriding the specified
 * property with the given value. Note that this copies and flattens prototype
 * properties onto the new object as well. All non-primitive properties are
 * copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig String -> a -> {k: v} -> {k: v}
 * @param {String} prop The property name to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except for the changed property.
 * @see R.dissoc
 * @example
 *
 *      R.assoc('c', 3, {a: 1, b: 2}); //=> {a: 1, b: 2, c: 3}
 */
module.exports = _curry3(function assoc(prop, val, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  result[prop] = val;
  return result;
});

},{"./internal/_curry3":105}],22:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var _has = require('./internal/_has');
var _isArray = require('./internal/_isArray');
var _isInteger = require('./internal/_isInteger');
var assoc = require('./assoc');


/**
 * Makes a shallow clone of an object, setting or overriding the nodes required
 * to create the given path, and placing the specific value at the tail end of
 * that path. Note that this copies and flattens prototype properties onto the
 * new object as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> {a}
 * @param {Array} path the path to set
 * @param {*} val The new value
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original except along the specified path.
 * @see R.dissocPath
 * @example
 *
 *      R.assocPath(['a', 'b', 'c'], 42, {a: {b: {c: 0}}}); //=> {a: {b: {c: 42}}}
 *
 *      // Any missing or non-object keys in path will be overridden
 *      R.assocPath(['a', 'b', 'c'], 42, {a: 5}); //=> {a: {b: {c: 42}}}
 */
module.exports = _curry3(function assocPath(path, val, obj) {
  if (path.length === 0) {
    return val;
  }
  var idx = path[0];
  if (path.length > 1) {
    var nextObj = _has(idx, obj) ? obj[idx] : _isInteger(path[1]) ? [] : {};
    val = assocPath(Array.prototype.slice.call(path, 1), val, nextObj);
  }
  if (_isInteger(idx) && _isArray(obj)) {
    var arr = [].concat(obj);
    arr[idx] = val;
    return arr;
  } else {
    return assoc(idx, val, obj);
  }
});

},{"./assoc":21,"./internal/_curry3":105,"./internal/_has":115,"./internal/_isArray":119,"./internal/_isInteger":121}],23:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var nAry = require('./nAry');


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 2 parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> c) -> (a, b -> c)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 2.
 * @example
 *
 *      var takesThreeArgs = function(a, b, c) {
 *        return [a, b, c];
 *      };
 *      takesThreeArgs.length; //=> 3
 *      takesThreeArgs(1, 2, 3); //=> [1, 2, 3]
 *
 *      var takesTwoArgs = R.binary(takesThreeArgs);
 *      takesTwoArgs.length; //=> 2
 *      // Only 2 arguments are passed to the wrapped function
 *      takesTwoArgs(1, 2, 3); //=> [1, 2, undefined]
 * @symb R.binary(f)(a, b, c) = f(a, b)
 */
module.exports = _curry1(function binary(fn) {
  return nAry(2, fn);
});

},{"./internal/_curry1":103,"./nAry":205}],24:[function(require,module,exports){
var _arity = require('./internal/_arity');
var _curry2 = require('./internal/_curry2');


/**
 * Creates a function that is bound to a context.
 * Note: `R.bind` does not provide the additional argument-binding capabilities of
 * [Function.prototype.bind](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Function/bind).
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Function
 * @category Object
 * @sig (* -> *) -> {*} -> (* -> *)
 * @param {Function} fn The function to bind to context
 * @param {Object} thisObj The context to bind `fn` to
 * @return {Function} A function that will execute in the context of `thisObj`.
 * @see R.partial
 * @example
 *
 *      var log = R.bind(console.log, console);
 *      R.pipe(R.assoc('a', 2), R.tap(log), R.assoc('a', 3))({a: 1}); //=> {a: 3}
 *      // logs {a: 2}
 * @symb R.bind(f, o)(a, b) = f.call(o, a, b)
 */
module.exports = _curry2(function bind(fn, thisObj) {
  return _arity(fn.length, function() {
    return fn.apply(thisObj, arguments);
  });
});

},{"./internal/_arity":92,"./internal/_curry2":104}],25:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _isFunction = require('./internal/_isFunction');
var and = require('./and');
var lift = require('./lift');


/**
 * A function which calls the two provided functions and returns the `&&`
 * of the results.
 * It returns the result of the first function if it is false-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * false-y value.
 *
 * In addition to functions, `R.both` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f A predicate
 * @param {Function} g Another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `&&`s their outputs together.
 * @see R.and
 * @example
 *
 *      var gt10 = R.gt(R.__, 10)
 *      var lt20 = R.lt(R.__, 20)
 *      var f = R.both(gt10, lt20);
 *      f(15); //=> true
 *      f(30); //=> false
 */
module.exports = _curry2(function both(f, g) {
  return _isFunction(f) ?
    function _both() {
      return f.apply(this, arguments) && g.apply(this, arguments);
    } :
    lift(and)(f, g);
});

},{"./and":12,"./internal/_curry2":104,"./internal/_isFunction":120,"./lift":182}],26:[function(require,module,exports){
var curry = require('./curry');


/**
 * Returns the result of calling its first argument with the remaining
 * arguments. This is occasionally useful as a converging function for
 * `R.converge`: the left branch can produce a function while the right branch
 * produces a value to be passed to that function as an argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig (*... -> a),*... -> a
 * @param {Function} fn The function to apply to the remaining arguments.
 * @param {...*} args Any number of positional arguments.
 * @return {*}
 * @see R.apply
 * @example
 *
 *      R.call(R.add, 1, 2); //=> 3
 *
 *      var indentN = R.pipe(R.times(R.always(' ')),
 *                           R.join(''),
 *                           R.replace(/^(?!$)/gm));
 *
 *      var format = R.converge(R.call, [
 *                                  R.pipe(R.prop('indent'), indentN),
 *                                  R.prop('value')
 *                              ]);
 *
 *      format({indent: 2, value: 'foo\nbar\nbaz\n'}); //=> '  foo\n  bar\n  baz\n'
 * @symb R.call(f, a, b) = f(a, b)
 */
module.exports = curry(function call(fn) {
  return fn.apply(this, Array.prototype.slice.call(arguments, 1));
});

},{"./curry":42}],27:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _makeFlat = require('./internal/_makeFlat');
var _xchain = require('./internal/_xchain');
var map = require('./map');


/**
 * `chain` maps a function over a list and concatenates the results. `chain`
 * is also known as `flatMap` in some libraries
 *
 * Dispatches to the `chain` method of the second argument, if present,
 * according to the [FantasyLand Chain spec](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain m => (a -> m b) -> m a -> m b
 * @param {Function} fn The function to map with
 * @param {Array} list The list to map over
 * @return {Array} The result of flat-mapping `list` with `fn`
 * @example
 *
 *      var duplicate = n => [n, n];
 *      R.chain(duplicate, [1, 2, 3]); //=> [1, 1, 2, 2, 3, 3]
 *
 *      R.chain(R.append, R.head)([1, 2, 3]); //=> [1, 2, 3, 1]
 */
module.exports = _curry2(_dispatchable(['chain'], _xchain, function chain(fn, monad) {
  if (typeof monad === 'function') {
    return function(x) { return fn(monad(x))(x); };
  }
  return _makeFlat(false)(map(fn, monad));
}));

},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_makeFlat":128,"./internal/_xchain":143,"./map":186}],28:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');

/**
 * Restricts a number to be within a range.
 *
 * Also works for other ordered types such as Strings and Dates.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Relation
 * @sig Ord a => a -> a -> a -> a
 * @param {Number} minimum The lower limit of the clamp (inclusive)
 * @param {Number} maximum The upper limit of the clamp (inclusive)
 * @param {Number} value Value to be clamped
 * @return {Number} Returns `minimum` when `val < minimum`, `maximum` when `val > maximum`, returns `val` otherwise
 * @example
 *
 *      R.clamp(1, 10, -5) // => 1
 *      R.clamp(1, 10, 15) // => 10
 *      R.clamp(1, 10, 4)  // => 4
 */
module.exports = _curry3(function clamp(min, max, value) {
  if (min > max) {
    throw new Error('min must not be greater than max in clamp(min, max, value)');
  }
  return value < min ? min :
         value > max ? max :
         value;
});

},{"./internal/_curry3":105}],29:[function(require,module,exports){
var _clone = require('./internal/_clone');
var _curry1 = require('./internal/_curry1');


/**
 * Creates a deep copy of the value which may contain (nested) `Array`s and
 * `Object`s, `Number`s, `String`s, `Boolean`s and `Date`s. `Function`s are
 * assigned by reference rather than copied
 *
 * Dispatches to a `clone` method if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {*} -> {*}
 * @param {*} value The object or array to clone
 * @return {*} A deeply cloned copy of `val`
 * @example
 *
 *      var objects = [{}, {}, {}];
 *      var objectsClone = R.clone(objects);
 *      objects === objectsClone; //=> false
 *      objects[0] === objectsClone[0]; //=> false
 */
module.exports = _curry1(function clone(value) {
  return value != null && typeof value.clone === 'function' ?
    value.clone() :
    _clone(value, [], [], true);
});

},{"./internal/_clone":96,"./internal/_curry1":103}],30:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Makes a comparator function out of a function that reports whether the first
 * element is less than the second.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a, b -> Boolean) -> (a, b -> Number)
 * @param {Function} pred A predicate function of arity two which will return `true` if the first argument
 * is less than the second, `false` otherwise
 * @return {Function} A Function :: a -> b -> Int that returns `-1` if a < b, `1` if b < a, otherwise `0`
 * @example
 *
 *      var byAge = R.comparator((a, b) => a.age < b.age);
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByIncreasingAge = R.sort(byAge, people);
 */
module.exports = _curry1(function comparator(pred) {
  return function(a, b) {
    return pred(a, b) ? -1 : pred(b, a) ? 1 : 0;
  };
});

},{"./internal/_curry1":103}],31:[function(require,module,exports){
var lift = require('./lift');
var not = require('./not');


/**
 * Takes a function `f` and returns a function `g` such that if called with the same arguments
 * when `f` returns a "truthy" value, `g` returns `false` and when `f` returns a "falsy" value `g` returns `true`.
 *
 * `R.complement` may be applied to any functor
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> *) -> (*... -> Boolean)
 * @param {Function} f
 * @return {Function}
 * @see R.not
 * @example
 *
 *      var isNotNil = R.complement(R.isNil);
 *      isNil(null); //=> true
 *      isNotNil(null); //=> false
 *      isNil(7); //=> false
 *      isNotNil(7); //=> true
 */
module.exports = lift(not);

},{"./lift":182,"./not":208}],32:[function(require,module,exports){
var pipe = require('./pipe');
var reverse = require('./reverse');


/**
 * Performs right-to-left function composition. The rightmost function may have
 * any arity; the remaining functions must be unary.
 *
 * **Note:** The result of compose is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig ((y -> z), (x -> y), ..., (o -> p), ((a, b, ..., n) -> o)) -> ((a, b, ..., n) -> z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipe
 * @example
 *
 *      var classyGreeting = (firstName, lastName) => "The name's " + lastName + ", " + firstName + " " + lastName
 *      var yellGreeting = R.compose(R.toUpper, classyGreeting);
 *      yellGreeting('James', 'Bond'); //=> "THE NAME'S BOND, JAMES BOND"
 *
 *      R.compose(Math.abs, R.add(1), R.multiply(2))(-4) //=> 7
 *
 * @symb R.compose(f, g, h)(a, b) = f(g(h(a, b)))
 */
module.exports = function compose() {
  if (arguments.length === 0) {
    throw new Error('compose requires at least one argument');
  }
  return pipe.apply(this, reverse(arguments));
};

},{"./pipe":228,"./reverse":251}],33:[function(require,module,exports){
var chain = require('./chain');
var compose = require('./compose');
var map = require('./map');


/**
 * Returns the right-to-left Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.composeK(h, g, f)` is equivalent to `R.compose(R.chain(h), R.chain(g), R.chain(f))`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((y -> m z), (x -> m y), ..., (a -> m b)) -> (a -> m z)
 * @param {...Function} ...functions The functions to compose
 * @return {Function}
 * @see R.pipeK
 * @example
 *
 *       //  get :: String -> Object -> Maybe *
 *       var get = R.curry((propName, obj) => Maybe(obj[propName]))
 *
 *       //  getStateCode :: Maybe String -> Maybe String
 *       var getStateCode = R.composeK(
 *         R.compose(Maybe.of, R.toUpper),
 *         get('state'),
 *         get('address'),
 *         get('user'),
 *       );
 *       getStateCode({"user":{"address":{"state":"ny"}}}); //=> Maybe.Just("NY")
 *       getStateCode({}); //=> Maybe.Nothing()
 * @symb R.composeK(f, g, h)(a) = R.chain(f, R.chain(g, h(a)))
 */
module.exports = function composeK() {
  if (arguments.length === 0) {
    throw new Error('composeK requires at least one argument');
  }
  var init = Array.prototype.slice.call(arguments);
  var last = init.pop();
  return compose(compose.apply(this, map(chain, init)), last);
};

},{"./chain":27,"./compose":32,"./map":186}],34:[function(require,module,exports){
var pipeP = require('./pipeP');
var reverse = require('./reverse');


/**
 * Performs right-to-left composition of one or more Promise-returning
 * functions. The rightmost function may have any arity; the remaining
 * functions must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((y -> Promise z), (x -> Promise y), ..., (a -> Promise b)) -> (a -> Promise z)
 * @param {...Function} functions The functions to compose
 * @return {Function}
 * @see R.pipeP
 * @example
 *
 *      var db = {
 *        users: {
 *          JOE: {
 *            name: 'Joe',
 *            followers: ['STEVE', 'SUZY']
 *          }
 *        }
 *      }
 *
 *      // We'll pretend to do a db lookup which returns a promise
 *      var lookupUser = (userId) => Promise.resolve(db.users[userId])
 *      var lookupFollowers = (user) => Promise.resolve(user.followers)
 *      lookupUser('JOE').then(lookupFollowers)
 *
 *      //  followersForUser :: String -> Promise [UserId]
 *      var followersForUser = R.composeP(lookupFollowers, lookupUser);
 *      followersForUser('JOE').then(followers => console.log('Followers:', followers))
 *      // Followers: ["STEVE","SUZY"]
 */
module.exports = function composeP() {
  if (arguments.length === 0) {
    throw new Error('composeP requires at least one argument');
  }
  return pipeP.apply(this, reverse(arguments));
};

},{"./pipeP":230,"./reverse":251}],35:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _isArray = require('./internal/_isArray');
var _isFunction = require('./internal/_isFunction');
var toString = require('./toString');


/**
 * Returns the result of concatenating the given lists or strings.
 *
 * Note: `R.concat` expects both arguments to be of the same type,
 * unlike the native `Array.prototype.concat` method. It will throw
 * an error if you `concat` an Array with a non-Array value.
 *
 * Dispatches to the `concat` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @sig String -> String -> String
 * @param {Array|String} firstList The first list
 * @param {Array|String} secondList The second list
 * @return {Array|String} A list consisting of the elements of `firstList` followed by the elements of
 * `secondList`.
 *
 * @example
 *
 *      R.concat('ABC', 'DEF'); // 'ABCDEF'
 *      R.concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 *      R.concat([], []); //=> []
 */
module.exports = _curry2(function concat(a, b) {
  if (a == null || !_isFunction(a.concat)) {
    throw new TypeError(toString(a) + ' does not have a method named "concat"');
  }
  if (_isArray(a) && !_isArray(b)) {
    throw new TypeError(toString(b) + ' is not an array');
  }
  return a.concat(b);
});

},{"./internal/_curry2":104,"./internal/_isArray":119,"./internal/_isFunction":120,"./toString":278}],36:[function(require,module,exports){
var _arity = require('./internal/_arity');
var _curry1 = require('./internal/_curry1');
var map = require('./map');
var max = require('./max');
var reduce = require('./reduce');


/**
 * Returns a function, `fn`, which encapsulates `if/else, if/else, ...` logic.
 * `R.cond` takes a list of [predicate, transformer] pairs. All of the arguments
 * to `fn` are applied to each of the predicates in turn until one returns a
 * "truthy" value, at which point `fn` returns the result of applying its
 * arguments to the corresponding transformer. If none of the predicates
 * matches, `fn` returns undefined.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Logic
 * @sig [[(*... -> Boolean),(*... -> *)]] -> (*... -> *)
 * @param {Array} pairs A list of [predicate, transformer]
 * @return {Function}
 * @example
 *
 *      var fn = R.cond([
 *        [R.equals(0),   R.always('water freezes at 0°C')],
 *        [R.equals(100), R.always('water boils at 100°C')],
 *        [R.T,           temp => 'nothing special happens at ' + temp + '°C']
 *      ]);
 *      fn(0); //=> 'water freezes at 0°C'
 *      fn(50); //=> 'nothing special happens at 50°C'
 *      fn(100); //=> 'water boils at 100°C'
 */
module.exports = _curry1(function cond(pairs) {
  var arity = reduce(max,
                     0,
                     map(function(pair) { return pair[0].length; }, pairs));
  return _arity(arity, function() {
    var idx = 0;
    while (idx < pairs.length) {
      if (pairs[idx][0].apply(this, arguments)) {
        return pairs[idx][1].apply(this, arguments);
      }
      idx += 1;
    }
  });
});

},{"./internal/_arity":92,"./internal/_curry1":103,"./map":186,"./max":192,"./reduce":242}],37:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var constructN = require('./constructN');


/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> {*}) -> (* -> {*})
 * @param {Function} fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @example
 *
 *      // Constructor function
 *      function Animal(kind) {
 *        this.kind = kind;
 *      };
 *      Animal.prototype.sighting = function() {
 *        return "It's a " + this.kind + "!";
 *      }
 *
 *      var AnimalConstructor = R.construct(Animal)
 *
 *      // Notice we no longer need the 'new' keyword:
 *      AnimalConstructor('Pig'); //=> {"kind": "Pig", "sighting": function (){...}};
 *
 *      var animalTypes = ["Lion", "Tiger", "Bear"];
 *      var animalSighting = R.invoker(0, 'sighting');
 *      var sightNewAnimal = R.compose(animalSighting, AnimalConstructor);
 *      R.map(sightNewAnimal, animalTypes); //=> ["It's a Lion!", "It's a Tiger!", "It's a Bear!"]
 */
module.exports = _curry1(function construct(Fn) {
  return constructN(Fn.length, Fn);
});

},{"./constructN":38,"./internal/_curry1":103}],38:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var curry = require('./curry');
var nAry = require('./nAry');


/**
 * Wraps a constructor function inside a curried function that can be called
 * with the same arguments and returns the same type. The arity of the function
 * returned is specified to allow using variadic constructor functions.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Function
 * @sig Number -> (* -> {*}) -> (* -> {*})
 * @param {Number} n The arity of the constructor function.
 * @param {Function} Fn The constructor function to wrap.
 * @return {Function} A wrapped, curried constructor function.
 * @example
 *
 *      // Variadic Constructor function
 *      function Salad() {
 *        this.ingredients = arguments;
 *      };
 *      Salad.prototype.recipe = function() {
 *        var instructions = R.map((ingredient) => (
 *          'Add a whollop of ' + ingredient, this.ingredients)
 *        )
 *        return R.join('\n', instructions)
 *      }
 *
 *      var ThreeLayerSalad = R.constructN(3, Salad)
 *
 *      // Notice we no longer need the 'new' keyword, and the constructor is curried for 3 arguments.
 *      var salad = ThreeLayerSalad('Mayonnaise')('Potato Chips')('Ketchup')
 *      console.log(salad.recipe());
 *      // Add a whollop of Mayonnaise
 *      // Add a whollop of Potato Chips
 *      // Add a whollop of Potato Ketchup
 */
module.exports = _curry2(function constructN(n, Fn) {
  if (n > 10) {
    throw new Error('Constructor with greater than ten arguments');
  }
  if (n === 0) {
    return function() { return new Fn(); };
  }
  return curry(nAry(n, function($0, $1, $2, $3, $4, $5, $6, $7, $8, $9) {
    switch (arguments.length) {
      case  1: return new Fn($0);
      case  2: return new Fn($0, $1);
      case  3: return new Fn($0, $1, $2);
      case  4: return new Fn($0, $1, $2, $3);
      case  5: return new Fn($0, $1, $2, $3, $4);
      case  6: return new Fn($0, $1, $2, $3, $4, $5);
      case  7: return new Fn($0, $1, $2, $3, $4, $5, $6);
      case  8: return new Fn($0, $1, $2, $3, $4, $5, $6, $7);
      case  9: return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8);
      case 10: return new Fn($0, $1, $2, $3, $4, $5, $6, $7, $8, $9);
    }
  }));
});

},{"./curry":42,"./internal/_curry2":104,"./nAry":205}],39:[function(require,module,exports){
var _contains = require('./internal/_contains');
var _curry2 = require('./internal/_curry2');


/**
 * Returns `true` if the specified value is equal, in `R.equals` terms, to at
 * least one element of the given list; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Boolean
 * @param {Object} a The item to compare against.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if an equivalent item is in the list, `false` otherwise.
 * @see R.any
 * @example
 *
 *      R.contains(3, [1, 2, 3]); //=> true
 *      R.contains(4, [1, 2, 3]); //=> false
 *      R.contains({ name: 'Fred' }, [{ name: 'Fred' }]); //=> true
 *      R.contains([42], [[42]]); //=> true
 */
module.exports = _curry2(_contains);

},{"./internal/_contains":100,"./internal/_curry2":104}],40:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _map = require('./internal/_map');
var curryN = require('./curryN');
var max = require('./max');
var pluck = require('./pluck');
var reduce = require('./reduce');


/**
 * Accepts a converging function and a list of branching functions and returns
 * a new function. When invoked, this new function is applied to some
 * arguments, each branching function is applied to those same arguments. The
 * results of each branching function are passed as arguments to the converging
 * function to produce the return value.
 *
 * @func
 * @memberOf R
 * @since v0.4.2
 * @category Function
 * @sig (x1 -> x2 -> ... -> z) -> [(a -> b -> ... -> x1), (a -> b -> ... -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} after A function. `after` will be invoked with the return values of
 *        `fn1` and `fn2` as its arguments.
 * @param {Array} functions A list of functions.
 * @return {Function} A new function.
 * @see R.useWith
 * @example
 *
 *      var average = R.converge(R.divide, [R.sum, R.length])
 *      average([1, 2, 3, 4, 5, 6, 7]) //=> 4
 *
 *      var strangeConcat = R.converge(R.concat, [R.toUpper, R.toLower])
 *      strangeConcat("Yodel") //=> "YODELyodel"
 *
 * @symb R.converge(f, [g, h])(a, b) = f(g(a, b), h(a, b))
 */
module.exports = _curry2(function converge(after, fns) {
  return curryN(reduce(max, 0, pluck('length', fns)), function() {
    var args = arguments;
    var context = this;
    return after.apply(context, _map(function(fn) {
      return fn.apply(context, args);
    }, fns));
  });
});

},{"./curryN":43,"./internal/_curry2":104,"./internal/_map":129,"./max":192,"./pluck":231,"./reduce":242}],41:[function(require,module,exports){
var reduceBy = require('./reduceBy');


/**
 * Counts the elements of a list according to how many match each value of a
 * key generated by the supplied function. Returns an object mapping the keys
 * produced by `fn` to the number of occurrences in the list. Note that all
 * keys are coerced to strings because of how JavaScript objects work.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> String) -> [a] -> {*}
 * @param {Function} fn The function used to map values to keys.
 * @param {Array} list The list to count elements from.
 * @return {Object} An object mapping keys to number of occurrences in the list.
 * @example
 *
 *      var numbers = [1.0, 1.1, 1.2, 2.0, 3.0, 2.2];
 *      R.countBy(Math.floor)(numbers);    //=> {'1': 3, '2': 2, '3': 1}
 *
 *      var letters = ['a', 'b', 'A', 'a', 'B', 'c'];
 *      R.countBy(R.toLower)(letters);   //=> {'a': 3, 'b': 2, 'c': 1}
 */
module.exports = reduceBy(function(acc, elem) { return acc + 1; }, 0);

},{"./reduceBy":243}],42:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var curryN = require('./curryN');


/**
 * Returns a curried equivalent of the provided function. The curried function
 * has two unusual capabilities. First, its arguments needn't be provided one
 * at a time. If `f` is a ternary function and `g` is `R.curry(f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value `R.__` may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is `R.__`, the
 * following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (* -> a) -> (* -> a)
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curryN
 * @example
 *
 *      var addFourNumbers = (a, b, c, d) => a + b + c + d;
 *
 *      var curriedAddFourNumbers = R.curry(addFourNumbers);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
module.exports = _curry1(function curry(fn) {
  return curryN(fn.length, fn);
});

},{"./curryN":43,"./internal/_curry1":103}],43:[function(require,module,exports){
var _arity = require('./internal/_arity');
var _curry1 = require('./internal/_curry1');
var _curry2 = require('./internal/_curry2');
var _curryN = require('./internal/_curryN');


/**
 * Returns a curried equivalent of the provided function, with the specified
 * arity. The curried function has two unusual capabilities. First, its
 * arguments needn't be provided one at a time. If `g` is `R.curryN(3, f)`, the
 * following are equivalent:
 *
 *   - `g(1)(2)(3)`
 *   - `g(1)(2, 3)`
 *   - `g(1, 2)(3)`
 *   - `g(1, 2, 3)`
 *
 * Secondly, the special placeholder value `R.__` may be used to specify
 * "gaps", allowing partial application of any combination of arguments,
 * regardless of their positions. If `g` is as above and `_` is `R.__`, the
 * following are equivalent:
 *
 *   - `g(1, 2, 3)`
 *   - `g(_, 2, 3)(1)`
 *   - `g(_, _, 3)(1)(2)`
 *   - `g(_, _, 3)(1, 2)`
 *   - `g(_, 2)(1)(3)`
 *   - `g(_, 2)(1, 3)`
 *   - `g(_, 2)(_, 3)(1)`
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to curry.
 * @return {Function} A new, curried function.
 * @see R.curry
 * @example
 *
 *      var sumArgs = (...args) => R.sum(args);
 *
 *      var curriedAddFourNumbers = R.curryN(4, sumArgs);
 *      var f = curriedAddFourNumbers(1, 2);
 *      var g = f(3);
 *      g(4); //=> 10
 */
module.exports = _curry2(function curryN(length, fn) {
  if (length === 1) {
    return _curry1(fn);
  }
  return _arity(length, _curryN(length, [], fn));
});

},{"./internal/_arity":92,"./internal/_curry1":103,"./internal/_curry2":104,"./internal/_curryN":106}],44:[function(require,module,exports){
var add = require('./add');


/**
 * Decrements its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n - 1
 * @see R.inc
 * @example
 *
 *      R.dec(42); //=> 41
 */
module.exports = add(-1);

},{"./add":6}],45:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns the second argument if it is not `null`, `undefined` or `NaN`
 * otherwise the first argument is returned.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {a} default The default value.
 * @param {b} val `val` will be returned instead of `default` unless `val` is `null`, `undefined` or `NaN`.
 * @return {*} The second value if it is not `null`, `undefined` or `NaN`, otherwise the default value
 * @example
 *
 *      var defaultTo42 = R.defaultTo(42);
 *
 *      defaultTo42(null);  //=> 42
 *      defaultTo42(undefined);  //=> 42
 *      defaultTo42('Ramda');  //=> 'Ramda'
 *      // parseInt('string') results in NaN
 *      defaultTo42(parseInt('string')); //=> 42
 */
module.exports = _curry2(function defaultTo(d, v) {
  return v == null || v !== v ? d : v;
});

},{"./internal/_curry2":104}],46:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Makes a descending comparator function out of a function that returns a value
 * that can be compared with `<` and `>`.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Function
 * @sig Ord b => (a -> b) -> a -> a -> Number
 * @param {Function} fn A function of arity one that returns a value that can be compared
 * @param {*} a The first item to be compared.
 * @param {*} b The second item to be compared.
 * @return {Number} `-1` if fn(a) > fn(b), `1` if fn(b) > fn(a), otherwise `0`
 * @example
 *
 *      var byAge = R.descend(R.prop('age'));
 *      var people = [
 *        // ...
 *      ];
 *      var peopleByOldestFirst = R.sort(byAge, people);
 */
module.exports = _curry3(function descend(fn, a, b) {
  var aa = fn(a);
  var bb = fn(b);
  return aa > bb ? -1 : aa < bb ? 1 : 0;
});

},{"./internal/_curry3":105}],47:[function(require,module,exports){
var _contains = require('./internal/_contains');
var _curry2 = require('./internal/_curry2');


/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Objects and Arrays are compared are compared
 * in terms of value equality, not reference equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.differenceWith, R.symmetricDifference, R.symmetricDifferenceWith
 * @example
 *
 *      R.difference([1,2,3,4], [7,6,5,4,3]); //=> [1,2]
 *      R.difference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5]
 *      R.difference([{a: 1}, {b: 2}], [{a: 1}, {c: 3}]) //=> [{b: 2}]
 */
module.exports = _curry2(function difference(first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!_contains(first[idx], second) && !_contains(first[idx], out)) {
      out[out.length] = first[idx];
    }
    idx += 1;
  }
  return out;
});

},{"./internal/_contains":100,"./internal/_curry2":104}],48:[function(require,module,exports){
var _containsWith = require('./internal/_containsWith');
var _curry3 = require('./internal/_curry3');


/**
 * Finds the set (i.e. no duplicates) of all elements in the first list not
 * contained in the second list. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` that are not in `list2`.
 * @see R.difference, R.symmetricDifference, R.symmetricDifferenceWith
 * @example
 *
 *      var cmp = (x, y) => x.a === y.a;
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}];
 *      var l2 = [{a: 3}, {a: 4}];
 *      R.differenceWith(cmp, l1, l2); //=> [{a: 1}, {a: 2}]
 */
module.exports = _curry3(function differenceWith(pred, first, second) {
  var out = [];
  var idx = 0;
  var firstLen = first.length;
  while (idx < firstLen) {
    if (!_containsWith(pred, first[idx], second) &&
        !_containsWith(pred, first[idx], out)) {
      out.push(first[idx]);
    }
    idx += 1;
  }
  return out;
});

},{"./internal/_containsWith":101,"./internal/_curry3":105}],49:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns a new object that does not contain a `prop` property.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Object
 * @sig String -> {k: v} -> {k: v}
 * @param {String} prop The name of the property to dissociate
 * @param {Object} obj The object to clone
 * @return {Object} A new object equivalent to the original but without the specified property
 * @see R.assoc
 * @example
 *
 *      R.dissoc('b', {a: 1, b: 2, c: 3}); //=> {a: 1, c: 3}
 */
module.exports = _curry2(function dissoc(prop, obj) {
  var result = {};
  for (var p in obj) {
    result[p] = obj[p];
  }
  delete result[prop];
  return result;
});

},{"./internal/_curry2":104}],50:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var assoc = require('./assoc');
var dissoc = require('./dissoc');


/**
 * Makes a shallow clone of an object, omitting the property at the given path.
 * Note that this copies and flattens prototype properties onto the new object
 * as well. All non-primitive properties are copied by reference.
 *
 * @func
 * @memberOf R
 * @since v0.11.0
 * @category Object
 * @sig [String] -> {k: v} -> {k: v}
 * @param {Array} path The path to the value to omit
 * @param {Object} obj The object to clone
 * @return {Object} A new object without the property at path
 * @see R.assocPath
 * @example
 *
 *      R.dissocPath(['a', 'b', 'c'], {a: {b: {c: 42}}}); //=> {a: {b: {}}}
 */
module.exports = _curry2(function dissocPath(path, obj) {
  switch (path.length) {
    case 0:
      return obj;
    case 1:
      return dissoc(path[0], obj);
    default:
      var head = path[0];
      var tail = Array.prototype.slice.call(path, 1);
      return obj[head] == null ? obj : assoc(head, dissocPath(tail, obj[head]), obj);
  }
});

},{"./assoc":21,"./dissoc":49,"./internal/_curry2":104}],51:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Divides two numbers. Equivalent to `a / b`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a / b`.
 * @see R.multiply
 * @example
 *
 *      R.divide(71, 100); //=> 0.71
 *
 *      var half = R.divide(R.__, 2);
 *      half(42); //=> 21
 *
 *      var reciprocal = R.divide(1);
 *      reciprocal(4);   //=> 0.25
 */
module.exports = _curry2(function divide(a, b) { return a / b; });

},{"./internal/_curry2":104}],52:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xdrop = require('./internal/_xdrop');
var slice = require('./slice');


/**
 * Returns all but the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `drop` method).
 *
 * Dispatches to the `drop` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {[a]} list
 * @return {[a]} A copy of list without the first `n` elements
 * @see R.take, R.transduce, R.dropLast, R.dropWhile
 * @example
 *
 *      R.drop(1, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.drop(2, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.drop(3, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(4, ['foo', 'bar', 'baz']); //=> []
 *      R.drop(3, 'ramda');               //=> 'da'
 */
module.exports = _curry2(_dispatchable(['drop'], _xdrop, function drop(n, xs) {
  return slice(Math.max(0, n), Infinity, xs);
}));

},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xdrop":144,"./slice":255}],53:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _dropLast = require('./internal/_dropLast');
var _xdropLast = require('./internal/_xdropLast');


/**
 * Returns a list containing all but the last `n` elements of the given `list`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements of `list` to skip.
 * @param {Array} list The list of elements to consider.
 * @return {Array} A copy of the list with only the first `list.length - n` elements
 * @see R.takeLast, R.drop, R.dropWhile, R.dropLastWhile
 * @example
 *
 *      R.dropLast(1, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.dropLast(2, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.dropLast(3, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(4, ['foo', 'bar', 'baz']); //=> []
 *      R.dropLast(3, 'ramda');               //=> 'ra'
 */
module.exports = _curry2(_dispatchable([], _xdropLast, _dropLast));

},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_dropLast":108,"./internal/_xdropLast":145}],54:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _dropLastWhile = require('./internal/_dropLastWhile');
var _xdropLastWhile = require('./internal/_xdropLastWhile');


/**
 * Returns a new list excluding all the tailing elements of a given list which
 * satisfy the supplied predicate function. It passes each value from the right
 * to the supplied predicate function, skipping elements until the predicate
 * function returns a `falsy` value. The predicate function is applied to one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} predicate The function to be called on each element
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array without any trailing elements that return `falsy` values from the `predicate`.
 * @see R.takeLastWhile, R.addIndex, R.drop, R.dropWhile
 * @example
 *
 *      var lteThree = x => x <= 3;
 *
 *      R.dropLastWhile(lteThree, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3, 4]
 */
module.exports = _curry2(_dispatchable([], _xdropLastWhile, _dropLastWhile));

},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_dropLastWhile":109,"./internal/_xdropLastWhile":146}],55:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _dispatchable = require('./internal/_dispatchable');
var _xdropRepeatsWith = require('./internal/_xdropRepeatsWith');
var dropRepeatsWith = require('./dropRepeatsWith');
var equals = require('./equals');


/**
 * Returns a new list without any consecutively repeating elements. `R.equals`
 * is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *     R.dropRepeats([1, 1, 1, 2, 3, 4, 4, 2, 2]); //=> [1, 2, 3, 4, 2]
 */
module.exports = _curry1(_dispatchable([], _xdropRepeatsWith(equals), dropRepeatsWith(equals)));

},{"./dropRepeatsWith":56,"./equals":62,"./internal/_curry1":103,"./internal/_dispatchable":107,"./internal/_xdropRepeatsWith":147}],56:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xdropRepeatsWith = require('./internal/_xdropRepeatsWith');
var last = require('./last');


/**
 * Returns a new list without any consecutively repeating elements. Equality is
 * determined by applying the supplied predicate to each pair of consecutive elements. The
 * first element in a series of equal elements will be preserved.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig (a, a -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} `list` without repeating elements.
 * @see R.transduce
 * @example
 *
 *      var l = [1, -1, 1, 3, 4, -4, -4, -5, 5, 3, 3];
 *      R.dropRepeatsWith(R.eqBy(Math.abs), l); //=> [1, 3, 4, -5, 3]
 */
module.exports = _curry2(_dispatchable([], _xdropRepeatsWith, function dropRepeatsWith(pred, list) {
  var result = [];
  var idx = 1;
  var len = list.length;
  if (len !== 0) {
    result[0] = list[0];
    while (idx < len) {
      if (!pred(last(result), list[idx])) {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
  }
  return result;
}));


},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xdropRepeatsWith":147,"./last":175}],57:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xdropWhile = require('./internal/_xdropWhile');


/**
 * Returns a new list excluding the leading elements of a given list which
 * satisfy the supplied predicate function. It passes each value to the supplied
 * predicate function, skipping elements while the predicate function returns
 * `true`. The predicate function is applied to one argument: *(value)*.
 *
 * Dispatches to the `dropWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @see R.takeWhile, R.transduce, R.addIndex
 * @example
 *
 *      var lteTwo = x => x <= 2;
 *
 *      R.dropWhile(lteTwo, [1, 2, 3, 4, 3, 2, 1]); //=> [3, 4, 3, 2, 1]
 */
module.exports = _curry2(_dispatchable(['dropWhile'], _xdropWhile, function dropWhile(pred, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len && pred(list[idx])) {
    idx += 1;
  }
  return Array.prototype.slice.call(list, idx);
}));

},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xdropWhile":148}],58:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _isFunction = require('./internal/_isFunction');
var lift = require('./lift');
var or = require('./or');


/**
 * A function wrapping calls to the two functions in an `||` operation,
 * returning the result of the first function if it is truth-y and the result
 * of the second function otherwise. Note that this is short-circuited,
 * meaning that the second function will not be invoked if the first returns a
 * truth-y value.
 *
 * In addition to functions, `R.either` also accepts any fantasy-land compatible
 * applicative functor.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> Boolean) -> (*... -> Boolean)
 * @param {Function} f a predicate
 * @param {Function} g another predicate
 * @return {Function} a function that applies its arguments to `f` and `g` and `||`s their outputs together.
 * @see R.or
 * @example
 *
 *      var gt10 = x => x > 10;
 *      var even = x => x % 2 === 0;
 *      var f = R.either(gt10, even);
 *      f(101); //=> true
 *      f(8); //=> true
 */
module.exports = _curry2(function either(f, g) {
  return _isFunction(f) ?
    function _either() {
      return f.apply(this, arguments) || g.apply(this, arguments);
    } :
    lift(or)(f, g);
});

},{"./internal/_curry2":104,"./internal/_isFunction":120,"./lift":182,"./or":215}],59:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _isArguments = require('./internal/_isArguments');
var _isArray = require('./internal/_isArray');
var _isObject = require('./internal/_isObject');
var _isString = require('./internal/_isString');


/**
 * Returns the empty value of its argument's type. Ramda defines the empty
 * value of Array (`[]`), Object (`{}`), String (`''`), and Arguments. Other
 * types are supported if they define `<Type>.empty` and/or
 * `<Type>.prototype.empty`.
 *
 * Dispatches to the `empty` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> a
 * @param {*} x
 * @return {*}
 * @example
 *
 *      R.empty(Just(42));      //=> Nothing()
 *      R.empty([1, 2, 3]);     //=> []
 *      R.empty('unicorns');    //=> ''
 *      R.empty({x: 1, y: 2});  //=> {}
 */
module.exports = _curry1(function empty(x) {
  return (
    (x != null && typeof x.empty === 'function') ?
      x.empty() :
    (x != null && x.constructor != null && typeof x.constructor.empty === 'function') ?
      x.constructor.empty() :
    _isArray(x) ?
      [] :
    _isString(x) ?
      '' :
    _isObject(x) ?
      {} :
    _isArguments(x) ?
      (function() { return arguments; }()) :
    // else
      void 0
  );
});

},{"./internal/_curry1":103,"./internal/_isArguments":118,"./internal/_isArray":119,"./internal/_isObject":123,"./internal/_isString":126}],60:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var equals = require('./equals');


/**
 * Takes a function and two values in its domain and returns `true` if the
 * values map to the same value in the codomain; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Relation
 * @sig (a -> b) -> a -> a -> Boolean
 * @param {Function} f
 * @param {*} x
 * @param {*} y
 * @return {Boolean}
 * @example
 *
 *      R.eqBy(Math.abs, 5, -5); //=> true
 */
module.exports = _curry3(function eqBy(f, x, y) {
  return equals(f(x), f(y));
});

},{"./equals":62,"./internal/_curry3":105}],61:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var equals = require('./equals');


/**
 * Reports whether two objects have the same value, in `R.equals` terms, for
 * the specified property. Useful as a curried predicate.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig k -> {k: v} -> {k: v} -> Boolean
 * @param {String} prop The name of the property to compare
 * @param {Object} obj1
 * @param {Object} obj2
 * @return {Boolean}
 *
 * @example
 *
 *      var o1 = { a: 1, b: 2, c: 3, d: 4 };
 *      var o2 = { a: 10, b: 20, c: 3, d: 40 };
 *      R.eqProps('a', o1, o2); //=> false
 *      R.eqProps('c', o1, o2); //=> true
 */
module.exports = _curry3(function eqProps(prop, obj1, obj2) {
  return equals(obj1[prop], obj2[prop]);
});

},{"./equals":62,"./internal/_curry3":105}],62:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _equals = require('./internal/_equals');


/**
 * Returns `true` if its arguments are equivalent, `false` otherwise. Handles
 * cyclical data structures.
 *
 * Dispatches symmetrically to the `equals` methods of both arguments, if
 * present.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> b -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      R.equals(1, 1); //=> true
 *      R.equals(1, '1'); //=> false
 *      R.equals([1, 2, 3], [1, 2, 3]); //=> true
 *
 *      var a = {}; a.v = a;
 *      var b = {}; b.v = b;
 *      R.equals(a, b); //=> true
 */
module.exports = _curry2(function equals(a, b) {
  return _equals(a, b, [], []);
});

},{"./internal/_curry2":104,"./internal/_equals":110}],63:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Creates a new object by recursively evolving a shallow copy of `object`,
 * according to the `transformation` functions. All non-primitive properties
 * are copied by reference.
 *
 * A `transformation` function will not be invoked if its corresponding key
 * does not exist in the evolved object.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {k: (v -> v)} -> {k: v} -> {k: v}
 * @param {Object} transformations The object specifying transformation functions to apply
 *        to the object.
 * @param {Object} object The object to be transformed.
 * @return {Object} The transformed object.
 * @example
 *
 *      var tomato  = {firstName: '  Tomato ', data: {elapsed: 100, remaining: 1400}, id:123};
 *      var transformations = {
 *        firstName: R.trim,
 *        lastName: R.trim, // Will not get invoked.
 *        data: {elapsed: R.add(1), remaining: R.add(-1)}
 *      };
 *      R.evolve(transformations, tomato); //=> {firstName: 'Tomato', data: {elapsed: 101, remaining: 1399}, id:123}
 */
module.exports = _curry2(function evolve(transformations, object) {
  var result = {};
  var transformation, key, type;
  for (key in object) {
    transformation = transformations[key];
    type = typeof transformation;
    result[key] = type === 'function'                 ? transformation(object[key])
                : transformation && type === 'object' ? evolve(transformation, object[key])
                                                      : object[key];
  }
  return result;
});

},{"./internal/_curry2":104}],64:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _filter = require('./internal/_filter');
var _isObject = require('./internal/_isObject');
var _reduce = require('./internal/_reduce');
var _xfilter = require('./internal/_xfilter');
var keys = require('./keys');


/**
 * Takes a predicate and a "filterable", and returns a new filterable of the
 * same type containing the members of the given filterable which satisfy the
 * given predicate.
 *
 * Dispatches to the `filter` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.reject, R.transduce, R.addIndex
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.filter(isEven, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.filter(isEven, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
module.exports = _curry2(_dispatchable(['filter'], _xfilter, function(pred, filterable) {
  return (
    _isObject(filterable) ?
      _reduce(function(acc, key) {
        if (pred(filterable[key])) {
          acc[key] = filterable[key];
        }
        return acc;
      }, {}, keys(filterable)) :
    // else
      _filter(pred, filterable)
  );
}));

},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_filter":111,"./internal/_isObject":123,"./internal/_reduce":135,"./internal/_xfilter":150,"./keys":173}],65:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xfind = require('./internal/_xfind');


/**
 * Returns the first element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Dispatches to the `find` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 *        desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.find(R.propEq('a', 2))(xs); //=> {a: 2}
 *      R.find(R.propEq('a', 4))(xs); //=> undefined
 */
module.exports = _curry2(_dispatchable(['find'], _xfind, function find(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx += 1;
  }
}));

},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xfind":151}],66:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xfindIndex = require('./internal/_xfindIndex');


/**
 * Returns the index of the first element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1}, {a: 2}, {a: 3}];
 *      R.findIndex(R.propEq('a', 2))(xs); //=> 1
 *      R.findIndex(R.propEq('a', 4))(xs); //=> -1
 */
module.exports = _curry2(_dispatchable([], _xfindIndex, function findIndex(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    if (fn(list[idx])) {
      return idx;
    }
    idx += 1;
  }
  return -1;
}));

},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xfindIndex":152}],67:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xfindLast = require('./internal/_xfindLast');


/**
 * Returns the last element of the list which matches the predicate, or
 * `undefined` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> a | undefined
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Object} The element found, or `undefined`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLast(R.propEq('a', 1))(xs); //=> {a: 1, b: 1}
 *      R.findLast(R.propEq('a', 4))(xs); //=> undefined
 */
module.exports = _curry2(_dispatchable([], _xfindLast, function findLast(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return list[idx];
    }
    idx -= 1;
  }
}));

},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xfindLast":153}],68:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xfindLastIndex = require('./internal/_xfindLastIndex');


/**
 * Returns the index of the last element of the list which matches the
 * predicate, or `-1` if no element matches.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> Boolean) -> [a] -> Number
 * @param {Function} fn The predicate function used to determine if the element is the
 * desired one.
 * @param {Array} list The array to consider.
 * @return {Number} The index of the element found, or `-1`.
 * @see R.transduce
 * @example
 *
 *      var xs = [{a: 1, b: 0}, {a:1, b: 1}];
 *      R.findLastIndex(R.propEq('a', 1))(xs); //=> 1
 *      R.findLastIndex(R.propEq('a', 4))(xs); //=> -1
 */
module.exports = _curry2(_dispatchable([], _xfindLastIndex, function findLastIndex(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    if (fn(list[idx])) {
      return idx;
    }
    idx -= 1;
  }
  return -1;
}));

},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xfindLastIndex":154}],69:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _makeFlat = require('./internal/_makeFlat');


/**
 * Returns a new list by pulling every item out of it (and all its sub-arrays)
 * and putting them in a new array, depth-first.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b]
 * @param {Array} list The array to consider.
 * @return {Array} The flattened list.
 * @see R.unnest
 * @example
 *
 *      R.flatten([1, 2, [3, 4], 5, [6, [7, 8, [9, [10, 11], 12]]]]);
 *      //=> [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]
 */
module.exports = _curry1(_makeFlat(true));

},{"./internal/_curry1":103,"./internal/_makeFlat":128}],70:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var curry = require('./curry');


/**
 * Returns a new function much like the supplied one, except that the first two
 * arguments' order is reversed.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> b -> c -> ... -> z) -> (b -> a -> c -> ... -> z)
 * @param {Function} fn The function to invoke with its first two parameters reversed.
 * @return {*} The result of invoking `fn` with its first two parameters' order reversed.
 * @example
 *
 *      var mergeThree = (a, b, c) => [].concat(a, b, c);
 *
 *      mergeThree(1, 2, 3); //=> [1, 2, 3]
 *
 *      R.flip(mergeThree)(1, 2, 3); //=> [2, 1, 3]
 * @symb R.flip(f)(a, b, c) = f(b, a, c)
 */
module.exports = _curry1(function flip(fn) {
  return curry(function(a, b) {
    var args = Array.prototype.slice.call(arguments, 0);
    args[0] = b;
    args[1] = a;
    return fn.apply(this, args);
  });
});

},{"./curry":42,"./internal/_curry1":103}],71:[function(require,module,exports){
var _checkForMethod = require('./internal/_checkForMethod');
var _curry2 = require('./internal/_curry2');


/**
 * Iterate over an input `list`, calling a provided function `fn` for each
 * element in the list.
 *
 * `fn` receives one argument: *(value)*.
 *
 * Note: `R.forEach` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.forEach` method. For more
 * details on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach#Description
 *
 * Also note that, unlike `Array.prototype.forEach`, Ramda's `forEach` returns
 * the original array. In some libraries this function is named `each`.
 *
 * Dispatches to the `forEach` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig (a -> *) -> [a] -> [a]
 * @param {Function} fn The function to invoke. Receives one argument, `value`.
 * @param {Array} list The list to iterate over.
 * @return {Array} The original list.
 * @see R.addIndex
 * @example
 *
 *      var printXPlusFive = x => console.log(x + 5);
 *      R.forEach(printXPlusFive, [1, 2, 3]); //=> [1, 2, 3]
 *      // logs 6
 *      // logs 7
 *      // logs 8
 * @symb R.forEach(f, [a, b, c]) = [a, b, c]
 */
module.exports = _curry2(_checkForMethod('forEach', function forEach(fn, list) {
  var len = list.length;
  var idx = 0;
  while (idx < len) {
    fn(list[idx]);
    idx += 1;
  }
  return list;
}));

},{"./internal/_checkForMethod":95,"./internal/_curry2":104}],72:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var keys = require('./keys');


/**
 * Iterate over an input `object`, calling a provided function `fn` for each
 * key and value in the object.
 *
 * `fn` receives three argument: *(value, key, obj)*.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Object
 * @sig ((a, String, StrMap a) -> Any) -> StrMap a -> StrMap a
 * @param {Function} fn The function to invoke. Receives three argument, `value`, `key`, `obj`.
 * @param {Object} obj The object to iterate over.
 * @return {Object} The original object.
 * @example
 *
 *      var printKeyConcatValue = (value, key) => console.log(key + ':' + value);
 *      R.forEachObjIndexed(printKeyConcatValue, {x: 1, y: 2}); //=> {x: 1, y: 2}
 *      // logs x:1
 *      // logs y:2
 * @symb R.forEachObjIndexed(f, {x: a, y: b}) = {x: a, y: b}
 */
module.exports = _curry2(function forEachObjIndexed(fn, obj) {
  var keyList = keys(obj);
  var idx = 0;
  while (idx < keyList.length) {
    var key = keyList[idx];
    fn(obj[key], key, obj);
    idx += 1;
  }
  return obj;
});

},{"./internal/_curry2":104,"./keys":173}],73:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Creates a new object from a list key-value pairs. If a key appears in
 * multiple pairs, the rightmost pair is included in the object.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [[k,v]] -> {k: v}
 * @param {Array} pairs An array of two-element arrays that will be the keys and values of the output object.
 * @return {Object} The object made by pairing up `keys` and `values`.
 * @see R.toPairs, R.pair
 * @example
 *
 *      R.fromPairs([['a', 1], ['b', 2], ['c', 3]]); //=> {a: 1, b: 2, c: 3}
 */
module.exports = _curry1(function fromPairs(pairs) {
  var result = {};
  var idx = 0;
  while (idx < pairs.length) {
    result[pairs[idx][0]] = pairs[idx][1];
    idx += 1;
  }
  return result;
});

},{"./internal/_curry1":103}],74:[function(require,module,exports){
var _checkForMethod = require('./internal/_checkForMethod');
var _curry2 = require('./internal/_curry2');
var reduceBy = require('./reduceBy');

/**
 * Splits a list into sub-lists stored in an object, based on the result of
 * calling a String-returning function on each element, and grouping the
 * results according to values returned.
 *
 * Dispatches to the `groupBy` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> String) -> [a] -> {String: [a]}
 * @param {Function} fn Function :: a -> String
 * @param {Array} list The array to group
 * @return {Object} An object with the output of `fn` for keys, mapped to arrays of elements
 *         that produced that key when passed to `fn`.
 * @see R.transduce
 * @example
 *
 *      var byGrade = R.groupBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Abby', score: 84},
 *                      {name: 'Eddy', score: 58},
 *                      // ...
 *                      {name: 'Jack', score: 69}];
 *      byGrade(students);
 *      // {
 *      //   'A': [{name: 'Dianne', score: 99}],
 *      //   'B': [{name: 'Abby', score: 84}]
 *      //   // ...,
 *      //   'F': [{name: 'Eddy', score: 58}]
 *      // }
 */
module.exports = _curry2(_checkForMethod('groupBy', reduceBy(function(acc, item) {
  if (acc == null) {
    acc = [];
  }
  acc.push(item);
  return acc;
}, null)));

},{"./internal/_checkForMethod":95,"./internal/_curry2":104,"./reduceBy":243}],75:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');

/**
 * Takes a list and returns a list of lists where each sublist's elements are
 * all "equal" according to the provided equality function.
 *
 * @func
 * @memberOf R
 * @since v0.21.0
 * @category List
 * @sig ((a, a) → Boolean) → [a] → [[a]]
 * @param {Function} fn Function for determining whether two given (adjacent)
 *        elements should be in the same group
 * @param {Array} list The array to group. Also accepts a string, which will be
 *        treated as a list of characters.
 * @return {List} A list that contains sublists of equal elements,
 *         whose concatenations are equal to the original list.
 * @example
 *
 * R.groupWith(R.equals, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3], [5], [8], [13], [21]]
 *
 * R.groupWith((a, b) => a % 2 === b % 2, [0, 1, 1, 2, 3, 5, 8, 13, 21])
 * //=> [[0], [1, 1], [2], [3, 5], [8], [13, 21]]
 *
 * R.groupWith(R.eqBy(isVowel), 'aestiou')
 * //=> ['ae', 'st', 'iou']
 */
module.exports = _curry2(function(fn, list) {
  var res = [];
  var idx = 0;
  var len = list.length;
  while (idx < len) {
    var nextidx = idx + 1;
    while (nextidx < len && fn(list[idx], list[nextidx])) {
      nextidx += 1;
    }
    res.push(list.slice(idx, nextidx));
    idx = nextidx;
  }
  return res;
});

},{"./internal/_curry2":104}],76:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns `true` if the first argument is greater than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.lt
 * @example
 *
 *      R.gt(2, 1); //=> true
 *      R.gt(2, 2); //=> false
 *      R.gt(2, 3); //=> false
 *      R.gt('a', 'z'); //=> false
 *      R.gt('z', 'a'); //=> true
 */
module.exports = _curry2(function gt(a, b) { return a > b; });

},{"./internal/_curry2":104}],77:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns `true` if the first argument is greater than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.lte
 * @example
 *
 *      R.gte(2, 1); //=> true
 *      R.gte(2, 2); //=> true
 *      R.gte(2, 3); //=> false
 *      R.gte('a', 'z'); //=> false
 *      R.gte('z', 'a'); //=> true
 */
module.exports = _curry2(function gte(a, b) { return a >= b; });

},{"./internal/_curry2":104}],78:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _has = require('./internal/_has');


/**
 * Returns whether or not an object has an own property with the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      var hasName = R.has('name');
 *      hasName({name: 'alice'});   //=> true
 *      hasName({name: 'bob'});     //=> true
 *      hasName({});                //=> false
 *
 *      var point = {x: 0, y: 0};
 *      var pointHas = R.has(R.__, point);
 *      pointHas('x');  //=> true
 *      pointHas('y');  //=> true
 *      pointHas('z');  //=> false
 */
module.exports = _curry2(_has);

},{"./internal/_curry2":104,"./internal/_has":115}],79:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns whether or not an object or its prototype chain has a property with
 * the specified name
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Object
 * @sig s -> {s: x} -> Boolean
 * @param {String} prop The name of the property to check for.
 * @param {Object} obj The object to query.
 * @return {Boolean} Whether the property exists.
 * @example
 *
 *      function Rectangle(width, height) {
 *        this.width = width;
 *        this.height = height;
 *      }
 *      Rectangle.prototype.area = function() {
 *        return this.width * this.height;
 *      };
 *
 *      var square = new Rectangle(2, 2);
 *      R.hasIn('width', square);  //=> true
 *      R.hasIn('area', square);  //=> true
 */
module.exports = _curry2(function hasIn(prop, obj) {
  return prop in obj;
});

},{"./internal/_curry2":104}],80:[function(require,module,exports){
var nth = require('./nth');


/**
 * Returns the first element of the given list or string. In some libraries
 * this function is named `first`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {Array|String} list
 * @return {*}
 * @see R.tail, R.init, R.last
 * @example
 *
 *      R.head(['fi', 'fo', 'fum']); //=> 'fi'
 *      R.head([]); //=> undefined
 *
 *      R.head('abc'); //=> 'a'
 *      R.head(''); //=> ''
 */
module.exports = nth(0);

},{"./nth":209}],81:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns true if its arguments are identical, false otherwise. Values are
 * identical if they reference the same memory. `NaN` is identical to `NaN`;
 * `0` and `-0` are not identical.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category Relation
 * @sig a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @example
 *
 *      var o = {};
 *      R.identical(o, o); //=> true
 *      R.identical(1, 1); //=> true
 *      R.identical(1, '1'); //=> false
 *      R.identical([], []); //=> false
 *      R.identical(0, -0); //=> false
 *      R.identical(NaN, NaN); //=> true
 */
module.exports = _curry2(function identical(a, b) {
  // SameValue algorithm
  if (a === b) { // Steps 1-5, 7-10
    // Steps 6.b-6.e: +0 != -0
    return a !== 0 || 1 / a === 1 / b;
  } else {
    // Step 6.a: NaN == NaN
    return a !== a && b !== b;
  }
});

},{"./internal/_curry2":104}],82:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _identity = require('./internal/_identity');


/**
 * A function that does nothing but return the parameter supplied to it. Good
 * as a default or placeholder function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig a -> a
 * @param {*} x The value to return.
 * @return {*} The input value, `x`.
 * @example
 *
 *      R.identity(1); //=> 1
 *
 *      var obj = {};
 *      R.identity(obj) === obj; //=> true
 * @symb R.identity(a) = a
 */
module.exports = _curry1(_identity);

},{"./internal/_curry1":103,"./internal/_identity":116}],83:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var curryN = require('./curryN');


/**
 * Creates a function that will process either the `onTrue` or the `onFalse`
 * function depending upon the result of the `condition` predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Logic
 * @sig (*... -> Boolean) -> (*... -> *) -> (*... -> *) -> (*... -> *)
 * @param {Function} condition A predicate function
 * @param {Function} onTrue A function to invoke when the `condition` evaluates to a truthy value.
 * @param {Function} onFalse A function to invoke when the `condition` evaluates to a falsy value.
 * @return {Function} A new unary function that will process either the `onTrue` or the `onFalse`
 *                    function depending upon the result of the `condition` predicate.
 * @see R.unless, R.when
 * @example
 *
 *      var incCount = R.ifElse(
 *        R.has('count'),
 *        R.over(R.lensProp('count'), R.inc),
 *        R.assoc('count', 1)
 *      );
 *      incCount({});           //=> { count: 1 }
 *      incCount({ count: 1 }); //=> { count: 2 }
 */
module.exports = _curry3(function ifElse(condition, onTrue, onFalse) {
  return curryN(Math.max(condition.length, onTrue.length, onFalse.length),
    function _ifElse() {
      return condition.apply(this, arguments) ? onTrue.apply(this, arguments) : onFalse.apply(this, arguments);
    }
  );
});

},{"./curryN":43,"./internal/_curry3":105}],84:[function(require,module,exports){
var add = require('./add');


/**
 * Increments its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number} n + 1
 * @see R.dec
 * @example
 *
 *      R.inc(42); //=> 43
 */
module.exports = add(1);

},{"./add":6}],85:[function(require,module,exports){
var reduceBy = require('./reduceBy');


/**
 * Given a function that generates a key, turns a list of objects into an
 * object indexing the objects by the given key. Note that if multiple
 * objects generate the same value for the indexing key only the last value
 * will be included in the generated object.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> String) -> [{k: v}] -> {k: {k: v}}
 * @param {Function} fn Function :: a -> String
 * @param {Array} array The array of objects to index
 * @return {Object} An object indexing each array element by the given property.
 * @example
 *
 *      var list = [{id: 'xyz', title: 'A'}, {id: 'abc', title: 'B'}];
 *      R.indexBy(R.prop('id'), list);
 *      //=> {abc: {id: 'abc', title: 'B'}, xyz: {id: 'xyz', title: 'A'}}
 */
module.exports = reduceBy(function(acc, elem) { return elem; }, null);

},{"./reduceBy":243}],86:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _indexOf = require('./internal/_indexOf');
var _isArray = require('./internal/_isArray');


/**
 * Returns the position of the first occurrence of an item in an array, or -1
 * if the item is not included in the array. `R.equals` is used to determine
 * equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.lastIndexOf
 * @example
 *
 *      R.indexOf(3, [1,2,3,4]); //=> 2
 *      R.indexOf(10, [1,2,3,4]); //=> -1
 */
module.exports = _curry2(function indexOf(target, xs) {
  return typeof xs.indexOf === 'function' && !_isArray(xs) ?
    xs.indexOf(target) :
    _indexOf(xs, target, 0);
});

},{"./internal/_curry2":104,"./internal/_indexOf":117,"./internal/_isArray":119}],87:[function(require,module,exports){
var slice = require('./slice');


/**
 * Returns all but the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.last, R.head, R.tail
 * @example
 *
 *      R.init([1, 2, 3]);  //=> [1, 2]
 *      R.init([1, 2]);     //=> [1]
 *      R.init([1]);        //=> []
 *      R.init([]);         //=> []
 *
 *      R.init('abc');  //=> 'ab'
 *      R.init('ab');   //=> 'a'
 *      R.init('a');    //=> ''
 *      R.init('');     //=> ''
 */
module.exports = slice(0, -1);

},{"./slice":255}],88:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Inserts the supplied element into the list, at index `index`. _Note that
 * this is not destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} index The position to insert the element
 * @param {*} elt The element to insert into the Array
 * @param {Array} list The list to insert into
 * @return {Array} A new Array with `elt` inserted at `index`.
 * @example
 *
 *      R.insert(2, 'x', [1,2,3,4]); //=> [1,2,'x',3,4]
 */
module.exports = _curry3(function insert(idx, elt, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  var result = Array.prototype.slice.call(list, 0);
  result.splice(idx, 0, elt);
  return result;
});

},{"./internal/_curry3":105}],89:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Inserts the sub-list into the list, at index `index`. _Note that this is not
 * destructive_: it returns a copy of the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category List
 * @sig Number -> [a] -> [a] -> [a]
 * @param {Number} index The position to insert the sub-list
 * @param {Array} elts The sub-list to insert into the Array
 * @param {Array} list The list to insert the sub-list into
 * @return {Array} A new Array with `elts` inserted starting at `index`.
 * @example
 *
 *      R.insertAll(2, ['x','y','z'], [1,2,3,4]); //=> [1,2,'x','y','z',3,4]
 */
module.exports = _curry3(function insertAll(idx, elts, list) {
  idx = idx < list.length && idx >= 0 ? idx : list.length;
  return [].concat(Array.prototype.slice.call(list, 0, idx),
                   elts,
                   Array.prototype.slice.call(list, idx));
});

},{"./internal/_curry3":105}],90:[function(require,module,exports){
var _contains = require('./_contains');


// A simple Set type that honours R.equals semantics
module.exports = (function() {
  function _Set() {
    /* globals Set */
    this._nativeSet = typeof Set === 'function' ? new Set() : null;
    this._items = {};
  }

  // until we figure out why jsdoc chokes on this
  // @param item The item to add to the Set
  // @returns {boolean} true if the item did not exist prior, otherwise false
  //
  _Set.prototype.add = function(item) {
    return !hasOrAdd(item, true, this);
  };

  //
  // @param item The item to check for existence in the Set
  // @returns {boolean} true if the item exists in the Set, otherwise false
  //
  _Set.prototype.has = function(item) {
    return hasOrAdd(item, false, this);
  };

  //
  // Combines the logic for checking whether an item is a member of the set and
  // for adding a new item to the set.
  //
  // @param item       The item to check or add to the Set instance.
  // @param shouldAdd  If true, the item will be added to the set if it doesn't
  //                   already exist.
  // @param set        The set instance to check or add to.
  // @return {boolean} true if the item already existed, otherwise false.
  //
  function hasOrAdd(item, shouldAdd, set) {
    var type = typeof item;
    var prevSize, newSize;
    switch (type) {
      case 'string':
      case 'number':
        // distinguish between +0 and -0
        if (item === 0 && 1 / item === -Infinity) {
          if (set._items['-0']) {
            return true;
          } else {
            if (shouldAdd) {
              set._items['-0'] = true;
            }
            return false;
          }
        }
        // these types can all utilise the native Set
        if (set._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set._nativeSet.size;
            set._nativeSet.add(item);
            newSize = set._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set._nativeSet.has(item);
          }
        } else {
          if (!(type in set._items)) {
            if (shouldAdd) {
              set._items[type] = {};
              set._items[type][item] = true;
            }
            return false;
          } else if (item in set._items[type]) {
            return true;
          } else {
            if (shouldAdd) {
              set._items[type][item] = true;
            }
            return false;
          }
        }

      case 'boolean':
        // set._items['boolean'] holds a two element array
        // representing [ falseExists, trueExists ]
        if (type in set._items) {
          var bIdx = item ? 1 : 0;
          if (set._items[type][bIdx]) {
            return true;
          } else {
            if (shouldAdd) {
              set._items[type][bIdx] = true;
            }
            return false;
          }
        } else {
          if (shouldAdd) {
            set._items[type] = item ? [false, true] : [true, false];
          }
          return false;
        }

      case 'function':
        // compare functions for reference equality
        if (set._nativeSet !== null) {
          if (shouldAdd) {
            prevSize = set._nativeSet.size;
            set._nativeSet.add(item);
            newSize = set._nativeSet.size;
            return newSize === prevSize;
          } else {
            return set._nativeSet.has(item);
          }
        } else {
          if (!(type in set._items)) {
            if (shouldAdd) {
              set._items[type] = [item];
            }
            return false;
          }
          if (!_contains(item, set._items[type])) {
            if (shouldAdd) {
              set._items[type].push(item);
            }
            return false;
          }
          return true;
        }

      case 'undefined':
        if (set._items[type]) {
          return true;
        } else {
          if (shouldAdd) {
            set._items[type] = true;
          }
          return false;
        }

      case 'object':
        if (item === null) {
          if (!set._items['null']) {
            if (shouldAdd) {
              set._items['null'] = true;
            }
            return false;
          }
          return true;
        }
      /* falls through */
      default:
        // reduce the search size of heterogeneous sets by creating buckets
        // for each type.
        type = Object.prototype.toString.call(item);
        if (!(type in set._items)) {
          if (shouldAdd) {
            set._items[type] = [item];
          }
          return false;
        }
        // scan through all previously applied items
        if (!_contains(item, set._items[type])) {
          if (shouldAdd) {
            set._items[type].push(item);
          }
          return false;
        }
        return true;
    }
  }
  return _Set;
}());

},{"./_contains":100}],91:[function(require,module,exports){
module.exports = function _aperture(n, list) {
  var idx = 0;
  var limit = list.length - (n - 1);
  var acc = new Array(limit >= 0 ? limit : 0);
  while (idx < limit) {
    acc[idx] = Array.prototype.slice.call(list, idx, idx + n);
    idx += 1;
  }
  return acc;
};

},{}],92:[function(require,module,exports){
module.exports = function _arity(n, fn) {
  /* eslint-disable no-unused-vars */
  switch (n) {
    case 0: return function() { return fn.apply(this, arguments); };
    case 1: return function(a0) { return fn.apply(this, arguments); };
    case 2: return function(a0, a1) { return fn.apply(this, arguments); };
    case 3: return function(a0, a1, a2) { return fn.apply(this, arguments); };
    case 4: return function(a0, a1, a2, a3) { return fn.apply(this, arguments); };
    case 5: return function(a0, a1, a2, a3, a4) { return fn.apply(this, arguments); };
    case 6: return function(a0, a1, a2, a3, a4, a5) { return fn.apply(this, arguments); };
    case 7: return function(a0, a1, a2, a3, a4, a5, a6) { return fn.apply(this, arguments); };
    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) { return fn.apply(this, arguments); };
    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) { return fn.apply(this, arguments); };
    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) { return fn.apply(this, arguments); };
    default: throw new Error('First argument to _arity must be a non-negative integer no greater than ten');
  }
};

},{}],93:[function(require,module,exports){
module.exports = function _arrayFromIterator(iter) {
  var list = [];
  var next;
  while (!(next = iter.next()).done) {
    list.push(next.value);
  }
  return list;
};

},{}],94:[function(require,module,exports){
var _objectAssign = require('./_objectAssign');

module.exports =
  typeof Object.assign === 'function' ? Object.assign : _objectAssign;

},{"./_objectAssign":130}],95:[function(require,module,exports){
var _isArray = require('./_isArray');


/**
 * This checks whether a function has a [methodname] function. If it isn't an
 * array it will execute that function otherwise it will default to the ramda
 * implementation.
 *
 * @private
 * @param {Function} fn ramda implemtation
 * @param {String} methodname property to check for a custom implementation
 * @return {Object} Whatever the return value of the method is.
 */
module.exports = function _checkForMethod(methodname, fn) {
  return function() {
    var length = arguments.length;
    if (length === 0) {
      return fn();
    }
    var obj = arguments[length - 1];
    return (_isArray(obj) || typeof obj[methodname] !== 'function') ?
      fn.apply(this, arguments) :
      obj[methodname].apply(obj, Array.prototype.slice.call(arguments, 0, length - 1));
  };
};

},{"./_isArray":119}],96:[function(require,module,exports){
var _cloneRegExp = require('./_cloneRegExp');
var type = require('../type');


/**
 * Copies an object.
 *
 * @private
 * @param {*} value The value to be copied
 * @param {Array} refFrom Array containing the source references
 * @param {Array} refTo Array containing the copied source references
 * @param {Boolean} deep Whether or not to perform deep cloning.
 * @return {*} The copied value.
 */
module.exports = function _clone(value, refFrom, refTo, deep) {
  var copy = function copy(copiedValue) {
    var len = refFrom.length;
    var idx = 0;
    while (idx < len) {
      if (value === refFrom[idx]) {
        return refTo[idx];
      }
      idx += 1;
    }
    refFrom[idx + 1] = value;
    refTo[idx + 1] = copiedValue;
    for (var key in value) {
      copiedValue[key] = deep ?
        _clone(value[key], refFrom, refTo, true) : value[key];
    }
    return copiedValue;
  };
  switch (type(value)) {
    case 'Object':  return copy({});
    case 'Array':   return copy([]);
    case 'Date':    return new Date(value.valueOf());
    case 'RegExp':  return _cloneRegExp(value);
    default:        return value;
  }
};

},{"../type":285,"./_cloneRegExp":97}],97:[function(require,module,exports){
module.exports = function _cloneRegExp(pattern) {
  return new RegExp(pattern.source, (pattern.global     ? 'g' : '') +
                                    (pattern.ignoreCase ? 'i' : '') +
                                    (pattern.multiline  ? 'm' : '') +
                                    (pattern.sticky     ? 'y' : '') +
                                    (pattern.unicode    ? 'u' : ''));
};

},{}],98:[function(require,module,exports){
module.exports = function _complement(f) {
  return function() {
    return !f.apply(this, arguments);
  };
};

},{}],99:[function(require,module,exports){
/**
 * Private `concat` function to merge two array-like objects.
 *
 * @private
 * @param {Array|Arguments} [set1=[]] An array-like object.
 * @param {Array|Arguments} [set2=[]] An array-like object.
 * @return {Array} A new, merged array.
 * @example
 *
 *      _concat([4, 5, 6], [1, 2, 3]); //=> [4, 5, 6, 1, 2, 3]
 */
module.exports = function _concat(set1, set2) {
  set1 = set1 || [];
  set2 = set2 || [];
  var idx;
  var len1 = set1.length;
  var len2 = set2.length;
  var result = [];

  idx = 0;
  while (idx < len1) {
    result[result.length] = set1[idx];
    idx += 1;
  }
  idx = 0;
  while (idx < len2) {
    result[result.length] = set2[idx];
    idx += 1;
  }
  return result;
};

},{}],100:[function(require,module,exports){
var _indexOf = require('./_indexOf');


module.exports = function _contains(a, list) {
  return _indexOf(list, a, 0) >= 0;
};

},{"./_indexOf":117}],101:[function(require,module,exports){
module.exports = function _containsWith(pred, x, list) {
  var idx = 0;
  var len = list.length;

  while (idx < len) {
    if (pred(x, list[idx])) {
      return true;
    }
    idx += 1;
  }
  return false;
};

},{}],102:[function(require,module,exports){
var _arity = require('./_arity');
var _curry2 = require('./_curry2');


module.exports = function _createPartialApplicator(concat) {
  return _curry2(function(fn, args) {
    return _arity(Math.max(0, fn.length - args.length), function() {
      return fn.apply(this, concat(args, arguments));
    });
  });
};

},{"./_arity":92,"./_curry2":104}],103:[function(require,module,exports){
var _isPlaceholder = require('./_isPlaceholder');


/**
 * Optimized internal one-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry1(fn) {
  return function f1(a) {
    if (arguments.length === 0 || _isPlaceholder(a)) {
      return f1;
    } else {
      return fn.apply(this, arguments);
    }
  };
};

},{"./_isPlaceholder":124}],104:[function(require,module,exports){
var _curry1 = require('./_curry1');
var _isPlaceholder = require('./_isPlaceholder');


/**
 * Optimized internal two-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry2(fn) {
  return function f2(a, b) {
    switch (arguments.length) {
      case 0:
        return f2;
      case 1:
        return _isPlaceholder(a) ? f2
             : _curry1(function(_b) { return fn(a, _b); });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f2
             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b); })
             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b); })
             : fn(a, b);
    }
  };
};

},{"./_curry1":103,"./_isPlaceholder":124}],105:[function(require,module,exports){
var _curry1 = require('./_curry1');
var _curry2 = require('./_curry2');
var _isPlaceholder = require('./_isPlaceholder');


/**
 * Optimized internal three-arity curry function.
 *
 * @private
 * @category Function
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curry3(fn) {
  return function f3(a, b, c) {
    switch (arguments.length) {
      case 0:
        return f3;
      case 1:
        return _isPlaceholder(a) ? f3
             : _curry2(function(_b, _c) { return fn(a, _b, _c); });
      case 2:
        return _isPlaceholder(a) && _isPlaceholder(b) ? f3
             : _isPlaceholder(a) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
             : _isPlaceholder(b) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
             : _curry1(function(_c) { return fn(a, b, _c); });
      default:
        return _isPlaceholder(a) && _isPlaceholder(b) && _isPlaceholder(c) ? f3
             : _isPlaceholder(a) && _isPlaceholder(b) ? _curry2(function(_a, _b) { return fn(_a, _b, c); })
             : _isPlaceholder(a) && _isPlaceholder(c) ? _curry2(function(_a, _c) { return fn(_a, b, _c); })
             : _isPlaceholder(b) && _isPlaceholder(c) ? _curry2(function(_b, _c) { return fn(a, _b, _c); })
             : _isPlaceholder(a) ? _curry1(function(_a) { return fn(_a, b, c); })
             : _isPlaceholder(b) ? _curry1(function(_b) { return fn(a, _b, c); })
             : _isPlaceholder(c) ? _curry1(function(_c) { return fn(a, b, _c); })
             : fn(a, b, c);
    }
  };
};

},{"./_curry1":103,"./_curry2":104,"./_isPlaceholder":124}],106:[function(require,module,exports){
var _arity = require('./_arity');
var _isPlaceholder = require('./_isPlaceholder');


/**
 * Internal curryN function.
 *
 * @private
 * @category Function
 * @param {Number} length The arity of the curried function.
 * @param {Array} received An array of arguments received thus far.
 * @param {Function} fn The function to curry.
 * @return {Function} The curried function.
 */
module.exports = function _curryN(length, received, fn) {
  return function() {
    var combined = [];
    var argsIdx = 0;
    var left = length;
    var combinedIdx = 0;
    while (combinedIdx < received.length || argsIdx < arguments.length) {
      var result;
      if (combinedIdx < received.length &&
          (!_isPlaceholder(received[combinedIdx]) ||
           argsIdx >= arguments.length)) {
        result = received[combinedIdx];
      } else {
        result = arguments[argsIdx];
        argsIdx += 1;
      }
      combined[combinedIdx] = result;
      if (!_isPlaceholder(result)) {
        left -= 1;
      }
      combinedIdx += 1;
    }
    return left <= 0 ? fn.apply(this, combined)
                     : _arity(left, _curryN(length, combined, fn));
  };
};

},{"./_arity":92,"./_isPlaceholder":124}],107:[function(require,module,exports){
var _isArray = require('./_isArray');
var _isTransformer = require('./_isTransformer');


/**
 * Returns a function that dispatches with different strategies based on the
 * object in list position (last argument). If it is an array, executes [fn].
 * Otherwise, if it has a function with one of the given method names, it will
 * execute that function (functor case). Otherwise, if it is a transformer,
 * uses transducer [xf] to return a new transformer (transducer case).
 * Otherwise, it will default to executing [fn].
 *
 * @private
 * @param {Array} methodNames properties to check for a custom implementation
 * @param {Function} xf transducer to initialize if object is transformer
 * @param {Function} fn default ramda implementation
 * @return {Function} A function that dispatches on object in list position
 */
module.exports = function _dispatchable(methodNames, xf, fn) {
  return function() {
    if (arguments.length === 0) {
      return fn();
    }
    var args = Array.prototype.slice.call(arguments, 0);
    var obj = args.pop();
    if (!_isArray(obj)) {
      var idx = 0;
      while (idx < methodNames.length) {
        if (typeof obj[methodNames[idx]] === 'function') {
          return obj[methodNames[idx]].apply(obj, args);
        }
        idx += 1;
      }
      if (_isTransformer(obj)) {
        var transducer = xf.apply(null, args);
        return transducer(obj);
      }
    }
    return fn.apply(this, arguments);
  };
};

},{"./_isArray":119,"./_isTransformer":127}],108:[function(require,module,exports){
var take = require('../take');

module.exports = function dropLast(n, xs) {
  return take(n < xs.length ? xs.length - n : 0, xs);
};

},{"../take":268}],109:[function(require,module,exports){
module.exports = function dropLastWhile(pred, list) {
  var idx = list.length - 1;
  while (idx >= 0 && pred(list[idx])) {
    idx -= 1;
  }
  return Array.prototype.slice.call(list, 0, idx + 1);
};

},{}],110:[function(require,module,exports){
var _arrayFromIterator = require('./_arrayFromIterator');
var _functionName = require('./_functionName');
var _has = require('./_has');
var identical = require('../identical');
var keys = require('../keys');
var type = require('../type');


module.exports = function _equals(a, b, stackA, stackB) {
  if (identical(a, b)) {
    return true;
  }

  if (type(a) !== type(b)) {
    return false;
  }

  if (a == null || b == null) {
    return false;
  }

  if (typeof a.equals === 'function' || typeof b.equals === 'function') {
    return typeof a.equals === 'function' && a.equals(b) &&
           typeof b.equals === 'function' && b.equals(a);
  }

  switch (type(a)) {
    case 'Arguments':
    case 'Array':
    case 'Object':
      if (typeof a.constructor === 'function' &&
          _functionName(a.constructor) === 'Promise') {
        return a === b;
      }
      break;
    case 'Boolean':
    case 'Number':
    case 'String':
      if (!(typeof a === typeof b && identical(a.valueOf(), b.valueOf()))) {
        return false;
      }
      break;
    case 'Date':
      if (!identical(a.valueOf(), b.valueOf())) {
        return false;
      }
      break;
    case 'Error':
      return a.name === b.name && a.message === b.message;
    case 'RegExp':
      if (!(a.source === b.source &&
            a.global === b.global &&
            a.ignoreCase === b.ignoreCase &&
            a.multiline === b.multiline &&
            a.sticky === b.sticky &&
            a.unicode === b.unicode)) {
        return false;
      }
      break;
    case 'Map':
    case 'Set':
      if (!_equals(_arrayFromIterator(a.entries()), _arrayFromIterator(b.entries()), stackA, stackB)) {
        return false;
      }
      break;
    case 'Int8Array':
    case 'Uint8Array':
    case 'Uint8ClampedArray':
    case 'Int16Array':
    case 'Uint16Array':
    case 'Int32Array':
    case 'Uint32Array':
    case 'Float32Array':
    case 'Float64Array':
      break;
    case 'ArrayBuffer':
      break;
    default:
      // Values of other types are only equal if identical.
      return false;
  }

  var keysA = keys(a);
  if (keysA.length !== keys(b).length) {
    return false;
  }

  var idx = stackA.length - 1;
  while (idx >= 0) {
    if (stackA[idx] === a) {
      return stackB[idx] === b;
    }
    idx -= 1;
  }

  stackA.push(a);
  stackB.push(b);
  idx = keysA.length - 1;
  while (idx >= 0) {
    var key = keysA[idx];
    if (!(_has(key, b) && _equals(b[key], a[key], stackA, stackB))) {
      return false;
    }
    idx -= 1;
  }
  stackA.pop();
  stackB.pop();
  return true;
};

},{"../identical":81,"../keys":173,"../type":285,"./_arrayFromIterator":93,"./_functionName":114,"./_has":115}],111:[function(require,module,exports){
module.exports = function _filter(fn, list) {
  var idx = 0;
  var len = list.length;
  var result = [];

  while (idx < len) {
    if (fn(list[idx])) {
      result[result.length] = list[idx];
    }
    idx += 1;
  }
  return result;
};

},{}],112:[function(require,module,exports){
var _forceReduced = require('./_forceReduced');
var _reduce = require('./_reduce');
var _xfBase = require('./_xfBase');
var isArrayLike = require('../isArrayLike');

module.exports = (function() {
  var preservingReduced = function(xf) {
    return {
      '@@transducer/init': _xfBase.init,
      '@@transducer/result': function(result) {
        return xf['@@transducer/result'](result);
      },
      '@@transducer/step': function(result, input) {
        var ret = xf['@@transducer/step'](result, input);
        return ret['@@transducer/reduced'] ? _forceReduced(ret) : ret;
      }
    };
  };

  return function _xcat(xf) {
    var rxf = preservingReduced(xf);
    return {
      '@@transducer/init': _xfBase.init,
      '@@transducer/result': function(result) {
        return rxf['@@transducer/result'](result);
      },
      '@@transducer/step': function(result, input) {
        return !isArrayLike(input) ? _reduce(rxf, result, [input]) : _reduce(rxf, result, input);
      }
    };
  };
}());

},{"../isArrayLike":168,"./_forceReduced":113,"./_reduce":135,"./_xfBase":149}],113:[function(require,module,exports){
module.exports = function _forceReduced(x) {
  return {
    '@@transducer/value': x,
    '@@transducer/reduced': true
  };
};

},{}],114:[function(require,module,exports){
module.exports = function _functionName(f) {
  // String(x => x) evaluates to "x => x", so the pattern may not match.
  var match = String(f).match(/^function (\w*)/);
  return match == null ? '' : match[1];
};

},{}],115:[function(require,module,exports){
module.exports = function _has(prop, obj) {
  return Object.prototype.hasOwnProperty.call(obj, prop);
};

},{}],116:[function(require,module,exports){
module.exports = function _identity(x) { return x; };

},{}],117:[function(require,module,exports){
var equals = require('../equals');


module.exports = function _indexOf(list, a, idx) {
  var inf, item;
  // Array.prototype.indexOf doesn't exist below IE9
  if (typeof list.indexOf === 'function') {
    switch (typeof a) {
      case 'number':
        if (a === 0) {
          // manually crawl the list to distinguish between +0 and -0
          inf = 1 / a;
          while (idx < list.length) {
            item = list[idx];
            if (item === 0 && 1 / item === inf) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        } else if (a !== a) {
          // NaN
          while (idx < list.length) {
            item = list[idx];
            if (typeof item === 'number' && item !== item) {
              return idx;
            }
            idx += 1;
          }
          return -1;
        }
        // non-zero numbers can utilise Set
        return list.indexOf(a, idx);

      // all these types can utilise Set
      case 'string':
      case 'boolean':
      case 'function':
      case 'undefined':
        return list.indexOf(a, idx);

      case 'object':
        if (a === null) {
          // null can utilise Set
          return list.indexOf(a, idx);
        }
    }
  }
  // anything else not covered above, defer to R.equals
  while (idx < list.length) {
    if (equals(list[idx], a)) {
      return idx;
    }
    idx += 1;
  }
  return -1;
};

},{"../equals":62}],118:[function(require,module,exports){
var _has = require('./_has');


module.exports = (function() {
  var toString = Object.prototype.toString;
  return toString.call(arguments) === '[object Arguments]' ?
    function _isArguments(x) { return toString.call(x) === '[object Arguments]'; } :
    function _isArguments(x) { return _has('callee', x); };
}());

},{"./_has":115}],119:[function(require,module,exports){
/**
 * Tests whether or not an object is an array.
 *
 * @private
 * @param {*} val The object to test.
 * @return {Boolean} `true` if `val` is an array, `false` otherwise.
 * @example
 *
 *      _isArray([]); //=> true
 *      _isArray(null); //=> false
 *      _isArray({}); //=> false
 */
module.exports = Array.isArray || function _isArray(val) {
  return (val != null &&
          val.length >= 0 &&
          Object.prototype.toString.call(val) === '[object Array]');
};

},{}],120:[function(require,module,exports){
module.exports = function _isFunction(x) {
  return Object.prototype.toString.call(x) === '[object Function]';
};

},{}],121:[function(require,module,exports){
/**
 * Determine if the passed argument is an integer.
 *
 * @private
 * @param {*} n
 * @category Type
 * @return {Boolean}
 */
module.exports = Number.isInteger || function _isInteger(n) {
  return (n << 0) === n;
};

},{}],122:[function(require,module,exports){
module.exports = function _isNumber(x) {
  return Object.prototype.toString.call(x) === '[object Number]';
};

},{}],123:[function(require,module,exports){
module.exports = function _isObject(x) {
  return Object.prototype.toString.call(x) === '[object Object]';
};

},{}],124:[function(require,module,exports){
module.exports = function _isPlaceholder(a) {
  return a != null &&
         typeof a === 'object' &&
         a['@@functional/placeholder'] === true;
};

},{}],125:[function(require,module,exports){
module.exports = function _isRegExp(x) {
  return Object.prototype.toString.call(x) === '[object RegExp]';
};

},{}],126:[function(require,module,exports){
module.exports = function _isString(x) {
  return Object.prototype.toString.call(x) === '[object String]';
};

},{}],127:[function(require,module,exports){
module.exports = function _isTransformer(obj) {
  return typeof obj['@@transducer/step'] === 'function';
};

},{}],128:[function(require,module,exports){
var isArrayLike = require('../isArrayLike');


/**
 * `_makeFlat` is a helper function that returns a one-level or fully recursive
 * function based on the flag passed in.
 *
 * @private
 */
module.exports = function _makeFlat(recursive) {
  return function flatt(list) {
    var value, jlen, j;
    var result = [];
    var idx = 0;
    var ilen = list.length;

    while (idx < ilen) {
      if (isArrayLike(list[idx])) {
        value = recursive ? flatt(list[idx]) : list[idx];
        j = 0;
        jlen = value.length;
        while (j < jlen) {
          result[result.length] = value[j];
          j += 1;
        }
      } else {
        result[result.length] = list[idx];
      }
      idx += 1;
    }
    return result;
  };
};

},{"../isArrayLike":168}],129:[function(require,module,exports){
module.exports = function _map(fn, functor) {
  var idx = 0;
  var len = functor.length;
  var result = Array(len);
  while (idx < len) {
    result[idx] = fn(functor[idx]);
    idx += 1;
  }
  return result;
};

},{}],130:[function(require,module,exports){
var _has = require('./_has');

// Based on https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
module.exports = function _objectAssign(target) {
  if (target == null) {
    throw new TypeError('Cannot convert undefined or null to object');
  }

  var output = Object(target);
  var idx = 1;
  var length = arguments.length;
  while (idx < length) {
    var source = arguments[idx];
    if (source != null) {
      for (var nextKey in source) {
        if (_has(nextKey, source)) {
          output[nextKey] = source[nextKey];
        }
      }
    }
    idx += 1;
  }
  return output;
};

},{"./_has":115}],131:[function(require,module,exports){
module.exports = function _of(x) { return [x]; };

},{}],132:[function(require,module,exports){
module.exports = function _pipe(f, g) {
  return function() {
    return g.call(this, f.apply(this, arguments));
  };
};

},{}],133:[function(require,module,exports){
module.exports = function _pipeP(f, g) {
  return function() {
    var ctx = this;
    return f.apply(ctx, arguments).then(function(x) {
      return g.call(ctx, x);
    });
  };
};

},{}],134:[function(require,module,exports){
module.exports = function _quote(s) {
  var escaped = s
    .replace(/\\/g, '\\\\')
    .replace(/[\b]/g, '\\b')  // \b matches word boundary; [\b] matches backspace
    .replace(/\f/g, '\\f')
    .replace(/\n/g, '\\n')
    .replace(/\r/g, '\\r')
    .replace(/\t/g, '\\t')
    .replace(/\v/g, '\\v')
    .replace(/\0/g, '\\0');

  return '"' + escaped.replace(/"/g, '\\"') + '"';
};

},{}],135:[function(require,module,exports){
var _xwrap = require('./_xwrap');
var bind = require('../bind');
var isArrayLike = require('../isArrayLike');


module.exports = (function() {
  function _arrayReduce(xf, acc, list) {
    var idx = 0;
    var len = list.length;
    while (idx < len) {
      acc = xf['@@transducer/step'](acc, list[idx]);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      idx += 1;
    }
    return xf['@@transducer/result'](acc);
  }

  function _iterableReduce(xf, acc, iter) {
    var step = iter.next();
    while (!step.done) {
      acc = xf['@@transducer/step'](acc, step.value);
      if (acc && acc['@@transducer/reduced']) {
        acc = acc['@@transducer/value'];
        break;
      }
      step = iter.next();
    }
    return xf['@@transducer/result'](acc);
  }

  function _methodReduce(xf, acc, obj) {
    return xf['@@transducer/result'](obj.reduce(bind(xf['@@transducer/step'], xf), acc));
  }

  var symIterator = (typeof Symbol !== 'undefined') ? Symbol.iterator : '@@iterator';
  return function _reduce(fn, acc, list) {
    if (typeof fn === 'function') {
      fn = _xwrap(fn);
    }
    if (isArrayLike(list)) {
      return _arrayReduce(fn, acc, list);
    }
    if (typeof list.reduce === 'function') {
      return _methodReduce(fn, acc, list);
    }
    if (list[symIterator] != null) {
      return _iterableReduce(fn, acc, list[symIterator]());
    }
    if (typeof list.next === 'function') {
      return _iterableReduce(fn, acc, list);
    }
    throw new TypeError('reduce: list must be array or iterable');
  };
}());

},{"../bind":24,"../isArrayLike":168,"./_xwrap":159}],136:[function(require,module,exports){
module.exports = function _reduced(x) {
  return x && x['@@transducer/reduced'] ? x :
    {
      '@@transducer/value': x,
      '@@transducer/reduced': true
    };
};

},{}],137:[function(require,module,exports){
var _assign = require('./_assign');
var _identity = require('./_identity');
var _isTransformer = require('./_isTransformer');
var isArrayLike = require('../isArrayLike');
var objOf = require('../objOf');


module.exports = (function() {
  var _stepCatArray = {
    '@@transducer/init': Array,
    '@@transducer/step': function(xs, x) {
      xs.push(x);
      return xs;
    },
    '@@transducer/result': _identity
  };
  var _stepCatString = {
    '@@transducer/init': String,
    '@@transducer/step': function(a, b) { return a + b; },
    '@@transducer/result': _identity
  };
  var _stepCatObject = {
    '@@transducer/init': Object,
    '@@transducer/step': function(result, input) {
      return _assign(
        result,
        isArrayLike(input) ? objOf(input[0], input[1]) : input
      );
    },
    '@@transducer/result': _identity
  };

  return function _stepCat(obj) {
    if (_isTransformer(obj)) {
      return obj;
    }
    if (isArrayLike(obj)) {
      return _stepCatArray;
    }
    if (typeof obj === 'string') {
      return _stepCatString;
    }
    if (typeof obj === 'object') {
      return _stepCatObject;
    }
    throw new Error('Cannot create transformer for ' + obj);
  };
}());

},{"../isArrayLike":168,"../objOf":211,"./_assign":94,"./_identity":116,"./_isTransformer":127}],138:[function(require,module,exports){
/**
 * Polyfill from <https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/toISOString>.
 */
module.exports = (function() {
  var pad = function pad(n) { return (n < 10 ? '0' : '') + n; };

  return typeof Date.prototype.toISOString === 'function' ?
    function _toISOString(d) {
      return d.toISOString();
    } :
    function _toISOString(d) {
      return (
        d.getUTCFullYear() + '-' +
        pad(d.getUTCMonth() + 1) + '-' +
        pad(d.getUTCDate()) + 'T' +
        pad(d.getUTCHours()) + ':' +
        pad(d.getUTCMinutes()) + ':' +
        pad(d.getUTCSeconds()) + '.' +
        (d.getUTCMilliseconds() / 1000).toFixed(3).slice(2, 5) + 'Z'
      );
    };
}());

},{}],139:[function(require,module,exports){
var _contains = require('./_contains');
var _map = require('./_map');
var _quote = require('./_quote');
var _toISOString = require('./_toISOString');
var keys = require('../keys');
var reject = require('../reject');


module.exports = function _toString(x, seen) {
  var recur = function recur(y) {
    var xs = seen.concat([x]);
    return _contains(y, xs) ? '<Circular>' : _toString(y, xs);
  };

  //  mapPairs :: (Object, [String]) -> [String]
  var mapPairs = function(obj, keys) {
    return _map(function(k) { return _quote(k) + ': ' + recur(obj[k]); }, keys.slice().sort());
  };

  switch (Object.prototype.toString.call(x)) {
    case '[object Arguments]':
      return '(function() { return arguments; }(' + _map(recur, x).join(', ') + '))';
    case '[object Array]':
      return '[' + _map(recur, x).concat(mapPairs(x, reject(function(k) { return /^\d+$/.test(k); }, keys(x)))).join(', ') + ']';
    case '[object Boolean]':
      return typeof x === 'object' ? 'new Boolean(' + recur(x.valueOf()) + ')' : x.toString();
    case '[object Date]':
      return 'new Date(' + (isNaN(x.valueOf()) ? recur(NaN) : _quote(_toISOString(x))) + ')';
    case '[object Null]':
      return 'null';
    case '[object Number]':
      return typeof x === 'object' ? 'new Number(' + recur(x.valueOf()) + ')' : 1 / x === -Infinity ? '-0' : x.toString(10);
    case '[object String]':
      return typeof x === 'object' ? 'new String(' + recur(x.valueOf()) + ')' : _quote(x);
    case '[object Undefined]':
      return 'undefined';
    default:
      if (typeof x.toString === 'function') {
        var repr = x.toString();
        if (repr !== '[object Object]') {
          return repr;
        }
      }
      return '{' + mapPairs(x, keys(x)).join(', ') + '}';
  }
};

},{"../keys":173,"../reject":247,"./_contains":100,"./_map":129,"./_quote":134,"./_toISOString":138}],140:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _reduced = require('./_reduced');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XAll(f, xf) {
    this.xf = xf;
    this.f = f;
    this.all = true;
  }
  XAll.prototype['@@transducer/init'] = _xfBase.init;
  XAll.prototype['@@transducer/result'] = function(result) {
    if (this.all) {
      result = this.xf['@@transducer/step'](result, true);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAll.prototype['@@transducer/step'] = function(result, input) {
    if (!this.f(input)) {
      this.all = false;
      result = _reduced(this.xf['@@transducer/step'](result, false));
    }
    return result;
  };

  return _curry2(function _xall(f, xf) { return new XAll(f, xf); });
}());

},{"./_curry2":104,"./_reduced":136,"./_xfBase":149}],141:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _reduced = require('./_reduced');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XAny(f, xf) {
    this.xf = xf;
    this.f = f;
    this.any = false;
  }
  XAny.prototype['@@transducer/init'] = _xfBase.init;
  XAny.prototype['@@transducer/result'] = function(result) {
    if (!this.any) {
      result = this.xf['@@transducer/step'](result, false);
    }
    return this.xf['@@transducer/result'](result);
  };
  XAny.prototype['@@transducer/step'] = function(result, input) {
    if (this.f(input)) {
      this.any = true;
      result = _reduced(this.xf['@@transducer/step'](result, true));
    }
    return result;
  };

  return _curry2(function _xany(f, xf) { return new XAny(f, xf); });
}());

},{"./_curry2":104,"./_reduced":136,"./_xfBase":149}],142:[function(require,module,exports){
var _concat = require('./_concat');
var _curry2 = require('./_curry2');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XAperture(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XAperture.prototype['@@transducer/init'] = _xfBase.init;
  XAperture.prototype['@@transducer/result'] = function(result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XAperture.prototype['@@transducer/step'] = function(result, input) {
    this.store(input);
    return this.full ? this.xf['@@transducer/step'](result, this.getCopy()) : result;
  };
  XAperture.prototype.store = function(input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };
  XAperture.prototype.getCopy = function() {
    return _concat(Array.prototype.slice.call(this.acc, this.pos),
                   Array.prototype.slice.call(this.acc, 0, this.pos));
  };

  return _curry2(function _xaperture(n, xf) { return new XAperture(n, xf); });
}());

},{"./_concat":99,"./_curry2":104,"./_xfBase":149}],143:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _flatCat = require('./_flatCat');
var map = require('../map');


module.exports = _curry2(function _xchain(f, xf) {
  return map(f, _flatCat(xf));
});

},{"../map":186,"./_curry2":104,"./_flatCat":112}],144:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XDrop(n, xf) {
    this.xf = xf;
    this.n = n;
  }
  XDrop.prototype['@@transducer/init'] = _xfBase.init;
  XDrop.prototype['@@transducer/result'] = _xfBase.result;
  XDrop.prototype['@@transducer/step'] = function(result, input) {
    if (this.n > 0) {
      this.n -= 1;
      return result;
    }
    return this.xf['@@transducer/step'](result, input);
  };

  return _curry2(function _xdrop(n, xf) { return new XDrop(n, xf); });
}());

},{"./_curry2":104,"./_xfBase":149}],145:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XDropLast(n, xf) {
    this.xf = xf;
    this.pos = 0;
    this.full = false;
    this.acc = new Array(n);
  }
  XDropLast.prototype['@@transducer/init'] = _xfBase.init;
  XDropLast.prototype['@@transducer/result'] =  function(result) {
    this.acc = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLast.prototype['@@transducer/step'] = function(result, input) {
    if (this.full) {
      result = this.xf['@@transducer/step'](result, this.acc[this.pos]);
    }
    this.store(input);
    return result;
  };
  XDropLast.prototype.store = function(input) {
    this.acc[this.pos] = input;
    this.pos += 1;
    if (this.pos === this.acc.length) {
      this.pos = 0;
      this.full = true;
    }
  };

  return _curry2(function _xdropLast(n, xf) { return new XDropLast(n, xf); });
}());

},{"./_curry2":104,"./_xfBase":149}],146:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _reduce = require('./_reduce');
var _xfBase = require('./_xfBase');

module.exports = (function() {
  function XDropLastWhile(fn, xf) {
    this.f = fn;
    this.retained = [];
    this.xf = xf;
  }
  XDropLastWhile.prototype['@@transducer/init'] = _xfBase.init;
  XDropLastWhile.prototype['@@transducer/result'] = function(result) {
    this.retained = null;
    return this.xf['@@transducer/result'](result);
  };
  XDropLastWhile.prototype['@@transducer/step'] = function(result, input) {
    return this.f(input) ? this.retain(result, input)
                         : this.flush(result, input);
  };
  XDropLastWhile.prototype.flush = function(result, input) {
    result = _reduce(
      this.xf['@@transducer/step'],
      result,
      this.retained
    );
    this.retained = [];
    return this.xf['@@transducer/step'](result, input);
  };
  XDropLastWhile.prototype.retain = function(result, input) {
    this.retained.push(input);
    return result;
  };

  return _curry2(function _xdropLastWhile(fn, xf) { return new XDropLastWhile(fn, xf); });
}());

},{"./_curry2":104,"./_reduce":135,"./_xfBase":149}],147:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XDropRepeatsWith(pred, xf) {
    this.xf = xf;
    this.pred = pred;
    this.lastValue = undefined;
    this.seenFirstValue = false;
  }

  XDropRepeatsWith.prototype['@@transducer/init'] = _xfBase.init;
  XDropRepeatsWith.prototype['@@transducer/result'] = _xfBase.result;
  XDropRepeatsWith.prototype['@@transducer/step'] = function(result, input) {
    var sameAsLast = false;
    if (!this.seenFirstValue) {
      this.seenFirstValue = true;
    } else if (this.pred(this.lastValue, input)) {
      sameAsLast = true;
    }
    this.lastValue = input;
    return sameAsLast ? result : this.xf['@@transducer/step'](result, input);
  };

  return _curry2(function _xdropRepeatsWith(pred, xf) { return new XDropRepeatsWith(pred, xf); });
}());

},{"./_curry2":104,"./_xfBase":149}],148:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XDropWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XDropWhile.prototype['@@transducer/init'] = _xfBase.init;
  XDropWhile.prototype['@@transducer/result'] = _xfBase.result;
  XDropWhile.prototype['@@transducer/step'] = function(result, input) {
    if (this.f) {
      if (this.f(input)) {
        return result;
      }
      this.f = null;
    }
    return this.xf['@@transducer/step'](result, input);
  };

  return _curry2(function _xdropWhile(f, xf) { return new XDropWhile(f, xf); });
}());

},{"./_curry2":104,"./_xfBase":149}],149:[function(require,module,exports){
module.exports = {
  init: function() {
    return this.xf['@@transducer/init']();
  },
  result: function(result) {
    return this.xf['@@transducer/result'](result);
  }
};

},{}],150:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XFilter(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFilter.prototype['@@transducer/init'] = _xfBase.init;
  XFilter.prototype['@@transducer/result'] = _xfBase.result;
  XFilter.prototype['@@transducer/step'] = function(result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : result;
  };

  return _curry2(function _xfilter(f, xf) { return new XFilter(f, xf); });
}());

},{"./_curry2":104,"./_xfBase":149}],151:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _reduced = require('./_reduced');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XFind(f, xf) {
    this.xf = xf;
    this.f = f;
    this.found = false;
  }
  XFind.prototype['@@transducer/init'] = _xfBase.init;
  XFind.prototype['@@transducer/result'] = function(result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, void 0);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFind.prototype['@@transducer/step'] = function(result, input) {
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf['@@transducer/step'](result, input));
    }
    return result;
  };

  return _curry2(function _xfind(f, xf) { return new XFind(f, xf); });
}());

},{"./_curry2":104,"./_reduced":136,"./_xfBase":149}],152:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _reduced = require('./_reduced');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XFindIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.found = false;
  }
  XFindIndex.prototype['@@transducer/init'] = _xfBase.init;
  XFindIndex.prototype['@@transducer/result'] = function(result) {
    if (!this.found) {
      result = this.xf['@@transducer/step'](result, -1);
    }
    return this.xf['@@transducer/result'](result);
  };
  XFindIndex.prototype['@@transducer/step'] = function(result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.found = true;
      result = _reduced(this.xf['@@transducer/step'](result, this.idx));
    }
    return result;
  };

  return _curry2(function _xfindIndex(f, xf) { return new XFindIndex(f, xf); });
}());

},{"./_curry2":104,"./_reduced":136,"./_xfBase":149}],153:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XFindLast(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XFindLast.prototype['@@transducer/init'] = _xfBase.init;
  XFindLast.prototype['@@transducer/result'] = function(result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.last));
  };
  XFindLast.prototype['@@transducer/step'] = function(result, input) {
    if (this.f(input)) {
      this.last = input;
    }
    return result;
  };

  return _curry2(function _xfindLast(f, xf) { return new XFindLast(f, xf); });
}());

},{"./_curry2":104,"./_xfBase":149}],154:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XFindLastIndex(f, xf) {
    this.xf = xf;
    this.f = f;
    this.idx = -1;
    this.lastIdx = -1;
  }
  XFindLastIndex.prototype['@@transducer/init'] = _xfBase.init;
  XFindLastIndex.prototype['@@transducer/result'] = function(result) {
    return this.xf['@@transducer/result'](this.xf['@@transducer/step'](result, this.lastIdx));
  };
  XFindLastIndex.prototype['@@transducer/step'] = function(result, input) {
    this.idx += 1;
    if (this.f(input)) {
      this.lastIdx = this.idx;
    }
    return result;
  };

  return _curry2(function _xfindLastIndex(f, xf) { return new XFindLastIndex(f, xf); });
}());

},{"./_curry2":104,"./_xfBase":149}],155:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XMap(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XMap.prototype['@@transducer/init'] = _xfBase.init;
  XMap.prototype['@@transducer/result'] = _xfBase.result;
  XMap.prototype['@@transducer/step'] = function(result, input) {
    return this.xf['@@transducer/step'](result, this.f(input));
  };

  return _curry2(function _xmap(f, xf) { return new XMap(f, xf); });
}());

},{"./_curry2":104,"./_xfBase":149}],156:[function(require,module,exports){
var _curryN = require('./_curryN');
var _has = require('./_has');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XReduceBy(valueFn, valueAcc, keyFn, xf) {
    this.valueFn = valueFn;
    this.valueAcc = valueAcc;
    this.keyFn = keyFn;
    this.xf = xf;
    this.inputs = {};
  }
  XReduceBy.prototype['@@transducer/init'] = _xfBase.init;
  XReduceBy.prototype['@@transducer/result'] = function(result) {
    var key;
    for (key in this.inputs) {
      if (_has(key, this.inputs)) {
        result = this.xf['@@transducer/step'](result, this.inputs[key]);
        if (result['@@transducer/reduced']) {
          result = result['@@transducer/value'];
          break;
        }
      }
    }
    this.inputs = null;
    return this.xf['@@transducer/result'](result);
  };
  XReduceBy.prototype['@@transducer/step'] = function(result, input) {
    var key = this.keyFn(input);
    this.inputs[key] = this.inputs[key] || [key, this.valueAcc];
    this.inputs[key][1] = this.valueFn(this.inputs[key][1], input);
    return result;
  };

  return _curryN(4, [],
                 function _xreduceBy(valueFn, valueAcc, keyFn, xf) {
                   return new XReduceBy(valueFn, valueAcc, keyFn, xf);
                 });
}());

},{"./_curryN":106,"./_has":115,"./_xfBase":149}],157:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _reduced = require('./_reduced');
var _xfBase = require('./_xfBase');

module.exports = (function() {
  function XTake(n, xf) {
    this.xf = xf;
    this.n = n;
    this.i = 0;
  }
  XTake.prototype['@@transducer/init'] = _xfBase.init;
  XTake.prototype['@@transducer/result'] = _xfBase.result;
  XTake.prototype['@@transducer/step'] = function(result, input) {
    this.i += 1;
    var ret = this.n === 0 ? result : this.xf['@@transducer/step'](result, input);
    return this.i >= this.n ? _reduced(ret) : ret;
  };

  return _curry2(function _xtake(n, xf) { return new XTake(n, xf); });
}());

},{"./_curry2":104,"./_reduced":136,"./_xfBase":149}],158:[function(require,module,exports){
var _curry2 = require('./_curry2');
var _reduced = require('./_reduced');
var _xfBase = require('./_xfBase');


module.exports = (function() {
  function XTakeWhile(f, xf) {
    this.xf = xf;
    this.f = f;
  }
  XTakeWhile.prototype['@@transducer/init'] = _xfBase.init;
  XTakeWhile.prototype['@@transducer/result'] = _xfBase.result;
  XTakeWhile.prototype['@@transducer/step'] = function(result, input) {
    return this.f(input) ? this.xf['@@transducer/step'](result, input) : _reduced(result);
  };

  return _curry2(function _xtakeWhile(f, xf) { return new XTakeWhile(f, xf); });
}());

},{"./_curry2":104,"./_reduced":136,"./_xfBase":149}],159:[function(require,module,exports){
module.exports = (function() {
  function XWrap(fn) {
    this.f = fn;
  }
  XWrap.prototype['@@transducer/init'] = function() {
    throw new Error('init not implemented on XWrap');
  };
  XWrap.prototype['@@transducer/result'] = function(acc) { return acc; };
  XWrap.prototype['@@transducer/step'] = function(acc, x) {
    return this.f(acc, x);
  };

  return function _xwrap(fn) { return new XWrap(fn); };
}());

},{}],160:[function(require,module,exports){
var _contains = require('./internal/_contains');
var _curry2 = require('./internal/_curry2');
var _filter = require('./internal/_filter');
var flip = require('./flip');
var uniq = require('./uniq');


/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The list of elements found in both `list1` and `list2`.
 * @see R.intersectionWith
 * @example
 *
 *      R.intersection([1,2,3,4], [7,6,5,4,3]); //=> [4, 3]
 */
module.exports = _curry2(function intersection(list1, list2) {
  var lookupList, filteredList;
  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }
  return uniq(_filter(flip(_contains)(lookupList), filteredList));
});

},{"./flip":70,"./internal/_contains":100,"./internal/_curry2":104,"./internal/_filter":111,"./uniq":292}],161:[function(require,module,exports){
var _containsWith = require('./internal/_containsWith');
var _curry3 = require('./internal/_curry3');
var uniqWith = require('./uniqWith');


/**
 * Combines two lists into a set (i.e. no duplicates) composed of those
 * elements common to both lists. Duplication is determined according to the
 * value returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate function that determines whether
 *        the two supplied elements are equal.
 * @param {Array} list1 One list of items to compare
 * @param {Array} list2 A second list of items to compare
 * @return {Array} A new list containing those elements common to both lists.
 * @see R.intersection
 * @example
 *
 *      var buffaloSpringfield = [
 *        {id: 824, name: 'Richie Furay'},
 *        {id: 956, name: 'Dewey Martin'},
 *        {id: 313, name: 'Bruce Palmer'},
 *        {id: 456, name: 'Stephen Stills'},
 *        {id: 177, name: 'Neil Young'}
 *      ];
 *      var csny = [
 *        {id: 204, name: 'David Crosby'},
 *        {id: 456, name: 'Stephen Stills'},
 *        {id: 539, name: 'Graham Nash'},
 *        {id: 177, name: 'Neil Young'}
 *      ];
 *
 *      R.intersectionWith(R.eqBy(R.prop('id')), buffaloSpringfield, csny);
 *      //=> [{id: 456, name: 'Stephen Stills'}, {id: 177, name: 'Neil Young'}]
 */
module.exports = _curry3(function intersectionWith(pred, list1, list2) {
  var lookupList, filteredList;
  if (list1.length > list2.length) {
    lookupList = list1;
    filteredList = list2;
  } else {
    lookupList = list2;
    filteredList = list1;
  }
  var results = [];
  var idx = 0;
  while (idx < filteredList.length) {
    if (_containsWith(pred, filteredList[idx], lookupList)) {
      results[results.length] = filteredList[idx];
    }
    idx += 1;
  }
  return uniqWith(pred, results);
});

},{"./internal/_containsWith":101,"./internal/_curry3":105,"./uniqWith":294}],162:[function(require,module,exports){
var _checkForMethod = require('./internal/_checkForMethod');
var _curry2 = require('./internal/_curry2');


/**
 * Creates a new list with the separator interposed between elements.
 *
 * Dispatches to the `intersperse` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} separator The element to add to the list.
 * @param {Array} list The list to be interposed.
 * @return {Array} The new list.
 * @example
 *
 *      R.intersperse('n', ['ba', 'a', 'a']); //=> ['ba', 'n', 'a', 'n', 'a']
 */
module.exports = _curry2(_checkForMethod('intersperse', function intersperse(separator, list) {
  var out = [];
  var idx = 0;
  var length = list.length;
  while (idx < length) {
    if (idx === length - 1) {
      out.push(list[idx]);
    } else {
      out.push(list[idx], separator);
    }
    idx += 1;
  }
  return out;
}));

},{"./internal/_checkForMethod":95,"./internal/_curry2":104}],163:[function(require,module,exports){
var _clone = require('./internal/_clone');
var _curry3 = require('./internal/_curry3');
var _isTransformer = require('./internal/_isTransformer');
var _reduce = require('./internal/_reduce');
var _stepCat = require('./internal/_stepCat');


/**
 * Transforms the items of the list with the transducer and appends the
 * transformed items to the accumulator using an appropriate iterator function
 * based on the accumulator type.
 *
 * The accumulator can be an array, string, object or a transformer. Iterated
 * items will be appended to arrays and concatenated to strings. Objects will
 * be merged directly or 2-item arrays will be merged as key, value pairs.
 *
 * The accumulator can also be a transformer object that provides a 2-arity
 * reducing iterator function, step, 0-arity initial value function, init, and
 * 1-arity result extraction function result. The step function is used as the
 * iterator function in reduce. The result function is used to convert the
 * final accumulator into the return type and in most cases is R.identity. The
 * init function is used to provide the initial accumulator.
 *
 * The iteration is performed with R.reduce after initializing the transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig a -> (b -> b) -> [c] -> a
 * @param {*} acc The initial accumulator value.
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *
 *      R.into([], transducer, numbers); //=> [2, 3]
 *
 *      var intoArray = R.into([]);
 *      intoArray(transducer, numbers); //=> [2, 3]
 */
module.exports = _curry3(function into(acc, xf, list) {
  return _isTransformer(acc) ?
    _reduce(xf(acc), acc['@@transducer/init'](), list) :
    _reduce(xf(_stepCat(acc)), _clone(acc, [], [], false), list);
});

},{"./internal/_clone":96,"./internal/_curry3":105,"./internal/_isTransformer":127,"./internal/_reduce":135,"./internal/_stepCat":137}],164:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _has = require('./internal/_has');
var keys = require('./keys');


/**
 * Same as R.invertObj, however this accounts for objects with duplicate values
 * by putting the values into an array.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: [ s, ... ]}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object with keys
 * in an array.
 * @example
 *
 *      var raceResultsByFirstName = {
 *        first: 'alice',
 *        second: 'jake',
 *        third: 'alice',
 *      };
 *      R.invert(raceResultsByFirstName);
 *      //=> { 'alice': ['first', 'third'], 'jake':['second'] }
 */
module.exports = _curry1(function invert(obj) {
  var props = keys(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    var val = obj[key];
    var list = _has(val, out) ? out[val] : (out[val] = []);
    list[list.length] = key;
    idx += 1;
  }
  return out;
});

},{"./internal/_curry1":103,"./internal/_has":115,"./keys":173}],165:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var keys = require('./keys');


/**
 * Returns a new object with the keys of the given object as values, and the
 * values of the given object, which are coerced to strings, as keys. Note
 * that the last key found is preferred when handling the same value.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig {s: x} -> {x: s}
 * @param {Object} obj The object or array to invert
 * @return {Object} out A new object
 * @example
 *
 *      var raceResults = {
 *        first: 'alice',
 *        second: 'jake'
 *      };
 *      R.invertObj(raceResults);
 *      //=> { 'alice': 'first', 'jake':'second' }
 *
 *      // Alternatively:
 *      var raceResults = ['alice', 'jake'];
 *      R.invertObj(raceResults);
 *      //=> { 'alice': '0', 'jake':'1' }
 */
module.exports = _curry1(function invertObj(obj) {
  var props = keys(obj);
  var len = props.length;
  var idx = 0;
  var out = {};

  while (idx < len) {
    var key = props[idx];
    out[obj[key]] = key;
    idx += 1;
  }
  return out;
});

},{"./internal/_curry1":103,"./keys":173}],166:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _isFunction = require('./internal/_isFunction');
var curryN = require('./curryN');
var toString = require('./toString');


/**
 * Turns a named method with a specified arity into a function that can be
 * called directly supplied with arguments and a target object.
 *
 * The returned function is curried and accepts `arity + 1` parameters where
 * the final parameter is the target object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> String -> (a -> b -> ... -> n -> Object -> *)
 * @param {Number} arity Number of arguments the returned function should take
 *        before the target object.
 * @param {String} method Name of the method to call.
 * @return {Function} A new curried function.
 * @example
 *
 *      var sliceFrom = R.invoker(1, 'slice');
 *      sliceFrom(6, 'abcdefghijklm'); //=> 'ghijklm'
 *      var sliceFrom6 = R.invoker(2, 'slice')(6);
 *      sliceFrom6(8, 'abcdefghijklm'); //=> 'gh'
 * @symb R.invoker(0, 'method')(o) = o['method']()
 * @symb R.invoker(1, 'method')(a, o) = o['method'](a)
 * @symb R.invoker(2, 'method')(a, b, o) = o['method'](a, b)
 */
module.exports = _curry2(function invoker(arity, method) {
  return curryN(arity + 1, function() {
    var target = arguments[arity];
    if (target != null && _isFunction(target[method])) {
      return target[method].apply(target, Array.prototype.slice.call(arguments, 0, arity));
    }
    throw new TypeError(toString(target) + ' does not have a method named "' + method + '"');
  });
});

},{"./curryN":43,"./internal/_curry2":104,"./internal/_isFunction":120,"./toString":278}],167:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * See if an object (`val`) is an instance of the supplied constructor. This
 * function will check up the inheritance chain, if any.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Type
 * @sig (* -> {*}) -> a -> Boolean
 * @param {Object} ctor A constructor
 * @param {*} val The value to test
 * @return {Boolean}
 * @example
 *
 *      R.is(Object, {}); //=> true
 *      R.is(Number, 1); //=> true
 *      R.is(Object, 1); //=> false
 *      R.is(String, 's'); //=> true
 *      R.is(String, new String('')); //=> true
 *      R.is(Object, new String('')); //=> true
 *      R.is(Object, 's'); //=> false
 *      R.is(Number, {}); //=> false
 */
module.exports = _curry2(function is(Ctor, val) {
  return val != null && val.constructor === Ctor || val instanceof Ctor;
});

},{"./internal/_curry2":104}],168:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _isArray = require('./internal/_isArray');
var _isString = require('./internal/_isString');


/**
 * Tests whether or not an object is similar to an array.
 *
 * @func
 * @memberOf R
 * @since v0.5.0
 * @category Type
 * @category List
 * @sig * -> Boolean
 * @param {*} x The object to test.
 * @return {Boolean} `true` if `x` has a numeric length property and extreme indices defined; `false` otherwise.
 * @deprecated since v0.23.0
 * @example
 *
 *      R.isArrayLike([]); //=> true
 *      R.isArrayLike(true); //=> false
 *      R.isArrayLike({}); //=> false
 *      R.isArrayLike({length: 10}); //=> false
 *      R.isArrayLike({0: 'zero', 9: 'nine', length: 10}); //=> true
 */
module.exports = _curry1(function isArrayLike(x) {
  if (_isArray(x)) { return true; }
  if (!x) { return false; }
  if (typeof x !== 'object') { return false; }
  if (_isString(x)) { return false; }
  if (x.nodeType === 1) { return !!x.length; }
  if (x.length === 0) { return true; }
  if (x.length > 0) {
    return x.hasOwnProperty(0) && x.hasOwnProperty(x.length - 1);
  }
  return false;
});

},{"./internal/_curry1":103,"./internal/_isArray":119,"./internal/_isString":126}],169:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var empty = require('./empty');
var equals = require('./equals');


/**
 * Returns `true` if the given value is its type's empty value; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> Boolean
 * @param {*} x
 * @return {Boolean}
 * @see R.empty
 * @example
 *
 *      R.isEmpty([1, 2, 3]);   //=> false
 *      R.isEmpty([]);          //=> true
 *      R.isEmpty('');          //=> true
 *      R.isEmpty(null);        //=> false
 *      R.isEmpty({});          //=> true
 *      R.isEmpty({length: 0}); //=> false
 */
module.exports = _curry1(function isEmpty(x) {
  return x != null && equals(x, empty(x));
});

},{"./empty":59,"./equals":62,"./internal/_curry1":103}],170:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Checks if the input value is `null` or `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Type
 * @sig * -> Boolean
 * @param {*} x The value to test.
 * @return {Boolean} `true` if `x` is `undefined` or `null`, otherwise `false`.
 * @example
 *
 *      R.isNil(null); //=> true
 *      R.isNil(undefined); //=> true
 *      R.isNil(0); //=> false
 *      R.isNil([]); //=> false
 */
module.exports = _curry1(function isNil(x) { return x == null; });

},{"./internal/_curry1":103}],171:[function(require,module,exports){
var invoker = require('./invoker');


/**
 * Returns a string made by inserting the `separator` between each element and
 * concatenating all the elements into a single string.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig String -> [a] -> String
 * @param {Number|String} separator The string used to separate the elements.
 * @param {Array} xs The elements to join into a string.
 * @return {String} str The string made by concatenating `xs` with `separator`.
 * @see R.split
 * @example
 *
 *      var spacer = R.join(' ');
 *      spacer(['a', 2, 3.4]);   //=> 'a 2 3.4'
 *      R.join('|', [1, 2, 3]);    //=> '1|2|3'
 */
module.exports = invoker(1, 'join');

},{"./invoker":166}],172:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var converge = require('./converge');


/**
 * juxt applies a list of functions to a list of values.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Function
 * @sig [(a, b, ..., m) -> n] -> ((a, b, ..., m) -> [n])
 * @param {Array} fns An array of functions
 * @return {Function} A function that returns a list of values after applying each of the original `fns` to its parameters.
 * @see R.applySpec
 * @example
 *
 *      var getRange = R.juxt([Math.min, Math.max]);
 *      getRange(3, 4, 9, -3); //=> [-3, 9]
 * @symb R.juxt([f, g, h])(a, b) = [f(a, b), g(a, b), h(a, b)]
 */
module.exports = _curry1(function juxt(fns) {
  return converge(function() { return Array.prototype.slice.call(arguments, 0); }, fns);
});

},{"./converge":40,"./internal/_curry1":103}],173:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _has = require('./internal/_has');
var _isArguments = require('./internal/_isArguments');


/**
 * Returns a list containing the names of all the enumerable own properties of
 * the supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own properties.
 * @example
 *
 *      R.keys({a: 1, b: 2, c: 3}); //=> ['a', 'b', 'c']
 */
module.exports = (function() {
  // cover IE < 9 keys issues
  var hasEnumBug = !({toString: null}).propertyIsEnumerable('toString');
  var nonEnumerableProps = ['constructor', 'valueOf', 'isPrototypeOf', 'toString',
                            'propertyIsEnumerable', 'hasOwnProperty', 'toLocaleString'];
  // Safari bug
  var hasArgsEnumBug = (function() {
    'use strict';
    return arguments.propertyIsEnumerable('length');
  }());

  var contains = function contains(list, item) {
    var idx = 0;
    while (idx < list.length) {
      if (list[idx] === item) {
        return true;
      }
      idx += 1;
    }
    return false;
  };

  return typeof Object.keys === 'function' && !hasArgsEnumBug ?
    _curry1(function keys(obj) {
      return Object(obj) !== obj ? [] : Object.keys(obj);
    }) :
    _curry1(function keys(obj) {
      if (Object(obj) !== obj) {
        return [];
      }
      var prop, nIdx;
      var ks = [];
      var checkArgsLength = hasArgsEnumBug && _isArguments(obj);
      for (prop in obj) {
        if (_has(prop, obj) && (!checkArgsLength || prop !== 'length')) {
          ks[ks.length] = prop;
        }
      }
      if (hasEnumBug) {
        nIdx = nonEnumerableProps.length - 1;
        while (nIdx >= 0) {
          prop = nonEnumerableProps[nIdx];
          if (_has(prop, obj) && !contains(ks, prop)) {
            ks[ks.length] = prop;
          }
          nIdx -= 1;
        }
      }
      return ks;
    });
}());

},{"./internal/_curry1":103,"./internal/_has":115,"./internal/_isArguments":118}],174:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Returns a list containing the names of all the properties of the supplied
 * object, including prototype properties.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [k]
 * @param {Object} obj The object to extract properties from
 * @return {Array} An array of the object's own and prototype properties.
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.keysIn(f); //=> ['x', 'y']
 */
module.exports = _curry1(function keysIn(obj) {
  var prop;
  var ks = [];
  for (prop in obj) {
    ks[ks.length] = prop;
  }
  return ks;
});

},{"./internal/_curry1":103}],175:[function(require,module,exports){
var nth = require('./nth');


/**
 * Returns the last element of the given list or string.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig [a] -> a | Undefined
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.init, R.head, R.tail
 * @example
 *
 *      R.last(['fi', 'fo', 'fum']); //=> 'fum'
 *      R.last([]); //=> undefined
 *
 *      R.last('abc'); //=> 'c'
 *      R.last(''); //=> ''
 */
module.exports = nth(-1);

},{"./nth":209}],176:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _isArray = require('./internal/_isArray');
var equals = require('./equals');


/**
 * Returns the position of the last occurrence of an item in an array, or -1 if
 * the item is not included in the array. `R.equals` is used to determine
 * equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> Number
 * @param {*} target The item to find.
 * @param {Array} xs The array to search in.
 * @return {Number} the index of the target, or -1 if the target is not found.
 * @see R.indexOf
 * @example
 *
 *      R.lastIndexOf(3, [-1,3,3,0,1,2,3,4]); //=> 6
 *      R.lastIndexOf(10, [1,2,3,4]); //=> -1
 */
module.exports = _curry2(function lastIndexOf(target, xs) {
  if (typeof xs.lastIndexOf === 'function' && !_isArray(xs)) {
    return xs.lastIndexOf(target);
  } else {
    var idx = xs.length - 1;
    while (idx >= 0) {
      if (equals(xs[idx], target)) {
        return idx;
      }
      idx -= 1;
    }
    return -1;
  }
});

},{"./equals":62,"./internal/_curry2":104,"./internal/_isArray":119}],177:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _isNumber = require('./internal/_isNumber');


/**
 * Returns the number of elements in the array by returning `list.length`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [a] -> Number
 * @param {Array} list The array to inspect.
 * @return {Number} The length of the array.
 * @example
 *
 *      R.length([]); //=> 0
 *      R.length([1, 2, 3]); //=> 3
 */
module.exports = _curry1(function length(list) {
  return list != null && _isNumber(list.length) ? list.length : NaN;
});

},{"./internal/_curry1":103,"./internal/_isNumber":122}],178:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var map = require('./map');


/**
 * Returns a lens for the given getter and setter functions. The getter "gets"
 * the value of the focus; the setter "sets" the value of the focus. The setter
 * should not mutate the data structure.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig (s -> a) -> ((a, s) -> s) -> Lens s a
 * @param {Function} getter
 * @param {Function} setter
 * @return {Lens}
 * @see R.view, R.set, R.over, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lens(R.prop('x'), R.assoc('x'));
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
module.exports = _curry2(function lens(getter, setter) {
  return function(toFunctorFn) {
    return function(target) {
      return map(
        function(focus) {
          return setter(focus, target);
        },
        toFunctorFn(getter(target))
      );
    };
  };
});

},{"./internal/_curry2":104,"./map":186}],179:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var lens = require('./lens');
var nth = require('./nth');
var update = require('./update');


/**
 * Returns a lens whose focus is the specified index.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Number -> Lens s a
 * @param {Number} n
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.view(headLens, ['a', 'b', 'c']);            //=> 'a'
 *      R.set(headLens, 'x', ['a', 'b', 'c']);        //=> ['x', 'b', 'c']
 *      R.over(headLens, R.toUpper, ['a', 'b', 'c']); //=> ['A', 'b', 'c']
 */
module.exports = _curry1(function lensIndex(n) {
  return lens(nth(n), update(n));
});

},{"./internal/_curry1":103,"./lens":178,"./nth":209,"./update":298}],180:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var assocPath = require('./assocPath');
var lens = require('./lens');
var path = require('./path');


/**
 * Returns a lens whose focus is the specified path.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @typedefn Idx = String | Int
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig [Idx] -> Lens s a
 * @param {Array} path The path to use.
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xHeadYLens = R.lensPath(['x', 0, 'y']);
 *
 *      R.view(xHeadYLens, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> 2
 *      R.set(xHeadYLens, 1, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: 1, z: 3}, {y: 4, z: 5}]}
 *      R.over(xHeadYLens, R.negate, {x: [{y: 2, z: 3}, {y: 4, z: 5}]});
 *      //=> {x: [{y: -2, z: 3}, {y: 4, z: 5}]}
 */
module.exports = _curry1(function lensPath(p) {
  return lens(path(p), assocPath(p));
});

},{"./assocPath":22,"./internal/_curry1":103,"./lens":178,"./path":221}],181:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var assoc = require('./assoc');
var lens = require('./lens');
var prop = require('./prop');


/**
 * Returns a lens whose focus is the specified property.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig String -> Lens s a
 * @param {String} k
 * @return {Lens}
 * @see R.view, R.set, R.over
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});            //=> 1
 *      R.set(xLens, 4, {x: 1, y: 2});          //=> {x: 4, y: 2}
 *      R.over(xLens, R.negate, {x: 1, y: 2});  //=> {x: -1, y: 2}
 */
module.exports = _curry1(function lensProp(k) {
  return lens(prop(k), assoc(k));
});

},{"./assoc":21,"./internal/_curry1":103,"./lens":178,"./prop":235}],182:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var liftN = require('./liftN');


/**
 * "lifts" a function of arity > 1 so that it may "map over" a list, Function or other
 * object that satisfies the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.liftN
 * @example
 *
 *      var madd3 = R.lift((a, b, c) => a + b + c);
 *
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 *
 *      var madd5 = R.lift((a, b, c, d, e) => a + b + c + d + e);
 *
 *      madd5([1,2], [3], [4, 5], [6], [7, 8]); //=> [21, 22, 22, 23, 22, 23, 23, 24]
 */
module.exports = _curry1(function lift(fn) {
  return liftN(fn.length, fn);
});

},{"./internal/_curry1":103,"./liftN":183}],183:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _reduce = require('./internal/_reduce');
var ap = require('./ap');
var curryN = require('./curryN');
var map = require('./map');


/**
 * "lifts" a function to be the specified arity, so that it may "map over" that
 * many lists, Functions or other objects that satisfy the [FantasyLand Apply spec](https://github.com/fantasyland/fantasy-land#apply).
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Function
 * @sig Number -> (*... -> *) -> ([*]... -> [*])
 * @param {Function} fn The function to lift into higher context
 * @return {Function} The lifted function.
 * @see R.lift, R.ap
 * @example
 *
 *      var madd3 = R.liftN(3, (...args) => R.sum(args));
 *      madd3([1,2,3], [1,2,3], [1]); //=> [3, 4, 5, 4, 5, 6, 5, 6, 7]
 */
module.exports = _curry2(function liftN(arity, fn) {
  var lifted = curryN(arity, fn);
  return curryN(arity, function() {
    return _reduce(ap, map(lifted, arguments[0]), Array.prototype.slice.call(arguments, 1));
  });
});

},{"./ap":15,"./curryN":43,"./internal/_curry2":104,"./internal/_reduce":135,"./map":186}],184:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns `true` if the first argument is less than the second; `false`
 * otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {*} a
 * @param {*} b
 * @return {Boolean}
 * @see R.gt
 * @example
 *
 *      R.lt(2, 1); //=> false
 *      R.lt(2, 2); //=> false
 *      R.lt(2, 3); //=> true
 *      R.lt('a', 'z'); //=> true
 *      R.lt('z', 'a'); //=> false
 */
module.exports = _curry2(function lt(a, b) { return a < b; });

},{"./internal/_curry2":104}],185:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns `true` if the first argument is less than or equal to the second;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> Boolean
 * @param {Number} a
 * @param {Number} b
 * @return {Boolean}
 * @see R.gte
 * @example
 *
 *      R.lte(2, 1); //=> false
 *      R.lte(2, 2); //=> true
 *      R.lte(2, 3); //=> true
 *      R.lte('a', 'z'); //=> true
 *      R.lte('z', 'a'); //=> false
 */
module.exports = _curry2(function lte(a, b) { return a <= b; });

},{"./internal/_curry2":104}],186:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _map = require('./internal/_map');
var _reduce = require('./internal/_reduce');
var _xmap = require('./internal/_xmap');
var curryN = require('./curryN');
var keys = require('./keys');


/**
 * Takes a function and
 * a [functor](https://github.com/fantasyland/fantasy-land#functor),
 * applies the function to each of the functor's values, and returns
 * a functor of the same shape.
 *
 * Ramda provides suitable `map` implementations for `Array` and `Object`,
 * so this function may be applied to `[1, 2, 3]` or `{x: 1, y: 2, z: 3}`.
 *
 * Dispatches to the `map` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * Also treats functions as functors and will compose them together.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Functor f => (a -> b) -> f a -> f b
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {Array} list The list to be iterated over.
 * @return {Array} The new list.
 * @see R.transduce, R.addIndex
 * @example
 *
 *      var double = x => x * 2;
 *
 *      R.map(double, [1, 2, 3]); //=> [2, 4, 6]
 *
 *      R.map(double, {x: 1, y: 2, z: 3}); //=> {x: 2, y: 4, z: 6}
 * @symb R.map(f, [a, b]) = [f(a), f(b)]
 * @symb R.map(f, { x: a, y: b }) = { x: f(a), y: f(b) }
 * @symb R.map(f, functor_o) = functor_o.map(f)
 */
module.exports = _curry2(_dispatchable(['map'], _xmap, function map(fn, functor) {
  switch (Object.prototype.toString.call(functor)) {
    case '[object Function]':
      return curryN(functor.length, function() {
        return fn.call(this, functor.apply(this, arguments));
      });
    case '[object Object]':
      return _reduce(function(acc, key) {
        acc[key] = fn(functor[key]);
        return acc;
      }, {}, keys(functor));
    default:
      return _map(fn, functor);
  }
}));

},{"./curryN":43,"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_map":129,"./internal/_reduce":135,"./internal/_xmap":155,"./keys":173}],187:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * The mapAccum function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from left to right, and returning a final value of this
 * accumulator together with the new list.
 *
 * The iterator function receives two arguments, *acc* and *value*, and should
 * return a tuple *[acc, value]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (acc -> x -> (acc, y)) -> acc -> [x] -> (acc, [y])
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccumRight
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var appender = (a, b) => [a + b, a + b];
 *
 *      R.mapAccum(appender, 0, digits); //=> ['01234', ['01', '012', '0123', '01234']]
 * @symb R.mapAccum(f, a, [b, c, d]) = [
 *   f(f(f(a, b)[0], c)[0], d)[0],
 *   [
 *     f(a, b)[1],
 *     f(f(a, b)[0], c)[1],
 *     f(f(f(a, b)[0], c)[0], d)[1]
 *   ]
 * ]
 */
module.exports = _curry3(function mapAccum(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var tuple = [acc];
  while (idx < len) {
    tuple = fn(tuple[0], list[idx]);
    result[idx] = tuple[1];
    idx += 1;
  }
  return [tuple[0], result];
});

},{"./internal/_curry3":105}],188:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * The mapAccumRight function behaves like a combination of map and reduce; it
 * applies a function to each element of a list, passing an accumulating
 * parameter from right to left, and returning a final value of this
 * accumulator together with the new list.
 *
 * Similar to `mapAccum`, except moves through the input list from the right to
 * the left.
 *
 * The iterator function receives two arguments, *value* and *acc*, and should
 * return a tuple *[value, acc]*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (x-> acc -> (y, acc)) -> acc -> [x] -> ([y], acc)
 * @param {Function} fn The function to be called on every element of the input `list`.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.addIndex, R.mapAccum
 * @example
 *
 *      var digits = ['1', '2', '3', '4'];
 *      var append = (a, b) => [a + b, a + b];
 *
 *      R.mapAccumRight(append, 5, digits); //=> [['12345', '2345', '345', '45'], '12345']
 * @symb R.mapAccumRight(f, a, [b, c, d]) = [
 *   [
 *     f(b, f(c, f(d, a)[0])[0])[1],
 *     f(c, f(d, a)[0])[1],
 *     f(d, a)[1],
 *   ]
 *   f(b, f(c, f(d, a)[0])[0])[0],
 * ]
 */
module.exports = _curry3(function mapAccumRight(fn, acc, list) {
  var idx = list.length - 1;
  var result = [];
  var tuple = [acc];
  while (idx >= 0) {
    tuple = fn(list[idx], tuple[0]);
    result[idx] = tuple[1];
    idx -= 1;
  }
  return [result, tuple[0]];
});

},{"./internal/_curry3":105}],189:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _reduce = require('./internal/_reduce');
var keys = require('./keys');


/**
 * An Object-specific version of `map`. The function is applied to three
 * arguments: *(value, key, obj)*. If only the value is significant, use
 * `map` instead.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Object
 * @sig ((*, String, Object) -> *) -> Object -> Object
 * @param {Function} fn
 * @param {Object} obj
 * @return {Object}
 * @see R.map
 * @example
 *
 *      var values = { x: 1, y: 2, z: 3 };
 *      var prependKeyAndDouble = (num, key, obj) => key + (num * 2);
 *
 *      R.mapObjIndexed(prependKeyAndDouble, values); //=> { x: 'x2', y: 'y4', z: 'z6' }
 */
module.exports = _curry2(function mapObjIndexed(fn, obj) {
  return _reduce(function(acc, key) {
    acc[key] = fn(obj[key], key, obj);
    return acc;
  }, {}, keys(obj));
});

},{"./internal/_curry2":104,"./internal/_reduce":135,"./keys":173}],190:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Tests a regular expression against a String. Note that this function will
 * return an empty array when there are no matches. This differs from
 * [`String.prototype.match`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/match)
 * which returns `null` when there are no matches.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig RegExp -> String -> [String | Undefined]
 * @param {RegExp} rx A regular expression.
 * @param {String} str The string to match against
 * @return {Array} The list of matches or empty array.
 * @see R.test
 * @example
 *
 *      R.match(/([a-z]a)/g, 'bananas'); //=> ['ba', 'na', 'na']
 *      R.match(/a/, 'b'); //=> []
 *      R.match(/a/, null); //=> TypeError: null does not have a method named "match"
 */
module.exports = _curry2(function match(rx, str) {
  return str.match(rx) || [];
});

},{"./internal/_curry2":104}],191:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _isInteger = require('./internal/_isInteger');


/**
 * mathMod behaves like the modulo operator should mathematically, unlike the
 * `%` operator (and by extension, R.modulo). So while "-17 % 5" is -2,
 * mathMod(-17, 5) is 3. mathMod requires Integer arguments, and returns NaN
 * when the modulus is zero or negative.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} m The dividend.
 * @param {Number} p the modulus.
 * @return {Number} The result of `b mod a`.
 * @example
 *
 *      R.mathMod(-17, 5);  //=> 3
 *      R.mathMod(17, 5);   //=> 2
 *      R.mathMod(17, -5);  //=> NaN
 *      R.mathMod(17, 0);   //=> NaN
 *      R.mathMod(17.2, 5); //=> NaN
 *      R.mathMod(17, 5.3); //=> NaN
 *
 *      var clock = R.mathMod(R.__, 12);
 *      clock(15); //=> 3
 *      clock(24); //=> 0
 *
 *      var seventeenMod = R.mathMod(17);
 *      seventeenMod(3);  //=> 2
 *      seventeenMod(4);  //=> 1
 *      seventeenMod(10); //=> 7
 */
module.exports = _curry2(function mathMod(m, p) {
  if (!_isInteger(m)) { return NaN; }
  if (!_isInteger(p) || p < 1) { return NaN; }
  return ((m % p) + p) % p;
});

},{"./internal/_curry2":104,"./internal/_isInteger":121}],192:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns the larger of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.maxBy, R.min
 * @example
 *
 *      R.max(789, 123); //=> 789
 *      R.max('a', 'b'); //=> 'b'
 */
module.exports = _curry2(function max(a, b) { return b > a ? b : a; });

},{"./internal/_curry2":104}],193:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Takes a function and two values, and returns whichever value produces the
 * larger result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.max, R.minBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.maxBy(square, -3, 2); //=> -3
 *
 *      R.reduce(R.maxBy(square), 0, [3, -5, 4, 1, -2]); //=> -5
 *      R.reduce(R.maxBy(square), 0, []); //=> 0
 */
module.exports = _curry3(function maxBy(f, a, b) {
  return f(b) > f(a) ? b : a;
});

},{"./internal/_curry3":105}],194:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var sum = require('./sum');


/**
 * Returns the mean of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @example
 *
 *      R.mean([2, 7, 9]); //=> 6
 *      R.mean([]); //=> NaN
 */
module.exports = _curry1(function mean(list) {
  return sum(list) / list.length;
});

},{"./internal/_curry1":103,"./sum":264}],195:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var mean = require('./mean');


/**
 * Returns the median of the given list of numbers.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list
 * @return {Number}
 * @example
 *
 *      R.median([2, 9, 7]); //=> 7
 *      R.median([7, 2, 10, 9]); //=> 8
 *      R.median([]); //=> NaN
 */
module.exports = _curry1(function median(list) {
  var len = list.length;
  if (len === 0) {
    return NaN;
  }
  var width = 2 - len % 2;
  var idx = (len - width) / 2;
  return mean(Array.prototype.slice.call(list, 0).sort(function(a, b) {
    return a < b ? -1 : a > b ? 1 : 0;
  }).slice(idx, idx + width));
});

},{"./internal/_curry1":103,"./mean":194}],196:[function(require,module,exports){
var _arity = require('./internal/_arity');
var _curry1 = require('./internal/_curry1');
var _has = require('./internal/_has');
var toString = require('./toString');


/**
 * Creates a new function that, when invoked, caches the result of calling `fn`
 * for a given argument set and returns the result. Subsequent calls to the
 * memoized `fn` with the same argument set will not result in an additional
 * call to `fn`; instead, the cached result for that set of arguments will be
 * returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (*... -> a) -> (*... -> a)
 * @param {Function} fn The function to memoize.
 * @return {Function} Memoized version of `fn`.
 * @example
 *
 *      var count = 0;
 *      var factorial = R.memoize(n => {
 *        count += 1;
 *        return R.product(R.range(1, n + 1));
 *      });
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      factorial(5); //=> 120
 *      count; //=> 1
 */
module.exports = _curry1(function memoize(fn) {
  var cache = {};
  return _arity(fn.length, function() {
    var key = toString(arguments);
    if (!_has(key, cache)) {
      cache[key] = fn.apply(this, arguments);
    }
    return cache[key];
  });
});

},{"./internal/_arity":92,"./internal/_curry1":103,"./internal/_has":115,"./toString":278}],197:[function(require,module,exports){
var _assign = require('./internal/_assign');
var _curry2 = require('./internal/_curry2');


/**
 * Create a new object with the own properties of the first object merged with
 * the own properties of the second object. If a key exists in both objects,
 * the value from the second object will be used.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> {k: v} -> {k: v}
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.mergeWith, R.mergeWithKey
 * @example
 *
 *      R.merge({ 'name': 'fred', 'age': 10 }, { 'age': 40 });
 *      //=> { 'name': 'fred', 'age': 40 }
 *
 *      var resetToDefault = R.merge(R.__, {x: 0});
 *      resetToDefault({x: 5, y: 2}); //=> {x: 0, y: 2}
 * @symb R.merge({ x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: 5, z: 3 }
 */
module.exports = _curry2(function merge(l, r) {
  return _assign({}, l, r);
});

},{"./internal/_assign":94,"./internal/_curry2":104}],198:[function(require,module,exports){
var _assign = require('./internal/_assign');
var _curry1 = require('./internal/_curry1');


/**
 * Merges a list of objects together into one object.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig [{k: v}] -> {k: v}
 * @param {Array} list An array of objects
 * @return {Object} A merged object.
 * @see R.reduce
 * @example
 *
 *      R.mergeAll([{foo:1},{bar:2},{baz:3}]); //=> {foo:1,bar:2,baz:3}
 *      R.mergeAll([{foo:1},{foo:2},{bar:2}]); //=> {foo:2,bar:2}
 * @symb R.mergeAll([{ x: 1 }, { y: 2 }, { z: 3 }]) = { x: 1, y: 2, z: 3 }
 */
module.exports = _curry1(function mergeAll(list) {
  return _assign.apply(null, [{}].concat(list));
});

},{"./internal/_assign":94,"./internal/_curry1":103}],199:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var mergeWithKey = require('./mergeWithKey');


/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the values
 * associated with the key in each object, with the result being used as the
 * value associated with the key in the returned object. The key will be
 * excluded from the returned object if the resulting value is `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig (a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.merge, R.mergeWithKey
 * @example
 *
 *      R.mergeWith(R.concat,
 *                  { a: true, values: [10, 20] },
 *                  { b: true, values: [15, 35] });
 *      //=> { a: true, b: true, values: [10, 20, 15, 35] }
 */
module.exports = _curry3(function mergeWith(fn, l, r) {
  return mergeWithKey(function(_, _l, _r) {
    return fn(_l, _r);
  }, l, r);
});

},{"./internal/_curry3":105,"./mergeWithKey":200}],200:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var _has = require('./internal/_has');


/**
 * Creates a new object with the own properties of the two provided objects. If
 * a key exists in both objects, the provided function is applied to the key
 * and the values associated with the key in each object, with the result being
 * used as the value associated with the key in the returned object. The key
 * will be excluded from the returned object if the resulting value is
 * `undefined`.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Object
 * @sig (String -> a -> a -> a) -> {a} -> {a} -> {a}
 * @param {Function} fn
 * @param {Object} l
 * @param {Object} r
 * @return {Object}
 * @see R.merge, R.mergeWith
 * @example
 *
 *      let concatValues = (k, l, r) => k == 'values' ? R.concat(l, r) : r
 *      R.mergeWithKey(concatValues,
 *                     { a: true, thing: 'foo', values: [10, 20] },
 *                     { b: true, thing: 'bar', values: [15, 35] });
 *      //=> { a: true, b: true, thing: 'bar', values: [10, 20, 15, 35] }
 * @symb R.mergeWithKey(f, { x: 1, y: 2 }, { y: 5, z: 3 }) = { x: 1, y: f('y', 2, 5), z: 3 }
 */
module.exports = _curry3(function mergeWithKey(fn, l, r) {
  var result = {};
  var k;

  for (k in l) {
    if (_has(k, l)) {
      result[k] = _has(k, r) ? fn(k, l[k], r[k]) : l[k];
    }
  }

  for (k in r) {
    if (_has(k, r) && !(_has(k, result))) {
      result[k] = r[k];
    }
  }

  return result;
});

},{"./internal/_curry3":105,"./internal/_has":115}],201:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns the smaller of its two arguments.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord a => a -> a -> a
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.minBy, R.max
 * @example
 *
 *      R.min(789, 123); //=> 123
 *      R.min('a', 'b'); //=> 'a'
 */
module.exports = _curry2(function min(a, b) { return b < a ? b : a; });

},{"./internal/_curry2":104}],202:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Takes a function and two values, and returns whichever value produces the
 * smaller result when passed to the provided function.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Relation
 * @sig Ord b => (a -> b) -> a -> a -> a
 * @param {Function} f
 * @param {*} a
 * @param {*} b
 * @return {*}
 * @see R.min, R.maxBy
 * @example
 *
 *      //  square :: Number -> Number
 *      var square = n => n * n;
 *
 *      R.minBy(square, -3, 2); //=> 2
 *
 *      R.reduce(R.minBy(square), Infinity, [3, -5, 4, 1, -2]); //=> 1
 *      R.reduce(R.minBy(square), Infinity, []); //=> Infinity
 */
module.exports = _curry3(function minBy(f, a, b) {
  return f(b) < f(a) ? b : a;
});

},{"./internal/_curry3":105}],203:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Divides the first parameter by the second and returns the remainder. Note
 * that this function preserves the JavaScript-style behavior for modulo. For
 * mathematical modulo see `mathMod`.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The value to the divide.
 * @param {Number} b The pseudo-modulus
 * @return {Number} The result of `b % a`.
 * @see R.mathMod
 * @example
 *
 *      R.modulo(17, 3); //=> 2
 *      // JS behavior:
 *      R.modulo(-17, 3); //=> -2
 *      R.modulo(17, -3); //=> 2
 *
 *      var isOdd = R.modulo(R.__, 2);
 *      isOdd(42); //=> 0
 *      isOdd(21); //=> 1
 */
module.exports = _curry2(function modulo(a, b) { return a % b; });

},{"./internal/_curry2":104}],204:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Multiplies two numbers. Equivalent to `a * b` but curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a * b`.
 * @see R.divide
 * @example
 *
 *      var double = R.multiply(2);
 *      var triple = R.multiply(3);
 *      double(3);       //=>  6
 *      triple(4);       //=> 12
 *      R.multiply(2, 5);  //=> 10
 */
module.exports = _curry2(function multiply(a, b) { return a * b; });

},{"./internal/_curry2":104}],205:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly `n` parameters. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig Number -> (* -> a) -> (* -> a)
 * @param {Number} n The desired arity of the new function.
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity `n`.
 * @example
 *
 *      var takesTwoArgs = (a, b) => [a, b];
 *
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.nAry(1, takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only `n` arguments are passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.nAry(0, f)(a, b) = f()
 * @symb R.nAry(1, f)(a, b) = f(a)
 * @symb R.nAry(2, f)(a, b) = f(a, b)
 */
module.exports = _curry2(function nAry(n, fn) {
  switch (n) {
    case 0: return function() {return fn.call(this);};
    case 1: return function(a0) {return fn.call(this, a0);};
    case 2: return function(a0, a1) {return fn.call(this, a0, a1);};
    case 3: return function(a0, a1, a2) {return fn.call(this, a0, a1, a2);};
    case 4: return function(a0, a1, a2, a3) {return fn.call(this, a0, a1, a2, a3);};
    case 5: return function(a0, a1, a2, a3, a4) {return fn.call(this, a0, a1, a2, a3, a4);};
    case 6: return function(a0, a1, a2, a3, a4, a5) {return fn.call(this, a0, a1, a2, a3, a4, a5);};
    case 7: return function(a0, a1, a2, a3, a4, a5, a6) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6);};
    case 8: return function(a0, a1, a2, a3, a4, a5, a6, a7) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7);};
    case 9: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8);};
    case 10: return function(a0, a1, a2, a3, a4, a5, a6, a7, a8, a9) {return fn.call(this, a0, a1, a2, a3, a4, a5, a6, a7, a8, a9);};
    default: throw new Error('First argument to nAry must be a non-negative integer no greater than ten');
  }
});

},{"./internal/_curry2":104}],206:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Negates its argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Math
 * @sig Number -> Number
 * @param {Number} n
 * @return {Number}
 * @example
 *
 *      R.negate(42); //=> -42
 */
module.exports = _curry1(function negate(n) { return -n; });

},{"./internal/_curry1":103}],207:[function(require,module,exports){
var _complement = require('./internal/_complement');
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xany = require('./internal/_xany');
var any = require('./any');


/**
 * Returns `true` if no elements of the list match the predicate, `false`
 * otherwise.
 *
 * Dispatches to the `any` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> Boolean
 * @param {Function} fn The predicate function.
 * @param {Array} list The array to consider.
 * @return {Boolean} `true` if the predicate is not satisfied by every element, `false` otherwise.
 * @see R.all, R.any
 * @example
 *
 *      var isEven = n => n % 2 === 0;
 *
 *      R.none(isEven, [1, 3, 5, 7, 9, 11]); //=> true
 *      R.none(isEven, [1, 3, 5, 7, 8, 11]); //=> false
 */
module.exports = _curry2(_complement(_dispatchable(['any'], _xany, any)));

},{"./any":13,"./internal/_complement":98,"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xany":141}],208:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * A function that returns the `!` of its argument. It will return `true` when
 * passed false-y value, and `false` when passed a truth-y one.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig * -> Boolean
 * @param {*} a any value
 * @return {Boolean} the logical inverse of passed argument.
 * @see R.complement
 * @example
 *
 *      R.not(true); //=> false
 *      R.not(false); //=> true
 *      R.not(0); //=> true
 *      R.not(1); //=> false
 */
module.exports = _curry1(function not(a) {
  return !a;
});

},{"./internal/_curry1":103}],209:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _isString = require('./internal/_isString');


/**
 * Returns the nth element of the given list or string. If n is negative the
 * element at index length + n is returned.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> a | Undefined
 * @sig Number -> String -> String
 * @param {Number} offset
 * @param {*} list
 * @return {*}
 * @example
 *
 *      var list = ['foo', 'bar', 'baz', 'quux'];
 *      R.nth(1, list); //=> 'bar'
 *      R.nth(-1, list); //=> 'quux'
 *      R.nth(-99, list); //=> undefined
 *
 *      R.nth(2, 'abc'); //=> 'c'
 *      R.nth(3, 'abc'); //=> ''
 * @symb R.nth(-1, [a, b, c]) = c
 * @symb R.nth(0, [a, b, c]) = a
 * @symb R.nth(1, [a, b, c]) = b
 */
module.exports = _curry2(function nth(offset, list) {
  var idx = offset < 0 ? list.length + offset : offset;
  return _isString(list) ? list.charAt(idx) : list[idx];
});

},{"./internal/_curry2":104,"./internal/_isString":126}],210:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var curryN = require('./curryN');
var nth = require('./nth');


/**
 * Returns a function which returns its nth argument.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category Function
 * @sig Number -> *... -> *
 * @param {Number} n
 * @return {Function}
 * @example
 *
 *      R.nthArg(1)('a', 'b', 'c'); //=> 'b'
 *      R.nthArg(-1)('a', 'b', 'c'); //=> 'c'
 * @symb R.nthArg(-1)(a, b, c) = c
 * @symb R.nthArg(0)(a, b, c) = a
 * @symb R.nthArg(1)(a, b, c) = b
 */
module.exports = _curry1(function nthArg(n) {
  var arity = n < 0 ? 1 : n + 1;
  return curryN(arity, function() {
    return nth(n, arguments);
  });
});

},{"./curryN":43,"./internal/_curry1":103,"./nth":209}],211:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Creates an object containing a single key:value pair.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @sig String -> a -> {String:a}
 * @param {String} key
 * @param {*} val
 * @return {Object}
 * @see R.pair
 * @example
 *
 *      var matchPhrases = R.compose(
 *        R.objOf('must'),
 *        R.map(R.objOf('match_phrase'))
 *      );
 *      matchPhrases(['foo', 'bar', 'baz']); //=> {must: [{match_phrase: 'foo'}, {match_phrase: 'bar'}, {match_phrase: 'baz'}]}
 */
module.exports = _curry2(function objOf(key, val) {
  var obj = {};
  obj[key] = val;
  return obj;
});

},{"./internal/_curry2":104}],212:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _of = require('./internal/_of');


/**
 * Returns a singleton array containing the value provided.
 *
 * Note this `of` is different from the ES6 `of`; See
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/of
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category Function
 * @sig a -> [a]
 * @param {*} x any value
 * @return {Array} An array wrapping `x`.
 * @example
 *
 *      R.of(null); //=> [null]
 *      R.of([42]); //=> [[42]]
 */
module.exports = _curry1(_of);

},{"./internal/_curry1":103,"./internal/_of":131}],213:[function(require,module,exports){
var _contains = require('./internal/_contains');
var _curry2 = require('./internal/_curry2');


/**
 * Returns a partial copy of an object omitting the keys specified.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [String] -> {String: *} -> {String: *}
 * @param {Array} names an array of String property names to omit from the new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with properties from `names` not on it.
 * @see R.pick
 * @example
 *
 *      R.omit(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, c: 3}
 */
module.exports = _curry2(function omit(names, obj) {
  var result = {};
  for (var prop in obj) {
    if (!_contains(prop, names)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});

},{"./internal/_contains":100,"./internal/_curry2":104}],214:[function(require,module,exports){
var _arity = require('./internal/_arity');
var _curry1 = require('./internal/_curry1');


/**
 * Accepts a function `fn` and returns a function that guards invocation of
 * `fn` such that `fn` can only ever be called once, no matter how many times
 * the returned function is invoked. The first value calculated is returned in
 * subsequent invocations.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a... -> b) -> (a... -> b)
 * @param {Function} fn The function to wrap in a call-only-once wrapper.
 * @return {Function} The wrapped function.
 * @example
 *
 *      var addOneOnce = R.once(x => x + 1);
 *      addOneOnce(10); //=> 11
 *      addOneOnce(addOneOnce(50)); //=> 11
 */
module.exports = _curry1(function once(fn) {
  var called = false;
  var result;
  return _arity(fn.length, function() {
    if (called) {
      return result;
    }
    called = true;
    result = fn.apply(this, arguments);
    return result;
  });
});

},{"./internal/_arity":92,"./internal/_curry1":103}],215:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns `true` if one or both of its arguments are `true`. Returns `false`
 * if both arguments are `false`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Logic
 * @sig a -> b -> a | b
 * @param {Any} a
 * @param {Any} b
 * @return {Any} the first argument if truthy, otherwise the second argument.
 * @see R.either
 * @example
 *
 *      R.or(true, true); //=> true
 *      R.or(true, false); //=> true
 *      R.or(false, true); //=> true
 *      R.or(false, false); //=> false
 */
module.exports = _curry2(function or(a, b) {
  return a || b;
});

},{"./internal/_curry2":104}],216:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the result of applying the given function to
 * the focused value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> (a -> a) -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var headLens = R.lensIndex(0);
 *
 *      R.over(headLens, R.toUpper, ['foo', 'bar', 'baz']); //=> ['FOO', 'bar', 'baz']
 */
module.exports = (function() {
  // `Identity` is a functor that holds a single value, where `map` simply
  // transforms the held value with the provided function.
  var Identity = function(x) {
    return {value: x, map: function(f) { return Identity(f(x)); }};
  };

  return _curry3(function over(lens, f, x) {
    // The value returned by the getter function is first transformed with `f`,
    // then set as the value of an `Identity`. This is then mapped over with the
    // setter function of the lens.
    return lens(function(y) { return Identity(f(y)); })(x).value;
  });
}());

},{"./internal/_curry3":105}],217:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Takes two arguments, `fst` and `snd`, and returns `[fst, snd]`.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category List
 * @sig a -> b -> (a,b)
 * @param {*} fst
 * @param {*} snd
 * @return {Array}
 * @see R.objOf, R.of
 * @example
 *
 *      R.pair('foo', 'bar'); //=> ['foo', 'bar']
 */
module.exports = _curry2(function pair(fst, snd) { return [fst, snd]; });

},{"./internal/_curry2":104}],218:[function(require,module,exports){
var _concat = require('./internal/_concat');
var _createPartialApplicator = require('./internal/_createPartialApplicator');


/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided initially followed by the arguments provided to `g`.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [a, b, c, ...] -> ((d, e, f, ..., n) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partialRight
 * @example
 *
 *      var multiply2 = (a, b) => a * b;
 *      var double = R.partial(multiply2, [2]);
 *      double(2); //=> 4
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var sayHello = R.partial(greet, ['Hello']);
 *      var sayHelloToMs = R.partial(sayHello, ['Ms.']);
 *      sayHelloToMs('Jane', 'Jones'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partial(f, [a, b])(c, d) = f(a, b, c, d)
 */
module.exports = _createPartialApplicator(_concat);

},{"./internal/_concat":99,"./internal/_createPartialApplicator":102}],219:[function(require,module,exports){
var _concat = require('./internal/_concat');
var _createPartialApplicator = require('./internal/_createPartialApplicator');
var flip = require('./flip');


/**
 * Takes a function `f` and a list of arguments, and returns a function `g`.
 * When applied, `g` returns the result of applying `f` to the arguments
 * provided to `g` followed by the arguments provided initially.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a, b, c, ..., n) -> x) -> [d, e, f, ..., n] -> ((a, b, c, ...) -> x)
 * @param {Function} f
 * @param {Array} args
 * @return {Function}
 * @see R.partial
 * @example
 *
 *      var greet = (salutation, title, firstName, lastName) =>
 *        salutation + ', ' + title + ' ' + firstName + ' ' + lastName + '!';
 *
 *      var greetMsJaneJones = R.partialRight(greet, ['Ms.', 'Jane', 'Jones']);
 *
 *      greetMsJaneJones('Hello'); //=> 'Hello, Ms. Jane Jones!'
 * @symb R.partialRight(f, [a, b])(c, d) = f(c, d, a, b)
 */
module.exports = _createPartialApplicator(flip(_concat));

},{"./flip":70,"./internal/_concat":99,"./internal/_createPartialApplicator":102}],220:[function(require,module,exports){
var filter = require('./filter');
var juxt = require('./juxt');
var reject = require('./reject');


/**
 * Takes a predicate and a list or other "filterable" object and returns the
 * pair of filterable objects of the same type of elements which do and do not
 * satisfy, the predicate, respectively.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> [f a, f a]
 * @param {Function} pred A predicate to determine which side the element belongs to.
 * @param {Array} filterable the list (or other filterable) to partition.
 * @return {Array} An array, containing first the subset of elements that satisfy the
 *         predicate, and second the subset of elements that do not satisfy.
 * @see R.filter, R.reject
 * @example
 *
 *      R.partition(R.contains('s'), ['sss', 'ttt', 'foo', 'bars']);
 *      // => [ [ 'sss', 'bars' ],  [ 'ttt', 'foo' ] ]
 *
 *      R.partition(R.contains('s'), { a: 'sss', b: 'ttt', foo: 'bars' });
 *      // => [ { a: 'sss', foo: 'bars' }, { b: 'ttt' }  ]
 */
module.exports = juxt([filter, reject]);

},{"./filter":64,"./juxt":172,"./reject":247}],221:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Retrieve the value at a given path.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig [Idx] -> {a} -> a | Undefined
 * @param {Array} path The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path`.
 * @see R.prop
 * @example
 *
 *      R.path(['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.path(['a', 'b'], {c: {b: 2}}); //=> undefined
 */
module.exports = _curry2(function path(paths, obj) {
  var val = obj;
  var idx = 0;
  while (idx < paths.length) {
    if (val == null) {
      return;
    }
    val = val[paths[idx]];
    idx += 1;
  }
  return val;
});

},{"./internal/_curry2":104}],222:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var equals = require('./equals');
var path = require('./path');


/**
 * Determines whether a nested path on an object has a specific value, in
 * `R.equals` terms. Most likely used to filter a list.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category Relation
 * @typedefn Idx = String | Int
 * @sig [Idx] -> a -> {a} -> Boolean
 * @param {Array} path The path of the nested property to use
 * @param {*} val The value to compare the nested property with
 * @param {Object} obj The object to check the nested property in
 * @return {Boolean} `true` if the value equals the nested object property,
 *         `false` otherwise.
 * @example
 *
 *      var user1 = { address: { zipCode: 90210 } };
 *      var user2 = { address: { zipCode: 55555 } };
 *      var user3 = { name: 'Bob' };
 *      var users = [ user1, user2, user3 ];
 *      var isFamous = R.pathEq(['address', 'zipCode'], 90210);
 *      R.filter(isFamous, users); //=> [ user1 ]
 */
module.exports = _curry3(function pathEq(_path, val, obj) {
  return equals(path(_path, obj), val);
});

},{"./equals":62,"./internal/_curry3":105,"./path":221}],223:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var defaultTo = require('./defaultTo');
var path = require('./path');


/**
 * If the given, non-null object has a value at the given path, returns the
 * value at that path. Otherwise returns the provided default value.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Object
 * @typedefn Idx = String | Int
 * @sig a -> [Idx] -> {a} -> a
 * @param {*} d The default value.
 * @param {Array} p The path to use.
 * @param {Object} obj The object to retrieve the nested property from.
 * @return {*} The data at `path` of the supplied object or the default value.
 * @example
 *
 *      R.pathOr('N/A', ['a', 'b'], {a: {b: 2}}); //=> 2
 *      R.pathOr('N/A', ['a', 'b'], {c: {b: 2}}); //=> "N/A"
 */
module.exports = _curry3(function pathOr(d, p, obj) {
  return defaultTo(d, path(p, obj));
});

},{"./defaultTo":45,"./internal/_curry3":105,"./path":221}],224:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var path = require('./path');


/**
 * Returns `true` if the specified object property at given path satisfies the
 * given predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Logic
 * @typedefn Idx = String | Int
 * @sig (a -> Boolean) -> [Idx] -> {a} -> Boolean
 * @param {Function} pred
 * @param {Array} propPath
 * @param {*} obj
 * @return {Boolean}
 * @see R.propSatisfies, R.path
 * @example
 *
 *      R.pathSatisfies(y => y > 0, ['x', 'y'], {x: {y: 2}}); //=> true
 */
module.exports = _curry3(function pathSatisfies(pred, propPath, obj) {
  return propPath.length > 0 && pred(path(propPath, obj));
});

},{"./internal/_curry3":105,"./path":221}],225:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns a partial copy of an object containing only the keys specified. If
 * the key does not exist, the property is ignored.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.omit, R.props
 * @example
 *
 *      R.pick(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pick(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1}
 */
module.exports = _curry2(function pick(names, obj) {
  var result = {};
  var idx = 0;
  while (idx < names.length) {
    if (names[idx] in obj) {
      result[names[idx]] = obj[names[idx]];
    }
    idx += 1;
  }
  return result;
});

},{"./internal/_curry2":104}],226:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Similar to `pick` except that this one includes a `key: undefined` pair for
 * properties that don't exist.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> {k: v}
 * @param {Array} names an array of String property names to copy onto a new object
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties from `names` on it.
 * @see R.pick
 * @example
 *
 *      R.pickAll(['a', 'd'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, d: 4}
 *      R.pickAll(['a', 'e', 'f'], {a: 1, b: 2, c: 3, d: 4}); //=> {a: 1, e: undefined, f: undefined}
 */
module.exports = _curry2(function pickAll(names, obj) {
  var result = {};
  var idx = 0;
  var len = names.length;
  while (idx < len) {
    var name = names[idx];
    result[name] = obj[name];
    idx += 1;
  }
  return result;
});

},{"./internal/_curry2":104}],227:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns a partial copy of an object containing only the keys that satisfy
 * the supplied predicate.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Object
 * @sig (v, k -> Boolean) -> {k: v} -> {k: v}
 * @param {Function} pred A predicate to determine whether or not a key
 *        should be included on the output object.
 * @param {Object} obj The object to copy from
 * @return {Object} A new object with only properties that satisfy `pred`
 *         on it.
 * @see R.pick, R.filter
 * @example
 *
 *      var isUpperCase = (val, key) => key.toUpperCase() === key;
 *      R.pickBy(isUpperCase, {a: 1, b: 2, A: 3, B: 4}); //=> {A: 3, B: 4}
 */
module.exports = _curry2(function pickBy(test, obj) {
  var result = {};
  for (var prop in obj) {
    if (test(obj[prop], prop, obj)) {
      result[prop] = obj[prop];
    }
  }
  return result;
});

},{"./internal/_curry2":104}],228:[function(require,module,exports){
var _arity = require('./internal/_arity');
var _pipe = require('./internal/_pipe');
var reduce = require('./reduce');
var tail = require('./tail');


/**
 * Performs left-to-right function composition. The leftmost function may have
 * any arity; the remaining functions must be unary.
 *
 * In some libraries this function is named `sequence`.
 *
 * **Note:** The result of pipe is not automatically curried.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (((a, b, ..., n) -> o), (o -> p), ..., (x -> y), (y -> z)) -> ((a, b, ..., n) -> z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.compose
 * @example
 *
 *      var f = R.pipe(Math.pow, R.negate, R.inc);
 *
 *      f(3, 4); // -(3^4) + 1
 * @symb R.pipe(f, g, h)(a, b) = h(g(f(a, b)))
 */
module.exports = function pipe() {
  if (arguments.length === 0) {
    throw new Error('pipe requires at least one argument');
  }
  return _arity(arguments[0].length,
                reduce(_pipe, arguments[0], tail(arguments)));
};

},{"./internal/_arity":92,"./internal/_pipe":132,"./reduce":242,"./tail":267}],229:[function(require,module,exports){
var composeK = require('./composeK');
var reverse = require('./reverse');

/**
 * Returns the left-to-right Kleisli composition of the provided functions,
 * each of which must return a value of a type supported by [`chain`](#chain).
 *
 * `R.pipeK(f, g, h)` is equivalent to `R.pipe(R.chain(f), R.chain(g), R.chain(h))`.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Function
 * @sig Chain m => ((a -> m b), (b -> m c), ..., (y -> m z)) -> (a -> m z)
 * @param {...Function}
 * @return {Function}
 * @see R.composeK
 * @example
 *
 *      //  parseJson :: String -> Maybe *
 *      //  get :: String -> Object -> Maybe *
 *
 *      //  getStateCode :: Maybe String -> Maybe String
 *      var getStateCode = R.pipeK(
 *        parseJson,
 *        get('user'),
 *        get('address'),
 *        get('state'),
 *        R.compose(Maybe.of, R.toUpper)
 *      );
 *
 *      getStateCode('{"user":{"address":{"state":"ny"}}}');
 *      //=> Just('NY')
 *      getStateCode('[Invalid JSON]');
 *      //=> Nothing()
 * @symb R.pipeK(f, g, h)(a) = R.chain(h, R.chain(g, f(a)))
 */
module.exports = function pipeK() {
  if (arguments.length === 0) {
    throw new Error('pipeK requires at least one argument');
  }
  return composeK.apply(this, reverse(arguments));
};

},{"./composeK":33,"./reverse":251}],230:[function(require,module,exports){
var _arity = require('./internal/_arity');
var _pipeP = require('./internal/_pipeP');
var reduce = require('./reduce');
var tail = require('./tail');


/**
 * Performs left-to-right composition of one or more Promise-returning
 * functions. The leftmost function may have any arity; the remaining functions
 * must be unary.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category Function
 * @sig ((a -> Promise b), (b -> Promise c), ..., (y -> Promise z)) -> (a -> Promise z)
 * @param {...Function} functions
 * @return {Function}
 * @see R.composeP
 * @example
 *
 *      //  followersForUser :: String -> Promise [User]
 *      var followersForUser = R.pipeP(db.getUserById, db.getFollowers);
 */
module.exports = function pipeP() {
  if (arguments.length === 0) {
    throw new Error('pipeP requires at least one argument');
  }
  return _arity(arguments[0].length,
                reduce(_pipeP, arguments[0], tail(arguments)));
};

},{"./internal/_arity":92,"./internal/_pipeP":133,"./reduce":242,"./tail":267}],231:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var map = require('./map');
var prop = require('./prop');


/**
 * Returns a new list by plucking the same named property off all objects in
 * the list supplied.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig k -> [{k: v}] -> [v]
 * @param {Number|String} key The key name to pluck off of each object.
 * @param {Array} list The array to consider.
 * @return {Array} The list of values for the given key.
 * @see R.props
 * @example
 *
 *      R.pluck('a')([{a: 1}, {a: 2}]); //=> [1, 2]
 *      R.pluck(0)([[1, 2], [3, 4]]);   //=> [1, 3]
 * @symb R.pluck('x', [{x: 1, y: 2}, {x: 3, y: 4}, {x: 5, y: 6}]) = [1, 3, 5]
 * @symb R.pluck(0, [[1, 2], [3, 4], [5, 6]]) = [1, 3, 5]
 */
module.exports = _curry2(function pluck(p, list) {
  return map(prop(p), list);
});

},{"./internal/_curry2":104,"./map":186,"./prop":235}],232:[function(require,module,exports){
var _concat = require('./internal/_concat');
var _curry2 = require('./internal/_curry2');


/**
 * Returns a new list with the given element at the front, followed by the
 * contents of the list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig a -> [a] -> [a]
 * @param {*} el The item to add to the head of the output list.
 * @param {Array} list The array to add to the tail of the output list.
 * @return {Array} A new array.
 * @see R.append
 * @example
 *
 *      R.prepend('fee', ['fi', 'fo', 'fum']); //=> ['fee', 'fi', 'fo', 'fum']
 */
module.exports = _curry2(function prepend(el, list) {
  return _concat([el], list);
});

},{"./internal/_concat":99,"./internal/_curry2":104}],233:[function(require,module,exports){
var multiply = require('./multiply');
var reduce = require('./reduce');


/**
 * Multiplies together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The product of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.product([2,4,6,8,100,1]); //=> 38400
 */
module.exports = reduce(multiply, 1);

},{"./multiply":204,"./reduce":242}],234:[function(require,module,exports){
var _map = require('./internal/_map');
var identity = require('./identity');
var pickAll = require('./pickAll');
var useWith = require('./useWith');


/**
 * Reasonable analog to SQL `select` statement.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @category Relation
 * @sig [k] -> [{k: v}] -> [{k: v}]
 * @param {Array} props The property names to project
 * @param {Array} objs The objects to query
 * @return {Array} An array of objects with just the `props` properties.
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond', grade: 2};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown', grade: 7};
 *      var kids = [abby, fred];
 *      R.project(['name', 'grade'], kids); //=> [{name: 'Abby', grade: 2}, {name: 'Fred', grade: 7}]
 */
module.exports = useWith(_map, [pickAll, identity]); // passing `identity` gives correct arity

},{"./identity":82,"./internal/_map":129,"./pickAll":226,"./useWith":299}],235:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns a function that when supplied an object returns the indicated
 * property of that object, if it exists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig s -> {s: a} -> a | Undefined
 * @param {String} p The property name
 * @param {Object} obj The object to query
 * @return {*} The value at `obj.p`.
 * @see R.path
 * @example
 *
 *      R.prop('x', {x: 100}); //=> 100
 *      R.prop('x', {}); //=> undefined
 */
module.exports = _curry2(function prop(p, obj) { return obj[p]; });

},{"./internal/_curry2":104}],236:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var equals = require('./equals');


/**
 * Returns `true` if the specified object property is equal, in `R.equals`
 * terms, to the given value; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig String -> a -> Object -> Boolean
 * @param {String} name
 * @param {*} val
 * @param {*} obj
 * @return {Boolean}
 * @see R.equals, R.propSatisfies
 * @example
 *
 *      var abby = {name: 'Abby', age: 7, hair: 'blond'};
 *      var fred = {name: 'Fred', age: 12, hair: 'brown'};
 *      var rusty = {name: 'Rusty', age: 10, hair: 'brown'};
 *      var alois = {name: 'Alois', age: 15, disposition: 'surly'};
 *      var kids = [abby, fred, rusty, alois];
 *      var hasBrownHair = R.propEq('hair', 'brown');
 *      R.filter(hasBrownHair, kids); //=> [fred, rusty]
 */
module.exports = _curry3(function propEq(name, val, obj) {
  return equals(val, obj[name]);
});

},{"./equals":62,"./internal/_curry3":105}],237:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var is = require('./is');


/**
 * Returns `true` if the specified object property is of the given type;
 * `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Type
 * @sig Type -> String -> Object -> Boolean
 * @param {Function} type
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.is, R.propSatisfies
 * @example
 *
 *      R.propIs(Number, 'x', {x: 1, y: 2});  //=> true
 *      R.propIs(Number, 'x', {x: 'foo'});    //=> false
 *      R.propIs(Number, 'x', {});            //=> false
 */
module.exports = _curry3(function propIs(type, name, obj) {
  return is(type, obj[name]);
});

},{"./internal/_curry3":105,"./is":167}],238:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var _has = require('./internal/_has');


/**
 * If the given, non-null object has an own property with the specified name,
 * returns the value of that property. Otherwise returns the provided default
 * value.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category Object
 * @sig a -> String -> Object -> a
 * @param {*} val The default value.
 * @param {String} p The name of the property to return.
 * @param {Object} obj The object to query.
 * @return {*} The value of given property of the supplied object or the default value.
 * @example
 *
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var favorite = R.prop('favoriteLibrary');
 *      var favoriteWithDefault = R.propOr('Ramda', 'favoriteLibrary');
 *
 *      favorite(alice);  //=> undefined
 *      favoriteWithDefault(alice);  //=> 'Ramda'
 */
module.exports = _curry3(function propOr(val, p, obj) {
  return (obj != null && _has(p, obj)) ? obj[p] : val;
});

},{"./internal/_curry3":105,"./internal/_has":115}],239:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Returns `true` if the specified object property satisfies the given
 * predicate; `false` otherwise.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Logic
 * @sig (a -> Boolean) -> String -> {String: a} -> Boolean
 * @param {Function} pred
 * @param {String} name
 * @param {*} obj
 * @return {Boolean}
 * @see R.propEq, R.propIs
 * @example
 *
 *      R.propSatisfies(x => x > 0, 'x', {x: 1, y: 2}); //=> true
 */
module.exports = _curry3(function propSatisfies(pred, name, obj) {
  return pred(obj[name]);
});

},{"./internal/_curry3":105}],240:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Acts as multiple `prop`: array of keys in, array of values out. Preserves
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig [k] -> {k: v} -> [v]
 * @param {Array} ps The property names to fetch
 * @param {Object} obj The object to query
 * @return {Array} The corresponding values or partially applied function.
 * @example
 *
 *      R.props(['x', 'y'], {x: 1, y: 2}); //=> [1, 2]
 *      R.props(['c', 'a', 'b'], {b: 2, a: 1}); //=> [undefined, 1, 2]
 *
 *      var fullName = R.compose(R.join(' '), R.props(['first', 'last']));
 *      fullName({last: 'Bullet-Tooth', age: 33, first: 'Tony'}); //=> 'Tony Bullet-Tooth'
 */
module.exports = _curry2(function props(ps, obj) {
  var len = ps.length;
  var out = [];
  var idx = 0;

  while (idx < len) {
    out[idx] = obj[ps[idx]];
    idx += 1;
  }

  return out;
});

},{"./internal/_curry2":104}],241:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _isNumber = require('./internal/_isNumber');


/**
 * Returns a list of numbers from `from` (inclusive) to `to` (exclusive).
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> Number -> [Number]
 * @param {Number} from The first number in the list.
 * @param {Number} to One more than the last number in the list.
 * @return {Array} The list of numbers in tthe set `[a, b)`.
 * @example
 *
 *      R.range(1, 5);    //=> [1, 2, 3, 4]
 *      R.range(50, 53);  //=> [50, 51, 52]
 */
module.exports = _curry2(function range(from, to) {
  if (!(_isNumber(from) && _isNumber(to))) {
    throw new TypeError('Both arguments to range must be numbers');
  }
  var result = [];
  var n = from;
  while (n < to) {
    result.push(n);
    n += 1;
  }
  return result;
});

},{"./internal/_curry2":104,"./internal/_isNumber":122}],242:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var _reduce = require('./internal/_reduce');


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It may use
 * `R.reduced` to shortcut the iteration.
 *
 * The arguments' order of `reduceRight`'s iterator function is *(value, acc)*.
 *
 * Note: `R.reduce` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce#Description
 *
 * Dispatches to the `reduce` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduced, R.addIndex, R.reduceRight
 * @example
 *
 *      R.reduce(R.subtract, 0, [1, 2, 3, 4]) // => ((((0 - 1) - 2) - 3) - 4) = -10
 *                -               -10
 *               / \              / \
 *              -   4           -6   4
 *             / \              / \
 *            -   3   ==>     -3   3
 *           / \              / \
 *          -   2           -1   2
 *         / \              / \
 *        0   1            0   1
 *
 * @symb R.reduce(f, a, [b, c, d]) = f(f(f(a, b), c), d)
 */
module.exports = _curry3(_reduce);

},{"./internal/_curry3":105,"./internal/_reduce":135}],243:[function(require,module,exports){
var _curryN = require('./internal/_curryN');
var _dispatchable = require('./internal/_dispatchable');
var _has = require('./internal/_has');
var _reduce = require('./internal/_reduce');
var _xreduceBy = require('./internal/_xreduceBy');


/**
 * Groups the elements of the list according to the result of calling
 * the String-returning function `keyFn` on each element and reduces the elements
 * of each group to a single value via the reducer function `valueFn`.
 *
 * This function is basically a more general `groupBy` function.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category List
 * @sig ((a, b) -> a) -> a -> (b -> String) -> [b] -> {String: a}
 * @param {Function} valueFn The function that reduces the elements of each group to a single
 *        value. Receives two values, accumulator for a particular group and the current element.
 * @param {*} acc The (initial) accumulator value for each group.
 * @param {Function} keyFn The function that maps the list's element into a key.
 * @param {Array} list The array to group.
 * @return {Object} An object with the output of `keyFn` for keys, mapped to the output of
 *         `valueFn` for elements which produced that key when passed to `keyFn`.
 * @see R.groupBy, R.reduce
 * @example
 *
 *      var reduceToNamesBy = R.reduceBy((acc, student) => acc.concat(student.name), []);
 *      var namesByGrade = reduceToNamesBy(function(student) {
 *        var score = student.score;
 *        return score < 65 ? 'F' :
 *               score < 70 ? 'D' :
 *               score < 80 ? 'C' :
 *               score < 90 ? 'B' : 'A';
 *      });
 *      var students = [{name: 'Lucy', score: 92},
 *                      {name: 'Drew', score: 85},
 *                      // ...
 *                      {name: 'Bart', score: 62}];
 *      namesByGrade(students);
 *      // {
 *      //   'A': ['Lucy'],
 *      //   'B': ['Drew']
 *      //   // ...,
 *      //   'F': ['Bart']
 *      // }
 */
module.exports = _curryN(4, [], _dispatchable([], _xreduceBy,
  function reduceBy(valueFn, valueAcc, keyFn, list) {
    return _reduce(function(acc, elt) {
      var key = keyFn(elt);
      acc[key] = valueFn(_has(key, acc) ? acc[key] : valueAcc, elt);
      return acc;
    }, {}, list);
  }));

},{"./internal/_curryN":106,"./internal/_dispatchable":107,"./internal/_has":115,"./internal/_reduce":135,"./internal/_xreduceBy":156}],244:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Returns a single item by iterating through the list, successively calling
 * the iterator function and passing it an accumulator value and the current
 * value from the array, and then passing the result to the next call.
 *
 * Similar to `reduce`, except moves through the input list from the right to
 * the left.
 *
 * The iterator function receives two values: *(value, acc)*, while the arguments'
 * order of `reduce`'s iterator function is *(acc, value)*.
 *
 * Note: `R.reduceRight` does not skip deleted or unassigned indices (sparse
 * arrays), unlike the native `Array.prototype.reduce` method. For more details
 * on this behavior, see:
 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduceRight#Description
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a, b -> b) -> b -> [a] -> b
 * @param {Function} fn The iterator function. Receives two values, the current element from the array
 *        and the accumulator.
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.addIndex
 * @example
 *
 *      R.reduceRight(R.subtract, 0, [1, 2, 3, 4]) // => (1 - (2 - (3 - (4 - 0)))) = -2
 *          -               -2
 *         / \              / \
 *        1   -            1   3
 *           / \              / \
 *          2   -     ==>    2  -1
 *             / \              / \
 *            3   -            3   4
 *               / \              / \
 *              4   0            4   0
 *
 * @symb R.reduceRight(f, a, [b, c, d]) = f(b, f(c, f(d, a)))
 */
module.exports = _curry3(function reduceRight(fn, acc, list) {
  var idx = list.length - 1;
  while (idx >= 0) {
    acc = fn(list[idx], acc);
    idx -= 1;
  }
  return acc;
});

},{"./internal/_curry3":105}],245:[function(require,module,exports){
var _curryN = require('./internal/_curryN');
var _reduce = require('./internal/_reduce');
var _reduced = require('./internal/_reduced');


/**
 * Like `reduce`, `reduceWhile` returns a single item by iterating through
 * the list, successively calling the iterator function. `reduceWhile` also
 * takes a predicate that is evaluated before each step. If the predicate returns
 * `false`, it "short-circuits" the iteration and returns the current value
 * of the accumulator.
 *
 * @func
 * @memberOf R
 * @since v0.22.0
 * @category List
 * @sig ((a, b) -> Boolean) -> ((a, b) -> a) -> a -> [b] -> a
 * @param {Function} pred The predicate. It is passed the accumulator and the
 *        current element.
 * @param {Function} fn The iterator function. Receives two values, the
 *        accumulator and the current element.
 * @param {*} a The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced
 * @example
 *
 *      var isOdd = (acc, x) => x % 2 === 1;
 *      var xs = [1, 3, 5, 60, 777, 800];
 *      R.reduceWhile(isOdd, R.add, 0, xs); //=> 9
 *
 *      var ys = [2, 4, 6]
 *      R.reduceWhile(isOdd, R.add, 111, ys); //=> 111
 */
module.exports = _curryN(4, [], function _reduceWhile(pred, fn, a, list) {
  return _reduce(function(acc, x) {
    return pred(acc, x) ? fn(acc, x) : _reduced(acc);
  }, a, list);
});

},{"./internal/_curryN":106,"./internal/_reduce":135,"./internal/_reduced":136}],246:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _reduced = require('./internal/_reduced');

/**
 * Returns a value wrapped to indicate that it is the final value of the reduce
 * and transduce functions. The returned value should be considered a black
 * box: the internal structure is not guaranteed to be stable.
 *
 * Note: this optimization is unavailable to functions not explicitly listed
 * above. For instance, it is not currently supported by reduceRight.
 *
 * @func
 * @memberOf R
 * @since v0.15.0
 * @category List
 * @sig a -> *
 * @param {*} x The final value of the reduce.
 * @return {*} The wrapped value.
 * @see R.reduce, R.transduce
 * @example
 *
 *      R.reduce(
 *        R.pipe(R.add, R.when(R.gte(R.__, 10), R.reduced)),
 *        0,
 *        [1, 2, 3, 4, 5]) // 10
 */

module.exports = _curry1(_reduced);

},{"./internal/_curry1":103,"./internal/_reduced":136}],247:[function(require,module,exports){
var _complement = require('./internal/_complement');
var _curry2 = require('./internal/_curry2');
var filter = require('./filter');


/**
 * The complement of `filter`.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Filterable f => (a -> Boolean) -> f a -> f a
 * @param {Function} pred
 * @param {Array} filterable
 * @return {Array}
 * @see R.filter, R.transduce, R.addIndex
 * @example
 *
 *      var isOdd = (n) => n % 2 === 1;
 *
 *      R.reject(isOdd, [1, 2, 3, 4]); //=> [2, 4]
 *
 *      R.reject(isOdd, {a: 1, b: 2, c: 3, d: 4}); //=> {b: 2, d: 4}
 */
module.exports = _curry2(function reject(pred, filterable) {
  return filter(_complement(pred), filterable);
});

},{"./filter":64,"./internal/_complement":98,"./internal/_curry2":104}],248:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Removes the sub-list of `list` starting at index `start` and containing
 * `count` elements. _Note that this is not destructive_: it returns a copy of
 * the list with the changes.
 * <small>No lists have been harmed in the application of this function.</small>
 *
 * @func
 * @memberOf R
 * @since v0.2.2
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @param {Number} start The position to start removing elements
 * @param {Number} count The number of elements to remove
 * @param {Array} list The list to remove from
 * @return {Array} A new Array with `count` elements from `start` removed.
 * @example
 *
 *      R.remove(2, 3, [1,2,3,4,5,6,7,8]); //=> [1,2,6,7,8]
 */
module.exports = _curry3(function remove(start, count, list) {
  var result = Array.prototype.slice.call(list, 0);
  result.splice(start, count);
  return result;
});

},{"./internal/_curry3":105}],249:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var always = require('./always');
var times = require('./times');


/**
 * Returns a fixed list of size `n` containing a specified identical value.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category List
 * @sig a -> n -> [a]
 * @param {*} value The value to repeat.
 * @param {Number} n The desired size of the output list.
 * @return {Array} A new array containing `n` `value`s.
 * @example
 *
 *      R.repeat('hi', 5); //=> ['hi', 'hi', 'hi', 'hi', 'hi']
 *
 *      var obj = {};
 *      var repeatedObjs = R.repeat(obj, 5); //=> [{}, {}, {}, {}, {}]
 *      repeatedObjs[0] === repeatedObjs[1]; //=> true
 * @symb R.repeat(a, 0) = []
 * @symb R.repeat(a, 1) = [a]
 * @symb R.repeat(a, 2) = [a, a]
 */
module.exports = _curry2(function repeat(value, n) {
  return times(always(value), n);
});

},{"./always":11,"./internal/_curry2":104,"./times":274}],250:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Replace a substring or regex match in a string with a replacement.
 *
 * @func
 * @memberOf R
 * @since v0.7.0
 * @category String
 * @sig RegExp|String -> String -> String -> String
 * @param {RegExp|String} pattern A regular expression or a substring to match.
 * @param {String} replacement The string to replace the matches with.
 * @param {String} str The String to do the search and replacement in.
 * @return {String} The result.
 * @example
 *
 *      R.replace('foo', 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *      R.replace(/foo/, 'bar', 'foo foo foo'); //=> 'bar foo foo'
 *
 *      // Use the "g" (global) flag to replace all occurrences:
 *      R.replace(/foo/g, 'bar', 'foo foo foo'); //=> 'bar bar bar'
 */
module.exports = _curry3(function replace(regex, replacement, str) {
  return str.replace(regex, replacement);
});

},{"./internal/_curry3":105}],251:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _isString = require('./internal/_isString');


/**
 * Returns a new list or string with the elements or characters in reverse
 * order.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {Array|String} list
 * @return {Array|String}
 * @example
 *
 *      R.reverse([1, 2, 3]);  //=> [3, 2, 1]
 *      R.reverse([1, 2]);     //=> [2, 1]
 *      R.reverse([1]);        //=> [1]
 *      R.reverse([]);         //=> []
 *
 *      R.reverse('abc');      //=> 'cba'
 *      R.reverse('ab');       //=> 'ba'
 *      R.reverse('a');        //=> 'a'
 *      R.reverse('');         //=> ''
 */
module.exports = _curry1(function reverse(list) {
  return _isString(list) ? list.split('').reverse().join('') :
                           Array.prototype.slice.call(list, 0).reverse();
});

},{"./internal/_curry1":103,"./internal/_isString":126}],252:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Scan is similar to reduce, but returns a list of successively reduced values
 * from the left
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a,b -> a) -> a -> [b] -> [a]
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array
 * @param {*} acc The accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {Array} A list of all intermediately reduced values.
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var factorials = R.scan(R.multiply, 1, numbers); //=> [1, 1, 2, 6, 24]
 * @symb R.scan(f, a, [b, c]) = [a, f(a, b), f(f(a, b), c)]
 */
module.exports = _curry3(function scan(fn, acc, list) {
  var idx = 0;
  var len = list.length;
  var result = [acc];
  while (idx < len) {
    acc = fn(acc, list[idx]);
    result[idx + 1] = acc;
    idx += 1;
  }
  return result;
});

},{"./internal/_curry3":105}],253:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var ap = require('./ap');
var map = require('./map');
var prepend = require('./prepend');
var reduceRight = require('./reduceRight');


/**
 * Transforms a [Traversable](https://github.com/fantasyland/fantasy-land#traversable)
 * of [Applicative](https://github.com/fantasyland/fantasy-land#applicative) into an
 * Applicative of Traversable.
 *
 * Dispatches to the `sequence` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> t (f a) -> f (t a)
 * @param {Function} of
 * @param {*} traversable
 * @return {*}
 * @see R.traverse
 * @example
 *
 *      R.sequence(Maybe.of, [Just(1), Just(2), Just(3)]);   //=> Just([1, 2, 3])
 *      R.sequence(Maybe.of, [Just(1), Just(2), Nothing()]); //=> Nothing()
 *
 *      R.sequence(R.of, Just([1, 2, 3])); //=> [Just(1), Just(2), Just(3)]
 *      R.sequence(R.of, Nothing());       //=> [Nothing()]
 */
module.exports = _curry2(function sequence(of, traversable) {
  return typeof traversable.sequence === 'function' ?
    traversable.sequence(of) :
    reduceRight(function(x, acc) { return ap(map(prepend, x), acc); },
                of([]),
                traversable);
});

},{"./ap":15,"./internal/_curry2":104,"./map":186,"./prepend":232,"./reduceRight":244}],254:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var always = require('./always');
var over = require('./over');


/**
 * Returns the result of "setting" the portion of the given data structure
 * focused by the given lens to the given value.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> a -> s -> s
 * @param {Lens} lens
 * @param {*} v
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.set(xLens, 4, {x: 1, y: 2});  //=> {x: 4, y: 2}
 *      R.set(xLens, 8, {x: 1, y: 2});  //=> {x: 8, y: 2}
 */
module.exports = _curry3(function set(lens, v, x) {
  return over(lens, always(v), x);
});

},{"./always":11,"./internal/_curry3":105,"./over":216}],255:[function(require,module,exports){
var _checkForMethod = require('./internal/_checkForMethod');
var _curry3 = require('./internal/_curry3');


/**
 * Returns the elements of the given list or string (or object with a `slice`
 * method) from `fromIndex` (inclusive) to `toIndex` (exclusive).
 *
 * Dispatches to the `slice` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.4
 * @category List
 * @sig Number -> Number -> [a] -> [a]
 * @sig Number -> Number -> String -> String
 * @param {Number} fromIndex The start index (inclusive).
 * @param {Number} toIndex The end index (exclusive).
 * @param {*} list
 * @return {*}
 * @example
 *
 *      R.slice(1, 3, ['a', 'b', 'c', 'd']);        //=> ['b', 'c']
 *      R.slice(1, Infinity, ['a', 'b', 'c', 'd']); //=> ['b', 'c', 'd']
 *      R.slice(0, -1, ['a', 'b', 'c', 'd']);       //=> ['a', 'b', 'c']
 *      R.slice(-3, -1, ['a', 'b', 'c', 'd']);      //=> ['b', 'c']
 *      R.slice(0, 3, 'ramda');                     //=> 'ram'
 */
module.exports = _curry3(_checkForMethod('slice', function slice(fromIndex, toIndex, list) {
  return Array.prototype.slice.call(list, fromIndex, toIndex);
}));

},{"./internal/_checkForMethod":95,"./internal/_curry3":105}],256:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns a copy of the list, sorted according to the comparator function,
 * which should accept two values at a time and return a negative number if the
 * first value is smaller, a positive number if it's larger, and zero if they
 * are equal. Please note that this is a **copy** of the list. It does not
 * modify the original.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a,a -> Number) -> [a] -> [a]
 * @param {Function} comparator A sorting function :: a -> b -> Int
 * @param {Array} list The list to sort
 * @return {Array} a new array with its elements sorted by the comparator function.
 * @example
 *
 *      var diff = function(a, b) { return a - b; };
 *      R.sort(diff, [4,2,7,5]); //=> [2, 4, 5, 7]
 */
module.exports = _curry2(function sort(comparator, list) {
  return Array.prototype.slice.call(list, 0).sort(comparator);
});

},{"./internal/_curry2":104}],257:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Sorts the list according to the supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig Ord b => (a -> b) -> [a] -> [a]
 * @param {Function} fn
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted by the keys generated by `fn`.
 * @example
 *
 *      var sortByFirstItem = R.sortBy(R.prop(0));
 *      var sortByNameCaseInsensitive = R.sortBy(R.compose(R.toLower, R.prop('name')));
 *      var pairs = [[-1, 1], [-2, 2], [-3, 3]];
 *      sortByFirstItem(pairs); //=> [[-3, 3], [-2, 2], [-1, 1]]
 *      var alice = {
 *        name: 'ALICE',
 *        age: 101
 *      };
 *      var bob = {
 *        name: 'Bob',
 *        age: -10
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 314.159
 *      };
 *      var people = [clara, bob, alice];
 *      sortByNameCaseInsensitive(people); //=> [alice, bob, clara]
 */
module.exports = _curry2(function sortBy(fn, list) {
  return Array.prototype.slice.call(list, 0).sort(function(a, b) {
    var aa = fn(a);
    var bb = fn(b);
    return aa < bb ? -1 : aa > bb ? 1 : 0;
  });
});

},{"./internal/_curry2":104}],258:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Sorts a list according to a list of comparators.
 *
 * @func
 * @memberOf R
 * @since v0.23.0
 * @category Relation
 * @sig [a -> a -> Number] -> [a] -> [a]
 * @param {Array} functions A list of comparator functions.
 * @param {Array} list The list to sort.
 * @return {Array} A new list sorted according to the comarator functions.
 * @example
 *
 *      var alice = {
 *        name: 'alice',
 *        age: 40
 *      };
 *      var bob = {
 *        name: 'bob',
 *        age: 30
 *      };
 *      var clara = {
 *        name: 'clara',
 *        age: 40
 *      };
 *      var people = [clara, bob, alice];
 *      var ageNameSort = R.sortWith([
 *        R.descend(R.prop('age')),
 *        R.ascend(R.prop('name'))
 *      ]);
 *      ageNameSort(people); //=> [alice, clara, bob]
 */
module.exports = _curry2(function sortWith(fns, list) {
  return Array.prototype.slice.call(list, 0).sort(function(a, b) {
    var result = 0;
    var i = 0;
    while (result === 0 && i < fns.length) {
      result = fns[i](a, b);
      i += 1;
    }
    return result;
  });
});

},{"./internal/_curry2":104}],259:[function(require,module,exports){
var invoker = require('./invoker');


/**
 * Splits a string into an array of strings based on the given
 * separator.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category String
 * @sig (String | RegExp) -> String -> [String]
 * @param {String|RegExp} sep The pattern.
 * @param {String} str The string to separate into an array.
 * @return {Array} The array of strings from `str` separated by `str`.
 * @see R.join
 * @example
 *
 *      var pathComponents = R.split('/');
 *      R.tail(pathComponents('/usr/local/bin/node')); //=> ['usr', 'local', 'bin', 'node']
 *
 *      R.split('.', 'a.b.c.xyz.d'); //=> ['a', 'b', 'c', 'xyz', 'd']
 */
module.exports = invoker(1, 'split');

},{"./invoker":166}],260:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var length = require('./length');
var slice = require('./slice');


/**
 * Splits a given list or string at a given index.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig Number -> [a] -> [[a], [a]]
 * @sig Number -> String -> [String, String]
 * @param {Number} index The index where the array/string is split.
 * @param {Array|String} array The array/string to be split.
 * @return {Array}
 * @example
 *
 *      R.splitAt(1, [1, 2, 3]);          //=> [[1], [2, 3]]
 *      R.splitAt(5, 'hello world');      //=> ['hello', ' world']
 *      R.splitAt(-1, 'foobar');          //=> ['fooba', 'r']
 */
module.exports = _curry2(function splitAt(index, array) {
  return [slice(0, index, array), slice(index, length(array), array)];
});

},{"./internal/_curry2":104,"./length":177,"./slice":255}],261:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var slice = require('./slice');


/**
 * Splits a collection into slices of the specified length.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [[a]]
 * @sig Number -> String -> [String]
 * @param {Number} n
 * @param {Array} list
 * @return {Array}
 * @example
 *
 *      R.splitEvery(3, [1, 2, 3, 4, 5, 6, 7]); //=> [[1, 2, 3], [4, 5, 6], [7]]
 *      R.splitEvery(3, 'foobarbaz'); //=> ['foo', 'bar', 'baz']
 */
module.exports = _curry2(function splitEvery(n, list) {
  if (n <= 0) {
    throw new Error('First argument to splitEvery must be a positive integer');
  }
  var result = [];
  var idx = 0;
  while (idx < list.length) {
    result.push(slice(idx, idx += n, list));
  }
  return result;
});

},{"./internal/_curry2":104,"./slice":255}],262:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Takes a list and a predicate and returns a pair of lists with the following properties:
 *
 *  - the result of concatenating the two output lists is equivalent to the input list;
 *  - none of the elements of the first output list satisfies the predicate; and
 *  - if the second output list is non-empty, its first element satisfies the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [[a], [a]]
 * @param {Function} pred The predicate that determines where the array is split.
 * @param {Array} list The array to be split.
 * @return {Array}
 * @example
 *
 *      R.splitWhen(R.equals(2), [1, 2, 3, 1, 2, 3]);   //=> [[1], [2, 3, 1, 2, 3]]
 */
module.exports = _curry2(function splitWhen(pred, list) {
  var idx = 0;
  var len = list.length;
  var prefix = [];

  while (idx < len && !pred(list[idx])) {
    prefix.push(list[idx]);
    idx += 1;
  }

  return [prefix, Array.prototype.slice.call(list, idx)];
});

},{"./internal/_curry2":104}],263:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Subtracts its second argument from its first argument.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig Number -> Number -> Number
 * @param {Number} a The first value.
 * @param {Number} b The second value.
 * @return {Number} The result of `a - b`.
 * @see R.add
 * @example
 *
 *      R.subtract(10, 8); //=> 2
 *
 *      var minus5 = R.subtract(R.__, 5);
 *      minus5(17); //=> 12
 *
 *      var complementaryAngle = R.subtract(90);
 *      complementaryAngle(30); //=> 60
 *      complementaryAngle(72); //=> 18
 */
module.exports = _curry2(function subtract(a, b) {
  return Number(a) - Number(b);
});

},{"./internal/_curry2":104}],264:[function(require,module,exports){
var add = require('./add');
var reduce = require('./reduce');


/**
 * Adds together all the elements of a list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Math
 * @sig [Number] -> Number
 * @param {Array} list An array of numbers
 * @return {Number} The sum of all the numbers in the list.
 * @see R.reduce
 * @example
 *
 *      R.sum([2,4,6,8,100,1]); //=> 121
 */
module.exports = reduce(add, 0);

},{"./add":6,"./reduce":242}],265:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var concat = require('./concat');
var difference = require('./difference');


/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifferenceWith, R.difference, R.differenceWith
 * @example
 *
 *      R.symmetricDifference([1,2,3,4], [7,6,5,4,3]); //=> [1,2,7,6,5]
 *      R.symmetricDifference([7,6,5,4,3], [1,2,3,4]); //=> [7,6,5,1,2]
 */
module.exports = _curry2(function symmetricDifference(list1, list2) {
  return concat(difference(list1, list2), difference(list2, list1));
});

},{"./concat":35,"./difference":47,"./internal/_curry2":104}],266:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var concat = require('./concat');
var differenceWith = require('./differenceWith');


/**
 * Finds the set (i.e. no duplicates) of all elements contained in the first or
 * second list, but not both. Duplication is determined according to the value
 * returned by applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category Relation
 * @sig ((a, a) -> Boolean) -> [a] -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The elements in `list1` or `list2`, but not both.
 * @see R.symmetricDifference, R.difference, R.differenceWith
 * @example
 *
 *      var eqA = R.eqBy(R.prop('a'));
 *      var l1 = [{a: 1}, {a: 2}, {a: 3}, {a: 4}];
 *      var l2 = [{a: 3}, {a: 4}, {a: 5}, {a: 6}];
 *      R.symmetricDifferenceWith(eqA, l1, l2); //=> [{a: 1}, {a: 2}, {a: 5}, {a: 6}]
 */
module.exports = _curry3(function symmetricDifferenceWith(pred, list1, list2) {
  return concat(differenceWith(pred, list1, list2), differenceWith(pred, list2, list1));
});

},{"./concat":35,"./differenceWith":48,"./internal/_curry3":105}],267:[function(require,module,exports){
var _checkForMethod = require('./internal/_checkForMethod');
var _curry1 = require('./internal/_curry1');
var slice = require('./slice');


/**
 * Returns all but the first element of the given list or string (or object
 * with a `tail` method).
 *
 * Dispatches to the `slice` method of the first argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @sig String -> String
 * @param {*} list
 * @return {*}
 * @see R.head, R.init, R.last
 * @example
 *
 *      R.tail([1, 2, 3]);  //=> [2, 3]
 *      R.tail([1, 2]);     //=> [2]
 *      R.tail([1]);        //=> []
 *      R.tail([]);         //=> []
 *
 *      R.tail('abc');  //=> 'bc'
 *      R.tail('ab');   //=> 'b'
 *      R.tail('a');    //=> ''
 *      R.tail('');     //=> ''
 */
module.exports = _curry1(_checkForMethod('tail', slice(1, Infinity)));

},{"./internal/_checkForMethod":95,"./internal/_curry1":103,"./slice":255}],268:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xtake = require('./internal/_xtake');
var slice = require('./slice');


/**
 * Returns the first `n` elements of the given list, string, or
 * transducer/transformer (or object with a `take` method).
 *
 * Dispatches to the `take` method of the second argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n
 * @param {*} list
 * @return {*}
 * @see R.drop
 * @example
 *
 *      R.take(1, ['foo', 'bar', 'baz']); //=> ['foo']
 *      R.take(2, ['foo', 'bar', 'baz']); //=> ['foo', 'bar']
 *      R.take(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.take(3, 'ramda');               //=> 'ram'
 *
 *      var personnel = [
 *        'Dave Brubeck',
 *        'Paul Desmond',
 *        'Eugene Wright',
 *        'Joe Morello',
 *        'Gerry Mulligan',
 *        'Bob Bates',
 *        'Joe Dodge',
 *        'Ron Crotty'
 *      ];
 *
 *      var takeFive = R.take(5);
 *      takeFive(personnel);
 *      //=> ['Dave Brubeck', 'Paul Desmond', 'Eugene Wright', 'Joe Morello', 'Gerry Mulligan']
 * @symb R.take(-1, [a, b]) = [a, b]
 * @symb R.take(0, [a, b]) = []
 * @symb R.take(1, [a, b]) = [a]
 * @symb R.take(2, [a, b]) = [a, b]
 */
module.exports = _curry2(_dispatchable(['take'], _xtake, function take(n, xs) {
  return slice(0, n < 0 ? Infinity : n, xs);
}));

},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xtake":157,"./slice":255}],269:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var drop = require('./drop');


/**
 * Returns a new list containing the last `n` elements of the given list.
 * If `n > list.length`, returns a list of `list.length` elements.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig Number -> [a] -> [a]
 * @sig Number -> String -> String
 * @param {Number} n The number of elements to return.
 * @param {Array} xs The collection to consider.
 * @return {Array}
 * @see R.dropLast
 * @example
 *
 *      R.takeLast(1, ['foo', 'bar', 'baz']); //=> ['baz']
 *      R.takeLast(2, ['foo', 'bar', 'baz']); //=> ['bar', 'baz']
 *      R.takeLast(3, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(4, ['foo', 'bar', 'baz']); //=> ['foo', 'bar', 'baz']
 *      R.takeLast(3, 'ramda');               //=> 'mda'
 */
module.exports = _curry2(function takeLast(n, xs) {
  return drop(n >= 0 ? xs.length - n : 0, xs);
});

},{"./drop":52,"./internal/_curry2":104}],270:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns a new list containing the last `n` elements of a given list, passing
 * each value to the supplied predicate function, and terminating when the
 * predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropLastWhile, R.addIndex
 * @example
 *
 *      var isNotOne = x => x !== 1;
 *
 *      R.takeLastWhile(isNotOne, [1, 2, 3, 4]); //=> [2, 3, 4]
 */
module.exports = _curry2(function takeLastWhile(fn, list) {
  var idx = list.length - 1;
  while (idx >= 0 && fn(list[idx])) {
    idx -= 1;
  }
  return Array.prototype.slice.call(list, idx + 1);
});

},{"./internal/_curry2":104}],271:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _dispatchable = require('./internal/_dispatchable');
var _xtakeWhile = require('./internal/_xtakeWhile');


/**
 * Returns a new list containing the first `n` elements of a given list,
 * passing each value to the supplied predicate function, and terminating when
 * the predicate function returns `false`. Excludes the element that caused the
 * predicate function to fail. The predicate function is passed one argument:
 * *(value)*.
 *
 * Dispatches to the `takeWhile` method of the second argument, if present.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a -> Boolean) -> [a] -> [a]
 * @param {Function} fn The function called per iteration.
 * @param {Array} list The collection to iterate over.
 * @return {Array} A new array.
 * @see R.dropWhile, R.transduce, R.addIndex
 * @example
 *
 *      var isNotFour = x => x !== 4;
 *
 *      R.takeWhile(isNotFour, [1, 2, 3, 4, 3, 2, 1]); //=> [1, 2, 3]
 */
module.exports = _curry2(_dispatchable(['takeWhile'], _xtakeWhile, function takeWhile(fn, list) {
  var idx = 0;
  var len = list.length;
  while (idx < len && fn(list[idx])) {
    idx += 1;
  }
  return Array.prototype.slice.call(list, 0, idx);
}));

},{"./internal/_curry2":104,"./internal/_dispatchable":107,"./internal/_xtakeWhile":158}],272:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Runs the given function with the supplied object, then returns the object.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (a -> *) -> a -> a
 * @param {Function} fn The function to call with `x`. The return value of `fn` will be thrown away.
 * @param {*} x
 * @return {*} `x`.
 * @example
 *
 *      var sayX = x => console.log('x is ' + x);
 *      R.tap(sayX, 100); //=> 100
 *      // logs 'x is 100'
 * @symb R.tap(f, a) = a
 */
module.exports = _curry2(function tap(fn, x) {
  fn(x);
  return x;
});

},{"./internal/_curry2":104}],273:[function(require,module,exports){
var _cloneRegExp = require('./internal/_cloneRegExp');
var _curry2 = require('./internal/_curry2');
var _isRegExp = require('./internal/_isRegExp');
var toString = require('./toString');


/**
 * Determines whether a given string matches a given regular expression.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category String
 * @sig RegExp -> String -> Boolean
 * @param {RegExp} pattern
 * @param {String} str
 * @return {Boolean}
 * @see R.match
 * @example
 *
 *      R.test(/^x/, 'xyz'); //=> true
 *      R.test(/^y/, 'xyz'); //=> false
 */
module.exports = _curry2(function test(pattern, str) {
  if (!_isRegExp(pattern)) {
    throw new TypeError('‘test’ requires a value of type RegExp as its first argument; received ' + toString(pattern));
  }
  return _cloneRegExp(pattern).test(str);
});

},{"./internal/_cloneRegExp":97,"./internal/_curry2":104,"./internal/_isRegExp":125,"./toString":278}],274:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Calls an input function `n` times, returning an array containing the results
 * of those function calls.
 *
 * `fn` is passed one argument: The current value of `n`, which begins at `0`
 * and is gradually incremented to `n - 1`.
 *
 * @func
 * @memberOf R
 * @since v0.2.3
 * @category List
 * @sig (Number -> a) -> Number -> [a]
 * @param {Function} fn The function to invoke. Passed one argument, the current value of `n`.
 * @param {Number} n A value between `0` and `n - 1`. Increments after each function call.
 * @return {Array} An array containing the return values of all calls to `fn`.
 * @example
 *
 *      R.times(R.identity, 5); //=> [0, 1, 2, 3, 4]
 * @symb R.times(f, 0) = []
 * @symb R.times(f, 1) = [f(0)]
 * @symb R.times(f, 2) = [f(0), f(1)]
 */
module.exports = _curry2(function times(fn, n) {
  var len = Number(n);
  var idx = 0;
  var list;

  if (len < 0 || isNaN(len)) {
    throw new RangeError('n must be a non-negative number');
  }
  list = new Array(len);
  while (idx < len) {
    list[idx] = fn(idx);
    idx += 1;
  }
  return list;
});

},{"./internal/_curry2":104}],275:[function(require,module,exports){
var invoker = require('./invoker');


/**
 * The lower case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to lower case.
 * @return {String} The lower case version of `str`.
 * @see R.toUpper
 * @example
 *
 *      R.toLower('XYZ'); //=> 'xyz'
 */
module.exports = invoker(0, 'toLowerCase');

},{"./invoker":166}],276:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _has = require('./internal/_has');


/**
 * Converts an object into an array of key, value arrays. Only the object's
 * own properties are used.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own properties.
 * @see R.fromPairs
 * @example
 *
 *      R.toPairs({a: 1, b: 2, c: 3}); //=> [['a', 1], ['b', 2], ['c', 3]]
 */
module.exports = _curry1(function toPairs(obj) {
  var pairs = [];
  for (var prop in obj) {
    if (_has(prop, obj)) {
      pairs[pairs.length] = [prop, obj[prop]];
    }
  }
  return pairs;
});

},{"./internal/_curry1":103,"./internal/_has":115}],277:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Converts an object into an array of key, value arrays. The object's own
 * properties and prototype properties are used. Note that the order of the
 * output array is not guaranteed to be consistent across different JS
 * platforms.
 *
 * @func
 * @memberOf R
 * @since v0.4.0
 * @category Object
 * @sig {String: *} -> [[String,*]]
 * @param {Object} obj The object to extract from
 * @return {Array} An array of key, value arrays from the object's own
 *         and prototype properties.
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.toPairsIn(f); //=> [['x','X'], ['y','Y']]
 */
module.exports = _curry1(function toPairsIn(obj) {
  var pairs = [];
  for (var prop in obj) {
    pairs[pairs.length] = [prop, obj[prop]];
  }
  return pairs;
});

},{"./internal/_curry1":103}],278:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var _toString = require('./internal/_toString');


/**
 * Returns the string representation of the given value. `eval`'ing the output
 * should result in a value equivalent to the input value. Many of the built-in
 * `toString` methods do not satisfy this requirement.
 *
 * If the given value is an `[object Object]` with a `toString` method other
 * than `Object.prototype.toString`, this method is invoked with no arguments
 * to produce the return value. This means user-defined constructor functions
 * can provide a suitable `toString` method. For example:
 *
 *     function Point(x, y) {
 *       this.x = x;
 *       this.y = y;
 *     }
 *
 *     Point.prototype.toString = function() {
 *       return 'new Point(' + this.x + ', ' + this.y + ')';
 *     };
 *
 *     R.toString(new Point(1, 2)); //=> 'new Point(1, 2)'
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category String
 * @sig * -> String
 * @param {*} val
 * @return {String}
 * @example
 *
 *      R.toString(42); //=> '42'
 *      R.toString('abc'); //=> '"abc"'
 *      R.toString([1, 2, 3]); //=> '[1, 2, 3]'
 *      R.toString({foo: 1, bar: 2, baz: 3}); //=> '{"bar": 2, "baz": 3, "foo": 1}'
 *      R.toString(new Date('2001-02-03T04:05:06Z')); //=> 'new Date("2001-02-03T04:05:06.000Z")'
 */
module.exports = _curry1(function toString(val) { return _toString(val, []); });

},{"./internal/_curry1":103,"./internal/_toString":139}],279:[function(require,module,exports){
var invoker = require('./invoker');


/**
 * The upper case version of a string.
 *
 * @func
 * @memberOf R
 * @since v0.9.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to upper case.
 * @return {String} The upper case version of `str`.
 * @see R.toLower
 * @example
 *
 *      R.toUpper('abc'); //=> 'ABC'
 */
module.exports = invoker(0, 'toUpperCase');

},{"./invoker":166}],280:[function(require,module,exports){
var _reduce = require('./internal/_reduce');
var _xwrap = require('./internal/_xwrap');
var curryN = require('./curryN');


/**
 * Initializes a transducer using supplied iterator function. Returns a single
 * item by iterating through the list, successively calling the transformed
 * iterator function and passing it an accumulator value and the current value
 * from the array, and then passing the result to the next call.
 *
 * The iterator function receives two values: *(acc, value)*. It will be
 * wrapped as a transformer to initialize the transducer. A transformer can be
 * passed directly in place of an iterator function. In both cases, iteration
 * may be stopped early with the `R.reduced` function.
 *
 * A transducer is a function that accepts a transformer and returns a
 * transformer and can be composed directly.
 *
 * A transformer is an an object that provides a 2-arity reducing iterator
 * function, step, 0-arity initial value function, init, and 1-arity result
 * extraction function, result. The step function is used as the iterator
 * function in reduce. The result function is used to convert the final
 * accumulator into the return type and in most cases is R.identity. The init
 * function can be used to provide an initial accumulator, but is ignored by
 * transduce.
 *
 * The iteration is performed with R.reduce after initializing the transducer.
 *
 * @func
 * @memberOf R
 * @since v0.12.0
 * @category List
 * @sig (c -> c) -> (a,b -> a) -> a -> [b] -> a
 * @param {Function} xf The transducer function. Receives a transformer and returns a transformer.
 * @param {Function} fn The iterator function. Receives two values, the accumulator and the
 *        current element from the array. Wrapped as transformer, if necessary, and used to
 *        initialize the transducer
 * @param {*} acc The initial accumulator value.
 * @param {Array} list The list to iterate over.
 * @return {*} The final, accumulated value.
 * @see R.reduce, R.reduced, R.into
 * @example
 *
 *      var numbers = [1, 2, 3, 4];
 *      var transducer = R.compose(R.map(R.add(1)), R.take(2));
 *
 *      R.transduce(transducer, R.flip(R.append), [], numbers); //=> [2, 3]
 */
module.exports = curryN(4, function transduce(xf, fn, acc, list) {
  return _reduce(xf(typeof fn === 'function' ? _xwrap(fn) : fn), acc, list);
});

},{"./curryN":43,"./internal/_reduce":135,"./internal/_xwrap":159}],281:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Transposes the rows and columns of a 2D list.
 * When passed a list of `n` lists of length `x`,
 * returns a list of `x` lists of length `n`.
 *
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [[a]] -> [[a]]
 * @param {Array} list A 2D list
 * @return {Array} A 2D list
 * @example
 *
 *      R.transpose([[1, 'a'], [2, 'b'], [3, 'c']]) //=> [[1, 2, 3], ['a', 'b', 'c']]
 *      R.transpose([[1, 2, 3], ['a', 'b', 'c']]) //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 *
 * If some of the rows are shorter than the following rows, their elements are skipped:
 *
 *      R.transpose([[10, 11], [20], [], [30, 31, 32]]) //=> [[10, 20, 30], [11, 31], [32]]
 * @symb R.transpose([[a], [b], [c]]) = [a, b, c]
 * @symb R.transpose([[a, b], [c, d]]) = [[a, c], [b, d]]
 * @symb R.transpose([[a, b], [c]]) = [[a, c], [b]]
 */
module.exports = _curry1(function transpose(outerlist) {
  var i = 0;
  var result = [];
  while (i < outerlist.length) {
    var innerlist = outerlist[i];
    var j = 0;
    while (j < innerlist.length) {
      if (typeof result[j] === 'undefined') {
        result[j] = [];
      }
      result[j].push(innerlist[j]);
      j += 1;
    }
    i += 1;
  }
  return result;
});

},{"./internal/_curry1":103}],282:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var map = require('./map');
var sequence = require('./sequence');


/**
 * Maps an [Applicative](https://github.com/fantasyland/fantasy-land#applicative)-returning
 * function over a [Traversable](https://github.com/fantasyland/fantasy-land#traversable),
 * then uses [`sequence`](#sequence) to transform the resulting Traversable of Applicative
 * into an Applicative of Traversable.
 *
 * Dispatches to the `sequence` method of the third argument, if present.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig (Applicative f, Traversable t) => (a -> f a) -> (a -> f b) -> t a -> f (t b)
 * @param {Function} of
 * @param {Function} f
 * @param {*} traversable
 * @return {*}
 * @see R.sequence
 * @example
 *
 *      // Returns `Nothing` if the given divisor is `0`
 *      safeDiv = n => d => d === 0 ? Nothing() : Just(n / d)
 *
 *      R.traverse(Maybe.of, safeDiv(10), [2, 4, 5]); //=> Just([5, 2.5, 2])
 *      R.traverse(Maybe.of, safeDiv(10), [2, 0, 5]); //=> Nothing
 */
module.exports = _curry3(function traverse(of, f, traversable) {
  return sequence(of, map(f, traversable));
});

},{"./internal/_curry3":105,"./map":186,"./sequence":253}],283:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Removes (strips) whitespace from both ends of the string.
 *
 * @func
 * @memberOf R
 * @since v0.6.0
 * @category String
 * @sig String -> String
 * @param {String} str The string to trim.
 * @return {String} Trimmed version of `str`.
 * @example
 *
 *      R.trim('   xyz  '); //=> 'xyz'
 *      R.map(R.trim, R.split(',', 'x, y, z')); //=> ['x', 'y', 'z']
 */
module.exports = (function() {
  var ws = '\x09\x0A\x0B\x0C\x0D\x20\xA0\u1680\u180E\u2000\u2001\u2002\u2003' +
           '\u2004\u2005\u2006\u2007\u2008\u2009\u200A\u202F\u205F\u3000\u2028' +
           '\u2029\uFEFF';
  var zeroWidth = '\u200b';
  var hasProtoTrim = (typeof String.prototype.trim === 'function');
  if (!hasProtoTrim || (ws.trim() || !zeroWidth.trim())) {
    return _curry1(function trim(str) {
      var beginRx = new RegExp('^[' + ws + '][' + ws + ']*');
      var endRx = new RegExp('[' + ws + '][' + ws + ']*$');
      return str.replace(beginRx, '').replace(endRx, '');
    });
  } else {
    return _curry1(function trim(str) {
      return str.trim();
    });
  }
}());

},{"./internal/_curry1":103}],284:[function(require,module,exports){
var _arity = require('./internal/_arity');
var _concat = require('./internal/_concat');
var _curry2 = require('./internal/_curry2');


/**
 * `tryCatch` takes two functions, a `tryer` and a `catcher`. The returned
 * function evaluates the `tryer`; if it does not throw, it simply returns the
 * result. If the `tryer` *does* throw, the returned function evaluates the
 * `catcher` function and returns its result. Note that for effective
 * composition with this function, both the `tryer` and `catcher` functions
 * must return the same type of results.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Function
 * @sig (...x -> a) -> ((e, ...x) -> a) -> (...x -> a)
 * @param {Function} tryer The function that may throw.
 * @param {Function} catcher The function that will be evaluated if `tryer` throws.
 * @return {Function} A new function that will catch exceptions and send then to the catcher.
 * @example
 *
 *      R.tryCatch(R.prop('x'), R.F)({x: true}); //=> true
 *      R.tryCatch(R.prop('x'), R.F)(null);      //=> false
 */
module.exports = _curry2(function _tryCatch(tryer, catcher) {
  return _arity(tryer.length, function() {
    try {
      return tryer.apply(this, arguments);
    } catch (e) {
      return catcher.apply(this, _concat([e], arguments));
    }
  });
});

},{"./internal/_arity":92,"./internal/_concat":99,"./internal/_curry2":104}],285:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Gives a single-word string description of the (native) type of a value,
 * returning such answers as 'Object', 'Number', 'Array', or 'Null'. Does not
 * attempt to distinguish user Object types any further, reporting them all as
 * 'Object'.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Type
 * @sig (* -> {*}) -> String
 * @param {*} val The value to test
 * @return {String}
 * @example
 *
 *      R.type({}); //=> "Object"
 *      R.type(1); //=> "Number"
 *      R.type(false); //=> "Boolean"
 *      R.type('s'); //=> "String"
 *      R.type(null); //=> "Null"
 *      R.type([]); //=> "Array"
 *      R.type(/[A-z]/); //=> "RegExp"
 */
module.exports = _curry1(function type(val) {
  return val === null      ? 'Null'      :
         val === undefined ? 'Undefined' :
         Object.prototype.toString.call(val).slice(8, -1);
});

},{"./internal/_curry1":103}],286:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Takes a function `fn`, which takes a single array argument, and returns a
 * function which:
 *
 *   - takes any number of positional arguments;
 *   - passes these arguments to `fn` as an array; and
 *   - returns the result.
 *
 * In other words, R.unapply derives a variadic function from a function which
 * takes an array. R.unapply is the inverse of R.apply.
 *
 * @func
 * @memberOf R
 * @since v0.8.0
 * @category Function
 * @sig ([*...] -> a) -> (*... -> a)
 * @param {Function} fn
 * @return {Function}
 * @see R.apply
 * @example
 *
 *      R.unapply(JSON.stringify)(1, 2, 3); //=> '[1,2,3]'
 * @symb R.unapply(f)(a, b) = f([a, b])
 */
module.exports = _curry1(function unapply(fn) {
  return function() {
    return fn(Array.prototype.slice.call(arguments, 0));
  };
});

},{"./internal/_curry1":103}],287:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var nAry = require('./nAry');


/**
 * Wraps a function of any arity (including nullary) in a function that accepts
 * exactly 1 parameter. Any extraneous parameters will not be passed to the
 * supplied function.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Function
 * @sig (* -> b) -> (a -> b)
 * @param {Function} fn The function to wrap.
 * @return {Function} A new function wrapping `fn`. The new function is guaranteed to be of
 *         arity 1.
 * @example
 *
 *      var takesTwoArgs = function(a, b) {
 *        return [a, b];
 *      };
 *      takesTwoArgs.length; //=> 2
 *      takesTwoArgs(1, 2); //=> [1, 2]
 *
 *      var takesOneArg = R.unary(takesTwoArgs);
 *      takesOneArg.length; //=> 1
 *      // Only 1 argument is passed to the wrapped function
 *      takesOneArg(1, 2); //=> [1, undefined]
 * @symb R.unary(f)(a, b, c) = f(a)
 */
module.exports = _curry1(function unary(fn) {
  return nAry(1, fn);
});

},{"./internal/_curry1":103,"./nAry":205}],288:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var curryN = require('./curryN');


/**
 * Returns a function of arity `n` from a (manually) curried function.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Function
 * @sig Number -> (a -> b) -> (a -> c)
 * @param {Number} length The arity for the returned function.
 * @param {Function} fn The function to uncurry.
 * @return {Function} A new function.
 * @see R.curry
 * @example
 *
 *      var addFour = a => b => c => d => a + b + c + d;
 *
 *      var uncurriedAddFour = R.uncurryN(4, addFour);
 *      uncurriedAddFour(1, 2, 3, 4); //=> 10
 */
module.exports = _curry2(function uncurryN(depth, fn) {
  return curryN(depth, function() {
    var currentDepth = 1;
    var value = fn;
    var idx = 0;
    var endIdx;
    while (currentDepth <= depth && typeof value === 'function') {
      endIdx = currentDepth === depth ? arguments.length : idx + value.length;
      value = value.apply(this, Array.prototype.slice.call(arguments, idx, endIdx));
      currentDepth += 1;
      idx = endIdx;
    }
    return value;
  });
});

},{"./curryN":43,"./internal/_curry2":104}],289:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Builds a list from a seed value. Accepts an iterator function, which returns
 * either false to stop iteration or an array of length 2 containing the value
 * to add to the resulting list and the seed to be used in the next call to the
 * iterator function.
 *
 * The iterator function receives one argument: *(seed)*.
 *
 * @func
 * @memberOf R
 * @since v0.10.0
 * @category List
 * @sig (a -> [b]) -> * -> [b]
 * @param {Function} fn The iterator function. receives one argument, `seed`, and returns
 *        either false to quit iteration or an array of length two to proceed. The element
 *        at index 0 of this array will be added to the resulting array, and the element
 *        at index 1 will be passed to the next call to `fn`.
 * @param {*} seed The seed value.
 * @return {Array} The final list.
 * @example
 *
 *      var f = n => n > 50 ? false : [-n, n + 10];
 *      R.unfold(f, 10); //=> [-10, -20, -30, -40, -50]
 * @symb R.unfold(f, x) = [f(x)[0], f(f(x)[1])[0], f(f(f(x)[1])[1])[0], ...]
 */
module.exports = _curry2(function unfold(fn, seed) {
  var pair = fn(seed);
  var result = [];
  while (pair && pair.length) {
    result[result.length] = pair[0];
    pair = fn(pair[1]);
  }
  return result;
});

},{"./internal/_curry2":104}],290:[function(require,module,exports){
var _concat = require('./internal/_concat');
var _curry2 = require('./internal/_curry2');
var compose = require('./compose');
var uniq = require('./uniq');


/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig [*] -> [*] -> [*]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @example
 *
 *      R.union([1, 2, 3], [2, 3, 4]); //=> [1, 2, 3, 4]
 */
module.exports = _curry2(compose(uniq, _concat));

},{"./compose":32,"./internal/_concat":99,"./internal/_curry2":104,"./uniq":292}],291:[function(require,module,exports){
var _concat = require('./internal/_concat');
var _curry3 = require('./internal/_curry3');
var uniqWith = require('./uniqWith');


/**
 * Combines two lists into a set (i.e. no duplicates) composed of the elements
 * of each list. Duplication is determined according to the value returned by
 * applying the supplied predicate to two list elements.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Relation
 * @sig (a -> a -> Boolean) -> [*] -> [*] -> [*]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list1 The first list.
 * @param {Array} list2 The second list.
 * @return {Array} The first and second lists concatenated, with
 *         duplicates removed.
 * @see R.union
 * @example
 *
 *      var l1 = [{a: 1}, {a: 2}];
 *      var l2 = [{a: 1}, {a: 4}];
 *      R.unionWith(R.eqBy(R.prop('a')), l1, l2); //=> [{a: 1}, {a: 2}, {a: 4}]
 */
module.exports = _curry3(function unionWith(pred, list1, list2) {
  return uniqWith(pred, _concat(list1, list2));
});

},{"./internal/_concat":99,"./internal/_curry3":105,"./uniqWith":294}],292:[function(require,module,exports){
var identity = require('./identity');
var uniqBy = require('./uniqBy');


/**
 * Returns a new list containing only one copy of each element in the original
 * list. `R.equals` is used to determine equality.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [a]
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniq([1, 1, 2, 1]); //=> [1, 2]
 *      R.uniq([1, '1']);     //=> [1, '1']
 *      R.uniq([[42], [42]]); //=> [[42]]
 */
module.exports = uniqBy(identity);

},{"./identity":82,"./uniqBy":293}],293:[function(require,module,exports){
var _Set = require('./internal/_Set');
var _curry2 = require('./internal/_curry2');


/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied function to
 * each list element. Prefers the first item if the supplied function produces
 * the same value on two items. `R.equals` is used for comparison.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category List
 * @sig (a -> b) -> [a] -> [a]
 * @param {Function} fn A function used to produce a value to use during comparisons.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      R.uniqBy(Math.abs, [-1, -5, 2, 10, 1, 2]); //=> [-1, -5, 2, 10]
 */
module.exports = _curry2(function uniqBy(fn, list) {
  var set = new _Set();
  var result = [];
  var idx = 0;
  var appliedItem, item;

  while (idx < list.length) {
    item = list[idx];
    appliedItem = fn(item);
    if (set.add(appliedItem)) {
      result.push(item);
    }
    idx += 1;
  }
  return result;
});

},{"./internal/_Set":90,"./internal/_curry2":104}],294:[function(require,module,exports){
var _containsWith = require('./internal/_containsWith');
var _curry2 = require('./internal/_curry2');


/**
 * Returns a new list containing only one copy of each element in the original
 * list, based upon the value returned by applying the supplied predicate to
 * two list elements. Prefers the first item if two items compare equal based
 * on the predicate.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category List
 * @sig (a, a -> Boolean) -> [a] -> [a]
 * @param {Function} pred A predicate used to test whether two items are equal.
 * @param {Array} list The array to consider.
 * @return {Array} The list of unique items.
 * @example
 *
 *      var strEq = R.eqBy(String);
 *      R.uniqWith(strEq)([1, '1', 2, 1]); //=> [1, 2]
 *      R.uniqWith(strEq)([{}, {}]);       //=> [{}]
 *      R.uniqWith(strEq)([1, '1', 1]);    //=> [1]
 *      R.uniqWith(strEq)(['1', 1, 1]);    //=> ['1']
 */
module.exports = _curry2(function uniqWith(pred, list) {
  var idx = 0;
  var len = list.length;
  var result = [];
  var item;
  while (idx < len) {
    item = list[idx];
    if (!_containsWith(pred, item, result)) {
      result[result.length] = item;
    }
    idx += 1;
  }
  return result;
});

},{"./internal/_containsWith":101,"./internal/_curry2":104}],295:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is not satisfied, the function will return the result of
 * calling the `whenFalseFn` function with the same argument. If the predicate
 * is satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred        A predicate function
 * @param {Function} whenFalseFn A function to invoke when the `pred` evaluates
 *                               to a falsy value.
 * @param {*}        x           An object to test with the `pred` function and
 *                               pass to `whenFalseFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenFalseFn`.
 * @see R.ifElse, R.when
 * @example
 *
 *      // coerceArray :: (a|[a]) -> [a]
 *      var coerceArray = R.unless(R.isArrayLike, R.of);
 *      coerceArray([1, 2, 3]); //=> [1, 2, 3]
 *      coerceArray(1);         //=> [1]
 */
module.exports = _curry3(function unless(pred, whenFalseFn, x) {
  return pred(x) ? x : whenFalseFn(x);
});

},{"./internal/_curry3":105}],296:[function(require,module,exports){
var _identity = require('./internal/_identity');
var chain = require('./chain');


/**
 * Shorthand for `R.chain(R.identity)`, which removes one level of nesting from
 * any [Chain](https://github.com/fantasyland/fantasy-land#chain).
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig Chain c => c (c a) -> c a
 * @param {*} list
 * @return {*}
 * @see R.flatten, R.chain
 * @example
 *
 *      R.unnest([1, [2], [[3]]]); //=> [1, 2, [3]]
 *      R.unnest([[1, 2], [3, 4], [5, 6]]); //=> [1, 2, 3, 4, 5, 6]
 */
module.exports = chain(_identity);

},{"./chain":27,"./internal/_identity":116}],297:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Takes a predicate, a transformation function, and an initial value,
 * and returns a value of the same type as the initial value.
 * It does so by applying the transformation until the predicate is satisfied,
 * at which point it returns the satisfactory value.
 *
 * @func
 * @memberOf R
 * @since v0.20.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred A predicate function
 * @param {Function} fn The iterator function
 * @param {*} init Initial value
 * @return {*} Final value that satisfies predicate
 * @example
 *
 *      R.until(R.gt(R.__, 100), R.multiply(2))(1) // => 128
 */
module.exports = _curry3(function until(pred, fn, init) {
  var val = init;
  while (!pred(val)) {
    val = fn(val);
  }
  return val;
});

},{"./internal/_curry3":105}],298:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');
var adjust = require('./adjust');
var always = require('./always');


/**
 * Returns a new copy of the array with the element at the provided index
 * replaced with the given value.
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category List
 * @sig Number -> a -> [a] -> [a]
 * @param {Number} idx The index to update.
 * @param {*} x The value to exist at the given index of the returned array.
 * @param {Array|Arguments} list The source array-like object to be updated.
 * @return {Array} A copy of `list` with the value at index `idx` replaced with `x`.
 * @see R.adjust
 * @example
 *
 *      R.update(1, 11, [0, 1, 2]);     //=> [0, 11, 2]
 *      R.update(1)(11)([0, 1, 2]);     //=> [0, 11, 2]
 * @symb R.update(-1, a, [b, c]) = [b, a]
 * @symb R.update(0, a, [b, c]) = [a, c]
 * @symb R.update(1, a, [b, c]) = [b, a]
 */
module.exports = _curry3(function update(idx, x, list) {
  return adjust(always(x), idx, list);
});

},{"./adjust":8,"./always":11,"./internal/_curry3":105}],299:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var curryN = require('./curryN');


/**
 * Accepts a function `fn` and a list of transformer functions and returns a
 * new curried function. When the new function is invoked, it calls the
 * function `fn` with parameters consisting of the result of calling each
 * supplied handler on successive arguments to the new function.
 *
 * If more arguments are passed to the returned function than transformer
 * functions, those arguments are passed directly to `fn` as additional
 * parameters. If you expect additional arguments that don't need to be
 * transformed, although you can ignore them, it's best to pass an identity
 * function so that the new function reports the correct arity.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Function
 * @sig (x1 -> x2 -> ... -> z) -> [(a -> x1), (b -> x2), ...] -> (a -> b -> ... -> z)
 * @param {Function} fn The function to wrap.
 * @param {Array} transformers A list of transformer functions
 * @return {Function} The wrapped function.
 * @see R.converge
 * @example
 *
 *      R.useWith(Math.pow, [R.identity, R.identity])(3, 4); //=> 81
 *      R.useWith(Math.pow, [R.identity, R.identity])(3)(4); //=> 81
 *      R.useWith(Math.pow, [R.dec, R.inc])(3, 4); //=> 32
 *      R.useWith(Math.pow, [R.dec, R.inc])(3)(4); //=> 32
 * @symb R.useWith(f, [g, h])(a, b) = f(g(a), h(b))
 */
module.exports = _curry2(function useWith(fn, transformers) {
  return curryN(transformers.length, function() {
    var args = [];
    var idx = 0;
    while (idx < transformers.length) {
      args.push(transformers[idx].call(this, arguments[idx]));
      idx += 1;
    }
    return fn.apply(this, args.concat(Array.prototype.slice.call(arguments, transformers.length)));
  });
});

},{"./curryN":43,"./internal/_curry2":104}],300:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');
var keys = require('./keys');


/**
 * Returns a list of all the enumerable own properties of the supplied object.
 * Note that the order of the output array is not guaranteed across different
 * JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own properties.
 * @example
 *
 *      R.values({a: 1, b: 2, c: 3}); //=> [1, 2, 3]
 */
module.exports = _curry1(function values(obj) {
  var props = keys(obj);
  var len = props.length;
  var vals = [];
  var idx = 0;
  while (idx < len) {
    vals[idx] = obj[props[idx]];
    idx += 1;
  }
  return vals;
});

},{"./internal/_curry1":103,"./keys":173}],301:[function(require,module,exports){
var _curry1 = require('./internal/_curry1');


/**
 * Returns a list of all the properties, including prototype properties, of the
 * supplied object.
 * Note that the order of the output array is not guaranteed to be consistent
 * across different JS platforms.
 *
 * @func
 * @memberOf R
 * @since v0.2.0
 * @category Object
 * @sig {k: v} -> [v]
 * @param {Object} obj The object to extract values from
 * @return {Array} An array of the values of the object's own and prototype properties.
 * @example
 *
 *      var F = function() { this.x = 'X'; };
 *      F.prototype.y = 'Y';
 *      var f = new F();
 *      R.valuesIn(f); //=> ['X', 'Y']
 */
module.exports = _curry1(function valuesIn(obj) {
  var prop;
  var vs = [];
  for (prop in obj) {
    vs[vs.length] = obj[prop];
  }
  return vs;
});

},{"./internal/_curry1":103}],302:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Returns a "view" of the given data structure, determined by the given lens.
 * The lens's focus determines which portion of the data structure is visible.
 *
 * @func
 * @memberOf R
 * @since v0.16.0
 * @category Object
 * @typedefn Lens s a = Functor f => (a -> f a) -> s -> f s
 * @sig Lens s a -> s -> a
 * @param {Lens} lens
 * @param {*} x
 * @return {*}
 * @see R.prop, R.lensIndex, R.lensProp
 * @example
 *
 *      var xLens = R.lensProp('x');
 *
 *      R.view(xLens, {x: 1, y: 2});  //=> 1
 *      R.view(xLens, {x: 4, y: 2});  //=> 4
 */
module.exports = (function() {
  // `Const` is a functor that effectively ignores the function given to `map`.
  var Const = function(x) {
    return {value: x, map: function() { return this; }};
  };

  return _curry2(function view(lens, x) {
    // Using `Const` effectively ignores the setter function of the `lens`,
    // leaving the value returned by the getter function unmodified.
    return lens(Const)(x).value;
  });
}());

},{"./internal/_curry2":104}],303:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Tests the final argument by passing it to the given predicate function. If
 * the predicate is satisfied, the function will return the result of calling
 * the `whenTrueFn` function with the same argument. If the predicate is not
 * satisfied, the argument is returned as is.
 *
 * @func
 * @memberOf R
 * @since v0.18.0
 * @category Logic
 * @sig (a -> Boolean) -> (a -> a) -> a -> a
 * @param {Function} pred       A predicate function
 * @param {Function} whenTrueFn A function to invoke when the `condition`
 *                              evaluates to a truthy value.
 * @param {*}        x          An object to test with the `pred` function and
 *                              pass to `whenTrueFn` if necessary.
 * @return {*} Either `x` or the result of applying `x` to `whenTrueFn`.
 * @see R.ifElse, R.unless
 * @example
 *
 *      // truncate :: String -> String
 *      var truncate = R.when(
 *        R.propSatisfies(R.gt(R.__, 10), 'length'),
 *        R.pipe(R.take(10), R.append('…'), R.join(''))
 *      );
 *      truncate('12345');         //=> '12345'
 *      truncate('0123456789ABC'); //=> '0123456789…'
 */
module.exports = _curry3(function when(pred, whenTrueFn, x) {
  return pred(x) ? whenTrueFn(x) : x;
});

},{"./internal/_curry3":105}],304:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var _has = require('./internal/_has');


/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec. Each of the spec's own properties must be a predicate function.
 * Each predicate is applied to the value of the corresponding property of the
 * test object. `where` returns true if all the predicates return true, false
 * otherwise.
 *
 * `where` is well suited to declaratively expressing constraints for other
 * functions such as `filter` and `find`.
 *
 * @func
 * @memberOf R
 * @since v0.1.1
 * @category Object
 * @sig {String: (* -> Boolean)} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.where({
 *        a: R.equals('foo'),
 *        b: R.complement(R.equals('bar')),
 *        x: R.gt(__, 10),
 *        y: R.lt(__, 20)
 *      });
 *
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 19}); //=> true
 *      pred({a: 'xxx', b: 'xxx', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'bar', x: 11, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 10, y: 19}); //=> false
 *      pred({a: 'foo', b: 'xxx', x: 11, y: 20}); //=> false
 */
module.exports = _curry2(function where(spec, testObj) {
  for (var prop in spec) {
    if (_has(prop, spec) && !spec[prop](testObj[prop])) {
      return false;
    }
  }
  return true;
});

},{"./internal/_curry2":104,"./internal/_has":115}],305:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');
var equals = require('./equals');
var map = require('./map');
var where = require('./where');


/**
 * Takes a spec object and a test object; returns true if the test satisfies
 * the spec, false otherwise. An object satisfies the spec if, for each of the
 * spec's own properties, accessing that property of the object gives the same
 * value (in `R.equals` terms) as accessing that property of the spec.
 *
 * `whereEq` is a specialization of [`where`](#where).
 *
 * @func
 * @memberOf R
 * @since v0.14.0
 * @category Object
 * @sig {String: *} -> {String: *} -> Boolean
 * @param {Object} spec
 * @param {Object} testObj
 * @return {Boolean}
 * @see R.where
 * @example
 *
 *      // pred :: Object -> Boolean
 *      var pred = R.whereEq({a: 1, b: 2});
 *
 *      pred({a: 1});              //=> false
 *      pred({a: 1, b: 2});        //=> true
 *      pred({a: 1, b: 2, c: 3});  //=> true
 *      pred({a: 1, b: 1});        //=> false
 */
module.exports = _curry2(function whereEq(spec, testObj) {
  return where(map(equals, spec), testObj);
});

},{"./equals":62,"./internal/_curry2":104,"./map":186,"./where":304}],306:[function(require,module,exports){
var _contains = require('./internal/_contains');
var _curry2 = require('./internal/_curry2');
var flip = require('./flip');
var reject = require('./reject');


/**
 * Returns a new list without values in the first argument.
 * `R.equals` is used to determine equality.
 *
 * Acts as a transducer if a transformer is given in list position.
 *
 * @func
 * @memberOf R
 * @since v0.19.0
 * @category List
 * @sig [a] -> [a] -> [a]
 * @param {Array} list1 The values to be removed from `list2`.
 * @param {Array} list2 The array to remove values from.
 * @return {Array} The new array without values in `list1`.
 * @see R.transduce
 * @example
 *
 *      R.without([1, 2], [1, 2, 1, 3, 4]); //=> [3, 4]
 */
module.exports = _curry2(function(xs, list) {
  return reject(flip(_contains)(xs), list);
});

},{"./flip":70,"./internal/_contains":100,"./internal/_curry2":104,"./reject":247}],307:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Creates a new list out of the two supplied by creating each possible pair
 * from the lists.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} as The first list.
 * @param {Array} bs The second list.
 * @return {Array} The list made by combining each possible pair from
 *         `as` and `bs` into pairs (`[a, b]`).
 * @example
 *
 *      R.xprod([1, 2], ['a', 'b']); //=> [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
 * @symb R.xprod([a, b], [c, d]) = [[a, c], [a, d], [b, c], [b, d]]
 */
module.exports = _curry2(function xprod(a, b) { // = xprodWith(prepend); (takes about 3 times as long...)
  var idx = 0;
  var ilen = a.length;
  var j;
  var jlen = b.length;
  var result = [];
  while (idx < ilen) {
    j = 0;
    while (j < jlen) {
      result[result.length] = [a[idx], b[j]];
      j += 1;
    }
    idx += 1;
  }
  return result;
});

},{"./internal/_curry2":104}],308:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Creates a new list out of the two supplied by pairing up equally-positioned
 * items from both lists. The returned list is truncated to the length of the
 * shorter of the two input lists.
 * Note: `zip` is equivalent to `zipWith(function(a, b) { return [a, b] })`.
 *
 * @func
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig [a] -> [b] -> [[a,b]]
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by pairing up same-indexed elements of `list1` and `list2`.
 * @example
 *
 *      R.zip([1, 2, 3], ['a', 'b', 'c']); //=> [[1, 'a'], [2, 'b'], [3, 'c']]
 * @symb R.zip([a, b, c], [d, e, f]) = [[a, d], [b, e], [c, f]]
 */
module.exports = _curry2(function zip(a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = [a[idx], b[idx]];
    idx += 1;
  }
  return rv;
});

},{"./internal/_curry2":104}],309:[function(require,module,exports){
var _curry2 = require('./internal/_curry2');


/**
 * Creates a new object out of a list of keys and a list of values.
 * Key/value pairing is truncated to the length of the shorter of the two lists.
 * Note: `zipObj` is equivalent to `pipe(zipWith(pair), fromPairs)`.
 *
 * @func
 * @memberOf R
 * @since v0.3.0
 * @category List
 * @sig [String] -> [*] -> {String: *}
 * @param {Array} keys The array that will be properties on the output object.
 * @param {Array} values The list of values on the output object.
 * @return {Object} The object made by pairing up same-indexed elements of `keys` and `values`.
 * @example
 *
 *      R.zipObj(['a', 'b', 'c'], [1, 2, 3]); //=> {a: 1, b: 2, c: 3}
 */
module.exports = _curry2(function zipObj(keys, values) {
  var idx = 0;
  var len = Math.min(keys.length, values.length);
  var out = {};
  while (idx < len) {
    out[keys[idx]] = values[idx];
    idx += 1;
  }
  return out;
});

},{"./internal/_curry2":104}],310:[function(require,module,exports){
var _curry3 = require('./internal/_curry3');


/**
 * Creates a new list out of the two supplied by applying the function to each
 * equally-positioned pair in the lists. The returned list is truncated to the
 * length of the shorter of the two input lists.
 *
 * @function
 * @memberOf R
 * @since v0.1.0
 * @category List
 * @sig (a,b -> c) -> [a] -> [b] -> [c]
 * @param {Function} fn The function used to combine the two elements into one value.
 * @param {Array} list1 The first array to consider.
 * @param {Array} list2 The second array to consider.
 * @return {Array} The list made by combining same-indexed elements of `list1` and `list2`
 *         using `fn`.
 * @example
 *
 *      var f = (x, y) => {
 *        // ...
 *      };
 *      R.zipWith(f, [1, 2, 3], ['a', 'b', 'c']);
 *      //=> [f(1, 'a'), f(2, 'b'), f(3, 'c')]
 * @symb R.zipWith(fn, [a, b, c], [d, e, f]) = [fn(a, d), fn(b, e), fn(c, f)]
 */
module.exports = _curry3(function zipWith(fn, a, b) {
  var rv = [];
  var idx = 0;
  var len = Math.min(a.length, b.length);
  while (idx < len) {
    rv[idx] = fn(a[idx], b[idx]);
    idx += 1;
  }
  return rv;
});

},{"./internal/_curry3":105}],311:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('../util/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _getPaths = (0, _config2.default)(),
    dataPath = _getPaths.dataPath,
    imagePath = _getPaths.imagePath;

var startDate = new Date(2014, 0, 1, 1);
var endDate = new Date(2015, 5, 30, 1);
console.log('start:', startDate, 'end:', endDate);

var signals = [
// {
//     name: 'detailDomain',
//     // update: '[datetime(2014, 0, 1), datetime(2015, 0, 1)]',
//     // update: `[${startDate}, ${endDate}]`,
//     value: `[${startDate}, ${endDate}]`,
// },
{
    name: 'start_date',
    value: '' + startDate.getTime()
    // update: 'toDate(detailDomain[0])',
}, {
    name: 'end_date',
    value: '' + endDate.getTime()
    // update: 'toDate(detailDomain[1])',
}];

var data = [{
    name: 'reports',
    url: dataPath + 'combined.csv',
    format: {
        type: 'dsv',
        delimiter: ';',
        parse: {
            dumps: 'number',
            fillperc: 'number',
            reports: 'number'
            // date: 'date'
        }
    },
    transform: [{
        type: 'formula',
        as: 'date2',
        expr: 'toDate(datum.date)'
    }, {
        type: 'filter',
        // expr: 'datum.date2 > datetime(2014, 0, 1) && datum.date2 < datetime(2015, 0, 4)',
        expr: 'datum.date2 >= start_date && datum.date2 <= end_date'
    }, {
        type: 'aggregate',
        fields: ['reports', 'dumps', 'fillperc'],
        ops: ['sum', 'sum', 'average'],
        as: ['reports', 'dumps', 'fillperc'],
        groupby: ['name', 'bu_code']
    }]
}];

var marks = [{
    name: 'marks',
    type: 'symbol',
    from: { data: 'reports' },
    encode: {
        update: {
            x: { scale: 'x', field: 'fillperc' },
            y: { scale: 'y', field: 'dumps' },
            size: { scale: 'size', field: 'reports' },
            shape: { value: 'circle' },
            strokeWidth: { value: 2 },
            // opacity: { value: 0.5 },
            stroke: { value: 'red' },
            fill: { value: 'red' }
            // fill: { value: 'transparent' },
        }
    }
}];

var projections = [];

var scales = [{
    name: 'x',
    type: 'linear',
    // round: true,
    // nice: true,
    // zero: true,
    // domain: { data: 'reports', field: 'reports' },
    domain: [0, 100],
    range: 'width'
}, {
    name: 'y',
    type: 'linear',
    // round: true,
    // nice: true,
    // zero: true,
    domain: { data: 'reports', field: 'dumps' },
    range: 'height'
}, {
    name: 'size',
    type: 'linear',
    // round: true,
    // nice: false,
    // zero: true,
    domain: { data: 'reports', field: 'reports' },
    range: [1, 1000]
}];

var axes = [{
    scale: 'x',
    grid: false,
    domain: true,
    orient: 'bottom',
    tickCount: 5,
    title: 'reports'
}, {
    scale: 'y',
    grid: false,
    domain: true,
    orient: 'left',
    titlePadding: 5,
    title: 'fillperc'
}];

var config = {
    axis: {
        domainColor: 'white',
        gridColor: 'white',
        labelColor: 'white',
        tickColor: 'white'
    }
};

exports.default = {
    $schema: 'https://vega.github.io/schema/vega/v3.0.json',
    width: 900,
    height: 600,
    padding: { left: 40, top: 20, right: 20, bottom: 20 },
    autosize: 'none',
    config: config,
    axes: axes,
    scales: scales,
    signals: signals,
    data: data,
    marks: marks,
    projections: projections
};

},{"../util/config":313}],312:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _config = require('../util/config');

var _config2 = _interopRequireDefault(_config);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _getPaths = (0, _config2.default)(),
    dataPath = _getPaths.dataPath,
    imagePath = _getPaths.imagePath;

var data = [{
    name: 'reports',
    url: dataPath + 'combined.csv',
    format: {
        type: 'dsv',
        delimiter: ';',
        parse: {
            date: 'date'
        }
    },
    transform: [
    //     type: 'formula',
    //     as: 'month',
    //     expr: 'month(datum.date)',
    // },
    // {
    //     type: 'extent',
    //     field: 'year',
    //     signal: 'extent',
    // },
    {
        type: 'aggregate',
        groupby: ['date']
    }, {
        type: 'formula',
        as: 'year_month',
        expr: 'year(datum.date) + "_" + month(datum.date)'
    }, {
        type: 'collect',
        sort: {
            field: 'date',
            order: 'ascending'
        }
    }]
}];

var signals = [{
    name: 'brush',
    value: 0,
    on: [{
        events: 'mousedown',
        update: '[x(), x()]'
    }, {
        events: '[mousedown, window:mouseup] > window:mousemove!',
        update: '[brush[0], clamp(x(), 0, width)]'
    }, {
        events: { signal: 'delta' },
        update: 'clampRange([anchor[0] + delta, anchor[1] + delta], 0, width)'
    }]
}, {
    name: 'anchor',
    value: null,
    on: [{ events: '@brush:mousedown', update: 'slice(brush)' }]
}, {
    name: 'xdown',
    value: 0,
    on: [{ events: '@brush:mousedown', update: 'x()' }]
}, {
    name: 'delta',
    value: 0,
    on: [{
        events: '[@brush:mousedown, window:mouseup] > window:mousemove!',
        update: 'x() - xdown'
    }]
}, {
    name: 'detailDomain',
    on: [{
        events: { signal: 'brush' },
        // update: "span(brush) ? invert('xOverview', brush) : [datetime(2014, 0, 1), datetime(2014, 0, 15)]",
        update: "span(brush) ? invert('xOverview', brush) : null"
        // update: "invert('xOverview', brush)",
        // update: 'brush',
    }]
}];

var scales = [{
    name: 'xOverview',
    type: 'time',
    range: [0, { signal: 'width' }],
    domain: { data: 'reports', field: 'date' }
}, {
    name: 'yOverview',
    domain: { data: 'reports', field: 'count' },
    type: 'linear',
    range: [{ signal: 'height' }, 0]
    // nice: true,
    // zero: true,
}];

var axes = [{
    orient: 'bottom',
    scale: 'xOverview'
}, {
    orient: 'left',
    scale: 'yOverview'
}];

var marks = [{
    type: 'rect',
    from: { data: 'reports' },
    interactive: false,
    encode: {
        update: {
            x: { scale: 'xOverview', field: 'date' },
            // width: { scale: 'xOverview' },
            width: { value: 2 },
            y: { scale: 'yOverview', field: 'count' },
            // y: { scale: 'yOverview', value: 1 },
            y2: { scale: 'yOverview', value: 0 },
            fill: { value: 'steelblue' }
        }
    }
}, {
    type: 'rect',
    name: 'brush',
    encode: {
        enter: {
            y: { value: 0 },
            height: { value: 70 },
            fill: { value: '#333' },
            fillOpacity: { value: 0.2 }
        },
        update: {
            x: { signal: 'brush[0]' },
            x2: { signal: 'brush[1]' }
        }
    }
}, {
    type: 'rect',
    interactive: false,
    encode: {
        enter: {
            y: { value: 0 },
            height: { value: 70 },
            width: { value: 1 },
            fill: { value: 'firebrick' }
        },
        update: {
            x: { signal: 'brush[0]' }
        }
    }
}, {
    type: 'rect',
    interactive: false,
    encode: {
        enter: {
            y: { value: 0 },
            height: { value: 70 },
            width: { value: 1 },
            fill: { value: 'yellow' }
        },
        update: {
            x: { signal: 'brush[1]' }
        }
    }
}];

var config = {
    axis: {
        gridColor: 'white',
        labelColor: 'white',
        tickColor: 'white'
    }
};

exports.default = {
    $schema: 'https://vega.github.io/schema/vega/v3.0.json',
    width: 720,
    height: 70,
    padding: 30,
    autosize: 'none',
    config: config,
    scales: scales,
    signals: signals,
    axes: axes,
    data: data,
    marks: marks,
    projections: []
};

},{"../util/config":313}],313:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function () {
    var dataPath = window.location.protocol + '//' + window.location.host + '/data/';
    var imagePath = window.location.protocol + '//' + window.location.host + '/img/';

    if (window.location.hostname.indexOf('github') !== -1) {
        dataPath = window.location.protocol + '//' + window.location.host + '/vega-specs/data/';
        imagePath = window.location.protocol + '//' + window.location.host + '/vega-specs/img/';
    } else if (window.location.hostname.indexOf('abumarkub') !== -1) {
        dataPath = window.location.protocol + '//' + window.location.host + '/fffact/data/';
        imagePath = window.location.protocol + '//' + window.location.host + '/fffact/img/';
    }

    return {
        dataPath: dataPath,
        imagePath: imagePath
    };
};

},{}],314:[function(require,module,exports){
'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _ramda = require('ramda');

var _ramda2 = _interopRequireDefault(_ramda);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var vega = window.vega; // import L from 'leaflet';
// import vega from 'vega';
// import LeafletVega from './leaflet-vega';

var vegaTooltip = window.vegaTooltip;
var L = window.L;

var setup = function setup(_ref) {
    var spec = _ref.spec,
        view = _ref.view,
        addLeaflet = _ref.addLeaflet,
        addTooltip = _ref.addTooltip,
        tooltipOptions = _ref.tooltipOptions,
        callback = _ref.callback;

    if (_ramda2.default.isNil(view)) {
        console.error('no view');
        callback(null);
        return;
    }

    if (addTooltip && !addLeaflet) {
        vegaTooltip.vega(view, tooltipOptions);
    }

    _ramda2.default.forEach(function (signal) {
        view.addSignalListener(signal.name, function (name, data) {
            console.log(name, data);
        });
    }, spec.signals || []);

    setTimeout(function () {
        _ramda2.default.forEach(function (data) {
            console.log(data.name, view.data(data.name));
        }, spec.data || []);
    }, 300);

    callback(view);
};

var createVegaView = function createVegaView(_ref2) {
    var spec = _ref2.spec,
        id = _ref2.id,
        renderer = _ref2.renderer,
        addLeaflet = _ref2.addLeaflet,
        addTooltip = _ref2.addTooltip,
        tooltipOptions = _ref2.tooltipOptions,
        callback = _ref2.callback;

    var view = new vega.View(vega.parse(spec)).renderer(renderer).initialize('#' + id).hover().run();

    setup({
        spec: spec,
        view: view,
        addLeaflet: addLeaflet,
        addTooltip: addTooltip,
        tooltipOptions: tooltipOptions,
        callback: callback
    });
};

exports.default = function (_ref3) {
    var spec = _ref3.spec,
        id = _ref3.id,
        _ref3$renderer = _ref3.renderer,
        renderer = _ref3$renderer === undefined ? 'canvas' : _ref3$renderer,
        _ref3$addLeaflet = _ref3.addLeaflet,
        addLeaflet = _ref3$addLeaflet === undefined ? false : _ref3$addLeaflet,
        _ref3$addTooltip = _ref3.addTooltip,
        addTooltip = _ref3$addTooltip === undefined ? false : _ref3$addTooltip,
        _ref3$tooltipOptions = _ref3.tooltipOptions,
        tooltipOptions = _ref3$tooltipOptions === undefined ? {} : _ref3$tooltipOptions,
        _ref3$callback = _ref3.callback,
        callback = _ref3$callback === undefined ? function () {} : _ref3$callback;

    if (addLeaflet) {
        var signals = spec.signals || [];
        var zoom = _ramda2.default.find(_ramda2.default.propEq('name', 'zoom'))(signals);
        var latitude = _ramda2.default.find(_ramda2.default.propEq('name', 'latitude'))(signals);
        var longitude = _ramda2.default.find(_ramda2.default.propEq('name', 'longitude'))(signals);

        if (_ramda2.default.isNil(zoom) || _ramda2.default.isNil(latitude) || _ramda2.default.isNil(longitude)) {
            createVegaView({ spec: spec, id: id, renderer: renderer, addLeaflet: addLeaflet, addTooltip: addTooltip, tooltipOptions: tooltipOptions, callback: callback });
            return;
        }

        var map = L.map(id, {
            zoomAnimation: false
        }).setView([latitude.value, longitude.value], zoom.value);

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
            var view = layer._view;
            setup({
                spec: spec,
                view: view,
                addLeaflet: addLeaflet,
                addTooltip: addTooltip,
                tooltipOptions: tooltipOptions,
                callback: callback
            });
        }, 0);
    } else {
        createVegaView({ spec: spec, id: id, renderer: renderer, addLeaflet: addLeaflet, addTooltip: addTooltip, tooltipOptions: tooltipOptions, callback: callback });
    }
};

},{"ramda":2}],315:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports.default = function (spec) {
    // const json = encodeURIComponent(JSON.stringify(TestSpec4));
    // window.open(`data:application/json, ${json}`, '_blank');
    var json = JSON.stringify(spec, null, 4);
    var w = window.open();
    w.document.open();
    w.document.write("<html><body><pre>" + json + "</pre></body></html>");
    w.document.close();
};

},{}]},{},[1])
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm5vZGVfbW9kdWxlcy9icm93c2VyLXBhY2svX3ByZWx1ZGUuanMiLCI4L2FwcC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9pbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvRi5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvVC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvX18uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2FkZC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvYWRkSW5kZXguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2FkanVzdC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvYWxsLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9hbGxQYXNzLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9hbHdheXMuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2FuZC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvYW55LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9hbnlQYXNzLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9hcC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvYXBlcnR1cmUuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2FwcGVuZC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvYXBwbHkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2FwcGx5U3BlYy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvYXNjZW5kLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9hc3NvYy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvYXNzb2NQYXRoLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9iaW5hcnkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2JpbmQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2JvdGguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2NhbGwuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2NoYWluLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9jbGFtcC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvY2xvbmUuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2NvbXBhcmF0b3IuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2NvbXBsZW1lbnQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2NvbXBvc2UuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2NvbXBvc2VLLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9jb21wb3NlUC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvY29uY2F0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9jb25kLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9jb25zdHJ1Y3QuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2NvbnN0cnVjdE4uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2NvbnRhaW5zLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9jb252ZXJnZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvY291bnRCeS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvY3VycnkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2N1cnJ5Ti5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZGVjLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9kZWZhdWx0VG8uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2Rlc2NlbmQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2RpZmZlcmVuY2UuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2RpZmZlcmVuY2VXaXRoLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9kaXNzb2MuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2Rpc3NvY1BhdGguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2RpdmlkZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZHJvcC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZHJvcExhc3QuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2Ryb3BMYXN0V2hpbGUuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2Ryb3BSZXBlYXRzLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9kcm9wUmVwZWF0c1dpdGguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2Ryb3BXaGlsZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZWl0aGVyLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9lbXB0eS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZXFCeS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZXFQcm9wcy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZXF1YWxzLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9ldm9sdmUuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ZpbHRlci5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZmluZC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZmluZEluZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9maW5kTGFzdC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZmluZExhc3RJbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZmxhdHRlbi5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZmxpcC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZm9yRWFjaC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZm9yRWFjaE9iakluZGV4ZWQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2Zyb21QYWlycy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZ3JvdXBCeS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZ3JvdXBXaXRoLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9ndC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvZ3RlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9oYXMuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2hhc0luLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9oZWFkLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pZGVudGljYWwuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2lkZW50aXR5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pZkVsc2UuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2luYy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW5kZXhCeS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW5kZXhPZi5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW5pdC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW5zZXJ0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnNlcnRBbGwuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19TZXQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19hcGVydHVyZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2FyaXR5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fYXJyYXlGcm9tSXRlcmF0b3IuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19hc3NpZ24uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19jaGVja0Zvck1ldGhvZC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2Nsb25lLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fY2xvbmVSZWdFeHAuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19jb21wbGVtZW50LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fY29uY2F0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fY29udGFpbnMuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19jb250YWluc1dpdGguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19jcmVhdGVQYXJ0aWFsQXBwbGljYXRvci5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2N1cnJ5MS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2N1cnJ5Mi5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2N1cnJ5My5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2N1cnJ5Ti5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2Ryb3BMYXN0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fZHJvcExhc3RXaGlsZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2VxdWFscy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2ZpbHRlci5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2ZsYXRDYXQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19mb3JjZVJlZHVjZWQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19mdW5jdGlvbk5hbWUuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19oYXMuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19pZGVudGl0eS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2luZGV4T2YuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19pc0FyZ3VtZW50cy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2lzQXJyYXkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19pc0Z1bmN0aW9uLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9faXNJbnRlZ2VyLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9faXNOdW1iZXIuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19pc09iamVjdC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2lzUGxhY2Vob2xkZXIuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19pc1JlZ0V4cC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX2lzU3RyaW5nLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9faXNUcmFuc2Zvcm1lci5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX21ha2VGbGF0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fbWFwLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fb2JqZWN0QXNzaWduLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fb2YuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19waXBlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fcGlwZVAuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19xdW90ZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX3JlZHVjZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX3JlZHVjZWQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL19zdGVwQ2F0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9fdG9JU09TdHJpbmcuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL190b1N0cmluZy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX3hhbGwuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL194YW55LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9feGFwZXJ0dXJlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9feGNoYWluLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9feGRyb3AuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL194ZHJvcExhc3QuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL194ZHJvcExhc3RXaGlsZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX3hkcm9wUmVwZWF0c1dpdGguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVybmFsL194ZHJvcFdoaWxlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9feGZCYXNlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9feGZpbHRlci5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX3hmaW5kLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9feGZpbmRJbmRleC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX3hmaW5kTGFzdC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX3hmaW5kTGFzdEluZGV4LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9feG1hcC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX3hyZWR1Y2VCeS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX3h0YWtlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcm5hbC9feHRha2VXaGlsZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW50ZXJuYWwvX3h3cmFwLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRlcnNlY3Rpb24uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVyc2VjdGlvbldpdGguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludGVyc3BlcnNlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnRvLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pbnZlcnQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2ludmVydE9iai5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaW52b2tlci5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvaXMuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2lzQXJyYXlMaWtlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pc0VtcHR5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9pc05pbC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvam9pbi5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvanV4dC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMva2V5cy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMva2V5c0luLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9sYXN0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9sYXN0SW5kZXhPZi5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvbGVuZ3RoLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9sZW5zLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9sZW5zSW5kZXguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2xlbnNQYXRoLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9sZW5zUHJvcC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvbGlmdC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvbGlmdE4uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL2x0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9sdGUuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL21hcC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvbWFwQWNjdW0uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL21hcEFjY3VtUmlnaHQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL21hcE9iakluZGV4ZWQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL21hdGNoLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9tYXRoTW9kLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9tYXguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL21heEJ5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9tZWFuLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9tZWRpYW4uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL21lbW9pemUuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL21lcmdlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9tZXJnZUFsbC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvbWVyZ2VXaXRoLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9tZXJnZVdpdGhLZXkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL21pbi5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvbWluQnkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL21vZHVsby5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvbXVsdGlwbHkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL25BcnkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL25lZ2F0ZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvbm9uZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvbm90LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9udGguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL250aEFyZy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvb2JqT2YuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL29mLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9vbWl0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9vbmNlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9vci5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvb3Zlci5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcGFpci5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcGFydGlhbC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcGFydGlhbFJpZ2h0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9wYXJ0aXRpb24uanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3BhdGguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3BhdGhFcS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcGF0aE9yLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9wYXRoU2F0aXNmaWVzLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9waWNrLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9waWNrQWxsLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9waWNrQnkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3BpcGUuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3BpcGVLLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9waXBlUC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcGx1Y2suanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3ByZXBlbmQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3Byb2R1Y3QuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3Byb2plY3QuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3Byb3AuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3Byb3BFcS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcHJvcElzLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9wcm9wT3IuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3Byb3BTYXRpc2ZpZXMuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3Byb3BzLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9yYW5nZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcmVkdWNlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9yZWR1Y2VCeS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcmVkdWNlUmlnaHQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3JlZHVjZVdoaWxlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9yZWR1Y2VkLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9yZWplY3QuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3JlbW92ZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvcmVwZWF0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9yZXBsYWNlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9yZXZlcnNlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9zY2FuLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9zZXF1ZW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvc2V0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9zbGljZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvc29ydC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvc29ydEJ5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy9zb3J0V2l0aC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvc3BsaXQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3NwbGl0QXQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3NwbGl0RXZlcnkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3NwbGl0V2hlbi5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvc3VidHJhY3QuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3N1bS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvc3ltbWV0cmljRGlmZmVyZW5jZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvc3ltbWV0cmljRGlmZmVyZW5jZVdpdGguanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3RhaWwuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3Rha2UuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3Rha2VMYXN0LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy90YWtlTGFzdFdoaWxlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy90YWtlV2hpbGUuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3RhcC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvdGVzdC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvdGltZXMuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3RvTG93ZXIuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3RvUGFpcnMuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3RvUGFpcnNJbi5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvdG9TdHJpbmcuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3RvVXBwZXIuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3RyYW5zZHVjZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvdHJhbnNwb3NlLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy90cmF2ZXJzZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvdHJpbS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvdHJ5Q2F0Y2guanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3R5cGUuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3VuYXBwbHkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3VuYXJ5LmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy91bmN1cnJ5Ti5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvdW5mb2xkLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy91bmlvbi5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvdW5pb25XaXRoLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy91bmlxLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy91bmlxQnkuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3VuaXFXaXRoLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy91bmxlc3MuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3VubmVzdC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvdW50aWwuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3VwZGF0ZS5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvdXNlV2l0aC5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvdmFsdWVzLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy92YWx1ZXNJbi5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvdmlldy5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvd2hlbi5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvd2hlcmUuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3doZXJlRXEuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3dpdGhvdXQuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3hwcm9kLmpzIiwibm9kZV9tb2R1bGVzL3JhbWRhL3NyYy96aXAuanMiLCJub2RlX21vZHVsZXMvcmFtZGEvc3JjL3ppcE9iai5qcyIsIm5vZGVfbW9kdWxlcy9yYW1kYS9zcmMvemlwV2l0aC5qcyIsInNyYy9zcGVjcy9zcGVjOGEuanMiLCJzcmMvc3BlY3Mvc3BlYzhiLmpzIiwic3JjL3V0aWwvY29uZmlnLmpzIiwic3JjL3V0aWwvY3JlYXRlLXZlZ2Etdmlldy5qcyIsInNyYy91dGlsL2dlbmVyYXRlLXNwZWMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7OztBQ0FBOzs7O0FBQ0E7Ozs7QUFDQTs7OztBQUNBOzs7O0FBQ0E7Ozs7OztBQUVBOztBQUVBLE9BQU8sZ0JBQVAsQ0FBd0Isa0JBQXhCLEVBQTRDLFlBQU07QUFDOUMsUUFBSSxRQUFRLElBQVo7QUFDQSxRQUFJLFFBQVEsSUFBWjs7QUFFQSxRQUFNLFVBQVUsU0FBVixPQUFVLEdBQU07QUFDbEIsY0FBTSxpQkFBTixDQUF3QixjQUF4QixFQUF3QyxVQUFDLElBQUQsRUFBTyxLQUFQLEVBQWlCO0FBQ3JELGtCQUFNLE1BQU4sQ0FBYSxjQUFiLEVBQTZCLEtBQTdCLEVBQW9DLEdBQXBDO0FBQ0gsU0FGRDtBQUdILEtBSkQ7O0FBTUEsa0NBQVc7QUFDUCw4QkFETztBQUVQLFlBQUksTUFGRztBQUdQLGtCQUFVLEtBSEg7QUFJUCxvQkFBWSxLQUpMO0FBS1Asb0JBQVksSUFMTDtBQU1QLHdCQUFnQjtBQUNaLDJCQUFlLEtBREg7QUFFWixvQkFBUSxDQUNKO0FBQ0ksNEJBQVksUUFEaEI7QUFFSSx1QkFBTyxNQUZYO0FBR0ksdUJBQU87QUFIWCxhQURJLEVBTUo7QUFDSSw0QkFBWSxRQURoQjtBQUVJLHVCQUFPLFNBRlg7QUFHSSx1QkFBTztBQUhYLGFBTkksRUFXSjtBQUNJLDRCQUFZLFFBRGhCO0FBRUksdUJBQU8sT0FGWDtBQUdJLHVCQUFPO0FBSFgsYUFYSSxFQWdCSjtBQUNJLDRCQUFZLFFBRGhCO0FBRUksdUJBQU8sVUFGWDtBQUdJLHVCQUFPO0FBSFgsYUFoQkk7QUFGSSxTQU5UO0FBK0JQLGtCQUFVLGtCQUFDLElBQUQsRUFBVTtBQUNoQixvQkFBUSxJQUFSO0FBQ0EsZ0JBQUksVUFBVSxJQUFWLElBQWtCLFVBQVUsSUFBaEMsRUFBc0M7QUFDbEM7QUFDSDtBQUNKO0FBcENNLEtBQVg7O0FBdUNBLGtDQUFXO0FBQ1AsOEJBRE87QUFFUCxZQUFJLE1BRkc7QUFHUCxrQkFBVSxRQUhIO0FBSVAsb0JBQVksS0FKTDtBQUtQLG9CQUFZLEtBTEw7QUFNUCx3QkFBZ0IsRUFOVDtBQU9QLGtCQUFVLGtCQUFDLElBQUQsRUFBVTtBQUNoQixvQkFBUSxJQUFSO0FBQ0EsZ0JBQUksVUFBVSxJQUFWLElBQWtCLFVBQVUsSUFBaEMsRUFBc0M7QUFDbEM7QUFDSDtBQUNKO0FBWk0sS0FBWDs7QUFnQkEsYUFBUyxjQUFULENBQXdCLGdCQUF4QixFQUNDLGdCQURELENBQ2tCLE9BRGxCLEVBQzJCO0FBQUEsZUFBTSw2Q0FBTjtBQUFBLEtBRDNCOztBQUdBLGFBQVMsY0FBVCxDQUF3QixnQkFBeEIsRUFDQyxnQkFERCxDQUNrQixPQURsQixFQUMyQjtBQUFBLGVBQU0sNkNBQU47QUFBQSxLQUQzQjtBQUVILENBdEVEOzs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0REE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzS0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNSQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ05BO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1pBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNYQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNQQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ0xBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7O0FDREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7O0FDSEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBOztBQ0hBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNMQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTs7QUNIQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNWQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTs7QUNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDTEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDYkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaERBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDUkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ1JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakRBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6RUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzNEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDekJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM1QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN2Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDakNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3hCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2pDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ25DQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hEQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDM0RBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNyREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMzQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMxQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2hDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ2xDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzFCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM3QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDMUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzlCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNqQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDaENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3ZDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3pCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDeENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN6Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNuQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwREE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDN0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3BDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDbkNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDL0JBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3RDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQ3JDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDdEJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN4Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUMvQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUN0QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzdCQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5QkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQzVDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQy9CQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNwQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNsQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUM5Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDcENBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDNUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDckNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUNoQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FDOUJBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7O0FDcENBOzs7Ozs7Z0JBS0ksdUI7SUFGQSxRLGFBQUEsUTtJQUNBLFMsYUFBQSxTOztBQUlKLElBQU0sWUFBWSxJQUFJLElBQUosQ0FBUyxJQUFULEVBQWUsQ0FBZixFQUFrQixDQUFsQixFQUFxQixDQUFyQixDQUFsQjtBQUNBLElBQU0sVUFBVSxJQUFJLElBQUosQ0FBUyxJQUFULEVBQWUsQ0FBZixFQUFrQixFQUFsQixFQUFzQixDQUF0QixDQUFoQjtBQUNBLFFBQVEsR0FBUixDQUFZLFFBQVosRUFBc0IsU0FBdEIsRUFBaUMsTUFBakMsRUFBeUMsT0FBekM7O0FBRUEsSUFBTSxVQUFVO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSSxVQUFNLFlBRFY7QUFFSSxnQkFBVSxVQUFVLE9BQVY7QUFDVjtBQUhKLENBUFksRUFZWjtBQUNJLFVBQU0sVUFEVjtBQUVJLGdCQUFVLFFBQVEsT0FBUjtBQUNWO0FBSEosQ0FaWSxDQUFoQjs7QUFtQkEsSUFBTSxPQUFPLENBQ1Q7QUFDSSxVQUFNLFNBRFY7QUFFSSxTQUFRLFFBQVIsaUJBRko7QUFHSSxZQUFRO0FBQ0osY0FBTSxLQURGO0FBRUosbUJBQVcsR0FGUDtBQUdKLGVBQU87QUFDSCxtQkFBTyxRQURKO0FBRUgsc0JBQVUsUUFGUDtBQUdILHFCQUFTO0FBQ1Q7QUFKRztBQUhILEtBSFo7QUFhSSxlQUFXLENBQ1A7QUFDSSxjQUFNLFNBRFY7QUFFSSxZQUFJLE9BRlI7QUFHSSxjQUFNO0FBSFYsS0FETyxFQU1QO0FBQ0ksY0FBTSxRQURWO0FBRUk7QUFDQSxjQUFNO0FBSFYsS0FOTyxFQVdQO0FBQ0ksY0FBTSxXQURWO0FBRUksZ0JBQVEsQ0FBQyxTQUFELEVBQVksT0FBWixFQUFxQixVQUFyQixDQUZaO0FBR0ksYUFBSyxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsU0FBZixDQUhUO0FBSUksWUFBSSxDQUFDLFNBQUQsRUFBWSxPQUFaLEVBQXFCLFVBQXJCLENBSlI7QUFLSSxpQkFBUyxDQUFDLE1BQUQsRUFBUyxTQUFUO0FBTGIsS0FYTztBQWJmLENBRFMsQ0FBYjs7QUFvQ0EsSUFBTSxRQUFRLENBQ1Y7QUFDSSxVQUFNLE9BRFY7QUFFSSxVQUFNLFFBRlY7QUFHSSxVQUFNLEVBQUUsTUFBTSxTQUFSLEVBSFY7QUFJSSxZQUFRO0FBQ0osZ0JBQVE7QUFDSixlQUFHLEVBQUUsT0FBTyxHQUFULEVBQWMsT0FBTyxVQUFyQixFQURDO0FBRUosZUFBRyxFQUFFLE9BQU8sR0FBVCxFQUFjLE9BQU8sT0FBckIsRUFGQztBQUdKLGtCQUFNLEVBQUUsT0FBTyxNQUFULEVBQWlCLE9BQU8sU0FBeEIsRUFIRjtBQUlKLG1CQUFPLEVBQUUsT0FBTyxRQUFULEVBSkg7QUFLSix5QkFBYSxFQUFFLE9BQU8sQ0FBVCxFQUxUO0FBTUo7QUFDQSxvQkFBUSxFQUFFLE9BQU8sS0FBVCxFQVBKO0FBUUosa0JBQU0sRUFBRSxPQUFPLEtBQVQ7QUFDTjtBQVRJO0FBREo7QUFKWixDQURVLENBQWQ7O0FBc0JBLElBQU0sY0FBYyxFQUFwQjs7QUFHQSxJQUFNLFNBQVMsQ0FDWDtBQUNJLFVBQU0sR0FEVjtBQUVJLFVBQU0sUUFGVjtBQUdJO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBUSxDQUFDLENBQUQsRUFBSSxHQUFKLENBUFo7QUFRSSxXQUFPO0FBUlgsQ0FEVyxFQVdYO0FBQ0ksVUFBTSxHQURWO0FBRUksVUFBTSxRQUZWO0FBR0k7QUFDQTtBQUNBO0FBQ0EsWUFBUSxFQUFFLE1BQU0sU0FBUixFQUFtQixPQUFPLE9BQTFCLEVBTlo7QUFPSSxXQUFPO0FBUFgsQ0FYVyxFQW9CWDtBQUNJLFVBQU0sTUFEVjtBQUVJLFVBQU0sUUFGVjtBQUdJO0FBQ0E7QUFDQTtBQUNBLFlBQVEsRUFBRSxNQUFNLFNBQVIsRUFBbUIsT0FBTyxTQUExQixFQU5aO0FBT0ksV0FBTyxDQUFDLENBQUQsRUFBSSxJQUFKO0FBUFgsQ0FwQlcsQ0FBZjs7QUFnQ0EsSUFBTSxPQUFPLENBQ1Q7QUFDSSxXQUFPLEdBRFg7QUFFSSxVQUFNLEtBRlY7QUFHSSxZQUFRLElBSFo7QUFJSSxZQUFRLFFBSlo7QUFLSSxlQUFXLENBTGY7QUFNSSxXQUFPO0FBTlgsQ0FEUyxFQVNUO0FBQ0ksV0FBTyxHQURYO0FBRUksVUFBTSxLQUZWO0FBR0ksWUFBUSxJQUhaO0FBSUksWUFBUSxNQUpaO0FBS0ksa0JBQWMsQ0FMbEI7QUFNSSxXQUFPO0FBTlgsQ0FUUyxDQUFiOztBQW1CQSxJQUFNLFNBQVM7QUFDWCxVQUFNO0FBQ0YscUJBQWEsT0FEWDtBQUVGLG1CQUFXLE9BRlQ7QUFHRixvQkFBWSxPQUhWO0FBSUYsbUJBQVc7QUFKVDtBQURLLENBQWY7O2tCQVNlO0FBQ1gsYUFBUyw4Q0FERTtBQUVYLFdBQU8sR0FGSTtBQUdYLFlBQVEsR0FIRztBQUlYLGFBQVMsRUFBRSxNQUFNLEVBQVIsRUFBWSxLQUFLLEVBQWpCLEVBQXFCLE9BQU8sRUFBNUIsRUFBZ0MsUUFBUSxFQUF4QyxFQUpFO0FBS1gsY0FBVSxNQUxDO0FBTVgsa0JBTlc7QUFPWCxjQVBXO0FBUVgsa0JBUlc7QUFTWCxvQkFUVztBQVVYLGNBVlc7QUFXWCxnQkFYVztBQVlYO0FBWlcsQzs7Ozs7Ozs7O0FDekpmOzs7Ozs7Z0JBS0ksdUI7SUFGQSxRLGFBQUEsUTtJQUNBLFMsYUFBQSxTOztBQUlKLElBQU0sT0FBTyxDQUNUO0FBQ0ksVUFBTSxTQURWO0FBRUksU0FBUSxRQUFSLGlCQUZKO0FBR0ksWUFBUTtBQUNKLGNBQU0sS0FERjtBQUVKLG1CQUFXLEdBRlA7QUFHSixlQUFPO0FBQ0gsa0JBQU07QUFESDtBQUhILEtBSFo7QUFVSSxlQUFXO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSSxjQUFNLFdBRFY7QUFFSSxpQkFBUyxDQUFDLE1BQUQ7QUFGYixLQVZPLEVBY1A7QUFDSSxjQUFNLFNBRFY7QUFFSSxZQUFJLFlBRlI7QUFHSSxjQUFNO0FBSFYsS0FkTyxFQW1CUDtBQUNJLGNBQU0sU0FEVjtBQUVJLGNBQU07QUFDRixtQkFBTyxNQURMO0FBRUYsbUJBQU87QUFGTDtBQUZWLEtBbkJPO0FBVmYsQ0FEUyxDQUFiOztBQTBDQSxJQUFNLFVBQVUsQ0FDWjtBQUNJLFVBQU0sT0FEVjtBQUVJLFdBQU8sQ0FGWDtBQUdJLFFBQUksQ0FDQTtBQUNJLGdCQUFRLFdBRFo7QUFFSSxnQkFBUTtBQUZaLEtBREEsRUFLQTtBQUNJLGdCQUFRLGlEQURaO0FBRUksZ0JBQVE7QUFGWixLQUxBLEVBU0E7QUFDSSxnQkFBUSxFQUFFLFFBQVEsT0FBVixFQURaO0FBRUksZ0JBQVE7QUFGWixLQVRBO0FBSFIsQ0FEWSxFQW1CWjtBQUNJLFVBQU0sUUFEVjtBQUVJLFdBQU8sSUFGWDtBQUdJLFFBQUksQ0FBQyxFQUFFLFFBQVEsa0JBQVYsRUFBOEIsUUFBUSxjQUF0QyxFQUFEO0FBSFIsQ0FuQlksRUF3Qlo7QUFDSSxVQUFNLE9BRFY7QUFFSSxXQUFPLENBRlg7QUFHSSxRQUFJLENBQUMsRUFBRSxRQUFRLGtCQUFWLEVBQThCLFFBQVEsS0FBdEMsRUFBRDtBQUhSLENBeEJZLEVBNkJaO0FBQ0ksVUFBTSxPQURWO0FBRUksV0FBTyxDQUZYO0FBR0ksUUFBSSxDQUNBO0FBQ0ksZ0JBQVEsd0RBRFo7QUFFSSxnQkFBUTtBQUZaLEtBREE7QUFIUixDQTdCWSxFQXVDWjtBQUNJLFVBQU0sY0FEVjtBQUVJLFFBQUksQ0FDQTtBQUNJLGdCQUFRLEVBQUUsUUFBUSxPQUFWLEVBRFo7QUFFSTtBQUNBLGdCQUFRO0FBQ1I7QUFDQTtBQUxKLEtBREE7QUFGUixDQXZDWSxDQUFoQjs7QUF1REEsSUFBTSxTQUFTLENBQ1g7QUFDSSxVQUFNLFdBRFY7QUFFSSxVQUFNLE1BRlY7QUFHSSxXQUFPLENBQUMsQ0FBRCxFQUFJLEVBQUUsUUFBUSxPQUFWLEVBQUosQ0FIWDtBQUlJLFlBQVEsRUFBRSxNQUFNLFNBQVIsRUFBbUIsT0FBTyxNQUExQjtBQUpaLENBRFcsRUFPWDtBQUNJLFVBQU0sV0FEVjtBQUVJLFlBQVEsRUFBRSxNQUFNLFNBQVIsRUFBbUIsT0FBTyxPQUExQixFQUZaO0FBR0ksVUFBTSxRQUhWO0FBSUksV0FBTyxDQUFDLEVBQUUsUUFBUSxRQUFWLEVBQUQsRUFBdUIsQ0FBdkI7QUFDUDtBQUNBO0FBTkosQ0FQVyxDQUFmOztBQWtCQSxJQUFNLE9BQU8sQ0FDVDtBQUNJLFlBQVEsUUFEWjtBQUVJLFdBQU87QUFGWCxDQURTLEVBS1Q7QUFDSSxZQUFRLE1BRFo7QUFFSSxXQUFPO0FBRlgsQ0FMUyxDQUFiOztBQVlBLElBQU0sUUFBUSxDQUNWO0FBQ0ksVUFBTSxNQURWO0FBRUksVUFBTSxFQUFFLE1BQU0sU0FBUixFQUZWO0FBR0ksaUJBQWEsS0FIakI7QUFJSSxZQUFRO0FBQ0osZ0JBQVE7QUFDSixlQUFHLEVBQUUsT0FBTyxXQUFULEVBQXNCLE9BQU8sTUFBN0IsRUFEQztBQUVKO0FBQ0EsbUJBQU8sRUFBRSxPQUFPLENBQVQsRUFISDtBQUlKLGVBQUcsRUFBRSxPQUFPLFdBQVQsRUFBc0IsT0FBTyxPQUE3QixFQUpDO0FBS0o7QUFDQSxnQkFBSSxFQUFFLE9BQU8sV0FBVCxFQUFzQixPQUFPLENBQTdCLEVBTkE7QUFPSixrQkFBTSxFQUFFLE9BQU8sV0FBVDtBQVBGO0FBREo7QUFKWixDQURVLEVBaUJWO0FBQ0ksVUFBTSxNQURWO0FBRUksVUFBTSxPQUZWO0FBR0ksWUFBUTtBQUNKLGVBQU87QUFDSCxlQUFHLEVBQUUsT0FBTyxDQUFULEVBREE7QUFFSCxvQkFBUSxFQUFFLE9BQU8sRUFBVCxFQUZMO0FBR0gsa0JBQU0sRUFBRSxPQUFPLE1BQVQsRUFISDtBQUlILHlCQUFhLEVBQUUsT0FBTyxHQUFUO0FBSlYsU0FESDtBQU9KLGdCQUFRO0FBQ0osZUFBRyxFQUFFLFFBQVEsVUFBVixFQURDO0FBRUosZ0JBQUksRUFBRSxRQUFRLFVBQVY7QUFGQTtBQVBKO0FBSFosQ0FqQlUsRUFpQ1Y7QUFDSSxVQUFNLE1BRFY7QUFFSSxpQkFBYSxLQUZqQjtBQUdJLFlBQVE7QUFDSixlQUFPO0FBQ0gsZUFBRyxFQUFFLE9BQU8sQ0FBVCxFQURBO0FBRUgsb0JBQVEsRUFBRSxPQUFPLEVBQVQsRUFGTDtBQUdILG1CQUFPLEVBQUUsT0FBTyxDQUFULEVBSEo7QUFJSCxrQkFBTSxFQUFFLE9BQU8sV0FBVDtBQUpILFNBREg7QUFPSixnQkFBUTtBQUNKLGVBQUcsRUFBRSxRQUFRLFVBQVY7QUFEQztBQVBKO0FBSFosQ0FqQ1UsRUFnRFY7QUFDSSxVQUFNLE1BRFY7QUFFSSxpQkFBYSxLQUZqQjtBQUdJLFlBQVE7QUFDSixlQUFPO0FBQ0gsZUFBRyxFQUFFLE9BQU8sQ0FBVCxFQURBO0FBRUgsb0JBQVEsRUFBRSxPQUFPLEVBQVQsRUFGTDtBQUdILG1CQUFPLEVBQUUsT0FBTyxDQUFULEVBSEo7QUFJSCxrQkFBTSxFQUFFLE9BQU8sUUFBVDtBQUpILFNBREg7QUFPSixnQkFBUTtBQUNKLGVBQUcsRUFBRSxRQUFRLFVBQVY7QUFEQztBQVBKO0FBSFosQ0FoRFUsQ0FBZDs7QUFrRUEsSUFBTSxTQUFTO0FBQ1gsVUFBTTtBQUNGLG1CQUFXLE9BRFQ7QUFFRixvQkFBWSxPQUZWO0FBR0YsbUJBQVc7QUFIVDtBQURLLENBQWY7O2tCQVFlO0FBQ1gsYUFBUyw4Q0FERTtBQUVYLFdBQU8sR0FGSTtBQUdYLFlBQVEsRUFIRztBQUlYLGFBQVMsRUFKRTtBQUtYLGNBQVUsTUFMQztBQU1YLGtCQU5XO0FBT1gsa0JBUFc7QUFRWCxvQkFSVztBQVNYLGNBVFc7QUFVWCxjQVZXO0FBV1gsZ0JBWFc7QUFZWCxpQkFBYTtBQVpGLEM7Ozs7Ozs7OztrQkNqTkEsWUFBTTtBQUNqQixRQUFJLFdBQWMsT0FBTyxRQUFQLENBQWdCLFFBQTlCLFVBQTJDLE9BQU8sUUFBUCxDQUFnQixJQUEzRCxXQUFKO0FBQ0EsUUFBSSxZQUFlLE9BQU8sUUFBUCxDQUFnQixRQUEvQixVQUE0QyxPQUFPLFFBQVAsQ0FBZ0IsSUFBNUQsVUFBSjs7QUFFQSxRQUFJLE9BQU8sUUFBUCxDQUFnQixRQUFoQixDQUF5QixPQUF6QixDQUFpQyxRQUFqQyxNQUErQyxDQUFDLENBQXBELEVBQXVEO0FBQ25ELG1CQUFjLE9BQU8sUUFBUCxDQUFnQixRQUE5QixVQUEyQyxPQUFPLFFBQVAsQ0FBZ0IsSUFBM0Q7QUFDQSxvQkFBZSxPQUFPLFFBQVAsQ0FBZ0IsUUFBL0IsVUFBNEMsT0FBTyxRQUFQLENBQWdCLElBQTVEO0FBQ0gsS0FIRCxNQUdPLElBQUksT0FBTyxRQUFQLENBQWdCLFFBQWhCLENBQXlCLE9BQXpCLENBQWlDLFdBQWpDLE1BQWtELENBQUMsQ0FBdkQsRUFBMEQ7QUFDN0QsbUJBQWMsT0FBTyxRQUFQLENBQWdCLFFBQTlCLFVBQTJDLE9BQU8sUUFBUCxDQUFnQixJQUEzRDtBQUNBLG9CQUFlLE9BQU8sUUFBUCxDQUFnQixRQUEvQixVQUE0QyxPQUFPLFFBQVAsQ0FBZ0IsSUFBNUQ7QUFDSDs7QUFFRCxXQUFPO0FBQ0gsMEJBREc7QUFFSDtBQUZHLEtBQVA7QUFJSCxDOzs7Ozs7Ozs7QUNiRDs7Ozs7O0FBRUEsSUFBTSxPQUFPLE9BQU8sSUFBcEIsQyxDQUxBO0FBQ0E7QUFDQTs7QUFJQSxJQUFNLGNBQWMsT0FBTyxXQUEzQjtBQUNBLElBQU0sSUFBSSxPQUFPLENBQWpCOztBQUVBLElBQU0sUUFBUSxTQUFSLEtBQVEsT0FBc0U7QUFBQSxRQUFuRSxJQUFtRSxRQUFuRSxJQUFtRTtBQUFBLFFBQTdELElBQTZELFFBQTdELElBQTZEO0FBQUEsUUFBdkQsVUFBdUQsUUFBdkQsVUFBdUQ7QUFBQSxRQUEzQyxVQUEyQyxRQUEzQyxVQUEyQztBQUFBLFFBQS9CLGNBQStCLFFBQS9CLGNBQStCO0FBQUEsUUFBZixRQUFlLFFBQWYsUUFBZTs7QUFDaEYsUUFBSSxnQkFBRSxLQUFGLENBQVEsSUFBUixDQUFKLEVBQW1CO0FBQ2YsZ0JBQVEsS0FBUixDQUFjLFNBQWQ7QUFDQSxpQkFBUyxJQUFUO0FBQ0E7QUFDSDs7QUFFRCxRQUFJLGNBQWMsQ0FBQyxVQUFuQixFQUErQjtBQUMzQixvQkFBWSxJQUFaLENBQWlCLElBQWpCLEVBQXVCLGNBQXZCO0FBQ0g7O0FBRUQsb0JBQUUsT0FBRixDQUFVLFVBQUMsTUFBRCxFQUFZO0FBQ2xCLGFBQUssaUJBQUwsQ0FBdUIsT0FBTyxJQUE5QixFQUFvQyxVQUFDLElBQUQsRUFBTyxJQUFQLEVBQWdCO0FBQ2hELG9CQUFRLEdBQVIsQ0FBWSxJQUFaLEVBQWtCLElBQWxCO0FBQ0gsU0FGRDtBQUdILEtBSkQsRUFJRyxLQUFLLE9BQUwsSUFBZ0IsRUFKbkI7O0FBTUEsZUFBVyxZQUFNO0FBQ2Isd0JBQUUsT0FBRixDQUFVLFVBQUMsSUFBRCxFQUFVO0FBQ2hCLG9CQUFRLEdBQVIsQ0FBWSxLQUFLLElBQWpCLEVBQXVCLEtBQUssSUFBTCxDQUFVLEtBQUssSUFBZixDQUF2QjtBQUNILFNBRkQsRUFFRyxLQUFLLElBQUwsSUFBYSxFQUZoQjtBQUdILEtBSkQsRUFJRyxHQUpIOztBQU1BLGFBQVMsSUFBVDtBQUNILENBeEJEOztBQTJCQSxJQUFNLGlCQUFpQixTQUFqQixjQUFpQixRQUE4RTtBQUFBLFFBQTNFLElBQTJFLFNBQTNFLElBQTJFO0FBQUEsUUFBckUsRUFBcUUsU0FBckUsRUFBcUU7QUFBQSxRQUFqRSxRQUFpRSxTQUFqRSxRQUFpRTtBQUFBLFFBQXZELFVBQXVELFNBQXZELFVBQXVEO0FBQUEsUUFBM0MsVUFBMkMsU0FBM0MsVUFBMkM7QUFBQSxRQUEvQixjQUErQixTQUEvQixjQUErQjtBQUFBLFFBQWYsUUFBZSxTQUFmLFFBQWU7O0FBQ2pHLFFBQU0sT0FBTyxJQUFJLEtBQUssSUFBVCxDQUFjLEtBQUssS0FBTCxDQUFXLElBQVgsQ0FBZCxFQUFnQyxRQUFoQyxDQUF5QyxRQUF6QyxFQUFtRCxVQUFuRCxPQUFrRSxFQUFsRSxFQUNSLEtBRFEsR0FFUixHQUZRLEVBQWI7O0FBSUEsVUFBTTtBQUNGLGtCQURFO0FBRUYsa0JBRkU7QUFHRiw4QkFIRTtBQUlGLDhCQUpFO0FBS0Ysc0NBTEU7QUFNRjtBQU5FLEtBQU47QUFRSCxDQWJEOztrQkFnQmUsaUJBQTBIO0FBQUEsUUFBdkgsSUFBdUgsU0FBdkgsSUFBdUg7QUFBQSxRQUFqSCxFQUFpSCxTQUFqSCxFQUFpSDtBQUFBLCtCQUE3RyxRQUE2RztBQUFBLFFBQTdHLFFBQTZHLGtDQUFsRyxRQUFrRztBQUFBLGlDQUF4RixVQUF3RjtBQUFBLFFBQXhGLFVBQXdGLG9DQUEzRSxLQUEyRTtBQUFBLGlDQUFwRSxVQUFvRTtBQUFBLFFBQXBFLFVBQW9FLG9DQUF2RCxLQUF1RDtBQUFBLHFDQUFoRCxjQUFnRDtBQUFBLFFBQWhELGNBQWdELHdDQUEvQixFQUErQjtBQUFBLCtCQUEzQixRQUEyQjtBQUFBLFFBQTNCLFFBQTJCLGtDQUFoQixZQUFNLENBQUcsQ0FBTzs7QUFDckksUUFBSSxVQUFKLEVBQWdCO0FBQ1osWUFBTSxVQUFVLEtBQUssT0FBTCxJQUFnQixFQUFoQztBQUNBLFlBQU0sT0FBTyxnQkFBRSxJQUFGLENBQU8sZ0JBQUUsTUFBRixDQUFTLE1BQVQsRUFBaUIsTUFBakIsQ0FBUCxFQUFpQyxPQUFqQyxDQUFiO0FBQ0EsWUFBTSxXQUFXLGdCQUFFLElBQUYsQ0FBTyxnQkFBRSxNQUFGLENBQVMsTUFBVCxFQUFpQixVQUFqQixDQUFQLEVBQXFDLE9BQXJDLENBQWpCO0FBQ0EsWUFBTSxZQUFZLGdCQUFFLElBQUYsQ0FBTyxnQkFBRSxNQUFGLENBQVMsTUFBVCxFQUFpQixXQUFqQixDQUFQLEVBQXNDLE9BQXRDLENBQWxCOztBQUVBLFlBQUksZ0JBQUUsS0FBRixDQUFRLElBQVIsS0FBaUIsZ0JBQUUsS0FBRixDQUFRLFFBQVIsQ0FBakIsSUFBc0MsZ0JBQUUsS0FBRixDQUFRLFNBQVIsQ0FBMUMsRUFBOEQ7QUFDMUQsMkJBQWUsRUFBRSxVQUFGLEVBQVEsTUFBUixFQUFZLGtCQUFaLEVBQXNCLHNCQUF0QixFQUFrQyxzQkFBbEMsRUFBOEMsOEJBQTlDLEVBQThELGtCQUE5RCxFQUFmO0FBQ0E7QUFDSDs7QUFFRCxZQUFNLE1BQU0sRUFBRSxHQUFGLENBQU0sRUFBTixFQUFVO0FBQ2xCLDJCQUFlO0FBREcsU0FBVixFQUVULE9BRlMsQ0FFRCxDQUFDLFNBQVMsS0FBVixFQUFpQixVQUFVLEtBQTNCLENBRkMsRUFFa0MsS0FBSyxLQUZ2QyxDQUFaOztBQUlBLGVBQU8sS0FBSyxXQUFaOztBQUVBLFVBQUUsU0FBRixDQUNJLDREQURKLEVBQ2tFO0FBQzFELHlCQUFhLG1FQUQ2QztBQUUxRCxxQkFBUztBQUZpRCxTQURsRSxFQUtFLEtBTEYsQ0FLUSxHQUxSOztBQU9BLFlBQU0sUUFBUSxFQUFFLElBQUYsQ0FBTyxJQUFQLEVBQWE7QUFDdkIsOEJBRHVCO0FBRXZCO0FBQ0EsMEJBQWM7QUFIUyxTQUFiLEVBSVgsS0FKVyxDQUlMLEdBSkssQ0FBZDs7QUFNQSxtQkFBVyxZQUFNO0FBQ2IsZ0JBQU0sT0FBTyxNQUFNLEtBQW5CO0FBQ0Esa0JBQU07QUFDRiwwQkFERTtBQUVGLDBCQUZFO0FBR0Ysc0NBSEU7QUFJRixzQ0FKRTtBQUtGLDhDQUxFO0FBTUY7QUFORSxhQUFOO0FBUUgsU0FWRCxFQVVHLENBVkg7QUFXSCxLQXpDRCxNQXlDTztBQUNILHVCQUFlLEVBQUUsVUFBRixFQUFRLE1BQVIsRUFBWSxrQkFBWixFQUFzQixzQkFBdEIsRUFBa0Msc0JBQWxDLEVBQThDLDhCQUE5QyxFQUE4RCxrQkFBOUQsRUFBZjtBQUNIO0FBQ0osQzs7Ozs7Ozs7O2tCQ2pHYyxVQUFDLElBQUQsRUFBVTtBQUNyQjtBQUNBO0FBQ0EsUUFBTSxPQUFPLEtBQUssU0FBTCxDQUFlLElBQWYsRUFBcUIsSUFBckIsRUFBMkIsQ0FBM0IsQ0FBYjtBQUNBLFFBQU0sSUFBSSxPQUFPLElBQVAsRUFBVjtBQUNBLE1BQUUsUUFBRixDQUFXLElBQVg7QUFDQSxNQUFFLFFBQUYsQ0FBVyxLQUFYLHVCQUFxQyxJQUFyQztBQUNBLE1BQUUsUUFBRixDQUFXLEtBQVg7QUFDSCxDIiwiZmlsZSI6ImdlbmVyYXRlZC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gZSh0LG4scil7ZnVuY3Rpb24gcyhvLHUpe2lmKCFuW29dKXtpZighdFtvXSl7dmFyIGE9dHlwZW9mIHJlcXVpcmU9PVwiZnVuY3Rpb25cIiYmcmVxdWlyZTtpZighdSYmYSlyZXR1cm4gYShvLCEwKTtpZihpKXJldHVybiBpKG8sITApO3ZhciBmPW5ldyBFcnJvcihcIkNhbm5vdCBmaW5kIG1vZHVsZSAnXCIrbytcIidcIik7dGhyb3cgZi5jb2RlPVwiTU9EVUxFX05PVF9GT1VORFwiLGZ9dmFyIGw9bltvXT17ZXhwb3J0czp7fX07dFtvXVswXS5jYWxsKGwuZXhwb3J0cyxmdW5jdGlvbihlKXt2YXIgbj10W29dWzFdW2VdO3JldHVybiBzKG4/bjplKX0sbCxsLmV4cG9ydHMsZSx0LG4scil9cmV0dXJuIG5bb10uZXhwb3J0c312YXIgaT10eXBlb2YgcmVxdWlyZT09XCJmdW5jdGlvblwiJiZyZXF1aXJlO2Zvcih2YXIgbz0wO288ci5sZW5ndGg7bysrKXMocltvXSk7cmV0dXJuIHN9KSIsImltcG9ydCBSIGZyb20gJ3JhbWRhJztcbmltcG9ydCBzcGVjMSBmcm9tICcuLi9zcmMvc3BlY3Mvc3BlYzhhJztcbmltcG9ydCBzcGVjMiBmcm9tICcuLi9zcmMvc3BlY3Mvc3BlYzhiJztcbmltcG9ydCBjcmVhdGVWaWV3IGZyb20gJy4uL3NyYy91dGlsL2NyZWF0ZS12ZWdhLXZpZXcnO1xuaW1wb3J0IGdlbmVyYXRlU3BlYyBmcm9tICcuLi9zcmMvdXRpbC9nZW5lcmF0ZS1zcGVjJztcblxuLy8gVmVnYSByZW5kZXJpbmcgYSBtYXAgdXNpbmcgbGVhZmxldC12ZWdhXG5cbndpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgIGxldCB2aWV3MSA9IG51bGw7XG4gICAgbGV0IHZpZXcyID0gbnVsbDtcblxuICAgIGNvbnN0IGNvbm5lY3QgPSAoKSA9PiB7XG4gICAgICAgIHZpZXcyLmFkZFNpZ25hbExpc3RlbmVyKCdkZXRhaWxEb21haW4nLCAobmFtZSwgdmFsdWUpID0+IHtcbiAgICAgICAgICAgIHZpZXcxLnNpZ25hbCgnZGV0YWlsRG9tYWluJywgdmFsdWUpLnJ1bigpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgY3JlYXRlVmlldyh7XG4gICAgICAgIHNwZWM6IHNwZWMxLFxuICAgICAgICBpZDogJ2FwcDEnLFxuICAgICAgICByZW5kZXJlcjogJ3N2ZycsXG4gICAgICAgIGFkZExlYWZsZXQ6IGZhbHNlLFxuICAgICAgICBhZGRUb29sdGlwOiB0cnVlLFxuICAgICAgICB0b29sdGlwT3B0aW9uczoge1xuICAgICAgICAgICAgc2hvd0FsbEZpZWxkczogZmFsc2UsXG4gICAgICAgICAgICBmaWVsZHM6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdFR5cGU6ICdzdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ25hbWUnLFxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogJ2J1dXJ0JyxcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm9ybWF0VHlwZTogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgICAgIGZpZWxkOiAncmVwb3J0cycsXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiAncmVwb3J0cycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdFR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2R1bXBzJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdkdW1wcycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvcm1hdFR5cGU6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2ZpbGxwZXJjJyxcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6ICdmaWxscGVyYycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIF0sXG4gICAgICAgIH0sXG4gICAgICAgIGNhbGxiYWNrOiAodmlldykgPT4ge1xuICAgICAgICAgICAgdmlldzEgPSB2aWV3O1xuICAgICAgICAgICAgaWYgKHZpZXcxICE9PSBudWxsICYmIHZpZXcyICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgY29ubmVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgIH0pO1xuXG4gICAgY3JlYXRlVmlldyh7XG4gICAgICAgIHNwZWM6IHNwZWMyLFxuICAgICAgICBpZDogJ2FwcDInLFxuICAgICAgICByZW5kZXJlcjogJ2NhbnZhcycsXG4gICAgICAgIGFkZExlYWZsZXQ6IGZhbHNlLFxuICAgICAgICBhZGRUb29sdGlwOiBmYWxzZSxcbiAgICAgICAgdG9vbHRpcE9wdGlvbnM6IHt9LFxuICAgICAgICBjYWxsYmFjazogKHZpZXcpID0+IHtcbiAgICAgICAgICAgIHZpZXcyID0gdmlldztcbiAgICAgICAgICAgIGlmICh2aWV3MSAhPT0gbnVsbCAmJiB2aWV3MiAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbm5lY3QoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9KTtcblxuXG4gICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2dlbmVyYXRlLXNwZWMxJylcbiAgICAuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiBnZW5lcmF0ZVNwZWMoc3BlYzEpKTtcblxuICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdnZW5lcmF0ZS1zcGVjMicpXG4gICAgLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4gZ2VuZXJhdGVTcGVjKHNwZWMyKSk7XG59KTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBGOiByZXF1aXJlKCcuL3NyYy9GJyksXG4gIFQ6IHJlcXVpcmUoJy4vc3JjL1QnKSxcbiAgX186IHJlcXVpcmUoJy4vc3JjL19fJyksXG4gIGFkZDogcmVxdWlyZSgnLi9zcmMvYWRkJyksXG4gIGFkZEluZGV4OiByZXF1aXJlKCcuL3NyYy9hZGRJbmRleCcpLFxuICBhZGp1c3Q6IHJlcXVpcmUoJy4vc3JjL2FkanVzdCcpLFxuICBhbGw6IHJlcXVpcmUoJy4vc3JjL2FsbCcpLFxuICBhbGxQYXNzOiByZXF1aXJlKCcuL3NyYy9hbGxQYXNzJyksXG4gIGFsd2F5czogcmVxdWlyZSgnLi9zcmMvYWx3YXlzJyksXG4gIGFuZDogcmVxdWlyZSgnLi9zcmMvYW5kJyksXG4gIGFueTogcmVxdWlyZSgnLi9zcmMvYW55JyksXG4gIGFueVBhc3M6IHJlcXVpcmUoJy4vc3JjL2FueVBhc3MnKSxcbiAgYXA6IHJlcXVpcmUoJy4vc3JjL2FwJyksXG4gIGFwZXJ0dXJlOiByZXF1aXJlKCcuL3NyYy9hcGVydHVyZScpLFxuICBhcHBlbmQ6IHJlcXVpcmUoJy4vc3JjL2FwcGVuZCcpLFxuICBhcHBseTogcmVxdWlyZSgnLi9zcmMvYXBwbHknKSxcbiAgYXBwbHlTcGVjOiByZXF1aXJlKCcuL3NyYy9hcHBseVNwZWMnKSxcbiAgYXNjZW5kOiByZXF1aXJlKCcuL3NyYy9hc2NlbmQnKSxcbiAgYXNzb2M6IHJlcXVpcmUoJy4vc3JjL2Fzc29jJyksXG4gIGFzc29jUGF0aDogcmVxdWlyZSgnLi9zcmMvYXNzb2NQYXRoJyksXG4gIGJpbmFyeTogcmVxdWlyZSgnLi9zcmMvYmluYXJ5JyksXG4gIGJpbmQ6IHJlcXVpcmUoJy4vc3JjL2JpbmQnKSxcbiAgYm90aDogcmVxdWlyZSgnLi9zcmMvYm90aCcpLFxuICBjYWxsOiByZXF1aXJlKCcuL3NyYy9jYWxsJyksXG4gIGNoYWluOiByZXF1aXJlKCcuL3NyYy9jaGFpbicpLFxuICBjbGFtcDogcmVxdWlyZSgnLi9zcmMvY2xhbXAnKSxcbiAgY2xvbmU6IHJlcXVpcmUoJy4vc3JjL2Nsb25lJyksXG4gIGNvbXBhcmF0b3I6IHJlcXVpcmUoJy4vc3JjL2NvbXBhcmF0b3InKSxcbiAgY29tcGxlbWVudDogcmVxdWlyZSgnLi9zcmMvY29tcGxlbWVudCcpLFxuICBjb21wb3NlOiByZXF1aXJlKCcuL3NyYy9jb21wb3NlJyksXG4gIGNvbXBvc2VLOiByZXF1aXJlKCcuL3NyYy9jb21wb3NlSycpLFxuICBjb21wb3NlUDogcmVxdWlyZSgnLi9zcmMvY29tcG9zZVAnKSxcbiAgY29uY2F0OiByZXF1aXJlKCcuL3NyYy9jb25jYXQnKSxcbiAgY29uZDogcmVxdWlyZSgnLi9zcmMvY29uZCcpLFxuICBjb25zdHJ1Y3Q6IHJlcXVpcmUoJy4vc3JjL2NvbnN0cnVjdCcpLFxuICBjb25zdHJ1Y3ROOiByZXF1aXJlKCcuL3NyYy9jb25zdHJ1Y3ROJyksXG4gIGNvbnRhaW5zOiByZXF1aXJlKCcuL3NyYy9jb250YWlucycpLFxuICBjb252ZXJnZTogcmVxdWlyZSgnLi9zcmMvY29udmVyZ2UnKSxcbiAgY291bnRCeTogcmVxdWlyZSgnLi9zcmMvY291bnRCeScpLFxuICBjdXJyeTogcmVxdWlyZSgnLi9zcmMvY3VycnknKSxcbiAgY3VycnlOOiByZXF1aXJlKCcuL3NyYy9jdXJyeU4nKSxcbiAgZGVjOiByZXF1aXJlKCcuL3NyYy9kZWMnKSxcbiAgZGVzY2VuZDogcmVxdWlyZSgnLi9zcmMvZGVzY2VuZCcpLFxuICBkZWZhdWx0VG86IHJlcXVpcmUoJy4vc3JjL2RlZmF1bHRUbycpLFxuICBkaWZmZXJlbmNlOiByZXF1aXJlKCcuL3NyYy9kaWZmZXJlbmNlJyksXG4gIGRpZmZlcmVuY2VXaXRoOiByZXF1aXJlKCcuL3NyYy9kaWZmZXJlbmNlV2l0aCcpLFxuICBkaXNzb2M6IHJlcXVpcmUoJy4vc3JjL2Rpc3NvYycpLFxuICBkaXNzb2NQYXRoOiByZXF1aXJlKCcuL3NyYy9kaXNzb2NQYXRoJyksXG4gIGRpdmlkZTogcmVxdWlyZSgnLi9zcmMvZGl2aWRlJyksXG4gIGRyb3A6IHJlcXVpcmUoJy4vc3JjL2Ryb3AnKSxcbiAgZHJvcExhc3Q6IHJlcXVpcmUoJy4vc3JjL2Ryb3BMYXN0JyksXG4gIGRyb3BMYXN0V2hpbGU6IHJlcXVpcmUoJy4vc3JjL2Ryb3BMYXN0V2hpbGUnKSxcbiAgZHJvcFJlcGVhdHM6IHJlcXVpcmUoJy4vc3JjL2Ryb3BSZXBlYXRzJyksXG4gIGRyb3BSZXBlYXRzV2l0aDogcmVxdWlyZSgnLi9zcmMvZHJvcFJlcGVhdHNXaXRoJyksXG4gIGRyb3BXaGlsZTogcmVxdWlyZSgnLi9zcmMvZHJvcFdoaWxlJyksXG4gIGVpdGhlcjogcmVxdWlyZSgnLi9zcmMvZWl0aGVyJyksXG4gIGVtcHR5OiByZXF1aXJlKCcuL3NyYy9lbXB0eScpLFxuICBlcUJ5OiByZXF1aXJlKCcuL3NyYy9lcUJ5JyksXG4gIGVxUHJvcHM6IHJlcXVpcmUoJy4vc3JjL2VxUHJvcHMnKSxcbiAgZXF1YWxzOiByZXF1aXJlKCcuL3NyYy9lcXVhbHMnKSxcbiAgZXZvbHZlOiByZXF1aXJlKCcuL3NyYy9ldm9sdmUnKSxcbiAgZmlsdGVyOiByZXF1aXJlKCcuL3NyYy9maWx0ZXInKSxcbiAgZmluZDogcmVxdWlyZSgnLi9zcmMvZmluZCcpLFxuICBmaW5kSW5kZXg6IHJlcXVpcmUoJy4vc3JjL2ZpbmRJbmRleCcpLFxuICBmaW5kTGFzdDogcmVxdWlyZSgnLi9zcmMvZmluZExhc3QnKSxcbiAgZmluZExhc3RJbmRleDogcmVxdWlyZSgnLi9zcmMvZmluZExhc3RJbmRleCcpLFxuICBmbGF0dGVuOiByZXF1aXJlKCcuL3NyYy9mbGF0dGVuJyksXG4gIGZsaXA6IHJlcXVpcmUoJy4vc3JjL2ZsaXAnKSxcbiAgZm9yRWFjaDogcmVxdWlyZSgnLi9zcmMvZm9yRWFjaCcpLFxuICBmb3JFYWNoT2JqSW5kZXhlZDogcmVxdWlyZSgnLi9zcmMvZm9yRWFjaE9iakluZGV4ZWQnKSxcbiAgZnJvbVBhaXJzOiByZXF1aXJlKCcuL3NyYy9mcm9tUGFpcnMnKSxcbiAgZ3JvdXBCeTogcmVxdWlyZSgnLi9zcmMvZ3JvdXBCeScpLFxuICBncm91cFdpdGg6IHJlcXVpcmUoJy4vc3JjL2dyb3VwV2l0aCcpLFxuICBndDogcmVxdWlyZSgnLi9zcmMvZ3QnKSxcbiAgZ3RlOiByZXF1aXJlKCcuL3NyYy9ndGUnKSxcbiAgaGFzOiByZXF1aXJlKCcuL3NyYy9oYXMnKSxcbiAgaGFzSW46IHJlcXVpcmUoJy4vc3JjL2hhc0luJyksXG4gIGhlYWQ6IHJlcXVpcmUoJy4vc3JjL2hlYWQnKSxcbiAgaWRlbnRpY2FsOiByZXF1aXJlKCcuL3NyYy9pZGVudGljYWwnKSxcbiAgaWRlbnRpdHk6IHJlcXVpcmUoJy4vc3JjL2lkZW50aXR5JyksXG4gIGlmRWxzZTogcmVxdWlyZSgnLi9zcmMvaWZFbHNlJyksXG4gIGluYzogcmVxdWlyZSgnLi9zcmMvaW5jJyksXG4gIGluZGV4Qnk6IHJlcXVpcmUoJy4vc3JjL2luZGV4QnknKSxcbiAgaW5kZXhPZjogcmVxdWlyZSgnLi9zcmMvaW5kZXhPZicpLFxuICBpbml0OiByZXF1aXJlKCcuL3NyYy9pbml0JyksXG4gIGluc2VydDogcmVxdWlyZSgnLi9zcmMvaW5zZXJ0JyksXG4gIGluc2VydEFsbDogcmVxdWlyZSgnLi9zcmMvaW5zZXJ0QWxsJyksXG4gIGludGVyc2VjdGlvbjogcmVxdWlyZSgnLi9zcmMvaW50ZXJzZWN0aW9uJyksXG4gIGludGVyc2VjdGlvbldpdGg6IHJlcXVpcmUoJy4vc3JjL2ludGVyc2VjdGlvbldpdGgnKSxcbiAgaW50ZXJzcGVyc2U6IHJlcXVpcmUoJy4vc3JjL2ludGVyc3BlcnNlJyksXG4gIGludG86IHJlcXVpcmUoJy4vc3JjL2ludG8nKSxcbiAgaW52ZXJ0OiByZXF1aXJlKCcuL3NyYy9pbnZlcnQnKSxcbiAgaW52ZXJ0T2JqOiByZXF1aXJlKCcuL3NyYy9pbnZlcnRPYmonKSxcbiAgaW52b2tlcjogcmVxdWlyZSgnLi9zcmMvaW52b2tlcicpLFxuICBpczogcmVxdWlyZSgnLi9zcmMvaXMnKSxcbiAgaXNBcnJheUxpa2U6IHJlcXVpcmUoJy4vc3JjL2lzQXJyYXlMaWtlJyksXG4gIGlzRW1wdHk6IHJlcXVpcmUoJy4vc3JjL2lzRW1wdHknKSxcbiAgaXNOaWw6IHJlcXVpcmUoJy4vc3JjL2lzTmlsJyksXG4gIGpvaW46IHJlcXVpcmUoJy4vc3JjL2pvaW4nKSxcbiAganV4dDogcmVxdWlyZSgnLi9zcmMvanV4dCcpLFxuICBrZXlzOiByZXF1aXJlKCcuL3NyYy9rZXlzJyksXG4gIGtleXNJbjogcmVxdWlyZSgnLi9zcmMva2V5c0luJyksXG4gIGxhc3Q6IHJlcXVpcmUoJy4vc3JjL2xhc3QnKSxcbiAgbGFzdEluZGV4T2Y6IHJlcXVpcmUoJy4vc3JjL2xhc3RJbmRleE9mJyksXG4gIGxlbmd0aDogcmVxdWlyZSgnLi9zcmMvbGVuZ3RoJyksXG4gIGxlbnM6IHJlcXVpcmUoJy4vc3JjL2xlbnMnKSxcbiAgbGVuc0luZGV4OiByZXF1aXJlKCcuL3NyYy9sZW5zSW5kZXgnKSxcbiAgbGVuc1BhdGg6IHJlcXVpcmUoJy4vc3JjL2xlbnNQYXRoJyksXG4gIGxlbnNQcm9wOiByZXF1aXJlKCcuL3NyYy9sZW5zUHJvcCcpLFxuICBsaWZ0OiByZXF1aXJlKCcuL3NyYy9saWZ0JyksXG4gIGxpZnROOiByZXF1aXJlKCcuL3NyYy9saWZ0TicpLFxuICBsdDogcmVxdWlyZSgnLi9zcmMvbHQnKSxcbiAgbHRlOiByZXF1aXJlKCcuL3NyYy9sdGUnKSxcbiAgbWFwOiByZXF1aXJlKCcuL3NyYy9tYXAnKSxcbiAgbWFwQWNjdW06IHJlcXVpcmUoJy4vc3JjL21hcEFjY3VtJyksXG4gIG1hcEFjY3VtUmlnaHQ6IHJlcXVpcmUoJy4vc3JjL21hcEFjY3VtUmlnaHQnKSxcbiAgbWFwT2JqSW5kZXhlZDogcmVxdWlyZSgnLi9zcmMvbWFwT2JqSW5kZXhlZCcpLFxuICBtYXRjaDogcmVxdWlyZSgnLi9zcmMvbWF0Y2gnKSxcbiAgbWF0aE1vZDogcmVxdWlyZSgnLi9zcmMvbWF0aE1vZCcpLFxuICBtYXg6IHJlcXVpcmUoJy4vc3JjL21heCcpLFxuICBtYXhCeTogcmVxdWlyZSgnLi9zcmMvbWF4QnknKSxcbiAgbWVhbjogcmVxdWlyZSgnLi9zcmMvbWVhbicpLFxuICBtZWRpYW46IHJlcXVpcmUoJy4vc3JjL21lZGlhbicpLFxuICBtZW1vaXplOiByZXF1aXJlKCcuL3NyYy9tZW1vaXplJyksXG4gIG1lcmdlOiByZXF1aXJlKCcuL3NyYy9tZXJnZScpLFxuICBtZXJnZUFsbDogcmVxdWlyZSgnLi9zcmMvbWVyZ2VBbGwnKSxcbiAgbWVyZ2VXaXRoOiByZXF1aXJlKCcuL3NyYy9tZXJnZVdpdGgnKSxcbiAgbWVyZ2VXaXRoS2V5OiByZXF1aXJlKCcuL3NyYy9tZXJnZVdpdGhLZXknKSxcbiAgbWluOiByZXF1aXJlKCcuL3NyYy9taW4nKSxcbiAgbWluQnk6IHJlcXVpcmUoJy4vc3JjL21pbkJ5JyksXG4gIG1vZHVsbzogcmVxdWlyZSgnLi9zcmMvbW9kdWxvJyksXG4gIG11bHRpcGx5OiByZXF1aXJlKCcuL3NyYy9tdWx0aXBseScpLFxuICBuQXJ5OiByZXF1aXJlKCcuL3NyYy9uQXJ5JyksXG4gIG5lZ2F0ZTogcmVxdWlyZSgnLi9zcmMvbmVnYXRlJyksXG4gIG5vbmU6IHJlcXVpcmUoJy4vc3JjL25vbmUnKSxcbiAgbm90OiByZXF1aXJlKCcuL3NyYy9ub3QnKSxcbiAgbnRoOiByZXF1aXJlKCcuL3NyYy9udGgnKSxcbiAgbnRoQXJnOiByZXF1aXJlKCcuL3NyYy9udGhBcmcnKSxcbiAgb2JqT2Y6IHJlcXVpcmUoJy4vc3JjL29iak9mJyksXG4gIG9mOiByZXF1aXJlKCcuL3NyYy9vZicpLFxuICBvbWl0OiByZXF1aXJlKCcuL3NyYy9vbWl0JyksXG4gIG9uY2U6IHJlcXVpcmUoJy4vc3JjL29uY2UnKSxcbiAgb3I6IHJlcXVpcmUoJy4vc3JjL29yJyksXG4gIG92ZXI6IHJlcXVpcmUoJy4vc3JjL292ZXInKSxcbiAgcGFpcjogcmVxdWlyZSgnLi9zcmMvcGFpcicpLFxuICBwYXJ0aWFsOiByZXF1aXJlKCcuL3NyYy9wYXJ0aWFsJyksXG4gIHBhcnRpYWxSaWdodDogcmVxdWlyZSgnLi9zcmMvcGFydGlhbFJpZ2h0JyksXG4gIHBhcnRpdGlvbjogcmVxdWlyZSgnLi9zcmMvcGFydGl0aW9uJyksXG4gIHBhdGg6IHJlcXVpcmUoJy4vc3JjL3BhdGgnKSxcbiAgcGF0aEVxOiByZXF1aXJlKCcuL3NyYy9wYXRoRXEnKSxcbiAgcGF0aE9yOiByZXF1aXJlKCcuL3NyYy9wYXRoT3InKSxcbiAgcGF0aFNhdGlzZmllczogcmVxdWlyZSgnLi9zcmMvcGF0aFNhdGlzZmllcycpLFxuICBwaWNrOiByZXF1aXJlKCcuL3NyYy9waWNrJyksXG4gIHBpY2tBbGw6IHJlcXVpcmUoJy4vc3JjL3BpY2tBbGwnKSxcbiAgcGlja0J5OiByZXF1aXJlKCcuL3NyYy9waWNrQnknKSxcbiAgcGlwZTogcmVxdWlyZSgnLi9zcmMvcGlwZScpLFxuICBwaXBlSzogcmVxdWlyZSgnLi9zcmMvcGlwZUsnKSxcbiAgcGlwZVA6IHJlcXVpcmUoJy4vc3JjL3BpcGVQJyksXG4gIHBsdWNrOiByZXF1aXJlKCcuL3NyYy9wbHVjaycpLFxuICBwcmVwZW5kOiByZXF1aXJlKCcuL3NyYy9wcmVwZW5kJyksXG4gIHByb2R1Y3Q6IHJlcXVpcmUoJy4vc3JjL3Byb2R1Y3QnKSxcbiAgcHJvamVjdDogcmVxdWlyZSgnLi9zcmMvcHJvamVjdCcpLFxuICBwcm9wOiByZXF1aXJlKCcuL3NyYy9wcm9wJyksXG4gIHByb3BFcTogcmVxdWlyZSgnLi9zcmMvcHJvcEVxJyksXG4gIHByb3BJczogcmVxdWlyZSgnLi9zcmMvcHJvcElzJyksXG4gIHByb3BPcjogcmVxdWlyZSgnLi9zcmMvcHJvcE9yJyksXG4gIHByb3BTYXRpc2ZpZXM6IHJlcXVpcmUoJy4vc3JjL3Byb3BTYXRpc2ZpZXMnKSxcbiAgcHJvcHM6IHJlcXVpcmUoJy4vc3JjL3Byb3BzJyksXG4gIHJhbmdlOiByZXF1aXJlKCcuL3NyYy9yYW5nZScpLFxuICByZWR1Y2U6IHJlcXVpcmUoJy4vc3JjL3JlZHVjZScpLFxuICByZWR1Y2VCeTogcmVxdWlyZSgnLi9zcmMvcmVkdWNlQnknKSxcbiAgcmVkdWNlUmlnaHQ6IHJlcXVpcmUoJy4vc3JjL3JlZHVjZVJpZ2h0JyksXG4gIHJlZHVjZVdoaWxlOiByZXF1aXJlKCcuL3NyYy9yZWR1Y2VXaGlsZScpLFxuICByZWR1Y2VkOiByZXF1aXJlKCcuL3NyYy9yZWR1Y2VkJyksXG4gIHJlamVjdDogcmVxdWlyZSgnLi9zcmMvcmVqZWN0JyksXG4gIHJlbW92ZTogcmVxdWlyZSgnLi9zcmMvcmVtb3ZlJyksXG4gIHJlcGVhdDogcmVxdWlyZSgnLi9zcmMvcmVwZWF0JyksXG4gIHJlcGxhY2U6IHJlcXVpcmUoJy4vc3JjL3JlcGxhY2UnKSxcbiAgcmV2ZXJzZTogcmVxdWlyZSgnLi9zcmMvcmV2ZXJzZScpLFxuICBzY2FuOiByZXF1aXJlKCcuL3NyYy9zY2FuJyksXG4gIHNlcXVlbmNlOiByZXF1aXJlKCcuL3NyYy9zZXF1ZW5jZScpLFxuICBzZXQ6IHJlcXVpcmUoJy4vc3JjL3NldCcpLFxuICBzbGljZTogcmVxdWlyZSgnLi9zcmMvc2xpY2UnKSxcbiAgc29ydDogcmVxdWlyZSgnLi9zcmMvc29ydCcpLFxuICBzb3J0Qnk6IHJlcXVpcmUoJy4vc3JjL3NvcnRCeScpLFxuICBzb3J0V2l0aDogcmVxdWlyZSgnLi9zcmMvc29ydFdpdGgnKSxcbiAgc3BsaXQ6IHJlcXVpcmUoJy4vc3JjL3NwbGl0JyksXG4gIHNwbGl0QXQ6IHJlcXVpcmUoJy4vc3JjL3NwbGl0QXQnKSxcbiAgc3BsaXRFdmVyeTogcmVxdWlyZSgnLi9zcmMvc3BsaXRFdmVyeScpLFxuICBzcGxpdFdoZW46IHJlcXVpcmUoJy4vc3JjL3NwbGl0V2hlbicpLFxuICBzdWJ0cmFjdDogcmVxdWlyZSgnLi9zcmMvc3VidHJhY3QnKSxcbiAgc3VtOiByZXF1aXJlKCcuL3NyYy9zdW0nKSxcbiAgc3ltbWV0cmljRGlmZmVyZW5jZTogcmVxdWlyZSgnLi9zcmMvc3ltbWV0cmljRGlmZmVyZW5jZScpLFxuICBzeW1tZXRyaWNEaWZmZXJlbmNlV2l0aDogcmVxdWlyZSgnLi9zcmMvc3ltbWV0cmljRGlmZmVyZW5jZVdpdGgnKSxcbiAgdGFpbDogcmVxdWlyZSgnLi9zcmMvdGFpbCcpLFxuICB0YWtlOiByZXF1aXJlKCcuL3NyYy90YWtlJyksXG4gIHRha2VMYXN0OiByZXF1aXJlKCcuL3NyYy90YWtlTGFzdCcpLFxuICB0YWtlTGFzdFdoaWxlOiByZXF1aXJlKCcuL3NyYy90YWtlTGFzdFdoaWxlJyksXG4gIHRha2VXaGlsZTogcmVxdWlyZSgnLi9zcmMvdGFrZVdoaWxlJyksXG4gIHRhcDogcmVxdWlyZSgnLi9zcmMvdGFwJyksXG4gIHRlc3Q6IHJlcXVpcmUoJy4vc3JjL3Rlc3QnKSxcbiAgdGltZXM6IHJlcXVpcmUoJy4vc3JjL3RpbWVzJyksXG4gIHRvTG93ZXI6IHJlcXVpcmUoJy4vc3JjL3RvTG93ZXInKSxcbiAgdG9QYWlyczogcmVxdWlyZSgnLi9zcmMvdG9QYWlycycpLFxuICB0b1BhaXJzSW46IHJlcXVpcmUoJy4vc3JjL3RvUGFpcnNJbicpLFxuICB0b1N0cmluZzogcmVxdWlyZSgnLi9zcmMvdG9TdHJpbmcnKSxcbiAgdG9VcHBlcjogcmVxdWlyZSgnLi9zcmMvdG9VcHBlcicpLFxuICB0cmFuc2R1Y2U6IHJlcXVpcmUoJy4vc3JjL3RyYW5zZHVjZScpLFxuICB0cmFuc3Bvc2U6IHJlcXVpcmUoJy4vc3JjL3RyYW5zcG9zZScpLFxuICB0cmF2ZXJzZTogcmVxdWlyZSgnLi9zcmMvdHJhdmVyc2UnKSxcbiAgdHJpbTogcmVxdWlyZSgnLi9zcmMvdHJpbScpLFxuICB0cnlDYXRjaDogcmVxdWlyZSgnLi9zcmMvdHJ5Q2F0Y2gnKSxcbiAgdHlwZTogcmVxdWlyZSgnLi9zcmMvdHlwZScpLFxuICB1bmFwcGx5OiByZXF1aXJlKCcuL3NyYy91bmFwcGx5JyksXG4gIHVuYXJ5OiByZXF1aXJlKCcuL3NyYy91bmFyeScpLFxuICB1bmN1cnJ5TjogcmVxdWlyZSgnLi9zcmMvdW5jdXJyeU4nKSxcbiAgdW5mb2xkOiByZXF1aXJlKCcuL3NyYy91bmZvbGQnKSxcbiAgdW5pb246IHJlcXVpcmUoJy4vc3JjL3VuaW9uJyksXG4gIHVuaW9uV2l0aDogcmVxdWlyZSgnLi9zcmMvdW5pb25XaXRoJyksXG4gIHVuaXE6IHJlcXVpcmUoJy4vc3JjL3VuaXEnKSxcbiAgdW5pcUJ5OiByZXF1aXJlKCcuL3NyYy91bmlxQnknKSxcbiAgdW5pcVdpdGg6IHJlcXVpcmUoJy4vc3JjL3VuaXFXaXRoJyksXG4gIHVubGVzczogcmVxdWlyZSgnLi9zcmMvdW5sZXNzJyksXG4gIHVubmVzdDogcmVxdWlyZSgnLi9zcmMvdW5uZXN0JyksXG4gIHVudGlsOiByZXF1aXJlKCcuL3NyYy91bnRpbCcpLFxuICB1cGRhdGU6IHJlcXVpcmUoJy4vc3JjL3VwZGF0ZScpLFxuICB1c2VXaXRoOiByZXF1aXJlKCcuL3NyYy91c2VXaXRoJyksXG4gIHZhbHVlczogcmVxdWlyZSgnLi9zcmMvdmFsdWVzJyksXG4gIHZhbHVlc0luOiByZXF1aXJlKCcuL3NyYy92YWx1ZXNJbicpLFxuICB2aWV3OiByZXF1aXJlKCcuL3NyYy92aWV3JyksXG4gIHdoZW46IHJlcXVpcmUoJy4vc3JjL3doZW4nKSxcbiAgd2hlcmU6IHJlcXVpcmUoJy4vc3JjL3doZXJlJyksXG4gIHdoZXJlRXE6IHJlcXVpcmUoJy4vc3JjL3doZXJlRXEnKSxcbiAgd2l0aG91dDogcmVxdWlyZSgnLi9zcmMvd2l0aG91dCcpLFxuICB4cHJvZDogcmVxdWlyZSgnLi9zcmMveHByb2QnKSxcbiAgemlwOiByZXF1aXJlKCcuL3NyYy96aXAnKSxcbiAgemlwT2JqOiByZXF1aXJlKCcuL3NyYy96aXBPYmonKSxcbiAgemlwV2l0aDogcmVxdWlyZSgnLi9zcmMvemlwV2l0aCcpXG59O1xuIiwidmFyIGFsd2F5cyA9IHJlcXVpcmUoJy4vYWx3YXlzJyk7XG5cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHRoYXQgYWx3YXlzIHJldHVybnMgYGZhbHNlYC4gQW55IHBhc3NlZCBpbiBwYXJhbWV0ZXJzIGFyZSBpZ25vcmVkLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjkuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnICogLT4gQm9vbGVhblxuICogQHBhcmFtIHsqfVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBzZWUgUi5hbHdheXMsIFIuVFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuRigpOyAvLz0+IGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gYWx3YXlzKGZhbHNlKTtcbiIsInZhciBhbHdheXMgPSByZXF1aXJlKCcuL2Fsd2F5cycpO1xuXG5cbi8qKlxuICogQSBmdW5jdGlvbiB0aGF0IGFsd2F5cyByZXR1cm5zIGB0cnVlYC4gQW55IHBhc3NlZCBpbiBwYXJhbWV0ZXJzIGFyZSBpZ25vcmVkLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjkuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnICogLT4gQm9vbGVhblxuICogQHBhcmFtIHsqfVxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBzZWUgUi5hbHdheXMsIFIuRlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuVCgpOyAvLz0+IHRydWVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhbHdheXModHJ1ZSk7XG4iLCIvKipcbiAqIEEgc3BlY2lhbCBwbGFjZWhvbGRlciB2YWx1ZSB1c2VkIHRvIHNwZWNpZnkgXCJnYXBzXCIgd2l0aGluIGN1cnJpZWQgZnVuY3Rpb25zLFxuICogYWxsb3dpbmcgcGFydGlhbCBhcHBsaWNhdGlvbiBvZiBhbnkgY29tYmluYXRpb24gb2YgYXJndW1lbnRzLCByZWdhcmRsZXNzIG9mXG4gKiB0aGVpciBwb3NpdGlvbnMuXG4gKlxuICogSWYgYGdgIGlzIGEgY3VycmllZCB0ZXJuYXJ5IGZ1bmN0aW9uIGFuZCBgX2AgaXMgYFIuX19gLCB0aGUgZm9sbG93aW5nIGFyZVxuICogZXF1aXZhbGVudDpcbiAqXG4gKiAgIC0gYGcoMSwgMiwgMylgXG4gKiAgIC0gYGcoXywgMiwgMykoMSlgXG4gKiAgIC0gYGcoXywgXywgMykoMSkoMilgXG4gKiAgIC0gYGcoXywgXywgMykoMSwgMilgXG4gKiAgIC0gYGcoXywgMiwgXykoMSwgMylgXG4gKiAgIC0gYGcoXywgMikoMSkoMylgXG4gKiAgIC0gYGcoXywgMikoMSwgMylgXG4gKiAgIC0gYGcoXywgMikoXywgMykoMSlgXG4gKlxuICogQGNvbnN0YW50XG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjYuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGdyZWV0ID0gUi5yZXBsYWNlKCd7bmFtZX0nLCBSLl9fLCAnSGVsbG8sIHtuYW1lfSEnKTtcbiAqICAgICAgZ3JlZXQoJ0FsaWNlJyk7IC8vPT4gJ0hlbGxvLCBBbGljZSEnXG4gKi9cbm1vZHVsZS5leHBvcnRzID0geydAQGZ1bmN0aW9uYWwvcGxhY2Vob2xkZXInOiB0cnVlfTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBBZGRzIHR3byB2YWx1ZXMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IE51bWJlclxuICogQHBhcmFtIHtOdW1iZXJ9IGFcbiAqIEBwYXJhbSB7TnVtYmVyfSBiXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAc2VlIFIuc3VidHJhY3RcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmFkZCgyLCAzKTsgICAgICAgLy89PiAgNVxuICogICAgICBSLmFkZCg3KSgxMCk7ICAgICAgLy89PiAxN1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gYWRkKGEsIGIpIHtcbiAgcmV0dXJuIE51bWJlcihhKSArIE51bWJlcihiKTtcbn0pO1xuIiwidmFyIF9jb25jYXQgPSByZXF1aXJlKCcuL2ludGVybmFsL19jb25jYXQnKTtcbnZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgY3VycnlOID0gcmVxdWlyZSgnLi9jdXJyeU4nKTtcblxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgbGlzdCBpdGVyYXRpb24gZnVuY3Rpb24gZnJvbSBhbiBleGlzdGluZyBvbmUgYnkgYWRkaW5nIHR3byBuZXdcbiAqIHBhcmFtZXRlcnMgdG8gaXRzIGNhbGxiYWNrIGZ1bmN0aW9uOiB0aGUgY3VycmVudCBpbmRleCwgYW5kIHRoZSBlbnRpcmUgbGlzdC5cbiAqXG4gKiBUaGlzIHdvdWxkIHR1cm4sIGZvciBpbnN0YW5jZSwgUmFtZGEncyBzaW1wbGUgYG1hcGAgZnVuY3Rpb24gaW50byBvbmUgdGhhdFxuICogbW9yZSBjbG9zZWx5IHJlc2VtYmxlcyBgQXJyYXkucHJvdG90eXBlLm1hcGAuIE5vdGUgdGhhdCB0aGlzIHdpbGwgb25seSB3b3JrXG4gKiBmb3IgZnVuY3Rpb25zIGluIHdoaWNoIHRoZSBpdGVyYXRpb24gY2FsbGJhY2sgZnVuY3Rpb24gaXMgdGhlIGZpcnN0XG4gKiBwYXJhbWV0ZXIsIGFuZCB3aGVyZSB0aGUgbGlzdCBpcyB0aGUgbGFzdCBwYXJhbWV0ZXIuIChUaGlzIGxhdHRlciBtaWdodCBiZVxuICogdW5pbXBvcnRhbnQgaWYgdGhlIGxpc3QgcGFyYW1ldGVyIGlzIG5vdCB1c2VkLilcbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnICgoYSAuLi4gLT4gYikgLi4uIC0+IFthXSAtPiAqKSAtPiAoYSAuLi4sIEludCwgW2FdIC0+IGIpIC4uLiAtPiBbYV0gLT4gKilcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEEgbGlzdCBpdGVyYXRpb24gZnVuY3Rpb24gdGhhdCBkb2VzIG5vdCBwYXNzIGluZGV4IG9yIGxpc3QgdG8gaXRzIGNhbGxiYWNrXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQW4gYWx0ZXJlZCBsaXN0IGl0ZXJhdGlvbiBmdW5jdGlvbiB0aGF0IHBhc3NlcyAoaXRlbSwgaW5kZXgsIGxpc3QpIHRvIGl0cyBjYWxsYmFja1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBtYXBJbmRleGVkID0gUi5hZGRJbmRleChSLm1hcCk7XG4gKiAgICAgIG1hcEluZGV4ZWQoKHZhbCwgaWR4KSA9PiBpZHggKyAnLScgKyB2YWwsIFsnZicsICdvJywgJ28nLCAnYicsICdhJywgJ3InXSk7XG4gKiAgICAgIC8vPT4gWycwLWYnLCAnMS1vJywgJzItbycsICczLWInLCAnNC1hJywgJzUtciddXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBhZGRJbmRleChmbikge1xuICByZXR1cm4gY3VycnlOKGZuLmxlbmd0aCwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGlkeCA9IDA7XG4gICAgdmFyIG9yaWdGbiA9IGFyZ3VtZW50c1swXTtcbiAgICB2YXIgbGlzdCA9IGFyZ3VtZW50c1thcmd1bWVudHMubGVuZ3RoIC0gMV07XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIGFyZ3NbMF0gPSBmdW5jdGlvbigpIHtcbiAgICAgIHZhciByZXN1bHQgPSBvcmlnRm4uYXBwbHkodGhpcywgX2NvbmNhdChhcmd1bWVudHMsIFtpZHgsIGxpc3RdKSk7XG4gICAgICBpZHggKz0gMTtcbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfTtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncyk7XG4gIH0pO1xufSk7XG4iLCJ2YXIgX2NvbmNhdCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2NvbmNhdCcpO1xudmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcblxuXG4vKipcbiAqIEFwcGxpZXMgYSBmdW5jdGlvbiB0byB0aGUgdmFsdWUgYXQgdGhlIGdpdmVuIGluZGV4IG9mIGFuIGFycmF5LCByZXR1cm5pbmcgYVxuICogbmV3IGNvcHkgb2YgdGhlIGFycmF5IHdpdGggdGhlIGVsZW1lbnQgYXQgdGhlIGdpdmVuIGluZGV4IHJlcGxhY2VkIHdpdGggdGhlXG4gKiByZXN1bHQgb2YgdGhlIGZ1bmN0aW9uIGFwcGxpY2F0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE0LjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIChhIC0+IGEpIC0+IE51bWJlciAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gYXBwbHkuXG4gKiBAcGFyYW0ge051bWJlcn0gaWR4IFRoZSBpbmRleC5cbiAqIEBwYXJhbSB7QXJyYXl8QXJndW1lbnRzfSBsaXN0IEFuIGFycmF5LWxpa2Ugb2JqZWN0IHdob3NlIHZhbHVlXG4gKiAgICAgICAgYXQgdGhlIHN1cHBsaWVkIGluZGV4IHdpbGwgYmUgcmVwbGFjZWQuXG4gKiBAcmV0dXJuIHtBcnJheX0gQSBjb3B5IG9mIHRoZSBzdXBwbGllZCBhcnJheS1saWtlIG9iamVjdCB3aXRoXG4gKiAgICAgICAgIHRoZSBlbGVtZW50IGF0IGluZGV4IGBpZHhgIHJlcGxhY2VkIHdpdGggdGhlIHZhbHVlXG4gKiAgICAgICAgIHJldHVybmVkIGJ5IGFwcGx5aW5nIGBmbmAgdG8gdGhlIGV4aXN0aW5nIGVsZW1lbnQuXG4gKiBAc2VlIFIudXBkYXRlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5hZGp1c3QoUi5hZGQoMTApLCAxLCBbMSwgMiwgM10pOyAgICAgLy89PiBbMSwgMTIsIDNdXG4gKiAgICAgIFIuYWRqdXN0KFIuYWRkKDEwKSkoMSkoWzEsIDIsIDNdKTsgICAgIC8vPT4gWzEsIDEyLCAzXVxuICogQHN5bWIgUi5hZGp1c3QoZiwgLTEsIFthLCBiXSkgPSBbYSwgZihiKV1cbiAqIEBzeW1iIFIuYWRqdXN0KGYsIDAsIFthLCBiXSkgPSBbZihhKSwgYl1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIGFkanVzdChmbiwgaWR4LCBsaXN0KSB7XG4gIGlmIChpZHggPj0gbGlzdC5sZW5ndGggfHwgaWR4IDwgLWxpc3QubGVuZ3RoKSB7XG4gICAgcmV0dXJuIGxpc3Q7XG4gIH1cbiAgdmFyIHN0YXJ0ID0gaWR4IDwgMCA/IGxpc3QubGVuZ3RoIDogMDtcbiAgdmFyIF9pZHggPSBzdGFydCArIGlkeDtcbiAgdmFyIF9saXN0ID0gX2NvbmNhdChsaXN0KTtcbiAgX2xpc3RbX2lkeF0gPSBmbihsaXN0W19pZHhdKTtcbiAgcmV0dXJuIF9saXN0O1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9kaXNwYXRjaGFibGUgPSByZXF1aXJlKCcuL2ludGVybmFsL19kaXNwYXRjaGFibGUnKTtcbnZhciBfeGFsbCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3hhbGwnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIGFsbCBlbGVtZW50cyBvZiB0aGUgbGlzdCBtYXRjaCB0aGUgcHJlZGljYXRlLCBgZmFsc2VgIGlmXG4gKiB0aGVyZSBhcmUgYW55IHRoYXQgZG9uJ3QuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYGFsbGAgbWV0aG9kIG9mIHRoZSBzZWNvbmQgYXJndW1lbnQsIGlmIHByZXNlbnQuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gW2FdIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBhcnJheSB0byBjb25zaWRlci5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgcHJlZGljYXRlIGlzIHNhdGlzZmllZCBieSBldmVyeSBlbGVtZW50LCBgZmFsc2VgXG4gKiAgICAgICAgIG90aGVyd2lzZS5cbiAqIEBzZWUgUi5hbnksIFIubm9uZSwgUi50cmFuc2R1Y2VcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgZXF1YWxzMyA9IFIuZXF1YWxzKDMpO1xuICogICAgICBSLmFsbChlcXVhbHMzKShbMywgMywgMywgM10pOyAvLz0+IHRydWVcbiAqICAgICAgUi5hbGwoZXF1YWxzMykoWzMsIDMsIDEsIDNdKTsgLy89PiBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoX2Rpc3BhdGNoYWJsZShbJ2FsbCddLCBfeGFsbCwgZnVuY3Rpb24gYWxsKGZuLCBsaXN0KSB7XG4gIHZhciBpZHggPSAwO1xuICB3aGlsZSAoaWR4IDwgbGlzdC5sZW5ndGgpIHtcbiAgICBpZiAoIWZuKGxpc3RbaWR4XSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIGN1cnJ5TiA9IHJlcXVpcmUoJy4vY3VycnlOJyk7XG52YXIgbWF4ID0gcmVxdWlyZSgnLi9tYXgnKTtcbnZhciBwbHVjayA9IHJlcXVpcmUoJy4vcGx1Y2snKTtcbnZhciByZWR1Y2UgPSByZXF1aXJlKCcuL3JlZHVjZScpO1xuXG5cbi8qKlxuICogVGFrZXMgYSBsaXN0IG9mIHByZWRpY2F0ZXMgYW5kIHJldHVybnMgYSBwcmVkaWNhdGUgdGhhdCByZXR1cm5zIHRydWUgZm9yIGFcbiAqIGdpdmVuIGxpc3Qgb2YgYXJndW1lbnRzIGlmIGV2ZXJ5IG9uZSBvZiB0aGUgcHJvdmlkZWQgcHJlZGljYXRlcyBpcyBzYXRpc2ZpZWRcbiAqIGJ5IHRob3NlIGFyZ3VtZW50cy5cbiAqXG4gKiBUaGUgZnVuY3Rpb24gcmV0dXJuZWQgaXMgYSBjdXJyaWVkIGZ1bmN0aW9uIHdob3NlIGFyaXR5IG1hdGNoZXMgdGhhdCBvZiB0aGVcbiAqIGhpZ2hlc3QtYXJpdHkgcHJlZGljYXRlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjkuMFxuICogQGNhdGVnb3J5IExvZ2ljXG4gKiBAc2lnIFsoKi4uLiAtPiBCb29sZWFuKV0gLT4gKCouLi4gLT4gQm9vbGVhbilcbiAqIEBwYXJhbSB7QXJyYXl9IHByZWRpY2F0ZXMgQW4gYXJyYXkgb2YgcHJlZGljYXRlcyB0byBjaGVja1xuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBjb21iaW5lZCBwcmVkaWNhdGVcbiAqIEBzZWUgUi5hbnlQYXNzXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGlzUXVlZW4gPSBSLnByb3BFcSgncmFuaycsICdRJyk7XG4gKiAgICAgIHZhciBpc1NwYWRlID0gUi5wcm9wRXEoJ3N1aXQnLCAn4pmg77iOJyk7XG4gKiAgICAgIHZhciBpc1F1ZWVuT2ZTcGFkZXMgPSBSLmFsbFBhc3MoW2lzUXVlZW4sIGlzU3BhZGVdKTtcbiAqXG4gKiAgICAgIGlzUXVlZW5PZlNwYWRlcyh7cmFuazogJ1EnLCBzdWl0OiAn4pmj77iOJ30pOyAvLz0+IGZhbHNlXG4gKiAgICAgIGlzUXVlZW5PZlNwYWRlcyh7cmFuazogJ1EnLCBzdWl0OiAn4pmg77iOJ30pOyAvLz0+IHRydWVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGFsbFBhc3MocHJlZHMpIHtcbiAgcmV0dXJuIGN1cnJ5TihyZWR1Y2UobWF4LCAwLCBwbHVjaygnbGVuZ3RoJywgcHJlZHMpKSwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGlkeCA9IDA7XG4gICAgdmFyIGxlbiA9IHByZWRzLmxlbmd0aDtcbiAgICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgICBpZiAoIXByZWRzW2lkeF0uYXBwbHkodGhpcywgYXJndW1lbnRzKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBpZHggKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHRydWU7XG4gIH0pO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgYWx3YXlzIHJldHVybnMgdGhlIGdpdmVuIHZhbHVlLiBOb3RlIHRoYXQgZm9yXG4gKiBub24tcHJpbWl0aXZlcyB0aGUgdmFsdWUgcmV0dXJuZWQgaXMgYSByZWZlcmVuY2UgdG8gdGhlIG9yaWdpbmFsIHZhbHVlLlxuICpcbiAqIFRoaXMgZnVuY3Rpb24gaXMga25vd24gYXMgYGNvbnN0YCwgYGNvbnN0YW50YCwgb3IgYEtgIChmb3IgSyBjb21iaW5hdG9yKSBpblxuICogb3RoZXIgbGFuZ3VhZ2VzIGFuZCBsaWJyYXJpZXMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgYSAtPiAoKiAtPiBhKVxuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHdyYXAgaW4gYSBmdW5jdGlvblxuICogQHJldHVybiB7RnVuY3Rpb259IEEgRnVuY3Rpb24gOjogKiAtPiB2YWwuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHQgPSBSLmFsd2F5cygnVGVlJyk7XG4gKiAgICAgIHQoKTsgLy89PiAnVGVlJ1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gYWx3YXlzKHZhbCkge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIGJvdGggYXJndW1lbnRzIGFyZSBgdHJ1ZWA7IGBmYWxzZWAgb3RoZXJ3aXNlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExvZ2ljXG4gKiBAc2lnIGEgLT4gYiAtPiBhIHwgYlxuICogQHBhcmFtIHtBbnl9IGFcbiAqIEBwYXJhbSB7QW55fSBiXG4gKiBAcmV0dXJuIHtBbnl9IHRoZSBmaXJzdCBhcmd1bWVudCBpZiBpdCBpcyBmYWxzeSwgb3RoZXJ3aXNlIHRoZSBzZWNvbmQgYXJndW1lbnQuXG4gKiBAc2VlIFIuYm90aFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuYW5kKHRydWUsIHRydWUpOyAvLz0+IHRydWVcbiAqICAgICAgUi5hbmQodHJ1ZSwgZmFsc2UpOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIuYW5kKGZhbHNlLCB0cnVlKTsgLy89PiBmYWxzZVxuICogICAgICBSLmFuZChmYWxzZSwgZmFsc2UpOyAvLz0+IGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBhbmQoYSwgYikge1xuICByZXR1cm4gYSAmJiBiO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9kaXNwYXRjaGFibGUgPSByZXF1aXJlKCcuL2ludGVybmFsL19kaXNwYXRjaGFibGUnKTtcbnZhciBfeGFueSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3hhbnknKTtcblxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIGF0IGxlYXN0IG9uZSBvZiBlbGVtZW50cyBvZiB0aGUgbGlzdCBtYXRjaCB0aGUgcHJlZGljYXRlLFxuICogYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYGFueWAgbWV0aG9kIG9mIHRoZSBzZWNvbmQgYXJndW1lbnQsIGlmIHByZXNlbnQuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gW2FdIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBhcnJheSB0byBjb25zaWRlci5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgcHJlZGljYXRlIGlzIHNhdGlzZmllZCBieSBhdCBsZWFzdCBvbmUgZWxlbWVudCwgYGZhbHNlYFxuICogICAgICAgICBvdGhlcndpc2UuXG4gKiBAc2VlIFIuYWxsLCBSLm5vbmUsIFIudHJhbnNkdWNlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGxlc3NUaGFuMCA9IFIuZmxpcChSLmx0KSgwKTtcbiAqICAgICAgdmFyIGxlc3NUaGFuMiA9IFIuZmxpcChSLmx0KSgyKTtcbiAqICAgICAgUi5hbnkobGVzc1RoYW4wKShbMSwgMl0pOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIuYW55KGxlc3NUaGFuMikoWzEsIDJdKTsgLy89PiB0cnVlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihfZGlzcGF0Y2hhYmxlKFsnYW55J10sIF94YW55LCBmdW5jdGlvbiBhbnkoZm4sIGxpc3QpIHtcbiAgdmFyIGlkeCA9IDA7XG4gIHdoaWxlIChpZHggPCBsaXN0Lmxlbmd0aCkge1xuICAgIGlmIChmbihsaXN0W2lkeF0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSkpO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBjdXJyeU4gPSByZXF1aXJlKCcuL2N1cnJ5TicpO1xudmFyIG1heCA9IHJlcXVpcmUoJy4vbWF4Jyk7XG52YXIgcGx1Y2sgPSByZXF1aXJlKCcuL3BsdWNrJyk7XG52YXIgcmVkdWNlID0gcmVxdWlyZSgnLi9yZWR1Y2UnKTtcblxuXG4vKipcbiAqIFRha2VzIGEgbGlzdCBvZiBwcmVkaWNhdGVzIGFuZCByZXR1cm5zIGEgcHJlZGljYXRlIHRoYXQgcmV0dXJucyB0cnVlIGZvciBhXG4gKiBnaXZlbiBsaXN0IG9mIGFyZ3VtZW50cyBpZiBhdCBsZWFzdCBvbmUgb2YgdGhlIHByb3ZpZGVkIHByZWRpY2F0ZXMgaXNcbiAqIHNhdGlzZmllZCBieSB0aG9zZSBhcmd1bWVudHMuXG4gKlxuICogVGhlIGZ1bmN0aW9uIHJldHVybmVkIGlzIGEgY3VycmllZCBmdW5jdGlvbiB3aG9zZSBhcml0eSBtYXRjaGVzIHRoYXQgb2YgdGhlXG4gKiBoaWdoZXN0LWFyaXR5IHByZWRpY2F0ZS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC45LjBcbiAqIEBjYXRlZ29yeSBMb2dpY1xuICogQHNpZyBbKCouLi4gLT4gQm9vbGVhbildIC0+ICgqLi4uIC0+IEJvb2xlYW4pXG4gKiBAcGFyYW0ge0FycmF5fSBwcmVkaWNhdGVzIEFuIGFycmF5IG9mIHByZWRpY2F0ZXMgdG8gY2hlY2tcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgY29tYmluZWQgcHJlZGljYXRlXG4gKiBAc2VlIFIuYWxsUGFzc1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBpc0NsdWIgPSBSLnByb3BFcSgnc3VpdCcsICfimaMnKTtcbiAqICAgICAgdmFyIGlzU3BhZGUgPSBSLnByb3BFcSgnc3VpdCcsICfimaAnKTtcbiAqICAgICAgdmFyIGlzQmxhY2tDYXJkID0gUi5hbnlQYXNzKFtpc0NsdWIsIGlzU3BhZGVdKTtcbiAqXG4gKiAgICAgIGlzQmxhY2tDYXJkKHtyYW5rOiAnMTAnLCBzdWl0OiAn4pmjJ30pOyAvLz0+IHRydWVcbiAqICAgICAgaXNCbGFja0NhcmQoe3Jhbms6ICdRJywgc3VpdDogJ+KZoCd9KTsgLy89PiB0cnVlXG4gKiAgICAgIGlzQmxhY2tDYXJkKHtyYW5rOiAnUScsIHN1aXQ6ICfimaYnfSk7IC8vPT4gZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGFueVBhc3MocHJlZHMpIHtcbiAgcmV0dXJuIGN1cnJ5TihyZWR1Y2UobWF4LCAwLCBwbHVjaygnbGVuZ3RoJywgcHJlZHMpKSwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGlkeCA9IDA7XG4gICAgdmFyIGxlbiA9IHByZWRzLmxlbmd0aDtcbiAgICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgICBpZiAocHJlZHNbaWR4XS5hcHBseSh0aGlzLCBhcmd1bWVudHMpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWR4ICs9IDE7XG4gICAgfVxuICAgIHJldHVybiBmYWxzZTtcbiAgfSk7XG59KTtcbiIsInZhciBfY29uY2F0ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY29uY2F0Jyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9yZWR1Y2UgPSByZXF1aXJlKCcuL2ludGVybmFsL19yZWR1Y2UnKTtcbnZhciBtYXAgPSByZXF1aXJlKCcuL21hcCcpO1xuXG5cbi8qKlxuICogYXAgYXBwbGllcyBhIGxpc3Qgb2YgZnVuY3Rpb25zIHRvIGEgbGlzdCBvZiB2YWx1ZXMuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYGFwYCBtZXRob2Qgb2YgdGhlIHNlY29uZCBhcmd1bWVudCwgaWYgcHJlc2VudC4gQWxzb1xuICogdHJlYXRzIGN1cnJpZWQgZnVuY3Rpb25zIGFzIGFwcGxpY2F0aXZlcy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4zLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyBbYSAtPiBiXSAtPiBbYV0gLT4gW2JdXG4gKiBAc2lnIEFwcGx5IGYgPT4gZiAoYSAtPiBiKSAtPiBmIGEgLT4gZiBiXG4gKiBAcGFyYW0ge0FycmF5fSBmbnMgQW4gYXJyYXkgb2YgZnVuY3Rpb25zXG4gKiBAcGFyYW0ge0FycmF5fSB2cyBBbiBhcnJheSBvZiB2YWx1ZXNcbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBvZiByZXN1bHRzIG9mIGFwcGx5aW5nIGVhY2ggb2YgYGZuc2AgdG8gYWxsIG9mIGB2c2AgaW4gdHVybi5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmFwKFtSLm11bHRpcGx5KDIpLCBSLmFkZCgzKV0sIFsxLDIsM10pOyAvLz0+IFsyLCA0LCA2LCA0LCA1LCA2XVxuICogICAgICBSLmFwKFtSLmNvbmNhdCgndGFzdHkgJyksIFIudG9VcHBlcl0sIFsncGl6emEnLCAnc2FsYWQnXSk7IC8vPT4gW1widGFzdHkgcGl6emFcIiwgXCJ0YXN0eSBzYWxhZFwiLCBcIlBJWlpBXCIsIFwiU0FMQURcIl1cbiAqIEBzeW1iIFIuYXAoW2YsIGddLCBbYSwgYl0pID0gW2YoYSksIGYoYiksIGcoYSksIGcoYildXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBhcChhcHBsaWNhdGl2ZSwgZm4pIHtcbiAgcmV0dXJuIChcbiAgICB0eXBlb2YgYXBwbGljYXRpdmUuYXAgPT09ICdmdW5jdGlvbicgP1xuICAgICAgYXBwbGljYXRpdmUuYXAoZm4pIDpcbiAgICB0eXBlb2YgYXBwbGljYXRpdmUgPT09ICdmdW5jdGlvbicgP1xuICAgICAgZnVuY3Rpb24oeCkgeyByZXR1cm4gYXBwbGljYXRpdmUoeCkoZm4oeCkpOyB9IDpcbiAgICAvLyBlbHNlXG4gICAgICBfcmVkdWNlKGZ1bmN0aW9uKGFjYywgZikgeyByZXR1cm4gX2NvbmNhdChhY2MsIG1hcChmLCBmbikpOyB9LCBbXSwgYXBwbGljYXRpdmUpXG4gICk7XG59KTtcbiIsInZhciBfYXBlcnR1cmUgPSByZXF1aXJlKCcuL2ludGVybmFsL19hcGVydHVyZScpO1xudmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfZGlzcGF0Y2hhYmxlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fZGlzcGF0Y2hhYmxlJyk7XG52YXIgX3hhcGVydHVyZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3hhcGVydHVyZScpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBsaXN0LCBjb21wb3NlZCBvZiBuLXR1cGxlcyBvZiBjb25zZWN1dGl2ZSBlbGVtZW50cyBJZiBgbmAgaXNcbiAqIGdyZWF0ZXIgdGhhbiB0aGUgbGVuZ3RoIG9mIHRoZSBsaXN0LCBhbiBlbXB0eSBsaXN0IGlzIHJldHVybmVkLlxuICpcbiAqIEFjdHMgYXMgYSB0cmFuc2R1Y2VyIGlmIGEgdHJhbnNmb3JtZXIgaXMgZ2l2ZW4gaW4gbGlzdCBwb3NpdGlvbi5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xMi4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBOdW1iZXIgLT4gW2FdIC0+IFtbYV1dXG4gKiBAcGFyYW0ge051bWJlcn0gbiBUaGUgc2l6ZSBvZiB0aGUgdHVwbGVzIHRvIGNyZWF0ZVxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgbGlzdCB0byBzcGxpdCBpbnRvIGBuYC1sZW5ndGggdHVwbGVzXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIHJlc3VsdGluZyBsaXN0IG9mIGBuYC1sZW5ndGggdHVwbGVzXG4gKiBAc2VlIFIudHJhbnNkdWNlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5hcGVydHVyZSgyLCBbMSwgMiwgMywgNCwgNV0pOyAvLz0+IFtbMSwgMl0sIFsyLCAzXSwgWzMsIDRdLCBbNCwgNV1dXG4gKiAgICAgIFIuYXBlcnR1cmUoMywgWzEsIDIsIDMsIDQsIDVdKTsgLy89PiBbWzEsIDIsIDNdLCBbMiwgMywgNF0sIFszLCA0LCA1XV1cbiAqICAgICAgUi5hcGVydHVyZSg3LCBbMSwgMiwgMywgNCwgNV0pOyAvLz0+IFtdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihfZGlzcGF0Y2hhYmxlKFtdLCBfeGFwZXJ0dXJlLCBfYXBlcnR1cmUpKTtcbiIsInZhciBfY29uY2F0ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY29uY2F0Jyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBsaXN0IGNvbnRhaW5pbmcgdGhlIGNvbnRlbnRzIG9mIHRoZSBnaXZlbiBsaXN0LCBmb2xsb3dlZCBieVxuICogdGhlIGdpdmVuIGVsZW1lbnQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBhIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7Kn0gZWwgVGhlIGVsZW1lbnQgdG8gYWRkIHRvIHRoZSBlbmQgb2YgdGhlIG5ldyBsaXN0LlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgbGlzdCBvZiBlbGVtZW50cyB0byBhZGQgYSBuZXcgaXRlbSB0by5cbiAqICAgICAgICBsaXN0LlxuICogQHJldHVybiB7QXJyYXl9IEEgbmV3IGxpc3QgY29udGFpbmluZyB0aGUgZWxlbWVudHMgb2YgdGhlIG9sZCBsaXN0IGZvbGxvd2VkIGJ5IGBlbGAuXG4gKiBAc2VlIFIucHJlcGVuZFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuYXBwZW5kKCd0ZXN0cycsIFsnd3JpdGUnLCAnbW9yZSddKTsgLy89PiBbJ3dyaXRlJywgJ21vcmUnLCAndGVzdHMnXVxuICogICAgICBSLmFwcGVuZCgndGVzdHMnLCBbXSk7IC8vPT4gWyd0ZXN0cyddXG4gKiAgICAgIFIuYXBwZW5kKFsndGVzdHMnXSwgWyd3cml0ZScsICdtb3JlJ10pOyAvLz0+IFsnd3JpdGUnLCAnbW9yZScsIFsndGVzdHMnXV1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGFwcGVuZChlbCwgbGlzdCkge1xuICByZXR1cm4gX2NvbmNhdChsaXN0LCBbZWxdKTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIEFwcGxpZXMgZnVuY3Rpb24gYGZuYCB0byB0aGUgYXJndW1lbnQgbGlzdCBgYXJnc2AuIFRoaXMgaXMgdXNlZnVsIGZvclxuICogY3JlYXRpbmcgYSBmaXhlZC1hcml0eSBmdW5jdGlvbiBmcm9tIGEgdmFyaWFkaWMgZnVuY3Rpb24uIGBmbmAgc2hvdWxkIGJlIGFcbiAqIGJvdW5kIGZ1bmN0aW9uIGlmIGNvbnRleHQgaXMgc2lnbmlmaWNhbnQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuNy4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKCouLi4gLT4gYSkgLT4gWypdIC0+IGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB3aGljaCB3aWxsIGJlIGNhbGxlZCB3aXRoIGBhcmdzYFxuICogQHBhcmFtIHtBcnJheX0gYXJncyBUaGUgYXJndW1lbnRzIHRvIGNhbGwgYGZuYCB3aXRoXG4gKiBAcmV0dXJuIHsqfSByZXN1bHQgVGhlIHJlc3VsdCwgZXF1aXZhbGVudCB0byBgZm4oLi4uYXJncylgXG4gKiBAc2VlIFIuY2FsbCwgUi51bmFwcGx5XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIG51bXMgPSBbMSwgMiwgMywgLTk5LCA0MiwgNiwgN107XG4gKiAgICAgIFIuYXBwbHkoTWF0aC5tYXgsIG51bXMpOyAvLz0+IDQyXG4gKiBAc3ltYiBSLmFwcGx5KGYsIFthLCBiLCBjXSkgPSBmKGEsIGIsIGMpXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBhcHBseShmbiwgYXJncykge1xuICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncyk7XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgYXBwbHkgPSByZXF1aXJlKCcuL2FwcGx5Jyk7XG52YXIgY3VycnlOID0gcmVxdWlyZSgnLi9jdXJyeU4nKTtcbnZhciBtYXAgPSByZXF1aXJlKCcuL21hcCcpO1xudmFyIG1heCA9IHJlcXVpcmUoJy4vbWF4Jyk7XG52YXIgcGx1Y2sgPSByZXF1aXJlKCcuL3BsdWNrJyk7XG52YXIgcmVkdWNlID0gcmVxdWlyZSgnLi9yZWR1Y2UnKTtcbnZhciB2YWx1ZXMgPSByZXF1aXJlKCcuL3ZhbHVlcycpO1xuXG5cbi8qKlxuICogR2l2ZW4gYSBzcGVjIG9iamVjdCByZWN1cnNpdmVseSBtYXBwaW5nIHByb3BlcnRpZXMgdG8gZnVuY3Rpb25zLCBjcmVhdGVzIGFcbiAqIGZ1bmN0aW9uIHByb2R1Y2luZyBhbiBvYmplY3Qgb2YgdGhlIHNhbWUgc3RydWN0dXJlLCBieSBtYXBwaW5nIGVhY2ggcHJvcGVydHlcbiAqIHRvIHRoZSByZXN1bHQgb2YgY2FsbGluZyBpdHMgYXNzb2NpYXRlZCBmdW5jdGlvbiB3aXRoIHRoZSBzdXBwbGllZCBhcmd1bWVudHMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMjAuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnIHtrOiAoKGEsIGIsIC4uLiwgbSkgLT4gdil9IC0+ICgoYSwgYiwgLi4uLCBtKSAtPiB7azogdn0pXG4gKiBAcGFyYW0ge09iamVjdH0gc3BlYyBhbiBvYmplY3QgcmVjdXJzaXZlbHkgbWFwcGluZyBwcm9wZXJ0aWVzIHRvIGZ1bmN0aW9ucyBmb3JcbiAqICAgICAgICBwcm9kdWNpbmcgdGhlIHZhbHVlcyBmb3IgdGhlc2UgcHJvcGVydGllcy5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhbiBvYmplY3Qgb2YgdGhlIHNhbWUgc3RydWN0dXJlXG4gKiBhcyBgc3BlYycsIHdpdGggZWFjaCBwcm9wZXJ0eSBzZXQgdG8gdGhlIHZhbHVlIHJldHVybmVkIGJ5IGNhbGxpbmcgaXRzXG4gKiBhc3NvY2lhdGVkIGZ1bmN0aW9uIHdpdGggdGhlIHN1cHBsaWVkIGFyZ3VtZW50cy5cbiAqIEBzZWUgUi5jb252ZXJnZSwgUi5qdXh0XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGdldE1ldHJpY3MgPSBSLmFwcGx5U3BlYyh7XG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc3VtOiBSLmFkZCxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZXN0ZWQ6IHsgbXVsOiBSLm11bHRpcGx5IH1cbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAqICAgICAgZ2V0TWV0cmljcygyLCA0KTsgLy8gPT4geyBzdW06IDYsIG5lc3RlZDogeyBtdWw6IDggfSB9XG4gKiBAc3ltYiBSLmFwcGx5U3BlYyh7IHg6IGYsIHk6IHsgejogZyB9IH0pKGEsIGIpID0geyB4OiBmKGEsIGIpLCB5OiB7IHo6IGcoYSwgYikgfSB9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBhcHBseVNwZWMoc3BlYykge1xuICBzcGVjID0gbWFwKGZ1bmN0aW9uKHYpIHsgcmV0dXJuIHR5cGVvZiB2ID09ICdmdW5jdGlvbicgPyB2IDogYXBwbHlTcGVjKHYpOyB9LFxuICAgICAgICAgICAgIHNwZWMpO1xuICByZXR1cm4gY3VycnlOKHJlZHVjZShtYXgsIDAsIHBsdWNrKCdsZW5ndGgnLCB2YWx1ZXMoc3BlYykpKSxcbiAgICAgICAgICAgICAgICBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBhcmdzID0gYXJndW1lbnRzO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIG1hcChmdW5jdGlvbihmKSB7IHJldHVybiBhcHBseShmLCBhcmdzKTsgfSwgc3BlYyk7XG4gICAgICAgICAgICAgICAgfSk7XG59KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG5cblxuLyoqXG4gKiBNYWtlcyBhbiBhc2NlbmRpbmcgY29tcGFyYXRvciBmdW5jdGlvbiBvdXQgb2YgYSBmdW5jdGlvbiB0aGF0IHJldHVybnMgYSB2YWx1ZVxuICogdGhhdCBjYW4gYmUgY29tcGFyZWQgd2l0aCBgPGAgYW5kIGA+YC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4yMy4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgT3JkIGIgPT4gKGEgLT4gYikgLT4gYSAtPiBhIC0+IE51bWJlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gQSBmdW5jdGlvbiBvZiBhcml0eSBvbmUgdGhhdCByZXR1cm5zIGEgdmFsdWUgdGhhdCBjYW4gYmUgY29tcGFyZWRcbiAqIEBwYXJhbSB7Kn0gYSBUaGUgZmlyc3QgaXRlbSB0byBiZSBjb21wYXJlZC5cbiAqIEBwYXJhbSB7Kn0gYiBUaGUgc2Vjb25kIGl0ZW0gdG8gYmUgY29tcGFyZWQuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IGAtMWAgaWYgZm4oYSkgPCBmbihiKSwgYDFgIGlmIGZuKGIpIDwgZm4oYSksIG90aGVyd2lzZSBgMGBcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgYnlBZ2UgPSBSLmFzY2VuZChSLnByb3AoJ2FnZScpKTtcbiAqICAgICAgdmFyIHBlb3BsZSA9IFtcbiAqICAgICAgICAvLyAuLi5cbiAqICAgICAgXTtcbiAqICAgICAgdmFyIHBlb3BsZUJ5WW91bmdlc3RGaXJzdCA9IFIuc29ydChieUFnZSwgcGVvcGxlKTtcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIGFzY2VuZChmbiwgYSwgYikge1xuICB2YXIgYWEgPSBmbihhKTtcbiAgdmFyIGJiID0gZm4oYik7XG4gIHJldHVybiBhYSA8IGJiID8gLTEgOiBhYSA+IGJiID8gMSA6IDA7XG59KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG5cblxuLyoqXG4gKiBNYWtlcyBhIHNoYWxsb3cgY2xvbmUgb2YgYW4gb2JqZWN0LCBzZXR0aW5nIG9yIG92ZXJyaWRpbmcgdGhlIHNwZWNpZmllZFxuICogcHJvcGVydHkgd2l0aCB0aGUgZ2l2ZW4gdmFsdWUuIE5vdGUgdGhhdCB0aGlzIGNvcGllcyBhbmQgZmxhdHRlbnMgcHJvdG90eXBlXG4gKiBwcm9wZXJ0aWVzIG9udG8gdGhlIG5ldyBvYmplY3QgYXMgd2VsbC4gQWxsIG5vbi1wcmltaXRpdmUgcHJvcGVydGllcyBhcmVcbiAqIGNvcGllZCBieSByZWZlcmVuY2UuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIFN0cmluZyAtPiBhIC0+IHtrOiB2fSAtPiB7azogdn1cbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wIFRoZSBwcm9wZXJ0eSBuYW1lIHRvIHNldFxuICogQHBhcmFtIHsqfSB2YWwgVGhlIG5ldyB2YWx1ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIGNsb25lXG4gKiBAcmV0dXJuIHtPYmplY3R9IEEgbmV3IG9iamVjdCBlcXVpdmFsZW50IHRvIHRoZSBvcmlnaW5hbCBleGNlcHQgZm9yIHRoZSBjaGFuZ2VkIHByb3BlcnR5LlxuICogQHNlZSBSLmRpc3NvY1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuYXNzb2MoJ2MnLCAzLCB7YTogMSwgYjogMn0pOyAvLz0+IHthOiAxLCBiOiAyLCBjOiAzfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gYXNzb2MocHJvcCwgdmFsLCBvYmopIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIG9iaikge1xuICAgIHJlc3VsdFtwXSA9IG9ialtwXTtcbiAgfVxuICByZXN1bHRbcHJvcF0gPSB2YWw7XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG52YXIgX2hhcyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2hhcycpO1xudmFyIF9pc0FycmF5ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faXNBcnJheScpO1xudmFyIF9pc0ludGVnZXIgPSByZXF1aXJlKCcuL2ludGVybmFsL19pc0ludGVnZXInKTtcbnZhciBhc3NvYyA9IHJlcXVpcmUoJy4vYXNzb2MnKTtcblxuXG4vKipcbiAqIE1ha2VzIGEgc2hhbGxvdyBjbG9uZSBvZiBhbiBvYmplY3QsIHNldHRpbmcgb3Igb3ZlcnJpZGluZyB0aGUgbm9kZXMgcmVxdWlyZWRcbiAqIHRvIGNyZWF0ZSB0aGUgZ2l2ZW4gcGF0aCwgYW5kIHBsYWNpbmcgdGhlIHNwZWNpZmljIHZhbHVlIGF0IHRoZSB0YWlsIGVuZCBvZlxuICogdGhhdCBwYXRoLiBOb3RlIHRoYXQgdGhpcyBjb3BpZXMgYW5kIGZsYXR0ZW5zIHByb3RvdHlwZSBwcm9wZXJ0aWVzIG9udG8gdGhlXG4gKiBuZXcgb2JqZWN0IGFzIHdlbGwuIEFsbCBub24tcHJpbWl0aXZlIHByb3BlcnRpZXMgYXJlIGNvcGllZCBieSByZWZlcmVuY2UuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAdHlwZWRlZm4gSWR4ID0gU3RyaW5nIHwgSW50XG4gKiBAc2lnIFtJZHhdIC0+IGEgLT4ge2F9IC0+IHthfVxuICogQHBhcmFtIHtBcnJheX0gcGF0aCB0aGUgcGF0aCB0byBzZXRcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSBuZXcgdmFsdWVcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBjbG9uZVxuICogQHJldHVybiB7T2JqZWN0fSBBIG5ldyBvYmplY3QgZXF1aXZhbGVudCB0byB0aGUgb3JpZ2luYWwgZXhjZXB0IGFsb25nIHRoZSBzcGVjaWZpZWQgcGF0aC5cbiAqIEBzZWUgUi5kaXNzb2NQYXRoXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5hc3NvY1BhdGgoWydhJywgJ2InLCAnYyddLCA0Miwge2E6IHtiOiB7YzogMH19fSk7IC8vPT4ge2E6IHtiOiB7YzogNDJ9fX1cbiAqXG4gKiAgICAgIC8vIEFueSBtaXNzaW5nIG9yIG5vbi1vYmplY3Qga2V5cyBpbiBwYXRoIHdpbGwgYmUgb3ZlcnJpZGRlblxuICogICAgICBSLmFzc29jUGF0aChbJ2EnLCAnYicsICdjJ10sIDQyLCB7YTogNX0pOyAvLz0+IHthOiB7Yjoge2M6IDQyfX19XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiBhc3NvY1BhdGgocGF0aCwgdmFsLCBvYmopIHtcbiAgaWYgKHBhdGgubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuIHZhbDtcbiAgfVxuICB2YXIgaWR4ID0gcGF0aFswXTtcbiAgaWYgKHBhdGgubGVuZ3RoID4gMSkge1xuICAgIHZhciBuZXh0T2JqID0gX2hhcyhpZHgsIG9iaikgPyBvYmpbaWR4XSA6IF9pc0ludGVnZXIocGF0aFsxXSkgPyBbXSA6IHt9O1xuICAgIHZhbCA9IGFzc29jUGF0aChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChwYXRoLCAxKSwgdmFsLCBuZXh0T2JqKTtcbiAgfVxuICBpZiAoX2lzSW50ZWdlcihpZHgpICYmIF9pc0FycmF5KG9iaikpIHtcbiAgICB2YXIgYXJyID0gW10uY29uY2F0KG9iaik7XG4gICAgYXJyW2lkeF0gPSB2YWw7XG4gICAgcmV0dXJuIGFycjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXNzb2MoaWR4LCB2YWwsIG9iaik7XG4gIH1cbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBuQXJ5ID0gcmVxdWlyZSgnLi9uQXJ5Jyk7XG5cblxuLyoqXG4gKiBXcmFwcyBhIGZ1bmN0aW9uIG9mIGFueSBhcml0eSAoaW5jbHVkaW5nIG51bGxhcnkpIGluIGEgZnVuY3Rpb24gdGhhdCBhY2NlcHRzXG4gKiBleGFjdGx5IDIgcGFyYW1ldGVycy4gQW55IGV4dHJhbmVvdXMgcGFyYW1ldGVycyB3aWxsIG5vdCBiZSBwYXNzZWQgdG8gdGhlXG4gKiBzdXBwbGllZCBmdW5jdGlvbi5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4yLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoKiAtPiBjKSAtPiAoYSwgYiAtPiBjKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBuZXcgZnVuY3Rpb24gd3JhcHBpbmcgYGZuYC4gVGhlIG5ldyBmdW5jdGlvbiBpcyBndWFyYW50ZWVkIHRvIGJlIG9mXG4gKiAgICAgICAgIGFyaXR5IDIuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHRha2VzVGhyZWVBcmdzID0gZnVuY3Rpb24oYSwgYiwgYykge1xuICogICAgICAgIHJldHVybiBbYSwgYiwgY107XG4gKiAgICAgIH07XG4gKiAgICAgIHRha2VzVGhyZWVBcmdzLmxlbmd0aDsgLy89PiAzXG4gKiAgICAgIHRha2VzVGhyZWVBcmdzKDEsIDIsIDMpOyAvLz0+IFsxLCAyLCAzXVxuICpcbiAqICAgICAgdmFyIHRha2VzVHdvQXJncyA9IFIuYmluYXJ5KHRha2VzVGhyZWVBcmdzKTtcbiAqICAgICAgdGFrZXNUd29BcmdzLmxlbmd0aDsgLy89PiAyXG4gKiAgICAgIC8vIE9ubHkgMiBhcmd1bWVudHMgYXJlIHBhc3NlZCB0byB0aGUgd3JhcHBlZCBmdW5jdGlvblxuICogICAgICB0YWtlc1R3b0FyZ3MoMSwgMiwgMyk7IC8vPT4gWzEsIDIsIHVuZGVmaW5lZF1cbiAqIEBzeW1iIFIuYmluYXJ5KGYpKGEsIGIsIGMpID0gZihhLCBiKVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gYmluYXJ5KGZuKSB7XG4gIHJldHVybiBuQXJ5KDIsIGZuKTtcbn0pO1xuIiwidmFyIF9hcml0eSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2FyaXR5Jyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIGZ1bmN0aW9uIHRoYXQgaXMgYm91bmQgdG8gYSBjb250ZXh0LlxuICogTm90ZTogYFIuYmluZGAgZG9lcyBub3QgcHJvdmlkZSB0aGUgYWRkaXRpb25hbCBhcmd1bWVudC1iaW5kaW5nIGNhcGFiaWxpdGllcyBvZlxuICogW0Z1bmN0aW9uLnByb3RvdHlwZS5iaW5kXShodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi1VUy9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9GdW5jdGlvbi9iaW5kKS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC42LjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyAoKiAtPiAqKSAtPiB7Kn0gLT4gKCogLT4gKilcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBiaW5kIHRvIGNvbnRleHRcbiAqIEBwYXJhbSB7T2JqZWN0fSB0aGlzT2JqIFRoZSBjb250ZXh0IHRvIGJpbmQgYGZuYCB0b1xuICogQHJldHVybiB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCB3aWxsIGV4ZWN1dGUgaW4gdGhlIGNvbnRleHQgb2YgYHRoaXNPYmpgLlxuICogQHNlZSBSLnBhcnRpYWxcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgbG9nID0gUi5iaW5kKGNvbnNvbGUubG9nLCBjb25zb2xlKTtcbiAqICAgICAgUi5waXBlKFIuYXNzb2MoJ2EnLCAyKSwgUi50YXAobG9nKSwgUi5hc3NvYygnYScsIDMpKSh7YTogMX0pOyAvLz0+IHthOiAzfVxuICogICAgICAvLyBsb2dzIHthOiAyfVxuICogQHN5bWIgUi5iaW5kKGYsIG8pKGEsIGIpID0gZi5jYWxsKG8sIGEsIGIpXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBiaW5kKGZuLCB0aGlzT2JqKSB7XG4gIHJldHVybiBfYXJpdHkoZm4ubGVuZ3RoLCBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZm4uYXBwbHkodGhpc09iaiwgYXJndW1lbnRzKTtcbiAgfSk7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2lzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2ludGVybmFsL19pc0Z1bmN0aW9uJyk7XG52YXIgYW5kID0gcmVxdWlyZSgnLi9hbmQnKTtcbnZhciBsaWZ0ID0gcmVxdWlyZSgnLi9saWZ0Jyk7XG5cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHdoaWNoIGNhbGxzIHRoZSB0d28gcHJvdmlkZWQgZnVuY3Rpb25zIGFuZCByZXR1cm5zIHRoZSBgJiZgXG4gKiBvZiB0aGUgcmVzdWx0cy5cbiAqIEl0IHJldHVybnMgdGhlIHJlc3VsdCBvZiB0aGUgZmlyc3QgZnVuY3Rpb24gaWYgaXQgaXMgZmFsc2UteSBhbmQgdGhlIHJlc3VsdFxuICogb2YgdGhlIHNlY29uZCBmdW5jdGlvbiBvdGhlcndpc2UuIE5vdGUgdGhhdCB0aGlzIGlzIHNob3J0LWNpcmN1aXRlZCxcbiAqIG1lYW5pbmcgdGhhdCB0aGUgc2Vjb25kIGZ1bmN0aW9uIHdpbGwgbm90IGJlIGludm9rZWQgaWYgdGhlIGZpcnN0IHJldHVybnMgYVxuICogZmFsc2UteSB2YWx1ZS5cbiAqXG4gKiBJbiBhZGRpdGlvbiB0byBmdW5jdGlvbnMsIGBSLmJvdGhgIGFsc28gYWNjZXB0cyBhbnkgZmFudGFzeS1sYW5kIGNvbXBhdGlibGVcbiAqIGFwcGxpY2F0aXZlIGZ1bmN0b3IuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTIuMFxuICogQGNhdGVnb3J5IExvZ2ljXG4gKiBAc2lnICgqLi4uIC0+IEJvb2xlYW4pIC0+ICgqLi4uIC0+IEJvb2xlYW4pIC0+ICgqLi4uIC0+IEJvb2xlYW4pXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmIEEgcHJlZGljYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBnIEFub3RoZXIgcHJlZGljYXRlXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gYSBmdW5jdGlvbiB0aGF0IGFwcGxpZXMgaXRzIGFyZ3VtZW50cyB0byBgZmAgYW5kIGBnYCBhbmQgYCYmYHMgdGhlaXIgb3V0cHV0cyB0b2dldGhlci5cbiAqIEBzZWUgUi5hbmRcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgZ3QxMCA9IFIuZ3QoUi5fXywgMTApXG4gKiAgICAgIHZhciBsdDIwID0gUi5sdChSLl9fLCAyMClcbiAqICAgICAgdmFyIGYgPSBSLmJvdGgoZ3QxMCwgbHQyMCk7XG4gKiAgICAgIGYoMTUpOyAvLz0+IHRydWVcbiAqICAgICAgZigzMCk7IC8vPT4gZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGJvdGgoZiwgZykge1xuICByZXR1cm4gX2lzRnVuY3Rpb24oZikgP1xuICAgIGZ1bmN0aW9uIF9ib3RoKCkge1xuICAgICAgcmV0dXJuIGYuYXBwbHkodGhpcywgYXJndW1lbnRzKSAmJiBnLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSA6XG4gICAgbGlmdChhbmQpKGYsIGcpO1xufSk7XG4iLCJ2YXIgY3VycnkgPSByZXF1aXJlKCcuL2N1cnJ5Jyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSByZXN1bHQgb2YgY2FsbGluZyBpdHMgZmlyc3QgYXJndW1lbnQgd2l0aCB0aGUgcmVtYWluaW5nXG4gKiBhcmd1bWVudHMuIFRoaXMgaXMgb2NjYXNpb25hbGx5IHVzZWZ1bCBhcyBhIGNvbnZlcmdpbmcgZnVuY3Rpb24gZm9yXG4gKiBgUi5jb252ZXJnZWA6IHRoZSBsZWZ0IGJyYW5jaCBjYW4gcHJvZHVjZSBhIGZ1bmN0aW9uIHdoaWxlIHRoZSByaWdodCBicmFuY2hcbiAqIHByb2R1Y2VzIGEgdmFsdWUgdG8gYmUgcGFzc2VkIHRvIHRoYXQgZnVuY3Rpb24gYXMgYW4gYXJndW1lbnQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKCouLi4gLT4gYSksKi4uLiAtPiBhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gYXBwbHkgdG8gdGhlIHJlbWFpbmluZyBhcmd1bWVudHMuXG4gKiBAcGFyYW0gey4uLip9IGFyZ3MgQW55IG51bWJlciBvZiBwb3NpdGlvbmFsIGFyZ3VtZW50cy5cbiAqIEByZXR1cm4geyp9XG4gKiBAc2VlIFIuYXBwbHlcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmNhbGwoUi5hZGQsIDEsIDIpOyAvLz0+IDNcbiAqXG4gKiAgICAgIHZhciBpbmRlbnROID0gUi5waXBlKFIudGltZXMoUi5hbHdheXMoJyAnKSksXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIFIuam9pbignJyksXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgIFIucmVwbGFjZSgvXig/ISQpL2dtKSk7XG4gKlxuICogICAgICB2YXIgZm9ybWF0ID0gUi5jb252ZXJnZShSLmNhbGwsIFtcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFIucGlwZShSLnByb3AoJ2luZGVudCcpLCBpbmRlbnROKSxcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFIucHJvcCgndmFsdWUnKVxuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAqXG4gKiAgICAgIGZvcm1hdCh7aW5kZW50OiAyLCB2YWx1ZTogJ2Zvb1xcbmJhclxcbmJhelxcbid9KTsgLy89PiAnICBmb29cXG4gIGJhclxcbiAgYmF6XFxuJ1xuICogQHN5bWIgUi5jYWxsKGYsIGEsIGIpID0gZihhLCBiKVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGN1cnJ5KGZ1bmN0aW9uIGNhbGwoZm4pIHtcbiAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cywgMSkpO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9kaXNwYXRjaGFibGUgPSByZXF1aXJlKCcuL2ludGVybmFsL19kaXNwYXRjaGFibGUnKTtcbnZhciBfbWFrZUZsYXQgPSByZXF1aXJlKCcuL2ludGVybmFsL19tYWtlRmxhdCcpO1xudmFyIF94Y2hhaW4gPSByZXF1aXJlKCcuL2ludGVybmFsL194Y2hhaW4nKTtcbnZhciBtYXAgPSByZXF1aXJlKCcuL21hcCcpO1xuXG5cbi8qKlxuICogYGNoYWluYCBtYXBzIGEgZnVuY3Rpb24gb3ZlciBhIGxpc3QgYW5kIGNvbmNhdGVuYXRlcyB0aGUgcmVzdWx0cy4gYGNoYWluYFxuICogaXMgYWxzbyBrbm93biBhcyBgZmxhdE1hcGAgaW4gc29tZSBsaWJyYXJpZXNcbiAqXG4gKiBEaXNwYXRjaGVzIHRvIHRoZSBgY2hhaW5gIG1ldGhvZCBvZiB0aGUgc2Vjb25kIGFyZ3VtZW50LCBpZiBwcmVzZW50LFxuICogYWNjb3JkaW5nIHRvIHRoZSBbRmFudGFzeUxhbmQgQ2hhaW4gc3BlY10oaHR0cHM6Ly9naXRodWIuY29tL2ZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNjaGFpbikuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMy4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBDaGFpbiBtID0+IChhIC0+IG0gYikgLT4gbSBhIC0+IG0gYlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIG1hcCB3aXRoXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIG1hcCBvdmVyXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIHJlc3VsdCBvZiBmbGF0LW1hcHBpbmcgYGxpc3RgIHdpdGggYGZuYFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBkdXBsaWNhdGUgPSBuID0+IFtuLCBuXTtcbiAqICAgICAgUi5jaGFpbihkdXBsaWNhdGUsIFsxLCAyLCAzXSk7IC8vPT4gWzEsIDEsIDIsIDIsIDMsIDNdXG4gKlxuICogICAgICBSLmNoYWluKFIuYXBwZW5kLCBSLmhlYWQpKFsxLCAyLCAzXSk7IC8vPT4gWzEsIDIsIDMsIDFdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihfZGlzcGF0Y2hhYmxlKFsnY2hhaW4nXSwgX3hjaGFpbiwgZnVuY3Rpb24gY2hhaW4oZm4sIG1vbmFkKSB7XG4gIGlmICh0eXBlb2YgbW9uYWQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oeCkgeyByZXR1cm4gZm4obW9uYWQoeCkpKHgpOyB9O1xuICB9XG4gIHJldHVybiBfbWFrZUZsYXQoZmFsc2UpKG1hcChmbiwgbW9uYWQpKTtcbn0pKTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG5cbi8qKlxuICogUmVzdHJpY3RzIGEgbnVtYmVyIHRvIGJlIHdpdGhpbiBhIHJhbmdlLlxuICpcbiAqIEFsc28gd29ya3MgZm9yIG90aGVyIG9yZGVyZWQgdHlwZXMgc3VjaCBhcyBTdHJpbmdzIGFuZCBEYXRlcy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4yMC4wXG4gKiBAY2F0ZWdvcnkgUmVsYXRpb25cbiAqIEBzaWcgT3JkIGEgPT4gYSAtPiBhIC0+IGEgLT4gYVxuICogQHBhcmFtIHtOdW1iZXJ9IG1pbmltdW0gVGhlIGxvd2VyIGxpbWl0IG9mIHRoZSBjbGFtcCAoaW5jbHVzaXZlKVxuICogQHBhcmFtIHtOdW1iZXJ9IG1heGltdW0gVGhlIHVwcGVyIGxpbWl0IG9mIHRoZSBjbGFtcCAoaW5jbHVzaXZlKVxuICogQHBhcmFtIHtOdW1iZXJ9IHZhbHVlIFZhbHVlIHRvIGJlIGNsYW1wZWRcbiAqIEByZXR1cm4ge051bWJlcn0gUmV0dXJucyBgbWluaW11bWAgd2hlbiBgdmFsIDwgbWluaW11bWAsIGBtYXhpbXVtYCB3aGVuIGB2YWwgPiBtYXhpbXVtYCwgcmV0dXJucyBgdmFsYCBvdGhlcndpc2VcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmNsYW1wKDEsIDEwLCAtNSkgLy8gPT4gMVxuICogICAgICBSLmNsYW1wKDEsIDEwLCAxNSkgLy8gPT4gMTBcbiAqICAgICAgUi5jbGFtcCgxLCAxMCwgNCkgIC8vID0+IDRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIGNsYW1wKG1pbiwgbWF4LCB2YWx1ZSkge1xuICBpZiAobWluID4gbWF4KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdtaW4gbXVzdCBub3QgYmUgZ3JlYXRlciB0aGFuIG1heCBpbiBjbGFtcChtaW4sIG1heCwgdmFsdWUpJyk7XG4gIH1cbiAgcmV0dXJuIHZhbHVlIDwgbWluID8gbWluIDpcbiAgICAgICAgIHZhbHVlID4gbWF4ID8gbWF4IDpcbiAgICAgICAgIHZhbHVlO1xufSk7XG4iLCJ2YXIgX2Nsb25lID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY2xvbmUnKTtcbnZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG5cblxuLyoqXG4gKiBDcmVhdGVzIGEgZGVlcCBjb3B5IG9mIHRoZSB2YWx1ZSB3aGljaCBtYXkgY29udGFpbiAobmVzdGVkKSBgQXJyYXlgcyBhbmRcbiAqIGBPYmplY3RgcywgYE51bWJlcmBzLCBgU3RyaW5nYHMsIGBCb29sZWFuYHMgYW5kIGBEYXRlYHMuIGBGdW5jdGlvbmBzIGFyZVxuICogYXNzaWduZWQgYnkgcmVmZXJlbmNlIHJhdGhlciB0aGFuIGNvcGllZFxuICpcbiAqIERpc3BhdGNoZXMgdG8gYSBgY2xvbmVgIG1ldGhvZCBpZiBwcmVzZW50LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyB7Kn0gLT4geyp9XG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSBvYmplY3Qgb3IgYXJyYXkgdG8gY2xvbmVcbiAqIEByZXR1cm4geyp9IEEgZGVlcGx5IGNsb25lZCBjb3B5IG9mIGB2YWxgXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIG9iamVjdHMgPSBbe30sIHt9LCB7fV07XG4gKiAgICAgIHZhciBvYmplY3RzQ2xvbmUgPSBSLmNsb25lKG9iamVjdHMpO1xuICogICAgICBvYmplY3RzID09PSBvYmplY3RzQ2xvbmU7IC8vPT4gZmFsc2VcbiAqICAgICAgb2JqZWN0c1swXSA9PT0gb2JqZWN0c0Nsb25lWzBdOyAvLz0+IGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBjbG9uZSh2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT0gbnVsbCAmJiB0eXBlb2YgdmFsdWUuY2xvbmUgPT09ICdmdW5jdGlvbicgP1xuICAgIHZhbHVlLmNsb25lKCkgOlxuICAgIF9jbG9uZSh2YWx1ZSwgW10sIFtdLCB0cnVlKTtcbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcblxuXG4vKipcbiAqIE1ha2VzIGEgY29tcGFyYXRvciBmdW5jdGlvbiBvdXQgb2YgYSBmdW5jdGlvbiB0aGF0IHJlcG9ydHMgd2hldGhlciB0aGUgZmlyc3RcbiAqIGVsZW1lbnQgaXMgbGVzcyB0aGFuIHRoZSBzZWNvbmQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKGEsIGIgLT4gQm9vbGVhbikgLT4gKGEsIGIgLT4gTnVtYmVyKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZCBBIHByZWRpY2F0ZSBmdW5jdGlvbiBvZiBhcml0eSB0d28gd2hpY2ggd2lsbCByZXR1cm4gYHRydWVgIGlmIHRoZSBmaXJzdCBhcmd1bWVudFxuICogaXMgbGVzcyB0aGFuIHRoZSBzZWNvbmQsIGBmYWxzZWAgb3RoZXJ3aXNlXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBGdW5jdGlvbiA6OiBhIC0+IGIgLT4gSW50IHRoYXQgcmV0dXJucyBgLTFgIGlmIGEgPCBiLCBgMWAgaWYgYiA8IGEsIG90aGVyd2lzZSBgMGBcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgYnlBZ2UgPSBSLmNvbXBhcmF0b3IoKGEsIGIpID0+IGEuYWdlIDwgYi5hZ2UpO1xuICogICAgICB2YXIgcGVvcGxlID0gW1xuICogICAgICAgIC8vIC4uLlxuICogICAgICBdO1xuICogICAgICB2YXIgcGVvcGxlQnlJbmNyZWFzaW5nQWdlID0gUi5zb3J0KGJ5QWdlLCBwZW9wbGUpO1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gY29tcGFyYXRvcihwcmVkKSB7XG4gIHJldHVybiBmdW5jdGlvbihhLCBiKSB7XG4gICAgcmV0dXJuIHByZWQoYSwgYikgPyAtMSA6IHByZWQoYiwgYSkgPyAxIDogMDtcbiAgfTtcbn0pO1xuIiwidmFyIGxpZnQgPSByZXF1aXJlKCcuL2xpZnQnKTtcbnZhciBub3QgPSByZXF1aXJlKCcuL25vdCcpO1xuXG5cbi8qKlxuICogVGFrZXMgYSBmdW5jdGlvbiBgZmAgYW5kIHJldHVybnMgYSBmdW5jdGlvbiBgZ2Agc3VjaCB0aGF0IGlmIGNhbGxlZCB3aXRoIHRoZSBzYW1lIGFyZ3VtZW50c1xuICogd2hlbiBgZmAgcmV0dXJucyBhIFwidHJ1dGh5XCIgdmFsdWUsIGBnYCByZXR1cm5zIGBmYWxzZWAgYW5kIHdoZW4gYGZgIHJldHVybnMgYSBcImZhbHN5XCIgdmFsdWUgYGdgIHJldHVybnMgYHRydWVgLlxuICpcbiAqIGBSLmNvbXBsZW1lbnRgIG1heSBiZSBhcHBsaWVkIHRvIGFueSBmdW5jdG9yXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTIuMFxuICogQGNhdGVnb3J5IExvZ2ljXG4gKiBAc2lnICgqLi4uIC0+ICopIC0+ICgqLi4uIC0+IEJvb2xlYW4pXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBzZWUgUi5ub3RcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgaXNOb3ROaWwgPSBSLmNvbXBsZW1lbnQoUi5pc05pbCk7XG4gKiAgICAgIGlzTmlsKG51bGwpOyAvLz0+IHRydWVcbiAqICAgICAgaXNOb3ROaWwobnVsbCk7IC8vPT4gZmFsc2VcbiAqICAgICAgaXNOaWwoNyk7IC8vPT4gZmFsc2VcbiAqICAgICAgaXNOb3ROaWwoNyk7IC8vPT4gdHJ1ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGxpZnQobm90KTtcbiIsInZhciBwaXBlID0gcmVxdWlyZSgnLi9waXBlJyk7XG52YXIgcmV2ZXJzZSA9IHJlcXVpcmUoJy4vcmV2ZXJzZScpO1xuXG5cbi8qKlxuICogUGVyZm9ybXMgcmlnaHQtdG8tbGVmdCBmdW5jdGlvbiBjb21wb3NpdGlvbi4gVGhlIHJpZ2h0bW9zdCBmdW5jdGlvbiBtYXkgaGF2ZVxuICogYW55IGFyaXR5OyB0aGUgcmVtYWluaW5nIGZ1bmN0aW9ucyBtdXN0IGJlIHVuYXJ5LlxuICpcbiAqICoqTm90ZToqKiBUaGUgcmVzdWx0IG9mIGNvbXBvc2UgaXMgbm90IGF1dG9tYXRpY2FsbHkgY3VycmllZC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoKHkgLT4geiksICh4IC0+IHkpLCAuLi4sIChvIC0+IHApLCAoKGEsIGIsIC4uLiwgbikgLT4gbykpIC0+ICgoYSwgYiwgLi4uLCBuKSAtPiB6KVxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gLi4uZnVuY3Rpb25zIFRoZSBmdW5jdGlvbnMgdG8gY29tcG9zZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAc2VlIFIucGlwZVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBjbGFzc3lHcmVldGluZyA9IChmaXJzdE5hbWUsIGxhc3ROYW1lKSA9PiBcIlRoZSBuYW1lJ3MgXCIgKyBsYXN0TmFtZSArIFwiLCBcIiArIGZpcnN0TmFtZSArIFwiIFwiICsgbGFzdE5hbWVcbiAqICAgICAgdmFyIHllbGxHcmVldGluZyA9IFIuY29tcG9zZShSLnRvVXBwZXIsIGNsYXNzeUdyZWV0aW5nKTtcbiAqICAgICAgeWVsbEdyZWV0aW5nKCdKYW1lcycsICdCb25kJyk7IC8vPT4gXCJUSEUgTkFNRSdTIEJPTkQsIEpBTUVTIEJPTkRcIlxuICpcbiAqICAgICAgUi5jb21wb3NlKE1hdGguYWJzLCBSLmFkZCgxKSwgUi5tdWx0aXBseSgyKSkoLTQpIC8vPT4gN1xuICpcbiAqIEBzeW1iIFIuY29tcG9zZShmLCBnLCBoKShhLCBiKSA9IGYoZyhoKGEsIGIpKSlcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBjb21wb3NlKCkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY29tcG9zZSByZXF1aXJlcyBhdCBsZWFzdCBvbmUgYXJndW1lbnQnKTtcbiAgfVxuICByZXR1cm4gcGlwZS5hcHBseSh0aGlzLCByZXZlcnNlKGFyZ3VtZW50cykpO1xufTtcbiIsInZhciBjaGFpbiA9IHJlcXVpcmUoJy4vY2hhaW4nKTtcbnZhciBjb21wb3NlID0gcmVxdWlyZSgnLi9jb21wb3NlJyk7XG52YXIgbWFwID0gcmVxdWlyZSgnLi9tYXAnKTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIHJpZ2h0LXRvLWxlZnQgS2xlaXNsaSBjb21wb3NpdGlvbiBvZiB0aGUgcHJvdmlkZWQgZnVuY3Rpb25zLFxuICogZWFjaCBvZiB3aGljaCBtdXN0IHJldHVybiBhIHZhbHVlIG9mIGEgdHlwZSBzdXBwb3J0ZWQgYnkgW2BjaGFpbmBdKCNjaGFpbikuXG4gKlxuICogYFIuY29tcG9zZUsoaCwgZywgZilgIGlzIGVxdWl2YWxlbnQgdG8gYFIuY29tcG9zZShSLmNoYWluKGgpLCBSLmNoYWluKGcpLCBSLmNoYWluKGYpKWAuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTYuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnIENoYWluIG0gPT4gKCh5IC0+IG0geiksICh4IC0+IG0geSksIC4uLiwgKGEgLT4gbSBiKSkgLT4gKGEgLT4gbSB6KVxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gLi4uZnVuY3Rpb25zIFRoZSBmdW5jdGlvbnMgdG8gY29tcG9zZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAc2VlIFIucGlwZUtcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICAgLy8gIGdldCA6OiBTdHJpbmcgLT4gT2JqZWN0IC0+IE1heWJlICpcbiAqICAgICAgIHZhciBnZXQgPSBSLmN1cnJ5KChwcm9wTmFtZSwgb2JqKSA9PiBNYXliZShvYmpbcHJvcE5hbWVdKSlcbiAqXG4gKiAgICAgICAvLyAgZ2V0U3RhdGVDb2RlIDo6IE1heWJlIFN0cmluZyAtPiBNYXliZSBTdHJpbmdcbiAqICAgICAgIHZhciBnZXRTdGF0ZUNvZGUgPSBSLmNvbXBvc2VLKFxuICogICAgICAgICBSLmNvbXBvc2UoTWF5YmUub2YsIFIudG9VcHBlciksXG4gKiAgICAgICAgIGdldCgnc3RhdGUnKSxcbiAqICAgICAgICAgZ2V0KCdhZGRyZXNzJyksXG4gKiAgICAgICAgIGdldCgndXNlcicpLFxuICogICAgICAgKTtcbiAqICAgICAgIGdldFN0YXRlQ29kZSh7XCJ1c2VyXCI6e1wiYWRkcmVzc1wiOntcInN0YXRlXCI6XCJueVwifX19KTsgLy89PiBNYXliZS5KdXN0KFwiTllcIilcbiAqICAgICAgIGdldFN0YXRlQ29kZSh7fSk7IC8vPT4gTWF5YmUuTm90aGluZygpXG4gKiBAc3ltYiBSLmNvbXBvc2VLKGYsIGcsIGgpKGEpID0gUi5jaGFpbihmLCBSLmNoYWluKGcsIGgoYSkpKVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIGNvbXBvc2VLKCkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignY29tcG9zZUsgcmVxdWlyZXMgYXQgbGVhc3Qgb25lIGFyZ3VtZW50Jyk7XG4gIH1cbiAgdmFyIGluaXQgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpO1xuICB2YXIgbGFzdCA9IGluaXQucG9wKCk7XG4gIHJldHVybiBjb21wb3NlKGNvbXBvc2UuYXBwbHkodGhpcywgbWFwKGNoYWluLCBpbml0KSksIGxhc3QpO1xufTtcbiIsInZhciBwaXBlUCA9IHJlcXVpcmUoJy4vcGlwZVAnKTtcbnZhciByZXZlcnNlID0gcmVxdWlyZSgnLi9yZXZlcnNlJyk7XG5cblxuLyoqXG4gKiBQZXJmb3JtcyByaWdodC10by1sZWZ0IGNvbXBvc2l0aW9uIG9mIG9uZSBvciBtb3JlIFByb21pc2UtcmV0dXJuaW5nXG4gKiBmdW5jdGlvbnMuIFRoZSByaWdodG1vc3QgZnVuY3Rpb24gbWF5IGhhdmUgYW55IGFyaXR5OyB0aGUgcmVtYWluaW5nXG4gKiBmdW5jdGlvbnMgbXVzdCBiZSB1bmFyeS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xMC4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKCh5IC0+IFByb21pc2UgeiksICh4IC0+IFByb21pc2UgeSksIC4uLiwgKGEgLT4gUHJvbWlzZSBiKSkgLT4gKGEgLT4gUHJvbWlzZSB6KVxuICogQHBhcmFtIHsuLi5GdW5jdGlvbn0gZnVuY3Rpb25zIFRoZSBmdW5jdGlvbnMgdG8gY29tcG9zZVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAc2VlIFIucGlwZVBcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgZGIgPSB7XG4gKiAgICAgICAgdXNlcnM6IHtcbiAqICAgICAgICAgIEpPRToge1xuICogICAgICAgICAgICBuYW1lOiAnSm9lJyxcbiAqICAgICAgICAgICAgZm9sbG93ZXJzOiBbJ1NURVZFJywgJ1NVWlknXVxuICogICAgICAgICAgfVxuICogICAgICAgIH1cbiAqICAgICAgfVxuICpcbiAqICAgICAgLy8gV2UnbGwgcHJldGVuZCB0byBkbyBhIGRiIGxvb2t1cCB3aGljaCByZXR1cm5zIGEgcHJvbWlzZVxuICogICAgICB2YXIgbG9va3VwVXNlciA9ICh1c2VySWQpID0+IFByb21pc2UucmVzb2x2ZShkYi51c2Vyc1t1c2VySWRdKVxuICogICAgICB2YXIgbG9va3VwRm9sbG93ZXJzID0gKHVzZXIpID0+IFByb21pc2UucmVzb2x2ZSh1c2VyLmZvbGxvd2VycylcbiAqICAgICAgbG9va3VwVXNlcignSk9FJykudGhlbihsb29rdXBGb2xsb3dlcnMpXG4gKlxuICogICAgICAvLyAgZm9sbG93ZXJzRm9yVXNlciA6OiBTdHJpbmcgLT4gUHJvbWlzZSBbVXNlcklkXVxuICogICAgICB2YXIgZm9sbG93ZXJzRm9yVXNlciA9IFIuY29tcG9zZVAobG9va3VwRm9sbG93ZXJzLCBsb29rdXBVc2VyKTtcbiAqICAgICAgZm9sbG93ZXJzRm9yVXNlcignSk9FJykudGhlbihmb2xsb3dlcnMgPT4gY29uc29sZS5sb2coJ0ZvbGxvd2VyczonLCBmb2xsb3dlcnMpKVxuICogICAgICAvLyBGb2xsb3dlcnM6IFtcIlNURVZFXCIsXCJTVVpZXCJdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gY29tcG9zZVAoKSB7XG4gIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdjb21wb3NlUCByZXF1aXJlcyBhdCBsZWFzdCBvbmUgYXJndW1lbnQnKTtcbiAgfVxuICByZXR1cm4gcGlwZVAuYXBwbHkodGhpcywgcmV2ZXJzZShhcmd1bWVudHMpKTtcbn07XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9pc0FycmF5ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faXNBcnJheScpO1xudmFyIF9pc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faXNGdW5jdGlvbicpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgcmVzdWx0IG9mIGNvbmNhdGVuYXRpbmcgdGhlIGdpdmVuIGxpc3RzIG9yIHN0cmluZ3MuXG4gKlxuICogTm90ZTogYFIuY29uY2F0YCBleHBlY3RzIGJvdGggYXJndW1lbnRzIHRvIGJlIG9mIHRoZSBzYW1lIHR5cGUsXG4gKiB1bmxpa2UgdGhlIG5hdGl2ZSBgQXJyYXkucHJvdG90eXBlLmNvbmNhdGAgbWV0aG9kLiBJdCB3aWxsIHRocm93XG4gKiBhbiBlcnJvciBpZiB5b3UgYGNvbmNhdGAgYW4gQXJyYXkgd2l0aCBhIG5vbi1BcnJheSB2YWx1ZS5cbiAqXG4gKiBEaXNwYXRjaGVzIHRvIHRoZSBgY29uY2F0YCBtZXRob2Qgb2YgdGhlIGZpcnN0IGFyZ3VtZW50LCBpZiBwcmVzZW50LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgW2FdIC0+IFthXSAtPiBbYV1cbiAqIEBzaWcgU3RyaW5nIC0+IFN0cmluZyAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBmaXJzdExpc3QgVGhlIGZpcnN0IGxpc3RcbiAqIEBwYXJhbSB7QXJyYXl8U3RyaW5nfSBzZWNvbmRMaXN0IFRoZSBzZWNvbmQgbGlzdFxuICogQHJldHVybiB7QXJyYXl8U3RyaW5nfSBBIGxpc3QgY29uc2lzdGluZyBvZiB0aGUgZWxlbWVudHMgb2YgYGZpcnN0TGlzdGAgZm9sbG93ZWQgYnkgdGhlIGVsZW1lbnRzIG9mXG4gKiBgc2Vjb25kTGlzdGAuXG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuY29uY2F0KCdBQkMnLCAnREVGJyk7IC8vICdBQkNERUYnXG4gKiAgICAgIFIuY29uY2F0KFs0LCA1LCA2XSwgWzEsIDIsIDNdKTsgLy89PiBbNCwgNSwgNiwgMSwgMiwgM11cbiAqICAgICAgUi5jb25jYXQoW10sIFtdKTsgLy89PiBbXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gY29uY2F0KGEsIGIpIHtcbiAgaWYgKGEgPT0gbnVsbCB8fCAhX2lzRnVuY3Rpb24oYS5jb25jYXQpKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcih0b1N0cmluZyhhKSArICcgZG9lcyBub3QgaGF2ZSBhIG1ldGhvZCBuYW1lZCBcImNvbmNhdFwiJyk7XG4gIH1cbiAgaWYgKF9pc0FycmF5KGEpICYmICFfaXNBcnJheShiKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IodG9TdHJpbmcoYikgKyAnIGlzIG5vdCBhbiBhcnJheScpO1xuICB9XG4gIHJldHVybiBhLmNvbmNhdChiKTtcbn0pO1xuIiwidmFyIF9hcml0eSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2FyaXR5Jyk7XG52YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIG1hcCA9IHJlcXVpcmUoJy4vbWFwJyk7XG52YXIgbWF4ID0gcmVxdWlyZSgnLi9tYXgnKTtcbnZhciByZWR1Y2UgPSByZXF1aXJlKCcuL3JlZHVjZScpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uLCBgZm5gLCB3aGljaCBlbmNhcHN1bGF0ZXMgYGlmL2Vsc2UsIGlmL2Vsc2UsIC4uLmAgbG9naWMuXG4gKiBgUi5jb25kYCB0YWtlcyBhIGxpc3Qgb2YgW3ByZWRpY2F0ZSwgdHJhbnNmb3JtZXJdIHBhaXJzLiBBbGwgb2YgdGhlIGFyZ3VtZW50c1xuICogdG8gYGZuYCBhcmUgYXBwbGllZCB0byBlYWNoIG9mIHRoZSBwcmVkaWNhdGVzIGluIHR1cm4gdW50aWwgb25lIHJldHVybnMgYVxuICogXCJ0cnV0aHlcIiB2YWx1ZSwgYXQgd2hpY2ggcG9pbnQgYGZuYCByZXR1cm5zIHRoZSByZXN1bHQgb2YgYXBwbHlpbmcgaXRzXG4gKiBhcmd1bWVudHMgdG8gdGhlIGNvcnJlc3BvbmRpbmcgdHJhbnNmb3JtZXIuIElmIG5vbmUgb2YgdGhlIHByZWRpY2F0ZXNcbiAqIG1hdGNoZXMsIGBmbmAgcmV0dXJucyB1bmRlZmluZWQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuNi4wXG4gKiBAY2F0ZWdvcnkgTG9naWNcbiAqIEBzaWcgW1soKi4uLiAtPiBCb29sZWFuKSwoKi4uLiAtPiAqKV1dIC0+ICgqLi4uIC0+ICopXG4gKiBAcGFyYW0ge0FycmF5fSBwYWlycyBBIGxpc3Qgb2YgW3ByZWRpY2F0ZSwgdHJhbnNmb3JtZXJdXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgZm4gPSBSLmNvbmQoW1xuICogICAgICAgIFtSLmVxdWFscygwKSwgICBSLmFsd2F5cygnd2F0ZXIgZnJlZXplcyBhdCAwwrBDJyldLFxuICogICAgICAgIFtSLmVxdWFscygxMDApLCBSLmFsd2F5cygnd2F0ZXIgYm9pbHMgYXQgMTAwwrBDJyldLFxuICogICAgICAgIFtSLlQsICAgICAgICAgICB0ZW1wID0+ICdub3RoaW5nIHNwZWNpYWwgaGFwcGVucyBhdCAnICsgdGVtcCArICfCsEMnXVxuICogICAgICBdKTtcbiAqICAgICAgZm4oMCk7IC8vPT4gJ3dhdGVyIGZyZWV6ZXMgYXQgMMKwQydcbiAqICAgICAgZm4oNTApOyAvLz0+ICdub3RoaW5nIHNwZWNpYWwgaGFwcGVucyBhdCA1MMKwQydcbiAqICAgICAgZm4oMTAwKTsgLy89PiAnd2F0ZXIgYm9pbHMgYXQgMTAwwrBDJ1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gY29uZChwYWlycykge1xuICB2YXIgYXJpdHkgPSByZWR1Y2UobWF4LFxuICAgICAgICAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgICAgICAgIG1hcChmdW5jdGlvbihwYWlyKSB7IHJldHVybiBwYWlyWzBdLmxlbmd0aDsgfSwgcGFpcnMpKTtcbiAgcmV0dXJuIF9hcml0eShhcml0eSwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGlkeCA9IDA7XG4gICAgd2hpbGUgKGlkeCA8IHBhaXJzLmxlbmd0aCkge1xuICAgICAgaWYgKHBhaXJzW2lkeF1bMF0uYXBwbHkodGhpcywgYXJndW1lbnRzKSkge1xuICAgICAgICByZXR1cm4gcGFpcnNbaWR4XVsxXS5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgICAgfVxuICAgICAgaWR4ICs9IDE7XG4gICAgfVxuICB9KTtcbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBjb25zdHJ1Y3ROID0gcmVxdWlyZSgnLi9jb25zdHJ1Y3ROJyk7XG5cblxuLyoqXG4gKiBXcmFwcyBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGluc2lkZSBhIGN1cnJpZWQgZnVuY3Rpb24gdGhhdCBjYW4gYmUgY2FsbGVkXG4gKiB3aXRoIHRoZSBzYW1lIGFyZ3VtZW50cyBhbmQgcmV0dXJucyB0aGUgc2FtZSB0eXBlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnICgqIC0+IHsqfSkgLT4gKCogLT4geyp9KVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSB3cmFwcGVkLCBjdXJyaWVkIGNvbnN0cnVjdG9yIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIC8vIENvbnN0cnVjdG9yIGZ1bmN0aW9uXG4gKiAgICAgIGZ1bmN0aW9uIEFuaW1hbChraW5kKSB7XG4gKiAgICAgICAgdGhpcy5raW5kID0ga2luZDtcbiAqICAgICAgfTtcbiAqICAgICAgQW5pbWFsLnByb3RvdHlwZS5zaWdodGluZyA9IGZ1bmN0aW9uKCkge1xuICogICAgICAgIHJldHVybiBcIkl0J3MgYSBcIiArIHRoaXMua2luZCArIFwiIVwiO1xuICogICAgICB9XG4gKlxuICogICAgICB2YXIgQW5pbWFsQ29uc3RydWN0b3IgPSBSLmNvbnN0cnVjdChBbmltYWwpXG4gKlxuICogICAgICAvLyBOb3RpY2Ugd2Ugbm8gbG9uZ2VyIG5lZWQgdGhlICduZXcnIGtleXdvcmQ6XG4gKiAgICAgIEFuaW1hbENvbnN0cnVjdG9yKCdQaWcnKTsgLy89PiB7XCJraW5kXCI6IFwiUGlnXCIsIFwic2lnaHRpbmdcIjogZnVuY3Rpb24gKCl7Li4ufX07XG4gKlxuICogICAgICB2YXIgYW5pbWFsVHlwZXMgPSBbXCJMaW9uXCIsIFwiVGlnZXJcIiwgXCJCZWFyXCJdO1xuICogICAgICB2YXIgYW5pbWFsU2lnaHRpbmcgPSBSLmludm9rZXIoMCwgJ3NpZ2h0aW5nJyk7XG4gKiAgICAgIHZhciBzaWdodE5ld0FuaW1hbCA9IFIuY29tcG9zZShhbmltYWxTaWdodGluZywgQW5pbWFsQ29uc3RydWN0b3IpO1xuICogICAgICBSLm1hcChzaWdodE5ld0FuaW1hbCwgYW5pbWFsVHlwZXMpOyAvLz0+IFtcIkl0J3MgYSBMaW9uIVwiLCBcIkl0J3MgYSBUaWdlciFcIiwgXCJJdCdzIGEgQmVhciFcIl1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGNvbnN0cnVjdChGbikge1xuICByZXR1cm4gY29uc3RydWN0TihGbi5sZW5ndGgsIEZuKTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBjdXJyeSA9IHJlcXVpcmUoJy4vY3VycnknKTtcbnZhciBuQXJ5ID0gcmVxdWlyZSgnLi9uQXJ5Jyk7XG5cblxuLyoqXG4gKiBXcmFwcyBhIGNvbnN0cnVjdG9yIGZ1bmN0aW9uIGluc2lkZSBhIGN1cnJpZWQgZnVuY3Rpb24gdGhhdCBjYW4gYmUgY2FsbGVkXG4gKiB3aXRoIHRoZSBzYW1lIGFyZ3VtZW50cyBhbmQgcmV0dXJucyB0aGUgc2FtZSB0eXBlLiBUaGUgYXJpdHkgb2YgdGhlIGZ1bmN0aW9uXG4gKiByZXR1cm5lZCBpcyBzcGVjaWZpZWQgdG8gYWxsb3cgdXNpbmcgdmFyaWFkaWMgY29uc3RydWN0b3IgZnVuY3Rpb25zLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjQuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnIE51bWJlciAtPiAoKiAtPiB7Kn0pIC0+ICgqIC0+IHsqfSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBuIFRoZSBhcml0eSBvZiB0aGUgY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBGbiBUaGUgY29uc3RydWN0b3IgZnVuY3Rpb24gdG8gd3JhcC5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIHdyYXBwZWQsIGN1cnJpZWQgY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgLy8gVmFyaWFkaWMgQ29uc3RydWN0b3IgZnVuY3Rpb25cbiAqICAgICAgZnVuY3Rpb24gU2FsYWQoKSB7XG4gKiAgICAgICAgdGhpcy5pbmdyZWRpZW50cyA9IGFyZ3VtZW50cztcbiAqICAgICAgfTtcbiAqICAgICAgU2FsYWQucHJvdG90eXBlLnJlY2lwZSA9IGZ1bmN0aW9uKCkge1xuICogICAgICAgIHZhciBpbnN0cnVjdGlvbnMgPSBSLm1hcCgoaW5ncmVkaWVudCkgPT4gKFxuICogICAgICAgICAgJ0FkZCBhIHdob2xsb3Agb2YgJyArIGluZ3JlZGllbnQsIHRoaXMuaW5ncmVkaWVudHMpXG4gKiAgICAgICAgKVxuICogICAgICAgIHJldHVybiBSLmpvaW4oJ1xcbicsIGluc3RydWN0aW9ucylcbiAqICAgICAgfVxuICpcbiAqICAgICAgdmFyIFRocmVlTGF5ZXJTYWxhZCA9IFIuY29uc3RydWN0TigzLCBTYWxhZClcbiAqXG4gKiAgICAgIC8vIE5vdGljZSB3ZSBubyBsb25nZXIgbmVlZCB0aGUgJ25ldycga2V5d29yZCwgYW5kIHRoZSBjb25zdHJ1Y3RvciBpcyBjdXJyaWVkIGZvciAzIGFyZ3VtZW50cy5cbiAqICAgICAgdmFyIHNhbGFkID0gVGhyZWVMYXllclNhbGFkKCdNYXlvbm5haXNlJykoJ1BvdGF0byBDaGlwcycpKCdLZXRjaHVwJylcbiAqICAgICAgY29uc29sZS5sb2coc2FsYWQucmVjaXBlKCkpO1xuICogICAgICAvLyBBZGQgYSB3aG9sbG9wIG9mIE1heW9ubmFpc2VcbiAqICAgICAgLy8gQWRkIGEgd2hvbGxvcCBvZiBQb3RhdG8gQ2hpcHNcbiAqICAgICAgLy8gQWRkIGEgd2hvbGxvcCBvZiBQb3RhdG8gS2V0Y2h1cFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gY29uc3RydWN0TihuLCBGbikge1xuICBpZiAobiA+IDEwKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDb25zdHJ1Y3RvciB3aXRoIGdyZWF0ZXIgdGhhbiB0ZW4gYXJndW1lbnRzJyk7XG4gIH1cbiAgaWYgKG4gPT09IDApIHtcbiAgICByZXR1cm4gZnVuY3Rpb24oKSB7IHJldHVybiBuZXcgRm4oKTsgfTtcbiAgfVxuICByZXR1cm4gY3VycnkobkFyeShuLCBmdW5jdGlvbigkMCwgJDEsICQyLCAkMywgJDQsICQ1LCAkNiwgJDcsICQ4LCAkOSkge1xuICAgIHN3aXRjaCAoYXJndW1lbnRzLmxlbmd0aCkge1xuICAgICAgY2FzZSAgMTogcmV0dXJuIG5ldyBGbigkMCk7XG4gICAgICBjYXNlICAyOiByZXR1cm4gbmV3IEZuKCQwLCAkMSk7XG4gICAgICBjYXNlICAzOiByZXR1cm4gbmV3IEZuKCQwLCAkMSwgJDIpO1xuICAgICAgY2FzZSAgNDogcmV0dXJuIG5ldyBGbigkMCwgJDEsICQyLCAkMyk7XG4gICAgICBjYXNlICA1OiByZXR1cm4gbmV3IEZuKCQwLCAkMSwgJDIsICQzLCAkNCk7XG4gICAgICBjYXNlICA2OiByZXR1cm4gbmV3IEZuKCQwLCAkMSwgJDIsICQzLCAkNCwgJDUpO1xuICAgICAgY2FzZSAgNzogcmV0dXJuIG5ldyBGbigkMCwgJDEsICQyLCAkMywgJDQsICQ1LCAkNik7XG4gICAgICBjYXNlICA4OiByZXR1cm4gbmV3IEZuKCQwLCAkMSwgJDIsICQzLCAkNCwgJDUsICQ2LCAkNyk7XG4gICAgICBjYXNlICA5OiByZXR1cm4gbmV3IEZuKCQwLCAkMSwgJDIsICQzLCAkNCwgJDUsICQ2LCAkNywgJDgpO1xuICAgICAgY2FzZSAxMDogcmV0dXJuIG5ldyBGbigkMCwgJDEsICQyLCAkMywgJDQsICQ1LCAkNiwgJDcsICQ4LCAkOSk7XG4gICAgfVxuICB9KSk7XG59KTtcbiIsInZhciBfY29udGFpbnMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jb250YWlucycpO1xudmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBzcGVjaWZpZWQgdmFsdWUgaXMgZXF1YWwsIGluIGBSLmVxdWFsc2AgdGVybXMsIHRvIGF0XG4gKiBsZWFzdCBvbmUgZWxlbWVudCBvZiB0aGUgZ2l2ZW4gbGlzdDsgYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBhIC0+IFthXSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge09iamVjdH0gYSBUaGUgaXRlbSB0byBjb21wYXJlIGFnYWluc3QuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBhcnJheSB0byBjb25zaWRlci5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiBhbiBlcXVpdmFsZW50IGl0ZW0gaXMgaW4gdGhlIGxpc3QsIGBmYWxzZWAgb3RoZXJ3aXNlLlxuICogQHNlZSBSLmFueVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuY29udGFpbnMoMywgWzEsIDIsIDNdKTsgLy89PiB0cnVlXG4gKiAgICAgIFIuY29udGFpbnMoNCwgWzEsIDIsIDNdKTsgLy89PiBmYWxzZVxuICogICAgICBSLmNvbnRhaW5zKHsgbmFtZTogJ0ZyZWQnIH0sIFt7IG5hbWU6ICdGcmVkJyB9XSk7IC8vPT4gdHJ1ZVxuICogICAgICBSLmNvbnRhaW5zKFs0Ml0sIFtbNDJdXSk7IC8vPT4gdHJ1ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoX2NvbnRhaW5zKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX21hcCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX21hcCcpO1xudmFyIGN1cnJ5TiA9IHJlcXVpcmUoJy4vY3VycnlOJyk7XG52YXIgbWF4ID0gcmVxdWlyZSgnLi9tYXgnKTtcbnZhciBwbHVjayA9IHJlcXVpcmUoJy4vcGx1Y2snKTtcbnZhciByZWR1Y2UgPSByZXF1aXJlKCcuL3JlZHVjZScpO1xuXG5cbi8qKlxuICogQWNjZXB0cyBhIGNvbnZlcmdpbmcgZnVuY3Rpb24gYW5kIGEgbGlzdCBvZiBicmFuY2hpbmcgZnVuY3Rpb25zIGFuZCByZXR1cm5zXG4gKiBhIG5ldyBmdW5jdGlvbi4gV2hlbiBpbnZva2VkLCB0aGlzIG5ldyBmdW5jdGlvbiBpcyBhcHBsaWVkIHRvIHNvbWVcbiAqIGFyZ3VtZW50cywgZWFjaCBicmFuY2hpbmcgZnVuY3Rpb24gaXMgYXBwbGllZCB0byB0aG9zZSBzYW1lIGFyZ3VtZW50cy4gVGhlXG4gKiByZXN1bHRzIG9mIGVhY2ggYnJhbmNoaW5nIGZ1bmN0aW9uIGFyZSBwYXNzZWQgYXMgYXJndW1lbnRzIHRvIHRoZSBjb252ZXJnaW5nXG4gKiBmdW5jdGlvbiB0byBwcm9kdWNlIHRoZSByZXR1cm4gdmFsdWUuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuNC4yXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKHgxIC0+IHgyIC0+IC4uLiAtPiB6KSAtPiBbKGEgLT4gYiAtPiAuLi4gLT4geDEpLCAoYSAtPiBiIC0+IC4uLiAtPiB4MiksIC4uLl0gLT4gKGEgLT4gYiAtPiAuLi4gLT4geilcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGFmdGVyIEEgZnVuY3Rpb24uIGBhZnRlcmAgd2lsbCBiZSBpbnZva2VkIHdpdGggdGhlIHJldHVybiB2YWx1ZXMgb2ZcbiAqICAgICAgICBgZm4xYCBhbmQgYGZuMmAgYXMgaXRzIGFyZ3VtZW50cy5cbiAqIEBwYXJhbSB7QXJyYXl9IGZ1bmN0aW9ucyBBIGxpc3Qgb2YgZnVuY3Rpb25zLlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgbmV3IGZ1bmN0aW9uLlxuICogQHNlZSBSLnVzZVdpdGhcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgYXZlcmFnZSA9IFIuY29udmVyZ2UoUi5kaXZpZGUsIFtSLnN1bSwgUi5sZW5ndGhdKVxuICogICAgICBhdmVyYWdlKFsxLCAyLCAzLCA0LCA1LCA2LCA3XSkgLy89PiA0XG4gKlxuICogICAgICB2YXIgc3RyYW5nZUNvbmNhdCA9IFIuY29udmVyZ2UoUi5jb25jYXQsIFtSLnRvVXBwZXIsIFIudG9Mb3dlcl0pXG4gKiAgICAgIHN0cmFuZ2VDb25jYXQoXCJZb2RlbFwiKSAvLz0+IFwiWU9ERUx5b2RlbFwiXG4gKlxuICogQHN5bWIgUi5jb252ZXJnZShmLCBbZywgaF0pKGEsIGIpID0gZihnKGEsIGIpLCBoKGEsIGIpKVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gY29udmVyZ2UoYWZ0ZXIsIGZucykge1xuICByZXR1cm4gY3VycnlOKHJlZHVjZShtYXgsIDAsIHBsdWNrKCdsZW5ndGgnLCBmbnMpKSwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBhcmd1bWVudHM7XG4gICAgdmFyIGNvbnRleHQgPSB0aGlzO1xuICAgIHJldHVybiBhZnRlci5hcHBseShjb250ZXh0LCBfbWFwKGZ1bmN0aW9uKGZuKSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkoY29udGV4dCwgYXJncyk7XG4gICAgfSwgZm5zKSk7XG4gIH0pO1xufSk7XG4iLCJ2YXIgcmVkdWNlQnkgPSByZXF1aXJlKCcuL3JlZHVjZUJ5Jyk7XG5cblxuLyoqXG4gKiBDb3VudHMgdGhlIGVsZW1lbnRzIG9mIGEgbGlzdCBhY2NvcmRpbmcgdG8gaG93IG1hbnkgbWF0Y2ggZWFjaCB2YWx1ZSBvZiBhXG4gKiBrZXkgZ2VuZXJhdGVkIGJ5IHRoZSBzdXBwbGllZCBmdW5jdGlvbi4gUmV0dXJucyBhbiBvYmplY3QgbWFwcGluZyB0aGUga2V5c1xuICogcHJvZHVjZWQgYnkgYGZuYCB0byB0aGUgbnVtYmVyIG9mIG9jY3VycmVuY2VzIGluIHRoZSBsaXN0LiBOb3RlIHRoYXQgYWxsXG4gKiBrZXlzIGFyZSBjb2VyY2VkIHRvIHN0cmluZ3MgYmVjYXVzZSBvZiBob3cgSmF2YVNjcmlwdCBvYmplY3RzIHdvcmsuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnIChhIC0+IFN0cmluZykgLT4gW2FdIC0+IHsqfVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHVzZWQgdG8gbWFwIHZhbHVlcyB0byBrZXlzLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgbGlzdCB0byBjb3VudCBlbGVtZW50cyBmcm9tLlxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3QgbWFwcGluZyBrZXlzIHRvIG51bWJlciBvZiBvY2N1cnJlbmNlcyBpbiB0aGUgbGlzdC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgbnVtYmVycyA9IFsxLjAsIDEuMSwgMS4yLCAyLjAsIDMuMCwgMi4yXTtcbiAqICAgICAgUi5jb3VudEJ5KE1hdGguZmxvb3IpKG51bWJlcnMpOyAgICAvLz0+IHsnMSc6IDMsICcyJzogMiwgJzMnOiAxfVxuICpcbiAqICAgICAgdmFyIGxldHRlcnMgPSBbJ2EnLCAnYicsICdBJywgJ2EnLCAnQicsICdjJ107XG4gKiAgICAgIFIuY291bnRCeShSLnRvTG93ZXIpKGxldHRlcnMpOyAgIC8vPT4geydhJzogMywgJ2InOiAyLCAnYyc6IDF9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gcmVkdWNlQnkoZnVuY3Rpb24oYWNjLCBlbGVtKSB7IHJldHVybiBhY2MgKyAxOyB9LCAwKTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgY3VycnlOID0gcmVxdWlyZSgnLi9jdXJyeU4nKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBjdXJyaWVkIGVxdWl2YWxlbnQgb2YgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLiBUaGUgY3VycmllZCBmdW5jdGlvblxuICogaGFzIHR3byB1bnVzdWFsIGNhcGFiaWxpdGllcy4gRmlyc3QsIGl0cyBhcmd1bWVudHMgbmVlZG4ndCBiZSBwcm92aWRlZCBvbmVcbiAqIGF0IGEgdGltZS4gSWYgYGZgIGlzIGEgdGVybmFyeSBmdW5jdGlvbiBhbmQgYGdgIGlzIGBSLmN1cnJ5KGYpYCwgdGhlXG4gKiBmb2xsb3dpbmcgYXJlIGVxdWl2YWxlbnQ6XG4gKlxuICogICAtIGBnKDEpKDIpKDMpYFxuICogICAtIGBnKDEpKDIsIDMpYFxuICogICAtIGBnKDEsIDIpKDMpYFxuICogICAtIGBnKDEsIDIsIDMpYFxuICpcbiAqIFNlY29uZGx5LCB0aGUgc3BlY2lhbCBwbGFjZWhvbGRlciB2YWx1ZSBgUi5fX2AgbWF5IGJlIHVzZWQgdG8gc3BlY2lmeVxuICogXCJnYXBzXCIsIGFsbG93aW5nIHBhcnRpYWwgYXBwbGljYXRpb24gb2YgYW55IGNvbWJpbmF0aW9uIG9mIGFyZ3VtZW50cyxcbiAqIHJlZ2FyZGxlc3Mgb2YgdGhlaXIgcG9zaXRpb25zLiBJZiBgZ2AgaXMgYXMgYWJvdmUgYW5kIGBfYCBpcyBgUi5fX2AsIHRoZVxuICogZm9sbG93aW5nIGFyZSBlcXVpdmFsZW50OlxuICpcbiAqICAgLSBgZygxLCAyLCAzKWBcbiAqICAgLSBgZyhfLCAyLCAzKSgxKWBcbiAqICAgLSBgZyhfLCBfLCAzKSgxKSgyKWBcbiAqICAgLSBgZyhfLCBfLCAzKSgxLCAyKWBcbiAqICAgLSBgZyhfLCAyKSgxKSgzKWBcbiAqICAgLSBgZyhfLCAyKSgxLCAzKWBcbiAqICAgLSBgZyhfLCAyKShfLCAzKSgxKWBcbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoKiAtPiBhKSAtPiAoKiAtPiBhKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGN1cnJ5LlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgbmV3LCBjdXJyaWVkIGZ1bmN0aW9uLlxuICogQHNlZSBSLmN1cnJ5TlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBhZGRGb3VyTnVtYmVycyA9IChhLCBiLCBjLCBkKSA9PiBhICsgYiArIGMgKyBkO1xuICpcbiAqICAgICAgdmFyIGN1cnJpZWRBZGRGb3VyTnVtYmVycyA9IFIuY3VycnkoYWRkRm91ck51bWJlcnMpO1xuICogICAgICB2YXIgZiA9IGN1cnJpZWRBZGRGb3VyTnVtYmVycygxLCAyKTtcbiAqICAgICAgdmFyIGcgPSBmKDMpO1xuICogICAgICBnKDQpOyAvLz0+IDEwXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBjdXJyeShmbikge1xuICByZXR1cm4gY3VycnlOKGZuLmxlbmd0aCwgZm4pO1xufSk7XG4iLCJ2YXIgX2FyaXR5ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fYXJpdHknKTtcbnZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9jdXJyeU4gPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeU4nKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBjdXJyaWVkIGVxdWl2YWxlbnQgb2YgdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLCB3aXRoIHRoZSBzcGVjaWZpZWRcbiAqIGFyaXR5LiBUaGUgY3VycmllZCBmdW5jdGlvbiBoYXMgdHdvIHVudXN1YWwgY2FwYWJpbGl0aWVzLiBGaXJzdCwgaXRzXG4gKiBhcmd1bWVudHMgbmVlZG4ndCBiZSBwcm92aWRlZCBvbmUgYXQgYSB0aW1lLiBJZiBgZ2AgaXMgYFIuY3VycnlOKDMsIGYpYCwgdGhlXG4gKiBmb2xsb3dpbmcgYXJlIGVxdWl2YWxlbnQ6XG4gKlxuICogICAtIGBnKDEpKDIpKDMpYFxuICogICAtIGBnKDEpKDIsIDMpYFxuICogICAtIGBnKDEsIDIpKDMpYFxuICogICAtIGBnKDEsIDIsIDMpYFxuICpcbiAqIFNlY29uZGx5LCB0aGUgc3BlY2lhbCBwbGFjZWhvbGRlciB2YWx1ZSBgUi5fX2AgbWF5IGJlIHVzZWQgdG8gc3BlY2lmeVxuICogXCJnYXBzXCIsIGFsbG93aW5nIHBhcnRpYWwgYXBwbGljYXRpb24gb2YgYW55IGNvbWJpbmF0aW9uIG9mIGFyZ3VtZW50cyxcbiAqIHJlZ2FyZGxlc3Mgb2YgdGhlaXIgcG9zaXRpb25zLiBJZiBgZ2AgaXMgYXMgYWJvdmUgYW5kIGBfYCBpcyBgUi5fX2AsIHRoZVxuICogZm9sbG93aW5nIGFyZSBlcXVpdmFsZW50OlxuICpcbiAqICAgLSBgZygxLCAyLCAzKWBcbiAqICAgLSBgZyhfLCAyLCAzKSgxKWBcbiAqICAgLSBgZyhfLCBfLCAzKSgxKSgyKWBcbiAqICAgLSBgZyhfLCBfLCAzKSgxLCAyKWBcbiAqICAgLSBgZyhfLCAyKSgxKSgzKWBcbiAqICAgLSBgZyhfLCAyKSgxLCAzKWBcbiAqICAgLSBgZyhfLCAyKShfLCAzKSgxKWBcbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC41LjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyBOdW1iZXIgLT4gKCogLT4gYSkgLT4gKCogLT4gYSlcbiAqIEBwYXJhbSB7TnVtYmVyfSBsZW5ndGggVGhlIGFyaXR5IGZvciB0aGUgcmV0dXJuZWQgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY3VycnkuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBuZXcsIGN1cnJpZWQgZnVuY3Rpb24uXG4gKiBAc2VlIFIuY3VycnlcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgc3VtQXJncyA9ICguLi5hcmdzKSA9PiBSLnN1bShhcmdzKTtcbiAqXG4gKiAgICAgIHZhciBjdXJyaWVkQWRkRm91ck51bWJlcnMgPSBSLmN1cnJ5Tig0LCBzdW1BcmdzKTtcbiAqICAgICAgdmFyIGYgPSBjdXJyaWVkQWRkRm91ck51bWJlcnMoMSwgMik7XG4gKiAgICAgIHZhciBnID0gZigzKTtcbiAqICAgICAgZyg0KTsgLy89PiAxMFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gY3VycnlOKGxlbmd0aCwgZm4pIHtcbiAgaWYgKGxlbmd0aCA9PT0gMSkge1xuICAgIHJldHVybiBfY3VycnkxKGZuKTtcbiAgfVxuICByZXR1cm4gX2FyaXR5KGxlbmd0aCwgX2N1cnJ5TihsZW5ndGgsIFtdLCBmbikpO1xufSk7XG4iLCJ2YXIgYWRkID0gcmVxdWlyZSgnLi9hZGQnKTtcblxuXG4vKipcbiAqIERlY3JlbWVudHMgaXRzIGFyZ3VtZW50LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjkuMFxuICogQGNhdGVnb3J5IE1hdGhcbiAqIEBzaWcgTnVtYmVyIC0+IE51bWJlclxuICogQHBhcmFtIHtOdW1iZXJ9IG5cbiAqIEByZXR1cm4ge051bWJlcn0gbiAtIDFcbiAqIEBzZWUgUi5pbmNcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmRlYyg0Mik7IC8vPT4gNDFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhZGQoLTEpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIHNlY29uZCBhcmd1bWVudCBpZiBpdCBpcyBub3QgYG51bGxgLCBgdW5kZWZpbmVkYCBvciBgTmFOYFxuICogb3RoZXJ3aXNlIHRoZSBmaXJzdCBhcmd1bWVudCBpcyByZXR1cm5lZC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xMC4wXG4gKiBAY2F0ZWdvcnkgTG9naWNcbiAqIEBzaWcgYSAtPiBiIC0+IGEgfCBiXG4gKiBAcGFyYW0ge2F9IGRlZmF1bHQgVGhlIGRlZmF1bHQgdmFsdWUuXG4gKiBAcGFyYW0ge2J9IHZhbCBgdmFsYCB3aWxsIGJlIHJldHVybmVkIGluc3RlYWQgb2YgYGRlZmF1bHRgIHVubGVzcyBgdmFsYCBpcyBgbnVsbGAsIGB1bmRlZmluZWRgIG9yIGBOYU5gLlxuICogQHJldHVybiB7Kn0gVGhlIHNlY29uZCB2YWx1ZSBpZiBpdCBpcyBub3QgYG51bGxgLCBgdW5kZWZpbmVkYCBvciBgTmFOYCwgb3RoZXJ3aXNlIHRoZSBkZWZhdWx0IHZhbHVlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGRlZmF1bHRUbzQyID0gUi5kZWZhdWx0VG8oNDIpO1xuICpcbiAqICAgICAgZGVmYXVsdFRvNDIobnVsbCk7ICAvLz0+IDQyXG4gKiAgICAgIGRlZmF1bHRUbzQyKHVuZGVmaW5lZCk7ICAvLz0+IDQyXG4gKiAgICAgIGRlZmF1bHRUbzQyKCdSYW1kYScpOyAgLy89PiAnUmFtZGEnXG4gKiAgICAgIC8vIHBhcnNlSW50KCdzdHJpbmcnKSByZXN1bHRzIGluIE5hTlxuICogICAgICBkZWZhdWx0VG80MihwYXJzZUludCgnc3RyaW5nJykpOyAvLz0+IDQyXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBkZWZhdWx0VG8oZCwgdikge1xuICByZXR1cm4gdiA9PSBudWxsIHx8IHYgIT09IHYgPyBkIDogdjtcbn0pO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcblxuXG4vKipcbiAqIE1ha2VzIGEgZGVzY2VuZGluZyBjb21wYXJhdG9yIGZ1bmN0aW9uIG91dCBvZiBhIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIHZhbHVlXG4gKiB0aGF0IGNhbiBiZSBjb21wYXJlZCB3aXRoIGA8YCBhbmQgYD5gLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjIzLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyBPcmQgYiA9PiAoYSAtPiBiKSAtPiBhIC0+IGEgLT4gTnVtYmVyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBBIGZ1bmN0aW9uIG9mIGFyaXR5IG9uZSB0aGF0IHJldHVybnMgYSB2YWx1ZSB0aGF0IGNhbiBiZSBjb21wYXJlZFxuICogQHBhcmFtIHsqfSBhIFRoZSBmaXJzdCBpdGVtIHRvIGJlIGNvbXBhcmVkLlxuICogQHBhcmFtIHsqfSBiIFRoZSBzZWNvbmQgaXRlbSB0byBiZSBjb21wYXJlZC5cbiAqIEByZXR1cm4ge051bWJlcn0gYC0xYCBpZiBmbihhKSA+IGZuKGIpLCBgMWAgaWYgZm4oYikgPiBmbihhKSwgb3RoZXJ3aXNlIGAwYFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBieUFnZSA9IFIuZGVzY2VuZChSLnByb3AoJ2FnZScpKTtcbiAqICAgICAgdmFyIHBlb3BsZSA9IFtcbiAqICAgICAgICAvLyAuLi5cbiAqICAgICAgXTtcbiAqICAgICAgdmFyIHBlb3BsZUJ5T2xkZXN0Rmlyc3QgPSBSLnNvcnQoYnlBZ2UsIHBlb3BsZSk7XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiBkZXNjZW5kKGZuLCBhLCBiKSB7XG4gIHZhciBhYSA9IGZuKGEpO1xuICB2YXIgYmIgPSBmbihiKTtcbiAgcmV0dXJuIGFhID4gYmIgPyAtMSA6IGFhIDwgYmIgPyAxIDogMDtcbn0pO1xuIiwidmFyIF9jb250YWlucyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2NvbnRhaW5zJyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogRmluZHMgdGhlIHNldCAoaS5lLiBubyBkdXBsaWNhdGVzKSBvZiBhbGwgZWxlbWVudHMgaW4gdGhlIGZpcnN0IGxpc3Qgbm90XG4gKiBjb250YWluZWQgaW4gdGhlIHNlY29uZCBsaXN0LiBPYmplY3RzIGFuZCBBcnJheXMgYXJlIGNvbXBhcmVkIGFyZSBjb21wYXJlZFxuICogaW4gdGVybXMgb2YgdmFsdWUgZXF1YWxpdHksIG5vdCByZWZlcmVuY2UgZXF1YWxpdHkuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgUmVsYXRpb25cbiAqIEBzaWcgWypdIC0+IFsqXSAtPiBbKl1cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QxIFRoZSBmaXJzdCBsaXN0LlxuICogQHBhcmFtIHtBcnJheX0gbGlzdDIgVGhlIHNlY29uZCBsaXN0LlxuICogQHJldHVybiB7QXJyYXl9IFRoZSBlbGVtZW50cyBpbiBgbGlzdDFgIHRoYXQgYXJlIG5vdCBpbiBgbGlzdDJgLlxuICogQHNlZSBSLmRpZmZlcmVuY2VXaXRoLCBSLnN5bW1ldHJpY0RpZmZlcmVuY2UsIFIuc3ltbWV0cmljRGlmZmVyZW5jZVdpdGhcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmRpZmZlcmVuY2UoWzEsMiwzLDRdLCBbNyw2LDUsNCwzXSk7IC8vPT4gWzEsMl1cbiAqICAgICAgUi5kaWZmZXJlbmNlKFs3LDYsNSw0LDNdLCBbMSwyLDMsNF0pOyAvLz0+IFs3LDYsNV1cbiAqICAgICAgUi5kaWZmZXJlbmNlKFt7YTogMX0sIHtiOiAyfV0sIFt7YTogMX0sIHtjOiAzfV0pIC8vPT4gW3tiOiAyfV1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGRpZmZlcmVuY2UoZmlyc3QsIHNlY29uZCkge1xuICB2YXIgb3V0ID0gW107XG4gIHZhciBpZHggPSAwO1xuICB2YXIgZmlyc3RMZW4gPSBmaXJzdC5sZW5ndGg7XG4gIHdoaWxlIChpZHggPCBmaXJzdExlbikge1xuICAgIGlmICghX2NvbnRhaW5zKGZpcnN0W2lkeF0sIHNlY29uZCkgJiYgIV9jb250YWlucyhmaXJzdFtpZHhdLCBvdXQpKSB7XG4gICAgICBvdXRbb3V0Lmxlbmd0aF0gPSBmaXJzdFtpZHhdO1xuICAgIH1cbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gb3V0O1xufSk7XG4iLCJ2YXIgX2NvbnRhaW5zV2l0aCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2NvbnRhaW5zV2l0aCcpO1xudmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcblxuXG4vKipcbiAqIEZpbmRzIHRoZSBzZXQgKGkuZS4gbm8gZHVwbGljYXRlcykgb2YgYWxsIGVsZW1lbnRzIGluIHRoZSBmaXJzdCBsaXN0IG5vdFxuICogY29udGFpbmVkIGluIHRoZSBzZWNvbmQgbGlzdC4gRHVwbGljYXRpb24gaXMgZGV0ZXJtaW5lZCBhY2NvcmRpbmcgdG8gdGhlXG4gKiB2YWx1ZSByZXR1cm5lZCBieSBhcHBseWluZyB0aGUgc3VwcGxpZWQgcHJlZGljYXRlIHRvIHR3byBsaXN0IGVsZW1lbnRzLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnICgoYSwgYSkgLT4gQm9vbGVhbikgLT4gW2FdIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWQgQSBwcmVkaWNhdGUgdXNlZCB0byB0ZXN0IHdoZXRoZXIgdHdvIGl0ZW1zIGFyZSBlcXVhbC5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QxIFRoZSBmaXJzdCBsaXN0LlxuICogQHBhcmFtIHtBcnJheX0gbGlzdDIgVGhlIHNlY29uZCBsaXN0LlxuICogQHJldHVybiB7QXJyYXl9IFRoZSBlbGVtZW50cyBpbiBgbGlzdDFgIHRoYXQgYXJlIG5vdCBpbiBgbGlzdDJgLlxuICogQHNlZSBSLmRpZmZlcmVuY2UsIFIuc3ltbWV0cmljRGlmZmVyZW5jZSwgUi5zeW1tZXRyaWNEaWZmZXJlbmNlV2l0aFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBjbXAgPSAoeCwgeSkgPT4geC5hID09PSB5LmE7XG4gKiAgICAgIHZhciBsMSA9IFt7YTogMX0sIHthOiAyfSwge2E6IDN9XTtcbiAqICAgICAgdmFyIGwyID0gW3thOiAzfSwge2E6IDR9XTtcbiAqICAgICAgUi5kaWZmZXJlbmNlV2l0aChjbXAsIGwxLCBsMik7IC8vPT4gW3thOiAxfSwge2E6IDJ9XVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gZGlmZmVyZW5jZVdpdGgocHJlZCwgZmlyc3QsIHNlY29uZCkge1xuICB2YXIgb3V0ID0gW107XG4gIHZhciBpZHggPSAwO1xuICB2YXIgZmlyc3RMZW4gPSBmaXJzdC5sZW5ndGg7XG4gIHdoaWxlIChpZHggPCBmaXJzdExlbikge1xuICAgIGlmICghX2NvbnRhaW5zV2l0aChwcmVkLCBmaXJzdFtpZHhdLCBzZWNvbmQpICYmXG4gICAgICAgICFfY29udGFpbnNXaXRoKHByZWQsIGZpcnN0W2lkeF0sIG91dCkpIHtcbiAgICAgIG91dC5wdXNoKGZpcnN0W2lkeF0pO1xuICAgIH1cbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gb3V0O1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBvYmplY3QgdGhhdCBkb2VzIG5vdCBjb250YWluIGEgYHByb3BgIHByb3BlcnR5LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEwLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcgU3RyaW5nIC0+IHtrOiB2fSAtPiB7azogdn1cbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBkaXNzb2NpYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gY2xvbmVcbiAqIEByZXR1cm4ge09iamVjdH0gQSBuZXcgb2JqZWN0IGVxdWl2YWxlbnQgdG8gdGhlIG9yaWdpbmFsIGJ1dCB3aXRob3V0IHRoZSBzcGVjaWZpZWQgcHJvcGVydHlcbiAqIEBzZWUgUi5hc3NvY1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuZGlzc29jKCdiJywge2E6IDEsIGI6IDIsIGM6IDN9KTsgLy89PiB7YTogMSwgYzogM31cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGRpc3NvYyhwcm9wLCBvYmopIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmb3IgKHZhciBwIGluIG9iaikge1xuICAgIHJlc3VsdFtwXSA9IG9ialtwXTtcbiAgfVxuICBkZWxldGUgcmVzdWx0W3Byb3BdO1xuICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIGFzc29jID0gcmVxdWlyZSgnLi9hc3NvYycpO1xudmFyIGRpc3NvYyA9IHJlcXVpcmUoJy4vZGlzc29jJyk7XG5cblxuLyoqXG4gKiBNYWtlcyBhIHNoYWxsb3cgY2xvbmUgb2YgYW4gb2JqZWN0LCBvbWl0dGluZyB0aGUgcHJvcGVydHkgYXQgdGhlIGdpdmVuIHBhdGguXG4gKiBOb3RlIHRoYXQgdGhpcyBjb3BpZXMgYW5kIGZsYXR0ZW5zIHByb3RvdHlwZSBwcm9wZXJ0aWVzIG9udG8gdGhlIG5ldyBvYmplY3RcbiAqIGFzIHdlbGwuIEFsbCBub24tcHJpbWl0aXZlIHByb3BlcnRpZXMgYXJlIGNvcGllZCBieSByZWZlcmVuY2UuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTEuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyBbU3RyaW5nXSAtPiB7azogdn0gLT4ge2s6IHZ9XG4gKiBAcGFyYW0ge0FycmF5fSBwYXRoIFRoZSBwYXRoIHRvIHRoZSB2YWx1ZSB0byBvbWl0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gY2xvbmVcbiAqIEByZXR1cm4ge09iamVjdH0gQSBuZXcgb2JqZWN0IHdpdGhvdXQgdGhlIHByb3BlcnR5IGF0IHBhdGhcbiAqIEBzZWUgUi5hc3NvY1BhdGhcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmRpc3NvY1BhdGgoWydhJywgJ2InLCAnYyddLCB7YToge2I6IHtjOiA0Mn19fSk7IC8vPT4ge2E6IHtiOiB7fX19XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBkaXNzb2NQYXRoKHBhdGgsIG9iaikge1xuICBzd2l0Y2ggKHBhdGgubGVuZ3RoKSB7XG4gICAgY2FzZSAwOlxuICAgICAgcmV0dXJuIG9iajtcbiAgICBjYXNlIDE6XG4gICAgICByZXR1cm4gZGlzc29jKHBhdGhbMF0sIG9iaik7XG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBoZWFkID0gcGF0aFswXTtcbiAgICAgIHZhciB0YWlsID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwocGF0aCwgMSk7XG4gICAgICByZXR1cm4gb2JqW2hlYWRdID09IG51bGwgPyBvYmogOiBhc3NvYyhoZWFkLCBkaXNzb2NQYXRoKHRhaWwsIG9ialtoZWFkXSksIG9iaik7XG4gIH1cbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIERpdmlkZXMgdHdvIG51bWJlcnMuIEVxdWl2YWxlbnQgdG8gYGEgLyBiYC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBNYXRoXG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXIgLT4gTnVtYmVyXG4gKiBAcGFyYW0ge051bWJlcn0gYSBUaGUgZmlyc3QgdmFsdWUuXG4gKiBAcGFyYW0ge051bWJlcn0gYiBUaGUgc2Vjb25kIHZhbHVlLlxuICogQHJldHVybiB7TnVtYmVyfSBUaGUgcmVzdWx0IG9mIGBhIC8gYmAuXG4gKiBAc2VlIFIubXVsdGlwbHlcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmRpdmlkZSg3MSwgMTAwKTsgLy89PiAwLjcxXG4gKlxuICogICAgICB2YXIgaGFsZiA9IFIuZGl2aWRlKFIuX18sIDIpO1xuICogICAgICBoYWxmKDQyKTsgLy89PiAyMVxuICpcbiAqICAgICAgdmFyIHJlY2lwcm9jYWwgPSBSLmRpdmlkZSgxKTtcbiAqICAgICAgcmVjaXByb2NhbCg0KTsgICAvLz0+IDAuMjVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGRpdmlkZShhLCBiKSB7IHJldHVybiBhIC8gYjsgfSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9kaXNwYXRjaGFibGUgPSByZXF1aXJlKCcuL2ludGVybmFsL19kaXNwYXRjaGFibGUnKTtcbnZhciBfeGRyb3AgPSByZXF1aXJlKCcuL2ludGVybmFsL194ZHJvcCcpO1xudmFyIHNsaWNlID0gcmVxdWlyZSgnLi9zbGljZScpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhbGwgYnV0IHRoZSBmaXJzdCBgbmAgZWxlbWVudHMgb2YgdGhlIGdpdmVuIGxpc3QsIHN0cmluZywgb3JcbiAqIHRyYW5zZHVjZXIvdHJhbnNmb3JtZXIgKG9yIG9iamVjdCB3aXRoIGEgYGRyb3BgIG1ldGhvZCkuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYGRyb3BgIG1ldGhvZCBvZiB0aGUgc2Vjb25kIGFyZ3VtZW50LCBpZiBwcmVzZW50LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgTnVtYmVyIC0+IFthXSAtPiBbYV1cbiAqIEBzaWcgTnVtYmVyIC0+IFN0cmluZyAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfSBuXG4gKiBAcGFyYW0ge1thXX0gbGlzdFxuICogQHJldHVybiB7W2FdfSBBIGNvcHkgb2YgbGlzdCB3aXRob3V0IHRoZSBmaXJzdCBgbmAgZWxlbWVudHNcbiAqIEBzZWUgUi50YWtlLCBSLnRyYW5zZHVjZSwgUi5kcm9wTGFzdCwgUi5kcm9wV2hpbGVcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmRyb3AoMSwgWydmb28nLCAnYmFyJywgJ2JheiddKTsgLy89PiBbJ2JhcicsICdiYXonXVxuICogICAgICBSLmRyb3AoMiwgWydmb28nLCAnYmFyJywgJ2JheiddKTsgLy89PiBbJ2JheiddXG4gKiAgICAgIFIuZHJvcCgzLCBbJ2ZvbycsICdiYXInLCAnYmF6J10pOyAvLz0+IFtdXG4gKiAgICAgIFIuZHJvcCg0LCBbJ2ZvbycsICdiYXInLCAnYmF6J10pOyAvLz0+IFtdXG4gKiAgICAgIFIuZHJvcCgzLCAncmFtZGEnKTsgICAgICAgICAgICAgICAvLz0+ICdkYSdcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKF9kaXNwYXRjaGFibGUoWydkcm9wJ10sIF94ZHJvcCwgZnVuY3Rpb24gZHJvcChuLCB4cykge1xuICByZXR1cm4gc2xpY2UoTWF0aC5tYXgoMCwgbiksIEluZmluaXR5LCB4cyk7XG59KSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9kaXNwYXRjaGFibGUgPSByZXF1aXJlKCcuL2ludGVybmFsL19kaXNwYXRjaGFibGUnKTtcbnZhciBfZHJvcExhc3QgPSByZXF1aXJlKCcuL2ludGVybmFsL19kcm9wTGFzdCcpO1xudmFyIF94ZHJvcExhc3QgPSByZXF1aXJlKCcuL2ludGVybmFsL194ZHJvcExhc3QnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBsaXN0IGNvbnRhaW5pbmcgYWxsIGJ1dCB0aGUgbGFzdCBgbmAgZWxlbWVudHMgb2YgdGhlIGdpdmVuIGBsaXN0YC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNi4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBOdW1iZXIgLT4gW2FdIC0+IFthXVxuICogQHNpZyBOdW1iZXIgLT4gU3RyaW5nIC0+IFN0cmluZ1xuICogQHBhcmFtIHtOdW1iZXJ9IG4gVGhlIG51bWJlciBvZiBlbGVtZW50cyBvZiBgbGlzdGAgdG8gc2tpcC5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGxpc3Qgb2YgZWxlbWVudHMgdG8gY29uc2lkZXIuXG4gKiBAcmV0dXJuIHtBcnJheX0gQSBjb3B5IG9mIHRoZSBsaXN0IHdpdGggb25seSB0aGUgZmlyc3QgYGxpc3QubGVuZ3RoIC0gbmAgZWxlbWVudHNcbiAqIEBzZWUgUi50YWtlTGFzdCwgUi5kcm9wLCBSLmRyb3BXaGlsZSwgUi5kcm9wTGFzdFdoaWxlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5kcm9wTGFzdCgxLCBbJ2ZvbycsICdiYXInLCAnYmF6J10pOyAvLz0+IFsnZm9vJywgJ2JhciddXG4gKiAgICAgIFIuZHJvcExhc3QoMiwgWydmb28nLCAnYmFyJywgJ2JheiddKTsgLy89PiBbJ2ZvbyddXG4gKiAgICAgIFIuZHJvcExhc3QoMywgWydmb28nLCAnYmFyJywgJ2JheiddKTsgLy89PiBbXVxuICogICAgICBSLmRyb3BMYXN0KDQsIFsnZm9vJywgJ2JhcicsICdiYXonXSk7IC8vPT4gW11cbiAqICAgICAgUi5kcm9wTGFzdCgzLCAncmFtZGEnKTsgICAgICAgICAgICAgICAvLz0+ICdyYSdcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKF9kaXNwYXRjaGFibGUoW10sIF94ZHJvcExhc3QsIF9kcm9wTGFzdCkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfZGlzcGF0Y2hhYmxlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fZGlzcGF0Y2hhYmxlJyk7XG52YXIgX2Ryb3BMYXN0V2hpbGUgPSByZXF1aXJlKCcuL2ludGVybmFsL19kcm9wTGFzdFdoaWxlJyk7XG52YXIgX3hkcm9wTGFzdFdoaWxlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9feGRyb3BMYXN0V2hpbGUnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgbGlzdCBleGNsdWRpbmcgYWxsIHRoZSB0YWlsaW5nIGVsZW1lbnRzIG9mIGEgZ2l2ZW4gbGlzdCB3aGljaFxuICogc2F0aXNmeSB0aGUgc3VwcGxpZWQgcHJlZGljYXRlIGZ1bmN0aW9uLiBJdCBwYXNzZXMgZWFjaCB2YWx1ZSBmcm9tIHRoZSByaWdodFxuICogdG8gdGhlIHN1cHBsaWVkIHByZWRpY2F0ZSBmdW5jdGlvbiwgc2tpcHBpbmcgZWxlbWVudHMgdW50aWwgdGhlIHByZWRpY2F0ZVxuICogZnVuY3Rpb24gcmV0dXJucyBhIGBmYWxzeWAgdmFsdWUuIFRoZSBwcmVkaWNhdGUgZnVuY3Rpb24gaXMgYXBwbGllZCB0byBvbmUgYXJndW1lbnQ6XG4gKiAqKHZhbHVlKSouXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTYuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZGljYXRlIFRoZSBmdW5jdGlvbiB0byBiZSBjYWxsZWQgb24gZWFjaCBlbGVtZW50XG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBjb2xsZWN0aW9uIHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm4ge0FycmF5fSBBIG5ldyBhcnJheSB3aXRob3V0IGFueSB0cmFpbGluZyBlbGVtZW50cyB0aGF0IHJldHVybiBgZmFsc3lgIHZhbHVlcyBmcm9tIHRoZSBgcHJlZGljYXRlYC5cbiAqIEBzZWUgUi50YWtlTGFzdFdoaWxlLCBSLmFkZEluZGV4LCBSLmRyb3AsIFIuZHJvcFdoaWxlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGx0ZVRocmVlID0geCA9PiB4IDw9IDM7XG4gKlxuICogICAgICBSLmRyb3BMYXN0V2hpbGUobHRlVGhyZWUsIFsxLCAyLCAzLCA0LCAzLCAyLCAxXSk7IC8vPT4gWzEsIDIsIDMsIDRdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihfZGlzcGF0Y2hhYmxlKFtdLCBfeGRyb3BMYXN0V2hpbGUsIF9kcm9wTGFzdFdoaWxlKSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIF9kaXNwYXRjaGFibGUgPSByZXF1aXJlKCcuL2ludGVybmFsL19kaXNwYXRjaGFibGUnKTtcbnZhciBfeGRyb3BSZXBlYXRzV2l0aCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3hkcm9wUmVwZWF0c1dpdGgnKTtcbnZhciBkcm9wUmVwZWF0c1dpdGggPSByZXF1aXJlKCcuL2Ryb3BSZXBlYXRzV2l0aCcpO1xudmFyIGVxdWFscyA9IHJlcXVpcmUoJy4vZXF1YWxzJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGxpc3Qgd2l0aG91dCBhbnkgY29uc2VjdXRpdmVseSByZXBlYXRpbmcgZWxlbWVudHMuIGBSLmVxdWFsc2BcbiAqIGlzIHVzZWQgdG8gZGV0ZXJtaW5lIGVxdWFsaXR5LlxuICpcbiAqIEFjdHMgYXMgYSB0cmFuc2R1Y2VyIGlmIGEgdHJhbnNmb3JtZXIgaXMgZ2l2ZW4gaW4gbGlzdCBwb3NpdGlvbi5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNC4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBhcnJheSB0byBjb25zaWRlci5cbiAqIEByZXR1cm4ge0FycmF5fSBgbGlzdGAgd2l0aG91dCByZXBlYXRpbmcgZWxlbWVudHMuXG4gKiBAc2VlIFIudHJhbnNkdWNlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICBSLmRyb3BSZXBlYXRzKFsxLCAxLCAxLCAyLCAzLCA0LCA0LCAyLCAyXSk7IC8vPT4gWzEsIDIsIDMsIDQsIDJdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShfZGlzcGF0Y2hhYmxlKFtdLCBfeGRyb3BSZXBlYXRzV2l0aChlcXVhbHMpLCBkcm9wUmVwZWF0c1dpdGgoZXF1YWxzKSkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfZGlzcGF0Y2hhYmxlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fZGlzcGF0Y2hhYmxlJyk7XG52YXIgX3hkcm9wUmVwZWF0c1dpdGggPSByZXF1aXJlKCcuL2ludGVybmFsL194ZHJvcFJlcGVhdHNXaXRoJyk7XG52YXIgbGFzdCA9IHJlcXVpcmUoJy4vbGFzdCcpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBsaXN0IHdpdGhvdXQgYW55IGNvbnNlY3V0aXZlbHkgcmVwZWF0aW5nIGVsZW1lbnRzLiBFcXVhbGl0eSBpc1xuICogZGV0ZXJtaW5lZCBieSBhcHBseWluZyB0aGUgc3VwcGxpZWQgcHJlZGljYXRlIHRvIGVhY2ggcGFpciBvZiBjb25zZWN1dGl2ZSBlbGVtZW50cy4gVGhlXG4gKiBmaXJzdCBlbGVtZW50IGluIGEgc2VyaWVzIG9mIGVxdWFsIGVsZW1lbnRzIHdpbGwgYmUgcHJlc2VydmVkLlxuICpcbiAqIEFjdHMgYXMgYSB0cmFuc2R1Y2VyIGlmIGEgdHJhbnNmb3JtZXIgaXMgZ2l2ZW4gaW4gbGlzdCBwb3NpdGlvbi5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNC4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoYSwgYSAtPiBCb29sZWFuKSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkIEEgcHJlZGljYXRlIHVzZWQgdG8gdGVzdCB3aGV0aGVyIHR3byBpdGVtcyBhcmUgZXF1YWwuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBhcnJheSB0byBjb25zaWRlci5cbiAqIEByZXR1cm4ge0FycmF5fSBgbGlzdGAgd2l0aG91dCByZXBlYXRpbmcgZWxlbWVudHMuXG4gKiBAc2VlIFIudHJhbnNkdWNlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGwgPSBbMSwgLTEsIDEsIDMsIDQsIC00LCAtNCwgLTUsIDUsIDMsIDNdO1xuICogICAgICBSLmRyb3BSZXBlYXRzV2l0aChSLmVxQnkoTWF0aC5hYnMpLCBsKTsgLy89PiBbMSwgMywgNCwgLTUsIDNdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihfZGlzcGF0Y2hhYmxlKFtdLCBfeGRyb3BSZXBlYXRzV2l0aCwgZnVuY3Rpb24gZHJvcFJlcGVhdHNXaXRoKHByZWQsIGxpc3QpIHtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaWR4ID0gMTtcbiAgdmFyIGxlbiA9IGxpc3QubGVuZ3RoO1xuICBpZiAobGVuICE9PSAwKSB7XG4gICAgcmVzdWx0WzBdID0gbGlzdFswXTtcbiAgICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgICBpZiAoIXByZWQobGFzdChyZXN1bHQpLCBsaXN0W2lkeF0pKSB7XG4gICAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGxpc3RbaWR4XTtcbiAgICAgIH1cbiAgICAgIGlkeCArPSAxO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSkpO1xuXG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9kaXNwYXRjaGFibGUgPSByZXF1aXJlKCcuL2ludGVybmFsL19kaXNwYXRjaGFibGUnKTtcbnZhciBfeGRyb3BXaGlsZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3hkcm9wV2hpbGUnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgbGlzdCBleGNsdWRpbmcgdGhlIGxlYWRpbmcgZWxlbWVudHMgb2YgYSBnaXZlbiBsaXN0IHdoaWNoXG4gKiBzYXRpc2Z5IHRoZSBzdXBwbGllZCBwcmVkaWNhdGUgZnVuY3Rpb24uIEl0IHBhc3NlcyBlYWNoIHZhbHVlIHRvIHRoZSBzdXBwbGllZFxuICogcHJlZGljYXRlIGZ1bmN0aW9uLCBza2lwcGluZyBlbGVtZW50cyB3aGlsZSB0aGUgcHJlZGljYXRlIGZ1bmN0aW9uIHJldHVybnNcbiAqIGB0cnVlYC4gVGhlIHByZWRpY2F0ZSBmdW5jdGlvbiBpcyBhcHBsaWVkIHRvIG9uZSBhcmd1bWVudDogKih2YWx1ZSkqLlxuICpcbiAqIERpc3BhdGNoZXMgdG8gdGhlIGBkcm9wV2hpbGVgIG1ldGhvZCBvZiB0aGUgc2Vjb25kIGFyZ3VtZW50LCBpZiBwcmVzZW50LlxuICpcbiAqIEFjdHMgYXMgYSB0cmFuc2R1Y2VyIGlmIGEgdHJhbnNmb3JtZXIgaXMgZ2l2ZW4gaW4gbGlzdCBwb3NpdGlvbi5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC45LjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIChhIC0+IEJvb2xlYW4pIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiBjYWxsZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGNvbGxlY3Rpb24gdG8gaXRlcmF0ZSBvdmVyLlxuICogQHJldHVybiB7QXJyYXl9IEEgbmV3IGFycmF5LlxuICogQHNlZSBSLnRha2VXaGlsZSwgUi50cmFuc2R1Y2UsIFIuYWRkSW5kZXhcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgbHRlVHdvID0geCA9PiB4IDw9IDI7XG4gKlxuICogICAgICBSLmRyb3BXaGlsZShsdGVUd28sIFsxLCAyLCAzLCA0LCAzLCAyLCAxXSk7IC8vPT4gWzMsIDQsIDMsIDIsIDFdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihfZGlzcGF0Y2hhYmxlKFsnZHJvcFdoaWxlJ10sIF94ZHJvcFdoaWxlLCBmdW5jdGlvbiBkcm9wV2hpbGUocHJlZCwgbGlzdCkge1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGxlbiA9IGxpc3QubGVuZ3RoO1xuICB3aGlsZSAoaWR4IDwgbGVuICYmIHByZWQobGlzdFtpZHhdKSkge1xuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChsaXN0LCBpZHgpO1xufSkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfaXNGdW5jdGlvbiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2lzRnVuY3Rpb24nKTtcbnZhciBsaWZ0ID0gcmVxdWlyZSgnLi9saWZ0Jyk7XG52YXIgb3IgPSByZXF1aXJlKCcuL29yJyk7XG5cblxuLyoqXG4gKiBBIGZ1bmN0aW9uIHdyYXBwaW5nIGNhbGxzIHRvIHRoZSB0d28gZnVuY3Rpb25zIGluIGFuIGB8fGAgb3BlcmF0aW9uLFxuICogcmV0dXJuaW5nIHRoZSByZXN1bHQgb2YgdGhlIGZpcnN0IGZ1bmN0aW9uIGlmIGl0IGlzIHRydXRoLXkgYW5kIHRoZSByZXN1bHRcbiAqIG9mIHRoZSBzZWNvbmQgZnVuY3Rpb24gb3RoZXJ3aXNlLiBOb3RlIHRoYXQgdGhpcyBpcyBzaG9ydC1jaXJjdWl0ZWQsXG4gKiBtZWFuaW5nIHRoYXQgdGhlIHNlY29uZCBmdW5jdGlvbiB3aWxsIG5vdCBiZSBpbnZva2VkIGlmIHRoZSBmaXJzdCByZXR1cm5zIGFcbiAqIHRydXRoLXkgdmFsdWUuXG4gKlxuICogSW4gYWRkaXRpb24gdG8gZnVuY3Rpb25zLCBgUi5laXRoZXJgIGFsc28gYWNjZXB0cyBhbnkgZmFudGFzeS1sYW5kIGNvbXBhdGlibGVcbiAqIGFwcGxpY2F0aXZlIGZ1bmN0b3IuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTIuMFxuICogQGNhdGVnb3J5IExvZ2ljXG4gKiBAc2lnICgqLi4uIC0+IEJvb2xlYW4pIC0+ICgqLi4uIC0+IEJvb2xlYW4pIC0+ICgqLi4uIC0+IEJvb2xlYW4pXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmIGEgcHJlZGljYXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBnIGFub3RoZXIgcHJlZGljYXRlXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gYSBmdW5jdGlvbiB0aGF0IGFwcGxpZXMgaXRzIGFyZ3VtZW50cyB0byBgZmAgYW5kIGBnYCBhbmQgYHx8YHMgdGhlaXIgb3V0cHV0cyB0b2dldGhlci5cbiAqIEBzZWUgUi5vclxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBndDEwID0geCA9PiB4ID4gMTA7XG4gKiAgICAgIHZhciBldmVuID0geCA9PiB4ICUgMiA9PT0gMDtcbiAqICAgICAgdmFyIGYgPSBSLmVpdGhlcihndDEwLCBldmVuKTtcbiAqICAgICAgZigxMDEpOyAvLz0+IHRydWVcbiAqICAgICAgZig4KTsgLy89PiB0cnVlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBlaXRoZXIoZiwgZykge1xuICByZXR1cm4gX2lzRnVuY3Rpb24oZikgP1xuICAgIGZ1bmN0aW9uIF9laXRoZXIoKSB7XG4gICAgICByZXR1cm4gZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpIHx8IGcuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9IDpcbiAgICBsaWZ0KG9yKShmLCBnKTtcbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBfaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2ludGVybmFsL19pc0FyZ3VtZW50cycpO1xudmFyIF9pc0FycmF5ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faXNBcnJheScpO1xudmFyIF9pc09iamVjdCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2lzT2JqZWN0Jyk7XG52YXIgX2lzU3RyaW5nID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faXNTdHJpbmcnKTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIGVtcHR5IHZhbHVlIG9mIGl0cyBhcmd1bWVudCdzIHR5cGUuIFJhbWRhIGRlZmluZXMgdGhlIGVtcHR5XG4gKiB2YWx1ZSBvZiBBcnJheSAoYFtdYCksIE9iamVjdCAoYHt9YCksIFN0cmluZyAoYCcnYCksIGFuZCBBcmd1bWVudHMuIE90aGVyXG4gKiB0eXBlcyBhcmUgc3VwcG9ydGVkIGlmIHRoZXkgZGVmaW5lIGA8VHlwZT4uZW1wdHlgIGFuZC9vclxuICogYDxUeXBlPi5wcm90b3R5cGUuZW1wdHlgLlxuICpcbiAqIERpc3BhdGNoZXMgdG8gdGhlIGBlbXB0eWAgbWV0aG9kIG9mIHRoZSBmaXJzdCBhcmd1bWVudCwgaWYgcHJlc2VudC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4zLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyBhIC0+IGFcbiAqIEBwYXJhbSB7Kn0geFxuICogQHJldHVybiB7Kn1cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmVtcHR5KEp1c3QoNDIpKTsgICAgICAvLz0+IE5vdGhpbmcoKVxuICogICAgICBSLmVtcHR5KFsxLCAyLCAzXSk7ICAgICAvLz0+IFtdXG4gKiAgICAgIFIuZW1wdHkoJ3VuaWNvcm5zJyk7ICAgIC8vPT4gJydcbiAqICAgICAgUi5lbXB0eSh7eDogMSwgeTogMn0pOyAgLy89PiB7fVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gZW1wdHkoeCkge1xuICByZXR1cm4gKFxuICAgICh4ICE9IG51bGwgJiYgdHlwZW9mIHguZW1wdHkgPT09ICdmdW5jdGlvbicpID9cbiAgICAgIHguZW1wdHkoKSA6XG4gICAgKHggIT0gbnVsbCAmJiB4LmNvbnN0cnVjdG9yICE9IG51bGwgJiYgdHlwZW9mIHguY29uc3RydWN0b3IuZW1wdHkgPT09ICdmdW5jdGlvbicpID9cbiAgICAgIHguY29uc3RydWN0b3IuZW1wdHkoKSA6XG4gICAgX2lzQXJyYXkoeCkgP1xuICAgICAgW10gOlxuICAgIF9pc1N0cmluZyh4KSA/XG4gICAgICAnJyA6XG4gICAgX2lzT2JqZWN0KHgpID9cbiAgICAgIHt9IDpcbiAgICBfaXNBcmd1bWVudHMoeCkgP1xuICAgICAgKGZ1bmN0aW9uKCkgeyByZXR1cm4gYXJndW1lbnRzOyB9KCkpIDpcbiAgICAvLyBlbHNlXG4gICAgICB2b2lkIDBcbiAgKTtcbn0pO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcbnZhciBlcXVhbHMgPSByZXF1aXJlKCcuL2VxdWFscycpO1xuXG5cbi8qKlxuICogVGFrZXMgYSBmdW5jdGlvbiBhbmQgdHdvIHZhbHVlcyBpbiBpdHMgZG9tYWluIGFuZCByZXR1cm5zIGB0cnVlYCBpZiB0aGVcbiAqIHZhbHVlcyBtYXAgdG8gdGhlIHNhbWUgdmFsdWUgaW4gdGhlIGNvZG9tYWluOyBgZmFsc2VgIG90aGVyd2lzZS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xOC4wXG4gKiBAY2F0ZWdvcnkgUmVsYXRpb25cbiAqIEBzaWcgKGEgLT4gYikgLT4gYSAtPiBhIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZcbiAqIEBwYXJhbSB7Kn0geFxuICogQHBhcmFtIHsqfSB5XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuZXFCeShNYXRoLmFicywgNSwgLTUpOyAvLz0+IHRydWVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIGVxQnkoZiwgeCwgeSkge1xuICByZXR1cm4gZXF1YWxzKGYoeCksIGYoeSkpO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xudmFyIGVxdWFscyA9IHJlcXVpcmUoJy4vZXF1YWxzJyk7XG5cblxuLyoqXG4gKiBSZXBvcnRzIHdoZXRoZXIgdHdvIG9iamVjdHMgaGF2ZSB0aGUgc2FtZSB2YWx1ZSwgaW4gYFIuZXF1YWxzYCB0ZXJtcywgZm9yXG4gKiB0aGUgc3BlY2lmaWVkIHByb3BlcnR5LiBVc2VmdWwgYXMgYSBjdXJyaWVkIHByZWRpY2F0ZS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcgayAtPiB7azogdn0gLT4ge2s6IHZ9IC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqMVxuICogQHBhcmFtIHtPYmplY3R9IG9iajJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBvMSA9IHsgYTogMSwgYjogMiwgYzogMywgZDogNCB9O1xuICogICAgICB2YXIgbzIgPSB7IGE6IDEwLCBiOiAyMCwgYzogMywgZDogNDAgfTtcbiAqICAgICAgUi5lcVByb3BzKCdhJywgbzEsIG8yKTsgLy89PiBmYWxzZVxuICogICAgICBSLmVxUHJvcHMoJ2MnLCBvMSwgbzIpOyAvLz0+IHRydWVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIGVxUHJvcHMocHJvcCwgb2JqMSwgb2JqMikge1xuICByZXR1cm4gZXF1YWxzKG9iajFbcHJvcF0sIG9iajJbcHJvcF0pO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9lcXVhbHMgPSByZXF1aXJlKCcuL2ludGVybmFsL19lcXVhbHMnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIGl0cyBhcmd1bWVudHMgYXJlIGVxdWl2YWxlbnQsIGBmYWxzZWAgb3RoZXJ3aXNlLiBIYW5kbGVzXG4gKiBjeWNsaWNhbCBkYXRhIHN0cnVjdHVyZXMuXG4gKlxuICogRGlzcGF0Y2hlcyBzeW1tZXRyaWNhbGx5IHRvIHRoZSBgZXF1YWxzYCBtZXRob2RzIG9mIGJvdGggYXJndW1lbnRzLCBpZlxuICogcHJlc2VudC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNS4wXG4gKiBAY2F0ZWdvcnkgUmVsYXRpb25cbiAqIEBzaWcgYSAtPiBiIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuZXF1YWxzKDEsIDEpOyAvLz0+IHRydWVcbiAqICAgICAgUi5lcXVhbHMoMSwgJzEnKTsgLy89PiBmYWxzZVxuICogICAgICBSLmVxdWFscyhbMSwgMiwgM10sIFsxLCAyLCAzXSk7IC8vPT4gdHJ1ZVxuICpcbiAqICAgICAgdmFyIGEgPSB7fTsgYS52ID0gYTtcbiAqICAgICAgdmFyIGIgPSB7fTsgYi52ID0gYjtcbiAqICAgICAgUi5lcXVhbHMoYSwgYik7IC8vPT4gdHJ1ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gZXF1YWxzKGEsIGIpIHtcbiAgcmV0dXJuIF9lcXVhbHMoYSwgYiwgW10sIFtdKTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgb2JqZWN0IGJ5IHJlY3Vyc2l2ZWx5IGV2b2x2aW5nIGEgc2hhbGxvdyBjb3B5IG9mIGBvYmplY3RgLFxuICogYWNjb3JkaW5nIHRvIHRoZSBgdHJhbnNmb3JtYXRpb25gIGZ1bmN0aW9ucy4gQWxsIG5vbi1wcmltaXRpdmUgcHJvcGVydGllc1xuICogYXJlIGNvcGllZCBieSByZWZlcmVuY2UuXG4gKlxuICogQSBgdHJhbnNmb3JtYXRpb25gIGZ1bmN0aW9uIHdpbGwgbm90IGJlIGludm9rZWQgaWYgaXRzIGNvcnJlc3BvbmRpbmcga2V5XG4gKiBkb2VzIG5vdCBleGlzdCBpbiB0aGUgZXZvbHZlZCBvYmplY3QuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOS4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIHtrOiAodiAtPiB2KX0gLT4ge2s6IHZ9IC0+IHtrOiB2fVxuICogQHBhcmFtIHtPYmplY3R9IHRyYW5zZm9ybWF0aW9ucyBUaGUgb2JqZWN0IHNwZWNpZnlpbmcgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb25zIHRvIGFwcGx5XG4gKiAgICAgICAgdG8gdGhlIG9iamVjdC5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBiZSB0cmFuc2Zvcm1lZC5cbiAqIEByZXR1cm4ge09iamVjdH0gVGhlIHRyYW5zZm9ybWVkIG9iamVjdC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgdG9tYXRvICA9IHtmaXJzdE5hbWU6ICcgIFRvbWF0byAnLCBkYXRhOiB7ZWxhcHNlZDogMTAwLCByZW1haW5pbmc6IDE0MDB9LCBpZDoxMjN9O1xuICogICAgICB2YXIgdHJhbnNmb3JtYXRpb25zID0ge1xuICogICAgICAgIGZpcnN0TmFtZTogUi50cmltLFxuICogICAgICAgIGxhc3ROYW1lOiBSLnRyaW0sIC8vIFdpbGwgbm90IGdldCBpbnZva2VkLlxuICogICAgICAgIGRhdGE6IHtlbGFwc2VkOiBSLmFkZCgxKSwgcmVtYWluaW5nOiBSLmFkZCgtMSl9XG4gKiAgICAgIH07XG4gKiAgICAgIFIuZXZvbHZlKHRyYW5zZm9ybWF0aW9ucywgdG9tYXRvKTsgLy89PiB7Zmlyc3ROYW1lOiAnVG9tYXRvJywgZGF0YToge2VsYXBzZWQ6IDEwMSwgcmVtYWluaW5nOiAxMzk5fSwgaWQ6MTIzfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gZXZvbHZlKHRyYW5zZm9ybWF0aW9ucywgb2JqZWN0KSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgdmFyIHRyYW5zZm9ybWF0aW9uLCBrZXksIHR5cGU7XG4gIGZvciAoa2V5IGluIG9iamVjdCkge1xuICAgIHRyYW5zZm9ybWF0aW9uID0gdHJhbnNmb3JtYXRpb25zW2tleV07XG4gICAgdHlwZSA9IHR5cGVvZiB0cmFuc2Zvcm1hdGlvbjtcbiAgICByZXN1bHRba2V5XSA9IHR5cGUgPT09ICdmdW5jdGlvbicgICAgICAgICAgICAgICAgID8gdHJhbnNmb3JtYXRpb24ob2JqZWN0W2tleV0pXG4gICAgICAgICAgICAgICAgOiB0cmFuc2Zvcm1hdGlvbiAmJiB0eXBlID09PSAnb2JqZWN0JyA/IGV2b2x2ZSh0cmFuc2Zvcm1hdGlvbiwgb2JqZWN0W2tleV0pXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG9iamVjdFtrZXldO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2Rpc3BhdGNoYWJsZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZScpO1xudmFyIF9maWx0ZXIgPSByZXF1aXJlKCcuL2ludGVybmFsL19maWx0ZXInKTtcbnZhciBfaXNPYmplY3QgPSByZXF1aXJlKCcuL2ludGVybmFsL19pc09iamVjdCcpO1xudmFyIF9yZWR1Y2UgPSByZXF1aXJlKCcuL2ludGVybmFsL19yZWR1Y2UnKTtcbnZhciBfeGZpbHRlciA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3hmaWx0ZXInKTtcbnZhciBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cblxuLyoqXG4gKiBUYWtlcyBhIHByZWRpY2F0ZSBhbmQgYSBcImZpbHRlcmFibGVcIiwgYW5kIHJldHVybnMgYSBuZXcgZmlsdGVyYWJsZSBvZiB0aGVcbiAqIHNhbWUgdHlwZSBjb250YWluaW5nIHRoZSBtZW1iZXJzIG9mIHRoZSBnaXZlbiBmaWx0ZXJhYmxlIHdoaWNoIHNhdGlzZnkgdGhlXG4gKiBnaXZlbiBwcmVkaWNhdGUuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYGZpbHRlcmAgbWV0aG9kIG9mIHRoZSBzZWNvbmQgYXJndW1lbnQsIGlmIHByZXNlbnQuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgRmlsdGVyYWJsZSBmID0+IChhIC0+IEJvb2xlYW4pIC0+IGYgYSAtPiBmIGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGZpbHRlcmFibGVcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQHNlZSBSLnJlamVjdCwgUi50cmFuc2R1Y2UsIFIuYWRkSW5kZXhcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgaXNFdmVuID0gbiA9PiBuICUgMiA9PT0gMDtcbiAqXG4gKiAgICAgIFIuZmlsdGVyKGlzRXZlbiwgWzEsIDIsIDMsIDRdKTsgLy89PiBbMiwgNF1cbiAqXG4gKiAgICAgIFIuZmlsdGVyKGlzRXZlbiwge2E6IDEsIGI6IDIsIGM6IDMsIGQ6IDR9KTsgLy89PiB7YjogMiwgZDogNH1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKF9kaXNwYXRjaGFibGUoWydmaWx0ZXInXSwgX3hmaWx0ZXIsIGZ1bmN0aW9uKHByZWQsIGZpbHRlcmFibGUpIHtcbiAgcmV0dXJuIChcbiAgICBfaXNPYmplY3QoZmlsdGVyYWJsZSkgP1xuICAgICAgX3JlZHVjZShmdW5jdGlvbihhY2MsIGtleSkge1xuICAgICAgICBpZiAocHJlZChmaWx0ZXJhYmxlW2tleV0pKSB7XG4gICAgICAgICAgYWNjW2tleV0gPSBmaWx0ZXJhYmxlW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9LCBrZXlzKGZpbHRlcmFibGUpKSA6XG4gICAgLy8gZWxzZVxuICAgICAgX2ZpbHRlcihwcmVkLCBmaWx0ZXJhYmxlKVxuICApO1xufSkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfZGlzcGF0Y2hhYmxlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fZGlzcGF0Y2hhYmxlJyk7XG52YXIgX3hmaW5kID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9feGZpbmQnKTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIGxpc3Qgd2hpY2ggbWF0Y2hlcyB0aGUgcHJlZGljYXRlLCBvclxuICogYHVuZGVmaW5lZGAgaWYgbm8gZWxlbWVudCBtYXRjaGVzLlxuICpcbiAqIERpc3BhdGNoZXMgdG8gdGhlIGBmaW5kYCBtZXRob2Qgb2YgdGhlIHNlY29uZCBhcmd1bWVudCwgaWYgcHJlc2VudC5cbiAqXG4gKiBBY3RzIGFzIGEgdHJhbnNkdWNlciBpZiBhIHRyYW5zZm9ybWVyIGlzIGdpdmVuIGluIGxpc3QgcG9zaXRpb24uXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoYSAtPiBCb29sZWFuKSAtPiBbYV0gLT4gYSB8IHVuZGVmaW5lZFxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIHByZWRpY2F0ZSBmdW5jdGlvbiB1c2VkIHRvIGRldGVybWluZSBpZiB0aGUgZWxlbWVudCBpcyB0aGVcbiAqICAgICAgICBkZXNpcmVkIG9uZS5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGFycmF5IHRvIGNvbnNpZGVyLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgZWxlbWVudCBmb3VuZCwgb3IgYHVuZGVmaW5lZGAuXG4gKiBAc2VlIFIudHJhbnNkdWNlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHhzID0gW3thOiAxfSwge2E6IDJ9LCB7YTogM31dO1xuICogICAgICBSLmZpbmQoUi5wcm9wRXEoJ2EnLCAyKSkoeHMpOyAvLz0+IHthOiAyfVxuICogICAgICBSLmZpbmQoUi5wcm9wRXEoJ2EnLCA0KSkoeHMpOyAvLz0+IHVuZGVmaW5lZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoX2Rpc3BhdGNoYWJsZShbJ2ZpbmQnXSwgX3hmaW5kLCBmdW5jdGlvbiBmaW5kKGZuLCBsaXN0KSB7XG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGVuID0gbGlzdC5sZW5ndGg7XG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICBpZiAoZm4obGlzdFtpZHhdKSkge1xuICAgICAgcmV0dXJuIGxpc3RbaWR4XTtcbiAgICB9XG4gICAgaWR4ICs9IDE7XG4gIH1cbn0pKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2Rpc3BhdGNoYWJsZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZScpO1xudmFyIF94ZmluZEluZGV4ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9feGZpbmRJbmRleCcpO1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGVsZW1lbnQgb2YgdGhlIGxpc3Qgd2hpY2ggbWF0Y2hlcyB0aGVcbiAqIHByZWRpY2F0ZSwgb3IgYC0xYCBpZiBubyBlbGVtZW50IG1hdGNoZXMuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMVxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gW2FdIC0+IE51bWJlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIHByZWRpY2F0ZSBmdW5jdGlvbiB1c2VkIHRvIGRldGVybWluZSBpZiB0aGUgZWxlbWVudCBpcyB0aGVcbiAqIGRlc2lyZWQgb25lLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgYXJyYXkgdG8gY29uc2lkZXIuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSBpbmRleCBvZiB0aGUgZWxlbWVudCBmb3VuZCwgb3IgYC0xYC5cbiAqIEBzZWUgUi50cmFuc2R1Y2VcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgeHMgPSBbe2E6IDF9LCB7YTogMn0sIHthOiAzfV07XG4gKiAgICAgIFIuZmluZEluZGV4KFIucHJvcEVxKCdhJywgMikpKHhzKTsgLy89PiAxXG4gKiAgICAgIFIuZmluZEluZGV4KFIucHJvcEVxKCdhJywgNCkpKHhzKTsgLy89PiAtMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoX2Rpc3BhdGNoYWJsZShbXSwgX3hmaW5kSW5kZXgsIGZ1bmN0aW9uIGZpbmRJbmRleChmbiwgbGlzdCkge1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGxlbiA9IGxpc3QubGVuZ3RoO1xuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgaWYgKGZuKGxpc3RbaWR4XSkpIHtcbiAgICAgIHJldHVybiBpZHg7XG4gICAgfVxuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiAtMTtcbn0pKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2Rpc3BhdGNoYWJsZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZScpO1xudmFyIF94ZmluZExhc3QgPSByZXF1aXJlKCcuL2ludGVybmFsL194ZmluZExhc3QnKTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIGxhc3QgZWxlbWVudCBvZiB0aGUgbGlzdCB3aGljaCBtYXRjaGVzIHRoZSBwcmVkaWNhdGUsIG9yXG4gKiBgdW5kZWZpbmVkYCBpZiBubyBlbGVtZW50IG1hdGNoZXMuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMVxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gW2FdIC0+IGEgfCB1bmRlZmluZWRcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBwcmVkaWNhdGUgZnVuY3Rpb24gdXNlZCB0byBkZXRlcm1pbmUgaWYgdGhlIGVsZW1lbnQgaXMgdGhlXG4gKiBkZXNpcmVkIG9uZS5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGFycmF5IHRvIGNvbnNpZGVyLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgZWxlbWVudCBmb3VuZCwgb3IgYHVuZGVmaW5lZGAuXG4gKiBAc2VlIFIudHJhbnNkdWNlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHhzID0gW3thOiAxLCBiOiAwfSwge2E6MSwgYjogMX1dO1xuICogICAgICBSLmZpbmRMYXN0KFIucHJvcEVxKCdhJywgMSkpKHhzKTsgLy89PiB7YTogMSwgYjogMX1cbiAqICAgICAgUi5maW5kTGFzdChSLnByb3BFcSgnYScsIDQpKSh4cyk7IC8vPT4gdW5kZWZpbmVkXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihfZGlzcGF0Y2hhYmxlKFtdLCBfeGZpbmRMYXN0LCBmdW5jdGlvbiBmaW5kTGFzdChmbiwgbGlzdCkge1xuICB2YXIgaWR4ID0gbGlzdC5sZW5ndGggLSAxO1xuICB3aGlsZSAoaWR4ID49IDApIHtcbiAgICBpZiAoZm4obGlzdFtpZHhdKSkge1xuICAgICAgcmV0dXJuIGxpc3RbaWR4XTtcbiAgICB9XG4gICAgaWR4IC09IDE7XG4gIH1cbn0pKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2Rpc3BhdGNoYWJsZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZScpO1xudmFyIF94ZmluZExhc3RJbmRleCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3hmaW5kTGFzdEluZGV4Jyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBpbmRleCBvZiB0aGUgbGFzdCBlbGVtZW50IG9mIHRoZSBsaXN0IHdoaWNoIG1hdGNoZXMgdGhlXG4gKiBwcmVkaWNhdGUsIG9yIGAtMWAgaWYgbm8gZWxlbWVudCBtYXRjaGVzLlxuICpcbiAqIEFjdHMgYXMgYSB0cmFuc2R1Y2VyIGlmIGEgdHJhbnNmb3JtZXIgaXMgZ2l2ZW4gaW4gbGlzdCBwb3NpdGlvbi5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjFcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIChhIC0+IEJvb2xlYW4pIC0+IFthXSAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBwcmVkaWNhdGUgZnVuY3Rpb24gdXNlZCB0byBkZXRlcm1pbmUgaWYgdGhlIGVsZW1lbnQgaXMgdGhlXG4gKiBkZXNpcmVkIG9uZS5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGFycmF5IHRvIGNvbnNpZGVyLlxuICogQHJldHVybiB7TnVtYmVyfSBUaGUgaW5kZXggb2YgdGhlIGVsZW1lbnQgZm91bmQsIG9yIGAtMWAuXG4gKiBAc2VlIFIudHJhbnNkdWNlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHhzID0gW3thOiAxLCBiOiAwfSwge2E6MSwgYjogMX1dO1xuICogICAgICBSLmZpbmRMYXN0SW5kZXgoUi5wcm9wRXEoJ2EnLCAxKSkoeHMpOyAvLz0+IDFcbiAqICAgICAgUi5maW5kTGFzdEluZGV4KFIucHJvcEVxKCdhJywgNCkpKHhzKTsgLy89PiAtMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoX2Rpc3BhdGNoYWJsZShbXSwgX3hmaW5kTGFzdEluZGV4LCBmdW5jdGlvbiBmaW5kTGFzdEluZGV4KGZuLCBsaXN0KSB7XG4gIHZhciBpZHggPSBsaXN0Lmxlbmd0aCAtIDE7XG4gIHdoaWxlIChpZHggPj0gMCkge1xuICAgIGlmIChmbihsaXN0W2lkeF0pKSB7XG4gICAgICByZXR1cm4gaWR4O1xuICAgIH1cbiAgICBpZHggLT0gMTtcbiAgfVxuICByZXR1cm4gLTE7XG59KSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIF9tYWtlRmxhdCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX21ha2VGbGF0Jyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGxpc3QgYnkgcHVsbGluZyBldmVyeSBpdGVtIG91dCBvZiBpdCAoYW5kIGFsbCBpdHMgc3ViLWFycmF5cylcbiAqIGFuZCBwdXR0aW5nIHRoZW0gaW4gYSBuZXcgYXJyYXksIGRlcHRoLWZpcnN0LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgW2FdIC0+IFtiXVxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgYXJyYXkgdG8gY29uc2lkZXIuXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIGZsYXR0ZW5lZCBsaXN0LlxuICogQHNlZSBSLnVubmVzdFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuZmxhdHRlbihbMSwgMiwgWzMsIDRdLCA1LCBbNiwgWzcsIDgsIFs5LCBbMTAsIDExXSwgMTJdXV1dKTtcbiAqICAgICAgLy89PiBbMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOSwgMTAsIDExLCAxMl1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKF9tYWtlRmxhdCh0cnVlKSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIGN1cnJ5ID0gcmVxdWlyZSgnLi9jdXJyeScpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBmdW5jdGlvbiBtdWNoIGxpa2UgdGhlIHN1cHBsaWVkIG9uZSwgZXhjZXB0IHRoYXQgdGhlIGZpcnN0IHR3b1xuICogYXJndW1lbnRzJyBvcmRlciBpcyByZXZlcnNlZC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoYSAtPiBiIC0+IGMgLT4gLi4uIC0+IHopIC0+IChiIC0+IGEgLT4gYyAtPiAuLi4gLT4geilcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBpbnZva2Ugd2l0aCBpdHMgZmlyc3QgdHdvIHBhcmFtZXRlcnMgcmV2ZXJzZWQuXG4gKiBAcmV0dXJuIHsqfSBUaGUgcmVzdWx0IG9mIGludm9raW5nIGBmbmAgd2l0aCBpdHMgZmlyc3QgdHdvIHBhcmFtZXRlcnMnIG9yZGVyIHJldmVyc2VkLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBtZXJnZVRocmVlID0gKGEsIGIsIGMpID0+IFtdLmNvbmNhdChhLCBiLCBjKTtcbiAqXG4gKiAgICAgIG1lcmdlVGhyZWUoMSwgMiwgMyk7IC8vPT4gWzEsIDIsIDNdXG4gKlxuICogICAgICBSLmZsaXAobWVyZ2VUaHJlZSkoMSwgMiwgMyk7IC8vPT4gWzIsIDEsIDNdXG4gKiBAc3ltYiBSLmZsaXAoZikoYSwgYiwgYykgPSBmKGIsIGEsIGMpXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBmbGlwKGZuKSB7XG4gIHJldHVybiBjdXJyeShmdW5jdGlvbihhLCBiKSB7XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIGFyZ3NbMF0gPSBiO1xuICAgIGFyZ3NbMV0gPSBhO1xuICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBhcmdzKTtcbiAgfSk7XG59KTtcbiIsInZhciBfY2hlY2tGb3JNZXRob2QgPSByZXF1aXJlKCcuL2ludGVybmFsL19jaGVja0Zvck1ldGhvZCcpO1xudmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIEl0ZXJhdGUgb3ZlciBhbiBpbnB1dCBgbGlzdGAsIGNhbGxpbmcgYSBwcm92aWRlZCBmdW5jdGlvbiBgZm5gIGZvciBlYWNoXG4gKiBlbGVtZW50IGluIHRoZSBsaXN0LlxuICpcbiAqIGBmbmAgcmVjZWl2ZXMgb25lIGFyZ3VtZW50OiAqKHZhbHVlKSouXG4gKlxuICogTm90ZTogYFIuZm9yRWFjaGAgZG9lcyBub3Qgc2tpcCBkZWxldGVkIG9yIHVuYXNzaWduZWQgaW5kaWNlcyAoc3BhcnNlXG4gKiBhcnJheXMpLCB1bmxpa2UgdGhlIG5hdGl2ZSBgQXJyYXkucHJvdG90eXBlLmZvckVhY2hgIG1ldGhvZC4gRm9yIG1vcmVcbiAqIGRldGFpbHMgb24gdGhpcyBiZWhhdmlvciwgc2VlOlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvZm9yRWFjaCNEZXNjcmlwdGlvblxuICpcbiAqIEFsc28gbm90ZSB0aGF0LCB1bmxpa2UgYEFycmF5LnByb3RvdHlwZS5mb3JFYWNoYCwgUmFtZGEncyBgZm9yRWFjaGAgcmV0dXJuc1xuICogdGhlIG9yaWdpbmFsIGFycmF5LiBJbiBzb21lIGxpYnJhcmllcyB0aGlzIGZ1bmN0aW9uIGlzIG5hbWVkIGBlYWNoYC5cbiAqXG4gKiBEaXNwYXRjaGVzIHRvIHRoZSBgZm9yRWFjaGAgbWV0aG9kIG9mIHRoZSBzZWNvbmQgYXJndW1lbnQsIGlmIHByZXNlbnQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4xXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoYSAtPiAqKSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLiBSZWNlaXZlcyBvbmUgYXJndW1lbnQsIGB2YWx1ZWAuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgb3JpZ2luYWwgbGlzdC5cbiAqIEBzZWUgUi5hZGRJbmRleFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBwcmludFhQbHVzRml2ZSA9IHggPT4gY29uc29sZS5sb2coeCArIDUpO1xuICogICAgICBSLmZvckVhY2gocHJpbnRYUGx1c0ZpdmUsIFsxLCAyLCAzXSk7IC8vPT4gWzEsIDIsIDNdXG4gKiAgICAgIC8vIGxvZ3MgNlxuICogICAgICAvLyBsb2dzIDdcbiAqICAgICAgLy8gbG9ncyA4XG4gKiBAc3ltYiBSLmZvckVhY2goZiwgW2EsIGIsIGNdKSA9IFthLCBiLCBjXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoX2NoZWNrRm9yTWV0aG9kKCdmb3JFYWNoJywgZnVuY3Rpb24gZm9yRWFjaChmbiwgbGlzdCkge1xuICB2YXIgbGVuID0gbGlzdC5sZW5ndGg7XG4gIHZhciBpZHggPSAwO1xuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgZm4obGlzdFtpZHhdKTtcbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gbGlzdDtcbn0pKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIga2V5cyA9IHJlcXVpcmUoJy4va2V5cycpO1xuXG5cbi8qKlxuICogSXRlcmF0ZSBvdmVyIGFuIGlucHV0IGBvYmplY3RgLCBjYWxsaW5nIGEgcHJvdmlkZWQgZnVuY3Rpb24gYGZuYCBmb3IgZWFjaFxuICoga2V5IGFuZCB2YWx1ZSBpbiB0aGUgb2JqZWN0LlxuICpcbiAqIGBmbmAgcmVjZWl2ZXMgdGhyZWUgYXJndW1lbnQ6ICoodmFsdWUsIGtleSwgb2JqKSouXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMjMuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyAoKGEsIFN0cmluZywgU3RyTWFwIGEpIC0+IEFueSkgLT4gU3RyTWFwIGEgLT4gU3RyTWFwIGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBpbnZva2UuIFJlY2VpdmVzIHRocmVlIGFyZ3VtZW50LCBgdmFsdWVgLCBga2V5YCwgYG9iamAuXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHJldHVybiB7T2JqZWN0fSBUaGUgb3JpZ2luYWwgb2JqZWN0LlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBwcmludEtleUNvbmNhdFZhbHVlID0gKHZhbHVlLCBrZXkpID0+IGNvbnNvbGUubG9nKGtleSArICc6JyArIHZhbHVlKTtcbiAqICAgICAgUi5mb3JFYWNoT2JqSW5kZXhlZChwcmludEtleUNvbmNhdFZhbHVlLCB7eDogMSwgeTogMn0pOyAvLz0+IHt4OiAxLCB5OiAyfVxuICogICAgICAvLyBsb2dzIHg6MVxuICogICAgICAvLyBsb2dzIHk6MlxuICogQHN5bWIgUi5mb3JFYWNoT2JqSW5kZXhlZChmLCB7eDogYSwgeTogYn0pID0ge3g6IGEsIHk6IGJ9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBmb3JFYWNoT2JqSW5kZXhlZChmbiwgb2JqKSB7XG4gIHZhciBrZXlMaXN0ID0ga2V5cyhvYmopO1xuICB2YXIgaWR4ID0gMDtcbiAgd2hpbGUgKGlkeCA8IGtleUxpc3QubGVuZ3RoKSB7XG4gICAgdmFyIGtleSA9IGtleUxpc3RbaWR4XTtcbiAgICBmbihvYmpba2V5XSwga2V5LCBvYmopO1xuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiBvYmo7XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG5cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IG9iamVjdCBmcm9tIGEgbGlzdCBrZXktdmFsdWUgcGFpcnMuIElmIGEga2V5IGFwcGVhcnMgaW5cbiAqIG11bHRpcGxlIHBhaXJzLCB0aGUgcmlnaHRtb3N0IHBhaXIgaXMgaW5jbHVkZWQgaW4gdGhlIG9iamVjdC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4zLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIFtbayx2XV0gLT4ge2s6IHZ9XG4gKiBAcGFyYW0ge0FycmF5fSBwYWlycyBBbiBhcnJheSBvZiB0d28tZWxlbWVudCBhcnJheXMgdGhhdCB3aWxsIGJlIHRoZSBrZXlzIGFuZCB2YWx1ZXMgb2YgdGhlIG91dHB1dCBvYmplY3QuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBvYmplY3QgbWFkZSBieSBwYWlyaW5nIHVwIGBrZXlzYCBhbmQgYHZhbHVlc2AuXG4gKiBAc2VlIFIudG9QYWlycywgUi5wYWlyXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5mcm9tUGFpcnMoW1snYScsIDFdLCBbJ2InLCAyXSwgWydjJywgM11dKTsgLy89PiB7YTogMSwgYjogMiwgYzogM31cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGZyb21QYWlycyhwYWlycykge1xuICB2YXIgcmVzdWx0ID0ge307XG4gIHZhciBpZHggPSAwO1xuICB3aGlsZSAoaWR4IDwgcGFpcnMubGVuZ3RoKSB7XG4gICAgcmVzdWx0W3BhaXJzW2lkeF1bMF1dID0gcGFpcnNbaWR4XVsxXTtcbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCJ2YXIgX2NoZWNrRm9yTWV0aG9kID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY2hlY2tGb3JNZXRob2QnKTtcbnZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgcmVkdWNlQnkgPSByZXF1aXJlKCcuL3JlZHVjZUJ5Jyk7XG5cbi8qKlxuICogU3BsaXRzIGEgbGlzdCBpbnRvIHN1Yi1saXN0cyBzdG9yZWQgaW4gYW4gb2JqZWN0LCBiYXNlZCBvbiB0aGUgcmVzdWx0IG9mXG4gKiBjYWxsaW5nIGEgU3RyaW5nLXJldHVybmluZyBmdW5jdGlvbiBvbiBlYWNoIGVsZW1lbnQsIGFuZCBncm91cGluZyB0aGVcbiAqIHJlc3VsdHMgYWNjb3JkaW5nIHRvIHZhbHVlcyByZXR1cm5lZC5cbiAqXG4gKiBEaXNwYXRjaGVzIHRvIHRoZSBgZ3JvdXBCeWAgbWV0aG9kIG9mIHRoZSBzZWNvbmQgYXJndW1lbnQsIGlmIHByZXNlbnQuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gU3RyaW5nKSAtPiBbYV0gLT4ge1N0cmluZzogW2FdfVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gOjogYSAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGFycmF5IHRvIGdyb3VwXG4gKiBAcmV0dXJuIHtPYmplY3R9IEFuIG9iamVjdCB3aXRoIHRoZSBvdXRwdXQgb2YgYGZuYCBmb3Iga2V5cywgbWFwcGVkIHRvIGFycmF5cyBvZiBlbGVtZW50c1xuICogICAgICAgICB0aGF0IHByb2R1Y2VkIHRoYXQga2V5IHdoZW4gcGFzc2VkIHRvIGBmbmAuXG4gKiBAc2VlIFIudHJhbnNkdWNlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGJ5R3JhZGUgPSBSLmdyb3VwQnkoZnVuY3Rpb24oc3R1ZGVudCkge1xuICogICAgICAgIHZhciBzY29yZSA9IHN0dWRlbnQuc2NvcmU7XG4gKiAgICAgICAgcmV0dXJuIHNjb3JlIDwgNjUgPyAnRicgOlxuICogICAgICAgICAgICAgICBzY29yZSA8IDcwID8gJ0QnIDpcbiAqICAgICAgICAgICAgICAgc2NvcmUgPCA4MCA/ICdDJyA6XG4gKiAgICAgICAgICAgICAgIHNjb3JlIDwgOTAgPyAnQicgOiAnQSc7XG4gKiAgICAgIH0pO1xuICogICAgICB2YXIgc3R1ZGVudHMgPSBbe25hbWU6ICdBYmJ5Jywgc2NvcmU6IDg0fSxcbiAqICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnRWRkeScsIHNjb3JlOiA1OH0sXG4gKiAgICAgICAgICAgICAgICAgICAgICAvLyAuLi5cbiAqICAgICAgICAgICAgICAgICAgICAgIHtuYW1lOiAnSmFjaycsIHNjb3JlOiA2OX1dO1xuICogICAgICBieUdyYWRlKHN0dWRlbnRzKTtcbiAqICAgICAgLy8ge1xuICogICAgICAvLyAgICdBJzogW3tuYW1lOiAnRGlhbm5lJywgc2NvcmU6IDk5fV0sXG4gKiAgICAgIC8vICAgJ0InOiBbe25hbWU6ICdBYmJ5Jywgc2NvcmU6IDg0fV1cbiAqICAgICAgLy8gICAvLyAuLi4sXG4gKiAgICAgIC8vICAgJ0YnOiBbe25hbWU6ICdFZGR5Jywgc2NvcmU6IDU4fV1cbiAqICAgICAgLy8gfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoX2NoZWNrRm9yTWV0aG9kKCdncm91cEJ5JywgcmVkdWNlQnkoZnVuY3Rpb24oYWNjLCBpdGVtKSB7XG4gIGlmIChhY2MgPT0gbnVsbCkge1xuICAgIGFjYyA9IFtdO1xuICB9XG4gIGFjYy5wdXNoKGl0ZW0pO1xuICByZXR1cm4gYWNjO1xufSwgbnVsbCkpKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cbi8qKlxuICogVGFrZXMgYSBsaXN0IGFuZCByZXR1cm5zIGEgbGlzdCBvZiBsaXN0cyB3aGVyZSBlYWNoIHN1Ymxpc3QncyBlbGVtZW50cyBhcmVcbiAqIGFsbCBcImVxdWFsXCIgYWNjb3JkaW5nIHRvIHRoZSBwcm92aWRlZCBlcXVhbGl0eSBmdW5jdGlvbi5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4yMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoKGEsIGEpIOKGkiBCb29sZWFuKSDihpIgW2FdIOKGkiBbW2FdXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gRnVuY3Rpb24gZm9yIGRldGVybWluaW5nIHdoZXRoZXIgdHdvIGdpdmVuIChhZGphY2VudClcbiAqICAgICAgICBlbGVtZW50cyBzaG91bGQgYmUgaW4gdGhlIHNhbWUgZ3JvdXBcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGFycmF5IHRvIGdyb3VwLiBBbHNvIGFjY2VwdHMgYSBzdHJpbmcsIHdoaWNoIHdpbGwgYmVcbiAqICAgICAgICB0cmVhdGVkIGFzIGEgbGlzdCBvZiBjaGFyYWN0ZXJzLlxuICogQHJldHVybiB7TGlzdH0gQSBsaXN0IHRoYXQgY29udGFpbnMgc3VibGlzdHMgb2YgZXF1YWwgZWxlbWVudHMsXG4gKiAgICAgICAgIHdob3NlIGNvbmNhdGVuYXRpb25zIGFyZSBlcXVhbCB0byB0aGUgb3JpZ2luYWwgbGlzdC5cbiAqIEBleGFtcGxlXG4gKlxuICogUi5ncm91cFdpdGgoUi5lcXVhbHMsIFswLCAxLCAxLCAyLCAzLCA1LCA4LCAxMywgMjFdKVxuICogLy89PiBbWzBdLCBbMSwgMV0sIFsyXSwgWzNdLCBbNV0sIFs4XSwgWzEzXSwgWzIxXV1cbiAqXG4gKiBSLmdyb3VwV2l0aCgoYSwgYikgPT4gYSAlIDIgPT09IGIgJSAyLCBbMCwgMSwgMSwgMiwgMywgNSwgOCwgMTMsIDIxXSlcbiAqIC8vPT4gW1swXSwgWzEsIDFdLCBbMl0sIFszLCA1XSwgWzhdLCBbMTMsIDIxXV1cbiAqXG4gKiBSLmdyb3VwV2l0aChSLmVxQnkoaXNWb3dlbCksICdhZXN0aW91JylcbiAqIC8vPT4gWydhZScsICdzdCcsICdpb3UnXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24oZm4sIGxpc3QpIHtcbiAgdmFyIHJlcyA9IFtdO1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGxlbiA9IGxpc3QubGVuZ3RoO1xuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgdmFyIG5leHRpZHggPSBpZHggKyAxO1xuICAgIHdoaWxlIChuZXh0aWR4IDwgbGVuICYmIGZuKGxpc3RbaWR4XSwgbGlzdFtuZXh0aWR4XSkpIHtcbiAgICAgIG5leHRpZHggKz0gMTtcbiAgICB9XG4gICAgcmVzLnB1c2gobGlzdC5zbGljZShpZHgsIG5leHRpZHgpKTtcbiAgICBpZHggPSBuZXh0aWR4O1xuICB9XG4gIHJldHVybiByZXM7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgZ3JlYXRlciB0aGFuIHRoZSBzZWNvbmQ7IGBmYWxzZWBcbiAqIG90aGVyd2lzZS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBSZWxhdGlvblxuICogQHNpZyBPcmQgYSA9PiBhIC0+IGEgLT4gQm9vbGVhblxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAc2VlIFIubHRcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmd0KDIsIDEpOyAvLz0+IHRydWVcbiAqICAgICAgUi5ndCgyLCAyKTsgLy89PiBmYWxzZVxuICogICAgICBSLmd0KDIsIDMpOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIuZ3QoJ2EnLCAneicpOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIuZ3QoJ3onLCAnYScpOyAvLz0+IHRydWVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGd0KGEsIGIpIHsgcmV0dXJuIGEgPiBiOyB9KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgZ3JlYXRlciB0aGFuIG9yIGVxdWFsIHRvIHRoZSBzZWNvbmQ7XG4gKiBgZmFsc2VgIG90aGVyd2lzZS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBSZWxhdGlvblxuICogQHNpZyBPcmQgYSA9PiBhIC0+IGEgLT4gQm9vbGVhblxuICogQHBhcmFtIHtOdW1iZXJ9IGFcbiAqIEBwYXJhbSB7TnVtYmVyfSBiXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHNlZSBSLmx0ZVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuZ3RlKDIsIDEpOyAvLz0+IHRydWVcbiAqICAgICAgUi5ndGUoMiwgMik7IC8vPT4gdHJ1ZVxuICogICAgICBSLmd0ZSgyLCAzKTsgLy89PiBmYWxzZVxuICogICAgICBSLmd0ZSgnYScsICd6Jyk7IC8vPT4gZmFsc2VcbiAqICAgICAgUi5ndGUoJ3onLCAnYScpOyAvLz0+IHRydWVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGd0ZShhLCBiKSB7IHJldHVybiBhID49IGI7IH0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfaGFzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faGFzJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHdoZXRoZXIgb3Igbm90IGFuIG9iamVjdCBoYXMgYW4gb3duIHByb3BlcnR5IHdpdGggdGhlIHNwZWNpZmllZCBuYW1lXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIHMgLT4ge3M6IHh9IC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBjaGVjayBmb3IuXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIHRoZSBwcm9wZXJ0eSBleGlzdHMuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGhhc05hbWUgPSBSLmhhcygnbmFtZScpO1xuICogICAgICBoYXNOYW1lKHtuYW1lOiAnYWxpY2UnfSk7ICAgLy89PiB0cnVlXG4gKiAgICAgIGhhc05hbWUoe25hbWU6ICdib2InfSk7ICAgICAvLz0+IHRydWVcbiAqICAgICAgaGFzTmFtZSh7fSk7ICAgICAgICAgICAgICAgIC8vPT4gZmFsc2VcbiAqXG4gKiAgICAgIHZhciBwb2ludCA9IHt4OiAwLCB5OiAwfTtcbiAqICAgICAgdmFyIHBvaW50SGFzID0gUi5oYXMoUi5fXywgcG9pbnQpO1xuICogICAgICBwb2ludEhhcygneCcpOyAgLy89PiB0cnVlXG4gKiAgICAgIHBvaW50SGFzKCd5Jyk7ICAvLz0+IHRydWVcbiAqICAgICAgcG9pbnRIYXMoJ3onKTsgIC8vPT4gZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKF9oYXMpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgd2hldGhlciBvciBub3QgYW4gb2JqZWN0IG9yIGl0cyBwcm90b3R5cGUgY2hhaW4gaGFzIGEgcHJvcGVydHkgd2l0aFxuICogdGhlIHNwZWNpZmllZCBuYW1lXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuNy4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIHMgLT4ge3M6IHh9IC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7U3RyaW5nfSBwcm9wIFRoZSBuYW1lIG9mIHRoZSBwcm9wZXJ0eSB0byBjaGVjayBmb3IuXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcXVlcnkuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBXaGV0aGVyIHRoZSBwcm9wZXJ0eSBleGlzdHMuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgZnVuY3Rpb24gUmVjdGFuZ2xlKHdpZHRoLCBoZWlnaHQpIHtcbiAqICAgICAgICB0aGlzLndpZHRoID0gd2lkdGg7XG4gKiAgICAgICAgdGhpcy5oZWlnaHQgPSBoZWlnaHQ7XG4gKiAgICAgIH1cbiAqICAgICAgUmVjdGFuZ2xlLnByb3RvdHlwZS5hcmVhID0gZnVuY3Rpb24oKSB7XG4gKiAgICAgICAgcmV0dXJuIHRoaXMud2lkdGggKiB0aGlzLmhlaWdodDtcbiAqICAgICAgfTtcbiAqXG4gKiAgICAgIHZhciBzcXVhcmUgPSBuZXcgUmVjdGFuZ2xlKDIsIDIpO1xuICogICAgICBSLmhhc0luKCd3aWR0aCcsIHNxdWFyZSk7ICAvLz0+IHRydWVcbiAqICAgICAgUi5oYXNJbignYXJlYScsIHNxdWFyZSk7ICAvLz0+IHRydWVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGhhc0luKHByb3AsIG9iaikge1xuICByZXR1cm4gcHJvcCBpbiBvYmo7XG59KTtcbiIsInZhciBudGggPSByZXF1aXJlKCcuL250aCcpO1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgZ2l2ZW4gbGlzdCBvciBzdHJpbmcuIEluIHNvbWUgbGlicmFyaWVzXG4gKiB0aGlzIGZ1bmN0aW9uIGlzIG5hbWVkIGBmaXJzdGAuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBbYV0gLT4gYSB8IFVuZGVmaW5lZFxuICogQHNpZyBTdHJpbmcgLT4gU3RyaW5nXG4gKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gbGlzdFxuICogQHJldHVybiB7Kn1cbiAqIEBzZWUgUi50YWlsLCBSLmluaXQsIFIubGFzdFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuaGVhZChbJ2ZpJywgJ2ZvJywgJ2Z1bSddKTsgLy89PiAnZmknXG4gKiAgICAgIFIuaGVhZChbXSk7IC8vPT4gdW5kZWZpbmVkXG4gKlxuICogICAgICBSLmhlYWQoJ2FiYycpOyAvLz0+ICdhJ1xuICogICAgICBSLmhlYWQoJycpOyAvLz0+ICcnXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gbnRoKDApO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgdHJ1ZSBpZiBpdHMgYXJndW1lbnRzIGFyZSBpZGVudGljYWwsIGZhbHNlIG90aGVyd2lzZS4gVmFsdWVzIGFyZVxuICogaWRlbnRpY2FsIGlmIHRoZXkgcmVmZXJlbmNlIHRoZSBzYW1lIG1lbW9yeS4gYE5hTmAgaXMgaWRlbnRpY2FsIHRvIGBOYU5gO1xuICogYDBgIGFuZCBgLTBgIGFyZSBub3QgaWRlbnRpY2FsLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE1LjBcbiAqIEBjYXRlZ29yeSBSZWxhdGlvblxuICogQHNpZyBhIC0+IGEgLT4gQm9vbGVhblxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIG8gPSB7fTtcbiAqICAgICAgUi5pZGVudGljYWwobywgbyk7IC8vPT4gdHJ1ZVxuICogICAgICBSLmlkZW50aWNhbCgxLCAxKTsgLy89PiB0cnVlXG4gKiAgICAgIFIuaWRlbnRpY2FsKDEsICcxJyk7IC8vPT4gZmFsc2VcbiAqICAgICAgUi5pZGVudGljYWwoW10sIFtdKTsgLy89PiBmYWxzZVxuICogICAgICBSLmlkZW50aWNhbCgwLCAtMCk7IC8vPT4gZmFsc2VcbiAqICAgICAgUi5pZGVudGljYWwoTmFOLCBOYU4pOyAvLz0+IHRydWVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGlkZW50aWNhbChhLCBiKSB7XG4gIC8vIFNhbWVWYWx1ZSBhbGdvcml0aG1cbiAgaWYgKGEgPT09IGIpIHsgLy8gU3RlcHMgMS01LCA3LTEwXG4gICAgLy8gU3RlcHMgNi5iLTYuZTogKzAgIT0gLTBcbiAgICByZXR1cm4gYSAhPT0gMCB8fCAxIC8gYSA9PT0gMSAvIGI7XG4gIH0gZWxzZSB7XG4gICAgLy8gU3RlcCA2LmE6IE5hTiA9PSBOYU5cbiAgICByZXR1cm4gYSAhPT0gYSAmJiBiICE9PSBiO1xuICB9XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgX2lkZW50aXR5ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faWRlbnRpdHknKTtcblxuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCBkb2VzIG5vdGhpbmcgYnV0IHJldHVybiB0aGUgcGFyYW1ldGVyIHN1cHBsaWVkIHRvIGl0LiBHb29kXG4gKiBhcyBhIGRlZmF1bHQgb3IgcGxhY2Vob2xkZXIgZnVuY3Rpb24uXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgYSAtPiBhXG4gKiBAcGFyYW0geyp9IHggVGhlIHZhbHVlIHRvIHJldHVybi5cbiAqIEByZXR1cm4geyp9IFRoZSBpbnB1dCB2YWx1ZSwgYHhgLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuaWRlbnRpdHkoMSk7IC8vPT4gMVxuICpcbiAqICAgICAgdmFyIG9iaiA9IHt9O1xuICogICAgICBSLmlkZW50aXR5KG9iaikgPT09IG9iajsgLy89PiB0cnVlXG4gKiBAc3ltYiBSLmlkZW50aXR5KGEpID0gYVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoX2lkZW50aXR5KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG52YXIgY3VycnlOID0gcmVxdWlyZSgnLi9jdXJyeU4nKTtcblxuXG4vKipcbiAqIENyZWF0ZXMgYSBmdW5jdGlvbiB0aGF0IHdpbGwgcHJvY2VzcyBlaXRoZXIgdGhlIGBvblRydWVgIG9yIHRoZSBgb25GYWxzZWBcbiAqIGZ1bmN0aW9uIGRlcGVuZGluZyB1cG9uIHRoZSByZXN1bHQgb2YgdGhlIGBjb25kaXRpb25gIHByZWRpY2F0ZS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC44LjBcbiAqIEBjYXRlZ29yeSBMb2dpY1xuICogQHNpZyAoKi4uLiAtPiBCb29sZWFuKSAtPiAoKi4uLiAtPiAqKSAtPiAoKi4uLiAtPiAqKSAtPiAoKi4uLiAtPiAqKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29uZGl0aW9uIEEgcHJlZGljYXRlIGZ1bmN0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvblRydWUgQSBmdW5jdGlvbiB0byBpbnZva2Ugd2hlbiB0aGUgYGNvbmRpdGlvbmAgZXZhbHVhdGVzIHRvIGEgdHJ1dGh5IHZhbHVlLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gb25GYWxzZSBBIGZ1bmN0aW9uIHRvIGludm9rZSB3aGVuIHRoZSBgY29uZGl0aW9uYCBldmFsdWF0ZXMgdG8gYSBmYWxzeSB2YWx1ZS5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIG5ldyB1bmFyeSBmdW5jdGlvbiB0aGF0IHdpbGwgcHJvY2VzcyBlaXRoZXIgdGhlIGBvblRydWVgIG9yIHRoZSBgb25GYWxzZWBcbiAqICAgICAgICAgICAgICAgICAgICBmdW5jdGlvbiBkZXBlbmRpbmcgdXBvbiB0aGUgcmVzdWx0IG9mIHRoZSBgY29uZGl0aW9uYCBwcmVkaWNhdGUuXG4gKiBAc2VlIFIudW5sZXNzLCBSLndoZW5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgaW5jQ291bnQgPSBSLmlmRWxzZShcbiAqICAgICAgICBSLmhhcygnY291bnQnKSxcbiAqICAgICAgICBSLm92ZXIoUi5sZW5zUHJvcCgnY291bnQnKSwgUi5pbmMpLFxuICogICAgICAgIFIuYXNzb2MoJ2NvdW50JywgMSlcbiAqICAgICAgKTtcbiAqICAgICAgaW5jQ291bnQoe30pOyAgICAgICAgICAgLy89PiB7IGNvdW50OiAxIH1cbiAqICAgICAgaW5jQ291bnQoeyBjb3VudDogMSB9KTsgLy89PiB7IGNvdW50OiAyIH1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIGlmRWxzZShjb25kaXRpb24sIG9uVHJ1ZSwgb25GYWxzZSkge1xuICByZXR1cm4gY3VycnlOKE1hdGgubWF4KGNvbmRpdGlvbi5sZW5ndGgsIG9uVHJ1ZS5sZW5ndGgsIG9uRmFsc2UubGVuZ3RoKSxcbiAgICBmdW5jdGlvbiBfaWZFbHNlKCkge1xuICAgICAgcmV0dXJuIGNvbmRpdGlvbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpID8gb25UcnVlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykgOiBvbkZhbHNlLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfVxuICApO1xufSk7XG4iLCJ2YXIgYWRkID0gcmVxdWlyZSgnLi9hZGQnKTtcblxuXG4vKipcbiAqIEluY3JlbWVudHMgaXRzIGFyZ3VtZW50LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjkuMFxuICogQGNhdGVnb3J5IE1hdGhcbiAqIEBzaWcgTnVtYmVyIC0+IE51bWJlclxuICogQHBhcmFtIHtOdW1iZXJ9IG5cbiAqIEByZXR1cm4ge051bWJlcn0gbiArIDFcbiAqIEBzZWUgUi5kZWNcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmluYyg0Mik7IC8vPT4gNDNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBhZGQoMSk7XG4iLCJ2YXIgcmVkdWNlQnkgPSByZXF1aXJlKCcuL3JlZHVjZUJ5Jyk7XG5cblxuLyoqXG4gKiBHaXZlbiBhIGZ1bmN0aW9uIHRoYXQgZ2VuZXJhdGVzIGEga2V5LCB0dXJucyBhIGxpc3Qgb2Ygb2JqZWN0cyBpbnRvIGFuXG4gKiBvYmplY3QgaW5kZXhpbmcgdGhlIG9iamVjdHMgYnkgdGhlIGdpdmVuIGtleS4gTm90ZSB0aGF0IGlmIG11bHRpcGxlXG4gKiBvYmplY3RzIGdlbmVyYXRlIHRoZSBzYW1lIHZhbHVlIGZvciB0aGUgaW5kZXhpbmcga2V5IG9ubHkgdGhlIGxhc3QgdmFsdWVcbiAqIHdpbGwgYmUgaW5jbHVkZWQgaW4gdGhlIGdlbmVyYXRlZCBvYmplY3QuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE5LjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIChhIC0+IFN0cmluZykgLT4gW3trOiB2fV0gLT4ge2s6IHtrOiB2fX1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEZ1bmN0aW9uIDo6IGEgLT4gU3RyaW5nXG4gKiBAcGFyYW0ge0FycmF5fSBhcnJheSBUaGUgYXJyYXkgb2Ygb2JqZWN0cyB0byBpbmRleFxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3QgaW5kZXhpbmcgZWFjaCBhcnJheSBlbGVtZW50IGJ5IHRoZSBnaXZlbiBwcm9wZXJ0eS5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgbGlzdCA9IFt7aWQ6ICd4eXonLCB0aXRsZTogJ0EnfSwge2lkOiAnYWJjJywgdGl0bGU6ICdCJ31dO1xuICogICAgICBSLmluZGV4QnkoUi5wcm9wKCdpZCcpLCBsaXN0KTtcbiAqICAgICAgLy89PiB7YWJjOiB7aWQ6ICdhYmMnLCB0aXRsZTogJ0InfSwgeHl6OiB7aWQ6ICd4eXonLCB0aXRsZTogJ0EnfX1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSByZWR1Y2VCeShmdW5jdGlvbihhY2MsIGVsZW0pIHsgcmV0dXJuIGVsZW07IH0sIG51bGwpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfaW5kZXhPZiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2luZGV4T2YnKTtcbnZhciBfaXNBcnJheSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2lzQXJyYXknKTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIHBvc2l0aW9uIG9mIHRoZSBmaXJzdCBvY2N1cnJlbmNlIG9mIGFuIGl0ZW0gaW4gYW4gYXJyYXksIG9yIC0xXG4gKiBpZiB0aGUgaXRlbSBpcyBub3QgaW5jbHVkZWQgaW4gdGhlIGFycmF5LiBgUi5lcXVhbHNgIGlzIHVzZWQgdG8gZGV0ZXJtaW5lXG4gKiBlcXVhbGl0eS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIGEgLT4gW2FdIC0+IE51bWJlclxuICogQHBhcmFtIHsqfSB0YXJnZXQgVGhlIGl0ZW0gdG8gZmluZC5cbiAqIEBwYXJhbSB7QXJyYXl9IHhzIFRoZSBhcnJheSB0byBzZWFyY2ggaW4uXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IHRoZSBpbmRleCBvZiB0aGUgdGFyZ2V0LCBvciAtMSBpZiB0aGUgdGFyZ2V0IGlzIG5vdCBmb3VuZC5cbiAqIEBzZWUgUi5sYXN0SW5kZXhPZlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuaW5kZXhPZigzLCBbMSwyLDMsNF0pOyAvLz0+IDJcbiAqICAgICAgUi5pbmRleE9mKDEwLCBbMSwyLDMsNF0pOyAvLz0+IC0xXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBpbmRleE9mKHRhcmdldCwgeHMpIHtcbiAgcmV0dXJuIHR5cGVvZiB4cy5pbmRleE9mID09PSAnZnVuY3Rpb24nICYmICFfaXNBcnJheSh4cykgP1xuICAgIHhzLmluZGV4T2YodGFyZ2V0KSA6XG4gICAgX2luZGV4T2YoeHMsIHRhcmdldCwgMCk7XG59KTtcbiIsInZhciBzbGljZSA9IHJlcXVpcmUoJy4vc2xpY2UnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYWxsIGJ1dCB0aGUgbGFzdCBlbGVtZW50IG9mIHRoZSBnaXZlbiBsaXN0IG9yIHN0cmluZy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC45LjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIFthXSAtPiBbYV1cbiAqIEBzaWcgU3RyaW5nIC0+IFN0cmluZ1xuICogQHBhcmFtIHsqfSBsaXN0XG4gKiBAcmV0dXJuIHsqfVxuICogQHNlZSBSLmxhc3QsIFIuaGVhZCwgUi50YWlsXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5pbml0KFsxLCAyLCAzXSk7ICAvLz0+IFsxLCAyXVxuICogICAgICBSLmluaXQoWzEsIDJdKTsgICAgIC8vPT4gWzFdXG4gKiAgICAgIFIuaW5pdChbMV0pOyAgICAgICAgLy89PiBbXVxuICogICAgICBSLmluaXQoW10pOyAgICAgICAgIC8vPT4gW11cbiAqXG4gKiAgICAgIFIuaW5pdCgnYWJjJyk7ICAvLz0+ICdhYidcbiAqICAgICAgUi5pbml0KCdhYicpOyAgIC8vPT4gJ2EnXG4gKiAgICAgIFIuaW5pdCgnYScpOyAgICAvLz0+ICcnXG4gKiAgICAgIFIuaW5pdCgnJyk7ICAgICAvLz0+ICcnXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gc2xpY2UoMCwgLTEpO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcblxuXG4vKipcbiAqIEluc2VydHMgdGhlIHN1cHBsaWVkIGVsZW1lbnQgaW50byB0aGUgbGlzdCwgYXQgaW5kZXggYGluZGV4YC4gX05vdGUgdGhhdFxuICogdGhpcyBpcyBub3QgZGVzdHJ1Y3RpdmVfOiBpdCByZXR1cm5zIGEgY29weSBvZiB0aGUgbGlzdCB3aXRoIHRoZSBjaGFuZ2VzLlxuICogPHNtYWxsPk5vIGxpc3RzIGhhdmUgYmVlbiBoYXJtZWQgaW4gdGhlIGFwcGxpY2F0aW9uIG9mIHRoaXMgZnVuY3Rpb24uPC9zbWFsbD5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4yLjJcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIE51bWJlciAtPiBhIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7TnVtYmVyfSBpbmRleCBUaGUgcG9zaXRpb24gdG8gaW5zZXJ0IHRoZSBlbGVtZW50XG4gKiBAcGFyYW0geyp9IGVsdCBUaGUgZWxlbWVudCB0byBpbnNlcnQgaW50byB0aGUgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGxpc3QgdG8gaW5zZXJ0IGludG9cbiAqIEByZXR1cm4ge0FycmF5fSBBIG5ldyBBcnJheSB3aXRoIGBlbHRgIGluc2VydGVkIGF0IGBpbmRleGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5pbnNlcnQoMiwgJ3gnLCBbMSwyLDMsNF0pOyAvLz0+IFsxLDIsJ3gnLDMsNF1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIGluc2VydChpZHgsIGVsdCwgbGlzdCkge1xuICBpZHggPSBpZHggPCBsaXN0Lmxlbmd0aCAmJiBpZHggPj0gMCA/IGlkeCA6IGxpc3QubGVuZ3RoO1xuICB2YXIgcmVzdWx0ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobGlzdCwgMCk7XG4gIHJlc3VsdC5zcGxpY2UoaWR4LCAwLCBlbHQpO1xuICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCJ2YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xuXG5cbi8qKlxuICogSW5zZXJ0cyB0aGUgc3ViLWxpc3QgaW50byB0aGUgbGlzdCwgYXQgaW5kZXggYGluZGV4YC4gX05vdGUgdGhhdCB0aGlzIGlzIG5vdFxuICogZGVzdHJ1Y3RpdmVfOiBpdCByZXR1cm5zIGEgY29weSBvZiB0aGUgbGlzdCB3aXRoIHRoZSBjaGFuZ2VzLlxuICogPHNtYWxsPk5vIGxpc3RzIGhhdmUgYmVlbiBoYXJtZWQgaW4gdGhlIGFwcGxpY2F0aW9uIG9mIHRoaXMgZnVuY3Rpb24uPC9zbWFsbD5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC45LjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIE51bWJlciAtPiBbYV0gLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtOdW1iZXJ9IGluZGV4IFRoZSBwb3NpdGlvbiB0byBpbnNlcnQgdGhlIHN1Yi1saXN0XG4gKiBAcGFyYW0ge0FycmF5fSBlbHRzIFRoZSBzdWItbGlzdCB0byBpbnNlcnQgaW50byB0aGUgQXJyYXlcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGxpc3QgdG8gaW5zZXJ0IHRoZSBzdWItbGlzdCBpbnRvXG4gKiBAcmV0dXJuIHtBcnJheX0gQSBuZXcgQXJyYXkgd2l0aCBgZWx0c2AgaW5zZXJ0ZWQgc3RhcnRpbmcgYXQgYGluZGV4YC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmluc2VydEFsbCgyLCBbJ3gnLCd5JywneiddLCBbMSwyLDMsNF0pOyAvLz0+IFsxLDIsJ3gnLCd5JywneicsMyw0XVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gaW5zZXJ0QWxsKGlkeCwgZWx0cywgbGlzdCkge1xuICBpZHggPSBpZHggPCBsaXN0Lmxlbmd0aCAmJiBpZHggPj0gMCA/IGlkeCA6IGxpc3QubGVuZ3RoO1xuICByZXR1cm4gW10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpc3QsIDAsIGlkeCksXG4gICAgICAgICAgICAgICAgICAgZWx0cyxcbiAgICAgICAgICAgICAgICAgICBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChsaXN0LCBpZHgpKTtcbn0pO1xuIiwidmFyIF9jb250YWlucyA9IHJlcXVpcmUoJy4vX2NvbnRhaW5zJyk7XG5cblxuLy8gQSBzaW1wbGUgU2V0IHR5cGUgdGhhdCBob25vdXJzIFIuZXF1YWxzIHNlbWFudGljc1xubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIF9TZXQoKSB7XG4gICAgLyogZ2xvYmFscyBTZXQgKi9cbiAgICB0aGlzLl9uYXRpdmVTZXQgPSB0eXBlb2YgU2V0ID09PSAnZnVuY3Rpb24nID8gbmV3IFNldCgpIDogbnVsbDtcbiAgICB0aGlzLl9pdGVtcyA9IHt9O1xuICB9XG5cbiAgLy8gdW50aWwgd2UgZmlndXJlIG91dCB3aHkganNkb2MgY2hva2VzIG9uIHRoaXNcbiAgLy8gQHBhcmFtIGl0ZW0gVGhlIGl0ZW0gdG8gYWRkIHRvIHRoZSBTZXRcbiAgLy8gQHJldHVybnMge2Jvb2xlYW59IHRydWUgaWYgdGhlIGl0ZW0gZGlkIG5vdCBleGlzdCBwcmlvciwgb3RoZXJ3aXNlIGZhbHNlXG4gIC8vXG4gIF9TZXQucHJvdG90eXBlLmFkZCA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gIWhhc09yQWRkKGl0ZW0sIHRydWUsIHRoaXMpO1xuICB9O1xuXG4gIC8vXG4gIC8vIEBwYXJhbSBpdGVtIFRoZSBpdGVtIHRvIGNoZWNrIGZvciBleGlzdGVuY2UgaW4gdGhlIFNldFxuICAvLyBAcmV0dXJucyB7Ym9vbGVhbn0gdHJ1ZSBpZiB0aGUgaXRlbSBleGlzdHMgaW4gdGhlIFNldCwgb3RoZXJ3aXNlIGZhbHNlXG4gIC8vXG4gIF9TZXQucHJvdG90eXBlLmhhcyA9IGZ1bmN0aW9uKGl0ZW0pIHtcbiAgICByZXR1cm4gaGFzT3JBZGQoaXRlbSwgZmFsc2UsIHRoaXMpO1xuICB9O1xuXG4gIC8vXG4gIC8vIENvbWJpbmVzIHRoZSBsb2dpYyBmb3IgY2hlY2tpbmcgd2hldGhlciBhbiBpdGVtIGlzIGEgbWVtYmVyIG9mIHRoZSBzZXQgYW5kXG4gIC8vIGZvciBhZGRpbmcgYSBuZXcgaXRlbSB0byB0aGUgc2V0LlxuICAvL1xuICAvLyBAcGFyYW0gaXRlbSAgICAgICBUaGUgaXRlbSB0byBjaGVjayBvciBhZGQgdG8gdGhlIFNldCBpbnN0YW5jZS5cbiAgLy8gQHBhcmFtIHNob3VsZEFkZCAgSWYgdHJ1ZSwgdGhlIGl0ZW0gd2lsbCBiZSBhZGRlZCB0byB0aGUgc2V0IGlmIGl0IGRvZXNuJ3RcbiAgLy8gICAgICAgICAgICAgICAgICAgYWxyZWFkeSBleGlzdC5cbiAgLy8gQHBhcmFtIHNldCAgICAgICAgVGhlIHNldCBpbnN0YW5jZSB0byBjaGVjayBvciBhZGQgdG8uXG4gIC8vIEByZXR1cm4ge2Jvb2xlYW59IHRydWUgaWYgdGhlIGl0ZW0gYWxyZWFkeSBleGlzdGVkLCBvdGhlcndpc2UgZmFsc2UuXG4gIC8vXG4gIGZ1bmN0aW9uIGhhc09yQWRkKGl0ZW0sIHNob3VsZEFkZCwgc2V0KSB7XG4gICAgdmFyIHR5cGUgPSB0eXBlb2YgaXRlbTtcbiAgICB2YXIgcHJldlNpemUsIG5ld1NpemU7XG4gICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICBjYXNlICdzdHJpbmcnOlxuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgLy8gZGlzdGluZ3Vpc2ggYmV0d2VlbiArMCBhbmQgLTBcbiAgICAgICAgaWYgKGl0ZW0gPT09IDAgJiYgMSAvIGl0ZW0gPT09IC1JbmZpbml0eSkge1xuICAgICAgICAgIGlmIChzZXQuX2l0ZW1zWyctMCddKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKHNob3VsZEFkZCkge1xuICAgICAgICAgICAgICBzZXQuX2l0ZW1zWyctMCddID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhlc2UgdHlwZXMgY2FuIGFsbCB1dGlsaXNlIHRoZSBuYXRpdmUgU2V0XG4gICAgICAgIGlmIChzZXQuX25hdGl2ZVNldCAhPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChzaG91bGRBZGQpIHtcbiAgICAgICAgICAgIHByZXZTaXplID0gc2V0Ll9uYXRpdmVTZXQuc2l6ZTtcbiAgICAgICAgICAgIHNldC5fbmF0aXZlU2V0LmFkZChpdGVtKTtcbiAgICAgICAgICAgIG5ld1NpemUgPSBzZXQuX25hdGl2ZVNldC5zaXplO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1NpemUgPT09IHByZXZTaXplO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0Ll9uYXRpdmVTZXQuaGFzKGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoISh0eXBlIGluIHNldC5faXRlbXMpKSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkQWRkKSB7XG4gICAgICAgICAgICAgIHNldC5faXRlbXNbdHlwZV0gPSB7fTtcbiAgICAgICAgICAgICAgc2V0Ll9pdGVtc1t0eXBlXVtpdGVtXSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfSBlbHNlIGlmIChpdGVtIGluIHNldC5faXRlbXNbdHlwZV0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkQWRkKSB7XG4gICAgICAgICAgICAgIHNldC5faXRlbXNbdHlwZV1baXRlbV0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgICAgLy8gc2V0Ll9pdGVtc1snYm9vbGVhbiddIGhvbGRzIGEgdHdvIGVsZW1lbnQgYXJyYXlcbiAgICAgICAgLy8gcmVwcmVzZW50aW5nIFsgZmFsc2VFeGlzdHMsIHRydWVFeGlzdHMgXVxuICAgICAgICBpZiAodHlwZSBpbiBzZXQuX2l0ZW1zKSB7XG4gICAgICAgICAgdmFyIGJJZHggPSBpdGVtID8gMSA6IDA7XG4gICAgICAgICAgaWYgKHNldC5faXRlbXNbdHlwZV1bYklkeF0pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkQWRkKSB7XG4gICAgICAgICAgICAgIHNldC5faXRlbXNbdHlwZV1bYklkeF0gPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc2hvdWxkQWRkKSB7XG4gICAgICAgICAgICBzZXQuX2l0ZW1zW3R5cGVdID0gaXRlbSA/IFtmYWxzZSwgdHJ1ZV0gOiBbdHJ1ZSwgZmFsc2VdO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAnZnVuY3Rpb24nOlxuICAgICAgICAvLyBjb21wYXJlIGZ1bmN0aW9ucyBmb3IgcmVmZXJlbmNlIGVxdWFsaXR5XG4gICAgICAgIGlmIChzZXQuX25hdGl2ZVNldCAhPT0gbnVsbCkge1xuICAgICAgICAgIGlmIChzaG91bGRBZGQpIHtcbiAgICAgICAgICAgIHByZXZTaXplID0gc2V0Ll9uYXRpdmVTZXQuc2l6ZTtcbiAgICAgICAgICAgIHNldC5fbmF0aXZlU2V0LmFkZChpdGVtKTtcbiAgICAgICAgICAgIG5ld1NpemUgPSBzZXQuX25hdGl2ZVNldC5zaXplO1xuICAgICAgICAgICAgcmV0dXJuIG5ld1NpemUgPT09IHByZXZTaXplO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gc2V0Ll9uYXRpdmVTZXQuaGFzKGl0ZW0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoISh0eXBlIGluIHNldC5faXRlbXMpKSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkQWRkKSB7XG4gICAgICAgICAgICAgIHNldC5faXRlbXNbdHlwZV0gPSBbaXRlbV07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmICghX2NvbnRhaW5zKGl0ZW0sIHNldC5faXRlbXNbdHlwZV0pKSB7XG4gICAgICAgICAgICBpZiAoc2hvdWxkQWRkKSB7XG4gICAgICAgICAgICAgIHNldC5faXRlbXNbdHlwZV0ucHVzaChpdGVtKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgY2FzZSAndW5kZWZpbmVkJzpcbiAgICAgICAgaWYgKHNldC5faXRlbXNbdHlwZV0pIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAoc2hvdWxkQWRkKSB7XG4gICAgICAgICAgICBzZXQuX2l0ZW1zW3R5cGVdID0gdHJ1ZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgIGNhc2UgJ29iamVjdCc6XG4gICAgICAgIGlmIChpdGVtID09PSBudWxsKSB7XG4gICAgICAgICAgaWYgKCFzZXQuX2l0ZW1zWydudWxsJ10pIHtcbiAgICAgICAgICAgIGlmIChzaG91bGRBZGQpIHtcbiAgICAgICAgICAgICAgc2V0Ll9pdGVtc1snbnVsbCddID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgIC8qIGZhbGxzIHRocm91Z2ggKi9cbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIC8vIHJlZHVjZSB0aGUgc2VhcmNoIHNpemUgb2YgaGV0ZXJvZ2VuZW91cyBzZXRzIGJ5IGNyZWF0aW5nIGJ1Y2tldHNcbiAgICAgICAgLy8gZm9yIGVhY2ggdHlwZS5cbiAgICAgICAgdHlwZSA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChpdGVtKTtcbiAgICAgICAgaWYgKCEodHlwZSBpbiBzZXQuX2l0ZW1zKSkge1xuICAgICAgICAgIGlmIChzaG91bGRBZGQpIHtcbiAgICAgICAgICAgIHNldC5faXRlbXNbdHlwZV0gPSBbaXRlbV07XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBzY2FuIHRocm91Z2ggYWxsIHByZXZpb3VzbHkgYXBwbGllZCBpdGVtc1xuICAgICAgICBpZiAoIV9jb250YWlucyhpdGVtLCBzZXQuX2l0ZW1zW3R5cGVdKSkge1xuICAgICAgICAgIGlmIChzaG91bGRBZGQpIHtcbiAgICAgICAgICAgIHNldC5faXRlbXNbdHlwZV0ucHVzaChpdGVtKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gX1NldDtcbn0oKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9hcGVydHVyZShuLCBsaXN0KSB7XG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGltaXQgPSBsaXN0Lmxlbmd0aCAtIChuIC0gMSk7XG4gIHZhciBhY2MgPSBuZXcgQXJyYXkobGltaXQgPj0gMCA/IGxpbWl0IDogMCk7XG4gIHdoaWxlIChpZHggPCBsaW1pdCkge1xuICAgIGFjY1tpZHhdID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobGlzdCwgaWR4LCBpZHggKyBuKTtcbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gYWNjO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2FyaXR5KG4sIGZuKSB7XG4gIC8qIGVzbGludC1kaXNhYmxlIG5vLXVudXNlZC12YXJzICovXG4gIHN3aXRjaCAobikge1xuICAgIGNhc2UgMDogcmV0dXJuIGZ1bmN0aW9uKCkgeyByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICBjYXNlIDE6IHJldHVybiBmdW5jdGlvbihhMCkgeyByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICBjYXNlIDI6IHJldHVybiBmdW5jdGlvbihhMCwgYTEpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSAzOiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMikgeyByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICBjYXNlIDQ6IHJldHVybiBmdW5jdGlvbihhMCwgYTEsIGEyLCBhMykgeyByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICBjYXNlIDU6IHJldHVybiBmdW5jdGlvbihhMCwgYTEsIGEyLCBhMywgYTQpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSA2OiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSkgeyByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICBjYXNlIDc6IHJldHVybiBmdW5jdGlvbihhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNikgeyByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICBjYXNlIDg6IHJldHVybiBmdW5jdGlvbihhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgY2FzZSA5OiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCkgeyByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTsgfTtcbiAgICBjYXNlIDEwOiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3LCBhOCwgYTkpIHsgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7IH07XG4gICAgZGVmYXVsdDogdGhyb3cgbmV3IEVycm9yKCdGaXJzdCBhcmd1bWVudCB0byBfYXJpdHkgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBpbnRlZ2VyIG5vIGdyZWF0ZXIgdGhhbiB0ZW4nKTtcbiAgfVxufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2FycmF5RnJvbUl0ZXJhdG9yKGl0ZXIpIHtcbiAgdmFyIGxpc3QgPSBbXTtcbiAgdmFyIG5leHQ7XG4gIHdoaWxlICghKG5leHQgPSBpdGVyLm5leHQoKSkuZG9uZSkge1xuICAgIGxpc3QucHVzaChuZXh0LnZhbHVlKTtcbiAgfVxuICByZXR1cm4gbGlzdDtcbn07XG4iLCJ2YXIgX29iamVjdEFzc2lnbiA9IHJlcXVpcmUoJy4vX29iamVjdEFzc2lnbicpO1xuXG5tb2R1bGUuZXhwb3J0cyA9XG4gIHR5cGVvZiBPYmplY3QuYXNzaWduID09PSAnZnVuY3Rpb24nID8gT2JqZWN0LmFzc2lnbiA6IF9vYmplY3RBc3NpZ247XG4iLCJ2YXIgX2lzQXJyYXkgPSByZXF1aXJlKCcuL19pc0FycmF5Jyk7XG5cblxuLyoqXG4gKiBUaGlzIGNoZWNrcyB3aGV0aGVyIGEgZnVuY3Rpb24gaGFzIGEgW21ldGhvZG5hbWVdIGZ1bmN0aW9uLiBJZiBpdCBpc24ndCBhblxuICogYXJyYXkgaXQgd2lsbCBleGVjdXRlIHRoYXQgZnVuY3Rpb24gb3RoZXJ3aXNlIGl0IHdpbGwgZGVmYXVsdCB0byB0aGUgcmFtZGFcbiAqIGltcGxlbWVudGF0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiByYW1kYSBpbXBsZW10YXRpb25cbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2RuYW1lIHByb3BlcnR5IHRvIGNoZWNrIGZvciBhIGN1c3RvbSBpbXBsZW1lbnRhdGlvblxuICogQHJldHVybiB7T2JqZWN0fSBXaGF0ZXZlciB0aGUgcmV0dXJuIHZhbHVlIG9mIHRoZSBtZXRob2QgaXMuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2NoZWNrRm9yTWV0aG9kKG1ldGhvZG5hbWUsIGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICB2YXIgbGVuZ3RoID0gYXJndW1lbnRzLmxlbmd0aDtcbiAgICBpZiAobGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZm4oKTtcbiAgICB9XG4gICAgdmFyIG9iaiA9IGFyZ3VtZW50c1tsZW5ndGggLSAxXTtcbiAgICByZXR1cm4gKF9pc0FycmF5KG9iaikgfHwgdHlwZW9mIG9ialttZXRob2RuYW1lXSAhPT0gJ2Z1bmN0aW9uJykgP1xuICAgICAgZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKSA6XG4gICAgICBvYmpbbWV0aG9kbmFtZV0uYXBwbHkob2JqLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDAsIGxlbmd0aCAtIDEpKTtcbiAgfTtcbn07XG4iLCJ2YXIgX2Nsb25lUmVnRXhwID0gcmVxdWlyZSgnLi9fY2xvbmVSZWdFeHAnKTtcbnZhciB0eXBlID0gcmVxdWlyZSgnLi4vdHlwZScpO1xuXG5cbi8qKlxuICogQ29waWVzIGFuIG9iamVjdC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHsqfSB2YWx1ZSBUaGUgdmFsdWUgdG8gYmUgY29waWVkXG4gKiBAcGFyYW0ge0FycmF5fSByZWZGcm9tIEFycmF5IGNvbnRhaW5pbmcgdGhlIHNvdXJjZSByZWZlcmVuY2VzXG4gKiBAcGFyYW0ge0FycmF5fSByZWZUbyBBcnJheSBjb250YWluaW5nIHRoZSBjb3BpZWQgc291cmNlIHJlZmVyZW5jZXNcbiAqIEBwYXJhbSB7Qm9vbGVhbn0gZGVlcCBXaGV0aGVyIG9yIG5vdCB0byBwZXJmb3JtIGRlZXAgY2xvbmluZy5cbiAqIEByZXR1cm4geyp9IFRoZSBjb3BpZWQgdmFsdWUuXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2Nsb25lKHZhbHVlLCByZWZGcm9tLCByZWZUbywgZGVlcCkge1xuICB2YXIgY29weSA9IGZ1bmN0aW9uIGNvcHkoY29waWVkVmFsdWUpIHtcbiAgICB2YXIgbGVuID0gcmVmRnJvbS5sZW5ndGg7XG4gICAgdmFyIGlkeCA9IDA7XG4gICAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgICAgaWYgKHZhbHVlID09PSByZWZGcm9tW2lkeF0pIHtcbiAgICAgICAgcmV0dXJuIHJlZlRvW2lkeF07XG4gICAgICB9XG4gICAgICBpZHggKz0gMTtcbiAgICB9XG4gICAgcmVmRnJvbVtpZHggKyAxXSA9IHZhbHVlO1xuICAgIHJlZlRvW2lkeCArIDFdID0gY29waWVkVmFsdWU7XG4gICAgZm9yICh2YXIga2V5IGluIHZhbHVlKSB7XG4gICAgICBjb3BpZWRWYWx1ZVtrZXldID0gZGVlcCA/XG4gICAgICAgIF9jbG9uZSh2YWx1ZVtrZXldLCByZWZGcm9tLCByZWZUbywgdHJ1ZSkgOiB2YWx1ZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gY29waWVkVmFsdWU7XG4gIH07XG4gIHN3aXRjaCAodHlwZSh2YWx1ZSkpIHtcbiAgICBjYXNlICdPYmplY3QnOiAgcmV0dXJuIGNvcHkoe30pO1xuICAgIGNhc2UgJ0FycmF5JzogICByZXR1cm4gY29weShbXSk7XG4gICAgY2FzZSAnRGF0ZSc6ICAgIHJldHVybiBuZXcgRGF0ZSh2YWx1ZS52YWx1ZU9mKCkpO1xuICAgIGNhc2UgJ1JlZ0V4cCc6ICByZXR1cm4gX2Nsb25lUmVnRXhwKHZhbHVlKTtcbiAgICBkZWZhdWx0OiAgICAgICAgcmV0dXJuIHZhbHVlO1xuICB9XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfY2xvbmVSZWdFeHAocGF0dGVybikge1xuICByZXR1cm4gbmV3IFJlZ0V4cChwYXR0ZXJuLnNvdXJjZSwgKHBhdHRlcm4uZ2xvYmFsICAgICA/ICdnJyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocGF0dGVybi5pZ25vcmVDYXNlID8gJ2knIDogJycpICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIChwYXR0ZXJuLm11bHRpbGluZSAgPyAnbScgOiAnJykgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKHBhdHRlcm4uc3RpY2t5ICAgICA/ICd5JyA6ICcnKSArXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAocGF0dGVybi51bmljb2RlICAgID8gJ3UnIDogJycpKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9jb21wbGVtZW50KGYpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiAhZi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICB9O1xufTtcbiIsIi8qKlxuICogUHJpdmF0ZSBgY29uY2F0YCBmdW5jdGlvbiB0byBtZXJnZSB0d28gYXJyYXktbGlrZSBvYmplY3RzLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAcGFyYW0ge0FycmF5fEFyZ3VtZW50c30gW3NldDE9W11dIEFuIGFycmF5LWxpa2Ugb2JqZWN0LlxuICogQHBhcmFtIHtBcnJheXxBcmd1bWVudHN9IFtzZXQyPVtdXSBBbiBhcnJheS1saWtlIG9iamVjdC5cbiAqIEByZXR1cm4ge0FycmF5fSBBIG5ldywgbWVyZ2VkIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIF9jb25jYXQoWzQsIDUsIDZdLCBbMSwgMiwgM10pOyAvLz0+IFs0LCA1LCA2LCAxLCAyLCAzXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9jb25jYXQoc2V0MSwgc2V0Mikge1xuICBzZXQxID0gc2V0MSB8fCBbXTtcbiAgc2V0MiA9IHNldDIgfHwgW107XG4gIHZhciBpZHg7XG4gIHZhciBsZW4xID0gc2V0MS5sZW5ndGg7XG4gIHZhciBsZW4yID0gc2V0Mi5sZW5ndGg7XG4gIHZhciByZXN1bHQgPSBbXTtcblxuICBpZHggPSAwO1xuICB3aGlsZSAoaWR4IDwgbGVuMSkge1xuICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHNldDFbaWR4XTtcbiAgICBpZHggKz0gMTtcbiAgfVxuICBpZHggPSAwO1xuICB3aGlsZSAoaWR4IDwgbGVuMikge1xuICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHNldDJbaWR4XTtcbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbiIsInZhciBfaW5kZXhPZiA9IHJlcXVpcmUoJy4vX2luZGV4T2YnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9jb250YWlucyhhLCBsaXN0KSB7XG4gIHJldHVybiBfaW5kZXhPZihsaXN0LCBhLCAwKSA+PSAwO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2NvbnRhaW5zV2l0aChwcmVkLCB4LCBsaXN0KSB7XG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGVuID0gbGlzdC5sZW5ndGg7XG5cbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIGlmIChwcmVkKHgsIGxpc3RbaWR4XSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gZmFsc2U7XG59O1xuIiwidmFyIF9hcml0eSA9IHJlcXVpcmUoJy4vX2FyaXR5Jyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vX2N1cnJ5MicpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2NyZWF0ZVBhcnRpYWxBcHBsaWNhdG9yKGNvbmNhdCkge1xuICByZXR1cm4gX2N1cnJ5MihmdW5jdGlvbihmbiwgYXJncykge1xuICAgIHJldHVybiBfYXJpdHkoTWF0aC5tYXgoMCwgZm4ubGVuZ3RoIC0gYXJncy5sZW5ndGgpLCBmdW5jdGlvbigpIHtcbiAgICAgIHJldHVybiBmbi5hcHBseSh0aGlzLCBjb25jYXQoYXJncywgYXJndW1lbnRzKSk7XG4gICAgfSk7XG4gIH0pO1xufTtcbiIsInZhciBfaXNQbGFjZWhvbGRlciA9IHJlcXVpcmUoJy4vX2lzUGxhY2Vob2xkZXInKTtcblxuXG4vKipcbiAqIE9wdGltaXplZCBpbnRlcm5hbCBvbmUtYXJpdHkgY3VycnkgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGN1cnJ5LlxuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBjdXJyaWVkIGZ1bmN0aW9uLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9jdXJyeTEoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGYxKGEpIHtcbiAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCB8fCBfaXNQbGFjZWhvbGRlcihhKSkge1xuICAgICAgcmV0dXJuIGYxO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gIH07XG59O1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL19jdXJyeTEnKTtcbnZhciBfaXNQbGFjZWhvbGRlciA9IHJlcXVpcmUoJy4vX2lzUGxhY2Vob2xkZXInKTtcblxuXG4vKipcbiAqIE9wdGltaXplZCBpbnRlcm5hbCB0d28tYXJpdHkgY3VycnkgZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGN1cnJ5LlxuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBjdXJyaWVkIGZ1bmN0aW9uLlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9jdXJyeTIoZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGYyKGEsIGIpIHtcbiAgICBzd2l0Y2ggKGFyZ3VtZW50cy5sZW5ndGgpIHtcbiAgICAgIGNhc2UgMDpcbiAgICAgICAgcmV0dXJuIGYyO1xuICAgICAgY2FzZSAxOlxuICAgICAgICByZXR1cm4gX2lzUGxhY2Vob2xkZXIoYSkgPyBmMlxuICAgICAgICAgICAgIDogX2N1cnJ5MShmdW5jdGlvbihfYikgeyByZXR1cm4gZm4oYSwgX2IpOyB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBfaXNQbGFjZWhvbGRlcihhKSAmJiBfaXNQbGFjZWhvbGRlcihiKSA/IGYyXG4gICAgICAgICAgICAgOiBfaXNQbGFjZWhvbGRlcihhKSA/IF9jdXJyeTEoZnVuY3Rpb24oX2EpIHsgcmV0dXJuIGZuKF9hLCBiKTsgfSlcbiAgICAgICAgICAgICA6IF9pc1BsYWNlaG9sZGVyKGIpID8gX2N1cnJ5MShmdW5jdGlvbihfYikgeyByZXR1cm4gZm4oYSwgX2IpOyB9KVxuICAgICAgICAgICAgIDogZm4oYSwgYik7XG4gICAgfVxuICB9O1xufTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9fY3VycnkxJyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vX2N1cnJ5MicpO1xudmFyIF9pc1BsYWNlaG9sZGVyID0gcmVxdWlyZSgnLi9faXNQbGFjZWhvbGRlcicpO1xuXG5cbi8qKlxuICogT3B0aW1pemVkIGludGVybmFsIHRocmVlLWFyaXR5IGN1cnJ5IGZ1bmN0aW9uLlxuICpcbiAqIEBwcml2YXRlXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjdXJyeS5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgY3VycmllZCBmdW5jdGlvbi5cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfY3VycnkzKGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbiBmMyhhLCBiLCBjKSB7XG4gICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6XG4gICAgICAgIHJldHVybiBmMztcbiAgICAgIGNhc2UgMTpcbiAgICAgICAgcmV0dXJuIF9pc1BsYWNlaG9sZGVyKGEpID8gZjNcbiAgICAgICAgICAgICA6IF9jdXJyeTIoZnVuY3Rpb24oX2IsIF9jKSB7IHJldHVybiBmbihhLCBfYiwgX2MpOyB9KTtcbiAgICAgIGNhc2UgMjpcbiAgICAgICAgcmV0dXJuIF9pc1BsYWNlaG9sZGVyKGEpICYmIF9pc1BsYWNlaG9sZGVyKGIpID8gZjNcbiAgICAgICAgICAgICA6IF9pc1BsYWNlaG9sZGVyKGEpID8gX2N1cnJ5MihmdW5jdGlvbihfYSwgX2MpIHsgcmV0dXJuIGZuKF9hLCBiLCBfYyk7IH0pXG4gICAgICAgICAgICAgOiBfaXNQbGFjZWhvbGRlcihiKSA/IF9jdXJyeTIoZnVuY3Rpb24oX2IsIF9jKSB7IHJldHVybiBmbihhLCBfYiwgX2MpOyB9KVxuICAgICAgICAgICAgIDogX2N1cnJ5MShmdW5jdGlvbihfYykgeyByZXR1cm4gZm4oYSwgYiwgX2MpOyB9KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBfaXNQbGFjZWhvbGRlcihhKSAmJiBfaXNQbGFjZWhvbGRlcihiKSAmJiBfaXNQbGFjZWhvbGRlcihjKSA/IGYzXG4gICAgICAgICAgICAgOiBfaXNQbGFjZWhvbGRlcihhKSAmJiBfaXNQbGFjZWhvbGRlcihiKSA/IF9jdXJyeTIoZnVuY3Rpb24oX2EsIF9iKSB7IHJldHVybiBmbihfYSwgX2IsIGMpOyB9KVxuICAgICAgICAgICAgIDogX2lzUGxhY2Vob2xkZXIoYSkgJiYgX2lzUGxhY2Vob2xkZXIoYykgPyBfY3VycnkyKGZ1bmN0aW9uKF9hLCBfYykgeyByZXR1cm4gZm4oX2EsIGIsIF9jKTsgfSlcbiAgICAgICAgICAgICA6IF9pc1BsYWNlaG9sZGVyKGIpICYmIF9pc1BsYWNlaG9sZGVyKGMpID8gX2N1cnJ5MihmdW5jdGlvbihfYiwgX2MpIHsgcmV0dXJuIGZuKGEsIF9iLCBfYyk7IH0pXG4gICAgICAgICAgICAgOiBfaXNQbGFjZWhvbGRlcihhKSA/IF9jdXJyeTEoZnVuY3Rpb24oX2EpIHsgcmV0dXJuIGZuKF9hLCBiLCBjKTsgfSlcbiAgICAgICAgICAgICA6IF9pc1BsYWNlaG9sZGVyKGIpID8gX2N1cnJ5MShmdW5jdGlvbihfYikgeyByZXR1cm4gZm4oYSwgX2IsIGMpOyB9KVxuICAgICAgICAgICAgIDogX2lzUGxhY2Vob2xkZXIoYykgPyBfY3VycnkxKGZ1bmN0aW9uKF9jKSB7IHJldHVybiBmbihhLCBiLCBfYyk7IH0pXG4gICAgICAgICAgICAgOiBmbihhLCBiLCBjKTtcbiAgICB9XG4gIH07XG59O1xuIiwidmFyIF9hcml0eSA9IHJlcXVpcmUoJy4vX2FyaXR5Jyk7XG52YXIgX2lzUGxhY2Vob2xkZXIgPSByZXF1aXJlKCcuL19pc1BsYWNlaG9sZGVyJyk7XG5cblxuLyoqXG4gKiBJbnRlcm5hbCBjdXJyeU4gZnVuY3Rpb24uXG4gKlxuICogQHByaXZhdGVcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCBUaGUgYXJpdHkgb2YgdGhlIGN1cnJpZWQgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0FycmF5fSByZWNlaXZlZCBBbiBhcnJheSBvZiBhcmd1bWVudHMgcmVjZWl2ZWQgdGh1cyBmYXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gY3VycnkuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gVGhlIGN1cnJpZWQgZnVuY3Rpb24uXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2N1cnJ5TihsZW5ndGgsIHJlY2VpdmVkLCBmbikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGNvbWJpbmVkID0gW107XG4gICAgdmFyIGFyZ3NJZHggPSAwO1xuICAgIHZhciBsZWZ0ID0gbGVuZ3RoO1xuICAgIHZhciBjb21iaW5lZElkeCA9IDA7XG4gICAgd2hpbGUgKGNvbWJpbmVkSWR4IDwgcmVjZWl2ZWQubGVuZ3RoIHx8IGFyZ3NJZHggPCBhcmd1bWVudHMubGVuZ3RoKSB7XG4gICAgICB2YXIgcmVzdWx0O1xuICAgICAgaWYgKGNvbWJpbmVkSWR4IDwgcmVjZWl2ZWQubGVuZ3RoICYmXG4gICAgICAgICAgKCFfaXNQbGFjZWhvbGRlcihyZWNlaXZlZFtjb21iaW5lZElkeF0pIHx8XG4gICAgICAgICAgIGFyZ3NJZHggPj0gYXJndW1lbnRzLmxlbmd0aCkpIHtcbiAgICAgICAgcmVzdWx0ID0gcmVjZWl2ZWRbY29tYmluZWRJZHhdO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmVzdWx0ID0gYXJndW1lbnRzW2FyZ3NJZHhdO1xuICAgICAgICBhcmdzSWR4ICs9IDE7XG4gICAgICB9XG4gICAgICBjb21iaW5lZFtjb21iaW5lZElkeF0gPSByZXN1bHQ7XG4gICAgICBpZiAoIV9pc1BsYWNlaG9sZGVyKHJlc3VsdCkpIHtcbiAgICAgICAgbGVmdCAtPSAxO1xuICAgICAgfVxuICAgICAgY29tYmluZWRJZHggKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIGxlZnQgPD0gMCA/IGZuLmFwcGx5KHRoaXMsIGNvbWJpbmVkKVxuICAgICAgICAgICAgICAgICAgICAgOiBfYXJpdHkobGVmdCwgX2N1cnJ5TihsZW5ndGgsIGNvbWJpbmVkLCBmbikpO1xuICB9O1xufTtcbiIsInZhciBfaXNBcnJheSA9IHJlcXVpcmUoJy4vX2lzQXJyYXknKTtcbnZhciBfaXNUcmFuc2Zvcm1lciA9IHJlcXVpcmUoJy4vX2lzVHJhbnNmb3JtZXInKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBmdW5jdGlvbiB0aGF0IGRpc3BhdGNoZXMgd2l0aCBkaWZmZXJlbnQgc3RyYXRlZ2llcyBiYXNlZCBvbiB0aGVcbiAqIG9iamVjdCBpbiBsaXN0IHBvc2l0aW9uIChsYXN0IGFyZ3VtZW50KS4gSWYgaXQgaXMgYW4gYXJyYXksIGV4ZWN1dGVzIFtmbl0uXG4gKiBPdGhlcndpc2UsIGlmIGl0IGhhcyBhIGZ1bmN0aW9uIHdpdGggb25lIG9mIHRoZSBnaXZlbiBtZXRob2QgbmFtZXMsIGl0IHdpbGxcbiAqIGV4ZWN1dGUgdGhhdCBmdW5jdGlvbiAoZnVuY3RvciBjYXNlKS4gT3RoZXJ3aXNlLCBpZiBpdCBpcyBhIHRyYW5zZm9ybWVyLFxuICogdXNlcyB0cmFuc2R1Y2VyIFt4Zl0gdG8gcmV0dXJuIGEgbmV3IHRyYW5zZm9ybWVyICh0cmFuc2R1Y2VyIGNhc2UpLlxuICogT3RoZXJ3aXNlLCBpdCB3aWxsIGRlZmF1bHQgdG8gZXhlY3V0aW5nIFtmbl0uXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7QXJyYXl9IG1ldGhvZE5hbWVzIHByb3BlcnRpZXMgdG8gY2hlY2sgZm9yIGEgY3VzdG9tIGltcGxlbWVudGF0aW9uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSB4ZiB0cmFuc2R1Y2VyIHRvIGluaXRpYWxpemUgaWYgb2JqZWN0IGlzIHRyYW5zZm9ybWVyXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBkZWZhdWx0IHJhbWRhIGltcGxlbWVudGF0aW9uXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBmdW5jdGlvbiB0aGF0IGRpc3BhdGNoZXMgb24gb2JqZWN0IGluIGxpc3QgcG9zaXRpb25cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfZGlzcGF0Y2hhYmxlKG1ldGhvZE5hbWVzLCB4ZiwgZm4pIHtcbiAgcmV0dXJuIGZ1bmN0aW9uKCkge1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICByZXR1cm4gZm4oKTtcbiAgICB9XG4gICAgdmFyIGFyZ3MgPSBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApO1xuICAgIHZhciBvYmogPSBhcmdzLnBvcCgpO1xuICAgIGlmICghX2lzQXJyYXkob2JqKSkge1xuICAgICAgdmFyIGlkeCA9IDA7XG4gICAgICB3aGlsZSAoaWR4IDwgbWV0aG9kTmFtZXMubGVuZ3RoKSB7XG4gICAgICAgIGlmICh0eXBlb2Ygb2JqW21ldGhvZE5hbWVzW2lkeF1dID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgcmV0dXJuIG9ialttZXRob2ROYW1lc1tpZHhdXS5hcHBseShvYmosIGFyZ3MpO1xuICAgICAgICB9XG4gICAgICAgIGlkeCArPSAxO1xuICAgICAgfVxuICAgICAgaWYgKF9pc1RyYW5zZm9ybWVyKG9iaikpIHtcbiAgICAgICAgdmFyIHRyYW5zZHVjZXIgPSB4Zi5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgcmV0dXJuIHRyYW5zZHVjZXIob2JqKTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGZuLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gIH07XG59O1xuIiwidmFyIHRha2UgPSByZXF1aXJlKCcuLi90YWtlJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gZHJvcExhc3QobiwgeHMpIHtcbiAgcmV0dXJuIHRha2UobiA8IHhzLmxlbmd0aCA/IHhzLmxlbmd0aCAtIG4gOiAwLCB4cyk7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBkcm9wTGFzdFdoaWxlKHByZWQsIGxpc3QpIHtcbiAgdmFyIGlkeCA9IGxpc3QubGVuZ3RoIC0gMTtcbiAgd2hpbGUgKGlkeCA+PSAwICYmIHByZWQobGlzdFtpZHhdKSkge1xuICAgIGlkeCAtPSAxO1xuICB9XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChsaXN0LCAwLCBpZHggKyAxKTtcbn07XG4iLCJ2YXIgX2FycmF5RnJvbUl0ZXJhdG9yID0gcmVxdWlyZSgnLi9fYXJyYXlGcm9tSXRlcmF0b3InKTtcbnZhciBfZnVuY3Rpb25OYW1lID0gcmVxdWlyZSgnLi9fZnVuY3Rpb25OYW1lJyk7XG52YXIgX2hhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xudmFyIGlkZW50aWNhbCA9IHJlcXVpcmUoJy4uL2lkZW50aWNhbCcpO1xudmFyIGtleXMgPSByZXF1aXJlKCcuLi9rZXlzJyk7XG52YXIgdHlwZSA9IHJlcXVpcmUoJy4uL3R5cGUnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9lcXVhbHMoYSwgYiwgc3RhY2tBLCBzdGFja0IpIHtcbiAgaWYgKGlkZW50aWNhbChhLCBiKSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG5cbiAgaWYgKHR5cGUoYSkgIT09IHR5cGUoYikpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICBpZiAoYSA9PSBudWxsIHx8IGIgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIGlmICh0eXBlb2YgYS5lcXVhbHMgPT09ICdmdW5jdGlvbicgfHwgdHlwZW9mIGIuZXF1YWxzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBhLmVxdWFscyA9PT0gJ2Z1bmN0aW9uJyAmJiBhLmVxdWFscyhiKSAmJlxuICAgICAgICAgICB0eXBlb2YgYi5lcXVhbHMgPT09ICdmdW5jdGlvbicgJiYgYi5lcXVhbHMoYSk7XG4gIH1cblxuICBzd2l0Y2ggKHR5cGUoYSkpIHtcbiAgICBjYXNlICdBcmd1bWVudHMnOlxuICAgIGNhc2UgJ0FycmF5JzpcbiAgICBjYXNlICdPYmplY3QnOlxuICAgICAgaWYgKHR5cGVvZiBhLmNvbnN0cnVjdG9yID09PSAnZnVuY3Rpb24nICYmXG4gICAgICAgICAgX2Z1bmN0aW9uTmFtZShhLmNvbnN0cnVjdG9yKSA9PT0gJ1Byb21pc2UnKSB7XG4gICAgICAgIHJldHVybiBhID09PSBiO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnQm9vbGVhbic6XG4gICAgY2FzZSAnTnVtYmVyJzpcbiAgICBjYXNlICdTdHJpbmcnOlxuICAgICAgaWYgKCEodHlwZW9mIGEgPT09IHR5cGVvZiBiICYmIGlkZW50aWNhbChhLnZhbHVlT2YoKSwgYi52YWx1ZU9mKCkpKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdEYXRlJzpcbiAgICAgIGlmICghaWRlbnRpY2FsKGEudmFsdWVPZigpLCBiLnZhbHVlT2YoKSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnRXJyb3InOlxuICAgICAgcmV0dXJuIGEubmFtZSA9PT0gYi5uYW1lICYmIGEubWVzc2FnZSA9PT0gYi5tZXNzYWdlO1xuICAgIGNhc2UgJ1JlZ0V4cCc6XG4gICAgICBpZiAoIShhLnNvdXJjZSA9PT0gYi5zb3VyY2UgJiZcbiAgICAgICAgICAgIGEuZ2xvYmFsID09PSBiLmdsb2JhbCAmJlxuICAgICAgICAgICAgYS5pZ25vcmVDYXNlID09PSBiLmlnbm9yZUNhc2UgJiZcbiAgICAgICAgICAgIGEubXVsdGlsaW5lID09PSBiLm11bHRpbGluZSAmJlxuICAgICAgICAgICAgYS5zdGlja3kgPT09IGIuc3RpY2t5ICYmXG4gICAgICAgICAgICBhLnVuaWNvZGUgPT09IGIudW5pY29kZSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgYnJlYWs7XG4gICAgY2FzZSAnTWFwJzpcbiAgICBjYXNlICdTZXQnOlxuICAgICAgaWYgKCFfZXF1YWxzKF9hcnJheUZyb21JdGVyYXRvcihhLmVudHJpZXMoKSksIF9hcnJheUZyb21JdGVyYXRvcihiLmVudHJpZXMoKSksIHN0YWNrQSwgc3RhY2tCKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBicmVhaztcbiAgICBjYXNlICdJbnQ4QXJyYXknOlxuICAgIGNhc2UgJ1VpbnQ4QXJyYXknOlxuICAgIGNhc2UgJ1VpbnQ4Q2xhbXBlZEFycmF5JzpcbiAgICBjYXNlICdJbnQxNkFycmF5JzpcbiAgICBjYXNlICdVaW50MTZBcnJheSc6XG4gICAgY2FzZSAnSW50MzJBcnJheSc6XG4gICAgY2FzZSAnVWludDMyQXJyYXknOlxuICAgIGNhc2UgJ0Zsb2F0MzJBcnJheSc6XG4gICAgY2FzZSAnRmxvYXQ2NEFycmF5JzpcbiAgICAgIGJyZWFrO1xuICAgIGNhc2UgJ0FycmF5QnVmZmVyJzpcbiAgICAgIGJyZWFrO1xuICAgIGRlZmF1bHQ6XG4gICAgICAvLyBWYWx1ZXMgb2Ygb3RoZXIgdHlwZXMgYXJlIG9ubHkgZXF1YWwgaWYgaWRlbnRpY2FsLlxuICAgICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgdmFyIGtleXNBID0ga2V5cyhhKTtcbiAgaWYgKGtleXNBLmxlbmd0aCAhPT0ga2V5cyhiKS5sZW5ndGgpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cblxuICB2YXIgaWR4ID0gc3RhY2tBLmxlbmd0aCAtIDE7XG4gIHdoaWxlIChpZHggPj0gMCkge1xuICAgIGlmIChzdGFja0FbaWR4XSA9PT0gYSkge1xuICAgICAgcmV0dXJuIHN0YWNrQltpZHhdID09PSBiO1xuICAgIH1cbiAgICBpZHggLT0gMTtcbiAgfVxuXG4gIHN0YWNrQS5wdXNoKGEpO1xuICBzdGFja0IucHVzaChiKTtcbiAgaWR4ID0ga2V5c0EubGVuZ3RoIC0gMTtcbiAgd2hpbGUgKGlkeCA+PSAwKSB7XG4gICAgdmFyIGtleSA9IGtleXNBW2lkeF07XG4gICAgaWYgKCEoX2hhcyhrZXksIGIpICYmIF9lcXVhbHMoYltrZXldLCBhW2tleV0sIHN0YWNrQSwgc3RhY2tCKSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWR4IC09IDE7XG4gIH1cbiAgc3RhY2tBLnBvcCgpO1xuICBzdGFja0IucG9wKCk7XG4gIHJldHVybiB0cnVlO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2ZpbHRlcihmbiwgbGlzdCkge1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGxlbiA9IGxpc3QubGVuZ3RoO1xuICB2YXIgcmVzdWx0ID0gW107XG5cbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIGlmIChmbihsaXN0W2lkeF0pKSB7XG4gICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBsaXN0W2lkeF07XG4gICAgfVxuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xuIiwidmFyIF9mb3JjZVJlZHVjZWQgPSByZXF1aXJlKCcuL19mb3JjZVJlZHVjZWQnKTtcbnZhciBfcmVkdWNlID0gcmVxdWlyZSgnLi9fcmVkdWNlJyk7XG52YXIgX3hmQmFzZSA9IHJlcXVpcmUoJy4vX3hmQmFzZScpO1xudmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaXNBcnJheUxpa2UnKTtcblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBwcmVzZXJ2aW5nUmVkdWNlZCA9IGZ1bmN0aW9uKHhmKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICdAQHRyYW5zZHVjZXIvaW5pdCc6IF94ZkJhc2UuaW5pdCxcbiAgICAgICdAQHRyYW5zZHVjZXIvcmVzdWx0JzogZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgICAgIHJldHVybiB4ZlsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddKHJlc3VsdCk7XG4gICAgICB9LFxuICAgICAgJ0BAdHJhbnNkdWNlci9zdGVwJzogZnVuY3Rpb24ocmVzdWx0LCBpbnB1dCkge1xuICAgICAgICB2YXIgcmV0ID0geGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10ocmVzdWx0LCBpbnB1dCk7XG4gICAgICAgIHJldHVybiByZXRbJ0BAdHJhbnNkdWNlci9yZWR1Y2VkJ10gPyBfZm9yY2VSZWR1Y2VkKHJldCkgOiByZXQ7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gX3hjYXQoeGYpIHtcbiAgICB2YXIgcnhmID0gcHJlc2VydmluZ1JlZHVjZWQoeGYpO1xuICAgIHJldHVybiB7XG4gICAgICAnQEB0cmFuc2R1Y2VyL2luaXQnOiBfeGZCYXNlLmluaXQsXG4gICAgICAnQEB0cmFuc2R1Y2VyL3Jlc3VsdCc6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgICAgICByZXR1cm4gcnhmWydAQHRyYW5zZHVjZXIvcmVzdWx0J10ocmVzdWx0KTtcbiAgICAgIH0sXG4gICAgICAnQEB0cmFuc2R1Y2VyL3N0ZXAnOiBmdW5jdGlvbihyZXN1bHQsIGlucHV0KSB7XG4gICAgICAgIHJldHVybiAhaXNBcnJheUxpa2UoaW5wdXQpID8gX3JlZHVjZShyeGYsIHJlc3VsdCwgW2lucHV0XSkgOiBfcmVkdWNlKHJ4ZiwgcmVzdWx0LCBpbnB1dCk7XG4gICAgICB9XG4gICAgfTtcbiAgfTtcbn0oKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9mb3JjZVJlZHVjZWQoeCkge1xuICByZXR1cm4ge1xuICAgICdAQHRyYW5zZHVjZXIvdmFsdWUnOiB4LFxuICAgICdAQHRyYW5zZHVjZXIvcmVkdWNlZCc6IHRydWVcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9mdW5jdGlvbk5hbWUoZikge1xuICAvLyBTdHJpbmcoeCA9PiB4KSBldmFsdWF0ZXMgdG8gXCJ4ID0+IHhcIiwgc28gdGhlIHBhdHRlcm4gbWF5IG5vdCBtYXRjaC5cbiAgdmFyIG1hdGNoID0gU3RyaW5nKGYpLm1hdGNoKC9eZnVuY3Rpb24gKFxcdyopLyk7XG4gIHJldHVybiBtYXRjaCA9PSBudWxsID8gJycgOiBtYXRjaFsxXTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9oYXMocHJvcCwgb2JqKSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9pZGVudGl0eSh4KSB7IHJldHVybiB4OyB9O1xuIiwidmFyIGVxdWFscyA9IHJlcXVpcmUoJy4uL2VxdWFscycpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2luZGV4T2YobGlzdCwgYSwgaWR4KSB7XG4gIHZhciBpbmYsIGl0ZW07XG4gIC8vIEFycmF5LnByb3RvdHlwZS5pbmRleE9mIGRvZXNuJ3QgZXhpc3QgYmVsb3cgSUU5XG4gIGlmICh0eXBlb2YgbGlzdC5pbmRleE9mID09PSAnZnVuY3Rpb24nKSB7XG4gICAgc3dpdGNoICh0eXBlb2YgYSkge1xuICAgICAgY2FzZSAnbnVtYmVyJzpcbiAgICAgICAgaWYgKGEgPT09IDApIHtcbiAgICAgICAgICAvLyBtYW51YWxseSBjcmF3bCB0aGUgbGlzdCB0byBkaXN0aW5ndWlzaCBiZXR3ZWVuICswIGFuZCAtMFxuICAgICAgICAgIGluZiA9IDEgLyBhO1xuICAgICAgICAgIHdoaWxlIChpZHggPCBsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgaXRlbSA9IGxpc3RbaWR4XTtcbiAgICAgICAgICAgIGlmIChpdGVtID09PSAwICYmIDEgLyBpdGVtID09PSBpbmYpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIGlkeDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlkeCArPSAxO1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gZWxzZSBpZiAoYSAhPT0gYSkge1xuICAgICAgICAgIC8vIE5hTlxuICAgICAgICAgIHdoaWxlIChpZHggPCBsaXN0Lmxlbmd0aCkge1xuICAgICAgICAgICAgaXRlbSA9IGxpc3RbaWR4XTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgaXRlbSA9PT0gJ251bWJlcicgJiYgaXRlbSAhPT0gaXRlbSkge1xuICAgICAgICAgICAgICByZXR1cm4gaWR4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWR4ICs9IDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgICAvLyBub24temVybyBudW1iZXJzIGNhbiB1dGlsaXNlIFNldFxuICAgICAgICByZXR1cm4gbGlzdC5pbmRleE9mKGEsIGlkeCk7XG5cbiAgICAgIC8vIGFsbCB0aGVzZSB0eXBlcyBjYW4gdXRpbGlzZSBTZXRcbiAgICAgIGNhc2UgJ3N0cmluZyc6XG4gICAgICBjYXNlICdib29sZWFuJzpcbiAgICAgIGNhc2UgJ2Z1bmN0aW9uJzpcbiAgICAgIGNhc2UgJ3VuZGVmaW5lZCc6XG4gICAgICAgIHJldHVybiBsaXN0LmluZGV4T2YoYSwgaWR4KTtcblxuICAgICAgY2FzZSAnb2JqZWN0JzpcbiAgICAgICAgaWYgKGEgPT09IG51bGwpIHtcbiAgICAgICAgICAvLyBudWxsIGNhbiB1dGlsaXNlIFNldFxuICAgICAgICAgIHJldHVybiBsaXN0LmluZGV4T2YoYSwgaWR4KTtcbiAgICAgICAgfVxuICAgIH1cbiAgfVxuICAvLyBhbnl0aGluZyBlbHNlIG5vdCBjb3ZlcmVkIGFib3ZlLCBkZWZlciB0byBSLmVxdWFsc1xuICB3aGlsZSAoaWR4IDwgbGlzdC5sZW5ndGgpIHtcbiAgICBpZiAoZXF1YWxzKGxpc3RbaWR4XSwgYSkpIHtcbiAgICAgIHJldHVybiBpZHg7XG4gICAgfVxuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiAtMTtcbn07XG4iLCJ2YXIgX2hhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICB2YXIgdG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuICByZXR1cm4gdG9TdHJpbmcuY2FsbChhcmd1bWVudHMpID09PSAnW29iamVjdCBBcmd1bWVudHNdJyA/XG4gICAgZnVuY3Rpb24gX2lzQXJndW1lbnRzKHgpIHsgcmV0dXJuIHRvU3RyaW5nLmNhbGwoeCkgPT09ICdbb2JqZWN0IEFyZ3VtZW50c10nOyB9IDpcbiAgICBmdW5jdGlvbiBfaXNBcmd1bWVudHMoeCkgeyByZXR1cm4gX2hhcygnY2FsbGVlJywgeCk7IH07XG59KCkpO1xuIiwiLyoqXG4gKiBUZXN0cyB3aGV0aGVyIG9yIG5vdCBhbiBvYmplY3QgaXMgYW4gYXJyYXkuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSBvYmplY3QgdG8gdGVzdC5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiBgdmFsYCBpcyBhbiBhcnJheSwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgX2lzQXJyYXkoW10pOyAvLz0+IHRydWVcbiAqICAgICAgX2lzQXJyYXkobnVsbCk7IC8vPT4gZmFsc2VcbiAqICAgICAgX2lzQXJyYXkoe30pOyAvLz0+IGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gQXJyYXkuaXNBcnJheSB8fCBmdW5jdGlvbiBfaXNBcnJheSh2YWwpIHtcbiAgcmV0dXJuICh2YWwgIT0gbnVsbCAmJlxuICAgICAgICAgIHZhbC5sZW5ndGggPj0gMCAmJlxuICAgICAgICAgIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBBcnJheV0nKTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9pc0Z1bmN0aW9uKHgpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgRnVuY3Rpb25dJztcbn07XG4iLCIvKipcbiAqIERldGVybWluZSBpZiB0aGUgcGFzc2VkIGFyZ3VtZW50IGlzIGFuIGludGVnZXIuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7Kn0gblxuICogQGNhdGVnb3J5IFR5cGVcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gTnVtYmVyLmlzSW50ZWdlciB8fCBmdW5jdGlvbiBfaXNJbnRlZ2VyKG4pIHtcbiAgcmV0dXJuIChuIDw8IDApID09PSBuO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2lzTnVtYmVyKHgpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgTnVtYmVyXSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfaXNPYmplY3QoeCkge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHgpID09PSAnW29iamVjdCBPYmplY3RdJztcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9pc1BsYWNlaG9sZGVyKGEpIHtcbiAgcmV0dXJuIGEgIT0gbnVsbCAmJlxuICAgICAgICAgdHlwZW9mIGEgPT09ICdvYmplY3QnICYmXG4gICAgICAgICBhWydAQGZ1bmN0aW9uYWwvcGxhY2Vob2xkZXInXSA9PT0gdHJ1ZTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9pc1JlZ0V4cCh4KSB7XG4gIHJldHVybiBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkgPT09ICdbb2JqZWN0IFJlZ0V4cF0nO1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX2lzU3RyaW5nKHgpIHtcbiAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbCh4KSA9PT0gJ1tvYmplY3QgU3RyaW5nXSc7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfaXNUcmFuc2Zvcm1lcihvYmopIHtcbiAgcmV0dXJuIHR5cGVvZiBvYmpbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPT09ICdmdW5jdGlvbic7XG59O1xuIiwidmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaXNBcnJheUxpa2UnKTtcblxuXG4vKipcbiAqIGBfbWFrZUZsYXRgIGlzIGEgaGVscGVyIGZ1bmN0aW9uIHRoYXQgcmV0dXJucyBhIG9uZS1sZXZlbCBvciBmdWxseSByZWN1cnNpdmVcbiAqIGZ1bmN0aW9uIGJhc2VkIG9uIHRoZSBmbGFnIHBhc3NlZCBpbi5cbiAqXG4gKiBAcHJpdmF0ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9tYWtlRmxhdChyZWN1cnNpdmUpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIGZsYXR0KGxpc3QpIHtcbiAgICB2YXIgdmFsdWUsIGpsZW4sIGo7XG4gICAgdmFyIHJlc3VsdCA9IFtdO1xuICAgIHZhciBpZHggPSAwO1xuICAgIHZhciBpbGVuID0gbGlzdC5sZW5ndGg7XG5cbiAgICB3aGlsZSAoaWR4IDwgaWxlbikge1xuICAgICAgaWYgKGlzQXJyYXlMaWtlKGxpc3RbaWR4XSkpIHtcbiAgICAgICAgdmFsdWUgPSByZWN1cnNpdmUgPyBmbGF0dChsaXN0W2lkeF0pIDogbGlzdFtpZHhdO1xuICAgICAgICBqID0gMDtcbiAgICAgICAgamxlbiA9IHZhbHVlLmxlbmd0aDtcbiAgICAgICAgd2hpbGUgKGogPCBqbGVuKSB7XG4gICAgICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gdmFsdWVbal07XG4gICAgICAgICAgaiArPSAxO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXN1bHRbcmVzdWx0Lmxlbmd0aF0gPSBsaXN0W2lkeF07XG4gICAgICB9XG4gICAgICBpZHggKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcbn07XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9tYXAoZm4sIGZ1bmN0b3IpIHtcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBsZW4gPSBmdW5jdG9yLmxlbmd0aDtcbiAgdmFyIHJlc3VsdCA9IEFycmF5KGxlbik7XG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICByZXN1bHRbaWR4XSA9IGZuKGZ1bmN0b3JbaWR4XSk7XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn07XG4iLCJ2YXIgX2hhcyA9IHJlcXVpcmUoJy4vX2hhcycpO1xuXG4vLyBCYXNlZCBvbiBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9lbi9kb2NzL1dlYi9KYXZhU2NyaXB0L1JlZmVyZW5jZS9HbG9iYWxfT2JqZWN0cy9PYmplY3QvYXNzaWduXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9vYmplY3RBc3NpZ24odGFyZ2V0KSB7XG4gIGlmICh0YXJnZXQgPT0gbnVsbCkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0Nhbm5vdCBjb252ZXJ0IHVuZGVmaW5lZCBvciBudWxsIHRvIG9iamVjdCcpO1xuICB9XG5cbiAgdmFyIG91dHB1dCA9IE9iamVjdCh0YXJnZXQpO1xuICB2YXIgaWR4ID0gMTtcbiAgdmFyIGxlbmd0aCA9IGFyZ3VtZW50cy5sZW5ndGg7XG4gIHdoaWxlIChpZHggPCBsZW5ndGgpIHtcbiAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2lkeF07XG4gICAgaWYgKHNvdXJjZSAhPSBudWxsKSB7XG4gICAgICBmb3IgKHZhciBuZXh0S2V5IGluIHNvdXJjZSkge1xuICAgICAgICBpZiAoX2hhcyhuZXh0S2V5LCBzb3VyY2UpKSB7XG4gICAgICAgICAgb3V0cHV0W25leHRLZXldID0gc291cmNlW25leHRLZXldO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiBvdXRwdXQ7XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfb2YoeCkgeyByZXR1cm4gW3hdOyB9O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfcGlwZShmLCBnKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZy5jYWxsKHRoaXMsIGYuYXBwbHkodGhpcywgYXJndW1lbnRzKSk7XG4gIH07XG59O1xuIiwibW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfcGlwZVAoZiwgZykge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgdmFyIGN0eCA9IHRoaXM7XG4gICAgcmV0dXJuIGYuYXBwbHkoY3R4LCBhcmd1bWVudHMpLnRoZW4oZnVuY3Rpb24oeCkge1xuICAgICAgcmV0dXJuIGcuY2FsbChjdHgsIHgpO1xuICAgIH0pO1xuICB9O1xufTtcbiIsIm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gX3F1b3RlKHMpIHtcbiAgdmFyIGVzY2FwZWQgPSBzXG4gICAgLnJlcGxhY2UoL1xcXFwvZywgJ1xcXFxcXFxcJylcbiAgICAucmVwbGFjZSgvW1xcYl0vZywgJ1xcXFxiJykgIC8vIFxcYiBtYXRjaGVzIHdvcmQgYm91bmRhcnk7IFtcXGJdIG1hdGNoZXMgYmFja3NwYWNlXG4gICAgLnJlcGxhY2UoL1xcZi9nLCAnXFxcXGYnKVxuICAgIC5yZXBsYWNlKC9cXG4vZywgJ1xcXFxuJylcbiAgICAucmVwbGFjZSgvXFxyL2csICdcXFxccicpXG4gICAgLnJlcGxhY2UoL1xcdC9nLCAnXFxcXHQnKVxuICAgIC5yZXBsYWNlKC9cXHYvZywgJ1xcXFx2JylcbiAgICAucmVwbGFjZSgvXFwwL2csICdcXFxcMCcpO1xuXG4gIHJldHVybiAnXCInICsgZXNjYXBlZC5yZXBsYWNlKC9cIi9nLCAnXFxcXFwiJykgKyAnXCInO1xufTtcbiIsInZhciBfeHdyYXAgPSByZXF1aXJlKCcuL194d3JhcCcpO1xudmFyIGJpbmQgPSByZXF1aXJlKCcuLi9iaW5kJyk7XG52YXIgaXNBcnJheUxpa2UgPSByZXF1aXJlKCcuLi9pc0FycmF5TGlrZScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBfYXJyYXlSZWR1Y2UoeGYsIGFjYywgbGlzdCkge1xuICAgIHZhciBpZHggPSAwO1xuICAgIHZhciBsZW4gPSBsaXN0Lmxlbmd0aDtcbiAgICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgICBhY2MgPSB4ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXShhY2MsIGxpc3RbaWR4XSk7XG4gICAgICBpZiAoYWNjICYmIGFjY1snQEB0cmFuc2R1Y2VyL3JlZHVjZWQnXSkge1xuICAgICAgICBhY2MgPSBhY2NbJ0BAdHJhbnNkdWNlci92YWx1ZSddO1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICAgIGlkeCArPSAxO1xuICAgIH1cbiAgICByZXR1cm4geGZbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXShhY2MpO1xuICB9XG5cbiAgZnVuY3Rpb24gX2l0ZXJhYmxlUmVkdWNlKHhmLCBhY2MsIGl0ZXIpIHtcbiAgICB2YXIgc3RlcCA9IGl0ZXIubmV4dCgpO1xuICAgIHdoaWxlICghc3RlcC5kb25lKSB7XG4gICAgICBhY2MgPSB4ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXShhY2MsIHN0ZXAudmFsdWUpO1xuICAgICAgaWYgKGFjYyAmJiBhY2NbJ0BAdHJhbnNkdWNlci9yZWR1Y2VkJ10pIHtcbiAgICAgICAgYWNjID0gYWNjWydAQHRyYW5zZHVjZXIvdmFsdWUnXTtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgICBzdGVwID0gaXRlci5uZXh0KCk7XG4gICAgfVxuICAgIHJldHVybiB4ZlsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddKGFjYyk7XG4gIH1cblxuICBmdW5jdGlvbiBfbWV0aG9kUmVkdWNlKHhmLCBhY2MsIG9iaikge1xuICAgIHJldHVybiB4ZlsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddKG9iai5yZWR1Y2UoYmluZCh4ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSwgeGYpLCBhY2MpKTtcbiAgfVxuXG4gIHZhciBzeW1JdGVyYXRvciA9ICh0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJykgPyBTeW1ib2wuaXRlcmF0b3IgOiAnQEBpdGVyYXRvcic7XG4gIHJldHVybiBmdW5jdGlvbiBfcmVkdWNlKGZuLCBhY2MsIGxpc3QpIHtcbiAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBmbiA9IF94d3JhcChmbik7XG4gICAgfVxuICAgIGlmIChpc0FycmF5TGlrZShsaXN0KSkge1xuICAgICAgcmV0dXJuIF9hcnJheVJlZHVjZShmbiwgYWNjLCBsaXN0KTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiBsaXN0LnJlZHVjZSA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIF9tZXRob2RSZWR1Y2UoZm4sIGFjYywgbGlzdCk7XG4gICAgfVxuICAgIGlmIChsaXN0W3N5bUl0ZXJhdG9yXSAhPSBudWxsKSB7XG4gICAgICByZXR1cm4gX2l0ZXJhYmxlUmVkdWNlKGZuLCBhY2MsIGxpc3Rbc3ltSXRlcmF0b3JdKCkpO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIGxpc3QubmV4dCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIF9pdGVyYWJsZVJlZHVjZShmbiwgYWNjLCBsaXN0KTtcbiAgICB9XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcigncmVkdWNlOiBsaXN0IG11c3QgYmUgYXJyYXkgb3IgaXRlcmFibGUnKTtcbiAgfTtcbn0oKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIF9yZWR1Y2VkKHgpIHtcbiAgcmV0dXJuIHggJiYgeFsnQEB0cmFuc2R1Y2VyL3JlZHVjZWQnXSA/IHggOlxuICAgIHtcbiAgICAgICdAQHRyYW5zZHVjZXIvdmFsdWUnOiB4LFxuICAgICAgJ0BAdHJhbnNkdWNlci9yZWR1Y2VkJzogdHJ1ZVxuICAgIH07XG59O1xuIiwidmFyIF9hc3NpZ24gPSByZXF1aXJlKCcuL19hc3NpZ24nKTtcbnZhciBfaWRlbnRpdHkgPSByZXF1aXJlKCcuL19pZGVudGl0eScpO1xudmFyIF9pc1RyYW5zZm9ybWVyID0gcmVxdWlyZSgnLi9faXNUcmFuc2Zvcm1lcicpO1xudmFyIGlzQXJyYXlMaWtlID0gcmVxdWlyZSgnLi4vaXNBcnJheUxpa2UnKTtcbnZhciBvYmpPZiA9IHJlcXVpcmUoJy4uL29iak9mJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIHZhciBfc3RlcENhdEFycmF5ID0ge1xuICAgICdAQHRyYW5zZHVjZXIvaW5pdCc6IEFycmF5LFxuICAgICdAQHRyYW5zZHVjZXIvc3RlcCc6IGZ1bmN0aW9uKHhzLCB4KSB7XG4gICAgICB4cy5wdXNoKHgpO1xuICAgICAgcmV0dXJuIHhzO1xuICAgIH0sXG4gICAgJ0BAdHJhbnNkdWNlci9yZXN1bHQnOiBfaWRlbnRpdHlcbiAgfTtcbiAgdmFyIF9zdGVwQ2F0U3RyaW5nID0ge1xuICAgICdAQHRyYW5zZHVjZXIvaW5pdCc6IFN0cmluZyxcbiAgICAnQEB0cmFuc2R1Y2VyL3N0ZXAnOiBmdW5jdGlvbihhLCBiKSB7IHJldHVybiBhICsgYjsgfSxcbiAgICAnQEB0cmFuc2R1Y2VyL3Jlc3VsdCc6IF9pZGVudGl0eVxuICB9O1xuICB2YXIgX3N0ZXBDYXRPYmplY3QgPSB7XG4gICAgJ0BAdHJhbnNkdWNlci9pbml0JzogT2JqZWN0LFxuICAgICdAQHRyYW5zZHVjZXIvc3RlcCc6IGZ1bmN0aW9uKHJlc3VsdCwgaW5wdXQpIHtcbiAgICAgIHJldHVybiBfYXNzaWduKFxuICAgICAgICByZXN1bHQsXG4gICAgICAgIGlzQXJyYXlMaWtlKGlucHV0KSA/IG9iak9mKGlucHV0WzBdLCBpbnB1dFsxXSkgOiBpbnB1dFxuICAgICAgKTtcbiAgICB9LFxuICAgICdAQHRyYW5zZHVjZXIvcmVzdWx0JzogX2lkZW50aXR5XG4gIH07XG5cbiAgcmV0dXJuIGZ1bmN0aW9uIF9zdGVwQ2F0KG9iaikge1xuICAgIGlmIChfaXNUcmFuc2Zvcm1lcihvYmopKSB7XG4gICAgICByZXR1cm4gb2JqO1xuICAgIH1cbiAgICBpZiAoaXNBcnJheUxpa2Uob2JqKSkge1xuICAgICAgcmV0dXJuIF9zdGVwQ2F0QXJyYXk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygb2JqID09PSAnc3RyaW5nJykge1xuICAgICAgcmV0dXJuIF9zdGVwQ2F0U3RyaW5nO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIG9iaiA9PT0gJ29iamVjdCcpIHtcbiAgICAgIHJldHVybiBfc3RlcENhdE9iamVjdDtcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKCdDYW5ub3QgY3JlYXRlIHRyYW5zZm9ybWVyIGZvciAnICsgb2JqKTtcbiAgfTtcbn0oKSk7XG4iLCIvKipcbiAqIFBvbHlmaWxsIGZyb20gPGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0RhdGUvdG9JU09TdHJpbmc+LlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHBhZCA9IGZ1bmN0aW9uIHBhZChuKSB7IHJldHVybiAobiA8IDEwID8gJzAnIDogJycpICsgbjsgfTtcblxuICByZXR1cm4gdHlwZW9mIERhdGUucHJvdG90eXBlLnRvSVNPU3RyaW5nID09PSAnZnVuY3Rpb24nID9cbiAgICBmdW5jdGlvbiBfdG9JU09TdHJpbmcoZCkge1xuICAgICAgcmV0dXJuIGQudG9JU09TdHJpbmcoKTtcbiAgICB9IDpcbiAgICBmdW5jdGlvbiBfdG9JU09TdHJpbmcoZCkge1xuICAgICAgcmV0dXJuIChcbiAgICAgICAgZC5nZXRVVENGdWxsWWVhcigpICsgJy0nICtcbiAgICAgICAgcGFkKGQuZ2V0VVRDTW9udGgoKSArIDEpICsgJy0nICtcbiAgICAgICAgcGFkKGQuZ2V0VVRDRGF0ZSgpKSArICdUJyArXG4gICAgICAgIHBhZChkLmdldFVUQ0hvdXJzKCkpICsgJzonICtcbiAgICAgICAgcGFkKGQuZ2V0VVRDTWludXRlcygpKSArICc6JyArXG4gICAgICAgIHBhZChkLmdldFVUQ1NlY29uZHMoKSkgKyAnLicgK1xuICAgICAgICAoZC5nZXRVVENNaWxsaXNlY29uZHMoKSAvIDEwMDApLnRvRml4ZWQoMykuc2xpY2UoMiwgNSkgKyAnWidcbiAgICAgICk7XG4gICAgfTtcbn0oKSk7XG4iLCJ2YXIgX2NvbnRhaW5zID0gcmVxdWlyZSgnLi9fY29udGFpbnMnKTtcbnZhciBfbWFwID0gcmVxdWlyZSgnLi9fbWFwJyk7XG52YXIgX3F1b3RlID0gcmVxdWlyZSgnLi9fcXVvdGUnKTtcbnZhciBfdG9JU09TdHJpbmcgPSByZXF1aXJlKCcuL190b0lTT1N0cmluZycpO1xudmFyIGtleXMgPSByZXF1aXJlKCcuLi9rZXlzJyk7XG52YXIgcmVqZWN0ID0gcmVxdWlyZSgnLi4vcmVqZWN0Jyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBfdG9TdHJpbmcoeCwgc2Vlbikge1xuICB2YXIgcmVjdXIgPSBmdW5jdGlvbiByZWN1cih5KSB7XG4gICAgdmFyIHhzID0gc2Vlbi5jb25jYXQoW3hdKTtcbiAgICByZXR1cm4gX2NvbnRhaW5zKHksIHhzKSA/ICc8Q2lyY3VsYXI+JyA6IF90b1N0cmluZyh5LCB4cyk7XG4gIH07XG5cbiAgLy8gIG1hcFBhaXJzIDo6IChPYmplY3QsIFtTdHJpbmddKSAtPiBbU3RyaW5nXVxuICB2YXIgbWFwUGFpcnMgPSBmdW5jdGlvbihvYmosIGtleXMpIHtcbiAgICByZXR1cm4gX21hcChmdW5jdGlvbihrKSB7IHJldHVybiBfcXVvdGUoaykgKyAnOiAnICsgcmVjdXIob2JqW2tdKTsgfSwga2V5cy5zbGljZSgpLnNvcnQoKSk7XG4gIH07XG5cbiAgc3dpdGNoIChPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwoeCkpIHtcbiAgICBjYXNlICdbb2JqZWN0IEFyZ3VtZW50c10nOlxuICAgICAgcmV0dXJuICcoZnVuY3Rpb24oKSB7IHJldHVybiBhcmd1bWVudHM7IH0oJyArIF9tYXAocmVjdXIsIHgpLmpvaW4oJywgJykgKyAnKSknO1xuICAgIGNhc2UgJ1tvYmplY3QgQXJyYXldJzpcbiAgICAgIHJldHVybiAnWycgKyBfbWFwKHJlY3VyLCB4KS5jb25jYXQobWFwUGFpcnMoeCwgcmVqZWN0KGZ1bmN0aW9uKGspIHsgcmV0dXJuIC9eXFxkKyQvLnRlc3Qoayk7IH0sIGtleXMoeCkpKSkuam9pbignLCAnKSArICddJztcbiAgICBjYXNlICdbb2JqZWN0IEJvb2xlYW5dJzpcbiAgICAgIHJldHVybiB0eXBlb2YgeCA9PT0gJ29iamVjdCcgPyAnbmV3IEJvb2xlYW4oJyArIHJlY3VyKHgudmFsdWVPZigpKSArICcpJyA6IHgudG9TdHJpbmcoKTtcbiAgICBjYXNlICdbb2JqZWN0IERhdGVdJzpcbiAgICAgIHJldHVybiAnbmV3IERhdGUoJyArIChpc05hTih4LnZhbHVlT2YoKSkgPyByZWN1cihOYU4pIDogX3F1b3RlKF90b0lTT1N0cmluZyh4KSkpICsgJyknO1xuICAgIGNhc2UgJ1tvYmplY3QgTnVsbF0nOlxuICAgICAgcmV0dXJuICdudWxsJztcbiAgICBjYXNlICdbb2JqZWN0IE51bWJlcl0nOlxuICAgICAgcmV0dXJuIHR5cGVvZiB4ID09PSAnb2JqZWN0JyA/ICduZXcgTnVtYmVyKCcgKyByZWN1cih4LnZhbHVlT2YoKSkgKyAnKScgOiAxIC8geCA9PT0gLUluZmluaXR5ID8gJy0wJyA6IHgudG9TdHJpbmcoMTApO1xuICAgIGNhc2UgJ1tvYmplY3QgU3RyaW5nXSc6XG4gICAgICByZXR1cm4gdHlwZW9mIHggPT09ICdvYmplY3QnID8gJ25ldyBTdHJpbmcoJyArIHJlY3VyKHgudmFsdWVPZigpKSArICcpJyA6IF9xdW90ZSh4KTtcbiAgICBjYXNlICdbb2JqZWN0IFVuZGVmaW5lZF0nOlxuICAgICAgcmV0dXJuICd1bmRlZmluZWQnO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAodHlwZW9mIHgudG9TdHJpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdmFyIHJlcHIgPSB4LnRvU3RyaW5nKCk7XG4gICAgICAgIGlmIChyZXByICE9PSAnW29iamVjdCBPYmplY3RdJykge1xuICAgICAgICAgIHJldHVybiByZXByO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gJ3snICsgbWFwUGFpcnMoeCwga2V5cyh4KSkuam9pbignLCAnKSArICd9JztcbiAgfVxufTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9fY3VycnkyJyk7XG52YXIgX3JlZHVjZWQgPSByZXF1aXJlKCcuL19yZWR1Y2VkJyk7XG52YXIgX3hmQmFzZSA9IHJlcXVpcmUoJy4vX3hmQmFzZScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBYQWxsKGYsIHhmKSB7XG4gICAgdGhpcy54ZiA9IHhmO1xuICAgIHRoaXMuZiA9IGY7XG4gICAgdGhpcy5hbGwgPSB0cnVlO1xuICB9XG4gIFhBbGwucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvaW5pdCddID0gX3hmQmFzZS5pbml0O1xuICBYQWxsLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddID0gZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgaWYgKHRoaXMuYWxsKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgdHJ1ZSk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnhmWydAQHRyYW5zZHVjZXIvcmVzdWx0J10ocmVzdWx0KTtcbiAgfTtcbiAgWEFsbC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPSBmdW5jdGlvbihyZXN1bHQsIGlucHV0KSB7XG4gICAgaWYgKCF0aGlzLmYoaW5wdXQpKSB7XG4gICAgICB0aGlzLmFsbCA9IGZhbHNlO1xuICAgICAgcmVzdWx0ID0gX3JlZHVjZWQodGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXShyZXN1bHQsIGZhbHNlKSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgcmV0dXJuIF9jdXJyeTIoZnVuY3Rpb24gX3hhbGwoZiwgeGYpIHsgcmV0dXJuIG5ldyBYQWxsKGYsIHhmKTsgfSk7XG59KCkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL19jdXJyeTInKTtcbnZhciBfcmVkdWNlZCA9IHJlcXVpcmUoJy4vX3JlZHVjZWQnKTtcbnZhciBfeGZCYXNlID0gcmVxdWlyZSgnLi9feGZCYXNlJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFhBbnkoZiwgeGYpIHtcbiAgICB0aGlzLnhmID0geGY7XG4gICAgdGhpcy5mID0gZjtcbiAgICB0aGlzLmFueSA9IGZhbHNlO1xuICB9XG4gIFhBbnkucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvaW5pdCddID0gX3hmQmFzZS5pbml0O1xuICBYQW55LnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddID0gZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgaWYgKCF0aGlzLmFueSkge1xuICAgICAgcmVzdWx0ID0gdGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXShyZXN1bHQsIGZhbHNlKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMueGZbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXShyZXN1bHQpO1xuICB9O1xuICBYQW55LnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uKHJlc3VsdCwgaW5wdXQpIHtcbiAgICBpZiAodGhpcy5mKGlucHV0KSkge1xuICAgICAgdGhpcy5hbnkgPSB0cnVlO1xuICAgICAgcmVzdWx0ID0gX3JlZHVjZWQodGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXShyZXN1bHQsIHRydWUpKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gX2N1cnJ5MihmdW5jdGlvbiBfeGFueShmLCB4ZikgeyByZXR1cm4gbmV3IFhBbnkoZiwgeGYpOyB9KTtcbn0oKSk7XG4iLCJ2YXIgX2NvbmNhdCA9IHJlcXVpcmUoJy4vX2NvbmNhdCcpO1xudmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL19jdXJyeTInKTtcbnZhciBfeGZCYXNlID0gcmVxdWlyZSgnLi9feGZCYXNlJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFhBcGVydHVyZShuLCB4Zikge1xuICAgIHRoaXMueGYgPSB4ZjtcbiAgICB0aGlzLnBvcyA9IDA7XG4gICAgdGhpcy5mdWxsID0gZmFsc2U7XG4gICAgdGhpcy5hY2MgPSBuZXcgQXJyYXkobik7XG4gIH1cbiAgWEFwZXJ0dXJlLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IF94ZkJhc2UuaW5pdDtcbiAgWEFwZXJ0dXJlLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddID0gZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgdGhpcy5hY2MgPSBudWxsO1xuICAgIHJldHVybiB0aGlzLnhmWydAQHRyYW5zZHVjZXIvcmVzdWx0J10ocmVzdWx0KTtcbiAgfTtcbiAgWEFwZXJ0dXJlLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uKHJlc3VsdCwgaW5wdXQpIHtcbiAgICB0aGlzLnN0b3JlKGlucHV0KTtcbiAgICByZXR1cm4gdGhpcy5mdWxsID8gdGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXShyZXN1bHQsIHRoaXMuZ2V0Q29weSgpKSA6IHJlc3VsdDtcbiAgfTtcbiAgWEFwZXJ0dXJlLnByb3RvdHlwZS5zdG9yZSA9IGZ1bmN0aW9uKGlucHV0KSB7XG4gICAgdGhpcy5hY2NbdGhpcy5wb3NdID0gaW5wdXQ7XG4gICAgdGhpcy5wb3MgKz0gMTtcbiAgICBpZiAodGhpcy5wb3MgPT09IHRoaXMuYWNjLmxlbmd0aCkge1xuICAgICAgdGhpcy5wb3MgPSAwO1xuICAgICAgdGhpcy5mdWxsID0gdHJ1ZTtcbiAgICB9XG4gIH07XG4gIFhBcGVydHVyZS5wcm90b3R5cGUuZ2V0Q29weSA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKHRoaXMuYWNjLCB0aGlzLnBvcyksXG4gICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwodGhpcy5hY2MsIDAsIHRoaXMucG9zKSk7XG4gIH07XG5cbiAgcmV0dXJuIF9jdXJyeTIoZnVuY3Rpb24gX3hhcGVydHVyZShuLCB4ZikgeyByZXR1cm4gbmV3IFhBcGVydHVyZShuLCB4Zik7IH0pO1xufSgpKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9fY3VycnkyJyk7XG52YXIgX2ZsYXRDYXQgPSByZXF1aXJlKCcuL19mbGF0Q2F0Jyk7XG52YXIgbWFwID0gcmVxdWlyZSgnLi4vbWFwJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIF94Y2hhaW4oZiwgeGYpIHtcbiAgcmV0dXJuIG1hcChmLCBfZmxhdENhdCh4ZikpO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vX2N1cnJ5MicpO1xudmFyIF94ZkJhc2UgPSByZXF1aXJlKCcuL194ZkJhc2UnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gWERyb3AobiwgeGYpIHtcbiAgICB0aGlzLnhmID0geGY7XG4gICAgdGhpcy5uID0gbjtcbiAgfVxuICBYRHJvcC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBfeGZCYXNlLmluaXQ7XG4gIFhEcm9wLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddID0gX3hmQmFzZS5yZXN1bHQ7XG4gIFhEcm9wLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uKHJlc3VsdCwgaW5wdXQpIHtcbiAgICBpZiAodGhpcy5uID4gMCkge1xuICAgICAgdGhpcy5uIC09IDE7XG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXShyZXN1bHQsIGlucHV0KTtcbiAgfTtcblxuICByZXR1cm4gX2N1cnJ5MihmdW5jdGlvbiBfeGRyb3AobiwgeGYpIHsgcmV0dXJuIG5ldyBYRHJvcChuLCB4Zik7IH0pO1xufSgpKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9fY3VycnkyJyk7XG52YXIgX3hmQmFzZSA9IHJlcXVpcmUoJy4vX3hmQmFzZScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBYRHJvcExhc3QobiwgeGYpIHtcbiAgICB0aGlzLnhmID0geGY7XG4gICAgdGhpcy5wb3MgPSAwO1xuICAgIHRoaXMuZnVsbCA9IGZhbHNlO1xuICAgIHRoaXMuYWNjID0gbmV3IEFycmF5KG4pO1xuICB9XG4gIFhEcm9wTGFzdC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBfeGZCYXNlLmluaXQ7XG4gIFhEcm9wTGFzdC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXSA9ICBmdW5jdGlvbihyZXN1bHQpIHtcbiAgICB0aGlzLmFjYyA9IG51bGw7XG4gICAgcmV0dXJuIHRoaXMueGZbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXShyZXN1bHQpO1xuICB9O1xuICBYRHJvcExhc3QucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvc3RlcCddID0gZnVuY3Rpb24ocmVzdWx0LCBpbnB1dCkge1xuICAgIGlmICh0aGlzLmZ1bGwpIHtcbiAgICAgIHJlc3VsdCA9IHRoaXMueGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10ocmVzdWx0LCB0aGlzLmFjY1t0aGlzLnBvc10pO1xuICAgIH1cbiAgICB0aGlzLnN0b3JlKGlucHV0KTtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xuICBYRHJvcExhc3QucHJvdG90eXBlLnN0b3JlID0gZnVuY3Rpb24oaW5wdXQpIHtcbiAgICB0aGlzLmFjY1t0aGlzLnBvc10gPSBpbnB1dDtcbiAgICB0aGlzLnBvcyArPSAxO1xuICAgIGlmICh0aGlzLnBvcyA9PT0gdGhpcy5hY2MubGVuZ3RoKSB7XG4gICAgICB0aGlzLnBvcyA9IDA7XG4gICAgICB0aGlzLmZ1bGwgPSB0cnVlO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gX2N1cnJ5MihmdW5jdGlvbiBfeGRyb3BMYXN0KG4sIHhmKSB7IHJldHVybiBuZXcgWERyb3BMYXN0KG4sIHhmKTsgfSk7XG59KCkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL19jdXJyeTInKTtcbnZhciBfcmVkdWNlID0gcmVxdWlyZSgnLi9fcmVkdWNlJyk7XG52YXIgX3hmQmFzZSA9IHJlcXVpcmUoJy4vX3hmQmFzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gWERyb3BMYXN0V2hpbGUoZm4sIHhmKSB7XG4gICAgdGhpcy5mID0gZm47XG4gICAgdGhpcy5yZXRhaW5lZCA9IFtdO1xuICAgIHRoaXMueGYgPSB4ZjtcbiAgfVxuICBYRHJvcExhc3RXaGlsZS5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBfeGZCYXNlLmluaXQ7XG4gIFhEcm9wTGFzdFdoaWxlLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddID0gZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgdGhpcy5yZXRhaW5lZCA9IG51bGw7XG4gICAgcmV0dXJuIHRoaXMueGZbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXShyZXN1bHQpO1xuICB9O1xuICBYRHJvcExhc3RXaGlsZS5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPSBmdW5jdGlvbihyZXN1bHQsIGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuZihpbnB1dCkgPyB0aGlzLnJldGFpbihyZXN1bHQsIGlucHV0KVxuICAgICAgICAgICAgICAgICAgICAgICAgIDogdGhpcy5mbHVzaChyZXN1bHQsIGlucHV0KTtcbiAgfTtcbiAgWERyb3BMYXN0V2hpbGUucHJvdG90eXBlLmZsdXNoID0gZnVuY3Rpb24ocmVzdWx0LCBpbnB1dCkge1xuICAgIHJlc3VsdCA9IF9yZWR1Y2UoXG4gICAgICB0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddLFxuICAgICAgcmVzdWx0LFxuICAgICAgdGhpcy5yZXRhaW5lZFxuICAgICk7XG4gICAgdGhpcy5yZXRhaW5lZCA9IFtdO1xuICAgIHJldHVybiB0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgaW5wdXQpO1xuICB9O1xuICBYRHJvcExhc3RXaGlsZS5wcm90b3R5cGUucmV0YWluID0gZnVuY3Rpb24ocmVzdWx0LCBpbnB1dCkge1xuICAgIHRoaXMucmV0YWluZWQucHVzaChpbnB1dCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gX2N1cnJ5MihmdW5jdGlvbiBfeGRyb3BMYXN0V2hpbGUoZm4sIHhmKSB7IHJldHVybiBuZXcgWERyb3BMYXN0V2hpbGUoZm4sIHhmKTsgfSk7XG59KCkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL19jdXJyeTInKTtcbnZhciBfeGZCYXNlID0gcmVxdWlyZSgnLi9feGZCYXNlJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFhEcm9wUmVwZWF0c1dpdGgocHJlZCwgeGYpIHtcbiAgICB0aGlzLnhmID0geGY7XG4gICAgdGhpcy5wcmVkID0gcHJlZDtcbiAgICB0aGlzLmxhc3RWYWx1ZSA9IHVuZGVmaW5lZDtcbiAgICB0aGlzLnNlZW5GaXJzdFZhbHVlID0gZmFsc2U7XG4gIH1cblxuICBYRHJvcFJlcGVhdHNXaXRoLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IF94ZkJhc2UuaW5pdDtcbiAgWERyb3BSZXBlYXRzV2l0aC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXSA9IF94ZkJhc2UucmVzdWx0O1xuICBYRHJvcFJlcGVhdHNXaXRoLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uKHJlc3VsdCwgaW5wdXQpIHtcbiAgICB2YXIgc2FtZUFzTGFzdCA9IGZhbHNlO1xuICAgIGlmICghdGhpcy5zZWVuRmlyc3RWYWx1ZSkge1xuICAgICAgdGhpcy5zZWVuRmlyc3RWYWx1ZSA9IHRydWU7XG4gICAgfSBlbHNlIGlmICh0aGlzLnByZWQodGhpcy5sYXN0VmFsdWUsIGlucHV0KSkge1xuICAgICAgc2FtZUFzTGFzdCA9IHRydWU7XG4gICAgfVxuICAgIHRoaXMubGFzdFZhbHVlID0gaW5wdXQ7XG4gICAgcmV0dXJuIHNhbWVBc0xhc3QgPyByZXN1bHQgOiB0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgaW5wdXQpO1xuICB9O1xuXG4gIHJldHVybiBfY3VycnkyKGZ1bmN0aW9uIF94ZHJvcFJlcGVhdHNXaXRoKHByZWQsIHhmKSB7IHJldHVybiBuZXcgWERyb3BSZXBlYXRzV2l0aChwcmVkLCB4Zik7IH0pO1xufSgpKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9fY3VycnkyJyk7XG52YXIgX3hmQmFzZSA9IHJlcXVpcmUoJy4vX3hmQmFzZScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBYRHJvcFdoaWxlKGYsIHhmKSB7XG4gICAgdGhpcy54ZiA9IHhmO1xuICAgIHRoaXMuZiA9IGY7XG4gIH1cbiAgWERyb3BXaGlsZS5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBfeGZCYXNlLmluaXQ7XG4gIFhEcm9wV2hpbGUucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBfeGZCYXNlLnJlc3VsdDtcbiAgWERyb3BXaGlsZS5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPSBmdW5jdGlvbihyZXN1bHQsIGlucHV0KSB7XG4gICAgaWYgKHRoaXMuZikge1xuICAgICAgaWYgKHRoaXMuZihpbnB1dCkpIHtcbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgIH1cbiAgICAgIHRoaXMuZiA9IG51bGw7XG4gICAgfVxuICAgIHJldHVybiB0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgaW5wdXQpO1xuICB9O1xuXG4gIHJldHVybiBfY3VycnkyKGZ1bmN0aW9uIF94ZHJvcFdoaWxlKGYsIHhmKSB7IHJldHVybiBuZXcgWERyb3BXaGlsZShmLCB4Zik7IH0pO1xufSgpKTtcbiIsIm1vZHVsZS5leHBvcnRzID0ge1xuICBpbml0OiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gdGhpcy54ZlsnQEB0cmFuc2R1Y2VyL2luaXQnXSgpO1xuICB9LFxuICByZXN1bHQ6IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgIHJldHVybiB0aGlzLnhmWydAQHRyYW5zZHVjZXIvcmVzdWx0J10ocmVzdWx0KTtcbiAgfVxufTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9fY3VycnkyJyk7XG52YXIgX3hmQmFzZSA9IHJlcXVpcmUoJy4vX3hmQmFzZScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBYRmlsdGVyKGYsIHhmKSB7XG4gICAgdGhpcy54ZiA9IHhmO1xuICAgIHRoaXMuZiA9IGY7XG4gIH1cbiAgWEZpbHRlci5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBfeGZCYXNlLmluaXQ7XG4gIFhGaWx0ZXIucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBfeGZCYXNlLnJlc3VsdDtcbiAgWEZpbHRlci5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPSBmdW5jdGlvbihyZXN1bHQsIGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuZihpbnB1dCkgPyB0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgaW5wdXQpIDogcmVzdWx0O1xuICB9O1xuXG4gIHJldHVybiBfY3VycnkyKGZ1bmN0aW9uIF94ZmlsdGVyKGYsIHhmKSB7IHJldHVybiBuZXcgWEZpbHRlcihmLCB4Zik7IH0pO1xufSgpKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9fY3VycnkyJyk7XG52YXIgX3JlZHVjZWQgPSByZXF1aXJlKCcuL19yZWR1Y2VkJyk7XG52YXIgX3hmQmFzZSA9IHJlcXVpcmUoJy4vX3hmQmFzZScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBYRmluZChmLCB4Zikge1xuICAgIHRoaXMueGYgPSB4ZjtcbiAgICB0aGlzLmYgPSBmO1xuICAgIHRoaXMuZm91bmQgPSBmYWxzZTtcbiAgfVxuICBYRmluZC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBfeGZCYXNlLmluaXQ7XG4gIFhGaW5kLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddID0gZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgaWYgKCF0aGlzLmZvdW5kKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgdm9pZCAwKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMueGZbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXShyZXN1bHQpO1xuICB9O1xuICBYRmluZC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPSBmdW5jdGlvbihyZXN1bHQsIGlucHV0KSB7XG4gICAgaWYgKHRoaXMuZihpbnB1dCkpIHtcbiAgICAgIHRoaXMuZm91bmQgPSB0cnVlO1xuICAgICAgcmVzdWx0ID0gX3JlZHVjZWQodGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXShyZXN1bHQsIGlucHV0KSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgcmV0dXJuIF9jdXJyeTIoZnVuY3Rpb24gX3hmaW5kKGYsIHhmKSB7IHJldHVybiBuZXcgWEZpbmQoZiwgeGYpOyB9KTtcbn0oKSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vX2N1cnJ5MicpO1xudmFyIF9yZWR1Y2VkID0gcmVxdWlyZSgnLi9fcmVkdWNlZCcpO1xudmFyIF94ZkJhc2UgPSByZXF1aXJlKCcuL194ZkJhc2UnKTtcblxuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gWEZpbmRJbmRleChmLCB4Zikge1xuICAgIHRoaXMueGYgPSB4ZjtcbiAgICB0aGlzLmYgPSBmO1xuICAgIHRoaXMuaWR4ID0gLTE7XG4gICAgdGhpcy5mb3VuZCA9IGZhbHNlO1xuICB9XG4gIFhGaW5kSW5kZXgucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvaW5pdCddID0gX3hmQmFzZS5pbml0O1xuICBYRmluZEluZGV4LnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddID0gZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgaWYgKCF0aGlzLmZvdW5kKSB7XG4gICAgICByZXN1bHQgPSB0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgLTEpO1xuICAgIH1cbiAgICByZXR1cm4gdGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddKHJlc3VsdCk7XG4gIH07XG4gIFhGaW5kSW5kZXgucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvc3RlcCddID0gZnVuY3Rpb24ocmVzdWx0LCBpbnB1dCkge1xuICAgIHRoaXMuaWR4ICs9IDE7XG4gICAgaWYgKHRoaXMuZihpbnB1dCkpIHtcbiAgICAgIHRoaXMuZm91bmQgPSB0cnVlO1xuICAgICAgcmVzdWx0ID0gX3JlZHVjZWQodGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXShyZXN1bHQsIHRoaXMuaWR4KSk7XG4gICAgfVxuICAgIHJldHVybiByZXN1bHQ7XG4gIH07XG5cbiAgcmV0dXJuIF9jdXJyeTIoZnVuY3Rpb24gX3hmaW5kSW5kZXgoZiwgeGYpIHsgcmV0dXJuIG5ldyBYRmluZEluZGV4KGYsIHhmKTsgfSk7XG59KCkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL19jdXJyeTInKTtcbnZhciBfeGZCYXNlID0gcmVxdWlyZSgnLi9feGZCYXNlJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFhGaW5kTGFzdChmLCB4Zikge1xuICAgIHRoaXMueGYgPSB4ZjtcbiAgICB0aGlzLmYgPSBmO1xuICB9XG4gIFhGaW5kTGFzdC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBfeGZCYXNlLmluaXQ7XG4gIFhGaW5kTGFzdC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXSA9IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgIHJldHVybiB0aGlzLnhmWydAQHRyYW5zZHVjZXIvcmVzdWx0J10odGhpcy54ZlsnQEB0cmFuc2R1Y2VyL3N0ZXAnXShyZXN1bHQsIHRoaXMubGFzdCkpO1xuICB9O1xuICBYRmluZExhc3QucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvc3RlcCddID0gZnVuY3Rpb24ocmVzdWx0LCBpbnB1dCkge1xuICAgIGlmICh0aGlzLmYoaW5wdXQpKSB7XG4gICAgICB0aGlzLmxhc3QgPSBpbnB1dDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gX2N1cnJ5MihmdW5jdGlvbiBfeGZpbmRMYXN0KGYsIHhmKSB7IHJldHVybiBuZXcgWEZpbmRMYXN0KGYsIHhmKTsgfSk7XG59KCkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL19jdXJyeTInKTtcbnZhciBfeGZCYXNlID0gcmVxdWlyZSgnLi9feGZCYXNlJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFhGaW5kTGFzdEluZGV4KGYsIHhmKSB7XG4gICAgdGhpcy54ZiA9IHhmO1xuICAgIHRoaXMuZiA9IGY7XG4gICAgdGhpcy5pZHggPSAtMTtcbiAgICB0aGlzLmxhc3RJZHggPSAtMTtcbiAgfVxuICBYRmluZExhc3RJbmRleC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBfeGZCYXNlLmluaXQ7XG4gIFhGaW5kTGFzdEluZGV4LnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddID0gZnVuY3Rpb24ocmVzdWx0KSB7XG4gICAgcmV0dXJuIHRoaXMueGZbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXSh0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgdGhpcy5sYXN0SWR4KSk7XG4gIH07XG4gIFhGaW5kTGFzdEluZGV4LnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uKHJlc3VsdCwgaW5wdXQpIHtcbiAgICB0aGlzLmlkeCArPSAxO1xuICAgIGlmICh0aGlzLmYoaW5wdXQpKSB7XG4gICAgICB0aGlzLmxhc3RJZHggPSB0aGlzLmlkeDtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gX2N1cnJ5MihmdW5jdGlvbiBfeGZpbmRMYXN0SW5kZXgoZiwgeGYpIHsgcmV0dXJuIG5ldyBYRmluZExhc3RJbmRleChmLCB4Zik7IH0pO1xufSgpKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9fY3VycnkyJyk7XG52YXIgX3hmQmFzZSA9IHJlcXVpcmUoJy4vX3hmQmFzZScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBYTWFwKGYsIHhmKSB7XG4gICAgdGhpcy54ZiA9IHhmO1xuICAgIHRoaXMuZiA9IGY7XG4gIH1cbiAgWE1hcC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBfeGZCYXNlLmluaXQ7XG4gIFhNYXAucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBfeGZCYXNlLnJlc3VsdDtcbiAgWE1hcC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPSBmdW5jdGlvbihyZXN1bHQsIGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMueGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10ocmVzdWx0LCB0aGlzLmYoaW5wdXQpKTtcbiAgfTtcblxuICByZXR1cm4gX2N1cnJ5MihmdW5jdGlvbiBfeG1hcChmLCB4ZikgeyByZXR1cm4gbmV3IFhNYXAoZiwgeGYpOyB9KTtcbn0oKSk7XG4iLCJ2YXIgX2N1cnJ5TiA9IHJlcXVpcmUoJy4vX2N1cnJ5TicpO1xudmFyIF9oYXMgPSByZXF1aXJlKCcuL19oYXMnKTtcbnZhciBfeGZCYXNlID0gcmVxdWlyZSgnLi9feGZCYXNlJyk7XG5cblxubW9kdWxlLmV4cG9ydHMgPSAoZnVuY3Rpb24oKSB7XG4gIGZ1bmN0aW9uIFhSZWR1Y2VCeSh2YWx1ZUZuLCB2YWx1ZUFjYywga2V5Rm4sIHhmKSB7XG4gICAgdGhpcy52YWx1ZUZuID0gdmFsdWVGbjtcbiAgICB0aGlzLnZhbHVlQWNjID0gdmFsdWVBY2M7XG4gICAgdGhpcy5rZXlGbiA9IGtleUZuO1xuICAgIHRoaXMueGYgPSB4ZjtcbiAgICB0aGlzLmlucHV0cyA9IHt9O1xuICB9XG4gIFhSZWR1Y2VCeS5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBfeGZCYXNlLmluaXQ7XG4gIFhSZWR1Y2VCeS5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9yZXN1bHQnXSA9IGZ1bmN0aW9uKHJlc3VsdCkge1xuICAgIHZhciBrZXk7XG4gICAgZm9yIChrZXkgaW4gdGhpcy5pbnB1dHMpIHtcbiAgICAgIGlmIChfaGFzKGtleSwgdGhpcy5pbnB1dHMpKSB7XG4gICAgICAgIHJlc3VsdCA9IHRoaXMueGZbJ0BAdHJhbnNkdWNlci9zdGVwJ10ocmVzdWx0LCB0aGlzLmlucHV0c1trZXldKTtcbiAgICAgICAgaWYgKHJlc3VsdFsnQEB0cmFuc2R1Y2VyL3JlZHVjZWQnXSkge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdFsnQEB0cmFuc2R1Y2VyL3ZhbHVlJ107XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgdGhpcy5pbnB1dHMgPSBudWxsO1xuICAgIHJldHVybiB0aGlzLnhmWydAQHRyYW5zZHVjZXIvcmVzdWx0J10ocmVzdWx0KTtcbiAgfTtcbiAgWFJlZHVjZUJ5LnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uKHJlc3VsdCwgaW5wdXQpIHtcbiAgICB2YXIga2V5ID0gdGhpcy5rZXlGbihpbnB1dCk7XG4gICAgdGhpcy5pbnB1dHNba2V5XSA9IHRoaXMuaW5wdXRzW2tleV0gfHwgW2tleSwgdGhpcy52YWx1ZUFjY107XG4gICAgdGhpcy5pbnB1dHNba2V5XVsxXSA9IHRoaXMudmFsdWVGbih0aGlzLmlucHV0c1trZXldWzFdLCBpbnB1dCk7XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfTtcblxuICByZXR1cm4gX2N1cnJ5Tig0LCBbXSxcbiAgICAgICAgICAgICAgICAgZnVuY3Rpb24gX3hyZWR1Y2VCeSh2YWx1ZUZuLCB2YWx1ZUFjYywga2V5Rm4sIHhmKSB7XG4gICAgICAgICAgICAgICAgICAgcmV0dXJuIG5ldyBYUmVkdWNlQnkodmFsdWVGbiwgdmFsdWVBY2MsIGtleUZuLCB4Zik7XG4gICAgICAgICAgICAgICAgIH0pO1xufSgpKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9fY3VycnkyJyk7XG52YXIgX3JlZHVjZWQgPSByZXF1aXJlKCcuL19yZWR1Y2VkJyk7XG52YXIgX3hmQmFzZSA9IHJlcXVpcmUoJy4vX3hmQmFzZScpO1xuXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gWFRha2UobiwgeGYpIHtcbiAgICB0aGlzLnhmID0geGY7XG4gICAgdGhpcy5uID0gbjtcbiAgICB0aGlzLmkgPSAwO1xuICB9XG4gIFhUYWtlLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL2luaXQnXSA9IF94ZkJhc2UuaW5pdDtcbiAgWFRha2UucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBfeGZCYXNlLnJlc3VsdDtcbiAgWFRha2UucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvc3RlcCddID0gZnVuY3Rpb24ocmVzdWx0LCBpbnB1dCkge1xuICAgIHRoaXMuaSArPSAxO1xuICAgIHZhciByZXQgPSB0aGlzLm4gPT09IDAgPyByZXN1bHQgOiB0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgaW5wdXQpO1xuICAgIHJldHVybiB0aGlzLmkgPj0gdGhpcy5uID8gX3JlZHVjZWQocmV0KSA6IHJldDtcbiAgfTtcblxuICByZXR1cm4gX2N1cnJ5MihmdW5jdGlvbiBfeHRha2UobiwgeGYpIHsgcmV0dXJuIG5ldyBYVGFrZShuLCB4Zik7IH0pO1xufSgpKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9fY3VycnkyJyk7XG52YXIgX3JlZHVjZWQgPSByZXF1aXJlKCcuL19yZWR1Y2VkJyk7XG52YXIgX3hmQmFzZSA9IHJlcXVpcmUoJy4vX3hmQmFzZScpO1xuXG5cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICBmdW5jdGlvbiBYVGFrZVdoaWxlKGYsIHhmKSB7XG4gICAgdGhpcy54ZiA9IHhmO1xuICAgIHRoaXMuZiA9IGY7XG4gIH1cbiAgWFRha2VXaGlsZS5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBfeGZCYXNlLmluaXQ7XG4gIFhUYWtlV2hpbGUucHJvdG90eXBlWydAQHRyYW5zZHVjZXIvcmVzdWx0J10gPSBfeGZCYXNlLnJlc3VsdDtcbiAgWFRha2VXaGlsZS5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9zdGVwJ10gPSBmdW5jdGlvbihyZXN1bHQsIGlucHV0KSB7XG4gICAgcmV0dXJuIHRoaXMuZihpbnB1dCkgPyB0aGlzLnhmWydAQHRyYW5zZHVjZXIvc3RlcCddKHJlc3VsdCwgaW5wdXQpIDogX3JlZHVjZWQocmVzdWx0KTtcbiAgfTtcblxuICByZXR1cm4gX2N1cnJ5MihmdW5jdGlvbiBfeHRha2VXaGlsZShmLCB4ZikgeyByZXR1cm4gbmV3IFhUYWtlV2hpbGUoZiwgeGYpOyB9KTtcbn0oKSk7XG4iLCJtb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgZnVuY3Rpb24gWFdyYXAoZm4pIHtcbiAgICB0aGlzLmYgPSBmbjtcbiAgfVxuICBYV3JhcC5wcm90b3R5cGVbJ0BAdHJhbnNkdWNlci9pbml0J10gPSBmdW5jdGlvbigpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2luaXQgbm90IGltcGxlbWVudGVkIG9uIFhXcmFwJyk7XG4gIH07XG4gIFhXcmFwLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3Jlc3VsdCddID0gZnVuY3Rpb24oYWNjKSB7IHJldHVybiBhY2M7IH07XG4gIFhXcmFwLnByb3RvdHlwZVsnQEB0cmFuc2R1Y2VyL3N0ZXAnXSA9IGZ1bmN0aW9uKGFjYywgeCkge1xuICAgIHJldHVybiB0aGlzLmYoYWNjLCB4KTtcbiAgfTtcblxuICByZXR1cm4gZnVuY3Rpb24gX3h3cmFwKGZuKSB7IHJldHVybiBuZXcgWFdyYXAoZm4pOyB9O1xufSgpKTtcbiIsInZhciBfY29udGFpbnMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jb250YWlucycpO1xudmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfZmlsdGVyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fZmlsdGVyJyk7XG52YXIgZmxpcCA9IHJlcXVpcmUoJy4vZmxpcCcpO1xudmFyIHVuaXEgPSByZXF1aXJlKCcuL3VuaXEnKTtcblxuXG4vKipcbiAqIENvbWJpbmVzIHR3byBsaXN0cyBpbnRvIGEgc2V0IChpLmUuIG5vIGR1cGxpY2F0ZXMpIGNvbXBvc2VkIG9mIHRob3NlXG4gKiBlbGVtZW50cyBjb21tb24gdG8gYm90aCBsaXN0cy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBSZWxhdGlvblxuICogQHNpZyBbKl0gLT4gWypdIC0+IFsqXVxuICogQHBhcmFtIHtBcnJheX0gbGlzdDEgVGhlIGZpcnN0IGxpc3QuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0MiBUaGUgc2Vjb25kIGxpc3QuXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIGxpc3Qgb2YgZWxlbWVudHMgZm91bmQgaW4gYm90aCBgbGlzdDFgIGFuZCBgbGlzdDJgLlxuICogQHNlZSBSLmludGVyc2VjdGlvbldpdGhcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmludGVyc2VjdGlvbihbMSwyLDMsNF0sIFs3LDYsNSw0LDNdKTsgLy89PiBbNCwgM11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGludGVyc2VjdGlvbihsaXN0MSwgbGlzdDIpIHtcbiAgdmFyIGxvb2t1cExpc3QsIGZpbHRlcmVkTGlzdDtcbiAgaWYgKGxpc3QxLmxlbmd0aCA+IGxpc3QyLmxlbmd0aCkge1xuICAgIGxvb2t1cExpc3QgPSBsaXN0MTtcbiAgICBmaWx0ZXJlZExpc3QgPSBsaXN0MjtcbiAgfSBlbHNlIHtcbiAgICBsb29rdXBMaXN0ID0gbGlzdDI7XG4gICAgZmlsdGVyZWRMaXN0ID0gbGlzdDE7XG4gIH1cbiAgcmV0dXJuIHVuaXEoX2ZpbHRlcihmbGlwKF9jb250YWlucykobG9va3VwTGlzdCksIGZpbHRlcmVkTGlzdCkpO1xufSk7XG4iLCJ2YXIgX2NvbnRhaW5zV2l0aCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2NvbnRhaW5zV2l0aCcpO1xudmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcbnZhciB1bmlxV2l0aCA9IHJlcXVpcmUoJy4vdW5pcVdpdGgnKTtcblxuXG4vKipcbiAqIENvbWJpbmVzIHR3byBsaXN0cyBpbnRvIGEgc2V0IChpLmUuIG5vIGR1cGxpY2F0ZXMpIGNvbXBvc2VkIG9mIHRob3NlXG4gKiBlbGVtZW50cyBjb21tb24gdG8gYm90aCBsaXN0cy4gRHVwbGljYXRpb24gaXMgZGV0ZXJtaW5lZCBhY2NvcmRpbmcgdG8gdGhlXG4gKiB2YWx1ZSByZXR1cm5lZCBieSBhcHBseWluZyB0aGUgc3VwcGxpZWQgcHJlZGljYXRlIHRvIHR3byBsaXN0IGVsZW1lbnRzLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnICgoYSwgYSkgLT4gQm9vbGVhbikgLT4gW2FdIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWQgQSBwcmVkaWNhdGUgZnVuY3Rpb24gdGhhdCBkZXRlcm1pbmVzIHdoZXRoZXJcbiAqICAgICAgICB0aGUgdHdvIHN1cHBsaWVkIGVsZW1lbnRzIGFyZSBlcXVhbC5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QxIE9uZSBsaXN0IG9mIGl0ZW1zIHRvIGNvbXBhcmVcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QyIEEgc2Vjb25kIGxpc3Qgb2YgaXRlbXMgdG8gY29tcGFyZVxuICogQHJldHVybiB7QXJyYXl9IEEgbmV3IGxpc3QgY29udGFpbmluZyB0aG9zZSBlbGVtZW50cyBjb21tb24gdG8gYm90aCBsaXN0cy5cbiAqIEBzZWUgUi5pbnRlcnNlY3Rpb25cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgYnVmZmFsb1NwcmluZ2ZpZWxkID0gW1xuICogICAgICAgIHtpZDogODI0LCBuYW1lOiAnUmljaGllIEZ1cmF5J30sXG4gKiAgICAgICAge2lkOiA5NTYsIG5hbWU6ICdEZXdleSBNYXJ0aW4nfSxcbiAqICAgICAgICB7aWQ6IDMxMywgbmFtZTogJ0JydWNlIFBhbG1lcid9LFxuICogICAgICAgIHtpZDogNDU2LCBuYW1lOiAnU3RlcGhlbiBTdGlsbHMnfSxcbiAqICAgICAgICB7aWQ6IDE3NywgbmFtZTogJ05laWwgWW91bmcnfVxuICogICAgICBdO1xuICogICAgICB2YXIgY3NueSA9IFtcbiAqICAgICAgICB7aWQ6IDIwNCwgbmFtZTogJ0RhdmlkIENyb3NieSd9LFxuICogICAgICAgIHtpZDogNDU2LCBuYW1lOiAnU3RlcGhlbiBTdGlsbHMnfSxcbiAqICAgICAgICB7aWQ6IDUzOSwgbmFtZTogJ0dyYWhhbSBOYXNoJ30sXG4gKiAgICAgICAge2lkOiAxNzcsIG5hbWU6ICdOZWlsIFlvdW5nJ31cbiAqICAgICAgXTtcbiAqXG4gKiAgICAgIFIuaW50ZXJzZWN0aW9uV2l0aChSLmVxQnkoUi5wcm9wKCdpZCcpKSwgYnVmZmFsb1NwcmluZ2ZpZWxkLCBjc255KTtcbiAqICAgICAgLy89PiBbe2lkOiA0NTYsIG5hbWU6ICdTdGVwaGVuIFN0aWxscyd9LCB7aWQ6IDE3NywgbmFtZTogJ05laWwgWW91bmcnfV1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIGludGVyc2VjdGlvbldpdGgocHJlZCwgbGlzdDEsIGxpc3QyKSB7XG4gIHZhciBsb29rdXBMaXN0LCBmaWx0ZXJlZExpc3Q7XG4gIGlmIChsaXN0MS5sZW5ndGggPiBsaXN0Mi5sZW5ndGgpIHtcbiAgICBsb29rdXBMaXN0ID0gbGlzdDE7XG4gICAgZmlsdGVyZWRMaXN0ID0gbGlzdDI7XG4gIH0gZWxzZSB7XG4gICAgbG9va3VwTGlzdCA9IGxpc3QyO1xuICAgIGZpbHRlcmVkTGlzdCA9IGxpc3QxO1xuICB9XG4gIHZhciByZXN1bHRzID0gW107XG4gIHZhciBpZHggPSAwO1xuICB3aGlsZSAoaWR4IDwgZmlsdGVyZWRMaXN0Lmxlbmd0aCkge1xuICAgIGlmIChfY29udGFpbnNXaXRoKHByZWQsIGZpbHRlcmVkTGlzdFtpZHhdLCBsb29rdXBMaXN0KSkge1xuICAgICAgcmVzdWx0c1tyZXN1bHRzLmxlbmd0aF0gPSBmaWx0ZXJlZExpc3RbaWR4XTtcbiAgICB9XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIHVuaXFXaXRoKHByZWQsIHJlc3VsdHMpO1xufSk7XG4iLCJ2YXIgX2NoZWNrRm9yTWV0aG9kID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY2hlY2tGb3JNZXRob2QnKTtcbnZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGxpc3Qgd2l0aCB0aGUgc2VwYXJhdG9yIGludGVycG9zZWQgYmV0d2VlbiBlbGVtZW50cy5cbiAqXG4gKiBEaXNwYXRjaGVzIHRvIHRoZSBgaW50ZXJzcGVyc2VgIG1ldGhvZCBvZiB0aGUgc2Vjb25kIGFyZ3VtZW50LCBpZiBwcmVzZW50LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE0LjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIGEgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHsqfSBzZXBhcmF0b3IgVGhlIGVsZW1lbnQgdG8gYWRkIHRvIHRoZSBsaXN0LlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgbGlzdCB0byBiZSBpbnRlcnBvc2VkLlxuICogQHJldHVybiB7QXJyYXl9IFRoZSBuZXcgbGlzdC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmludGVyc3BlcnNlKCduJywgWydiYScsICdhJywgJ2EnXSk7IC8vPT4gWydiYScsICduJywgJ2EnLCAnbicsICdhJ11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKF9jaGVja0Zvck1ldGhvZCgnaW50ZXJzcGVyc2UnLCBmdW5jdGlvbiBpbnRlcnNwZXJzZShzZXBhcmF0b3IsIGxpc3QpIHtcbiAgdmFyIG91dCA9IFtdO1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGxlbmd0aCA9IGxpc3QubGVuZ3RoO1xuICB3aGlsZSAoaWR4IDwgbGVuZ3RoKSB7XG4gICAgaWYgKGlkeCA9PT0gbGVuZ3RoIC0gMSkge1xuICAgICAgb3V0LnB1c2gobGlzdFtpZHhdKTtcbiAgICB9IGVsc2Uge1xuICAgICAgb3V0LnB1c2gobGlzdFtpZHhdLCBzZXBhcmF0b3IpO1xuICAgIH1cbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gb3V0O1xufSkpO1xuIiwidmFyIF9jbG9uZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Nsb25lJyk7XG52YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xudmFyIF9pc1RyYW5zZm9ybWVyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faXNUcmFuc2Zvcm1lcicpO1xudmFyIF9yZWR1Y2UgPSByZXF1aXJlKCcuL2ludGVybmFsL19yZWR1Y2UnKTtcbnZhciBfc3RlcENhdCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3N0ZXBDYXQnKTtcblxuXG4vKipcbiAqIFRyYW5zZm9ybXMgdGhlIGl0ZW1zIG9mIHRoZSBsaXN0IHdpdGggdGhlIHRyYW5zZHVjZXIgYW5kIGFwcGVuZHMgdGhlXG4gKiB0cmFuc2Zvcm1lZCBpdGVtcyB0byB0aGUgYWNjdW11bGF0b3IgdXNpbmcgYW4gYXBwcm9wcmlhdGUgaXRlcmF0b3IgZnVuY3Rpb25cbiAqIGJhc2VkIG9uIHRoZSBhY2N1bXVsYXRvciB0eXBlLlxuICpcbiAqIFRoZSBhY2N1bXVsYXRvciBjYW4gYmUgYW4gYXJyYXksIHN0cmluZywgb2JqZWN0IG9yIGEgdHJhbnNmb3JtZXIuIEl0ZXJhdGVkXG4gKiBpdGVtcyB3aWxsIGJlIGFwcGVuZGVkIHRvIGFycmF5cyBhbmQgY29uY2F0ZW5hdGVkIHRvIHN0cmluZ3MuIE9iamVjdHMgd2lsbFxuICogYmUgbWVyZ2VkIGRpcmVjdGx5IG9yIDItaXRlbSBhcnJheXMgd2lsbCBiZSBtZXJnZWQgYXMga2V5LCB2YWx1ZSBwYWlycy5cbiAqXG4gKiBUaGUgYWNjdW11bGF0b3IgY2FuIGFsc28gYmUgYSB0cmFuc2Zvcm1lciBvYmplY3QgdGhhdCBwcm92aWRlcyBhIDItYXJpdHlcbiAqIHJlZHVjaW5nIGl0ZXJhdG9yIGZ1bmN0aW9uLCBzdGVwLCAwLWFyaXR5IGluaXRpYWwgdmFsdWUgZnVuY3Rpb24sIGluaXQsIGFuZFxuICogMS1hcml0eSByZXN1bHQgZXh0cmFjdGlvbiBmdW5jdGlvbiByZXN1bHQuIFRoZSBzdGVwIGZ1bmN0aW9uIGlzIHVzZWQgYXMgdGhlXG4gKiBpdGVyYXRvciBmdW5jdGlvbiBpbiByZWR1Y2UuIFRoZSByZXN1bHQgZnVuY3Rpb24gaXMgdXNlZCB0byBjb252ZXJ0IHRoZVxuICogZmluYWwgYWNjdW11bGF0b3IgaW50byB0aGUgcmV0dXJuIHR5cGUgYW5kIGluIG1vc3QgY2FzZXMgaXMgUi5pZGVudGl0eS4gVGhlXG4gKiBpbml0IGZ1bmN0aW9uIGlzIHVzZWQgdG8gcHJvdmlkZSB0aGUgaW5pdGlhbCBhY2N1bXVsYXRvci5cbiAqXG4gKiBUaGUgaXRlcmF0aW9uIGlzIHBlcmZvcm1lZCB3aXRoIFIucmVkdWNlIGFmdGVyIGluaXRpYWxpemluZyB0aGUgdHJhbnNkdWNlci5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xMi4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBhIC0+IChiIC0+IGIpIC0+IFtjXSAtPiBhXG4gKiBAcGFyYW0geyp9IGFjYyBUaGUgaW5pdGlhbCBhY2N1bXVsYXRvciB2YWx1ZS5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHhmIFRoZSB0cmFuc2R1Y2VyIGZ1bmN0aW9uLiBSZWNlaXZlcyBhIHRyYW5zZm9ybWVyIGFuZCByZXR1cm5zIGEgdHJhbnNmb3JtZXIuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm4geyp9IFRoZSBmaW5hbCwgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIG51bWJlcnMgPSBbMSwgMiwgMywgNF07XG4gKiAgICAgIHZhciB0cmFuc2R1Y2VyID0gUi5jb21wb3NlKFIubWFwKFIuYWRkKDEpKSwgUi50YWtlKDIpKTtcbiAqXG4gKiAgICAgIFIuaW50byhbXSwgdHJhbnNkdWNlciwgbnVtYmVycyk7IC8vPT4gWzIsIDNdXG4gKlxuICogICAgICB2YXIgaW50b0FycmF5ID0gUi5pbnRvKFtdKTtcbiAqICAgICAgaW50b0FycmF5KHRyYW5zZHVjZXIsIG51bWJlcnMpOyAvLz0+IFsyLCAzXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gaW50byhhY2MsIHhmLCBsaXN0KSB7XG4gIHJldHVybiBfaXNUcmFuc2Zvcm1lcihhY2MpID9cbiAgICBfcmVkdWNlKHhmKGFjYyksIGFjY1snQEB0cmFuc2R1Y2VyL2luaXQnXSgpLCBsaXN0KSA6XG4gICAgX3JlZHVjZSh4Zihfc3RlcENhdChhY2MpKSwgX2Nsb25lKGFjYywgW10sIFtdLCBmYWxzZSksIGxpc3QpO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIF9oYXMgPSByZXF1aXJlKCcuL2ludGVybmFsL19oYXMnKTtcbnZhciBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cblxuLyoqXG4gKiBTYW1lIGFzIFIuaW52ZXJ0T2JqLCBob3dldmVyIHRoaXMgYWNjb3VudHMgZm9yIG9iamVjdHMgd2l0aCBkdXBsaWNhdGUgdmFsdWVzXG4gKiBieSBwdXR0aW5nIHRoZSB2YWx1ZXMgaW50byBhbiBhcnJheS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC45LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcge3M6IHh9IC0+IHt4OiBbIHMsIC4uLiBdfVxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IG9yIGFycmF5IHRvIGludmVydFxuICogQHJldHVybiB7T2JqZWN0fSBvdXQgQSBuZXcgb2JqZWN0IHdpdGgga2V5c1xuICogaW4gYW4gYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHJhY2VSZXN1bHRzQnlGaXJzdE5hbWUgPSB7XG4gKiAgICAgICAgZmlyc3Q6ICdhbGljZScsXG4gKiAgICAgICAgc2Vjb25kOiAnamFrZScsXG4gKiAgICAgICAgdGhpcmQ6ICdhbGljZScsXG4gKiAgICAgIH07XG4gKiAgICAgIFIuaW52ZXJ0KHJhY2VSZXN1bHRzQnlGaXJzdE5hbWUpO1xuICogICAgICAvLz0+IHsgJ2FsaWNlJzogWydmaXJzdCcsICd0aGlyZCddLCAnamFrZSc6WydzZWNvbmQnXSB9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBpbnZlcnQob2JqKSB7XG4gIHZhciBwcm9wcyA9IGtleXMob2JqKTtcbiAgdmFyIGxlbiA9IHByb3BzLmxlbmd0aDtcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBvdXQgPSB7fTtcblxuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgdmFyIGtleSA9IHByb3BzW2lkeF07XG4gICAgdmFyIHZhbCA9IG9ialtrZXldO1xuICAgIHZhciBsaXN0ID0gX2hhcyh2YWwsIG91dCkgPyBvdXRbdmFsXSA6IChvdXRbdmFsXSA9IFtdKTtcbiAgICBsaXN0W2xpc3QubGVuZ3RoXSA9IGtleTtcbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gb3V0O1xufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgb2JqZWN0IHdpdGggdGhlIGtleXMgb2YgdGhlIGdpdmVuIG9iamVjdCBhcyB2YWx1ZXMsIGFuZCB0aGVcbiAqIHZhbHVlcyBvZiB0aGUgZ2l2ZW4gb2JqZWN0LCB3aGljaCBhcmUgY29lcmNlZCB0byBzdHJpbmdzLCBhcyBrZXlzLiBOb3RlXG4gKiB0aGF0IHRoZSBsYXN0IGtleSBmb3VuZCBpcyBwcmVmZXJyZWQgd2hlbiBoYW5kbGluZyB0aGUgc2FtZSB2YWx1ZS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC45LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcge3M6IHh9IC0+IHt4OiBzfVxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IG9yIGFycmF5IHRvIGludmVydFxuICogQHJldHVybiB7T2JqZWN0fSBvdXQgQSBuZXcgb2JqZWN0XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHJhY2VSZXN1bHRzID0ge1xuICogICAgICAgIGZpcnN0OiAnYWxpY2UnLFxuICogICAgICAgIHNlY29uZDogJ2pha2UnXG4gKiAgICAgIH07XG4gKiAgICAgIFIuaW52ZXJ0T2JqKHJhY2VSZXN1bHRzKTtcbiAqICAgICAgLy89PiB7ICdhbGljZSc6ICdmaXJzdCcsICdqYWtlJzonc2Vjb25kJyB9XG4gKlxuICogICAgICAvLyBBbHRlcm5hdGl2ZWx5OlxuICogICAgICB2YXIgcmFjZVJlc3VsdHMgPSBbJ2FsaWNlJywgJ2pha2UnXTtcbiAqICAgICAgUi5pbnZlcnRPYmoocmFjZVJlc3VsdHMpO1xuICogICAgICAvLz0+IHsgJ2FsaWNlJzogJzAnLCAnamFrZSc6JzEnIH1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGludmVydE9iaihvYmopIHtcbiAgdmFyIHByb3BzID0ga2V5cyhvYmopO1xuICB2YXIgbGVuID0gcHJvcHMubGVuZ3RoO1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIG91dCA9IHt9O1xuXG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICB2YXIga2V5ID0gcHJvcHNbaWR4XTtcbiAgICBvdXRbb2JqW2tleV1dID0ga2V5O1xuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiBvdXQ7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2lzRnVuY3Rpb24gPSByZXF1aXJlKCcuL2ludGVybmFsL19pc0Z1bmN0aW9uJyk7XG52YXIgY3VycnlOID0gcmVxdWlyZSgnLi9jdXJyeU4nKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuXG4vKipcbiAqIFR1cm5zIGEgbmFtZWQgbWV0aG9kIHdpdGggYSBzcGVjaWZpZWQgYXJpdHkgaW50byBhIGZ1bmN0aW9uIHRoYXQgY2FuIGJlXG4gKiBjYWxsZWQgZGlyZWN0bHkgc3VwcGxpZWQgd2l0aCBhcmd1bWVudHMgYW5kIGEgdGFyZ2V0IG9iamVjdC5cbiAqXG4gKiBUaGUgcmV0dXJuZWQgZnVuY3Rpb24gaXMgY3VycmllZCBhbmQgYWNjZXB0cyBgYXJpdHkgKyAxYCBwYXJhbWV0ZXJzIHdoZXJlXG4gKiB0aGUgZmluYWwgcGFyYW1ldGVyIGlzIHRoZSB0YXJnZXQgb2JqZWN0LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnIE51bWJlciAtPiBTdHJpbmcgLT4gKGEgLT4gYiAtPiAuLi4gLT4gbiAtPiBPYmplY3QgLT4gKilcbiAqIEBwYXJhbSB7TnVtYmVyfSBhcml0eSBOdW1iZXIgb2YgYXJndW1lbnRzIHRoZSByZXR1cm5lZCBmdW5jdGlvbiBzaG91bGQgdGFrZVxuICogICAgICAgIGJlZm9yZSB0aGUgdGFyZ2V0IG9iamVjdC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBtZXRob2QgTmFtZSBvZiB0aGUgbWV0aG9kIHRvIGNhbGwuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBuZXcgY3VycmllZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgc2xpY2VGcm9tID0gUi5pbnZva2VyKDEsICdzbGljZScpO1xuICogICAgICBzbGljZUZyb20oNiwgJ2FiY2RlZmdoaWprbG0nKTsgLy89PiAnZ2hpamtsbSdcbiAqICAgICAgdmFyIHNsaWNlRnJvbTYgPSBSLmludm9rZXIoMiwgJ3NsaWNlJykoNik7XG4gKiAgICAgIHNsaWNlRnJvbTYoOCwgJ2FiY2RlZmdoaWprbG0nKTsgLy89PiAnZ2gnXG4gKiBAc3ltYiBSLmludm9rZXIoMCwgJ21ldGhvZCcpKG8pID0gb1snbWV0aG9kJ10oKVxuICogQHN5bWIgUi5pbnZva2VyKDEsICdtZXRob2QnKShhLCBvKSA9IG9bJ21ldGhvZCddKGEpXG4gKiBAc3ltYiBSLmludm9rZXIoMiwgJ21ldGhvZCcpKGEsIGIsIG8pID0gb1snbWV0aG9kJ10oYSwgYilcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGludm9rZXIoYXJpdHksIG1ldGhvZCkge1xuICByZXR1cm4gY3VycnlOKGFyaXR5ICsgMSwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIHRhcmdldCA9IGFyZ3VtZW50c1thcml0eV07XG4gICAgaWYgKHRhcmdldCAhPSBudWxsICYmIF9pc0Z1bmN0aW9uKHRhcmdldFttZXRob2RdKSkge1xuICAgICAgcmV0dXJuIHRhcmdldFttZXRob2RdLmFwcGx5KHRhcmdldCwgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwLCBhcml0eSkpO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHRvU3RyaW5nKHRhcmdldCkgKyAnIGRvZXMgbm90IGhhdmUgYSBtZXRob2QgbmFtZWQgXCInICsgbWV0aG9kICsgJ1wiJyk7XG4gIH0pO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogU2VlIGlmIGFuIG9iamVjdCAoYHZhbGApIGlzIGFuIGluc3RhbmNlIG9mIHRoZSBzdXBwbGllZCBjb25zdHJ1Y3Rvci4gVGhpc1xuICogZnVuY3Rpb24gd2lsbCBjaGVjayB1cCB0aGUgaW5oZXJpdGFuY2UgY2hhaW4sIGlmIGFueS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4zLjBcbiAqIEBjYXRlZ29yeSBUeXBlXG4gKiBAc2lnICgqIC0+IHsqfSkgLT4gYSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge09iamVjdH0gY3RvciBBIGNvbnN0cnVjdG9yXG4gKiBAcGFyYW0geyp9IHZhbCBUaGUgdmFsdWUgdG8gdGVzdFxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmlzKE9iamVjdCwge30pOyAvLz0+IHRydWVcbiAqICAgICAgUi5pcyhOdW1iZXIsIDEpOyAvLz0+IHRydWVcbiAqICAgICAgUi5pcyhPYmplY3QsIDEpOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIuaXMoU3RyaW5nLCAncycpOyAvLz0+IHRydWVcbiAqICAgICAgUi5pcyhTdHJpbmcsIG5ldyBTdHJpbmcoJycpKTsgLy89PiB0cnVlXG4gKiAgICAgIFIuaXMoT2JqZWN0LCBuZXcgU3RyaW5nKCcnKSk7IC8vPT4gdHJ1ZVxuICogICAgICBSLmlzKE9iamVjdCwgJ3MnKTsgLy89PiBmYWxzZVxuICogICAgICBSLmlzKE51bWJlciwge30pOyAvLz0+IGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBpcyhDdG9yLCB2YWwpIHtcbiAgcmV0dXJuIHZhbCAhPSBudWxsICYmIHZhbC5jb25zdHJ1Y3RvciA9PT0gQ3RvciB8fCB2YWwgaW5zdGFuY2VvZiBDdG9yO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIF9pc0FycmF5ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faXNBcnJheScpO1xudmFyIF9pc1N0cmluZyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2lzU3RyaW5nJyk7XG5cblxuLyoqXG4gKiBUZXN0cyB3aGV0aGVyIG9yIG5vdCBhbiBvYmplY3QgaXMgc2ltaWxhciB0byBhbiBhcnJheS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC41LjBcbiAqIEBjYXRlZ29yeSBUeXBlXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAqIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7Kn0geCBUaGUgb2JqZWN0IHRvIHRlc3QuXG4gKiBAcmV0dXJuIHtCb29sZWFufSBgdHJ1ZWAgaWYgYHhgIGhhcyBhIG51bWVyaWMgbGVuZ3RoIHByb3BlcnR5IGFuZCBleHRyZW1lIGluZGljZXMgZGVmaW5lZDsgYGZhbHNlYCBvdGhlcndpc2UuXG4gKiBAZGVwcmVjYXRlZCBzaW5jZSB2MC4yMy4wXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5pc0FycmF5TGlrZShbXSk7IC8vPT4gdHJ1ZVxuICogICAgICBSLmlzQXJyYXlMaWtlKHRydWUpOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIuaXNBcnJheUxpa2Uoe30pOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIuaXNBcnJheUxpa2Uoe2xlbmd0aDogMTB9KTsgLy89PiBmYWxzZVxuICogICAgICBSLmlzQXJyYXlMaWtlKHswOiAnemVybycsIDk6ICduaW5lJywgbGVuZ3RoOiAxMH0pOyAvLz0+IHRydWVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGlzQXJyYXlMaWtlKHgpIHtcbiAgaWYgKF9pc0FycmF5KHgpKSB7IHJldHVybiB0cnVlOyB9XG4gIGlmICgheCkgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHR5cGVvZiB4ICE9PSAnb2JqZWN0JykgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKF9pc1N0cmluZyh4KSkgeyByZXR1cm4gZmFsc2U7IH1cbiAgaWYgKHgubm9kZVR5cGUgPT09IDEpIHsgcmV0dXJuICEheC5sZW5ndGg7IH1cbiAgaWYgKHgubGVuZ3RoID09PSAwKSB7IHJldHVybiB0cnVlOyB9XG4gIGlmICh4Lmxlbmd0aCA+IDApIHtcbiAgICByZXR1cm4geC5oYXNPd25Qcm9wZXJ0eSgwKSAmJiB4Lmhhc093blByb3BlcnR5KHgubGVuZ3RoIC0gMSk7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIGVtcHR5ID0gcmVxdWlyZSgnLi9lbXB0eScpO1xudmFyIGVxdWFscyA9IHJlcXVpcmUoJy4vZXF1YWxzJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZ2l2ZW4gdmFsdWUgaXMgaXRzIHR5cGUncyBlbXB0eSB2YWx1ZTsgYGZhbHNlYFxuICogb3RoZXJ3aXNlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExvZ2ljXG4gKiBAc2lnIGEgLT4gQm9vbGVhblxuICogQHBhcmFtIHsqfSB4XG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHNlZSBSLmVtcHR5XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5pc0VtcHR5KFsxLCAyLCAzXSk7ICAgLy89PiBmYWxzZVxuICogICAgICBSLmlzRW1wdHkoW10pOyAgICAgICAgICAvLz0+IHRydWVcbiAqICAgICAgUi5pc0VtcHR5KCcnKTsgICAgICAgICAgLy89PiB0cnVlXG4gKiAgICAgIFIuaXNFbXB0eShudWxsKTsgICAgICAgIC8vPT4gZmFsc2VcbiAqICAgICAgUi5pc0VtcHR5KHt9KTsgICAgICAgICAgLy89PiB0cnVlXG4gKiAgICAgIFIuaXNFbXB0eSh7bGVuZ3RoOiAwfSk7IC8vPT4gZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGlzRW1wdHkoeCkge1xuICByZXR1cm4geCAhPSBudWxsICYmIGVxdWFscyh4LCBlbXB0eSh4KSk7XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG5cblxuLyoqXG4gKiBDaGVja3MgaWYgdGhlIGlucHV0IHZhbHVlIGlzIGBudWxsYCBvciBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC45LjBcbiAqIEBjYXRlZ29yeSBUeXBlXG4gKiBAc2lnICogLT4gQm9vbGVhblxuICogQHBhcmFtIHsqfSB4IFRoZSB2YWx1ZSB0byB0ZXN0LlxuICogQHJldHVybiB7Qm9vbGVhbn0gYHRydWVgIGlmIGB4YCBpcyBgdW5kZWZpbmVkYCBvciBgbnVsbGAsIG90aGVyd2lzZSBgZmFsc2VgLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuaXNOaWwobnVsbCk7IC8vPT4gdHJ1ZVxuICogICAgICBSLmlzTmlsKHVuZGVmaW5lZCk7IC8vPT4gdHJ1ZVxuICogICAgICBSLmlzTmlsKDApOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIuaXNOaWwoW10pOyAvLz0+IGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBpc05pbCh4KSB7IHJldHVybiB4ID09IG51bGw7IH0pO1xuIiwidmFyIGludm9rZXIgPSByZXF1aXJlKCcuL2ludm9rZXInKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBzdHJpbmcgbWFkZSBieSBpbnNlcnRpbmcgdGhlIGBzZXBhcmF0b3JgIGJldHdlZW4gZWFjaCBlbGVtZW50IGFuZFxuICogY29uY2F0ZW5hdGluZyBhbGwgdGhlIGVsZW1lbnRzIGludG8gYSBzaW5nbGUgc3RyaW5nLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgU3RyaW5nIC0+IFthXSAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfFN0cmluZ30gc2VwYXJhdG9yIFRoZSBzdHJpbmcgdXNlZCB0byBzZXBhcmF0ZSB0aGUgZWxlbWVudHMuXG4gKiBAcGFyYW0ge0FycmF5fSB4cyBUaGUgZWxlbWVudHMgdG8gam9pbiBpbnRvIGEgc3RyaW5nLlxuICogQHJldHVybiB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyBtYWRlIGJ5IGNvbmNhdGVuYXRpbmcgYHhzYCB3aXRoIGBzZXBhcmF0b3JgLlxuICogQHNlZSBSLnNwbGl0XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHNwYWNlciA9IFIuam9pbignICcpO1xuICogICAgICBzcGFjZXIoWydhJywgMiwgMy40XSk7ICAgLy89PiAnYSAyIDMuNCdcbiAqICAgICAgUi5qb2luKCd8JywgWzEsIDIsIDNdKTsgICAgLy89PiAnMXwyfDMnXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gaW52b2tlcigxLCAnam9pbicpO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBjb252ZXJnZSA9IHJlcXVpcmUoJy4vY29udmVyZ2UnKTtcblxuXG4vKipcbiAqIGp1eHQgYXBwbGllcyBhIGxpc3Qgb2YgZnVuY3Rpb25zIHRvIGEgbGlzdCBvZiB2YWx1ZXMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTkuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnIFsoYSwgYiwgLi4uLCBtKSAtPiBuXSAtPiAoKGEsIGIsIC4uLiwgbSkgLT4gW25dKVxuICogQHBhcmFtIHtBcnJheX0gZm5zIEFuIGFycmF5IG9mIGZ1bmN0aW9uc1xuICogQHJldHVybiB7RnVuY3Rpb259IEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIGEgbGlzdCBvZiB2YWx1ZXMgYWZ0ZXIgYXBwbHlpbmcgZWFjaCBvZiB0aGUgb3JpZ2luYWwgYGZuc2AgdG8gaXRzIHBhcmFtZXRlcnMuXG4gKiBAc2VlIFIuYXBwbHlTcGVjXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGdldFJhbmdlID0gUi5qdXh0KFtNYXRoLm1pbiwgTWF0aC5tYXhdKTtcbiAqICAgICAgZ2V0UmFuZ2UoMywgNCwgOSwgLTMpOyAvLz0+IFstMywgOV1cbiAqIEBzeW1iIFIuanV4dChbZiwgZywgaF0pKGEsIGIpID0gW2YoYSwgYiksIGcoYSwgYiksIGgoYSwgYildXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBqdXh0KGZucykge1xuICByZXR1cm4gY29udmVyZ2UoZnVuY3Rpb24oKSB7IHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDApOyB9LCBmbnMpO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIF9oYXMgPSByZXF1aXJlKCcuL2ludGVybmFsL19oYXMnKTtcbnZhciBfaXNBcmd1bWVudHMgPSByZXF1aXJlKCcuL2ludGVybmFsL19pc0FyZ3VtZW50cycpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIGxpc3QgY29udGFpbmluZyB0aGUgbmFtZXMgb2YgYWxsIHRoZSBlbnVtZXJhYmxlIG93biBwcm9wZXJ0aWVzIG9mXG4gKiB0aGUgc3VwcGxpZWQgb2JqZWN0LlxuICogTm90ZSB0aGF0IHRoZSBvcmRlciBvZiB0aGUgb3V0cHV0IGFycmF5IGlzIG5vdCBndWFyYW50ZWVkIHRvIGJlIGNvbnNpc3RlbnRcbiAqIGFjcm9zcyBkaWZmZXJlbnQgSlMgcGxhdGZvcm1zLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyB7azogdn0gLT4gW2tdXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gZXh0cmFjdCBwcm9wZXJ0aWVzIGZyb21cbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBvZiB0aGUgb2JqZWN0J3Mgb3duIHByb3BlcnRpZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5rZXlzKHthOiAxLCBiOiAyLCBjOiAzfSk7IC8vPT4gWydhJywgJ2InLCAnYyddXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gKGZ1bmN0aW9uKCkge1xuICAvLyBjb3ZlciBJRSA8IDkga2V5cyBpc3N1ZXNcbiAgdmFyIGhhc0VudW1CdWcgPSAhKHt0b1N0cmluZzogbnVsbH0pLnByb3BlcnR5SXNFbnVtZXJhYmxlKCd0b1N0cmluZycpO1xuICB2YXIgbm9uRW51bWVyYWJsZVByb3BzID0gWydjb25zdHJ1Y3RvcicsICd2YWx1ZU9mJywgJ2lzUHJvdG90eXBlT2YnLCAndG9TdHJpbmcnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICdwcm9wZXJ0eUlzRW51bWVyYWJsZScsICdoYXNPd25Qcm9wZXJ0eScsICd0b0xvY2FsZVN0cmluZyddO1xuICAvLyBTYWZhcmkgYnVnXG4gIHZhciBoYXNBcmdzRW51bUJ1ZyA9IChmdW5jdGlvbigpIHtcbiAgICAndXNlIHN0cmljdCc7XG4gICAgcmV0dXJuIGFyZ3VtZW50cy5wcm9wZXJ0eUlzRW51bWVyYWJsZSgnbGVuZ3RoJyk7XG4gIH0oKSk7XG5cbiAgdmFyIGNvbnRhaW5zID0gZnVuY3Rpb24gY29udGFpbnMobGlzdCwgaXRlbSkge1xuICAgIHZhciBpZHggPSAwO1xuICAgIHdoaWxlIChpZHggPCBsaXN0Lmxlbmd0aCkge1xuICAgICAgaWYgKGxpc3RbaWR4XSA9PT0gaXRlbSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlkeCArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH07XG5cbiAgcmV0dXJuIHR5cGVvZiBPYmplY3Qua2V5cyA9PT0gJ2Z1bmN0aW9uJyAmJiAhaGFzQXJnc0VudW1CdWcgP1xuICAgIF9jdXJyeTEoZnVuY3Rpb24ga2V5cyhvYmopIHtcbiAgICAgIHJldHVybiBPYmplY3Qob2JqKSAhPT0gb2JqID8gW10gOiBPYmplY3Qua2V5cyhvYmopO1xuICAgIH0pIDpcbiAgICBfY3VycnkxKGZ1bmN0aW9uIGtleXMob2JqKSB7XG4gICAgICBpZiAoT2JqZWN0KG9iaikgIT09IG9iaikge1xuICAgICAgICByZXR1cm4gW107XG4gICAgICB9XG4gICAgICB2YXIgcHJvcCwgbklkeDtcbiAgICAgIHZhciBrcyA9IFtdO1xuICAgICAgdmFyIGNoZWNrQXJnc0xlbmd0aCA9IGhhc0FyZ3NFbnVtQnVnICYmIF9pc0FyZ3VtZW50cyhvYmopO1xuICAgICAgZm9yIChwcm9wIGluIG9iaikge1xuICAgICAgICBpZiAoX2hhcyhwcm9wLCBvYmopICYmICghY2hlY2tBcmdzTGVuZ3RoIHx8IHByb3AgIT09ICdsZW5ndGgnKSkge1xuICAgICAgICAgIGtzW2tzLmxlbmd0aF0gPSBwcm9wO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoaGFzRW51bUJ1Zykge1xuICAgICAgICBuSWR4ID0gbm9uRW51bWVyYWJsZVByb3BzLmxlbmd0aCAtIDE7XG4gICAgICAgIHdoaWxlIChuSWR4ID49IDApIHtcbiAgICAgICAgICBwcm9wID0gbm9uRW51bWVyYWJsZVByb3BzW25JZHhdO1xuICAgICAgICAgIGlmIChfaGFzKHByb3AsIG9iaikgJiYgIWNvbnRhaW5zKGtzLCBwcm9wKSkge1xuICAgICAgICAgICAga3Nba3MubGVuZ3RoXSA9IHByb3A7XG4gICAgICAgICAgfVxuICAgICAgICAgIG5JZHggLT0gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgcmV0dXJuIGtzO1xuICAgIH0pO1xufSgpKTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgbGlzdCBjb250YWluaW5nIHRoZSBuYW1lcyBvZiBhbGwgdGhlIHByb3BlcnRpZXMgb2YgdGhlIHN1cHBsaWVkXG4gKiBvYmplY3QsIGluY2x1ZGluZyBwcm90b3R5cGUgcHJvcGVydGllcy5cbiAqIE5vdGUgdGhhdCB0aGUgb3JkZXIgb2YgdGhlIG91dHB1dCBhcnJheSBpcyBub3QgZ3VhcmFudGVlZCB0byBiZSBjb25zaXN0ZW50XG4gKiBhY3Jvc3MgZGlmZmVyZW50IEpTIHBsYXRmb3Jtcy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4yLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcge2s6IHZ9IC0+IFtrXVxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIGV4dHJhY3QgcHJvcGVydGllcyBmcm9tXG4gKiBAcmV0dXJuIHtBcnJheX0gQW4gYXJyYXkgb2YgdGhlIG9iamVjdCdzIG93biBhbmQgcHJvdG90eXBlIHByb3BlcnRpZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIEYgPSBmdW5jdGlvbigpIHsgdGhpcy54ID0gJ1gnOyB9O1xuICogICAgICBGLnByb3RvdHlwZS55ID0gJ1knO1xuICogICAgICB2YXIgZiA9IG5ldyBGKCk7XG4gKiAgICAgIFIua2V5c0luKGYpOyAvLz0+IFsneCcsICd5J11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGtleXNJbihvYmopIHtcbiAgdmFyIHByb3A7XG4gIHZhciBrcyA9IFtdO1xuICBmb3IgKHByb3AgaW4gb2JqKSB7XG4gICAga3Nba3MubGVuZ3RoXSA9IHByb3A7XG4gIH1cbiAgcmV0dXJuIGtzO1xufSk7XG4iLCJ2YXIgbnRoID0gcmVxdWlyZSgnLi9udGgnKTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIGxhc3QgZWxlbWVudCBvZiB0aGUgZ2l2ZW4gbGlzdCBvciBzdHJpbmcuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS40XG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBbYV0gLT4gYSB8IFVuZGVmaW5lZFxuICogQHNpZyBTdHJpbmcgLT4gU3RyaW5nXG4gKiBAcGFyYW0geyp9IGxpc3RcbiAqIEByZXR1cm4geyp9XG4gKiBAc2VlIFIuaW5pdCwgUi5oZWFkLCBSLnRhaWxcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmxhc3QoWydmaScsICdmbycsICdmdW0nXSk7IC8vPT4gJ2Z1bSdcbiAqICAgICAgUi5sYXN0KFtdKTsgLy89PiB1bmRlZmluZWRcbiAqXG4gKiAgICAgIFIubGFzdCgnYWJjJyk7IC8vPT4gJ2MnXG4gKiAgICAgIFIubGFzdCgnJyk7IC8vPT4gJydcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBudGgoLTEpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfaXNBcnJheSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2lzQXJyYXknKTtcbnZhciBlcXVhbHMgPSByZXF1aXJlKCcuL2VxdWFscycpO1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgcG9zaXRpb24gb2YgdGhlIGxhc3Qgb2NjdXJyZW5jZSBvZiBhbiBpdGVtIGluIGFuIGFycmF5LCBvciAtMSBpZlxuICogdGhlIGl0ZW0gaXMgbm90IGluY2x1ZGVkIGluIHRoZSBhcnJheS4gYFIuZXF1YWxzYCBpcyB1c2VkIHRvIGRldGVybWluZVxuICogZXF1YWxpdHkuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBhIC0+IFthXSAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFRoZSBpdGVtIHRvIGZpbmQuXG4gKiBAcGFyYW0ge0FycmF5fSB4cyBUaGUgYXJyYXkgdG8gc2VhcmNoIGluLlxuICogQHJldHVybiB7TnVtYmVyfSB0aGUgaW5kZXggb2YgdGhlIHRhcmdldCwgb3IgLTEgaWYgdGhlIHRhcmdldCBpcyBub3QgZm91bmQuXG4gKiBAc2VlIFIuaW5kZXhPZlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIubGFzdEluZGV4T2YoMywgWy0xLDMsMywwLDEsMiwzLDRdKTsgLy89PiA2XG4gKiAgICAgIFIubGFzdEluZGV4T2YoMTAsIFsxLDIsMyw0XSk7IC8vPT4gLTFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGxhc3RJbmRleE9mKHRhcmdldCwgeHMpIHtcbiAgaWYgKHR5cGVvZiB4cy5sYXN0SW5kZXhPZiA9PT0gJ2Z1bmN0aW9uJyAmJiAhX2lzQXJyYXkoeHMpKSB7XG4gICAgcmV0dXJuIHhzLmxhc3RJbmRleE9mKHRhcmdldCk7XG4gIH0gZWxzZSB7XG4gICAgdmFyIGlkeCA9IHhzLmxlbmd0aCAtIDE7XG4gICAgd2hpbGUgKGlkeCA+PSAwKSB7XG4gICAgICBpZiAoZXF1YWxzKHhzW2lkeF0sIHRhcmdldCkpIHtcbiAgICAgICAgcmV0dXJuIGlkeDtcbiAgICAgIH1cbiAgICAgIGlkeCAtPSAxO1xuICAgIH1cbiAgICByZXR1cm4gLTE7XG4gIH1cbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBfaXNOdW1iZXIgPSByZXF1aXJlKCcuL2ludGVybmFsL19pc051bWJlcicpO1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgbnVtYmVyIG9mIGVsZW1lbnRzIGluIHRoZSBhcnJheSBieSByZXR1cm5pbmcgYGxpc3QubGVuZ3RoYC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4zLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIFthXSAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGFycmF5IHRvIGluc3BlY3QuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSBsZW5ndGggb2YgdGhlIGFycmF5LlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIubGVuZ3RoKFtdKTsgLy89PiAwXG4gKiAgICAgIFIubGVuZ3RoKFsxLCAyLCAzXSk7IC8vPT4gM1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gbGVuZ3RoKGxpc3QpIHtcbiAgcmV0dXJuIGxpc3QgIT0gbnVsbCAmJiBfaXNOdW1iZXIobGlzdC5sZW5ndGgpID8gbGlzdC5sZW5ndGggOiBOYU47XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgbWFwID0gcmVxdWlyZSgnLi9tYXAnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBsZW5zIGZvciB0aGUgZ2l2ZW4gZ2V0dGVyIGFuZCBzZXR0ZXIgZnVuY3Rpb25zLiBUaGUgZ2V0dGVyIFwiZ2V0c1wiXG4gKiB0aGUgdmFsdWUgb2YgdGhlIGZvY3VzOyB0aGUgc2V0dGVyIFwic2V0c1wiIHRoZSB2YWx1ZSBvZiB0aGUgZm9jdXMuIFRoZSBzZXR0ZXJcbiAqIHNob3VsZCBub3QgbXV0YXRlIHRoZSBkYXRhIHN0cnVjdHVyZS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC44LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEB0eXBlZGVmbiBMZW5zIHMgYSA9IEZ1bmN0b3IgZiA9PiAoYSAtPiBmIGEpIC0+IHMgLT4gZiBzXG4gKiBAc2lnIChzIC0+IGEpIC0+ICgoYSwgcykgLT4gcykgLT4gTGVucyBzIGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGdldHRlclxuICogQHBhcmFtIHtGdW5jdGlvbn0gc2V0dGVyXG4gKiBAcmV0dXJuIHtMZW5zfVxuICogQHNlZSBSLnZpZXcsIFIuc2V0LCBSLm92ZXIsIFIubGVuc0luZGV4LCBSLmxlbnNQcm9wXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHhMZW5zID0gUi5sZW5zKFIucHJvcCgneCcpLCBSLmFzc29jKCd4JykpO1xuICpcbiAqICAgICAgUi52aWV3KHhMZW5zLCB7eDogMSwgeTogMn0pOyAgICAgICAgICAgIC8vPT4gMVxuICogICAgICBSLnNldCh4TGVucywgNCwge3g6IDEsIHk6IDJ9KTsgICAgICAgICAgLy89PiB7eDogNCwgeTogMn1cbiAqICAgICAgUi5vdmVyKHhMZW5zLCBSLm5lZ2F0ZSwge3g6IDEsIHk6IDJ9KTsgIC8vPT4ge3g6IC0xLCB5OiAyfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gbGVucyhnZXR0ZXIsIHNldHRlcikge1xuICByZXR1cm4gZnVuY3Rpb24odG9GdW5jdG9yRm4pIHtcbiAgICByZXR1cm4gZnVuY3Rpb24odGFyZ2V0KSB7XG4gICAgICByZXR1cm4gbWFwKFxuICAgICAgICBmdW5jdGlvbihmb2N1cykge1xuICAgICAgICAgIHJldHVybiBzZXR0ZXIoZm9jdXMsIHRhcmdldCk7XG4gICAgICAgIH0sXG4gICAgICAgIHRvRnVuY3RvckZuKGdldHRlcih0YXJnZXQpKVxuICAgICAgKTtcbiAgICB9O1xuICB9O1xufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIGxlbnMgPSByZXF1aXJlKCcuL2xlbnMnKTtcbnZhciBudGggPSByZXF1aXJlKCcuL250aCcpO1xudmFyIHVwZGF0ZSA9IHJlcXVpcmUoJy4vdXBkYXRlJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgbGVucyB3aG9zZSBmb2N1cyBpcyB0aGUgc3BlY2lmaWVkIGluZGV4LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE0LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEB0eXBlZGVmbiBMZW5zIHMgYSA9IEZ1bmN0b3IgZiA9PiAoYSAtPiBmIGEpIC0+IHMgLT4gZiBzXG4gKiBAc2lnIE51bWJlciAtPiBMZW5zIHMgYVxuICogQHBhcmFtIHtOdW1iZXJ9IG5cbiAqIEByZXR1cm4ge0xlbnN9XG4gKiBAc2VlIFIudmlldywgUi5zZXQsIFIub3ZlclxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBoZWFkTGVucyA9IFIubGVuc0luZGV4KDApO1xuICpcbiAqICAgICAgUi52aWV3KGhlYWRMZW5zLCBbJ2EnLCAnYicsICdjJ10pOyAgICAgICAgICAgIC8vPT4gJ2EnXG4gKiAgICAgIFIuc2V0KGhlYWRMZW5zLCAneCcsIFsnYScsICdiJywgJ2MnXSk7ICAgICAgICAvLz0+IFsneCcsICdiJywgJ2MnXVxuICogICAgICBSLm92ZXIoaGVhZExlbnMsIFIudG9VcHBlciwgWydhJywgJ2InLCAnYyddKTsgLy89PiBbJ0EnLCAnYicsICdjJ11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGxlbnNJbmRleChuKSB7XG4gIHJldHVybiBsZW5zKG50aChuKSwgdXBkYXRlKG4pKTtcbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBhc3NvY1BhdGggPSByZXF1aXJlKCcuL2Fzc29jUGF0aCcpO1xudmFyIGxlbnMgPSByZXF1aXJlKCcuL2xlbnMnKTtcbnZhciBwYXRoID0gcmVxdWlyZSgnLi9wYXRoJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgbGVucyB3aG9zZSBmb2N1cyBpcyB0aGUgc3BlY2lmaWVkIHBhdGguXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTkuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHR5cGVkZWZuIElkeCA9IFN0cmluZyB8IEludFxuICogQHR5cGVkZWZuIExlbnMgcyBhID0gRnVuY3RvciBmID0+IChhIC0+IGYgYSkgLT4gcyAtPiBmIHNcbiAqIEBzaWcgW0lkeF0gLT4gTGVucyBzIGFcbiAqIEBwYXJhbSB7QXJyYXl9IHBhdGggVGhlIHBhdGggdG8gdXNlLlxuICogQHJldHVybiB7TGVuc31cbiAqIEBzZWUgUi52aWV3LCBSLnNldCwgUi5vdmVyXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHhIZWFkWUxlbnMgPSBSLmxlbnNQYXRoKFsneCcsIDAsICd5J10pO1xuICpcbiAqICAgICAgUi52aWV3KHhIZWFkWUxlbnMsIHt4OiBbe3k6IDIsIHo6IDN9LCB7eTogNCwgejogNX1dfSk7XG4gKiAgICAgIC8vPT4gMlxuICogICAgICBSLnNldCh4SGVhZFlMZW5zLCAxLCB7eDogW3t5OiAyLCB6OiAzfSwge3k6IDQsIHo6IDV9XX0pO1xuICogICAgICAvLz0+IHt4OiBbe3k6IDEsIHo6IDN9LCB7eTogNCwgejogNX1dfVxuICogICAgICBSLm92ZXIoeEhlYWRZTGVucywgUi5uZWdhdGUsIHt4OiBbe3k6IDIsIHo6IDN9LCB7eTogNCwgejogNX1dfSk7XG4gKiAgICAgIC8vPT4ge3g6IFt7eTogLTIsIHo6IDN9LCB7eTogNCwgejogNX1dfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gbGVuc1BhdGgocCkge1xuICByZXR1cm4gbGVucyhwYXRoKHApLCBhc3NvY1BhdGgocCkpO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIGFzc29jID0gcmVxdWlyZSgnLi9hc3NvYycpO1xudmFyIGxlbnMgPSByZXF1aXJlKCcuL2xlbnMnKTtcbnZhciBwcm9wID0gcmVxdWlyZSgnLi9wcm9wJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgbGVucyB3aG9zZSBmb2N1cyBpcyB0aGUgc3BlY2lmaWVkIHByb3BlcnR5LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE0LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEB0eXBlZGVmbiBMZW5zIHMgYSA9IEZ1bmN0b3IgZiA9PiAoYSAtPiBmIGEpIC0+IHMgLT4gZiBzXG4gKiBAc2lnIFN0cmluZyAtPiBMZW5zIHMgYVxuICogQHBhcmFtIHtTdHJpbmd9IGtcbiAqIEByZXR1cm4ge0xlbnN9XG4gKiBAc2VlIFIudmlldywgUi5zZXQsIFIub3ZlclxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciB4TGVucyA9IFIubGVuc1Byb3AoJ3gnKTtcbiAqXG4gKiAgICAgIFIudmlldyh4TGVucywge3g6IDEsIHk6IDJ9KTsgICAgICAgICAgICAvLz0+IDFcbiAqICAgICAgUi5zZXQoeExlbnMsIDQsIHt4OiAxLCB5OiAyfSk7ICAgICAgICAgIC8vPT4ge3g6IDQsIHk6IDJ9XG4gKiAgICAgIFIub3Zlcih4TGVucywgUi5uZWdhdGUsIHt4OiAxLCB5OiAyfSk7ICAvLz0+IHt4OiAtMSwgeTogMn1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGxlbnNQcm9wKGspIHtcbiAgcmV0dXJuIGxlbnMocHJvcChrKSwgYXNzb2MoaykpO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIGxpZnROID0gcmVxdWlyZSgnLi9saWZ0TicpO1xuXG5cbi8qKlxuICogXCJsaWZ0c1wiIGEgZnVuY3Rpb24gb2YgYXJpdHkgPiAxIHNvIHRoYXQgaXQgbWF5IFwibWFwIG92ZXJcIiBhIGxpc3QsIEZ1bmN0aW9uIG9yIG90aGVyXG4gKiBvYmplY3QgdGhhdCBzYXRpc2ZpZXMgdGhlIFtGYW50YXN5TGFuZCBBcHBseSBzcGVjXShodHRwczovL2dpdGh1Yi5jb20vZmFudGFzeWxhbmQvZmFudGFzeS1sYW5kI2FwcGx5KS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC43LjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoKi4uLiAtPiAqKSAtPiAoWypdLi4uIC0+IFsqXSlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBsaWZ0IGludG8gaGlnaGVyIGNvbnRleHRcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgbGlmdGVkIGZ1bmN0aW9uLlxuICogQHNlZSBSLmxpZnROXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIG1hZGQzID0gUi5saWZ0KChhLCBiLCBjKSA9PiBhICsgYiArIGMpO1xuICpcbiAqICAgICAgbWFkZDMoWzEsMiwzXSwgWzEsMiwzXSwgWzFdKTsgLy89PiBbMywgNCwgNSwgNCwgNSwgNiwgNSwgNiwgN11cbiAqXG4gKiAgICAgIHZhciBtYWRkNSA9IFIubGlmdCgoYSwgYiwgYywgZCwgZSkgPT4gYSArIGIgKyBjICsgZCArIGUpO1xuICpcbiAqICAgICAgbWFkZDUoWzEsMl0sIFszXSwgWzQsIDVdLCBbNl0sIFs3LCA4XSk7IC8vPT4gWzIxLCAyMiwgMjIsIDIzLCAyMiwgMjMsIDIzLCAyNF1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIGxpZnQoZm4pIHtcbiAgcmV0dXJuIGxpZnROKGZuLmxlbmd0aCwgZm4pO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9yZWR1Y2UgPSByZXF1aXJlKCcuL2ludGVybmFsL19yZWR1Y2UnKTtcbnZhciBhcCA9IHJlcXVpcmUoJy4vYXAnKTtcbnZhciBjdXJyeU4gPSByZXF1aXJlKCcuL2N1cnJ5TicpO1xudmFyIG1hcCA9IHJlcXVpcmUoJy4vbWFwJyk7XG5cblxuLyoqXG4gKiBcImxpZnRzXCIgYSBmdW5jdGlvbiB0byBiZSB0aGUgc3BlY2lmaWVkIGFyaXR5LCBzbyB0aGF0IGl0IG1heSBcIm1hcCBvdmVyXCIgdGhhdFxuICogbWFueSBsaXN0cywgRnVuY3Rpb25zIG9yIG90aGVyIG9iamVjdHMgdGhhdCBzYXRpc2Z5IHRoZSBbRmFudGFzeUxhbmQgQXBwbHkgc3BlY10oaHR0cHM6Ly9naXRodWIuY29tL2ZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNhcHBseSkuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuNy4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgTnVtYmVyIC0+ICgqLi4uIC0+ICopIC0+IChbKl0uLi4gLT4gWypdKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGxpZnQgaW50byBoaWdoZXIgY29udGV4dFxuICogQHJldHVybiB7RnVuY3Rpb259IFRoZSBsaWZ0ZWQgZnVuY3Rpb24uXG4gKiBAc2VlIFIubGlmdCwgUi5hcFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBtYWRkMyA9IFIubGlmdE4oMywgKC4uLmFyZ3MpID0+IFIuc3VtKGFyZ3MpKTtcbiAqICAgICAgbWFkZDMoWzEsMiwzXSwgWzEsMiwzXSwgWzFdKTsgLy89PiBbMywgNCwgNSwgNCwgNSwgNiwgNSwgNiwgN11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGxpZnROKGFyaXR5LCBmbikge1xuICB2YXIgbGlmdGVkID0gY3VycnlOKGFyaXR5LCBmbik7XG4gIHJldHVybiBjdXJyeU4oYXJpdHksIGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBfcmVkdWNlKGFwLCBtYXAobGlmdGVkLCBhcmd1bWVudHNbMF0pLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMsIDEpKTtcbiAgfSk7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgbGVzcyB0aGFuIHRoZSBzZWNvbmQ7IGBmYWxzZWBcbiAqIG90aGVyd2lzZS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBSZWxhdGlvblxuICogQHNpZyBPcmQgYSA9PiBhIC0+IGEgLT4gQm9vbGVhblxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAc2VlIFIuZ3RcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLmx0KDIsIDEpOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIubHQoMiwgMik7IC8vPT4gZmFsc2VcbiAqICAgICAgUi5sdCgyLCAzKTsgLy89PiB0cnVlXG4gKiAgICAgIFIubHQoJ2EnLCAneicpOyAvLz0+IHRydWVcbiAqICAgICAgUi5sdCgneicsICdhJyk7IC8vPT4gZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGx0KGEsIGIpIHsgcmV0dXJuIGEgPCBiOyB9KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiB0aGUgZmlyc3QgYXJndW1lbnQgaXMgbGVzcyB0aGFuIG9yIGVxdWFsIHRvIHRoZSBzZWNvbmQ7XG4gKiBgZmFsc2VgIG90aGVyd2lzZS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBSZWxhdGlvblxuICogQHNpZyBPcmQgYSA9PiBhIC0+IGEgLT4gQm9vbGVhblxuICogQHBhcmFtIHtOdW1iZXJ9IGFcbiAqIEBwYXJhbSB7TnVtYmVyfSBiXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHNlZSBSLmd0ZVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIubHRlKDIsIDEpOyAvLz0+IGZhbHNlXG4gKiAgICAgIFIubHRlKDIsIDIpOyAvLz0+IHRydWVcbiAqICAgICAgUi5sdGUoMiwgMyk7IC8vPT4gdHJ1ZVxuICogICAgICBSLmx0ZSgnYScsICd6Jyk7IC8vPT4gdHJ1ZVxuICogICAgICBSLmx0ZSgneicsICdhJyk7IC8vPT4gZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIGx0ZShhLCBiKSB7IHJldHVybiBhIDw9IGI7IH0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBfZGlzcGF0Y2hhYmxlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fZGlzcGF0Y2hhYmxlJyk7XG52YXIgX21hcCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX21hcCcpO1xudmFyIF9yZWR1Y2UgPSByZXF1aXJlKCcuL2ludGVybmFsL19yZWR1Y2UnKTtcbnZhciBfeG1hcCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3htYXAnKTtcbnZhciBjdXJyeU4gPSByZXF1aXJlKCcuL2N1cnJ5TicpO1xudmFyIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuXG4vKipcbiAqIFRha2VzIGEgZnVuY3Rpb24gYW5kXG4gKiBhIFtmdW5jdG9yXShodHRwczovL2dpdGh1Yi5jb20vZmFudGFzeWxhbmQvZmFudGFzeS1sYW5kI2Z1bmN0b3IpLFxuICogYXBwbGllcyB0aGUgZnVuY3Rpb24gdG8gZWFjaCBvZiB0aGUgZnVuY3RvcidzIHZhbHVlcywgYW5kIHJldHVybnNcbiAqIGEgZnVuY3RvciBvZiB0aGUgc2FtZSBzaGFwZS5cbiAqXG4gKiBSYW1kYSBwcm92aWRlcyBzdWl0YWJsZSBgbWFwYCBpbXBsZW1lbnRhdGlvbnMgZm9yIGBBcnJheWAgYW5kIGBPYmplY3RgLFxuICogc28gdGhpcyBmdW5jdGlvbiBtYXkgYmUgYXBwbGllZCB0byBgWzEsIDIsIDNdYCBvciBge3g6IDEsIHk6IDIsIHo6IDN9YC5cbiAqXG4gKiBEaXNwYXRjaGVzIHRvIHRoZSBgbWFwYCBtZXRob2Qgb2YgdGhlIHNlY29uZCBhcmd1bWVudCwgaWYgcHJlc2VudC5cbiAqXG4gKiBBY3RzIGFzIGEgdHJhbnNkdWNlciBpZiBhIHRyYW5zZm9ybWVyIGlzIGdpdmVuIGluIGxpc3QgcG9zaXRpb24uXG4gKlxuICogQWxzbyB0cmVhdHMgZnVuY3Rpb25zIGFzIGZ1bmN0b3JzIGFuZCB3aWxsIGNvbXBvc2UgdGhlbSB0b2dldGhlci5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIEZ1bmN0b3IgZiA9PiAoYSAtPiBiKSAtPiBmIGEgLT4gZiBiXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gYmUgY2FsbGVkIG9uIGV2ZXJ5IGVsZW1lbnQgb2YgdGhlIGlucHV0IGBsaXN0YC5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGxpc3QgdG8gYmUgaXRlcmF0ZWQgb3Zlci5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbmV3IGxpc3QuXG4gKiBAc2VlIFIudHJhbnNkdWNlLCBSLmFkZEluZGV4XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGRvdWJsZSA9IHggPT4geCAqIDI7XG4gKlxuICogICAgICBSLm1hcChkb3VibGUsIFsxLCAyLCAzXSk7IC8vPT4gWzIsIDQsIDZdXG4gKlxuICogICAgICBSLm1hcChkb3VibGUsIHt4OiAxLCB5OiAyLCB6OiAzfSk7IC8vPT4ge3g6IDIsIHk6IDQsIHo6IDZ9XG4gKiBAc3ltYiBSLm1hcChmLCBbYSwgYl0pID0gW2YoYSksIGYoYildXG4gKiBAc3ltYiBSLm1hcChmLCB7IHg6IGEsIHk6IGIgfSkgPSB7IHg6IGYoYSksIHk6IGYoYikgfVxuICogQHN5bWIgUi5tYXAoZiwgZnVuY3Rvcl9vKSA9IGZ1bmN0b3Jfby5tYXAoZilcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKF9kaXNwYXRjaGFibGUoWydtYXAnXSwgX3htYXAsIGZ1bmN0aW9uIG1hcChmbiwgZnVuY3Rvcikge1xuICBzd2l0Y2ggKE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChmdW5jdG9yKSkge1xuICAgIGNhc2UgJ1tvYmplY3QgRnVuY3Rpb25dJzpcbiAgICAgIHJldHVybiBjdXJyeU4oZnVuY3Rvci5sZW5ndGgsIGZ1bmN0aW9uKCkge1xuICAgICAgICByZXR1cm4gZm4uY2FsbCh0aGlzLCBmdW5jdG9yLmFwcGx5KHRoaXMsIGFyZ3VtZW50cykpO1xuICAgICAgfSk7XG4gICAgY2FzZSAnW29iamVjdCBPYmplY3RdJzpcbiAgICAgIHJldHVybiBfcmVkdWNlKGZ1bmN0aW9uKGFjYywga2V5KSB7XG4gICAgICAgIGFjY1trZXldID0gZm4oZnVuY3RvcltrZXldKTtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH0sIHt9LCBrZXlzKGZ1bmN0b3IpKTtcbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIF9tYXAoZm4sIGZ1bmN0b3IpO1xuICB9XG59KSk7XG4iLCJ2YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xuXG5cbi8qKlxuICogVGhlIG1hcEFjY3VtIGZ1bmN0aW9uIGJlaGF2ZXMgbGlrZSBhIGNvbWJpbmF0aW9uIG9mIG1hcCBhbmQgcmVkdWNlOyBpdFxuICogYXBwbGllcyBhIGZ1bmN0aW9uIHRvIGVhY2ggZWxlbWVudCBvZiBhIGxpc3QsIHBhc3NpbmcgYW4gYWNjdW11bGF0aW5nXG4gKiBwYXJhbWV0ZXIgZnJvbSBsZWZ0IHRvIHJpZ2h0LCBhbmQgcmV0dXJuaW5nIGEgZmluYWwgdmFsdWUgb2YgdGhpc1xuICogYWNjdW11bGF0b3IgdG9nZXRoZXIgd2l0aCB0aGUgbmV3IGxpc3QuXG4gKlxuICogVGhlIGl0ZXJhdG9yIGZ1bmN0aW9uIHJlY2VpdmVzIHR3byBhcmd1bWVudHMsICphY2MqIGFuZCAqdmFsdWUqLCBhbmQgc2hvdWxkXG4gKiByZXR1cm4gYSB0dXBsZSAqW2FjYywgdmFsdWVdKi5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xMC4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoYWNjIC0+IHggLT4gKGFjYywgeSkpIC0+IGFjYyAtPiBbeF0gLT4gKGFjYywgW3ldKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBldmVyeSBlbGVtZW50IG9mIHRoZSBpbnB1dCBgbGlzdGAuXG4gKiBAcGFyYW0geyp9IGFjYyBUaGUgYWNjdW11bGF0b3IgdmFsdWUuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm4geyp9IFRoZSBmaW5hbCwgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAc2VlIFIuYWRkSW5kZXgsIFIubWFwQWNjdW1SaWdodFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBkaWdpdHMgPSBbJzEnLCAnMicsICczJywgJzQnXTtcbiAqICAgICAgdmFyIGFwcGVuZGVyID0gKGEsIGIpID0+IFthICsgYiwgYSArIGJdO1xuICpcbiAqICAgICAgUi5tYXBBY2N1bShhcHBlbmRlciwgMCwgZGlnaXRzKTsgLy89PiBbJzAxMjM0JywgWycwMScsICcwMTInLCAnMDEyMycsICcwMTIzNCddXVxuICogQHN5bWIgUi5tYXBBY2N1bShmLCBhLCBbYiwgYywgZF0pID0gW1xuICogICBmKGYoZihhLCBiKVswXSwgYylbMF0sIGQpWzBdLFxuICogICBbXG4gKiAgICAgZihhLCBiKVsxXSxcbiAqICAgICBmKGYoYSwgYilbMF0sIGMpWzFdLFxuICogICAgIGYoZihmKGEsIGIpWzBdLCBjKVswXSwgZClbMV1cbiAqICAgXVxuICogXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gbWFwQWNjdW0oZm4sIGFjYywgbGlzdCkge1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGxlbiA9IGxpc3QubGVuZ3RoO1xuICB2YXIgcmVzdWx0ID0gW107XG4gIHZhciB0dXBsZSA9IFthY2NdO1xuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgdHVwbGUgPSBmbih0dXBsZVswXSwgbGlzdFtpZHhdKTtcbiAgICByZXN1bHRbaWR4XSA9IHR1cGxlWzFdO1xuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiBbdHVwbGVbMF0sIHJlc3VsdF07XG59KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG5cblxuLyoqXG4gKiBUaGUgbWFwQWNjdW1SaWdodCBmdW5jdGlvbiBiZWhhdmVzIGxpa2UgYSBjb21iaW5hdGlvbiBvZiBtYXAgYW5kIHJlZHVjZTsgaXRcbiAqIGFwcGxpZXMgYSBmdW5jdGlvbiB0byBlYWNoIGVsZW1lbnQgb2YgYSBsaXN0LCBwYXNzaW5nIGFuIGFjY3VtdWxhdGluZ1xuICogcGFyYW1ldGVyIGZyb20gcmlnaHQgdG8gbGVmdCwgYW5kIHJldHVybmluZyBhIGZpbmFsIHZhbHVlIG9mIHRoaXNcbiAqIGFjY3VtdWxhdG9yIHRvZ2V0aGVyIHdpdGggdGhlIG5ldyBsaXN0LlxuICpcbiAqIFNpbWlsYXIgdG8gYG1hcEFjY3VtYCwgZXhjZXB0IG1vdmVzIHRocm91Z2ggdGhlIGlucHV0IGxpc3QgZnJvbSB0aGUgcmlnaHQgdG9cbiAqIHRoZSBsZWZ0LlxuICpcbiAqIFRoZSBpdGVyYXRvciBmdW5jdGlvbiByZWNlaXZlcyB0d28gYXJndW1lbnRzLCAqdmFsdWUqIGFuZCAqYWNjKiwgYW5kIHNob3VsZFxuICogcmV0dXJuIGEgdHVwbGUgKlt2YWx1ZSwgYWNjXSouXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTAuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKHgtPiBhY2MgLT4gKHksIGFjYykpIC0+IGFjYyAtPiBbeF0gLT4gKFt5XSwgYWNjKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIGJlIGNhbGxlZCBvbiBldmVyeSBlbGVtZW50IG9mIHRoZSBpbnB1dCBgbGlzdGAuXG4gKiBAcGFyYW0geyp9IGFjYyBUaGUgYWNjdW11bGF0b3IgdmFsdWUuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm4geyp9IFRoZSBmaW5hbCwgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAc2VlIFIuYWRkSW5kZXgsIFIubWFwQWNjdW1cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgZGlnaXRzID0gWycxJywgJzInLCAnMycsICc0J107XG4gKiAgICAgIHZhciBhcHBlbmQgPSAoYSwgYikgPT4gW2EgKyBiLCBhICsgYl07XG4gKlxuICogICAgICBSLm1hcEFjY3VtUmlnaHQoYXBwZW5kLCA1LCBkaWdpdHMpOyAvLz0+IFtbJzEyMzQ1JywgJzIzNDUnLCAnMzQ1JywgJzQ1J10sICcxMjM0NSddXG4gKiBAc3ltYiBSLm1hcEFjY3VtUmlnaHQoZiwgYSwgW2IsIGMsIGRdKSA9IFtcbiAqICAgW1xuICogICAgIGYoYiwgZihjLCBmKGQsIGEpWzBdKVswXSlbMV0sXG4gKiAgICAgZihjLCBmKGQsIGEpWzBdKVsxXSxcbiAqICAgICBmKGQsIGEpWzFdLFxuICogICBdXG4gKiAgIGYoYiwgZihjLCBmKGQsIGEpWzBdKVswXSlbMF0sXG4gKiBdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiBtYXBBY2N1bVJpZ2h0KGZuLCBhY2MsIGxpc3QpIHtcbiAgdmFyIGlkeCA9IGxpc3QubGVuZ3RoIC0gMTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgdHVwbGUgPSBbYWNjXTtcbiAgd2hpbGUgKGlkeCA+PSAwKSB7XG4gICAgdHVwbGUgPSBmbihsaXN0W2lkeF0sIHR1cGxlWzBdKTtcbiAgICByZXN1bHRbaWR4XSA9IHR1cGxlWzFdO1xuICAgIGlkeCAtPSAxO1xuICB9XG4gIHJldHVybiBbcmVzdWx0LCB0dXBsZVswXV07XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX3JlZHVjZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3JlZHVjZScpO1xudmFyIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuXG4vKipcbiAqIEFuIE9iamVjdC1zcGVjaWZpYyB2ZXJzaW9uIG9mIGBtYXBgLiBUaGUgZnVuY3Rpb24gaXMgYXBwbGllZCB0byB0aHJlZVxuICogYXJndW1lbnRzOiAqKHZhbHVlLCBrZXksIG9iaikqLiBJZiBvbmx5IHRoZSB2YWx1ZSBpcyBzaWduaWZpY2FudCwgdXNlXG4gKiBgbWFwYCBpbnN0ZWFkLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjkuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyAoKCosIFN0cmluZywgT2JqZWN0KSAtPiAqKSAtPiBPYmplY3QgLT4gT2JqZWN0XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtPYmplY3R9IG9ialxuICogQHJldHVybiB7T2JqZWN0fVxuICogQHNlZSBSLm1hcFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciB2YWx1ZXMgPSB7IHg6IDEsIHk6IDIsIHo6IDMgfTtcbiAqICAgICAgdmFyIHByZXBlbmRLZXlBbmREb3VibGUgPSAobnVtLCBrZXksIG9iaikgPT4ga2V5ICsgKG51bSAqIDIpO1xuICpcbiAqICAgICAgUi5tYXBPYmpJbmRleGVkKHByZXBlbmRLZXlBbmREb3VibGUsIHZhbHVlcyk7IC8vPT4geyB4OiAneDInLCB5OiAneTQnLCB6OiAnejYnIH1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIG1hcE9iakluZGV4ZWQoZm4sIG9iaikge1xuICByZXR1cm4gX3JlZHVjZShmdW5jdGlvbihhY2MsIGtleSkge1xuICAgIGFjY1trZXldID0gZm4ob2JqW2tleV0sIGtleSwgb2JqKTtcbiAgICByZXR1cm4gYWNjO1xuICB9LCB7fSwga2V5cyhvYmopKTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFRlc3RzIGEgcmVndWxhciBleHByZXNzaW9uIGFnYWluc3QgYSBTdHJpbmcuIE5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIHdpbGxcbiAqIHJldHVybiBhbiBlbXB0eSBhcnJheSB3aGVuIHRoZXJlIGFyZSBubyBtYXRjaGVzLiBUaGlzIGRpZmZlcnMgZnJvbVxuICogW2BTdHJpbmcucHJvdG90eXBlLm1hdGNoYF0oaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvU3RyaW5nL21hdGNoKVxuICogd2hpY2ggcmV0dXJucyBgbnVsbGAgd2hlbiB0aGVyZSBhcmUgbm8gbWF0Y2hlcy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBzaWcgUmVnRXhwIC0+IFN0cmluZyAtPiBbU3RyaW5nIHwgVW5kZWZpbmVkXVxuICogQHBhcmFtIHtSZWdFeHB9IHJ4IEEgcmVndWxhciBleHByZXNzaW9uLlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIG1hdGNoIGFnYWluc3RcbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbGlzdCBvZiBtYXRjaGVzIG9yIGVtcHR5IGFycmF5LlxuICogQHNlZSBSLnRlc3RcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLm1hdGNoKC8oW2Etel1hKS9nLCAnYmFuYW5hcycpOyAvLz0+IFsnYmEnLCAnbmEnLCAnbmEnXVxuICogICAgICBSLm1hdGNoKC9hLywgJ2InKTsgLy89PiBbXVxuICogICAgICBSLm1hdGNoKC9hLywgbnVsbCk7IC8vPT4gVHlwZUVycm9yOiBudWxsIGRvZXMgbm90IGhhdmUgYSBtZXRob2QgbmFtZWQgXCJtYXRjaFwiXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBtYXRjaChyeCwgc3RyKSB7XG4gIHJldHVybiBzdHIubWF0Y2gocngpIHx8IFtdO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9pc0ludGVnZXIgPSByZXF1aXJlKCcuL2ludGVybmFsL19pc0ludGVnZXInKTtcblxuXG4vKipcbiAqIG1hdGhNb2QgYmVoYXZlcyBsaWtlIHRoZSBtb2R1bG8gb3BlcmF0b3Igc2hvdWxkIG1hdGhlbWF0aWNhbGx5LCB1bmxpa2UgdGhlXG4gKiBgJWAgb3BlcmF0b3IgKGFuZCBieSBleHRlbnNpb24sIFIubW9kdWxvKS4gU28gd2hpbGUgXCItMTcgJSA1XCIgaXMgLTIsXG4gKiBtYXRoTW9kKC0xNywgNSkgaXMgMy4gbWF0aE1vZCByZXF1aXJlcyBJbnRlZ2VyIGFyZ3VtZW50cywgYW5kIHJldHVybnMgTmFOXG4gKiB3aGVuIHRoZSBtb2R1bHVzIGlzIHplcm8gb3IgbmVnYXRpdmUuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMy4wXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IE51bWJlclxuICogQHBhcmFtIHtOdW1iZXJ9IG0gVGhlIGRpdmlkZW5kLlxuICogQHBhcmFtIHtOdW1iZXJ9IHAgdGhlIG1vZHVsdXMuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSByZXN1bHQgb2YgYGIgbW9kIGFgLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIubWF0aE1vZCgtMTcsIDUpOyAgLy89PiAzXG4gKiAgICAgIFIubWF0aE1vZCgxNywgNSk7ICAgLy89PiAyXG4gKiAgICAgIFIubWF0aE1vZCgxNywgLTUpOyAgLy89PiBOYU5cbiAqICAgICAgUi5tYXRoTW9kKDE3LCAwKTsgICAvLz0+IE5hTlxuICogICAgICBSLm1hdGhNb2QoMTcuMiwgNSk7IC8vPT4gTmFOXG4gKiAgICAgIFIubWF0aE1vZCgxNywgNS4zKTsgLy89PiBOYU5cbiAqXG4gKiAgICAgIHZhciBjbG9jayA9IFIubWF0aE1vZChSLl9fLCAxMik7XG4gKiAgICAgIGNsb2NrKDE1KTsgLy89PiAzXG4gKiAgICAgIGNsb2NrKDI0KTsgLy89PiAwXG4gKlxuICogICAgICB2YXIgc2V2ZW50ZWVuTW9kID0gUi5tYXRoTW9kKDE3KTtcbiAqICAgICAgc2V2ZW50ZWVuTW9kKDMpOyAgLy89PiAyXG4gKiAgICAgIHNldmVudGVlbk1vZCg0KTsgIC8vPT4gMVxuICogICAgICBzZXZlbnRlZW5Nb2QoMTApOyAvLz0+IDdcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIG1hdGhNb2QobSwgcCkge1xuICBpZiAoIV9pc0ludGVnZXIobSkpIHsgcmV0dXJuIE5hTjsgfVxuICBpZiAoIV9pc0ludGVnZXIocCkgfHwgcCA8IDEpIHsgcmV0dXJuIE5hTjsgfVxuICByZXR1cm4gKChtICUgcCkgKyBwKSAlIHA7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBsYXJnZXIgb2YgaXRzIHR3byBhcmd1bWVudHMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgUmVsYXRpb25cbiAqIEBzaWcgT3JkIGEgPT4gYSAtPiBhIC0+IGFcbiAqIEBwYXJhbSB7Kn0gYVxuICogQHBhcmFtIHsqfSBiXG4gKiBAcmV0dXJuIHsqfVxuICogQHNlZSBSLm1heEJ5LCBSLm1pblxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIubWF4KDc4OSwgMTIzKTsgLy89PiA3ODlcbiAqICAgICAgUi5tYXgoJ2EnLCAnYicpOyAvLz0+ICdiJ1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gbWF4KGEsIGIpIHsgcmV0dXJuIGIgPiBhID8gYiA6IGE7IH0pO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcblxuXG4vKipcbiAqIFRha2VzIGEgZnVuY3Rpb24gYW5kIHR3byB2YWx1ZXMsIGFuZCByZXR1cm5zIHdoaWNoZXZlciB2YWx1ZSBwcm9kdWNlcyB0aGVcbiAqIGxhcmdlciByZXN1bHQgd2hlbiBwYXNzZWQgdG8gdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjguMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnIE9yZCBiID0+IChhIC0+IGIpIC0+IGEgLT4gYSAtPiBhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmXG4gKiBAcGFyYW0geyp9IGFcbiAqIEBwYXJhbSB7Kn0gYlxuICogQHJldHVybiB7Kn1cbiAqIEBzZWUgUi5tYXgsIFIubWluQnlcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICAvLyAgc3F1YXJlIDo6IE51bWJlciAtPiBOdW1iZXJcbiAqICAgICAgdmFyIHNxdWFyZSA9IG4gPT4gbiAqIG47XG4gKlxuICogICAgICBSLm1heEJ5KHNxdWFyZSwgLTMsIDIpOyAvLz0+IC0zXG4gKlxuICogICAgICBSLnJlZHVjZShSLm1heEJ5KHNxdWFyZSksIDAsIFszLCAtNSwgNCwgMSwgLTJdKTsgLy89PiAtNVxuICogICAgICBSLnJlZHVjZShSLm1heEJ5KHNxdWFyZSksIDAsIFtdKTsgLy89PiAwXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiBtYXhCeShmLCBhLCBiKSB7XG4gIHJldHVybiBmKGIpID4gZihhKSA/IGIgOiBhO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xudmFyIHN1bSA9IHJlcXVpcmUoJy4vc3VtJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtZWFuIG9mIHRoZSBnaXZlbiBsaXN0IG9mIG51bWJlcnMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTQuMFxuICogQGNhdGVnb3J5IE1hdGhcbiAqIEBzaWcgW051bWJlcl0gLT4gTnVtYmVyXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0XG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5tZWFuKFsyLCA3LCA5XSk7IC8vPT4gNlxuICogICAgICBSLm1lYW4oW10pOyAvLz0+IE5hTlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gbWVhbihsaXN0KSB7XG4gIHJldHVybiBzdW0obGlzdCkgLyBsaXN0Lmxlbmd0aDtcbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBtZWFuID0gcmVxdWlyZSgnLi9tZWFuJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBtZWRpYW4gb2YgdGhlIGdpdmVuIGxpc3Qgb2YgbnVtYmVycy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNC4wXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHNpZyBbTnVtYmVyXSAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3RcbiAqIEByZXR1cm4ge051bWJlcn1cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLm1lZGlhbihbMiwgOSwgN10pOyAvLz0+IDdcbiAqICAgICAgUi5tZWRpYW4oWzcsIDIsIDEwLCA5XSk7IC8vPT4gOFxuICogICAgICBSLm1lZGlhbihbXSk7IC8vPT4gTmFOXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBtZWRpYW4obGlzdCkge1xuICB2YXIgbGVuID0gbGlzdC5sZW5ndGg7XG4gIGlmIChsZW4gPT09IDApIHtcbiAgICByZXR1cm4gTmFOO1xuICB9XG4gIHZhciB3aWR0aCA9IDIgLSBsZW4gJSAyO1xuICB2YXIgaWR4ID0gKGxlbiAtIHdpZHRoKSAvIDI7XG4gIHJldHVybiBtZWFuKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpc3QsIDApLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHJldHVybiBhIDwgYiA/IC0xIDogYSA+IGIgPyAxIDogMDtcbiAgfSkuc2xpY2UoaWR4LCBpZHggKyB3aWR0aCkpO1xufSk7XG4iLCJ2YXIgX2FyaXR5ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fYXJpdHknKTtcbnZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgX2hhcyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2hhcycpO1xudmFyIHRvU3RyaW5nID0gcmVxdWlyZSgnLi90b1N0cmluZycpO1xuXG5cbi8qKlxuICogQ3JlYXRlcyBhIG5ldyBmdW5jdGlvbiB0aGF0LCB3aGVuIGludm9rZWQsIGNhY2hlcyB0aGUgcmVzdWx0IG9mIGNhbGxpbmcgYGZuYFxuICogZm9yIGEgZ2l2ZW4gYXJndW1lbnQgc2V0IGFuZCByZXR1cm5zIHRoZSByZXN1bHQuIFN1YnNlcXVlbnQgY2FsbHMgdG8gdGhlXG4gKiBtZW1vaXplZCBgZm5gIHdpdGggdGhlIHNhbWUgYXJndW1lbnQgc2V0IHdpbGwgbm90IHJlc3VsdCBpbiBhbiBhZGRpdGlvbmFsXG4gKiBjYWxsIHRvIGBmbmA7IGluc3RlYWQsIHRoZSBjYWNoZWQgcmVzdWx0IGZvciB0aGF0IHNldCBvZiBhcmd1bWVudHMgd2lsbCBiZVxuICogcmV0dXJuZWQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKCouLi4gLT4gYSkgLT4gKCouLi4gLT4gYSlcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBtZW1vaXplLlxuICogQHJldHVybiB7RnVuY3Rpb259IE1lbW9pemVkIHZlcnNpb24gb2YgYGZuYC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgY291bnQgPSAwO1xuICogICAgICB2YXIgZmFjdG9yaWFsID0gUi5tZW1vaXplKG4gPT4ge1xuICogICAgICAgIGNvdW50ICs9IDE7XG4gKiAgICAgICAgcmV0dXJuIFIucHJvZHVjdChSLnJhbmdlKDEsIG4gKyAxKSk7XG4gKiAgICAgIH0pO1xuICogICAgICBmYWN0b3JpYWwoNSk7IC8vPT4gMTIwXG4gKiAgICAgIGZhY3RvcmlhbCg1KTsgLy89PiAxMjBcbiAqICAgICAgZmFjdG9yaWFsKDUpOyAvLz0+IDEyMFxuICogICAgICBjb3VudDsgLy89PiAxXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBtZW1vaXplKGZuKSB7XG4gIHZhciBjYWNoZSA9IHt9O1xuICByZXR1cm4gX2FyaXR5KGZuLmxlbmd0aCwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGtleSA9IHRvU3RyaW5nKGFyZ3VtZW50cyk7XG4gICAgaWYgKCFfaGFzKGtleSwgY2FjaGUpKSB7XG4gICAgICBjYWNoZVtrZXldID0gZm4uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbiAgICB9XG4gICAgcmV0dXJuIGNhY2hlW2tleV07XG4gIH0pO1xufSk7XG4iLCJ2YXIgX2Fzc2lnbiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Fzc2lnbicpO1xudmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIENyZWF0ZSBhIG5ldyBvYmplY3Qgd2l0aCB0aGUgb3duIHByb3BlcnRpZXMgb2YgdGhlIGZpcnN0IG9iamVjdCBtZXJnZWQgd2l0aFxuICogdGhlIG93biBwcm9wZXJ0aWVzIG9mIHRoZSBzZWNvbmQgb2JqZWN0LiBJZiBhIGtleSBleGlzdHMgaW4gYm90aCBvYmplY3RzLFxuICogdGhlIHZhbHVlIGZyb20gdGhlIHNlY29uZCBvYmplY3Qgd2lsbCBiZSB1c2VkLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyB7azogdn0gLT4ge2s6IHZ9IC0+IHtrOiB2fVxuICogQHBhcmFtIHtPYmplY3R9IGxcbiAqIEBwYXJhbSB7T2JqZWN0fSByXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAc2VlIFIubWVyZ2VXaXRoLCBSLm1lcmdlV2l0aEtleVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIubWVyZ2UoeyAnbmFtZSc6ICdmcmVkJywgJ2FnZSc6IDEwIH0sIHsgJ2FnZSc6IDQwIH0pO1xuICogICAgICAvLz0+IHsgJ25hbWUnOiAnZnJlZCcsICdhZ2UnOiA0MCB9XG4gKlxuICogICAgICB2YXIgcmVzZXRUb0RlZmF1bHQgPSBSLm1lcmdlKFIuX18sIHt4OiAwfSk7XG4gKiAgICAgIHJlc2V0VG9EZWZhdWx0KHt4OiA1LCB5OiAyfSk7IC8vPT4ge3g6IDAsIHk6IDJ9XG4gKiBAc3ltYiBSLm1lcmdlKHsgeDogMSwgeTogMiB9LCB7IHk6IDUsIHo6IDMgfSkgPSB7IHg6IDEsIHk6IDUsIHo6IDMgfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gbWVyZ2UobCwgcikge1xuICByZXR1cm4gX2Fzc2lnbih7fSwgbCwgcik7XG59KTtcbiIsInZhciBfYXNzaWduID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fYXNzaWduJyk7XG52YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xuXG5cbi8qKlxuICogTWVyZ2VzIGEgbGlzdCBvZiBvYmplY3RzIHRvZ2V0aGVyIGludG8gb25lIG9iamVjdC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xMC4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBbe2s6IHZ9XSAtPiB7azogdn1cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgQW4gYXJyYXkgb2Ygb2JqZWN0c1xuICogQHJldHVybiB7T2JqZWN0fSBBIG1lcmdlZCBvYmplY3QuXG4gKiBAc2VlIFIucmVkdWNlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5tZXJnZUFsbChbe2ZvbzoxfSx7YmFyOjJ9LHtiYXo6M31dKTsgLy89PiB7Zm9vOjEsYmFyOjIsYmF6OjN9XG4gKiAgICAgIFIubWVyZ2VBbGwoW3tmb286MX0se2ZvbzoyfSx7YmFyOjJ9XSk7IC8vPT4ge2ZvbzoyLGJhcjoyfVxuICogQHN5bWIgUi5tZXJnZUFsbChbeyB4OiAxIH0sIHsgeTogMiB9LCB7IHo6IDMgfV0pID0geyB4OiAxLCB5OiAyLCB6OiAzIH1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIG1lcmdlQWxsKGxpc3QpIHtcbiAgcmV0dXJuIF9hc3NpZ24uYXBwbHkobnVsbCwgW3t9XS5jb25jYXQobGlzdCkpO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xudmFyIG1lcmdlV2l0aEtleSA9IHJlcXVpcmUoJy4vbWVyZ2VXaXRoS2V5Jyk7XG5cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IG9iamVjdCB3aXRoIHRoZSBvd24gcHJvcGVydGllcyBvZiB0aGUgdHdvIHByb3ZpZGVkIG9iamVjdHMuIElmXG4gKiBhIGtleSBleGlzdHMgaW4gYm90aCBvYmplY3RzLCB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gaXMgYXBwbGllZCB0byB0aGUgdmFsdWVzXG4gKiBhc3NvY2lhdGVkIHdpdGggdGhlIGtleSBpbiBlYWNoIG9iamVjdCwgd2l0aCB0aGUgcmVzdWx0IGJlaW5nIHVzZWQgYXMgdGhlXG4gKiB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGtleSBpbiB0aGUgcmV0dXJuZWQgb2JqZWN0LiBUaGUga2V5IHdpbGwgYmVcbiAqIGV4Y2x1ZGVkIGZyb20gdGhlIHJldHVybmVkIG9iamVjdCBpZiB0aGUgcmVzdWx0aW5nIHZhbHVlIGlzIGB1bmRlZmluZWRgLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE5LjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcgKGEgLT4gYSAtPiBhKSAtPiB7YX0gLT4ge2F9IC0+IHthfVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm5cbiAqIEBwYXJhbSB7T2JqZWN0fSBsXG4gKiBAcGFyYW0ge09iamVjdH0gclxuICogQHJldHVybiB7T2JqZWN0fVxuICogQHNlZSBSLm1lcmdlLCBSLm1lcmdlV2l0aEtleVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIubWVyZ2VXaXRoKFIuY29uY2F0LFxuICogICAgICAgICAgICAgICAgICB7IGE6IHRydWUsIHZhbHVlczogWzEwLCAyMF0gfSxcbiAqICAgICAgICAgICAgICAgICAgeyBiOiB0cnVlLCB2YWx1ZXM6IFsxNSwgMzVdIH0pO1xuICogICAgICAvLz0+IHsgYTogdHJ1ZSwgYjogdHJ1ZSwgdmFsdWVzOiBbMTAsIDIwLCAxNSwgMzVdIH1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIG1lcmdlV2l0aChmbiwgbCwgcikge1xuICByZXR1cm4gbWVyZ2VXaXRoS2V5KGZ1bmN0aW9uKF8sIF9sLCBfcikge1xuICAgIHJldHVybiBmbihfbCwgX3IpO1xuICB9LCBsLCByKTtcbn0pO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcbnZhciBfaGFzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faGFzJyk7XG5cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IG9iamVjdCB3aXRoIHRoZSBvd24gcHJvcGVydGllcyBvZiB0aGUgdHdvIHByb3ZpZGVkIG9iamVjdHMuIElmXG4gKiBhIGtleSBleGlzdHMgaW4gYm90aCBvYmplY3RzLCB0aGUgcHJvdmlkZWQgZnVuY3Rpb24gaXMgYXBwbGllZCB0byB0aGUga2V5XG4gKiBhbmQgdGhlIHZhbHVlcyBhc3NvY2lhdGVkIHdpdGggdGhlIGtleSBpbiBlYWNoIG9iamVjdCwgd2l0aCB0aGUgcmVzdWx0IGJlaW5nXG4gKiB1c2VkIGFzIHRoZSB2YWx1ZSBhc3NvY2lhdGVkIHdpdGggdGhlIGtleSBpbiB0aGUgcmV0dXJuZWQgb2JqZWN0LiBUaGUga2V5XG4gKiB3aWxsIGJlIGV4Y2x1ZGVkIGZyb20gdGhlIHJldHVybmVkIG9iamVjdCBpZiB0aGUgcmVzdWx0aW5nIHZhbHVlIGlzXG4gKiBgdW5kZWZpbmVkYC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xOS4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIChTdHJpbmcgLT4gYSAtPiBhIC0+IGEpIC0+IHthfSAtPiB7YX0gLT4ge2F9XG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtPYmplY3R9IGxcbiAqIEBwYXJhbSB7T2JqZWN0fSByXG4gKiBAcmV0dXJuIHtPYmplY3R9XG4gKiBAc2VlIFIubWVyZ2UsIFIubWVyZ2VXaXRoXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgbGV0IGNvbmNhdFZhbHVlcyA9IChrLCBsLCByKSA9PiBrID09ICd2YWx1ZXMnID8gUi5jb25jYXQobCwgcikgOiByXG4gKiAgICAgIFIubWVyZ2VXaXRoS2V5KGNvbmNhdFZhbHVlcyxcbiAqICAgICAgICAgICAgICAgICAgICAgeyBhOiB0cnVlLCB0aGluZzogJ2ZvbycsIHZhbHVlczogWzEwLCAyMF0gfSxcbiAqICAgICAgICAgICAgICAgICAgICAgeyBiOiB0cnVlLCB0aGluZzogJ2JhcicsIHZhbHVlczogWzE1LCAzNV0gfSk7XG4gKiAgICAgIC8vPT4geyBhOiB0cnVlLCBiOiB0cnVlLCB0aGluZzogJ2JhcicsIHZhbHVlczogWzEwLCAyMCwgMTUsIDM1XSB9XG4gKiBAc3ltYiBSLm1lcmdlV2l0aEtleShmLCB7IHg6IDEsIHk6IDIgfSwgeyB5OiA1LCB6OiAzIH0pID0geyB4OiAxLCB5OiBmKCd5JywgMiwgNSksIHo6IDMgfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gbWVyZ2VXaXRoS2V5KGZuLCBsLCByKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgdmFyIGs7XG5cbiAgZm9yIChrIGluIGwpIHtcbiAgICBpZiAoX2hhcyhrLCBsKSkge1xuICAgICAgcmVzdWx0W2tdID0gX2hhcyhrLCByKSA/IGZuKGssIGxba10sIHJba10pIDogbFtrXTtcbiAgICB9XG4gIH1cblxuICBmb3IgKGsgaW4gcikge1xuICAgIGlmIChfaGFzKGssIHIpICYmICEoX2hhcyhrLCByZXN1bHQpKSkge1xuICAgICAgcmVzdWx0W2tdID0gcltrXTtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgc21hbGxlciBvZiBpdHMgdHdvIGFyZ3VtZW50cy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBSZWxhdGlvblxuICogQHNpZyBPcmQgYSA9PiBhIC0+IGEgLT4gYVxuICogQHBhcmFtIHsqfSBhXG4gKiBAcGFyYW0geyp9IGJcbiAqIEByZXR1cm4geyp9XG4gKiBAc2VlIFIubWluQnksIFIubWF4XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5taW4oNzg5LCAxMjMpOyAvLz0+IDEyM1xuICogICAgICBSLm1pbignYScsICdiJyk7IC8vPT4gJ2EnXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBtaW4oYSwgYikgeyByZXR1cm4gYiA8IGEgPyBiIDogYTsgfSk7XG4iLCJ2YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xuXG5cbi8qKlxuICogVGFrZXMgYSBmdW5jdGlvbiBhbmQgdHdvIHZhbHVlcywgYW5kIHJldHVybnMgd2hpY2hldmVyIHZhbHVlIHByb2R1Y2VzIHRoZVxuICogc21hbGxlciByZXN1bHQgd2hlbiBwYXNzZWQgdG8gdGhlIHByb3ZpZGVkIGZ1bmN0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjguMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnIE9yZCBiID0+IChhIC0+IGIpIC0+IGEgLT4gYSAtPiBhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmXG4gKiBAcGFyYW0geyp9IGFcbiAqIEBwYXJhbSB7Kn0gYlxuICogQHJldHVybiB7Kn1cbiAqIEBzZWUgUi5taW4sIFIubWF4QnlcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICAvLyAgc3F1YXJlIDo6IE51bWJlciAtPiBOdW1iZXJcbiAqICAgICAgdmFyIHNxdWFyZSA9IG4gPT4gbiAqIG47XG4gKlxuICogICAgICBSLm1pbkJ5KHNxdWFyZSwgLTMsIDIpOyAvLz0+IDJcbiAqXG4gKiAgICAgIFIucmVkdWNlKFIubWluQnkoc3F1YXJlKSwgSW5maW5pdHksIFszLCAtNSwgNCwgMSwgLTJdKTsgLy89PiAxXG4gKiAgICAgIFIucmVkdWNlKFIubWluQnkoc3F1YXJlKSwgSW5maW5pdHksIFtdKTsgLy89PiBJbmZpbml0eVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gbWluQnkoZiwgYSwgYikge1xuICByZXR1cm4gZihiKSA8IGYoYSkgPyBiIDogYTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIERpdmlkZXMgdGhlIGZpcnN0IHBhcmFtZXRlciBieSB0aGUgc2Vjb25kIGFuZCByZXR1cm5zIHRoZSByZW1haW5kZXIuIE5vdGVcbiAqIHRoYXQgdGhpcyBmdW5jdGlvbiBwcmVzZXJ2ZXMgdGhlIEphdmFTY3JpcHQtc3R5bGUgYmVoYXZpb3IgZm9yIG1vZHVsby4gRm9yXG4gKiBtYXRoZW1hdGljYWwgbW9kdWxvIHNlZSBgbWF0aE1vZGAuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4xXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IE51bWJlclxuICogQHBhcmFtIHtOdW1iZXJ9IGEgVGhlIHZhbHVlIHRvIHRoZSBkaXZpZGUuXG4gKiBAcGFyYW0ge051bWJlcn0gYiBUaGUgcHNldWRvLW1vZHVsdXNcbiAqIEByZXR1cm4ge051bWJlcn0gVGhlIHJlc3VsdCBvZiBgYiAlIGFgLlxuICogQHNlZSBSLm1hdGhNb2RcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLm1vZHVsbygxNywgMyk7IC8vPT4gMlxuICogICAgICAvLyBKUyBiZWhhdmlvcjpcbiAqICAgICAgUi5tb2R1bG8oLTE3LCAzKTsgLy89PiAtMlxuICogICAgICBSLm1vZHVsbygxNywgLTMpOyAvLz0+IDJcbiAqXG4gKiAgICAgIHZhciBpc09kZCA9IFIubW9kdWxvKFIuX18sIDIpO1xuICogICAgICBpc09kZCg0Mik7IC8vPT4gMFxuICogICAgICBpc09kZCgyMSk7IC8vPT4gMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gbW9kdWxvKGEsIGIpIHsgcmV0dXJuIGEgJSBiOyB9KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBNdWx0aXBsaWVzIHR3byBudW1iZXJzLiBFcXVpdmFsZW50IHRvIGBhICogYmAgYnV0IGN1cnJpZWQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IE51bWJlclxuICogQHBhcmFtIHtOdW1iZXJ9IGEgVGhlIGZpcnN0IHZhbHVlLlxuICogQHBhcmFtIHtOdW1iZXJ9IGIgVGhlIHNlY29uZCB2YWx1ZS5cbiAqIEByZXR1cm4ge051bWJlcn0gVGhlIHJlc3VsdCBvZiBgYSAqIGJgLlxuICogQHNlZSBSLmRpdmlkZVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBkb3VibGUgPSBSLm11bHRpcGx5KDIpO1xuICogICAgICB2YXIgdHJpcGxlID0gUi5tdWx0aXBseSgzKTtcbiAqICAgICAgZG91YmxlKDMpOyAgICAgICAvLz0+ICA2XG4gKiAgICAgIHRyaXBsZSg0KTsgICAgICAgLy89PiAxMlxuICogICAgICBSLm11bHRpcGx5KDIsIDUpOyAgLy89PiAxMFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gbXVsdGlwbHkoYSwgYikgeyByZXR1cm4gYSAqIGI7IH0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFdyYXBzIGEgZnVuY3Rpb24gb2YgYW55IGFyaXR5IChpbmNsdWRpbmcgbnVsbGFyeSkgaW4gYSBmdW5jdGlvbiB0aGF0IGFjY2VwdHNcbiAqIGV4YWN0bHkgYG5gIHBhcmFtZXRlcnMuIEFueSBleHRyYW5lb3VzIHBhcmFtZXRlcnMgd2lsbCBub3QgYmUgcGFzc2VkIHRvIHRoZVxuICogc3VwcGxpZWQgZnVuY3Rpb24uXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgTnVtYmVyIC0+ICgqIC0+IGEpIC0+ICgqIC0+IGEpXG4gKiBAcGFyYW0ge051bWJlcn0gbiBUaGUgZGVzaXJlZCBhcml0eSBvZiB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBuZXcgZnVuY3Rpb24gd3JhcHBpbmcgYGZuYC4gVGhlIG5ldyBmdW5jdGlvbiBpcyBndWFyYW50ZWVkIHRvIGJlIG9mXG4gKiAgICAgICAgIGFyaXR5IGBuYC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgdGFrZXNUd29BcmdzID0gKGEsIGIpID0+IFthLCBiXTtcbiAqXG4gKiAgICAgIHRha2VzVHdvQXJncy5sZW5ndGg7IC8vPT4gMlxuICogICAgICB0YWtlc1R3b0FyZ3MoMSwgMik7IC8vPT4gWzEsIDJdXG4gKlxuICogICAgICB2YXIgdGFrZXNPbmVBcmcgPSBSLm5BcnkoMSwgdGFrZXNUd29BcmdzKTtcbiAqICAgICAgdGFrZXNPbmVBcmcubGVuZ3RoOyAvLz0+IDFcbiAqICAgICAgLy8gT25seSBgbmAgYXJndW1lbnRzIGFyZSBwYXNzZWQgdG8gdGhlIHdyYXBwZWQgZnVuY3Rpb25cbiAqICAgICAgdGFrZXNPbmVBcmcoMSwgMik7IC8vPT4gWzEsIHVuZGVmaW5lZF1cbiAqIEBzeW1iIFIubkFyeSgwLCBmKShhLCBiKSA9IGYoKVxuICogQHN5bWIgUi5uQXJ5KDEsIGYpKGEsIGIpID0gZihhKVxuICogQHN5bWIgUi5uQXJ5KDIsIGYpKGEsIGIpID0gZihhLCBiKVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gbkFyeShuLCBmbikge1xuICBzd2l0Y2ggKG4pIHtcbiAgICBjYXNlIDA6IHJldHVybiBmdW5jdGlvbigpIHtyZXR1cm4gZm4uY2FsbCh0aGlzKTt9O1xuICAgIGNhc2UgMTogcmV0dXJuIGZ1bmN0aW9uKGEwKSB7cmV0dXJuIGZuLmNhbGwodGhpcywgYTApO307XG4gICAgY2FzZSAyOiByZXR1cm4gZnVuY3Rpb24oYTAsIGExKSB7cmV0dXJuIGZuLmNhbGwodGhpcywgYTAsIGExKTt9O1xuICAgIGNhc2UgMzogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIpIHtyZXR1cm4gZm4uY2FsbCh0aGlzLCBhMCwgYTEsIGEyKTt9O1xuICAgIGNhc2UgNDogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIsIGEzKSB7cmV0dXJuIGZuLmNhbGwodGhpcywgYTAsIGExLCBhMiwgYTMpO307XG4gICAgY2FzZSA1OiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMsIGE0KSB7cmV0dXJuIGZuLmNhbGwodGhpcywgYTAsIGExLCBhMiwgYTMsIGE0KTt9O1xuICAgIGNhc2UgNjogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtyZXR1cm4gZm4uY2FsbCh0aGlzLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1KTt9O1xuICAgIGNhc2UgNzogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KSB7cmV0dXJuIGZuLmNhbGwodGhpcywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpO307XG4gICAgY2FzZSA4OiByZXR1cm4gZnVuY3Rpb24oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KSB7cmV0dXJuIGZuLmNhbGwodGhpcywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KTt9O1xuICAgIGNhc2UgOTogcmV0dXJuIGZ1bmN0aW9uKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgpIHtyZXR1cm4gZm4uY2FsbCh0aGlzLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4KTt9O1xuICAgIGNhc2UgMTA6IHJldHVybiBmdW5jdGlvbihhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcsIGE4LCBhOSkge3JldHVybiBmbi5jYWxsKHRoaXMsIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNywgYTgsIGE5KTt9O1xuICAgIGRlZmF1bHQ6IHRocm93IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgdG8gbkFyeSBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIGludGVnZXIgbm8gZ3JlYXRlciB0aGFuIHRlbicpO1xuICB9XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG5cblxuLyoqXG4gKiBOZWdhdGVzIGl0cyBhcmd1bWVudC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC45LjBcbiAqIEBjYXRlZ29yeSBNYXRoXG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5uZWdhdGUoNDIpOyAvLz0+IC00MlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gbmVnYXRlKG4pIHsgcmV0dXJuIC1uOyB9KTtcbiIsInZhciBfY29tcGxlbWVudCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2NvbXBsZW1lbnQnKTtcbnZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2Rpc3BhdGNoYWJsZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZScpO1xudmFyIF94YW55ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9feGFueScpO1xudmFyIGFueSA9IHJlcXVpcmUoJy4vYW55Jyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGB0cnVlYCBpZiBubyBlbGVtZW50cyBvZiB0aGUgbGlzdCBtYXRjaCB0aGUgcHJlZGljYXRlLCBgZmFsc2VgXG4gKiBvdGhlcndpc2UuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYGFueWAgbWV0aG9kIG9mIHRoZSBzZWNvbmQgYXJndW1lbnQsIGlmIHByZXNlbnQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTIuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gW2FdIC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBwcmVkaWNhdGUgZnVuY3Rpb24uXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBhcnJheSB0byBjb25zaWRlci5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgcHJlZGljYXRlIGlzIG5vdCBzYXRpc2ZpZWQgYnkgZXZlcnkgZWxlbWVudCwgYGZhbHNlYCBvdGhlcndpc2UuXG4gKiBAc2VlIFIuYWxsLCBSLmFueVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBpc0V2ZW4gPSBuID0+IG4gJSAyID09PSAwO1xuICpcbiAqICAgICAgUi5ub25lKGlzRXZlbiwgWzEsIDMsIDUsIDcsIDksIDExXSk7IC8vPT4gdHJ1ZVxuICogICAgICBSLm5vbmUoaXNFdmVuLCBbMSwgMywgNSwgNywgOCwgMTFdKTsgLy89PiBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoX2NvbXBsZW1lbnQoX2Rpc3BhdGNoYWJsZShbJ2FueSddLCBfeGFueSwgYW55KSkpO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcblxuXG4vKipcbiAqIEEgZnVuY3Rpb24gdGhhdCByZXR1cm5zIHRoZSBgIWAgb2YgaXRzIGFyZ3VtZW50LiBJdCB3aWxsIHJldHVybiBgdHJ1ZWAgd2hlblxuICogcGFzc2VkIGZhbHNlLXkgdmFsdWUsIGFuZCBgZmFsc2VgIHdoZW4gcGFzc2VkIGEgdHJ1dGgteSBvbmUuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTG9naWNcbiAqIEBzaWcgKiAtPiBCb29sZWFuXG4gKiBAcGFyYW0geyp9IGEgYW55IHZhbHVlXG4gKiBAcmV0dXJuIHtCb29sZWFufSB0aGUgbG9naWNhbCBpbnZlcnNlIG9mIHBhc3NlZCBhcmd1bWVudC5cbiAqIEBzZWUgUi5jb21wbGVtZW50XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5ub3QodHJ1ZSk7IC8vPT4gZmFsc2VcbiAqICAgICAgUi5ub3QoZmFsc2UpOyAvLz0+IHRydWVcbiAqICAgICAgUi5ub3QoMCk7IC8vPT4gdHJ1ZVxuICogICAgICBSLm5vdCgxKTsgLy89PiBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gbm90KGEpIHtcbiAgcmV0dXJuICFhO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9pc1N0cmluZyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2lzU3RyaW5nJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBudGggZWxlbWVudCBvZiB0aGUgZ2l2ZW4gbGlzdCBvciBzdHJpbmcuIElmIG4gaXMgbmVnYXRpdmUgdGhlXG4gKiBlbGVtZW50IGF0IGluZGV4IGxlbmd0aCArIG4gaXMgcmV0dXJuZWQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBOdW1iZXIgLT4gW2FdIC0+IGEgfCBVbmRlZmluZWRcbiAqIEBzaWcgTnVtYmVyIC0+IFN0cmluZyAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfSBvZmZzZXRcbiAqIEBwYXJhbSB7Kn0gbGlzdFxuICogQHJldHVybiB7Kn1cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgbGlzdCA9IFsnZm9vJywgJ2JhcicsICdiYXonLCAncXV1eCddO1xuICogICAgICBSLm50aCgxLCBsaXN0KTsgLy89PiAnYmFyJ1xuICogICAgICBSLm50aCgtMSwgbGlzdCk7IC8vPT4gJ3F1dXgnXG4gKiAgICAgIFIubnRoKC05OSwgbGlzdCk7IC8vPT4gdW5kZWZpbmVkXG4gKlxuICogICAgICBSLm50aCgyLCAnYWJjJyk7IC8vPT4gJ2MnXG4gKiAgICAgIFIubnRoKDMsICdhYmMnKTsgLy89PiAnJ1xuICogQHN5bWIgUi5udGgoLTEsIFthLCBiLCBjXSkgPSBjXG4gKiBAc3ltYiBSLm50aCgwLCBbYSwgYiwgY10pID0gYVxuICogQHN5bWIgUi5udGgoMSwgW2EsIGIsIGNdKSA9IGJcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIG50aChvZmZzZXQsIGxpc3QpIHtcbiAgdmFyIGlkeCA9IG9mZnNldCA8IDAgPyBsaXN0Lmxlbmd0aCArIG9mZnNldCA6IG9mZnNldDtcbiAgcmV0dXJuIF9pc1N0cmluZyhsaXN0KSA/IGxpc3QuY2hhckF0KGlkeCkgOiBsaXN0W2lkeF07XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgY3VycnlOID0gcmVxdWlyZSgnLi9jdXJyeU4nKTtcbnZhciBudGggPSByZXF1aXJlKCcuL250aCcpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIGZ1bmN0aW9uIHdoaWNoIHJldHVybnMgaXRzIG50aCBhcmd1bWVudC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC45LjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyBOdW1iZXIgLT4gKi4uLiAtPiAqXG4gKiBAcGFyYW0ge051bWJlcn0gblxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5udGhBcmcoMSkoJ2EnLCAnYicsICdjJyk7IC8vPT4gJ2InXG4gKiAgICAgIFIubnRoQXJnKC0xKSgnYScsICdiJywgJ2MnKTsgLy89PiAnYydcbiAqIEBzeW1iIFIubnRoQXJnKC0xKShhLCBiLCBjKSA9IGNcbiAqIEBzeW1iIFIubnRoQXJnKDApKGEsIGIsIGMpID0gYVxuICogQHN5bWIgUi5udGhBcmcoMSkoYSwgYiwgYykgPSBiXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiBudGhBcmcobikge1xuICB2YXIgYXJpdHkgPSBuIDwgMCA/IDEgOiBuICsgMTtcbiAgcmV0dXJuIGN1cnJ5Tihhcml0eSwgZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIG50aChuLCBhcmd1bWVudHMpO1xuICB9KTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIENyZWF0ZXMgYW4gb2JqZWN0IGNvbnRhaW5pbmcgYSBzaW5nbGUga2V5OnZhbHVlIHBhaXIuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTguMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyBTdHJpbmcgLT4gYSAtPiB7U3RyaW5nOmF9XG4gKiBAcGFyYW0ge1N0cmluZ30ga2V5XG4gKiBAcGFyYW0geyp9IHZhbFxuICogQHJldHVybiB7T2JqZWN0fVxuICogQHNlZSBSLnBhaXJcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgbWF0Y2hQaHJhc2VzID0gUi5jb21wb3NlKFxuICogICAgICAgIFIub2JqT2YoJ211c3QnKSxcbiAqICAgICAgICBSLm1hcChSLm9iak9mKCdtYXRjaF9waHJhc2UnKSlcbiAqICAgICAgKTtcbiAqICAgICAgbWF0Y2hQaHJhc2VzKFsnZm9vJywgJ2JhcicsICdiYXonXSk7IC8vPT4ge211c3Q6IFt7bWF0Y2hfcGhyYXNlOiAnZm9vJ30sIHttYXRjaF9waHJhc2U6ICdiYXInfSwge21hdGNoX3BocmFzZTogJ2Jheid9XX1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIG9iak9mKGtleSwgdmFsKSB7XG4gIHZhciBvYmogPSB7fTtcbiAgb2JqW2tleV0gPSB2YWw7XG4gIHJldHVybiBvYmo7XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgX29mID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fb2YnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBzaW5nbGV0b24gYXJyYXkgY29udGFpbmluZyB0aGUgdmFsdWUgcHJvdmlkZWQuXG4gKlxuICogTm90ZSB0aGlzIGBvZmAgaXMgZGlmZmVyZW50IGZyb20gdGhlIEVTNiBgb2ZgOyBTZWVcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L29mXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMy4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgYSAtPiBbYV1cbiAqIEBwYXJhbSB7Kn0geCBhbnkgdmFsdWVcbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSB3cmFwcGluZyBgeGAuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5vZihudWxsKTsgLy89PiBbbnVsbF1cbiAqICAgICAgUi5vZihbNDJdKTsgLy89PiBbWzQyXV1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKF9vZik7XG4iLCJ2YXIgX2NvbnRhaW5zID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY29udGFpbnMnKTtcbnZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgcGFydGlhbCBjb3B5IG9mIGFuIG9iamVjdCBvbWl0dGluZyB0aGUga2V5cyBzcGVjaWZpZWQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIFtTdHJpbmddIC0+IHtTdHJpbmc6ICp9IC0+IHtTdHJpbmc6ICp9XG4gKiBAcGFyYW0ge0FycmF5fSBuYW1lcyBhbiBhcnJheSBvZiBTdHJpbmcgcHJvcGVydHkgbmFtZXMgdG8gb21pdCBmcm9tIHRoZSBuZXcgb2JqZWN0XG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gY29weSBmcm9tXG4gKiBAcmV0dXJuIHtPYmplY3R9IEEgbmV3IG9iamVjdCB3aXRoIHByb3BlcnRpZXMgZnJvbSBgbmFtZXNgIG5vdCBvbiBpdC5cbiAqIEBzZWUgUi5waWNrXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5vbWl0KFsnYScsICdkJ10sIHthOiAxLCBiOiAyLCBjOiAzLCBkOiA0fSk7IC8vPT4ge2I6IDIsIGM6IDN9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBvbWl0KG5hbWVzLCBvYmopIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgIGlmICghX2NvbnRhaW5zKHByb3AsIG5hbWVzKSkge1xuICAgICAgcmVzdWx0W3Byb3BdID0gb2JqW3Byb3BdO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCJ2YXIgX2FyaXR5ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fYXJpdHknKTtcbnZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG5cblxuLyoqXG4gKiBBY2NlcHRzIGEgZnVuY3Rpb24gYGZuYCBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIHRoYXQgZ3VhcmRzIGludm9jYXRpb24gb2ZcbiAqIGBmbmAgc3VjaCB0aGF0IGBmbmAgY2FuIG9ubHkgZXZlciBiZSBjYWxsZWQgb25jZSwgbm8gbWF0dGVyIGhvdyBtYW55IHRpbWVzXG4gKiB0aGUgcmV0dXJuZWQgZnVuY3Rpb24gaXMgaW52b2tlZC4gVGhlIGZpcnN0IHZhbHVlIGNhbGN1bGF0ZWQgaXMgcmV0dXJuZWQgaW5cbiAqIHN1YnNlcXVlbnQgaW52b2NhdGlvbnMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKGEuLi4gLT4gYikgLT4gKGEuLi4gLT4gYilcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byB3cmFwIGluIGEgY2FsbC1vbmx5LW9uY2Ugd3JhcHBlci5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgd3JhcHBlZCBmdW5jdGlvbi5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgYWRkT25lT25jZSA9IFIub25jZSh4ID0+IHggKyAxKTtcbiAqICAgICAgYWRkT25lT25jZSgxMCk7IC8vPT4gMTFcbiAqICAgICAgYWRkT25lT25jZShhZGRPbmVPbmNlKDUwKSk7IC8vPT4gMTFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIG9uY2UoZm4pIHtcbiAgdmFyIGNhbGxlZCA9IGZhbHNlO1xuICB2YXIgcmVzdWx0O1xuICByZXR1cm4gX2FyaXR5KGZuLmxlbmd0aCwgZnVuY3Rpb24oKSB7XG4gICAgaWYgKGNhbGxlZCkge1xuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgY2FsbGVkID0gdHJ1ZTtcbiAgICByZXN1bHQgPSBmbi5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0pO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgb25lIG9yIGJvdGggb2YgaXRzIGFyZ3VtZW50cyBhcmUgYHRydWVgLiBSZXR1cm5zIGBmYWxzZWBcbiAqIGlmIGJvdGggYXJndW1lbnRzIGFyZSBgZmFsc2VgLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExvZ2ljXG4gKiBAc2lnIGEgLT4gYiAtPiBhIHwgYlxuICogQHBhcmFtIHtBbnl9IGFcbiAqIEBwYXJhbSB7QW55fSBiXG4gKiBAcmV0dXJuIHtBbnl9IHRoZSBmaXJzdCBhcmd1bWVudCBpZiB0cnV0aHksIG90aGVyd2lzZSB0aGUgc2Vjb25kIGFyZ3VtZW50LlxuICogQHNlZSBSLmVpdGhlclxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIub3IodHJ1ZSwgdHJ1ZSk7IC8vPT4gdHJ1ZVxuICogICAgICBSLm9yKHRydWUsIGZhbHNlKTsgLy89PiB0cnVlXG4gKiAgICAgIFIub3IoZmFsc2UsIHRydWUpOyAvLz0+IHRydWVcbiAqICAgICAgUi5vcihmYWxzZSwgZmFsc2UpOyAvLz0+IGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBvcihhLCBiKSB7XG4gIHJldHVybiBhIHx8IGI7XG59KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSByZXN1bHQgb2YgXCJzZXR0aW5nXCIgdGhlIHBvcnRpb24gb2YgdGhlIGdpdmVuIGRhdGEgc3RydWN0dXJlXG4gKiBmb2N1c2VkIGJ5IHRoZSBnaXZlbiBsZW5zIHRvIHRoZSByZXN1bHQgb2YgYXBwbHlpbmcgdGhlIGdpdmVuIGZ1bmN0aW9uIHRvXG4gKiB0aGUgZm9jdXNlZCB2YWx1ZS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNi4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAdHlwZWRlZm4gTGVucyBzIGEgPSBGdW5jdG9yIGYgPT4gKGEgLT4gZiBhKSAtPiBzIC0+IGYgc1xuICogQHNpZyBMZW5zIHMgYSAtPiAoYSAtPiBhKSAtPiBzIC0+IHNcbiAqIEBwYXJhbSB7TGVuc30gbGVuc1xuICogQHBhcmFtIHsqfSB2XG4gKiBAcGFyYW0geyp9IHhcbiAqIEByZXR1cm4geyp9XG4gKiBAc2VlIFIucHJvcCwgUi5sZW5zSW5kZXgsIFIubGVuc1Byb3BcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgaGVhZExlbnMgPSBSLmxlbnNJbmRleCgwKTtcbiAqXG4gKiAgICAgIFIub3ZlcihoZWFkTGVucywgUi50b1VwcGVyLCBbJ2ZvbycsICdiYXInLCAnYmF6J10pOyAvLz0+IFsnRk9PJywgJ2JhcicsICdiYXonXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgLy8gYElkZW50aXR5YCBpcyBhIGZ1bmN0b3IgdGhhdCBob2xkcyBhIHNpbmdsZSB2YWx1ZSwgd2hlcmUgYG1hcGAgc2ltcGx5XG4gIC8vIHRyYW5zZm9ybXMgdGhlIGhlbGQgdmFsdWUgd2l0aCB0aGUgcHJvdmlkZWQgZnVuY3Rpb24uXG4gIHZhciBJZGVudGl0eSA9IGZ1bmN0aW9uKHgpIHtcbiAgICByZXR1cm4ge3ZhbHVlOiB4LCBtYXA6IGZ1bmN0aW9uKGYpIHsgcmV0dXJuIElkZW50aXR5KGYoeCkpOyB9fTtcbiAgfTtcblxuICByZXR1cm4gX2N1cnJ5MyhmdW5jdGlvbiBvdmVyKGxlbnMsIGYsIHgpIHtcbiAgICAvLyBUaGUgdmFsdWUgcmV0dXJuZWQgYnkgdGhlIGdldHRlciBmdW5jdGlvbiBpcyBmaXJzdCB0cmFuc2Zvcm1lZCB3aXRoIGBmYCxcbiAgICAvLyB0aGVuIHNldCBhcyB0aGUgdmFsdWUgb2YgYW4gYElkZW50aXR5YC4gVGhpcyBpcyB0aGVuIG1hcHBlZCBvdmVyIHdpdGggdGhlXG4gICAgLy8gc2V0dGVyIGZ1bmN0aW9uIG9mIHRoZSBsZW5zLlxuICAgIHJldHVybiBsZW5zKGZ1bmN0aW9uKHkpIHsgcmV0dXJuIElkZW50aXR5KGYoeSkpOyB9KSh4KS52YWx1ZTtcbiAgfSk7XG59KCkpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFRha2VzIHR3byBhcmd1bWVudHMsIGBmc3RgIGFuZCBgc25kYCwgYW5kIHJldHVybnMgYFtmc3QsIHNuZF1gLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE4LjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIGEgLT4gYiAtPiAoYSxiKVxuICogQHBhcmFtIHsqfSBmc3RcbiAqIEBwYXJhbSB7Kn0gc25kXG4gKiBAcmV0dXJuIHtBcnJheX1cbiAqIEBzZWUgUi5vYmpPZiwgUi5vZlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIucGFpcignZm9vJywgJ2JhcicpOyAvLz0+IFsnZm9vJywgJ2JhciddXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBwYWlyKGZzdCwgc25kKSB7IHJldHVybiBbZnN0LCBzbmRdOyB9KTtcbiIsInZhciBfY29uY2F0ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY29uY2F0Jyk7XG52YXIgX2NyZWF0ZVBhcnRpYWxBcHBsaWNhdG9yID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3JlYXRlUGFydGlhbEFwcGxpY2F0b3InKTtcblxuXG4vKipcbiAqIFRha2VzIGEgZnVuY3Rpb24gYGZgIGFuZCBhIGxpc3Qgb2YgYXJndW1lbnRzLCBhbmQgcmV0dXJucyBhIGZ1bmN0aW9uIGBnYC5cbiAqIFdoZW4gYXBwbGllZCwgYGdgIHJldHVybnMgdGhlIHJlc3VsdCBvZiBhcHBseWluZyBgZmAgdG8gdGhlIGFyZ3VtZW50c1xuICogcHJvdmlkZWQgaW5pdGlhbGx5IGZvbGxvd2VkIGJ5IHRoZSBhcmd1bWVudHMgcHJvdmlkZWQgdG8gYGdgLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEwLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoKGEsIGIsIGMsIC4uLiwgbikgLT4geCkgLT4gW2EsIGIsIGMsIC4uLl0gLT4gKChkLCBlLCBmLCAuLi4sIG4pIC0+IHgpXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmXG4gKiBAcGFyYW0ge0FycmF5fSBhcmdzXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn1cbiAqIEBzZWUgUi5wYXJ0aWFsUmlnaHRcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgbXVsdGlwbHkyID0gKGEsIGIpID0+IGEgKiBiO1xuICogICAgICB2YXIgZG91YmxlID0gUi5wYXJ0aWFsKG11bHRpcGx5MiwgWzJdKTtcbiAqICAgICAgZG91YmxlKDIpOyAvLz0+IDRcbiAqXG4gKiAgICAgIHZhciBncmVldCA9IChzYWx1dGF0aW9uLCB0aXRsZSwgZmlyc3ROYW1lLCBsYXN0TmFtZSkgPT5cbiAqICAgICAgICBzYWx1dGF0aW9uICsgJywgJyArIHRpdGxlICsgJyAnICsgZmlyc3ROYW1lICsgJyAnICsgbGFzdE5hbWUgKyAnISc7XG4gKlxuICogICAgICB2YXIgc2F5SGVsbG8gPSBSLnBhcnRpYWwoZ3JlZXQsIFsnSGVsbG8nXSk7XG4gKiAgICAgIHZhciBzYXlIZWxsb1RvTXMgPSBSLnBhcnRpYWwoc2F5SGVsbG8sIFsnTXMuJ10pO1xuICogICAgICBzYXlIZWxsb1RvTXMoJ0phbmUnLCAnSm9uZXMnKTsgLy89PiAnSGVsbG8sIE1zLiBKYW5lIEpvbmVzISdcbiAqIEBzeW1iIFIucGFydGlhbChmLCBbYSwgYl0pKGMsIGQpID0gZihhLCBiLCBjLCBkKVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jcmVhdGVQYXJ0aWFsQXBwbGljYXRvcihfY29uY2F0KTtcbiIsInZhciBfY29uY2F0ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY29uY2F0Jyk7XG52YXIgX2NyZWF0ZVBhcnRpYWxBcHBsaWNhdG9yID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3JlYXRlUGFydGlhbEFwcGxpY2F0b3InKTtcbnZhciBmbGlwID0gcmVxdWlyZSgnLi9mbGlwJyk7XG5cblxuLyoqXG4gKiBUYWtlcyBhIGZ1bmN0aW9uIGBmYCBhbmQgYSBsaXN0IG9mIGFyZ3VtZW50cywgYW5kIHJldHVybnMgYSBmdW5jdGlvbiBgZ2AuXG4gKiBXaGVuIGFwcGxpZWQsIGBnYCByZXR1cm5zIHRoZSByZXN1bHQgb2YgYXBwbHlpbmcgYGZgIHRvIHRoZSBhcmd1bWVudHNcbiAqIHByb3ZpZGVkIHRvIGBnYCBmb2xsb3dlZCBieSB0aGUgYXJndW1lbnRzIHByb3ZpZGVkIGluaXRpYWxseS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xMC4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKChhLCBiLCBjLCAuLi4sIG4pIC0+IHgpIC0+IFtkLCBlLCBmLCAuLi4sIG5dIC0+ICgoYSwgYiwgYywgLi4uKSAtPiB4KVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZlxuICogQHBhcmFtIHtBcnJheX0gYXJnc1xuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAc2VlIFIucGFydGlhbFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBncmVldCA9IChzYWx1dGF0aW9uLCB0aXRsZSwgZmlyc3ROYW1lLCBsYXN0TmFtZSkgPT5cbiAqICAgICAgICBzYWx1dGF0aW9uICsgJywgJyArIHRpdGxlICsgJyAnICsgZmlyc3ROYW1lICsgJyAnICsgbGFzdE5hbWUgKyAnISc7XG4gKlxuICogICAgICB2YXIgZ3JlZXRNc0phbmVKb25lcyA9IFIucGFydGlhbFJpZ2h0KGdyZWV0LCBbJ01zLicsICdKYW5lJywgJ0pvbmVzJ10pO1xuICpcbiAqICAgICAgZ3JlZXRNc0phbmVKb25lcygnSGVsbG8nKTsgLy89PiAnSGVsbG8sIE1zLiBKYW5lIEpvbmVzISdcbiAqIEBzeW1iIFIucGFydGlhbFJpZ2h0KGYsIFthLCBiXSkoYywgZCkgPSBmKGMsIGQsIGEsIGIpXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2NyZWF0ZVBhcnRpYWxBcHBsaWNhdG9yKGZsaXAoX2NvbmNhdCkpO1xuIiwidmFyIGZpbHRlciA9IHJlcXVpcmUoJy4vZmlsdGVyJyk7XG52YXIganV4dCA9IHJlcXVpcmUoJy4vanV4dCcpO1xudmFyIHJlamVjdCA9IHJlcXVpcmUoJy4vcmVqZWN0Jyk7XG5cblxuLyoqXG4gKiBUYWtlcyBhIHByZWRpY2F0ZSBhbmQgYSBsaXN0IG9yIG90aGVyIFwiZmlsdGVyYWJsZVwiIG9iamVjdCBhbmQgcmV0dXJucyB0aGVcbiAqIHBhaXIgb2YgZmlsdGVyYWJsZSBvYmplY3RzIG9mIHRoZSBzYW1lIHR5cGUgb2YgZWxlbWVudHMgd2hpY2ggZG8gYW5kIGRvIG5vdFxuICogc2F0aXNmeSwgdGhlIHByZWRpY2F0ZSwgcmVzcGVjdGl2ZWx5LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuNFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgRmlsdGVyYWJsZSBmID0+IChhIC0+IEJvb2xlYW4pIC0+IGYgYSAtPiBbZiBhLCBmIGFdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkIEEgcHJlZGljYXRlIHRvIGRldGVybWluZSB3aGljaCBzaWRlIHRoZSBlbGVtZW50IGJlbG9uZ3MgdG8uXG4gKiBAcGFyYW0ge0FycmF5fSBmaWx0ZXJhYmxlIHRoZSBsaXN0IChvciBvdGhlciBmaWx0ZXJhYmxlKSB0byBwYXJ0aXRpb24uXG4gKiBAcmV0dXJuIHtBcnJheX0gQW4gYXJyYXksIGNvbnRhaW5pbmcgZmlyc3QgdGhlIHN1YnNldCBvZiBlbGVtZW50cyB0aGF0IHNhdGlzZnkgdGhlXG4gKiAgICAgICAgIHByZWRpY2F0ZSwgYW5kIHNlY29uZCB0aGUgc3Vic2V0IG9mIGVsZW1lbnRzIHRoYXQgZG8gbm90IHNhdGlzZnkuXG4gKiBAc2VlIFIuZmlsdGVyLCBSLnJlamVjdFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIucGFydGl0aW9uKFIuY29udGFpbnMoJ3MnKSwgWydzc3MnLCAndHR0JywgJ2ZvbycsICdiYXJzJ10pO1xuICogICAgICAvLyA9PiBbIFsgJ3NzcycsICdiYXJzJyBdLCAgWyAndHR0JywgJ2ZvbycgXSBdXG4gKlxuICogICAgICBSLnBhcnRpdGlvbihSLmNvbnRhaW5zKCdzJyksIHsgYTogJ3NzcycsIGI6ICd0dHQnLCBmb286ICdiYXJzJyB9KTtcbiAqICAgICAgLy8gPT4gWyB7IGE6ICdzc3MnLCBmb286ICdiYXJzJyB9LCB7IGI6ICd0dHQnIH0gIF1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBqdXh0KFtmaWx0ZXIsIHJlamVjdF0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHJpZXZlIHRoZSB2YWx1ZSBhdCBhIGdpdmVuIHBhdGguXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMi4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAdHlwZWRlZm4gSWR4ID0gU3RyaW5nIHwgSW50XG4gKiBAc2lnIFtJZHhdIC0+IHthfSAtPiBhIHwgVW5kZWZpbmVkXG4gKiBAcGFyYW0ge0FycmF5fSBwYXRoIFRoZSBwYXRoIHRvIHVzZS5cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byByZXRyaWV2ZSB0aGUgbmVzdGVkIHByb3BlcnR5IGZyb20uXG4gKiBAcmV0dXJuIHsqfSBUaGUgZGF0YSBhdCBgcGF0aGAuXG4gKiBAc2VlIFIucHJvcFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIucGF0aChbJ2EnLCAnYiddLCB7YToge2I6IDJ9fSk7IC8vPT4gMlxuICogICAgICBSLnBhdGgoWydhJywgJ2InXSwge2M6IHtiOiAyfX0pOyAvLz0+IHVuZGVmaW5lZFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gcGF0aChwYXRocywgb2JqKSB7XG4gIHZhciB2YWwgPSBvYmo7XG4gIHZhciBpZHggPSAwO1xuICB3aGlsZSAoaWR4IDwgcGF0aHMubGVuZ3RoKSB7XG4gICAgaWYgKHZhbCA9PSBudWxsKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHZhbCA9IHZhbFtwYXRoc1tpZHhdXTtcbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gdmFsO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xudmFyIGVxdWFscyA9IHJlcXVpcmUoJy4vZXF1YWxzJyk7XG52YXIgcGF0aCA9IHJlcXVpcmUoJy4vcGF0aCcpO1xuXG5cbi8qKlxuICogRGV0ZXJtaW5lcyB3aGV0aGVyIGEgbmVzdGVkIHBhdGggb24gYW4gb2JqZWN0IGhhcyBhIHNwZWNpZmljIHZhbHVlLCBpblxuICogYFIuZXF1YWxzYCB0ZXJtcy4gTW9zdCBsaWtlbHkgdXNlZCB0byBmaWx0ZXIgYSBsaXN0LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjcuMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAdHlwZWRlZm4gSWR4ID0gU3RyaW5nIHwgSW50XG4gKiBAc2lnIFtJZHhdIC0+IGEgLT4ge2F9IC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7QXJyYXl9IHBhdGggVGhlIHBhdGggb2YgdGhlIG5lc3RlZCBwcm9wZXJ0eSB0byB1c2VcbiAqIEBwYXJhbSB7Kn0gdmFsIFRoZSB2YWx1ZSB0byBjb21wYXJlIHRoZSBuZXN0ZWQgcHJvcGVydHkgd2l0aFxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIGNoZWNrIHRoZSBuZXN0ZWQgcHJvcGVydHkgaW5cbiAqIEByZXR1cm4ge0Jvb2xlYW59IGB0cnVlYCBpZiB0aGUgdmFsdWUgZXF1YWxzIHRoZSBuZXN0ZWQgb2JqZWN0IHByb3BlcnR5LFxuICogICAgICAgICBgZmFsc2VgIG90aGVyd2lzZS5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgdXNlcjEgPSB7IGFkZHJlc3M6IHsgemlwQ29kZTogOTAyMTAgfSB9O1xuICogICAgICB2YXIgdXNlcjIgPSB7IGFkZHJlc3M6IHsgemlwQ29kZTogNTU1NTUgfSB9O1xuICogICAgICB2YXIgdXNlcjMgPSB7IG5hbWU6ICdCb2InIH07XG4gKiAgICAgIHZhciB1c2VycyA9IFsgdXNlcjEsIHVzZXIyLCB1c2VyMyBdO1xuICogICAgICB2YXIgaXNGYW1vdXMgPSBSLnBhdGhFcShbJ2FkZHJlc3MnLCAnemlwQ29kZSddLCA5MDIxMCk7XG4gKiAgICAgIFIuZmlsdGVyKGlzRmFtb3VzLCB1c2Vycyk7IC8vPT4gWyB1c2VyMSBdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhmdW5jdGlvbiBwYXRoRXEoX3BhdGgsIHZhbCwgb2JqKSB7XG4gIHJldHVybiBlcXVhbHMocGF0aChfcGF0aCwgb2JqKSwgdmFsKTtcbn0pO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcbnZhciBkZWZhdWx0VG8gPSByZXF1aXJlKCcuL2RlZmF1bHRUbycpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuL3BhdGgnKTtcblxuXG4vKipcbiAqIElmIHRoZSBnaXZlbiwgbm9uLW51bGwgb2JqZWN0IGhhcyBhIHZhbHVlIGF0IHRoZSBnaXZlbiBwYXRoLCByZXR1cm5zIHRoZVxuICogdmFsdWUgYXQgdGhhdCBwYXRoLiBPdGhlcndpc2UgcmV0dXJucyB0aGUgcHJvdmlkZWQgZGVmYXVsdCB2YWx1ZS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xOC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAdHlwZWRlZm4gSWR4ID0gU3RyaW5nIHwgSW50XG4gKiBAc2lnIGEgLT4gW0lkeF0gLT4ge2F9IC0+IGFcbiAqIEBwYXJhbSB7Kn0gZCBUaGUgZGVmYXVsdCB2YWx1ZS5cbiAqIEBwYXJhbSB7QXJyYXl9IHAgVGhlIHBhdGggdG8gdXNlLlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHJldHJpZXZlIHRoZSBuZXN0ZWQgcHJvcGVydHkgZnJvbS5cbiAqIEByZXR1cm4geyp9IFRoZSBkYXRhIGF0IGBwYXRoYCBvZiB0aGUgc3VwcGxpZWQgb2JqZWN0IG9yIHRoZSBkZWZhdWx0IHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIucGF0aE9yKCdOL0EnLCBbJ2EnLCAnYiddLCB7YToge2I6IDJ9fSk7IC8vPT4gMlxuICogICAgICBSLnBhdGhPcignTi9BJywgWydhJywgJ2InXSwge2M6IHtiOiAyfX0pOyAvLz0+IFwiTi9BXCJcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIHBhdGhPcihkLCBwLCBvYmopIHtcbiAgcmV0dXJuIGRlZmF1bHRUbyhkLCBwYXRoKHAsIG9iaikpO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xudmFyIHBhdGggPSByZXF1aXJlKCcuL3BhdGgnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBzcGVjaWZpZWQgb2JqZWN0IHByb3BlcnR5IGF0IGdpdmVuIHBhdGggc2F0aXNmaWVzIHRoZVxuICogZ2l2ZW4gcHJlZGljYXRlOyBgZmFsc2VgIG90aGVyd2lzZS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xOS4wXG4gKiBAY2F0ZWdvcnkgTG9naWNcbiAqIEB0eXBlZGVmbiBJZHggPSBTdHJpbmcgfCBJbnRcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gW0lkeF0gLT4ge2F9IC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRcbiAqIEBwYXJhbSB7QXJyYXl9IHByb3BQYXRoXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBzZWUgUi5wcm9wU2F0aXNmaWVzLCBSLnBhdGhcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnBhdGhTYXRpc2ZpZXMoeSA9PiB5ID4gMCwgWyd4JywgJ3knXSwge3g6IHt5OiAyfX0pOyAvLz0+IHRydWVcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIHBhdGhTYXRpc2ZpZXMocHJlZCwgcHJvcFBhdGgsIG9iaikge1xuICByZXR1cm4gcHJvcFBhdGgubGVuZ3RoID4gMCAmJiBwcmVkKHBhdGgocHJvcFBhdGgsIG9iaikpO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIHBhcnRpYWwgY29weSBvZiBhbiBvYmplY3QgY29udGFpbmluZyBvbmx5IHRoZSBrZXlzIHNwZWNpZmllZC4gSWZcbiAqIHRoZSBrZXkgZG9lcyBub3QgZXhpc3QsIHRoZSBwcm9wZXJ0eSBpcyBpZ25vcmVkLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyBba10gLT4ge2s6IHZ9IC0+IHtrOiB2fVxuICogQHBhcmFtIHtBcnJheX0gbmFtZXMgYW4gYXJyYXkgb2YgU3RyaW5nIHByb3BlcnR5IG5hbWVzIHRvIGNvcHkgb250byBhIG5ldyBvYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBjb3B5IGZyb21cbiAqIEByZXR1cm4ge09iamVjdH0gQSBuZXcgb2JqZWN0IHdpdGggb25seSBwcm9wZXJ0aWVzIGZyb20gYG5hbWVzYCBvbiBpdC5cbiAqIEBzZWUgUi5vbWl0LCBSLnByb3BzXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5waWNrKFsnYScsICdkJ10sIHthOiAxLCBiOiAyLCBjOiAzLCBkOiA0fSk7IC8vPT4ge2E6IDEsIGQ6IDR9XG4gKiAgICAgIFIucGljayhbJ2EnLCAnZScsICdmJ10sIHthOiAxLCBiOiAyLCBjOiAzLCBkOiA0fSk7IC8vPT4ge2E6IDF9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBwaWNrKG5hbWVzLCBvYmopIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICB2YXIgaWR4ID0gMDtcbiAgd2hpbGUgKGlkeCA8IG5hbWVzLmxlbmd0aCkge1xuICAgIGlmIChuYW1lc1tpZHhdIGluIG9iaikge1xuICAgICAgcmVzdWx0W25hbWVzW2lkeF1dID0gb2JqW25hbWVzW2lkeF1dO1xuICAgIH1cbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogU2ltaWxhciB0byBgcGlja2AgZXhjZXB0IHRoYXQgdGhpcyBvbmUgaW5jbHVkZXMgYSBga2V5OiB1bmRlZmluZWRgIHBhaXIgZm9yXG4gKiBwcm9wZXJ0aWVzIHRoYXQgZG9uJ3QgZXhpc3QuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIFtrXSAtPiB7azogdn0gLT4ge2s6IHZ9XG4gKiBAcGFyYW0ge0FycmF5fSBuYW1lcyBhbiBhcnJheSBvZiBTdHJpbmcgcHJvcGVydHkgbmFtZXMgdG8gY29weSBvbnRvIGEgbmV3IG9iamVjdFxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIGNvcHkgZnJvbVxuICogQHJldHVybiB7T2JqZWN0fSBBIG5ldyBvYmplY3Qgd2l0aCBvbmx5IHByb3BlcnRpZXMgZnJvbSBgbmFtZXNgIG9uIGl0LlxuICogQHNlZSBSLnBpY2tcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnBpY2tBbGwoWydhJywgJ2QnXSwge2E6IDEsIGI6IDIsIGM6IDMsIGQ6IDR9KTsgLy89PiB7YTogMSwgZDogNH1cbiAqICAgICAgUi5waWNrQWxsKFsnYScsICdlJywgJ2YnXSwge2E6IDEsIGI6IDIsIGM6IDMsIGQ6IDR9KTsgLy89PiB7YTogMSwgZTogdW5kZWZpbmVkLCBmOiB1bmRlZmluZWR9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBwaWNrQWxsKG5hbWVzLCBvYmopIHtcbiAgdmFyIHJlc3VsdCA9IHt9O1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGxlbiA9IG5hbWVzLmxlbmd0aDtcbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIHZhciBuYW1lID0gbmFtZXNbaWR4XTtcbiAgICByZXN1bHRbbmFtZV0gPSBvYmpbbmFtZV07XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBwYXJ0aWFsIGNvcHkgb2YgYW4gb2JqZWN0IGNvbnRhaW5pbmcgb25seSB0aGUga2V5cyB0aGF0IHNhdGlzZnlcbiAqIHRoZSBzdXBwbGllZCBwcmVkaWNhdGUuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnICh2LCBrIC0+IEJvb2xlYW4pIC0+IHtrOiB2fSAtPiB7azogdn1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWQgQSBwcmVkaWNhdGUgdG8gZGV0ZXJtaW5lIHdoZXRoZXIgb3Igbm90IGEga2V5XG4gKiAgICAgICAgc2hvdWxkIGJlIGluY2x1ZGVkIG9uIHRoZSBvdXRwdXQgb2JqZWN0LlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIGNvcHkgZnJvbVxuICogQHJldHVybiB7T2JqZWN0fSBBIG5ldyBvYmplY3Qgd2l0aCBvbmx5IHByb3BlcnRpZXMgdGhhdCBzYXRpc2Z5IGBwcmVkYFxuICogICAgICAgICBvbiBpdC5cbiAqIEBzZWUgUi5waWNrLCBSLmZpbHRlclxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBpc1VwcGVyQ2FzZSA9ICh2YWwsIGtleSkgPT4ga2V5LnRvVXBwZXJDYXNlKCkgPT09IGtleTtcbiAqICAgICAgUi5waWNrQnkoaXNVcHBlckNhc2UsIHthOiAxLCBiOiAyLCBBOiAzLCBCOiA0fSk7IC8vPT4ge0E6IDMsIEI6IDR9XG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBwaWNrQnkodGVzdCwgb2JqKSB7XG4gIHZhciByZXN1bHQgPSB7fTtcbiAgZm9yICh2YXIgcHJvcCBpbiBvYmopIHtcbiAgICBpZiAodGVzdChvYmpbcHJvcF0sIHByb3AsIG9iaikpIHtcbiAgICAgIHJlc3VsdFtwcm9wXSA9IG9ialtwcm9wXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuIiwidmFyIF9hcml0eSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2FyaXR5Jyk7XG52YXIgX3BpcGUgPSByZXF1aXJlKCcuL2ludGVybmFsL19waXBlJyk7XG52YXIgcmVkdWNlID0gcmVxdWlyZSgnLi9yZWR1Y2UnKTtcbnZhciB0YWlsID0gcmVxdWlyZSgnLi90YWlsJyk7XG5cblxuLyoqXG4gKiBQZXJmb3JtcyBsZWZ0LXRvLXJpZ2h0IGZ1bmN0aW9uIGNvbXBvc2l0aW9uLiBUaGUgbGVmdG1vc3QgZnVuY3Rpb24gbWF5IGhhdmVcbiAqIGFueSBhcml0eTsgdGhlIHJlbWFpbmluZyBmdW5jdGlvbnMgbXVzdCBiZSB1bmFyeS5cbiAqXG4gKiBJbiBzb21lIGxpYnJhcmllcyB0aGlzIGZ1bmN0aW9uIGlzIG5hbWVkIGBzZXF1ZW5jZWAuXG4gKlxuICogKipOb3RlOioqIFRoZSByZXN1bHQgb2YgcGlwZSBpcyBub3QgYXV0b21hdGljYWxseSBjdXJyaWVkLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnICgoKGEsIGIsIC4uLiwgbikgLT4gbyksIChvIC0+IHApLCAuLi4sICh4IC0+IHkpLCAoeSAtPiB6KSkgLT4gKChhLCBiLCAuLi4sIG4pIC0+IHopXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBmdW5jdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQHNlZSBSLmNvbXBvc2VcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgZiA9IFIucGlwZShNYXRoLnBvdywgUi5uZWdhdGUsIFIuaW5jKTtcbiAqXG4gKiAgICAgIGYoMywgNCk7IC8vIC0oM140KSArIDFcbiAqIEBzeW1iIFIucGlwZShmLCBnLCBoKShhLCBiKSA9IGgoZyhmKGEsIGIpKSlcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwaXBlKCkge1xuICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcigncGlwZSByZXF1aXJlcyBhdCBsZWFzdCBvbmUgYXJndW1lbnQnKTtcbiAgfVxuICByZXR1cm4gX2FyaXR5KGFyZ3VtZW50c1swXS5sZW5ndGgsXG4gICAgICAgICAgICAgICAgcmVkdWNlKF9waXBlLCBhcmd1bWVudHNbMF0sIHRhaWwoYXJndW1lbnRzKSkpO1xufTtcbiIsInZhciBjb21wb3NlSyA9IHJlcXVpcmUoJy4vY29tcG9zZUsnKTtcbnZhciByZXZlcnNlID0gcmVxdWlyZSgnLi9yZXZlcnNlJyk7XG5cbi8qKlxuICogUmV0dXJucyB0aGUgbGVmdC10by1yaWdodCBLbGVpc2xpIGNvbXBvc2l0aW9uIG9mIHRoZSBwcm92aWRlZCBmdW5jdGlvbnMsXG4gKiBlYWNoIG9mIHdoaWNoIG11c3QgcmV0dXJuIGEgdmFsdWUgb2YgYSB0eXBlIHN1cHBvcnRlZCBieSBbYGNoYWluYF0oI2NoYWluKS5cbiAqXG4gKiBgUi5waXBlSyhmLCBnLCBoKWAgaXMgZXF1aXZhbGVudCB0byBgUi5waXBlKFIuY2hhaW4oZiksIFIuY2hhaW4oZyksIFIuY2hhaW4oaCkpYC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNi4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgQ2hhaW4gbSA9PiAoKGEgLT4gbSBiKSwgKGIgLT4gbSBjKSwgLi4uLCAoeSAtPiBtIHopKSAtPiAoYSAtPiBtIHopXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufVxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAc2VlIFIuY29tcG9zZUtcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICAvLyAgcGFyc2VKc29uIDo6IFN0cmluZyAtPiBNYXliZSAqXG4gKiAgICAgIC8vICBnZXQgOjogU3RyaW5nIC0+IE9iamVjdCAtPiBNYXliZSAqXG4gKlxuICogICAgICAvLyAgZ2V0U3RhdGVDb2RlIDo6IE1heWJlIFN0cmluZyAtPiBNYXliZSBTdHJpbmdcbiAqICAgICAgdmFyIGdldFN0YXRlQ29kZSA9IFIucGlwZUsoXG4gKiAgICAgICAgcGFyc2VKc29uLFxuICogICAgICAgIGdldCgndXNlcicpLFxuICogICAgICAgIGdldCgnYWRkcmVzcycpLFxuICogICAgICAgIGdldCgnc3RhdGUnKSxcbiAqICAgICAgICBSLmNvbXBvc2UoTWF5YmUub2YsIFIudG9VcHBlcilcbiAqICAgICAgKTtcbiAqXG4gKiAgICAgIGdldFN0YXRlQ29kZSgne1widXNlclwiOntcImFkZHJlc3NcIjp7XCJzdGF0ZVwiOlwibnlcIn19fScpO1xuICogICAgICAvLz0+IEp1c3QoJ05ZJylcbiAqICAgICAgZ2V0U3RhdGVDb2RlKCdbSW52YWxpZCBKU09OXScpO1xuICogICAgICAvLz0+IE5vdGhpbmcoKVxuICogQHN5bWIgUi5waXBlSyhmLCBnLCBoKShhKSA9IFIuY2hhaW4oaCwgUi5jaGFpbihnLCBmKGEpKSlcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwaXBlSygpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3BpcGVLIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBhcmd1bWVudCcpO1xuICB9XG4gIHJldHVybiBjb21wb3NlSy5hcHBseSh0aGlzLCByZXZlcnNlKGFyZ3VtZW50cykpO1xufTtcbiIsInZhciBfYXJpdHkgPSByZXF1aXJlKCcuL2ludGVybmFsL19hcml0eScpO1xudmFyIF9waXBlUCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3BpcGVQJyk7XG52YXIgcmVkdWNlID0gcmVxdWlyZSgnLi9yZWR1Y2UnKTtcbnZhciB0YWlsID0gcmVxdWlyZSgnLi90YWlsJyk7XG5cblxuLyoqXG4gKiBQZXJmb3JtcyBsZWZ0LXRvLXJpZ2h0IGNvbXBvc2l0aW9uIG9mIG9uZSBvciBtb3JlIFByb21pc2UtcmV0dXJuaW5nXG4gKiBmdW5jdGlvbnMuIFRoZSBsZWZ0bW9zdCBmdW5jdGlvbiBtYXkgaGF2ZSBhbnkgYXJpdHk7IHRoZSByZW1haW5pbmcgZnVuY3Rpb25zXG4gKiBtdXN0IGJlIHVuYXJ5LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEwLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoKGEgLT4gUHJvbWlzZSBiKSwgKGIgLT4gUHJvbWlzZSBjKSwgLi4uLCAoeSAtPiBQcm9taXNlIHopKSAtPiAoYSAtPiBQcm9taXNlIHopXG4gKiBAcGFyYW0gey4uLkZ1bmN0aW9ufSBmdW5jdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufVxuICogQHNlZSBSLmNvbXBvc2VQXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgLy8gIGZvbGxvd2Vyc0ZvclVzZXIgOjogU3RyaW5nIC0+IFByb21pc2UgW1VzZXJdXG4gKiAgICAgIHZhciBmb2xsb3dlcnNGb3JVc2VyID0gUi5waXBlUChkYi5nZXRVc2VyQnlJZCwgZGIuZ2V0Rm9sbG93ZXJzKTtcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiBwaXBlUCgpIHtcbiAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ3BpcGVQIHJlcXVpcmVzIGF0IGxlYXN0IG9uZSBhcmd1bWVudCcpO1xuICB9XG4gIHJldHVybiBfYXJpdHkoYXJndW1lbnRzWzBdLmxlbmd0aCxcbiAgICAgICAgICAgICAgICByZWR1Y2UoX3BpcGVQLCBhcmd1bWVudHNbMF0sIHRhaWwoYXJndW1lbnRzKSkpO1xufTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgbWFwID0gcmVxdWlyZSgnLi9tYXAnKTtcbnZhciBwcm9wID0gcmVxdWlyZSgnLi9wcm9wJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGxpc3QgYnkgcGx1Y2tpbmcgdGhlIHNhbWUgbmFtZWQgcHJvcGVydHkgb2ZmIGFsbCBvYmplY3RzIGluXG4gKiB0aGUgbGlzdCBzdXBwbGllZC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIGsgLT4gW3trOiB2fV0gLT4gW3ZdXG4gKiBAcGFyYW0ge051bWJlcnxTdHJpbmd9IGtleSBUaGUga2V5IG5hbWUgdG8gcGx1Y2sgb2ZmIG9mIGVhY2ggb2JqZWN0LlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgYXJyYXkgdG8gY29uc2lkZXIuXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIGxpc3Qgb2YgdmFsdWVzIGZvciB0aGUgZ2l2ZW4ga2V5LlxuICogQHNlZSBSLnByb3BzXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5wbHVjaygnYScpKFt7YTogMX0sIHthOiAyfV0pOyAvLz0+IFsxLCAyXVxuICogICAgICBSLnBsdWNrKDApKFtbMSwgMl0sIFszLCA0XV0pOyAgIC8vPT4gWzEsIDNdXG4gKiBAc3ltYiBSLnBsdWNrKCd4JywgW3t4OiAxLCB5OiAyfSwge3g6IDMsIHk6IDR9LCB7eDogNSwgeTogNn1dKSA9IFsxLCAzLCA1XVxuICogQHN5bWIgUi5wbHVjaygwLCBbWzEsIDJdLCBbMywgNF0sIFs1LCA2XV0pID0gWzEsIDMsIDVdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBwbHVjayhwLCBsaXN0KSB7XG4gIHJldHVybiBtYXAocHJvcChwKSwgbGlzdCk7XG59KTtcbiIsInZhciBfY29uY2F0ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY29uY2F0Jyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBsaXN0IHdpdGggdGhlIGdpdmVuIGVsZW1lbnQgYXQgdGhlIGZyb250LCBmb2xsb3dlZCBieSB0aGVcbiAqIGNvbnRlbnRzIG9mIHRoZSBsaXN0LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgYSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0geyp9IGVsIFRoZSBpdGVtIHRvIGFkZCB0byB0aGUgaGVhZCBvZiB0aGUgb3V0cHV0IGxpc3QuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBhcnJheSB0byBhZGQgdG8gdGhlIHRhaWwgb2YgdGhlIG91dHB1dCBsaXN0LlxuICogQHJldHVybiB7QXJyYXl9IEEgbmV3IGFycmF5LlxuICogQHNlZSBSLmFwcGVuZFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIucHJlcGVuZCgnZmVlJywgWydmaScsICdmbycsICdmdW0nXSk7IC8vPT4gWydmZWUnLCAnZmknLCAnZm8nLCAnZnVtJ11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHByZXBlbmQoZWwsIGxpc3QpIHtcbiAgcmV0dXJuIF9jb25jYXQoW2VsXSwgbGlzdCk7XG59KTtcbiIsInZhciBtdWx0aXBseSA9IHJlcXVpcmUoJy4vbXVsdGlwbHknKTtcbnZhciByZWR1Y2UgPSByZXF1aXJlKCcuL3JlZHVjZScpO1xuXG5cbi8qKlxuICogTXVsdGlwbGllcyB0b2dldGhlciBhbGwgdGhlIGVsZW1lbnRzIG9mIGEgbGlzdC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBNYXRoXG4gKiBAc2lnIFtOdW1iZXJdIC0+IE51bWJlclxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBBbiBhcnJheSBvZiBudW1iZXJzXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSBwcm9kdWN0IG9mIGFsbCB0aGUgbnVtYmVycyBpbiB0aGUgbGlzdC5cbiAqIEBzZWUgUi5yZWR1Y2VcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnByb2R1Y3QoWzIsNCw2LDgsMTAwLDFdKTsgLy89PiAzODQwMFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjZShtdWx0aXBseSwgMSk7XG4iLCJ2YXIgX21hcCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX21hcCcpO1xudmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xudmFyIHBpY2tBbGwgPSByZXF1aXJlKCcuL3BpY2tBbGwnKTtcbnZhciB1c2VXaXRoID0gcmVxdWlyZSgnLi91c2VXaXRoJyk7XG5cblxuLyoqXG4gKiBSZWFzb25hYmxlIGFuYWxvZyB0byBTUUwgYHNlbGVjdGAgc3RhdGVtZW50LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnIFtrXSAtPiBbe2s6IHZ9XSAtPiBbe2s6IHZ9XVxuICogQHBhcmFtIHtBcnJheX0gcHJvcHMgVGhlIHByb3BlcnR5IG5hbWVzIHRvIHByb2plY3RcbiAqIEBwYXJhbSB7QXJyYXl9IG9ianMgVGhlIG9iamVjdHMgdG8gcXVlcnlcbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBvZiBvYmplY3RzIHdpdGgganVzdCB0aGUgYHByb3BzYCBwcm9wZXJ0aWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBhYmJ5ID0ge25hbWU6ICdBYmJ5JywgYWdlOiA3LCBoYWlyOiAnYmxvbmQnLCBncmFkZTogMn07XG4gKiAgICAgIHZhciBmcmVkID0ge25hbWU6ICdGcmVkJywgYWdlOiAxMiwgaGFpcjogJ2Jyb3duJywgZ3JhZGU6IDd9O1xuICogICAgICB2YXIga2lkcyA9IFthYmJ5LCBmcmVkXTtcbiAqICAgICAgUi5wcm9qZWN0KFsnbmFtZScsICdncmFkZSddLCBraWRzKTsgLy89PiBbe25hbWU6ICdBYmJ5JywgZ3JhZGU6IDJ9LCB7bmFtZTogJ0ZyZWQnLCBncmFkZTogN31dXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gdXNlV2l0aChfbWFwLCBbcGlja0FsbCwgaWRlbnRpdHldKTsgLy8gcGFzc2luZyBgaWRlbnRpdHlgIGdpdmVzIGNvcnJlY3QgYXJpdHlcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gdGhhdCB3aGVuIHN1cHBsaWVkIGFuIG9iamVjdCByZXR1cm5zIHRoZSBpbmRpY2F0ZWRcbiAqIHByb3BlcnR5IG9mIHRoYXQgb2JqZWN0LCBpZiBpdCBleGlzdHMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIHMgLT4ge3M6IGF9IC0+IGEgfCBVbmRlZmluZWRcbiAqIEBwYXJhbSB7U3RyaW5nfSBwIFRoZSBwcm9wZXJ0eSBuYW1lXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcXVlcnlcbiAqIEByZXR1cm4geyp9IFRoZSB2YWx1ZSBhdCBgb2JqLnBgLlxuICogQHNlZSBSLnBhdGhcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnByb3AoJ3gnLCB7eDogMTAwfSk7IC8vPT4gMTAwXG4gKiAgICAgIFIucHJvcCgneCcsIHt9KTsgLy89PiB1bmRlZmluZWRcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHByb3AocCwgb2JqKSB7IHJldHVybiBvYmpbcF07IH0pO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcbnZhciBlcXVhbHMgPSByZXF1aXJlKCcuL2VxdWFscycpO1xuXG5cbi8qKlxuICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIHNwZWNpZmllZCBvYmplY3QgcHJvcGVydHkgaXMgZXF1YWwsIGluIGBSLmVxdWFsc2BcbiAqIHRlcm1zLCB0byB0aGUgZ2l2ZW4gdmFsdWU7IGBmYWxzZWAgb3RoZXJ3aXNlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnIFN0cmluZyAtPiBhIC0+IE9iamVjdCAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHsqfSB2YWxcbiAqIEBwYXJhbSB7Kn0gb2JqXG4gKiBAcmV0dXJuIHtCb29sZWFufVxuICogQHNlZSBSLmVxdWFscywgUi5wcm9wU2F0aXNmaWVzXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGFiYnkgPSB7bmFtZTogJ0FiYnknLCBhZ2U6IDcsIGhhaXI6ICdibG9uZCd9O1xuICogICAgICB2YXIgZnJlZCA9IHtuYW1lOiAnRnJlZCcsIGFnZTogMTIsIGhhaXI6ICdicm93bid9O1xuICogICAgICB2YXIgcnVzdHkgPSB7bmFtZTogJ1J1c3R5JywgYWdlOiAxMCwgaGFpcjogJ2Jyb3duJ307XG4gKiAgICAgIHZhciBhbG9pcyA9IHtuYW1lOiAnQWxvaXMnLCBhZ2U6IDE1LCBkaXNwb3NpdGlvbjogJ3N1cmx5J307XG4gKiAgICAgIHZhciBraWRzID0gW2FiYnksIGZyZWQsIHJ1c3R5LCBhbG9pc107XG4gKiAgICAgIHZhciBoYXNCcm93bkhhaXIgPSBSLnByb3BFcSgnaGFpcicsICdicm93bicpO1xuICogICAgICBSLmZpbHRlcihoYXNCcm93bkhhaXIsIGtpZHMpOyAvLz0+IFtmcmVkLCBydXN0eV1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIHByb3BFcShuYW1lLCB2YWwsIG9iaikge1xuICByZXR1cm4gZXF1YWxzKHZhbCwgb2JqW25hbWVdKTtcbn0pO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcbnZhciBpcyA9IHJlcXVpcmUoJy4vaXMnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBzcGVjaWZpZWQgb2JqZWN0IHByb3BlcnR5IGlzIG9mIHRoZSBnaXZlbiB0eXBlO1xuICogYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTYuMFxuICogQGNhdGVnb3J5IFR5cGVcbiAqIEBzaWcgVHlwZSAtPiBTdHJpbmcgLT4gT2JqZWN0IC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHR5cGVcbiAqIEBwYXJhbSB7U3RyaW5nfSBuYW1lXG4gKiBAcGFyYW0geyp9IG9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBzZWUgUi5pcywgUi5wcm9wU2F0aXNmaWVzXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5wcm9wSXMoTnVtYmVyLCAneCcsIHt4OiAxLCB5OiAyfSk7ICAvLz0+IHRydWVcbiAqICAgICAgUi5wcm9wSXMoTnVtYmVyLCAneCcsIHt4OiAnZm9vJ30pOyAgICAvLz0+IGZhbHNlXG4gKiAgICAgIFIucHJvcElzKE51bWJlciwgJ3gnLCB7fSk7ICAgICAgICAgICAgLy89PiBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gcHJvcElzKHR5cGUsIG5hbWUsIG9iaikge1xuICByZXR1cm4gaXModHlwZSwgb2JqW25hbWVdKTtcbn0pO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcbnZhciBfaGFzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faGFzJyk7XG5cblxuLyoqXG4gKiBJZiB0aGUgZ2l2ZW4sIG5vbi1udWxsIG9iamVjdCBoYXMgYW4gb3duIHByb3BlcnR5IHdpdGggdGhlIHNwZWNpZmllZCBuYW1lLFxuICogcmV0dXJucyB0aGUgdmFsdWUgb2YgdGhhdCBwcm9wZXJ0eS4gT3RoZXJ3aXNlIHJldHVybnMgdGhlIHByb3ZpZGVkIGRlZmF1bHRcbiAqIHZhbHVlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjYuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyBhIC0+IFN0cmluZyAtPiBPYmplY3QgLT4gYVxuICogQHBhcmFtIHsqfSB2YWwgVGhlIGRlZmF1bHQgdmFsdWUuXG4gKiBAcGFyYW0ge1N0cmluZ30gcCBUaGUgbmFtZSBvZiB0aGUgcHJvcGVydHkgdG8gcmV0dXJuLlxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIHF1ZXJ5LlxuICogQHJldHVybiB7Kn0gVGhlIHZhbHVlIG9mIGdpdmVuIHByb3BlcnR5IG9mIHRoZSBzdXBwbGllZCBvYmplY3Qgb3IgdGhlIGRlZmF1bHQgdmFsdWUuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGFsaWNlID0ge1xuICogICAgICAgIG5hbWU6ICdBTElDRScsXG4gKiAgICAgICAgYWdlOiAxMDFcbiAqICAgICAgfTtcbiAqICAgICAgdmFyIGZhdm9yaXRlID0gUi5wcm9wKCdmYXZvcml0ZUxpYnJhcnknKTtcbiAqICAgICAgdmFyIGZhdm9yaXRlV2l0aERlZmF1bHQgPSBSLnByb3BPcignUmFtZGEnLCAnZmF2b3JpdGVMaWJyYXJ5Jyk7XG4gKlxuICogICAgICBmYXZvcml0ZShhbGljZSk7ICAvLz0+IHVuZGVmaW5lZFxuICogICAgICBmYXZvcml0ZVdpdGhEZWZhdWx0KGFsaWNlKTsgIC8vPT4gJ1JhbWRhJ1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gcHJvcE9yKHZhbCwgcCwgb2JqKSB7XG4gIHJldHVybiAob2JqICE9IG51bGwgJiYgX2hhcyhwLCBvYmopKSA/IG9ialtwXSA6IHZhbDtcbn0pO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBzcGVjaWZpZWQgb2JqZWN0IHByb3BlcnR5IHNhdGlzZmllcyB0aGUgZ2l2ZW5cbiAqIHByZWRpY2F0ZTsgYGZhbHNlYCBvdGhlcndpc2UuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTYuMFxuICogQGNhdGVnb3J5IExvZ2ljXG4gKiBAc2lnIChhIC0+IEJvb2xlYW4pIC0+IFN0cmluZyAtPiB7U3RyaW5nOiBhfSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkXG4gKiBAcGFyYW0ge1N0cmluZ30gbmFtZVxuICogQHBhcmFtIHsqfSBvYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAc2VlIFIucHJvcEVxLCBSLnByb3BJc1xuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIucHJvcFNhdGlzZmllcyh4ID0+IHggPiAwLCAneCcsIHt4OiAxLCB5OiAyfSk7IC8vPT4gdHJ1ZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gcHJvcFNhdGlzZmllcyhwcmVkLCBuYW1lLCBvYmopIHtcbiAgcmV0dXJuIHByZWQob2JqW25hbWVdKTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIEFjdHMgYXMgbXVsdGlwbGUgYHByb3BgOiBhcnJheSBvZiBrZXlzIGluLCBhcnJheSBvZiB2YWx1ZXMgb3V0LiBQcmVzZXJ2ZXNcbiAqIG9yZGVyLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyBba10gLT4ge2s6IHZ9IC0+IFt2XVxuICogQHBhcmFtIHtBcnJheX0gcHMgVGhlIHByb3BlcnR5IG5hbWVzIHRvIGZldGNoXG4gKiBAcGFyYW0ge09iamVjdH0gb2JqIFRoZSBvYmplY3QgdG8gcXVlcnlcbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgY29ycmVzcG9uZGluZyB2YWx1ZXMgb3IgcGFydGlhbGx5IGFwcGxpZWQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5wcm9wcyhbJ3gnLCAneSddLCB7eDogMSwgeTogMn0pOyAvLz0+IFsxLCAyXVxuICogICAgICBSLnByb3BzKFsnYycsICdhJywgJ2InXSwge2I6IDIsIGE6IDF9KTsgLy89PiBbdW5kZWZpbmVkLCAxLCAyXVxuICpcbiAqICAgICAgdmFyIGZ1bGxOYW1lID0gUi5jb21wb3NlKFIuam9pbignICcpLCBSLnByb3BzKFsnZmlyc3QnLCAnbGFzdCddKSk7XG4gKiAgICAgIGZ1bGxOYW1lKHtsYXN0OiAnQnVsbGV0LVRvb3RoJywgYWdlOiAzMywgZmlyc3Q6ICdUb255J30pOyAvLz0+ICdUb255IEJ1bGxldC1Ub290aCdcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHByb3BzKHBzLCBvYmopIHtcbiAgdmFyIGxlbiA9IHBzLmxlbmd0aDtcbiAgdmFyIG91dCA9IFtdO1xuICB2YXIgaWR4ID0gMDtcblxuICB3aGlsZSAoaWR4IDwgbGVuKSB7XG4gICAgb3V0W2lkeF0gPSBvYmpbcHNbaWR4XV07XG4gICAgaWR4ICs9IDE7XG4gIH1cblxuICByZXR1cm4gb3V0O1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9pc051bWJlciA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2lzTnVtYmVyJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgbGlzdCBvZiBudW1iZXJzIGZyb20gYGZyb21gIChpbmNsdXNpdmUpIHRvIGB0b2AgKGV4Y2x1c2l2ZSkuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBOdW1iZXIgLT4gTnVtYmVyIC0+IFtOdW1iZXJdXG4gKiBAcGFyYW0ge051bWJlcn0gZnJvbSBUaGUgZmlyc3QgbnVtYmVyIGluIHRoZSBsaXN0LlxuICogQHBhcmFtIHtOdW1iZXJ9IHRvIE9uZSBtb3JlIHRoYW4gdGhlIGxhc3QgbnVtYmVyIGluIHRoZSBsaXN0LlxuICogQHJldHVybiB7QXJyYXl9IFRoZSBsaXN0IG9mIG51bWJlcnMgaW4gdHRoZSBzZXQgYFthLCBiKWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5yYW5nZSgxLCA1KTsgICAgLy89PiBbMSwgMiwgMywgNF1cbiAqICAgICAgUi5yYW5nZSg1MCwgNTMpOyAgLy89PiBbNTAsIDUxLCA1Ml1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHJhbmdlKGZyb20sIHRvKSB7XG4gIGlmICghKF9pc051bWJlcihmcm9tKSAmJiBfaXNOdW1iZXIodG8pKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ0JvdGggYXJndW1lbnRzIHRvIHJhbmdlIG11c3QgYmUgbnVtYmVycycpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIG4gPSBmcm9tO1xuICB3aGlsZSAobiA8IHRvKSB7XG4gICAgcmVzdWx0LnB1c2gobik7XG4gICAgbiArPSAxO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG52YXIgX3JlZHVjZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3JlZHVjZScpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIHNpbmdsZSBpdGVtIGJ5IGl0ZXJhdGluZyB0aHJvdWdoIHRoZSBsaXN0LCBzdWNjZXNzaXZlbHkgY2FsbGluZ1xuICogdGhlIGl0ZXJhdG9yIGZ1bmN0aW9uIGFuZCBwYXNzaW5nIGl0IGFuIGFjY3VtdWxhdG9yIHZhbHVlIGFuZCB0aGUgY3VycmVudFxuICogdmFsdWUgZnJvbSB0aGUgYXJyYXksIGFuZCB0aGVuIHBhc3NpbmcgdGhlIHJlc3VsdCB0byB0aGUgbmV4dCBjYWxsLlxuICpcbiAqIFRoZSBpdGVyYXRvciBmdW5jdGlvbiByZWNlaXZlcyB0d28gdmFsdWVzOiAqKGFjYywgdmFsdWUpKi4gSXQgbWF5IHVzZVxuICogYFIucmVkdWNlZGAgdG8gc2hvcnRjdXQgdGhlIGl0ZXJhdGlvbi5cbiAqXG4gKiBUaGUgYXJndW1lbnRzJyBvcmRlciBvZiBgcmVkdWNlUmlnaHRgJ3MgaXRlcmF0b3IgZnVuY3Rpb24gaXMgKih2YWx1ZSwgYWNjKSouXG4gKlxuICogTm90ZTogYFIucmVkdWNlYCBkb2VzIG5vdCBza2lwIGRlbGV0ZWQgb3IgdW5hc3NpZ25lZCBpbmRpY2VzIChzcGFyc2VcbiAqIGFycmF5cyksIHVubGlrZSB0aGUgbmF0aXZlIGBBcnJheS5wcm90b3R5cGUucmVkdWNlYCBtZXRob2QuIEZvciBtb3JlIGRldGFpbHNcbiAqIG9uIHRoaXMgYmVoYXZpb3IsIHNlZTpcbiAqIGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0phdmFTY3JpcHQvUmVmZXJlbmNlL0dsb2JhbF9PYmplY3RzL0FycmF5L3JlZHVjZSNEZXNjcmlwdGlvblxuICpcbiAqIERpc3BhdGNoZXMgdG8gdGhlIGByZWR1Y2VgIG1ldGhvZCBvZiB0aGUgdGhpcmQgYXJndW1lbnQsIGlmIHByZXNlbnQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoKGEsIGIpIC0+IGEpIC0+IGEgLT4gW2JdIC0+IGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBpdGVyYXRvciBmdW5jdGlvbi4gUmVjZWl2ZXMgdHdvIHZhbHVlcywgdGhlIGFjY3VtdWxhdG9yIGFuZCB0aGVcbiAqICAgICAgICBjdXJyZW50IGVsZW1lbnQgZnJvbSB0aGUgYXJyYXkuXG4gKiBAcGFyYW0geyp9IGFjYyBUaGUgYWNjdW11bGF0b3IgdmFsdWUuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm4geyp9IFRoZSBmaW5hbCwgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAc2VlIFIucmVkdWNlZCwgUi5hZGRJbmRleCwgUi5yZWR1Y2VSaWdodFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIucmVkdWNlKFIuc3VidHJhY3QsIDAsIFsxLCAyLCAzLCA0XSkgLy8gPT4gKCgoKDAgLSAxKSAtIDIpIC0gMykgLSA0KSA9IC0xMFxuICogICAgICAgICAgICAgICAgLSAgICAgICAgICAgICAgIC0xMFxuICogICAgICAgICAgICAgICAvIFxcICAgICAgICAgICAgICAvIFxcXG4gKiAgICAgICAgICAgICAgLSAgIDQgICAgICAgICAgIC02ICAgNFxuICogICAgICAgICAgICAgLyBcXCAgICAgICAgICAgICAgLyBcXFxuICogICAgICAgICAgICAtICAgMyAgID09PiAgICAgLTMgICAzXG4gKiAgICAgICAgICAgLyBcXCAgICAgICAgICAgICAgLyBcXFxuICogICAgICAgICAgLSAgIDIgICAgICAgICAgIC0xICAgMlxuICogICAgICAgICAvIFxcICAgICAgICAgICAgICAvIFxcXG4gKiAgICAgICAgMCAgIDEgICAgICAgICAgICAwICAgMVxuICpcbiAqIEBzeW1iIFIucmVkdWNlKGYsIGEsIFtiLCBjLCBkXSkgPSBmKGYoZihhLCBiKSwgYyksIGQpXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MyhfcmVkdWNlKTtcbiIsInZhciBfY3VycnlOID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnlOJyk7XG52YXIgX2Rpc3BhdGNoYWJsZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZScpO1xudmFyIF9oYXMgPSByZXF1aXJlKCcuL2ludGVybmFsL19oYXMnKTtcbnZhciBfcmVkdWNlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fcmVkdWNlJyk7XG52YXIgX3hyZWR1Y2VCeSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3hyZWR1Y2VCeScpO1xuXG5cbi8qKlxuICogR3JvdXBzIHRoZSBlbGVtZW50cyBvZiB0aGUgbGlzdCBhY2NvcmRpbmcgdG8gdGhlIHJlc3VsdCBvZiBjYWxsaW5nXG4gKiB0aGUgU3RyaW5nLXJldHVybmluZyBmdW5jdGlvbiBga2V5Rm5gIG9uIGVhY2ggZWxlbWVudCBhbmQgcmVkdWNlcyB0aGUgZWxlbWVudHNcbiAqIG9mIGVhY2ggZ3JvdXAgdG8gYSBzaW5nbGUgdmFsdWUgdmlhIHRoZSByZWR1Y2VyIGZ1bmN0aW9uIGB2YWx1ZUZuYC5cbiAqXG4gKiBUaGlzIGZ1bmN0aW9uIGlzIGJhc2ljYWxseSBhIG1vcmUgZ2VuZXJhbCBgZ3JvdXBCeWAgZnVuY3Rpb24uXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjIwLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnICgoYSwgYikgLT4gYSkgLT4gYSAtPiAoYiAtPiBTdHJpbmcpIC0+IFtiXSAtPiB7U3RyaW5nOiBhfVxuICogQHBhcmFtIHtGdW5jdGlvbn0gdmFsdWVGbiBUaGUgZnVuY3Rpb24gdGhhdCByZWR1Y2VzIHRoZSBlbGVtZW50cyBvZiBlYWNoIGdyb3VwIHRvIGEgc2luZ2xlXG4gKiAgICAgICAgdmFsdWUuIFJlY2VpdmVzIHR3byB2YWx1ZXMsIGFjY3VtdWxhdG9yIGZvciBhIHBhcnRpY3VsYXIgZ3JvdXAgYW5kIHRoZSBjdXJyZW50IGVsZW1lbnQuXG4gKiBAcGFyYW0geyp9IGFjYyBUaGUgKGluaXRpYWwpIGFjY3VtdWxhdG9yIHZhbHVlIGZvciBlYWNoIGdyb3VwLlxuICogQHBhcmFtIHtGdW5jdGlvbn0ga2V5Rm4gVGhlIGZ1bmN0aW9uIHRoYXQgbWFwcyB0aGUgbGlzdCdzIGVsZW1lbnQgaW50byBhIGtleS5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGFycmF5IHRvIGdyb3VwLlxuICogQHJldHVybiB7T2JqZWN0fSBBbiBvYmplY3Qgd2l0aCB0aGUgb3V0cHV0IG9mIGBrZXlGbmAgZm9yIGtleXMsIG1hcHBlZCB0byB0aGUgb3V0cHV0IG9mXG4gKiAgICAgICAgIGB2YWx1ZUZuYCBmb3IgZWxlbWVudHMgd2hpY2ggcHJvZHVjZWQgdGhhdCBrZXkgd2hlbiBwYXNzZWQgdG8gYGtleUZuYC5cbiAqIEBzZWUgUi5ncm91cEJ5LCBSLnJlZHVjZVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciByZWR1Y2VUb05hbWVzQnkgPSBSLnJlZHVjZUJ5KChhY2MsIHN0dWRlbnQpID0+IGFjYy5jb25jYXQoc3R1ZGVudC5uYW1lKSwgW10pO1xuICogICAgICB2YXIgbmFtZXNCeUdyYWRlID0gcmVkdWNlVG9OYW1lc0J5KGZ1bmN0aW9uKHN0dWRlbnQpIHtcbiAqICAgICAgICB2YXIgc2NvcmUgPSBzdHVkZW50LnNjb3JlO1xuICogICAgICAgIHJldHVybiBzY29yZSA8IDY1ID8gJ0YnIDpcbiAqICAgICAgICAgICAgICAgc2NvcmUgPCA3MCA/ICdEJyA6XG4gKiAgICAgICAgICAgICAgIHNjb3JlIDwgODAgPyAnQycgOlxuICogICAgICAgICAgICAgICBzY29yZSA8IDkwID8gJ0InIDogJ0EnO1xuICogICAgICB9KTtcbiAqICAgICAgdmFyIHN0dWRlbnRzID0gW3tuYW1lOiAnTHVjeScsIHNjb3JlOiA5Mn0sXG4gKiAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ0RyZXcnLCBzY29yZTogODV9LFxuICogICAgICAgICAgICAgICAgICAgICAgLy8gLi4uXG4gKiAgICAgICAgICAgICAgICAgICAgICB7bmFtZTogJ0JhcnQnLCBzY29yZTogNjJ9XTtcbiAqICAgICAgbmFtZXNCeUdyYWRlKHN0dWRlbnRzKTtcbiAqICAgICAgLy8ge1xuICogICAgICAvLyAgICdBJzogWydMdWN5J10sXG4gKiAgICAgIC8vICAgJ0InOiBbJ0RyZXcnXVxuICogICAgICAvLyAgIC8vIC4uLixcbiAqICAgICAgLy8gICAnRic6IFsnQmFydCddXG4gKiAgICAgIC8vIH1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnlOKDQsIFtdLCBfZGlzcGF0Y2hhYmxlKFtdLCBfeHJlZHVjZUJ5LFxuICBmdW5jdGlvbiByZWR1Y2VCeSh2YWx1ZUZuLCB2YWx1ZUFjYywga2V5Rm4sIGxpc3QpIHtcbiAgICByZXR1cm4gX3JlZHVjZShmdW5jdGlvbihhY2MsIGVsdCkge1xuICAgICAgdmFyIGtleSA9IGtleUZuKGVsdCk7XG4gICAgICBhY2Nba2V5XSA9IHZhbHVlRm4oX2hhcyhrZXksIGFjYykgPyBhY2Nba2V5XSA6IHZhbHVlQWNjLCBlbHQpO1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9LCB7fSwgbGlzdCk7XG4gIH0pKTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgc2luZ2xlIGl0ZW0gYnkgaXRlcmF0aW5nIHRocm91Z2ggdGhlIGxpc3QsIHN1Y2Nlc3NpdmVseSBjYWxsaW5nXG4gKiB0aGUgaXRlcmF0b3IgZnVuY3Rpb24gYW5kIHBhc3NpbmcgaXQgYW4gYWNjdW11bGF0b3IgdmFsdWUgYW5kIHRoZSBjdXJyZW50XG4gKiB2YWx1ZSBmcm9tIHRoZSBhcnJheSwgYW5kIHRoZW4gcGFzc2luZyB0aGUgcmVzdWx0IHRvIHRoZSBuZXh0IGNhbGwuXG4gKlxuICogU2ltaWxhciB0byBgcmVkdWNlYCwgZXhjZXB0IG1vdmVzIHRocm91Z2ggdGhlIGlucHV0IGxpc3QgZnJvbSB0aGUgcmlnaHQgdG9cbiAqIHRoZSBsZWZ0LlxuICpcbiAqIFRoZSBpdGVyYXRvciBmdW5jdGlvbiByZWNlaXZlcyB0d28gdmFsdWVzOiAqKHZhbHVlLCBhY2MpKiwgd2hpbGUgdGhlIGFyZ3VtZW50cydcbiAqIG9yZGVyIG9mIGByZWR1Y2VgJ3MgaXRlcmF0b3IgZnVuY3Rpb24gaXMgKihhY2MsIHZhbHVlKSouXG4gKlxuICogTm90ZTogYFIucmVkdWNlUmlnaHRgIGRvZXMgbm90IHNraXAgZGVsZXRlZCBvciB1bmFzc2lnbmVkIGluZGljZXMgKHNwYXJzZVxuICogYXJyYXlzKSwgdW5saWtlIHRoZSBuYXRpdmUgYEFycmF5LnByb3RvdHlwZS5yZWR1Y2VgIG1ldGhvZC4gRm9yIG1vcmUgZGV0YWlsc1xuICogb24gdGhpcyBiZWhhdmlvciwgc2VlOlxuICogaHR0cHM6Ly9kZXZlbG9wZXIubW96aWxsYS5vcmcvZW4tVVMvZG9jcy9XZWIvSmF2YVNjcmlwdC9SZWZlcmVuY2UvR2xvYmFsX09iamVjdHMvQXJyYXkvcmVkdWNlUmlnaHQjRGVzY3JpcHRpb25cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIChhLCBiIC0+IGIpIC0+IGIgLT4gW2FdIC0+IGJcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBpdGVyYXRvciBmdW5jdGlvbi4gUmVjZWl2ZXMgdHdvIHZhbHVlcywgdGhlIGN1cnJlbnQgZWxlbWVudCBmcm9tIHRoZSBhcnJheVxuICogICAgICAgIGFuZCB0aGUgYWNjdW11bGF0b3IuXG4gKiBAcGFyYW0geyp9IGFjYyBUaGUgYWNjdW11bGF0b3IgdmFsdWUuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm4geyp9IFRoZSBmaW5hbCwgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAc2VlIFIucmVkdWNlLCBSLmFkZEluZGV4XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5yZWR1Y2VSaWdodChSLnN1YnRyYWN0LCAwLCBbMSwgMiwgMywgNF0pIC8vID0+ICgxIC0gKDIgLSAoMyAtICg0IC0gMCkpKSkgPSAtMlxuICogICAgICAgICAgLSAgICAgICAgICAgICAgIC0yXG4gKiAgICAgICAgIC8gXFwgICAgICAgICAgICAgIC8gXFxcbiAqICAgICAgICAxICAgLSAgICAgICAgICAgIDEgICAzXG4gKiAgICAgICAgICAgLyBcXCAgICAgICAgICAgICAgLyBcXFxuICogICAgICAgICAgMiAgIC0gICAgID09PiAgICAyICAtMVxuICogICAgICAgICAgICAgLyBcXCAgICAgICAgICAgICAgLyBcXFxuICogICAgICAgICAgICAzICAgLSAgICAgICAgICAgIDMgICA0XG4gKiAgICAgICAgICAgICAgIC8gXFwgICAgICAgICAgICAgIC8gXFxcbiAqICAgICAgICAgICAgICA0ICAgMCAgICAgICAgICAgIDQgICAwXG4gKlxuICogQHN5bWIgUi5yZWR1Y2VSaWdodChmLCBhLCBbYiwgYywgZF0pID0gZihiLCBmKGMsIGYoZCwgYSkpKVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gcmVkdWNlUmlnaHQoZm4sIGFjYywgbGlzdCkge1xuICB2YXIgaWR4ID0gbGlzdC5sZW5ndGggLSAxO1xuICB3aGlsZSAoaWR4ID49IDApIHtcbiAgICBhY2MgPSBmbihsaXN0W2lkeF0sIGFjYyk7XG4gICAgaWR4IC09IDE7XG4gIH1cbiAgcmV0dXJuIGFjYztcbn0pO1xuIiwidmFyIF9jdXJyeU4gPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeU4nKTtcbnZhciBfcmVkdWNlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fcmVkdWNlJyk7XG52YXIgX3JlZHVjZWQgPSByZXF1aXJlKCcuL2ludGVybmFsL19yZWR1Y2VkJyk7XG5cblxuLyoqXG4gKiBMaWtlIGByZWR1Y2VgLCBgcmVkdWNlV2hpbGVgIHJldHVybnMgYSBzaW5nbGUgaXRlbSBieSBpdGVyYXRpbmcgdGhyb3VnaFxuICogdGhlIGxpc3QsIHN1Y2Nlc3NpdmVseSBjYWxsaW5nIHRoZSBpdGVyYXRvciBmdW5jdGlvbi4gYHJlZHVjZVdoaWxlYCBhbHNvXG4gKiB0YWtlcyBhIHByZWRpY2F0ZSB0aGF0IGlzIGV2YWx1YXRlZCBiZWZvcmUgZWFjaCBzdGVwLiBJZiB0aGUgcHJlZGljYXRlIHJldHVybnNcbiAqIGBmYWxzZWAsIGl0IFwic2hvcnQtY2lyY3VpdHNcIiB0aGUgaXRlcmF0aW9uIGFuZCByZXR1cm5zIHRoZSBjdXJyZW50IHZhbHVlXG4gKiBvZiB0aGUgYWNjdW11bGF0b3IuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMjIuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKChhLCBiKSAtPiBCb29sZWFuKSAtPiAoKGEsIGIpIC0+IGEpIC0+IGEgLT4gW2JdIC0+IGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWQgVGhlIHByZWRpY2F0ZS4gSXQgaXMgcGFzc2VkIHRoZSBhY2N1bXVsYXRvciBhbmQgdGhlXG4gKiAgICAgICAgY3VycmVudCBlbGVtZW50LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGl0ZXJhdG9yIGZ1bmN0aW9uLiBSZWNlaXZlcyB0d28gdmFsdWVzLCB0aGVcbiAqICAgICAgICBhY2N1bXVsYXRvciBhbmQgdGhlIGN1cnJlbnQgZWxlbWVudC5cbiAqIEBwYXJhbSB7Kn0gYSBUaGUgYWNjdW11bGF0b3IgdmFsdWUuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm4geyp9IFRoZSBmaW5hbCwgYWNjdW11bGF0ZWQgdmFsdWUuXG4gKiBAc2VlIFIucmVkdWNlLCBSLnJlZHVjZWRcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgaXNPZGQgPSAoYWNjLCB4KSA9PiB4ICUgMiA9PT0gMTtcbiAqICAgICAgdmFyIHhzID0gWzEsIDMsIDUsIDYwLCA3NzcsIDgwMF07XG4gKiAgICAgIFIucmVkdWNlV2hpbGUoaXNPZGQsIFIuYWRkLCAwLCB4cyk7IC8vPT4gOVxuICpcbiAqICAgICAgdmFyIHlzID0gWzIsIDQsIDZdXG4gKiAgICAgIFIucmVkdWNlV2hpbGUoaXNPZGQsIFIuYWRkLCAxMTEsIHlzKTsgLy89PiAxMTFcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnlOKDQsIFtdLCBmdW5jdGlvbiBfcmVkdWNlV2hpbGUocHJlZCwgZm4sIGEsIGxpc3QpIHtcbiAgcmV0dXJuIF9yZWR1Y2UoZnVuY3Rpb24oYWNjLCB4KSB7XG4gICAgcmV0dXJuIHByZWQoYWNjLCB4KSA/IGZuKGFjYywgeCkgOiBfcmVkdWNlZChhY2MpO1xuICB9LCBhLCBsaXN0KTtcbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBfcmVkdWNlZCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3JlZHVjZWQnKTtcblxuLyoqXG4gKiBSZXR1cm5zIGEgdmFsdWUgd3JhcHBlZCB0byBpbmRpY2F0ZSB0aGF0IGl0IGlzIHRoZSBmaW5hbCB2YWx1ZSBvZiB0aGUgcmVkdWNlXG4gKiBhbmQgdHJhbnNkdWNlIGZ1bmN0aW9ucy4gVGhlIHJldHVybmVkIHZhbHVlIHNob3VsZCBiZSBjb25zaWRlcmVkIGEgYmxhY2tcbiAqIGJveDogdGhlIGludGVybmFsIHN0cnVjdHVyZSBpcyBub3QgZ3VhcmFudGVlZCB0byBiZSBzdGFibGUuXG4gKlxuICogTm90ZTogdGhpcyBvcHRpbWl6YXRpb24gaXMgdW5hdmFpbGFibGUgdG8gZnVuY3Rpb25zIG5vdCBleHBsaWNpdGx5IGxpc3RlZFxuICogYWJvdmUuIEZvciBpbnN0YW5jZSwgaXQgaXMgbm90IGN1cnJlbnRseSBzdXBwb3J0ZWQgYnkgcmVkdWNlUmlnaHQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTUuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgYSAtPiAqXG4gKiBAcGFyYW0geyp9IHggVGhlIGZpbmFsIHZhbHVlIG9mIHRoZSByZWR1Y2UuXG4gKiBAcmV0dXJuIHsqfSBUaGUgd3JhcHBlZCB2YWx1ZS5cbiAqIEBzZWUgUi5yZWR1Y2UsIFIudHJhbnNkdWNlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5yZWR1Y2UoXG4gKiAgICAgICAgUi5waXBlKFIuYWRkLCBSLndoZW4oUi5ndGUoUi5fXywgMTApLCBSLnJlZHVjZWQpKSxcbiAqICAgICAgICAwLFxuICogICAgICAgIFsxLCAyLCAzLCA0LCA1XSkgLy8gMTBcbiAqL1xuXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoX3JlZHVjZWQpO1xuIiwidmFyIF9jb21wbGVtZW50ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY29tcGxlbWVudCcpO1xudmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBmaWx0ZXIgPSByZXF1aXJlKCcuL2ZpbHRlcicpO1xuXG5cbi8qKlxuICogVGhlIGNvbXBsZW1lbnQgb2YgYGZpbHRlcmAuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgRmlsdGVyYWJsZSBmID0+IChhIC0+IEJvb2xlYW4pIC0+IGYgYSAtPiBmIGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWRcbiAqIEBwYXJhbSB7QXJyYXl9IGZpbHRlcmFibGVcbiAqIEByZXR1cm4ge0FycmF5fVxuICogQHNlZSBSLmZpbHRlciwgUi50cmFuc2R1Y2UsIFIuYWRkSW5kZXhcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgaXNPZGQgPSAobikgPT4gbiAlIDIgPT09IDE7XG4gKlxuICogICAgICBSLnJlamVjdChpc09kZCwgWzEsIDIsIDMsIDRdKTsgLy89PiBbMiwgNF1cbiAqXG4gKiAgICAgIFIucmVqZWN0KGlzT2RkLCB7YTogMSwgYjogMiwgYzogMywgZDogNH0pOyAvLz0+IHtiOiAyLCBkOiA0fVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gcmVqZWN0KHByZWQsIGZpbHRlcmFibGUpIHtcbiAgcmV0dXJuIGZpbHRlcihfY29tcGxlbWVudChwcmVkKSwgZmlsdGVyYWJsZSk7XG59KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG5cblxuLyoqXG4gKiBSZW1vdmVzIHRoZSBzdWItbGlzdCBvZiBgbGlzdGAgc3RhcnRpbmcgYXQgaW5kZXggYHN0YXJ0YCBhbmQgY29udGFpbmluZ1xuICogYGNvdW50YCBlbGVtZW50cy4gX05vdGUgdGhhdCB0aGlzIGlzIG5vdCBkZXN0cnVjdGl2ZV86IGl0IHJldHVybnMgYSBjb3B5IG9mXG4gKiB0aGUgbGlzdCB3aXRoIHRoZSBjaGFuZ2VzLlxuICogPHNtYWxsPk5vIGxpc3RzIGhhdmUgYmVlbiBoYXJtZWQgaW4gdGhlIGFwcGxpY2F0aW9uIG9mIHRoaXMgZnVuY3Rpb24uPC9zbWFsbD5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4yLjJcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXIgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtOdW1iZXJ9IHN0YXJ0IFRoZSBwb3NpdGlvbiB0byBzdGFydCByZW1vdmluZyBlbGVtZW50c1xuICogQHBhcmFtIHtOdW1iZXJ9IGNvdW50IFRoZSBudW1iZXIgb2YgZWxlbWVudHMgdG8gcmVtb3ZlXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIHJlbW92ZSBmcm9tXG4gKiBAcmV0dXJuIHtBcnJheX0gQSBuZXcgQXJyYXkgd2l0aCBgY291bnRgIGVsZW1lbnRzIGZyb20gYHN0YXJ0YCByZW1vdmVkLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIucmVtb3ZlKDIsIDMsIFsxLDIsMyw0LDUsNiw3LDhdKTsgLy89PiBbMSwyLDYsNyw4XVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gcmVtb3ZlKHN0YXJ0LCBjb3VudCwgbGlzdCkge1xuICB2YXIgcmVzdWx0ID0gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobGlzdCwgMCk7XG4gIHJlc3VsdC5zcGxpY2Uoc3RhcnQsIGNvdW50KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBhbHdheXMgPSByZXF1aXJlKCcuL2Fsd2F5cycpO1xudmFyIHRpbWVzID0gcmVxdWlyZSgnLi90aW1lcycpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIGZpeGVkIGxpc3Qgb2Ygc2l6ZSBgbmAgY29udGFpbmluZyBhIHNwZWNpZmllZCBpZGVudGljYWwgdmFsdWUuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4xXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBhIC0+IG4gLT4gW2FdXG4gKiBAcGFyYW0geyp9IHZhbHVlIFRoZSB2YWx1ZSB0byByZXBlYXQuXG4gKiBAcGFyYW0ge051bWJlcn0gbiBUaGUgZGVzaXJlZCBzaXplIG9mIHRoZSBvdXRwdXQgbGlzdC5cbiAqIEByZXR1cm4ge0FycmF5fSBBIG5ldyBhcnJheSBjb250YWluaW5nIGBuYCBgdmFsdWVgcy5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnJlcGVhdCgnaGknLCA1KTsgLy89PiBbJ2hpJywgJ2hpJywgJ2hpJywgJ2hpJywgJ2hpJ11cbiAqXG4gKiAgICAgIHZhciBvYmogPSB7fTtcbiAqICAgICAgdmFyIHJlcGVhdGVkT2JqcyA9IFIucmVwZWF0KG9iaiwgNSk7IC8vPT4gW3t9LCB7fSwge30sIHt9LCB7fV1cbiAqICAgICAgcmVwZWF0ZWRPYmpzWzBdID09PSByZXBlYXRlZE9ianNbMV07IC8vPT4gdHJ1ZVxuICogQHN5bWIgUi5yZXBlYXQoYSwgMCkgPSBbXVxuICogQHN5bWIgUi5yZXBlYXQoYSwgMSkgPSBbYV1cbiAqIEBzeW1iIFIucmVwZWF0KGEsIDIpID0gW2EsIGFdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiByZXBlYXQodmFsdWUsIG4pIHtcbiAgcmV0dXJuIHRpbWVzKGFsd2F5cyh2YWx1ZSksIG4pO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xuXG5cbi8qKlxuICogUmVwbGFjZSBhIHN1YnN0cmluZyBvciByZWdleCBtYXRjaCBpbiBhIHN0cmluZyB3aXRoIGEgcmVwbGFjZW1lbnQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuNy4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAc2lnIFJlZ0V4cHxTdHJpbmcgLT4gU3RyaW5nIC0+IFN0cmluZyAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7UmVnRXhwfFN0cmluZ30gcGF0dGVybiBBIHJlZ3VsYXIgZXhwcmVzc2lvbiBvciBhIHN1YnN0cmluZyB0byBtYXRjaC5cbiAqIEBwYXJhbSB7U3RyaW5nfSByZXBsYWNlbWVudCBUaGUgc3RyaW5nIHRvIHJlcGxhY2UgdGhlIG1hdGNoZXMgd2l0aC5cbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIFN0cmluZyB0byBkbyB0aGUgc2VhcmNoIGFuZCByZXBsYWNlbWVudCBpbi5cbiAqIEByZXR1cm4ge1N0cmluZ30gVGhlIHJlc3VsdC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnJlcGxhY2UoJ2ZvbycsICdiYXInLCAnZm9vIGZvbyBmb28nKTsgLy89PiAnYmFyIGZvbyBmb28nXG4gKiAgICAgIFIucmVwbGFjZSgvZm9vLywgJ2JhcicsICdmb28gZm9vIGZvbycpOyAvLz0+ICdiYXIgZm9vIGZvbydcbiAqXG4gKiAgICAgIC8vIFVzZSB0aGUgXCJnXCIgKGdsb2JhbCkgZmxhZyB0byByZXBsYWNlIGFsbCBvY2N1cnJlbmNlczpcbiAqICAgICAgUi5yZXBsYWNlKC9mb28vZywgJ2JhcicsICdmb28gZm9vIGZvbycpOyAvLz0+ICdiYXIgYmFyIGJhcidcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIHJlcGxhY2UocmVnZXgsIHJlcGxhY2VtZW50LCBzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKHJlZ2V4LCByZXBsYWNlbWVudCk7XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgX2lzU3RyaW5nID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faXNTdHJpbmcnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgbGlzdCBvciBzdHJpbmcgd2l0aCB0aGUgZWxlbWVudHMgb3IgY2hhcmFjdGVycyBpbiByZXZlcnNlXG4gKiBvcmRlci5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIFthXSAtPiBbYV1cbiAqIEBzaWcgU3RyaW5nIC0+IFN0cmluZ1xuICogQHBhcmFtIHtBcnJheXxTdHJpbmd9IGxpc3RcbiAqIEByZXR1cm4ge0FycmF5fFN0cmluZ31cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnJldmVyc2UoWzEsIDIsIDNdKTsgIC8vPT4gWzMsIDIsIDFdXG4gKiAgICAgIFIucmV2ZXJzZShbMSwgMl0pOyAgICAgLy89PiBbMiwgMV1cbiAqICAgICAgUi5yZXZlcnNlKFsxXSk7ICAgICAgICAvLz0+IFsxXVxuICogICAgICBSLnJldmVyc2UoW10pOyAgICAgICAgIC8vPT4gW11cbiAqXG4gKiAgICAgIFIucmV2ZXJzZSgnYWJjJyk7ICAgICAgLy89PiAnY2JhJ1xuICogICAgICBSLnJldmVyc2UoJ2FiJyk7ICAgICAgIC8vPT4gJ2JhJ1xuICogICAgICBSLnJldmVyc2UoJ2EnKTsgICAgICAgIC8vPT4gJ2EnXG4gKiAgICAgIFIucmV2ZXJzZSgnJyk7ICAgICAgICAgLy89PiAnJ1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gcmV2ZXJzZShsaXN0KSB7XG4gIHJldHVybiBfaXNTdHJpbmcobGlzdCkgPyBsaXN0LnNwbGl0KCcnKS5yZXZlcnNlKCkuam9pbignJykgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobGlzdCwgMCkucmV2ZXJzZSgpO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xuXG5cbi8qKlxuICogU2NhbiBpcyBzaW1pbGFyIHRvIHJlZHVjZSwgYnV0IHJldHVybnMgYSBsaXN0IG9mIHN1Y2Nlc3NpdmVseSByZWR1Y2VkIHZhbHVlc1xuICogZnJvbSB0aGUgbGVmdFxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEwLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIChhLGIgLT4gYSkgLT4gYSAtPiBbYl0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgaXRlcmF0b3IgZnVuY3Rpb24uIFJlY2VpdmVzIHR3byB2YWx1ZXMsIHRoZSBhY2N1bXVsYXRvciBhbmQgdGhlXG4gKiAgICAgICAgY3VycmVudCBlbGVtZW50IGZyb20gdGhlIGFycmF5XG4gKiBAcGFyYW0geyp9IGFjYyBUaGUgYWNjdW11bGF0b3IgdmFsdWUuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBsaXN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEByZXR1cm4ge0FycmF5fSBBIGxpc3Qgb2YgYWxsIGludGVybWVkaWF0ZWx5IHJlZHVjZWQgdmFsdWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBudW1iZXJzID0gWzEsIDIsIDMsIDRdO1xuICogICAgICB2YXIgZmFjdG9yaWFscyA9IFIuc2NhbihSLm11bHRpcGx5LCAxLCBudW1iZXJzKTsgLy89PiBbMSwgMSwgMiwgNiwgMjRdXG4gKiBAc3ltYiBSLnNjYW4oZiwgYSwgW2IsIGNdKSA9IFthLCBmKGEsIGIpLCBmKGYoYSwgYiksIGMpXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gc2NhbihmbiwgYWNjLCBsaXN0KSB7XG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGVuID0gbGlzdC5sZW5ndGg7XG4gIHZhciByZXN1bHQgPSBbYWNjXTtcbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIGFjYyA9IGZuKGFjYywgbGlzdFtpZHhdKTtcbiAgICByZXN1bHRbaWR4ICsgMV0gPSBhY2M7XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBhcCA9IHJlcXVpcmUoJy4vYXAnKTtcbnZhciBtYXAgPSByZXF1aXJlKCcuL21hcCcpO1xudmFyIHByZXBlbmQgPSByZXF1aXJlKCcuL3ByZXBlbmQnKTtcbnZhciByZWR1Y2VSaWdodCA9IHJlcXVpcmUoJy4vcmVkdWNlUmlnaHQnKTtcblxuXG4vKipcbiAqIFRyYW5zZm9ybXMgYSBbVHJhdmVyc2FibGVdKGh0dHBzOi8vZ2l0aHViLmNvbS9mYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjdHJhdmVyc2FibGUpXG4gKiBvZiBbQXBwbGljYXRpdmVdKGh0dHBzOi8vZ2l0aHViLmNvbS9mYW50YXN5bGFuZC9mYW50YXN5LWxhbmQjYXBwbGljYXRpdmUpIGludG8gYW5cbiAqIEFwcGxpY2F0aXZlIG9mIFRyYXZlcnNhYmxlLlxuICpcbiAqIERpc3BhdGNoZXMgdG8gdGhlIGBzZXF1ZW5jZWAgbWV0aG9kIG9mIHRoZSBzZWNvbmQgYXJndW1lbnQsIGlmIHByZXNlbnQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTkuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKEFwcGxpY2F0aXZlIGYsIFRyYXZlcnNhYmxlIHQpID0+IChhIC0+IGYgYSkgLT4gdCAoZiBhKSAtPiBmICh0IGEpXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBvZlxuICogQHBhcmFtIHsqfSB0cmF2ZXJzYWJsZVxuICogQHJldHVybiB7Kn1cbiAqIEBzZWUgUi50cmF2ZXJzZVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuc2VxdWVuY2UoTWF5YmUub2YsIFtKdXN0KDEpLCBKdXN0KDIpLCBKdXN0KDMpXSk7ICAgLy89PiBKdXN0KFsxLCAyLCAzXSlcbiAqICAgICAgUi5zZXF1ZW5jZShNYXliZS5vZiwgW0p1c3QoMSksIEp1c3QoMiksIE5vdGhpbmcoKV0pOyAvLz0+IE5vdGhpbmcoKVxuICpcbiAqICAgICAgUi5zZXF1ZW5jZShSLm9mLCBKdXN0KFsxLCAyLCAzXSkpOyAvLz0+IFtKdXN0KDEpLCBKdXN0KDIpLCBKdXN0KDMpXVxuICogICAgICBSLnNlcXVlbmNlKFIub2YsIE5vdGhpbmcoKSk7ICAgICAgIC8vPT4gW05vdGhpbmcoKV1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHNlcXVlbmNlKG9mLCB0cmF2ZXJzYWJsZSkge1xuICByZXR1cm4gdHlwZW9mIHRyYXZlcnNhYmxlLnNlcXVlbmNlID09PSAnZnVuY3Rpb24nID9cbiAgICB0cmF2ZXJzYWJsZS5zZXF1ZW5jZShvZikgOlxuICAgIHJlZHVjZVJpZ2h0KGZ1bmN0aW9uKHgsIGFjYykgeyByZXR1cm4gYXAobWFwKHByZXBlbmQsIHgpLCBhY2MpOyB9LFxuICAgICAgICAgICAgICAgIG9mKFtdKSxcbiAgICAgICAgICAgICAgICB0cmF2ZXJzYWJsZSk7XG59KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG52YXIgYWx3YXlzID0gcmVxdWlyZSgnLi9hbHdheXMnKTtcbnZhciBvdmVyID0gcmVxdWlyZSgnLi9vdmVyJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSByZXN1bHQgb2YgXCJzZXR0aW5nXCIgdGhlIHBvcnRpb24gb2YgdGhlIGdpdmVuIGRhdGEgc3RydWN0dXJlXG4gKiBmb2N1c2VkIGJ5IHRoZSBnaXZlbiBsZW5zIHRvIHRoZSBnaXZlbiB2YWx1ZS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNi4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAdHlwZWRlZm4gTGVucyBzIGEgPSBGdW5jdG9yIGYgPT4gKGEgLT4gZiBhKSAtPiBzIC0+IGYgc1xuICogQHNpZyBMZW5zIHMgYSAtPiBhIC0+IHMgLT4gc1xuICogQHBhcmFtIHtMZW5zfSBsZW5zXG4gKiBAcGFyYW0geyp9IHZcbiAqIEBwYXJhbSB7Kn0geFxuICogQHJldHVybiB7Kn1cbiAqIEBzZWUgUi5wcm9wLCBSLmxlbnNJbmRleCwgUi5sZW5zUHJvcFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciB4TGVucyA9IFIubGVuc1Byb3AoJ3gnKTtcbiAqXG4gKiAgICAgIFIuc2V0KHhMZW5zLCA0LCB7eDogMSwgeTogMn0pOyAgLy89PiB7eDogNCwgeTogMn1cbiAqICAgICAgUi5zZXQoeExlbnMsIDgsIHt4OiAxLCB5OiAyfSk7ICAvLz0+IHt4OiA4LCB5OiAyfVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gc2V0KGxlbnMsIHYsIHgpIHtcbiAgcmV0dXJuIG92ZXIobGVucywgYWx3YXlzKHYpLCB4KTtcbn0pO1xuIiwidmFyIF9jaGVja0Zvck1ldGhvZCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2NoZWNrRm9yTWV0aG9kJyk7XG52YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xuXG5cbi8qKlxuICogUmV0dXJucyB0aGUgZWxlbWVudHMgb2YgdGhlIGdpdmVuIGxpc3Qgb3Igc3RyaW5nIChvciBvYmplY3Qgd2l0aCBhIGBzbGljZWBcbiAqIG1ldGhvZCkgZnJvbSBgZnJvbUluZGV4YCAoaW5jbHVzaXZlKSB0byBgdG9JbmRleGAgKGV4Y2x1c2l2ZSkuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYHNsaWNlYCBtZXRob2Qgb2YgdGhlIHRoaXJkIGFyZ3VtZW50LCBpZiBwcmVzZW50LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuNFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgTnVtYmVyIC0+IE51bWJlciAtPiBbYV0gLT4gW2FdXG4gKiBAc2lnIE51bWJlciAtPiBOdW1iZXIgLT4gU3RyaW5nIC0+IFN0cmluZ1xuICogQHBhcmFtIHtOdW1iZXJ9IGZyb21JbmRleCBUaGUgc3RhcnQgaW5kZXggKGluY2x1c2l2ZSkuXG4gKiBAcGFyYW0ge051bWJlcn0gdG9JbmRleCBUaGUgZW5kIGluZGV4IChleGNsdXNpdmUpLlxuICogQHBhcmFtIHsqfSBsaXN0XG4gKiBAcmV0dXJuIHsqfVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuc2xpY2UoMSwgMywgWydhJywgJ2InLCAnYycsICdkJ10pOyAgICAgICAgLy89PiBbJ2InLCAnYyddXG4gKiAgICAgIFIuc2xpY2UoMSwgSW5maW5pdHksIFsnYScsICdiJywgJ2MnLCAnZCddKTsgLy89PiBbJ2InLCAnYycsICdkJ11cbiAqICAgICAgUi5zbGljZSgwLCAtMSwgWydhJywgJ2InLCAnYycsICdkJ10pOyAgICAgICAvLz0+IFsnYScsICdiJywgJ2MnXVxuICogICAgICBSLnNsaWNlKC0zLCAtMSwgWydhJywgJ2InLCAnYycsICdkJ10pOyAgICAgIC8vPT4gWydiJywgJ2MnXVxuICogICAgICBSLnNsaWNlKDAsIDMsICdyYW1kYScpOyAgICAgICAgICAgICAgICAgICAgIC8vPT4gJ3JhbSdcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKF9jaGVja0Zvck1ldGhvZCgnc2xpY2UnLCBmdW5jdGlvbiBzbGljZShmcm9tSW5kZXgsIHRvSW5kZXgsIGxpc3QpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpc3QsIGZyb21JbmRleCwgdG9JbmRleCk7XG59KSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIGNvcHkgb2YgdGhlIGxpc3QsIHNvcnRlZCBhY2NvcmRpbmcgdG8gdGhlIGNvbXBhcmF0b3IgZnVuY3Rpb24sXG4gKiB3aGljaCBzaG91bGQgYWNjZXB0IHR3byB2YWx1ZXMgYXQgYSB0aW1lIGFuZCByZXR1cm4gYSBuZWdhdGl2ZSBudW1iZXIgaWYgdGhlXG4gKiBmaXJzdCB2YWx1ZSBpcyBzbWFsbGVyLCBhIHBvc2l0aXZlIG51bWJlciBpZiBpdCdzIGxhcmdlciwgYW5kIHplcm8gaWYgdGhleVxuICogYXJlIGVxdWFsLiBQbGVhc2Ugbm90ZSB0aGF0IHRoaXMgaXMgYSAqKmNvcHkqKiBvZiB0aGUgbGlzdC4gSXQgZG9lcyBub3RcbiAqIG1vZGlmeSB0aGUgb3JpZ2luYWwuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoYSxhIC0+IE51bWJlcikgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gY29tcGFyYXRvciBBIHNvcnRpbmcgZnVuY3Rpb24gOjogYSAtPiBiIC0+IEludFxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgbGlzdCB0byBzb3J0XG4gKiBAcmV0dXJuIHtBcnJheX0gYSBuZXcgYXJyYXkgd2l0aCBpdHMgZWxlbWVudHMgc29ydGVkIGJ5IHRoZSBjb21wYXJhdG9yIGZ1bmN0aW9uLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBkaWZmID0gZnVuY3Rpb24oYSwgYikgeyByZXR1cm4gYSAtIGI7IH07XG4gKiAgICAgIFIuc29ydChkaWZmLCBbNCwyLDcsNV0pOyAvLz0+IFsyLCA0LCA1LCA3XVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gc29ydChjb21wYXJhdG9yLCBsaXN0KSB7XG4gIHJldHVybiBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChsaXN0LCAwKS5zb3J0KGNvbXBhcmF0b3IpO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogU29ydHMgdGhlIGxpc3QgYWNjb3JkaW5nIHRvIHRoZSBzdXBwbGllZCBmdW5jdGlvbi5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBSZWxhdGlvblxuICogQHNpZyBPcmQgYiA9PiAoYSAtPiBiKSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgbGlzdCB0byBzb3J0LlxuICogQHJldHVybiB7QXJyYXl9IEEgbmV3IGxpc3Qgc29ydGVkIGJ5IHRoZSBrZXlzIGdlbmVyYXRlZCBieSBgZm5gLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBzb3J0QnlGaXJzdEl0ZW0gPSBSLnNvcnRCeShSLnByb3AoMCkpO1xuICogICAgICB2YXIgc29ydEJ5TmFtZUNhc2VJbnNlbnNpdGl2ZSA9IFIuc29ydEJ5KFIuY29tcG9zZShSLnRvTG93ZXIsIFIucHJvcCgnbmFtZScpKSk7XG4gKiAgICAgIHZhciBwYWlycyA9IFtbLTEsIDFdLCBbLTIsIDJdLCBbLTMsIDNdXTtcbiAqICAgICAgc29ydEJ5Rmlyc3RJdGVtKHBhaXJzKTsgLy89PiBbWy0zLCAzXSwgWy0yLCAyXSwgWy0xLCAxXV1cbiAqICAgICAgdmFyIGFsaWNlID0ge1xuICogICAgICAgIG5hbWU6ICdBTElDRScsXG4gKiAgICAgICAgYWdlOiAxMDFcbiAqICAgICAgfTtcbiAqICAgICAgdmFyIGJvYiA9IHtcbiAqICAgICAgICBuYW1lOiAnQm9iJyxcbiAqICAgICAgICBhZ2U6IC0xMFxuICogICAgICB9O1xuICogICAgICB2YXIgY2xhcmEgPSB7XG4gKiAgICAgICAgbmFtZTogJ2NsYXJhJyxcbiAqICAgICAgICBhZ2U6IDMxNC4xNTlcbiAqICAgICAgfTtcbiAqICAgICAgdmFyIHBlb3BsZSA9IFtjbGFyYSwgYm9iLCBhbGljZV07XG4gKiAgICAgIHNvcnRCeU5hbWVDYXNlSW5zZW5zaXRpdmUocGVvcGxlKTsgLy89PiBbYWxpY2UsIGJvYiwgY2xhcmFdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBzb3J0QnkoZm4sIGxpc3QpIHtcbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpc3QsIDApLnNvcnQoZnVuY3Rpb24oYSwgYikge1xuICAgIHZhciBhYSA9IGZuKGEpO1xuICAgIHZhciBiYiA9IGZuKGIpO1xuICAgIHJldHVybiBhYSA8IGJiID8gLTEgOiBhYSA+IGJiID8gMSA6IDA7XG4gIH0pO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogU29ydHMgYSBsaXN0IGFjY29yZGluZyB0byBhIGxpc3Qgb2YgY29tcGFyYXRvcnMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMjMuMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnIFthIC0+IGEgLT4gTnVtYmVyXSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0FycmF5fSBmdW5jdGlvbnMgQSBsaXN0IG9mIGNvbXBhcmF0b3IgZnVuY3Rpb25zLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgbGlzdCB0byBzb3J0LlxuICogQHJldHVybiB7QXJyYXl9IEEgbmV3IGxpc3Qgc29ydGVkIGFjY29yZGluZyB0byB0aGUgY29tYXJhdG9yIGZ1bmN0aW9ucy5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgYWxpY2UgPSB7XG4gKiAgICAgICAgbmFtZTogJ2FsaWNlJyxcbiAqICAgICAgICBhZ2U6IDQwXG4gKiAgICAgIH07XG4gKiAgICAgIHZhciBib2IgPSB7XG4gKiAgICAgICAgbmFtZTogJ2JvYicsXG4gKiAgICAgICAgYWdlOiAzMFxuICogICAgICB9O1xuICogICAgICB2YXIgY2xhcmEgPSB7XG4gKiAgICAgICAgbmFtZTogJ2NsYXJhJyxcbiAqICAgICAgICBhZ2U6IDQwXG4gKiAgICAgIH07XG4gKiAgICAgIHZhciBwZW9wbGUgPSBbY2xhcmEsIGJvYiwgYWxpY2VdO1xuICogICAgICB2YXIgYWdlTmFtZVNvcnQgPSBSLnNvcnRXaXRoKFtcbiAqICAgICAgICBSLmRlc2NlbmQoUi5wcm9wKCdhZ2UnKSksXG4gKiAgICAgICAgUi5hc2NlbmQoUi5wcm9wKCduYW1lJykpXG4gKiAgICAgIF0pO1xuICogICAgICBhZ2VOYW1lU29ydChwZW9wbGUpOyAvLz0+IFthbGljZSwgY2xhcmEsIGJvYl1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHNvcnRXaXRoKGZucywgbGlzdCkge1xuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobGlzdCwgMCkuc29ydChmdW5jdGlvbihhLCBiKSB7XG4gICAgdmFyIHJlc3VsdCA9IDA7XG4gICAgdmFyIGkgPSAwO1xuICAgIHdoaWxlIChyZXN1bHQgPT09IDAgJiYgaSA8IGZucy5sZW5ndGgpIHtcbiAgICAgIHJlc3VsdCA9IGZuc1tpXShhLCBiKTtcbiAgICAgIGkgKz0gMTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSk7XG59KTtcbiIsInZhciBpbnZva2VyID0gcmVxdWlyZSgnLi9pbnZva2VyJyk7XG5cblxuLyoqXG4gKiBTcGxpdHMgYSBzdHJpbmcgaW50byBhbiBhcnJheSBvZiBzdHJpbmdzIGJhc2VkIG9uIHRoZSBnaXZlblxuICogc2VwYXJhdG9yLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IFN0cmluZ1xuICogQHNpZyAoU3RyaW5nIHwgUmVnRXhwKSAtPiBTdHJpbmcgLT4gW1N0cmluZ11cbiAqIEBwYXJhbSB7U3RyaW5nfFJlZ0V4cH0gc2VwIFRoZSBwYXR0ZXJuLlxuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHNlcGFyYXRlIGludG8gYW4gYXJyYXkuXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIGFycmF5IG9mIHN0cmluZ3MgZnJvbSBgc3RyYCBzZXBhcmF0ZWQgYnkgYHN0cmAuXG4gKiBAc2VlIFIuam9pblxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBwYXRoQ29tcG9uZW50cyA9IFIuc3BsaXQoJy8nKTtcbiAqICAgICAgUi50YWlsKHBhdGhDb21wb25lbnRzKCcvdXNyL2xvY2FsL2Jpbi9ub2RlJykpOyAvLz0+IFsndXNyJywgJ2xvY2FsJywgJ2JpbicsICdub2RlJ11cbiAqXG4gKiAgICAgIFIuc3BsaXQoJy4nLCAnYS5iLmMueHl6LmQnKTsgLy89PiBbJ2EnLCAnYicsICdjJywgJ3h5eicsICdkJ11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBpbnZva2VyKDEsICdzcGxpdCcpO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBsZW5ndGggPSByZXF1aXJlKCcuL2xlbmd0aCcpO1xudmFyIHNsaWNlID0gcmVxdWlyZSgnLi9zbGljZScpO1xuXG5cbi8qKlxuICogU3BsaXRzIGEgZ2l2ZW4gbGlzdCBvciBzdHJpbmcgYXQgYSBnaXZlbiBpbmRleC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xOS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBOdW1iZXIgLT4gW2FdIC0+IFtbYV0sIFthXV1cbiAqIEBzaWcgTnVtYmVyIC0+IFN0cmluZyAtPiBbU3RyaW5nLCBTdHJpbmddXG4gKiBAcGFyYW0ge051bWJlcn0gaW5kZXggVGhlIGluZGV4IHdoZXJlIHRoZSBhcnJheS9zdHJpbmcgaXMgc3BsaXQuXG4gKiBAcGFyYW0ge0FycmF5fFN0cmluZ30gYXJyYXkgVGhlIGFycmF5L3N0cmluZyB0byBiZSBzcGxpdC5cbiAqIEByZXR1cm4ge0FycmF5fVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuc3BsaXRBdCgxLCBbMSwgMiwgM10pOyAgICAgICAgICAvLz0+IFtbMV0sIFsyLCAzXV1cbiAqICAgICAgUi5zcGxpdEF0KDUsICdoZWxsbyB3b3JsZCcpOyAgICAgIC8vPT4gWydoZWxsbycsICcgd29ybGQnXVxuICogICAgICBSLnNwbGl0QXQoLTEsICdmb29iYXInKTsgICAgICAgICAgLy89PiBbJ2Zvb2JhJywgJ3InXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gc3BsaXRBdChpbmRleCwgYXJyYXkpIHtcbiAgcmV0dXJuIFtzbGljZSgwLCBpbmRleCwgYXJyYXkpLCBzbGljZShpbmRleCwgbGVuZ3RoKGFycmF5KSwgYXJyYXkpXTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBzbGljZSA9IHJlcXVpcmUoJy4vc2xpY2UnKTtcblxuXG4vKipcbiAqIFNwbGl0cyBhIGNvbGxlY3Rpb24gaW50byBzbGljZXMgb2YgdGhlIHNwZWNpZmllZCBsZW5ndGguXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTYuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgTnVtYmVyIC0+IFthXSAtPiBbW2FdXVxuICogQHNpZyBOdW1iZXIgLT4gU3RyaW5nIC0+IFtTdHJpbmddXG4gKiBAcGFyYW0ge051bWJlcn0gblxuICogQHBhcmFtIHtBcnJheX0gbGlzdFxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5zcGxpdEV2ZXJ5KDMsIFsxLCAyLCAzLCA0LCA1LCA2LCA3XSk7IC8vPT4gW1sxLCAyLCAzXSwgWzQsIDUsIDZdLCBbN11dXG4gKiAgICAgIFIuc3BsaXRFdmVyeSgzLCAnZm9vYmFyYmF6Jyk7IC8vPT4gWydmb28nLCAnYmFyJywgJ2JheiddXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBzcGxpdEV2ZXJ5KG4sIGxpc3QpIHtcbiAgaWYgKG4gPD0gMCkge1xuICAgIHRocm93IG5ldyBFcnJvcignRmlyc3QgYXJndW1lbnQgdG8gc3BsaXRFdmVyeSBtdXN0IGJlIGEgcG9zaXRpdmUgaW50ZWdlcicpO1xuICB9XG4gIHZhciByZXN1bHQgPSBbXTtcbiAgdmFyIGlkeCA9IDA7XG4gIHdoaWxlIChpZHggPCBsaXN0Lmxlbmd0aCkge1xuICAgIHJlc3VsdC5wdXNoKHNsaWNlKGlkeCwgaWR4ICs9IG4sIGxpc3QpKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogVGFrZXMgYSBsaXN0IGFuZCBhIHByZWRpY2F0ZSBhbmQgcmV0dXJucyBhIHBhaXIgb2YgbGlzdHMgd2l0aCB0aGUgZm9sbG93aW5nIHByb3BlcnRpZXM6XG4gKlxuICogIC0gdGhlIHJlc3VsdCBvZiBjb25jYXRlbmF0aW5nIHRoZSB0d28gb3V0cHV0IGxpc3RzIGlzIGVxdWl2YWxlbnQgdG8gdGhlIGlucHV0IGxpc3Q7XG4gKiAgLSBub25lIG9mIHRoZSBlbGVtZW50cyBvZiB0aGUgZmlyc3Qgb3V0cHV0IGxpc3Qgc2F0aXNmaWVzIHRoZSBwcmVkaWNhdGU7IGFuZFxuICogIC0gaWYgdGhlIHNlY29uZCBvdXRwdXQgbGlzdCBpcyBub24tZW1wdHksIGl0cyBmaXJzdCBlbGVtZW50IHNhdGlzZmllcyB0aGUgcHJlZGljYXRlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE5LjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIChhIC0+IEJvb2xlYW4pIC0+IFthXSAtPiBbW2FdLCBbYV1dXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkIFRoZSBwcmVkaWNhdGUgdGhhdCBkZXRlcm1pbmVzIHdoZXJlIHRoZSBhcnJheSBpcyBzcGxpdC5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGFycmF5IHRvIGJlIHNwbGl0LlxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi5zcGxpdFdoZW4oUi5lcXVhbHMoMiksIFsxLCAyLCAzLCAxLCAyLCAzXSk7ICAgLy89PiBbWzFdLCBbMiwgMywgMSwgMiwgM11dXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiBzcGxpdFdoZW4ocHJlZCwgbGlzdCkge1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGxlbiA9IGxpc3QubGVuZ3RoO1xuICB2YXIgcHJlZml4ID0gW107XG5cbiAgd2hpbGUgKGlkeCA8IGxlbiAmJiAhcHJlZChsaXN0W2lkeF0pKSB7XG4gICAgcHJlZml4LnB1c2gobGlzdFtpZHhdKTtcbiAgICBpZHggKz0gMTtcbiAgfVxuXG4gIHJldHVybiBbcHJlZml4LCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChsaXN0LCBpZHgpXTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFN1YnRyYWN0cyBpdHMgc2Vjb25kIGFyZ3VtZW50IGZyb20gaXRzIGZpcnN0IGFyZ3VtZW50LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IE1hdGhcbiAqIEBzaWcgTnVtYmVyIC0+IE51bWJlciAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7TnVtYmVyfSBhIFRoZSBmaXJzdCB2YWx1ZS5cbiAqIEBwYXJhbSB7TnVtYmVyfSBiIFRoZSBzZWNvbmQgdmFsdWUuXG4gKiBAcmV0dXJuIHtOdW1iZXJ9IFRoZSByZXN1bHQgb2YgYGEgLSBiYC5cbiAqIEBzZWUgUi5hZGRcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnN1YnRyYWN0KDEwLCA4KTsgLy89PiAyXG4gKlxuICogICAgICB2YXIgbWludXM1ID0gUi5zdWJ0cmFjdChSLl9fLCA1KTtcbiAqICAgICAgbWludXM1KDE3KTsgLy89PiAxMlxuICpcbiAqICAgICAgdmFyIGNvbXBsZW1lbnRhcnlBbmdsZSA9IFIuc3VidHJhY3QoOTApO1xuICogICAgICBjb21wbGVtZW50YXJ5QW5nbGUoMzApOyAvLz0+IDYwXG4gKiAgICAgIGNvbXBsZW1lbnRhcnlBbmdsZSg3Mik7IC8vPT4gMThcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHN1YnRyYWN0KGEsIGIpIHtcbiAgcmV0dXJuIE51bWJlcihhKSAtIE51bWJlcihiKTtcbn0pO1xuIiwidmFyIGFkZCA9IHJlcXVpcmUoJy4vYWRkJyk7XG52YXIgcmVkdWNlID0gcmVxdWlyZSgnLi9yZWR1Y2UnKTtcblxuXG4vKipcbiAqIEFkZHMgdG9nZXRoZXIgYWxsIHRoZSBlbGVtZW50cyBvZiBhIGxpc3QuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTWF0aFxuICogQHNpZyBbTnVtYmVyXSAtPiBOdW1iZXJcbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgQW4gYXJyYXkgb2YgbnVtYmVyc1xuICogQHJldHVybiB7TnVtYmVyfSBUaGUgc3VtIG9mIGFsbCB0aGUgbnVtYmVycyBpbiB0aGUgbGlzdC5cbiAqIEBzZWUgUi5yZWR1Y2VcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnN1bShbMiw0LDYsOCwxMDAsMV0pOyAvLz0+IDEyMVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHJlZHVjZShhZGQsIDApO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBjb25jYXQgPSByZXF1aXJlKCcuL2NvbmNhdCcpO1xudmFyIGRpZmZlcmVuY2UgPSByZXF1aXJlKCcuL2RpZmZlcmVuY2UnKTtcblxuXG4vKipcbiAqIEZpbmRzIHRoZSBzZXQgKGkuZS4gbm8gZHVwbGljYXRlcykgb2YgYWxsIGVsZW1lbnRzIGNvbnRhaW5lZCBpbiB0aGUgZmlyc3Qgb3JcbiAqIHNlY29uZCBsaXN0LCBidXQgbm90IGJvdGguXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTkuMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnIFsqXSAtPiBbKl0gLT4gWypdXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0MSBUaGUgZmlyc3QgbGlzdC5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QyIFRoZSBzZWNvbmQgbGlzdC5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgZWxlbWVudHMgaW4gYGxpc3QxYCBvciBgbGlzdDJgLCBidXQgbm90IGJvdGguXG4gKiBAc2VlIFIuc3ltbWV0cmljRGlmZmVyZW5jZVdpdGgsIFIuZGlmZmVyZW5jZSwgUi5kaWZmZXJlbmNlV2l0aFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuc3ltbWV0cmljRGlmZmVyZW5jZShbMSwyLDMsNF0sIFs3LDYsNSw0LDNdKTsgLy89PiBbMSwyLDcsNiw1XVxuICogICAgICBSLnN5bW1ldHJpY0RpZmZlcmVuY2UoWzcsNiw1LDQsM10sIFsxLDIsMyw0XSk7IC8vPT4gWzcsNiw1LDEsMl1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHN5bW1ldHJpY0RpZmZlcmVuY2UobGlzdDEsIGxpc3QyKSB7XG4gIHJldHVybiBjb25jYXQoZGlmZmVyZW5jZShsaXN0MSwgbGlzdDIpLCBkaWZmZXJlbmNlKGxpc3QyLCBsaXN0MSkpO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xudmFyIGNvbmNhdCA9IHJlcXVpcmUoJy4vY29uY2F0Jyk7XG52YXIgZGlmZmVyZW5jZVdpdGggPSByZXF1aXJlKCcuL2RpZmZlcmVuY2VXaXRoJyk7XG5cblxuLyoqXG4gKiBGaW5kcyB0aGUgc2V0IChpLmUuIG5vIGR1cGxpY2F0ZXMpIG9mIGFsbCBlbGVtZW50cyBjb250YWluZWQgaW4gdGhlIGZpcnN0IG9yXG4gKiBzZWNvbmQgbGlzdCwgYnV0IG5vdCBib3RoLiBEdXBsaWNhdGlvbiBpcyBkZXRlcm1pbmVkIGFjY29yZGluZyB0byB0aGUgdmFsdWVcbiAqIHJldHVybmVkIGJ5IGFwcGx5aW5nIHRoZSBzdXBwbGllZCBwcmVkaWNhdGUgdG8gdHdvIGxpc3QgZWxlbWVudHMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTkuMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnICgoYSwgYSkgLT4gQm9vbGVhbikgLT4gW2FdIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWQgQSBwcmVkaWNhdGUgdXNlZCB0byB0ZXN0IHdoZXRoZXIgdHdvIGl0ZW1zIGFyZSBlcXVhbC5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QxIFRoZSBmaXJzdCBsaXN0LlxuICogQHBhcmFtIHtBcnJheX0gbGlzdDIgVGhlIHNlY29uZCBsaXN0LlxuICogQHJldHVybiB7QXJyYXl9IFRoZSBlbGVtZW50cyBpbiBgbGlzdDFgIG9yIGBsaXN0MmAsIGJ1dCBub3QgYm90aC5cbiAqIEBzZWUgUi5zeW1tZXRyaWNEaWZmZXJlbmNlLCBSLmRpZmZlcmVuY2UsIFIuZGlmZmVyZW5jZVdpdGhcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgZXFBID0gUi5lcUJ5KFIucHJvcCgnYScpKTtcbiAqICAgICAgdmFyIGwxID0gW3thOiAxfSwge2E6IDJ9LCB7YTogM30sIHthOiA0fV07XG4gKiAgICAgIHZhciBsMiA9IFt7YTogM30sIHthOiA0fSwge2E6IDV9LCB7YTogNn1dO1xuICogICAgICBSLnN5bW1ldHJpY0RpZmZlcmVuY2VXaXRoKGVxQSwgbDEsIGwyKTsgLy89PiBbe2E6IDF9LCB7YTogMn0sIHthOiA1fSwge2E6IDZ9XVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gc3ltbWV0cmljRGlmZmVyZW5jZVdpdGgocHJlZCwgbGlzdDEsIGxpc3QyKSB7XG4gIHJldHVybiBjb25jYXQoZGlmZmVyZW5jZVdpdGgocHJlZCwgbGlzdDEsIGxpc3QyKSwgZGlmZmVyZW5jZVdpdGgocHJlZCwgbGlzdDIsIGxpc3QxKSk7XG59KTtcbiIsInZhciBfY2hlY2tGb3JNZXRob2QgPSByZXF1aXJlKCcuL2ludGVybmFsL19jaGVja0Zvck1ldGhvZCcpO1xudmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBzbGljZSA9IHJlcXVpcmUoJy4vc2xpY2UnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYWxsIGJ1dCB0aGUgZmlyc3QgZWxlbWVudCBvZiB0aGUgZ2l2ZW4gbGlzdCBvciBzdHJpbmcgKG9yIG9iamVjdFxuICogd2l0aCBhIGB0YWlsYCBtZXRob2QpLlxuICpcbiAqIERpc3BhdGNoZXMgdG8gdGhlIGBzbGljZWAgbWV0aG9kIG9mIHRoZSBmaXJzdCBhcmd1bWVudCwgaWYgcHJlc2VudC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIFthXSAtPiBbYV1cbiAqIEBzaWcgU3RyaW5nIC0+IFN0cmluZ1xuICogQHBhcmFtIHsqfSBsaXN0XG4gKiBAcmV0dXJuIHsqfVxuICogQHNlZSBSLmhlYWQsIFIuaW5pdCwgUi5sYXN0XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi50YWlsKFsxLCAyLCAzXSk7ICAvLz0+IFsyLCAzXVxuICogICAgICBSLnRhaWwoWzEsIDJdKTsgICAgIC8vPT4gWzJdXG4gKiAgICAgIFIudGFpbChbMV0pOyAgICAgICAgLy89PiBbXVxuICogICAgICBSLnRhaWwoW10pOyAgICAgICAgIC8vPT4gW11cbiAqXG4gKiAgICAgIFIudGFpbCgnYWJjJyk7ICAvLz0+ICdiYydcbiAqICAgICAgUi50YWlsKCdhYicpOyAgIC8vPT4gJ2InXG4gKiAgICAgIFIudGFpbCgnYScpOyAgICAvLz0+ICcnXG4gKiAgICAgIFIudGFpbCgnJyk7ICAgICAvLz0+ICcnXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShfY2hlY2tGb3JNZXRob2QoJ3RhaWwnLCBzbGljZSgxLCBJbmZpbml0eSkpKTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2Rpc3BhdGNoYWJsZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZScpO1xudmFyIF94dGFrZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX3h0YWtlJyk7XG52YXIgc2xpY2UgPSByZXF1aXJlKCcuL3NsaWNlJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIHRoZSBmaXJzdCBgbmAgZWxlbWVudHMgb2YgdGhlIGdpdmVuIGxpc3QsIHN0cmluZywgb3JcbiAqIHRyYW5zZHVjZXIvdHJhbnNmb3JtZXIgKG9yIG9iamVjdCB3aXRoIGEgYHRha2VgIG1ldGhvZCkuXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYHRha2VgIG1ldGhvZCBvZiB0aGUgc2Vjb25kIGFyZ3VtZW50LCBpZiBwcmVzZW50LlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgTnVtYmVyIC0+IFthXSAtPiBbYV1cbiAqIEBzaWcgTnVtYmVyIC0+IFN0cmluZyAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7TnVtYmVyfSBuXG4gKiBAcGFyYW0geyp9IGxpc3RcbiAqIEByZXR1cm4geyp9XG4gKiBAc2VlIFIuZHJvcFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudGFrZSgxLCBbJ2ZvbycsICdiYXInLCAnYmF6J10pOyAvLz0+IFsnZm9vJ11cbiAqICAgICAgUi50YWtlKDIsIFsnZm9vJywgJ2JhcicsICdiYXonXSk7IC8vPT4gWydmb28nLCAnYmFyJ11cbiAqICAgICAgUi50YWtlKDMsIFsnZm9vJywgJ2JhcicsICdiYXonXSk7IC8vPT4gWydmb28nLCAnYmFyJywgJ2JheiddXG4gKiAgICAgIFIudGFrZSg0LCBbJ2ZvbycsICdiYXInLCAnYmF6J10pOyAvLz0+IFsnZm9vJywgJ2JhcicsICdiYXonXVxuICogICAgICBSLnRha2UoMywgJ3JhbWRhJyk7ICAgICAgICAgICAgICAgLy89PiAncmFtJ1xuICpcbiAqICAgICAgdmFyIHBlcnNvbm5lbCA9IFtcbiAqICAgICAgICAnRGF2ZSBCcnViZWNrJyxcbiAqICAgICAgICAnUGF1bCBEZXNtb25kJyxcbiAqICAgICAgICAnRXVnZW5lIFdyaWdodCcsXG4gKiAgICAgICAgJ0pvZSBNb3JlbGxvJyxcbiAqICAgICAgICAnR2VycnkgTXVsbGlnYW4nLFxuICogICAgICAgICdCb2IgQmF0ZXMnLFxuICogICAgICAgICdKb2UgRG9kZ2UnLFxuICogICAgICAgICdSb24gQ3JvdHR5J1xuICogICAgICBdO1xuICpcbiAqICAgICAgdmFyIHRha2VGaXZlID0gUi50YWtlKDUpO1xuICogICAgICB0YWtlRml2ZShwZXJzb25uZWwpO1xuICogICAgICAvLz0+IFsnRGF2ZSBCcnViZWNrJywgJ1BhdWwgRGVzbW9uZCcsICdFdWdlbmUgV3JpZ2h0JywgJ0pvZSBNb3JlbGxvJywgJ0dlcnJ5IE11bGxpZ2FuJ11cbiAqIEBzeW1iIFIudGFrZSgtMSwgW2EsIGJdKSA9IFthLCBiXVxuICogQHN5bWIgUi50YWtlKDAsIFthLCBiXSkgPSBbXVxuICogQHN5bWIgUi50YWtlKDEsIFthLCBiXSkgPSBbYV1cbiAqIEBzeW1iIFIudGFrZSgyLCBbYSwgYl0pID0gW2EsIGJdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihfZGlzcGF0Y2hhYmxlKFsndGFrZSddLCBfeHRha2UsIGZ1bmN0aW9uIHRha2UobiwgeHMpIHtcbiAgcmV0dXJuIHNsaWNlKDAsIG4gPCAwID8gSW5maW5pdHkgOiBuLCB4cyk7XG59KSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIGRyb3AgPSByZXF1aXJlKCcuL2Ryb3AnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgbGlzdCBjb250YWluaW5nIHRoZSBsYXN0IGBuYCBlbGVtZW50cyBvZiB0aGUgZ2l2ZW4gbGlzdC5cbiAqIElmIGBuID4gbGlzdC5sZW5ndGhgLCByZXR1cm5zIGEgbGlzdCBvZiBgbGlzdC5sZW5ndGhgIGVsZW1lbnRzLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE2LjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIE51bWJlciAtPiBbYV0gLT4gW2FdXG4gKiBAc2lnIE51bWJlciAtPiBTdHJpbmcgLT4gU3RyaW5nXG4gKiBAcGFyYW0ge051bWJlcn0gbiBUaGUgbnVtYmVyIG9mIGVsZW1lbnRzIHRvIHJldHVybi5cbiAqIEBwYXJhbSB7QXJyYXl9IHhzIFRoZSBjb2xsZWN0aW9uIHRvIGNvbnNpZGVyLlxuICogQHJldHVybiB7QXJyYXl9XG4gKiBAc2VlIFIuZHJvcExhc3RcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnRha2VMYXN0KDEsIFsnZm9vJywgJ2JhcicsICdiYXonXSk7IC8vPT4gWydiYXonXVxuICogICAgICBSLnRha2VMYXN0KDIsIFsnZm9vJywgJ2JhcicsICdiYXonXSk7IC8vPT4gWydiYXInLCAnYmF6J11cbiAqICAgICAgUi50YWtlTGFzdCgzLCBbJ2ZvbycsICdiYXInLCAnYmF6J10pOyAvLz0+IFsnZm9vJywgJ2JhcicsICdiYXonXVxuICogICAgICBSLnRha2VMYXN0KDQsIFsnZm9vJywgJ2JhcicsICdiYXonXSk7IC8vPT4gWydmb28nLCAnYmFyJywgJ2JheiddXG4gKiAgICAgIFIudGFrZUxhc3QoMywgJ3JhbWRhJyk7ICAgICAgICAgICAgICAgLy89PiAnbWRhJ1xuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gdGFrZUxhc3QobiwgeHMpIHtcbiAgcmV0dXJuIGRyb3AobiA+PSAwID8geHMubGVuZ3RoIC0gbiA6IDAsIHhzKTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgbGlzdCBjb250YWluaW5nIHRoZSBsYXN0IGBuYCBlbGVtZW50cyBvZiBhIGdpdmVuIGxpc3QsIHBhc3NpbmdcbiAqIGVhY2ggdmFsdWUgdG8gdGhlIHN1cHBsaWVkIHByZWRpY2F0ZSBmdW5jdGlvbiwgYW5kIHRlcm1pbmF0aW5nIHdoZW4gdGhlXG4gKiBwcmVkaWNhdGUgZnVuY3Rpb24gcmV0dXJucyBgZmFsc2VgLiBFeGNsdWRlcyB0aGUgZWxlbWVudCB0aGF0IGNhdXNlZCB0aGVcbiAqIHByZWRpY2F0ZSBmdW5jdGlvbiB0byBmYWlsLiBUaGUgcHJlZGljYXRlIGZ1bmN0aW9uIGlzIHBhc3NlZCBvbmUgYXJndW1lbnQ6XG4gKiAqKHZhbHVlKSouXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTYuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIGNhbGxlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcmV0dXJuIHtBcnJheX0gQSBuZXcgYXJyYXkuXG4gKiBAc2VlIFIuZHJvcExhc3RXaGlsZSwgUi5hZGRJbmRleFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBpc05vdE9uZSA9IHggPT4geCAhPT0gMTtcbiAqXG4gKiAgICAgIFIudGFrZUxhc3RXaGlsZShpc05vdE9uZSwgWzEsIDIsIDMsIDRdKTsgLy89PiBbMiwgMywgNF1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHRha2VMYXN0V2hpbGUoZm4sIGxpc3QpIHtcbiAgdmFyIGlkeCA9IGxpc3QubGVuZ3RoIC0gMTtcbiAgd2hpbGUgKGlkeCA+PSAwICYmIGZuKGxpc3RbaWR4XSkpIHtcbiAgICBpZHggLT0gMTtcbiAgfVxuICByZXR1cm4gQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwobGlzdCwgaWR4ICsgMSk7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2Rpc3BhdGNoYWJsZSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2Rpc3BhdGNoYWJsZScpO1xudmFyIF94dGFrZVdoaWxlID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9feHRha2VXaGlsZScpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBsaXN0IGNvbnRhaW5pbmcgdGhlIGZpcnN0IGBuYCBlbGVtZW50cyBvZiBhIGdpdmVuIGxpc3QsXG4gKiBwYXNzaW5nIGVhY2ggdmFsdWUgdG8gdGhlIHN1cHBsaWVkIHByZWRpY2F0ZSBmdW5jdGlvbiwgYW5kIHRlcm1pbmF0aW5nIHdoZW5cbiAqIHRoZSBwcmVkaWNhdGUgZnVuY3Rpb24gcmV0dXJucyBgZmFsc2VgLiBFeGNsdWRlcyB0aGUgZWxlbWVudCB0aGF0IGNhdXNlZCB0aGVcbiAqIHByZWRpY2F0ZSBmdW5jdGlvbiB0byBmYWlsLiBUaGUgcHJlZGljYXRlIGZ1bmN0aW9uIGlzIHBhc3NlZCBvbmUgYXJndW1lbnQ6XG4gKiAqKHZhbHVlKSouXG4gKlxuICogRGlzcGF0Y2hlcyB0byB0aGUgYHRha2VXaGlsZWAgbWV0aG9kIG9mIHRoZSBzZWNvbmQgYXJndW1lbnQsIGlmIHByZXNlbnQuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gW2FdIC0+IFthXVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIGNhbGxlZCBwZXIgaXRlcmF0aW9uLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBUaGUgY29sbGVjdGlvbiB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcmV0dXJuIHtBcnJheX0gQSBuZXcgYXJyYXkuXG4gKiBAc2VlIFIuZHJvcFdoaWxlLCBSLnRyYW5zZHVjZSwgUi5hZGRJbmRleFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBpc05vdEZvdXIgPSB4ID0+IHggIT09IDQ7XG4gKlxuICogICAgICBSLnRha2VXaGlsZShpc05vdEZvdXIsIFsxLCAyLCAzLCA0LCAzLCAyLCAxXSk7IC8vPT4gWzEsIDIsIDNdXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihfZGlzcGF0Y2hhYmxlKFsndGFrZVdoaWxlJ10sIF94dGFrZVdoaWxlLCBmdW5jdGlvbiB0YWtlV2hpbGUoZm4sIGxpc3QpIHtcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBsZW4gPSBsaXN0Lmxlbmd0aDtcbiAgd2hpbGUgKGlkeCA8IGxlbiAmJiBmbihsaXN0W2lkeF0pKSB7XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGxpc3QsIDAsIGlkeCk7XG59KSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xuXG5cbi8qKlxuICogUnVucyB0aGUgZ2l2ZW4gZnVuY3Rpb24gd2l0aCB0aGUgc3VwcGxpZWQgb2JqZWN0LCB0aGVuIHJldHVybnMgdGhlIG9iamVjdC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoYSAtPiAqKSAtPiBhIC0+IGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byBjYWxsIHdpdGggYHhgLiBUaGUgcmV0dXJuIHZhbHVlIG9mIGBmbmAgd2lsbCBiZSB0aHJvd24gYXdheS5cbiAqIEBwYXJhbSB7Kn0geFxuICogQHJldHVybiB7Kn0gYHhgLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBzYXlYID0geCA9PiBjb25zb2xlLmxvZygneCBpcyAnICsgeCk7XG4gKiAgICAgIFIudGFwKHNheVgsIDEwMCk7IC8vPT4gMTAwXG4gKiAgICAgIC8vIGxvZ3MgJ3ggaXMgMTAwJ1xuICogQHN5bWIgUi50YXAoZiwgYSkgPSBhXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiB0YXAoZm4sIHgpIHtcbiAgZm4oeCk7XG4gIHJldHVybiB4O1xufSk7XG4iLCJ2YXIgX2Nsb25lUmVnRXhwID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY2xvbmVSZWdFeHAnKTtcbnZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgX2lzUmVnRXhwID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faXNSZWdFeHAnKTtcbnZhciB0b1N0cmluZyA9IHJlcXVpcmUoJy4vdG9TdHJpbmcnKTtcblxuXG4vKipcbiAqIERldGVybWluZXMgd2hldGhlciBhIGdpdmVuIHN0cmluZyBtYXRjaGVzIGEgZ2l2ZW4gcmVndWxhciBleHByZXNzaW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEyLjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBzaWcgUmVnRXhwIC0+IFN0cmluZyAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge1JlZ0V4cH0gcGF0dGVyblxuICogQHBhcmFtIHtTdHJpbmd9IHN0clxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBzZWUgUi5tYXRjaFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudGVzdCgvXngvLCAneHl6Jyk7IC8vPT4gdHJ1ZVxuICogICAgICBSLnRlc3QoL155LywgJ3h5eicpOyAvLz0+IGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiB0ZXN0KHBhdHRlcm4sIHN0cikge1xuICBpZiAoIV9pc1JlZ0V4cChwYXR0ZXJuKSkge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ+KAmHRlc3TigJkgcmVxdWlyZXMgYSB2YWx1ZSBvZiB0eXBlIFJlZ0V4cCBhcyBpdHMgZmlyc3QgYXJndW1lbnQ7IHJlY2VpdmVkICcgKyB0b1N0cmluZyhwYXR0ZXJuKSk7XG4gIH1cbiAgcmV0dXJuIF9jbG9uZVJlZ0V4cChwYXR0ZXJuKS50ZXN0KHN0cik7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBDYWxscyBhbiBpbnB1dCBmdW5jdGlvbiBgbmAgdGltZXMsIHJldHVybmluZyBhbiBhcnJheSBjb250YWluaW5nIHRoZSByZXN1bHRzXG4gKiBvZiB0aG9zZSBmdW5jdGlvbiBjYWxscy5cbiAqXG4gKiBgZm5gIGlzIHBhc3NlZCBvbmUgYXJndW1lbnQ6IFRoZSBjdXJyZW50IHZhbHVlIG9mIGBuYCwgd2hpY2ggYmVnaW5zIGF0IGAwYFxuICogYW5kIGlzIGdyYWR1YWxseSBpbmNyZW1lbnRlZCB0byBgbiAtIDFgLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjIuM1xuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKE51bWJlciAtPiBhKSAtPiBOdW1iZXIgLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdG8gaW52b2tlLiBQYXNzZWQgb25lIGFyZ3VtZW50LCB0aGUgY3VycmVudCB2YWx1ZSBvZiBgbmAuXG4gKiBAcGFyYW0ge051bWJlcn0gbiBBIHZhbHVlIGJldHdlZW4gYDBgIGFuZCBgbiAtIDFgLiBJbmNyZW1lbnRzIGFmdGVyIGVhY2ggZnVuY3Rpb24gY2FsbC5cbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBjb250YWluaW5nIHRoZSByZXR1cm4gdmFsdWVzIG9mIGFsbCBjYWxscyB0byBgZm5gLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudGltZXMoUi5pZGVudGl0eSwgNSk7IC8vPT4gWzAsIDEsIDIsIDMsIDRdXG4gKiBAc3ltYiBSLnRpbWVzKGYsIDApID0gW11cbiAqIEBzeW1iIFIudGltZXMoZiwgMSkgPSBbZigwKV1cbiAqIEBzeW1iIFIudGltZXMoZiwgMikgPSBbZigwKSwgZigxKV1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHRpbWVzKGZuLCBuKSB7XG4gIHZhciBsZW4gPSBOdW1iZXIobik7XG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGlzdDtcblxuICBpZiAobGVuIDwgMCB8fCBpc05hTihsZW4pKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ24gbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXInKTtcbiAgfVxuICBsaXN0ID0gbmV3IEFycmF5KGxlbik7XG4gIHdoaWxlIChpZHggPCBsZW4pIHtcbiAgICBsaXN0W2lkeF0gPSBmbihpZHgpO1xuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiBsaXN0O1xufSk7XG4iLCJ2YXIgaW52b2tlciA9IHJlcXVpcmUoJy4vaW52b2tlcicpO1xuXG5cbi8qKlxuICogVGhlIGxvd2VyIGNhc2UgdmVyc2lvbiBvZiBhIHN0cmluZy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC45LjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBzaWcgU3RyaW5nIC0+IFN0cmluZ1xuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIGxvd2VyIGNhc2UuXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSBsb3dlciBjYXNlIHZlcnNpb24gb2YgYHN0cmAuXG4gKiBAc2VlIFIudG9VcHBlclxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudG9Mb3dlcignWFlaJyk7IC8vPT4gJ3h5eidcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBpbnZva2VyKDAsICd0b0xvd2VyQ2FzZScpO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBfaGFzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9faGFzJyk7XG5cblxuLyoqXG4gKiBDb252ZXJ0cyBhbiBvYmplY3QgaW50byBhbiBhcnJheSBvZiBrZXksIHZhbHVlIGFycmF5cy4gT25seSB0aGUgb2JqZWN0J3NcbiAqIG93biBwcm9wZXJ0aWVzIGFyZSB1c2VkLlxuICogTm90ZSB0aGF0IHRoZSBvcmRlciBvZiB0aGUgb3V0cHV0IGFycmF5IGlzIG5vdCBndWFyYW50ZWVkIHRvIGJlIGNvbnNpc3RlbnRcbiAqIGFjcm9zcyBkaWZmZXJlbnQgSlMgcGxhdGZvcm1zLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjQuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyB7U3RyaW5nOiAqfSAtPiBbW1N0cmluZywqXV1cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBleHRyYWN0IGZyb21cbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBvZiBrZXksIHZhbHVlIGFycmF5cyBmcm9tIHRoZSBvYmplY3QncyBvd24gcHJvcGVydGllcy5cbiAqIEBzZWUgUi5mcm9tUGFpcnNcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnRvUGFpcnMoe2E6IDEsIGI6IDIsIGM6IDN9KTsgLy89PiBbWydhJywgMV0sIFsnYicsIDJdLCBbJ2MnLCAzXV1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIHRvUGFpcnMob2JqKSB7XG4gIHZhciBwYWlycyA9IFtdO1xuICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgIGlmIChfaGFzKHByb3AsIG9iaikpIHtcbiAgICAgIHBhaXJzW3BhaXJzLmxlbmd0aF0gPSBbcHJvcCwgb2JqW3Byb3BdXTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHBhaXJzO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xuXG5cbi8qKlxuICogQ29udmVydHMgYW4gb2JqZWN0IGludG8gYW4gYXJyYXkgb2Yga2V5LCB2YWx1ZSBhcnJheXMuIFRoZSBvYmplY3QncyBvd25cbiAqIHByb3BlcnRpZXMgYW5kIHByb3RvdHlwZSBwcm9wZXJ0aWVzIGFyZSB1c2VkLiBOb3RlIHRoYXQgdGhlIG9yZGVyIG9mIHRoZVxuICogb3V0cHV0IGFycmF5IGlzIG5vdCBndWFyYW50ZWVkIHRvIGJlIGNvbnNpc3RlbnQgYWNyb3NzIGRpZmZlcmVudCBKU1xuICogcGxhdGZvcm1zLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjQuMFxuICogQGNhdGVnb3J5IE9iamVjdFxuICogQHNpZyB7U3RyaW5nOiAqfSAtPiBbW1N0cmluZywqXV1cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBleHRyYWN0IGZyb21cbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBvZiBrZXksIHZhbHVlIGFycmF5cyBmcm9tIHRoZSBvYmplY3QncyBvd25cbiAqICAgICAgICAgYW5kIHByb3RvdHlwZSBwcm9wZXJ0aWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBGID0gZnVuY3Rpb24oKSB7IHRoaXMueCA9ICdYJzsgfTtcbiAqICAgICAgRi5wcm90b3R5cGUueSA9ICdZJztcbiAqICAgICAgdmFyIGYgPSBuZXcgRigpO1xuICogICAgICBSLnRvUGFpcnNJbihmKTsgLy89PiBbWyd4JywnWCddLCBbJ3knLCdZJ11dXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiB0b1BhaXJzSW4ob2JqKSB7XG4gIHZhciBwYWlycyA9IFtdO1xuICBmb3IgKHZhciBwcm9wIGluIG9iaikge1xuICAgIHBhaXJzW3BhaXJzLmxlbmd0aF0gPSBbcHJvcCwgb2JqW3Byb3BdXTtcbiAgfVxuICByZXR1cm4gcGFpcnM7XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgX3RvU3RyaW5nID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fdG9TdHJpbmcnKTtcblxuXG4vKipcbiAqIFJldHVybnMgdGhlIHN0cmluZyByZXByZXNlbnRhdGlvbiBvZiB0aGUgZ2l2ZW4gdmFsdWUuIGBldmFsYCdpbmcgdGhlIG91dHB1dFxuICogc2hvdWxkIHJlc3VsdCBpbiBhIHZhbHVlIGVxdWl2YWxlbnQgdG8gdGhlIGlucHV0IHZhbHVlLiBNYW55IG9mIHRoZSBidWlsdC1pblxuICogYHRvU3RyaW5nYCBtZXRob2RzIGRvIG5vdCBzYXRpc2Z5IHRoaXMgcmVxdWlyZW1lbnQuXG4gKlxuICogSWYgdGhlIGdpdmVuIHZhbHVlIGlzIGFuIGBbb2JqZWN0IE9iamVjdF1gIHdpdGggYSBgdG9TdHJpbmdgIG1ldGhvZCBvdGhlclxuICogdGhhbiBgT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZ2AsIHRoaXMgbWV0aG9kIGlzIGludm9rZWQgd2l0aCBubyBhcmd1bWVudHNcbiAqIHRvIHByb2R1Y2UgdGhlIHJldHVybiB2YWx1ZS4gVGhpcyBtZWFucyB1c2VyLWRlZmluZWQgY29uc3RydWN0b3IgZnVuY3Rpb25zXG4gKiBjYW4gcHJvdmlkZSBhIHN1aXRhYmxlIGB0b1N0cmluZ2AgbWV0aG9kLiBGb3IgZXhhbXBsZTpcbiAqXG4gKiAgICAgZnVuY3Rpb24gUG9pbnQoeCwgeSkge1xuICogICAgICAgdGhpcy54ID0geDtcbiAqICAgICAgIHRoaXMueSA9IHk7XG4gKiAgICAgfVxuICpcbiAqICAgICBQb2ludC5wcm90b3R5cGUudG9TdHJpbmcgPSBmdW5jdGlvbigpIHtcbiAqICAgICAgIHJldHVybiAnbmV3IFBvaW50KCcgKyB0aGlzLnggKyAnLCAnICsgdGhpcy55ICsgJyknO1xuICogICAgIH07XG4gKlxuICogICAgIFIudG9TdHJpbmcobmV3IFBvaW50KDEsIDIpKTsgLy89PiAnbmV3IFBvaW50KDEsIDIpJ1xuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE0LjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBzaWcgKiAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7Kn0gdmFsXG4gKiBAcmV0dXJuIHtTdHJpbmd9XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi50b1N0cmluZyg0Mik7IC8vPT4gJzQyJ1xuICogICAgICBSLnRvU3RyaW5nKCdhYmMnKTsgLy89PiAnXCJhYmNcIidcbiAqICAgICAgUi50b1N0cmluZyhbMSwgMiwgM10pOyAvLz0+ICdbMSwgMiwgM10nXG4gKiAgICAgIFIudG9TdHJpbmcoe2ZvbzogMSwgYmFyOiAyLCBiYXo6IDN9KTsgLy89PiAne1wiYmFyXCI6IDIsIFwiYmF6XCI6IDMsIFwiZm9vXCI6IDF9J1xuICogICAgICBSLnRvU3RyaW5nKG5ldyBEYXRlKCcyMDAxLTAyLTAzVDA0OjA1OjA2WicpKTsgLy89PiAnbmV3IERhdGUoXCIyMDAxLTAyLTAzVDA0OjA1OjA2LjAwMFpcIiknXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiB0b1N0cmluZyh2YWwpIHsgcmV0dXJuIF90b1N0cmluZyh2YWwsIFtdKTsgfSk7XG4iLCJ2YXIgaW52b2tlciA9IHJlcXVpcmUoJy4vaW52b2tlcicpO1xuXG5cbi8qKlxuICogVGhlIHVwcGVyIGNhc2UgdmVyc2lvbiBvZiBhIHN0cmluZy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC45LjBcbiAqIEBjYXRlZ29yeSBTdHJpbmdcbiAqIEBzaWcgU3RyaW5nIC0+IFN0cmluZ1xuICogQHBhcmFtIHtTdHJpbmd9IHN0ciBUaGUgc3RyaW5nIHRvIHVwcGVyIGNhc2UuXG4gKiBAcmV0dXJuIHtTdHJpbmd9IFRoZSB1cHBlciBjYXNlIHZlcnNpb24gb2YgYHN0cmAuXG4gKiBAc2VlIFIudG9Mb3dlclxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudG9VcHBlcignYWJjJyk7IC8vPT4gJ0FCQydcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBpbnZva2VyKDAsICd0b1VwcGVyQ2FzZScpO1xuIiwidmFyIF9yZWR1Y2UgPSByZXF1aXJlKCcuL2ludGVybmFsL19yZWR1Y2UnKTtcbnZhciBfeHdyYXAgPSByZXF1aXJlKCcuL2ludGVybmFsL194d3JhcCcpO1xudmFyIGN1cnJ5TiA9IHJlcXVpcmUoJy4vY3VycnlOJyk7XG5cblxuLyoqXG4gKiBJbml0aWFsaXplcyBhIHRyYW5zZHVjZXIgdXNpbmcgc3VwcGxpZWQgaXRlcmF0b3IgZnVuY3Rpb24uIFJldHVybnMgYSBzaW5nbGVcbiAqIGl0ZW0gYnkgaXRlcmF0aW5nIHRocm91Z2ggdGhlIGxpc3QsIHN1Y2Nlc3NpdmVseSBjYWxsaW5nIHRoZSB0cmFuc2Zvcm1lZFxuICogaXRlcmF0b3IgZnVuY3Rpb24gYW5kIHBhc3NpbmcgaXQgYW4gYWNjdW11bGF0b3IgdmFsdWUgYW5kIHRoZSBjdXJyZW50IHZhbHVlXG4gKiBmcm9tIHRoZSBhcnJheSwgYW5kIHRoZW4gcGFzc2luZyB0aGUgcmVzdWx0IHRvIHRoZSBuZXh0IGNhbGwuXG4gKlxuICogVGhlIGl0ZXJhdG9yIGZ1bmN0aW9uIHJlY2VpdmVzIHR3byB2YWx1ZXM6ICooYWNjLCB2YWx1ZSkqLiBJdCB3aWxsIGJlXG4gKiB3cmFwcGVkIGFzIGEgdHJhbnNmb3JtZXIgdG8gaW5pdGlhbGl6ZSB0aGUgdHJhbnNkdWNlci4gQSB0cmFuc2Zvcm1lciBjYW4gYmVcbiAqIHBhc3NlZCBkaXJlY3RseSBpbiBwbGFjZSBvZiBhbiBpdGVyYXRvciBmdW5jdGlvbi4gSW4gYm90aCBjYXNlcywgaXRlcmF0aW9uXG4gKiBtYXkgYmUgc3RvcHBlZCBlYXJseSB3aXRoIHRoZSBgUi5yZWR1Y2VkYCBmdW5jdGlvbi5cbiAqXG4gKiBBIHRyYW5zZHVjZXIgaXMgYSBmdW5jdGlvbiB0aGF0IGFjY2VwdHMgYSB0cmFuc2Zvcm1lciBhbmQgcmV0dXJucyBhXG4gKiB0cmFuc2Zvcm1lciBhbmQgY2FuIGJlIGNvbXBvc2VkIGRpcmVjdGx5LlxuICpcbiAqIEEgdHJhbnNmb3JtZXIgaXMgYW4gYW4gb2JqZWN0IHRoYXQgcHJvdmlkZXMgYSAyLWFyaXR5IHJlZHVjaW5nIGl0ZXJhdG9yXG4gKiBmdW5jdGlvbiwgc3RlcCwgMC1hcml0eSBpbml0aWFsIHZhbHVlIGZ1bmN0aW9uLCBpbml0LCBhbmQgMS1hcml0eSByZXN1bHRcbiAqIGV4dHJhY3Rpb24gZnVuY3Rpb24sIHJlc3VsdC4gVGhlIHN0ZXAgZnVuY3Rpb24gaXMgdXNlZCBhcyB0aGUgaXRlcmF0b3JcbiAqIGZ1bmN0aW9uIGluIHJlZHVjZS4gVGhlIHJlc3VsdCBmdW5jdGlvbiBpcyB1c2VkIHRvIGNvbnZlcnQgdGhlIGZpbmFsXG4gKiBhY2N1bXVsYXRvciBpbnRvIHRoZSByZXR1cm4gdHlwZSBhbmQgaW4gbW9zdCBjYXNlcyBpcyBSLmlkZW50aXR5LiBUaGUgaW5pdFxuICogZnVuY3Rpb24gY2FuIGJlIHVzZWQgdG8gcHJvdmlkZSBhbiBpbml0aWFsIGFjY3VtdWxhdG9yLCBidXQgaXMgaWdub3JlZCBieVxuICogdHJhbnNkdWNlLlxuICpcbiAqIFRoZSBpdGVyYXRpb24gaXMgcGVyZm9ybWVkIHdpdGggUi5yZWR1Y2UgYWZ0ZXIgaW5pdGlhbGl6aW5nIHRoZSB0cmFuc2R1Y2VyLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEyLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIChjIC0+IGMpIC0+IChhLGIgLT4gYSkgLT4gYSAtPiBbYl0gLT4gYVxuICogQHBhcmFtIHtGdW5jdGlvbn0geGYgVGhlIHRyYW5zZHVjZXIgZnVuY3Rpb24uIFJlY2VpdmVzIGEgdHJhbnNmb3JtZXIgYW5kIHJldHVybnMgYSB0cmFuc2Zvcm1lci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBpdGVyYXRvciBmdW5jdGlvbi4gUmVjZWl2ZXMgdHdvIHZhbHVlcywgdGhlIGFjY3VtdWxhdG9yIGFuZCB0aGVcbiAqICAgICAgICBjdXJyZW50IGVsZW1lbnQgZnJvbSB0aGUgYXJyYXkuIFdyYXBwZWQgYXMgdHJhbnNmb3JtZXIsIGlmIG5lY2Vzc2FyeSwgYW5kIHVzZWQgdG9cbiAqICAgICAgICBpbml0aWFsaXplIHRoZSB0cmFuc2R1Y2VyXG4gKiBAcGFyYW0geyp9IGFjYyBUaGUgaW5pdGlhbCBhY2N1bXVsYXRvciB2YWx1ZS5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGxpc3QgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHJldHVybiB7Kn0gVGhlIGZpbmFsLCBhY2N1bXVsYXRlZCB2YWx1ZS5cbiAqIEBzZWUgUi5yZWR1Y2UsIFIucmVkdWNlZCwgUi5pbnRvXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIG51bWJlcnMgPSBbMSwgMiwgMywgNF07XG4gKiAgICAgIHZhciB0cmFuc2R1Y2VyID0gUi5jb21wb3NlKFIubWFwKFIuYWRkKDEpKSwgUi50YWtlKDIpKTtcbiAqXG4gKiAgICAgIFIudHJhbnNkdWNlKHRyYW5zZHVjZXIsIFIuZmxpcChSLmFwcGVuZCksIFtdLCBudW1iZXJzKTsgLy89PiBbMiwgM11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBjdXJyeU4oNCwgZnVuY3Rpb24gdHJhbnNkdWNlKHhmLCBmbiwgYWNjLCBsaXN0KSB7XG4gIHJldHVybiBfcmVkdWNlKHhmKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJyA/IF94d3JhcChmbikgOiBmbiksIGFjYywgbGlzdCk7XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG5cblxuLyoqXG4gKiBUcmFuc3Bvc2VzIHRoZSByb3dzIGFuZCBjb2x1bW5zIG9mIGEgMkQgbGlzdC5cbiAqIFdoZW4gcGFzc2VkIGEgbGlzdCBvZiBgbmAgbGlzdHMgb2YgbGVuZ3RoIGB4YCxcbiAqIHJldHVybnMgYSBsaXN0IG9mIGB4YCBsaXN0cyBvZiBsZW5ndGggYG5gLlxuICpcbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xOS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBbW2FdXSAtPiBbW2FdXVxuICogQHBhcmFtIHtBcnJheX0gbGlzdCBBIDJEIGxpc3RcbiAqIEByZXR1cm4ge0FycmF5fSBBIDJEIGxpc3RcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnRyYW5zcG9zZShbWzEsICdhJ10sIFsyLCAnYiddLCBbMywgJ2MnXV0pIC8vPT4gW1sxLCAyLCAzXSwgWydhJywgJ2InLCAnYyddXVxuICogICAgICBSLnRyYW5zcG9zZShbWzEsIDIsIDNdLCBbJ2EnLCAnYicsICdjJ11dKSAvLz0+IFtbMSwgJ2EnXSwgWzIsICdiJ10sIFszLCAnYyddXVxuICpcbiAqIElmIHNvbWUgb2YgdGhlIHJvd3MgYXJlIHNob3J0ZXIgdGhhbiB0aGUgZm9sbG93aW5nIHJvd3MsIHRoZWlyIGVsZW1lbnRzIGFyZSBza2lwcGVkOlxuICpcbiAqICAgICAgUi50cmFuc3Bvc2UoW1sxMCwgMTFdLCBbMjBdLCBbXSwgWzMwLCAzMSwgMzJdXSkgLy89PiBbWzEwLCAyMCwgMzBdLCBbMTEsIDMxXSwgWzMyXV1cbiAqIEBzeW1iIFIudHJhbnNwb3NlKFtbYV0sIFtiXSwgW2NdXSkgPSBbYSwgYiwgY11cbiAqIEBzeW1iIFIudHJhbnNwb3NlKFtbYSwgYl0sIFtjLCBkXV0pID0gW1thLCBjXSwgW2IsIGRdXVxuICogQHN5bWIgUi50cmFuc3Bvc2UoW1thLCBiXSwgW2NdXSkgPSBbW2EsIGNdLCBbYl1dXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiB0cmFuc3Bvc2Uob3V0ZXJsaXN0KSB7XG4gIHZhciBpID0gMDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB3aGlsZSAoaSA8IG91dGVybGlzdC5sZW5ndGgpIHtcbiAgICB2YXIgaW5uZXJsaXN0ID0gb3V0ZXJsaXN0W2ldO1xuICAgIHZhciBqID0gMDtcbiAgICB3aGlsZSAoaiA8IGlubmVybGlzdC5sZW5ndGgpIHtcbiAgICAgIGlmICh0eXBlb2YgcmVzdWx0W2pdID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICByZXN1bHRbal0gPSBbXTtcbiAgICAgIH1cbiAgICAgIHJlc3VsdFtqXS5wdXNoKGlubmVybGlzdFtqXSk7XG4gICAgICBqICs9IDE7XG4gICAgfVxuICAgIGkgKz0gMTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCJ2YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xudmFyIG1hcCA9IHJlcXVpcmUoJy4vbWFwJyk7XG52YXIgc2VxdWVuY2UgPSByZXF1aXJlKCcuL3NlcXVlbmNlJyk7XG5cblxuLyoqXG4gKiBNYXBzIGFuIFtBcHBsaWNhdGl2ZV0oaHR0cHM6Ly9naXRodWIuY29tL2ZhbnRhc3lsYW5kL2ZhbnRhc3ktbGFuZCNhcHBsaWNhdGl2ZSktcmV0dXJuaW5nXG4gKiBmdW5jdGlvbiBvdmVyIGEgW1RyYXZlcnNhYmxlXShodHRwczovL2dpdGh1Yi5jb20vZmFudGFzeWxhbmQvZmFudGFzeS1sYW5kI3RyYXZlcnNhYmxlKSxcbiAqIHRoZW4gdXNlcyBbYHNlcXVlbmNlYF0oI3NlcXVlbmNlKSB0byB0cmFuc2Zvcm0gdGhlIHJlc3VsdGluZyBUcmF2ZXJzYWJsZSBvZiBBcHBsaWNhdGl2ZVxuICogaW50byBhbiBBcHBsaWNhdGl2ZSBvZiBUcmF2ZXJzYWJsZS5cbiAqXG4gKiBEaXNwYXRjaGVzIHRvIHRoZSBgc2VxdWVuY2VgIG1ldGhvZCBvZiB0aGUgdGhpcmQgYXJndW1lbnQsIGlmIHByZXNlbnQuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTkuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgKEFwcGxpY2F0aXZlIGYsIFRyYXZlcnNhYmxlIHQpID0+IChhIC0+IGYgYSkgLT4gKGEgLT4gZiBiKSAtPiB0IGEgLT4gZiAodCBiKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gb2ZcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZcbiAqIEBwYXJhbSB7Kn0gdHJhdmVyc2FibGVcbiAqIEByZXR1cm4geyp9XG4gKiBAc2VlIFIuc2VxdWVuY2VcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICAvLyBSZXR1cm5zIGBOb3RoaW5nYCBpZiB0aGUgZ2l2ZW4gZGl2aXNvciBpcyBgMGBcbiAqICAgICAgc2FmZURpdiA9IG4gPT4gZCA9PiBkID09PSAwID8gTm90aGluZygpIDogSnVzdChuIC8gZClcbiAqXG4gKiAgICAgIFIudHJhdmVyc2UoTWF5YmUub2YsIHNhZmVEaXYoMTApLCBbMiwgNCwgNV0pOyAvLz0+IEp1c3QoWzUsIDIuNSwgMl0pXG4gKiAgICAgIFIudHJhdmVyc2UoTWF5YmUub2YsIHNhZmVEaXYoMTApLCBbMiwgMCwgNV0pOyAvLz0+IE5vdGhpbmdcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIHRyYXZlcnNlKG9mLCBmLCB0cmF2ZXJzYWJsZSkge1xuICByZXR1cm4gc2VxdWVuY2Uob2YsIG1hcChmLCB0cmF2ZXJzYWJsZSkpO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MScpO1xuXG5cbi8qKlxuICogUmVtb3ZlcyAoc3RyaXBzKSB3aGl0ZXNwYWNlIGZyb20gYm90aCBlbmRzIG9mIHRoZSBzdHJpbmcuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuNi4wXG4gKiBAY2F0ZWdvcnkgU3RyaW5nXG4gKiBAc2lnIFN0cmluZyAtPiBTdHJpbmdcbiAqIEBwYXJhbSB7U3RyaW5nfSBzdHIgVGhlIHN0cmluZyB0byB0cmltLlxuICogQHJldHVybiB7U3RyaW5nfSBUcmltbWVkIHZlcnNpb24gb2YgYHN0cmAuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi50cmltKCcgICB4eXogICcpOyAvLz0+ICd4eXonXG4gKiAgICAgIFIubWFwKFIudHJpbSwgUi5zcGxpdCgnLCcsICd4LCB5LCB6JykpOyAvLz0+IFsneCcsICd5JywgJ3onXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgdmFyIHdzID0gJ1xceDA5XFx4MEFcXHgwQlxceDBDXFx4MERcXHgyMFxceEEwXFx1MTY4MFxcdTE4MEVcXHUyMDAwXFx1MjAwMVxcdTIwMDJcXHUyMDAzJyArXG4gICAgICAgICAgICdcXHUyMDA0XFx1MjAwNVxcdTIwMDZcXHUyMDA3XFx1MjAwOFxcdTIwMDlcXHUyMDBBXFx1MjAyRlxcdTIwNUZcXHUzMDAwXFx1MjAyOCcgK1xuICAgICAgICAgICAnXFx1MjAyOVxcdUZFRkYnO1xuICB2YXIgemVyb1dpZHRoID0gJ1xcdTIwMGInO1xuICB2YXIgaGFzUHJvdG9UcmltID0gKHR5cGVvZiBTdHJpbmcucHJvdG90eXBlLnRyaW0gPT09ICdmdW5jdGlvbicpO1xuICBpZiAoIWhhc1Byb3RvVHJpbSB8fCAod3MudHJpbSgpIHx8ICF6ZXJvV2lkdGgudHJpbSgpKSkge1xuICAgIHJldHVybiBfY3VycnkxKGZ1bmN0aW9uIHRyaW0oc3RyKSB7XG4gICAgICB2YXIgYmVnaW5SeCA9IG5ldyBSZWdFeHAoJ15bJyArIHdzICsgJ11bJyArIHdzICsgJ10qJyk7XG4gICAgICB2YXIgZW5kUnggPSBuZXcgUmVnRXhwKCdbJyArIHdzICsgJ11bJyArIHdzICsgJ10qJCcpO1xuICAgICAgcmV0dXJuIHN0ci5yZXBsYWNlKGJlZ2luUngsICcnKS5yZXBsYWNlKGVuZFJ4LCAnJyk7XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIF9jdXJyeTEoZnVuY3Rpb24gdHJpbShzdHIpIHtcbiAgICAgIHJldHVybiBzdHIudHJpbSgpO1xuICAgIH0pO1xuICB9XG59KCkpO1xuIiwidmFyIF9hcml0eSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2FyaXR5Jyk7XG52YXIgX2NvbmNhdCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2NvbmNhdCcpO1xudmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIGB0cnlDYXRjaGAgdGFrZXMgdHdvIGZ1bmN0aW9ucywgYSBgdHJ5ZXJgIGFuZCBhIGBjYXRjaGVyYC4gVGhlIHJldHVybmVkXG4gKiBmdW5jdGlvbiBldmFsdWF0ZXMgdGhlIGB0cnllcmA7IGlmIGl0IGRvZXMgbm90IHRocm93LCBpdCBzaW1wbHkgcmV0dXJucyB0aGVcbiAqIHJlc3VsdC4gSWYgdGhlIGB0cnllcmAgKmRvZXMqIHRocm93LCB0aGUgcmV0dXJuZWQgZnVuY3Rpb24gZXZhbHVhdGVzIHRoZVxuICogYGNhdGNoZXJgIGZ1bmN0aW9uIGFuZCByZXR1cm5zIGl0cyByZXN1bHQuIE5vdGUgdGhhdCBmb3IgZWZmZWN0aXZlXG4gKiBjb21wb3NpdGlvbiB3aXRoIHRoaXMgZnVuY3Rpb24sIGJvdGggdGhlIGB0cnllcmAgYW5kIGBjYXRjaGVyYCBmdW5jdGlvbnNcbiAqIG11c3QgcmV0dXJuIHRoZSBzYW1lIHR5cGUgb2YgcmVzdWx0cy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4yMC4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKC4uLnggLT4gYSkgLT4gKChlLCAuLi54KSAtPiBhKSAtPiAoLi4ueCAtPiBhKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gdHJ5ZXIgVGhlIGZ1bmN0aW9uIHRoYXQgbWF5IHRocm93LlxuICogQHBhcmFtIHtGdW5jdGlvbn0gY2F0Y2hlciBUaGUgZnVuY3Rpb24gdGhhdCB3aWxsIGJlIGV2YWx1YXRlZCBpZiBgdHJ5ZXJgIHRocm93cy5cbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBBIG5ldyBmdW5jdGlvbiB0aGF0IHdpbGwgY2F0Y2ggZXhjZXB0aW9ucyBhbmQgc2VuZCB0aGVuIHRvIHRoZSBjYXRjaGVyLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudHJ5Q2F0Y2goUi5wcm9wKCd4JyksIFIuRikoe3g6IHRydWV9KTsgLy89PiB0cnVlXG4gKiAgICAgIFIudHJ5Q2F0Y2goUi5wcm9wKCd4JyksIFIuRikobnVsbCk7ICAgICAgLy89PiBmYWxzZVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gX3RyeUNhdGNoKHRyeWVyLCBjYXRjaGVyKSB7XG4gIHJldHVybiBfYXJpdHkodHJ5ZXIubGVuZ3RoLCBmdW5jdGlvbigpIHtcbiAgICB0cnkge1xuICAgICAgcmV0dXJuIHRyeWVyLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgcmV0dXJuIGNhdGNoZXIuYXBwbHkodGhpcywgX2NvbmNhdChbZV0sIGFyZ3VtZW50cykpO1xuICAgIH1cbiAgfSk7XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG5cblxuLyoqXG4gKiBHaXZlcyBhIHNpbmdsZS13b3JkIHN0cmluZyBkZXNjcmlwdGlvbiBvZiB0aGUgKG5hdGl2ZSkgdHlwZSBvZiBhIHZhbHVlLFxuICogcmV0dXJuaW5nIHN1Y2ggYW5zd2VycyBhcyAnT2JqZWN0JywgJ051bWJlcicsICdBcnJheScsIG9yICdOdWxsJy4gRG9lcyBub3RcbiAqIGF0dGVtcHQgdG8gZGlzdGluZ3Vpc2ggdXNlciBPYmplY3QgdHlwZXMgYW55IGZ1cnRoZXIsIHJlcG9ydGluZyB0aGVtIGFsbCBhc1xuICogJ09iamVjdCcuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuOC4wXG4gKiBAY2F0ZWdvcnkgVHlwZVxuICogQHNpZyAoKiAtPiB7Kn0pIC0+IFN0cmluZ1xuICogQHBhcmFtIHsqfSB2YWwgVGhlIHZhbHVlIHRvIHRlc3RcbiAqIEByZXR1cm4ge1N0cmluZ31cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnR5cGUoe30pOyAvLz0+IFwiT2JqZWN0XCJcbiAqICAgICAgUi50eXBlKDEpOyAvLz0+IFwiTnVtYmVyXCJcbiAqICAgICAgUi50eXBlKGZhbHNlKTsgLy89PiBcIkJvb2xlYW5cIlxuICogICAgICBSLnR5cGUoJ3MnKTsgLy89PiBcIlN0cmluZ1wiXG4gKiAgICAgIFIudHlwZShudWxsKTsgLy89PiBcIk51bGxcIlxuICogICAgICBSLnR5cGUoW10pOyAvLz0+IFwiQXJyYXlcIlxuICogICAgICBSLnR5cGUoL1tBLXpdLyk7IC8vPT4gXCJSZWdFeHBcIlxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gdHlwZSh2YWwpIHtcbiAgcmV0dXJuIHZhbCA9PT0gbnVsbCAgICAgID8gJ051bGwnICAgICAgOlxuICAgICAgICAgdmFsID09PSB1bmRlZmluZWQgPyAnVW5kZWZpbmVkJyA6XG4gICAgICAgICBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwodmFsKS5zbGljZSg4LCAtMSk7XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG5cblxuLyoqXG4gKiBUYWtlcyBhIGZ1bmN0aW9uIGBmbmAsIHdoaWNoIHRha2VzIGEgc2luZ2xlIGFycmF5IGFyZ3VtZW50LCBhbmQgcmV0dXJucyBhXG4gKiBmdW5jdGlvbiB3aGljaDpcbiAqXG4gKiAgIC0gdGFrZXMgYW55IG51bWJlciBvZiBwb3NpdGlvbmFsIGFyZ3VtZW50cztcbiAqICAgLSBwYXNzZXMgdGhlc2UgYXJndW1lbnRzIHRvIGBmbmAgYXMgYW4gYXJyYXk7IGFuZFxuICogICAtIHJldHVybnMgdGhlIHJlc3VsdC5cbiAqXG4gKiBJbiBvdGhlciB3b3JkcywgUi51bmFwcGx5IGRlcml2ZXMgYSB2YXJpYWRpYyBmdW5jdGlvbiBmcm9tIGEgZnVuY3Rpb24gd2hpY2hcbiAqIHRha2VzIGFuIGFycmF5LiBSLnVuYXBwbHkgaXMgdGhlIGludmVyc2Ugb2YgUi5hcHBseS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC44LjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoWyouLi5dIC0+IGEpIC0+ICgqLi4uIC0+IGEpXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmblxuICogQHJldHVybiB7RnVuY3Rpb259XG4gKiBAc2VlIFIuYXBwbHlcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnVuYXBwbHkoSlNPTi5zdHJpbmdpZnkpKDEsIDIsIDMpOyAvLz0+ICdbMSwyLDNdJ1xuICogQHN5bWIgUi51bmFwcGx5KGYpKGEsIGIpID0gZihbYSwgYl0pXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MShmdW5jdGlvbiB1bmFwcGx5KGZuKSB7XG4gIHJldHVybiBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4gZm4oQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCAwKSk7XG4gIH07XG59KTtcbiIsInZhciBfY3VycnkxID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkxJyk7XG52YXIgbkFyeSA9IHJlcXVpcmUoJy4vbkFyeScpO1xuXG5cbi8qKlxuICogV3JhcHMgYSBmdW5jdGlvbiBvZiBhbnkgYXJpdHkgKGluY2x1ZGluZyBudWxsYXJ5KSBpbiBhIGZ1bmN0aW9uIHRoYXQgYWNjZXB0c1xuICogZXhhY3RseSAxIHBhcmFtZXRlci4gQW55IGV4dHJhbmVvdXMgcGFyYW1ldGVycyB3aWxsIG5vdCBiZSBwYXNzZWQgdG8gdGhlXG4gKiBzdXBwbGllZCBmdW5jdGlvbi5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4yLjBcbiAqIEBjYXRlZ29yeSBGdW5jdGlvblxuICogQHNpZyAoKiAtPiBiKSAtPiAoYSAtPiBiKVxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcmV0dXJuIHtGdW5jdGlvbn0gQSBuZXcgZnVuY3Rpb24gd3JhcHBpbmcgYGZuYC4gVGhlIG5ldyBmdW5jdGlvbiBpcyBndWFyYW50ZWVkIHRvIGJlIG9mXG4gKiAgICAgICAgIGFyaXR5IDEuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHRha2VzVHdvQXJncyA9IGZ1bmN0aW9uKGEsIGIpIHtcbiAqICAgICAgICByZXR1cm4gW2EsIGJdO1xuICogICAgICB9O1xuICogICAgICB0YWtlc1R3b0FyZ3MubGVuZ3RoOyAvLz0+IDJcbiAqICAgICAgdGFrZXNUd29BcmdzKDEsIDIpOyAvLz0+IFsxLCAyXVxuICpcbiAqICAgICAgdmFyIHRha2VzT25lQXJnID0gUi51bmFyeSh0YWtlc1R3b0FyZ3MpO1xuICogICAgICB0YWtlc09uZUFyZy5sZW5ndGg7IC8vPT4gMVxuICogICAgICAvLyBPbmx5IDEgYXJndW1lbnQgaXMgcGFzc2VkIHRvIHRoZSB3cmFwcGVkIGZ1bmN0aW9uXG4gKiAgICAgIHRha2VzT25lQXJnKDEsIDIpOyAvLz0+IFsxLCB1bmRlZmluZWRdXG4gKiBAc3ltYiBSLnVuYXJ5KGYpKGEsIGIsIGMpID0gZihhKVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTEoZnVuY3Rpb24gdW5hcnkoZm4pIHtcbiAgcmV0dXJuIG5BcnkoMSwgZm4pO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIGN1cnJ5TiA9IHJlcXVpcmUoJy4vY3VycnlOJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgZnVuY3Rpb24gb2YgYXJpdHkgYG5gIGZyb20gYSAobWFudWFsbHkpIGN1cnJpZWQgZnVuY3Rpb24uXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMTQuMFxuICogQGNhdGVnb3J5IEZ1bmN0aW9uXG4gKiBAc2lnIE51bWJlciAtPiAoYSAtPiBiKSAtPiAoYSAtPiBjKVxuICogQHBhcmFtIHtOdW1iZXJ9IGxlbmd0aCBUaGUgYXJpdHkgZm9yIHRoZSByZXR1cm5lZCBmdW5jdGlvbi5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byB1bmN1cnJ5LlxuICogQHJldHVybiB7RnVuY3Rpb259IEEgbmV3IGZ1bmN0aW9uLlxuICogQHNlZSBSLmN1cnJ5XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGFkZEZvdXIgPSBhID0+IGIgPT4gYyA9PiBkID0+IGEgKyBiICsgYyArIGQ7XG4gKlxuICogICAgICB2YXIgdW5jdXJyaWVkQWRkRm91ciA9IFIudW5jdXJyeU4oNCwgYWRkRm91cik7XG4gKiAgICAgIHVuY3VycmllZEFkZEZvdXIoMSwgMiwgMywgNCk7IC8vPT4gMTBcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHVuY3VycnlOKGRlcHRoLCBmbikge1xuICByZXR1cm4gY3VycnlOKGRlcHRoLCBmdW5jdGlvbigpIHtcbiAgICB2YXIgY3VycmVudERlcHRoID0gMTtcbiAgICB2YXIgdmFsdWUgPSBmbjtcbiAgICB2YXIgaWR4ID0gMDtcbiAgICB2YXIgZW5kSWR4O1xuICAgIHdoaWxlIChjdXJyZW50RGVwdGggPD0gZGVwdGggJiYgdHlwZW9mIHZhbHVlID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICBlbmRJZHggPSBjdXJyZW50RGVwdGggPT09IGRlcHRoID8gYXJndW1lbnRzLmxlbmd0aCA6IGlkeCArIHZhbHVlLmxlbmd0aDtcbiAgICAgIHZhbHVlID0gdmFsdWUuYXBwbHkodGhpcywgQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCBpZHgsIGVuZElkeCkpO1xuICAgICAgY3VycmVudERlcHRoICs9IDE7XG4gICAgICBpZHggPSBlbmRJZHg7XG4gICAgfVxuICAgIHJldHVybiB2YWx1ZTtcbiAgfSk7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBCdWlsZHMgYSBsaXN0IGZyb20gYSBzZWVkIHZhbHVlLiBBY2NlcHRzIGFuIGl0ZXJhdG9yIGZ1bmN0aW9uLCB3aGljaCByZXR1cm5zXG4gKiBlaXRoZXIgZmFsc2UgdG8gc3RvcCBpdGVyYXRpb24gb3IgYW4gYXJyYXkgb2YgbGVuZ3RoIDIgY29udGFpbmluZyB0aGUgdmFsdWVcbiAqIHRvIGFkZCB0byB0aGUgcmVzdWx0aW5nIGxpc3QgYW5kIHRoZSBzZWVkIHRvIGJlIHVzZWQgaW4gdGhlIG5leHQgY2FsbCB0byB0aGVcbiAqIGl0ZXJhdG9yIGZ1bmN0aW9uLlxuICpcbiAqIFRoZSBpdGVyYXRvciBmdW5jdGlvbiByZWNlaXZlcyBvbmUgYXJndW1lbnQ6ICooc2VlZCkqLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEwLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIChhIC0+IFtiXSkgLT4gKiAtPiBbYl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBpdGVyYXRvciBmdW5jdGlvbi4gcmVjZWl2ZXMgb25lIGFyZ3VtZW50LCBgc2VlZGAsIGFuZCByZXR1cm5zXG4gKiAgICAgICAgZWl0aGVyIGZhbHNlIHRvIHF1aXQgaXRlcmF0aW9uIG9yIGFuIGFycmF5IG9mIGxlbmd0aCB0d28gdG8gcHJvY2VlZC4gVGhlIGVsZW1lbnRcbiAqICAgICAgICBhdCBpbmRleCAwIG9mIHRoaXMgYXJyYXkgd2lsbCBiZSBhZGRlZCB0byB0aGUgcmVzdWx0aW5nIGFycmF5LCBhbmQgdGhlIGVsZW1lbnRcbiAqICAgICAgICBhdCBpbmRleCAxIHdpbGwgYmUgcGFzc2VkIHRvIHRoZSBuZXh0IGNhbGwgdG8gYGZuYC5cbiAqIEBwYXJhbSB7Kn0gc2VlZCBUaGUgc2VlZCB2YWx1ZS5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgZmluYWwgbGlzdC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgZiA9IG4gPT4gbiA+IDUwID8gZmFsc2UgOiBbLW4sIG4gKyAxMF07XG4gKiAgICAgIFIudW5mb2xkKGYsIDEwKTsgLy89PiBbLTEwLCAtMjAsIC0zMCwgLTQwLCAtNTBdXG4gKiBAc3ltYiBSLnVuZm9sZChmLCB4KSA9IFtmKHgpWzBdLCBmKGYoeClbMV0pWzBdLCBmKGYoZih4KVsxXSlbMV0pWzBdLCAuLi5dXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiB1bmZvbGQoZm4sIHNlZWQpIHtcbiAgdmFyIHBhaXIgPSBmbihzZWVkKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB3aGlsZSAocGFpciAmJiBwYWlyLmxlbmd0aCkge1xuICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IHBhaXJbMF07XG4gICAgcGFpciA9IGZuKHBhaXJbMV0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbiIsInZhciBfY29uY2F0ID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY29uY2F0Jyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIGNvbXBvc2UgPSByZXF1aXJlKCcuL2NvbXBvc2UnKTtcbnZhciB1bmlxID0gcmVxdWlyZSgnLi91bmlxJyk7XG5cblxuLyoqXG4gKiBDb21iaW5lcyB0d28gbGlzdHMgaW50byBhIHNldCAoaS5lLiBubyBkdXBsaWNhdGVzKSBjb21wb3NlZCBvZiB0aGUgZWxlbWVudHNcbiAqIG9mIGVhY2ggbGlzdC5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBSZWxhdGlvblxuICogQHNpZyBbKl0gLT4gWypdIC0+IFsqXVxuICogQHBhcmFtIHtBcnJheX0gYXMgVGhlIGZpcnN0IGxpc3QuXG4gKiBAcGFyYW0ge0FycmF5fSBicyBUaGUgc2Vjb25kIGxpc3QuXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIGZpcnN0IGFuZCBzZWNvbmQgbGlzdHMgY29uY2F0ZW5hdGVkLCB3aXRoXG4gKiAgICAgICAgIGR1cGxpY2F0ZXMgcmVtb3ZlZC5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnVuaW9uKFsxLCAyLCAzXSwgWzIsIDMsIDRdKTsgLy89PiBbMSwgMiwgMywgNF1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGNvbXBvc2UodW5pcSwgX2NvbmNhdCkpO1xuIiwidmFyIF9jb25jYXQgPSByZXF1aXJlKCcuL2ludGVybmFsL19jb25jYXQnKTtcbnZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG52YXIgdW5pcVdpdGggPSByZXF1aXJlKCcuL3VuaXFXaXRoJyk7XG5cblxuLyoqXG4gKiBDb21iaW5lcyB0d28gbGlzdHMgaW50byBhIHNldCAoaS5lLiBubyBkdXBsaWNhdGVzKSBjb21wb3NlZCBvZiB0aGUgZWxlbWVudHNcbiAqIG9mIGVhY2ggbGlzdC4gRHVwbGljYXRpb24gaXMgZGV0ZXJtaW5lZCBhY2NvcmRpbmcgdG8gdGhlIHZhbHVlIHJldHVybmVkIGJ5XG4gKiBhcHBseWluZyB0aGUgc3VwcGxpZWQgcHJlZGljYXRlIHRvIHR3byBsaXN0IGVsZW1lbnRzLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjEuMFxuICogQGNhdGVnb3J5IFJlbGF0aW9uXG4gKiBAc2lnIChhIC0+IGEgLT4gQm9vbGVhbikgLT4gWypdIC0+IFsqXSAtPiBbKl1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWQgQSBwcmVkaWNhdGUgdXNlZCB0byB0ZXN0IHdoZXRoZXIgdHdvIGl0ZW1zIGFyZSBlcXVhbC5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QxIFRoZSBmaXJzdCBsaXN0LlxuICogQHBhcmFtIHtBcnJheX0gbGlzdDIgVGhlIHNlY29uZCBsaXN0LlxuICogQHJldHVybiB7QXJyYXl9IFRoZSBmaXJzdCBhbmQgc2Vjb25kIGxpc3RzIGNvbmNhdGVuYXRlZCwgd2l0aFxuICogICAgICAgICBkdXBsaWNhdGVzIHJlbW92ZWQuXG4gKiBAc2VlIFIudW5pb25cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICB2YXIgbDEgPSBbe2E6IDF9LCB7YTogMn1dO1xuICogICAgICB2YXIgbDIgPSBbe2E6IDF9LCB7YTogNH1dO1xuICogICAgICBSLnVuaW9uV2l0aChSLmVxQnkoUi5wcm9wKCdhJykpLCBsMSwgbDIpOyAvLz0+IFt7YTogMX0sIHthOiAyfSwge2E6IDR9XVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gdW5pb25XaXRoKHByZWQsIGxpc3QxLCBsaXN0Mikge1xuICByZXR1cm4gdW5pcVdpdGgocHJlZCwgX2NvbmNhdChsaXN0MSwgbGlzdDIpKTtcbn0pO1xuIiwidmFyIGlkZW50aXR5ID0gcmVxdWlyZSgnLi9pZGVudGl0eScpO1xudmFyIHVuaXFCeSA9IHJlcXVpcmUoJy4vdW5pcUJ5Jyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgbmV3IGxpc3QgY29udGFpbmluZyBvbmx5IG9uZSBjb3B5IG9mIGVhY2ggZWxlbWVudCBpbiB0aGUgb3JpZ2luYWxcbiAqIGxpc3QuIGBSLmVxdWFsc2AgaXMgdXNlZCB0byBkZXRlcm1pbmUgZXF1YWxpdHkuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBhcnJheSB0byBjb25zaWRlci5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbGlzdCBvZiB1bmlxdWUgaXRlbXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi51bmlxKFsxLCAxLCAyLCAxXSk7IC8vPT4gWzEsIDJdXG4gKiAgICAgIFIudW5pcShbMSwgJzEnXSk7ICAgICAvLz0+IFsxLCAnMSddXG4gKiAgICAgIFIudW5pcShbWzQyXSwgWzQyXV0pOyAvLz0+IFtbNDJdXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IHVuaXFCeShpZGVudGl0eSk7XG4iLCJ2YXIgX1NldCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX1NldCcpO1xudmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgbGlzdCBjb250YWluaW5nIG9ubHkgb25lIGNvcHkgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBvcmlnaW5hbFxuICogbGlzdCwgYmFzZWQgdXBvbiB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgYXBwbHlpbmcgdGhlIHN1cHBsaWVkIGZ1bmN0aW9uIHRvXG4gKiBlYWNoIGxpc3QgZWxlbWVudC4gUHJlZmVycyB0aGUgZmlyc3QgaXRlbSBpZiB0aGUgc3VwcGxpZWQgZnVuY3Rpb24gcHJvZHVjZXNcbiAqIHRoZSBzYW1lIHZhbHVlIG9uIHR3byBpdGVtcy4gYFIuZXF1YWxzYCBpcyB1c2VkIGZvciBjb21wYXJpc29uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE2LjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIChhIC0+IGIpIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIEEgZnVuY3Rpb24gdXNlZCB0byBwcm9kdWNlIGEgdmFsdWUgdG8gdXNlIGR1cmluZyBjb21wYXJpc29ucy5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QgVGhlIGFycmF5IHRvIGNvbnNpZGVyLlxuICogQHJldHVybiB7QXJyYXl9IFRoZSBsaXN0IG9mIHVuaXF1ZSBpdGVtcy5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICBSLnVuaXFCeShNYXRoLmFicywgWy0xLCAtNSwgMiwgMTAsIDEsIDJdKTsgLy89PiBbLTEsIC01LCAyLCAxMF1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHVuaXFCeShmbiwgbGlzdCkge1xuICB2YXIgc2V0ID0gbmV3IF9TZXQoKTtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaWR4ID0gMDtcbiAgdmFyIGFwcGxpZWRJdGVtLCBpdGVtO1xuXG4gIHdoaWxlIChpZHggPCBsaXN0Lmxlbmd0aCkge1xuICAgIGl0ZW0gPSBsaXN0W2lkeF07XG4gICAgYXBwbGllZEl0ZW0gPSBmbihpdGVtKTtcbiAgICBpZiAoc2V0LmFkZChhcHBsaWVkSXRlbSkpIHtcbiAgICAgIHJlc3VsdC5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufSk7XG4iLCJ2YXIgX2NvbnRhaW5zV2l0aCA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2NvbnRhaW5zV2l0aCcpO1xudmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgbGlzdCBjb250YWluaW5nIG9ubHkgb25lIGNvcHkgb2YgZWFjaCBlbGVtZW50IGluIHRoZSBvcmlnaW5hbFxuICogbGlzdCwgYmFzZWQgdXBvbiB0aGUgdmFsdWUgcmV0dXJuZWQgYnkgYXBwbHlpbmcgdGhlIHN1cHBsaWVkIHByZWRpY2F0ZSB0b1xuICogdHdvIGxpc3QgZWxlbWVudHMuIFByZWZlcnMgdGhlIGZpcnN0IGl0ZW0gaWYgdHdvIGl0ZW1zIGNvbXBhcmUgZXF1YWwgYmFzZWRcbiAqIG9uIHRoZSBwcmVkaWNhdGUuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMi4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoYSwgYSAtPiBCb29sZWFuKSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkIEEgcHJlZGljYXRlIHVzZWQgdG8gdGVzdCB3aGV0aGVyIHR3byBpdGVtcyBhcmUgZXF1YWwuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0IFRoZSBhcnJheSB0byBjb25zaWRlci5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbGlzdCBvZiB1bmlxdWUgaXRlbXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHN0ckVxID0gUi5lcUJ5KFN0cmluZyk7XG4gKiAgICAgIFIudW5pcVdpdGgoc3RyRXEpKFsxLCAnMScsIDIsIDFdKTsgLy89PiBbMSwgMl1cbiAqICAgICAgUi51bmlxV2l0aChzdHJFcSkoW3t9LCB7fV0pOyAgICAgICAvLz0+IFt7fV1cbiAqICAgICAgUi51bmlxV2l0aChzdHJFcSkoWzEsICcxJywgMV0pOyAgICAvLz0+IFsxXVxuICogICAgICBSLnVuaXFXaXRoKHN0ckVxKShbJzEnLCAxLCAxXSk7ICAgIC8vPT4gWycxJ11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHVuaXFXaXRoKHByZWQsIGxpc3QpIHtcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBsZW4gPSBsaXN0Lmxlbmd0aDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB2YXIgaXRlbTtcbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIGl0ZW0gPSBsaXN0W2lkeF07XG4gICAgaWYgKCFfY29udGFpbnNXaXRoKHByZWQsIGl0ZW0sIHJlc3VsdCkpIHtcbiAgICAgIHJlc3VsdFtyZXN1bHQubGVuZ3RoXSA9IGl0ZW07XG4gICAgfVxuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG5cblxuLyoqXG4gKiBUZXN0cyB0aGUgZmluYWwgYXJndW1lbnQgYnkgcGFzc2luZyBpdCB0byB0aGUgZ2l2ZW4gcHJlZGljYXRlIGZ1bmN0aW9uLiBJZlxuICogdGhlIHByZWRpY2F0ZSBpcyBub3Qgc2F0aXNmaWVkLCB0aGUgZnVuY3Rpb24gd2lsbCByZXR1cm4gdGhlIHJlc3VsdCBvZlxuICogY2FsbGluZyB0aGUgYHdoZW5GYWxzZUZuYCBmdW5jdGlvbiB3aXRoIHRoZSBzYW1lIGFyZ3VtZW50LiBJZiB0aGUgcHJlZGljYXRlXG4gKiBpcyBzYXRpc2ZpZWQsIHRoZSBhcmd1bWVudCBpcyByZXR1cm5lZCBhcyBpcy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xOC4wXG4gKiBAY2F0ZWdvcnkgTG9naWNcbiAqIEBzaWcgKGEgLT4gQm9vbGVhbikgLT4gKGEgLT4gYSkgLT4gYSAtPiBhXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBwcmVkICAgICAgICBBIHByZWRpY2F0ZSBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gd2hlbkZhbHNlRm4gQSBmdW5jdGlvbiB0byBpbnZva2Ugd2hlbiB0aGUgYHByZWRgIGV2YWx1YXRlc1xuICogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdG8gYSBmYWxzeSB2YWx1ZS5cbiAqIEBwYXJhbSB7Kn0gICAgICAgIHggICAgICAgICAgIEFuIG9iamVjdCB0byB0ZXN0IHdpdGggdGhlIGBwcmVkYCBmdW5jdGlvbiBhbmRcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3MgdG8gYHdoZW5GYWxzZUZuYCBpZiBuZWNlc3NhcnkuXG4gKiBAcmV0dXJuIHsqfSBFaXRoZXIgYHhgIG9yIHRoZSByZXN1bHQgb2YgYXBwbHlpbmcgYHhgIHRvIGB3aGVuRmFsc2VGbmAuXG4gKiBAc2VlIFIuaWZFbHNlLCBSLndoZW5cbiAqIEBleGFtcGxlXG4gKlxuICogICAgICAvLyBjb2VyY2VBcnJheSA6OiAoYXxbYV0pIC0+IFthXVxuICogICAgICB2YXIgY29lcmNlQXJyYXkgPSBSLnVubGVzcyhSLmlzQXJyYXlMaWtlLCBSLm9mKTtcbiAqICAgICAgY29lcmNlQXJyYXkoWzEsIDIsIDNdKTsgLy89PiBbMSwgMiwgM11cbiAqICAgICAgY29lcmNlQXJyYXkoMSk7ICAgICAgICAgLy89PiBbMV1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIHVubGVzcyhwcmVkLCB3aGVuRmFsc2VGbiwgeCkge1xuICByZXR1cm4gcHJlZCh4KSA/IHggOiB3aGVuRmFsc2VGbih4KTtcbn0pO1xuIiwidmFyIF9pZGVudGl0eSA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2lkZW50aXR5Jyk7XG52YXIgY2hhaW4gPSByZXF1aXJlKCcuL2NoYWluJyk7XG5cblxuLyoqXG4gKiBTaG9ydGhhbmQgZm9yIGBSLmNoYWluKFIuaWRlbnRpdHkpYCwgd2hpY2ggcmVtb3ZlcyBvbmUgbGV2ZWwgb2YgbmVzdGluZyBmcm9tXG4gKiBhbnkgW0NoYWluXShodHRwczovL2dpdGh1Yi5jb20vZmFudGFzeWxhbmQvZmFudGFzeS1sYW5kI2NoYWluKS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4zLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIENoYWluIGMgPT4gYyAoYyBhKSAtPiBjIGFcbiAqIEBwYXJhbSB7Kn0gbGlzdFxuICogQHJldHVybiB7Kn1cbiAqIEBzZWUgUi5mbGF0dGVuLCBSLmNoYWluXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi51bm5lc3QoWzEsIFsyXSwgW1szXV1dKTsgLy89PiBbMSwgMiwgWzNdXVxuICogICAgICBSLnVubmVzdChbWzEsIDJdLCBbMywgNF0sIFs1LCA2XV0pOyAvLz0+IFsxLCAyLCAzLCA0LCA1LCA2XVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGNoYWluKF9pZGVudGl0eSk7XG4iLCJ2YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xuXG5cbi8qKlxuICogVGFrZXMgYSBwcmVkaWNhdGUsIGEgdHJhbnNmb3JtYXRpb24gZnVuY3Rpb24sIGFuZCBhbiBpbml0aWFsIHZhbHVlLFxuICogYW5kIHJldHVybnMgYSB2YWx1ZSBvZiB0aGUgc2FtZSB0eXBlIGFzIHRoZSBpbml0aWFsIHZhbHVlLlxuICogSXQgZG9lcyBzbyBieSBhcHBseWluZyB0aGUgdHJhbnNmb3JtYXRpb24gdW50aWwgdGhlIHByZWRpY2F0ZSBpcyBzYXRpc2ZpZWQsXG4gKiBhdCB3aGljaCBwb2ludCBpdCByZXR1cm5zIHRoZSBzYXRpc2ZhY3RvcnkgdmFsdWUuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMjAuMFxuICogQGNhdGVnb3J5IExvZ2ljXG4gKiBAc2lnIChhIC0+IEJvb2xlYW4pIC0+IChhIC0+IGEpIC0+IGEgLT4gYVxuICogQHBhcmFtIHtGdW5jdGlvbn0gcHJlZCBBIHByZWRpY2F0ZSBmdW5jdGlvblxuICogQHBhcmFtIHtGdW5jdGlvbn0gZm4gVGhlIGl0ZXJhdG9yIGZ1bmN0aW9uXG4gKiBAcGFyYW0geyp9IGluaXQgSW5pdGlhbCB2YWx1ZVxuICogQHJldHVybiB7Kn0gRmluYWwgdmFsdWUgdGhhdCBzYXRpc2ZpZXMgcHJlZGljYXRlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi51bnRpbChSLmd0KFIuX18sIDEwMCksIFIubXVsdGlwbHkoMikpKDEpIC8vID0+IDEyOFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gdW50aWwocHJlZCwgZm4sIGluaXQpIHtcbiAgdmFyIHZhbCA9IGluaXQ7XG4gIHdoaWxlICghcHJlZCh2YWwpKSB7XG4gICAgdmFsID0gZm4odmFsKTtcbiAgfVxuICByZXR1cm4gdmFsO1xufSk7XG4iLCJ2YXIgX2N1cnJ5MyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MycpO1xudmFyIGFkanVzdCA9IHJlcXVpcmUoJy4vYWRqdXN0Jyk7XG52YXIgYWx3YXlzID0gcmVxdWlyZSgnLi9hbHdheXMnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBuZXcgY29weSBvZiB0aGUgYXJyYXkgd2l0aCB0aGUgZWxlbWVudCBhdCB0aGUgcHJvdmlkZWQgaW5kZXhcbiAqIHJlcGxhY2VkIHdpdGggdGhlIGdpdmVuIHZhbHVlLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE0LjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIE51bWJlciAtPiBhIC0+IFthXSAtPiBbYV1cbiAqIEBwYXJhbSB7TnVtYmVyfSBpZHggVGhlIGluZGV4IHRvIHVwZGF0ZS5cbiAqIEBwYXJhbSB7Kn0geCBUaGUgdmFsdWUgdG8gZXhpc3QgYXQgdGhlIGdpdmVuIGluZGV4IG9mIHRoZSByZXR1cm5lZCBhcnJheS5cbiAqIEBwYXJhbSB7QXJyYXl8QXJndW1lbnRzfSBsaXN0IFRoZSBzb3VyY2UgYXJyYXktbGlrZSBvYmplY3QgdG8gYmUgdXBkYXRlZC5cbiAqIEByZXR1cm4ge0FycmF5fSBBIGNvcHkgb2YgYGxpc3RgIHdpdGggdGhlIHZhbHVlIGF0IGluZGV4IGBpZHhgIHJlcGxhY2VkIHdpdGggYHhgLlxuICogQHNlZSBSLmFkanVzdFxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudXBkYXRlKDEsIDExLCBbMCwgMSwgMl0pOyAgICAgLy89PiBbMCwgMTEsIDJdXG4gKiAgICAgIFIudXBkYXRlKDEpKDExKShbMCwgMSwgMl0pOyAgICAgLy89PiBbMCwgMTEsIDJdXG4gKiBAc3ltYiBSLnVwZGF0ZSgtMSwgYSwgW2IsIGNdKSA9IFtiLCBhXVxuICogQHN5bWIgUi51cGRhdGUoMCwgYSwgW2IsIGNdKSA9IFthLCBjXVxuICogQHN5bWIgUi51cGRhdGUoMSwgYSwgW2IsIGNdKSA9IFtiLCBhXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTMoZnVuY3Rpb24gdXBkYXRlKGlkeCwgeCwgbGlzdCkge1xuICByZXR1cm4gYWRqdXN0KGFsd2F5cyh4KSwgaWR4LCBsaXN0KTtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcbnZhciBjdXJyeU4gPSByZXF1aXJlKCcuL2N1cnJ5TicpO1xuXG5cbi8qKlxuICogQWNjZXB0cyBhIGZ1bmN0aW9uIGBmbmAgYW5kIGEgbGlzdCBvZiB0cmFuc2Zvcm1lciBmdW5jdGlvbnMgYW5kIHJldHVybnMgYVxuICogbmV3IGN1cnJpZWQgZnVuY3Rpb24uIFdoZW4gdGhlIG5ldyBmdW5jdGlvbiBpcyBpbnZva2VkLCBpdCBjYWxscyB0aGVcbiAqIGZ1bmN0aW9uIGBmbmAgd2l0aCBwYXJhbWV0ZXJzIGNvbnNpc3Rpbmcgb2YgdGhlIHJlc3VsdCBvZiBjYWxsaW5nIGVhY2hcbiAqIHN1cHBsaWVkIGhhbmRsZXIgb24gc3VjY2Vzc2l2ZSBhcmd1bWVudHMgdG8gdGhlIG5ldyBmdW5jdGlvbi5cbiAqXG4gKiBJZiBtb3JlIGFyZ3VtZW50cyBhcmUgcGFzc2VkIHRvIHRoZSByZXR1cm5lZCBmdW5jdGlvbiB0aGFuIHRyYW5zZm9ybWVyXG4gKiBmdW5jdGlvbnMsIHRob3NlIGFyZ3VtZW50cyBhcmUgcGFzc2VkIGRpcmVjdGx5IHRvIGBmbmAgYXMgYWRkaXRpb25hbFxuICogcGFyYW1ldGVycy4gSWYgeW91IGV4cGVjdCBhZGRpdGlvbmFsIGFyZ3VtZW50cyB0aGF0IGRvbid0IG5lZWQgdG8gYmVcbiAqIHRyYW5zZm9ybWVkLCBhbHRob3VnaCB5b3UgY2FuIGlnbm9yZSB0aGVtLCBpdCdzIGJlc3QgdG8gcGFzcyBhbiBpZGVudGl0eVxuICogZnVuY3Rpb24gc28gdGhhdCB0aGUgbmV3IGZ1bmN0aW9uIHJlcG9ydHMgdGhlIGNvcnJlY3QgYXJpdHkuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBzaWcgKHgxIC0+IHgyIC0+IC4uLiAtPiB6KSAtPiBbKGEgLT4geDEpLCAoYiAtPiB4MiksIC4uLl0gLT4gKGEgLT4gYiAtPiAuLi4gLT4geilcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZuIFRoZSBmdW5jdGlvbiB0byB3cmFwLlxuICogQHBhcmFtIHtBcnJheX0gdHJhbnNmb3JtZXJzIEEgbGlzdCBvZiB0cmFuc2Zvcm1lciBmdW5jdGlvbnNcbiAqIEByZXR1cm4ge0Z1bmN0aW9ufSBUaGUgd3JhcHBlZCBmdW5jdGlvbi5cbiAqIEBzZWUgUi5jb252ZXJnZVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIudXNlV2l0aChNYXRoLnBvdywgW1IuaWRlbnRpdHksIFIuaWRlbnRpdHldKSgzLCA0KTsgLy89PiA4MVxuICogICAgICBSLnVzZVdpdGgoTWF0aC5wb3csIFtSLmlkZW50aXR5LCBSLmlkZW50aXR5XSkoMykoNCk7IC8vPT4gODFcbiAqICAgICAgUi51c2VXaXRoKE1hdGgucG93LCBbUi5kZWMsIFIuaW5jXSkoMywgNCk7IC8vPT4gMzJcbiAqICAgICAgUi51c2VXaXRoKE1hdGgucG93LCBbUi5kZWMsIFIuaW5jXSkoMykoNCk7IC8vPT4gMzJcbiAqIEBzeW1iIFIudXNlV2l0aChmLCBbZywgaF0pKGEsIGIpID0gZihnKGEpLCBoKGIpKVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gdXNlV2l0aChmbiwgdHJhbnNmb3JtZXJzKSB7XG4gIHJldHVybiBjdXJyeU4odHJhbnNmb3JtZXJzLmxlbmd0aCwgZnVuY3Rpb24oKSB7XG4gICAgdmFyIGFyZ3MgPSBbXTtcbiAgICB2YXIgaWR4ID0gMDtcbiAgICB3aGlsZSAoaWR4IDwgdHJhbnNmb3JtZXJzLmxlbmd0aCkge1xuICAgICAgYXJncy5wdXNoKHRyYW5zZm9ybWVyc1tpZHhdLmNhbGwodGhpcywgYXJndW1lbnRzW2lkeF0pKTtcbiAgICAgIGlkeCArPSAxO1xuICAgIH1cbiAgICByZXR1cm4gZm4uYXBwbHkodGhpcywgYXJncy5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzLCB0cmFuc2Zvcm1lcnMubGVuZ3RoKSkpO1xuICB9KTtcbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcbnZhciBrZXlzID0gcmVxdWlyZSgnLi9rZXlzJyk7XG5cblxuLyoqXG4gKiBSZXR1cm5zIGEgbGlzdCBvZiBhbGwgdGhlIGVudW1lcmFibGUgb3duIHByb3BlcnRpZXMgb2YgdGhlIHN1cHBsaWVkIG9iamVjdC5cbiAqIE5vdGUgdGhhdCB0aGUgb3JkZXIgb2YgdGhlIG91dHB1dCBhcnJheSBpcyBub3QgZ3VhcmFudGVlZCBhY3Jvc3MgZGlmZmVyZW50XG4gKiBKUyBwbGF0Zm9ybXMuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIHtrOiB2fSAtPiBbdl1cbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmogVGhlIG9iamVjdCB0byBleHRyYWN0IHZhbHVlcyBmcm9tXG4gKiBAcmV0dXJuIHtBcnJheX0gQW4gYXJyYXkgb2YgdGhlIHZhbHVlcyBvZiB0aGUgb2JqZWN0J3Mgb3duIHByb3BlcnRpZXMuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi52YWx1ZXMoe2E6IDEsIGI6IDIsIGM6IDN9KTsgLy89PiBbMSwgMiwgM11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIHZhbHVlcyhvYmopIHtcbiAgdmFyIHByb3BzID0ga2V5cyhvYmopO1xuICB2YXIgbGVuID0gcHJvcHMubGVuZ3RoO1xuICB2YXIgdmFscyA9IFtdO1xuICB2YXIgaWR4ID0gMDtcbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIHZhbHNbaWR4XSA9IG9ialtwcm9wc1tpZHhdXTtcbiAgICBpZHggKz0gMTtcbiAgfVxuICByZXR1cm4gdmFscztcbn0pO1xuIiwidmFyIF9jdXJyeTEgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTEnKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBsaXN0IG9mIGFsbCB0aGUgcHJvcGVydGllcywgaW5jbHVkaW5nIHByb3RvdHlwZSBwcm9wZXJ0aWVzLCBvZiB0aGVcbiAqIHN1cHBsaWVkIG9iamVjdC5cbiAqIE5vdGUgdGhhdCB0aGUgb3JkZXIgb2YgdGhlIG91dHB1dCBhcnJheSBpcyBub3QgZ3VhcmFudGVlZCB0byBiZSBjb25zaXN0ZW50XG4gKiBhY3Jvc3MgZGlmZmVyZW50IEpTIHBsYXRmb3Jtcy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4yLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBzaWcge2s6IHZ9IC0+IFt2XVxuICogQHBhcmFtIHtPYmplY3R9IG9iaiBUaGUgb2JqZWN0IHRvIGV4dHJhY3QgdmFsdWVzIGZyb21cbiAqIEByZXR1cm4ge0FycmF5fSBBbiBhcnJheSBvZiB0aGUgdmFsdWVzIG9mIHRoZSBvYmplY3QncyBvd24gYW5kIHByb3RvdHlwZSBwcm9wZXJ0aWVzLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIHZhciBGID0gZnVuY3Rpb24oKSB7IHRoaXMueCA9ICdYJzsgfTtcbiAqICAgICAgRi5wcm90b3R5cGUueSA9ICdZJztcbiAqICAgICAgdmFyIGYgPSBuZXcgRigpO1xuICogICAgICBSLnZhbHVlc0luKGYpOyAvLz0+IFsnWCcsICdZJ11cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkxKGZ1bmN0aW9uIHZhbHVlc0luKG9iaikge1xuICB2YXIgcHJvcDtcbiAgdmFyIHZzID0gW107XG4gIGZvciAocHJvcCBpbiBvYmopIHtcbiAgICB2c1t2cy5sZW5ndGhdID0gb2JqW3Byb3BdO1xuICB9XG4gIHJldHVybiB2cztcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIFJldHVybnMgYSBcInZpZXdcIiBvZiB0aGUgZ2l2ZW4gZGF0YSBzdHJ1Y3R1cmUsIGRldGVybWluZWQgYnkgdGhlIGdpdmVuIGxlbnMuXG4gKiBUaGUgbGVucydzIGZvY3VzIGRldGVybWluZXMgd2hpY2ggcG9ydGlvbiBvZiB0aGUgZGF0YSBzdHJ1Y3R1cmUgaXMgdmlzaWJsZS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNi4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAdHlwZWRlZm4gTGVucyBzIGEgPSBGdW5jdG9yIGYgPT4gKGEgLT4gZiBhKSAtPiBzIC0+IGYgc1xuICogQHNpZyBMZW5zIHMgYSAtPiBzIC0+IGFcbiAqIEBwYXJhbSB7TGVuc30gbGVuc1xuICogQHBhcmFtIHsqfSB4XG4gKiBAcmV0dXJuIHsqfVxuICogQHNlZSBSLnByb3AsIFIubGVuc0luZGV4LCBSLmxlbnNQcm9wXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIHhMZW5zID0gUi5sZW5zUHJvcCgneCcpO1xuICpcbiAqICAgICAgUi52aWV3KHhMZW5zLCB7eDogMSwgeTogMn0pOyAgLy89PiAxXG4gKiAgICAgIFIudmlldyh4TGVucywge3g6IDQsIHk6IDJ9KTsgIC8vPT4gNFxuICovXG5tb2R1bGUuZXhwb3J0cyA9IChmdW5jdGlvbigpIHtcbiAgLy8gYENvbnN0YCBpcyBhIGZ1bmN0b3IgdGhhdCBlZmZlY3RpdmVseSBpZ25vcmVzIHRoZSBmdW5jdGlvbiBnaXZlbiB0byBgbWFwYC5cbiAgdmFyIENvbnN0ID0gZnVuY3Rpb24oeCkge1xuICAgIHJldHVybiB7dmFsdWU6IHgsIG1hcDogZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9fTtcbiAgfTtcblxuICByZXR1cm4gX2N1cnJ5MihmdW5jdGlvbiB2aWV3KGxlbnMsIHgpIHtcbiAgICAvLyBVc2luZyBgQ29uc3RgIGVmZmVjdGl2ZWx5IGlnbm9yZXMgdGhlIHNldHRlciBmdW5jdGlvbiBvZiB0aGUgYGxlbnNgLFxuICAgIC8vIGxlYXZpbmcgdGhlIHZhbHVlIHJldHVybmVkIGJ5IHRoZSBnZXR0ZXIgZnVuY3Rpb24gdW5tb2RpZmllZC5cbiAgICByZXR1cm4gbGVucyhDb25zdCkoeCkudmFsdWU7XG4gIH0pO1xufSgpKTtcbiIsInZhciBfY3VycnkzID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkzJyk7XG5cblxuLyoqXG4gKiBUZXN0cyB0aGUgZmluYWwgYXJndW1lbnQgYnkgcGFzc2luZyBpdCB0byB0aGUgZ2l2ZW4gcHJlZGljYXRlIGZ1bmN0aW9uLiBJZlxuICogdGhlIHByZWRpY2F0ZSBpcyBzYXRpc2ZpZWQsIHRoZSBmdW5jdGlvbiB3aWxsIHJldHVybiB0aGUgcmVzdWx0IG9mIGNhbGxpbmdcbiAqIHRoZSBgd2hlblRydWVGbmAgZnVuY3Rpb24gd2l0aCB0aGUgc2FtZSBhcmd1bWVudC4gSWYgdGhlIHByZWRpY2F0ZSBpcyBub3RcbiAqIHNhdGlzZmllZCwgdGhlIGFyZ3VtZW50IGlzIHJldHVybmVkIGFzIGlzLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE4LjBcbiAqIEBjYXRlZ29yeSBMb2dpY1xuICogQHNpZyAoYSAtPiBCb29sZWFuKSAtPiAoYSAtPiBhKSAtPiBhIC0+IGFcbiAqIEBwYXJhbSB7RnVuY3Rpb259IHByZWQgICAgICAgQSBwcmVkaWNhdGUgZnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IHdoZW5UcnVlRm4gQSBmdW5jdGlvbiB0byBpbnZva2Ugd2hlbiB0aGUgYGNvbmRpdGlvbmBcbiAqICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXZhbHVhdGVzIHRvIGEgdHJ1dGh5IHZhbHVlLlxuICogQHBhcmFtIHsqfSAgICAgICAgeCAgICAgICAgICBBbiBvYmplY3QgdG8gdGVzdCB3aXRoIHRoZSBgcHJlZGAgZnVuY3Rpb24gYW5kXG4gKiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBhc3MgdG8gYHdoZW5UcnVlRm5gIGlmIG5lY2Vzc2FyeS5cbiAqIEByZXR1cm4geyp9IEVpdGhlciBgeGAgb3IgdGhlIHJlc3VsdCBvZiBhcHBseWluZyBgeGAgdG8gYHdoZW5UcnVlRm5gLlxuICogQHNlZSBSLmlmRWxzZSwgUi51bmxlc3NcbiAqIEBleGFtcGxlXG4gKlxuICogICAgICAvLyB0cnVuY2F0ZSA6OiBTdHJpbmcgLT4gU3RyaW5nXG4gKiAgICAgIHZhciB0cnVuY2F0ZSA9IFIud2hlbihcbiAqICAgICAgICBSLnByb3BTYXRpc2ZpZXMoUi5ndChSLl9fLCAxMCksICdsZW5ndGgnKSxcbiAqICAgICAgICBSLnBpcGUoUi50YWtlKDEwKSwgUi5hcHBlbmQoJ+KApicpLCBSLmpvaW4oJycpKVxuICogICAgICApO1xuICogICAgICB0cnVuY2F0ZSgnMTIzNDUnKTsgICAgICAgICAvLz0+ICcxMjM0NSdcbiAqICAgICAgdHJ1bmNhdGUoJzAxMjM0NTY3ODlBQkMnKTsgLy89PiAnMDEyMzQ1Njc4OeKApidcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIHdoZW4ocHJlZCwgd2hlblRydWVGbiwgeCkge1xuICByZXR1cm4gcHJlZCh4KSA/IHdoZW5UcnVlRm4oeCkgOiB4O1xufSk7XG4iLCJ2YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIF9oYXMgPSByZXF1aXJlKCcuL2ludGVybmFsL19oYXMnKTtcblxuXG4vKipcbiAqIFRha2VzIGEgc3BlYyBvYmplY3QgYW5kIGEgdGVzdCBvYmplY3Q7IHJldHVybnMgdHJ1ZSBpZiB0aGUgdGVzdCBzYXRpc2ZpZXNcbiAqIHRoZSBzcGVjLiBFYWNoIG9mIHRoZSBzcGVjJ3Mgb3duIHByb3BlcnRpZXMgbXVzdCBiZSBhIHByZWRpY2F0ZSBmdW5jdGlvbi5cbiAqIEVhY2ggcHJlZGljYXRlIGlzIGFwcGxpZWQgdG8gdGhlIHZhbHVlIG9mIHRoZSBjb3JyZXNwb25kaW5nIHByb3BlcnR5IG9mIHRoZVxuICogdGVzdCBvYmplY3QuIGB3aGVyZWAgcmV0dXJucyB0cnVlIGlmIGFsbCB0aGUgcHJlZGljYXRlcyByZXR1cm4gdHJ1ZSwgZmFsc2VcbiAqIG90aGVyd2lzZS5cbiAqXG4gKiBgd2hlcmVgIGlzIHdlbGwgc3VpdGVkIHRvIGRlY2xhcmF0aXZlbHkgZXhwcmVzc2luZyBjb25zdHJhaW50cyBmb3Igb3RoZXJcbiAqIGZ1bmN0aW9ucyBzdWNoIGFzIGBmaWx0ZXJgIGFuZCBgZmluZGAuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4xXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIHtTdHJpbmc6ICgqIC0+IEJvb2xlYW4pfSAtPiB7U3RyaW5nOiAqfSAtPiBCb29sZWFuXG4gKiBAcGFyYW0ge09iamVjdH0gc3BlY1xuICogQHBhcmFtIHtPYmplY3R9IHRlc3RPYmpcbiAqIEByZXR1cm4ge0Jvb2xlYW59XG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgLy8gcHJlZCA6OiBPYmplY3QgLT4gQm9vbGVhblxuICogICAgICB2YXIgcHJlZCA9IFIud2hlcmUoe1xuICogICAgICAgIGE6IFIuZXF1YWxzKCdmb28nKSxcbiAqICAgICAgICBiOiBSLmNvbXBsZW1lbnQoUi5lcXVhbHMoJ2JhcicpKSxcbiAqICAgICAgICB4OiBSLmd0KF9fLCAxMCksXG4gKiAgICAgICAgeTogUi5sdChfXywgMjApXG4gKiAgICAgIH0pO1xuICpcbiAqICAgICAgcHJlZCh7YTogJ2ZvbycsIGI6ICd4eHgnLCB4OiAxMSwgeTogMTl9KTsgLy89PiB0cnVlXG4gKiAgICAgIHByZWQoe2E6ICd4eHgnLCBiOiAneHh4JywgeDogMTEsIHk6IDE5fSk7IC8vPT4gZmFsc2VcbiAqICAgICAgcHJlZCh7YTogJ2ZvbycsIGI6ICdiYXInLCB4OiAxMSwgeTogMTl9KTsgLy89PiBmYWxzZVxuICogICAgICBwcmVkKHthOiAnZm9vJywgYjogJ3h4eCcsIHg6IDEwLCB5OiAxOX0pOyAvLz0+IGZhbHNlXG4gKiAgICAgIHByZWQoe2E6ICdmb28nLCBiOiAneHh4JywgeDogMTEsIHk6IDIwfSk7IC8vPT4gZmFsc2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHdoZXJlKHNwZWMsIHRlc3RPYmopIHtcbiAgZm9yICh2YXIgcHJvcCBpbiBzcGVjKSB7XG4gICAgaWYgKF9oYXMocHJvcCwgc3BlYykgJiYgIXNwZWNbcHJvcF0odGVzdE9ialtwcm9wXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHRydWU7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG52YXIgZXF1YWxzID0gcmVxdWlyZSgnLi9lcXVhbHMnKTtcbnZhciBtYXAgPSByZXF1aXJlKCcuL21hcCcpO1xudmFyIHdoZXJlID0gcmVxdWlyZSgnLi93aGVyZScpO1xuXG5cbi8qKlxuICogVGFrZXMgYSBzcGVjIG9iamVjdCBhbmQgYSB0ZXN0IG9iamVjdDsgcmV0dXJucyB0cnVlIGlmIHRoZSB0ZXN0IHNhdGlzZmllc1xuICogdGhlIHNwZWMsIGZhbHNlIG90aGVyd2lzZS4gQW4gb2JqZWN0IHNhdGlzZmllcyB0aGUgc3BlYyBpZiwgZm9yIGVhY2ggb2YgdGhlXG4gKiBzcGVjJ3Mgb3duIHByb3BlcnRpZXMsIGFjY2Vzc2luZyB0aGF0IHByb3BlcnR5IG9mIHRoZSBvYmplY3QgZ2l2ZXMgdGhlIHNhbWVcbiAqIHZhbHVlIChpbiBgUi5lcXVhbHNgIHRlcm1zKSBhcyBhY2Nlc3NpbmcgdGhhdCBwcm9wZXJ0eSBvZiB0aGUgc3BlYy5cbiAqXG4gKiBgd2hlcmVFcWAgaXMgYSBzcGVjaWFsaXphdGlvbiBvZiBbYHdoZXJlYF0oI3doZXJlKS5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xNC4wXG4gKiBAY2F0ZWdvcnkgT2JqZWN0XG4gKiBAc2lnIHtTdHJpbmc6ICp9IC0+IHtTdHJpbmc6ICp9IC0+IEJvb2xlYW5cbiAqIEBwYXJhbSB7T2JqZWN0fSBzcGVjXG4gKiBAcGFyYW0ge09iamVjdH0gdGVzdE9ialxuICogQHJldHVybiB7Qm9vbGVhbn1cbiAqIEBzZWUgUi53aGVyZVxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIC8vIHByZWQgOjogT2JqZWN0IC0+IEJvb2xlYW5cbiAqICAgICAgdmFyIHByZWQgPSBSLndoZXJlRXEoe2E6IDEsIGI6IDJ9KTtcbiAqXG4gKiAgICAgIHByZWQoe2E6IDF9KTsgICAgICAgICAgICAgIC8vPT4gZmFsc2VcbiAqICAgICAgcHJlZCh7YTogMSwgYjogMn0pOyAgICAgICAgLy89PiB0cnVlXG4gKiAgICAgIHByZWQoe2E6IDEsIGI6IDIsIGM6IDN9KTsgIC8vPT4gdHJ1ZVxuICogICAgICBwcmVkKHthOiAxLCBiOiAxfSk7ICAgICAgICAvLz0+IGZhbHNlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gX2N1cnJ5MihmdW5jdGlvbiB3aGVyZUVxKHNwZWMsIHRlc3RPYmopIHtcbiAgcmV0dXJuIHdoZXJlKG1hcChlcXVhbHMsIHNwZWMpLCB0ZXN0T2JqKTtcbn0pO1xuIiwidmFyIF9jb250YWlucyA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2NvbnRhaW5zJyk7XG52YXIgX2N1cnJ5MiA9IHJlcXVpcmUoJy4vaW50ZXJuYWwvX2N1cnJ5MicpO1xudmFyIGZsaXAgPSByZXF1aXJlKCcuL2ZsaXAnKTtcbnZhciByZWplY3QgPSByZXF1aXJlKCcuL3JlamVjdCcpO1xuXG5cbi8qKlxuICogUmV0dXJucyBhIG5ldyBsaXN0IHdpdGhvdXQgdmFsdWVzIGluIHRoZSBmaXJzdCBhcmd1bWVudC5cbiAqIGBSLmVxdWFsc2AgaXMgdXNlZCB0byBkZXRlcm1pbmUgZXF1YWxpdHkuXG4gKlxuICogQWN0cyBhcyBhIHRyYW5zZHVjZXIgaWYgYSB0cmFuc2Zvcm1lciBpcyBnaXZlbiBpbiBsaXN0IHBvc2l0aW9uLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjE5LjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIFthXSAtPiBbYV0gLT4gW2FdXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0MSBUaGUgdmFsdWVzIHRvIGJlIHJlbW92ZWQgZnJvbSBgbGlzdDJgLlxuICogQHBhcmFtIHtBcnJheX0gbGlzdDIgVGhlIGFycmF5IHRvIHJlbW92ZSB2YWx1ZXMgZnJvbS5cbiAqIEByZXR1cm4ge0FycmF5fSBUaGUgbmV3IGFycmF5IHdpdGhvdXQgdmFsdWVzIGluIGBsaXN0MWAuXG4gKiBAc2VlIFIudHJhbnNkdWNlXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi53aXRob3V0KFsxLCAyXSwgWzEsIDIsIDEsIDMsIDRdKTsgLy89PiBbMywgNF1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uKHhzLCBsaXN0KSB7XG4gIHJldHVybiByZWplY3QoZmxpcChfY29udGFpbnMpKHhzKSwgbGlzdCk7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGxpc3Qgb3V0IG9mIHRoZSB0d28gc3VwcGxpZWQgYnkgY3JlYXRpbmcgZWFjaCBwb3NzaWJsZSBwYWlyXG4gKiBmcm9tIHRoZSBsaXN0cy5cbiAqXG4gKiBAZnVuY1xuICogQG1lbWJlck9mIFJcbiAqIEBzaW5jZSB2MC4xLjBcbiAqIEBjYXRlZ29yeSBMaXN0XG4gKiBAc2lnIFthXSAtPiBbYl0gLT4gW1thLGJdXVxuICogQHBhcmFtIHtBcnJheX0gYXMgVGhlIGZpcnN0IGxpc3QuXG4gKiBAcGFyYW0ge0FycmF5fSBicyBUaGUgc2Vjb25kIGxpc3QuXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIGxpc3QgbWFkZSBieSBjb21iaW5pbmcgZWFjaCBwb3NzaWJsZSBwYWlyIGZyb21cbiAqICAgICAgICAgYGFzYCBhbmQgYGJzYCBpbnRvIHBhaXJzIChgW2EsIGJdYCkuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgUi54cHJvZChbMSwgMl0sIFsnYScsICdiJ10pOyAvLz0+IFtbMSwgJ2EnXSwgWzEsICdiJ10sIFsyLCAnYSddLCBbMiwgJ2InXV1cbiAqIEBzeW1iIFIueHByb2QoW2EsIGJdLCBbYywgZF0pID0gW1thLCBjXSwgW2EsIGRdLCBbYiwgY10sIFtiLCBkXV1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHhwcm9kKGEsIGIpIHsgLy8gPSB4cHJvZFdpdGgocHJlcGVuZCk7ICh0YWtlcyBhYm91dCAzIHRpbWVzIGFzIGxvbmcuLi4pXG4gIHZhciBpZHggPSAwO1xuICB2YXIgaWxlbiA9IGEubGVuZ3RoO1xuICB2YXIgajtcbiAgdmFyIGpsZW4gPSBiLmxlbmd0aDtcbiAgdmFyIHJlc3VsdCA9IFtdO1xuICB3aGlsZSAoaWR4IDwgaWxlbikge1xuICAgIGogPSAwO1xuICAgIHdoaWxlIChqIDwgamxlbikge1xuICAgICAgcmVzdWx0W3Jlc3VsdC5sZW5ndGhdID0gW2FbaWR4XSwgYltqXV07XG4gICAgICBqICs9IDE7XG4gICAgfVxuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59KTtcbiIsInZhciBfY3VycnkyID0gcmVxdWlyZSgnLi9pbnRlcm5hbC9fY3VycnkyJyk7XG5cblxuLyoqXG4gKiBDcmVhdGVzIGEgbmV3IGxpc3Qgb3V0IG9mIHRoZSB0d28gc3VwcGxpZWQgYnkgcGFpcmluZyB1cCBlcXVhbGx5LXBvc2l0aW9uZWRcbiAqIGl0ZW1zIGZyb20gYm90aCBsaXN0cy4gVGhlIHJldHVybmVkIGxpc3QgaXMgdHJ1bmNhdGVkIHRvIHRoZSBsZW5ndGggb2YgdGhlXG4gKiBzaG9ydGVyIG9mIHRoZSB0d28gaW5wdXQgbGlzdHMuXG4gKiBOb3RlOiBgemlwYCBpcyBlcXVpdmFsZW50IHRvIGB6aXBXaXRoKGZ1bmN0aW9uKGEsIGIpIHsgcmV0dXJuIFthLCBiXSB9KWAuXG4gKlxuICogQGZ1bmNcbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyBbYV0gLT4gW2JdIC0+IFtbYSxiXV1cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QxIFRoZSBmaXJzdCBhcnJheSB0byBjb25zaWRlci5cbiAqIEBwYXJhbSB7QXJyYXl9IGxpc3QyIFRoZSBzZWNvbmQgYXJyYXkgdG8gY29uc2lkZXIuXG4gKiBAcmV0dXJuIHtBcnJheX0gVGhlIGxpc3QgbWFkZSBieSBwYWlyaW5nIHVwIHNhbWUtaW5kZXhlZCBlbGVtZW50cyBvZiBgbGlzdDFgIGFuZCBgbGlzdDJgLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuemlwKFsxLCAyLCAzXSwgWydhJywgJ2InLCAnYyddKTsgLy89PiBbWzEsICdhJ10sIFsyLCAnYiddLCBbMywgJ2MnXV1cbiAqIEBzeW1iIFIuemlwKFthLCBiLCBjXSwgW2QsIGUsIGZdKSA9IFtbYSwgZF0sIFtiLCBlXSwgW2MsIGZdXVxuICovXG5tb2R1bGUuZXhwb3J0cyA9IF9jdXJyeTIoZnVuY3Rpb24gemlwKGEsIGIpIHtcbiAgdmFyIHJ2ID0gW107XG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGVuID0gTWF0aC5taW4oYS5sZW5ndGgsIGIubGVuZ3RoKTtcbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIHJ2W2lkeF0gPSBbYVtpZHhdLCBiW2lkeF1dO1xuICAgIGlkeCArPSAxO1xuICB9XG4gIHJldHVybiBydjtcbn0pO1xuIiwidmFyIF9jdXJyeTIgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTInKTtcblxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgb2JqZWN0IG91dCBvZiBhIGxpc3Qgb2Yga2V5cyBhbmQgYSBsaXN0IG9mIHZhbHVlcy5cbiAqIEtleS92YWx1ZSBwYWlyaW5nIGlzIHRydW5jYXRlZCB0byB0aGUgbGVuZ3RoIG9mIHRoZSBzaG9ydGVyIG9mIHRoZSB0d28gbGlzdHMuXG4gKiBOb3RlOiBgemlwT2JqYCBpcyBlcXVpdmFsZW50IHRvIGBwaXBlKHppcFdpdGgocGFpciksIGZyb21QYWlycylgLlxuICpcbiAqIEBmdW5jXG4gKiBAbWVtYmVyT2YgUlxuICogQHNpbmNlIHYwLjMuMFxuICogQGNhdGVnb3J5IExpc3RcbiAqIEBzaWcgW1N0cmluZ10gLT4gWypdIC0+IHtTdHJpbmc6ICp9XG4gKiBAcGFyYW0ge0FycmF5fSBrZXlzIFRoZSBhcnJheSB0aGF0IHdpbGwgYmUgcHJvcGVydGllcyBvbiB0aGUgb3V0cHV0IG9iamVjdC5cbiAqIEBwYXJhbSB7QXJyYXl9IHZhbHVlcyBUaGUgbGlzdCBvZiB2YWx1ZXMgb24gdGhlIG91dHB1dCBvYmplY3QuXG4gKiBAcmV0dXJuIHtPYmplY3R9IFRoZSBvYmplY3QgbWFkZSBieSBwYWlyaW5nIHVwIHNhbWUtaW5kZXhlZCBlbGVtZW50cyBvZiBga2V5c2AgYW5kIGB2YWx1ZXNgLlxuICogQGV4YW1wbGVcbiAqXG4gKiAgICAgIFIuemlwT2JqKFsnYScsICdiJywgJ2MnXSwgWzEsIDIsIDNdKTsgLy89PiB7YTogMSwgYjogMiwgYzogM31cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkyKGZ1bmN0aW9uIHppcE9iaihrZXlzLCB2YWx1ZXMpIHtcbiAgdmFyIGlkeCA9IDA7XG4gIHZhciBsZW4gPSBNYXRoLm1pbihrZXlzLmxlbmd0aCwgdmFsdWVzLmxlbmd0aCk7XG4gIHZhciBvdXQgPSB7fTtcbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIG91dFtrZXlzW2lkeF1dID0gdmFsdWVzW2lkeF07XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIG91dDtcbn0pO1xuIiwidmFyIF9jdXJyeTMgPSByZXF1aXJlKCcuL2ludGVybmFsL19jdXJyeTMnKTtcblxuXG4vKipcbiAqIENyZWF0ZXMgYSBuZXcgbGlzdCBvdXQgb2YgdGhlIHR3byBzdXBwbGllZCBieSBhcHBseWluZyB0aGUgZnVuY3Rpb24gdG8gZWFjaFxuICogZXF1YWxseS1wb3NpdGlvbmVkIHBhaXIgaW4gdGhlIGxpc3RzLiBUaGUgcmV0dXJuZWQgbGlzdCBpcyB0cnVuY2F0ZWQgdG8gdGhlXG4gKiBsZW5ndGggb2YgdGhlIHNob3J0ZXIgb2YgdGhlIHR3byBpbnB1dCBsaXN0cy5cbiAqXG4gKiBAZnVuY3Rpb25cbiAqIEBtZW1iZXJPZiBSXG4gKiBAc2luY2UgdjAuMS4wXG4gKiBAY2F0ZWdvcnkgTGlzdFxuICogQHNpZyAoYSxiIC0+IGMpIC0+IFthXSAtPiBbYl0gLT4gW2NdXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBmbiBUaGUgZnVuY3Rpb24gdXNlZCB0byBjb21iaW5lIHRoZSB0d28gZWxlbWVudHMgaW50byBvbmUgdmFsdWUuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0MSBUaGUgZmlyc3QgYXJyYXkgdG8gY29uc2lkZXIuXG4gKiBAcGFyYW0ge0FycmF5fSBsaXN0MiBUaGUgc2Vjb25kIGFycmF5IHRvIGNvbnNpZGVyLlxuICogQHJldHVybiB7QXJyYXl9IFRoZSBsaXN0IG1hZGUgYnkgY29tYmluaW5nIHNhbWUtaW5kZXhlZCBlbGVtZW50cyBvZiBgbGlzdDFgIGFuZCBgbGlzdDJgXG4gKiAgICAgICAgIHVzaW5nIGBmbmAuXG4gKiBAZXhhbXBsZVxuICpcbiAqICAgICAgdmFyIGYgPSAoeCwgeSkgPT4ge1xuICogICAgICAgIC8vIC4uLlxuICogICAgICB9O1xuICogICAgICBSLnppcFdpdGgoZiwgWzEsIDIsIDNdLCBbJ2EnLCAnYicsICdjJ10pO1xuICogICAgICAvLz0+IFtmKDEsICdhJyksIGYoMiwgJ2InKSwgZigzLCAnYycpXVxuICogQHN5bWIgUi56aXBXaXRoKGZuLCBbYSwgYiwgY10sIFtkLCBlLCBmXSkgPSBbZm4oYSwgZCksIGZuKGIsIGUpLCBmbihjLCBmKV1cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBfY3VycnkzKGZ1bmN0aW9uIHppcFdpdGgoZm4sIGEsIGIpIHtcbiAgdmFyIHJ2ID0gW107XG4gIHZhciBpZHggPSAwO1xuICB2YXIgbGVuID0gTWF0aC5taW4oYS5sZW5ndGgsIGIubGVuZ3RoKTtcbiAgd2hpbGUgKGlkeCA8IGxlbikge1xuICAgIHJ2W2lkeF0gPSBmbihhW2lkeF0sIGJbaWR4XSk7XG4gICAgaWR4ICs9IDE7XG4gIH1cbiAgcmV0dXJuIHJ2O1xufSk7XG4iLCJcbmltcG9ydCBnZXRQYXRocyBmcm9tICcuLi91dGlsL2NvbmZpZyc7XG5cbmNvbnN0IHtcbiAgICBkYXRhUGF0aCxcbiAgICBpbWFnZVBhdGgsXG59ID0gZ2V0UGF0aHMoKTtcblxuXG5jb25zdCBzdGFydERhdGUgPSBuZXcgRGF0ZSgyMDE0LCAwLCAxLCAxKTtcbmNvbnN0IGVuZERhdGUgPSBuZXcgRGF0ZSgyMDE1LCA1LCAzMCwgMSk7XG5jb25zb2xlLmxvZygnc3RhcnQ6Jywgc3RhcnREYXRlLCAnZW5kOicsIGVuZERhdGUpO1xuXG5jb25zdCBzaWduYWxzID0gW1xuICAgIC8vIHtcbiAgICAvLyAgICAgbmFtZTogJ2RldGFpbERvbWFpbicsXG4gICAgLy8gICAgIC8vIHVwZGF0ZTogJ1tkYXRldGltZSgyMDE0LCAwLCAxKSwgZGF0ZXRpbWUoMjAxNSwgMCwgMSldJyxcbiAgICAvLyAgICAgLy8gdXBkYXRlOiBgWyR7c3RhcnREYXRlfSwgJHtlbmREYXRlfV1gLFxuICAgIC8vICAgICB2YWx1ZTogYFske3N0YXJ0RGF0ZX0sICR7ZW5kRGF0ZX1dYCxcbiAgICAvLyB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ3N0YXJ0X2RhdGUnLFxuICAgICAgICB2YWx1ZTogYCR7c3RhcnREYXRlLmdldFRpbWUoKX1gLFxuICAgICAgICAvLyB1cGRhdGU6ICd0b0RhdGUoZGV0YWlsRG9tYWluWzBdKScsXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdlbmRfZGF0ZScsXG4gICAgICAgIHZhbHVlOiBgJHtlbmREYXRlLmdldFRpbWUoKX1gLFxuICAgICAgICAvLyB1cGRhdGU6ICd0b0RhdGUoZGV0YWlsRG9tYWluWzFdKScsXG4gICAgfSxcbl07XG5cbmNvbnN0IGRhdGEgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAncmVwb3J0cycsXG4gICAgICAgIHVybDogYCR7ZGF0YVBhdGh9Y29tYmluZWQuY3N2YCxcbiAgICAgICAgZm9ybWF0OiB7XG4gICAgICAgICAgICB0eXBlOiAnZHN2JyxcbiAgICAgICAgICAgIGRlbGltaXRlcjogJzsnLFxuICAgICAgICAgICAgcGFyc2U6IHtcbiAgICAgICAgICAgICAgICBkdW1wczogJ251bWJlcicsXG4gICAgICAgICAgICAgICAgZmlsbHBlcmM6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgIHJlcG9ydHM6ICdudW1iZXInLFxuICAgICAgICAgICAgICAgIC8vIGRhdGU6ICdkYXRlJ1xuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICAgICAgdHJhbnNmb3JtOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdHlwZTogJ2Zvcm11bGEnLFxuICAgICAgICAgICAgICAgIGFzOiAnZGF0ZTInLFxuICAgICAgICAgICAgICAgIGV4cHI6ICd0b0RhdGUoZGF0dW0uZGF0ZSknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZmlsdGVyJyxcbiAgICAgICAgICAgICAgICAvLyBleHByOiAnZGF0dW0uZGF0ZTIgPiBkYXRldGltZSgyMDE0LCAwLCAxKSAmJiBkYXR1bS5kYXRlMiA8IGRhdGV0aW1lKDIwMTUsIDAsIDQpJyxcbiAgICAgICAgICAgICAgICBleHByOiAnZGF0dW0uZGF0ZTIgPj0gc3RhcnRfZGF0ZSAmJiBkYXR1bS5kYXRlMiA8PSBlbmRfZGF0ZScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdhZ2dyZWdhdGUnLFxuICAgICAgICAgICAgICAgIGZpZWxkczogWydyZXBvcnRzJywgJ2R1bXBzJywgJ2ZpbGxwZXJjJ10sXG4gICAgICAgICAgICAgICAgb3BzOiBbJ3N1bScsICdzdW0nLCAnYXZlcmFnZSddLFxuICAgICAgICAgICAgICAgIGFzOiBbJ3JlcG9ydHMnLCAnZHVtcHMnLCAnZmlsbHBlcmMnXSxcbiAgICAgICAgICAgICAgICBncm91cGJ5OiBbJ25hbWUnLCAnYnVfY29kZSddLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuXTtcblxuY29uc3QgbWFya3MgPSBbXG4gICAge1xuICAgICAgICBuYW1lOiAnbWFya3MnLFxuICAgICAgICB0eXBlOiAnc3ltYm9sJyxcbiAgICAgICAgZnJvbTogeyBkYXRhOiAncmVwb3J0cycgfSxcbiAgICAgICAgZW5jb2RlOiB7XG4gICAgICAgICAgICB1cGRhdGU6IHtcbiAgICAgICAgICAgICAgICB4OiB7IHNjYWxlOiAneCcsIGZpZWxkOiAnZmlsbHBlcmMnIH0sXG4gICAgICAgICAgICAgICAgeTogeyBzY2FsZTogJ3knLCBmaWVsZDogJ2R1bXBzJyB9LFxuICAgICAgICAgICAgICAgIHNpemU6IHsgc2NhbGU6ICdzaXplJywgZmllbGQ6ICdyZXBvcnRzJyB9LFxuICAgICAgICAgICAgICAgIHNoYXBlOiB7IHZhbHVlOiAnY2lyY2xlJyB9LFxuICAgICAgICAgICAgICAgIHN0cm9rZVdpZHRoOiB7IHZhbHVlOiAyIH0sXG4gICAgICAgICAgICAgICAgLy8gb3BhY2l0eTogeyB2YWx1ZTogMC41IH0sXG4gICAgICAgICAgICAgICAgc3Ryb2tlOiB7IHZhbHVlOiAncmVkJyB9LFxuICAgICAgICAgICAgICAgIGZpbGw6IHsgdmFsdWU6ICdyZWQnIH0sXG4gICAgICAgICAgICAgICAgLy8gZmlsbDogeyB2YWx1ZTogJ3RyYW5zcGFyZW50JyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuXTtcblxuXG5jb25zdCBwcm9qZWN0aW9ucyA9IFtcbl07XG5cbmNvbnN0IHNjYWxlcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICd4JyxcbiAgICAgICAgdHlwZTogJ2xpbmVhcicsXG4gICAgICAgIC8vIHJvdW5kOiB0cnVlLFxuICAgICAgICAvLyBuaWNlOiB0cnVlLFxuICAgICAgICAvLyB6ZXJvOiB0cnVlLFxuICAgICAgICAvLyBkb21haW46IHsgZGF0YTogJ3JlcG9ydHMnLCBmaWVsZDogJ3JlcG9ydHMnIH0sXG4gICAgICAgIGRvbWFpbjogWzAsIDEwMF0sXG4gICAgICAgIHJhbmdlOiAnd2lkdGgnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAneScsXG4gICAgICAgIHR5cGU6ICdsaW5lYXInLFxuICAgICAgICAvLyByb3VuZDogdHJ1ZSxcbiAgICAgICAgLy8gbmljZTogdHJ1ZSxcbiAgICAgICAgLy8gemVybzogdHJ1ZSxcbiAgICAgICAgZG9tYWluOiB7IGRhdGE6ICdyZXBvcnRzJywgZmllbGQ6ICdkdW1wcycgfSxcbiAgICAgICAgcmFuZ2U6ICdoZWlnaHQnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBuYW1lOiAnc2l6ZScsXG4gICAgICAgIHR5cGU6ICdsaW5lYXInLFxuICAgICAgICAvLyByb3VuZDogdHJ1ZSxcbiAgICAgICAgLy8gbmljZTogZmFsc2UsXG4gICAgICAgIC8vIHplcm86IHRydWUsXG4gICAgICAgIGRvbWFpbjogeyBkYXRhOiAncmVwb3J0cycsIGZpZWxkOiAncmVwb3J0cycgfSxcbiAgICAgICAgcmFuZ2U6IFsxLCAxMDAwXSxcbiAgICB9LFxuXTtcblxuXG5jb25zdCBheGVzID0gW1xuICAgIHtcbiAgICAgICAgc2NhbGU6ICd4JyxcbiAgICAgICAgZ3JpZDogZmFsc2UsXG4gICAgICAgIGRvbWFpbjogdHJ1ZSxcbiAgICAgICAgb3JpZW50OiAnYm90dG9tJyxcbiAgICAgICAgdGlja0NvdW50OiA1LFxuICAgICAgICB0aXRsZTogJ3JlcG9ydHMnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBzY2FsZTogJ3knLFxuICAgICAgICBncmlkOiBmYWxzZSxcbiAgICAgICAgZG9tYWluOiB0cnVlLFxuICAgICAgICBvcmllbnQ6ICdsZWZ0JyxcbiAgICAgICAgdGl0bGVQYWRkaW5nOiA1LFxuICAgICAgICB0aXRsZTogJ2ZpbGxwZXJjJyxcbiAgICB9LFxuXTtcblxuY29uc3QgY29uZmlnID0ge1xuICAgIGF4aXM6IHtcbiAgICAgICAgZG9tYWluQ29sb3I6ICd3aGl0ZScsXG4gICAgICAgIGdyaWRDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgbGFiZWxDb2xvcjogJ3doaXRlJyxcbiAgICAgICAgdGlja0NvbG9yOiAnd2hpdGUnLFxuICAgIH0sXG59O1xuXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgJHNjaGVtYTogJ2h0dHBzOi8vdmVnYS5naXRodWIuaW8vc2NoZW1hL3ZlZ2EvdjMuMC5qc29uJyxcbiAgICB3aWR0aDogOTAwLFxuICAgIGhlaWdodDogNjAwLFxuICAgIHBhZGRpbmc6IHsgbGVmdDogNDAsIHRvcDogMjAsIHJpZ2h0OiAyMCwgYm90dG9tOiAyMCB9LFxuICAgIGF1dG9zaXplOiAnbm9uZScsXG4gICAgY29uZmlnLFxuICAgIGF4ZXMsXG4gICAgc2NhbGVzLFxuICAgIHNpZ25hbHMsXG4gICAgZGF0YSxcbiAgICBtYXJrcyxcbiAgICBwcm9qZWN0aW9ucyxcbn07XG4iLCJpbXBvcnQgZ2V0UGF0aHMgZnJvbSAnLi4vdXRpbC9jb25maWcnO1xuXG5jb25zdCB7XG4gICAgZGF0YVBhdGgsXG4gICAgaW1hZ2VQYXRoLFxufSA9IGdldFBhdGhzKCk7XG5cblxuY29uc3QgZGF0YSA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdyZXBvcnRzJyxcbiAgICAgICAgdXJsOiBgJHtkYXRhUGF0aH1jb21iaW5lZC5jc3ZgLFxuICAgICAgICBmb3JtYXQ6IHtcbiAgICAgICAgICAgIHR5cGU6ICdkc3YnLFxuICAgICAgICAgICAgZGVsaW1pdGVyOiAnOycsXG4gICAgICAgICAgICBwYXJzZToge1xuICAgICAgICAgICAgICAgIGRhdGU6ICdkYXRlJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgICAgIHRyYW5zZm9ybTogW1xuICAgICAgICAgICAgLy8gICAgIHR5cGU6ICdmb3JtdWxhJyxcbiAgICAgICAgICAgIC8vICAgICBhczogJ21vbnRoJyxcbiAgICAgICAgICAgIC8vICAgICBleHByOiAnbW9udGgoZGF0dW0uZGF0ZSknLFxuICAgICAgICAgICAgLy8gfSxcbiAgICAgICAgICAgIC8vIHtcbiAgICAgICAgICAgIC8vICAgICB0eXBlOiAnZXh0ZW50JyxcbiAgICAgICAgICAgIC8vICAgICBmaWVsZDogJ3llYXInLFxuICAgICAgICAgICAgLy8gICAgIHNpZ25hbDogJ2V4dGVudCcsXG4gICAgICAgICAgICAvLyB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHR5cGU6ICdhZ2dyZWdhdGUnLFxuICAgICAgICAgICAgICAgIGdyb3VwYnk6IFsnZGF0ZSddLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnZm9ybXVsYScsXG4gICAgICAgICAgICAgICAgYXM6ICd5ZWFyX21vbnRoJyxcbiAgICAgICAgICAgICAgICBleHByOiAneWVhcihkYXR1bS5kYXRlKSArIFwiX1wiICsgbW9udGgoZGF0dW0uZGF0ZSknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnY29sbGVjdCcsXG4gICAgICAgICAgICAgICAgc29ydDoge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZDogJ2RhdGUnLFxuICAgICAgICAgICAgICAgICAgICBvcmRlcjogJ2FzY2VuZGluZycsXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0sXG4gICAgfSxcbl07XG5cblxuY29uc3Qgc2lnbmFscyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICdicnVzaCcsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBvbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGV2ZW50czogJ21vdXNlZG93bicsXG4gICAgICAgICAgICAgICAgdXBkYXRlOiAnW3goKSwgeCgpXScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGV2ZW50czogJ1ttb3VzZWRvd24sIHdpbmRvdzptb3VzZXVwXSA+IHdpbmRvdzptb3VzZW1vdmUhJyxcbiAgICAgICAgICAgICAgICB1cGRhdGU6ICdbYnJ1c2hbMF0sIGNsYW1wKHgoKSwgMCwgd2lkdGgpXScsXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGV2ZW50czogeyBzaWduYWw6ICdkZWx0YScgfSxcbiAgICAgICAgICAgICAgICB1cGRhdGU6ICdjbGFtcFJhbmdlKFthbmNob3JbMF0gKyBkZWx0YSwgYW5jaG9yWzFdICsgZGVsdGFdLCAwLCB3aWR0aCknLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ2FuY2hvcicsXG4gICAgICAgIHZhbHVlOiBudWxsLFxuICAgICAgICBvbjogW3sgZXZlbnRzOiAnQGJydXNoOm1vdXNlZG93bicsIHVwZGF0ZTogJ3NsaWNlKGJydXNoKScgfV0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICd4ZG93bicsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBvbjogW3sgZXZlbnRzOiAnQGJydXNoOm1vdXNlZG93bicsIHVwZGF0ZTogJ3goKScgfV0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIG5hbWU6ICdkZWx0YScsXG4gICAgICAgIHZhbHVlOiAwLFxuICAgICAgICBvbjogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGV2ZW50czogJ1tAYnJ1c2g6bW91c2Vkb3duLCB3aW5kb3c6bW91c2V1cF0gPiB3aW5kb3c6bW91c2Vtb3ZlIScsXG4gICAgICAgICAgICAgICAgdXBkYXRlOiAneCgpIC0geGRvd24nLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ2RldGFpbERvbWFpbicsXG4gICAgICAgIG9uOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZXZlbnRzOiB7IHNpZ25hbDogJ2JydXNoJyB9LFxuICAgICAgICAgICAgICAgIC8vIHVwZGF0ZTogXCJzcGFuKGJydXNoKSA/IGludmVydCgneE92ZXJ2aWV3JywgYnJ1c2gpIDogW2RhdGV0aW1lKDIwMTQsIDAsIDEpLCBkYXRldGltZSgyMDE0LCAwLCAxNSldXCIsXG4gICAgICAgICAgICAgICAgdXBkYXRlOiBcInNwYW4oYnJ1c2gpID8gaW52ZXJ0KCd4T3ZlcnZpZXcnLCBicnVzaCkgOiBudWxsXCIsXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlOiBcImludmVydCgneE92ZXJ2aWV3JywgYnJ1c2gpXCIsXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlOiAnYnJ1c2gnLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgXSxcbiAgICB9LFxuXG5dO1xuXG5cbmNvbnN0IHNjYWxlcyA9IFtcbiAgICB7XG4gICAgICAgIG5hbWU6ICd4T3ZlcnZpZXcnLFxuICAgICAgICB0eXBlOiAndGltZScsXG4gICAgICAgIHJhbmdlOiBbMCwgeyBzaWduYWw6ICd3aWR0aCcgfV0sXG4gICAgICAgIGRvbWFpbjogeyBkYXRhOiAncmVwb3J0cycsIGZpZWxkOiAnZGF0ZScgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgbmFtZTogJ3lPdmVydmlldycsXG4gICAgICAgIGRvbWFpbjogeyBkYXRhOiAncmVwb3J0cycsIGZpZWxkOiAnY291bnQnIH0sXG4gICAgICAgIHR5cGU6ICdsaW5lYXInLFxuICAgICAgICByYW5nZTogW3sgc2lnbmFsOiAnaGVpZ2h0JyB9LCAwXSxcbiAgICAgICAgLy8gbmljZTogdHJ1ZSxcbiAgICAgICAgLy8gemVybzogdHJ1ZSxcbiAgICB9LFxuXTtcblxuXG5jb25zdCBheGVzID0gW1xuICAgIHtcbiAgICAgICAgb3JpZW50OiAnYm90dG9tJyxcbiAgICAgICAgc2NhbGU6ICd4T3ZlcnZpZXcnLFxuICAgIH0sXG4gICAge1xuICAgICAgICBvcmllbnQ6ICdsZWZ0JyxcbiAgICAgICAgc2NhbGU6ICd5T3ZlcnZpZXcnLFxuICAgIH0sXG5dO1xuXG5cbmNvbnN0IG1hcmtzID0gW1xuICAgIHtcbiAgICAgICAgdHlwZTogJ3JlY3QnLFxuICAgICAgICBmcm9tOiB7IGRhdGE6ICdyZXBvcnRzJyB9LFxuICAgICAgICBpbnRlcmFjdGl2ZTogZmFsc2UsXG4gICAgICAgIGVuY29kZToge1xuICAgICAgICAgICAgdXBkYXRlOiB7XG4gICAgICAgICAgICAgICAgeDogeyBzY2FsZTogJ3hPdmVydmlldycsIGZpZWxkOiAnZGF0ZScgfSxcbiAgICAgICAgICAgICAgICAvLyB3aWR0aDogeyBzY2FsZTogJ3hPdmVydmlldycgfSxcbiAgICAgICAgICAgICAgICB3aWR0aDogeyB2YWx1ZTogMiB9LFxuICAgICAgICAgICAgICAgIHk6IHsgc2NhbGU6ICd5T3ZlcnZpZXcnLCBmaWVsZDogJ2NvdW50JyB9LFxuICAgICAgICAgICAgICAgIC8vIHk6IHsgc2NhbGU6ICd5T3ZlcnZpZXcnLCB2YWx1ZTogMSB9LFxuICAgICAgICAgICAgICAgIHkyOiB7IHNjYWxlOiAneU92ZXJ2aWV3JywgdmFsdWU6IDAgfSxcbiAgICAgICAgICAgICAgICBmaWxsOiB7IHZhbHVlOiAnc3RlZWxibHVlJyB9LFxuICAgICAgICAgICAgfSxcbiAgICAgICAgfSxcbiAgICB9LFxuICAgIHtcbiAgICAgICAgdHlwZTogJ3JlY3QnLFxuICAgICAgICBuYW1lOiAnYnJ1c2gnLFxuICAgICAgICBlbmNvZGU6IHtcbiAgICAgICAgICAgIGVudGVyOiB7XG4gICAgICAgICAgICAgICAgeTogeyB2YWx1ZTogMCB9LFxuICAgICAgICAgICAgICAgIGhlaWdodDogeyB2YWx1ZTogNzAgfSxcbiAgICAgICAgICAgICAgICBmaWxsOiB7IHZhbHVlOiAnIzMzMycgfSxcbiAgICAgICAgICAgICAgICBmaWxsT3BhY2l0eTogeyB2YWx1ZTogMC4yIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBkYXRlOiB7XG4gICAgICAgICAgICAgICAgeDogeyBzaWduYWw6ICdicnVzaFswXScgfSxcbiAgICAgICAgICAgICAgICB4MjogeyBzaWduYWw6ICdicnVzaFsxXScgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHR5cGU6ICdyZWN0JyxcbiAgICAgICAgaW50ZXJhY3RpdmU6IGZhbHNlLFxuICAgICAgICBlbmNvZGU6IHtcbiAgICAgICAgICAgIGVudGVyOiB7XG4gICAgICAgICAgICAgICAgeTogeyB2YWx1ZTogMCB9LFxuICAgICAgICAgICAgICAgIGhlaWdodDogeyB2YWx1ZTogNzAgfSxcbiAgICAgICAgICAgICAgICB3aWR0aDogeyB2YWx1ZTogMSB9LFxuICAgICAgICAgICAgICAgIGZpbGw6IHsgdmFsdWU6ICdmaXJlYnJpY2snIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBkYXRlOiB7XG4gICAgICAgICAgICAgICAgeDogeyBzaWduYWw6ICdicnVzaFswXScgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbiAgICB7XG4gICAgICAgIHR5cGU6ICdyZWN0JyxcbiAgICAgICAgaW50ZXJhY3RpdmU6IGZhbHNlLFxuICAgICAgICBlbmNvZGU6IHtcbiAgICAgICAgICAgIGVudGVyOiB7XG4gICAgICAgICAgICAgICAgeTogeyB2YWx1ZTogMCB9LFxuICAgICAgICAgICAgICAgIGhlaWdodDogeyB2YWx1ZTogNzAgfSxcbiAgICAgICAgICAgICAgICB3aWR0aDogeyB2YWx1ZTogMSB9LFxuICAgICAgICAgICAgICAgIGZpbGw6IHsgdmFsdWU6ICd5ZWxsb3cnIH0sXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdXBkYXRlOiB7XG4gICAgICAgICAgICAgICAgeDogeyBzaWduYWw6ICdicnVzaFsxXScgfSxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIH0sXG4gICAgfSxcbl07XG5cblxuY29uc3QgY29uZmlnID0ge1xuICAgIGF4aXM6IHtcbiAgICAgICAgZ3JpZENvbG9yOiAnd2hpdGUnLFxuICAgICAgICBsYWJlbENvbG9yOiAnd2hpdGUnLFxuICAgICAgICB0aWNrQ29sb3I6ICd3aGl0ZScsXG4gICAgfSxcbn07XG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICAkc2NoZW1hOiAnaHR0cHM6Ly92ZWdhLmdpdGh1Yi5pby9zY2hlbWEvdmVnYS92My4wLmpzb24nLFxuICAgIHdpZHRoOiA3MjAsXG4gICAgaGVpZ2h0OiA3MCxcbiAgICBwYWRkaW5nOiAzMCxcbiAgICBhdXRvc2l6ZTogJ25vbmUnLFxuICAgIGNvbmZpZyxcbiAgICBzY2FsZXMsXG4gICAgc2lnbmFscyxcbiAgICBheGVzLFxuICAgIGRhdGEsXG4gICAgbWFya3MsXG4gICAgcHJvamVjdGlvbnM6IFtdLFxufTtcbiIsImV4cG9ydCBkZWZhdWx0ICgpID0+IHtcbiAgICBsZXQgZGF0YVBhdGggPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fS9kYXRhL2A7XG4gICAgbGV0IGltYWdlUGF0aCA9IGAke3dpbmRvdy5sb2NhdGlvbi5wcm90b2NvbH0vLyR7d2luZG93LmxvY2F0aW9uLmhvc3R9L2ltZy9gO1xuXG4gICAgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5pbmRleE9mKCdnaXRodWInKSAhPT0gLTEpIHtcbiAgICAgICAgZGF0YVBhdGggPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fS92ZWdhLXNwZWNzL2RhdGEvYDtcbiAgICAgICAgaW1hZ2VQYXRoID0gYCR7d2luZG93LmxvY2F0aW9uLnByb3RvY29sfS8vJHt3aW5kb3cubG9jYXRpb24uaG9zdH0vdmVnYS1zcGVjcy9pbWcvYDtcbiAgICB9IGVsc2UgaWYgKHdpbmRvdy5sb2NhdGlvbi5ob3N0bmFtZS5pbmRleE9mKCdhYnVtYXJrdWInKSAhPT0gLTEpIHtcbiAgICAgICAgZGF0YVBhdGggPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fS9mZmZhY3QvZGF0YS9gO1xuICAgICAgICBpbWFnZVBhdGggPSBgJHt3aW5kb3cubG9jYXRpb24ucHJvdG9jb2x9Ly8ke3dpbmRvdy5sb2NhdGlvbi5ob3N0fS9mZmZhY3QvaW1nL2A7XG4gICAgfVxuXG4gICAgcmV0dXJuIHtcbiAgICAgICAgZGF0YVBhdGgsXG4gICAgICAgIGltYWdlUGF0aCxcbiAgICB9O1xufTtcblxuIiwiLy8gaW1wb3J0IEwgZnJvbSAnbGVhZmxldCc7XG4vLyBpbXBvcnQgdmVnYSBmcm9tICd2ZWdhJztcbi8vIGltcG9ydCBMZWFmbGV0VmVnYSBmcm9tICcuL2xlYWZsZXQtdmVnYSc7XG5pbXBvcnQgUiBmcm9tICdyYW1kYSc7XG5cbmNvbnN0IHZlZ2EgPSB3aW5kb3cudmVnYTtcbmNvbnN0IHZlZ2FUb29sdGlwID0gd2luZG93LnZlZ2FUb29sdGlwO1xuY29uc3QgTCA9IHdpbmRvdy5MO1xuXG5jb25zdCBzZXR1cCA9ICh7IHNwZWMsIHZpZXcsIGFkZExlYWZsZXQsIGFkZFRvb2x0aXAsIHRvb2x0aXBPcHRpb25zLCBjYWxsYmFjayB9KSA9PiB7XG4gICAgaWYgKFIuaXNOaWwodmlldykpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignbm8gdmlldycpO1xuICAgICAgICBjYWxsYmFjayhudWxsKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIGlmIChhZGRUb29sdGlwICYmICFhZGRMZWFmbGV0KSB7XG4gICAgICAgIHZlZ2FUb29sdGlwLnZlZ2EodmlldywgdG9vbHRpcE9wdGlvbnMpO1xuICAgIH1cblxuICAgIFIuZm9yRWFjaCgoc2lnbmFsKSA9PiB7XG4gICAgICAgIHZpZXcuYWRkU2lnbmFsTGlzdGVuZXIoc2lnbmFsLm5hbWUsIChuYW1lLCBkYXRhKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhuYW1lLCBkYXRhKTtcbiAgICAgICAgfSk7XG4gICAgfSwgc3BlYy5zaWduYWxzIHx8IFtdKTtcblxuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBSLmZvckVhY2goKGRhdGEpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRhdGEubmFtZSwgdmlldy5kYXRhKGRhdGEubmFtZSkpO1xuICAgICAgICB9LCBzcGVjLmRhdGEgfHwgW10pO1xuICAgIH0sIDMwMCk7XG5cbiAgICBjYWxsYmFjayh2aWV3KTtcbn07XG5cblxuY29uc3QgY3JlYXRlVmVnYVZpZXcgPSAoeyBzcGVjLCBpZCwgcmVuZGVyZXIsIGFkZExlYWZsZXQsIGFkZFRvb2x0aXAsIHRvb2x0aXBPcHRpb25zLCBjYWxsYmFjayB9KSA9PiB7XG4gICAgY29uc3QgdmlldyA9IG5ldyB2ZWdhLlZpZXcodmVnYS5wYXJzZShzcGVjKSkucmVuZGVyZXIocmVuZGVyZXIpLmluaXRpYWxpemUoYCMke2lkfWApXG4gICAgICAgIC5ob3ZlcigpXG4gICAgICAgIC5ydW4oKTtcblxuICAgIHNldHVwKHtcbiAgICAgICAgc3BlYyxcbiAgICAgICAgdmlldyxcbiAgICAgICAgYWRkTGVhZmxldCxcbiAgICAgICAgYWRkVG9vbHRpcCxcbiAgICAgICAgdG9vbHRpcE9wdGlvbnMsXG4gICAgICAgIGNhbGxiYWNrLFxuICAgIH0pO1xufTtcblxuXG5leHBvcnQgZGVmYXVsdCAoeyBzcGVjLCBpZCwgcmVuZGVyZXIgPSAnY2FudmFzJywgYWRkTGVhZmxldCA9IGZhbHNlLCBhZGRUb29sdGlwID0gZmFsc2UsIHRvb2x0aXBPcHRpb25zID0ge30sIGNhbGxiYWNrID0gKCkgPT4geyB9IH0pID0+IHtcbiAgICBpZiAoYWRkTGVhZmxldCkge1xuICAgICAgICBjb25zdCBzaWduYWxzID0gc3BlYy5zaWduYWxzIHx8IFtdO1xuICAgICAgICBjb25zdCB6b29tID0gUi5maW5kKFIucHJvcEVxKCduYW1lJywgJ3pvb20nKSkoc2lnbmFscyk7XG4gICAgICAgIGNvbnN0IGxhdGl0dWRlID0gUi5maW5kKFIucHJvcEVxKCduYW1lJywgJ2xhdGl0dWRlJykpKHNpZ25hbHMpO1xuICAgICAgICBjb25zdCBsb25naXR1ZGUgPSBSLmZpbmQoUi5wcm9wRXEoJ25hbWUnLCAnbG9uZ2l0dWRlJykpKHNpZ25hbHMpO1xuXG4gICAgICAgIGlmIChSLmlzTmlsKHpvb20pIHx8IFIuaXNOaWwobGF0aXR1ZGUpIHx8IFIuaXNOaWwobG9uZ2l0dWRlKSkge1xuICAgICAgICAgICAgY3JlYXRlVmVnYVZpZXcoeyBzcGVjLCBpZCwgcmVuZGVyZXIsIGFkZExlYWZsZXQsIGFkZFRvb2x0aXAsIHRvb2x0aXBPcHRpb25zLCBjYWxsYmFjayB9KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0IG1hcCA9IEwubWFwKGlkLCB7XG4gICAgICAgICAgICB6b29tQW5pbWF0aW9uOiBmYWxzZSxcbiAgICAgICAgfSkuc2V0VmlldyhbbGF0aXR1ZGUudmFsdWUsIGxvbmdpdHVkZS52YWx1ZV0sIHpvb20udmFsdWUpO1xuXG4gICAgICAgIGRlbGV0ZSBzcGVjLnByb2plY3Rpb25zO1xuXG4gICAgICAgIEwudGlsZUxheWVyKFxuICAgICAgICAgICAgJ2h0dHA6Ly97c30uYmFzZW1hcHMuY2FydG9jZG4uY29tL2xpZ2h0X2FsbC97en0ve3h9L3t5fS5wbmcnLCB7XG4gICAgICAgICAgICAgICAgYXR0cmlidXRpb246ICc8YSBocmVmPVwiaHR0cDovL29wZW5zdHJlZXRtYXAub3JnXCI+T3BlblN0cmVldE1hcDwvYT4gY29udHJpYnV0b3JzJyxcbiAgICAgICAgICAgICAgICBtYXhab29tOiAxOCxcbiAgICAgICAgICAgIH0sXG4gICAgICAgICkuYWRkVG8obWFwKTtcblxuICAgICAgICBjb25zdCBsYXllciA9IEwudmVnYShzcGVjLCB7XG4gICAgICAgICAgICByZW5kZXJlcixcbiAgICAgICAgICAgIC8vIE1ha2Ugc3VyZSB0aGUgbGVnZW5kIHN0YXlzIGluIHBsYWNlXG4gICAgICAgICAgICBkZWxheVJlcGFpbnQ6IHRydWUsXG4gICAgICAgIH0pLmFkZFRvKG1hcCk7XG5cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB2aWV3ID0gbGF5ZXIuX3ZpZXc7XG4gICAgICAgICAgICBzZXR1cCh7XG4gICAgICAgICAgICAgICAgc3BlYyxcbiAgICAgICAgICAgICAgICB2aWV3LFxuICAgICAgICAgICAgICAgIGFkZExlYWZsZXQsXG4gICAgICAgICAgICAgICAgYWRkVG9vbHRpcCxcbiAgICAgICAgICAgICAgICB0b29sdGlwT3B0aW9ucyxcbiAgICAgICAgICAgICAgICBjYWxsYmFjayxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAwKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBjcmVhdGVWZWdhVmlldyh7IHNwZWMsIGlkLCByZW5kZXJlciwgYWRkTGVhZmxldCwgYWRkVG9vbHRpcCwgdG9vbHRpcE9wdGlvbnMsIGNhbGxiYWNrIH0pO1xuICAgIH1cbn07XG4iLCJleHBvcnQgZGVmYXVsdCAoc3BlYykgPT4ge1xuICAgIC8vIGNvbnN0IGpzb24gPSBlbmNvZGVVUklDb21wb25lbnQoSlNPTi5zdHJpbmdpZnkoVGVzdFNwZWM0KSk7XG4gICAgLy8gd2luZG93Lm9wZW4oYGRhdGE6YXBwbGljYXRpb24vanNvbiwgJHtqc29ufWAsICdfYmxhbmsnKTtcbiAgICBjb25zdCBqc29uID0gSlNPTi5zdHJpbmdpZnkoc3BlYywgbnVsbCwgNCk7XG4gICAgY29uc3QgdyA9IHdpbmRvdy5vcGVuKCk7XG4gICAgdy5kb2N1bWVudC5vcGVuKCk7XG4gICAgdy5kb2N1bWVudC53cml0ZShgPGh0bWw+PGJvZHk+PHByZT4ke2pzb259PC9wcmU+PC9ib2R5PjwvaHRtbD5gKTtcbiAgICB3LmRvY3VtZW50LmNsb3NlKCk7XG59O1xuIl19
