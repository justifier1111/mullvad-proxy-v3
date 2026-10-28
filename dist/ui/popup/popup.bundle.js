/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/afterframe/dist/afterframe.module.js"
/*!***********************************************************!*\
  !*** ./node_modules/afterframe/dist/afterframe.module.js ***!
  \***********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
var n=[],e=new MessageChannel,o=function(){this.postMessage(void 0)}.bind(e.port2);function t(e){1===n.push(e)&&requestAnimationFrame(o)}e.port1.onmessage=function(){var e=n;n=[];for(var o=performance.now(),t=0;t<e.length;t++)e[t](o)},e=null;/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (t);
//# sourceMappingURL=afterframe.module.js.map


/***/ },

/***/ "./node_modules/focus-trap/dist/focus-trap.esm.js"
/*!********************************************************!*\
  !*** ./node_modules/focus-trap/dist/focus-trap.esm.js ***!
  \********************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createFocusTrap: () => (/* binding */ createFocusTrap)
/* harmony export */ });
/* harmony import */ var tabbable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tabbable */ "./node_modules/tabbable/dist/index.esm.js");
/*!
* focus-trap 7.8.0
* @license MIT, https://github.com/focus-trap/focus-trap/blob/master/LICENSE
*/


function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _createForOfIteratorHelper(r, e) {
  var t = "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
  if (!t) {
    if (Array.isArray(r) || (t = _unsupportedIterableToArray(r)) || e) {
      t && (r = t);
      var n = 0,
        F = function () {};
      return {
        s: F,
        n: function () {
          return n >= r.length ? {
            done: true
          } : {
            done: false,
            value: r[n++]
          };
        },
        e: function (r) {
          throw r;
        },
        f: F
      };
    }
    throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }
  var o,
    a = true,
    u = false;
  return {
    s: function () {
      t = t.call(r);
    },
    n: function () {
      var r = t.next();
      return a = r.done, r;
    },
    e: function (r) {
      u = true, o = r;
    },
    f: function () {
      try {
        a || null == t.return || t.return();
      } finally {
        if (u) throw o;
      }
    }
  };
}
function _defineProperty(e, r, t) {
  return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: true,
    configurable: true,
    writable: true
  }) : e[r] = t, e;
}
function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function ownKeys(e, r) {
  var t = Object.keys(e);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(e);
    r && (o = o.filter(function (r) {
      return Object.getOwnPropertyDescriptor(e, r).enumerable;
    })), t.push.apply(t, o);
  }
  return t;
}
function _objectSpread2(e) {
  for (var r = 1; r < arguments.length; r++) {
    var t = null != arguments[r] ? arguments[r] : {};
    r % 2 ? ownKeys(Object(t), true).forEach(function (r) {
      _defineProperty(e, r, t[r]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) {
      Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r));
    });
  }
  return e;
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _toPrimitive(t, r) {
  if ("object" != typeof t || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r);
    if ("object" != typeof i) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == typeof i ? i : i + "";
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}

var activeFocusTraps = {
  // Returns the trap from the top of the stack.
  getActiveTrap: function getActiveTrap(trapStack) {
    if ((trapStack === null || trapStack === void 0 ? void 0 : trapStack.length) > 0) {
      return trapStack[trapStack.length - 1];
    }
    return null;
  },
  // Pauses the currently active trap, then adds a new trap to the stack.
  activateTrap: function activateTrap(trapStack, trap) {
    var activeTrap = activeFocusTraps.getActiveTrap(trapStack);
    if (trap !== activeTrap) {
      activeFocusTraps.pauseTrap(trapStack);
    }
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex === -1) {
      trapStack.push(trap);
    } else {
      // move this existing trap to the front of the queue
      trapStack.splice(trapIndex, 1);
      trapStack.push(trap);
    }
  },
  // Removes the trap from the top of the stack, then unpauses the next trap down.
  deactivateTrap: function deactivateTrap(trapStack, trap) {
    var trapIndex = trapStack.indexOf(trap);
    if (trapIndex !== -1) {
      trapStack.splice(trapIndex, 1);
    }
    activeFocusTraps.unpauseTrap(trapStack);
  },
  // Pauses the trap at the top of the stack.
  pauseTrap: function pauseTrap(trapStack) {
    var activeTrap = activeFocusTraps.getActiveTrap(trapStack);
    activeTrap === null || activeTrap === void 0 || activeTrap._setPausedState(true);
  },
  // Unpauses the trap at the top of the stack.
  unpauseTrap: function unpauseTrap(trapStack) {
    var activeTrap = activeFocusTraps.getActiveTrap(trapStack);
    if (activeTrap && !activeTrap._isManuallyPaused()) {
      activeTrap._setPausedState(false);
    }
  }
};
var isSelectableInput = function isSelectableInput(node) {
  return node.tagName && node.tagName.toLowerCase() === 'input' && typeof node.select === 'function';
};
var isEscapeEvent = function isEscapeEvent(e) {
  return (e === null || e === void 0 ? void 0 : e.key) === 'Escape' || (e === null || e === void 0 ? void 0 : e.key) === 'Esc' || (e === null || e === void 0 ? void 0 : e.keyCode) === 27;
};
var isTabEvent = function isTabEvent(e) {
  return (e === null || e === void 0 ? void 0 : e.key) === 'Tab' || (e === null || e === void 0 ? void 0 : e.keyCode) === 9;
};

// checks for TAB by default
var isKeyForward = function isKeyForward(e) {
  return isTabEvent(e) && !e.shiftKey;
};

// checks for SHIFT+TAB by default
var isKeyBackward = function isKeyBackward(e) {
  return isTabEvent(e) && e.shiftKey;
};
var delay = function delay(fn) {
  return setTimeout(fn, 0);
};

/**
 * Get an option's value when it could be a plain value, or a handler that provides
 *  the value.
 * @param {*} value Option's value to check.
 * @param {...*} [params] Any parameters to pass to the handler, if `value` is a function.
 * @returns {*} The `value`, or the handler's returned value.
 */
var valueOrHandler = function valueOrHandler(value) {
  for (var _len = arguments.length, params = new Array(_len > 1 ? _len - 1 : 0), _key = 1; _key < _len; _key++) {
    params[_key - 1] = arguments[_key];
  }
  return typeof value === 'function' ? value.apply(void 0, params) : value;
};
var getActualTarget = function getActualTarget(event) {
  // NOTE: If the trap is _inside_ a shadow DOM, event.target will always be the
  //  shadow host. However, event.target.composedPath() will be an array of
  //  nodes "clicked" from inner-most (the actual element inside the shadow) to
  //  outer-most (the host HTML document). If we have access to composedPath(),
  //  then use its first element; otherwise, fall back to event.target (and
  //  this only works for an _open_ shadow DOM; otherwise,
  //  composedPath()[0] === event.target always).
  return event.target.shadowRoot && typeof event.composedPath === 'function' ? event.composedPath()[0] : event.target;
};

