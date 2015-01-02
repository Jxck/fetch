/// <reference path="es6-promise.d.ts" />
// https://fetch.spec.whatwg.org/#concept-method
var MethodEnum;
(function (MethodEnum) {
    MethodEnum[MethodEnum["OPTIONS"] = 0] = "OPTIONS";
    MethodEnum[MethodEnum["GET"] = 1] = "GET";
    MethodEnum[MethodEnum["HEAD"] = 2] = "HEAD";
    MethodEnum[MethodEnum["POST"] = 3] = "POST";
    MethodEnum[MethodEnum["PUT"] = 4] = "PUT";
    MethodEnum[MethodEnum["DELETE"] = 5] = "DELETE";
    MethodEnum[MethodEnum["TRACE"] = 6] = "TRACE";
    MethodEnum[MethodEnum["CONNECT"] = 7] = "CONNECT";
})(MethodEnum || (MethodEnum = {}));
// https://fetch.spec.whatwg.org/#simple-method
var SimpleMethodEnum;
(function (SimpleMethodEnum) {
    SimpleMethodEnum[SimpleMethodEnum["GET"] = 0] = "GET";
    SimpleMethodEnum[SimpleMethodEnum["HEAD"] = 1] = "HEAD";
    SimpleMethodEnum[SimpleMethodEnum["POST"] = 2] = "POST";
})(SimpleMethodEnum || (SimpleMethodEnum = {}));
// https://fetch.spec.whatwg.org/#forbidden-method
var ForbiddenMethodEnum;
(function (ForbiddenMethodEnum) {
    ForbiddenMethodEnum[ForbiddenMethodEnum["CONNECT"] = 0] = "CONNECT";
    ForbiddenMethodEnum[ForbiddenMethodEnum["TRACE"] = 1] = "TRACE";
    ForbiddenMethodEnum[ForbiddenMethodEnum["TRACK"] = 2] = "TRACK";
})(ForbiddenMethodEnum || (ForbiddenMethodEnum = {}));
var RequestContextEnum;
(function (RequestContextEnum) {
    RequestContextEnum[RequestContextEnum["audio"] = 0] = "audio";
    RequestContextEnum[RequestContextEnum["beacon"] = 1] = "beacon";
    RequestContextEnum[RequestContextEnum["cspreport"] = 2] = "cspreport";
    RequestContextEnum[RequestContextEnum["download"] = 3] = "download";
    RequestContextEnum[RequestContextEnum["embed"] = 4] = "embed";
    RequestContextEnum[RequestContextEnum["eventsource"] = 5] = "eventsource";
    RequestContextEnum[RequestContextEnum["favicon"] = 6] = "favicon";
    RequestContextEnum[RequestContextEnum["fetch"] = 7] = "fetch";
    RequestContextEnum[RequestContextEnum["font"] = 8] = "font";
    RequestContextEnum[RequestContextEnum["form"] = 9] = "form";
    RequestContextEnum[RequestContextEnum["frame"] = 10] = "frame";
    RequestContextEnum[RequestContextEnum["hyperlink"] = 11] = "hyperlink";
    RequestContextEnum[RequestContextEnum["iframe"] = 12] = "iframe";
    RequestContextEnum[RequestContextEnum["image"] = 13] = "image";
    RequestContextEnum[RequestContextEnum["imageset"] = 14] = "imageset";
    RequestContextEnum[RequestContextEnum["import"] = 15] = "import";
    RequestContextEnum[RequestContextEnum["internal"] = 16] = "internal";
    RequestContextEnum[RequestContextEnum["location"] = 17] = "location";
    RequestContextEnum[RequestContextEnum["manifest"] = 18] = "manifest";
    RequestContextEnum[RequestContextEnum["object"] = 19] = "object";
    RequestContextEnum[RequestContextEnum["ping"] = 20] = "ping";
    RequestContextEnum[RequestContextEnum["plugin"] = 21] = "plugin";
    RequestContextEnum[RequestContextEnum["prefetch"] = 22] = "prefetch";
    RequestContextEnum[RequestContextEnum["script"] = 23] = "script";
    RequestContextEnum[RequestContextEnum["serviceworker"] = 24] = "serviceworker";
    RequestContextEnum[RequestContextEnum["sharedworker"] = 25] = "sharedworker";
    RequestContextEnum[RequestContextEnum["subresource"] = 26] = "subresource";
    RequestContextEnum[RequestContextEnum["style"] = 27] = "style";
    RequestContextEnum[RequestContextEnum["track"] = 28] = "track";
    RequestContextEnum[RequestContextEnum["video"] = 29] = "video";
    RequestContextEnum[RequestContextEnum["worker"] = 30] = "worker";
    RequestContextEnum[RequestContextEnum["xmlhttprequest"] = 31] = "xmlhttprequest";
    RequestContextEnum[RequestContextEnum["xslt"] = 32] = "xslt";
})(RequestContextEnum || (RequestContextEnum = {}));
;
// https://fetch.spec.whatwg.org/#concept-request-context-frame-type
var ContextFrameTypeEnum;
(function (ContextFrameTypeEnum) {
    ContextFrameTypeEnum[ContextFrameTypeEnum["auxiliary"] = 0] = "auxiliary";
    ContextFrameTypeEnum[ContextFrameTypeEnum["top-level"] = 1] = "top-level";
    ContextFrameTypeEnum[ContextFrameTypeEnum["nested"] = 2] = "nested";
    ContextFrameTypeEnum[ContextFrameTypeEnum["none"] = 3] = "none";
})(ContextFrameTypeEnum || (ContextFrameTypeEnum = {}));
var RequestModeEnum;
(function (RequestModeEnum) {
    RequestModeEnum[RequestModeEnum["same-origin"] = 0] = "same-origin";
    RequestModeEnum[RequestModeEnum["no-cors"] = 1] = "no-cors";
    RequestModeEnum[RequestModeEnum["cors"] = 2] = "cors";
})(RequestModeEnum || (RequestModeEnum = {}));
;
var RequestCredentialsEnum;
(function (RequestCredentialsEnum) {
    RequestCredentialsEnum[RequestCredentialsEnum["omit"] = 0] = "omit";
    RequestCredentialsEnum[RequestCredentialsEnum["same-origin"] = 1] = "same-origin";
    RequestCredentialsEnum[RequestCredentialsEnum["include"] = 2] = "include";
})(RequestCredentialsEnum || (RequestCredentialsEnum = {}));
;
var RequestCacheEnum;
(function (RequestCacheEnum) {
    RequestCacheEnum[RequestCacheEnum["default"] = 0] = "default";
    RequestCacheEnum[RequestCacheEnum["bypass"] = 1] = "bypass";
    RequestCacheEnum[RequestCacheEnum["reload"] = 2] = "reload";
    RequestCacheEnum[RequestCacheEnum["revalidate"] = 3] = "revalidate";
    RequestCacheEnum[RequestCacheEnum["force-cache"] = 4] = "force-cache";
    RequestCacheEnum[RequestCacheEnum["offline"] = 5] = "offline";
})(RequestCacheEnum || (RequestCacheEnum = {}));
;
var ResponseTypeEnum;
(function (ResponseTypeEnum) {
    ResponseTypeEnum[ResponseTypeEnum["basic"] = 0] = "basic";
    ResponseTypeEnum[ResponseTypeEnum["cors"] = 1] = "cors";
    ResponseTypeEnum[ResponseTypeEnum["default"] = 2] = "default";
    ResponseTypeEnum[ResponseTypeEnum["error"] = 3] = "error";
    ResponseTypeEnum[ResponseTypeEnum["opaque"] = 4] = "opaque";
})(ResponseTypeEnum || (ResponseTypeEnum = {}));
;
// https://fetch.spec.whatwg.org/#forbidden-header-name
var ForbiddenHeaderNameEnum;
(function (ForbiddenHeaderNameEnum) {
    ForbiddenHeaderNameEnum[ForbiddenHeaderNameEnum["Accept-Charset"] = 0] = "Accept-Charset";
    ForbiddenHeaderNameEnum[ForbiddenHeaderNameEnum["Accept-Encoding"] = 1] = "Accept-Encoding";
    ForbiddenHeaderNameEnum[ForbiddenHeaderNameEnum["Access-Control-Request-Headers"] = 2] = "Access-Control-Request-Headers";
    ForbiddenHeaderNameEnum[ForbiddenHeaderNameEnum["Access-Control-Request-Method"] = 3] = "Access-Control-Request-Method";
    ForbiddenHeaderNameEnum[ForbiddenHeaderNameEnum["Connection"] = 4] = "Connection";
    ForbiddenHeaderNameEnum[ForbiddenHeaderNameEnum["Content-Length"] = 5] = "Content-Length";
    ForbiddenHeaderNameEnum[ForbiddenHeaderNameEnum["Cookie"] = 6] = "Cookie";
    ForbiddenHeaderNameEnum[ForbiddenHeaderNameEnum["Cookie2"] = 7] = "Cookie2";
    ForbiddenHeaderNameEnum[ForbiddenHeaderNameEnum["Date"] = 8] = "Date";
    ForbiddenHeaderNameEnum[ForbiddenHeaderNameEnum["DNT"] = 9] = "DNT";
    ForbiddenHeaderNameEnum[ForbiddenHeaderNameEnum["Expect"] = 10] = "Expect";
    ForbiddenHeaderNameEnum[ForbiddenHeaderNameEnum["Host"] = 11] = "Host";
    ForbiddenHeaderNameEnum[ForbiddenHeaderNameEnum["Keep-Alive"] = 12] = "Keep-Alive";
    ForbiddenHeaderNameEnum[ForbiddenHeaderNameEnum["Origin"] = 13] = "Origin";
    ForbiddenHeaderNameEnum[ForbiddenHeaderNameEnum["Referer"] = 14] = "Referer";
    ForbiddenHeaderNameEnum[ForbiddenHeaderNameEnum["TE"] = 15] = "TE";
    ForbiddenHeaderNameEnum[ForbiddenHeaderNameEnum["Trailer"] = 16] = "Trailer";
    ForbiddenHeaderNameEnum[ForbiddenHeaderNameEnum["Transfer-Encoding"] = 17] = "Transfer-Encoding";
    ForbiddenHeaderNameEnum[ForbiddenHeaderNameEnum["Upgrade"] = 18] = "Upgrade";
    ForbiddenHeaderNameEnum[ForbiddenHeaderNameEnum["User-Agent"] = 19] = "User-Agent";
    ForbiddenHeaderNameEnum[ForbiddenHeaderNameEnum["Via"] = 20] = "Via";
})(ForbiddenHeaderNameEnum || (ForbiddenHeaderNameEnum = {}));
;
// https://fetch.spec.whatwg.org/#forbidden-header-name
function isForbiddenHeaderName(name) {
    if (ForbiddenHeaderNameEnum[name] !== undefined) {
        return true;
    }
    var reg = /^(Proxy\-|Sec\-)/;
    if (reg.exec(name)) {
        return true;
    }
    return false;
}
// https://fetch.spec.whatwg.org/#forbidden-response-header-name
function isForbiddenResponseHeaderName(name) {
    if (["Set-Cookie", "Set-Cookie2"].indexOf(name)) {
        return true;
    }
    return false;
}
// https://fetch.spec.whatwg.org/#simple-header
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
    if (ForbiddenMethodEnum[method] !== undefined) {
        return true;
    }
    return false;
}
function isSimpleMethod(method) {
    if (SimpleMethodEnum[method] !== undefined) {
        return true;
    }
    return false;
}
;
// https://fetch.spec.whatwg.org/#concept-header
var Header = (function () {
    function Header(name, value) {
        this.name = name;
        this.value = value;
    }
    return Header;
})();
var GuardEnum;
(function (GuardEnum) {
    GuardEnum[GuardEnum["immutable"] = 0] = "immutable";
    GuardEnum[GuardEnum["request"] = 1] = "request";
    GuardEnum[GuardEnum["request-no-CORS"] = 2] = "request-no-CORS";
    GuardEnum[GuardEnum["response"] = 3] = "response";
    GuardEnum[GuardEnum["none"] = 4] = "none";
})(GuardEnum || (GuardEnum = {}));
// https://fetch.spec.whatwg.org/#headers
var Headers = (function () {
    // https://fetch.spec.whatwg.org/#dom-headers
    function Headers(init) {
        var _this = this;
        this.guard = GuardEnum[4 /* none */];
        if (init instanceof Headers) {
            var headerListCopy = init.headerList;
            headerListCopy.forEach(function (header) {
                _this.append(header.name, header.value);
            });
            return;
        }
        if (Array.isArray(init)) {
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
    // https://fetch.spec.whatwg.org/#dom-headers-append
    Headers.prototype.append = function (name, value) {
        // step 1
        if (!name || !value) {
            throw new TypeError("invalid name/value");
        }
        switch (this.guard) {
            case GuardEnum[0 /* immutable */]:
                throw new TypeError("operation to immutable headers");
            case GuardEnum[1 /* request */]:
                if (isForbiddenHeaderName(name)) {
                    return;
                }
            case GuardEnum[2 /* "request-no-CORS" */]:
                if (!isSimpleHeader(name, value)) {
                    return;
                }
            case GuardEnum[3 /* response */]:
                if (isForbiddenResponseHeaderName(name)) {
                    return;
                }
        }
        // step 6
        name = name.toLowerCase();
        this.headerList.push(new Header(name, value));
    };
    // https://fetch.spec.whatwg.org/#dom-headers-delete
    Headers.prototype.delete = function (name) {
        // step 1
        if (!name) {
            throw new TypeError("invalid name");
        }
        switch (this.guard) {
            case GuardEnum[0 /* immutable */]:
                throw new TypeError("operation to immutable headers");
            case GuardEnum[1 /* request */]:
                if (isForbiddenHeaderName(name)) {
                    return;
                }
            case GuardEnum[2 /* "request-no-CORS" */]:
                if (!isSimpleHeader(name, "invalid")) {
                    return;
                }
            case GuardEnum[3 /* response */]:
                if (isForbiddenResponseHeaderName(name)) {
                    return;
                }
        }
        name = name.toLowerCase();
        // step 6
        this.headerList = this.headerList.filter(function (header) {
            return header.name !== name;
        });
    };
    // https://fetch.spec.whatwg.org/#dom-headers-get
    Headers.prototype.get = function (name) {
        // step 1
        if (!name) {
            throw new TypeError("invalid name");
        }
        // step 2
        var value = null;
        this.headerList.forEach(function (header) {
            if (header.name === name) {
                value = header.value;
                return;
            }
        });
        return value;
    };
    // https://fetch.spec.whatwg.org/#dom-headers-getall
    Headers.prototype.getAll = function (name) {
        // step 1
        if (!name) {
            throw new TypeError("invalid name");
        }
        // step 2
        var result = this.headerList.reduce(function (acc, header) {
            if (header.name === name) {
                acc.push(header.value);
            }
            return acc;
        }, []);
        return result;
    };
    // https://fetch.spec.whatwg.org/#dom-headers-has
    Headers.prototype.has = function (name) {
        // step 1
        if (!name) {
            throw new TypeError("invalid name");
        }
        // step 2
        return this.headerList.some(function (header) {
            return header.name === name;
        });
    };
    // https://fetch.spec.whatwg.org/#dom-headers-set
    Headers.prototype.set = function (name, value) {
        var _this = this;
        // step 1
        if (!name || !value) {
            throw new TypeError("invalid name/value");
        }
        switch (this.guard) {
            case GuardEnum[0 /* immutable */]:
                throw new TypeError("operation to immutable headers");
            case GuardEnum[1 /* request */]:
                if (isForbiddenHeaderName(name)) {
                    return;
                }
            case GuardEnum[2 /* "request-no-CORS" */]:
                if (!isSimpleHeader(name, "invalid")) {
                    return;
                }
            case GuardEnum[3 /* response */]:
                if (isForbiddenResponseHeaderName(name)) {
                    return;
                }
        }
        name = name.toLowerCase();
        // step 6, and "The value pairs to iterate over are the headers in the header list"
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
;
var Request = (function () {
    // https://fetch.spec.whatwg.org/#dom-request
    function Request(input, init) {
        // can't detect class by instanceof
        // if (input instanceof Request) { }
        var request;
        // step 1
        if (typeof input === "object" && input.body !== null) {
            // step 1-1
            if (input.usedFlag) {
                throw new TypeError("Request already used");
            }
            // step 1-2
            input.usedFlag = true;
            // step 2
            request = input.request;
        }
        else {
            // step 2
            // new request otherwise
            request = {
                url: null,
                method: MethodEnum[1 /* GET */],
                headerList: [],
                unsafeRequestFlag: false,
                body: null,
                //TODO: client:        entry settings object,
                //TODO: origin:        entry settings object.origin,
                forceOriginHeaderFlag: false,
                sameOriginDataURLFlag: false,
                referrer: null,
                context: null,
                mode: RequestModeEnum[1 /* "no-cors" */],
                credentialsMode: RequestCredentialsEnum[0 /* omit */],
                cacheMode: RequestCacheEnum[0 /* default */],
            };
        }
        // step 3
        request = {
            url: request.url,
            method: request.method,
            headerList: request.headerList,
            unsafeRequestFlag: true,
            body: request.body,
            //TODO: client: entry settings object,
            //TODO: origin: entry settings object.origin,
            forceOriginHeaderFlag: true,
            sameOriginDataURLFlag: true,
            //TODO: referrer : request.client,
            context: 'fetch',
            mode: request.mode,
            credentialsMode: request.credentialsMode,
            cacheMode: request.cacheMode
        };
        // step 4, 5, 6
        var fallbackMode = null;
        var fallbackCredentials = null;
        var fallbackCache = null;
        //TODO:
        function parseURL(url) {
            return url;
        }
        // step 7
        if (typeof input === "string") {
            // step 7-1
            var parsedURL;
            try {
                parsedURL = parseURL(input);
            }
            catch (err) {
                throw new TypeError(err);
            }
            // step 7-3
            request.url = parsedURL;
            // step 7-4, 7-5, 7-6
            fallbackMode = RequestModeEnum[2 /* cors */];
            fallbackCredentials = RequestCredentialsEnum[0 /* omit */];
            fallbackCache = RequestCacheEnum[0 /* default */];
        }
        // step 8
        var mode = init.mode ? init.mode : fallbackMode;
        // step 9
        if (mode !== null)
            request.mode = mode;
        // step 10
        var credentials = init.credentials ? init.credentials : fallbackCredentials;
        // step 11
        if (credentials !== null)
            request.credentialsMode = credentials;
        // step 12
        var cache = init.cache ? init.cache : fallbackCache;
        // step 13
        if (cache !== null)
            request.cacheMode = cache;
        // step 14
        if (init.method) {
            var method = init.method;
            // step 14-1
            if (isForbiddenMethod(method)) {
                throw new TypeError("forbidden method " + method);
            }
            // step 14-2
            method = method.toUpperCase();
            // step 14-3
            request.method = method;
        }
        // step 15
        var r = this;
        r.request = request;
        r._headers = new Headers();
        // step 16
        var headers = r.headers;
        // step 17
        if (init.headers) {
            headers = init.headers;
        }
        // step 18
        r.request.headerList = [];
        // step 19
        if (r.request.mode === "no-cors") {
            // 19-1
            if (!isSimpleMethod(this.request.method)) {
                throw new TypeError("not simple method" + method);
            }
            // 19-2
            r.headers.guard = "request-no-CORS";
        }
        // step 20
        r._headers = headers;
        // step 21
        if (init.body) {
            // step 21-1
            var result = extract(init.body);
            // step 21-2
            r.request.body = result.stream;
            // step 21-3
            if (result.contentType !== null) {
                var hasContentType = request.headerList.some(function (header) {
                    return header.name === "Content-Type";
                });
                if (!hasContentType) {
                    r._headers.append("Content-Type", result.contentType);
                }
            }
        }
        // step 22
        // FIXME implement mime type extract
        r.mimeType = null;
    }
    Object.defineProperty(Request.prototype, "method", {
        // https://fetch.spec.whatwg.org/#dom-request-method
        get: function () {
            return this._method;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "url", {
        // https://fetch.spec.whatwg.org/#dom-request-url
        get: function () {
            return this._url;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "headers", {
        // https://fetch.spec.whatwg.org/#dom-request-headers
        get: function () {
            return this._headers;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "context", {
        // https://fetch.spec.whatwg.org/#dom-request-context
        get: function () {
            return this._context;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "referrer", {
        // https://fetch.spec.whatwg.org/#dom-request-referrer
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "mode", {
        // https://fetch.spec.whatwg.org/#dom-request-mode
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "credentials", {
        // https://fetch.spec.whatwg.org/#dom-request-credentials
        get: function () {
            return this._credentials;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "cache", {
        // https://fetch.spec.whatwg.org/#dom-request-cache
        get: function () {
            return null;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "bodyUsed", {
        // https://fetch.spec.whatwg.org/#dom-body-bodyused
        get: function () {
            return this.bodyUsed;
        },
        enumerable: true,
        configurable: true
    });
    // https://fetch.spec.whatwg.org/#dom-request-clone
    // method on IRequest
    Request.prototype.clone = function () {
        return null;
    };
    // https://fetch.spec.whatwg.org/#dom-body-arraybuffer
    // method on IBody
    Request.prototype.arrayBuffer = function () {
        return null;
    };
    // https://fetch.spec.whatwg.org/#dom-body-blob
    Request.prototype.blob = function () {
        return null;
    };
    // https://fetch.spec.whatwg.org/#dom-body-formdata
    Request.prototype.formData = function () {
        return null;
    };
    // https://fetch.spec.whatwg.org/#dom-body-json
    Request.prototype.json = function () {
        return null;
    };
    // https://fetch.spec.whatwg.org/#dom-body-text
    Request.prototype.text = function () {
        return null;
    };
    return Request;
})();
// TODO: implement
function extract(body) {
    return null;
}
;
// https://fetch.spec.whatwg.org/#responseinit
var ResponseInit = (function () {
    function ResponseInit() {
        this.status = 200;
        this.statusText = "OK";
    }
    return ResponseInit;
})();
;
;
this.fetch = function (input, init) {
    var p = new Promise(function (resolve, reject) {
        try {
            var r = (new Request(input, init)).request;
        }
        catch (e) {
            reject(e);
        }
    });
    return p;
};
// WorkerGlobalScope implements GlobalFetch;
