// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function (modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      var res = localRequire.resolve(x);
      return res === false ? {} : newRequire(res);
    }

    function resolve(x) {
      var id = modules[name][1][x];
      return id != null ? id : x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function (id, exports) {
    modules[id] = [
      function (require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function () {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function () {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"8UdO5":[function(require,module,exports) {
"use strict";
var HMR_HOST = null;
var HMR_PORT = 1234;
var HMR_SECURE = false;
var HMR_ENV_HASH = "d6ea1d42532a7575";
module.bundle.HMR_BUNDLE_ID = "9058b2075feaaaf2";
function _toConsumableArray(arr) {
    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
}
function _nonIterableSpread() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArray(iter) {
    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
}
function _arrayWithoutHoles(arr) {
    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
}
function _createForOfIteratorHelper(o, allowArrayLike) {
    var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"];
    if (!it) {
        if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") {
            if (it) o = it;
            var i = 0;
            var F = function F() {};
            return {
                s: F,
                n: function n() {
                    if (i >= o.length) return {
                        done: true
                    };
                    return {
                        done: false,
                        value: o[i++]
                    };
                },
                e: function e(_e) {
                    throw _e;
                },
                f: F
            };
        }
        throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
    }
    var normalCompletion = true, didErr = false, err;
    return {
        s: function s() {
            it = it.call(o);
        },
        n: function n() {
            var step = it.next();
            normalCompletion = step.done;
            return step;
        },
        e: function e(_e2) {
            didErr = true;
            err = _e2;
        },
        f: function f() {
            try {
                if (!normalCompletion && it.return != null) it.return();
            } finally{
                if (didErr) throw err;
            }
        }
    };
}
function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;
    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];
    return arr2;
}
/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE, chrome, browser */ /*::
import type {
  HMRAsset,
  HMRMessage,
} from '@parcel/reporter-dev-server/src/HMRServer.js';
interface ParcelRequire {
  (string): mixed;
  cache: {|[string]: ParcelModule|};
  hotData: mixed;
  Module: any;
  parent: ?ParcelRequire;
  isParcelRequire: true;
  modules: {|[string]: [Function, {|[string]: string|}]|};
  HMR_BUNDLE_ID: string;
  root: ParcelRequire;
}
interface ParcelModule {
  hot: {|
    data: mixed,
    accept(cb: (Function) => void): void,
    dispose(cb: (mixed) => void): void,
    // accept(deps: Array<string> | string, cb: (Function) => void): void,
    // decline(): void,
    _acceptCallbacks: Array<(Function) => void>,
    _disposeCallbacks: Array<(mixed) => void>,
  |};
}
interface ExtensionContext {
  runtime: {|
    reload(): void,
  |};
}
declare var module: {bundle: ParcelRequire, ...};
declare var HMR_HOST: string;
declare var HMR_PORT: string;
declare var HMR_ENV_HASH: string;
declare var HMR_SECURE: boolean;
declare var chrome: ExtensionContext;
declare var browser: ExtensionContext;
*/ var OVERLAY_ID = '__parcel__error__overlay__';
var OldModule = module.bundle.Module;
function Module(moduleName) {
    OldModule.call(this, moduleName);
    this.hot = {
        data: module.bundle.hotData,
        _acceptCallbacks: [],
        _disposeCallbacks: [],
        accept: function accept(fn) {
            this._acceptCallbacks.push(fn || function() {});
        },
        dispose: function dispose(fn) {
            this._disposeCallbacks.push(fn);
        }
    };
    module.bundle.hotData = undefined;
}
module.bundle.Module = Module;
var checkedAssets, acceptedAssets, assetsToAccept /*: Array<[ParcelRequire, string]> */ ;
function getHostname() {
    return HMR_HOST || (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost');
}
function getPort() {
    return HMR_PORT || location.port;
} // eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
    var hostname = getHostname();
    var port = getPort();
    var protocol = HMR_SECURE || location.protocol == 'https:' && !/localhost|127.0.0.1|0.0.0.0/.test(hostname) ? 'wss' : 'ws';
    var ws = new WebSocket(protocol + '://' + hostname + (port ? ':' + port : '') + '/'); // $FlowFixMe
    ws.onmessage = function(event) {
        checkedAssets = {} /*: {|[string]: boolean|} */ ;
        acceptedAssets = {} /*: {|[string]: boolean|} */ ;
        assetsToAccept = [];
        var data = JSON.parse(event.data);
        if (data.type === 'update') {
            // Remove error overlay if there is one
            if (typeof document !== 'undefined') removeErrorOverlay();
            var assets = data.assets.filter(function(asset) {
                return asset.envHash === HMR_ENV_HASH;
            }); // Handle HMR Update
            var handled = assets.every(function(asset) {
                return asset.type === 'css' || asset.type === 'js' && hmrAcceptCheck(module.bundle.root, asset.id, asset.depsByBundle);
            });
            if (handled) {
                console.clear();
                assets.forEach(function(asset) {
                    hmrApply(module.bundle.root, asset);
                });
                for(var i = 0; i < assetsToAccept.length; i++){
                    var id = assetsToAccept[i][1];
                    if (!acceptedAssets[id]) hmrAcceptRun(assetsToAccept[i][0], id);
                }
            } else if ('reload' in location) location.reload();
            else {
                // Web extension context
                var ext = typeof chrome === 'undefined' ? typeof browser === 'undefined' ? null : browser : chrome;
                if (ext && ext.runtime && ext.runtime.reload) ext.runtime.reload();
            }
        }
        if (data.type === 'error') {
            // Log parcel errors to console
            var _iterator = _createForOfIteratorHelper(data.diagnostics.ansi), _step;
            try {
                for(_iterator.s(); !(_step = _iterator.n()).done;){
                    var ansiDiagnostic = _step.value;
                    var stack = ansiDiagnostic.codeframe ? ansiDiagnostic.codeframe : ansiDiagnostic.stack;
                    console.error('🚨 [parcel]: ' + ansiDiagnostic.message + '\n' + stack + '\n\n' + ansiDiagnostic.hints.join('\n'));
                }
            } catch (err) {
                _iterator.e(err);
            } finally{
                _iterator.f();
            }
            if (typeof document !== 'undefined') {
                // Render the fancy html overlay
                removeErrorOverlay();
                var overlay = createErrorOverlay(data.diagnostics.html); // $FlowFixMe
                document.body.appendChild(overlay);
            }
        }
    };
    ws.onerror = function(e) {
        console.error(e.message);
    };
    ws.onclose = function() {
        console.warn('[parcel] 🚨 Connection to the HMR server was lost');
    };
}
function removeErrorOverlay() {
    var overlay = document.getElementById(OVERLAY_ID);
    if (overlay) {
        overlay.remove();
        console.log('[parcel] ✨ Error resolved');
    }
}
function createErrorOverlay(diagnostics) {
    var overlay = document.createElement('div');
    overlay.id = OVERLAY_ID;
    var errorHTML = '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';
    var _iterator2 = _createForOfIteratorHelper(diagnostics), _step2;
    try {
        for(_iterator2.s(); !(_step2 = _iterator2.n()).done;){
            var diagnostic = _step2.value;
            var stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;
            errorHTML += "\n      <div>\n        <div style=\"font-size: 18px; font-weight: bold; margin-top: 20px;\">\n          \uD83D\uDEA8 ".concat(diagnostic.message, "\n        </div>\n        <pre>").concat(stack, "</pre>\n        <div>\n          ").concat(diagnostic.hints.map(function(hint) {
                return '<div>💡 ' + hint + '</div>';
            }).join(''), "\n        </div>\n        ").concat(diagnostic.documentation ? "<div>\uD83D\uDCDD <a style=\"color: violet\" href=\"".concat(diagnostic.documentation, "\" target=\"_blank\">Learn more</a></div>") : '', "\n      </div>\n    ");
        }
    } catch (err) {
        _iterator2.e(err);
    } finally{
        _iterator2.f();
    }
    errorHTML += '</div>';
    overlay.innerHTML = errorHTML;
    return overlay;
}
function getParents(bundle, id) /*: Array<[ParcelRequire, string]> */ {
    var modules = bundle.modules;
    if (!modules) return [];
    var parents = [];
    var k, d, dep;
    for(k in modules)for(d in modules[k][1]){
        dep = modules[k][1][d];
        if (dep === id || Array.isArray(dep) && dep[dep.length - 1] === id) parents.push([
            bundle,
            k
        ]);
    }
    if (bundle.parent) parents = parents.concat(getParents(bundle.parent, id));
    return parents;
}
function updateLink(link) {
    var newLink = link.cloneNode();
    newLink.onload = function() {
        if (link.parentNode !== null) // $FlowFixMe
        link.parentNode.removeChild(link);
    };
    newLink.setAttribute('href', link.getAttribute('href').split('?')[0] + '?' + Date.now()); // $FlowFixMe
    link.parentNode.insertBefore(newLink, link.nextSibling);
}
var cssTimeout = null;
function reloadCSS() {
    if (cssTimeout) return;
    cssTimeout = setTimeout(function() {
        var links = document.querySelectorAll('link[rel="stylesheet"]');
        for(var i = 0; i < links.length; i++){
            // $FlowFixMe[incompatible-type]
            var href = links[i].getAttribute('href');
            var hostname = getHostname();
            var servedFromHMRServer = hostname === 'localhost' ? new RegExp('^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort()).test(href) : href.indexOf(hostname + ':' + getPort());
            var absolute = /^https?:\/\//i.test(href) && href.indexOf(location.origin) !== 0 && !servedFromHMRServer;
            if (!absolute) updateLink(links[i]);
        }
        cssTimeout = null;
    }, 50);
}
function hmrApply(bundle, asset) {
    var modules = bundle.modules;
    if (!modules) return;
    if (asset.type === 'css') reloadCSS();
    else if (asset.type === 'js') {
        var deps = asset.depsByBundle[bundle.HMR_BUNDLE_ID];
        if (deps) {
            if (modules[asset.id]) {
                // Remove dependencies that are removed and will become orphaned.
                // This is necessary so that if the asset is added back again, the cache is gone, and we prevent a full page reload.
                var oldDeps = modules[asset.id][1];
                for(var dep in oldDeps)if (!deps[dep] || deps[dep] !== oldDeps[dep]) {
                    var id = oldDeps[dep];
                    var parents = getParents(module.bundle.root, id);
                    if (parents.length === 1) hmrDelete(module.bundle.root, id);
                }
            }
            var fn = new Function('require', 'module', 'exports', asset.output);
            modules[asset.id] = [
                fn,
                deps
            ];
        } else if (bundle.parent) hmrApply(bundle.parent, asset);
    }
}
function hmrDelete(bundle, id1) {
    var modules = bundle.modules;
    if (!modules) return;
    if (modules[id1]) {
        // Collect dependencies that will become orphaned when this module is deleted.
        var deps = modules[id1][1];
        var orphans = [];
        for(var dep in deps){
            var parents = getParents(module.bundle.root, deps[dep]);
            if (parents.length === 1) orphans.push(deps[dep]);
        } // Delete the module. This must be done before deleting dependencies in case of circular dependencies.
        delete modules[id1];
        delete bundle.cache[id1]; // Now delete the orphans.
        orphans.forEach(function(id) {
            hmrDelete(module.bundle.root, id);
        });
    } else if (bundle.parent) hmrDelete(bundle.parent, id1);
}
function hmrAcceptCheck(bundle, id, depsByBundle) {
    if (hmrAcceptCheckOne(bundle, id, depsByBundle)) return true;
     // Traverse parents breadth first. All possible ancestries must accept the HMR update, or we'll reload.
    var parents = getParents(module.bundle.root, id);
    var accepted = false;
    while(parents.length > 0){
        var v = parents.shift();
        var a = hmrAcceptCheckOne(v[0], v[1], null);
        if (a) // If this parent accepts, stop traversing upward, but still consider siblings.
        accepted = true;
        else {
            // Otherwise, queue the parents in the next level upward.
            var p = getParents(module.bundle.root, v[1]);
            if (p.length === 0) {
                // If there are no parents, then we've reached an entry without accepting. Reload.
                accepted = false;
                break;
            }
            parents.push.apply(parents, _toConsumableArray(p));
        }
    }
    return accepted;
}
function hmrAcceptCheckOne(bundle, id, depsByBundle) {
    var modules = bundle.modules;
    if (!modules) return;
    if (depsByBundle && !depsByBundle[bundle.HMR_BUNDLE_ID]) {
        // If we reached the root bundle without finding where the asset should go,
        // there's nothing to do. Mark as "accepted" so we don't reload the page.
        if (!bundle.parent) return true;
        return hmrAcceptCheck(bundle.parent, id, depsByBundle);
    }
    if (checkedAssets[id]) return true;
    checkedAssets[id] = true;
    var cached = bundle.cache[id];
    assetsToAccept.push([
        bundle,
        id
    ]);
    if (!cached || cached.hot && cached.hot._acceptCallbacks.length) return true;
}
function hmrAcceptRun(bundle, id) {
    var cached = bundle.cache[id];
    bundle.hotData = {};
    if (cached && cached.hot) cached.hot.data = bundle.hotData;
    if (cached && cached.hot && cached.hot._disposeCallbacks.length) cached.hot._disposeCallbacks.forEach(function(cb) {
        cb(bundle.hotData);
    });
    delete bundle.cache[id];
    bundle(id);
    cached = bundle.cache[id];
    if (cached && cached.hot && cached.hot._acceptCallbacks.length) cached.hot._acceptCallbacks.forEach(function(cb) {
        var assetsToAlsoAccept = cb(function() {
            return getParents(module.bundle.root, id);
        });
        if (assetsToAlsoAccept && assetsToAccept.length) // $FlowFixMe[method-unbinding]
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
    });
    acceptedAssets[id] = true;
}

},{}],"h5NIW":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _bootstrap = require("../../src/bootstrap");
var _bootstrapDefault = parcelHelpers.interopDefault(_bootstrap);
var _mockActions = require("./mock-actions");
_bootstrapDefault.default();
document.querySelector(".nav-bar").appendChild(document.getElementById("example-app-code-link"));

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","../../src/bootstrap":"9yLpT","./mock-actions":"4WfS2"}],"gkKU3":[function(require,module,exports) {
exports.interopDefault = function(a) {
    return a && a.__esModule ? a : {
        default: a
    };
};
exports.defineInteropFlag = function(a) {
    Object.defineProperty(a, '__esModule', {
        value: true
    });
};
exports.exportAll = function(source, dest) {
    Object.keys(source).forEach(function(key) {
        if (key === 'default' || key === '__esModule' || dest.hasOwnProperty(key)) return;
        Object.defineProperty(dest, key, {
            enumerable: true,
            get: function() {
                return source[key];
            }
        });
    });
    return dest;
};
exports.export = function(dest, destName, get) {
    Object.defineProperty(dest, destName, {
        enumerable: true,
        get: get
    });
};

},{}],"9yLpT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _appSvelte = require("./components/App.svelte");
var _appSvelteDefault = parcelHelpers.interopDefault(_appSvelte);
var _modernCssReset = require("modern-css-reset");
function bootstrap() {
    const app = new _appSvelteDefault.default({
        target: document.body
    });
    return app;
}
exports.default = bootstrap;

},{"./components/App.svelte":"josn3","modern-css-reset":"5NkvL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"josn3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* src/components/App.svelte generated by Svelte v3.48.0 */ var _internal = require("svelte/internal");
var _svelte = require("svelte");
var _navSvelte = require("./Nav.svelte");
var _navSvelteDefault = parcelHelpers.interopDefault(_navSvelte);
var _routerSvelte = require("./Router.svelte");
var _routerSvelteDefault = parcelHelpers.interopDefault(_routerSvelte);
function add_css(target) {
    _internal.append_styles(target, "svelte-11cir4s", ".background.svelte-11cir4s{background-color:#fafafa;position:fixed;left:0;right:0;top:0;bottom:0;font-family:'Roboto', sans-serif;overflow-y:auto}");
}
function create_fragment(ctx) {
    let div1;
    let nav;
    let t;
    let div0;
    let router;
    let current;
    nav = new _navSvelteDefault.default({});
    router = new _routerSvelteDefault.default({});
    return {
        c () {
            div1 = _internal.element("div");
            _internal.create_component(nav.$$.fragment);
            t = _internal.space();
            div0 = _internal.element("div");
            _internal.create_component(router.$$.fragment);
            _internal.attr(div0, "class", "main-body");
            _internal.attr(div1, "class", "background svelte-11cir4s");
        },
        m (target, anchor) {
            _internal.insert(target, div1, anchor);
            _internal.mount_component(nav, div1, null);
            _internal.append(div1, t);
            _internal.append(div1, div0);
            _internal.mount_component(router, div0, null);
            current = true;
        },
        p: _internal.noop,
        i (local) {
            if (current) return;
            _internal.transition_in(nav.$$.fragment, local);
            _internal.transition_in(router.$$.fragment, local);
            current = true;
        },
        o (local) {
            _internal.transition_out(nav.$$.fragment, local);
            _internal.transition_out(router.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) _internal.detach(div1);
            _internal.destroy_component(nav);
            _internal.destroy_component(router);
        }
    };
}
function instance($$self) {
    let history = {
        pushState () {}
    };
    _svelte.setContext('history', history);
    return [];
}
class App extends _internal.SvelteComponent {
    constructor(options){
        super();
        _internal.init(this, options, instance, create_fragment, _internal.safe_not_equal, {}, add_css);
    }
}
exports.default = App;

},{"svelte/internal":"iVhnC","./Nav.svelte":"fVA3i","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","svelte":"4r74h","./Router.svelte":"bz5PN"}],"iVhnC":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "HtmlTag", ()=>HtmlTag
);
parcelHelpers.export(exports, "HtmlTagHydration", ()=>HtmlTagHydration
);
parcelHelpers.export(exports, "SvelteComponent", ()=>SvelteComponent
);
parcelHelpers.export(exports, "SvelteComponentDev", ()=>SvelteComponentDev
);
parcelHelpers.export(exports, "SvelteComponentTyped", ()=>SvelteComponentTyped
);
parcelHelpers.export(exports, "SvelteElement", ()=>SvelteElement
);
parcelHelpers.export(exports, "action_destroyer", ()=>action_destroyer
);
parcelHelpers.export(exports, "add_attribute", ()=>add_attribute
);
parcelHelpers.export(exports, "add_classes", ()=>add_classes
);
parcelHelpers.export(exports, "add_flush_callback", ()=>add_flush_callback
);
parcelHelpers.export(exports, "add_location", ()=>add_location
);
parcelHelpers.export(exports, "add_render_callback", ()=>add_render_callback
);
parcelHelpers.export(exports, "add_resize_listener", ()=>add_resize_listener
);
parcelHelpers.export(exports, "add_styles", ()=>add_styles
);
parcelHelpers.export(exports, "add_transform", ()=>add_transform
);
parcelHelpers.export(exports, "afterUpdate", ()=>afterUpdate
);
parcelHelpers.export(exports, "append", ()=>append
);
parcelHelpers.export(exports, "append_dev", ()=>append_dev
);
parcelHelpers.export(exports, "append_empty_stylesheet", ()=>append_empty_stylesheet
);
parcelHelpers.export(exports, "append_hydration", ()=>append_hydration
);
parcelHelpers.export(exports, "append_hydration_dev", ()=>append_hydration_dev
);
parcelHelpers.export(exports, "append_styles", ()=>append_styles
);
parcelHelpers.export(exports, "assign", ()=>assign
);
parcelHelpers.export(exports, "attr", ()=>attr
);
parcelHelpers.export(exports, "attr_dev", ()=>attr_dev
);
parcelHelpers.export(exports, "attribute_to_object", ()=>attribute_to_object
);
parcelHelpers.export(exports, "beforeUpdate", ()=>beforeUpdate
);
parcelHelpers.export(exports, "bind", ()=>bind
);
parcelHelpers.export(exports, "binding_callbacks", ()=>binding_callbacks
);
parcelHelpers.export(exports, "blank_object", ()=>blank_object
);
parcelHelpers.export(exports, "bubble", ()=>bubble
);
parcelHelpers.export(exports, "check_outros", ()=>check_outros
);
parcelHelpers.export(exports, "children", ()=>children
);
parcelHelpers.export(exports, "claim_component", ()=>claim_component
);
parcelHelpers.export(exports, "claim_element", ()=>claim_element
);
parcelHelpers.export(exports, "claim_html_tag", ()=>claim_html_tag
);
parcelHelpers.export(exports, "claim_space", ()=>claim_space
);
parcelHelpers.export(exports, "claim_svg_element", ()=>claim_svg_element
);
parcelHelpers.export(exports, "claim_text", ()=>claim_text
);
parcelHelpers.export(exports, "clear_loops", ()=>clear_loops
);
parcelHelpers.export(exports, "component_subscribe", ()=>component_subscribe
);
parcelHelpers.export(exports, "compute_rest_props", ()=>compute_rest_props
);
parcelHelpers.export(exports, "compute_slots", ()=>compute_slots
);
parcelHelpers.export(exports, "createEventDispatcher", ()=>createEventDispatcher
);
parcelHelpers.export(exports, "create_animation", ()=>create_animation
);
parcelHelpers.export(exports, "create_bidirectional_transition", ()=>create_bidirectional_transition
);
parcelHelpers.export(exports, "create_component", ()=>create_component
);
parcelHelpers.export(exports, "create_in_transition", ()=>create_in_transition
);
parcelHelpers.export(exports, "create_out_transition", ()=>create_out_transition
);
parcelHelpers.export(exports, "create_slot", ()=>create_slot
);
parcelHelpers.export(exports, "create_ssr_component", ()=>create_ssr_component
);
parcelHelpers.export(exports, "current_component", ()=>current_component
);
parcelHelpers.export(exports, "custom_event", ()=>custom_event
);
parcelHelpers.export(exports, "dataset_dev", ()=>dataset_dev
);
parcelHelpers.export(exports, "debug", ()=>debug
);
parcelHelpers.export(exports, "destroy_block", ()=>destroy_block
);
parcelHelpers.export(exports, "destroy_component", ()=>destroy_component
);
parcelHelpers.export(exports, "destroy_each", ()=>destroy_each
);
parcelHelpers.export(exports, "detach", ()=>detach
);
parcelHelpers.export(exports, "detach_after_dev", ()=>detach_after_dev
);
parcelHelpers.export(exports, "detach_before_dev", ()=>detach_before_dev
);
parcelHelpers.export(exports, "detach_between_dev", ()=>detach_between_dev
);
parcelHelpers.export(exports, "detach_dev", ()=>detach_dev
);
parcelHelpers.export(exports, "dirty_components", ()=>dirty_components
);
parcelHelpers.export(exports, "dispatch_dev", ()=>dispatch_dev
);
parcelHelpers.export(exports, "each", ()=>each
);
parcelHelpers.export(exports, "element", ()=>element
);
parcelHelpers.export(exports, "element_is", ()=>element_is
);
parcelHelpers.export(exports, "empty", ()=>empty
);
parcelHelpers.export(exports, "end_hydrating", ()=>end_hydrating
);
parcelHelpers.export(exports, "escape", ()=>escape
);
parcelHelpers.export(exports, "escape_attribute_value", ()=>escape_attribute_value
);
parcelHelpers.export(exports, "escape_object", ()=>escape_object
);
parcelHelpers.export(exports, "escaped", ()=>escaped
);
parcelHelpers.export(exports, "exclude_internal_props", ()=>exclude_internal_props
);
parcelHelpers.export(exports, "fix_and_destroy_block", ()=>fix_and_destroy_block
);
parcelHelpers.export(exports, "fix_and_outro_and_destroy_block", ()=>fix_and_outro_and_destroy_block
);
parcelHelpers.export(exports, "fix_position", ()=>fix_position
);
parcelHelpers.export(exports, "flush", ()=>flush
);
parcelHelpers.export(exports, "getAllContexts", ()=>getAllContexts
);
parcelHelpers.export(exports, "getContext", ()=>getContext
);
parcelHelpers.export(exports, "get_all_dirty_from_scope", ()=>get_all_dirty_from_scope
);
parcelHelpers.export(exports, "get_binding_group_value", ()=>get_binding_group_value
);
parcelHelpers.export(exports, "get_current_component", ()=>get_current_component
);
parcelHelpers.export(exports, "get_custom_elements_slots", ()=>get_custom_elements_slots
);
parcelHelpers.export(exports, "get_root_for_style", ()=>get_root_for_style
);
parcelHelpers.export(exports, "get_slot_changes", ()=>get_slot_changes
);
parcelHelpers.export(exports, "get_spread_object", ()=>get_spread_object
);
parcelHelpers.export(exports, "get_spread_update", ()=>get_spread_update
);
parcelHelpers.export(exports, "get_store_value", ()=>get_store_value
);
parcelHelpers.export(exports, "globals", ()=>globals
);
parcelHelpers.export(exports, "group_outros", ()=>group_outros
);
parcelHelpers.export(exports, "handle_promise", ()=>handle_promise
);
parcelHelpers.export(exports, "hasContext", ()=>hasContext
);
parcelHelpers.export(exports, "has_prop", ()=>has_prop
);
parcelHelpers.export(exports, "identity", ()=>identity
);
parcelHelpers.export(exports, "init", ()=>init
);
parcelHelpers.export(exports, "insert", ()=>insert
);
parcelHelpers.export(exports, "insert_dev", ()=>insert_dev
);
parcelHelpers.export(exports, "insert_hydration", ()=>insert_hydration
);
parcelHelpers.export(exports, "insert_hydration_dev", ()=>insert_hydration_dev
);
parcelHelpers.export(exports, "intros", ()=>intros
);
parcelHelpers.export(exports, "invalid_attribute_name_character", ()=>invalid_attribute_name_character
);
parcelHelpers.export(exports, "is_client", ()=>is_client
);
parcelHelpers.export(exports, "is_crossorigin", ()=>is_crossorigin
);
parcelHelpers.export(exports, "is_empty", ()=>is_empty
);
parcelHelpers.export(exports, "is_function", ()=>is_function
);
parcelHelpers.export(exports, "is_promise", ()=>is_promise
);
parcelHelpers.export(exports, "is_void", ()=>is_void
);
parcelHelpers.export(exports, "listen", ()=>listen
);
parcelHelpers.export(exports, "listen_dev", ()=>listen_dev
);
parcelHelpers.export(exports, "loop", ()=>loop
);
parcelHelpers.export(exports, "loop_guard", ()=>loop_guard
);
parcelHelpers.export(exports, "merge_ssr_styles", ()=>merge_ssr_styles
);
parcelHelpers.export(exports, "missing_component", ()=>missing_component
);
parcelHelpers.export(exports, "mount_component", ()=>mount_component
);
parcelHelpers.export(exports, "noop", ()=>noop
);
parcelHelpers.export(exports, "not_equal", ()=>not_equal
);
parcelHelpers.export(exports, "now", ()=>now
);
parcelHelpers.export(exports, "null_to_empty", ()=>null_to_empty
);
parcelHelpers.export(exports, "object_without_properties", ()=>object_without_properties
);
parcelHelpers.export(exports, "onDestroy", ()=>onDestroy
);
parcelHelpers.export(exports, "onMount", ()=>onMount
);
parcelHelpers.export(exports, "once", ()=>once
);
parcelHelpers.export(exports, "outro_and_destroy_block", ()=>outro_and_destroy_block
);
parcelHelpers.export(exports, "prevent_default", ()=>prevent_default
);
parcelHelpers.export(exports, "prop_dev", ()=>prop_dev
);
parcelHelpers.export(exports, "query_selector_all", ()=>query_selector_all
);
parcelHelpers.export(exports, "raf", ()=>raf
);
parcelHelpers.export(exports, "run", ()=>run
);
parcelHelpers.export(exports, "run_all", ()=>run_all
);
parcelHelpers.export(exports, "safe_not_equal", ()=>safe_not_equal
);
parcelHelpers.export(exports, "schedule_update", ()=>schedule_update
);
parcelHelpers.export(exports, "select_multiple_value", ()=>select_multiple_value
);
parcelHelpers.export(exports, "select_option", ()=>select_option
);
parcelHelpers.export(exports, "select_options", ()=>select_options
);
parcelHelpers.export(exports, "select_value", ()=>select_value
);
parcelHelpers.export(exports, "self", ()=>self
);
parcelHelpers.export(exports, "setContext", ()=>setContext
);
parcelHelpers.export(exports, "set_attributes", ()=>set_attributes
);
parcelHelpers.export(exports, "set_current_component", ()=>set_current_component
);
parcelHelpers.export(exports, "set_custom_element_data", ()=>set_custom_element_data
);
parcelHelpers.export(exports, "set_data", ()=>set_data
);
parcelHelpers.export(exports, "set_data_dev", ()=>set_data_dev
);
parcelHelpers.export(exports, "set_input_type", ()=>set_input_type
);
parcelHelpers.export(exports, "set_input_value", ()=>set_input_value
);
parcelHelpers.export(exports, "set_now", ()=>set_now
);
parcelHelpers.export(exports, "set_raf", ()=>set_raf
);
parcelHelpers.export(exports, "set_store_value", ()=>set_store_value
);
parcelHelpers.export(exports, "set_style", ()=>set_style
);
parcelHelpers.export(exports, "set_svg_attributes", ()=>set_svg_attributes
);
parcelHelpers.export(exports, "space", ()=>space
);
parcelHelpers.export(exports, "spread", ()=>spread
);
parcelHelpers.export(exports, "src_url_equal", ()=>src_url_equal
);
parcelHelpers.export(exports, "start_hydrating", ()=>start_hydrating
);
parcelHelpers.export(exports, "stop_propagation", ()=>stop_propagation
);
parcelHelpers.export(exports, "subscribe", ()=>subscribe
);
parcelHelpers.export(exports, "svg_element", ()=>svg_element
);
parcelHelpers.export(exports, "text", ()=>text
);
parcelHelpers.export(exports, "tick", ()=>tick
);
parcelHelpers.export(exports, "time_ranges_to_array", ()=>time_ranges_to_array
);
parcelHelpers.export(exports, "to_number", ()=>to_number
);
parcelHelpers.export(exports, "toggle_class", ()=>toggle_class
);
parcelHelpers.export(exports, "transition_in", ()=>transition_in
);
parcelHelpers.export(exports, "transition_out", ()=>transition_out
);
parcelHelpers.export(exports, "trusted", ()=>trusted
);
parcelHelpers.export(exports, "update_await_block_branch", ()=>update_await_block_branch
);
parcelHelpers.export(exports, "update_keyed_each", ()=>update_keyed_each
);
parcelHelpers.export(exports, "update_slot", ()=>update_slot
);
parcelHelpers.export(exports, "update_slot_base", ()=>update_slot_base
);
parcelHelpers.export(exports, "validate_component", ()=>validate_component
);
parcelHelpers.export(exports, "validate_dynamic_element", ()=>validate_dynamic_element
);
parcelHelpers.export(exports, "validate_each_argument", ()=>validate_each_argument
);
parcelHelpers.export(exports, "validate_each_keys", ()=>validate_each_keys
);
parcelHelpers.export(exports, "validate_slots", ()=>validate_slots
);
parcelHelpers.export(exports, "validate_store", ()=>validate_store
);
parcelHelpers.export(exports, "validate_void_dynamic_element", ()=>validate_void_dynamic_element
);
parcelHelpers.export(exports, "xlink_attr", ()=>xlink_attr
);
var global = arguments[3];
function noop() {}
const identity = (x)=>x
;
function assign(tar, src) {
    // @ts-ignore
    for(const k in src)tar[k] = src[k];
    return tar;
}
function is_promise(value) {
    return value && typeof value === 'object' && typeof value.then === 'function';
}
function add_location(element1, file, line, column, char) {
    element1.__svelte_meta = {
        loc: {
            file,
            line,
            column,
            char
        }
    };
}
function run(fn) {
    return fn();
}
function blank_object() {
    return Object.create(null);
}
function run_all(fns) {
    fns.forEach(run);
}
function is_function(thing) {
    return typeof thing === 'function';
}
function safe_not_equal(a, b) {
    return a != a ? b == b : a !== b || a && typeof a === 'object' || typeof a === 'function';
}
let src_url_equal_anchor;
function src_url_equal(element_src, url) {
    if (!src_url_equal_anchor) src_url_equal_anchor = document.createElement('a');
    src_url_equal_anchor.href = url;
    return element_src === src_url_equal_anchor.href;
}
function not_equal(a, b) {
    return a != a ? b == b : a !== b;
}
function is_empty(obj) {
    return Object.keys(obj).length === 0;
}
function validate_store(store, name) {
    if (store != null && typeof store.subscribe !== 'function') throw new Error(`'${name}' is not a store with a 'subscribe' method`);
}
function subscribe(store, ...callbacks) {
    if (store == null) return noop;
    const unsub = store.subscribe(...callbacks);
    return unsub.unsubscribe ? ()=>unsub.unsubscribe()
     : unsub;
}
function get_store_value(store) {
    let value;
    subscribe(store, (_)=>value = _
    )();
    return value;
}
function component_subscribe(component, store, callback) {
    component.$$.on_destroy.push(subscribe(store, callback));
}
function create_slot(definition, ctx, $$scope, fn) {
    if (definition) {
        const slot_ctx = get_slot_context(definition, ctx, $$scope, fn);
        return definition[0](slot_ctx);
    }
}
function get_slot_context(definition, ctx, $$scope, fn) {
    return definition[1] && fn ? assign($$scope.ctx.slice(), definition[1](fn(ctx))) : $$scope.ctx;
}
function get_slot_changes(definition, $$scope, dirty, fn) {
    if (definition[2] && fn) {
        const lets = definition[2](fn(dirty));
        if ($$scope.dirty === undefined) return lets;
        if (typeof lets === 'object') {
            const merged = [];
            const len = Math.max($$scope.dirty.length, lets.length);
            for(let i = 0; i < len; i += 1)merged[i] = $$scope.dirty[i] | lets[i];
            return merged;
        }
        return $$scope.dirty | lets;
    }
    return $$scope.dirty;
}
function update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn) {
    if (slot_changes) {
        const slot_context = get_slot_context(slot_definition, ctx, $$scope, get_slot_context_fn);
        slot.p(slot_context, slot_changes);
    }
}
function update_slot(slot, slot_definition, ctx, $$scope, dirty, get_slot_changes_fn, get_slot_context_fn) {
    const slot_changes = get_slot_changes(slot_definition, $$scope, dirty, get_slot_changes_fn);
    update_slot_base(slot, slot_definition, ctx, $$scope, slot_changes, get_slot_context_fn);
}
function get_all_dirty_from_scope($$scope) {
    if ($$scope.ctx.length > 32) {
        const dirty = [];
        const length = $$scope.ctx.length / 32;
        for(let i = 0; i < length; i++)dirty[i] = -1;
        return dirty;
    }
    return -1;
}
function exclude_internal_props(props) {
    const result = {};
    for(const k in props)if (k[0] !== '$') result[k] = props[k];
    return result;
}
function compute_rest_props(props, keys) {
    const rest = {};
    keys = new Set(keys);
    for(const k in props)if (!keys.has(k) && k[0] !== '$') rest[k] = props[k];
    return rest;
}
function compute_slots(slots) {
    const result = {};
    for(const key in slots)result[key] = true;
    return result;
}
function once(fn) {
    let ran = false;
    return function(...args) {
        if (ran) return;
        ran = true;
        fn.call(this, ...args);
    };
}
function null_to_empty(value) {
    return value == null ? '' : value;
}
function set_store_value(store, ret, value) {
    store.set(value);
    return ret;
}
const has_prop = (obj, prop)=>Object.prototype.hasOwnProperty.call(obj, prop)
;
function action_destroyer(action_result) {
    return action_result && is_function(action_result.destroy) ? action_result.destroy : noop;
}
const is_client = typeof window !== 'undefined';
let now = is_client ? ()=>window.performance.now()
 : ()=>Date.now()
