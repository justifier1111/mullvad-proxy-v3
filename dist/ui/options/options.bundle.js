/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

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

/***/ "./src/ui/options/index.tsx"
/*!**********************************!*\
  !*** ./src/ui/options/index.tsx ***!
  \**********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-runtime */ "./node_modules/preact/compat/jsx-runtime.mjs");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-dom */ "./node_modules/preact/compat/dist/compat.module.js");
/* harmony import */ var _OptionsView__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./OptionsView */ "./src/ui/options/OptionsView.tsx");
/* harmony import */ var _injectStyle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./injectStyle */ "./src/ui/options/injectStyle.ts");





react_dom__WEBPACK_IMPORTED_MODULE_1__["default"].render((0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_0__.jsx)(_OptionsView__WEBPACK_IMPORTED_MODULE_2__.OptionsView, {}), document.body);


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
/******/ 			"ui/options/options": 0
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
/******/ 	let __webpack_exports__ = __webpack_require__.O(undefined, ["react"], () => (__webpack_require__("./src/ui/options/index.tsx")))
/******/ 	__webpack_exports__ = __webpack_require__.O(__webpack_exports__);
/******/ 	
/******/ })()
;
//# sourceMappingURL=options.bundle.js.map