// NOTE: this must be _outside_ `createFocusTrap()` to make sure all traps in this
//  current instance use the same stack if `userOptions.trapStack` isn't specified
var internalTrapStack = [];
var createFocusTrap = function createFocusTrap(elements, userOptions) {
  // SSR: a live trap shouldn't be created in this type of environment so this
  //  should be safe code to execute if the `document` option isn't specified
  var doc = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.document) || document;
  var trapStack = (userOptions === null || userOptions === void 0 ? void 0 : userOptions.trapStack) || internalTrapStack;
  var config = _objectSpread2({
    returnFocusOnDeactivate: true,
    escapeDeactivates: true,
    delayInitialFocus: true,
    isolateSubtrees: false,
    isKeyForward: isKeyForward,
    isKeyBackward: isKeyBackward
  }, userOptions);
  var state = {
    // containers given to createFocusTrap()
    /** @type {Array<HTMLElement>} */
    containers: [],
    // list of objects identifying tabbable nodes in `containers` in the trap
    // NOTE: it's possible that a group has no tabbable nodes if nodes get removed while the trap
    //  is active, but the trap should never get to a state where there isn't at least one group
    //  with at least one tabbable node in it (that would lead to an error condition that would
    //  result in an error being thrown)
    /** @type {Array<{
     *    container: HTMLElement,
     *    tabbableNodes: Array<HTMLElement>, // empty if none
     *    focusableNodes: Array<HTMLElement>, // empty if none
     *    posTabIndexesFound: boolean,
     *    firstTabbableNode: HTMLElement|undefined,
     *    lastTabbableNode: HTMLElement|undefined,
     *    firstDomTabbableNode: HTMLElement|undefined,
     *    lastDomTabbableNode: HTMLElement|undefined,
     *    nextTabbableNode: (node: HTMLElement, forward: boolean) => HTMLElement|undefined
     *  }>}
     */
    containerGroups: [],
    // same order/length as `containers` list

    // references to objects in `containerGroups`, but only those that actually have
    //  tabbable nodes in them
    // NOTE: same order as `containers` and `containerGroups`, but __not necessarily__
    //  the same length
    tabbableGroups: [],
    // references to nodes that are siblings to the ancestors of this trap's containers.
    /** @type {Set<HTMLElement>} */
    adjacentElements: new Set(),
    // references to nodes that were inert or aria-hidden before the trap was activated.
    /** @type {Set<HTMLElement>} */
    alreadySilent: new Set(),
    nodeFocusedBeforeActivation: null,
    mostRecentlyFocusedNode: null,
    active: false,
    paused: false,
    manuallyPaused: false,
    // timer ID for when delayInitialFocus is true and initial focus in this trap
    //  has been delayed during activation
    delayInitialFocusTimer: undefined,
    // the most recent KeyboardEvent for the configured nav key (typically [SHIFT+]TAB), if any
    recentNavEvent: undefined
  };
  var trap; // eslint-disable-line prefer-const -- some private functions reference it, and its methods reference private functions, so we must declare here and define later

  /**
   * Gets a configuration option value.
   * @param {Object|undefined} configOverrideOptions If true, and option is defined in this set,
   *  value will be taken from this object. Otherwise, value will be taken from base configuration.
   * @param {string} optionName Name of the option whose value is sought.
   * @param {string|undefined} [configOptionName] Name of option to use __instead of__ `optionName`
   *  IIF `configOverrideOptions` is not defined. Otherwise, `optionName` is used.
   */
  var getOption = function getOption(configOverrideOptions, optionName, configOptionName) {
    return configOverrideOptions && configOverrideOptions[optionName] !== undefined ? configOverrideOptions[optionName] : config[configOptionName || optionName];
  };

  /**
   * Finds the index of the container that contains the element.
   * @param {HTMLElement} element
   * @param {Event} [event] If available, and `element` isn't directly found in any container,
   *  the event's composed path is used to see if includes any known trap containers in the
   *  case where the element is inside a Shadow DOM.
   * @returns {number} Index of the container in either `state.containers` or
   *  `state.containerGroups` (the order/length of these lists are the same); -1
   *  if the element isn't found.
   */
  var findContainerIndex = function findContainerIndex(element, event) {
    var composedPath = typeof (event === null || event === void 0 ? void 0 : event.composedPath) === 'function' ? event.composedPath() : undefined;
    // NOTE: search `containerGroups` because it's possible a group contains no tabbable
    //  nodes, but still contains focusable nodes (e.g. if they all have `tabindex=-1`)
    //  and we still need to find the element in there
    return state.containerGroups.findIndex(function (_ref) {
      var container = _ref.container,
        tabbableNodes = _ref.tabbableNodes;
      return container.contains(element) || (// fall back to explicit tabbable search which will take into consideration any
      //  web components if the `tabbableOptions.getShadowRoot` option was used for
      //  the trap, enabling shadow DOM support in tabbable (`Node.contains()` doesn't
      //  look inside web components even if open)
      composedPath === null || composedPath === void 0 ? void 0 : composedPath.includes(container)) || tabbableNodes.find(function (node) {
        return node === element;
      });
    });
  };

  /**
   * Gets the node for the given option, which is expected to be an option that
   *  can be either a DOM node, a string that is a selector to get a node, `false`
   *  (if a node is explicitly NOT given), or a function that returns any of these
   *  values.
   * @param {string} optionName
   * @param {Object} options
   * @param {boolean} [options.hasFallback] True if the option could be a selector string
   *  and the option allows for a fallback scenario in the case where the selector is
   *  valid but does not match a node (i.e. the queried node doesn't exist in the DOM).
   * @param {Array} [options.params] Params to pass to the option if it's a function.
   * @returns {undefined | null | false | HTMLElement | SVGElement} Returns
   *  `undefined` if the option is not specified; `null` if the option didn't resolve
   *  to a node but `options.hasFallback=true`, `false` if the option resolved to `false`
   *  (node explicitly not given); otherwise, the resolved DOM node.
   * @throws {Error} If the option is set, not `false`, and is not, or does not
   *  resolve to a node, unless the option is a selector string and `options.hasFallback=true`.
   */
  var getNodeForOption = function getNodeForOption(optionName) {
    var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
      _ref2$hasFallback = _ref2.hasFallback,
      hasFallback = _ref2$hasFallback === void 0 ? false : _ref2$hasFallback,
      _ref2$params = _ref2.params,
      params = _ref2$params === void 0 ? [] : _ref2$params;
    var optionValue = config[optionName];
    if (typeof optionValue === 'function') {
      optionValue = optionValue.apply(void 0, _toConsumableArray(params));
    }
    if (optionValue === true) {
      optionValue = undefined; // use default value
    }
    if (!optionValue) {
      if (optionValue === undefined || optionValue === false) {
        return optionValue;
      }
      // else, empty string (invalid), null (invalid), 0 (invalid)

      throw new Error("`".concat(optionName, "` was specified but was not a node, or did not return a node"));
    }
    var node = optionValue; // could be HTMLElement, SVGElement, or non-empty string at this point

    if (typeof optionValue === 'string') {
      try {
        node = doc.querySelector(optionValue); // resolve to node, or null if fails
      } catch (err) {
        throw new Error("`".concat(optionName, "` appears to be an invalid selector; error=\"").concat(err.message, "\""));
      }
      if (!node) {
        if (!hasFallback) {
          throw new Error("`".concat(optionName, "` as selector refers to no known node"));
        }
        // else, `node` MUST be `null` because that's what `Document.querySelector()` returns
        //  if the selector is valid but doesn't match anything
      }
    }
    return node;
  };
  var getInitialFocusNode = function getInitialFocusNode() {
    var node = getNodeForOption('initialFocus', {
      hasFallback: true
    });

    // false explicitly indicates we want no initialFocus at all
    if (node === false) {
      return false;
    }
    if (node === undefined || node && !(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isFocusable)(node, config.tabbableOptions)) {
      // option not specified nor focusable: use fallback options
      if (findContainerIndex(doc.activeElement) >= 0) {
        node = doc.activeElement;
      } else {
        var firstTabbableGroup = state.tabbableGroups[0];
        var firstTabbableNode = firstTabbableGroup && firstTabbableGroup.firstTabbableNode;

        // NOTE: `fallbackFocus` option function cannot return `false` (not supported)
        node = firstTabbableNode || getNodeForOption('fallbackFocus');
      }
    } else if (node === null) {
      // option is a VALID selector string that doesn't yield a node: use the `fallbackFocus`
      //  option instead of the default behavior when the option isn't specified at all
      node = getNodeForOption('fallbackFocus');
    }
    if (!node) {
      throw new Error('Your focus-trap needs to have at least one focusable element');
    }
    return node;
  };
  var updateTabbableNodes = function updateTabbableNodes() {
    state.containerGroups = state.containers.map(function (container) {
      var tabbableNodes = (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.tabbable)(container, config.tabbableOptions);

      // NOTE: if we have tabbable nodes, we must have focusable nodes; focusable nodes
      //  are a superset of tabbable nodes since nodes with negative `tabindex` attributes
      //  are focusable but not tabbable
      var focusableNodes = (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.focusable)(container, config.tabbableOptions);
      var firstTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[0] : undefined;
      var lastTabbableNode = tabbableNodes.length > 0 ? tabbableNodes[tabbableNodes.length - 1] : undefined;
      var firstDomTabbableNode = focusableNodes.find(function (node) {
        return (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(node);
      });
      var lastDomTabbableNode = focusableNodes.slice().reverse().find(function (node) {
        return (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(node);
      });
      var posTabIndexesFound = !!tabbableNodes.find(function (node) {
        return (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.getTabIndex)(node) > 0;
      });
      return {
        container: container,
        tabbableNodes: tabbableNodes,
        focusableNodes: focusableNodes,
        /** True if at least one node with positive `tabindex` was found in this container. */
        posTabIndexesFound: posTabIndexesFound,
        /** First tabbable node in container, __tabindex__ order; `undefined` if none. */
        firstTabbableNode: firstTabbableNode,
        /** Last tabbable node in container, __tabindex__ order; `undefined` if none. */
        lastTabbableNode: lastTabbableNode,
        // NOTE: DOM order is NOT NECESSARILY "document position" order, but figuring that out
        //  would require more than just https://developer.mozilla.org/en-US/docs/Web/API/Node/compareDocumentPosition
        //  because that API doesn't work with Shadow DOM as well as it should (@see
        //  https://github.com/whatwg/dom/issues/320) and since this first/last is only needed, so far,
        //  to address an edge case related to positive tabindex support, this seems like a much easier,
        //  "close enough most of the time" alternative for positive tabindexes which should generally
        //  be avoided anyway...
        /** First tabbable node in container, __DOM__ order; `undefined` if none. */
        firstDomTabbableNode: firstDomTabbableNode,
        /** Last tabbable node in container, __DOM__ order; `undefined` if none. */
        lastDomTabbableNode: lastDomTabbableNode,
        /**
         * Finds the __tabbable__ node that follows the given node in the specified direction,
         *  in this container, if any.
         * @param {HTMLElement} node
         * @param {boolean} [forward] True if going in forward tab order; false if going
         *  in reverse.
         * @returns {HTMLElement|undefined} The next tabbable node, if any.
         */
        nextTabbableNode: function nextTabbableNode(node) {
          var forward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
          var nodeIdx = tabbableNodes.indexOf(node);
          if (nodeIdx < 0) {
            // either not tabbable nor focusable, or was focused but not tabbable (negative tabindex):
            //  since `node` should at least have been focusable, we assume that's the case and mimic
            //  what browsers do, which is set focus to the next node in __document position order__,
            //  regardless of positive tabindexes, if any -- and for reasons explained in the NOTE
            //  above related to `firstDomTabbable` and `lastDomTabbable` properties, we fall back to
            //  basic DOM order
            if (forward) {
              return focusableNodes.slice(focusableNodes.indexOf(node) + 1).find(function (el) {
                return (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(el);
              });
            }
            return focusableNodes.slice(0, focusableNodes.indexOf(node)).reverse().find(function (el) {
              return (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(el);
            });
          }
          return tabbableNodes[nodeIdx + (forward ? 1 : -1)];
        }
      };
    });
    state.tabbableGroups = state.containerGroups.filter(function (group) {
      return group.tabbableNodes.length > 0;
    });

    // throw if no groups have tabbable nodes and we don't have a fallback focus node either
    if (state.tabbableGroups.length <= 0 && !getNodeForOption('fallbackFocus') // returning false not supported for this option
    ) {
      throw new Error('Your focus-trap must have at least one container with at least one tabbable node in it at all times');
    }

    // NOTE: Positive tabindexes are only properly supported in single-container traps because
    //  doing it across multiple containers where tabindexes could be all over the place
    //  would require Tabbable to support multiple containers, would require additional
    //  specialized Shadow DOM support, and would require Tabbable's multi-container support
    //  to look at those containers in document position order rather than user-provided
    //  order (as they are treated in Focus-trap, for legacy reasons). See discussion on
    //  https://github.com/focus-trap/focus-trap/issues/375 for more details.
    if (state.containerGroups.find(function (g) {
      return g.posTabIndexesFound;
    }) && state.containerGroups.length > 1) {
      throw new Error("At least one node with a positive tabindex was found in one of your focus-trap's multiple containers. Positive tabindexes are only supported in single-container focus-traps.");
    }
  };

  /**
   * Gets the current activeElement. If it's a web-component and has open shadow-root
   * it will recursively search inside shadow roots for the "true" activeElement.
   *
   * @param {Document | ShadowRoot} el
   *
   * @returns {HTMLElement} The element that currently has the focus
   **/
  var _getActiveElement = function getActiveElement(el) {
    var activeElement = el.activeElement;
    if (!activeElement) {
      return;
    }
    if (activeElement.shadowRoot && activeElement.shadowRoot.activeElement !== null) {
      return _getActiveElement(activeElement.shadowRoot);
    }
    return activeElement;
  };
  var _tryFocus = function tryFocus(node) {
    if (node === false) {
      return;
    }
    if (node === _getActiveElement(document)) {
      return;
    }
    if (!node || !node.focus) {
      _tryFocus(getInitialFocusNode());
      return;
    }
    node.focus({
      preventScroll: !!config.preventScroll
    });
    // NOTE: focus() API does not trigger focusIn event so set MRU node manually
    state.mostRecentlyFocusedNode = node;
    if (isSelectableInput(node)) {
      node.select();
    }
  };
  var getReturnFocusNode = function getReturnFocusNode(previousActiveElement) {
    var node = getNodeForOption('setReturnFocus', {
      params: [previousActiveElement]
    });
    return node ? node : node === false ? false : previousActiveElement;
  };

  /**
   * Finds the next node (in either direction) where focus should move according to a
   *  keyboard focus-in event.
   * @param {Object} params
   * @param {Node} [params.target] Known target __from which__ to navigate, if any.
   * @param {KeyboardEvent|FocusEvent} [params.event] Event to use if `target` isn't known (event
   *  will be used to determine the `target`). Ignored if `target` is specified.
   * @param {boolean} [params.isBackward] True if focus should move backward.
   * @returns {Node|undefined} The next node, or `undefined` if a next node couldn't be
   *  determined given the current state of the trap.
   */
  var findNextNavNode = function findNextNavNode(_ref3) {
    var target = _ref3.target,
      event = _ref3.event,
      _ref3$isBackward = _ref3.isBackward,
      isBackward = _ref3$isBackward === void 0 ? false : _ref3$isBackward;
    target = target || getActualTarget(event);
    updateTabbableNodes();
    var destinationNode = null;
    if (state.tabbableGroups.length > 0) {
      // make sure the target is actually contained in a group
      // NOTE: the target may also be the container itself if it's focusable
      //  with tabIndex='-1' and was given initial focus
      var containerIndex = findContainerIndex(target, event);
      var containerGroup = containerIndex >= 0 ? state.containerGroups[containerIndex] : undefined;
      if (containerIndex < 0) {
        // target not found in any group: quite possible focus has escaped the trap,
        //  so bring it back into...
        if (isBackward) {
          // ...the last node in the last group
          destinationNode = state.tabbableGroups[state.tabbableGroups.length - 1].lastTabbableNode;
        } else {
          // ...the first node in the first group
          destinationNode = state.tabbableGroups[0].firstTabbableNode;
        }
      } else if (isBackward) {
        // REVERSE

        // is the target the first tabbable node in a group?
        var startOfGroupIndex = state.tabbableGroups.findIndex(function (_ref4) {
          var firstTabbableNode = _ref4.firstTabbableNode;
          return target === firstTabbableNode;
        });
        if (startOfGroupIndex < 0 && (containerGroup.container === target || (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isFocusable)(target, config.tabbableOptions) && !(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target, false))) {
          // an exception case where the target is either the container itself, or
          //  a non-tabbable node that was given focus (i.e. tabindex is negative
          //  and user clicked on it or node was programmatically given focus)
          //  and is not followed by any other tabbable node, in which
          //  case, we should handle shift+tab as if focus were on the container's
          //  first tabbable node, and go to the last tabbable node of the LAST group
          startOfGroupIndex = containerIndex;
        }
        if (startOfGroupIndex >= 0) {
          // YES: then shift+tab should go to the last tabbable node in the
          //  previous group (and wrap around to the last tabbable node of
          //  the LAST group if it's the first tabbable node of the FIRST group)
          var destinationGroupIndex = startOfGroupIndex === 0 ? state.tabbableGroups.length - 1 : startOfGroupIndex - 1;
          var destinationGroup = state.tabbableGroups[destinationGroupIndex];
          destinationNode = (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.getTabIndex)(target) >= 0 ? destinationGroup.lastTabbableNode : destinationGroup.lastDomTabbableNode;
        } else if (!isTabEvent(event)) {
          // user must have customized the nav keys so we have to move focus manually _within_
          //  the active group: do this based on the order determined by tabbable()
          destinationNode = containerGroup.nextTabbableNode(target, false);
        }
      } else {
        // FORWARD

        // is the target the last tabbable node in a group?
        var lastOfGroupIndex = state.tabbableGroups.findIndex(function (_ref5) {
          var lastTabbableNode = _ref5.lastTabbableNode;
          return target === lastTabbableNode;
        });
        if (lastOfGroupIndex < 0 && (containerGroup.container === target || (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isFocusable)(target, config.tabbableOptions) && !(0,tabbable__WEBPACK_IMPORTED_MODULE_0__.isTabbable)(target, config.tabbableOptions) && !containerGroup.nextTabbableNode(target))) {
          // an exception case where the target is the container itself, or
          //  a non-tabbable node that was given focus (i.e. tabindex is negative
          //  and user clicked on it or node was programmatically given focus)
          //  and is not followed by any other tabbable node, in which
          //  case, we should handle tab as if focus were on the container's
          //  last tabbable node, and go to the first tabbable node of the FIRST group
          lastOfGroupIndex = containerIndex;
        }
        if (lastOfGroupIndex >= 0) {
          // YES: then tab should go to the first tabbable node in the next
          //  group (and wrap around to the first tabbable node of the FIRST
          //  group if it's the last tabbable node of the LAST group)
          var _destinationGroupIndex = lastOfGroupIndex === state.tabbableGroups.length - 1 ? 0 : lastOfGroupIndex + 1;
          var _destinationGroup = state.tabbableGroups[_destinationGroupIndex];
          destinationNode = (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.getTabIndex)(target) >= 0 ? _destinationGroup.firstTabbableNode : _destinationGroup.firstDomTabbableNode;
        } else if (!isTabEvent(event)) {
          // user must have customized the nav keys so we have to move focus manually _within_
          //  the active group: do this based on the order determined by tabbable()
          destinationNode = containerGroup.nextTabbableNode(target);
        }
      }
    } else {
      // no groups available
      // NOTE: the fallbackFocus option does not support returning false to opt-out
      destinationNode = getNodeForOption('fallbackFocus');
    }
    return destinationNode;
  };

  // This needs to be done on mousedown and touchstart instead of click
  // so that it precedes the focus event.
  var checkPointerDown = function checkPointerDown(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      // allow the click since it ocurred inside the trap
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      // immediately deactivate the trap
      trap.deactivate({
        // NOTE: by setting `returnFocus: false`, deactivate() will do nothing,
        //  which will result in the outside click setting focus to the node
        //  that was clicked (and if not focusable, to "nothing"); by setting
        //  `returnFocus: true`, we'll attempt to re-focus the node originally-focused
        //  on activation (or the configured `setReturnFocus` node), whether the
        //  outside click was on a focusable node or not
        returnFocus: config.returnFocusOnDeactivate
      });
      return;
    }

    // This is needed for mobile devices.
    // (If we'll only let `click` events through,
    // then on mobile they will be blocked anyways if `touchstart` is blocked.)
    if (valueOrHandler(config.allowOutsideClick, e)) {
      // allow the click outside the trap to take place
      return;
    }

    // otherwise, prevent the click
    e.preventDefault();
  };

  // In case focus escapes the trap for some strange reason, pull it back in.
  // NOTE: the focusIn event is NOT cancelable, so if focus escapes, it may cause unexpected
  //  scrolling if the node that got focused was out of view; there's nothing we can do to
  //  prevent that from happening by the time we discover that focus escaped
  var checkFocusIn = function checkFocusIn(event) {
    var target = getActualTarget(event);
    var targetContained = findContainerIndex(target, event) >= 0;

    // In Firefox when you Tab out of an iframe the Document is briefly focused.
    if (targetContained || target instanceof Document) {
      if (targetContained) {
        state.mostRecentlyFocusedNode = target;
      }
    } else {
      // escaped! pull it back in to where it just left
      event.stopImmediatePropagation();

      // focus will escape if the MRU node had a positive tab index and user tried to nav forward;
      //  it will also escape if the MRU node had a 0 tab index and user tried to nav backward
      //  toward a node with a positive tab index
      var nextNode; // next node to focus, if we find one
      var navAcrossContainers = true;
      if (state.mostRecentlyFocusedNode) {
        if ((0,tabbable__WEBPACK_IMPORTED_MODULE_0__.getTabIndex)(state.mostRecentlyFocusedNode) > 0) {
          // MRU container index must be >=0 otherwise we wouldn't have it as an MRU node...
          var mruContainerIdx = findContainerIndex(state.mostRecentlyFocusedNode);
          // there MAY not be any tabbable nodes in the container if there are at least 2 containers
          //  and the MRU node is focusable but not tabbable (focus-trap requires at least 1 container
          //  with at least one tabbable node in order to function, so this could be the other container
          //  with nothing tabbable in it)
          var tabbableNodes = state.containerGroups[mruContainerIdx].tabbableNodes;
          if (tabbableNodes.length > 0) {
            // MRU tab index MAY not be found if the MRU node is focusable but not tabbable
            var mruTabIdx = tabbableNodes.findIndex(function (node) {
              return node === state.mostRecentlyFocusedNode;
            });
            if (mruTabIdx >= 0) {
              if (config.isKeyForward(state.recentNavEvent)) {
                if (mruTabIdx + 1 < tabbableNodes.length) {
                  nextNode = tabbableNodes[mruTabIdx + 1];
                  navAcrossContainers = false;
                }
                // else, don't wrap within the container as focus should move to next/previous
                //  container
              } else {
                if (mruTabIdx - 1 >= 0) {
                  nextNode = tabbableNodes[mruTabIdx - 1];
                  navAcrossContainers = false;
                }
                // else, don't wrap within the container as focus should move to next/previous
                //  container
              }
              // else, don't find in container order without considering direction too
            }
          }
          // else, no tabbable nodes in that container (which means we must have at least one other
          //  container with at least one tabbable node in it, otherwise focus-trap would've thrown
          //  an error the last time updateTabbableNodes() was run): find next node among all known
          //  containers
        } else {
          // check to see if there's at least one tabbable node with a positive tab index inside
          //  the trap because focus seems to escape when navigating backward from a tabbable node
          //  with tabindex=0 when this is the case (instead of wrapping to the tabbable node with
          //  the greatest positive tab index like it should)
          if (!state.containerGroups.some(function (g) {
            return g.tabbableNodes.some(function (n) {
              return (0,tabbable__WEBPACK_IMPORTED_MODULE_0__.getTabIndex)(n) > 0;
            });
          })) {
            // no containers with tabbable nodes with positive tab indexes which means the focus
            //  escaped for some other reason and we should just execute the fallback to the
            //  MRU node or initial focus node, if any
            navAcrossContainers = false;
          }
        }
      } else {
        // no MRU node means we're likely in some initial condition when the trap has just
        //  been activated and initial focus hasn't been given yet, in which case we should
        //  fall through to trying to focus the initial focus node, which is what should
        //  happen below at this point in the logic
        navAcrossContainers = false;
      }
      if (navAcrossContainers) {
        nextNode = findNextNavNode({
          // move FROM the MRU node, not event-related node (which will be the node that is
          //  outside the trap causing the focus escape we're trying to fix)
          target: state.mostRecentlyFocusedNode,
          isBackward: config.isKeyBackward(state.recentNavEvent)
        });
      }
      if (nextNode) {
        _tryFocus(nextNode);
      } else {
        _tryFocus(state.mostRecentlyFocusedNode || getInitialFocusNode());
      }
    }
    state.recentNavEvent = undefined; // clear
  };

  // Hijack key nav events on the first and last focusable nodes of the trap,
  // in order to prevent focus from escaping. If it escapes for even a
  // moment it can end up scrolling the page and causing confusion so we
  // kind of need to capture the action at the keydown phase.
  var checkKeyNav = function checkKeyNav(event) {
    var isBackward = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    state.recentNavEvent = event;
    var destinationNode = findNextNavNode({
      event: event,
      isBackward: isBackward
    });
    if (destinationNode) {
      if (isTabEvent(event)) {
        // since tab natively moves focus, we wouldn't have a destination node unless we
        //  were on the edge of a container and had to move to the next/previous edge, in
        //  which case we want to prevent default to keep the browser from moving focus
        //  to where it normally would
        event.preventDefault();
      }
      _tryFocus(destinationNode);
    }
    // else, let the browser take care of [shift+]tab and move the focus
  };
  var checkTabKey = function checkTabKey(event) {
    if (config.isKeyForward(event) || config.isKeyBackward(event)) {
      checkKeyNav(event, config.isKeyBackward(event));
    }
  };

  // we use a different event phase for the Escape key to allow canceling the event and checking for this in escapeDeactivates
  var checkEscapeKey = function checkEscapeKey(event) {
    if (isEscapeEvent(event) && valueOrHandler(config.escapeDeactivates, event) !== false) {
      event.preventDefault();
      trap.deactivate();
    }
  };
  var checkClick = function checkClick(e) {
    var target = getActualTarget(e);
    if (findContainerIndex(target, e) >= 0) {
      return;
    }
    if (valueOrHandler(config.clickOutsideDeactivates, e)) {
      return;
    }
    if (valueOrHandler(config.allowOutsideClick, e)) {
      return;
    }
    e.preventDefault();
    e.stopImmediatePropagation();
  };

  //
  // EVENT LISTENERS
  //

  var addListeners = function addListeners() {
    if (!state.active) {
      return;
    }

    // There can be only one listening focus trap at a time
    activeFocusTraps.activateTrap(trapStack, trap);

    // Delay ensures that the focused element doesn't capture the event
    // that caused the focus trap activation.
    state.delayInitialFocusTimer = config.delayInitialFocus ? delay(function () {
      _tryFocus(getInitialFocusNode());
    }) : _tryFocus(getInitialFocusNode());
    doc.addEventListener('focusin', checkFocusIn, true);
    doc.addEventListener('mousedown', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('touchstart', checkPointerDown, {
      capture: true,
      passive: false
    });
    doc.addEventListener('click', checkClick, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkTabKey, {
      capture: true,
      passive: false
    });
    doc.addEventListener('keydown', checkEscapeKey);
    return trap;
  };

  /**
   * Traverses up the DOM from each of `containers`, collecting references to
   * the elements that are siblings to `container` or an ancestor of `container`.
   * @param {Array<HTMLElement>} containers
   */
  var collectAdjacentElements = function collectAdjacentElements(containers) {
    // Re-activate all adjacent elements & clear previous collection.
    if (state.active && !state.paused) {
      trap._setSubtreeIsolation(false);
    }
    state.adjacentElements.clear();
    state.alreadySilent.clear();

    // Collect all ancestors of all containers to avoid redundant processing.
    var containerAncestors = new Set();
    var adjacentElements = new Set();

    // Compile all elements adjacent to the focus trap containers & lineage.
    var _iterator = _createForOfIteratorHelper(containers),
      _step;
    try {
      for (_iterator.s(); !(_step = _iterator.n()).done;) {
        var container = _step.value;
        containerAncestors.add(container);
        var insideShadowRoot = typeof ShadowRoot !== 'undefined' && container.getRootNode() instanceof ShadowRoot;
        var current = container;
        while (current) {
          containerAncestors.add(current);
          var parent = current.parentElement;
          var siblings = [];
          if (parent) {
            siblings = parent.children;
          } else if (!parent && insideShadowRoot) {
            siblings = current.getRootNode().children;
            parent = current.getRootNode().host;
            insideShadowRoot = typeof ShadowRoot !== 'undefined' && parent.getRootNode() instanceof ShadowRoot;
          }

          // Add all the children, we'll remove container lineage later.
          var _iterator2 = _createForOfIteratorHelper(siblings),
            _step2;
          try {
            for (_iterator2.s(); !(_step2 = _iterator2.n()).done;) {
              var child = _step2.value;
              adjacentElements.add(child);
            }
          } catch (err) {
            _iterator2.e(err);
          } finally {
            _iterator2.f();
          }
          current = parent;
        }
      }

      // Multi-container traps may overlap.
      // Remove elements within container lineages.
    } catch (err) {
      _iterator.e(err);
    } finally {
      _iterator.f();
    }
    containerAncestors.forEach(function (el) {
      adjacentElements["delete"](el);
    });
    state.adjacentElements = adjacentElements;
  };
  var removeListeners = function removeListeners() {
    if (!state.active) {
      return;
    }
    doc.removeEventListener('focusin', checkFocusIn, true);
    doc.removeEventListener('mousedown', checkPointerDown, true);
    doc.removeEventListener('touchstart', checkPointerDown, true);
    doc.removeEventListener('click', checkClick, true);
    doc.removeEventListener('keydown', checkTabKey, true);
    doc.removeEventListener('keydown', checkEscapeKey);
    return trap;
  };

  //
  // MUTATION OBSERVER
  //

  var checkDomRemoval = function checkDomRemoval(mutations) {
    var isFocusedNodeRemoved = mutations.some(function (mutation) {
      var removedNodes = Array.from(mutation.removedNodes);
      return removedNodes.some(function (node) {
        return node === state.mostRecentlyFocusedNode;
      });
    });

    // If the currently focused is removed then browsers will move focus to the
    // <body> element. If this happens, try to move focus back into the trap.
    if (isFocusedNodeRemoved) {
      _tryFocus(getInitialFocusNode());
    }
  };

  // Use MutationObserver - if supported - to detect if focused node is removed
  // from the DOM.
  var mutationObserver = typeof window !== 'undefined' && 'MutationObserver' in window ? new MutationObserver(checkDomRemoval) : undefined;
  var updateObservedNodes = function updateObservedNodes() {
    if (!mutationObserver) {
      return;
    }
    mutationObserver.disconnect();
    if (state.active && !state.paused) {
      state.containers.map(function (container) {
        mutationObserver.observe(container, {
          subtree: true,
          childList: true
        });
      });
    }
  };

  //
  // TRAP DEFINITION
  //

  trap = {
    get active() {
      return state.active;
    },
    get paused() {
      return state.paused;
    },
    activate: function activate(activateOptions) {
      if (state.active) {
        return this;
      }
      var onActivate = getOption(activateOptions, 'onActivate');
      var onPostActivate = getOption(activateOptions, 'onPostActivate');
      var checkCanFocusTrap = getOption(activateOptions, 'checkCanFocusTrap');

      // If a currently-active trap is isolating its subtree, we need to remove
      // that isolation to allow the new trap to find tabbable nodes.
      var preexistingTrap = activeFocusTraps.getActiveTrap(trapStack);
      var revertState = false;
      if (preexistingTrap && !preexistingTrap.paused) {
        var _preexistingTrap$_set;
        // [#1729] method MAY not exist if using `trapStack` option to share stack with older
        //  versions of Focus-trap in the same DOM so use optional chaining here just in case
        //  since this is a trap we may not have created from this instance of the library
        (_preexistingTrap$_set = preexistingTrap._setSubtreeIsolation) === null || _preexistingTrap$_set === void 0 || _preexistingTrap$_set.call(preexistingTrap, false);
        revertState = true;
      }
      try {
        if (!checkCanFocusTrap) {
          updateTabbableNodes();
        }
        state.active = true;
        state.paused = false;
        state.nodeFocusedBeforeActivation = _getActiveElement(doc);
        onActivate === null || onActivate === void 0 || onActivate();
        var finishActivation = function finishActivation() {
          if (checkCanFocusTrap) {
            updateTabbableNodes();
          }
          addListeners();
          updateObservedNodes();
          if (config.isolateSubtrees) {
            trap._setSubtreeIsolation(true);
          }
          onPostActivate === null || onPostActivate === void 0 || onPostActivate();
        };
        if (checkCanFocusTrap) {
          checkCanFocusTrap(state.containers.concat()).then(finishActivation, finishActivation);
          return this;
        }
        finishActivation();
      } catch (error) {
        // If our activation throws an exception and the stack hasn't changed,
        // we need to re-enable the prior trap's subtree isolation.
        if (preexistingTrap === activeFocusTraps.getActiveTrap(trapStack) && revertState) {
          var _preexistingTrap$_set2;
          // [#1729] method MAY not exist if using `trapStack` option to share stack with older
          //  versions of Focus-trap in the same DOM so use optional chaining here just in case
          //  since this is a trap we may not have created from this instance of the library
          (_preexistingTrap$_set2 = preexistingTrap._setSubtreeIsolation) === null || _preexistingTrap$_set2 === void 0 || _preexistingTrap$_set2.call(preexistingTrap, true);
        }
        throw error;
      }
      return this;
    },
    deactivate: function deactivate(deactivateOptions) {
      if (!state.active) {
        return this;
      }
      var options = _objectSpread2({
        onDeactivate: config.onDeactivate,
        onPostDeactivate: config.onPostDeactivate,
        checkCanReturnFocus: config.checkCanReturnFocus
      }, deactivateOptions);
      clearTimeout(state.delayInitialFocusTimer); // noop if undefined
      state.delayInitialFocusTimer = undefined;

      // Prior to removing this trap from the trapStack, we need to remove any applications of `inert`.
      // This allows the next trap down to update its tabbable nodes properly.
      //
      // If this trap is not top of the stack, don't change any current isolation.
      if (!state.paused) {
        trap._setSubtreeIsolation(false);
      }
      state.alreadySilent.clear();
      removeListeners();
      state.active = false;
      state.paused = false;
      updateObservedNodes();
      activeFocusTraps.deactivateTrap(trapStack, trap);
      var onDeactivate = getOption(options, 'onDeactivate');
      var onPostDeactivate = getOption(options, 'onPostDeactivate');
      var checkCanReturnFocus = getOption(options, 'checkCanReturnFocus');
      var returnFocus = getOption(options, 'returnFocus', 'returnFocusOnDeactivate');
      onDeactivate === null || onDeactivate === void 0 || onDeactivate();
      var finishDeactivation = function finishDeactivation() {
        delay(function () {
          if (returnFocus) {
            _tryFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation));
          }
          onPostDeactivate === null || onPostDeactivate === void 0 || onPostDeactivate();
        });
      };
      if (returnFocus && checkCanReturnFocus) {
        checkCanReturnFocus(getReturnFocusNode(state.nodeFocusedBeforeActivation)).then(finishDeactivation, finishDeactivation);
        return this;
      }
      finishDeactivation();
      return this;
    },
    pause: function pause(pauseOptions) {
      if (!state.active) {
        return this;
      }
      state.manuallyPaused = true;
      return this._setPausedState(true, pauseOptions);
    },
    unpause: function unpause(unpauseOptions) {
      if (!state.active) {
        return this;
      }
      state.manuallyPaused = false;
      if (trapStack[trapStack.length - 1] !== this) {
        return this;
      }
      return this._setPausedState(false, unpauseOptions);
    },
    updateContainerElements: function updateContainerElements(containerElements) {
      var elementsAsArray = [].concat(containerElements).filter(Boolean);
      state.containers = elementsAsArray.map(function (element) {
        return typeof element === 'string' ? doc.querySelector(element) : element;
      });
      if (config.isolateSubtrees) {
        collectAdjacentElements(state.containers);
      }
      if (state.active) {
        updateTabbableNodes();
        if (config.isolateSubtrees && !state.paused) {
          trap._setSubtreeIsolation(true);
        }
      }
      updateObservedNodes();
      return this;
    }
  };
  Object.defineProperties(trap, {
    _isManuallyPaused: {
      value: function value() {
        return state.manuallyPaused;
      }
    },
    _setPausedState: {
      value: function value(paused, options) {
        if (state.paused === paused) {
          return this;
        }
        state.paused = paused;
        if (paused) {
          var onPause = getOption(options, 'onPause');
          var onPostPause = getOption(options, 'onPostPause');
          onPause === null || onPause === void 0 || onPause();
          removeListeners();
          updateObservedNodes();
          trap._setSubtreeIsolation(false);
          onPostPause === null || onPostPause === void 0 || onPostPause();
        } else {
          var onUnpause = getOption(options, 'onUnpause');
          var onPostUnpause = getOption(options, 'onPostUnpause');
          onUnpause === null || onUnpause === void 0 || onUnpause();
          trap._setSubtreeIsolation(true);
          updateTabbableNodes();
          addListeners();
          updateObservedNodes();
          onPostUnpause === null || onPostUnpause === void 0 || onPostUnpause();
        }
        return this;
      }
    },
    _setSubtreeIsolation: {
      value: function value(isEnabled) {
        if (config.isolateSubtrees) {
          state.adjacentElements.forEach(function (el) {
            var _el$getAttribute;
            if (isEnabled) {
              switch (config.isolateSubtrees) {
                case 'aria-hidden':
                  // check both attribute and property to ensure initial state is captured
                  // correctly across different browsers and test environments (like JSDOM)
                  if (el.ariaHidden === 'true' || ((_el$getAttribute = el.getAttribute('aria-hidden')) === null || _el$getAttribute === void 0 ? void 0 : _el$getAttribute.toLowerCase()) === 'true') {
                    state.alreadySilent.add(el);
                  }
                  el.setAttribute('aria-hidden', 'true');
                  break;
                default:
                  // check both attribute and property to ensure initial state is captured
                  // correctly across different browsers and test environments (like JSDOM)
                  if (el.inert || el.hasAttribute('inert')) {
                    state.alreadySilent.add(el);
                  }
                  el.setAttribute('inert', true);
                  break;
              }
            } else {
              if (state.alreadySilent.has(el)) ; else {
                switch (config.isolateSubtrees) {
                  case 'aria-hidden':
                    el.removeAttribute('aria-hidden');
                    break;
                  default:
                    el.removeAttribute('inert');
                    break;
                }
              }
            }
          });
        }
      }
    }
  });

  // initialize container elements
  trap.updateContainerElements(elements);
  return trap;
};


//# sourceMappingURL=focus-trap.esm.js.map


/***/ },

