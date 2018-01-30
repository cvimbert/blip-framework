(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["Blip"] = factory();
	else
		root["Blip"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 41);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(17)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, event_listener_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventDispatcher = /** @class */ (function () {
        function EventDispatcher() {
            this._listeners = [];
        }
        EventDispatcher.prototype.dispatchEvent = function (eventType, param) {
            if (param === void 0) { param = null; }
            this._listeners.forEach(function (subscription) {
                if (subscription.eventName === eventType) {
                    subscription.call(param);
                }
            });
        };
        EventDispatcher.prototype.listen = function (eventName, callback) {
            var listener = new event_listener_class_1.EventListener(eventName, callback, this);
            this._listeners.push(listener);
            return listener;
        };
        EventDispatcher.prototype.deleteListener = function (listener) {
            var index = this._listeners.indexOf(listener);
            if (index !== -1) {
                this._listeners.splice(index, 1);
            }
        };
        return EventDispatcher;
    }());
    exports.EventDispatcher = EventDispatcher;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-dispatcher.class.js.map

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Created by Christophe on 02/02/2017.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Events = /** @class */ (function () {
        function Events() {
        }
        Events.SEQUENCE_ENTER_STATE = "event_enterstate";
        Events.ANIMATION_ITERATION_END = "animation_iteration_end";
        Events.ANIMATION_END = "animation_end";
        Events.END_PLAYING = "end_playing";
        Events.CLOCK_PERIOD = "clock_period";
        Events.CONTROL_UP = "control_up";
        Events.CONTROL_DOWN = "control_down";
        Events.VARIABLE_CHANGE = "variable_change";
        Events.DISPLAYED = "displayed";
        Events.HIDDEN = "hidden";
        return Events;
    }());
    exports.Events = Events;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=events.class.js.map

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Created by Christophe on 28/03/2017.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Utils = /** @class */ (function () {
        function Utils() {
        }
        Utils.verifyAndExtends = function (targetObject, defaults) {
            var retObject = {};
            for (var id in targetObject) {
                if (targetObject.hasOwnProperty(id)) {
                    if (defaults[id] === undefined) {
                        console.error("Parse object error !");
                        return null;
                    }
                }
            }
            for (var id in defaults) {
                if (defaults.hasOwnProperty(id)) {
                    if (!targetObject[id]) {
                        retObject[id] = defaults[id];
                    }
                    else {
                        retObject[id] = targetObject[id];
                    }
                }
            }
            return retObject;
        };
        return Utils;
    }());
    exports.Utils = Utils;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=utils.class.js.map

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(42)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, _1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var BaseTrigger = /** @class */ (function (_super) {
        __extends(BaseTrigger, _super);
        function BaseTrigger(callback) {
            if (callback === void 0) { callback = null; }
            var _this = _super.call(this) || this;
            _this.callback = callback;
            _this._enabled = false;
            return _this;
        }
        Object.defineProperty(BaseTrigger.prototype, "enabled", {
            get: function () {
                return this._enabled;
            },
            set: function (value) {
                if (value) {
                    this.enable();
                }
                else {
                    this.disable();
                }
            },
            enumerable: true,
            configurable: true
        });
        BaseTrigger.prototype.enable = function () {
            this._enabled = true;
        };
        BaseTrigger.prototype.disable = function () {
            this._enabled = false;
        };
        BaseTrigger.prototype.bind = function (callback) {
            this.callback = callback;
            this._enabled = true;
        };
        BaseTrigger.prototype.unbind = function () {
            this.callback = null;
            this._enabled = false;
        };
        return BaseTrigger;
    }(_1.EventDispatcher));
    exports.BaseTrigger = BaseTrigger;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=base-trigger.class.js.map

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, display_element_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /*const Draggable = require("draggable");
    const TweenLite = require("TweenLite");*/
    var ImageDisplayElement = /** @class */ (function (_super) {
        __extends(ImageDisplayElement, _super);
        function ImageDisplayElement(file, x, y, scale) {
            if (scale === void 0) { scale = 1; }
            var _this = _super.call(this, x, y, scale) || this;
            _this.file = file;
            return _this;
        }
        ImageDisplayElement.prototype.getDOMElement = function () {
            var div = _super.prototype.getDOMElement.call(this);
            var image = document.createElement("img");
            image["src"] = this.file.path;
            div.appendChild(image);
            var positionDisplayer = document.createElement("div");
            positionDisplayer.classList.add("position-displayer");
            div.appendChild(positionDisplayer);
            this.positionDisplayer = positionDisplayer;
            /*var draggable:any = Draggable.create(div, {
                onDrag: function () {
                    positionDisplayer.innerHTML = "(" + this.x + "," + this.y + ")";
                }
            });*/
            return div;
        };
        return ImageDisplayElement;
    }(display_element_class_1.DisplayElement));
    exports.ImageDisplayElement = ImageDisplayElement;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=image-display-element.js.map

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(10)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, status_dispatcher_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var DisplayElement = /** @class */ (function (_super) {
        __extends(DisplayElement, _super);
        function DisplayElement(x, y, scale) {
            if (scale === void 0) { scale = 1; }
            var _this = _super.call(this) || this;
            _this.x = x;
            _this.y = y;
            _this.scale = scale;
            return _this;
        }
        DisplayElement.prototype.getDOMElement = function () {
            if (this._DOMElement) {
                return this._DOMElement;
            }
            else {
                var div = document.createElement("div");
                div.className = "game-element";
                div.style.left = this.x + "px";
                div.style.top = this.y + "px";
                div.style.transform = "scale(" + this.scale + ")";
                this._DOMElement = div;
                return div;
            }
        };
        DisplayElement.prototype.updateTransforms = function () {
            this._DOMElement.style.left = this.x + "px";
            this._DOMElement.style.top = this.y + "px";
            this._DOMElement.style.transform = "scale(" + this.scale + ")";
        };
        DisplayElement.prototype.displayInDOMElement = function (container) {
            this._DOMElement = this.getDOMElement();
            container.appendChild(this._DOMElement);
            return this._DOMElement;
        };
        DisplayElement.prototype.displayInDocumentById = function (id) {
            this._DOMElement = this.getDOMElement();
            var container = document.getElementById(id);
            container.appendChild(this._DOMElement);
        };
        return DisplayElement;
    }(status_dispatcher_class_1.StatusDispatcher));
    exports.DisplayElement = DisplayElement;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=display-element.class.js.map

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 01/02/2017.
     */
    var File = /** @class */ (function () {
        function File(path) {
            this.path = path;
        }
        return File;
    }());
    exports.File = File;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=file.class.js.map

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpritesGroupState = /** @class */ (function () {
        function SpritesGroupState(group, sprites) {
            if (sprites === void 0) { sprites = []; }
            this.group = group;
            this.sprites = sprites;
        }
        SpritesGroupState.prototype.display = function () {
            this.group.hide();
            this.sprites.forEach(function (sprite) { return sprite.display(); });
        };
        SpritesGroupState.prototype.hide = function () {
            this.group.hide();
        };
        return SpritesGroupState;
    }());
    exports.SpritesGroupState = SpritesGroupState;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=sprites-group-state.class.js.map

/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, event_dispatcher_class_1, events_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Clock = /** @class */ (function (_super) {
        __extends(Clock, _super);
        function Clock(period) {
            var _this = _super.call(this) || this;
            _this.period = period;
            return _this;
        }
        Clock.prototype.start = function () {
            var _this = this;
            this.stop();
            this._interval = setInterval(function () {
                _this.dispatchEvent(events_class_1.Events.CLOCK_PERIOD);
            }, this.period * 1000);
        };
        Clock.prototype.stop = function () {
            if (this._interval) {
                clearInterval(this._interval);
                this._interval = null;
            }
        };
        return Clock;
    }(event_dispatcher_class_1.EventDispatcher));
    exports.Clock = Clock;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=clock.class.js.map

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(12), __webpack_require__(2), __webpack_require__(14), __webpack_require__(7), __webpack_require__(43), __webpack_require__(15), __webpack_require__(18), __webpack_require__(8), __webpack_require__(19)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, sprite_class_1, utils_class_1, sprites_group_class_1, sprites_group_state_class_1, decoration_class_1, control_class_1, sequence_class_1, clock_class_1, animation_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GameObject = /** @class */ (function () {
        function GameObject(data) {
            if (data === void 0) { data = {}; }
            this._spritesDictionary = {};
            this._groupsDictionary = {};
            this._statesDictionary = {};
            this._controlsDictionary = {};
            this._sequencesDictionary = {};
            this._clocksDictionary = {};
            this._animationsDictionary = {};
            this.loadData(data);
        }
        GameObject.prototype.loadData = function (data) {
            var dataDefaults = {
                gameContainerScale: 1,
                sprites: {},
                groups: {},
                backgrounds: [],
                foregrounds: [],
                controls: {},
                clocks: {}
            };
            var param = utils_class_1.Utils.verifyAndExtends(data, dataDefaults);
            this._params = param;
            this.loadClocks(param["clocks"]);
            this.loadSprites(param["sprites"]);
            this.loadGroups(param["groups"]);
            return param;
        };
        GameObject.prototype.loadSprites = function (sprites) {
            var loadedSprites = [];
            for (var id in sprites) {
                if (sprites.hasOwnProperty(id)) {
                    var sprite = sprite_class_1.Sprite.fromData(sprites[id]);
                    this._spritesDictionary[id] = sprite;
                    loadedSprites.push(sprite);
                }
            }
            return loadedSprites;
        };
        GameObject.prototype.getSprite = function (spriteId) {
            return this._spritesDictionary[spriteId];
        };
        GameObject.prototype.getSprites = function (spriteIds) {
            var _this = this;
            var sprites = [];
            spriteIds.forEach(function (id) { return sprites.push(_this.getSprite(id)); });
            return sprites;
        };
        GameObject.prototype.getIdWithGroupPrefix = function (groupId, id) {
            return groupId + "_" + id;
        };
        GameObject.prototype.loadClocks = function (clocks) {
            for (var clockId in clocks) {
                if (clocks.hasOwnProperty(clockId)) {
                    var period = clocks[clockId]["period"];
                    this._clocksDictionary[clockId] = new clock_class_1.Clock(period);
                }
            }
        };
        GameObject.prototype.loadGroups = function (groups) {
            var _this = this;
            var groupDefaults = {
                sprites: [],
                states: [],
                offset: { x: 0, y: 0 },
                sequences: {},
                animations: {}
            };
            var _loop_1 = function (groupId) {
                if (groups.hasOwnProperty(groupId)) {
                    var param = utils_class_1.Utils.verifyAndExtends(groups[groupId], groupDefaults);
                    var xOffset_1 = param["offset"]["x"];
                    var yOffset_1 = param["offset"]["y"];
                    var sprites = this_1.getSprites(param["sprites"]);
                    sprites.forEach(function (sprite) {
                        sprite.x += xOffset_1;
                        sprite.y += yOffset_1;
                        sprite.updateTransforms();
                    });
                    var group = new sprites_group_class_1.SpritesGroup(sprites);
                    this_1._groupsDictionary[groupId] = group;
                    for (var stateId in param["states"]) {
                        if (param["states"].hasOwnProperty(stateId)) {
                            var sprites_1 = this_1.getFromDictionary(param["states"][stateId], this_1._spritesDictionary);
                            var state = new sprites_group_state_class_1.SpritesGroupState(group, sprites_1);
                            var completeStateId = this_1.getIdWithGroupPrefix(groupId, stateId);
                            this_1._statesDictionary[completeStateId] = state;
                        }
                    }
                    var _loop_2 = function (sequenceId) {
                        if (param["sequences"].hasOwnProperty(sequenceId)) {
                            var displayables_1 = [];
                            param["sequences"][sequenceId]["states"].forEach(function (data) {
                                if (data["type"] === "sprite") {
                                    displayables_1.push(_this.getSprite(data["ref"]));
                                }
                                else if (data["type"] === "state") {
                                    displayables_1.push(_this.getState(groupId, data["ref"]));
                                }
                            });
                            loop = param["sequences"][sequenceId]["loop"];
                            var sequence = new sequence_class_1.Sequence(group, displayables_1, loop ? loop : "");
                            var id = this_1.getIdWithGroupPrefix(groupId, sequenceId);
                            this_1._sequencesDictionary[id] = sequence;
                        }
                    };
                    for (var sequenceId in param["sequences"]) {
                        _loop_2(sequenceId);
                    }
                    for (var animationId in param["animations"]) {
                        if (param["animations"].hasOwnProperty(animationId)) {
                            var id = this_1.getIdWithGroupPrefix(groupId, animationId);
                            this_1._animationsDictionary[id] = animation_class_1.Animation.fromData(param["animations"][animationId], groupId, this_1);
                        }
                    }
                }
            };
            var this_1 = this, loop;
            for (var groupId in groups) {
                _loop_1(groupId);
            }
        };
        GameObject.prototype.getFromDictionary = function (ids, dictionnary) {
            var ret = [];
            ids.forEach(function (id) { return ret.push(dictionnary[id]); });
            return ret;
        };
        GameObject.prototype.getGroup = function (groupId) {
            return this._groupsDictionary[groupId];
        };
        GameObject.prototype.getControl = function (controlId, zoneId) {
            if (zoneId === void 0) { zoneId = null; }
            var controlName = zoneId ? controlId + "_" + zoneId : controlId;
            return this._controlsDictionary[controlName];
        };
        GameObject.prototype.getGroups = function (groupIds) {
            var _this = this;
            var groups = [];
            groupIds.forEach(function (id) { return groups.push(_this.getGroup(id)); });
            return groups;
        };
        GameObject.prototype.getState = function (groupId, stateId) {
            var completeStateId = this.getIdWithGroupPrefix(groupId, stateId);
            return this._statesDictionary[completeStateId];
        };
        GameObject.prototype.getAnimation = function (groupId, animationId) {
            var id = this.getIdWithGroupPrefix(groupId, animationId);
            return this._animationsDictionary[id];
        };
        GameObject.prototype.getSequence = function (groupId, sequenceId) {
            var completeId = this.getIdWithGroupPrefix(groupId, sequenceId);
            return this._sequencesDictionary[completeId];
        };
        GameObject.prototype.getStates = function (groupId, stateIds) {
            var _this = this;
            var states = [];
            stateIds.forEach(function (id) { return states.push(_this.getState(groupId, id)); });
            return states;
        };
        GameObject.prototype.getClock = function (clockId) {
            return this._clocksDictionary[clockId];
        };
        GameObject.prototype.loadDecorations = function (decorationDatas) {
            var decorations = [];
            decorationDatas.forEach(function (data) { return decorations.push(decoration_class_1.Decoration.fromData(data)); });
            return decorations;
        };
        GameObject.prototype.loadControls = function (controlData) {
            var sprites = [];
            for (var id in controlData) {
                if (controlData.hasOwnProperty(id)) {
                    var controls = control_class_1.Control.fromData(controlData[id]);
                    if (controls instanceof control_class_1.Control) {
                        sprites.push(controls.sprite);
                        this._controlsDictionary[id] = controls;
                    }
                    else {
                        var sprite = void 0;
                        for (var zoneId in controls) {
                            if (controls.hasOwnProperty(zoneId)) {
                                var completeId = id + "_" + zoneId;
                                if (!sprite) {
                                    sprite = controls[zoneId].sprite;
                                }
                                this._controlsDictionary[completeId] = controls[zoneId];
                            }
                        }
                        sprites.push(sprite);
                    }
                }
            }
            return sprites;
        };
        return GameObject;
    }());
    exports.GameObject = GameObject;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=game-object.class.js.map

/***/ }),
/* 10 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(11)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, status_subscription_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StatusDispatcher = /** @class */ (function () {
        function StatusDispatcher() {
            this._subscriptions = [];
            this._statusValues = {};
        }
        StatusDispatcher.prototype.setStatus = function (statusName, value) {
            var _this = this;
            this._subscriptions.forEach(function (subscription) {
                if (subscription.statusName === statusName && value != _this._statusValues[statusName]) {
                    subscription.call(value);
                }
            });
            this._statusValues[statusName] = value;
        };
        StatusDispatcher.prototype.subscribe = function (statusName, callback) {
            var subscription = new status_subscription_class_1.StatusSubscription(statusName, callback, this);
            if (this._statusValues[statusName]) {
                subscription.call(this._statusValues[statusName]);
            }
            this._subscriptions.push(subscription);
            return subscription;
        };
        StatusDispatcher.prototype.deleteSubscription = function (subscription) {
            var index = this._subscriptions.indexOf(subscription);
            if (index !== -1) {
                this._subscriptions.splice(index, 1);
            }
        };
        return StatusDispatcher;
    }());
    exports.StatusDispatcher = StatusDispatcher;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=status-dispatcher.class.js.map

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StatusSubscription = /** @class */ (function () {
        function StatusSubscription(statusName, _callback, _dispatcher) {
            this.statusName = statusName;
            this._callback = _callback;
            this._dispatcher = _dispatcher;
        }
        StatusSubscription.prototype.call = function (value) {
            this._callback(value);
        };
        StatusSubscription.prototype.unsubscribe = function () {
            this._dispatcher.deleteSubscription(this);
        };
        return StatusSubscription;
    }());
    exports.StatusSubscription = StatusSubscription;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=status-subscription.class.js.map

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4), __webpack_require__(13), __webpack_require__(2), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, image_display_element_1, status_class_1, utils_class_1, file_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Sprite = /** @class */ (function (_super) {
        __extends(Sprite, _super);
        /**
         * The sprite is the basic display unit in Blip
         * @param file
         * @param x
         * @param y
         * @param scale
         * @param initVisibility
         */
        function Sprite(file, x, y, scale, initVisibility) {
            if (scale === void 0) { scale = 1; }
            if (initVisibility === void 0) { initVisibility = false; }
            var _this = _super.call(this, file, x, y, scale) || this;
            _this.visibilities = [];
            _this.visible = initVisibility;
            return _this;
        }
        /**
         * Create a sprite from raw datas
         * @param data
         * @returns {Sprite}
         */
        Sprite.fromData = function (data) {
            var defaults = {
                file: "",
                x: 0,
                y: 0,
                scale: 1,
                initVisibility: false
            };
            var param = utils_class_1.Utils.verifyAndExtends(data, defaults);
            var file = new file_class_1.File(param["file"]);
            return new Sprite(file, param["x"], param["y"], param["scale"], param["initVisibility"]);
        };
        /**
         * Displays the sprite in a DOM element
         * @param container - The DOM element where the sprite will be append
         * @returns {HTMLElement}
         */
        Sprite.prototype.displayInDOMElement = function (container) {
            var elem = _super.prototype.displayInDOMElement.call(this, container);
            this._DOMElement.classList.add("inactive");
            this._setVisibility();
            return elem;
        };
        /**
         * Displays the sprite in a DOM element, selected by id
         * @param id
         */
        Sprite.prototype.displayInDocumentById = function (id) {
            _super.prototype.displayInDocumentById.call(this, id);
            this._setVisibility();
        };
        /**
         * Show or hide the sprite, according to the visibility boolean variable
         * @private
         */
        Sprite.prototype._setVisibility = function () {
            if (this.visible) {
                this.show();
            }
            else {
                this.hide();
            }
        };
        /**
         * Displays the sprite and sets its status to visible
         */
        Sprite.prototype.show = function (instanceNumber) {
            if (instanceNumber === void 0) { instanceNumber = 0; }
            if (this.visibilities.length === 0) {
                this.setStatus(status_class_1.Status.VISIBILITY, status_class_1.Status.VISIBLE);
                this._DOMElement.classList.remove("inactive");
                this._DOMElement.classList.add("active");
                this.visible = true;
            }
            if (this.visibilities.indexOf(instanceNumber) === -1) {
                this.visibilities.push(instanceNumber);
            }
        };
        /**
         * Alias to Show()
         */
        Sprite.prototype.display = function (instanceNumber) {
            if (instanceNumber === void 0) { instanceNumber = 0; }
            this.show();
        };
        /**
         * Hides the sprites, and sets its status to hidden
         */
        Sprite.prototype.hide = function (instanceNumber) {
            if (instanceNumber === void 0) { instanceNumber = 0; }
            if (this.visibilities.length === 1) {
                this.setStatus(status_class_1.Status.VISIBILITY, status_class_1.Status.HIDDEN);
                this._DOMElement.classList.add("inactive");
                this._DOMElement.classList.remove("active");
                this.visible = false;
            }
            var index = this.visibilities.indexOf(instanceNumber);
            if (index !== -1) {
                this.visibilities.splice(index, 1);
            }
        };
        /**
         * Toggles the sprite's visibility
         */
        Sprite.prototype.toggle = function () {
            if (this.visible) {
                this.hide();
            }
            else {
                this.show();
            }
        };
        return Sprite;
    }(image_display_element_1.ImageDisplayElement));
    exports.Sprite = Sprite;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=sprite.class.js.map

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 08/03/2017.
     */
    var Status = /** @class */ (function () {
        function Status() {
        }
        Status.VISIBILITY = "visibility";
        Status.VISIBLE = "visible";
        Status.HIDDEN = "hidden";
        return Status;
    }());
    exports.Status = Status;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=status.class.js.map

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(7)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, sprites_group_state_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SpritesGroup = /** @class */ (function () {
        function SpritesGroup(sprites, states) {
            if (states === void 0) { states = []; }
            this.sprites = sprites;
            this.states = states;
        }
        SpritesGroup.prototype.show = function () {
            this.sprites.forEach(function (sprite) { return sprite.show(); });
        };
        SpritesGroup.prototype.display = function () {
            this.show();
        };
        SpritesGroup.prototype.hide = function () {
            this.sprites.forEach(function (sprite) { return sprite.hide(); });
        };
        SpritesGroup.prototype.toggle = function () {
            this.sprites.forEach(function (sprite) { return sprite.toggle(); });
        };
        SpritesGroup.prototype.createState = function (sprites) {
            sprites.forEach(function (sprite) {
                if (sprites.indexOf(sprite) === -1) {
                    console.error("State sprite is not in group");
                    return null;
                }
            });
            var state = new sprites_group_state_class_1.SpritesGroupState(this, sprites);
            this.states.push(state);
            return state;
        };
        return SpritesGroup;
    }());
    exports.SpritesGroup = SpritesGroup;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=sprites-group.class.js.map

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(16), __webpack_require__(0), __webpack_require__(1), __webpack_require__(2), __webpack_require__(6)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, control_sprite_class_1, event_dispatcher_class_1, events_class_1, utils_class_1, file_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ControlZone = /** @class */ (function () {
        function ControlZone(x, y, width, height) {
            this.x = x;
            this.y = y;
            this.width = width;
            this.height = height;
        }
        return ControlZone;
    }());
    exports.ControlZone = ControlZone;
    var Control = /** @class */ (function (_super) {
        __extends(Control, _super);
        function Control(sprite, zone, bindedKey) {
            if (zone === void 0) { zone = null; }
            if (bindedKey === void 0) { bindedKey = null; }
            var _this = _super.call(this) || this;
            _this.sprite = sprite;
            _this.zone = zone;
            _this.bindedKey = bindedKey;
            var self = _this;
            _this.upHandler = function (evt) {
                self.checkZoneEvent(events_class_1.Events.CONTROL_UP, evt);
            };
            _this.downHandler = function (evt) {
                self.checkZoneEvent(events_class_1.Events.CONTROL_DOWN, evt);
            };
            _this.keyDownHandler = function (evt) {
                if (_this.bindedKey === evt.key) {
                    _this.dispatchEvent(events_class_1.Events.CONTROL_DOWN);
                }
            };
            _this.keyUpHandler = function (evt) {
                if (_this.bindedKey === evt.key) {
                    _this.dispatchEvent(events_class_1.Events.CONTROL_UP);
                }
            };
            return _this;
        }
        Control.prototype.setZone = function (x, y, width, height) {
            this.zone = new ControlZone(x, y, width, height);
        };
        Control.prototype.checkZoneEvent = function (eventName, event) {
            if (this.zone) {
                var x = event.offsetX;
                var y = event.offsetY;
                if (x >= this.zone.x
                    &&
                        x <= this.zone.x + this.zone.width
                    &&
                        y >= this.zone.y
                    &&
                        y <= this.zone.y + this.zone.height) {
                    this.dispatchEvent(eventName);
                }
            }
            else {
                this.dispatchEvent(eventName);
            }
        };
        Control.prototype._onMouseDown = function (evt) {
            this.checkZoneEvent(events_class_1.Events.CONTROL_DOWN, evt);
        };
        Control.prototype._onMouseUp = function (evt) {
            this.checkZoneEvent(events_class_1.Events.CONTROL_UP, evt);
        };
        Control.fromData = function (data) {
            var defaults = {
                file: "",
                x: 0,
                y: 0,
                scale: 1
            };
            var spriteParams = utils_class_1.Utils.verifyAndExtends(data["sprite"], defaults);
            var file = new file_class_1.File(spriteParams["file"]);
            var controlSprite = new control_sprite_class_1.ControlSprite(file, spriteParams["x"], spriteParams["y"], spriteParams["scale"]);
            if (!data["zones"] || Object.keys(data["zones"]).length === 0) {
                return new Control(controlSprite, null, data["key"]);
            }
            else if (data["zones"]) {
                var multiControls = {};
                for (var zoneId in data["zones"]) {
                    if (data["zones"].hasOwnProperty(zoneId)) {
                        var zoneDatas = data["zones"][zoneId];
                        var zone = new ControlZone(zoneDatas["x"], zoneDatas["y"], zoneDatas["width"], zoneDatas["height"]);
                        multiControls[zoneId] = new Control(controlSprite, zone, zoneDatas["key"]);
                    }
                }
                return multiControls;
            }
        };
        Control.prototype.enable = function () {
            this.sprite.DOMElement.addEventListener("mousedown", this.downHandler);
            this.sprite.DOMElement.addEventListener("mouseup", this.upHandler);
            document.addEventListener("keydown", this.keyDownHandler);
            document.addEventListener("keyup", this.keyUpHandler);
        };
        Control.prototype.disable = function () {
            this.sprite.DOMElement.removeEventListener("mousedown", this.downHandler);
            this.sprite.DOMElement.removeEventListener("mouseup", this.upHandler);
            document.removeEventListener("keydown", this.keyDownHandler);
            document.removeEventListener("keyup", this.keyUpHandler);
        };
        return Control;
    }(event_dispatcher_class_1.EventDispatcher));
    exports.Control = Control;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=control.class.js.map

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, image_display_element_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ControlSprite = /** @class */ (function (_super) {
        __extends(ControlSprite, _super);
        function ControlSprite(file, x, y, scale) {
            if (scale === void 0) { scale = 1; }
            return _super.call(this, file, x, y, scale) || this;
        }
        ControlSprite.prototype.getDOMElement = function () {
            var div = _super.prototype.getDOMElement.call(this);
            div.classList.add("control");
            return div;
        };
        ControlSprite.prototype.displayInDOMElement = function (container) {
            var elem = _super.prototype.displayInDOMElement.call(this, container);
            return elem;
        };
        Object.defineProperty(ControlSprite.prototype, "DOMElement", {
            get: function () {
                return this._DOMElement;
            },
            enumerable: true,
            configurable: true
        });
        return ControlSprite;
    }(image_display_element_1.ImageDisplayElement));
    exports.ControlSprite = ControlSprite;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=control-sprite.class.js.map

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var EventListener = /** @class */ (function () {
        function EventListener(eventName, _callback, _dispatcher) {
            this.eventName = eventName;
            this._callback = _callback;
            this._dispatcher = _dispatcher;
        }
        EventListener.prototype.call = function (param) {
            this._callback(param);
        };
        EventListener.prototype.stoplisten = function () {
            this._dispatcher.deleteListener(this);
        };
        return EventListener;
    }());
    exports.EventListener = EventListener;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=event-listener.class.js.map

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, event_dispatcher_class_1, events_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Sequence = /** @class */ (function (_super) {
        __extends(Sequence, _super);
        function Sequence(group, states, loopType) {
            if (states === void 0) { states = []; }
            if (loopType === void 0) { loopType = ""; }
            var _this = _super.call(this) || this;
            _this.group = group;
            _this.states = states;
            _this.loopType = loopType;
            _this._direction = 1;
            _this._currentIndex = -1;
            return _this;
        }
        Sequence.prototype._isIndexValid = function (index) {
            return index >= 0 && index < this.states.length;
        };
        Sequence.prototype.hide = function () {
            this.states.forEach(function (state) { return state.hide(); });
        };
        Sequence.prototype.displayAtIndex = function (index, forced) {
            //if (!this._isIndexValid(index)) return false;
            if (forced === void 0) { forced = false; }
            if (!forced && (index <= -1 || index >= this.states.length)) {
                return false;
            }
            if (index <= -1) {
                if (this.loopType === Sequence.LOOP_TYPE_CIRCLE) {
                    this.reverse();
                    this.displayAtIndex(1);
                }
                else if (this.loopType === Sequence.LOOP_TYPE_RESET) {
                    this.displayAtIndex(this.states.length - 1);
                }
                return false;
            }
            else if (index >= this.states.length) {
                if (this.loopType === Sequence.LOOP_TYPE_CIRCLE) {
                    this.reverse();
                    this.displayAtIndex(this.states.length - 2);
                }
                else if (this.loopType === Sequence.LOOP_TYPE_RESET) {
                    this.displayAtIndex(0);
                }
                return false;
            }
            this.hide();
            this._currentIndex = index;
            this.states[index].display();
            this.dispatchEvent(events_class_1.Events.SEQUENCE_ENTER_STATE, this.states[index]);
            return true;
        };
        Sequence.prototype.reverse = function () {
            this._direction *= -1;
        };
        /*inverse() {
            if (this._currentIndex === -1) {
                this._currentIndex = this.states.length;
            }
        }*/
        Sequence.prototype.hasNext = function () {
            var nextIndex = this._currentIndex + this._direction;
            return !(nextIndex <= -1 || nextIndex >= this.states.length);
        };
        Sequence.prototype.displayNext = function (forced) {
            if (forced === void 0) { forced = false; }
            var done = this.displayAtIndex(this._currentIndex + this._direction, forced);
            /*if (!done && this.loopType === Sequence.LOOP_TYPE_CIRCLE) {
                this.reverse();
            }*/
            return done;
        };
        Sequence.prototype.hasPrevious = function () {
            var previousIndex = this._currentIndex - this._direction;
            return !(previousIndex <= -1 || previousIndex >= this.states.length);
        };
        Sequence.prototype.displayPrevious = function (forced) {
            if (forced === void 0) { forced = false; }
            var done = this.displayAtIndex(this._currentIndex - this._direction, forced);
            /*if (!done && this.loopType === Sequence.LOOP_TYPE_CIRCLE) {
                this.reverse();
            }*/
            if (!done && this.loopType === Sequence.LOOP_TYPE_RESET) {
                this.resetIndex();
            }
            return done;
        };
        Sequence.prototype.reset = function () {
            if (this._currentIndex !== -1) {
                this.states[this._currentIndex].hide();
            }
            this._currentIndex = -1;
        };
        Sequence.prototype.resetIndex = function () {
            this._currentIndex = -1;
        };
        // 1 2 3 4 3 2 1 2 3 4
        Sequence.LOOP_TYPE_CIRCLE = "circle";
        // 1 2 3 4 1 2 3 4 1 2 3 4
        Sequence.LOOP_TYPE_RESET = "reset";
        return Sequence;
    }(event_dispatcher_class_1.EventDispatcher));
    exports.Sequence = Sequence;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=sequence.class.js.map

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(1), __webpack_require__(8), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, event_dispatcher_class_1, events_class_1, clock_class_1, utils_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Animation = /** @class */ (function (_super) {
        __extends(Animation, _super);
        function Animation(sequence, iterations, period, interruptable) {
            if (interruptable === void 0) { interruptable = true; }
            var _this = _super.call(this) || this;
            _this.sequence = sequence;
            _this.iterations = iterations;
            _this.period = period;
            _this.interruptable = interruptable;
            _this.isPlaying = false;
            return _this;
        }
        Animation.fromData = function (data, groupId, scene) {
            var defaults = {
                sequence: "",
                period: 1,
                iterations: 1,
                interruptable: false
            };
            var param = utils_class_1.Utils.verifyAndExtends(data, defaults);
            var period;
            if (typeof param.period === "number") {
                period = param.period;
            }
            else {
                period = scene.getClock(param.period);
            }
            var sequence = scene.getSequence(groupId, param.sequence);
            return new Animation(sequence, param.iterations, period, param.interruptable);
        };
        Animation.prototype.play = function () {
            var _this = this;
            if (this.interruptable === false && this.isPlaying) {
                occurencesCounter = 0;
                return;
            }
            this.sequence.reset();
            this.sequence.displayNext(true);
            var occurencesCounter = 0;
            this.isPlaying = true;
            if (this.period instanceof clock_class_1.Clock) {
                this.clockListener = this.period.listen(events_class_1.Events.CLOCK_PERIOD, function () {
                    _this.animationAction(occurencesCounter);
                });
            }
            else {
                this.animationInterval = setInterval(function () {
                    _this.animationAction(occurencesCounter);
                }, this.period * 1000);
            }
        };
        Animation.prototype.animationAction = function (occurencesCounter) {
            if (this.isPlaying === false)
                return;
            if (!this.sequence.displayNext(occurencesCounter < this.iterations - 1)) {
                this.dispatchEvent(events_class_1.Events.ANIMATION_ITERATION_END, occurencesCounter);
                occurencesCounter++;
                if (occurencesCounter >= this.iterations) {
                    clearInterval(this.animationInterval);
                    this.dispatchEvent(events_class_1.Events.ANIMATION_END);
                    this.dispatchEvent(events_class_1.Events.END_PLAYING);
                    this.isPlaying = false;
                }
                else {
                    // on repart à zéro
                    //this.sequence.resetIndex();
                    //this.sequence.displayNext(true);
                    //this.sequence.reverse();
                }
            }
        };
        Animation.prototype.stop = function () {
            if (this.period instanceof clock_class_1.Clock) {
                this.period.deleteListener(this.clockListener);
            }
            else {
                clearInterval(this.animationInterval);
            }
            this.isPlaying = false;
        };
        Animation.prototype.reset = function () {
            this.sequence.reset();
            if (this.animationInterval !== undefined) {
                clearInterval(this.animationInterval);
                this.animationInterval = undefined;
            }
            this.isPlaying = false;
        };
        return Animation;
    }(event_dispatcher_class_1.EventDispatcher));
    exports.Animation = Animation;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=animation.class.js.map

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(5), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, display_element_class_1, events_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Seg7Displayer = /** @class */ (function (_super) {
        __extends(Seg7Displayer, _super);
        function Seg7Displayer(x, y, scale, variable) {
            if (scale === void 0) { scale = 1; }
            if (variable === void 0) { variable = null; }
            var _this = _super.call(this, x, y, scale) || this;
            _this.variable = variable;
            _this._currentValue = null;
            if (variable)
                _this.bindVariable(variable);
            return _this;
        }
        Seg7Displayer.prototype.getDOMElement = function () {
            if (this._DOMElement) {
                return this._DOMElement;
            }
            else {
                var div = _super.prototype.getDOMElement.call(this);
                this.txtDiv = document.createElement("div");
                div.appendChild(this.txtDiv);
                div.classList.add("seg7-displayer");
                if (this.value) {
                    this.value = this._currentValue;
                }
                return div;
            }
        };
        Seg7Displayer.prototype.bindVariable = function (variable) {
            var _this = this;
            this.variable = variable;
            if (variable.value !== null)
                this.value = +variable.value;
            variable.listen(events_class_1.Events.VARIABLE_CHANGE, function (value) { return _this.value = +value; });
        };
        Object.defineProperty(Seg7Displayer.prototype, "value", {
            get: function () {
                return this._currentValue;
            },
            set: function (value) {
                if (this.txtDiv)
                    this.txtDiv.innerHTML = String(value);
                this._currentValue = value;
            },
            enumerable: true,
            configurable: true
        });
        Seg7Displayer.prototype.clear = function () {
            this.txtDiv.innerHTML = " ";
            this._currentValue = null;
        };
        return Seg7Displayer;
    }(display_element_class_1.DisplayElement));
    exports.Seg7Displayer = Seg7Displayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=seg7-displayer.class.js.map

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Created by Christophe on 03/02/2017.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Condition = /** @class */ (function () {
        function Condition(type) {
            this.type = type;
        }
        return Condition;
    }());
    exports.Condition = Condition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=condition.class.js.map

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Created by Christophe on 03/02/2017.
 */
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConditionTypes = /** @class */ (function () {
        function ConditionTypes() {
        }
        ConditionTypes.SEQUENCE_CONDITION = "sequence_condition";
        ConditionTypes.VARIABLE_CONDITION = "variable_condition";
        return ConditionTypes;
    }());
    exports.ConditionTypes = ConditionTypes;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=condition-types.class.js.map

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(21), __webpack_require__(22)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, condition_class_1, condition_types_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var SequenceCondition = /** @class */ (function (_super) {
        __extends(SequenceCondition, _super);
        function SequenceCondition(sequence, operator, sequenceConditionType) {
            var _this = _super.call(this, condition_types_class_1.ConditionTypes.SEQUENCE_CONDITION) || this;
            _this.sequence = sequence;
            _this.operator = operator;
            _this.sequenceConditionType = sequenceConditionType;
            return _this;
        }
        return SequenceCondition;
    }(condition_class_1.Condition));
    exports.SequenceCondition = SequenceCondition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=sequence-condition.class.js.map

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, event_dispatcher_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Graph = /** @class */ (function (_super) {
        __extends(Graph, _super);
        function Graph(nodes) {
            var _this = _super.call(this) || this;
            _this.nodes = nodes;
            return _this;
        }
        Graph.prototype.hide = function () {
            this.nodes.forEach(function (node) { return node.hide(); });
        };
        Graph.prototype.setCurrentNodeIndex = function (index) {
            if (index === void 0) { index = 0; }
            this.setNodeAsCurrent(this.nodes[index]);
        };
        Graph.prototype.setNodeAsCurrent = function (node) {
            var _this = this;
            if (this._currentNode) {
                this._currentNode.disable();
            }
            this._currentNode = node;
            this.hide();
            node.display();
            node.enable(function (newNode) {
                // callback de changement de noeud
                _this.setNodeAsCurrent(newNode);
            });
        };
        return Graph;
    }(event_dispatcher_class_1.EventDispatcher));
    exports.Graph = Graph;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=graph.class.js.map

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, event_dispatcher_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GraphLink = /** @class */ (function (_super) {
        __extends(GraphLink, _super);
        function GraphLink(destNode, trigger) {
            var _this = _super.call(this) || this;
            _this.destNode = destNode;
            _this.trigger = trigger;
            return _this;
        }
        GraphLink.prototype.enableTrigger = function (callback) {
            var _this = this;
            this.trigger.bind(function () { return callback(_this.destNode); });
            this.trigger.enable();
        };
        GraphLink.prototype.disableTrigger = function () {
            this.trigger.unbind();
            this.trigger.disable();
        };
        return GraphLink;
    }(event_dispatcher_class_1.EventDispatcher));
    exports.GraphLink = GraphLink;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=graph-link.class.js.map

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, event_dispatcher_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GraphNode = /** @class */ (function (_super) {
        __extends(GraphNode, _super);
        function GraphNode(state, links) {
            if (links === void 0) { links = []; }
            var _this = _super.call(this) || this;
            _this.state = state;
            _this.links = links;
            return _this;
        }
        GraphNode.prototype.addLink = function (link) {
            this.links.push(link);
        };
        GraphNode.prototype.display = function () {
            this.state.display();
        };
        GraphNode.prototype.hide = function () {
            this.state.hide();
        };
        GraphNode.prototype.enable = function (callback) {
            this.links.forEach(function (link) { return link.enableTrigger(callback); });
        };
        GraphNode.prototype.disable = function () {
            this.links.forEach(function (link) { return link.disableTrigger(); });
        };
        return GraphNode;
    }(event_dispatcher_class_1.EventDispatcher));
    exports.GraphNode = GraphNode;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=graph-node.class.js.map

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, base_trigger_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TimeTrigger = /** @class */ (function (_super) {
        __extends(TimeTrigger, _super);
        function TimeTrigger(time, callback) {
            if (callback === void 0) { callback = null; }
            var _this = _super.call(this, callback) || this;
            _this.time = time;
            return _this;
        }
        TimeTrigger.prototype.enable = function () {
            var _this = this;
            this.timeout = setTimeout(function () {
                if (_this.callback)
                    _this.callback();
            }, this.time * 1000);
        };
        TimeTrigger.prototype.disable = function () {
            clearTimeout(this.timeout);
        };
        return TimeTrigger;
    }(base_trigger_class_1.BaseTrigger));
    exports.TimeTrigger = TimeTrigger;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=time-trigger.class.js.map

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(9)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, game_object_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var HTMLGameObject = /** @class */ (function (_super) {
        __extends(HTMLGameObject, _super);
        function HTMLGameObject(data) {
            if (data === void 0) { data = {}; }
            return _super.call(this, data) || this;
        }
        HTMLGameObject.prototype.loadData = function (data) {
            var param = _super.prototype.loadData.call(this, data);
            this.loadDecorations(param["backgrounds"], this._backgroundsContainer);
            this.loadDecorations(param["foregrounds"], this._foregroundsContainer);
            this.loadControls(param["controls"], this._controlsContainer);
            return param;
        };
        HTMLGameObject.prototype.getDOMElement = function () {
            if (this._DOMElement) {
                return this._DOMElement;
            }
            else {
                var div = document.createElement("div");
                div.className = "game-scene";
                this._DOMElement = div;
                var gameContainer = document.createElement("div");
                gameContainer.className = "game-container";
                div.appendChild(gameContainer);
                gameContainer.style.transform = "scale(" + this._params["gameContainerScale"] + ")";
                //backgrounds
                this._backgroundsContainer = document.createElement("div");
                this._backgroundsContainer.classList.add("backgrounds-container");
                gameContainer.appendChild(this._backgroundsContainer);
                // sprites
                this._spritesContainer = document.createElement("div");
                this._spritesContainer.classList.add("sprites-container");
                gameContainer.appendChild(this._spritesContainer);
                // foregrounds
                this._foregroundsContainer = document.createElement("div");
                this._foregroundsContainer.classList.add("foregrounds-container");
                gameContainer.appendChild(this._foregroundsContainer);
                // controls
                this._controlsContainer = document.createElement("div");
                this._controlsContainer.classList.add("controls-container");
                div.appendChild(this._controlsContainer);
                return div;
            }
        };
        HTMLGameObject.prototype.displayIn = function (element) {
            var type = typeof element;
            if (type === "string") {
                this.displayInDOMElementById(element);
            }
            else if (element instanceof HTMLElement) {
                this.displayInDOMElement(element);
            }
        };
        HTMLGameObject.prototype.displayInDOMElement = function (container) {
            this._DOMElement = this.getDOMElement();
            container.appendChild(this._DOMElement);
            return this._DOMElement;
        };
        HTMLGameObject.prototype.displayInDOMElementById = function (containerId) {
            this._DOMElement = this.getDOMElement();
            var element = document.getElementById(containerId);
            element.appendChild(this._DOMElement);
        };
        HTMLGameObject.prototype.loadSprites = function (spritesData) {
            var _this = this;
            this.getDOMElement();
            var sprites = _super.prototype.loadSprites.call(this, spritesData);
            sprites.forEach(function (sprite) { return sprite.displayInDOMElement(_this._spritesContainer); });
            return sprites;
        };
        HTMLGameObject.prototype.loadDecorations = function (decorationDatas, container) {
            if (container === void 0) { container = null; }
            this.getDOMElement();
            var decorations = _super.prototype.loadDecorations.call(this, decorationDatas);
            decorations.forEach(function (decoration) { return decoration.displayInDOMElement(container); });
            return decorations;
        };
        HTMLGameObject.prototype.loadControls = function (controlsDatas, container) {
            if (container === void 0) { container = null; }
            this.getDOMElement();
            var sprites = _super.prototype.loadControls.call(this, controlsDatas);
            sprites.forEach(function (sprite) { return sprite.displayInDOMElement(container); });
            return null;
        };
        return HTMLGameObject;
    }(game_object_class_1.GameObject));
    exports.HTMLGameObject = HTMLGameObject;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=html-game-object.class.js.map

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(20), __webpack_require__(5)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, seg7_displayer_class_1, display_element_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var LcdDisplayer = /** @class */ (function (_super) {
        __extends(LcdDisplayer, _super);
        function LcdDisplayer(x, y, digitNumber, stepWidth, scale, variable) {
            if (digitNumber === void 0) { digitNumber = 1; }
            if (stepWidth === void 0) { stepWidth = 24; }
            if (scale === void 0) { scale = 1; }
            if (variable === void 0) { variable = null; }
            var _this = _super.call(this, x, y, scale) || this;
            _this.digitNumber = digitNumber;
            _this.stepWidth = stepWidth;
            _this.variable = variable;
            _this._backgroundDigits = [];
            _this._digits = [];
            _this._xPosition = 0;
            return _this;
        }
        Object.defineProperty(LcdDisplayer.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                var stringifiedValue = String(value);
                for (var index in this._digits) {
                    if (this._digits.hasOwnProperty(index)) {
                        this._digits[index].value = +stringifiedValue[index];
                    }
                }
                this._value = value;
            },
            enumerable: true,
            configurable: true
        });
        LcdDisplayer.prototype.getDOMElement = function () {
            if (this._DOMElement) {
                return this._DOMElement;
            }
            else {
                var displayerDiv = _super.prototype.getDOMElement.call(this);
                displayerDiv.classList.add("lcd-displayer");
                for (var i = 0; i < this.digitNumber; i++) {
                    var backgroundDigit = new seg7_displayer_class_1.Seg7Displayer(this._xPosition, 0);
                    backgroundDigit.value = 8;
                    var backgroundElem = backgroundDigit.displayInDOMElement(displayerDiv);
                    backgroundElem.classList.add("inactive");
                    this._backgroundDigits.push(backgroundDigit);
                    var foregroundDigit = new seg7_displayer_class_1.Seg7Displayer(this._xPosition, 0);
                    foregroundDigit.value = 4;
                    foregroundDigit.displayInDOMElement(displayerDiv);
                    this._digits.push(foregroundDigit);
                    this._xPosition += this.stepWidth;
                }
                return displayerDiv;
            }
        };
        return LcdDisplayer;
    }(display_element_class_1.DisplayElement));
    exports.LcdDisplayer = LcdDisplayer;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=lcd-displayer.class.js.map

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, event_dispatcher_class_1, events_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    /**
     * Created by Christophe on 03/02/2017.
     */
    var Variable = /** @class */ (function (_super) {
        __extends(Variable, _super);
        function Variable(type, initValue) {
            if (initValue === void 0) { initValue = null; }
            var _this = _super.call(this) || this;
            _this.type = type;
            _this.initValue = initValue;
            _this._currentValue = initValue;
            return _this;
        }
        Object.defineProperty(Variable.prototype, "value", {
            get: function () {
                return this._currentValue;
            },
            set: function (value) {
                this._currentValue = value;
                this.dispatchEvent(events_class_1.Events.VARIABLE_CHANGE, this.value);
            },
            enumerable: true,
            configurable: true
        });
        Variable.prototype.getType = function () {
            return typeof this._currentValue;
        };
        Variable.prototype.increment = function () {
            if (this.type === Variable.NUMBER_TYPE) {
                this.value += 1;
            }
        };
        Variable.prototype.decrement = function () {
            if (this.type === Variable.NUMBER_TYPE) {
                this.value -= 1;
            }
        };
        Variable.prototype.reset = function (newInitValue) {
            if (newInitValue === void 0) { newInitValue = null; }
            if (newInitValue) {
                this.initValue = newInitValue;
            }
            this.value = this.initValue;
        };
        Variable.STRING_TYPE = "string";
        Variable.NUMBER_TYPE = "number";
        Variable.BOOLEAN_TYPE = "boolean";
        return Variable;
    }(event_dispatcher_class_1.EventDispatcher));
    exports.Variable = Variable;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=variable.class.js.map

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(23)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, sequence_condition_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var OnStateSequenceCondition = /** @class */ (function (_super) {
        __extends(OnStateSequenceCondition, _super);
        function OnStateSequenceCondition() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        OnStateSequenceCondition.prototype.eval = function () {
            return true;
        };
        return OnStateSequenceCondition;
    }(sequence_condition_class_1.SequenceCondition));
    exports.OnStateSequenceCondition = OnStateSequenceCondition;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=onstate-sequence-condition.class.js.map

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var context = new AudioContext();
    var Sound = /** @class */ (function () {
        function Sound(file) {
            this.file = file;
            this.load();
        }
        Sound.prototype.load = function () {
            var _this = this;
            var request = new XMLHttpRequest();
            request.open('GET', this.file.path, true);
            request.responseType = 'arraybuffer';
            request.onload = function () {
                context.decodeAudioData(request.response, function (buffer) {
                    _this._buffer = buffer;
                }, function () { return console.log("Sound loading failed"); });
            };
            request.send();
        };
        Sound.prototype.play = function () {
            var source = context.createBufferSource();
            source.buffer = this._buffer;
            source.connect(context.destination);
            source.start(0);
        };
        Sound.prototype.stop = function () {
            // useful ??
        };
        Sound.prototype.pause = function () {
            // useful ??
        };
        return Sound;
    }());
    exports.Sound = Sound;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=sound.class.js.map

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, base_trigger_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Trigger = /** @class */ (function (_super) {
        __extends(Trigger, _super);
        function Trigger(dispatcher, eventName, callback, argument) {
            if (callback === void 0) { callback = null; }
            if (argument === void 0) { argument = null; }
            var _this = _super.call(this, callback) || this;
            _this.dispatcher = dispatcher;
            _this.eventName = eventName;
            _this.argument = argument;
            return _this;
        }
        Trigger.prototype._callback = function (arg) {
            if (!this._enabled || !this.callback)
                return;
            if (this.argument) {
                if (arg !== this.argument) {
                    return;
                }
            }
            this.callback(arg);
        };
        Object.defineProperty(Trigger.prototype, "enabled", {
            get: function () {
                return this._enabled;
            },
            set: function (value) {
                if (value) {
                    this.enable();
                }
                else {
                    this.disable();
                }
            },
            enumerable: true,
            configurable: true
        });
        Trigger.prototype.enable = function () {
            var _this = this;
            if (!this._enabled) {
                this.subscription = this.dispatcher.listen(this.eventName, function (arg) {
                    _this._callback(arg);
                });
            }
            this._enabled = true;
        };
        Trigger.prototype.disable = function () {
            if (this._enabled) {
                this.subscription.stoplisten();
            }
            this._enabled = false;
        };
        return Trigger;
    }(base_trigger_class_1.BaseTrigger));
    exports.Trigger = Trigger;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=trigger.class.js.map

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, base_trigger_class_1, events_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var StatesCollisionTrigger = /** @class */ (function (_super) {
        __extends(StatesCollisionTrigger, _super);
        function StatesCollisionTrigger(baseSprite, targetSprite, callback, onEvent, offEvent) {
            if (callback === void 0) { callback = null; }
            if (onEvent === void 0) { onEvent = events_class_1.Events.DISPLAYED; }
            if (offEvent === void 0) { offEvent = events_class_1.Events.HIDDEN; }
            var _this = _super.call(this, callback) || this;
            _this.baseSprite = baseSprite;
            _this.targetSprite = targetSprite;
            _this.onEvent = onEvent;
            _this.offEvent = offEvent;
            _this.ON = "on";
            _this.OFF = "off";
            return _this;
        }
        StatesCollisionTrigger.prototype.enable = function () {
            if (!this._enabled) {
                // dans un sens
                /*this.baseSprite.listen(this.onEvent, () => {
                    this._baseSpriteStatus = this.ON;
                });
    
                this._baseSpriteSubscription1 = this.baseSprite.listen(this.onEvent, () => {
                    this._targetSpriteSubscription1 = this.targetSprite.listen(this.onEvent, () => this.callback());
                });*/
                // et dans l'autre
                /*this._targetSpriteSubscription2 = this.targetSprite.listen(this.onEvent, () => {
                    this._baseSpriteSubscription2 = this.baseSprite.listen(this.onEvent, () => this.callback());
                });*/
            }
            _super.prototype.enable.call(this);
        };
        StatesCollisionTrigger.prototype.disable = function () {
            if (this.baseSpriteSubscription1)
                this.baseSpriteSubscription1.stoplisten();
            if (this.targetSpriteSubscription1)
                this.targetSpriteSubscription1.stoplisten();
            if (this.baseSpriteSubscription2)
                this.baseSpriteSubscription2.stoplisten();
            if (this.targetSpriteSubscription2)
                this.targetSpriteSubscription2.stoplisten();
            _super.prototype.disable.call(this);
        };
        return StatesCollisionTrigger;
    }(base_trigger_class_1.BaseTrigger));
    exports.StatesCollisionTrigger = StatesCollisionTrigger;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=states-collision-trigger.class.js.map

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, event_dispatcher_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConditionalSpritesGroupState = /** @class */ (function (_super) {
        __extends(ConditionalSpritesGroupState, _super);
        function ConditionalSpritesGroupState(state, condition) {
            var _this = _super.call(this) || this;
            _this.state = state;
            _this.condition = condition;
            return _this;
        }
        return ConditionalSpritesGroupState;
    }(event_dispatcher_class_1.EventDispatcher));
    exports.ConditionalSpritesGroupState = ConditionalSpritesGroupState;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=conditional-sprites-group-state.class.js.map

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(0)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, event_dispatcher_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ConditionalSpritesGroupStateSet = /** @class */ (function (_super) {
        __extends(ConditionalSpritesGroupStateSet, _super);
        function ConditionalSpritesGroupStateSet(group, conditionalStates, defaultState) {
            if (conditionalStates === void 0) { conditionalStates = []; }
            var _this = _super.call(this) || this;
            _this.group = group;
            _this.conditionalStates = conditionalStates;
            _this.defaultState = defaultState;
            return _this;
        }
        ConditionalSpritesGroupStateSet.prototype.display = function () {
            for (var _i = 0, _a = this.conditionalStates; _i < _a.length; _i++) {
                var conditionalState = _a[_i];
                if (conditionalState.condition.eval()) {
                    conditionalState.state.display();
                    return;
                }
            }
            this.defaultState.display();
        };
        ConditionalSpritesGroupStateSet.prototype.update = function () {
            this.display();
        };
        ConditionalSpritesGroupStateSet.prototype.hide = function () {
            this.group.hide();
        };
        return ConditionalSpritesGroupStateSet;
    }(event_dispatcher_class_1.EventDispatcher));
    exports.ConditionalSpritesGroupStateSet = ConditionalSpritesGroupStateSet;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=conditional-sprites-group-state-set.class.js.map

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/**
 * Created by Christophe on 03/02/2017.
 */
