module.exports = [
"[project]/Desktop/Progrize_landing-main/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */ /* global Reflect, Promise, SuppressedError, Symbol, Iterator */ __turbopack_context__.s([
    "__addDisposableResource",
    ()=>__addDisposableResource,
    "__assign",
    ()=>__assign,
    "__asyncDelegator",
    ()=>__asyncDelegator,
    "__asyncGenerator",
    ()=>__asyncGenerator,
    "__asyncValues",
    ()=>__asyncValues,
    "__await",
    ()=>__await,
    "__awaiter",
    ()=>__awaiter,
    "__classPrivateFieldGet",
    ()=>__classPrivateFieldGet,
    "__classPrivateFieldIn",
    ()=>__classPrivateFieldIn,
    "__classPrivateFieldSet",
    ()=>__classPrivateFieldSet,
    "__createBinding",
    ()=>__createBinding,
    "__decorate",
    ()=>__decorate,
    "__disposeResources",
    ()=>__disposeResources,
    "__esDecorate",
    ()=>__esDecorate,
    "__exportStar",
    ()=>__exportStar,
    "__extends",
    ()=>__extends,
    "__generator",
    ()=>__generator,
    "__importDefault",
    ()=>__importDefault,
    "__importStar",
    ()=>__importStar,
    "__makeTemplateObject",
    ()=>__makeTemplateObject,
    "__metadata",
    ()=>__metadata,
    "__param",
    ()=>__param,
    "__propKey",
    ()=>__propKey,
    "__read",
    ()=>__read,
    "__rest",
    ()=>__rest,
    "__rewriteRelativeImportExtension",
    ()=>__rewriteRelativeImportExtension,
    "__runInitializers",
    ()=>__runInitializers,
    "__setFunctionName",
    ()=>__setFunctionName,
    "__spread",
    ()=>__spread,
    "__spreadArray",
    ()=>__spreadArray,
    "__spreadArrays",
    ()=>__spreadArrays,
    "__values",
    ()=>__values,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf || ({
        __proto__: []
    }) instanceof Array && function(d, b) {
        d.__proto__ = b;
    } || function(d, b) {
        for(var p in b)if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
    };
    return extendStatics(d, b);
};
function __extends(d, b) {
    if (typeof b !== "function" && b !== null) throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() {
        this.constructor = d;
    }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}
var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for(var s, i = 1, n = arguments.length; i < n; i++){
            s = arguments[i];
            for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
function __rest(s, e) {
    var t = {};
    for(var p in s)if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function") for(var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++){
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
    }
    return t;
}
function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for(var i = decorators.length - 1; i >= 0; i--)if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}
function __param(paramIndex, decorator) {
    return function(target, key) {
        decorator(target, key, paramIndex);
    };
}
function __esDecorate(ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) {
        if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected");
        return f;
    }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for(var i = decorators.length - 1; i >= 0; i--){
        var context = {};
        for(var p in contextIn)context[p] = p === "access" ? {} : contextIn[p];
        for(var p in contextIn.access)context.access[p] = contextIn.access[p];
        context.addInitializer = function(f) {
            if (done) throw new TypeError("Cannot add initializers after decoration has completed");
            extraInitializers.push(accept(f || null));
        };
        var result = (0, decorators[i])(kind === "accessor" ? {
            get: descriptor.get,
            set: descriptor.set
        } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        } else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
}
;
function __runInitializers(thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for(var i = 0; i < initializers.length; i++){
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
}
;
function __propKey(x) {
    return typeof x === "symbol" ? x : "".concat(x);
}
;
function __setFunctionName(f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", {
        configurable: true,
        value: prefix ? "".concat(prefix, " ", name) : name
    });
}
;
function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}
function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new (P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }
        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }
        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}
function __generator(thisArg, body) {
    var _ = {
        label: 0,
        sent: function() {
            if (t[0] & 1) throw t[1];
            return t[1];
        },
        trys: [],
        ops: []
    }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;
    //TURBOPACK unreachable
    ;
    function verb(n) {
        return function(v) {
            return step([
                n,
                v
            ]);
        };
    }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while(g && (g = 0, op[0] && (_ = 0)), _)try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [
                op[0] & 2,
                t.value
            ];
            switch(op[0]){
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [
                        0
                    ];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [
                6,
                e
            ];
            y = 0;
        } finally{
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
}
var __createBinding = Object.create ? function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = {
            enumerable: true,
            get: function() {
                return m[k];
            }
        };
    }
    Object.defineProperty(o, k2, desc);
} : function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
};
function __exportStar(m, o) {
    for(var p in m)if (p !== "default" && !Object.prototype.hasOwnProperty.call(o, p)) __createBinding(o, m, p);
}
function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function() {
            if (o && i >= o.length) o = void 0;
            return {
                value: o && o[i++],
                done: !o
            };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while((n === void 0 || n-- > 0) && !(r = i.next()).done)ar.push(r.value);
    } catch (error) {
        e = {
            error: error
        };
    } finally{
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        } finally{
            if (e) throw e.error;
        }
    }
    return ar;
}
function __spread() {
    for(var ar = [], i = 0; i < arguments.length; i++)ar = ar.concat(__read(arguments[i]));
    return ar;
}
function __spreadArrays() {
    for(var s = 0, i = 0, il = arguments.length; i < il; i++)s += arguments[i].length;
    for(var r = Array(s), k = 0, i = 0; i < il; i++)for(var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)r[k] = a[j];
    return r;
}
function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for(var i = 0, l = from.length, ar; i < l; i++){
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
}
function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}
function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function awaitReturn(f) {
        return function(v) {
            return Promise.resolve(v).then(f, reject);
        };
    }
    function verb(n, f) {
        if (g[n]) {
            i[n] = function(v) {
                return new Promise(function(a, b) {
                    q.push([
                        n,
                        v,
                        a,
                        b
                    ]) > 1 || resume(n, v);
                });
            };
            if (f) i[n] = f(i[n]);
        }
    }
    function resume(n, v) {
        try {
            step(g[n](v));
        } catch (e) {
            settle(q[0][3], e);
        }
    }
    function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
    }
    function fulfill(value) {
        resume("next", value);
    }
    function reject(value) {
        resume("throw", value);
    }
    function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
    }
}
function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function(e) {
        throw e;
    }), verb("return"), i[Symbol.iterator] = function() {
        return this;
    }, i;
    //TURBOPACK unreachable
    ;
    function verb(n, f) {
        i[n] = o[n] ? function(v) {
            return (p = !p) ? {
                value: __await(o[n](v)),
                done: false
            } : f ? f(v) : v;
        } : f;
    }
}
function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function() {
        return this;
    }, i);
    //TURBOPACK unreachable
    ;
    function verb(n) {
        i[n] = o[n] && function(v) {
            return new Promise(function(resolve, reject) {
                v = o[n](v), settle(resolve, reject, v.done, v.value);
            });
        };
    }
    function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function(v) {
            resolve({
                value: v,
                done: d
            });
        }, reject);
    }
}
function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
            value: raw
        });
    } else {
        cooked.raw = raw;
    }
    return cooked;
}
;
var __setModuleDefault = Object.create ? function(o, v) {
    Object.defineProperty(o, "default", {
        enumerable: true,
        value: v
    });
} : function(o, v) {
    o["default"] = v;
};
var ownKeys = function(o) {
    ownKeys = Object.getOwnPropertyNames || function(o) {
        var ar = [];
        for(var k in o)if (Object.prototype.hasOwnProperty.call(o, k)) ar[ar.length] = k;
        return ar;
    };
    return ownKeys(o);
};
function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) {
        for(var k = ownKeys(mod), i = 0; i < k.length; i++)if (k[i] !== "default") __createBinding(result, mod, k[i]);
    }
    __setModuleDefault(result, mod);
    return result;
}
function __importDefault(mod) {
    return mod && mod.__esModule ? mod : {
        default: mod
    };
}
function __classPrivateFieldGet(receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
}
function __classPrivateFieldSet(receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
}
function __classPrivateFieldIn(state, receiver) {
    if (receiver === null || typeof receiver !== "object" && typeof receiver !== "function") throw new TypeError("Cannot use 'in' operator on non-object");
    return typeof state === "function" ? receiver === state : state.has(receiver);
}
function __addDisposableResource(env, value, async) {
    if (value !== null && value !== void 0) {
        if (typeof value !== "object" && typeof value !== "function") throw new TypeError("Object expected.");
        var dispose, inner;
        if (async) {
            if (!Symbol.asyncDispose) throw new TypeError("Symbol.asyncDispose is not defined.");
            dispose = value[Symbol.asyncDispose];
        }
        if (dispose === void 0) {
            if (!Symbol.dispose) throw new TypeError("Symbol.dispose is not defined.");
            dispose = value[Symbol.dispose];
            if (async) inner = dispose;
        }
        if (typeof dispose !== "function") throw new TypeError("Object not disposable.");
        if (inner) dispose = function() {
            try {
                inner.call(this);
            } catch (e) {
                return Promise.reject(e);
            }
        };
        env.stack.push({
            value: value,
            dispose: dispose,
            async: async
        });
    } else if (async) {
        env.stack.push({
            async: true
        });
    }
    return value;
}
var _SuppressedError = typeof SuppressedError === "function" ? SuppressedError : function(error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};
function __disposeResources(env) {
    function fail(e) {
        env.error = env.hasError ? new _SuppressedError(e, env.error, "An error was suppressed during disposal.") : e;
        env.hasError = true;
    }
    var r, s = 0;
    function next() {
        while(r = env.stack.pop()){
            try {
                if (!r.async && s === 1) return s = 0, env.stack.push(r), Promise.resolve().then(next);
                if (r.dispose) {
                    var result = r.dispose.call(r.value);
                    if (r.async) return s |= 2, Promise.resolve(result).then(next, function(e) {
                        fail(e);
                        return next();
                    });
                } else s |= 1;
            } catch (e) {
                fail(e);
            }
        }
        if (s === 1) return env.hasError ? Promise.reject(env.error) : Promise.resolve();
        if (env.hasError) throw env.error;
    }
    return next();
}
function __rewriteRelativeImportExtension(path, preserveJsx) {
    if (typeof path === "string" && /^\.\.?\//.test(path)) {
        return path.replace(/\.(tsx)$|((?:\.d)?)((?:\.[^./]+?)?)\.([cm]?)ts$/i, function(m, tsx, d, ext, cm) {
            return tsx ? preserveJsx ? ".jsx" : ".js" : d && (!ext || !cm) ? m : d + ext + "." + cm.toLowerCase() + "js";
        });
    }
    return path;
}
const __TURBOPACK__default__export__ = {
    __extends,
    __assign,
    __rest,
    __decorate,
    __param,
    __esDecorate,
    __runInitializers,
    __propKey,
    __setFunctionName,
    __metadata,
    __awaiter,
    __generator,
    __createBinding,
    __exportStar,
    __values,
    __read,
    __spread,
    __spreadArrays,
    __spreadArray,
    __await,
    __asyncGenerator,
    __asyncDelegator,
    __asyncValues,
    __makeTemplateObject,
    __importStar,
    __importDefault,
    __classPrivateFieldGet,
    __classPrivateFieldSet,
    __classPrivateFieldIn,
    __addDisposableResource,
    __disposeResources,
    __rewriteRelativeImportExtension
};
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@supabase/functions-js/dist/module/helper.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "resolveFetch",
    ()=>resolveFetch
]);
const resolveFetch = (customFetch)=>{
    if (customFetch) {
        return (...args)=>customFetch(...args);
    }
    return (...args)=>fetch(...args);
}; //# sourceMappingURL=helper.js.map
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@supabase/functions-js/dist/module/types.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Base error for Supabase Edge Function invocations.
 *
 * @example
 * ```ts
 * import { FunctionsError } from '@supabase/functions-js'
 *
 * throw new FunctionsError('Unexpected error invoking function', 'FunctionsError', {
 *   requestId: 'abc123',
 * })
 * ```
 */ __turbopack_context__.s([
    "FunctionRegion",
    ()=>FunctionRegion,
    "FunctionsError",
    ()=>FunctionsError,
    "FunctionsFetchError",
    ()=>FunctionsFetchError,
    "FunctionsHttpError",
    ()=>FunctionsHttpError,
    "FunctionsRelayError",
    ()=>FunctionsRelayError
]);
class FunctionsError extends Error {
    constructor(message, name = 'FunctionsError', context){
        super(message);
        this.name = name;
        this.context = context;
    }
}
class FunctionsFetchError extends FunctionsError {
    constructor(context){
        super('Failed to send a request to the Edge Function', 'FunctionsFetchError', context);
    }
}
class FunctionsRelayError extends FunctionsError {
    constructor(context){
        super('Relay Error invoking the Edge Function', 'FunctionsRelayError', context);
    }
}
class FunctionsHttpError extends FunctionsError {
    constructor(context){
        super('Edge Function returned a non-2xx status code', 'FunctionsHttpError', context);
    }
}
var FunctionRegion;
(function(FunctionRegion) {
    FunctionRegion["Any"] = "any";
    FunctionRegion["ApNortheast1"] = "ap-northeast-1";
    FunctionRegion["ApNortheast2"] = "ap-northeast-2";
    FunctionRegion["ApSouth1"] = "ap-south-1";
    FunctionRegion["ApSoutheast1"] = "ap-southeast-1";
    FunctionRegion["ApSoutheast2"] = "ap-southeast-2";
    FunctionRegion["CaCentral1"] = "ca-central-1";
    FunctionRegion["EuCentral1"] = "eu-central-1";
    FunctionRegion["EuWest1"] = "eu-west-1";
    FunctionRegion["EuWest2"] = "eu-west-2";
    FunctionRegion["EuWest3"] = "eu-west-3";
    FunctionRegion["SaEast1"] = "sa-east-1";
    FunctionRegion["UsEast1"] = "us-east-1";
    FunctionRegion["UsWest1"] = "us-west-1";
    FunctionRegion["UsWest2"] = "us-west-2";
})(FunctionRegion || (FunctionRegion = {})); //# sourceMappingURL=types.js.map
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@supabase/functions-js/dist/module/FunctionsClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "FunctionsClient",
    ()=>FunctionsClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/functions-js/dist/module/helper.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/functions-js/dist/module/types.js [app-ssr] (ecmascript)");