;
let raf = is_client ? (cb)=>requestAnimationFrame(cb)
 : noop;
// used internally for testing
function set_now(fn) {
    now = fn;
}
function set_raf(fn) {
    raf = fn;
}
const tasks = new Set();
function run_tasks(now1) {
    tasks.forEach((task)=>{
        if (!task.c(now1)) {
            tasks.delete(task);
            task.f();
        }
    });
    if (tasks.size !== 0) raf(run_tasks);
}
/**
 * For testing purposes only!
 */ function clear_loops() {
    tasks.clear();
}
/**
 * Creates a new task that runs on each raf frame
 * until it returns a falsy value or is aborted
 */ function loop(callback) {
    let task;
    if (tasks.size === 0) raf(run_tasks);
    return {
        promise: new Promise((fulfill)=>{
            tasks.add(task = {
                c: callback,
                f: fulfill
            });
        }),
        abort () {
            tasks.delete(task);
        }
    };
}
// Track which nodes are claimed during hydration. Unclaimed nodes can then be removed from the DOM
// at the end of hydration without touching the remaining nodes.
let is_hydrating = false;
function start_hydrating() {
    is_hydrating = true;
}
function end_hydrating() {
    is_hydrating = false;
}
function upper_bound(low, high, key, value) {
    // Return first index of value larger than input value in the range [low, high)
    while(low < high){
        const mid = low + (high - low >> 1);
        if (key(mid) <= value) low = mid + 1;
        else high = mid;
    }
    return low;
}
function init_hydrate(target) {
    if (target.hydrate_init) return;
    target.hydrate_init = true;
    // We know that all children have claim_order values since the unclaimed have been detached if target is not <head>
    let children1 = target.childNodes;
    // If target is <head>, there may be children without claim_order
    if (target.nodeName === 'HEAD') {
        const myChildren = [];
        for(let i = 0; i < children1.length; i++){
            const node = children1[i];
            if (node.claim_order !== undefined) myChildren.push(node);
        }
        children1 = myChildren;
    }
    /*
    * Reorder claimed children optimally.
    * We can reorder claimed children optimally by finding the longest subsequence of
    * nodes that are already claimed in order and only moving the rest. The longest
    * subsequence subsequence of nodes that are claimed in order can be found by
    * computing the longest increasing subsequence of .claim_order values.
    *
    * This algorithm is optimal in generating the least amount of reorder operations
    * possible.
    *
    * Proof:
    * We know that, given a set of reordering operations, the nodes that do not move
    * always form an increasing subsequence, since they do not move among each other
    * meaning that they must be already ordered among each other. Thus, the maximal
    * set of nodes that do not move form a longest increasing subsequence.
    */ // Compute longest increasing subsequence
    // m: subsequence length j => index k of smallest value that ends an increasing subsequence of length j
    const m = new Int32Array(children1.length + 1);
    // Predecessor indices + 1
    const p = new Int32Array(children1.length);
    m[0] = -1;
    let longest = 0;
    for(let i = 0; i < children1.length; i++){
        const current = children1[i].claim_order;
        // Find the largest subsequence length such that it ends in a value less than our current value
        // upper_bound returns first greater value, so we subtract one
        // with fast path for when we are on the current longest subsequence
        const seqLen = (longest > 0 && children1[m[longest]].claim_order <= current ? longest + 1 : upper_bound(1, longest, (idx)=>children1[m[idx]].claim_order
        , current)) - 1;
        p[i] = m[seqLen] + 1;
        const newLen = seqLen + 1;
        // We can guarantee that current is the smallest value. Otherwise, we would have generated a longer sequence.
        m[newLen] = i;
        longest = Math.max(newLen, longest);
    }
    // The longest increasing subsequence of nodes (initially reversed)
    const lis = [];
    // The rest of the nodes, nodes that will be moved
    const toMove = [];
    let last = children1.length - 1;
    for(let cur = m[longest] + 1; cur != 0; cur = p[cur - 1]){
        lis.push(children1[cur - 1]);
        for(; last >= cur; last--)toMove.push(children1[last]);
        last--;
    }
    for(; last >= 0; last--)toMove.push(children1[last]);
    lis.reverse();
    // We sort the nodes being moved to guarantee that their insertion order matches the claim order
    toMove.sort((a, b)=>a.claim_order - b.claim_order
    );
    // Finally, we move the nodes
    for(let i1 = 0, j = 0; i1 < toMove.length; i1++){
        while(j < lis.length && toMove[i1].claim_order >= lis[j].claim_order)j++;
        const anchor = j < lis.length ? lis[j] : null;
        target.insertBefore(toMove[i1], anchor);
    }
}
function append(target, node) {
    target.appendChild(node);
}
function append_styles(target, style_sheet_id, styles) {
    const append_styles_to = get_root_for_style(target);
    if (!append_styles_to.getElementById(style_sheet_id)) {
        const style = element('style');
        style.id = style_sheet_id;
        style.textContent = styles;
        append_stylesheet(append_styles_to, style);
    }
}
function get_root_for_style(node) {
    if (!node) return document;
    const root = node.getRootNode ? node.getRootNode() : node.ownerDocument;
    if (root && root.host) return root;
    return node.ownerDocument;
}
function append_empty_stylesheet(node) {
    const style_element = element('style');
    append_stylesheet(get_root_for_style(node), style_element);
    return style_element.sheet;
}
function append_stylesheet(node, style) {
    append(node.head || node, style);
}
function append_hydration(target, node) {
    if (is_hydrating) {
        init_hydrate(target);
        if (target.actual_end_child === undefined || target.actual_end_child !== null && target.actual_end_child.parentElement !== target) target.actual_end_child = target.firstChild;
        // Skip nodes of undefined ordering
        while(target.actual_end_child !== null && target.actual_end_child.claim_order === undefined)target.actual_end_child = target.actual_end_child.nextSibling;
        if (node !== target.actual_end_child) // We only insert if the ordering of this node should be modified or the parent node is not target
        {
            if (node.claim_order !== undefined || node.parentNode !== target) target.insertBefore(node, target.actual_end_child);
        } else target.actual_end_child = node.nextSibling;
    } else if (node.parentNode !== target || node.nextSibling !== null) target.appendChild(node);
}
function insert(target, node, anchor) {
    target.insertBefore(node, anchor || null);
}
function insert_hydration(target, node, anchor) {
    if (is_hydrating && !anchor) append_hydration(target, node);
    else if (node.parentNode !== target || node.nextSibling != anchor) target.insertBefore(node, anchor || null);
}
function detach(node) {
    node.parentNode.removeChild(node);
}
function destroy_each(iterations, detaching) {
    for(let i = 0; i < iterations.length; i += 1)if (iterations[i]) iterations[i].d(detaching);
}
function element(name) {
    return document.createElement(name);
}
function element_is(name, is) {
    return document.createElement(name, {
        is
    });
}
function object_without_properties(obj, exclude) {
    const target = {};
    for(const k in obj)if (has_prop(obj, k) && exclude.indexOf(k) === -1) // @ts-ignore
    target[k] = obj[k];
    return target;
}
function svg_element(name) {
    return document.createElementNS('http://www.w3.org/2000/svg', name);
}
function text(data) {
    return document.createTextNode(data);
}
function space() {
    return text(' ');
}
function empty() {
    return text('');
}
function listen(node, event, handler, options) {
    node.addEventListener(event, handler, options);
    return ()=>node.removeEventListener(event, handler, options)
    ;
}
function prevent_default(fn) {
    return function(event) {
        event.preventDefault();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function stop_propagation(fn) {
    return function(event) {
        event.stopPropagation();
        // @ts-ignore
        return fn.call(this, event);
    };
}
function self(fn) {
    return function(event) {
        // @ts-ignore
        if (event.target === this) fn.call(this, event);
    };
}
function trusted(fn) {
    return function(event) {
        // @ts-ignore
        if (event.isTrusted) fn.call(this, event);
    };
}
function attr(node, attribute, value) {
    if (value == null) node.removeAttribute(attribute);
    else if (node.getAttribute(attribute) !== value) node.setAttribute(attribute, value);
}
function set_attributes(node, attributes) {
    // @ts-ignore
    const descriptors = Object.getOwnPropertyDescriptors(node.__proto__);
    for(const key in attributes){
        if (attributes[key] == null) node.removeAttribute(key);
        else if (key === 'style') node.style.cssText = attributes[key];
        else if (key === '__value') node.value = node[key] = attributes[key];
        else if (descriptors[key] && descriptors[key].set) node[key] = attributes[key];
        else attr(node, key, attributes[key]);
    }
}
function set_svg_attributes(node, attributes) {
    for(const key in attributes)attr(node, key, attributes[key]);
}
function set_custom_element_data(node, prop, value) {
    if (prop in node) node[prop] = typeof node[prop] === 'boolean' && value === '' ? true : value;
    else attr(node, prop, value);
}
function xlink_attr(node, attribute, value) {
    node.setAttributeNS('http://www.w3.org/1999/xlink', attribute, value);
}
function get_binding_group_value(group, __value, checked) {
    const value = new Set();
    for(let i = 0; i < group.length; i += 1)if (group[i].checked) value.add(group[i].__value);
    if (!checked) value.delete(__value);
    return Array.from(value);
}
function to_number(value) {
    return value === '' ? null : +value;
}
function time_ranges_to_array(ranges) {
    const array = [];
    for(let i = 0; i < ranges.length; i += 1)array.push({
        start: ranges.start(i),
        end: ranges.end(i)
    });
    return array;
}
function children(element2) {
    return Array.from(element2.childNodes);
}
function init_claim_info(nodes) {
    if (nodes.claim_info === undefined) nodes.claim_info = {
        last_index: 0,
        total_claimed: 0
    };
}
function claim_node(nodes, predicate, processNode, createNode, dontUpdateLastIndex = false) {
    // Try to find nodes in an order such that we lengthen the longest increasing subsequence
    init_claim_info(nodes);
    const resultNode = (()=>{
        // We first try to find an element after the previous one
        for(let i = nodes.claim_info.last_index; i < nodes.length; i++){
            const node = nodes[i];
            if (predicate(node)) {
                const replacement = processNode(node);
                if (replacement === undefined) nodes.splice(i, 1);
                else nodes[i] = replacement;
                if (!dontUpdateLastIndex) nodes.claim_info.last_index = i;
                return node;
            }
        }
        // Otherwise, we try to find one before
        // We iterate in reverse so that we don't go too far back
        for(let i2 = nodes.claim_info.last_index - 1; i2 >= 0; i2--){
            const node = nodes[i2];
            if (predicate(node)) {
                const replacement = processNode(node);
                if (replacement === undefined) nodes.splice(i2, 1);
                else nodes[i2] = replacement;
                if (!dontUpdateLastIndex) nodes.claim_info.last_index = i2;
                else if (replacement === undefined) // Since we spliced before the last_index, we decrease it
                nodes.claim_info.last_index--;
                return node;
            }
        }
        // If we can't find any matching node, we create a new one
        return createNode();
    })();
    resultNode.claim_order = nodes.claim_info.total_claimed;
    nodes.claim_info.total_claimed += 1;
    return resultNode;
}
function claim_element_base(nodes, name, attributes, create_element) {
    return claim_node(nodes, (node)=>node.nodeName === name
    , (node)=>{
        const remove = [];
        for(let j = 0; j < node.attributes.length; j++){
            const attribute = node.attributes[j];
            if (!attributes[attribute.name]) remove.push(attribute.name);
        }
        remove.forEach((v)=>node.removeAttribute(v)
        );
        return undefined;
    }, ()=>create_element(name)
    );
}
function claim_element(nodes, name, attributes) {
    return claim_element_base(nodes, name, attributes, element);
}
function claim_svg_element(nodes, name, attributes) {
    return claim_element_base(nodes, name, attributes, svg_element);
}
function claim_text(nodes, data) {
    return claim_node(nodes, (node)=>node.nodeType === 3
    , (node)=>{
        const dataStr = '' + data;
        if (node.data.startsWith(dataStr)) {
            if (node.data.length !== dataStr.length) return node.splitText(dataStr.length);
        } else node.data = dataStr;
    }, ()=>text(data)
    , true // Text nodes should not update last index since it is likely not worth it to eliminate an increasing subsequence of actual elements
    );
}
function claim_space(nodes) {
    return claim_text(nodes, ' ');
}
function find_comment(nodes, text1, start) {
    for(let i = start; i < nodes.length; i += 1){
        const node = nodes[i];
        if (node.nodeType === 8 /* comment node */  && node.textContent.trim() === text1) return i;
    }
    return nodes.length;
}
function claim_html_tag(nodes, is_svg) {
    // find html opening tag
    const start_index = find_comment(nodes, 'HTML_TAG_START', 0);
    const end_index = find_comment(nodes, 'HTML_TAG_END', start_index);
    if (start_index === end_index) return new HtmlTagHydration(undefined, is_svg);
    init_claim_info(nodes);
    const html_tag_nodes = nodes.splice(start_index, end_index - start_index + 1);
    detach(html_tag_nodes[0]);
    detach(html_tag_nodes[html_tag_nodes.length - 1]);
    const claimed_nodes = html_tag_nodes.slice(1, html_tag_nodes.length - 1);
    for (const n of claimed_nodes){
        n.claim_order = nodes.claim_info.total_claimed;
        nodes.claim_info.total_claimed += 1;
    }
    return new HtmlTagHydration(claimed_nodes, is_svg);
}
function set_data(text2, data) {
    data = '' + data;
    if (text2.wholeText !== data) text2.data = data;
}
function set_input_value(input, value) {
    input.value = value == null ? '' : value;
}
function set_input_type(input, type) {
    try {
        input.type = type;
    } catch (e) {
    // do nothing
    }
}
function set_style(node, key, value, important) {
    if (value === null) node.style.removeProperty(key);
    else node.style.setProperty(key, value, important ? 'important' : '');
}
function select_option(select, value) {
    for(let i = 0; i < select.options.length; i += 1){
        const option = select.options[i];
        if (option.__value === value) {
            option.selected = true;
            return;
        }
    }
    select.selectedIndex = -1; // no option should be selected
}
function select_options(select, value) {
    for(let i = 0; i < select.options.length; i += 1){
        const option = select.options[i];
        option.selected = ~value.indexOf(option.__value);
    }
}
function select_value(select) {
    const selected_option = select.querySelector(':checked') || select.options[0];
    return selected_option && selected_option.__value;
}
function select_multiple_value(select) {
    return [].map.call(select.querySelectorAll(':checked'), (option)=>option.__value
    );
}
// unfortunately this can't be a constant as that wouldn't be tree-shakeable
// so we cache the result instead
let crossorigin;
function is_crossorigin() {
    if (crossorigin === undefined) {
        crossorigin = false;
        try {
            if (typeof window !== 'undefined' && window.parent) window.parent.document;
        } catch (error) {
            crossorigin = true;
        }
    }
    return crossorigin;
}
function add_resize_listener(node, fn) {
    const computed_style = getComputedStyle(node);
    if (computed_style.position === 'static') node.style.position = 'relative';
    const iframe = element('iframe');
    iframe.setAttribute('style', "display: block; position: absolute; top: 0; left: 0; width: 100%; height: 100%; overflow: hidden; border: 0; opacity: 0; pointer-events: none; z-index: -1;");
    iframe.setAttribute('aria-hidden', 'true');
    iframe.tabIndex = -1;
    const crossorigin1 = is_crossorigin();
    let unsubscribe;
    if (crossorigin1) {
        iframe.src = "data:text/html,<script>onresize=function(){parent.postMessage(0,'*')}</script>";
        unsubscribe = listen(window, 'message', (event)=>{
            if (event.source === iframe.contentWindow) fn();
        });
    } else {
        iframe.src = 'about:blank';
        iframe.onload = ()=>{
            unsubscribe = listen(iframe.contentWindow, 'resize', fn);
        };
    }
    append(node, iframe);
    return ()=>{
        if (crossorigin1) unsubscribe();
        else if (unsubscribe && iframe.contentWindow) unsubscribe();
        detach(iframe);
    };
}
function toggle_class(element3, name, toggle) {
    element3.classList[toggle ? 'add' : 'remove'](name);
}
function custom_event(type, detail, { bubbles =false , cancelable =false  } = {}) {
    const e = document.createEvent('CustomEvent');
    e.initCustomEvent(type, bubbles, cancelable, detail);
    return e;
}
function query_selector_all(selector, parent = document.body) {
    return Array.from(parent.querySelectorAll(selector));
}
class HtmlTag {
    constructor(is_svg = false){
        this.is_svg = false;
        this.is_svg = is_svg;
        this.e = this.n = null;
    }
    c(html) {
        this.h(html);
    }
    m(html, target, anchor = null) {
        if (!this.e) {
            if (this.is_svg) this.e = svg_element(target.nodeName);
            else this.e = element(target.nodeName);
            this.t = target;
            this.c(html);
        }
        this.i(anchor);
    }
    h(html) {
        this.e.innerHTML = html;
        this.n = Array.from(this.e.childNodes);
    }
    i(anchor) {
        for(let i = 0; i < this.n.length; i += 1)insert(this.t, this.n[i], anchor);
    }
    p(html) {
        this.d();
        this.h(html);
        this.i(this.a);
    }
    d() {
        this.n.forEach(detach);
    }
}
class HtmlTagHydration extends HtmlTag {
    constructor(claimed_nodes, is_svg = false){
        super(is_svg);
        this.e = this.n = null;
        this.l = claimed_nodes;
    }
    c(html) {
        if (this.l) this.n = this.l;
        else super.c(html);
    }
    i(anchor) {
        for(let i = 0; i < this.n.length; i += 1)insert_hydration(this.t, this.n[i], anchor);
    }
}
function attribute_to_object(attributes) {
    const result = {};
    for (const attribute of attributes)result[attribute.name] = attribute.value;
    return result;
}
function get_custom_elements_slots(element4) {
    const result = {};
    element4.childNodes.forEach((node)=>{
        result[node.slot || 'default'] = true;
    });
    return result;
}
// we need to store the information for multiple documents because a Svelte application could also contain iframes
// https://github.com/sveltejs/svelte/issues/3624
const managed_styles = new Map();
let active = 0;
// https://github.com/darkskyapp/string-hash/blob/master/index.js
function hash(str) {
    let hash1 = 5381;
    let i = str.length;
    while(i--)hash1 = (hash1 << 5) - hash1 ^ str.charCodeAt(i);
    return hash1 >>> 0;
}
function create_style_information(doc, node) {
    const info = {
        stylesheet: append_empty_stylesheet(node),
        rules: {}
    };
    managed_styles.set(doc, info);
    return info;
}
function create_rule(node, a, b, duration, delay, ease, fn, uid = 0) {
    const step = 16.666 / duration;
    let keyframes = '{\n';
    for(let p = 0; p <= 1; p += step){
        const t = a + (b - a) * ease(p);
        keyframes += p * 100 + `%{${fn(t, 1 - t)}}\n`;
    }
    const rule = keyframes + `100% {${fn(b, 1 - b)}}\n}`;
    const name = `__svelte_${hash(rule)}_${uid}`;
    const doc = get_root_for_style(node);
    const { stylesheet , rules  } = managed_styles.get(doc) || create_style_information(doc, node);
    if (!rules[name]) {
        rules[name] = true;
        stylesheet.insertRule(`@keyframes ${name} ${rule}`, stylesheet.cssRules.length);
    }
    const animation = node.style.animation || '';
    node.style.animation = `${animation ? `${animation}, ` : ''}${name} ${duration}ms linear ${delay}ms 1 both`;
    active += 1;
    return name;
}
function delete_rule(node, name) {
    const previous = (node.style.animation || '').split(', ');
    const next = previous.filter(name ? (anim)=>anim.indexOf(name) < 0 // remove specific animation
     : (anim)=>anim.indexOf('__svelte') === -1 // remove all Svelte animations
    );
    const deleted = previous.length - next.length;
    if (deleted) {
        node.style.animation = next.join(', ');
        active -= deleted;
        if (!active) clear_rules();
    }
}
function clear_rules() {
    raf(()=>{
        if (active) return;
        managed_styles.forEach((info)=>{
            const { stylesheet  } = info;
            let i = stylesheet.cssRules.length;
            while(i--)stylesheet.deleteRule(i);
            info.rules = {};
        });
        managed_styles.clear();
    });
}
function create_animation(node, from, fn, params) {
    if (!from) return noop;
    const to = node.getBoundingClientRect();
    if (from.left === to.left && from.right === to.right && from.top === to.top && from.bottom === to.bottom) return noop;
    const { delay =0 , duration =300 , easing =identity , // @ts-ignore todo: should this be separated from destructuring? Or start/end added to public api and documentation?
    start: start_time = now() + delay , // @ts-ignore todo:
    end =start_time + duration , tick: tick1 = noop , css  } = fn(node, {
        from,
        to
    }, params);
    let running = true;
    let started = false;
    let name;
    function start() {
        if (css) name = create_rule(node, 0, 1, duration, delay, easing, css);
        if (!delay) started = true;
    }
    function stop() {
        if (css) delete_rule(node, name);
        running = false;
    }
    loop((now2)=>{
        if (!started && now2 >= start_time) started = true;
        if (started && now2 >= end) {
            tick1(1, 0);
            stop();
        }
        if (!running) return false;
        if (started) {
            const p = now2 - start_time;
            const t = 0 + 1 * easing(p / duration);
            tick1(t, 1 - t);
        }
        return true;
    });
    start();
    tick1(0, 1);
    return stop;
}
function fix_position(node) {
    const style = getComputedStyle(node);
    if (style.position !== 'absolute' && style.position !== 'fixed') {
        const { width , height  } = style;
        const a = node.getBoundingClientRect();
        node.style.position = 'absolute';
        node.style.width = width;
        node.style.height = height;
        add_transform(node, a);
    }
}
function add_transform(node, a) {
    const b = node.getBoundingClientRect();
    if (a.left !== b.left || a.top !== b.top) {
        const style = getComputedStyle(node);
        const transform = style.transform === 'none' ? '' : style.transform;
        node.style.transform = `${transform} translate(${a.left - b.left}px, ${a.top - b.top}px)`;
    }
}
let current_component;
function set_current_component(component) {
    current_component = component;
}
function get_current_component() {
    if (!current_component) throw new Error('Function called outside component initialization');
    return current_component;
}
function beforeUpdate(fn) {
    get_current_component().$$.before_update.push(fn);
}
function onMount(fn) {
    get_current_component().$$.on_mount.push(fn);
}
function afterUpdate(fn) {
    get_current_component().$$.after_update.push(fn);
}
function onDestroy(fn) {
    get_current_component().$$.on_destroy.push(fn);
}
function createEventDispatcher() {
    const component = get_current_component();
    return (type, detail, { cancelable =false  } = {})=>{
        const callbacks = component.$$.callbacks[type];
        if (callbacks) {
            // TODO are there situations where events could be dispatched
            // in a server (non-DOM) environment?
            const event = custom_event(type, detail, {
                cancelable
            });
            callbacks.slice().forEach((fn)=>{
                fn.call(component, event);
            });
            return !event.defaultPrevented;
        }
        return true;
    };
}
function setContext(key, context) {
    get_current_component().$$.context.set(key, context);
    return context;
}
function getContext(key) {
    return get_current_component().$$.context.get(key);
}
function getAllContexts() {
    return get_current_component().$$.context;
}
function hasContext(key) {
    return get_current_component().$$.context.has(key);
}
// TODO figure out if we still want to support
// shorthand events, or if we want to implement
// a real bubbling mechanism
function bubble(component, event) {
    const callbacks = component.$$.callbacks[event.type];
    if (callbacks) // @ts-ignore
    callbacks.slice().forEach((fn)=>fn.call(this, event)
    );
}
const dirty_components = [];
const intros = {
    enabled: false
};
const binding_callbacks = [];
const render_callbacks = [];
const flush_callbacks = [];
const resolved_promise = Promise.resolve();
let update_scheduled = false;
function schedule_update() {
    if (!update_scheduled) {
        update_scheduled = true;
        resolved_promise.then(flush);
    }
}
function tick() {
    schedule_update();
    return resolved_promise;
}
function add_render_callback(fn) {
    render_callbacks.push(fn);
}
function add_flush_callback(fn) {
    flush_callbacks.push(fn);
}
// flush() calls callbacks in this order:
// 1. All beforeUpdate callbacks, in order: parents before children
// 2. All bind:this callbacks, in reverse order: children before parents.
// 3. All afterUpdate callbacks, in order: parents before children. EXCEPT
//    for afterUpdates called during the initial onMount, which are called in
//    reverse order: children before parents.
// Since callbacks might update component values, which could trigger another
// call to flush(), the following steps guard against this:
// 1. During beforeUpdate, any updated components will be added to the
//    dirty_components array and will cause a reentrant call to flush(). Because
//    the flush index is kept outside the function, the reentrant call will pick
//    up where the earlier call left off and go through all dirty components. The
//    current_component value is saved and restored so that the reentrant call will
//    not interfere with the "parent" flush() call.
// 2. bind:this callbacks cannot trigger new flush() calls.
// 3. During afterUpdate, any updated components will NOT have their afterUpdate
//    callback called a second time; the seen_callbacks set, outside the flush()
//    function, guarantees this behavior.
const seen_callbacks = new Set();
let flushidx = 0; // Do *not* move this inside the flush() function
function flush() {
    const saved_component = current_component;
    do {
        // first, call beforeUpdate functions
        // and update components
        while(flushidx < dirty_components.length){
            const component = dirty_components[flushidx];
            flushidx++;
            set_current_component(component);
            update(component.$$);
        }
        set_current_component(null);
        dirty_components.length = 0;
        flushidx = 0;
        while(binding_callbacks.length)binding_callbacks.pop()();
        // then, once components are updated, call
        // afterUpdate functions. This may cause
        // subsequent updates...
        for(let i = 0; i < render_callbacks.length; i += 1){
            const callback = render_callbacks[i];
            if (!seen_callbacks.has(callback)) {
                // ...so guard against infinite loops
                seen_callbacks.add(callback);
                callback();
            }
        }
        render_callbacks.length = 0;
    }while (dirty_components.length)
    while(flush_callbacks.length)flush_callbacks.pop()();
    update_scheduled = false;
    seen_callbacks.clear();
    set_current_component(saved_component);
}
function update($$) {
    if ($$.fragment !== null) {
        $$.update();
        run_all($$.before_update);
        const dirty = $$.dirty;
        $$.dirty = [
            -1
        ];
        $$.fragment && $$.fragment.p($$.ctx, dirty);
        $$.after_update.forEach(add_render_callback);
    }
}
let promise;
function wait() {
    if (!promise) {
        promise = Promise.resolve();
        promise.then(()=>{
            promise = null;
        });
    }
    return promise;
}
function dispatch(node, direction, kind) {
    node.dispatchEvent(custom_event(`${direction ? 'intro' : 'outro'}${kind}`));
}
const outroing = new Set();
let outros;
function group_outros() {
    outros = {
        r: 0,
        c: [],
        p: outros // parent group
    };
}
function check_outros() {
    if (!outros.r) run_all(outros.c);
    outros = outros.p;
}
function transition_in(block, local) {
    if (block && block.i) {
        outroing.delete(block);
        block.i(local);
    }
}
function transition_out(block, local, detach1, callback) {
    if (block && block.o) {
        if (outroing.has(block)) return;
        outroing.add(block);
        outros.c.push(()=>{
            outroing.delete(block);
            if (callback) {
                if (detach1) block.d(1);
                callback();
            }
        });
        block.o(local);
    }
}
const null_transition = {
    duration: 0
};
function create_in_transition(node, fn, params) {
    let config = fn(node, params);
    let running = false;
    let animation_name;
    let task;
    let uid = 0;
    function cleanup() {
        if (animation_name) delete_rule(node, animation_name);
    }
    function go() {
        const { delay =0 , duration =300 , easing =identity , tick: tick2 = noop , css  } = config || null_transition;
        if (css) animation_name = create_rule(node, 0, 1, duration, delay, easing, css, uid++);
        tick2(0, 1);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        if (task) task.abort();
        running = true;
        add_render_callback(()=>dispatch(node, true, 'start')
        );
        task = loop((now3)=>{
            if (running) {
                if (now3 >= end_time) {
                    tick2(1, 0);
                    dispatch(node, true, 'end');
                    cleanup();
                    return running = false;
                }
                if (now3 >= start_time) {
                    const t = easing((now3 - start_time) / duration);
                    tick2(t, 1 - t);
                }
            }
            return running;
        });
    }
    let started = false;
    return {
        start () {
            if (started) return;
            started = true;
            delete_rule(node);
            if (is_function(config)) {
                config = config();
                wait().then(go);
            } else go();
        },
        invalidate () {
            started = false;
        },
        end () {
            if (running) {
                cleanup();
                running = false;
            }
        }
    };
}
function create_out_transition(node, fn, params) {
    let config = fn(node, params);
    let running = true;
    let animation_name;
    const group = outros;
    group.r += 1;
    function go() {
        const { delay =0 , duration =300 , easing =identity , tick: tick3 = noop , css  } = config || null_transition;
        if (css) animation_name = create_rule(node, 1, 0, duration, delay, easing, css);
        const start_time = now() + delay;
        const end_time = start_time + duration;
        add_render_callback(()=>dispatch(node, false, 'start')
        );
        loop((now4)=>{
            if (running) {
                if (now4 >= end_time) {
                    tick3(0, 1);
                    dispatch(node, false, 'end');
                    if (!--group.r) // this will result in `end()` being called,
                    // so we don't need to clean up here
                    run_all(group.c);
                    return false;
                }
                if (now4 >= start_time) {
                    const t = easing((now4 - start_time) / duration);
                    tick3(1 - t, t);
                }
            }
            return running;
        });
    }
    if (is_function(config)) wait().then(()=>{
        // @ts-ignore
        config = config();
        go();
    });
    else go();
    return {
        end (reset) {
            if (reset && config.tick) config.tick(1, 0);
            if (running) {
                if (animation_name) delete_rule(node, animation_name);
                running = false;
            }
        }
    };
}
function create_bidirectional_transition(node, fn, params, intro) {
    let config = fn(node, params);
    let t = intro ? 0 : 1;
    let running_program = null;
    let pending_program = null;
    let animation_name = null;
    function clear_animation() {
        if (animation_name) delete_rule(node, animation_name);
    }
    function init1(program, duration) {
        const d = program.b - t;
        duration *= Math.abs(d);
        return {
            a: t,
            b: program.b,
            d,
            duration,
            start: program.start,
            end: program.start + duration,
            group: program.group
        };
    }
    function go(b) {
        const { delay =0 , duration =300 , easing =identity , tick: tick4 = noop , css  } = config || null_transition;
        const program = {
            start: now() + delay,
            b
        };
        if (!b) {
            // @ts-ignore todo: improve typings
            program.group = outros;
            outros.r += 1;
        }
        if (running_program || pending_program) pending_program = program;
        else {
            // if this is an intro, and there's a delay, we need to do
            // an initial tick and/or apply CSS animation immediately
            if (css) {
                clear_animation();
                animation_name = create_rule(node, t, b, duration, delay, easing, css);
            }
            if (b) tick4(0, 1);
            running_program = init1(program, duration);
            add_render_callback(()=>dispatch(node, b, 'start')
            );
            loop((now5)=>{
                if (pending_program && now5 > pending_program.start) {
                    running_program = init1(pending_program, duration);
                    pending_program = null;
                    dispatch(node, running_program.b, 'start');
                    if (css) {
                        clear_animation();
                        animation_name = create_rule(node, t, running_program.b, running_program.duration, 0, easing, config.css);
                    }
                }
                if (running_program) {
                    if (now5 >= running_program.end) {
                        tick4(t = running_program.b, 1 - t);
                        dispatch(node, running_program.b, 'end');
                        if (!pending_program) {
                            // we're done
                            if (running_program.b) // intro — we can tidy up immediately
                            clear_animation();
                            else // outro — needs to be coordinated
                            if (!--running_program.group.r) run_all(running_program.group.c);
                        }
                        running_program = null;
                    } else if (now5 >= running_program.start) {
                        const p = now5 - running_program.start;
                        t = running_program.a + running_program.d * easing(p / running_program.duration);
                        tick4(t, 1 - t);
                    }
                }
                return !!(running_program || pending_program);
            });
        }
    }
    return {
        run (b) {
            if (is_function(config)) wait().then(()=>{
                // @ts-ignore
                config = config();
                go(b);
            });
            else go(b);
        },
        end () {
            clear_animation();
            running_program = pending_program = null;
        }
    };
}
function handle_promise(promise1, info) {
    const token = info.token = {};
    function update1(type, index, key, value) {
        if (info.token !== token) return;
        info.resolved = value;
        let child_ctx = info.ctx;
        if (key !== undefined) {
            child_ctx = child_ctx.slice();
            child_ctx[key] = value;
        }
        const block1 = type && (info.current = type)(child_ctx);
        let needs_flush = false;
        if (info.block) {
            if (info.blocks) info.blocks.forEach((block, i)=>{
                if (i !== index && block) {
                    group_outros();
                    transition_out(block, 1, 1, ()=>{
                        if (info.blocks[i] === block) info.blocks[i] = null;
                    });
                    check_outros();
                }
            });
            else info.block.d(1);
            block1.c();
            transition_in(block1, 1);
            block1.m(info.mount(), info.anchor);
            needs_flush = true;
        }
        info.block = block1;
        if (info.blocks) info.blocks[index] = block1;
        if (needs_flush) flush();
    }
    if (is_promise(promise1)) {
        const current_component1 = get_current_component();
        promise1.then((value)=>{
            set_current_component(current_component1);
            update1(info.then, 1, info.value, value);
            set_current_component(null);
        }, (error)=>{
            set_current_component(current_component1);
            update1(info.catch, 2, info.error, error);
            set_current_component(null);
            if (!info.hasCatch) throw error;
        });
        // if we previously had a then/catch block, destroy it
        if (info.current !== info.pending) {
            update1(info.pending, 0);
            return true;
        }
    } else {
        if (info.current !== info.then) {
            update1(info.then, 1, info.value, promise1);
            return true;
        }
        info.resolved = promise1;
    }
}
function update_await_block_branch(info, ctx, dirty) {
    const child_ctx = ctx.slice();
    const { resolved  } = info;
    if (info.current === info.then) child_ctx[info.value] = resolved;
    if (info.current === info.catch) child_ctx[info.error] = resolved;
    info.block.p(child_ctx, dirty);
}
const globals = typeof window !== 'undefined' ? window : typeof globalThis !== 'undefined' ? globalThis : global;
function destroy_block(block, lookup) {
    block.d(1);
    lookup.delete(block.key);
}
function outro_and_destroy_block(block, lookup) {
    transition_out(block, 1, 1, ()=>{
        lookup.delete(block.key);
    });
}
function fix_and_destroy_block(block, lookup) {
    block.f();
    destroy_block(block, lookup);
}
function fix_and_outro_and_destroy_block(block, lookup) {
    block.f();
    outro_and_destroy_block(block, lookup);
}
function update_keyed_each(old_blocks, dirty, get_key, dynamic, ctx, list, lookup, node, destroy, create_each_block, next, get_context) {
    let o = old_blocks.length;
    let n = list.length;
    let i = o;
    const old_indexes = {};
    while(i--)old_indexes[old_blocks[i].key] = i;
    const new_blocks = [];
    const new_lookup = new Map();
    const deltas = new Map();
    i = n;
    while(i--){
        const child_ctx = get_context(ctx, list, i);
        const key = get_key(child_ctx);
        let block = lookup.get(key);
        if (!block) {
            block = create_each_block(key, child_ctx);
            block.c();
        } else if (dynamic) block.p(child_ctx, dirty);
        new_lookup.set(key, new_blocks[i] = block);
        if (key in old_indexes) deltas.set(key, Math.abs(i - old_indexes[key]));
    }
    const will_move = new Set();
    const did_move = new Set();
    function insert1(block) {
        transition_in(block, 1);
        block.m(node, next);
        lookup.set(block.key, block);
        next = block.first;
        n--;
    }
    while(o && n){
        const new_block = new_blocks[n - 1];
        const old_block = old_blocks[o - 1];
        const new_key = new_block.key;
        const old_key = old_block.key;
        if (new_block === old_block) {
            // do nothing
            next = new_block.first;
            o--;
            n--;
        } else if (!new_lookup.has(old_key)) {
            // remove old block
            destroy(old_block, lookup);
            o--;
        } else if (!lookup.has(new_key) || will_move.has(new_key)) insert1(new_block);
        else if (did_move.has(old_key)) o--;
        else if (deltas.get(new_key) > deltas.get(old_key)) {
            did_move.add(new_key);
            insert1(new_block);
        } else {
            will_move.add(old_key);
            o--;
        }
    }
    while(o--){
        const old_block = old_blocks[o];
        if (!new_lookup.has(old_block.key)) destroy(old_block, lookup);
    }
    while(n)insert1(new_blocks[n - 1]);
    return new_blocks;
}
function validate_each_keys(ctx, list, get_context, get_key) {
    const keys = new Set();
    for(let i = 0; i < list.length; i++){
        const key = get_key(get_context(ctx, list, i));
        if (keys.has(key)) throw new Error('Cannot have duplicate keys in a keyed each');
        keys.add(key);
    }
}
function get_spread_update(levels, updates) {
    const update2 = {};
    const to_null_out = {};
    const accounted_for = {
        $$scope: 1
    };
    let i = levels.length;
    while(i--){
        const o = levels[i];
        const n = updates[i];
        if (n) {
            for(const key in o)if (!(key in n)) to_null_out[key] = 1;
            for(const key1 in n)if (!accounted_for[key1]) {
                update2[key1] = n[key1];
                accounted_for[key1] = 1;
            }
            levels[i] = n;
        } else for(const key in o)accounted_for[key] = 1;
    }
    for(const key in to_null_out)if (!(key in update2)) update2[key] = undefined;
    return update2;
}
function get_spread_object(spread_props) {
    return typeof spread_props === 'object' && spread_props !== null ? spread_props : {};
}
// source: https://html.spec.whatwg.org/multipage/indices.html
const boolean_attributes = new Set([
    'allowfullscreen',
    'allowpaymentrequest',
    'async',
    'autofocus',
    'autoplay',
    'checked',
    'controls',
    'default',
    'defer',
    'disabled',
    'formnovalidate',
    'hidden',
    'ismap',
    'loop',
    'multiple',
    'muted',
    'nomodule',
    'novalidate',
    'open',
    'playsinline',
    'readonly',
    'required',
    'reversed',
    'selected'
]);
const void_element_names = /^(?:area|base|br|col|command|embed|hr|img|input|keygen|link|meta|param|source|track|wbr)$/;
function is_void(name) {
    return void_element_names.test(name) || name.toLowerCase() === '!doctype';
}
const invalid_attribute_name_character = /[\s'">/=\u{FDD0}-\u{FDEF}\u{FFFE}\u{FFFF}\u{1FFFE}\u{1FFFF}\u{2FFFE}\u{2FFFF}\u{3FFFE}\u{3FFFF}\u{4FFFE}\u{4FFFF}\u{5FFFE}\u{5FFFF}\u{6FFFE}\u{6FFFF}\u{7FFFE}\u{7FFFF}\u{8FFFE}\u{8FFFF}\u{9FFFE}\u{9FFFF}\u{AFFFE}\u{AFFFF}\u{BFFFE}\u{BFFFF}\u{CFFFE}\u{CFFFF}\u{DFFFE}\u{DFFFF}\u{EFFFE}\u{EFFFF}\u{FFFFE}\u{FFFFF}\u{10FFFE}\u{10FFFF}]/u;
// https://html.spec.whatwg.org/multipage/syntax.html#attributes-2
// https://infra.spec.whatwg.org/#noncharacter
function spread(args, attrs_to_add) {
    const attributes = Object.assign({}, ...args);
    if (attrs_to_add) {
        const classes_to_add = attrs_to_add.classes;
        const styles_to_add = attrs_to_add.styles;
        if (classes_to_add) {
            if (attributes.class == null) attributes.class = classes_to_add;
            else attributes.class += ' ' + classes_to_add;
        }
        if (styles_to_add) {
            if (attributes.style == null) attributes.style = style_object_to_string(styles_to_add);
            else attributes.style = style_object_to_string(merge_ssr_styles(attributes.style, styles_to_add));
        }
    }
    let str = '';
    Object.keys(attributes).forEach((name)=>{
        if (invalid_attribute_name_character.test(name)) return;
        const value = attributes[name];
        if (value === true) str += ' ' + name;
        else if (boolean_attributes.has(name.toLowerCase())) {
            if (value) str += ' ' + name;
        } else if (value != null) str += ` ${name}="${value}"`;
    });
    return str;
}
function merge_ssr_styles(style_attribute, style_directive) {
    const style_object = {};
    for (const individual_style of style_attribute.split(';')){
        const colon_index = individual_style.indexOf(':');
        const name = individual_style.slice(0, colon_index).trim();
        const value = individual_style.slice(colon_index + 1).trim();
        if (!name) continue;
        style_object[name] = value;
    }
    for(const name in style_directive){
        const value = style_directive[name];
        if (value) style_object[name] = value;
        else delete style_object[name];
    }
    return style_object;
}
const escaped = {
    '"': '&quot;',
    "'": '&#39;',
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;'
};
function escape(html) {
    return String(html).replace(/["'&<>]/g, (match)=>escaped[match]
    );
}
function escape_attribute_value(value) {
    return typeof value === 'string' ? escape(value) : value;
}
function escape_object(obj) {
    const result = {};
    for(const key in obj)result[key] = escape_attribute_value(obj[key]);
    return result;
}
function each(items, fn) {
    let str = '';
    for(let i = 0; i < items.length; i += 1)str += fn(items[i], i);
    return str;
}
const missing_component = {
    $$render: ()=>''
};
function validate_component(component, name) {
    if (!component || !component.$$render) {
        if (name === 'svelte:component') name += ' this={...}';
        throw new Error(`<${name}> is not a valid SSR component. You may need to review your build config to ensure that dependencies are compiled, rather than imported as pre-compiled modules`);
    }
    return component;
}
function debug(file, line, column, values) {
    console.log(`{@debug} ${file ? file + ' ' : ''}(${line}:${column})`); // eslint-disable-line no-console
    console.log(values); // eslint-disable-line no-console
    return '';
}
let on_destroy;
function create_ssr_component(fn) {
    function $$render(result, props, bindings, slots, context) {
        const parent_component = current_component;
        const $$ = {
            on_destroy,
            context: new Map(context || (parent_component ? parent_component.$$.context : [])),
            // these will be immediately discarded
            on_mount: [],
            before_update: [],
            after_update: [],
            callbacks: blank_object()
        };
        set_current_component({
            $$
        });
        const html = fn(result, props, bindings, slots);
        set_current_component(parent_component);
        return html;
    }
    return {
        render: (props = {}, { $$slots ={} , context =new Map()  } = {})=>{
            on_destroy = [];
            const result = {
                title: '',
                head: '',
                css: new Set()
            };
            const html = $$render(result, props, {}, $$slots, context);
            run_all(on_destroy);
            return {
                html,
                css: {
                    code: Array.from(result.css).map((css)=>css.code
                    ).join('\n'),
                    map: null // TODO
                },
                head: result.title + result.head
            };
        },
        $$render
    };
}
function add_attribute(name, value, boolean) {
    if (value == null || boolean && !value) return '';
    const assignment = boolean && value === true ? '' : `="${escape_attribute_value(value.toString())}"`;
    return ` ${name}${assignment}`;
}
function add_classes(classes) {
    return classes ? ` class="${classes}"` : '';
}
function style_object_to_string(style_object) {
    return Object.keys(style_object).filter((key)=>style_object[key]
    ).map((key)=>`${key}: ${style_object[key]};`
    ).join(' ');
}
function add_styles(style_object) {
    const styles = style_object_to_string(style_object);
    return styles ? ` style="${styles}"` : '';
}
function bind(component, name, callback) {
    const index = component.$$.props[name];
    if (index !== undefined) {
        component.$$.bound[index] = callback;
        callback(component.$$.ctx[index]);
    }
}
function create_component(block) {
    block && block.c();
}
function claim_component(block, parent_nodes) {
    block && block.l(parent_nodes);
}
function mount_component(component, target, anchor, customElement) {
    const { fragment , on_mount , on_destroy: on_destroy1 , after_update  } = component.$$;
    fragment && fragment.m(target, anchor);
    if (!customElement) // onMount happens before the initial afterUpdate
    add_render_callback(()=>{
        const new_on_destroy = on_mount.map(run).filter(is_function);
        if (on_destroy1) on_destroy1.push(...new_on_destroy);
        else // Edge case - component was destroyed immediately,
        // most likely as a result of a binding initialising
        run_all(new_on_destroy);
        component.$$.on_mount = [];
    });
    after_update.forEach(add_render_callback);
}
function destroy_component(component, detaching) {
    const $$ = component.$$;
    if ($$.fragment !== null) {
        run_all($$.on_destroy);
        $$.fragment && $$.fragment.d(detaching);
        // TODO null out other refs, including component.$$ (but need to
        // preserve final state?)
        $$.on_destroy = $$.fragment = null;
        $$.ctx = [];
    }
}
function make_dirty(component, i) {
    if (component.$$.dirty[0] === -1) {
        dirty_components.push(component);
        schedule_update();
        component.$$.dirty.fill(0);
    }
    component.$$.dirty[i / 31 | 0] |= 1 << i % 31;
}
function init(component, options, instance, create_fragment, not_equal1, props, append_styles1, dirty = [
    -1
]) {
    const parent_component = current_component;
    set_current_component(component);
    const $$ = component.$$ = {
        fragment: null,
        ctx: null,
        // state
        props,
        update: noop,
        not_equal: not_equal1,
        bound: blank_object(),
        // lifecycle
        on_mount: [],
        on_destroy: [],
        on_disconnect: [],
        before_update: [],
        after_update: [],
        context: new Map(options.context || (parent_component ? parent_component.$$.context : [])),
        // everything else
        callbacks: blank_object(),
        dirty,
        skip_bound: false,
        root: options.target || parent_component.$$.root
    };
    append_styles1 && append_styles1($$.root);
    let ready = false;
    $$.ctx = instance ? instance(component, options.props || {}, (i, ret, ...rest)=>{
        const value = rest.length ? rest[0] : ret;
        if ($$.ctx && not_equal1($$.ctx[i], $$.ctx[i] = value)) {
            if (!$$.skip_bound && $$.bound[i]) $$.bound[i](value);
            if (ready) make_dirty(component, i);
        }
        return ret;
    }) : [];
    $$.update();
    ready = true;
    run_all($$.before_update);
    // `false` as a special case of no DOM component
    $$.fragment = create_fragment ? create_fragment($$.ctx) : false;
    if (options.target) {
        if (options.hydrate) {
            start_hydrating();
            const nodes = children(options.target);
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            $$.fragment && $$.fragment.l(nodes);
            nodes.forEach(detach);
        } else // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
        $$.fragment && $$.fragment.c();
        if (options.intro) transition_in(component.$$.fragment);
        mount_component(component, options.target, options.anchor, options.customElement);
        end_hydrating();
        flush();
    }
    set_current_component(parent_component);
}
let SvelteElement;
if (typeof HTMLElement === 'function') SvelteElement = class extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({
            mode: 'open'
        });
    }
    connectedCallback() {
        const { on_mount  } = this.$$;
        this.$$.on_disconnect = on_mount.map(run).filter(is_function);
        // @ts-ignore todo: improve typings
        for(const key in this.$$.slotted)// @ts-ignore todo: improve typings
        this.appendChild(this.$$.slotted[key]);
    }
    attributeChangedCallback(attr1, _oldValue, newValue) {
        this[attr1] = newValue;
    }
    disconnectedCallback() {
        run_all(this.$$.on_disconnect);
    }
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        // TODO should this delegate to addEventListener?
        const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return ()=>{
            const index = callbacks.indexOf(callback);
            if (index !== -1) callbacks.splice(index, 1);
        };
    }
    $set($$props) {
        if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
        }
    }
};
/**
 * Base class for Svelte components. Used when dev=false.
 */ class SvelteComponent {
    $destroy() {
        destroy_component(this, 1);
        this.$destroy = noop;
    }
    $on(type, callback) {
        const callbacks = this.$$.callbacks[type] || (this.$$.callbacks[type] = []);
        callbacks.push(callback);
        return ()=>{
            const index = callbacks.indexOf(callback);
            if (index !== -1) callbacks.splice(index, 1);
        };
    }
    $set($$props) {
        if (this.$$set && !is_empty($$props)) {
            this.$$.skip_bound = true;
            this.$$set($$props);
            this.$$.skip_bound = false;
        }
    }
}
function dispatch_dev(type, detail) {
    document.dispatchEvent(custom_event(type, Object.assign({
        version: '3.48.0'
    }, detail), {
        bubbles: true
    }));
}
function append_dev(target, node) {
    dispatch_dev('SvelteDOMInsert', {
        target,
        node
    });
    append(target, node);
}
function append_hydration_dev(target, node) {
    dispatch_dev('SvelteDOMInsert', {
        target,
        node
    });
    append_hydration(target, node);
}
function insert_dev(target, node, anchor) {
    dispatch_dev('SvelteDOMInsert', {
        target,
        node,
        anchor
    });
    insert(target, node, anchor);
}
function insert_hydration_dev(target, node, anchor) {
    dispatch_dev('SvelteDOMInsert', {
        target,
        node,
        anchor
    });
    insert_hydration(target, node, anchor);
}
function detach_dev(node) {
    dispatch_dev('SvelteDOMRemove', {
        node
    });
    detach(node);
}
function detach_between_dev(before, after) {
    while(before.nextSibling && before.nextSibling !== after)detach_dev(before.nextSibling);
}
function detach_before_dev(after) {
    while(after.previousSibling)detach_dev(after.previousSibling);
}
function detach_after_dev(before) {
    while(before.nextSibling)detach_dev(before.nextSibling);
}
function listen_dev(node, event, handler, options, has_prevent_default, has_stop_propagation) {
    const modifiers = options === true ? [
        'capture'
    ] : options ? Array.from(Object.keys(options)) : [];
    if (has_prevent_default) modifiers.push('preventDefault');
    if (has_stop_propagation) modifiers.push('stopPropagation');
    dispatch_dev('SvelteDOMAddEventListener', {
        node,
        event,
        handler,
        modifiers
    });
    const dispose = listen(node, event, handler, options);
    return ()=>{
        dispatch_dev('SvelteDOMRemoveEventListener', {
            node,
            event,
            handler,
            modifiers
        });
        dispose();
    };
}
function attr_dev(node, attribute, value) {
    attr(node, attribute, value);
    if (value == null) dispatch_dev('SvelteDOMRemoveAttribute', {
        node,
        attribute
    });
    else dispatch_dev('SvelteDOMSetAttribute', {
        node,
        attribute,
        value
    });
}
function prop_dev(node, property, value) {
    node[property] = value;
    dispatch_dev('SvelteDOMSetProperty', {
        node,
        property,
        value
    });
}
function dataset_dev(node, property, value) {
    node.dataset[property] = value;
    dispatch_dev('SvelteDOMSetDataset', {
        node,
        property,
        value
    });
}
function set_data_dev(text3, data) {
    data = '' + data;
    if (text3.wholeText === data) return;
    dispatch_dev('SvelteDOMSetData', {
        node: text3,
        data
    });
    text3.data = data;
}
function validate_each_argument(arg) {
    if (typeof arg !== 'string' && !(arg && typeof arg === 'object' && 'length' in arg)) {
        let msg = '{#each} only iterates over array-like objects.';
        if (typeof Symbol === 'function' && arg && Symbol.iterator in arg) msg += ' You can use a spread to convert this iterable into an array.';
        throw new Error(msg);
    }
}
function validate_slots(name, slot, keys) {
    for (const slot_key of Object.keys(slot))if (!~keys.indexOf(slot_key)) console.warn(`<${name}> received an unexpected slot "${slot_key}".`);
}
function validate_dynamic_element(tag) {
    const is_string = typeof tag === 'string';
    if (tag && !is_string) throw new Error('<svelte:element> expects "this" attribute to be a string.');
}
function validate_void_dynamic_element(tag) {
    if (tag && is_void(tag)) throw new Error(`<svelte:element this="${tag}"> is self-closing and cannot have content.`);
}
/**
 * Base class for Svelte components with some minor dev-enhancements. Used when dev=true.
 */ class SvelteComponentDev extends SvelteComponent {
    constructor(options){
        if (!options || !options.target && !options.$$inline) throw new Error("'target' is a required option");
        super();
    }
    $destroy() {
        super.$destroy();
        this.$destroy = ()=>{
            console.warn('Component was already destroyed'); // eslint-disable-line no-console
        };
    }
    $capture_state() {}
    $inject_state() {}
}
/**
 * Base class to create strongly typed Svelte components.
 * This only exists for typing purposes and should be used in `.d.ts` files.
 *
 * ### Example:
 *
 * You have component library on npm called `component-library`, from which
 * you export a component called `MyComponent`. For Svelte+TypeScript users,
 * you want to provide typings. Therefore you create a `index.d.ts`:
 * ```ts
 * import { SvelteComponentTyped } from "svelte";
 * export class MyComponent extends SvelteComponentTyped<{foo: string}> {}
 * ```
 * Typing this makes it possible for IDEs like VS Code with the Svelte extension
 * to provide intellisense and to use the component like this in a Svelte file
 * with TypeScript:
 * ```svelte
 * <script lang="ts">
 * 	import { MyComponent } from "component-library";
 * </script>
 * <MyComponent foo={'bar'} />
 * ```
 *
 * #### Why not make this part of `SvelteComponent(Dev)`?
 * Because
 * ```ts
 * class ASubclassOfSvelteComponent extends SvelteComponent<{foo: string}> {}
 * const component: typeof SvelteComponent = ASubclassOfSvelteComponent;
 * ```
 * will throw a type error, so we need to separate the more strictly typed class.
 */ class SvelteComponentTyped extends SvelteComponentDev {
    constructor(options){
        super(options);
    }
}
function loop_guard(timeout) {
    const start = Date.now();
    return ()=>{
        if (Date.now() - start > timeout) throw new Error('Infinite loop detected');
    };
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"fVA3i":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* src/components/Nav.svelte generated by Svelte v3.48.0 */ var _internal = require("svelte/internal");
var _svelte = require("svelte");
function add_css(target) {
    _internal.append_styles(target, "svelte-6fiwpl", "@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono:wght@300&family=Roboto:wght@100;300;400;500&display=swap');.nav-bar.svelte-6fiwpl{width:100%;height:60px;background-color:rgb(36, 36, 36);box-shadow:0 -10px 15px;display:flex;align-items:center;color:white}.nav-banner.svelte-6fiwpl{display:inline-block;margin-left:45px;text-align:center;font-size:24px;cursor:pointer}.brand-segment-lowcode.svelte-6fiwpl{font-weight:300;font-family:'Roboto Mono', monospace}.brand-segment-devkit.svelte-6fiwpl{font-weight:500;font-family:'Roboto', sans-serif;color:rgb(234, 136, 0);font-size:25px}");
}
function create_fragment(ctx) {
    let nav;
    let div;
    let mounted;
    let dispose;
    return {
        c () {
            nav = _internal.element("nav");
            div = _internal.element("div");
            div.innerHTML = `<span class="brand-segment-lowcode svelte-6fiwpl">lowcode</span><span class="brand-segment-devkit svelte-6fiwpl">DevKit</span>`;
            _internal.attr(div, "class", "nav-banner svelte-6fiwpl");
            _internal.attr(nav, "class", "nav-bar svelte-6fiwpl");
        },
        m (target, anchor) {
            _internal.insert(target, nav, anchor);
            _internal.append(nav, div);
            if (!mounted) {
                dispose = _internal.listen(div, "click", /*click_handler*/ ctx[1]);
                mounted = true;
            }
        },
        p: _internal.noop,
        i: _internal.noop,
        o: _internal.noop,
        d (detaching) {
            if (detaching) _internal.detach(nav);
            mounted = false;
            dispose();
        }
    };
}
function instance($$self) {
    let history = _svelte.getContext('history');
    const click_handler = ()=>history.pushState('/')
    ;
    return [
        history,
        click_handler
    ];
}
class Nav extends _internal.SvelteComponent {
    constructor(options){
        super();
        _internal.init(this, options, instance, create_fragment, _internal.safe_not_equal, {}, add_css);
    }
}
exports.default = Nav;

},{"svelte/internal":"iVhnC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3","svelte":"4r74h"}],"4r74h":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "SvelteComponent", ()=>_indexMjs.SvelteComponentDev
);
parcelHelpers.export(exports, "SvelteComponentTyped", ()=>_indexMjs.SvelteComponentTyped
);
parcelHelpers.export(exports, "afterUpdate", ()=>_indexMjs.afterUpdate
);
parcelHelpers.export(exports, "beforeUpdate", ()=>_indexMjs.beforeUpdate
);
parcelHelpers.export(exports, "createEventDispatcher", ()=>_indexMjs.createEventDispatcher
);
parcelHelpers.export(exports, "getAllContexts", ()=>_indexMjs.getAllContexts
);
parcelHelpers.export(exports, "getContext", ()=>_indexMjs.getContext
);
parcelHelpers.export(exports, "hasContext", ()=>_indexMjs.hasContext
);
parcelHelpers.export(exports, "onDestroy", ()=>_indexMjs.onDestroy
);
parcelHelpers.export(exports, "onMount", ()=>_indexMjs.onMount
);
parcelHelpers.export(exports, "setContext", ()=>_indexMjs.setContext
);
parcelHelpers.export(exports, "tick", ()=>_indexMjs.tick
);
var _indexMjs = require("./internal/index.mjs");

},{"./internal/index.mjs":"iVhnC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"bz5PN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* src/components/Router.svelte generated by Svelte v3.48.0 */ var _internal = require("svelte/internal");
var _workflowLookupSvelte = require("./pages/WorkflowLookup.svelte");
var _workflowLookupSvelteDefault = parcelHelpers.interopDefault(_workflowLookupSvelte);
var _workflowSvelte = require("./pages/editor/Workflow.svelte");
var _workflowSvelteDefault = parcelHelpers.interopDefault(_workflowSvelte);
var _svelte = require("svelte");
const { window: window_1  } = _internal.globals;
function create_fragment(ctx1) {
    let switch_instance;
    let switch_instance_anchor;
    let current;
    let mounted;
    let dispose;
    const switch_instance_spread_levels = [
        /*props*/ ctx1[0]
    ];
    var switch_value = /*component*/ ctx1[1];
    function switch_props(ctx) {
        let switch_instance_props = {};
        for(let i = 0; i < switch_instance_spread_levels.length; i += 1)switch_instance_props = _internal.assign(switch_instance_props, switch_instance_spread_levels[i]);
        return {
            props: switch_instance_props
        };
    }
    if (switch_value) switch_instance = new switch_value(switch_props(ctx1));
    return {
        c () {
            if (switch_instance) _internal.create_component(switch_instance.$$.fragment);
            switch_instance_anchor = _internal.empty();
        },
        m (target, anchor) {
            if (switch_instance) _internal.mount_component(switch_instance, target, anchor);
            _internal.insert(target, switch_instance_anchor, anchor);
            current = true;
            if (!mounted) {
                dispose = _internal.listen(window_1, "popstate", /*loadPage*/ ctx1[2]);
                mounted = true;
            }
        },
        p (ctx, [dirty]) {
            const switch_instance_changes = dirty & /*props*/ 1 ? _internal.get_spread_update(switch_instance_spread_levels, [
                _internal.get_spread_object(/*props*/ ctx[0])
            ]) : {};
            if (switch_value !== (switch_value = /*component*/ ctx[1])) {
                if (switch_instance) {
                    _internal.group_outros();
                    const old_component = switch_instance;
                    _internal.transition_out(old_component.$$.fragment, 1, 0, ()=>{
                        _internal.destroy_component(old_component, 1);
                    });
                    _internal.check_outros();
                }
                if (switch_value) {
                    switch_instance = new switch_value(switch_props(ctx));
                    _internal.create_component(switch_instance.$$.fragment);
                    _internal.transition_in(switch_instance.$$.fragment, 1);
                    _internal.mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
                } else switch_instance = null;
            } else if (switch_value) switch_instance.$set(switch_instance_changes);
        },
        i (local) {
            if (current) return;
            if (switch_instance) _internal.transition_in(switch_instance.$$.fragment, local);
            current = true;
        },
        o (local) {
            if (switch_instance) _internal.transition_out(switch_instance.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) _internal.detach(switch_instance_anchor);
            if (switch_instance) _internal.destroy_component(switch_instance, detaching);
            mounted = false;
            dispose();
        }
    };
}
function instance($$self, $$props, $$invalidate) {
    let history = _svelte.getContext('history');
    // function routeRegex(urlTemplate) {
    //   let pathRegex = location.pathname
    //     .trim()
    //     .split("/")
    //     .filter(Boolean)
    //     .map((segment) => segment[0] === ':' ? '([^\\/]+)' : segment)
    //     .join('\\/*') // slash regex
    //
    //   return new RegExp(`^${pathRegex}$`)
    // }
    // route.add(
    //   'workflow/:workflowId/actions/:actionId',
    //   (workflowId, actionId) => [WorkflowEditor, { workflowId, actionId }]
    // )
    history.pushState = function(url) {
        window.history.pushState({}, 'lowcodeDevKit', url);
        loadPage();
    };
    history.back = window.history.back;
    let props = {};
    let component = null;
    _svelte.onMount(()=>loadPage()
    );
    function loadPage() {
        $$invalidate(1, [component, props] = getRoutedComponent(window.location), component, $$invalidate(0, props));
    }
    function getRoutedComponent(location) {
        const path = location.pathname.trim().split("/").filter(Boolean).join("/").toLowerCase();
        const queryParams = new URLSearchParams(location.search);
        if (path === "workflow") {
            const workflowId = queryParams.get("workflow-id");
            return [
                _workflowSvelteDefault.default,
                {
                    workflowId
                }
            ];
        }
        return [
            _workflowLookupSvelteDefault.default,
            {}
        ];
    }
    return [
        props,
        component,
        loadPage
    ];
}
class Router extends _internal.SvelteComponent {
    constructor(options){
        super();
        _internal.init(this, options, instance, create_fragment, _internal.safe_not_equal, {});
    }
}
exports.default = Router;

},{"svelte/internal":"iVhnC","./pages/WorkflowLookup.svelte":"6MRQ8","./pages/editor/Workflow.svelte":"cAAjH","svelte":"4r74h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6MRQ8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* src/components/pages/WorkflowLookup.svelte generated by Svelte v3.48.0 */ var _internal = require("svelte/internal");
var _actions = require("./editor/actions");
var _actionsDefault = parcelHelpers.interopDefault(_actions);
var _svelte = require("svelte");
function add_css(target) {
    _internal.append_styles(target, "svelte-1u8kct", ".content-area.svelte-1u8kct.svelte-1u8kct{padding:35px 50px 35px 50px;max-width:1100px;margin-right:auto;margin-left:auto}.section-name.svelte-1u8kct.svelte-1u8kct{font-family:'Roboto', 'sans-serif';font-weight:400;font-size:40px;margin-left:10px}.btn.svelte-1u8kct.svelte-1u8kct{font-size:18px;font-weight:300;margin-left:15px;border:1px solid gainsboro;padding:5px 10px 5px 10px;border-radius:2px;vertical-align:middle;box-shadow:0px 2px 10px -8px;background-color:rgb(250, 250, 250)}.btn.svelte-1u8kct.svelte-1u8kct:hover{cursor:pointer}.section-container.svelte-1u8kct.svelte-1u8kct{width:100%;min-height:300px;border:1px solid gainsboro;border-radius:2px;background-color:rgb(250, 250, 250);box-shadow:0px 3px 20px -12px;padding:0 15px 15px 15px;margin-bottom:30px}.section-table.svelte-1u8kct.svelte-1u8kct{width:100%;border-collapse:collapse}.section-header.svelte-1u8kct.svelte-1u8kct{text-align:left;padding-bottom:10px}.section-row.svelte-1u8kct.svelte-1u8kct{max-height:20px}.section-row.svelte-1u8kct.svelte-1u8kct:hover{cursor:pointer;background-color:rgb(229, 227, 227)}.components-section.svelte-1u8kct.svelte-1u8kct{display:flex}.component-col.svelte-1u8kct.svelte-1u8kct{width:calc(100% / 3);padding:20px;border:1px solid gainsboro;border-radius:2px;background-color:rgb(250, 250, 250);box-shadow:0px 3px 20px -12px}.component-col.svelte-1u8kct.svelte-1u8kct:not(:last-child){margin-right:15px}.component-col-header.svelte-1u8kct.svelte-1u8kct{font-size:20px;font-weight:500}.component-col-row.svelte-1u8kct.svelte-1u8kct{margin-top:10px}.section-row.svelte-1u8kct>.svelte-1u8kct:first-child,.section-header.svelte-1u8kct>.svelte-1u8kct:first-child{padding-left:15px}");
}
function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[7] = list[i];
    return child_ctx;
}
function get_each_context_1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[10] = list[i];
    return child_ctx;
}
function get_each_context_2(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[13] = list[i];
    return child_ctx;
}
function get_each_context_3(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[7] = list[i];
    return child_ctx;
}
// (46:6) {#each workflows as workflow}
function create_each_block_3(ctx) {
    let tr;
    let td0;
    let t0_value = /*workflow*/ ctx[7].title + "";
    let t0;
    let t1;
    let td1;
    let t2_value = /*workflow*/ ctx[7].lastModifiedAt + "";
    let t2;
    let t3;
    let mounted;
    let dispose;
    function click_handler() {
        return /*click_handler*/ ctx[4](/*workflow*/ ctx[7]);
    }
    return {
        c () {
            tr = _internal.element("tr");
            td0 = _internal.element("td");
            t0 = _internal.text(t0_value);
            t1 = _internal.space();
            td1 = _internal.element("td");
            t2 = _internal.text(t2_value);
            t3 = _internal.space();
            _internal.attr(td0, "class", "svelte-1u8kct");
            _internal.attr(td1, "class", "svelte-1u8kct");
            _internal.attr(tr, "class", "section-row svelte-1u8kct");
            _internal.attr(tr, "height", "40px");
        },
        m (target, anchor) {
            _internal.insert(target, tr, anchor);
            _internal.append(tr, td0);
            _internal.append(td0, t0);
            _internal.append(tr, t1);
            _internal.append(tr, td1);
            _internal.append(td1, t2);
            _internal.append(tr, t3);
            if (!mounted) {
                dispose = _internal.listen(tr, "click", click_handler);
                mounted = true;
            }
        },
        p (new_ctx, dirty) {
            ctx = new_ctx;
            if (dirty & /*workflows*/ 2 && t0_value !== (t0_value = /*workflow*/ ctx[7].title + "")) _internal.set_data(t0, t0_value);
            if (dirty & /*workflows*/ 2 && t2_value !== (t2_value = /*workflow*/ ctx[7].lastModifiedAt + "")) _internal.set_data(t2, t2_value);
        },
        d (detaching) {
            if (detaching) _internal.detach(tr);
            mounted = false;
            dispose();
        }
    };
}
// (62:6) {#each metadata?.eventDefs || [] as event}
function create_each_block_2(ctx1) {
    let div;
    let t_value = /*event*/ ctx1[13].title + "";
    let t;
    return {
        c () {
            div = _internal.element("div");
            t = _internal.text(t_value);
            _internal.attr(div, "class", "component-col-row svelte-1u8kct");
        },
        m (target, anchor) {
            _internal.insert(target, div, anchor);
            _internal.append(div, t);
        },
        p (ctx, dirty) {
            if (dirty & /*metadata*/ 1 && t_value !== (t_value = /*event*/ ctx[13].title + "")) _internal.set_data(t, t_value);
        },
        d (detaching) {
            if (detaching) _internal.detach(div);
        }
    };
}
// (68:6) {#each metadata?.actionDefs || [] as action}
function create_each_block_1(ctx2) {
    let div;
    let t_value = /*action*/ ctx2[10].title + "";
    let t;
    return {
        c () {
            div = _internal.element("div");
            t = _internal.text(t_value);
            _internal.attr(div, "class", "component-col-row svelte-1u8kct");
        },
        m (target, anchor) {
            _internal.insert(target, div, anchor);
            _internal.append(div, t);
        },
        p (ctx, dirty) {
            if (dirty & /*metadata*/ 1 && t_value !== (t_value = /*action*/ ctx[10].title + "")) _internal.set_data(t, t_value);
        },
        d (detaching) {
            if (detaching) _internal.detach(div);
        }
    };
}
// (74:6) {#each metadata?.workflowDefs || [] as workflow}
function create_each_block(ctx3) {
    let div;
    let t_value = /*workflow*/ ctx3[7].title + "";
    let t;
    return {
        c () {
            div = _internal.element("div");
            t = _internal.text(t_value);
            _internal.attr(div, "class", "component-col-row svelte-1u8kct");
        },
        m (target, anchor) {
            _internal.insert(target, div, anchor);
            _internal.append(div, t);
        },
        p (ctx, dirty) {
            if (dirty & /*metadata*/ 1 && t_value !== (t_value = /*workflow*/ ctx[7].title + "")) _internal.set_data(t, t_value);
        },
        d (detaching) {
            if (detaching) _internal.detach(div);
        }
    };
}
function create_fragment(ctx4) {
    let div8;
    let h20;
    let t0;
    let span;
    let t2;
    let div0;
    let table;
    let tr;
    let t6;
    let t7;
    let h21;
    let t9;
    let div7;
    let div2;
    let div1;
    let t11;
    let t12;
    let div4;
    let div3;
    let t14;
    let t15;
    let div6;
    let div5;
    let t17;
    let mounted;
    let dispose;
    let each_value_3 = /*workflows*/ ctx4[1];
    let each_blocks_3 = [];
    for(let i7 = 0; i7 < each_value_3.length; i7 += 1)each_blocks_3[i7] = create_each_block_3(get_each_context_3(ctx4, each_value_3, i7));
    let each_value_2 = /*metadata*/ ctx4[0]?.eventDefs || [];
    let each_blocks_2 = [];
    for(let i1 = 0; i1 < each_value_2.length; i1 += 1)each_blocks_2[i1] = create_each_block_2(get_each_context_2(ctx4, each_value_2, i1));
    let each_value_1 = /*metadata*/ ctx4[0]?.actionDefs || [];
    let each_blocks_1 = [];
    for(let i2 = 0; i2 < each_value_1.length; i2 += 1)each_blocks_1[i2] = create_each_block_1(get_each_context_1(ctx4, each_value_1, i2));
    let each_value = /*metadata*/ ctx4[0]?.workflowDefs || [];
    let each_blocks = [];
    for(let i3 = 0; i3 < each_value.length; i3 += 1)each_blocks[i3] = create_each_block(get_each_context(ctx4, each_value, i3));
    return {
        c () {
            div8 = _internal.element("div");
            h20 = _internal.element("h2");
            t0 = _internal.text("Workflows\r\n    ");
            span = _internal.element("span");
            span.textContent = "New +";
            t2 = _internal.space();
            div0 = _internal.element("div");
            table = _internal.element("table");
            tr = _internal.element("tr");
            tr.innerHTML = `<th class="svelte-1u8kct">Title</th> 
        
        <th class="svelte-1u8kct">Last Modified</th>`;
            t6 = _internal.space();
            for(let i = 0; i < each_blocks_3.length; i += 1)each_blocks_3[i].c();
            t7 = _internal.space();
            h21 = _internal.element("h2");
            h21.textContent = "Components";
            t9 = _internal.space();
            div7 = _internal.element("div");
            div2 = _internal.element("div");
            div1 = _internal.element("div");
            div1.textContent = "Events";
            t11 = _internal.space();
            for(let i4 = 0; i4 < each_blocks_2.length; i4 += 1)each_blocks_2[i4].c();
            t12 = _internal.space();
            div4 = _internal.element("div");
            div3 = _internal.element("div");
            div3.textContent = "Actions";
            t14 = _internal.space();
            for(let i5 = 0; i5 < each_blocks_1.length; i5 += 1)each_blocks_1[i5].c();
            t15 = _internal.space();
            div6 = _internal.element("div");
            div5 = _internal.element("div");
            div5.textContent = "Templates";
            t17 = _internal.space();
            for(let i6 = 0; i6 < each_blocks.length; i6 += 1)each_blocks[i6].c();
            _internal.attr(span, "class", "btn svelte-1u8kct");
            _internal.attr(h20, "class", "section-name svelte-1u8kct");
            _internal.attr(tr, "height", "60px");
            _internal.attr(tr, "class", "section-header svelte-1u8kct");
            _internal.attr(table, "class", "section-table svelte-1u8kct");
            _internal.attr(div0, "class", "section-container svelte-1u8kct");
            _internal.attr(h21, "class", "section-name svelte-1u8kct");
            _internal.attr(div1, "class", "component-col-header svelte-1u8kct");
            _internal.attr(div2, "class", "component-col svelte-1u8kct");
            _internal.attr(div3, "class", "component-col-header svelte-1u8kct");
            _internal.attr(div4, "class", "component-col svelte-1u8kct");
            _internal.attr(div5, "class", "component-col-header svelte-1u8kct");
            _internal.attr(div6, "class", "component-col svelte-1u8kct");
            _internal.attr(div7, "class", "components-section svelte-1u8kct");
            _internal.attr(div8, "class", "content-area svelte-1u8kct");
        },
        m (target, anchor) {
            _internal.insert(target, div8, anchor);
            _internal.append(div8, h20);
            _internal.append(h20, t0);
            _internal.append(h20, span);
            _internal.append(div8, t2);
            _internal.append(div8, div0);
            _internal.append(div0, table);
            _internal.append(table, tr);
            _internal.append(table, t6);
            for(let i = 0; i < each_blocks_3.length; i += 1)each_blocks_3[i].m(table, null);
            _internal.append(div8, t7);
            _internal.append(div8, h21);
            _internal.append(div8, t9);
            _internal.append(div8, div7);
            _internal.append(div7, div2);
            _internal.append(div2, div1);
            _internal.append(div2, t11);
            for(let i8 = 0; i8 < each_blocks_2.length; i8 += 1)each_blocks_2[i8].m(div2, null);
            _internal.append(div7, t12);
            _internal.append(div7, div4);
            _internal.append(div4, div3);
            _internal.append(div4, t14);
            for(let i9 = 0; i9 < each_blocks_1.length; i9 += 1)each_blocks_1[i9].m(div4, null);
            _internal.append(div7, t15);
            _internal.append(div7, div6);
            _internal.append(div6, div5);
            _internal.append(div6, t17);
            for(let i10 = 0; i10 < each_blocks.length; i10 += 1)each_blocks[i10].m(div6, null);
            if (!mounted) {
                dispose = _internal.listen(span, "click", /*createWorkflow*/ ctx4[2]);
                mounted = true;
            }
        },
        p (ctx, [dirty]) {
            if (dirty & /*openWorkflow, workflows*/ 10) {
                each_value_3 = /*workflows*/ ctx[1];
                let i;
                for(i = 0; i < each_value_3.length; i += 1){
                    const child_ctx = get_each_context_3(ctx, each_value_3, i);
                    if (each_blocks_3[i]) each_blocks_3[i].p(child_ctx, dirty);
                    else {
                        each_blocks_3[i] = create_each_block_3(child_ctx);
                        each_blocks_3[i].c();
                        each_blocks_3[i].m(table, null);
                    }
                }
                for(; i < each_blocks_3.length; i += 1)each_blocks_3[i].d(1);
                each_blocks_3.length = each_value_3.length;
            }
            if (dirty & /*metadata*/ 1) {
                each_value_2 = /*metadata*/ ctx[0]?.eventDefs || [];
                let i;
                for(i = 0; i < each_value_2.length; i += 1){
                    const child_ctx = get_each_context_2(ctx, each_value_2, i);
                    if (each_blocks_2[i]) each_blocks_2[i].p(child_ctx, dirty);
                    else {
                        each_blocks_2[i] = create_each_block_2(child_ctx);
                        each_blocks_2[i].c();
                        each_blocks_2[i].m(div2, null);
                    }
                }
                for(; i < each_blocks_2.length; i += 1)each_blocks_2[i].d(1);
                each_blocks_2.length = each_value_2.length;
            }
            if (dirty & /*metadata*/ 1) {
                each_value_1 = /*metadata*/ ctx[0]?.actionDefs || [];
                let i;
                for(i = 0; i < each_value_1.length; i += 1){
                    const child_ctx = get_each_context_1(ctx, each_value_1, i);
                    if (each_blocks_1[i]) each_blocks_1[i].p(child_ctx, dirty);
                    else {
                        each_blocks_1[i] = create_each_block_1(child_ctx);
                        each_blocks_1[i].c();
                        each_blocks_1[i].m(div4, null);
                    }
                }
                for(; i < each_blocks_1.length; i += 1)each_blocks_1[i].d(1);
                each_blocks_1.length = each_value_1.length;
            }
            if (dirty & /*metadata*/ 1) {
                each_value = /*metadata*/ ctx[0]?.workflowDefs || [];
                let i;
                for(i = 0; i < each_value.length; i += 1){
                    const child_ctx = get_each_context(ctx, each_value, i);
                    if (each_blocks[i]) each_blocks[i].p(child_ctx, dirty);
                    else {
                        each_blocks[i] = create_each_block(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(div6, null);
                    }
                }
                for(; i < each_blocks.length; i += 1)each_blocks[i].d(1);
                each_blocks.length = each_value.length;
            }
        },
        i: _internal.noop,
        o: _internal.noop,
        d (detaching) {
            if (detaching) _internal.detach(div8);
            _internal.destroy_each(each_blocks_3, detaching);
            _internal.destroy_each(each_blocks_2, detaching);
            _internal.destroy_each(each_blocks_1, detaching);
            _internal.destroy_each(each_blocks, detaching);
            mounted = false;
            dispose();
        }
    };
}
function instance($$self, $$props, $$invalidate) {
    let selectedWorkflow;
    let metadata;
    let workflows = [];
    let history = _svelte.getContext('history');
    function createWorkflow() {
        history.pushState('/workflow/');
    }
    function openWorkflow(workflowId) {
        history.pushState(`/workflow/?workflow-id=${workflowId}`);
    }
    const click_handler = (workflow)=>openWorkflow(workflow.id)
    ;
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*metadata*/ 1) {
            $: if (!metadata) _actionsDefault.default.getMetadata().then((m)=>$$invalidate(0, metadata = m)
            );
        }
    };
    $: if (!selectedWorkflow) _actionsDefault.default.getAllWorkflows().then((wf)=>$$invalidate(1, workflows = wf)
    );
    return [
        metadata,
        workflows,
        createWorkflow,
        openWorkflow,
        click_handler
    ];
}
class WorkflowLookup extends _internal.SvelteComponent {
    constructor(options){
        super();
        _internal.init(this, options, instance, create_fragment, _internal.safe_not_equal, {}, add_css);
    }
}
exports.default = WorkflowLookup;

},{"svelte/internal":"iVhnC","./editor/actions":"aoyHM","svelte":"4r74h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aoyHM":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
const host = "http://localhost:3000";
let metadata = null;
const actions = {
    async getMetadata () {
        return metadata ||= await fetch(`${host}/lcdk/meta`).then((x)=>x.json()
        );
    },
    async getAllWorkflows () {
        return await fetch(`${host}/lcdk/workflows`).then((x)=>x.json()
        );
    },
    async getWorkflow (workflowId) {
        return await fetch(`${host}/lcdk/workflows/${workflowId}`).then((x)=>x.json()
        );
    },
    async createWorkflow (workflow) {
        return await fetch(`${host}/lcdk/workflows`, {
            method: "POST",
            body: JSON.stringify(workflow),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((x)=>x.json()
        );
    },
    async updateWorkflow (workflowId, workflow) {
        return await fetch(`${host}/lcdk/workflows/${workflowId}`, {
            method: "PUT",
            body: JSON.stringify(workflow),
            headers: {
                "Content-Type": "application/json"
            }
        }).then((x)=>x.json()
        );
    },
    async deleteWorkflows (workflowId) {
        await fetch(`${host}/lcdk/workflows/${workflowId}`, {
            method: "DELETE"
        });
    }
};
exports.default = actions;

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"cAAjH":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* src/components/pages/editor/Workflow.svelte generated by Svelte v3.48.0 */ var _internal = require("svelte/internal");
var _actions = require("./actions");
var _actionsDefault = parcelHelpers.interopDefault(_actions);
var _pathSvelte = require("./Path.svelte");
var _pathSvelteDefault = parcelHelpers.interopDefault(_pathSvelte);
var _triggersSvelte = require("./Triggers.svelte");
var _triggersSvelteDefault = parcelHelpers.interopDefault(_triggersSvelte);
var _svelte = require("svelte");
function add_css(target) {
    _internal.append_styles(target, "svelte-1w7nlg6", ".workflow-editor.svelte-1w7nlg6{display:flex;align-items:stretch;justify-content:center;width:100%;height:100%\r\n  }.workflow-view-panel.svelte-1w7nlg6{padding-top:35px;min-width:700px;flex-grow:5}.workflow-view-container.svelte-1w7nlg6{max-width:900px;margin-left:auto;margin-right:auto}.title-input.svelte-1w7nlg6{border:none;outline:none;background-color:#fafafa;font-size:36px;width:700px;font-weight:300}.node-flow.svelte-1w7nlg6{display:flex;flex-direction:column;align-items:center;padding-top:10px}.section-headers.svelte-1w7nlg6{font-size:30px;font-weight:300;margin:10px}.btn.svelte-1w7nlg6{font-size:18px;font-weight:300;margin-left:15px;border:1px solid gainsboro;padding:5px 10px 5px 10px;border-radius:2px;vertical-align:middle;box-shadow:0px 2px 10px -8px;background-color:rgb(250, 250, 250)}.btn.svelte-1w7nlg6:hover{cursor:pointer}");
}
// (69:0) {#if workflow}
function create_if_block(ctx1) {
    let div5;
    let div4;
    let div3;
    let p;
    let button0;
    let t1;
    let button1;
    let t3;
    let input;
    let t4;
    let div2;
    let div0;
    let t6;
    let triggers;
    let t7;
    let div1;
    let t9;
    let path;
    let t10;
    let div6;
    let current;
    let mounted;
    let dispose;
    triggers = new _triggersSvelteDefault.default({
        props: {
            triggers: /*workflow*/ ctx1[0].triggers
        }
    });
    path = new _pathSvelteDefault.default({
        props: {
            def: /*workflow*/ ctx1[0].path
        }
    });
    return {
        c () {
            div5 = _internal.element("div");
            div4 = _internal.element("div");
            div3 = _internal.element("div");
            p = _internal.element("p");
            button0 = _internal.element("button");
            button0.textContent = "Close";
            t1 = _internal.space();
            button1 = _internal.element("button");
            button1.textContent = "Save";
            t3 = _internal.space();
            input = _internal.element("input");
            t4 = _internal.space();
            div2 = _internal.element("div");
            div0 = _internal.element("div");
            div0.textContent = "Triggers";
            t6 = _internal.space();
            _internal.create_component(triggers.$$.fragment);
            t7 = _internal.space();
            div1 = _internal.element("div");
            div1.textContent = "Workflow";
            t9 = _internal.space();
            _internal.create_component(path.$$.fragment);
            t10 = _internal.space();
            div6 = _internal.element("div");
            _internal.attr(button0, "class", "close-workflow btn svelte-1w7nlg6");
            _internal.attr(button0, "type", "button");
            _internal.attr(button1, "type", "button");
            _internal.attr(button1, "class", "action-editor-save-btn btn svelte-1w7nlg6");
            _internal.set_style(p, "float", "right");
            _internal.attr(input, "class", "title-input svelte-1w7nlg6");
            _internal.attr(input, "type", "text");
            _internal.attr(input, "placeholder", "Title");
            _internal.attr(div0, "class", "section-headers svelte-1w7nlg6");
            _internal.attr(div1, "class", "section-headers svelte-1w7nlg6");
            _internal.attr(div2, "class", "node-flow svelte-1w7nlg6");
            _internal.attr(div3, "class", "workflow-view-container svelte-1w7nlg6");
            _internal.attr(div4, "class", "workflow-view-panel svelte-1w7nlg6");
            _internal.attr(div5, "class", "workflow-editor svelte-1w7nlg6");
            _internal.attr(div6, "id", "action-editor-portal");
        },
        m (target, anchor) {
            _internal.insert(target, div5, anchor);
            _internal.append(div5, div4);
            _internal.append(div4, div3);
            _internal.append(div3, p);
            _internal.append(p, button0);
            _internal.append(p, t1);
            _internal.append(p, button1);
            _internal.append(div3, t3);
            _internal.append(div3, input);
            _internal.set_input_value(input, /*workflow*/ ctx1[0].title);
            _internal.append(div3, t4);
            _internal.append(div3, div2);
            _internal.append(div2, div0);
            _internal.append(div2, t6);
            _internal.mount_component(triggers, div2, null);
            _internal.append(div2, t7);
            _internal.append(div2, div1);
            _internal.append(div2, t9);
            _internal.mount_component(path, div2, null);
            _internal.insert(target, t10, anchor);
            _internal.insert(target, div6, anchor);
            current = true;
            if (!mounted) {
                dispose = [
                    _internal.listen(button0, "click", /*close*/ ctx1[2]),
                    _internal.listen(button1, "click", /*saveWorkflow*/ ctx1[1]),
                    _internal.listen(input, "input", /*input_input_handler*/ ctx1[4])
                ];
                mounted = true;
            }
        },
        p (ctx, dirty) {
            if (dirty & /*workflow*/ 1 && input.value !== /*workflow*/ ctx[0].title) _internal.set_input_value(input, /*workflow*/ ctx[0].title);
            const triggers_changes = {};
            if (dirty & /*workflow*/ 1) triggers_changes.triggers = /*workflow*/ ctx[0].triggers;
            triggers.$set(triggers_changes);
            const path_changes = {};
            if (dirty & /*workflow*/ 1) path_changes.def = /*workflow*/ ctx[0].path;
            path.$set(path_changes);
        },
        i (local) {
            if (current) return;
            _internal.transition_in(triggers.$$.fragment, local);
            _internal.transition_in(path.$$.fragment, local);
            current = true;
        },
        o (local) {
            _internal.transition_out(triggers.$$.fragment, local);
            _internal.transition_out(path.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) _internal.detach(div5);
            _internal.destroy_component(triggers);
            _internal.destroy_component(path);
            if (detaching) _internal.detach(t10);
            if (detaching) _internal.detach(div6);
            mounted = false;
            _internal.run_all(dispose);
        }
    };
}
function create_fragment(ctx2) {
    let if_block_anchor;
    let current;
    let mounted;
    let dispose;
    let if_block = /*workflow*/ ctx2[0] && create_if_block(ctx2);
    return {
        c () {
            if (if_block) if_block.c();
            if_block_anchor = _internal.empty();
        },
        m (target, anchor) {
            if (if_block) if_block.m(target, anchor);
            _internal.insert(target, if_block_anchor, anchor);
            current = true;
            if (!mounted) {
                dispose = _internal.listen(window, "mouseover", setHover);
                mounted = true;
            }
        },
        p (ctx, [dirty]) {
            if (/*workflow*/ ctx[0]) {
                if (if_block) {
                    if_block.p(ctx, dirty);
                    if (dirty & /*workflow*/ 1) _internal.transition_in(if_block, 1);
                } else {
                    if_block = create_if_block(ctx);
                    if_block.c();
                    _internal.transition_in(if_block, 1);
                    if_block.m(if_block_anchor.parentNode, if_block_anchor);
                }
            } else if (if_block) {
                _internal.group_outros();
                _internal.transition_out(if_block, 1, 1, ()=>{
                    if_block = null;
                });
                _internal.check_outros();
            }
        },
        i (local) {
            if (current) return;
            _internal.transition_in(if_block);
            current = true;
        },
        o (local) {
            _internal.transition_out(if_block);
            current = false;
        },
        d (detaching) {
            if (if_block) if_block.d(detaching);
            if (detaching) _internal.detach(if_block_anchor);
            mounted = false;
            dispose();
        }
    };
}
function setHover(e) {
    let nearestExpr = e.target.closest(".hover-target");
    if (nearestExpr?.matches(".hovering")) return;
    for (let el of document.querySelectorAll(".hovering"))el.classList.remove("hovering");
    nearestExpr?.classList.add("hovering");
}
function instance($$self, $$props1, $$invalidate) {
    let { workflowId  } = $$props1;
    let workflow;
    if (workflowId) _actionsDefault.default.getWorkflow(workflowId).then((w)=>$$invalidate(0, workflow = w)
    );
    else workflow = {
        kind: "workflow",
        triggers: [
            {
                kind: "trigger"
            }
        ],
        path: {
            id: 0,
            kind: "path",
            steps: [
                {
                    kind: "action"
                }
            ]
        }
    };
    let history = _svelte.getContext('history');
    let workflowJSON;
    async function saveWorkflow() {
        let newWorkflow = {
            ...workflow,
            lastModifiedAt: new Date().toLocaleString()
        };
        if (workflow.id) $$invalidate(0, workflow = await _actionsDefault.default.updateWorkflow(workflow.id, newWorkflow));
        else {
            $$invalidate(0, workflow = await _actionsDefault.default.createWorkflow(newWorkflow));
            history.pushState(`/workflow/?workflow-id=${workflow.id}`);
        }
    }
    function close() {
        history.pushState('/');
    }
    function input_input_handler() {
        workflow.title = this.value;
        $$invalidate(0, workflow);
    }
    $$self.$$set = ($$props)=>{
        if ('workflowId' in $$props) $$invalidate(3, workflowId = $$props.workflowId);
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*workflow*/ 1) $: _svelte.setContext("parents", [
            workflow
        ]);
        if ($$self.$$.dirty & /*workflow*/ 1) $: workflowJSON = JSON.stringify(workflow || null, null, 2);
    };
    return [
        workflow,
        saveWorkflow,
        close,
        workflowId,
        input_input_handler
    ];
}
class Workflow extends _internal.SvelteComponent {
    constructor(options){
        super();
        _internal.init(this, options, instance, create_fragment, _internal.safe_not_equal, {
            workflowId: 3
        }, add_css);
    }
}
exports.default = Workflow;

},{"svelte/internal":"iVhnC","./actions":"aoyHM","./Path.svelte":"7uIm4","./Triggers.svelte":"89hkt","svelte":"4r74h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"7uIm4":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* src/components/pages/editor/Path.svelte generated by Svelte v3.48.0 */ var _internal = require("svelte/internal");
var _nodeSvelte = require("./Node.svelte");
var _nodeSvelteDefault = parcelHelpers.interopDefault(_nodeSvelte);
var _forkSvelte = require("./Fork.svelte");
var _forkSvelteDefault = parcelHelpers.interopDefault(_forkSvelte);
var _addStepSvelte = require("./AddStep.svelte");
var _addStepSvelteDefault = parcelHelpers.interopDefault(_addStepSvelte);
var _svelte = require("svelte");
function add_css(target) {
    _internal.append_styles(target, "svelte-1k8u9kl", ".path.svelte-1k8u9kl.svelte-1k8u9kl{display:flex;flex-direction:column;align-items:center;text-align:center;padding:20px 5px;padding-top:20px;border:.5px solid black;border-radius:10px;margin:5px;position:relative;background-color:#fafafa;z-index:1;min-width:50px}.svg-path.svelte-1k8u9kl.svelte-1k8u9kl{position:absolute;left:50%;top:0;z-index:-10;width:10px;overflow:visible}.add-node-btn.svelte-1k8u9kl.svelte-1k8u9kl{background-color:white;border:2px solid black;border-radius:1000px;color:black;margin:15px;font-weight:400;width:60px;height:60px;font-size:60px;position:relative;cursor:pointer}.hovering.svelte-1k8u9kl.svelte-1k8u9kl{border:3px solid lightblue;padding:17.5px 2.5px}.add-step.svelte-1k8u9kl.svelte-1k8u9kl{display:none}.hovering.svelte-1k8u9kl>.add-step.svelte-1k8u9kl{display:block}");
}
function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[11] = list[i];
    child_ctx[13] = i;
    return child_ctx;
}
// (62:35) 
function create_if_block_1(ctx1) {
    let fork;
    let current;
    fork = new _forkSvelteDefault.default({
        props: {
            def: /*step*/ ctx1[11]
        }
    });
    return {
        c () {
            _internal.create_component(fork.$$.fragment);
        },
        m (target, anchor) {
            _internal.mount_component(fork, target, anchor);
            current = true;
        },
        p (ctx, dirty) {
            const fork_changes = {};
            if (dirty & /*def*/ 1) fork_changes.def = /*step*/ ctx[11];
            fork.$set(fork_changes);
        },
        i (local) {
            if (current) return;
            _internal.transition_in(fork.$$.fragment, local);
            current = true;
        },
        o (local) {
            _internal.transition_out(fork.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            _internal.destroy_component(fork, detaching);
        }
    };
}
// (60:4) {#if step.kind === "action"}
function create_if_block(ctx) {
    let node;
    let current;
    function remove_handler() {
        return /*remove_handler*/ ctx[6](/*stepIndex*/ ctx[13]);
    }
    node = new _nodeSvelteDefault.default({
        props: {
            def: /*step*/ ctx[11]
        }
    });
    node.$on("remove", remove_handler);
    return {
        c () {
            _internal.create_component(node.$$.fragment);
        },
        m (target, anchor) {
            _internal.mount_component(node, target, anchor);
            current = true;
        },
        p (new_ctx, dirty) {
            ctx = new_ctx;
            const node_changes = {};
            if (dirty & /*def*/ 1) node_changes.def = /*step*/ ctx[11];
            node.$set(node_changes);
        },
        i (local) {
            if (current) return;
            _internal.transition_in(node.$$.fragment, local);
            current = true;
        },
        o (local) {
            _internal.transition_out(node.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            _internal.destroy_component(node, detaching);
        }
    };
}
// (59:2) {#each def.steps as step, stepIndex}
function create_each_block(ctx2) {
    let current_block_type_index;
    let if_block;
    let t;
    let div;
    let addstep;
    let current;
    const if_block_creators = [
        create_if_block,
        create_if_block_1
    ];
    const if_blocks = [];
    function select_block_type(ctx, dirty) {
        if (/*step*/ ctx[11].kind === "action") return 0;
        if (/*step*/ ctx[11].kind === "fork") return 1;
        return -1;
    }
    if (~(current_block_type_index = select_block_type(ctx2, -1))) if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
    function select_handler_1(...args) {
        return /*select_handler_1*/ ctx2[7](/*stepIndex*/ ctx2[13], ...args);
    }
    addstep = new _addStepSvelteDefault.default({
        props: {
            kind: "path"
        }
    });
    addstep.$on("select", select_handler_1);
    return {
        c () {
            if (if_block) if_block.c();
            t = _internal.space();
            div = _internal.element("div");
            _internal.create_component(addstep.$$.fragment);
            _internal.attr(div, "class", "add-step svelte-1k8u9kl");
        },
        m (target, anchor) {
            if (~current_block_type_index) if_blocks[current_block_type_index].m(target, anchor);
            _internal.insert(target, t, anchor);
            _internal.insert(target, div, anchor);
            _internal.mount_component(addstep, div, null);
            current = true;
        },
        p (new_ctx, dirty) {
            ctx2 = new_ctx;
            let previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx2, dirty);
            if (current_block_type_index === previous_block_index) {
                if (~current_block_type_index) if_blocks[current_block_type_index].p(ctx2, dirty);
            } else {
                if (if_block) {
                    _internal.group_outros();
                    _internal.transition_out(if_blocks[previous_block_index], 1, 1, ()=>{
                        if_blocks[previous_block_index] = null;
                    });
                    _internal.check_outros();
                }
                if (~current_block_type_index) {
                    if_block = if_blocks[current_block_type_index];
                    if (!if_block) {
                        if_block = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
                        if_block.c();
                    } else if_block.p(ctx2, dirty);
                    _internal.transition_in(if_block, 1);
                    if_block.m(t.parentNode, t);
                } else if_block = null;
            }
        },
        i (local) {
            if (current) return;
            _internal.transition_in(if_block);
            _internal.transition_in(addstep.$$.fragment, local);
            current = true;
        },
        o (local) {
            _internal.transition_out(if_block);
            _internal.transition_out(addstep.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (~current_block_type_index) if_blocks[current_block_type_index].d(detaching);
            if (detaching) _internal.detach(t);
            if (detaching) _internal.detach(div);
            _internal.destroy_component(addstep);
        }
    };
}
function create_fragment(ctx3) {
    let div1;
    let div0;
    let addstep;
    let t0;
    let t1;
    let svg;
    let path;
    let div1_class_value;
    let current;
    addstep = new _addStepSvelteDefault.default({
        props: {
            kind: "path"
        }
    });
    addstep.$on("select", /*select_handler*/ ctx3[5]);
    let each_value = /*def*/ ctx3[0].steps;
    let each_blocks = [];
    for(let i1 = 0; i1 < each_value.length; i1 += 1)each_blocks[i1] = create_each_block(get_each_context(ctx3, each_value, i1));
    const out = (i)=>_internal.transition_out(each_blocks[i], 1, 1, ()=>{
            each_blocks[i] = null;
        })
    ;
    return {
        c () {
            div1 = _internal.element("div");
            div0 = _internal.element("div");
            _internal.create_component(addstep.$$.fragment);
            t0 = _internal.space();
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].c();
            t1 = _internal.space();
            svg = _internal.svg_element("svg");
            path = _internal.svg_element("path");
            _internal.attr(div0, "class", "add-step svelte-1k8u9kl");
            _internal.attr(path, "fill", "none");
            _internal.attr(path, "stroke", "black");
            _internal.attr(path, "d", /*pathDef*/ ctx3[2]);
            _internal.attr(svg, "class", "svg-path svelte-1k8u9kl");
            _internal.attr(svg, "viewBox", "0 0 10 10");
            _internal.attr(svg, "xmlns", "http://www.w3.org/2000/svg");
            _internal.attr(svg, "stroke-width", "2.5");
            _internal.attr(svg, "stroke-linecap", "round");
            _internal.attr(div1, "class", div1_class_value = "path hover-target  svelte-1k8u9kl");
        },
        m (target, anchor) {
            _internal.insert(target, div1, anchor);
            _internal.append(div1, div0);
            _internal.mount_component(addstep, div0, null);
            _internal.append(div1, t0);
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].m(div1, null);
            _internal.append(div1, t1);
            _internal.append(div1, svg);
            _internal.append(svg, path);
            /*div1_binding*/ ctx3[8](div1);
            current = true;
        },
        p (ctx, [dirty]) {
            if (dirty & /*addStep, def, removeStep*/ 25) {
                each_value = /*def*/ ctx[0].steps;
                let i;
                for(i = 0; i < each_value.length; i += 1){
                    const child_ctx = get_each_context(ctx, each_value, i);
                    if (each_blocks[i]) {
                        each_blocks[i].p(child_ctx, dirty);
                        _internal.transition_in(each_blocks[i], 1);
                    } else {
                        each_blocks[i] = create_each_block(child_ctx);
                        each_blocks[i].c();
                        _internal.transition_in(each_blocks[i], 1);
                        each_blocks[i].m(div1, t1);
                    }
                }
                _internal.group_outros();
                for(i = each_value.length; i < each_blocks.length; i += 1)out(i);
                _internal.check_outros();
            }
            if (!current || dirty & /*pathDef*/ 4) _internal.attr(path, "d", /*pathDef*/ ctx[2]);
        },
        i (local) {
            if (current) return;
            _internal.transition_in(addstep.$$.fragment, local);
            for(let i = 0; i < each_value.length; i += 1)_internal.transition_in(each_blocks[i]);
            current = true;
        },
        o (local) {
            _internal.transition_out(addstep.$$.fragment, local);
            each_blocks = each_blocks.filter(Boolean);
            for(let i = 0; i < each_blocks.length; i += 1)_internal.transition_out(each_blocks[i]);
            current = false;
        },
        d (detaching) {
            if (detaching) _internal.detach(div1);
            _internal.destroy_component(addstep);
            _internal.destroy_each(each_blocks, detaching);
            /*div1_binding*/ ctx3[8](null);
        }
    };
}
function instance($$self, $$props1, $$invalidate) {
    let { def  } = $$props1;
    let parents = _svelte.getContext("parents");
    _svelte.setContext("parents", [
        ...parents,
        def
    ]);
    function addStep(kind, stepIndex) {
        if (kind === "action") def.steps.splice(stepIndex, 0, {
            kind: "action"
        });
        else if (kind === "fork") {
            let followingSteps = def.steps.splice(stepIndex);
            const newStep = {
                kind,
                paths: [
                    {
                        kind: "path",
                        steps: followingSteps
                    },
                    {
                        kind: "path",
                        steps: [
                            {
                                kind: "action"
                            }
                        ]
                    }
                ]
            };
            def.steps.push(newStep);
        }
        $$invalidate(0, def);
    }
    let rootEl;
    let pathDef = '';
    let resizeObserver = new ResizeObserver(()=>$$invalidate(2, pathDef = `M 0 1 v ${rootEl?.offsetHeight - 3}`)
    );
    _svelte.onDestroy(()=>{
        resizeObserver.disconnect();
    });
    function removeStep(stepIndex) {
        def.steps.splice(stepIndex, 1);
        $$invalidate(0, def);
    }
    const select_handler = (e)=>addStep(e.detail.kind, 0)
    ;
    const remove_handler = (stepIndex)=>removeStep(stepIndex)
    ;
    const select_handler_1 = (stepIndex, e)=>addStep(e.detail.kind, stepIndex + 1)
    ;
    function div1_binding($$value) {
        _internal.binding_callbacks[$$value ? 'unshift' : 'push'](()=>{
            rootEl = $$value;
            $$invalidate(1, rootEl);
        });
    }
    $$self.$$set = ($$props)=>{
        if ('def' in $$props) $$invalidate(0, def = $$props.def);
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*rootEl*/ 2) {
            $: if (rootEl) resizeObserver.observe(rootEl);
        }
    };
    return [
        def,
        rootEl,
        pathDef,
        addStep,
        removeStep,
        select_handler,
        remove_handler,
        select_handler_1,
        div1_binding
    ];
}
class Path extends _internal.SvelteComponent {
    constructor(options){
        super();
        _internal.init(this, options, instance, create_fragment, _internal.safe_not_equal, {
            def: 0
        }, add_css);
    }
}
exports.default = Path;

},{"svelte/internal":"iVhnC","./Node.svelte":"3Xmpa","./Fork.svelte":"3eLBP","./AddStep.svelte":"4eWFG","svelte":"4r74h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3Xmpa":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* src/components/pages/editor/Node.svelte generated by Svelte v3.48.0 */ var _internal = require("svelte/internal");
var _nodeEditorSvelte = require("./NodeEditor.svelte");
var _nodeEditorSvelteDefault = parcelHelpers.interopDefault(_nodeEditorSvelte);
var _svelte = require("svelte");
var _actions = require("./actions");
var _actionsDefault = parcelHelpers.interopDefault(_actions);
var _colors = require("./colors");
function add_css(target) {
    _internal.append_styles(target, "svelte-co8fod", ".node.svelte-co8fod{background-color:black;padding:50px;border-radius:1000px;color:white;margin:15px;position:relative;cursor:pointer;box-shadow:black 0px 1px 6px -3px;filter:brightness(1.1)\r\n  }.node-name.svelte-co8fod{background-color:#f9f9f9;padding:0 7px;position:absolute;color:black;font-size:14px;left:50%;top:50%;transform:translate(-50%, -50%);border-radius:5px;white-space:nowrap;box-shadow:black 0px 1px 7px -4px}.svg-path.svelte-co8fod{position:absolute;left:30px;top:30px;z-index:-10;width:10px;overflow:visible}.hovering.svelte-co8fod{border:3px solid lightblue;padding:47px}");
}
function create_fragment(ctx) {
    let div1;
    let div0;
    let t0;
    let t1;
    let nodeeditor;
    let updating_open;
    let div1_class_value;
    let current;
    let mounted;
    let dispose;
    function nodeeditor_open_binding(value) {
        /*nodeeditor_open_binding*/ ctx[6](value);
    }
    let nodeeditor_props = {
        def: /*def*/ ctx[0],
        rootEl: /*self*/ ctx[1]
    };
    if (/*openEditor*/ ctx[2] !== void 0) nodeeditor_props.open = /*openEditor*/ ctx[2];
    nodeeditor = new _nodeEditorSvelteDefault.default({
        props: nodeeditor_props
    });
    _internal.binding_callbacks.push(()=>_internal.bind(nodeeditor, 'open', nodeeditor_open_binding)
    );
    nodeeditor.$on("change-type", /*change_type_handler*/ ctx[7]);
    nodeeditor.$on("remove", /*remove_handler*/ ctx[8]);
    return {
        c () {
            div1 = _internal.element("div");
            div0 = _internal.element("div");
            t0 = _internal.text(/*displayName*/ ctx[3]);
            t1 = _internal.space();
            _internal.create_component(nodeeditor.$$.fragment);
            _internal.attr(div0, "class", "node-name svelte-co8fod");
            _internal.attr(div1, "class", div1_class_value = "node hover-target  svelte-co8fod");
            _internal.set_style(div1, "background-color", _colors.pickColor(/*displayName*/ ctx[3]));
        },
        m (target, anchor) {
            _internal.insert(target, div1, anchor);
            _internal.append(div1, div0);
            _internal.append(div0, t0);
            _internal.append(div1, t1);
            _internal.mount_component(nodeeditor, div1, null);
            /*div1_binding*/ ctx[9](div1);
            current = true;
            if (!mounted) {
                dispose = _internal.listen(div1, "click", function() {
                    if (_internal.is_function(/*openEditor*/ ctx[2])) /*openEditor*/ ctx[2].apply(this, arguments);
                });
                mounted = true;
            }
        },
        p (new_ctx, [dirty]) {
            ctx = new_ctx;
            if (!current || dirty & /*displayName*/ 8) _internal.set_data(t0, /*displayName*/ ctx[3]);
            const nodeeditor_changes = {};
            if (dirty & /*def*/ 1) nodeeditor_changes.def = /*def*/ ctx[0];
            if (dirty & /*self*/ 2) nodeeditor_changes.rootEl = /*self*/ ctx[1];
            if (!updating_open && dirty & /*openEditor*/ 4) {
                updating_open = true;
                nodeeditor_changes.open = /*openEditor*/ ctx[2];
                _internal.add_flush_callback(()=>updating_open = false
                );
            }
            nodeeditor.$set(nodeeditor_changes);
            if (!current || dirty & /*displayName*/ 8) _internal.set_style(div1, "background-color", _colors.pickColor(/*displayName*/ ctx[3]));
        },
        i (local) {
            if (current) return;
            _internal.transition_in(nodeeditor.$$.fragment, local);
            current = true;
        },
        o (local) {
            _internal.transition_out(nodeeditor.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) _internal.detach(div1);
            _internal.destroy_component(nodeeditor);
            /*div1_binding*/ ctx[9](null);
            mounted = false;
            dispose();
        }
    };
}
function instance($$self, $$props1, $$invalidate) {
    let { def  } = $$props1;
    let { kind  } = $$props1;
    let parents = _svelte.getContext("parents") || [];
    _svelte.setContext("parents", [
        ...parents,
        def
    ]);
    let self;
    let openEditor;
    let displayName;
    let nodeTypeDefs;
    _actionsDefault.default.getMetadata().then((m)=>{
        if (kind === "trigger") nodeTypeDefs = m.eventDefs;
        else nodeTypeDefs = m.actionDefs;
        setDisplayName(def?.type);
    });
    function setDisplayName(actionType) {
        let actionDef = nodeTypeDefs?.find((a)=>a.type === actionType
        );
        $$invalidate(3, displayName = actionDef?.title || "?");
    }
    function nodeeditor_open_binding(value) {
        openEditor = value;
        $$invalidate(2, openEditor);
    }
    const change_type_handler = (e)=>setDisplayName(e.detail)
    ;
    function remove_handler(event) {
        _internal.bubble.call(this, $$self, event);
    }
    function div1_binding($$value) {
        _internal.binding_callbacks[$$value ? 'unshift' : 'push'](()=>{
            self = $$value;
            $$invalidate(1, self);
        });
    }
    $$self.$$set = ($$props)=>{
        if ('def' in $$props) $$invalidate(0, def = $$props.def);
        if ('kind' in $$props) $$invalidate(5, kind = $$props.kind);
    };
    return [
        def,
        self,
        openEditor,
        displayName,
        setDisplayName,
        kind,
        nodeeditor_open_binding,
        change_type_handler,
        remove_handler,
        div1_binding
    ];
}
class Node extends _internal.SvelteComponent {
    constructor(options){
        super();
        _internal.init(this, options, instance, create_fragment, _internal.safe_not_equal, {
            def: 0,
            kind: 5
        }, add_css);
    }
}
exports.default = Node;

},{"svelte/internal":"iVhnC","./NodeEditor.svelte":"hiiW8","svelte":"4r74h","./actions":"aoyHM","./colors":"6sko3","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"hiiW8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* src/components/pages/editor/NodeEditor.svelte generated by Svelte v3.48.0 */ var _internal = require("svelte/internal");
var _svelte = require("svelte");
var _portalSvelte = require("../../utils/Portal.svelte");
var _portalSvelteDefault = parcelHelpers.interopDefault(_portalSvelte);
var _actions = require("./actions");
var _actionsDefault = parcelHelpers.interopDefault(_actions);
var _expressionSvelte = require("./expressions/Expression.svelte");
var _expressionSvelteDefault = parcelHelpers.interopDefault(_expressionSvelte);
function add_css(target) {
    _internal.append_styles(target, "svelte-1lo1iva", ".action-editor.svelte-1lo1iva.svelte-1lo1iva{position:absolute;left:60px;transform:translateY(-50%);background-color:#fafafa;border:.5px solid black;min-width:300px;max-width:500px;width:max-content;z-index:15;border-radius:4px;cursor:default;color:black;text-align:initial;padding:15px;box-shadow:0px 3px 10px -10px}.actions.svelte-1lo1iva.svelte-1lo1iva{position:absolute;top:5px;right:5px}.section-header.svelte-1lo1iva.svelte-1lo1iva{font-size:20px;font-weight:700}.inputs-area.svelte-1lo1iva.svelte-1lo1iva{display:table}.input.svelte-1lo1iva.svelte-1lo1iva{display:table-row}.input.svelte-1lo1iva>div.svelte-1lo1iva{display:table-cell;vertical-align:top;padding-top:5px;padding-bottom:5px}.input-label.svelte-1lo1iva.svelte-1lo1iva{padding-right:10px;font-weight:700}select.svelte-1lo1iva.svelte-1lo1iva{padding:3px 7px;border-radius:2px}");
}
function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[19] = list[i].inputName;
    child_ctx[20] = list[i].inputDef;
    return child_ctx;
}
function get_each_context_1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[23] = list[i];
    return child_ctx;
}
function get_each_context_2(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[26] = list[i];
    return child_ctx;
}
// (85:0) {#if showEditor}
function create_if_block(ctx1) {
    let portal;
    let current;
    portal = new _portalSvelteDefault.default({
        props: {
            target: "#action-editor-portal",
            $$slots: {
                default: [
                    create_default_slot
                ]
            },
            $$scope: {
                ctx: ctx1
            }
        }
    });
    return {
        c () {
            _internal.create_component(portal.$$.fragment);
        },
        m (target, anchor) {
            _internal.mount_component(portal, target, anchor);
            current = true;
        },
        p (ctx, dirty) {
            const portal_changes = {};
            if (dirty & /*$$scope, editorEl, actionInputDefs, def, actionType, metadata, closeBtn*/ 536871031) portal_changes.$$scope = {
                dirty,
                ctx
            };
            portal.$set(portal_changes);
        },
        i (local) {
            if (current) return;
            _internal.transition_in(portal.$$.fragment, local);
            current = true;
        },
        o (local) {
            _internal.transition_out(portal.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            _internal.destroy_component(portal, detaching);
        }
    };
}
// (102:6) {#if def.kind === "action"}
function create_if_block_5(ctx2) {
    let div1;
    let label;
    let div0;
    let t1;
    let select;
    let option;
    let t2;
    let mounted;
    let dispose;
    let if_block = /*metadata*/ ctx2[1] && create_if_block_6(ctx2);
    return {
        c () {
            div1 = _internal.element("div");
            label = _internal.element("label");
            div0 = _internal.element("div");
            div0.textContent = "Action";
            t1 = _internal.space();
            select = _internal.element("select");
            option = _internal.element("option");
            t2 = _internal.text("Select");
            if (if_block) if_block.c();
            _internal.attr(div0, "class", "section-header svelte-1lo1iva");
            option.__value = undefined;
            option.value = option.__value;
            option.disabled = true;
            _internal.attr(select, "class", "svelte-1lo1iva");
            if (/*def*/ ctx2[0].type === void 0) _internal.add_render_callback(()=>/*select_change_handler*/ ctx2[14].call(select)
            );
        },
        m (target, anchor) {
            _internal.insert(target, div1, anchor);
            _internal.append(div1, label);
            _internal.append(label, div0);
            _internal.append(label, t1);
            _internal.append(label, select);
            _internal.append(select, option);
            _internal.append(option, t2);
            if (if_block) if_block.m(select, null);
            _internal.select_option(select, /*def*/ ctx2[0].type);
            if (!mounted) {
                dispose = _internal.listen(select, "change", /*select_change_handler*/ ctx2[14]);
                mounted = true;
            }
        },
        p (ctx, dirty) {
            if (/*metadata*/ ctx[1]) {
                if (if_block) if_block.p(ctx, dirty);
                else {
                    if_block = create_if_block_6(ctx);
                    if_block.c();
                    if_block.m(select, null);
                }
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
            if (dirty & /*def, metadata, undefined*/ 3) _internal.select_option(select, /*def*/ ctx[0].type);
        },
        d (detaching) {
            if (detaching) _internal.detach(div1);
            if (if_block) if_block.d();
            mounted = false;
            dispose();
        }
    };
}
// (108:14) {#if metadata}
function create_if_block_6(ctx3) {
    let each_1_anchor;
    let each_value_2 = /*metadata*/ ctx3[1].actionDefs;
    let each_blocks = [];
    for(let i1 = 0; i1 < each_value_2.length; i1 += 1)each_blocks[i1] = create_each_block_2(get_each_context_2(ctx3, each_value_2, i1));
    return {
        c () {
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].c();
            each_1_anchor = _internal.empty();
        },
        m (target, anchor) {
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].m(target, anchor);
            _internal.insert(target, each_1_anchor, anchor);
        },
        p (ctx, dirty) {
            if (dirty & /*metadata*/ 2) {
                each_value_2 = /*metadata*/ ctx[1].actionDefs;
                let i;
                for(i = 0; i < each_value_2.length; i += 1){
                    const child_ctx = get_each_context_2(ctx, each_value_2, i);
                    if (each_blocks[i]) each_blocks[i].p(child_ctx, dirty);
                    else {
                        each_blocks[i] = create_each_block_2(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
                    }
                }
                for(; i < each_blocks.length; i += 1)each_blocks[i].d(1);
                each_blocks.length = each_value_2.length;
            }
        },
        d (detaching) {
            _internal.destroy_each(each_blocks, detaching);
            if (detaching) _internal.detach(each_1_anchor);
        }
    };
}
// (109:16) {#each metadata.actionDefs as actionDef}
function create_each_block_2(ctx4) {
    let option;
    let t_value = /*actionDef*/ ctx4[26].title + "";
    let t;
    let option_value_value;
    return {
        c () {
            option = _internal.element("option");
            t = _internal.text(t_value);
            option.__value = option_value_value = /*actionDef*/ ctx4[26].type;
            option.value = option.__value;
        },
        m (target, anchor) {
            _internal.insert(target, option, anchor);
            _internal.append(option, t);
        },
        p (ctx, dirty) {
            if (dirty & /*metadata*/ 2 && t_value !== (t_value = /*actionDef*/ ctx[26].title + "")) _internal.set_data(t, t_value);
            if (dirty & /*metadata*/ 2 && option_value_value !== (option_value_value = /*actionDef*/ ctx[26].type)) {
                option.__value = option_value_value;
                option.value = option.__value;
            }
        },
        d (detaching) {
            if (detaching) _internal.detach(option);
        }
    };
}
// (117:6) {#if def.kind === "trigger"}
function create_if_block_3(ctx5) {
    let div1;
    let label;
    let div0;
    let t1;
    let select;
    let option;
    let t2;
    let mounted;
    let dispose;
    let if_block = /*metadata*/ ctx5[1] && create_if_block_4(ctx5);
    return {
        c () {
            div1 = _internal.element("div");
            label = _internal.element("label");
            div0 = _internal.element("div");
            div0.textContent = "Trigger";
            t1 = _internal.space();
            select = _internal.element("select");
            option = _internal.element("option");
            t2 = _internal.text("Select");
            if (if_block) if_block.c();
            _internal.attr(div0, "class", "section-header svelte-1lo1iva");
            option.__value = undefined;
            option.value = option.__value;
            option.disabled = true;
            _internal.attr(select, "class", "svelte-1lo1iva");
            if (/*def*/ ctx5[0].type === void 0) _internal.add_render_callback(()=>/*select_change_handler_1*/ ctx5[15].call(select)
            );
        },
        m (target, anchor) {
            _internal.insert(target, div1, anchor);
            _internal.append(div1, label);
            _internal.append(label, div0);
            _internal.append(label, t1);
            _internal.append(label, select);
            _internal.append(select, option);
            _internal.append(option, t2);
            if (if_block) if_block.m(select, null);
            _internal.select_option(select, /*def*/ ctx5[0].type);
            if (!mounted) {
                dispose = _internal.listen(select, "change", /*select_change_handler_1*/ ctx5[15]);
                mounted = true;
            }
        },
        p (ctx, dirty) {
            if (/*metadata*/ ctx[1]) {
                if (if_block) if_block.p(ctx, dirty);
                else {
                    if_block = create_if_block_4(ctx);
                    if_block.c();
                    if_block.m(select, null);
                }
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
            if (dirty & /*def, metadata, undefined*/ 3) _internal.select_option(select, /*def*/ ctx[0].type);
        },
        d (detaching) {
            if (detaching) _internal.detach(div1);
            if (if_block) if_block.d();
            mounted = false;
            dispose();
        }
    };
}
// (123:14) {#if metadata}
function create_if_block_4(ctx6) {
    let each_1_anchor;
    let each_value_1 = /*metadata*/ ctx6[1].eventDefs;
    let each_blocks = [];
    for(let i2 = 0; i2 < each_value_1.length; i2 += 1)each_blocks[i2] = create_each_block_1(get_each_context_1(ctx6, each_value_1, i2));
    return {
        c () {
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].c();
            each_1_anchor = _internal.empty();
        },
        m (target, anchor) {
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].m(target, anchor);
            _internal.insert(target, each_1_anchor, anchor);
        },
        p (ctx, dirty) {
            if (dirty & /*metadata*/ 2) {
                each_value_1 = /*metadata*/ ctx[1].eventDefs;
                let i;
                for(i = 0; i < each_value_1.length; i += 1){
                    const child_ctx = get_each_context_1(ctx, each_value_1, i);
                    if (each_blocks[i]) each_blocks[i].p(child_ctx, dirty);
                    else {
                        each_blocks[i] = create_each_block_1(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
                    }
                }
                for(; i < each_blocks.length; i += 1)each_blocks[i].d(1);
                each_blocks.length = each_value_1.length;
            }
        },
        d (detaching) {
            _internal.destroy_each(each_blocks, detaching);
            if (detaching) _internal.detach(each_1_anchor);
        }
    };
}
// (124:16) {#each metadata.eventDefs as eventDef}
function create_each_block_1(ctx7) {
    let option;
    let t_value = /*eventDef*/ ctx7[23].title + "";
    let t;
    let option_value_value;
    return {
        c () {
            option = _internal.element("option");
            t = _internal.text(t_value);
            option.__value = option_value_value = /*eventDef*/ ctx7[23].type;
            option.value = option.__value;
        },
        m (target, anchor) {
            _internal.insert(target, option, anchor);
            _internal.append(option, t);
        },
        p (ctx, dirty) {
            if (dirty & /*metadata*/ 2 && t_value !== (t_value = /*eventDef*/ ctx[23].title + "")) _internal.set_data(t, t_value);
            if (dirty & /*metadata*/ 2 && option_value_value !== (option_value_value = /*eventDef*/ ctx[23].type)) {
                option.__value = option_value_value;
                option.value = option.__value;
            }
        },
        d (detaching) {
            if (detaching) _internal.detach(option);
        }
    };
}
// (132:6) {#if def.type && def.kind === "action"}
function create_if_block_1(ctx8) {
    let hr;
    let t0;
    let div2;
    let div0;
    let t2;
    let div1;
    let current;
    let if_block = /*actionType*/ ctx8[2] && create_if_block_2(ctx8);
    return {
        c () {
            hr = _internal.element("hr");
            t0 = _internal.space();
            div2 = _internal.element("div");
            div0 = _internal.element("div");
            div0.textContent = "Inputs";
            t2 = _internal.space();
            div1 = _internal.element("div");
            if (if_block) if_block.c();
            _internal.attr(div0, "class", "section-header svelte-1lo1iva");
            _internal.attr(div1, "class", "inputs-area svelte-1lo1iva");
            _internal.attr(div2, "class", "inputs-section");
        },
        m (target, anchor) {
            _internal.insert(target, hr, anchor);
            _internal.insert(target, t0, anchor);
            _internal.insert(target, div2, anchor);
            _internal.append(div2, div0);
            _internal.append(div2, t2);
            _internal.append(div2, div1);
            if (if_block) if_block.m(div1, null);
            current = true;
        },
        p (ctx, dirty) {
            if (/*actionType*/ ctx[2]) {
                if (if_block) {
                    if_block.p(ctx, dirty);
                    if (dirty & /*actionType*/ 4) _internal.transition_in(if_block, 1);
                } else {
                    if_block = create_if_block_2(ctx);
                    if_block.c();
                    _internal.transition_in(if_block, 1);
                    if_block.m(div1, null);
                }
            } else if (if_block) {
                _internal.group_outros();
                _internal.transition_out(if_block, 1, 1, ()=>{
                    if_block = null;
                });
                _internal.check_outros();
            }
        },
        i (local) {
            if (current) return;
            _internal.transition_in(if_block);
            current = true;
        },
        o (local) {
            _internal.transition_out(if_block);
            current = false;
        },
        d (detaching) {
            if (detaching) _internal.detach(hr);
            if (detaching) _internal.detach(t0);
            if (detaching) _internal.detach(div2);
            if (if_block) if_block.d();
        }
    };
}
// (137:12) {#if actionType}
function create_if_block_2(ctx9) {
    let each_1_anchor;
    let current;
    let each_value = /*actionInputDefs*/ ctx9[6];
    let each_blocks = [];
    for(let i3 = 0; i3 < each_value.length; i3 += 1)each_blocks[i3] = create_each_block(get_each_context(ctx9, each_value, i3));
    const out = (i)=>_internal.transition_out(each_blocks[i], 1, 1, ()=>{
            each_blocks[i] = null;
        })
    ;
    return {
        c () {
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].c();
            each_1_anchor = _internal.empty();
        },
        m (target, anchor) {
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].m(target, anchor);
            _internal.insert(target, each_1_anchor, anchor);
            current = true;
        },
        p (ctx, dirty) {
            if (dirty & /*def, actionInputDefs*/ 65) {
                each_value = /*actionInputDefs*/ ctx[6];
                let i;
                for(i = 0; i < each_value.length; i += 1){
                    const child_ctx = get_each_context(ctx, each_value, i);
                    if (each_blocks[i]) {
                        each_blocks[i].p(child_ctx, dirty);
                        _internal.transition_in(each_blocks[i], 1);
                    } else {
                        each_blocks[i] = create_each_block(child_ctx);
                        each_blocks[i].c();
                        _internal.transition_in(each_blocks[i], 1);
                        each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
                    }
                }
                _internal.group_outros();
                for(i = each_value.length; i < each_blocks.length; i += 1)out(i);
                _internal.check_outros();
            }
        },
        i (local) {
            if (current) return;
            for(let i = 0; i < each_value.length; i += 1)_internal.transition_in(each_blocks[i]);
            current = true;
        },
        o (local) {
            each_blocks = each_blocks.filter(Boolean);
            for(let i = 0; i < each_blocks.length; i += 1)_internal.transition_out(each_blocks[i]);
            current = false;
        },
        d (detaching) {
            _internal.destroy_each(each_blocks, detaching);
            if (detaching) _internal.detach(each_1_anchor);
        }
    };
}
// (138:14) {#each actionInputDefs as { inputName, inputDef }}
function create_each_block(ctx10) {
    let div3;
    let div0;
    let t0_value = /*inputDef*/ (ctx10[20].title || /*inputName*/ ctx10[19]) + "";
    let t0;
    let t1;
    let div2;
    let div1;
    let expression;
    let t2;
    let current;
    expression = new _expressionSvelteDefault.default({
        props: {
            def: /*def*/ ctx10[0].inputs[/*inputName*/ ctx10[19]]
        }
    });
    return {
        c () {
            div3 = _internal.element("div");
            div0 = _internal.element("div");
            t0 = _internal.text(t0_value);
            t1 = _internal.space();
            div2 = _internal.element("div");
            div1 = _internal.element("div");
            _internal.create_component(expression.$$.fragment);
            t2 = _internal.space();
            _internal.attr(div0, "class", "input-label svelte-1lo1iva");
            _internal.attr(div1, "class", "input-value");
            _internal.attr(div2, "class", "svelte-1lo1iva");
            _internal.attr(div3, "class", "input svelte-1lo1iva");
        },
        m (target, anchor) {
            _internal.insert(target, div3, anchor);
            _internal.append(div3, div0);
            _internal.append(div0, t0);
            _internal.append(div3, t1);
            _internal.append(div3, div2);
            _internal.append(div2, div1);
            _internal.mount_component(expression, div1, null);
            _internal.append(div3, t2);
            current = true;
        },
        p (ctx, dirty) {
            if ((!current || dirty & /*actionInputDefs*/ 64) && t0_value !== (t0_value = /*inputDef*/ (ctx[20].title || /*inputName*/ ctx[19]) + "")) _internal.set_data(t0, t0_value);
            const expression_changes = {};
            if (dirty & /*def, actionInputDefs*/ 65) expression_changes.def = /*def*/ ctx[0].inputs[/*inputName*/ ctx[19]];
            expression.$set(expression_changes);
        },
        i (local) {
            if (current) return;
            _internal.transition_in(expression.$$.fragment, local);
            current = true;
        },
        o (local) {
            _internal.transition_out(expression.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) _internal.detach(div3);
            _internal.destroy_component(expression);
        }
    };
}
// (86:2) <Portal target="#action-editor-portal">
function create_default_slot(ctx11) {
    let div1;
    let div0;
    let button0;
    let t1;
    let button1;
    let t3;
    let t4;
    let t5;
    let current;
    let mounted;
    let dispose;
    let if_block0 = /*def*/ ctx11[0].kind === "action" && create_if_block_5(ctx11);
    let if_block1 = /*def*/ ctx11[0].kind === "trigger" && create_if_block_3(ctx11);
    let if_block2 = /*def*/ ctx11[0].type && /*def*/ ctx11[0].kind === "action" && create_if_block_1(ctx11);
    return {
        c () {
            div1 = _internal.element("div");
            div0 = _internal.element("div");
            button0 = _internal.element("button");
            button0.textContent = "Remove";
            t1 = _internal.space();
            button1 = _internal.element("button");
            button1.textContent = "Close";
            t3 = _internal.space();
            if (if_block0) if_block0.c();
            t4 = _internal.space();
            if (if_block1) if_block1.c();
            t5 = _internal.space();
            if (if_block2) if_block2.c();
            _internal.attr(button0, "type", "button");
            _internal.attr(button1, "type", "button");
            _internal.attr(div0, "class", "actions svelte-1lo1iva");
            _internal.attr(div1, "class", "action-editor svelte-1lo1iva");
        },
        m (target, anchor) {
            _internal.insert(target, div1, anchor);
            _internal.append(div1, div0);
            _internal.append(div0, button0);
            _internal.append(div0, t1);
            _internal.append(div0, button1);
            /*button1_binding*/ ctx11[13](button1);
            _internal.append(div1, t3);
            if (if_block0) if_block0.m(div1, null);
            _internal.append(div1, t4);
            if (if_block1) if_block1.m(div1, null);
            _internal.append(div1, t5);
            if (if_block2) if_block2.m(div1, null);
            /*div1_binding*/ ctx11[16](div1);
            current = true;
            if (!mounted) {
                dispose = _internal.listen(button0, "click", /*removeNode*/ ctx11[8]);
                mounted = true;
            }
        },
        p (ctx, dirty) {
            if (/*def*/ ctx[0].kind === "action") {
                if (if_block0) if_block0.p(ctx, dirty);
                else {
                    if_block0 = create_if_block_5(ctx);
                    if_block0.c();
                    if_block0.m(div1, t4);
                }
            } else if (if_block0) {
                if_block0.d(1);
                if_block0 = null;
            }
            if (/*def*/ ctx[0].kind === "trigger") {
                if (if_block1) if_block1.p(ctx, dirty);
                else {
                    if_block1 = create_if_block_3(ctx);
                    if_block1.c();
                    if_block1.m(div1, t5);
                }
            } else if (if_block1) {
                if_block1.d(1);
                if_block1 = null;
            }
            if (/*def*/ ctx[0].type && /*def*/ ctx[0].kind === "action") {
                if (if_block2) {
                    if_block2.p(ctx, dirty);
                    if (dirty & /*def*/ 1) _internal.transition_in(if_block2, 1);
                } else {
                    if_block2 = create_if_block_1(ctx);
                    if_block2.c();
                    _internal.transition_in(if_block2, 1);
                    if_block2.m(div1, null);
                }
            } else if (if_block2) {
                _internal.group_outros();
                _internal.transition_out(if_block2, 1, 1, ()=>{
                    if_block2 = null;
                });
                _internal.check_outros();
            }
        },
        i (local) {
            if (current) return;
            _internal.transition_in(if_block2);
            current = true;
        },
        o (local) {
            _internal.transition_out(if_block2);
            current = false;
        },
        d (detaching) {
            if (detaching) _internal.detach(div1);
            /*button1_binding*/ ctx11[13](null);
            if (if_block0) if_block0.d();
            if (if_block1) if_block1.d();
            if (if_block2) if_block2.d();
            /*div1_binding*/ ctx11[16](null);
            mounted = false;
            dispose();
        }
    };
}
function create_fragment(ctx12) {
    let if_block_anchor;
    let current;
    let mounted;
    let dispose;
    let if_block = /*showEditor*/ ctx12[3] && create_if_block(ctx12);
    return {
        c () {
            if (if_block) if_block.c();
            if_block_anchor = _internal.empty();
        },
        m (target, anchor) {
            if (if_block) if_block.m(target, anchor);
            _internal.insert(target, if_block_anchor, anchor);
            current = true;
            if (!mounted) {
                dispose = _internal.listen(window, "click", /*handleGlobalClick*/ ctx12[7]);
                mounted = true;
            }
        },
        p (ctx, [dirty]) {
            if (/*showEditor*/ ctx[3]) {
                if (if_block) {
                    if_block.p(ctx, dirty);
                    if (dirty & /*showEditor*/ 8) _internal.transition_in(if_block, 1);
                } else {
                    if_block = create_if_block(ctx);
                    if_block.c();
                    _internal.transition_in(if_block, 1);
                    if_block.m(if_block_anchor.parentNode, if_block_anchor);
                }
            } else if (if_block) {
                _internal.group_outros();
                _internal.transition_out(if_block, 1, 1, ()=>{
                    if_block = null;
                });
                _internal.check_outros();
            }
        },
        i (local) {
            if (current) return;
            _internal.transition_in(if_block);
            current = true;
        },
        o (local) {
            _internal.transition_out(if_block);
            current = false;
        },
        d (detaching) {
            if (if_block) if_block.d(detaching);
            if (detaching) _internal.detach(if_block_anchor);
            mounted = false;
            dispose();
        }
    };
}
let closeOthers = ()=>null
;
function instance($$self, $$props1, $$invalidate) {
    let actionInputs;
    let actionInputDefs;
    let { def  } = $$props1;
    let { rootEl  } = $$props1;
    const dispatch = _svelte.createEventDispatcher();
    let metadata;
    _svelte.onMount(async ()=>{
        $$invalidate(0, def.inputs = def.inputs || {}, def);
        $$invalidate(1, metadata = await _actionsDefault.default.getMetadata());
    });
    let actionType;
    function setInputs() {
        if (!actionType?.inputSchema.properties) return;
        const inputs = {};
        for(let key in actionType?.inputSchema.properties || [])inputs[key] = def.inputs[key] || {
            kind: "expression"
        };
        $$invalidate(0, def.inputs = inputs, def);
    }
    let showEditor = false;
    let editorEl;
    const open = ()=>{
        if (!showEditor) {
            closeOthers();
            closeOthers = close;
            $$invalidate(3, showEditor = true);
        }
    };
    const close = ()=>{
        if (showEditor) $$invalidate(3, showEditor = false);
    };
    let closeBtn;
    function handleGlobalClick(e) {
        if (showEditor && e.target.isConnected && !rootEl.contains(e.target) && !editorEl.contains(e.target) || e.target === closeBtn) close();
    }
    function removeNode() {
        dispatch('remove');
        close();
    }
    function button1_binding($$value) {
        _internal.binding_callbacks[$$value ? 'unshift' : 'push'](()=>{
            closeBtn = $$value;
            $$invalidate(5, closeBtn);
        });
    }
    function select_change_handler() {
        def.type = _internal.select_value(this);
        $$invalidate(0, def);
        $$invalidate(1, metadata);
    }
    function select_change_handler_1() {
        def.type = _internal.select_value(this);
        $$invalidate(0, def);
        $$invalidate(1, metadata);
    }
    function div1_binding($$value) {
        _internal.binding_callbacks[$$value ? 'unshift' : 'push'](()=>{
            editorEl = $$value;
            $$invalidate(4, editorEl);
        });
    }
    $$self.$$set = ($$props)=>{
        if ('def' in $$props) $$invalidate(0, def = $$props.def);
        if ('rootEl' in $$props) $$invalidate(9, rootEl = $$props.rootEl);
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*def*/ 1) {
            $: if (def?.type) dispatch("change-type", def.type);
        }
        if ($$self.$$.dirty & /*metadata, def*/ 3) $: {
            $$invalidate(2, actionType = metadata?.actionDefs.find((d)=>d.type === def.type
            ));
            setInputs();
        }
        if ($$self.$$.dirty & /*actionType*/ 4) $: $$invalidate(12, actionInputs = Object.keys(actionType?.inputSchema.properties || {}));
        if ($$self.$$.dirty & /*actionInputs, actionType*/ 4100) $: $$invalidate(6, actionInputDefs = actionInputs.map((k)=>({
                inputName: k,
                inputDef: actionType.inputSchema.properties[k]
            })
        ));
    };
    return [
        def,
        metadata,
        actionType,
        showEditor,
        editorEl,
        closeBtn,
        actionInputDefs,
        handleGlobalClick,
        removeNode,
        rootEl,
        open,
        close,
        actionInputs,
        button1_binding,
        select_change_handler,
        select_change_handler_1,
        div1_binding
    ];
}
class NodeEditor extends _internal.SvelteComponent {
    constructor(options){
        super();
        _internal.init(this, options, instance, create_fragment, _internal.safe_not_equal, {
            def: 0,
            rootEl: 9,
            open: 10,
            close: 11
        }, add_css);
    }
    get open() {
        return this.$$.ctx[10];
    }
    get close() {
        return this.$$.ctx[11];
    }
}
exports.default = NodeEditor;

},{"svelte/internal":"iVhnC","svelte":"4r74h","../../utils/Portal.svelte":"lvQI8","./actions":"aoyHM","./expressions/Expression.svelte":"8NXYK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"lvQI8":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "portal", ()=>portal
);
/* src/components/utils/Portal.svelte generated by Svelte v3.48.0 */ var _internal = require("svelte/internal");
var _svelte = require("svelte");
function create_fragment(ctx1) {
    let div1;
    let div0;
    let portal_action;
    let current;
    let mounted;
    let dispose;
    const default_slot_template = /*#slots*/ ctx1[2].default;
    const default_slot = _internal.create_slot(default_slot_template, ctx1, /*$$scope*/ ctx1[1], null);
    return {
        c () {
            div1 = _internal.element("div");
            div0 = _internal.element("div");
            if (default_slot) default_slot.c();
            div0.hidden = true;
        },
        m (target, anchor) {
            _internal.insert(target, div1, anchor);
            _internal.append(div1, div0);
            if (default_slot) default_slot.m(div0, null);
            current = true;
            if (!mounted) {
                dispose = _internal.action_destroyer(portal_action = portal.call(null, div1, /*target*/ ctx1[0]));
                mounted = true;
            }
        },
        p (ctx, [dirty]) {
            if (default_slot) {
                if (default_slot.p && (!current || dirty & /*$$scope*/ 2)) _internal.update_slot_base(default_slot, default_slot_template, ctx, /*$$scope*/ ctx[1], !current ? _internal.get_all_dirty_from_scope(/*$$scope*/ ctx[1]) : _internal.get_slot_changes(default_slot_template, /*$$scope*/ ctx[1], dirty, null), null);
            }
            if (portal_action && _internal.is_function(portal_action.update) && dirty & /*target*/ 1) portal_action.update.call(null, /*target*/ ctx[0]);
        },
        i (local) {
            if (current) return;
            _internal.transition_in(default_slot, local);
            current = true;
        },
        o (local) {
            _internal.transition_out(default_slot, local);
            current = false;
        },
        d (detaching) {
            if (detaching) _internal.detach(div1);
            if (default_slot) default_slot.d(detaching);
            mounted = false;
            dispose();
        }
    };
}
function portal(originEl, target = "body") {
    let el = originEl.children[0];
    let targetEl;
    async function update(newTarget) {
        target = newTarget;
        if (typeof target === "string") {
            targetEl = document.querySelector(target);
            if (targetEl === null) {
                await _svelte.tick();
                targetEl = document.querySelector(target);
            }
            if (targetEl === null) throw new Error(`No element found matching css selector: "${target}"`);
        } else if (target instanceof HTMLElement) targetEl = target;
        else throw new TypeError(`Unknown portal target type: ${target === null ? "null" : typeof target}. Allowed types: string (CSS selector) or HTMLElement.`);
        targetEl.appendChild(el);
        el.hidden = false;
    }
    function destroy() {
        if (el.parentNode) el.parentNode.removeChild(el);
    }
    let absOriginDim = getDimensions(originEl);
    el.setAttribute("style", `position: absolute; left: ${absOriginDim.offsetLeft}px; top: ${absOriginDim.offsetTop}px;`);
    update(target);
    return {
        update,
        destroy
    };
}
function getDimensions(el) {
    let { offsetTop , offsetLeft  } = el;
    if (el.offsetParent) {
        let parentDimensions = getDimensions(el.offsetParent);
        offsetTop += parentDimensions.offsetTop;
        offsetLeft += parentDimensions.offsetLeft;
    }
    return {
        offsetTop,
        offsetLeft
    };
}
function instance($$self, $$props1, $$invalidate) {
    let { $$slots: slots = {} , $$scope  } = $$props1;
    let { target ="body"  } = $$props1;
    $$self.$$set = ($$props)=>{
        if ('target' in $$props) $$invalidate(0, target = $$props.target);
        if ('$$scope' in $$props) $$invalidate(1, $$scope = $$props.$$scope);
    };
    return [
        target,
        $$scope,
        slots
    ];
}
class Portal extends _internal.SvelteComponent {
    constructor(options){
        super();
        _internal.init(this, options, instance, create_fragment, _internal.safe_not_equal, {
            target: 0
        });
    }
}
exports.default = Portal;

},{"svelte/internal":"iVhnC","svelte":"4r74h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8NXYK":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* src/components/pages/editor/expressions/Expression.svelte generated by Svelte v3.48.0 */ var _internal = require("svelte/internal");
var _expressions = require("./expressions");
var _expressionsDefault = parcelHelpers.interopDefault(_expressions);
var _expressionSelectorSvelte = require("./ExpressionSelector.svelte");
var _expressionSelectorSvelteDefault = parcelHelpers.interopDefault(_expressionSelectorSvelte);
function add_css(target) {
    _internal.append_styles(target, "svelte-1h74l6v", ".empty-expression.svelte-1h74l6v.svelte-1h74l6v{background-color:white;display:block;min-width:70px;min-height:24px;border:1px solid black;border-radius:3px}.expression-root.svelte-1h74l6v.svelte-1h74l6v{position:relative}.remove-btn.svelte-1h74l6v.svelte-1h74l6v{position:absolute;top:0;transform:translate(-50%, -100%);left:50%;display:none}.hovering.svelte-1h74l6v>.remove-btn.svelte-1h74l6v{display:block}");
}
// (35:2) {:else}
function create_else_block(ctx) {
    let div;
    let mounted;
    let dispose;
    return {
        c () {
            div = _internal.element("div");
            _internal.attr(div, "class", "empty-expression svelte-1h74l6v");
        },
        m (target, anchor) {
            _internal.insert(target, div, anchor);
            if (!mounted) {
                dispose = _internal.listen(div, "click", function() {
                    if (_internal.is_function(/*openSelector*/ ctx[3])) /*openSelector*/ ctx[3].apply(this, arguments);
                });
                mounted = true;
            }
        },
        p (new_ctx, dirty) {
            ctx = new_ctx;
        },
        i: _internal.noop,
        o: _internal.noop,
        d (detaching) {
            if (detaching) _internal.detach(div);
            mounted = false;
            dispose();
        }
    };
}
// (33:2) {#if expression}
function create_if_block_1(ctx1) {
    let switch_instance;
    let switch_instance_anchor;
    let current;
    var switch_value = /*expression*/ ctx1[1].component;
    function switch_props(ctx) {
        return {
            props: {
                def: /*def*/ ctx[0]
            }
        };
    }
    if (switch_value) switch_instance = new switch_value(switch_props(ctx1));
    return {
        c () {
            if (switch_instance) _internal.create_component(switch_instance.$$.fragment);
            switch_instance_anchor = _internal.empty();
        },
        m (target, anchor) {
            if (switch_instance) _internal.mount_component(switch_instance, target, anchor);
            _internal.insert(target, switch_instance_anchor, anchor);
            current = true;
        },
        p (ctx, dirty) {
            const switch_instance_changes = {};
            if (dirty & /*def*/ 1) switch_instance_changes.def = /*def*/ ctx[0];
            if (switch_value !== (switch_value = /*expression*/ ctx[1].component)) {
                if (switch_instance) {
                    _internal.group_outros();
                    const old_component = switch_instance;
                    _internal.transition_out(old_component.$$.fragment, 1, 0, ()=>{
                        _internal.destroy_component(old_component, 1);
                    });
                    _internal.check_outros();
                }
                if (switch_value) {
                    switch_instance = new switch_value(switch_props(ctx));
                    _internal.create_component(switch_instance.$$.fragment);
                    _internal.transition_in(switch_instance.$$.fragment, 1);
                    _internal.mount_component(switch_instance, switch_instance_anchor.parentNode, switch_instance_anchor);
                } else switch_instance = null;
            } else if (switch_value) switch_instance.$set(switch_instance_changes);
        },
        i (local) {
            if (current) return;
            if (switch_instance) _internal.transition_in(switch_instance.$$.fragment, local);
            current = true;
        },
        o (local) {
            if (switch_instance) _internal.transition_out(switch_instance.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) _internal.detach(switch_instance_anchor);
            if (switch_instance) _internal.destroy_component(switch_instance, detaching);
        }
    };
}
// (45:2) {#if expression}
function create_if_block(ctx) {
    let div;
    let button;
    let mounted;
    let dispose;
    return {
        c () {
            div = _internal.element("div");
            button = _internal.element("button");
            button.textContent = "Remove";
            _internal.attr(button, "type", "button");
            _internal.attr(div, "class", "remove-btn svelte-1h74l6v");
        },
        m (target, anchor) {
            _internal.insert(target, div, anchor);
            _internal.append(div, button);
            if (!mounted) {
                dispose = _internal.listen(button, "click", /*remove*/ ctx[5]);
                mounted = true;
            }
        },
        p: _internal.noop,
        d (detaching) {
            if (detaching) _internal.detach(div);
            mounted = false;
            dispose();
        }
    };
}
function create_fragment(ctx2) {
    let div;
    let current_block_type_index;
    let if_block0;
    let t0;
    let expressionselector;
    let updating_open;
    let t1;
    let div_class_value;
    let current;
    const if_block_creators = [
        create_if_block_1,
        create_else_block
    ];
    const if_blocks = [];
    function select_block_type(ctx, dirty) {
        if (/*expression*/ ctx[1]) return 0;
        return 1;
    }
    current_block_type_index = select_block_type(ctx2, -1);
    if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx2);
    function expressionselector_open_binding(value) {
        /*expressionselector_open_binding*/ ctx2[6](value);
    }
    let expressionselector_props = {
        rootEl: /*self*/ ctx2[2]
    };
    if (/*openSelector*/ ctx2[3] !== void 0) expressionselector_props.open = /*openSelector*/ ctx2[3];
    expressionselector = new _expressionSelectorSvelteDefault.default({
        props: expressionselector_props
    });
    _internal.binding_callbacks.push(()=>_internal.bind(expressionselector, 'open', expressionselector_open_binding)
    );
    expressionselector.$on("selection", /*receiveSelection*/ ctx2[4]);
    let if_block1 = /*expression*/ ctx2[1] && create_if_block(ctx2);
    return {
        c () {
            div = _internal.element("div");
            if_block0.c();
            t0 = _internal.space();
            _internal.create_component(expressionselector.$$.fragment);
            t1 = _internal.space();
            if (if_block1) if_block1.c();
            _internal.attr(div, "class", div_class_value = "expression-root hover-target  svelte-1h74l6v");
        },
        m (target, anchor) {
            _internal.insert(target, div, anchor);
            if_blocks[current_block_type_index].m(div, null);
            _internal.append(div, t0);
            _internal.mount_component(expressionselector, div, null);
            _internal.append(div, t1);
            if (if_block1) if_block1.m(div, null);
            /*div_binding*/ ctx2[7](div);
            current = true;
        },
        p (ctx, [dirty]) {
            let previous_block_index = current_block_type_index;
            current_block_type_index = select_block_type(ctx, dirty);
            if (current_block_type_index === previous_block_index) if_blocks[current_block_type_index].p(ctx, dirty);
            else {
                _internal.group_outros();
                _internal.transition_out(if_blocks[previous_block_index], 1, 1, ()=>{
                    if_blocks[previous_block_index] = null;
                });
                _internal.check_outros();
                if_block0 = if_blocks[current_block_type_index];
                if (!if_block0) {
                    if_block0 = if_blocks[current_block_type_index] = if_block_creators[current_block_type_index](ctx);
                    if_block0.c();
                } else if_block0.p(ctx, dirty);
                _internal.transition_in(if_block0, 1);
                if_block0.m(div, t0);
            }
            const expressionselector_changes = {};
            if (dirty & /*self*/ 4) expressionselector_changes.rootEl = /*self*/ ctx[2];
            if (!updating_open && dirty & /*openSelector*/ 8) {
                updating_open = true;
                expressionselector_changes.open = /*openSelector*/ ctx[3];
                _internal.add_flush_callback(()=>updating_open = false
                );
            }
            expressionselector.$set(expressionselector_changes);
            if (/*expression*/ ctx[1]) {
                if (if_block1) if_block1.p(ctx, dirty);
                else {
                    if_block1 = create_if_block(ctx);
                    if_block1.c();
                    if_block1.m(div, null);
                }
            } else if (if_block1) {
                if_block1.d(1);
                if_block1 = null;
            }
        },
        i (local) {
            if (current) return;
            _internal.transition_in(if_block0);
            _internal.transition_in(expressionselector.$$.fragment, local);
            current = true;
        },
        o (local) {
            _internal.transition_out(if_block0);
            _internal.transition_out(expressionselector.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) _internal.detach(div);
            if_blocks[current_block_type_index].d();
            _internal.destroy_component(expressionselector);
            if (if_block1) if_block1.d();
            /*div_binding*/ ctx2[7](null);
        }
    };
}
function instance($$self, $$props1, $$invalidate) {
    let { def  } = $$props1;
    let expression;
    let self;
    let openSelector;
    function receiveSelection(e) {
        // TODO mutate existing value
        $$invalidate(1, expression = e.detail);
        $$invalidate(0, def.type = e.detail.type, def);
    }
    function remove() {
        $$invalidate(0, def.type = undefined, def);
        $$invalidate(0, def.inputs = {}, def);
    }
    function expressionselector_open_binding(value) {
        openSelector = value;
        $$invalidate(3, openSelector);
    }
    function div_binding($$value) {
        _internal.binding_callbacks[$$value ? 'unshift' : 'push'](()=>{
            self = $$value;
            $$invalidate(2, self);
        });
    }
    $$self.$$set = ($$props)=>{
        if ('def' in $$props) $$invalidate(0, def = $$props.def);
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*def, expression*/ 3) {
            $: if (def?.type !== expression?.type) $$invalidate(1, expression = _expressionsDefault.default.categories[0].expressions.find((x)=>x.type === def.type
            ));
        }
    };
    return [
        def,
        expression,
        self,
        openSelector,
        receiveSelection,
        remove,
        expressionselector_open_binding,
        div_binding
    ];
}
class Expression extends _internal.SvelteComponent {
    constructor(options){
        super();
        _internal.init(this, options, instance, create_fragment, _internal.safe_not_equal, {
            def: 0
        }, add_css);
    }
}
exports.default = Expression;

},{"svelte/internal":"iVhnC","./expressions":"L5yrz","./ExpressionSelector.svelte":"kNWhL","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"L5yrz":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
var _actionResultExpressionSvelte = require("./types/ActionResultExpression.svelte");
var _actionResultExpressionSvelteDefault = parcelHelpers.interopDefault(_actionResultExpressionSvelte);
var _textExpressionSvelte = require("./types/TextExpression.svelte");
var _textExpressionSvelteDefault = parcelHelpers.interopDefault(_textExpressionSvelte);
var _numberExpressionSvelte = require("./types/NumberExpression.svelte");
var _numberExpressionSvelteDefault = parcelHelpers.interopDefault(_numberExpressionSvelte);
var _decisionExpressionSvelte = require("./types/DecisionExpression.svelte");
var _decisionExpressionSvelteDefault = parcelHelpers.interopDefault(_decisionExpressionSvelte);
var _conditionExpressionSvelte = require("./types/ConditionExpression.svelte");
var _conditionExpressionSvelteDefault = parcelHelpers.interopDefault(_conditionExpressionSvelte);
var _andOrExpressionSvelte = require("./types/AndOrExpression.svelte");
var _andOrExpressionSvelteDefault = parcelHelpers.interopDefault(_andOrExpressionSvelte);
exports.default = {
    categories: [
        {
            title: "Core",
            expressions: [
                {
                    component: _textExpressionSvelteDefault.default,
                    title: "Text",
                    type: "text"
                },
                {
                    component: _numberExpressionSvelteDefault.default,
                    title: "Number",
                    type: "number"
                },
                {
                    component: _actionResultExpressionSvelteDefault.default,
                    title: "Action Result",
                    type: "action-result"
                },
                {
                    component: _decisionExpressionSvelteDefault.default,
                    title: "Decision",
                    type: "decision"
                },
                {
                    component: _conditionExpressionSvelteDefault.default,
                    title: "Condition",
                    type: "condition"
                },
                {
                    component: _andOrExpressionSvelteDefault.default,
                    title: "AND/OR",
                    type: "and-or"
                }, 
            ]
        }
    ]
};

},{"./types/ActionResultExpression.svelte":"6gYqw","./types/TextExpression.svelte":"1kd4w","./types/NumberExpression.svelte":"8UBqR","./types/DecisionExpression.svelte":"8Z8K5","./types/ConditionExpression.svelte":"eyfIN","./types/AndOrExpression.svelte":"aTBKT","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6gYqw":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* src/components/pages/editor/expressions/types/ActionResultExpression.svelte generated by Svelte v3.48.0 */ var _internal = require("svelte/internal");
var _svelte = require("svelte");
function add_css(target) {
    _internal.append_styles(target, "svelte-60kffc", ".ref-expression.svelte-60kffc{display:flex;flex-direction:row;border:1.75px solid #ff9120;border-radius:2px;flex-wrap:wrap;padding:5px;background-color:rgb(253 246 234);gap:7px 7px}");
}
function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[5] = list[i];
    return child_ctx;
}
// (39:4) {#each prevSteps as prevAction}
function create_each_block(ctx) {
    let option;
    let t_value = /*prevAction*/ ctx[5].type + "";
    let t;
    let option_value_value;
    return {
        c () {
            option = _internal.element("option");
            t = _internal.text(t_value);
            option.__value = option_value_value = /*prevAction*/ ctx[5];
            option.value = option.__value;
        },
        m (target, anchor) {
            _internal.insert(target, option, anchor);
            _internal.append(option, t);
        },
        p: _internal.noop,
        d (detaching) {
            if (detaching) _internal.detach(option);
        }
    };
}
function create_fragment(ctx1) {
    let div1;
    let select0;
    let option0;
    let t0;
    let t1;
    let div0;
    let t3;
    let select1;
    let option1;
    let t4;
    let mounted;
    let dispose;
    let each_value = /*prevSteps*/ ctx1[1];
    let each_blocks = [];
    for(let i1 = 0; i1 < each_value.length; i1 += 1)each_blocks[i1] = create_each_block(get_each_context(ctx1, each_value, i1));
    return {
        c () {
            div1 = _internal.element("div");
            select0 = _internal.element("select");
            option0 = _internal.element("option");
            t0 = _internal.text("Select Action");
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].c();
            t1 = _internal.space();
            div0 = _internal.element("div");
            div0.textContent = "Output:";
            t3 = _internal.space();
            select1 = _internal.element("select");
            option1 = _internal.element("option");
            t4 = _internal.text("Select");
            option0.__value = undefined;
            option0.value = option0.__value;
            if (/*def*/ ctx1[0].settings.actionId === void 0) _internal.add_render_callback(()=>/*select0_change_handler*/ ctx1[2].call(select0)
            );
            option1.__value = undefined;
            option1.value = option1.__value;
            if (/*def*/ ctx1[0].settings.outputName === void 0) _internal.add_render_callback(()=>/*select1_change_handler*/ ctx1[3].call(select1)
            );
            _internal.attr(div1, "class", "ref-expression svelte-60kffc");
        },
        m (target, anchor) {
            _internal.insert(target, div1, anchor);
            _internal.append(div1, select0);
            _internal.append(select0, option0);
            _internal.append(option0, t0);
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].m(select0, null);
            _internal.select_option(select0, /*def*/ ctx1[0].settings.actionId);
            _internal.append(div1, t1);
            _internal.append(div1, div0);
            _internal.append(div1, t3);
            _internal.append(div1, select1);
            _internal.append(select1, option1);
            _internal.append(option1, t4);
            _internal.select_option(select1, /*def*/ ctx1[0].settings.outputName);
            if (!mounted) {
                dispose = [
                    _internal.listen(select0, "change", /*select0_change_handler*/ ctx1[2]),
                    _internal.listen(select1, "change", /*select1_change_handler*/ ctx1[3])
                ];
                mounted = true;
            }
        },
        p (ctx, [dirty]) {
            if (dirty & /*prevSteps*/ 2) {
                each_value = /*prevSteps*/ ctx[1];
                let i;
                for(i = 0; i < each_value.length; i += 1){
                    const child_ctx = get_each_context(ctx, each_value, i);
                    if (each_blocks[i]) each_blocks[i].p(child_ctx, dirty);
                    else {
                        each_blocks[i] = create_each_block(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(select0, null);
                    }
                }
                for(; i < each_blocks.length; i += 1)each_blocks[i].d(1);
                each_blocks.length = each_value.length;
            }
            if (dirty & /*def, prevSteps, undefined*/ 3) _internal.select_option(select0, /*def*/ ctx[0].settings.actionId);
            if (dirty & /*def, prevSteps, undefined*/ 3) _internal.select_option(select1, /*def*/ ctx[0].settings.outputName);
        },
        i: _internal.noop,
        o: _internal.noop,
        d (detaching) {
            if (detaching) _internal.detach(div1);
            _internal.destroy_each(each_blocks, detaching);
            mounted = false;
            _internal.run_all(dispose);
        }
    };
}
function getParentsPreviousSteps(step, parents) {
    let parent = parents.pop();
    if (parent.kind === "workflow") return [];
    if (parent.kind === "path") {
        const stepIndex = parent.steps.indexOf(step);
        let prevSteps = parent.steps.slice(0, stepIndex).filter((x)=>x.kind === "action"
        );
        return [
            ...getParentsPreviousSteps(parent, parents),
            ...prevSteps
        ];
    }
    return getParentsPreviousSteps(parent, parents);
}
function instance($$self, $$props1, $$invalidate) {
    let { def  } = $$props1;
    let parents = [
        ..._svelte.getContext("parents")
    ];
    let prevSteps = getParentsPreviousSteps(parents.pop(), parents).reverse();
    function select0_change_handler() {
        def.settings.actionId = _internal.select_value(this);
        $$invalidate(0, def);
        $$invalidate(1, prevSteps);
    }
    function select1_change_handler() {
        def.settings.outputName = _internal.select_value(this);
        $$invalidate(0, def);
        $$invalidate(1, prevSteps);
    }
    $$self.$$set = ($$props)=>{
        if ('def' in $$props) $$invalidate(0, def = $$props.def);
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*def*/ 1) {
            $: if (!def.settings) $$invalidate(0, def.settings = {
                actionId: null,
                outputName: null
            }, def);
        }
    };
    return [
        def,
        prevSteps,
        select0_change_handler,
        select1_change_handler
    ];
}
class ActionResultExpression extends _internal.SvelteComponent {
    constructor(options){
        super();
        _internal.init(this, options, instance, create_fragment, _internal.safe_not_equal, {
            def: 0
        }, add_css);
    }
}
exports.default = ActionResultExpression;

},{"svelte/internal":"iVhnC","svelte":"4r74h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"1kd4w":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* src/components/pages/editor/expressions/types/TextExpression.svelte generated by Svelte v3.48.0 */ var _internal = require("svelte/internal");
function add_css(target) {
    _internal.append_styles(target, "svelte-1qidylm", "input.svelte-1qidylm{background-color:rgb(243 243 251);border:1.75px solid rgb(38, 38, 205);border-radius:2px}");
}
function create_fragment(ctx1) {
    let input;
    let mounted;
    let dispose;
    return {
        c () {
            input = _internal.element("input");
            _internal.attr(input, "type", "text");
            _internal.attr(input, "class", "svelte-1qidylm");
        },
        m (target, anchor) {
            _internal.insert(target, input, anchor);
            _internal.set_input_value(input, /*def*/ ctx1[0].inputs.value);
            if (!mounted) {
                dispose = _internal.listen(input, "input", /*input_input_handler*/ ctx1[1]);
                mounted = true;
            }
        },
        p (ctx, [dirty]) {
            if (dirty & /*def*/ 1 && input.value !== /*def*/ ctx[0].inputs.value) _internal.set_input_value(input, /*def*/ ctx[0].inputs.value);
        },
        i: _internal.noop,
        o: _internal.noop,
        d (detaching) {
            if (detaching) _internal.detach(input);
            mounted = false;
            dispose();
        }
    };
}
function instance($$self, $$props1, $$invalidate) {
    let { def  } = $$props1;
    function input_input_handler() {
        def.inputs.value = this.value;
        $$invalidate(0, def);
    }
    $$self.$$set = ($$props)=>{
        if ('def' in $$props) $$invalidate(0, def = $$props.def);
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*def*/ 1) {
            $: if (!def.inputs) $$invalidate(0, def.inputs = {
                value: null
            }, def);
        }
    };
    return [
        def,
        input_input_handler
    ];
}
class TextExpression extends _internal.SvelteComponent {
    constructor(options){
        super();
        _internal.init(this, options, instance, create_fragment, _internal.safe_not_equal, {
            def: 0
        }, add_css);
    }
}
exports.default = TextExpression;

},{"svelte/internal":"iVhnC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8UBqR":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* src/components/pages/editor/expressions/types/NumberExpression.svelte generated by Svelte v3.48.0 */ var _internal = require("svelte/internal");
function add_css(target) {
    _internal.append_styles(target, "svelte-1nlw00k", "input.svelte-1nlw00k{background-color:rgb(255 255 236);border:1.75px solid rgb(194, 194, 19);border-radius:2px}");
}
function create_fragment(ctx1) {
    let input;
    let mounted;
    let dispose;
    return {
        c () {
            input = _internal.element("input");
            _internal.attr(input, "type", "number");
            _internal.attr(input, "class", "svelte-1nlw00k");
        },
        m (target, anchor) {
            _internal.insert(target, input, anchor);
            _internal.set_input_value(input, /*def*/ ctx1[0].inputs.value);
            if (!mounted) {
                dispose = _internal.listen(input, "input", /*input_input_handler*/ ctx1[1]);
                mounted = true;
            }
        },
        p (ctx, [dirty]) {
            if (dirty & /*def*/ 1 && _internal.to_number(input.value) !== /*def*/ ctx[0].inputs.value) _internal.set_input_value(input, /*def*/ ctx[0].inputs.value);
        },
        i: _internal.noop,
        o: _internal.noop,
        d (detaching) {
            if (detaching) _internal.detach(input);
            mounted = false;
            dispose();
        }
    };
}
function instance($$self, $$props1, $$invalidate) {
    let { def  } = $$props1;
    function input_input_handler() {
        def.inputs.value = _internal.to_number(this.value);
        $$invalidate(0, def);
    }
    $$self.$$set = ($$props)=>{
        if ('def' in $$props) $$invalidate(0, def = $$props.def);
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*def*/ 1) {
            $: if (!def.inputs) $$invalidate(0, def.inputs = {
                value: null
            }, def);
        }
    };
    return [
        def,
        input_input_handler
    ];
}
class NumberExpression extends _internal.SvelteComponent {
    constructor(options){
        super();
        _internal.init(this, options, instance, create_fragment, _internal.safe_not_equal, {
            def: 0
        }, add_css);
    }
}
exports.default = NumberExpression;

},{"svelte/internal":"iVhnC","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"8Z8K5":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* src/components/pages/editor/expressions/types/DecisionExpression.svelte generated by Svelte v3.48.0 */ var _internal = require("svelte/internal");
var _expressionSvelte = require("../Expression.svelte");
var _expressionSvelteDefault = parcelHelpers.interopDefault(_expressionSvelte);
function add_css(target) {
    _internal.append_styles(target, "svelte-1bbmcy0", ".decision-expression.svelte-1bbmcy0.svelte-1bbmcy0{display:flex;flex-direction:row;border:1.75px solid rgb(129, 70, 255);flex-wrap:wrap;padding:7px;background-color:rgb(243 237 255);gap:7px 7px;border-radius:2px}.decision-expression.svelte-1bbmcy0>div.svelte-1bbmcy0{display:flex;flex-direction:row;flex-wrap:nowrap;gap:7px 7px}");
}
function create_fragment(ctx1) {
    let div9;
    let div2;
    let div0;
    let t1;
    let div1;
    let expression0;
    let t2;
    let div5;
    let div3;
    let t4;
    let div4;
    let expression1;
    let t5;
    let div8;
    let div6;
    let t7;
    let div7;
    let expression2;
    let current;
    expression0 = new _expressionSvelteDefault.default({
        props: {
            def: /*def*/ ctx1[0].inputs.condition
        }
    });
    expression1 = new _expressionSvelteDefault.default({
        props: {
            def: /*def*/ ctx1[0].inputs.trueValue
        }
    });
    expression2 = new _expressionSvelteDefault.default({
        props: {
            def: /*def*/ ctx1[0].inputs.falseValue
        }
    });
    return {
        c () {
            div9 = _internal.element("div");
            div2 = _internal.element("div");
            div0 = _internal.element("div");
            div0.textContent = "If";
            t1 = _internal.space();
            div1 = _internal.element("div");
            _internal.create_component(expression0.$$.fragment);
            t2 = _internal.space();
            div5 = _internal.element("div");
            div3 = _internal.element("div");
            div3.textContent = "Then";
            t4 = _internal.space();
            div4 = _internal.element("div");
            _internal.create_component(expression1.$$.fragment);
            t5 = _internal.space();
            div8 = _internal.element("div");
            div6 = _internal.element("div");
            div6.textContent = "Else";
            t7 = _internal.space();
            div7 = _internal.element("div");
            _internal.create_component(expression2.$$.fragment);
            _internal.attr(div2, "class", "svelte-1bbmcy0");
            _internal.attr(div5, "class", "svelte-1bbmcy0");
            _internal.attr(div8, "class", "svelte-1bbmcy0");
            _internal.attr(div9, "class", "decision-expression svelte-1bbmcy0");
        },
        m (target, anchor) {
            _internal.insert(target, div9, anchor);
            _internal.append(div9, div2);
            _internal.append(div2, div0);
            _internal.append(div2, t1);
            _internal.append(div2, div1);
            _internal.mount_component(expression0, div1, null);
            _internal.append(div9, t2);
            _internal.append(div9, div5);
            _internal.append(div5, div3);
            _internal.append(div5, t4);
            _internal.append(div5, div4);
            _internal.mount_component(expression1, div4, null);
            _internal.append(div9, t5);
            _internal.append(div9, div8);
            _internal.append(div8, div6);
            _internal.append(div8, t7);
            _internal.append(div8, div7);
            _internal.mount_component(expression2, div7, null);
            current = true;
        },
        p (ctx, [dirty]) {
            const expression0_changes = {};
            if (dirty & /*def*/ 1) expression0_changes.def = /*def*/ ctx[0].inputs.condition;
            expression0.$set(expression0_changes);
            const expression1_changes = {};
            if (dirty & /*def*/ 1) expression1_changes.def = /*def*/ ctx[0].inputs.trueValue;
            expression1.$set(expression1_changes);
            const expression2_changes = {};
            if (dirty & /*def*/ 1) expression2_changes.def = /*def*/ ctx[0].inputs.falseValue;
            expression2.$set(expression2_changes);
        },
        i (local) {
            if (current) return;
            _internal.transition_in(expression0.$$.fragment, local);
            _internal.transition_in(expression1.$$.fragment, local);
            _internal.transition_in(expression2.$$.fragment, local);
            current = true;
        },
        o (local) {
            _internal.transition_out(expression0.$$.fragment, local);
            _internal.transition_out(expression1.$$.fragment, local);
            _internal.transition_out(expression2.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) _internal.detach(div9);
            _internal.destroy_component(expression0);
            _internal.destroy_component(expression1);
            _internal.destroy_component(expression2);
        }
    };
}
function instance($$self, $$props1, $$invalidate) {
    let { def  } = $$props1;
    $$self.$$set = ($$props)=>{
        if ('def' in $$props) $$invalidate(0, def = $$props.def);
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*def*/ 1) {
            $: if (!def.inputs) $$invalidate(0, def.inputs = {
                condition: {
                    kind: "expression"
                },
                trueValue: {
                    kind: "expression"
                },
                falseValue: {
                    kind: "expression"
                }
            }, def);
        }
    };
    return [
        def
    ];
}
class DecisionExpression extends _internal.SvelteComponent {
    constructor(options){
        super();
        _internal.init(this, options, instance, create_fragment, _internal.safe_not_equal, {
            def: 0
        }, add_css);
    }
}
exports.default = DecisionExpression;

},{"svelte/internal":"iVhnC","../Expression.svelte":"8NXYK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"eyfIN":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* src/components/pages/editor/expressions/types/ConditionExpression.svelte generated by Svelte v3.48.0 */ var _internal = require("svelte/internal");
var _expressionSvelte = require("../Expression.svelte");
var _expressionSvelteDefault = parcelHelpers.interopDefault(_expressionSvelte);
function add_css(target) {
    _internal.append_styles(target, "svelte-tbrw02", ".condition-expression.svelte-tbrw02{display:flex;flex-direction:row;border:1.75px solid rgb(129, 70, 255);flex-wrap:wrap;padding:7px;background-color:rgb(243 237 255);gap:7px 7px;border-radius:2px}");
}
function create_fragment(ctx1) {
    let div2;
    let div0;
    let expression0;
    let t0;
    let select;
    let option0;
    let option1;
    let option2;
    let t4;
    let div1;
    let expression1;
    let current;
    let mounted;
    let dispose;
    expression0 = new _expressionSvelteDefault.default({
        props: {
            def: /*def*/ ctx1[0].inputs.firstValue
        }
    });
    expression1 = new _expressionSvelteDefault.default({
        props: {
            def: /*def*/ ctx1[0].inputs.secondValue
        }
    });
    return {
        c () {
            div2 = _internal.element("div");
            div0 = _internal.element("div");
            _internal.create_component(expression0.$$.fragment);
            t0 = _internal.space();
            select = _internal.element("select");
            option0 = _internal.element("option");
            option0.textContent = "Equals";
            option1 = _internal.element("option");
            option1.textContent = "Is Less Than";
            option2 = _internal.element("option");
            option2.textContent = "Is Greater Than";
            t4 = _internal.space();
            div1 = _internal.element("div");
            _internal.create_component(expression1.$$.fragment);
            option0.__value = "==";
            option0.value = option0.__value;
            option1.__value = "<";
            option1.value = option1.__value;
            option2.__value = ">";
            option2.value = option2.__value;
            if (/*def*/ ctx1[0].settings.conditionType === void 0) _internal.add_render_callback(()=>/*select_change_handler*/ ctx1[1].call(select)
            );
            _internal.attr(div2, "class", "condition-expression svelte-tbrw02");
        },
        m (target, anchor) {
            _internal.insert(target, div2, anchor);
            _internal.append(div2, div0);
            _internal.mount_component(expression0, div0, null);
            _internal.append(div2, t0);
            _internal.append(div2, select);
            _internal.append(select, option0);
            _internal.append(select, option1);
            _internal.append(select, option2);
            _internal.select_option(select, /*def*/ ctx1[0].settings.conditionType);
            _internal.append(div2, t4);
            _internal.append(div2, div1);
            _internal.mount_component(expression1, div1, null);
            current = true;
            if (!mounted) {
                dispose = _internal.listen(select, "change", /*select_change_handler*/ ctx1[1]);
                mounted = true;
            }
        },
        p (ctx, [dirty]) {
            const expression0_changes = {};
            if (dirty & /*def*/ 1) expression0_changes.def = /*def*/ ctx[0].inputs.firstValue;
            expression0.$set(expression0_changes);
            if (dirty & /*def*/ 1) _internal.select_option(select, /*def*/ ctx[0].settings.conditionType);
            const expression1_changes = {};
            if (dirty & /*def*/ 1) expression1_changes.def = /*def*/ ctx[0].inputs.secondValue;
            expression1.$set(expression1_changes);
        },
        i (local) {
            if (current) return;
            _internal.transition_in(expression0.$$.fragment, local);
            _internal.transition_in(expression1.$$.fragment, local);
            current = true;
        },
        o (local) {
            _internal.transition_out(expression0.$$.fragment, local);
            _internal.transition_out(expression1.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) _internal.detach(div2);
            _internal.destroy_component(expression0);
            _internal.destroy_component(expression1);
            mounted = false;
            dispose();
        }
    };
}
function instance($$self, $$props1, $$invalidate) {
    let { def  } = $$props1;
    function select_change_handler() {
        def.settings.conditionType = _internal.select_value(this);
        $$invalidate(0, def);
    }
    $$self.$$set = ($$props)=>{
        if ('def' in $$props) $$invalidate(0, def = $$props.def);
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*def*/ 1) $: {
            if (!def.inputs) $$invalidate(0, def.inputs = {
                firstValue: {
                    kind: "expression"
                },
                secondValue: {
                    kind: "expression"
                }
            }, def);
            if (!def.settings) $$invalidate(0, def.settings = {
                conditionType: "=="
            }, def);
        }
    };
    return [
        def,
        select_change_handler
    ];
}
class ConditionExpression extends _internal.SvelteComponent {
    constructor(options){
        super();
        _internal.init(this, options, instance, create_fragment, _internal.safe_not_equal, {
            def: 0
        }, add_css);
    }
}
exports.default = ConditionExpression;

},{"svelte/internal":"iVhnC","../Expression.svelte":"8NXYK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aTBKT":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* src/components/pages/editor/expressions/types/AndOrExpression.svelte generated by Svelte v3.48.0 */ var _internal = require("svelte/internal");
var _expressionSvelte = require("../Expression.svelte");
var _expressionSvelteDefault = parcelHelpers.interopDefault(_expressionSvelte);
function add_css(target) {
    _internal.append_styles(target, "svelte-1vig6ia", ".and-or-expression.svelte-1vig6ia{display:flex;flex-direction:row;border:1.75px solid rgb(129, 70, 255);flex-wrap:wrap;padding:7px;background-color:rgb(243 237 255);gap:7px 7px;border-radius:2px}");
}
function create_fragment(ctx1) {
    let div2;
    let div0;
    let expression0;
    let t0;
    let select;
    let option0;
    let option1;
    let t3;
    let div1;
    let expression1;
    let current;
    let mounted;
    let dispose;
    expression0 = new _expressionSvelteDefault.default({
        props: {
            def: /*def*/ ctx1[0].inputs.firstCondition
        }
    });
    expression1 = new _expressionSvelteDefault.default({
        props: {
            def: /*def*/ ctx1[0].inputs.secondCondition
        }
    });
    return {
        c () {
            div2 = _internal.element("div");
            div0 = _internal.element("div");
            _internal.create_component(expression0.$$.fragment);
            t0 = _internal.space();
            select = _internal.element("select");
            option0 = _internal.element("option");
            option0.textContent = "AND";
            option1 = _internal.element("option");
            option1.textContent = "OR";
            t3 = _internal.space();
            div1 = _internal.element("div");
            _internal.create_component(expression1.$$.fragment);
            option0.__value = "and";
            option0.value = option0.__value;
            option1.__value = "or";
            option1.value = option1.__value;
            if (/*def*/ ctx1[0].settings.conditionGroupType === void 0) _internal.add_render_callback(()=>/*select_change_handler*/ ctx1[1].call(select)
            );
            _internal.attr(div2, "class", "and-or-expression svelte-1vig6ia");
        },
        m (target, anchor) {
            _internal.insert(target, div2, anchor);
            _internal.append(div2, div0);
            _internal.mount_component(expression0, div0, null);
            _internal.append(div2, t0);
            _internal.append(div2, select);
            _internal.append(select, option0);
            _internal.append(select, option1);
            _internal.select_option(select, /*def*/ ctx1[0].settings.conditionGroupType);
            _internal.append(div2, t3);
            _internal.append(div2, div1);
            _internal.mount_component(expression1, div1, null);
            current = true;
            if (!mounted) {
                dispose = _internal.listen(select, "change", /*select_change_handler*/ ctx1[1]);
                mounted = true;
            }
        },
        p (ctx, [dirty]) {
            const expression0_changes = {};
            if (dirty & /*def*/ 1) expression0_changes.def = /*def*/ ctx[0].inputs.firstCondition;
            expression0.$set(expression0_changes);
            if (dirty & /*def*/ 1) _internal.select_option(select, /*def*/ ctx[0].settings.conditionGroupType);
            const expression1_changes = {};
            if (dirty & /*def*/ 1) expression1_changes.def = /*def*/ ctx[0].inputs.secondCondition;
            expression1.$set(expression1_changes);
        },
        i (local) {
            if (current) return;
            _internal.transition_in(expression0.$$.fragment, local);
            _internal.transition_in(expression1.$$.fragment, local);
            current = true;
        },
        o (local) {
            _internal.transition_out(expression0.$$.fragment, local);
            _internal.transition_out(expression1.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) _internal.detach(div2);
            _internal.destroy_component(expression0);
            _internal.destroy_component(expression1);
            mounted = false;
            dispose();
        }
    };
}
function instance($$self, $$props1, $$invalidate) {
    let { def  } = $$props1;
    function select_change_handler() {
        def.settings.conditionGroupType = _internal.select_value(this);
        $$invalidate(0, def);
    }
    $$self.$$set = ($$props)=>{
        if ('def' in $$props) $$invalidate(0, def = $$props.def);
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*def*/ 1) $: {
            if (!def.inputs) $$invalidate(0, def.inputs = {
                firstCondition: {
                    kind: "expression"
                },
                secondCondition: {
                    kind: "expression"
                }
            }, def);
            if (!def.settings) $$invalidate(0, def.settings = {
                conditionGroupType: "and"
            }, def);
        }
    };
    return [
        def,
        select_change_handler
    ];
}
class AndOrExpression extends _internal.SvelteComponent {
    constructor(options){
        super();
        _internal.init(this, options, instance, create_fragment, _internal.safe_not_equal, {
            def: 0
        }, add_css);
    }
}
exports.default = AndOrExpression;

},{"svelte/internal":"iVhnC","../Expression.svelte":"8NXYK","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"kNWhL":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* src/components/pages/editor/expressions/ExpressionSelector.svelte generated by Svelte v3.48.0 */ var _internal = require("svelte/internal");
var _svelte = require("svelte");
var _expressions = require("./expressions");
var _expressionsDefault = parcelHelpers.interopDefault(_expressions);
function add_css(target) {
    _internal.append_styles(target, "svelte-1czul97", ".expression-selector.svelte-1czul97.svelte-1czul97{position:absolute;top:calc(100% + 10px);left:calc(50%);transform:translateX(-50%);background-color:#fafafa;border:.5px solid black;min-width:400px;z-index:15;border-radius:4px;cursor:default;color:black;text-align:initial;padding:15px;box-shadow:0px 3px 10px -10px}.category.svelte-1czul97.svelte-1czul97{margin-bottom:20px}.category-header.svelte-1czul97.svelte-1czul97{padding:5px;font-size:20px}.category-values.svelte-1czul97.svelte-1czul97{display:flex;flex-direction:row;flex-wrap:wrap}.category-values.svelte-1czul97>div.svelte-1czul97{margin-right:10px;margin-top:10px;background-color:lightgrey;border:1.2px solid lightgrey;padding:3px 10px;border-radius:4px;cursor:pointer;box-sizing:content-box}.category-values.svelte-1czul97>div.svelte-1czul97:hover{border:1.2px solid gray}");
}
function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[8] = list[i];
    return child_ctx;
}
function get_each_context_1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[11] = list[i];
    return child_ctx;
}
// (41:0) {#if show}
function create_if_block(ctx1) {
    let div;
    let each_value = _expressionsDefault.default.categories;
    let each_blocks = [];
    for(let i1 = 0; i1 < each_value.length; i1 += 1)each_blocks[i1] = create_each_block(get_each_context(ctx1, each_value, i1));
    return {
        c () {
            div = _internal.element("div");
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].c();
            _internal.attr(div, "class", "expression-selector svelte-1czul97");
        },
        m (target, anchor) {
            _internal.insert(target, div, anchor);
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].m(div, null);
        },
        p (ctx, dirty) {
            if (dirty & /*expressions, selectExpression*/ 2) {
                each_value = _expressionsDefault.default.categories;
                let i;
                for(i = 0; i < each_value.length; i += 1){
                    const child_ctx = get_each_context(ctx, each_value, i);
                    if (each_blocks[i]) each_blocks[i].p(child_ctx, dirty);
                    else {
                        each_blocks[i] = create_each_block(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(div, null);
                    }
                }
                for(; i < each_blocks.length; i += 1)each_blocks[i].d(1);
                each_blocks.length = each_value.length;
            }
        },
        d (detaching) {
            if (detaching) _internal.detach(div);
            _internal.destroy_each(each_blocks, detaching);
        }
    };
}
// (47:10) {#each expressionCategory.expressions as expression}
function create_each_block_1(ctx) {
    let div;
    let t0_value = /*expression*/ ctx[11].title + "";
    let t0;
    let t1;
    let mounted;
    let dispose;
    function click_handler() {
        return /*click_handler*/ ctx[6](/*expression*/ ctx[11]);
    }
    return {
        c () {
            div = _internal.element("div");
            t0 = _internal.text(t0_value);
            t1 = _internal.space();
            _internal.attr(div, "class", "svelte-1czul97");
        },
        m (target, anchor) {
            _internal.insert(target, div, anchor);
            _internal.append(div, t0);
            _internal.append(div, t1);
            if (!mounted) {
                dispose = _internal.listen(div, "click", click_handler);
                mounted = true;
            }
        },
        p (new_ctx, dirty) {
            ctx = new_ctx;
        },
        d (detaching) {
            if (detaching) _internal.detach(div);
            mounted = false;
            dispose();
        }
    };
}
// (43:4) {#each expressions.categories as expressionCategory}
function create_each_block(ctx2) {
    let div2;
    let div0;
    let t0_value = /*expressionCategory*/ ctx2[8].title + "";
    let t0;
    let t1;
    let div1;
    let t2;
    let each_value_1 = /*expressionCategory*/ ctx2[8].expressions;
    let each_blocks = [];
    for(let i2 = 0; i2 < each_value_1.length; i2 += 1)each_blocks[i2] = create_each_block_1(get_each_context_1(ctx2, each_value_1, i2));
    return {
        c () {
            div2 = _internal.element("div");
            div0 = _internal.element("div");
            t0 = _internal.text(t0_value);
            t1 = _internal.space();
            div1 = _internal.element("div");
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].c();
            t2 = _internal.space();
            _internal.attr(div0, "class", "category-header svelte-1czul97");
            _internal.attr(div1, "class", "category-values svelte-1czul97");
            _internal.attr(div2, "class", "category svelte-1czul97");
        },
        m (target, anchor) {
            _internal.insert(target, div2, anchor);
            _internal.append(div2, div0);
            _internal.append(div0, t0);
            _internal.append(div2, t1);
            _internal.append(div2, div1);
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].m(div1, null);
            _internal.append(div2, t2);
        },
        p (ctx, dirty) {
            if (dirty & /*selectExpression, expressions*/ 2) {
                each_value_1 = /*expressionCategory*/ ctx[8].expressions;
                let i;
                for(i = 0; i < each_value_1.length; i += 1){
                    const child_ctx = get_each_context_1(ctx, each_value_1, i);
                    if (each_blocks[i]) each_blocks[i].p(child_ctx, dirty);
                    else {
                        each_blocks[i] = create_each_block_1(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(div1, null);
                    }
                }
                for(; i < each_blocks.length; i += 1)each_blocks[i].d(1);
                each_blocks.length = each_value_1.length;
            }
        },
        d (detaching) {
            if (detaching) _internal.detach(div2);
            _internal.destroy_each(each_blocks, detaching);
        }
    };
}
function create_fragment(ctx3) {
    let if_block_anchor;
    let mounted;
    let dispose;
    let if_block = /*show*/ ctx3[0] && create_if_block(ctx3);
    return {
        c () {
            if (if_block) if_block.c();
            if_block_anchor = _internal.empty();
        },
        m (target, anchor) {
            if (if_block) if_block.m(target, anchor);
            _internal.insert(target, if_block_anchor, anchor);
            if (!mounted) {
                dispose = _internal.listen(window, "click", /*handleGlobalClick*/ ctx3[2]);
                mounted = true;
            }
        },
        p (ctx, [dirty]) {
            if (/*show*/ ctx[0]) {
                if (if_block) if_block.p(ctx, dirty);
                else {
                    if_block = create_if_block(ctx);
                    if_block.c();
                    if_block.m(if_block_anchor.parentNode, if_block_anchor);
                }
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
        },
        i: _internal.noop,
        o: _internal.noop,
        d (detaching) {
            if (if_block) if_block.d(detaching);
            if (detaching) _internal.detach(if_block_anchor);
            mounted = false;
            dispose();
        }
    };
}
let closeOthers = ()=>null
;
function instance($$self, $$props1, $$invalidate) {
    let { rootEl  } = $$props1;
    const dispatch = _svelte.createEventDispatcher();
    function selectExpression(expression) {
        dispatch('selection', expression);
        close();
    }
    let show = false;
    const open = ()=>{
        if (!show) {
            closeOthers();
            closeOthers = close;
            $$invalidate(0, show = true);
        }
    };
    const close = ()=>{
        if (show) $$invalidate(0, show = false);
    };
    function handleGlobalClick({ target  }) {
        if (show && !rootEl.contains(target)) close();
    }
    const click_handler = (expression)=>selectExpression(expression)
    ;
    $$self.$$set = ($$props)=>{
        if ('rootEl' in $$props) $$invalidate(3, rootEl = $$props.rootEl);
    };
    return [
        show,
        selectExpression,
        handleGlobalClick,
        rootEl,
        open,
        close,
        click_handler
    ];
}
class ExpressionSelector extends _internal.SvelteComponent {
    constructor(options){
        super();
        _internal.init(this, options, instance, create_fragment, _internal.safe_not_equal, {
            rootEl: 3,
            open: 4,
            close: 5
        }, add_css);
    }
    get open() {
        return this.$$.ctx[4];
    }
    get close() {
        return this.$$.ctx[5];
    }
}
exports.default = ExpressionSelector;

},{"svelte/internal":"iVhnC","svelte":"4r74h","./expressions":"L5yrz","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"6sko3":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
parcelHelpers.export(exports, "pickColor", ()=>pickColor
);
const colors = [
    "#EF5350",
    "#EC407A",
    "#AB47BC",
    "#7E57C2",
    "#5C6BC0",
    "#42A5F5",
    "#29B6F6",
    "#26C6DA",
    "#26A69A",
    "#66BB6A",
    "#9CCC65",
    "#D4E157",
    "#FFEE58",
    "#FFCA28",
    "#FFA726",
    "#FF7043",
    "#8D6E63",
    "#78909C"
];
function pickColor(str) {
    if (!str || str === "?") return "#9E9E9E" // grey
    ;
    let hash = hashString(str);
    let colorIndex = Math.abs(hash % colors.length);
    return colors[colorIndex];
}
function hashString(str) {
    var hash = 0, i, chr;
    if (str.length === 0) return hash;
    for(i = 0; i < str.length; i++){
        chr = str.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0; // Convert to 32bit integer
    }
    return hash;
}

},{"@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"3eLBP":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* src/components/pages/editor/Fork.svelte generated by Svelte v3.48.0 */ var _internal = require("svelte/internal");
var _pathSvelte = require("./Path.svelte");
var _pathSvelteDefault = parcelHelpers.interopDefault(_pathSvelte);
var _addStepSvelte = require("./AddStep.svelte");
var _addStepSvelteDefault = parcelHelpers.interopDefault(_addStepSvelte);
var _svelte = require("svelte");
function add_css(target) {
    _internal.append_styles(target, "svelte-1ca9v", ".fork.svelte-1ca9v.svelte-1ca9v{display:flex;flex-direction:row;padding:25px 5px;border:.5px solid black;border-radius:10px;margin:5px;position:relative;background-color:#fafafa;z-index:1}.svg-path.svelte-1ca9v.svelte-1ca9v{position:absolute;left:0;top:0;z-index:1;width:10px;height:10px;overflow:visible}.hovering.svelte-1ca9v.svelte-1ca9v{border:3px solid lightblue;padding:22.5px 2.5px}.add-step.svelte-1ca9v.svelte-1ca9v{position:absolute;top:15px;left:calc(50% - 5px);display:none}.hovering.svelte-1ca9v>.add-step.svelte-1ca9v{display:block}");
}
function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[6] = list[i];
    child_ctx[8] = i;
    return child_ctx;
}
function get_each_context_1(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[9] = list[i];
    return child_ctx;
}
// (54:2) {#each def.paths as path}
function create_each_block_1(ctx1) {
    let path;
    let current;
    path = new _pathSvelteDefault.default({
        props: {
            def: /*path*/ ctx1[9]
        }
    });
    return {
        c () {
            _internal.create_component(path.$$.fragment);
        },
        m (target, anchor) {
            _internal.mount_component(path, target, anchor);
            current = true;
        },
        p (ctx, dirty) {
            const path_changes = {};
            if (dirty & /*def*/ 1) path_changes.def = /*path*/ ctx[9];
            path.$set(path_changes);
        },
        i (local) {
            if (current) return;
            _internal.transition_in(path.$$.fragment, local);
            current = true;
        },
        o (local) {
            _internal.transition_out(path.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            _internal.destroy_component(path, detaching);
        }
    };
}
// (59:4) {#if forkRef}
function create_if_block(ctx2) {
    let each_1_anchor;
    let each_value = /*def*/ ctx2[0].paths;
    let each_blocks = [];
    for(let i1 = 0; i1 < each_value.length; i1 += 1)each_blocks[i1] = create_each_block(get_each_context(ctx2, each_value, i1));
    return {
        c () {
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].c();
            each_1_anchor = _internal.empty();
        },
        m (target, anchor) {
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].m(target, anchor);
            _internal.insert(target, each_1_anchor, anchor);
        },
        p (ctx, dirty) {
            if (dirty & /*getLine, forkRef, def*/ 3) {
                each_value = /*def*/ ctx[0].paths;
                let i;
                for(i = 0; i < each_value.length; i += 1){
                    const child_ctx = get_each_context(ctx, each_value, i);
                    if (each_blocks[i]) each_blocks[i].p(child_ctx, dirty);
                    else {
                        each_blocks[i] = create_each_block(child_ctx);
                        each_blocks[i].c();
                        each_blocks[i].m(each_1_anchor.parentNode, each_1_anchor);
                    }
                }
                for(; i < each_blocks.length; i += 1)each_blocks[i].d(1);
                each_blocks.length = each_value.length;
            }
        },
        d (detaching) {
            _internal.destroy_each(each_blocks, detaching);
            if (detaching) _internal.detach(each_1_anchor);
        }
    };
}
// (60:6) {#each def.paths as _, pathIndex}
function create_each_block(ctx3) {
    let path;
    let path_d_value;
    return {
        c () {
            path = _internal.svg_element("path");
            _internal.attr(path, "fill", "none");
            _internal.attr(path, "stroke", "black");
            _internal.attr(path, "d", path_d_value = getLine(/*pathIndex*/ ctx3[8], /*forkRef*/ ctx3[1]));
        },
        m (target, anchor) {
            _internal.insert(target, path, anchor);
        },
        p (ctx, dirty) {
            if (dirty & /*forkRef*/ 2 && path_d_value !== (path_d_value = getLine(/*pathIndex*/ ctx[8], /*forkRef*/ ctx[1]))) _internal.attr(path, "d", path_d_value);
        },
        d (detaching) {
            if (detaching) _internal.detach(path);
        }
    };
}
function create_fragment(ctx4) {
    let div1;
    let div0;
    let addstep;
    let t0;
    let t1;
    let svg;
    let div1_class_value;
    let current;
    addstep = new _addStepSvelteDefault.default({
        props: {
            kind: "branch"
        }
    });
    addstep.$on("select", /*addPath*/ ctx4[2]);
    let each_value_1 = /*def*/ ctx4[0].paths;
    let each_blocks = [];
    for(let i2 = 0; i2 < each_value_1.length; i2 += 1)each_blocks[i2] = create_each_block_1(get_each_context_1(ctx4, each_value_1, i2));
    const out = (i)=>_internal.transition_out(each_blocks[i], 1, 1, ()=>{
            each_blocks[i] = null;
        })
    ;
    let if_block = /*forkRef*/ ctx4[1] && create_if_block(ctx4);
    return {
        c () {
            div1 = _internal.element("div");
            div0 = _internal.element("div");
            _internal.create_component(addstep.$$.fragment);
            t0 = _internal.space();
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].c();
            t1 = _internal.space();
            svg = _internal.svg_element("svg");
            if (if_block) if_block.c();
            _internal.attr(div0, "class", "add-step svelte-1ca9v");
            _internal.attr(svg, "class", "svg-path svelte-1ca9v");
            _internal.attr(svg, "viewBox", "0 0 10 10");
            _internal.attr(svg, "xmlns", "http://www.w3.org/2000/svg");
            _internal.attr(svg, "stroke-width", "2.5");
            _internal.attr(svg, "stroke-linecap", "round");
            _internal.attr(div1, "class", div1_class_value = "fork hover-target  svelte-1ca9v");
        },
        m (target, anchor) {
            _internal.insert(target, div1, anchor);
            _internal.append(div1, div0);
            _internal.mount_component(addstep, div0, null);
            _internal.append(div1, t0);
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].m(div1, null);
            _internal.append(div1, t1);
            _internal.append(div1, svg);
            if (if_block) if_block.m(svg, null);
            /*div1_binding*/ ctx4[4](div1);
            current = true;
        },
        p (ctx, [dirty]) {
            if (dirty & /*def*/ 1) {
                each_value_1 = /*def*/ ctx[0].paths;
                let i;
                for(i = 0; i < each_value_1.length; i += 1){
                    const child_ctx = get_each_context_1(ctx, each_value_1, i);
                    if (each_blocks[i]) {
                        each_blocks[i].p(child_ctx, dirty);
                        _internal.transition_in(each_blocks[i], 1);
                    } else {
                        each_blocks[i] = create_each_block_1(child_ctx);
                        each_blocks[i].c();
                        _internal.transition_in(each_blocks[i], 1);
                        each_blocks[i].m(div1, t1);
                    }
                }
                _internal.group_outros();
                for(i = each_value_1.length; i < each_blocks.length; i += 1)out(i);
                _internal.check_outros();
            }
            if (/*forkRef*/ ctx[1]) {
                if (if_block) if_block.p(ctx, dirty);
                else {
                    if_block = create_if_block(ctx);
                    if_block.c();
                    if_block.m(svg, null);
                }
            } else if (if_block) {
                if_block.d(1);
                if_block = null;
            }
        },
        i (local) {
            if (current) return;
            _internal.transition_in(addstep.$$.fragment, local);
            for(let i = 0; i < each_value_1.length; i += 1)_internal.transition_in(each_blocks[i]);
            current = true;
        },
        o (local) {
            _internal.transition_out(addstep.$$.fragment, local);
            each_blocks = each_blocks.filter(Boolean);
            for(let i = 0; i < each_blocks.length; i += 1)_internal.transition_out(each_blocks[i]);
            current = false;
        },
        d (detaching) {
            if (detaching) _internal.detach(div1);
            _internal.destroy_component(addstep);
            _internal.destroy_each(each_blocks, detaching);
            if (if_block) if_block.d();
            /*div1_binding*/ ctx4[4](null);
        }
    };
}
function getLine(pathIndex, forkRef) {
    let pathEl = forkRef.children[pathIndex + 1];
    if (!pathEl) return 0;
    const containerCenterX = forkRef.offsetWidth / 2;
    const containerBottom = pathEl.offsetHeight + 30;
    return `
      M ${containerCenterX} -1 L ${pathEl.offsetLeft + pathEl.offsetWidth / 2} 31
      M ${containerCenterX} ${forkRef.offsetHeight + 1} L ${pathEl.offsetLeft + pathEl.offsetWidth / 2} ${containerBottom}
    `;
}
function instance($$self, $$props1, $$invalidate) {
    let { def  } = $$props1;
    let parents = _svelte.getContext("parents") || [];
    _svelte.setContext("parents", [
        ...parents,
        def
    ]);
    let forkRef;
    let observing = false;
    function addPath() {
        def.paths.push({
            kind: "path",
            steps: [
                {
                    kind: "action"
                }
            ]
        });
        $$invalidate(0, def), $$invalidate(1, forkRef), $$invalidate(3, observing);
    }
    function div1_binding($$value) {
        _internal.binding_callbacks[$$value ? 'unshift' : 'push'](()=>{
            forkRef = $$value;
            $$invalidate(1, forkRef);
        });
    }
    $$self.$$set = ($$props)=>{
        if ('def' in $$props) $$invalidate(0, def = $$props.def);
    };
    $$self.$$.update = ()=>{
        if ($$self.$$.dirty & /*forkRef, observing, def*/ 11) {
            $: if (forkRef && !observing) {
                $$invalidate(3, observing = true);
                new ResizeObserver(()=>($$invalidate(0, def), $$invalidate(1, forkRef), $$invalidate(3, observing))
                ).observe(forkRef);
            }
        }
    };
    return [
        def,
        forkRef,
        addPath,
        observing,
        div1_binding
    ];
}
class Fork extends _internal.SvelteComponent {
    constructor(options){
        super();
        _internal.init(this, options, instance, create_fragment, _internal.safe_not_equal, {
            def: 0
        }, add_css);
    }
}
exports.default = Fork;

},{"svelte/internal":"iVhnC","./Path.svelte":"7uIm4","./AddStep.svelte":"4eWFG","svelte":"4r74h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"4eWFG":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* src/components/pages/editor/AddStep.svelte generated by Svelte v3.48.0 */ var _internal = require("svelte/internal");
var _svelte = require("svelte");
function add_css(target) {
    _internal.append_styles(target, "svelte-14tfekm", ".add-step-container.svelte-14tfekm.svelte-14tfekm{position:relative;width:10px}.add-step.svelte-14tfekm.svelte-14tfekm{position:absolute;width:100px;height:30px;top:-15px;left:-45px;z-index:5\r\n  }.add-step-btns.svelte-14tfekm button.svelte-14tfekm{background-color:black;border:none;color:white;border-radius:100px;cursor:pointer;width:25px;height:25px}.add-step.svelte-14tfekm:hover .placeholder.svelte-14tfekm{display:none}.add-step.svelte-14tfekm:not(:hover) .add-step-btns.svelte-14tfekm{display:none}.placeholder.svelte-14tfekm.svelte-14tfekm{position:absolute;left:50%;top:50%;transform:translate(-50%, -50%);color:white;font-weight:700;background-color:black;padding:2px;width:20px;height:20px;border-radius:100px}.placeholder-text.svelte-14tfekm.svelte-14tfekm{line-height:9px;text-align:center}");
}
// (21:6) {:else}
function create_else_block(ctx) {
    let button;
    let mounted;
    let dispose;
    return {
        c () {
            button = _internal.element("button");
            button.textContent = "ᛣ";
            _internal.attr(button, "type", "button");
            _internal.attr(button, "class", "svelte-14tfekm");
        },
        m (target, anchor) {
            _internal.insert(target, button, anchor);
            if (!mounted) {
                dispose = _internal.listen(button, "click", /*click_handler_3*/ ctx[5]);
                mounted = true;
            }
        },
        p: _internal.noop,
        d (detaching) {
            if (detaching) _internal.detach(button);
            mounted = false;
            dispose();
        }
    };
}
// (19:35) 
function create_if_block_1(ctx) {
    let button;
    let mounted;
    let dispose;
    return {
        c () {
            button = _internal.element("button");
            button.textContent = "＋";
            _internal.attr(button, "type", "button");
            _internal.attr(button, "class", "svelte-14tfekm");
        },
        m (target, anchor) {
            _internal.insert(target, button, anchor);
            if (!mounted) {
                dispose = _internal.listen(button, "click", /*click_handler_2*/ ctx[4]);
                mounted = true;
            }
        },
        p: _internal.noop,
        d (detaching) {
            if (detaching) _internal.detach(button);
            mounted = false;
            dispose();
        }
    };
}
// (15:6) {#if kind === "path"}
function create_if_block(ctx) {
    let button0;
    let t1;
    let button1;
    let mounted;
    let dispose;
    return {
        c () {
            button0 = _internal.element("button");
            button0.textContent = "⬤";
            t1 = _internal.space();
            button1 = _internal.element("button");
            button1.textContent = "⅄";
            _internal.attr(button0, "type", "button");
            _internal.attr(button0, "class", "svelte-14tfekm");
            _internal.attr(button1, "type", "button");
            _internal.attr(button1, "class", "svelte-14tfekm");
        },
        m (target, anchor) {
            _internal.insert(target, button0, anchor);
            _internal.insert(target, t1, anchor);
            _internal.insert(target, button1, anchor);
            if (!mounted) {
                dispose = [
                    _internal.listen(button0, "click", /*click_handler*/ ctx[2]),
                    _internal.listen(button1, "click", /*click_handler_1*/ ctx[3])
                ];
                mounted = true;
            }
        },
        p: _internal.noop,
        d (detaching) {
            if (detaching) _internal.detach(button0);
            if (detaching) _internal.detach(t1);
            if (detaching) _internal.detach(button1);
            mounted = false;
            _internal.run_all(dispose);
        }
    };
}
function create_fragment(ctx1) {
    let div4;
    let div3;
    let div1;
    let t1;
    let div2;
    function select_block_type(ctx, dirty) {
        if (/*kind*/ ctx[0] === "path") return create_if_block;
        if (/*kind*/ ctx[0] === "trigger") return create_if_block_1;
        return create_else_block;
    }
    let current_block_type = select_block_type(ctx1, -1);
    let if_block = current_block_type(ctx1);
    return {
        c () {
            div4 = _internal.element("div");
            div3 = _internal.element("div");
            div1 = _internal.element("div");
            div1.innerHTML = `<div class="placeholder-text svelte-14tfekm">...</div>`;
            t1 = _internal.space();
            div2 = _internal.element("div");
            if_block.c();
            _internal.attr(div1, "class", "placeholder svelte-14tfekm");
            _internal.attr(div2, "class", "add-step-btns svelte-14tfekm");
            _internal.attr(div3, "class", "add-step svelte-14tfekm");
            _internal.attr(div4, "class", "add-step-container svelte-14tfekm");
        },
        m (target, anchor) {
            _internal.insert(target, div4, anchor);
            _internal.append(div4, div3);
            _internal.append(div3, div1);
            _internal.append(div3, t1);
            _internal.append(div3, div2);
            if_block.m(div2, null);
        },
        p (ctx, [dirty]) {
            if (current_block_type === (current_block_type = select_block_type(ctx, dirty)) && if_block) if_block.p(ctx, dirty);
            else {
                if_block.d(1);
                if_block = current_block_type(ctx);
                if (if_block) {
                    if_block.c();
                    if_block.m(div2, null);
                }
            }
        },
        i: _internal.noop,
        o: _internal.noop,
        d (detaching) {
            if (detaching) _internal.detach(div4);
            if_block.d();
        }
    };
}
function instance($$self, $$props1, $$invalidate) {
    let { kind  } = $$props1;
    const dispatch = _svelte.createEventDispatcher();
    const click_handler = ()=>dispatch("select", {
            kind: "action"
        })
    ;
    const click_handler_1 = ()=>dispatch("select", {
            kind: "fork"
        })
    ;
    const click_handler_2 = ()=>dispatch("select")
    ;
    const click_handler_3 = ()=>dispatch("select")
    ;
    $$self.$$set = ($$props)=>{
        if ('kind' in $$props) $$invalidate(0, kind = $$props.kind);
    };
    return [
        kind,
        dispatch,
        click_handler,
        click_handler_1,
        click_handler_2,
        click_handler_3
    ];
}
class AddStep extends _internal.SvelteComponent {
    constructor(options){
        super();
        _internal.init(this, options, instance, create_fragment, _internal.safe_not_equal, {
            kind: 0
        }, add_css);
    }
}
exports.default = AddStep;

},{"svelte/internal":"iVhnC","svelte":"4r74h","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"89hkt":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
parcelHelpers.defineInteropFlag(exports);
/* src/components/pages/editor/Triggers.svelte generated by Svelte v3.48.0 */ var _internal = require("svelte/internal");
var _nodeSvelte = require("./Node.svelte");
var _nodeSvelteDefault = parcelHelpers.interopDefault(_nodeSvelte);
var _addStepSvelte = require("./AddStep.svelte");
var _addStepSvelteDefault = parcelHelpers.interopDefault(_addStepSvelte);
function add_css(target) {
    _internal.append_styles(target, "svelte-gmdnv9", ".trigger-set.svelte-gmdnv9{display:flex;flex-direction:row;padding:5px;border:.5px solid black;border-radius:10px;margin:5px;position:relative}.add-trigger.svelte-gmdnv9{position:absolute;right:-45px;top:calc(50% - 5px)}.hovering.svelte-gmdnv9{border:3px solid lightblue;padding:2.5px 2.5px}");
}
function get_each_context(ctx, list, i) {
    const child_ctx = ctx.slice();
    child_ctx[2] = list[i];
    return child_ctx;
}
// (16:2) {#each triggers as trigger}
function create_each_block(ctx1) {
    let node;
    let current;
    node = new _nodeSvelteDefault.default({
        props: {
            kind: "trigger",
            def: /*trigger*/ ctx1[2]
        }
    });
    return {
        c () {
            _internal.create_component(node.$$.fragment);
        },
        m (target, anchor) {
            _internal.mount_component(node, target, anchor);
            current = true;
        },
        p (ctx, dirty) {
            const node_changes = {};
            if (dirty & /*triggers*/ 1) node_changes.def = /*trigger*/ ctx[2];
            node.$set(node_changes);
        },
        i (local) {
            if (current) return;
            _internal.transition_in(node.$$.fragment, local);
            current = true;
        },
        o (local) {
            _internal.transition_out(node.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            _internal.destroy_component(node, detaching);
        }
    };
}
function create_fragment(ctx2) {
    let div1;
    let t;
    let div0;
    let addstep;
    let div1_class_value;
    let current;
    let each_value = /*triggers*/ ctx2[0];
    let each_blocks = [];
    for(let i1 = 0; i1 < each_value.length; i1 += 1)each_blocks[i1] = create_each_block(get_each_context(ctx2, each_value, i1));
    const out = (i)=>_internal.transition_out(each_blocks[i], 1, 1, ()=>{
            each_blocks[i] = null;
        })
    ;
    addstep = new _addStepSvelteDefault.default({
        props: {
            kind: "trigger"
        }
    });
    addstep.$on("select", /*addTrigger*/ ctx2[1]);
    return {
        c () {
            div1 = _internal.element("div");
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].c();
            t = _internal.space();
            div0 = _internal.element("div");
            _internal.create_component(addstep.$$.fragment);
            _internal.attr(div0, "class", "add-trigger svelte-gmdnv9");
            _internal.attr(div1, "class", div1_class_value = "trigger-set hover-target  svelte-gmdnv9");
        },
        m (target, anchor) {
            _internal.insert(target, div1, anchor);
            for(let i = 0; i < each_blocks.length; i += 1)each_blocks[i].m(div1, null);
            _internal.append(div1, t);
            _internal.append(div1, div0);
            _internal.mount_component(addstep, div0, null);
            current = true;
        },
        p (ctx, [dirty]) {
            if (dirty & /*triggers*/ 1) {
                each_value = /*triggers*/ ctx[0];
                let i;
                for(i = 0; i < each_value.length; i += 1){
                    const child_ctx = get_each_context(ctx, each_value, i);
                    if (each_blocks[i]) {
                        each_blocks[i].p(child_ctx, dirty);
                        _internal.transition_in(each_blocks[i], 1);
                    } else {
                        each_blocks[i] = create_each_block(child_ctx);
                        each_blocks[i].c();
                        _internal.transition_in(each_blocks[i], 1);
                        each_blocks[i].m(div1, t);
                    }
                }
                _internal.group_outros();
                for(i = each_value.length; i < each_blocks.length; i += 1)out(i);
                _internal.check_outros();
            }
        },
        i (local) {
            if (current) return;
            for(let i = 0; i < each_value.length; i += 1)_internal.transition_in(each_blocks[i]);
            _internal.transition_in(addstep.$$.fragment, local);
            current = true;
        },
        o (local) {
            each_blocks = each_blocks.filter(Boolean);
            for(let i = 0; i < each_blocks.length; i += 1)_internal.transition_out(each_blocks[i]);
            _internal.transition_out(addstep.$$.fragment, local);
            current = false;
        },
        d (detaching) {
            if (detaching) _internal.detach(div1);
            _internal.destroy_each(each_blocks, detaching);
            _internal.destroy_component(addstep);
        }
    };
}
function instance($$self, $$props1, $$invalidate) {
    let { triggers  } = $$props1;
    function addTrigger(kind, stepIndex) {
        triggers.push({
            kind: "trigger"
        });
        $$invalidate(0, triggers);
    }
    $$self.$$set = ($$props)=>{
        if ('triggers' in $$props) $$invalidate(0, triggers = $$props.triggers);
    };
    return [
        triggers,
        addTrigger
    ];
}
class Triggers extends _internal.SvelteComponent {
    constructor(options){
        super();
        _internal.init(this, options, instance, create_fragment, _internal.safe_not_equal, {
            triggers: 0
        }, add_css);
    }
}
exports.default = Triggers;

},{"svelte/internal":"iVhnC","./Node.svelte":"3Xmpa","./AddStep.svelte":"4eWFG","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"5NkvL":[function() {},{}],"4WfS2":[function(require,module,exports) {
var parcelHelpers = require("@parcel/transformer-js/src/esmodule-helpers.js");
var _actions = require("../../src/components/pages/editor/actions");
var _actionsDefault = parcelHelpers.interopDefault(_actions);
var _metadataJson = require("./metadata.json");
var _metadataJsonDefault = parcelHelpers.interopDefault(_metadataJson);
function getWorkflows() {
    return JSON.parse(localStorage.getItem("workflows") || "[]");
}
function setWorkflows(workflows) {
    localStorage.setItem("workflows", JSON.stringify(workflows));
}
_actionsDefault.default.getAllWorkflows = async function() {
    return JSON.parse(localStorage.getItem("workflows") || "[]");
};
_actionsDefault.default.getMetadata = async function() {
    return _metadataJsonDefault.default;
};
_actionsDefault.default.getWorkflow = async function(workflowId) {
    let workflows = getWorkflows();
    return workflows.find((w)=>w.id === workflowId
    );
}, _actionsDefault.default.createWorkflow = async function(workflow) {
    workflow.id = crypto.randomUUID();
    let workflows = getWorkflows();
    workflows.push(workflow);
    setWorkflows(workflows);
    return workflow;
}, _actionsDefault.default.updateWorkflow = async function(workflowId, workflow) {
    let workflows = getWorkflows();
    let oldIndex = workflows.findIndex((w)=>w.id === workflowId
    );
    workflows.splice(oldIndex, 1, workflow);
    setWorkflows(workflows);
    return workflow;
}, _actionsDefault.default.deleteWorkflows = async function(workflowId) {
    let workflows = getWorkflows();
    let oldIndex = workflows.findIndex((w)=>w.id === workflowId
    );
    workflows.splice(oldIndex, 1);
    setWorkflows(workflows);
};

},{"../../src/components/pages/editor/actions":"aoyHM","./metadata.json":"aVG2g","@parcel/transformer-js/src/esmodule-helpers.js":"gkKU3"}],"aVG2g":[function(require,module,exports) {
module.exports = JSON.parse("{\"eventDefs\":[{\"title\":\"Case created\",\"inputSchema\":{\"properties\":{}},\"kind\":\"event-type\",\"type\":\"case-created\"},{\"title\":\"Case status changed\",\"inputSchema\":{\"properties\":{}},\"kind\":\"event-type\",\"type\":\"case-status-changed\"},{\"title\":\"Email received\",\"inputSchema\":{\"properties\":{}},\"kind\":\"event-type\",\"type\":\"email-received\"},{\"title\":\"Payment received\",\"inputSchema\":{\"properties\":{}},\"kind\":\"event-type\",\"type\":\"payment-received\"},{\"title\":\"Product review submitted\",\"inputSchema\":{\"properties\":{}},\"kind\":\"event-type\",\"type\":\"review-submitted\"},{\"title\":\"Tag added to case\",\"inputSchema\":{\"properties\":{}},\"kind\":\"event-type\",\"type\":\"tag-added\"}],\"actionDefs\":[{\"title\":\"Add user to mailing list\",\"inputSchema\":{\"properties\":{\"userId\":{\"type\":\"string\",\"title\":\"User\"},\"mailingList\":{\"type\":\"string\",\"title\":\"Mailing List\"}}},\"kind\":\"action-type\",\"type\":\"add-to-mailing-list\"},{\"title\":\"Set lifecycle stage\",\"inputSchema\":{\"properties\":{\"caseId\":{\"type\":\"string\",\"title\":\"Case ID\"},\"lifecycleStage\":{\"type\":\"string\",\"title\":\"Lifecycle stage\"}}},\"kind\":\"action-type\",\"type\":\"set-lifecycle-stage\"},{\"title\":\"Create to-do item\",\"inputSchema\":{\"properties\":{\"itemName\":{\"type\":\"string\",\"title\":\"Name\"},\"description\":{\"type\":\"string\",\"title\":\"Description\"}}},\"kind\":\"action-type\",\"type\":\"create-action-item\"},{\"title\":\"Create user\",\"inputSchema\":{\"properties\":{\"username\":{\"type\":\"string\",\"title\":\"Username\"},\"emailAddress\":{\"type\":\"string\",\"title\":\"Email address\"},\"firstName\":{\"type\":\"string\",\"title\":\"First name\"},\"lastName\":{\"type\":\"string\",\"title\":\"Last name\"}}},\"kind\":\"action-type\",\"type\":\"create-user\"},{\"title\":\"Retrieve file\",\"inputSchema\":{\"properties\":{\"fileName\":{\"type\":\"string\",\"title\":\"File name\"}}},\"kind\":\"action-type\",\"type\":\"get-file\"},{\"title\":\"Save file\",\"inputSchema\":{\"properties\":{\"fileName\":{\"type\":\"string\",\"title\":\"File name\"},\"fileData\":{\"type\":\"string\",\"title\":\"File\"}}},\"kind\":\"action-type\",\"type\":\"save-file\"},{\"title\":\"Send email\",\"inputSchema\":{\"properties\":{\"to\":{\"type\":\"string\",\"title\":\"To\"},\"subject\":{\"type\":\"string\",\"title\":\"Subject\"},\"body\":{\"type\":\"string\",\"title\":\"Body\"},\"cc\":{\"type\":\"string\",\"title\":\"CC\"}}},\"kind\":\"action-type\",\"type\":\"send-email\"},{\"title\":\"Send invoice\",\"inputSchema\":{\"properties\":{\"username\":{\"type\":\"string\",\"title\":\"Username\"}}},\"kind\":\"action-type\",\"type\":\"send-invoice\"},{\"title\":\"Send slack message\",\"inputSchema\":{\"properties\":{\"channel\":{\"type\":\"string\",\"title\":\"Channel\"},\"message\":{\"type\":\"string\",\"title\":\"Message\"}}},\"kind\":\"action-type\",\"type\":\"send-slack-message\"},{\"title\":\"Send text message\",\"inputSchema\":{\"properties\":{\"phoneNumber\":{\"type\":\"string\",\"title\":\"Phone number\"},\"message\":{\"type\":\"string\",\"title\":\"Message\"}}},\"kind\":\"action-type\",\"type\":\"send-text-message\"},{\"title\":\"Set assignee\",\"inputSchema\":{\"properties\":{\"caseId\":{\"type\":\"string\",\"title\":\"Case ID\"},\"assignee\":{\"type\":\"string\",\"title\":\"Assignee\"}}},\"kind\":\"action-type\",\"type\":\"set-assignee\"},{\"title\":\"Set case followup date\",\"inputSchema\":{\"properties\":{\"caseId\":{\"type\":\"string\",\"title\":\"Case ID\"},\"followupDate\":{\"type\":\"string\",\"title\":\"Followup date\"}}},\"kind\":\"action-type\",\"type\":\"set-case-followup-date\"},{\"title\":\"Track analytics event\",\"inputSchema\":{\"properties\":{\"caseId\":{\"type\":\"string\",\"title\":\"Case ID\"},\"name\":{\"type\":\"string\",\"title\":\"Name\"},\"details\":{\"type\":\"string\",\"title\":\"Details\"}}},\"kind\":\"action-type\",\"type\":\"track-analytics-event\"}]}");

},{}]},["8UdO5","h5NIW"], "h5NIW", "parcelRequire323c")

//# sourceMappingURL=index.5feaaaf2.js.map