/***/ "./node_modules/tabbable/dist/index.esm.js"
/*!*************************************************!*\
  !*** ./node_modules/tabbable/dist/index.esm.js ***!
  \*************************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   focusable: () => (/* binding */ focusable),
/* harmony export */   getTabIndex: () => (/* binding */ getTabIndex),
/* harmony export */   isFocusable: () => (/* binding */ isFocusable),
/* harmony export */   isTabbable: () => (/* binding */ isTabbable),
/* harmony export */   tabbable: () => (/* binding */ tabbable)
/* harmony export */ });
/*!
* tabbable 6.5.0
* @license MIT, https://github.com/focus-trap/tabbable/blob/master/LICENSE
*/
// NOTE: separate `:not()` selectors has broader browser support than the newer
//  `:not([inert], [inert] *)` (Feb 2023)
var candidateSelectors = ['input:not([inert]):not([inert] *)', 'select:not([inert]):not([inert] *)', 'textarea:not([inert]):not([inert] *)', 'a[href]:not([inert]):not([inert] *)', 'area[href]:not([inert]):not([inert] *)', 'button:not([inert]):not([inert] *)', '[tabindex]:not(slot):not([inert]):not([inert] *)', 'audio[controls]:not([inert]):not([inert] *)', 'video[controls]:not([inert]):not([inert] *)', '[contenteditable]:not([contenteditable="false"]):not([inert]):not([inert] *)', 'details>summary:first-of-type:not([inert]):not([inert] *)', 'details:not([inert]):not([inert] *)'];
var candidateSelector = /* #__PURE__ */candidateSelectors.join(',');
var NoElement = typeof Element === 'undefined';
var matches = NoElement ? function () {} : Element.prototype.matches || Element.prototype.msMatchesSelector || Element.prototype.webkitMatchesSelector;
var getRootNode = !NoElement && Element.prototype.getRootNode ? function (element) {
  var _element$getRootNode;
  return element === null || element === void 0 ? void 0 : (_element$getRootNode = element.getRootNode) === null || _element$getRootNode === void 0 ? void 0 : _element$getRootNode.call(element);
} : function (element) {
  return element === null || element === void 0 ? void 0 : element.ownerDocument;
};

