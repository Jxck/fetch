/// <reference path="es6-promise.d.ts" />
var Method;
(function (Method) {
    Method[Method["OPTIONS"] = 0] = "OPTIONS";
    Method[Method["GET"] = 1] = "GET";
    Method[Method["HEAD"] = 2] = "HEAD";
    Method[Method["POST"] = 3] = "POST";
    Method[Method["PUT"] = 4] = "PUT";
    Method[Method["DELETE"] = 5] = "DELETE";
    Method[Method["TRACE"] = 6] = "TRACE";
    Method[Method["CONNECT"] = 7] = "CONNECT";
})(Method || (Method = {}));
var SimpleMethod;
(function (SimpleMethod) {
    SimpleMethod[SimpleMethod["GET"] = 0] = "GET";
    SimpleMethod[SimpleMethod["HEAD"] = 1] = "HEAD";
    SimpleMethod[SimpleMethod["POST"] = 2] = "POST";
})(SimpleMethod || (SimpleMethod = {}));
var ForbiddenMethod;
(function (ForbiddenMethod) {
    ForbiddenMethod[ForbiddenMethod["CONNECT"] = 0] = "CONNECT";
    ForbiddenMethod[ForbiddenMethod["TRACE"] = 1] = "TRACE";
    ForbiddenMethod[ForbiddenMethod["TRACK"] = 2] = "TRACK";
})(ForbiddenMethod || (ForbiddenMethod = {}));
var RequestContext;
(function (RequestContext) {
    RequestContext[RequestContext["audio"] = 0] = "audio";
    RequestContext[RequestContext["beacon"] = 1] = "beacon";
    RequestContext[RequestContext["cspreport"] = 2] = "cspreport";
    RequestContext[RequestContext["download"] = 3] = "download";
    RequestContext[RequestContext["embed"] = 4] = "embed";
    RequestContext[RequestContext["eventsource"] = 5] = "eventsource";
    RequestContext[RequestContext["favicon"] = 6] = "favicon";
    RequestContext[RequestContext["fetch"] = 7] = "fetch";
    RequestContext[RequestContext["font"] = 8] = "font";
    RequestContext[RequestContext["form"] = 9] = "form";
    RequestContext[RequestContext["frame"] = 10] = "frame";
    RequestContext[RequestContext["hyperlink"] = 11] = "hyperlink";
    RequestContext[RequestContext["iframe"] = 12] = "iframe";
    RequestContext[RequestContext["image"] = 13] = "image";
    RequestContext[RequestContext["imageset"] = 14] = "imageset";
    RequestContext[RequestContext["import"] = 15] = "import";
    RequestContext[RequestContext["internal"] = 16] = "internal";
    RequestContext[RequestContext["location"] = 17] = "location";
    RequestContext[RequestContext["manifest"] = 18] = "manifest";
    RequestContext[RequestContext["object"] = 19] = "object";
    RequestContext[RequestContext["ping"] = 20] = "ping";
    RequestContext[RequestContext["plugin"] = 21] = "plugin";
    RequestContext[RequestContext["prefetch"] = 22] = "prefetch";
    RequestContext[RequestContext["script"] = 23] = "script";
    RequestContext[RequestContext["serviceworker"] = 24] = "serviceworker";
    RequestContext[RequestContext["sharedworker"] = 25] = "sharedworker";
    RequestContext[RequestContext["subresource"] = 26] = "subresource";
    RequestContext[RequestContext["style"] = 27] = "style";
    RequestContext[RequestContext["track"] = 28] = "track";
    RequestContext[RequestContext["video"] = 29] = "video";
    RequestContext[RequestContext["worker"] = 30] = "worker";
    RequestContext[RequestContext["xmlhttprequest"] = 31] = "xmlhttprequest";
    RequestContext[RequestContext["xslt"] = 32] = "xslt";
})(RequestContext || (RequestContext = {}));
;
var ContextFrameType;
(function (ContextFrameType) {
    ContextFrameType[ContextFrameType["auxiliary"] = 0] = "auxiliary";
    ContextFrameType[ContextFrameType["top-level"] = 1] = "top-level";
    ContextFrameType[ContextFrameType["nested"] = 2] = "nested";
    ContextFrameType[ContextFrameType["none"] = 3] = "none";
})(ContextFrameType || (ContextFrameType = {}));
var RequestMode;
(function (RequestMode) {
    RequestMode[RequestMode["same-origin"] = 0] = "same-origin";
    RequestMode[RequestMode["no-cors"] = 1] = "no-cors";
    RequestMode[RequestMode["cors"] = 2] = "cors";
})(RequestMode || (RequestMode = {}));
;
var RequestCredentials;
(function (RequestCredentials) {
    RequestCredentials[RequestCredentials["omit"] = 0] = "omit";
    RequestCredentials[RequestCredentials["same-origin"] = 1] = "same-origin";
    RequestCredentials[RequestCredentials["include"] = 2] = "include";
})(RequestCredentials || (RequestCredentials = {}));
;
var RequestCache;
(function (RequestCache) {
    RequestCache[RequestCache["default"] = 0] = "default";
    RequestCache[RequestCache["bypass"] = 1] = "bypass";
    RequestCache[RequestCache["reload"] = 2] = "reload";
    RequestCache[RequestCache["revalidate"] = 3] = "revalidate";
    RequestCache[RequestCache["force-cache"] = 4] = "force-cache";
    RequestCache[RequestCache["offline"] = 5] = "offline";
})(RequestCache || (RequestCache = {}));
;
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["basic"] = 0] = "basic";
    ResponseType[ResponseType["cors"] = 1] = "cors";
    ResponseType[ResponseType["default"] = 2] = "default";
    ResponseType[ResponseType["error"] = 3] = "error";
    ResponseType[ResponseType["opaque"] = 4] = "opaque";
})(ResponseType || (ResponseType = {}));
;
var ForbiddenHeaderName;
(function (ForbiddenHeaderName) {
    ForbiddenHeaderName[ForbiddenHeaderName["Accept-Charset"] = 0] = "Accept-Charset";
    ForbiddenHeaderName[ForbiddenHeaderName["Accept-Encoding"] = 1] = "Accept-Encoding";
    ForbiddenHeaderName[ForbiddenHeaderName["Access-Control-Request-Headers"] = 2] = "Access-Control-Request-Headers";
    ForbiddenHeaderName[ForbiddenHeaderName["Access-Control-Request-Method"] = 3] = "Access-Control-Request-Method";
    ForbiddenHeaderName[ForbiddenHeaderName["Connection"] = 4] = "Connection";
    ForbiddenHeaderName[ForbiddenHeaderName["Content-Length"] = 5] = "Content-Length";
    ForbiddenHeaderName[ForbiddenHeaderName["Cookie"] = 6] = "Cookie";
    ForbiddenHeaderName[ForbiddenHeaderName["Cookie2"] = 7] = "Cookie2";
    ForbiddenHeaderName[ForbiddenHeaderName["Date"] = 8] = "Date";
    ForbiddenHeaderName[ForbiddenHeaderName["DNT"] = 9] = "DNT";
    ForbiddenHeaderName[ForbiddenHeaderName["Expect"] = 10] = "Expect";
    ForbiddenHeaderName[ForbiddenHeaderName["Host"] = 11] = "Host";
    ForbiddenHeaderName[ForbiddenHeaderName["Keep-Alive"] = 12] = "Keep-Alive";
    ForbiddenHeaderName[ForbiddenHeaderName["Origin"] = 13] = "Origin";
    ForbiddenHeaderName[ForbiddenHeaderName["Referer"] = 14] = "Referer";
    ForbiddenHeaderName[ForbiddenHeaderName["TE"] = 15] = "TE";
    ForbiddenHeaderName[ForbiddenHeaderName["Trailer"] = 16] = "Trailer";
    ForbiddenHeaderName[ForbiddenHeaderName["Transfer-Encoding"] = 17] = "Transfer-Encoding";
    ForbiddenHeaderName[ForbiddenHeaderName["Upgrade"] = 18] = "Upgrade";
    ForbiddenHeaderName[ForbiddenHeaderName["User-Agent"] = 19] = "User-Agent";
    ForbiddenHeaderName[ForbiddenHeaderName["Via"] = 20] = "Via";
})(ForbiddenHeaderName || (ForbiddenHeaderName = {}));
;
function isArray(o) {
    return Object.prototype.toString.call(o) === "[object Array]";
}
function isForbiddenHeaderName(name) {
    if (ForbiddenHeaderName[name] != undefined) {
        return true;
    }
    var reg = /^(Proxy\-|Sec\-)/;
    if (reg.exec(name)) {
        return true;
    }
    return false;
}
function isForbiddenResponseHeaderName(name) {
    if (["Set-Cookie", "Set-Cookie2"].indexOf(name)) {
        return true;
    }
    return false;
}
function isSimpleHeader(name, value) {
    if (["Accept", "Accept-Language", "Content-Language"].indexOf(name)) {
        return true;
    }
    if (name === "Content-Type") {
        if (["application/x-www-form-urlencoded", "multipart/form-data", "text/plain"].indexOf(value)) {
            return true;
        }
    }
    return false;
}
function isForbiddenMethod(method) {
    if (ForbiddenMethod[method]) {
        return true;
    }
    return false;
}
;
var Header = (function () {
    function Header(name, value) {
        this.name = name;
        this.value = value;
    }
    return Header;
})();
var Headers = (function () {
    function Headers(init) {
        var _this = this;
        this.guard = 'none';
        if (init instanceof Headers) {
            var headerListCopy = init.headerList;
            headerListCopy.forEach(function (header) {
                _this.append(header.name, header.value);
            });
            return;
        }
        if (isArray(init)) {
            var headerSequence = init;
            headerSequence.forEach(function (header) {
                if (header.length === 2) {
                    throw new TypeError("init for Headers was incorrect BytesString Sequence");
                }
                _this.append(header[0], header[1]);
            });
            return;
        }
        if (init) {
            Object.keys(init).forEach(function (key) {
                _this.append(key, init[key]);
            });
        }
    }
    Headers.prototype.append = function (name, value) {
        if (!name || !value) {
            throw new TypeError("invalid name/value");
        }
        switch (this.guard) {
            case "immutable":
                throw new TypeError("operation to immutable headers");
            case "request":
                if (isForbiddenHeaderName(name)) {
                    return;
                }
            case "request-no-CORS":
                if (!isSimpleHeader(name, value)) {
                    return;
                }
            case "response":
                if (isForbiddenResponseHeaderName(name)) {
                    return;
                }
        }
        name = name.toLowerCase();
        this.headerList.push(new Header(name, value));
    };
    Headers.prototype.delete = function (name) {
        if (!name) {
            throw new TypeError("invalid name");
        }
        switch (this.guard) {
            case "immutable":
                throw new TypeError("operation to immutable headers");
            case "request":
                if (isForbiddenHeaderName(name)) {
                    return;
                }
            case "request-no-CORS":
                if (!isSimpleHeader(name, "invalid")) {
                    return;
                }
            case "response":
                if (isForbiddenResponseHeaderName(name)) {
                    return;
                }
        }
        name = name.toLowerCase();
        this.headerList = this.headerList.filter(function (header) {
            return header.name !== name;
        });
    };
    Headers.prototype.get = function (name) {
        if (!name) {
            throw new TypeError("invalid name");
        }
        var value = null;
        this.headerList.forEach(function (header) {
            if (header.name === name) {
                value = header.value;
                return;
            }
        });
        return value;
    };
    Headers.prototype.getAll = function (name) {
        if (!name) {
            throw new TypeError("invalid name");
        }
        var result = this.headerList.reduce(function (acc, header) {
            if (header.name === name) {
                acc.push(header.value);
            }
            return acc;
        }, []);
        return result;
    };
    Headers.prototype.has = function (name) {
        if (!name) {
            throw new TypeError("invalid name");
        }
        return this.headerList.some(function (header) {
            return header.name === name;
        });
    };
    Headers.prototype.set = function (name, value) {
        var _this = this;
        if (!name || !value) {
            throw new TypeError("invalid name/value");
        }
        switch (this.guard) {
            case "immutable":
                throw new TypeError("operation to immutable headers");
            case "request":
                if (isForbiddenHeaderName(name)) {
                    return;
                }
            case "request-no-CORS":
                if (!isSimpleHeader(name, "invalid")) {
                    return;
                }
            case "response":
                if (isForbiddenResponseHeaderName(name)) {
                    return;
                }
        }
        name = name.toLowerCase();
        // get all index of name
        var indexes = this.headerList.reduce(function (acc, header, index) {
            if (header.name === name) {
                acc.push(index);
            }
            return acc;
        }, []);
        var len = indexes.length;
        if (len === 0) {
            // no entry, so append to last
            this.append(name, value);
        }
        else {
            // splice chenges index, so reverse and process from back
            indexes.reverse().forEach(function (e, i) {
                if (i === len) {
                    // only replace first entry
                    _this.headerList[e].value = value;
                }
                else {
                    // remove duplicate from last
                    _this.headerList = _this.headerList.splice(e, 1);
                }
            });
        }
    };
    return Headers;
})();
;
;
// dictionary RequestInit
var RequestInit;
var Request = (function () {
    function Request(input, init) {
        // can't detect class by instanceof
        // if (input instanceof Request) { }
        var request;
        if (typeof input === "object" && input.body !== null) {
            if (input.usedFlag) {
                throw new TypeError("Request already used");
            }
            input.usedFlag = true;
            request = input.request;
        }
        else {
            // new request otherwise
            request = {
                url: null,
                method: "GET",
                headerList: [],
                unsafeRequestFlag: false,
                body: null,
                //TODO: client : entry settings object,
                //TODO: origin : entry settings object.origin,
                forceOriginHeaderFlag: false,
                sameOriginDataURLFlag: false,
                //TODO: referrer : request.client,
                context: null,
                mode: "no-cors",
                credentialsMode: "omit",
                cacheMode: "default"
            };
        }
        request = {
            url: request.url,
            method: request.method,
            headerList: request.headerList,
            unsafeRequestFlag: true,
            body: request.body,
            //TODO: client : entry settings object,
            //TODO: origin : entry settings object.origin,
            forceOriginHeaderFlag: true,
            sameOriginDataURLFlag: true,
            //TODO: referrer : request.client,
            context: 'fetch',
            mode: request.mode,
            credentialsMode: request.credentialsMode,
            cacheMode: request.cacheMode
        };
        var fallbackMode = null;
        var fallbackCredentials = null;
        var fallbackCache = null;
        //TODO:
        function parseURL(url) {
            return url;
        }
        if (typeof input === "string") {
            var parsedURL = parseURL(input);
            request.url = parsedURL;
            fallbackMode = "CORS";
            fallbackCredentials = "omit";
            fallbackCache = "default";
        }
        var mode = init.mode ? init.mode : fallbackMode;
        if (mode != null)
            request.mode = mode;
        var credentials = init.credentials ? init.credentials : fallbackCredentials;
        if (credentials != null)
            request.credentialsMode = credentials;
        var cache = init.cache ? init.cache : fallbackCache;
        if (cache != null)
            request.cacheMode = cache;
        if (init.method) {
            var method = init.method;
            if (isForbiddenMethod(method)) {
                throw new TypeError("forbidden method " + method);
            }
            method = method.toUpperCase();
            request.method = method;
        }
        // 15
        this.request = request;
        this._headers = new Headers();
        var headers = this.request._headers;
    }
    Object.defineProperty(Request.prototype, "method", {
        get: function () {
            return this._method;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "url", {
        get: function () {
            return this._url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "headers", {
        get: function () {
            return this._headers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "context", {
        get: function () {
            return this._context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "referrer", {
        get: function () {
            // TODO:
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "mode", {
        get: function () {
            switch (this.mode) {
                case RequestMode[same - origin]:
                    return "same-origin";
                case "no-cors":
                    return "no-cors";
                case "cors":
                    return "cors";
                case "cors-with-forced-preflight":
                    return "cors";
            }
            return this.mode;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "credentials", {
        get: function () {
            return this._credentials;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "cache", {
        get: function () {
            if (this.cache === "force-offline") {
                return "force-offline";
            }
            return this.cache;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "bodyUsed", {
        get: function () {
            return this.bodyUsed;
        },
        enumerable: true,
        configurable: true
    });
    // method on IRequest
    Request.prototype.clone = function () {
        return null;
    };
    // method on IBody
    Request.prototype.arrayBuffer = function () {
        return null;
    };
    Request.prototype.blob = function () {
        return null;
    };
    Request.prototype.formData = function () {
        return null;
    };
    Request.prototype.json = function () {
        return null;
    };
    Request.prototype.text = function () {
        return null;
    };
    return Request;
})();