//import {Observable} from "rxjs/Rx";
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    // tout ça est à voir plus tard
    var TimeUtils = /** @class */ (function () {
        function TimeUtils() {
        }
        return TimeUtils;
    }());
    exports.TimeUtils = TimeUtils;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=time-utils.class.js.map

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(44), __webpack_require__(27), __webpack_require__(45)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, control_down_trigger_class_1, time_trigger_class_1, control_up_trigger_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var TriggersObject = /** @class */ (function () {
        function TriggersObject(data, gameObject) {
            this.gameObject = gameObject;
            this._triggersDictionary = {};
            this._types = {
                controldown: control_down_trigger_class_1.ControlDownTrigger,
                controlup: control_up_trigger_class_1.ControlUpTrigger,
                time: time_trigger_class_1.TimeTrigger
            };
            this.loadData(data);
        }
        TriggersObject.prototype.loadData = function (data) {
            if (data.triggers) {
                for (var id in data.triggers) {
                    if (data.triggers.hasOwnProperty(id)) {
                        var type = data.triggers[id]["type"];
                        var trigger = void 0;
                        switch (type) {
                            case "controldown":
                                var ctrl = this.gameObject.getControl(data.triggers[id]["control"]);
                                trigger = new control_down_trigger_class_1.ControlDownTrigger(ctrl);
                                break;
                            case "time":
                                trigger = new time_trigger_class_1.TimeTrigger(data.triggers[id]["time"]);
                                break;
                        }
                        this._triggersDictionary[id] = trigger;
                    }
                }
            }
        };
        TriggersObject.prototype.getTrigger = function (triggerId) {
            return this._triggersDictionary[triggerId];
        };
        return TriggersObject;
    }());
    exports.TriggersObject = TriggersObject;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=triggers-object.class.js.map

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(3)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, base_trigger_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ControlTrigger = /** @class */ (function (_super) {
        __extends(ControlTrigger, _super);
        function ControlTrigger(control, eventName, callback) {
            if (callback === void 0) { callback = null; }
            var _this = _super.call(this, callback) || this;
            _this.control = control;
            _this.eventName = eventName;
            return _this;
        }
        ControlTrigger.prototype.enable = function () {
            this._listener = this.control.listen(this.eventName, this.callback);
        };
        ControlTrigger.prototype.disable = function () {
            this.control.deleteListener(this._listener);
        };
        return ControlTrigger;
    }(base_trigger_class_1.BaseTrigger));
    exports.ControlTrigger = ControlTrigger;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=control-trigger.class.js.map

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(26), __webpack_require__(25), __webpack_require__(24)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, graph_node_class_1, graph_link_class_1, graph_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var GraphObject = /** @class */ (function () {
        function GraphObject(data, triggers, scene) {
            this.triggers = triggers;
            this.scene = scene;
            this._nodesDictionary = {};
            this.loadData(data);
        }
        GraphObject.prototype.getDataFromTextFormat = function (str) {
            var nodeId;
            var nodeType = "sprite";
            var splt = str.split(";");
            var nodeStr = splt[0];
            var linksStr = splt[1];
            if (nodeStr.indexOf("(") === -1) {
                nodeId = nodeStr;
            }
            else {
                var nodesSub = nodeStr.split("(");
                nodeType = nodesSub[0];
                nodeId = nodesSub[1].split(")")[0];
            }
            var links = [];
            if (linksStr) {
                var linksList = linksStr.split(",");
                linksList.forEach(function (linkStr) {
                    var lstr = linkStr.split("->");
                    var data = {
                        node: lstr[1],
                        trigger: lstr[0]
                    };
                    links.push(data);
                });
            }
            var value = {
                state: {
                    type: nodeType,
                    ref: nodeId
                },
                links: links
            };
            return value;
        };
        GraphObject.prototype.loadData = function (data) {
            var _this = this;
            var nodesData = data.nodes;
            var nodeIds = Object.keys(nodesData);
            var nodes = [];
            // on crée d'abord les objets node
            nodeIds.forEach(function (nodeId) {
                var state;
                var nodeData;
                if (nodesData[nodeId].state) {
                    // mode normal
                    nodeData = nodesData[nodeId];
                }
                else if (typeof nodesData[nodeId] === "string") {
                    // mode abrégé
                    nodeData = _this.getDataFromTextFormat(nodesData[nodeId]);
                }
                var stateData = nodeData.state;
                if (!stateData.type || stateData.type === "sprite") {
                    state = _this.scene.getSprite(stateData.ref);
                }
                else if (stateData.type === "state") {
                    // states à faire
                }
                var node = new graph_node_class_1.GraphNode(state);
                _this._nodesDictionary[nodeId] = node;
                nodes.push(node);
            });
            nodeIds.forEach(function (nodeId) {
                var nodeData;
                if (nodesData[nodeId].state) {
                    // mode normal
                    nodeData = nodesData[nodeId];
                }
                else if (typeof nodesData[nodeId] === "string") {
                    // mode abrégé
                    nodeData = _this.getDataFromTextFormat(nodesData[nodeId]);
                }
                var linksDatas = nodeData.links;
                var currentNode = _this._nodesDictionary[nodeId];
                linksDatas.forEach(function (data) {
                    var destNode = _this._nodesDictionary[data.node];
                    var trigger = _this.triggers.getTrigger(data.trigger);
                    currentNode.addLink(new graph_link_class_1.GraphLink(destNode, trigger));
                });
            });
            this.graph = new graph_class_1.Graph(nodes);
        };
        return GraphObject;
    }());
    exports.GraphObject = GraphObject;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=graph-object.class.js.map

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(9), __webpack_require__(28), __webpack_require__(29), __webpack_require__(20), __webpack_require__(8), __webpack_require__(21), __webpack_require__(6), __webpack_require__(15), __webpack_require__(30), __webpack_require__(22), __webpack_require__(23), __webpack_require__(31), __webpack_require__(24), __webpack_require__(25), __webpack_require__(26), __webpack_require__(32), __webpack_require__(19), __webpack_require__(18), __webpack_require__(3), __webpack_require__(27), __webpack_require__(33), __webpack_require__(34), __webpack_require__(35), __webpack_require__(36), __webpack_require__(16), __webpack_require__(5), __webpack_require__(4), __webpack_require__(12), __webpack_require__(14), __webpack_require__(7), __webpack_require__(17), __webpack_require__(1), __webpack_require__(13), __webpack_require__(10), __webpack_require__(11), __webpack_require__(37), __webpack_require__(0), __webpack_require__(38), __webpack_require__(40)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, utils_class_1, game_object_class_1, html_game_object_class_1, lcd_displayer_class_1, seg7_displayer_class_1, clock_class_1, condition_class_1, file_class_1, control_class_1, variable_class_1, condition_types_class_1, sequence_condition_class_1, onstate_sequence_condition_class_1, graph_class_1, graph_link_class_1, graph_node_class_1, sound_class_1, animation_class_1, sequence_class_1, base_trigger_class_1, time_trigger_class_1, trigger_class_1, states_collision_trigger_class_1, conditional_sprites_group_state_class_1, conditional_sprites_group_state_set_class_1, control_sprite_class_1, display_element_class_1, image_display_element_1, sprite_class_1, sprites_group_class_1, sprites_group_state_class_1, event_listener_class_1, events_class_1, status_class_1, status_dispatcher_class_1, status_subscription_class_1, time_utils_class_1, event_dispatcher_class_1, triggers_object_class_1, graph_object_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Utils = utils_class_1.Utils;
    exports.GameObject = game_object_class_1.GameObject;
    exports.HTMLGameObject = html_game_object_class_1.HTMLGameObject;
    exports.LcdDisplayer = lcd_displayer_class_1.LcdDisplayer;
    exports.Seg7Displayer = seg7_displayer_class_1.Seg7Displayer;
    exports.Clock = clock_class_1.Clock;
    exports.Condition = condition_class_1.Condition;
    exports.File = file_class_1.File;
    exports.Control = control_class_1.Control;
    exports.Variable = variable_class_1.Variable;
    exports.ConditionTypes = condition_types_class_1.ConditionTypes;
    exports.SequenceCondition = sequence_condition_class_1.SequenceCondition;
    exports.OnStateSequenceCondition = onstate_sequence_condition_class_1.OnStateSequenceCondition;
    exports.Graph = graph_class_1.Graph;
    exports.GraphLink = graph_link_class_1.GraphLink;
    exports.GraphNode = graph_node_class_1.GraphNode;
    exports.Sound = sound_class_1.Sound;
    exports.Animation = animation_class_1.Animation;
    exports.Sequence = sequence_class_1.Sequence;
    exports.BaseTrigger = base_trigger_class_1.BaseTrigger;
    exports.TimeTrigger = time_trigger_class_1.TimeTrigger;
    exports.Trigger = trigger_class_1.Trigger;
    exports.StatesCollisionTrigger = states_collision_trigger_class_1.StatesCollisionTrigger;
    exports.ConditionalSpritesGroupState = conditional_sprites_group_state_class_1.ConditionalSpritesGroupState;
    exports.ConditionalSpritesGroupStateSet = conditional_sprites_group_state_set_class_1.ConditionalSpritesGroupStateSet;
    exports.ControlSprite = control_sprite_class_1.ControlSprite;
    exports.DisplayElement = display_element_class_1.DisplayElement;
    exports.ImageDisplayElement = image_display_element_1.ImageDisplayElement;
    exports.Sprite = sprite_class_1.Sprite;
    exports.SpritesGroup = sprites_group_class_1.SpritesGroup;
    exports.SpritesGroupState = sprites_group_state_class_1.SpritesGroupState;
    exports.EventListener = event_listener_class_1.EventListener;
    exports.Events = events_class_1.Events;
    exports.Status = status_class_1.Status;
    exports.StatusDispatcher = status_dispatcher_class_1.StatusDispatcher;
    exports.StatusSubscription = status_subscription_class_1.StatusSubscription;
    exports.TimeUtils = time_utils_class_1.TimeUtils;
    exports.EventDispatcher = event_dispatcher_class_1.EventDispatcher;
    exports.TriggersObject = triggers_object_class_1.TriggersObject;
    exports.GraphObject = graph_object_class_1.GraphObject;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));