/**
 * Determines if a node is inert or in an inert ancestor.
 * @param {Node} [node]
 * @param {boolean} [lookUp] If true and `node` is not inert, looks up at ancestors to
 *  see if any of them are inert. If false, only `node` itself is considered.
 * @returns {boolean} True if inert itself or by way of being in an inert ancestor.
 *  False if `node` is falsy.
 */
var _isInert = function isInert(node, lookUp) {
  var _node$getAttribute;
  if (lookUp === void 0) {
    lookUp = true;
  }
  // CAREFUL: JSDom does not support inert at all, so we can't use the `HTMLElement.inert`
  //  JS API property; we have to check the attribute, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's an active element
  var inertAtt = node === null || node === void 0 ? void 0 : (_node$getAttribute = node.getAttribute) === null || _node$getAttribute === void 0 ? void 0 : _node$getAttribute.call(node, 'inert');
  var inert = inertAtt === '' || inertAtt === 'true';

  // NOTE: this could also be handled with `node.matches('[inert], :is([inert] *)')`
  //  if it weren't for `matches()` not being a function on shadow roots; the following
  //  code works for any kind of node
  var result = inert || lookUp && node && (
  // closest does not exist on shadow roots, so we fall back to a manual
  // lookup upward, in case it is not defined.
  typeof node.closest === 'function' ? node.closest('[inert]') : _isInert(node.parentNode));
  return result;
};

/**
 * Determines if a node's content is editable.
 * @param {Element} [node]
 * @returns True if it's content-editable; false if it's not or `node` is falsy.
 */
var isContentEditable = function isContentEditable(node) {
  var _node$getAttribute2;
  // CAREFUL: JSDom does not support the `HTMLElement.isContentEditable` API so we have
  //  to use the attribute directly to check for this, which can either be empty or 'true';
  //  if it's `null` (not specified) or 'false', it's a non-editable element
  var attValue = node === null || node === void 0 ? void 0 : (_node$getAttribute2 = node.getAttribute) === null || _node$getAttribute2 === void 0 ? void 0 : _node$getAttribute2.call(node, 'contenteditable');
  return attValue === '' || attValue === 'true';
};

/**
 * @param {Element} el container to check in
 * @param {boolean} includeContainer add container to check
 * @param {(node: Element) => boolean} filter filter candidates
 * @returns {Element[]}
 */
var getCandidates = function getCandidates(el, includeContainer, filter) {
  // even if `includeContainer=false`, we still have to check it for inertness because
  //  if it's inert (either by itself or via its parent), then all its children are inert
  if (_isInert(el)) {
    return [];
  }
  var candidates = Array.prototype.slice.apply(el.querySelectorAll(candidateSelector));
  if (includeContainer && matches.call(el, candidateSelector)) {
    candidates.unshift(el);
  }
  candidates = candidates.filter(filter);
  return candidates;
};

/**
 * @callback GetShadowRoot
 * @param {Element} element to check for shadow root
 * @returns {ShadowRoot|boolean} ShadowRoot if available or boolean indicating if a shadowRoot is attached but not available.
 */

/**
 * @callback ShadowRootFilter
 * @param {Element} shadowHostNode the element which contains shadow content
 * @returns {boolean} true if a shadow root could potentially contain valid candidates.
 */

/**
 * @typedef {Object} CandidateScope
 * @property {Element} scopeParent contains inner candidates
 * @property {Element[]} candidates list of candidates found in the scope parent
 */

/**
 * @typedef {Object} IterativeOptions
 * @property {GetShadowRoot|boolean} getShadowRoot true if shadow support is enabled; falsy if not;
 *  if a function, implies shadow support is enabled and either returns the shadow root of an element
 *  or a boolean stating if it has an undisclosed shadow root
 * @property {(node: Element) => boolean} filter filter candidates
 * @property {boolean} flatten if true then result will flatten any CandidateScope into the returned list
 * @property {ShadowRootFilter} shadowRootFilter filter shadow roots;
 */

/**
 * @param {Element[]} elements list of element containers to match candidates from
 * @param {boolean} includeContainer add container list to check
 * @param {IterativeOptions} options
 * @returns {Array.<Element|CandidateScope>}
 */
var _getCandidatesIteratively = function getCandidatesIteratively(elements, includeContainer, options) {
  var candidates = [];
  var elementsToCheck = Array.from(elements);
  while (elementsToCheck.length) {
    var element = elementsToCheck.shift();
    if (_isInert(element, false)) {
      // no need to look up since we're drilling down
      // anything inside this container will also be inert
      continue;
    }
    if (element.tagName === 'SLOT') {
      // add shadow dom slot scope (slot itself cannot be focusable)
      var assigned = element.assignedElements();
      var content = assigned.length ? assigned : element.children;
      var nestedCandidates = _getCandidatesIteratively(content, true, options);
      if (options.flatten) {
        candidates.push.apply(candidates, nestedCandidates);
      } else {
        candidates.push({
          scopeParent: element,
          candidates: nestedCandidates
        });
      }
    } else {
      // check candidate element
      var validCandidate = matches.call(element, candidateSelector);
      if (validCandidate && options.filter(element) && (includeContainer || !elements.includes(element))) {
        candidates.push(element);
      }

      // iterate over shadow content if possible
      var shadowRoot = element.shadowRoot ||
      // check for an undisclosed shadow
      typeof options.getShadowRoot === 'function' && options.getShadowRoot(element);

      // no inert look up because we're already drilling down and checking for inertness
      //  on the way down, so all containers to this root node should have already been
      //  vetted as non-inert
      var validShadowRoot = !_isInert(shadowRoot, false) && (!options.shadowRootFilter || options.shadowRootFilter(element));
      if (shadowRoot && validShadowRoot) {
        // add shadow dom scope IIF a shadow root node was given; otherwise, an undisclosed
        //  shadow exists, so look at light dom children as fallback BUT create a scope for any
        //  child candidates found because they're likely slotted elements (elements that are
        //  children of the web component element (which has the shadow), in the light dom, but
        //  slotted somewhere _inside_ the undisclosed shadow) -- the scope is created below,
        //  _after_ we return from this recursive call
        var _nestedCandidates = _getCandidatesIteratively(shadowRoot === true ? element.children : shadowRoot.children, true, options);
        if (options.flatten) {
          candidates.push.apply(candidates, _nestedCandidates);
        } else {
          candidates.push({
            scopeParent: element,
            candidates: _nestedCandidates
          });
        }
      } else {
        // there's not shadow so just dig into the element's (light dom) children
        //  __without__ giving the element special scope treatment
        elementsToCheck.unshift.apply(elementsToCheck, element.children);
      }
    }
  }
  return candidates;
};

/**
 * @private
 * Determines if the node has an explicitly specified `tabindex` attribute.
 * @param {HTMLElement} node
 * @returns {boolean} True if so; false if not.
 */
var hasTabIndex = function hasTabIndex(node) {
  return !isNaN(parseInt(node.getAttribute('tabindex'), 10));
};

/**
 * Determine the tab index of a given node.
 * @param {HTMLElement} node
 * @returns {number} Tab order (negative, 0, or positive number).
 * @throws {Error} If `node` is falsy.
 */
var getTabIndex = function getTabIndex(node) {
  if (!node) {
    throw new Error('No node provided');
  }
  if (node.tabIndex < 0) {
    // in Chrome, <details/>, <audio controls/> and <video controls/> elements get a default
    // `tabIndex` of -1 when the 'tabindex' attribute isn't specified in the DOM,
    // yet they are still part of the regular tab order; in FF, they get a default
    // `tabIndex` of 0; since Chrome still puts those elements in the regular tab
    // order, consider their tab index to be 0.
    // Also browsers do not return `tabIndex` correctly for contentEditable nodes;
    // so if they don't have a tabindex attribute specifically set, assume it's 0.
    if ((/^(AUDIO|VIDEO|DETAILS)$/.test(node.tagName) || isContentEditable(node)) && !hasTabIndex(node)) {
      return 0;
    }
  }
  return node.tabIndex;
};