;
;
;
class FunctionsClient {
    /**
     * Creates a new Functions client bound to an Edge Functions URL.
     *
     * @example
     * ```ts
     * import { FunctionsClient, FunctionRegion } from '@supabase/functions-js'
     *
     * const functions = new FunctionsClient('https://xyzcompany.supabase.co/functions/v1', {
     *   headers: { apikey: 'public-anon-key' },
     *   region: FunctionRegion.UsEast1,
     * })
     * ```
     */ constructor(url, { headers = {}, customFetch, region = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionRegion"].Any } = {}){
        this.url = url;
        this.headers = headers;
        this.region = region;
        this.fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$helper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["resolveFetch"])(customFetch);
    }
    /**
     * Updates the authorization header
     * @param token - the new jwt token sent in the authorisation header
     * @example
     * ```ts
     * functions.setAuth(session.access_token)
     * ```
     */ setAuth(token) {
        this.headers.Authorization = `Bearer ${token}`;
    }
    /**
     * Invokes a function
     * @param functionName - The name of the Function to invoke.
     * @param options - Options for invoking the Function.
     * @example
     * ```ts
     * const { data, error } = await functions.invoke('hello-world', {
     *   body: { name: 'Ada' },
     * })
     * ```
     */ invoke(functionName_1) {
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$tslib$2f$tslib$2e$es6$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["__awaiter"])(this, arguments, void 0, function*(functionName, options = {}) {
            var _a;
            let timeoutId;
            let timeoutController;
            try {
                const { headers, method, body: functionArgs, signal, timeout } = options;
                let _headers = {};
                let { region } = options;
                if (!region) {
                    region = this.region;
                }
                // Add region as query parameter using URL API
                const url = new URL(`${this.url}/${functionName}`);
                if (region && region !== 'any') {
                    _headers['x-region'] = region;
                    url.searchParams.set('forceFunctionRegion', region);
                }
                let body;
                if (functionArgs && (headers && !Object.prototype.hasOwnProperty.call(headers, 'Content-Type') || !headers)) {
                    if (typeof Blob !== 'undefined' && functionArgs instanceof Blob || functionArgs instanceof ArrayBuffer) {
                        // will work for File as File inherits Blob
                        // also works for ArrayBuffer as it is the same underlying structure as a Blob
                        _headers['Content-Type'] = 'application/octet-stream';
                        body = functionArgs;
                    } else if (typeof functionArgs === 'string') {
                        // plain string
                        _headers['Content-Type'] = 'text/plain';
                        body = functionArgs;
                    } else if (typeof FormData !== 'undefined' && functionArgs instanceof FormData) {
                        // don't set content-type headers
                        // Request will automatically add the right boundary value
                        body = functionArgs;
                    } else {
                        // default, assume this is JSON
                        _headers['Content-Type'] = 'application/json';
                        body = JSON.stringify(functionArgs);
                    }
                } else {
                    // if the Content-Type was supplied, simply set the body
                    body = functionArgs;
                }
                // Handle timeout by creating an AbortController
                let effectiveSignal = signal;
                if (timeout) {
                    timeoutController = new AbortController();
                    timeoutId = setTimeout(()=>timeoutController.abort(), timeout);
                    // If user provided their own signal, we need to respect both
                    if (signal) {
                        effectiveSignal = timeoutController.signal;
                        // If the user's signal is aborted, abort our timeout controller too
                        signal.addEventListener('abort', ()=>timeoutController.abort());
                    } else {
                        effectiveSignal = timeoutController.signal;
                    }
                }
                const response = yield this.fetch(url.toString(), {
                    method: method || 'POST',
                    // headers priority is (high to low):
                    // 1. invoke-level headers
                    // 2. client-level headers
                    // 3. default Content-Type header
                    headers: Object.assign(Object.assign(Object.assign({}, _headers), this.headers), headers),
                    body,
                    signal: effectiveSignal
                }).catch((fetchError)=>{
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionsFetchError"](fetchError);
                });
                const isRelayError = response.headers.get('x-relay-error');
                if (isRelayError && isRelayError === 'true') {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionsRelayError"](response);
                }
                if (!response.ok) {
                    throw new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionsHttpError"](response);
                }
                let responseType = ((_a = response.headers.get('Content-Type')) !== null && _a !== void 0 ? _a : 'text/plain').split(';')[0].trim();
                let data;
                if (responseType === 'application/json') {
                    data = yield response.json();
                } else if (responseType === 'application/octet-stream' || responseType === 'application/pdf') {
                    data = yield response.blob();
                } else if (responseType === 'text/event-stream') {
                    data = response;
                } else if (responseType === 'multipart/form-data') {
                    data = yield response.formData();
                } else {
                    // default to text
                    data = yield response.text();
                }
                return {
                    data,
                    error: null,
                    response
                };
            } catch (error) {
                return {
                    data: null,
                    error,
                    response: error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionsHttpError"] || error instanceof __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionsRelayError"] ? error.context : undefined
                };
            } finally{
                // Clear the timeout if it was set
                if (timeoutId) {
                    clearTimeout(timeoutId);
                }
            }
        });
    }
} //# sourceMappingURL=FunctionsClient.js.map
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
/**
 * Error format
 *
 * {@link https://postgrest.org/en/stable/api.html?highlight=options#errors-and-http-status-codes}
 */ class PostgrestError extends Error {
    /**
     * @example
     * ```ts
     * import PostgrestError from '@supabase/postgrest-js'
     *
     * throw new PostgrestError({
     *   message: 'Row level security prevented the request',
     *   details: 'RLS denied the insert',
     *   hint: 'Check your policies',
     *   code: 'PGRST301',
     * })
     * ```
     */ constructor(context){
        super(context.message);
        this.name = 'PostgrestError';
        this.details = context.details;
        this.hint = context.hint;
        this.code = context.code;
    }
}
exports.default = PostgrestError; //# sourceMappingURL=PostgrestError.js.map
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/Desktop/Progrize_landing-main/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
const PostgrestError_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-ssr] (ecmascript)"));
class PostgrestBuilder {
    /**
     * Creates a builder configured for a specific PostgREST request.
     *
     * @example
     * ```ts
     * import PostgrestQueryBuilder from '@supabase/postgrest-js'
     *
     * const builder = new PostgrestQueryBuilder(
     *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
     *   { headers: new Headers({ apikey: 'public-anon-key' }) }
     * )
     * ```
     */ constructor(builder){
        var _a, _b;
        this.shouldThrowOnError = false;
        this.method = builder.method;
        this.url = builder.url;
        this.headers = new Headers(builder.headers);
        this.schema = builder.schema;
        this.body = builder.body;
        this.shouldThrowOnError = (_a = builder.shouldThrowOnError) !== null && _a !== void 0 ? _a : false;
        this.signal = builder.signal;
        this.isMaybeSingle = (_b = builder.isMaybeSingle) !== null && _b !== void 0 ? _b : false;
        if (builder.fetch) {
            this.fetch = builder.fetch;
        } else {
            this.fetch = fetch;
        }
    }
    /**
     * If there's an error with the query, throwOnError will reject the promise by
     * throwing the error instead of returning it as part of a successful response.
     *
     * {@link https://github.com/supabase/supabase-js/issues/92}
     */ throwOnError() {
        this.shouldThrowOnError = true;
        return this;
    }
    /**
     * Set an HTTP header for the request.
     */ setHeader(name, value) {
        this.headers = new Headers(this.headers);
        this.headers.set(name, value);
        return this;
    }
    then(onfulfilled, onrejected) {
        // https://postgrest.org/en/stable/api.html#switching-schemas
        if (this.schema === undefined) {
        // skip
        } else if ([
            'GET',
            'HEAD'
        ].includes(this.method)) {
            this.headers.set('Accept-Profile', this.schema);
        } else {
            this.headers.set('Content-Profile', this.schema);
        }
        if (this.method !== 'GET' && this.method !== 'HEAD') {
            this.headers.set('Content-Type', 'application/json');
        }
        // NOTE: Invoke w/o `this` to avoid illegal invocation error.
        // https://github.com/supabase/postgrest-js/pull/247
        const _fetch = this.fetch;
        let res = _fetch(this.url.toString(), {
            method: this.method,
            headers: this.headers,
            body: JSON.stringify(this.body),
            signal: this.signal
        }).then(async (res)=>{
            var _a, _b, _c, _d;
            let error = null;
            let data = null;
            let count = null;
            let status = res.status;
            let statusText = res.statusText;
            if (res.ok) {
                if (this.method !== 'HEAD') {
                    const body = await res.text();
                    if (body === '') {
                    // Prefer: return=minimal
                    } else if (this.headers.get('Accept') === 'text/csv') {
                        data = body;
                    } else if (this.headers.get('Accept') && ((_a = this.headers.get('Accept')) === null || _a === void 0 ? void 0 : _a.includes('application/vnd.pgrst.plan+text'))) {
                        data = body;
                    } else {
                        data = JSON.parse(body);
                    }
                }
                const countHeader = (_b = this.headers.get('Prefer')) === null || _b === void 0 ? void 0 : _b.match(/count=(exact|planned|estimated)/);
                const contentRange = (_c = res.headers.get('content-range')) === null || _c === void 0 ? void 0 : _c.split('/');
                if (countHeader && contentRange && contentRange.length > 1) {
                    count = parseInt(contentRange[1]);
                }
                // Temporary partial fix for https://github.com/supabase/postgrest-js/issues/361
                // Issue persists e.g. for `.insert([...]).select().maybeSingle()`
                if (this.isMaybeSingle && this.method === 'GET' && Array.isArray(data)) {
                    if (data.length > 1) {
                        error = {
                            // https://github.com/PostgREST/postgrest/blob/a867d79c42419af16c18c3fb019eba8df992626f/src/PostgREST/Error.hs#L553
                            code: 'PGRST116',
                            details: `Results contain ${data.length} rows, application/vnd.pgrst.object+json requires 1 row`,
                            hint: null,
                            message: 'JSON object requested, multiple (or no) rows returned'
                        };
                        data = null;
                        count = null;
                        status = 406;
                        statusText = 'Not Acceptable';
                    } else if (data.length === 1) {
                        data = data[0];
                    } else {
                        data = null;
                    }
                }
            } else {
                const body = await res.text();
                try {
                    error = JSON.parse(body);
                    // Workaround for https://github.com/supabase/postgrest-js/issues/295
                    if (Array.isArray(error) && res.status === 404) {
                        data = [];
                        error = null;
                        status = 200;
                        statusText = 'OK';
                    }
                } catch (_e) {
                    // Workaround for https://github.com/supabase/postgrest-js/issues/295
                    if (res.status === 404 && body === '') {
                        status = 204;
                        statusText = 'No Content';
                    } else {
                        error = {
                            message: body
                        };
                    }
                }
                if (error && this.isMaybeSingle && ((_d = error === null || error === void 0 ? void 0 : error.details) === null || _d === void 0 ? void 0 : _d.includes('0 rows'))) {
                    error = null;
                    status = 200;
                    statusText = 'OK';
                }
                if (error && this.shouldThrowOnError) {
                    throw new PostgrestError_1.default(error);
                }
            }
            const postgrestResponse = {
                error,
                data,
                count,
                status,
                statusText
            };
            return postgrestResponse;
        });
        if (!this.shouldThrowOnError) {
            res = res.catch((fetchError)=>{
                var _a, _b, _c, _d, _e, _f;
                // Build detailed error information including cause if available
                // Note: We don't populate code/hint for client-side network errors since those
                // fields are meant for upstream service errors (PostgREST/PostgreSQL)
                let errorDetails = '';
                // Add cause information if available (e.g., DNS errors, network failures)
                const cause = fetchError === null || fetchError === void 0 ? void 0 : fetchError.cause;
                if (cause) {
                    const causeMessage = (_a = cause === null || cause === void 0 ? void 0 : cause.message) !== null && _a !== void 0 ? _a : '';
                    const causeCode = (_b = cause === null || cause === void 0 ? void 0 : cause.code) !== null && _b !== void 0 ? _b : '';
                    errorDetails = `${(_c = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _c !== void 0 ? _c : 'FetchError'}: ${fetchError === null || fetchError === void 0 ? void 0 : fetchError.message}`;
                    errorDetails += `\n\nCaused by: ${(_d = cause === null || cause === void 0 ? void 0 : cause.name) !== null && _d !== void 0 ? _d : 'Error'}: ${causeMessage}`;
                    if (causeCode) {
                        errorDetails += ` (${causeCode})`;
                    }
                    if (cause === null || cause === void 0 ? void 0 : cause.stack) {
                        errorDetails += `\n${cause.stack}`;
                    }
                } else {
                    // No cause available, just include the error stack
                    errorDetails = (_e = fetchError === null || fetchError === void 0 ? void 0 : fetchError.stack) !== null && _e !== void 0 ? _e : '';
                }
                return {
                    error: {
                        message: `${(_f = fetchError === null || fetchError === void 0 ? void 0 : fetchError.name) !== null && _f !== void 0 ? _f : 'FetchError'}: ${fetchError === null || fetchError === void 0 ? void 0 : fetchError.message}`,
                        details: errorDetails,
                        hint: '',
                        code: ''
                    },
                    data: null,
                    count: null,
                    status: 0,
                    statusText: ''
                };
            });
        }
        return res.then(onfulfilled, onrejected);
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
     */ returns() {
        /* istanbul ignore next */ return this;
    }
    /**
     * Override the type of the returned `data` field in the response.
     *
     * @typeParam NewResult - The new type to cast the response data to
     * @typeParam Options - Optional type configuration (defaults to { merge: true })
     * @typeParam Options.merge - When true, merges the new type with existing return type. When false, replaces the existing types entirely (defaults to true)
     * @example
     * ```typescript
     * // Merge with existing types (default behavior)
     * const query = supabase
     *   .from('users')
     *   .select()
     *   .overrideTypes<{ custom_field: string }>()
     *
     * // Replace existing types completely
     * const replaceQuery = supabase
     *   .from('users')
     *   .select()
     *   .overrideTypes<{ id: number; name: string }, { merge: false }>()
     * ```
     * @returns A PostgrestBuilder instance with the new type
     */ overrideTypes() {
        return this;
    }
}
exports.default = PostgrestBuilder; //# sourceMappingURL=PostgrestBuilder.js.map
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/Desktop/Progrize_landing-main/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
const PostgrestBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-ssr] (ecmascript)"));
class PostgrestTransformBuilder extends PostgrestBuilder_1.default {
    /**
     * Perform a SELECT on the query result.
     *
     * By default, `.insert()`, `.update()`, `.upsert()`, and `.delete()` do not
     * return modified rows. By calling this method, modified rows are returned in
     * `data`.
     *
     * @param columns - The columns to retrieve, separated by commas
     */ select(columns) {
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = (columns !== null && columns !== void 0 ? columns : '*').split('').map((c)=>{
            if (/\s/.test(c) && !quoted) {
                return '';
            }
            if (c === '"') {
                quoted = !quoted;
            }
            return c;
        }).join('');
        this.url.searchParams.set('select', cleanedColumns);
        this.headers.append('Prefer', 'return=representation');
        return this;
    }
    /**
     * Order the query result by `column`.
     *
     * You can call this method multiple times to order by multiple columns.
     *
     * You can order referenced tables, but it only affects the ordering of the
     * parent table if you use `!inner` in the query.
     *
     * @param column - The column to order by
     * @param options - Named parameters
     * @param options.ascending - If `true`, the result will be in ascending order
     * @param options.nullsFirst - If `true`, `null`s appear first. If `false`,
     * `null`s appear last.
     * @param options.referencedTable - Set this to order a referenced table by
     * its columns
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ order(column, { ascending = true, nullsFirst, foreignTable, referencedTable = foreignTable } = {}) {
        const key = referencedTable ? `${referencedTable}.order` : 'order';
        const existingOrder = this.url.searchParams.get(key);
        this.url.searchParams.set(key, `${existingOrder ? `${existingOrder},` : ''}${column}.${ascending ? 'asc' : 'desc'}${nullsFirst === undefined ? '' : nullsFirst ? '.nullsfirst' : '.nullslast'}`);
        return this;
    }
    /**
     * Limit the query result by `count`.
     *
     * @param count - The maximum number of rows to return
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ limit(count, { foreignTable, referencedTable = foreignTable } = {}) {
        const key = typeof referencedTable === 'undefined' ? 'limit' : `${referencedTable}.limit`;
        this.url.searchParams.set(key, `${count}`);
        return this;
    }
    /**
     * Limit the query result by starting at an offset `from` and ending at the offset `to`.
     * Only records within this range are returned.
     * This respects the query order and if there is no order clause the range could behave unexpectedly.
     * The `from` and `to` values are 0-based and inclusive: `range(1, 3)` will include the second, third
     * and fourth rows of the query.
     *
     * @param from - The starting index from which to limit the result
     * @param to - The last index to which to limit the result
     * @param options - Named parameters
     * @param options.referencedTable - Set this to limit rows of referenced
     * tables instead of the parent table
     * @param options.foreignTable - Deprecated, use `options.referencedTable`
     * instead
     */ range(from, to, { foreignTable, referencedTable = foreignTable } = {}) {
        const keyOffset = typeof referencedTable === 'undefined' ? 'offset' : `${referencedTable}.offset`;
        const keyLimit = typeof referencedTable === 'undefined' ? 'limit' : `${referencedTable}.limit`;
        this.url.searchParams.set(keyOffset, `${from}`);
        // Range is inclusive, so add 1
        this.url.searchParams.set(keyLimit, `${to - from + 1}`);
        return this;
    }
    /**
     * Set the AbortSignal for the fetch request.
     *
     * @param signal - The AbortSignal to use for the fetch request
     */ abortSignal(signal) {
        this.signal = signal;
        return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be one row (e.g. using `.limit(1)`), otherwise this
     * returns an error.
     */ single() {
        this.headers.set('Accept', 'application/vnd.pgrst.object+json');
        return this;
    }
    /**
     * Return `data` as a single object instead of an array of objects.
     *
     * Query result must be zero or one row (e.g. using `.limit(1)`), otherwise
     * this returns an error.
     */ maybeSingle() {
        // Temporary partial fix for https://github.com/supabase/postgrest-js/issues/361
        // Issue persists e.g. for `.insert([...]).select().maybeSingle()`
        if (this.method === 'GET') {
            this.headers.set('Accept', 'application/json');
        } else {
            this.headers.set('Accept', 'application/vnd.pgrst.object+json');
        }
        this.isMaybeSingle = true;
        return this;
    }
    /**
     * Return `data` as a string in CSV format.
     */ csv() {
        this.headers.set('Accept', 'text/csv');
        return this;
    }
    /**
     * Return `data` as an object in [GeoJSON](https://geojson.org) format.
     */ geojson() {
        this.headers.set('Accept', 'application/geo+json');
        return this;
    }
    /**
     * Return `data` as the EXPLAIN plan for the query.
     *
     * You need to enable the
     * [db_plan_enabled](https://supabase.com/docs/guides/database/debugging-performance#enabling-explain)
     * setting before using this method.
     *
     * @param options - Named parameters
     *
     * @param options.analyze - If `true`, the query will be executed and the
     * actual run time will be returned
     *
     * @param options.verbose - If `true`, the query identifier will be returned
     * and `data` will include the output columns of the query
     *
     * @param options.settings - If `true`, include information on configuration
     * parameters that affect query planning
     *
     * @param options.buffers - If `true`, include information on buffer usage
     *
     * @param options.wal - If `true`, include information on WAL record generation
     *
     * @param options.format - The format of the output, can be `"text"` (default)
     * or `"json"`
     */ explain({ analyze = false, verbose = false, settings = false, buffers = false, wal = false, format = 'text' } = {}) {
        var _a;
        const options = [
            analyze ? 'analyze' : null,
            verbose ? 'verbose' : null,
            settings ? 'settings' : null,
            buffers ? 'buffers' : null,
            wal ? 'wal' : null
        ].filter(Boolean).join('|');
        // An Accept header can carry multiple media types but postgrest-js always sends one
        const forMediatype = (_a = this.headers.get('Accept')) !== null && _a !== void 0 ? _a : 'application/json';
        this.headers.set('Accept', `application/vnd.pgrst.plan+${format}; for="${forMediatype}"; options=${options};`);
        if (format === 'json') {
            return this;
        } else {
            return this;
        }
    }
    /**
     * Rollback the query.
     *
     * `data` will still be returned, but the query is not committed.
     */ rollback() {
        this.headers.append('Prefer', 'tx=rollback');
        return this;
    }
    /**
     * Override the type of the returned `data`.
     *
     * @typeParam NewResult - The new result type to override with
     * @deprecated Use overrideTypes<yourType, { merge: false }>() method at the end of your call chain instead
     */ returns() {
        return this;
    }
    /**
     * Set the maximum number of rows that can be affected by the query.
     * Only available in PostgREST v13+ and only works with PATCH and DELETE methods.
     *
     * @param value - The maximum number of rows that can be affected
     */ maxAffected(value) {
        this.headers.append('Prefer', 'handling=strict');
        this.headers.append('Prefer', `max-affected=${value}`);
        return this;
    }
}
exports.default = PostgrestTransformBuilder; //# sourceMappingURL=PostgrestTransformBuilder.js.map
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/Desktop/Progrize_landing-main/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
const PostgrestTransformBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-ssr] (ecmascript)"));
const PostgrestReservedCharsRegexp = new RegExp('[,()]');
class PostgrestFilterBuilder extends PostgrestTransformBuilder_1.default {
    /**
     * Match only rows where `column` is equal to `value`.
     *
     * To check if the value of `column` is NULL, you should use `.is()` instead.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ eq(column, value) {
        this.url.searchParams.append(column, `eq.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is not equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ neq(column, value) {
        this.url.searchParams.append(column, `neq.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is greater than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ gt(column, value) {
        this.url.searchParams.append(column, `gt.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is greater than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ gte(column, value) {
        this.url.searchParams.append(column, `gte.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is less than `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ lt(column, value) {
        this.url.searchParams.append(column, `lt.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is less than or equal to `value`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ lte(column, value) {
        this.url.searchParams.append(column, `lte.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-sensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */ like(column, pattern) {
        this.url.searchParams.append(column, `like.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ likeAllOf(column, patterns) {
        this.url.searchParams.append(column, `like(all).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-sensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ likeAnyOf(column, patterns) {
        this.url.searchParams.append(column, `like(any).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches `pattern` case-insensitively.
     *
     * @param column - The column to filter on
     * @param pattern - The pattern to match with
     */ ilike(column, pattern) {
        this.url.searchParams.append(column, `ilike.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` matches all of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ ilikeAllOf(column, patterns) {
        this.url.searchParams.append(column, `ilike(all).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches any of `patterns` case-insensitively.
     *
     * @param column - The column to filter on
     * @param patterns - The patterns to match with
     */ ilikeAnyOf(column, patterns) {
        this.url.searchParams.append(column, `ilike(any).{${patterns.join(',')}}`);
        return this;
    }
    /**
     * Match only rows where `column` matches the PostgreSQL regex `pattern`
     * case-sensitively (using the `~` operator).
     *
     * @param column - The column to filter on
     * @param pattern - The PostgreSQL regular expression pattern to match with
     */ regexMatch(column, pattern) {
        this.url.searchParams.append(column, `match.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` matches the PostgreSQL regex `pattern`
     * case-insensitively (using the `~*` operator).
     *
     * @param column - The column to filter on
     * @param pattern - The PostgreSQL regular expression pattern to match with
     */ regexIMatch(column, pattern) {
        this.url.searchParams.append(column, `imatch.${pattern}`);
        return this;
    }
    /**
     * Match only rows where `column` IS `value`.
     *
     * For non-boolean columns, this is only relevant for checking if the value of
     * `column` is NULL by setting `value` to `null`.
     *
     * For boolean columns, you can also set `value` to `true` or `false` and it
     * will behave the same way as `.eq()`.
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ is(column, value) {
        this.url.searchParams.append(column, `is.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` IS DISTINCT FROM `value`.
     *
     * Unlike `.neq()`, this treats `NULL` as a comparable value. Two `NULL` values
     * are considered equal (not distinct), and comparing `NULL` with any non-NULL
     * value returns true (distinct).
     *
     * @param column - The column to filter on
     * @param value - The value to filter with
     */ isDistinct(column, value) {
        this.url.searchParams.append(column, `isdistinct.${value}`);
        return this;
    }
    /**
     * Match only rows where `column` is included in the `values` array.
     *
     * @param column - The column to filter on
     * @param values - The values array to filter with
     */ in(column, values) {
        const cleanedValues = Array.from(new Set(values)).map((s)=>{
            // handle postgrest reserved characters
            // https://postgrest.org/en/v7.0.0/api.html#reserved-characters
            if (typeof s === 'string' && PostgrestReservedCharsRegexp.test(s)) return `"${s}"`;
            else return `${s}`;
        }).join(',');
        this.url.searchParams.append(column, `in.(${cleanedValues})`);
        return this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * `column` contains every element appearing in `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */ contains(column, value) {
        if (typeof value === 'string') {
            // range types can be inclusive '[', ']' or exclusive '(', ')' so just
            // keep it simple and accept a string
            this.url.searchParams.append(column, `cs.${value}`);
        } else if (Array.isArray(value)) {
            // array
            this.url.searchParams.append(column, `cs.{${value.join(',')}}`);
        } else {
            // json
            this.url.searchParams.append(column, `cs.${JSON.stringify(value)}`);
        }
        return this;
    }
    /**
     * Only relevant for jsonb, array, and range columns. Match only rows where
     * every element appearing in `column` is contained by `value`.
     *
     * @param column - The jsonb, array, or range column to filter on
     * @param value - The jsonb, array, or range value to filter with
     */ containedBy(column, value) {
        if (typeof value === 'string') {
            // range
            this.url.searchParams.append(column, `cd.${value}`);
        } else if (Array.isArray(value)) {
            // array
            this.url.searchParams.append(column, `cd.{${value.join(',')}}`);
        } else {
            // json
            this.url.searchParams.append(column, `cd.${JSON.stringify(value)}`);
        }
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is greater than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeGt(column, range) {
        this.url.searchParams.append(column, `sr.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or greater than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeGte(column, range) {
        this.url.searchParams.append(column, `nxl.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is less than any element in `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeLt(column, range) {
        this.url.searchParams.append(column, `sl.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where every element in
     * `column` is either contained in `range` or less than any element in
     * `range`.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeLte(column, range) {
        this.url.searchParams.append(column, `nxr.${range}`);
        return this;
    }
    /**
     * Only relevant for range columns. Match only rows where `column` is
     * mutually exclusive to `range` and there can be no element between the two
     * ranges.
     *
     * @param column - The range column to filter on
     * @param range - The range to filter with
     */ rangeAdjacent(column, range) {
        this.url.searchParams.append(column, `adj.${range}`);
        return this;
    }
    /**
     * Only relevant for array and range columns. Match only rows where
     * `column` and `value` have an element in common.
     *
     * @param column - The array or range column to filter on
     * @param value - The array or range value to filter with
     */ overlaps(column, value) {
        if (typeof value === 'string') {
            // range
            this.url.searchParams.append(column, `ov.${value}`);
        } else {
            // array
            this.url.searchParams.append(column, `ov.{${value.join(',')}}`);
        }
        return this;
    }
    /**
     * Only relevant for text and tsvector columns. Match only rows where
     * `column` matches the query string in `query`.
     *
     * @param column - The text or tsvector column to filter on
     * @param query - The query text to match with
     * @param options - Named parameters
     * @param options.config - The text search configuration to use
     * @param options.type - Change how the `query` text is interpreted
     */ textSearch(column, query, { config, type } = {}) {
        let typePart = '';
        if (type === 'plain') {
            typePart = 'pl';
        } else if (type === 'phrase') {
            typePart = 'ph';
        } else if (type === 'websearch') {
            typePart = 'w';
        }
        const configPart = config === undefined ? '' : `(${config})`;
        this.url.searchParams.append(column, `${typePart}fts${configPart}.${query}`);
        return this;
    }
    /**
     * Match only rows where each column in `query` keys is equal to its
     * associated value. Shorthand for multiple `.eq()`s.
     *
     * @param query - The object to filter with, with column names as keys mapped
     * to their filter values
     */ match(query) {
        Object.entries(query).forEach(([column, value])=>{
            this.url.searchParams.append(column, `eq.${value}`);
        });
        return this;
    }
    /**
     * Match only rows which doesn't satisfy the filter.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to be negated to filter with, following
     * PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */ not(column, operator, value) {
        this.url.searchParams.append(column, `not.${operator}.${value}`);
        return this;
    }
    /**
     * Match only rows which satisfy at least one of the filters.
     *
     * Unlike most filters, `filters` is used as-is and needs to follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure it's properly sanitized.
     *
     * It's currently not possible to do an `.or()` filter across multiple tables.
     *
     * @param filters - The filters to use, following PostgREST syntax
     * @param options - Named parameters
     * @param options.referencedTable - Set this to filter on referenced tables
     * instead of the parent table
     * @param options.foreignTable - Deprecated, use `referencedTable` instead
     */ or(filters, { foreignTable, referencedTable = foreignTable } = {}) {
        const key = referencedTable ? `${referencedTable}.or` : 'or';
        this.url.searchParams.append(key, `(${filters})`);
        return this;
    }
    /**
     * Match only rows which satisfy the filter. This is an escape hatch - you
     * should use the specific filter methods wherever possible.
     *
     * Unlike most filters, `opearator` and `value` are used as-is and need to
     * follow [PostgREST
     * syntax](https://postgrest.org/en/stable/api.html#operators). You also need
     * to make sure they are properly sanitized.
     *
     * @param column - The column to filter on
     * @param operator - The operator to filter with, following PostgREST syntax
     * @param value - The value to filter with, following PostgREST syntax
     */ filter(column, operator, value) {
        this.url.searchParams.append(column, `${operator}.${value}`);
        return this;
    }
}
exports.default = PostgrestFilterBuilder; //# sourceMappingURL=PostgrestFilterBuilder.js.map
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/Desktop/Progrize_landing-main/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
const PostgrestFilterBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-ssr] (ecmascript)"));
class PostgrestQueryBuilder {
    /**
     * Creates a query builder scoped to a Postgres table or view.
     *
     * @example
     * ```ts
     * import PostgrestQueryBuilder from '@supabase/postgrest-js'
     *
     * const query = new PostgrestQueryBuilder(
     *   new URL('https://xyzcompany.supabase.co/rest/v1/users'),
     *   { headers: { apikey: 'public-anon-key' } }
     * )
     * ```
     */ constructor(url, { headers = {}, schema, fetch: fetch1 }){
        this.url = url;
        this.headers = new Headers(headers);
        this.schema = schema;
        this.fetch = fetch1;
    }
    /**
     * Perform a SELECT query on the table or view.
     *
     * @param columns - The columns to retrieve, separated by commas. Columns can be renamed when returned with `customName:columnName`
     *
     * @param options - Named parameters
     *
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     *
     * @param options.count - Count algorithm to use to count rows in the table or view.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ select(columns, options) {
        const { head = false, count } = options !== null && options !== void 0 ? options : {};
        const method = head ? 'HEAD' : 'GET';
        // Remove whitespaces except when quoted
        let quoted = false;
        const cleanedColumns = (columns !== null && columns !== void 0 ? columns : '*').split('').map((c)=>{
            if (/\s/.test(c) && !quoted) {
                return '';
            }
            if (c === '"') {
                quoted = !quoted;
            }
            return c;
        }).join('');
        this.url.searchParams.set('select', cleanedColumns);
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: this.fetch
        });
    }
    /**
     * Perform an INSERT into the table or view.
     *
     * By default, inserted rows are not returned. To return it, chain the call
     * with `.select()`.
     *
     * @param values - The values to insert. Pass an object to insert a single row
     * or an array to insert multiple rows.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count inserted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @param options.defaultToNull - Make missing fields default to `null`.
     * Otherwise, use the default value for the column. Only applies for bulk
     * inserts.
     */ insert(values, { count, defaultToNull = true } = {}) {
        var _a;
        const method = 'POST';
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        if (!defaultToNull) {
            this.headers.append('Prefer', `missing=default`);
        }
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x)=>acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [
                    ...new Set(columns)
                ].map((column)=>`"${column}"`);
                this.url.searchParams.set('columns', uniqueColumns.join(','));
            }
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
    /**
   * Perform an UPSERT on the table or view. Depending on the column(s) passed
   * to `onConflict`, `.upsert()` allows you to perform the equivalent of
   * `.insert()` if a row with the corresponding `onConflict` columns doesn't
   * exist, or if it does exist, perform an alternative action depending on
   * `ignoreDuplicates`.
   *
   * By default, upserted rows are not returned. To return it, chain the call
   * with `.select()`.
   *
   * @param values - The values to upsert with. Pass an object to upsert a
   * single row or an array to upsert multiple rows.
   *
   * @param options - Named parameters
   *
   * @param options.onConflict - Comma-separated UNIQUE column(s) to specify how
   * duplicate rows are determined. Two rows are duplicates if all the
   * `onConflict` columns are equal.
   *
   * @param options.ignoreDuplicates - If `true`, duplicate rows are ignored. If
   * `false`, duplicate rows are merged with existing rows.
   *
   * @param options.count - Count algorithm to use to count upserted rows.
   *
   * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
   * hood.
   *
   * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
   * statistics under the hood.
   *
   * `"estimated"`: Uses exact count for low numbers and planned count for high
   * numbers.
   *
   * @param options.defaultToNull - Make missing fields default to `null`.
   * Otherwise, use the default value for the column. This only applies when
   * inserting new rows, not when merging with existing rows under
   * `ignoreDuplicates: false`. This also only applies when doing bulk upserts.
   *
   * @example Upsert a single row using a unique key
   * ```ts
   * // Upserting a single row, overwriting based on the 'username' unique column
   * const { data, error } = await supabase
   *   .from('users')
   *   .upsert({ username: 'supabot' }, { onConflict: 'username' })
   *
   * // Example response:
   * // {
   * //   data: [
   * //     { id: 4, message: 'bar', username: 'supabot' }
   * //   ],
   * //   error: null
   * // }
   * ```
   *
   * @example Upsert with conflict resolution and exact row counting
   * ```ts
   * // Upserting and returning exact count
   * const { data, error, count } = await supabase
   *   .from('users')
   *   .upsert(
   *     {
   *       id: 3,
   *       message: 'foo',
   *       username: 'supabot'
   *     },
   *     {
   *       onConflict: 'username',
   *       count: 'exact'
   *     }
   *   )
   *
   * // Example response:
   * // {
   * //   data: [
   * //     {
   * //       id: 42,
   * //       handle: "saoirse",
   * //       display_name: "Saoirse"
   * //     }
   * //   ],
   * //   count: 1,
   * //   error: null
   * // }
   * ```
   */ upsert(values, { onConflict, ignoreDuplicates = false, count, defaultToNull = true } = {}) {
        var _a;
        const method = 'POST';
        this.headers.append('Prefer', `resolution=${ignoreDuplicates ? 'ignore' : 'merge'}-duplicates`);
        if (onConflict !== undefined) this.url.searchParams.set('on_conflict', onConflict);
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        if (!defaultToNull) {
            this.headers.append('Prefer', 'missing=default');
        }
        if (Array.isArray(values)) {
            const columns = values.reduce((acc, x)=>acc.concat(Object.keys(x)), []);
            if (columns.length > 0) {
                const uniqueColumns = [
                    ...new Set(columns)
                ].map((column)=>`"${column}"`);
                this.url.searchParams.set('columns', uniqueColumns.join(','));
            }
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
    /**
     * Perform an UPDATE on the table or view.
     *
     * By default, updated rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param values - The values to update with
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count updated rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ update(values, { count } = {}) {
        var _a;
        const method = 'PATCH';
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            body: values,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
    /**
     * Perform a DELETE on the table or view.
     *
     * By default, deleted rows are not returned. To return it, chain the call
     * with `.select()` after filters.
     *
     * @param options - Named parameters
     *
     * @param options.count - Count algorithm to use to count deleted rows.
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ delete({ count } = {}) {
        var _a;
        const method = 'DELETE';
        if (count) {
            this.headers.append('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url: this.url,
            headers: this.headers,
            schema: this.schema,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
}
exports.default = PostgrestQueryBuilder; //# sourceMappingURL=PostgrestQueryBuilder.js.map
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestClient.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
const tslib_1 = __turbopack_context__.r("[project]/Desktop/Progrize_landing-main/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
const PostgrestQueryBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-ssr] (ecmascript)"));
const PostgrestFilterBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-ssr] (ecmascript)"));
/**
 * PostgREST client.
 *
 * @typeParam Database - Types for the schema from the [type
 * generator](https://supabase.com/docs/reference/javascript/next/typescript-support)
 *
 * @typeParam SchemaName - Postgres schema to switch to. Must be a string
 * literal, the same one passed to the constructor. If the schema is not
 * `"public"`, this must be supplied manually.
 */ class PostgrestClient {
    // TODO: Add back shouldThrowOnError once we figure out the typings
    /**
     * Creates a PostgREST client.
     *
     * @param url - URL of the PostgREST endpoint
     * @param options - Named parameters
     * @param options.headers - Custom headers
     * @param options.schema - Postgres schema to switch to
     * @param options.fetch - Custom fetch
     * @example
     * ```ts
     * import PostgrestClient from '@supabase/postgrest-js'
     *
     * const postgrest = new PostgrestClient('https://xyzcompany.supabase.co/rest/v1', {
     *   headers: { apikey: 'public-anon-key' },
     *   schema: 'public',
     * })
     * ```
     */ constructor(url, { headers = {}, schema, fetch: fetch1 } = {}){
        this.url = url;
        this.headers = new Headers(headers);
        this.schemaName = schema;
        this.fetch = fetch1;
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */ from(relation) {
        if (!relation || typeof relation !== 'string' || relation.trim() === '') {
            throw new Error('Invalid relation name: relation must be a non-empty string.');
        }
        const url = new URL(`${this.url}/${relation}`);
        return new PostgrestQueryBuilder_1.default(url, {
            headers: new Headers(this.headers),
            schema: this.schemaName,
            fetch: this.fetch
        });
    }
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */ schema(schema) {
        return new PostgrestClient(this.url, {
            headers: this.headers,
            schema,
            fetch: this.fetch
        });
    }
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.get - When set to `true`, the function will be called with
     * read-only access mode.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     *
     * @example
     * ```ts
     * // For cross-schema functions where type inference fails, use overrideTypes:
     * const { data } = await supabase
     *   .schema('schema_b')
     *   .rpc('function_a', {})
     *   .overrideTypes<{ id: string; user_id: string }[]>()
     * ```
     */ rpc(fn, args = {}, { head = false, get = false, count } = {}) {
        var _a;
        let method;
        const url = new URL(`${this.url}/rpc/${fn}`);
        let body;
        if (head || get) {
            method = head ? 'HEAD' : 'GET';
            Object.entries(args)// params with undefined value needs to be filtered out, otherwise it'll
            // show up as `?param=undefined`
            .filter(([_, value])=>value !== undefined)// array values need special syntax
            .map(([name, value])=>[
                    name,
                    Array.isArray(value) ? `{${value.join(',')}}` : `${value}`
                ]).forEach(([name, value])=>{
                url.searchParams.append(name, value);
            });
        } else {
            method = 'POST';
            body = args;
        }
        const headers = new Headers(this.headers);
        if (count) {
            headers.set('Prefer', `count=${count}`);
        }
        return new PostgrestFilterBuilder_1.default({
            method,
            url,
            headers,
            schema: this.schemaName,
            body,
            fetch: (_a = this.fetch) !== null && _a !== void 0 ? _a : fetch
        });
    }
}
exports.default = PostgrestClient; //# sourceMappingURL=PostgrestClient.js.map
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/cjs/index.js [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.PostgrestError = exports.PostgrestBuilder = exports.PostgrestTransformBuilder = exports.PostgrestFilterBuilder = exports.PostgrestQueryBuilder = exports.PostgrestClient = void 0;
const tslib_1 = __turbopack_context__.r("[project]/Desktop/Progrize_landing-main/node_modules/tslib/tslib.es6.mjs [app-ssr] (ecmascript)");
// Always update wrapper.mjs when updating this file.
const PostgrestClient_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestClient.js [app-ssr] (ecmascript)"));
exports.PostgrestClient = PostgrestClient_1.default;
const PostgrestQueryBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestQueryBuilder.js [app-ssr] (ecmascript)"));
exports.PostgrestQueryBuilder = PostgrestQueryBuilder_1.default;
const PostgrestFilterBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestFilterBuilder.js [app-ssr] (ecmascript)"));
exports.PostgrestFilterBuilder = PostgrestFilterBuilder_1.default;
const PostgrestTransformBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestTransformBuilder.js [app-ssr] (ecmascript)"));
exports.PostgrestTransformBuilder = PostgrestTransformBuilder_1.default;
const PostgrestBuilder_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestBuilder.js [app-ssr] (ecmascript)"));
exports.PostgrestBuilder = PostgrestBuilder_1.default;
const PostgrestError_1 = tslib_1.__importDefault(__turbopack_context__.r("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/cjs/PostgrestError.js [app-ssr] (ecmascript)"));
exports.PostgrestError = PostgrestError_1.default;
exports.default = {
    PostgrestClient: PostgrestClient_1.default,
    PostgrestQueryBuilder: PostgrestQueryBuilder_1.default,
    PostgrestFilterBuilder: PostgrestFilterBuilder_1.default,
    PostgrestTransformBuilder: PostgrestTransformBuilder_1.default,
    PostgrestBuilder: PostgrestBuilder_1.default,
    PostgrestError: PostgrestError_1.default
}; //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/esm/wrapper.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "PostgrestBuilder",
    ()=>PostgrestBuilder,
    "PostgrestClient",
    ()=>PostgrestClient,
    "PostgrestError",
    ()=>PostgrestError,
    "PostgrestFilterBuilder",
    ()=>PostgrestFilterBuilder,
    "PostgrestQueryBuilder",
    ()=>PostgrestQueryBuilder,
    "PostgrestTransformBuilder",
    ()=>PostgrestTransformBuilder,
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/cjs/index.js [app-ssr] (ecmascript)");
;
const { PostgrestClient, PostgrestQueryBuilder, PostgrestFilterBuilder, PostgrestTransformBuilder, PostgrestBuilder, PostgrestError } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.default || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$cjs$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__;
;
const __TURBOPACK__default__export__ = {
    PostgrestClient,
    PostgrestQueryBuilder,
    PostgrestFilterBuilder,
    PostgrestTransformBuilder,
    PostgrestBuilder,
    PostgrestError
};
}),
"[project]/Desktop/Progrize_landing-main/node_modules/iceberg-js/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/errors/IcebergError.ts
__turbopack_context__.s([
    "IcebergError",
    ()=>IcebergError,
    "IcebergRestCatalog",
    ()=>IcebergRestCatalog,
    "getCurrentSchema",
    ()=>getCurrentSchema,
    "isDecimalType",
    ()=>isDecimalType,
    "isFixedType",
    ()=>isFixedType,
    "parseDecimalType",
    ()=>parseDecimalType,
    "parseFixedType",
    ()=>parseFixedType,
    "typesEqual",
    ()=>typesEqual
]);
var IcebergError = class extends Error {
    constructor(message, opts){
        super(message);
        this.name = "IcebergError";
        this.status = opts.status;
        this.icebergType = opts.icebergType;
        this.icebergCode = opts.icebergCode;
        this.details = opts.details;
        this.isCommitStateUnknown = opts.icebergType === "CommitStateUnknownException" || [
            500,
            502,
            504
        ].includes(opts.status) && opts.icebergType?.includes("CommitState") === true;
    }
    /**
   * Returns true if the error is a 404 Not Found error.
   */ isNotFound() {
        return this.status === 404;
    }
    /**
   * Returns true if the error is a 409 Conflict error.
   */ isConflict() {
        return this.status === 409;
    }
    /**
   * Returns true if the error is a 419 Authentication Timeout error.
   */ isAuthenticationTimeout() {
        return this.status === 419;
    }
};
// src/utils/url.ts
function buildUrl(baseUrl, path, query) {
    const url = new URL(path, baseUrl);
    if (query) {
        for (const [key, value] of Object.entries(query)){
            if (value !== void 0) {
                url.searchParams.set(key, value);
            }
        }
    }
    return url.toString();
}
// src/http/createFetchClient.ts
async function buildAuthHeaders(auth) {
    if (!auth || auth.type === "none") {
        return {};
    }
    if (auth.type === "bearer") {
        return {
            Authorization: `Bearer ${auth.token}`
        };
    }
    if (auth.type === "header") {
        return {
            [auth.name]: auth.value
        };
    }
    if (auth.type === "custom") {
        return await auth.getHeaders();
    }
    return {};
}
function createFetchClient(options) {
    const fetchFn = options.fetchImpl ?? globalThis.fetch;
    return {
        async request ({ method, path, query, body, headers }) {
            const url = buildUrl(options.baseUrl, path, query);
            const authHeaders = await buildAuthHeaders(options.auth);
            const res = await fetchFn(url, {
                method,
                headers: {
                    ...body ? {
                        "Content-Type": "application/json"
                    } : {},
                    ...authHeaders,
                    ...headers
                },
                body: body ? JSON.stringify(body) : void 0
            });
            const text = await res.text();
            const isJson = (res.headers.get("content-type") || "").includes("application/json");
            const data = isJson && text ? JSON.parse(text) : text;
            if (!res.ok) {
                const errBody = isJson ? data : void 0;
                const errorDetail = errBody?.error;
                throw new IcebergError(errorDetail?.message ?? `Request failed with status ${res.status}`, {
                    status: res.status,
                    icebergType: errorDetail?.type,
                    icebergCode: errorDetail?.code,
                    details: errBody
                });
            }
            return {
                status: res.status,
                headers: res.headers,
                data
            };
        }
    };
}
// src/catalog/namespaces.ts
function namespaceToPath(namespace) {
    return namespace.join("");
}
var NamespaceOperations = class {
    constructor(client, prefix = ""){
        this.client = client;
        this.prefix = prefix;
    }
    async listNamespaces(parent) {
        const query = parent ? {
            parent: namespaceToPath(parent.namespace)
        } : void 0;
        const response = await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces`,
            query
        });
        return response.data.namespaces.map((ns)=>({
                namespace: ns
            }));
    }
    async createNamespace(id, metadata) {
        const request = {
            namespace: id.namespace,
            properties: metadata?.properties
        };
        const response = await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces`,
            body: request
        });
        return response.data;
    }
    async dropNamespace(id) {
        await this.client.request({
            method: "DELETE",
            path: `${this.prefix}/namespaces/${namespaceToPath(id.namespace)}`
        });
    }
    async loadNamespaceMetadata(id) {
        const response = await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${namespaceToPath(id.namespace)}`
        });
        return {
            properties: response.data.properties
        };
    }
    async namespaceExists(id) {
        try {
            await this.client.request({
                method: "HEAD",
                path: `${this.prefix}/namespaces/${namespaceToPath(id.namespace)}`
            });
            return true;
        } catch (error) {
            if (error instanceof IcebergError && error.status === 404) {
                return false;
            }
            throw error;
        }
    }
    async createNamespaceIfNotExists(id, metadata) {
        try {
            return await this.createNamespace(id, metadata);
        } catch (error) {
            if (error instanceof IcebergError && error.status === 409) {
                return;
            }
            throw error;
        }
    }
};
// src/catalog/tables.ts
function namespaceToPath2(namespace) {
    return namespace.join("");
}
var TableOperations = class {
    constructor(client, prefix = "", accessDelegation){
        this.client = client;
        this.prefix = prefix;
        this.accessDelegation = accessDelegation;
    }
    async listTables(namespace) {
        const response = await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${namespaceToPath2(namespace.namespace)}/tables`
        });
        return response.data.identifiers;
    }
    async createTable(namespace, request) {
        const headers = {};
        if (this.accessDelegation) {
            headers["X-Iceberg-Access-Delegation"] = this.accessDelegation;
        }
        const response = await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces/${namespaceToPath2(namespace.namespace)}/tables`,
            body: request,
            headers
        });
        return response.data.metadata;
    }
    async updateTable(id, request) {
        const response = await this.client.request({
            method: "POST",
            path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
            body: request
        });
        return {
            "metadata-location": response.data["metadata-location"],
            metadata: response.data.metadata
        };
    }
    async dropTable(id, options) {
        await this.client.request({
            method: "DELETE",
            path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
            query: {
                purgeRequested: String(options?.purge ?? false)
            }
        });
    }
    async loadTable(id) {
        const headers = {};
        if (this.accessDelegation) {
            headers["X-Iceberg-Access-Delegation"] = this.accessDelegation;
        }
        const response = await this.client.request({
            method: "GET",
            path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
            headers
        });
        return response.data.metadata;
    }
    async tableExists(id) {
        const headers = {};
        if (this.accessDelegation) {
            headers["X-Iceberg-Access-Delegation"] = this.accessDelegation;
        }
        try {
            await this.client.request({
                method: "HEAD",
                path: `${this.prefix}/namespaces/${namespaceToPath2(id.namespace)}/tables/${id.name}`,
                headers
            });
            return true;
        } catch (error) {
            if (error instanceof IcebergError && error.status === 404) {
                return false;
            }
            throw error;
        }
    }
    async createTableIfNotExists(namespace, request) {
        try {
            return await this.createTable(namespace, request);
        } catch (error) {
            if (error instanceof IcebergError && error.status === 409) {
                return await this.loadTable({
                    namespace: namespace.namespace,
                    name: request.name
                });
            }
            throw error;
        }
    }
};
// src/catalog/IcebergRestCatalog.ts
var IcebergRestCatalog = class {
    /**
   * Creates a new Iceberg REST Catalog client.
   *
   * @param options - Configuration options for the catalog client
   */ constructor(options){
        let prefix = "v1";
        if (options.catalogName) {
            prefix += `/${options.catalogName}`;
        }
        const baseUrl = options.baseUrl.endsWith("/") ? options.baseUrl : `${options.baseUrl}/`;
        this.client = createFetchClient({
            baseUrl,
            auth: options.auth,
            fetchImpl: options.fetch
        });
        this.accessDelegation = options.accessDelegation?.join(",");
        this.namespaceOps = new NamespaceOperations(this.client, prefix);
        this.tableOps = new TableOperations(this.client, prefix, this.accessDelegation);
    }
    /**
   * Lists all namespaces in the catalog.
   *
   * @param parent - Optional parent namespace to list children under
   * @returns Array of namespace identifiers
   *
   * @example
   * ```typescript
   * // List all top-level namespaces
   * const namespaces = await catalog.listNamespaces();
   *
   * // List namespaces under a parent
   * const children = await catalog.listNamespaces({ namespace: ['analytics'] });
   * ```
   */ async listNamespaces(parent) {
        return this.namespaceOps.listNamespaces(parent);
    }
    /**
   * Creates a new namespace in the catalog.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespace(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * console.log(response.namespace); // ['analytics']
   * console.log(response.properties); // { owner: 'data-team', ... }
   * ```
   */ async createNamespace(id, metadata) {
        return this.namespaceOps.createNamespace(id, metadata);
    }
    /**
   * Drops a namespace from the catalog.
   *
   * The namespace must be empty (contain no tables) before it can be dropped.
   *
   * @param id - Namespace identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropNamespace({ namespace: ['analytics'] });
   * ```
   */ async dropNamespace(id) {
        await this.namespaceOps.dropNamespace(id);
    }
    /**
   * Loads metadata for a namespace.
   *
   * @param id - Namespace identifier to load
   * @returns Namespace metadata including properties
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadNamespaceMetadata({ namespace: ['analytics'] });
   * console.log(metadata.properties);
   * ```
   */ async loadNamespaceMetadata(id) {
        return this.namespaceOps.loadNamespaceMetadata(id);
    }
    /**
   * Lists all tables in a namespace.
   *
   * @param namespace - Namespace identifier to list tables from
   * @returns Array of table identifiers
   *
   * @example
   * ```typescript
   * const tables = await catalog.listTables({ namespace: ['analytics'] });
   * console.log(tables); // [{ namespace: ['analytics'], name: 'events' }, ...]
   * ```
   */ async listTables(namespace) {
        return this.tableOps.listTables(namespace);
    }
    /**
   * Creates a new table in the catalog.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTable(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     },
   *     'partition-spec': {
   *       'spec-id': 0,
   *       fields: [
   *         { source_id: 2, field_id: 1000, name: 'ts_day', transform: 'day' }
   *       ]
   *     }
   *   }
   * );
   * ```
   */ async createTable(namespace, request) {
        return this.tableOps.createTable(namespace, request);
    }
    /**
   * Updates an existing table's metadata.
   *
   * Can update the schema, partition spec, or properties of a table.
   *
   * @param id - Table identifier to update
   * @param request - Update request with fields to modify
   * @returns Response containing the metadata location and updated table metadata
   *
   * @example
   * ```typescript
   * const response = await catalog.updateTable(
   *   { namespace: ['analytics'], name: 'events' },
   *   {
   *     properties: { 'read.split.target-size': '134217728' }
   *   }
   * );
   * console.log(response['metadata-location']); // s3://...
   * console.log(response.metadata); // TableMetadata object
   * ```
   */ async updateTable(id, request) {
        return this.tableOps.updateTable(id, request);
    }
    /**
   * Drops a table from the catalog.
   *
   * @param id - Table identifier to drop
   *
   * @example
   * ```typescript
   * await catalog.dropTable({ namespace: ['analytics'], name: 'events' });
   * ```
   */ async dropTable(id, options) {
        await this.tableOps.dropTable(id, options);
    }
    /**
   * Loads metadata for a table.
   *
   * @param id - Table identifier to load
   * @returns Table metadata including schema, partition spec, location, etc.
   *
   * @example
   * ```typescript
   * const metadata = await catalog.loadTable({ namespace: ['analytics'], name: 'events' });
   * console.log(metadata.schema);
   * console.log(metadata.location);
   * ```
   */ async loadTable(id) {
        return this.tableOps.loadTable(id);
    }
    /**
   * Checks if a namespace exists in the catalog.
   *
   * @param id - Namespace identifier to check
   * @returns True if the namespace exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.namespaceExists({ namespace: ['analytics'] });
   * console.log(exists); // true or false
   * ```
   */ async namespaceExists(id) {
        return this.namespaceOps.namespaceExists(id);
    }
    /**
   * Checks if a table exists in the catalog.
   *
   * @param id - Table identifier to check
   * @returns True if the table exists, false otherwise
   *
   * @example
   * ```typescript
   * const exists = await catalog.tableExists({ namespace: ['analytics'], name: 'events' });
   * console.log(exists); // true or false
   * ```
   */ async tableExists(id) {
        return this.tableOps.tableExists(id);
    }
    /**
   * Creates a namespace if it does not exist.
   *
   * If the namespace already exists, returns void. If created, returns the response.
   *
   * @param id - Namespace identifier to create
   * @param metadata - Optional metadata properties for the namespace
   * @returns Response containing the created namespace and its properties, or void if it already exists
   *
   * @example
   * ```typescript
   * const response = await catalog.createNamespaceIfNotExists(
   *   { namespace: ['analytics'] },
   *   { properties: { owner: 'data-team' } }
   * );
   * if (response) {
   *   console.log('Created:', response.namespace);
   * } else {
   *   console.log('Already exists');
   * }
   * ```
   */ async createNamespaceIfNotExists(id, metadata) {
        return this.namespaceOps.createNamespaceIfNotExists(id, metadata);
    }
    /**
   * Creates a table if it does not exist.
   *
   * If the table already exists, returns its metadata instead.
   *
   * @param namespace - Namespace to create the table in
   * @param request - Table creation request including name, schema, partition spec, etc.
   * @returns Table metadata for the created or existing table
   *
   * @example
   * ```typescript
   * const metadata = await catalog.createTableIfNotExists(
   *   { namespace: ['analytics'] },
   *   {
   *     name: 'events',
   *     schema: {
   *       type: 'struct',
   *       fields: [
   *         { id: 1, name: 'id', type: 'long', required: true },
   *         { id: 2, name: 'timestamp', type: 'timestamp', required: true }
   *       ],
   *       'schema-id': 0
   *     }
   *   }
   * );
   * ```
   */ async createTableIfNotExists(namespace, request) {
        return this.tableOps.createTableIfNotExists(namespace, request);
    }
};
// src/catalog/types.ts
var DECIMAL_REGEX = /^decimal\s*\(\s*(\d+)\s*,\s*(\d+)\s*\)$/;
var FIXED_REGEX = /^fixed\s*\[\s*(\d+)\s*\]$/;
function parseDecimalType(type) {
    const match = type.match(DECIMAL_REGEX);
    if (!match) return null;
    return {
        precision: parseInt(match[1], 10),
        scale: parseInt(match[2], 10)
    };
}
function parseFixedType(type) {
    const match = type.match(FIXED_REGEX);
    if (!match) return null;
    return {
        length: parseInt(match[1], 10)
    };
}
function isDecimalType(type) {
    return DECIMAL_REGEX.test(type);
}
function isFixedType(type) {
    return FIXED_REGEX.test(type);
}
function typesEqual(a, b) {
    const decimalA = parseDecimalType(a);
    const decimalB = parseDecimalType(b);
    if (decimalA && decimalB) {
        return decimalA.precision === decimalB.precision && decimalA.scale === decimalB.scale;
    }
    const fixedA = parseFixedType(a);
    const fixedB = parseFixedType(b);
    if (fixedA && fixedB) {
        return fixedA.length === fixedB.length;
    }
    return a === b;
}
function getCurrentSchema(metadata) {
    return metadata.schemas.find((s)=>s["schema-id"] === metadata["current-schema-id"]);
}
;
 //# sourceMappingURL=index.mjs.map
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@supabase/supabase-js/dist/module/lib/version.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Generated automatically during releases by scripts/update-version-files.ts
// This file provides runtime access to the package version for:
// - HTTP request headers (e.g., X-Client-Info header for API requests)
// - Debugging and support (identifying which version is running)
// - Telemetry and logging (version reporting in errors/analytics)
// - Ensuring build artifacts match the published package version
__turbopack_context__.s([
    "version",
    ()=>version
]);
const version = '2.87.3'; //# sourceMappingURL=version.js.map
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@supabase/supabase-js/dist/module/lib/constants.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "DEFAULT_AUTH_OPTIONS",
    ()=>DEFAULT_AUTH_OPTIONS,
    "DEFAULT_DB_OPTIONS",
    ()=>DEFAULT_DB_OPTIONS,
    "DEFAULT_GLOBAL_OPTIONS",
    ()=>DEFAULT_GLOBAL_OPTIONS,
    "DEFAULT_HEADERS",
    ()=>DEFAULT_HEADERS,
    "DEFAULT_REALTIME_OPTIONS",
    ()=>DEFAULT_REALTIME_OPTIONS
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/supabase-js/dist/module/lib/version.js [app-ssr] (ecmascript)");
;
let JS_ENV = '';
// @ts-ignore
if (typeof Deno !== 'undefined') {
    JS_ENV = 'deno';
} else if (typeof document !== 'undefined') {
    JS_ENV = 'web';
} else if (typeof navigator !== 'undefined' && navigator.product === 'ReactNative') {
    JS_ENV = 'react-native';
} else {
    JS_ENV = 'node';
}
const DEFAULT_HEADERS = {
    'X-Client-Info': `supabase-js-${JS_ENV}/${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$version$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["version"]}`
};
const DEFAULT_GLOBAL_OPTIONS = {
    headers: DEFAULT_HEADERS
};
const DEFAULT_DB_OPTIONS = {
    schema: 'public'
};
const DEFAULT_AUTH_OPTIONS = {
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: true,
    flowType: 'implicit'
};
const DEFAULT_REALTIME_OPTIONS = {}; //# sourceMappingURL=constants.js.map
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@supabase/supabase-js/dist/module/lib/fetch.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "fetchWithAuth",
    ()=>fetchWithAuth,
    "resolveFetch",
    ()=>resolveFetch,
    "resolveHeadersConstructor",
    ()=>resolveHeadersConstructor
]);
const resolveFetch = (customFetch)=>{
    if (customFetch) {
        return (...args)=>customFetch(...args);
    }
    return (...args)=>fetch(...args);
};
const resolveHeadersConstructor = ()=>{
    return Headers;
};
const fetchWithAuth = (supabaseKey, getAccessToken, customFetch)=>{
    const fetch1 = resolveFetch(customFetch);
    const HeadersConstructor = resolveHeadersConstructor();
    return async (input, init)=>{
        var _a;
        const accessToken = (_a = await getAccessToken()) !== null && _a !== void 0 ? _a : supabaseKey;
        let headers = new HeadersConstructor(init === null || init === void 0 ? void 0 : init.headers);
        if (!headers.has('apikey')) {
            headers.set('apikey', supabaseKey);
        }
        if (!headers.has('Authorization')) {
            headers.set('Authorization', `Bearer ${accessToken}`);
        }
        return fetch1(input, Object.assign(Object.assign({}, init), {
            headers
        }));
    };
}; //# sourceMappingURL=fetch.js.map
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@supabase/supabase-js/dist/module/lib/helpers.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applySettingDefaults",
    ()=>applySettingDefaults,
    "ensureTrailingSlash",
    ()=>ensureTrailingSlash,
    "isBrowser",
    ()=>isBrowser,
    "uuid",
    ()=>uuid,
    "validateSupabaseUrl",
    ()=>validateSupabaseUrl
]);
function uuid() {
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = Math.random() * 16 | 0, v = c == 'x' ? r : r & 0x3 | 0x8;
        return v.toString(16);
    });
}
function ensureTrailingSlash(url) {
    return url.endsWith('/') ? url : url + '/';
}
const isBrowser = ()=>("TURBOPACK compile-time value", "undefined") !== 'undefined';
function applySettingDefaults(options, defaults) {
    var _a, _b;
    const { db: dbOptions, auth: authOptions, realtime: realtimeOptions, global: globalOptions } = options;
    const { db: DEFAULT_DB_OPTIONS, auth: DEFAULT_AUTH_OPTIONS, realtime: DEFAULT_REALTIME_OPTIONS, global: DEFAULT_GLOBAL_OPTIONS } = defaults;
    const result = {
        db: Object.assign(Object.assign({}, DEFAULT_DB_OPTIONS), dbOptions),
        auth: Object.assign(Object.assign({}, DEFAULT_AUTH_OPTIONS), authOptions),
        realtime: Object.assign(Object.assign({}, DEFAULT_REALTIME_OPTIONS), realtimeOptions),
        storage: {},
        global: Object.assign(Object.assign(Object.assign({}, DEFAULT_GLOBAL_OPTIONS), globalOptions), {
            headers: Object.assign(Object.assign({}, (_a = DEFAULT_GLOBAL_OPTIONS === null || DEFAULT_GLOBAL_OPTIONS === void 0 ? void 0 : DEFAULT_GLOBAL_OPTIONS.headers) !== null && _a !== void 0 ? _a : {}), (_b = globalOptions === null || globalOptions === void 0 ? void 0 : globalOptions.headers) !== null && _b !== void 0 ? _b : {})
        }),
        accessToken: async ()=>''
    };
    if (options.accessToken) {
        result.accessToken = options.accessToken;
    } else {
        // hack around Required<>
        delete result.accessToken;
    }
    return result;
}
function validateSupabaseUrl(supabaseUrl) {
    const trimmedUrl = supabaseUrl === null || supabaseUrl === void 0 ? void 0 : supabaseUrl.trim();
    if (!trimmedUrl) {
        throw new Error('supabaseUrl is required.');
    }
    if (!trimmedUrl.match(/^https?:\/\//i)) {
        throw new Error('Invalid supabaseUrl: Must be a valid HTTP or HTTPS URL.');
    }
    try {
        return new URL(ensureTrailingSlash(trimmedUrl));
    } catch (_a) {
        throw Error('Invalid supabaseUrl: Provided URL is malformed.');
    }
} //# sourceMappingURL=helpers.js.map
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@supabase/supabase-js/dist/module/lib/SupabaseAuthClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SupabaseAuthClient",
    ()=>SupabaseAuthClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/auth-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$AuthClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AuthClient$3e$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/auth-js/dist/module/AuthClient.js [app-ssr] (ecmascript) <export default as AuthClient>");
;
class SupabaseAuthClient extends __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$AuthClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AuthClient$3e$__["AuthClient"] {
    constructor(options){
        super(options);
    }
} //# sourceMappingURL=SupabaseAuthClient.js.map
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@supabase/supabase-js/dist/module/SupabaseClient.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SupabaseClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$FunctionsClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/functions-js/dist/module/FunctionsClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/esm/wrapper.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/realtime-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RealtimeClient$3e$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/realtime-js/dist/module/RealtimeClient.js [app-ssr] (ecmascript) <export default as RealtimeClient>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$StorageClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/storage-js/dist/module/StorageClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/supabase-js/dist/module/lib/constants.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/supabase-js/dist/module/lib/fetch.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/supabase-js/dist/module/lib/helpers.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$SupabaseAuthClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/supabase-js/dist/module/lib/SupabaseAuthClient.js [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
class SupabaseClient {
    /**
     * Create a new client for use in the browser.
     * @param supabaseUrl The unique Supabase URL which is supplied when you create a new project in your project dashboard.
     * @param supabaseKey The unique Supabase Key which is supplied when you create a new project in your project dashboard.
     * @param options.db.schema You can switch in between schemas. The schema needs to be on the list of exposed schemas inside Supabase.
     * @param options.auth.autoRefreshToken Set to "true" if you want to automatically refresh the token before expiring.
     * @param options.auth.persistSession Set to "true" if you want to automatically save the user session into local storage.
     * @param options.auth.detectSessionInUrl Set to "true" if you want to automatically detects OAuth grants in the URL and signs in the user.
     * @param options.realtime Options passed along to realtime-js constructor.
     * @param options.storage Options passed along to the storage-js constructor.
     * @param options.global.fetch A custom fetch implementation.
     * @param options.global.headers Any additional headers to send with each network request.
     * @example
     * ```ts
     * import { createClient } from '@supabase/supabase-js'
     *
     * const supabase = createClient('https://xyzcompany.supabase.co', 'public-anon-key')
     * const { data } = await supabase.from('profiles').select('*')
     * ```
     */ constructor(supabaseUrl, supabaseKey, options){
        var _a, _b, _c;
        this.supabaseUrl = supabaseUrl;
        this.supabaseKey = supabaseKey;
        const baseUrl = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["validateSupabaseUrl"])(supabaseUrl);
        if (!supabaseKey) throw new Error('supabaseKey is required.');
        this.realtimeUrl = new URL('realtime/v1', baseUrl);
        this.realtimeUrl.protocol = this.realtimeUrl.protocol.replace('http', 'ws');
        this.authUrl = new URL('auth/v1', baseUrl);
        this.storageUrl = new URL('storage/v1', baseUrl);
        this.functionsUrl = new URL('functions/v1', baseUrl);
        // default storage key uses the supabase project ref as a namespace
        const defaultStorageKey = `sb-${baseUrl.hostname.split('.')[0]}-auth-token`;
        const DEFAULTS = {
            db: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_DB_OPTIONS"],
            realtime: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_REALTIME_OPTIONS"],
            auth: Object.assign(Object.assign({}, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_AUTH_OPTIONS"]), {
                storageKey: defaultStorageKey
            }),
            global: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$constants$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["DEFAULT_GLOBAL_OPTIONS"]
        };
        const settings = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$helpers$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applySettingDefaults"])(options !== null && options !== void 0 ? options : {}, DEFAULTS);
        this.storageKey = (_a = settings.auth.storageKey) !== null && _a !== void 0 ? _a : '';
        this.headers = (_b = settings.global.headers) !== null && _b !== void 0 ? _b : {};
        if (!settings.accessToken) {
            this.auth = this._initSupabaseAuthClient((_c = settings.auth) !== null && _c !== void 0 ? _c : {}, this.headers, settings.global.fetch);
        } else {
            this.accessToken = settings.accessToken;
            this.auth = new Proxy({}, {
                get: (_, prop)=>{
                    throw new Error(`@supabase/supabase-js: Supabase Client is configured with the accessToken option, accessing supabase.auth.${String(prop)} is not possible`);
                }
            });
        }
        this.fetch = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$fetch$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["fetchWithAuth"])(supabaseKey, this._getAccessToken.bind(this), settings.global.fetch);
        this.realtime = this._initRealtimeClient(Object.assign({
            headers: this.headers,
            accessToken: this._getAccessToken.bind(this)
        }, settings.realtime));
        if (this.accessToken) {
            // Start auth immediately to avoid race condition with channel subscriptions
            this.accessToken().then((token)=>this.realtime.setAuth(token)).catch((e)=>console.warn('Failed to set initial Realtime auth token:', e));
        }
        this.rest = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PostgrestClient"](new URL('rest/v1', baseUrl).href, {
            headers: this.headers,
            schema: settings.db.schema,
            fetch: this.fetch
        });
        this.storage = new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$storage$2d$js$2f$dist$2f$module$2f$StorageClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["StorageClient"](this.storageUrl.href, this.headers, this.fetch, options === null || options === void 0 ? void 0 : options.storage);
        if (!settings.accessToken) {
            this._listenForAuthEvents();
        }
    }
    /**
     * Supabase Functions allows you to deploy and invoke edge functions.
     */ get functions() {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$FunctionsClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionsClient"](this.functionsUrl.href, {
            headers: this.headers,
            customFetch: this.fetch
        });
    }
    /**
     * Perform a query on a table or a view.
     *
     * @param relation - The table or view name to query
     */ from(relation) {
        return this.rest.from(relation);
    }
    // NOTE: signatures must be kept in sync with PostgrestClient.schema
    /**
     * Select a schema to query or perform an function (rpc) call.
     *
     * The schema needs to be on the list of exposed schemas inside Supabase.
     *
     * @param schema - The schema to query
     */ schema(schema) {
        return this.rest.schema(schema);
    }
    // NOTE: signatures must be kept in sync with PostgrestClient.rpc
    /**
     * Perform a function call.
     *
     * @param fn - The function name to call
     * @param args - The arguments to pass to the function call
     * @param options - Named parameters
     * @param options.head - When set to `true`, `data` will not be returned.
     * Useful if you only need the count.
     * @param options.get - When set to `true`, the function will be called with
     * read-only access mode.
     * @param options.count - Count algorithm to use to count rows returned by the
     * function. Only applicable for [set-returning
     * functions](https://www.postgresql.org/docs/current/functions-srf.html).
     *
     * `"exact"`: Exact but slow count algorithm. Performs a `COUNT(*)` under the
     * hood.
     *
     * `"planned"`: Approximated but fast count algorithm. Uses the Postgres
     * statistics under the hood.
     *
     * `"estimated"`: Uses exact count for low numbers and planned count for high
     * numbers.
     */ rpc(fn, args = {}, options = {
        head: false,
        get: false,
        count: undefined
    }) {
        return this.rest.rpc(fn, args, options);
    }
    /**
     * Creates a Realtime channel with Broadcast, Presence, and Postgres Changes.
     *
     * @param {string} name - The name of the Realtime channel.
     * @param {Object} opts - The options to pass to the Realtime channel.
     *
     */ channel(name, opts = {
        config: {}
    }) {
        return this.realtime.channel(name, opts);
    }
    /**
     * Returns all Realtime channels.
     */ getChannels() {
        return this.realtime.getChannels();
    }
    /**
     * Unsubscribes and removes Realtime channel from Realtime client.
     *
     * @param {RealtimeChannel} channel - The name of the Realtime channel.
     *
     */ removeChannel(channel) {
        return this.realtime.removeChannel(channel);
    }
    /**
     * Unsubscribes and removes all Realtime channels from Realtime client.
     */ removeAllChannels() {
        return this.realtime.removeAllChannels();
    }
    async _getAccessToken() {
        var _a, _b;
        if (this.accessToken) {
            return await this.accessToken();
        }
        const { data } = await this.auth.getSession();
        return (_b = (_a = data.session) === null || _a === void 0 ? void 0 : _a.access_token) !== null && _b !== void 0 ? _b : this.supabaseKey;
    }
    _initSupabaseAuthClient({ autoRefreshToken, persistSession, detectSessionInUrl, storage, userStorage, storageKey, flowType, lock, debug, throwOnError }, headers, fetch) {
        const authHeaders = {
            Authorization: `Bearer ${this.supabaseKey}`,
            apikey: `${this.supabaseKey}`
        };
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$lib$2f$SupabaseAuthClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SupabaseAuthClient"]({
            url: this.authUrl.href,
            headers: Object.assign(Object.assign({}, authHeaders), headers),
            storageKey: storageKey,
            autoRefreshToken,
            persistSession,
            detectSessionInUrl,
            storage,
            userStorage,
            flowType,
            lock,
            debug,
            throwOnError,
            fetch,
            // auth checks if there is a custom authorizaiton header using this flag
            // so it knows whether to return an error when getUser is called with no session
            hasCustomAuthorizationHeader: Object.keys(this.headers).some((key)=>key.toLowerCase() === 'authorization')
        });
    }
    _initRealtimeClient(options) {
        return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$RealtimeClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__RealtimeClient$3e$__["RealtimeClient"](this.realtimeUrl.href, Object.assign(Object.assign({}, options), {
            params: Object.assign({
                apikey: this.supabaseKey
            }, options === null || options === void 0 ? void 0 : options.params)
        }));
    }
    _listenForAuthEvents() {
        const data = this.auth.onAuthStateChange((event, session)=>{
            this._handleTokenChanged(event, 'CLIENT', session === null || session === void 0 ? void 0 : session.access_token);
        });
        return data;
    }
    _handleTokenChanged(event, source, token) {
        if ((event === 'TOKEN_REFRESHED' || event === 'SIGNED_IN') && this.changedAccessToken !== token) {
            this.changedAccessToken = token;
            this.realtime.setAuth(token);
        } else if (event === 'SIGNED_OUT') {
            this.realtime.setAuth();
            if (source == 'STORAGE') this.auth.signOut();
            this.changedAccessToken = undefined;
        }
    }
} //# sourceMappingURL=SupabaseClient.js.map
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@supabase/supabase-js/dist/module/index.js [app-ssr] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createClient",
    ()=>createClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$SupabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/supabase-js/dist/module/SupabaseClient.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/auth-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/esm/wrapper.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/realtime-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
