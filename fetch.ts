/// <reference path="es6-promise.d.ts" />

// http://heycam.github.io/webidl/#idl-ByteString
type ByteString = string;

// http://heycam.github.io/webidl/#common-BufferSource
type BufferSource = Object;

// https://url.spec.whatwg.org/#urlsearchparams
type URLSearchParams = Object;

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

// https://fetch.spec.whatwg.org/#forbidden-method
enum ForbiddenMethodEnum {
  CONNECT,
  TRACE,
  TRACK
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

function isForbiddenMethod(method: ByteString): boolean {
  if (ForbiddenMethodEnum[method] !== undefined) {
    return true;
  }
  return false
}

function isSimpleMethod(method: ByteString): boolean {
  if (SimpleMethodEnum[method] !== undefined) {
    return true;
  }
  return false;
}

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

// https://fetch.spec.whatwg.org/#headers
class Headers implements IHeaders{
  public headerList: Header[];
  public guard: string = 'none';

  // https://fetch.spec.whatwg.org/#dom-headers
  constructor(init?: HeadersInit) {

    if (init instanceof Headers) { // Headers
      var headerListCopy = init.headerList;
      headerListCopy.forEach((header) => {
        this.append(header.name, header.value);
      });
      return;
    }

    if (Array.isArray(init)) { // ByteString[][]
      var headerSequence = <ByteString[][]> init;
      headerSequence.forEach((header) => {
        if(header.length === 2) {
          throw new TypeError("init for Headers was incorrect BytesString Sequence");
        }
        this.append(header[0], header[1]);
      });
      return;
    }

    if (init) { // OpenEndedDictionary
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
  }

  // https://fetch.spec.whatwg.org/#dom-headers-delete
  delete(name: ByteString): void {
    // step 1
    if (!name) {
      throw new TypeError("invalid name");
    }

    // step 2, 3, 4, 5
    switch(this.guard) {
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

    // step 2, 3, 4, 5
    switch(this.guard) {
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
    var indexes: number[] = this.headerList.reduce((acc: number[], header: Header, index: number) => {
      if (header.name === name) {
        acc.push(index);
      }
      return acc;
    }, []);

    var len = indexes.length;
    if (len === 0) {
      // no entry, so append to last
      this.append(name, value);
    } else {
      // splice chenges index, so reverse and process from back
      indexes.reverse().forEach((e, i: number) => {
        if(i === len) {
          // only replace first entry
          this.headerList[e].value = value;
        } else {
          // remove duplicate from last
          this.headerList = this.headerList.splice(e, 1);
        }
      });
    }
  }
}

// https://fetch.spec.whatwg.org/#json
type object = JSON;
// https://fetch.spec.whatwg.org/#bodyinit
type BodyInit = Blob | BufferSource | FormData | URLSearchParams | USVString

// https://fetch.spec.whatwg.org/#body
interface IBody {
  // readonly property
  bodyUsed: boolean;
  body:     Body;
  usedFlag: boolean;
  mimeType: string;

  // method
  arrayBuffer(): Promise<ArrayBuffer>;
  blob():        Promise<Blob>;
  formData():    Promise<FormData>;
  json():        Promise<JSON>;
  text():        Promise<USVString>;
};

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
        method:                "GET",
        headerList:            [],
        unsafeRequestFlag:     false,
        body:                  null,
        //TODO: client:        entry settings object,
        //TODO: origin:        entry settings object.origin,
        forceOriginHeaderFlag: false,
        sameOriginDataURLFlag: false,
        referrer:              null,
        context:               null,
        mode:                  "no-cors",
        credentialsMode:       "omit",
        cacheMode:             "default"
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
    var fallbackMode = null;
    var fallbackCredentials = null;
    var fallbackCache = null;

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
      fallbackMode = "CORS";
      fallbackCredentials = "omit";
      fallbackCache = "default";
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
        var hasContentType = request.headerList.some(function(header) {
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

// TODO: implement
function extract(body: Body): any {
  return null;
}



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
  status:     number = 200;
  statusText: ByteString  = "OK";
  headers:    HeadersInit;
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