/**
 * Determine the tab index of a given node __for sort order purposes__.
 * @param {HTMLElement} node
 * @param {boolean} [isScope] True for a custom element with shadow root or slot that, by default,
 *  has tabIndex -1, but needs to be sorted by document order in order for its content to be
 *  inserted into the correct sort position.
 * @returns {number} Tab order (negative, 0, or positive number).
 */
var getSortOrderTabIndex = function getSortOrderTabIndex(node, isScope) {
  var tabIndex = getTabIndex(node);
  if (tabIndex < 0 && isScope && !hasTabIndex(node)) {
    return 0;
  }
  return tabIndex;
};
var sortOrderedTabbables = function sortOrderedTabbables(a, b) {
  return a.tabIndex === b.tabIndex ? a.documentOrder - b.documentOrder : a.tabIndex - b.tabIndex;
};
var isInput = function isInput(node) {
  return node.tagName === 'INPUT';
};
var isHiddenInput = function isHiddenInput(node) {
  return isInput(node) && node.type === 'hidden';
};
var isDetailsWithSummary = function isDetailsWithSummary(node) {
  var r = node.tagName === 'DETAILS' && Array.prototype.slice.apply(node.children).some(function (child) {
    return child.tagName === 'SUMMARY';
  });
  return r;
};
var getCheckedRadio = function getCheckedRadio(nodes, form) {
  for (var i = 0; i < nodes.length; i++) {
    if (nodes[i].checked && nodes[i].form === form) {
      return nodes[i];
    }
  }
};
var isTabbableRadio = function isTabbableRadio(node) {
  if (!node.name) {
    return true;
  }
  var radioScope = node.form || getRootNode(node);
  var queryRadios = function queryRadios(name) {
    return radioScope.querySelectorAll('input[type="radio"][name="' + name + '"]');
  };
  var radioSet;
  if (typeof window !== 'undefined' && typeof window.CSS !== 'undefined' && typeof window.CSS.escape === 'function') {
    radioSet = queryRadios(window.CSS.escape(node.name));
  } else {
    try {
      radioSet = queryRadios(node.name);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error('Looks like you have a radio button with a name attribute containing invalid CSS selector characters and need the CSS.escape polyfill: %s', err.message);
      return false;
    }
  }
  var checked = getCheckedRadio(radioSet, node.form);
  return !checked || checked === node;
};
var isRadio = function isRadio(node) {
  return isInput(node) && node.type === 'radio';
};
var isNonTabbableRadio = function isNonTabbableRadio(node) {
  return isRadio(node) && !isTabbableRadio(node);
};

// determines if a node is ultimately attached to the window's document
var isNodeAttached = function isNodeAttached(node) {
  var _nodeRoot;
  // The root node is the shadow root if the node is in a shadow DOM; some document otherwise
  //  (but NOT _the_ document; see second 'If' comment below for more).
  // If rootNode is shadow root, it'll have a host, which is the element to which the shadow
  //  is attached, and the one we need to check if it's in the document or not (because the
  //  shadow, and all nodes it contains, is never considered in the document since shadows
  //  behave like self-contained DOMs; but if the shadow's HOST, which is part of the document,
  //  is hidden, or is not in the document itself but is detached, it will affect the shadow's
  //  visibility, including all the nodes it contains). The host could be any normal node,
  //  or a custom element (i.e. web component). Either way, that's the one that is considered
  //  part of the document, not the shadow root, nor any of its children (i.e. the node being
  //  tested).
  // To further complicate things, we have to look all the way up until we find a shadow HOST
  //  that is attached (or find none) because the node might be in nested shadows...
  // If rootNode is not a shadow root, it won't have a host, and so rootNode should be the
  //  document (per the docs) and while it's a Document-type object, that document does not
  //  appear to be the same as the node's `ownerDocument` for some reason, so it's safer
  //  to ignore the rootNode at this point, and use `node.ownerDocument`. Otherwise,
  //  using `rootNode.contains(node)` will _always_ be true we'll get false-positives when
  //  node is actually detached.
  // NOTE: If `nodeRootHost` or `node` happens to be the `document` itself (which is possible
  //  if a tabbable/focusable node was quickly added to the DOM, focused, and then removed
  //  from the DOM as in https://github.com/focus-trap/focus-trap-react/issues/905), then
  //  `ownerDocument` will be `null`, hence the optional chaining on it.
  var nodeRoot = node && getRootNode(node);
  var nodeRootHost = (_nodeRoot = nodeRoot) === null || _nodeRoot === void 0 ? void 0 : _nodeRoot.host;

  // in some cases, a detached node will return itself as the root instead of a document or
  //  shadow root object, in which case, we shouldn't try to look further up the host chain
  var attached = false;
  if (nodeRoot && nodeRoot !== node) {
    var _nodeRootHost, _nodeRootHost$ownerDo, _node$ownerDocument;
    attached = !!((_nodeRootHost = nodeRootHost) !== null && _nodeRootHost !== void 0 && (_nodeRootHost$ownerDo = _nodeRootHost.ownerDocument) !== null && _nodeRootHost$ownerDo !== void 0 && _nodeRootHost$ownerDo.contains(nodeRootHost) || node !== null && node !== void 0 && (_node$ownerDocument = node.ownerDocument) !== null && _node$ownerDocument !== void 0 && _node$ownerDocument.contains(node));
    while (!attached && nodeRootHost) {
      var _nodeRoot2, _nodeRootHost2, _nodeRootHost2$ownerD;
      // since it's not attached and we have a root host, the node MUST be in a nested shadow DOM,
      //  which means we need to get the host's host and check if that parent host is contained
      //  in (i.e. attached to) the document
      nodeRoot = getRootNode(nodeRootHost);
      nodeRootHost = (_nodeRoot2 = nodeRoot) === null || _nodeRoot2 === void 0 ? void 0 : _nodeRoot2.host;
      attached = !!((_nodeRootHost2 = nodeRootHost) !== null && _nodeRootHost2 !== void 0 && (_nodeRootHost2$ownerD = _nodeRootHost2.ownerDocument) !== null && _nodeRootHost2$ownerD !== void 0 && _nodeRootHost2$ownerD.contains(nodeRootHost));
    }
  }
  return attached;
};
var isZeroArea = function isZeroArea(node) {
  var _node$getBoundingClie = node.getBoundingClientRect(),
    width = _node$getBoundingClie.width,
    height = _node$getBoundingClie.height;
  return width === 0 && height === 0;
};
var isHidden = function isHidden(node, _ref) {
  var displayCheck = _ref.displayCheck,
    getShadowRoot = _ref.getShadowRoot;
  if (displayCheck === 'full-native') {
    if ('checkVisibility' in node) {
      // Chrome >= 105, Edge >= 105, Firefox >= 106, Safari >= 17.4
      // @see https://developer.mozilla.org/en-US/docs/Web/API/Element/checkVisibility#browser_compatibility
      var visible = node.checkVisibility({
        // Checking opacity might be desirable for some use cases, but natively,
        // opacity zero elements _are_ focusable and tabbable.
        checkOpacity: false,
        opacityProperty: false,
        contentVisibilityAuto: true,
        visibilityProperty: true,
        // This is an alias for `visibilityProperty`. Contemporary browsers
        // support both. However, this alias has wider browser support (Chrome
        // >= 105 and Firefox >= 106, vs. Chrome >= 121 and Firefox >= 122), so
        // we include it anyway.
        checkVisibilityCSS: true
      });
      return !visible;
    }
    // Fall through to manual visibility checks
  }

  // NOTE: visibility will be `undefined` if node is detached from the document
  //  (see notes about this further down), which means we will consider it visible
  //  (this is legacy behavior from a very long way back)
  // NOTE: we check this regardless of `displayCheck="none"` because this is a
  //  _visibility_ check, not a _display_ check
  var _getComputedStyle = getComputedStyle(node),
    visibility = _getComputedStyle.visibility;
  if (visibility === 'hidden' || visibility === 'collapse') {
    return true;
  }
  var isDirectSummary = matches.call(node, 'details>summary:first-of-type');
  var nodeUnderDetails = isDirectSummary ? node.parentElement : node;
  if (matches.call(nodeUnderDetails, 'details:not([open]) *')) {
    return true;
  }
  if (!displayCheck || displayCheck === 'full' ||
  // full-native can run this branch when it falls through in case
  // Element#checkVisibility is unsupported
  displayCheck === 'full-native' || displayCheck === 'legacy-full') {
    if (typeof getShadowRoot === 'function') {
      // figure out if we should consider the node to be in an undisclosed shadow and use the
      //  'non-zero-area' fallback
      var originalNode = node;
      while (node) {
        var parentElement = node.parentElement;
        var rootNode = getRootNode(node);
        if (parentElement && !parentElement.shadowRoot && getShadowRoot(parentElement) === true // check if there's an undisclosed shadow
        ) {
          // node has an undisclosed shadow which means we can only treat it as a black box, so we
          //  fall back to a non-zero-area test
          return isZeroArea(node);
        } else if (node.assignedSlot) {
          // iterate up slot
          node = node.assignedSlot;
        } else if (!parentElement && rootNode !== node.ownerDocument) {
          // cross shadow boundary
          node = rootNode.host;
        } else {
          // iterate up normal dom
          node = parentElement;
        }
      }
      node = originalNode;
    }
    // else, `getShadowRoot` might be true, but all that does is enable shadow DOM support
    //  (i.e. it does not also presume that all nodes might have undisclosed shadows); or
    //  it might be a falsy value, which means shadow DOM support is disabled

    // Since we didn't find it sitting in an undisclosed shadow (or shadows are disabled)
    //  now we can just test to see if it would normally be visible or not, provided it's
    //  attached to the main document.
    // NOTE: We must consider case where node is inside a shadow DOM and given directly to
    //  `isTabbable()` or `isFocusable()` -- regardless of `getShadowRoot` option setting.

    if (isNodeAttached(node)) {
      // this works wherever the node is: if there's at least one client rect, it's
      //  somehow displayed; it also covers the CSS 'display: contents' case where the
      //  node itself is hidden in place of its contents; and there's no need to search
      //  up the hierarchy either
      return !node.getClientRects().length;
    }

    // Else, the node isn't attached to the document, which means the `getClientRects()`
    //  API will __always__ return zero rects (this can happen, for example, if React
    //  is used to render nodes onto a detached tree, as confirmed in this thread:
    //  https://github.com/facebook/react/issues/9117#issuecomment-284228870)
    //
    // It also means that even window.getComputedStyle(node).display will return `undefined`
    //  because styles are only computed for nodes that are in the document.
    //
    // NOTE: THIS HAS BEEN THE CASE FOR YEARS. It is not new, nor is it caused by tabbable
    //  somehow. Though it was never stated officially, anyone who has ever used tabbable
    //  APIs on nodes in detached containers has actually implicitly used tabbable in what
    //  was later (as of v5.2.0 on Apr 9, 2021) called `displayCheck="none"` mode -- essentially
    //  considering __everything__ to be visible because of the innability to determine styles.
    //
    // v6.0.0: As of this major release, the default 'full' option __no longer treats detached
    //  nodes as visible with the 'none' fallback.__
    if (displayCheck !== 'legacy-full') {
      return true; // hidden
    }
    // else, fallback to 'none' mode and consider the node visible
  } else if (displayCheck === 'non-zero-area') {
    // NOTE: Even though this tests that the node's client rect is non-zero to determine
    //  whether it's displayed, and that a detached node will __always__ have a zero-area
    //  client rect, we don't special-case for whether the node is attached or not. In
    //  this mode, we do want to consider nodes that have a zero area to be hidden at all
    //  times, and that includes attached or not.
    return isZeroArea(node);
  }

  // visible, as far as we can tell, or per current `displayCheck=none` mode, we assume
  //  it's visible
  return false;
};

// form fields (nested) inside a disabled fieldset are not focusable/tabbable
//  unless they are in the _first_ <legend> element of the top-most disabled
//  fieldset
var isDisabledFromFieldset = function isDisabledFromFieldset(node) {
  if (/^(INPUT|BUTTON|SELECT|TEXTAREA)$/.test(node.tagName)) {
    var parentNode = node.parentElement;
    // check if `node` is contained in a disabled <fieldset>
    while (parentNode) {
      if (parentNode.tagName === 'FIELDSET' && parentNode.disabled) {
        // look for the first <legend> among the children of the disabled <fieldset>
        for (var i = 0; i < parentNode.children.length; i++) {
          var child = parentNode.children.item(i);
          // when the first <legend> (in document order) is found
          if (child.tagName === 'LEGEND') {
            // if its parent <fieldset> is not nested in another disabled <fieldset>,
            // return whether `node` is a descendant of its first <legend>
            return matches.call(parentNode, 'fieldset[disabled] *') ? true : !child.contains(node);
          }
        }
        // the disabled <fieldset> containing `node` has no <legend>
        return true;
      }
      parentNode = parentNode.parentElement;
    }
  }

  // else, node's tabbable/focusable state should not be affected by a fieldset's
  //  enabled/disabled state
  return false;
};
var isNodeMatchingSelectorFocusable = function isNodeMatchingSelectorFocusable(options, node) {
  if (node.disabled || isHiddenInput(node) || isHidden(node, options) ||
  // For a details element with a summary, the summary element gets the focus
  isDetailsWithSummary(node) || isDisabledFromFieldset(node)) {
    return false;
  }
  return true;
};
var isNodeMatchingSelectorTabbable = function isNodeMatchingSelectorTabbable(options, node) {
  if (isNonTabbableRadio(node) || getTabIndex(node) < 0 || !isNodeMatchingSelectorFocusable(options, node)) {
    return false;
  }
  return true;
};
var isShadowRootTabbable = function isShadowRootTabbable(shadowHostNode) {
  var tabIndex = parseInt(shadowHostNode.getAttribute('tabindex'), 10);
  if (isNaN(tabIndex) || tabIndex >= 0) {
    return true;
  }
  // If a custom element has an explicit negative tabindex,
  // browsers will not allow tab targeting said element's children.
  return false;
};