/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(2), __webpack_require__(9), __webpack_require__(28), __webpack_require__(29), __webpack_require__(20), __webpack_require__(8), __webpack_require__(21), __webpack_require__(6), __webpack_require__(15), __webpack_require__(30), __webpack_require__(22), __webpack_require__(23), __webpack_require__(31), __webpack_require__(24), __webpack_require__(25), __webpack_require__(26), __webpack_require__(32), __webpack_require__(19), __webpack_require__(18), __webpack_require__(3), __webpack_require__(27), __webpack_require__(33), __webpack_require__(34), __webpack_require__(35), __webpack_require__(36), __webpack_require__(16), __webpack_require__(5), __webpack_require__(4), __webpack_require__(12), __webpack_require__(14), __webpack_require__(7), __webpack_require__(17), __webpack_require__(1), __webpack_require__(13), __webpack_require__(10), __webpack_require__(11), __webpack_require__(37), __webpack_require__(0), __webpack_require__(38), __webpack_require__(40)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, utils_class_1, game_object_class_1, html_game_object_class_1, lcd_displayer_class_1, seg7_displayer_class_1, clock_class_1, condition_class_1, file_class_1, control_class_1, variable_class_1, condition_types_class_1, sequence_condition_class_1, onstate_sequence_condition_class_1, graph_class_1, graph_link_class_1, graph_node_class_1, sound_class_1, animation_class_1, sequence_class_1, base_trigger_class_1, time_trigger_class_1, trigger_class_1, states_collision_trigger_class_1, conditional_sprites_group_state_class_1, conditional_sprites_group_state_set_class_1, control_sprite_class_1, display_element_class_1, image_display_element_1, sprite_class_1, sprites_group_class_1, sprites_group_state_class_1, event_listener_class_1, events_class_1, status_class_1, status_dispatcher_class_1, status_subscription_class_1, time_utils_class_1, event_dispatcher_class_1, triggers_object_class_1, graph_object_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    exports.Utils = utils_class_1.Utils;
    exports.GameObject = game_object_class_1.GameObject;
    exports.HTMLGameObject = html_game_object_class_1.HTMLGameObject;
    exports.LcdDisplayer = lcd_displayer_class_1.LcdDisplayer;
    exports.Seg7Displayer = seg7_displayer_class_1.Seg7Displayer;
    exports.Clock = clock_class_1.Clock;
    exports.Condition = condition_class_1.Condition;
    exports.File = file_class_1.File;
    exports.Control = control_class_1.Control;
    exports.Variable = variable_class_1.Variable;
    exports.ConditionTypes = condition_types_class_1.ConditionTypes;
    exports.SequenceCondition = sequence_condition_class_1.SequenceCondition;
    exports.OnStateSequenceCondition = onstate_sequence_condition_class_1.OnStateSequenceCondition;
    exports.Graph = graph_class_1.Graph;
    exports.GraphLink = graph_link_class_1.GraphLink;
    exports.GraphNode = graph_node_class_1.GraphNode;
    exports.Sound = sound_class_1.Sound;
    exports.Animation = animation_class_1.Animation;
    exports.Sequence = sequence_class_1.Sequence;
    exports.BaseTrigger = base_trigger_class_1.BaseTrigger;
    exports.TimeTrigger = time_trigger_class_1.TimeTrigger;
    exports.Trigger = trigger_class_1.Trigger;
    exports.StatesCollisionTrigger = states_collision_trigger_class_1.StatesCollisionTrigger;
    exports.ConditionalSpritesGroupState = conditional_sprites_group_state_class_1.ConditionalSpritesGroupState;
    exports.ConditionalSpritesGroupStateSet = conditional_sprites_group_state_set_class_1.ConditionalSpritesGroupStateSet;
    exports.ControlSprite = control_sprite_class_1.ControlSprite;
    exports.DisplayElement = display_element_class_1.DisplayElement;
    exports.ImageDisplayElement = image_display_element_1.ImageDisplayElement;
    exports.Sprite = sprite_class_1.Sprite;
    exports.SpritesGroup = sprites_group_class_1.SpritesGroup;
    exports.SpritesGroupState = sprites_group_state_class_1.SpritesGroupState;
    exports.EventListener = event_listener_class_1.EventListener;
    exports.Events = events_class_1.Events;
    exports.Status = status_class_1.Status;
    exports.StatusDispatcher = status_dispatcher_class_1.StatusDispatcher;
    exports.StatusSubscription = status_subscription_class_1.StatusSubscription;
    exports.TimeUtils = time_utils_class_1.TimeUtils;
    exports.EventDispatcher = event_dispatcher_class_1.EventDispatcher;
    exports.TriggersObject = triggers_object_class_1.TriggersObject;
    exports.GraphObject = graph_object_class_1.GraphObject;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=index.js.map

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(4), __webpack_require__(6), __webpack_require__(2)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, image_display_element_1, file_class_1, utils_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var Decoration = /** @class */ (function (_super) {
        __extends(Decoration, _super);
        function Decoration(file, x, y, scale) {
            if (x === void 0) { x = 0; }
            if (y === void 0) { y = 0; }
            if (scale === void 0) { scale = 1; }
            return _super.call(this, file, x, y, scale) || this;
        }
        Decoration.fromData = function (data) {
            var defaults = {
                file: "",
                x: 0,
                y: 0,
                scale: 1
            };
            var param = utils_class_1.Utils.verifyAndExtends(data, defaults);
            var file = new file_class_1.File(param["file"]);
            return new Decoration(file, param["x"], param["y"], param["scale"]);
        };
        return Decoration;
    }(image_display_element_1.ImageDisplayElement));
    exports.Decoration = Decoration;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=decoration.class.js.map

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(39), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, control_trigger_class_1, events_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ControlDownTrigger = /** @class */ (function (_super) {
        __extends(ControlDownTrigger, _super);
        function ControlDownTrigger(control, callback) {
            if (callback === void 0) { callback = null; }
            return _super.call(this, control, events_class_1.Events.CONTROL_DOWN, callback) || this;
        }
        return ControlDownTrigger;
    }(control_trigger_class_1.ControlTrigger));
    exports.ControlDownTrigger = ControlDownTrigger;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=control-down-trigger.class.js.map

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
!(__WEBPACK_AMD_DEFINE_ARRAY__ = [__webpack_require__, exports, __webpack_require__(39), __webpack_require__(1)], __WEBPACK_AMD_DEFINE_RESULT__ = (function (require, exports, control_trigger_class_1, events_class_1) {
    "use strict";
    Object.defineProperty(exports, "__esModule", { value: true });
    var ControlUpTrigger = /** @class */ (function (_super) {
        __extends(ControlUpTrigger, _super);
        function ControlUpTrigger(control, callback) {
            if (callback === void 0) { callback = null; }
            return _super.call(this, control, events_class_1.Events.CONTROL_UP, callback) || this;
        }
        return ControlUpTrigger;
    }(control_trigger_class_1.ControlTrigger));
    exports.ControlUpTrigger = ControlUpTrigger;
}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
//# sourceMappingURL=control-up-trigger.class.js.map

/***/ })
/******/ ]);
});