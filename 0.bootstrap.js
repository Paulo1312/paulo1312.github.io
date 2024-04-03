(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "../pkg/amcofixer_wasm.js":
/*!********************************!*\
  !*** ../pkg/amcofixer_wasm.js ***!
  \********************************/
/*! exports provided: __wbg_set_wasm, greet, fixer_wasm, __wbg_alert_bd52145b42e4a18c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _amcofixer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./amcofixer_wasm_bg.wasm */ \"../pkg/amcofixer_wasm_bg.wasm\");\n/* harmony import */ var _amcofixer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./amcofixer_wasm_bg.js */ \"../pkg/amcofixer_wasm_bg.js\");\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return _amcofixer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return _amcofixer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"greet\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"fixer_wasm\", function() { return _amcofixer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"fixer_wasm\"]; });\n\n/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_bd52145b42e4a18c\", function() { return _amcofixer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_alert_bd52145b42e4a18c\"]; });\n\n\n\nObject(_amcofixer_wasm_bg_js__WEBPACK_IMPORTED_MODULE_1__[\"__wbg_set_wasm\"])(_amcofixer_wasm_bg_wasm__WEBPACK_IMPORTED_MODULE_0__);\n\n\n\n//# sourceURL=webpack:///../pkg/amcofixer_wasm.js?");

/***/ }),

/***/ "../pkg/amcofixer_wasm_bg.js":
/*!***********************************!*\
  !*** ../pkg/amcofixer_wasm_bg.js ***!
  \***********************************/
/*! exports provided: __wbg_set_wasm, greet, fixer_wasm, __wbg_alert_bd52145b42e4a18c */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_set_wasm\", function() { return __wbg_set_wasm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"greet\", function() { return greet; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"fixer_wasm\", function() { return fixer_wasm; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"__wbg_alert_bd52145b42e4a18c\", function() { return __wbg_alert_bd52145b42e4a18c; });\nlet wasm;\nfunction __wbg_set_wasm(val) {\n    wasm = val;\n}\n\n\nconst lTextDecoder = typeof TextDecoder === 'undefined' ? (0, module.require)('util').TextDecoder : TextDecoder;\n\nlet cachedTextDecoder = new lTextDecoder('utf-8', { ignoreBOM: true, fatal: true });\n\ncachedTextDecoder.decode();\n\nlet cachedUint8Memory0 = null;\n\nfunction getUint8Memory0() {\n    if (cachedUint8Memory0 === null || cachedUint8Memory0.byteLength === 0) {\n        cachedUint8Memory0 = new Uint8Array(wasm.memory.buffer);\n    }\n    return cachedUint8Memory0;\n}\n\nfunction getStringFromWasm0(ptr, len) {\n    ptr = ptr >>> 0;\n    return cachedTextDecoder.decode(getUint8Memory0().subarray(ptr, ptr + len));\n}\n/**\n*/\nfunction greet() {\n    wasm.greet();\n}\n\nlet WASM_VECTOR_LEN = 0;\n\nconst lTextEncoder = typeof TextEncoder === 'undefined' ? (0, module.require)('util').TextEncoder : TextEncoder;\n\nlet cachedTextEncoder = new lTextEncoder('utf-8');\n\nconst encodeString = (typeof cachedTextEncoder.encodeInto === 'function'\n    ? function (arg, view) {\n    return cachedTextEncoder.encodeInto(arg, view);\n}\n    : function (arg, view) {\n    const buf = cachedTextEncoder.encode(arg);\n    view.set(buf);\n    return {\n        read: arg.length,\n        written: buf.length\n    };\n});\n\nfunction passStringToWasm0(arg, malloc, realloc) {\n\n    if (realloc === undefined) {\n        const buf = cachedTextEncoder.encode(arg);\n        const ptr = malloc(buf.length, 1) >>> 0;\n        getUint8Memory0().subarray(ptr, ptr + buf.length).set(buf);\n        WASM_VECTOR_LEN = buf.length;\n        return ptr;\n    }\n\n    let len = arg.length;\n    let ptr = malloc(len, 1) >>> 0;\n\n    const mem = getUint8Memory0();\n\n    let offset = 0;\n\n    for (; offset < len; offset++) {\n        const code = arg.charCodeAt(offset);\n        if (code > 0x7F) break;\n        mem[ptr + offset] = code;\n    }\n\n    if (offset !== len) {\n        if (offset !== 0) {\n            arg = arg.slice(offset);\n        }\n        ptr = realloc(ptr, len, len = offset + arg.length * 3, 1) >>> 0;\n        const view = getUint8Memory0().subarray(ptr + offset, ptr + len);\n        const ret = encodeString(arg, view);\n\n        offset += ret.written;\n        ptr = realloc(ptr, len, offset, 1) >>> 0;\n    }\n\n    WASM_VECTOR_LEN = offset;\n    return ptr;\n}\n\nlet cachedInt32Memory0 = null;\n\nfunction getInt32Memory0() {\n    if (cachedInt32Memory0 === null || cachedInt32Memory0.byteLength === 0) {\n        cachedInt32Memory0 = new Int32Array(wasm.memory.buffer);\n    }\n    return cachedInt32Memory0;\n}\n/**\n* @param {string} str_out\n* @returns {string}\n*/\nfunction fixer_wasm(str_out) {\n    let deferred2_0;\n    let deferred2_1;\n    try {\n        const retptr = wasm.__wbindgen_add_to_stack_pointer(-16);\n        const ptr0 = passStringToWasm0(str_out, wasm.__wbindgen_malloc, wasm.__wbindgen_realloc);\n        const len0 = WASM_VECTOR_LEN;\n        wasm.fixer_wasm(retptr, ptr0, len0);\n        var r0 = getInt32Memory0()[retptr / 4 + 0];\n        var r1 = getInt32Memory0()[retptr / 4 + 1];\n        deferred2_0 = r0;\n        deferred2_1 = r1;\n        return getStringFromWasm0(r0, r1);\n    } finally {\n        wasm.__wbindgen_add_to_stack_pointer(16);\n        wasm.__wbindgen_free(deferred2_0, deferred2_1, 1);\n    }\n}\n\nfunction __wbg_alert_bd52145b42e4a18c(arg0, arg1) {\n    alert(getStringFromWasm0(arg0, arg1));\n};\n\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../www/node_modules/webpack/buildin/harmony-module.js */ \"./node_modules/webpack/buildin/harmony-module.js\")(module)))\n\n//# sourceURL=webpack:///../pkg/amcofixer_wasm_bg.js?");

