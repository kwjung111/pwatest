// node_modules/scandit-web-datacapture-core/build/js/index.js
var Pr = Object.create;
var Ft = Object.defineProperty;
var zr = Object.defineProperties;
var Fr = Object.getOwnPropertyDescriptor;
var jr = Object.getOwnPropertyDescriptors;
var Wr = Object.getOwnPropertyNames;
var wi = Object.getOwnPropertySymbols;
var Ur = Object.getPrototypeOf;
var yi = Object.prototype.hasOwnProperty;
var Br = Object.prototype.propertyIsEnumerable;
var zt = (s, e, t) => e in s ? Ft(s, e, { enumerable: true, configurable: true, writable: true, value: t }) : s[e] = t;
var Q = (s, e) => {
  for (var t in e || (e = {}))
    yi.call(e, t) && zt(s, t, e[t]);
  if (wi)
    for (var t of wi(e))
      Br.call(e, t) && zt(s, t, e[t]);
  return s;
};
var ae = (s, e) => zr(s, jr(e));
var jt = (s, e) => () => (e || s((e = { exports: {} }).exports, e), e.exports);
var Vr = (s, e, t, r2) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let n of Wr(e))
      !yi.call(s, n) && n !== t && Ft(s, n, { get: () => e[n], enumerable: !(r2 = Fr(e, n)) || r2.enumerable });
  return s;
};
var Wt = (s, e, t) => (t = s != null ? Pr(Ur(s)) : {}, Vr(e || !s || !s.__esModule ? Ft(t, "default", { value: s, enumerable: true }) : t, s));
var l = (s, e, t) => (zt(s, typeof e != "symbol" ? e + "" : e, t), t);
var Li = jt((Mi, _i) => {
  (function(s) {
    var e;
    if (typeof define == "function" && define.amd && (define(s), e = true), typeof Mi == "object" && (_i.exports = s(), e = true), !e) {
      var t = window.Cookies, r2 = window.Cookies = s();
      r2.noConflict = function() {
        return window.Cookies = t, r2;
      };
    }
  })(function() {
    function s() {
      for (var r2 = 0, n = {}; r2 < arguments.length; r2++) {
        var u2 = arguments[r2];
        for (var m in u2)
          n[m] = u2[m];
      }
      return n;
    }
    function e(r2) {
      return r2.replace(/(%[0-9A-Z]{2})+/g, decodeURIComponent);
    }
    function t(r2) {
      function n() {
      }
      function u2(h2, v2, b) {
        if (!(typeof document > "u")) {
          b = s({ path: "/" }, n.defaults, b), typeof b.expires == "number" && (b.expires = new Date(new Date() * 1 + b.expires * 864e5)), b.expires = b.expires ? b.expires.toUTCString() : "";
          try {
            var i = JSON.stringify(v2);
            /^[\{\[]/.test(i) && (v2 = i);
          } catch (c) {
          }
          v2 = r2.write ? r2.write(v2, h2) : encodeURIComponent(String(v2)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), h2 = encodeURIComponent(String(h2)).replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent).replace(/[\(\)]/g, escape);
          var a = "";
          for (var o in b)
            !b[o] || (a += "; " + o, b[o] !== true && (a += "=" + b[o].split(";")[0]));
          return document.cookie = h2 + "=" + v2 + a;
        }
      }
      function m(h2, v2) {
        if (!(typeof document > "u")) {
          for (var b = {}, i = document.cookie ? document.cookie.split("; ") : [], a = 0; a < i.length; a++) {
            var o = i[a].split("="), c = o.slice(1).join("=");
            !v2 && c.charAt(0) === '"' && (c = c.slice(1, -1));
            try {
              var d = e(o[0]);
              if (c = (r2.read || r2)(c, d) || e(c), v2)
                try {
                  c = JSON.parse(c);
                } catch (g) {
                }
              if (b[d] = c, h2 === d)
                break;
            } catch (g) {
            }
          }
          return h2 ? b[h2] : b;
        }
      }
      return n.set = u2, n.get = function(h2) {
        return m(h2, false);
      }, n.getJSON = function(h2) {
        return m(h2, true);
      }, n.remove = function(h2, v2) {
        u2(h2, "", s(v2, { expires: -1 }));
      }, n.defaults = {}, n.withConverter = t, n;
    }
    return t(function() {
    });
  });
});
var xi = jt((Ue, rt) => {
  (function(s, e) {
    "use strict";
    var t = "1.0.34", r2 = "", n = "?", u2 = "function", m = "undefined", h2 = "object", v2 = "string", b = "major", i = "model", a = "name", o = "type", c = "vendor", d = "version", g = "architecture", p = "console", S2 = "mobile", C = "tablet", _ = "smarttv", j2 = "wearable", $2 = "embedded", Z2 = 350, P2 = "Amazon", I2 = "Apple", X = "ASUS", ee = "BlackBerry", K2 = "Browser", re = "Chrome", z = "Edge", A = "Firefox", E = "Google", O2 = "Huawei", y2 = "LG", x2 = "Microsoft", N2 = "Motorola", M2 = "Opera", U = "Samsung", ze = "Sharp", Ce = "Sony", Ot = "Viera", Nt = "Xiaomi", Tt = "Zebra", gi = "Facebook", fi = "Chromium OS", vi = "Mac OS", Tr = function(R2, W2) {
      var T = {};
      for (var J in R2)
        W2[J] && W2[J].length % 2 === 0 ? T[J] = W2[J].concat(R2[J]) : T[J] = R2[J];
      return T;
    }, tt = function(R2) {
      for (var W2 = {}, T = 0; T < R2.length; T++)
        W2[R2[T].toUpperCase()] = R2[T];
      return W2;
    }, bi = function(R2, W2) {
      return typeof R2 === v2 ? Fe(W2).indexOf(Fe(R2)) !== -1 : false;
    }, Fe = function(R2) {
      return R2.toLowerCase();
    }, Rr = function(R2) {
      return typeof R2 === v2 ? R2.replace(/[^\d\.]/g, r2).split(".")[0] : e;
    }, Rt = function(R2, W2) {
      if (typeof R2 === v2)
        return R2 = R2.replace(/^\s\s*/, r2), typeof W2 === m ? R2 : R2.substring(0, Z2);
    }, je = function(R2, W2) {
      for (var T = 0, J, ge, ce, w2, We, ue; T < W2.length && !We; ) {
        var Pt = W2[T], Ai = W2[T + 1];
        for (J = ge = 0; J < Pt.length && !We && Pt[J]; )
          if (We = Pt[J++].exec(R2), We)
            for (ce = 0; ce < Ai.length; ce++)
              ue = We[++ge], w2 = Ai[ce], typeof w2 === h2 && w2.length > 0 ? w2.length === 2 ? typeof w2[1] == u2 ? this[w2[0]] = w2[1].call(this, ue) : this[w2[0]] = w2[1] : w2.length === 3 ? typeof w2[1] === u2 && !(w2[1].exec && w2[1].test) ? this[w2[0]] = ue ? w2[1].call(this, ue, w2[2]) : e : this[w2[0]] = ue ? ue.replace(w2[1], w2[2]) : e : w2.length === 4 && (this[w2[0]] = ue ? w2[3].call(this, ue.replace(w2[1], w2[2])) : e) : this[w2] = ue || e;
        T += 2;
      }
    }, kt = function(R2, W2) {
      for (var T in W2)
        if (typeof W2[T] === h2 && W2[T].length > 0) {
          for (var J = 0; J < W2[T].length; J++)
            if (bi(W2[T][J], R2))
              return T === n ? e : T;
        } else if (bi(W2[T], R2))
          return T === n ? e : T;
      return R2;
    }, kr = { "1.0": "/8", "1.2": "/1", "1.3": "/3", "2.0": "/412", "2.0.2": "/416", "2.0.3": "/417", "2.0.4": "/419", "?": "/" }, Si = { ME: "4.90", "NT 3.11": "NT3.51", "NT 4.0": "NT4.0", 2e3: "NT 5.0", XP: ["NT 5.1", "NT 5.2"], Vista: "NT 6.0", 7: "NT 6.1", 8: "NT 6.2", "8.1": "NT 6.3", 10: ["NT 6.4", "NT 10.0"], RT: "ARM" }, Ci = { browser: [[/\b(?:crmo|crios)\/([\w\.]+)/i], [d, [a, "Chrome"]], [/edg(?:e|ios|a)?\/([\w\.]+)/i], [d, [a, "Edge"]], [/(opera mini)\/([-\w\.]+)/i, /(opera [mobiletab]{3,6})\b.+version\/([-\w\.]+)/i, /(opera)(?:.+version\/|[\/ ]+)([\w\.]+)/i], [a, d], [/opios[\/ ]+([\w\.]+)/i], [d, [a, M2 + " Mini"]], [/\bopr\/([\w\.]+)/i], [d, [a, M2]], [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/ ]?([\w\.]*)/i, /(avant |iemobile|slim)(?:browser)?[\/ ]?([\w\.]*)/i, /(ba?idubrowser)[\/ ]?([\w\.]+)/i, /(?:ms|\()(ie) ([\w\.]+)/i, /(flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon|rekonq|puffin|brave|whale(?!.+naver)|qqbrowserlite|qq|duckduckgo)\/([-\w\.]+)/i, /(weibo)__([\d\.]+)/i], [a, d], [/(?:\buc? ?browser|(?:juc.+)ucweb)[\/ ]?([\w\.]+)/i], [d, [a, "UC" + K2]], [/microm.+\bqbcore\/([\w\.]+)/i, /\bqbcore\/([\w\.]+).+microm/i], [d, [a, "WeChat(Win) Desktop"]], [/micromessenger\/([\w\.]+)/i], [d, [a, "WeChat"]], [/konqueror\/([\w\.]+)/i], [d, [a, "Konqueror"]], [/trident.+rv[: ]([\w\.]{1,9})\b.+like gecko/i], [d, [a, "IE"]], [/yabrowser\/([\w\.]+)/i], [d, [a, "Yandex"]], [/(avast|avg)\/([\w\.]+)/i], [[a, /(.+)/, "$1 Secure " + K2], d], [/\bfocus\/([\w\.]+)/i], [d, [a, A + " Focus"]], [/\bopt\/([\w\.]+)/i], [d, [a, M2 + " Touch"]], [/coc_coc\w+\/([\w\.]+)/i], [d, [a, "Coc Coc"]], [/dolfin\/([\w\.]+)/i], [d, [a, "Dolphin"]], [/coast\/([\w\.]+)/i], [d, [a, M2 + " Coast"]], [/miuibrowser\/([\w\.]+)/i], [d, [a, "MIUI " + K2]], [/fxios\/([-\w\.]+)/i], [d, [a, A]], [/\bqihu|(qi?ho?o?|360)browser/i], [[a, "360 " + K2]], [/(oculus|samsung|sailfish|huawei)browser\/([\w\.]+)/i], [[a, /(.+)/, "$1 " + K2], d], [/(comodo_dragon)\/([\w\.]+)/i], [[a, /_/g, " "], d], [/(electron)\/([\w\.]+) safari/i, /(tesla)(?: qtcarbrowser|\/(20\d\d\.[-\w\.]+))/i, /m?(qqbrowser|baiduboxapp|2345Explorer)[\/ ]?([\w\.]+)/i], [a, d], [/(metasr)[\/ ]?([\w\.]+)/i, /(lbbrowser)/i, /\[(linkedin)app\]/i], [a], [/((?:fban\/fbios|fb_iab\/fb4a)(?!.+fbav)|;fbav\/([\w\.]+);)/i], [[a, gi], d], [/(kakao(?:talk|story))[\/ ]([\w\.]+)/i, /(naver)\(.*?(\d+\.[\w\.]+).*\)/i, /safari (line)\/([\w\.]+)/i, /\b(line)\/([\w\.]+)\/iab/i, /(chromium|instagram)[\/ ]([-\w\.]+)/i], [a, d], [/\bgsa\/([\w\.]+) .*safari\//i], [d, [a, "GSA"]], [/headlesschrome(?:\/([\w\.]+)| )/i], [d, [a, re + " Headless"]], [/ wv\).+(chrome)\/([\w\.]+)/i], [[a, re + " WebView"], d], [/droid.+ version\/([\w\.]+)\b.+(?:mobile safari|safari)/i], [d, [a, "Android " + K2]], [/(chrome|omniweb|arora|[tizenoka]{5} ?browser)\/v?([\w\.]+)/i], [a, d], [/version\/([\w\.\,]+) .*mobile\/\w+ (safari)/i], [d, [a, "Mobile Safari"]], [/version\/([\w(\.|\,)]+) .*(mobile ?safari|safari)/i], [d, a], [/webkit.+?(mobile ?safari|safari)(\/[\w\.]+)/i], [a, [d, kt, kr]], [/(webkit|khtml)\/([\w\.]+)/i], [a, d], [/(navigator|netscape\d?)\/([-\w\.]+)/i], [[a, "Netscape"], d], [/mobile vr; rv:([\w\.]+)\).+firefox/i], [d, [a, A + " Reality"]], [/ekiohf.+(flow)\/([\w\.]+)/i, /(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo browser|minimo|conkeror|klar)[\/ ]?([\w\.\+]+)/i, /(seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([-\w\.]+)$/i, /(firefox)\/([\w\.]+)/i, /(mozilla)\/([\w\.]+) .+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir|obigo|mosaic|(?:go|ice|up)[\. ]?browser)[-\/ ]?v?([\w\.]+)/i, /(links) \(([\w\.]+)/i, /panasonic;(viera)/i], [a, d], [/(cobalt)\/([\w\.]+)/i], [a, [d, /master.|lts./, ""]]], cpu: [[/(?:(amd|x(?:(?:86|64)[-_])?|wow|win)64)[;\)]/i], [[g, "amd64"]], [/(ia32(?=;))/i], [[g, Fe]], [/((?:i[346]|x)86)[;\)]/i], [[g, "ia32"]], [/\b(aarch64|arm(v?8e?l?|_?64))\b/i], [[g, "arm64"]], [/\b(arm(?:v[67])?ht?n?[fl]p?)\b/i], [[g, "armhf"]], [/windows (ce|mobile); ppc;/i], [[g, "arm"]], [/((?:ppc|powerpc)(?:64)?)(?: mac|;|\))/i], [[g, /ower/, r2, Fe]], [/(sun4\w)[;\)]/i], [[g, "sparc"]], [/((?:avr32|ia64(?=;))|68k(?=\))|\barm(?=v(?:[1-7]|[5-7]1)l?|;|eabi)|(?=atmel )avr|(?:irix|mips|sparc)(?:64)?\b|pa-risc)/i], [[g, Fe]]], device: [[/\b(sch-i[89]0\d|shw-m380s|sm-[ptx]\w{2,4}|gt-[pn]\d{2,4}|sgh-t8[56]9|nexus 10)/i], [i, [c, U], [o, C]], [/\b((?:s[cgp]h|gt|sm)-\w+|sc[g-]?[\d]+a?|galaxy nexus)/i, /samsung[- ]([-\w]+)/i, /sec-(sgh\w+)/i], [i, [c, U], [o, S2]], [/\((ip(?:hone|od)[\w ]*);/i], [i, [c, I2], [o, S2]], [/\((ipad);[-\w\),; ]+apple/i, /applecoremedia\/[\w\.]+ \((ipad)/i, /\b(ipad)\d\d?,\d\d?[;\]].+ios/i], [i, [c, I2], [o, C]], [/(macintosh);/i], [i, [c, I2]], [/\b(sh-?[altvz]?\d\d[a-ekm]?)/i], [i, [c, ze], [o, S2]], [/\b((?:ag[rs][23]?|bah2?|sht?|btv)-a?[lw]\d{2})\b(?!.+d\/s)/i], [i, [c, O2], [o, C]], [/(?:huawei|honor)([-\w ]+)[;\)]/i, /\b(nexus 6p|\w{2,4}e?-[atu]?[ln][\dx][012359c][adn]?)\b(?!.+d\/s)/i], [i, [c, O2], [o, S2]], [/\b(poco[\w ]+)(?: bui|\))/i, /\b; (\w+) build\/hm\1/i, /\b(hm[-_ ]?note?[_ ]?(?:\d\w)?) bui/i, /\b(redmi[\-_ ]?(?:note|k)?[\w_ ]+)(?: bui|\))/i, /\b(mi[-_ ]?(?:a\d|one|one[_ ]plus|note lte|max|cc)?[_ ]?(?:\d?\w?)[_ ]?(?:plus|se|lite)?)(?: bui|\))/i], [[i, /_/g, " "], [c, Nt], [o, S2]], [/\b(mi[-_ ]?(?:pad)(?:[\w_ ]+))(?: bui|\))/i], [[i, /_/g, " "], [c, Nt], [o, C]], [/; (\w+) bui.+ oppo/i, /\b(cph[12]\d{3}|p(?:af|c[al]|d\w|e[ar])[mt]\d0|x9007|a101op)\b/i], [i, [c, "OPPO"], [o, S2]], [/vivo (\w+)(?: bui|\))/i, /\b(v[12]\d{3}\w?[at])(?: bui|;)/i], [i, [c, "Vivo"], [o, S2]], [/\b(rmx[12]\d{3})(?: bui|;|\))/i], [i, [c, "Realme"], [o, S2]], [/\b(milestone|droid(?:[2-4x]| (?:bionic|x2|pro|razr))?:?( 4g)?)\b[\w ]+build\//i, /\bmot(?:orola)?[- ](\w*)/i, /((?:moto[\w\(\) ]+|xt\d{3,4}|nexus 6)(?= bui|\)))/i], [i, [c, N2], [o, S2]], [/\b(mz60\d|xoom[2 ]{0,2}) build\//i], [i, [c, N2], [o, C]], [/((?=lg)?[vl]k\-?\d{3}) bui| 3\.[-\w; ]{10}lg?-([06cv9]{3,4})/i], [i, [c, y2], [o, C]], [/(lm(?:-?f100[nv]?|-[\w\.]+)(?= bui|\))|nexus [45])/i, /\blg[-e;\/ ]+((?!browser|netcast|android tv)\w+)/i, /\blg-?([\d\w]+) bui/i], [i, [c, y2], [o, S2]], [/(ideatab[-\w ]+)/i, /lenovo ?(s[56]000[-\w]+|tab(?:[\w ]+)|yt[-\d\w]{6}|tb[-\d\w]{6})/i], [i, [c, "Lenovo"], [o, C]], [/(?:maemo|nokia).*(n900|lumia \d+)/i, /nokia[-_ ]?([-\w\.]*)/i], [[i, /_/g, " "], [c, "Nokia"], [o, S2]], [/(pixel c)\b/i], [i, [c, E], [o, C]], [/droid.+; (pixel[\daxl ]{0,6})(?: bui|\))/i], [i, [c, E], [o, S2]], [/droid.+ (a?\d[0-2]{2}so|[c-g]\d{4}|so[-gl]\w+|xq-a\w[4-7][12])(?= bui|\).+chrome\/(?![1-6]{0,1}\d\.))/i], [i, [c, Ce], [o, S2]], [/sony tablet [ps]/i, /\b(?:sony)?sgp\w+(?: bui|\))/i], [[i, "Xperia Tablet"], [c, Ce], [o, C]], [/ (kb2005|in20[12]5|be20[12][59])\b/i, /(?:one)?(?:plus)? (a\d0\d\d)(?: b|\))/i], [i, [c, "OnePlus"], [o, S2]], [/(alexa)webm/i, /(kf[a-z]{2}wi)( bui|\))/i, /(kf[a-z]+)( bui|\)).+silk\//i], [i, [c, P2], [o, C]], [/((?:sd|kf)[0349hijorstuw]+)( bui|\)).+silk\//i], [[i, /(.+)/g, "Fire Phone $1"], [c, P2], [o, S2]], [/(playbook);[-\w\),; ]+(rim)/i], [i, c, [o, C]], [/\b((?:bb[a-f]|st[hv])100-\d)/i, /\(bb10; (\w+)/i], [i, [c, ee], [o, S2]], [/(?:\b|asus_)(transfo[prime ]{4,10} \w+|eeepc|slider \w+|nexus 7|padfone|p00[cj])/i], [i, [c, X], [o, C]], [/ (z[bes]6[027][012][km][ls]|zenfone \d\w?)\b/i], [i, [c, X], [o, S2]], [/(nexus 9)/i], [i, [c, "HTC"], [o, C]], [/(htc)[-;_ ]{1,2}([\w ]+(?=\)| bui)|\w+)/i, /(zte)[- ]([\w ]+?)(?: bui|\/|\))/i, /(alcatel|geeksphone|nexian|panasonic(?!(?:;|\.))|sony(?!-bra))[-_ ]?([-\w]*)/i], [c, [i, /_/g, " "], [o, S2]], [/droid.+; ([ab][1-7]-?[0178a]\d\d?)/i], [i, [c, "Acer"], [o, C]], [/droid.+; (m[1-5] note) bui/i, /\bmz-([-\w]{2,})/i], [i, [c, "Meizu"], [o, S2]], [/(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[-_ ]?([-\w]*)/i, /(hp) ([\w ]+\w)/i, /(asus)-?(\w+)/i, /(microsoft); (lumia[\w ]+)/i, /(lenovo)[-_ ]?([-\w]+)/i, /(jolla)/i, /(oppo) ?([\w ]+) bui/i], [c, i, [o, S2]], [/(kobo)\s(ereader|touch)/i, /(archos) (gamepad2?)/i, /(hp).+(touchpad(?!.+tablet)|tablet)/i, /(kindle)\/([\w\.]+)/i, /(nook)[\w ]+build\/(\w+)/i, /(dell) (strea[kpr\d ]*[\dko])/i, /(le[- ]+pan)[- ]+(\w{1,9}) bui/i, /(trinity)[- ]*(t\d{3}) bui/i, /(gigaset)[- ]+(q\w{1,9}) bui/i, /(vodafone) ([\w ]+)(?:\)| bui)/i], [c, i, [o, C]], [/(surface duo)/i], [i, [c, x2], [o, C]], [/droid [\d\.]+; (fp\du?)(?: b|\))/i], [i, [c, "Fairphone"], [o, S2]], [/(u304aa)/i], [i, [c, "AT&T"], [o, S2]], [/\bsie-(\w*)/i], [i, [c, "Siemens"], [o, S2]], [/\b(rct\w+) b/i], [i, [c, "RCA"], [o, C]], [/\b(venue[\d ]{2,7}) b/i], [i, [c, "Dell"], [o, C]], [/\b(q(?:mv|ta)\w+) b/i], [i, [c, "Verizon"], [o, C]], [/\b(?:barnes[& ]+noble |bn[rt])([\w\+ ]*) b/i], [i, [c, "Barnes & Noble"], [o, C]], [/\b(tm\d{3}\w+) b/i], [i, [c, "NuVision"], [o, C]], [/\b(k88) b/i], [i, [c, "ZTE"], [o, C]], [/\b(nx\d{3}j) b/i], [i, [c, "ZTE"], [o, S2]], [/\b(gen\d{3}) b.+49h/i], [i, [c, "Swiss"], [o, S2]], [/\b(zur\d{3}) b/i], [i, [c, "Swiss"], [o, C]], [/\b((zeki)?tb.*\b) b/i], [i, [c, "Zeki"], [o, C]], [/\b([yr]\d{2}) b/i, /\b(dragon[- ]+touch |dt)(\w{5}) b/i], [[c, "Dragon Touch"], i, [o, C]], [/\b(ns-?\w{0,9}) b/i], [i, [c, "Insignia"], [o, C]], [/\b((nxa|next)-?\w{0,9}) b/i], [i, [c, "NextBook"], [o, C]], [/\b(xtreme\_)?(v(1[045]|2[015]|[3469]0|7[05])) b/i], [[c, "Voice"], i, [o, S2]], [/\b(lvtel\-)?(v1[12]) b/i], [[c, "LvTel"], i, [o, S2]], [/\b(ph-1) /i], [i, [c, "Essential"], [o, S2]], [/\b(v(100md|700na|7011|917g).*\b) b/i], [i, [c, "Envizen"], [o, C]], [/\b(trio[-\w\. ]+) b/i], [i, [c, "MachSpeed"], [o, C]], [/\btu_(1491) b/i], [i, [c, "Rotor"], [o, C]], [/(shield[\w ]+) b/i], [i, [c, "Nvidia"], [o, C]], [/(sprint) (\w+)/i], [c, i, [o, S2]], [/(kin\.[onetw]{3})/i], [[i, /\./g, " "], [c, x2], [o, S2]], [/droid.+; (cc6666?|et5[16]|mc[239][23]x?|vc8[03]x?)\)/i], [i, [c, Tt], [o, C]], [/droid.+; (ec30|ps20|tc[2-8]\d[kx])\)/i], [i, [c, Tt], [o, S2]], [/smart-tv.+(samsung)/i], [c, [o, _]], [/hbbtv.+maple;(\d+)/i], [[i, /^/, "SmartTV"], [c, U], [o, _]], [/(nux; netcast.+smarttv|lg (netcast\.tv-201\d|android tv))/i], [[c, y2], [o, _]], [/(apple) ?tv/i], [c, [i, I2 + " TV"], [o, _]], [/crkey/i], [[i, re + "cast"], [c, E], [o, _]], [/droid.+aft(\w)( bui|\))/i], [i, [c, P2], [o, _]], [/\(dtv[\);].+(aquos)/i, /(aquos-tv[\w ]+)\)/i], [i, [c, ze], [o, _]], [/(bravia[\w ]+)( bui|\))/i], [i, [c, Ce], [o, _]], [/(mitv-\w{5}) bui/i], [i, [c, Nt], [o, _]], [/Hbbtv.*(technisat) (.*);/i], [c, i, [o, _]], [/\b(roku)[\dx]*[\)\/]((?:dvp-)?[\d\.]*)/i, /hbbtv\/\d+\.\d+\.\d+ +\([\w\+ ]*; *([\w\d][^;]*);([^;]*)/i], [[c, Rt], [i, Rt], [o, _]], [/\b(android tv|smart[- ]?tv|opera tv|tv; rv:)\b/i], [[o, _]], [/(ouya)/i, /(nintendo) ([wids3utch]+)/i], [c, i, [o, p]], [/droid.+; (shield) bui/i], [i, [c, "Nvidia"], [o, p]], [/(playstation [345portablevi]+)/i], [i, [c, Ce], [o, p]], [/\b(xbox(?: one)?(?!; xbox))[\); ]/i], [i, [c, x2], [o, p]], [/((pebble))app/i], [c, i, [o, j2]], [/(watch)(?: ?os[,\/]|\d,\d\/)[\d\.]+/i], [i, [c, I2], [o, j2]], [/droid.+; (glass) \d/i], [i, [c, E], [o, j2]], [/droid.+; (wt63?0{2,3})\)/i], [i, [c, Tt], [o, j2]], [/(quest( 2| pro)?)/i], [i, [c, gi], [o, j2]], [/(tesla)(?: qtcarbrowser|\/[-\w\.]+)/i], [c, [o, $2]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+? mobile safari/i], [i, [o, S2]], [/droid .+?; ([^;]+?)(?: bui|\) applew).+?(?! mobile) safari/i], [i, [o, C]], [/\b((tablet|tab)[;\/]|focus\/\d(?!.+mobile))/i], [[o, C]], [/(phone|mobile(?:[;\/]| [ \w\/\.]*safari)|pda(?=.+windows ce))/i], [[o, S2]], [/(android[-\w\. ]{0,9});.+buil/i], [i, [c, "Generic"]]], engine: [[/windows.+ edge\/([\w\.]+)/i], [d, [a, z + "HTML"]], [/webkit\/537\.36.+chrome\/(?!27)([\w\.]+)/i], [d, [a, "Blink"]], [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /ekioh(flow)\/([\w\.]+)/i, /(khtml|tasman|links)[\/ ]\(?([\w\.]+)/i, /(icab)[\/ ]([23]\.[\d\.]+)/i], [a, d], [/rv\:([\w\.]{1,9})\b.+(gecko)/i], [d, a]], os: [[/microsoft (windows) (vista|xp)/i], [a, d], [/(windows) nt 6\.2; (arm)/i, /(windows (?:phone(?: os)?|mobile))[\/ ]?([\d\.\w ]*)/i, /(windows)[\/ ]?([ntce\d\. ]+\w)(?!.+xbox)/i], [a, [d, kt, Si]], [/(win(?=3|9|n)|win 9x )([nt\d\.]+)/i], [[a, "Windows"], [d, kt, Si]], [/ip[honead]{2,4}\b(?:.*os ([\w]+) like mac|; opera)/i, /cfnetwork\/.+darwin/i], [[d, /_/g, "."], [a, "iOS"]], [/(mac os x) ?([\w\. ]*)/i, /(macintosh|mac_powerpc\b)(?!.+haiku)/i], [[a, vi], [d, /_/g, "."]], [/droid ([\w\.]+)\b.+(android[- ]x86|harmonyos)/i], [d, a], [/(android|webos|qnx|bada|rim tablet os|maemo|meego|sailfish)[-\/ ]?([\w\.]*)/i, /(blackberry)\w*\/([\w\.]*)/i, /(tizen|kaios)[\/ ]([\w\.]+)/i, /\((series40);/i], [a, d], [/\(bb(10);/i], [d, [a, ee]], [/(?:symbian ?os|symbos|s60(?=;)|series60)[-\/ ]?([\w\.]*)/i], [d, [a, "Symbian"]], [/mozilla\/[\d\.]+ \((?:mobile|tablet|tv|mobile; [\w ]+); rv:.+ gecko\/([\w\.]+)/i], [d, [a, A + " OS"]], [/web0s;.+rt(tv)/i, /\b(?:hp)?wos(?:browser)?\/([\w\.]+)/i], [d, [a, "webOS"]], [/watch(?: ?os[,\/]|\d,\d\/)([\d\.]+)/i], [d, [a, "watchOS"]], [/crkey\/([\d\.]+)/i], [d, [a, re + "cast"]], [/(cros) [\w]+(?:\)| ([\w\.]+)\b)/i], [[a, fi], d], [/panasonic;(viera)/i, /(netrange)mmh/i, /(nettv)\/(\d+\.[\w\.]+)/i, /(nintendo|playstation) ([wids345portablevuch]+)/i, /(xbox); +xbox ([^\);]+)/i, /\b(joli|palm)\b ?(?:os)?\/?([\w\.]*)/i, /(mint)[\/\(\) ]?(\w*)/i, /(mageia|vectorlinux)[; ]/i, /([kxln]?ubuntu|debian|suse|opensuse|gentoo|arch(?= linux)|slackware|fedora|mandriva|centos|pclinuxos|red ?hat|zenwalk|linpus|raspbian|plan 9|minix|risc os|contiki|deepin|manjaro|elementary os|sabayon|linspire)(?: gnu\/linux)?(?: enterprise)?(?:[- ]linux)?(?:-gnu)?[-\/ ]?(?!chrom|package)([-\w\.]*)/i, /(hurd|linux) ?([\w\.]*)/i, /(gnu) ?([\w\.]*)/i, /\b([-frentopcghs]{0,5}bsd|dragonfly)[\/ ]?(?!amd|[ix346]{1,2}86)([\w\.]*)/i, /(haiku) (\w+)/i], [a, d], [/(sunos) ?([\w\.\d]*)/i], [[a, "Solaris"], d], [/((?:open)?solaris)[-\/ ]?([\w\.]*)/i, /(aix) ((\d)(?=\.|\)| )[\w\.])*/i, /\b(beos|os\/2|amigaos|morphos|openvms|fuchsia|hp-ux)/i, /(unix) ?([\w\.]*)/i], [a, d]] }, oe = function(R2, W2) {
      if (typeof R2 === h2 && (W2 = R2, R2 = e), !(this instanceof oe))
        return new oe(R2, W2).getResult();
      var T = typeof s !== m && s.navigator ? s.navigator : e, J = R2 || (T && T.userAgent ? T.userAgent : r2), ge = T && T.userAgentData ? T.userAgentData : e, ce = W2 ? Tr(Ci, W2) : Ci;
      return this.getBrowser = function() {
        var w2 = {};
        return w2[a] = e, w2[d] = e, je.call(w2, J, ce.browser), w2[b] = Rr(w2[d]), T && T.brave && typeof T.brave.isBrave == u2 && (w2[a] = "Brave"), w2;
      }, this.getCPU = function() {
        var w2 = {};
        return w2[g] = e, je.call(w2, J, ce.cpu), w2;
      }, this.getDevice = function() {
        var w2 = {};
        return w2[c] = e, w2[i] = e, w2[o] = e, je.call(w2, J, ce.device), !w2[o] && ge && ge.mobile && (w2[o] = S2), w2[i] == "Macintosh" && T && typeof T.standalone !== m && T.maxTouchPoints && T.maxTouchPoints > 2 && (w2[i] = "iPad", w2[o] = C), w2;
      }, this.getEngine = function() {
        var w2 = {};
        return w2[a] = e, w2[d] = e, je.call(w2, J, ce.engine), w2;
      }, this.getOS = function() {
        var w2 = {};
        return w2[a] = e, w2[d] = e, je.call(w2, J, ce.os), !w2[a] && ge && ge.platform != "Unknown" && (w2[a] = ge.platform.replace(/chrome os/i, fi).replace(/macos/i, vi)), w2;
      }, this.getResult = function() {
        return { ua: this.getUA(), browser: this.getBrowser(), engine: this.getEngine(), os: this.getOS(), device: this.getDevice(), cpu: this.getCPU() };
      }, this.getUA = function() {
        return J;
      }, this.setUA = function(w2) {
        return J = typeof w2 === v2 && w2.length > Z2 ? Rt(w2, Z2) : w2, this;
      }, this.setUA(J), this;
    };
    oe.VERSION = t, oe.BROWSER = tt([a, d, b]), oe.CPU = tt([g]), oe.DEVICE = tt([i, c, o, p, S2, _, C, j2, $2]), oe.ENGINE = oe.OS = tt([a, d]), typeof Ue !== m ? (typeof rt !== m && rt.exports && (Ue = rt.exports = oe), Ue.UAParser = oe) : typeof define === u2 && define.amd ? define(function() {
      return oe;
    }) : typeof s !== m && (s.UAParser = oe);
    var De = typeof s !== m && (s.jQuery || s.Zepto);
    if (De && !De.ua) {
      var it = new oe();
      De.ua = it.getResult(), De.ua.get = function() {
        return it.getUA();
      }, De.ua.set = function(R2) {
        it.setUA(R2);
        var W2 = it.getResult();
        for (var T in W2)
          De.ua[T] = W2[T];
      };
    }
  })(typeof window == "object" ? window : Ue);
});
var dr = jt((Ct) => {
  (function() {
    "use strict";
    var s = function() {
      this.init();
    };
    s.prototype = { init: function() {
      var i = this || e;
      return i._counter = 1e3, i._html5AudioPool = [], i.html5PoolSize = 10, i._codecs = {}, i._howls = [], i._muted = false, i._volume = 1, i._canPlayEvent = "canplaythrough", i._navigator = typeof window < "u" && window.navigator ? window.navigator : null, i.masterGain = null, i.noAudio = false, i.usingWebAudio = true, i.autoSuspend = true, i.ctx = null, i.autoUnlock = true, i._setup(), i;
    }, volume: function(i) {
      var a = this || e;
      if (i = parseFloat(i), a.ctx || b(), typeof i < "u" && i >= 0 && i <= 1) {
        if (a._volume = i, a._muted)
          return a;
        a.usingWebAudio && a.masterGain.gain.setValueAtTime(i, e.ctx.currentTime);
        for (var o = 0; o < a._howls.length; o++)
          if (!a._howls[o]._webAudio)
            for (var c = a._howls[o]._getSoundIds(), d = 0; d < c.length; d++) {
              var g = a._howls[o]._soundById(c[d]);
              g && g._node && (g._node.volume = g._volume * i);
            }
        return a;
      }
      return a._volume;
    }, mute: function(i) {
      var a = this || e;
      a.ctx || b(), a._muted = i, a.usingWebAudio && a.masterGain.gain.setValueAtTime(i ? 0 : a._volume, e.ctx.currentTime);
      for (var o = 0; o < a._howls.length; o++)
        if (!a._howls[o]._webAudio)
          for (var c = a._howls[o]._getSoundIds(), d = 0; d < c.length; d++) {
            var g = a._howls[o]._soundById(c[d]);
            g && g._node && (g._node.muted = i ? true : g._muted);
          }
      return a;
    }, stop: function() {
      for (var i = this || e, a = 0; a < i._howls.length; a++)
        i._howls[a].stop();
      return i;
    }, unload: function() {
      for (var i = this || e, a = i._howls.length - 1; a >= 0; a--)
        i._howls[a].unload();
      return i.usingWebAudio && i.ctx && typeof i.ctx.close < "u" && (i.ctx.close(), i.ctx = null, b()), i;
    }, codecs: function(i) {
      return (this || e)._codecs[i.replace(/^x-/, "")];
    }, _setup: function() {
      var i = this || e;
      if (i.state = i.ctx && i.ctx.state || "suspended", i._autoSuspend(), !i.usingWebAudio)
        if (typeof Audio < "u")
          try {
            var a = new Audio();
            typeof a.oncanplaythrough > "u" && (i._canPlayEvent = "canplay");
          } catch (o) {
            i.noAudio = true;
          }
        else
          i.noAudio = true;
      try {
        var a = new Audio();
        a.muted && (i.noAudio = true);
      } catch (o) {
      }
      return i.noAudio || i._setupCodecs(), i;
    }, _setupCodecs: function() {
      var i = this || e, a = null;
      try {
        a = typeof Audio < "u" ? new Audio() : null;
      } catch (_) {
        return i;
      }
      if (!a || typeof a.canPlayType != "function")
        return i;
      var o = a.canPlayType("audio/mpeg;").replace(/^no$/, ""), c = i._navigator ? i._navigator.userAgent : "", d = c.match(/OPR\/([0-6].)/g), g = d && parseInt(d[0].split("/")[1], 10) < 33, p = c.indexOf("Safari") !== -1 && c.indexOf("Chrome") === -1, S2 = c.match(/Version\/(.*?) /), C = p && S2 && parseInt(S2[1], 10) < 15;
      return i._codecs = { mp3: !!(!g && (o || a.canPlayType("audio/mp3;").replace(/^no$/, ""))), mpeg: !!o, opus: !!a.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ""), ogg: !!a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), oga: !!a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ""), wav: !!(a.canPlayType('audio/wav; codecs="1"') || a.canPlayType("audio/wav")).replace(/^no$/, ""), aac: !!a.canPlayType("audio/aac;").replace(/^no$/, ""), caf: !!a.canPlayType("audio/x-caf;").replace(/^no$/, ""), m4a: !!(a.canPlayType("audio/x-m4a;") || a.canPlayType("audio/m4a;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""), m4b: !!(a.canPlayType("audio/x-m4b;") || a.canPlayType("audio/m4b;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""), mp4: !!(a.canPlayType("audio/x-mp4;") || a.canPlayType("audio/mp4;") || a.canPlayType("audio/aac;")).replace(/^no$/, ""), weba: !!(!C && a.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")), webm: !!(!C && a.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, "")), dolby: !!a.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ""), flac: !!(a.canPlayType("audio/x-flac;") || a.canPlayType("audio/flac;")).replace(/^no$/, "") }, i;
    }, _unlockAudio: function() {
      var i = this || e;
      if (!(i._audioUnlocked || !i.ctx)) {
        i._audioUnlocked = false, i.autoUnlock = false, !i._mobileUnloaded && i.ctx.sampleRate !== 44100 && (i._mobileUnloaded = true, i.unload()), i._scratchBuffer = i.ctx.createBuffer(1, 1, 22050);
        var a = function(o) {
          for (; i._html5AudioPool.length < i.html5PoolSize; )
            try {
              var c = new Audio();
              c._unlocked = true, i._releaseHtml5Audio(c);
            } catch (_) {
              i.noAudio = true;
              break;
            }
          for (var d = 0; d < i._howls.length; d++)
            if (!i._howls[d]._webAudio)
              for (var g = i._howls[d]._getSoundIds(), p = 0; p < g.length; p++) {
                var S2 = i._howls[d]._soundById(g[p]);
                S2 && S2._node && !S2._node._unlocked && (S2._node._unlocked = true, S2._node.load());
              }
          i._autoResume();
          var C = i.ctx.createBufferSource();
          C.buffer = i._scratchBuffer, C.connect(i.ctx.destination), typeof C.start > "u" ? C.noteOn(0) : C.start(0), typeof i.ctx.resume == "function" && i.ctx.resume(), C.onended = function() {
            C.disconnect(0), i._audioUnlocked = true, document.removeEventListener("touchstart", a, true), document.removeEventListener("touchend", a, true), document.removeEventListener("click", a, true), document.removeEventListener("keydown", a, true);
            for (var _ = 0; _ < i._howls.length; _++)
              i._howls[_]._emit("unlock");
          };
        };
        return document.addEventListener("touchstart", a, true), document.addEventListener("touchend", a, true), document.addEventListener("click", a, true), document.addEventListener("keydown", a, true), i;
      }
    }, _obtainHtml5Audio: function() {
      var i = this || e;
      if (i._html5AudioPool.length)
        return i._html5AudioPool.pop();
      var a = new Audio().play();
      return a && typeof Promise < "u" && (a instanceof Promise || typeof a.then == "function") && a.catch(function() {
        console.warn("HTML5 Audio pool exhausted, returning potentially locked audio object.");
      }), new Audio();
    }, _releaseHtml5Audio: function(i) {
      var a = this || e;
      return i._unlocked && a._html5AudioPool.push(i), a;
    }, _autoSuspend: function() {
      var i = this;
      if (!(!i.autoSuspend || !i.ctx || typeof i.ctx.suspend > "u" || !e.usingWebAudio)) {
        for (var a = 0; a < i._howls.length; a++)
          if (i._howls[a]._webAudio) {
            for (var o = 0; o < i._howls[a]._sounds.length; o++)
              if (!i._howls[a]._sounds[o]._paused)
                return i;
          }
        return i._suspendTimer && clearTimeout(i._suspendTimer), i._suspendTimer = setTimeout(function() {
          if (!!i.autoSuspend) {
            i._suspendTimer = null, i.state = "suspending";
            var c = function() {
              i.state = "suspended", i._resumeAfterSuspend && (delete i._resumeAfterSuspend, i._autoResume());
            };
            i.ctx.suspend().then(c, c);
          }
        }, 3e4), i;
      }
    }, _autoResume: function() {
      var i = this;
      if (!(!i.ctx || typeof i.ctx.resume > "u" || !e.usingWebAudio))
        return i.state === "running" && i.ctx.state !== "interrupted" && i._suspendTimer ? (clearTimeout(i._suspendTimer), i._suspendTimer = null) : i.state === "suspended" || i.state === "running" && i.ctx.state === "interrupted" ? (i.ctx.resume().then(function() {
          i.state = "running";
          for (var a = 0; a < i._howls.length; a++)
            i._howls[a]._emit("resume");
        }), i._suspendTimer && (clearTimeout(i._suspendTimer), i._suspendTimer = null)) : i.state === "suspending" && (i._resumeAfterSuspend = true), i;
    } };
    var e = new s(), t = function(i) {
      var a = this;
      if (!i.src || i.src.length === 0) {
        console.error("An array of source files must be passed with any new Howl.");
        return;
      }
      a.init(i);
    };
    t.prototype = { init: function(i) {
      var a = this;
      return e.ctx || b(), a._autoplay = i.autoplay || false, a._format = typeof i.format != "string" ? i.format : [i.format], a._html5 = i.html5 || false, a._muted = i.mute || false, a._loop = i.loop || false, a._pool = i.pool || 5, a._preload = typeof i.preload == "boolean" || i.preload === "metadata" ? i.preload : true, a._rate = i.rate || 1, a._sprite = i.sprite || {}, a._src = typeof i.src != "string" ? i.src : [i.src], a._volume = i.volume !== void 0 ? i.volume : 1, a._xhr = { method: i.xhr && i.xhr.method ? i.xhr.method : "GET", headers: i.xhr && i.xhr.headers ? i.xhr.headers : null, withCredentials: i.xhr && i.xhr.withCredentials ? i.xhr.withCredentials : false }, a._duration = 0, a._state = "unloaded", a._sounds = [], a._endTimers = {}, a._queue = [], a._playLock = false, a._onend = i.onend ? [{ fn: i.onend }] : [], a._onfade = i.onfade ? [{ fn: i.onfade }] : [], a._onload = i.onload ? [{ fn: i.onload }] : [], a._onloaderror = i.onloaderror ? [{ fn: i.onloaderror }] : [], a._onplayerror = i.onplayerror ? [{ fn: i.onplayerror }] : [], a._onpause = i.onpause ? [{ fn: i.onpause }] : [], a._onplay = i.onplay ? [{ fn: i.onplay }] : [], a._onstop = i.onstop ? [{ fn: i.onstop }] : [], a._onmute = i.onmute ? [{ fn: i.onmute }] : [], a._onvolume = i.onvolume ? [{ fn: i.onvolume }] : [], a._onrate = i.onrate ? [{ fn: i.onrate }] : [], a._onseek = i.onseek ? [{ fn: i.onseek }] : [], a._onunlock = i.onunlock ? [{ fn: i.onunlock }] : [], a._onresume = [], a._webAudio = e.usingWebAudio && !a._html5, typeof e.ctx < "u" && e.ctx && e.autoUnlock && e._unlockAudio(), e._howls.push(a), a._autoplay && a._queue.push({ event: "play", action: function() {
        a.play();
      } }), a._preload && a._preload !== "none" && a.load(), a;
    }, load: function() {
      var i = this, a = null;
      if (e.noAudio) {
        i._emit("loaderror", null, "No audio support.");
        return;
      }
      typeof i._src == "string" && (i._src = [i._src]);
      for (var o = 0; o < i._src.length; o++) {
        var c, d;
        if (i._format && i._format[o])
          c = i._format[o];
        else {
          if (d = i._src[o], typeof d != "string") {
            i._emit("loaderror", null, "Non-string found in selected audio sources - ignoring.");
            continue;
          }
          c = /^data:audio\/([^;,]+);/i.exec(d), c || (c = /\.([^.]+)$/.exec(d.split("?", 1)[0])), c && (c = c[1].toLowerCase());
        }
        if (c || console.warn('No file extension was found. Consider using the "format" property or specify an extension.'), c && e.codecs(c)) {
          a = i._src[o];
          break;
        }
      }
      if (!a) {
        i._emit("loaderror", null, "No codec support for selected audio sources.");
        return;
      }
      return i._src = a, i._state = "loading", window.location.protocol === "https:" && a.slice(0, 5) === "http:" && (i._html5 = true, i._webAudio = false), new r2(i), i._webAudio && u2(i), i;
    }, play: function(i, a) {
      var o = this, c = null;
      if (typeof i == "number")
        c = i, i = null;
      else {
        if (typeof i == "string" && o._state === "loaded" && !o._sprite[i])
          return null;
        if (typeof i > "u" && (i = "__default", !o._playLock)) {
          for (var d = 0, g = 0; g < o._sounds.length; g++)
            o._sounds[g]._paused && !o._sounds[g]._ended && (d++, c = o._sounds[g]._id);
          d === 1 ? i = null : c = null;
        }
      }
      var p = c ? o._soundById(c) : o._inactiveSound();
      if (!p)
        return null;
      if (c && !i && (i = p._sprite || "__default"), o._state !== "loaded") {
        p._sprite = i, p._ended = false;
        var S2 = p._id;
        return o._queue.push({ event: "play", action: function() {
          o.play(S2);
        } }), S2;
      }
      if (c && !p._paused)
        return a || o._loadQueue("play"), p._id;
      o._webAudio && e._autoResume();
      var C = Math.max(0, p._seek > 0 ? p._seek : o._sprite[i][0] / 1e3), _ = Math.max(0, (o._sprite[i][0] + o._sprite[i][1]) / 1e3 - C), j2 = _ * 1e3 / Math.abs(p._rate), $2 = o._sprite[i][0] / 1e3, Z2 = (o._sprite[i][0] + o._sprite[i][1]) / 1e3;
      p._sprite = i, p._ended = false;
      var P2 = function() {
        p._paused = false, p._seek = C, p._start = $2, p._stop = Z2, p._loop = !!(p._loop || o._sprite[i][2]);
      };
      if (C >= Z2) {
        o._ended(p);
        return;
      }
      var I2 = p._node;
      if (o._webAudio) {
        var X = function() {
          o._playLock = false, P2(), o._refreshBuffer(p);
          var z = p._muted || o._muted ? 0 : p._volume;
          I2.gain.setValueAtTime(z, e.ctx.currentTime), p._playStart = e.ctx.currentTime, typeof I2.bufferSource.start > "u" ? p._loop ? I2.bufferSource.noteGrainOn(0, C, 86400) : I2.bufferSource.noteGrainOn(0, C, _) : p._loop ? I2.bufferSource.start(0, C, 86400) : I2.bufferSource.start(0, C, _), j2 !== 1 / 0 && (o._endTimers[p._id] = setTimeout(o._ended.bind(o, p), j2)), a || setTimeout(function() {
            o._emit("play", p._id), o._loadQueue();
          }, 0);
        };
        e.state === "running" && e.ctx.state !== "interrupted" ? X() : (o._playLock = true, o.once("resume", X), o._clearTimer(p._id));
      } else {
        var ee = function() {
          I2.currentTime = C, I2.muted = p._muted || o._muted || e._muted || I2.muted, I2.volume = p._volume * e.volume(), I2.playbackRate = p._rate;
          try {
            var z = I2.play();
            if (z && typeof Promise < "u" && (z instanceof Promise || typeof z.then == "function") ? (o._playLock = true, P2(), z.then(function() {
              o._playLock = false, I2._unlocked = true, a ? o._loadQueue() : o._emit("play", p._id);
            }).catch(function() {
              o._playLock = false, o._emit("playerror", p._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction."), p._ended = true, p._paused = true;
            })) : a || (o._playLock = false, P2(), o._emit("play", p._id)), I2.playbackRate = p._rate, I2.paused) {
              o._emit("playerror", p._id, "Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.");
              return;
            }
            i !== "__default" || p._loop ? o._endTimers[p._id] = setTimeout(o._ended.bind(o, p), j2) : (o._endTimers[p._id] = function() {
              o._ended(p), I2.removeEventListener("ended", o._endTimers[p._id], false);
            }, I2.addEventListener("ended", o._endTimers[p._id], false));
          } catch (A) {
            o._emit("playerror", p._id, A);
          }
        };
        I2.src === "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA" && (I2.src = o._src, I2.load());
        var K2 = window && window.ejecta || !I2.readyState && e._navigator.isCocoonJS;
        if (I2.readyState >= 3 || K2)
          ee();
        else {
          o._playLock = true, o._state = "loading";
          var re = function() {
            o._state = "loaded", ee(), I2.removeEventListener(e._canPlayEvent, re, false);
          };
          I2.addEventListener(e._canPlayEvent, re, false), o._clearTimer(p._id);
        }
      }
      return p._id;
    }, pause: function(i) {
      var a = this;
      if (a._state !== "loaded" || a._playLock)
        return a._queue.push({ event: "pause", action: function() {
          a.pause(i);
        } }), a;
      for (var o = a._getSoundIds(i), c = 0; c < o.length; c++) {
        a._clearTimer(o[c]);
        var d = a._soundById(o[c]);
        if (d && !d._paused && (d._seek = a.seek(o[c]), d._rateSeek = 0, d._paused = true, a._stopFade(o[c]), d._node))
          if (a._webAudio) {
            if (!d._node.bufferSource)
              continue;
            typeof d._node.bufferSource.stop > "u" ? d._node.bufferSource.noteOff(0) : d._node.bufferSource.stop(0), a._cleanBuffer(d._node);
          } else
            (!isNaN(d._node.duration) || d._node.duration === 1 / 0) && d._node.pause();
        arguments[1] || a._emit("pause", d ? d._id : null);
      }
      return a;
    }, stop: function(i, a) {
      var o = this;
      if (o._state !== "loaded" || o._playLock)
        return o._queue.push({ event: "stop", action: function() {
          o.stop(i);
        } }), o;
      for (var c = o._getSoundIds(i), d = 0; d < c.length; d++) {
        o._clearTimer(c[d]);
        var g = o._soundById(c[d]);
        g && (g._seek = g._start || 0, g._rateSeek = 0, g._paused = true, g._ended = true, o._stopFade(c[d]), g._node && (o._webAudio ? g._node.bufferSource && (typeof g._node.bufferSource.stop > "u" ? g._node.bufferSource.noteOff(0) : g._node.bufferSource.stop(0), o._cleanBuffer(g._node)) : (!isNaN(g._node.duration) || g._node.duration === 1 / 0) && (g._node.currentTime = g._start || 0, g._node.pause(), g._node.duration === 1 / 0 && o._clearSound(g._node))), a || o._emit("stop", g._id));
      }
      return o;
    }, mute: function(i, a) {
      var o = this;
      if (o._state !== "loaded" || o._playLock)
        return o._queue.push({ event: "mute", action: function() {
          o.mute(i, a);
        } }), o;
      if (typeof a > "u")
        if (typeof i == "boolean")
          o._muted = i;
        else
          return o._muted;
      for (var c = o._getSoundIds(a), d = 0; d < c.length; d++) {
        var g = o._soundById(c[d]);
        g && (g._muted = i, g._interval && o._stopFade(g._id), o._webAudio && g._node ? g._node.gain.setValueAtTime(i ? 0 : g._volume, e.ctx.currentTime) : g._node && (g._node.muted = e._muted ? true : i), o._emit("mute", g._id));
      }
      return o;
    }, volume: function() {
      var i = this, a = arguments, o, c;
      if (a.length === 0)
        return i._volume;
      if (a.length === 1 || a.length === 2 && typeof a[1] > "u") {
        var d = i._getSoundIds(), g = d.indexOf(a[0]);
        g >= 0 ? c = parseInt(a[0], 10) : o = parseFloat(a[0]);
      } else
        a.length >= 2 && (o = parseFloat(a[0]), c = parseInt(a[1], 10));
      var p;
      if (typeof o < "u" && o >= 0 && o <= 1) {
        if (i._state !== "loaded" || i._playLock)
          return i._queue.push({ event: "volume", action: function() {
            i.volume.apply(i, a);
          } }), i;
        typeof c > "u" && (i._volume = o), c = i._getSoundIds(c);
        for (var S2 = 0; S2 < c.length; S2++)
          p = i._soundById(c[S2]), p && (p._volume = o, a[2] || i._stopFade(c[S2]), i._webAudio && p._node && !p._muted ? p._node.gain.setValueAtTime(o, e.ctx.currentTime) : p._node && !p._muted && (p._node.volume = o * e.volume()), i._emit("volume", p._id));
      } else
        return p = c ? i._soundById(c) : i._sounds[0], p ? p._volume : 0;
      return i;
    }, fade: function(i, a, o, c) {
      var d = this;
      if (d._state !== "loaded" || d._playLock)
        return d._queue.push({ event: "fade", action: function() {
          d.fade(i, a, o, c);
        } }), d;
      i = Math.min(Math.max(0, parseFloat(i)), 1), a = Math.min(Math.max(0, parseFloat(a)), 1), o = parseFloat(o), d.volume(i, c);
      for (var g = d._getSoundIds(c), p = 0; p < g.length; p++) {
        var S2 = d._soundById(g[p]);
        if (S2) {
          if (c || d._stopFade(g[p]), d._webAudio && !S2._muted) {
            var C = e.ctx.currentTime, _ = C + o / 1e3;
            S2._volume = i, S2._node.gain.setValueAtTime(i, C), S2._node.gain.linearRampToValueAtTime(a, _);
          }
          d._startFadeInterval(S2, i, a, o, g[p], typeof c > "u");
        }
      }
      return d;
    }, _startFadeInterval: function(i, a, o, c, d, g) {
      var p = this, S2 = a, C = o - a, _ = Math.abs(C / 0.01), j2 = Math.max(4, _ > 0 ? c / _ : c), $2 = Date.now();
      i._fadeTo = o, i._interval = setInterval(function() {
        var Z2 = (Date.now() - $2) / c;
        $2 = Date.now(), S2 += C * Z2, S2 = Math.round(S2 * 100) / 100, C < 0 ? S2 = Math.max(o, S2) : S2 = Math.min(o, S2), p._webAudio ? i._volume = S2 : p.volume(S2, i._id, true), g && (p._volume = S2), (o < a && S2 <= o || o > a && S2 >= o) && (clearInterval(i._interval), i._interval = null, i._fadeTo = null, p.volume(o, i._id), p._emit("fade", i._id));
      }, j2);
    }, _stopFade: function(i) {
      var a = this, o = a._soundById(i);
      return o && o._interval && (a._webAudio && o._node.gain.cancelScheduledValues(e.ctx.currentTime), clearInterval(o._interval), o._interval = null, a.volume(o._fadeTo, i), o._fadeTo = null, a._emit("fade", i)), a;
    }, loop: function() {
      var i = this, a = arguments, o, c, d;
      if (a.length === 0)
        return i._loop;
      if (a.length === 1)
        if (typeof a[0] == "boolean")
          o = a[0], i._loop = o;
        else
          return d = i._soundById(parseInt(a[0], 10)), d ? d._loop : false;
      else
        a.length === 2 && (o = a[0], c = parseInt(a[1], 10));
      for (var g = i._getSoundIds(c), p = 0; p < g.length; p++)
        d = i._soundById(g[p]), d && (d._loop = o, i._webAudio && d._node && d._node.bufferSource && (d._node.bufferSource.loop = o, o && (d._node.bufferSource.loopStart = d._start || 0, d._node.bufferSource.loopEnd = d._stop, i.playing(g[p]) && (i.pause(g[p], true), i.play(g[p], true)))));
      return i;
    }, rate: function() {
      var i = this, a = arguments, o, c;
      if (a.length === 0)
        c = i._sounds[0]._id;
      else if (a.length === 1) {
        var d = i._getSoundIds(), g = d.indexOf(a[0]);
        g >= 0 ? c = parseInt(a[0], 10) : o = parseFloat(a[0]);
      } else
        a.length === 2 && (o = parseFloat(a[0]), c = parseInt(a[1], 10));
      var p;
      if (typeof o == "number") {
        if (i._state !== "loaded" || i._playLock)
          return i._queue.push({ event: "rate", action: function() {
            i.rate.apply(i, a);
          } }), i;
        typeof c > "u" && (i._rate = o), c = i._getSoundIds(c);
        for (var S2 = 0; S2 < c.length; S2++)
          if (p = i._soundById(c[S2]), p) {
            i.playing(c[S2]) && (p._rateSeek = i.seek(c[S2]), p._playStart = i._webAudio ? e.ctx.currentTime : p._playStart), p._rate = o, i._webAudio && p._node && p._node.bufferSource ? p._node.bufferSource.playbackRate.setValueAtTime(o, e.ctx.currentTime) : p._node && (p._node.playbackRate = o);
            var C = i.seek(c[S2]), _ = (i._sprite[p._sprite][0] + i._sprite[p._sprite][1]) / 1e3 - C, j2 = _ * 1e3 / Math.abs(p._rate);
            (i._endTimers[c[S2]] || !p._paused) && (i._clearTimer(c[S2]), i._endTimers[c[S2]] = setTimeout(i._ended.bind(i, p), j2)), i._emit("rate", p._id);
          }
      } else
        return p = i._soundById(c), p ? p._rate : i._rate;
      return i;
    }, seek: function() {
      var i = this, a = arguments, o, c;
      if (a.length === 0)
        i._sounds.length && (c = i._sounds[0]._id);
      else if (a.length === 1) {
        var d = i._getSoundIds(), g = d.indexOf(a[0]);
        g >= 0 ? c = parseInt(a[0], 10) : i._sounds.length && (c = i._sounds[0]._id, o = parseFloat(a[0]));
      } else
        a.length === 2 && (o = parseFloat(a[0]), c = parseInt(a[1], 10));
      if (typeof c > "u")
        return 0;
      if (typeof o == "number" && (i._state !== "loaded" || i._playLock))
        return i._queue.push({ event: "seek", action: function() {
          i.seek.apply(i, a);
        } }), i;
      var p = i._soundById(c);
      if (p)
        if (typeof o == "number" && o >= 0) {
          var S2 = i.playing(c);
          S2 && i.pause(c, true), p._seek = o, p._ended = false, i._clearTimer(c), !i._webAudio && p._node && !isNaN(p._node.duration) && (p._node.currentTime = o);
          var C = function() {
            S2 && i.play(c, true), i._emit("seek", c);
          };
          if (S2 && !i._webAudio) {
            var _ = function() {
              i._playLock ? setTimeout(_, 0) : C();
            };
            setTimeout(_, 0);
          } else
            C();
        } else if (i._webAudio) {
          var j2 = i.playing(c) ? e.ctx.currentTime - p._playStart : 0, $2 = p._rateSeek ? p._rateSeek - p._seek : 0;
          return p._seek + ($2 + j2 * Math.abs(p._rate));
        } else
          return p._node.currentTime;
      return i;
    }, playing: function(i) {
      var a = this;
      if (typeof i == "number") {
        var o = a._soundById(i);
        return o ? !o._paused : false;
      }
      for (var c = 0; c < a._sounds.length; c++)
        if (!a._sounds[c]._paused)
          return true;
      return false;
    }, duration: function(i) {
      var a = this, o = a._duration, c = a._soundById(i);
      return c && (o = a._sprite[c._sprite][1] / 1e3), o;
    }, state: function() {
      return this._state;
    }, unload: function() {
      for (var i = this, a = i._sounds, o = 0; o < a.length; o++)
        a[o]._paused || i.stop(a[o]._id), i._webAudio || (i._clearSound(a[o]._node), a[o]._node.removeEventListener("error", a[o]._errorFn, false), a[o]._node.removeEventListener(e._canPlayEvent, a[o]._loadFn, false), a[o]._node.removeEventListener("ended", a[o]._endFn, false), e._releaseHtml5Audio(a[o]._node)), delete a[o]._node, i._clearTimer(a[o]._id);
      var c = e._howls.indexOf(i);
      c >= 0 && e._howls.splice(c, 1);
      var d = true;
      for (o = 0; o < e._howls.length; o++)
        if (e._howls[o]._src === i._src || i._src.indexOf(e._howls[o]._src) >= 0) {
          d = false;
          break;
        }
      return n && d && delete n[i._src], e.noAudio = false, i._state = "unloaded", i._sounds = [], i = null, null;
    }, on: function(i, a, o, c) {
      var d = this, g = d["_on" + i];
      return typeof a == "function" && g.push(c ? { id: o, fn: a, once: c } : { id: o, fn: a }), d;
    }, off: function(i, a, o) {
      var c = this, d = c["_on" + i], g = 0;
      if (typeof a == "number" && (o = a, a = null), a || o)
        for (g = 0; g < d.length; g++) {
          var p = o === d[g].id;
          if (a === d[g].fn && p || !a && p) {
            d.splice(g, 1);
            break;
          }
        }
      else if (i)
        c["_on" + i] = [];
      else {
        var S2 = Object.keys(c);
        for (g = 0; g < S2.length; g++)
          S2[g].indexOf("_on") === 0 && Array.isArray(c[S2[g]]) && (c[S2[g]] = []);
      }
      return c;
    }, once: function(i, a, o) {
      var c = this;
      return c.on(i, a, o, 1), c;
    }, _emit: function(i, a, o) {
      for (var c = this, d = c["_on" + i], g = d.length - 1; g >= 0; g--)
        (!d[g].id || d[g].id === a || i === "load") && (setTimeout(function(p) {
          p.call(this, a, o);
        }.bind(c, d[g].fn), 0), d[g].once && c.off(i, d[g].fn, d[g].id));
      return c._loadQueue(i), c;
    }, _loadQueue: function(i) {
      var a = this;
      if (a._queue.length > 0) {
        var o = a._queue[0];
        o.event === i && (a._queue.shift(), a._loadQueue()), i || o.action();
      }
      return a;
    }, _ended: function(i) {
      var a = this, o = i._sprite;
      if (!a._webAudio && i._node && !i._node.paused && !i._node.ended && i._node.currentTime < i._stop)
        return setTimeout(a._ended.bind(a, i), 100), a;
      var c = !!(i._loop || a._sprite[o][2]);
      if (a._emit("end", i._id), !a._webAudio && c && a.stop(i._id, true).play(i._id), a._webAudio && c) {
        a._emit("play", i._id), i._seek = i._start || 0, i._rateSeek = 0, i._playStart = e.ctx.currentTime;
        var d = (i._stop - i._start) * 1e3 / Math.abs(i._rate);
        a._endTimers[i._id] = setTimeout(a._ended.bind(a, i), d);
      }
      return a._webAudio && !c && (i._paused = true, i._ended = true, i._seek = i._start || 0, i._rateSeek = 0, a._clearTimer(i._id), a._cleanBuffer(i._node), e._autoSuspend()), !a._webAudio && !c && a.stop(i._id, true), a;
    }, _clearTimer: function(i) {
      var a = this;
      if (a._endTimers[i]) {
        if (typeof a._endTimers[i] != "function")
          clearTimeout(a._endTimers[i]);
        else {
          var o = a._soundById(i);
          o && o._node && o._node.removeEventListener("ended", a._endTimers[i], false);
        }
        delete a._endTimers[i];
      }
      return a;
    }, _soundById: function(i) {
      for (var a = this, o = 0; o < a._sounds.length; o++)
        if (i === a._sounds[o]._id)
          return a._sounds[o];
      return null;
    }, _inactiveSound: function() {
      var i = this;
      i._drain();
      for (var a = 0; a < i._sounds.length; a++)
        if (i._sounds[a]._ended)
          return i._sounds[a].reset();
      return new r2(i);
    }, _drain: function() {
      var i = this, a = i._pool, o = 0, c = 0;
      if (!(i._sounds.length < a)) {
        for (c = 0; c < i._sounds.length; c++)
          i._sounds[c]._ended && o++;
        for (c = i._sounds.length - 1; c >= 0; c--) {
          if (o <= a)
            return;
          i._sounds[c]._ended && (i._webAudio && i._sounds[c]._node && i._sounds[c]._node.disconnect(0), i._sounds.splice(c, 1), o--);
        }
      }
    }, _getSoundIds: function(i) {
      var a = this;
      if (typeof i > "u") {
        for (var o = [], c = 0; c < a._sounds.length; c++)
          o.push(a._sounds[c]._id);
        return o;
      } else
        return [i];
    }, _refreshBuffer: function(i) {
      var a = this;
      return i._node.bufferSource = e.ctx.createBufferSource(), i._node.bufferSource.buffer = n[a._src], i._panner ? i._node.bufferSource.connect(i._panner) : i._node.bufferSource.connect(i._node), i._node.bufferSource.loop = i._loop, i._loop && (i._node.bufferSource.loopStart = i._start || 0, i._node.bufferSource.loopEnd = i._stop || 0), i._node.bufferSource.playbackRate.setValueAtTime(i._rate, e.ctx.currentTime), a;
    }, _cleanBuffer: function(i) {
      var a = this, o = e._navigator && e._navigator.vendor.indexOf("Apple") >= 0;
      if (e._scratchBuffer && i.bufferSource && (i.bufferSource.onended = null, i.bufferSource.disconnect(0), o))
        try {
          i.bufferSource.buffer = e._scratchBuffer;
        } catch (c) {
        }
      return i.bufferSource = null, a;
    }, _clearSound: function(i) {
      var a = /MSIE |Trident\//.test(e._navigator && e._navigator.userAgent);
      a || (i.src = "data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA");
    } };
    var r2 = function(i) {
      this._parent = i, this.init();
    };
    r2.prototype = { init: function() {
      var i = this, a = i._parent;
      return i._muted = a._muted, i._loop = a._loop, i._volume = a._volume, i._rate = a._rate, i._seek = 0, i._paused = true, i._ended = true, i._sprite = "__default", i._id = ++e._counter, a._sounds.push(i), i.create(), i;
    }, create: function() {
      var i = this, a = i._parent, o = e._muted || i._muted || i._parent._muted ? 0 : i._volume;
      return a._webAudio ? (i._node = typeof e.ctx.createGain > "u" ? e.ctx.createGainNode() : e.ctx.createGain(), i._node.gain.setValueAtTime(o, e.ctx.currentTime), i._node.paused = true, i._node.connect(e.masterGain)) : e.noAudio || (i._node = e._obtainHtml5Audio(), i._errorFn = i._errorListener.bind(i), i._node.addEventListener("error", i._errorFn, false), i._loadFn = i._loadListener.bind(i), i._node.addEventListener(e._canPlayEvent, i._loadFn, false), i._endFn = i._endListener.bind(i), i._node.addEventListener("ended", i._endFn, false), i._node.src = a._src, i._node.preload = a._preload === true ? "auto" : a._preload, i._node.volume = o * e.volume(), i._node.load()), i;
    }, reset: function() {
      var i = this, a = i._parent;
      return i._muted = a._muted, i._loop = a._loop, i._volume = a._volume, i._rate = a._rate, i._seek = 0, i._rateSeek = 0, i._paused = true, i._ended = true, i._sprite = "__default", i._id = ++e._counter, i;
    }, _errorListener: function() {
      var i = this;
      i._parent._emit("loaderror", i._id, i._node.error ? i._node.error.code : 0), i._node.removeEventListener("error", i._errorFn, false);
    }, _loadListener: function() {
      var i = this, a = i._parent;
      a._duration = Math.ceil(i._node.duration * 10) / 10, Object.keys(a._sprite).length === 0 && (a._sprite = { __default: [0, a._duration * 1e3] }), a._state !== "loaded" && (a._state = "loaded", a._emit("load"), a._loadQueue()), i._node.removeEventListener(e._canPlayEvent, i._loadFn, false);
    }, _endListener: function() {
      var i = this, a = i._parent;
      a._duration === 1 / 0 && (a._duration = Math.ceil(i._node.duration * 10) / 10, a._sprite.__default[1] === 1 / 0 && (a._sprite.__default[1] = a._duration * 1e3), a._ended(i)), i._node.removeEventListener("ended", i._endFn, false);
    } };
    var n = {}, u2 = function(i) {
      var a = i._src;
      if (n[a]) {
        i._duration = n[a].duration, v2(i);
        return;
      }
      if (/^data:[^;]+;base64,/.test(a)) {
        for (var o = atob(a.split(",")[1]), c = new Uint8Array(o.length), d = 0; d < o.length; ++d)
          c[d] = o.charCodeAt(d);
        h2(c.buffer, i);
      } else {
        var g = new XMLHttpRequest();
        g.open(i._xhr.method, a, true), g.withCredentials = i._xhr.withCredentials, g.responseType = "arraybuffer", i._xhr.headers && Object.keys(i._xhr.headers).forEach(function(p) {
          g.setRequestHeader(p, i._xhr.headers[p]);
        }), g.onload = function() {
          var p = (g.status + "")[0];
          if (p !== "0" && p !== "2" && p !== "3") {
            i._emit("loaderror", null, "Failed loading audio file with status: " + g.status + ".");
            return;
          }
          h2(g.response, i);
        }, g.onerror = function() {
          i._webAudio && (i._html5 = true, i._webAudio = false, i._sounds = [], delete n[a], i.load());
        }, m(g);
      }
    }, m = function(i) {
      try {
        i.send();
      } catch (a) {
        i.onerror();
      }
    }, h2 = function(i, a) {
      var o = function() {
        a._emit("loaderror", null, "Decoding audio data failed.");
      }, c = function(d) {
        d && a._sounds.length > 0 ? (n[a._src] = d, v2(a, d)) : o();
      };
      typeof Promise < "u" && e.ctx.decodeAudioData.length === 1 ? e.ctx.decodeAudioData(i).then(c).catch(o) : e.ctx.decodeAudioData(i, c, o);
    }, v2 = function(i, a) {
      a && !i._duration && (i._duration = a.duration), Object.keys(i._sprite).length === 0 && (i._sprite = { __default: [0, i._duration * 1e3] }), i._state !== "loaded" && (i._state = "loaded", i._emit("load"), i._loadQueue());
    }, b = function() {
      if (!!e.usingWebAudio) {
        try {
          typeof AudioContext < "u" ? e.ctx = new AudioContext() : typeof webkitAudioContext < "u" ? e.ctx = new webkitAudioContext() : e.usingWebAudio = false;
        } catch (d) {
          e.usingWebAudio = false;
        }
        e.ctx || (e.usingWebAudio = false);
        var i = /iP(hone|od|ad)/.test(e._navigator && e._navigator.platform), a = e._navigator && e._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/), o = a ? parseInt(a[1], 10) : null;
        if (i && o && o < 9) {
          var c = /safari/.test(e._navigator && e._navigator.userAgent.toLowerCase());
          e._navigator && !c && (e.usingWebAudio = false);
        }
        e.usingWebAudio && (e.masterGain = typeof e.ctx.createGain > "u" ? e.ctx.createGainNode() : e.ctx.createGain(), e.masterGain.gain.setValueAtTime(e._muted ? 0 : e._volume, e.ctx.currentTime), e.masterGain.connect(e.ctx.destination)), e._setup();
      }
    };
    typeof define == "function" && define.amd && define([], function() {
      return { Howler: e, Howl: t };
    }), typeof Ct < "u" && (Ct.Howler = e, Ct.Howl = t), typeof global < "u" ? (global.HowlerGlobal = s, global.Howler = e, global.Howl = t, global.Sound = r2) : typeof window < "u" && (window.HowlerGlobal = s, window.Howler = e, window.Howl = t, window.Sound = r2);
  })();
  (function() {
    "use strict";
    HowlerGlobal.prototype._pos = [0, 0, 0], HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0], HowlerGlobal.prototype.stereo = function(e) {
      var t = this;
      if (!t.ctx || !t.ctx.listener)
        return t;
      for (var r2 = t._howls.length - 1; r2 >= 0; r2--)
        t._howls[r2].stereo(e);
      return t;
    }, HowlerGlobal.prototype.pos = function(e, t, r2) {
      var n = this;
      if (!n.ctx || !n.ctx.listener)
        return n;
      if (t = typeof t != "number" ? n._pos[1] : t, r2 = typeof r2 != "number" ? n._pos[2] : r2, typeof e == "number")
        n._pos = [e, t, r2], typeof n.ctx.listener.positionX < "u" ? (n.ctx.listener.positionX.setTargetAtTime(n._pos[0], Howler.ctx.currentTime, 0.1), n.ctx.listener.positionY.setTargetAtTime(n._pos[1], Howler.ctx.currentTime, 0.1), n.ctx.listener.positionZ.setTargetAtTime(n._pos[2], Howler.ctx.currentTime, 0.1)) : n.ctx.listener.setPosition(n._pos[0], n._pos[1], n._pos[2]);
      else
        return n._pos;
      return n;
    }, HowlerGlobal.prototype.orientation = function(e, t, r2, n, u2, m) {
      var h2 = this;
      if (!h2.ctx || !h2.ctx.listener)
        return h2;
      var v2 = h2._orientation;
      if (t = typeof t != "number" ? v2[1] : t, r2 = typeof r2 != "number" ? v2[2] : r2, n = typeof n != "number" ? v2[3] : n, u2 = typeof u2 != "number" ? v2[4] : u2, m = typeof m != "number" ? v2[5] : m, typeof e == "number")
        h2._orientation = [e, t, r2, n, u2, m], typeof h2.ctx.listener.forwardX < "u" ? (h2.ctx.listener.forwardX.setTargetAtTime(e, Howler.ctx.currentTime, 0.1), h2.ctx.listener.forwardY.setTargetAtTime(t, Howler.ctx.currentTime, 0.1), h2.ctx.listener.forwardZ.setTargetAtTime(r2, Howler.ctx.currentTime, 0.1), h2.ctx.listener.upX.setTargetAtTime(n, Howler.ctx.currentTime, 0.1), h2.ctx.listener.upY.setTargetAtTime(u2, Howler.ctx.currentTime, 0.1), h2.ctx.listener.upZ.setTargetAtTime(m, Howler.ctx.currentTime, 0.1)) : h2.ctx.listener.setOrientation(e, t, r2, n, u2, m);
      else
        return v2;
      return h2;
    }, Howl.prototype.init = function(e) {
      return function(t) {
        var r2 = this;
        return r2._orientation = t.orientation || [1, 0, 0], r2._stereo = t.stereo || null, r2._pos = t.pos || null, r2._pannerAttr = { coneInnerAngle: typeof t.coneInnerAngle < "u" ? t.coneInnerAngle : 360, coneOuterAngle: typeof t.coneOuterAngle < "u" ? t.coneOuterAngle : 360, coneOuterGain: typeof t.coneOuterGain < "u" ? t.coneOuterGain : 0, distanceModel: typeof t.distanceModel < "u" ? t.distanceModel : "inverse", maxDistance: typeof t.maxDistance < "u" ? t.maxDistance : 1e4, panningModel: typeof t.panningModel < "u" ? t.panningModel : "HRTF", refDistance: typeof t.refDistance < "u" ? t.refDistance : 1, rolloffFactor: typeof t.rolloffFactor < "u" ? t.rolloffFactor : 1 }, r2._onstereo = t.onstereo ? [{ fn: t.onstereo }] : [], r2._onpos = t.onpos ? [{ fn: t.onpos }] : [], r2._onorientation = t.onorientation ? [{ fn: t.onorientation }] : [], e.call(this, t);
      };
    }(Howl.prototype.init), Howl.prototype.stereo = function(e, t) {
      var r2 = this;
      if (!r2._webAudio)
        return r2;
      if (r2._state !== "loaded")
        return r2._queue.push({ event: "stereo", action: function() {
          r2.stereo(e, t);
        } }), r2;
      var n = typeof Howler.ctx.createStereoPanner > "u" ? "spatial" : "stereo";
      if (typeof t > "u")
        if (typeof e == "number")
          r2._stereo = e, r2._pos = [e, 0, 0];
        else
          return r2._stereo;
      for (var u2 = r2._getSoundIds(t), m = 0; m < u2.length; m++) {
        var h2 = r2._soundById(u2[m]);
        if (h2)
          if (typeof e == "number")
            h2._stereo = e, h2._pos = [e, 0, 0], h2._node && (h2._pannerAttr.panningModel = "equalpower", (!h2._panner || !h2._panner.pan) && s(h2, n), n === "spatial" ? typeof h2._panner.positionX < "u" ? (h2._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime), h2._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime), h2._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime)) : h2._panner.setPosition(e, 0, 0) : h2._panner.pan.setValueAtTime(e, Howler.ctx.currentTime)), r2._emit("stereo", h2._id);
          else
            return h2._stereo;
      }
      return r2;
    }, Howl.prototype.pos = function(e, t, r2, n) {
      var u2 = this;
      if (!u2._webAudio)
        return u2;
      if (u2._state !== "loaded")
        return u2._queue.push({ event: "pos", action: function() {
          u2.pos(e, t, r2, n);
        } }), u2;
      if (t = typeof t != "number" ? 0 : t, r2 = typeof r2 != "number" ? -0.5 : r2, typeof n > "u")
        if (typeof e == "number")
          u2._pos = [e, t, r2];
        else
          return u2._pos;
      for (var m = u2._getSoundIds(n), h2 = 0; h2 < m.length; h2++) {
        var v2 = u2._soundById(m[h2]);
        if (v2)
          if (typeof e == "number")
            v2._pos = [e, t, r2], v2._node && ((!v2._panner || v2._panner.pan) && s(v2, "spatial"), typeof v2._panner.positionX < "u" ? (v2._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime), v2._panner.positionY.setValueAtTime(t, Howler.ctx.currentTime), v2._panner.positionZ.setValueAtTime(r2, Howler.ctx.currentTime)) : v2._panner.setPosition(e, t, r2)), u2._emit("pos", v2._id);
          else
            return v2._pos;
      }
      return u2;
    }, Howl.prototype.orientation = function(e, t, r2, n) {
      var u2 = this;
      if (!u2._webAudio)
        return u2;
      if (u2._state !== "loaded")
        return u2._queue.push({ event: "orientation", action: function() {
          u2.orientation(e, t, r2, n);
        } }), u2;
      if (t = typeof t != "number" ? u2._orientation[1] : t, r2 = typeof r2 != "number" ? u2._orientation[2] : r2, typeof n > "u")
        if (typeof e == "number")
          u2._orientation = [e, t, r2];
        else
          return u2._orientation;
      for (var m = u2._getSoundIds(n), h2 = 0; h2 < m.length; h2++) {
        var v2 = u2._soundById(m[h2]);
        if (v2)
          if (typeof e == "number")
            v2._orientation = [e, t, r2], v2._node && (v2._panner || (v2._pos || (v2._pos = u2._pos || [0, 0, -0.5]), s(v2, "spatial")), typeof v2._panner.orientationX < "u" ? (v2._panner.orientationX.setValueAtTime(e, Howler.ctx.currentTime), v2._panner.orientationY.setValueAtTime(t, Howler.ctx.currentTime), v2._panner.orientationZ.setValueAtTime(r2, Howler.ctx.currentTime)) : v2._panner.setOrientation(e, t, r2)), u2._emit("orientation", v2._id);
          else
            return v2._orientation;
      }
      return u2;
    }, Howl.prototype.pannerAttr = function() {
      var e = this, t = arguments, r2, n, u2;
      if (!e._webAudio)
        return e;
      if (t.length === 0)
        return e._pannerAttr;
      if (t.length === 1)
        if (typeof t[0] == "object")
          r2 = t[0], typeof n > "u" && (r2.pannerAttr || (r2.pannerAttr = { coneInnerAngle: r2.coneInnerAngle, coneOuterAngle: r2.coneOuterAngle, coneOuterGain: r2.coneOuterGain, distanceModel: r2.distanceModel, maxDistance: r2.maxDistance, refDistance: r2.refDistance, rolloffFactor: r2.rolloffFactor, panningModel: r2.panningModel }), e._pannerAttr = { coneInnerAngle: typeof r2.pannerAttr.coneInnerAngle < "u" ? r2.pannerAttr.coneInnerAngle : e._coneInnerAngle, coneOuterAngle: typeof r2.pannerAttr.coneOuterAngle < "u" ? r2.pannerAttr.coneOuterAngle : e._coneOuterAngle, coneOuterGain: typeof r2.pannerAttr.coneOuterGain < "u" ? r2.pannerAttr.coneOuterGain : e._coneOuterGain, distanceModel: typeof r2.pannerAttr.distanceModel < "u" ? r2.pannerAttr.distanceModel : e._distanceModel, maxDistance: typeof r2.pannerAttr.maxDistance < "u" ? r2.pannerAttr.maxDistance : e._maxDistance, refDistance: typeof r2.pannerAttr.refDistance < "u" ? r2.pannerAttr.refDistance : e._refDistance, rolloffFactor: typeof r2.pannerAttr.rolloffFactor < "u" ? r2.pannerAttr.rolloffFactor : e._rolloffFactor, panningModel: typeof r2.pannerAttr.panningModel < "u" ? r2.pannerAttr.panningModel : e._panningModel });
        else
          return u2 = e._soundById(parseInt(t[0], 10)), u2 ? u2._pannerAttr : e._pannerAttr;
      else
        t.length === 2 && (r2 = t[0], n = parseInt(t[1], 10));
      for (var m = e._getSoundIds(n), h2 = 0; h2 < m.length; h2++)
        if (u2 = e._soundById(m[h2]), u2) {
          var v2 = u2._pannerAttr;
          v2 = { coneInnerAngle: typeof r2.coneInnerAngle < "u" ? r2.coneInnerAngle : v2.coneInnerAngle, coneOuterAngle: typeof r2.coneOuterAngle < "u" ? r2.coneOuterAngle : v2.coneOuterAngle, coneOuterGain: typeof r2.coneOuterGain < "u" ? r2.coneOuterGain : v2.coneOuterGain, distanceModel: typeof r2.distanceModel < "u" ? r2.distanceModel : v2.distanceModel, maxDistance: typeof r2.maxDistance < "u" ? r2.maxDistance : v2.maxDistance, refDistance: typeof r2.refDistance < "u" ? r2.refDistance : v2.refDistance, rolloffFactor: typeof r2.rolloffFactor < "u" ? r2.rolloffFactor : v2.rolloffFactor, panningModel: typeof r2.panningModel < "u" ? r2.panningModel : v2.panningModel };
          var b = u2._panner;
          b ? (b.coneInnerAngle = v2.coneInnerAngle, b.coneOuterAngle = v2.coneOuterAngle, b.coneOuterGain = v2.coneOuterGain, b.distanceModel = v2.distanceModel, b.maxDistance = v2.maxDistance, b.refDistance = v2.refDistance, b.rolloffFactor = v2.rolloffFactor, b.panningModel = v2.panningModel) : (u2._pos || (u2._pos = e._pos || [0, 0, -0.5]), s(u2, "spatial"));
        }
      return e;
    }, Sound.prototype.init = function(e) {
      return function() {
        var t = this, r2 = t._parent;
        t._orientation = r2._orientation, t._stereo = r2._stereo, t._pos = r2._pos, t._pannerAttr = r2._pannerAttr, e.call(this), t._stereo ? r2.stereo(t._stereo) : t._pos && r2.pos(t._pos[0], t._pos[1], t._pos[2], t._id);
      };
    }(Sound.prototype.init), Sound.prototype.reset = function(e) {
      return function() {
        var t = this, r2 = t._parent;
        return t._orientation = r2._orientation, t._stereo = r2._stereo, t._pos = r2._pos, t._pannerAttr = r2._pannerAttr, t._stereo ? r2.stereo(t._stereo) : t._pos ? r2.pos(t._pos[0], t._pos[1], t._pos[2], t._id) : t._panner && (t._panner.disconnect(0), t._panner = void 0, r2._refreshBuffer(t)), e.call(this);
      };
    }(Sound.prototype.reset);
    var s = function(e, t) {
      t = t || "spatial", t === "spatial" ? (e._panner = Howler.ctx.createPanner(), e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle, e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle, e._panner.coneOuterGain = e._pannerAttr.coneOuterGain, e._panner.distanceModel = e._pannerAttr.distanceModel, e._panner.maxDistance = e._pannerAttr.maxDistance, e._panner.refDistance = e._pannerAttr.refDistance, e._panner.rolloffFactor = e._pannerAttr.rolloffFactor, e._panner.panningModel = e._pannerAttr.panningModel, typeof e._panner.positionX < "u" ? (e._panner.positionX.setValueAtTime(e._pos[0], Howler.ctx.currentTime), e._panner.positionY.setValueAtTime(e._pos[1], Howler.ctx.currentTime), e._panner.positionZ.setValueAtTime(e._pos[2], Howler.ctx.currentTime)) : e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]), typeof e._panner.orientationX < "u" ? (e._panner.orientationX.setValueAtTime(e._orientation[0], Howler.ctx.currentTime), e._panner.orientationY.setValueAtTime(e._orientation[1], Howler.ctx.currentTime), e._panner.orientationZ.setValueAtTime(e._orientation[2], Howler.ctx.currentTime)) : e._panner.setOrientation(e._orientation[0], e._orientation[1], e._orientation[2])) : (e._panner = Howler.ctx.createStereoPanner(), e._panner.pan.setValueAtTime(e._stereo, Howler.ctx.currentTime)), e._panner.connect(e._node), e._paused || e._parent.pause(e._id, true).play(e._id, true);
    };
  })();
});
var G = class extends Error {
  constructor(t) {
    super(t.message);
    l(this, "name");
    l(this, "message");
    Object.setPrototypeOf(this, G.prototype), typeof t.name == "string" && (this.name = t.name), typeof t.message == "string" && (this.message = t.message);
  }
};
var Ii = Wt(Li(), 1);
var Di = Wt(xi(), 1);
var Ut = ((i) => (i.Blob = "blob", i.MediaDevices = "mediaDevices", i.OffscreenCanvas = "offscreenCanvas", i.HttpProtocol = "httpProtocol", i.SecureContext = "secureContext", i.UrlObject = "urlObject", i.WebWorkers = "webWorkers", i.WebAssembly = "webAssembly", i.WebAssemblyErrorFree = "webAssemblyErrorFree", i.WebGL = "webGL", i))(Ut || {});
var B;
((v2) => {
  v2.userAgentInfo = new Di.default(navigator.userAgent), v2.canvas = document.createElement("canvas");
  function t() {
    var a;
    if ("orientation" in window)
      return false;
    let b = "(any-pointer: coarse)", i = (a = window.matchMedia) == null ? void 0 : a.call(window, b);
    return navigator.maxTouchPoints === 0 || (i == null ? void 0 : i.media) === b && !(i != null && i.matches);
  }
  v2.isDesktopDevice = t;
  function r2() {
    return v2.userAgentInfo.getOS().name === "iOS" && (window.screen.width === 1179 / 3 && window.screen.height === 2556 / 3 || window.screen.width === 1290 / 3 && window.screen.height === 2796 / 3) && window.devicePixelRatio === 3;
  }
  v2.isBrokenIPhoneCameraDevice = r2;
  function n() {
    let b = v2.userAgentInfo.getOS();
    return b.name === "iOS" && b.version != null && b.version.localeCompare("16.3", void 0, { numeric: true }) >= 0;
  }
  v2.isIOSDeviceWithExtendedCameraAccess = n;
  function u2() {
    function b(g, p, S2) {
      let C = g[p[0]];
      return C == null ? false : p.length === 1 ? typeof C === S2 : (typeof C == "function" || typeof C == "object") && b(C, p.slice(1), S2);
    }
    function i(g) {
      return g.name === "iOS" && g.version != null && ["11.2.2", "11.2.5", "11.2.6"].includes(g.version);
    }
    let a = true, o = true, c = [];
    location.protocol.startsWith("http") || (c.push("httpProtocol"), a = o = false), b(window, ["isSecureContext"], "boolean") && !window.isSecureContext && c.push("secureContext"), !b(navigator, ["mediaDevices", "getUserMedia"], "function") && !b(navigator, ["enumerateDevices"], "function") && !b(window, ["MediaStreamTrack", "getSources"], "function") && (c.push("mediaDevices"), a = false), b(window, ["Worker"], "function") || (c.push("webWorkers"), a = o = false), b(window, ["WebAssembly"], "object") || (c.push("webAssembly"), a = o = false), b(window, ["Blob"], "function") || (c.push("blob"), a = o = false), b(window, ["URL", "createObjectURL"], "function") || (c.push("urlObject"), a = o = false), b(window, ["OffscreenCanvas"], "function") || c.push("offscreenCanvas");
    try {
      if (!b(window, ["WebGLRenderingContext"], "function") || v2.canvas.getContext("webgl") == null && v2.canvas.getContext("experimental-webgl") == null)
        throw new Error();
    } catch (g) {
      c.push("webGL");
    }
    let d = v2.userAgentInfo.getOS();
    return i(d) && (c.push("webAssemblyErrorFree"), a = o = false), { fullSupport: a, scannerSupport: o, missingFeatures: c };
  }
  v2.checkBrowserCompatibility = u2;
  function m() {
    let b = "scandit-device-id", i = localStorage.getItem(b);
    if (i != null && i !== "")
      return i;
    if (i = Ii.default.get(b), i != null && i !== "")
      return localStorage.setItem(b, i), i;
    let a = new Uint8Array(20);
    return crypto.getRandomValues(a), i = [...a].map((o) => {
      let c = o.toString(16);
      return c.length === 1 ? `0${c}` : c;
    }).join(""), localStorage.setItem(b, i), i;
  }
  v2.getDeviceId = m;
  function h2(b) {
    return b instanceof HTMLElement || b != null && typeof b == "object" && typeof b.tagName == "string";
  }
  v2.isValidHTMLElement = h2;
})(B || (B = {}));
var f;
((u2) => {
  let s;
  ((a) => (a.Debug = "debug", a.Info = "info", a.Warn = "warn", a.Error = "error", a.Quiet = "quiet"))(s = u2.Level || (u2.Level = {}));
  let e = /* @__PURE__ */ new Map([["debug", 1], ["info", 2], ["warn", 3], ["error", 4], ["quiet", 5]]), t = "debug";
  function r2(m) {
    t = m;
  }
  u2.setLevel = r2;
  function n(m, ...h2) {
    if (!(e.get(t) > e.get(m)))
      switch (m) {
        case "debug":
          console.debug(...h2);
          break;
        case "info":
          console.log(...h2);
          break;
        case "warn":
          console.warn(...h2);
          break;
        case "error":
          console.error(...h2);
          break;
        default:
          break;
      }
  }
  u2.log = n;
})(f || (f = {}));
function Ei(s, e = location) {
  return s += s.endsWith("/") ? "" : "/", /^https?:\/\//.test(s) ? s : (s = s.split("/").filter((t) => t.length > 0).join("/"), s = s === "" ? "/" : `/${s}/`, e.protocol === "file:" || e.origin === "null" ? `${e.href.split("/").slice(0, -1).join("/")}${s}` : `${e.origin}${s}`);
}
function Jr(s) {
  return /^https?:\/\/(?:[^./]*\.)*cdn.jsdelivr.net\//.test(s) ? { result: true, cdnBaseURL: "https://cdn.jsdelivr.net/npm/" } : /^https?:\/\/(?:[^./]*\.)*unpkg.com\//.test(s) ? { result: true, cdnBaseURL: "https://unpkg.com/" } : { result: false, cdnBaseURL: "" };
}
function Hr(s) {
  let t = /scandit-web-datacapture-[a-z]+/i.exec(s);
  return t ? t[0] : null;
}
function Oi(s, e, t) {
  let r2 = e, n = Jr(r2);
  if (n.result) {
    let m = Hr(r2);
    m != null && (r2 = `${n.cdnBaseURL}${m}@${s}/build/engine/`);
  }
  let u2 = t.replace(".wasm", "");
  return n.result ? { jsURI: `${r2}${u2}.js`, wasmURI: `${r2}${u2}.wasm` } : { jsURI: `${r2}${u2}.js?v=${s}`, wasmURI: `${r2}${u2}.wasm?v=${s}` };
}
function Ni() {
  return WebAssembly.validate(new Uint8Array([0, 97, 115, 109, 1, 0, 0, 0, 1, 5, 1, 96, 0, 1, 123, 3, 2, 1, 0, 10, 10, 1, 8, 0, 65, 1, 253, 15, 253, 98, 11]));
}
var Ae = class extends G {
  constructor(t) {
    super({ name: "UnsupportedBrowserError", message: `This OS / browser has one or more missing features preventing it from working correctly (${t.missingFeatures.join(", ")})` });
    l(this, "data");
    this.data = t;
  }
};
var Bt = class {
  constructor() {
    l(this, "subscribers", /* @__PURE__ */ new Set());
  }
  subscribe(e) {
    this.subscribers.add(e);
  }
  unsubscribe(e) {
    this.subscribers.has(e) && this.subscribers.delete(e);
  }
  notify(e) {
    for (let t of this.subscribers)
      t(e);
  }
};
var Gr = new Bt();
var Ti = Gr;
var Yr = /* @__PURE__ */ new Set();
var at = Yr;
var de = class {
  constructor(e, t) {
    l(this, "_x");
    l(this, "_y");
    this._x = e, this._y = t;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  static fromJSON(e) {
    return new de(e.x, e.y);
  }
  toJSONObject() {
    return { x: this.x, y: this.y };
  }
};
var Ee = class {
  constructor(e, t, r2, n) {
    l(this, "_topLeft");
    l(this, "_topRight");
    l(this, "_bottomRight");
    l(this, "_bottomLeft");
    this._topLeft = e, this._topRight = t, this._bottomRight = r2, this._bottomLeft = n;
  }
  get topLeft() {
    return this._topLeft;
  }
  get topRight() {
    return this._topRight;
  }
  get bottomRight() {
    return this._bottomRight;
  }
  get bottomLeft() {
    return this._bottomLeft;
  }
  static fromJSON(e) {
    return new Ee(de.fromJSON(e.topLeft), de.fromJSON(e.topRight), de.fromJSON(e.bottomRight), de.fromJSON(e.bottomLeft));
  }
  toJSONObject() {
    return { topLeft: this.topLeft.toJSONObject(), topRight: this.topRight.toJSONObject(), bottomLeft: this.bottomLeft.toJSONObject(), bottomRight: this.bottomRight.toJSONObject() };
  }
};
var Vt = ((t) => (t.Pixel = "pixel", t.Fraction = "fraction", t))(Vt || {});
var F = class {
  constructor(e, t) {
    l(this, "_value");
    l(this, "_unit");
    this._value = e, this._unit = t;
  }
  get value() {
    return this._value;
  }
  get unit() {
    return this._unit;
  }
  static fromJSON(e) {
    return new F(e.value, e.unit);
  }
  toJSONObject() {
    return { unit: this.unit, value: this.value };
  }
};
var fe = class {
  constructor(e, t) {
    l(this, "_x");
    l(this, "_y");
    this._x = e, this._y = t;
  }
  get x() {
    return this._x;
  }
  get y() {
    return this._y;
  }
  static fromJSON(e) {
    return new fe(F.fromJSON(e.x), F.fromJSON(e.y));
  }
  static get zero() {
    return new fe(new F(0, "pixel"), new F(0, "pixel"));
  }
  toJSONObject() {
    return { x: this.x.toJSONObject(), y: this.y.toJSONObject() };
  }
};
var we = class {
  constructor(e, t) {
    l(this, "_width");
    l(this, "_height");
    this._width = e, this._height = t;
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  isSameAs(e) {
    return JSON.stringify(this.toJSONObject()) === JSON.stringify(e.toJSONObject());
  }
  toJSONObject() {
    return { width: this.width.toJSONObject(), height: this.height.toJSONObject() };
  }
  static fromJSON(e) {
    return new we(F.fromJSON(e.width), F.fromJSON(e.height));
  }
};
var Oe = class {
  constructor(e, t) {
    l(this, "_width");
    l(this, "_height");
    this._width = e, this._height = t;
  }
  get width() {
    return this._width;
  }
  get height() {
    return this._height;
  }
  static fromJSON(e) {
    return new Oe(e.width, e.height);
  }
  toJSONObject() {
    return { height: this.height, width: this.width };
  }
};
var Be = class {
  constructor(e, t) {
    l(this, "_size");
    l(this, "_aspect");
    this._size = e, this._aspect = t;
  }
  get size() {
    return this._size;
  }
  get aspect() {
    return this._aspect;
  }
};
var Qr = ((n) => (n.WidthAndHeight = "widthAndHeight", n.WidthAndAspectRatio = "widthAndAspectRatio", n.HeightAndAspectRatio = "heightAndAspectRatio", n.ShorterDimensionAndAspectRatio = "shorterDimensionAndAspectRatio", n))(Qr || {});
var ie = class {
  constructor() {
    l(this, "_widthAndHeight");
    l(this, "_widthAndAspectRatio");
    l(this, "_heightAndAspectRatio");
    l(this, "_shorterDimensionAndAspectRatio", null);
  }
  get widthAndHeight() {
    return this._widthAndHeight;
  }
  get widthAndAspectRatio() {
    return this._widthAndAspectRatio;
  }
  get heightAndAspectRatio() {
    return this._heightAndAspectRatio;
  }
  get shorterDimensionAndAspectRatio() {
    return this._shorterDimensionAndAspectRatio;
  }
  get sizingMode() {
    return this.widthAndAspectRatio ? "widthAndAspectRatio" : this.heightAndAspectRatio ? "heightAndAspectRatio" : this.shorterDimensionAndAspectRatio ? "shorterDimensionAndAspectRatio" : "widthAndHeight";
  }
  static sizeWithWidthAndHeight(e) {
    let t = new ie();
    return t._widthAndHeight = e, t;
  }
  static sizeWithWidthAndAspectRatio(e, t) {
    let r2 = new ie();
    return r2._widthAndAspectRatio = new Be(e, t), r2;
  }
  static sizeWithHeightAndAspectRatio(e, t) {
    let r2 = new ie();
    return r2._heightAndAspectRatio = new Be(e, t), r2;
  }
  static sizeWithShorterDimensionAndAspectRatio(e, t) {
    let r2 = new ie();
    return r2._shorterDimensionAndAspectRatio = new Be(e, t), r2;
  }
  static fromJSON(e) {
    if (e.width && e.height)
      return this.sizeWithWidthAndHeight(new we(F.fromJSON(e.width), F.fromJSON(e.height)));
    if (e.width && typeof e.aspect == "number")
      return this.sizeWithWidthAndAspectRatio(F.fromJSON(e.width), e.aspect);
    if (e.height && typeof e.aspect == "number")
      return this.sizeWithHeightAndAspectRatio(F.fromJSON(e.height), e.aspect);
    if (e.shorterDimension && typeof e.aspect == "number")
      return this.sizeWithShorterDimensionAndAspectRatio(F.fromJSON(e.shorterDimension), e.aspect);
    throw new Error(`SizeWithUnitAndAspectJSON is malformed: ${JSON.stringify(e)}`);
  }
  toJSONObject() {
    switch (this.sizingMode) {
      case "widthAndAspectRatio":
        return { width: this.widthAndAspectRatio.size.toJSONObject(), aspect: this.widthAndAspectRatio.aspect };
      case "heightAndAspectRatio":
        return { height: this.heightAndAspectRatio.size.toJSONObject(), aspect: this.heightAndAspectRatio.aspect };
      case "shorterDimensionAndAspectRatio":
        return { shorterDimension: this.shorterDimensionAndAspectRatio.size.toJSONObject(), aspect: this.shorterDimensionAndAspectRatio.aspect };
      default:
        return { width: this.widthAndHeight.width.toJSONObject(), height: this.widthAndHeight.height.toJSONObject() };
    }
  }
};
var ye = class {
  constructor(e, t, r2, n) {
    l(this, "_left");
    l(this, "_right");
    l(this, "_top");
    l(this, "_bottom");
    this._left = e, this._top = t, this._right = r2, this._bottom = n;
  }
  get left() {
    return this._left;
  }
  get right() {
    return this._right;
  }
  get top() {
    return this._top;
  }
  get bottom() {
    return this._bottom;
  }
  static fromJSON(e) {
    return new ye(F.fromJSON(e.left), F.fromJSON(e.top), F.fromJSON(e.right), F.fromJSON(e.bottom));
  }
  static get zero() {
    return new ye(new F(0, "pixel"), new F(0, "pixel"), new F(0, "pixel"), new F(0, "pixel"));
  }
  toJSONObject() {
    return { left: this.left.toJSONObject(), right: this.right.toJSONObject(), top: this.top.toJSONObject(), bottom: this.bottom.toJSONObject() };
  }
};
var Y = class {
  constructor(e) {
    l(this, "hexadecimalString");
    this.hexadecimalString = e;
  }
  get redComponent() {
    return this.hexadecimalString.slice(0, 2);
  }
  get greenComponent() {
    return this.hexadecimalString.slice(2, 4);
  }
  get blueComponent() {
    return this.hexadecimalString.slice(4, 6);
  }
  get alphaComponent() {
    return this.hexadecimalString.slice(6, 8);
  }
  get red() {
    return Y.hexToNumber(this.redComponent);
  }
  get green() {
    return Y.hexToNumber(this.greenComponent);
  }
  get blue() {
    return Y.hexToNumber(this.blueComponent);
  }
  get alpha() {
    return Y.hexToNumber(this.alphaComponent);
  }
  static fromHex(e) {
    return new Y(Y.normalizeHex(e));
  }
  static fromRGBA(e, t, r2, n = 1) {
    let u2 = [e, t, r2, this.normalizeAlpha(n)].reduce((m, h2) => m + this.numberToHex(h2), "");
    return new Y(u2);
  }
  static hexToNumber(e) {
    return Number.parseInt(e, 16);
  }
  static fromJSON(e) {
    return Y.fromHex(e);
  }
  static numberToHex(e) {
    e = Math.round(e);
    let t = e.toString(16);
    return t.length === 1 && (t = `0${t}`), t.toUpperCase();
  }
  static normalizeHex(e) {
    return e.startsWith("#") && (e = e.slice(1)), e.length < 6 && (e = e.split("").map((t) => t + t).join("")), e.length === 6 && (e += "FF"), e.toUpperCase();
  }
  static normalizeAlpha(e) {
    return e > 0 && e <= 1 ? 255 * e : e;
  }
  withAlpha(e) {
    let t = this.hexadecimalString.slice(0, 6) + Y.numberToHex(Y.normalizeAlpha(e));
    return Y.fromHex(t);
  }
  toJSON() {
    return this.hexadecimalString;
  }
};
var Pi = ((u2) => (u2.Unknown = "unknown", u2.Portrait = "portrait", u2.PortraitUpsideDown = "portraitUpsideDown", u2.LandscapeRight = "landscapeRight", u2.LandscapeLeft = "landscapeLeft", u2))(Pi || {});
var $r = ((h2) => (h2.None = "none", h2.Horizontal = "horizontal", h2.LeftToRight = "leftToRight", h2.RightToLeft = "rightToLeft", h2.Vertical = "vertical", h2.TopToBottom = "topToBottom", h2.BottomToTop = "bottomToTop", h2))($r || {});
var qr = ((t) => (t.Minimal = "minimal", t.Extended = "extended", t))(qr || {});
var nt = class {
  constructor() {
    l(this, "type", "tapToFocus");
  }
  toJSONObject() {
    return { type: this.type };
  }
};
var ot = class {
  constructor() {
    l(this, "type", "swipeToZoom");
  }
  toJSONObject() {
    return { type: this.type };
  }
};
var Zr = ((t) => (t.Rounded = "rounded", t.Square = "square", t))(Zr || {});
var Xr = ((t) => (t.Light = "light", t.Bold = "bold", t))(Xr || {});
var Kr = ((e) => (e.Animated = "animated", e))(Kr || {});
var Ne = class {
  constructor(e) {
    l(this, "_isLooping", false);
    this._isLooping = e;
  }
  static fromJSON(e) {
    return e === null ? null : new Ne(e.looping);
  }
  get isLooping() {
    return this._isLooping;
  }
  toJSONObject() {
    return { looping: this.isLooping };
  }
};
var zi = "data:audio/mp3;base64,//vkwAAAP+X9CbWNgAauxig3N9AC0BJQKbbcjbTLG7sPafMNYRUWovMBAT4SPNsTi0DPk8sm0xGCSlL8tmWXLjoNGQGBq6iaGSgkIMqPjRkYz4yMgCiQPMzQTbGQ1g+GjQwsdMhGR4PAAgYwNGLBQKE2vAQIMOEAEKKKmFipjIuBhtMAEAhhQMiqYybmps5ubeaqNmQKx19yfflnMr4KQjLkw1xiNeUDNAQxc5N0eDclwz4cQdMLETEw0IB0nDEBgzEtMlFUCYMAC6CHMw0TMPARgEMjJzIxcMD2EFsEwHUbuWzMIBgMENAYGmOy+aijpoqMkgNr8SQwAAAgMYWYMEGDACakpa2zt+6BhiD6RbT5plCpFiNclkw4DDGuSlW9AOnXBRcMvGuuL6w5Xp4xGJZhuvTyt22IPxQxuX3H8hyhaw7ksxr591hT55/hhhUpJfT9wwww//1hzdent1I3L7esOfnnhhz888888Pzz/CksbpKTD//XP1////rC3mUBBYOHBOH/DH///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////6SSgIJJACZKKSbbTZkdMhgouYiADgGla1YoADHj8w0wVoJAheaFZjIwabFkoCYSWGqiYGeBRG58cmZAmm+SShC/mKgIGCQXA4NQKCkFKBJcf4KAtdrWiYA4KUt99hYF0+AwAASB4sA5g+BLcmlPOFABBgA9//LymAQaGJwVEwzGCQGKLiwGmEqomwQTggFSgFCzzAjBN4zQwDXpXB/g4H0AjBplYRPZS1f5UARj8VdKgYddIQTW5z9TZgmAYQEjOKWB0xE5y4IjBEAATRaq3I06BIAJEEc9z/4zwSAtQRxnEiZe0wbB8mAtQpdC352rcpqxhMD0AxGitf//5dv/+PsEQ5hgDpjpGO6zV4lLAMC6+lYHaiSy0mYBgV9soKC4EFATRmAv/FWnf//BUA4Cx/Dfedwy53//uH8//1zCvb5/91/P//3f///9f///3P///5z///33//9c///9d///8+f//qv+T//////////////////////////////////////////////////////////////////////////////////////////////8//vkwAAAP/IJR/2LABatraj03tGyd3eGQSE7ITLZBQqwCm0WuxmTMqSuFTF/lK2sgw4s1WUFfb4DA2CgDC8vgDKqAoBICACgJDJF8OVICTxNOjsvRIaJ9BQBRPPX9ZqTVRsOkQFAEAeAANECQVzUWaRKZu3/kNAwAACCx4ZUoot/5iQEXKIDAYQAXAYIwBClisXWb+o4kkUiBABASFFdT/6LVmIZBDVoGDoDQN4h3Oil/+ovByZdRU7//RJknALAdM3R//9P//+///9v//1n/+n///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////wG/oKujJksi/rUYjCkITgji8ApTpMA8WGQAEEGGFoNIysqiNA0V2JZB9nXN93l/1hwBk8sf/////9XbsfJAT+BuhoL1xJCJmZgP6//kYA80JwJhB//oJkMI8DGqg5hu3/1tUUwEGSfQ//2c1AO9kI///rD8Pb/+kCJOXEv9X//9H/J/9P////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+//vkwAAAP+YJRaf2jdavQWj9jtG6wG3oKujJkknx//eSDgyw6DrGIANugTAVDxKABgLIRl8Dxc9sUBxhW9wIckdi/n3vO/u4WAYiG//////8scsqs1AIyARgseRhmAzk1uGxFUX/8mQAR4byUCkj/92PivAAzRKJeRS//rOAgEJL//7G4BZEhWf//qDJ/f/+UQMcCL6L//+3//9v//1P//+s9/yP/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7PDu6iRL7CpNL+ENxoCGAzIZQFgJZqgcEHDy1BAYKHQIGBIAOyEBAY804b3AYQAArRB8RMDwBQXLQNpeCoAmA4FmBYEmA4Boby6G3LdsCgsPApKH8hyxqpSUnK8NxvP867/ykw9JYxGAD5ZSRyDCmmm9ab1FwAQmJzWamjLTTTpppugggPshoAzQFB6zdNPQTegggomyfNCiBmTocAboGBcLjoFwuIJl8ny+am4e2OeBtzAbYVEKkO/fzMPy+m9BDQbVDiADTpBDfq3b/v///f//+///89/1f/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+//vkwAAAP+VtQaxrTZavI6X9HNG022tgBmsJk1udMxFAUq4uaYimQqgKQypiyzlA0D7pbA4NIQQHRTOIPARqQsS0EArr7P8u4woAu1B65UJJbF3p5pIWBhg2W2ZVKqWzhWjUaz3j9NM7Bg0z0kBfWJSqzZhqeyy/9////wEXuWdMzuWVNl+NXL8cccLVRpZiSgYKnsv3jjj+OOP5fWziT9gICoLFZTZ5WpaXmVNTWqtV2rbhCIucSSAnsoyprOWWWW8ccfxxx99UhYO79bL8ef+XP/uu0CVRhxTNZc2Win///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////4ADvEGILtrY23+kdZZESJEAEDABkvsj2LAiI05IwYUJFPzapY1hjS5VrXd44/+4zey7l+su/vHm0DEqDlh8ABRIDJOwNoLC14UOQo8CUi+aotV90ThtS//1GRdMDb//6T//9SzAixu3+R/4lR/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+//vkwAAAP/ABLgAAACauACXAAAAE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////vkwAAAP/ABLgAAACauACXAAAAE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////vkwAAAP/ABLgAAACauACXAAAAE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////vkwAAAP/ABLgAAACauACXAAAAE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////vkwAAAP/ABLgAAACauACXAAAAE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////vkwAAAP/ABLgAAACauACXAAAAE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////vkwAAAP/ABLgAAACauACXAAAAE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////vkwAAAP/ABLgAAACauACXAAAAE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////vkwAAAP/ABLgAAACauACXAAAAE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////vkwAAAP/ABLgAAACauACXAAAAE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////vkwAAAP/ABLgAAACauACXAAAAE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////vkwAAAP/ABLgAAACauACXAAAAE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////vkwAAAP/ABLgAAACauACXAAAAE//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////vkwAAAP/ABLgAAACauACXAAAAE////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////VEFHMTBfU2NhbmRpdF9CYXJjb2RlLUNhcHR1cmVfU3VjU29ub25hdXQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAMjAyMwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAf8=";
var Fi = "PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNTQiIGZpbGw9Im5vbmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTU4IDEwSDI4LjZMMjIuOS41QTEgMSAwIDAgMCAyMiAwSDJhMiAyIDAgMCAwLTIgMnY0NmE2IDYgMCAwIDAgNiA2aDQ4YTYgNiAwIDAgMCA2LTZWMTJhMiAyIDAgMCAwLTItMlptLTM3LjUgOGE0LjUgNC41IDAgMSAxIDAgOSA0LjUgNC41IDAgMCAxIDAtOVptMjcuNCAyNy41YTEgMSAwIDAgMS0uOS41SDEzYTEgMSAwIDAgMS0uOC0xLjVsNy0xMWExIDEgMCAwIDEgMS42LS4xbDUgNiA5LjQtMTVhMSAxIDAgMCAxIDEuMy0uM2wuNC40IDExIDIwYTEgMSAwIDAgMSAwIDFaIi8+PC9zdmc+";
var ji = "PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxNjQuNjIgMTIuMjIiPjxwYXRoIGQ9Ik0xMDEuNTUuOTFhMi4yOCAyLjI4IDAgMCAwLTEuOTcgMS43MSAyLjcyIDIuNzIgMCAwIDAgMCAxLjExIDIuNDIgMi40MiAwIDAgMCAxLjI0IDEuNTRjLjQ2LjIzLjUuMjQgMS43OS4yNmwxLjE1LjAyLjIyLjFhMS41MSAxLjUxIDAgMCAxIC44IDEuNyAxLjQxIDEuNDEgMCAwIDEtMS4wNiAxLjA4Yy0uMTIuMDMtLjguMDQtMi4wOS4wNGE3Ljc0IDcuNzQgMCAwIDAtMS45My4wNSAzLjE5IDMuMTkgMCAwIDAgLjAxLjc3IDE0LjY5IDE0LjY5IDAgMCAwIDIuMS4wM2wyLjA4LS4wMS4yNi0uMWEyLjI3IDIuMjcgMCAwIDAgMS41LTEuNzQgMi41NSAyLjU1IDAgMCAwLS4wOC0xLjIgMi40IDIuNCAwIDAgMC0xLjE0LTEuMzZjLS40Ni0uMjItLjU1LS4yMy0xLjY1LS4yMy0xLjMyIDAtMS41My0uMDYtMS45NS0uNDdhMS40OCAxLjQ4IDAgMCAxLS40NS0uOTQgMS40MyAxLjQzIDAgMCAxIC45NC0xLjRjLjItLjA4LjItLjA4IDIuMDktLjFsMS45LS4wMXYtLjQxYy4wMi0uMzEgMC0uNDItLjAyLS40NC0uMDYtLjA0LTMuNDMtLjAzLTMuNzQgMFptMjAuMDIuMTFjLS4zNCAxLjI0LTIuMiA4LjI3LTIuMTkgOC4yOGExLjg2IDEuODYgMCAwIDAgLjQ0LjAzYy4zOCAwIC40MyAwIC40NC0uMDZsMS0zLjcyLjk4LTMuNyAxIDMuNjcgMSAzLjc1YzAgLjAzLjA2LjA2LjQ1LjA2aC40NWwtLjAyLS4xYy0uMDQtLjE1LTIuMTMtOC0yLjE5LTguMThsLS4wNS0uMTdoLTEuMjdsLS4wNC4xNFptOC4yMyA0LjA4VjkuM2guODNsLjAyLTMuNzcuMDEtMy43NyAyLjIgMy43NyAyLjIgMy43Ny41Mi4wMS41Mi4wMVY1LjEyTDEzNi4wOS45aC0uODZsLS4wMiAzLjQzLS4wMiAzLjQ0LTIuMDItMy40NEwxMzEuMTYuOWwtLjY5LS4wMWgtLjY4Wk0xNTIuNzkuOTNjLS4wMy4wNy0uMDMgOC4yOCAwIDguMzUuMDEuMDQuMDguMDUuNDMuMDVoLjRWLjg4aC0uNGMtLjM1IDAtLjQyLjAxLS40My4wNVptNS4yMi4zNnYuNDJoMi44NHYzLjhsLjAyIDMuOGguMzhhMS4wNSAxLjA1IDAgMCAwIC40Mi0uMDJjLjA0LS4wNC4wNC0uNjMuMDQtMy44MVYxLjdoMi44Vi44OGgtNi41Wk0xMTEuODUuOTZhMy4yNyAzLjI3IDAgMCAwLTIuMDQgMS42NCA0Ljk4IDQuOTggMCAwIDAtLjU1IDEuNzkgOC4yNCA4LjI0IDAgMCAwIC4wOCAyLjA2IDMuMzUgMy4zNSAwIDAgMCAyLjI4IDIuNzkgNy44NSA3Ljg1IDAgMCAwIDIuMS4wN2gxLjgzbC4wMS0uNDIuMDEtLjQyaC0xLjcxYy0xLjkgMC0xLjk0IDAtMi4zNS0uMjFhMi44NSAyLjg1IDAgMCAxLTEuMzUtMi4xIDcuMTcgNy4xNyAwIDAgMS0uMDMtMS43NyAzLjA4IDMuMDggMCAwIDEgMS43LTIuNTNjLjE4LS4wNy4yMS0uMDcgMS45NC0uMWgxLjc1Vi45MmgtMS43NGExNS45NyAxNS45NyAwIDAgMC0xLjkzLjA0Wm0yOS41NyA0LjE1djQuMmwxLjguMDFhOS41NiA5LjU2IDAgMCAwIDIuNjQtLjEzYzEuNTgtLjQ1IDIuNDktMi4xIDIuNDEtNC4zOGE0LjMxIDQuMzEgMCAwIDAtLjQzLTEuODYgMy43NiAzLjc2IDAgMCAwLTEuODctMS44NGMtLjUtLjE5LS41OC0uMi0yLjY2LS4yaC0xLjl2NC4yWm0zLjc5LTMuM2EyLjgxIDIuODEgMCAwIDEgMi4wNCAyLjA1IDMuNDkgMy40OSAwIDAgMSAuMTYgMS4zNkE0LjQ4IDQuNDggMCAwIDEgMTQ3IDcuMWEyLjIzIDIuMjMgMCAwIDEtMS4wNSAxLjEzYy0uNDUuMjItLjQ2LjIyLTIuMTUuMjRoLTEuNTN2LTYuN2gxLjM2Yy44IDAgMS40NS4wMiAxLjU4LjA0WiIgZmlsbD0iIzEyMTYxOSIgc3Ryb2tlPSIjMTIxNjE5IiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iLjIiLz48cGF0aCBkPSJNNS45IDIuOTRoMS4xN2EzLjI3IDMuMjcgMCAwIDAtLjI5LTEuMzJBMi41NyAyLjU3IDAgMCAwIDYuMDUuNyAzIDMgMCAwIDAgNC45OC4xNyA0Ljk2IDQuOTYgMCAwIDAgMy42NSAwYTQuNzYgNC43NiAwIDAgMC0xLjI0LjE3IDMuNDEgMy40MSAwIDAgMC0xLjA4LjQ5IDIuNSAyLjUgMCAwIDAtLjc2Ljg0QTIuNDYgMi40NiAwIDAgMCAuMyAyLjcyYTIuMDMgMi4wMyAwIDAgMCAuMjUgMS4wNiAyLjA2IDIuMDYgMCAwIDAgLjY4LjY5IDMuOTMgMy45MyAwIDAgMCAuOTUuNDNxLjUzLjE2IDEuMDkuMjhsMS4wOC4yNGE0Ljk1IDQuOTUgMCAwIDEgLjk2LjMgMS44NiAxLjg2IDAgMCAxIC42OC41IDEuMTcgMS4xNyAwIDAgMSAuMjUuNzcgMS41MiAxLjUyIDAgMCAxLS4yMS44NCAxLjUxIDEuNTEgMCAwIDEtLjU1LjUgMi40NyAyLjQ3IDAgMCAxLS43Ni4yOCA0LjYxIDQuNjEgMCAwIDEtLjgzLjA3IDMuOTcgMy45NyAwIDAgMS0xLjAyLS4xMyAyLjUyIDIuNTIgMCAwIDEtLjg2LS40IDIuMDcgMi4wNyAwIDAgMS0uNi0uNyAyLjEgMi4xIDAgMCAxLS4yMy0xSDBBMy4yNiAzLjI2IDAgMCAwIC4zIDcuOWEyLjggMi44IDAgMCAwIC44NCAxLjAxIDMuNjQgMy42NCAwIDAgMCAxLjIyLjYgNS40NCA1LjQ0IDAgMCAwIDEuNDguMiA1LjY0IDUuNjQgMCAwIDAgMS4yOC0uMTYgMy43IDMuNyAwIDAgMCAxLjE2LS40OCAyLjczIDIuNzMgMCAwIDAgLjg1LS44NiAyLjMzIDIuMzMgMCAwIDAgLjMzLTEuMjYgMi4zMyAyLjMzIDAgMCAwLS4yNS0xLjE1IDIuMjYgMi4yNiAwIDAgMC0uNjgtLjc1IDMuNTggMy41OCAwIDAgMC0uOTUtLjQ4cS0uNTQtLjE4LTEuMDktLjN0LTEuMDgtLjI0YTUuNjggNS42OCAwIDAgMS0uOTYtLjI4IDEuODggMS44OCAwIDAgMS0uNjgtLjQ0Ljk3Ljk3IDAgMCAxLS4yNS0uNyAxLjUgMS41IDAgMCAxIC4xNy0uNzUgMS4zNiAxLjM2IDAgMCAxIC40Ny0uNSAyLjA0IDIuMDQgMCAwIDEgLjY3LS4yNSAzLjc4IDMuNzggMCAwIDEgLjc3LS4wOCAyLjYyIDIuNjIgMCAwIDEgMS41OC40NSAxLjkzIDEuOTMgMCAwIDEgLjcyIDEuNDVabTkuMzkgMmgxLjE0YTIuNjYgMi42NiAwIDAgMC0uMzEtMS4wNCAyLjMgMi4zIDAgMCAwLS42My0uNzIgMi42MSAyLjYxIDAgMCAwLS44OS0uNDIgNC4wNiA0LjA2IDAgMCAwLTEuMDctLjE0IDMuMjUgMy4yNSAwIDAgMC0xLjM5LjI4IDIuNzggMi43OCAwIDAgMC0xIC43NyAzLjI2IDMuMjYgMCAwIDAtLjU5IDEuMTQgNC45MyA0LjkzIDAgMCAwLS4yIDEuNDIgNC41MyA0LjUzIDAgMCAwIC4yIDEuMzggMy4wNCAzLjA0IDAgMCAwIC42IDEuMDkgMi42MyAyLjYzIDAgMCAwIDEgLjcgMy41IDMuNSAwIDAgMCAxLjM1LjI0IDIuOTIgMi45MiAwIDAgMCAyLjA0LS42NyAzLjEgMy4xIDAgMCAwIC45My0xLjkzaC0xLjEzYTEuOTQgMS45NCAwIDAgMS0uNTcgMS4yMSAxLjggMS44IDAgMCAxLTEuMjguNDMgMS44MyAxLjgzIDAgMCAxLS45LS4yIDEuNzUgMS43NSAwIDAgMS0uNi0uNTYgMi40NCAyLjQ0IDAgMCAxLS4zNS0uNzggMy43NCAzLjc0IDAgMCAxLS4xMS0uOTEgNC41NyA0LjU3IDAgMCAxIC4xLS45OSAyLjQ2IDIuNDYgMCAwIDEgLjM1LS44NCAxLjc4IDEuNzggMCAwIDEgLjY0LS41OCAyLjA2IDIuMDYgMCAwIDEgMS0uMjIgMS42OCAxLjY4IDAgMCAxIDEuMTIuMzUgMS42OCAxLjY4IDAgMCAxIC41NS45OVpNMjUuNiA5LjQ4YTEuNTYgMS41NiAwIDAgMS0uOC4xNy45NS45NSAwIDAgMS0uNjgtLjI1IDEuMDQgMS4wNCAwIDAgMS0uMjUtLjc4IDIuNjQgMi42NCAwIDAgMS0xLjA2Ljc4IDMuNSAzLjUgMCAwIDEtMS4zLjI1IDMuNSAzLjUgMCAwIDEtLjg3LS4xIDIuMDEgMi4wMSAwIDAgMS0uNy0uMzMgMS41NiAxLjU2IDAgMCAxLS40OC0uNTggMS45NSAxLjk1IDAgMCAxLS4xNy0uODYgMS45NyAxLjk3IDAgMCAxIC4yLS45NCAxLjcgMS43IDAgMCAxIC41LS41OSAyLjM1IDIuMzUgMCAwIDEgLjczLS4zNXEuNC0uMTEuODQtLjIuNDUtLjA4Ljg2LS4xM2E0LjgyIDQuODIgMCAwIDAgLjcyLS4xMyAxLjIgMS4yIDAgMCAwIC41LS4yNS42LjYgMCAwIDAgLjE4LS40NyAxLjEgMS4xIDAgMCAwLS4xNC0uNTkuOTQuOTQgMCAwIDAtLjM1LS4zMyAxLjQzIDEuNDMgMCAwIDAtLjQ4LS4xNiAzLjYzIDMuNjMgMCAwIDAtLjUzLS4wNCAyLjM0IDIuMzQgMCAwIDAtMS4xNy4yNyAxLjEzIDEuMTMgMCAwIDAtLjUgMWgtMS4xYTIuMzkgMi4zOSAwIDAgMSAuMjYtMS4wNSAxLjk3IDEuOTcgMCAwIDEgLjYyLS43IDIuNjIgMi42MiAwIDAgMSAuOS0uMzggNC43IDQuNyAwIDAgMSAxLjA3LS4xMiA2LjMgNi4zIDAgMCAxIC45LjA3IDIuMzYgMi4zNiAwIDAgMSAuOC4yNiAxLjU2IDEuNTYgMCAwIDEgLjYuNTcgMS44MSAxLjgxIDAgMCAxIC4yMS45NXYzLjQ1YTIuNTkgMi41OSAwIDAgMCAuMDUuNThxLjA0LjE5LjMuMTlhMS4xIDEuMSAwIDAgMCAuMzQtLjA3Wm0tMS44LTMuNDVhMS4zOCAxLjM4IDAgMCAxLS41NC4yM3EtLjMzLjA3LS43LjEydC0uNzUuMWEyLjc1IDIuNzUgMCAwIDAtLjY4LjE4IDEuMjMgMS4yMyAwIDAgMC0uNDguMzcgMS4wNCAxLjA0IDAgMCAwLS4yLjY2LjkuOSAwIDAgMCAuMTIuNDYuOTIuOTIgMCAwIDAgLjI4LjMgMS4yIDEuMiAwIDAgMCAuNDEuMTggMi4yNyAyLjI3IDAgMCAwIC41LjA1IDIuNjIgMi42MiAwIDAgMCAuOTMtLjE1IDEuOTcgMS45NyAwIDAgMCAuNjQtLjM4IDEuNDkgMS40OSAwIDAgMCAuMzctLjUgMS4yNSAxLjI1IDAgMCAwIC4xMS0uNVptNC43OC0zLjI1VjkuNWgxLjFWNS43YTIuNzIgMi43MiAwIDAgMSAuMTItLjg0IDEuOSAxLjkgMCAwIDEgLjM3LS42NiAxLjY1IDEuNjUgMCAwIDEgLjYyLS40NSAyLjI1IDIuMjUgMCAwIDEgLjg4LS4xNSAxLjM1IDEuMzUgMCAwIDEgMSAuMzYgMS4zMyAxLjMzIDAgMCAxIC4zNi45OVY5LjVoMS4xVjUuMDhhNC4xNiA0LjE2IDAgMCAwLS4xLTEgMS44OCAxLjg4IDAgMCAwLS40LS43NyAxLjgyIDEuODIgMCAwIDAtLjctLjUgMi45MiAyLjkyIDAgMCAwLTEuMS0uMTggMi4zMyAyLjMzIDAgMCAwLTIuMTkgMS4yMmgtLjAzVjIuNzhabTkuMTggMFY5LjVoMS4xVjUuN2EyLjcyIDIuNzIgMCAwIDEgLjEyLS44NCAxLjkgMS45IDAgMCAxIC4zNy0uNjYgMS42NSAxLjY1IDAgMCAxIC42Mi0uNDUgMi4yNSAyLjI1IDAgMCAxIC44OC0uMTUgMS4zNSAxLjM1IDAgMCAxIDEgLjM3IDEuMzMgMS4zMyAwIDAgMSAuMzYuOThWOS41aDEuMVY1LjA4YTQuMTYgNC4xNiAwIDAgMC0uMS0xIDEuODggMS44OCAwIDAgMC0uNC0uNzcgMS44MiAxLjgyIDAgMCAwLS43LS41IDIuOTIgMi45MiAwIDAgMC0xLjEtLjE4IDIuMzMgMi4zMyAwIDAgMC0yLjE5IDEuMjJoLS4wM1YyLjc4Wm0xMC4zNC0xLjJWLjIxaC0xLjF2MS4zNVptLTEuMSAxLjJWOS41aDEuMVYyLjc4Wm00Ljc3IDBWOS41aDEuMVY1LjdhMi43MiAyLjcyIDAgMCAxIC4xMy0uODQgMS45IDEuOSAwIDAgMSAuMzctLjY2IDEuNjUgMS42NSAwIDAgMSAuNjItLjQ1IDIuMjUgMi4yNSAwIDAgMSAuODctLjE1IDEuMzUgMS4zNSAwIDAgMSAxIC4zNiAxLjMzIDEuMzMgMCAwIDEgLjM3Ljk5VjkuNWgxLjFWNS4wOGE0LjE2IDQuMTYgMCAwIDAtLjExLTEgMS44OCAxLjg4IDAgMCAwLS4zOS0uNzcgMS44MiAxLjgyIDAgMCAwLS43MS0uNSAyLjkyIDIuOTIgMCAwIDAtMS4xLS4xOCAyLjMzIDIuMzMgMCAwIDAtMi4xOSAxLjIyaC0uMDJWMi43OFptMTQuOTggNi4xNVYyLjc4aC0xLjA0di45NmgtLjAxYTEuOTcgMS45NyAwIDAgMC0uODQtLjg0IDIuNDggMi40OCAwIDAgMC0xLjE3LS4yOCAzIDMgMCAwIDAtMS40Ni4zNCAyLjg1IDIuODUgMCAwIDAtLjk3Ljg0IDMuMzUgMy4zNSAwIDAgMC0uNTIgMS4xNSA1LjEgNS4xIDAgMCAwLS4xNSAxLjIyIDQuNDUgNC40NSAwIDAgMCAuMTkgMS4zMSAzLjEzIDMuMTMgMCAwIDAgLjU2IDEuMDggMi43NSAyLjc1IDAgMCAwIC45NC43MyAyLjk2IDIuOTYgMCAwIDAgMS4zMS4yOCAyLjY5IDIuNjkgMCAwIDAgMS4yMy0uMyAxLjg2IDEuODYgMCAwIDAgLjg2LS45MWguMDN2LjQ0YTQuNDcgNC40NyAwIDAgMS0uMTIgMS4wMyAyLjE1IDIuMTUgMCAwIDEtLjM1LjggMS43MyAxLjczIDAgMCAxLS42My41MiAyLjA1IDIuMDUgMCAwIDEtLjkyLjE5IDIuOTggMi45OCAwIDAgMS0uNTctLjA2IDIuMDggMi4wOCAwIDAgMS0uNTUtLjIgMS4zOCAxLjM4IDAgMCAxLS40My0uMzMuODIuODIgMCAwIDEtLjItLjVoLTEuMWExLjc0IDEuNzQgMCAwIDAgLjMuOTIgMi4wNiAyLjA2IDAgMCAwIC42NS42IDIuOTMgMi45MyAwIDAgMCAuODkuMzUgNC41NyA0LjU3IDAgMCAwIC45NS4xQTMuMDcgMy4wNyAwIDAgMCA2NiAxMS40YTMuNTQgMy41NCAwIDAgMCAuNzYtMi40N1ptLTMuMS0uMzNhMS42OSAxLjY5IDAgMCAxLS45LS4yMiAxLjc2IDEuNzYgMCAwIDEtLjYtLjYgMi41OSAyLjU5IDAgMCAxLS4zLS44MyA0LjYzIDQuNjMgMCAwIDEtLjEtLjkxIDMuOCAzLjggMCAwIDEgLjExLS45MiAyLjI5IDIuMjkgMCAwIDEgLjM1LS43OCAxLjc3IDEuNzcgMCAwIDEgLjYyLS41NCAxLjkgMS45IDAgMCAxIC45MS0uMiAxLjc1IDEuNzUgMCAwIDEgLjg5LjIgMS43MiAxLjcyIDAgMCAxIC41OS41NiAyLjQzIDIuNDMgMCAwIDEgLjMzLjc3IDMuNjggMy42OCAwIDAgMSAuMS44NyA0LjA2IDQuMDYgMCAwIDEtLjExLjk0IDIuNzMgMi43MyAwIDAgMS0uMzUuODQgMS44MSAxLjgxIDAgMCAxLS42MS42IDEuOCAxLjggMCAwIDEtLjkzLjIyWk03NS45Ny4yMlY5LjVoMS4xdi0uOWguMDNhMS43OCAxLjc4IDAgMCAwIC40NS41IDIuMzYgMi4zNiAwIDAgMCAuNTYuMzIgMy4wNyAzLjA3IDAgMCAwIC42LjE3IDMuMzIgMy4zMiAwIDAgMCAuNTUuMDUgMy4xMiAzLjEyIDAgMCAwIDEuMzYtLjI3IDIuNyAyLjcgMCAwIDAgLjk2LS43NCAzLjE4IDMuMTggMCAwIDAgLjU3LTEuMTIgNC43NCA0Ljc0IDAgMCAwIC4yLTEuMzUgNC42IDQuNiAwIDAgMC0uMi0xLjM1IDMuNDIgMy40MiAwIDAgMC0uNTgtMS4xMyAyLjc2IDIuNzYgMCAwIDAtLjk2LS43NyAzLjAzIDMuMDMgMCAwIDAtMS4zNi0uMjkgMy4yIDMuMiAwIDAgMC0xLjI5LjI2IDEuNjUgMS42NSAwIDAgMC0uODYuODFoLS4wMlYuMjJabTUuMiA1Ljg2YTQuNDIgNC40MiAwIDAgMS0uMS45NyAyLjU0IDIuNTQgMCAwIDEtLjM0LjgzIDEuNzggMS43OCAwIDAgMS0uNjEuNTggMS44OSAxLjg5IDAgMCAxLS45Ni4yMiAyLjA1IDIuMDUgMCAwIDEtLjk3LS4yMSAxLjkgMS45IDAgMCAxLS42Ni0uNTcgMi4zNyAyLjM3IDAgMCAxLS4zNy0uOCAzLjg3IDMuODcgMCAwIDEtLjEyLS45NiAzLjkgMy45IDAgMCAxIC4xMS0uOTMgMi40MiAyLjQyIDAgMCAxIC4zNi0uOCAxLjkgMS45IDAgMCAxIC42NC0uNTkgMS45IDEuOSAwIDAgMSAuOTUtLjIyIDEuOTcgMS45NyAwIDAgMSAuOTMuMiAxLjg1IDEuODUgMCAwIDEgLjY1LjU3IDIuNDcgMi40NyAwIDAgMSAuMzcuOCAzLjQ0IDMuNDQgMCAwIDEgLjEyLjkxWm03LjA2IDQuMzJhNy4wMyA3LjAzIDAgMCAxLS4zOC44NCAyLjI3IDIuMjcgMCAwIDEtLjQyLjU1IDEuNDEgMS40MSAwIDAgMS0uNS4zMSAxLjk1IDEuOTUgMCAwIDEtLjY1LjEgMi45NSAyLjk1IDAgMCAxLS4zOS0uMDMgMS44NCAxLjg0IDAgMCAxLS4zNy0uMDl2LTEuMDJhMS44NiAxLjg2IDAgMCAwIC4zMy4xMSAxLjQgMS40IDAgMCAwIC4zMi4wNS45NS45NSAwIDAgMCAuNTYtLjE2IDEgMSAwIDAgMCAuMzQtLjQ2bC40Ni0xLjE0LTIuNjctNi42OGgxLjI1bDEuOTcgNS41aC4wMkw5MCAyLjc4aDEuMTdaIiBmaWxsPSIjMTIxNjE5Ii8+PC9zdmc+";
var Wi = "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAICRAEAOw==";
var Jt = class {
  static fromJSON(e) {
    return (e == null ? void 0 : e.type) === "tapToFocus" ? new nt() : null;
  }
};
var Ht = class {
  static fromJSON(e) {
    return (e == null ? void 0 : e.type) === "swipeToZoom" ? new ot() : null;
  }
};
function ea(s) {
  var e;
  return { Camera: { Settings: { preferredResolution: s.Camera.Settings.preferredResolution, zoomFactor: s.Camera.Settings.zoomFactor, zoomGestureZoomFactor: s.Camera.Settings.zoomGestureZoomFactor, focusGestureStrategy: s.Camera.Settings.focusGestureStrategy }, defaultPosition: (e = s.Camera.defaultPosition) != null ? e : null, availablePositions: s.Camera.availablePositions }, SingleImageUploader: { Settings: { iconElement: document.createRange().createContextualFragment(s.SingleImageUploader.Settings.iconElement).firstElementChild, informationElement: document.createRange().createContextualFragment(s.SingleImageUploader.Settings.informationElement).firstElementChild, buttonElement: document.createRange().createContextualFragment(s.SingleImageUploader.Settings.buttonElement).firstElementChild, containerStyle: s.SingleImageUploader.Settings.containerStyle, iconStyle: s.SingleImageUploader.Settings.iconStyle, informationStyle: s.SingleImageUploader.Settings.informationStyle, buttonStyle: s.SingleImageUploader.Settings.buttonStyle } }, DataCaptureView: { scanAreaMargins: ye.fromJSON(JSON.parse(s.DataCaptureView.scanAreaMargins)), pointOfInterest: fe.fromJSON(JSON.parse(s.DataCaptureView.pointOfInterest)), logoStyle: s.DataCaptureView.logoStyle, logoAnchor: s.DataCaptureView.logoAnchor, logoOffset: fe.fromJSON(JSON.parse(s.DataCaptureView.logoOffset)), focusGesture: Jt.fromJSON(JSON.parse(s.DataCaptureView.focusGesture)), zoomGesture: Ht.fromJSON(JSON.parse(s.DataCaptureView.zoomGesture)), cameraRecoveryText: s.DataCaptureView.cameraRecoveryText }, LaserlineViewfinder: Object.keys(s.LaserlineViewfinder.styles).reduce((t, r2) => {
    let n = s.LaserlineViewfinder.styles[r2];
    return t.styles[r2] = { width: F.fromJSON(JSON.parse(n.width)), enabledColor: Y.fromJSON(n.enabledColor), disabledColor: Y.fromJSON(n.disabledColor), style: n.style }, t;
  }, { defaultStyle: s.LaserlineViewfinder.defaultStyle, styles: {} }), RectangularViewfinder: Object.keys(s.RectangularViewfinder.styles).reduce((t, r2) => {
    let n = s.RectangularViewfinder.styles[r2];
    return t.styles[r2] = { size: ie.fromJSON(JSON.parse(n.size)), color: Y.fromJSON(n.color), style: n.style, lineStyle: n.lineStyle, dimming: Number.parseFloat(n.dimming.toString()), animation: Ne.fromJSON(JSON.parse(n.animation)) }, t;
  }, { defaultStyle: s.RectangularViewfinder.defaultStyle, styles: {} }), AimerViewfinder: { frameColor: Y.fromJSON(s.AimerViewfinder.frameColor), dotColor: Y.fromJSON(s.AimerViewfinder.dotColor) }, Brush: { fillColor: Y.fromJSON(s.Brush.fillColor), strokeColor: Y.fromJSON(s.Brush.strokeColor), strokeWidth: s.Brush.strokeWidth } };
}
var D = ea({ DataCaptureView: { focusGesture: "null", zoomGesture: "null", logoAnchor: "bottomRight", logoStyle: "extended", logoOffset: JSON.stringify({ x: { value: 0, unit: "fraction" }, y: { value: 0, unit: "fraction" } }), pointOfInterest: JSON.stringify({ x: { value: 0.5, unit: "fraction" }, y: { value: 0.5, unit: "fraction" } }), scanAreaMargins: JSON.stringify({ left: { value: 0, unit: "fraction" }, right: { value: 0, unit: "fraction" }, top: { value: 0, unit: "fraction" }, bottom: { value: 0, unit: "fraction" } }), cameraRecoveryText: "Tap/click to resume scanning" }, Camera: { Settings: { preferredResolution: "auto", zoomFactor: 1, focusGestureStrategy: "manualUntilCapture", zoomGestureZoomFactor: 2 }, defaultPosition: "worldFacing", availablePositions: ["worldFacing", "userFacing"] }, SingleImageUploader: { Settings: { iconElement: atob(Fi), informationElement: "<p>Analyze an image from your device.</p>", buttonElement: "<div>Choose an Image</div>", containerStyle: { backgroundColor: "#FFFFFF" }, iconStyle: { fill: "#121619" }, informationStyle: { color: "#121619", marginBottom: "2em" }, buttonStyle: { color: "#FFFFFF", backgroundColor: "#121619", fontWeight: "bold", padding: "1.25em", width: "12em", textAlign: "center", textTransform: "uppercase" } } }, LaserlineViewfinder: { defaultStyle: "animated", styles: { animated: { width: JSON.stringify({ unit: "fraction", value: 0.8 }), enabledColor: "#FFFFFFFF", disabledColor: "#00000000", style: "animated" } } }, AimerViewfinder: { frameColor: "#FFFFFFFF", dotColor: "#FFFFFFCC" }, RectangularViewfinder: { defaultStyle: "rounded", styles: { rounded: { size: JSON.stringify({ aspect: 1, shorterDimension: { unit: "fraction", value: 0.75 } }), color: "#FFFFFFFF", style: "rounded", lineStyle: "light", dimming: 0, animation: JSON.stringify({ looping: true }) }, square: { size: JSON.stringify({ aspect: 1, shorterDimension: { unit: "fraction", value: 0.75 } }), color: "#FFFFFFFF", style: "square", lineStyle: "light", dimming: 0, animation: JSON.stringify({ looping: true }) } } }, Brush: { fillColor: "#00000000", strokeColor: "#00000000", strokeWidth: 0 } });
var ne = { CONTAINER_CLASS_NAME: "scandit-container", PAINTBOARDS_CONTAINER_CLASS_NAME: "scandit-paintboards", PAINTBOARD_CLASS_NAME: "scandit-paintboard", PAINTBOARD_CLASS_NAME_STATE_ON: "scandit-paintboard--camera-on", CONTROLS_CLASS_NAME: "scandit-controls", CONTROL_WIDGET_CLASS_NAME: "scandit-control-widget", MIRRORED_CLASS_NAME: "scandit-mirrored", CAMERA_RECOVERY_CLASS_NAME: "scandit-camera-recovery", ERROR_CLASS_NAME: "scandit-error", SINGLE_IMAGE_UPLOADER_CONTAINER_CLASS_NAME: "scandit-single-image-uploader-container", CANVAS_VIDEO_PREVIEW_CLASS_NAME: "scandit-canvas-video-preview" };
var Ve = ((n) => (n.On = "on", n.Off = "off", n.Starting = "starting", n.Stopping = "stopping", n))(Ve || {});
var Gt = ((t) => (t.On = "on", t.Off = "off", t))(Gt || {});
var Yt = ((t) => (t.WorldFacing = "worldFacing", t.UserFacing = "userFacing", t))(Yt || {});
var Ui = ((n) => (n.Auto = "auto", n.HD = "hd", n.FullHD = "fullHd", n.UHD4K = "uhd4k", n))(Ui || {});
var ta = ((n) => (n.None = "none", n.Manual = "manual", n.ManualUntilCapture = "manualUntilCapture", n.AutoOnLocation = "autoOnLocation", n))(ta || {});
var me = class {
  constructor(e) {
    l(this, "preferredResolution", D.Camera.Settings.preferredResolution);
    l(this, "zoomFactor", D.Camera.Settings.zoomFactor);
    l(this, "zoomGestureZoomFactor", D.Camera.Settings.zoomGestureZoomFactor);
    l(this, "focus", { focusGestureStrategy: D.Camera.Settings.focusGestureStrategy });
    if (e != null)
      for (let t of Object.getOwnPropertyNames(e))
        this[t] = e[t];
  }
  get focusGestureStrategy() {
    return this.focus.focusGestureStrategy;
  }
  set focusGestureStrategy(e) {
    this.focus.focusGestureStrategy = e;
  }
  static fromJSON(e) {
    let t = new me();
    return t.preferredResolution = e.preferredResolution, t.zoomFactor = e.zoomFactor, t.zoomGestureZoomFactor = e.zoomGestureZoomFactor, t.focusGestureStrategy = e.focusGestureStrategy, t;
  }
  setProperty(e, t) {
    this[e] = t;
  }
  getProperty(e) {
    return this[e];
  }
  isIPhoneProCameraOptimizationEnabled(e) {
    return this.getProperty("iPhoneProCameraOptimization") === true && e === "worldFacing";
  }
  toJSONObject() {
    let e = { preferredResolution: this.preferredResolution, zoomFactor: this.zoomFactor, zoomGestureZoomFactor: this.zoomGestureZoomFactor, focus: { focusGestureStrategy: this.focus.focusGestureStrategy } }, t = {};
    for (let r2 of Object.keys(this))
      [...Object.keys(e), "focusGestureStrategy"].includes(r2) || (t[r2] = this[r2]);
    return Q(Q({}, e), t);
  }
};
var V;
((z) => {
  let s = /* @__PURE__ */ new Map([["DeviceCaptureError", "AbortError"], ["NotSupportedError", "AbortError"], ["ScreenCaptureError", "AbortError"], ["TabCaptureError", "AbortError"], ["TypeError", "AbortError"], ["InvalidStateError", "NotAllowedError"], ["MediaDeviceFailedDueToShutdown", "NotAllowedError"], ["MediaDeviceKillSwitchOn", "NotAllowedError"], ["PermissionDeniedError", "NotAllowedError"], ["PermissionDismissedError", "NotAllowedError"], ["DevicesNotFoundError", "NotFoundError"], ["SourceUnavailableError", "NotReadableError"], ["TrackStartError", "NotReadableError"], ["ConstraintNotSatisfiedError", "OverconstrainedError"]]), e = ["rear", "back", "r\xFCck", "arri\xE8re", "trasera", "tr\xE1s", "traseira", "posteriore", "\u540E\u9762", "\u5F8C\u9762", "\u80CC\u9762", "\u540E\u7F6E", "\u5F8C\u7F6E", "\u80CC\u7F6E", "\u0437\u0430\u0434\u043D\u0435\u0439", "\u0627\u0644\u062E\u0644\u0641\u064A\u0629", "\uD6C4", "arka", "achterzijde", "\u0E2B\u0E25\u0E31\u0E07", "baksidan", "bagside", "sau", "bak", "tylny", "takakamera", "belakang", "\u05D0\u05D7\u05D5\u05E8\u05D9\u05EA", "\u03C0\u03AF\u03C3\u03C9", "spate", "h\xE1ts\xF3", "zadn\xED", "darrere", "posterior", "zadn\xE1", "\u0437\u0430\u0434\u043D\u044F", "stra\u017Enja", "belakang", "\u092C\u0948\u0915"], t = /* @__PURE__ */ new Set(["Desk View Camera", "Schreibtischansicht-Kamera", "Cam\xE9ra Desk\xA0View", "C\xE1mara de Vista Cenital", "C\xE2mara da Vista de Secret\xE1ria", "Fotocamera di Panoramica Scrivania", "\u684C\u4E0A\u89C6\u89D2\u76F8\u673A", "\u30C7\u30B9\u30AF\u30D3\u30E5\u30FC\u30AB\u30E1\u30E9", "\u041A\u0430\u043C\u0435\u0440\u0430 \u041E\u0431\u0437\u043E\u0440\u0430 \u0441\u0442\u043E\u043B\u0430", "Masa G\xF6r\xFCnt\xFCs\xFC Kameras\u0131", "Bureauweergave-camera", "\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0639\u0631\u0636 \u0627\u0644\u0631\u0623\u0633\u064A", "\u0E01\u0E25\u0E49\u0E2D\u0E07\u0E14\u0E39\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32\u0E42\u0E15\u0E4A\u0E30", "Bordsvisningskamera", "Kamera til Visning af skrivebord", "Camera Desk View", "Bordvisning-kamera", "Kamera w\xA0aplikacji Widok blatu", "Ty\xF6p\xF6yt\xE4n\xE4kym\xE4n kamera", "Kamera Tampilan Meja", "\u05DE\u05E6\u05DC\u05DE\u05EA \u05F4\u05EA\u05E6\u05D5\u05D2\u05EA \u05E9\u05D5\u05DC\u05D7\u05DF\u05F4", "\u039A\u03AC\u03BC\u03B5\u03C1\u03B1 \u03C4\u03B7\u03C2 \u03A0\u03C1\u03BF\u03B2\u03BF\u03BB\u03AE\u03C2 \u03B3\u03C1\u03B1\u03C6\u03B5\u03AF\u03BF\u03C5", "Camer\u0103 Vizualizare birou", "\xCDr\xF3asztal n\xE9zet kamer\xE1ja", "Stoln\xED kamera", "C\xE0mera de l\u2019app Vista de l\u2019Escriptori"]), r2 = /* @__PURE__ */ new Set(["Front Camera", "Frontkamera", "Appareil photo avant", "C\xE1mara frontal", "C\xE2mera Frontal", "C\xE2mara frontal", "Fotocamera (anteriore)", "\u524D\u7F6E\u76F8\u673A", "\u524D\u7F6E\u76F8\u6A5F", "\u524D\u9762\u30AB\u30E1\u30E9", "\u041A\u0430\u043C\u0435\u0440\u0430 \u043D\u0430 \u043F\u0435\u0440\u0435\u0434\u043D\u0435\u0439 \u043F\u0430\u043D\u0435\u043B\u0438", "\xD6n Kamera", "Camera aan voorzijde", "\u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u0623\u0645\u0627\u0645\u064A\u0629", "\u0E01\u0E25\u0E49\u0E2D\u0E07\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E19\u0E49\u0E32", "Kamera p\xE5 framsidan", "Forsidekamera", "Camera m\u1EB7t tr\u01B0\u1EDBc", "Kamera foran", "Przedni aparat", "Etukamera", "Kamera Depan", "\u05DE\u05E6\u05DC\u05DE\u05D4 \u05E7\u05D3\u05DE\u05D9\u05EA", "\u039C\u03C0\u03C1\u03BF\u03C3\u03C4\u03B9\u03BD\u03AE \u03BA\u03AC\u03BC\u03B5\u03C1\u03B1", "Camer\u0103 fa\u021B\u0103", "El\xFCls\u0151 kamera", "P\u0159edn\xED fotoapar\xE1t", "C\xE0mera frontal", "Predn\xE1 kamera", "\u041F\u0435\u0440\u0435\u0434\u043D\u044F \u043A\u0430\u043C\u0435\u0440\u0430", "Prednja kamera", "Kamera Depan", "\u092B\u093C\u094D\u0930\u0902\u091F \u0915\u0948\u092E\u0930\u093E"]), n = /* @__PURE__ */ new Set(["Back Camera", "R\xFCckkamera", "Cam\xE9ra arri\xE8re", "C\xE1mara trasera", "C\xE2mera Traseira", "C\xE2mara traseira", "Fotocamera (posteriore)", "\u540E\u7F6E\u76F8\u673A", "\u5F8C\u7F6E\u76F8\u6A5F", "\u80CC\u9762\u30AB\u30E1\u30E9", "\u041A\u0430\u043C\u0435\u0440\u0430 \u043D\u0430 \u0437\u0430\u0434\u043D\u0435\u0439 \u043F\u0430\u043D\u0435\u043B\u0438", "Arka Kamera", "Camera aan achterzijde", "\u0627\u0644\u0643\u0627\u0645\u064A\u0631\u0627 \u0627\u0644\u062E\u0644\u0641\u064A\u0629", "\u0E01\u0E25\u0E49\u0E2D\u0E07\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07", "Kamera p\xE5 baksidan", "Bagsidekamera", "Camera m\u1EB7t sau", "Kamera bak", "Tylny aparat", "Takakamera", "Kamera Belakang", "\u05DE\u05E6\u05DC\u05DE\u05D4 \u05D0\u05D7\u05D5\u05E8\u05D9\u05EA", "\u03A0\u03AF\u03C3\u03C9 \u03BA\u03AC\u03BC\u03B5\u03C1\u03B1", "Camer\u0103 spate", "H\xE1ts\xF3 kamera", "Zadn\xED fotoapar\xE1t", "C\xE0mera posterior", "Zadn\xE1 kamera", "\u0417\u0430\u0434\u043D\u044F \u043A\u0430\u043C\u0435\u0440\u0430", "Stra\u017Enja kamera", "Kamera Belakang", "\u092C\u0948\u0915 \u0915\u0948\u092E\u0930\u093E"]), u2 = /* @__PURE__ */ new Set(["Back Ultra Wide Camera", "R\xFCckseitige Ultra-Weitwinkelkamera", "Appareil photo ultra grand angle arri\xE8re", "C\xE1mara trasera con ultra gran angular", "C\xE2mera Ultra-Angular Traseira", "C\xE2mara ultra grande angular traseira", "Fotocamera con ultra-grandangolo (posteriore)", "\u540E\u7F6E\u8D85\u5E7F\u89D2\u76F8\u673A", "\u5F8C\u7F6E\u8D85\u5EE3\u89D2\u76F8\u6A5F", "\u80CC\u9762\u8D85\u5E83\u89D2\u30AB\u30E1\u30E9", "\u0417\u0430\u0434\u043D\u044F\u044F \u0441\u0432\u0435\u0440\u0445\u0448\u0438\u0440\u043E\u043A\u043E\u0443\u0433\u043E\u043B\u044C\u043D\u0430\u044F \u043A\u0430\u043C\u0435\u0440\u0430", "Ultra Geni\u015F Kamera Arka Y\xFCz\xFC", "Ultrabrede camera aan achterzijde", "\u0643\u0627\u0645\u064A\u0631\u0627 \u062E\u0644\u0641\u064A\u0629 \u0639\u0631\u064A\u0636\u0629 \u062C\u062F\u064B\u0627", "\u0E01\u0E25\u0E49\u0E2D\u0E07\u0E14\u0E49\u0E32\u0E19\u0E2B\u0E25\u0E31\u0E07\u0E21\u0E38\u0E21\u0E01\u0E27\u0E49\u0E32\u0E07\u0E2D\u0E31\u0E25\u0E15\u0E23\u0E49\u0E32", "Ultravidvinkelkamera p\xE5 baksidan", "Ultravidvinkelkameraet p\xE5 bagsiden", "Camera c\u1EF1c r\u1ED9ng m\u1EB7t sau", "Ultravidvinkelkamera bak", "Tylny aparat ultraszerokok\u0105tny", "Ultralaajakulmainen takakamera", "Kamera Ultra Lebar Belakang", "\u05DE\u05E6\u05DC\u05DE\u05D4 \u05D0\u05D5\u05DC\u05D8\u05E8\u05D4 \u05E8\u05D7\u05D1\u05D4 \u05D0\u05D7\u05D5\u05E8\u05D9\u05EA", "\u03A0\u03AF\u03C3\u03C9 \u03C5\u03C0\u03B5\u03C1\u03B5\u03C5\u03C1\u03B5\u03AF\u03B1 \u03BA\u03AC\u03BC\u03B5\u03C1\u03B1", "Camer\u0103 cu obiectiv ultra\u2011superangular spate", "H\xE1ts\xF3, ultrasz\xE9les l\xE1t\xF3sz\xF6g\u0171 kamera", "Zadn\xED ultra \u0161iroko\xFAhl\xFD fotoapar\xE1t", "C\xE0mera posterior amb ultra gran angular", "Zadn\xE1 ultra\u0161irokouhl\xE1 kamera", "\u0417\u0430\u0434\u043D\u044F \u043D\u0430\u0434\u0448\u0438\u0440\u043E\u043A\u043E\u043A\u0443\u0442\u043D\u0430 \u043A\u0430\u043C\u0435\u0440\u0430", "Stra\u017Enja ultra \u0161iroka kamera", "Kamera Ultralebar Belakang", "\u092C\u0948\u0915 \u0905\u0932\u094D\u091F\u094D\u0930\u093E \u0935\u093E\u0907\u0921 \u0915\u0948\u092E\u0930\u093E"]), m, h2 = false;
  z.mainCameraForPositionOverridesOnDesktop = /* @__PURE__ */ new Map(), z.deviceIdToCameraObjects = /* @__PURE__ */ new Map(), z.inaccessibleDeviceIds = /* @__PURE__ */ new Set();
  function a() {
    h2 = true;
  }
  function o(A) {
    let E = A.toLowerCase();
    return e.some((O2) => E.includes(O2));
  }
  function c(A) {
    return r2.has(A);
  }
  z.isIOSWideFrontCameraLabel = c;
  function d(A) {
    return n.has(A);
  }
  z.isIOSWideBackCameraLabel = d;
  function g(A) {
    return u2.has(A);
  }
  z.isIOSUltraWideBackCameraLabel = g;
  function p(A) {
    var O2;
    let E;
    E = A.message === "Invalid constraint" ? "OverconstrainedError" : (O2 = s.get(A.name)) != null ? O2 : A.name, Object.defineProperty(A, "name", { value: E });
  }
  function S2(A, E) {
    let O2;
    if (B.isDesktopDevice())
      O2 = z.mainCameraForPositionOverridesOnDesktop.has(E) ? z.mainCameraForPositionOverridesOnDesktop.get(E) : A.find((y2) => y2.position === E);
    else {
      let y2 = A.every((M2) => M2.label === ""), x2 = A.every((M2) => M2.label !== ""), N2 = A.length > 1 && !y2 && !x2;
      if (y2)
        O2 = A[E === "userFacing" ? 0 : A.length - 1];
      else if (N2) {
        let M2 = A.filter((U) => U.position === E);
        M2.length === 1 ? O2 = M2[0] : M2.length > 1 && (O2 = M2[E === "userFacing" ? 0 : M2.length - 1]);
      } else {
        if (E === "worldFacing" && B.isBrokenIPhoneCameraDevice()) {
          let M2 = A.find((U) => g(U.label));
          if (M2 != null)
            return M2;
        }
        if (B.userAgentInfo.getOS().name === "iOS")
          if (E === "worldFacing") {
            let M2 = A.find((U) => d(U.label));
            if (M2 != null)
              return M2;
          } else {
            let M2 = A.find((U) => c(U.label));
            if (M2 != null)
              return M2;
          }
        O2 = A.filter((M2) => M2.position === E).sort((M2, U) => M2.label.localeCompare(U.label))[0];
      }
    }
    return O2;
  }
  z.getMainCameraForPosition = S2;
  function C(A, E) {
    function O2(N2, M2) {
      let U = z.mainCameraForPositionOverridesOnDesktop.get(M2);
      return U != null && N2.includes(U) && (N2 = N2.filter((ze) => ze !== U), N2.unshift(U)), N2;
    }
    let y2 = A.filter((N2) => N2.position === "userFacing"), x2 = A.filter((N2) => N2.position === "worldFacing");
    return B.isDesktopDevice() ? (y2 = O2(y2, "userFacing"), x2 = O2(x2, "worldFacing")) : A.every((N2) => N2.label === "") ? x2.reverse() : (y2.sort((N2, M2) => N2.label.localeCompare(M2.label)), x2.sort((N2, M2) => N2.label.localeCompare(M2.label)), B.userAgentInfo.getOS().name === "iOS" && (y2.some((N2, M2) => c(N2.label) && y2.unshift(y2.splice(M2, 1)[0]) >= 0), x2.some((N2, M2) => g(N2.label) && x2.unshift(x2.splice(M2, 1)[0]) >= 0), x2.some((N2, M2) => d(N2.label) && x2.unshift(x2.splice(M2, 1)[0]) >= 0)), B.isBrokenIPhoneCameraDevice() && x2.some((N2, M2) => g(N2.label) && x2.unshift(x2.splice(M2, 1)[0]) >= 0)), E === "userFacing" ? [...y2, ...x2] : [...x2, ...y2];
  }
  z.sortCamerasForCameraPosition = C;
  function _(A, E) {
    let O2 = A.getVideoTracks();
    if (O2.length > 0) {
      let y2 = O2[0], x2;
      typeof y2.getSettings == "function" && (x2 = y2.getSettings(), x2.facingMode != null && x2.facingMode.length > 0 && (E.position = x2.facingMode === "environment" ? "worldFacing" : "userFacing")), y2.label != null && y2.label.length > 0 && (E.label = y2.label);
    }
  }
  z.adjustCameraFromMediaStream = _;
  function j2(A) {
    function E(y2, x2, N2) {
      var Ce;
      if (z.deviceIdToCameraObjects.has(y2.deviceId))
        return z.deviceIdToCameraObjects.get(y2.deviceId);
      let M2 = (Ce = y2.label) != null ? Ce : "", U;
      return !B.isDesktopDevice() && N2.every((Ot) => Ot.label === "" && !z.deviceIdToCameraObjects.has(Ot.deviceId)) ? U = N2.length === 1 || x2 + 1 <= Math.floor(N2.length / 2) ? "userFacing" : "worldFacing" : U = o(M2) ? "worldFacing" : "userFacing", { position: U, label: M2, deviceId: y2.deviceId };
    }
    let O2 = A.map(E).map((y2) => (y2.deviceId !== "" && z.deviceIdToCameraObjects.set(y2.deviceId, y2), y2)).filter((y2) => !/\b(?:ir|infrared)\b/i.test(y2.label)).filter((y2) => !t.has(y2.label)).filter((y2) => !z.inaccessibleDeviceIds.has(y2.deviceId));
    if (!B.isDesktopDevice() && O2.length > 1 && !O2.some((y2) => y2.position === "worldFacing")) {
      let y2 = O2.length - 1, x2 = O2.map((N2) => {
        let M2 = /\b(\d+)mp?\b/i.exec(N2.label);
        return M2 != null ? Number.parseInt(M2[1], 10) : Number.NaN;
      });
      x2.some((N2) => Number.isNaN(N2)) || (y2 = x2.lastIndexOf(Math.max(...x2))), O2[y2].position = "worldFacing";
    }
    return O2;
  }
  async function $2() {
    if (m != null && m.length > 0 && m.every((A) => A.label === "" && !z.deviceIdToCameraObjects.has(A.deviceId)))
      try {
        return await navigator.mediaDevices.getUserMedia({ video: true, audio: false });
      } catch (A) {
      }
  }
  function Z2(A, E) {
    var O2;
    if (E.length > 0 && A.length === E.length && !E.every((y2, x2) => A[x2].deviceId === y2.deviceId)) {
      let y2 = {};
      for (let [x2, N2] of A.entries()) {
        let M2 = z.deviceIdToCameraObjects.get(N2.deviceId);
        if (M2 == null || M2.label !== ((O2 = E[x2].label) != null ? O2 : ""))
          continue;
        let U = E[x2].deviceId;
        y2[M2.deviceId] = U, z.inaccessibleDeviceIds.has(M2.deviceId) && z.inaccessibleDeviceIds.add(U), M2.deviceId = U, z.deviceIdToCameraObjects.set(U, M2);
      }
      f.log(f.Level.Debug, "Detected updated camera deviceId information and updated it accordingly", y2);
    }
  }
  async function P2(A = false, E = false) {
    let O2 = B.checkBrowserCompatibility();
    if (!O2.fullSupport)
      throw new Ae(O2);
    if (typeof navigator.mediaDevices.addEventListener == "function" ? navigator.mediaDevices.addEventListener("devicechange", a) : navigator.mediaDevices.ondevicechange = a, m == null || A || h2) {
      h2 = false;
      let x2, N2 = m != null ? m : [];
      m = [];
      try {
        m = await re(), E || (x2 = await $2(), x2 != null && (m = await re())), f.log(f.Level.Debug, "Camera list (devices):", ...m), Z2(N2, m);
      } catch (M2) {
        throw p(M2), M2;
      } finally {
        if (x2 != null)
          for (let M2 of x2.getVideoTracks())
            M2.stop();
      }
    }
    let y2 = j2(m);
    return f.log(f.Level.Debug, "Camera list (cameras): ", ...y2), [...y2];
  }
  z.getCameras = P2;
  async function I2(A) {
    return f.log(f.Level.Debug, "Attempt to access camera (parameters):", A.video), new Promise((E, O2) => {
      window.setTimeout(() => {
        var y2;
        ((y2 = navigator.mediaDevices.getUserMedia(A)) != null ? y2 : Promise.reject(new G({ name: "AbortError" }))).then(E).catch(O2);
      }, 0);
    });
  }
  function X(A, E) {
    let O2 = { resizeMode: "none" };
    switch (A) {
      case 0:
        return ae(Q({}, O2), { width: { min: 2880, ideal: E === "fourToThree" ? 2880 : 3840, max: 4096 }, height: { min: 1800, ideal: 2160, max: 2400 } });
      case 1:
        return ae(Q({}, O2), { width: { min: 1440, ideal: E === "fourToThree" ? 1440 : 1920, max: 2160 }, height: { min: 900, ideal: 1080, max: 1440 } });
      case 2:
        return ae(Q({}, O2), { width: { min: 960, ideal: E === "fourToThree" ? 960 : 1280, max: 1440 }, height: { min: 480, ideal: 720, max: 960 } });
      case 3:
        return ae(Q({}, O2), { width: { min: 640, ideal: 640, max: 800 }, height: { min: 360, ideal: E === "fourToThree" ? 480 : 360, max: 640 } });
      case 4:
      default:
        return {};
    }
  }
  z.getUserMediaVideoParameters = X;
  async function ee(A, E, O2) {
    f.log(f.Level.Debug, "Attempt to access camera (camera):", A);
    let y2 = { audio: false, video: X(E, O2) };
    A.deviceId === "" ? y2.video.facingMode = { ideal: A.position === "worldFacing" ? "environment" : "user" } : y2.video.deviceId = { exact: A.deviceId };
    try {
      let x2 = await I2(y2);
      return _(x2, A), x2;
    } catch (x2) {
      throw p(x2), ["OverconstrainedError", "NotReadableError", "NotAllowedError"].includes(x2.name) || K2(A), x2;
    }
  }
  z.accessCameraStream = ee;
  function K2(A) {
    A.deviceId !== "" && (f.log(f.Level.Debug, "Camera marked to be inaccessible:", A), z.inaccessibleDeviceIds.add(A.deviceId));
  }
  z.markCameraAsInaccessible = K2;
  async function re() {
    let A;
    if (typeof navigator.enumerateDevices == "function")
      A = await navigator.enumerateDevices();
    else if (typeof navigator.mediaDevices == "object" && typeof navigator.mediaDevices.enumerateDevices == "function")
      A = await navigator.mediaDevices.enumerateDevices();
    else
      throw new Ae({ fullSupport: false, scannerSupport: true, missingFeatures: ["mediaDevices"] });
    return A.filter((E) => E.kind === "videoinput");
  }
})(V || (V = {}));
var H = class {
  constructor() {
    l(this, "selectedCamera");
    l(this, "activeCamera");
    l(this, "activeCameraSettings");
    l(this, "gui");
    l(this, "videoElement");
    l(this, "canvas");
    l(this, "listeners", /* @__PURE__ */ new Map());
    l(this, "mirrorImageOverrides", /* @__PURE__ */ new Map());
    l(this, "triggerFatalError");
    l(this, "postStreamInitializationListener", this.postStreamInitialization.bind(this));
    l(this, "videoResizeListener", this.handleVideoResize.bind(this));
    l(this, "videoTrackEndedListener", this.videoTrackEndedRecovery.bind(this));
    l(this, "videoTrackMuteListener", this.videoTrackMuteRecovery.bind(this));
    l(this, "triggerManualFocusListener", this.triggerManualFocus.bind(this));
    l(this, "triggerZoomStartListener", this.triggerZoomStart.bind(this));
    l(this, "triggerZoomMoveListener", this.triggerZoomMove.bind(this));
    l(this, "checkCameraVideoStreamAccessIfVisibleListener", this.checkCameraVideoStreamAccessIfVisible.bind(this));
    l(this, "handleWebGLContextLostListener", this.handleWebGLContextLost.bind(this));
    l(this, "cameraPosition");
    l(this, "selectedCameraSettings");
    l(this, "mediaTrackCapabilities");
    l(this, "mediaTrackCapabilitiesPromise");
    l(this, "mediaTrackCapabilitiesPromiseResolver");
    l(this, "cameraAccessTimeout");
    l(this, "cameraAccessRejectCallback");
    l(this, "videoMetadataCheckInterval");
    l(this, "getCapabilitiesTimeout");
    l(this, "autofocusInterval");
    l(this, "manualToAutofocusResumeTimeout");
    l(this, "manualFocusWaitTimeout");
    l(this, "torchToggleEnabled");
    l(this, "tapToFocusEnabled");
    l(this, "pinchToZoomEnabled");
    l(this, "pinchToZoomDistance");
    l(this, "pinchToZoomInitialZoom");
    l(this, "torchEnabled");
    l(this, "cameraInitializationPromise");
    l(this, "abortedCameraInitializationResolveCallback");
    l(this, "cameraSetupPromise");
    l(this, "_mediaStream");
    l(this, "_canvasWebGLContext");
    l(this, "_canvas2dContext");
    l(this, "_imageData");
    this.cameraPosition = "worldFacing", this.gui = { isCameraRecoveryVisible: () => false, setCameraRecoveryVisible: () => {
    } }, this.videoElement = document.createElement("video"), this.canvas = document.createElement("canvas"), this.canvas.addEventListener("webglcontextlost", this.handleWebGLContextLostListener);
  }
  get mediaStream() {
    return this._mediaStream;
  }
  set mediaStream(e) {
    this._mediaStream = e, e && (this.mediaTrackCapabilitiesPromise = new Promise((t) => {
      this.mediaTrackCapabilitiesPromiseResolver = t;
    }));
  }
  set imageData(e) {
    this._imageData = e;
  }
  async waitForCapabilities() {
    var e;
    return (e = this.mediaTrackCapabilitiesPromise) != null ? e : Promise.resolve();
  }
  static instance() {
    return H._instance == null && (H._instance = new H()), H._instance;
  }
  setInteractionOptions(e, t, r2) {
    this.torchToggleEnabled = e, this.tapToFocusEnabled = t, this.pinchToZoomEnabled = r2;
  }
  isTapToFocusEnabled() {
    return this.tapToFocusEnabled;
  }
  setTapToFocusEnabled(e) {
    this.tapToFocusEnabled = e, this.mediaStream && (this.tapToFocusEnabled ? this.enableTapToFocusListeners() : this.disableTapToFocusListeners());
  }
  isPinchToZoomEnabled() {
    return this.pinchToZoomEnabled;
  }
  setPinchToZoomEnabled(e) {
    this.pinchToZoomEnabled = e, this.mediaStream && (this.pinchToZoomEnabled ? this.enablePinchToZoomListeners() : this.disablePinchToZoomListeners());
  }
  setInitialCameraPosition(e) {
    this.cameraPosition = e;
  }
  async setCameraPosition(e) {
    var r2;
    this.setInitialCameraPosition(e);
    let t = V.getMainCameraForPosition(await V.getCameras(), e);
    if (t && t.deviceId !== ((r2 = this.selectedCamera) == null ? void 0 : r2.deviceId))
      return this.initializeCameraWithSettings(t, this.selectedCameraSettings);
  }
  setSelectedCamera(e) {
    this.selectedCamera = e;
  }
  setSelectedCameraSettings(e) {
    this.selectedCameraSettings = e;
  }
  async setupCameras() {
    return this.cameraSetupPromise ? this.cameraSetupPromise : (this.cameraSetupPromise = this.setupCamerasAndStream(), this.cameraSetupPromise);
  }
  async stopStream(e = false) {
    this.activeCamera && (this.activeCamera.currentResolution = void 0), this.activeCamera = void 0, this.torchEnabled = false, this.mediaStream && (f.log(f.Level.Debug, `Stop camera video stream access${e ? " (abort access detection)" : ""}:`, this.mediaStream), document.removeEventListener("visibilitychange", this.checkCameraVideoStreamAccessIfVisibleListener), window.clearTimeout(this.cameraAccessTimeout), window.clearInterval(this.videoMetadataCheckInterval), window.clearTimeout(this.getCapabilitiesTimeout), window.clearTimeout(this.manualFocusWaitTimeout), window.clearTimeout(this.manualToAutofocusResumeTimeout), window.clearInterval(this.autofocusInterval), this.videoElement.pause(), await new Promise((t) => {
      setTimeout(() => {
        var r2;
        if (this.mediaStream != null)
          for (let n of this.mediaStream.getVideoTracks())
            n.removeEventListener("ended", this.videoTrackEndedListener), n.stop();
        this.videoElement.srcObject = null, this._canvas2dContext && this._canvas2dContext.clearRect(0, 0, this.canvas.width, this.canvas.height), this.mediaStream = void 0, this.mediaTrackCapabilities = void 0, this.mediaTrackCapabilitiesPromise = void 0, this.mediaTrackCapabilitiesPromiseResolver = void 0, e || (r2 = this.abortedCameraInitializationResolveCallback) == null || r2.call(this), t();
      }, 0);
    }));
  }
  async applyCameraSettings(e) {
    if (this.selectedCameraSettings = e, this.activeCamera == null)
      throw new G(H.noCameraErrorParameters);
    return this.initializeCameraWithSettings(this.activeCamera, e);
  }
  async reinitializeCamera() {
    if (this.activeCamera == null)
      f.log(f.Level.Debug, "Camera reinitialization delayed");
    else {
      f.log(f.Level.Debug, "Reinitialize camera:", this.activeCamera);
      try {
        let e = this.activeCamera;
        await this.stopStream(), await this.initializeCameraWithSettings(e, this.activeCameraSettings);
      } catch (e) {
        throw f.log(f.Level.Warn, "Couldn't access camera:", this.activeCamera, e), this.emit("cameraAccessError", e), e;
      }
    }
  }
  async initializeCameraWithSettings(e, t) {
    if (this.cameraInitializationPromise && await this.cameraInitializationPromise, e == null)
      throw new G(H.noCameraErrorParameters);
    return this.setSelectedCamera(e), this.selectedCameraSettings = t, this.activeCameraSettings = t, this.cameraInitializationPromise = this.initializeCameraAndCheckUpdatedSettings(e), this.cameraInitializationPromise;
  }
  async setTorchEnabled(e) {
    var t;
    if (this.mediaStream && ((t = this.mediaTrackCapabilities) == null ? void 0 : t.torch) === true) {
      this.torchEnabled = e;
      let r2 = this.mediaStream.getVideoTracks();
      r2.length > 0 && typeof r2[0].applyConstraints == "function" && await r2[0].applyConstraints({ advanced: [{ torch: e }] });
    }
  }
  async toggleTorch() {
    this.torchEnabled = !this.torchEnabled, await this.setTorchEnabled(this.torchEnabled);
  }
  async setZoom(e) {
    var t, r2, n;
    if (!!this.mediaStream && (await this.waitForCapabilities(), (t = this.mediaTrackCapabilities) != null && t.zoom)) {
      let u2 = this.mediaStream.getVideoTracks();
      if (u2.length > 0 && typeof u2[0].applyConstraints == "function") {
        let m = Math.max((r2 = this.mediaTrackCapabilities.zoom.min) != null ? r2 : 1, Math.min(e, (n = this.mediaTrackCapabilities.zoom.max) != null ? n : 16));
        await u2[0].applyConstraints({ advanced: [{ zoom: { ideal: m } }] });
      }
    }
  }
  async setFrameRate(e) {
    var t, r2, n, u2, m;
    if (!!this.mediaStream && (await this.waitForCapabilities(), (t = this.mediaTrackCapabilities) != null && t.frameRate)) {
      let h2 = this.mediaStream.getVideoTracks();
      if (h2.length > 0 && typeof h2[0].applyConstraints == "function") {
        let v2 = Math.max((r2 = this.mediaTrackCapabilities.frameRate.min) != null ? r2 : 1, (n = e.min) != null ? n : 1), b = Math.min((u2 = this.mediaTrackCapabilities.frameRate.max) != null ? u2 : 240, (m = e.max) != null ? m : 240);
        await h2[0].applyConstraints({ advanced: [{ frameRate: { min: v2, ideal: b, max: b } }] });
      }
    }
  }
  async setFocus(e) {
    var r2, n, u2, m, h2;
    if (!this.mediaStream)
      return;
    let t = this.mediaStream.getVideoTracks();
    if (t.length > 0 && typeof t[0].applyConstraints == "function") {
      await this.waitForCapabilities();
      let v2 = e >= 0 ? "manual" : "continuous";
      if (((n = (r2 = this.mediaTrackCapabilities) == null ? void 0 : r2.focusMode) == null ? void 0 : n.includes(v2)) === true && (await t[0].applyConstraints({ advanced: [{ focusMode: v2 }] }), v2 === "manual" && this.mediaTrackCapabilities.focusDistance)) {
        let b = Math.max(0, Math.min(e, 1)) * (((u2 = this.mediaTrackCapabilities.focusDistance.max) != null ? u2 : 1e3) - ((m = this.mediaTrackCapabilities.focusDistance.min) != null ? m : 0.01)) + ((h2 = this.mediaTrackCapabilities.focusDistance.min) != null ? h2 : 0.01);
        await t[0].applyConstraints({ advanced: [{ focusDistance: { ideal: b } }] });
      }
    }
  }
  async setExposure(e) {
    var r2, n, u2, m, h2, v2;
    if (!this.mediaStream)
      return;
    let t = this.mediaStream.getVideoTracks();
    if (t.length > 0 && typeof t[0].applyConstraints == "function") {
      await this.waitForCapabilities();
      let b = e.time != null && e.time > 0 ? "manual" : "continuous";
      if (((n = (r2 = this.mediaTrackCapabilities) == null ? void 0 : r2.exposureMode) == null ? void 0 : n.includes(b)) === true) {
        if (await t[0].applyConstraints({ advanced: [{ exposureMode: b }] }), e.time != null && e.time > 0 && this.mediaTrackCapabilities.exposureTime) {
          let i = Math.max((u2 = this.mediaTrackCapabilities.exposureTime.min) != null ? u2 : 0.01, Math.min(e.time, (m = this.mediaTrackCapabilities.exposureTime.max) != null ? m : 1e5));
          await t[0].applyConstraints({ advanced: [{ exposureTime: { ideal: i } }] });
        } else if (e.compensation != null && b === "continuous" && this.mediaTrackCapabilities.exposureCompensation) {
          let i = Math.max((h2 = this.mediaTrackCapabilities.exposureCompensation.min) != null ? h2 : -10, Math.min(e.compensation, (v2 = this.mediaTrackCapabilities.exposureCompensation.max) != null ? v2 : 10));
          await t[0].applyConstraints({ advanced: [{ exposureCompensation: { ideal: i } }] });
        }
      }
    }
  }
  async isTorchAvailable() {
    var e;
    return this.mediaStream ? (await this.waitForCapabilities(), ((e = this.mediaTrackCapabilities) == null ? void 0 : e.torch) === true) : false;
  }
  isMirrorImageEnabled() {
    if (this.selectedCamera && this.activeCamera) {
      let e = this.mirrorImageOverrides.get(this.activeCamera);
      return e != null ? e : this.activeCamera.position === "userFacing";
    }
    return false;
  }
  setMirrorImageEnabled(e, t) {
    this.selectedCamera && (e ? (this.videoElement.classList.add(H.MIRRORED_CLASS_NAME), this.canvas.classList.add(H.MIRRORED_CLASS_NAME)) : (this.videoElement.classList.remove(H.MIRRORED_CLASS_NAME), this.canvas.classList.remove(H.MIRRORED_CLASS_NAME)), t && this.mirrorImageOverrides.set(this.selectedCamera, e));
  }
  addListener(e, t) {
    var n;
    let r2 = (n = this.listeners.get(e)) != null ? n : [];
    r2.includes(t) || this.listeners.set(e, [...r2, t]);
  }
  removeListener(e, t) {
    var u2;
    let n = ((u2 = this.listeners.get(e)) != null ? u2 : []).filter((m) => m !== t);
    this.listeners.set(e, n);
  }
  async playVideo() {
    return new Promise((e) => {
      this._canvas2dContext && this._canvas2dContext.clearRect(0, 0, this.canvas.width, this.canvas.height);
      let t = this.videoElement.play();
      t ? t.then(e).catch(() => {
        e();
      }) : e();
    });
  }
  updateCanvasVideoImage() {
    var e, t;
    ((t = this.selectedCameraSettings) == null ? void 0 : t.isIPhoneProCameraOptimizationEnabled((e = this.selectedCamera) == null ? void 0 : e.position)) === true ? this.canvas2dContext.drawImage(this.videoElement, this.videoElement.videoWidth * 0.15, this.videoElement.videoHeight * 0.15, this.videoElement.videoWidth * 0.7, this.videoElement.videoHeight * 0.7, 0, 0, this.canvas.width, this.canvas.height) : this.canvas2dContext.drawImage(this.videoElement, 0, 0);
  }
  captureImage() {
    var e, t, r2;
    if (((e = this.mediaStream) == null ? void 0 : e.active) != null) {
      if (this.canvasWebGLContext != null) {
        if (!this.isVideoAndContextStateValid() || this.canvasWebGLContext.drawingBufferWidth <= 2 || this.canvasWebGLContext.drawingBufferHeight <= 2)
          return null;
        let n = this.canvasWebGLContext.drawingBufferWidth * this.canvasWebGLContext.drawingBufferHeight * 4;
        if ((this._imageData == null || this._imageData.byteLength !== n) && (this._imageData = new Uint8ClampedArray(n)), this.canvasWebGLContext.texImage2D(this.canvasWebGLContext.TEXTURE_2D, 0, this.canvasWebGLContext.RGBA, this.canvasWebGLContext.RGBA, this.canvasWebGLContext.UNSIGNED_BYTE, this.videoElement), this.canvasWebGLContext.readPixels(0, 0, this.canvasWebGLContext.drawingBufferWidth, this.canvasWebGLContext.drawingBufferHeight, this.canvasWebGLContext.RGBA, this.canvasWebGLContext.UNSIGNED_BYTE, this._imageData), this._imageData[3] !== 255) {
          if (f.log(f.Level.Warn, "Detected incorrect GPU accelerated WebGL image processing, switching to canvas mode"), this._canvasWebGLContext = void 0, this.canvas2dContext != null)
            return this.captureImage();
        } else {
          let u2 = this._imageData;
          return this._imageData = void 0, { data: u2, width: this.canvasWebGLContext.drawingBufferWidth, height: this.canvasWebGLContext.drawingBufferHeight };
        }
      } else if (this.canvas2dContext != null) {
        if (!this.isVideoAndContextStateValid())
          return null;
        ((r2 = this.selectedCameraSettings) == null ? void 0 : r2.isIPhoneProCameraOptimizationEnabled((t = this.selectedCamera) == null ? void 0 : t.position)) === false && this.updateCanvasVideoImage();
        let { width: n } = this.canvas, { height: u2 } = this.canvas;
        return { data: this.canvas2dContext.getImageData(0, 0, n, u2).data, width: n, height: u2 };
      }
    }
    return null;
  }
  isVideoAndContextStateValid() {
    return this.videoElement.readyState === 4 && this.videoElement.videoWidth > 2 && this.videoElement.videoHeight > 2 && this.canvas.width > 2 && this.canvas.height > 2;
  }
  async recoverStreamIfNeeded() {
    var t, r2;
    let e = (t = this.mediaStream) == null ? void 0 : t.getVideoTracks();
    ((r2 = e == null ? void 0 : e[0]) == null ? void 0 : r2.readyState) === "ended" && await this.reinitializeCamera();
  }
  async setupCamerasAndStream() {
    var e, t;
    try {
      let r2;
      this.selectedCamera == null && (r2 = await this.accessInitialCamera());
      let n = await V.getCameras(false, true), u2 = (t = (e = this.mediaStream) == null ? void 0 : e.getVideoTracks()[0]) == null ? void 0 : t.getSettings().deviceId;
      if (this.mediaStream && r2) {
        let m = n.length === 1 ? n[0] : n.find((h2) => h2.deviceId === u2 || h2.label !== "" && h2.label === (r2 == null ? void 0 : r2.label));
        if (m) {
          if (V.adjustCameraFromMediaStream(this.mediaStream, m), B.isDesktopDevice() && (V.mainCameraForPositionOverridesOnDesktop.set(this.cameraPosition, m), V.mainCameraForPositionOverridesOnDesktop.set(m.position, m)), n.length === 1 || V.getMainCameraForPosition(n, this.cameraPosition) === m) {
            f.log(f.Level.Debug, "Initial camera access was correct (main camera), keep camera:", m), this.setSelectedCamera(m), this.updateActiveCameraCurrentResolution(m), await this.recoverStreamIfNeeded();
            return;
          }
          f.log(f.Level.Debug, "Initial camera access was incorrect (not main camera), change camera", ae(Q({}, r2), { deviceId: u2 }));
        } else
          f.log(f.Level.Debug, "Initial camera access was incorrect (unknown camera), change camera", ae(Q({}, r2), { deviceId: u2 }));
      }
      if (this.selectedCamera == null) {
        await this.accessAutoselectedCamera(n);
        return;
      }
      await this.initializeCameraWithSettings(this.selectedCamera, this.selectedCameraSettings);
      return;
    } finally {
      this.cameraSetupPromise = void 0;
    }
  }
  getInitialCameraResolutionConstraint(e) {
    var r2, n;
    if (((r2 = this.activeCameraSettings) == null ? void 0 : r2.isIPhoneProCameraOptimizationEnabled(e.position)) === true)
      return 0;
    let t;
    switch ((n = this.activeCameraSettings) == null ? void 0 : n.preferredResolution) {
      case "uhd4k":
        t = 0;
        break;
      case "fullHd":
        t = 1;
        break;
      case "hd":
      default:
        t = 2;
        break;
    }
    return t;
  }
  async accessAutoselectedCamera(e) {
    e = V.sortCamerasForCameraPosition(e, this.cameraPosition);
    let t = e.shift();
    for (; t; )
      try {
        await this.initializeCameraWithSettings(t, this.selectedCameraSettings);
        return;
      } catch (r2) {
        if (this.setSelectedCamera(), e.length > 0) {
          f.log(f.Level.Warn, "Couldn't access camera:", t, r2), t = e.shift();
          continue;
        }
        throw r2;
      }
    throw new G(H.noCameraErrorParameters);
  }
  async accessInitialCamera() {
    let e = { position: this.cameraPosition, deviceId: "", label: "" };
    try {
      await this.initializeCameraWithSettings(e, this.selectedCameraSettings);
    } catch (t) {
    } finally {
      this.setSelectedCamera();
    }
    return e;
  }
  updateActiveCameraCurrentResolution(e) {
    this.videoElement.videoWidth > 2 && this.videoElement.videoHeight > 2 && (e.currentResolution = { width: this.videoElement.videoWidth, height: this.videoElement.videoHeight }), e.deviceId !== "" && (this.activeCamera = e, this.setMirrorImageEnabled(this.isMirrorImageEnabled(), false));
  }
  postStreamInitialization() {
    window.clearTimeout(this.getCapabilitiesTimeout), this.getCapabilitiesTimeout = window.setTimeout(() => {
      this.storeStreamCapabilities(), this.setupAutofocus();
    }, H.getCapabilitiesTimeoutMs);
  }
  handleVideoResize() {
    if (!(this.videoElement.videoWidth <= 2 || this.videoElement.videoHeight <= 2)) {
      if (this.activeCamera && this.updateActiveCameraCurrentResolution(this.activeCamera), this.canvasWebGLContext != null) {
        if (this.canvas.width === this.videoElement.videoWidth && this.canvas.height === this.videoElement.videoHeight)
          return;
        this.canvas.width = this.videoElement.videoWidth, this.canvas.height = this.videoElement.videoHeight, this.canvasWebGLContext.viewport(0, 0, this.canvasWebGLContext.drawingBufferWidth, this.canvasWebGLContext.drawingBufferHeight);
      } else if (this.canvas2dContext != null) {
        if (this.canvas.width === this.videoElement.videoWidth && this.canvas.height === this.videoElement.videoHeight)
          return;
        this.canvas.width = this.videoElement.videoWidth, this.canvas.height = this.videoElement.videoHeight;
      }
    }
  }
  checkCameraVideoStreamAccessIfVisible() {
    document.visibilityState === "visible" && (f.log(f.Level.Debug, "Page is visible again, waiting for camera video stream start..."), document.removeEventListener("visibilitychange", this.checkCameraVideoStreamAccessIfVisibleListener), this.setCameraAccessTimeout());
  }
  async videoTrackEndedRecovery() {
    if (document.visibilityState !== "visible")
      f.log(f.Level.Debug, "Page is currently not visible, delay camera reinitialization until visible"), document.addEventListener("visibilitychange", this.checkCameraVideoStreamAccessIfVisibleListener);
    else
      try {
        f.log(f.Level.Debug, 'Detected video track "ended" event, try to reinitialize camera'), await this.reinitializeCamera();
      } catch (e) {
      }
  }
  videoTrackMuteRecovery(e) {
    if (this.videoElement.onloadeddata != null) {
      f.log(f.Level.Debug, `Detected video track "${e.type}" event, delay camera video stream access detection`), this.setCameraAccessTimeout();
      return;
    }
    let t = e.type === "mute";
    t !== this.gui.isCameraRecoveryVisible() && (f.log(f.Level.Debug, `Detected video track "${e.type}" event, ${t ? "enable" : "disable"} camera recovery`), this.gui.setCameraRecoveryVisible(t));
  }
  handleWebGLContextLost() {
    f.log(f.Level.Warn, "WebGL context has been lost, restoring..."), this._canvasWebGLContext = void 0, this.canvasWebGLContext ? (this.handleVideoResize(), f.log(f.Level.Warn, "WebGL context restored")) : f.log(f.Level.Error, "WebGL context restore failed");
  }
  async triggerManualFocusForContinuous() {
    var r2;
    if (!this.mediaStream)
      return;
    this.manualToAutofocusResumeTimeout = window.setTimeout(async () => {
      await this.triggerFocusMode("continuous");
    }, H.manualToAutofocusResumeTimeoutMs);
    let e = true, t = this.mediaStream.getVideoTracks();
    t.length > 0 && typeof t[0].getConstraints == "function" && (e = ((r2 = t[0].getConstraints().advanced) == null ? void 0 : r2.some((n) => n.focusMode === "manual")) === true), e ? (await this.triggerFocusMode("continuous"), this.manualFocusWaitTimeout = window.setTimeout(async () => {
      await this.triggerFocusMode("manual");
    }, H.manualFocusWaitTimeoutMs)) : await this.triggerFocusMode("manual");
  }
  async triggerManualFocusForSingleShot() {
    window.clearInterval(this.autofocusInterval), this.manualToAutofocusResumeTimeout = window.setTimeout(() => {
      this.autofocusInterval = window.setInterval(this.triggerAutoFocus.bind(this), H.autofocusIntervalMs);
    }, H.manualToAutofocusResumeTimeoutMs);
    try {
      await this.triggerFocusMode("single-shot");
    } catch (e) {
    }
  }
  async triggerManualFocus(e) {
    if (e) {
      if (e.preventDefault(), e.type === "touchend" && e.touches.length > 0)
        return;
      if (this.pinchToZoomDistance != null) {
        this.pinchToZoomDistance = void 0;
        return;
      }
    }
    if (window.clearTimeout(this.manualFocusWaitTimeout), window.clearTimeout(this.manualToAutofocusResumeTimeout), this.mediaStream && this.mediaTrackCapabilities) {
      let t = this.mediaTrackCapabilities.focusMode;
      Array.isArray(t) && t.includes("single-shot") && (t.includes("continuous") && t.includes("manual") ? await this.triggerManualFocusForContinuous() : t.includes("continuous") || await this.triggerManualFocusForSingleShot());
    }
  }
  triggerZoomStart(e) {
    var t, r2, n, u2;
    if ((e == null ? void 0 : e.touches.length) === 2 && (e.preventDefault(), this.pinchToZoomDistance = Math.hypot((e.touches[1].screenX - e.touches[0].screenX) / screen.width, (e.touches[1].screenY - e.touches[0].screenY) / screen.height), this.mediaStream && ((t = this.mediaTrackCapabilities) == null ? void 0 : t.zoom))) {
      let m = this.mediaStream.getVideoTracks();
      if (m.length > 0 && typeof m[0].getConstraints == "function") {
        this.pinchToZoomInitialZoom = (r2 = this.mediaTrackCapabilities.zoom.min) != null ? r2 : 1;
        let h2 = m[0].getConstraints();
        if (h2.advanced) {
          let v2 = (n = h2.advanced.find((b) => "zoom" in b)) == null ? void 0 : n.zoom;
          v2 != null && (this.pinchToZoomInitialZoom = typeof v2 == "number" ? v2 : (u2 = v2.ideal) != null ? u2 : 1);
        }
      }
    }
  }
  async triggerZoomMove(e) {
    this.pinchToZoomDistance == null || (e == null ? void 0 : e.touches.length) !== 2 || e.preventDefault();
  }
  storeStreamCapabilities() {
    var e;
    if (this.mediaStream) {
      let t = this.mediaStream.getVideoTracks();
      t.length > 0 && typeof t[0].getCapabilities == "function" && (this.mediaTrackCapabilities = t[0].getCapabilities()), this.mediaTrackCapabilitiesPromiseResolver && this.mediaTrackCapabilitiesPromiseResolver();
    }
    this.activeCamera && this.reportCameraProperties(this.activeCamera.deviceId, this.activeCamera.position, ((e = this.mediaTrackCapabilities) == null ? void 0 : e.focusMode) == null || this.mediaTrackCapabilities.focusMode.includes("continuous"));
  }
  reportCameraProperties(e, t, r2 = true) {
    this.emit("cameraProperties", { deviceId: e, isFrontFacing: t === "userFacing", hasAutofocus: r2 });
  }
  setupAutofocus() {
    if (window.clearTimeout(this.manualFocusWaitTimeout), window.clearTimeout(this.manualToAutofocusResumeTimeout), this.mediaStream && this.mediaTrackCapabilities) {
      let e = this.mediaTrackCapabilities.focusMode;
      Array.isArray(e) && !e.includes("continuous") && e.includes("single-shot") && (window.clearInterval(this.autofocusInterval), this.autofocusInterval = window.setInterval(this.triggerAutoFocus.bind(this), H.autofocusIntervalMs));
    }
  }
  async triggerAutoFocus() {
    await this.triggerFocusMode("single-shot");
  }
  async triggerFocusMode(e) {
    if (this.mediaStream) {
      let t = this.mediaStream.getVideoTracks();
      if (t.length > 0 && typeof t[0].applyConstraints == "function")
        try {
          await t[0].applyConstraints({ advanced: [{ focusMode: e }] });
        } catch (r2) {
        }
    }
  }
  enableTapToFocusListeners() {
    for (let e of ["touchend", "mousedown"])
      this.videoElement.addEventListener(e, this.triggerManualFocusListener);
  }
  enablePinchToZoomListeners() {
    this.videoElement.addEventListener("touchstart", this.triggerZoomStartListener), this.videoElement.addEventListener("touchmove", this.triggerZoomMoveListener);
  }
  disableTapToFocusListeners() {
    for (let e of ["touchend", "mousedown"])
      this.videoElement.removeEventListener(e, this.triggerManualFocusListener);
  }
  disablePinchToZoomListeners() {
    this.videoElement.removeEventListener("touchstart", this.triggerZoomStartListener), this.videoElement.removeEventListener("touchmove", this.triggerZoomMoveListener);
  }
  async initializeCameraAndCheckUpdatedSettings(e) {
    var t, r2, n, u2, m;
    try {
      if (await this.initializeCameraForResolution(e), this.selectedCameraSettings !== this.activeCameraSettings && (this.selectedCameraSettings == null || this.activeCameraSettings == null || Object.keys(this.selectedCameraSettings).some((o) => {
        var c, d;
        return ((c = this.selectedCameraSettings) == null ? void 0 : c[o]) !== ((d = this.activeCameraSettings) == null ? void 0 : d[o]);
      }))) {
        this.activeCameraSettings = this.selectedCameraSettings, await this.initializeCameraAndCheckUpdatedSettings(e);
        return;
      }
      this.activeCameraSettings && this.activeCameraSettings.zoomFactor > 1 && await this.setZoom(this.activeCameraSettings.zoomFactor);
      let h2 = (t = this.activeCameraSettings) == null ? void 0 : t.getProperty("minFrameRate"), v2 = (r2 = this.activeCameraSettings) == null ? void 0 : r2.getProperty("maxFrameRate");
      (h2 != null || v2 != null) && await this.setFrameRate({ min: h2, max: v2 });
      let b = (n = this.activeCameraSettings) == null ? void 0 : n.getProperty("manualLensPosition");
      b != null && await this.setFocus(b);
      let i = (u2 = this.activeCameraSettings) == null ? void 0 : u2.getProperty("exposureTargetBias"), a = (m = this.activeCameraSettings) == null ? void 0 : m.getProperty("exposureDuration");
      (i != null || a != null) && await this.setExposure({ compensation: i, time: a });
    } finally {
      this.cameraInitializationPromise = void 0;
    }
  }
  async handleCameraInitializationError(e, t, r2) {
    if (!["OverconstrainedError", "NotReadableError"].includes(r2.name) || r2.name === "NotReadableError" && t === 4)
      throw f.log(f.Level.Debug, "Camera video stream access failure (unrecoverable error)", e, r2), r2.name !== "NotAllowedError" && V.markCameraAsInaccessible(e), r2;
    if (r2.name === "OverconstrainedError" && t === 4) {
      if (e.deviceId === "")
        throw f.log(f.Level.Warn, "Camera video stream access failure (no camera with such type error)", e, r2), r2;
      f.log(f.Level.Warn, "Detected non-existent deviceId error, attempt to find and reaccess updated camera", e, r2);
      let n = e.deviceId;
      if (await V.getCameras(true), n === e.deviceId)
        throw f.log(f.Level.Warn, "Camera video stream access failure (updated camera not found after non-existent deviceId error)", e, r2), V.markCameraAsInaccessible(e), r2;
      return f.log(f.Level.Warn, "Updated camera found (recovered from non-existent deviceId error), attempt to access it", e), this.initializeCameraForResolution(e);
    }
    return this.initializeCameraForResolution(e, t + 1);
  }
  async updateStreamForResolution(e, t) {
    var r2;
    if (this.mediaStream == null)
      await this.initializeCameraForResolution(e, t);
    else
      try {
        f.log(f.Level.Debug, "Setting new resolution for active camera video stream..."), await this.mediaStream.getVideoTracks()[0].applyConstraints(V.getUserMediaVideoParameters(t, (r2 = this.activeCameraSettings) == null ? void 0 : r2.getProperty("preferredAspectRatio"))), await new Promise((u2) => {
          this.videoElement.addEventListener("timeupdate", () => {
            u2();
          }, { once: true });
        });
        let n = this.mediaStream.getVideoTracks()[0].getSettings();
        f.log(f.Level.Debug, "New active camera video stream resolution set", { width: n.width, height: n.height });
      } catch (n) {
        if (t === 4)
          throw n;
        await this.updateStreamForResolution(e, t + 1);
      }
  }
  async initializeStreamForResolution(e, t) {
    var r2;
    await this.stopStream();
    try {
      let n = await V.accessCameraStream(e, t, (r2 = this.activeCameraSettings) == null ? void 0 : r2.getProperty("preferredAspectRatio"));
      if (f.log(f.Level.Debug, "Camera accessed, waiting for camera video stream start..."), typeof n.getVideoTracks()[0].getSettings == "function") {
        let u2 = n.getVideoTracks()[0].getSettings();
        if (u2.width != null && u2.height != null && (u2.width === 2 || u2.height === 2)) {
          if (f.log(f.Level.Debug, "Camera video stream access failure (invalid video metadata):", e), t === 4)
            throw new G(H.notReadableErrorParameters);
          return await this.stopStream(), this.initializeStreamForResolution(e, t + 1);
        }
      }
      this.mediaStream = n;
      for (let u2 of this.mediaStream.getVideoTracks())
        u2.addEventListener("ended", this.videoTrackEndedListener), u2.addEventListener("mute", this.videoTrackMuteListener), u2.addEventListener("unmute", this.videoTrackMuteListener);
      try {
        await this.setupCameraStreamVideo(e, n);
      } catch (u2) {
        if (t === 4)
          throw u2;
        return this.initializeStreamForResolution(e, t + 1);
      }
    } catch (n) {
      return this.handleCameraInitializationError(e, t, n);
    }
  }
  async initializeCameraForResolution(e, t) {
    var n;
    this.gui.setCameraRecoveryVisible(false);
    let r2 = t != null ? t : this.getInitialCameraResolutionConstraint(e);
    await (this.mediaStream != null && e.deviceId !== "" && ((n = this.activeCamera) == null ? void 0 : n.deviceId) === e.deviceId ? this.updateStreamForResolution(e, r2) : this.initializeStreamForResolution(e, r2));
  }
  setCameraAccessTimeout() {
    window.clearTimeout(this.cameraAccessTimeout), this.cameraAccessTimeout = window.setTimeout(async () => {
      var e;
      document.visibilityState !== "visible" ? (f.log(f.Level.Debug, "Page is currently not visible, delay camera video stream access detection"), document.addEventListener("visibilitychange", this.checkCameraVideoStreamAccessIfVisibleListener)) : (await this.stopStream(true), (e = this.cameraAccessRejectCallback) == null || e.call(this, new G(H.notReadableErrorParameters)));
    }, H.cameraAccessTimeoutMs);
  }
  async checkCameraAccess(e) {
    return new Promise((t, r2) => {
      this.cameraAccessRejectCallback = (n) => {
        f.log(f.Level.Debug, "Camera video stream access failure (video data load timeout):", e), this.gui.setCameraRecoveryVisible(true), r2(n);
      }, this.setCameraAccessTimeout();
    });
  }
  async checkVideoMetadata(e) {
    return new Promise((t, r2) => {
      this.videoElement.onloadeddata = () => {
        if (this.videoElement.onloadeddata = null, window.clearTimeout(this.cameraAccessTimeout), this.videoElement.videoWidth > 2 && this.videoElement.videoHeight > 2 && this.videoElement.currentTime > 0) {
          this.updateActiveCameraCurrentResolution(e), f.log(f.Level.Debug, "Camera video stream access success:", e), t();
          return;
        }
        let n = performance.now();
        window.clearInterval(this.videoMetadataCheckInterval), this.videoMetadataCheckInterval = window.setInterval(async () => {
          if (this.videoElement.videoWidth <= 2 || this.videoElement.videoHeight <= 2 || this.videoElement.currentTime === 0) {
            if (performance.now() - n > H.videoMetadataCheckTimeoutMs) {
              f.log(f.Level.Warn, "Camera video stream access failure (valid video metadata timeout):", e), window.clearInterval(this.videoMetadataCheckInterval), await this.stopStream(true), r2(new G(H.notReadableErrorParameters));
              return;
            }
            return;
          }
          window.clearInterval(this.videoMetadataCheckInterval), this.updateActiveCameraCurrentResolution(e), f.log(f.Level.Debug, "Camera video stream access success:", e), t();
        }, H.videoMetadataCheckIntervalMs);
      };
    });
  }
  async setupCameraStreamVideo(e, t) {
    this.videoElement.addEventListener("loadedmetadata", this.postStreamInitializationListener), this.videoElement.addEventListener("resize", this.videoResizeListener), this.tapToFocusEnabled && this.enableTapToFocusListeners(), this.pinchToZoomEnabled && this.enablePinchToZoomListeners();
    let r2 = Promise.race([this.checkCameraAccess(e), this.checkVideoMetadata(e), new Promise((n) => {
      this.abortedCameraInitializationResolveCallback = n;
    })]);
    return this.videoElement.srcObject = t, this.videoElement.load(), await this.playVideo(), this.handleVideoResize(), this.reportCameraProperties(e.deviceId, e.position), r2;
  }
  get canvas2dContext() {
    return this._canvas2dContext || (this._canvas2dContext = this.canvas.getContext("2d", { willReadFrequently: true }), this.handleVideoResize()), this._canvas2dContext;
  }
  get canvasWebGLContext() {
    var e, t, r2;
    if (((t = this.selectedCameraSettings) == null ? void 0 : t.isIPhoneProCameraOptimizationEnabled((e = this.selectedCamera) == null ? void 0 : e.position)) === false && !this._canvas2dContext && !this._canvasWebGLContext) {
      let n = (r2 = this.canvas.getContext("webgl", { alpha: false, antialias: false })) != null ? r2 : this.canvas.getContext("experimental-webgl", { alpha: false, antialias: false });
      if (n != null) {
        let u2 = n.createTexture();
        n.bindTexture(n.TEXTURE_2D, u2);
        let m = n.createFramebuffer();
        n.bindFramebuffer(n.FRAMEBUFFER, m), n.framebufferTexture2D(n.FRAMEBUFFER, n.COLOR_ATTACHMENT0, n.TEXTURE_2D, u2, 0), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_S, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_WRAP_T, n.CLAMP_TO_EDGE), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MIN_FILTER, n.NEAREST), n.texParameteri(n.TEXTURE_2D, n.TEXTURE_MAG_FILTER, n.NEAREST), this._canvasWebGLContext = n, this.handleVideoResize();
      }
    }
    return this._canvasWebGLContext;
  }
  emit(e, t) {
    if (this.listeners.has(e))
      for (let r2 of this.listeners.get(e))
        r2(t);
  }
};
var k = H;
l(k, "cameraAccessTimeoutMs", 4e3), l(k, "videoMetadataCheckTimeoutMs", 4e3), l(k, "videoMetadataCheckIntervalMs", 50), l(k, "getCapabilitiesTimeoutMs", 500), l(k, "autofocusIntervalMs", 1500), l(k, "manualToAutofocusResumeTimeoutMs", 5e3), l(k, "manualFocusWaitTimeoutMs", 400), l(k, "noCameraErrorParameters", { name: "NoCameraAvailableError", message: "No camera available" }), l(k, "notReadableErrorParameters", { name: "NotReadableError", message: "Could not initialize camera correctly" }), l(k, "MIRRORED_CLASS_NAME", ne.MIRRORED_CLASS_NAME), l(k, "_instance");
var st;
((e) => {
  async function s(t, r2) {
    return V.getCameras(t != null ? t : false, r2 != null ? r2 : false);
  }
  e.getCameras = s;
})(st || (st = {}));
var ve = class {
  constructor(e) {
    l(this, "label");
    l(this, "deviceId", "");
    l(this, "position");
    l(this, "currentResolution");
    l(this, "cameraManager");
    l(this, "type", "camera");
    l(this, "webGLContextLostListener");
    l(this, "_currentState", "off");
    l(this, "settings", new me());
    l(this, "_desiredTorchState", "off");
    l(this, "_desiredState", "off");
    l(this, "listeners", []);
    l(this, "_context", null);
    l(this, "_desiredMirrorImageEnabled");
    l(this, "_lastCaptureRequestAnimationFrame");
    l(this, "_lastCanvasVideoPreviewAnimationFrame");
    this.cameraManager = e != null ? e : k.instance();
  }
  static get default() {
    let e = new ve();
    return e.position = "worldFacing", e;
  }
  static atPosition(e) {
    if (D.Camera.availablePositions.includes(e)) {
      let t = new ve();
      return t.position = e, t;
    }
    return f.log(f.Level.Warn, `invalid CameraPosition: "${e}"`), null;
  }
  get desiredState() {
    return this._desiredState;
  }
  async switchToDesiredState(e) {
    if (e === "on") {
      if (this.currentState === "on" || this.currentState === "starting")
        return;
    } else if (this.currentState === "off" || this.currentState === "stopping")
      return;
    if (this._desiredState = e, e === "on") {
      this.currentState = "starting";
      try {
        await this.setupCamera(), this.currentState = "on";
      } catch (t) {
        throw f.log(f.Level.Error, t), this.currentState = "off", t;
      }
    } else
      this.currentState = "stopping", await this.cameraManager.stopStream(), this.currentState = "off", await this.setDesiredTorchState("off");
  }
  getDesiredTorchState() {
    return this._desiredTorchState;
  }
  async setDesiredTorchState(e) {
    this._desiredTorchState = e, await this.cameraManager.setTorchEnabled(this._desiredTorchState === "on"), await this.notifyContext({ type: "torchState", newValue: this._desiredTorchState });
  }
  async isTorchAvailable() {
    return this.cameraManager.isTorchAvailable();
  }
  addListener(e) {
    e != null && (this.listeners.includes(e) || this.listeners.push(e));
  }
  removeListener(e) {
    e != null && (!this.listeners.includes(e) || this.listeners.splice(this.listeners.indexOf(e), 1));
  }
  async applySettings(e) {
    if (this.settings = new me(e), this.currentState === "on") {
      let t = this.cameraManager.activeCameraSettings;
      (t == null ? void 0 : t.preferredResolution) !== this.settings.preferredResolution && await this.cameraManager.applyCameraSettings(this.settings), await this.cameraManager.setZoom(this.settings.zoomFactor);
      let r2 = this.settings.getProperty("minFrameRate"), n = this.settings.getProperty("maxFrameRate");
      (r2 != null || n != null) && await this.cameraManager.setFrameRate({ min: r2, max: n });
      let u2 = this.settings.getProperty("manualLensPosition");
      u2 != null && await this.cameraManager.setFocus(u2);
      let m = this.settings.getProperty("exposureTargetBias"), h2 = this.settings.getProperty("exposureDuration");
      (m != null || h2 != null) && await this.cameraManager.setExposure({ compensation: m, time: h2 });
    }
    return this.notifyContext({ type: "cameraSettings", newValue: this.settings });
  }
  toJSONObject() {
    return { type: this.type, position: this.position, settings: this.settings.toJSONObject(), desiredState: this.desiredState, desiredTorchState: this._desiredTorchState };
  }
  getMirrorImageEnabled() {
    var e;
    return (e = this._desiredMirrorImageEnabled) != null ? e : this.cameraManager.isMirrorImageEnabled();
  }
  async setMirrorImageEnabled(e) {
    this._desiredMirrorImageEnabled = e, this.cameraManager.setMirrorImageEnabled(e, true), this.context && await this.context.setFrameSource(this);
  }
  get context() {
    return this._context;
  }
  set context(e) {
    this._context = e, this._context && this.currentState === "on" && this.startSendingCapturesToWorker();
  }
  async setupCamera() {
    if (this.cameraManager.setSelectedCameraSettings(this.settings), this.deviceId !== "") {
      let t = (await st.getCameras()).find((r2) => r2.deviceId === this.deviceId);
      t && (this.cameraManager.setInitialCameraPosition(t.position), this.cameraManager.setSelectedCamera(t));
    } else
      this.cameraManager.setSelectedCamera(), this.cameraManager.setInitialCameraPosition(this.position);
    await this.cameraManager.setupCameras(), typeof this._desiredMirrorImageEnabled == "boolean" ? this.cameraManager.setMirrorImageEnabled(this._desiredMirrorImageEnabled, true) : this.cameraManager.setMirrorImageEnabled(this.cameraManager.isMirrorImageEnabled(), false), this.context && await this.context.setFrameSource(this), this.cameraManager.activeCamera && (this.label = this.cameraManager.activeCamera.label, this.position = this.cameraManager.activeCamera.position, this.deviceId = this.cameraManager.activeCamera.deviceId, this.currentResolution = this.cameraManager.activeCamera.currentResolution);
  }
  set currentState(e) {
    e !== this._currentState && (this._currentState = e, this.notifyListeners(), this.notifyContext({ type: "frameSourceState", newValue: e }).then(() => {
      e === "on" && this.startSendingCapturesToWorker();
    }).catch(() => {
      f.log(f.Level.Warn, "Error while notifying context about new state of Camera");
    }));
  }
  get currentState() {
    return this._currentState;
  }
  getCurrentState() {
    return this._currentState;
  }
  async notifyContext(e) {
    if (this.context)
      return this.context.update([e]);
  }
  notifyListeners() {
    for (let e of this.listeners)
      e.didChangeState && e.didChangeState(this, this.currentState);
  }
  startSendingCapturesToWorker() {
    this._lastCanvasVideoPreviewAnimationFrame != null && cancelAnimationFrame(this._lastCanvasVideoPreviewAnimationFrame), this._lastCaptureRequestAnimationFrame != null && cancelAnimationFrame(this._lastCaptureRequestAnimationFrame);
    let e, t;
    function r2() {
      this.currentState === "on" && this.context && (this.cameraManager.updateCanvasVideoImage(), this._lastCanvasVideoPreviewAnimationFrame = requestAnimationFrame(e));
    }
    async function n() {
      if (this.currentState === "on" && this.context) {
        if (!this.context.hasEnabledMode()) {
          this._lastCaptureRequestAnimationFrame = requestAnimationFrame(t);
          return;
        }
        let u2;
        try {
          u2 = this.cameraManager.captureImage();
        } catch (m) {
          f.log(f.Level.Warn, m == null ? void 0 : m.message);
        }
        if (u2)
          try {
            this.cameraManager.imageData = (await this.context.sendFrameToProcessor(u2)).data;
          } catch (m) {
          }
        this._lastCaptureRequestAnimationFrame = requestAnimationFrame(t);
      }
    }
    e = r2.bind(this), t = n.bind(this), this.settings.isIPhoneProCameraOptimizationEnabled(this.position) && e(), t();
  }
};
var he = class {
  constructor() {
    l(this, "_message");
    l(this, "_code");
    l(this, "_isValid");
  }
  static fromJSON(e) {
    let t = new he();
    return t._code = e.code, t._message = e.message, t._isValid = e.isValid, t;
  }
  get message() {
    return this._message;
  }
  get code() {
    return this._code;
  }
  get isValid() {
    return this._isValid;
  }
};
var Qt = ((r2) => (r2.None = "None", r2.X = "X", r2.Y = "Y", r2))(Qt || {});
var lt = class {
  constructor() {
  }
  setProperty(e, t) {
    this[e] = t;
  }
  getProperty(e) {
    return this[e];
  }
  toJSONObject() {
    return Object.keys(this).reduce((e, t) => (e[t] = this.getProperty(t), e), {});
  }
};
var Bi;
var Vi;
var Ji;
var Je = class {
  constructor(e, t) {
    l(this, "framework", "web");
    l(this, "runtimeEnvironment", { deviceOS: (Bi = B.userAgentInfo.getOS().name) != null ? Bi : "", browser: (Vi = B.userAgentInfo.getBrowser().name) != null ? Vi : "", browserVersion: (Ji = B.userAgentInfo.getBrowser().version) != null ? Ji : "", get deviceModelName() {
      let { model: e2, vendor: t2 } = B.userAgentInfo.getDevice();
      return [t2, e2].filter(Boolean).join(" ");
    } });
    l(this, "settings", new lt());
    l(this, "licenseKey");
    l(this, "deviceName");
    l(this, "_frameSource", null);
    l(this, "_view", null);
    l(this, "modes", []);
    l(this, "components", []);
    l(this, "listeners", []);
    l(this, "cameraPropertiesReportListener", this.reportCameraProperties.bind(this));
    l(this, "cameraAccessErrorListener", this.onCameraAccessError.bind(this));
    l(this, "onWorkerMessageListener", this.onWorkerMessage.bind(this));
    l(this, "dataCaptureInstance");
    l(this, "delayedRegistration");
    l(this, "highEndBlurryRecognition");
    l(this, "_frameHandlers", []);
    var r2, n, u2, m;
    this.licenseKey = e, this.deviceName = (r2 = t.deviceName) != null ? r2 : "", this.dataCaptureInstance = (n = t.dataCaptureInstance) != null ? n : be, this.delayedRegistration = (u2 = t.delayedRegistration) != null ? u2 : false, this.highEndBlurryRecognition = (m = t.highEndBlurryRecognition) != null ? m : false;
  }
  get frameSource() {
    return this._frameSource;
  }
  static async create() {
    return Je.createWithOptions({});
  }
  static async createWithOptions(e) {
    var r2;
    let t = new Je((r2 = e.licenseKey) != null ? r2 : qt, { deviceName: e.deviceName });
    return e.settings != null && await t.applySettings(e.settings), await t.initialize(), t;
  }
  async setFrameSource(e) {
    let t = e !== this._frameSource;
    if (this._frameSource !== null && (this._frameSource.context = null), this._frameSource = e != null ? e : null, e && (e.context = this, await this.workerCommand("setFrameSource", { mirrorAxis: this.getMirrorAxisForFrameSource(e) })), await this.update([{ type: "frameSourceState", newValue: this.frameSource }]), t)
      for (let r2 of this.listeners)
        r2.didChangeFrameSource && r2.didChangeFrameSource(this, this._frameSource);
  }
  addListener(e) {
    this.listeners.includes(e) || this.listeners.push(e);
  }
  removeListener(e) {
    !this.listeners.includes(e) || this.listeners.splice(this.listeners.indexOf(e), 1);
  }
  async addMode(e) {
    this.modes.includes(e) || (this.modes.push(e), e.attachedToContext(this), await this.update());
  }
  async removeMode(e) {
    this.modes.includes(e) && (this.modes.splice(this.modes.indexOf(e), 1), e.detachedFromContext(), await this.update());
  }
  async removeAllModes() {
    for (; this.modes.length > 0; )
      await this.removeMode(this.modes[0]);
  }
  async dispose() {
    k.instance().removeListener("cameraProperties", this.cameraPropertiesReportListener), k.instance().removeListener("cameraAccessError", this.cameraAccessErrorListener), await this.workerCommand("dispose", {});
  }
  async applySettings(e) {
    this.settings = e, await this.update();
  }
  toJSONObject() {
    var e, t;
    return ae(Q({ licenseKey: this.licenseKey, framework: this.framework, deviceName: this.deviceName }, this.runtimeEnvironment), { modes: this.modes.map((r2) => r2.toJSONObject()), components: this.components.map((r2) => r2.toJSONObject()), frameSource: this.frameSource ? this.frameSource.toJSONObject() : null, settings: this.settings.toJSONObject(), view: (t = (e = this._view) == null ? void 0 : e.toJSONObject()) != null ? t : null });
  }
  getView() {
    return this._view;
  }
  async setView(e) {
    return this._view = e, this.update();
  }
  async initialize(e = true) {
    await this.workerCommand("createContext", { context: this.toJSONObject(), deviceId: Je.deviceID, domain: window.location.hostname, delayedRegistration: this.delayedRegistration, highEndBlurryRecognition: this.highEndBlurryRecognition }), this.subscribeToWorkerMessages(this.onWorkerMessageListener), e && this.subscribeToCameraManagerEvents();
  }
  get workerCommand() {
    return this.dataCaptureInstance.workerCommand.bind(this.dataCaptureInstance);
  }
  async requestFrameData(e) {
    return this.workerCommand("requestFrameData", { frameId: e });
  }
  async sendFrameToProcessor(e) {
    if (this._frameHandlers.length === 0)
      return this.sendFrameToSDC(e);
    let t = [];
    for (let r2 of this._frameHandlers)
      t.push(r2(e));
    return await Promise.all(t), this.sendFrameToSDC(e);
  }
  async sendFrameToSDC(e) {
    return this.workerCommand("processFrame", e, [e.data.buffer]);
  }
  registerFrameHandler(e) {
    this._frameHandlers.includes(e) || this._frameHandlers.push(e);
  }
  unregisterFrameHandler(e) {
    this._frameHandlers.includes(e) && this._frameHandlers.splice(this._frameHandlers.indexOf(e), 1);
  }
  onWorkerMessage(e) {
    if (e.type === "contextDidChangeStatus") {
      e.payload.isValid || f.log(f.Level.Error, e.payload);
      for (let t of this.listeners)
        t.didChangeStatus && t.didChangeStatus(this, he.fromJSON(e.payload));
    }
    if (e.type === "didStartObservingContext")
      for (let t of this.listeners)
        t.didStartObservingContext && t.didStartObservingContext(this);
  }
  subscribeToCameraManagerEvents() {
    k.instance().addListener("cameraProperties", this.cameraPropertiesReportListener), k.instance().addListener("cameraAccessError", this.cameraAccessErrorListener);
  }
  async reportCameraProperties(e) {
    return this.workerCommand("reportCameraProperties", e);
  }
  onCameraAccessError(e) {
    for (let t of this.listeners)
      t.didChangeStatus && t.didChangeStatus(this, he.fromJSON({ code: 33794, isValid: true, message: e.toString() }));
  }
  async update(e = []) {
    var t, r2;
    await this.updateContext();
    for (let n of e)
      n.type === "frameSourceState" ? await ((t = this._view) == null ? void 0 : t.onFrameSourceChange(this.frameSource)) : n.type === "singleImageModeUploaderSettings" && ((r2 = this._view) == null || r2.onSingleImageUploaderSettingsChange(n.newValue));
  }
  async updateContext() {
    await this.workerCommand("updateContext", Q({ context: this.toJSONObject() }, this.getViewWidthAndHeight())).catch((e) => {
      f.log(f.Level.Warn, "Error while updating context:", e);
    });
  }
  getViewWidthAndHeight() {
    return this._view != null ? { view: { width: this._view.width, height: this._view.height } } : { view: null };
  }
  getMirrorAxisForFrameSource(e) {
    let t = "None";
    return e.type === "camera" && e.getMirrorImageEnabled() && (t = "Y"), t;
  }
  async addComponent(e) {
    if (!this.components.includes(e))
      return this.components.push(e), e._context = this, this.update();
  }
  subscribeToWorkerMessages(e) {
    this.dataCaptureInstance.addWorkerListener(e);
  }
  unsubscribeToWorkerMessages(e) {
    this.dataCaptureInstance.removeWorkerListener(e);
  }
  hasEnabledMode() {
    return this.modes.some((e) => e.isEnabled());
  }
};
var $t = Je;
l($t, "deviceID", B.getDeviceId());
var ct;
((e) => {
  function s() {
    let t = "6.17.1";
    if (t == null)
      throw new G({ name: "Invalid library version", message: "Library version is not defined or empty." });
    return t;
  }
  e.sdkVersion = s;
})(ct || (ct = {}));
var se = [];
var Hi = function() {
  return se.some(function(s) {
    return s.activeTargets.length > 0;
  });
};
var Gi = function() {
  return se.some(function(s) {
    return s.skippedTargets.length > 0;
  });
};
var Yi = "ResizeObserver loop completed with undelivered notifications.";
var Qi = function() {
  var s;
  typeof ErrorEvent == "function" ? s = new ErrorEvent("error", { message: Yi }) : (s = document.createEvent("Event"), s.initEvent("error", false, false), s.message = Yi), window.dispatchEvent(s);
};
var Me;
(function(s) {
  s.BORDER_BOX = "border-box", s.CONTENT_BOX = "content-box", s.DEVICE_PIXEL_CONTENT_BOX = "device-pixel-content-box";
})(Me || (Me = {}));
var le = function(s) {
  return Object.freeze(s);
};
var Zt = function() {
  function s(e, t) {
    this.inlineSize = e, this.blockSize = t, le(this);
  }
  return s;
}();
var Xt = function() {
  function s(e, t, r2, n) {
    return this.x = e, this.y = t, this.width = r2, this.height = n, this.top = this.y, this.left = this.x, this.bottom = this.top + this.height, this.right = this.left + this.width, le(this);
  }
  return s.prototype.toJSON = function() {
    var e = this, t = e.x, r2 = e.y, n = e.top, u2 = e.right, m = e.bottom, h2 = e.left, v2 = e.width, b = e.height;
    return { x: t, y: r2, top: n, right: u2, bottom: m, left: h2, width: v2, height: b };
  }, s.fromRect = function(e) {
    return new s(e.x, e.y, e.width, e.height);
  }, s;
}();
var He = function(s) {
  return s instanceof SVGElement && "getBBox" in s;
};
var ut = function(s) {
  if (He(s)) {
    var e = s.getBBox(), t = e.width, r2 = e.height;
    return !t && !r2;
  }
  var n = s, u2 = n.offsetWidth, m = n.offsetHeight;
  return !(u2 || m || s.getClientRects().length);
};
var Kt = function(s) {
  var e;
  if (s instanceof Element)
    return true;
  var t = (e = s == null ? void 0 : s.ownerDocument) === null || e === void 0 ? void 0 : e.defaultView;
  return !!(t && s instanceof t.Element);
};
var $i = function(s) {
  switch (s.tagName) {
    case "INPUT":
      if (s.type !== "image")
        break;
    case "VIDEO":
    case "AUDIO":
    case "EMBED":
    case "OBJECT":
    case "CANVAS":
    case "IFRAME":
    case "IMG":
      return true;
  }
  return false;
};
var _e = typeof window < "u" ? window : {};
var dt = /* @__PURE__ */ new WeakMap();
var qi = /auto|scroll/;
var ia = /^tb|vertical/;
var ra = /msie|trident/i.test(_e.navigator && _e.navigator.userAgent);
var pe = function(s) {
  return parseFloat(s || "0");
};
var Te = function(s, e, t) {
  return s === void 0 && (s = 0), e === void 0 && (e = 0), t === void 0 && (t = false), new Zt((t ? e : s) || 0, (t ? s : e) || 0);
};
var Zi = le({ devicePixelContentBoxSize: Te(), borderBoxSize: Te(), contentBoxSize: Te(), contentRect: new Xt(0, 0, 0, 0) });
var ei = function(s, e) {
  if (e === void 0 && (e = false), dt.has(s) && !e)
    return dt.get(s);
  if (ut(s))
    return dt.set(s, Zi), Zi;
  var t = getComputedStyle(s), r2 = He(s) && s.ownerSVGElement && s.getBBox(), n = !ra && t.boxSizing === "border-box", u2 = ia.test(t.writingMode || ""), m = !r2 && qi.test(t.overflowY || ""), h2 = !r2 && qi.test(t.overflowX || ""), v2 = r2 ? 0 : pe(t.paddingTop), b = r2 ? 0 : pe(t.paddingRight), i = r2 ? 0 : pe(t.paddingBottom), a = r2 ? 0 : pe(t.paddingLeft), o = r2 ? 0 : pe(t.borderTopWidth), c = r2 ? 0 : pe(t.borderRightWidth), d = r2 ? 0 : pe(t.borderBottomWidth), g = r2 ? 0 : pe(t.borderLeftWidth), p = a + b, S2 = v2 + i, C = g + c, _ = o + d, j2 = h2 ? s.offsetHeight - _ - s.clientHeight : 0, $2 = m ? s.offsetWidth - C - s.clientWidth : 0, Z2 = n ? p + C : 0, P2 = n ? S2 + _ : 0, I2 = r2 ? r2.width : pe(t.width) - Z2 - $2, X = r2 ? r2.height : pe(t.height) - P2 - j2, ee = I2 + p + $2 + C, K2 = X + S2 + j2 + _, re = le({ devicePixelContentBoxSize: Te(Math.round(I2 * devicePixelRatio), Math.round(X * devicePixelRatio), u2), borderBoxSize: Te(ee, K2, u2), contentBoxSize: Te(I2, X, u2), contentRect: new Xt(a, v2, I2, X) });
  return dt.set(s, re), re;
};
var mt = function(s, e, t) {
  var r2 = ei(s, t), n = r2.borderBoxSize, u2 = r2.contentBoxSize, m = r2.devicePixelContentBoxSize;
  switch (e) {
    case Me.DEVICE_PIXEL_CONTENT_BOX:
      return m;
    case Me.BORDER_BOX:
      return n;
    default:
      return u2;
  }
};
var ti = function() {
  function s(e) {
    var t = ei(e);
    this.target = e, this.contentRect = t.contentRect, this.borderBoxSize = le([t.borderBoxSize]), this.contentBoxSize = le([t.contentBoxSize]), this.devicePixelContentBoxSize = le([t.devicePixelContentBoxSize]);
  }
  return s;
}();
var pt = function(s) {
  if (ut(s))
    return 1 / 0;
  for (var e = 0, t = s.parentNode; t; )
    e += 1, t = t.parentNode;
  return e;
};
var Xi = function() {
  var s = 1 / 0, e = [];
  se.forEach(function(m) {
    if (m.activeTargets.length !== 0) {
      var h2 = [];
      m.activeTargets.forEach(function(b) {
        var i = new ti(b.target), a = pt(b.target);
        h2.push(i), b.lastReportedSize = mt(b.target, b.observedBox), a < s && (s = a);
      }), e.push(function() {
        m.callback.call(m.observer, h2, m.observer);
      }), m.activeTargets.splice(0, m.activeTargets.length);
    }
  });
  for (var t = 0, r2 = e; t < r2.length; t++) {
    var n = r2[t];
    n();
  }
  return s;
};
var ii = function(s) {
  se.forEach(function(t) {
    t.activeTargets.splice(0, t.activeTargets.length), t.skippedTargets.splice(0, t.skippedTargets.length), t.observationTargets.forEach(function(n) {
      n.isActive() && (pt(n.target) > s ? t.activeTargets.push(n) : t.skippedTargets.push(n));
    });
  });
};
var Ki = function() {
  var s = 0;
  for (ii(s); Hi(); )
    s = Xi(), ii(s);
  return Gi() && Qi(), s > 0;
};
var ri;
var er = [];
var aa = function() {
  return er.splice(0).forEach(function(s) {
    return s();
  });
};
var tr = function(s) {
  if (!ri) {
    var e = 0, t = document.createTextNode(""), r2 = { characterData: true };
    new MutationObserver(function() {
      return aa();
    }).observe(t, r2), ri = function() {
      t.textContent = "".concat(e ? e-- : e++);
    };
  }
  er.push(s), ri();
};
var ir = function(s) {
  tr(function() {
    requestAnimationFrame(s);
  });
};
var ht = 0;
var na = function() {
  return !!ht;
};
var oa = 250;
var sa = { attributes: true, characterData: true, childList: true, subtree: true };
var rr = ["resize", "load", "transitionend", "animationend", "animationstart", "animationiteration", "keyup", "keydown", "mouseup", "mousedown", "mouseover", "mouseout", "blur", "focus"];
var ar = function(s) {
  return s === void 0 && (s = 0), Date.now() + s;
};
var ai = false;
var la = function() {
  function s() {
    var e = this;
    this.stopped = true, this.listener = function() {
      return e.schedule();
    };
  }
  return s.prototype.run = function(e) {
    var t = this;
    if (e === void 0 && (e = oa), !ai) {
      ai = true;
      var r2 = ar(e);
      ir(function() {
        var n = false;
        try {
          n = Ki();
        } finally {
          if (ai = false, e = r2 - ar(), !na())
            return;
          n ? t.run(1e3) : e > 0 ? t.run(e) : t.start();
        }
      });
    }
  }, s.prototype.schedule = function() {
    this.stop(), this.run();
  }, s.prototype.observe = function() {
    var e = this, t = function() {
      return e.observer && e.observer.observe(document.body, sa);
    };
    document.body ? t() : _e.addEventListener("DOMContentLoaded", t);
  }, s.prototype.start = function() {
    var e = this;
    this.stopped && (this.stopped = false, this.observer = new MutationObserver(this.listener), this.observe(), rr.forEach(function(t) {
      return _e.addEventListener(t, e.listener, true);
    }));
  }, s.prototype.stop = function() {
    var e = this;
    this.stopped || (this.observer && this.observer.disconnect(), rr.forEach(function(t) {
      return _e.removeEventListener(t, e.listener, true);
    }), this.stopped = true);
  }, s;
}();
var gt = new la();
var ni = function(s) {
  !ht && s > 0 && gt.start(), ht += s, !ht && gt.stop();
};
var ca = function(s) {
  return !He(s) && !$i(s) && getComputedStyle(s).display === "inline";
};
var nr = function() {
  function s(e, t) {
    this.target = e, this.observedBox = t || Me.CONTENT_BOX, this.lastReportedSize = { inlineSize: 0, blockSize: 0 };
  }
  return s.prototype.isActive = function() {
    var e = mt(this.target, this.observedBox, true);
    return ca(this.target) && (this.lastReportedSize = e), this.lastReportedSize.inlineSize !== e.inlineSize || this.lastReportedSize.blockSize !== e.blockSize;
  }, s;
}();
var or = function() {
  function s(e, t) {
    this.activeTargets = [], this.skippedTargets = [], this.observationTargets = [], this.observer = e, this.callback = t;
  }
  return s;
}();
var ft = /* @__PURE__ */ new WeakMap();
var sr = function(s, e) {
  for (var t = 0; t < s.length; t += 1)
    if (s[t].target === e)
      return t;
  return -1;
};
var Ge = function() {
  function s() {
  }
  return s.connect = function(e, t) {
    var r2 = new or(e, t);
    ft.set(e, r2);
  }, s.observe = function(e, t, r2) {
    var n = ft.get(e), u2 = n.observationTargets.length === 0;
    sr(n.observationTargets, t) < 0 && (u2 && se.push(n), n.observationTargets.push(new nr(t, r2 && r2.box)), ni(1), gt.schedule());
  }, s.unobserve = function(e, t) {
    var r2 = ft.get(e), n = sr(r2.observationTargets, t), u2 = r2.observationTargets.length === 1;
    n >= 0 && (u2 && se.splice(se.indexOf(r2), 1), r2.observationTargets.splice(n, 1), ni(-1));
  }, s.disconnect = function(e) {
    var t = this, r2 = ft.get(e);
    r2.observationTargets.slice().forEach(function(n) {
      return t.unobserve(e, n.target);
    }), r2.activeTargets.splice(0, r2.activeTargets.length);
  }, s;
}();
var oi = function() {
  function s(e) {
    if (arguments.length === 0)
      throw new TypeError("Failed to construct 'ResizeObserver': 1 argument required, but only 0 present.");
    if (typeof e != "function")
      throw new TypeError("Failed to construct 'ResizeObserver': The callback provided as parameter 1 is not a function.");
    Ge.connect(this, e);
  }
  return s.prototype.observe = function(e, t) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Kt(e))
      throw new TypeError("Failed to execute 'observe' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Ge.observe(this, e, t);
  }, s.prototype.unobserve = function(e) {
    if (arguments.length === 0)
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': 1 argument required, but only 0 present.");
    if (!Kt(e))
      throw new TypeError("Failed to execute 'unobserve' on 'ResizeObserver': parameter 1 is not of type 'Element");
    Ge.unobserve(this, e);
  }, s.prototype.disconnect = function() {
    Ge.disconnect(this);
  }, s.toString = function() {
    return "function ResizeObserver () { [polyfill code] }";
  }, s;
}();
function vt(s) {
  console.warn("Reached unexpected case");
}
var si = class {
  constructor(e) {
    l(this, "_context", null);
    l(this, "resizeObserver");
    l(this, "isNextDrawPending", false);
    l(this, "latestCommands", []);
    l(this, "canvas");
    this.canvas = e;
  }
  get context() {
    if (!this._context) {
      if (this._context = this.canvas.getContext("2d"), !this._context)
        throw new TypeError("CanvasRenderingContext cannot be retrieved.");
      this.setCanvasObserver();
    }
    return this._context;
  }
  draw(e) {
    if (this.latestCommands = e, !this.isCanvasReady()) {
      this.postponeDraw();
      return;
    }
    this.isNextDrawPending || (this.isNextDrawPending = true, requestAnimationFrame(() => {
      this.context.clearRect(0, 0, this.canvas.width, this.canvas.height);
      for (let t of this.latestCommands)
        this.drawSingleCommand(t);
      this.isNextDrawPending = false;
    }));
  }
  postponeDraw() {
    this.setCanvasObserver();
  }
  drawSingleCommand(e) {
    switch (e.command) {
      case "beginPath":
        this.beginPath();
        break;
      case "closePath":
        this.closePath();
        break;
      case "setStrokeColor":
        this.setStrokeColor(e.args);
        break;
      case "setFillColor":
        this.setFillColor(e.args);
        break;
      case "fill":
        this.fill();
        break;
      case "stroke":
        this.stroke();
        break;
      case "addCircle":
        this.addCircle(e.args);
        break;
      case "addLine":
        this.addLine(e.args);
        break;
      case "lineTo":
        this.lineTo(e.args);
        break;
      case "moveTo":
        this.moveTo(e.args);
        break;
      case "addRect":
        this.addRectangle(e.args);
        break;
      case "addRoundedRect":
        this.addRoundedRectangle(e.args);
        break;
      case "setStrokeWidth":
        this.setStrokeWidth(e.args);
        break;
      case "addArc":
        this.addArc(e.args);
        break;
      case "bezierTo":
        this.bezierTo(e.args);
        break;
      case "saveState":
        this.saveState();
        break;
      case "restoreState":
        this.restoreState();
        break;
      case "translate":
        this.translate(e.args);
        break;
      default:
        vt(e);
    }
  }
  beginPath() {
    this.context.beginPath();
  }
  closePath() {
    this.context.closePath();
  }
  setStrokeColor(e) {
    this.context.strokeStyle = this.colorToRgbaString(e.color);
  }
  setFillColor(e) {
    this.context.fillStyle = this.colorToRgbaString(e.color);
  }
  fill() {
    this.context.fill("nonzero");
  }
  stroke() {
    this.context.stroke();
  }
  addLine(e) {
    this.context.moveTo(e.start.x, e.start.y), this.context.lineTo(e.end.x, e.end.y);
  }
  lineTo(e) {
    this.context.lineTo(e.point.x, e.point.y);
  }
  moveTo(e) {
    this.context.moveTo(e.point.x, e.point.y);
  }
  addRectangle(e) {
    this.context.rect(e.origin.x, e.origin.y, e.size.width, e.size.height);
  }
  addRoundedRectangle(e) {
    let { origin: t, radius: r2, size: n } = e;
    this.context.moveTo(t.x + r2, t.y), this.context.lineTo(t.x + n.width - r2, t.y), this.context.quadraticCurveTo(t.x + n.width, t.y, t.x + n.width, t.y + r2), this.context.lineTo(t.x + n.width, t.y + n.height - r2), this.context.quadraticCurveTo(t.x + n.width, t.y + n.height, t.x + n.width - r2, t.y + n.height), this.context.lineTo(t.x + r2, t.y + n.height), this.context.quadraticCurveTo(t.x, t.y + n.height, t.x, t.y + n.height - r2), this.context.lineTo(t.x, t.y + r2), this.context.quadraticCurveTo(t.x, t.y, t.x + r2, t.y), this.context.closePath();
  }
  setStrokeWidth(e) {
    this.context.lineWidth = e.width;
  }
  addArc(e) {
    this.context.arc(e.center.x, e.center.y, e.radius, e.startAngle, e.endAngle, e.counterclockwise);
  }
  addCircle(e) {
    this.context.arc(e.center.x, e.center.y, e.radius, 0, Math.PI * 2);
  }
  bezierTo(e) {
    this.context.bezierCurveTo(e.firstControlPoint.x, e.firstControlPoint.y, e.secondControlPoint.x, e.secondControlPoint.y, e.endPoint.x, e.endPoint.y);
  }
  saveState() {
    this.context.save();
  }
  restoreState() {
    this.context.restore();
  }
  translate(e) {
    this.context.translate(e.distance.x, e.distance.y);
  }
  colorToRgbaString(e) {
    return `rgba(${e.r},${e.g},${e.b},${e.a})`;
  }
  isCanvasReady() {
    return this.canvas.width > 0 && this.canvas.height > 0;
  }
  setCanvasObserver() {
    this.resizeObserver || (this.resizeObserver = new si.ResizeObserver((e) => {
      if (!this.isCanvasReady())
        return;
      let { devicePixelRatio: t = 1 } = window, { width: r2, height: n } = this.canvas.getBoundingClientRect(), u2 = Math.round(r2 * t), m = Math.round(n * t);
      (u2 !== this.canvas.width || m !== this.canvas.height) && (this.canvas.width = u2, this.canvas.height = m, this.context.scale(t, t)), this.latestCommands.length !== 0 && (this.draw(this.latestCommands), this.latestCommands = []);
    }), this.resizeObserver.observe(this.canvas));
  }
};
var Ye = si;
l(Ye, "ResizeObserver", window.ResizeObserver);
var Le = class {
  constructor(e) {
    l(this, "element");
    l(this, "resizeObserver");
    l(this, "mutationObserver");
    l(this, "onStateChangedListener");
    l(this, "onDisconnectedListener");
    l(this, "cachedDOMRect");
    this.element = e, this.setupListeners(), this.cacheDOMRect();
  }
  get width() {
    return this.cachedDOMRect.width;
  }
  get height() {
    return this.cachedDOMRect.height;
  }
  static areEquivalentJSONStates(e, t) {
    return !e || !t ? false : e.size.isSameAs(t.size) && e.visible === t.visible;
  }
  onStateChanged(e) {
    this.onStateChangedListener = e;
  }
  onDisconnected(e) {
    this.onDisconnectedListener = e;
  }
  toJSONObject() {
    return { size: new we(new F(this.width, "pixel"), new F(this.height, "pixel")), visible: this.isVisible() };
  }
  isSameAs(e) {
    return Le.areEquivalentJSONStates(this.toJSONObject(), e.toJSONObject());
  }
  removeListeners() {
    this.resizeObserver.disconnect(), this.mutationObserver.disconnect();
  }
  isVisible() {
    return this.width > 0 && this.height > 0 || this.element.getClientRects().length > 0;
  }
  setupListeners() {
    this.resizeObserver = new ResizeObserver(this.onSizeChange.bind(this)), this.resizeObserver.observe(this.element), this.mutationObserver = new MutationObserver(this.onMutation.bind(this)), this.element.parentElement && this.mutationObserver.observe(this.element.parentElement, { childList: true });
  }
  onSizeChange(e) {
    var t;
    this.cacheDOMRect(e), document.contains(this.element) && ((t = this.onStateChangedListener) == null || t.call(this));
  }
  onMutation(e) {
    var r2;
    let t = e.find(({ type: n }) => n === "childList");
    if (!!t) {
      for (let n of t.removedNodes)
        if (n === this.element && !document.contains(this.element)) {
          (r2 = this.onDisconnectedListener) == null || r2.call(this);
          return;
        }
    }
  }
  cacheDOMRect(e) {
    let t;
    Array.isArray(e) && e.length > 0 && (t = e[0].contentRect), t == null && (t = this.element.getBoundingClientRect()), this.cachedDOMRect = t;
  }
};
var Qe = class {
  constructor(e, t) {
    l(this, "domHost");
    l(this, "state", "idle");
    l(this, "button");
    l(this, "isHover", false);
    l(this, "onTouchStartListener");
    l(this, "onMouseEnterListener");
    l(this, "onMouseLeaveListener");
    l(this, "onClickListener");
    l(this, "control");
    this.control = e, this.domHost = t, this.onTouchStartListener = this.onTouchStart.bind(this), this.onMouseEnterListener = this.onMouseEnter.bind(this), this.onMouseLeaveListener = this.onMouseLeave.bind(this), this.onClickListener = this.onClick.bind(this);
  }
  get frameSource() {
    var e, t;
    return (t = (e = this.control.view) == null ? void 0 : e.getContext()) == null ? void 0 : t.frameSource;
  }
  get context() {
    var e;
    return (e = this.control.view) == null ? void 0 : e.getContext();
  }
  async install() {
    !this.button || (await this.canShow() ? (this.updateButtonBackground(this.button, this.getImageFromState()), this.show()) : this.hide());
  }
  remove(e = false) {
    e && this.button ? (this.button.removeEventListener("mouseenter", this.onMouseEnterListener), this.button.removeEventListener("mouseleave", this.onMouseLeaveListener), this.button.removeEventListener("touchstart", this.onTouchStartListener), this.button.removeEventListener("click", this.onClickListener), this.button.remove(), this.isHover = false, this.button = void 0) : this.hide();
  }
  hide() {
    this.button && (this.button.style.display = "none");
  }
  show() {
    this.button && (this.button.style.display = "block");
  }
  setupButton() {
    let e = document.createElement("button");
    return e.type = "button", e.style.display = "none", e.className = `scandit-control-widget scandit-control-widget-${this.control.type}`, this.updateButtonBackground(e, this.getImageFromState()), this.domHost.append(e), e.addEventListener("mouseenter", this.onMouseEnterListener), e.addEventListener("mouseleave", this.onMouseLeaveListener), B.isDesktopDevice() || e.addEventListener("touchstart", this.onTouchStartListener), e.addEventListener("click", this.onClickListener), e.setAttribute("aria-pressed", String(this.state === "pressed")), this.button = e;
  }
  onTouchStart() {
    var e, t;
    (e = this.button) == null || e.removeEventListener("mouseenter", this.onMouseEnterListener), (t = this.button) == null || t.removeEventListener("mouseleave", this.onMouseLeaveListener);
  }
  onMouseEnter() {
    this.isHover = true, this.updateButtonBackground(this.button, this.getImageFromState());
  }
  onMouseLeave() {
    this.isHover = false, this.updateButtonBackground(this.button, this.getImageFromState());
  }
  onClick() {
    var e;
    this.state = this.state === "pressed" ? "idle" : "pressed", this.buttonClicked(), this.updateButtonBackground(this.button, this.getImageFromState()), (e = this.button) == null || e.setAttribute("aria-pressed", String(this.state === "pressed"));
  }
  updateButtonBackground(e, t) {
    t != null && (e.style.backgroundImage = `url(${t})`);
  }
};
var bt = class extends Qe {
  constructor(e, t) {
    super(e, t), this.setup();
  }
  async buttonClicked() {
    await this.frameSource.setDesiredTorchState(this.retrieveTorchState() === "on" ? "off" : "on");
  }
  async canShow() {
    return this.isTorchAvailable();
  }
  getImageFromState() {
    return this.retrieveTorchState() === "on" ? this.isHover ? this.control.torchOnPressedImage : this.control.torchOnImage : this.isHover ? this.control.torchOffPressedImage : this.control.torchOffImage;
  }
  setup() {
    if (this.control.torchOffImage == null || this.control.torchOnImage == null) {
      f.log(f.Level.Warn, "TorchSwitchControl icon is not set or is empty, the control will not be rendered.");
      return;
    }
    this.button = this.setupButton();
  }
  async isTorchAvailable() {
    var t;
    let e = (t = this.frameSource) == null ? void 0 : t.toJSONObject();
    return e && e.type === "camera" ? this.frameSource.isTorchAvailable() : false;
  }
  retrieveTorchState() {
    var t;
    let e = (t = this.frameSource) == null ? void 0 : t.toJSONObject();
    return e && e.type === "camera" ? this.frameSource.getDesiredTorchState() : "off";
  }
};
var Se = class extends Qe {
  constructor(t, r2) {
    super(t, r2);
    l(this, "isTransitioning");
    this.setup();
  }
  static get Camera() {
    return ve;
  }
  static get CameraAccess() {
    return V;
  }
  async canShow() {
    return (await Se.CameraAccess.getCameras()).length > 1;
  }
  getImageFromState() {
    return this.isHover ? this.control.pressedImage : this.control.idleImage;
  }
  async buttonClicked() {
    if (this.isTransitioning)
      return;
    let t = await this.getNextDeviceCamera();
    t && await this.switchCameras(t);
  }
  setup() {
    if (this.control.idleImage == null) {
      f.log(f.Level.Warn, "CameraSwitchControl idle icon is not set or is empty, the control will not be rendered.");
      return;
    }
    this.button = this.setupButton();
  }
  async getNextDeviceCamera() {
    var m, h2;
    let t = await Se.CameraAccess.getCameras(), r2 = this.frameSource ? this.frameSource : null, n = (m = r2 == null ? void 0 : r2.cameraManager.activeCamera) == null ? void 0 : m.deviceId, u2 = t.findIndex((v2) => v2.deviceId === n);
    return u2 > -1 ? (h2 = t[u2 + 1]) != null ? h2 : t[0] : t.length > 0 ? t[0] : null;
  }
  async switchCameras(t) {
    var u2;
    this.isTransitioning = true;
    let r2 = this.frameSource;
    r2 != null && await r2.switchToDesiredState("off");
    let n = new Se.Camera();
    n.deviceId = t.deviceId, r2 != null && await n.applySettings(new me(r2.settings)), await n.switchToDesiredState("on"), await ((u2 = this.context) == null ? void 0 : u2.setFrameSource(n)), this.isTransitioning = false;
  }
};
var xe = class extends Qe {
  constructor(t, r2) {
    super(t, r2);
    l(this, "isTransitioning");
    this.setup();
  }
  static get Camera() {
    return ve;
  }
  static get CameraAccess() {
    return V;
  }
  async canShow() {
    var r2;
    if (!B.isBrokenIPhoneCameraDevice() || !B.isIOSDeviceWithExtendedCameraAccess())
      return false;
    let t = (r2 = this.frameSource) == null ? void 0 : r2.toJSONObject();
    if (t && t.type === "camera") {
      let n = this.frameSource;
      return V.isIOSWideBackCameraLabel(n.label) || V.isIOSUltraWideBackCameraLabel(n.label);
    }
    return false;
  }
  getImageFromState() {
    return this.isUltraWideBackCamera() ? this.isHover ? this.control.cameraFOVUltraWidePressedImage : this.control.cameraFOVUltraWideImage : this.isHover ? this.control.cameraFOVWidePressedImage : this.control.cameraFOVWideImage;
  }
  async buttonClicked() {
    if (this.isTransitioning)
      return;
    let t = await this.getNewDeviceCamera();
    t && await this.switchCameras(t);
  }
  setup() {
    if (this.control.cameraFOVUltraWideImage == null || this.control.cameraFOVWideImage == null) {
      f.log(f.Level.Warn, "CameraFOVSwitchControl icon is not set or is empty, the control will not be rendered.");
      return;
    }
    this.button = this.setupButton();
  }
  isUltraWideBackCamera() {
    var r2;
    let t = (r2 = this.frameSource) == null ? void 0 : r2.toJSONObject();
    if (t && t.type === "camera") {
      let n = this.frameSource;
      return V.isIOSUltraWideBackCameraLabel(n.label);
    }
    return false;
  }
  async getNewDeviceCamera() {
    return (await xe.CameraAccess.getCameras()).find((r2) => this.isUltraWideBackCamera() ? V.isIOSWideBackCameraLabel(r2.label) : V.isIOSUltraWideBackCameraLabel(r2.label));
  }
  async switchCameras(t) {
    var u2;
    this.isTransitioning = true;
    let r2 = this.frameSource;
    r2 != null && await r2.switchToDesiredState("off");
    let n = new xe.Camera();
    n.deviceId = t.deviceId, r2 != null && await n.applySettings(new me(r2.settings)), await n.switchToDesiredState("on"), await ((u2 = this.context) == null ? void 0 : u2.setFrameSource(n)), this.isTransitioning = false;
  }
};
function lr() {
  return `
    .${L.CONTAINER_CLASS_NAME} {
      display: flex;
      /* Without this the flex child overflows its parent on Chrome mobile: */
      flex-direction: column;
      width: 100%;
      height: 100%;
      align-items: center;
      justify-content: center;
      overflow: hidden;
    }
    
    .${L.PAINTBOARDS_CONTAINER_CLASS_NAME} {
      position: relative;
      width: 100%;
      height: inherit;
    }

    .${L.PAINTBOARD_CLASS_NAME} {
      position: relative;
      width: 100%;
      height: 100%;
      min-width: 1px;
      min-height: 1px;
      background-color: black;
      aspect-ratio: 16 / 9;
    }

    .${L.PAINTBOARD_CLASS_NAME}.${L.PAINTBOARD_CLASS_NAME_STATE_ON} {
      aspect-ratio: auto
    }

    .${L.PAINTBOARD_CLASS_NAME} video {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: opacity 300ms;
    }

    .${L.PAINTBOARD_CLASS_NAME} .${L.MIRRORED_CLASS_NAME} {
      transform: scale(-1, 1);
    }

    .${L.PAINTBOARD_CLASS_NAME} .${L.CAMERA_RECOVERY_CLASS_NAME} {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      z-index: 5;
      cursor: pointer;
      background-color: #000;
      color: #fff;
    }

    .${L.PAINTBOARD_CLASS_NAME} .${L.ERROR_CLASS_NAME} {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      text-align: center;
      z-index: 6;
      color: white;
      background-color: rgba(0,0,0,0.5);
    }

    .${L.PAINTBOARD_CLASS_NAME} .${L.CAMERA_RECOVERY_CLASS_NAME}[hidden],
    .${L.PAINTBOARD_CLASS_NAME} .${L.ERROR_CLASS_NAME}[hidden] {
      display: none;
    }

    .${L.PAINTBOARD_CLASS_NAME} canvas {
      position: absolute;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      object-fit: cover;
      transition: opacity 300ms;
      pointer-events: none;
    }

    .${L.PAINTBOARD_CLASS_NAME} .${L.CONTROLS_CLASS_NAME} {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      display: flex;
    }

    .${L.PAINTBOARD_CLASS_NAME} .${L.CONTROL_WIDGET_CLASS_NAME}-${$e.CLASS_NAME} {
      position: absolute;
      top: 24px;
      left: 16px;
    }

    .${L.PAINTBOARD_CLASS_NAME} .${L.CONTROL_WIDGET_CLASS_NAME}-${qe.CLASS_NAME} {
      position: absolute;
      top: 24px;
      right: 16px;
    }

    .${L.PAINTBOARD_CLASS_NAME} .${L.CONTROL_WIDGET_CLASS_NAME}-${Ze.CLASS_NAME} {
      position: absolute;
      bottom: 24px;
      right: 24px;
    }

    .${L.PAINTBOARD_CLASS_NAME} .${L.SINGLE_IMAGE_UPLOADER_CONTAINER_CLASS_NAME} {
      -webkit-tap-highlight-color: rgba(255, 255, 255, 0);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
    }

    .${L.PAINTBOARD_CLASS_NAME} .${L.SINGLE_IMAGE_UPLOADER_CONTAINER_CLASS_NAME} label {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      cursor: pointer;
    }

    .${L.PAINTBOARD_CLASS_NAME} .${L.SINGLE_IMAGE_UPLOADER_CONTAINER_CLASS_NAME} label input[type="file"] {
      position: absolute;
      top: -9999px;
    }

    .${L.PAINTBOARD_CLASS_NAME} .${L.SINGLE_IMAGE_UPLOADER_CONTAINER_CLASS_NAME} label button {
      pointer-events: none;
    }

    .${L.CONTROL_WIDGET_CLASS_NAME} {
      width: 32px;
      height: 32px;
      background-color: transparent;
      background-repeat: no-repeat;
      border: none;
      cursor: pointer;
    }

    .${L.CONTROL_WIDGET_CLASS_NAME} + .${L.CONTROL_WIDGET_CLASS_NAME} {
      margin-left: 16px;
    }
  `;
}
var q = { PROGRESSBAR_CONTAINER: "scandit-progressbar-container", MESSAGE: "scandit-progressbar-message", HIDE: "scandit-progressbar-hide" };
var ua = `
    @media (prefers-color-scheme: dark) {
      .${q.PROGRESSBAR_CONTAINER} {
        --foreground-color: white;
        --background-color: black;
      }
    }

    @media (prefers-color-scheme: light) {
      .${q.PROGRESSBAR_CONTAINER} {
        --foreground-color: black;
        --background-color: white;
      }
    }
    
    .${q.PROGRESSBAR_CONTAINER} {
      --accent-color: #62d1da;
      --secondary-color: #dae1e7;
      --100-w: 15rem;
      position: absolute;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      z-index: 1;
      background-color: var(--background-color);
    }
    
    .${q.PROGRESSBAR_CONTAINER}.${q.HIDE} {
       display: none;
    }
    
    .${q.PROGRESSBAR_CONTAINER} .${q.MESSAGE} {
      text-align: center;
      font-family: "Open Sans", sans-serif;
      margin-bottom: 1rem;
      color: var(--foreground-color);
    }
    
    .${q.PROGRESSBAR_CONTAINER} [role="progressbar"] {
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      position: relative;
      overflow: hidden;
      border: none;
      width: var(--100-w);
      height: 0.5rem;
    }
    
    .${q.PROGRESSBAR_CONTAINER} [role="progressbar"]::before,
    .${q.PROGRESSBAR_CONTAINER} [role="progressbar"]::after {
      content: " ";
      position: absolute;
      top: 0;
      left: 0;
      background: var(--accent-color);
      height: 0.5rem;
      border-radius: 0.5rem;
    }
    
    .${q.PROGRESSBAR_CONTAINER} [role="progressbar"]:not([aria-valuenow])::after {
      width: calc(var(--100-w) / 3.5);
      animation: indeterminate-progress-bar 2.5s ease infinite;
      z-index: 1;
    }

    .${q.PROGRESSBAR_CONTAINER} [role="progressbar"][aria-valuenow]::after {
      width: 0;
      animation: none;
    }
    
    .${q.PROGRESSBAR_CONTAINER} [role="progressbar"][aria-valuenow]::before {
      width: calc(var(--aria-valuenow) * 1%);
      background-color: var(--accent-color);
      border-radius: 0.5rem;
      transition: width 0.3s linear;
    }
    
    .${q.PROGRESSBAR_CONTAINER} [role="progressbar"] {
      background-color: var(--secondary-color);
      border-radius: 0.5rem;
    }
    
    @-webkit-keyframes indeterminate-progress-bar {
      0% {
        left: 0%;
      }
      50% {
        left: calc(var(--100-w) - var(--100-w) / 3.5);
      }
    }
    
    @keyframes indeterminate-progress-bar {
      0% {
        left: 0%;
      }
      50% {
        left: calc(var(--100-w) - var(--100-w) / 3.5);
      }
    }
`;
var cr = ua;
var da = `
    <div>
      <div class="${q.MESSAGE}" id="scandit-loadinglabel">Loading the Scandit SDK...</div>
      <div id="scandit-progress" role="progressbar" aria-valuemin="0" aria-valuemax="100" aria-labelledby="scandit-loadinglabel" />
    </div>
`;
var li = "aria-valuenow";
var ma = "aria-valuemin";
var pa = "aria-valuemax";
var Xe = class {
  constructor() {
    l(this, "_mounted", false);
    l(this, "_htmlRoot", null);
    l(this, "_progress", null);
    l(this, "_message", null);
  }
  set value(e) {
    var n, u2, m, h2, v2, b;
    if (!this._mounted)
      return;
    if (e == null) {
      (n = this._progress) == null || n.removeAttribute(li), (u2 = this._progress) == null || u2.removeAttribute("style");
      return;
    }
    let t = Number((m = this._progress) == null ? void 0 : m.getAttribute(ma)), r2 = Number((h2 = this._progress) == null ? void 0 : h2.getAttribute(pa));
    if (e >= t && e <= r2) {
      let i = String(e);
      (v2 = this._progress) == null || v2.setAttribute(li, i), (b = this._progress) == null || b.setAttribute("style", `--aria-valuenow: ${i}`);
    }
  }
  get value() {
    var r2;
    let e = (r2 = this._progress) == null ? void 0 : r2.getAttribute(li);
    if (e === null)
      return null;
    let t = Number(e);
    return Number.isNaN(t) ? null : t;
  }
  set message(e) {
    this._message && (this._message.textContent = e);
  }
  get message() {
    var e, t;
    return (t = (e = this._message) == null ? void 0 : e.textContent) != null ? t : "";
  }
  mount(e) {
    var r2;
    if (this._mounted)
      return;
    if (!document.head.querySelector(`[data-component=${Xe.componentName}]`)) {
      let n = document.createElement("style");
      n.dataset.component = Xe.componentName, n.append(document.createTextNode(cr)), document.head.append(n);
    }
    let t = document.createElement("div");
    t.classList.add(q.PROGRESSBAR_CONTAINER), t.classList.add(q.HIDE), t.innerHTML = da, (r2 = e.parentNode) == null || r2.replaceChild(t, e), this._htmlRoot = t, this._progress = this._htmlRoot.querySelector("[role=progressbar]"), this._message = this._htmlRoot.querySelector(`.${q.MESSAGE}`), this._mounted = true;
  }
  unmount() {
    var e, t;
    !this._mounted || ((e = this._htmlRoot) == null || e.remove(), (t = document.head.querySelector(`[data-component=${Xe.componentName}]`)) == null || t.remove(), this._mounted = false);
  }
  show() {
    this._mounted && this._htmlRoot && this._htmlRoot.classList.remove(q.HIDE);
  }
  hide() {
    this._mounted && this._htmlRoot && this._htmlRoot.classList.add(q.HIDE);
  }
};
var St = Xe;
l(St, "componentName", "ProgressBarView");
var ur = St;
typeof window.ResizeObserver != "function" && (window.ResizeObserver = oi);
var ha = ((b) => (b.TopLeft = "topLeft", b.TopCenter = "topCenter", b.TopRight = "topRight", b.CenterLeft = "centerLeft", b.Center = "center", b.CenterRight = "centerRight", b.BottomLeft = "bottomLeft", b.BottomCenter = "bottomCenter", b.BottomRight = "bottomRight", b))(ha || {});
var te = class {
  constructor() {
    l(this, "_onInputFileChange", null);
    l(this, "_inputCheckFunction", null);
    l(this, "_scanAreaMargins", D.DataCaptureView.scanAreaMargins);
    l(this, "_pointOfInterest", D.DataCaptureView.pointOfInterest);
    l(this, "_logoStyle", D.DataCaptureView.logoStyle);
    l(this, "_logoAnchor", D.DataCaptureView.logoAnchor);
    l(this, "_logoOffset", D.DataCaptureView.logoOffset);
    l(this, "focusGesture", D.DataCaptureView.focusGesture);
    l(this, "zoomGesture", D.DataCaptureView.zoomGesture);
    l(this, "_cameraRecoveryText", D.DataCaptureView.cameraRecoveryText);
    l(this, "_context", null);
    l(this, "overlays", []);
    l(this, "controls", []);
    l(this, "controlWidgets", /* @__PURE__ */ new WeakMap());
    l(this, "containerElement");
    l(this, "cameraPaintboardElement");
    l(this, "singleImageUploaderPaintboardElement");
    l(this, "videoElement");
    l(this, "visibilityListener");
    l(this, "videoPauseListener");
    l(this, "cameraRecoveryListener");
    l(this, "controlsElement");
    l(this, "cameraRecoveryElement");
    l(this, "errorElement");
    l(this, "canvasElement");
    l(this, "_canvasDrawer");
    l(this, "listeners", []);
    l(this, "htmlElement");
    l(this, "htmlElementState");
    l(this, "lastHtmlElementState");
    l(this, "isVideoElementDetached", false);
    l(this, "progressBarView");
    l(this, "lastFrameSourceState");
    at.add(this), this.visibilityListener = this.checkAndRecoverPlayback.bind(this), this.cameraRecoveryListener = this.cameraRecovery.bind(this);
  }
  get scanAreaMargins() {
    return this._scanAreaMargins;
  }
  set scanAreaMargins(e) {
    var t;
    this._scanAreaMargins = e, (t = this.privateContext) == null || t.update();
  }
  get pointOfInterest() {
    return this._pointOfInterest;
  }
  set pointOfInterest(e) {
    var t;
    this._pointOfInterest = e, (t = this.privateContext) == null || t.update();
  }
  get logoStyle() {
    return this._logoStyle;
  }
  set logoStyle(e) {
    var t;
    this._logoStyle = e, (t = this.privateContext) == null || t.update();
  }
  get logoAnchor() {
    return this._logoAnchor;
  }
  set logoAnchor(e) {
    var t;
    this._logoAnchor = e, (t = this.privateContext) == null || t.update();
  }
  get logoOffset() {
    return this._logoOffset;
  }
  set logoOffset(e) {
    var t;
    this._logoOffset = e, (t = this.privateContext) == null || t.update();
  }
  get cameraRecoveryText() {
    return this._cameraRecoveryText;
  }
  set cameraRecoveryText(e) {
    this._cameraRecoveryText = e, this.cameraRecoveryElement.textContent = e;
  }
  showProgressBar() {
    this.progressBarView.show();
  }
  hideProgressBar() {
    this.progressBarView.hide();
  }
  setProgressBarPercentage(e) {
    this.progressBarView.value = e;
  }
  setProgressBarMessage(e) {
    this.progressBarView.message = e;
  }
  get width() {
    return this.htmlElementState != null ? Math.round(this.htmlElementState.width) : 0;
  }
  get height() {
    return this.htmlElementState != null ? Math.round(this.htmlElementState.height) : 0;
  }
  get canvasDrawer() {
    return this._canvasDrawer || (this._canvasDrawer = new Ye(this.canvasElement)), this._canvasDrawer;
  }
  get privateContext() {
    return this._context;
  }
  static async forContext(e) {
    let t = new te();
    return await t.setContext(e), t;
  }
  getContext() {
    return this._context;
  }
  async setContext(e) {
    var t, r2, n;
    if (this._context = e, e) {
      if (this.overlays.length > 0 && ((t = this.privateContext) == null ? void 0 : t.modes.length) === 0)
        throw new Error(["Cannot assign this view to this context. This view has overlays but the context does not have any mode attached matching these overlays.", "Remove the overlays first before attaching the view to the context, or add the corresponding mode to the context before attaching this view."].join(" "));
      await e.setView(this), (r2 = this.privateContext) == null || r2.subscribeToWorkerMessages(this.onWorkerMessage.bind(this)), (n = this._context) != null && n.frameSource && await this.onFrameSourceChange(this._context.frameSource);
    }
  }
  connectToElement(e) {
    this.setupHtmlElement(e), this.setupHtmlElementVisibility(), this.htmlElementDidChange();
  }
  async addOverlay(e) {
    var t;
    this.overlays.includes(e) || (this.overlays.push(e), await ((t = this.privateContext) == null ? void 0 : t.update([{ type: "addOverlay", newValue: e }])));
  }
  async removeOverlay(e) {
    var t;
    !this.overlays.includes(e) || (this.overlays.splice(this.overlays.indexOf(e), 1), await ((t = this.privateContext) == null ? void 0 : t.update([{ type: "removeOverlay", newValue: e }])));
  }
  addListener(e) {
    this.listeners.includes(e) || this.listeners.push(e);
  }
  removeListener(e) {
    this.listeners.includes(e) && this.listeners.splice(this.listeners.indexOf(e), 1);
  }
  viewPointForFramePoint(e) {
    var i, a, o, c, d, g, p, S2;
    let t = { width: (a = (i = this.htmlElementState) == null ? void 0 : i.width) != null ? a : 0, height: (c = (o = this.htmlElementState) == null ? void 0 : o.height) != null ? c : 0 }, r2 = { width: (g = (d = this.videoElement) == null ? void 0 : d.videoWidth) != null ? g : 0, height: (S2 = (p = this.videoElement) == null ? void 0 : p.videoHeight) != null ? S2 : 0 }, n = t.width / t.height, u2 = r2.width / r2.height, m = n > u2 ? t.width / r2.width : t.height / r2.height, h2 = { x: e.x * m, y: e.y * m }, v2 = (r2.width * m - t.width) / 2, b = (r2.height * m - t.height) / 2;
    return new de(h2.x - v2, h2.y - b);
  }
  viewQuadrilateralForFrameQuadrilateral(e) {
    let t = this.viewPointForFramePoint(e.topLeft), r2 = this.viewPointForFramePoint(e.topRight), n = this.viewPointForFramePoint(e.bottomLeft), u2 = this.viewPointForFramePoint(e.bottomRight);
    return new Ee(t, r2, u2, n);
  }
  addControl(e) {
    var t;
    this.controls.includes(e) || (e.view = this, this.controls.push(e), this.controlsUpdated(), (t = this.privateContext) == null || t.update([{ type: "addControl", newValue: e }]));
  }
  removeControl(e) {
    var t;
    if (this.controls.includes(e)) {
      e.view = null;
      let r2 = this.controls.splice(this.controls.indexOf(e), 1);
      this.getControlWidget(r2[0]).remove(true), this.controlsUpdated(), (t = this.privateContext) == null || t.update([{ type: "removeControl", newValue: e }]);
    }
  }
  toJSONObject() {
    var e;
    return { scanAreaMargins: this.scanAreaMargins.toJSONObject(), pointOfInterest: this.pointOfInterest.toJSONObject(), logoAnchor: this.logoAnchor, logoOffset: this.logoOffset.toJSONObject(), logoHidden: (e = this.logoHidden) != null ? e : false, logoStyle: this.logoStyle, overlays: this.overlays.map((t) => t.toJSONObject()), controls: this.controls.map((t) => t.toJSONObject()), focusGesture: this.focusGesture ? this.focusGesture.toJSONObject() : null, zoomGesture: this.zoomGesture ? this.zoomGesture.toJSONObject() : null };
  }
  isCameraRecoveryVisible() {
    return !this.cameraRecoveryElement.hidden;
  }
  setCameraRecoveryVisible(e) {
    this.cameraRecoveryElement.hidden = !e;
  }
  setupHtmlElement(e) {
    var u2, m;
    this.createStyles(), this.htmlElement = e;
    let t = `
      <div class="${te.CONTAINER_CLASS_NAME}">
        <div class="${te.PAINTBOARDS_CONTAINER_CLASS_NAME}">
          <div data-js-id="scandit-progress-bar-view"></div>
          <div class="${te.PAINTBOARD_CLASS_NAME}" data-js-id="camera-paintboard">
            <video autoplay="autoplay" playsinline="true" muted="muted" poster="${Wi}"></video>
            <canvas></canvas>
            <div class="${te.CONTROLS_CLASS_NAME}"></div>
            <div class="${te.CAMERA_RECOVERY_CLASS_NAME}" hidden>${this.cameraRecoveryText}</div>
            <div class="${te.ERROR_CLASS_NAME}" hidden></div>
          </div>
          <div class="${te.PAINTBOARD_CLASS_NAME}" data-js-id="singleimage-paintboard"></div>
        </div>
      </div>
    `;
    this.htmlElement.innerHTML = t, this.progressBarView = new ur(), this.progressBarView.mount(this.htmlElement.querySelector('[data-js-id="scandit-progress-bar-view"]')), this.containerElement = this.htmlElement.querySelector(`.${te.CONTAINER_CLASS_NAME}`), this.cameraPaintboardElement = this.containerElement.querySelector('[data-js-id="camera-paintboard"]');
    let r2 = this.cameraPaintboardElement.querySelector("canvas");
    this.canvasElement ? r2.replaceWith(this.canvasElement) : this.canvasElement = r2, this.controlsElement = this.cameraPaintboardElement.querySelector(`.${te.CONTROLS_CLASS_NAME}`), this.cameraRecoveryElement = this.cameraPaintboardElement.querySelector(`.${te.CAMERA_RECOVERY_CLASS_NAME}`), this.errorElement = this.cameraPaintboardElement.querySelector(`.${te.ERROR_CLASS_NAME}`), this.singleImageUploaderPaintboardElement = this.containerElement.querySelector('[data-js-id="singleimage-paintboard"]');
    let n = this.cameraPaintboardElement.querySelector("video");
    this.videoElement ? n.replaceWith(this.videoElement) : (this.videoElement = n, this.videoPauseListener = this.handleVideoPause.bind(this), this.videoElement.addEventListener("pause", this.videoPauseListener)), this.lastFrameSourceState != null && ((m = (u2 = this._context) == null ? void 0 : u2.frameSource) == null || m.switchToDesiredState(this.lastFrameSourceState)), document.addEventListener("visibilitychange", this.visibilityListener);
    for (let h2 of ["touchend", "mousedown"])
      this.cameraRecoveryElement.addEventListener(h2, this.cameraRecoveryListener);
    this.htmlElementState && this.htmlElementState.removeListeners(), this.htmlElementState = new Le(this.htmlElement), this.htmlElementState.onStateChanged(this.htmlElementDidChange.bind(this)), this.htmlElementState.onDisconnected(this.htmlElementDisconnected.bind(this));
  }
  setupHtmlElementSingleImageUploaderChildren(e) {
    var o, c, d, g;
    if (this.singleImageUploaderPaintboardElement == null)
      return;
    this.singleImageUploaderPaintboardElement.textContent = "", this.singleImageUploaderPaintboardElement.innerHTML = "";
    let t = document.createElement("div");
    t.className = te.SINGLE_IMAGE_UPLOADER_CONTAINER_CLASS_NAME, Object.assign(t.style, D.SingleImageUploader.Settings.containerStyle, e.containerStyle), this.singleImageUploaderPaintboardElement.append(t);
    let { iconElement: r2, iconStyle: n, informationElement: u2, informationStyle: m, buttonElement: h2, buttonStyle: v2 } = e;
    Object.assign(r2.style, D.SingleImageUploader.Settings.iconStyle, n), r2.style.maxWidth = "100px", r2.style.maxHeight = "100px", t.append(r2), Object.assign(u2.style, D.SingleImageUploader.Settings.informationStyle, m), t.append(u2);
    let b = document.createElement("label"), i = document.createElement("input");
    i.type = "file", i.accept = "image/*", this._onInputFileChange === null && (this._onInputFileChange = ((o = this._context) == null ? void 0 : o.frameSource).onUploadedFile.bind((c = this._context) == null ? void 0 : c.frameSource)), this._inputCheckFunction === null && (this._inputCheckFunction = (p) => {
      var S2, C;
      ((C = (S2 = this._context) == null ? void 0 : S2.frameSource) == null ? void 0 : C.getCurrentState()) !== "starting" && p.preventDefault();
    }), i.addEventListener("change", this._onInputFileChange), i.addEventListener("click", this._inputCheckFunction), i.addEventListener("keydown", this._inputCheckFunction), b.append(i), Object.assign(h2.style, D.SingleImageUploader.Settings.buttonStyle, v2), h2.style.opacity = ((g = (d = this._context) == null ? void 0 : d.frameSource) == null ? void 0 : g.getCurrentState()) === "starting" ? "1" : "0.3", b.append(h2), t.append(b);
    let a = document.createRange().createContextualFragment(atob(ji)).firstElementChild;
    a.style.position = "absolute", a.style.bottom = "1em", a.style.right = "1em", a.style.width = "10em", t.append(a);
  }
  setupHtmlElementVisibility(e) {
    this.cameraPaintboardElement != null && (this.cameraPaintboardElement.hidden = e !== "camera"), this.singleImageUploaderPaintboardElement != null && (this.singleImageUploaderPaintboardElement.hidden = e !== "singleImageUploader");
  }
  createStyles() {
    if (document.querySelector("style[scandit]") === null) {
      let e = document.createElement("style");
      e.setAttribute("scandit", "data-capture-sdk"), e.innerHTML = lr(), document.head.append(e);
    }
  }
  htmlElementDidChange() {
    var r2;
    let e = this.htmlElementState, t = e.toJSONObject();
    if (!Le.areEquivalentJSONStates(this.lastHtmlElementState, t)) {
      (r2 = this.privateContext) == null || r2.update([{ type: "viewChange", newValue: e.toJSONObject() }]), this.lastHtmlElementState = t, this.updateCanvasSizeAttributes(), this.handleVideoDisplay(t.visible);
      for (let n of this.listeners)
        n.didChangeSize && n.didChangeSize(this, new Oe(t.size.width.value, t.size.height.value), window.innerHeight < window.innerWidth ? "landscapeLeft" : "portrait");
    }
  }
  async htmlElementDisconnected() {
    var e, t, r2, n, u2;
    this.isVideoElementDetached = false, (e = this.videoElement) == null || e.remove(), this.lastFrameSourceState = (r2 = (t = this._context) == null ? void 0 : t.frameSource) == null ? void 0 : r2.getCurrentState(), await ((u2 = (n = this._context) == null ? void 0 : n.frameSource) == null ? void 0 : u2.switchToDesiredState("off"));
  }
  handleVideoDisplay(e) {
    this.videoElement == null || this.cameraPaintboardElement == null || (!e && !this.isVideoElementDetached ? (this.videoElement.width = 0, this.videoElement.height = 0, this.videoElement.style.opacity = "0", document.body.append(this.videoElement), this.isVideoElementDetached = true) : e && this.isVideoElementDetached && (this.cameraPaintboardElement.insertAdjacentElement("afterbegin", this.videoElement), this.isVideoElementDetached = false, this.videoElement.removeAttribute("width"), this.videoElement.removeAttribute("height"), this.videoElement.style.removeProperty("opacity")));
  }
  onWorkerMessage(e) {
    if (e.type === "draw")
      this.drawEngineCommands(e.payload);
    else if (e.type === "contextDidChangeStatus") {
      let t = he.fromJSON(e.payload);
      t.isValid || (this.progressBarView.hide(), this.displayError(t));
    }
  }
  drawEngineCommands(e) {
    this.canvasDrawer.draw(e);
  }
  displayError(e) {
    this.errorElement.textContent = `Error ${e.code}: ${e.message}`, this.errorElement.hidden = false;
  }
  clearError() {
    this.errorElement.textContent = "", this.errorElement.hidden = true;
  }
  controlsUpdated() {
    var e;
    this.redrawControls(), (e = this.privateContext) == null || e.update();
  }
  redrawControls() {
    var e;
    for (let t of this.controls) {
      let r2 = this.getControlWidget(t), n = (e = this._context) == null ? void 0 : e.frameSource;
      n == null || n.desiredState === "off" || n.desiredState === "stopping" ? r2.remove() : r2.install();
    }
  }
  getControlWidget(e) {
    let t = this.controlWidgets.get(e);
    if (t)
      return t;
    let { type: r2 } = e, n;
    switch (r2) {
      case "torch": {
        n = new bt(e, this.controlsElement), this.controlWidgets.set(e, n);
        break;
      }
      case "camera": {
        n = new Se(e, this.controlsElement), this.controlWidgets.set(e, n);
        break;
      }
      case "camera-fov": {
        n = new xe(e, this.controlsElement), this.controlWidgets.set(e, n);
        break;
      }
    }
    return n;
  }
  async onFrameSourceChange(e) {
    var r2, n, u2, m, h2, v2, b, i;
    let t = e == null ? void 0 : e.type;
    if (this.setupHtmlElementVisibility(t), t === "camera")
      switch ((r2 = this.cameraPaintboardElement) == null || r2.classList.toggle(te.PAINTBOARD_CLASS_NAME_STATE_ON, (e == null ? void 0 : e.getCurrentState()) === "on"), e == null ? void 0 : e.getCurrentState()) {
        case "stopping":
          this.setVideoElementOpacity("0");
          return;
        case "starting":
          if (!this.htmlElement) {
            f.log(f.Level.Error, "cannot set frame source stream before connecting view to an HTML element");
            return;
          }
          this.videoElement && (k.instance().videoElement = this.videoElement, k.instance().gui.isCameraRecoveryVisible = this.isCameraRecoveryVisible.bind(this), k.instance().gui.setCameraRecoveryVisible = this.setCameraRecoveryVisible.bind(this), this.setVideoElementOpacity("0"));
          return;
        case "off":
          (u2 = (n = this.cameraPaintboardElement) == null ? void 0 : n.querySelector(`.${te.CANVAS_VIDEO_PREVIEW_CLASS_NAME}`)) == null || u2.remove(), this.setVideoElementOpacity("0"), this.redrawControls();
          return;
        case "on": {
          if ((h2 = (m = this.cameraPaintboardElement) == null ? void 0 : m.querySelector(`.${te.CANVAS_VIDEO_PREVIEW_CLASS_NAME}`)) == null || h2.remove(), ((b = k.instance().activeCameraSettings) == null ? void 0 : b.isIPhoneProCameraOptimizationEnabled((v2 = k.instance().activeCamera) == null ? void 0 : v2.position)) === true) {
            let { canvas: a } = k.instance();
            a.classList.add(te.CANVAS_VIDEO_PREVIEW_CLASS_NAME), (i = this.cameraPaintboardElement) == null || i.insertBefore(a, this.canvasElement);
          }
          await k.instance().waitForCapabilities(), this.redrawControls(), this.setVideoElementOpacity("1");
          break;
        }
        case void 0:
          break;
      }
    else
      t === "singleImageUploader" && this.setupHtmlElementSingleImageUploaderChildren(e.settings);
  }
  setVideoElementOpacity(e) {
    this.videoElement && (this.videoElement.style.opacity = e, this.canvasElement.style.opacity = e);
  }
  onSingleImageUploaderSettingsChange(e) {
    this.setupHtmlElementSingleImageUploaderChildren(e);
  }
  handleVideoPause() {
    k.instance().playVideo();
  }
  async checkAndRecoverPlayback() {
    var t, r2;
    let e = (t = this.videoElement) == null ? void 0 : t.srcObject;
    if (document.visibilityState === "visible" && k.instance().activeCamera != null && e != null)
      if (!e.active || ((r2 = e.getVideoTracks()[0]) == null ? void 0 : r2.muted))
        try {
          f.log(f.Level.Debug, 'Detected visibility change ("visible") event with inactive video source, try to reinitialize camera'), await k.instance().reinitializeCamera();
        } catch (n) {
        }
      else
        f.log(f.Level.Debug, 'Detected visibility change ("visible") event with active video source, replay video'), k.instance().playVideo();
  }
  async cameraRecovery(e) {
    e.preventDefault(), k.instance().activeCamera = k.instance().selectedCamera, await k.instance().reinitializeCamera();
  }
  updateCanvasSizeAttributes() {
    this.canvasElement.width = this.width, this.canvasElement.height = this.height;
  }
};
var L = te;
l(L, "CONTAINER_CLASS_NAME", ne.CONTAINER_CLASS_NAME), l(L, "PAINTBOARD_CLASS_NAME", ne.PAINTBOARD_CLASS_NAME), l(L, "PAINTBOARD_CLASS_NAME_STATE_ON", ne.PAINTBOARD_CLASS_NAME_STATE_ON), l(L, "CONTROLS_CLASS_NAME", ne.CONTROLS_CLASS_NAME), l(L, "CONTROL_WIDGET_CLASS_NAME", ne.CONTROL_WIDGET_CLASS_NAME), l(L, "MIRRORED_CLASS_NAME", ne.MIRRORED_CLASS_NAME), l(L, "CAMERA_RECOVERY_CLASS_NAME", ne.CAMERA_RECOVERY_CLASS_NAME), l(L, "ERROR_CLASS_NAME", ne.ERROR_CLASS_NAME), l(L, "PAINTBOARDS_CONTAINER_CLASS_NAME", ne.PAINTBOARDS_CONTAINER_CLASS_NAME), l(L, "SINGLE_IMAGE_UPLOADER_CONTAINER_CLASS_NAME", ne.SINGLE_IMAGE_UPLOADER_CONTAINER_CLASS_NAME), l(L, "CANVAS_VIDEO_PREVIEW_CLASS_NAME", ne.CANVAS_VIDEO_PREVIEW_CLASS_NAME);
var mr = Wt(dr(), 1);
var Ke = class {
  constructor(e) {
    l(this, "type");
    l(this, "_vibrate");
    this.type = e;
    for (let t of ["vibrate", "webkitVibrate", "msVibrate", "mozVibrate"])
      if (typeof navigator[t] == "function") {
        this._vibrate = navigator[t].bind(navigator);
        break;
      }
  }
  static get defaultVibration() {
    return new Ke("default");
  }
  toJSONObject() {
    return { type: this.type };
  }
  vibrate() {
    var e;
    return (e = this._vibrate) == null ? void 0 : e.call(this, [300]);
  }
};
var Ie = class {
  constructor(e) {
    l(this, "audio");
    l(this, "resource", null);
    this.resource = e, this.resource != null && (this.audio = new mr.Howl({ src: this.resource, html5: true }));
  }
  static get defaultSound() {
    return Ie._defaultSound instanceof Ie || (Ie._defaultSound = new Ie(zi)), Ie._defaultSound;
  }
  toJSONObject() {
    return this.resource !== null ? { resource: this.resource } : {};
  }
  play() {
    this.audio != null && this.audio.play();
  }
};
var At = Ie;
l(At, "_defaultSound", null);
var wt = class {
  constructor(e, t) {
    l(this, "_vibration", null);
    l(this, "_sound", null);
    this._vibration = e, this._sound = t;
  }
  static get defaultFeedback() {
    return new wt(Ke.defaultVibration, At.defaultSound);
  }
  get vibration() {
    return this._vibration;
  }
  get sound() {
    return this._sound;
  }
  emit() {
    this.sound && this.sound.play(), this.vibration && this.vibration.vibrate();
  }
  toJSONObject() {
    let e = {};
    return this.sound !== null && (e.sound = this.sound.toJSONObject()), this.vibration !== null && (e.vibration = this.vibration.toJSONObject()), e;
  }
};
async function ga(s, e) {
  let t = document.createElement("canvas");
  t.width = this.width, t.height = this.height;
  let r2 = t.getContext("2d");
  if (!r2)
    throw new Error("Could not get 2d context from an HTMLCanvasElement");
  let n = await this.getData();
  return n == null ? null : (r2.putImageData(new ImageData(n, this.width, this.height), 0, 0), new Promise((u2, m) => {
    t.toBlob((h2) => {
      if (h2 === null) {
        m(new Error("Could not create Blob object from canvas"));
        return;
      }
      u2(h2);
    }, s, e);
  }));
}
function $s(s, e) {
  let t = { width: s.width, height: s.height, isFrameSourceMirrored: s.isFrameSourceMirrored, getData: async () => (await e.requestFrameData(s.frameId)).data };
  return t.toBlob = ga.bind(t), t;
}
var Xs = { type: "none" };
var hr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IG9wYWNpdHk9IjAuMzUiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgcng9IjE2IiBmaWxsPSIjREFFMUU3IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNNy45ODgyOCAyMS4wODJDOC41OTY2OCAyMS4wODIgOS4wODg4NyAyMC41ODk4IDkuMDg4ODcgMTkuOTgxNEM5LjA4ODg3IDE5LjM2NjIgOC41OTY2OCAxOC44ODA5IDcuOTg4MjggMTguODgwOUM3LjM3MzA1IDE4Ljg4MDkgNi44ODc3IDE5LjM2NjIgNi44ODc3IDE5Ljk4MTRDNi44ODc3IDIwLjU4OTggNy4zNzMwNSAyMS4wODIgNy45ODgyOCAyMS4wODJaIgogICAgICAgIGZpbGw9IiNGMUY1RjgiIC8+CiAgICA8cGF0aAogICAgICAgIGQ9Ik0xNC4zNjYyIDIxLjIxODhDMTYuNjE1MiAyMS4yMTg4IDE4LjE4MDcgMTkuNzk2OSAxOC4xODA3IDE3LjY5MTRDMTguMTgwNyAxNS44MTE1IDE2Ljg0MDggMTQuNDg1NCAxNC45NTQxIDE0LjQ4NTRDMTMuOTQ5MiAxNC40ODU0IDEzLjE0MjYgMTQuODgxOCAxMi43MzkzIDE1LjUxNzZIMTIuNjk4MkwxMi45MzA3IDEyLjc3NjRIMTYuODI3MUMxNy4zNDY3IDEyLjc3NjQgMTcuNjc0OCAxMi40NTUxIDE3LjY3NDggMTEuOTU2MUMxNy42NzQ4IDExLjQ1NyAxNy4zMzk4IDExLjEzNTcgMTYuODI3MSAxMS4xMzU3SDEyLjVDMTEuNzAwMiAxMS4xMzU3IDExLjI2OTUgMTEuNDcwNyAxMS4yMDEyIDEyLjMwNDdMMTAuOTE0MSAxNS45MjA5QzEwLjkwNzIgMTUuOTU1MSAxMC45MDcyIDE1Ljk3NTYgMTAuOTA3MiAxNi4wMDI5QzEwLjg3OTkgMTYuNTU2NiAxMS4yMDEyIDE3LjAyODMgMTEuODc3OSAxNy4wMjgzQzEyLjMzNTkgMTcuMDI4MyAxMi41NDEgMTYuOTI1OCAxMi45NDQzIDE2LjU0OThDMTMuMjkzIDE2LjIxNDggMTMuNzg1MiAxNS45NjE5IDE0LjM3MyAxNS45NjE5QzE1LjQ0NjMgMTUuOTYxOSAxNi4yMTE5IDE2LjcwMDIgMTYuMjExOSAxNy43MzkzQzE2LjIxMTkgMTguODA1NyAxNS40Mzk1IDE5LjU3ODEgMTQuMzY2MiAxOS41NzgxQzEzLjQ3NzUgMTkuNTc4MSAxMi44OTY1IDE5LjE0NzUgMTIuNTQxIDE4LjQzNjVDMTIuMzA4NiAxOC4wNjc0IDEyLjA0ODggMTcuOTIzOCAxMS42Mzg3IDE3LjkyMzhDMTEuMTA1NSAxNy45MjM4IDEwLjc3NzMgMTguMjM4MyAxMC43NzczIDE4Ljc2NDZDMTAuNzc3MyAxOS4wMTA3IDEwLjgzODkgMTkuMjIyNyAxMC45NDE0IDE5LjQ0MTRDMTEuNDMzNiAyMC40ODczIDEyLjgwMDggMjEuMjE4OCAxNC4zNjYyIDIxLjIxODhaIgogICAgICAgIGZpbGw9IiNGMUY1RjgiIC8+CiAgICA8cGF0aAogICAgICAgIGQ9Ik0xOS45MzA3IDIxLjE0MzZDMjAuMjg2MSAyMS4xNDM2IDIwLjQ4NDQgMjEuMDI3MyAyMC43NTc4IDIwLjYwMzVMMjIuMTg2NSAxOC40NTdIMjIuMjI3NUwyMy42ODM2IDIwLjYzNzdDMjMuOTA5MiAyMC45Nzk1IDI0LjEwMDYgMjEuMTQzNiAyNC40OTAyIDIxLjE0MzZDMjUuMDMwMyAyMS4xNDM2IDI1LjQ0MDQgMjAuODAxOCAyNS40NDA0IDIwLjI2MTdDMjUuNDQwNCAyMC4wNDMgMjUuMzcyMSAxOS44NTE2IDI1LjIyMTcgMTkuNjQ2NUwyMy41MTk1IDE3LjI5NDlMMjUuMTk0MyAxNS4wNTk2QzI1LjM4NTcgMTQuODEzNSAyNS40NjA5IDE0LjYxNTIgMjUuNDYwOSAxNC4zNjkxQzI1LjQ2MDkgMTMuODYzMyAyNS4wODUgMTMuNTIxNSAyNC41MjQ0IDEzLjUyMTVDMjQuMTU1MyAxMy41MjE1IDIzLjk0MzQgMTMuNjg1NSAyMy42NzY4IDE0LjEwMjVMMjIuMzM2OSAxNi4xNDY1SDIyLjI5NTlMMjAuOTI4NyAxNC4wODg5QzIwLjY2MjEgMTMuNjY1IDIwLjQ1MDIgMTMuNTIxNSAyMC4wNDY5IDEzLjUyMTVDMTkuNSAxMy41MjE1IDE5LjA4OTggMTMuODk3NSAxOS4wODk4IDE0LjM5NjVDMTkuMDg5OCAxNC42Mjg5IDE5LjE1ODIgMTQuODI3MSAxOS4zMDE4IDE1LjAxODZMMjEuMDEwNyAxNy4zNDk2TDE5LjI5NDkgMTkuNjQ2NUMxOS4xMDM1IDE5Ljg5OTQgMTkuMDI4MyAyMC4wOTA4IDE5LjAyODMgMjAuMzMwMUMxOS4wMjgzIDIwLjgwODYgMTkuNDA0MyAyMS4xNDM2IDE5LjkzMDcgMjEuMTQzNloiCiAgICAgICAgZmlsbD0iI0YxRjVGOCIgLz4KPC9zdmc+Cg==";
var gr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IG9wYWNpdHk9IjAuNSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9IndoaXRlIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNNy45ODgyOCAyMS4wODJDOC41OTY2OCAyMS4wODIgOS4wODg4NyAyMC41ODk4IDkuMDg4ODcgMTkuOTgxNEM5LjA4ODg3IDE5LjM2NjIgOC41OTY2OCAxOC44ODA5IDcuOTg4MjggMTguODgwOUM3LjM3MzA1IDE4Ljg4MDkgNi44ODc3IDE5LjM2NjIgNi44ODc3IDE5Ljk4MTRDNi44ODc3IDIwLjU4OTggNy4zNzMwNSAyMS4wODIgNy45ODgyOCAyMS4wODJaIgogICAgICAgIGZpbGw9IndoaXRlIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTQuMzY2MiAyMS4yMTg4QzE2LjYxNTIgMjEuMjE4OCAxOC4xODA3IDE5Ljc5NjkgMTguMTgwNyAxNy42OTE0QzE4LjE4MDcgMTUuODExNSAxNi44NDA4IDE0LjQ4NTQgMTQuOTU0MSAxNC40ODU0QzEzLjk0OTIgMTQuNDg1NCAxMy4xNDI2IDE0Ljg4MTggMTIuNzM5MyAxNS41MTc2SDEyLjY5ODJMMTIuOTMwNyAxMi43NzY0SDE2LjgyNzFDMTcuMzQ2NyAxMi43NzY0IDE3LjY3NDggMTIuNDU1MSAxNy42NzQ4IDExLjk1NjFDMTcuNjc0OCAxMS40NTcgMTcuMzM5OCAxMS4xMzU3IDE2LjgyNzEgMTEuMTM1N0gxMi41QzExLjcwMDIgMTEuMTM1NyAxMS4yNjk1IDExLjQ3MDcgMTEuMjAxMiAxMi4zMDQ3TDEwLjkxNDEgMTUuOTIwOUMxMC45MDcyIDE1Ljk1NTEgMTAuOTA3MiAxNS45NzU2IDEwLjkwNzIgMTYuMDAyOUMxMC44Nzk5IDE2LjU1NjYgMTEuMjAxMiAxNy4wMjgzIDExLjg3NzkgMTcuMDI4M0MxMi4zMzU5IDE3LjAyODMgMTIuNTQxIDE2LjkyNTggMTIuOTQ0MyAxNi41NDk4QzEzLjI5MyAxNi4yMTQ4IDEzLjc4NTIgMTUuOTYxOSAxNC4zNzMgMTUuOTYxOUMxNS40NDYzIDE1Ljk2MTkgMTYuMjExOSAxNi43MDAyIDE2LjIxMTkgMTcuNzM5M0MxNi4yMTE5IDE4LjgwNTcgMTUuNDM5NSAxOS41NzgxIDE0LjM2NjIgMTkuNTc4MUMxMy40Nzc1IDE5LjU3ODEgMTIuODk2NSAxOS4xNDc1IDEyLjU0MSAxOC40MzY1QzEyLjMwODYgMTguMDY3NCAxMi4wNDg4IDE3LjkyMzggMTEuNjM4NyAxNy45MjM4QzExLjEwNTUgMTcuOTIzOCAxMC43NzczIDE4LjIzODMgMTAuNzc3MyAxOC43NjQ2QzEwLjc3NzMgMTkuMDEwNyAxMC44Mzg5IDE5LjIyMjcgMTAuOTQxNCAxOS40NDE0QzExLjQzMzYgMjAuNDg3MyAxMi44MDA4IDIxLjIxODggMTQuMzY2MiAyMS4yMTg4WiIKICAgICAgICBmaWxsPSJ3aGl0ZSIgLz4KICAgIDxwYXRoCiAgICAgICAgZD0iTTE5LjkzMDcgMjEuMTQzNkMyMC4yODYxIDIxLjE0MzYgMjAuNDg0NCAyMS4wMjczIDIwLjc1NzggMjAuNjAzNUwyMi4xODY1IDE4LjQ1N0gyMi4yMjc1TDIzLjY4MzYgMjAuNjM3N0MyMy45MDkyIDIwLjk3OTUgMjQuMTAwNiAyMS4xNDM2IDI0LjQ5MDIgMjEuMTQzNkMyNS4wMzAzIDIxLjE0MzYgMjUuNDQwNCAyMC44MDE4IDI1LjQ0MDQgMjAuMjYxN0MyNS40NDA0IDIwLjA0MyAyNS4zNzIxIDE5Ljg1MTYgMjUuMjIxNyAxOS42NDY1TDIzLjUxOTUgMTcuMjk0OUwyNS4xOTQzIDE1LjA1OTZDMjUuMzg1NyAxNC44MTM1IDI1LjQ2MDkgMTQuNjE1MiAyNS40NjA5IDE0LjM2OTFDMjUuNDYwOSAxMy44NjMzIDI1LjA4NSAxMy41MjE1IDI0LjUyNDQgMTMuNTIxNUMyNC4xNTUzIDEzLjUyMTUgMjMuOTQzNCAxMy42ODU1IDIzLjY3NjggMTQuMTAyNUwyMi4zMzY5IDE2LjE0NjVIMjIuMjk1OUwyMC45Mjg3IDE0LjA4ODlDMjAuNjYyMSAxMy42NjUgMjAuNDUwMiAxMy41MjE1IDIwLjA0NjkgMTMuNTIxNUMxOS41IDEzLjUyMTUgMTkuMDg5OCAxMy44OTc1IDE5LjA4OTggMTQuMzk2NUMxOS4wODk4IDE0LjYyODkgMTkuMTU4MiAxNC44MjcxIDE5LjMwMTggMTUuMDE4NkwyMS4wMTA3IDE3LjM0OTZMMTkuMjk0OSAxOS42NDY1QzE5LjEwMzUgMTkuODk5NCAxOS4wMjgzIDIwLjA5MDggMTkuMDI4MyAyMC4zMzAxQzE5LjAyODMgMjAuODA4NiAxOS40MDQzIDIxLjE0MzYgMTkuOTMwNyAyMS4xNDM2WiIKICAgICAgICBmaWxsPSJ3aGl0ZSIgLz4KPC9zdmc+Cg==";
var fr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IG9wYWNpdHk9IjAuMzUiIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgcng9IjE2IiBmaWxsPSIjREFFMUU3IiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTIuMjg4MSAyMS4xNDM2QzEyLjg5NjUgMjEuMTQzNiAxMy4zMDY2IDIwLjczMzQgMTMuMzA2NiAyMC4xMTEzVjEyLjE0MDZDMTMuMzA2NiAxMS40Mjk3IDEyLjg2OTEgMTAuOTg1NCAxMi4xMzc3IDEwLjk4NTRDMTEuNzEzOSAxMC45ODU0IDExLjM4NTcgMTEuMDQ2OSAxMC45MDcyIDExLjM3NUw4Ljk1MjE1IDEyLjcyODVDOC42MzA4NiAxMi45NTQxIDguNTA3ODEgMTMuMTg2NSA4LjUwNzgxIDEzLjUwMUM4LjUwNzgxIDEzLjkzODUgOC44MTU0MyAxNC4yMzkzIDkuMjMyNDIgMTQuMjM5M0M5LjQ0NDM0IDE0LjIzOTMgOS41ODc4OSAxNC4xOTE0IDkuNzc5MyAxNC4wNTQ3TDExLjIyMTcgMTMuMDQ5OEgxMS4yNjI3VjIwLjExMTNDMTEuMjYyNyAyMC43MzM0IDExLjY3OTcgMjEuMTQzNiAxMi4yODgxIDIxLjE0MzZaTTE2LjkwMjMgMjAuMzE2NEMxNy4yNDQxIDIwLjMxNjQgMTcuNDAxNCAyMC4xODY1IDE3LjY4MTYgMTkuOTEzMUwxOS4zNjMzIDE4LjI0NTFMMjEuMDM4MSAxOS45MDYyQzIxLjMxODQgMjAuMTg2NSAyMS40ODI0IDIwLjMxNjQgMjEuODE3NCAyMC4zMTY0QzIyLjI2MTcgMjAuMzE2NCAyMi42Mzc3IDE5Ljk3NDYgMjIuNjM3NyAxOS41MjM0QzIyLjYzNzcgMTkuMjE1OCAyMi40ODczIDE5LjAxNzYgMjIuMjU0OSAxOC43ODUyTDIwLjUyNTQgMTcuMDQ4OEwyMi4yNTQ5IDE1LjMwNTdDMjIuNDg3MyAxNS4wNzMyIDIyLjYzNzcgMTQuODc1IDIyLjYzNzcgMTQuNTY3NEMyMi42Mzc3IDE0LjExNjIgMjIuMjYxNyAxMy43NzQ0IDIxLjgxNzQgMTMuNzc0NEMyMS40ODI0IDEzLjc3NDQgMjEuMzE4NCAxMy45MDQzIDIxLjAzODEgMTQuMTg0NkwxOS4zNjMzIDE1Ljg0NTdMMTcuNjg4NSAxNC4xODQ2QzE3LjQwODIgMTMuOTA0MyAxNy4yNTEgMTMuNzc0NCAxNi45MDkyIDEzLjc3NDRDMTYuNDY0OCAxMy43NzQ0IDE2LjA4ODkgMTQuMTE2MiAxNi4wODg5IDE0LjU2NzRDMTYuMDg4OSAxNC44ODE4IDE2LjIzOTMgMTUuMDczMiAxNi40NzE3IDE1LjMwNTdMMTguMTk0MyAxNy4wNDg4TDE2LjQ3MTcgMTguNzg1MkMxNi4yMzI0IDE5LjAyNDQgMTYuMDg4OSAxOS4yMTU4IDE2LjA4ODkgMTkuNTIzNEMxNi4wODg5IDE5Ljk4MTQgMTYuNDU4IDIwLjMxNjQgMTYuOTAyMyAyMC4zMTY0WiIKICAgICAgICBmaWxsPSIjRjFGNUY4IiAvPgo8L3N2Zz4K";
var vr = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxyZWN0IG9wYWNpdHk9IjAuNSIgd2lkdGg9IjMyIiBoZWlnaHQ9IjMyIiByeD0iMTYiIGZpbGw9IndoaXRlIiAvPgogICAgPHBhdGgKICAgICAgICBkPSJNMTIuMjg4MSAyMS4xNDM2QzEyLjg5NjUgMjEuMTQzNiAxMy4zMDY2IDIwLjczMzQgMTMuMzA2NiAyMC4xMTEzVjEyLjE0MDZDMTMuMzA2NiAxMS40Mjk3IDEyLjg2OTEgMTAuOTg1NCAxMi4xMzc3IDEwLjk4NTRDMTEuNzEzOSAxMC45ODU0IDExLjM4NTcgMTEuMDQ2OSAxMC45MDcyIDExLjM3NUw4Ljk1MjE1IDEyLjcyODVDOC42MzA4NiAxMi45NTQxIDguNTA3ODEgMTMuMTg2NSA4LjUwNzgxIDEzLjUwMUM4LjUwNzgxIDEzLjkzODUgOC44MTU0MyAxNC4yMzkzIDkuMjMyNDIgMTQuMjM5M0M5LjQ0NDM0IDE0LjIzOTMgOS41ODc4OSAxNC4xOTE0IDkuNzc5MyAxNC4wNTQ3TDExLjIyMTcgMTMuMDQ5OEgxMS4yNjI3VjIwLjExMTNDMTEuMjYyNyAyMC43MzM0IDExLjY3OTcgMjEuMTQzNiAxMi4yODgxIDIxLjE0MzZaTTE2LjkwMjMgMjAuMzE2NEMxNy4yNDQxIDIwLjMxNjQgMTcuNDAxNCAyMC4xODY1IDE3LjY4MTYgMTkuOTEzMUwxOS4zNjMzIDE4LjI0NTFMMjEuMDM4MSAxOS45MDYyQzIxLjMxODQgMjAuMTg2NSAyMS40ODI0IDIwLjMxNjQgMjEuODE3NCAyMC4zMTY0QzIyLjI2MTcgMjAuMzE2NCAyMi42Mzc3IDE5Ljk3NDYgMjIuNjM3NyAxOS41MjM0QzIyLjYzNzcgMTkuMjE1OCAyMi40ODczIDE5LjAxNzYgMjIuMjU0OSAxOC43ODUyTDIwLjUyNTQgMTcuMDQ4OEwyMi4yNTQ5IDE1LjMwNTdDMjIuNDg3MyAxNS4wNzMyIDIyLjYzNzcgMTQuODc1IDIyLjYzNzcgMTQuNTY3NEMyMi42Mzc3IDE0LjExNjIgMjIuMjYxNyAxMy43NzQ0IDIxLjgxNzQgMTMuNzc0NEMyMS40ODI0IDEzLjc3NDQgMjEuMzE4NCAxMy45MDQzIDIxLjAzODEgMTQuMTg0NkwxOS4zNjMzIDE1Ljg0NTdMMTcuNjg4NSAxNC4xODQ2QzE3LjQwODIgMTMuOTA0MyAxNy4yNTEgMTMuNzc0NCAxNi45MDkyIDEzLjc3NDRDMTYuNDY0OCAxMy43NzQ0IDE2LjA4ODkgMTQuMTE2MiAxNi4wODg5IDE0LjU2NzRDMTYuMDg4OSAxNC44ODE4IDE2LjIzOTMgMTUuMDczMiAxNi40NzE3IDE1LjMwNTdMMTguMTk0MyAxNy4wNDg4TDE2LjQ3MTcgMTguNzg1MkMxNi4yMzI0IDE5LjAyNDQgMTYuMDg4OSAxOS4yMTU4IDE2LjA4ODkgMTkuNTIzNEMxNi4wODg5IDE5Ljk4MTQgMTYuNDU4IDIwLjMxNjQgMTYuOTAyMyAyMC4zMTY0WiIKICAgICAgICBmaWxsPSJ3aGl0ZSIgLz4KPC9zdmc+Cg==";
var br = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+SWNvbnMgLyBXaXRoIFNoYWRvdyAvIENsaWNrZWQgLyBDYW1lcmEgUm90YXRlIEJhY2s8L3RpdGxlPgogICAgPGRlZnM+CiAgICAgICAgPGZpbHRlciB4PSItMTA2LjMlIiB5PSItMTA2LjIlIiB3aWR0aD0iMzEyLjUlIiBoZWlnaHQ9IjMxMi41JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iZmlsdGVyLTEiPgogICAgICAgICAgICA8ZmVPZmZzZXQgZHg9IjAiIGR5PSIwIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIj48L2ZlT2Zmc2V0PgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI0IiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiPjwvZmVHYXVzc2lhbkJsdXI+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwLjEwNTg4MjM1MyAgIDAgMCAwIDAgMC4xMjU0OTAxOTYgICAwIDAgMCAwIDAuMTQ5MDE5NjA4ICAwIDAgMCAwLjMyIDAiIHR5cGU9Im1hdHJpeCIgaW49InNoYWRvd0JsdXJPdXRlcjEiIHJlc3VsdD0ic2hhZG93TWF0cml4T3V0ZXIxIj48L2ZlQ29sb3JNYXRyaXg+CiAgICAgICAgICAgIDxmZU1lcmdlPgogICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJzaGFkb3dNYXRyaXhPdXRlcjEiPjwvZmVNZXJnZU5vZGU+CiAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49IlNvdXJjZUdyYXBoaWMiPjwvZmVNZXJnZU5vZGU+CiAgICAgICAgICAgIDwvZmVNZXJnZT4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGlkPSJJY29ucy0vLVdpdGgtU2hhZG93LS8tQ2xpY2tlZC0vLUNhbWVyYS1Sb3RhdGUtQmFjayIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHJlY3QgaWQ9IkJnIiBmaWxsPSIjRkZGRkZGIiBvcGFjaXR5PSIwIiB4PSIwIiB5PSIwIiB3aWR0aD0iMjQiIGhlaWdodD0iMjQiPjwvcmVjdD4KICAgICAgICA8ZyBpZD0iY2FtZXJhLXJvdGF0ZSIgZmlsdGVyPSJ1cmwoI2ZpbHRlci0xKSIgb3BhY2l0eT0iMC42Mzk5OTk5ODYiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjAwMDAwMCwgMTIuMDAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0xMi4wMDAwMDAsIC0xMi4wMDAwMDApIHRyYW5zbGF0ZSg0LjAwMDAwMCwgNC4wMDAwMDApIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiI+CiAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iUGF0aCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgMTQuMDAwMDAwKSBzY2FsZSgxLCAtMSkgcm90YXRlKC0zNjAuMDAwMDAwKSB0cmFuc2xhdGUoLTQuMDAwMDAwLCAtMTQuMDAwMDAwKSAiIHBvaW50cz0iMyAxMiA1IDE0IDMgMTYiPjwvcG9seWxpbmU+CiAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGN4PSI4IiBjeT0iOCIgcj0iMiI+PC9jaXJjbGU+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik04LDMgTDE0LDMgQzE1LjEwNDU2OTUsMyAxNiwzLjg5NTQzMDUgMTYsNSBMMTYsMTIgQzE2LDEzLjEwNDU2OTUgMTUuMTA0NTY5NSwxNCAxNCwxNCBMMTIsMTQgTDEyLDE0IiBpZD0iUGF0aC0yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjAwMDAwMCwgOC41MDAwMDApIHNjYWxlKDEsIC0xKSB0cmFuc2xhdGUoLTEyLjAwMDAwMCwgLTguNTAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJQYXRoIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjAwMDAwMCwgMy4wMDAwMDApIHJvdGF0ZSgtMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC0xMi4wMDAwMDAsIC0zLjAwMDAwMCkgIiBwb2ludHM9IjExIDEgMTMgMyAxMSA1Ij48L3BvbHlsaW5lPgogICAgICAgICAgICA8cGF0aCBkPSJNNCwxNCBMMiwxNCBDMC44OTU0MzA1LDE0IDEuMzUyNzA3NWUtMTYsMTMuMTA0NTY5NSAwLDEyIEwwLDUgQy0xLjM1MjcwNzVlLTE2LDMuODk1NDMwNSAwLjg5NTQzMDUsMyAyLDMgTDIuNSwzIEMzLjMyODQyNzEyLDMgNCwyLjMyODQyNzEyIDQsMS41IEM0LDAuNjcxNTcyODc1IDQuNjcxNTcyODgsMS41MjE3OTU5NGUtMTYgNS41LDAgTDEwLDAgTDEwLDAiIGlkPSJQYXRoLTIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";
var Sr = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMjRweCIgaGVpZ2h0PSIyNHB4IiB2aWV3Qm94PSIwIDAgMjQgMjQiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8dGl0bGU+SWNvbnMgLyBXaXRoIFNoYWRvdyAvIE5vcm1hbCAvIENhbWVyYSBSb3RhdGUgQmFjazwvdGl0bGU+CiAgICA8ZGVmcz4KICAgICAgICA8ZmlsdGVyIHg9Ii0xMDYuMyUiIHk9Ii0xMDYuMiUiIHdpZHRoPSIzMTIuNSUiIGhlaWdodD0iMzEyLjUlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJmaWx0ZXItMSI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeD0iMCIgZHk9IjAiIGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiPjwvZmVPZmZzZXQ+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjQiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSI+PC9mZUdhdXNzaWFuQmx1cj4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAuMTA1ODgyMzUzICAgMCAwIDAgMCAwLjEyNTQ5MDE5NiAgIDAgMCAwIDAgMC4xNDkwMTk2MDggIDAgMCAwIDAuMzIgMCIgdHlwZT0ibWF0cml4IiBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiPjwvZmVDb2xvck1hdHJpeD4KICAgICAgICAgICAgPGZlTWVyZ2U+CiAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSI+PC9mZU1lcmdlTm9kZT4KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0iU291cmNlR3JhcGhpYyI+PC9mZU1lcmdlTm9kZT4KICAgICAgICAgICAgPC9mZU1lcmdlPgogICAgICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPGcgaWQ9Ikljb25zLS8tV2l0aC1TaGFkb3ctLy1Ob3JtYWwtLy1DYW1lcmEtUm90YXRlLUJhY2siIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxyZWN0IGlkPSJCZyIgZmlsbD0iI0ZGRkZGRiIgb3BhY2l0eT0iMCIgeD0iMCIgeT0iMCIgd2lkdGg9IjI0IiBoZWlnaHQ9IjI0Ij48L3JlY3Q+CiAgICAgICAgPGcgaWQ9ImNhbWVyYS1yb3RhdGUiIGZpbHRlcj0idXJsKCNmaWx0ZXItMSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjAwMDAwMCwgMTIuMDAwMDAwKSBzY2FsZSgtMSwgMSkgdHJhbnNsYXRlKC0xMi4wMDAwMDAsIC0xMi4wMDAwMDApIHRyYW5zbGF0ZSg0LjAwMDAwMCwgNC4wMDAwMDApIiBzdHJva2U9IiNGRkZGRkYiIHN0cm9rZS1saW5lam9pbj0icm91bmQiIHN0cm9rZS13aWR0aD0iMiI+CiAgICAgICAgICAgIDxwb2x5bGluZSBpZD0iUGF0aCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0LjAwMDAwMCwgMTQuMDAwMDAwKSBzY2FsZSgxLCAtMSkgcm90YXRlKC0zNjAuMDAwMDAwKSB0cmFuc2xhdGUoLTQuMDAwMDAwLCAtMTQuMDAwMDAwKSAiIHBvaW50cz0iMyAxMiA1IDE0IDMgMTYiPjwvcG9seWxpbmU+CiAgICAgICAgICAgIDxjaXJjbGUgaWQ9Ik92YWwiIGN4PSI4IiBjeT0iOCIgcj0iMiI+PC9jaXJjbGU+CiAgICAgICAgICAgIDxwYXRoIGQ9Ik04LDMgTDE0LDMgQzE1LjEwNDU2OTUsMyAxNiwzLjg5NTQzMDUgMTYsNSBMMTYsMTIgQzE2LDEzLjEwNDU2OTUgMTUuMTA0NTY5NSwxNCAxNCwxNCBMMTIsMTQgTDEyLDE0IiBpZD0iUGF0aC0yIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjAwMDAwMCwgOC41MDAwMDApIHNjYWxlKDEsIC0xKSB0cmFuc2xhdGUoLTEyLjAwMDAwMCwgLTguNTAwMDAwKSAiPjwvcGF0aD4KICAgICAgICAgICAgPHBvbHlsaW5lIGlkPSJQYXRoIiBzdHJva2UtbGluZWNhcD0icm91bmQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDEyLjAwMDAwMCwgMy4wMDAwMDApIHJvdGF0ZSgtMTgwLjAwMDAwMCkgdHJhbnNsYXRlKC0xMi4wMDAwMDAsIC0zLjAwMDAwMCkgIiBwb2ludHM9IjExIDEgMTMgMyAxMSA1Ij48L3BvbHlsaW5lPgogICAgICAgICAgICA8cGF0aCBkPSJNNCwxNCBMMiwxNCBDMC44OTU0MzA1LDE0IDEuMzUyNzA3NWUtMTYsMTMuMTA0NTY5NSAwLDEyIEwwLDUgQy0xLjM1MjcwNzVlLTE2LDMuODk1NDMwNSAwLjg5NTQzMDUsMyAyLDMgTDIuNSwzIEMzLjMyODQyNzEyLDMgNCwyLjMyODQyNzEyIDQsMS41IEM0LDAuNjcxNTcyODc1IDQuNjcxNTcyODgsMS41MjE3OTU5NGUtMTYgNS41LDAgTDEwLDAgTDEwLDAiIGlkPSJQYXRoLTIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPgogICAgICAgIDwvZz4KICAgIDwvZz4KPC9zdmc+";
var Cr = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPGRlZnM+CiAgICAgICAgPGZpbHRlciB4PSItMTIxLjUlIiB5PSItODguOSUiIHdpZHRoPSIzNDMlIiBoZWlnaHQ9IjI3Ny44JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0icHJlZml4X19hIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGluPSJTb3VyY2VBbHBoYSIgcmVzdWx0PSJzaGFkb3dPZmZzZXRPdXRlcjEiLz4KICAgICAgICAgICAgPGZlR2F1c3NpYW5CbHVyIHN0ZERldmlhdGlvbj0iNCIgaW49InNoYWRvd09mZnNldE91dGVyMSIgcmVzdWx0PSJzaGFkb3dCbHVyT3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUNvbG9yTWF0cml4IHZhbHVlcz0iMCAwIDAgMCAwLjEwNTg4MjM1MyAwIDAgMCAwIDAuMTI1NDkwMTk2IDAgMCAwIDAgMC4xNDkwMTk2MDggMCAwIDAgMC4zMiAwIiBpbj0ic2hhZG93Qmx1ck91dGVyMSIgcmVzdWx0PSJzaGFkb3dNYXRyaXhPdXRlcjEiLz4KICAgICAgICAgICAgPGZlTWVyZ2U+CiAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49InNoYWRvd01hdHJpeE91dGVyMSIvPgogICAgICAgICAgICAgICAgPGZlTWVyZ2VOb2RlIGluPSJTb3VyY2VHcmFwaGljIi8+CiAgICAgICAgICAgIDwvZmVNZXJnZT4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGZpbHRlcj0idXJsKCNwcmVmaXhfX2EpIiBvcGFjaXR5PSIuNjQiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMuNzQyIDMpIiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgIDxwYXRoIGQ9Ik00LjIyMyAxNy45NDZhLjc1Ljc1IDAgMDEtLjQ1Ni0uODNMNS4xMDUgOS43NWgtMy42YS43NS43NSAwIDAxLS43MjctLjk0NmwxLjE4My00LjMzNUwuMjIgMi43MjhhLjc1Ljc1IDAgMTExLjA2LTEuMDYybDExLjY2OCAxMS42NjhhLjc1Ljc1IDAgMDEtMS4wNiAxLjA2TDkuMTQgMTEuNjQ2bC00LjAxMyA2LjAyYS43NS43NSAwIDAxLS45MDQuMjh6TTEwLjgzOCA5LjFMMi44NzIgMS4xMzVsLjE1OS0uNThBLjc1Ljc1IDAgMDEzLjc1NSAwaDUuMjVhLjc1Ljc1IDAgMDEuNzIyLjk1OUw4LjQ5OSA1LjI1aDMuNTA1YS43NS43NSAwIDAxLjYyNiAxLjE2N2wtMS43OSAyLjY4NGgtLjAwMnoiLz4KICAgIDwvZz4KPC9zdmc+";
var Ar = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPGRlZnM+CiAgICAgICAgPGZpbHRlciB4PSItMTE0LjMlIiB5PSItODguOSUiIHdpZHRoPSIzMjguNiUiIGhlaWdodD0iMjc3LjglIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJwcmVmaXhfX2EiPgogICAgICAgICAgICA8ZmVPZmZzZXQgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI0IiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAuMTA1ODgyMzUzIDAgMCAwIDAgMC4xMjU0OTAxOTYgMCAwIDAgMCAwLjE0OTAxOTYwOCAwIDAgMCAwLjMyIDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSIvPgogICAgICAgICAgICA8ZmVNZXJnZT4KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0ic2hhZG93TWF0cml4T3V0ZXIxIi8+CiAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49IlNvdXJjZUdyYXBoaWMiLz4KICAgICAgICAgICAgPC9mZU1lcmdlPgogICAgICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPGcgZmlsdGVyPSJ1cmwoI3ByZWZpeF9fYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDMgMykiIGZpbGw9IiNGRkYiIGZpbGwtcnVsZT0ibm9uemVybyI+CiAgICAgICAgPHBhdGggZD0iTTQuOTY2IDE3Ljk0NmEuNzUuNzUgMCAwMS0uNDU3LS44M0w1Ljg0OCA5Ljc1aC0zLjZhLjc1Ljc1IDAgMDEtLjcyNy0uOTQ2bDEuMTgyLTQuMzM1LTEuNzQtMS43NGEuNzUuNzUgMCAxMTEuMDYtMS4wNjJMMTMuNjkgMTMuMzM0YS43NS43NSAwIDAxLTEuMDYxIDEuMDZsLTIuNzQ4LTIuNzQ4LTQuMDEyIDYuMDJhLjc1Ljc1IDAgMDEtLjkwNC4yOHpNMTEuNTggOS4xTDMuNjE0IDEuMTM1bC4xNi0uNThBLjc1Ljc1IDAgMDE0LjQ5NiAwaDUuMjVhLjc1Ljc1IDAgMDEuNzIyLjk1OUw5LjI0MiA1LjI1aDMuNTA0YS43NS43NSAwIDAxLjYyNyAxLjE2N2wtMS43OSAyLjY4NGgtLjAwMnoiLz4KICAgIDwvZz4KPC9zdmc+";
var wr = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPGRlZnM+CiAgICAgICAgPGZpbHRlciB4PSItMTMzLjMlIiB5PSItODguOSUiIHdpZHRoPSIzNjYuNiUiIGhlaWdodD0iMjc3LjglIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJwcmVmaXhfX2EiPgogICAgICAgICAgICA8ZmVPZmZzZXQgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI0IiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAuMTA1ODgyMzUzIDAgMCAwIDAgMC4xMjU0OTAxOTYgMCAwIDAgMCAwLjE0OTAxOTYwOCAwIDAgMCAwLjMyIDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSIvPgogICAgICAgICAgICA8ZmVNZXJnZT4KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0ic2hhZG93TWF0cml4T3V0ZXIxIi8+CiAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49IlNvdXJjZUdyYXBoaWMiLz4KICAgICAgICAgICAgPC9mZU1lcmdlPgogICAgICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPGcgZmlsdGVyPSJ1cmwoI3ByZWZpeF9fYSkiIG9wYWNpdHk9Ii42NCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNC41IDMpIiBmaWxsPSIjRkZGIiBmaWxsLXJ1bGU9Im5vbnplcm8iPgogICAgICAgIDxwYXRoIGQ9Ik0xMS4yNSA1LjI1SDcuNzQ1TDguOTcyLjk1NkEuNzUuNzUgMCAwMDguMjUgMEgzYS43NS43NSAwIDAwLS43MjQuNTUzbC0yLjI1IDguMjVhLjc1Ljc1IDAgMDAuNzI0Ljk0N2gzLjZsLTEuMzM4IDcuMzY2YS43NS43NSAwIDAwMS4zNjMuNTVsNy41LTExLjI1YS43NS43NSAwIDAwLS42MjUtMS4xNjZ6Ii8+CiAgICA8L2c+Cjwvc3ZnPg==";
var yr = "data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMjQgMjQiCiAgICB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogICAgPGRlZnM+CiAgICAgICAgPGZpbHRlciB4PSItMTMzLjMlIiB5PSItODguOSUiIHdpZHRoPSIzNjYuNiUiIGhlaWdodD0iMjc3LjglIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJwcmVmaXhfX2EiPgogICAgICAgICAgICA8ZmVPZmZzZXQgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSI0IiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAuMTA1ODgyMzUzIDAgMCAwIDAgMC4xMjU0OTAxOTYgMCAwIDAgMCAwLjE0OTAxOTYwOCAwIDAgMCAwLjMyIDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiByZXN1bHQ9InNoYWRvd01hdHJpeE91dGVyMSIvPgogICAgICAgICAgICA8ZmVNZXJnZT4KICAgICAgICAgICAgICAgIDxmZU1lcmdlTm9kZSBpbj0ic2hhZG93TWF0cml4T3V0ZXIxIi8+CiAgICAgICAgICAgICAgICA8ZmVNZXJnZU5vZGUgaW49IlNvdXJjZUdyYXBoaWMiLz4KICAgICAgICAgICAgPC9mZU1lcmdlPgogICAgICAgIDwvZmlsdGVyPgogICAgPC9kZWZzPgogICAgPGcgZmlsdGVyPSJ1cmwoI3ByZWZpeF9fYSkiIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQuNSAzKSIgZmlsbD0iI0ZGRiIgZmlsbC1ydWxlPSJub256ZXJvIj4KICAgICAgICA8cGF0aCBkPSJNMTEuMjUgNS4yNUg3Ljc0NUw4Ljk3Mi45NTZBLjc1Ljc1IDAgMDA4LjI1IDBIM2EuNzUuNzUgMCAwMC0uNzI0LjU1M2wtMi4yNSA4LjI1YS43NS43NSAwIDAwLjcyNC45NDdoMy42bC0xLjMzOCA3LjM2NmEuNzUuNzUgMCAwMDEuMzYzLjU1bDcuNS0xMS4yNWEuNzUuNzUgMCAwMC0uNjI1LTEuMTY2eiIvPgogICAgPC9nPgo8L3N2Zz4=";
var $e = class {
  constructor() {
    l(this, "type", "torch");
    l(this, "view", null);
    l(this, "icon", { on: { idle: yr, pressed: wr }, off: { idle: Ar, pressed: Cr } });
  }
  get torchOffImage() {
    return this.icon.off.idle;
  }
  set torchOffImage(e) {
    var t;
    this.icon.off.idle = e, (t = this.view) == null || t.controlsUpdated();
  }
  get torchOffPressedImage() {
    return this.icon.off.pressed;
  }
  set torchOffPressedImage(e) {
    var t;
    this.icon.off.pressed = e, (t = this.view) == null || t.controlsUpdated();
  }
  get torchOnImage() {
    return this.icon.on.idle;
  }
  set torchOnImage(e) {
    var t;
    this.icon.on.idle = e, (t = this.view) == null || t.controlsUpdated();
  }
  get torchOnPressedImage() {
    return this.icon.on.pressed;
  }
  set torchOnPressedImage(e) {
    var t;
    this.icon.on.pressed = e, (t = this.view) == null || t.controlsUpdated();
  }
  toJSONObject() {
    return { type: this.type };
  }
};
l($e, "CLASS_NAME", "torch");
var qe = class {
  constructor() {
    l(this, "type", "camera");
    l(this, "view", null);
    l(this, "icon", { idle: Sr, pressed: br });
  }
  get idleImage() {
    return this.icon.idle;
  }
  set idleImage(e) {
    var t;
    this.icon.idle = e, (t = this.view) == null || t.controlsUpdated();
  }
  get pressedImage() {
    return this.icon.pressed;
  }
  set pressedImage(e) {
    var t;
    this.icon.pressed = e, (t = this.view) == null || t.controlsUpdated();
  }
  toJSONObject() {
    return { type: this.type };
  }
};
l(qe, "CLASS_NAME", "camera");
var Ze = class {
  constructor() {
    l(this, "type", "camera-fov");
    l(this, "view", null);
    l(this, "icon", { wide: { idle: vr, pressed: fr }, ultraWide: { idle: gr, pressed: hr } });
  }
  get cameraFOVUltraWideImage() {
    return this.icon.ultraWide.idle;
  }
  set cameraFOVUltraWideImage(e) {
    var t;
    this.icon.ultraWide.idle = e, (t = this.view) == null || t.controlsUpdated();
  }
  get cameraFOVUltraWidePressedImage() {
    return this.icon.ultraWide.pressed;
  }
  set cameraFOVUltraWidePressedImage(e) {
    var t;
    this.icon.ultraWide.pressed = e, (t = this.view) == null || t.controlsUpdated();
  }
  get cameraFOVWideImage() {
    return this.icon.wide.idle;
  }
  set cameraFOVWideImage(e) {
    var t;
    this.icon.wide.idle = e, (t = this.view) == null || t.controlsUpdated();
  }
  get cameraFOVWidePressedImage() {
    return this.icon.wide.pressed;
  }
  set cameraFOVWidePressedImage(e) {
    var t;
    this.icon.wide.pressed = e, (t = this.view) == null || t.controlsUpdated();
  }
  toJSONObject() {
    return { type: this.type };
  }
};
l(Ze, "CLASS_NAME", "camera-fov");
var Mt = class {
  constructor(e = D.Brush.fillColor, t = D.Brush.strokeColor, r2 = D.Brush.strokeWidth) {
    l(this, "fill");
    l(this, "stroke");
    this.fill = { color: e }, this.stroke = { color: t, width: r2 };
  }
  static get transparent() {
    let e = Y.fromRGBA(255, 255, 255, 0);
    return new Mt(e, e, 0);
  }
  get fillColor() {
    return this.fill.color;
  }
  get strokeColor() {
    return this.stroke.color;
  }
  get strokeWidth() {
    return this.stroke.width;
  }
  toJSONObject() {
    return { fill: { color: this.fillColor.toJSON() }, stroke: { width: this.strokeWidth, color: this.strokeColor.toJSON() } };
  }
};
var Tl = { type: "none" };
var _r = class {
  constructor(e, t) {
    l(this, "type", "rectangular");
    l(this, "_style");
    l(this, "_lineStyle");
    l(this, "_dimming");
    l(this, "_animation");
    l(this, "_sizeWithUnitAndAspect");
    l(this, "color");
    let r2 = e != null ? e : D.RectangularViewfinder.defaultStyle;
    this._style = D.RectangularViewfinder.styles[r2].style, this._lineStyle = D.RectangularViewfinder.styles[r2].lineStyle, this._dimming = D.RectangularViewfinder.styles[r2].dimming, this._animation = D.RectangularViewfinder.styles[r2].animation, this.color = D.RectangularViewfinder.styles[r2].color, this._sizeWithUnitAndAspect = D.RectangularViewfinder.styles[r2].size, t !== void 0 && (this._lineStyle = t);
  }
  get sizeWithUnitAndAspect() {
    return this._sizeWithUnitAndAspect;
  }
  get style() {
    return this._style;
  }
  get lineStyle() {
    return this._lineStyle;
  }
  get dimming() {
    return this._dimming;
  }
  set dimming(e) {
    this._dimming = e;
  }
  get animation() {
    return this._animation;
  }
  set animation(e) {
    this._animation = e;
  }
  setSize(e) {
    this._sizeWithUnitAndAspect = ie.sizeWithWidthAndHeight(e);
  }
  setWidthAndAspectRatio(e, t) {
    this._sizeWithUnitAndAspect = ie.sizeWithWidthAndAspectRatio(e, t);
  }
  setHeightAndAspectRatio(e, t) {
    this._sizeWithUnitAndAspect = ie.sizeWithHeightAndAspectRatio(e, t);
  }
  setShorterDimensionAndAspectRatio(e, t) {
    this._sizeWithUnitAndAspect = ie.sizeWithShorterDimensionAndAspectRatio(new F(e, "fraction"), t);
  }
  toJSONObject() {
    return { type: this.type, color: this.color.toJSON(), style: this.style, lineStyle: this.lineStyle, dimming: this.dimming, animation: this.animation ? this.animation.toJSONObject() : null, size: this.sizeWithUnitAndAspect.toJSONObject() };
  }
};
var xr = { "scandit-datacapture-sdk-barcode-simd": { bytes: 5646813 }, "scandit-datacapture-sdk-barcode": { bytes: 5470762 }, "scandit-datacapture-sdk-id": { bytes: 6531597 }, "scandit-datacapture-sdk-id-simd": { bytes: 6704790 } };
var ci = ((n) => (n.BARCODE = "scandit-datacapture-sdk-barcode", n.ID = "scandit-datacapture-sdk-id", n.BARCODE_SIMD = "scandit-datacapture-sdk-barcode-simd", n.ID_SIMD = "scandit-datacapture-sdk-id-simd", n))(ci || {});
var Pe = xr;
function xa(s) {
  return [...new Uint8Array(s)].map((e) => {
    let t = e.toString(16);
    return t.length === 1 ? `0${t}` : t;
  }).join("");
}
async function di(s, e, t) {
  if (typeof crypto.subtle.digest != "function")
    return f.log(f.Level.Warn, `Insecure context (see https://developer.mozilla.org/en-US/docs/Web/Security/Secure_Contexts): The hash of the Scandit Data Capture library WASM file found at ${t} could not be verified`), "NOT_VERIFIABLE";
  try {
    let r2 = s instanceof Promise ? await s : s, n = await crypto.subtle.digest("SHA-256", r2), u2 = xa(n);
    return e == null ? (f.log(f.Level.Warn, "The library hash is not defined or empty, cannot correctly verify integrity."), "NOT_VERIFIABLE") : u2 === e ? (f.log(f.Level.Debug, "Data Capture library WASM integrity has been verified correctly."), "VALID") : (f.log(f.Level.Warn, `The Scandit Data Capture library WASM file found at ${t} seems invalid: expected file hash doesn't match (received: ${u2}, expected: ${e}). Please ensure the correct Scandit Data Capture file (with correct version) is retrieved.`), "INVALID");
  } catch (r2) {
    return "NOT_VERIFIABLE";
  }
}
var ui = /* @__PURE__ */ new Map([["br", 4.4], ["gzip", 2.9], ["none", 1]]);
function Ia(s) {
  var r2;
  let e = "content-encoding";
  if (s == null || s.get(e) == null)
    return ui.get("none");
  let t = new Set(((r2 = s.get(e)) != null ? r2 : "").split(",").map((n) => n.trim()));
  for (let [n, u2] of ui)
    if (t.has(n))
      return u2;
  return ui.get("none");
}
function Da(s) {
  var r2, n;
  if (s == null)
    return 0;
  let e = (r2 = Ia(s)) != null ? r2 : 1, t = Number.parseInt((n = s.get("content-length")) != null ? n : "0", 10);
  return Number.isNaN(t) ? 0 : Math.floor(t * e * 100) / 100;
}
function Ea(s) {
  let { pathname: e } = new URL(s);
  return e.endsWith(`${"scandit-datacapture-sdk-id"}.wasm`) ? Pe["scandit-datacapture-sdk-id"].bytes : e.endsWith(`${"scandit-datacapture-sdk-barcode"}.wasm`) ? Pe["scandit-datacapture-sdk-barcode"].bytes : e.endsWith(`${"scandit-datacapture-sdk-barcode-simd"}.wasm`) ? Pe["scandit-datacapture-sdk-barcode-simd"].bytes : e.endsWith(`${"scandit-datacapture-sdk-id-simd"}.wasm`) ? Pe["scandit-datacapture-sdk-id-simd"].bytes : 0;
}
var Oa = (s, e) => {
  let t = Da(e);
  return t === 0 ? Ea(s) : t;
};
function Na(s, e, { onProgress: t, onError: r2, onComplete: n }) {
  let { body: u2, status: m, statusText: h2, headers: v2 } = e.clone();
  if (!u2)
    return e;
  let b = Oa(s, v2), i = 0, a = 0, o = u2.getReader(), c = new ReadableStream({ async start(d) {
    async function g() {
      try {
        let { done: p, value: S2 } = await o.read();
        if (p) {
          d.close(), t == null || t({ percentage: 100, loadedBytes: i, privateUri: s }), n == null || n({ percentage: 100, loadedBytes: i, privateUri: s });
          return;
        }
        i += S2.length, b > 0 && S2.length > 0 && a < 100 ? (a = Number((i / b * 100).toFixed(2)), t == null || t({ percentage: a, loadedBytes: i, privateUri: s })) : b === 0 && S2.length > 0 && (t == null || t({ percentage: null, loadedBytes: i, privateUri: s })), d.enqueue(S2), await g();
      } catch (p) {
        throw r2 == null || r2({ error: p }), p;
      }
    }
    return g();
  } });
  return new Response(c, { headers: new Headers(v2), status: m, statusText: h2 });
}
async function mi({ wasmURI: s, awaitFullResponse: e, onProgress: t }) {
  let r2 = await fetch(s);
  if (!r2.ok)
    throw new Error(`HTTP status code is not ok: ${r2.status}, ${r2.statusText}`);
  return new Promise((n, u2) => {
    let m = Na(s, r2, { onProgress: t, onError: ({ error: h2 }) => {
      u2(h2);
    }, onComplete: () => {
      e && n(m);
    } });
    e || n(m);
  });
}
function Ir(s, e, t, r2, n) {
  async function u2(h2) {
    try {
      let b = await (h2 != null ? h2 : await mi({ wasmURI: e, awaitFullResponse: true, onProgress: n })).arrayBuffer();
      di(b, t, e);
      let i = await self.WebAssembly.instantiate(b, s);
      r2(i.instance, i.module);
    } catch (v2) {
      f.log(f.Level.Error, v2), f.log(f.Level.Error, `Couldn't instantiate Scandit SDK DataCapture library at ${e}, did you configure the path for it correctly?`);
    }
  }
  async function m() {
    let h2;
    try {
      h2 = await mi({ wasmURI: e, awaitFullResponse: false, onProgress: n }), di(h2.clone().arrayBuffer(), t, e);
      let v2 = await self.WebAssembly.instantiateStreaming(h2, s);
      r2(v2.instance, v2.module);
      return;
    } catch (v2) {
      f.log(f.Level.Warn, v2), f.log(f.Level.Warn, "WebAssembly streaming compile failed. Falling back to ArrayBuffer instantiation (this will make things slower)"), u2((h2 == null ? void 0 : h2.bodyUsed) === true ? void 0 : h2);
    }
  }
  typeof self.WebAssembly.instantiateStreaming == "function" ? m() : u2();
}
async function pi(s, e, t, r2) {
  return new Promise((n, u2) => {
    s().then(n).catch((m) => {
      let h2 = e * 2;
      if (h2 > t) {
        u2(m);
        return;
      }
      r2(m), self.setTimeout(() => {
        pi(s, h2, t, r2).then(n).catch(u2);
      }, e);
    });
  });
}
var _t = class {
  constructor() {
    l(this, "promise");
    l(this, "resolve");
    l(this, "reject");
    this.promise = new Promise((e, t) => {
      this.reject = t, this.resolve = e;
    });
  }
};
async function Dr(s) {
  let e, { preloading: t, writableDataPathPreload: r2, writableDataPath: n } = s, u2 = Promise.resolve(), m = false, h2 = false;
  async function v2() {
    let a = "FILE_DATA", o, c, d, g, p;
    function S2() {
      clearTimeout(p), d.result.close(), g.result.close(), o(0);
    }
    function C() {
      try {
        let _ = [], j2 = d.result.transaction(a, "readonly");
        j2.addEventListener("error", S2), j2.addEventListener("abort", S2);
        let $2 = j2.objectStore(a).openCursor();
        $2.onsuccess = () => {
          let Z2 = $2.result;
          if (Z2 == null)
            try {
              let P2 = 0, I2 = g.result.transaction(a, "readwrite"), X = I2.objectStore(a);
              I2.addEventListener("error", S2), I2.addEventListener("abort", S2), I2.oncomplete = () => {
                clearTimeout(p), d.result.close(), g.result.close(), o(P2);
              };
              for (let ee of _) {
                let K2 = X.count(ee.primaryKey);
                K2.onsuccess = () => {
                  K2.result === 0 && (++P2, X.add(ee.value, ee.primaryKey));
                }, clearTimeout(p), p = self.setTimeout(() => {
                  f.log(f.Level.Warn, "IndexedDB database is blocked! Resetting Scandit Data Capture library..."), c(new G({ name: "BlockedIndexedDB", message: "IndexedDB database is blocked" }));
                }, 500);
              }
            } catch (P2) {
              S2.call({ error: P2 });
            }
          else
            _.push({ value: Z2.value, primaryKey: Z2.primaryKey.toString().replace(`${r2}/`, `${n}/`) }), Z2.continue();
        }, $2.onerror = S2;
      } catch (_) {
        S2.call({ error: _ });
      }
    }
    return new Promise((_, j2) => {
      o = _, c = j2, d = indexedDB.open(r2), d.onupgradeneeded = () => {
        try {
          d.result.createObjectStore(a);
        } catch ($2) {
        }
      }, d.onsuccess = () => {
        if (!Array.from(d.result.objectStoreNames).includes(a)) {
          _(0);
          return;
        }
        g = indexedDB.open(n), g.onupgradeneeded = () => {
          try {
            g.result.createObjectStore(a);
          } catch ($2) {
          }
        }, g.onsuccess = () => {
          C();
        }, g.onblocked = g.onerror = S2;
      }, d.onblocked = d.onerror = S2;
    });
  }
  async function b(a, o) {
    if (e != null)
      return m = true, new Promise((c, d) => {
        (!t && a ? v2() : Promise.resolve(0)).then((g) => {
          if (!t && a && !o && g === 0) {
            m = false, c();
            return;
          }
          e(a, (p) => {
            if (m = false, p != null) {
              d(p);
              return;
            }
            c();
          });
        }).catch(d);
      });
  }
  async function i(a, o = false, c = false) {
    return (!h2 || c) && (m ? (h2 = true, u2 = u2.then(async () => (h2 = false, b(a, o)))) : u2 = b(a, o)), u2;
  }
  e = FS.syncfs, FS.syncfs = (a, o) => {
    let c = o;
    o = (d) => {
      c(d);
    }, i(a).then(o).catch(o);
  };
  try {
    FS.mkdir(n);
  } catch (a) {
    if (a.code !== "EEXIST")
      throw e = void 0, a;
  }
  return FS.mount(IDBFS, {}, n), i(true, true);
}
var Lt = class {
  constructor(e, t) {
    l(this, "lastUsedModuleMirrorAxis");
    l(this, "context");
    l(this, "MAX_NUMBER_OF_IMAGES_IN_FRAME_DATA_POOL", 10);
    l(this, "libraryLoadingPromise");
    l(this, "writableDataPath");
    l(this, "resourcePath");
    l(this, "_isDrawLoopRunning", false);
    l(this, "redrawInterval", 1e3 / 30);
    l(this, "redrawRequests", []);
    l(this, "loopTimeoutId");
    l(this, "contextDeserializer");
    l(this, "imageFrameSource");
    l(this, "view");
    l(this, "lastFrameCounter", -1);
    l(this, "frameDataPool", /* @__PURE__ */ new Map());
    l(this, "moduleHandler");
    l(this, "workerFunctions");
    this.moduleHandler = e, this.workerFunctions = t, this._loadProgressCallback = this._loadProgressCallback.bind(this);
  }
  _loadProgressCallback(e) {
    this.workerFunctions.postMessage({ type: "loadLibraryProgress", payload: e });
  }
  get Module() {
    return this.moduleHandler.get();
  }
  loadLibrary(e) {
    return this.libraryLoadingPromise != null ? this.libraryLoadingPromise : (this.libraryLoadingPromise = this.setup(e.libraryLocation, e.locationPath, e.preloadEngine, e.writableDataPathOverride), this.libraryLoadingPromise);
  }
  createContext(e) {
    let t = this.getModeDeserializers();
    this.contextDeserializer = new this.Module.DataCaptureContextDeserializer(this.writableDataPath, e.deviceId, e.context.deviceModelName, e.domain, t, e.delayedRegistration, e.highEndBlurryRecognition, this.resourcePath);
    let r2 = this.contextDeserializer.contextFromJson(JSON.stringify(e.context)), n = r2.getView();
    this.context = r2.getContext();
    let u2 = this.Module.DataCaptureContextListener.extend("DataCaptureContextListener", { didChangeStatus: (h2, v2) => {
      this.contextDidChangeStatus(JSON.parse(v2.toJson()));
    }, didStartObservingContext: () => {
      this.didStartObservingContext();
    } }), m = new u2();
    this.context.addListener(m), m.delete(), this.setView(n);
  }
  getModeDeserializers() {
    return new this.Module.VectorDataCaptureModeDeserializer();
  }
  setFrameSource(e) {
    var t;
    this.lastUsedModuleMirrorAxis = this.mapMirrorAxisOnModule(e), (t = this.imageFrameSource) == null || t.delete(), this.imageFrameSource = new this.Module.ImageBufferFrameSource(this.lastUsedModuleMirrorAxis), this.context.setFrameSource(this.imageFrameSource);
  }
  processFrame(e) {
    var n;
    if (this.context == null)
      return { payload: e, transferables: [e.data.buffer] };
    let t = e.data, r2 = this.Module.allocateUint8Array(t.byteLength);
    return this.Module.HEAPU8.set(t, r2), (n = this.imageFrameSource) == null || n.outputFrame(r2, e.width, e.height, this.Module.ImageBufferFormat.Rgba8888), { payload: e, transferables: [e.data.buffer] };
  }
  updateContext(e) {
    if (this.context != null && this.contextDeserializer != null) {
      let t = this.contextDeserializer.updateContextFromJson(this.context, this.view, JSON.stringify(e.context));
      this.context = t.getContext();
      let r2 = t.getView();
      r2 != null && e.view != null && r2.setViewSize(e.view.width, e.view.height), this.setView(r2), f.log(f.Level.Debug, "context updated", e);
    }
  }
  reportCameraProperties(e) {
    this.context.setCameraProperties(e.deviceId, e.isFrontFacing, e.hasAutofocus);
  }
  dispose() {
    this.context.dispose();
  }
  extractCentaurusLicense(e) {
    return { payload: { centaurus: { licenseKey: this.Module.LicenseUtils.getBlinkIdLicenseKey(e) } } };
  }
  convertToLoadableFrameData(e) {
    let t = this.getNextFrameId();
    this.frameDataPool.set(t, new Uint8ClampedArray(e.getFrameData()));
    let r2 = this.lastUsedModuleMirrorAxis != null ? this.lastUsedModuleMirrorAxis !== this.Module.Axis.None : false;
    return { frameId: t, width: e.getWidth(), height: e.getHeight(), isFrameSourceMirrored: r2 };
  }
  requestFrameData(e) {
    let t = this.frameDataPool.get(e);
    return t == null ? { payload: { data: null } } : { payload: { data: t }, transferables: [t.buffer] };
  }
  deleteFrameData(e) {
    this.frameDataPool.delete(e);
  }
  getNextFrameId() {
    return this.lastFrameCounter++, this.lastFrameCounter >= this.MAX_NUMBER_OF_IMAGES_IN_FRAME_DATA_POOL && (this.lastFrameCounter = 0), this.lastFrameCounter;
  }
  setView(e) {
    this.view = e, this.setViewRefreshHandler(e), e == null && (this.isDrawLoopRunning = false, this.sendViewRefreshCommands([]));
  }
  contextDidChangeStatus(e) {
    var t, r2;
    if (e.code === 260) {
      let n;
      if ((t = location.href) != null && t.startsWith("blob:null/"))
        n = "localhost";
      else {
        let u2 = ((r2 = location.pathname) == null ? void 0 : r2.length) > 1 && !location.pathname.startsWith("/");
        n = new URL(u2 ? location.pathname : location.origin).hostname;
      }
      n.startsWith("[") && n.endsWith("]") && (n = n.slice(1, -1)), e.message = e.message.replace("domain name", `domain name (${n})`);
    }
    this.workerFunctions.postMessage({ type: "contextDidChangeStatus", payload: e });
  }
  didStartObservingContext() {
    this.workerFunctions.postMessage({ type: "didStartObservingContext" });
  }
  setViewRefreshHandler(e) {
    if (e == null || e.isViewRefreshHandlerSet)
      return;
    let t = this.Module.NeedsRedrawDelegate.extend("NeedsRedrawDelegate", { setNeedsRedrawIn: this.scheduleRedraw.bind(this, e) }), r2 = new t();
    e.setNeedsRedrawDelegate(r2), e.isViewRefreshHandlerSet = true;
  }
  scheduleRedraw(e, t) {
    this.addRedrawRequest(t), this.isDrawLoopRunning || this.startDrawLoop(e);
  }
  get isDrawLoopRunning() {
    return this._isDrawLoopRunning;
  }
  set isDrawLoopRunning(e) {
    this._isDrawLoopRunning = e, !e && typeof this.loopTimeoutId == "number" && (clearTimeout(this.loopTimeoutId), this.loopTimeoutId = void 0);
  }
  addRedrawRequest(e) {
    this.redrawRequests.push(Math.round(performance.now()) + e), this.redrawRequests.sort((t, r2) => t - r2);
  }
  startDrawLoop(e) {
    this.isDrawLoopRunning = true;
    let t = (u2) => this.redrawRequests.length > 0 && this.redrawRequests[0] <= u2, r2 = (u2) => {
      for (; this.redrawRequests.length > 0 && this.redrawRequests[0] <= u2; )
        this.redrawRequests.shift();
    }, n = () => {
      this.loopTimeoutId = setTimeout(() => {
        if (!this.isDrawLoopRunning)
          return;
        let u2 = performance.now();
        t(u2) && (r2(u2), e.draw(), this.sendViewRefreshCommands(JSON.parse(e.getDrawCommands()))), n();
      }, this.redrawInterval);
    };
    n();
  }
  sendViewRefreshCommands(e) {
    this.workerFunctions.postMessage({ type: "draw", payload: e });
  }
  getWasmDynamicLibraries(e) {
    return this.getWasmSideModuleFileName() == null ? [] : [`${e.replace(/\/[^/]*$/, "/")}${this.getWasmSideModuleFileName()}`];
  }
  getWasmCoreExpectedHash(e) {
    return e ? globalThis.SDC_WASM_CORE_SIMD_HASH : "";
  }
  getWasmCoreFileName(e) {
    return e ? globalThis.SDC_WASM_CORE_SIMD_FILE_NAME : "";
  }
  getWasmSideModuleFileName() {
    return "";
  }
  async setup(e, t, r2, n) {
    var Z2;
    function u2() {
      let P2 = this.moduleHandler.get(), I2 = P2.DataDecoding.extend("DataDecoding", { decode(X, ee) {
        try {
          let K2 = JSON.parse(ee), re = [];
          for (let z of K2) {
            let A = new TextDecoder(z.ianaName, { fatal: true });
            re.push(A.decode(X.slice(z.startIndex, z.endIndex)));
          }
          return re.join("");
        } catch (K2) {
          return "";
        }
      } });
      P2.setDataDecoding(new I2());
    }
    let m = false, h2 = false, v2 = "/scandit_sync_folder_preload", b = "/scandit_sync_folder", i = "resources";
    r2 ? this.writableDataPath = v2 : n != null ? (f.log(f.Level.Debug, `IndexedDB database name override in use to recover from blocked standard database: ${n}`), this.writableDataPath = n) : this.writableDataPath = b, this.resourcePath = `${e}${i}/`, self.path = t;
    let { resolve: a, reject: o, promise: c } = new _t(), d = () => {
      h2 && m && (u2.apply(this), this.moduleHandler.get().callMain(), a());
    }, g = ct.sdkVersion();
    if (g === "")
      throw new G({ name: "Invalid library version", message: "Library version is not defined or empty, cannot generate proper path to library files." });
    let p = Ni(), S2 = Oi(g, e, this.getWasmCoreFileName(p)), { jsURI: C } = S2, { wasmURI: _ } = S2;
    this.moduleHandler.set({ canvas: (Z2 = this.workerFunctions.getOffscreenCanvas()) != null ? Z2 : { getContext: () => null }, instantiateWasm: (P2, I2) => (Ir(P2, _, this.getWasmCoreExpectedHash(p), I2, this._loadProgressCallback), {}), dynamicLibraries: this.getWasmDynamicLibraries(_), locateFile: (P2) => e + P2, noInitialRun: true, preRun: [async () => {
      try {
        await Dr({ writableDataPathPreload: v2, writableDataPath: this.writableDataPath, preloading: r2 });
      } catch (P2) {
        if (P2.name === "BlockedIndexedDB") {
          o(P2.toString());
          return;
        }
        f.log(f.Level.Debug, "No IndexedDB support, some data will not be persisted:", P2);
      }
      h2 = true, d();
    }], onRuntimeInitialized: () => {
      m = true, d();
    } });
    async function j2(P2) {
      var X;
      async function I2() {
        return importScripts(P2);
      }
      try {
        await pi(I2, 250, 4e3, (K2) => {
          f.log(f.Level.Warn, K2), f.log(f.Level.Warn, `Couldn't retrieve Scandit Data Capture library at ${P2}, retrying...`);
        });
        let ee = (X = self.SDC_WASM_JS_VERSION) != null ? X : "undefined";
        return ee !== g && f.log(f.Level.Warn, `The Scandit Data Capture library JS file found at ${P2} seems invalid: expected version doesn't match (received: ${ee}, expected: ${g}). Please ensure the correct Scandit Data Capture file (with correct version) is retrieved.`), true;
      } catch (ee) {
        return f.log(f.Level.Error, ee), false;
      }
    }
    return await j2(C) || o(`Couldn't retrieve Scandit Data Capture library at ${C}, did you configure the path for it correctly?`), c;
  }
  mapMirrorAxisOnModule(e) {
    switch (e) {
      case "None":
        return this.Module.Axis.None;
      case "X":
        return this.Module.Axis.X;
      case "Y":
        return this.Module.Axis.Y;
      default:
        return this.Module.Axis.None;
    }
  }
};
function xt(s) {
  return typeof s == "object" && s != null;
}
function Er(s) {
  if (typeof s == "string")
    return s;
  if (xt(s)) {
    if (typeof s.message == "string")
      return s.message;
  } else if (typeof (s == null ? void 0 : s.toString) == "function")
    return s.toString();
  return "unknow error";
}
var ka = "js/worker.js";
var Or = ka;
var It = class {
  constructor(e, t) {
    l(this, "dataCaptureInstance");
    l(this, "workerSelf");
    this.workerSelf = e, this.dataCaptureInstance = new Lt(t, { postMessage: this.postMessage.bind(this), getOffscreenCanvas: this.getOffscreenCanvas.bind(this) }), this.listenToMessages();
  }
  listenToMessages() {
    this.workerSelf.onmessage = this.onMessage.bind(this);
  }
  postMessage(e, t) {
    this.workerSelf.postMessage(e, t != null ? t : []);
  }
  getOffscreenCanvas() {
    if (typeof this.workerSelf.OffscreenCanvas == "function")
      return new this.workerSelf.OffscreenCanvas(32, 32);
  }
  hasPayload(e) {
    return xt(e) && "payload" in e;
  }
  hasTransferables(e) {
    return xt(e) && Array.isArray(e.transferables);
  }
  async respondWith(e, t, r2) {
    let n = null, u2;
    try {
      u2 = r2(), u2 instanceof Promise && (u2 = await u2);
    } catch (h2) {
      u2 = void 0, n = Er(h2);
    }
    let m = { type: "workerTaskId", command: e, id: t, payload: this.hasPayload(u2) ? u2.payload : void 0 };
    n != null && (m.error = n), this.postMessage(m, this.hasTransferables(u2) ? u2.transferables : []);
  }
  onMessage(e) {
    switch (e.data.command) {
      case "loadLibrary":
        {
          let { data: t } = e;
          this.respondWith(t.command, t.id, () => this.dataCaptureInstance.loadLibrary({ libraryLocation: t.libraryLocation, locationPath: t.locationPath, preloadEngine: t.preloadEngine, writableDataPathOverride: t.writableDataPathOverride }));
        }
        break;
      case "createContext":
        {
          let { data: t } = e;
          this.respondWith(t.command, t.id, () => this.dataCaptureInstance.createContext({ context: t.context, deviceId: t.deviceId, domain: t.domain, delayedRegistration: t.delayedRegistration, highEndBlurryRecognition: t.highEndBlurryRecognition }));
        }
        break;
      case "setFrameSource":
        {
          let { data: t } = e;
          this.respondWith(t.command, t.id, () => this.dataCaptureInstance.setFrameSource(t.mirrorAxis));
        }
        break;
      case "processFrame":
        {
          let { data: t } = e;
          this.respondWith(t.command, t.id, () => this.dataCaptureInstance.processFrame({ data: t.data, width: t.width, height: t.height }));
        }
        break;
      case "requestFrameData":
        {
          let { data: t } = e;
          this.respondWith(t.command, t.id, () => this.dataCaptureInstance.requestFrameData(t.frameId));
        }
        break;
      case "deleteFrameData":
        {
          let { data: t } = e;
          this.respondWith(t.command, t.id, () => {
            this.dataCaptureInstance.deleteFrameData(t.frameId);
          });
        }
        break;
      case "updateContext":
        {
          let { data: t } = e;
          this.respondWith(t.command, t.id, () => this.dataCaptureInstance.updateContext(t));
        }
        break;
      case "dispose":
        this.respondWith(e.data.command, e.data.id, () => this.dataCaptureInstance.dispose());
        break;
      case "reportCameraProperties":
        {
          let { data: t } = e;
          this.respondWith(t.command, t.id, () => this.dataCaptureInstance.reportCameraProperties(t));
        }
        break;
      case "setLogLevel":
        {
          let { data: t } = e;
          this.respondWith(t.command, t.id, () => {
            f.setLevel(t.level);
          });
        }
        break;
      case "extractCentaurusLicense":
        {
          let { data: t } = e;
          this.respondWith(t.command, t.id, () => this.dataCaptureInstance.extractCentaurusLicense(t.licenseKey));
        }
        break;
      default:
        return vt(e.data), false;
    }
    return true;
  }
};
var oc = new It(self, { get: () => self.Module, set: (s) => {
  self.Module = s;
} });
var Nr = class {
  constructor(e, t, r2) {
    l(this, "_dataCaptureWorker");
    l(this, "libraryLocation");
    l(this, "isPreloadEngine");
    l(this, "workerCommandId", 1);
    l(this, "workerTasks", /* @__PURE__ */ new Map());
    l(this, "workerListeners", []);
    l(this, "workerMessageListener");
    this.libraryLocation = e, this.isPreloadEngine = t, this.workerMessageListener = this.onWorkerMessage.bind(this), this.dataCaptureWorker.addEventListener("message", this.workerMessageListener), typeof r2 == "function" && this.addWorkerListener((n) => {
      n.type === "loadLibraryProgress" && r2(n.payload);
    });
  }
  static async create(e) {
    var r2, n;
    let t = new this(e.libraryLocation, (r2 = e.preloadEngine) != null ? r2 : false, e.loadProgressNotifier);
    return await t.workerCommand("setLogLevel", { level: (n = e.logLevel) != null ? n : f.Level.Debug }), await t.load(), t;
  }
  async load() {
    var e;
    try {
      await this.workerCommand("loadLibrary", { libraryLocation: this.libraryLocation, locationPath: window.location.pathname, preloadEngine: this.isPreloadEngine, writableDataPathOverride: (e = localStorage.getItem("scanditWritableDataPathOverride")) != null ? e : void 0 });
    } catch (t) {
      if (t != null && typeof t == "object" && typeof t.error == "string" && t.error.includes("BlockedIndexedDB"))
        return await this.terminateDataCaptureWorker(false), this.dataCaptureWorker.addEventListener("message", this.workerMessageListener), localStorage.setItem("scanditWritableDataPathOverride", `/scandit_sync_folder_${[...crypto.getRandomValues(new Uint32Array(2))].map((r2) => r2.toString(32)).join("")}`), this.load();
      throw t;
    }
  }
  async workerCommand(e, t, r2) {
    return new Promise((n, u2) => {
      let m = this.workerCommandId++;
      this.workerTasks.set(m, { resolve: n, reject: u2, command: e });
      let h2 = ae(Q({}, t), { command: e, id: m });
      this.dataCaptureWorker.postMessage(h2, r2);
    });
  }
  get dataCaptureWorker() {
    var e;
    return (e = this._dataCaptureWorker) != null || (this._dataCaptureWorker = new Worker(Or)), this._dataCaptureWorker;
  }
  async terminateDataCaptureWorker(e = true) {
    var t, r2;
    e && await this.workerCommand("dispose", {}), (t = this._dataCaptureWorker) == null || t.removeEventListener("message", this.workerMessageListener), (r2 = this._dataCaptureWorker) == null || r2.terminate(), this._dataCaptureWorker = void 0;
  }
  addWorkerListener(e) {
    this.workerListeners.push(e);
  }
  removeWorkerListener(e) {
    !this.workerListeners.includes(e) || this.workerListeners.splice(this.workerListeners.indexOf(e), 1);
  }
  onWorkerMessage(e) {
    let t = e.data;
    if (t.type === "workerTaskId" && typeof t.id == "number") {
      let { id: r2 } = t, n = this.workerTasks.get(r2);
      t.error != null ? n == null || n.reject(t) : n == null || n.resolve(t.payload), this.workerTasks.delete(r2);
    } else
      for (let r2 of this.workerListeners)
        r2(t);
  }
};
var Et = "unconfigured";
var Dt;
var qt;
var be;
var et = Ti;
async function Pa() {
  Et = "unconfigured", be != null && be.terminateDataCaptureWorker && await be.terminateDataCaptureWorker(true);
}
function hi({ percentage: s }) {
  for (let e of at.values())
    e.setProgressBarPercentage(s);
}
async function Cc(s) {
  var r2, n;
  if (Et !== "unconfigured" && Dt != null)
    return Dt;
  let e = ae(Q({}, s), { libraryLocation: Ei((r2 = s.libraryLocation) != null ? r2 : "/"), logLevel: (n = s.logLevel) != null ? n : f.Level.Debug, loadProgressNotifier: et.notify.bind(et) });
  qt = e.licenseKey, f.setLevel(e.logLevel);
  async function t() {
    if (Et = "started", et.subscribe(hi), e.licenseKey == null || e.licenseKey.trim().length < 64)
      throw new G({ name: "NoLicenseKeyError", message: "No license key provided" });
    let u2 = B.checkBrowserCompatibility();
    if (!u2.fullSupport && !u2.scannerSupport)
      throw new Ae(u2);
    if (e.moduleLoaders.length !== 1)
      throw new G({ name: "InvalidModuleLoader", message: `Exactly one module loader must be passed to configure(). ${e.moduleLoaders.length} received.` });
    let [m] = e.moduleLoaders;
    be = await m.load(e).catch((h2) => {
      throw h2;
    }), Et = "done", et.unsubscribe(hi);
  }
  return Dt = t().catch((u2) => {
    throw Pa(), et.unsubscribe(hi), u2;
  }), Dt;
}

// node_modules/scandit-web-datacapture-barcode/build/js/index.js
var j = Object.create;
var W = Object.defineProperty;
var e1 = Object.defineProperties;
var t1 = Object.getOwnPropertyDescriptor;
var a1 = Object.getOwnPropertyDescriptors;
var r1 = Object.getOwnPropertyNames;
var G2 = Object.getOwnPropertySymbols;
var i1 = Object.getPrototypeOf;
var q2 = Object.prototype.hasOwnProperty;
var o1 = Object.prototype.propertyIsEnumerable;
var M = (i, e, t) => e in i ? W(i, e, { enumerable: true, configurable: true, writable: true, value: t }) : i[e] = t;
var O = (i, e) => {
  for (var t in e || (e = {}))
    q2.call(e, t) && M(i, t, e[t]);
  if (G2)
    for (var t of G2(e))
      o1.call(e, t) && M(i, t, e[t]);
  return i;
};
var F2 = (i, e) => e1(i, a1(e));
var s1 = (i, e) => () => (e || i((e = { exports: {} }).exports, e), e.exports);
var n1 = (i, e, t, a) => {
  if (e && typeof e == "object" || typeof e == "function")
    for (let o of r1(e))
      !q2.call(i, o) && o !== t && W(i, o, { get: () => e[o], enumerable: !(a = t1(e, o)) || a.enumerable });
  return i;
};
var l1 = (i, e, t) => (t = i != null ? j(i1(i)) : {}, n1(e || !i || !i.__esModule ? W(t, "default", { value: i, enumerable: true }) : t, i));
var r = (i, e, t) => (M(i, typeof e != "symbol" ? e + "" : e, t), t);
var V2 = s1((_1, z) => {
  "use strict";
  var c1 = Object.prototype.hasOwnProperty, p = "~";
  function E() {
  }
  Object.create && (E.prototype = /* @__PURE__ */ Object.create(null), new E().__proto__ || (p = false));
  function d1(i, e, t) {
    this.fn = i, this.context = e, this.once = t || false;
  }
  function Q2(i, e, t, a, o) {
    if (typeof t != "function")
      throw new TypeError("The listener must be a function");
    var n = new d1(t, a || i, o), l2 = p ? p + e : e;
    return i._events[l2] ? i._events[l2].fn ? i._events[l2] = [i._events[l2], n] : i._events[l2].push(n) : (i._events[l2] = n, i._eventsCount++), i;
  }
  function L2(i, e) {
    --i._eventsCount === 0 ? i._events = new E() : delete i._events[e];
  }
  function m() {
    this._events = new E(), this._eventsCount = 0;
  }
  m.prototype.eventNames = function() {
    var e = [], t, a;
    if (this._eventsCount === 0)
      return e;
    for (a in t = this._events)
      c1.call(t, a) && e.push(p ? a.slice(1) : a);
    return Object.getOwnPropertySymbols ? e.concat(Object.getOwnPropertySymbols(t)) : e;
  };
  m.prototype.listeners = function(e) {
    var t = p ? p + e : e, a = this._events[t];
    if (!a)
      return [];
    if (a.fn)
      return [a.fn];
    for (var o = 0, n = a.length, l2 = new Array(n); o < n; o++)
      l2[o] = a[o].fn;
    return l2;
  };
  m.prototype.listenerCount = function(e) {
    var t = p ? p + e : e, a = this._events[t];
    return a ? a.fn ? 1 : a.length : 0;
  };
  m.prototype.emit = function(e, t, a, o, n, l2) {
    var b = p ? p + e : e;
    if (!this._events[b])
      return false;
    var s = this._events[b], g = arguments.length, C, d;
    if (s.fn) {
      switch (s.once && this.removeListener(e, s.fn, void 0, true), g) {
        case 1:
          return s.fn.call(s.context), true;
        case 2:
          return s.fn.call(s.context, t), true;
        case 3:
          return s.fn.call(s.context, t, a), true;
        case 4:
          return s.fn.call(s.context, t, a, o), true;
        case 5:
          return s.fn.call(s.context, t, a, o, n), true;
        case 6:
          return s.fn.call(s.context, t, a, o, n, l2), true;
      }
      for (d = 1, C = new Array(g - 1); d < g; d++)
        C[d - 1] = arguments[d];
      s.fn.apply(s.context, C);
    } else {
      var Y2 = s.length, J;
      for (d = 0; d < Y2; d++)
        switch (s[d].once && this.removeListener(e, s[d].fn, void 0, true), g) {
          case 1:
            s[d].fn.call(s[d].context);
            break;
          case 2:
            s[d].fn.call(s[d].context, t);
            break;
          case 3:
            s[d].fn.call(s[d].context, t, a);
            break;
          case 4:
            s[d].fn.call(s[d].context, t, a, o);
            break;
          default:
            if (!C)
              for (J = 1, C = new Array(g - 1); J < g; J++)
                C[J - 1] = arguments[J];
            s[d].fn.apply(s[d].context, C);
        }
    }
    return true;
  };
  m.prototype.on = function(e, t, a) {
    return Q2(this, e, t, a, false);
  };
  m.prototype.once = function(e, t, a) {
    return Q2(this, e, t, a, true);
  };
  m.prototype.removeListener = function(e, t, a, o) {
    var n = p ? p + e : e;
    if (!this._events[n])
      return this;
    if (!t)
      return L2(this, n), this;
    var l2 = this._events[n];
    if (l2.fn)
      l2.fn === t && (!o || l2.once) && (!a || l2.context === a) && L2(this, n);
    else {
      for (var b = 0, s = [], g = l2.length; b < g; b++)
        (l2[b].fn !== t || o && !l2[b].once || a && l2[b].context !== a) && s.push(l2[b]);
      s.length ? this._events[n] = s.length === 1 ? s[0] : s : L2(this, n);
    }
    return this;
  };
  m.prototype.removeAllListeners = function(e) {
    var t;
    return e ? (t = p ? p + e : e, this._events[t] && L2(this, t)) : (this._events = new E(), this._eventsCount = 0), this;
  };
  m.prototype.off = m.prototype.removeListener;
  m.prototype.addListener = m.prototype.on;
  m.prefixed = p;
  m.EventEmitter = m;
  typeof z < "u" && (z.exports = m);
});
var H2 = l1(V2(), 1);
var u1 = URL.createObjectURL(new Blob([new Uint8Array([34, 117, 115, 101, 32, 115, 116, 114, 105, 99, 116, 34, 59, 40, 40, 41, 61, 62, 123, 118, 97, 114, 32, 86, 61, 79, 98, 106, 101, 99, 116, 46, 100, 101, 102, 105, 110, 101, 80, 114, 111, 112, 101, 114, 116, 121, 59, 118, 97, 114, 32, 74, 61, 40, 101, 44, 116, 44, 114, 41, 61, 62, 116, 32, 105, 110, 32, 101, 63, 86, 40, 101, 44, 116, 44, 123, 101, 110, 117, 109, 101, 114, 97, 98, 108, 101, 58, 33, 48, 44, 99, 111, 110, 102, 105, 103, 117, 114, 97, 98, 108, 101, 58, 33, 48, 44, 119, 114, 105, 116, 97, 98, 108, 101, 58, 33, 48, 44, 118, 97, 108, 117, 101, 58, 114, 125, 41, 58, 101, 91, 116, 93, 61, 114, 59, 118, 97, 114, 32, 120, 61, 40, 101, 44, 116, 44, 114, 41, 61, 62, 40, 74, 40, 101, 44, 116, 121, 112, 101, 111, 102, 32, 116, 33, 61, 34, 115, 121, 109, 98, 111, 108, 34, 63, 116, 43, 34, 34, 58, 116, 44, 114, 41, 44, 114, 41, 59, 118, 97, 114, 32, 113, 61, 79, 98, 106, 101, 99, 116, 46, 100, 101, 102, 105, 110, 101, 80, 114, 111, 112, 101, 114, 116, 121, 59, 118, 97, 114, 32, 75, 61, 40, 101, 44, 116, 44, 114, 41, 61, 62, 116, 32, 105, 110, 32, 101, 63, 113, 40, 101, 44, 116, 44, 123, 101, 110, 117, 109, 101, 114, 97, 98, 108, 101, 58, 33, 48, 44, 99, 111, 110, 102, 105, 103, 117, 114, 97, 98, 108, 101, 58, 33, 48, 44, 119, 114, 105, 116, 97, 98, 108, 101, 58, 33, 48, 44, 118, 97, 108, 117, 101, 58, 114, 125, 41, 58, 101, 91, 116, 93, 61, 114, 59, 118, 97, 114, 32, 99, 61, 40, 101, 44, 116, 44, 114, 41, 61, 62, 40, 75, 40, 101, 44, 116, 121, 112, 101, 111, 102, 32, 116, 33, 61, 34, 115, 121, 109, 98, 111, 108, 34, 63, 116, 43, 34, 34, 58, 116, 44, 114, 41, 44, 114, 41, 44, 111, 59, 40, 101, 61, 62, 123, 108, 101, 116, 32, 116, 59, 40, 110, 61, 62, 40, 110, 46, 68, 101, 98, 117, 103, 61, 34, 100, 101, 98, 117, 103, 34, 44, 110, 46, 73, 110, 102, 111, 61, 34, 105, 110, 102, 111, 34, 44, 110, 46, 87, 97, 114, 110, 61, 34, 119, 97, 114, 110, 34, 44, 110, 46, 69, 114, 114, 111, 114, 61, 34, 101, 114, 114, 111, 114, 34, 44, 110, 46, 81, 117, 105, 101, 116, 61, 34, 113, 117, 105, 101, 116, 34, 41, 41, 40, 116, 61, 101, 46, 76, 101, 118, 101, 108, 124, 124, 40, 101, 46, 76, 101, 118, 101, 108, 61, 123, 125, 41, 41, 59, 108, 101, 116, 32, 114, 61, 110, 101, 119, 32, 77, 97, 112, 40, 91, 91, 34, 100, 101, 98, 117, 103, 34, 44, 49, 93, 44, 91, 34, 105, 110, 102, 111, 34, 44, 50, 93, 44, 91, 34, 119, 97, 114, 110, 34, 44, 51, 93, 44, 91, 34, 101, 114, 114, 111, 114, 34, 44, 52, 93, 44, 91, 34, 113, 117, 105, 101, 116, 34, 44, 53, 93, 93, 41, 44, 97, 61, 34, 100, 101, 98, 117, 103, 34, 59, 102, 117, 110, 99, 116, 105, 111, 110, 32, 115, 40, 110, 41, 123, 97, 61, 110, 125, 101, 46, 115, 101, 116, 76, 101, 118, 101, 108, 61, 115, 59, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 40, 110, 44, 46, 46, 46, 108, 41, 123, 105, 102, 40, 33, 40, 114, 46, 103, 101, 116, 40, 97, 41, 62, 114, 46, 103, 101, 116, 40, 110, 41, 41, 41, 115, 119, 105, 116, 99, 104, 40, 110, 41, 123, 99, 97, 115, 101, 34, 100, 101, 98, 117, 103, 34, 58, 99, 111, 110, 115, 111, 108, 101, 46, 100, 101, 98, 117, 103, 40, 46, 46, 46, 108, 41, 59, 98, 114, 101, 97, 107, 59, 99, 97, 115, 101, 34, 105, 110, 102, 111, 34, 58, 99, 111, 110, 115, 111, 108, 101, 46, 108, 111, 103, 40, 46, 46, 46, 108, 41, 59, 98, 114, 101, 97, 107, 59, 99, 97, 115, 101, 34, 119, 97, 114, 110, 34, 58, 99, 111, 110, 115, 111, 108, 101, 46, 119, 97, 114, 110, 40, 46, 46, 46, 108, 41, 59, 98, 114, 101, 97, 107, 59, 99, 97, 115, 101, 34, 101, 114, 114, 111, 114, 34, 58, 99, 111, 110, 115, 111, 108, 101, 46, 101, 114, 114, 111, 114, 40, 46, 46, 46, 108, 41, 59, 98, 114, 101, 97, 107, 59, 100, 101, 102, 97, 117, 108, 116, 58, 98, 114, 101, 97, 107, 125, 125, 101, 46, 108, 111, 103, 61, 105, 125, 41, 40, 111, 124, 124, 40, 111, 61, 123, 125, 41, 41, 59, 118, 97, 114, 32, 88, 61, 123, 34, 115, 99, 97, 110, 100, 105, 116, 45, 100, 97, 116, 97, 99, 97, 112, 116, 117, 114, 101, 45, 115, 100, 107, 45, 98, 97, 114, 99, 111, 100, 101, 45, 115, 105, 109, 100, 34, 58, 123, 98, 121, 116, 101, 115, 58, 53, 54, 52, 54, 56, 49, 51, 125, 44, 34, 115, 99, 97, 110, 100, 105, 116, 45, 100, 97, 116, 97, 99, 97, 112, 116, 117, 114, 101, 45, 115, 100, 107, 45, 98, 97, 114, 99, 111, 100, 101, 34, 58, 123, 98, 121, 116, 101, 115, 58, 53, 52, 55, 48, 55, 54, 50, 125, 44, 34, 115, 99, 97, 110, 100, 105, 116, 45, 100, 97, 116, 97, 99, 97, 112, 116, 117, 114, 101, 45, 115, 100, 107, 45, 105, 100, 34, 58, 123, 98, 121, 116, 101, 115, 58, 54, 53, 51, 49, 53, 57, 55, 125, 44, 34, 115, 99, 97, 110, 100, 105, 116, 45, 100, 97, 116, 97, 99, 97, 112, 116, 117, 114, 101, 45, 115, 100, 107, 45, 105, 100, 45, 115, 105, 109, 100, 34, 58, 123, 98, 121, 116, 101, 115, 58, 54, 55, 48, 52, 55, 57, 48, 125, 125, 44, 82, 61, 88, 59, 102, 117, 110, 99, 116, 105, 111, 110, 32, 71, 40, 101, 41, 123, 114, 101, 116, 117, 114, 110, 91, 46, 46, 46, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 101, 41, 93, 46, 109, 97, 112, 40, 116, 61, 62, 123, 108, 101, 116, 32, 114, 61, 116, 46, 116, 111, 83, 116, 114, 105, 110, 103, 40, 49, 54, 41, 59, 114, 101, 116, 117, 114, 110, 32, 114, 46, 108, 101, 110, 103, 116, 104, 61, 61, 61, 49, 63, 96, 48, 36, 123, 114, 125, 96, 58, 114, 125, 41, 46, 106, 111, 105, 110, 40, 34, 34, 41, 125, 97, 115, 121, 110, 99, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 36, 40, 101, 44, 116, 44, 114, 41, 123, 105, 102, 40, 116, 121, 112, 101, 111, 102, 32, 99, 114, 121, 112, 116, 111, 46, 115, 117, 98, 116, 108, 101, 46, 100, 105, 103, 101, 115, 116, 33, 61, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 41, 114, 101, 116, 117, 114, 110, 32, 111, 46, 108, 111, 103, 40, 111, 46, 76, 101, 118, 101, 108, 46, 87, 97, 114, 110, 44, 96, 73, 110, 115, 101, 99, 117, 114, 101, 32, 99, 111, 110, 116, 101, 120, 116, 32, 40, 115, 101, 101, 32, 104, 116, 116, 112, 115, 58, 47, 47, 100, 101, 118, 101, 108, 111, 112, 101, 114, 46, 109, 111, 122, 105, 108, 108, 97, 46, 111, 114, 103, 47, 101, 110, 45, 85, 83, 47, 100, 111, 99, 115, 47, 87, 101, 98, 47, 83, 101, 99, 117, 114, 105, 116, 121, 47, 83, 101, 99, 117, 114, 101, 95, 67, 111, 110, 116, 101, 120, 116, 115, 41, 58, 32, 84, 104, 101, 32, 104, 97, 115, 104, 32, 111, 102, 32, 116, 104, 101, 32, 83, 99, 97, 110, 100, 105, 116, 32, 68, 97, 116, 97, 32, 67, 97, 112, 116, 117, 114, 101, 32, 108, 105, 98, 114, 97, 114, 121, 32, 87, 65, 83, 77, 32, 102, 105, 108, 101, 32, 102, 111, 117, 110, 100, 32, 97, 116, 32, 36, 123, 114, 125, 32, 99, 111, 117, 108, 100, 32, 110, 111, 116, 32, 98, 101, 32, 118, 101, 114, 105, 102, 105, 101, 100, 96, 41, 44, 34, 78, 79, 84, 95, 86, 69, 82, 73, 70, 73, 65, 66, 76, 69, 34, 59, 116, 114, 121, 123, 108, 101, 116, 32, 97, 61, 101, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 80, 114, 111, 109, 105, 115, 101, 63, 97, 119, 97, 105, 116, 32, 101, 58, 101, 44, 115, 61, 97, 119, 97, 105, 116, 32, 99, 114, 121, 112, 116, 111, 46, 115, 117, 98, 116, 108, 101, 46, 100, 105, 103, 101, 115, 116, 40, 34, 83, 72, 65, 45, 50, 53, 54, 34, 44, 97, 41, 44, 105, 61, 71, 40, 115, 41, 59, 114, 101, 116, 117, 114, 110, 32, 116, 61, 61, 110, 117, 108, 108, 63, 40, 111, 46, 108, 111, 103, 40, 111, 46, 76, 101, 118, 101, 108, 46, 87, 97, 114, 110, 44, 34, 84, 104, 101, 32, 108, 105, 98, 114, 97, 114, 121, 32, 104, 97, 115, 104, 32, 105, 115, 32, 110, 111, 116, 32, 100, 101, 102, 105, 110, 101, 100, 32, 111, 114, 32, 101, 109, 112, 116, 121, 44, 32, 99, 97, 110, 110, 111, 116, 32, 99, 111, 114, 114, 101, 99, 116, 108, 121, 32, 118, 101, 114, 105, 102, 121, 32, 105, 110, 116, 101, 103, 114, 105, 116, 121, 46, 34, 41, 44, 34, 78, 79, 84, 95, 86, 69, 82, 73, 70, 73, 65, 66, 76, 69, 34, 41, 58, 105, 61, 61, 61, 116, 63, 40, 111, 46, 108, 111, 103, 40, 111, 46, 76, 101, 118, 101, 108, 46, 68, 101, 98, 117, 103, 44, 34, 68, 97, 116, 97, 32, 67, 97, 112, 116, 117, 114, 101, 32, 108, 105, 98, 114, 97, 114, 121, 32, 87, 65, 83, 77, 32, 105, 110, 116, 101, 103, 114, 105, 116, 121, 32, 104, 97, 115, 32, 98, 101, 101, 110, 32, 118, 101, 114, 105, 102, 105, 101, 100, 32, 99, 111, 114, 114, 101, 99, 116, 108, 121, 46, 34, 41, 44, 34, 86, 65, 76, 73, 68, 34, 41, 58, 40, 111, 46, 108, 111, 103, 40, 111, 46, 76, 101, 118, 101, 108, 46, 87, 97, 114, 110, 44, 96, 84, 104, 101, 32, 83, 99, 97, 110, 100, 105, 116, 32, 68, 97, 116, 97, 32, 67, 97, 112, 116, 117, 114, 101, 32, 108, 105, 98, 114, 97, 114, 121, 32, 87, 65, 83, 77, 32, 102, 105, 108, 101, 32, 102, 111, 117, 110, 100, 32, 97, 116, 32, 36, 123, 114, 125, 32, 115, 101, 101, 109, 115, 32, 105, 110, 118, 97, 108, 105, 100, 58, 32, 101, 120, 112, 101, 99, 116, 101, 100, 32, 102, 105, 108, 101, 32, 104, 97, 115, 104, 32, 100, 111, 101, 115, 110, 39, 116, 32, 109, 97, 116, 99, 104, 32, 40, 114, 101, 99, 101, 105, 118, 101, 100, 58, 32, 36, 123, 105, 125, 44, 32, 101, 120, 112, 101, 99, 116, 101, 100, 58, 32, 36, 123, 116, 125, 41, 46, 32, 80, 108, 101, 97, 115, 101, 32, 101, 110, 115, 117, 114, 101, 32, 116, 104, 101, 32, 99, 111, 114, 114, 101, 99, 116, 32, 83, 99, 97, 110, 100, 105, 116, 32, 68, 97, 116, 97, 32, 67, 97, 112, 116, 117, 114, 101, 32, 102, 105, 108, 101, 32, 40, 119, 105, 116, 104, 32, 99, 111, 114, 114, 101, 99, 116, 32, 118, 101, 114, 115, 105, 111, 110, 41, 32, 105, 115, 32, 114, 101, 116, 114, 105, 101, 118, 101, 100, 46, 96, 41, 44, 34, 73, 78, 86, 65, 76, 73, 68, 34, 41, 125, 99, 97, 116, 99, 104, 40, 97, 41, 123, 114, 101, 116, 117, 114, 110, 34, 78, 79, 84, 95, 86, 69, 82, 73, 70, 73, 65, 66, 76, 69, 34, 125, 125, 118, 97, 114, 32, 69, 61, 110, 101, 119, 32, 77, 97, 112, 40, 91, 91, 34, 98, 114, 34, 44, 52, 46, 52, 93, 44, 91, 34, 103, 122, 105, 112, 34, 44, 50, 46, 57, 93, 44, 91, 34, 110, 111, 110, 101, 34, 44, 49, 93, 93, 41, 59, 102, 117, 110, 99, 116, 105, 111, 110, 32, 89, 40, 101, 41, 123, 118, 97, 114, 32, 116, 59, 108, 101, 116, 32, 114, 61, 34, 99, 111, 110, 116, 101, 110, 116, 45, 101, 110, 99, 111, 100, 105, 110, 103, 34, 59, 105, 102, 40, 101, 61, 61, 110, 117, 108, 108, 124, 124, 101, 46, 103, 101, 116, 40, 114, 41, 61, 61, 110, 117, 108, 108, 41, 114, 101, 116, 117, 114, 110, 32, 69, 46, 103, 101, 116, 40, 34, 110, 111, 110, 101, 34, 41, 59, 108, 101, 116, 32, 97, 61, 110, 101, 119, 32, 83, 101, 116, 40, 40, 40, 116, 61, 101, 46, 103, 101, 116, 40, 114, 41, 41, 33, 61, 110, 117, 108, 108, 63, 116, 58, 34, 34, 41, 46, 115, 112, 108, 105, 116, 40, 34, 44, 34, 41, 46, 109, 97, 112, 40, 115, 61, 62, 115, 46, 116, 114, 105, 109, 40, 41, 41, 41, 59, 102, 111, 114, 40, 108, 101, 116, 91, 115, 44, 105, 93, 111, 102, 32, 69, 41, 105, 102, 40, 97, 46, 104, 97, 115, 40, 115, 41, 41, 114, 101, 116, 117, 114, 110, 32, 105, 59, 114, 101, 116, 117, 114, 110, 32, 69, 46, 103, 101, 116, 40, 34, 110, 111, 110, 101, 34, 41, 125, 102, 117, 110, 99, 116, 105, 111, 110, 32, 81, 40, 101, 41, 123, 118, 97, 114, 32, 116, 44, 114, 59, 105, 102, 40, 101, 61, 61, 110, 117, 108, 108, 41, 114, 101, 116, 117, 114, 110, 32, 48, 59, 108, 101, 116, 32, 97, 61, 40, 116, 61, 89, 40, 101, 41, 41, 33, 61, 110, 117, 108, 108, 63, 116, 58, 49, 44, 115, 61, 78, 117, 109, 98, 101, 114, 46, 112, 97, 114, 115, 101, 73, 110, 116, 40, 40, 114, 61, 101, 46, 103, 101, 116, 40, 34, 99, 111, 110, 116, 101, 110, 116, 45, 108, 101, 110, 103, 116, 104, 34, 41, 41, 33, 61, 110, 117, 108, 108, 63, 114, 58, 34, 48, 34, 44, 49, 48, 41, 59, 114, 101, 116, 117, 114, 110, 32, 78, 117, 109, 98, 101, 114, 46, 105, 115, 78, 97, 78, 40, 115, 41, 63, 48, 58, 77, 97, 116, 104, 46, 102, 108, 111, 111, 114, 40, 115, 42, 97, 42, 49, 48, 48, 41, 47, 49, 48, 48, 125, 102, 117, 110, 99, 116, 105, 111, 110, 32, 90, 40, 101, 41, 123, 108, 101, 116, 123, 112, 97, 116, 104, 110, 97, 109, 101, 58, 116, 125, 61, 110, 101, 119, 32, 85, 82, 76, 40, 101, 41, 59, 114, 101, 116, 117, 114, 110, 32, 116, 46, 101, 110, 100, 115, 87, 105, 116, 104, 40, 34, 115, 99, 97, 110, 100, 105, 116, 45, 100, 97, 116, 97, 99, 97, 112, 116, 117, 114, 101, 45, 115, 100, 107, 45, 105, 100, 46, 119, 97, 115, 109, 34, 41, 63, 82, 91, 34, 115, 99, 97, 110, 100, 105, 116, 45, 100, 97, 116, 97, 99, 97, 112, 116, 117, 114, 101, 45, 115, 100, 107, 45, 105, 100, 34, 93, 46, 98, 121, 116, 101, 115, 58, 116, 46, 101, 110, 100, 115, 87, 105, 116, 104, 40, 34, 115, 99, 97, 110, 100, 105, 116, 45, 100, 97, 116, 97, 99, 97, 112, 116, 117, 114, 101, 45, 115, 100, 107, 45, 98, 97, 114, 99, 111, 100, 101, 46, 119, 97, 115, 109, 34, 41, 63, 82, 91, 34, 115, 99, 97, 110, 100, 105, 116, 45, 100, 97, 116, 97, 99, 97, 112, 116, 117, 114, 101, 45, 115, 100, 107, 45, 98, 97, 114, 99, 111, 100, 101, 34, 93, 46, 98, 121, 116, 101, 115, 58, 116, 46, 101, 110, 100, 115, 87, 105, 116, 104, 40, 34, 115, 99, 97, 110, 100, 105, 116, 45, 100, 97, 116, 97, 99, 97, 112, 116, 117, 114, 101, 45, 115, 100, 107, 45, 98, 97, 114, 99, 111, 100, 101, 45, 115, 105, 109, 100, 46, 119, 97, 115, 109, 34, 41, 63, 82, 91, 34, 115, 99, 97, 110, 100, 105, 116, 45, 100, 97, 116, 97, 99, 97, 112, 116, 117, 114, 101, 45, 115, 100, 107, 45, 98, 97, 114, 99, 111, 100, 101, 45, 115, 105, 109, 100, 34, 93, 46, 98, 121, 116, 101, 115, 58, 116, 46, 101, 110, 100, 115, 87, 105, 116, 104, 40, 34, 115, 99, 97, 110, 100, 105, 116, 45, 100, 97, 116, 97, 99, 97, 112, 116, 117, 114, 101, 45, 115, 100, 107, 45, 105, 100, 45, 115, 105, 109, 100, 46, 119, 97, 115, 109, 34, 41, 63, 82, 91, 34, 115, 99, 97, 110, 100, 105, 116, 45, 100, 97, 116, 97, 99, 97, 112, 116, 117, 114, 101, 45, 115, 100, 107, 45, 105, 100, 45, 115, 105, 109, 100, 34, 93, 46, 98, 121, 116, 101, 115, 58, 48, 125, 118, 97, 114, 32, 101, 101, 61, 40, 101, 44, 116, 41, 61, 62, 123, 108, 101, 116, 32, 114, 61, 81, 40, 116, 41, 59, 114, 101, 116, 117, 114, 110, 32, 114, 61, 61, 61, 48, 63, 90, 40, 101, 41, 58, 114, 125, 59, 102, 117, 110, 99, 116, 105, 111, 110, 32, 116, 101, 40, 101, 44, 116, 44, 123, 111, 110, 80, 114, 111, 103, 114, 101, 115, 115, 58, 114, 44, 111, 110, 69, 114, 114, 111, 114, 58, 97, 44, 111, 110, 67, 111, 109, 112, 108, 101, 116, 101, 58, 115, 125, 41, 123, 108, 101, 116, 123, 98, 111, 100, 121, 58, 105, 44, 115, 116, 97, 116, 117, 115, 58, 110, 44, 115, 116, 97, 116, 117, 115, 84, 101, 120, 116, 58, 108, 44, 104, 101, 97, 100, 101, 114, 115, 58, 103, 125, 61, 116, 46, 99, 108, 111, 110, 101, 40, 41, 59, 105, 102, 40, 33, 105, 41, 114, 101, 116, 117, 114, 110, 32, 116, 59, 108, 101, 116, 32, 121, 61, 101, 101, 40, 101, 44, 103, 41, 44, 118, 61, 48, 44, 100, 61, 48, 44, 109, 61, 105, 46, 103, 101, 116, 82, 101, 97, 100, 101, 114, 40, 41, 44, 119, 61, 110, 101, 119, 32, 82, 101, 97, 100, 97, 98, 108, 101, 83, 116, 114, 101, 97, 109, 40, 123, 97, 115, 121, 110, 99, 32, 115, 116, 97, 114, 116, 40, 117, 41, 123, 97, 115, 121, 110, 99, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 112, 40, 41, 123, 116, 114, 121, 123, 108, 101, 116, 123, 100, 111, 110, 101, 58, 98, 44, 118, 97, 108, 117, 101, 58, 102, 125, 61, 97, 119, 97, 105, 116, 32, 109, 46, 114, 101, 97, 100, 40, 41, 59, 105, 102, 40, 98, 41, 123, 117, 46, 99, 108, 111, 115, 101, 40, 41, 44, 114, 61, 61, 110, 117, 108, 108, 124, 124, 114, 40, 123, 112, 101, 114, 99, 101, 110, 116, 97, 103, 101, 58, 49, 48, 48, 44, 108, 111, 97, 100, 101, 100, 66, 121, 116, 101, 115, 58, 118, 44, 112, 114, 105, 118, 97, 116, 101, 85, 114, 105, 58, 101, 125, 41, 44, 115, 61, 61, 110, 117, 108, 108, 124, 124, 115, 40, 123, 112, 101, 114, 99, 101, 110, 116, 97, 103, 101, 58, 49, 48, 48, 44, 108, 111, 97, 100, 101, 100, 66, 121, 116, 101, 115, 58, 118, 44, 112, 114, 105, 118, 97, 116, 101, 85, 114, 105, 58, 101, 125, 41, 59, 114, 101, 116, 117, 114, 110, 125, 118, 43, 61, 102, 46, 108, 101, 110, 103, 116, 104, 44, 121, 62, 48, 38, 38, 102, 46, 108, 101, 110, 103, 116, 104, 62, 48, 38, 38, 100, 60, 49, 48, 48, 63, 40, 100, 61, 78, 117, 109, 98, 101, 114, 40, 40, 118, 47, 121, 42, 49, 48, 48, 41, 46, 116, 111, 70, 105, 120, 101, 100, 40, 50, 41, 41, 44, 114, 61, 61, 110, 117, 108, 108, 124, 124, 114, 40, 123, 112, 101, 114, 99, 101, 110, 116, 97, 103, 101, 58, 100, 44, 108, 111, 97, 100, 101, 100, 66, 121, 116, 101, 115, 58, 118, 44, 112, 114, 105, 118, 97, 116, 101, 85, 114, 105, 58, 101, 125, 41, 41, 58, 121, 61, 61, 61, 48, 38, 38, 102, 46, 108, 101, 110, 103, 116, 104, 62, 48, 38, 38, 40, 114, 61, 61, 110, 117, 108, 108, 124, 124, 114, 40, 123, 112, 101, 114, 99, 101, 110, 116, 97, 103, 101, 58, 110, 117, 108, 108, 44, 108, 111, 97, 100, 101, 100, 66, 121, 116, 101, 115, 58, 118, 44, 112, 114, 105, 118, 97, 116, 101, 85, 114, 105, 58, 101, 125, 41, 41, 44, 117, 46, 101, 110, 113, 117, 101, 117, 101, 40, 102, 41, 44, 97, 119, 97, 105, 116, 32, 112, 40, 41, 125, 99, 97, 116, 99, 104, 40, 98, 41, 123, 116, 104, 114, 111, 119, 32, 97, 61, 61, 110, 117, 108, 108, 124, 124, 97, 40, 123, 101, 114, 114, 111, 114, 58, 98, 125, 41, 44, 98, 125, 125, 114, 101, 116, 117, 114, 110, 32, 112, 40, 41, 125, 125, 41, 59, 114, 101, 116, 117, 114, 110, 32, 110, 101, 119, 32, 82, 101, 115, 112, 111, 110, 115, 101, 40, 119, 44, 123, 104, 101, 97, 100, 101, 114, 115, 58, 110, 101, 119, 32, 72, 101, 97, 100, 101, 114, 115, 40, 103, 41, 44, 115, 116, 97, 116, 117, 115, 58, 110, 44, 115, 116, 97, 116, 117, 115, 84, 101, 120, 116, 58, 108, 125, 41, 125, 97, 115, 121, 110, 99, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 106, 40, 123, 119, 97, 115, 109, 85, 82, 73, 58, 101, 44, 97, 119, 97, 105, 116, 70, 117, 108, 108, 82, 101, 115, 112, 111, 110, 115, 101, 58, 116, 44, 111, 110, 80, 114, 111, 103, 114, 101, 115, 115, 58, 114, 125, 41, 123, 108, 101, 116, 32, 97, 61, 97, 119, 97, 105, 116, 32, 102, 101, 116, 99, 104, 40, 101, 41, 59, 105, 102, 40, 33, 97, 46, 111, 107, 41, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 69, 114, 114, 111, 114, 40, 96, 72, 84, 84, 80, 32, 115, 116, 97, 116, 117, 115, 32, 99, 111, 100, 101, 32, 105, 115, 32, 110, 111, 116, 32, 111, 107, 58, 32, 36, 123, 97, 46, 115, 116, 97, 116, 117, 115, 125, 44, 32, 36, 123, 97, 46, 115, 116, 97, 116, 117, 115, 84, 101, 120, 116, 125, 96, 41, 59, 114, 101, 116, 117, 114, 110, 32, 110, 101, 119, 32, 80, 114, 111, 109, 105, 115, 101, 40, 40, 115, 44, 105, 41, 61, 62, 123, 108, 101, 116, 32, 110, 61, 116, 101, 40, 101, 44, 97, 44, 123, 111, 110, 80, 114, 111, 103, 114, 101, 115, 115, 58, 114, 44, 111, 110, 69, 114, 114, 111, 114, 58, 40, 123, 101, 114, 114, 111, 114, 58, 108, 125, 41, 61, 62, 123, 105, 40, 108, 41, 125, 44, 111, 110, 67, 111, 109, 112, 108, 101, 116, 101, 58, 40, 41, 61, 62, 123, 116, 38, 38, 115, 40, 110, 41, 125, 125, 41, 59, 116, 124, 124, 115, 40, 110, 41, 125, 41, 125, 102, 117, 110, 99, 116, 105, 111, 110, 32, 114, 101, 40, 101, 44, 116, 44, 114, 44, 97, 44, 115, 41, 123, 97, 115, 121, 110, 99, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 40, 108, 41, 123, 116, 114, 121, 123, 108, 101, 116, 32, 103, 61, 97, 119, 97, 105, 116, 40, 108, 33, 61, 110, 117, 108, 108, 63, 108, 58, 97, 119, 97, 105, 116, 32, 106, 40, 123, 119, 97, 115, 109, 85, 82, 73, 58, 116, 44, 97, 119, 97, 105, 116, 70, 117, 108, 108, 82, 101, 115, 112, 111, 110, 115, 101, 58, 33, 48, 44, 111, 110, 80, 114, 111, 103, 114, 101, 115, 115, 58, 115, 125, 41, 41, 46, 97, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 40, 41, 59, 36, 40, 103, 44, 114, 44, 116, 41, 59, 108, 101, 116, 32, 121, 61, 97, 119, 97, 105, 116, 32, 115, 101, 108, 102, 46, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 40, 103, 44, 101, 41, 59, 97, 40, 121, 46, 105, 110, 115, 116, 97, 110, 99, 101, 44, 121, 46, 109, 111, 100, 117, 108, 101, 41, 125, 99, 97, 116, 99, 104, 40, 103, 41, 123, 111, 46, 108, 111, 103, 40, 111, 46, 76, 101, 118, 101, 108, 46, 69, 114, 114, 111, 114, 44, 103, 41, 44, 111, 46, 108, 111, 103, 40, 111, 46, 76, 101, 118, 101, 108, 46, 69, 114, 114, 111, 114, 44, 96, 67, 111, 117, 108, 100, 110, 39, 116, 32, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 32, 83, 99, 97, 110, 100, 105, 116, 32, 83, 68, 75, 32, 68, 97, 116, 97, 67, 97, 112, 116, 117, 114, 101, 32, 108, 105, 98, 114, 97, 114, 121, 32, 97, 116, 32, 36, 123, 116, 125, 44, 32, 100, 105, 100, 32, 121, 111, 117, 32, 99, 111, 110, 102, 105, 103, 117, 114, 101, 32, 116, 104, 101, 32, 112, 97, 116, 104, 32, 102, 111, 114, 32, 105, 116, 32, 99, 111, 114, 114, 101, 99, 116, 108, 121, 63, 96, 41, 125, 125, 97, 115, 121, 110, 99, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 110, 40, 41, 123, 108, 101, 116, 32, 108, 59, 116, 114, 121, 123, 108, 61, 97, 119, 97, 105, 116, 32, 106, 40, 123, 119, 97, 115, 109, 85, 82, 73, 58, 116, 44, 97, 119, 97, 105, 116, 70, 117, 108, 108, 82, 101, 115, 112, 111, 110, 115, 101, 58, 33, 49, 44, 111, 110, 80, 114, 111, 103, 114, 101, 115, 115, 58, 115, 125, 41, 44, 36, 40, 108, 46, 99, 108, 111, 110, 101, 40, 41, 46, 97, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 40, 41, 44, 114, 44, 116, 41, 59, 108, 101, 116, 32, 103, 61, 97, 119, 97, 105, 116, 32, 115, 101, 108, 102, 46, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 83, 116, 114, 101, 97, 109, 105, 110, 103, 40, 108, 44, 101, 41, 59, 97, 40, 103, 46, 105, 110, 115, 116, 97, 110, 99, 101, 44, 103, 46, 109, 111, 100, 117, 108, 101, 41, 59, 114, 101, 116, 117, 114, 110, 125, 99, 97, 116, 99, 104, 40, 103, 41, 123, 111, 46, 108, 111, 103, 40, 111, 46, 76, 101, 118, 101, 108, 46, 87, 97, 114, 110, 44, 103, 41, 44, 111, 46, 108, 111, 103, 40, 111, 46, 76, 101, 118, 101, 108, 46, 87, 97, 114, 110, 44, 34, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 32, 115, 116, 114, 101, 97, 109, 105, 110, 103, 32, 99, 111, 109, 112, 105, 108, 101, 32, 102, 97, 105, 108, 101, 100, 46, 32, 70, 97, 108, 108, 105, 110, 103, 32, 98, 97, 99, 107, 32, 116, 111, 32, 65, 114, 114, 97, 121, 66, 117, 102, 102, 101, 114, 32, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 105, 111, 110, 32, 40, 116, 104, 105, 115, 32, 119, 105, 108, 108, 32, 109, 97, 107, 101, 32, 116, 104, 105, 110, 103, 115, 32, 115, 108, 111, 119, 101, 114, 41, 34, 41, 44, 105, 40, 40, 108, 61, 61, 110, 117, 108, 108, 63, 118, 111, 105, 100, 32, 48, 58, 108, 46, 98, 111, 100, 121, 85, 115, 101, 100, 41, 61, 61, 61, 33, 48, 63, 118, 111, 105, 100, 32, 48, 58, 108, 41, 125, 125, 116, 121, 112, 101, 111, 102, 32, 115, 101, 108, 102, 46, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 46, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 83, 116, 114, 101, 97, 109, 105, 110, 103, 61, 61, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 63, 110, 40, 41, 58, 105, 40, 41, 125, 97, 115, 121, 110, 99, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 122, 40, 101, 44, 116, 44, 114, 44, 97, 41, 123, 114, 101, 116, 117, 114, 110, 32, 110, 101, 119, 32, 80, 114, 111, 109, 105, 115, 101, 40, 40, 115, 44, 105, 41, 61, 62, 123, 101, 40, 41, 46, 116, 104, 101, 110, 40, 115, 41, 46, 99, 97, 116, 99, 104, 40, 110, 61, 62, 123, 108, 101, 116, 32, 108, 61, 116, 42, 50, 59, 105, 102, 40, 108, 62, 114, 41, 123, 105, 40, 110, 41, 59, 114, 101, 116, 117, 114, 110, 125, 97, 40, 110, 41, 44, 115, 101, 108, 102, 46, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 61, 62, 123, 122, 40, 101, 44, 108, 44, 114, 44, 97, 41, 46, 116, 104, 101, 110, 40, 115, 41, 46, 99, 97, 116, 99, 104, 40, 105, 41, 125, 44, 116, 41, 125, 41, 125, 41, 125, 118, 97, 114, 32, 97, 101, 61, 99, 108, 97, 115, 115, 123, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 41, 123, 99, 40, 116, 104, 105, 115, 44, 34, 112, 114, 111, 109, 105, 115, 101, 34, 41, 44, 99, 40, 116, 104, 105, 115, 44, 34, 114, 101, 115, 111, 108, 118, 101, 34, 41, 44, 99, 40, 116, 104, 105, 115, 44, 34, 114, 101, 106, 101, 99, 116, 34, 41, 44, 116, 104, 105, 115, 46, 112, 114, 111, 109, 105, 115, 101, 61, 110, 101, 119, 32, 80, 114, 111, 109, 105, 115, 101, 40, 40, 101, 44, 116, 41, 61, 62, 123, 116, 104, 105, 115, 46, 114, 101, 106, 101, 99, 116, 61, 116, 44, 116, 104, 105, 115, 46, 114, 101, 115, 111, 108, 118, 101, 61, 101, 125, 41, 125, 125, 44, 80, 61, 99, 108, 97, 115, 115, 32, 101, 120, 116, 101, 110, 100, 115, 32, 69, 114, 114, 111, 114, 123, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 101, 41, 123, 115, 117, 112, 101, 114, 40, 101, 46, 109, 101, 115, 115, 97, 103, 101, 41, 44, 99, 40, 116, 104, 105, 115, 44, 34, 110, 97, 109, 101, 34, 41, 44, 99, 40, 116, 104, 105, 115, 44, 34, 109, 101, 115, 115, 97, 103, 101, 34, 41, 44, 79, 98, 106, 101, 99, 116, 46, 115, 101, 116, 80, 114, 111, 116, 111, 116, 121, 112, 101, 79, 102, 40, 116, 104, 105, 115, 44, 80, 46, 112, 114, 111, 116, 111, 116, 121, 112, 101, 41, 44, 116, 121, 112, 101, 111, 102, 32, 101, 46, 110, 97, 109, 101, 61, 61, 34, 115, 116, 114, 105, 110, 103, 34, 38, 38, 40, 116, 104, 105, 115, 46, 110, 97, 109, 101, 61, 101, 46, 110, 97, 109, 101, 41, 44, 116, 121, 112, 101, 111, 102, 32, 101, 46, 109, 101, 115, 115, 97, 103, 101, 61, 61, 34, 115, 116, 114, 105, 110, 103, 34, 38, 38, 40, 116, 104, 105, 115, 46, 109, 101, 115, 115, 97, 103, 101, 61, 101, 46, 109, 101, 115, 115, 97, 103, 101, 41, 125, 125, 59, 97, 115, 121, 110, 99, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 115, 101, 40, 101, 41, 123, 108, 101, 116, 32, 116, 44, 123, 112, 114, 101, 108, 111, 97, 100, 105, 110, 103, 58, 114, 44, 119, 114, 105, 116, 97, 98, 108, 101, 68, 97, 116, 97, 80, 97, 116, 104, 80, 114, 101, 108, 111, 97, 100, 58, 97, 44, 119, 114, 105, 116, 97, 98, 108, 101, 68, 97, 116, 97, 80, 97, 116, 104, 58, 115, 125, 61, 101, 44, 105, 61, 80, 114, 111, 109, 105, 115, 101, 46, 114, 101, 115, 111, 108, 118, 101, 40, 41, 44, 110, 61, 33, 49, 44, 108, 61, 33, 49, 59, 97, 115, 121, 110, 99, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 103, 40, 41, 123, 108, 101, 116, 32, 100, 61, 34, 70, 73, 76, 69, 95, 68, 65, 84, 65, 34, 44, 109, 44, 119, 44, 117, 44, 112, 44, 98, 59, 102, 117, 110, 99, 116, 105, 111, 110, 32, 102, 40, 41, 123, 99, 108, 101, 97, 114, 84, 105, 109, 101, 111, 117, 116, 40, 98, 41, 44, 117, 46, 114, 101, 115, 117, 108, 116, 46, 99, 108, 111, 115, 101, 40, 41, 44, 112, 46, 114, 101, 115, 117, 108, 116, 46, 99, 108, 111, 115, 101, 40, 41, 44, 109, 40, 48, 41, 125, 102, 117, 110, 99, 116, 105, 111, 110, 32, 73, 40, 41, 123, 116, 114, 121, 123, 108, 101, 116, 32, 68, 61, 91, 93, 44, 83, 61, 117, 46, 114, 101, 115, 117, 108, 116, 46, 116, 114, 97, 110, 115, 97, 99, 116, 105, 111, 110, 40, 100, 44, 34, 114, 101, 97, 100, 111, 110, 108, 121, 34, 41, 59, 83, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 101, 114, 114, 111, 114, 34, 44, 102, 41, 44, 83, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 97, 98, 111, 114, 116, 34, 44, 102, 41, 59, 108, 101, 116, 32, 104, 61, 83, 46, 111, 98, 106, 101, 99, 116, 83, 116, 111, 114, 101, 40, 100, 41, 46, 111, 112, 101, 110, 67, 117, 114, 115, 111, 114, 40, 41, 59, 104, 46, 111, 110, 115, 117, 99, 99, 101, 115, 115, 61, 40, 41, 61, 62, 123, 108, 101, 116, 32, 67, 61, 104, 46, 114, 101, 115, 117, 108, 116, 59, 105, 102, 40, 67, 61, 61, 110, 117, 108, 108, 41, 116, 114, 121, 123, 108, 101, 116, 32, 77, 61, 48, 44, 107, 61, 112, 46, 114, 101, 115, 117, 108, 116, 46, 116, 114, 97, 110, 115, 97, 99, 116, 105, 111, 110, 40, 100, 44, 34, 114, 101, 97, 100, 119, 114, 105, 116, 101, 34, 41, 44, 76, 61, 107, 46, 111, 98, 106, 101, 99, 116, 83, 116, 111, 114, 101, 40, 100, 41, 59, 107, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 101, 114, 114, 111, 114, 34, 44, 102, 41, 44, 107, 46, 97, 100, 100, 69, 118, 101, 110, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 34, 97, 98, 111, 114, 116, 34, 44, 102, 41, 44, 107, 46, 111, 110, 99, 111, 109, 112, 108, 101, 116, 101, 61, 40, 41, 61, 62, 123, 99, 108, 101, 97, 114, 84, 105, 109, 101, 111, 117, 116, 40, 98, 41, 44, 117, 46, 114, 101, 115, 117, 108, 116, 46, 99, 108, 111, 115, 101, 40, 41, 44, 112, 46, 114, 101, 115, 117, 108, 116, 46, 99, 108, 111, 115, 101, 40, 41, 44, 109, 40, 77, 41, 125, 59, 102, 111, 114, 40, 108, 101, 116, 32, 87, 32, 111, 102, 32, 68, 41, 123, 108, 101, 116, 32, 70, 61, 76, 46, 99, 111, 117, 110, 116, 40, 87, 46, 112, 114, 105, 109, 97, 114, 121, 75, 101, 121, 41, 59, 70, 46, 111, 110, 115, 117, 99, 99, 101, 115, 115, 61, 40, 41, 61, 62, 123, 70, 46, 114, 101, 115, 117, 108, 116, 61, 61, 61, 48, 38, 38, 40, 43, 43, 77, 44, 76, 46, 97, 100, 100, 40, 87, 46, 118, 97, 108, 117, 101, 44, 87, 46, 112, 114, 105, 109, 97, 114, 121, 75, 101, 121, 41, 41, 125, 44, 99, 108, 101, 97, 114, 84, 105, 109, 101, 111, 117, 116, 40, 98, 41, 44, 98, 61, 115, 101, 108, 102, 46, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 61, 62, 123, 111, 46, 108, 111, 103, 40, 111, 46, 76, 101, 118, 101, 108, 46, 87, 97, 114, 110, 44, 34, 73, 110, 100, 101, 120, 101, 100, 68, 66, 32, 100, 97, 116, 97, 98, 97, 115, 101, 32, 105, 115, 32, 98, 108, 111, 99, 107, 101, 100, 33, 32, 82, 101, 115, 101, 116, 116, 105, 110, 103, 32, 83, 99, 97, 110, 100, 105, 116, 32, 68, 97, 116, 97, 32, 67, 97, 112, 116, 117, 114, 101, 32, 108, 105, 98, 114, 97, 114, 121, 46, 46, 46, 34, 41, 44, 119, 40, 110, 101, 119, 32, 80, 40, 123, 110, 97, 109, 101, 58, 34, 66, 108, 111, 99, 107, 101, 100, 73, 110, 100, 101, 120, 101, 100, 68, 66, 34, 44, 109, 101, 115, 115, 97, 103, 101, 58, 34, 73, 110, 100, 101, 120, 101, 100, 68, 66, 32, 100, 97, 116, 97, 98, 97, 115, 101, 32, 105, 115, 32, 98, 108, 111, 99, 107, 101, 100, 34, 125, 41, 41, 125, 44, 53, 48, 48, 41, 125, 125, 99, 97, 116, 99, 104, 40, 77, 41, 123, 102, 46, 99, 97, 108, 108, 40, 123, 101, 114, 114, 111, 114, 58, 77, 125, 41, 125, 101, 108, 115, 101, 32, 68, 46, 112, 117, 115, 104, 40, 123, 118, 97, 108, 117, 101, 58, 67, 46, 118, 97, 108, 117, 101, 44, 112, 114, 105, 109, 97, 114, 121, 75, 101, 121, 58, 67, 46, 112, 114, 105, 109, 97, 114, 121, 75, 101, 121, 46, 116, 111, 83, 116, 114, 105, 110, 103, 40, 41, 46, 114, 101, 112, 108, 97, 99, 101, 40, 96, 36, 123, 97, 125, 47, 96, 44, 96, 36, 123, 115, 125, 47, 96, 41, 125, 41, 44, 67, 46, 99, 111, 110, 116, 105, 110, 117, 101, 40, 41, 125, 44, 104, 46, 111, 110, 101, 114, 114, 111, 114, 61, 102, 125, 99, 97, 116, 99, 104, 40, 68, 41, 123, 102, 46, 99, 97, 108, 108, 40, 123, 101, 114, 114, 111, 114, 58, 68, 125, 41, 125, 125, 114, 101, 116, 117, 114, 110, 32, 110, 101, 119, 32, 80, 114, 111, 109, 105, 115, 101, 40, 40, 68, 44, 83, 41, 61, 62, 123, 109, 61, 68, 44, 119, 61, 83, 44, 117, 61, 105, 110, 100, 101, 120, 101, 100, 68, 66, 46, 111, 112, 101, 110, 40, 97, 41, 44, 117, 46, 111, 110, 117, 112, 103, 114, 97, 100, 101, 110, 101, 101, 100, 101, 100, 61, 40, 41, 61, 62, 123, 116, 114, 121, 123, 117, 46, 114, 101, 115, 117, 108, 116, 46, 99, 114, 101, 97, 116, 101, 79, 98, 106, 101, 99, 116, 83, 116, 111, 114, 101, 40, 100, 41, 125, 99, 97, 116, 99, 104, 40, 104, 41, 123, 125, 125, 44, 117, 46, 111, 110, 115, 117, 99, 99, 101, 115, 115, 61, 40, 41, 61, 62, 123, 105, 102, 40, 33, 65, 114, 114, 97, 121, 46, 102, 114, 111, 109, 40, 117, 46, 114, 101, 115, 117, 108, 116, 46, 111, 98, 106, 101, 99, 116, 83, 116, 111, 114, 101, 78, 97, 109, 101, 115, 41, 46, 105, 110, 99, 108, 117, 100, 101, 115, 40, 100, 41, 41, 123, 68, 40, 48, 41, 59, 114, 101, 116, 117, 114, 110, 125, 112, 61, 105, 110, 100, 101, 120, 101, 100, 68, 66, 46, 111, 112, 101, 110, 40, 115, 41, 44, 112, 46, 111, 110, 117, 112, 103, 114, 97, 100, 101, 110, 101, 101, 100, 101, 100, 61, 40, 41, 61, 62, 123, 116, 114, 121, 123, 112, 46, 114, 101, 115, 117, 108, 116, 46, 99, 114, 101, 97, 116, 101, 79, 98, 106, 101, 99, 116, 83, 116, 111, 114, 101, 40, 100, 41, 125, 99, 97, 116, 99, 104, 40, 104, 41, 123, 125, 125, 44, 112, 46, 111, 110, 115, 117, 99, 99, 101, 115, 115, 61, 40, 41, 61, 62, 123, 73, 40, 41, 125, 44, 112, 46, 111, 110, 98, 108, 111, 99, 107, 101, 100, 61, 112, 46, 111, 110, 101, 114, 114, 111, 114, 61, 102, 125, 44, 117, 46, 111, 110, 98, 108, 111, 99, 107, 101, 100, 61, 117, 46, 111, 110, 101, 114, 114, 111, 114, 61, 102, 125, 41, 125, 97, 115, 121, 110, 99, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 121, 40, 100, 44, 109, 41, 123, 105, 102, 40, 116, 33, 61, 110, 117, 108, 108, 41, 114, 101, 116, 117, 114, 110, 32, 110, 61, 33, 48, 44, 110, 101, 119, 32, 80, 114, 111, 109, 105, 115, 101, 40, 40, 119, 44, 117, 41, 61, 62, 123, 40, 33, 114, 38, 38, 100, 63, 103, 40, 41, 58, 80, 114, 111, 109, 105, 115, 101, 46, 114, 101, 115, 111, 108, 118, 101, 40, 48, 41, 41, 46, 116, 104, 101, 110, 40, 112, 61, 62, 123, 105, 102, 40, 33, 114, 38, 38, 100, 38, 38, 33, 109, 38, 38, 112, 61, 61, 61, 48, 41, 123, 110, 61, 33, 49, 44, 119, 40, 41, 59, 114, 101, 116, 117, 114, 110, 125, 116, 40, 100, 44, 98, 61, 62, 123, 105, 102, 40, 110, 61, 33, 49, 44, 98, 33, 61, 110, 117, 108, 108, 41, 123, 117, 40, 98, 41, 59, 114, 101, 116, 117, 114, 110, 125, 119, 40, 41, 125, 41, 125, 41, 46, 99, 97, 116, 99, 104, 40, 117, 41, 125, 41, 125, 97, 115, 121, 110, 99, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 118, 40, 100, 44, 109, 61, 33, 49, 44, 119, 61, 33, 49, 41, 123, 114, 101, 116, 117, 114, 110, 40, 33, 108, 124, 124, 119, 41, 38, 38, 40, 110, 63, 40, 108, 61, 33, 48, 44, 105, 61, 105, 46, 116, 104, 101, 110, 40, 97, 115, 121, 110, 99, 40, 41, 61, 62, 40, 108, 61, 33, 49, 44, 121, 40, 100, 44, 109, 41, 41, 41, 41, 58, 105, 61, 121, 40, 100, 44, 109, 41, 41, 44, 105, 125, 116, 61, 70, 83, 46, 115, 121, 110, 99, 102, 115, 44, 70, 83, 46, 115, 121, 110, 99, 102, 115, 61, 40, 100, 44, 109, 41, 61, 62, 123, 108, 101, 116, 32, 119, 61, 109, 59, 109, 61, 117, 61, 62, 123, 119, 40, 117, 41, 125, 44, 118, 40, 100, 41, 46, 116, 104, 101, 110, 40, 109, 41, 46, 99, 97, 116, 99, 104, 40, 109, 41, 125, 59, 116, 114, 121, 123, 70, 83, 46, 109, 107, 100, 105, 114, 40, 115, 41, 125, 99, 97, 116, 99, 104, 40, 100, 41, 123, 105, 102, 40, 100, 46, 99, 111, 100, 101, 33, 61, 61, 34, 69, 69, 88, 73, 83, 84, 34, 41, 116, 104, 114, 111, 119, 32, 116, 61, 118, 111, 105, 100, 32, 48, 44, 100, 125, 114, 101, 116, 117, 114, 110, 32, 70, 83, 46, 109, 111, 117, 110, 116, 40, 73, 68, 66, 70, 83, 44, 123, 125, 44, 115, 41, 44, 118, 40, 33, 48, 44, 33, 48, 41, 125, 118, 97, 114, 32, 65, 59, 40, 101, 61, 62, 123, 102, 117, 110, 99, 116, 105, 111, 110, 32, 116, 40, 41, 123, 108, 101, 116, 32, 114, 61, 34, 54, 46, 49, 55, 46, 49, 34, 59, 105, 102, 40, 114, 61, 61, 110, 117, 108, 108, 41, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 123, 110, 97, 109, 101, 58, 34, 73, 110, 118, 97, 108, 105, 100, 32, 108, 105, 98, 114, 97, 114, 121, 32, 118, 101, 114, 115, 105, 111, 110, 34, 44, 109, 101, 115, 115, 97, 103, 101, 58, 34, 76, 105, 98, 114, 97, 114, 121, 32, 118, 101, 114, 115, 105, 111, 110, 32, 105, 115, 32, 110, 111, 116, 32, 100, 101, 102, 105, 110, 101, 100, 32, 111, 114, 32, 101, 109, 112, 116, 121, 46, 34, 125, 41, 59, 114, 101, 116, 117, 114, 110, 32, 114, 125, 101, 46, 115, 100, 107, 86, 101, 114, 115, 105, 111, 110, 61, 116, 125, 41, 40, 65, 124, 124, 40, 65, 61, 123, 125, 41, 41, 59, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 101, 40, 101, 41, 123, 114, 101, 116, 117, 114, 110, 47, 94, 104, 116, 116, 112, 115, 63, 58, 92, 47, 92, 47, 40, 63, 58, 91, 94, 46, 47, 93, 42, 92, 46, 41, 42, 99, 100, 110, 46, 106, 115, 100, 101, 108, 105, 118, 114, 46, 110, 101, 116, 92, 47, 47, 46, 116, 101, 115, 116, 40, 101, 41, 63, 123, 114, 101, 115, 117, 108, 116, 58, 33, 48, 44, 99, 100, 110, 66, 97, 115, 101, 85, 82, 76, 58, 34, 104, 116, 116, 112, 115, 58, 47, 47, 99, 100, 110, 46, 106, 115, 100, 101, 108, 105, 118, 114, 46, 110, 101, 116, 47, 110, 112, 109, 47, 34, 125, 58, 47, 94, 104, 116, 116, 112, 115, 63, 58, 92, 47, 92, 47, 40, 63, 58, 91, 94, 46, 47, 93, 42, 92, 46, 41, 42, 117, 110, 112, 107, 103, 46, 99, 111, 109, 92, 47, 47, 46, 116, 101, 115, 116, 40, 101, 41, 63, 123, 114, 101, 115, 117, 108, 116, 58, 33, 48, 44, 99, 100, 110, 66, 97, 115, 101, 85, 82, 76, 58, 34, 104, 116, 116, 112, 115, 58, 47, 47, 117, 110, 112, 107, 103, 46, 99, 111, 109, 47, 34, 125, 58, 123, 114, 101, 115, 117, 108, 116, 58, 33, 49, 44, 99, 100, 110, 66, 97, 115, 101, 85, 82, 76, 58, 34, 34, 125, 125, 102, 117, 110, 99, 116, 105, 111, 110, 32, 110, 101, 40, 101, 41, 123, 108, 101, 116, 32, 116, 61, 47, 115, 99, 97, 110, 100, 105, 116, 45, 119, 101, 98, 45, 100, 97, 116, 97, 99, 97, 112, 116, 117, 114, 101, 45, 91, 97, 45, 122, 93, 43, 47, 105, 46, 101, 120, 101, 99, 40, 101, 41, 59, 114, 101, 116, 117, 114, 110, 32, 116, 63, 116, 91, 48, 93, 58, 110, 117, 108, 108, 125, 102, 117, 110, 99, 116, 105, 111, 110, 32, 111, 101, 40, 101, 44, 116, 44, 114, 41, 123, 108, 101, 116, 32, 97, 61, 116, 44, 115, 61, 105, 101, 40, 97, 41, 59, 105, 102, 40, 115, 46, 114, 101, 115, 117, 108, 116, 41, 123, 108, 101, 116, 32, 110, 61, 110, 101, 40, 97, 41, 59, 110, 33, 61, 110, 117, 108, 108, 38, 38, 40, 97, 61, 96, 36, 123, 115, 46, 99, 100, 110, 66, 97, 115, 101, 85, 82, 76, 125, 36, 123, 110, 125, 64, 36, 123, 101, 125, 47, 98, 117, 105, 108, 100, 47, 101, 110, 103, 105, 110, 101, 47, 96, 41, 125, 108, 101, 116, 32, 105, 61, 114, 46, 114, 101, 112, 108, 97, 99, 101, 40, 34, 46, 119, 97, 115, 109, 34, 44, 34, 34, 41, 59, 114, 101, 116, 117, 114, 110, 32, 115, 46, 114, 101, 115, 117, 108, 116, 63, 123, 106, 115, 85, 82, 73, 58, 96, 36, 123, 97, 125, 36, 123, 105, 125, 46, 106, 115, 96, 44, 119, 97, 115, 109, 85, 82, 73, 58, 96, 36, 123, 97, 125, 36, 123, 105, 125, 46, 119, 97, 115, 109, 96, 125, 58, 123, 106, 115, 85, 82, 73, 58, 96, 36, 123, 97, 125, 36, 123, 105, 125, 46, 106, 115, 63, 118, 61, 36, 123, 101, 125, 96, 44, 119, 97, 115, 109, 85, 82, 73, 58, 96, 36, 123, 97, 125, 36, 123, 105, 125, 46, 119, 97, 115, 109, 63, 118, 61, 36, 123, 101, 125, 96, 125, 125, 102, 117, 110, 99, 116, 105, 111, 110, 32, 108, 101, 40, 41, 123, 114, 101, 116, 117, 114, 110, 32, 87, 101, 98, 65, 115, 115, 101, 109, 98, 108, 121, 46, 118, 97, 108, 105, 100, 97, 116, 101, 40, 110, 101, 119, 32, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 91, 48, 44, 57, 55, 44, 49, 49, 53, 44, 49, 48, 57, 44, 49, 44, 48, 44, 48, 44, 48, 44, 49, 44, 53, 44, 49, 44, 57, 54, 44, 48, 44, 49, 44, 49, 50, 51, 44, 51, 44, 50, 44, 49, 44, 48, 44, 49, 48, 44, 49, 48, 44, 49, 44, 56, 44, 48, 44, 54, 53, 44, 49, 44, 50, 53, 51, 44, 49, 53, 44, 50, 53, 51, 44, 57, 56, 44, 49, 49, 93, 41, 41, 125, 118, 97, 114, 32, 84, 61, 99, 108, 97, 115, 115, 123, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 101, 44, 116, 41, 123, 99, 40, 116, 104, 105, 115, 44, 34, 108, 97, 115, 116, 85, 115, 101, 100, 77, 111, 100, 117, 108, 101, 77, 105, 114, 114, 111, 114, 65, 120, 105, 115, 34, 41, 44, 99, 40, 116, 104, 105, 115, 44, 34, 99, 111, 110, 116, 101, 120, 116, 34, 41, 44, 99, 40, 116, 104, 105, 115, 44, 34, 77, 65, 88, 95, 78, 85, 77, 66, 69, 82, 95, 79, 70, 95, 73, 77, 65, 71, 69, 83, 95, 73, 78, 95, 70, 82, 65, 77, 69, 95, 68, 65, 84, 65, 95, 80, 79, 79, 76, 34, 44, 49, 48, 41, 44, 99, 40, 116, 104, 105, 115, 44, 34, 108, 105, 98, 114, 97, 114, 121, 76, 111, 97, 100, 105, 110, 103, 80, 114, 111, 109, 105, 115, 101, 34, 41, 44, 99, 40, 116, 104, 105, 115, 44, 34, 119, 114, 105, 116, 97, 98, 108, 101, 68, 97, 116, 97, 80, 97, 116, 104, 34, 41, 44, 99, 40, 116, 104, 105, 115, 44, 34, 114, 101, 115, 111, 117, 114, 99, 101, 80, 97, 116, 104, 34, 41, 44, 99, 40, 116, 104, 105, 115, 44, 34, 95, 105, 115, 68, 114, 97, 119, 76, 111, 111, 112, 82, 117, 110, 110, 105, 110, 103, 34, 44, 33, 49, 41, 44, 99, 40, 116, 104, 105, 115, 44, 34, 114, 101, 100, 114, 97, 119, 73, 110, 116, 101, 114, 118, 97, 108, 34, 44, 49, 101, 51, 47, 51, 48, 41, 44, 99, 40, 116, 104, 105, 115, 44, 34, 114, 101, 100, 114, 97, 119, 82, 101, 113, 117, 101, 115, 116, 115, 34, 44, 91, 93, 41, 44, 99, 40, 116, 104, 105, 115, 44, 34, 108, 111, 111, 112, 84, 105, 109, 101, 111, 117, 116, 73, 100, 34, 41, 44, 99, 40, 116, 104, 105, 115, 44, 34, 99, 111, 110, 116, 101, 120, 116, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 101, 114, 34, 41, 44, 99, 40, 116, 104, 105, 115, 44, 34, 105, 109, 97, 103, 101, 70, 114, 97, 109, 101, 83, 111, 117, 114, 99, 101, 34, 41, 44, 99, 40, 116, 104, 105, 115, 44, 34, 118, 105, 101, 119, 34, 41, 44, 99, 40, 116, 104, 105, 115, 44, 34, 108, 97, 115, 116, 70, 114, 97, 109, 101, 67, 111, 117, 110, 116, 101, 114, 34, 44, 45, 49, 41, 44, 99, 40, 116, 104, 105, 115, 44, 34, 102, 114, 97, 109, 101, 68, 97, 116, 97, 80, 111, 111, 108, 34, 44, 110, 101, 119, 32, 77, 97, 112, 41, 44, 99, 40, 116, 104, 105, 115, 44, 34, 109, 111, 100, 117, 108, 101, 72, 97, 110, 100, 108, 101, 114, 34, 41, 44, 99, 40, 116, 104, 105, 115, 44, 34, 119, 111, 114, 107, 101, 114, 70, 117, 110, 99, 116, 105, 111, 110, 115, 34, 41, 44, 116, 104, 105, 115, 46, 109, 111, 100, 117, 108, 101, 72, 97, 110, 100, 108, 101, 114, 61, 101, 44, 116, 104, 105, 115, 46, 119, 111, 114, 107, 101, 114, 70, 117, 110, 99, 116, 105, 111, 110, 115, 61, 116, 44, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 80, 114, 111, 103, 114, 101, 115, 115, 67, 97, 108, 108, 98, 97, 99, 107, 61, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 80, 114, 111, 103, 114, 101, 115, 115, 67, 97, 108, 108, 98, 97, 99, 107, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 125, 95, 108, 111, 97, 100, 80, 114, 111, 103, 114, 101, 115, 115, 67, 97, 108, 108, 98, 97, 99, 107, 40, 101, 41, 123, 116, 104, 105, 115, 46, 119, 111, 114, 107, 101, 114, 70, 117, 110, 99, 116, 105, 111, 110, 115, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 123, 116, 121, 112, 101, 58, 34, 108, 111, 97, 100, 76, 105, 98, 114, 97, 114, 121, 80, 114, 111, 103, 114, 101, 115, 115, 34, 44, 112, 97, 121, 108, 111, 97, 100, 58, 101, 125, 41, 125, 103, 101, 116, 32, 77, 111, 100, 117, 108, 101, 40, 41, 123, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 109, 111, 100, 117, 108, 101, 72, 97, 110, 100, 108, 101, 114, 46, 103, 101, 116, 40, 41, 125, 108, 111, 97, 100, 76, 105, 98, 114, 97, 114, 121, 40, 101, 41, 123, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 108, 105, 98, 114, 97, 114, 121, 76, 111, 97, 100, 105, 110, 103, 80, 114, 111, 109, 105, 115, 101, 33, 61, 110, 117, 108, 108, 63, 116, 104, 105, 115, 46, 108, 105, 98, 114, 97, 114, 121, 76, 111, 97, 100, 105, 110, 103, 80, 114, 111, 109, 105, 115, 101, 58, 40, 116, 104, 105, 115, 46, 108, 105, 98, 114, 97, 114, 121, 76, 111, 97, 100, 105, 110, 103, 80, 114, 111, 109, 105, 115, 101, 61, 116, 104, 105, 115, 46, 115, 101, 116, 117, 112, 40, 101, 46, 108, 105, 98, 114, 97, 114, 121, 76, 111, 99, 97, 116, 105, 111, 110, 44, 101, 46, 108, 111, 99, 97, 116, 105, 111, 110, 80, 97, 116, 104, 44, 101, 46, 112, 114, 101, 108, 111, 97, 100, 69, 110, 103, 105, 110, 101, 44, 101, 46, 119, 114, 105, 116, 97, 98, 108, 101, 68, 97, 116, 97, 80, 97, 116, 104, 79, 118, 101, 114, 114, 105, 100, 101, 41, 44, 116, 104, 105, 115, 46, 108, 105, 98, 114, 97, 114, 121, 76, 111, 97, 100, 105, 110, 103, 80, 114, 111, 109, 105, 115, 101, 41, 125, 99, 114, 101, 97, 116, 101, 67, 111, 110, 116, 101, 120, 116, 40, 101, 41, 123, 108, 101, 116, 32, 116, 61, 116, 104, 105, 115, 46, 103, 101, 116, 77, 111, 100, 101, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 101, 114, 115, 40, 41, 59, 116, 104, 105, 115, 46, 99, 111, 110, 116, 101, 120, 116, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 101, 114, 61, 110, 101, 119, 32, 116, 104, 105, 115, 46, 77, 111, 100, 117, 108, 101, 46, 68, 97, 116, 97, 67, 97, 112, 116, 117, 114, 101, 67, 111, 110, 116, 101, 120, 116, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 101, 114, 40, 116, 104, 105, 115, 46, 119, 114, 105, 116, 97, 98, 108, 101, 68, 97, 116, 97, 80, 97, 116, 104, 44, 101, 46, 100, 101, 118, 105, 99, 101, 73, 100, 44, 101, 46, 99, 111, 110, 116, 101, 120, 116, 46, 100, 101, 118, 105, 99, 101, 77, 111, 100, 101, 108, 78, 97, 109, 101, 44, 101, 46, 100, 111, 109, 97, 105, 110, 44, 116, 44, 101, 46, 100, 101, 108, 97, 121, 101, 100, 82, 101, 103, 105, 115, 116, 114, 97, 116, 105, 111, 110, 44, 101, 46, 104, 105, 103, 104, 69, 110, 100, 66, 108, 117, 114, 114, 121, 82, 101, 99, 111, 103, 110, 105, 116, 105, 111, 110, 44, 116, 104, 105, 115, 46, 114, 101, 115, 111, 117, 114, 99, 101, 80, 97, 116, 104, 41, 59, 108, 101, 116, 32, 114, 61, 116, 104, 105, 115, 46, 99, 111, 110, 116, 101, 120, 116, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 101, 114, 46, 99, 111, 110, 116, 101, 120, 116, 70, 114, 111, 109, 74, 115, 111, 110, 40, 74, 83, 79, 78, 46, 115, 116, 114, 105, 110, 103, 105, 102, 121, 40, 101, 46, 99, 111, 110, 116, 101, 120, 116, 41, 41, 44, 97, 61, 114, 46, 103, 101, 116, 86, 105, 101, 119, 40, 41, 59, 116, 104, 105, 115, 46, 99, 111, 110, 116, 101, 120, 116, 61, 114, 46, 103, 101, 116, 67, 111, 110, 116, 101, 120, 116, 40, 41, 59, 108, 101, 116, 32, 115, 61, 116, 104, 105, 115, 46, 77, 111, 100, 117, 108, 101, 46, 68, 97, 116, 97, 67, 97, 112, 116, 117, 114, 101, 67, 111, 110, 116, 101, 120, 116, 76, 105, 115, 116, 101, 110, 101, 114, 46, 101, 120, 116, 101, 110, 100, 40, 34, 68, 97, 116, 97, 67, 97, 112, 116, 117, 114, 101, 67, 111, 110, 116, 101, 120, 116, 76, 105, 115, 116, 101, 110, 101, 114, 34, 44, 123, 100, 105, 100, 67, 104, 97, 110, 103, 101, 83, 116, 97, 116, 117, 115, 58, 40, 110, 44, 108, 41, 61, 62, 123, 116, 104, 105, 115, 46, 99, 111, 110, 116, 101, 120, 116, 68, 105, 100, 67, 104, 97, 110, 103, 101, 83, 116, 97, 116, 117, 115, 40, 74, 83, 79, 78, 46, 112, 97, 114, 115, 101, 40, 108, 46, 116, 111, 74, 115, 111, 110, 40, 41, 41, 41, 125, 44, 100, 105, 100, 83, 116, 97, 114, 116, 79, 98, 115, 101, 114, 118, 105, 110, 103, 67, 111, 110, 116, 101, 120, 116, 58, 40, 41, 61, 62, 123, 116, 104, 105, 115, 46, 100, 105, 100, 83, 116, 97, 114, 116, 79, 98, 115, 101, 114, 118, 105, 110, 103, 67, 111, 110, 116, 101, 120, 116, 40, 41, 125, 125, 41, 44, 105, 61, 110, 101, 119, 32, 115, 59, 116, 104, 105, 115, 46, 99, 111, 110, 116, 101, 120, 116, 46, 97, 100, 100, 76, 105, 115, 116, 101, 110, 101, 114, 40, 105, 41, 44, 105, 46, 100, 101, 108, 101, 116, 101, 40, 41, 44, 116, 104, 105, 115, 46, 115, 101, 116, 86, 105, 101, 119, 40, 97, 41, 125, 103, 101, 116, 77, 111, 100, 101, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 101, 114, 115, 40, 41, 123, 114, 101, 116, 117, 114, 110, 32, 110, 101, 119, 32, 116, 104, 105, 115, 46, 77, 111, 100, 117, 108, 101, 46, 86, 101, 99, 116, 111, 114, 68, 97, 116, 97, 67, 97, 112, 116, 117, 114, 101, 77, 111, 100, 101, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 101, 114, 125, 115, 101, 116, 70, 114, 97, 109, 101, 83, 111, 117, 114, 99, 101, 40, 101, 41, 123, 118, 97, 114, 32, 116, 59, 116, 104, 105, 115, 46, 108, 97, 115, 116, 85, 115, 101, 100, 77, 111, 100, 117, 108, 101, 77, 105, 114, 114, 111, 114, 65, 120, 105, 115, 61, 116, 104, 105, 115, 46, 109, 97, 112, 77, 105, 114, 114, 111, 114, 65, 120, 105, 115, 79, 110, 77, 111, 100, 117, 108, 101, 40, 101, 41, 44, 40, 116, 61, 116, 104, 105, 115, 46, 105, 109, 97, 103, 101, 70, 114, 97, 109, 101, 83, 111, 117, 114, 99, 101, 41, 61, 61, 110, 117, 108, 108, 124, 124, 116, 46, 100, 101, 108, 101, 116, 101, 40, 41, 44, 116, 104, 105, 115, 46, 105, 109, 97, 103, 101, 70, 114, 97, 109, 101, 83, 111, 117, 114, 99, 101, 61, 110, 101, 119, 32, 116, 104, 105, 115, 46, 77, 111, 100, 117, 108, 101, 46, 73, 109, 97, 103, 101, 66, 117, 102, 102, 101, 114, 70, 114, 97, 109, 101, 83, 111, 117, 114, 99, 101, 40, 116, 104, 105, 115, 46, 108, 97, 115, 116, 85, 115, 101, 100, 77, 111, 100, 117, 108, 101, 77, 105, 114, 114, 111, 114, 65, 120, 105, 115, 41, 44, 116, 104, 105, 115, 46, 99, 111, 110, 116, 101, 120, 116, 46, 115, 101, 116, 70, 114, 97, 109, 101, 83, 111, 117, 114, 99, 101, 40, 116, 104, 105, 115, 46, 105, 109, 97, 103, 101, 70, 114, 97, 109, 101, 83, 111, 117, 114, 99, 101, 41, 125, 112, 114, 111, 99, 101, 115, 115, 70, 114, 97, 109, 101, 40, 101, 41, 123, 118, 97, 114, 32, 116, 59, 105, 102, 40, 116, 104, 105, 115, 46, 99, 111, 110, 116, 101, 120, 116, 61, 61, 110, 117, 108, 108, 41, 114, 101, 116, 117, 114, 110, 123, 112, 97, 121, 108, 111, 97, 100, 58, 101, 44, 116, 114, 97, 110, 115, 102, 101, 114, 97, 98, 108, 101, 115, 58, 91, 101, 46, 100, 97, 116, 97, 46, 98, 117, 102, 102, 101, 114, 93, 125, 59, 108, 101, 116, 32, 114, 61, 101, 46, 100, 97, 116, 97, 44, 97, 61, 116, 104, 105, 115, 46, 77, 111, 100, 117, 108, 101, 46, 97, 108, 108, 111, 99, 97, 116, 101, 85, 105, 110, 116, 56, 65, 114, 114, 97, 121, 40, 114, 46, 98, 121, 116, 101, 76, 101, 110, 103, 116, 104, 41, 59, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 77, 111, 100, 117, 108, 101, 46, 72, 69, 65, 80, 85, 56, 46, 115, 101, 116, 40, 114, 44, 97, 41, 44, 40, 116, 61, 116, 104, 105, 115, 46, 105, 109, 97, 103, 101, 70, 114, 97, 109, 101, 83, 111, 117, 114, 99, 101, 41, 61, 61, 110, 117, 108, 108, 124, 124, 116, 46, 111, 117, 116, 112, 117, 116, 70, 114, 97, 109, 101, 40, 97, 44, 101, 46, 119, 105, 100, 116, 104, 44, 101, 46, 104, 101, 105, 103, 104, 116, 44, 116, 104, 105, 115, 46, 77, 111, 100, 117, 108, 101, 46, 73, 109, 97, 103, 101, 66, 117, 102, 102, 101, 114, 70, 111, 114, 109, 97, 116, 46, 82, 103, 98, 97, 56, 56, 56, 56, 41, 44, 123, 112, 97, 121, 108, 111, 97, 100, 58, 101, 44, 116, 114, 97, 110, 115, 102, 101, 114, 97, 98, 108, 101, 115, 58, 91, 101, 46, 100, 97, 116, 97, 46, 98, 117, 102, 102, 101, 114, 93, 125, 125, 117, 112, 100, 97, 116, 101, 67, 111, 110, 116, 101, 120, 116, 40, 101, 41, 123, 105, 102, 40, 116, 104, 105, 115, 46, 99, 111, 110, 116, 101, 120, 116, 33, 61, 110, 117, 108, 108, 38, 38, 116, 104, 105, 115, 46, 99, 111, 110, 116, 101, 120, 116, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 101, 114, 33, 61, 110, 117, 108, 108, 41, 123, 108, 101, 116, 32, 116, 61, 116, 104, 105, 115, 46, 99, 111, 110, 116, 101, 120, 116, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 101, 114, 46, 117, 112, 100, 97, 116, 101, 67, 111, 110, 116, 101, 120, 116, 70, 114, 111, 109, 74, 115, 111, 110, 40, 116, 104, 105, 115, 46, 99, 111, 110, 116, 101, 120, 116, 44, 116, 104, 105, 115, 46, 118, 105, 101, 119, 44, 74, 83, 79, 78, 46, 115, 116, 114, 105, 110, 103, 105, 102, 121, 40, 101, 46, 99, 111, 110, 116, 101, 120, 116, 41, 41, 59, 116, 104, 105, 115, 46, 99, 111, 110, 116, 101, 120, 116, 61, 116, 46, 103, 101, 116, 67, 111, 110, 116, 101, 120, 116, 40, 41, 59, 108, 101, 116, 32, 114, 61, 116, 46, 103, 101, 116, 86, 105, 101, 119, 40, 41, 59, 114, 33, 61, 110, 117, 108, 108, 38, 38, 101, 46, 118, 105, 101, 119, 33, 61, 110, 117, 108, 108, 38, 38, 114, 46, 115, 101, 116, 86, 105, 101, 119, 83, 105, 122, 101, 40, 101, 46, 118, 105, 101, 119, 46, 119, 105, 100, 116, 104, 44, 101, 46, 118, 105, 101, 119, 46, 104, 101, 105, 103, 104, 116, 41, 44, 116, 104, 105, 115, 46, 115, 101, 116, 86, 105, 101, 119, 40, 114, 41, 44, 111, 46, 108, 111, 103, 40, 111, 46, 76, 101, 118, 101, 108, 46, 68, 101, 98, 117, 103, 44, 34, 99, 111, 110, 116, 101, 120, 116, 32, 117, 112, 100, 97, 116, 101, 100, 34, 44, 101, 41, 125, 125, 114, 101, 112, 111, 114, 116, 67, 97, 109, 101, 114, 97, 80, 114, 111, 112, 101, 114, 116, 105, 101, 115, 40, 101, 41, 123, 116, 104, 105, 115, 46, 99, 111, 110, 116, 101, 120, 116, 46, 115, 101, 116, 67, 97, 109, 101, 114, 97, 80, 114, 111, 112, 101, 114, 116, 105, 101, 115, 40, 101, 46, 100, 101, 118, 105, 99, 101, 73, 100, 44, 101, 46, 105, 115, 70, 114, 111, 110, 116, 70, 97, 99, 105, 110, 103, 44, 101, 46, 104, 97, 115, 65, 117, 116, 111, 102, 111, 99, 117, 115, 41, 125, 100, 105, 115, 112, 111, 115, 101, 40, 41, 123, 116, 104, 105, 115, 46, 99, 111, 110, 116, 101, 120, 116, 46, 100, 105, 115, 112, 111, 115, 101, 40, 41, 125, 101, 120, 116, 114, 97, 99, 116, 67, 101, 110, 116, 97, 117, 114, 117, 115, 76, 105, 99, 101, 110, 115, 101, 40, 101, 41, 123, 114, 101, 116, 117, 114, 110, 123, 112, 97, 121, 108, 111, 97, 100, 58, 123, 99, 101, 110, 116, 97, 117, 114, 117, 115, 58, 123, 108, 105, 99, 101, 110, 115, 101, 75, 101, 121, 58, 116, 104, 105, 115, 46, 77, 111, 100, 117, 108, 101, 46, 76, 105, 99, 101, 110, 115, 101, 85, 116, 105, 108, 115, 46, 103, 101, 116, 66, 108, 105, 110, 107, 73, 100, 76, 105, 99, 101, 110, 115, 101, 75, 101, 121, 40, 101, 41, 125, 125, 125, 125, 99, 111, 110, 118, 101, 114, 116, 84, 111, 76, 111, 97, 100, 97, 98, 108, 101, 70, 114, 97, 109, 101, 68, 97, 116, 97, 40, 101, 41, 123, 108, 101, 116, 32, 116, 61, 116, 104, 105, 115, 46, 103, 101, 116, 78, 101, 120, 116, 70, 114, 97, 109, 101, 73, 100, 40, 41, 59, 116, 104, 105, 115, 46, 102, 114, 97, 109, 101, 68, 97, 116, 97, 80, 111, 111, 108, 46, 115, 101, 116, 40, 116, 44, 110, 101, 119, 32, 85, 105, 110, 116, 56, 67, 108, 97, 109, 112, 101, 100, 65, 114, 114, 97, 121, 40, 101, 46, 103, 101, 116, 70, 114, 97, 109, 101, 68, 97, 116, 97, 40, 41, 41, 41, 59, 108, 101, 116, 32, 114, 61, 116, 104, 105, 115, 46, 108, 97, 115, 116, 85, 115, 101, 100, 77, 111, 100, 117, 108, 101, 77, 105, 114, 114, 111, 114, 65, 120, 105, 115, 33, 61, 110, 117, 108, 108, 63, 116, 104, 105, 115, 46, 108, 97, 115, 116, 85, 115, 101, 100, 77, 111, 100, 117, 108, 101, 77, 105, 114, 114, 111, 114, 65, 120, 105, 115, 33, 61, 61, 116, 104, 105, 115, 46, 77, 111, 100, 117, 108, 101, 46, 65, 120, 105, 115, 46, 78, 111, 110, 101, 58, 33, 49, 59, 114, 101, 116, 117, 114, 110, 123, 102, 114, 97, 109, 101, 73, 100, 58, 116, 44, 119, 105, 100, 116, 104, 58, 101, 46, 103, 101, 116, 87, 105, 100, 116, 104, 40, 41, 44, 104, 101, 105, 103, 104, 116, 58, 101, 46, 103, 101, 116, 72, 101, 105, 103, 104, 116, 40, 41, 44, 105, 115, 70, 114, 97, 109, 101, 83, 111, 117, 114, 99, 101, 77, 105, 114, 114, 111, 114, 101, 100, 58, 114, 125, 125, 114, 101, 113, 117, 101, 115, 116, 70, 114, 97, 109, 101, 68, 97, 116, 97, 40, 101, 41, 123, 108, 101, 116, 32, 116, 61, 116, 104, 105, 115, 46, 102, 114, 97, 109, 101, 68, 97, 116, 97, 80, 111, 111, 108, 46, 103, 101, 116, 40, 101, 41, 59, 114, 101, 116, 117, 114, 110, 32, 116, 61, 61, 110, 117, 108, 108, 63, 123, 112, 97, 121, 108, 111, 97, 100, 58, 123, 100, 97, 116, 97, 58, 110, 117, 108, 108, 125, 125, 58, 123, 112, 97, 121, 108, 111, 97, 100, 58, 123, 100, 97, 116, 97, 58, 116, 125, 44, 116, 114, 97, 110, 115, 102, 101, 114, 97, 98, 108, 101, 115, 58, 91, 116, 46, 98, 117, 102, 102, 101, 114, 93, 125, 125, 100, 101, 108, 101, 116, 101, 70, 114, 97, 109, 101, 68, 97, 116, 97, 40, 101, 41, 123, 116, 104, 105, 115, 46, 102, 114, 97, 109, 101, 68, 97, 116, 97, 80, 111, 111, 108, 46, 100, 101, 108, 101, 116, 101, 40, 101, 41, 125, 103, 101, 116, 78, 101, 120, 116, 70, 114, 97, 109, 101, 73, 100, 40, 41, 123, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 108, 97, 115, 116, 70, 114, 97, 109, 101, 67, 111, 117, 110, 116, 101, 114, 43, 43, 44, 116, 104, 105, 115, 46, 108, 97, 115, 116, 70, 114, 97, 109, 101, 67, 111, 117, 110, 116, 101, 114, 62, 61, 116, 104, 105, 115, 46, 77, 65, 88, 95, 78, 85, 77, 66, 69, 82, 95, 79, 70, 95, 73, 77, 65, 71, 69, 83, 95, 73, 78, 95, 70, 82, 65, 77, 69, 95, 68, 65, 84, 65, 95, 80, 79, 79, 76, 38, 38, 40, 116, 104, 105, 115, 46, 108, 97, 115, 116, 70, 114, 97, 109, 101, 67, 111, 117, 110, 116, 101, 114, 61, 48, 41, 44, 116, 104, 105, 115, 46, 108, 97, 115, 116, 70, 114, 97, 109, 101, 67, 111, 117, 110, 116, 101, 114, 125, 115, 101, 116, 86, 105, 101, 119, 40, 101, 41, 123, 116, 104, 105, 115, 46, 118, 105, 101, 119, 61, 101, 44, 116, 104, 105, 115, 46, 115, 101, 116, 86, 105, 101, 119, 82, 101, 102, 114, 101, 115, 104, 72, 97, 110, 100, 108, 101, 114, 40, 101, 41, 44, 101, 61, 61, 110, 117, 108, 108, 38, 38, 40, 116, 104, 105, 115, 46, 105, 115, 68, 114, 97, 119, 76, 111, 111, 112, 82, 117, 110, 110, 105, 110, 103, 61, 33, 49, 44, 116, 104, 105, 115, 46, 115, 101, 110, 100, 86, 105, 101, 119, 82, 101, 102, 114, 101, 115, 104, 67, 111, 109, 109, 97, 110, 100, 115, 40, 91, 93, 41, 41, 125, 99, 111, 110, 116, 101, 120, 116, 68, 105, 100, 67, 104, 97, 110, 103, 101, 83, 116, 97, 116, 117, 115, 40, 101, 41, 123, 118, 97, 114, 32, 116, 44, 114, 59, 105, 102, 40, 101, 46, 99, 111, 100, 101, 61, 61, 61, 50, 54, 48, 41, 123, 108, 101, 116, 32, 97, 59, 105, 102, 40, 40, 116, 61, 108, 111, 99, 97, 116, 105, 111, 110, 46, 104, 114, 101, 102, 41, 33, 61, 110, 117, 108, 108, 38, 38, 116, 46, 115, 116, 97, 114, 116, 115, 87, 105, 116, 104, 40, 34, 98, 108, 111, 98, 58, 110, 117, 108, 108, 47, 34, 41, 41, 97, 61, 34, 108, 111, 99, 97, 108, 104, 111, 115, 116, 34, 59, 101, 108, 115, 101, 123, 108, 101, 116, 32, 115, 61, 40, 40, 114, 61, 108, 111, 99, 97, 116, 105, 111, 110, 46, 112, 97, 116, 104, 110, 97, 109, 101, 41, 61, 61, 110, 117, 108, 108, 63, 118, 111, 105, 100, 32, 48, 58, 114, 46, 108, 101, 110, 103, 116, 104, 41, 62, 49, 38, 38, 33, 108, 111, 99, 97, 116, 105, 111, 110, 46, 112, 97, 116, 104, 110, 97, 109, 101, 46, 115, 116, 97, 114, 116, 115, 87, 105, 116, 104, 40, 34, 47, 34, 41, 59, 97, 61, 110, 101, 119, 32, 85, 82, 76, 40, 115, 63, 108, 111, 99, 97, 116, 105, 111, 110, 46, 112, 97, 116, 104, 110, 97, 109, 101, 58, 108, 111, 99, 97, 116, 105, 111, 110, 46, 111, 114, 105, 103, 105, 110, 41, 46, 104, 111, 115, 116, 110, 97, 109, 101, 125, 97, 46, 115, 116, 97, 114, 116, 115, 87, 105, 116, 104, 40, 34, 91, 34, 41, 38, 38, 97, 46, 101, 110, 100, 115, 87, 105, 116, 104, 40, 34, 93, 34, 41, 38, 38, 40, 97, 61, 97, 46, 115, 108, 105, 99, 101, 40, 49, 44, 45, 49, 41, 41, 44, 101, 46, 109, 101, 115, 115, 97, 103, 101, 61, 101, 46, 109, 101, 115, 115, 97, 103, 101, 46, 114, 101, 112, 108, 97, 99, 101, 40, 34, 100, 111, 109, 97, 105, 110, 32, 110, 97, 109, 101, 34, 44, 96, 100, 111, 109, 97, 105, 110, 32, 110, 97, 109, 101, 32, 40, 36, 123, 97, 125, 41, 96, 41, 125, 116, 104, 105, 115, 46, 119, 111, 114, 107, 101, 114, 70, 117, 110, 99, 116, 105, 111, 110, 115, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 123, 116, 121, 112, 101, 58, 34, 99, 111, 110, 116, 101, 120, 116, 68, 105, 100, 67, 104, 97, 110, 103, 101, 83, 116, 97, 116, 117, 115, 34, 44, 112, 97, 121, 108, 111, 97, 100, 58, 101, 125, 41, 125, 100, 105, 100, 83, 116, 97, 114, 116, 79, 98, 115, 101, 114, 118, 105, 110, 103, 67, 111, 110, 116, 101, 120, 116, 40, 41, 123, 116, 104, 105, 115, 46, 119, 111, 114, 107, 101, 114, 70, 117, 110, 99, 116, 105, 111, 110, 115, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 123, 116, 121, 112, 101, 58, 34, 100, 105, 100, 83, 116, 97, 114, 116, 79, 98, 115, 101, 114, 118, 105, 110, 103, 67, 111, 110, 116, 101, 120, 116, 34, 125, 41, 125, 115, 101, 116, 86, 105, 101, 119, 82, 101, 102, 114, 101, 115, 104, 72, 97, 110, 100, 108, 101, 114, 40, 101, 41, 123, 105, 102, 40, 101, 61, 61, 110, 117, 108, 108, 124, 124, 101, 46, 105, 115, 86, 105, 101, 119, 82, 101, 102, 114, 101, 115, 104, 72, 97, 110, 100, 108, 101, 114, 83, 101, 116, 41, 114, 101, 116, 117, 114, 110, 59, 108, 101, 116, 32, 116, 61, 116, 104, 105, 115, 46, 77, 111, 100, 117, 108, 101, 46, 78, 101, 101, 100, 115, 82, 101, 100, 114, 97, 119, 68, 101, 108, 101, 103, 97, 116, 101, 46, 101, 120, 116, 101, 110, 100, 40, 34, 78, 101, 101, 100, 115, 82, 101, 100, 114, 97, 119, 68, 101, 108, 101, 103, 97, 116, 101, 34, 44, 123, 115, 101, 116, 78, 101, 101, 100, 115, 82, 101, 100, 114, 97, 119, 73, 110, 58, 116, 104, 105, 115, 46, 115, 99, 104, 101, 100, 117, 108, 101, 82, 101, 100, 114, 97, 119, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 44, 101, 41, 125, 41, 44, 114, 61, 110, 101, 119, 32, 116, 59, 101, 46, 115, 101, 116, 78, 101, 101, 100, 115, 82, 101, 100, 114, 97, 119, 68, 101, 108, 101, 103, 97, 116, 101, 40, 114, 41, 44, 101, 46, 105, 115, 86, 105, 101, 119, 82, 101, 102, 114, 101, 115, 104, 72, 97, 110, 100, 108, 101, 114, 83, 101, 116, 61, 33, 48, 125, 115, 99, 104, 101, 100, 117, 108, 101, 82, 101, 100, 114, 97, 119, 40, 101, 44, 116, 41, 123, 116, 104, 105, 115, 46, 97, 100, 100, 82, 101, 100, 114, 97, 119, 82, 101, 113, 117, 101, 115, 116, 40, 116, 41, 44, 116, 104, 105, 115, 46, 105, 115, 68, 114, 97, 119, 76, 111, 111, 112, 82, 117, 110, 110, 105, 110, 103, 124, 124, 116, 104, 105, 115, 46, 115, 116, 97, 114, 116, 68, 114, 97, 119, 76, 111, 111, 112, 40, 101, 41, 125, 103, 101, 116, 32, 105, 115, 68, 114, 97, 119, 76, 111, 111, 112, 82, 117, 110, 110, 105, 110, 103, 40, 41, 123, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 95, 105, 115, 68, 114, 97, 119, 76, 111, 111, 112, 82, 117, 110, 110, 105, 110, 103, 125, 115, 101, 116, 32, 105, 115, 68, 114, 97, 119, 76, 111, 111, 112, 82, 117, 110, 110, 105, 110, 103, 40, 101, 41, 123, 116, 104, 105, 115, 46, 95, 105, 115, 68, 114, 97, 119, 76, 111, 111, 112, 82, 117, 110, 110, 105, 110, 103, 61, 101, 44, 33, 101, 38, 38, 116, 121, 112, 101, 111, 102, 32, 116, 104, 105, 115, 46, 108, 111, 111, 112, 84, 105, 109, 101, 111, 117, 116, 73, 100, 61, 61, 34, 110, 117, 109, 98, 101, 114, 34, 38, 38, 40, 99, 108, 101, 97, 114, 84, 105, 109, 101, 111, 117, 116, 40, 116, 104, 105, 115, 46, 108, 111, 111, 112, 84, 105, 109, 101, 111, 117, 116, 73, 100, 41, 44, 116, 104, 105, 115, 46, 108, 111, 111, 112, 84, 105, 109, 101, 111, 117, 116, 73, 100, 61, 118, 111, 105, 100, 32, 48, 41, 125, 97, 100, 100, 82, 101, 100, 114, 97, 119, 82, 101, 113, 117, 101, 115, 116, 40, 101, 41, 123, 116, 104, 105, 115, 46, 114, 101, 100, 114, 97, 119, 82, 101, 113, 117, 101, 115, 116, 115, 46, 112, 117, 115, 104, 40, 77, 97, 116, 104, 46, 114, 111, 117, 110, 100, 40, 112, 101, 114, 102, 111, 114, 109, 97, 110, 99, 101, 46, 110, 111, 119, 40, 41, 41, 43, 101, 41, 44, 116, 104, 105, 115, 46, 114, 101, 100, 114, 97, 119, 82, 101, 113, 117, 101, 115, 116, 115, 46, 115, 111, 114, 116, 40, 40, 116, 44, 114, 41, 61, 62, 116, 45, 114, 41, 125, 115, 116, 97, 114, 116, 68, 114, 97, 119, 76, 111, 111, 112, 40, 101, 41, 123, 116, 104, 105, 115, 46, 105, 115, 68, 114, 97, 119, 76, 111, 111, 112, 82, 117, 110, 110, 105, 110, 103, 61, 33, 48, 59, 108, 101, 116, 32, 116, 61, 115, 61, 62, 116, 104, 105, 115, 46, 114, 101, 100, 114, 97, 119, 82, 101, 113, 117, 101, 115, 116, 115, 46, 108, 101, 110, 103, 116, 104, 62, 48, 38, 38, 116, 104, 105, 115, 46, 114, 101, 100, 114, 97, 119, 82, 101, 113, 117, 101, 115, 116, 115, 91, 48, 93, 60, 61, 115, 44, 114, 61, 115, 61, 62, 123, 102, 111, 114, 40, 59, 116, 104, 105, 115, 46, 114, 101, 100, 114, 97, 119, 82, 101, 113, 117, 101, 115, 116, 115, 46, 108, 101, 110, 103, 116, 104, 62, 48, 38, 38, 116, 104, 105, 115, 46, 114, 101, 100, 114, 97, 119, 82, 101, 113, 117, 101, 115, 116, 115, 91, 48, 93, 60, 61, 115, 59, 41, 116, 104, 105, 115, 46, 114, 101, 100, 114, 97, 119, 82, 101, 113, 117, 101, 115, 116, 115, 46, 115, 104, 105, 102, 116, 40, 41, 125, 44, 97, 61, 40, 41, 61, 62, 123, 116, 104, 105, 115, 46, 108, 111, 111, 112, 84, 105, 109, 101, 111, 117, 116, 73, 100, 61, 115, 101, 116, 84, 105, 109, 101, 111, 117, 116, 40, 40, 41, 61, 62, 123, 105, 102, 40, 33, 116, 104, 105, 115, 46, 105, 115, 68, 114, 97, 119, 76, 111, 111, 112, 82, 117, 110, 110, 105, 110, 103, 41, 114, 101, 116, 117, 114, 110, 59, 108, 101, 116, 32, 115, 61, 112, 101, 114, 102, 111, 114, 109, 97, 110, 99, 101, 46, 110, 111, 119, 40, 41, 59, 116, 40, 115, 41, 38, 38, 40, 114, 40, 115, 41, 44, 101, 46, 100, 114, 97, 119, 40, 41, 44, 116, 104, 105, 115, 46, 115, 101, 110, 100, 86, 105, 101, 119, 82, 101, 102, 114, 101, 115, 104, 67, 111, 109, 109, 97, 110, 100, 115, 40, 74, 83, 79, 78, 46, 112, 97, 114, 115, 101, 40, 101, 46, 103, 101, 116, 68, 114, 97, 119, 67, 111, 109, 109, 97, 110, 100, 115, 40, 41, 41, 41, 41, 44, 97, 40, 41, 125, 44, 116, 104, 105, 115, 46, 114, 101, 100, 114, 97, 119, 73, 110, 116, 101, 114, 118, 97, 108, 41, 125, 59, 97, 40, 41, 125, 115, 101, 110, 100, 86, 105, 101, 119, 82, 101, 102, 114, 101, 115, 104, 67, 111, 109, 109, 97, 110, 100, 115, 40, 101, 41, 123, 116, 104, 105, 115, 46, 119, 111, 114, 107, 101, 114, 70, 117, 110, 99, 116, 105, 111, 110, 115, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 123, 116, 121, 112, 101, 58, 34, 100, 114, 97, 119, 34, 44, 112, 97, 121, 108, 111, 97, 100, 58, 101, 125, 41, 125, 103, 101, 116, 87, 97, 115, 109, 68, 121, 110, 97, 109, 105, 99, 76, 105, 98, 114, 97, 114, 105, 101, 115, 40, 101, 41, 123, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 103, 101, 116, 87, 97, 115, 109, 83, 105, 100, 101, 77, 111, 100, 117, 108, 101, 70, 105, 108, 101, 78, 97, 109, 101, 40, 41, 61, 61, 110, 117, 108, 108, 63, 91, 93, 58, 91, 96, 36, 123, 101, 46, 114, 101, 112, 108, 97, 99, 101, 40, 47, 92, 47, 91, 94, 47, 93, 42, 36, 47, 44, 34, 47, 34, 41, 125, 36, 123, 116, 104, 105, 115, 46, 103, 101, 116, 87, 97, 115, 109, 83, 105, 100, 101, 77, 111, 100, 117, 108, 101, 70, 105, 108, 101, 78, 97, 109, 101, 40, 41, 125, 96, 93, 125, 103, 101, 116, 87, 97, 115, 109, 67, 111, 114, 101, 69, 120, 112, 101, 99, 116, 101, 100, 72, 97, 115, 104, 40, 101, 41, 123, 114, 101, 116, 117, 114, 110, 32, 101, 63, 34, 52, 53, 102, 99, 101, 97, 57, 49, 49, 100, 56, 101, 50, 49, 48, 48, 101, 56, 50, 102, 56, 52, 102, 50, 56, 99, 98, 100, 50, 51, 101, 97, 56, 102, 53, 53, 54, 50, 98, 101, 99, 97, 97, 98, 54, 51, 52, 57, 52, 57, 102, 102, 99, 52, 51, 51, 48, 50, 51, 50, 98, 98, 49, 54, 34, 58, 34, 34, 125, 103, 101, 116, 87, 97, 115, 109, 67, 111, 114, 101, 70, 105, 108, 101, 78, 97, 109, 101, 40, 101, 41, 123, 114, 101, 116, 117, 114, 110, 32, 101, 63, 34, 115, 99, 97, 110, 100, 105, 116, 45, 100, 97, 116, 97, 99, 97, 112, 116, 117, 114, 101, 45, 115, 100, 107, 45, 98, 97, 114, 99, 111, 100, 101, 45, 115, 105, 109, 100, 46, 119, 97, 115, 109, 34, 58, 34, 34, 125, 103, 101, 116, 87, 97, 115, 109, 83, 105, 100, 101, 77, 111, 100, 117, 108, 101, 70, 105, 108, 101, 78, 97, 109, 101, 40, 41, 123, 114, 101, 116, 117, 114, 110, 34, 34, 125, 97, 115, 121, 110, 99, 32, 115, 101, 116, 117, 112, 40, 101, 44, 116, 44, 114, 44, 97, 41, 123, 118, 97, 114, 32, 115, 59, 102, 117, 110, 99, 116, 105, 111, 110, 32, 105, 40, 41, 123, 108, 101, 116, 32, 104, 61, 116, 104, 105, 115, 46, 109, 111, 100, 117, 108, 101, 72, 97, 110, 100, 108, 101, 114, 46, 103, 101, 116, 40, 41, 44, 67, 61, 104, 46, 68, 97, 116, 97, 68, 101, 99, 111, 100, 105, 110, 103, 46, 101, 120, 116, 101, 110, 100, 40, 34, 68, 97, 116, 97, 68, 101, 99, 111, 100, 105, 110, 103, 34, 44, 123, 100, 101, 99, 111, 100, 101, 40, 77, 44, 107, 41, 123, 116, 114, 121, 123, 108, 101, 116, 32, 76, 61, 74, 83, 79, 78, 46, 112, 97, 114, 115, 101, 40, 107, 41, 44, 87, 61, 91, 93, 59, 102, 111, 114, 40, 108, 101, 116, 32, 70, 32, 111, 102, 32, 76, 41, 123, 108, 101, 116, 32, 72, 61, 110, 101, 119, 32, 84, 101, 120, 116, 68, 101, 99, 111, 100, 101, 114, 40, 70, 46, 105, 97, 110, 97, 78, 97, 109, 101, 44, 123, 102, 97, 116, 97, 108, 58, 33, 48, 125, 41, 59, 87, 46, 112, 117, 115, 104, 40, 72, 46, 100, 101, 99, 111, 100, 101, 40, 77, 46, 115, 108, 105, 99, 101, 40, 70, 46, 115, 116, 97, 114, 116, 73, 110, 100, 101, 120, 44, 70, 46, 101, 110, 100, 73, 110, 100, 101, 120, 41, 41, 41, 125, 114, 101, 116, 117, 114, 110, 32, 87, 46, 106, 111, 105, 110, 40, 34, 34, 41, 125, 99, 97, 116, 99, 104, 40, 76, 41, 123, 114, 101, 116, 117, 114, 110, 34, 34, 125, 125, 125, 41, 59, 104, 46, 115, 101, 116, 68, 97, 116, 97, 68, 101, 99, 111, 100, 105, 110, 103, 40, 110, 101, 119, 32, 67, 41, 125, 108, 101, 116, 32, 110, 61, 33, 49, 44, 108, 61, 33, 49, 44, 103, 61, 34, 47, 115, 99, 97, 110, 100, 105, 116, 95, 115, 121, 110, 99, 95, 102, 111, 108, 100, 101, 114, 95, 112, 114, 101, 108, 111, 97, 100, 34, 44, 121, 61, 34, 47, 115, 99, 97, 110, 100, 105, 116, 95, 115, 121, 110, 99, 95, 102, 111, 108, 100, 101, 114, 34, 44, 118, 61, 34, 114, 101, 115, 111, 117, 114, 99, 101, 115, 34, 59, 114, 63, 116, 104, 105, 115, 46, 119, 114, 105, 116, 97, 98, 108, 101, 68, 97, 116, 97, 80, 97, 116, 104, 61, 103, 58, 97, 33, 61, 110, 117, 108, 108, 63, 40, 111, 46, 108, 111, 103, 40, 111, 46, 76, 101, 118, 101, 108, 46, 68, 101, 98, 117, 103, 44, 96, 73, 110, 100, 101, 120, 101, 100, 68, 66, 32, 100, 97, 116, 97, 98, 97, 115, 101, 32, 110, 97, 109, 101, 32, 111, 118, 101, 114, 114, 105, 100, 101, 32, 105, 110, 32, 117, 115, 101, 32, 116, 111, 32, 114, 101, 99, 111, 118, 101, 114, 32, 102, 114, 111, 109, 32, 98, 108, 111, 99, 107, 101, 100, 32, 115, 116, 97, 110, 100, 97, 114, 100, 32, 100, 97, 116, 97, 98, 97, 115, 101, 58, 32, 36, 123, 97, 125, 96, 41, 44, 116, 104, 105, 115, 46, 119, 114, 105, 116, 97, 98, 108, 101, 68, 97, 116, 97, 80, 97, 116, 104, 61, 97, 41, 58, 116, 104, 105, 115, 46, 119, 114, 105, 116, 97, 98, 108, 101, 68, 97, 116, 97, 80, 97, 116, 104, 61, 121, 44, 116, 104, 105, 115, 46, 114, 101, 115, 111, 117, 114, 99, 101, 80, 97, 116, 104, 61, 96, 36, 123, 101, 125, 36, 123, 118, 125, 47, 96, 44, 115, 101, 108, 102, 46, 112, 97, 116, 104, 61, 116, 59, 108, 101, 116, 123, 114, 101, 115, 111, 108, 118, 101, 58, 100, 44, 114, 101, 106, 101, 99, 116, 58, 109, 44, 112, 114, 111, 109, 105, 115, 101, 58, 119, 125, 61, 110, 101, 119, 32, 97, 101, 44, 117, 61, 40, 41, 61, 62, 123, 108, 38, 38, 110, 38, 38, 40, 105, 46, 97, 112, 112, 108, 121, 40, 116, 104, 105, 115, 41, 44, 116, 104, 105, 115, 46, 109, 111, 100, 117, 108, 101, 72, 97, 110, 100, 108, 101, 114, 46, 103, 101, 116, 40, 41, 46, 99, 97, 108, 108, 77, 97, 105, 110, 40, 41, 44, 100, 40, 41, 41, 125, 44, 112, 61, 65, 46, 115, 100, 107, 86, 101, 114, 115, 105, 111, 110, 40, 41, 59, 105, 102, 40, 112, 61, 61, 61, 34, 34, 41, 116, 104, 114, 111, 119, 32, 110, 101, 119, 32, 80, 40, 123, 110, 97, 109, 101, 58, 34, 73, 110, 118, 97, 108, 105, 100, 32, 108, 105, 98, 114, 97, 114, 121, 32, 118, 101, 114, 115, 105, 111, 110, 34, 44, 109, 101, 115, 115, 97, 103, 101, 58, 34, 76, 105, 98, 114, 97, 114, 121, 32, 118, 101, 114, 115, 105, 111, 110, 32, 105, 115, 32, 110, 111, 116, 32, 100, 101, 102, 105, 110, 101, 100, 32, 111, 114, 32, 101, 109, 112, 116, 121, 44, 32, 99, 97, 110, 110, 111, 116, 32, 103, 101, 110, 101, 114, 97, 116, 101, 32, 112, 114, 111, 112, 101, 114, 32, 112, 97, 116, 104, 32, 116, 111, 32, 108, 105, 98, 114, 97, 114, 121, 32, 102, 105, 108, 101, 115, 46, 34, 125, 41, 59, 108, 101, 116, 32, 98, 61, 108, 101, 40, 41, 44, 102, 61, 111, 101, 40, 112, 44, 101, 44, 116, 104, 105, 115, 46, 103, 101, 116, 87, 97, 115, 109, 67, 111, 114, 101, 70, 105, 108, 101, 78, 97, 109, 101, 40, 98, 41, 41, 44, 123, 106, 115, 85, 82, 73, 58, 73, 125, 61, 102, 44, 123, 119, 97, 115, 109, 85, 82, 73, 58, 68, 125, 61, 102, 59, 116, 104, 105, 115, 46, 109, 111, 100, 117, 108, 101, 72, 97, 110, 100, 108, 101, 114, 46, 115, 101, 116, 40, 123, 99, 97, 110, 118, 97, 115, 58, 40, 115, 61, 116, 104, 105, 115, 46, 119, 111, 114, 107, 101, 114, 70, 117, 110, 99, 116, 105, 111, 110, 115, 46, 103, 101, 116, 79, 102, 102, 115, 99, 114, 101, 101, 110, 67, 97, 110, 118, 97, 115, 40, 41, 41, 33, 61, 110, 117, 108, 108, 63, 115, 58, 123, 103, 101, 116, 67, 111, 110, 116, 101, 120, 116, 58, 40, 41, 61, 62, 110, 117, 108, 108, 125, 44, 105, 110, 115, 116, 97, 110, 116, 105, 97, 116, 101, 87, 97, 115, 109, 58, 40, 104, 44, 67, 41, 61, 62, 40, 114, 101, 40, 104, 44, 68, 44, 116, 104, 105, 115, 46, 103, 101, 116, 87, 97, 115, 109, 67, 111, 114, 101, 69, 120, 112, 101, 99, 116, 101, 100, 72, 97, 115, 104, 40, 98, 41, 44, 67, 44, 116, 104, 105, 115, 46, 95, 108, 111, 97, 100, 80, 114, 111, 103, 114, 101, 115, 115, 67, 97, 108, 108, 98, 97, 99, 107, 41, 44, 123, 125, 41, 44, 100, 121, 110, 97, 109, 105, 99, 76, 105, 98, 114, 97, 114, 105, 101, 115, 58, 116, 104, 105, 115, 46, 103, 101, 116, 87, 97, 115, 109, 68, 121, 110, 97, 109, 105, 99, 76, 105, 98, 114, 97, 114, 105, 101, 115, 40, 68, 41, 44, 108, 111, 99, 97, 116, 101, 70, 105, 108, 101, 58, 104, 61, 62, 101, 43, 104, 44, 110, 111, 73, 110, 105, 116, 105, 97, 108, 82, 117, 110, 58, 33, 48, 44, 112, 114, 101, 82, 117, 110, 58, 91, 97, 115, 121, 110, 99, 40, 41, 61, 62, 123, 116, 114, 121, 123, 97, 119, 97, 105, 116, 32, 115, 101, 40, 123, 119, 114, 105, 116, 97, 98, 108, 101, 68, 97, 116, 97, 80, 97, 116, 104, 80, 114, 101, 108, 111, 97, 100, 58, 103, 44, 119, 114, 105, 116, 97, 98, 108, 101, 68, 97, 116, 97, 80, 97, 116, 104, 58, 116, 104, 105, 115, 46, 119, 114, 105, 116, 97, 98, 108, 101, 68, 97, 116, 97, 80, 97, 116, 104, 44, 112, 114, 101, 108, 111, 97, 100, 105, 110, 103, 58, 114, 125, 41, 125, 99, 97, 116, 99, 104, 40, 104, 41, 123, 105, 102, 40, 104, 46, 110, 97, 109, 101, 61, 61, 61, 34, 66, 108, 111, 99, 107, 101, 100, 73, 110, 100, 101, 120, 101, 100, 68, 66, 34, 41, 123, 109, 40, 104, 46, 116, 111, 83, 116, 114, 105, 110, 103, 40, 41, 41, 59, 114, 101, 116, 117, 114, 110, 125, 111, 46, 108, 111, 103, 40, 111, 46, 76, 101, 118, 101, 108, 46, 68, 101, 98, 117, 103, 44, 34, 78, 111, 32, 73, 110, 100, 101, 120, 101, 100, 68, 66, 32, 115, 117, 112, 112, 111, 114, 116, 44, 32, 115, 111, 109, 101, 32, 100, 97, 116, 97, 32, 119, 105, 108, 108, 32, 110, 111, 116, 32, 98, 101, 32, 112, 101, 114, 115, 105, 115, 116, 101, 100, 58, 34, 44, 104, 41, 125, 108, 61, 33, 48, 44, 117, 40, 41, 125, 93, 44, 111, 110, 82, 117, 110, 116, 105, 109, 101, 73, 110, 105, 116, 105, 97, 108, 105, 122, 101, 100, 58, 40, 41, 61, 62, 123, 110, 61, 33, 48, 44, 117, 40, 41, 125, 125, 41, 59, 97, 115, 121, 110, 99, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 83, 40, 104, 41, 123, 118, 97, 114, 32, 67, 59, 97, 115, 121, 110, 99, 32, 102, 117, 110, 99, 116, 105, 111, 110, 32, 77, 40, 41, 123, 114, 101, 116, 117, 114, 110, 32, 105, 109, 112, 111, 114, 116, 83, 99, 114, 105, 112, 116, 115, 40, 104, 41, 125, 116, 114, 121, 123, 97, 119, 97, 105, 116, 32, 122, 40, 77, 44, 50, 53, 48, 44, 52, 101, 51, 44, 76, 61, 62, 123, 111, 46, 108, 111, 103, 40, 111, 46, 76, 101, 118, 101, 108, 46, 87, 97, 114, 110, 44, 76, 41, 44, 111, 46, 108, 111, 103, 40, 111, 46, 76, 101, 118, 101, 108, 46, 87, 97, 114, 110, 44, 96, 67, 111, 117, 108, 100, 110, 39, 116, 32, 114, 101, 116, 114, 105, 101, 118, 101, 32, 83, 99, 97, 110, 100, 105, 116, 32, 68, 97, 116, 97, 32, 67, 97, 112, 116, 117, 114, 101, 32, 108, 105, 98, 114, 97, 114, 121, 32, 97, 116, 32, 36, 123, 104, 125, 44, 32, 114, 101, 116, 114, 121, 105, 110, 103, 46, 46, 46, 96, 41, 125, 41, 59, 108, 101, 116, 32, 107, 61, 40, 67, 61, 115, 101, 108, 102, 46, 83, 68, 67, 95, 87, 65, 83, 77, 95, 74, 83, 95, 86, 69, 82, 83, 73, 79, 78, 41, 33, 61, 110, 117, 108, 108, 63, 67, 58, 34, 117, 110, 100, 101, 102, 105, 110, 101, 100, 34, 59, 114, 101, 116, 117, 114, 110, 32, 107, 33, 61, 61, 112, 38, 38, 111, 46, 108, 111, 103, 40, 111, 46, 76, 101, 118, 101, 108, 46, 87, 97, 114, 110, 44, 96, 84, 104, 101, 32, 83, 99, 97, 110, 100, 105, 116, 32, 68, 97, 116, 97, 32, 67, 97, 112, 116, 117, 114, 101, 32, 108, 105, 98, 114, 97, 114, 121, 32, 74, 83, 32, 102, 105, 108, 101, 32, 102, 111, 117, 110, 100, 32, 97, 116, 32, 36, 123, 104, 125, 32, 115, 101, 101, 109, 115, 32, 105, 110, 118, 97, 108, 105, 100, 58, 32, 101, 120, 112, 101, 99, 116, 101, 100, 32, 118, 101, 114, 115, 105, 111, 110, 32, 100, 111, 101, 115, 110, 39, 116, 32, 109, 97, 116, 99, 104, 32, 40, 114, 101, 99, 101, 105, 118, 101, 100, 58, 32, 36, 123, 107, 125, 44, 32, 101, 120, 112, 101, 99, 116, 101, 100, 58, 32, 36, 123, 112, 125, 41, 46, 32, 80, 108, 101, 97, 115, 101, 32, 101, 110, 115, 117, 114, 101, 32, 116, 104, 101, 32, 99, 111, 114, 114, 101, 99, 116, 32, 83, 99, 97, 110, 100, 105, 116, 32, 68, 97, 116, 97, 32, 67, 97, 112, 116, 117, 114, 101, 32, 102, 105, 108, 101, 32, 40, 119, 105, 116, 104, 32, 99, 111, 114, 114, 101, 99, 116, 32, 118, 101, 114, 115, 105, 111, 110, 41, 32, 105, 115, 32, 114, 101, 116, 114, 105, 101, 118, 101, 100, 46, 96, 41, 44, 33, 48, 125, 99, 97, 116, 99, 104, 40, 107, 41, 123, 114, 101, 116, 117, 114, 110, 32, 111, 46, 108, 111, 103, 40, 111, 46, 76, 101, 118, 101, 108, 46, 69, 114, 114, 111, 114, 44, 107, 41, 44, 33, 49, 125, 125, 114, 101, 116, 117, 114, 110, 32, 97, 119, 97, 105, 116, 32, 83, 40, 73, 41, 124, 124, 109, 40, 96, 67, 111, 117, 108, 100, 110, 39, 116, 32, 114, 101, 116, 114, 105, 101, 118, 101, 32, 83, 99, 97, 110, 100, 105, 116, 32, 68, 97, 116, 97, 32, 67, 97, 112, 116, 117, 114, 101, 32, 108, 105, 98, 114, 97, 114, 121, 32, 97, 116, 32, 36, 123, 73, 125, 44, 32, 100, 105, 100, 32, 121, 111, 117, 32, 99, 111, 110, 102, 105, 103, 117, 114, 101, 32, 116, 104, 101, 32, 112, 97, 116, 104, 32, 102, 111, 114, 32, 105, 116, 32, 99, 111, 114, 114, 101, 99, 116, 108, 121, 63, 96, 41, 44, 119, 125, 109, 97, 112, 77, 105, 114, 114, 111, 114, 65, 120, 105, 115, 79, 110, 77, 111, 100, 117, 108, 101, 40, 101, 41, 123, 115, 119, 105, 116, 99, 104, 40, 101, 41, 123, 99, 97, 115, 101, 34, 78, 111, 110, 101, 34, 58, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 77, 111, 100, 117, 108, 101, 46, 65, 120, 105, 115, 46, 78, 111, 110, 101, 59, 99, 97, 115, 101, 34, 88, 34, 58, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 77, 111, 100, 117, 108, 101, 46, 65, 120, 105, 115, 46, 88, 59, 99, 97, 115, 101, 34, 89, 34, 58, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 77, 111, 100, 117, 108, 101, 46, 65, 120, 105, 115, 46, 89, 59, 100, 101, 102, 97, 117, 108, 116, 58, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 77, 111, 100, 117, 108, 101, 46, 65, 120, 105, 115, 46, 78, 111, 110, 101, 125, 125, 125, 59, 102, 117, 110, 99, 116, 105, 111, 110, 32, 100, 101, 40, 101, 41, 123, 99, 111, 110, 115, 111, 108, 101, 46, 119, 97, 114, 110, 40, 34, 82, 101, 97, 99, 104, 101, 100, 32, 117, 110, 101, 120, 112, 101, 99, 116, 101, 100, 32, 99, 97, 115, 101, 34, 41, 125, 102, 117, 110, 99, 116, 105, 111, 110, 32, 79, 40, 101, 41, 123, 114, 101, 116, 117, 114, 110, 32, 116, 121, 112, 101, 111, 102, 32, 101, 61, 61, 34, 111, 98, 106, 101, 99, 116, 34, 38, 38, 101, 33, 61, 110, 117, 108, 108, 125, 102, 117, 110, 99, 116, 105, 111, 110, 32, 99, 101, 40, 101, 41, 123, 105, 102, 40, 116, 121, 112, 101, 111, 102, 32, 101, 61, 61, 34, 115, 116, 114, 105, 110, 103, 34, 41, 114, 101, 116, 117, 114, 110, 32, 101, 59, 105, 102, 40, 79, 40, 101, 41, 41, 123, 105, 102, 40, 116, 121, 112, 101, 111, 102, 32, 101, 46, 109, 101, 115, 115, 97, 103, 101, 61, 61, 34, 115, 116, 114, 105, 110, 103, 34, 41, 114, 101, 116, 117, 114, 110, 32, 101, 46, 109, 101, 115, 115, 97, 103, 101, 125, 101, 108, 115, 101, 32, 105, 102, 40, 116, 121, 112, 101, 111, 102, 40, 101, 61, 61, 110, 117, 108, 108, 63, 118, 111, 105, 100, 32, 48, 58, 101, 46, 116, 111, 83, 116, 114, 105, 110, 103, 41, 61, 61, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 41, 114, 101, 116, 117, 114, 110, 32, 101, 46, 116, 111, 83, 116, 114, 105, 110, 103, 40, 41, 59, 114, 101, 116, 117, 114, 110, 34, 117, 110, 107, 110, 111, 119, 32, 101, 114, 114, 111, 114, 34, 125, 118, 97, 114, 32, 66, 61, 99, 108, 97, 115, 115, 123, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 101, 44, 116, 41, 123, 99, 40, 116, 104, 105, 115, 44, 34, 100, 97, 116, 97, 67, 97, 112, 116, 117, 114, 101, 73, 110, 115, 116, 97, 110, 99, 101, 34, 41, 44, 99, 40, 116, 104, 105, 115, 44, 34, 119, 111, 114, 107, 101, 114, 83, 101, 108, 102, 34, 41, 44, 116, 104, 105, 115, 46, 119, 111, 114, 107, 101, 114, 83, 101, 108, 102, 61, 101, 44, 116, 104, 105, 115, 46, 100, 97, 116, 97, 67, 97, 112, 116, 117, 114, 101, 73, 110, 115, 116, 97, 110, 99, 101, 61, 110, 101, 119, 32, 84, 40, 116, 44, 123, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 58, 116, 104, 105, 115, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 44, 103, 101, 116, 79, 102, 102, 115, 99, 114, 101, 101, 110, 67, 97, 110, 118, 97, 115, 58, 116, 104, 105, 115, 46, 103, 101, 116, 79, 102, 102, 115, 99, 114, 101, 101, 110, 67, 97, 110, 118, 97, 115, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 125, 41, 44, 116, 104, 105, 115, 46, 108, 105, 115, 116, 101, 110, 84, 111, 77, 101, 115, 115, 97, 103, 101, 115, 40, 41, 125, 108, 105, 115, 116, 101, 110, 84, 111, 77, 101, 115, 115, 97, 103, 101, 115, 40, 41, 123, 116, 104, 105, 115, 46, 119, 111, 114, 107, 101, 114, 83, 101, 108, 102, 46, 111, 110, 109, 101, 115, 115, 97, 103, 101, 61, 116, 104, 105, 115, 46, 111, 110, 77, 101, 115, 115, 97, 103, 101, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 125, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 101, 44, 116, 41, 123, 116, 104, 105, 115, 46, 119, 111, 114, 107, 101, 114, 83, 101, 108, 102, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 101, 44, 116, 33, 61, 110, 117, 108, 108, 63, 116, 58, 91, 93, 41, 125, 103, 101, 116, 79, 102, 102, 115, 99, 114, 101, 101, 110, 67, 97, 110, 118, 97, 115, 40, 41, 123, 105, 102, 40, 116, 121, 112, 101, 111, 102, 32, 116, 104, 105, 115, 46, 119, 111, 114, 107, 101, 114, 83, 101, 108, 102, 46, 79, 102, 102, 115, 99, 114, 101, 101, 110, 67, 97, 110, 118, 97, 115, 61, 61, 34, 102, 117, 110, 99, 116, 105, 111, 110, 34, 41, 114, 101, 116, 117, 114, 110, 32, 110, 101, 119, 32, 116, 104, 105, 115, 46, 119, 111, 114, 107, 101, 114, 83, 101, 108, 102, 46, 79, 102, 102, 115, 99, 114, 101, 101, 110, 67, 97, 110, 118, 97, 115, 40, 51, 50, 44, 51, 50, 41, 125, 104, 97, 115, 80, 97, 121, 108, 111, 97, 100, 40, 101, 41, 123, 114, 101, 116, 117, 114, 110, 32, 79, 40, 101, 41, 38, 38, 34, 112, 97, 121, 108, 111, 97, 100, 34, 105, 110, 32, 101, 125, 104, 97, 115, 84, 114, 97, 110, 115, 102, 101, 114, 97, 98, 108, 101, 115, 40, 101, 41, 123, 114, 101, 116, 117, 114, 110, 32, 79, 40, 101, 41, 38, 38, 65, 114, 114, 97, 121, 46, 105, 115, 65, 114, 114, 97, 121, 40, 101, 46, 116, 114, 97, 110, 115, 102, 101, 114, 97, 98, 108, 101, 115, 41, 125, 97, 115, 121, 110, 99, 32, 114, 101, 115, 112, 111, 110, 100, 87, 105, 116, 104, 40, 101, 44, 116, 44, 114, 41, 123, 108, 101, 116, 32, 97, 61, 110, 117, 108, 108, 44, 115, 59, 116, 114, 121, 123, 115, 61, 114, 40, 41, 44, 115, 32, 105, 110, 115, 116, 97, 110, 99, 101, 111, 102, 32, 80, 114, 111, 109, 105, 115, 101, 38, 38, 40, 115, 61, 97, 119, 97, 105, 116, 32, 115, 41, 125, 99, 97, 116, 99, 104, 40, 110, 41, 123, 115, 61, 118, 111, 105, 100, 32, 48, 44, 97, 61, 99, 101, 40, 110, 41, 125, 108, 101, 116, 32, 105, 61, 123, 116, 121, 112, 101, 58, 34, 119, 111, 114, 107, 101, 114, 84, 97, 115, 107, 73, 100, 34, 44, 99, 111, 109, 109, 97, 110, 100, 58, 101, 44, 105, 100, 58, 116, 44, 112, 97, 121, 108, 111, 97, 100, 58, 116, 104, 105, 115, 46, 104, 97, 115, 80, 97, 121, 108, 111, 97, 100, 40, 115, 41, 63, 115, 46, 112, 97, 121, 108, 111, 97, 100, 58, 118, 111, 105, 100, 32, 48, 125, 59, 97, 33, 61, 110, 117, 108, 108, 38, 38, 40, 105, 46, 101, 114, 114, 111, 114, 61, 97, 41, 44, 116, 104, 105, 115, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 105, 44, 116, 104, 105, 115, 46, 104, 97, 115, 84, 114, 97, 110, 115, 102, 101, 114, 97, 98, 108, 101, 115, 40, 115, 41, 63, 115, 46, 116, 114, 97, 110, 115, 102, 101, 114, 97, 98, 108, 101, 115, 58, 91, 93, 41, 125, 111, 110, 77, 101, 115, 115, 97, 103, 101, 40, 101, 41, 123, 115, 119, 105, 116, 99, 104, 40, 101, 46, 100, 97, 116, 97, 46, 99, 111, 109, 109, 97, 110, 100, 41, 123, 99, 97, 115, 101, 34, 108, 111, 97, 100, 76, 105, 98, 114, 97, 114, 121, 34, 58, 123, 108, 101, 116, 123, 100, 97, 116, 97, 58, 116, 125, 61, 101, 59, 116, 104, 105, 115, 46, 114, 101, 115, 112, 111, 110, 100, 87, 105, 116, 104, 40, 116, 46, 99, 111, 109, 109, 97, 110, 100, 44, 116, 46, 105, 100, 44, 40, 41, 61, 62, 116, 104, 105, 115, 46, 100, 97, 116, 97, 67, 97, 112, 116, 117, 114, 101, 73, 110, 115, 116, 97, 110, 99, 101, 46, 108, 111, 97, 100, 76, 105, 98, 114, 97, 114, 121, 40, 123, 108, 105, 98, 114, 97, 114, 121, 76, 111, 99, 97, 116, 105, 111, 110, 58, 116, 46, 108, 105, 98, 114, 97, 114, 121, 76, 111, 99, 97, 116, 105, 111, 110, 44, 108, 111, 99, 97, 116, 105, 111, 110, 80, 97, 116, 104, 58, 116, 46, 108, 111, 99, 97, 116, 105, 111, 110, 80, 97, 116, 104, 44, 112, 114, 101, 108, 111, 97, 100, 69, 110, 103, 105, 110, 101, 58, 116, 46, 112, 114, 101, 108, 111, 97, 100, 69, 110, 103, 105, 110, 101, 44, 119, 114, 105, 116, 97, 98, 108, 101, 68, 97, 116, 97, 80, 97, 116, 104, 79, 118, 101, 114, 114, 105, 100, 101, 58, 116, 46, 119, 114, 105, 116, 97, 98, 108, 101, 68, 97, 116, 97, 80, 97, 116, 104, 79, 118, 101, 114, 114, 105, 100, 101, 125, 41, 41, 125, 98, 114, 101, 97, 107, 59, 99, 97, 115, 101, 34, 99, 114, 101, 97, 116, 101, 67, 111, 110, 116, 101, 120, 116, 34, 58, 123, 108, 101, 116, 123, 100, 97, 116, 97, 58, 116, 125, 61, 101, 59, 116, 104, 105, 115, 46, 114, 101, 115, 112, 111, 110, 100, 87, 105, 116, 104, 40, 116, 46, 99, 111, 109, 109, 97, 110, 100, 44, 116, 46, 105, 100, 44, 40, 41, 61, 62, 116, 104, 105, 115, 46, 100, 97, 116, 97, 67, 97, 112, 116, 117, 114, 101, 73, 110, 115, 116, 97, 110, 99, 101, 46, 99, 114, 101, 97, 116, 101, 67, 111, 110, 116, 101, 120, 116, 40, 123, 99, 111, 110, 116, 101, 120, 116, 58, 116, 46, 99, 111, 110, 116, 101, 120, 116, 44, 100, 101, 118, 105, 99, 101, 73, 100, 58, 116, 46, 100, 101, 118, 105, 99, 101, 73, 100, 44, 100, 111, 109, 97, 105, 110, 58, 116, 46, 100, 111, 109, 97, 105, 110, 44, 100, 101, 108, 97, 121, 101, 100, 82, 101, 103, 105, 115, 116, 114, 97, 116, 105, 111, 110, 58, 116, 46, 100, 101, 108, 97, 121, 101, 100, 82, 101, 103, 105, 115, 116, 114, 97, 116, 105, 111, 110, 44, 104, 105, 103, 104, 69, 110, 100, 66, 108, 117, 114, 114, 121, 82, 101, 99, 111, 103, 110, 105, 116, 105, 111, 110, 58, 116, 46, 104, 105, 103, 104, 69, 110, 100, 66, 108, 117, 114, 114, 121, 82, 101, 99, 111, 103, 110, 105, 116, 105, 111, 110, 125, 41, 41, 125, 98, 114, 101, 97, 107, 59, 99, 97, 115, 101, 34, 115, 101, 116, 70, 114, 97, 109, 101, 83, 111, 117, 114, 99, 101, 34, 58, 123, 108, 101, 116, 123, 100, 97, 116, 97, 58, 116, 125, 61, 101, 59, 116, 104, 105, 115, 46, 114, 101, 115, 112, 111, 110, 100, 87, 105, 116, 104, 40, 116, 46, 99, 111, 109, 109, 97, 110, 100, 44, 116, 46, 105, 100, 44, 40, 41, 61, 62, 116, 104, 105, 115, 46, 100, 97, 116, 97, 67, 97, 112, 116, 117, 114, 101, 73, 110, 115, 116, 97, 110, 99, 101, 46, 115, 101, 116, 70, 114, 97, 109, 101, 83, 111, 117, 114, 99, 101, 40, 116, 46, 109, 105, 114, 114, 111, 114, 65, 120, 105, 115, 41, 41, 125, 98, 114, 101, 97, 107, 59, 99, 97, 115, 101, 34, 112, 114, 111, 99, 101, 115, 115, 70, 114, 97, 109, 101, 34, 58, 123, 108, 101, 116, 123, 100, 97, 116, 97, 58, 116, 125, 61, 101, 59, 116, 104, 105, 115, 46, 114, 101, 115, 112, 111, 110, 100, 87, 105, 116, 104, 40, 116, 46, 99, 111, 109, 109, 97, 110, 100, 44, 116, 46, 105, 100, 44, 40, 41, 61, 62, 116, 104, 105, 115, 46, 100, 97, 116, 97, 67, 97, 112, 116, 117, 114, 101, 73, 110, 115, 116, 97, 110, 99, 101, 46, 112, 114, 111, 99, 101, 115, 115, 70, 114, 97, 109, 101, 40, 123, 100, 97, 116, 97, 58, 116, 46, 100, 97, 116, 97, 44, 119, 105, 100, 116, 104, 58, 116, 46, 119, 105, 100, 116, 104, 44, 104, 101, 105, 103, 104, 116, 58, 116, 46, 104, 101, 105, 103, 104, 116, 125, 41, 41, 125, 98, 114, 101, 97, 107, 59, 99, 97, 115, 101, 34, 114, 101, 113, 117, 101, 115, 116, 70, 114, 97, 109, 101, 68, 97, 116, 97, 34, 58, 123, 108, 101, 116, 123, 100, 97, 116, 97, 58, 116, 125, 61, 101, 59, 116, 104, 105, 115, 46, 114, 101, 115, 112, 111, 110, 100, 87, 105, 116, 104, 40, 116, 46, 99, 111, 109, 109, 97, 110, 100, 44, 116, 46, 105, 100, 44, 40, 41, 61, 62, 116, 104, 105, 115, 46, 100, 97, 116, 97, 67, 97, 112, 116, 117, 114, 101, 73, 110, 115, 116, 97, 110, 99, 101, 46, 114, 101, 113, 117, 101, 115, 116, 70, 114, 97, 109, 101, 68, 97, 116, 97, 40, 116, 46, 102, 114, 97, 109, 101, 73, 100, 41, 41, 125, 98, 114, 101, 97, 107, 59, 99, 97, 115, 101, 34, 100, 101, 108, 101, 116, 101, 70, 114, 97, 109, 101, 68, 97, 116, 97, 34, 58, 123, 108, 101, 116, 123, 100, 97, 116, 97, 58, 116, 125, 61, 101, 59, 116, 104, 105, 115, 46, 114, 101, 115, 112, 111, 110, 100, 87, 105, 116, 104, 40, 116, 46, 99, 111, 109, 109, 97, 110, 100, 44, 116, 46, 105, 100, 44, 40, 41, 61, 62, 123, 116, 104, 105, 115, 46, 100, 97, 116, 97, 67, 97, 112, 116, 117, 114, 101, 73, 110, 115, 116, 97, 110, 99, 101, 46, 100, 101, 108, 101, 116, 101, 70, 114, 97, 109, 101, 68, 97, 116, 97, 40, 116, 46, 102, 114, 97, 109, 101, 73, 100, 41, 125, 41, 125, 98, 114, 101, 97, 107, 59, 99, 97, 115, 101, 34, 117, 112, 100, 97, 116, 101, 67, 111, 110, 116, 101, 120, 116, 34, 58, 123, 108, 101, 116, 123, 100, 97, 116, 97, 58, 116, 125, 61, 101, 59, 116, 104, 105, 115, 46, 114, 101, 115, 112, 111, 110, 100, 87, 105, 116, 104, 40, 116, 46, 99, 111, 109, 109, 97, 110, 100, 44, 116, 46, 105, 100, 44, 40, 41, 61, 62, 116, 104, 105, 115, 46, 100, 97, 116, 97, 67, 97, 112, 116, 117, 114, 101, 73, 110, 115, 116, 97, 110, 99, 101, 46, 117, 112, 100, 97, 116, 101, 67, 111, 110, 116, 101, 120, 116, 40, 116, 41, 41, 125, 98, 114, 101, 97, 107, 59, 99, 97, 115, 101, 34, 100, 105, 115, 112, 111, 115, 101, 34, 58, 116, 104, 105, 115, 46, 114, 101, 115, 112, 111, 110, 100, 87, 105, 116, 104, 40, 101, 46, 100, 97, 116, 97, 46, 99, 111, 109, 109, 97, 110, 100, 44, 101, 46, 100, 97, 116, 97, 46, 105, 100, 44, 40, 41, 61, 62, 116, 104, 105, 115, 46, 100, 97, 116, 97, 67, 97, 112, 116, 117, 114, 101, 73, 110, 115, 116, 97, 110, 99, 101, 46, 100, 105, 115, 112, 111, 115, 101, 40, 41, 41, 59, 98, 114, 101, 97, 107, 59, 99, 97, 115, 101, 34, 114, 101, 112, 111, 114, 116, 67, 97, 109, 101, 114, 97, 80, 114, 111, 112, 101, 114, 116, 105, 101, 115, 34, 58, 123, 108, 101, 116, 123, 100, 97, 116, 97, 58, 116, 125, 61, 101, 59, 116, 104, 105, 115, 46, 114, 101, 115, 112, 111, 110, 100, 87, 105, 116, 104, 40, 116, 46, 99, 111, 109, 109, 97, 110, 100, 44, 116, 46, 105, 100, 44, 40, 41, 61, 62, 116, 104, 105, 115, 46, 100, 97, 116, 97, 67, 97, 112, 116, 117, 114, 101, 73, 110, 115, 116, 97, 110, 99, 101, 46, 114, 101, 112, 111, 114, 116, 67, 97, 109, 101, 114, 97, 80, 114, 111, 112, 101, 114, 116, 105, 101, 115, 40, 116, 41, 41, 125, 98, 114, 101, 97, 107, 59, 99, 97, 115, 101, 34, 115, 101, 116, 76, 111, 103, 76, 101, 118, 101, 108, 34, 58, 123, 108, 101, 116, 123, 100, 97, 116, 97, 58, 116, 125, 61, 101, 59, 116, 104, 105, 115, 46, 114, 101, 115, 112, 111, 110, 100, 87, 105, 116, 104, 40, 116, 46, 99, 111, 109, 109, 97, 110, 100, 44, 116, 46, 105, 100, 44, 40, 41, 61, 62, 123, 111, 46, 115, 101, 116, 76, 101, 118, 101, 108, 40, 116, 46, 108, 101, 118, 101, 108, 41, 125, 41, 125, 98, 114, 101, 97, 107, 59, 99, 97, 115, 101, 34, 101, 120, 116, 114, 97, 99, 116, 67, 101, 110, 116, 97, 117, 114, 117, 115, 76, 105, 99, 101, 110, 115, 101, 34, 58, 123, 108, 101, 116, 123, 100, 97, 116, 97, 58, 116, 125, 61, 101, 59, 116, 104, 105, 115, 46, 114, 101, 115, 112, 111, 110, 100, 87, 105, 116, 104, 40, 116, 46, 99, 111, 109, 109, 97, 110, 100, 44, 116, 46, 105, 100, 44, 40, 41, 61, 62, 116, 104, 105, 115, 46, 100, 97, 116, 97, 67, 97, 112, 116, 117, 114, 101, 73, 110, 115, 116, 97, 110, 99, 101, 46, 101, 120, 116, 114, 97, 99, 116, 67, 101, 110, 116, 97, 117, 114, 117, 115, 76, 105, 99, 101, 110, 115, 101, 40, 116, 46, 108, 105, 99, 101, 110, 115, 101, 75, 101, 121, 41, 41, 125, 98, 114, 101, 97, 107, 59, 100, 101, 102, 97, 117, 108, 116, 58, 114, 101, 116, 117, 114, 110, 32, 100, 101, 40, 101, 46, 100, 97, 116, 97, 41, 44, 33, 49, 125, 114, 101, 116, 117, 114, 110, 33, 48, 125, 125, 44, 104, 101, 61, 110, 101, 119, 32, 66, 40, 115, 101, 108, 102, 44, 123, 103, 101, 116, 58, 40, 41, 61, 62, 115, 101, 108, 102, 46, 77, 111, 100, 117, 108, 101, 44, 115, 101, 116, 58, 101, 61, 62, 123, 115, 101, 108, 102, 46, 77, 111, 100, 117, 108, 101, 61, 101, 125, 125, 41, 59, 118, 97, 114, 32, 95, 61, 99, 108, 97, 115, 115, 32, 101, 120, 116, 101, 110, 100, 115, 32, 84, 123, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 114, 44, 97, 41, 123, 115, 117, 112, 101, 114, 40, 114, 44, 97, 41, 59, 120, 40, 116, 104, 105, 115, 44, 34, 98, 97, 114, 99, 111, 100, 101, 67, 97, 112, 116, 117, 114, 101, 77, 111, 100, 101, 34, 41, 125, 99, 114, 101, 97, 116, 101, 66, 108, 117, 114, 114, 121, 84, 97, 98, 108, 101, 40, 114, 41, 123, 116, 104, 105, 115, 46, 77, 111, 100, 117, 108, 101, 46, 66, 108, 117, 114, 114, 121, 84, 97, 98, 108, 101, 67, 114, 101, 97, 116, 111, 114, 46, 99, 114, 101, 97, 116, 101, 84, 97, 98, 108, 101, 115, 40, 116, 104, 105, 115, 46, 99, 111, 110, 116, 101, 120, 116, 44, 114, 41, 44, 116, 104, 105, 115, 46, 119, 111, 114, 107, 101, 114, 70, 117, 110, 99, 116, 105, 111, 110, 115, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 123, 116, 121, 112, 101, 58, 34, 99, 114, 101, 97, 116, 101, 66, 108, 117, 114, 114, 121, 84, 97, 98, 108, 101, 82, 101, 115, 117, 108, 116, 34, 44, 112, 97, 121, 108, 111, 97, 100, 58, 123, 115, 121, 109, 98, 111, 108, 111, 103, 121, 58, 114, 125, 125, 41, 125, 103, 101, 116, 77, 111, 100, 101, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 101, 114, 115, 40, 41, 123, 116, 104, 105, 115, 46, 98, 97, 114, 99, 111, 100, 101, 67, 97, 112, 116, 117, 114, 101, 77, 111, 100, 101, 61, 110, 101, 119, 32, 78, 40, 116, 104, 105, 115, 44, 116, 104, 105, 115, 46, 77, 111, 100, 117, 108, 101, 44, 116, 104, 105, 115, 46, 119, 111, 114, 107, 101, 114, 70, 117, 110, 99, 116, 105, 111, 110, 115, 41, 59, 108, 101, 116, 32, 114, 61, 115, 117, 112, 101, 114, 46, 103, 101, 116, 77, 111, 100, 101, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 101, 114, 115, 40, 41, 59, 114, 101, 116, 117, 114, 110, 32, 114, 46, 112, 117, 115, 104, 95, 98, 97, 99, 107, 40, 116, 104, 105, 115, 46, 98, 97, 114, 99, 111, 100, 101, 67, 97, 112, 116, 117, 114, 101, 77, 111, 100, 101, 46, 103, 101, 116, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 101, 114, 40, 41, 41, 44, 114, 125, 103, 101, 116, 87, 97, 115, 109, 83, 105, 100, 101, 77, 111, 100, 117, 108, 101, 70, 105, 108, 101, 78, 97, 109, 101, 40, 41, 123, 114, 101, 116, 117, 114, 110, 34, 34, 125, 103, 101, 116, 87, 97, 115, 109, 67, 111, 114, 101, 70, 105, 108, 101, 78, 97, 109, 101, 40, 114, 41, 123, 114, 101, 116, 117, 114, 110, 32, 114, 63, 34, 115, 99, 97, 110, 100, 105, 116, 45, 100, 97, 116, 97, 99, 97, 112, 116, 117, 114, 101, 45, 115, 100, 107, 45, 98, 97, 114, 99, 111, 100, 101, 45, 115, 105, 109, 100, 46, 119, 97, 115, 109, 34, 58, 34, 115, 99, 97, 110, 100, 105, 116, 45, 100, 97, 116, 97, 99, 97, 112, 116, 117, 114, 101, 45, 115, 100, 107, 45, 98, 97, 114, 99, 111, 100, 101, 46, 119, 97, 115, 109, 34, 125, 103, 101, 116, 87, 97, 115, 109, 67, 111, 114, 101, 69, 120, 112, 101, 99, 116, 101, 100, 72, 97, 115, 104, 40, 114, 41, 123, 114, 101, 116, 117, 114, 110, 32, 114, 63, 34, 52, 53, 102, 99, 101, 97, 57, 49, 49, 100, 56, 101, 50, 49, 48, 48, 101, 56, 50, 102, 56, 52, 102, 50, 56, 99, 98, 100, 50, 51, 101, 97, 56, 102, 53, 53, 54, 50, 98, 101, 99, 97, 97, 98, 54, 51, 52, 57, 52, 57, 102, 102, 99, 52, 51, 51, 48, 50, 51, 50, 98, 98, 49, 54, 34, 58, 34, 55, 53, 51, 49, 56, 53, 52, 48, 57, 102, 51, 97, 97, 51, 101, 56, 49, 101, 100, 50, 54, 97, 98, 48, 57, 50, 51, 101, 101, 102, 48, 48, 56, 99, 98, 99, 98, 48, 99, 98, 56, 57, 102, 98, 100, 101, 48, 57, 55, 50, 50, 99, 102, 97, 49, 54, 100, 52, 48, 57, 102, 101, 57, 50, 34, 125, 125, 44, 78, 61, 99, 108, 97, 115, 115, 123, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 116, 44, 114, 44, 97, 41, 123, 120, 40, 116, 104, 105, 115, 44, 34, 98, 97, 114, 99, 111, 100, 101, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 101, 114, 34, 41, 59, 120, 40, 116, 104, 105, 115, 44, 34, 108, 105, 115, 116, 101, 110, 101, 114, 83, 101, 116, 34, 44, 33, 49, 41, 59, 120, 40, 116, 104, 105, 115, 44, 34, 99, 111, 114, 101, 69, 110, 103, 105, 110, 101, 34, 41, 59, 120, 40, 116, 104, 105, 115, 44, 34, 77, 111, 100, 117, 108, 101, 34, 41, 59, 120, 40, 116, 104, 105, 115, 44, 34, 119, 111, 114, 107, 101, 114, 70, 117, 110, 99, 116, 105, 111, 110, 115, 34, 41, 59, 116, 104, 105, 115, 46, 99, 111, 114, 101, 69, 110, 103, 105, 110, 101, 61, 116, 44, 116, 104, 105, 115, 46, 77, 111, 100, 117, 108, 101, 61, 114, 44, 116, 104, 105, 115, 46, 119, 111, 114, 107, 101, 114, 70, 117, 110, 99, 116, 105, 111, 110, 115, 61, 97, 44, 116, 104, 105, 115, 46, 115, 101, 116, 117, 112, 40, 41, 125, 115, 101, 116, 117, 112, 40, 41, 123, 108, 101, 116, 32, 116, 61, 116, 104, 105, 115, 46, 77, 111, 100, 117, 108, 101, 46, 66, 97, 114, 99, 111, 100, 101, 67, 97, 112, 116, 117, 114, 101, 76, 105, 115, 116, 101, 110, 101, 114, 46, 101, 120, 116, 101, 110, 100, 40, 34, 66, 97, 114, 99, 111, 100, 101, 67, 97, 112, 116, 117, 114, 101, 76, 105, 115, 116, 101, 110, 101, 114, 34, 44, 123, 100, 105, 100, 83, 99, 97, 110, 58, 40, 115, 44, 105, 44, 110, 41, 61, 62, 123, 116, 104, 105, 115, 46, 100, 105, 100, 83, 99, 97, 110, 40, 105, 44, 110, 41, 125, 44, 100, 105, 100, 85, 112, 100, 97, 116, 101, 83, 101, 115, 115, 105, 111, 110, 58, 40, 115, 44, 105, 41, 61, 62, 123, 116, 104, 105, 115, 46, 100, 105, 100, 85, 112, 100, 97, 116, 101, 83, 101, 115, 115, 105, 111, 110, 40, 105, 41, 125, 125, 41, 44, 114, 61, 116, 104, 105, 115, 46, 77, 111, 100, 117, 108, 101, 46, 70, 101, 101, 100, 98, 97, 99, 107, 46, 101, 120, 116, 101, 110, 100, 40, 34, 70, 101, 101, 100, 98, 97, 99, 107, 34, 44, 123, 101, 109, 105, 116, 58, 40, 41, 61, 62, 123, 116, 104, 105, 115, 46, 115, 117, 99, 99, 101, 115, 115, 70, 101, 101, 100, 98, 97, 99, 107, 40, 41, 125, 125, 41, 44, 97, 61, 116, 104, 105, 115, 46, 77, 111, 100, 117, 108, 101, 46, 66, 97, 114, 99, 111, 100, 101, 67, 97, 112, 116, 117, 114, 101, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 101, 114, 76, 105, 115, 116, 101, 110, 101, 114, 46, 101, 120, 116, 101, 110, 100, 40, 34, 66, 97, 114, 99, 111, 100, 101, 67, 97, 112, 116, 117, 114, 101, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 101, 114, 76, 105, 115, 116, 101, 110, 101, 114, 34, 44, 123, 111, 110, 77, 111, 100, 101, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 97, 116, 105, 111, 110, 70, 105, 110, 105, 115, 104, 101, 100, 58, 40, 115, 44, 105, 41, 61, 62, 123, 116, 104, 105, 115, 46, 108, 105, 115, 116, 101, 110, 101, 114, 83, 101, 116, 124, 124, 40, 105, 46, 97, 100, 100, 76, 105, 115, 116, 101, 110, 101, 114, 40, 110, 101, 119, 32, 116, 44, 49, 41, 44, 105, 46, 115, 101, 116, 83, 117, 99, 99, 101, 115, 115, 70, 101, 101, 100, 98, 97, 99, 107, 40, 110, 101, 119, 32, 114, 41, 44, 116, 104, 105, 115, 46, 108, 105, 115, 116, 101, 110, 101, 114, 83, 101, 116, 61, 33, 48, 41, 125, 44, 111, 110, 77, 111, 100, 101, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 97, 116, 105, 111, 110, 83, 116, 97, 114, 116, 101, 100, 40, 41, 123, 125, 44, 111, 110, 83, 101, 116, 116, 105, 110, 103, 115, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 97, 116, 105, 111, 110, 83, 116, 97, 114, 116, 101, 100, 40, 41, 123, 125, 44, 111, 110, 83, 101, 116, 116, 105, 110, 103, 115, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 97, 116, 105, 111, 110, 70, 105, 110, 105, 115, 104, 101, 100, 40, 41, 123, 125, 125, 41, 59, 116, 104, 105, 115, 46, 98, 97, 114, 99, 111, 100, 101, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 101, 114, 61, 110, 101, 119, 32, 116, 104, 105, 115, 46, 77, 111, 100, 117, 108, 101, 46, 66, 97, 114, 99, 111, 100, 101, 67, 97, 112, 116, 117, 114, 101, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 101, 114, 44, 116, 104, 105, 115, 46, 98, 97, 114, 99, 111, 100, 101, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 101, 114, 46, 115, 101, 116, 76, 105, 115, 116, 101, 110, 101, 114, 40, 110, 101, 119, 32, 97, 41, 125, 100, 105, 100, 83, 99, 97, 110, 40, 116, 44, 114, 41, 123, 108, 101, 116, 32, 97, 61, 116, 104, 105, 115, 46, 99, 111, 114, 101, 69, 110, 103, 105, 110, 101, 46, 99, 111, 110, 118, 101, 114, 116, 84, 111, 76, 111, 97, 100, 97, 98, 108, 101, 70, 114, 97, 109, 101, 68, 97, 116, 97, 40, 114, 41, 59, 116, 104, 105, 115, 46, 119, 111, 114, 107, 101, 114, 70, 117, 110, 99, 116, 105, 111, 110, 115, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 123, 116, 121, 112, 101, 58, 34, 98, 97, 114, 99, 111, 100, 101, 67, 97, 112, 116, 117, 114, 101, 68, 105, 100, 83, 99, 97, 110, 34, 44, 112, 97, 121, 108, 111, 97, 100, 58, 123, 115, 101, 115, 115, 105, 111, 110, 58, 74, 83, 79, 78, 46, 112, 97, 114, 115, 101, 40, 116, 46, 116, 111, 74, 115, 111, 110, 40, 41, 41, 44, 102, 114, 97, 109, 101, 68, 97, 116, 97, 58, 97, 125, 125, 41, 125, 100, 105, 100, 85, 112, 100, 97, 116, 101, 83, 101, 115, 115, 105, 111, 110, 40, 116, 41, 123, 116, 104, 105, 115, 46, 119, 111, 114, 107, 101, 114, 70, 117, 110, 99, 116, 105, 111, 110, 115, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 123, 116, 121, 112, 101, 58, 34, 98, 97, 114, 99, 111, 100, 101, 67, 97, 112, 116, 117, 114, 101, 68, 105, 100, 85, 112, 100, 97, 116, 101, 83, 101, 115, 115, 105, 111, 110, 34, 44, 112, 97, 121, 108, 111, 97, 100, 58, 74, 83, 79, 78, 46, 112, 97, 114, 115, 101, 40, 116, 46, 116, 111, 74, 115, 111, 110, 40, 41, 41, 125, 41, 125, 115, 117, 99, 99, 101, 115, 115, 70, 101, 101, 100, 98, 97, 99, 107, 40, 41, 123, 116, 104, 105, 115, 46, 119, 111, 114, 107, 101, 114, 70, 117, 110, 99, 116, 105, 111, 110, 115, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 40, 123, 116, 121, 112, 101, 58, 34, 115, 117, 99, 99, 101, 115, 115, 70, 101, 101, 100, 98, 97, 99, 107, 34, 125, 41, 125, 103, 101, 116, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 101, 114, 40, 41, 123, 114, 101, 116, 117, 114, 110, 32, 116, 104, 105, 115, 46, 98, 97, 114, 99, 111, 100, 101, 68, 101, 115, 101, 114, 105, 97, 108, 105, 122, 101, 114, 125, 125, 59, 118, 97, 114, 32, 85, 61, 99, 108, 97, 115, 115, 32, 101, 120, 116, 101, 110, 100, 115, 32, 66, 123, 99, 111, 110, 115, 116, 114, 117, 99, 116, 111, 114, 40, 116, 44, 114, 41, 123, 115, 117, 112, 101, 114, 40, 116, 44, 114, 41, 44, 116, 104, 105, 115, 46, 100, 97, 116, 97, 67, 97, 112, 116, 117, 114, 101, 73, 110, 115, 116, 97, 110, 99, 101, 61, 110, 101, 119, 32, 95, 40, 114, 44, 123, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 58, 116, 104, 105, 115, 46, 112, 111, 115, 116, 77, 101, 115, 115, 97, 103, 101, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 44, 103, 101, 116, 79, 102, 102, 115, 99, 114, 101, 101, 110, 67, 97, 110, 118, 97, 115, 58, 116, 104, 105, 115, 46, 103, 101, 116, 79, 102, 102, 115, 99, 114, 101, 101, 110, 67, 97, 110, 118, 97, 115, 46, 98, 105, 110, 100, 40, 116, 104, 105, 115, 41, 125, 41, 125, 111, 110, 77, 101, 115, 115, 97, 103, 101, 40, 116, 41, 123, 114, 101, 116, 117, 114, 110, 32, 116, 46, 100, 97, 116, 97, 46, 99, 111, 109, 109, 97, 110, 100, 61, 61, 61, 34, 99, 114, 101, 97, 116, 101, 66, 108, 117, 114, 114, 121, 84, 97, 98, 108, 101, 34, 63, 40, 116, 104, 105, 115, 46, 100, 97, 116, 97, 67, 97, 112, 116, 117, 114, 101, 73, 110, 115, 116, 97, 110, 99, 101, 46, 99, 114, 101, 97, 116, 101, 66, 108, 117, 114, 114, 121, 84, 97, 98, 108, 101, 40, 116, 46, 100, 97, 116, 97, 46, 115, 121, 109, 98, 111, 108, 111, 103, 121, 41, 44, 33, 48, 41, 58, 115, 117, 112, 101, 114, 46, 111, 110, 77, 101, 115, 115, 97, 103, 101, 40, 116, 41, 125, 125, 44, 68, 101, 61, 110, 101, 119, 32, 85, 40, 115, 101, 108, 102, 44, 123, 103, 101, 116, 58, 40, 41, 61, 62, 115, 101, 108, 102, 46, 77, 111, 100, 117, 108, 101, 44, 115, 101, 116, 58, 101, 61, 62, 123, 115, 101, 108, 102, 46, 77, 111, 100, 117, 108, 101, 61, 101, 125, 125, 41, 59, 125, 41, 40, 41, 59, 10])], { type: "text/javascript" }));
var K = u1;
var S = class extends Nr {
  static async create(t) {
    var o, n;
    let a = new S(t.libraryLocation, (o = t.preloadEngine) != null ? o : false, t.loadProgressNotifier);
    return a.workerCommand("setLogLevel", { level: (n = t.logLevel) != null ? n : f.Level.Debug }), await a.load(), a;
  }
  get dataCaptureWorker() {
    var t;
    return this._dataCaptureWorker = (t = this._dataCaptureWorker) != null ? t : new Worker(K, { name: `SDCLoader ${this.isPreloadEngine ? " (preload)" : ""}` }), this._dataCaptureWorker;
  }
  async workerCommand(t, a, o) {
    return new Promise((n, l2) => {
      let b = this.workerCommandId++;
      this.workerTasks.set(b, { resolve: n, reject: l2, command: t });
      let s = F2(O({}, a), { command: t, id: b });
      this.dataCaptureWorker.postMessage(s, o);
    });
  }
};
var $ = ((c) => (c.EAN13UPCA = "ean13Upca", c.UPCE = "upce", c.EAN8 = "ean8", c.Code39 = "code39", c.Code93 = "code93", c.Code128 = "code128", c.Code11 = "code11", c.Code25 = "code25", c.Codabar = "codabar", c.InterleavedTwoOfFive = "interleavedTwoOfFive", c.MSIPlessey = "msiPlessey", c.QR = "qr", c.DataMatrix = "dataMatrix", c.Aztec = "aztec", c.MaxiCode = "maxicode", c.DotCode = "dotcode", c.KIX = "kix", c.RM4SCC = "rm4scc", c.GS1Databar = "databar", c.GS1DatabarExpanded = "databarExpanded", c.GS1DatabarLimited = "databarLimited", c.PDF417 = "pdf417", c.MicroPDF417 = "microPdf417", c.MicroQR = "microQr", c.Code32 = "code32", c.Lapa4SC = "lapa4sc", c.IATATwoOfFive = "iata2of5", c.MatrixTwoOfFive = "matrix2of5", c.USPSIntelligentMail = "uspsIntelligentMail", c))($ || {});
var b1 = ((a) => (a.A = "A", a.B = "B", a.C = "C", a))(b1 || {});
var v = class {
  constructor(e) {
    r(this, "_identifier");
    r(this, "_readableName");
    r(this, "_isAvailable");
    r(this, "_isColorInvertible");
    r(this, "_activeSymbolCountRange");
    r(this, "_defaultSymbolCountRange");
    r(this, "_supportedExtensions");
    if (!!e)
      return v.all[v.all.findIndex((t) => t.identifier === e)];
  }
  static get all() {
    return this.defaults().SymbologyDescriptions;
  }
  get identifier() {
    return this._identifier;
  }
  get symbology() {
    return this.identifier;
  }
  get readableName() {
    return this._readableName;
  }
  get isAvailable() {
    return this._isAvailable;
  }
  get isColorInvertible() {
    return this._isColorInvertible;
  }
  get activeSymbolCountRange() {
    return this._activeSymbolCountRange;
  }
  get defaultSymbolCountRange() {
    return this._defaultSymbolCountRange;
  }
  get supportedExtensions() {
    return [...this._supportedExtensions];
  }
  static fromJSON(e) {
    let t = new v();
    return t._identifier = e.identifier, t._readableName = e.readableName, t._isAvailable = e.isAvailable, t._isColorInvertible = e.isColorInvertible, t._activeSymbolCountRange = N.fromJSON(e.activeSymbolCountRange), t._defaultSymbolCountRange = N.fromJSON(e.defaultSymbolCountRange), t._supportedExtensions = new Set(e.supportedExtensions), t;
  }
  static forIdentifier(e) {
    return v.all.findIndex((a) => a.identifier === e) === -1 ? null : new v(e);
  }
};
var B2 = v;
r(B2, "defaults");
var k2 = class {
  constructor() {
    r(this, "_symbology");
    r(this, "extensions");
    r(this, "isEnabled");
    r(this, "isColorInvertedEnabled");
    r(this, "checksums");
    r(this, "activeSymbolCounts");
  }
  get symbology() {
    return this._symbology;
  }
  get enabledExtensions() {
    return [...this.extensions];
  }
  static fromJSON(e) {
    let t = new k2();
    return t.extensions = new Set(e.extensions), t.isEnabled = e.enabled, t.isColorInvertedEnabled = e.colorInvertedEnabled, t.checksums = new Set(e.checksums), t.activeSymbolCounts = e.activeSymbolCounts, t;
  }
  setExtensionEnabled(e, t) {
    t ? this.extensions.add(e) : this.extensions.delete(e);
  }
  toJSONObject() {
    return { activeSymbolCounts: [...this.activeSymbolCounts], checksums: [...this.checksums], colorInvertedEnabled: this.isColorInvertedEnabled, enabled: this.isEnabled, extensions: [...this.extensions] };
  }
};
var f1 = ((s) => (s.Mod10 = "mod10", s.Mod11 = "mod11", s.Mod16 = "mod16", s.Mod43 = "mod43", s.Mod47 = "mod47", s.Mod103 = "mod103", s.Mod10AndMod11 = "mod1110", s.Mod10AndMod10 = "mod1010", s))(f1 || {});
var I = class {
  constructor() {
    r(this, "_ianaName");
    r(this, "_startIndex");
    r(this, "_endIndex");
  }
  get ianaName() {
    return this._ianaName;
  }
  get startIndex() {
    return this._startIndex;
  }
  get endIndex() {
    return this._endIndex;
  }
  static fromJSON(e) {
    let t = new I();
    return t._ianaName = e.ianaName, t._startIndex = e.startIndex, t._endIndex = e.endIndex, t;
  }
};
var y1 = ((l2) => (l2.None = "none", l2.Unknown = "unknown", l2.Linked = "linked", l2.GS1TypeA = "gs1TypeA", l2.GS1TypeB = "gs1TypeB", l2.GS1TypeC = "gs1TypeC", l2))(y1 || {});
var N = class {
  constructor() {
    r(this, "_minimum");
    r(this, "_maximum");
    r(this, "_step");
  }
  get minimum() {
    return this._minimum;
  }
  get maximum() {
    return this._maximum;
  }
  get step() {
    return this._step;
  }
  get isFixed() {
    return this.minimum === this.maximum || this.step <= 0;
  }
  static fromJSON(e) {
    let t = new N();
    return t._minimum = e.minimum, t._maximum = e.maximum, t._step = e.step, t;
  }
  toJSONObject() {
    return { maximum: this.maximum, minimum: this.minimum, step: this.step };
  }
};
var h = class {
  constructor() {
    r(this, "_symbology");
    r(this, "_data");
    r(this, "_rawData");
    r(this, "_compositeData");
    r(this, "_compositeRawData");
    r(this, "_addOnData");
    r(this, "_encodingRanges");
    r(this, "_location");
    r(this, "_isGS1DataCarrier");
    r(this, "_compositeFlag");
    r(this, "_isColorInverted");
    r(this, "_symbolCount");
    r(this, "_frameID");
  }
  get symbology() {
    return this._symbology;
  }
  get data() {
    return this._data;
  }
  get rawData() {
    return this._rawData;
  }
  get compositeData() {
    return this._compositeData;
  }
  get compositeRawData() {
    return this._compositeRawData;
  }
  get addOnData() {
    return this._addOnData;
  }
  get encodingRanges() {
    return this._encodingRanges;
  }
  get location() {
    return this._location;
  }
  get isGS1DataCarrier() {
    return this._isGS1DataCarrier;
  }
  get compositeFlag() {
    return this._compositeFlag;
  }
  get isColorInverted() {
    return this._isColorInverted;
  }
  get symbolCount() {
    return this._symbolCount;
  }
  get frameID() {
    return this._frameID;
  }
  static fromJSON(e) {
    var a;
    let t = new h();
    return t._symbology = e.symbology, t._data = e.data, t._rawData = e.rawData, t._compositeData = e.compositeData, t._compositeRawData = e.compositeRawData, t._addOnData = (a = e.addOnData) != null ? a : null, t._isGS1DataCarrier = e.isGS1DataCarrier, t._compositeFlag = e.compositeFlag, t._isColorInverted = e.isColorInverted, t._symbolCount = e.symbolCount, t._frameID = e.frameId, t._encodingRanges = e.encodingRanges.map(I.fromJSON), t._location = Ee.fromJSON(e.location), t;
  }
};
var D2 = class {
  constructor() {
    r(this, "_location");
    r(this, "_frameID");
  }
  get location() {
    return this._location;
  }
  get frameID() {
    return this._frameID;
  }
  static fromJSON(e) {
    let t = new D2();
    return t._location = Ee.fromJSON(e.location), t._frameID = e.frameId, t;
  }
};
var u = class {
  constructor(e) {
    r(this, "eventEmitter", new H2.EventEmitter());
    r(this, "licenseKey");
    r(this, "preload");
    r(this, "libraryLocation");
    r(this, "logLevel");
    r(this, "queuedBlurryRecognitionSymbologies", [...u.availableBlurryRecognitionSymbologies.values()]);
    r(this, "readyBlurryRecognitionSymbologies", /* @__PURE__ */ new Set());
    r(this, "dataCaptureWorker");
    r(this, "context");
    this.licenseKey = e.licenseKey, this.libraryLocation = e.libraryLocation, this.preload = e.preload, this.logLevel = e.logLevel;
  }
  static async create(e) {
    let t = B.userAgentInfo.getBrowser().name;
    if (t != null && t.includes("Edge")) {
      let a = new Worker(URL.createObjectURL(new Blob([`(function ${u.workerIndexedDBSupportTestFunction.toString()})()`], { type: "text/javascript" })));
      return new Promise((o) => {
        a.onmessage = (n) => {
          a.terminate(), o(new u(F2(O({}, e), { preload: n.data })));
        };
      });
    }
    return new u(e);
  }
  static workerIndexedDBSupportTestFunction() {
    try {
      indexedDB.deleteDatabase("scandit_indexeddb_support_test"), postMessage(true);
    } catch (e) {
      postMessage(false);
    }
  }
  async prepareBlurryTables(e) {
    let t = true;
    if (this.preload)
      try {
        t = await this.checkBlurryTablesAlreadyAvailable(e);
      } catch (a) {
        console.error(a);
      }
    t ? (this.queuedBlurryRecognitionSymbologies = [], this.readyBlurryRecognitionSymbologies = new Set(u.availableBlurryRecognitionSymbologies), this.eventEmitter.emit("blurryTablesUpdate", new Set(this.readyBlurryRecognitionSymbologies))) : (this.dataCaptureWorker = await S.create({ libraryLocation: this.libraryLocation, preloadEngine: true, logLevel: this.logLevel }), this.dataCaptureWorker.addWorkerListener(this.dataCaptureWorkerOnMessage.bind(this)), this.context = new $t(this.licenseKey, { dataCaptureInstance: this.dataCaptureWorker, delayedRegistration: true, highEndBlurryRecognition: e }), await this.context.initialize(false), this.context.addListener({ didStartObservingContext: () => {
      this.createNextBlurryTableSymbology();
    } }));
  }
  on(e, t) {
    e === "blurryTablesUpdate" && (this.readyBlurryRecognitionSymbologies.size === u.availableBlurryRecognitionSymbologies.size ? t(this.readyBlurryRecognitionSymbologies) : this.eventEmitter.on(e, t));
  }
  updateBlurryRecognitionPriority(e) {
    let t = [...this.queuedBlurryRecognitionSymbologies];
    for (let a of this.getEnabledSymbologies(e)) {
      let o = t.indexOf(a);
      o !== -1 && t.unshift(t.splice(o, 1)[0]);
    }
    this.queuedBlurryRecognitionSymbologies = t;
  }
  isBlurryRecognitionAvailable(e) {
    return this.getEnabledSymbologies(e).every((a) => this.readyBlurryRecognitionSymbologies.has(a));
  }
  getEnabledSymbologies(e) {
    return [...u.availableBlurryRecognitionSymbologies.values()].filter((t) => e.enabledSymbologies.includes(t));
  }
  createNextBlurryTableSymbology() {
    let e;
    do
      e = this.queuedBlurryRecognitionSymbologies.shift();
    while (e != null && this.readyBlurryRecognitionSymbologies.has(e));
    e != null && this.dataCaptureWorker.workerCommand("createBlurryTable", { symbology: e });
  }
  async checkBlurryTablesAlreadyAvailable(e) {
    return new Promise((t) => {
      let a = indexedDB.open(u.writableDataPath);
      function o() {
        a.result.close(), t(false);
      }
      a.onupgradeneeded = () => {
        try {
          a.result.createObjectStore(u.fsObjectStoreName);
        } catch (n) {
        }
      }, a.onsuccess = () => {
        try {
          let n = a.result.transaction(u.fsObjectStoreName, "readonly");
          n.onerror = o;
          let l2 = n.objectStore(u.fsObjectStoreName).getAllKeys();
          l2.onsuccess = () => {
            if (a.result.close(), (e ? u.highEndBlurryTableFiles : u.defaultBlurryTableFiles).every((b) => l2.result.includes(b))) {
              t(true);
              return;
            }
            t(false);
          }, l2.onerror = o;
        } catch (n) {
          o.call({ error: n });
        }
      }, a.onblocked = a.onerror = o;
    });
  }
  dataCaptureWorkerOnMessage(e) {
    if (e.type === "createBlurryTableResult") {
      let { symbology: t } = e.payload;
      this.readyBlurryRecognitionSymbologies.add(t), ["ean8", "ean13Upca", "upce"].includes(t) ? (this.readyBlurryRecognitionSymbologies.add("ean13Upca"), this.readyBlurryRecognitionSymbologies.add("ean8"), this.readyBlurryRecognitionSymbologies.add("upce")) : ["code32", "code39"].includes(t) && (this.readyBlurryRecognitionSymbologies.add("code32"), this.readyBlurryRecognitionSymbologies.add("code39")), this.eventEmitter.emit("blurryTablesUpdate", new Set(this.readyBlurryRecognitionSymbologies)), this.readyBlurryRecognitionSymbologies.size === u.availableBlurryRecognitionSymbologies.size ? setTimeout(async () => {
        this.context && await this.context.dispose(), this.dataCaptureWorker.terminateDataCaptureWorker();
      }, 250) : this.createNextBlurryTableSymbology();
    }
  }
};
var y = u;
r(y, "writableDataPath", "/scandit_sync_folder_preload"), r(y, "fsObjectStoreName", "FILE_DATA"), r(y, "defaultBlurryTableFiles", ["/20919bc5228479679a264521447f9c87.scandit", "/855b1fdf70718074e40e97328ea23039.scandit", "/92038ea8367cfcdfebed31e0ad1c5c6d.scandit", "/1c02d3aa478da28ebf5756c342565017.scandit", "/ce00c525c9f8160b0cd12b09fa739fbf.scandit", "/e5e60e4cc82ecb0f1b7f7bfaabfe7a8c.scandit", "/3a63262b342a4f603b3626a98565e174.scandit", "/e9bb1a0e5ec3ddd037a91497c09d8daa.scandit", "/f6f53a0c00683f6b349f29ff76107662.scandit", "/41db165d92b2369b4e7c841e29ced06a.scandit", "/4571aa251af4c3d3bd63f47a0b54d30d.scandit", "/94c3ff79d8c922c01f048c1deac9d89b.scandit", "/7a1d15cb731e1a8fd146427bb7920922.scandit", "/b874f8f9aa42b909b68c8cb59db5b2aa.scandit", "/f867458021a0bd9b2bd2448958e98d9b.scandit", "/828281aceea050a47657fab7fc470b2c.scandit", "/9e06fc65990c496de0da6c71376758b3.scandit", "/ef939d962bc030919393e822be1ba6f7.scandit", "/04c912268484e863833dcf31c8ad7898.scandit", "/401b20aa6d4551f9d001c20581ece64e.scandit", "/b8f73417d6947f4c4fc205329703804c.scandit"].map((e) => `${u.writableDataPath}${e}`)), r(y, "highEndBlurryTableFiles", ["/9acb7e350bb910f2a1309b31214f9a4e.scandit", "/b2dc1168d2bb679c233068f078944e41.scandit", "/4b93e8f2d0a529874f5737e04b9784c1.scandit", "/4e9821a5898a46445b8beed46626581f.scandit", "/260b8a8fdf8e5fbf2526e138c7c0bbb5.scandit", "/8c561caef1b9c4b852811f5c2374bb8e.scandit", "/f63809050de2702c9527eb1891b337e5.scandit", "/576639d5aa0b5f5d19bfe3864eab749a.scandit", "/e645b5549783972888fc1cf69163de27.scandit", "/9dd619e2ae39d75ecbc1cb9391b04aad.scandit", "/0fa0b08a89e9ce63edc91beab6206461.scandit", "/c0a273dbcef08a1e4a9cc387752b4c0e.scandit", "/00caaf030fbdfcec26df3f8d3a400f2e.scandit", "/b53f643fcc542977ffe8ce30d1f8beb0.scandit", "/825a85c14ca9e19e2bc211c8e82c1e53.scandit", "/23b2c91f549629488800b671406ed399.scandit", "/7c43295d738875ce8265ecf037fa1b12.scandit", "/3f9b28270bc4a077fde6b547574d5780.scandit", "/814cf529041339e4f6598e6b69b7c608.scandit", "/ddc7990e91e2293216c98e6bb1ac024a.scandit", "/75e3eaabf7987fdb433be1d1fe92032a.scandit", "/497112cbe8674c21c4c8bd7f0e957b71.scandit", "/94ae9b357c6061d489c10d7ac73e3139.scandit", "/df4383c06c7a85a8e8c2a1d86b61e6bc.scandit", "/5aee7e2ea252b3b05145493721caa9b1.scandit", "/aeb733f6d7a86c4115826b2c89df2720.scandit", "/c22f49a08f466b877208c4a31569bd9d.scandit", "/1524b7b4fa54aee57369c54b86bd65f4.scandit", "/cf3110c18bec369705b94e50aae077ab.scandit", "/bb7b0c63371cfa0787a90b19c3650587.scandit", "/6e4454c7a20910115e6653b1cd607e12.scandit", "/492339332477a5c9efa2cb6701f754d3.scandit", "/50919ffed0c9a78f19ff465bdfd4f2b8.scandit", "/c0795f18a2ebfd0b6835be5ad787a040.scandit", "/1e0a5fb89be9e843b96174b0c182727b.scandit", "/14126c0d924e0128f6caca76ecdceb6d.scandit", "/5f43256a6a2032966dd44c6a3eef53eb.scandit", "/83bb18bb71dead54a013fe2cc85ad4f7.scandit", "/6ee5a2338030d3282516040607182b26.scandit", "/7a341c4ba35f02335fd3200ec02ff205.scandit", "/6ebdbff2f3739b35ba8f68517451eb37.scandit", "/a5ba033b43d4a2c80dab49eaa2d90162.scandit"].map((e) => `${u.writableDataPath}${e}`)), r(y, "availableBlurryRecognitionSymbologies", /* @__PURE__ */ new Set(["ean13Upca", "ean8", "code32", "code39", "code128", "code93", "interleavedTwoOfFive", "msiPlessey", "codabar", "upce"]));
var w = class {
  constructor() {
    r(this, "success", wt.defaultFeedback);
  }
  static get default() {
    return new w();
  }
  toJSONObject() {
    return { success: this.success.toJSONObject() };
  }
};
var x = class {
  constructor() {
    r(this, "_newlyRecognizedBarcodes");
    r(this, "_newlyLocalizedBarcodes");
    r(this, "_frameSequenceID");
  }
  get newlyRecognizedBarcodes() {
    return this._newlyRecognizedBarcodes;
  }
  get newlyLocalizedBarcodes() {
    return this._newlyLocalizedBarcodes;
  }
  get frameSequenceID() {
    return this._frameSequenceID;
  }
  static fromJSON(e) {
    let t = new x();
    return t._newlyRecognizedBarcodes = e.newlyRecognizedBarcodes.map((a) => h.fromJSON(a)), t._newlyLocalizedBarcodes = e.newlyLocalizedBarcodes.map((a) => D2.fromJSON(a)), t._frameSequenceID = e.frameSequenceId, t;
  }
};
var v1 = (i) => ({ SymbologySettings: Object.keys(i.SymbologySettings).reduce((e, t) => (e[t] = k2.fromJSON(JSON.parse(i.SymbologySettings[t])), e), {}), SymbologyDescriptions: i.SymbologyDescriptions.map((e) => B2.fromJSON(JSON.parse(e))), CompositeTypeDescriptions: i.CompositeTypeDescriptions.map((e) => JSON.parse(e)), BarcodeCapture: { BarcodeCaptureOverlay: { defaultStyle: i.BarcodeCapture.BarcodeCaptureOverlay.defaultStyle, DefaultBrush: { fillColor: Y.fromJSON(i.BarcodeCapture.BarcodeCaptureOverlay.DefaultBrush.fillColor), strokeColor: Y.fromJSON(i.BarcodeCapture.BarcodeCaptureOverlay.DefaultBrush.strokeColor), strokeWidth: i.BarcodeCapture.BarcodeCaptureOverlay.DefaultBrush.strokeWidth }, styles: Object.fromEntries(Object.keys(i.BarcodeCapture.BarcodeCaptureOverlay.styles).map((e) => [e, { DefaultBrush: { fillColor: Y.fromJSON(i.BarcodeCapture.BarcodeCaptureOverlay.styles[e].DefaultBrush.fillColor), strokeColor: Y.fromJSON(i.BarcodeCapture.BarcodeCaptureOverlay.styles[e].DefaultBrush.strokeColor), strokeWidth: i.BarcodeCapture.BarcodeCaptureOverlay.styles[e].DefaultBrush.strokeWidth } }])) }, BarcodeCaptureSettings: { codeDuplicateFilter: i.BarcodeCapture.BarcodeCaptureSettings.codeDuplicateFilter }, RecommendedCameraSettings: me.fromJSON(i.BarcodeCapture.RecommendedCameraSettings) }, BarcodeTracking: { RecommendedCameraSettings: me.fromJSON(i.BarcodeTracking.RecommendedCameraSettings), BarcodeTrackingBasicOverlay: { DefaultBrush: { fillColor: Y.fromJSON(i.BarcodeTracking.BarcodeTrackingBasicOverlay.DefaultBrush.fillColor), strokeColor: Y.fromJSON(i.BarcodeTracking.BarcodeTrackingBasicOverlay.DefaultBrush.strokeColor), strokeWidth: i.BarcodeTracking.BarcodeTrackingBasicOverlay.DefaultBrush.strokeWidth } } }, SparkCapture: { SparkCaptureSettings: { codeDuplicateFilter: i.SparkCapture.SparkCaptureSettings.codeDuplicateFilter } } });
var f2 = v1({ BarcodeCapture: { BarcodeCaptureSettings: { codeDuplicateFilter: 0 }, BarcodeCaptureOverlay: { defaultStyle: "frame", DefaultBrush: { fillColor: "#00000000", strokeColor: "#FFFFFFFF", strokeWidth: 3 }, styles: { frame: { DefaultBrush: { fillColor: "#00000000", strokeColor: "#FFFFFFFF", strokeWidth: 3 } } } }, RecommendedCameraSettings: { zoomFactor: 1, zoomGestureZoomFactor: 2, focusGestureStrategy: "manualUntilCapture", preferredResolution: "auto" } }, SymbologySettings: { ean13Upca: JSON.stringify({ activeSymbolCounts: [12], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), ean8: JSON.stringify({ activeSymbolCounts: [8], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), upce: JSON.stringify({ activeSymbolCounts: [6], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), code128: JSON.stringify({ activeSymbolCounts: [40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: ["strip_leading_fnc1"] }), code39: JSON.stringify({ activeSymbolCounts: [40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), code93: JSON.stringify({ activeSymbolCounts: [40, 39, 38, 37, 36, 35, 34, 33, 32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), interleavedTwoOfFive: JSON.stringify({ activeSymbolCounts: [40, 38, 36, 34, 32, 30, 28, 26, 24, 22, 20, 18, 16, 14, 12, 10, 8, 6], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), qr: JSON.stringify({ activeSymbolCounts: [], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), dataMatrix: JSON.stringify({ activeSymbolCounts: [], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: ["strip_leading_fnc1"] }), pdf417: JSON.stringify({ activeSymbolCounts: [], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), msiPlessey: JSON.stringify({ activeSymbolCounts: [32, 31, 30, 29, 28, 27, 26, 25, 24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7, 6], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), databar: JSON.stringify({ activeSymbolCounts: [2], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), databarExpanded: JSON.stringify({ activeSymbolCounts: [], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), codabar: JSON.stringify({ activeSymbolCounts: [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), aztec: JSON.stringify({ activeSymbolCounts: [], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), maxicode: JSON.stringify({ activeSymbolCounts: [], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), code11: JSON.stringify({ activeSymbolCounts: [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7], checksums: ["mod11"], colorInvertedEnabled: false, enabled: false, extensions: [] }), databarLimited: JSON.stringify({ activeSymbolCounts: [1], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), code25: JSON.stringify({ activeSymbolCounts: [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), microPdf417: JSON.stringify({ activeSymbolCounts: [], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), rm4scc: JSON.stringify({ activeSymbolCounts: [24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), kix: JSON.stringify({ activeSymbolCounts: [24, 23, 22, 21, 20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), dotcode: JSON.stringify({ activeSymbolCounts: [], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), microQr: JSON.stringify({ activeSymbolCounts: [], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), code32: JSON.stringify({ activeSymbolCounts: [8], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), lapa4sc: JSON.stringify({ activeSymbolCounts: [16], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), iata2of5: JSON.stringify({ activeSymbolCounts: [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), matrix2of5: JSON.stringify({ activeSymbolCounts: [20, 19, 18, 17, 16, 15, 14, 13, 12, 11, 10, 9, 8, 7], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }), uspsIntelligentMail: JSON.stringify({ activeSymbolCounts: [65], checksums: [], colorInvertedEnabled: false, enabled: false, extensions: [] }) }, BarcodeTracking: { RecommendedCameraSettings: { zoomFactor: 1, zoomGestureZoomFactor: 1, focusGestureStrategy: "none", preferredResolution: "fullHd" }, BarcodeTrackingBasicOverlay: { DefaultBrush: { fillColor: "#00000000", strokeColor: "#FFFFFFFF", strokeWidth: 3 } } }, CompositeTypeDescriptions: [JSON.stringify({ symbologies: ["ean8", "ean13Upca", "microPdf417", "databarLimited", "upce", "databar", "databarExpanded"], types: ["A"] }), JSON.stringify({ symbologies: ["ean8", "ean13Upca", "microPdf417", "databarLimited", "upce", "databar", "databarExpanded"], types: ["B"] }), JSON.stringify({ symbologies: ["code128", "pdf417"], types: ["C"] })], SparkCapture: { SparkCaptureSettings: { codeDuplicateFilter: 1e3 } }, SymbologyDescriptions: [JSON.stringify({ activeSymbolCountRange: { maximum: 12, minimum: 12, step: 1 }, defaultSymbolCountRange: { maximum: 12, minimum: 12, step: 1 }, identifier: "ean13Upca", isAvailable: true, isColorInvertible: true, readableName: "EAN-13/UPC-A", supportedChecksums: [], supportedExtensions: ["two_digit_add_on", "strict", "remove_leading_upca_zero", "relaxed_sharp_quiet_zone_check", "five_digit_add_on"] }), JSON.stringify({ activeSymbolCountRange: { maximum: 8, minimum: 8, step: 1 }, defaultSymbolCountRange: { maximum: 8, minimum: 8, step: 1 }, identifier: "ean8", isAvailable: true, isColorInvertible: true, readableName: "EAN-8", supportedChecksums: [], supportedExtensions: ["two_digit_add_on", "strict", "relaxed_sharp_quiet_zone_check", "five_digit_add_on"] }), JSON.stringify({ activeSymbolCountRange: { maximum: 6, minimum: 6, step: 1 }, defaultSymbolCountRange: { maximum: 6, minimum: 6, step: 1 }, identifier: "upce", isAvailable: true, isColorInvertible: true, readableName: "UPC-E", supportedChecksums: [], supportedExtensions: ["two_digit_add_on", "strict", "return_as_upca", "remove_leading_upca_zero", "five_digit_add_on"] }), JSON.stringify({ activeSymbolCountRange: { maximum: 50, minimum: 4, step: 1 }, defaultSymbolCountRange: { maximum: 40, minimum: 6, step: 1 }, identifier: "code128", isAvailable: true, isColorInvertible: true, readableName: "Code 128", supportedChecksums: [], supportedExtensions: ["strict"] }), JSON.stringify({ activeSymbolCountRange: { maximum: 50, minimum: 3, step: 1 }, defaultSymbolCountRange: { maximum: 40, minimum: 6, step: 1 }, identifier: "code39", isAvailable: true, isColorInvertible: true, readableName: "Code 39", supportedChecksums: ["mod43"], supportedExtensions: ["strict", "relaxed_sharp_quiet_zone_check", "full_ascii"] }), JSON.stringify({ activeSymbolCountRange: { maximum: 60, minimum: 5, step: 1 }, defaultSymbolCountRange: { maximum: 40, minimum: 6, step: 1 }, identifier: "code93", isAvailable: true, isColorInvertible: false, readableName: "Code 93", supportedChecksums: [], supportedExtensions: ["strict"] }), JSON.stringify({ activeSymbolCountRange: { maximum: 50, minimum: 4, step: 2 }, defaultSymbolCountRange: { maximum: 40, minimum: 6, step: 2 }, identifier: "interleavedTwoOfFive", isAvailable: true, isColorInvertible: false, readableName: "Interleaved Two of Five", supportedChecksums: [], supportedExtensions: ["strict"] }), JSON.stringify({ activeSymbolCountRange: { maximum: 0, minimum: 0, step: 0 }, defaultSymbolCountRange: { maximum: 0, minimum: 0, step: 0 }, identifier: "qr", isAvailable: true, isColorInvertible: true, readableName: "QR Code", supportedChecksums: [], supportedExtensions: ["guess_encoding"] }), JSON.stringify({ activeSymbolCountRange: { maximum: 0, minimum: 0, step: 0 }, defaultSymbolCountRange: { maximum: 0, minimum: 0, step: 0 }, identifier: "dataMatrix", isAvailable: true, isColorInvertible: true, readableName: "Data Matrix", supportedChecksums: [], supportedExtensions: ["direct_part_marking_mode"] }), JSON.stringify({ activeSymbolCountRange: { maximum: 0, minimum: 0, step: 0 }, defaultSymbolCountRange: { maximum: 0, minimum: 0, step: 0 }, identifier: "pdf417", isAvailable: true, isColorInvertible: false, readableName: "PDF417", supportedChecksums: [], supportedExtensions: [] }), JSON.stringify({ activeSymbolCountRange: { maximum: 32, minimum: 3, step: 1 }, defaultSymbolCountRange: { maximum: 32, minimum: 6, step: 1 }, identifier: "msiPlessey", isAvailable: true, isColorInvertible: false, readableName: "MSI Plessey", supportedChecksums: ["mod11", "mod1010", "mod1110"], supportedExtensions: ["strict"] }), JSON.stringify({ activeSymbolCountRange: { maximum: 2, minimum: 2, step: 1 }, defaultSymbolCountRange: { maximum: 2, minimum: 2, step: 1 }, identifier: "databar", isAvailable: true, isColorInvertible: false, readableName: "GS1 DataBar 14", supportedChecksums: [], supportedExtensions: ["strict"] }), JSON.stringify({ activeSymbolCountRange: { maximum: 0, minimum: 0, step: 0 }, defaultSymbolCountRange: { maximum: 0, minimum: 0, step: 0 }, identifier: "databarExpanded", isAvailable: true, isColorInvertible: false, readableName: "GS1 DataBar Expanded", supportedChecksums: [], supportedExtensions: ["strict"] }), JSON.stringify({ activeSymbolCountRange: { maximum: 34, minimum: 3, step: 1 }, defaultSymbolCountRange: { maximum: 20, minimum: 7, step: 1 }, identifier: "codabar", isAvailable: true, isColorInvertible: false, readableName: "Codabar", supportedChecksums: ["mod11", "mod16"], supportedExtensions: ["strict"] }), JSON.stringify({ activeSymbolCountRange: { maximum: 0, minimum: 0, step: 0 }, defaultSymbolCountRange: { maximum: 0, minimum: 0, step: 0 }, identifier: "aztec", isAvailable: true, isColorInvertible: false, readableName: "Aztec", supportedChecksums: [], supportedExtensions: [] }), JSON.stringify({ activeSymbolCountRange: { maximum: 0, minimum: 0, step: 0 }, defaultSymbolCountRange: { maximum: 0, minimum: 0, step: 0 }, identifier: "maxicode", isAvailable: true, isColorInvertible: false, readableName: "MaxiCode", supportedChecksums: [], supportedExtensions: [] }), JSON.stringify({ activeSymbolCountRange: { maximum: 34, minimum: 5, step: 1 }, defaultSymbolCountRange: { maximum: 20, minimum: 7, step: 1 }, identifier: "code11", isAvailable: true, isColorInvertible: false, readableName: "Code 11", supportedChecksums: ["mod11"], supportedExtensions: ["strict"] }), JSON.stringify({ activeSymbolCountRange: { maximum: 1, minimum: 1, step: 1 }, defaultSymbolCountRange: { maximum: 1, minimum: 1, step: 1 }, identifier: "databarLimited", isAvailable: true, isColorInvertible: false, readableName: "GS1 DataBar Limited", supportedChecksums: [], supportedExtensions: ["strict"] }), JSON.stringify({ activeSymbolCountRange: { maximum: 32, minimum: 3, step: 1 }, defaultSymbolCountRange: { maximum: 20, minimum: 7, step: 1 }, identifier: "code25", isAvailable: true, isColorInvertible: false, readableName: "Code 25", supportedChecksums: [], supportedExtensions: ["strict"] }), JSON.stringify({ activeSymbolCountRange: { maximum: 0, minimum: 0, step: 0 }, defaultSymbolCountRange: { maximum: 0, minimum: 0, step: 0 }, identifier: "microPdf417", isAvailable: true, isColorInvertible: false, readableName: "MicroPDF417", supportedChecksums: [], supportedExtensions: [] }), JSON.stringify({ activeSymbolCountRange: { maximum: 50, minimum: 4, step: 1 }, defaultSymbolCountRange: { maximum: 24, minimum: 7, step: 1 }, identifier: "rm4scc", isAvailable: true, isColorInvertible: false, readableName: "RM4SCC", supportedChecksums: [], supportedExtensions: [] }), JSON.stringify({ activeSymbolCountRange: { maximum: 50, minimum: 4, step: 1 }, defaultSymbolCountRange: { maximum: 24, minimum: 7, step: 1 }, identifier: "kix", isAvailable: true, isColorInvertible: false, readableName: "KIX", supportedChecksums: [], supportedExtensions: [] }), JSON.stringify({ activeSymbolCountRange: { maximum: 0, minimum: 0, step: 0 }, defaultSymbolCountRange: { maximum: 0, minimum: 0, step: 0 }, identifier: "dotcode", isAvailable: true, isColorInvertible: true, readableName: "DotCode", supportedChecksums: [], supportedExtensions: [] }), JSON.stringify({ activeSymbolCountRange: { maximum: 0, minimum: 0, step: 0 }, defaultSymbolCountRange: { maximum: 0, minimum: 0, step: 0 }, identifier: "microQr", isAvailable: true, isColorInvertible: true, readableName: "Micro QR", supportedChecksums: [], supportedExtensions: [] }), JSON.stringify({ activeSymbolCountRange: { maximum: 8, minimum: 8, step: 1 }, defaultSymbolCountRange: { maximum: 8, minimum: 8, step: 1 }, identifier: "code32", isAvailable: true, isColorInvertible: false, readableName: "Code 32", supportedChecksums: [], supportedExtensions: ["strict"] }), JSON.stringify({ activeSymbolCountRange: { maximum: 16, minimum: 16, step: 1 }, defaultSymbolCountRange: { maximum: 16, minimum: 16, step: 1 }, identifier: "lapa4sc", isAvailable: true, isColorInvertible: false, readableName: "LAPA4SC", supportedChecksums: [], supportedExtensions: [] }), JSON.stringify({ activeSymbolCountRange: { maximum: 32, minimum: 3, step: 1 }, defaultSymbolCountRange: { maximum: 20, minimum: 7, step: 1 }, identifier: "iata2of5", isAvailable: true, isColorInvertible: false, readableName: "IATA 2 of 5", supportedChecksums: ["mod1010"], supportedExtensions: ["strict"] }), JSON.stringify({ activeSymbolCountRange: { maximum: 32, minimum: 3, step: 1 }, defaultSymbolCountRange: { maximum: 20, minimum: 7, step: 1 }, identifier: "matrix2of5", isAvailable: true, isColorInvertible: false, readableName: "Matrix 2 of 5", supportedChecksums: [], supportedExtensions: ["strict"] }), JSON.stringify({ activeSymbolCountRange: { maximum: 65, minimum: 65, step: 1 }, defaultSymbolCountRange: { maximum: 65, minimum: 65, step: 1 }, identifier: "uspsIntelligentMail", isAvailable: true, isColorInvertible: false, readableName: "USPS Intelligent Mail", supportedChecksums: [], supportedExtensions: [] })] });
B2.defaults = () => ({ SymbologyDescriptions: f2.SymbologyDescriptions });
var P = class {
  constructor() {
    r(this, "type", "barcodeCapture");
    r(this, "_isEnabled", true);
    r(this, "_feedback", w.default);
    r(this, "settings");
    r(this, "_context", null);
    r(this, "listeners", []);
    r(this, "allowedRemainingWorkerMessages", /* @__PURE__ */ new Set(["successFeedback"]));
    r(this, "workerMessageListener", this.onWorkerMessage.bind(this));
  }
  isEnabled() {
    return this._isEnabled;
  }
  async setEnabled(e) {
    this._isEnabled = e, await this.notifyContext();
  }
  get context() {
    return this._context;
  }
  get feedback() {
    return this._feedback;
  }
  set feedback(e) {
    this._feedback = e, this.notifyContext();
  }
  static get recommendedCameraSettings() {
    return new me(f2.BarcodeCapture.RecommendedCameraSettings);
  }
  static async forContext(e, t) {
    let a = new P();
    return a.settings = t, e && await e.addMode(a), a;
  }
  async applySettings(e) {
    return this.settings = e, this.notifyContext();
  }
  addListener(e) {
    this.listeners.includes(e) || this.listeners.push(e);
  }
  removeListener(e) {
    !this.listeners.includes(e) || this.listeners.splice(this.listeners.indexOf(e), 1);
  }
  attachedToContext(e) {
    this._context = e, this._context.subscribeToWorkerMessages(this.workerMessageListener);
  }
  detachedFromContext() {
    var e;
    (e = this._context) == null || e.unsubscribeToWorkerMessages(this.workerMessageListener), this._context = null;
  }
  sendClearFrameDataRequest(e) {
    setTimeout(() => {
      var t;
      (t = this.context) == null || t.workerCommand("deleteFrameData", { frameId: e });
    }, 0);
  }
  async onDidScan(e) {
    let t = x.fromJSON(e.payload.session), { frameData: a } = e.payload;
    if (!this._isEnabled) {
      this.sendClearFrameDataRequest(a.frameId), this.allowedRemainingWorkerMessages.clear();
      return;
    }
    try {
      for (let o of this.listeners)
        if (o.didScan) {
          let n = o.didScan(this, t, $s(a, this.context));
          n instanceof Promise && await n;
        }
    } finally {
      this.sendClearFrameDataRequest(a.frameId), this.allowedRemainingWorkerMessages = /* @__PURE__ */ new Set(["barcodeCaptureDidUpdateSession", "successFeedback"]);
    }
  }
  onDidUpdateSession(e) {
    let t = x.fromJSON(e.payload);
    if (!(!this._isEnabled && !this.allowedRemainingWorkerMessages.has(e.type))) {
      this.allowedRemainingWorkerMessages.delete(e.type);
      for (let a of this.listeners)
        a.didUpdateSession && a.didUpdateSession(this, t);
      this._isEnabled || (this.allowedRemainingWorkerMessages = /* @__PURE__ */ new Set(["successFeedback"]));
    }
  }
  onSuccessFeedback(e) {
    !this._isEnabled && !this.allowedRemainingWorkerMessages.has(e.type) || (this.allowedRemainingWorkerMessages.delete(e.type), this.feedback.success.emit());
  }
  async onWorkerMessage(e) {
    switch (e.type) {
      case "barcodeCaptureDidScan":
        this.onDidScan(e);
        break;
      case "barcodeCaptureDidUpdateSession":
        this.onDidUpdateSession(e);
        break;
      case "successFeedback":
        this.onSuccessFeedback(e);
        break;
      default:
    }
  }
  async notifyContext() {
    if (this.context)
      return this.context.update();
  }
  toJSONObject() {
    return { type: this.type, enabled: this._isEnabled, feedback: this.feedback.toJSONObject(), settings: this.settings.toJSONObject() };
  }
};
var k1 = ((e) => (e.Frame = "frame", e))(k1 || {});
var R = class {
  constructor() {
    r(this, "type", "barcodeCapture");
    r(this, "_style", f2.BarcodeCapture.BarcodeCaptureOverlay.defaultStyle);
    r(this, "barcodeCapture");
    r(this, "_shouldShowScanAreaGuides", false);
    r(this, "_viewfinder", null);
    r(this, "_brush");
  }
  get style() {
    return this._style;
  }
  getBrush() {
    return this._brush;
  }
  async setBrush(e) {
    this._brush = e, await this.barcodeCapture.notifyContext();
  }
  getViewfinder() {
    return this._viewfinder;
  }
  async setViewfinder(e) {
    this._viewfinder = e, await this.barcodeCapture.notifyContext();
  }
  shouldShowScanAreaGuides() {
    return this._shouldShowScanAreaGuides;
  }
  async setShouldShowScanAreaGuides(e) {
    this._shouldShowScanAreaGuides = e, await this.barcodeCapture.notifyContext();
  }
  static withBarcodeCapture(e) {
    return R.withBarcodeCaptureForView(e, null);
  }
  static withBarcodeCaptureForView(e, t) {
    return R.withBarcodeCaptureForViewWithStyle(e, t, f2.BarcodeCapture.BarcodeCaptureOverlay.defaultStyle);
  }
  static async withBarcodeCaptureForViewWithStyle(e, t, a) {
    let o = new R();
    return o.barcodeCapture = e, o._style = a, await o.setBrush(new Mt(f2.BarcodeCapture.BarcodeCaptureOverlay.styles[o.style].DefaultBrush.fillColor, f2.BarcodeCapture.BarcodeCaptureOverlay.styles[o.style].DefaultBrush.strokeColor, f2.BarcodeCapture.BarcodeCaptureOverlay.styles[o.style].DefaultBrush.strokeWidth)), t && await t.addOverlay(o), o;
  }
  toJSONObject() {
    var e, t;
    return { type: this.type, brush: this._brush.toJSONObject(), drawLocalizedOnlyBarcodes: false, shouldShowScanAreaGuides: this._shouldShowScanAreaGuides, viewfinder: (t = (e = this._viewfinder) == null ? void 0 : e.toJSONObject()) != null ? t : Tl, style: this.style };
  }
};
var Z = class {
  constructor() {
    r(this, "codeDuplicateFilter", f2.BarcodeCapture.BarcodeCaptureSettings.codeDuplicateFilter);
    r(this, "locationSelection", null);
    r(this, "enabledCompositeTypes", []);
    r(this, "properties", {});
    r(this, "symbologies", {});
  }
  get compositeTypeDescriptions() {
    return f2.CompositeTypeDescriptions.reduce((e, t) => (e[t.types[0]] = t, e), {});
  }
  get enabledSymbologies() {
    return Object.keys(this.symbologies).filter((e) => this.symbologies[e].isEnabled);
  }
  settingsForSymbology(e) {
    if (!this.symbologies[e]) {
      let t = f2.SymbologySettings[e];
      t._symbology = e, this.symbologies[e] = t;
    }
    return this.symbologies[e];
  }
  setProperty(e, t) {
    this.properties[e] = t;
  }
  getProperty(e) {
    return this.properties[e];
  }
  enableSymbologies(e) {
    for (let t of e)
      this.enableSymbology(t, true);
  }
  enableSymbology(e, t) {
    this.settingsForSymbology(e).isEnabled = t;
  }
  enableSymbologiesForCompositeTypes(e) {
    for (let t of e)
      this.enableSymbologies(this.compositeTypeDescriptions[t].symbologies);
  }
  toJSONObject() {
    return { codeDuplicateFilter: this.codeDuplicateFilter, enabledCompositeTypes: [...this.enabledCompositeTypes], locationSelection: this.locationSelection ? this.locationSelection.toJSONObject() : Xs, properties: O({}, this.properties), symbologies: Object.keys(this.symbologies).reduce((e, t) => (e[t] = this.symbologies[t].toJSONObject(), e), {}) };
  }
};
function y0(i) {
  return { moduleName: "BarcodeCapture", load: async (e) => {
    var a, o;
    return D1(e, (a = i == null ? void 0 : i.highEndBlurryRecognition) != null ? a : false, (o = i == null ? void 0 : i.preloadBlurryTables) != null ? o : true).catch((n) => {
      f.log(f.Level.Warn, "Error while generating blurry recognition tables:", n);
    }), await S.create(e);
  } };
}
async function D1(i, e = false, t = true) {
  var o;
  (await y.create({ licenseKey: i.licenseKey, logLevel: (o = i.logLevel) != null ? o : f.Level.Debug, libraryLocation: i.libraryLocation, preload: t })).prepareBlurryTables(e).catch((n) => {
    f.log(f.Level.Warn, n);
  });
}

// index.ts
async function run() {
  const view = new L();
  view.connectToElement(document.getElementById("data-capture-view"));
  view.setProgressBarMessage("Loading...");
  view.showProgressBar();
  await Cc({
    licenseKey: "YOUR_LICENSE_KEY_HERE",
    libraryLocation: new URL("library/engine/", document.baseURI).toString(),
    moduleLoaders: [y0()]
  });
  view.setProgressBarPercentage(null);
  view.setProgressBarMessage("Accessing Camera...");
  const context = await $t.create();
  await view.setContext(context);
  const camera = ve.default;
  const cameraSettings = P.recommendedCameraSettings;
  await camera.applySettings(cameraSettings);
  await context.setFrameSource(camera);
  const settings = new Z();
  settings.enableSymbologies([
    $.EAN13UPCA,
    $.EAN8,
    $.UPCE,
    $.QR,
    $.DataMatrix,
    $.Code39,
    $.Code128,
    $.InterleavedTwoOfFive
  ]);
  const symbologySettings = settings.settingsForSymbology($.Code39);
  symbologySettings.activeSymbolCounts = [7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const barcodeCapture = await P.forContext(context, settings);
  await barcodeCapture.setEnabled(false);
  barcodeCapture.addListener({
    didScan: async (barcodeCaptureMode, session) => {
      var _a;
      await barcodeCaptureOverlay.setViewfinder(null);
      await barcodeCapture.setEnabled(false);
      const barcode = session.newlyRecognizedBarcodes[0];
      const symbology = new B2(barcode.symbology);
      showResult(`Scanned: ${(_a = barcode.data) != null ? _a : ""}
(${symbology.readableName})`);
    }
  });
  view.addControl(new qe());
  const barcodeCaptureOverlay = await R.withBarcodeCaptureForViewWithStyle(
    barcodeCapture,
    view,
    k1.Frame
  );
  const viewfinder = new _r(
    Zr.Square,
    Xr.Light
  );
  await barcodeCaptureOverlay.setViewfinder(viewfinder);
  await camera.switchToDesiredState(Ve.On);
  await barcodeCapture.setEnabled(true);
  view.hideProgressBar();
  function showResult(result) {
    const resultElement = document.createElement("div");
    resultElement.className = "result";
    resultElement.innerHTML = `
      <p class="result-text">${result}</p>
      <button onclick="continueScanning()">OK</button>
    `;
    document.querySelector("#data-capture-view").append(resultElement);
  }
  window.continueScanning = async function continueScanning() {
    for (const r2 of document.querySelectorAll(".result"))
      r2.remove();
    await barcodeCapture.setEnabled(true);
    await barcodeCaptureOverlay.setViewfinder(viewfinder);
  };
}
run().catch((error) => {
  console.error(error);
  alert(error);
});
/*!
 *  Spatial Plugin - Adds support for stereo and 3D audio where Web Audio is supported.
 *  
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
/*!
 *  howler.js v2.2.3
 *  howlerjs.com
 *
 *  (c) 2013-2020, James Simpson of GoldFire Studios
 *  goldfirestudios.com
 *
 *  MIT License
 */
/*!
 * JavaScript Cookie v2.2.1
 * https://github.com/js-cookie/js-cookie
 *
 * Copyright 2006, 2015 Klaus Hartl & Fagner Brack
 * Released under the MIT license
 */
//# sourceMappingURL=index.js.map