/**
 * @param {Array.<Element|CandidateScope>} candidates
 * @returns Element[]
 */
var _sortByOrder = function sortByOrder(candidates) {
  var regularTabbables = [];
  var orderedTabbables = [];
  candidates.forEach(function (item, i) {
    var isScope = !!item.scopeParent;
    var element = isScope ? item.scopeParent : item;
    var candidateTabindex = getSortOrderTabIndex(element, isScope);
    var elements = isScope ? _sortByOrder(item.candidates) : element;
    if (candidateTabindex === 0) {
      isScope ? regularTabbables.push.apply(regularTabbables, elements) : regularTabbables.push(element);
    } else {
      orderedTabbables.push({
        documentOrder: i,
        tabIndex: candidateTabindex,
        item: item,
        isScope: isScope,
        content: elements
      });
    }
  });
  return orderedTabbables.sort(sortOrderedTabbables).reduce(function (acc, sortable) {
    sortable.isScope ? acc.push.apply(acc, sortable.content) : acc.push(sortable.content);
    return acc;
  }, []).concat(regularTabbables);
};
var tabbable = function tabbable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = _getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorTabbable.bind(null, options),
      flatten: false,
      getShadowRoot: options.getShadowRoot,
      shadowRootFilter: isShadowRootTabbable
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorTabbable.bind(null, options));
  }
  return _sortByOrder(candidates);
};
var focusable = function focusable(container, options) {
  options = options || {};
  var candidates;
  if (options.getShadowRoot) {
    candidates = _getCandidatesIteratively([container], options.includeContainer, {
      filter: isNodeMatchingSelectorFocusable.bind(null, options),
      flatten: true,
      getShadowRoot: options.getShadowRoot
    });
  } else {
    candidates = getCandidates(container, options.includeContainer, isNodeMatchingSelectorFocusable.bind(null, options));
  }
  return candidates;
};
var isTabbable = function isTabbable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, candidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorTabbable(options, node);
};
var focusableCandidateSelector = /* #__PURE__ */candidateSelectors.concat('iframe:not([inert]):not([inert] *)').join(',');
var isFocusable = function isFocusable(node, options) {
  options = options || {};
  if (!node) {
    throw new Error('No node provided');
  }
  if (matches.call(node, focusableCandidateSelector) === false) {
    return false;
  }
  return isNodeMatchingSelectorFocusable(options, node);
};


//# sourceMappingURL=index.esm.js.map


/***/ },

/***/ "./src/defaultOptions.ts"
/*!*******************************!*\
  !*** ./src/defaultOptions.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    autoConnect: false,
    rememberConnectedServer: false,
    proxyDns: true,
    enableNotifications: true,
    enableIpv6Lookups: false,
    enableNotificationsOnlyErrors: false,
    enableDebugInfo: false,
    enableExcludeList: false,
    excludeList: []
});


/***/ },

/***/ "./src/lib/Messenger.ts"
/*!******************************!*\
  !*** ./src/lib/Messenger.ts ***!
  \******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Messenger)
/* harmony export */ });

class Messenger {
    constructor() {
        this.onConnect = {
            addListener(cb) {
                chrome.runtime.onConnect.addListener(cb);
            },
            removeListener(cb) {
                chrome.runtime.onConnect.removeListener(cb);
            },
            hasListener(cb) {
                return chrome.runtime.onConnect.hasListener(cb);
            }
        };
    }
    connect(connectInfo) {
        return chrome.runtime.connect(connectInfo);
    }
    connectTab(tabId, connectInfo) {
        return chrome.tabs.connect(tabId, connectInfo);
    }
}


/***/ },

/***/ "./src/lib/TypedEventTarget.ts"
/*!*************************************!*\
  !*** ./src/lib/TypedEventTarget.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypedEventTarget: () => (/* binding */ TypedEventTarget)
/* harmony export */ });

class TypedEventTarget extends EventTarget {
    addEventListener(type, listener) {
        super.addEventListener(type, listener);
    }
    removeEventListener(type, listener) {
        super.removeEventListener(type, listener);
    }
    dispatchEvent(ev) {
        return super.dispatchEvent(ev);
    }
}


/***/ },

/***/ "./src/lib/TypedStorageArea.ts"
/*!*************************************!*\
  !*** ./src/lib/TypedStorageArea.ts ***!
  \*************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   TypedStorageArea: () => (/* binding */ TypedStorageArea)
/* harmony export */ });

class TypedStorageArea {
    constructor(storageArea) {
        this.storageArea = storageArea;
    }
    async get(keys) {
        return await this.storageArea.get(keys);
    }
    async getBytesInUse(keys) {
        return await this.storageArea.getBytesInUse(keys);
    }
    async set(keys) {
        await this.storageArea.set(keys);
    }
    async remove(keys) {
        await this.storageArea.remove(keys);
    }
    async clear() {
        await this.storageArea.clear();
    }
}


/***/ },

/***/ "./src/lib/logger.ts"
/*!***************************!*\
  !*** ./src/lib/logger.ts ***!
  \***************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Logger: () => (/* binding */ Logger),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

class Logger {
    constructor(prefix) {
        this.prefix = prefix;
    }
    log(message, data) {
        const formattedMessage = `${this.prefix} (Log): ${message}`;
        if (data) {
            console.log(formattedMessage, data);
        }
        else {
            console.log(formattedMessage);
        }
    }
    info(message, data) {
        const formattedMessage = `${this.prefix} (Info): ${message}`;
        if (data) {
            console.info(formattedMessage, data);
        }
        else {
            console.info(formattedMessage);
        }
    }
    error(message, data) {
        const formattedMessage = `${this.prefix} (Error): ${message}`;
        if (data) {
            console.error(formattedMessage, data);
        }
        else {
            console.error(formattedMessage);
        }
        return new Error(formattedMessage);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Logger("mullvad"));


/***/ },

/***/ "./src/lib/mullvadApi.ts"
/*!*******************************!*\
  !*** ./src/lib/mullvadApi.ts ***!
  \*******************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CHECK_URL: () => (/* binding */ CHECK_URL),
/* harmony export */   EndpointVariant: () => (/* binding */ EndpointVariant),
/* harmony export */   SOCKS_ADDRESS: () => (/* binding */ SOCKS_ADDRESS),
/* harmony export */   SOCKS_ADDRESS_WG: () => (/* binding */ SOCKS_ADDRESS_WG),
/* harmony export */   SOCKS_PORT: () => (/* binding */ SOCKS_PORT),
/* harmony export */   fetchConnectionDetails: () => (/* binding */ fetchConnectionDetails),
/* harmony export */   fetchIpAddress: () => (/* binding */ fetchIpAddress),
/* harmony export */   fetchPortDetails: () => (/* binding */ fetchPortDetails),
/* harmony export */   fetchServerList: () => (/* binding */ fetchServerList),
/* harmony export */   getFullSocksHost: () => (/* binding */ getFullSocksHost),
/* harmony export */   getServerIdFromHost: () => (/* binding */ getServerIdFromHost),
/* harmony export */   getShortSocksName: () => (/* binding */ getShortSocksName)
/* harmony export */ });
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./logger */ "./src/lib/logger.ts");


const logger = new _logger__WEBPACK_IMPORTED_MODULE_0__.Logger("mullvadApi");
const AIM_HOST = "am.i.mullvad.net";
const ENDPOINT_AIM = `https://${AIM_HOST}`;
const IPV4_ENDPOINT_AIM = `https://ipv4.${AIM_HOST}`;
const IPV6_ENDPOINT_AIM = `https://ipv6.${AIM_HOST}`;
var EndpointVariant;
(function (EndpointVariant) {
    EndpointVariant[EndpointVariant["IPv4"] = 0] = "IPv4";
    EndpointVariant[EndpointVariant["IPv6"] = 1] = "IPv6";
})(EndpointVariant || (EndpointVariant = {}));
function getVariantEndpoints(variant) {
    let endpoint;
    switch (variant) {
        case EndpointVariant.IPv4:
            endpoint = IPV4_ENDPOINT_AIM;
            break;
        case EndpointVariant.IPv6:
            endpoint = IPV6_ENDPOINT_AIM;
            break;
        default:
            throw new Error("Invalid endpoint variant");
    }
    return {
        endpointAimIp: `${endpoint}/ip`,
        endpointAimDetails: `${endpoint}/json`
    };
}
const ENDPOINT_AIM_PORT = `${ENDPOINT_AIM}/port`;
const ENDPOINT_RELAYS = "https://api.mullvad.net/www/relays/wireguard/";
const SOCKS_ADDRESS = "10.8.0.1";
const SOCKS_ADDRESS_WG = "10.64.0.1";
const SOCKS_PORT = "1080";
function getFullSocksHost(serverName) {
    if (serverName.endsWith("mullvad.net")) {
        return serverName;
    }
    return `${serverName}.mullvad.net`;
}
function getShortSocksName(socksName) {
    if (socksName.endsWith(".socks5.relays.mullvad.net")) {
        return socksName.slice(0, -26);
    }
    return socksName;
}
const CHECK_URL = "https://mullvad.net/check";
async function fetchIpAddress(variant = EndpointVariant.IPv4, init) {
    logger.info("Fetching IP address...");
    const { endpointAimIp } = getVariantEndpoints(variant);
    const res = await fetch(endpointAimIp, init);
    return (await res.text()).trim();
}
async function fetchConnectionDetails(variant = EndpointVariant.IPv4, init) {
    logger.info("Fetching connection details...");
    const { endpointAimDetails } = getVariantEndpoints(variant);
    const res = await fetch(endpointAimDetails, init);
    const json = await res.json();
    json.mullvad_server_type = json.mullvad_server_type?.toLowerCase();
    return json;
}
async function fetchPortDetails(port, init) {
    if (port < 1 || port > 65536) {
        throw new Error("Invalid port!");
    }
    logger.info("Fetching port details...");
    let json;
    try {
        const res = await fetch(`${ENDPOINT_AIM_PORT}/${port}`, init);
        json = await res.json();
    }
    catch (err) {
        throw logger.error("Failed to fetch port details", err);
    }
    return json;
}
async function fetchServerList(init) {
    logger.info("Fetching server list...");
    let json;
    try {
        const res = await fetch(ENDPOINT_RELAYS, init);
        json = await res.json();
    }
    catch (err) {
        throw logger.error("Failed to fetch server list", err);
    }
    return json;
}
function getServerIdFromHost(hostname) {
    return parseInt(hostname.slice(2, hostname.indexOf("-")));
}


/***/ },

/***/ "./src/lib/options.ts"
/*!****************************!*\
  !*** ./src/lib/options.ts ***!
  \****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _defaultOptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../defaultOptions */ "./src/defaultOptions.ts");
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./logger */ "./src/lib/logger.ts");
/* harmony import */ var _TypedEventTarget__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TypedEventTarget */ "./src/lib/TypedEventTarget.ts");
/* harmony import */ var _TypedStorageArea__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./TypedStorageArea */ "./src/lib/TypedStorageArea.ts");





const storageArea = new _TypedStorageArea__WEBPACK_IMPORTED_MODULE_3__.TypedStorageArea(chrome.storage.sync);
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new (class extends _TypedEventTarget__WEBPACK_IMPORTED_MODULE_2__.TypedEventTarget {
    constructor() {
        super();
        this.onStorageChanged = this.onStorageChanged.bind(this);
        chrome.storage.onChanged.addListener(this.onStorageChanged);
    }
    onStorageChanged(changes, areaName) {
        if (areaName !== "sync") {
            return;
        }
        if ("options" in changes) {
            const { oldValue, newValue } = changes.options;
            const changedKeys = [];
            for (const key of Object.keys(newValue)) {
                if (oldValue) {
                    if (!(key in oldValue)) {
                        continue;
                    }
                    const oldKeyValue = oldValue[key];
                    const newKeyValue = newValue[key];
                    if (oldKeyValue === newKeyValue) {
                        continue;
                    }
                    if (oldKeyValue instanceof Array &&
                        newKeyValue instanceof Array) {
                        if (oldKeyValue.length === newKeyValue.length &&
                            oldKeyValue.every((value, index) => value === newKeyValue[index])) {
                            continue;
                        }
                    }
                }
                changedKeys.push(key);
            }
            this.dispatchEvent(new CustomEvent("changed", {
                detail: changedKeys
            }));
        }
    }
    async getAll() {
        const { options } = await storageArea.get("options");
        return options;
    }
    async setAll(options = _defaultOptions__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        return storageArea.set({ options });
    }
    async get(name) {
        const options = await this.getAll();
        if (options.hasOwnProperty(name)) {
            return options[name];
        }
        else {
            throw _logger__WEBPACK_IMPORTED_MODULE_1__["default"].error(`Failed to find option ${name} in storage.`);
        }
    }
    async set(name, value) {
        const options = await this.getAll();
        options[name] = value;
        return this.setAll(options);
    }
    async update(defaults = _defaultOptions__WEBPACK_IMPORTED_MODULE_0__["default"]) {
        const newOpts = await this.getAll();
        if (!newOpts) {
            this.setAll();
        }
        for (const [optName, optVal] of Object.entries(defaults)) {
            if (!newOpts.hasOwnProperty(optName)) {
                newOpts[optName] = optVal;
            }
        }
        return this.setAll(newOpts);
    }
})());


/***/ },

/***/ "./src/lib/utils.ts"
/*!**************************!*\
  !*** ./src/lib/utils.ts ***!
  \**************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BrowserType: () => (/* binding */ BrowserType),
/* harmony export */   getBrowserType: () => (/* binding */ getBrowserType),
/* harmony export */   getMinutesInMs: () => (/* binding */ getMinutesInMs)
/* harmony export */ });