/***/ }),

/***/ "../pkg/amcofixer_wasm_bg.wasm":
/*!*************************************!*\
  !*** ../pkg/amcofixer_wasm_bg.wasm ***!
  \*************************************/
/*! exports provided: memory, fixer_wasm, greet, __wbindgen_add_to_stack_pointer, __wbindgen_malloc, __wbindgen_realloc, __wbindgen_free */
/***/ (function(module, exports, __webpack_require__) {

eval("\"use strict\";\n// Instantiate WebAssembly module\nvar wasmExports = __webpack_require__.w[module.i];\n__webpack_require__.r(exports);\n// export exports from WebAssembly module\nfor(var name in wasmExports) if(name != \"__webpack_init__\") exports[name] = wasmExports[name];\n// exec imports from WebAssembly module (for esm order)\n/* harmony import */ var m0 = __webpack_require__(/*! ./amcofixer_wasm_bg.js */ \"../pkg/amcofixer_wasm_bg.js\");\n\n\n// exec wasm module\nwasmExports[\"__webpack_init__\"]()\n\n//# sourceURL=webpack:///../pkg/amcofixer_wasm_bg.wasm?");

/***/ }),

/***/ "./index.js":
/*!******************!*\
  !*** ./index.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var amcofixer_wasm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! amcofixer_wasm */ \"../pkg/amcofixer_wasm.js\");\n\n\n\nvar text1 = \"vpn://AAAA_3icjFfbrqpYur7fT2G4dTonIHiYqbWTMTgo6gBRFHGzU0Fgch7ISYTKuunbvurbforuTlWq-6L7Gaw36qBrrZ6pnpWUiVH-8Y3_MP7vg58fCDvFpRVgNy-I1_97d0m8ElaC3TawBunZxZczHthxakXEE_H4ff2BiK2i_N5O8VvgEa_EDyYB87Qu3HwbeCbxahK2n6eJaxJPJiFgO2_OZZBi5JZ-6tzXLbcYeHZyB8hVwqUYm8Qr9WQS6zy9Nu-QX1K4I9fVKQ7spdvcV8rUDuQiGyuNXq9Ga2sOR3AOsL2rjyON8aWxb6wC4dDQB_LTffvGTdLSnadFed9_suyoOj-_BVfXKXzXt_BzmnvvkOs0fyAZZng3b9384uay1VX2ahK-8xwFOD2nQRE959UDUuaulWhB4qZVt3lIkk8moeUWLs5f3TlB7trlHb6T-LuJZSZB6_vqJlUuK2OhImhMKPDpk0l8Jp6Ibifx2qVBPBHlV1_fn_O0TIlXorTPxOenryf1YXse_x-tiQMXl6aJHffSKytsmvjuqFfaZ9PEuVuk8WWQu2Xe9AL8FuCgdE0T4_QUYKcDu3kRFOUgcpt3Vw9HdnD23bwHhO2AZkeDGYdME1tV6fe2c8BStGnii5ufekPTxGVcDL7l0l1cOlcpHiQB7lHPHTZym8HjsIIU96h7dl1jBrabl4MyLnrFvSP3hQdw4FmlW1tNz3HfqN6pOVtFMXD8e2ldzb59HqR3NvZ4edujSPKZokfP5HPn_RSndjRIq7IIHHfg4OKxKU-r0u1R5PiZmtDP1JB6pplJj2bZ53ffHnbL778E_5Zoj6LHz2TnvUdRU-bh7jvb-l_TxIPuA4WZJPc4YaNJosQBTbhbTRMjSeLEluPAIfBALUHgSVDmwRJ6XuZHobJWVR7y4IK2ZL2sDX6vqrzQqEOjXYRIF66miRWOZI-hwaw0lUKaVCq6GCOOpOV2N1T4ODA0gUUzVM99W0ahWqMWMIj3rjKPKN23ZdPEMn83t9_M4W9H_ChcV8gHEb1jUQvAmC_To9SGJAdUQ1wyggA4xHuGASDgMrI_3gybMjJNDK0px0zClh-d6PQiQzLsx4cRzV22Z5mvFDvekNqhOi6neXGwZzOY4cwl92PJOR631lKEHQdtf8G3objbz3XDE7JAKlfGkAxGagvDSZ5HSqqx60o8ZllECrI6uspQnBV9rJxZ6y3cdeTI0kBvyGMwLabZeb7jilURH9DmqMWqj9-8sNjX2UjmkABq3jP4_YZcA3X-AoHKA282684CTGaA2jlCLcCXWhURQBC8Teq5eocrEBqCKA9P_CljX-ohGY6XZ5L05odTwDsbbn53kc44LpttETOFAAmAmSHAczAACw4s5SJBtjRvAkG72It8yb9h2-E1yORcFDfuSul31JTKYKnPhcXweFKnzXa9F2anoT6dTq6Grs60JStPrlU6Xlee2MdsfWIlBUQSxEwiLFZr3zSxzy9Po7VBl6JNq4ZEJ0J48bNxHLBef9d32dWeO5Sja1iGFp54Cy4au2mjV5V2REd6RLGmiavpUqf10worXgkv0qevihBk_iM9dLp5eQjnu079v09BocZxwO1_VdAGSCqD9HBROgkc714OE_LiZAVZc54hfSGjAGq1XrVCeedu0fVLAFcUyTRqjFb0keaVim7QCkeSsiY0Ky32jxoo5dCm5NZjjUS4KhoMEWQOpol5TSJRpyJNuKLQoOQ4PfAaIhGPWsR_s90jvg-n6JvY0KS2E6FmlEa4SVBDkqiVqJUuUEZrl6gFtNyCVuaPiazvhkianRAEM9g86AE8YQa3VUd_CEAImNkMABU6-wPDbMvEB6FreCA_66n2Ig_D1HH0c5v5RpCFkGXzbX_CvGgzdWJcBdPE0nRjOZz4Euv9qeok9GQxGpXnpCWzF0HWfN2zU0j6x2htIGO6HpdeXNkne5p4O3jwpMwwTbzyD1HfSeXhoq9kNBkoFfCCg5KQfSeQrn1mJFbni94P5rY-s7z-6mzZrBo07a5pQs_yatPEnrWruYdaNAikGvDAgZ68n6uMIHrqrqB9Dw_nc3VFTtHloGDAu7HWss2FrPe1wZsm3m_IEIqg1lKwGzqFXOX4hX_brosMa1vgOJUkU4Lk-mikXhE3ua40kHchIEDagnfCjhcJuhqawKy0OJFDr5T53RUFJGvou3qlGUNZsxlFX_hIi2qDud-4tXuW253A82DZdcTzcugJIlRtHoRg9ShiIkCAOMiAXzOS94wCIGk2B5EYU0vUUUu3PVZXG5ouWNlZ-ntLat_gbqkugqihUTELneXJT41kpUwupLDo7-AhE-BhcgXAvzb97hFBRS-7wFYs6zw6HGnGgd1dRO3HPh-dBC0cC6MInWnRFSxlugl4Ea_7Q7hURpxzmDgv86wjuMvFOPP0SbTeGSTOtM3GlpPGhS5ziE9sRpGjDbndLPfKsP5dGv8i7u8it_mVyNcbaQ80obcUjP-IfF4BTwAf8b4jPZTmOpLmGvAECAUJ5Ltjsq7CeZGS2x2_npgmTuWXsURHWrsrwEyoHQgNDr4lfcOi7cP0spSWUsFPOaB513FiXfsg2s32lnq4zK4H2lOBaWLDmvKyNPI9I_ry_BKp_VvoL2lL4GQ2AFwVW_56MnQVn6IsrGRisMzQHCflatyG066QI38NBTWkxDMpHfr705iC9OlU4zyjk9N6m09UShEt2HjzrZioU-8aki8VzenstWxpqxO5KrogOHuV6Gos7Q1tzIzy01YaMRy3sEcnjaWlcD4OU32UTE8jybkax4xnqvjcxtxqJWudQruR812TPjjxe5PuvSE-m7ibOwvfctK6SO2o-GD2_Ex8_vz_T4TjvllVXHK_4yXDcQs7D-4zGvFK0MNJ7_an20-3n28_3_5y--vtX7_84fbPX_54-0fv9ufb325_v_14-_H2U7cPFxTxSrwb6R5G-r-MflqU3RRPvP7GSwDx-X_-HQAA___V7Fv6\"\n\n\nconst btn1 = document.getElementById(\"btn1\");\nconst file1 = document.getElementById(\"file1\");\n\nvar name = '';\n\nbtn1.addEventListener(\"click\", event => {\n    let file = file1.files[0];\n\n    let reader = new FileReader();\n\n    reader.readAsText(file);\n    name = file.name;\n\n    reader.onload = function () {\n        let a = \"vpn://\" + amcofixer_wasm__WEBPACK_IMPORTED_MODULE_0__[\"fixer_wasm\"](reader.result);\n        console.log(name);\n        download(a, \"fixed_\" + name, Text);\n        console.log(a);\n    }\n});\n\nfunction download(data, filename, type) {\n    var file = new Blob([data], {type: type});\n    if (window.navigator.msSaveOrOpenBlob) // IE10+\n        window.navigator.msSaveOrOpenBlob(file, filename);\n    else { // Others\n        var a = document.createElement(\"a\"),\n                url = URL.createObjectURL(file);\n        a.href = url;\n        a.download = filename;\n        document.body.appendChild(a);\n        a.click();\n        setTimeout(function() {\n            document.body.removeChild(a);\n            window.URL.revokeObjectURL(url);  \n        }, 0); \n    }\n}\n\n\n//# sourceURL=webpack:///./index.js?");

/***/ }),

/***/ "./node_modules/webpack/buildin/harmony-module.js":
/*!*******************************************!*\
  !*** (webpack)/buildin/harmony-module.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = function(originalModule) {\n\tif (!originalModule.webpackPolyfill) {\n\t\tvar module = Object.create(originalModule);\n\t\t// module.parent = undefined by default\n\t\tif (!module.children) module.children = [];\n\t\tObject.defineProperty(module, \"loaded\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.l;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"id\", {\n\t\t\tenumerable: true,\n\t\t\tget: function() {\n\t\t\t\treturn module.i;\n\t\t\t}\n\t\t});\n\t\tObject.defineProperty(module, \"exports\", {\n\t\t\tenumerable: true\n\t\t});\n\t\tmodule.webpackPolyfill = 1;\n\t}\n\treturn module;\n};\n\n\n//# sourceURL=webpack:///(webpack)/buildin/harmony-module.js?");

/***/ })

}]);