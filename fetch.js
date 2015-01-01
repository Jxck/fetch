/// <reference path="es6-promise.d.ts" />
// https://fetch.spec.whatwg.org/#concept-method
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
// https://fetch.spec.whatwg.org/#simple-method
var SimpleMethod;
(function (SimpleMethod) {
    SimpleMethod[SimpleMethod["GET"] = 0] = "GET";
    SimpleMethod[SimpleMethod["HEAD"] = 1] = "HEAD";
    SimpleMethod[SimpleMethod["POST"] = 2] = "POST";
})(SimpleMethod || (SimpleMethod = {}));
// https://fetch.spec.whatwg.org/#forbidden-method
var ForbiddenMethod;
(function (ForbiddenMethod) {
    ForbiddenMethod[ForbiddenMethod["CONNECT"] = 0] = "CONNECT";
    ForbiddenMethod[ForbiddenMethod["TRACE"] = 1] = "TRACE";
    ForbiddenMethod[ForbiddenMethod["TRACK"] = 2] = "TRACK";
})(ForbiddenMethod || (ForbiddenMethod = {}));
// https://fetch.spec.whatwg.org/#requestcontext
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
// https://fetch.spec.whatwg.org/#concept-request-context-frame-type
var ContextFrameType;
(function (ContextFrameType) {
    ContextFrameType[ContextFrameType["auxiliary"] = 0] = "auxiliary";
    ContextFrameType[ContextFrameType["top-level"] = 1] = "top-level";
    ContextFrameType[ContextFrameType["nested"] = 2] = "nested";
    ContextFrameType[ContextFrameType["none"] = 3] = "none";
})(ContextFrameType || (ContextFrameType = {}));
// https://fetch.spec.whatwg.org/#concept-request-mode
var RequestModeEnum;
(function (RequestModeEnum) {
    RequestModeEnum[RequestModeEnum["same-origin"] = 0] = "same-origin";
    RequestModeEnum[RequestModeEnum["no-cors"] = 1] = "no-cors";
    RequestModeEnum[RequestModeEnum["cors"] = 2] = "cors";
})(RequestModeEnum || (RequestModeEnum = {}));
;
// https://fetch.spec.whatwg.org/#concept-request-credentials-mode
var RequestCredentials;
(function (RequestCredentials) {
    RequestCredentials[RequestCredentials["omit"] = 0] = "omit";
    RequestCredentials[RequestCredentials["same-origin"] = 1] = "same-origin";
    RequestCredentials[RequestCredentials["include"] = 2] = "include";
})(RequestCredentials || (RequestCredentials = {}));
;
// https://fetch.spec.whatwg.org/#concept-request-cache-mode
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
// https://fetch.spec.whatwg.org/#concept-response-type
var ResponseType;
(function (ResponseType) {
    ResponseType[ResponseType["basic"] = 0] = "basic";
    ResponseType[ResponseType["cors"] = 1] = "cors";
    ResponseType[ResponseType["default"] = 2] = "default";
    ResponseType[ResponseType["error"] = 3] = "error";
    ResponseType[ResponseType["opaque"] = 4] = "opaque";
})(ResponseType || (ResponseType = {}));
;
// https://fetch.spec.whatwg.org/#forbidden-header-name
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
// https://fetch.spec.whatwg.org/#forbidden-header-name
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
    if (ForbiddenMethod[method]) {
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
// https://fetch.spec.whatwg.org/#headers
var Headers = (function () {
    // https://fetch.spec.whatwg.org/#dom-headers
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
// https://fetch.spec.whatwg.org/#requestinit
// dictionary RequestInit
var RequestInit;
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
        // step 3
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
            var parsedURL = parseURL(input);
            // step 7-3
            request.url = parsedURL;
            // step 7-4, 7-5, 7-6
            fallbackMode = "CORS";
            fallbackCredentials = "omit";
            fallbackCache = "default";
        }
        // step 8
        var mode = init.mode ? init.mode : fallbackMode;
        // step 9
        if (mode != null)
            request.mode = mode;
        // step 10
        var credentials = init.credentials ? init.credentials : fallbackCredentials;
        // step 11
        if (credentials != null)
            request.credentialsMode = credentials;
        // step 12
        var cache = init.cache ? init.cache : fallbackCache;
        // step 13
        if (cache != null)
            request.cacheMode = cache;
        // step 14
        if (init.method) {
            // step 14-1
            var method = init.method;
            if (isForbiddenMethod(method)) {
                throw new TypeError("forbidden method " + method);
            }
            // step 14-2
            method = method.toUpperCase();
            // step 14-3
            request.method = method;
        }
        this.request = request;
        this._headers = new Headers();
        var headers = this.request.headers;
        this.request.headers = null;
        // 19
        if (this.request.mode === "no-cors") {
            if (!isSimpleMethod(this.request.method)) {
                throw new TypeError("not simple method" + method);
            }
        }
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
/**
// https://fetch.spec.whatwg.org/#response
// [Constructor(optional BodyInit body, optional ResponseInit init), Exposed=(Window,Worker)]
interface Response extends Body { // Response implements Body;
  // static Response error();
  // static Response redirect(USVString url, optional unsigned short status = 302);
  type: ResponseType;
  url: USVString;
  status: number;
  statusText: ByteString;
  headers: Headers;
  // Response clone();
};

// https://fetch.spec.whatwg.org/#responseinit
class ResponseInit {
  status: number = 200;
  statusText: ByteString  = "OK";
  headers: HeadersInit;
};


// https://fetch.spec.whatwg.org/#globalfetch
// Window implements GlobalFetch;
interface Window {
  fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;
};

this.fetch = function(input: RequestInfo, init?: RequestInit): Promise<Response> {
  var p = new Promise<Response>(function(resolve, reject) {
    try {
      var r = (new Request(input, init)).request;
    } catch(e) {
      reject(e);
    }
  });

  return p
}

// WorkerGlobalScope implements GlobalFetch;
**/