;
;
;
;
;
;
const createClient = (supabaseUrl, supabaseKey, options)=>{
    return new __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$SupabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"](supabaseUrl, supabaseKey, options);
};
// Check for Node.js <= 18 deprecation
function shouldShowDeprecationWarning() {
    // Skip in browser environments
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Skip if process is not available (e.g., Edge Runtime)
    if (typeof process === 'undefined') {
        return false;
    }
    // Use dynamic property access to avoid Next.js Edge Runtime static analysis warnings
    const processVersion = process['version'];
    if (processVersion === undefined || processVersion === null) {
        return false;
    }
    const versionMatch = processVersion.match(/^v(\d+)\./);
    if (!versionMatch) {
        return false;
    }
    const majorVersion = parseInt(versionMatch[1], 10);
    return majorVersion <= 18;
}
if (shouldShowDeprecationWarning()) {
    console.warn(`⚠️  Node.js 18 and below are deprecated and will no longer be supported in future versions of @supabase/supabase-js. ` + `Please upgrade to Node.js 20 or later. ` + `For more information, visit: https://github.com/orgs/supabase/discussions/37217`);
} //# sourceMappingURL=index.js.map
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@supabase/supabase-js/dist/module/index.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthAdminApi",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthAdminApi"],
    "AuthApiError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthApiError"],
    "AuthClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthClient"],
    "AuthError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthError"],
    "AuthImplicitGrantRedirectError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthImplicitGrantRedirectError"],
    "AuthInvalidCredentialsError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthInvalidCredentialsError"],
    "AuthInvalidJwtError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthInvalidJwtError"],
    "AuthInvalidTokenResponseError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthInvalidTokenResponseError"],
    "AuthPKCECodeVerifierMissingError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthPKCECodeVerifierMissingError"],
    "AuthPKCEGrantCodeExchangeError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthPKCEGrantCodeExchangeError"],
    "AuthRetryableFetchError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthRetryableFetchError"],
    "AuthSessionMissingError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthSessionMissingError"],
    "AuthUnknownError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthUnknownError"],
    "AuthWeakPasswordError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["AuthWeakPasswordError"],
    "CustomAuthError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["CustomAuthError"],
    "FunctionRegion",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionRegion"],
    "FunctionsError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionsError"],
    "FunctionsFetchError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionsFetchError"],
    "FunctionsHttpError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionsHttpError"],
    "FunctionsRelayError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["FunctionsRelayError"],
    "GoTrueAdminApi",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoTrueAdminApi"],
    "GoTrueClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["GoTrueClient"],
    "NavigatorLockAcquireTimeoutError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["NavigatorLockAcquireTimeoutError"],
    "PostgrestError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PostgrestError"],
    "REALTIME_CHANNEL_STATES",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REALTIME_CHANNEL_STATES"],
    "REALTIME_LISTEN_TYPES",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REALTIME_LISTEN_TYPES"],
    "REALTIME_POSTGRES_CHANGES_LISTEN_EVENT",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REALTIME_POSTGRES_CHANGES_LISTEN_EVENT"],
    "REALTIME_PRESENCE_LISTEN_EVENTS",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REALTIME_PRESENCE_LISTEN_EVENTS"],
    "REALTIME_SUBSCRIBE_STATES",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["REALTIME_SUBSCRIBE_STATES"],
    "RealtimeChannel",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealtimeChannel"],
    "RealtimeClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealtimeClient"],
    "RealtimePresence",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["RealtimePresence"],
    "SIGN_OUT_SCOPES",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["SIGN_OUT_SCOPES"],
    "SupabaseClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$SupabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"],
    "WebSocketFactory",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["WebSocketFactory"],
    "createClient",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["createClient"],
    "isAuthApiError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAuthApiError"],
    "isAuthError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAuthError"],
    "isAuthImplicitGrantRedirectError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAuthImplicitGrantRedirectError"],
    "isAuthPKCECodeVerifierMissingError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAuthPKCECodeVerifierMissingError"],
    "isAuthRetryableFetchError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAuthRetryableFetchError"],
    "isAuthSessionMissingError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAuthSessionMissingError"],
    "isAuthWeakPasswordError",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isAuthWeakPasswordError"],
    "lockInternals",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["lockInternals"],
    "navigatorLock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["navigatorLock"],
    "processLock",
    ()=>__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["processLock"]
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/supabase-js/dist/module/index.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/auth-js/dist/module/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$postgrest$2d$js$2f$dist$2f$esm$2f$wrapper$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/postgrest-js/dist/esm/wrapper.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$functions$2d$js$2f$dist$2f$module$2f$types$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/functions-js/dist/module/types.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$realtime$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/realtime-js/dist/module/index.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$SupabaseClient$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/supabase-js/dist/module/SupabaseClient.js [app-ssr] (ecmascript)");
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@supabase/supabase-js/dist/esm/wrapper.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "AuthAdminApi",
    ()=>AuthAdminApi,
    "AuthApiError",
    ()=>AuthApiError,
    "AuthClient",
    ()=>AuthClient,
    "AuthError",
    ()=>AuthError,
    "AuthImplicitGrantRedirectError",
    ()=>AuthImplicitGrantRedirectError,
    "AuthInvalidCredentialsError",
    ()=>AuthInvalidCredentialsError,
    "AuthInvalidJwtError",
    ()=>AuthInvalidJwtError,
    "AuthInvalidTokenResponseError",
    ()=>AuthInvalidTokenResponseError,
    "AuthPKCEGrantCodeExchangeError",
    ()=>AuthPKCEGrantCodeExchangeError,
    "AuthRetryableFetchError",
    ()=>AuthRetryableFetchError,
    "AuthSessionMissingError",
    ()=>AuthSessionMissingError,
    "AuthUnknownError",
    ()=>AuthUnknownError,
    "AuthWeakPasswordError",
    ()=>AuthWeakPasswordError,
    "CustomAuthError",
    ()=>CustomAuthError,
    "FunctionRegion",
    ()=>FunctionRegion,
    "FunctionsError",
    ()=>FunctionsError,
    "FunctionsFetchError",
    ()=>FunctionsFetchError,
    "FunctionsHttpError",
    ()=>FunctionsHttpError,
    "FunctionsRelayError",
    ()=>FunctionsRelayError,
    "GoTrueAdminApi",
    ()=>GoTrueAdminApi,
    "GoTrueClient",
    ()=>GoTrueClient,
    "NavigatorLockAcquireTimeoutError",
    ()=>NavigatorLockAcquireTimeoutError,
    "PostgrestError",
    ()=>PostgrestError,
    "REALTIME_CHANNEL_STATES",
    ()=>REALTIME_CHANNEL_STATES,
    "REALTIME_LISTEN_TYPES",
    ()=>REALTIME_LISTEN_TYPES,
    "REALTIME_POSTGRES_CHANGES_LISTEN_EVENT",
    ()=>REALTIME_POSTGRES_CHANGES_LISTEN_EVENT,
    "REALTIME_PRESENCE_LISTEN_EVENTS",
    ()=>REALTIME_PRESENCE_LISTEN_EVENTS,
    "REALTIME_SUBSCRIBE_STATES",
    ()=>REALTIME_SUBSCRIBE_STATES,
    "RealtimeChannel",
    ()=>RealtimeChannel,
    "RealtimeClient",
    ()=>RealtimeClient,
    "RealtimePresence",
    ()=>RealtimePresence,
    "SIGN_OUT_SCOPES",
    ()=>SIGN_OUT_SCOPES,
    "SupabaseClient",
    ()=>SupabaseClient,
    "createClient",
    ()=>createClient,
    "default",
    ()=>__TURBOPACK__default__export__,
    "isAuthApiError",
    ()=>isAuthApiError,
    "isAuthError",
    ()=>isAuthError,
    "isAuthImplicitGrantRedirectError",
    ()=>isAuthImplicitGrantRedirectError,
    "isAuthRetryableFetchError",
    ()=>isAuthRetryableFetchError,
    "isAuthSessionMissingError",
    ()=>isAuthSessionMissingError,
    "isAuthWeakPasswordError",
    ()=>isAuthWeakPasswordError,
    "lockInternals",
    ()=>lockInternals,
    "navigatorLock",
    ()=>navigatorLock,
    "processLock",
    ()=>processLock
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/supabase-js/dist/module/index.js [app-ssr] (ecmascript)");
;
const { PostgrestError, FunctionsHttpError, FunctionsFetchError, FunctionsRelayError, FunctionsError, FunctionRegion, SupabaseClient, createClient, GoTrueAdminApi, GoTrueClient, AuthAdminApi, AuthClient, navigatorLock, NavigatorLockAcquireTimeoutError, lockInternals, processLock, SIGN_OUT_SCOPES, AuthError, AuthApiError, AuthUnknownError, CustomAuthError, AuthSessionMissingError, AuthInvalidTokenResponseError, AuthInvalidCredentialsError, AuthImplicitGrantRedirectError, AuthPKCEGrantCodeExchangeError, AuthRetryableFetchError, AuthWeakPasswordError, AuthInvalidJwtError, isAuthError, isAuthApiError, isAuthSessionMissingError, isAuthImplicitGrantRedirectError, isAuthRetryableFetchError, isAuthWeakPasswordError, RealtimePresence, RealtimeChannel, RealtimeClient, REALTIME_LISTEN_TYPES, REALTIME_POSTGRES_CHANGES_LISTEN_EVENT, REALTIME_PRESENCE_LISTEN_EVENTS, REALTIME_SUBSCRIBE_STATES, REALTIME_CHANNEL_STATES } = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.default || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__;
;
const __TURBOPACK__default__export__ = __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__.default || __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$supabase$2d$js$2f$dist$2f$module$2f$index$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@swc/helpers/cjs/_interop_require_default.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
exports._ = _interop_require_default;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@swc/helpers/cjs/_interop_require_wildcard.cjs [app-ssr] (ecmascript)", ((__turbopack_context__, module, exports) => {
"use strict";