var BrowserType;
(function (BrowserType) {
    BrowserType[BrowserType["Chromium"] = 0] = "Chromium";
    BrowserType[BrowserType["Firefox"] = 1] = "Firefox";
    BrowserType[BrowserType["Unknown"] = 2] = "Unknown";
})(BrowserType || (BrowserType = {}));
async function getBrowserType() {
    const getBrowserInfo = chrome.runtime.getBrowserInfo;
    if (getBrowserInfo) {
        try {
            const browserInfo = await getBrowserInfo();
            switch (browserInfo.name.toLowerCase()) {
                case "firefox":
                    return BrowserType.Firefox;
                default:
                    return BrowserType.Unknown;
            }
        }
        catch (e) {
            return BrowserType.Chromium;
        }
    }
    return BrowserType.Chromium;
}
function getMinutesInMs(minutes) {
    return minutes * 60 * 1000;
}


/***/ },

/***/ "./src/localStorage.ts"
/*!*****************************!*\
  !*** ./src/localStorage.ts ***!
  \*****************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_TypedStorageArea__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/TypedStorageArea */ "./src/lib/TypedStorageArea.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _lib_TypedStorageArea__WEBPACK_IMPORTED_MODULE_0__.TypedStorageArea(chrome.storage.local));


/***/ },

/***/ "./src/messages.ts"
/*!*************************!*\
  !*** ./src/messages.ts ***!
  \*************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _lib_Messenger__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/Messenger */ "./src/lib/Messenger.ts");


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new _lib_Messenger__WEBPACK_IMPORTED_MODULE_0__["default"]());


/***/ },

/***/ "./src/ui/options/OptionsView.tsx"
/*!****************************************!*\
  !*** ./src/ui/options/OptionsView.tsx ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptionsView: () => (/* binding */ OptionsView)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/preact/compat/jsx-runtime.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _lib_options__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../lib/options */ "./src/lib/options.ts");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../lib/utils */ "./src/lib/utils.ts");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../localStorage */ "./src/localStorage.ts");






const _ = chrome.i18n.getMessage;
function getInputValue(input) {
    switch (input.type) {
        case "checkbox":
            return input.checked;
        case "number":
            return parseFloat(input.value);
        default:
            return input.value;
    }
}
class OptionsView extends react__WEBPACK_IMPORTED_MODULE_1__["default"].Component {
    constructor(props) {
        super(props);
        this.state = {
            browserType: _lib_utils__WEBPACK_IMPORTED_MODULE_3__.BrowserType.Unknown
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleExcludeListChange = this.handleExcludeListChange.bind(this);
        this.handleClearCache = this.handleClearCache.bind(this);
        this.handleClearRecentServers =
            this.handleClearRecentServers.bind(this);
    }
    async componentDidMount() {
        this.setState({
            options: await _lib_options__WEBPACK_IMPORTED_MODULE_2__["default"].getAll(),
            browserType: await _lib_utils__WEBPACK_IMPORTED_MODULE_3__.getBrowserType()
        });
        _lib_options__WEBPACK_IMPORTED_MODULE_2__["default"].addEventListener("changed", async () => {
            this.setState({
                options: await _lib_options__WEBPACK_IMPORTED_MODULE_2__["default"].getAll()
            });
        });
    }
    render() {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("form", { className: "options", children: [this.state.options && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { className: "option option--inline", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__control", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { name: "autoConnect", type: "checkbox", checked: this.state.options?.autoConnect, onChange: this.handleInputChange }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__label", children: _("optionsAutoConnectLabel") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__description", children: _("optionsAutoConnectDescription") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { className: "option option--inline", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__control", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { name: "rememberConnectedServer", type: "checkbox", checked: this.state.options
                                                    ?.rememberConnectedServer, onChange: this.handleInputChange }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__label", children: _("optionsRememberConnectedServerLabel") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__description", children: _("optionsRememberConnectedServerDescription") })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { className: "option option--inline proxy-dns-option", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__control", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { name: "proxyDns", type: "checkbox", checked: this.state.options?.proxyDns, onChange: this.handleInputChange }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__label", children: _("optionsProxyDnsLabel") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__description", children: _("optionsProxyDnsDescription") })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { className: "option option--inline", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__control", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { name: "enableNotifications", type: "checkbox", checked: this.state.options?.enableNotifications, onChange: this.handleInputChange }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__label", children: _("optionsEnableNotificationsLabel") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__description", children: _("optionsEnableNotificationsDescription") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { className: "option option--inline", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__control", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { name: "enableNotificationsOnlyErrors", type: "checkbox", checked: this.state.options
                                                    ?.enableNotificationsOnlyErrors, onChange: this.handleInputChange }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__label", children: _("optionsEnableNotificationsOnlyErrorsLabel") })] })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { className: "option option--inline", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__control", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { name: "enableIpv6Lookups", type: "checkbox", checked: this.state.options?.enableIpv6Lookups, onChange: this.handleInputChange }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__label", children: _("optionsEnableIpv6LookupsLabel") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__description", children: _("optionsEnableIpv6LookupsDescription") })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { className: "option option--inline", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__control", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { name: "enableDebugInfo", type: "checkbox", checked: this.state.options?.enableDebugInfo, onChange: this.handleInputChange }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__label", children: _("optionsEnableDebugInfoLabel") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__description", children: _("optionsEnableDebugInfoDescription") })] }), this.state.browserType ===
                            _lib_utils__WEBPACK_IMPORTED_MODULE_3__.BrowserType.Firefox && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { className: "option option--inline", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__control", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("input", { name: "enableExcludeList", type: "checkbox", checked: this.state.options
                                                    ?.enableExcludeList, onChange: this.handleInputChange }) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__label", children: _("optionsEnableExcludeListLabel") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("label", { className: "option", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__label", children: _("optionsExcludeListLabel") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__description", children: _("optionsExcludeListDescription") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "option__control", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("textarea", { name: "excludeList", onChange: this.handleExcludeListChange, value: this.state.options.excludeList.join("\n"), rows: 8 }) })] })] })] }))] })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("hr", {}), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "buttons", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: this.handleClearCache, children: _("optionsClearCacheLabel") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { onClick: this.handleClearRecentServers, children: _("optionsClearRecentServersLabel") })] })] }));
    }
    handleClearCache() {
        _localStorage__WEBPACK_IMPORTED_MODULE_4__["default"].remove(["serverList", "serverListFrom"]);
    }
    handleClearRecentServers() {
        _localStorage__WEBPACK_IMPORTED_MODULE_4__["default"].remove(["recentServers"]);
    }
    handleInputChange(ev) {
        this.setState(currentState => {
            if (currentState.options) {
                currentState.options[ev.target.name] = getInputValue(ev.target);
                this.saveOptions();
            }
            return currentState;
        });
    }
    handleExcludeListChange(ev) {
        this.setState(currentState => {
            if (currentState.options) {
                if (ev.target.value === "") {
                    currentState.options.excludeList = [];
                }
                currentState.options.excludeList = ev.target.value.split("\n");
                this.saveOptions();
            }
            return currentState;
        });
    }
    async saveOptions() {
        await _lib_options__WEBPACK_IMPORTED_MODULE_2__["default"].setAll(this.state.options);
    }
}


/***/ },

/***/ "./src/ui/options/injectStyle.ts"
/*!***************************************!*\
  !*** ./src/ui/options/injectStyle.ts ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../lib/utils */ "./src/lib/utils.ts");


_lib_utils__WEBPACK_IMPORTED_MODULE_0__.getBrowserType().then(type => {
    const linkElement = document.createElement("link");
    linkElement.rel = "stylesheet";
    switch (type) {
        case _lib_utils__WEBPACK_IMPORTED_MODULE_0__.BrowserType.Firefox:
            linkElement.href = chrome.runtime.getURL("ui/options/options-firefox.css");
            break;
        case _lib_utils__WEBPACK_IMPORTED_MODULE_0__.BrowserType.Chromium:
            linkElement.href = chrome.runtime.getURL("ui/options/options-chromium.css");
            break;
        default:
            return;
    }
    document.head.append(linkElement);
});


/***/ },

/***/ "./src/ui/popup/OptionsPanel.tsx"
/*!***************************************!*\
  !*** ./src/ui/popup/OptionsPanel.tsx ***!
  \***************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   OptionsPanel: () => (/* binding */ OptionsPanel)
/* harmony export */ });
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/preact/compat/jsx-runtime.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var focus_trap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! focus-trap */ "./node_modules/focus-trap/dist/focus-trap.esm.js");
/* harmony import */ var _options_OptionsView__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../options/OptionsView */ "./src/ui/options/OptionsView.tsx");





const _ = chrome.i18n.getMessage;
const optionsPanelClass = "panel";
class OptionsPanel extends react__WEBPACK_IMPORTED_MODULE_1__["default"].Component {
    constructor() {
        super(...arguments);
        this.panelRef = react__WEBPACK_IMPORTED_MODULE_1__["default"].createRef();
    }
    componentDidMount() {
        const panelElement = this.panelRef.current;
        if (!panelElement) {
            return;
        }
        this.trap = focus_trap__WEBPACK_IMPORTED_MODULE_2__.createFocusTrap(panelElement, {
            escapeDeactivates: false,
            fallbackFocus: `.${optionsPanelClass}`
        });
    }
    render() {
        let panelClass = optionsPanelClass;
        if (this.props.open) {
            panelClass += ` ${panelClass}--visible`;
        }
        if (this.props.open) {
            this.trap?.activate();
        }
        else {
            this.trap?.deactivate();
        }
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: panelClass, ref: this.panelRef, tabIndex: -1, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "panel__header", children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("h2", { className: "panel__title", children: _("optionsPanelTitle") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "panel__tab-button", onClick: () => chrome.runtime.openOptionsPage(), children: _("optionsPanelViewInTab") }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "panel__close-button", onClick: () => this.props.onClose(), children: _("optionsPanelClose") })] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "panel__content", children: (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_options_OptionsView__WEBPACK_IMPORTED_MODULE_3__.OptionsView, {}) })] }));
    }
}


/***/ },

/***/ "./src/ui/popup/index.tsx"
/*!********************************!*\
  !*** ./src/ui/popup/index.tsx ***!
  \********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/preact/compat/jsx-runtime.mjs");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var afterframe__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! afterframe */ "./node_modules/afterframe/dist/afterframe.module.js");
/* harmony import */ var _localStorage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../localStorage */ "./src/localStorage.ts");
/* harmony import */ var _messages__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../messages */ "./src/messages.ts");
/* harmony import */ var _lib_logger__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../lib/logger */ "./src/lib/logger.ts");
/* harmony import */ var _lib_options__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../lib/options */ "./src/lib/options.ts");
/* harmony import */ var _lib_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../lib/utils */ "./src/lib/utils.ts");
/* harmony import */ var _lib_mullvadApi__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../lib/mullvadApi */ "./src/lib/mullvadApi.ts");
/* harmony import */ var _OptionsPanel__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./OptionsPanel */ "./src/ui/popup/OptionsPanel.tsx");
/* harmony import */ var _options_injectStyle__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../options/injectStyle */ "./src/ui/options/injectStyle.ts");













