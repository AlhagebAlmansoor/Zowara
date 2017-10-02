var _i_ = this._i_ || function() {}, _r_ = this._r_ || function(t) {
return t;
};

B.define("caret", function() {
_i_("4ab:1");
var t = function(t) {
_i_("4ab:85");
var e;
if (!t) return _r_();
if (document.selection) return t.focus(), e = document.selection.createRange(), e.moveStart("character", -t.value.length), _r_(e.text.length);
if (t.selectionStart || 0 === t.selectionStart) return _r_(t.selectionStart);
return _r_(0);
}, e = function(t, e) {
_i_("4ab:86");
var i;
if (!t) return _r_();
document.selection ? (t.focus(), i = document.selection.createRange(), i.moveStart("character", -t.value.length), i.moveStart("character", e), i.moveEnd("character", 0), i.select()) :(t.selectionStart || 0 === t.selectionStart) && (t.selectionStart = e, t.selectionEnd = e, t.focus()), _r_();
}, i = function(t, e, i) {
_i_("4ab:87");
var n;
if (!t) return _r_();
document.selection ? (t.focus(), n = document.selection.createRange(), n.moveStart("character", -t.value.length), n.moveStart("character", e), n.moveEnd("character", i - e), n.select()) :(t.selectionStart || 0 === t.selectionStart) && (t.selectionStart = e, t.selectionEnd = i, t.focus()), _r_();
}, n = function(t) {
_i_("4ab:88");
var e;
if (!t) return _r_();
if (document.selection) return t.focus(), e = document.selection.createRange(), _r_(e.text.length || 0);
if (t.selectionStart || 0 === t.selectionStart) return _r_(t.selectionEnd - t.selectionStart);
return _r_(0);
};
return _r_({
getPosition:t,
setPosition:e,
setSelection:i,
getSelectionLength:n
});
}), B.define("click-out", function(t, e, i) {
"use strict";
_i_("4ab:2");
var n = {}, s = !1;
function a() {
_i_("4ab:41"), s || (s = !0, document.documentElement.addEventListener ? document.documentElement.addEventListener("click", r) :document.documentElement.attachEvent && document.documentElement.attachEvent("onclick", r)), _r_();
}
function r(t) {
_i_("4ab:42");
var e, i = Object.keys(n), s = {}, a = !1;
if (i.length) for (e = t.target || t.srcElement; e && (i.forEach(function(t) {
_i_("4ab:431"), n[t].element === e && (s[t] = !0, 1 == i.length && (a = !0)), _r_();
}), !a); ) e = e.parentNode;
i.forEach(function(t) {
_i_("4ab:121"), !s[t] && n[t] && (n[t].callback.call(!1), o(t)), _r_();
}), _r_();
}
function o(t) {
_i_("4ab:43"), n[t] && delete n[t], _r_();
}
function _() {
_i_("4ab:44");
var t = Object.keys(n);
t.forEach(function(t) {
_i_("4ab:122"), n[t].callback.call(!1), o(t), _r_();
}), _r_();
}
e.addMonitor = function(t, e) {
_i_("4ab:89"), a();
var i = Math.random();
return "string" == typeof t.jquery && (t = t[0]), setTimeout(function() {
_i_("4ab:413"), n[i] = {
element:t,
callback:e
}, _r_();
}, 4), _r_(i);
}, e.removeMonitor = o, e.forceClickOut = _, _r_();
}), B.define("keycodes", [], function() {
"use strict";
_i_("4ab:3");
var t = {
backspace:8,
tab:9,
enter:13,
shift:16,
control:17,
alt:18,
escape:27,
space:32,
pageUp:33,
pageDown:34,
end:35,
home:36,
leftArrow:37,
upArrow:38,
rightArrow:39,
downArrow:40,
"delete":46,
navigation:[ 9 ].concat(i(33, 40)),
deletion:[ 8, 46 ],
arrow:i(37, 40),
number:i(48, 57).concat(i(96, 105)),
alphabetic:i(65, 90),
modifier:i(16, 18)
};
t = n(t);
function e(t) {
return _i_("4ab:45"), _r_(t.slice(0, 1).toUpperCase() + t.slice(1));
}
function i(t, e) {
_i_("4ab:46");
for (var i = [], n = 0; e - t >= n; n++) i.push(t + n);
return _r_(i);
}
function n(t) {
_i_("4ab:47");
var e = 65;
return _r_("abcdefghijklmnopqrstuvwxyz".split("").reduce(function(t, i) {
return _i_("4ab:123"), t[i] = e++, _r_(t);
}, t));
}
function s(e, i) {
if (_i_("4ab:48"), Array.isArray(t[e]) && -1 !== t[e].indexOf(i)) return _r_(!0);
if (t[e] === i) return _r_(!0);
return _r_(!1);
}
function a(t, e) {
return _i_("4ab:49"), _r_(s(e, t));
}
function r(e) {
_i_("4ab:50");
var i = [];
return Object.keys(t).forEach(function(t) {
_i_("4ab:124"), s(t, e) && i.push(t), _r_();
}), _r_(i);
}
var o = {
getTypes:r,
isKeycodeType:a
};
return Object.keys(t).forEach(function(t) {
_i_("4ab:90"), o["is" + e(t)] = function(e) {
return _i_("4ab:414"), _r_(a(e, t));
}, _r_();
}), _r_(o);
}), B.define("read-data-options", function(t, e, i) {
_i_("4ab:4"), i.exports = function(t, e) {
_i_("4ab:91");
var i = {};
return t.jquery && (t = t[0]), Object.keys(e).forEach(function(n) {
_i_("4ab:415");
var s = e[n], a = "data-" + n, r = null;
if ("function" == typeof s && (s = {
type:s
}), "string" == typeof s.name && (a = "data-" + s.name), !t.attributes[a]) {
if (s.hasOwnProperty("defaultValue")) i[n] = s.defaultValue; else if (s.hasOwnProperty("required")) throw new Error("read-data-options: missing required " + a + " attribute");
return _r_();
}
var r = t.getAttribute(a);
if (s.type === Boolean) r = !/^0|false|no|off$/.test(r); else if (s.type === String) r = r || s.defaultValue; else {
if (s.type !== Number) throw new Error("data-options: Invalid option type for " + n);
r = parseFloat(r, 10), isNaN(r) && (r = s.defaultValue);
}
i[n] = r, _r_();
}), _r_(i);
}, _r_();
}), B.define("calendar-base", function(t, e, i) {
_i_("4ab:5");
function n(t) {
_i_("4ab:51"), t = t || {}, this.startDate = t.startDate, this.endDate = t.endDate, this.siblingMonths = t.siblingMonths, this.weekNumbers = t.weekNumbers, this.weekStart = t.weekStart, void 0 === this.weekStart && (this.weekStart = 0), _r_();
}
n.prototype.getCalendar = function(t, e) {
_i_("4ab:92");
var i = new Date(Date.UTC(t, e, 1, 0, 0, 0, 0));
t = i.getUTCFullYear(), e = i.getUTCMonth();
for (var s, a, r, o, _, l = [], h = i.getUTCDay(), d = -((7 - this.weekStart + h) % 7), c = n.daysInMonth(t, e), u = (c - d) % 7, p = n.daysInMonth(t, e - 1), f = d, b = c - f + (0 != u ? 7 - u :0) + d, m = null; b > f; ) a = f + 1, s = ((1 > f ? 7 + f :f) + h) % 7, 1 > a || a > c ? this.siblingMonths ? (1 > a ? (o = e - 1, _ = t, 0 > o && (o = 11, _--), a = p + a) :a > c && (o = e + 1, _ = t, o > 11 && (o = 0, _++), a = f - c + 1), r = {
day:a,
weekDay:s,
month:o,
year:_,
siblingMonth:!0
}) :r = !1 :r = {
day:a,
weekDay:s,
month:e,
year:t
}, r && this.weekNumbers && (null === m ? m = n.calculateWeekNumber(r) :1 == s && 52 == m ? m = 1 :1 == s && m++, r.weekNumber = m), r && this.startDate && (r.selected = this.isDateSelected(r)), l.push(r), f++;
return _r_(l);
}, n.prototype.isDateSelected = function(t) {
if (_i_("4ab:93"), t.year == this.startDate.year && t.month == this.startDate.month && t.day == this.startDate.day) return _r_(!0);
if (this.endDate) {
if (t.year == this.startDate.year && t.month == this.startDate.month && t.day < this.startDate.day) return _r_(!1);
if (t.year == this.endDate.year && t.month == this.endDate.month && t.day > this.endDate.day) return _r_(!1);
if (t.year == this.startDate.year && t.month < this.startDate.month) return _r_(!1);
if (t.year == this.endDate.year && t.month > this.endDate.month) return _r_(!1);
if (t.year < this.startDate.year) return _r_(!1);
if (t.year > this.endDate.year) return _r_(!1);
return _r_(!0);
}
return _r_(!1);
}, n.prototype.setStartDate = function(t) {
_i_("4ab:94"), this.startDate = t, _r_();
}, n.prototype.setEndDate = function(t) {
_i_("4ab:95"), this.endDate = t, _r_();
}, n.prototype.setDate = n.prototype.setStartDate, n.diff = function(t, e) {
return _i_("4ab:96"), t = new Date(Date.UTC(t.year, t.month, t.day, 0, 0, 0, 0)), e = new Date(Date.UTC(e.year, e.month, e.day, 0, 0, 0, 0)), _r_(Math.ceil((t.getTime() - e.getTime()) / 864e5));
}, n.interval = function(t, e) {
return _i_("4ab:97"), _r_(Math.abs(n.diff(t, e)) + 1);
}, n.compare = function(t, e) {
if (_i_("4ab:98"), "object" != typeof t || "object" != typeof e || null === t || null === e) throw new TypeError("dates must be objects");
if (t.year < e.year) return _r_(-1);
if (t.year > e.year) return _r_(1);
if (t.month < e.month) return _r_(-1);
if (t.month > e.month) return _r_(1);
if (t.day < e.day) return _r_(-1);
if (t.day > e.day) return _r_(1);
return _r_(0);
}, n.daysInMonth = function(t, e) {
return _i_("4ab:99"), _r_(new Date(t, e + 1, 0).getDate());
}, n.isLeapYear = function(t) {
return _i_("4ab:100"), _r_(t % 4 == 0 && t % 100 != 0 || t % 400 == 0);
}, n.calculateWeekNumber = function(t) {
_i_("4ab:101");
var e = new Date(Date.UTC(t.year, t.month, t.day, 0, 0, 0, 0)), i = new Date(e.valueOf()), n = (e.getUTCDay() + 6) % 7;
i.setUTCDate(i.getUTCDate() - n + 3);
var s = i.valueOf();
return i.setUTCMonth(0, 1), 4 != i.getUTCDay() && i.setUTCMonth(0, 1 + (4 - i.getUTCDay() + 7) % 7), _r_(1 + Math.ceil((s - i) / 6048e5));
}, i.exports = {
Calendar:n
}, _r_();
}), B.define("morphdom", function(t, e, i) {
_i_("4ab:6"), function(t) {
if (_i_("4ab:103"), "object" == typeof e && "undefined" != typeof i) i.exports = t(); else if ("function" == typeof define && define.amd) define([], t); else {
var n;
n = "undefined" != typeof window ? window :"undefined" != typeof global ? global :"undefined" != typeof self ? self :this, n.morphdom = t();
}
_r_();
}(function() {
_i_("4ab:102");
var t, e;
t = {
exports:e = {}
};
var i, n, s = "undefined" != typeof document ? document.body || document.createElement("div") :{}, a = "http://www.w3.org/1999/xhtml", r = 1, o = 3, _ = 8;
n = s.hasAttributeNS ? function(t, e, i) {
return _i_("4ab:432"), _r_(t.hasAttributeNS(e, i));
} :s.hasAttribute ? function(t, e, i) {
return _i_("4ab:453"), _r_(t.hasAttribute(i));
} :function(t, e, i) {
return _i_("4ab:454"), _r_(!!t.getAttributeNode(i));
};
function l(t) {
_i_("4ab:125");
for (var e in t) if (t.hasOwnProperty(e)) return _r_(!1);
return _r_(!0);
}
function h(t) {
_i_("4ab:126"), !i && document.createRange && (i = document.createRange(), i.selectNode(document.body));
var e;
return i && i.createContextualFragment ? e = i.createContextualFragment(t) :(e = document.createElement("body"), e.innerHTML = t), _r_(e.childNodes[0]);
}
var d = {
OPTION:function(t, e) {
_i_("4ab:433"), t.selected = e.selected, t.selected ? t.setAttribute("selected", "") :t.removeAttribute("selected", ""), _r_();
},
INPUT:function(t, e) {
_i_("4ab:434"), t.checked = e.checked, t.checked ? t.setAttribute("checked", "") :t.removeAttribute("checked"), t.value !== e.value && (t.value = e.value), n(e, null, "value") || t.removeAttribute("value"), t.disabled = e.disabled, t.disabled ? t.setAttribute("disabled", "") :t.removeAttribute("disabled"), _r_();
},
TEXTAREA:function(t, e) {
_i_("4ab:435");
var i = e.value;
t.value !== i && (t.value = i), t.firstChild && t.firstChild.nodeValue !== i && (t.firstChild.nodeValue = i), _r_();
}
};
function c() {}
var u = function(t, e) {
return _i_("4ab:416"), _r_(t.nodeName === e.nodeName && t.namespaceURI === e.namespaceURI);
};
function p(t, e) {
return _i_("4ab:128"), _r_(e && e !== a ? document.createElementNS(e, t) :document.createElement(t));
}
function f(t, e) {
_i_("4ab:129");
var i, s, a, r, o, _, l = e.attributes;
for (i = l.length - 1; i >= 0; i--) s = l[i], a = s.name, o = s.value, r = s.namespaceURI, r ? (a = s.localName || a, _ = t.getAttributeNS(r, a)) :_ = t.getAttribute(a), _ !== o && (r ? t.setAttributeNS(r, a, o) :t.setAttribute(a, o));
for (l = t.attributes, i = l.length - 1; i >= 0; i--) s = l[i], s.specified !== !1 && (a = s.name, r = s.namespaceURI, n(e, r, r ? a = s.localName || a :a) || t.removeAttributeNode(s));
_r_();
}
function b(t, e) {
_i_("4ab:130");
for (var i = t.firstChild; i; ) {
var n = i.nextSibling;
e.appendChild(i), i = n;
}
return _r_(e);
}
function m(t) {
return _i_("4ab:131"), _r_(t.id);
}
function g(t, e, i) {
if (_i_("4ab:132"), i || (i = {}), "string" == typeof e) if ("#document" === t.nodeName || "HTML" === t.nodeName) {
var n = e;
e = document.createElement("html"), e.innerHTML = n;
} else e = h(e);
var s = {}, a = {}, g = i.getNodeKey || m, v = i.onBeforeNodeAdded || c, y = i.onNodeAdded || c, M = i.onBeforeElUpdated || i.onBeforeMorphEl || c, B = i.onElUpdated || c, w = i.onBeforeNodeDiscarded || c, C = i.onNodeDiscarded || c, k = i.onBeforeElChildrenUpdated || i.onBeforeMorphElChildren || c, D = i.childrenOnly === !0, x = [];
function E(t, e) {
_i_("4ab:417");
var i = g(t);
if (i ? s[i] = t :e || C(t), t.nodeType === r) for (var n = t.firstChild; n; ) E(n, e || i), n = n.nextSibling;
_r_();
}
function $(t) {
if (_i_("4ab:418"), t.nodeType === r) for (var e = t.firstChild; e; ) g(e) || (C(e), $(e)), e = e.nextSibling;
_r_();
}
function S(t, e, i) {
if (_i_("4ab:419"), w(t) === !1) return _r_();
e.removeChild(t), i ? g(t) || (C(t), $(t)) :E(t), _r_();
}
function F(t, e, i, n) {
_i_("4ab:420");
var l = g(e);
if (l && delete s[l], !n) {
if (M(t, e) === !1) return _r_();
if (f(t, e), B(t), k(t, e) === !1) return _r_();
}
if ("TEXTAREA" !== t.nodeName) {
var h, c, p, b, m, w = e.firstChild, C = t.firstChild;
t:for (;w; ) {
for (p = w.nextSibling, h = g(w); C; ) {
var D = g(C);
if (c = C.nextSibling, !i && D && (m = a[D])) {
m.parentNode.replaceChild(C, m), F(C, m, i), C = c;
continue;
}
var E = C.nodeType;
if (E === w.nodeType) {
var $ = !1;
if (E === r ? (u(C, w) && (D || h ? h === D && ($ = !0) :$ = !0), $ && F(C, w, i)) :(E === o || E == _) && ($ = !0, C.nodeValue = w.nodeValue), $) {
w = p, C = c;
continue t;
}
}
S(C, t, i), C = c;
}
h && ((b = s[h]) ? (F(b, w, !0), w = b) :a[h] = w), v(w) !== !1 && (t.appendChild(w), y(w)), w.nodeType === r && (h || w.firstChild) && x.push(w), w = p, C = c;
}
for (;C; ) c = C.nextSibling, S(C, t, i), C = c;
}
var A = d[t.nodeName];
A && A(t, e), _r_();
}
var A = t, T = A.nodeType, O = e.nodeType;
if (!D) if (T === r) O === r ? u(t, e) || (C(t), A = b(t, p(e.nodeName, e.namespaceURI))) :A = e; else if (T === o || T === _) {
if (O === T) return A.nodeValue = e.nodeValue, _r_(A);
A = e;
}
if (A === e) C(t); else {
F(A, e, !1, D);
var N = function(t) {
_i_("4ab:467");
for (var e = t.firstChild; e; ) {
var i = e.nextSibling, n = g(e);
if (n) {
var a = s[n];
if (a && u(e, a)) {
if (e.parentNode.replaceChild(a, e), F(a, e, !0), e = i, l(s)) return _r_(!1);
continue;
}
}
e.nodeType === r && N(e), e = i;
}
_r_();
};
if (!l(s)) t:for (;x.length; ) {
var L = x;
x = [];
for (var I = 0; I < L.length; I++) if (N(L[I]) === !1) break t;
}
for (var J in s) if (s.hasOwnProperty(J)) {
var j = s[J];
C(j), $(j);
}
}
return !D && A !== t && t.parentNode && t.parentNode.replaceChild(A, t), _r_(A);
}
return t.exports = g, _r_(t.exports);
}), _r_();
}), B.define("search/modules/flags", function(t, e, i) {
_i_("4ab:7");
function n(t) {
_i_("4ab:52");
var e = {};
if ("string" != typeof t) throw new TypeError("First argument must be a string");
if (t = t.trim(), "" === t) return _r_(e);
return t.split(/\s+/).forEach(function(t) {
_i_("4ab:133");
var i = t, n = !0, a = t.indexOf(":");
-1 !== a && (i = t.substr(0, a), n = t.substr(a + 1), n || (n = 0), s(n) && (n = parseInt(n, 10))), e[i] = n, _r_();
}), _r_(e);
}
function s(t) {
return _i_("4ab:53"), _r_(!isNaN(parseFloat(t)) && isFinite(t));
}
i.exports = {
parse:n
}, _r_();
}), B.define("search/modules/search-date", function(t, e, i) {
_i_("4ab:8");
var n = t("calendar-base").Calendar;
function s(t) {
_i_("4ab:54"), this.year = null, this.month = null, this.day = null, this.complete = !1, "number" == typeof t.year && (this.year = t.year), "number" == typeof t.month && (this.month = t.month), "number" == typeof t.day && (this.day = t.day), null !== this.month && (this.month < 0 ? this.month = 0 :this.month > 11 && (this.month = 11)), null !== this.day && (this.day < 0 ? this.day = 0 :this.day > a(this.year, this.month) && (this.day = a(this.year, this.month))), this.complete = null !== this.year && null !== this.month && null !== this.day, _r_();
}
s.prototype = {
toString:function() {
if (_i_("4ab:134"), !this.complete) return _r_("");
var t = this.month + 1;
return _r_(this.year + "-" + (10 > t ? "0" :"") + t + "-" + (this.day < 10 ? "0" :"") + this.day);
},
toNative:function() {
if (_i_("4ab:135"), !this.complete) return _r_(new Date(NaN));
return _r_(new Date(Date.UTC(this.year, this.month, this.day, 0, 0, 0, 0)));
},
valueOf:function() {
return _i_("4ab:136"), _r_(this.toNative().valueOf());
}
}, s.create = function(t) {
if (_i_("4ab:104"), "object" != typeof t || null === t) throw new TypeError("date must be an object");
return _r_(new s(t));
}, s.createFromString = function(t) {
if (_i_("4ab:105"), "string" != typeof t) throw new TypeError("dateString must be a string");
var e = t.split(/-/g), i = {
year:parseInt(e[0], 10),
month:parseInt(e[1], 10) - 1,
day:parseInt(e[2], 10)
};
return _r_(s.create(i));
}, s.createFlexible = function(t) {
if (_i_("4ab:106"), "object" != typeof t || null === t) throw new TypeError("date must be an object");
if ("number" != typeof t.year || "number" != typeof t.month || "number" != typeof t.day) throw new TypeError("invalid date");
var e = new Date(Date.UTC(t.year, t.month, t.day, 0, 0, 0, 0));
return t = {
year:e.getUTCFullYear(),
month:e.getUTCMonth(),
day:e.getUTCDate()
}, _r_(s.create(t));
}, s.isStrictlyValid = function(t) {
_i_("4ab:107");
var e = s.create(t);
return _r_(t.year === e.year && t.month === e.month && t.day === e.day);
}, s.compare = function(t, e) {
if (_i_("4ab:108"), !(t instanceof s && e instanceof s)) throw new TypeError("dates must be an instance of SearchDate");
if (t.year < e.year) return _r_(-1);
if (t.year > e.year) return _r_(1);
if (t.month < e.month) return _r_(-1);
if (t.month > e.month) return _r_(1);
if (t.day < e.day) return _r_(-1);
if (t.day > e.day) return _r_(1);
return _r_(0);
};
function a(t, e) {
return _i_("4ab:55"), _r_("number" == typeof t && "number" == typeof e ? n.daysInMonth(t, e) :3 == e || 5 == e || 8 == e || 10 == e ? 30 :1 == e ? 29 :31);
}
i.exports = {
SearchDate:s
}, _r_();
}), B.define("component/autocomplete-core", function(t, e, i) {
_i_("4ab:9");
var n = t("jquery"), s = t("component"), a = t("read-data-options");
i.exports = s.extend({
init:function() {
_i_("4ab:233"), this.highlightedIndex = -1, this.isDeletion = !1, this.items = [], this.keyDownCount = 0, this.keysDown = {}, this.listHeight = 0, this.listVisible = !1, this.preventBlurClose = !1, this.selectedIndex = -1, this.selectedValue = null, this.valueBuffer = null, this.clickOutController = t("click-out"), this.clickOutMonitorId = null, this.$input = this.$el.find('[data-input=""]'), this.input = this.$input[0], this.$list = this.$el.find('[data-list=""]'), this.$items = this.$list.children(), this.optionsSpec = this.optionsSpec || {}, this.optionsSpec = n.extend(this.optionsSpec, {
openFocus:{
name:"open-focus",
type:Boolean
},
highlightFirst:{
name:"highlight-first",
type:Boolean
}
}), this.options = a(this.$el, this.optionsSpec), this.supportsInputEvent = this.input && "oninput" in this.input, this.addInputEventListeners(), this.addListEventListeners(), this.addItemsEventListeners(), this.calculateListHeight(), this.$input.attr("autocomplete", "off"), _r_();
},
addInputEventListeners:function() {
_i_("4ab:234");
var t = this.$input.component("keyboard");
t.on("keydown:Escape", this.inputEscape.bind(this)), t.on("keydown:ArrowUp", this.inputArrowUp.bind(this)), t.on("keydown:ArrowDown", this.inputArrowDown.bind(this)), t.on("keydown:Enter", this.inputEnter.bind(this)), t.on("keydown:Tab", this.inputTab.bind(this)), this.$input.on("click", this.inputClick.bind(this)), this.$input.focus(this.inputFocus.bind(this)), this.$input.blur(this.inputBlur.bind(this)), this.$input.keydown(this.inputKeyDown.bind(this)), this.$input.bind("input", this.inputInput.bind(this)), this.$input.keyup(this.inputKeyUp.bind(this)), _r_();
},
addListEventListeners:function() {
_i_("4ab:235"), this.$list.mousedown(this.listMouseDown.bind(this)), this.$list.mouseup(this.listMouseUp.bind(this)), this.$list.on("click", '[data-list-item=""]', this.listItemClick.bind(this)), _r_();
},
addItemsEventListeners:function() {
_i_("4ab:236"), this.$items.click(this.listItemClick.bind(this)), _r_();
},
addClickOutEventListener:function() {
_i_("4ab:237"), this.clickOutMonitorId = this.clickOutController.addMonitor(this.el, this.clickOut.bind(this)), _r_();
},
removeClickOutEventListener:function() {
_i_("4ab:238"), this.clickOutController.removeMonitor(this.clickOutMonitorId), _r_();
},
calculateListHeight:function() {
_i_("4ab:239"), this.listHeight = this.$list.outerHeight(), _r_();
},
inputClick:function(t) {},
inputFocus:function(t) {
_i_("4ab:241"), this.options.openFocus && (this.listShow(), this.autocomplete({
fromFocus:!0
})), _r_();
},
inputBlur:function(t) {
_i_("4ab:242"), setTimeout(this.inputBlurSync.bind(this), 4), _r_();
},
inputBlurSync:function() {
_i_("4ab:243"), !this.preventBlurClose && this.listVisible && (this.highlightReset(), this.reset()), _r_();
},
inputKeyDown:function(t) {
_i_("4ab:244");
var e = t.ctrlKey || t.metaKey || t.shiftKey || t.altKey, i = 8 == t.which || 46 == t.which;
this.isDeletion = i, this.taintedKeyDown = e, _r_();
},
inputInput:function(t) {
_i_("4ab:245"), this.autocomplete(), _r_();
},
inputKeyUp:function(t) {
_i_("4ab:246");
var e = this.taintedKeyDown || t.ctrlKey || t.metaKey || t.shiftKey || t.altKey || t.which >= 16 && t.which <= 18 || 91 == t.which, i = 32 == t.which || t.which >= 48, n = t.which >= 37 && t.which <= 40;
e || ((n || i) && this.listShow(), !this.isDeletion && !i || this.supportsInputEvent || this.autocomplete(), i && this.keyDownCount++), _r_();
},
inputEscape:function(t) {
_i_("4ab:247"), this.listVisible && (t.originalEvent.preventDefault(), this.highlightReset(), this.reset()), _r_();
},
inputArrowUp:function(t) {
_i_("4ab:248"), t.originalEvent.preventDefault(), this.listVisible ? this.highlightPrevious() :this.listShow(), _r_();
},
inputArrowDown:function(t) {
_i_("4ab:249"), t.originalEvent.preventDefault(), this.listVisible ? this.highlightNext() :this.listShow(), _r_();
},
inputEnter:function(t) {
_i_("4ab:250"), this.listVisible && -1 != this.highlightedIndex && (t.originalEvent.preventDefault(), this.choose(this.highlightedIndex)), _r_();
},
inputTab:function(t) {
_i_("4ab:251"), this.inputEnter.apply(this, arguments), _r_();
},
listItemClick:function(t) {
_i_("4ab:252");
var e = n(t.currentTarget);
this.choose(e.data("i")), _r_();
},
listMouseDown:function(t) {
_i_("4ab:253"), this.preventBlurClose = !0, _r_();
},
listMouseUp:function(t) {
_i_("4ab:254"), this.preventBlurClose = !1, _r_();
},
clickOut:function() {
_i_("4ab:255"), this.listVisible && (this.highlightReset(), this.reset()), _r_();
},
setValue:function(t) {
_i_("4ab:256"), this.input.value = t, _r_();
},
listShow:function() {
_i_("4ab:257"), this.listVisible || this._loading || (this.$list.addClass("-visible"), this.listVisible = !0, this.addClickOutEventListener(), this.$list[0].scrollTop = 1, setTimeout(function() {
_i_("4ab:504"), this.$list[0].scrollTop = 0, _r_();
}.bind(this), 10)), _r_();
},
listHide:function() {
_i_("4ab:258"), this.listVisible && (this.$list.removeClass("-visible"), this.resetFlags(), this.removeClickOutEventListener()), _r_();
},
highlightPrevious:function() {
_i_("4ab:259");
var t = this.highlightedIndex;
do -1 == t ? t = this.items.length - 1 :t--; while (-1 != t && this.items[t].hidden);
this.highlightFromNavigation(t), _r_();
},
highlightNext:function() {
_i_("4ab:260");
var t = this.highlightedIndex;
do t == this.items.length - 1 ? t = -1 :t++; while (-1 != t && this.items[t].hidden);
this.highlightFromNavigation(t), _r_();
},
highlightFromNavigation:function(t, e) {
if (_i_("4ab:261"), (-1 == this.highlightedIndex || e) && (this.valueBuffer = this.input.value), -1 == t) this.highlightReset({
preserveFocus:!0
}); else if (this.supportsInputEvent) if (this.valueBuffer && 0 == this.items[t].valueLowerCase.indexOf(this.valueBuffer.toLowerCase())) {
var i = this.valueBuffer.length, n = this.items[t].value.length, s = this.valueBuffer + this.items[t].value.substring(i);
if (this.input.value != s && this.setValue(s), this.input.setSelectionRange) this.input.setSelectionRange(n, n); else if (this.input.createTextRange) {
var a = this.input.createTextRange();
a.collapse(!0), a.moveStart("character", i), a.moveEnd("character", n), a.select();
} else void 0 !== this.input.selectionStart && (this.input.selectionStart = i, this.input.selectionEnd = n);
} else this.setValue(this.items[t].value), this.fixIEFocusLoss();
this.highlight(t), _r_();
},
highlightFromAutocomplete:function() {
_i_("4ab:262");
var t = this.input.value, e = this.getListFirstIndex();
-1 !== e && this.options.highlightFirst && !this.isDeletion && t && 0 === this.items[e].valueLowerCase.indexOf(t.toLowerCase()) ? this.highlightFromNavigation(e, !0) :this.highlight(-1), _r_();
},
highlight:function(t) {
_i_("4ab:263"), this.listShow(), -1 != this.highlightedIndex && this.$items.eq(this.highlightedIndex).removeClass("-highlighted"), -1 != t && this.$items.eq(t).addClass("-highlighted"), this.highlightedIndex = t, this.highlightScroll(), _r_();
},
highlightReset:function(t) {
_i_("4ab:264"), t = t || {}, null === this.valueBuffer || t.preserveInputValue || (this.setValue(this.valueBuffer), t.preserveFocus && this.fixIEFocusLoss()), -1 != this.highlightedIndex && this.$items.eq(this.highlightedIndex).removeClass("-highlighted"), this.highlightedIndex = -1, _r_();
},
highlightScroll:function() {
_i_("4ab:265");
var t = !1, e = this.$list[0].scrollTop;
if (-1 != this.highlightedIndex) {
var i = this.$items.eq(this.highlightedIndex), n = (1 == i.length && i.position().top) + e, s = i.outerHeight();
n + s > this.listHeight + e ? t = n + s - this.listHeight :e > n && (t = n);
} else t = 0;
t !== !1 && t != e && (this.$list[0].scrollTop = t), _r_();
},
getListLength:function() {
return _i_("4ab:266"), _r_(this.items.length);
},
getListFirstIndex:function() {
return _i_("4ab:267"), _r_(0 === this.items.length ? -1 :0);
},
autocomplete:function() {
_i_("4ab:268"), this.postAutocomplete(), _r_();
},
postAutocomplete:function() {
_i_("4ab:269"), 0 === this.getListLength() ? this.listHide() :(this.listShow(), this.calculateListHeight(), this.highlightFromAutocomplete()), _r_();
},
choose:function(t) {
_i_("4ab:270"), this.selectedIndex = t, this.selectedValue = this.items[t].value, this.setValue(this.selectedValue), this.reset(), _r_();
},
reset:function(t) {
_i_("4ab:271"), t = t || {}, -1 != this.highlightedIndex && this.$items.eq(this.highlightedIndex).removeClass("-highlighted"), this.listHide(), t.hard && (this.resetFlags(), this.selectedIndex = -1, this.selectedValue = null, this.setValue("")), _r_();
},
resetFlags:function() {
_i_("4ab:272"), this.highlightedIndex = -1, this.isDeletion = !1, this.keyDownCount = 0, this.keysDown = {}, this.listVisible = !1, this.preventBlurClose = !1, this.valueBuffer = null, _r_();
},
fixIEFocusLoss:function() {
if (_i_("4ab:273"), this.input.createTextRange) {
var t = this.input.createTextRange();
t.moveStart("character", this.input.value.length), t.collapse(), t.select();
}
_r_();
}
}), _r_();
}), B.define("component/core/input-placeholder", function(t, e, i) {
"use strict";
_i_("4ab:10");
var n = t("component"), s = t("read-data-options");
return _r_(n.extend({
init:function() {
if (_i_("4ab:137"), this.browserSupported()) return _r_();
this.options = s(this.$el, {
placeholderClass:{
name:"placeholder-class",
type:String
},
placeholderColor:{
name:"placeholder-color",
type:String,
defaultValue:"#7C90A6"
}
});
var t = "input, textarea", e = this.$el.find(t);
this.$el.is(t) && (e = e.add(this.$el)), e.filter(function(t, e) {
return _i_("4ab:469"), _r_(!!$(e).attr("placeholder"));
}).each(function(t, e) {
_i_("4ab:468"), this.setupPlaceholder($(e)), _r_();
}.bind(this)), _r_();
},
browserSupported:function() {
_i_("4ab:138");
var t = $('input[type="text"]')[0] || $('<input type="text">')[0];
return _r_(!!("placeholder" in t));
},
setupPlaceholder:function(t) {
_i_("4ab:139");
var e = $("<label />").text(t.attr("placeholder")).css({
width:t.width() + "px",
height:t.height() + "px",
paddingTop:t.css("padding-top"),
paddingLeft:t.css("padding-left"),
paddingRight:t.css("padding-right"),
fontFamily:t.css("font-family"),
fontSize:t.css("font-size"),
color:this.options.placeholderColor,
overflow:"hidden",
cursor:"text",
position:"absolute"
});
this.options.placeholderClass && e.addClass(this.options.placeholderClass), e.insertBefore(t), e.click(function() {
_i_("4ab:436"), t.focus(), _r_();
}), t.focus(function() {
_i_("4ab:470"), e.hide(), _r_();
}).blur(function() {
_i_("4ab:437"), e[t.val().length ? "hide" :"show"](), _r_();
}), t.get(0) === document.activeElement ? t.triggerHandler("focus") :t.triggerHandler("blur"), _r_();
}
}));
}), B.define("component/keyboard", function(t, e, i) {
_i_("4ab:11");
var n = t("component"), s = t("event-emitter"), a = {
8:"Backspace",
46:"Delete",
9:"Tab",
13:"Enter",
32:"Space",
27:"Escape",
33:"PageUp",
34:"PageDown",
35:"End",
36:"Home",
37:"ArrowLeft",
38:"ArrowUp",
39:"ArrowRight",
40:"ArrowDown",
48:"0",
49:"1",
50:"2",
51:"3",
52:"4",
53:"5",
54:"6",
55:"7",
56:"8",
57:"9",
65:"A",
66:"B",
67:"C",
68:"D",
69:"E",
70:"F",
71:"G",
72:"H",
73:"I",
74:"J",
75:"K",
76:"L",
77:"M",
78:"N",
79:"O",
80:"P",
81:"Q",
82:"R",
83:"S",
84:"T",
85:"U",
86:"V",
87:"W",
88:"X",
89:"Y",
90:"Z"
};
function r(t, e) {
return _i_("4ab:56"), _r_(function(i) {
_i_("4ab:115");
var n = "";
i.which && void 0 !== a[i.which.toString()] && (i.originalEvent.altKey && (n += ":alt"), i.originalEvent.ctrlKey && (n += ":ctrl"), i.originalEvent.metaKey && (n += ":meta"), i.originalEvent.shiftKey && (n += ":shift"), n += ":" + a[i.which], t.trigger(e + n, {
keys:e + n,
originalEvent:i
})), _r_();
});
}
i.exports = n.extend({
init:function() {
_i_("4ab:274"), s.extend(this), this.$el.bind("keydown", r(this, "keydown")).bind("keyup", r(this, "keyup")), _r_();
}
}), _r_();
}), B.define("component/tooltip-loc", function(t, e, i) {
"use strict";
_i_("4ab:12");
var n = t("component"), s = t("jquery");
i.exports = n.extend({
DEFAULTS:{
template:'<div class="component-tooltip off" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',
placement:"top",
alignment:"center",
trigger:"hover focus",
animation:"true"
},
init:function() {
_i_("4ab:275"), this._buildOptions(), this._createTooltip(), this._attachEvents(), this.$el.trigger("ready.B.tooltip", [ this.$tip ]), _r_();
},
_buildOptions:function() {
_i_("4ab:276"), this.options = s.extend({}, this.DEFAULTS, this.$el.data()), this.options.intangible = "intangible" in this.options, this.options.target && (this.options.target = s(this.options.target).first()), this.options.content || (this.options.content = this.options.title || this.el.title), _r_();
},
_createTooltip:function() {
_i_("4ab:277");
var t = "tooltip-" + this.options.placement + " tooltip-align-" + this.options.alignment;
this.options.extraClass && (t = t + " " + this.options.extraClass), "true" === this.options.animation && (t += " tooltip-animate"), this.$tip = s(this.options.template), this.$tip.addClass(t), this._attachContent(), this.$tip.appendTo(s("body")), this.$el.trigger("inserted.B.tooltip", [ this.$tip ]), _r_();
},
_attachContent:function() {
_i_("4ab:278");
var t = this.$tip.find(".tooltip-inner");
this.options.target ? t.append(this.options.target.clone()) :(this.options.target = [], t.text(this.options.content)), _r_();
},
_positionTooltip:function() {
_i_("4ab:279"), this._defineAlignmentVars(), this._placeTooltip(), this._alignTooltip(), this.$tip.css({
left:this.left,
top:this.top
}), _r_();
},
_defineAlignmentVars:function() {
_i_("4ab:280"), this.elOffset = this.$el.offset(), this.position = "left", this.dimension = "outerWidth", this.options.placement.match(/top|bottom/) && (this.position = "top", this.dimension = "outerHeight"), _r_();
},
_accountForRTL:function(t) {
if (_i_("4ab:281"), !B.env.rtl) return _r_(t);
if ("left" === t) return _r_("right");
if ("right" === t) return _r_("left");
return _r_(t);
},
_placeTooltip:function() {
_i_("4ab:282");
var t = this._accountForRTL(this.position), e = this.dimension;
this._accountForRTL(this.options.placement) === t ? this[t] = this.elOffset[t] - this.$tip[e]() :this[t] = this.elOffset[t] + this.$el[e](), _r_();
},
_alignTooltip:function() {
_i_("4ab:283");
var t, e;
switch ("left" === this.position ? (t = "top", e = "outerHeight") :(t = "left", e = "outerWidth"), this._accountForRTL(this.options.alignment)) {
case t:
this[t] = this.elOffset[t];
break;

case "center":
this[t] = this.$el[e]() / 2 + this.elOffset[t] - this.$tip[e]() / 2;
break;

default:
this[t] = this.elOffset[t] + this.$el[e]() - this.$tip[e]();
}
_r_();
},
_attachEvents:function() {
if (_i_("4ab:284"), this.options.trigger.match(/manual/)) return _r_();
var t, e, i, n = this.options.trigger.split(" "), a = n.length, r = this.$el.add(this.$tip);
for (this.options.intangible && (r = this.$el), a; a--; ) t = n[a], "click" === t ? this.$el.on("click", s.proxy(this.toggle, this)) :(e = "hover" == t ? "mouseenter" :"focusin", i = "hover" == t ? "mouseleave" :"focusout", r.on(e, s.proxy(this.show, this)), r.on(i, s.proxy(this.hide, this)));
_r_();
},
_trackTransitionEnd:function(t) {
_i_("4ab:285");
var e = this.$el;
this.$tip.one("transitionend", function(i) {
_i_("4ab:455"), e.trigger(t, [ this ]), _r_();
}), _r_();
},
show:function() {
_i_("4ab:286"), this.$el.trigger("show.B.tooltip", [ this.$tip ]), this._trackTransitionEnd("shown.B.tooltip"), this.$el.attr("aria-describedby", this.el.id), this._positionTooltip(), this.$tip.addClass("on").removeClass("off"), _r_();
},
hide:function() {
_i_("4ab:287"), this.$el.trigger("hide.B.tooltip", [ this.$tip ]), this._trackTransitionEnd("hidden.B.tooltip"), this.$el.removeAttr("aria-describedby"), this.$tip.removeClass("on").addClass("off"), _r_();
},
toggle:function() {
_i_("4ab:288"), this.$tip.is(".on") ? this.hide() :this.show(), _r_();
}
}), _r_();
}), B.define("component/search/destination/input-placeholder", function(t, e, i) {
_i_("4ab:13");
var n = B.require("component/core/input-placeholder"), s = t("search/searchbox/model");
return _r_(n.extend({
init:function() {
_i_("4ab:140"), this.model = s.getInstance(this.$el.data("sb-id")), n.prototype.init.apply(this, arguments), _r_();
}
}));
}), B.define("component/search/destination/input", function(t, e, i) {
"use strict";
_i_("4ab:14"), booking.jstmpl("search_destination_autocomplete_results", function() {
_i_("4ab:116");
var t = [ "\n		", "\n\n	", "\n	", "\n\n		\n\n		", '\n			<li\n				class="', "c-autocomplete__item sb-autocomplete__item ", "sb-autocomplete__item--cjk ", '"\n				>\n				<div class="sb-autocomplete__section-title-wrapper">\n					<div class="sb-autocomplete__section-title">\n						', '\n							<i class="bicon bicon-', '"></i>\n						', "\n						<span>", "</span>\n					</div>\n				</div>\n			</li>\n		", '\n		<li\n			class="', "sb-autocomplete__item-with_photo ", "sb-autocomplete__item-from_history ", "sb-autocomplete__item--airport ", "sb-autocomplete__item--city ", "sb-autocomplete__item--country ", "sb-autocomplete__item--district ", "sb-autocomplete__item--hotel ", "sb-autocomplete__item--landmark ", "sb-autocomplete__item--region ", "sb-autocomplete__item--theme ", "sb-autocomplete__item--anywhere ", "sb-autocomplete__item__item--elipsis ", "sb-autocomplete__item--with-title ", "sb-autocomplete__item--regioncity ", "sb-autocomplete__item--theme-expanded ", "first_theme ", "1", "smaller_theme_wrapper ", '"\n			', '\n				role="option"\n			', '\n			data-list-item\n			data-i="', '"\n			data-value="', '\n				data-label="', '\n			\n				data-et-mouseenter="customGoal:', ':1"\n				data-et-click="customGoal:', ':2"\n			\n			>', "", '<img src="', '" class="sb-autocomplete--photo">', '<div class="', "sb_passion_highlight_wrapper smaller_theme ", '">\n					<p class="sb_passion_highlight_inner">\n						<i class="', "sb_passion_icon dficon-", " ", '">\n							</i>\n						<strong class="', "sb_passion_highlight_heading ", '">', "</strong>\n					</p>\n				</div>", '<span class="sb-autocomplete__item__highlight">', "</span>", '<span class="sb-autocomplete__item__extra">', '<span class="searchbox__region__subcity__item">', ",", '<span class="sb-autocomplete__badge sb-autocomplete__badge--popular">', "/private/search_top_50_badge/name", "</li>\n	", '\n		<li class="sb-autocomplete__google"></li>\n	', "\n" ], e = [ "total_index", "results", "lc", "section_title_icon", "section_title", "photo_uri", "flags", "dest_type", "is_first_theme", "index", "value", "label", "dest_id", "label_blocks", "highlighted", "text", "label_highlighted", "additional_label", "b_region_city_endorsements", "is_powered_by_google" ];
return _r_(function(i) {
_i_("4ab:421");
var n = "", s = this.fn;
function a(n) {
if (_i_("4ab:438"), s.MD(e[1])) {
n += t[1], s.MN("index", 0), n += t[2], s.MN(e[0], s.MI(s.array_length(s.MB(e[1]))) - s.MI(1)), n += t[1];
var a = s.MC(e[1]) || [];
i.unshift(null);
for (var r = 1, o = a.length; o >= r; r++) {
if (i[0] = a[r - 1], n += t[3], s.MJ(s.MB(e[4])) && (n += t[4], n += t[5], s.MJ(/zh|xt|ja|ko/.test(s.MB(e[2]))) && (n += t[6]), n += t[7], s.MD(e[3]) && (n += [ t[8], s.MC(e[3]), t[9] ].join("")), n += [ t[10], s.MC(e[4]), t[11] ].join("")), n += t[12], n += t[5], s.MJ(s.MB(e[5])) && s.MJ(s.track_experiment("bLTLdIONYO")) && (n += t[13]), s.MJ(s.MG((s.MC(e[6]) || {}).history)) && (n += t[14]), s.MJ(/zh|xt|ja|ko/.test(s.MB(e[2]))) && (n += t[6]), n += s.MJ(s.MB(e[7]) + "" == "airport") ? t[15] :s.MJ(s.MB(e[7]) + "" == "city") ? t[16] :s.MJ(s.MB(e[7]) + "" == "country") ? t[17] :s.MJ(s.MB(e[7]) + "" == "district") ? t[18] :s.MJ(s.MB(e[7]) + "" == "hotel") ? t[19] :s.MJ(s.MB(e[7]) + "" == "landmark") ? t[20] :s.MJ(s.MB(e[7]) + "" == "region") ? t[21] :s.MJ(s.MB(e[7]) + "" == "theme") ? t[22] :s.MJ(s.MB(e[7]) + "" == "anywhere") ? t[23] :t[17], n += t[24], s.MD(e[4]) && (n += t[25]), s.MJ(s.MB(e[6])) && s.MJ(s.MC(e[6]).is_region_city) && (n += t[26]), s.MJ(s.MB(e[7]) + "" == "theme") && (n += t[27], s.MD(e[8]) || (n += t[28], s.MN(e[8], t[29])), n += t[30]), n += t[31], s.MJ(s.track_experiment("OTfdASFbLYDdWQecDKVUELVT")) && (n += t[32]), n += [ t[33], s.MC(e[9]), t[34], s.F.entities(s.MC(e[10])), t[31] ].join(""), s.MD(e[11]) && (n += [ t[35], s.F.html(s.MC(e[11])), t[31] ].join("")), n += [ t[36], "adUAKYDEZREGZVFGEVUC", t[37], "adUAKYDEZREGZVFGEVUC", t[38] ].join(""), n += t[39], s.MJ(s.MB(e[5])) && s.MJ(s.track_experiment("bLTLdIONYO")) && (n += [ t[40], s.STATIC_HOSTNAME(s.MB(e[5]), 0, 0, 0), t[41] ].join("")), n += t[39], s.MJ(s.MB(e[7]) + "" == "theme")) n += t[42], n += t[43], n += t[44], n += [ t[45], s.F.entities(s.MC(e[12])), t[46] ].join(""), n += t[47], n += t[48], n += [ t[49], s.F.entities(s.MC(e[11])), t[50] ].join(""); else {
if (n += t[39], s.MD(e[13])) {
n += t[39];
var _ = r, l = a, h = o, a = s.MC(e[13]) || [];
i.unshift(null);
for (var r = 1, o = a.length; o >= r; r++) i[0] = a[r - 1], n += t[39], s.MD(e[14]) && (n += t[51]), n += [ t[39], s.F.entities(s.MC(e[15])), t[39] ].join(""), s.MD(e[14]) && (n += t[52]), n += t[39];
i.shift(), r = _, a = l, o = h, n += t[39];
} else s.MD(e[16]) ? n += [ t[39], s.MC(e[16]), t[39] ].join("") :s.MD(e[11]) && (n += [ t[39], s.F.entities(s.MC(e[11])), t[39] ].join(""));
if (n += t[39], s.MD(e[17]) && (n += [ t[53], s.MC(e[17]), t[52] ].join("")), n += t[39], s.MD(e[18])) {
n += t[39];
var _ = r, l = a, h = o, d = c, a = s.MC(e[18]) || [];
i.unshift({
endorsement:null
});
for (var c, r = 1, o = a.length; o >= r; r++) i[0].endorsement = c = a[r - 1], n += [ t[54], c ].join(""), s.MJ(r != a.length) && (n += t[55]), n += t[52];
i.shift(), r = _, a = l, o = h, c = d, n += t[39];
}
n += t[39], s.MJ(s.MC(e[6]).popular) && (n += [ t[56], s.F.entities(s.ME(t[57], s.MB, s.MN, null)), t[52] ].join("")), n += t[39];
}
n += t[39], s.MN("index", s.MI(s.MB(e[9])) + s.MI(1)), n += t[39], n += t[58];
}
i.shift(), n += t[1], s.MD(e[19]) && (n += t[59]), n += t[60];
}
return n += t[60], _r_(n);
}
return n += t[0], n = a(n), n += t[2], _r_(n);
});
}()), booking.jstmpl("search_destination_autocomplete_loading", function() {
_i_("4ab:117");
var t = [ "\n		", '\n\n<ul class="c-autocomplete__list sb-autocomplete__list sb-autocomplete__list--loading">\n	', '\n		<li class="c-autocomplete__item sb-autocomplete__item sb-autocomplete__item--city">\n			', '\n				<span class="sb-autocomplete__item-placeholder-text js-placeholder-text"></span>\n			', "\n		</li>\n	", "\n</ul>\n", "\n	" ], e = [ "fe_sb_autocomplete_loading_items" ];
return _r_(function(i) {
_i_("4ab:422");
var n = "", s = this.fn;
function a(n) {
_i_("4ab:439"), s.MN("fe_sb_autocomplete_loading_items", 5), n += t[1];
var a = s.seq(1, s.MB(e[0])) || [];
i.unshift(null);
for (var r = 1, o = a.length; o >= r; r++) {
i[0] = a[r - 1], n += t[2];
var _ = r, l = a, h = o, a = s.seq(1, 3) || [];
i.unshift(null);
for (var r = 1, o = a.length; o >= r; r++) i[0] = a[r - 1], n += t[3];
i.shift(), r = _, a = l, o = h, n += t[4];
}
return i.shift(), n += t[5], _r_(n);
}
return n += t[0], n = a(n), n += t[6], _r_(n);
});
}());
var n = t("component/autocomplete-core"), s = t("search/searchbox/model"), a = t("search/searchbox/analytics"), r = t("et");
i.exports = n.extend({
init:function() {
_i_("4ab:289"), this.optionsSpec = {
delay:{
name:"delay",
type:Number,
defaultValue:300
},
modelId:{
name:"sb-id",
type:String,
required:!0
},
filterDestType:{
name:"filter-dest-type",
type:String
},
gpf:{
name:"gpf",
type:Boolean
},
gpOnly:{
name:"gp-only",
type:Boolean
},
minLength:{
name:"minlength",
type:Number,
defaultValue:2
},
focusOnLoad:{
name:"focus-on-load",
type:Boolean
},
focusOnTyping:{
name:"focus-on-typing",
type:Boolean
},
isSticky:{
name:"is-sticky",
type:Boolean
},
required:{
name:"required",
type:Boolean
},
flags:{
name:"flags",
type:String,
defaultValue:""
}
}, $.extend(this.optionsSpec, this.extendOptions()), this.$errors = this.$el.find("[data-error-id]"), this.$clear = this.$el.find('[data-clear=""]'), n.prototype.init.apply(this, arguments), this.model = s.getInstance(this.options.modelId), this.model.use("destination"), this.model.updateFlags(this.options.flags), this.inputUntouched = !0, this.model.on("change", this.modelChange.bind(this)), this.model.on("validation", this.modelValidation.bind(this)), this.options.required && this.model.destination.configure({
validate:!0
}), this.options.gpOnly && this.model.destination.configurePredictions({
gpo:1
}), this.options.gpf && this.model.destination.configure({
gpf:1
}), this.options.filterDestType && this.model.destination.configurePredictions({
dest_type:this.options.filterDestType
}), this.options.focusOnLoad && this.focusOnLoad(), this.options.focusOnTyping && this.options.isSticky && (this.stickyController = t("search/searchbox/searchbox-sticky-controller").getController()), this.model.getFlag("track_focus_on_typing_stages") && this.enableFocusOnTyping(), this.$errors.filter(".-visible").length && (this.model.destination.valid = !1), this.templateResults = B.jstmpl("search_destination_autocomplete_results"), this.toggleClear(), this.modelInit(), this.renderLoadingElement(), _r_();
},
addInputEventListeners:function() {
_i_("4ab:290"), n.prototype.addInputEventListeners.apply(this, arguments), this.$clear.length && this.$clear.on("click", this.clearClick.bind(this)), _r_();
},
renderLoadingElement:function() {
_i_("4ab:291"), this.shouldShowLoadingState = !0;
var t = {};
this.$loading = $(B.jstmpl("search_destination_autocomplete_loading").render(t)), this.$loading.find(".js-placeholder-text").each(function() {
_i_("4ab:456"), $(this).width(65 + parseInt(65 * Math.random(), 10)), _r_();
}), this.$loading.insertAfter(this.$list), _r_();
},
showLoading:function() {
_i_("4ab:292"), this.shouldShowLoadingState && (n.prototype.listHide.apply(this), this.$loading.addClass("-visible")), _r_();
},
hideLoading:function() {
_i_("4ab:293"), this.shouldShowLoadingState && this.$loading.removeClass("-visible"), _r_();
},
modelInit:function() {
_i_("4ab:294");
var t = {
ss:this.input.value
};
this.model.destination.init(t), _r_();
},
modelChange:function(t) {
if (_i_("4ab:295"), t && t.group && "destination" == t.group) {
var e = this.model.destination.get();
e.ss == this.input.value || this.isDeletion || this.setValue(e.ss), t.onlyCurrentCountry && (this.$input.focus(), this.autocomplete()), B.env.b_is_bbtool_user && B.et.customGoal("VObLMEKKTVeBKeYEGWe", 3), this.inputUntouched = !1;
}
_r_();
},
modelValidation:function(t) {
_i_("4ab:296"), t && "destination" == t.group && (this.$errors.filter(".-visible").removeClass("-visible"), this.model.destination.valid || (this.$el.find("#destination__error").addClass("-visible"), this.$errors.filter('[data-error-id="' + this.model.destination.validationError + '"]').addClass("-visible"), a.send("[error] destination: " + this.model.destination.validationError))), _r_();
},
inputClick:function() {
if (_i_("4ab:297"), "" === this.input.value || this.inputUntouched) {
var t = this.model.getFlag("on_click_suggestions_track");
t && r.stage(t, 1), this.model.getFlag("on_click_suggestions") && this.showSuggestions();
}
this.inputUntouched && this.model.getFlag("clear_input_on_click") && (this.input.value = ""), this.inputUntouched && "undefined" != typeof this.model.getFlag("clear_input_on_click") && B.et.stage("UBKeJbLYYFbYOdPMZCaDJZXe", 1), n.prototype.inputClick.apply(this, arguments), _r_();
},
inputInput:function() {
_i_("4ab:298"), this.model.destination.setSearchString(this.input.value), this.inputUntouched = !1, n.prototype.inputInput.apply(this, arguments), _r_();
},
inputKeyUp:function() {
_i_("4ab:299"), n.prototype.inputKeyUp.apply(this, arguments), _r_();
},
inputFocus:function() {
_i_("4ab:300"), n.prototype.inputFocus.apply(this, arguments), _r_();
},
inputBlur:function() {
_i_("4ab:301"), clearTimeout(this.timer), this.model.destination.abortPredictions();
var t = this.model.destination.get().ss_raw;
if (t) {
var e = t.split(/\s+/).length;
a.sendOnce("[interaction] autocomplete tokens typed [" + e + "]");
}
this.inputUntouched && this.model.getFlag("clear_input_on_click") && this.input.value !== this.input.getAttribute("value") && (this.input.value = this.input.getAttribute("value")), setTimeout(function() {
_i_("4ab:475"), "" != this.$input.val() || this.listVisible || this.render(!1, {
results:[]
}), _r_();
}.bind(this), 10), n.prototype.inputBlur.apply(this, arguments), this.suggestionsLocked = !1, _r_();
},
inputEnter:function(t) {
_i_("4ab:302"), a.send("[interaction] search input pressed enter"), n.prototype.inputEnter.apply(this, arguments), _r_();
},
clearClick:function(t) {
_i_("4ab:303"), t.preventDefault(), this.reset({
hard:!0
}), this.input.focus(), _r_();
},
setValue:function(t) {
_i_("4ab:304"), n.prototype.setValue.apply(this, arguments), this.toggleClear(), _r_();
},
toggleClear:function() {
_i_("4ab:305"), this.$clear.length && this.$clear.toggleClass("-visible", "" !== this.input.value), _r_();
},
listShow:function() {
_i_("4ab:306"), this.results && this.results.filter(function(t) {
return _i_("4ab:476"), _r_(t.photo_uri);
}).length ? this.$list.addClass("sb-autocomplete__list-with_photos") :this.$list.removeClass("sb-autocomplete__list-with_photos"), this.items.length > 0 && this.input.value.length >= this.options.minLength ? n.prototype.listShow.apply(this, arguments) :this.items.length > 0 && this.model.getFlag("on_click_suggestions") && n.prototype.listShow.apply(this, arguments), _r_();
},
autocomplete:function(t) {
_i_("4ab:307"), t = t || {}, this.highlightReset({
preserveInputValue:!0
}), clearTimeout(this.timer), this.model.destination.abortPredictions(), this.hideLoading(), this.toggleClear(), t.fromFocus || (this.isDeletion ? this.model.destination.reset() :this.postAutocomplete(), this.input.value.length >= this.options.minLength && (this._loading = !0), this.timer = setTimeout(function() {
_i_("4ab:512"), this.input.value.length >= this.options.minLength && (this.model.destination.getPredictions(this.query(), this.render.bind(this)), this.showLoading()), _r_();
}.bind(this), this.options.delay)), _r_();
},
query:function() {
return _i_("4ab:308"), _r_(this.input.value);
},
extendOptions:function() {
return _i_("4ab:309"), _r_({});
},
render:function(t, e) {
_i_("4ab:310"), this.results = [], this.items = [], this.$items = $({}), this.on_click_suggestion = !1, this.hideLoading(), !t && this.model.getFlag("on_click_suggestions_track") && e.on_click_suggestion && (this.on_click_suggestion = !0), this._loading = !1, !t || "service-booking-no-results" != t.toString() && -1 === t.toString().indexOf("ZERO_RESULTS") || a.send("[context] autocomplete zero results search"), !t && Array.isArray(e.results) ? (a.send("[context] autocomplete suggestions [" + e.results.length + "]"), e.is_powered_by_google && a.send("[context] autocomplete google place search"), this.results = e.results, this.items = e.results.map(function(t) {
return _i_("4ab:496"), _r_({
value:t.label,
valueLowerCase:t.label.toLowerCase()
});
}), this.$list.html(this.templateResults.render(e)), this.$items = this.$list.find('[data-list-item=""]'), r.initAttributesTracking(this.$list), this.model.getFlag("OTfdASFbLYDdWQecDKVUELVT") && this.a11yAnnounceResults(e)) :t || (this.$list.html(this.templateResults.render(e)), this.model.getFlag("OTfdASFbLYDdWQecDKVUELVT") && this.a11yAnnounceResults(e)), this.postAutocomplete(), setTimeout(function() {
_i_("4ab:477"), this.$items.each(function() {
_i_("4ab:517"), this.scrollWidth > this.offsetWidth && this.setAttribute("data-title", this.getAttribute("data-label")), _r_();
}), _r_();
}.bind(this), 500), _r_();
},
a11yAnnounceResults:function(t) {
_i_("4ab:311"), Array.isArray(t.results) && t.results.length > 0 && setTimeout(function() {
_i_("4ab:505"), this.$el.find(".sb-a11y-announcement").show(), this.$el.find(".sb-a11y-announcement").html("<p>" + B.jstmpl.translations("a11y_index_autocomplete_suggested_destinations") + "</p>"), setTimeout(function() {
_i_("4ab:522"), this.$el.find(".sb-a11y-announcement").html(""), this.$el.find(".sb-a11y-announcement").hide(), _r_();
}.bind(this), 500), _r_();
}.bind(this), 900), _r_();
},
choose:function(t) {
_i_("4ab:312"), a.send("[interaction] autocomplete click position [" + t + "]"), a.send("[interaction] autocomplete click [" + this.results[t].dest_type + "]"), clearTimeout(this.timer), this.model.destination.abortPredictions(), this.model.destination.set(this.results[t]), n.prototype.choose.apply(this, arguments), this.on_click_suggestion && this.model.getFlag("on_click_suggestions_track") && B.et.customGoal(this.model.getFlag("on_click_suggestions_track"), 1);
var e = this.results[t];
B.et.goal("autocomplete_option_selected"), "theme" == this.results[t].dest_type ? B.et.goal("autocomplete_option_selected_theme") :"hotel" == this.results[t].dest_type ? B.et.goal("autocomplete_option_selected_hotel") :this.results[t].place_id ? B.et.goal("autocomplete_option_selected_google_places") :"query_finder" == this.results[t].result_type || B.et.goal("autocomplete_option_selected_destination"), this.results[t].flags && this.results[t].flags.is_region_city && B.et.customGoal("adUAKYGPBDJfNcDBbNMTKe", 1);
var i = [ "landmark", "airport", "district", "region" ];
if (this.model.destination.setTrackingFields("map_autoopen", []), -1 !== i.indexOf(e.dest_type)) {
this.locationSelected = !0;
var s = [];
this.model.getFlag("open_location_in_map") && (s.push({
name:"map",
value:1
}), $(".sb-searchbox__map_trigger").removeClass("g-hidden").trigger("a11y_OTfdASFYWbMScDaVeYRAbEBSHfGbEO")), this.model.destination.setTrackingFields("map_trigger", s);
} else this.model.getFlag("open_location_in_map") && ($(".sb-searchbox__map_trigger").addClass("g-hidden"), this.model.destination.setTrackingFields("map_trigger", []));
("theme" == this.results[t].dest_type || "theme_dest" == this.results[t].result_type) && this.model.submit(), "query_finder" == this.results[t].result_type && $(".b-travel-purpose").removeClass("b-form__booker-type--align-with-acc-types"), this.showCalendarOnDesinationChange(), _r_();
},
showCalendarOnDesinationChange:function() {
if (_i_("4ab:313"), !this.model.getFlag("calendar_on_destination_change") || this.model.dates.get().checkin) return _r_();
this.showCalendar(), _r_();
},
showCalendar:function() {
_i_("4ab:314"), setTimeout(function() {
_i_("4ab:478"), this.$el.closest(".sb-searchbox__outer").find(".c2-wrapper-s-checkin").trigger("show"), _r_();
}.bind(this)), _r_();
},
showSuggestions:function() {
if (_i_("4ab:315"), this.suggestionsLocked) return _r_();
this.model.destination.getSuggestions(this.render.bind(this)), this.model.getFlag("on_click_suggestions_no_history_track") && r.stage("adUAKYDEZREGZVFGEVUC", 1), this.suggestionsLocked = !0, _r_();
},
focusOnLoad:function() {
_i_("4ab:316");
var t = $(document);
t.ready(function() {
_i_("4ab:479"), this.input.focus(), _r_();
}.bind(this)), _r_();
},
enableFocusOnTyping:function() {
_i_("4ab:317");
var t = $(document);
t.on("keydown.autofocus", this.onKeyDown.bind(this)), this.$input.on("blur", function() {
_i_("4ab:506"), t.on("keydown.autofocus", this.onKeyDown.bind(this)), _r_();
}.bind(this)).on("focus", function() {
_i_("4ab:480"), t.off("keydown.autofocus", this.onKeyDown.bind(this)), _r_();
}.bind(this)), _r_();
},
onKeyDown:function(t) {
_i_("4ab:318");
var e = this.$input.offset().top, i = t.keyCode, n = t.metaKey || t.ctrlKey, s = i > 47 && 58 > i || i > 64 && 91 > i || i > 95 && 112 > i;
!s || n || !document.activeElement || /INPUT|TEXTAREA|SELECT/.test(document.activeElement.nodeName) || $(".modal-mask").length || (B.env.b_is_landing ? B.et.stage("AEJPCCTUIZaRQMeIBdQeDUWe", 1) :B.et.stage("AEJPCCCALZeRFcVAfSHDDdTYeLT", 1), this.options.focusOnTyping && (this.options.isSticky && this.stickyController ? this.stickyController.show() :window.scrollY > e && $("html, body").animate({
scrollTop:e - 5
}), this.input.value && this.setValue(""), this.$input.focus())), _r_();
},
reset:function() {
_i_("4ab:319"), this.selectedValue || this.model.destination.reset(), n.prototype.reset.apply(this, arguments), _r_();
}
}), _r_();
}), B.define("search/destination/model", function(t, e, i) {
"use strict";
_i_("4ab:15");
var n = t("search/destination/service");
function s(t) {
_i_("4ab:57"), this.model = t, this.data = {
ss:""
}, this.valid = !0, this.validationError = "", this.options = {}, this.predicitonParameters = {}, this.searchInstance = null, this.suggestionsCache = {
results:[]
}, _r_();
}
$.extend(s.prototype, {
init:function(t) {
_i_("4ab:141"), this.data = t;
var e = {};
(this.model.getFlag("on_click_suggestions") || this.model.getFlag("on_click_suggestions_no_history")) && (this.model.getFlag("on_click_suggestions_no_history") && (e.anywhere = !0), this.model.use("group"), this.model.on("init", function(t) {
_i_("4ab:497"), "group" === t.group && this.fetchSuggestions(e), _r_();
}.bind(this))), this.emit("init"), _r_();
},
configure:function(t, e) {
_i_("4ab:142"), void 0 !== e ? this.options[t] = e :"object" == typeof t && $.extend(this.options, t), _r_();
},
getOption:function(t) {
return _i_("4ab:143"), _r_(this.options[t]);
},
get:function() {
return _i_("4ab:144"), _r_(this.data);
},
set:function(t) {
if (_i_("4ab:145"), this.searchInstance && this.searchInstance.getResultDetails && !t._details) return this.searchInstance.getResultDetails(t, function(e, i) {
_i_("4ab:498"), i = i || {}, i._details = !0, this.set(i), window.ga && window.ga("send", "event", "ac_google_places", [ i.place_types || "unknown", i.name ].join("|"), this.data.ss_raw, t.position), _r_();
}.bind(this)), _r_();
this.data.ss = t.ss, this.data.dest_id = t.dest_id, this.data.dest_type = t.dest_type, t.nr_hotels && (this.data.nr_hotels = t.nr_hotels), this.data.acc_type_id = t.acc_type_id, t.place_id && t.latitude && t.longitude ? (this.data.place_id = t.place_id, this.data.latitude = t.latitude, this.data.longitude = t.longitude, this.data.place_types = t.place_types) :(this.data.place_id = "", this.data.latitude = "", this.data.longitude = "", this.data.place_types = null), t._fa ? this.model.setFormAction(t._fa) :this.model.setFormAction(null), t._ef = t._ef || [], this.data.dest_id && t._ef.push({
name:"dest_id",
value:this.data.dest_id
}), this.data.dest_type && t._ef.push({
name:"dest_type",
value:this.data.dest_type
}), this.data.place_id && t._ef.push({
name:"place_id",
value:this.data.place_id
}), this.data.latitude && t._ef.push({
name:"place_id_lat",
value:this.data.latitude
}), this.data.longitude && t._ef.push({
name:"place_id_lon",
value:this.data.longitude
}), this.data.place_types && Array.isArray(this.data.place_types) && t._ef.push({
name:"place_types",
value:this.data.place_types.join(",")
}), t._ef.push({
name:"search_pageview_id",
value:B.env.pageview_id
}), t._ef.push({
name:"search_selected",
value:"true"
}), this.model.setFields("destinationNotSelected", []), this.model.setFields("destinationSelected", t._ef), this.emit("change"), _r_();
},
setSearchString:function(t) {
_i_("4ab:146"), this.data.ss = t, this.data.ss_raw = t, this.valid || this.validate(), _r_();
},
reset:function() {
_i_("4ab:147"), this.data.dest_id = null, this.data.dest_type = null, this.data.place_id = null, this.data.latitude = null, this.data.longitude = null, this.model.setFormAction(null), this.model.setFields("destination", []), this.model.setFields("destinationNotSelected", []), this.model.setFields("destinationSelected", [ {
name:"dest_id",
value:""
}, {
name:"dest_type",
value:""
}, {
name:"search_pageview_id",
value:B.env.pageview_id
}, {
name:"search_selected",
value:"false"
} ]), this.emit("change"), _r_();
},
setTrackingFields:function(t, e) {
_i_("4ab:148"), this.model.setFields(t, e), this.emit("change"), _r_();
},
validate:function() {
_i_("4ab:149");
var t = !0, e = "", i = this.model.getFlag("b_loc_part_of_memorial_day_search_us_exp_flag");
if (null != i && "" !== i) {
var n = document.getElementsByName("ss"), s = "";
n && n.length >= 1 && (s = n[0].value);
var a = -1 != s.toLowerCase().replace(/ /g, "").indexOf("memorialday");
a && "www" === B.env.b_site_type && "en-us" === B.env.b_selected_language && "us" === B.env.ip_country && 1 == B.et.track("YdALOLOLOVZMYCKBXAbbFGUPVZHe") && this.setDefaultParamsForUSCityForMemorailDay();
}
var r = this.model.getFlag("loc_part_of_show_us_city_exp_flag");
if (null != r && "" !== r) {
var n = document.getElementsByName("ss"), s = "";
n && n.length >= 1 && (s = n[0].value);
}
if (!this.options.validate) return this.valid = t, this.validationError = e, _r_(t);
return "" === this.data.ss && (t = !1, e = "search-string-empty"), this.valid != t && (this.valid = t, this.validationError = e, this.emit("validation")), _r_(t);
},
setDefaultParamsForUSCityForMemorailDay:function() {
_i_("4ab:150");
var t = document.getElementsByName("loc_memorial_day_ss"), e = "";
t && t.length >= 1 && (e = t[0].value);
var i = document.getElementsByName("loc_memorial_day_dest_id"), n = "";
i && i.length >= 1 && (n = i[0].value);
var s = document.getElementsByName("loc_memorial_day_dest_type"), a = "";
s && s.length >= 1 && (a = s[0].value);
var r = B.env.pageview_id, o = "true";
this.data.ss = e, this.data.ss_raw = e, this.data.dest_id = n, this.data.dest_type = a, this.model.setFields("destinationSelected", [ {
name:"ss",
value:e
}, {
name:"dest_id",
value:n
}, {
name:"dest_type",
value:a
}, {
name:"search_pageview_id",
value:r
}, {
name:"search_selected",
value:o
} ]);
for (var t = document.getElementsByName("ss"), _ = 0; t && _ < t.length; _++) t[_].setAttribute("value", e);
for (var i = document.getElementsByName("dest_id"), _ = 0; i && _ < i.length; _++) i[_].setAttribute("value", n);
for (var s = document.getElementsByName("dest_type"), _ = 0; s && _ < s.length; _++) s[_].setAttribute("value", a);
for (var l = document.getElementsByName("search_pageview_id"), _ = 0; l && _ < l.length; _++) l[_].setAttribute("value", r);
for (var h = document.getElementsByName("search_selected"), _ = 0; h && _ < h.length; _++) h[_].setAttribute("value", o);
_r_();
},
setDefaultParamsForUSCity:function() {
_i_("4ab:151");
var t = document.getElementsByName("loc_ss"), e = "";
t && t.length >= 1 && (e = t[0].value);
var i = document.getElementsByName("loc_dest_id"), n = "";
i && i.length >= 1 && (n = i[0].value);
var s = document.getElementsByName("loc_dest_type"), a = "";
s && s.length >= 1 && (a = s[0].value);
var r = B.env.pageview_id, o = "true";
this.data.ss = e, this.data.ss_raw = e, this.data.dest_id = n, this.data.dest_type = a, this.model.setFields("destinationSelected", [ {
name:"ss",
value:e
}, {
name:"dest_id",
value:n
}, {
name:"dest_type",
value:a
}, {
name:"search_pageview_id",
value:r
}, {
name:"search_selected",
value:o
} ]);
for (var t = document.getElementsByName("ss"), _ = 0; t && _ < t.length; _++) t[_].setAttribute("value", e);
for (var i = document.getElementsByName("dest_id"), _ = 0; i && _ < i.length; _++) i[_].setAttribute("value", n);
for (var s = document.getElementsByName("dest_type"), _ = 0; s && _ < s.length; _++) s[_].setAttribute("value", a);
for (var l = document.getElementsByName("search_pageview_id"), _ = 0; l && _ < l.length; _++) l[_].setAttribute("value", r);
for (var h = document.getElementsByName("search_selected"), _ = 0; h && _ < h.length; _++) h[_].setAttribute("value", o);
_r_();
},
initPredictions:function() {
if (_i_("4ab:152"), this.options.gpf) {
var t = B.require("search/destination/service-atlas");
t.init();
}
_r_();
},
configurePredictions:function(t) {
_i_("4ab:153"), $.extend(this.predicitonParameters, t), _r_();
},
getPredictions:function(t, e) {
_i_("4ab:154");
var i = $.extend({}, B.env.search_autocomplete_params, this.predicitonParameters);
this.searchInstance && this.searchInstance.abort();
function s(t, i) {
_i_("4ab:423"), i && (this.model.setFields("destination", i._ef), this.model.setFields("destinationNotSelected", i._efd)), e.apply(null, arguments), _r_();
}
i.ss = t, i.gpf = this.options.gpf, this.options.onlyCurrentCountry && (i.e_acf_i = B.env.b_country_id, i.e_acf_t = "country"), this.searchInstance = n.search(i, s.bind(this)), this.model.setFields("destinationOriginal", [ {
name:"ss_raw",
value:i.ss
} ]), this.model.setFields("destinationSelected", [ {
name:"search_pageview_id",
value:B.env.pageview_id
} ]), _r_();
},
abortPredictions:function() {
_i_("4ab:155"), this.searchInstance && this.searchInstance.abort(), _r_();
},
getSuggestions:function(t, e) {
if (_i_("4ab:156"), this.suggestionsCache.results.length) return setTimeout(function() {
_i_("4ab:499"), t(null, this.suggestionsCache), _r_();
}.bind(this), 0), _r_();
this.model.one("destination:suggestions", function() {
_i_("4ab:471"), this.suggestionsCache.results.length && t(null, this.suggestionsCache), _r_();
}.bind(this)), _r_();
},
fetchSuggestions:function(t) {
if (_i_("4ab:157"), this.suggestionsLoading) return _r_();
var e = function(t, e) {
if (_i_("4ab:440"), !t && e && e.results) {
e.on_click_suggestion = e.results.length > 0;
for (var i = 0; i < e.results.length; i++) !e.results[i].ss && e.results[i].label && (e.results[i].ss = e.results[i].label);
this.suggestionsCache = e;
}
this.suggestionsLoading = !1, this.emit("destination:suggestions"), _r_();
}, i = B.require("search/destination/service-booking");
this.suggestionsInstance = i.getSuggestions(e.bind(this), t), this.suggestionsLoading = !0, _r_();
},
initOnlyCurrentCountry:function(t) {
_i_("4ab:158"), this.options.onlyCurrentCountry = !!t, _r_();
},
getOnlyCurrentCountry:function() {
return _i_("4ab:159"), _r_(!!this.options.onlyCurrentCountry);
},
setOnlyCurrentCountry:function(t) {
_i_("4ab:160"), this.options.onlyCurrentCountry = !!t, this.emit("change", {
onlyCurrentCountry:!0
}), _r_();
},
emit:function(t, e) {
_i_("4ab:161"), e = e || {}, this.model.emit(t, $.extend(e, {
group:"destination"
})), _r_();
}
}), i.exports = s, _r_();
}), B.define("search/destination/service", function(t, e, i) {
"use strict";
_i_("4ab:16");
var n = t("search/destination/service-booking"), s = t("search/destination/service-atlas");
function a(t, e, i) {
_i_("4ab:58");
var n, s, a, o = [], _ = [], l = [], h = 0, d = function(t, e, n) {
if (_i_("4ab:162"), h++, o.length && (e ? _.push(e) :l[t] = n, h == o.length)) if (_.length == o.length) i.call(null, _[0], null); else {
var s = r(l);
i.call(null, null, s);
}
_r_();
}, c = function() {
for (_i_("4ab:163"), n = 0; n < o.length; n++) o[n].abort();
_r_();
};
for (n = 0; n < t.length; n++) s = t[n].search.call(t[n], $.extend({}, e), d.bind(null, n)), s.getResultDetails && (a = s.getResultDetails), o.push(s);
return _r_({
abort:c,
getResultDetails:a
});
}
function r(t) {
_i_("4ab:59");
var e = 6, i = 3, n = {
results:[],
_ef:[],
_efd:[]
};
return t.forEach(function(t) {
if (_i_("4ab:164"), !t) return _r_();
if (t.results) if (n.results.length) {
t.results = t.results.filter(l), t.results.splice(i);
var s = e - t.results.length;
n.results.splice(s), n.results = t.results.concat(n.results);
} else n.results = t.results;
[ "_ef", "_efd" ].forEach(function(e) {
_i_("4ab:441"), t[e] && (n[e] = n[e].concat(t[e].filter(o(n[e])))), _r_();
}), n.is_powered_by_google = n.is_powered_by_google || t.results.length && t.is_powered_by_google, _r_();
}), n.results.forEach(function(t, e) {
_i_("4ab:165"), t._ef = _(t._ef, "ac_position", e), _r_();
}), n.city = n.results, n.__js_upa__ = n.is_powered_by_google, _r_(n);
}
function o(t) {
_i_("4ab:60");
var e = {};
return t.forEach(function(t) {
_i_("4ab:166"), e[t.name] = !0, _r_();
}), _r_(function(t) {
return _i_("4ab:118"), _r_(!e[t.name]);
});
}
function _(t, e, i) {
return _i_("4ab:61"), t = t.filter(function(t) {
return _i_("4ab:320"), _r_(t.name !== e);
}), t.push({
name:e,
value:i
}), _r_(t);
}
function l(t) {
return _i_("4ab:62"), _r_(-1 != [ "route", "postal_code", "street_address" ].indexOf(t.place_type));
}
function h(t, e, i) {
_i_("4ab:63");
var n, s = [], a = [], r = function(t, e) {
if (_i_("4ab:167"), s.length) if (t) a.push(t), a.length == s.length && i.call(null, t, e); else for (i.call(null, t, e), n = 0; n < s.length; n++) s[n].abort();
_r_();
}, o = function() {
for (_i_("4ab:168"), n = 0; n < s.length; n++) s[n].abort();
_r_();
};
for (n = 0; n < t.length; n++) s.push(t[n].search.call(t[n], $.extend({}, e), r));
return _r_({
abort:o
});
}
function d(t, e, i) {
_i_("4ab:64");
var n, s, a = {}, r = function(e, n) {
_i_("4ab:169"), setTimeout(function() {
_i_("4ab:442"), e && t.length ? s() :i.call(null, e, n), _r_();
}, 0), _r_();
};
s = function() {
_i_("4ab:170");
var i = t.shift();
n = i.search.call(i, $.extend({}, e), r), a.getResultDetails = n.getResultDetails, _r_();
};
var o = function() {
_i_("4ab:171"), n && n.abort(), _r_();
};
return s(), a.abort = o, _r_(a);
}
i.exports = {
search:function(t, e) {
if (_i_("4ab:172"), !t || !t.ss || "function" != typeof e) throw new Error("Invalid arguments");
return _r_(t.gpo ? s.search(t, e) :t.fesp_acf_i || t.fesp_acf_i_regions || t.fesp_acf_i_cities ? n.search(t, e) :t.gpf && t.ss.match(/[0-9]/) && "tdot" !== B.env.b_site_type ? a([ n, s ], t, e) :t.gpr ? h([ n, s ], t, e) :t.gpf ? d([ n, s ], t, e) :n.search(t, e));
}
}, _r_();
}), B.define("search/destination/service-atlas", function(t, e, i) {
"use strict";
_i_("4ab:17");
var n = t("event-emitter"), s = B.env.b_map_center_latitude || B.env.b_latitude || void 0, a = B.env.b_map_center_longitude || B.env.b_longitude || void 0, r = 3e4, o = 2, _ = [ "ChIJNy0jzGPMUQ4RWpboPw0ztMY", "ChIJ2xJC2SwmsUcRBqiHnUEubtY", "ChIJT-IyeGHurw0Rx89nUEaYTPM", "ChIJk_Swujrurw0R7yS_X2BSuD4" ], l = {
administrative_area_level_1:"region",
administrative_area_level_2:"region",
administrative_area_level_3:"region",
administrative_area_level_4:"region",
administrative_area_level_5:"region",
airport:"airport",
country:"country",
locality:"city",
point_of_interest:"landmark",
route:"region",
street_address:"region",
postal_code:"region",
sublocality:"district"
}, h = "www" === B.env.b_site_type && B.et.track("AdDUOSAcBfSJAFPLcLcJO"), d = {};
function c() {
return _i_("4ab:65"), _r_(!!B.atlas);
}
function u(t, e, i) {
_i_("4ab:66");
var n = {
city:[]
};
n.__upa__ = e.filter(p).slice(0, 5).map(function(e, i) {
_i_("4ab:321"), e = e.get("data");
var n = {
upa:!0,
nr_hotels:0,
nr_hotels_25:0,
ss_raw:t.ss,
dest_id:e.id,
place_id:e.id,
dest_type:l[e.types && e.types[0]] || "landmark",
place_type:e.types && e.types[0],
place_types:e.types,
ss:e.description,
label:e.description,
label_blocks:g(e.description, e.matched_substrings),
label_highlighted:m(e.description, e.matched_substrings, {
encode:t.gpf_encode
}),
label_multiline:"<span><b>" + e.description + "</b></span>",
hotels:0,
lc:B.env.b_lang,
position:i,
is_google_result:!0,
_ef:[],
cjk:"zh" === B.env.b_lang || "xt" === B.env.b_lang || "ja" === B.env.b_lang || "ko" === B.env.b_lang
};
return n._ef.push({
name:"ac_position",
value:i
}), _r_(n);
}), n.results = n.__upa__, n._ef = [], n._ef.push({
name:"search_pageview_id",
value:B.env.pageview_id
}), n.is_powered_by_google = n.results.length > 0, n.__js_upa__ = n.is_powered_by_google, i(null, n), _r_();
}
function p(t) {
_i_("4ab:67");
var e = t.get("data");
return _r_(-1 === _.indexOf(e.id));
}
function f(t, e, i) {
_i_("4ab:68"), t = t || {}, t.id = e.id || e.place_id, t.place_id = t.id, t.name = e.name || e.formatted_address, t.latitude = e.geometry.location.lat(), t.longitude = e.geometry.location.lng(), t.place_types = e.types, t.dest_type = l[e.types && e.types[0]] || "landmark", t._ef = t._ef || [], t._ef.push({
name:"ss_short",
value:e.name
}), i(null, t), _r_();
}
function b(t, e) {
if (_i_("4ab:69"), !t.place_id) return e(null, t), _r_();
this.atlas.getGeocodeDetails({
placeId:t.place_id
}, function(i) {
_i_("4ab:173"), f(t, i, e), _r_();
}), _r_();
}
function m(t, e, i) {
_i_("4ab:70");
var n = "";
if (i = i || {}, !e || 0 === e.length) return _r_(t);
for (var s = e.map(function(t) {
return _i_("4ab:322"), _r_(t.offset);
}), a = e.map(function(t) {
return _i_("4ab:323"), _r_(t.offset + t.length - 1);
}), r = 0; r < t.length; r++) -1 != s.indexOf(r) && (n += "<b>"), n += t.charAt(r), -1 != a.indexOf(r) && (n += "</b>");
return i.encode && (n = B.jstmpl.fn.FILTERS.entities(n), n = n.replace(/&lt;b&gt;/g, "<b>"), n = n.replace(/&lt;&#47;b&gt;/g, "</b>")), _r_(n);
}
function g(t, e) {
_i_("4ab:71");
var i = [];
if (!e || 0 === e.length) return _r_([ {
text:t
} ]);
return e[0].offset && i.push({
text:t.substr(0, e[0].offset)
}), e.forEach(function(n, s) {
_i_("4ab:174");
var a = n.offset + n.length, r = (e[s + 1] && e[s + 1].offset || t.length) - a;
i.push({
highlighted:!h,
text:t.substr(n.offset, n.length)
}), r && i.push({
highlighted:h,
text:t.substr(a, r)
}), _r_();
}), "www" !== B.env.b_site_type || d[4] || (d[4] = B.et.customGoal("AdDUOSAcBfSJAFPLcLcJO", 4)), _r_(i);
}
i.exports = n.extend({
init:function(t, e) {
_i_("4ab:324"), t = t || {};
var i = this, n = "booking-places";
if (!c()) return _r_();
if (this.initialized) return e && this.atlas.done(e), _r_();
this.initialized = !0;
var s = function(t) {
_i_("4ab:457");
var s = document.createElement("div");
i.atlas = new t({
provider:"provider-places",
modules:[ "autocomplete", "places" ],
options:{
domNode:s,
channel:n
}
}), e && i.atlas.done(e), _r_();
};
B.atlas.isAtlasAsync ? B.require([ "async-loader" ], function(t) {
_i_("4ab:481"), t.load({
js:"async_atlas_places_js"
}).then(function() {
_i_("4ab:518"), s(B.atlas.require("atlas-places")), _r_();
}), _r_();
}) :s(B.atlas.require("atlas-places")), _r_();
},
search:function(t, e) {
if (_i_("4ab:325"), !t || !t.ss || "function" != typeof e) throw new Error("service-atlas-invalid-arguments");
if (t.ss.length < o) return setTimeout(function() {
_i_("4ab:482"), e(new Error("service-atlas-too-short-search-string"), {}), _r_();
}, 4), _r_({
getDetails:$.noop,
abort:$.noop
});
if (!c()) return setTimeout(function() {
_i_("4ab:483"), e(new Error("service-atlas-no-atlas"), null), _r_();
}, 4), _r_({
getDetails:$.noop,
abort:$.noop
});
var i = !1, n = {
query:t.ss
};
s && a && r && (n.lat = s, n.lon = a, n.radius = r);
var _ = function(n) {
_i_("4ab:458"), i || (n && Array.isArray(n) ? u(t, n, e) :e(new Error("service-atlas-invalid-results"), null)), _r_();
}, l = function(t) {
_i_("4ab:459"), i || e(new Error("service-atlas-error " + t), null), _r_();
};
this.init(t, function() {
_i_("4ab:484"), this.atlas.autocomplete(n, _, l), _r_();
}.bind(this));
var h = function() {
_i_("4ab:460"), i = !0, _r_();
};
return _r_({
getResultDetails:b.bind(this),
abort:h
});
}
}), _r_();
}), B.define("search/destination/service-booking", function(t, e, i) {
"use strict";
_i_("4ab:18");
var n = t("event-emitter"), s = B.env.b_sb_autocomplete_predictions_url, a = "www" === B.env.b_site_type && B.et.track("AdDUOSAcBfSJAFPLcLcJO"), r = {};
function o(t) {
return _i_("4ab:72"), t.term = t.ss, delete t.ss, _r_(t);
}
function _(t, e, i) {
_i_("4ab:73"), t && t.city ? t.__upa__ || 0 !== t.city.length || t.bbtoollocations && 0 !== t.bbtoollocations.length || t.theme && 0 !== t.theme.length || t.searches && 0 !== t.searches.length ? (t.city = t.city.map(function(i, n) {
return _i_("4ab:461"), !i.label && i.labels && (i.label = d(i.labels)), !i.labels || "zh" !== i.lc && "xt" !== i.lc && "ja" !== i.lc && "ko" !== i.lc || (i.label_blocks = c(i.labels)), i.ss = i.label, i.label_highlighted = i.label_highlighted || i.label, B.env.is_user_from_us && i.labels && l(i.labels) && B.et.track("YdVDEZREYDbRfBDDVOGDNMUO") && (i.label_highlighted = h(i.labels, !0), i.label = h(i.labels, !1), i.ss = i.label), a && !i.label_blocks && (i.label_highlighted = u(i.label, e.term, i.labels), i.label_highlighted !== i.label || r[3] || (r[3] = B.et.customGoal("AdDUOSAcBfSJAFPLcLcJO", 3))), i.position = n, i._ef = i._ef || [], i._ef.push({
name:"ac_position",
value:n
}), i._ef.push({
name:"ac_langcode",
value:i.lc
}), t.__did_you_mean__ && (i._ef.push({
name:"suggested_term",
value:t.__did_you_mean__.suggestion
}), i._ef.push({
name:"suggestion_clicked",
value:1
})), _r_(i);
}), t.results = t.city, t.bbtoollocations && (t.results = t.bbtoollocations.map(function(t, e) {
return _i_("4ab:507"), delete t.label_highlighted, t.label_blocks = [ {
highlighted:1,
text:t.name
}, {
text:", "
}, {
text:t.address
} ], t.ss = t.name, t.latitude = t.place_id_lat, t.longitude = t.place_id_lon, t.position = e, t._ef = t._ef || [], t._ef.push({
name:"bbtoollocation",
value:"1"
}), _r_(t);
}).concat(t.results)), t.theme && (t.theme = t.theme.map(function(e, i) {
return _i_("4ab:485"), e.ss = e.label, e._ef = e._ef || [], e._ef.push({
name:"ac_position",
value:i + t.city.length
}), _r_(e);
}), t.theme.length && e.limitOneTheme && (t.theme = [ t.theme[0] ]), t.results = t.results.concat(t.theme)), t.searches && t.searches.length > 0 && (t.results = t.searches.concat(t.results)), t._ef = t._ef || [], t._ef.push({
name:"search_pageview_id",
value:B.env.pageview_id
}), t._ef.push({
name:"ac_suggestion_list_length",
value:t.city.length
}), t._ef.push({
name:"ac_suggestion_theme_list_length",
value:t.theme ? t.theme.length :0
}), t._efd = t._efd || [], i(null, t)) :i(new Error("service-booking-no-results"), t) :i(new Error("service-booking-data-invalid"), null), _r_();
}
function l(t) {
_i_("4ab:74");
var e = !1;
return $.each(t, function(t, i) {
if (_i_("4ab:175"), "country" === i.type && "us" === i.dest_id) return e = !0, _r_(!1);
_r_();
}), _r_(e);
}
function h(t, e) {
return _i_("4ab:75"), _r_(t.filter(function(t) {
return _i_("4ab:443"), _r_(-1 === [ "region", "country", "continent" ].indexOf(t.type));
}).map(function(t) {
return _i_("4ab:424"), _r_(e && t.hl ? "<b class='search_hl_name'>" + t.text + "</b>" :t.text);
}).join(", "));
}
function d(t) {
return _i_("4ab:76"), _r_(t.map(function(t) {
return _i_("4ab:425"), _r_(t.text);
}).join(", "));
}
function c(t) {
_i_("4ab:77");
var e = [];
return t.forEach(function(t, i) {
_i_("4ab:176"), i > 0 && e.push({
text:", "
}), e.push({
highlighted:!!t.hl,
text:t.text
}), _r_();
}), _r_(e);
}
function u(e, i, n) {
_i_("4ab:78");
var s = t("utils/string-diacritics"), a = '<b class="search_hl_name">', o = "</b>", _ = s.removeDiacritics(e).toLowerCase(), l = s.removeDiacritics(i).toLowerCase().trim(), h = _.indexOf(l), d = "";
if (h > -1) return h > 0 && (d = a + e.substring(0, h) + o), d += e.substring(h, h + i.length) + a + e.substring(h + i.length) + o, r[1] || (r[1] = B.et.customGoal("AdDUOSAcBfSJAFPLcLcJO", 1)), _r_(d);
return _r_((n || []).length ? p(n) :e);
}
function p(t) {
_i_("4ab:79");
var e = '<b class="search_hl_name">', i = "</b>";
return r[2] || (r[2] = B.et.customGoal("AdDUOSAcBfSJAFPLcLcJO", 2)), _r_(t.filter(function(t) {
return _i_("4ab:444"), _r_(t.required);
}).map(function(t) {
return _i_("4ab:426"), _r_(t.hl ? t.text :e + t.text + i);
}).join(", "));
}
i.exports = n.extend({
search:function(t, e) {
if (_i_("4ab:326"), !t || !t.ss || "function" != typeof e) throw new Error("Invalid arguments");
var i = o(t);
this.emit("beforeajax", t, i);
var n = $.ajax({
type:"get",
url:s,
data:i,
success:function(i, n, s) {
_i_("4ab:513"), _(i, t, e), _r_();
}.bind(this),
error:function(t, i, n) {
_i_("4ab:514"), "abort" !== i && e(new Error("service-booking-error " + n), null), _r_();
}.bind(this)
}), a = function() {
_i_("4ab:462"), n && n.abort && n.abort(), _r_();
};
return "www" === B.env.b_site_type && B.et.stage("AdDUOSAcBfSJAFPLcLcJO", 1), _r_({
abort:a
});
},
getSuggestions:function(t, e) {
_i_("4ab:327");
var i = B.env.search_autocomplete_params, n = 0, s = "";
if (e && e.anywhere) return t(!1, {
results:[ {
ss:B.jstmpl.translations("wheretogo_fillbox_anywhere"),
dest_id:1,
dest_type:"anywhere",
label:B.jstmpl.translations("wheretogo_fillbox_anywhere_longer"),
_fa:"destinationrecommendations.html"
} ]
}), _r_();
"searchresults" === B.env.b_action && (s = B.search.dates("checkin"), s = "valid" === s.type ? s.toString() :""), i = Object.assign({}, i, {
ttype:n,
checkin:s
});
var a = $.ajax({
type:"get",
url:"/search_history_and_suggestions",
data:i,
success:function(e, i, n) {
_i_("4ab:500"), t(null, e), _r_();
},
error:function(e, i, n) {
if (_i_("4ab:501"), "abort" === i) return _r_();
t(new Error("service-booking-error " + n), null), _r_();
}
}), r = function() {
_i_("4ab:463"), a && a.abort && a.abort(), _r_();
};
return _r_({
abort:r
});
}
}), _r_();
}), B.define("component/search/dates/date-field", function(t, e, i) {
"use strict";
_i_("4ab:19");
var n = t("caret"), s = t("component"), a = t("formatting/date"), r = t("keycodes"), o = t("read-data-options"), _ = t("ga-tracker"), l = t("search/searchbox/model");
i.exports = s.extend({
init:function() {
_i_("4ab:328"), this.options = o(this.el, {
forceInitRender:{
name:"force-init-render",
type:Boolean,
defaultValue:!1
},
modelId:{
name:"sb-id",
type:String,
required:!0
},
modelMode:{
name:"mode",
type:String,
defaultValue:"single"
}
}), this.model = l.getInstance(this.options.modelId), this.model.use("dates"), this.model.on("change", this.modelChange.bind(this)), this.model.dates.configure({
noValidation:!0,
allowMaxLos:!0
}), this.$display = this.$el.find("[data-display]"), this.$inputs = this.$el.find("[data-input]"), this.$inputYear = this.$inputs.filter('[data-input-fragment="year"]'), this.$inputMonth = this.$inputs.filter('[data-input-fragment="month"]'), this.$inputDay = this.$inputs.filter('[data-input-fragment="day"]'), this.$controls = this.$el.find("[data-controls]"), this.$iconDay = this.$el.find("[data-icon-day]"), this.$field = this.$el.find("[data-field]"), this.$controls.on("mousedown", this.controlsMouseDown.bind(this)), this.$inputs.on("focus", this.inputFocus.bind(this)), this.$inputs.one("focus", this.inputFocusTrack.bind(this)), this.$inputs.on("blur", this.inputBlur.bind(this)), this.$inputs.on("keydown", this.inputKeyDown.bind(this)), this.$inputs.on("keyup", this.inputKeyUp.bind(this)), this.$inputs.on("keypress", this.inputKeyPress.bind(this)), B.eventEmitter.on("CALENDAR:shown CALENDAR:closed", this.updateFocusClass.bind(this)), this.previousState = {}, this.state = {
editing:!1,
currentField:null
}, this.checkDateFields(), this.initModel(), _r_();
},
checkDateFields:function() {
_i_("4ab:329");
var t, e;
this.$inputYear.length && this.$inputMonth.length && this.$inputDay.length || (t = this.model.dates.getFallbackDates(this.options.modelMode), 0 === this.$inputYear.length && (e = t.year || "", this.$inputYear = this.createDateInputField(this.options.modelMode + "_year", e).appendTo(this.el), setTimeout(function() {
throw _i_("4ab:508"), Error("Date input field year was not found in " + B.env.b_action + " action");
}, 0)), 0 === this.$inputMonth.length && (e = t.month || "", this.$inputMonth = this.createDateInputField(this.options.modelMode + "_month", e).appendTo(this.el), setTimeout(function() {
throw _i_("4ab:509"), Error("Date input field month was not found in " + B.env.b_action + " action");
}, 0)), 0 === this.$inputDay.length && (e = t.day || "", this.$inputDay = this.createDateInputField(this.options.modelMode + "_monthday", e).appendTo(this.el), setTimeout(function() {
throw _i_("4ab:510"), Error("Date input field day was not found in " + B.env.b_action + " action");
}, 0))), _r_();
},
createDateInputField:function(t, e) {
return _i_("4ab:330"), _r_($("<input>").attr({
type:"hidden",
name:t,
value:e
}).val(e));
},
initModel:function() {
_i_("4ab:331");
var t = !1, e = this.$inputYear.val(), i = this.$inputMonth.val(), n = this.$inputDay.val();
e && i && n ? (t = this.model.dates.initDate(this.options.modelMode, {
year:+e,
month:+i - 1,
day:+n
}), this.$field.hasClass("-empty") && "index" === B.env.b_action && B.et.track("AEJPVZMYCBYfBDWAUC") && this.render()) :t = this.model.dates.initDate(this.options.modelMode, null), (!t || this.options.forceInitRender) && this.render(), _r_();
},
modelChange:function(t) {
if (_i_("4ab:332"), "dates" !== t.group || !t[this.options.modelMode]) return _r_();
B.env.b_is_bbtool_user && B.et.customGoal("VObLMEKKTVeBKeYEGWe", 3), this.render(), _r_();
},
controlsMouseDown:function(t) {
_i_("4ab:333"), this.inputBlurPrevented = !0, setTimeout(function() {
_i_("4ab:486"), this.inputBlurPrevented = !1, _r_();
}.bind(this)), _r_();
},
inputFocus:function(t) {
_i_("4ab:334"), clearTimeout(this.inputBlurTimer), this.state.editing = !0, this.state.currentField = t.target.getAttribute("data-input-fragment"), this.startEditing(), this.updateFocusClass(), _r_();
},
inputFocusTrack:function() {
_i_("4ab:335"), _.trackEvent(_.SearchBoxTracker, "Keyboard Focus", this.options.modelMode + " field"), _r_();
},
inputBlur:function(t) {
_i_("4ab:336");
var e = t.target, i = e.getAttribute("data-input-fragment");
this.inputBlurPrevented || (this.state.editing = !1, this.state.currentField = null), this.setDateFragment(i, e.value), this.inputBlurTimer = setTimeout(function() {
_i_("4ab:502"), this.apply(), this.updateFocusClass(), _r_();
}.bind(this)), _r_();
},
inputKeyDown:function(t) {
_i_("4ab:337");
var e = t.target, i = e.getAttribute("data-input-fragment");
if (r.isModifier(t.which)) return _r_();
r.isUpArrow(t.which) ? (this.adjustDateFragment(i, e.value, 1), t.preventDefault()) :r.isDownArrow(t.which) ? (this.adjustDateFragment(i, e.value, -1), t.preventDefault()) :r.isLeftArrow(t.which) || r.isBackspace(t.which) ? this.inputMoveAdjacent(t, -1, {
backspace:r.isBackspace(t.which)
}) :r.isRightArrow(t.which) && this.inputMoveAdjacent(t, 1), _r_();
},
inputKeyUp:function(t) {
_i_("4ab:338");
var e = t.target;
if (r.isModifier(t.which)) return _r_();
!r.isNavigation(t.which) && !r.isDeletion(t.which) && e.value.length >= Math.floor(e.getAttribute("maxlength")) && this.inputMoveAdjacent(t, 1, {
automatic:!0
}), _r_();
},
inputMoveAdjacent:function(t, e, i) {
_i_("4ab:339");
var s, a, r = t.target, o = this.$inputs.length, _ = n.getPosition(r), l = 0, h = this.$inputs.filter(r).index(), d = o - 1, i = i || {};
if (e > 0 && (l = r.value.length, d = 0), i.automatic && h == o - 1) return _r_();
if (!i.force && n.getSelectionLength(r)) return _r_();
(i.force || _ == l) && (h += e, (0 > h || h > o - 1) && (h = d), s = this.$inputs.get(h), i.automatic && s.value.length ? s.select() :(a = e > 0 ? 0 :s.value.length, n.setPosition(s, a), i.backspace || t.preventDefault())), _r_();
},
inputKeyPress:function(t) {
_i_("4ab:340"), t.keyCode && r.isNavigation(t.keyCode) || !(t.which < 48 || t.which > 57) || (this.inputMoveAdjacent(t, 1, {
automatic:!0,
force:!0
}), t.preventDefault()), _r_();
},
startEditing:function() {
_i_("4ab:341"), setTimeout(function() {
_i_("4ab:487"), this.model.dates.startEditing(), _r_();
}.bind(this)), this.render(), _r_();
},
setDateFragment:function(t, e) {
_i_("4ab:342"), e = "" === e ? null :+e, "month" === t && null !== e && (e -= 1), this.model.dates.setEditingFragment(this.options.modelMode, t, e), _r_();
},
adjustDateFragment:function(t, e, i) {
_i_("4ab:343"), e = "" === e ? 0 :+e, "month" === t && (e -= 1), this.model.dates.adjustEditingFragment(this.options.modelMode, t, e, i), _r_();
},
apply:function() {
_i_("4ab:344"), this.model.dates.applyEditing(this.options.modelMode), _r_();
},
render:function() {
_i_("4ab:345");
var t = this.$field.hasClass("-editing"), e = this.model.dates.get(), i = this.$inputYear.val(), n = this.$inputMonth.val(), s = this.$inputDay.val(), r = e[this.options.modelMode], o = e["editing_" + this.options.modelMode] || {}, _ = o.year, l = o.month, h = o.day, d = "date_with_weekday";
i = "" === i ? null :+i, n = "" === n ? null :+n, s = "" === s ? null :+s, _ = "number" == typeof _ ? _ :null, l = "number" == typeof l ? l + 1 :null, h = "number" == typeof h ? h :null, t != this.state.editing && (t = this.state.editing, this.$field.toggleClass("-editing", t)), i !== _ && (this.$inputYear.val(_), "year" === this.state.currentField && this.$inputYear.select()), n !== l && (this.$inputMonth.val(l), "month" === this.state.currentField && this.$inputMonth.select()), s !== h && (this.$inputDay.val(h), "day" === this.state.currentField && this.$inputDay.select()), t || r || (this.$field.addClass("-empty"), this.$display.html(this.$display.attr("data-placeholder")), this.$iconDay.html(this.$iconDay.attr("data-placeholder"))), !t && r && (this.$field.removeClass("-empty"), d = this.$display.data("date-format") || d, this.$display.html(a.format(r, d)), this.$iconDay.html(a.format(r, "{day_of_month}"))), _r_();
},
updateFocusClass:function() {
_i_("4ab:346"), setTimeout(function() {
_i_("4ab:488");
var t = this.$el.parent(), e = this.state.editing, i = !t.hasClass("c2-wrapper-s-hidden");
e || i ? this.$el.addClass("-focus") :this.$el.removeClass("-focus"), _r_();
}.bind(this), 100), _r_();
}
}), _r_();
}), B.define("search/dates/util", function(t, e, i) {
_i_("4ab:20"), i.exports = {
formatDate:function(t) {
_i_("4ab:177");
var e = new Date(t), i = "" + (e.getMonth() + 1), n = "" + e.getDate(), s = e.getFullYear();
return i.length < 2 && (i = "0" + i), n.length < 2 && (n = "0" + n), _r_([ s, i, n ].join("-"));
},
addDay:function(t) {
_i_("4ab:178");
var e = new Date(t);
return e.setDate(e.getDate() + 1), _r_(e);
},
substractDay:function(t) {
_i_("4ab:179");
var e = new Date(t);
return e.setDate(e.getDate() - 1), _r_(e);
},
daysBetween:function(t, e) {
_i_("4ab:180"), t = new Date(t), e = new Date(e);
var i = 864e5, n = t.getTime(), s = e.getTime(), a = Math.abs(n - s);
return _r_(Math.round(a / i));
}
}, _r_();
}), B.define("search/dates/date-prices-service", function(t, e, i) {
_i_("4ab:21");
var n = t("promise"), s = t("fragment"), a = t("search/dates/util"), r = {
getGroupInformation:function() {
_i_("4ab:181");
var t = 2, e = 0, i = !1, n = B.env.b_group_rooms_wanted || 1;
return B.env.b_group && B.env.b_group[0] && B.env.b_group[0].guests && (t = B.env.b_group[0].guests, e = B.env.b_group[0].children || 0, B.env.b_group[0].children_ages && (i = B.env.b_group[0].children_ages)), _r_({
adults:t,
children:e,
ages:i,
rooms:n
});
},
getPrices:function(t) {
_i_("4ab:182");
var e, i = this.getGroupInformation();
if (t.dates) {
if ("string" == typeof t.model && "av_calendar" === t.model) {
var n = {
hotel_id:t.destinationId,
checkin:t.dates.startFromDay,
n_days:t.days,
result_format:"price_histogram",
no_rooms:i.rooms,
group_adults:i.adults,
group_children:i.children
};
i.ages && (n.age = i.ages), e = s.call("hotel.availability_calendar", n);
} else {
var n = {
dest_type:t.destinationType,
dest_id:t.destinationId,
checkin:t.dates.startFromDay,
n_days:t.days,
adults:i.adults
};
"dots" === t.style && (n.price_indicator = 1), t.months && t.months.length && (n.legend_months = t.months), e = s.call("lp.get_av_calendar_prices", n);
}
return _r_(e.then(function(e) {
if (_i_("4ab:472"), !e || !e.dates && !e.days) return _r_({
data:t.datesData,
legends:t.legends
});
var i = e.dates || e.days, n = {
data:t.datesData.concat(i)
};
return t.months && t.months.length && e.legends ? (n.legends = e.legends, t.cacheObject.monthLenged[t.months.join("-")] = e.legends) :n.legends = t.legends, _r_(n);
}));
}
return _r_({
data:t.datesData,
legends:t.legends
});
},
getPricesFromCache:function(t, e) {
_i_("4ab:183");
var i = e, s = e.monthLenged = e.monthLenged || {};
return t.cacheObject = e, _r_(new n(function(e, n) {
_i_("4ab:473");
var r, o, _ = new Date(t.dates.startFromDay), l = new Date(t.dates.endUntilDay), h = t.datesData;
if (t.months && t.months.length) {
var d = t.months.join("-");
s[d] && (t.legends = s[d]);
} else t.legends = {};
for (;l >= _ && (r = i[a.formatDate(_)]); ) h.push(r), _ = a.addDay(_);
if (_ >= l) return t.dates = !1, _r_(e($.extend(t, {
dates:t.dates,
datesData:h
})));
for (t.dates.startFromDay = a.formatDate(a.substractDay(_)), o = new Date(t.dates.startFromDay), _ = new Date(t.dates.endUntilDay); _ >= o && (r = i[a.formatDate(_)]); ) h.push(r), _ = a.substractDay(_);
return o >= _ ? t.dates = !1 :(t.dates.endUntilDay = a.formatDate(a.addDay(_)), t.days = a.daysBetween(t.dates.startFromDay, t.dates.endUntilDay)), _r_(e($.extend(t, {
dates:t.dates,
datesData:h
})));
}.bind(this)));
},
getDatesToQuery:function(t, e) {
_i_("4ab:184");
var i = new Date(t), n = new Date(t), s = i.getMonth() + 1, r = s + 1 === 13 ? 1 :s + 1;
return n.setDate(n.getDay() + e.daysToDisplay), _r_({
startFromDay:a.formatDate(i),
endUntilDay:a.formatDate(n),
months:[ s, r ]
});
}
};
i.exports = r, _r_();
}), B.define("search/dates/date-prices", function(t, e, i) {
_i_("4ab:22");
var n = t("component"), s = t("search/dates/date-prices-service"), a = B.utils.accounting.formatMoney, r = t("search/dates/util"), o = "UBKeJbLYQCLBMJFUWOEQeRe", _ = t("et"), l = {
daysToDisplay:62,
style:"numbers"
}, h = {}, d = {}, c = {}, u = /^(city|country|district|region|hotel)$/;
booking.jstmpl("search_calendar_date_prices", function() {
_i_("4ab:119");
var t = [ "\n		", '<span class="sb-date-prices-footer">\n	', "\n		<span>\n			", "/private/sxp_sbox_calendar_lowest_prices_only/name", "\n		</span>\n		", '\n			<span class="sb-date-prices-footer-legend">\n				<i class="c2-price-dot __green"></i> ', "-", "\n			</span>\n		", '\n			<span class="sb-date-prices-footer-legend">\n				<i class="c2-price-dot __yellow"></i> ', '\n			<span class="sb-date-prices-footer-legend">\n				<i class="c2-price-dot __red"></i> ', "+\n			</span>\n		", "\n	", "\n</span>\n" ], e = [ "legends" ];
return _r_(function(i) {
_i_("4ab:427");
var n = "", s = this.fn;
function a(i) {
return _i_("4ab:445"), i += t[1], s.MD(e[0]) && (i += [ t[2], s.ME(t[3], s.MB, s.MN, null), t[4] ].join(""), s.MJ(s.MG((s.MC(e[0]) || {}).low)) && (i += [ t[5], ((s.MC(e[0]) || {}).low || [])[0], t[6], ((s.MC(e[0]) || {}).low || [])[1], t[7] ].join("")), i += t[0], s.MJ(s.MG((s.MC(e[0]) || {}).medium)) && (i += [ t[8], ((s.MC(e[0]) || {}).medium || [])[0], t[6], ((s.MC(e[0]) || {}).medium || [])[1], t[7] ].join("")), i += t[0], s.MJ(s.MG((s.MC(e[0]) || {}).high)) && (i += [ t[9], ((s.MC(e[0]) || {}).high || [])[0], t[10] ].join("")), i += t[11]), i += t[12], _r_(i);
}
return n += t[0], n = a(n), n += t[11], _r_(n);
});
}());
var p = n.extend({
init:function(t) {
_i_("4ab:347"), this.options = Object.assign({}, l, t), this.model || (this.model = t.model, this.hash = t.trackHash || o, this.model.use && (this.model.use("destination"), u = /^(city|country|district|region)$/), t.variant ? (this.initParameters(), this.bindEvents()) :(this.initParameters(), this.initTrackingOnly())), _r_();
},
initParameters:function() {
_i_("4ab:348"), ("index" !== B.env.b_action || B.env.b_cal_dest_id || B.env.b_cal_dest_type) && parseInt(B.env.b_cal_dest_id, 10) && B.env.b_cal_dest_type && B.env.b_cal_dest_type.match(u) ? (this.destinationId = parseInt(B.env.b_cal_dest_id, 10), this.destinationType = B.env.b_cal_dest_type, $(".c2-wrapper").removeClass("calendar-no-prices")) :this.resetParameters(), _r_();
},
resetParameters:function() {
_i_("4ab:349"), this.destinationId = !1, this.destinationType = !1, $(".c2-wrapper").addClass("calendar-no-prices"), _r_();
},
bindEvents:function() {
_i_("4ab:350"), B.eventEmitter.on("CALENDAR:shown CALENDAR:previousclick CALENDAR:nextclick", this.onCalendarShown.bind(this)), this.model.on && this.model.on("change", this.modelChange.bind(this)), _r_();
},
modelChange:function(t) {
_i_("4ab:351"), t && t.group && "destination" == t.group && (this.cleanPrices(), t = this.model.destination.get(), parseInt(t.dest_id, 10) && t.dest_type && t.dest_type.match(u) ? (this.destinationId = parseInt(t.dest_id), this.destinationType = t.dest_type, $(".c2-wrapper").removeClass("calendar-no-prices")) :this.resetParameters()), _r_();
},
initTrackingOnly:function() {
_i_("4ab:352"), B.eventEmitter.on("CALENDAR:shown CALENDAR:previousclick CALENDAR:nextclick", this.trackStage.bind(this)), this.model.on && this.model.on("change", this.modelChange.bind(this)), _r_();
},
trackStage:function(t, e) {
if (_i_("4ab:353"), !e || !e.instance || !e.instance.options) return _r_();
if (!this.destinationId || !this.destinationType) return _r_();
if ("string" == typeof this.model && this.model !== e.instance.options.category) return _r_();
switch (_.stage(this.hash, 1), B.env.b_action) {
case "index":
_.stage(this.hash, 2), B.env.b_is_domestic && _.stage(this.hash, 3);
break;

case "searchresults":
_.stage(this.hash, 4), B.env.b_is_domestic && _.stage(this.hash, 3);
break;

case "hotel":
B.env.b_has_valid_dates_not_in_past && B.env.b_availability_checked && _.stage(this.hash, 2), B.env.b_has_valid_dates_not_in_past && !B.env.b_availability_checked && _.stage(this.hash, 3), B.env.b_has_valid_dates_not_in_past || _.stage(this.hash, 4), B.env.b_has_valid_dates_not_in_past && B.env.b_checkin_date && (r.daysBetween(new Date(), B.env.b_checkin_date) >= 7 ? _.stage(this.hash, 5) :_.stage(this.hash, 6));
}
_r_();
},
onCalendarShown:function(t, e) {
if (_i_("4ab:354"), !e || !e.instance || !e.instance.options) return _r_();
if (!this.destinationId || !this.destinationType) return _r_();
if ("string" == typeof this.model && this.model !== e.instance.options.category) return _r_();
this.trackStage(t, e);
var i = e.instance, n = s.getDatesToQuery(i.getCurrentMonthUtc(), this.options);
this.showLoading(i), s.getPricesFromCache({
dates:n,
datesData:[],
months:n.months,
days:this.options.daysToDisplay,
destinationId:this.destinationId,
destinationType:this.destinationType,
model:this.model,
style:this.options.style
}, d).then(s.getPrices.bind(s)).then(this.displayPrices.bind(this, i, n)).then(this.hideLoading.bind(this, i))["catch"](this.hideLoading.bind(this, i)), _r_();
},
updateCalendarFooter:function(t, e) {
_i_("4ab:355");
var i = B.jstmpl("search_calendar_date_prices").render({
legends:e
});
t.$element.find(".sb-date-prices-footer").remove(), t.$element.find(".c2-calendar-footer").append(i), _r_();
},
cleanPrices:function() {
_i_("4ab:356"), d = {}, c = {}, $(".c2-day-price-ready").each(function() {
_i_("4ab:464"), $(this).removeClass("c2-day-price-ready").data("day-price", "").html('<i class="bicon bicon-search"></i>'), _r_();
}), $(".sb-date-prices-footer").html(""), _r_();
},
displayPrices:function(t, e, i) {
_i_("4ab:357");
var n, s, o, _ = 0, l = 0, h = t.$screen, u = t.id();
i && i.data || this.hideLoading(t);
var p = i.data;
i.legends && this.updateCalendarFooter(t, i.legends), c[u] = c[u] || {};
for (var f = 0; f < p.length; f++) {
if (p[f].error || !p[f].avg_price_raw) continue;
if (n = new Date(p[f].checkin), o = r.formatDate(n), c[u][o]) continue;
if (d[o] = p[f], c[u][o] = !0, l = Math.floor(parseInt(p[f].avg_price_raw, 10)), "dots" === this.options.style) {
if (_ = "", !p[f].price_indicator) continue;
var b = "";
switch (p[f].price_indicator) {
case 1:
b = "__green";
break;

case 2:
b = "__yellow";
break;

case 3:
b = "__red";
}
_ = '<div class="c2-price-dot ' + b + '"></div>';
} else _ = p[f].avg_price_pretty, _ = a(l, B.env.b_selected_currency);
if (!_) break;
s = h.find("[data-id=" + n.getTime() + "]").find(".c2-day-price"), s.length && s.hasClass("c2-day-price-ready") || (s.addClass("c2-day-price-ready"), s.data("day-price", l), s.html(_));
}
_r_();
},
hideLoading:function(t) {
_i_("4ab:358"), t.$header.find(".c2-progress-bar-inner").removeClass("c2-progress-bar-animation"), _r_();
},
showLoading:function(t) {
_i_("4ab:359"), t.$header.find(".c2-progress-bar-inner").addClass("c2-progress-bar-animation"), _r_();
},
isAvCalendar:function(t) {
return _i_("4ab:360"), _r_("hotel" === B.env.b_action && t && t.instance && t.instance.options && "av_calendar" === t.instance.options.category);
}
});
i.exports = {
getInstance:function(t) {
return _i_("4ab:185"), t = t || "searchbox", h[t] || (h[t] = new p()), _r_(h[t]);
}
}, _r_();
}), B.define("component/search/dates/dates-errors", function(t, e, i) {
"use strict";
_i_("4ab:23");
var n = t("component"), s = t("jstmpl"), a = t("read-data-options"), r = t("search/searchbox/model");
i.exports = n.extend({
init:function() {
_i_("4ab:361"), this.options = a(this.el, {
modelId:{
name:"sb-id",
type:String,
required:!0
}
}), this.model = r.getInstance(this.options.modelId), this.model.use("dates"), this.model.on("validation", this.modelValidation.bind(this)), this.template = s("fe_search_dates_errors"), _r_();
},
modelValidation:function(t) {
if (_i_("4ab:362"), "dates" !== t.group) return _r_();
t.valid ? this.$el.html("") :this.$el.html(this.template.render({
fe_error:t.validationError,
fe_new:!0
})), _r_();
}
}), _r_();
}), booking.jstmpl("search_dates_length_of_stay", function() {
_i_("4ab:39");
var t, e = [ "\n    	", "\n", "\n\n  \n    ", '\n      <div data-et-view=" ', ':1"></div>\n    ', '\n       <div data-et-view=" ', ':2"></div>\n    ', "\n\n    ", "\n        ", "\n    ", '\n\n    <div\n      class="sb-dates__los\n      ', " sb-dates__los--bold\n      ", '\n      ">\n\n      \n      ', '\n          <i class="bicon bicon-halfmoon sb_dates__los__icon"></i>\n          <span class="sb-dates__los__text">\n      ', "\n\n      ", "/private/loc_sbox_general_dates_num_nights_v2/name", "\n      ", "\n          ", "/private/bh_gf_sbox_general_dates_num_nights_1/name", "/private/sbox_general_dates_num_nights_1/name", "\n         </span>\n      ", "\n    </div>\n" ], i = [ "b_action", "b_lang_is_ja", "fe_sb_los_bold", "fe_sb_state_length_of_stay", "fe_is_family", "b_search_config" ];
return _r_(function(n) {
_i_("4ab:109");
var s = "", a = this.fn;
function r(s) {
return _i_("4ab:186"), s += e[1], a.MJ(a.MB(i[3])) && (s += e[2], a.MJ(a.MC(i[0]) + "" == "index") ? s += [ e[3], "YdANHBeOXbbFSIJBKJKCcfFdHMOLNHe", e[4] ].join("") :a.MJ(a.MC(i[0]) + "" == "searchresults") && (s += [ e[5], "YdANHBeOXbbFSIJBKJKCcfFdHMOLNHe", e[6] ].join("")), s += e[7], a.MJ(a.MB(i[2]) + "" == "") && (s += e[8], a.MN("fe_sb_los_bold", a.MJ(a.MC(i[0]) + "" == "index") && a.track_experiment("AEJPVZMYCIKSBOEQC") || a.MC(i[1]) && a.MJ(a.MC(i[0]) + "" == "searchresults") && a.track_experiment("YdVTaRdZWZAdHZKe") || a.MJ(a.MC(i[0]) + "" == "hotel") && a.track_experiment("AEJPOTIKSBOEQC") || a.MJ(a.MC(i[0]) + "" == "city") && a.track_experiment("AEJPCCIKSBOEQC")), s += e[9]), s += e[10], a.MD(i[2]) && (s += e[11]), s += e[12], a.MD(i[2]) && (s += e[13]), s += e[14], a.MJ(a.MC(i[0]) + "" != "hotel") && a.MJ(a.track_experiment("YdANHBeOXbbFSIJBKJKCcfFdHMOLNHe")) ? s += [ e[8], (n.unshift({
num_nights:a.MB(i[3])
}), t = a.ME(e[15], a.MB, a.MN, a.MO(a.MC(i[3]), null, e[15])), n.shift(), t), e[16] ].join("") :(s += e[8], s += a.MJ(a.MB(i[4])) || a.MJ(a.MC(i[5])) && a.MJ(a.MC(i[5]).b_children_total) ? [ e[17], (n.unshift({
num_nights:a.MB(i[3])
}), t = a.ME(e[18], a.MB, a.MN, a.MO(a.MC(i[3]), null, e[18])), n.shift(), t), e[8] ].join("") :[ e[17], (n.unshift({
num_nights:a.MB(i[3])
}), t = a.ME(e[19], a.MB, a.MN, a.MO(a.MC(i[3]), null, e[19])), n.shift(), t), e[8] ].join(""), s += e[16]), s += e[16], a.MD(i[2]) && (s += e[20]), s += e[21]), s += e[1], _r_(s);
}
return s += e[0], s = r(s), s += e[9], _r_(s);
});
}()), B.define("component/search/dates/length-of-stay", function(t, e, i) {
_i_("4ab:24");
var n = t("calendar-base").Calendar, s = t("component"), a = t("read-data-options"), r = t("search/searchbox/model");
i.exports = s.extend({
init:function() {
_i_("4ab:363"), this.options = a(this.$el, {
modelId:{
name:"sb-id",
type:String,
required:!0
},
isAvailability:{
name:"is-availability",
type:Boolean
}
}), this.model = r.getInstance(this.options.modelId), this.model.use("dates"), this.model.use("group"), this.model.on("change", this.modelChange.bind(this)), this.state = {};
var t = "index" === B.env.b_action && B.et.track("AEJPVZMYCIKSBOEQC") || "ja" === B.env.b_lang && "searchresults" === B.env.b_action && B.et.track("YdVTaRdZWZAdHZKe") || "hotel" === B.env.b_action && B.et.track("AEJPOTIKSBOEQC") || "city" === B.env.b_action && B.et.track("AEJPCCIKSBOEQC");
t && (this.state.fe_sb_los_bold = 1);
var e = "search_dates_length_of_stay";
this.template = B.jstmpl(e), _r_();
},
modelChange:function(t) {
if (_i_("4ab:364"), !t || "dates" != t.group && "group" != t.group) return _r_();
this.render(), _r_();
},
render:function() {
_i_("4ab:365");
var t = this.model.dates.get(), e = this.model.group.get();
this.state.fe_is_family = e.children_ages && e.children_ages.length > 0 ? 1 :0, this.state.fe_is_availability = this.options.isAvailability, this.state.fe_sb_state_length_of_stay = !t.editing && t.checkin && t.checkout && n.diff(t.checkout, t.checkin) > 0 ? n.interval(t.checkin, t.checkout) - 1 :"", this.$el.html(this.template.render(this.state)), _r_();
}
}), _r_();
}), B.define("search/dates/model", function(t, e, i) {
"use strict";
_i_("4ab:25");
var n = t("calendar-base").Calendar, s = t("search/modules/search-date").SearchDate, a = B.env.b_timestamp, r = B.env.sunday_first, o = B.env.b_search_max_months || 13;
function _(t) {
_i_("4ab:80"), this._model = t, this._data = {
initialized:!1,
checkin:null,
checkout:null,
firstValidDay:null,
lastValidDay:null,
editing:!1,
editing_checkin:null,
editing_checkout:null,
length_of_stay:null,
week_start:r ? 0 :1
}, this._valid = !0, this._validationError = "", this._options = {
maxLos:30,
maxMonths:o,
syncLegacy:!0
};
var e = new Date(1e3 * (a - 39600));
this._data.firstValidDay = s.create({
year:e.getUTCFullYear(),
month:e.getUTCMonth(),
day:e.getUTCDate()
}), this._data.lastValidDay = s.createFlexible({
year:e.getUTCFullYear(),
month:e.getUTCMonth() + this._options.maxMonths,
day:0
}), this._data.firstValidCheckoutDay = s.create({
year:e.getUTCFullYear(),
month:e.getUTCMonth(),
day:e.getUTCDate() + 1
}), this._options.syncLegacy && (this.boundLegacyDateChange = this.legacyDateChange.bind(this), B.eventEmitter.on(B.Search.Events.DATE_CHANGED, this.boundLegacyDateChange)), _r_();
}
$.extend(_.prototype, {
init:function(t) {
_i_("4ab:187");
var e = s.create(t.checkin), i = s.create(t.checkout);
this.validateDate("checkin", e).valid && this.validateDate("checkout", i, {
checkin:e
}).valid && (this.setDate("checkin", e, {
init:!0
}), this.setDate("checkout", i, {
init:!0
}), this.emit("init")), _r_();
},
configure:function(t, e) {
_i_("4ab:188");
var i = this._options.maxMonths, n = this._options.syncLegacy;
void 0 !== e ? this._options[t] = e :"object" == typeof t && $.extend(this._options, t), i != this._options.maxMonths && (this._data.lastValidDay = s.createFlexible({
year:this._data.firstValidDay.year,
month:this._data.firstValidDay.month + this._options.maxMonths,
day:0
})), n !== this._options.syncLegacy && B.eventEmitter[this._options.syncLegacy ? "on" :"off"](B.Search.Events.DATE_CHANGED, this.boundLegacyDateChange), _r_();
},
getOption:function(t) {
return _i_("4ab:189"), _r_(this._options[t]);
},
get:function() {
return _i_("4ab:190"), _r_(this._data);
},
initDate:function(t, e, i) {
_i_("4ab:191"), i = i || {}, i.init = !0;
var n = !1;
if (this._data.initialized) return _r_(!1);
return e && (n = this.setDate(t, e, i)), this["initialized" + t] = !0, this.initializedcheckin && this.initializedcheckout && (this.emit("init"), this._data.initialized = !0), _r_(n);
},
setDate:function(t, e, i) {
_i_("4ab:192"), i = i || {};
var a, r, o, _ = {};
if (e = s.create(e), !this._options.noValidation && !this.validateDate(t, e, {
loose:!0
}).valid) return _r_(!1);
if ("checkin" == t) this._data.checkin = e, r = !0, s.compare(this._data.checkin, this._data.firstValidDay) < 0 && (this._data.checkin = s.create(this._data.firstValidDay)), s.compare(this._data.checkin, this._data.lastValidDay) > 0 && (this._data.checkin = s.createFlexible({
year:this._data.lastValidDay.year,
month:this._data.lastValidDay.month,
day:this._data.lastValidDay.day - 1
})), this._data.checkout ? (a = n.diff(this._data.checkout, e), 0 >= a ? (this._data.checkout = s.createFlexible({
year:e.year,
month:e.month,
day:e.day + 1
}), o = !0) :!this._options.allowMaxLos && a > this._options.maxLos && (this._data.checkout = s.createFlexible({
year:e.year,
month:e.month,
day:e.day + this._options.maxLos
}), o = !0)) :(this._data.checkout = s.createFlexible({
year:e.year,
month:e.month,
day:e.day + 1
}), o = !0); else {
if ("checkout" != t) return _r_(!1);
this._data.checkout = e, o = !0, s.compare(this._data.checkout, this._data.lastValidDay) > 0 && (this._data.checkout = s.create(this._data.lastValidDay)), 0 == s.compare(this._data.checkout, this._data.firstValidDay) && (this._data.checkin = s.create(this._data.firstValidDay), this._data.checkout = s.createFlexible({
year:this._data.firstValidDay.year,
month:this._data.firstValidDay.month,
day:this._data.firstValidDay.day + 1
}), o = !0), this._data.checkin && (a = n.diff(e, this._data.checkin), 0 >= a && (this._data.checkin = null)), this._data.checkin || (this._data.checkin = s.createFlexible({
year:e.year,
month:e.month,
day:e.day - 1
}), r = !0);
}
return r && (this._options.syncLegacy && B.search.setDate_("checkin", this._data.checkin.toString(), {
referrer:"search/dates/model"
}), this._data.editing_checkin = this._data.checkin, _.checkin = !0), o && (this._options.syncLegacy && B.search.setDate_("checkout", this._data.checkout.toString(), {
referrer:"search/dates/model"
}), this._data.editing_checkout = this._data.checkout, _.checkout = !0), (r || o) && (this._data.length_of_stay = this._data.checkin && this._data.checkout && n.interval(this._data.checkin, this._data.checkout) - 1), this._data.editing = !1, i.init || this.emit("change", _), _r_(!0);
},
startEditing:function() {
if (_i_("4ab:193"), this._data.editing) return _r_();
this._data.editing = !0, this.emit("change", {
editing:!0
}), _r_();
},
setEditingFragment:function(t, e, i) {
if (_i_("4ab:194"), "checkin" !== t && "checkout" !== t) throw new TypeError("invalid type");
if ("day" !== e && "month" !== e && "year" !== e) throw new TypeError("invalid fragment");
if ("number" != typeof i && null !== i) throw new TypeError("invalid value");
var n = this._data["editing_" + t] || {}, a = {
year:n.year,
month:n.month,
day:n.day
}, r = {
editing:!0
};
return a[e] = i, this._data.editing = !0, this._data["editing_" + t] = s.create(a), r[t] = !0, this.emit("change", r), _r_(!0);
},
adjustEditingFragment:function(t, e, i, n) {
if (_i_("4ab:195"), "checkin" !== t && "checkout" !== t) throw new TypeError("invalid type");
if ("day" !== e && "month" !== e && "year" !== e) throw new TypeError("invalid fragment");
var s = 1, a = i + n;
return "month" == e ? s = 0 :"year" == e && (s = this._data.firstValidDay.year), s > a && (a = s), _r_(this.setEditingFragment(t, e, a));
},
applyEditing:function(t) {
if (_i_("4ab:196"), "checkin" !== t && "checkout" !== t) throw new TypeError("invalid type");
return this._data["editing_" + t].complete ? _r_(this.setDate(t, this._data["editing_" + t])) :(this.clearDates(), _r_(!0));
},
clearDates:function() {
_i_("4ab:197"), this._data.checkin = null, this._data.checkout = null, this._data.editing = !1, this._data.editing_checkin = null, this._data.editing_checkout = null, this._data.length_of_stay = null, this._options.syncLegacy && (B.search.setDate_("checkin", "", {
referrer:"search/dates/model"
}), B.search.setDate_("checkout", "", {
referrer:"search/dates/model"
})), this.emit("change", {
checkin:!0,
checkout:!0
}), _r_();
},
validate:function(t) {
_i_("4ab:198"), t = t || {};
var e = !0, i = "";
if (!e || !t.notEmpty || this._data.checkin && this._data.checkout || (e = !1, i = "missing-dates"), e && !this._data.checkin && this._data.checkout && (e = !1, i = "missing-checkin"), e && this._data.checkin && !this._data.checkout && (e = !1, i = "missing-checkout"), e && this._data.checkin) {
var n = this.validateDate("checkin", this._data.checkin);
n.valid || (e = n.valid, i = n.validationError);
}
if (e && this._data.checkout) {
var n = this.validateDate("checkout", this._data.checkout);
n.valid || (e = n.valid, i = n.validationError);
}
return t.checkOnly || this._valid == e || (this._valid = e, this._validationError = i, this.emit("validation", {
valid:e,
validationError:i
})), _r_(e);
},
validateDate:function(t, e, i) {
_i_("4ab:199"), i = i || {}, i.checkin = i.checkin || this._data.checkin;
var a = null;
if (!t || "checkin" != t && "checkout" != t) return _r_({
valid:!1,
validationError:"invalid-data"
});
if (!e || void 0 === e.year || void 0 === e.month || void 0 === e.day || isNaN(e.year) || isNaN(e.month) || isNaN(e.day)) return _r_({
valid:!1,
validationError:"invalid-data"
});
if ("checkin" == t && s.compare(e, this._data.firstValidDay) < 0 || "checkout" == t && 0 == s.compare(e, this._data.firstValidDay)) return _r_({
valid:!1,
validationError:"past"
});
if ("checkout" == t && i.checkin && (a = n.diff(e, i.checkin)), null !== a) {
if (0 == a) return _r_({
valid:!1,
validationError:"more-than-one-day"
});
if (0 > a) return _r_({
valid:!1,
validationError:"negative-period"
});
if (a > this._options.maxLos) return _r_({
valid:!1,
validationError:"exceeds-max-los"
});
}
return _r_({
valid:!0,
validationError:""
});
},
legacyDateChange:function(t, e) {
_i_("4ab:200");
var i, n;
if ("search/dates/model" == e.referrer) return _r_();
i = "checkin" == e.type ? "checkin" :"checkout", n = s.createFromString(e.value.toString()), this.setDate(i, n), _r_();
},
emit:function(t, e) {
_i_("4ab:201"), e = e || {}, this._model.emit(t, $.extend(e, {
group:"dates"
})), _r_();
},
getFallbackDates:function(t) {
_i_("4ab:202");
var e, i;
return i = "checkin" === t ? B.env.b_checkin_date :B.env.b_checkout_date, i && (i = i.split("-"), e = {
year:parseInt(i[2], 10),
month:parseInt(i[1], 10),
day:parseInt(i[0], 10)
}), _r_(e || {});
}
}), i.exports = _, _r_();
}), booking.jstmpl("fe_search_dates_errors", function() {
_i_("4ab:40");
var t = [ "\n	", "\n\n\n		", "\n			", "\n				", "/error/checkout_date_invalid/name", "/error/checkin_date_invalid/name", "/private/sbox_error_checkin_future/name", "/error/checkin_date_to_far_in_the_future/name", "/private/sbox_error_checkout_after/name", "/private/sbox_error_30_night_res/name", "\n		", "\n	\n		", "\n\n\n\n\n\n\n\n\n\n", "\n    ", "\n", "\n\n\n\n\n\n", "\n\n    ", "\n        ", "data-", '="', '"', " data-", '<div data-component="onview-animate" data-anim-type="fadeInBottom"> ', '<div class="fe_banner ', "fe_banner__scale_small ", "fe_banner__w-icon ", "fe_banner__w-dismiss ", "fe_banner__", " ", "fe_banner__w-icon-", "fe_banner__scale_small fe_banner__inherit_font_size ", "fe_banner__unify ", "fe_banner__bp fe_banner__inherit_font_size ", ' " ', 'id="', '" ', 'role="alert"', "> ", '<i class="fe_banner__icon ', 'aria-hidden="true"', "></i> ", '<img class="fe_banner__icon" src="', '"> ', '<span class="fe_banner__icon"> ', " </span> ", '<div class="fe_banner__btn_container"> <div class="fe_banner__btn_container_content"> ', '<h3 class="fe_banner__title"> ', " </h3> ", '<div class="fe_banner__message ', "fe_banner__genius-trial", " </div> ", '</div> <div class="fe_banner__button"> ', "</div> ", '<span class="fe_banner__dismiss js-close"><i class="bicon-btnclose" ', 'aria-label="close"', "></i></span><!-- a11y_hp_icon_readout --> ", '<form action="', "/genius_activate_trial", '" class="fe_banner__genius-banner-form" method="post"> <input type="hidden" name="return_url" value="', '"> <input type="hidden" name="src" value="hp_banner"> <input type="hidden" name="campaign_id" value="', '"> <input type="submit" class="button fe_banner__genius-banner-button" value="', '"> </form> ', "\n\n\n\n", "\n\n", "0", "red" ], e = [ "fe_error_message", "fe_error", "s_raw_param_errorc_checkout_date_invalid", "s_raw_param_errorc_checkin_date_invalid", "s_raw_param_errorc_checkin_date_in_the_past", "s_raw_param_errorc_checkin_date_to_far_in_the_future", "s_raw_param_errorc_checkout_date_not_after_checkin_date", "s_raw_param_errorc_checkout_date_more_than_30_days_after_checkin", "fe_banner__color_scheme", "b_site_type", "fe_banner__data", "fe_banner__data_id", "fe_banner__data_value", "fe_banner__data_id_2", "fe_banner__data_value_2", "fe_banner__data_id_3", "fe_banner__data_value_3", "fe_banner__data_id_4", "fe_banner__data_value_4", "fe_banner__data_id_5", "fe_banner__data_value_5", "fe_banner__animate", "fe_banner__scale", "fe_banner__icon_class", "fe_banner__icon_img_url", "fe_banner__icon_svg", "fe_banner__close_button", "fe_banner__color_scheme_classes", "fe_banner__icon_size", "b_action", "fe_banner__exp_ot_d_sr_reduce_soldout_ws_class", "fe_banner__extra_classes", "fe_banner__id", "fe_banner__aria_alert", "fe_banner__btn_include", "fe_banner__title_text", "fe_banner__start_genius_trial", "fe_banner__message_text", "b_secure_hostname", "b_query_params_with_lang", "b_original_url", "fe_ge_trial_desktop_campaign_id", "ge_expand_hp_trial_sidebar_cta", "fe_banner__banners_count" ];
return _r_(function(i) {
_i_("4ab:110");
var n = "", s = this.fn;
function a(n) {
if (_i_("4ab:203"), s.MJ(s.MB(e[1])) || s.MJ(s.MC(e[2])) || s.MJ(s.MC(e[3])) || s.MJ(s.MC(e[4])) || s.MJ(s.MC(e[5])) || s.MJ(s.MC(e[6])) || s.MJ(s.MC(e[7]))) {
n += t[1];
var a = "";
a += t[2], s.MJ(s.MB(e[1]) + "" == "missing-checkout") || s.MJ(s.MC(e[2])) ? a += [ t[3], s.ME(t[4], s.MB, s.MN, null), t[2] ].join("") :s.MJ(s.MB(e[1]) + "" == "missing-checkin") || s.MJ(s.MC(e[3])) ? a += [ t[3], s.ME(t[5], s.MB, s.MN, null), t[2] ].join("") :s.MJ(s.MB(e[1]) + "" == "past") || s.MJ(s.MC(e[4])) ? a += [ t[3], s.ME(t[6], s.MB, s.MN, null), t[2] ].join("") :s.MJ(s.MB(e[1]) + "" == "checkin_date_to_far_in_the_future") || s.MJ(s.MC(e[5])) ? a += [ t[3], s.ME(t[7], s.MB, s.MN, null), t[2] ].join("") :s.MJ(s.MB(e[1]) + "" == "negative-period") || s.MJ(s.MC(e[6])) ? a += [ t[3], s.ME(t[8], s.MB, s.MN, null), t[2] ].join("") :s.MJ(s.MB(e[1]) + "" == "exceeds-max-los") || s.MJ(s.MC(e[7])) ? a += [ t[3], s.ME(t[9], s.MB, s.MN, null), t[2] ].join("") :s.MJ(s.MB(e[1])) && (a += [ t[3], s.ME(t[5], s.MB, s.MN, null), t[2] ].join("")), a += t[10], s.MN(e[0], a), n += t[11], i.unshift({
fe_banner__close_button:t[64],
fe_banner__color_scheme:t[65],
fe_banner__message_text:s.MB(e[0])
}), n = r(n), i.shift(), n += t[63];
}
return n += t[14], _r_(n);
}
function r(i) {
if (_i_("4ab:204"), i += t[12], s.MJ(s.MB(e[8]) + "" == "red") && s.MJ(s.MC(e[9]) + "" == "www") && s.MJ(s.track_experiment("YQecaQJKDKGHVPSDDaXGHNNALFUWe")) && (i += t[13], s.MN("fe_banner__color_scheme_classes", "_a11y"), i += t[14]), i += t[15], s.MD(e[37])) {
i += t[16], s.MD(e[11]) && (i += t[17], s.MN(e[10], [ t[18], s.MB(e[11]), t[19], s.MB(e[12]), t[20] ].join("")), i += t[13]), i += t[16], s.MD(e[13]) && (i += t[17], s.MN(e[10], [ s.MB(e[10]), t[21], s.MB(e[13]), t[19], s.MB(e[14]), t[20] ].join("")), i += t[13]), i += t[16], s.MD(e[15]) && (i += t[17], s.MN(e[10], [ s.MB(e[10]), t[21], s.MB(e[15]), t[19], s.MB(e[16]), t[20] ].join("")), i += t[13]), i += t[16], s.MD(e[17]) && (i += t[17], s.MN(e[10], [ s.MB(e[10]), t[21], s.MB(e[17]), t[19], s.MB(e[18]), t[20] ].join("")), i += t[13]), i += t[16], s.MD(e[19]) && (i += t[17], s.MN(e[10], [ s.MB(e[10]), t[21], s.MB(e[19]), t[19], s.MB(e[20]), t[20] ].join("")), i += t[13]), i += t[16], s.MD(e[21]) && (i += t[22]), i += t[23];
var n = s.MB(e[22]);
s.MJ(n + "" == "small") && (i += t[24]), (s.MJ(s.MB(e[23])) || s.MJ(s.MB(e[24])) || s.MJ(s.MB(e[25]))) && (i += t[25]), s.MD(e[26]) && (i += t[26]), s.MJ(s.MB(e[8])) && (i += [ t[27], s.MC(e[8]), s.MC(e[27]), t[28] ].join("")), s.MJ(s.MB(e[23])) && s.MJ(s.MB(e[28])) && (i += [ t[29], s.MC(e[28]), t[28] ].join("")), s.MJ(s.MC(e[9]) + "" == "www") && s.MJ(1 == s.track_experiment("HBaMEAbXDMUBdOYZbKZTSfXPRQYO")) ? s.MJ(s.MC(e[29]) + "" == "book") && (i += t[30]) :s.MJ(s.MC(e[9]) + "" == "www") && s.MJ(2 == s.track_experiment("HBaMEAbXDMUBdOYZbKZTSfXPRQYO")) ? (i += t[31], s.MJ(s.MC(e[29]) + "" == "book") && (i += t[30])) :s.MJ(s.MC(e[29]) + "" == "book") && (i += t[32]), i += [ s.MC(e[30]), t[28], s.MC(e[31]), t[33] ].join(""), s.MD(e[32]) && (i += [ t[34], s.MC(e[32]), t[35] ].join("")), s.MD(e[10]) && (i += [ s.MC(e[10]), t[28] ].join("")), s.MJ(s.track_experiment("OTfdASFaMEAbCMPFYKcPHe")) && s.MD(e[33]) && (i += t[36]), i += t[37], s.MD(e[23]) ? (i += [ t[38], s.MC(e[23]), t[35] ].join(""), s.MJ(s.track_experiment("OTfdASFBUdXRCFOVWe")) && (i += t[39]), i += t[40]) :s.MD(e[24]) ? i += [ t[41], s.MC(e[24]), t[42] ].join("") :s.MD(e[25]) && (i += [ t[43], s.MC(e[25]), t[44] ].join("")), s.MD(e[34]) && (i += t[45]), s.MD(e[35]) && (i += [ t[46], s.MC(e[35]), t[47] ].join("")), s.MD(e[37]) && (i += t[48], s.MD(e[36]) && (i += t[49]), i += [ t[42], s.MC(e[37]), t[50] ].join("")), s.MD(e[34]) && (i += [ t[51], s.MC(e[34]), t[50] ].join("")), s.MD(e[34]) && (i += t[52]), s.MD(e[26]) && (i += t[53], s.MJ(s.track_experiment("OTfdASFBUdXRCFOVWe")) && (i += t[54]), i += t[55]), s.MD(e[36]) && (i += [ t[56], s.MC(e[38]), t[57], s.MC(e[39]), t[58], s.MC(e[40]), t[59], s.MB(e[41]), t[60], s.MB(e[42]), t[61] ].join("")), i += t[52], s.MD(e[21]) && (i += t[52]), i += t[14];
}
return i += t[62], s.MN(e[8], void 0), i += t[14], s.MN(e[23], void 0), i += t[14], s.MN(e[24], void 0), i += t[14], s.MN(e[25], void 0), i += t[14], s.MN(e[28], void 0), i += t[14], s.MN(e[35], void 0), i += t[14], s.MN(e[37], void 0), i += t[14], s.MN(e[34], void 0), i += t[14], s.MN(e[26], void 0), i += t[14], s.MN(e[32], void 0), i += t[14], s.MN(e[31], void 0), i += t[14], s.MN(e[22], void 0), i += t[63], s.MN(e[11], void 0), i += t[14], s.MN(e[12], void 0), i += t[14], s.MN(e[13], void 0), i += t[14], s.MN(e[14], void 0), i += t[14], s.MN(e[15], void 0), i += t[14], s.MN(e[16], void 0), i += t[14], s.MN(e[17], void 0), i += t[14], s.MN(e[18], void 0), i += t[14], s.MN(e[19], void 0), i += t[14], s.MN(e[20], void 0), i += t[63], s.MN(e[27], void 0), i += t[63], s.MN(e[10], void 0), i += t[14], s.MN("fe_banner__banners_count", s.MI(s.MB(e[43])) + s.MI(1)), i += t[63], s.MJ(s.MC(e[29]) + "" == "book") && s.MJ(s.track_experiment_stage("bp_banner_module_normalize_banners", 2)) ? i += t[14] :s.MJ(s.track_experiment_stage("bp_banner_module_normalize_banners", 1)) && (i += t[14]), i += t[14], _r_(i);
}
return n += t[0], n = a(n), n += t[14], _r_(n);
});
}()), B.define("component/search/searchbox/submit-button", function(t, e, i) {
_i_("4ab:26");
var n = t("component"), s = t("events");
i.exports = n.extend({
init:function() {
_i_("4ab:366"), this.handleLoadingIndicator(), _r_();
},
handleLoadingIndicator:function() {
_i_("4ab:367");
var t = this.$el, e = this.$el.find(".sb-submit__loader_icon");
if (!e.length) return _r_(!1);
s.on("SearchBox::Submit__Success", function() {
_i_("4ab:465"), t.addClass("sb-searchbox__button--in-progress"), e.removeClass("g-hidden"), _r_();
}), _r_();
}
}), _r_();
}), B.define("component/search/destination/country-only", function(t, e, i) {
"use strict";
_i_("4ab:27");
var n = t("component"), s = t("search/searchbox/model"), a = t("read-data-options");
i.exports = n.extend({
init:function() {
_i_("4ab:368"), this.options = a(this.$el, {
modelId:{
name:"sb-id",
type:String,
required:!0
}
}), this.model = s.getInstance(this.options.modelId), this.model.use("destination"), this.model.on("change", this.modelChange.bind(this)), this.$onlyCurrentCountry = this.$el.find("[data-input]"), this.$onlyCurrentCountry.bind("change", this.onlyCurrentCountryChange.bind(this)), this.modelInit(), _r_();
},
modelInit:function() {
_i_("4ab:369");
var t = this.$onlyCurrentCountry.is(":checked");
this.model.destination.initOnlyCurrentCountry(t), _r_();
},
modelChange:function(t) {
if (_i_("4ab:370"), !t || !t.onlyCurrentCountry) return _r_();
var e = this.$onlyCurrentCountry.is(":checked"), i = this.model.destination.getOnlyCurrentCountry();
e != i && this.$onlyCurrentCountry.prop("checked", i), _r_();
},
onlyCurrentCountryChange:function() {
_i_("4ab:371"), this.model.destination.setOnlyCurrentCountry(this.$onlyCurrentCountry.is(":checked")), _r_();
}
}), _r_();
}), B.define("component/search/group/group", function(t, e, i) {
_i_("4ab:28"), booking.jstmpl("search_group_group_html", function() {
_i_("4ab:120");
var t, e = [ "\n		", "\n\n", "\n", "\n\n\n\n\n\n", "\n\n\n", "\n    ", '\n        <div class="sb-searchbox-children-tooltip">\n            <span class="fly-dropdown-close fly-dropdown-close-icon"></span>\n            <h4 class="sb-searchbox-children-tooltip__title">', "/private/gs_index_model_header_family/name", '</h4>\n            <p class="sb-searchbox-children-tooltip__text">', "/private/gs_index_model_desc_family/name", "</p>\n        </div>\n    ", '\n\n\n\n<div class="u-clearfix" data-render>\n\n  ', "\n  ", '\n    <div class="sb-group__field sb-group__field-rooms">\n      <label class="sb-searchbox__label sb-group__field__label ', "-inline", ' -small" for="no_rooms">', "/private/sbox_rooms/name", "</label>\n      ", '<div class="sb-custom-select">', '\n<select name="no_rooms" id="no_rooms" data-group-rooms-count>\n  ', '\n  <option value="', '" ', 'selected="selected"', ">\n    ", "/private/search_box_room_filter/name", "\n  </option>\n", "\n</select>\n", "</div>", "\n    </div>\n  ", '\n    <input type="hidden" name="no_rooms" value="', '">\n  ', "\n\n\n  ", '\n    <div class="sb-group__field">\n      <label class="sb-searchbox__label sb-group__field__label ', ' -small" for="group_adults">\n        ', "/private/sbox_adults/name", "/private/bbt_searchbox_travellers/name", "\n      </label>\n      ", '\n  <select name="group_adults" id="group_adults" data-group-adults-count>\n    ', '\n      <option value="', ">\n        ", "/private/search_box_adults_filter/name", "\n      </option>\n    ", "\n  </select>\n", '\n    <input type="hidden" name="group_adults" value="', "\n\n  ", ' -small" for="group_children">\n        ', "/private/sbox_children/name", '\n  <select name="group_children" id="group_children" data-group-children-count data-component="search/group/children-ages-tooltip search/group/add-children-tooltip" data-add-children-tooltip="', '">\n    ', "\n          ", "/private/search_box_no_children_filter_default/name", "\n        ", "/private/search_box_children_filter/name", '\n      <div class="sb-group__children__field">\n        <label class="sb-searchbox__label -small sb-group__children__label">\n          ', "/private/bh_gsb_search_box_checkout_age/name", "/private/bh_gsb_search_box_checkout_age_plural/name", "/private/loc_sbox_children_age_singular/name", "/private/loc_sbox_children_age_plural/name", "\n        </label>\n\n        ", "\n\n        ", "\n            ", '\n            <select\n              name="age"\n              data-group-child-age="', '"\n              ', 'aria-label="', "/private/acc_index_child_age_screenread/name", '"', '\n            >\n              <option class="sb_child_ages_empty_zero" value="12 "></option>\n              ', '\n                <option value="', ">\n                  ", "/private/loc_counter_word_child_age_cjk/name", "\n                </option>\n              ", "\n            </select>\n            ", "\n      </div>\n    ", "\n\n</div>\n", "\n	" ], i = [ "fe_sb_bbtool_searchbox", "b_action", "b_search_config", "fe_add_children_tooltip", "b_predicted_traveller_type", "fe_sb_group_block_labels", "fe_sb_universal_design", "fe_sb_group_max_rooms", "fe_sb_state_number_of_rooms", "fe_sb_group_descriptive_dropdowns", "fe_sb_group_rooms_hide", "fe_sb_width", "fe_sb_group_use_adults_label", "fe_sb_group_max_adults", "fe_sb_state_number_of_adults", "fe_sb_group_adults_hide", "fe_sb_group_max_children", "fe_sb_state_number_of_children", "fe_sb_group_children_hide", "fe_sb_group_localized_short_date", "fe_sb_state_checkout", "fe_children_ages", "fe_child_i", "fe_sb_group_max_children_age", "b_lang_is_cjk", "fe_sb_state_children_ages", "fe_sb_state_rooms" ];
return _r_(function(n) {
_i_("4ab:428");
var s = "", a = this.fn;
function r(t) {
return _i_("4ab:446"), t += e[12], a.MK(a.MB(i[10])) ? (t += e[13], a.MD(i[5]) || (t += e[14]), t += [ e[15], a.ME(e[16], a.MB, a.MN, null), e[17] ].join(""), t = _(t), t += e[28]) :t += [ e[29], a.F.entities(a.MC(i[8])), e[30] ].join(""), t += e[2], _r_(t);
}
function o(s) {
if (_i_("4ab:447"), s += e[1], a.MK(a.MB(i[0])) && a.MJ(a.MC(i[1])) && a.MJ(a.MC(i[1]) + "" == "hotel") && a.MJ(a.track_experiment_stage("pss_d_sb_descriptive_group_elements", 1)), s += e[2], a.MK(a.MB(i[0])) && a.MJ(a.MC(i[1])) && a.MJ(a.MC(i[1]) + "" == "searchresults") && a.MJ(a.track_experiment_stage("pss_d_sb_descriptive_group_elements", 2)), s += e[2], a.MK(a.MB(i[0])) && a.MJ(a.MC(i[1])) && a.MJ(a.MC(i[1]) + "" != "hotel") && a.MJ(a.MC(i[1]) + "" != "searchresults") && a.MJ(a.track_experiment_stage("pss_d_sb_descriptive_group_elements", 3)), s += e[2], a.MK(a.MB(i[0])) && a.MJ(a.MC(i[2])) && a.MJ(a.MC(i[2]).b_nr_rooms_needed > 1) && a.MJ(a.track_custom_goal("pss_d_sb_descriptive_group_elements", 1)), s += e[2], a.MK(a.MB(i[0])) && a.MJ(a.MC(i[2])) && a.MJ(a.MC(i[2]).b_adults_total > 2) && a.MJ(a.track_custom_goal("pss_d_sb_descriptive_group_elements", 2)), s += e[2], a.MK(a.MB(i[0])) && a.MJ(a.MC(i[2])) && a.MJ(a.MC(i[2]).b_children_total > 0) && a.MJ(a.track_custom_goal("pss_d_sb_descriptive_group_elements", 3)), s += e[3], a.MN("fe_sb_group_max_rooms", 30), s += e[2], a.MN("fe_sb_group_max_pets", 10), s += e[2], a.MN("fe_sb_group_max_adults", 30), s += e[2], a.MN("fe_sb_group_max_children", 10), s += e[2], a.MN("fe_sb_group_max_children_age", 17), s += e[4], a.MN("fe_add_children_tooltip", ""), s += e[2], a.MJ(a.MC(i[1]) + "" == "searchresults") && a.MJ(a.MC(i[2])) && a.MK(a.MC(i[2]).b_children_total) && a.MJ(a.MC(i[4]) + "" == "family") && (s += e[5], a.MN(i[3], [ e[6], a.ME(e[7], a.MB, a.MN, null), e[8], a.ME(e[9], a.MB, a.MN, null), e[10] ].join("")), s += e[2]), s += e[4], s += e[1], s += e[1], s += e[1], s += e[11], a.MJ(a.MB(i[11])) && a.MJ(a.MB(i[6])) || (s += e[5], s = r(s), s += e[12]), s += e[31], a.MK(a.MB(i[15])) ? (s += e[32], a.MD(i[5]) || (s += e[14]), s += e[33], s += a.MD(i[12]) ? a.ME(e[35], a.MB, a.MN, null) :a.ME(e[34], a.MB, a.MN, null), s += e[36], s = l(s), s += e[28]) :s += [ e[43], a.F.entities(a.MC(i[14])), e[30] ].join(""), s += e[44], a.MK(a.MB(i[18])) && (s += e[32], a.MD(i[5]) || (s += e[14]), s += [ e[45], a.ME(e[46], a.MB, a.MN, null), e[36] ].join(""), s = h(s), s += e[28]), s += e[44], a.MJ(a.MB(i[11]) + "" == "medium") && a.MJ(a.MB(i[6])) && (s += e[5], s = r(s), s += e[12]), s += e[44], a.MK(a.MB(i[18]))) {
if (s += e[5], a.MJ(a.MB(i[17])) && (a.MJ(a.MB(i[26])) || a.MJ(a.MB(i[25])))) {
if (s += e[53], a.MD(i[20]) ? (a.MN(i[19], a.DATE(a.MB(i[20]), "short_date", "", "", "")), s += a.MJ(1 == a.MB(i[17])) ? [ (n.unshift({
date:a.MB(i[19])
}), t = a.ME(e[54], a.MB, a.MN, null), n.shift(), t), e[2] ].join("") :[ (n.unshift({
date:a.MB(i[19])
}), t = a.ME(e[55], a.MB, a.MN, null), n.shift(), t), e[2] ].join("")) :s += a.MJ(1 == a.MB(i[17])) ? [ a.ME(e[56], a.MB, a.MN, null), e[2] ].join("") :[ a.ME(e[57], a.MB, a.MN, null), e[2] ].join(""), s += e[58], a.MN("fe_child_i", 0), s += e[59], s += e[59], a.MD(i[25])) s += e[49], n.unshift({
fe_children_ages:a.MB(i[25])
}), s = c(s), n.shift(), s += e[51]; else if (a.MD(i[26])) {
s += e[49];
var o = a.MC(i[26]) || [];
n.unshift({
fe_room:null
});
for (var _, u = 1, p = o.length; p >= u; u++) n[0].fe_room = _ = o[u - 1], s += e[60], n.unshift({
fe_children_ages:a.MG((_ || {}).b_children_ages)
}), s = d(s), n.shift(), s += e[49];
n.shift(), s += e[51];
}
s += e[72];
}
s += e[12];
}
return s += e[44], a.MJ(a.MB(i[11]) + "" == "small") && a.MJ(a.MB(i[6])) && (s += e[5], s = r(s), s += e[12]), s += e[73], _r_(s);
}
function _(s) {
_i_("4ab:448"), s += e[2], a.MD(i[6]) && (s += e[18]), s += e[19];
var r = a.seq(1, a.MB(i[7])) || [];
n.unshift({
i:null
});
for (var o, _ = 1, l = r.length; l >= _; _++) n[0].i = o = r[_ - 1], s += [ e[20], a.F.entities(o.value), e[21] ].join(""), a.MJ(a.MB(i[8]) == o.value) && (s += e[22]), s += e[23], a.MD(i[9]) ? (n.unshift({
num_rooms:o.value
}), t = a.ME(e[24], a.MB, a.MN, a.MO(o.value, null, e[24])), n.shift(), s += t) :s += o.value, s += e[25];
return n.shift(), s += e[26], a.MD(i[6]) && (s += e[27]), s += e[2], _r_(s);
}
function l(s) {
_i_("4ab:449"), s += e[2], a.MD(i[6]) && (s += e[18]), s += e[37];
var r = a.seq(1, a.MB(i[13])) || [];
n.unshift({
i:null
});
for (var o, _ = 1, l = r.length; l >= _; _++) n[0].i = o = r[_ - 1], s += [ e[38], a.F.entities(o.value), e[21] ].join(""), a.MJ(a.MB(i[14]) == o.value) && (s += e[22]), s += e[39], a.MD(i[9]) ? (n.unshift({
num_adults:o.value
}), t = a.ME(e[40], a.MB, a.MN, a.MO(o.value, null, e[40])), n.shift(), s += t) :s += o.value, s += e[41];
return n.shift(), s += e[42], a.MD(i[6]) && (s += e[27]), s += e[2], _r_(s);
}
function h(s) {
_i_("4ab:450"), s += e[2], a.MD(i[6]) && (s += e[18]), s += [ e[47], a.F.html(a.MC(i[3])), e[48] ].join("");
var r = a.seq(0, a.MB(i[16])) || [];
n.unshift({
i:null
});
for (var o, _ = 1, l = r.length; l >= _; _++) n[0].i = o = r[_ - 1], s += [ e[38], a.F.entities(o.value), e[21] ].join(""), a.MJ(a.MB(i[17]) == o.value) && (s += e[22]), s += e[39], s += a.MJ(a.MB(i[9])) && a.MJ(0 == o.value) ? [ e[49], a.ME(e[50], a.MB, a.MN, null), e[51] ].join("") :a.MJ(a.MB(i[9])) ? [ e[49], (n.unshift({
num_kids:o.value
}), t = a.ME(e[52], a.MB, a.MN, a.MO(o.value, null, e[52])), n.shift(), t), e[51] ].join("") :[ e[49], o.value, e[51] ].join(""), s += e[41];
return n.shift(), s += e[42], a.MD(i[6]) && (s += e[27]), s += e[2], _r_(s);
}
function d(s) {
_i_("4ab:451"), s += e[49];
var r = c, o = h, _ = u, l = d, h = a.MC(i[21]) || [];
n.unshift({
fe_child_age:null
});
for (var d, c = 1, u = h.length; u >= c; c++) {
n[0].fe_child_age = d = h[c - 1], s += e[60], a.MD(i[6]) && (s += e[18]), s += [ e[61], a.F.entities(a.MC(i[22])), e[62] ].join(""), a.MJ(a.track_experiment("OTfdASFbLYLFKWIFdCNEEZMPeeFGbFC")) && (s += [ e[63], (n.unshift({
child_number:a.MI(a.MB(i[22])) + a.MI(1)
}), t = a.ME(e[64], a.MB, a.MN, null), n.shift(), t), e[65] ].join("")), s += e[66];
var p = c, f = h, b = u, m = g, h = a.seq(0, a.MB(i[23])) || [];
n.unshift({
i:null
});
for (var g, c = 1, u = h.length; u >= c; c++) n[0].i = g = h[c - 1], s += [ e[67], a.F.entities(g.value), e[21] ].join(""), a.MJ(d + "" != "") && a.MJ(d + "" == "" + g.value) && (s += e[22]), s += [ e[68], g.value ].join(""), a.MD(i[24]) && (s += a.ME(e[69], a.MB, a.MN, null)), s += e[70];
n.shift(), c = p, h = f, u = b, g = m, s += e[71], a.MD(i[6]) && (s += e[27]), s += e[60], a.MN("fe_child_i", a.MI(a.MB(i[22])) + a.MI(1)), s += e[49];
}
return n.shift(), c = r, h = o, u = _, d = l, s += e[51], _r_(s);
}
function c(s) {
_i_("4ab:452"), s += e[49];
var r = a.MC(i[21]) || [];
n.unshift({
fe_child_age:null
});
for (var o, _ = 1, l = r.length; l >= _; _++) {
n[0].fe_child_age = o = r[_ - 1], s += e[60], a.MD(i[6]) && (s += e[18]), s += [ e[61], a.F.entities(a.MC(i[22])), e[62] ].join(""), a.MJ(a.track_experiment("OTfdASFbLYLFKWIFdCNEEZMPeeFGbFC")) && (s += [ e[63], (n.unshift({
child_number:a.MI(a.MB(i[22])) + a.MI(1)
}), t = a.ME(e[64], a.MB, a.MN, null), n.shift(), t), e[65] ].join("")), s += e[66];
var h = _, d = r, c = l, u = p, r = a.seq(0, a.MB(i[23])) || [];
n.unshift({
i:null
});
for (var p, _ = 1, l = r.length; l >= _; _++) n[0].i = p = r[_ - 1], s += [ e[67], a.F.entities(p.value), e[21] ].join(""), a.MJ(o + "" != "") && a.MJ(o + "" == "" + p.value) && (s += e[22]), s += [ e[68], p.value ].join(""), a.MD(i[24]) && (s += a.ME(e[69], a.MB, a.MN, null)), s += e[70];
n.shift(), _ = h, r = d, l = c, p = u, s += e[71], a.MD(i[6]) && (s += e[27]), s += e[60], a.MN("fe_child_i", a.MI(a.MB(i[22])) + a.MI(1)), s += e[49];
}
return n.shift(), s += e[51], _r_(s);
}
return s += e[0], s = o(s), s += e[74], _r_(s);
});
}());
var n = t("component"), s = t("morphdom"), a = t("read-data-options"), r = t("search-config"), o = t("search/searchbox/model");
i.exports = n.extend({
init:function() {
_i_("4ab:372"), this.options = a(this.$el, {
modelId:{
name:"sb-id",
type:String,
required:!0
},
sbWidth:{
name:"sb-width",
type:String
},
sbBBToolSearchbox:{
name:"sb-bbtool-searchbox",
type:Boolean
},
childrenHide:{
name:"sb-group-children-hide",
type:Boolean
},
petsHide:{
name:"sb-group-pets-hide",
type:Boolean
},
roomsHide:{
name:"sb-group-rooms-hide",
type:Boolean
},
useAdultsLabel:{
name:"sb-group-use_adults_label",
type:Boolean
},
blockLabels:{
name:"sb-group-block-labels",
type:Boolean
},
alwaysExpanded:{
name:"sb-group-always-expanded",
type:Boolean
},
removeOldParams:{
name:"sb-group-remove-old-params",
type:Boolean
},
descriptiveDropdowns:{
name:"fe_sb_group_descriptive_dropdowns",
type:Boolean
}
}), this.model = o.getInstance(this.options.modelId), this.model.use("group"), this.model.use("dates"), this.model.on("change", this.modelChange.bind(this)), this.$form = this.$el.parents("form"), this.options.removeOldParams && this.$form.on("submit", this.formSubmit.bind(this)), r.on("change", this.searchConfigChange.bind(this)), this.$el.on("change", '[data-group-rooms-count=""]', this.groupRoomsChange.bind(this)), this.$el.on("change", '[data-group-adults-count=""]', this.groupAdultsChange.bind(this)), this.$el.on("change", '[data-group-children-count=""]', this.groupChildrenChange.bind(this)), this.$el.on("change", "[data-group-child-age]", this.groupChildAgeChange.bind(this)), this.renderEl = this.$el.find('[data-render=""]')[0], this.template = B.jstmpl("search_group_group_html"), this.$form.on("change", ".b-booker-type__input_business-booker", this.businessBookerSelected.bind(this)), this.modelInit(), _r_();
},
modelInit:function() {
_i_("4ab:373");
var t = {
rooms_count:r.rooms ? r.rooms.length :1,
adults_count:r.adults || 2,
children_ages:r.childrenAges || [],
default_empty_age_to:"12 "
};
this.model.group.init(t), _r_();
},
modelChange:function(t) {
if (_i_("4ab:374"), !t || "group" != t.group && "dates" != t.group) return _r_();
B.env.b_is_bbtool_user && B.et.customGoal("VObLMEKKTVeBKeYEGWe", 3), this.render(), _r_();
},
searchConfigChange:function() {
_i_("4ab:375"), this.model.group.set({
key:"rooms_count",
value:Array.isArray(r.rooms) ? r.rooms.length :1
}), this.model.group.set({
key:"adults_count",
value:r.adults
}), this.model.group.set({
key:"children_count",
value:Array.isArray(r.childrenAges) ? r.childrenAges.length :1
}), Array.isArray(r.childrenAges) && r.childrenAges.forEach(function(t, e) {
_i_("4ab:503"), this.model.group.set({
key:"children_ages",
i:e,
value:t
}), _r_();
}.bind(this)), _r_();
},
groupRoomsChange:function(t) {
_i_("4ab:376");
var e = $(t.currentTarget);
this.model.group.set({
key:"rooms_count",
value:e.val()
}), _r_();
},
groupAdultsChange:function(t) {
_i_("4ab:377");
var e = $(t.currentTarget);
this.model.group.set({
key:"adults_count",
value:e.val()
}), this.groupAdultsChanged = !0, _r_();
},
groupChildrenChange:function(t) {
_i_("4ab:378");
var e = $(t.currentTarget);
this.model.group.set({
key:"children_count",
value:e.val()
}), _r_();
},
groupChildAgeChange:function(t) {
_i_("4ab:379");
var e = $(t.currentTarget), i = e.attr("data-group-child-age");
this.model.group.set({
key:"children_ages",
i:+i,
value:e.val()
}), _r_();
},
formSubmit:function(t) {
if (_i_("4ab:380"), t.isDefaultPrevented()) return _r_(!1);
var e = [ "[data-group-adults-count]", "[data-group-children-count]", "[data-group-child-age]" ], i = this.$el.find("[name=room1]");
this.$el.find(e.join(",")).prop("disabled", !0), i.val(i.val().replace(" ", "")), _r_();
},
render:function() {
_i_("4ab:381");
var t = {}, e = this.model.group.get(), i = this.model.dates.get();
e = {
fe_sb_state_number_of_rooms:e.rooms_count,
fe_sb_state_number_of_adults:e.adults_count,
fe_sb_state_number_of_children:e.children_ages.length,
fe_sb_state_children_ages:e.children_ages,
fe_sb_state_traveller:e.fe_sb_state_traveller,
fe_sb_state_rooms:[ {
b_adults:e.adults_count,
b_children:e.children_ages.length,
b_children_ages:e.children_ages,
b_room_order:1
} ]
}, B.env.b_lang_is_cjk && (e.b_lang_is_cjk = B.env.b_lang_is_cjk), i.checkout && (e.fe_sb_state_checkout = i.checkout.toString()), this.options.sbWidth && (e.fe_sb_width = this.options.sbWidth), this.options.childrenHide && (e.fe_sb_group_children_hide = 1), this.options.petsHide && (e.fe_sb_group_pets_hide = 1), this.options.roomsHide && (e.fe_sb_group_rooms_hide = 1), this.options.blockLabels && (e.fe_sb_group_block_labels = 1), this.options.alwaysExpanded && (e.fe_sb_group_always_expanded = 1), this.options.useAdultsLabel && (e.fe_sb_group_use_adults_label = 1), this.options.sbBBToolSearchbox && (e.fe_sb_bbtool_searchbox = 1), this.options.descriptiveDropdowns && (e.fe_sb_group_descriptive_dropdowns = 1);
var n = this.template.render(e).trim();
"msie" === B.env.b_browser && B.env.b_browser_version <= 8 && (t.onBeforeElUpdated = function(t, e) {
_i_("4ab:489");
var i = t.getAttribute(jQuery.expando);
return i && e.setAttribute(jQuery.expando, i), _r_(!0);
}), s(this.renderEl, n, t), _r_();
},
businessBookerSelected:function() {
_i_("4ab:382"), this.groupAdultsChanged || this.model.group.set({
key:"adults_count",
value:1
}), _r_();
},
groupChildrenAgeSave:function(e) {
_i_("4ab:383"), e.preventDefault();
var i = t("events");
i.trigger("SearchBox::SaveTravelGroupsClicked", e), _r_();
}
}), _r_();
}), B.define("search/group/model", function(t, e, i) {
"use strict";
_i_("4ab:29");
function n(t) {
_i_("4ab:81"), this.model = t, this.data = {
preset:-1
}, this.valid = !0, this.validationError = "", this.options = {}, _r_();
}
$.extend(n.prototype, {
init:function(t) {
_i_("4ab:205"), this.data = t, this.emit("init"), _r_();
},
configure:function(t, e) {
_i_("4ab:206"), void 0 !== e ? this.options[t] = e :"object" == typeof t && $.extend(this.options, t), _r_();
},
get:function() {
return _i_("4ab:207"), _r_(this.data);
},
set:function(t) {
if (_i_("4ab:208"), !t || !t.key) return _r_(!1);
if ("children_count" == t.key) if (this.data.children_ages || (this.data.children_ages = []), 0 == t.value) this.data.children_ages = []; else if (this.data.children_ages.length < t.value) for (var e = this.data.children_ages.length; e < t.value; e++) this.data.default_empty_age_to ? this.data.children_ages.push(this.data.default_empty_age_to) :this.data.children_ages.push(""); else this.data.children_ages.length > t.value && this.data.children_ages.splice(t.value, this.data.children_ages.length - t.value); else t.hasOwnProperty("i") ? this.data[t.key] ? this.data[t.key][t.i] = t.value :(this.data[t.key] = [], this.data[t.key][t.i] = t.value) :this.data[t.key] = t.value;
return this.emit("change"), _r_(!0);
},
validate:function() {
_i_("4ab:209");
var t = !0, e = "";
return this.valid != t && (this.valid = t, this.validationError = e, this.emit("validation")), _r_(t);
},
modelChange:function(t) {
if (_i_("4ab:210"), !t || "traveller" !== t.group) return _r_();
var e = this.model.traveller.get().travellerType;
switch (e) {
case null:
case "":
case "couple":
this.data.rooms_count = 1, this.data.adults_count = 2, this.data.children_ages = [];
break;

case "solo":
case "business":
this.data.rooms_count = 1, this.data.adults_count = 1, this.data.children_ages = [];
break;

case "family":
this.data.adults_count = 1 == this.data.adults_count ? 2 :this.data.adults_count, this.data.children_ages && 0 != this.data.children_ages.length || (this.data.children_ages = [ this.data.default_empty_age_to ]);
break;

case "group":
this.data.adults_count = 1 == this.data.adults_count ? 2 :this.data.adults_count, this.data.children_ages = [];
}
this.data.fe_sb_state_traveller = e, this.emit("change"), _r_();
},
emit:function(t, e) {
_i_("4ab:211"), e = e || {}, this.model.emit(t, $.extend(e, {
group:"group"
})), _r_();
}
}), i.exports = n, _r_();
}), B.define("search/searchbox/analytics", function(t, e, i) {
_i_("4ab:30");
var n = {};
e.send = function(t, e, i) {
if (_i_("4ab:111"), !window.ga) return _r_();
window.ga("send", "event", "Searchbox", B.env.b_action, t, e, i), _r_();
}, e.sendNonInteractive = function(t, i) {
_i_("4ab:112"), e.send(t, i, {
nonInteraction:!0
}), _r_();
}, e.sendOnce = function(t, i) {
_i_("4ab:113");
var s = t + ":" + i;
n[s] || (e.send(t, i), n[s] = !0), _r_();
}, _r_();
}), B.define("search/searchbox/model", function(t, e, i) {
"use strict";
_i_("4ab:31");
var n = t("event-emitter"), s = t("search/modules/flags"), a = {};
function r(t) {
_i_("4ab:82"), n.extend(this), this.id = t, this.formAction, this.fieldGroups = {
track:[]
}, this.flags = {}, this.validators = [], _r_();
}
$.extend(r.prototype, {
use:function(e) {
if (_i_("4ab:212"), this[e]) return _r_();
switch (e) {
case "destination":
var i = t("search/destination/model");
this[e] = new i(this);
break;

case "dates":
var n = t("search/dates/model");
this[e] = new n(this);
break;

case "group":
var s = t("search/group/model");
this[e] = new s(this);
break;

case "traveller":
var a = t("search/traveller/model");
this[e] = new a(this);
break;

default:
return _r_();
}
"function" == typeof this[e].validate && this.validators.push(this[e].validate.bind(this[e])), _r_();
},
submit:function() {
_i_("4ab:213"), this.emit("submit"), _r_();
},
getFormAction:function() {
return _i_("4ab:214"), _r_(this.formAction);
},
setFormAction:function(t) {
_i_("4ab:215"), this.formAction = t, _r_();
},
getFields:function() {
_i_("4ab:216");
var t = [];
return Object.keys(this.fieldGroups).forEach(function(e) {
_i_("4ab:474"), Array.isArray(this.fieldGroups[e]) && (t = t.concat(this.fieldGroups[e])), _r_();
}.bind(this)), _r_(t);
},
setFields:function(t, e) {
_i_("4ab:217"), this.fieldGroups[t] = e, _r_();
},
hasFlag:function(t) {
return _i_("4ab:218"), _r_(t in this.flags);
},
getFlag:function(t) {
return _i_("4ab:219"), _r_(this.flags[t]);
},
updateFlags:function(t) {
_i_("4ab:220");
var e = s.parse(t);
Object.assign(this.flags, e), _r_();
},
validate:function() {
_i_("4ab:221");
var t = this.validators.filter(function(t) {
return _i_("4ab:466"), _r_(t.call());
});
return _r_(t.length == this.validators.length);
}
}), i.exports = {
getInstance:function(t) {
return _i_("4ab:222"), a[t] || (a[t] = new r(t)), _r_(a[t]);
}
}, _r_();
}), B.define("component/search/searchbox/searchbox", function(t, e, i) {
"use strict";
_i_("4ab:32");
var n = t("component"), s = t("search/searchbox/model"), a = t("read-data-options"), r = t("search/dates/date-prices"), o = t("events"), _ = [ "country", "dest_id", "dest_type", "district", "iata", "landmark", "latitude", "longitude", "place_id", "place_id_lat", "place_id_lon", "region", "prefill_submitted" ];
i.exports = n.extend({
init:function() {
if (_i_("4ab:384"), this.hiddenFields = [], this.options = a(this.$el, {
modelId:{
name:"sb-id",
type:String,
required:!0
},
flags:{
name:"sb-flags",
type:String,
defaultValue:""
},
isFirstVisible:{
name:"is-first-visible",
type:Boolean
}
}), this.model = s.getInstance(this.options.modelId), this.model.on("init", this.modelChange.bind(this)), this.model.on("change", this.modelChange.bind(this)), this.model.on("submit", this.modelSubmit.bind(this)), this.model.updateFlags(this.options.flags), this.$form = this.$el.is("form") ? this.$el :this.$el.find("form:eq(0)"), this.$form.submit(this.formSubmit.bind(this)), this.originalAction = this.$form.attr("action"), this.options.isFirstVisible && this.model.hasFlag("sticky")) {
var e = t("search/searchbox/searchbox-sticky-controller").getController();
e.setElement(this.$form);
}
this.$searchOverlay = this.$el.find("[data-searching-overlay]"), this.shouldShowSearchOverlay = this.model.getFlag("AEJPAcBacPONDcFGHT") && this.$searchOverlay.length, this.shouldShowSearchOverlay && (this.$searchOverlay.on("click", this.searchOverlayClick.bind(this)), $(document).on("keydown", this.hideSearchOverlay.bind(this))), this.initCurrentCountryField(), this.model.getFlag("UBKeJbLYQCLBMJFUWOEQeRe") && (this.datePrices = r.getInstance(), this.datePrices.init({
model:this.model,
variant:B.et.track("UBKeJbLYQCLBMJFUWOEQeRe"),
style:"dots",
trackHash:"UBKeJbLYQCLBMJFUWOEQeRe"
})), "www" == B.env.b_site_type && this.model.setFields("sr_traffic", [ {
name:"from_sf",
value:1
} ]), _r_();
},
modelChange:function(t) {
_i_("4ab:385"), this.updateHiddenFields(), _r_();
},
modelSubmit:function() {
_i_("4ab:386"), this.$form.submit(), _r_();
},
initCurrentCountryField:function() {
_i_("4ab:387");
var t = !1;
this.$onlyCurrentCountry = this.$form.find("#limit-search-area"), this.$onlyCurrentCountry.length && (t = this.$onlyCurrentCountry.is(":checked"), this.$onlyCurrentCountry.bind("change", this.onlyCurrentCountryChange.bind(this)), this.model.use("destination"), this.model.destination.initOnlyCurrentCountry(t)), _r_();
},
onlyCurrentCountryChange:function() {
_i_("4ab:388"), this.model.use("destination"), this.model.destination.setOnlyCurrentCountry(this.$onlyCurrentCountry.is(":checked")), _r_();
},
updateHiddenFields:function() {
_i_("4ab:389");
var t = this.model.getFormAction(), e = this.$form.attr("action");
t || (t = this.originalAction), e != t && this.$form.attr("action", t), this.hiddenFields && this.hiddenFields.forEach(function(t) {
_i_("4ab:490"), t.$node.remove(), t.$node = null, _r_();
});
var i = this.model.getFields();
this.hiddenFields = [];
var n = [], s = !1;
i.forEach(function(t) {
_i_("4ab:491"), this.hiddenFields.push({
name:t.name,
value:t.value
}), n.push(t.name), -1 != _.indexOf(t.name) && (s = !0), _r_();
}.bind(this)), this.$form.find("input").filter(function() {
return _i_("4ab:492"), _r_(s && -1 != _.indexOf(this.name) || -1 != n.indexOf(this.name));
}).remove(), this.hiddenFields.forEach(function(t) {
_i_("4ab:493");
var e = $("<input>");
e.attr("type", "hidden"), e.attr("name", t.name), e.attr("value", t.value), t.$node = e, this.$form.append(e), _r_();
}.bind(this)), _r_();
},
formSubmit:function(t) {
_i_("4ab:390");
var e = this.model.getFlag("b_loc_part_of_memorial_day_search_us_exp_flag");
if (null != e && "" !== e) {
var i = document.getElementsByName("ss"), n = "";
i && i.length >= 1 && (n = i[0].value);
var s = -1 != n.toLowerCase().replace(/ /g, "").indexOf("memorialday");
s && "www" === B.env.b_site_type && "en-us" === B.env.b_selected_language && "us" === B.env.ip_country && B.et.stage("YdALOLOLOVZMYCKBXAbbFGUPVZHe", 1);
}
var a = this.model.getFlag("loc_part_of_show_us_city_exp_flag");
if (null != a && "" !== a) {
var i = document.getElementsByName("ss"), n = "";
i && i.length >= 1 && (n = i[0].value);
}
var r = this.model.validate();
if (!r) return t.preventDefault(), _r_();
o.trigger("SearchBox::Submit__Success"), this.shouldShowSearchOverlay ? this.showSearchOverlay() :this.shouldShowSearchPageOverlay ? this.pageOverlay.show(this.model.destination.data.ss_raw) :this.shouldShowSRPP && this.SRPPOverlay.show(this.model.destination.data.ss_raw), _r_();
},
searchOverlayClick:function() {
_i_("4ab:391"), this.abortSubmit(), this.hideSearchOverlay(), B.et.customGoal("AEJPAcBacPONDcFGHT", 1), _r_();
},
abortSubmit:function() {
_i_("4ab:392"), window.stop ? window.stop() :document.execCommand && document.execCommand("Stop"), _r_();
},
showSearchOverlay:function() {
_i_("4ab:393"), this.$searchOverlay.addClass("-visible"), _r_();
},
hideSearchOverlay:function() {
_i_("4ab:394"), this.$searchOverlay.removeClass("-visible"), _r_();
}
}), _r_();
}), B.define("search/searchbox/searchbox-sticky-controller", function(t, e, i) {
"use strict";
_i_("4ab:33");
var n = t("jquery"), s = t("event-emitter"), a = null;
function r() {
_i_("4ab:83"), s.extend(this), this.visible = !1, this.bottomPosition = null, this.$el = null, this.$sticky = null, this.$window = n(window), this.$window.on("scroll", this.windowScroll.bind(this)), this.$window.on("keydown", this.onKeyDown.bind(this)), this.$window.on("click", this.clickOnWindow.bind(this)), _r_();
}
Object.assign(r.prototype, {
setElement:function(t) {
if (_i_("4ab:223"), this.bottomPosition) {
var e = t.offset(), i = t.outerHeight();
if (e && e.top + i > this.bottomPosition) return _r_();
}
this.$el = t, this.recalculate(), _r_();
},
setStickyElement:function(t) {
_i_("4ab:224"), this.$sticky = t, _r_();
},
isVisible:function() {
return _i_("4ab:225"), _r_(this.visible);
},
recalculate:function() {
if (_i_("4ab:226"), null === this.$el) return _r_();
var t = this.$el.offset(), e = this.$el.outerHeight();
if (!t) return _r_();
this.bottomPosition = t.top + e, this.updateStatus(), _r_();
},
show:function() {
_i_("4ab:227"), this.visible = !0, this.emit("show"), _r_();
},
onKeyDown:function(t) {
_i_("4ab:228");
var e = 27 === t.keyCode;
e && this.visible && this.updateStatus(), _r_();
},
clickOnWindow:function(t) {
if (_i_("4ab:229"), this.$sticky && this.$sticky.length) {
var e = t.target, i = this.$sticky.get(0), s = n.contains(i, e) || i === e;
!s && this.visible && this.updateStatus();
}
_r_();
},
updateStatus:function() {
_i_("4ab:230"), !this.visible && this.$window.scrollTop() >= this.bottomPosition ? (this.visible = !0, this.emit("show")) :this.visible && this.$window.scrollTop() < this.bottomPosition && (this.visible = !1, this.emit("hide")), _r_();
},
windowScroll:function(t) {
if (_i_("4ab:231"), null === this.bottomPosition) return _r_();
this.updateStatus(), _r_();
}
}), i.exports = {
getController:function() {
return _i_("4ab:232"), a || (a = new r()), _r_(a);
}
}, _r_();
}), B.define("component/search/searchbox/searchbox-sticky", function(t, e, i) {
"use strict";
_i_("4ab:34");
var n = t("component"), s = t("events"), a = t("search/searchbox/searchbox-sticky-controller").getController();
i.exports = n.extend({
init:function() {
_i_("4ab:395"), a.on("show", this.show.bind(this)), a.on("hide", this.hide.bind(this)), a.setStickyElement(this.$el), a.isVisible() && this.hardShow(), _r_();
},
show:function(t) {
_i_("4ab:396"), this.$el.addClass("-visible-1"), s.trigger("searchbox-sticky:show"), setTimeout(function() {
_i_("4ab:494"), this.$el.addClass("-visible-2"), _r_();
}.bind(this), 0), _r_();
},
hardShow:function() {
_i_("4ab:397"), this.$el.addClass("-visible-1 -visible-2"), _r_();
},
hide:function(t) {
_i_("4ab:398"), this.$el.removeClass("-visible-2"), setTimeout(function() {
_i_("4ab:495"), this.$el.removeClass("-visible-1"), _r_();
}.bind(this), 1e3), _r_();
}
}), _r_();
}), B.require([ "jquery" ], function(t) {
_i_("4ab:35");
var e = !1;
t(function() {
_i_("4ab:114"), t(".a11y-skip-to-content").on("focus", function() {
_i_("4ab:429"), e = !0, B.et.stage("OTfdASFYWbMScDaVeYRAbEBSHfGbEO", 2), _r_();
}), t(".sb-searchbox__map_trigger").on("a11y_OTfdASFYWbMScDaVeYRAbEBSHfGbEO", function() {
_i_("4ab:430"), B.et.stage("OTfdASFYWbMScDaVeYRAbEBSHfGbEO", 1), e && B.et.stage("OTfdASFYWbMScDaVeYRAbEBSHfGbEO", 3), _r_();
}), _r_();
}), _r_();
}), B.define("component/search/group/children-ages-tooltip", function(t, e, i) {
"use strict";
_i_("4ab:36");
var n = t("jquery"), s = t("jstmpl"), a = t("component");
i.exports = a.extend({
init:function() {
_i_("4ab:399"), this.dropdown = !1, this.$form = n("#frm"), this.isPopupAlreadyShown = !1, this.agesSelector = '[name="age"]', this.addEventListeners(), _r_();
},
addEventListeners:function() {
_i_("4ab:400"), this.$el.change(this.showTooltip.bind(this)), this.$form.delegate(this.agesSelector, "click", this.hideTooltip.bind(this)), B.eventEmitter.bind("CALENDAR:opened", this.hideTooltip.bind(this)), _r_();
},
showTooltip:function(t) {
_i_("4ab:401");
var e = parseInt(this.$el.val()) > 0;
e && !this.isPopupAlreadyShown && setTimeout(function() {
if (_i_("4ab:511"), 0 === n("#frm " + this.agesSelector + ":eq(0)").length) return _r_();
this.dropdown = n.fly.dropdown.extend({
defaults:{
position:"bottom left",
content:function() {
return _i_("4ab:524"), _r_(s("searchbox_children_ages_tooltip").render({}));
},
extraClass:"searchbox_children_ages_tooltip"
}
}).create("#frm " + this.agesSelector + ":eq(0)"), this.dropdown.show(), this.isPopupAlreadyShown = !0, _r_();
}.bind(this), 0), _r_();
},
hideTooltip:function(t) {
_i_("4ab:402"), this.dropdown && (this.dropdown.hide(), this.dropdown.destroy()), _r_();
}
}), _r_();
}), B.define("component/search/group/add-children-tooltip", function(t, e, i) {
"use strict";
_i_("4ab:37");
var n = t("jquery"), s = B.env.rtl ? "left" :"right", a = "searchbox_children_tooltip", r = null, o = null === B.browserStorageHandler.getSessionValue("gs_sb_add_children_tooltip"), _ = t("component");
i.exports = _.extend({
init:function() {
_i_("4ab:403"), o && this.$el.data("add-children-tooltip") && (this.showTooltip(), B.browserStorageHandler.addSessionValue("gs_sb_add_children_tooltip", 1), o = !1, B.eventEmitter.bind("CALENDAR:opened", this.hideTooltip), n(".sb-destination__input").on("focus", this.hideTooltip)), _r_();
},
showTooltip:function() {
_i_("4ab:404");
var t = this.$el;
r && r.hide(), r = n.fly.dropdown.extend({
defaults:{
position:s,
content:function() {
return _i_("4ab:519"), _r_(t.data("add-children-tooltip"));
},
extraClass:a
},
actions:{
click:function(t) {
_i_("4ab:520"), n(t.target).is("select") && this.hide(), _r_();
}
},
_autohide:function() {},
init:function() {
_i_("4ab:516"), this.bind(this.events.show, function() {
_i_("4ab:521"), n("." + a).delegate(".fly-dropdown-close", "click", function(t) {
_i_("4ab:523"), r.hide(), _r_();
}), _r_();
}), _r_();
}
}).create(t), r.show(), _r_();
},
hideTooltip:function() {
_i_("4ab:405"), r && r.hide(), _r_();
}
}), _r_();
}), B.define("component/search/dates/prompt", function(t, e, i) {
"use strict";
_i_("4ab:38");
var n = "sb-dates-prompt-dismissed", s = 200, a = "mdot" === B.env.b_site_type, r = t("component"), o = t("click-out"), _ = !a && "searchresults" === B.env.b_action && t("searchresults/events");
i.exports = r.extend({
init:function() {
if (_i_("4ab:406"), this.boundHide = this.hide.bind(this), this.boundCleanUp = this.cleanUp.bind(this), this.$el.find(".sb-dates-prompt__close").on("click", this.dismiss.bind(this)), this.isDismissed()) return _r_();
_ && this.isLandingScrollStarted() ? _.once(_.UI_LANDING_SCROLL_COMPLETED, this.show.bind(this)) :this.show(), _r_();
},
show:function() {
if (_i_("4ab:407"), this.hiding) return _r_();
this.$el.removeClass("g-hidden").addClass("fadein"), this.monitorId = o.addMonitor(this.el, this.boundHide), _r_();
},
hide:function() {
_i_("4ab:408"), this.hiding = !0, this.$el.removeClass("fadein").addClass("fadeout"), window.setTimeout(this.boundCleanUp, s), _r_();
},
dismiss:function() {
_i_("4ab:409"), B.et.customGoal("AEJPCcacVScZXAHWe", 1), B.et.customGoal("TZdPKPZFKLCSCDWOOWAUFHKBVT", 1), l(), this.hide(), _r_();
},
cleanUp:function() {
_i_("4ab:410"), this.monitorId && o.removeMonitor(this.monitorId), this.$el.addClass("g-hidden").removeClass("fadeout"), this.hiding = !1, _r_();
},
isDismissed:function() {
_i_("4ab:411");
var t = a ? B.storage({
key:n,
location:"sessionstorage"
}) :"true" === B.browserStorageHandler.getSessionValue(n);
return _r_(t);
},
isLandingScrollStarted:function() {
return _i_("4ab:412"), _r_(B.sr && B.sr.landingScrollStarted || B.env.fe_landing_scroll_started);
}
});
function l() {
_i_("4ab:84"), a ? B.storage({
key:n,
value:!0,
location:"sessionstorage"
}) :B.browserStorageHandler.addSessionValue(n, !0), _r_();
}
_r_();
});