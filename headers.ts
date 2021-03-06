/// <reference path="webidl.d.ts" />

// https://fetch.spec.whatwg.org/#forbidden-header-name
var ForbiddenHeaderName = {
  "Accept-Charset":     "Accept-Charset",
  "Accept-Encoding":    "Accept-Encoding",
  "Access-Control-Request-Headers":  "Access-Control-Request-Headers",
  "Access-Control-Request-Method":   "Access-Control-Request-Method",
  "Connection":         "Connection",
  "Content-Length":     "Content-Length",
  "Cookie":             "Cookie",
  "Cookie2":            "Cookie2",
  "Date":               "Date",
  "DNT":                "DNT",
  "Expect":             "Expect",
  "Host":               "Host",
  "Keep-Alive":         "Keep-Alive",
  "Origin":             "Origin",
  "Referer":            "Referer",
  "TE":                 "TE",
  "Trailer":            "Trailer",
  "Transfer-Encoding":  "Transfer-Encoding",
  "Upgrade":            "Upgrade",
  "User-Agent":         "User-Agent",
  "Via":                "Via"
};
function isForbiddenHeaderName(name: ByteString): boolean {
  if (ForbiddenHeaderName[name] !== undefined) {
    return true;
  }
  var reg = /^(Proxy\-|Sec\-)/
  if (reg.exec(name)) {
    return true;
  }

  return false;
}

test("forbidden header", () => {
  assert(isForbiddenHeaderName("Via"), true);
  assert(isForbiddenHeaderName("Proxy-Foo"), true);
  assert(isForbiddenHeaderName("Proxy-"), true);
  assert(isForbiddenHeaderName("Sec-Bar"), true);
  assert(isForbiddenHeaderName("Sec-"), true);

  assert(isForbiddenHeaderName("Set-Cookie"), false);
})();

// https://fetch.spec.whatwg.org/#forbidden-response-header-name
var ForbiddenResponseHeaderName = {
  "Set-Cookie": "Set-Cookie",
  "Set-Cookie2": "Set-Cookie2"
}
function isForbiddenResponseHeaderName(name: ByteString): boolean {
  return ForbiddenResponseHeaderName[name] !== undefined;
}

test("forbidden response header", () => {
  assert(isForbiddenResponseHeaderName("Set-Cookie"), true);
  assert(isForbiddenResponseHeaderName("Set-Cookie2"), true);
  assert(isForbiddenResponseHeaderName("Set-Cookie3"), false);
})();

// https://fetch.spec.whatwg.org/#simple-header
var SimpleHeaderName = {
  "Accept":           "Accept",
  "Accept-Language":  "Accept-Language",
  "Content-Language": "Content-Language"
}
var SimpleHeaderValue = {
  "application/x-www-form-urlencoded": "application/x-www-form-urlencoded",
  "multipart/form-data":               "multipart/form-data",
  "text/plain":                        "text/plain"
}
function isSimpleHeader(name, value: ByteString): boolean {
  if (SimpleHeaderName[name] !== undefined) {
    return true;
  }

  if (name === "Content-Type") {
    // TODO: parse value https://fetch.spec.whatwg.org/#concept-header-parse
    if (SimpleHeaderValue[value] !== undefined) {
      return true;
    }
  }

  return false;
}

test("simple header", () => {
  assert(isSimpleHeader("Accept", "Foo"), true);
  assert(isSimpleHeader("Set-Cookie", "Foo"), false);
  assert(isSimpleHeader("Content-Type", "text/plain"), true);
  assert(isSimpleHeader("Content-Type", "application/json"), false);
})();

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
    // TODO: validation
    this.name  = name;
    this.value = value;
  }
}

var Guard = {
  "immutable":       "immutable",
  "request":         "request",
  "request-no-CORS": "request-no-CORS",
  "response":        "response",
  "none":            "none",
}

function copy<T>(obj: T): T {
  return JSON.parse(JSON.stringify(obj));
}

// https://fetch.spec.whatwg.org/#headers
class Headers implements IHeaders{
  public headerList: Header[] = [];
  public guard: string = Guard.none;

  // https://fetch.spec.whatwg.org/#dom-headers
  constructor(init?: HeadersInit) {
    // step 1
    var headers = this; // new Headers object

    // step 2
    if (init !== undefined) {
      this.fill(headers, init);
    }

    // step 3
    return headers;
  }

  // https://fetch.spec.whatwg.org/#concept-headers-fill
  private fill(headers: Headers, object: HeadersInit) {
    // step 1 Headers
    if (object instanceof Headers) {
      var headerListCopy: Header[] = copy(object.headerList);
      headerListCopy.forEach((header: Header) => {
        headers.append(header.name, header.value);
      });
      return;
    }

    // step 2 ByteString[][]
    if (Array.isArray(object)) {
      var headerSequence = <ByteString[][]> object;
      headerSequence.forEach((header) => {
        if(header.length !== 2) {
          throw new TypeError("init for Headers was incorrect BytesString Sequence");
        }
        headers.append(header[0], header[1]);
      });
      return;
    }

    // step 3 OpenEndedDictionary
    if (typeof object === "object") {
      Object.keys(object).forEach((key) => {
        headers.append(key.toString(), object[key]);
      });
    }
  }

  // https://fetch.spec.whatwg.org/#dom-headers-append
  append(name, value: ByteString): void {
    // https://fetch.spec.whatwg.org/#concept-headers-append
    // step 1
    if (!name || !value) {
      // TODO name/value validation
      throw new TypeError("invalid name/value");
    }

    // step 2, 3, 4, 5
    switch(this.guard) {
      case Guard.immutable:
        throw new TypeError("operation to immutable headers");
      case Guard.request:
        if (isForbiddenHeaderName(name)) {
          return;
        }
      case Guard["request-no-CORS"]:
        if (!isSimpleHeader(name, value)) {
          return;
        }
      case Guard.response:
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
      case Guard.immutable:
        throw new TypeError("operation to immutable headers");
      case Guard.request:
        if (isForbiddenHeaderName(name)) {
          return;
        }
      case Guard["request-no-CORS"]:
        if (!isSimpleHeader(name, "invalid")) {
          return;
        }
      case Guard.response:
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
      case Guard.immutable:
        throw new TypeError("operation to immutable headers");
      // step 3
      case Guard.request:
        if (isForbiddenHeaderName(name)) {
          return;
        }
      // step 4
      case Guard["request-no-CORS"]:
        if (!isSimpleHeader(name, "invalid")) {
          return;
        }
      // step 5
      case Guard.response:
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
/// Headers Tests
/////////////////////////////
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