const _ = chrome.i18n.getMessage;
chrome.runtime.getPlatformInfo().then(platformInfo => {
    if (platformInfo.os === "mac") {
        const linkElement = document.createElement("link");
        linkElement.rel = "stylesheet";
        linkElement.href = "style-mac.css";
        document.head.append(linkElement);
    }
});
let port;
class PopupApp extends react__WEBPACK_IMPORTED_MODULE_1__["default"].Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoading: true,
            isUpdating: false,
            isOptionsPanelOpen: false,
            proxy: {
                isConnected: false,
                isConnecting: false
            },
            recentServers: []
        };
        this.pathOffsets = new Map();
        const req = new XMLHttpRequest();
        req.open("GET", "assets/world.svg", false);
        req.send();
        const svgWrapper = document.createElement("div");
        const svgElement = req.responseXML.querySelector("svg");
        svgWrapper.classList.add("svg-wrapper");
        svgWrapper.append(svgElement);
        document.body.append(svgWrapper);
        (0,afterframe__WEBPACK_IMPORTED_MODULE_2__["default"])(() => {
            const wrapperRect = svgWrapper.getBoundingClientRect();
            const svgRect = svgElement.getBoundingClientRect();
            for (const path of svgElement.getElementsByTagName("path")) {
                const pathRect = path.getBoundingClientRect();
                path.id = path.id.toLowerCase();
                this.pathOffsets.set(path.id, [
                    wrapperRect.x +
                        wrapperRect.width / 2 -
                        (pathRect.x + pathRect.width / 2),
                    wrapperRect.y +
                        wrapperRect.height / 2 -
                        (pathRect.y + pathRect.height / 2)
                ]);
            }
        });
        this.svgWrapper = svgWrapper;
        this.svgElement = svgElement;
        this.handleCountryChange = this.handleCountryChange.bind(this);
        this.handleServerChange = this.handleServerChange.bind(this);
        this.handleConnectClick = this.handleConnectClick.bind(this);
        this.handleDisconnectClick = this.handleDisconnectClick.bind(this);
        this.onOptionsPanelClose = this.onOptionsPanelClose.bind(this);
        this.onOptionsPanelOpen = this.onOptionsPanelOpen.bind(this);
    }
    focusCountry(countryCode) {
        if (!countryCode || !this.pathOffsets.has(countryCode)) {
            this.focusCountry("se");
            return;
        }
        const [translateX, translateY] = this.pathOffsets.get(countryCode);
        this.svgElement.style.transform = `translate(${translateX}px, ${translateY}px)`;
        const reducedMotionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
        if (reducedMotionQuery.matches) {
            if (!this.svgElement.style.visibility) {
                this.svgElement.style.visibility = "visible";
            }
            return;
        }
        if (!this.svgElement.style.transition) {
            (0,afterframe__WEBPACK_IMPORTED_MODULE_2__["default"])(() => {
                this.svgElement.style.transition = "transform 400ms ease";
                this.svgElement.style.visibility = "visible";
            });
        }
    }
    async componentDidMount() {
        port = _messages__WEBPACK_IMPORTED_MODULE_4__["default"].connect({
            name: "background"
        });
        port.onMessage.addListener(message => {
            switch (message.subject) {
                case "popup:/update": {
                    this.setState(prevState => {
                        if (!prevState.proxy) {
                            return prevState;
                        }
                        for (const key in message.data) {
                            prevState.proxy[key] = message.data[key];
                        }
                        return prevState;
                    }, () => {
                        if (!this.state.proxy?.isConnecting &&
                            this.serverMap) {
                            this.updateConnectionDetails();
                        }
                    });
                    break;
                }
            }
        });
        let { serverList, serverListFrom } = await _localStorage__WEBPACK_IMPORTED_MODULE_3__["default"].get([
            "serverList",
            "serverListFrom"
        ]);
        if (!serverList || Date.now() - serverListFrom > (0,_lib_utils__WEBPACK_IMPORTED_MODULE_7__.getMinutesInMs)(5)) {
            serverList = await _lib_mullvadApi__WEBPACK_IMPORTED_MODULE_8__.fetchServerList();
            serverListFrom = Date.now();
            await _localStorage__WEBPACK_IMPORTED_MODULE_3__["default"].set({
                serverList,
                serverListFrom
            });
        }
        const serverMap = new Map();
        for (const server of serverList) {
            let countryServers = serverMap.get(server.country_code) ?? [];
            if (!server.active) {
                continue;
            }
            countryServers.push(server);
            countryServers.sort((a, b) => {
                const aId = _lib_mullvadApi__WEBPACK_IMPORTED_MODULE_8__.getServerIdFromHost(a.hostname);
                const bId = _lib_mullvadApi__WEBPACK_IMPORTED_MODULE_8__.getServerIdFromHost(b.hostname);
                if (aId < bId)
                    return -1;
                if (aId > bId)
                    return 1;
                return 0;
            });
            serverMap.set(server.country_code, countryServers);
        }
        const { recentServers } = await _localStorage__WEBPACK_IMPORTED_MODULE_3__["default"].get("recentServers");
        recentServers?.forEach((server, i) => {
            const siblingServers = serverMap.get(server.country_code);
            const matchingServer = siblingServers?.find(sibling => sibling.socks_name === server.socks_name);
            if (!matchingServer) {
                recentServers.splice(i, 1);
            }
            else {
                recentServers.splice(i, 1, matchingServer);
            }
        });
        this.serverMap = serverMap;
        this.setState({
            recentServers,
            isLoading: false
        }, () => {
            this.updateConnectionDetails();
        });
    }
    renderConnectionInfo() {
        let connectionClassName = "connection";
        if (this.state.isLoading) {
            connectionClassName += " connection--loading";
        }
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: connectionClassName, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "options-button", onClick: this.onOptionsPanelOpen, title: _("optionsPanelOpen") }), this.state.isLoading ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "loader", title: _("popupLoading") })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: `connection__status ${this.state.proxy?.isConnected
                                ? "connection__status--connected"
                                : this.state.proxy?.isConnecting
                                    ? "connection__status--connecting"
                                    : "connection__status--not-connected"}`, children: this.state.proxy?.isConnected ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [_("popupConnectionStatusConnected"), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("a", { className: "connection__info", href: _lib_mullvadApi__WEBPACK_IMPORTED_MODULE_8__.CHECK_URL, title: this.isViaWireGuard()
                                            ? _("popupConnectionTypeWireGuard")
                                            : _("popupConnectionTypeOpenVPN") })] })) : this.state.proxy?.isConnecting ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(LoadingIndicator, { text: _("popupConnectionStatusConnecting") })) : (_("popupConnectionStatusNotConnected")) }), this.state.isUpdating ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "loader", title: _("popupLoading") })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [this.state.connectionDetails?.city && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "connection__city", children: this.state.connectionDetails.city })), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "connection__country", children: this.state.connectionDetails?.country }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "connection__ip connection__ip--v4", title: _("popupConnectionIpv4Title"), children: this.state.connectionDetails?.ip }), this.state.address6 && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("div", { className: "connection__ip connection__ip--v6", title: _("popupConnectionIpv6Title"), children: this.state.address6 }))] }))] }))] }));
    }
    renderSelectionUI() {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("fieldset", { className: "selection", disabled: this.state.isLoading ||
                this.state.proxy?.isConnecting ||
                !this.serverMap, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { className: `selection__country ${!this.state.selectedCountry &&
                        "selection__country--default"}`, title: _("popupSelectionCountryPlaceholder"), value: this.state.selectedCountry, onChange: this.handleCountryChange, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { selected: !this.state.selectedCountry, disabled: true, children: _("popupSelectionCountryPlaceholder") }), this.state.recentServers && ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("optgroup", { label: _("popupSelectionCountryRecentServers"), children: this.state.recentServers.map(server => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", { value: server.socks_name, children: [server.country_name, " (", _lib_mullvadApi__WEBPACK_IMPORTED_MODULE_8__.getShortSocksName(server.socks_name), ")"] }))) })), this.serverMap &&
                            Array.from(this.serverMap.entries()).map(([countryCode, server], i) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { value: countryCode, children: server[0].country_name }, i)))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("select", { className: `selection__server ${!this.state.selectedServer &&
                        "selection__server--default"}`, title: _("popupSelectionServerPlaceholder"), disabled: !this.state.selectedCountry, value: this.state.selectedServer, onChange: this.handleServerChange, children: [(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("option", { selected: !this.state.selectedServer, disabled: true, children: _("popupSelectionServerPlaceholder") }), this.state.selectedCountry &&
                            this.serverMap
                                ?.get(this.state.selectedCountry)
                                ?.map((server, i) => ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("option", { value: server.socks_name, children: [_lib_mullvadApi__WEBPACK_IMPORTED_MODULE_8__.getShortSocksName(server.socks_name), " ", "(", server.city_name, ")"] }, i)))] }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "selection__connect", disabled: !(this.state.selectedServer &&
                        this.state.selectedServer !== this.state.proxy?.host), onClick: this.handleConnectClick, children: _("popupSelectionConnect") })] }));
    }
    render() {
        const connectingOrConnected = this.state.proxy?.isConnected || this.state.proxy?.isConnecting;
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.Fragment, { children: [this.renderConnectionInfo(), this.isViaWireGuard() && this.renderSelectionUI(), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("fieldset", { className: "control", children: this.state.connectionDetails &&
                        !this.isViaWireGuard() &&
                        !connectingOrConnected ? ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "control__connect", onClick: this.handleConnectClick, disabled: this.state.isLoading, children: _("popupConnect") })) : ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)("button", { className: "control__disconnect", onClick: this.handleDisconnectClick, disabled: !connectingOrConnected, children: _("popupDisconnect") })) }), (0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionsPanel__WEBPACK_IMPORTED_MODULE_9__.OptionsPanel, { open: this.state.isOptionsPanelOpen, onClose: this.onOptionsPanelClose })] }));
    }
    isViaWireGuard() {
        return (this.state.connectionDetails?.mullvad_server_type === "wireguard" ||
            this.state.connectionDetails?.mullvad_server_type ===
                "socks through wireguard");
    }
    async updateConnectionDetails() {
        if (!this.serverMap) {
            return;
        }
        this.setState({ isUpdating: true });
        let details;
        try {
            const detailsPromise = _lib_mullvadApi__WEBPACK_IMPORTED_MODULE_8__.fetchConnectionDetails();
            if (await _lib_options__WEBPACK_IMPORTED_MODULE_6__["default"].get("enableIpv6Lookups")) {
                _lib_mullvadApi__WEBPACK_IMPORTED_MODULE_8__.fetchIpAddress(_lib_mullvadApi__WEBPACK_IMPORTED_MODULE_8__.EndpointVariant.IPv6)
                    .then(address6 => this.setState({ address6 }))
                    .catch(() => {
                    this.setState({
                        address6: undefined
                    });
                });
            }
            else {
                this.setState({
                    address6: undefined
                });
            }
            details = await detailsPromise;
        }
        catch (err) {
            _lib_logger__WEBPACK_IMPORTED_MODULE_5__["default"].error("Failed to fetch connection details!");
            this.setState({ isUpdating: false });
            return;
        }
        let matchingServer;
        let matchingCountry;
        for (const [, countryServers] of this.serverMap) {
            const match = countryServers.find(server => this.state.proxy?.host?.startsWith(server.socks_name));
            if (match) {
                matchingServer = match;
                matchingCountry = matchingServer.country_code;
                break;
            }
        }
        if ((!matchingServer &&
            this.state.proxy?.host === _lib_mullvadApi__WEBPACK_IMPORTED_MODULE_8__.SOCKS_ADDRESS) ||
            this.state.proxy?.host === _lib_mullvadApi__WEBPACK_IMPORTED_MODULE_8__.SOCKS_ADDRESS_WG) {
            matchingCountry = details.mullvad_exit_ip_hostname?.slice(0, 2);
        }
        this.setState({
            selectedCountry: matchingCountry,
            selectedServer: matchingServer?.socks_name,
            connectionDetails: details,
            isUpdating: false
        }, () => {
            if (this.state.connectionDetails) {
                const { mullvad_exit_ip_hostname } = this.state.connectionDetails;
                this.focusCountry(mullvad_exit_ip_hostname?.slice(0, 2));
                port.postMessage({
                    subject: "background:/updateConnectionDetails",
                    data: {
                        details: this.state.connectionDetails
                    }
                });
            }
        });
    }
    handleCountryChange(ev) {
        if (ev.target.value.length > 2) {
            const matchingServer = this.state.recentServers.find(server => server.socks_name === ev.target.value);
            if (!matchingServer)
                return;
            this.setState({
                selectedCountry: matchingServer.country_code,
                selectedServer: matchingServer.socks_name
            });
            return;
        }
        this.setState({
            selectedCountry: ev.target.value,
            selectedServer: undefined
        });
    }
    handleServerChange(ev) {
        this.setState({
            selectedServer: ev.target.value
        });
    }
    async handleConnectClick() {
        if (!this.state.connectionDetails) {
            return;
        }
        if (!this.isViaWireGuard()) {
            port.postMessage({
                subject: "background:/connect",
                data: {
                    proxyHost: _lib_mullvadApi__WEBPACK_IMPORTED_MODULE_8__.SOCKS_ADDRESS,
                    details: this.state.connectionDetails
                }
            });
        }
        else if (this.state.selectedServer) {
            port.postMessage({
                subject: "background:/connect",
                data: {
                    proxyHost: this.state.selectedServer,
                    details: this.state.connectionDetails
                }
            });
        }
        if (this.state.selectedCountry) {
            const recentServers = (await _localStorage__WEBPACK_IMPORTED_MODULE_3__["default"].get("recentServers")).recentServers ?? [];
            const newRecentServer = this.serverMap
                ?.get(this.state.selectedCountry)
                ?.find(server => server.socks_name === this.state.selectedServer);
            if (newRecentServer) {
                const existingIndex = recentServers.findIndex(server => server.socks_name === newRecentServer.socks_name);
                if (existingIndex !== -1) {
                    recentServers.splice(existingIndex, 1);
                }
                recentServers.unshift(newRecentServer);
                if (recentServers.length > 3) {
                    recentServers.pop();
                }
                await _localStorage__WEBPACK_IMPORTED_MODULE_3__["default"].set({ recentServers });
                this.setState({ recentServers });
            }
        }
    }
    handleDisconnectClick() {
        port.postMessage({
            subject: "background:/disconnect"
        });
    }
    onOptionsPanelOpen() {
        this.setState({ isOptionsPanelOpen: true });
    }
    onOptionsPanelClose() {
        this.setState({ isOptionsPanelOpen: false });
    }
}
class LoadingIndicator extends react__WEBPACK_IMPORTED_MODULE_1__["default"].Component {
    constructor(props) {
        super(props);
        this.state = {
            ellipsis: ""
        };
        setInterval(() => {
            this.setState(prevState => ({
                ellipsis: this.getNextEllipsis(prevState.ellipsis)
            }));
        }, this.props.duration ?? 500);
    }
    render() {
        return ((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxs)("div", { className: "loading", children: [this.props.text, this.state.ellipsis] }));
    }
    getNextEllipsis(ellipsis) {
        if (ellipsis === "")
            return ".";
        if (ellipsis === ".")
            return "..";
        if (ellipsis === "..")
            return "...";
        if (ellipsis === "...")
            return "";
        return "";
    }
}
react__WEBPACK_IMPORTED_MODULE_1__["default"].render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(PopupApp, {}), document.body);


/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	const __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		const cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		const module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		if (!(moduleId in __webpack_modules__)) {
/******/ 			delete __webpack_module_cache__[moduleId];
/******/ 			const e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/chunk loaded */
/******/ 	(() => {
/******/ 		const deferred = [];
/******/ 		__webpack_require__.O = (result, chunkIds, fn) => {
/******/ 			if(chunkIds) {
/******/ 				deferred.push([chunkIds, fn]);
/******/ 				return;
/******/ 			}
/******/ 			for (var i = 0; i < deferred.length; i++) {
/******/ 				let [chunkIds, fn] = deferred[i];
/******/ 				let fulfilled = true;
/******/ 				for (var j = 0; j < chunkIds.length; j++) {
/******/ 					if (__webpack_require__.O.j(chunkIds[j])) {
/******/ 						chunkIds.splice(j--, 1);
/******/ 					} else {
/******/ 						fulfilled = false;
/******/ 					}
/******/ 				}
/******/ 				if(fulfilled) {
/******/ 					deferred.splice(i--, 1)
/******/ 					const r = fn();
/******/ 					if (r !== undefined) result = r;
/******/ 				}
/******/ 			}
/******/ 			return result;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	// define getter/value functions for harmony exports
/******/ 	__webpack_require__.d = (exports, definition) => {
/******/ 		for(var key in definition) {
/******/ 			if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 				Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 			}
/******/ 		}
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop));
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = (exports) => {
/******/ 		Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		const installedChunks = {
/******/ 			"ui/popup/popup": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		__webpack_require__.O.j = (chunkId) => (installedChunks[chunkId] === 0);
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		const webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			let [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 			return __webpack_require__.O(result);
/******/ 		}
/******/ 		
/******/ 		const chunkLoadingGlobal = self["webpackChunk"] = self["webpackChunk"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module depends on other loaded chunks and execution need to be delayed
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["react"], () => (__webpack_require__("./src/ui/popup/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=popup.bundle.js.map