function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) return obj;
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") return {
        default: obj
    };
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) return cache.get(obj);
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) Object.defineProperty(newObj, key, desc);
            else newObj[key] = obj[key];
        }
    }
    newObj.default = obj;
    if (cache) cache.set(obj, newObj);
    return newObj;
}
exports._ = _interop_require_wildcard;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/clamp.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "clamp",
    ()=>clamp
]);
const clamp = (min, max, v)=>{
    if (v > max) return max;
    if (v < min) return min;
    return v;
};
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "formatErrorMessage",
    ()=>formatErrorMessage
]);
function formatErrorMessage(message, errorCode) {
    return errorCode ? `${message}. For more information and steps for solving, visit https://motion.dev/troubleshooting/${errorCode}` : message;
}
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "invariant",
    ()=>invariant,
    "warning",
    ()=>warning
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)");
;
let warning = ()=>{};
let invariant = ()=>{};
if ("TURBOPACK compile-time truthy", 1) {
    warning = (check, message, errorCode)=>{
        if (!check && typeof console !== "undefined") {
            console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
    invariant = (check, message, errorCode)=>{
        if (!check) {
            throw new Error((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
        }
    };
}
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/is-numerical-string.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if value is a numerical string, ie a string that is purely a number eg "100" or "-100.1"
 */ __turbopack_context__.s([
    "isNumericalString",
    ()=>isNumericalString
]);
const isNumericalString = (v)=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(v);
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "noop",
    ()=>noop
]);
const noop = (any)=>any;
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/global-config.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "MotionGlobalConfig",
    ()=>MotionGlobalConfig
]);
const MotionGlobalConfig = {};
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/is-zero-value-string.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Check if the value is a zero value string like "0px" or "0%"
 */ __turbopack_context__.s([
    "isZeroValueString",
    ()=>isZeroValueString
]);
const isZeroValueString = (v)=>/^0[^.\s]+$/u.test(v);
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/warn-once.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "hasWarned",
    ()=>hasWarned,
    "warnOnce",
    ()=>warnOnce
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/format-error-message.mjs [app-ssr] (ecmascript)");
;
const warned = new Set();
function hasWarned(message) {
    return warned.has(message);
}
function warnOnce(condition, message, errorCode) {
    if (condition || warned.has(message)) return;
    console.warn((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$format$2d$error$2d$message$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["formatErrorMessage"])(message, errorCode));
    warned.add(message);
}
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/array.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "addUniqueItem",
    ()=>addUniqueItem,
    "moveItem",
    ()=>moveItem,
    "removeItem",
    ()=>removeItem
]);
function addUniqueItem(arr, item) {
    if (arr.indexOf(item) === -1) arr.push(item);
}
function removeItem(arr, item) {
    const index = arr.indexOf(item);
    if (index > -1) arr.splice(index, 1);
}
// Adapted from array-move
function moveItem([...arr], fromIndex, toIndex) {
    const startIndex = fromIndex < 0 ? arr.length + fromIndex : fromIndex;
    if (startIndex >= 0 && startIndex < arr.length) {
        const endIndex = toIndex < 0 ? arr.length + toIndex : toIndex;
        const [item] = arr.splice(fromIndex, 1);
        arr.splice(endIndex, 0, item);
    }
    return arr;
}
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/subscription-manager.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "SubscriptionManager",
    ()=>SubscriptionManager
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/array.mjs [app-ssr] (ecmascript)");
;
class SubscriptionManager {
    constructor(){
        this.subscriptions = [];
    }
    add(handler) {
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["addUniqueItem"])(this.subscriptions, handler);
        return ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$array$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["removeItem"])(this.subscriptions, handler);
    }
    notify(a, b, c) {
        const numSubscriptions = this.subscriptions.length;
        if (!numSubscriptions) return;
        if (numSubscriptions === 1) {
            /**
             * If there's only a single handler we can just call it without invoking a loop.
             */ this.subscriptions[0](a, b, c);
        } else {
            for(let i = 0; i < numSubscriptions; i++){
                /**
                 * Check whether the handler exists before firing as it's possible
                 * the subscriptions were modified during this loop running.
                 */ const handler = this.subscriptions[i];
                handler && handler(a, b, c);
            }
        }
    }
    getSize() {
        return this.subscriptions.length;
    }
    clear() {
        this.subscriptions.length = 0;
    }
}
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/velocity-per-second.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  Convert velocity into velocity per second

  @param [number]: Unit per frame
  @param [number]: Frame duration in ms
*/ __turbopack_context__.s([
    "velocityPerSecond",
    ()=>velocityPerSecond
]);
function velocityPerSecond(velocity, frameDuration) {
    return frameDuration ? velocity * (1000 / frameDuration) : 0;
}
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/pipe.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Pipe
 * Compose other transformers to run linearily
 * pipe(min(20), max(40))
 * @param  {...functions} transformers
 * @return {function}
 */ __turbopack_context__.s([
    "pipe",
    ()=>pipe
]);
const combineFunctions = (a, b)=>(v)=>b(a(v));
const pipe = (...transformers)=>transformers.reduce(combineFunctions);
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/time-conversion.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/**
 * Converts seconds to milliseconds
 *
 * @param seconds - Time in seconds.
 * @return milliseconds - Converted time in milliseconds.
 */ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "millisecondsToSeconds",
    ()=>millisecondsToSeconds,
    "secondsToMilliseconds",
    ()=>secondsToMilliseconds
]);
const secondsToMilliseconds = (seconds)=>seconds * 1000;
/*#__NO_SIDE_EFFECTS__*/ const millisecondsToSeconds = (milliseconds)=>milliseconds / 1000;
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cubicBezier",
    ()=>cubicBezier
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
;
/*
  Bezier function generator
  This has been modified from Gaëtan Renaudeau's BezierEasing
  https://github.com/gre/bezier-easing/blob/master/src/index.js
  https://github.com/gre/bezier-easing/blob/master/LICENSE
  
  I've removed the newtonRaphsonIterate algo because in benchmarking it
  wasn't noticeably faster than binarySubdivision, indeed removing it
  usually improved times, depending on the curve.
  I also removed the lookup table, as for the added bundle size and loop we're
  only cutting ~4 or so subdivision iterations. I bumped the max iterations up
  to 12 to compensate and this still tended to be faster for no perceivable
  loss in accuracy.
  Usage
    const easeOut = cubicBezier(.17,.67,.83,.67);
    const x = easeOut(0.5); // returns 0.627...
*/ // Returns x(t) given t, x1, and x2, or y(t) given t, y1, and y2.
const calcBezier = (t, a1, a2)=>(((1.0 - 3.0 * a2 + 3.0 * a1) * t + (3.0 * a2 - 6.0 * a1)) * t + 3.0 * a1) * t;
const subdivisionPrecision = 0.0000001;
const subdivisionMaxIterations = 12;
function binarySubdivide(x, lowerBound, upperBound, mX1, mX2) {
    let currentX;
    let currentT;
    let i = 0;
    do {
        currentT = lowerBound + (upperBound - lowerBound) / 2.0;
        currentX = calcBezier(currentT, mX1, mX2) - x;
        if (currentX > 0.0) {
            upperBound = currentT;
        } else {
            lowerBound = currentT;
        }
    }while (Math.abs(currentX) > subdivisionPrecision && ++i < subdivisionMaxIterations)
    return currentT;
}
function cubicBezier(mX1, mY1, mX2, mY2) {
    // If this is a linear gradient, return linear easing
    if (mX1 === mY1 && mX2 === mY2) return __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"];
    const getTForX = (aX)=>binarySubdivide(aX, 0, 1, mX1, mX2);
    // If animation is at start/end, return t without easing
    return (t)=>t === 0 || t === 1 ? t : calcBezier(getTForX(t), mY1, mY2);
}
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/easing/ease.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easeIn",
    ()=>easeIn,
    "easeInOut",
    ()=>easeInOut,
    "easeOut",
    ()=>easeOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
