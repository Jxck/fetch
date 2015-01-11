/// <reference path="es6-promise.d.ts" />

// http://heycam.github.io/webidl/#idl-ByteString
type ByteString = string;

// http://heycam.github.io/webidl/#common-BufferSource
class BufferSource {
}

// https://url.spec.whatwg.org/#urlsearchparams
class URLSearchParams {
}

// http://heycam.github.io/webidl/#idl-USVString
type USVString = string;

// http://heycam.github.io/webidl/#idl-DOMString
type DOMString = string;

// see: https://fetch.spec.whatwg.org/#headersinit
type OpenEndedDictionary = Object;

// https://fetch.spec.whatwg.org/#concept-method
enum MethodEnum {
  OPTIONS,
  GET,
  HEAD,
  POST,
  PUT,
  DELETE,
  TRACE,
  CONNECT,
}

// https://fetch.spec.whatwg.org/#simple-method
enum SimpleMethodEnum {
  GET,
  HEAD,
  POST
}

function isSimpleMethod(method: ByteString): boolean {
  if (SimpleMethodEnum[method] !== undefined) {
    return true;
  }
  return false;
}

// https://fetch.spec.whatwg.org/#forbidden-method
enum ForbiddenMethodEnum {
  CONNECT,
  TRACE,
  TRACK
}

function isForbiddenMethod(method: ByteString): boolean {
  if (ForbiddenMethodEnum[method] !== undefined) {
    return true;
  }
  return false
}

// https://fetch.spec.whatwg.org/#requestcontext
type RequestContext = string;
enum RequestContextEnum {
  "audio",         "beacon",
  "cspreport",     "download",
  "embed",         "eventsource",
  "favicon",       "fetch",
  "font",          "form",
  "frame",         "hyperlink",
  "iframe",        "image",
  "imageset",      "import",
  "internal",      "location",
  "manifest",      "object",
  "ping",          "plugin",
  "prefetch",      "script",
  "serviceworker", "sharedworker",
  "subresource",   "style",
  "track",         "video",
  "worker",        "xmlhttprequest",
  "xslt"
};

// https://fetch.spec.whatwg.org/#concept-request-context-frame-type
enum ContextFrameTypeEnum {
  "auxiliary",
  "top-level",
  "nested",
  "none"
}

// https://fetch.spec.whatwg.org/#concept-request-mode
type RequestMode = string;
enum RequestModeEnum {
  "same-origin",
  "no-cors",
  "cors"
};

// https://fetch.spec.whatwg.org/#concept-request-credentials-mode
type RequestCredentials = string;
enum RequestCredentialsEnum {
  "omit",
  "same-origin",
  "include"
};

// https://fetch.spec.whatwg.org/#concept-request-cache-mode
type RequestCache = string;
enum RequestCacheEnum {
  "default",
  "bypass",
  "reload",
  "revalidate",
  "force-cache",
  "offline"
};

// https://fetch.spec.whatwg.org/#concept-response-type
type ResponseType = string;
enum ResponseTypeEnum {
  "basic",
  "cors",
  "default",
  "error",
  "opaque"
};

// https://fetch.spec.whatwg.org/#forbidden-header-name
enum ForbiddenHeaderNameEnum {
  "Accept-Charset",
  "Accept-Encoding",
  "Access-Control-Request-Headers",
  "Access-Control-Request-Method",
  "Connection",
  "Content-Length",
  "Cookie",
  "Cookie2",
  "Date",
  "DNT",
  "Expect",
  "Host",
  "Keep-Alive",
  "Origin",
  "Referer",
  "TE",
  "Trailer",
  "Transfer-Encoding",
  "Upgrade",
  "User-Agent",
  "Via"
};

// https://fetch.spec.whatwg.org/#forbidden-header-name
function isForbiddenHeaderName(name: ByteString): boolean {
  if (ForbiddenHeaderNameEnum[name] !== undefined) {
    return true;
  }
  var reg = /^(Proxy\-|Sec\-)/
  if (reg.exec(name)) {
    return true;
  }

  return false;
}

// https://fetch.spec.whatwg.org/#forbidden-response-header-name
function isForbiddenResponseHeaderName(name: ByteString): boolean {
  if (["Set-Cookie", "Set-Cookie2"].indexOf(name)) {
    return true;
  }
  return false;
}

