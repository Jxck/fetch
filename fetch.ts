/// <reference path="es6-promise.d.ts" />

type ByteString = string;
type BufferSource = Object;
type URLSearchParams = Object;
type USVString = string;
type DOMString = string;
type OpenEndedDictionary = Object;

enum Method {
  OPTIONS,
  GET,
  HEAD,
  POST,
  PUT,
  DELETE,
  TRACE,
  CONNECT,
}

enum SimpleMethod {
  GET,
  HEAD,
  POST
}

enum ForbiddenMethod {
  CONNECT,
  TRACE,
  TRACK
}

enum RequestContext {
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

enum ContextFrameType {
  "auxiliary",
  "top-level",
  "nested",
  "none"
}

enum RequestMode {
  "same-origin",
  "no-cors",
  "cors"
};

enum RequestCredentials {
  "omit",
  "same-origin",
  "include"
};

enum RequestCache {
  "default",
  "bypass",
  "reload",
  "revalidate",
  "force-cache",
  "offline"
};

enum ResponseType {
  "basic",
  "cors",
  "default",
  "error",
  "opaque"
};

enum ForbiddenHeaderName {
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

function isArray(o: any): boolean {
  return Object.prototype.toString.call(o) === "[object Array]";
}

function isForbiddenHeaderName(name: ByteString): boolean {
  if (ForbiddenHeaderName[name] != undefined) {
    return true;
  }
  var reg = /^(Proxy\-|Sec\-)/
  if (reg.exec(name)) {
    return true;
  }

  return false;
}

function isForbiddenResponseHeaderName(name: ByteString): boolean {
  if (["Set-Cookie", "Set-Cookie2"].indexOf(name)) {
    return true;
  }
  return false;
}

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
  if (ForbiddenMethod[method]) {
    return true;
  }
  return false
}

// typedef (Headers or sequence<sequence<ByteString>> or OpenEndedDictionary<ByteString>) HeadersInit;
type HeadersInit = Headers | ByteString[][] | OpenEndedDictionary;

interface IHeaders {
  append(name, value: ByteString): void;
  delete(name: ByteString):        void;
  get(name: ByteString):           ByteString;
  getAll(name: ByteString):        ByteString[];
  has(name: ByteString):           boolean;
  set(name, value: ByteString):    void;
  // iterable<ByteString, ByteString>;
};

class Header {
  name:  ByteString;
  value: ByteString;
  constructor(name, value: ByteString) {
    this.name  = name;
    this.value = value;
  }
}

class Headers implements IHeaders{
  public headerList: Header[];
  public guard: string = 'none';
  constructor(init?: HeadersInit) {

    if (init instanceof Headers) { // Headers
      var headerListCopy = init.headerList;
      headerListCopy.forEach((header) => {
        this.append(header.name, header.value);
      });
      return;
    }

    if (isArray(init)) { // ByteString[][]
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

  append(name, value: ByteString): void {
    if (!name || !value) {
      throw new TypeError("invalid name/value");
    }

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

    name = name.toLowerCase();
    this.headerList.push(new Header(name, value));
  }

  delete(name: ByteString): void {
    if (!name) {
      throw new TypeError("invalid name");
    }

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

    this.headerList = this.headerList.filter((header: Header) => {
      return header.name !== name;
    });
  }

  get(name: ByteString) :ByteString {
    if (!name) {
      throw new TypeError("invalid name");
    }

    var value: ByteString = null;
    this.headerList.forEach((header: Header) => {
      if (header.name === name) {
        value = header.value;
        return;
      }
    });

    return value;
  }

  getAll(name: ByteString) :ByteString[] {
    if (!name) {
      throw new TypeError("invalid name");
    }

    var result: ByteString[] = this.headerList.reduce((acc: ByteString[], header: Header) => {
      if (header.name === name) {
        acc.push(header.value);
      }
      return acc;
    }, []);

    return result;
  }

  has(name: ByteString) :boolean {
    if (!name) {
      throw new TypeError("invalid name");
    }

    return this.headerList.some((header: Header) => {
      return header.name === name;
    });
  }

  set(name, value: ByteString): void {
    if (!name || !value) {
      throw new TypeError("invalid name/value");
    }

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

type object = JSON;
type BodyInit = Blob | BufferSource | FormData | URLSearchParams | USVString

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

type RequestInfo = Request | USVString;

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

// dictionary RequestInit
var RequestInit: {
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

  get method(): ByteString {
    return this._method;
  }

  get url(): USVString {
    return this._url;
  }

  get headers(): Headers {
    return this._headers;
  }

  get context(): RequestContext {
    return this._context;
  }

  get referrer(): DOMString {
    // TODO:
    return null;
  }

  get mode(): ByteString{
    switch(this.mode) {
      case RequestMode[same-origin]:
        return "same-origin";
      case "no-cors":
        return "no-cors";
      case "cors":
        return "cors";
      case "cors-with-forced-preflight":
        return "cors";
    }
    return this.mode;
  }

  get credentials(): RequestCredentials {
    return this._credentials;
  }

  get cache(): RequestCache {
    if (this.cache === "force-offline") {
      return "force-offline";
    }
    return this.cache;
  }

  get bodyUsed(): boolean {
    return this.bodyUsed;
  }

  // method on IRequest
  public clone(): IRequest{
    return null;
  }

  // method on IBody
  public arrayBuffer(): Promise<ArrayBuffer>{
    return null;
  }
  public blob(): Promise<Blob>{
    return null;
  }
  public formData(): Promise<FormData>{
    return null;
  }
  public json(): Promise<JSON>{
    return null;
  }
  public text(): Promise<USVString>{
    return null;
  }

  // Request
  public request:  request;
  public body:     Body;
  public usedFlag: boolean;
  public mimeType: string;

  constructor(input: RequestInfo, init?: typeof RequestInit) {
    // can't detect class by instanceof
    // if (input instanceof Request) { }

    var request: request;
    if (typeof input === "object" && input.body !== null) { // Request
      if (input.usedFlag) {
        throw new TypeError("Request already used");
      }
      input.usedFlag = true;

      request = input.request;
    } else {
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
        cacheMode : "default"
      }
    }

    request = {
      url : request.url,
      method : request.method,
      headerList : request.headerList,
      unsafeRequestFlag : true,
      body : request.body,
      //TODO: client : entry settings object,
      //TODO: origin : entry settings object.origin,
      forceOriginHeaderFlag : true,
      sameOriginDataURLFlag : true,
      //TODO: referrer : request.client,
      context : 'fetch',
      mode : request.mode,
      credentialsMode : request.credentialsMode,
      cacheMode : request.cacheMode
    }

    var fallbackMode = null;
    var fallbackCredentials = null;
    var fallbackCache = null;

    //TODO:
    function parseURL(url: string): string {
      return url;
    }
    if (typeof input === "string") {
      var parsedURL = parseURL(input);
      request.url = parsedURL;

      fallbackMode = "CORS";
      fallbackCredentials = "omit";
      fallbackCache = "default";
    }

    var mode = init.mode? init.mode: fallbackMode;
    if (mode != null) request.mode = mode;

    var credentials = init.credentials? init.credentials: fallbackCredentials;
    if (credentials != null) request.credentialsMode = credentials;

    var cache = init.cache? init.cache: fallbackCache;
    if (cache != null) request.cacheMode = cache;

    if (init.method) {
      var method = init.method;
      if(isForbiddenMethod(method)) {
        throw new TypeError("forbidden method " + method);
      }
      method = method.toUpperCase();
      request.method = method;
    }

    this.request = request;
    this._headers = new Headers();

    var headers = this.request._headers;

    this.request._headers = null;

    // 19
    if (this.request.mode === "no-cors") {
      if (!isSimpleMethod(this.request.method)) {
        throw new TypeError("not simple method" + method);
      }

    }


  }


}

/**
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

class ResponseInit {
  status: number = 200;
  statusText: ByteString  = "OK";
  headers: HeadersInit;
};


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
