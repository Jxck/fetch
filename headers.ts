/// <reference path="es6-promise.d.ts" />
/// <reference path="webidl.d.ts" />

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