;
const easeIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 1, 1);
const easeOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0, 0, 0.58, 1);
const easeInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.42, 0, 0.58, 1);
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/easing/utils/is-easing-array.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isEasingArray",
    ()=>isEasingArray
]);
const isEasingArray = (ease)=>{
    return Array.isArray(ease) && typeof ease[0] !== "number";
};
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Accepts an easing function and returns a new one that outputs mirrored values for
// the second half of the animation. Turns easeIn into easeInOut.
__turbopack_context__.s([
    "mirrorEasing",
    ()=>mirrorEasing
]);
const mirrorEasing = (easing)=>(p)=>p <= 0.5 ? easing(2 * p) / 2 : (2 - easing(2 * (1 - p))) / 2;
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// Accepts an easing function and returns a new one that outputs reversed values.
// Turns easeIn into easeOut.
__turbopack_context__.s([
    "reverseEasing",
    ()=>reverseEasing
]);
const reverseEasing = (easing)=>(p)=>1 - easing(1 - p);
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "backIn",
    ()=>backIn,
    "backInOut",
    ()=>backInOut,
    "backOut",
    ()=>backOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)");
;
;
;
const backOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(0.33, 1.53, 0.69, 0.99);
const backIn = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseEasing"])(backOut);
const backInOut = /*@__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mirrorEasing"])(backIn);
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "anticipate",
    ()=>anticipate
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)");
;
const anticipate = (p)=>(p *= 2) < 1 ? 0.5 * (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backIn"])(p) : 0.5 * (2 - Math.pow(2, -10 * (p - 1)));
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/easing/circ.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "circIn",
    ()=>circIn,
    "circInOut",
    ()=>circInOut,
    "circOut",
    ()=>circOut
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/easing/modifiers/mirror.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/easing/modifiers/reverse.mjs [app-ssr] (ecmascript)");
;
;
const circIn = (p)=>1 - Math.sin(Math.acos(p));
const circOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$reverse$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["reverseEasing"])(circIn);
const circInOut = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$modifiers$2f$mirror$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["mirrorEasing"])(circIn);
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isBezierDefinition",
    ()=>isBezierDefinition
]);
const isBezierDefinition = (easing)=>Array.isArray(easing) && typeof easing[0] === "number";
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/easing/utils/map.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "easingDefinitionToFunction",
    ()=>easingDefinitionToFunction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/errors.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/noop.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/easing/anticipate.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/easing/back.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/easing/circ.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/easing/cubic-bezier.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/easing/ease.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/easing/utils/is-bezier-definition.mjs [app-ssr] (ecmascript)");
;
;
;
;
;
;
;
;
const easingLookup = {
    linear: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$noop$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["noop"],
    easeIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeIn"],
    easeInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeInOut"],
    easeOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$ease$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["easeOut"],
    circIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circIn"],
    circInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circInOut"],
    circOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$circ$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["circOut"],
    backIn: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backIn"],
    backInOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backInOut"],
    backOut: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$back$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["backOut"],
    anticipate: __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$anticipate$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["anticipate"]
};
const isValidEasing = (easing)=>{
    return typeof easing === "string";
};
const easingDefinitionToFunction = (definition)=>{
    if ((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$utils$2f$is$2d$bezier$2d$definition$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["isBezierDefinition"])(definition)) {
        // If cubic bezier definition, create bezier curve
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(definition.length === 4, `Cubic bezier arrays must contain four numerical values.`, "cubic-bezier-length");
        const [x1, y1, x2, y2] = definition;
        return (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$easing$2f$cubic$2d$bezier$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cubicBezier"])(x1, y1, x2, y2);
    } else if (isValidEasing(definition)) {
        // Else lookup from table
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$motion$2d$utils$2f$dist$2f$es$2f$errors$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["invariant"])(easingLookup[definition] !== undefined, `Invalid easing type '${definition}'`, "invalid-easing-type");
        return easingLookup[definition];
    }
    return definition;
};
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/progress.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*
  Progress within given range

  Given a lower limit and an upper limit, we return the progress
  (expressed as a number 0-1) represented by the given value, and
  limit that progress to within 0-1.

  @param [number]: Lower limit
  @param [number]: Upper limit
  @param [number]: Value to find progress within given range
  @return [number]: Progress of value within range as expressed 0-1
*/ /*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "progress",
    ()=>progress
]);
const progress = (from, to, value)=>{
    const toFromDifference = to - from;
    return toFromDifference === 0 ? 1 : (value - from) / toFromDifference;
};
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/memo.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

/*#__NO_SIDE_EFFECTS__*/ __turbopack_context__.s([
    "memo",
    ()=>memo
]);
function memo(callback) {
    let result;
    return ()=>{
        if (result === undefined) result = callback();
        return result;
    };
}
;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/motion-utils/dist/es/is-object.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "isObject",
    ()=>isObject
]);
function isObject(value) {
    return typeof value === "object" && value !== null;
}
;
}),
"[project]/node_modules/@emotion/memoize/dist/memoize.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
function memoize(fn) {
    var cache = {};
    return function(arg) {
        if (cache[arg] === undefined) cache[arg] = fn(arg);
        return cache[arg];
    };
}
const __TURBOPACK__default__export__ = memoize;
}),
"[project]/node_modules/@emotion/is-prop-valid/dist/is-prop-valid.esm.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$memoize$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@emotion/memoize/dist/memoize.esm.js [app-ssr] (ecmascript)");
;
var reactPropsRegex = /^((children|dangerouslySetInnerHTML|key|ref|autoFocus|defaultValue|defaultChecked|innerHTML|suppressContentEditableWarning|suppressHydrationWarning|valueLink|accept|acceptCharset|accessKey|action|allow|allowUserMedia|allowPaymentRequest|allowFullScreen|allowTransparency|alt|async|autoComplete|autoPlay|capture|cellPadding|cellSpacing|challenge|charSet|checked|cite|classID|className|cols|colSpan|content|contentEditable|contextMenu|controls|controlsList|coords|crossOrigin|data|dateTime|decoding|default|defer|dir|disabled|disablePictureInPicture|download|draggable|encType|form|formAction|formEncType|formMethod|formNoValidate|formTarget|frameBorder|headers|height|hidden|high|href|hrefLang|htmlFor|httpEquiv|id|inputMode|integrity|is|keyParams|keyType|kind|label|lang|list|loading|loop|low|marginHeight|marginWidth|max|maxLength|media|mediaGroup|method|min|minLength|multiple|muted|name|nonce|noValidate|open|optimum|pattern|placeholder|playsInline|poster|preload|profile|radioGroup|readOnly|referrerPolicy|rel|required|reversed|role|rows|rowSpan|sandbox|scope|scoped|scrolling|seamless|selected|shape|size|sizes|slot|span|spellCheck|src|srcDoc|srcLang|srcSet|start|step|style|summary|tabIndex|target|title|type|useMap|value|width|wmode|wrap|about|datatype|inlist|prefix|property|resource|typeof|vocab|autoCapitalize|autoCorrect|autoSave|color|inert|itemProp|itemScope|itemType|itemID|itemRef|on|results|security|unselectable|accentHeight|accumulate|additive|alignmentBaseline|allowReorder|alphabetic|amplitude|arabicForm|ascent|attributeName|attributeType|autoReverse|azimuth|baseFrequency|baselineShift|baseProfile|bbox|begin|bias|by|calcMode|capHeight|clip|clipPathUnits|clipPath|clipRule|colorInterpolation|colorInterpolationFilters|colorProfile|colorRendering|contentScriptType|contentStyleType|cursor|cx|cy|d|decelerate|descent|diffuseConstant|direction|display|divisor|dominantBaseline|dur|dx|dy|edgeMode|elevation|enableBackground|end|exponent|externalResourcesRequired|fill|fillOpacity|fillRule|filter|filterRes|filterUnits|floodColor|floodOpacity|focusable|fontFamily|fontSize|fontSizeAdjust|fontStretch|fontStyle|fontVariant|fontWeight|format|from|fr|fx|fy|g1|g2|glyphName|glyphOrientationHorizontal|glyphOrientationVertical|glyphRef|gradientTransform|gradientUnits|hanging|horizAdvX|horizOriginX|ideographic|imageRendering|in|in2|intercept|k|k1|k2|k3|k4|kernelMatrix|kernelUnitLength|kerning|keyPoints|keySplines|keyTimes|lengthAdjust|letterSpacing|lightingColor|limitingConeAngle|local|markerEnd|markerMid|markerStart|markerHeight|markerUnits|markerWidth|mask|maskContentUnits|maskUnits|mathematical|mode|numOctaves|offset|opacity|operator|order|orient|orientation|origin|overflow|overlinePosition|overlineThickness|panose1|paintOrder|pathLength|patternContentUnits|patternTransform|patternUnits|pointerEvents|points|pointsAtX|pointsAtY|pointsAtZ|preserveAlpha|preserveAspectRatio|primitiveUnits|r|radius|refX|refY|renderingIntent|repeatCount|repeatDur|requiredExtensions|requiredFeatures|restart|result|rotate|rx|ry|scale|seed|shapeRendering|slope|spacing|specularConstant|specularExponent|speed|spreadMethod|startOffset|stdDeviation|stemh|stemv|stitchTiles|stopColor|stopOpacity|strikethroughPosition|strikethroughThickness|string|stroke|strokeDasharray|strokeDashoffset|strokeLinecap|strokeLinejoin|strokeMiterlimit|strokeOpacity|strokeWidth|surfaceScale|systemLanguage|tableValues|targetX|targetY|textAnchor|textDecoration|textRendering|textLength|to|transform|u1|u2|underlinePosition|underlineThickness|unicode|unicodeBidi|unicodeRange|unitsPerEm|vAlphabetic|vHanging|vIdeographic|vMathematical|values|vectorEffect|version|vertAdvY|vertOriginX|vertOriginY|viewBox|viewTarget|visibility|widths|wordSpacing|writingMode|x|xHeight|x1|x2|xChannelSelector|xlinkActuate|xlinkArcrole|xlinkHref|xlinkRole|xlinkShow|xlinkTitle|xlinkType|xmlBase|xmlns|xmlnsXlink|xmlLang|xmlSpace|y|y1|y2|yChannelSelector|z|zoomAndPan|for|class|autofocus)|(([Dd][Aa][Tt][Aa]|[Aa][Rr][Ii][Aa]|x)-.*))$/; // https://esbench.com/bench/5bfee68a4cd7e6009ef61d23
var index = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$emotion$2f$memoize$2f$dist$2f$memoize$2e$esm$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"])(function(prop) {
    return reactPropsRegex.test(prop) || prop.charCodeAt(0) === 111 && prop.charCodeAt(1) === 110 && prop.charCodeAt(2) < 91;
});
const __TURBOPACK__default__export__ = index;
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@stitches/core/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "createStitches",
    ()=>X,
    "createTheme",
    ()=>q,
    "css",
    ()=>_,
    "defaultThemeMap",
    ()=>i,
    "globalCss",
    ()=>K,
    "keyframes",
    ()=>Q
]);
var e, t = "colors", n = "sizes", r = "space", i = {
    gap: r,
    gridGap: r,
    columnGap: r,
    gridColumnGap: r,
    rowGap: r,
    gridRowGap: r,
    inset: r,
    insetBlock: r,
    insetBlockEnd: r,
    insetBlockStart: r,
    insetInline: r,
    insetInlineEnd: r,
    insetInlineStart: r,
    margin: r,
    marginTop: r,
    marginRight: r,
    marginBottom: r,
    marginLeft: r,
    marginBlock: r,
    marginBlockEnd: r,
    marginBlockStart: r,
    marginInline: r,
    marginInlineEnd: r,
    marginInlineStart: r,
    padding: r,
    paddingTop: r,
    paddingRight: r,
    paddingBottom: r,
    paddingLeft: r,
    paddingBlock: r,
    paddingBlockEnd: r,
    paddingBlockStart: r,
    paddingInline: r,
    paddingInlineEnd: r,
    paddingInlineStart: r,
    top: r,
    right: r,
    bottom: r,
    left: r,
    scrollMargin: r,
    scrollMarginTop: r,
    scrollMarginRight: r,
    scrollMarginBottom: r,
    scrollMarginLeft: r,
    scrollMarginX: r,
    scrollMarginY: r,
    scrollMarginBlock: r,
    scrollMarginBlockEnd: r,
    scrollMarginBlockStart: r,
    scrollMarginInline: r,
    scrollMarginInlineEnd: r,
    scrollMarginInlineStart: r,
    scrollPadding: r,
    scrollPaddingTop: r,
    scrollPaddingRight: r,
    scrollPaddingBottom: r,
    scrollPaddingLeft: r,
    scrollPaddingX: r,
    scrollPaddingY: r,
    scrollPaddingBlock: r,
    scrollPaddingBlockEnd: r,
    scrollPaddingBlockStart: r,
    scrollPaddingInline: r,
    scrollPaddingInlineEnd: r,
    scrollPaddingInlineStart: r,
    fontSize: "fontSizes",
    background: t,
    backgroundColor: t,
    backgroundImage: t,
    borderImage: t,
    border: t,
    borderBlock: t,
    borderBlockEnd: t,
    borderBlockStart: t,
    borderBottom: t,
    borderBottomColor: t,
    borderColor: t,
    borderInline: t,
    borderInlineEnd: t,
    borderInlineStart: t,
    borderLeft: t,
    borderLeftColor: t,
    borderRight: t,
    borderRightColor: t,
    borderTop: t,
    borderTopColor: t,
    caretColor: t,
    color: t,
    columnRuleColor: t,
    fill: t,
    outline: t,
    outlineColor: t,
    stroke: t,
    textDecorationColor: t,
    fontFamily: "fonts",
    fontWeight: "fontWeights",
    lineHeight: "lineHeights",
    letterSpacing: "letterSpacings",
    blockSize: n,
    minBlockSize: n,
    maxBlockSize: n,
    inlineSize: n,
    minInlineSize: n,
    maxInlineSize: n,
    width: n,
    minWidth: n,
    maxWidth: n,
    height: n,
    minHeight: n,
    maxHeight: n,
    flexBasis: n,
    gridTemplateColumns: n,
    gridTemplateRows: n,
    borderWidth: "borderWidths",
    borderTopWidth: "borderWidths",
    borderRightWidth: "borderWidths",
    borderBottomWidth: "borderWidths",
    borderLeftWidth: "borderWidths",
    borderStyle: "borderStyles",
    borderTopStyle: "borderStyles",
    borderRightStyle: "borderStyles",
    borderBottomStyle: "borderStyles",
    borderLeftStyle: "borderStyles",
    borderRadius: "radii",
    borderTopLeftRadius: "radii",
    borderTopRightRadius: "radii",
    borderBottomRightRadius: "radii",
    borderBottomLeftRadius: "radii",
    boxShadow: "shadows",
    textShadow: "shadows",
    transition: "transitions",
    zIndex: "zIndices"
}, o = (e, t)=>"function" == typeof t ? {
        "()": Function.prototype.toString.call(t)
    } : t, l = ()=>{
    const e = Object.create(null);
    return (t, n, ...r)=>{
        const i = ((e)=>JSON.stringify(e, o))(t);
        return i in e ? e[i] : e[i] = n(t, ...r);
    };
}, s = Symbol.for("sxs.internal"), a = (e, t)=>Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)), c = (e)=>{
    for(const t in e)return !0;
    return !1;
}, { hasOwnProperty: d } = Object.prototype, g = (e)=>e.includes("-") ? e : e.replace(/[A-Z]/g, (e)=>"-" + e.toLowerCase()), p = /\s+(?![^()]*\))/, u = (e)=>(t)=>e(..."string" == typeof t ? String(t).split(p) : [
            t
        ]), h = {
    appearance: (e)=>({
            WebkitAppearance: e,
            appearance: e
        }),
    backfaceVisibility: (e)=>({
            WebkitBackfaceVisibility: e,
            backfaceVisibility: e
        }),
    backdropFilter: (e)=>({
            WebkitBackdropFilter: e,
            backdropFilter: e
        }),
    backgroundClip: (e)=>({
            WebkitBackgroundClip: e,
            backgroundClip: e
        }),
    boxDecorationBreak: (e)=>({
            WebkitBoxDecorationBreak: e,
            boxDecorationBreak: e
        }),
    clipPath: (e)=>({
            WebkitClipPath: e,
            clipPath: e
        }),
    content: (e)=>({
            content: e.includes('"') || e.includes("'") || /^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e) ? e : `"${e}"`
        }),
    hyphens: (e)=>({
            WebkitHyphens: e,
            hyphens: e
        }),
    maskImage: (e)=>({
            WebkitMaskImage: e,
            maskImage: e
        }),
    maskSize: (e)=>({
            WebkitMaskSize: e,
            maskSize: e
        }),
    tabSize: (e)=>({
            MozTabSize: e,
            tabSize: e
        }),
    textSizeAdjust: (e)=>({
            WebkitTextSizeAdjust: e,
            textSizeAdjust: e
        }),
    userSelect: (e)=>({
            WebkitUserSelect: e,
            userSelect: e
        }),
    marginBlock: u((e, t)=>({
            marginBlockStart: e,
            marginBlockEnd: t || e
        })),
    marginInline: u((e, t)=>({
            marginInlineStart: e,
            marginInlineEnd: t || e
        })),
    maxSize: u((e, t)=>({
            maxBlockSize: e,
            maxInlineSize: t || e
        })),
    minSize: u((e, t)=>({
            minBlockSize: e,
            minInlineSize: t || e
        })),
    paddingBlock: u((e, t)=>({
            paddingBlockStart: e,
            paddingBlockEnd: t || e
        })),
    paddingInline: u((e, t)=>({
            paddingInlineStart: e,
            paddingInlineEnd: t || e
        }))
}, f = /([\d.]+)([^]*)/, m = (e, t)=>e.length ? e.reduce((e, n)=>(e.push(...t.map((e)=>e.includes("&") ? e.replace(/&/g, /[ +>|~]/.test(n) && /&.*&/.test(e) ? `:is(${n})` : n) : n + " " + e)), e), []) : t, b = (e, t)=>e in S && "string" == typeof t ? t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/, (t, n, r, i)=>n + ("stretch" === r ? `-moz-available${i};${g(e)}:${n}-webkit-fill-available` : `-moz-fit-content${i};${g(e)}:${n}fit-content`) + i) : String(t), S = {
    blockSize: 1,
    height: 1,
    inlineSize: 1,
    maxBlockSize: 1,
    maxHeight: 1,
    maxInlineSize: 1,
    maxWidth: 1,
    minBlockSize: 1,
    minHeight: 1,
    minInlineSize: 1,
    minWidth: 1,
    width: 1
}, k = (e)=>e ? e + "-" : "", y = (e, t, n)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g, (e, r, i, o, l)=>"$" == o == !!i ? e : (r || "--" == o ? "calc(" : "") + "var(--" + ("$" === o ? k(t) + (l.includes("$") ? "" : k(n)) + l.replace(/\$/g, "-") : l) + ")" + (r || "--" == o ? "*" + (r || "") + (i || "1") + ")" : "")), B = /\s*,\s*(?![^()]*\))/, $ = Object.prototype.toString, x = (e, t, n, r, i)=>{
    let o, l, s;
    const a = (e, t, n)=>{
        let c, d;
        const p = (e)=>{
            for(c in e){
                const x = 64 === c.charCodeAt(0), z = x && Array.isArray(e[c]) ? e[c] : [
                    e[c]
                ];
                for (d of z){
                    const e = /[A-Z]/.test(S = c) ? S : S.replace(/-[^]/g, (e)=>e[1].toUpperCase()), z = "object" == typeof d && d && d.toString === $ && (!r.utils[e] || !t.length);
                    if (e in r.utils && !z) {
                        const t = r.utils[e];
                        if (t !== l) {
                            l = t, p(t(d)), l = null;
                            continue;
                        }
                    } else if (e in h) {
                        const t = h[e];
                        if (t !== s) {
                            s = t, p(t(d)), s = null;
                            continue;
                        }
                    }
                    if (x && (u = c.slice(1) in r.media ? "@media " + r.media[c.slice(1)] : c, c = u.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g, (e, t, n, r, i, o)=>{
                        const l = f.test(t), s = .0625 * (l ? -1 : 1), [a, c] = l ? [
                            r,
                            t
                        ] : [
                            t,
                            r
                        ];
                        return "(" + ("=" === n[0] ? "" : ">" === n[0] === l ? "max-" : "min-") + a + ":" + ("=" !== n[0] && 1 === n.length ? c.replace(f, (e, t, r)=>Number(t) + s * (">" === n ? 1 : -1) + r) : c) + (i ? ") and (" + (">" === i[0] ? "min-" : "max-") + a + ":" + (1 === i.length ? o.replace(f, (e, t, n)=>Number(t) + s * (">" === i ? -1 : 1) + n) : o) : "") + ")";
                    })), z) {
                        const e = x ? n.concat(c) : [
                            ...n
                        ], r = x ? [
                            ...t
                        ] : m(t, c.split(B));
                        void 0 !== o && i(I(...o)), o = void 0, a(d, r, e);
                    } else void 0 === o && (o = [
                        [],
                        t,
                        n
                    ]), c = x || 36 !== c.charCodeAt(0) ? c : `--${k(r.prefix)}${c.slice(1).replace(/\$/g, "-")}`, d = z ? d : "number" == typeof d ? d && e in R ? String(d) + "px" : String(d) : y(b(e, null == d ? "" : d), r.prefix, r.themeMap[e]), o[0].push(`${x ? `${c} ` : `${g(c)}:`}${d}`);
                }
            }
            var u, S;
        };
        p(e), void 0 !== o && i(I(...o)), o = void 0;
    };
    a(e, t, n);
}, I = (e, t, n)=>`${n.map((e)=>`${e}{`).join("")}${t.length ? `${t.join(",")}{` : ""}${e.join(";")}${t.length ? "}" : ""}${Array(n.length ? n.length + 1 : 0).join("}")}`, R = {
    animationDelay: 1,
    animationDuration: 1,
    backgroundSize: 1,
    blockSize: 1,
    border: 1,
    borderBlock: 1,
    borderBlockEnd: 1,
    borderBlockEndWidth: 1,
    borderBlockStart: 1,
    borderBlockStartWidth: 1,
    borderBlockWidth: 1,
    borderBottom: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    borderBottomWidth: 1,
    borderEndEndRadius: 1,
    borderEndStartRadius: 1,
    borderInlineEnd: 1,
    borderInlineEndWidth: 1,
    borderInlineStart: 1,
    borderInlineStartWidth: 1,
    borderInlineWidth: 1,
    borderLeft: 1,
    borderLeftWidth: 1,
    borderRadius: 1,
    borderRight: 1,
    borderRightWidth: 1,
    borderSpacing: 1,
    borderStartEndRadius: 1,
    borderStartStartRadius: 1,
    borderTop: 1,
    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderTopWidth: 1,
    borderWidth: 1,
    bottom: 1,
    columnGap: 1,
    columnRule: 1,
    columnRuleWidth: 1,
    columnWidth: 1,
    containIntrinsicSize: 1,
    flexBasis: 1,
    fontSize: 1,
    gap: 1,
    gridAutoColumns: 1,
    gridAutoRows: 1,
    gridTemplateColumns: 1,
    gridTemplateRows: 1,
    height: 1,
    inlineSize: 1,
    inset: 1,
    insetBlock: 1,
    insetBlockEnd: 1,
    insetBlockStart: 1,
    insetInline: 1,
    insetInlineEnd: 1,
    insetInlineStart: 1,
    left: 1,
    letterSpacing: 1,
    margin: 1,
    marginBlock: 1,
    marginBlockEnd: 1,
    marginBlockStart: 1,
    marginBottom: 1,
    marginInline: 1,
    marginInlineEnd: 1,
    marginInlineStart: 1,
    marginLeft: 1,
    marginRight: 1,
    marginTop: 1,
    maxBlockSize: 1,
    maxHeight: 1,
    maxInlineSize: 1,
    maxWidth: 1,
    minBlockSize: 1,
    minHeight: 1,
    minInlineSize: 1,
    minWidth: 1,
    offsetDistance: 1,
    offsetRotate: 1,
    outline: 1,
    outlineOffset: 1,
    outlineWidth: 1,
    overflowClipMargin: 1,
    padding: 1,
    paddingBlock: 1,
    paddingBlockEnd: 1,
    paddingBlockStart: 1,
    paddingBottom: 1,
    paddingInline: 1,
    paddingInlineEnd: 1,
    paddingInlineStart: 1,
    paddingLeft: 1,
    paddingRight: 1,
    paddingTop: 1,
    perspective: 1,
    right: 1,
    rowGap: 1,
    scrollMargin: 1,
    scrollMarginBlock: 1,
    scrollMarginBlockEnd: 1,
    scrollMarginBlockStart: 1,
    scrollMarginBottom: 1,
    scrollMarginInline: 1,
    scrollMarginInlineEnd: 1,
    scrollMarginInlineStart: 1,
    scrollMarginLeft: 1,
    scrollMarginRight: 1,
    scrollMarginTop: 1,
    scrollPadding: 1,
    scrollPaddingBlock: 1,
    scrollPaddingBlockEnd: 1,
    scrollPaddingBlockStart: 1,
    scrollPaddingBottom: 1,
    scrollPaddingInline: 1,
    scrollPaddingInlineEnd: 1,
    scrollPaddingInlineStart: 1,
    scrollPaddingLeft: 1,
    scrollPaddingRight: 1,
    scrollPaddingTop: 1,
    shapeMargin: 1,
    textDecoration: 1,
    textDecorationThickness: 1,
    textIndent: 1,
    textUnderlineOffset: 1,
    top: 1,
    transitionDelay: 1,
    transitionDuration: 1,
    verticalAlign: 1,
    width: 1,
    wordSpacing: 1
}, z = (e)=>String.fromCharCode(e + (e > 25 ? 39 : 97)), W = (e)=>((e)=>{
        let t, n = "";
        for(t = Math.abs(e); t > 52; t = t / 52 | 0)n = z(t % 52) + n;
        return z(t % 52) + n;
    })(((e, t)=>{
        let n = t.length;
        for(; n;)e = 33 * e ^ t.charCodeAt(--n);
        return e;
    })(5381, JSON.stringify(e)) >>> 0), j = [
    "themed",
    "global",
    "styled",
    "onevar",
    "resonevar",
    "allvar",
    "inline"
], E = (e)=>{
    if (e.href && !e.href.startsWith(location.origin)) return !1;
    try {
        return !!e.cssRules;
    } catch (e) {
        return !1;
    }
}, T = (e)=>{
    let t;
    const n = ()=>{
        const { cssRules: e } = t.sheet;
        return [].map.call(e, (n, r)=>{
            const { cssText: i } = n;
            let o = "";
            if (i.startsWith("--sxs")) return "";
            if (e[r - 1] && (o = e[r - 1].cssText).startsWith("--sxs")) {
                if (!n.cssRules.length) return "";
                for(const e in t.rules)if (t.rules[e].group === n) return `--sxs{--sxs:${[
                    ...t.rules[e].cache
                ].join(" ")}}${i}`;
                return n.cssRules.length ? `${o}${i}` : "";
            }
            return i;
        }).join("");
    }, r = ()=>{
        if (t) {
            const { rules: e, sheet: n } = t;
            if (!n.deleteRule) {
                for(; 3 === Object(Object(n.cssRules)[0]).type;)n.cssRules.splice(0, 1);
                n.cssRules = [];
            }
            for(const t in e)delete e[t];
        }
        const i = Object(e).styleSheets || [];
        for (const e of i)if (E(e)) {
            for(let i = 0, o = e.cssRules; o[i]; ++i){
                const l = Object(o[i]);
                if (1 !== l.type) continue;
                const s = Object(o[i + 1]);
                if (4 !== s.type) continue;
                ++i;
                const { cssText: a } = l;
                if (!a.startsWith("--sxs")) continue;
                const c = a.slice(14, -3).trim().split(/\s+/), d = j[c[0]];
                d && (t || (t = {
                    sheet: e,
                    reset: r,
                    rules: {},
                    toString: n
                }), t.rules[d] = {
                    group: s,
                    index: i,
                    cache: new Set(c)
                });
            }
            if (t) break;
        }
        if (!t) {
            const i = (e, t)=>({
                    type: t,
                    cssRules: [],
                    insertRule (e, t) {
                        this.cssRules.splice(t, 0, i(e, {
                            import: 3,
                            undefined: 1
                        }[(e.toLowerCase().match(/^@([a-z]+)/) || [])[1]] || 4));
                    },
                    get cssText () {
                        return "@media{}" === e ? `@media{${[].map.call(this.cssRules, (e)=>e.cssText).join("")}}` : e;
                    }
                });
            t = {
                sheet: e ? (e.head || e).appendChild(document.createElement("style")).sheet : i("", "text/css"),
                rules: {},
                reset: r,
                toString: n
            };
        }
        const { sheet: o, rules: l } = t;
        for(let e = j.length - 1; e >= 0; --e){
            const t = j[e];
            if (!l[t]) {
                const n = j[e + 1], r = l[n] ? l[n].index : o.cssRules.length;
                o.insertRule("@media{}", r), o.insertRule(`--sxs{--sxs:${e}}`, r), l[t] = {
                    group: o.cssRules[r + 1],
                    index: r,
                    cache: new Set([
                        e
                    ])
                };
            }
            v(l[t]);
        }
    };
    return r(), t;
}, v = (e)=>{
    const t = e.group;
    let n = t.cssRules.length;
    e.apply = (e)=>{
        try {
            t.insertRule(e, n), ++n;
        } catch (e) {}
    };
}, M = Symbol(), w = l(), C = (e, t)=>w(e, ()=>(...n)=>{
            let r = {
                type: null,
                composers: new Set
            };
            for (const t of n)if (null != t) if (t[s]) {
                null == r.type && (r.type = t[s].type);
                for (const e of t[s].composers)r.composers.add(e);
            } else t.constructor !== Object || t.$$typeof ? null == r.type && (r.type = t) : r.composers.add(P(t, e));
            return null == r.type && (r.type = "span"), r.composers.size || r.composers.add([
                "PJLV",
                {},
                [],
                [],
                {},
                []
            ]), L(e, r, t);
        }), P = ({ variants: e, compoundVariants: t, defaultVariants: n, ...r }, i)=>{
    const o = `${k(i.prefix)}c-${W(r)}`, l = [], s = [], a = Object.create(null), g = [];
    for(const e in n)a[e] = String(n[e]);
    if ("object" == typeof e && e) for(const t in e){
        p = a, u = t, d.call(p, u) || (a[t] = "undefined");
        const n = e[t];
        for(const e in n){
            const r = {
                [t]: String(e)
            };
            "undefined" === String(e) && g.push(t);
            const i = n[e], o = [
                r,
                i,
                !c(i)
            ];
            l.push(o);
        }
    }
    var p, u;
    if ("object" == typeof t && t) for (const e of t){
        let { css: t, ...n } = e;
        t = "object" == typeof t && t || {};
        for(const e in n)n[e] = String(n[e]);
        const r = [
            n,
            t,
            !c(t)
        ];
        s.push(r);
    }
    return [
        o,
        r,
        l,
        s,
        a,
        g
    ];
}, L = (e, t, n)=>{
    const [r, i, o, l] = O(t.composers), c = "function" == typeof t.type || t.type.$$typeof ? ((e)=>{
        function t() {
            for(let n = 0; n < t[M].length; n++){
                const [r, i] = t[M][n];
                e.rules[r].apply(i);
            }
            return t[M] = [], null;
        }
        return t[M] = [], t.rules = {}, j.forEach((e)=>t.rules[e] = {
                apply: (n)=>t[M].push([
                        e,
                        n
                    ])
            }), t;
    })(n) : null, d = (c || n).rules, g = `.${r}${i.length > 1 ? `:where(.${i.slice(1).join(".")})` : ""}`, p = (s)=>{
        s = "object" == typeof s && s || D;
        const { css: a, ...p } = s, u = {};
        for(const e in o)if (delete p[e], e in s) {
            let t = s[e];
            "object" == typeof t && t ? u[e] = {
                "@initial": o[e],
                ...t
            } : (t = String(t), u[e] = "undefined" !== t || l.has(e) ? t : o[e]);
        } else u[e] = o[e];
        const h = new Set([
            ...i
        ]);
        for (const [r, i, o, l] of t.composers){
            n.rules.styled.cache.has(r) || (n.rules.styled.cache.add(r), x(i, [
                `.${r}`
            ], [], e, (e)=>{
                d.styled.apply(e);
            }));
            const t = A(o, u, e.media), s = A(l, u, e.media, !0);
            for (const i of t)if (void 0 !== i) for (const [t, o, l] of i){
                const i = `${r}-${W(o)}-${t}`;
                h.add(i);
                const s = (l ? n.rules.resonevar : n.rules.onevar).cache, a = l ? d.resonevar : d.onevar;
                s.has(i) || (s.add(i), x(o, [
                    `.${i}`
                ], [], e, (e)=>{
                    a.apply(e);
                }));
            }
            for (const t of s)if (void 0 !== t) for (const [i, o] of t){
                const t = `${r}-${W(o)}-${i}`;
                h.add(t), n.rules.allvar.cache.has(t) || (n.rules.allvar.cache.add(t), x(o, [
                    `.${t}`
                ], [], e, (e)=>{
                    d.allvar.apply(e);
                }));
            }
        }
        if ("object" == typeof a && a) {
            const t = `${r}-i${W(a)}-css`;
            h.add(t), n.rules.inline.cache.has(t) || (n.rules.inline.cache.add(t), x(a, [
                `.${t}`
            ], [], e, (e)=>{
                d.inline.apply(e);
            }));
        }
        for (const e of String(s.className || "").trim().split(/\s+/))e && h.add(e);
        const f = p.className = [
            ...h
        ].join(" ");
        return {
            type: t.type,
            className: f,
            selector: g,
            props: p,
            toString: ()=>f,
            deferredInjector: c
        };
    };
    return a(p, {
        className: r,
        selector: g,
        [s]: t,
        toString: ()=>(n.rules.styled.cache.has(r) || p(), r)
    });
}, O = (e)=>{
    let t = "";
    const n = [], r = {}, i = [];
    for (const [o, , , , l, s] of e){
        "" === t && (t = o), n.push(o), i.push(...s);
        for(const e in l){
            const t = l[e];
            (void 0 === r[e] || "undefined" !== t || s.includes(t)) && (r[e] = t);
        }
    }
    return [
        t,
        n,
        r,
        new Set(i)
    ];
}, A = (e, t, n, r)=>{
    const i = [];
    e: for (let [o, l, s] of e){
        if (s) continue;
        let e, a = 0, c = !1;
        for(e in o){
            const r = o[e];
            let i = t[e];
            if (i !== r) {
                if ("object" != typeof i || !i) continue e;
                {
                    let e, t, o = 0;
                    for(const l in i){
                        if (r === String(i[l])) {
                            if ("@initial" !== l) {
                                const e = l.slice(1);
                                (t = t || []).push(e in n ? n[e] : l.replace(/^@media ?/, "")), c = !0;
                            }
                            a += o, e = !0;
                        }
                        ++o;
                    }
                    if (t && t.length && (l = {
                        ["@media " + t.join(", ")]: l
                    }), !e) continue e;
                }
            }
        }
        (i[a] = i[a] || []).push([
            r ? "cv" : `${e}-${o[e]}`,
            l,
            c
        ]);
    }
    return i;
}, D = {}, H = l(), N = (e, t)=>H(e, ()=>(...n)=>{
            const r = ()=>{
                for (let r of n){
                    r = "object" == typeof r && r || {};
                    let n = W(r);
                    if (!t.rules.global.cache.has(n)) {
                        if (t.rules.global.cache.add(n), "@import" in r) {
                            let e = [].indexOf.call(t.sheet.cssRules, t.rules.themed.group) - 1;
                            for (let n of [].concat(r["@import"]))n = n.includes('"') || n.includes("'") ? n : `"${n}"`, t.sheet.insertRule(`@import ${n};`, e++);
                            delete r["@import"];
                        }
                        x(r, [], [], e, (e)=>{
                            t.rules.global.apply(e);
                        });
                    }
                }
                return "";
            };
            return a(r, {
                toString: r
            });
        }), V = l(), G = (e, t)=>V(e, ()=>(n)=>{
            const r = `${k(e.prefix)}k-${W(n)}`, i = ()=>{
                if (!t.rules.global.cache.has(r)) {
                    t.rules.global.cache.add(r);
                    const i = [];
                    x(n, [], [], e, (e)=>i.push(e));
                    const o = `@keyframes ${r}{${i.join("")}}`;
                    t.rules.global.apply(o);
                }
                return r;
            };
            return a(i, {
                get name () {
                    return i();
                },
                toString: i
            });
        }), F = class {
    constructor(e, t, n, r){
        this.token = null == e ? "" : String(e), this.value = null == t ? "" : String(t), this.scale = null == n ? "" : String(n), this.prefix = null == r ? "" : String(r);
    }
    get computedValue() {
        return "var(" + this.variable + ")";
    }
    get variable() {
        return "--" + k(this.prefix) + k(this.scale) + this.token;
    }
    toString() {
        return this.computedValue;
    }
}, J = l(), U = (e, t)=>J(e, ()=>(n, r)=>{
            r = "object" == typeof n && n || Object(r);
            const i = `.${n = (n = "string" == typeof n ? n : "") || `${k(e.prefix)}t-${W(r)}`}`, o = {}, l = [];
            for(const t in r){
                o[t] = {};
                for(const n in r[t]){
                    const i = `--${k(e.prefix)}${t}-${n}`, s = y(String(r[t][n]), e.prefix, t);
                    o[t][n] = new F(n, s, t, e.prefix), l.push(`${i}:${s}`);
                }
            }
            const s = ()=>{
                if (l.length && !t.rules.themed.cache.has(n)) {
                    t.rules.themed.cache.add(n);
                    const i = `${r === e.theme ? ":root," : ""}.${n}{${l.join(";")}}`;
                    t.rules.themed.apply(i);
                }
                return n;
            };
            return {
                ...o,
                get className () {
                    return s();
                },
                selector: i,
                toString: s
            };
        }), Z = l(), X = (e)=>{
    let t = !1;
    const n = Z(e, (e)=>{
        t = !0;
        const n = "prefix" in (e = "object" == typeof e && e || {}) ? String(e.prefix) : "", r = "object" == typeof e.media && e.media || {}, o = "object" == typeof e.root ? e.root || null : globalThis.document || null, l = "object" == typeof e.theme && e.theme || {}, s = {
            prefix: n,
            media: r,
            theme: l,
            themeMap: "object" == typeof e.themeMap && e.themeMap || {
                ...i
            },
            utils: "object" == typeof e.utils && e.utils || {}
        }, a = T(o), c = {
            css: C(s, a),
            globalCss: N(s, a),
            keyframes: G(s, a),
            createTheme: U(s, a),
            reset () {
                a.reset(), c.theme.toString();
            },
            theme: {},
            sheet: a,
            config: s,
            prefix: n,
            getCssText: a.toString,
            toString: a.toString
        };
        return String(c.theme = c.createTheme(l)), c;
    });
    return t || n.reset(), n;
}, Y = ()=>e || (e = X()), q = (...e)=>Y().createTheme(...e), K = (...e)=>Y().globalCss(...e), Q = (...e)=>Y().keyframes(...e), _ = (...e)=>Y().css(...e);
;
 //# sourceMappingUrl=index.map
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@supabase/auth-ui-shared/dist/index.mjs [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

// src/theming/defaultThemes.ts
__turbopack_context__.s([
    "CLASS_NAMES",
    ()=>CLASS_NAMES,
    "PREPENDED_CLASS_NAMES",
    ()=>PREPENDED_CLASS_NAMES,
    "SocialLayouts",
    ()=>SocialLayouts,
    "ThemeMinimal",
    ()=>ThemeMinimal,
    "ThemeSupa",
    ()=>ThemeSupa,
    "VIEWS",
    ()=>VIEWS,
    "darkThemes",
    ()=>darkThemes,
    "en",
    ()=>en_default,
    "generateClassNames",
    ()=>generateClassNames,
    "merge",
    ()=>merge,
    "minimal",
    ()=>minimal,
    "supabase",
    ()=>supabase,
    "template",
    ()=>template
]);
var ThemeSupa = {
    default: {
        colors: {
            brand: "hsl(153 60.0% 53.0%)",
            brandAccent: "hsl(154 54.8% 45.1%)",
            brandButtonText: "white",
            defaultButtonBackground: "white",
            defaultButtonBackgroundHover: "#eaeaea",
            defaultButtonBorder: "lightgray",
            defaultButtonText: "gray",
            dividerBackground: "#eaeaea",
            inputBackground: "transparent",
            inputBorder: "lightgray",
            inputBorderHover: "gray",
            inputBorderFocus: "gray",
            inputText: "black",
            inputLabelText: "gray",
            inputPlaceholder: "darkgray",
            messageText: "#2b805a",
            messageBackground: "#e7fcf1",
            messageBorder: "#d0f3e1",
            messageTextDanger: "#ff6369",
            messageBackgroundDanger: "#fff8f8",
            messageBorderDanger: "#822025",
            anchorTextColor: "gray",
            anchorTextHoverColor: "darkgray"
        },
        space: {
            spaceSmall: "4px",
            spaceMedium: "8px",
            spaceLarge: "16px",
            labelBottomMargin: "8px",
            anchorBottomMargin: "4px",
            emailInputSpacing: "4px",
            socialAuthSpacing: "4px",
            buttonPadding: "10px 15px",
            inputPadding: "10px 15px"
        },
        fontSizes: {
            baseBodySize: "13px",
            baseInputSize: "14px",
            baseLabelSize: "14px",
            baseButtonSize: "14px"
        },
        fonts: {
            bodyFontFamily: `ui-sans-serif, sans-serif`,
            buttonFontFamily: `ui-sans-serif, sans-serif`,
            inputFontFamily: `ui-sans-serif, sans-serif`,
            labelFontFamily: `ui-sans-serif, sans-serif`
        },
        // fontWeights: {},
        // lineHeights: {},
        // letterSpacings: {},
        // sizes: {},
        borderWidths: {
            buttonBorderWidth: "1px",
            inputBorderWidth: "1px"
        },
        // borderStyles: {},
        radii: {
            borderRadiusButton: "4px",
            buttonBorderRadius: "4px",
            inputBorderRadius: "4px"
        }
    },
    dark: {
        colors: {
            brandButtonText: "white",
            defaultButtonBackground: "#2e2e2e",
            defaultButtonBackgroundHover: "#3e3e3e",
            defaultButtonBorder: "#3e3e3e",
            defaultButtonText: "white",
            dividerBackground: "#2e2e2e",
            inputBackground: "#1e1e1e",
            inputBorder: "#3e3e3e",
            inputBorderHover: "gray",
            inputBorderFocus: "gray",
            inputText: "white",
            inputPlaceholder: "darkgray",
            messageText: "#85e0b7",
            messageBackground: "#072719",
            messageBorder: "#2b805a",
            messageBackgroundDanger: "#1f1315"
        }
    }
};
var ThemeMinimal = {
    default: {
        colors: {
            brand: "black",
            brandAccent: "#333333",
            brandButtonText: "white",
            defaultButtonBackground: "white",
            defaultButtonBorder: "lightgray",
            defaultButtonText: "gray",
            dividerBackground: "#eaeaea",
            inputBackground: "transparent",
            inputBorder: "lightgray",
            inputText: "black",
            inputPlaceholder: "darkgray",
            messageText: "#2b805a",
            messageBackground: "#e7fcf1",
            messageBorder: "#d0f3e1",
            messageTextDanger: "#ff6369",
            messageBackgroundDanger: "#fff8f8",
            messageBorderDanger: "#822025"
        },
        space: {
            spaceSmall: "4px",
            spaceMedium: "8px",
            spaceLarge: "16px"
        },
        fontSizes: {
            baseInputSize: "14px",
            baseLabelSize: "12px"
        },
        fonts: {
            bodyFontFamily: "",
            inputFontFamily: "",
            buttonFontFamily: "",
            labelFontFamily: ""
        },
        // fontWeights: {},
        // lineHeights: {},
        // letterSpacings: {},
        // sizes: {},
        borderWidths: {},
        // borderStyles: {},
        radii: {}
    },
    dark: {
        colors: {
            brand: "white",
            brandAccent: "#afafaf",
            brandButtonText: "black",
            defaultButtonBackground: "#080808",
            defaultButtonBorder: "black",
            defaultButtonText: "white",
            dividerBackground: "black",
            inputBackground: "transparent",
            inputBorder: "gray",
            inputText: "black",
            inputPlaceholder: "darkgray",
            messageText: "#85e0b7",
            messageBackground: "#072719",
            messageBorder: "#2b805a",
            messageBackgroundDanger: "#1f1315"
        }
    }
};
// src/theming/Themes.ts
var supabase = {
    colors: {
        brand: "hsl(153 60.0% 53.0%)",
        brandAccent: "hsl(154 54.8% 45.1%)",
        brandButtonText: "white",
        defaultButtonBackground: "white",
        defaultButtonBackgroundHover: "#eaeaea",
        defaultButtonBorder: "lightgray",
        defaultButtonText: "gray",
        dividerBackground: "#eaeaea",
        inputBackground: "transparent",
        inputBorder: "lightgray",
        inputBorderHover: "gray",
        inputBorderFocus: "gray",
        inputText: "black",
        inputLabelText: "gray",
        inputPlaceholder: "darkgray",
        messageText: "gray",
        messageTextDanger: "red",
        anchorTextColor: "gray",
        anchorTextHoverColor: "darkgray"
    },
    space: {
        spaceSmall: "4px",
        spaceMedium: "8px",
        spaceLarge: "16px",
        labelBottomMargin: "8px",
        anchorBottomMargin: "4px",
        emailInputSpacing: "4px",
        socialAuthSpacing: "4px",
        buttonPadding: "10px 15px",
        inputPadding: "10px 15px"
    },
    fontSizes: {
        baseBodySize: "13px",
        baseInputSize: "14px",
        baseLabelSize: "14px",
        baseButtonSize: "14px"
    },
    fonts: {
        bodyFontFamily: `ui-sans-serif, sans-serif`,
        buttonFontFamily: `ui-sans-serif, sans-serif`,
        inputFontFamily: `ui-sans-serif, sans-serif`,
        labelFontFamily: `ui-sans-serif, sans-serif`
    },
    // fontWeights: {},
    // lineHeights: {},
    // letterSpacings: {},
    // sizes: {},
    borderWidths: {
        buttonBorderWidth: "1px",
        inputBorderWidth: "1px"
    },
    // borderStyles: {},
    radii: {
        borderRadiusButton: "4px",
        buttonBorderRadius: "4px",
        inputBorderRadius: "4px"
    }
};
var defaultDarkTheme = {
    colors: {
        brandButtonText: "white",
        defaultButtonBackground: "#2e2e2e",
        defaultButtonBackgroundHover: "#3e3e3e",
        defaultButtonBorder: "#3e3e3e",
        defaultButtonText: "white",
        dividerBackground: "#2e2e2e",
        inputBackground: "#1e1e1e",
        inputBorder: "#3e3e3e",
        inputBorderHover: "gray",
        inputBorderFocus: "gray",
        inputText: "white",
        inputPlaceholder: "darkgray"
    }
};
var minimal = {
    colors: {
        brand: "black",
        brandAccent: "#333333",
        brandButtonText: "white",
        defaultButtonBackground: "white",
        defaultButtonBorder: "lightgray",
        defaultButtonText: "gray",
        dividerBackground: "#eaeaea",
        inputBackground: "transparent",
        inputBorder: "lightgray",
        inputText: "black",
        inputPlaceholder: "darkgray"
    },
    space: {
        spaceSmall: "4px",
        spaceMedium: "8px",
        spaceLarge: "16px"
    },
    fontSizes: {
        baseInputSize: "14px",
        baseLabelSize: "12px"
    },
    fonts: {
        bodyFontFamily: "",
        inputFontFamily: "",
        buttonFontFamily: "",
        labelFontFamily: ""
    },
    // fontWeights: {},
    // lineHeights: {},
    // letterSpacings: {},
    // sizes: {},
    borderWidths: {},
    // borderStyles: {},
    radii: {}
};
var minimalDark = {
    colors: {
        brand: "white",
        brandAccent: "#afafaf",
        brandButtonText: "black",
        defaultButtonBackground: "#080808",
        defaultButtonBorder: "black",
        defaultButtonText: "white",
        dividerBackground: "black",
        inputBackground: "transparent",
        inputBorder: "gray",
        inputText: "black",
        inputPlaceholder: "darkgray"
    }
};
var darkThemes = {
    supabase: defaultDarkTheme,
    minimal: minimalDark
};
// src/constants.ts
var VIEWS = {
    SIGN_IN: "sign_in",
    SIGN_UP: "sign_up",
    FORGOTTEN_PASSWORD: "forgotten_password",
    MAGIC_LINK: "magic_link",
    UPDATE_PASSWORD: "update_password",
    VERIFY_OTP: "verify_otp"
};
var PREPENDED_CLASS_NAMES = "supabase-auth-ui";
var CLASS_NAMES = {
    // interfaces
    ROOT: "root",
    SIGN_IN: VIEWS.SIGN_IN,
    SIGN_UP: VIEWS.SIGN_UP,
    FORGOTTEN_PASSWORD: VIEWS.FORGOTTEN_PASSWORD,
    MAGIC_LINK: VIEWS.MAGIC_LINK,
    UPDATE_PASSWORD: VIEWS.UPDATE_PASSWORD,
    // ui
    anchor: "ui-anchor",
    button: "ui-button",
    container: "ui-container",
    divider: "ui-divider",
    input: "ui-input",
    label: "ui-label",
    loader: "ui-loader",
    message: "ui-message"
};
// src/theming/utils.ts
function generateClassNames(classNameKey, defaultStyles, appearance) {
    var _a, _b;
    const classNames = [];
    const className = CLASS_NAMES[classNameKey];
    classNames.push((appearance == null ? void 0 : appearance.prependedClassName) ? (appearance == null ? void 0 : appearance.prependedClassName) + "_" + className : PREPENDED_CLASS_NAMES + "_" + className);
    if ((_a = appearance == null ? void 0 : appearance.className) == null ? void 0 : _a[classNameKey]) {
        classNames.push((_b = appearance == null ? void 0 : appearance.className) == null ? void 0 : _b[classNameKey]);
    }
    if ((appearance == null ? void 0 : appearance.extend) === void 0 || (appearance == null ? void 0 : appearance.extend) === true) {
        classNames.push(defaultStyles);
    }
    return classNames;
}
// src/types.ts
var SocialLayouts = /* @__PURE__ */ ((SocialLayouts2)=>{
    SocialLayouts2[SocialLayouts2["horizontal"] = 0] = "horizontal";
    SocialLayouts2[SocialLayouts2["vertical"] = 1] = "vertical";
    return SocialLayouts2;
})(SocialLayouts || {});
// src/utils.ts
function value(src, next) {
    let k;
    if (src && next && typeof src === "object" && typeof next === "object") {
        if (Array.isArray(next)) {
            for(k = 0; k < next.length; k++){
                src[k] = value(src[k], next[k]);
            }
        } else {
            for(k in next){
                src[k] = value(src[k], next[k]);
            }
        }
        return src;
    }
    return next;
}
function merge(target, ...args) {
    let len = args.length;
    for(let i = 0; i < len; i++){
        target = value(target, args[i]);
    }
    return target;
}
function template(string, data) {
    return string.replace(/{{(\w+)}}/g, (placeholderWithDelimiters, placeholderWithoutDelimiters)=>data.hasOwnProperty(placeholderWithoutDelimiters) ? data[placeholderWithoutDelimiters] : placeholderWithDelimiters);
}
// src/localization/en.json
var en_default = {
    sign_up: {
        email_label: "Email address",
        password_label: "Create a Password",
        email_input_placeholder: "Your email address",
        password_input_placeholder: "Your password",
        button_label: "Sign up",
        loading_button_label: "Signing up ...",
        social_provider_text: "Sign in with {{provider}}",
        link_text: "Don't have an account? Sign up",
        confirmation_text: "Check your email for the confirmation link"
    },
    sign_in: {
        email_label: "Email address",
        password_label: "Your Password",
        email_input_placeholder: "Your email address",
        password_input_placeholder: "Your password",
        button_label: "Sign in",
        loading_button_label: "Signing in ...",
        social_provider_text: "Sign in with {{provider}}",
        link_text: "Already have an account? Sign in"
    },
    magic_link: {
        email_input_label: "Email address",
        email_input_placeholder: "Your email address",
        button_label: "Send Magic Link",
        loading_button_label: "Sending Magic Link ...",
        link_text: "Send a magic link email",
        confirmation_text: "Check your email for the magic link"
    },
    forgotten_password: {
        email_label: "Email address",
        password_label: "Your Password",
        email_input_placeholder: "Your email address",
        button_label: "Send reset password instructions",
        loading_button_label: "Sending reset instructions ...",
        link_text: "Forgot your password?",
        confirmation_text: "Check your email for the password reset link"
    },
    update_password: {
        password_label: "New password",
        password_input_placeholder: "Your new password",
        button_label: "Update password",
        loading_button_label: "Updating password ...",
        confirmation_text: "Your password has been updated"
    },
    verify_otp: {
        email_input_label: "Email address",
        email_input_placeholder: "Your email address",
        phone_input_label: "Phone number",
        phone_input_placeholder: "Your phone number",
        token_input_label: "Token",
        token_input_placeholder: "Your Otp token",
        button_label: "Verify token",
        loading_button_label: "Signing in ..."
    }
};
;
 //# sourceMappingURL=index.mjs.map
}),
"[project]/Desktop/Progrize_landing-main/node_modules/@supabase/auth-ui-react/dist/index.es.js [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "Auth",
    ()=>S,
    "AuthCard",
    ()=>j1,
    "ForgottenPassword",
    ()=>Q1,
    "MagicLink",
    ()=>Y1,
    "SignIn",
    ()=>K1,
    "SignUp",
    ()=>q1,
    "SocialAuth",
    ()=>J1,
    "UpdatePassword",
    ()=>X1,
    "VerifyOtp",
    ()=>e0
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$stitches$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@stitches/core/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/@supabase/auth-ui-shared/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/Desktop/Progrize_landing-main/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
;
;
;
const g1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$stitches$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"])({
    fontFamily: "$bodyFontFamily",
    fontSize: "$baseBodySize",
    marginBottom: "$anchorBottomMargin",
    color: "$anchorTextColor",
    display: "block",
    textAlign: "center",
    textDecoration: "underline",
    "&:hover": {
        color: "$anchorTextHoverColor"
    }
}), V = ({ children: t, appearance: l, ...n })=>{
    var o;
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateClassNames"])("anchor", g1(), l);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("a", {
        ...n,
        style: (o = l == null ? void 0 : l.style) == null ? void 0 : o.anchor,
        className: r.join(" ")
    }, t);
}, h1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$stitches$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"])({
    fontFamily: "$buttonFontFamily",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    borderRadius: "$borderRadiusButton",
    fontSize: "$baseButtonSize",
    padding: "$buttonPadding",
    cursor: "pointer",
    borderWidth: "$buttonBorderWidth",
    borderStyle: "solid",
    width: "100%",
    transitionProperty: "background-color",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "100ms",
    "&:disabled": {
        opacity: 0.7,
        cursor: "unset"
    },
    variants: {
        color: {
            default: {
                backgroundColor: "$defaultButtonBackground",
                color: "$defaultButtonText",
                borderColor: "$defaultButtonBorder",
                "&:hover:not(:disabled)": {
                    backgroundColor: "$defaultButtonBackgroundHover"
                }
            },
            primary: {
                backgroundColor: "$brand",
                color: "$brandButtonText",
                borderColor: "$brandAccent",
                "&:hover:not(:disabled)": {
                    backgroundColor: "$brandAccent"
                }
            }
        }
    }
}), U = ({ children: t, color: l = "default", appearance: n, icon: r, loading: o = !1, ...v })=>{
    var C;
    const E = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateClassNames"])("button", h1({
        color: l
    }), n);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("button", {
        ...v,
        style: (C = n == null ? void 0 : n.style) == null ? void 0 : C.button,
        className: E.join(" "),
        disabled: o
    }, r, t);
}, f1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$stitches$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"])({
    display: "flex",
    gap: "4px",
    variants: {
        direction: {
            horizontal: {
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(48px, 1fr))"
            },
            vertical: {
                flexDirection: "column",
                margin: "8px 0"
            }
        },
        gap: {
            small: {
                gap: "4px"
            },
            medium: {
                gap: "8px"
            },
            large: {
                gap: "16px"
            }
        }
    }
}), N = ({ children: t, appearance: l, ...n })=>{
    var o;
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateClassNames"])("container", f1({
        direction: n.direction,
        gap: n.gap
    }), l);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...n,
        style: (o = l == null ? void 0 : l.style) == null ? void 0 : o.container,
        className: r.join(" ")
    }, t);
}, E1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$stitches$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"])({
    background: "$dividerBackground",
    display: "block",
    margin: "16px 0",
    height: "1px",
    width: "100%"
}), C1 = ({ children: t, appearance: l, ...n })=>{
    var o;
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateClassNames"])("divider", E1(), l);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        ...n,
        style: (o = l == null ? void 0 : l.style) == null ? void 0 : o.divider,
        className: r.join(" ")
    });
}, w1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$stitches$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"])({
    fontFamily: "$inputFontFamily",
    background: "$inputBackground",
    borderRadius: "$inputBorderRadius",
    padding: "$inputPadding",
    cursor: "text",
    borderWidth: "$inputBorderWidth",
    borderColor: "$inputBorder",
    borderStyle: "solid",
    fontSize: "$baseInputSize",
    width: "100%",
    color: "$inputText",
    boxSizing: "border-box",
    "&:hover": {
        borderColor: "$inputBorderHover",
        outline: "none"
    },
    "&:focus": {
        borderColor: "$inputBorderFocus",
        outline: "none"
    },
    "&::placeholder": {
        color: "$inputPlaceholder",
        letterSpacing: "initial"
    },
    transitionProperty: "background-color, border",
    transitionTimingFunction: "cubic-bezier(0.4, 0, 0.2, 1)",
    transitionDuration: "100ms",
    variants: {
        type: {
            default: {
                letterSpacing: "0px"
            },
            password: {
                letterSpacing: "0px"
            }
        }
    }
}), D = ({ children: t, appearance: l, ...n })=>{
    var o;
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateClassNames"])("input", w1({
        type: n.type === "password" ? "password" : "default"
    }), l);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("input", {
        ...n,
        style: (o = l == null ? void 0 : l.style) == null ? void 0 : o.input,
        className: r.join(" ")
    }, t);
}, v1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$stitches$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"])({
    fontFamily: "$labelFontFamily",
    fontSize: "$baseLabelSize",
    marginBottom: "$labelBottomMargin",
    color: "$inputLabelText",
    display: "block"
}), H = ({ children: t, appearance: l, ...n })=>{
    var o;
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateClassNames"])("label", v1(), l);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("label", {
        ...n,
        style: (o = l == null ? void 0 : l.style) == null ? void 0 : o.label,
        className: r.join(" ")
    }, t);
}, x1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$stitches$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"])({
    fontFamily: "$bodyFontFamily",
    fontSize: "$baseInputSize",
    marginBottom: "$labelBottomMargin",
    display: "block",
    textAlign: "center",
    borderRadius: "0.375rem",
    padding: "1.5rem 1rem",
    lineHeight: "1rem",
    color: "$messageText",
    backgroundColor: "$messageBackground",
    border: "1px solid $messageBorder",
    variants: {
        color: {
            danger: {
                color: "$messageTextDanger",
                backgroundColor: "$messageBackgroundDanger",
                border: "1px solid $messageBorderDanger"
            }
        }
    }
}), F = ({ children: t, appearance: l, ...n })=>{
    var o;
    const r = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["generateClassNames"])("message", x1({
        color: n.color
    }), l);
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("span", {
        ...n,
        style: (o = l == null ? void 0 : l.style) == null ? void 0 : o.message,
        className: r.join(" ")
    }, t);
};
function X({ setAuthView: t = ()=>{}, supabaseClient: l, redirectTo: n, i18n: r, appearance: o, showLinks: v = !1 }) {
    var _;
    const [E, C] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), [w, d] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), [i, m] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), [c, y] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1), x = async (h)=>{
        var s, M;
        if (h.preventDefault(), d(""), m(""), y(!0), E.length === 0) {
            d((s = r == null ? void 0 : r.magic_link) == null ? void 0 : s.empty_email_address), y(!1);
            return;
        }
        const { error: g } = await l.auth.signInWithOtp({
            email: E,
            options: {
                emailRedirectTo: n
            }
        });
        g ? d(g.message) : m((M = r == null ? void 0 : r.magic_link) == null ? void 0 : M.confirmation_text), y(!1);
    }, a = r == null ? void 0 : r.magic_link;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        id: "auth-magic-link",
        onSubmit: x
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(N, {
        gap: "large",
        direction: "vertical",
        appearance: o
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(H, {
        htmlFor: "email",
        appearance: o
    }, a == null ? void 0 : a.email_input_label), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(D, {
        id: "email",
        name: "email",
        type: "email",
        autoFocus: !0,
        placeholder: a == null ? void 0 : a.email_input_placeholder,
        onChange: (h)=>{
            d && d(""), C(h.target.value);
        },
        appearance: o
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(U, {
        color: "primary",
        type: "submit",
        loading: c,
        appearance: o
    }, c ? a == null ? void 0 : a.loading_button_label : a == null ? void 0 : a.button_label), v && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(V, {
        href: "#auth-sign-in",
        onClick: (h)=>{
            h.preventDefault(), t(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIEWS"].SIGN_IN);
        },
        appearance: o
    }, (_ = r == null ? void 0 : r.sign_in) == null ? void 0 : _.link_text), i && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(F, {
        appearance: o
    }, i), w && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(F, {
        color: "danger",
        appearance: o
    }, w)));
}
const L = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$stitches$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"])({
    width: "21px",
    height: "21px"
}), _1 = ({ provider: t })=>t == "google" ? y1() : t == "facebook" ? L1() : t == "twitter" ? b1() : t == "apple" ? p1() : t == "github" ? k1() : t == "gitlab" ? M1() : t == "bitbucket" ? S1() : t == "discord" ? N1() : t == "azure" ? F1() : t == "keycloak" ? z1() : t == "linkedin" ? $1() : t == "notion" ? B1() : t == "slack" ? D1() : t == "spotify" ? H1() : t == "twitch" ? P1() : t == "workos" ? V1() : t == "kakao" ? I1() : null, y1 = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: L(),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        width: "21px",
        height: "21px"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#FFC107",
        d: "M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#FF3D00",
        d: "M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#4CAF50",
        d: "M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#1976D2",
        d: "M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
    })), L1 = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: L(),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        width: "21px",
        height: "21px"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#039be5",
        d: "M24 5A19 19 0 1 0 24 43A19 19 0 1 0 24 5Z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#fff",
        d: "M26.572,29.036h4.917l0.772-4.995h-5.69v-2.73c0-2.075,0.678-3.915,2.619-3.915h3.119v-4.359c-0.548-0.074-1.707-0.236-3.897-0.236c-4.573,0-7.254,2.415-7.254,7.917v3.323h-4.701v4.995h4.701v13.729C22.089,42.905,23.032,43,24,43c0.875,0,1.729-0.08,2.572-0.194V29.036z"
    })), b1 = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: L(),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        width: "21px",
        height: "21px"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#03A9F4",
        d: "M42,12.429c-1.323,0.586-2.746,0.977-4.247,1.162c1.526-0.906,2.7-2.351,3.251-4.058c-1.428,0.837-3.01,1.452-4.693,1.776C34.967,9.884,33.05,9,30.926,9c-4.08,0-7.387,3.278-7.387,7.32c0,0.572,0.067,1.129,0.193,1.67c-6.138-0.308-11.582-3.226-15.224-7.654c-0.64,1.082-1,2.349-1,3.686c0,2.541,1.301,4.778,3.285,6.096c-1.211-0.037-2.351-0.374-3.349-0.914c0,0.022,0,0.055,0,0.086c0,3.551,2.547,6.508,5.923,7.181c-0.617,0.169-1.269,0.263-1.941,0.263c-0.477,0-0.942-0.054-1.392-0.135c0.94,2.902,3.667,5.023,6.898,5.086c-2.528,1.96-5.712,3.134-9.174,3.134c-0.598,0-1.183-0.034-1.761-0.104C9.268,36.786,13.152,38,17.321,38c13.585,0,21.017-11.156,21.017-20.834c0-0.317-0.01-0.633-0.025-0.945C39.763,15.197,41.013,13.905,42,12.429"
    })), p1 = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: L(),
        fill: "gray",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 24 24",
        width: "21px",
        height: "21px"
    }, " ", /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M 15.904297 1.078125 C 15.843359 1.06875 15.774219 1.0746094 15.699219 1.0996094 C 14.699219 1.2996094 13.600391 1.8996094 12.900391 2.5996094 C 12.300391 3.1996094 11.800781 4.1996094 11.800781 5.0996094 C 11.800781 5.2996094 11.999219 5.5 12.199219 5.5 C 13.299219 5.4 14.399609 4.7996094 15.099609 4.0996094 C 15.699609 3.2996094 16.199219 2.4 16.199219 1.5 C 16.199219 1.275 16.087109 1.10625 15.904297 1.078125 z M 16.199219 5.4003906 C 14.399219 5.4003906 13.600391 6.5 12.400391 6.5 C 11.100391 6.5 9.9003906 5.5 8.4003906 5.5 C 6.3003906 5.5 3.0996094 7.4996094 3.0996094 12.099609 C 2.9996094 16.299609 6.8 21 9 21 C 10.3 21 10.600391 20.199219 12.400391 20.199219 C 14.200391 20.199219 14.600391 21 15.900391 21 C 17.400391 21 18.500391 19.399609 19.400391 18.099609 C 19.800391 17.399609 20.100391 17.000391 20.400391 16.400391 C 20.600391 16.000391 20.4 15.600391 20 15.400391 C 17.4 14.100391 16.900781 9.9003906 19.800781 8.4003906 C 20.300781 8.1003906 20.4 7.4992188 20 7.1992188 C 18.9 6.1992187 17.299219 5.4003906 16.199219 5.4003906 z"
    })), k1 = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: L(),
        fill: "gray",
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 30 30",
        width: "21px",
        height: "21px"
    }, " ", /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"
    })), M1 = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: L(),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        width: "21px",
        height: "21px"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#e53935",
        d: "M24 43L16 20 32 20z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#ff7043",
        d: "M24 43L42 20 32 20z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#e53935",
        d: "M37 5L42 20 32 20z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#ffa726",
        d: "M24 43L42 20 45 28z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#ff7043",
        d: "M24 43L6 20 16 20z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#e53935",
        d: "M11 5L6 20 16 20z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#ffa726",
        d: "M24 43L6 20 3 28z"
    })), S1 = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: L(),
        xmlns: "http://www.w3.org/2000/svg",
        width: "512",
        height: "512",
        viewBox: "0 0 62.42 62.42"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("defs", null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("linearGradient", {
        id: "New_Gradient_Swatch_1",
        x1: "64.01",
        y1: "30.27",
        x2: "32.99",
        y2: "54.48",
        gradientUnits: "userSpaceOnUse"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "0.18",
        stopColor: "#0052cc"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "1",
        stopColor: "#2684ff"
    }))), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("title", null, "Bitbucket-blue"), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("g", {
        id: "Layer_2",
        "data-name": "Layer 2"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("g", {
        id: "Blue",
        transform: "translate(0 -3.13)"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M2,6.26A2,2,0,0,0,0,8.58L8.49,60.12a2.72,2.72,0,0,0,2.66,2.27H51.88a2,2,0,0,0,2-1.68L62.37,8.59a2,2,0,0,0-2-2.32ZM37.75,43.51h-13L21.23,25.12H40.9Z",
        fill: "#2684ff"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M59.67,25.12H40.9L37.75,43.51h-13L9.4,61.73a2.71,2.71,0,0,0,1.75.66H51.89a2,2,0,0,0,2-1.68Z",
        fill: "url(#New_Gradient_Swatch_1)"
    })))), N1 = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: L(),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        width: "21px",
        height: "21px"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#536dfe",
        d: "M39.248,10.177c-2.804-1.287-5.812-2.235-8.956-2.778c-0.057-0.01-0.114,0.016-0.144,0.068	c-0.387,0.688-0.815,1.585-1.115,2.291c-3.382-0.506-6.747-0.506-10.059,0c-0.3-0.721-0.744-1.603-1.133-2.291	c-0.03-0.051-0.087-0.077-0.144-0.068c-3.143,0.541-6.15,1.489-8.956,2.778c-0.024,0.01-0.045,0.028-0.059,0.051	c-5.704,8.522-7.267,16.835-6.5,25.044c0.003,0.04,0.026,0.079,0.057,0.103c3.763,2.764,7.409,4.442,10.987,5.554	c0.057,0.017,0.118-0.003,0.154-0.051c0.846-1.156,1.601-2.374,2.248-3.656c0.038-0.075,0.002-0.164-0.076-0.194	c-1.197-0.454-2.336-1.007-3.432-1.636c-0.087-0.051-0.094-0.175-0.014-0.234c0.231-0.173,0.461-0.353,0.682-0.534	c0.04-0.033,0.095-0.04,0.142-0.019c7.201,3.288,14.997,3.288,22.113,0c0.047-0.023,0.102-0.016,0.144,0.017	c0.22,0.182,0.451,0.363,0.683,0.536c0.08,0.059,0.075,0.183-0.012,0.234c-1.096,0.641-2.236,1.182-3.434,1.634	c-0.078,0.03-0.113,0.12-0.075,0.196c0.661,1.28,1.415,2.498,2.246,3.654c0.035,0.049,0.097,0.07,0.154,0.052	c3.595-1.112,7.241-2.79,11.004-5.554c0.033-0.024,0.054-0.061,0.057-0.101c0.917-9.491-1.537-17.735-6.505-25.044	C39.293,10.205,39.272,10.187,39.248,10.177z M16.703,30.273c-2.168,0-3.954-1.99-3.954-4.435s1.752-4.435,3.954-4.435	c2.22,0,3.989,2.008,3.954,4.435C20.658,28.282,18.906,30.273,16.703,30.273z M31.324,30.273c-2.168,0-3.954-1.99-3.954-4.435	s1.752-4.435,3.954-4.435c2.22,0,3.989,2.008,3.954,4.435C35.278,28.282,33.544,30.273,31.324,30.273z"
    })), F1 = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: L(),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        width: "21px",
        height: "21px"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("linearGradient", {
        id: "k8yl7~hDat~FaoWq8WjN6a",
        x1: "-1254.397",
        x2: "-1261.911",
        y1: "877.268",
        y2: "899.466",
        gradientTransform: "translate(1981.75 -1362.063) scale(1.5625)",
        gradientUnits: "userSpaceOnUse"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "0",
        stopColor: "#114a8b"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "1",
        stopColor: "#0669bc"
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "url(#k8yl7~hDat~FaoWq8WjN6a)",
        d: "M17.634,6h11.305L17.203,40.773c-0.247,0.733-0.934,1.226-1.708,1.226H6.697 c-0.994,0-1.8-0.806-1.8-1.8c0-0.196,0.032-0.39,0.094-0.576L15.926,7.227C16.173,6.494,16.86,6,17.634,6L17.634,6z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#0078d4",
        d: "M34.062,29.324H16.135c-0.458-0.001-0.83,0.371-0.831,0.829c0,0.231,0.095,0.451,0.264,0.608 l11.52,10.752C27.423,41.826,27.865,42,28.324,42h10.151L34.062,29.324z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("linearGradient", {
        id: "k8yl7~hDat~FaoWq8WjN6b",
        x1: "-1252.05",
        x2: "-1253.788",
        y1: "887.612",
        y2: "888.2",
        gradientTransform: "translate(1981.75 -1362.063) scale(1.5625)",
        gradientUnits: "userSpaceOnUse"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "0",
        stopOpacity: ".3"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: ".071",
        stopOpacity: ".2"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: ".321",
        stopOpacity: ".1"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: ".623",
        stopOpacity: ".05"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "1",
        stopOpacity: "0"
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "url(#k8yl7~hDat~FaoWq8WjN6b)",
        d: "M17.634,6c-0.783-0.003-1.476,0.504-1.712,1.25L5.005,39.595 c-0.335,0.934,0.151,1.964,1.085,2.299C6.286,41.964,6.493,42,6.702,42h9.026c0.684-0.122,1.25-0.603,1.481-1.259l2.177-6.416 l7.776,7.253c0.326,0.27,0.735,0.419,1.158,0.422h10.114l-4.436-12.676l-12.931,0.003L28.98,6H17.634z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("linearGradient", {
        id: "k8yl7~hDat~FaoWq8WjN6c",
        x1: "-1252.952",
        x2: "-1244.704",
        y1: "876.6",
        y2: "898.575",
        gradientTransform: "translate(1981.75 -1362.063) scale(1.5625)",
        gradientUnits: "userSpaceOnUse"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "0",
        stopColor: "#3ccbf4"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("stop", {
        offset: "1",
        stopColor: "#2892df"
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "url(#k8yl7~hDat~FaoWq8WjN6c)",
        d: "M32.074,7.225C31.827,6.493,31.141,6,30.368,6h-12.6c0.772,0,1.459,0.493,1.705,1.224 l10.935,32.399c0.318,0.942-0.188,1.963-1.13,2.281C29.093,41.968,28.899,42,28.703,42h12.6c0.994,0,1.8-0.806,1.8-1.801 c0-0.196-0.032-0.39-0.095-0.575L32.074,7.225z"
    })), z1 = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: L(),
        width: "512",
        height: "512",
        viewBox: "0 0 512 512",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M472.136 163.959H408.584C407.401 163.959 406.218 163.327 405.666 162.3L354.651 73.6591C354.02 72.632 352.916 72 351.654 72H143.492C142.309 72 141.126 72.632 140.574 73.6591L87.5084 165.618L36.414 254.259C35.862 255.286 35.862 256.55 36.414 257.656L87.5084 346.297L140.495 438.335C141.047 439.362 142.23 440.073 143.413 439.994H351.654C352.837 439.994 354.02 439.362 354.651 438.335L405.745 349.694C406.297 348.667 407.48 347.956 408.663 348.035H472.215C474.344 348.035 476 346.297 476 344.243V167.83C475.921 165.697 474.186 163.959 472.136 163.959ZM228.728 349.694L212.721 377.345C212.485 377.74 212.091 378.135 211.696 378.372C211.223 378.609 210.75 378.767 210.198 378.767H178.422C177.318 378.767 176.293 378.214 175.82 377.187L128.431 294.787L123.779 286.65L106.748 257.498C106.511 257.103 106.353 256.629 106.432 256.076C106.432 255.602 106.59 255.049 106.827 254.654L123.937 224.949L175.899 134.886C176.451 133.938 177.476 133.306 178.501 133.306H210.198C210.75 133.306 211.302 133.464 211.854 133.701C212.248 133.938 212.643 134.254 212.879 134.728L228.886 162.537C229.359 163.485 229.28 164.67 228.728 165.539L177.397 254.654C177.16 255.049 177.081 255.523 177.081 255.918C177.081 256.392 177.239 256.787 177.397 257.182L228.728 346.218C229.438 347.403 229.359 348.667 228.728 349.694V349.694ZM388.083 257.498L371.051 286.65L366.399 294.787L319.011 377.187C318.459 378.135 317.512 378.767 316.409 378.767H284.632C284.08 378.767 283.607 378.609 283.134 378.372C282.74 378.135 282.346 377.819 282.109 377.345L266.103 349.694C265.393 348.667 265.393 347.403 266.024 346.376L317.355 257.34C317.591 256.945 317.67 256.471 317.67 256.076C317.67 255.602 317.513 255.207 317.355 254.812L266.024 165.697C265.472 164.749 265.393 163.643 265.866 162.695L281.873 134.886C282.109 134.491 282.503 134.096 282.898 133.859C283.371 133.543 283.923 133.464 284.553 133.464H316.409C317.512 133.464 318.538 134.017 319.011 135.044L370.972 225.107L388.083 254.812C388.319 255.286 388.477 255.76 388.477 256.234C388.477 256.55 388.319 257.024 388.083 257.498V257.498Z",
        fill: "#008AAA"
    })), $1 = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: L(),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        width: "21px",
        height: "21px"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#0288D1",
        d: "M42,37c0,2.762-2.238,5-5,5H11c-2.761,0-5-2.238-5-5V11c0-2.762,2.239-5,5-5h26c2.762,0,5,2.238,5,5V37z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#FFF",
        d: "M12 19H17V36H12zM14.485 17h-.028C12.965 17 12 15.888 12 14.499 12 13.08 12.995 12 14.514 12c1.521 0 2.458 1.08 2.486 2.499C17 15.887 16.035 17 14.485 17zM36 36h-5v-9.099c0-2.198-1.225-3.698-3.192-3.698-1.501 0-2.313 1.012-2.707 1.99C24.957 25.543 25 26.511 25 27v9h-5V19h5v2.616C25.721 20.5 26.85 19 29.738 19c3.578 0 6.261 2.25 6.261 7.274L36 36 36 36z"
    })), B1 = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: L(),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        width: "21px",
        height: "21px",
        fillRule: "evenodd",
        clipRule: "evenodd"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z",
        clipRule: "evenodd"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#fff",
        fillRule: "evenodd",
        d: "M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619 l23.971-1.387c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463 C13.171,14.718,12.862,15.181,12.862,16.182L12.862,16.182z",
        clipRule: "evenodd"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#424242",
        fillRule: "evenodd",
        d: "M11.553,11.099c1.232,1.001,1.694,0.925,4.008,0.77 l21.812-1.31c0.463,0,0.078-0.461-0.076-0.538l-3.622-2.619c-0.694-0.539-1.619-1.156-3.391-1.002l-21.12,1.54 c-0.77,0.076-0.924,0.461-0.617,0.77L11.553,11.099z M12.862,16.182v22.95c0,1.233,0.616,1.695,2.004,1.619l23.971-1.387 c1.388-0.076,1.543-0.925,1.543-1.927V14.641c0-1-0.385-1.54-1.234-1.463l-25.05,1.463C13.171,14.718,12.862,15.181,12.862,16.182 L12.862,16.182z M36.526,17.413c0.154,0.694,0,1.387-0.695,1.465l-1.155,0.23v16.943c-1.003,0.539-1.928,0.847-2.698,0.847 c-1.234,0-1.543-0.385-2.467-1.54l-7.555-11.86v11.475l2.391,0.539c0,0,0,1.386-1.929,1.386l-5.317,0.308 c-0.154-0.308,0-1.078,0.539-1.232l1.388-0.385V20.418l-1.927-0.154c-0.155-0.694,0.23-1.694,1.31-1.772l5.704-0.385l7.862,12.015 V19.493l-2.005-0.23c-0.154-0.848,0.462-1.464,1.233-1.54L36.526,17.413z M7.389,5.862l21.968-1.618 c2.698-0.231,3.392-0.076,5.087,1.155l7.013,4.929C42.614,11.176,43,11.407,43,12.33v27.032c0,1.694-0.617,2.696-2.775,2.849 l-25.512,1.541c-1.62,0.077-2.391-0.154-3.239-1.232l-5.164-6.7C5.385,34.587,5,33.664,5,32.585V8.556 C5,7.171,5.617,6.015,7.389,5.862z",
        clipRule: "evenodd"
    })), D1 = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: L(),
        xmlns: "http://www.w3.org/2000/svg",
        viewBox: "0 0 48 48",
        width: "21px",
        height: "21px"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#33d375",
        d: "M33,8c0-2.209-1.791-4-4-4s-4,1.791-4,4c0,1.254,0,9.741,0,11c0,2.209,1.791,4,4,4s4-1.791,4-4	C33,17.741,33,9.254,33,8z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#33d375",
        d: "M43,19c0,2.209-1.791,4-4,4c-1.195,0-4,0-4,0s0-2.986,0-4c0-2.209,1.791-4,4-4S43,16.791,43,19z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#40c4ff",
        d: "M8,14c-2.209,0-4,1.791-4,4s1.791,4,4,4c1.254,0,9.741,0,11,0c2.209,0,4-1.791,4-4s-1.791-4-4-4	C17.741,14,9.254,14,8,14z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#40c4ff",
        d: "M19,4c2.209,0,4,1.791,4,4c0,1.195,0,4,0,4s-2.986,0-4,0c-2.209,0-4-1.791-4-4S16.791,4,19,4z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#e91e63",
        d: "M14,39.006C14,41.212,15.791,43,18,43s4-1.788,4-3.994c0-1.252,0-9.727,0-10.984	c0-2.206-1.791-3.994-4-3.994s-4,1.788-4,3.994C14,29.279,14,37.754,14,39.006z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#e91e63",
        d: "M4,28.022c0-2.206,1.791-3.994,4-3.994c1.195,0,4,0,4,0s0,2.981,0,3.994c0,2.206-1.791,3.994-4,3.994	S4,30.228,4,28.022z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#ffc107",
        d: "M39,33c2.209,0,4-1.791,4-4s-1.791-4-4-4c-1.254,0-9.741,0-11,0c-2.209,0-4,1.791-4,4s1.791,4,4,4	C29.258,33,37.746,33,39,33z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#ffc107",
        d: "M28,43c-2.209,0-4-1.791-4-4c0-1.195,0-4,0-4s2.986,0,4,0c2.209,0,4,1.791,4,4S30.209,43,28,43z"
    })), H1 = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: L(),
        width: "512",
        height: "512",
        viewBox: "0 0 512 512",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M255.498 31.0034C131.513 31.0034 31 131.515 31 255.502C31 379.492 131.513 480 255.498 480C379.497 480 480 379.495 480 255.502C480 131.522 379.497 31.0135 255.495 31.0135L255.498 31V31.0034ZM358.453 354.798C354.432 361.391 345.801 363.486 339.204 359.435C286.496 327.237 220.139 319.947 141.993 337.801C134.463 339.516 126.957 334.798 125.24 327.264C123.516 319.731 128.217 312.225 135.767 310.511C221.284 290.972 294.639 299.384 353.816 335.549C360.413 339.596 362.504 348.2 358.453 354.798ZM385.932 293.67C380.864 301.903 370.088 304.503 361.858 299.438C301.512 262.345 209.528 251.602 138.151 273.272C128.893 276.067 119.118 270.851 116.309 261.61C113.521 252.353 118.74 242.597 127.981 239.782C209.512 215.044 310.87 227.026 380.17 269.612C388.4 274.68 391 285.456 385.935 293.676V293.673L385.932 293.67ZM388.293 230.016C315.935 187.039 196.56 183.089 127.479 204.055C116.387 207.42 104.654 201.159 101.293 190.063C97.9326 178.964 104.189 167.241 115.289 163.87C194.59 139.796 326.418 144.446 409.723 193.902C419.722 199.826 422.995 212.71 417.068 222.675C411.168 232.653 398.247 235.943 388.303 230.016H388.293V230.016Z",
        fill: "#1ED760"
    })), P1 = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: L(),
        width: "512",
        height: "512",
        viewBox: "0 0 512 512",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M416 240L352 304H288L232 360V304H160V64H416V240Z",
        fill: "white"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M144 32L64 112V400H160V480L240 400H304L448 256V32H144ZM416 240L352 304H288L232 360V304H160V64H416V240Z",
        fill: "#9146FF"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M368 120H336V216H368V120Z",
        fill: "#9146FF"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M280 120H248V216H280V120Z",
        fill: "#9146FF"
    })), V1 = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: L(),
        width: "512",
        height: "512",
        viewBox: "0 0 512 512",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M33 256.043C33 264.556 35.3159 273.069 39.4845 280.202L117.993 415.493C126.098 429.298 138.373 440.572 153.657 445.634C183.764 455.528 214.797 442.873 229.618 417.333L248.609 384.661L173.806 256.043L252.777 119.831L271.768 87.1591C277.557 77.2654 284.968 69.4424 294 63H285.894H172.185C150.878 63 131.193 74.2742 120.54 92.6812L39.7161 231.884C35.3159 239.016 33 247.53 33 256.043Z",
        fill: "#6363F1"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M480 256.058C480 247.539 477.684 239.021 473.516 231.883L393.849 94.6596C379.028 69.3331 347.995 56.4396 317.888 66.34C302.603 71.4053 290.329 82.6871 282.224 96.5015L264.391 127.354L339.194 256.058L260.223 392.131L241.232 424.825C235.443 434.495 228.032 442.553 219 449H227.106H340.815C362.122 449 381.807 437.718 392.46 419.299L473.284 280.003C477.684 272.866 480 264.577 480 256.058Z",
        fill: "#6363F1"
    })), I1 = ()=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("svg", {
        className: L(),
        xmlns: "http://www.w3.org/2000/svg",
        width: "2500",
        height: "2500",
        viewBox: "0 0 256 256"
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#FFE812",
        d: "M256 236c0 11.046-8.954 20-20 20H20c-11.046 0-20-8.954-20-20V20C0 8.954 8.954 0 20 0h216c11.046 0 20 8.954 20 20v216z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        d: "M128 36C70.562 36 24 72.713 24 118c0 29.279 19.466 54.97 48.748 69.477-1.593 5.494-10.237 35.344-10.581 37.689 0 0-.207 1.762.934 2.434s2.483.15 2.483.15c3.272-.457 37.943-24.811 43.944-29.04 5.995.849 12.168 1.29 18.472 1.29 57.438 0 104-36.712 104-82 0-45.287-46.562-82-104-82z"
    }), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("path", {
        fill: "#FFE812",
        d: "M70.5 146.625c-3.309 0-6-2.57-6-5.73V105.25h-9.362c-3.247 0-5.888-2.636-5.888-5.875s2.642-5.875 5.888-5.875h30.724c3.247 0 5.888 2.636 5.888 5.875s-2.642 5.875-5.888 5.875H76.5v35.645c0 3.16-2.691 5.73-6 5.73zM123.112 146.547c-2.502 0-4.416-1.016-4.993-2.65l-2.971-7.778-18.296-.001-2.973 7.783c-.575 1.631-2.488 2.646-4.99 2.646a9.155 9.155 0 0 1-3.814-.828c-1.654-.763-3.244-2.861-1.422-8.52l14.352-37.776c1.011-2.873 4.082-5.833 7.99-5.922 3.919.088 6.99 3.049 8.003 5.928l14.346 37.759c1.826 5.672.236 7.771-1.418 8.532a9.176 9.176 0 0 1-3.814.827c-.001 0 0 0 0 0zm-11.119-21.056L106 108.466l-5.993 17.025h11.986zM138 145.75c-3.171 0-5.75-2.468-5.75-5.5V99.5c0-3.309 2.748-6 6.125-6s6.125 2.691 6.125 6v35.25h12.75c3.171 0 5.75 2.468 5.75 5.5s-2.579 5.5-5.75 5.5H138zM171.334 146.547c-3.309 0-6-2.691-6-6V99.5c0-3.309 2.691-6 6-6s6 2.691 6 6v12.896l16.74-16.74c.861-.861 2.044-1.335 3.328-1.335 1.498 0 3.002.646 4.129 1.772 1.051 1.05 1.678 2.401 1.764 3.804.087 1.415-.384 2.712-1.324 3.653l-13.673 13.671 14.769 19.566a5.951 5.951 0 0 1 1.152 4.445 5.956 5.956 0 0 1-2.328 3.957 5.94 5.94 0 0 1-3.609 1.211 5.953 5.953 0 0 1-4.793-2.385l-14.071-18.644-2.082 2.082v13.091a6.01 6.01 0 0 1-6.002 6.003z"
    }));