// https://fetch.spec.whatwg.org/#simple-header
function isSimpleHeader(name, value: ByteString): boolean {
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

var StatusCode = {
  "100": "Continue",
  "101": "Switching Protocols",
  "200": "OK",
  "201": "Created",
  "202": "Accepted",
  "203": "Non-Authoritative Information",
  "204": "No Content",
  "205": "Reset Content",
  "206": "Partial Content",
  "300": "Multiple Choices",
  "301": "Moved Permanently",
  "302": "Found",
  "303": "See Other",
  "304": "Not Modified",
  "305": "Use Proxy",
  "307": "Temporary Redirect",
  "400": "Bad Request",
  "401": "Unauthorized",
  "402": "Payment Required",
  "403": "Forbidden",
  "404": "Not Found",
  "405": "Method Not Allowed",
  "406": "Not Acceptable",
  "407": "Proxy Authentication Required",
  "408": "Request Time-out",
  "409": "Conflict",
  "410": "Gone",
  "411": "Length Required",
  "412": "Precondition Failed",
  "413": "Request Entity Too Large",
  "414": "Request-URI Too Large",
  "415": "Unsupported Media Type",
  "416": "Requested range not satisfiable",
  "417": "Expectation Failed",
  "500": "Internal Server Error",
  "501": "Not Implemented",
  "502": "Bad Gateway",
  "503": "Service Unavailable",
  "504": "Gateway Time-out",
  "505": "HTTP Version not supported"
}

var ReasonPhrase = Object.keys(StatusCode).map(function(status) {
  return StatusCode[status];
});

/////////////////////////////
/// Headers
/////////////////////////////

// https://fetch.spec.whatwg.org/#headersinit
// typedef (Headers or sequence<sequence<ByteString>> or OpenEndedDictionary<ByteString>) HeadersInit;
type HeadersInit = Headers | ByteString[][] | OpenEndedDictionary;

// https://fetch.spec.whatwg.org/#headers
interface IHeaders {
  append(name, value: ByteString): void;
  delete(name: ByteString):        void;
  get(name: ByteString):           ByteString;
  getAll(name: ByteString):        ByteString[];
  has(name: ByteString):           boolean;
  set(name, value: ByteString):    void;
  // iterable<ByteString, ByteString>;
};

// https://fetch.spec.whatwg.org/#concept-header
class Header {
  name:  ByteString;
  value: ByteString;
  constructor(name, value: ByteString) {
    this.name  = name;
    this.value = value;
  }
}

type Guard = string;
enum GuardEnum {
  "immutable",
  "request",
  "request-no-CORS",
  "response",
  "none",
}

// https://fetch.spec.whatwg.org/#headers
class Headers implements IHeaders{
  public headerList: Header[] = [];
  public guard: Guard = GuardEnum[GuardEnum.none];

  // https://fetch.spec.whatwg.org/#dom-headers
  // https://fetch.spec.whatwg.org/#concept-headers-fill
  constructor(init?: HeadersInit) {

    // step 1 Headers
    if (init instanceof Headers) {
      var headerListCopy = init.headerList;
      headerListCopy.forEach((header) => {
        this.append(header.name, header.value);
      });
      return;
    }

    // step 2 ByteString[][]
    if (Array.isArray(init)) {
      var headerSequence = <ByteString[][]> init;
      headerSequence.forEach((header) => {
        if(header.length !== 2) {
          throw new TypeError("init for Headers was incorrect BytesString Sequence");
        }
        this.append(header[0], header[1]);
      });
      return;
    }

    // step 3 OpenEndedDictionary
    if (init) {
      Object.keys(init).forEach((key) => {
        this.append(key, init[key]);
      });
    }
  }

  // https://fetch.spec.whatwg.org/#dom-headers-append
  append(name, value: ByteString): void {
    // step 1
    if (!name || !value) {
      throw new TypeError("invalid name/value");
    }

    // step 2, 3, 4, 5
    switch(this.guard) {
      case GuardEnum[GuardEnum.immutable]:
        throw new TypeError("operation to immutable headers");
      case GuardEnum[GuardEnum.request]:
        if (isForbiddenHeaderName(name)) {
          return;
        }
      case GuardEnum[GuardEnum["request-no-CORS"]]:
        if (!isSimpleHeader(name, value)) {
          return;
        }
      case GuardEnum[GuardEnum.response]:
        if (isForbiddenResponseHeaderName(name)) {
          return;
        }
    }

    // step 6
    name = name.toLowerCase();
    this.headerList.push(new Header(name, value));
  }

  // https://fetch.spec.whatwg.org/#dom-headers-delete
  delete(name: ByteString): void {
    // step 1
    if (!name) {
      throw new TypeError("invalid name");
    }

    // step 2, 3, 4, 5
    switch(this.guard) {
      case GuardEnum[GuardEnum.immutable]:
        throw new TypeError("operation to immutable headers");
      case GuardEnum[GuardEnum.request]:
        if (isForbiddenHeaderName(name)) {
          return;
        }
      case GuardEnum[GuardEnum["request-no-CORS"]]:
        if (!isSimpleHeader(name, "invalid")) {
          return;
        }
      case GuardEnum[GuardEnum.response]:
        if (isForbiddenResponseHeaderName(name)) {
          return;
        }
    }

    name = name.toLowerCase();
    // step 6
    this.headerList = this.headerList.filter((header: Header) => {
      return header.name !== name;
    });
  }

  // https://fetch.spec.whatwg.org/#dom-headers-get
  get(name: ByteString) :ByteString {
    // step 1
    if (!name) {
      throw new TypeError("invalid name");
    }

    // step 2
    var value: ByteString = null;
    this.headerList.forEach((header: Header) => {
      if (header.name === name) {
        value = header.value;
        return;
      }
    });

    return value;
  }

  // https://fetch.spec.whatwg.org/#dom-headers-getall
  getAll(name: ByteString) :ByteString[] {
    // step 1
    if (!name) {
      throw new TypeError("invalid name");
    }

    // step 2
    var result: ByteString[] = this.headerList.reduce((acc: ByteString[], header: Header) => {
      if (header.name === name) {
        acc.push(header.value);
      }
      return acc;
    }, []);

    return result;
  }

  // https://fetch.spec.whatwg.org/#dom-headers-has
  has(name: ByteString) :boolean {
    // step 1
    if (!name) {
      throw new TypeError("invalid name");
    }

    // step 2
    return this.headerList.some((header: Header) => {
      return header.name === name;
    });
  }

  // https://fetch.spec.whatwg.org/#dom-headers-set
  set(name, value: ByteString): void {
    // step 1
    if (!name || !value) {
      throw new TypeError("invalid name/value");
    }

    switch(this.guard) {
      // step 2
      case GuardEnum[GuardEnum.immutable]:
        throw new TypeError("operation to immutable headers");
      // step 3
      case GuardEnum[GuardEnum.request]:
        if (isForbiddenHeaderName(name)) {
          return;
        }
      // step 4
      case GuardEnum[GuardEnum["request-no-CORS"]]:
        if (!isSimpleHeader(name, "invalid")) {
          return;
        }
      // step 5
      case GuardEnum[GuardEnum.response]:
        if (isForbiddenResponseHeaderName(name)) {
          return;
        }
    }

    // step 6
    // see https://fetch.spec.whatwg.org/#concept-header-list-set

    // step 6-1
    name = name.toLowerCase();

    // find the all indexes of headers whos key is supplyed key
    var indexes: number[] = this.headerList.reduce((acc: number[], header: Header, index: number) => {
      if (header.name === name) {
        acc.push(index);
      }
      return acc;
    }, []);

    // count of existing headers
    var len = indexes.length;

    // step 6-3
    // if there are no key
    if (len === 0) {
      // append to last and return
      return this.append(name, value);
    }

    // step 6-2
    // remove the headers in indexes from the last(because splice chenges index)
    // and change first header value
    indexes.reverse().forEach((e, i: number) => {
      if(i === len - 1) {
        // only replace first entry
        this.headerList[e].value = value;
      } else {
        // remove duplicate from last
        this.headerList.splice(e, 1);
      }
    });
  }
}


/////////////////////////////
/// Body
/////////////////////////////

// https://fetch.spec.whatwg.org/#json
type object = JSON;
// https://fetch.spec.whatwg.org/#bodyinit
type BodyInit = Blob | BufferSource | FormData | URLSearchParams | USVString

// https://fetch.spec.whatwg.org/#body
interface IBody {
  // readonly property
  bodyUsed:      boolean;
  body:          Body;
  usedFlag:      boolean;
  mimeType:      string;

  // method
  arrayBuffer(): Promise<ArrayBuffer>;
  blob():        Promise<Blob>;
  formData():    Promise<FormData>;
  json():        Promise<JSON>;
  text():        Promise<USVString>;
};


/////////////////////////////
/// Request
/////////////////////////////

// https://fetch.spec.whatwg.org/#requestinfo
type RequestInfo = Request | USVString;

// https://fetch.spec.whatwg.org/#request
interface IRequest extends IBody {
  // readonly property
  method:      ByteString;
  url:         USVString;
  headers:     Headers;
  context:     RequestContext;
  referrer:    DOMString;
  mode:        RequestMode;
  credentials: RequestCredentials;
  cache:       RequestCache;

  // method
  clone():     IRequest;
};

// https://fetch.spec.whatwg.org/#requestinit
// dictionary RequestInit
interface RequestInit {
  method:      ByteString;
  headers:     HeadersInit;
  body:        BodyInit;
  mode:        RequestMode;
  credentials: RequestCredentials;
  cache:       RequestCache;
};

type Body = Object;
type Client = Object;
type Referrer = Object;
type Context = Object;

type request = {
  method:                string;
  url:                   string;
  headerList:            Header[];
  unsafeRequestFlag:     boolean;
  body:                  Body;
  //TODO: client:        Client;
  context:               Context;
  //TODO: origin:        string;
  forceOriginHeaderFlag: boolean;
  sameOriginDataURLFlag: boolean;
  //TODO: referrer:      Referrer;
  mode:                  string;
  credentialsMode:       string;
  cacheMode:             string;
}

class Request implements IRequest {
  // readonly property on IRequest
  private _method:      ByteString;
  private _url:         USVString;
  private _headers:     Headers;
  private _context:     RequestContext;
  private _referrer:    DOMString;
  private _mode:        ByteString;
  private _credentials: RequestCredentials;
  private _cache:       RequestCache;

  // readonly property on IBody
  private _bodyUsed:    boolean;

  // https://fetch.spec.whatwg.org/#dom-request-method
  get method(): ByteString {
    return this._method;
  }

  // https://fetch.spec.whatwg.org/#dom-request-url
  get url(): USVString {
    return this._url;
  }

  // https://fetch.spec.whatwg.org/#dom-request-headers
  get headers(): Headers {
    return this._headers;
  }

  // https://fetch.spec.whatwg.org/#dom-request-context
  get context(): RequestContext {
    return this._context;
  }

  // https://fetch.spec.whatwg.org/#dom-request-referrer
  get referrer(): DOMString {
    return null;
  }

  // https://fetch.spec.whatwg.org/#dom-request-mode
  get mode(): RequestMode {
    return null;
  }

  // https://fetch.spec.whatwg.org/#dom-request-credentials
  get credentials(): RequestCredentials {
    return this._credentials;
  }

  // https://fetch.spec.whatwg.org/#dom-request-cache
  get cache(): RequestCache {
    return null;
  }

  // https://fetch.spec.whatwg.org/#dom-body-bodyused
  get bodyUsed(): boolean {
    return this.bodyUsed;
  }

  // https://fetch.spec.whatwg.org/#dom-request-clone
  // method on IRequest
  public clone(): IRequest {
    return null;
  }

  // https://fetch.spec.whatwg.org/#dom-body-arraybuffer
  // method on IBody
  public arrayBuffer(): Promise<ArrayBuffer> {
    return null;
  }

  // https://fetch.spec.whatwg.org/#dom-body-blob
  public blob(): Promise<Blob> {
    return null;
  }

  // https://fetch.spec.whatwg.org/#dom-body-formdata
  public formData(): Promise<FormData> {
    return null;
  }

  // https://fetch.spec.whatwg.org/#dom-body-json
  public json(): Promise<JSON> {
    return null;
  }

  // https://fetch.spec.whatwg.org/#dom-body-text
  public text(): Promise<USVString> {
    return null;
  }

  // Request
  public request:  request;
  public body:     Body;
  public usedFlag: boolean;
  public mimeType: string;

  // https://fetch.spec.whatwg.org/#dom-request
  constructor(input: RequestInfo, init?: RequestInit) {
    // can't detect class by instanceof
    // if (input instanceof Request) { }

    var request: request;
    // step 1
    if (typeof input === "object" && input.body !== null) { // Request
      // step 1-1
      if (input.usedFlag) {
        throw new TypeError("Request already used");
      }
      // step 1-2
      input.usedFlag = true;

      // step 2
      request = input.request;
    } else {
      // step 2
      // new request otherwise
      request = {
        url:                   null,
        method:                MethodEnum[MethodEnum.GET],
        headerList:            [],
        unsafeRequestFlag:     false,
        body:                  null,
        //TODO: client:        entry settings object,
        //TODO: origin:        entry settings object.origin,
        forceOriginHeaderFlag: false,
        sameOriginDataURLFlag: false,
        referrer:              null,
        context:               null,
        mode:                  RequestModeEnum[RequestModeEnum["no-cors"]],
        credentialsMode:       RequestCredentialsEnum[RequestCredentialsEnum.omit],
        cacheMode:             RequestCacheEnum[RequestCacheEnum.default],
      }
    }

    // step 3
    request = {
      url:                   request.url,
      method:                request.method,
      headerList:            request.headerList,
      unsafeRequestFlag:     true,
      body:                  request.body,
      //TODO: client: entry settings object,
      //TODO: origin: entry settings object.origin,
      forceOriginHeaderFlag: true,
      sameOriginDataURLFlag: true,
      //TODO: referrer : request.client,
      context:               'fetch',
      mode:                  request.mode,
      credentialsMode:       request.credentialsMode,
      cacheMode:             request.cacheMode
    }

    // step 4, 5, 6
    var fallbackMode: RequestMode = null;
    var fallbackCredentials: RequestCredentials = null;
    var fallbackCache: RequestCache = null;

    //TODO:
    function parseURL(url: string): string {
      return url;
    }
    // step 7
    if (typeof input === "string") {
      // step 7-1
      var parsedURL;

      try {
        parsedURL = parseURL(input);
      } catch(err) {
        // step 7-2
        throw new TypeError(err);
      }

      // step 7-3
      request.url = parsedURL;

      // step 7-4, 7-5, 7-6
      fallbackMode = RequestModeEnum[RequestModeEnum.cors];
      fallbackCredentials = RequestCredentialsEnum[RequestCredentialsEnum.omit];
      fallbackCache = RequestCacheEnum[RequestCacheEnum.default];
    }

    // step 8
    var mode = init.mode? init.mode: fallbackMode;

    // step 9
    if (mode !== null) request.mode = mode;

    // step 10
    var credentials = init.credentials? init.credentials: fallbackCredentials;

    // step 11
    if (credentials !== null) request.credentialsMode = credentials;

    // step 12
    var cache = init.cache? init.cache: fallbackCache;

    // step 13
    if (cache !== null) request.cacheMode = cache;

    // step 14
    if (init.method) {
      var method = init.method;

      // step 14-1
      if(isForbiddenMethod(method)) {
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
      headers = <Headers>init.headers;
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
        var hasContentType = request.headerList.some((header) => {
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
}

// https://fetch.spec.whatwg.org/#concept-bodyinit-extract
function extract(object: any): any {
  // step 1
  var stream = [];

  // step 2
  var contentType = null;

  // step 3
  switch(object.constructor) {
    // Blob
    case Blob:
      stream = object.contents;

      if (object.type) {
        contentType = object.type;
      }
    case BufferSource:
      // TODO: stream = copy(object);
    case FormData:
      // TODO:
    case URLSearchParams:
      stream = object.list.toString();
      contentType = "application/x-www-form-urlencoded;charset=UTF-8";
    case String: // USVString
      // stream = encode(object);
      contentType = "text/plain;charset=UTF-8";
  }

  // step 4
  return { stream: stream, contentType: contentType };
}



// https://fetch.spec.whatwg.org/#response
interface IResponse extends Body { // Response implements Body;
  // static Response error();
  // static Response redirect(USVString url, optional unsigned short status = 302);

  type:       ResponseType; // readonly
  url:        USVString;    // readonly
  status:     number;       // readonly
  statusText: ByteString;   // readonly
  headers:    Headers;      // readonly
  // Response clone();
};

// https://fetch.spec.whatwg.org/#responseinit
class ResponseInit {
  status:     number = 200;
  statusText: ByteString  = "OK";
  headers:    HeadersInit;
};

class response {
  type:              string;
  terminationReason: string;
  url:               string;
  status:            number;
  statusMessage:     string;
  headerList:        Header[];
  body:              Body;
  cacheState:        string;
  TLSState:          string;

  constructor() {
    this.type              = "default";
    this.terminationReason = "timeout";
    this.url               = null;
    this.status            = 200;
    this.statusMessage     = "OK";
    this.headerList        = [];
    this.body              = null;
    this.cacheState        = "none";
    this.TLSState          = "unauthenticated";
  }
}

// https://fetch.spec.whatwg.org/#response
class Response implements IResponse {

  _type:       ResponseType; // readonly
  _url:        USVString;    // readonly
  _status:     number;       // readonly
  _statusText: ByteString;   // readonly
  _headers:    Headers;      // readonly

  _response:   response;

  // https://fetch.spec.whatwg.org/#dom-response
  // [Constructor(optional BodyInit body, optional ResponseInit init), Exposed=(Window,Worker)]
  constructor(body?: BodyInit, init?: ResponseInit) {
    if (init !== undefined) {
      // step 1
      if (init.status < 200 && init.status > 599) {
        throw new RangeError("status is not in the range 200 to 599");
      }

      // step 2
      if (ReasonPhrase.indexOf(init.statusText) < 0) {
        throw new TypeError("unknown status test");
      }
    }

    // step 3
    var r = this;
    r._response = new response();
    r._headers = new Headers();

  }

  get type(): ResponseType {
    return this._type;
  }

  get url(): USVString {
    return this._url;
  }

  get status(): number {
    return this._status;
  }

  get statusText(): ByteString {
    return this._statusText;
  }

  get headers(): Headers {
    return this._headers;
  }


}


// https://fetch.spec.whatwg.org/#globalfetch
// Window implements GlobalFetch;
interface Window {
  fetch(input: RequestInfo, init?: RequestInit): Promise<IResponse>;
};

this.fetch = function(input: RequestInfo, init?: RequestInit): Promise<IResponse> {
  var p = new Promise<IResponse>((resolve, reject) => {
    try {
      var r = (new Request(input, init)).request;
    } catch(e) {
      reject(e);
    }
  });

  return p
}

// WorkerGlobalScope implements GlobalFetch;




/////////////// for TESTING ///////////////
// tests
interface Error {
  stack: string;
}

function assert(actual, expected) {
  function line() {
    var err = new Error();
    return err.stack.split('\n')[3].split(':').reverse()[1];
  };
  console.log('.');
  console.assert(actual === expected, line() + '\nact: ' + actual + '\nexp: ' + expected);
}

function fail() {
  throw new Error("assertion error");
}

function test(name: string, fn: any): any {
  var tests = [];
  tests.push(fn);
  return function t(fn: any): any {
    if (fn === undefined) {
      console.log(name);
      tests.forEach((fn) => {
        fn();
      });
      return
    }
    tests.push(fn);
    return t;
  };
}
/////////////// for TESTING ///////////////


/////////////////////////////
/// Headers Tests
/////////////////////////////
test("Headers", () => {
  // init wit Headers
  var headersInit: Headers = new Headers();
  headersInit.append("key", "value");

  var headers: Headers = new Headers(headersInit);
  assert(headers.get("key"), "value");
})(() => {
  // init with ByteString[][]
  var headersInit: ByteString[][] = [["k1", "v1"], ["k2", "v2"]];

  var headers: Headers = new Headers(headersInit);
  assert(headers.get("k1"), "v1");
  assert(headers.get("k2"), "v2");

  try {
    var headers: Headers = new Headers([["key"]]);
    fail();
  } catch (err) {
    assert(err.name, "TypeError");
  }

  try {
    var headers: Headers = new Headers([["key", "value", "zzz"]]);
    fail();
  } catch (err) {
    assert(err.name, "TypeError");
  }
})(() => {
  // init with OpenEndedDictionary
  var headersInit: OpenEndedDictionary = { "k1": "v1", "k2": "v2" };

  var headers: Headers = new Headers(headersInit);
  assert(headers.get("k1"), "v1");
  assert(headers.get("k2"), "v2");
  var header: Header = new Header("key", "value");
  assert(header.name,  "key");
  assert(header.value, "value");
})(() => {
  // API
  var headers: Headers = new Headers();
  assert(headers.append("key", "value"), undefined);
  assert(headers.get("key"), "value");
  assert(headers.has("key"), true);
  assert(headers.has("k"), false);
  assert(headers.append("key", "v2"), undefined);

  var values = headers.getAll("key");
  assert(values.length, 2);
  assert(values[0], "value");
  assert(values[1], "v2");

  headers.delete("key");
  assert(headers.getAll("key").length, 0);
})(() => {
  // set
  var headers: Headers = new Headers();
  headers.set("key", "value1");
  assert(headers.get("key"), "value1");
  assert(headers.getAll("key").length, 1);

  headers.append("key", "value2");
  assert(headers.getAll("key").length, 2);
  headers.set("key", "vvvv");
  assert(headers.getAll("key").length, 1);

  var headers: Headers = new Headers();
  headers.append("k0", "v0");
  headers.append("k1", "v1");
  headers.append("k0", "v2");
  headers.append("k3", "v3");
  headers.append("k0", "v4");

  headers.set("k0", "vvvv");
  assert(headers.getAll("k0").length, 1);
  assert(headers.get("k0"), "vvvv");
})();