function A1({ supabaseClient: t, socialLayout: l = "vertical", providers: n = [
    "github",
    "google",
    "azure"
], providerScopes: r, queryParams: o, redirectTo: v, onlyThirdPartyProviders: E = !0, view: C = "sign_in", i18n: w, appearance: d }) {
    const [i, m] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1), [c, y] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), x = l === "vertical", a = C === "magic_link" ? "sign_in" : C, _ = async (g)=>{
        m(!0);
        const { error: s } = await t.auth.signInWithOAuth({
            provider: g,
            options: {
                redirectTo: v,
                scopes: r == null ? void 0 : r[g],
                queryParams: o
            }
        });
        s && y(s.message), m(!1);
    };
    function h(g) {
        const s = g.toLowerCase();
        return g.charAt(0).toUpperCase() + s.slice(1);
    }
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, n && n.length > 0 && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].Fragment, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(N, {
        gap: "large",
        direction: "vertical",
        appearance: d
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(N, {
        direction: x ? "vertical" : "horizontal",
        gap: x ? "small" : "medium",
        appearance: d
    }, n.map((g)=>{
        var s;
        return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(U, {
            key: g,
            color: "default",
            loading: i,
            onClick: ()=>_(g),
            appearance: d
        }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(_1, {
            provider: g
        }), x && (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["template"])((s = w == null ? void 0 : w[a]) == null ? void 0 : s.social_provider_text, {
            provider: h(g)
        }));
    }))), !E && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(C1, {
        appearance: d
    })));
}
function Q({ authView: t = "sign_in", defaultEmail: l = "", defaultPassword: n = "", setAuthView: r = ()=>{}, setDefaultEmail: o = (x)=>{}, setDefaultPassword: v = (x)=>{}, supabaseClient: E, showLinks: C = !1, redirectTo: w, additionalData: d, magicLink: i, i18n: m, appearance: c, children: y }) {
    var T, G, Z, j;
    const x = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(!0), [a, _] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(l), [h, g] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(n), [s, M] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), [p, B] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1), [P, A] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>(x.current = !0, _(l), g(n), ()=>{
            x.current = !1;
        }), [
        t
    ]);
    const O = async (k)=>{
        var q;
        switch(k.preventDefault(), M(""), B(!0), t){
            case "sign_in":
                const { error: K } = await E.auth.signInWithPassword({
                    email: a,
                    password: h
                });
                K && M(K.message);
                break;
            case "sign_up":
                let Y = {
                    emailRedirectTo: w
                };
                d && (Y.data = d);
                const { data: { user: r1, session: o1 }, error: J } = await E.auth.signUp({
                    email: a,
                    password: h,
                    options: Y
                });
                J ? M(J.message) : r1 && !o1 && A((q = m == null ? void 0 : m.sign_up) == null ? void 0 : q.confirmation_text);
                break;
        }
        x.current && B(!1);
    }, z = (k)=>{
        o(a), v(h), r(k);
    }, f = m == null ? void 0 : m[t];
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        id: t === "sign_in" ? "auth-sign-in" : "auth-sign-up",
        onSubmit: O,
        autoComplete: "on",
        style: {
            width: "100%"
        }
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(N, {
        direction: "vertical",
        gap: "large",
        appearance: c
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(N, {
        direction: "vertical",
        gap: "large",
        appearance: c
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(H, {
        htmlFor: "email",
        appearance: c
    }, f == null ? void 0 : f.email_label), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(D, {
        id: "email",
        type: "email",
        name: "email",
        placeholder: f == null ? void 0 : f.email_input_placeholder,
        defaultValue: a,
        onChange: (k)=>_(k.target.value),
        autoComplete: "email",
        appearance: c
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(H, {
        htmlFor: "password",
        appearance: c
    }, f == null ? void 0 : f.password_label), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(D, {
        id: "password",
        type: "password",
        name: "password",
        placeholder: f == null ? void 0 : f.password_input_placeholder,
        defaultValue: h,
        onChange: (k)=>g(k.target.value),
        autoComplete: t === "sign_in" ? "current-password" : "new-password",
        appearance: c
    })), y), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(U, {
        type: "submit",
        color: "primary",
        loading: p,
        appearance: c
    }, p ? f == null ? void 0 : f.loading_button_label : f == null ? void 0 : f.button_label), C && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(N, {
        direction: "vertical",
        gap: "small",
        appearance: c
    }, t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIEWS"].SIGN_IN && i && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(V, {
        href: "#auth-magic-link",
        onClick: (k)=>{
            k.preventDefault(), r(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIEWS"].MAGIC_LINK);
        },
        appearance: c
    }, (T = m == null ? void 0 : m.magic_link) == null ? void 0 : T.link_text), t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIEWS"].SIGN_IN && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(V, {
        href: "#auth-forgot-password",
        onClick: (k)=>{
            k.preventDefault(), r(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIEWS"].FORGOTTEN_PASSWORD);
        },
        appearance: c
    }, (G = m == null ? void 0 : m.forgotten_password) == null ? void 0 : G.link_text), t === __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIEWS"].SIGN_IN ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(V, {
        href: "#auth-sign-up",
        onClick: (k)=>{
            k.preventDefault(), z(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIEWS"].SIGN_UP);
        },
        appearance: c
    }, (Z = m == null ? void 0 : m.sign_up) == null ? void 0 : Z.link_text) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(V, {
        href: "#auth-sign-in",
        onClick: (k)=>{
            k.preventDefault(), z(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIEWS"].SIGN_IN);
        },
        appearance: c
    }, (j = m == null ? void 0 : m.sign_in) == null ? void 0 : j.link_text))), P && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(F, {
        appearance: c
    }, P), s && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(F, {
        color: "danger",
        appearance: c
    }, s));
}
function e1({ setAuthView: t = ()=>{}, supabaseClient: l, redirectTo: n, i18n: r, appearance: o, showLinks: v = !1 }) {
    var _;
    const [E, C] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), [w, d] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), [i, m] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), [c, y] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1), x = async (h)=>{
        var s;
        h.preventDefault(), d(""), m(""), y(!0);
        const { error: g } = await l.auth.resetPasswordForEmail(E, {
            redirectTo: n
        });
        g ? d(g.message) : m((s = r == null ? void 0 : r.forgotten_password) == null ? void 0 : s.confirmation_text), y(!1);
    }, a = r == null ? void 0 : r.forgotten_password;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        id: "auth-forgot-password",
        onSubmit: x
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(N, {
        direction: "vertical",
        gap: "large",
        appearance: o
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(N, {
        gap: "large",
        direction: "vertical",
        appearance: o
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(H, {
        htmlFor: "email",
        appearance: o
    }, a == null ? void 0 : a.email_label), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(D, {
        id: "email",
        name: "email",
        type: "email",
        autoFocus: !0,
        placeholder: a == null ? void 0 : a.email_input_placeholder,
        onChange: (h)=>C(h.target.value),
        appearance: o
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(U, {
        type: "submit",
        color: "primary",
        loading: c,
        appearance: o
    }, c ? a == null ? void 0 : a.loading_button_label : a == null ? void 0 : a.button_label), v && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(V, {
        href: "#auth-sign-in",
        onClick: (h)=>{
            h.preventDefault(), t(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIEWS"].SIGN_IN);
        },
        appearance: o
    }, (_ = r == null ? void 0 : r.sign_in) == null ? void 0 : _.link_text), i && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(F, {
        appearance: o
    }, i), w && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(F, {
        color: "danger",
        appearance: o
    }, w))));
}
function t1({ supabaseClient: t, i18n: l, appearance: n }) {
    const [r, o] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), [v, E] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), [C, w] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), [d, i] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1), m = async (y)=>{
        var a;
        y.preventDefault(), E(""), w(""), i(!0);
        const { error: x } = await t.auth.updateUser({
            password: r
        });
        x ? E(x.message) : w((a = l == null ? void 0 : l.update_password) == null ? void 0 : a.confirmation_text), i(!1);
    }, c = l == null ? void 0 : l.update_password;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        id: "auth-update-password",
        onSubmit: m
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(N, {
        gap: "large",
        direction: "vertical",
        appearance: n
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(H, {
        htmlFor: "password",
        appearance: n
    }, c == null ? void 0 : c.password_label), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(D, {
        id: "password",
        name: "password",
        placeholder: c == null ? void 0 : c.password_input_placeholder,
        type: "password",
        autoFocus: !0,
        onChange: (y)=>o(y.target.value),
        appearance: n
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(U, {
        type: "submit",
        color: "primary",
        loading: d,
        appearance: n
    }, d ? c == null ? void 0 : c.loading_button_label : c == null ? void 0 : c.button_label), C && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(F, {
        appearance: n
    }, C), v && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(F, {
        color: "danger",
        appearance: n
    }, v)));
}
function U1({ setAuthView: t = ()=>{}, supabaseClient: l, otpType: n = "email", i18n: r, appearance: o, showLinks: v = !1 }) {
    var M;
    const [E, C] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), [w, d] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), [i, m] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), [c, y] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), [x, a] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), [_, h] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(!1), g = async (p)=>{
        p.preventDefault(), y(""), a(""), h(!0);
        let B = {
            email: E,
            token: i,
            type: n
        };
        [
            "sms",
            "phone_change"
        ].includes(n) && (B = {
            phone: w,
            token: i,
            type: n
        });
        const { error: P } = await l.auth.verifyOtp(B);
        P && y(P.message), h(!1);
    }, s = r == null ? void 0 : r.verify_otp;
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("form", {
        id: "auth-magic-link",
        onSubmit: g
    }, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(N, {
        gap: "large",
        direction: "vertical",
        appearance: o
    }, [
        "sms",
        "phone_change"
    ].includes(n) ? /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(H, {
        htmlFor: "phone",
        appearance: o
    }, s == null ? void 0 : s.phone_input_label), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(D, {
        id: "phone",
        name: "phone",
        type: "text",
        autoFocus: !0,
        placeholder: s == null ? void 0 : s.phone_input_placeholder,
        onChange: (p)=>d(p.target.value),
        appearance: o
    })) : /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(H, {
        htmlFor: "email",
        appearance: o
    }, s == null ? void 0 : s.email_input_label), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(D, {
        id: "email",
        name: "email",
        type: "email",
        autoFocus: !0,
        placeholder: s == null ? void 0 : s.email_input_placeholder,
        onChange: (p)=>C(p.target.value),
        appearance: o
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(H, {
        htmlFor: "token",
        appearance: o
    }, s == null ? void 0 : s.token_input_label), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(D, {
        id: "token",
        name: "token",
        type: "text",
        placeholder: s == null ? void 0 : s.token_input_placeholder,
        onChange: (p)=>m(p.target.value),
        appearance: o
    })), /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(U, {
        color: "primary",
        type: "submit",
        loading: _,
        appearance: o
    }, _ ? s == null ? void 0 : s.loading_button_label : s == null ? void 0 : s.button_label), v && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(V, {
        href: "#auth-sign-in",
        onClick: (p)=>{
            p.preventDefault(), t(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIEWS"].SIGN_IN);
        },
        appearance: o
    }, (M = r == null ? void 0 : r.sign_in) == null ? void 0 : M.link_text), x && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(F, {
        appearance: o
    }, x), c && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(F, {
        color: "danger",
        appearance: o
    }, c)));
}
const l1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createContext"])({
    user: null,
    session: null
}), R1 = (t)=>{
    const { supabaseClient: l } = t, [n, r] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null), [o, v] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((n == null ? void 0 : n.user) ?? null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        (async ()=>{
            var d;
            const { data: w } = await l.auth.getSession();
            r(w.session), v(((d = w.session) == null ? void 0 : d.user) ?? null);
        })();
        const { data: C } = l.auth.onAuthStateChange(async (w, d)=>{
            r(d), v((d == null ? void 0 : d.user) ?? null);
        });
        return ()=>{
            C == null || C.subscription.unsubscribe();
        };
    }, []);
    const E = {
        session: n,
        user: o
    };
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(l1.Provider, {
        value: E,
        ...t
    });
}, O1 = ()=>{
    const t = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useContext"])(l1);
    if (t === void 0) throw new Error("useUser must be used within a UserContextProvider.");
    return t;
};
function S({ supabaseClient: t, socialLayout: l = "vertical", providers: n, providerScopes: r, queryParams: o, view: v = "sign_in", redirectTo: E, onlyThirdPartyProviders: C = !1, magicLink: w = !1, showLinks: d = !0, appearance: i, theme: m = "default", localization: c = {
    variables: {}
}, otpType: y = "email", additionalData: x, children: a }) {
    const _ = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"])(__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["en"], c.variables ?? {}), [h, g] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(v), [s, M] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), [p, B] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(""), P = h === "sign_in" || h === "sign_up" || h === "magic_link";
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        var z, f;
        (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$stitches$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createStitches"])({
            theme: (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"])(((z = i == null ? void 0 : i.theme) == null ? void 0 : z.default) ?? {}, ((f = i == null ? void 0 : i.variables) == null ? void 0 : f.default) ?? {})
        });
    }, [
        i
    ]);
    const A = ({ children: z })=>{
        var f;
        return(// @ts-ignore
        /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
            className: m !== "default" ? (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$stitches$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createTheme"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["merge"])(// @ts-ignore
            i == null ? void 0 : i.theme[m], ((f = i == null ? void 0 : i.variables) == null ? void 0 : f[m]) ?? {})) : ""
        }, P && /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(A1, {
            appearance: i,
            supabaseClient: t,
            providers: n,
            providerScopes: r,
            queryParams: o,
            socialLayout: l,
            redirectTo: E,
            onlyThirdPartyProviders: C,
            i18n: _,
            view: h
        }), !C && z));
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const { data: z } = t.auth.onAuthStateChange((f)=>{
            f === "PASSWORD_RECOVERY" ? g("update_password") : f === "USER_UPDATED" && g("sign_in");
        });
        return g(v), ()=>z.subscription.unsubscribe();
    }, [
        v
    ]);
    const O = {
        supabaseClient: t,
        setAuthView: g,
        defaultEmail: s,
        defaultPassword: p,
        setDefaultEmail: M,
        setDefaultPassword: B,
        redirectTo: E,
        magicLink: w,
        showLinks: d,
        i18n: _,
        appearance: i
    };
    switch(h){
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIEWS"].SIGN_IN:
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(A, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Q, {
                ...O,
                authView: "sign_in"
            }));
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIEWS"].SIGN_UP:
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(A, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(Q, {
                appearance: i,
                supabaseClient: t,
                authView: "sign_up",
                setAuthView: g,
                defaultEmail: s,
                defaultPassword: p,
                setDefaultEmail: M,
                setDefaultPassword: B,
                redirectTo: E,
                magicLink: w,
                showLinks: d,
                i18n: _,
                additionalData: x,
                children: a
            }));
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIEWS"].FORGOTTEN_PASSWORD:
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(A, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(e1, {
                appearance: i,
                supabaseClient: t,
                setAuthView: g,
                redirectTo: E,
                showLinks: d,
                i18n: _
            }));
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIEWS"].MAGIC_LINK:
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(A, null, /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(X, {
                appearance: i,
                supabaseClient: t,
                setAuthView: g,
                redirectTo: E,
                showLinks: d,
                i18n: _
            }));
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIEWS"].UPDATE_PASSWORD:
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(t1, {
                appearance: i,
                supabaseClient: t,
                i18n: _
            });
        case __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["VIEWS"].VERIFY_OTP:
            return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(U1, {
                appearance: i,
                supabaseClient: t,
                otpType: y,
                i18n: _
            });
        default:
            return null;
    }
}
S.ForgottenPassword = e1;
S.UpdatePassword = t1;
S.MagicLink = X;
S.UserContextProvider = R1;
S.useUser = O1;
const W1 = (0, __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$stitches$2f$core$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["css"])({
    borderRadius: "12px",
    boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px",
    width: "360px",
    padding: "28px 32px"
}), j1 = ({ children: t, appearance: l })=>{
    const n = [
        `${__TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f40$supabase$2f$auth$2d$ui$2d$shared$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["PREPENDED_CLASS_NAMES"]}_ui-card`,
        W1(),
        l == null ? void 0 : l.className
    ];
    return /* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement("div", {
        className: n.join(" ")
    }, t);
}, q1 = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(S, {
        showLinks: !1,
        ...t,
        onlyThirdPartyProviders: !1,
        view: "sign_up"
    }), K1 = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(S, {
        showLinks: !1,
        ...t,
        onlyThirdPartyProviders: !1,
        view: "sign_in"
    }), Y1 = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(S, {
        ...t,
        view: "magic_link",
        showLinks: !1
    }), J1 = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(S, {
        ...t,
        view: "sign_in",
        showLinks: !1,
        onlyThirdPartyProviders: !0
    }), Q1 = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(S, {
        showLinks: !1,
        ...t,
        view: "forgotten_password"
    }), X1 = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(S, {
        ...t,
        view: "update_password"
    }), e0 = (t)=>/* @__PURE__ */ __TURBOPACK__imported__module__$5b$project$5d2f$Desktop$2f$Progrize_landing$2d$main$2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"].createElement(S, {
        ...t,
        view: "verify_otp"
    });
;
}),
];

//# sourceMappingURL=_9564c300._.js.map