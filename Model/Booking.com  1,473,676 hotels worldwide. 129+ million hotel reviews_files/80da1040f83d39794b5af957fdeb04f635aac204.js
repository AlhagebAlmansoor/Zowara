var _i_ = this._i_ || function() {}, _r_ = this._r_ || function(e) {
return e;
};

booking.env.enable_scripts_tracking && ("www" === booking.env.b_site_type && (booking.env.scripts_tracking.jquery = {
loaded:!!window.jQuery,
run:!!window.jQuery
}), booking.env.scripts_tracking.main = {
loaded:!0,
run:!1
}), "function" != typeof booking.debug && (booking.debug = function() {
return _i_("3da:323"), _r_(new function() {
_i_("3da:1161"), this.log = this.debug = this.info = this.warn = this.error = this.assert = this.dir = this.table = this.profile = this.trace = this.time = this.timeEnd = function() {}, _r_();
}());
}, booking.debug.enabled = function() {}), booking.console = booking.debug("booking"), window.console = window.console || booking.console, B.tools = {
inherits:function(e, t, i) {
_i_("3da:325");
var n = function() {};
n.prototype = t.prototype, e.superClass_ = t.prototype, e.prototype = new n(), e.prototype.constructor = e, i && $.extend(e.prototype, i), _r_();
},
base:function(e, t, i) {
_i_("3da:326");
var n = arguments.callee.caller;
if (!n) throw Error("arguments.caller not defined.  tools.base() expects not to be running in strict mode. See http://www.ecma-international.org/ecma-262/5.1/#sec-C");
if (n.superClass_) return _r_(n.superClass_.constructor.apply(e, Array.prototype.slice.call(arguments, 1)));
for (var r = Array.prototype.slice.call(arguments, 2), a = !1, o = e.constructor; o; o = o.superClass_ && o.superClass_.constructor) if (o.prototype[t] === n) a = !0; else if (a) return _r_(o.prototype[t].apply(e, r));
if (e[t] === n) return _r_(e.constructor.prototype[t].apply(e, r));
throw Error("tools.base called from a method of one name to a method of a different name");
},
addSingletonGetter:function(e) {
_i_("3da:327"), e.getInstance = function() {
return _i_("3da:1163"), e.__instance__ || (e.__instance__ = new e()), _r_(e.__instance__);
}, _r_();
},
abstractMethod:function() {
throw _i_("3da:328"), Error("unimplemented abstract method");
},
parseInt:function(e) {
return _i_("3da:329"), _r_(parseInt(e, 10));
},
string:{
substitute:function(e, t) {
_i_("3da:710");
for (var i = 1; i < arguments.length; i++) {
var n = String(arguments[i]).replace(/\$/g, "$$$$");
e = e.replace(/%s/, n);
}
return _r_(e);
},
htmlEncode:function(e) {
return _i_("3da:711"), _r_($("<textarea />").text(e).html());
},
htmlDecode:function(e) {
return _i_("3da:712"), _r_($("<textarea />").html(e).text());
}
},
object:{
clone:function(e) {
_i_("3da:713");
var t = $.type(e);
if ("object" === t || "array" === t) {
if ("function" == typeof e.clone) return _r_(e.clone());
var i = "array" === t ? [] :{};
for (var n in e) e.hasOwnProperty(n) && (i[n] = B.tools.object.clone(e[n]));
return _r_(i);
}
return _r_(e);
},
keys:Object.keys,
defaults:function(e, t) {
_i_("3da:714");
var i;
e = e || {}, t = t || {};
for (i in t) t.hasOwnProperty(i) && null == e[i] && (e[i] = t[i]);
return _r_(e);
},
getByName:function(e, t) {
_i_("3da:715");
for (var i, n = e.split("."), r = t || window; i = n.shift(); ) {
if (null === r[i] || void 0 === r[i]) return _r_(null);
r = r[i];
}
return _r_(r);
},
pick:function(e, t) {
_i_("3da:716");
var i = [].slice.call(arguments, 1), n = {};
return i.forEach(function(t) {
_i_("3da:1894"), t in e && (n[t] = e[t]), _r_();
}), _r_(n);
}
},
array:{
toObject:function(e) {
_i_("3da:717");
for (var t = {}, i = 0, n = e.length; n > i; i++) t[e[i]] = !0;
return _r_(t);
},
indexOf:function(e, t, i) {
_i_("3da:718");
for (var n = i || 0, r = e.length; r > n; n++) if (e[n] == t) return _r_(n);
return _r_(-1);
}
},
math:{
getRandomInt:function(e, t) {
return _i_("3da:719"), _r_(Math.round(Math.random() * (t - e)) + e);
}
},
dom:{
window:$(window),
getBlockWidth:function(e) {
return _i_("3da:720"), _r_(e.width());
},
getBlockHeight:function(e) {
return _i_("3da:721"), _r_(e.height());
},
getBlockOffset:function(e, t) {
_i_("3da:722");
var i = e.offset(), n = {
left:0,
top:0
};
return t && (n = t.offset()), _r_({
left:i.left - n.left,
top:i.top - n.top
});
},
getBounds:function(e) {
_i_("3da:723");
var t = $(e), i = t.offset(), n = t.outerWidth(), r = t.outerHeight();
return _r_({
left:i.left,
right:i.left + n,
top:i.top,
bottom:i.top + r,
width:n,
height:r
});
},
boundsOverlap:function(e, t) {
return _i_("3da:724"), _r_(e.left < t.right && e.right > t.left && e.top < t.bottom && e.bottom > t.top);
},
getWindowWidth:function() {
return _i_("3da:725"), _r_(B.tools.dom.getBlockWidth(B.tools.dom.window));
},
getWindowHeight:function() {
return _i_("3da:726"), _r_(B.tools.dom.getBlockHeight(B.tools.dom.window));
},
getWindowScrollLeft:function() {
return _i_("3da:727"), _r_(B.tools.dom.window.scrollLeft());
},
getWindowScrollTop:function() {
return _i_("3da:728"), _r_(B.tools.dom.window.scrollTop());
},
watchIfBlockVisibleInViewport:function(e, t, i, n) {
_i_("3da:729");
function r() {
_i_("3da:1164"), B.tools.dom.isBlockVisibleInViewport(e, i) && (t(), n || a()), _r_();
}
function a() {
_i_("3da:1165"), B.tools.dom.window.unbind("resize scroll", r), _r_();
}
return B.tools.dom.window.bind("resize scroll", r), setTimeout(r, 0), _r_({
forceCheck:r,
stopWatch:a
});
},
isBlockVisibleInViewport:function(e, t) {
if (_i_("3da:730"), !e || 0 === e.length || !e.is(":visible")) return _r_(!1);
var i = e.offset().top, n = {
top:i,
bottom:i + e.innerHeight()
}, r = B.tools.dom.getWindowScrollTop(), a = {
top:r,
bottom:r + B.tools.dom.getWindowHeight()
};
if (t) return _r_(n.top >= a.top && n.bottom <= a.bottom);
return _r_(n.top >= a.top && n.top <= a.bottom || n.bottom >= a.top && n.bottom <= a.bottom || n.top < a.top && n.bottom > a.bottom);
},
popupCancel:function(e) {
return _i_("3da:731"), window.open(e, "", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=400,height=350,left=200,top=200"), _r_(!1);
}
},
css:{
CSS_OPACITY_SUPPORT:"opacity" in document.body.style
},
url:{
parse:function(e) {
_i_("3da:732");
var t = {};
if ("string" != typeof e) return _r_(t);
return e.split(/[;&]/g).forEach(function(e) {
_i_("3da:1895");
var i = e.indexOf("="), n = e.substr(0, i);
void 0 === t[n] && (t[n] = e.substr(i + 1)), _r_();
}), _r_(t);
},
stringify:function(e, t, i) {
_i_("3da:733"), t = t || "&", i = i || "=";
var n = [];
return e && Object.keys(e).forEach(function(t) {
_i_("3da:2257"), n.push(t + i + e[t]), _r_();
}), _r_(n.join(t));
}
},
functions:{
throttle:function(e, t, i) {
_i_("3da:734");
var n, r, a, o = null, _ = 0, s = i || {}, l = function() {
_i_("3da:1896"), _ = s.leading === !1 ? 0 :+new Date(), o = null, a = e.apply(n || {}, r || []), n = r = null, _r_();
};
return _r_(function() {
_i_("3da:1675");
var i = +new Date();
_ || s.leading !== !1 || (_ = i);
var d = t - (i - _);
return n = this, r = arguments, 0 >= d ? (clearTimeout(o), o = null, _ = i, a = e.apply(n, r), n = r = null) :o || s.trailing === !1 || (o = setTimeout(l, d)), _r_(a);
});
}
},
jsStaticUrl:function(e) {
return _i_("3da:330"), _r_(e ? B.tools.getStaticHost(e) + e :"");
},
getStaticHost:function(e) {
if (_i_("3da:331"), !B.env.static_hostnames || !B.env.static_hostnames.length) return _r_(document.location.protocol + "//q.bstatic.com");
if (1 === B.env.static_hostnames.length || !e) return _r_(B.env.static_hostnames[0]);
var t = B.tools.getHashCode(e.toString()), i = Math.abs(t) % B.env.static_hostnames.length;
return _r_(B.env.static_hostnames[i]);
},
getHashCode:function(e) {
_i_("3da:332");
var t, i, n, r = 0;
if (0 === e.length) return _r_(r);
for (t = 0, n = e.length; n > t; t++) i = e.charCodeAt(t), r = (r << 5) - r + i, r |= 0;
return _r_(r);
}
}, B.tools.dom.Bounds, "undefined" != typeof B.define && B.define("tools", B.tools), /* @preserve https://mths.be/cssescape v0.2.1 by @mathias | MIT license */
function(e) {
_i_("3da:6"), e.CSS || (e.CSS = {});
var t = e.CSS, i = function(e) {
_i_("3da:735"), this.message = e, _r_();
};
i.prototype = new Error(), i.prototype.name = "InvalidCharacterError", t.escape ? e.CSS_escape = t.escape :t.escape = e.CSS_escape = function(e) {
_i_("3da:1676");
for (var t, n = String(e), r = n.length, a = -1, o = "", _ = n.charCodeAt(0); ++a < r; ) {
if (t = n.charCodeAt(a), 0 == t) throw new i("Invalid character: the input contains U+0000.");
if (t >= 1 && 31 >= t || 127 == t || 0 == a && t >= 48 && 57 >= t || 1 == a && t >= 48 && 57 >= t && 45 == _) {
o += "\\" + t.toString(16) + " ";
continue;
}
if (t >= 128 || 45 == t || 95 == t || t >= 48 && 57 >= t || t >= 65 && 90 >= t || t >= 97 && 122 >= t) {
o += n.charAt(a);
continue;
}
o += "\\" + n.charAt(a);
}
return _r_(o);
}, _r_();
}("undefined" != typeof global ? global :window), function(e, t) {
_i_("3da:7");
function i() {
_i_("3da:333");
var e = "string", t = arguments;
if (typeof t[0] === e && (!t[1] || typeof t[1] === e)) return _r_(i.get.apply(i, t));
return _r_(i.define.apply(i, t));
}
t.extend(i, {
define:function() {
_i_("3da:1166");
var e = {}, t = arguments;
return e = "object" == typeof t[0] ? t[0] :{
name:t[0],
handler:t[1]
}, "string" == typeof e.name && "function" == typeof e.handler && (this._list[this._key(e)] = this.create(e)), _r_(this);
},
get:function(e, t) {
return _i_("3da:1167"), t = t || "", _r_(this._list[this._key(e, t)]);
},
register:function(e, i) {
_i_("3da:1168");
var n = this;
function r(r) {
_i_("3da:1897");
var a = t(this).attr(e), o = n.get(a, i) || n.get(a);
o && o.run(n.params(this, e), r), _r_();
}
t(document.body).delegate("[" + e + "]", i, r), _r_();
},
create:function(e) {
_i_("3da:1169");
var i = new this._onea();
return t.extend(i, e), _r_(i);
},
params:function(e, i, n) {
_i_("3da:1170"), "string" == typeof i && (n = i, i = void 0);
var r = (n || "data-command") + "-params";
if ("object" != typeof i) return _r_(this._parse(t(e).attr(r)));
var a = [];
t.each(i, function(e, t) {
_i_("3da:2620"), a.push(e + "=" + encodeURIComponent(t)), _r_();
}), t(e).attr(r, a.join(";")), _r_();
},
_list:{},
_onea:n,
_key:function(e, t) {
_i_("3da:1171");
var i = "object" == typeof e ? e :{
name:e,
type:t
};
return _r_(i.name + (i.type ? " " + i.type :""));
},
_parse:function(e) {
_i_("3da:1172");
var i = {};
return e && t.each(e.split(";"), function(e, t) {
_i_("3da:2621");
var n = t.split("=");
try {
i[n.shift()] = decodeURIComponent(n.join("="));
} catch (r) {}
_r_();
}), _r_(i);
}
}), t.each([ "bind", "unbind", "one", "trigger" ], function(n, r) {
_i_("3da:736"), i[r] = function() {
_i_("3da:1898");
var i = t.makeArray(arguments);
return i[0] = "command:" + i[0], _r_(e.eventEmitter[r].apply(e.eventEmitter, i));
}, _r_();
});
function n() {}
n.prototype = {
name:"",
type:"",
run:function() {
_i_("3da:1173");
var e = t.makeArray(arguments);
return e[0] = e[0] || {}, i.trigger.apply(i, [ this.name ].concat(e)), _r_(this.handler.apply(this, e));
},
handler:function() {}
}, booking.command = i, i.register("data-command", "click"), _r_();
}(window.booking, window.jQuery), function(e) {
"use strict";
_i_("3da:8");
var t = "function", i = "object", n = "reject", r = "fulfill", a = 0, o = typeof module === i && module.exports && "function" != typeof __webpack_require__;
function _() {
_i_("3da:335"), this._act = a, this._cbs = [], this._ebs = [], _r_();
}
_.tick = function(e) {
_i_("3da:737"), o ? process.nextTick(e) :setTimeout(e, 0), _r_();
}, _.prototype = {
_exec:function(e) {
_i_("3da:1175");
var i = this._val, n = this._act;
_.tick(function() {
_i_("3da:2258");
for (var r, a, o; r = e.shift(); ) if (a = r.pr, o = r.cb, typeof o === t) try {
a.fulfill(o(i));
} catch (_) {
a.reject(_);
} else a[n](i);
_r_();
}), _r_();
},
reject:function(e) {
_i_("3da:1176");
var t = this;
t._act === a && (t._val = e, t._act = n, t._exec(t._ebs)), _r_();
},
fulfill:function(e) {
_i_("3da:1177");
var n, o, _ = this, s = 1;
if (_._act === a) {
try {
if (e === _) throw TypeError();
o = e && typeof e, n = (o === t || o === i) && e.then;
} catch (l) {
return _.reject(l), _r_();
}
if (typeof n === t) try {
n.call(e, function(e) {
_i_("3da:2910"), s = s && _.fulfill(e), _r_();
}, function(e) {
_i_("3da:2911"), s = s && _.reject(e), _r_();
});
} catch (l) {
s = s && _.reject(l);
} else _._val = e, _._act = r, _._exec(_._cbs);
}
_r_();
},
then:function(e, t) {
_i_("3da:1178");
var i = this, r = new _();
return i._act === a ? (i._cbs.push({
cb:e,
pr:r
}), i._ebs.push({
cb:t,
pr:r
})) :i._exec([ {
cb:i._act === n ? t :e,
pr:r
} ]), _r_(r);
}
}, o ? module.exports = _ :e.p0 = _, _r_();
}(booking), booking.promise = function() {
return _i_("3da:9"), _r_(new booking.p0());
}, booking.promise.when = function(e) {
_i_("3da:10");
var t, i, n;
if (t = e.length, i = [], n = booking.promise(), !t) return n.fulfill([]), _r_(n);
return e.forEach(function(e, r) {
_i_("3da:738");
var a = function(e) {
_i_("3da:1899"), t--, i[r] = e, t || n.fulfill(i), _r_();
};
booking.promise.is(e) ? e.then(a, function(e) {
_i_("3da:2259"), n.reject(e), _r_();
}) :a(e), _r_();
}), _r_(n);
}, booking.promise.is = function(e) {
return _i_("3da:11"), _r_(e && "function" == typeof e.then);
}, booking.p0.prototype.pipe = function(e) {
return _i_("3da:12"), _r_(booking.promise.is(e) ? this.then(function(t) {
_i_("3da:1070"), e.fulfill(t), _r_();
}, function(t) {
_i_("3da:1071"), e.reject(t), _r_();
}) :this);
}, booking.p0.prototype.log = function(e) {
_i_("3da:13"), e = e || "";
var t = function(t, i) {
return _i_("3da:739"), _r_(function(n) {
if (_i_("3da:1677"), window.console && console.log && console.log([ e, t ].join(" "), n), i) {
var r = B.promise();
return r.reject(n), _r_(r);
}
return _r_(n);
});
};
return _r_(this.then(t("resolved - "), t("rejected - ", !0)));
}, booking.p0.prototype.finishChain = function() {
_i_("3da:14"), this.then(null, function(e) {
_i_("3da:740"), e instanceof Error && setTimeout(function() {
throw _i_("3da:2260"), e;
}, 0), _r_();
}), _r_();
}, window.goog = {}, goog.inherits = B.tools.inherits, goog.base = B.tools.base, goog.abstractMethod = B.tools.abstractMethod, goog.addSingletonGetter = B.tools.addSingletonGetter, goog.isBoolean = function(e) {
return _i_("3da:15"), _r_("boolean" == typeof e);
}, goog.isNumber = function(e) {
return _i_("3da:16"), _r_("number" == typeof e);
}, goog.isString = function(e) {
return _i_("3da:17"), _r_("string" == typeof e);
}, goog.isObject = function(e) {
_i_("3da:18");
var t = typeof e;
return _r_("object" === t && null != e || "function" === t);
}, goog.isArray = function(e) {
return _i_("3da:19"), _r_("array" === $.type(e));
}, goog.isFunction = function(e) {
return _i_("3da:20"), _r_("function" === $.type(e));
}, function(e) {
_i_("3da:21"), e.ajaxSetup && e.ajaxSetup({
cache:!1,
beforeSend:function(t, i) {
if (_i_("3da:1900"), t.setRequestHeader("X-Booking-Pageview-Id", booking.env.pageview_id), t.setRequestHeader("X-Booking-AID", booking.env.aid || booking.env.b_aid), t.setRequestHeader("X-Booking-Session-Id", booking.env.b_sid), booking.env.b_site_type_id && t.setRequestHeader("X-Booking-SiteType-Id", booking.env.b_site_type_id), booking.env.b_partner_channel_id && t.setRequestHeader("X-Partner-Channel-Id", booking.env.b_partner_channel_id), booking.env.b_label && t.setRequestHeader("X-Booking-Label", encodeURIComponent(booking.env.b_label || "")), booking.env.b_csrf_token && t.setRequestHeader("X-Booking-CSRF", booking.env.b_csrf_token), booking.env.b_lang_for_url && t.setRequestHeader("X-Booking-Language-Code", booking.env.b_lang_for_url), booking.env.b_extra_ajax_headers) for (var n in booking.env.b_extra_ajax_headers) booking.env.b_extra_ajax_headers.hasOwnProperty(n) && t.setRequestHeader(n, booking.env.b_extra_ajax_headers[n]);
var r = booking.require("et"), a = r.tracked();
a && t.setRequestHeader("X-Booking-Client-Info", a);
var o = e("#req_info").html();
o && t.setRequestHeader("X-Booking-Info", o), _r_();
}
}), _r_();
}(window.jQuery), window.bookmark = function(e, t, i) {
if (_i_("3da:22"), window.sidebar && window.sidebar.addPanel) window.sidebar.addPanel(t, e, ""); else if (window.external) try {
window.external.AddToFavoritesBar(e, t);
} catch (n) {
window.external.AddFavorite(e, t);
} else window.opera && window.print && (i.title = t);
return _r_(!1);
}, window.addBookmark = function(e, t) {
_i_("3da:23"), window.sidebar ? window.sidebar.addPanel(e, t, "") :document.all ? window.external.AddFavorite(t, e) :alert("Sorry your browser doesn't support this function\nTo bookmark this page\nWindows users press ctrl + D\nMac users press cmd + D"), _r_();
}, window.hideFrameContainer = function(e) {
if (_i_("3da:24"), document.getElementById) {
var t = document.getElementById(e);
t.style.display = "none", document.getElementById("headline_newsletter").style.display = "block", document.getElementById("headline_createprofile").style.display = "none";
}
_r_();
}, window.changeHeadline = function() {
_i_("3da:25"), document.getElementById("headline_newsletter").style.display = "none", document.getElementById("headline_createprofile").style.display = "block", _r_();
}, window.hideEl = function e(t) {
_i_("3da:26"), $.isArray(t) && $.each(t, function() {
_i_("3da:1179"), e(this), _r_();
}), $("#" + t).hide(), _r_();
}, window.showEl = function(e) {
_i_("3da:27"), $("#" + e).show(), _r_();
}, window.showFrameContainer = function(e, t, i, n, r, a, o, _) {
if (_i_("3da:28"), document.getElementById) {
var s = document.getElementById(e), l = document.getElementById(t), d = document.getElementById(i);
if ("block" === l.style.display) return l.style.display = "none", _r_(!1);
d.src !== n && (d.src = n), l.style.visibility = "hidden", l.style.display = "block";
var c = $(s).position() || {}, u = c.left, h = c.top;
o && (u += o), _ && (h += _), r || (r = l.offsetWidth);
var f = document.getElementById("bodyconstraint").offsetWidth;
return u + r > f && (u = f - r - 40), l.style.left = u + "px", l.style.top = h + "px", l.style.visibility = "visible", _r_(!1);
}
window.open(n), _r_();
}, window.sSc = function(e, t, i) {
_i_("3da:29"), document.getElementById && (document.getElementById("rsc_" + e).innerHTML = i), _r_();
}, window.sSc3 = function(e, t) {
_i_("3da:30"), $("li[id^=" + e + "]").attr("style", "display: none; "), $("li[id^=" + t + "]").removeAttr("style"), _r_();
}, window.sSc2 = function(e, t, i) {
if (_i_("3da:31"), document.getElementById) {
document.getElementById("rnr") && (document.getElementById("rnr").innerHTML = e);
for (var n = -1; 10 > n; n++) {
var r = document.getElementById("rl" + n);
r && (r.style.color = "", r.style.textDecoration = "underline");
}
t.style.color = "#003580", t.style.textDecoration = "none", t.blur(), $("#gr_profile_chooser ul").removeClass().addClass(i), $(".review_filter_sub").text($(t).find(".key").text());
var a;
a = "group" === i || "review_category_group_of_friends" === i ? "group_big" :"solo_traveller" === i ? "solo_big" :"family_with_young_children" === i || "review_category_family" === i ? "youngchildren_big" :"mature_couple" === i ? "maturecouple_big" :"family_with_older_children" === i ? "oldchildren_big" :"with_friends" === i ? "withfriends_big" :"young_couple" === i || "review_category_couple" === i ? "youngcouple_big" :"global_big", $(".review_user_type").attr("class", "review_user_type type_" + a);
}
_r_();
}, $(function() {
_i_("3da:32"), $(".newsletter_ajax_error").hide(), $('input#to[type="text"]').css({
backgroundColor:"#FFFFFF"
}), $('input#to[type="text"]').focus(function() {
_i_("3da:741"), $(this).css({
color:"#003580"
}), this.value === this.defaultValue && (this.value = ""), this.value !== this.defaultValue && this.select(), _r_();
}), $("input.text-input").blur(function() {
_i_("3da:742"), $(this).css({
backgroundColor:"#FFFFFF"
}), _r_();
}), _r_();
}), function(e, t) {
_i_("3da:33"), t = t || {};
var i = e.console || {};
i.warn = i.warn || function() {};
var n = {
_list:{},
get:function(e) {
return _i_("3da:1180"), _r_(n._list[e]);
},
set:function(e, t) {
_i_("3da:1181"), e = e || "", t = t || "", "string" == typeof e && (e = e.replace(/^\s+|\s+$/g, "")), "string" == typeof t && (t = t.replace(/^\s+|\s+$/g, "")), e.length > 0 && "string" == typeof e || "string" != typeof e ? ("undefined" != typeof n._list[e] && i.warn("Booking Strings: replacing string with id: " + e), n._list[e] = t) :i.warn("Booking Strings: trying to insert string with empty id"), _r_();
}
}, r = function(e, t) {
return _i_("3da:743"), _r_(n["undefined" != typeof t ? "set" :"get"](e, t));
};
t.strings = r, t.strings.get = n.get, t.strings.set = n.set, _r_();
}(window, booking), B.define("search-config", [ "tmpl_data", "event-emitter" ], function(e, t, i) {
"use strict";
_i_("3da:34");
function n(e) {
if (_i_("3da:336"), !(this instanceof n)) return _r_(new n(e));
this.adults = Number(e.b_adults) || 0, this.children = Number(e.b_children) || 0, this.childrenAges = this.children ? e.b_children_ages.map(Number) :[], this.order = Number(e.b_room_order), _r_();
}
n.prototype.toString = function() {
_i_("3da:744");
for (var e = [], t = 0; t < this.adults; t++) e.push("A");
return e = e.concat(this.childrenAges), _r_(e.join(","));
};
function r(r) {
_i_("3da:337"), r === i && (r = e("b_search_config")), r ? this._set(r) :(this.isDefault = !0, this.isGroupSearch = !1, this.adults = 2, this.children = 0, this.rooms = [ n({
b_adults:2,
b_children:0,
b_children_ages:[],
b_room_order:1
}) ], this.childrenAges = []), t.extend(this), _r_();
}
return r.prototype._set = function(e) {
_i_("3da:745"), this.isDefault = !1, this.isGroupSearch = Boolean(Number(e.b_is_group_search)), this.adults = Number(e.b_adults_total), this.children = Number(e.b_children_total) || 0, this.pets = Number(e.b_pets_total) || 0, this.rooms = e.b_rooms.map(n), this.childrenAges = this.rooms.reduce(function(e, t) {
return _i_("3da:2107"), _r_(e.concat(t.childrenAges));
}, []), this.childrenAges.sort(), _r_();
}, r.prototype.set = function(e) {
_i_("3da:746"), this._set(e), this.emit("change"), _r_();
}, r.prototype.toArray = function(e) {
return _i_("3da:747"), _r_(e ? new r(e).toArray() :this.rooms.map(Function.prototype.call, n.prototype.toString));
}, r.prototype.toObject = function(e) {
return _i_("3da:748"), _r_(this.toArray(e).reduce(function(e, t, i) {
return _i_("3da:1901"), e["room" + (i + 1)] = t, _r_(e);
}, {}));
}, r.prototype.getRawValue = function() {
return _i_("3da:749"), _r_({
b_adults_total:this.adults,
b_nr_rooms_needed:this.rooms.length,
b_children_total:this.children,
b_children_ages_total:this.childrenAges,
b_is_group_search:this.isGroupSearch ? 1 :0,
b_pets_total:this.pets,
b_rooms:this.rooms.map(function(e) {
_i_("3da:2261");
var t = {
b_adults:e.adults,
b_room_order:e.order
};
return e.children && (t.b_children = e.children, t.b_children_ages = e.childrenAges), _r_(t);
})
});
}, _r_(new r());
}), booking.formatter = booking.formatter || {}, booking.formatter.date = B.require("formatting/date").compat, B.define("fragment", [ "jquery", "promise" ], function(e, t) {
_i_("3da:35");
var i, n, r = B.debug("fragment"), a = 15, o = 200, _ = 50, s = 0, l = [], d = function() {
_i_("3da:750");
var t, i, n = [], a = !0;
if (1 === l.length) i = l[0], i.args.tmpl && (a = !1), t = Object.assign({
name:i.name
}, i.args), n.push(i); else {
for (var o = {}, _ = 0, s = l.length; s > _; _++) i = l[_], n.push(i), i.name in o || (o[i.name] = {}), o[i.name][i.id] = i.args;
t = {
batch:JSON.stringify(o)
};
}
var d = a ? B.env.b_fragment_url_json :B.env.b_fragment_url_html;
l = [], r.info("Request", d, t), e.ajax({
url:d,
data:t,
type:"POST",
cache:!1
}).done(function(e) {
if (_i_("3da:2262"), r.info("Resolve", e, n), 1 === n.length) n[0].resolve(e); else for (var t, i = 0, a = n.length; a > i; i++) t = n[i], t.resolve(e[t.name] ? e[t.name][t.id] :void 0);
(B.env.b_dev_server || B.env.dev_server) && h(e), _r_();
}).fail(function(e) {
_i_("3da:1902"), r.info("Reject", e, n);
for (var t = 0, i = n.length; i > t; t++) n[t].reject();
_r_();
}), _r_();
}, c = function(e, r) {
if (_i_("3da:751"), !e) throw new Error("Fragment name cannot be undefined.");
return _r_(new t(function(t, c) {
_i_("3da:1903"), clearTimeout(n), 0 === l.length && (i = Date.now()), l.push({
id:"frg-" + s++,
name:e,
args:r,
resolve:t,
reject:c
}), l.length > 1 && Date.now() - i > o || l.length === _ ? d() :n = setTimeout(d, a), _r_();
}));
}, u = function(e) {
_i_("3da:752");
var t = {};
if (e) for (var i in e) if (e.hasOwnProperty(i)) {
var n = e[i];
t[i] = "object" == typeof n ? JSON.stringify(n) :n;
}
return _r_(t);
}, h = function(e) {
_i_("3da:753");
var t = B.require("events"), i = window.B.devTools.trackedExperiments || [], n = {};
i.length;
"object" == typeof e && (B.devTools = B.devTools || {}, i = i.concat(e._exp_debug_data)), window.B.devTools.trackedExperiments = i.reduce(function(e, t, i) {
return _i_("3da:2108"), "undefined" != typeof t && (isNaN(n[t.name]) ? (n[t.name] = e.length, e.push(t)) :e[n[t.name]].name == t.name ? e[n[t.name]].trackingPoints = e[n[t.name]].trackingPoints.concat(t.trackingPoints) :console.warn("ops", e[n[t.name]].name, t.name)), _r_(e);
}, []), t.trigger("TRACKING.exp_tracking_update"), _r_();
}, f = function(e, t) {
return _i_("3da:754"), _r_(c(e, u(t)));
};
return _r_({
call:f
});
}), booking.define("squeak", function() {
"use strict";
_i_("3da:36");
var e = 10, t = !1, i = [], n = {};
function r() {
_i_("3da:338"), i.length ? setTimeout(o, 1e3) :t = !1, _r_();
}
function a(r) {
if (_i_("3da:339"), n.hasOwnProperty(r) || (n[r] = 0), ++n[r] > e) return _r_();
if (i.push(r), t) return _r_();
t = !0, setTimeout(o, 1e3), _r_();
}
function o() {
_i_("3da:340"), $.ajax({
url:"/squeak",
type:"GET",
success:r,
error:r,
data:{
pid:booking.env.pageview_id,
stid:booking.env.b_stid,
sqk:"1:" + i.join(",")
}
}), i = [], _r_();
}
return _r_(a);
}), booking.squeak = booking.require("squeak"), B.define("et_deprecation_warnings", function(e, t, i) {
_i_("3da:37");
var n, r = {
EXP:"exp",
GET_VARIANT:"get_variant",
STAGE:"stage",
GOAL:"goal",
CUSTOM_GOAL:"custom_goal"
}, a = "et_deprecation_warnings_filter", o = [], _ = !1;
try {
_ = window.localStorage && window.sessionStorage ? !0 :!1, _ && window.localStorage.setItem("btest", "1");
} catch (s) {
_ = !1;
}
function l(e) {
_i_("3da:341"), "undefined" != typeof e && _ && localStorage.setItem(a, e), _r_();
}
function d() {
_i_("3da:342");
var e = _ && localStorage.getItem(a), t = e && new RegExp(e);
return _r_(function(e) {
return _i_("3da:1073"), _r_(!t || t.test(e));
});
}
function c(e) {
return _i_("3da:343"), _r_(B.jsdt && "undefined" != typeof B.jsdt[e] && B.jsdt[e]);
}
function u(e) {
return _i_("3da:344"), _r_(e.replace("__hashed", ""));
}
function h(e) {
_i_("3da:345"), o.push(e), _r_();
}
function f() {
_i_("3da:346");
var e = o;
o = [], e.filter(d()).forEach(function(e) {
_i_("3da:1182"), console && console.log(e[0], e[1], e[2], e[3]), _r_();
}), _r_();
}
function p(e) {
_i_("3da:347");
var t = new Error(), i = t.stack && t.stack.split && t.stack.split("\n").map(function(e) {
if (_i_("3da:1904"), "string" == typeof e) {
var t = e.match(/(http[\/\w\.\-\:]*)/);
return _r_(t && t[1] ? t[1] :"");
}
return _r_("");
});
return _r_(i && i[e] ? i[e] :"");
}
function g(e, t, i) {
_i_("3da:348");
var a, o = c(t), _ = u(t), s = [ "%c" + _, "font-weight: bold;" ], l = 0;
e === r.EXP ? (a = o ? "B.track.exp is deprecated. v" + o + " went fullon. Please, cleanup." :"B.track.exp is deprecated, but used for tracking. Please use B.et.track instead.", l = 1) :e === r.GET_VARIANT ? (a = o ? "B.track.getVariant is deprecated. v" + o + " of went fullon. Please, cleanup." :"B.track.getVariant method is deprecated, but used for tracking. Please, use B.et.track instead.", l = 2) :e === r.STAGE ? (a = o ? "B.track.stage is deprecated. v" + o + " went fullon. Please, cleanup." :"B.track.stage method is deprecated, but used for tracking. Please, use B.et.stage instead.", l = 3) :e === r.GOAL ? (a = "B.track.goal method is deprecated, but used for tracking. Please, use B.et.goal instead.", l = 4) :e === r.CUSTOM_GOAL && (a = o ? "B.track.custom_goal is deprecated. v" + o + " went fullon. Please, cleanup." :"B.track.custom_goal method is deprecated, but used for tracking. Please, use B.et.customGoal instead.", l = 5), a && (s.push(a), s.push(p(4)), h(s)), n && window.clearTimeout(n), B && B.env && B.env.b_dev_server && (n = window.setTimeout(f, 1e3)), B && "function" == typeof B.reportError && B.et && "function" == typeof B.et.customGoal && (B.reportError(new Error("Deprecated B.track was used (method: " + e + ") for test " + t)), B.et.customGoal("VKcAdRWSEFQBBTcO", l)), _r_();
}
t.DEPRECATED = r, t.showDeprecationWarning = g, t.setFilter = l, _r_();
}), function(e, t, i) {
_i_("3da:38");
var n, r = "experiments", a = "startup", o = "experiments_load", _ = "startup_load", s = t.env, l = s && s.b_site_type_id || "", d = i(document), c = s && s.reportJSTracking || !1, u = function(e) {
return _i_("3da:755"), _r_("function" == typeof e);
}, h = function(e) {
_i_("3da:756");
var i = "b_site_experiment_" + e, n = t.jst && t.jst[e] > 0;
return _r_(i in s && +s[i] > 0 || n);
};
if (B.env.et_deprecation_warnings) var f = B.require("et_deprecation_warnings").showDeprecationWarning, p = B.require("et_deprecation_warnings").DEPRECATED;
var g = t.require("request_info");
t.ensureNamespaceExists(r), t.ensureNamespaceExists(a), t.ensureNamespaceExists(o), t.ensureNamespaceExists(_), n = t[a], n.init = function(e) {
_i_("3da:757");
var n, l, d, c, f, p, g, m, v, b, y, w, k, C = [], S = 9, x = "ready" === e;
if (t.env.b_inc_filters) {
var B = t.env.b_inc_filters;
for (var E in B) {
var M = B[E];
for (var T in M) t.jst[T] = M[T];
}
}
n = x ? r :o, d = t[n];
for (var N in d) {
if (t.b_disable_run && isNaN(s["b_site_experiment_" + N]) && t.jst && void 0 === t.jst[N]) continue;
d[N] && C.push([ d[N].priority || S, N, n, !h(N) ]);
}
l = x ? a :_, c = t[l];
for (f in c) b = c[f], C.push([ b.priority || S, f, l, !1 ]);
if (C.length > 0) for (C.sort(), w = 0, k = C.length; k > w; w += 1) p = C[w], g = p[1], m = p[2], b = t[m][g], i.extend(b, {
strings:t.strings
}), v = p[3] ? b.initElse :b.init, b.ns = "booking." + m, b.name = g, u(v) && setTimeout(function(e, t, i) {
return _i_("3da:2871"), _r_(function() {
_i_("3da:2955"), y = e.execute(t, i), y === !0 && (i.init = i.initElse = null), _r_();
});
}(this, v, b), 0);
i(document).trigger(e + ":finished"), _r_();
}, n.execute = function(e, t) {
return _i_("3da:758"), _r_(e.call(t));
}, s.amTracking = [], function() {
_i_("3da:759");
var n = 20, r = Object.prototype.toString, a = Array.prototype.slice, o = i(e), _ = i(document), d = function(e) {
_i_("3da:1905");
var t, n = e.offset(), r = "function" == typeof n.constructor ? n.constructor :{
name:"OtherConstructor"
};
if ("ClientRect" === r.name) {
if (t = i(e.trackingSelector).eq(0).offset()) return _r_(t.top);
return _r_(!1);
}
return _r_(n.top);
}, u = function(e) {
_i_("3da:1906");
var t = d(e);
if (t === !1) return _r_(!1);
return _r_(o.scrollTop() + o.height() > t + n && e.is(":visible"));
}, h = function(e, t) {
_i_("3da:1907");
try {
o.trigger(e, t);
} catch (i) {}
_r_();
}, m = {
css:jQuery.fn.css,
show:jQuery.fn.show,
hide:jQuery.fn.hide,
toggle:jQuery.fn.toggle
}, v = {
show:/block|inline|list-item|inline-block/,
hide:/none/
};
jQuery.fn.css = function(e, t) {
_i_("3da:1908");
var i = m.css.apply(this, a.apply(arguments));
return this.selector && ("undefined" != typeof t && "display" === e ? h("ELEMENT_DISPLAY:" + this.selector, {
elem:this,
value:t
}) :"[object Object]" === r.apply(e) && "display" in e && h("ELEMENT_DISPLAY:" + this.selector, {
elem:this,
value:e.display
})), _r_(i);
}, i.each("show hide toggle".split(" "), function(e, t) {
_i_("3da:1909"), jQuery.fn[t] = function() {
_i_("3da:2622");
var e = m[t].apply(this, a.apply(arguments));
return this.selector && h("ELEMENT_DISPLAY:" + this.selector, {
elem:this,
value:this.css("display")
}), _r_(e);
}, _r_();
});
var b, y, w, k, C, S = [], x = [], E = [], M = [], T = {}, N = s.b_action || "fixme";
k = function() {
_i_("3da:1910"), C = !1, _r_();
}, y = function() {
_i_("3da:1911");
var n, r, a = "", _ = "";
if (b = !1, C || t.sending_logo) return b = setTimeout(y, 50), _r_();
if (S.length > 0 || x.length > 0 || E.length > 0 || M.length > 0) {
if (C = !0, o.trigger("ClickTale:TrackDynamic", {
experiments:S
}), n = x.length ? ";what=" + x.join(",") :"", E.length) {
a = ";custom=";
for (var d = 0, u = E.length; u > d; d++) a += E[d].join("|"), u > d + 1 && (a += ",");
}
if (M.length) {
_ = ";stage=";
for (var d = 0, u = M.length; u > d; d++) _ += M[d].join("|"), u > d + 1 && (_ += ",");
}
g.populate(S), g.populate(M.map(function(e) {
return _i_("3da:2872"), _r_(e.join("|"));
}));
var h = "/js_tracking?ver=1" + n + a + _ + ";ref_action=" + N + ";sid=" + s.b_sid + ";aid=" + s.b_aid + ";lang=" + s.b_lang_for_url + ";new=1;pid=" + s.pageview_id + ";exps=" + S.join(",") + ";stype=" + l;
try {
i.ajax({
url:h,
async:!0,
type:"GET",
complete:k
});
} catch (f) {
r = new Image(), r.onload = r.onerror = k, r.src = h, c && (c = !1, e.onerror("3rd_js_tracking_report: " + h, h, 1));
}
B.devTools && B.devTools.trackedExperimentsFilter && B.eventEmitter.trigger("TRACKING.js_exp_tracking_request", {
exps:S,
jsGoals:x,
jsCustomGoals:E,
jsStages:M
}), s.b_js_tracking_info_to_console && e.console && (S.length && e.console.info("JS exp tracking triggered: " + S.join(", ")), x.length && e.console.info("JS goal tracking triggered: " + x.join(", ")), E.length && e.console.info("JS custom goal tracking triggered: " + E.join(", ")), M.length && e.console.info("JS stage tracking triggered: " + M.join(", "))), S = [], x = [], E = [], M = [];
}
_r_();
}, w = function(n, r, a) {
if (_i_("3da:1912"), "undefined" == typeof n || null === n || "bot" === s.b_browser) return _r_();
var o, _, l, d, c, u = i.isArray(n) ? n :n.split && n.length ? n.split(",") :[], h = t.env.js_experiment_tracking || {};
if (u.length && !isNaN(a)) {
if (1 > a || a > 9) return _r_();
c = u[0], d = t.jst && "undefined" != typeof t.jst[c] && t.jsdt && !t.jsdt[c];
var g = c + ":stage" + a;
d && "undefined" == typeof s.amTracking[g] && (n = !0, M.push([ c, a ]), s.amTracking[g] = 1), a = void 0, u.length = 0;
}
for (o = 0, _ = u.length; _ > o; o += 1) c = u[o], t.checkExpTagHashed && t.checkExpTagHashed(c), B.env.et_deprecation_warnings && f(p.EXP, c), d = t.jst && "undefined" != typeof t.jst[c] && t.jsdt && !t.jsdt[c], l = (isNaN(+c) && h ? h[c] :c) || (d ? c :!1), (/^[0-9]+$/.test(l) || d) && "undefined" == typeof s.amTracking["e" + l] && (S.push(l), s.amTracking["e" + l] = 1);
if (r && (a || "undefined" != typeof s.amTracking["g" + r] || (x.push(r), s.amTracking["g" + r] = 1), !a || T[r] && T[r][a] || (E.push([ r, a ]), T[r] || (T[r] = []), T[r][a] = 1)), n !== !0 && !S.length) return _r_(!1);
h && h.njst && /^[0-9]+$/.test(h.njst) && "undefined" == typeof s.amTracking["e" + h.njst] && (S.push(h.njst), s.amTracking["e" + h.njst] = 1), b && (e.clearTimeout(b), b = !1), b = e.setTimeout(y, 50), _r_();
}, t.track = {
exp:w,
stage:function(e, i) {
if (_i_("3da:2263"), !e || 0 > +i || +i > 9 || isNaN(t.jst[e]) || t.jsdt[e]) return _r_(!0);
return w(e, void 0, i), _r_(!0);
},
goal:function(e) {
if (_i_("3da:2264"), B.env.et_deprecation_warnings && f(p.GOAL, e), !e) return _r_();
w(!0, e), _r_();
},
custom_goal:function(e, i) {
if (_i_("3da:2265"), B.env.et_deprecation_warnings && f(p.CUSTOM_GOAL, e, i), !e || 1 > +i || +i > 5 || isNaN(t.jst[e]) || t.jsdt[e]) return _r_();
w(!0, e, i), _r_();
},
getVariant:function(e) {
if (_i_("3da:2266"), t.checkExpTagHashed && t.checkExpTagHashed(e), B.env.et_deprecation_warnings && f(p.GET_VARIANT, e), e && t.jst && !isNaN(t.jst[e])) return _r_(t.jst[e]);
return _r_(!1);
},
onView:function(e) {
_i_("3da:2267");
var n = i(e).eq(0), _ = this.exp, s = this.stage;
n.trackingSelector = e;
var l = function() {
_i_("3da:2793");
var _ = a.apply(arguments), s = _.shift(), l = i.proxy(function() {
_i_("3da:2976");
var a;
u(n) && (a = "ONVIEW:" + ("[object String]" === r.apply(e) ? e :i(e).selector), o.trigger(a, {
source:e
}), s.apply(t.track, this.args), o.unbind("resize scroll", l)), _r_();
}, {
args:_
});
n.length && ("none" === n.css("display") && n.css({
display:"block",
visibility:"hidden"
}), o.bind("resize scroll", l), l()), _r_();
};
return _r_({
exp:function() {
_i_("3da:2873");
var e = a.apply(arguments);
e.unshift(_), l.apply(t.track, e), _r_();
},
stage:function() {
_i_("3da:2874");
var e = a.apply(arguments);
e.unshift(s), l.apply(t.track, e), _r_();
}
});
},
onNav:function() {
return _i_("3da:2268"), _r_({
exp:function() {},
stage:function() {}
});
}
}, i.each("blur change click dblclick mouseover mouseout".split(" "), function(e, n) {
_i_("3da:1913");
var r = n.slice(0, 1), o = n.replace(r, r.toUpperCase());
t.track[n] = t.track["on" + o] = function(e) {
_i_("3da:2724");
var r = i(e), o = function() {
_i_("3da:2940");
var e = a.apply(arguments), o = e.shift(), _ = i.proxy(function() {
_i_("3da:3009"), o.apply(t.track, this.args), r.unbind(n, _), _r_();
}, {
args:e
});
r.bind(n, _), _r_();
};
return _r_({
exp:function() {
_i_("3da:2956");
var e = a.apply(arguments);
e.unshift(t.track.exp), o.apply(t.track, e), _r_();
},
stage:function() {
_i_("3da:2957");
var e = a.apply(arguments);
e.unshift(t.track.stage), o.apply(t.track, e), _r_();
}
});
}, t.track["live" + o] = function(e) {
_i_("3da:2623");
var r = function() {
_i_("3da:2912");
var r = a.apply(arguments), o = r.shift(), s = i.proxy(function() {
_i_("3da:3003"), o.apply(t.track, this.args), _.undelegate(e, n, s), _r_();
}, {
args:r
});
_.delegate(e, n, s), _r_();
};
return _r_({
exp:function() {
_i_("3da:2941");
var e = a.apply(arguments);
e.unshift(t.track.exp), r.apply(t.track, e), _r_();
},
stage:function() {
_i_("3da:2942");
var e = a.apply(arguments);
e.unshift(t.track.stage), r.apply(t.track, e), _r_();
}
});
}, _r_();
}), i.each("show hide".split(" "), function(e, n) {
_i_("3da:1914"), t.track[n] = function(e) {
_i_("3da:2624");
var r = i(e);
if (!r.selector) return _r_({
exp:function() {},
stage:function() {}
});
var _ = function() {
_i_("3da:2913");
var e = a.apply(arguments), _ = e.shift(), s = i.proxy(function(e, i) {
_i_("3da:3004"), v[n].test(i.value) && (i.elem.selector === r.selector || 1 === r.length && i.elem[0] === r[0]) && (_.apply(t.track, this.args), o.unbind("ELEMENT_DISPLAY:" + r.selector, s)), _r_();
}, {
args:e
});
o.bind("ELEMENT_DISPLAY:" + r.selector, s), _r_();
};
return _r_({
exp:function() {
_i_("3da:2943");
var e = a.apply(arguments);
e.unshift(t.track.exp), _.apply(t.track, e), _r_();
},
stage:function() {
_i_("3da:2944");
var e = a.apply(arguments);
e.unshift(t.track.stage), _.apply(t.track, e), _r_();
}
});
}, _r_();
}), i.each("blur change click dblclick mouseover mouseout".split(" "), function(e, n) {
_i_("3da:1915");
var r = "[data-track-on-" + n + "]", a = function() {
_i_("3da:2625"), t.track.exp.call(t.track, i(this).data("track-on-" + n) + ""), _r_();
};
_.delegate(r, n, a), _r_();
});
var A = {
mouseenter:"hover",
click:"click"
};
_.on("click mouseenter mouseleave", "[data-google-track]", function(e) {
_i_("3da:1916");
var n = (i(this).data("google-track") || "").split("/");
n[0].toLowerCase() === A[e.type] && t.google.trackEvent.apply(t.google, n), _r_();
}), B.env.b_new_ga_track || _.delegate("[data-ga-track]", "click", function(e) {
_i_("3da:2269");
var n = (i(this).data("ga-track") || "").split(":");
n[0].toLowerCase() === A[e.type] && t.google.trackPageview.apply(t.google, n), _r_();
}), _r_();
}(), s.trackExperiment = function() {
_i_("3da:760"), t.track.exp.apply(this, Array.prototype.slice.apply(arguments)), _r_();
}, i(function() {
_i_("3da:761"), d.trigger("ready:before"), t[a].init("ready"), _r_();
}), i(e).on("load", function() {
_i_("3da:762"), t[a].init("load"), _r_();
}), t.run = function(e) {
return _i_("3da:763"), _r_({
afterReady:function(e) {
_i_("3da:2109"), this.onReady(function() {
_i_("3da:2725"), d.bind("ready:finished", e), _r_();
}), _r_();
},
onReady:function(i) {
_i_("3da:2110"), t[a][e] = {
priority:9,
init:i
}, _r_();
},
onLoad:function(i) {
_i_("3da:2111"), t[_][e] = {
priority:9,
init:i
}, _r_();
}
});
}, t.runExp = function(e) {
return _i_("3da:764"), _r_({
beforeReady:function(e) {
_i_("3da:2112"), d.bind("ready:before", e), _r_();
},
afterReady:function(e) {
_i_("3da:2113"), this.onReady(function() {
_i_("3da:2726"), d.bind("ready:finished", e), _r_();
}), _r_();
},
onReady:function(i) {
_i_("3da:2114"), t[r][e] = {
priority:9,
init:i
}, _r_();
},
afterLoad:function(e) {
_i_("3da:2115"), this.onLoad(function() {
_i_("3da:2727"), d.bind("load:finished", e), _r_();
}), _r_();
},
onLoad:function(i) {
_i_("3da:2116"), t[o][e] = {
priority:9,
init:i
}, _r_();
}
});
}, t.env.b_occupancy = function() {
_i_("3da:1074");
var e, i, n, r, a = t.env.b_group, o = 0, _ = 0, s = {
adults:2,
children:0,
guests:2
};
if ("[object Array]" !== Object.prototype.toString.apply(a)) return _r_(s);
if (i = a.length, n = a[0], r = i > 1 || 1 === i && (1 === n.guests || n.guests > 2 || n.children > 0), !r) return _r_(s);
for (e = 0; i > e; e += 1) n = a[e], o += n.guests, _ += n.children;
return _r_({
adults:o,
children:_,
guests:o + _
});
}(), t.eventEmitter = i(e), e.sNSExperiments = r, e.sNSStartup = a, e.sNSExperimentsLoad = o, e.sNSStartupLoad = _, _r_();
}(window, window.booking, window.jQuery), B.define("component", function() {
"use strict";
_i_("3da:39");
function e() {}
return e.prototype.prepare = function(e) {
_i_("3da:765");
for (var t in e) e.hasOwnProperty(t) && (this[t] = e[t]);
_r_();
}, e.prototype.init = function() {}, e.prototype.destroy = function() {}, e.prototype.render = function() {}, e.extend = function(t, i) {
_i_("3da:769");
var n = function() {}, r = i ? new i() :new e();
for (var a in t) t.hasOwnProperty(a) && (r[a] = t[a]);
return n.prototype = r, n.extend = function(t) {
return _i_("3da:1918"), _r_(e.extend.call(null, t, n));
}, _r_(n);
}, _r_(e);
}), B.define("component/legacy", function(e, t, i) {
"use strict";
_i_("3da:40");
var n = {};
function r(e, t) {
_i_("3da:350"), t.legacy = !0, B.define("component/" + e, function() {
return _i_("3da:1183"), _r_(t);
}), _r_();
}
function a(e, t, i) {
_i_("3da:351");
var r = B.require("component/" + e);
if (!r.legacy) throw new Error("Illegal legacy B.components.require of non-legacy component " + e + ".");
var a = t ? t.data("component-instance-" + e) :n[e];
return (i || void 0 === a) && (a = "function" == typeof r ? new r(B, $) :library[e], i || (t ? t.data("component-instance-" + e, a) :n[e] = a, a.init && a.init(t))), _r_(a);
}
function o(e) {
_i_("3da:352");
for (var t, i = 1, n = arguments.length; n > i; i++) t = a(arguments[i], void 0, !0), t.extend ? t.extend(e) :$.extend(e, t);
_r_();
}
function _(e, t) {
_i_("3da:353");
var i = a(t, void 0, !0);
$.extend(e, i, {
parent:i
}), _r_();
}
t.register = function(e) {
_i_("3da:770"), e.components = e.components || {}, e.components.define = r, e.components.extend = o, e.components.inherit = _, e.components.require = a, _r_();
}, _r_();
}), B.define("component/loader", function(e, t, i) {
"use strict";
_i_("3da:41");
var n = e("jquery");
function r(t, i) {
_i_("3da:354");
var r = e("component/" + t), a = i.data("component-instance-" + t);
return void 0 === a && (r.legacy ? (a = new r(B, n), a.init && a.init(i)) :(a = new r(), a.prepare({
el:i[0],
$el:i
}), a.init && a.init()), i.data("component-instance-" + t, a)), _r_(a);
}
function a(e, t) {
_i_("3da:355"), setTimeout(r.bind(null, e, t), 4), _r_();
}
function o(e) {
if (_i_("3da:356"), 0 == this.length) throw new Error("No element found with selector, unable to look for component.");
if (1 != this.length) throw new Error("Multiple elements found with selector, refusing to look for component.");
return _r_(r(e, this));
}
function _() {
return _i_("3da:357"), t.loadComponents(this), e("et").initAttributesTracking(this), _r_(this);
}
t.loadComponents = function(e) {
_i_("3da:771");
var t, i, r, o, _, s, l;
e = e || n("html");
var _ = e.find("[data-component]");
for (e.is("[data-component]") && (_ = e.length > 1 ? _.add(e) :_.add(e.filter("[data-component]"))), t = 0, r = _.length; r > t; t++) for (s = _.eq(t), l = n.trim(s.attr("data-component")).split(/\s+/g), i = 0, o = l.length; o > i; i++) a(l[i], s);
_r_();
}, t.getComponent = function(e, t) {
_i_("3da:772");
var i, r = n(e);
if (t && r.data("component-instance-" + t)) return _r_(r.data("component-instance-" + t));
return i = r.attr("data-component"), _r_(i ? r.data("component-instance-" + i) :null);
}, t.registerJQuery = function() {
_i_("3da:773"), n.fn.component = o, n.fn.loadComponents = _, _r_();
}, _r_();
}), function(e, t) {
"use strict";
_i_("3da:42");
var i = e.require("component/loader"), n = e.require("component/legacy");
i.registerJQuery(), n.register(e), window.sNSStartup && e[sNSStartup] ? e[sNSStartup].bComponents = {
priority:100,
init:i.loadComponents
} :t(function() {
_i_("3da:1184"), i.loadComponents(), _r_();
}), _r_();
}(booking, jQuery), function() {
_i_("3da:43");
var e = B.require("jquery");
booking[sNSStartup].popups = {
priority:9,
popups:[],
tempTar:null,
sizes:{
s:{
width:300,
height:400
},
m:{
width:400,
height:400
},
l:{
width:600,
height:580
},
xl:{
width:850,
height:600
}
},
init:function() {
_i_("3da:1185");
var t = this;
e(document).on("click.popup_win", ".popup_s, .popup_m, .popup_l, .popup_xl", function() {
_i_("3da:2270");
for (var i = "l", n = e(this).attr("class").split(" "), r = 0; r < n.length; r++) n[r].indexOf("popup_") > -1 && (i = n[r].split("_")[1]);
return t.tempTar = e(this).attr("href") || e(this).data("url"), t.openPopup(i), _r_(!1);
}), _r_();
},
openPopup:function(e) {
_i_("3da:1186");
var t = this.sizes[e];
this.popups.push(window.open(this.tempTar, "", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=" + t.width + ",height=" + t.height + ",left=200,top=200")), this.popups.length > 1 && (this.popups[0].close(), this.popups.shift(), this.tempTar = null), _r_();
}
}, _r_();
}(), B.define("component/fragment", function(e, t, i) {
_i_("3da:44");
var n = e("component"), r = e("fragment"), a = e("events"), o = e("when"), _ = e("et");
i.exports = n.extend({
fragmentName:void 0,
fragmentTemplate:void 0,
fragmentIsCS:void 0,
fragmentArgs:{},
init:function() {
_i_("3da:1678");
var e = void 0 !== this.$el.attr("data-fragment-lazy"), t = this.$el.attr("data-fragment-event") || !1;
e ? (this._fragmentId = this.$el.attr("id"), this._fragmentOnActivateFragment = this._fragmentOnActivateFragment.bind(this), a.on("ACTIVATE_FRAGMENT", this._fragmentOnActivateFragment)) :t ? this._loadWithWhen(t) :this.fragmentLoadFragment(), _r_();
},
_fragmentOnActivateFragment:function(e) {
_i_("3da:1679"), e && e.id && e.id === this._fragmentId && (a.off("ACTIVATE_FRAGMENT", this._fragmentOnActivateFragment), this.fragmentLoadFragment()), _r_();
},
_loadWithWhen:function(e) {
_i_("3da:1680"), o({
events:e
}).run(function() {
_i_("3da:2728"), this.fragmentLoadFragment(), _r_();
}.bind(this)), _r_();
},
fragmentParamAttrs:function() {
_i_("3da:1681");
for (var e, t, i = {}, n = this.el.attributes, r = 0, a = n.length; a > r; r++) e = n[r], t = e.nodeName, t && t.length > 5 && 0 === t.indexOf("data-param-") && (i[t.slice(11)] = e.nodeValue);
return _r_(i);
},
fragmentLoadFragment:function() {
_i_("3da:1682");
var e = this.fragmentParamAttrs(), t = this.$el.attr("data-fragment-source"), i = this.$el.attr("data-fragment-name");
void 0 === i && (i = this.fragmentName);
var n, r, a = this.$el.attr("data-fragment-tmpl"), o = this.$el.attr("data-fragment-cs-tmpl");
void 0 !== a && void 0 !== o && B.env.b_is_dev_server && console.error("Fragment component cannot have both `fragment-tmpl` and `fragment-cs-tmpl` defined."), void 0 !== a ? (r = a, n = !1) :void 0 !== o ? (r = o, n = !0) :(r = this.fragmentTemplate, n = this.fragmentIsCS);
var _ = Object.assign({}, this.fragmentArgs, e), s = {
soruce:t,
tmpl:r,
isCS:n,
args:_
};
if (!1 !== this.fragmentBeforeRequest(s)) {
_ = s.args, !n && r && (_.tmpl = r);
var l = this;
this.fragmentRequest(i, _).then(function(e) {
_i_("3da:2729");
var i = {
source:t,
data:e,
ctx:{},
args:_
};
if (!1 !== l.fragmentBeforeRender(i) && r) {
var a;
a = n ? B.jstmpl(r).render(Object.assign(i.ctx, i.data ? {
data:i.data
} :{})) :i.data || "", i.$targetEl ? i.$targetEl.html(a) :l.$el.html(a), l.fragmentAfterRender(i);
}
_r_();
}, function(e) {
_i_("3da:2730");
var i = {
source:t,
error:e
};
l.fragmentRequestError(i), _r_();
});
}
_r_();
},
fragmentRequest:function(e, t) {
return _i_("3da:1683"), _r_(r.call(e, t));
},
fragmentBeforeRequest:function() {},
fragmentRequestError:function() {},
fragmentBeforeRender:function() {},
fragmentAfterRender:function() {
_i_("3da:1687"), _.initAttributesTracking(this.$el), this.$el.loadComponents && this.$el.loadComponents(), _r_();
}
}), _r_();
}), B.define("peripheral-detection", function(e, t, i) {
_i_("3da:45");
var n = e("jquery"), r = e("events"), a = n(window), o = null, _ = 0, s = null, l = {
EVENT_DISPLAY_PORTRAIT:"PeripheralDetection:DISPLAY_PORTRAIT",
EVENT_DISPLAY_LANDSCAPE:"PeripheralDetection:DISPLAY_LANDSCAPE",
EVENT_DISPLAY_ORIENTATION_CHANGED:"PeripheralDetection:DISPLAY_ORIENTATION_CHANGED",
EVENT_DISPLAY_HIGH_DENSITY:"PeripheralDetection:DISPLAY_HIGH_DENSITY",
EVENT_DISPLAY_RETINA_LIKE:"PeripheralDetection:DISPLAY_RETINA_LIKE",
EVENT_TOUCH:"PeripheralDetection:TOUCH",
EVENT_MOUSE:"PeripheralDetection:MOUSE",
EVENT_WHEEL:"PeripheralDetection:WHEEL",
init:function() {
if (_i_("3da:1187"), this.__running) return _r_();
o = c(), d(o), a.on("orientationchange", u), h() && d(l.EVENT_DISPLAY_HIGH_DENSITY), f() && d(l.EVENT_DISPLAY_RETINA_LIKE), a.on("touchstart touchmove", p), a.on("mousemove", g), a.on("wheel mousewheel", v), this.__running = !0, _r_();
}
};
function d(e, t) {
_i_("3da:358"), r.trigger(e, t), _r_();
}
function c() {
return _i_("3da:359"), _r_(a.height() > a.width() ? l.EVENT_DISPLAY_PORTRAIT :l.EVENT_DISPLAY_LANDSCAPE);
}
function u() {
_i_("3da:360"), a.off("orientationchange", u), setTimeout(function() {
_i_("3da:1188");
var e = c();
d(l.EVENT_DISPLAY_ORIENTATION_CHANGED, {
oldOrientation:o,
newOrientation:e
}), o = e, _r_();
}, 1e3), _r_();
}
function h() {
return _i_("3da:361"), _r_(window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 1.3), (min-resolution: 124.8dpi)").matches || !window.matchMedia && window.devicePixelRatio && window.devicePixelRatio >= 1.3);
}
function f() {
return _i_("3da:362"), _r_(window.matchMedia && window.matchMedia("(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)").matches || !window.matchMedia && window.devicePixelRatio && window.devicePixelRatio >= 2);
}
function p() {
_i_("3da:363"), d(l.EVENT_TOUCH), a.off("touchstart touchmove", p), _r_();
}
function g() {
_i_("3da:364"), clearTimeout(s), _++, _ > 30 && m(), s = setTimeout(function() {
_i_("3da:1688"), _ = 0, _r_();
}, 500), _r_();
}
function m() {
_i_("3da:365"), d(l.EVENT_MOUSE), a.off("mousemove", g), _r_();
}
function v() {
_i_("3da:366"), m(), d(l.EVENT_WHEEL), a.off("wheel mousewheel", v), _r_();
}
i.exports = l, _r_();
}), booking.components.define("sh", function(e, t) {
"use strict";
_i_("3da:46");
var i = "SH", n = t(window);
function r(t) {
_i_("3da:367"), t.map(function(t) {
_i_("3da:1189"), e.eventEmitter.triggerHandler(i + ":" + t), _r_();
}), _r_();
}
function a(e) {
return _i_("3da:368"), _r_(n.scrollTop() + n.height() > e);
}
this.init = function(e) {
_i_("3da:774");
var i = e.offset().top, o = function() {
_i_("3da:1919"), a(i) && (r([ "seen" ]), n.unbind("scroll", o)), _r_();
};
n.bind("scroll", o), e.delegate(".lp-search-history-list-item", "click", function(e) {
_i_("3da:1920");
var i = t(this), n = i.find(".lp-search-history-list-item-link");
if (!n.length) return _r_();
var a = i.get(0).className.match(/sh-timestamp[^ \n]*/g) || [];
a.push("clicked"), r(a), _r_();
}), e.find(".lp-sh-hide-search").bind("click", function(e) {
_i_("3da:1921"), r([ "removed" ]), _r_();
}), o(), _r_();
}, _r_();
}), B.define("component/company/ga", function(e, t, i) {
_i_("3da:47");
var n = e("component"), r = e("utils"), a = e("ga-tracker");
i.exports = n.extend({
init:function() {
_i_("3da:1689"), this.options = r.nodeData(this.$el), this.options.trackEvents && this.$el.delegate("[data-track-event]", this.options.trackEvents, this.handleDOMEvent.bind(this)), this.options.trackOninit && this.track(this.split(this.options.trackOninit)), this.options.trackOnviewEvents && this.addOnViewElements(this.$el), _r_();
},
addOnViewElements:function(e) {
_i_("3da:1690");
var t = a[this.options.tracker];
e.find("[data-track-event-onview]").each(function(e, i) {
_i_("3da:2731");
var n = $(i);
B.tools.dom.watchIfBlockVisibleInViewport(n, function() {
_i_("3da:2979");
var e = this.split(n.data("track-event-onview"));
this.track.call(this, [ t ].concat(e)), _r_();
}.bind(this)), _r_();
}.bind(this)), _r_();
},
handleDOMEvent:function(e) {
_i_("3da:1691");
var t = a[this.options.tracker];
if (!t) throw new Error("Tracker is not defined: " + this.options.tracker);
var i = ($(e.currentTarget).data("track-event") || "").split(/\s*\/\s*/);
e.type.toLowerCase() === i[0].toLowerCase() && this.track.call(this, [ t ].concat(i.slice(1))), _r_();
},
split:function(e) {
return _i_("3da:1692"), _r_((e || "").split(/\s*\/\s*/));
},
track:function(e) {
_i_("3da:1693"), a.trackEvent.apply(a, e), _r_();
}
}), _r_();
}), B.define("user-left-client", function(e, t, i) {
"use strict";
_i_("3da:48");
var n = e("user-left-tab"), r = e("user-left-store"), a = e("utils/simple-unique-id"), o = "lastSeen";
i.exports = {
enabled:r.enabled,
onHideTab:function(e) {
_i_("3da:1190"), r.set(o, new Date().getTime()), _r_();
},
onShowTab:function(e) {
_i_("3da:1191"), r.set(o, 0), _r_();
},
addEventListeners:function() {
_i_("3da:1192"), this._onShowTab = this.onShowTab.bind(this), this._onHideTab = this.onHideTab.bind(this), n.addListener("show", this._onShowTab), n.addListener("hide", this._onHideTab), _r_();
},
removeEventListeners:function() {
_i_("3da:1193"), this._onShowTab && n.removeListener("show", this._onShowTab), this._onHideTab && n.removeListener("hide", this._onHideTab), _r_();
},
register:function(e) {
_i_("3da:1194"), this.tabId = e + "_" + a(), this.addEventListeners(), _r_();
}
}, _r_();
}), B.define("user-left-master", function(e, t, i) {
_i_("3da:49");
var n = e("event-emitter"), r = e("user-left-tab"), a = e("user-left-store"), o = e("utils/simple-unique-id"), _ = "lastSeen", s = booking.env.bp_has_left_threshold ? booking.env.bp_has_left_threshold :7, l = 1e3, d = "(1) ";
i.exports = n.extend({
enabled:a.enabled,
didUserLeft:function() {
if (_i_("3da:1694"), this.halt) return _r_();
this.checkSessionMarker() || (this.stopCounting(), this.removeEventListeners());
var e = parseInt(a.get(_), 10);
if (!e) return _r_();
var t = new Date().getTime(), i = (t - e) / 1e3;
i >= s && (this.stopCounting(), this.showNotification()), _r_();
},
removeNotification:function() {
_i_("3da:1695"), this.originalFavicon && this.changeFavicon(this.originalFavicon), document.title = this.originalTitle, _r_();
},
changeFavicon:function(e) {
_i_("3da:1696"), this.$favicon && this.$favicon.attr("href", e), _r_();
},
setNotifyFavicon:function(e) {
_i_("3da:1697"), this.$favicon = $('link[rel="shortcut icon"]').first(), this.$favicon.length && (this.originalFavicon = this.$favicon.attr("href"), this.notifyFavicon = e), _r_();
},
setNotificationStatus:function(e) {
_i_("3da:1698"), this.notificationStatus = e === !1 ? !1 :!0, _r_();
},
showNotification:function() {
_i_("3da:1699"), this.notified = !0, this.notificationStatus !== !1 && (this.notifyFavicon && this.changeFavicon(this.notifyFavicon), document.title = d + document.title), _r_();
},
startCounting:function() {
if (_i_("3da:1700"), this.notified) return _r_();
this.halt = !1, this.counterId = setInterval(this.didUserLeft.bind(this), l), _r_();
},
stopCounting:function() {
_i_("3da:1701"), this.halt = !0, clearInterval(this.counterId), _r_();
},
onShowTab:function(e) {
_i_("3da:1702"), this.stopCounting(), a.set(_, 0), this.notified && !this.cameBack && (this.cameBack = !0, this.removeEventListeners(), this.removeNotification(), this.trigger("back")), _r_();
},
onHideTab:function(e) {
_i_("3da:1703"), a.set(_, new Date().getTime()), this.startCounting(), _r_();
},
addEventListeners:function() {
_i_("3da:1704"), this._onShowTab = this.onShowTab.bind(this), this._onHideTab = this.onHideTab.bind(this), r.addListener("show", this._onShowTab), r.addListener("hide", this._onHideTab), _r_();
},
removeEventListeners:function() {
_i_("3da:1705"), this._onShowTab && r.removeListener("show", this._onShowTab), this._onHideTab && r.removeListener("hide", this._onHideTab), _r_();
},
setSessionMarker:function() {
if (_i_("3da:1706"), !booking.browserStorageHandler) return _r_();
booking.browserStorageHandler.addPermanentValue(this.sessionMarkerKey, this.tabId, !1), _r_();
},
checkSessionMarker:function() {
if (_i_("3da:1707"), this.tabId != booking.browserStorageHandler.getPermanentValue(this.sessionMarkerKey, !1)) return _r_(!1);
return _r_(!0);
},
register:function(e, t) {
_i_("3da:1708"), this.originalTitle = document.title, this.tabId = e + "_" + o(), this.sessionMarkerKey = t, this.setSessionMarker(), a.set(_, 0), this.addEventListeners(), _r_();
}
}), _r_();
}), B.define("user-left-store", function(e, t, i) {
"use strict";
_i_("3da:50");
var n = e("jquery");
i.exports = {
enabled:1,
encode:function(e) {
return _i_("3da:1195"), _r_(e);
},
decode:function(e) {
return _i_("3da:1196"), _r_(e);
},
get:function(e) {
return _i_("3da:1197"), _r_(this.decode(n.cookie(e)));
},
set:function(e, t) {
return _i_("3da:1198"), _r_(n.cookie(e, this.encode(t), {
expires:null,
path:"/",
domain:"booking.com"
}));
}
}, _r_();
}), B.define("user-left-tab", function(e, t, i) {
"use strict";
_i_("3da:51");
var n = e("window-visibilitychange"), r = e("event-emitter"), a = r.extend({
init:function() {
_i_("3da:1709"), this.didInit || ($(window).focus(this.show.bind(this)), $(window).blur(this.hide.bind(this)), $(window).bind("load", this.onLoad.bind(this)), n.on("visibilitychange", this.visibilityChange.bind(this)), this.didInit = !0), _r_();
},
visibilityChange:function(e) {
_i_("3da:1710"), n.hidden ? this.emit("hide", e) :this.emit("show", e), _r_();
},
onLoad:function(e) {
_i_("3da:1711"), n.hidden || this.show(e), _r_();
},
show:function(e) {
_i_("3da:1712"), this.emit("show", e), _r_();
},
hide:function(e) {
_i_("3da:1713"), this.emit("hide", e), _r_();
}
});
a.addListener = a.on = function() {
_i_("3da:1075"), a.init(), r.prototype.addListener.apply(a, arguments), _r_();
}, i.exports = a, _r_();
}), B.define("component/popup-open", function(e, t, i) {
_i_("3da:52");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("3da:1714"), this.$el.click(this.click.bind(this)), _r_();
},
click:function(e) {
_i_("3da:1715"), e.preventDefault();
var t = this.$el.attr("href"), i = Math.floor(this.$el.attr("data-width")) || 400, n = Math.floor(this.$el.attr("data-height")) || 400, r = screen.availTop || 0, a = screen.availLeft || 0, o = screen.width / 2 - i / 2 + a, _ = screen.height / 2 - n / 2 + r, s = window, l = "open", d = s[l];
d.call(s, t, "_blank", "width=" + i + ",height=" + n + ",top=" + _ + ",left=" + o + ",toolbar=no,location=no,directories=no,status=no,menubar=no,scrollbars=yes,resizable=yes"), _r_();
}
}), _r_();
}), function(e, t) {
_i_("3da:53"), t.define("core/fly-content-tooltip/fly-content-tooltip", function(e, i, n) {
"use strict";
_i_("3da:775"), n.exports = function() {
_i_("3da:2117");
var i = e("jquery"), n = "data-content-tooltip", r = "data-content-tooltip-element", a = ".js-fly-content-tooltip", o = "fly-content-tooltip--wrap", _ = i.fly.tooltip.extend({
dataAttr:n,
defaults:{
baseClass:"fly-dropdown",
extraClass:"fly-content-tooltip",
hideClass:"fly-dropdown_hidden",
showDelay:100,
hideDelay:100,
arrowSize:5,
content:s
},
init:function() {
_i_("3da:2914");
var e, n = this.handle();
n.attr("data-position-tooltip") && (this.options.position = this.handle().attr("data-position-tooltip")), n.attr("data-position-tooltip-align") && (this.options.positionAlign = this.handle().attr("data-position-tooltip-align")), n.attr("data-extra-class-tooltip") && (this.options.extraClass = this.handle().attr("data-extra-class-tooltip")), i("[data-is-location-sensitive]").length && t.et.stage("adUAVGZWLKVfZfFcAQJO", 2), "book" == t.env.b_action && i(".review-breakdown-tooltip").length && i(".breakdown-has-breakfast-tracker").length && t.et.stage("adUAVGZTQHFcFfFAeFYbEfcWbKWe", 2), "hotel" == t.env.b_action && i(".review-breakdown-tooltip").length && t.et.stage("adUAVGZTQHFcFfFAeFYbEfcWfZZLOLHT", 1), e = n.attr("data-require-tooltip-class"), e && (this.options.requireTooltipClass = e), _r_();
},
timeout:null
});
function s(e) {
_i_("3da:2485");
var t = this.handle().attr(r), n = t ? i(t).html() :this.handle().attr(this.dataAttr);
n && e(l(n)), _r_();
}
function l(e) {
return _i_("3da:2486"), _r_('<div class="' + o + '">' + e + "</div>");
}
return _r_({
flyContentTooltip:_,
init:function(e) {
_i_("3da:2794"), e && (_ = _.extend(e)), e = e || {}, _.delegate(e.delegateTo ? e.delegateTo :a), _r_();
}
});
}(), _r_();
});
var i = {
extraClass:"fly-content-tooltip ge-fly-content-tooltip"
};
t.require([ "require" ], function(e) {
_i_("3da:776"), e("core/fly-content-tooltip/fly-content-tooltip").init(), e("core/fly-content-tooltip/fly-content-tooltip").init({
defaults:i,
dataAttr:"data-ge-fly-tooltip",
delegateTo:".js-fly-content-tooltip[data-ge-fly-tooltip]"
}), _r_();
}), _r_();
}(jQuery, booking), B.define("component/dropdown-onload-shower", function(e, t, i) {
_i_("3da:54");
var n = e("component"), r = e("jquery");
i.exports = n.extend({
init:function() {
if (_i_("3da:1716"), this.isDisabled()) return _r_();
var e = r.fly.dropdown.create(this.$el, {
content:this.getContent(),
position:this.getPosition(),
extraClass:"fly-dropdown--onload-shower " + this.getExtraClass()
});
e.bind(e.events.rootready, function() {
_i_("3da:2487"), e.root().delegate("[data-command]", "click", function() {
_i_("3da:2877"), setTimeout(e.hide.bind(e), 0), _r_();
}), e.bind(e.events.hide, e._destroy.bind(e)), _r_();
}), setTimeout(function() {
_i_("3da:2488"), e.show(), e.root().find(".header-signin-prompt [data-et-view]") && (B.et.initAttributesTracking(e.root()), B.eventEmitter.trigger("GENERAL:layout_changed")), _r_();
}, +this.$el.attr("data-component-delay") || 0), _r_();
},
isDisabled:function() {
_i_("3da:1717");
var e = this.$el.attr("data-component-show-once-key");
if (e) {
if (r.cookie(e)) return _r_(!0);
r.cookie(e, 1);
}
_r_();
},
getExtraClass:function() {
return _i_("3da:1718"), _r_(this.$el.attr("data-component-extra-class") || "");
},
getPosition:function() {
return _i_("3da:1719"), _r_(this.$el.attr("data-component-position"));
},
getContent:function() {
_i_("3da:1720");
var e = this.$el.attr("data-component-content");
return _r_(/^[a-z0-9_]+$/.test(e) ? booking.jstmpl(e).render(booking.env["component/dropdown-onload-shower/" + e]) :e);
}
}), _r_();
}), B.define("component/tt-fancy", function(e, t, i) {
"use strict";
_i_("3da:55");
var n = e("component"), r = {
delay:300,
width:300,
id:"tt-fancy",
content:"",
triggerOn:"hover"
};
i.exports = n.extend({
init:function() {
_i_("3da:1721"), this.domHelper = {}, this._getOptions(), this._createDomNodes(), this._attachEvents(), this.isMouseIn = !1, _r_();
},
_getOptions:function() {
_i_("3da:1722"), $.extend(this, r, {
width:this.$el.data("width"),
id:this.$el.data("id"),
content:this.$el.data("content"),
triggerOn:this.$el.data("trigger")
}), _r_();
},
_createDomNodes:function() {
_i_("3da:1723");
var e = $("#" + this.id);
if (e.length > 0) this.domHelper = {
$parent:e,
$content:e.find(".tt-fancy-content"),
$pointer:e.find(".tt-fancy-pointer")
}; else {
var t = $('<div class="tt-fancy-pointer"></div>'), i = $('<div class="tt-fancy-content"></div>');
this.domHelper = {
$parent:$('<div id="' + this.id + '" style="width: ' + this.width + 'px;" class="tt-fancy-holder tt-fancy-holder--hidden"></div>').prepend(t).append(i).appendTo(document.body),
$pointer:t,
$content:i
};
}
_r_();
},
_attachEvents:function() {
switch (_i_("3da:1724"), this.triggerOn) {
case "textSelect":
var e = this;
e.$el.bind("mouseup.fancyTT", function() {
_i_("3da:2732");
var t = $.trim(e._getSelectedText()), i = $.trim(e.$el.text());
t && i.search && i.search(t) > -1 && (e._showTT.call(e), setTimeout(function() {
_i_("3da:2980"), $("body").on("mouseup.fancyTTclose", function() {
_i_("3da:3016"), e._hideTT.call(e), $("body").off("mouseup.fancyTTclose"), _r_();
}), _r_();
}, 200)), _r_();
});
break;

case "hover":
default:
this.$el.bind("mouseenter.fancyTT", $.proxy(this._showTT, this)).bind("mouseleave.fancyTT", $.proxy(this._hideTT, this));
}
_r_();
},
_showTT:function() {
_i_("3da:1725");
var e = this;
e.isMouseIn = !0, setTimeout(function() {
_i_("3da:2489"), e.isMouseIn && (e.domHelper.$content.html(e.content), e._position_tt(), e.domHelper.$parent.css({
display:"block"
}), setTimeout(function() {
_i_("3da:2945"), e.domHelper.$parent.removeClass("tt-fancy-holder--hidden"), B.events.trigger("TT-Fancy:show"), _r_();
}, 10)), _r_();
}, this.delay), _r_();
},
_hideTT:function() {
_i_("3da:1726"), this.isMouseIn = !1, this.domHelper.$parent.css({
display:"none"
}).addClass("tt-fancy-holder--hidden"), B.events.trigger("TT-Fancy:hide"), _r_();
},
_position_tt:function() {
_i_("3da:1727");
var e = $(window).width(), t = this.$el, i = this.width && "number" == typeof this.width, n = (i ? this.width :this.domHelper.$parent.width()) / 2, r = t.offset().left + t.outerWidth() / 2, a = t.offset().top + t.outerHeight() + 7, o = r - n, _ = 15, s = "auto", l = !1;
r + n > e ? (o = "auto", s = _, l = !0, this.domHelper.$pointer.css({
right:e - r - _ - 6 + "px",
left:"auto"
})) :_ > r - n && (o = _, s = "auto", l = !0, this.domHelper.$pointer.css({
left:r - _ + "px",
right:"auto"
})), this.domHelper.$parent.css({
left:o,
right:s,
top:a
}), l || this.domHelper.$pointer.attr("style", ""), _r_();
},
_getSelectedText:function() {
_i_("3da:1728");
var e = "";
return "undefined" != typeof window.getSelection ? e = window.getSelection().toString() :"undefined" != typeof document.selection && "Text" == document.selection.type && (e = document.selection.createRange().text), _r_($.trim(e));
}
}), _r_();
}), B.define("hijri-calendar", function() {
_i_("3da:56");
var e = 10631 / 30, t = 1948084, i = .1335, n = [ "ar_islamic_calendar_muharram", "ar_islamic_calendar_safar", "ar_islamic_calendar_rabiul_awwal", "ar_islamic_calendar_rabiul_akhir", "ar_islamic_calendar_jumadal_ula", "ar_islamic_calendar_jumadal_ukhra", "ar_islamic_calendar_rajab", "ar_islamic_calendar_shaban", "ar_islamic_calendar_ramadan", "ar_islamic_calendar_shawwal", "ar_islamic_calendar_dhul_qaadah", "ar_islamic_calendar_dhul_hijjah" ];
function r(r) {
_i_("3da:369");
var a = r.day, o = r.month, _ = r.year, s = o + 1, l = _;
3 > s && (l -= 1, s += 12);
var d = Math.floor(l / 100), c = 2 - d + Math.floor(d / 4);
1583 > l && (c = 0), 1582 === l && (s > 10 && (c = -10), 10 == s && (c = 0, a > 4 && (c = -10)));
var u = Math.floor(365.25 * (l + 4716)) + Math.floor(30.6001 * (s + 1)) + a + c - 1524;
c = 0, u > 2299160 && (d = Math.floor((u - 1867216.25) / 36524.25), c = 1 + d - Math.floor(d / 4));
var h = u + c + 1524, f = Math.floor((h - 122.1) / 365.25), p = Math.floor(365.25 * f), g = Math.floor((h - p) / 30.6001);
a = h - p - Math.floor(30.6001 * g), o = g - 1, g > 13 && (f += 1, o = g - 13), _ = f - 4716;
var m = u - t, v = Math.floor(m / 10631);
m -= 10631 * v;
var b = Math.floor((m - i) / e), y = 30 * v + b;
m -= Math.floor(b * e + i);
var w = Math.floor((m + 28.5001) / 29.5);
13 == w && (w = 12);
var k = m - Math.floor(29.5001 * w - 29), C = {
gregorian_day:a,
gregorian_month:o - 1,
gregorian_year:_,
julian_day:u - 1,
hijri_day:k,
hijri_month:w - 1,
hijri_year:y,
hijri_month_tag:n[w - 1]
};
return _r_(C);
}
var a = "1" === $.cookie("hijri_enabled") ? !0 :!1, o = B.env.b_hijri_calendar_available;
return _r_({
enable:function() {
_i_("3da:1076"), o && !a && (a = !0, $.cookie("hijri_enabled", 1), B.eventEmitter.trigger("CALENDAR:hijri_enabled")), _r_();
},
disable:function() {
_i_("3da:1077"), o && a && (a = !1, $.cookie("hijri_enabled", 0), B.eventEmitter.trigger("CALENDAR:hijri_disabled")), _r_();
},
enabled:function() {
return _i_("3da:1078"), _r_(a);
},
available:function() {
return _i_("3da:1079"), _r_(o);
},
convert:r
});
}), B.define("utils", function(e, t, i) {
_i_("3da:57"), t.assertExists = function(e, t) {
if (_i_("3da:777"), "object" != typeof e || !(t in e)) throw new Error("Property " + t + " is not found");
_r_();
}, t.camelCaseKeys = function(e) {
_i_("3da:778");
var t, i, n = {};
for (t in e) e.hasOwnProperty(t) && (i = t.replace(/-([a-zA-Z])/g, function(e, t) {
return _i_("3da:2626"), _r_(t.toUpperCase());
}), n[i] = e[t]);
return _r_(n);
}, t.nodeData = function(e) {
_i_("3da:779"), e.jquery && (e = e[0]), this.assertExists(e, "attributes");
var t, i, n, r = {};
for (t = 0, i = e.attributes.length; i > t; t++) n = e.attributes[t], n && 0 == n.name.indexOf("data-") && (r[n.name.replace(/^data-/, "")] = n.value);
return _r_(this.camelCaseKeys(r));
}, _r_();
}), B.define("utils/simple-unique-id", function(e, t, i) {
_i_("3da:58");
function n(e, t) {
return _i_("3da:370"), _r_(Math.floor(Math.random() * (t - e)) + e);
}
i.exports = function() {
return _i_("3da:780"), _r_(new Date().getTime() + "_" + n(100, 999));
}, _r_();
}), B.define("window-visibilitychange", function(e, t, i) {
"use strict";
_i_("3da:59");
var n = e("event-emitter"), r = {
focus:"visible",
focusin:"visible",
pageshow:"visible",
blur:"hidden",
focusout:"hidden",
pagehide:"hidden"
};
i.exports = n.extend({
setup:function() {
_i_("3da:1729"), this.didSetup || (this.didSetup = !0, this.hidden = null, this.visibilityState = null, this.hiddenAttribute = "hidden", this.hiddenAttribute in document ? document.addEventListener("visibilitychange", this.visibilityChange.bind(this)) :(this.hiddenAttribute = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", this.visibilityChange.bind(this)) :(this.hiddenAttribute = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", this.visibilityChange.bind(this)) :(this.hiddenAttribute = "msHidden") in document ? document.addEventListener("msvisibilitychange", this.visibilityChange.bind(this)) :"onfocusin" in document ? document.onfocusin = document.onfocusout = this.visibilityChange.bind(this) :window.onpageshow = window.onpagehide = window.onfocus = window.onblur = this.visibilityChange.bind(this)), _r_();
},
visibilityChange:function(e) {
_i_("3da:1730"), e = e || window.event;
var t = this.visibilityState;
e.type in r ? (this.hidden = "hidden" == r[e.type], this.visibilityState = r[e.type]) :(this.hidden = document[this.hiddenAttribute], this.visibilityState = document[this.hiddenAttribute] ? "hidden" :"visible"), t != this.visibilityState && this.emit("visibilitychange", this.visibilityState), _r_();
}
}), i.exports.addListener = i.exports.on = function() {
_i_("3da:1080"), i.exports.setup(), n.prototype.addListener.apply(i.exports, arguments), _r_();
}, _r_();
}), B.define("window-scroller", [ "jquery", "promise" ], function(e, t) {
_i_("3da:60");
var i = e(window), n = jQuery({
progress:0
}), r = 10, a = 700, o = 5;
function _(e, n, a, o) {
_i_("3da:371");
var _, s = "number" == typeof o ? o :r;
if (!e || !e.length) return _r_(new t(function(e) {
_i_("3da:1922"), e(), _r_();
}));
if (n) _ = c(e).top - s; else {
var l = d(e, s);
null === l && (l = i.scrollTop()), _ = l;
}
return _r_(this.scrollToOffset(_, a));
}
function s(e, r) {
_i_("3da:372"), n.stop(!0);
var a = i.scrollTop(), _ = e;
return _r_(new t(function(e) {
_i_("3da:1199"), Math.abs(a - _) < o ? e() :l(a, _, r, e), _r_();
}));
}
function l(e, t, r, o) {
_i_("3da:373"), n[0].progress = 0, n.animate({
progress:1
}, {
step:function(n) {
_i_("3da:1923"), i.scrollTop(e + n * (t - e)), _r_();
},
duration:"number" == typeof r ? r :a,
easing:"function" == typeof jQuery.easing.easeInOutExpo ? "easeInOutExpo" :"swing",
complete:o
}), _r_();
}
function d(e, t) {
if (_i_("3da:374"), 0 === e.height()) return _r_(null);
var i = c(e), n = u(), r = i.top < n.top, a = i.bottom > n.bottom, o = e.outerHeight() + t > h();
return _r_(r || a ? o || r ? i.top - t :i.bottom + t - h() :null);
}
function c(e) {
_i_("3da:375");
var t = e.offset().top;
return _r_({
top:t,
bottom:t + e.outerHeight()
});
}
function u() {
_i_("3da:376");
var e = i.scrollTop();
return _r_({
top:e,
bottom:e + h()
});
}
function h() {
return _i_("3da:377"), _r_(window.innerHeight || document.documentElement.clientHeight);
}
return _r_({
scrollToBlock:_,
scrollToOffset:s
});
}), B.define("countdown", [ "jquery", "event-emitter" ], function(e, t) {
_i_("3da:61");
var i = function(t, i) {
if (_i_("3da:781"), !t) throw new Error("You did not pass proper date for countdown");
return this.dimensionsToCheck = [ "seconds", "minutes", "hours", "days" ], this.defaults = {
updateInterval:1e3,
callback:!1,
expiredCallback:!1,
callbacks:!1,
leadingZeroes:{
seconds:!0,
minutes:!0,
hours:!0,
days:!1
}
}, "number" == typeof t ? this.endTime = new Date(t) :this.endTime = Date.parse(t), this.options = e.extend(!0, {}, this.defaults, i), this._processOptions(), this._init(), _r_(this);
};
return e.extend(i.prototype, {
_processOptions:function() {
_i_("3da:1200");
var e = this.options.leadingZeroes;
if ("boolean" == typeof e) for (var t = 0; t < this.dimensionsToCheck.length; t++) this.options.leadingZeroes[this.dimensionsToCheck[t]] = e;
_r_();
},
_init:function() {
_i_("3da:1201"), t.extend(this), this.previousTime = !1, this._saveStartRemainingTime(), this._setCallbacks(), this._start(), _r_();
},
_saveStartRemainingTime:function() {
_i_("3da:1202"), this.startRemainingTime = this._getRemainingTime(), _r_();
},
_start:function() {
_i_("3da:1203"), this._processTime(), this.timer = setInterval(this._processTime.bind(this), this.options.updateInterval), _r_();
},
_processTime:function() {
_i_("3da:1204");
var e = this._getRemainingTime();
e.total >= 0 ? (this._fireEvents(e), this.previousTime = e) :(this.stop(), this._fireEvents(!1)), _r_();
},
_getRemainingTime:function() {
_i_("3da:1205");
var e = this.endTime - Date.parse(new Date()), t = Math.floor(e / 1e3 % 60), i = Math.floor(e / 1e3 / 60 % 60), n = Math.floor(e / 36e5 % 24), r = Math.floor(e / 864e5);
return _r_({
total:e,
days:r,
hours:n,
minutes:i,
seconds:t
});
},
_fireEvents:function(e) {
if (_i_("3da:1206"), !this.previousTime) return _r_();
e ? (this._fireProgressEvents(e), this._fireEveryTickEvent(e)) :this._fireExpiredEvent(), _r_();
},
_fireProgressEvents:function(e) {
_i_("3da:1207");
for (var t = this, i = 0; i < this.dimensionsToCheck.length; i++) this._dimensionIsChanged(e, this.dimensionsToCheck[i]) && this.trigger("changed", {
type:this.dimensionsToCheck[i],
remainingTime:t._formatDate(e)
});
_r_();
},
_fireEveryTickEvent:function(e) {
_i_("3da:1208"), this.trigger("ticked", {
remainingTime:this._formatDate(e)
}), _r_();
},
_fireExpiredEvent:function() {
_i_("3da:1209"), this.trigger("expired", {
timeExpired:this._formatDate(this.startRemainingTime)
}), _r_();
},
_dimensionIsChanged:function(e, t) {
return _i_("3da:1210"), _r_(!!(e[t] - this.previousTime[t]));
},
_setCallbacks:function() {
_i_("3da:1211");
var e = this;
this.options.callback && "function" == typeof this.options.callback && this.on("ticked", function(t) {
_i_("3da:2627"), e.options.callback(e._formatDate(t.remainingTime)), _r_();
}), this.options.expiredCallback && "function" == typeof this.options.expiredCallback && this.on("expired", function(t) {
_i_("3da:2628"), e.options.expiredCallback.call(e._formatDate(t.remainingTime)), _r_();
}), this.options.callbacks && this.on("changed", function(t) {
_i_("3da:2629"), e.options.callbacks[t.type] && "function" == typeof e.options.callbacks[t.type] && e.options.callbacks[t.type].call(e._formatDate(t.remainingTime)), _r_();
}), _r_();
},
_formatDate:function(e) {
_i_("3da:1212");
var t;
for (var i in e) this.options.leadingZeroes[i] && e.hasOwnProperty(i) && (t = "" + e[i], t.length <= 1 && (e[i] = "0" + t));
return _r_(e);
},
getStartRemainingTime:function() {
return _i_("3da:1213"), _r_(this._formatDate(this.startRemainingTime));
},
stop:function() {
_i_("3da:1214"), clearInterval(this.timer), _r_();
},
proceed:function() {
_i_("3da:1215"), this._start(), _r_();
}
}), _r_(i);
}), B.Search = B.Search || {}, B.Search.Events = {
DESTINATION_CHANGED:"SEARCH:DESTINATION_CHANGED",
DESTINATION_INVALID:"SEARCH:DESTINATION_INVALID",
TRAVEL_PURPOSE_CHANGED:"SEARCH:travel_purpose_changed",
DATE_CHANGED:"SEARCH:date_changed",
DATE_MONTH_CHANGED:"SEARCH:month_changed",
DATE_MODE_CHANGED:"SEARCH:mode_changed",
DATE_INVALID:"SEARCH:dates_invalid",
DATE_VALID:"SEARCH:dates_valid",
FLEXIBLE_MONTHYEAR_CHANGED:"SEARCH:flexible_monthyear_changed",
FLEXIBLE_INTERVAL_CHANGED:"SEARCH:flexible_interval_changed",
FLEXIBLE_INVALID:"SEARCH:monthyear_invalid",
FLEXIBLE_VALID:"SEARCH:monthyear_valid",
MULTI_GROUP_CHANGED:"SEARCH:multi_group_changed",
GROUP_CHANGED:"SEARCH:group_changed",
GROUP_MODE_CHANGED:"SEARCH:group_mode_changed",
GROUP_VALID:"SEARCH:group_valid",
GROUP_INVALID:"SEARCH:group_invalid",
ADVANCED_SEARCH_ENABLED:"SEARCH:advanced_search_enabled",
ADVANCED_SEARCH_DISABLED:"SEARCH:advanced_search_disabled",
POPULAR_BUSINESS_FILTERS_OPENED:"SEARCH:pouplar_business_filters_opened",
POPULAR_BUSINESS_FILTERS_DISABLED:"SEARCH:pouplar_business_filters_closed"
}, B.Search.TrackingEvents = {
DESTINATION_CHANGED:"destination_changed",
CHECKOUT_DATEPICKER:"checkout_changed_datepicker",
CHECKOUT_MONTH_SELECTOR:"checkout_changed_month_selector",
CHECKOUT_DAY_SELECTOR:"checkout_changed_day_selector",
CHECKIN_DATEPICKER:"checkin_changed_datepicker",
CHECKIN_MONTH_SELECTOR:"checkin_changed_month_selector",
CHECKIN_DAY_SELECTOR:"checkin_changed_day_selector",
NO_DATES_SELECTED:"no_dates_selected",
FLEXIBLE_INTERVAL_SELECTED:"flexible_interval_selected",
FLEXIBLE_MONTH_SELECTED:"flexible_month_selected",
GROUP_ADVANCED_MODE_SELECTED:"group_advanced_mode_selected",
GROUP_BASIC_MODE_SELECTED:"group_basic_mode_selected",
GROUP_PREDEFINED_OPTION_SELECTED:"group_predefined_option_selected",
GROUP_ROOMS_NUMBER_CHANGED:"rooms_number_changed",
GROUP_ADULTS_NUMBER_CHANGED:"adults_number_changed",
GROUP_CHILDREN_NUMBER_CHANGED:"children_number_changed",
GROUP_CHILDREN_AGE_CHANGED:"children_age_changed",
ADVANCED_SEARCH_CHANGED:"advanced_search_changed",
ADVANCED_SEARCH_ENABLED:"advanced_search_enabled",
ADVANCED_SEARCH_DISABLED:"advanced_search_disabled",
FORM_SUBMITTED:"form_submitted"
}, B.Search.TravelTypeModes = {
BUSINESS:"business",
LEISURE:"leisure"
}, B.Search.DateModes = {
REGULAR:"regular",
NODATES:"no-dates",
FLEXIBLE:"flexible"
}, B.Search.GroupModes = {
REGULAR:"basic",
CUSTOM:"custom"
}, B.Search.rawGroupConfiguration, B.Search.groupConfiguration, B.Search.childrenConfiguration, B.Search.createGroup = function(e) {
if (_i_("3da:62"), !e || "object" != typeof e) return _r_(new B.Search.InvalidGroup());
return _r_(new B.Search.Group(e));
}, B.Search.AbstractGroup = function() {}, B.Search.AbstractGroup.prototype.parseChildrenConfig = function(e) {
_i_("3da:64");
var t, i = [];
return !e.childrenAges && e.childrenages && (e.childrenAges = e.childrenages), e.childrenAges instanceof Array ? i = e.childrenAges :"number" == typeof e.childrenAges ? i = [ e.childrenAges ] :"string" == typeof e.childrenAges ? i = e.childrenAges.split(",") :e.children instanceof Array ? i = e.children :"undefined" != typeof e.children ? (t = parseInt(e.children, 10), i = isNaN(t) ? [] :new Array(t)) :i = [], _r_({
childrenAges:i,
children:i.length
});
}, B.Search.AbstractGroup.prototype.parseConfig = function(e, t) {
_i_("3da:65");
var i = {};
return e.adults && (i.adults = e.adults), e.rooms && (i.rooms = e.rooms), 0 === i.rooms && (i.rooms = 1), $.extend(i, this.parseChildrenConfig(e)), e.name && (i.name = e.name), e.type && (i.type = e.type), t && t.useDefaults && (i = $.extend({
adults:2,
rooms:1,
children:0,
childrenAges:[]
}, i)), _r_(i);
}, B.Search.AbstractGroup.prototype.applyConfig = function(e) {
_i_("3da:66");
var t;
e.name !== t && (this.name = e.name), e.type !== t && (this.type = e.type), e.rooms !== t && (this.rooms = e.rooms), e.adults !== t && (this.adults = e.adults), e.children !== t && (this.children = e.children), e.childrenAges !== t && (this.childrenAges = e.childrenAges), _r_();
}, B.Search.InvalidGroup = function() {}, B.Search.InvalidGroup.prototype = new B.Search.AbstractGroup(), B.Search.InvalidGroup.prototype.valueOf = function() {
return _i_("3da:68"), _r_(null);
}, B.Search.Group = function(e) {
_i_("3da:69");
var t = this.parseConfig(e, {
useDefaults:!0
});
this.applyConfig(t), _r_();
}, B.Search.Group.prototype = new B.Search.AbstractGroup(), B.Search.Group.prototype.update = function(e) {
_i_("3da:70");
var t = this.parseConfig(e);
return this.applyConfig(t), _r_(this);
}, B.Search.Group.prototype.toString = function() {
return _i_("3da:71"), _r_(this.valueOf());
}, B.Search.Group.prototype.valueOf = function() {
_i_("3da:72");
var e = [ "Group:" ];
return this.name && e.push("Name: " + this.name), this.type && e.push("Type: " + this.type), e.push(this.rooms), e.push(this.adults), e.push(this.children), e.push(this.childrenAges.join("|")), _r_(e.join(","));
}, B.Search.ONE_DAY = 864e5, B.Search.createDate = function(e) {
_i_("3da:73");
var t, i, n, r, a, o, _, s, l;
switch (typeof e) {
case "string":
l = e.split("-"), l.length > 1 && (t = parseInt(l[0], 10), i = parseInt(l[1], 10) - 1), 3 === l.length && (n = parseInt(l[2], 10));
break;

case "object":
t = parseInt(e.year, 10), i = parseInt(e.month, 10), n = parseInt("day" in e ? e.day :e.date, 10);
break;

case "number":
_ = e * B.Search.ONE_DAY, s = new Date(_), t = s.getFullYear(), i = s.getMonth(), n = s.getDate();
break;

case "undefined":
r = "invalid";
}
return o = "number" == typeof t && !isNaN(t) && "number" == typeof i && !isNaN(i), a = o && "number" == typeof n && !isNaN(n) && 0 !== n, _r_(a ? new B.Search.Date({
year:t,
month:i,
date:n
}) :o ? new B.Search.MonthDate({
year:t,
month:i
}) :new B.Search.InvalidDate());
}, B.Search.AbstractDate = function() {}, B.Search.AbstractDate.prototype.initValue_ = function() {
_i_("3da:75"), this.dateObject_ = new Date(Date.UTC(this.year, this.month, this.date || 1)), this.value_ = Math.floor(this.dateObject_.valueOf() / B.Search.ONE_DAY), _r_();
}, B.Search.AbstractDate.toString = function() {
throw _i_("3da:76"), "Abstract method should be override in child classes";
}, B.Search.AbstractDate.prototype.valueOf = function() {
return _i_("3da:77"), this.value_ || this.initValue_(), _r_(this.value_);
}, B.Search.Date = function(e) {
_i_("3da:78"), this.year = e.year, this.month = e.month, this.date = e.date, this.type = "valid", _r_();
}, B.Search.Date.prototype = new B.Search.AbstractDate(), B.Search.Date.prototype.toString = function() {
_i_("3da:79");
var e = [], t = this.month + 1;
return e.push(this.year), 9 >= t ? e.push("0" + t) :e.push(t), this.date <= 9 ? e.push("0" + this.date) :e.push(this.date), _r_(e.join("-"));
}, B.Search.Date.prototype.addDays = function(e) {
return _i_("3da:80"), _r_(B.Search.createDate(this + e));
}, B.Search.MonthDate = function(e) {
_i_("3da:81"), this.year = e.year, this.month = e.month, this.type = "month", _r_();
}, B.Search.MonthDate.prototype = new B.Search.AbstractDate(), B.Search.MonthDate.prototype.toString = function() {
_i_("3da:82");
var e = [], t = this.month + 1;
return e.push(this.year), 9 >= t ? e.push("0" + t) :e.push(t), _r_(e.join("-"));
}, B.Search.InvalidDate = function() {
_i_("3da:83"), this.type = "invalid", _r_();
}, B.Search.InvalidDate.prototype = new B.Search.AbstractDate(), B.Search.InvalidDate.prototype.toString = function() {
return _i_("3da:84"), _r_("");
}, B.Search.AbstractWidget = function() {}, B.Search.AbstractWidget.prototype.initialize = function(e, t) {
_i_("3da:86"), this.$element = e, this.setOptions(t), _r_();
}, B.Search.AbstractWidget.prototype.setOptions = function(e) {
_i_("3da:87"), this.options || (this.options = {}), this.options = $.extend(this.options, e), _r_();
}, B.Search.AbstractWidget.prototype.initEvents = function() {
throw _i_("3da:88"), "Abstract intiEvents method should be implemented in widget instances";
}, B.Search.AbstractWidget.prototype.onExternalEventConfigChanged = function() {
throw _i_("3da:89"), "Abstract onExternalEventConfigChanged method should be implemented in widget instances";
}, B.Search.AbstractWidget.prototype.getConfig = function() {
throw _i_("3da:90"), "Abstract getConfig method should be implemented in widget instances";
}, B.Search.AbstractWidget.prototype.trigger = function(e) {
_i_("3da:91"), "groupChanged" === e && "function" == typeof this.onExternalEventConfigChanged && this.onExternalEventConfigChanged.apply(this, [].slice.call(arguments, 1)), _r_();
}, B.Search.AbstractWidget.prototype.onInit = function() {
_i_("3da:92");
var e = this;
"function" == typeof this.options.onInit && window.setTimeout(function() {
_i_("3da:1216"), e.options.onInit.call(e, e.getConfig()), _r_();
}, 10), _r_();
}, B.Search.AbstractWidget.prototype.onChange = function() {
_i_("3da:93"), "function" == typeof this.options.onChange && this.options.onChange.call(this, this.getConfig()), _r_();
}, B.Search.AbstractWidget.prototype.tryCallback = function(e, t, i) {
_i_("3da:94");
var n;
if (!e) return _r_();
t = t || [], "function" == typeof this.options[e] ? n = this.options[e] :"function" == typeof i && (n = i), n && n.apply(this, t), _r_();
}, B.Search.AbstractWidget.prototype.DISABLED_CLASS = "disabled", B.Search.AbstractWidget.prototype.hide = function() {
_i_("3da:95"), this.$element.toggleClass(this.DISABLED_CLASS, !0), _r_();
}, B.Search.AbstractWidget.prototype.show = function() {
_i_("3da:96"), this.$element.toggleClass(this.DISABLED_CLASS, !1), _r_();
}, B.Search.createWidgetPlugin = function(e, t) {
if (_i_("3da:97"), $.fn[e]) throw "Jquery plugin " + e + " is already defined";
return $.fn[e] = function(e, t) {
_i_("3da:1081");
var i = [];
return _r_(function(n) {
if (_i_("3da:1924"), "notify" === n) for (var r = arguments[1], a = arguments[2], o = 0; o < i.length; o++) i[o].trigger(r, a);
return _r_(this.each(function() {
_i_("3da:2630");
var r = e, a = $(this), o = a.data(), _ = o[r];
_ ? _.setOptions(n) :(_ = new t(a, n), a.data(r, _), i.push(_)), _r_();
}));
});
}(e, t), _r_($.fn[e]);
}, B.Search.validators = {
storage_:[]
}, B.Search.Validator = function() {}, B.Search.Validator.prototype.name = "general", B.Search.Validator.prototype.type = "general", B.Search.Validator.prototype.success = void 0, B.Search.Validator.prototype.fail = void 0, B.Search.Validator.prototype.test = function() {}, B.Search.Validator.prototype.validate = function() {
_i_("3da:100");
var e = this.test(), t = e ? "fail" :"success", i = {
name:this.name,
status:t
}, n = t + "Callback";
return "function" == typeof this[t] ? i.message = this[t]() :"undefined" != typeof this[t] && (i.message = this[t]), "function" == typeof this[n] && (i.callback = this[n]), this.validationParameters && (i.validationParameters = this.validationParameters), _r_(new B.Search.ValidationResult(i));
}, B.Search.ValidationResult = function(e) {
_i_("3da:101"), this.setOptions_(e), _r_();
}, B.Search.ValidationResult.prototype.status = void 0, B.Search.ValidationResult.prototype.message = void 0, B.Search.ValidationResult.prototype.callback = function() {}, B.Search.ValidationResult.prototype.valueOf = function() {
return _i_("3da:103"), _r_("fail" !== this.status);
}, B.Search.ValidationResult.prototype.toString = function() {
return _i_("3da:104"), _r_(this.message || "");
}, B.Search.ValidationResult.prototype.setOptions_ = function(e) {
if (_i_("3da:105"), !e) return _r_(this);
return e.name && (this.name = e.name), e.status && (this.status = e.status), e.message && (this.message = e.message), "function" == typeof e.callback && (this.callback = e.callback), e.validationParameters && (this.validationParameters = e.validationParameters), _r_(this);
}, B.Search.validators.create = function(e) {
_i_("3da:106");
var t = new B.Search.Validator();
if (!e) return _r_(t);
return e.name && (t.name = e.name), e.type && (t.type = e.type), e.success && (t.success = e.success), e.fail && (t.fail = e.fail), e.failCallback && (t.failCallback = e.failCallback), e.successCallback && (t.successCallback = e.successCallback), e.test && (t.test = e.test), B.Search.validators.storage_.push(t), _r_(t);
}, B.Search.validators.all = function() {
return _i_("3da:107"), _r_(this.storage_);
}, B.Search.validators.allOfType = function(e) {
_i_("3da:108");
for (var t = [], i = 0; i < this.storage_.length; i++) this.storage_[i].type === e && t.push(this.storage_[i]);
return _r_(t);
}, B.Search.DEFAULT_GROUP_COFIGURATION = {
adults:2,
rooms:1,
children:0
}, B.Search.Interface = function() {
_i_("3da:109");
var e = this;
this.datesStorage = {
checkin:B.Search.createDate(),
checkout:B.Search.createDate(),
mode:"regular"
}, this.groupStorage = {
value:B.Search.createGroup()
}, this.flexibleDatesStorage = {
interval:null,
monthYear:B.Search.createDate()
}, this.destinationStorage = {
value:null
}, this.advancedSearchStorage = {
state:"disabled"
}, this.dates = function() {
_i_("3da:782");
var t;
switch (arguments.length) {
case 0:
return _r_({
checkin:this.getDate_("checkin"),
checkout:this.getDate_("checkout"),
mode:this.getDatesMode_(),
validate:function() {
return _i_("3da:2490"), _r_(e.validateDates_.apply(e, [].slice.call(arguments, 0)));
},
setMode:function() {
return _i_("3da:2491"), _r_(e.setDatesMode_.apply(e, [].slice.call(arguments, 0)));
},
validationResults:function() {
return _i_("3da:2492"), _r_(e.validationResults);
}
});

case 1:
return _r_(this.getDate_(arguments[0]));

case 2:
return "mode" === arguments[0] ? _r_(e.setDatesMode_.apply(e, [].slice.call(arguments, 1))) :(t = B.Search.createDate(arguments[1]), _r_(this.setDate_(arguments[0], t)));

default:
return t = B.Search.createDate(arguments[1]), _r_(this.setDate_(arguments[0], t));
}
_r_();
}, this.flexibleDates = function() {
return _i_("3da:783"), _r_({
interval:function() {
return _i_("3da:2118"), _r_(1 === arguments.length ? e.setInterval_.apply(e, [].slice.call(arguments, 0)) :e.getInterval_());
},
monthYear:function() {
return _i_("3da:2119"), _r_(1 === arguments.length ? e.setMonthYear_.apply(e, [].slice.call(arguments, 0)) :e.getMonthYear_());
},
validate:function() {
return _i_("3da:2120"), _r_(e.validateFlexibleDates_.apply(e, [].slice.call(arguments, 0)));
}
});
}, this.destination = function() {
switch (_i_("3da:784"), arguments.length) {
case 0:
return _r_(this.getDestination_());

default:
return _r_(this.setDestination_(arguments[0]));
}
_r_();
}, this.group = function() {
switch (_i_("3da:785"), arguments.length) {
case 0:
return _r_({
value:this.getGroup_(),
mode:function(t) {
return _i_("3da:2493"), _r_(t ? e.setGroupMode_.apply(e, [].slice.call(arguments, 0)) :e.getGroupMode_.apply(e, [].slice.call(arguments, 0)));
},
validate:function() {
return _i_("3da:2494"), _r_(e.validateGroup_.apply(e, [].slice.call(arguments, 0)));
},
setMode:function() {
return _i_("3da:2495"), _r_(e.setGroupMode_.apply(e, [].slice.call(arguments, 0)));
}
});

case 1:
return _r_("reset" === arguments[0] ? this.setGroup_("config", B.Search.DEFAULT_GROUP_COFIGURATION) :"value" === arguments[0] ? this.getGroup_() :"string" == typeof arguments[0] ? this.getGroup_(arguments[0]) :this.setGroup_("config", arguments[0]));

default:
if ("reset" === arguments[0]) return _r_(this.setGroup_("config", arguments[1]));
return _r_(this.setGroup_(arguments[0], arguments[1]));
}
_r_();
}, this.advanced = function() {
return _i_("3da:786"), _r_({
mode:function(t) {
return _i_("3da:2121"), _r_(t ? e.setAdvancedSearchMode_.apply(e, [].slice.call(arguments, 0)) :e.getAdvancedSearchMode_.apply(e, [].slice.call(arguments, 0)));
},
enable:function() {
return _i_("3da:2122"), _r_(e.setAdvancedSearchMode_.apply(e, [ "enabled" ]));
},
disable:function() {
return _i_("3da:2123"), _r_(e.setAdvancedSearchMode_.apply(e, [ "disabled" ]));
}
});
}, _r_();
}, B.Search.Interface.prototype = {
constructor:B.Search.Interface,
sanitizeDateType_:function(e) {
return _i_("3da:378"), _r_("checkin" === e || "checkout" === e ? e :null);
},
getDate_:function(e) {
_i_("3da:379");
var t = this.sanitizeDateType_(e);
return _r_(this.datesStorage[t]);
},
setDate_:function(e, t, i) {
_i_("3da:380");
var n = B.Search.createDate(t), r = "valid" === n.type ? B.Search.Events.DATE_CHANGED :B.Search.Events.DATE_MONTH_CHANGED, a = this.sanitizeDateType_(e), o = this.datesStorage[a];
return i = i || {}, a ? (n.type !== o.type || n.valueOf() !== o.valueOf()) && (this.datesStorage[a] = n, B.eventEmitter.trigger(r, {
type:a,
value:n,
search:this,
referrer:i.referrer
})) :window.onerror("attempt_to_set_date_with_wrong_type:_" + e, window.location), _r_(n);
},
validateDates_:function(e, t) {
if (_i_("3da:381"), "reset" === e) return B.eventEmitter.trigger(B.Search.Events.DATE_VALID), _r_(!0);
var i = B.Search.validators.allOfType("dates"), n = i.map(function(e) {
return _i_("3da:1731"), _r_(e.validate());
}), r = n.every(function(e) {
return _i_("3da:1732"), _r_("success" === e.status);
});
return r ? this.validationResults = null :this.validationResults = n, t && t.silent || B.eventEmitter.trigger(r ? B.Search.Events.DATE_VALID :B.Search.Events.DATE_INVALID, {
validators:n
}), _r_(r);
},
sanitizeDatesMode_:function(e) {
return _i_("3da:382"), _r_("regular" === e || "no-dates" === e || "flexible" === e ? e :null);
},
getDatesMode_:function() {
return _i_("3da:383"), _r_(this.datesStorage.mode);
},
setDatesMode_:function(e) {
_i_("3da:384");
var t = this.sanitizeDatesMode_(e);
return t && this.datesStorage.mode !== t && (this.datesStorage.mode = t, B.eventEmitter.trigger(B.Search.Events.DATE_MODE_CHANGED, {
mode:t
})), _r_(this);
},
getMonthYear_:function() {
return _i_("3da:385"), _r_(this.flexibleDatesStorage.monthYear);
},
setMonthYear_:function(e) {
_i_("3da:386");
var t = B.Search.createDate(e), i = this.flexibleDatesStorage.monthYear;
return t.valueOf() !== i.valueOf() && (this.flexibleDatesStorage.monthYear = t, B.eventEmitter.trigger(B.Search.Events.FLEXIBLE_MONTHYEAR_CHANGED, {
value:t
})), _r_(t);
},
getInterval_:function() {
return _i_("3da:387"), _r_(this.flexibleDatesStorage.interval);
},
setInterval_:function(e) {
return _i_("3da:388"), "weekend" !== e && "week" !== e && (e = "any"), this.flexibleDatesStorage.interval !== e && (this.flexibleDatesStorage.interval = e, B.eventEmitter.trigger(B.Search.Events.FLEXIBLE_INTERVAL_CHANGED, {
value:e
})), _r_(this);
},
validateFlexibleDates_:function() {
_i_("3da:389");
var e = B.Search.validators.allOfType("flexible"), t = e.map(function(e) {
return _i_("3da:1733"), _r_(e.validate());
}), i = t.every(function(e) {
return _i_("3da:1734"), _r_("success" === e.status);
});
return B.eventEmitter.trigger(i ? B.Search.Events.FLEXIBLE_VALID :B.Search.Events.FLEXIBLE_INVALID, {
validators:t
}), _r_(i);
},
getDestination_:function() {
return _i_("3da:390"), _r_(this.destinationStorage.value);
},
setDestination_:function(e) {
_i_("3da:391");
var t = e && e.data, i = this.destinationStorage && this.destinationStorage.value && this.destinationStorage.value;
t && (!i || i && i.dest_id !== t.dest_id) && (this.destinationStorage.value = t, B.eventEmitter.trigger(B.Search.Events.DESTINATION_CHANGED, this.destinationStorage.value)), _r_();
},
getGroup_:function(e) {
return _i_("3da:392"), _r_(e ? this.groupStorage.value[e] :this.groupStorage.value);
},
setGroup_:function(e, t) {
_i_("3da:393");
var i, n;
if ("rooms" === e || "adults" === e || "children" === e || "childrenAges" === e || "type" === e || "name" === e) this.setGroupValue_(e, t); else if ("config" === e) {
i = t instanceof B.Search.Group ? t :B.Search.createGroup(t);
for (var r = 0, a = i.childrenAges.length; a > r; r++) i.childrenAges[r] === n && (i.childrenAges[r] = this.groupStorage.value.childrenAges[r]);
i.valueOf() !== this.groupStorage.value.valueOf() && (this.groupStorage.value = i, this.triggerGroupEvent());
}
_r_();
},
setGroupValue_:function(e, t) {
_i_("3da:394");
var i, n = {};
n[e] = t, i = B.Search.createGroup(this.groupStorage.value), i.update(n), i.valueOf() !== this.groupStorage.value.valueOf() && (this.groupStorage.value = i, this.triggerGroupEvent()), _r_();
},
getGroupMode_:function() {
return _i_("3da:395"), _r_(this.groupStorage.mode);
},
setGroupMode_:function(e) {
return _i_("3da:396"), "basic" !== e && "custom" !== e && (e = "custom"), e && this.groupStorage.mode !== e && (this.groupStorage.mode = e, B.eventEmitter.trigger(B.Search.Events.GROUP_MODE_CHANGED, {
mode:e
})), _r_(this);
},
triggerGroupEvent:function() {
_i_("3da:397"), B.eventEmitter.trigger(B.Search.Events.GROUP_CHANGED, this.groupStorage.value), _r_();
},
validateGroup_:function(e) {
if (_i_("3da:398"), "reset" === e) return B.eventEmitter.trigger(B.Search.Events.GROUP_VALID), _r_(!0);
var t = B.Search.validators.allOfType("group"), i = t.map(function(e) {
return _i_("3da:1735"), _r_(e.validate());
}), n = i.every(function(e) {
return _i_("3da:1736"), _r_("success" === e.status);
});
return B.eventEmitter.trigger(n ? B.Search.Events.GROUP_VALID :B.Search.Events.GROUP_INVALID, {
validators:i
}), _r_(n);
},
setAdvancedSearchMode_:function(e) {
_i_("3da:399"), e === this.advancedSearchStorage.state || "enabled" !== e && "disabled" !== e || (this.advancedSearchStorage.state = e, B.eventEmitter.trigger("enabled" === e ? B.Search.Events.ADVANCED_SEARCH_ENABLED :B.Search.Events.ADVANCED_SEARCH_DISABLED)), _r_();
},
getAdvancedSearchMode_:function() {
return _i_("3da:400"), _r_(this.advancedSearchStorage.state);
}
}, B.search = new B.Search.Interface(), booking[sNSStartup].initSearchValues = {
init:function() {
_i_("3da:401"), this.initDestination(), this.initDates(), this.initGroup(), _r_();
},
initDates:function() {
_i_("3da:402");
var e, t;
function i(e, t) {
_i_("3da:787");
var i = t.split("-"), n = new Date(i[0], i[1] - 1, e, 0, 0, 0, 0);
if (isNaN(n.getTime())) return _r_(!1);
return _r_(new B.Search.Date({
year:i[0],
month:i[1] - 1,
date:e
}));
}
function n(e) {
_i_("3da:788");
var t = e.split("-"), i = new Date(t[0], t[1] - 1, t[2], 0, 0, 0, 0);
if (isNaN(i.getTime())) return _r_(!1);
return _r_(new B.Search.Date({
year:t[0],
month:t[1] - 1,
date:t[2]
}));
}
B.env.s_value_checkin_monthday && B.env.s_value_checkin_year_month ? (e = i(B.env.s_value_checkin_monthday, B.env.s_value_checkin_year_month), e && B.search.dates("checkin", e)) :B.env.b_checkin_date ? (e = n(B.env.b_checkin_date), e && B.search.dates("checkin", e)) :B.env.b_session_checkin_date && (e = n(B.env.b_session_checkin_date), e && B.search.dates("checkin", e)), B.env.s_value_checkout_monthday && B.env.s_value_checkout_year_month ? (t = i(B.env.s_value_checkout_monthday, B.env.s_value_checkout_year_month), t && B.search.dates("checkout", t)) :B.env.b_checkout_date ? (t = n(B.env.b_checkout_date), t && B.search.dates("checkout", t)) :B.env.b_session_checkout_date && (t = n(B.env.b_session_checkout_date), t && B.search.dates("checkout", t)), B.env.b_no_dates_mode && B.search.dates("mode", B.Search.DateModes.NODATES), _r_();
},
initGroup:function() {
_i_("3da:403");
try {
var e = B.env.b_group && B.env.b_group[0], t = B.env.b_group_rooms_wanted, i = [];
if (e && t) {
if (e.ages) for (var n = 0; n < e.ages.length; n++) "undefined" != typeof e.ages[n].age && i.push(e.ages[n].age);
B.search.group({
adults:e.guests,
childrenAges:i,
rooms:t
});
} else B.search.group("value") instanceof B.Search.InvalidGroup && B.search.group({
adults:2,
rooms:1,
type:B.Search.GroupModes.REGULAR
});
} catch (r) {
throw "Unable to set group";
}
_r_();
},
initDestination:function() {
_i_("3da:404");
var e = {
name:void 0,
data:{}
};
B && B.env && (B.env.sess_dest_id && (e.data.dest_id = B.env.sess_dest_id), B.env.sess_dest_type && (e.data.dest_type = B.env.sess_dest_type), B.env.sess_dest_fullname && (e.data.name = B.env.sess_dest_fullname, e.term = B.env.sess_dest_fullname)), e.data.dest_id && e.data.dest_type && e.data.name && B.search.destination(e), _r_();
},
priority:5
}, function(e, t) {
_i_("3da:110");
function i(t, i) {
_i_("3da:405");
var n = this;
this.$element = t, this.$inputs = t.find("select, input"), this.options = i || {}, this.$element.data("always-enabled") && (this.options.alwaysEnabled = !0);
var r = t.find(".b-date-selector__control-dayselector select, .js--sb-dates__select-day"), a = t.find(".b-date-selector__control-monthselector select, .js--sb-dates__select-month-year");
function o(e) {
if (_i_("3da:789"), "string" != typeof e) return _r_(!1);
var t = e.split("-");
if (2 !== t.length) return _r_(!1);
return _r_({
year:parseInt(t[0], 10),
month:parseInt(t[1], 10) - 1
});
}
this.lastMonth = o(a.find("option:last").val());
function _(e) {
_i_("3da:790");
var t = document.createElement("option");
return t.innerHTML = e.text, t.selected = e.selected, t.value = e.value, _r_(t);
}
function s(t, n) {
_i_("3da:791");
var r = e.env.b_lang;
return _r_(isNaN(n) ? "ja" == r || "zh" == r || "ko" == r ? t + e.env.sbox_day :t :"ja" == r || "zh" == r || "ko" == r || "hu" == r ? "ja" == r || "zh" == r || "ko" == r ? t + e.env.sbox_day + " " + i.dayNames[n] :t + " " + i.dayNames[n] :i.dayNames[n] + " " + t);
}
function l(e, t) {
_i_("3da:792");
var i;
switch (e.month) {
case 1:
i = e.year % 4 === 0 && e.year % 100 !== 0 || e.year % 400 === 0 ? 29 :28;
break;

case 0:
case 2:
case 4:
case 6:
case 7:
case 9:
case 11:
i = 31;
break;

case 3:
case 5:
case 8:
case 10:
i = 30;
}
return "checkin" === t && e.month === n.lastMonth.month && e.year === n.lastMonth.year && (i -= 1), _r_(i);
}
function d(t, i) {
_i_("3da:793");
var n, a, o, d, c = r.get(0), u = r.val();
if (t.year && t.month % 1 === 0) n = new Date(t.year, t.month, 1).getDay(), d = l(t, i), u = t.date; else {
if (t) return _r_();
d = 31;
}
for (;c.firstChild; ) c.removeChild(c.firstChild);
a = document.createDocumentFragment(), o = document.createElement("option"), o.innerHTML = e.env.sbox_day, o.value = 0, a.appendChild(o);
for (var h = 1; d >= h; h++) a.appendChild(_({
text:s(h, (n - 1 + h) % 7),
selected:u == h,
value:h
}));
c.appendChild(a), _r_();
}
function c(e) {
_i_("3da:794");
var t = e.year + "-" + (e.month + 1);
a.val(t), _r_();
}
function u(t) {
_i_("3da:795"), d(g(), i.type), f(), t && t.originalEvent && ("checkin" === i.type ? e.Search.tracker.trackEvent(e.Search.TrackingEvents.CHECKIN_MONTH_SELECTOR) :"checkout" === i.type && e.Search.tracker.trackEvent(e.Search.TrackingEvents.CHECKOUT_MONTH_SELECTOR)), _r_();
}
function h(t) {
_i_("3da:796"), f(), t && t.originalEvent && ("checkin" === i.type ? e.Search.tracker.trackEvent(e.Search.TrackingEvents.CHECKIN_DAY_SELECTOR) :"checkout" === i.type && e.Search.tracker.trackEvent(e.Search.TrackingEvents.CHECKOUT_DAY_SELECTOR)), _r_();
}
function f() {
_i_("3da:797");
var t = g();
if (!t) return _r_();
"checkin" === i.type ? e.search.dates("checkin", t) :"checkout" === i.type && e.search.dates("checkout", t), _r_();
}
function p(e) {
_i_("3da:798"), d(e), c(e), _r_();
}
function g() {
_i_("3da:799");
var e = o(a.val());
if (e.date = r.val(), !e || isNaN(e.date)) return _r_(!1);
return _r_(e);
}
function m(e, t) {
if (_i_("3da:800"), !t) return _r_();
t.type === i.type && p(t.value), _r_();
}
a.bind("change.dateSelector", u), r.bind("change.dateSelector", h), a.trigger("change.dateSelector"), t.bind("dateSelected", m), _r_();
}
i.prototype.setOptions = function(e) {
if (_i_("3da:801"), !e) return _r_(this);
return e.disabled ? this.$inputs.attr("disabled", !0) :this.$inputs.removeAttr("disabled"), _r_(this);
}, i.prototype.getOption = function(e) {
if (_i_("3da:802"), !e) return _r_(this.options);
return _r_(this.options[e] ? this.options[e] :null);
}, i.prototype.trigger = function(e) {
if (_i_("3da:803"), !e) return _r_(this);
return "disable" !== e || this.options.alwaysEnabled ? "enable" === e && this.setOptions({
disabled:!1
}) :this.setOptions({
disabled:!0
}), _r_(this);
};
function n() {
_i_("3da:406"), this.instances_ = [], _r_();
}
n.prototype.create = function(e, t) {
_i_("3da:804");
var n = new i(e, t);
return this.add(n), _r_(n);
}, n.prototype.add = function(e) {
return _i_("3da:805"), this.instances_.push(e), _r_(e);
}, n.prototype.all = function() {
return _i_("3da:806"), _r_(this.instances_);
}, n.prototype.notifyAll = function() {
_i_("3da:807");
for (var e = this.all(), t = 0; t < e.length; t++) e[t].trigger.apply(e[t], [].slice.call(arguments, 0));
return _r_(this.instances_);
};
var r = e.Search.datePickerController = new n();
t.fn.dateSelector = function(i) {
_i_("3da:808");
var n = e.env.b_simple_weekdays_for_js.slice(0);
return n.unshift(n.pop()), _r_(this.each(function() {
_i_("3da:1925");
var e = t(this), a = e.data(), o = a.calendar2;
o ? o.setOptions(i) :r.create(e, t.extend({
dayNames:n
}, i, a)), _r_();
}));
}, _r_();
}(B, $), booking[sNSStartup].search_utilities = {
init:function() {
_i_("3da:407"), B.Search = B.Search || {}, B.Search.getShiftedDate = function(e, t) {
if (_i_("3da:1217"), !e) return _r_();
var i = new Date(e.year, e.month, e.date + t);
return _r_({
year:i.getFullYear(),
month:i.getMonth(),
date:i.getDate()
});
}, B.Search.openDatepicker = function(e) {
_i_("3da:1218");
var t, i, n, r = B.require("window-scroller"), a = {
selector:null,
duration:null
}, o = $.extend({}, a, e);
i = o.selector, n = o.duration, $.fn.calendar2("each", function(e) {
if (_i_("3da:2271"), !i) return t = e, _r_(!1);
if (e.$input.is(i)) return t = e, _r_(!1);
_r_();
}), t && r.scrollToBlock(t.$input, void 0, n).then(function() {
_i_("3da:2631"), t.show(), _r_();
}), _r_();
}, $(window).delegate(".js-open-datepicker", "click", function(e) {
_i_("3da:1219"), e.preventDefault();
var t = $(this), i = t.data(), n = {};
"undefined" != typeof i.selector && (n.selector = i.selector), "undefined" != typeof i.duration && (n.duration = i.duration), B.Search.openDatepicker(n), _r_();
}), _r_();
},
priority:5
}, function(e) {
_i_("3da:111"), e.events = e.require("events"), _r_();
}(booking), B.define("utils/wait-for-event", function(e, t, i) {
_i_("3da:112");
var n = e("promise");
function r(e, t, i) {
return _i_("3da:408"), _r_(new n(function(n) {
if (_i_("3da:1220"), i) {
var r = function() {
_i_("3da:2632"), i.apply(this, arguments) && (e.off(r), n()), _r_();
};
e.on(t, r);
} else e.once(t, n);
_r_();
}));
}
i.exports = r, _r_();
}), function() {
_i_("3da:113");
var e = {
_count:0,
_mixin:{},
_instances:[]
};
e._base = {
events:{
hide:"hide",
show:"show",
rootready:"rootready"
},
_cuid:e._count++,
_ctor:function() {},
_$root:null,
_$handle:null,
_emitter:null,
defaults:{
content:"",
redrawOnShow:!0
},
ens:"",
options:null,
create:function(t, i) {
_i_("3da:1222");
var n = this.extend({
ens:".ns" + e._count++,
_$handle:$(t),
_emitter:$({})
});
return n.options = $.extend({}, n.defaults, i), e._instances.push(n), _r_(n._init());
},
extend:function(t) {
_i_("3da:1223"), this._ctor.prototype = this, t && "defaults" in t && (t.defaults = $.extend({}, this.defaults, t.defaults));
var i = $.extend(new this._ctor(), t);
return i._cuid = e._count++, t.register$ && e.register$(t.register$, i), _r_(i);
},
delegate:function(e, t) {
_i_("3da:1224");
var i = this, n = "fly_delegated_" + i._cuid;
$.each(i.actions, function(r) {
_i_("3da:2272"), $(document.body).delegate(e, r, function() {
if (_i_("3da:2795"), $(this).data(n)) return _r_();
var e = i.create(this, t);
e.handle().data(n, 1), e._actionHandler(e.actions[r]).apply(e, arguments), _r_();
}), _r_();
}), _r_();
},
onrootready:function() {},
root:function() {
if (_i_("3da:1226"), !this._$root) {
var e = this.options;
this._$root = $("<div/>").addClass(e.baseClass).addClass(e.extraClass).addClass(e.hideClass).appendTo("body"), this.trigger(this.events.rootready);
}
return _r_(this._$root);
},
handle:function() {
return _i_("3da:1227"), _r_(this._$handle);
},
_init:function() {
return _i_("3da:1228"), this._action(!0), this.bind(this.events.rootready, $.proxy(this.onrootready, this)), this.init(), _r_(this);
},
_destroy:function() {
_i_("3da:1229"), this.destroy(), this._$root && (this._$root.remove(), this._$root = null), this._action(!1);
for (var t = 0, i = e._instances.length; i > t; t++) if (e._instances[t] === this) {
e._instances.splice(t, 1);
break;
}
_r_();
},
_action:function(e, t, i) {
_i_("3da:1230"), i = i || this.handle(), t = t || this.actions;
for (var n in t) e ? i.bind(n + this.ens, this._actionHandler(t[n])) :i.unbind(n + this.ens);
_r_();
},
_actionHandler:function(e) {
return _i_("3da:1231"), _r_("string" == typeof e ? $.proxy(this[e], this) :$.proxy(e, this));
},
_content:function(e) {
_i_("3da:1232");
var t = this.options.content;
"function" == typeof t ? t.length ? t.call(this, e) :e(t.call(this)) :e(t), _r_();
},
_render:function(e) {
_i_("3da:1233"), this.root().html(e || ""), this._rendered = !0, _r_();
},
_modCss:function() {
_i_("3da:1234");
var e = this.options.position.split(" "), t = this.options.baseClass;
return _r_([ t + "_" + e[0], t + "_arrow-" + e[1] ].join(" "));
},
_position:function() {},
init:function() {},
destroy:function() {},
show:function(e) {
_i_("3da:1238");
var t = this.options.redrawOnShow || !this._rendered;
if (t && !arguments.length) return _r_(this._content($.proxy(this.show, this)));
arguments.length && this._render(e), this.trigger(this.events.show), this.root().css(this._position()).addClass(this._modCss()).removeClass(this.options.hideClass), _r_();
},
hide:function() {
if (_i_("3da:1239"), this.hidden()) return _r_();
this.trigger(this.events.hide), this.root().addClass(this.options.hideClass), _r_();
},
redraw:function(e) {
_i_("3da:1240");
var t = this;
this._content(function(i) {
_i_("3da:2273"), t._render(i), "function" == typeof e && e(i), _r_();
}), _r_();
},
toggle:function(e) {
_i_("3da:1241"), e = arguments.length ? e :this.hidden(), this[e ? "show" :"hide"](), _r_();
},
hidden:function() {
return _i_("3da:1242"), _r_(!this._$root || this.root().hasClass(this.options.hideClass));
}
}, $.each([ "bind", "unbind", "one", "trigger" ], function(t, i) {
_i_("3da:809"), e._base[i] = function() {
return _i_("3da:1926"), this._emitter[i].apply(this._emitter, arguments), _r_(this);
}, _r_();
}), e._mixin.rect = function(e) {
_i_("3da:810");
var t = e[0].getBoundingClientRect();
return "width" in t || (t = $.extend({}, t), t.width = e.outerWidth(), t.height = e.outerHeight()), _r_(t);
}, e._mixin.position = function() {
_i_("3da:811");
var e = {}, t = $(window), i = this.options.position.split(" "), n = this.options.arrowSize, r = i.shift(), a = i.shift(), o = {}, _ = 0, s = this._rect(this.root()), l = this._rect(this.handle()), d = "fixed" === this.root().css("position"), c = d ? {
top:0,
left:0
} :{
top:t.scrollTop(),
left:t.scrollLeft()
};
switch (a) {
case "top":
o.top = l.height / 2 - 1.5 * n;
break;

case "left":
o.left = l.width / 2 - 1.5 * n;
break;

case "right":
o.left = l.width / 2 - s.width + 1.5 * n;
break;

case "bottom":
o.top = l.height / 2 - s.height + 1.5 * n;
break;

default:
o.top = (l.height - s.height) / 2, o.left = (l.width - s.width) / 2;
}
switch (_ = "right" === this.options.positionAlign || "left" === this.options.positionAlign ? 0 :o.left, r) {
case "left":
e.top = c.top + l.top + o.top, e.left = c.left + l.left - s.width - n;
break;

case "right":
e.top = c.top + l.top + o.top, e.left = c.left + l.left + l.width + n;
break;

case "top":
e.top = c.top + l.top - s.height - n, "right" === this.options.positionAlign ? e.left = c.left + l.right - s.width + _ :e.left = c.left + l.left + _;
break;

default:
e.top = c.top + l.top + l.height + n, "right" === this.options.positionAlign ? e.left = c.left + l.right - s.width + _ :e.left = c.left + l.left + _;
}
return _r_(e);
}, e.tooltip = e._base.extend({
actions:{
mouseenter:"onmouseenter",
mouseleave:"onmouseleave"
},
_showTimeout:null,
_hideTimeout:null,
onmouseenter:function() {
_i_("3da:1737");
var e = this;
if (this._hideTimeout && (clearTimeout(this._hideTimeout), this._hideTimeout = null), this.options.requireTooltipClass && this.options.requireTooltipClass.length > 0 && this._$handle && !this._$handle.hasClass(this.options.requireTooltipClass)) return _r_();
this.hidden() && (this._showTimeout = setTimeout(function() {
_i_("3da:2796"), e.show(), _r_();
}, this.options.showDelay)), this.options.keepContentOnHover && (this.root().off("mouseenter").mouseenter(function() {
_i_("3da:2733"), e._hideTimeout && (clearTimeout(e._hideTimeout), e._hideTimeout = null), _r_();
}), this.root().off("mouseleave").mouseleave(function() {
_i_("3da:2734"), e._hideTimeout = setTimeout(function() {
_i_("3da:2958"), e.hide(), _r_();
}, e.options.hideDelay), _r_();
})), _r_();
},
onmouseleave:function() {
_i_("3da:1738");
var e = this;
this._showTimeout && (clearTimeout(this._showTimeout), this._showTimeout = null), this._hideTimeout = setTimeout(function() {
_i_("3da:2633"), e.hide(), _r_();
}, this.options.hideDelay), _r_();
},
_action:function(t) {
_i_("3da:1739"), e._base._action.apply(this, arguments), this.options.keepOnContent && this._keepOnContent(t), _r_();
},
_keepOnContent:function(t) {
_i_("3da:1740");
var i = this, n = this.events.rootready + "._keepOnContent";
t ? this.bind(n, function() {
_i_("3da:2735"), e._base._action.call(i, t, i.actions, i.root()), _r_();
}) :(this.unbind(n), e._base._action.call(this, t, this.actions, this.root())), _r_();
},
defaults:{
baseClass:"fly-tooltip",
hideClass:"fly-tooltip_hidden",
extraClass:"",
position:"bottom center",
positionAlign:"",
requireTooltipClass:"",
arrowSize:10,
showDelay:300,
hideDelay:300
},
_rect:e._mixin.rect,
_position:e._mixin.position
}), e.dropdown = e._base.extend({
actions:{
click:"onclick"
},
onclick:function() {
_i_("3da:1741"), this.toggle(), _r_();
},
onresize:function() {
if (_i_("3da:1742"), this.hidden()) return _r_();
this.root().css(this._position()), _r_();
},
_action:function(t) {
_i_("3da:1743"), e._base._action.apply(this, arguments), e._base._action.call(this, t, {
resize:"onresize"
}, $(window)), this._autohide(t), _r_();
},
_autohide:function(e) {
_i_("3da:1744");
var t = this, i = "click" + t.ens + " keydown" + t.ens + " touchstart" + t.ens;
if (!e) return _r_();
this.bind(this.events.show, function() {
_i_("3da:2736"), setTimeout(n, 0), _r_();
}).bind(this.events.hide, function() {
_i_("3da:2496"), $(document).unbind(i), _r_();
});
function n() {
_i_("3da:2124"), $(document).bind(i, function(e) {
_i_("3da:2737");
var i = e.target, n = t.root()[0], r = t.handle()[0];
("keydown" === e.type && 27 === e.which || ("click" === e.type || "touchstart" === e.type) && i !== n && !$.contains(n, i) && i !== r && !$.contains(r, i)) && t.hide(), _r_();
}), _r_();
}
_r_();
},
defaults:{
baseClass:"fly-dropdown",
hideClass:"fly-dropdown_hidden",
extraClass:"",
position:"bottom center",
arrowSize:10
},
_rect:e._mixin.rect,
_position:e._mixin.position
}), e.hideAll = function() {
_i_("3da:812");
for (var t = 0, i = e._instances.length; i > t; t++) "function" == typeof e._instances[t].hide && e._instances[t].hide();
_r_();
}, $.fly = e, e.register$ = function(t, i) {
if (_i_("3da:813"), i === e._base || !(i instanceof e._base._ctor) || $.fn[t]) return _r_();
var n = "fly_" + t + "_" + +new Date();
$.fn[t] = function(e) {
_i_("3da:1927");
var t;
return this.each(function(a) {
if (_i_("3da:2634"), t) return _r_(!1);
var o = $(this), _ = o.data(n);
switch (e) {
case "instance":
t = _;
break;

case "destroy":
r(_);
break;

default:
r(_), o.data(n, i.create(o, e));
}
_r_();
}), _r_(t || this);
function r(e) {
_i_("3da:2274"), e && (e.handle().removeData(n), e._destroy()), _r_();
}
}, _r_();
}, $.each(e, e.register$), _r_();
}(), $.fly.tooltip = $.fly.tooltip.extend({
actions:{
mouseenter:"onmouseenter",
mouseleave:"onmouseleave",
focus:"onmouseenter",
blur:"onmouseleave"
}
}), B.define("lists/lists-api/lists-api", function(e, t, i) {
"use strict";
_i_("3da:114");
var n = e("jquery");
function r(e) {
return _i_("3da:409"), _r_(n.extend({}, e || {}, {
aid:B.env.aid || B.env.b_aid,
lang:B.env.b_lang_for_url,
sid:B.env.b_sid,
stype:B.env.b_site_type_id || "",
currency:B.env.b_selected_currency,
label:B.env.b_label,
partner_channel_id:B.env.partner_id,
stid:B.env.b_stid
}, B.env.b_is_bbtool_admin ? {
user_is_bbtool_admin:1
} :{}));
}
function a(e) {
return _i_("3da:410"), e.data = r(e.data), _r_(n.ajax(n.extend(e, {
type:"POST"
})));
}
i.exports = {
API:{
_prepareParams:r,
request:function(e, t, i) {
return _i_("3da:1928"), _r_(a({
url:e,
data:n.extend({}, t),
success:function(e) {
return _i_("3da:2797"), _r_((i || n.noop)(e));
}
}));
},
list:function(e, t) {
return _i_("3da:1929"), _r_(a({
url:"/wishlist/get",
data:n.extend({
with_hotels:1,
include_availability:1
}, e),
success:function(e) {
return _i_("3da:2798"), _r_((t || n.noop)(e));
}
}));
},
listById:function(e, t) {
return _i_("3da:1930"), _r_(a({
url:"/wishlist/get",
data:{
with_hotels:1,
include_availability:1,
id:e
},
success:function(e) {
return _i_("3da:2799"), _r_((t || n.noop)(e));
}
}));
},
updateHotels:function(e, t) {
return _i_("3da:1931"), _r_(a({
url:"/wishlist/save_hotels",
data:{
list:e.list_id,
hotel_ids:e.hotel_ids.join(","),
new_states:e.states.join(","),
is_recently_viewed:e.is_recently_viewed
},
success:function(e) {
_i_("3da:2800"), (t || n.noop)(e), _r_();
}
}));
},
updateComparisonHotels:function(e, t) {
return _i_("3da:1932"), _r_(a({
url:"/wishlist/save_hotels" + B.env.b_query_params_with_lang_no_ext,
data:e,
success:function(e) {
_i_("3da:2801"), (t || n.noop)(e), _r_();
}
}));
},
updateList:function(e, t) {
return _i_("3da:1933"), _r_(a({
url:"/wishlist/update",
data:e,
success:function(i) {
_i_("3da:2802"), i.success && (B.eventEmitter.trigger("lists:api:update", e), (t || n.noop)(i)), _r_();
}
}));
},
createList:function(e, t) {
return _i_("3da:1934"), _r_(a({
url:"/wishlist/create",
data:n.extend(e, {
name:String(e.name),
privacy:String(e.privacy)
}),
success:function(e) {
_i_("3da:2803"), (t || n.noop)(e), _r_();
}
}));
},
removeList:function(e, t) {
return _i_("3da:1935"), B.listmap && B.listmap.trigger("del_list"), _r_(a({
url:"/wishlist/delete",
data:{
list_id:e.list_id
},
success:function(e) {
_i_("3da:2804"), (t || n.noop)(e), _r_();
}
}));
},
updateTag:function(e, t) {
return _i_("3da:1936"), B.listmap && B.listmap.trigger(e.is_deleted ? "del_tag" :"added_tag"), _r_(a({
url:"/tag_item",
data:{
item_id:e.list_id,
tags:e.tags,
is_deleted:e.is_deleted || 0,
type:e.type
},
success:function(e) {
_i_("3da:2805"), (t || n.noop)(e), _r_();
}
}));
},
updateNote:function(e, t) {
return _i_("3da:1937"), B.listmap && B.listmap.trigger("save_note"), _r_(a({
url:"/wishlist/add_note",
data:{
list_id:e.list_id,
hotel_id:e.hotel_id,
note:e.note
},
success:function(e) {
_i_("3da:2806"), (t || n.noop)(e), _r_();
}
}));
},
removeHotel:function(e, t) {
return _i_("3da:1938"), _r_(a({
url:"/wishlist/save_hotel",
data:{
hotel_id:e.hotel_id,
lists:e.lists,
new_state:0
},
success:function(e) {
_i_("3da:2807"), (t || n.noop)(e), _r_();
}
}));
},
getRecentlyViewed:function(e, t) {
return _i_("3da:1939"), _r_(a({
url:"/wishlist/recently_viewed_hotel",
data:{
limit:e.limit,
list_id:e.list_id
},
success:function(e) {
_i_("3da:2808"), (t || n.noop)({
hotels:e
}), _r_();
}
}));
},
getAvailability:function(e, t) {
return _i_("3da:1940"), _r_(a({
url:"/wishlist/get_or_update_wishlist_hotels_dates",
data:n.extend({
hotel_ids:e.hotel_ids.join(","),
checkin:e.checkin,
checkout:e.checkout,
list_id:e.list_id || "",
is_recently_viewed:e.is_recently_viewed
}, e.additional),
success:function(e) {
_i_("3da:2809"), (t || n.noop)(e), _r_();
}
}));
}
},
type:{
RECENTLY_VIEWED:"3"
},
currentHotel:function() {
_i_("3da:1243");
var e = {
b_hotel_id:B.env.b_hotel_id,
b_hotel_name:B.env.b_hotel_name,
b_hotel_image_url_square60:B.env.b_hotel_image_url_square60,
b_hotel_url:"",
b_hotel_image_url_square150:""
};
return e.b_hotel_image_url_square60 && (e.b_hotel_image_url_square150 = e.b_hotel_image_url_square60.replace("square60", "square150")), !e.b_hotel_image_url_square150 && B.env.b_hotel_image_url_square90 && (e.b_hotel_image_url_square150 = B.env.b_hotel_image_url_square90.replace("square90", "square150")), "hotel" === B.env.b_action && (e.b_hotel_url = location.href), _r_(e);
},
getIdFromUrl:function(e) {
_i_("3da:1244");
var t = /wl_id=([a-zA-Z0-9-_]+)/, i = e.match(t);
return _r_(String(i && i[1]));
},
getLastChangedListId:function() {
_i_("3da:1245");
var e = B.env.b_reg_user_last_used_wishlist;
if (e) return _r_(e && e[0] && e[0].b_reg_user_detail_list_id);
return _r_("0");
},
storedProperty:function(e, t) {
return _i_("3da:1246"), window.b && window.b.storage ? ("undefined" != typeof t && window.b.storage({
key:e,
value:String(t),
location:"cookies"
}), _r_(String(window.b.storage({
key:e,
location:"cookies"
})))) :("undefined" != typeof t && n.cookie(e, String(t), {
domain:"booking.com",
path:"/"
}), _r_(n.cookie(e)));
}
}, _r_();
}), B.define("lists/lists-tools/lists-tools", function(e, t, i) {
"use strict";
_i_("3da:115"), i.exports = {
pick:function(e) {
_i_("3da:1247");
var t = {};
return $.each(Array.prototype.slice.call(arguments, 1), function(i, n) {
_i_("3da:2275"), t[n] = e[n], _r_();
}), _r_(t);
},
stringifyUrl:function(e, t, i) {
_i_("3da:1248"), t = t || "&", i = i || "=";
var n = [];
for (var r in e) e.hasOwnProperty(r) && n.push(r + i + e[r]);
return _r_(n.join(t));
},
keys:Object.keys,
throttle:function() {
_i_("3da:1745");
var e = function() {};
try {
e = B.tools.functions.throttle;
} catch (t) {
e = function(e) {
return _i_("3da:2810"), _r_(e());
};
}
return _r_(e);
}(),
ellipsis:function(e, t) {
if (_i_("3da:1249"), e.length < t) return _r_(e);
return _r_(e.slice(0, t) + "&hellip;");
},
htmlEncode:function() {
_i_("3da:1746");
var e = function() {};
try {
e = B.tools.string.htmlEncode;
} catch (t) {
e = function(e) {
return _i_("3da:2811"), _r_(e);
};
}
return _r_(e);
}(),
htmlDecode:function() {
_i_("3da:1747");
var e = function() {};
try {
e = B.tools.string.htmlDecode;
} catch (t) {
e = function(e) {
return _i_("3da:2812"), _r_(e);
};
}
return _r_(e);
}()
}, _r_();
}), B.define("lists/lists-store/lists-store", function(e, t, i) {
"use strict";
_i_("3da:116");
var n = e("jquery"), r = e("../lists-api/lists-api").API, a = booking.promise;
a = booking.promise ? booking.promise :function() {
_i_("3da:1250");
var e = n.Deferred();
return e.fulfill = e.resolve, _r_(e);
};
function o(e) {
_i_("3da:411");
var t = booking[sNSStartup].wlData;
if (!t) return _r_();
setTimeout(function() {
_i_("3da:1251"), t.clearCache(), B.eventEmitter.trigger(t.EVENTS.EDITHOTEL, e), _r_();
}, 0), _r_();
}
function _(e) {
return _i_("3da:412"), _r_(String(e.b_id || e.b_hotel_id || e.hotel_id || e.id));
}
function s(e, t) {
_i_("3da:413"), e.on = function(e, i) {
return _i_("3da:1252"), B.eventEmitter.bind(t + e, function() {
_i_("3da:2276");
var e = Array.prototype.slice.call(arguments, 1);
i.apply(B.eventEmitter, e), _r_();
}), _r_(this);
}, e.emit = function(e) {
_i_("3da:1253");
var i = Array.prototype.slice.call(arguments, 1);
B.eventEmitter.trigger(t + e, i), _r_();
}, _r_();
}
function l() {
_i_("3da:414");
var e = [];
this._lists = e, this._requestsInProgress = {}, this._fetchedHotelIds = {}, this._backCompatibility = !0, s(this, "listStore_"), _r_();
}
l.prototype.getHotelId = _, l.prototype.backCompatibility = function(e) {
_i_("3da:814"), this._backCompatibility = e, _r_();
}, l.prototype._prepareHotelsData = function(e) {
_i_("3da:815");
var t = this;
return e.forEach(function(e, i, n) {
_i_("3da:1941"), e.index = i, e.index_is_first = 0 === i, e.index_is_last = i === n.length - 1, t.emit("hotel:init", e), _r_();
}), _r_(e);
}, l.prototype._prepareListsData = function(e, t) {
_i_("3da:816");
var i = this;
return t = t || {}, e.forEach(function(e) {
_i_("3da:1942"), e.hotels_count = e.hotels_count || 0, t.hotel_id && (e.hotels || (e.hotels = []), e.selected && e.hotels.push({
id:t.hotel_id
})), i._prepareHotelsData(e.hotels || []), _r_();
}), _r_(e);
}, l.prototype.getListById = function(e) {
_i_("3da:817");
var t = {};
return this._lists.forEach(function(e) {
_i_("3da:1943"), t[e.id] = e, _r_();
}), _r_(t[e]);
}, l.prototype.getListByDefaultListId = function(e) {
_i_("3da:818");
var t = null;
return this._lists.forEach(function(i) {
_i_("3da:1944"), i.default_list && parseFloat(i.default_list) === e && (t = i), _r_();
}), _r_(t);
};
function d(e, t) {
return _i_("3da:415"), _r_(new Array(e + 1).join(String(t)).split(""));
}
l.prototype.toggleHotel = function(e) {
_i_("3da:819");
var t = a(), i = this.getHotelById(e);
return i ? this.removeHotels({
hotels:[ i ],
list_id:e.list_id
}).then(function(e) {
_i_("3da:2277"), t.fulfill({
res:e,
state:!1
}), _r_();
}) :this.addHotels({
hotels:[ {
hotel_id:e.hotel_id
} ],
list_id:e.list_id
}).then(function(e) {
_i_("3da:2278"), t.fulfill({
res:e,
state:!0
}), _r_();
}), _r_(t);
}, l.prototype.addHotels = function(e) {
_i_("3da:820");
var t = this, i = a(), n = e.hotels.map(_);
return this.emit("list:changed:loading", !0, e), r.updateHotels({
list_id:e.list_id,
hotel_ids:n,
states:d(e.hotels.length, 1)
}, function(r) {
_i_("3da:1945");
var a = t.getListById(e.list_id);
if (a.hotels = a.hotels || [], Array.prototype.push.apply(a.hotels, t._prepareHotelsData(r.hotels_data)), "undefined" != typeof a.hotels_count && (a.hotels_count += 1), B.eventEmitter.trigger("lists:hotels:added", e), t.emit("list:changed:loading", !1, e), t.emit("list:changed", a, {
hotel_ids:n
}), i.fulfill(r), !t._backCompatibility) return _r_();
o({
params:{
hotel_id:n[0],
lists:e.list_id
},
result:r
}), _r_();
}), _r_(i);
}, l.prototype.getListByIndex = function(e) {
return _i_("3da:821"), _r_(this._lists[e]);
}, l.prototype.removeHotels = function(e) {
_i_("3da:822");
var t = this, i = a(), n = t.getListById(e.list_id);
e.hotels.forEach(function(e) {
_i_("3da:1946");
var i = t.getHotelIndexById({
hotel_id:_(e),
list_id:n.id
});
-1 !== i && n.hotels.splice(i, 1), _r_();
}), B.eventEmitter.trigger("hotels:before:removed", e);
var s = e.hotels.map(_);
return this.emit("list:changed:loading", !0, e), r.updateHotels({
list_id:e.list_id,
hotel_ids:s,
states:d(e.hotels.length, 0)
}, function(r) {
if (_i_("3da:1947"), n.hotels_count && (n.hotels_count -= e.hotels.length), B.eventEmitter.trigger("hotels:removed", e), t.emit("list:changed:loading", !1, e), t.emit("list:changed", n, {
hotel_ids:s
}), i.fulfill(r), !t._backCompatibility) return _r_();
o({
params:{
hotel_id:s[0],
lists:e.list_id,
new_state:0
},
result:r
}), _r_();
}), _r_(i);
}, l.prototype.createList = function(e) {
_i_("3da:823");
var t = this, i = a();
return r.createList(n.extend(e, {
name:e.name
}), function(n) {
if (_i_("3da:1948"), !n.success || !n.id) return _r_(i.reject(n));
t._lists.push(n), n.hotels = [], n.hotels_count = 0, e.hotel_id && (n.hotels.push({
hotel_id:e.hotel_id
}), n.hotels_count++), t.emit("list:created", n, {
hotel_ids:[ e.hotel_id ]
}), B.eventEmitter.trigger("lists:created", e), i.fulfill(n), _r_();
}), _r_(i);
}, l.prototype.updateList = function(e) {
_i_("3da:824");
var t = a(), i = this.getListById(e.list_id);
return n.extend(i, e), r.updateList(e, function(e) {
_i_("3da:1949"), t.fulfill(e), _r_();
}), _r_(t);
}, l.prototype.getHotels = function(e) {
_i_("3da:825");
var t = this, i = a();
if (e.hotels && e.hotels.length > 0 && Number(e.hotels_count) === e.hotels.length && e.hotels[0].name) return i.fulfill(e), _r_(i);
return t.emit("list:hotels:loading", !0), r.list({
id:e.id,
with_hotels:1,
include_availability:1,
comparison_mode:B.env.fe_cdm_wl_fetch_additional_data,
include_recently_viewed:B.env.fe_cdm_lists_include_recently_viewed
}, function(n) {
if (_i_("3da:1950"), !n.success) return _r_(i.reject(n));
var r = n.lists[0];
e.hotels = t._prepareHotelsData(r.hotels), r && r.travel_group && (e.travel_group = r.travel_group), t.emit("list:hotels:loading", !1), i.fulfill(e), _r_();
}), _r_(i);
}, l.prototype.removeList = function(e) {
_i_("3da:826");
var t = this, i = -1;
if (this._lists.forEach(function(t, n) {
_i_("3da:1951"), String(e.list_id) === String(t.id) && (i = n), _r_();
}), -1 === i) return _r_();
this._lists.splice(i, 1), r.removeList({
list_id:e.list_id
}, function() {
_i_("3da:1952"), t.emit("list:removed", e), _r_();
}), _r_();
}, l.prototype._find = function(e) {
_i_("3da:827");
var t = this, i = null, n = -1, r = t.getListById(e.list_id);
return e.list_id ? r.hotels.forEach(function(t, r) {
_i_("3da:2279"), _(t) === String(e.hotel_id) && (i = t, n = r), _r_();
}) :t._lists.forEach(function(t) {
_i_("3da:2280"), t.hotels.forEach(function(t, r) {
_i_("3da:2813"), _(t) === String(e.hotel_id) && (i = t, n = r), _r_();
}), _r_();
}), _r_({
index:n,
res:i
});
}, l.prototype.getHotelById = function(e) {
return _i_("3da:828"), _r_(this._find(e).res);
}, l.prototype.getHotelIndexById = function(e) {
return _i_("3da:829"), _r_(this._find(e).index);
}, l.prototype.fetch = function(e) {
_i_("3da:830"), e = e || {};
var t = this, i = a();
if (this._requestsInProgress[JSON.stringify(e)]) return _r_(this._requestsInProgress[JSON.stringify(e)]);
if (t._lists.length > 0) {
if (!e.hotel_id) return i.fulfill({
lists:t._lists
}), _r_(i);
if (t._fetchedHotelIds[e.hotel_id]) return i.fulfill({
lists:t._lists
}), _r_(i);
}
this._requestsInProgress[JSON.stringify(e)] = i, e.hotel_id || t.emit("liststore:loading", !0);
function o(n) {
if (_i_("3da:1254"), t._lists.length = 0, null === n) return _r_();
Array.prototype.push.apply(t._lists, t._prepareListsData(n.lists, e)), t.emit("liststore:loading", !1), t._requestsInProgress[JSON.stringify(e)] = null, i.fulfill(n), _r_();
}
function _(n) {
_i_("3da:1255"), t._fetchedHotelIds[e.hotel_id] = !0;
var r = t._prepareListsData(n.lists, e);
r.forEach(function(e) {
_i_("3da:2281");
var i = t.getListById(e.id);
i ? (i.hotels || (i.hotels = []), e.hotels.forEach(function(e) {
_i_("3da:2915");
var n = t.getHotelById({
list_id:i.id,
hotel_id:t.getHotelId(e)
});
n || i.hotels.push(e), _r_();
})) :t._lists.push(e), _r_();
}), t._requestsInProgress[JSON.stringify(e)] = null, i.fulfill(n), _r_();
}
return e.hotel_id ? r.list(n.extend({}, e), _) :r.list(n.extend({}, e), o), _r_(i);
}, l.prototype.getLists = function() {
return _i_("3da:831"), _r_(this._lists);
}, l.prototype.clearCache = function() {
_i_("3da:832"), this._lists.length = 0, _r_();
}, i.exports = new l(), _r_();
}), B.define("lists/listview-header/listview-header", function(e, t, i) {
"use strict";
_i_("3da:117");
var n = e("../listview-dropdown/listview-dropdown"), r = e("../lists-store/lists-store");
function a() {
_i_("3da:416");
var e = this, t = {
RENAME:".js-listview-header-list-rename",
REMOVE:".js-listview-header-list-remove"
};
function i() {
_i_("3da:833");
var i = r._lists.length <= 1;
e.el.find(t.REMOVE).toggleClass("g-hidden", i), _r_();
}
r.on("list:removed", $.proxy(i, e)), r.on("list:created", $.proxy(i, e)), this.el.delegate(t.RENAME, "click", function(t) {
_i_("3da:1256"), t.preventDefault(), n.renameList.call(e, e.getCurrentList()), _r_();
}), this.el.delegate(t.REMOVE, "click", function(t) {
_i_("3da:1257"), t.preventDefault(), n.removeList.call(e, e.getCurrentList()), _r_();
}), this.el.delegate(".listview-header-recent-link", "click", function(t) {
_i_("3da:1258"), t.preventDefault(), e.toggleRecentlyViewed(), _r_();
}), _r_();
}
i.exports = a, _r_();
}), B.define("lists/listview-touch/listview-touch", function(e, t, i) {
"use strict";
_i_("3da:118");
function n() {
_i_("3da:417"), $(document.body).toggleClass("listview--is-tablet", B.env.b_is_tdot_traffic), B.eventEmitter.bind("foldout:login:success", function() {
if (_i_("3da:1259"), !window.listView) return _r_();
window.listView.clearCache(), _r_();
}), _r_();
}
n.isEnabled = function() {
return _i_("3da:834"), _r_(B.env.b_is_tdot_traffic);
}, i.exports = n, _r_();
}), B.define("lists/listview-dropdown/listview-dropdown", function(e, t, i) {
"use strict";
_i_("3da:119");
var n = e("jquery"), r = e("../lists-tools/lists-tools"), a = e("../lists-store/lists-store"), o = e("../listview-touch/listview-touch");
function _() {
_i_("3da:418");
var e = this, t = "listview__dropdown";
o.isEnabled() && (t += " listview__dropdown--touch"), n.fly.dropdown.extend({
defaults:{
position:"bottom center",
extraClass:t,
content:function() {
return _i_("3da:2635"), _r_(B.jstmpl("listview_dropdown").render({
lists:n.map(a._lists, function(e) {
return _i_("3da:2981"), _r_(n.extend({
name_short:r.ellipsis(e.name, 18)
}, e));
}),
lists_count:a._lists.length,
currentList:e.getCurrentList(),
b_user_auth_level_is_low_or_high:B.env.b_user_auth_level_is_low_or_high,
b_lang:B.env.b_lang
}));
}
},
onrootready:function() {
_i_("3da:2282");
var t = 10004, i = this;
i.bind("show", function() {
_i_("3da:2814"), B.eventEmitter.trigger("listview:open-dropdown"), _r_();
}), i.root().css("z-index", t).delegate(".js-listview-change-list", "click", function(t) {
_i_("3da:2991"), t.preventDefault();
var r = n(t.currentTarget).data("id");
e.setCurrentList({
id:r
}), i.hide();
var a = e.getListById(r);
a && a.is_recently_viewed && B.et.customGoal("GaQOMdEefOSWEYXOeEVJPbHC", 4), _r_();
}).delegate(".js-listview-rename-list", "click", function(t) {
_i_("3da:2960"), t.preventDefault(), t.stopPropagation();
var r = n(t.currentTarget).closest(".listview__list").data("id"), a = e.getListById(r);
_.renameList.call(e, a), i.hide(), _r_();
}).delegate(".js-listview-remove-list", "click", function(t) {
_i_("3da:2916"), t.preventDefault(), t.stopPropagation();
var r = n(t.currentTarget).closest(".listview__list").data("id");
_.removeList.call(e, {
id:r
}, function() {
_i_("3da:2990"), i.hide(), _r_();
}), _r_();
}).delegate(".js-listview-create-list", "click", function(t) {
_i_("3da:2815"), t.preventDefault(), t.stopPropagation();
var r;
r = "zh-tw" === B.env.b_selected_language && B.et.track("MKMBNLOLOLOdDSOaDfUFFEeQSAEeNGJNZGCbWBHWWe") ? "lists_map_list_name_zhtw" :"lists_map_list_name";
var o = n.trim(window.prompt(B.jstmpl.translations(r), ""));
if (!o) return _r_();
a.createList({
name:o
}).then(function(t) {
_i_("3da:2959"), e.setCurrentList({
id:t.id
}), i.hide(), _r_();
}), _r_();
}), _r_();
}
}).delegate(".js-listview-header-dropdown"), _r_();
}
_.renameList = function(e) {
_i_("3da:835");
var t;
t = "zh-tw" === B.env.b_selected_language && B.et.track("MKMBNLOLOLOdDSOaDfUFFEeQSAEeNGJNZGCbWBHWWe") ? "dsf_rename_list_dialogue_zhtw" :"dsf_rename_list_dialogue";
var i = n.trim(window.prompt(B.jstmpl.translations(t), e.name));
if (!i) return _r_();
a.updateList({
list_id:e.id,
name:r.htmlEncode(i)
}), this.renderHeader(), _r_();
}, _.removeList = function(e, t) {
_i_("3da:836");
var i = n.trim(B.jstmpl.translations("wishlist_delete_prompt"));
window.confirm(i) && (a.removeList({
list_id:e.id
}), B.eventEmitter.trigger("listview:remove-list"), t && t()), _r_();
}, i.exports = _, _r_();
}), B.define("lists/listview-travel-party/listview-travel-party", function(e, t, i) {
"use strict";
_i_("3da:120");
var n = e("jquery"), r = e("../lists-tools/lists-tools");
function a(e) {
_i_("3da:419"), setTimeout(function() {
_i_("3da:1260"), e.resizeLightbox(), _r_();
}, 300), _r_();
}
function o() {
_i_("3da:420");
var e = this;
B.env.b_is_wishlist_singlepage || e.el.find(".b-selectbox__groupselection").bind("change", function() {
_i_("3da:1953"), a(e), _r_();
}), B.eventEmitter.bind("change:list:hotels", function(t, i) {
_i_("3da:1261");
var r = i.travel_group;
if ((!r || n.isEmptyObject(r)) && (r = {
rooms:1,
adults:2,
children:0
}), 1 === Number(r.rooms) && 0 === Number(r.children) && B.search.group("adults") === Number(r.adults)) return _r_();
B.search.group(r), B.env.b_is_wishlist_singlepage || a(e), _r_();
}), _r_();
}
o.buildUrlPart = function() {
_i_("3da:837");
var e = B.env.b_query_params_delimiter, t = n.map(B.search.group("childrenAges"), function(e) {
return _i_("3da:2500"), _r_("age=" + e);
}).join(e), i = e + r.stringifyUrl({
group_rooms:B.search.group("rooms"),
group_adults:B.search.group("adults"),
group_children:B.search.group("children")
}, e) + e + t;
return _r_(i);
}, o.buildAvailabilityParams = function() {
_i_("3da:838");
var e = r.pick(B.search.group("value"), "rooms", "adults", "children", "childrenAges");
return e.childrenAges && (e.childrenAges = e.childrenAges.join(" ")), _r_({
additional:e
});
}, i.exports = o, _r_();
}), B.define("lists/listview-calendar/listview-calendar", function(e, t, i) {
"use strict";
_i_("3da:121");
var n = e("../lists-tools/lists-tools"), r = e("../listview-hotel/listview-hotel"), a = e("../listview-availability/listview-availability"), o = "silent_update";
function _() {
if (_i_("3da:421"), B.calendar2 && _._bindEvents.call(this), B.search) {
var e = B.search.dates;
B.search.dates = function(t, i, n) {
if (_i_("3da:1954"), "undefined" == typeof n) return _r_(e.apply(B.search, arguments));
return i = B.Search.createDate(i), _r_(this.setDate_(t, i, n));
};
}
_r_();
}
_._bindEvents = function() {
_i_("3da:839");
function e(e, t, i) {
_i_("3da:1262"), e.availability[t] = i.toString(), e.availability[t + "_localized_date_short"] = B.formatter.date(i.toString(), "short_date_without_year"), _r_();
}
var t = 0, i = this, s = null, l = $.extend({}, B.calendar2.checkinOptions, {
lazy:!1
}), d = $.extend({}, B.calendar2.checkoutOptions, {
lazy:!1
}), c = this.el.find(".b-form-checkin .b-datepicker").calendar2(l).data("calendar2"), u = this.el.find(".b-form-checkout .b-datepicker").calendar2(d).data("calendar2");
function h(e, t) {
_i_("3da:1263"), B.eventEmitter.off("SEARCH:date_changed", g);
var i = B.search.dates("checkout");
i >= t ? (B.search.dates("checkin", e, {
referrer:o
}), B.search.dates("checkout", t, {
referrer:o
})) :(B.search.dates("checkout", t, {
referrer:o
}), B.search.dates("checkin", e, {
referrer:o
})), B.eventEmitter.bind("SEARCH:date_changed", g), _r_();
}
function f(e) {
_i_("3da:1264");
var t = B.Search.createDate(e);
return _r_({
date:t,
dayId:B.calendar2.dayId(t.year, t.month, t.date),
monthId:B.calendar2.monthId(t.year, t.month)
});
}
function p(e) {
_i_("3da:1265");
var t = e ? e.availability || {} :{};
if (t.checkin && t.checkout) {
var i = f(t.checkin), n = f(t.checkout);
h(i.date, n.date), c.selectRange(i.dayId, n.dayId), c.selectMonth(i.monthId), u.selectRange(i.dayId, n.dayId), u.selectMonth(n.monthId);
}
_r_();
}
B.eventEmitter.bind("SEARCH:date_changed", g);
function g(r, l) {
if (_i_("3da:1266"), !s || l.referrer === o) return _r_();
"checkin" === l.type && e(s, "checkin", l.value), "checkout" === l.type && e(s, "checkout", l.value), s.availability.checkout || (_.ensureDates(), e(s, "checkout", B.search.dates("checkout"))), s.availability.checkin || (_.ensureDates(), e(s, "checkin", B.search.dates("checkin"))), t = setTimeout(function() {
if (_i_("3da:2501"), t && window.clearTimeout(t), !s) return _r_();
B.env.fe_cdm_list_no_individual_dates ? (a.checkAvailability({
list:i.getCurrentList(),
dates:n.pick(s.availability, "checkin", "checkout")
}), B.eventEmitter.trigger("listview:check-all-hotels-availability")) :(a.checkAvailability({
list:i.getCurrentList(),
hotels:[ s ],
dates:n.pick(s.availability, "checkin", "checkout")
}), B.eventEmitter.trigger("listview:check-single-hotel-availability")), s = null, _r_();
}, 100), _r_();
}
this.el.delegate(".js-listview-toggle-calendar", "click", function(e) {
_i_("3da:1955"), e.preventDefault(), s = i.getHotelFromEvent(e), r.setHotelProperty(s, "edit", !0);
var t = $(e.currentTarget).attr("data-type");
p(s), setTimeout(function() {
_i_("3da:2636"), i.el.find(".b-form-" + t + " .b-datepicker").trigger("showCalendar"), _r_();
}, 0), _r_();
}), _r_();
}, _.ensureDates = function() {
if (_i_("3da:840"), !(B.search.dates("checkin") instanceof B.Search.Date && B.search.dates("checkout") instanceof B.Search.Date)) {
var e = new Date();
B.search.dates("checkin", {
date:e.getDate(),
month:e.getMonth(),
year:e.getFullYear()
}), B.search.dates("checkout") instanceof B.Search.MonthDate && B.search.dates("checkout", {
date:1,
month:B.search.dates("checkout").month,
year:B.search.dates("checkout").year
});
}
_r_();
}, i.exports = _, _r_();
}), B.define("lists/listview-note/listview-note", function(e, t, i) {
"use strict";
_i_("3da:122");
var n = e("../lists-api/lists-api").API;
function r(e) {
_i_("3da:422"), $(e).find("textarea").each(function() {
_i_("3da:1956"), this.setAttribute("style", "height:" + (this.scrollHeight - 5) + "px; overflow-y:hidden;"), _r_();
}).bind("input", function() {
_i_("3da:1267"), this.style.height = "auto", this.style.height = this.scrollHeight - 5 + "px", _r_();
}), _r_();
}
function a() {
return _i_("3da:423"), $.extend(this, {
noteInput:function(e, t) {
_i_("3da:1957");
var i = this.getHotelNodeById(e.id), n = i.find(".js-listview-note-text");
return "string" == typeof t && n.val(t), _r_(n.val());
},
toggleNote:function(e, t) {
_i_("3da:1958");
var i = this.getHotelNodeById(e.id);
i.find(".js-listview-note").toggleClass("g-hidden", !t), t && i.find(".js-listview-note-text").focus(), r(i), _r_();
},
toggleWrapper:function(e, t) {
_i_("3da:1959");
var i = this.getHotelNodeById(e.id), n = i.find(".js-listview-note-toggle-wrapper");
n.css("visibility", t ? "visible" :"hidden"), _r_();
},
toggleNoteControls:function(e, t, i) {
_i_("3da:1960");
var n = this.getHotelNodeById(e.id);
n.find(".listview-note__controls").toggleClass("g-hidden", !t), i && i.blur && n.find(".js-listview-note-text").blur(), _r_();
},
showSavedConfirmation:function(e) {
if (_i_("3da:1961"), "" === e.note) return _r_();
var t = this.getHotelNodeById(e.id), i = "listview-note__saved--showing", n = t.find(".js-listview-note-saved");
n.addClass(i), setTimeout(function() {
_i_("3da:2637"), n.removeClass(i), _r_();
}, 2e3), _r_();
},
setHotelNote:function(e) {
_i_("3da:1962");
var t = this, i = this.getHotelById(e);
i.note = e.note, this.noteInput(i, e.note), n.updateNote({
list_id:e.list_id,
hotel_id:e.hotel_id,
note:e.note
}, function() {
_i_("3da:2638"), t.showSavedConfirmation(i), _r_();
}), _r_();
},
_bindNoteEvents:function() {
_i_("3da:1963");
var e = this;
this.delegateEvents({
"click .js-listview-note-toggle":function(e) {
_i_("3da:2816"), e.preventDefault();
var t = this.getHotelFromEvent(e);
this.toggleWrapper(t, !1), this.toggleNote(t, !0), _r_();
},
"mousedown .js-listview-note-save":function(e) {
_i_("3da:2817"), e.preventDefault();
var t = this.getHotelFromEvent(e);
this.setHotelNote({
hotel_id:t.id,
list_id:this.currentList().id,
note:this.noteInput(t)
}), this.toggleNoteControls(t, !1, {
blur:!0
}), _r_();
},
"mousedown .js-listview-note-remove":function(e) {
_i_("3da:2818"), e.preventDefault();
var t = this.getHotelFromEvent(e);
this.toggleWrapper(t, !0), this.toggleNote(t, !1), this.setHotelNote({
hotel_id:t.id,
list_id:this.currentList().id,
note:""
}), this.toggleNoteControls(t, !1, {
blur:!0
}), _r_();
},
"blur .js-listview-note-text":function(e) {
_i_("3da:2819");
var t = this.getHotelFromEvent(e);
$(e.currentTarget).removeClass("listview-note__text--active"), this.toggleNoteControls(t, !1), t.note || this.noteInput(t) || (this.toggleNote(t, !1), this.toggleWrapper(t, !0)), _r_();
},
"focus .js-listview-note-text":function(e) {
_i_("3da:2820");
var t = this.getHotelFromEvent(e);
$(e.currentTarget).addClass("listview-note__text--active"), this.toggleNoteControls(t, !0), _r_();
}
}), B.eventEmitter.bind("listview:rendered:hotels", function() {
_i_("3da:2639"), r(e.el), _r_();
}), B.eventEmitter.bind("listview:rendered:hotel", function(e, t) {
_i_("3da:2640"), r(t), _r_();
}), _r_();
}
}), _r_(this);
}
i.exports = a, _r_();
}), B.define("lists/listview-tabs/listview-tabs", function(e, t, i) {
"use strict";
_i_("3da:123");
function n(e) {
if (_i_("3da:424"), this._el = e.el, 0 === this._el.length) return _r_();
this._currentTab = null, this.currentTab(e.current), this.onSwitch = e.onSwitch, _r_();
}
n.prototype.currentTab = function(e) {
if (_i_("3da:841"), "undefined" == typeof e) return _r_(this._currentTab);
var t = this._el.find('[data-tab="' + e + '"]');
if (0 === t.length) throw new Error("[listview-tabs] No such tab");
this._currentTab = e;
var i = t.data("tab-template");
i && 0 === t.children().length && t.html(B.jstmpl(i).render()), "function" == typeof this.onSwitch && this.onSwitch(e, t), this._el.find("[data-tab]").not(t).addClass("g-hidden"), t.removeClass("g-hidden"), _r_();
}, i.exports = n, _r_();
}), B.define("lists/listview-share/listview-share", function(e, t, i) {
"use strict";
_i_("3da:124");
var n = e("jquery");
function r() {
_i_("3da:425");
var e = this;
if ("0" === B.env.auth_level) return this.delegateEvents({
"click .js-listview-share-link":function(e) {
_i_("3da:2283"), e.preventDefault(), B.lightbox.hide(), B.command("show-auth-lightbox").run(), _r_();
}
}), _r_();
var t = n.fly.dropdown.extend({
defaults:{
position:"bottom center",
extraClass:"listview-share",
content:function() {
return _i_("3da:2502"), _r_(B.jstmpl("listview_share").render(n.extend(e.getCurrentList(), {
b_selected_language:B.env.b_selected_language
})));
}
},
selectInput:function() {
_i_("3da:2125");
function e() {
_i_("3da:2503"), this.root().find(".js-listview-share-url").select(), _r_();
}
setTimeout(e.bind(this), 100), _r_();
},
handleClick:function(e) {
_i_("3da:2126"), e.preventDefault(), this.selectInput(), _r_();
},
onrootready:function() {
_i_("3da:2127");
var e = this, t = 10004;
this.bind("show", this.selectInput.bind(this)), this.bind("show", function() {
_i_("3da:2738"), e.root().loadComponents(), _r_();
}), this.root().css("z-index", t).delegate(".js-listview-share-url", "click", this.handleClick.bind(this)), B.et.goal("wl_invite_friends"), B.env.fe_cdm_web_track_share_and_create_lists && this.bind("show", function() {
_i_("3da:2878"), B.eventEmitter.trigger("listview:share-wishlist"), B.et.customGoal("GaQOMYTBYYWUFOHNVSPMKPEcdEeKe", 1), _r_();
}), _r_();
}
});
t.delegate(".js-listview-share-link"), _r_();
}
i.exports = r, _r_();
}), B.define("lists/listview-map/listview-map", function(e, t, i) {
"use strict";
_i_("3da:125");
var n = e("et"), r = e("../listview-template/listview-template"), a = {
engine:"html",
className:"js-listview-map-hotel-iw",
disablePan:!0,
getPosition:o,
isFixed:!0
};
function o() {
return _i_("3da:426"), _r_({
x:8,
y:8
});
}
function _(e) {
_i_("3da:427"), this.el = e.el, this.currentMarker = null, this.onSwitch = e.onSwitch, _r_();
}
_.prototype.renderList = function(e, t) {
if (_i_("3da:842"), this._map) {
this._map.closeIW();
var i = this._setMarkers(e.hotels);
this._adjust(i);
}
_r_();
}, _.prototype.updateList = function(e) {
_i_("3da:843"), this._setMarkers(e.hotels), this.currentMarker && this._map.setIconActive(this.currentMarker.id), _r_();
}, _.prototype._adjust = function(e) {
_i_("3da:844");
var t = this;
setTimeout(function() {
_i_("3da:1964"), t._map.resize();
var i = e.map(function(e) {
return _i_("3da:2739"), _r_([ e.b_latitude, e.b_longitude ]);
});
setTimeout(function() {
_i_("3da:2641"), i.length > 0 && t._map.setBoundingBox(i), _r_();
}, 0), _r_();
}, 0), _r_();
}, _.prototype._setMarkers = function(e) {
_i_("3da:845"), this._map.clearMarkers();
var t = this._generateMarkersData(e || []);
return this._map.addMarkers(t), _r_(t);
}, _.prototype._generateMarkersData = function(e) {
return _i_("3da:846"), _r_(e.reduce(function(e, t) {
return _i_("3da:2284"), t.b_undo || e.push(this._generateMarkerData(t)), _r_(e);
}.bind(this), []));
}, _.prototype._generateMarkerData = function(e) {
return _i_("3da:847"), _r_($.extend({}, r.prepare(e), {
b_id:e.id,
b_type:this._getMarkerType(e),
b_latitude:e.latitude,
b_longitude:e.longitude
}));
}, _.prototype._getMarkerType = function(e) {
return _i_("3da:848"), _r_(e.availability && e.availability.is_available ? "hotel" :"hotel_soldout");
}, _.prototype.getMap = function() {
_i_("3da:849");
var e = this, t = new B.promise();
if (this._map) return t.fulfill(this._map), _r_(t);
return B.atlas.require([ "jQuery", "atlas" ], function(i, n) {
_i_("3da:1965");
var r = new n({
modules:[ "bounds", "hover", "icons-default", "atlas-common-icons", "atlas-style", "iw", "markers", "default-styles" ],
options:{
id:"listview-map",
domNode:e.el,
scrollwheel:!0,
panControl:!1,
mapTypeControl:!1,
zoomControl:!0,
zoomPosition:"RIGHT_BOTTOM"
}
});
r.set("fixedIw", !0), r.done(function() {
_i_("3da:2642"), window._listview_map = r, e._map = r, t.fulfill(r), _r_();
}), _r_();
}), _r_(t);
}, _.prototype.showHotelCard = function(e, t) {
_i_("3da:850");
var i = this._map.getMarker(e);
if (!i) return _r_();
this.currentMarker = i, this._map.setIconActive(i.id);
var n = B.jstmpl("listview_hotel_map").render(i.data);
this._map.openIW(i.id, null, n), t && setTimeout(function() {
_i_("3da:2643"), this._map.panTo([ i.data.b_latitude, i.data.b_longitude ]), this._map.animateMarker(i.id), _r_();
}.bind(this), 200), _r_();
}, _.prototype.init = function() {
_i_("3da:851");
var e = this;
this.el.on("click", ".js-remove-hotel-map", function() {
_i_("3da:1966"), e._map && (e._map.closeIW(), e.currentMarker = null), _r_();
}), this.getMap().then(function(t) {
_i_("3da:1967"), t.setIW(a), t.on("marker-hover", function(e) {
_i_("3da:2644"), t.setIconHover(e.id), _r_();
}), t.on("marker-out", function(e) {
_i_("3da:2645"), t.setIconOut(e.id), _r_();
}), t.on("marker-click", function(t) {
_i_("3da:2646"), n.customGoal("GaQOMdEebNKe", 5), e.showHotelCard(t.id), _r_();
}), _r_();
}), _r_();
}, i.exports = _, _r_();
}), B.define("lists/lists-listview/lists-listview", function(e, t, i) {
"use strict";
_i_("3da:126");
var n = e("../lists-tools/lists-tools"), r = e("../lists-api/lists-api"), a = e("../lists-api/lists-api").API, o = e("../lists-store/lists-store"), _ = e("../listview-dropdown/listview-dropdown"), s = e("../listview-travel-party/listview-travel-party"), l = e("../listview-calendar/listview-calendar"), d = e("../listview-header/listview-header"), c = e("../listview-touch/listview-touch"), u = e("../listview-tabs/listview-tabs"), h = e("../listview-share/listview-share"), f = e("../listview-header/listview-create-list"), p = e("../listview-map/listview-map"), g = e("../listview-template/listview-template"), m = e("../listview-hotel/listview-hotel"), v = e("../listview-availability/listview-availability"), b = e("et"), y = "GaQOMIEDdebYPZWe", w = e("jquery"), k = function() {};
B.env.fe_cdm_lists_include_recently_viewed && (k = e("dismiss-item"));
function C(e) {
_i_("3da:428");
var t = this;
this.el = e.el, this._currentList = {
id:"",
hotels:[],
name:"",
url:"",
privacy:"",
hotels_count:0
}, this._prevList = null, this.store = o, this._isShown = !1, o.on("hotel:init", function(e) {
_i_("3da:1268"), v.setHotelAvailability(e, e.availability || {}, {
updateNights:!0,
silent:!0
}), _r_();
}), c.isEnabled() && c.call(this);
var i = "mywishlist" === B.env.b_action && "www" === B.env.b_site_type ? "loader" :"main";
this.mapIsOpen = !1, this.tabs = new u({
el:this.el,
current:i,
onSwitch:function(e) {
_i_("3da:2128"), "map" === e && t.map ? (t.mapIsOpen = !0, t.renderHeader(), t.map.renderList(t.getCurrentList())) :"main" === e && (t.mapIsOpen = !1, t.renderHeader()), _r_();
}
}), B.env.fe_cdm_lists_map && (this.map = new p({
el:this.el.find(".js-listview-map")
})), _r_();
}
function S() {
_i_("3da:429");
for (var e = o.getLists(), t = 0; t < e.length; t++) if (e[t].is_recently_viewed) return _r_(e[t].id);
return _r_(null);
}
C.prototype.getRecentlyViewedCount = function() {
_i_("3da:853");
var e = S(), t = this.getListById(e);
return _r_(t ? t.hotels_count :0);
}, C.prototype.renderHeader = function() {
_i_("3da:854");
var e = this.getCurrentList(), t = this.getRecentlyViewedCount(), i = B.jstmpl("listview_header").render(w.extend({
currentList:e,
currentTabName:this.tabs.currentTab(),
b_selected_language:B.env.b_selected_language,
fe_cdm_lists_map:B.env.fe_cdm_lists_map,
fe_cdm_bookmark_header_list_name:B.env.fe_cdm_bookmark_header_list_name,
fe_cdm_lists_include_recently_viewed:B.env.fe_cdm_lists_include_recently_viewed,
recentlyViewedCount:t,
prevList:this.getPrevList()
}, g.getEnv()));
this.el.find(".js-listview-header-wrapper").html(i).loadComponents(), this.updateRecentlyViewedDropdown(e, t), _r_();
}, C.prototype.updateRecentlyViewedDropdown = function(e, t) {
_i_("3da:855");
var i = B.env.fe_show_lists_recently_viewed_notification && !e.is_recently_viewed && t > 0;
i ? this.createRecentlyViewedDropdown() :(clearTimeout(this.recentlyViewedDropdownTimeoutId), e.is_recently_viewed && this.dismissRecentlyViewedNotification()), _r_();
}, C.prototype.createRecentlyViewedDropdown = function() {
_i_("3da:856");
var e = this;
this.recentlyViewedDropdown = w.fly.dropdown.extend({
defaults:{
position:"bottom center",
extraClass:"listview-header-rv-dropdown",
content:function() {
return _i_("3da:2879"), _r_(B.jstmpl("listview_rv_dropdown").render());
}
},
onclick:function() {
_i_("3da:2740"), this.hide(), _r_();
},
onrootready:function() {
_i_("3da:2741"), this.root().on("click", ".listview-header-open-rv-list", function(t) {
_i_("3da:2946"), t.preventDefault(), e.toggleRecentlyViewed(), e.recentlyViewedDropdown.hide(), B.et.customGoal("GaQOMdEefOSWEYXOeEVJPbHC", 3), _r_();
}), _r_();
}
}).create(".listview-header-recent-link"), clearTimeout(this.recentlyViewedDropdownTimeoutId), this.recentlyViewedDropdownTimeoutId = setTimeout(function() {
_i_("3da:2129"), e.recentlyViewedDropdown.show(), e.dismissRecentlyViewedNotification(), _r_();
}, 1500), _r_();
}, C.prototype.dismissRecentlyViewedNotification = function() {
_i_("3da:857"), B.env.fe_show_lists_recently_viewed_notification = !1, k("cdm_lists_recently_viewed_notification"), _r_();
}, C.prototype.toggleRecentlyViewed = function() {
_i_("3da:858");
var e = this.getCurrentList(), t = this.getPrevList() || {}, i = e.is_recently_viewed ? t.id :S();
i === t.id ? B.et.customGoal("GaQOMdEefOSWEYXOeEVJPbHC", 2) :B.et.customGoal("GaQOMdEefOSWEYXOeEVJPbHC", 1), this.setCurrentList({
id:i
}), _r_();
}, C.prototype.getHotelById = function(e) {
return _i_("3da:859"), e.list_id = e.list_id || this.getCurrentList().id, _r_(o.getHotelById(e));
}, C.prototype.getHotelNodesById = function(e) {
return _i_("3da:860"), _r_(this.el.find('.listview-hotel[data-id="' + String(e) + '"]'));
}, C.prototype.getHotelNodeFromEvent = function(e) {
return _i_("3da:861"), _r_(w(e.currentTarget).closest(".listview-hotel"));
}, C.prototype.getHotelFromEvent = function(e) {
_i_("3da:862");
var t = this.getHotelNodeFromEvent(e), i = t.attr("data-id");
return _r_(i && this.getHotelById({
hotel_id:i
}));
}, C.prototype.delegateEvents = function(e) {
_i_("3da:863");
for (var t in e) {
var i = t.split(" ");
this.el.delegate(i[1], i[0], e[t].bind(this));
}
return _r_(this);
}, C.prototype._bindEvents = function() {
_i_("3da:864");
var e = this;
o.on("list:hotels:loading", function(t) {
_i_("3da:1968"), t ? e.tabs.currentTab("loader") :e.tabs.currentTab(e.mapIsOpen ? "map" :"main"), _r_();
}), o.on("list:removed", function(t) {
if (_i_("3da:1969"), String(e.getCurrentList().id) !== String(t.list_id)) return _r_();
var i = o.getListByIndex(0);
if (!i) return _r_();
e.setCurrentList(i), _r_();
}), o.on("change:hotel_b_undo", function(t) {
_i_("3da:1970"), e.renderHotel(t);
var i = e.getCurrentList();
a.updateHotels({
list_id:i.id,
hotel_ids:[ t.hotel_id ],
states:[ t.b_undo ? 0 :1 ],
is_recently_viewed:i.is_recently_viewed
}), e.mapIsOpen && e.map.updateList(i), _r_();
}), o.on("change:hotel_loading", function(t) {
_i_("3da:1971"), e.getHotelNodesById(t.id).toggleClass("listview-hotel--loading", t.loading), _r_();
}), o.on("change:hotel_hidden", function(t) {
_i_("3da:1972"), setTimeout(function() {
_i_("3da:2647");
var i = e.getHotelNodesById(t.id);
t.hidden ? i.hide() :i.slideDown(), _r_();
}, 0), _r_();
}), B.eventEmitter.bind("change:list", function(t, i) {
_i_("3da:1973"), i && (o.getHotels(i).then(function() {
_i_("3da:2821"), e.renderHotels(i), B.eventEmitter.trigger("change:list:hotels", i), i && i.hotels_count ? e.mapIsOpen && e.map.renderList(i) :e.tabs.currentTab("main"), _r_();
}), e.renderHeader()), _r_();
}), B.eventEmitter.bind("lists:hotels:added", function() {
_i_("3da:1974"), e.setCurrentList({
id:e.getCurrentList().id
}), _r_();
}), B.eventEmitter.bind("hotels:before:removed", function(t, i) {
_i_("3da:1975");
var n = i.hotels[0];
e.getHotelNodesById(n.id).slideUp(function() {
_i_("3da:2648"), e.updateRootClassNames(), e.renderHeader(), _r_();
}), _r_();
});
var t = x(function() {
_i_("3da:2130"), e.mapIsOpen && e.map.updateList(e.getCurrentList()), _r_();
}, 50);
B.eventEmitter.bind("change:hotel", function(i, n) {
_i_("3da:1976"), e.renderHotel(n), e.mapIsOpen && t(), _r_();
});
var i = !1;
this.delegateEvents({
"click .js-go-to-list":function() {
_i_("3da:2285"), B.eventEmitter.trigger("listview:go-to-listmap-page"), _r_();
},
"click .js-listview-hotel-title":function() {
_i_("3da:2286"), B.eventEmitter.trigger("listview:click-on-hotel-link"), _r_();
},
"click .js-listview-hotel-image":function() {
_i_("3da:2287"), B.eventEmitter.trigger("listview:click-on-hotel-image"), _r_();
},
"click .js-listview-book":function(e) {
_i_("3da:2288"), B.eventEmitter.trigger("listview:book-now-clicked");
var t = w(e.currentTarget);
t.hasClass("b-button_primary") ? b.customGoal(y, 1) :t.hasClass("js-listview-hotel-title") && b.customGoal(y, 2), _r_();
},
"click .js-listview-open-hp":function(e) {
_i_("3da:2289");
var t = w(e.currentTarget);
t.hasClass("js-listview-book") && t.hasClass("b-button_primary") ? b.customGoal(y, 1) :t.hasClass("js-listview-hotel-title") ? b.customGoal(y, 2) :t.hasClass("listview-map-link") ? b.customGoal(y, 3) :t.hasClass("listview-reviews-link") && b.customGoal(y, 4), _r_();
},
"click .js-check-availability":function(e) {
_i_("3da:2290"), e.preventDefault(), l.ensureDates(), i || (i = !0), B.eventEmitter.trigger("listview:check-all-hotels-availability"), v.checkAvailability({
list:this.getCurrentList(),
dates:{
checkin:B.search.dates("checkin").toString(),
checkout:B.search.dates("checkout").toString()
}
}), _r_();
},
"click .js-listview-add":function(e) {
_i_("3da:2291"), e.preventDefault(), o.addHotels({
hotels:[ r.currentHotel() ],
list_id:this.getCurrentList().id
}), _r_();
},
"click .js-listview-add-hotel":function(e) {
_i_("3da:2292"), e.preventDefault();
var t = w(e.currentTarget).attr("data-hotel-id");
o.addHotels({
hotels:[ {
b_hotel_id:t
} ],
list_id:this.getCurrentList().id
}), _r_();
},
"click .js-remove-hotel":function(e) {
_i_("3da:2293"), e.preventDefault();
var t = this.getHotelFromEvent(e);
m.setHotelProperty(t, "b_undo", !0), _r_();
},
"click .js-listview-undo":function(e) {
_i_("3da:2294"), e.preventDefault();
var t = this.getHotelFromEvent(e);
m.setHotelProperty(t, "b_undo", !1), _r_();
},
"click .js-listview-footer-signin-link":function(e) {
_i_("3da:2295"), e.preventDefault(), B.lightbox.hide(), B.command("show-auth-lightbox").run(), _r_();
},
"click .js-listview-footer-remove-msg":function(t) {
_i_("3da:2296"), t.preventDefault(), e.toggleSigninBlock(!1), _r_();
},
"click .js-listview-tab-toggle-map":function(e) {
_i_("3da:2297"), e.preventDefault(), "main" === this.tabs.currentTab() ? (this.tabs.currentTab("map"), b.customGoal("GaQOMdEebNKe", 1)) :(this.tabs.currentTab("main"), b.customGoal("GaQOMdEebNKe", 2)), _r_();
},
"click .js-listview-hotel-toggle-map":function(e) {
_i_("3da:2298"), e.preventDefault(), "main" === this.tabs.currentTab() && (b.customGoal("GaQOMdEebNKe", 3), this.tabs.currentTab("map"), this.map.showHotelCard(w(e.target).data("hotel-id"), !0)), _r_();
},
"click .js-listview-signin-banner-remove":function(e) {
_i_("3da:2299"), e.preventDefault(), w.cookie("tfl_listview_show_signin_banner", 1, {
expires:999,
path:"/"
}), this.renderHotels(this.getCurrentList()), _r_();
},
"click .js-listview-map-close-btn":function(e) {
_i_("3da:2300"), "map" === this.tabs.currentTab() && (this.tabs.currentTab("main"), b.customGoal("GaQOMdEebNKe", 4)), _r_();
},
"click .listview__photo-prev":this.handleGalleryClick.bind(this, !1),
"click .listview__photo-next":this.handleGalleryClick.bind(this, !0)
}), B.env.b_is_shared_wishlist && (w(".js-listview-footer-signin-link").on("click", function(e) {
_i_("3da:2301"), e.preventDefault(), B.lightbox.hide(), B.command("show-auth-lightbox").run(), _r_();
}), w(".js-listview-signin-banner-remove").on("click", function(e) {
_i_("3da:2302"), e.preventDefault(), w.cookie("tfl_listview_show_signin_banner", 1, {
expires:999,
path:"/"
}), w(this).closest(".listview-signin-banner").remove(), _r_();
})), B.env.b_is_wishlist_singlepage || w(window).resize(n.throttle(function() {
_i_("3da:2504"), e.resizeLightbox(), _r_();
}, 1e3)), l.call(this), _.call(this), c.isEnabled() || s.call(this), d.call(this), h.call(this), f.call(this), this._bindGA(), B.env.fe_cdm_lists_map && this.map.init(), _r_();
}, C.prototype.handleGalleryClick = function(e, t) {
_i_("3da:865"), t.preventDefault();
var i = this.getHotelNodeFromEvent(t), n = this.getHotelFromEvent(t);
if (!n) return _r_();
var r = this.updateGalleryCounter(n, i, e), a = n.b_main_photos[r - 1], o = i.find(".listview__photo-gallery");
this.updateGalleryImage(o, a), _r_();
}, C.prototype.updateGalleryCounter = function(e, t, i) {
_i_("3da:866");
var n = t.find(".listview__photo-counter-current"), r = Number(n.html()), a = e.b_main_photos.length;
return this.trackGalleryClick(r, a), r = i ? r === a ? 1 :r + 1 :1 === r ? a :r - 1, n.html(r), _r_(r);
}, C.prototype.trackGalleryClick = function(e, t) {
_i_("3da:867"), b.customGoal("GaQOMZUHZCLcPUWKVUeBC", 1), e >= t / 2 && b.customGoal("GaQOMZUHZCLcPUWKVUeBC", 2), e === t && b.customGoal("GaQOMZUHZCLcPUWKVUeBC", 3), _r_();
}, C.prototype.updateGalleryImage = function(e, t) {
_i_("3da:868");
var i = e.css("background-image").split(",")[0], n = B.tools.jsStaticUrl(t.b_photo_url);
e.css("background-image", "url(" + n + ")" + (i ? ", " + i :"")), _r_();
}, C.prototype.toggleSigninBlock = function(e) {
_i_("3da:869"), this.el.find(".js-listview-footer-signin").toggleClass("g-hidden", !e), e || w.cookie("tfl_listview_lightbox_show_signin_block", 1, {
expires:999,
path:"/"
}), B.env.b_is_wishlist_singlepage || this.resizeLightbox(), _r_();
}, C.prototype._bindGA = function() {
_i_("3da:870");
var e = [ "listview:show", "listview:hide", "listview:open-dropdown", "listview:go-to-listmap-page", "listview:remove-hotel", "listview:check-single-hotel-availability", "listview:check-all-hotels-availability", "listview:remove-list", "listview:book-now-clicked", "listview:click-on-hotel-link", "listview:click-on-hotel-image" ];
B.env.fe_cdm_web_track_share_and_create_lists && (e.push("listview:share-wishlist"), e.push("listview:create-list")), B.eventEmitter.bind(e.join(" "), function(e) {
_i_("3da:2303");
var t = {
loggedIn:B.env.b_user_auth_level_is_low ? "logged_in" :"logged_out",
pb:B.env.b_reg_user_detail_bookings_count,
ac:B.env.b_action
};
this.getCurrentList() && this.getCurrentList().hotels && w.extend(t, {
L:o._lists.length,
H:this.getCurrentList().hotels.length,
pr:this.getCurrentList().privacy
}), B.google.trackEvent("Listview", e.type.toString(), n.stringifyUrl(t, " : ")), _r_();
}.bind(this)), _r_();
}, C.prototype.clearCache = function() {
return _i_("3da:871"), _r_(o.clearCache());
}, C.prototype.getLists = function() {
_i_("3da:872");
var e = {};
w.extend(e, {
with_hotels:0,
include_availability:0,
include_recently_viewed:B.env.fe_cdm_lists_include_recently_viewed
});
var t = o.fetch(e);
return _r_(t);
}, C.prototype.getListById = function(e) {
return _i_("3da:873"), _r_(o.getListById(e));
}, C.prototype.getCurrentList = function() {
return _i_("3da:874"), _r_(this._currentList);
}, C.prototype.getPrevList = function() {
return _i_("3da:875"), _r_(this._prevList);
}, C.prototype.setCurrentList = function(e) {
_i_("3da:876");
var t = this;
if (this._prevList = this._currentList, this._currentList = this.getListById(e.id), !this._currentList) return _r_(null);
return setTimeout(function() {
_i_("3da:1977"), B.env.b_is_shared_wishlist || B.eventEmitter.trigger("change:list", t._currentList), t.lastSelectedListId = t._currentList.id, _r_();
}, 0), _r_(this._currentList);
}, C.prototype.removeRackRateLoadingIcon = function(e) {
_i_("3da:877"), setTimeout(function() {
_i_("3da:1978"), e.find(".js-listview-rack-rate-animated, .js-listview-price-animated").removeClass("listview-rack-rate-animated listview-price-animated"), _r_();
}, 1500), _r_();
}, C.prototype.getHotelTmplName = function(e) {
if (_i_("3da:878"), e && e.hasClass("listview-hotel--map")) return _r_("listview_hotel_map");
if (B.env.b_is_tdot_traffic) return _r_("listview_hotel_simple");
if (B.env.fe_cdm_wl_table_layout) return _r_("listview_hotel_row");
return _r_("listview_hotel");
}, C.prototype.renderHotel = function(e) {
_i_("3da:879"), this.getHotelNodesById(e.id).each(function(t, i) {
_i_("3da:2304"), i = w(i);
var n = this.getHotelTmplName(i), r = g.prepare(e), a = B.jstmpl(n).render(r);
i.replaceWith(a), B.eventEmitter.trigger("listview:rendered:hotel", i), _r_();
}.bind(this)), this.removeRackRateLoadingIcon(this.el.find(".js-listview-hotels")), _r_();
}, C.prototype.renderHotels = function(e) {
_i_("3da:880");
var t = this, i = w.extend({
is_recently_viewed:e.is_recently_viewed,
hotels_count:e.hotels_count,
hotels:e.hotels.map(function(e) {
return _i_("3da:2649"), _r_(g.prepare(e));
}),
showListsSurvey:B.env.showListsSurvey,
fe_use_simple_hotels:B.env.b_is_tdot_traffic,
fe_cdm_lists_ie_fixes:B.env.fe_cdm_lists_ie_fixes,
b_show_bbtool_sr_admin_favourite_hotel_badge:B.env.b_show_bbtool_sr_admin_favourite_hotel_badge ? 1 :0,
b_selected_language:B.env.b_selected_language
}, g.getEnv(), r.currentHotel()), n = this.el.find(".js-listview-hotels"), a = "listview_hotels";
B.env.b_is_tdot_traffic ? a = "listview_hotels_simple" :B.env.fe_cdm_wl_table_layout && (a = "listview_hotels_row");
var o = B.jstmpl(a).render(i);
return n.html(o), "function" == typeof n.loadComponents && n.loadComponents(), this.updateRootClassNames(), B.env.b_is_wishlist_singlepage || setTimeout(function() {
_i_("3da:2305"), t.resizeLightbox(), _r_();
}, 0), B.eventEmitter.trigger("listview:rendered:hotels"), this.removeRackRateLoadingIcon(n), _r_(this);
}, C.prototype.updateRootClassNames = function() {
_i_("3da:881");
var e = this.getCurrentList(), t = e.hotels ? 0 === e.hotels.length :!0, i = B.jstmpl("listview_root_classnames").render({
b_action:B.env.b_action,
shown:this._isShown,
isEmpty:t,
currentList:e,
singlePage:B.env.b_is_wishlist_singlepage,
full_width:!0
});
this.el.get(0).className = i, _r_();
}, C.prototype.show = function() {
_i_("3da:882");
var e = this;
this._binded || (this._bindEvents(), this._binded = !0), e._isShown = !0, B.eventEmitter.trigger("listview:show", this), B.events.trigger("listview:show", this);
var t = "listview_lightbox";
this.updateRootClassNames(), this.renderHeader(), B.env.b_is_wishlist_singlepage || B.lightbox.show(e.el, {
bAnimation:!0,
customWrapperClassName:t,
hideCallBack:function() {
_i_("3da:2650"), B.eventEmitter.trigger("listview:hide"), e._isShown = !1, e.updateRootClassNames(), _r_();
}
}), w(".user_center_popover").hide(), "myreservations" === B.env.b_action && setTimeout(function() {
_i_("3da:2306"), w(".modal-mask").css("zIndex", 10003), _r_();
}, 0), B.env.auth_level < 1 && !w.cookie("tfl_listview_lightbox_show_signin_block") && this.getCurrentList().hotels_count > 2 && this.toggleSigninBlock(!0), _r_();
}, C.prototype.isShown = function() {
return _i_("3da:883"), _r_(this._isShown);
}, C.prototype.resizeLightbox = function() {
_i_("3da:884");
var e = this.el.find(".listview-footer").outerHeight();
e = e > 0 ? e + 15 :e;
var t = w(".listview_lightbox").height(), i = this.el.find(".listview__controls"), n = i.is(":visible") ? this.el.find(".listview__controls").outerHeight() :0;
this.el.find(".js-listview-hotels").height(t - (75 + n) - e), this.el.find(".js-listview-map").height(t - this.el.find(".listview_lightbox__header").outerHeight()), _r_();
};
function x(e, t, i) {
_i_("3da:430");
var n;
return _r_(function() {
_i_("3da:1082");
var r = this, a = arguments, o = function() {
_i_("3da:2131"), n = null, i || e.apply(r, a), _r_();
}, _ = i && !n;
clearTimeout(n), n = setTimeout(o, t), _ && e.apply(r, a), _r_();
});
}
i.exports = C, _r_();
}), B.define("component/lists/listview-empty-list", function(e, t, i) {
"use strict";
_i_("3da:127");
var n = e("../lists-api/lists-api").API, r = {
_hotels:[],
get:function(e) {
_i_("3da:1269");
var t = this;
n.getRecentlyViewed({
limit:5
}, function(i) {
_i_("3da:2307"), t._hotels = i.hotels, e(null, t._hotels), _r_();
}), _r_();
}
};
i.exports = e("component").extend({
tmpl:B.jstmpl("listview_empty_list_recently_viewed"),
state:{
recentlyViewedHotels:[]
},
setState:function(e) {
_i_("3da:1748"), $.extend(this.state, e), this.render(), _r_();
},
fetch:function() {
_i_("3da:1749");
var e = this;
r.get(function(t, i) {
_i_("3da:2505"), e.setState({
recentlyViewedHotels:i
}), _r_();
}), _r_();
},
render:function() {
_i_("3da:1750");
var e = this.tmpl.render(this.state);
this.$el.html(e), this.$el.find(".js-listview-empty-list-recently-viewed").hide().slideDown(), _r_();
},
init:function() {
_i_("3da:1751"), this.render(), this.fetch(), _r_();
}
}), _r_();
}), B.define("lists/listview-template/listview-template", function(e, t, i) {
"use strict";
_i_("3da:128");
var n = e("../lists-tools/lists-tools"), r = e("../listview-travel-party/listview-travel-party"), a = e("../listview-touch/listview-touch"), o = e("../lists-store/lists-store");
i.exports = {
getEnv:function() {
return _i_("3da:1270"), _r_({
b_action:B.env.b_action,
b_user_auth_level_is_low_or_high:B.env.b_user_auth_level_is_low_or_high,
has_cookie_tfl_listview_show_signin_banner:Boolean($.cookie("tfl_listview_show_signin_banner")),
is_desktop:"1" === B.env.b_site_type_id,
is_logged_in:B.env.auth_level > 0,
b_lang_is_rtl:B.env.rtl,
is_inside_listview:1,
b_reg_user_wishlist_remaining:B.env.b_reg_user_wishlist_remaining,
b_wishlist_referrer:B.env.b_wishlist_referrer
});
},
buildHotelLink:function(e, t) {
_i_("3da:1271");
var i = "maxotel_rooms", o = "editDates", _ = 0 === e.url.indexOf("http") ? e.url :B.env.b_nonsecure_hostname + e.url, s = B.env.b_query_params_delimiter, l = e.availability && e.availability.checkin && e.availability.checkout;
return l && (_ = _ + s + n.stringifyUrl(n.pick(e.availability, "checkin", "checkout"), s)), a.isEnabled() || (_ += r.buildUrlPart()), t && t.from_list && (_ = _ + s + "from_list=1"), B.env.b_label && (_ = _ + s + "label=" + B.env.b_label), B.env.b_aid && !/aid=/.test(_) && (_ = _ + s + "aid=" + B.env.b_aid), t && t.goToRoomTable && (_ = _ + "#" + (l ? i :o)), _r_(_);
},
prepare:function(e, t) {
_i_("3da:1272");
var i = {
from_list:1
}, n = 35;
$.extend(i, {
goToRoomTable:!0
});
var r = $.extend({}, e, {
id:o.getHotelId(e),
fe_cdm_wl_facilities:B.env.fe_cdm_wl_facilities,
fe_cdm_wl_photo_gallery:B.env.fe_cdm_wl_photo_gallery,
fe_cdm_wl_links_to_hp:B.env.fe_cdm_wl_links_to_hp,
fe_cdm_wl_distance_from_center:B.env.fe_cdm_wl_distance_from_center,
fe_cdm_lists_map:B.env.fe_cdm_lists_map,
fe_cdm_comparable_lists_v3:B.env.fe_cdm_comparable_lists_v3,
fe_cdm_comparable_lists_imgsize:B.env.fe_cdm_comparable_lists_imgsize,
fe_cdm_list_no_individual_dates:B.env.fe_cdm_list_no_individual_dates,
b_guest_country:B.env.b_guest_country,
b_countrycode:e.cc1,
b_bookings_owned:B.env.b_bookings_owned,
b_partner_channel_id:B.env.b_partner_channel_id,
absolute_url:this.buildHotelLink(e),
book_now_url:this.buildHotelLink(e, i),
has_availability:!$.isEmptyObject(e.availability) && "undefined" != typeof e.availability.is_available,
available:Boolean(e.availability.is_available),
edit:Boolean(e.edit),
hotel_min_rate_num:parseFloat(e.hotel_min_rate_num),
hotel_review_score_non_localized:parseFloat(e.hotel_review_score_non_localized ? e.hotel_review_score_non_localized :e.hotel_review_score),
name_ellipsis:e.name && e.name.length > n ? e.name.slice(0, n) + "&hellip;" :e.name
}, this.getEnv(), t);
return r.availability && (r.availability.checkin && r.availability.checkout && (r.availability.nights = B.Search.createDate(r.availability.checkout).valueOf() - B.Search.createDate(r.availability.checkin).valueOf()), r.min_rate_availability = r.availability.is_available ? r.availability.price :void 0, r.b_rooms_left = r.availability.rooms_available), r.b_main_photos && (r.b_first_photo = r.b_main_photos[0]), _r_(r);
}
}, _r_();
}), B.define("lists/listview-hotel/listview-hotel", function(e, t, i) {
"use strict";
_i_("3da:129");
var n = e("../lists-store/lists-store");
i.exports = {
setHotelProperty:function(e, t, i) {
return _i_("3da:1273"), e[t] = i, n.emit("change:hotel_" + t, e, t), _r_(e);
}
}, _r_();
}), B.define("lists/listview-availability/listview-availability", function(e, t, i) {
"use strict";
_i_("3da:130");
var n = e("../lists-api/lists-api").API, r = e("../lists-store/lists-store"), a = e("../listview-hotel/listview-hotel"), o = e("../listview-touch/listview-touch"), _ = e("../listview-travel-party/listview-travel-party");
i.exports = {
setHotelAvailability:function(e, t, i) {
_i_("3da:1274"), e.availability = t, i && i.silent || B.eventEmitter.trigger("change:hotel", e), _r_();
},
checkAvailability:function(e, t) {
_i_("3da:1275");
var i = this, s = e.list, l = e.dates, d = e.hotels || s.hotels;
d.forEach(function(e) {
_i_("3da:2308"), a.setHotelProperty(e, "loading", !0), _r_();
});
var c = $.extend({
hotel_ids:d.map(r.getHotelId),
list_id:s.id,
is_recently_viewed:s.is_recently_viewed
}, l);
o.isEnabled() || $.extend(c, _.buildAvailabilityParams()), n.getAvailability(c, function(e) {
_i_("3da:2309"), d.forEach(function(t) {
_i_("3da:2822"), a.setHotelProperty(t, "edit", !1), a.setHotelProperty(t, "loading", !1);
var n = r.getHotelId(t);
e[n] && i.setHotelAvailability(t, e[n], {
updateNights:!0
}), _r_();
}), t && t(), _r_();
}), _r_();
}
}, _r_();
}), B.define("lists/listview-header/listview-create-list", function(e, t, i) {
"use strict";
_i_("3da:131");
var n = (e("../lists-tools/lists-tools"), e("../lists-store/lists-store"));
e("../listview-touch/listview-touch");
function r() {
_i_("3da:431");
var e = this;
$(".js-listview-header-wrapper").on("click", ".js-listview-create-list", function(t) {
_i_("3da:1276"), t.preventDefault(), t.stopPropagation(), B.env.fe_cdm_web_track_share_and_create_lists && (B.eventEmitter.trigger("listview:create-list"), B.et.customGoal("GaQOMYTBYYWUFOHNVSPMKPEcdEeKe", 2));
var i;
$(t.target);
i = "zh-tw" === B.env.b_selected_language && B.et.track("MKMBNLOLOLOdDSOaDfUFFEeQSAEeNGJNZGCbWBHWWe") ? "lists_map_list_name_zhtw" :"lists_map_list_name";
var r = $.trim(window.prompt(B.jstmpl.translations(i), ""));
if (!r) return _r_();
n.createList({
name:r
}).then(function(t) {
_i_("3da:2310"), e.setCurrentList({
id:t.id
}), t.remaining < 1 && (B.env.b_reg_user_wishlist_remaining = 0), _r_();
}), _r_();
}), _r_();
}
i.exports = r, _r_();
}), B.define("require_absolute", function(e, t, i) {
_i_("3da:132"), i.exports = function(t) {
return _i_("3da:885"), _r_(e(t.replace(/^.*components\//g, "")));
}, _r_();
});

function init() {
_i_("3da:1"), B.require([ "require_absolute" ], function(e) {
_i_("3da:432");
var t = B.env.b_is_tdot_traffic, i = e("../../components/lists/lists-api/lists-api"), n = e("../../components/lists/lists-store/lists-store"), r = e("../../components/lists/lists-listview/lists-listview"), a = e("et");
function o(e) {
_i_("3da:886"), e.getLists().then(function() {
_i_("3da:1979");
var t = e.getListById(i.getLastChangedListId());
e.lastSelectedListId ? e.setCurrentList({
id:e.lastSelectedListId
}) :t ? e.setCurrentList({
id:t.id
}) :e.setCurrentList({
id:n.getListByIndex(0).id
}), e.show(), _r_();
}), _r_();
}
if (t) return _r_();
if (!B.env.is_listview_page) return _r_();
var _ = new r({
el:$(".listview_lightbox__container")
});
window.listView = _, $(".js-uc-listview-lightbox").click(function(e) {
_i_("3da:1277"), e.preventDefault(), t && $(".select_foldout").hide(), o(_), _r_();
}), B.env.b_run_tfl_move_away_from_lightbox && $(".js-uc-wishlists-trigger").click(function(e) {
return _i_("3da:1980"), e.preventDefault(), window.location.href = B.env.b_wishlist_singlepage_url, _r_();
});
var s = function() {
_i_("3da:1278"), _ && !_.isShown() && _.clearCache(), _r_();
};
B.eventEmitter.bind("wl:create", s), B.eventEmitter.bind("wl:edithotel", s);
var l = $.grep([ ".js-wishlist-added-to-name-link", ".js-open-list", '.js-uc-notification-link[href*="wl_id="]', 'a[href*="/mywishlist"][href*="wl_id="]' ], Boolean);
if ($(document.body).undelegate(".wl-dropdown-link", "click"), $(document.body).delegate(l.join(","), "click", function(e) {
if (_i_("3da:1279"), !B.env.is_listview_page) return _r_();
if (B.env.fe_cdm_sr_wl_based_comparison) return a.customGoal("GaQOMOLVPBJbKYbTZCCQJET", 5), _r_();
if (B.et.stage("YdVNYVcTQQDMZSBXe", 1), B.env.wl_link_prevent_reload) return _r_();
if (B.env.b_run_tfl_move_away_from_lightbox) return window.location.href = e.target.href, _r_();
var t = i.getIdFromUrl($(e.currentTarget).attr("href"));
t && (e.preventDefault(), _.getLists().then(function() {
_i_("3da:2651"), _.setCurrentList({
id:t
}), _.show(), _r_();
})), _r_();
}), B.env.b_is_wishlist_singlepage) {
var d = i.getIdFromUrl(window.location.href);
"null" != d && B.env.auth_level > 0 ? _.getLists().then(function() {
_i_("3da:2311"), _.setCurrentList({
id:d
}), _.show(), _r_();
}) :o(_), $(".listview__controls").stick_in_parent({
sticky_class:"listview__controls--sticky"
});
}
"www" === B.env.b_site_type && "mywishlist" === B.env.b_action && (B.eventEmitter.bind("listview:rendered:hotels", handleHotelsRenderedEvent), $(document.body).on("click", ".comparable-list-scroll-btn", handleScrollClickEvent)), _r_();
}), _r_();
}

var SCROLL_DURATION = 200, SCROLL_STEP = 300;

function handleScrollClickEvent(e) {
_i_("3da:2");
var t = $(e.target), i = $(".comparable-list-container"), n = i.scrollLeft() || 0;
t.hasClass("comparable-list-scroll-btn--left") ? i.animate({
scrollLeft:n - SCROLL_STEP
}, SCROLL_DURATION) :i.animate({
scrollLeft:n + SCROLL_STEP
}, SCROLL_DURATION), _r_();
}

function handleHotelsRenderedEvent() {
_i_("3da:3");
var e = $(".comparable-list-container"), t = e.get(0);
if (!t) return _r_();
t.scrollWidth > t.clientWidth ? $(".comparable-list-scroll-btn").show() :$(".comparable-list-scroll-btn").hide(), _r_();
}

B[sNSStartup].listView = {
init:init
}, B.define("component/qrcode/qrcodelib", function(e, t, i) {
"use strict";
_i_("3da:133");
var n;
!function() {
_i_("3da:887");
function e(e) {
_i_("3da:1280"), this.mode = i.MODE_8BIT_BYTE, this.data = e, this.parsedData = [];
for (var t = 0, n = this.data.length; n > t; t++) {
var r = [], a = this.data.charCodeAt(t);
a > 65536 ? (r[0] = 240 | (1835008 & a) >>> 18, r[1] = 128 | (258048 & a) >>> 12, r[2] = 128 | (4032 & a) >>> 6, r[3] = 128 | 63 & a) :a > 2048 ? (r[0] = 224 | (61440 & a) >>> 12, r[1] = 128 | (4032 & a) >>> 6, r[2] = 128 | 63 & a) :a > 128 ? (r[0] = 192 | (1984 & a) >>> 6, r[1] = 128 | 63 & a) :r[0] = a, this.parsedData.push(r);
}
this.parsedData = Array.prototype.concat.apply([], this.parsedData), this.parsedData.length != this.data.length && (this.parsedData.unshift(191), this.parsedData.unshift(187), this.parsedData.unshift(239)), _r_();
}
e.prototype = {
getLength:function(e) {
return _i_("3da:2312"), _r_(this.parsedData.length);
},
write:function(e) {
_i_("3da:2313");
for (var t = 0, i = this.parsedData.length; i > t; t++) e.put(this.parsedData[t], 8);
_r_();
}
};
function t(e, t) {
_i_("3da:1281"), this.typeNumber = e, this.errorCorrectLevel = t, this.modules = null, this.moduleCount = 0, this.dataCache = null, this.dataList = [], _r_();
}
t.prototype = {
addData:function(t) {
_i_("3da:2314");
var i = new e(t);
this.dataList.push(i), this.dataCache = null, _r_();
},
isDark:function(e, t) {
if (_i_("3da:2315"), 0 > e || this.moduleCount <= e || 0 > t || this.moduleCount <= t) throw new Error(e + "," + t);
return _r_(this.modules[e][t]);
},
getModuleCount:function() {
return _i_("3da:2316"), _r_(this.moduleCount);
},
make:function() {
_i_("3da:2317"), this.makeImpl(!1, this.getBestMaskPattern()), _r_();
},
makeImpl:function(e, i) {
_i_("3da:2318"), this.moduleCount = 4 * this.typeNumber + 17, this.modules = new Array(this.moduleCount);
for (var n = 0; n < this.moduleCount; n++) {
this.modules[n] = new Array(this.moduleCount);
for (var r = 0; r < this.moduleCount; r++) this.modules[n][r] = null;
}
this.setupPositionProbePattern(0, 0), this.setupPositionProbePattern(this.moduleCount - 7, 0), this.setupPositionProbePattern(0, this.moduleCount - 7), this.setupPositionAdjustPattern(), this.setupTimingPattern(), this.setupTypeInfo(e, i), this.typeNumber >= 7 && this.setupTypeNumber(e), null == this.dataCache && (this.dataCache = t.createData(this.typeNumber, this.errorCorrectLevel, this.dataList)), this.mapData(this.dataCache, i), _r_();
},
setupPositionProbePattern:function(e, t) {
_i_("3da:2319");
for (var i = -1; 7 >= i; i++) {
if (-1 >= e + i || this.moduleCount <= e + i) continue;
for (var n = -1; 7 >= n; n++) {
if (-1 >= t + n || this.moduleCount <= t + n) continue;
i >= 0 && 6 >= i && (0 == n || 6 == n) || n >= 0 && 6 >= n && (0 == i || 6 == i) || i >= 2 && 4 >= i && n >= 2 && 4 >= n ? this.modules[e + i][t + n] = !0 :this.modules[e + i][t + n] = !1;
}
}
_r_();
},
getBestMaskPattern:function() {
_i_("3da:2320");
for (var e = 0, t = 0, i = 0; 8 > i; i++) {
this.makeImpl(!0, i);
var n = o.getLostPoint(this);
(0 == i || e > n) && (e = n, t = i);
}
return _r_(t);
},
createMovieClip:function(e, t, i) {
_i_("3da:2321");
var n = e.createEmptyMovieClip(t, i), r = 1;
this.make();
for (var a = 0; a < this.modules.length; a++) for (var o = a * r, _ = 0; _ < this.modules[a].length; _++) {
var s = _ * r, l = this.modules[a][_];
l && (n.beginFill(0, 100), n.moveTo(s, o), n.lineTo(s + r, o), n.lineTo(s + r, o + r), n.lineTo(s, o + r), n.endFill());
}
return _r_(n);
},
setupTimingPattern:function() {
_i_("3da:2322");
for (var e = 8; e < this.moduleCount - 8; e++) {
if (null != this.modules[e][6]) continue;
this.modules[e][6] = e % 2 == 0;
}
for (var t = 8; t < this.moduleCount - 8; t++) {
if (null != this.modules[6][t]) continue;
this.modules[6][t] = t % 2 == 0;
}
_r_();
},
setupPositionAdjustPattern:function() {
_i_("3da:2323");
for (var e = o.getPatternPosition(this.typeNumber), t = 0; t < e.length; t++) for (var i = 0; i < e.length; i++) {
var n = e[t], r = e[i];
if (null != this.modules[n][r]) continue;
for (var a = -2; 2 >= a; a++) for (var _ = -2; 2 >= _; _++) -2 == a || 2 == a || -2 == _ || 2 == _ || 0 == a && 0 == _ ? this.modules[n + a][r + _] = !0 :this.modules[n + a][r + _] = !1;
}
_r_();
},
setupTypeNumber:function(e) {
_i_("3da:2324");
for (var t = o.getBCHTypeNumber(this.typeNumber), i = 0; 18 > i; i++) {
var n = !e && 1 == (t >> i & 1);
this.modules[Math.floor(i / 3)][i % 3 + this.moduleCount - 8 - 3] = n;
}
for (var i = 0; 18 > i; i++) {
var n = !e && 1 == (t >> i & 1);
this.modules[i % 3 + this.moduleCount - 8 - 3][Math.floor(i / 3)] = n;
}
_r_();
},
setupTypeInfo:function(e, t) {
_i_("3da:2325");
for (var i = this.errorCorrectLevel << 3 | t, n = o.getBCHTypeInfo(i), r = 0; 15 > r; r++) {
var a = !e && 1 == (n >> r & 1);
6 > r ? this.modules[r][8] = a :8 > r ? this.modules[r + 1][8] = a :this.modules[this.moduleCount - 15 + r][8] = a;
}
for (var r = 0; 15 > r; r++) {
var a = !e && 1 == (n >> r & 1);
8 > r ? this.modules[8][this.moduleCount - r - 1] = a :9 > r ? this.modules[8][15 - r - 1 + 1] = a :this.modules[8][15 - r - 1] = a;
}
this.modules[this.moduleCount - 8][8] = !e, _r_();
},
mapData:function(e, t) {
_i_("3da:2326");
for (var i = -1, n = this.moduleCount - 1, r = 7, a = 0, _ = this.moduleCount - 1; _ > 0; _ -= 2) for (6 == _ && _--; ;) {
for (var s = 0; 2 > s; s++) if (null == this.modules[n][_ - s]) {
var l = !1;
a < e.length && (l = 1 == (e[a] >>> r & 1));
var d = o.getMask(t, n, _ - s);
d && (l = !l), this.modules[n][_ - s] = l, r--, -1 == r && (a++, r = 7);
}
if (n += i, 0 > n || this.moduleCount <= n) {
n -= i, i = -i;
break;
}
}
_r_();
}
}, t.PAD0 = 236, t.PAD1 = 17, t.createData = function(e, i, n) {
_i_("3da:1981");
for (var r = d.getRSBlocks(e, i), a = new c(), _ = 0; _ < n.length; _++) {
var s = n[_];
a.put(s.mode, 4), a.put(s.getLength(), o.getLengthInBits(s.mode, e)), s.write(a);
}
for (var l = 0, _ = 0; _ < r.length; _++) l += r[_].dataCount;
if (a.getLengthInBits() > 8 * l) throw new Error("code length overflow. (" + a.getLengthInBits() + ">" + 8 * l + ")");
for (a.getLengthInBits() + 4 <= 8 * l && a.put(0, 4); a.getLengthInBits() % 8 != 0; ) a.putBit(!1);
for (;;) {
if (a.getLengthInBits() >= 8 * l) break;
if (a.put(t.PAD0, 8), a.getLengthInBits() >= 8 * l) break;
a.put(t.PAD1, 8);
}
return _r_(t.createBytes(a, r));
}, t.createBytes = function(e, t) {
_i_("3da:1982");
for (var i = 0, n = 0, r = 0, a = new Array(t.length), _ = new Array(t.length), s = 0; s < t.length; s++) {
var d = t[s].dataCount, c = t[s].totalCount - d;
n = Math.max(n, d), r = Math.max(r, c), a[s] = new Array(d);
for (var u = 0; u < a[s].length; u++) a[s][u] = 255 & e.buffer[u + i];
i += d;
var h = o.getErrorCorrectPolynomial(c), f = new l(a[s], h.getLength() - 1), p = f.mod(h);
_[s] = new Array(h.getLength() - 1);
for (var u = 0; u < _[s].length; u++) {
var g = u + p.getLength() - _[s].length;
_[s][u] = g >= 0 ? p.get(g) :0;
}
}
for (var m = 0, u = 0; u < t.length; u++) m += t[u].totalCount;
for (var v = new Array(m), b = 0, u = 0; n > u; u++) for (var s = 0; s < t.length; s++) u < a[s].length && (v[b++] = a[s][u]);
for (var u = 0; r > u; u++) for (var s = 0; s < t.length; s++) u < _[s].length && (v[b++] = _[s][u]);
return _r_(v);
};
for (var i = {
MODE_NUMBER:1,
MODE_ALPHA_NUM:2,
MODE_8BIT_BYTE:4,
MODE_KANJI:8
}, r = {
L:1,
M:0,
Q:3,
H:2
}, a = {
PATTERN000:0,
PATTERN001:1,
PATTERN010:2,
PATTERN011:3,
PATTERN100:4,
PATTERN101:5,
PATTERN110:6,
PATTERN111:7
}, o = {
PATTERN_POSITION_TABLE:[ [], [ 6, 18 ], [ 6, 22 ], [ 6, 26 ], [ 6, 30 ], [ 6, 34 ], [ 6, 22, 38 ], [ 6, 24, 42 ], [ 6, 26, 46 ], [ 6, 28, 50 ], [ 6, 30, 54 ], [ 6, 32, 58 ], [ 6, 34, 62 ], [ 6, 26, 46, 66 ], [ 6, 26, 48, 70 ], [ 6, 26, 50, 74 ], [ 6, 30, 54, 78 ], [ 6, 30, 56, 82 ], [ 6, 30, 58, 86 ], [ 6, 34, 62, 90 ], [ 6, 28, 50, 72, 94 ], [ 6, 26, 50, 74, 98 ], [ 6, 30, 54, 78, 102 ], [ 6, 28, 54, 80, 106 ], [ 6, 32, 58, 84, 110 ], [ 6, 30, 58, 86, 114 ], [ 6, 34, 62, 90, 118 ], [ 6, 26, 50, 74, 98, 122 ], [ 6, 30, 54, 78, 102, 126 ], [ 6, 26, 52, 78, 104, 130 ], [ 6, 30, 56, 82, 108, 134 ], [ 6, 34, 60, 86, 112, 138 ], [ 6, 30, 58, 86, 114, 142 ], [ 6, 34, 62, 90, 118, 146 ], [ 6, 30, 54, 78, 102, 126, 150 ], [ 6, 24, 50, 76, 102, 128, 154 ], [ 6, 28, 54, 80, 106, 132, 158 ], [ 6, 32, 58, 84, 110, 136, 162 ], [ 6, 26, 54, 82, 110, 138, 166 ], [ 6, 30, 58, 86, 114, 142, 170 ] ],
G15:1335,
G18:7973,
G15_MASK:21522,
getBCHTypeInfo:function(e) {
_i_("3da:2327");
for (var t = e << 10; o.getBCHDigit(t) - o.getBCHDigit(o.G15) >= 0; ) t ^= o.G15 << o.getBCHDigit(t) - o.getBCHDigit(o.G15);
return _r_((e << 10 | t) ^ o.G15_MASK);
},
getBCHTypeNumber:function(e) {
_i_("3da:2328");
for (var t = e << 12; o.getBCHDigit(t) - o.getBCHDigit(o.G18) >= 0; ) t ^= o.G18 << o.getBCHDigit(t) - o.getBCHDigit(o.G18);
return _r_(e << 12 | t);
},
getBCHDigit:function(e) {
_i_("3da:2329");
for (var t = 0; 0 != e; ) t++, e >>>= 1;
return _r_(t);
},
getPatternPosition:function(e) {
return _i_("3da:2330"), _r_(o.PATTERN_POSITION_TABLE[e - 1]);
},
getMask:function(e, t, i) {
switch (_i_("3da:2331"), e) {
case a.PATTERN000:
return _r_((t + i) % 2 == 0);

case a.PATTERN001:
return _r_(t % 2 == 0);

case a.PATTERN010:
return _r_(i % 3 == 0);

case a.PATTERN011:
return _r_((t + i) % 3 == 0);

case a.PATTERN100:
return _r_((Math.floor(t / 2) + Math.floor(i / 3)) % 2 == 0);

case a.PATTERN101:
return _r_(t * i % 2 + t * i % 3 == 0);

case a.PATTERN110:
return _r_((t * i % 2 + t * i % 3) % 2 == 0);

case a.PATTERN111:
return _r_((t * i % 3 + (t + i) % 2) % 2 == 0);

default:
throw new Error("bad maskPattern:" + e);
}
_r_();
},
getErrorCorrectPolynomial:function(e) {
_i_("3da:2332");
for (var t = new l([ 1 ], 0), i = 0; e > i; i++) t = t.multiply(new l([ 1, _.gexp(i) ], 0));
return _r_(t);
},
getLengthInBits:function(e, t) {
if (_i_("3da:2333"), t >= 1 && 10 > t) switch (e) {
case i.MODE_NUMBER:
return _r_(10);

case i.MODE_ALPHA_NUM:
return _r_(9);

case i.MODE_8BIT_BYTE:
return _r_(8);

case i.MODE_KANJI:
return _r_(8);

default:
throw new Error("mode:" + e);
} else if (27 > t) switch (e) {
case i.MODE_NUMBER:
return _r_(12);

case i.MODE_ALPHA_NUM:
return _r_(11);

case i.MODE_8BIT_BYTE:
return _r_(16);

case i.MODE_KANJI:
return _r_(10);

default:
throw new Error("mode:" + e);
} else {
if (!(41 > t)) throw new Error("type:" + t);
switch (e) {
case i.MODE_NUMBER:
return _r_(14);

case i.MODE_ALPHA_NUM:
return _r_(13);

case i.MODE_8BIT_BYTE:
return _r_(16);

case i.MODE_KANJI:
return _r_(12);

default:
throw new Error("mode:" + e);
}
}
_r_();
},
getLostPoint:function(e) {
_i_("3da:2334");
for (var t = e.getModuleCount(), i = 0, n = 0; t > n; n++) for (var r = 0; t > r; r++) {
for (var a = 0, o = e.isDark(n, r), _ = -1; 1 >= _; _++) {
if (0 > n + _ || n + _ >= t) continue;
for (var s = -1; 1 >= s; s++) {
if (0 > r + s || r + s >= t) continue;
if (0 == _ && 0 == s) continue;
o == e.isDark(n + _, r + s) && a++;
}
}
a > 5 && (i += 3 + a - 5);
}
for (var n = 0; t - 1 > n; n++) for (var r = 0; t - 1 > r; r++) {
var l = 0;
e.isDark(n, r) && l++, e.isDark(n + 1, r) && l++, e.isDark(n, r + 1) && l++, e.isDark(n + 1, r + 1) && l++, (0 == l || 4 == l) && (i += 3);
}
for (var n = 0; t > n; n++) for (var r = 0; t - 6 > r; r++) e.isDark(n, r) && !e.isDark(n, r + 1) && e.isDark(n, r + 2) && e.isDark(n, r + 3) && e.isDark(n, r + 4) && !e.isDark(n, r + 5) && e.isDark(n, r + 6) && (i += 40);
for (var r = 0; t > r; r++) for (var n = 0; t - 6 > n; n++) e.isDark(n, r) && !e.isDark(n + 1, r) && e.isDark(n + 2, r) && e.isDark(n + 3, r) && e.isDark(n + 4, r) && !e.isDark(n + 5, r) && e.isDark(n + 6, r) && (i += 40);
for (var d = 0, r = 0; t > r; r++) for (var n = 0; t > n; n++) e.isDark(n, r) && d++;
var c = Math.abs(100 * d / t / t - 50) / 5;
return i += 10 * c, _r_(i);
}
}, _ = {
glog:function(e) {
if (_i_("3da:2335"), 1 > e) throw new Error("glog(" + e + ")");
return _r_(_.LOG_TABLE[e]);
},
gexp:function(e) {
for (_i_("3da:2336"); 0 > e; ) e += 255;
for (;e >= 256; ) e -= 255;
return _r_(_.EXP_TABLE[e]);
},
EXP_TABLE:new Array(256),
LOG_TABLE:new Array(256)
}, s = 0; 8 > s; s++) _.EXP_TABLE[s] = 1 << s;
for (var s = 8; 256 > s; s++) _.EXP_TABLE[s] = _.EXP_TABLE[s - 4] ^ _.EXP_TABLE[s - 5] ^ _.EXP_TABLE[s - 6] ^ _.EXP_TABLE[s - 8];
for (var s = 0; 255 > s; s++) _.LOG_TABLE[_.EXP_TABLE[s]] = s;
function l(e, t) {
if (_i_("3da:1282"), void 0 == e.length) throw new Error(e.length + "/" + t);
for (var i = 0; i < e.length && 0 == e[i]; ) i++;
this.num = new Array(e.length - i + t);
for (var n = 0; n < e.length - i; n++) this.num[n] = e[n + i];
_r_();
}
l.prototype = {
get:function(e) {
return _i_("3da:2337"), _r_(this.num[e]);
},
getLength:function() {
return _i_("3da:2338"), _r_(this.num.length);
},
multiply:function(e) {
_i_("3da:2339");
for (var t = new Array(this.getLength() + e.getLength() - 1), i = 0; i < this.getLength(); i++) for (var n = 0; n < e.getLength(); n++) t[i + n] ^= _.gexp(_.glog(this.get(i)) + _.glog(e.get(n)));
return _r_(new l(t, 0));
},
mod:function(e) {
if (_i_("3da:2340"), this.getLength() - e.getLength() < 0) return _r_(this);
for (var t = _.glog(this.get(0)) - _.glog(e.get(0)), i = new Array(this.getLength()), n = 0; n < this.getLength(); n++) i[n] = this.get(n);
for (var n = 0; n < e.getLength(); n++) i[n] ^= _.gexp(_.glog(e.get(n)) + t);
return _r_(new l(i, 0).mod(e));
}
};
function d(e, t) {
_i_("3da:1283"), this.totalCount = e, this.dataCount = t, _r_();
}
d.RS_BLOCK_TABLE = [ [ 1, 26, 19 ], [ 1, 26, 16 ], [ 1, 26, 13 ], [ 1, 26, 9 ], [ 1, 44, 34 ], [ 1, 44, 28 ], [ 1, 44, 22 ], [ 1, 44, 16 ], [ 1, 70, 55 ], [ 1, 70, 44 ], [ 2, 35, 17 ], [ 2, 35, 13 ], [ 1, 100, 80 ], [ 2, 50, 32 ], [ 2, 50, 24 ], [ 4, 25, 9 ], [ 1, 134, 108 ], [ 2, 67, 43 ], [ 2, 33, 15, 2, 34, 16 ], [ 2, 33, 11, 2, 34, 12 ], [ 2, 86, 68 ], [ 4, 43, 27 ], [ 4, 43, 19 ], [ 4, 43, 15 ], [ 2, 98, 78 ], [ 4, 49, 31 ], [ 2, 32, 14, 4, 33, 15 ], [ 4, 39, 13, 1, 40, 14 ], [ 2, 121, 97 ], [ 2, 60, 38, 2, 61, 39 ], [ 4, 40, 18, 2, 41, 19 ], [ 4, 40, 14, 2, 41, 15 ], [ 2, 146, 116 ], [ 3, 58, 36, 2, 59, 37 ], [ 4, 36, 16, 4, 37, 17 ], [ 4, 36, 12, 4, 37, 13 ], [ 2, 86, 68, 2, 87, 69 ], [ 4, 69, 43, 1, 70, 44 ], [ 6, 43, 19, 2, 44, 20 ], [ 6, 43, 15, 2, 44, 16 ], [ 4, 101, 81 ], [ 1, 80, 50, 4, 81, 51 ], [ 4, 50, 22, 4, 51, 23 ], [ 3, 36, 12, 8, 37, 13 ], [ 2, 116, 92, 2, 117, 93 ], [ 6, 58, 36, 2, 59, 37 ], [ 4, 46, 20, 6, 47, 21 ], [ 7, 42, 14, 4, 43, 15 ], [ 4, 133, 107 ], [ 8, 59, 37, 1, 60, 38 ], [ 8, 44, 20, 4, 45, 21 ], [ 12, 33, 11, 4, 34, 12 ], [ 3, 145, 115, 1, 146, 116 ], [ 4, 64, 40, 5, 65, 41 ], [ 11, 36, 16, 5, 37, 17 ], [ 11, 36, 12, 5, 37, 13 ], [ 5, 109, 87, 1, 110, 88 ], [ 5, 65, 41, 5, 66, 42 ], [ 5, 54, 24, 7, 55, 25 ], [ 11, 36, 12 ], [ 5, 122, 98, 1, 123, 99 ], [ 7, 73, 45, 3, 74, 46 ], [ 15, 43, 19, 2, 44, 20 ], [ 3, 45, 15, 13, 46, 16 ], [ 1, 135, 107, 5, 136, 108 ], [ 10, 74, 46, 1, 75, 47 ], [ 1, 50, 22, 15, 51, 23 ], [ 2, 42, 14, 17, 43, 15 ], [ 5, 150, 120, 1, 151, 121 ], [ 9, 69, 43, 4, 70, 44 ], [ 17, 50, 22, 1, 51, 23 ], [ 2, 42, 14, 19, 43, 15 ], [ 3, 141, 113, 4, 142, 114 ], [ 3, 70, 44, 11, 71, 45 ], [ 17, 47, 21, 4, 48, 22 ], [ 9, 39, 13, 16, 40, 14 ], [ 3, 135, 107, 5, 136, 108 ], [ 3, 67, 41, 13, 68, 42 ], [ 15, 54, 24, 5, 55, 25 ], [ 15, 43, 15, 10, 44, 16 ], [ 4, 144, 116, 4, 145, 117 ], [ 17, 68, 42 ], [ 17, 50, 22, 6, 51, 23 ], [ 19, 46, 16, 6, 47, 17 ], [ 2, 139, 111, 7, 140, 112 ], [ 17, 74, 46 ], [ 7, 54, 24, 16, 55, 25 ], [ 34, 37, 13 ], [ 4, 151, 121, 5, 152, 122 ], [ 4, 75, 47, 14, 76, 48 ], [ 11, 54, 24, 14, 55, 25 ], [ 16, 45, 15, 14, 46, 16 ], [ 6, 147, 117, 4, 148, 118 ], [ 6, 73, 45, 14, 74, 46 ], [ 11, 54, 24, 16, 55, 25 ], [ 30, 46, 16, 2, 47, 17 ], [ 8, 132, 106, 4, 133, 107 ], [ 8, 75, 47, 13, 76, 48 ], [ 7, 54, 24, 22, 55, 25 ], [ 22, 45, 15, 13, 46, 16 ], [ 10, 142, 114, 2, 143, 115 ], [ 19, 74, 46, 4, 75, 47 ], [ 28, 50, 22, 6, 51, 23 ], [ 33, 46, 16, 4, 47, 17 ], [ 8, 152, 122, 4, 153, 123 ], [ 22, 73, 45, 3, 74, 46 ], [ 8, 53, 23, 26, 54, 24 ], [ 12, 45, 15, 28, 46, 16 ], [ 3, 147, 117, 10, 148, 118 ], [ 3, 73, 45, 23, 74, 46 ], [ 4, 54, 24, 31, 55, 25 ], [ 11, 45, 15, 31, 46, 16 ], [ 7, 146, 116, 7, 147, 117 ], [ 21, 73, 45, 7, 74, 46 ], [ 1, 53, 23, 37, 54, 24 ], [ 19, 45, 15, 26, 46, 16 ], [ 5, 145, 115, 10, 146, 116 ], [ 19, 75, 47, 10, 76, 48 ], [ 15, 54, 24, 25, 55, 25 ], [ 23, 45, 15, 25, 46, 16 ], [ 13, 145, 115, 3, 146, 116 ], [ 2, 74, 46, 29, 75, 47 ], [ 42, 54, 24, 1, 55, 25 ], [ 23, 45, 15, 28, 46, 16 ], [ 17, 145, 115 ], [ 10, 74, 46, 23, 75, 47 ], [ 10, 54, 24, 35, 55, 25 ], [ 19, 45, 15, 35, 46, 16 ], [ 17, 145, 115, 1, 146, 116 ], [ 14, 74, 46, 21, 75, 47 ], [ 29, 54, 24, 19, 55, 25 ], [ 11, 45, 15, 46, 46, 16 ], [ 13, 145, 115, 6, 146, 116 ], [ 14, 74, 46, 23, 75, 47 ], [ 44, 54, 24, 7, 55, 25 ], [ 59, 46, 16, 1, 47, 17 ], [ 12, 151, 121, 7, 152, 122 ], [ 12, 75, 47, 26, 76, 48 ], [ 39, 54, 24, 14, 55, 25 ], [ 22, 45, 15, 41, 46, 16 ], [ 6, 151, 121, 14, 152, 122 ], [ 6, 75, 47, 34, 76, 48 ], [ 46, 54, 24, 10, 55, 25 ], [ 2, 45, 15, 64, 46, 16 ], [ 17, 152, 122, 4, 153, 123 ], [ 29, 74, 46, 14, 75, 47 ], [ 49, 54, 24, 10, 55, 25 ], [ 24, 45, 15, 46, 46, 16 ], [ 4, 152, 122, 18, 153, 123 ], [ 13, 74, 46, 32, 75, 47 ], [ 48, 54, 24, 14, 55, 25 ], [ 42, 45, 15, 32, 46, 16 ], [ 20, 147, 117, 4, 148, 118 ], [ 40, 75, 47, 7, 76, 48 ], [ 43, 54, 24, 22, 55, 25 ], [ 10, 45, 15, 67, 46, 16 ], [ 19, 148, 118, 6, 149, 119 ], [ 18, 75, 47, 31, 76, 48 ], [ 34, 54, 24, 34, 55, 25 ], [ 20, 45, 15, 61, 46, 16 ] ], d.getRSBlocks = function(e, t) {
_i_("3da:1983");
var i = d.getRsBlockTable(e, t);
if (void 0 == i) throw new Error("bad rs block @ typeNumber:" + e + "/errorCorrectLevel:" + t);
for (var n = i.length / 3, r = [], a = 0; n > a; a++) for (var o = i[3 * a + 0], _ = i[3 * a + 1], s = i[3 * a + 2], l = 0; o > l; l++) r.push(new d(_, s));
return _r_(r);
}, d.getRsBlockTable = function(e, t) {
switch (_i_("3da:1984"), t) {
case r.L:
return _r_(d.RS_BLOCK_TABLE[4 * (e - 1) + 0]);

case r.M:
return _r_(d.RS_BLOCK_TABLE[4 * (e - 1) + 1]);

case r.Q:
return _r_(d.RS_BLOCK_TABLE[4 * (e - 1) + 2]);

case r.H:
return _r_(d.RS_BLOCK_TABLE[4 * (e - 1) + 3]);

default:
return _r_(void 0);
}
_r_();
};
function c() {
_i_("3da:1284"), this.buffer = [], this.length = 0, _r_();
}
c.prototype = {
get:function(e) {
_i_("3da:2341");
var t = Math.floor(e / 8);
return _r_(1 == (this.buffer[t] >>> 7 - e % 8 & 1));
},
put:function(e, t) {
_i_("3da:2342");
for (var i = 0; t > i; i++) this.putBit(1 == (e >>> t - i - 1 & 1));
_r_();
},
getLengthInBits:function() {
return _i_("3da:2343"), _r_(this.length);
},
putBit:function(e) {
_i_("3da:2344");
var t = Math.floor(this.length / 8);
this.buffer.length <= t && this.buffer.push(0), e && (this.buffer[t] |= 128 >>> this.length % 8), this.length++, _r_();
}
};
var u = [ [ 17, 14, 11, 7 ], [ 32, 26, 20, 14 ], [ 53, 42, 32, 24 ], [ 78, 62, 46, 34 ], [ 106, 84, 60, 44 ], [ 134, 106, 74, 58 ], [ 154, 122, 86, 64 ], [ 192, 152, 108, 84 ], [ 230, 180, 130, 98 ], [ 271, 213, 151, 119 ], [ 321, 251, 177, 137 ], [ 367, 287, 203, 155 ], [ 425, 331, 241, 177 ], [ 458, 362, 258, 194 ], [ 520, 412, 292, 220 ], [ 586, 450, 322, 250 ], [ 644, 504, 364, 280 ], [ 718, 560, 394, 310 ], [ 792, 624, 442, 338 ], [ 858, 666, 482, 382 ], [ 929, 711, 509, 403 ], [ 1003, 779, 565, 439 ], [ 1091, 857, 611, 461 ], [ 1171, 911, 661, 511 ], [ 1273, 997, 715, 535 ], [ 1367, 1059, 751, 593 ], [ 1465, 1125, 805, 625 ], [ 1528, 1190, 868, 658 ], [ 1628, 1264, 908, 698 ], [ 1732, 1370, 982, 742 ], [ 1840, 1452, 1030, 790 ], [ 1952, 1538, 1112, 842 ], [ 2068, 1628, 1168, 898 ], [ 2188, 1722, 1228, 958 ], [ 2303, 1809, 1283, 983 ], [ 2431, 1911, 1351, 1051 ], [ 2563, 1989, 1423, 1093 ], [ 2699, 2099, 1499, 1139 ], [ 2809, 2213, 1579, 1219 ], [ 2953, 2331, 1663, 1273 ] ];
function h() {
return _i_("3da:1285"), _r_("undefined" != typeof CanvasRenderingContext2D);
}
function f() {
_i_("3da:1286");
var e = !1, t = navigator.userAgent;
if (/android/i.test(t)) {
e = !0;
var i = t.toString().match(/android ([0-9]\.[0-9])/i);
i && i[1] && (e = parseFloat(i[1]));
}
return _r_(e);
}
var p = function() {
_i_("3da:2132");
var e = function(e, t) {
_i_("3da:2742"), this._el = e, this._htOption = t, _r_();
};
return e.prototype.draw = function(e) {
_i_("3da:2743");
var t = this._htOption, i = this._el, n = e.getModuleCount();
Math.floor(t.width / n), Math.floor(t.height / n);
this.clear();
function r(e, t) {
_i_("3da:2880");
var i = document.createElementNS("http://www.w3.org/2000/svg", e);
for (var n in t) t.hasOwnProperty(n) && i.setAttribute(n, t[n]);
return _r_(i);
}
var a = r("svg", {
viewBox:"0 0 " + String(n) + " " + String(n),
width:"100%",
height:"100%",
fill:t.colorLight
});
a.setAttributeNS("http://www.w3.org/2000/xmlns/", "xmlns:xlink", "http://www.w3.org/1999/xlink"), i.appendChild(a), a.appendChild(r("rect", {
fill:t.colorLight,
width:"100%",
height:"100%"
})), a.appendChild(r("rect", {
fill:t.colorDark,
width:"1",
height:"1",
id:"template"
}));
for (var o = 0; n > o; o++) for (var _ = 0; n > _; _++) if (e.isDark(o, _)) {
var s = r("use", {
x:String(_),
y:String(o)
});
s.setAttributeNS("http://www.w3.org/1999/xlink", "href", "#template"), a.appendChild(s);
}
_r_();
}, e.prototype.clear = function() {
for (_i_("3da:2744"); this._el.hasChildNodes(); ) this._el.removeChild(this._el.lastChild);
_r_();
}, _r_(e);
}(), g = "svg" === document.documentElement.tagName.toLowerCase(), m = g ? p :h() ? function() {
_i_("3da:2507");
function e() {
_i_("3da:2745"), this._elImage.src = this._elCanvas.toDataURL("image/png"), this._elImage.style.display = "block", this._elCanvas.style.display = "none", _r_();
}
function t(e, t) {
_i_("3da:2746");
var i = this;
if (i._fFail = t, i._fSuccess = e, null === i._bSupportDataURI) {
var n = document.createElement("img"), r = function() {
_i_("3da:2982"), i._bSupportDataURI = !1, i._fFail && i._fFail.call(i), _r_();
}, a = function() {
_i_("3da:2983"), i._bSupportDataURI = !0, i._fSuccess && i._fSuccess.call(i), _r_();
};
return n.onabort = r, n.onerror = r, n.onload = a, n.src = "data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==", _r_();
}
i._bSupportDataURI === !0 && i._fSuccess ? i._fSuccess.call(i) :i._bSupportDataURI === !1 && i._fFail && i._fFail.call(i), _r_();
}
var i = function(e, t) {
_i_("3da:2884"), this._bIsPainted = !1, this._android = f(), this._htOption = t, this._elCanvas = document.createElement("canvas"), this._elCanvas.width = t.width, this._elCanvas.height = t.height, e.appendChild(this._elCanvas), this._el = e, this._oContext = this._elCanvas.getContext("2d"), this._bIsPainted = !1, this._elImage = document.createElement("img"), this._elImage.alt = "Scan me!", this._elImage.style.display = "none", this._el.appendChild(this._elImage), this._bSupportDataURI = null, _r_();
};
return i.prototype.draw = function(e) {
_i_("3da:2885");
var t = this._elImage, i = this._oContext, n = this._htOption, r = e.getModuleCount(), a = n.width / r, o = n.height / r, _ = Math.round(a), s = Math.round(o);
t.style.display = "none", this.clear();
for (var l = 0; r > l; l++) for (var d = 0; r > d; d++) {
var c = e.isDark(l, d), u = d * a, h = l * o;
i.strokeStyle = c ? n.colorDark :n.colorLight, i.lineWidth = 1, i.fillStyle = c ? n.colorDark :n.colorLight, i.fillRect(u, h, a, o), i.strokeRect(Math.floor(u) + .5, Math.floor(h) + .5, _, s), i.strokeRect(Math.ceil(u) - .5, Math.ceil(h) - .5, _, s);
}
this._bIsPainted = !0, _r_();
}, i.prototype.makeImage = function() {
_i_("3da:2886"), this._bIsPainted && t.call(this, e), _r_();
}, i.prototype.isPainted = function() {
return _i_("3da:2887"), _r_(this._bIsPainted);
}, i.prototype.clear = function() {
_i_("3da:2888"), this._oContext.clearRect(0, 0, this._elCanvas.width, this._elCanvas.height), this._bIsPainted = !1, _r_();
}, i.prototype.round = function(e) {
if (_i_("3da:2889"), !e) return _r_(e);
return _r_(Math.floor(1e3 * e) / 1e3);
}, _r_(i);
}() :function() {
_i_("3da:2506");
var e = function(e, t) {
_i_("3da:2881"), this._el = e, this._htOption = t, _r_();
};
return e.prototype.draw = function(e) {
_i_("3da:2882");
for (var t = this._htOption, i = this._el, n = e.getModuleCount(), r = Math.floor(t.width / n), a = Math.floor(t.height / n), o = [ '<table style="border:0;border-collapse:collapse;">' ], _ = 0; n > _; _++) {
o.push("<tr>");
for (var s = 0; n > s; s++) o.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:' + r + "px;height:" + a + "px;background-color:" + (e.isDark(_, s) ? t.colorDark :t.colorLight) + ';"></td>');
o.push("</tr>");
}
o.push("</table>"), i.innerHTML = o.join("");
var l = i.childNodes[0], d = (t.width - l.offsetWidth) / 2, c = (t.height - l.offsetHeight) / 2;
d > 0 && c > 0 && (l.style.margin = c + "px " + d + "px"), _r_();
}, e.prototype.clear = function() {
_i_("3da:2883"), this._el.innerHTML = "", _r_();
}, _r_(e);
}();
function v(e, t) {
_i_("3da:1287");
for (var i = 1, n = b(e), a = 0, o = u.length; o >= a; a++) {
var _ = 0;
switch (t) {
case r.L:
_ = u[a][0];
break;

case r.M:
_ = u[a][1];
break;

case r.Q:
_ = u[a][2];
break;

case r.H:
_ = u[a][3];
}
if (_ >= n) break;
i++;
}
if (i > u.length) throw new Error("Too long data");
return _r_(i);
}
function b(e) {
_i_("3da:1288");
var t = encodeURI(e).toString().replace(/\%[0-9a-fA-F]{2}/g, "a");
return _r_(t.length + (t.length != e ? 3 :0));
}
n = function(e, t) {
if (_i_("3da:1985"), this._htOption = {
width:256,
height:256,
typeNumber:4,
colorDark:"#000000",
colorLight:"#ffffff",
correctLevel:r.H
}, "string" == typeof t && (t = {
text:t
}), t) for (var i in t) this._htOption[i] = t[i];
"string" == typeof e && (e = document.getElementById(e)), this._htOption.useSVG && (m = p), this._android = f(), this._el = e, this._oQRCode = null, this._oDrawing = new m(this._el, this._htOption), this._htOption.text && this.makeCode(this._htOption.text), _r_();
}, n.prototype.makeCode = function(e) {
_i_("3da:1986"), this._oQRCode = new t(v(e, this._htOption.correctLevel), this._htOption.correctLevel), this._oQRCode.addData(e), this._oQRCode.make(), this._el.title = e, this._oDrawing.draw(this._oQRCode), this.makeImage(), _r_();
}, n.prototype.makeImage = function() {
_i_("3da:1987"), "function" == typeof this._oDrawing.makeImage && (!this._android || this._android >= 3) && this._oDrawing.makeImage(), _r_();
}, n.prototype.clear = function() {
_i_("3da:1988"), this._oDrawing.clear(), _r_();
}, n.CorrectLevel = r, _r_();
}(), t.QRCode = n, _r_();
}), B.define("component/qrcode/qrcode", function(e, t, i) {
"use strict";
_i_("3da:134");
var n = e("component"), r = e("read-data-options"), a = e("component/qrcode/qrcodelib").QRCode;
i.exports = n.extend({
init:function() {
_i_("3da:1752"), this.options = r(this.el, {
url:String,
width:{
type:Number,
defaultValue:160
},
height:{
type:Number,
defaultValue:160
},
skipShorten:{
type:Boolean,
defaultValue:!1
}
}), this.$el.css({
width:this.options.width + "px",
height:this.options.height + "px"
}), this.options.skipShorten ? this.createQrCode() :this.shortenUrl(), _r_();
},
shortenUrl:function() {
_i_("3da:1753");
var e = this;
$.get("/short_uri?url=" + encodeURIComponent(e.options.url) + "&aid=" + booking.env.aid, function(t) {
_i_("3da:2508"), e.options.url = location.protocol + "//www.booking.com/" + t.short_url, e.createQrCode(), _r_();
}), _r_();
},
createQrCode:function() {
_i_("3da:1754"), new a(this.$el[0], {
text:this.options.url,
width:this.options.width,
height:this.options.height,
colorDark:"#000000",
colorLight:"#ffffff",
correctLevel:2
}), _r_();
}
}), _r_();
}), booking[sNSStartup].wlData = function(e) {
_i_("3da:293");
var t = e.require("jquery"), i = {}, n = {
EDIT:"wl:edit",
FETCH:"wl:fetch",
CREATE:"wl:create",
REMOVE:"wl:remove",
EDITHOTEL:"wl:edithotel",
EDITHOTELSTART:"wl:edithotelstart",
EDITHOTELS:"wl:edithotels",
EDITHOTELSSTART:"wl:edithotelsstart",
LOADINGSTART:"wl:loadingstart",
LOADINGEND:"wl:loadingend"
}, r = {
RECENTLY_VIEWED:3
};
function a(e) {
return _i_("3da:653"), _r_(t.extend(e || {}, {
aid:booking.env.b_aid,
lang:booking.env.b_lang_for_url,
sid:booking.env.b_sid,
stype:booking.env.b_site_type_id,
stid:booking.env.b_stid,
label:booking.env.b_label
}));
}
function o(e, r) {
_i_("3da:654"), r = a(r);
var o = e + t.param(r);
if (o in i) return _r_(i[o]);
var s = booking.promise();
return _(n.LOADINGSTART, {
params:r
}), t.ajax({
type:"POST",
url:e,
data:r,
success:function(e) {
_i_("3da:2133"), s.fulfill({
params:r,
result:e
}), _r_();
},
error:function(e) {
_i_("3da:2134"), s.reject(e), _r_();
},
complete:function() {
_i_("3da:2135"), _(n.LOADINGEND, {
params:r
}), _r_();
}
}), i[o] = s, _r_(s);
}
function _(t, i) {
return _i_("3da:655"), e.eventEmitter.trigger(t, i), _r_(i);
}
function s(e) {
_i_("3da:656");
var i = "is_new", n = "creation_timestamp", r = [ "is_collaborated", "privacy", "selected" ];
t.each(e, function(e, a) {
_i_("3da:1755"), t.each(r, function(e, t) {
_i_("3da:2509"), t in a && (a[t] = Boolean(Number(a[t]))), _r_();
}), n in a && (a[i] = 1e3 * a[n] > new Date() - 864e5), _r_();
}), _r_();
}
return _r_({
init:function() {},
EVENTS:n,
TYPE:r,
edit:function() {},
lists:{},
getHotelLists:function(e) {
return _i_("3da:1291"), _r_(this.lists[e] || []);
},
getListById:function(e, t) {
_i_("3da:1292");
for (var i = this.getHotelLists(e), n = 0; n < i.length; n++) {
var r = i[n];
if (r.id == t) return _r_(r);
}
return _r_(null);
},
updateLists:function(e, t) {
if (_i_("3da:1293"), !e || !e.params) return _r_();
var i = e.params.lists, n = this.getListById(t, i);
n && (n.selected = 1 == e.params.new_state), _r_();
},
addList:function(e, i) {
if (_i_("3da:1294"), !e || !e.id) return _r_();
for (var n in this.lists) if (this.lists.hasOwnProperty(n)) {
var r = this.lists[n];
r.push(t.extend({
hotels_count:1,
selected:n === i
}, e));
}
_r_();
},
fetch:function(e) {
return _i_("3da:1295"), _r_(o("/wishlist/get", e).then(function(t) {
return _i_("3da:2652"), s(t.result.lists), this.lists[e.hotel_id] = t.result.lists, _r_(_(n.FETCH, t));
}.bind(this)));
},
create:function(e) {
return _i_("3da:1296"), this.clearCache(), _r_(o("/wishlist/create", e).then(function(i) {
if (_i_("3da:2653"), s([ i.result ]), this.addList(i.result, e.hotel_id), "string" == typeof e.hotel_ids) {
var r = e.hotel_ids.split(",");
t.each(r, function(e, r) {
_i_("3da:2961"), _(n.EDITHOTEL, {
params:t.extend({
hotel_id:r,
lists:i.result.id
}, i.params),
result:i.result
}), _r_();
});
}
return _r_(_(n.CREATE, i));
}.bind(this)));
},
remove:function() {},
editHotels:function(e) {
_i_("3da:1298"), this.clearCache(), _(n.EDITHOTELSSTART, e);
var i = e.hotel_ids, r = new Array(i.length + 1).join("1").split("");
return t.isArray(i) && (e.hotel_ids = i.join(",")), _r_(o("/wishlist/save_hotels", t.extend({
new_states:r.join(",")
}, e)).then(function(e) {
return _i_("3da:2345"), t.each(i, function(i, r) {
_i_("3da:2823"), _(n.EDITHOTELS, {
params:t.extend({
hotel_id:r
}, e.params),
result:e.result
}), _r_();
}), _r_(e);
}));
},
editHotel:function(e) {
return _i_("3da:1299"), this.clearCache(), _(n.EDITHOTELSTART, e), _r_(o("/wishlist/save_hotel", e).then(function(t) {
return _i_("3da:2654"), this.updateLists(t, e.hotel_id), _r_(_(n.EDITHOTEL, t));
}.bind(this)));
},
checkWishlisted:function(e) {
return _i_("3da:1300"), this.clearCache(), _r_(o("/wishlist/wishlisted_hotels", e));
},
clearCache:function() {
_i_("3da:1301"), i = {}, _r_();
},
bind:function(t, i, n) {
_i_("3da:1302"), e.eventEmitter.bind(t, function() {
_i_("3da:2346"), i.apply(n, arguments), _r_();
}), _r_();
}
});
}(booking), B.define("lists/lists-recently-viewed/lists-recently-viewed", function(e, t, i) {
"use strict";
_i_("3da:135");
var n = e("../lists-api/lists-api"), r = e("../lists-api/lists-api").API, a = e("../lists-store/lists-store"), o = [];
i.exports = {
recentlyViewedHotels:o,
addHotelsToList:function(e) {
_i_("3da:1303");
var t = this;
a.addHotels({
list_id:e.id,
hotels:t.recentlyViewedHotels
}).then(function() {
_i_("3da:2347"), t.onAddedtoList(e), _r_();
}), _r_();
},
onAddedtoList:function(e) {
if (_i_("3da:1304"), this.renderAddRecentlyViewedToList({
success:1,
recently_viewed_list_name:e.name,
recently_viewed_list_url:e.url
}), window.listView && !B.env.b_run_tfl_move_away_from_lightbox) {
var t = window.listView;
t.setCurrentList({
id:e.id
}), t.show();
}
_r_();
},
toggleLoader:function(e) {
_i_("3da:1305"), $(".js-add-recently-viewed-to-list-loader").toggleClass("g-hidden", !e), _r_();
},
addBinds:function() {
_i_("3da:1306");
var e = this;
function t() {
_i_("3da:1989");
var t = a.getListByDefaultListId(n.type.RECENTLY_VIEWED);
B.env.auth_level < 1 && (t = a.getListById("0"));
var i = booking.promise();
if (t) i.fulfill(t); else {
var r = $.trim($(".js-uc-viewed-hotels-trigger").text());
i.fulfill(a.createList({
name:r,
default_list:n.type.RECENTLY_VIEWED
}));
}
i.then(function(t) {
_i_("3da:2655"), e.addHotelsToList(t), _r_();
}), _r_();
}
$(".uc_viewedhotels").delegate(".js-save-recently-viewed", "click", function() {
_i_("3da:2348");
var i = {};
i.limit = 5, e.toggleLoader(!0), r.getRecentlyViewed(i, function(i) {
_i_("3da:2824"), e.recentlyViewedHotels = i.hotels, a.fetch({}).then(t), _r_();
}), _r_();
}), _r_();
},
renderAddRecentlyViewedToList:function(e) {
_i_("3da:1307");
var t = $(".uc_viewedhotels .user_search_item:not(.no_listing)").length;
if (0 === t) return _r_();
var i = $.extend(e, {
wl_recently_viewed_loader:B.tools.jsStaticUrl("/static/img/wl-recently-viewed-loader.gif"),
properties_length:t
});
$(".save-recently-viewed-container").remove(), $(".popover_footer_add_to_list").prepend(B.jstmpl("lists_recently_viewed").render(i)), B.eventEmitter.trigger("recently_viewed_properties_nav_trigger"), _r_();
},
init:function() {
_i_("3da:1308"), booking.eventEmitter.bind("uc_recently_viewed_loaded", this.renderAddRecentlyViewedToList.bind(this)), this.addBinds(), _r_();
}
}, _r_();
}), B.define("lists/lists-header-button/lists-header-button", function(e, t, i) {
"use strict";
_i_("3da:136");
var n = e("../lists-store/lists-store"), r = e("../listview-touch/listview-touch");
i.exports = B.require("component").extend({
init:function() {
_i_("3da:1756");
var e = booking[sNSStartup].wlData, t = this.$el.find(".js-lists-header-button"), i = "lists-header-button--flash", a = [ e.EVENTS.EDITHOTEL ];
B.eventEmitter.bind(a.join(" "), function(e, n) {
_i_("3da:2510"), t.addClass(i), setTimeout(function() {
_i_("3da:2890"), t.removeClass(i), _r_();
}, 600), _r_();
}), n.on("liststore:loading", function(e) {
_i_("3da:2511"), $(".lists-header-button").toggleClass("lists-header-button--loading", e), r.isEnabled() && $(".js-uc-listview-lightbox").toggleClass("uc-listview-loading", e), _r_();
}), _r_();
}
}), _r_();
}), B.require([ "require" ], function(e) {
_i_("3da:137");
var t = e("lists/lists-recently-viewed/lists-recently-viewed");
t.init(), B.define("component/lists-header-button", function() {
return _i_("3da:888"), _r_(e("lists/lists-header-button/lists-header-button"));
}), _r_();
}), /* @preserve
 * accounting.js v0.3.2
 * Copyright 2011, Joss Crowcroft
 *
 * Freely distributable under the MIT license.
 * Portions of accounting.js are inspired or borrowed from underscore.js
 *
 * Full details and documentation:
 * http://josscrowcroft.github.com/accounting.js/
 */
function(e, t) {
_i_("3da:138");
var i = {};
i.version = "0.3.2", i.settings = {
currency:{
symbol:"$",
format:"%s%v",
decimal:".",
thousand:",",
precision:2,
grouping:3
},
number:{
precision:0,
grouping:3,
thousand:",",
decimal:"."
}
};
var n = Array.prototype.map, r = Array.isArray, a = Object.prototype.toString;
function o(e) {
return _i_("3da:433"), _r_(!!("" === e || e && e.charCodeAt && e.substr));
}
function _(e) {
return _i_("3da:434"), _r_(r ? r(e) :"[object Array]" === a.call(e));
}
function s(e) {
return _i_("3da:435"), _r_(e && "[object Object]" === a.call(e));
}
function l(e, t) {
_i_("3da:436");
var i;
e = e || {}, t = t || {};
for (i in t) t.hasOwnProperty(i) && null == e[i] && (e[i] = t[i]);
return _r_(e);
}
function d(e, t, i) {
_i_("3da:437");
var r, a, o = [];
if (!e) return _r_(o);
if (n && e.map === n) return _r_(e.map(t, i));
for (r = 0, a = e.length; a > r; r++) o[r] = t.call(i, e[r], r, e);
return _r_(o);
}
function c(e, t) {
return _i_("3da:438"), e = Math.round(Math.abs(e)), _r_(isNaN(e) ? t :e);
}
function u(e) {
_i_("3da:439");
var t = i.settings.currency.format;
if ("function" == typeof e && (e = e()), o(e) && e.match("%v")) return _r_({
pos:e,
neg:e.replace("-", "").replace("%v", "-%v"),
zero:e
});
if (!e || !e.pos || !e.pos.match("%v")) return _r_(o(t) ? i.settings.currency.format = {
pos:t,
neg:t.replace("%v", "-%v"),
zero:t
} :t);
return _r_(e);
}
var h = i.unformat = i.parse = function(e, t) {
if (_i_("3da:1309"), _(e)) return _r_(d(e, function(e) {
return _i_("3da:2656"), _r_(h(e, t));
}));
if (e = e || 0, "number" == typeof e) return _r_(e);
t = t || i.settings.number.decimal;
var n = new RegExp("[^0-9-" + t + "]", [ "g" ]), r = parseFloat(("" + e).replace(/\((.*)\)/, "-$1").replace(n, "").replace(t, "."));
return _r_(isNaN(r) ? 0 :r);
}, f = i.toFixed = function(e, t) {
_i_("3da:1083"), t = c(t, i.settings.number.precision);
var n = Math.pow(10, t);
return _r_((Math.round(i.unformat(e) * n) / n).toFixed(t));
}, p = i.formatNumber = function(e, t, n, r) {
if (_i_("3da:1084"), _(e)) return _r_(d(e, function(e) {
return _i_("3da:2512"), _r_(p(e, t, n, r));
}));
e = h(e);
var a = l(s(t) ? t :{
precision:t,
thousand:n,
decimal:r
}, i.settings.number), o = c(a.precision), u = 0 > e ? "-" :"", g = parseInt(f(Math.abs(e || 0), o), 10) + "", m = g.length > 3 ? g.length % 3 :0;
return _r_(u + (m ? g.substr(0, m) + a.thousand :"") + g.substr(m).replace(/(\d{3})(?=\d)/g, "$1" + a.thousand) + (o ? a.decimal + f(Math.abs(e), o).split(".")[1] :""));
}, g = i.formatMoney = function(e, t, n, r, a, o) {
if (_i_("3da:1085"), _(e)) return _r_(d(e, function(e) {
return _i_("3da:2513"), _r_(g(e, t, n, r, a, o));
}));
e = h(e);
var f = l(s(t) ? t :{
symbol:t,
precision:n,
thousand:r,
decimal:a,
format:o
}, i.settings.currency), m = u(f.format), v = e > 0 ? m.pos :0 > e ? m.neg :m.zero;
return _r_(v.replace("%s", f.symbol).replace("%v", p(Math.abs(e), c(f.precision), f.thousand, f.decimal)));
};
i.formatColumn = function(e, t, n, r, a, f) {
if (_i_("3da:889"), !e) return _r_([]);
var g = l(s(t) ? t :{
symbol:t,
precision:n,
thousand:r,
decimal:a,
format:f
}, i.settings.currency), m = u(g.format), v = m.pos.indexOf("%s") < m.pos.indexOf("%v") ? !0 :!1, b = 0, y = d(e, function(e, t) {
if (_i_("3da:2137"), _(e)) return _r_(i.formatColumn(e, g));
e = h(e);
var n = e > 0 ? m.pos :0 > e ? m.neg :m.zero, r = n.replace("%s", g.symbol).replace("%v", p(Math.abs(e), c(g.precision), g.thousand, g.decimal));
return r.length > b && (b = r.length), _r_(r);
});
return _r_(d(y, function(e, t) {
if (_i_("3da:1990"), o(e) && e.length < b) return _r_(v ? e.replace(g.symbol, g.symbol + new Array(b - e.length + 1).join(" ")) :new Array(b - e.length + 1).join(" ") + e);
return _r_(e);
}));
}, i.noConflict = function(n) {
return _i_("3da:1086"), _r_(function() {
return _i_("3da:1991"), e.accounting = n, i.noConflict = t, _r_(i);
});
}(e.accounting), e.accounting = i, _r_();
}(window), function() {
if (_i_("3da:139"), !window.accounting || !booking.env.accounting_config) return _r_();
var e = window.accounting, t = booking.env.accounting_config, i = {
init:function(e) {
_i_("3da:1310"), this._current = e, _r_();
},
formatMoney:function(i, a, o) {
if (_i_("3da:1311"), "number" != typeof i && isNaN(parseFloat(i)) && ("function" == typeof B.debug && B.debug("jstmpl").warn("formatMoney expected a number but got a string.", arguments), "function" == typeof B.squeak && B.squeak("MMZXZAQUfUfWcZZYTRXO")), "undefined" != typeof a ? "object" == typeof a && (o = a, a = this._current) :a = this._current, "undefined" == typeof a) throw "The module hasn't been initiated, so you have to provide currencyCode";
i % 1 === 0 && (o = o || {}, o.precision = "undefined" != typeof o.precision ? o.precision :"integer");
var _ = o && "undefined" != typeof o.is_arabic_number ? o.is_arabic_number :"undefined" != typeof t.is_arabic_number ? t.is_arabic_number :!1, s = n(a, o), l = e.formatMoney(i, s);
return _ && (l = r(l)), _r_(l);
},
formatDistanceNumber:function(t, i) {
_i_("3da:1312");
var r = this._current, a = n(r, i), o = a.symbol, _ = e.formatMoney(t, a), s = new RegExp(o, "g");
return _ = _.replace(s, ""), _ = _.replace(/[^0-9\.\,]/g, ""), _r_(_);
},
formatDistance:function(e, t) {
_i_("3da:1313");
var i, n = booking.env, r = {
number:e,
unit:"m",
isImperial:n.distance_config && "metric" != n.distance_config
}, a = " ";
return t = t || {}, t.unit = t.unit || r.unit, t.hasOwnProperty("precision") || (t.precision = 1), this.changeDistanceToMetricUnit(r, t), r.isImperial && this.convertDistanceToImperial(r, t), i = this.formatDistanceNumber(r.number, t), _r_(i + a + r.unit);
},
changeDistanceToMetricUnit:function(e, t) {
_i_("3da:1314");
var i = e.number;
if (t.unit) switch (t.unit) {
case "m":
e.unit = "m", e.number = e.number;
break;

case "km":
e.number = .001 * i, !e.isImperial && t.autoUnit && Math.floor(e.number) < 1 ? (e.number = i, t.precision = 0, e.unit = "m") :e.unit = "km";
}
_r_();
},
convertDistanceToImperial:function(e, t) {
_i_("3da:1315");
var i = e.number;
switch (t.unit) {
case "m":
e.unit = "yd", e.number = 1.0936133 * i;
break;

case "km":
e.number = .621371192 * i, e.unit = "mi";
}
_r_();
},
getOptions:function() {
return _i_("3da:1316"), _r_(n(this._current));
}
};
("" != booking.env.b_selected_currency_symbol || booking.env.b_selected_currency_symbol != booking.env.b_selected_currency) && B.et.stage("eDdJFMWZNedZWEaXCfAOBMOWZSRVfBRT", 1), B.et.track("eDdJFMWZNedZWEaXCfAOBMOWZSRVfBRT") ? i.init(booking.env.b_selected_currency_symbol || booking.env.b_selected_currency || booking.env.b_hotel_currencycode) :i.init(booking.env.b_selected_currency || booking.env.b_hotel_currencycode), booking.utils = booking.utils || {}, booking.utils.accounting = i;
function n(e, i) {
_i_("3da:440"), i = $.extend(i, {
symbolFormat:"%s",
valueFormat:"%s"
}), i.valueFormat = i.valueFormat.replace("%s", "%v");
var n, r = i.symbolFormat, a = i.valueFormat, o = "undefined" != typeof t.html_symbol[e] ? t.html_symbol[e] :e, _ = "undefined" != typeof t.decimal_separator[e] ? t.decimal_separator[e] :"undefined" != typeof t.decimal_separator["default"] ? t.decimal_separator["default"] :".", s = "undefined" != typeof t.group_separator[e] ? t.group_separator[e] :"undefined" != typeof t.group_separator["default"] ? t.group_separator["default"] :",", l = function(e, t) {
return _i_("3da:1757"), _r_("before" === t ? r + e + a :a + e + r);
}("undefined" != typeof t.currency_separator[e] ? t.currency_separator[e] :"undefined" != typeof t.currency_separator["default"] && e ? t.currency_separator["default"] :" ", "undefined" != typeof t.symbol_position[e] ? t.symbol_position[e] :"undefined" != typeof t.symbol_position["default"] ? t.symbol_position["default"] :"before");
return "undefined" != typeof t.num_decimals && (n = t.num_decimals["default"]), "undefined" != typeof t.num_decimals && (n = "undefined" != typeof t.num_decimals[e] ? t.num_decimals[e] :n), "integer" === i.precision && (n = 0), isNaN(parseInt(i.precision, 10)) || (n = i.precision), _r_({
symbol:o,
decimal:_,
thousand:s,
format:l,
precision:n
});
}
function r(e) {
_i_("3da:441");
var t = [ "&#1632;", "&#1633;", "&#1634;", "&#1635;", "&#1636;", "&#1637;", "&#1638;", "&#1639;", "&#1640;", "&#1641;" ], i = "";
return i = e.replace(/(?!&#[\d|a-z|A-Z]*)\d(?![\d|a-z|A-Z]*;)/g, function(e, i, n, r) {
return _i_("3da:1758"), _r_(t[parseInt(e, 10)]);
}), _r_(i);
}
_r_();
}(), $(function() {
_i_("3da:140"), booking.jstmpl && booking.jstmpl.setup(function(e) {
if (_i_("3da:1759"), !e || !e.formatMoney) return _r_({});
function t(t, i) {
if (_i_("3da:2138"), isNaN(t) || t % 1 !== 0) return _r_(t);
return i = i || {}, i.precision = 0, _r_(e.formatMoney(t, "", i));
}
function i(t, i) {
if (_i_("3da:2139"), isNaN(t)) return _r_(t);
if (i = i || {}, i && !i.precision) {
var n = ("" + t).split("."), r = (n.length > 1 ? n[1] :"").length;
i.precision = r;
}
return _r_(e.formatMoney(t, "", i));
}
function n(e) {
_i_("3da:2140");
var t, i = Math.abs;
if (i(e) < 50) return _r_(e);
if (t = i(e) < 100 ? 5 :i(e) < 500 ? 10 :i(e) < 1e3 ? 50 :i(e) < 5e3 ? 100 :i(e) < 1e4 ? 500 :i(e) < 5e4 ? 1e3 :i(e) < 1e5 ? 5e3 :1e4, e % t === 0) return _r_(e);
var n = 1;
return 0 > e && (n = 0), e = Math.floor(e / t), e *= t, n && (e += t), _r_(e);
}
function r(t, i) {
if (_i_("3da:2141"), isNaN(t) || t % 1 !== 0) return _r_(t);
return i = i || {}, i.precision = 0, t = n(t), _r_(e.formatMoney(t, "", i));
}
function a(t, i) {
return _i_("3da:2142"), _r_(e.formatMoney(t, i));
}
function o(e, t) {
_i_("3da:2143");
var n = i(e, t);
return /,|\./.test(n) || 10 == n || (n += booking.env.accounting_config.decimal_separator["default"] + "0"), _r_(n);
}
return _r_({
fn:{
format_number:t,
format_number_decimal:i,
format_number_rounded:r,
format_price:a,
format_review_score:o,
format_review_score_plain:o
}
});
}(booking && booking.utils && booking.utils.accounting)), _r_();
}), "function" != typeof Object.getPrototypeOf && (Object.getPrototypeOf = function(e) {
_i_("3da:442");
var t = e.__proto__;
return _r_(t || null === t ? t :"[object Function]" === Function.prototype.call.call(Object.prototype.toString, e.constructor) ? e.constructor.prototype :e instanceof Object ? Object.prototype :null);
}), B.define("redux", function(e, t, i) {
_i_("3da:141"), function(e, n) {
_i_("3da:891"), "object" == typeof t && "object" == typeof i ? i.exports = n() :"function" == typeof define && define.amd ? define([], n) :"object" == typeof t ? t.Redux = n() :e.Redux = n(), _r_();
}(this, function() {
return _i_("3da:890"), _r_(function(e) {
_i_("3da:1992");
var t = {};
function i(n) {
if (_i_("3da:2349"), t[n]) return _r_(t[n].exports);
var r = t[n] = {
exports:{},
id:n,
loaded:!1
};
return e[n].call(r.exports, r, r.exports, i), r.loaded = !0, _r_(r.exports);
}
return i.m = e, i.c = t, i.p = "", _r_(i(0));
}([ function(e, t, i) {
"use strict";
_i_("3da:2144"), t.__esModule = !0, t.compose = t.applyMiddleware = t.bindActionCreators = t.combineReducers = t.createStore = void 0;
var n = i(2), r = f(n), a = i(7), o = f(a), _ = i(6), s = f(_), l = i(5), d = f(l), c = i(1), u = f(c), h = i(3);
f(h);
function f(e) {
return _i_("3da:2514"), _r_(e && e.__esModule ? e :{
"default":e
});
}
t.createStore = r["default"], t.combineReducers = o["default"], t.bindActionCreators = s["default"], t.applyMiddleware = d["default"], t.compose = u["default"], _r_();
}, function(e, t) {
"use strict";
_i_("3da:2145"), t.__esModule = !0, t["default"] = i;
function i() {
_i_("3da:2515");
for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
if (0 === t.length) return _r_(function(e) {
return _i_("3da:2917"), _r_(e);
});
var n = function() {
_i_("3da:2962");
var e = t[t.length - 1], i = t.slice(0, -1);
return _r_({
v:function() {
return _i_("3da:3017"), _r_(i.reduceRight(function(e, t) {
return _i_("3da:3024"), _r_(t(e));
}, e.apply(void 0, arguments)));
}
});
}();
if ("object" == typeof n) return _r_(n.v);
_r_();
}
_r_();
}, function(e, t, i) {
"use strict";
_i_("3da:2146"), t.__esModule = !0, t.ActionTypes = void 0, t["default"] = l;
var n = i(4), r = _(n), a = i(11), o = _(a);
function _(e) {
return _i_("3da:2516"), _r_(e && e.__esModule ? e :{
"default":e
});
}
var s = t.ActionTypes = {
INIT:"@@redux/INIT"
};
function l(e, t, i) {
_i_("3da:2517");
var n;
if ("function" == typeof t && "undefined" == typeof i && (i = t, t = void 0), "undefined" != typeof i) {
if ("function" != typeof i) throw new Error("Expected the enhancer to be a function.");
return _r_(i(l)(e, t));
}
if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
var a = e, _ = t, d = [], c = d, u = !1;
function h() {
_i_("3da:2747"), c === d && (c = d.slice()), _r_();
}
function f() {
return _i_("3da:2748"), _r_(_);
}
function p(e) {
if (_i_("3da:2749"), "function" != typeof e) throw new Error("Expected listener to be a function.");
var t = !0;
return h(), c.push(e), _r_(function() {
if (_i_("3da:2918"), !t) return _r_();
t = !1, h();
var i = c.indexOf(e);
c.splice(i, 1), _r_();
});
}
function g(e) {
if (_i_("3da:2750"), !(0, r["default"])(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
if ("undefined" == typeof e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
if (u) throw new Error("Reducers may not dispatch actions.");
try {
u = !0, _ = a(_, e);
} finally {
u = !1;
}
for (var t = d = c, i = 0; i < t.length; i++) t[i]();
return _r_(e);
}
function m(e) {
if (_i_("3da:2751"), "function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
a = e, g({
type:s.INIT
}), _r_();
}
function v() {
_i_("3da:2752");
var e, t = p;
return _r_((e = {
subscribe:function(e) {
if (_i_("3da:2992"), "object" != typeof e) throw new TypeError("Expected the observer to be an object.");
function i() {
_i_("3da:3010"), e.next && e.next(f()), _r_();
}
i();
var n = t(i);
return _r_({
unsubscribe:n
});
}
}, e[o["default"]] = function() {
return _i_("3da:2963"), _r_(this);
}, e));
}
return g({
type:s.INIT
}), _r_((n = {
dispatch:g,
subscribe:p,
getState:f,
replaceReducer:m
}, n[o["default"]] = v, n));
}
_r_();
}, function(e, t) {
"use strict";
_i_("3da:2147"), t.__esModule = !0, t["default"] = i;
function i(e) {
_i_("3da:2518"), "undefined" != typeof console && "function" == typeof console.error && console.error(e);
try {
throw new Error(e);
} catch (t) {}
_r_();
}
_r_();
}, function(e, t, i) {
_i_("3da:2148");
var n = i(8), r = i(9), a = i(10), o = "[object Object]", _ = Object.prototype, s = Function.prototype.toString, l = _.hasOwnProperty, d = s.call(Object), c = _.toString;
function u(e) {
if (_i_("3da:2519"), !a(e) || c.call(e) != o || r(e)) return _r_(!1);
var t = n(e);
if (null === t) return _r_(!0);
var i = l.call(t, "constructor") && t.constructor;
return _r_("function" == typeof i && i instanceof i && s.call(i) == d);
}
e.exports = u, _r_();
}, function(e, t, i) {
"use strict";
_i_("3da:2149"), t.__esModule = !0;
var n = Object.assign || function(e) {
_i_("3da:2825");
for (var t = 1; t < arguments.length; t++) {
var i = arguments[t];
for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
}
return _r_(e);
};
t["default"] = _;
var r = i(1), a = o(r);
function o(e) {
return _i_("3da:2520"), _r_(e && e.__esModule ? e :{
"default":e
});
}
function _() {
_i_("3da:2521");
for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
return _r_(function(e) {
return _i_("3da:2826"), _r_(function(i, r, o) {
_i_("3da:2947");
var _ = e(i, r, o), s = _.dispatch, l = [], d = {
getState:_.getState,
dispatch:function(e) {
return _i_("3da:3018"), _r_(s(e));
}
};
return l = t.map(function(e) {
return _i_("3da:3011"), _r_(e(d));
}), s = a["default"].apply(void 0, l)(_.dispatch), _r_(n({}, _, {
dispatch:s
}));
});
});
}
_r_();
}, function(e, t) {
"use strict";
_i_("3da:2150"), t.__esModule = !0, t["default"] = n;
function i(e, t) {
return _i_("3da:2522"), _r_(function() {
return _i_("3da:2827"), _r_(t(e.apply(void 0, arguments)));
});
}
function n(e, t) {
if (_i_("3da:2523"), "function" == typeof e) return _r_(i(e, t));
if ("object" != typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" :typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
for (var n = Object.keys(e), r = {}, a = 0; a < n.length; a++) {
var o = n[a], _ = e[o];
"function" == typeof _ && (r[o] = i(_, t));
}
return _r_(r);
}
_r_();
}, function(e, t, i) {
"use strict";
_i_("3da:2151"), t.__esModule = !0, t["default"] = u;
var n = i(2), r = i(4), a = s(r), o = i(3), _ = s(o);
function s(e) {
return _i_("3da:2524"), _r_(e && e.__esModule ? e :{
"default":e
});
}
function l(e, t) {
_i_("3da:2525");
var i = t && t.type, n = i && '"' + i.toString() + '"' || "an action";
return _r_("Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.');
}
function d(e, t, i) {
_i_("3da:2526");
var r = Object.keys(t), o = i && i.type === n.ActionTypes.INIT ? "initialState argument passed to createStore" :"previous state received by the reducer";
if (0 === r.length) return _r_("Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.");
if (!(0, a["default"])(e)) return _r_("The " + o + ' has unexpected type of "' + {}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + r.join('", "') + '"'));
var _ = Object.keys(e).filter(function(e) {
return _i_("3da:2919"), _r_(!t.hasOwnProperty(e));
});
if (_.length > 0) return _r_("Unexpected " + (_.length > 1 ? "keys" :"key") + " " + ('"' + _.join('", "') + '" found in ' + o + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + r.join('", "') + '". Unexpected keys will be ignored.'));
_r_();
}
function c(e) {
_i_("3da:2527"), Object.keys(e).forEach(function(t) {
_i_("3da:2891");
var i = e[t], r = i(void 0, {
type:n.ActionTypes.INIT
});
if ("undefined" == typeof r) throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
var a = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
if ("undefined" == typeof i(void 0, {
type:a
})) throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + n.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.");
_r_();
}), _r_();
}
function u(e) {
_i_("3da:2528");
for (var t = Object.keys(e), i = {}, n = 0; n < t.length; n++) {
var r = t[n];
"function" == typeof e[r] && (i[r] = e[r]);
}
var a, o = Object.keys(i);
try {
c(i);
} catch (s) {
a = s;
}
return _r_(function() {
_i_("3da:2828");
var e = arguments.length <= 0 || void 0 === arguments[0] ? {} :arguments[0], t = arguments[1];
if (a) throw a;
var n = d(e, i, t);
n && (0, _["default"])(n);
for (var r = !1, s = {}, c = 0; c < o.length; c++) {
var u = o[c], h = i[u], f = e[u], p = h(f, t);
if ("undefined" == typeof p) {
var g = l(u, t);
throw new Error(g);
}
s[u] = p, r = r || p !== f;
}
return _r_(r ? s :e);
});
}
_r_();
}, function(e, t) {
_i_("3da:2152");
var i = Object.getPrototypeOf;
function n(e) {
return _i_("3da:2529"), _r_(i(Object(e)));
}
e.exports = n, _r_();
}, function(e, t) {
_i_("3da:2153");
function i(e) {
_i_("3da:2530");
var t = !1;
if (null != e && "function" != typeof e.toString) try {
t = !!(e + "");
} catch (i) {}
return _r_(t);
}
e.exports = i, _r_();
}, function(e, t) {
_i_("3da:2154");
function i(e) {
return _i_("3da:2531"), _r_(!!e && "object" == typeof e);
}
e.exports = i, _r_();
}, function(e, t, i) {
_i_("3da:2155"), function(t) {
"use strict";
_i_("3da:2830"), e.exports = i(12)(t || window || this), _r_();
}.call(t, function() {
return _i_("3da:2829"), _r_(this);
}()), _r_();
}, function(e, t) {
"use strict";
_i_("3da:2156"), e.exports = function(e) {
_i_("3da:2753");
var t, i = e.Symbol;
return "function" == typeof i ? i.observable ? t = i.observable :(t = "function" == typeof i["for"] ? i["for"]("observable") :i("observable"), i.observable = t) :t = "@@observable", _r_(t);
}, _r_();
} ]));
}), _r_();
}), B.define("redux-thunk", function(e, t, i) {
_i_("3da:142");
function n(e) {
return _i_("3da:443"), _r_(function(t) {
_i_("3da:1087");
var i = t.dispatch, n = t.getState;
return _r_(function(t) {
return _i_("3da:1993"), _r_(function(r) {
if (_i_("3da:2532"), "function" == typeof r) return _r_(r(i, n, e));
return _r_(t(r));
});
});
});
}
var r = n();
r.withExtraArgument = n, i.exports = r, _r_();
}), function(e, t) {
if (_i_("3da:143"), !t) return _r_();
t.easing.jswing = t.easing.swing, t.extend(t.easing, {
def:"easeOutQuad",
swing:function(e, i, n, r, a) {
return _i_("3da:1317"), _r_(t.easing[t.easing.def](e, i, n, r, a));
},
easeInQuad:function(e, t, i, n, r) {
return _i_("3da:1318"), _r_(n * (t /= r) * t + i);
},
easeOutQuad:function(e, t, i, n, r) {
return _i_("3da:1319"), _r_(-n * (t /= r) * (t - 2) + i);
},
easeInOutQuad:function(e, t, i, n, r) {
if (_i_("3da:1320"), (t /= r / 2) < 1) return _r_(n / 2 * t * t + i);
return _r_(-n / 2 * (--t * (t - 2) - 1) + i);
},
easeInCubic:function(e, t, i, n, r) {
return _i_("3da:1321"), _r_(n * (t /= r) * t * t + i);
},
easeOutCubic:function(e, t, i, n, r) {
return _i_("3da:1322"), _r_(n * ((t = t / r - 1) * t * t + 1) + i);
},
easeInOutCubic:function(e, t, i, n, r) {
if (_i_("3da:1323"), (t /= r / 2) < 1) return _r_(n / 2 * t * t * t + i);
return _r_(n / 2 * ((t -= 2) * t * t + 2) + i);
},
easeInQuart:function(e, t, i, n, r) {
return _i_("3da:1324"), _r_(n * (t /= r) * t * t * t + i);
},
easeOutQuart:function(e, t, i, n, r) {
return _i_("3da:1325"), _r_(-n * ((t = t / r - 1) * t * t * t - 1) + i);
},
easeInOutQuart:function(e, t, i, n, r) {
if (_i_("3da:1326"), (t /= r / 2) < 1) return _r_(n / 2 * t * t * t * t + i);
return _r_(-n / 2 * ((t -= 2) * t * t * t - 2) + i);
},
easeInQuint:function(e, t, i, n, r) {
return _i_("3da:1327"), _r_(n * (t /= r) * t * t * t * t + i);
},
easeOutQuint:function(e, t, i, n, r) {
return _i_("3da:1328"), _r_(n * ((t = t / r - 1) * t * t * t * t + 1) + i);
},
easeInOutQuint:function(e, t, i, n, r) {
if (_i_("3da:1329"), (t /= r / 2) < 1) return _r_(n / 2 * t * t * t * t * t + i);
return _r_(n / 2 * ((t -= 2) * t * t * t * t + 2) + i);
},
easeInSine:function(e, t, i, n, r) {
return _i_("3da:1330"), _r_(-n * Math.cos(t / r * (Math.PI / 2)) + n + i);
},
easeOutSine:function(e, t, i, n, r) {
return _i_("3da:1331"), _r_(n * Math.sin(t / r * (Math.PI / 2)) + i);
},
easeInOutSine:function(e, t, i, n, r) {
return _i_("3da:1332"), _r_(-n / 2 * (Math.cos(Math.PI * t / r) - 1) + i);
},
easeInExpo:function(e, t, i, n, r) {
return _i_("3da:1333"), _r_(0 == t ? i :n * Math.pow(2, 10 * (t / r - 1)) + i);
},
easeOutExpo:function(e, t, i, n, r) {
return _i_("3da:1334"), _r_(t == r ? i + n :n * (-Math.pow(2, -10 * t / r) + 1) + i);
},
easeInOutExpo:function(e, t, i, n, r) {
if (_i_("3da:1335"), 0 == t) return _r_(i);
if (t == r) return _r_(i + n);
if ((t /= r / 2) < 1) return _r_(n / 2 * Math.pow(2, 10 * (t - 1)) + i);
return _r_(n / 2 * (-Math.pow(2, -10 * --t) + 2) + i);
},
easeInCirc:function(e, t, i, n, r) {
return _i_("3da:1336"), _r_(-n * (Math.sqrt(1 - (t /= r) * t) - 1) + i);
},
easeOutCirc:function(e, t, i, n, r) {
return _i_("3da:1337"), _r_(n * Math.sqrt(1 - (t = t / r - 1) * t) + i);
},
easeInOutCirc:function(e, t, i, n, r) {
if (_i_("3da:1338"), (t /= r / 2) < 1) return _r_(-n / 2 * (Math.sqrt(1 - t * t) - 1) + i);
return _r_(n / 2 * (Math.sqrt(1 - (t -= 2) * t) + 1) + i);
},
easeInElastic:function(e, t, i, n, r) {
_i_("3da:1339");
var a = 1.70158, o = 0, _ = n;
if (0 == t) return _r_(i);
if (1 == (t /= r)) return _r_(i + n);
if (o || (o = .3 * r), _ < Math.abs(n)) {
_ = n;
var a = o / 4;
} else var a = o / (2 * Math.PI) * Math.asin(n / _);
return _r_(-(_ * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o)) + i);
},
easeOutElastic:function(e, t, i, n, r) {
_i_("3da:1340");
var a = 1.70158, o = 0, _ = n;
if (0 == t) return _r_(i);
if (1 == (t /= r)) return _r_(i + n);
if (o || (o = .3 * r), _ < Math.abs(n)) {
_ = n;
var a = o / 4;
} else var a = o / (2 * Math.PI) * Math.asin(n / _);
return _r_(_ * Math.pow(2, -10 * t) * Math.sin((t * r - a) * (2 * Math.PI) / o) + n + i);
},
easeInOutElastic:function(e, t, i, n, r) {
_i_("3da:1341");
var a = 1.70158, o = 0, _ = n;
if (0 == t) return _r_(i);
if (2 == (t /= r / 2)) return _r_(i + n);
if (o || (o = r * (.3 * 1.5)), _ < Math.abs(n)) {
_ = n;
var a = o / 4;
} else var a = o / (2 * Math.PI) * Math.asin(n / _);
if (1 > t) return _r_(-.5 * (_ * Math.pow(2, 10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o)) + i);
return _r_(_ * Math.pow(2, -10 * (t -= 1)) * Math.sin((t * r - a) * (2 * Math.PI) / o) * .5 + n + i);
},
easeInBack:function(e, t, i, n, r, a) {
return _i_("3da:1342"), void 0 == a && (a = 1.70158), _r_(n * (t /= r) * t * ((a + 1) * t - a) + i);
},
easeOutBack:function(e, t, i, n, r, a) {
return _i_("3da:1343"), void 0 == a && (a = 1.70158), _r_(n * ((t = t / r - 1) * t * ((a + 1) * t + a) + 1) + i);
},
easeInOutBack:function(e, t, i, n, r, a) {
if (_i_("3da:1344"), void 0 == a && (a = 1.70158), (t /= r / 2) < 1) return _r_(n / 2 * (t * t * (((a *= 1.525) + 1) * t - a)) + i);
return _r_(n / 2 * ((t -= 2) * t * (((a *= 1.525) + 1) * t + a) + 2) + i);
},
easeInBounce:function(e, i, n, r, a) {
return _i_("3da:1345"), _r_(r - t.easing.easeOutBounce(e, a - i, 0, r, a) + n);
},
easeOutBounce:function(e, t, i, n, r) {
return _i_("3da:1346"), _r_((t /= r) < 1 / 2.75 ? n * (7.5625 * t * t) + i :2 / 2.75 > t ? n * (7.5625 * (t -= 1.5 / 2.75) * t + .75) + i :2.5 / 2.75 > t ? n * (7.5625 * (t -= 2.25 / 2.75) * t + .9375) + i :n * (7.5625 * (t -= 2.625 / 2.75) * t + .984375) + i);
},
easeInOutBounce:function(e, i, n, r, a) {
if (_i_("3da:1347"), a / 2 > i) return _r_(.5 * t.easing.easeInBounce(e, 2 * i, 0, r, a) + n);
return _r_(.5 * t.easing.easeOutBounce(e, 2 * i - a, 0, r, a) + .5 * r + n);
}
}), _r_();
}(window.booking, window.jQuery), /* @preserve
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 *
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
function(e, t, i) {
_i_("3da:144");
var n, r = "hashchange", a = document, o = e.event.special, _ = a.documentMode, s = "on" + r in t && (_ === i || _ > 7);
function l(e) {
return _i_("3da:444"), e = e || location.href, _r_("#" + e.replace(/^[^#]*#?(.*)$/, "$1"));
}
e.fn[r] = function(e) {
return _i_("3da:892"), _r_(e ? this.bind(r, e) :this.trigger(r));
}, e.fn[r].delay = 50, o[r] = e.extend(o[r], {
setup:function() {
if (_i_("3da:1760"), s) return _r_(!1);
e(n.start), _r_();
},
teardown:function() {
if (_i_("3da:1761"), s) return _r_(!1);
e(n.stop), _r_();
}
}), n = function() {
_i_("3da:1088");
var n, o = {}, _ = l(), d = function(e) {
return _i_("3da:2157"), _r_(e);
}, c = d, u = d;
o.start = function() {
_i_("3da:2158"), n || h(), _r_();
}, o.stop = function() {
_i_("3da:2159"), n && clearTimeout(n), n = i, _r_();
};
function h() {
_i_("3da:1762");
var i = l(), a = u(_);
i !== _ ? (c(_ = i, a), e(t).trigger(r)) :a !== _ && (location.href = location.href.replace(/#.*/, "") + a), n = setTimeout(h, e.fn[r].delay), _r_();
}
return "msie" === B.env.b_browser && !s && function() {
_i_("3da:2350");
var t, i;
o.start = function() {
_i_("3da:2831"), t || (i = e.fn[r].src, i = i && i + l(), t = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
_i_("3da:3025"), i || c(l()), h(), _r_();
}).attr("src", i || "javascript:0").insertAfter("body")[0].contentWindow, a.onpropertychange = function() {
_i_("3da:2993");
try {
"title" === event.propertyName && (t.document.title = a.title);
} catch (e) {}
_r_();
}), _r_();
}, o.stop = d, u = function() {
return _i_("3da:2832"), _r_(l(t.location.href));
}, c = function(i, n) {
_i_("3da:2833");
var o = t.document, _ = e.fn[r].domain;
i !== n && (o.title = a.title, o.open(), _ && o.write('<script>document.domain="' + _ + '"</script>'), o.close(), t.location.hash = i), _r_();
}, _r_();
}(), _r_(o);
}(), _r_();
}(jQuery, window), function(e) {
_i_("3da:145"), e.fn.hint = function(t) {
return _i_("3da:893"), t || (t = "blur"), _r_(this.each(function() {
_i_("3da:1994");
var i = e(this), n = i.attr("title"), r = e(this.form), a = e(window);
function o() {
_i_("3da:2351"), i.val() === n && i.hasClass(t) && i.val("").removeClass(t), _r_();
}
n && (i.blur(function() {
_i_("3da:2964"), "" === this.value && i.val(n).addClass(t), _r_();
}).focus(o).blur(), r.submit(o), a.unload(o)), _r_();
}));
}, _r_();
}(jQuery), booking.env.no_search_placeholder_ie || $("input#keyword.faq_search_input").hint(), function() {
_i_("3da:146");
var e = B.require("jquery"), t = B.env.b_is_tdot_traffic ? "click touchstart" :"click", i = 0;
e.extend({
noticeAdd:function(n) {
_i_("3da:1348");
var r = !1;
if (booking.events.on("growl:growlClosedManually", function(t) {
if (_i_("3da:2352"), t && t.type.indexOf("abandoned-cart-growl-notification")) {
if (t.growlElem.attr("data-cart-id") && B.et.track("HBVXGZGZVeDJdUDZHe")) return _r_();
e.cookie("fscag01", null, {
path:"/",
domain:booking.env.b_domain_end
});
}
_r_();
}), "abandoned_cart_growl_notification" == n.textLabel) {
if (e.cookie("fscag01")) ; else if ((!e.canShowNotice() || e.isNoticesDisabled()) && !r) return _r_(!1);
} else if ("abandoned_rooms_table" == n.textLabel) {
if (e.isNoticesDisabled() && !r) return _r_(!1);
} else if ((!e.canShowNotice() || e.isNoticesDisabled()) && !r) return _r_(!1);
i++;
var n, a, o, _, s, l, d = {
inEffect:{
opacity:"show"
},
inEffectDuration:600,
stayTime:3e3,
text:"",
stay:!1,
type:"notice",
destination:"",
platform:"mac",
addClassName:"",
injectHTML:!1,
zindex:!1,
isAutomatic:!1,
textLabel:null,
wrapperClass:"",
fullyClickable:!1,
closeOnCross:!1
}, c = !1;
n = e.extend({}, d, n);
var u = " ", h = " ", f = "notice-wrap " + h + n.platform;
B.env.b_is_tablet && "book" === B.env.b_action && (f += " growl_font_stack"), B.env.rtl && (f += " growl_rtl"), e(".notice-wrap").length ? a = e(".notice-wrap") :(a = e("<div></div>").addClass(f).addClass(n.wrapperClass).appendTo("body"), a[0].id = "growl_squash"), n.zindex === !1 || isNaN(n.zindex) || a.css("z-index", n.zindex);
var p, g;
B.env.rtl && p && g && (c = "__placement_" + g), c && a.addClass(c), o = e("<div></div>").addClass("notice-item-wrapper"), l = "" == n.destination || n.fullyClickable ? "<p>" + n.text + "</p>" :'<p><a  href="' + n.destination + '">' + n.text + "</a></p>", _ = e("" !== n.destination && n.fullyClickable ? '<a  class="notice-item-clickable" href="' + n.destination + '"></a>' :"<div></div>"), n.cartId && B.et.track("HBVXGZGZVeDJdUDZHe") && _.attr("data-cart-id", n.cartId), _.hide().addClass("notice-item " + u + n.type + " " + n.addClassName).appendTo(a).html(l).animate(n.inEffect, n.inEffectDuration).wrap(o);
var m = _;
if (s = e("<div></div>").addClass("notice-item-close-x").prependTo(_), n.closeOnCross && (m = s), m.bind(t, function(t) {
if (_i_("3da:2353"), "hotel" === booking.env.b_action) {
var i = JSON.parse(e.cookie("bs")) || {};
i.gc = 1, "undefined" != typeof JSON && e.cookie("bs", JSON.stringify(i), {
path:"/",
domain:booking.env.b_domain_end
});
}
if (booking.google.trackEvent(booking.google.clickTracker, "growl_removed", t && t.target && e(t.target).closest(".notice-item-close-x").length ? "x" :"message"), e.noticeRemove(_, n.addClassName, !1, !0), "" !== n.destination && n.fullyClickable && e(t.target).is(".notice-item-close-x")) return _r_(!1);
return _r_(!!n.destination);
}), n.injectHTML && _.prepend(n.injectHTML), "language" == n.type && (e(".notice-item p").css("cursor", "pointer"), e(".notice-item p").bind(t, function() {
return _i_("3da:2657"), e("#langselectformlist").val(booking.env.browser_lang), e("#languageselect")[0].submit(), e.noticeRemove(_), _r_(!1);
})), !n.stay) {
var v = n.stayTime;
setTimeout(function() {
_i_("3da:2658"), e.noticeRemove(_, "", 1), _r_();
}, v);
}
return booking.eventEmitter.triggerHandler("growl:show", n), booking.events.trigger("growl:show", n), _r_(_);
},
noticeRemove:function(t, i, n, r, a) {
_i_("3da:1349");
var o = t.attr("data-cart-id") && B.et.track("HBVXGZGZVeDJdUDZHe");
r && !o && e.setCookieOnClose(), r && B.env.b_growls_close_fast || "tdot" === B.env.b_site_type && "book" === B.env.b_action && 2 === B.env.b_stage || a ? t.parent().remove() :t.animate({
opacity:"0"
}, 600, function() {
_i_("3da:2659"), t.parent().animate({
height:"0px"
}, 300, function() {
_i_("3da:2920"), t.parent().remove(), _r_();
}), _r_();
}), i && "" != i && e("." + i).removeClass(i), booking.eventEmitter.triggerHandler("growl:close", {
growlElem:t,
type:t.attr("class"),
isGrowlClickedManually:r
}), r && booking.events.emit("growl:growlClosedManually", {
growlElem:t,
type:t.attr("class"),
isGrowlClickedManually:r
}), _r_();
},
canShowNotice:function() {
_i_("3da:1350");
var t = !0;
if (B.env.fe_disable_growls) return _r_(!1);
var i = parseInt(e.cookie("gcmdt")) || !1;
if (i !== !1) {
var n = (new Date().getTime() - i) / 1e3 / 60;
20 >= n && (t = !1);
}
return _r_(t);
},
isNoticesDisabled:function() {
return _i_("3da:1351"), _r_(!!(B && B.env && B.env.disableNotices));
},
setCookieOnClose:function() {
return _i_("3da:1352"), booking.env.b_paid_traffic || e.cookie("gcmdt", new Date().getTime(), {
expires:30,
path:"/",
domain:booking.env.b_domain_end
}), _r_();
}
}), _r_();
}(), B.define("growl", function(e, t, i) {
"use strict";
_i_("3da:147");
function n(e) {
if (_i_("3da:445"), e && booking.env.growl_triggers && booking.env.growl_triggers[e]) return _r_($.noticeAdd(booking.env.growl_triggers[e]));
_r_();
}
i.exports = {
show:$.noticeAdd,
trigger:n
}, _r_();
}), function(e) {
_i_("3da:148"), e.fn.placeholder = function(t) {
_i_("3da:894");
var i = e.extend({
attr:"placeholder",
emptyClass:"empty"
}, t);
if ("placeholder" === i.attr && "placeholder" in document.createElement("input")) return _r_(this);
return _r_(this.each(function() {
_i_("3da:1995");
var t, n = e(this), r = n.attr(i.attr), a = "password" === n.attr("type"), o = "placeholder-polyfill";
if (!r || n.hasClass(o)) return _r_();
n.addClass(o), a && (t = e('<input type="text" />').attr({
value:r,
className:n[0].className
}).insertAfter(n.hide())), n.closest("form").submit(function() {
_i_("3da:2660"), n.trigger("focus"), _r_();
}), "" === n.val() && n.val(r).addClass(i.emptyClass), n.focus(function() {
_i_("3da:2661"), n.val() == r && n.val("").removeClass(i.emptyClass), _r_();
}), n.blur(function() {
if (_i_("3da:2662"), "" !== e.trim(this.value)) return _r_();
a ? n.after(t).hide() :n.val(r).addClass(i.emptyClass), _r_();
}), a && t.addClass(i.emptyClass).focus(function() {
_i_("3da:2834"), t.detach(), n.show().focus(), _r_();
}), _r_();
}));
}, _r_();
}(jQuery), function(e) {
"use strict";
_i_("3da:149"), e([ "jquery" ], function(e) {
_i_("3da:895");
var t = e.scrollTo = function(t, i, n) {
return _i_("3da:2160"), _r_(e(window).scrollTo(t, i, n));
};
t.defaults = {
axis:"xy",
duration:0,
limit:!0
}, t.window = function(t) {
return _i_("3da:1996"), _r_(e(window)._scrollable());
}, e.fn._scrollable = function() {
return _i_("3da:1997"), _r_(this.map(function() {
_i_("3da:2663");
var t = this, i = !t.nodeName || -1 != e.inArray(t.nodeName.toLowerCase(), [ "iframe", "#document", "html", "body" ]);
if (!i) return _r_(t);
var n = (t.contentWindow || t).document || t.ownerDocument || t;
return _r_(/webkit/i.test(navigator.userAgent) || "BackCompat" == n.compatMode ? n.body :n.documentElement);
}));
}, e.fn.scrollTo = function(n, r, a) {
return _i_("3da:1998"), "object" == typeof r && (a = r, r = 0), "function" == typeof a && (a = {
onAfter:a
}), "max" == n && (n = 9e9), a = e.extend({}, t.defaults, a), r = r || a.duration, a.queue = a.queue && a.axis.length > 1, a.queue && (r /= 2), a.offset = i(a.offset), a.over = i(a.over), _r_(this._scrollable().each(function() {
if (_i_("3da:2835"), null == n) return _r_();
var o, _ = this, s = e(_), l = n, d = {}, c = s.is("html,body");
switch (typeof l) {
case "number":
case "string":
if (/^([+-]=?)?\d+(\.\d+)?(px|%)?$/.test(l)) {
l = i(l);
break;
}
if (l = c ? e(l) :e(l, this), !l.length) return _r_();

case "object":
(l.is || l.style) && (o = (l = e(l)).offset());
}
var u = e.isFunction(a.offset) && a.offset(_, l) || a.offset;
e.each(a.axis.split(""), function(e, i) {
_i_("3da:2965");
var n = "x" == i ? "Left" :"Top", r = n.toLowerCase(), f = "scroll" + n, p = _[f], g = t.max(_, i);
if (o) d[f] = o[r] + (c ? 0 :p - s.offset()[r]), a.margin && (d[f] -= parseInt(l.css("margin" + n)) || 0, d[f] -= parseInt(l.css("border" + n + "Width")) || 0), d[f] += u[r] || 0, a.over[r] && (d[f] += l["x" == i ? "width" :"height"]() * a.over[r]); else {
var m = l[r];
d[f] = m.slice && "%" == m.slice(-1) ? parseFloat(m) / 100 * g :m;
}
a.limit && /^\d+$/.test(d[f]) && (d[f] = d[f] <= 0 ? 0 :Math.min(d[f], g)), !e && a.queue && (p != d[f] && h(a.onAfterFirst), delete d[f]), _r_();
}), h(a.onAfter);
function h(e) {
_i_("3da:2921"), s.animate(d, r, a.easing, e && function() {
_i_("3da:3005"), e.call(this, l, a), _r_();
}), _r_();
}
_r_();
}).end());
}, t.max = function(t, i) {
_i_("3da:1999");
var n = "x" == i ? "Width" :"Height", r = "scroll" + n;
if (!e(t).is("html,body")) return _r_(t[r] - e(t)[n.toLowerCase()]());
var a = "client" + n, o = t.ownerDocument.documentElement, _ = t.ownerDocument.body;
return _r_(Math.max(o[r], _[r]) - Math.min(o[a], _[a]));
};
function i(t) {
return _i_("3da:1353"), _r_(e.isFunction(t) || e.isPlainObject(t) ? t :{
top:t,
left:t
});
}
return _r_(t);
}), _r_();
}("function" == typeof define && define.amd ? define :function(e, t) {
_i_("3da:294"), "undefined" != typeof module && module.exports ? module.exports = t(require("jquery")) :t(jQuery), _r_();
}), booking[sNSStartup].aff_new_header_menu = {
priority:9,
opening_state:0,
cur_open:"",
max_select_height:240,
is_ie:0,
openSlow:!1,
init:function() {
_i_("3da:446");
var e = this, t = $(".aff_languages_popover"), i = $(".aff_currency_popover");
$(".b_msie_6").length && (this.is_ie = 6), $(".b_msie_7").length && (this.is_ie = 7), $(".aff_select_box").mouseenter(function() {
_i_("3da:1354"), $(this).addClass("sel_hover"), _r_();
}), $(".aff_select_box").mouseleave(function() {
_i_("3da:1355"), $(this).removeClass("sel_hover"), _r_();
}), $("body").click(function(t) {
if (_i_("3da:1356"), 2 == e.opening_state) {
var i = $(t.target);
$(i).length && e.closeSelect();
}
_r_();
}), t.css({
width:e.getPopoverWidth($(".aff_language_flags")) + "px"
}), i.css({
width:e.getPopoverWidth($("#currency_dropdown_all .currency_list")) + "px"
}), $(".aff_select_box").click(function(t) {
_i_("3da:1357"), 0 == e.opening_state ? e.openSelect($(this).attr("data-target"), $(this).attr("data-parentclass")) :e.cur_open != $(this).attr("data-target") ? e.closeSelect($(this).attr("data-target"), $(this).attr("data-parentclass")) :e.closeSelect(), _r_();
}), _r_();
},
openSelect:function(e, t) {
_i_("3da:447"), oThat = this, this.cur_open = e;
var i = $("." + t), n = 0, r = 0, a = 0, o = 0, _ = 0, s = 0, l = 0, d = 0, c = 0, u = 0, h = 0, f = 0, p = 0, g = 0, m = 0, v = 0, b = 0, y = 0, w = i.parent(), k = $("." + e), C = oThat.getScreenSize()[0], S = (oThat.getScreenSize()[1], parseInt(w.width() / 2, 10)), x = $("#partner_branding3"), B = $(".hybrid-header #aff_personal_form"), E = $($(".uc_top_arrow", k)), M = parseInt(k.outerWidth(!0) / 2, 10), T = M - S, N = M - 8, A = oThat.getLeftPos(B)[0], D = oThat.getLeftPos(B)[1], I = oThat.getRightPos(B)[0], j = oThat.getRightPos(B)[1], o = parseInt(B.css("marginLeft"), 10), _ = parseInt(B.css("marginRight"), 10), O = parseInt(w.offset().left, 10) - parseInt(x.offset().left, 10), L = parseInt(x.width(), 10), P = L - (M + S + O), H = O + S - M, R = $(".language_select_button"), F = $(".currency_select_button"), q = $(".affiliate_mybooking"), G = parseInt(F.outerWidth(), 10), V = parseInt(G / 2, 10), U = parseInt(R.outerWidth(), 10), W = parseInt(U / 2, 10), z = parseInt(q.outerWidth(), 10), Y = parseInt(F.css("marginLeft"), 10), J = parseInt(F.css("marginRight"), 10), K = parseInt(R.css("marginLeft"), 10), Q = parseInt(R.css("marginRight"), 10), X = parseInt(F.css("paddingLeft"), 10), Z = parseInt(F.css("paddingRight"), 10), ee = parseInt(R.css("paddingLeft"), 10), te = parseInt(R.css("paddingRight"), 10), ie = parseInt(q.css("marginLeft"), 10), ne = parseInt(q.css("marginRight"), 10), re = parseInt(q.css("paddingLeft"), 10), ae = parseInt(q.css("paddingRight"), 10), oe = oThat.getHeight($(".aff_select_box"));
$(".aff_select_wrap").hasClass("currency_select_button") && ((Y > 0 || J > 0) && (l = Y + J), (X > 0 || Z > 0) && (c = X + Z, u = X / 2 + Z / 2), btnClear = oThat.getClearCSS(F), r = G + l), $(".aff_select_wrap").hasClass("language_select_button") && ((K > 0 || Q > 0) && (s = K + Q), (ee > 0 || te > 0) && (h = ee + te, f = ee / 2 + te / 2), btnClear = oThat.getClearCSS(R), a = U + s), $(".aff_select_wrap").hasClass("affiliate_mybooking") && ((ie > 0 || ne > 0) && (d = ie + ne), (re > 0 || ae > 0) && (p = re + ae), btnClear = oThat.getClearCSS(q), n = z + d);
var _e = oThat.getDistanceBetweenCenterElements(x, B);
(1625 >= C && _e >= -285 || C > 1626 && _e >= -410 || 0 > _e && _e >= -150) && (b = 1), (1625 >= C && 285 >= _e || C > 1626 && 410 >= _e || _e > 0 && 150 >= _e) && (y = 1), oThat.isrtlLang() ? A && 0 == b ? (k.hasClass("aff_currency_popover") ? (g = n + a + l + c, v = D + o + n + a + u + V - 6) :k.hasClass("aff_languages_popover") && (g = n + s + h, v = D + o + n + f + W - 6), g >= 0 && (m = g + D + o), k.css({
left:(m > 0 ? "-" :"") + m + "px",
right:"auto",
top:oe + "px"
}), E.css({
left:v
})) :I && 0 == y ? (k.hasClass("aff_currency_popover") ? (g = j, v = k.width() - j - _ + u - V - 6) :k.hasClass("aff_languages_popover") && (g = j + r, v = k.width() - j - _ + f - r - W - 6), g >= 0 && (m = g + _), k.css({
left:"auto",
right:(m > 0 ? "-" :"") + m + "px",
top:oe + "px"
}), E.css({
left:v
})) :(b || y) && (0 > P && H > 0 ? (T -= P, N -= P) :P > 0 && 0 > H && (T += H, N += H), k.css({
left:-Math.round(T),
top:oe + "px"
}), $(".aff_user_popover .uc_top_arrow", w).css("left", N)) :A && 0 == b ? (k.hasClass("aff_currency_popover") ? (g = D, v = D + o + V - u - 6) :k.hasClass("aff_languages_popover") && (g = D + l + G, v = D + o + r + W - f - 6), g >= 0 && (m = g + o), k.css({
left:(m > 0 ? "-" :"") + m + "px",
right:"auto",
top:oe + "px"
}), E.css({
left:v
})) :I && 0 == y ? (k.hasClass("aff_currency_popover") ? (g = j + (btnClear ? 0 :n) + (btnClear ? 0 :a) + l + c, v = k.width() - j - _ - (btnClear ? 0 :n) - (btnClear ? 0 :a) - l - u - V - 6) :k.hasClass("aff_languages_popover") && (g = j + (btnClear ? 0 :n) + s + h, v = k.width() - j - _ - (btnClear ? 0 :n) - s - f - W - 9), g >= 0 && (m = g + _), k.css({
left:"auto",
right:(m > 0 ? "-" :"") + m + "px",
top:oe + "px"
}), E.css({
left:v
})) :(b || y) && (0 > P && H > 0 ? (T -= P, N -= P) :P > 0 && 0 > H && (T += H, N += H), k.css({
left:-Math.round(T),
top:oe + "px"
}), $(".aff_user_popover .uc_top_arrow", w).css("left", N)), $("." + t).addClass("sel_open"), this.opening_state = 1, k.css({
display:"block",
opacity:"1"
}), this.openSlow ? (this.openSlow = !1, k.animate({
height:iNewHeight + "px"
}, 800)) :k.css({
height:"auto"
}), setTimeout(function() {
_i_("3da:1358"), oThat.opening_state = 2, _r_();
}, 200), _r_();
},
getScreenSize:function() {
_i_("3da:448");
var e = parseInt($("#partner_branding3").width(), 10);
return screenHW = e / 2, restCal = screenHW - 150, 1625 >= e ? restCal = screenHW - 285 :e > 1626 && (restCal = screenHW - 410), _r_([ e, restCal ]);
},
getHeight:function(e) {
_i_("3da:449");
var t = parseInt(e.height(), 10);
return _r_(t);
},
getClearCSS:function(e) {
if (_i_("3da:450"), "both" == $(e).css("clear")) return _r_(!0);
return _r_(!1);
},
getLeftPos:function(e) {
_i_("3da:451");
var t = parseInt(e.css("left"), 10);
if (t >= 0 && 405 > t) return _r_([ !0, t ]);
return _r_([ !1, t ]);
},
getRightPos:function(e) {
_i_("3da:452");
var t = parseInt(e.css("right"), 10);
if (t >= 0 && 405 > t) return _r_([ !0, t ]);
return _r_([ !1, t ]);
},
isrtlLang:function() {
if (_i_("3da:453"), $("body").hasClass("lang_is_rtl")) return _r_(!0);
return _r_(!1);
},
getPopoverWidth:function(e) {
_i_("3da:454");
var t = e.length;
switch (t) {
case 4:
columns = 802;
break;

case 3:
columns = 602;
break;

case 2:
columns = 402;
break;

default:
columns = 202;
}
return _r_(columns);
},
getDistanceBetweenCenterElements:function(e, t) {
_i_("3da:455");
var i = e.width(), n = t.width(), r = e.offset().left, a = t.offset().left, o = parseInt(r) + parseInt(i) / 2, _ = parseInt(a) + parseInt(n) / 2;
return _r_(_ - o);
},
closeSelect:function(e, t) {
_i_("3da:456");
var i = this;
2 == this.opening_state && ($(".aff_user_popover").animate({
height:"0px"
}, 200, function() {
_i_("3da:2000"), $(".aff_user_popover").css({
display:"none"
}), $(".aff_select_box").removeClass("sel_open"), e && null != e && i.openSelect(e, t), _r_();
}), this.opening_state = 0), _r_();
}
}, booking[sNSStartup].anchorJump = {
priority:9,
init:function() {
_i_("3da:457"), $("#newsletterbox .error").length && (window.location.href = window.location.href + "#errormsg"), $(".forgotten a, a.forgotten").click(function() {
return _i_("3da:1359"), window.open(this.href, "", "toolbar=0,location=0,directories=0,status=0,menubar=0,scrollbars=yes,resizable=1,width=500,height=500,left=200,top=200"), _r_(!1);
}), _r_();
}
}, B.authLightbox = {
init:function() {
_i_("3da:458");
var e = this;
if (e.ready) return _r_();
B.eventEmitter.bind("user_access_menu_login_tab user_access_menu_register_tab", function(t, i) {
_i_("3da:1360"), i = i || {};
var n = "user_access_menu_login_tab" === t.type;
if (e.form(i.mode).toggleClass("user-access-menu-lightbox--signin", n).toggleClass("user-access-menu-lightbox--signup", !n), !booking.env.b_is_tdot_traffic) if (B.env.b_run_prefill_login_email) e.form(i.mode).find(".user_access_password, .user_signup_password").select(); else {
var r = ".user_access_email";
"www" === B.env.b_site_type && (r += ":visible"), e.form(i.mode).find(r).select().focus();
}
_r_();
}), e.ready = !0, _r_();
},
show:function(e) {
_i_("3da:459");
var t = this.form(e.mode);
if (!t.length) return _r_();
this.rewrite(e);
var i = "user-access-menu-lightbox";
e.extraClass && (i += " " + e.extraClass), $("#ng-overlay").hide(), $(".milk_menu").hide(), $(".b_recentlyviewed").length && $(".b_recentlyviewed").removeClass("rv-content-visible"), $(".user_center_popover").hide(), B.lightbox.hide(), $(".js-user-access-menu-lightbox--embedded").hide(), B.lightbox.show(t, {
bAnimation:!booking.env.b_is_tdot_traffic,
customWrapperClassName:i,
hideCallBack:function() {
_i_("3da:2001"), t.find(".form-loading").hide(), $(".js-user-access-menu-lightbox--embedded").show(), B.eventEmitter.trigger("auth-dialog:hide", e), _r_();
}
}), this.initManageBooking(t, e), t.find("[data-target=user_access_" + e.tab + "_menu]").trigger("click", e), "manage_booking" === e.tab && this.showBNPForm(t), B.eventEmitter.trigger("auth-dialog:show", e);
var n = B.require("events");
n.trigger("auth-dialog-second:show", e), "zh-cn" === B.env.b_selected_language && "www" === B.env.b_site_type && "signup" === e.tab && B.et.stage("MKMBNLOLOLOOLBZTNSVbXQSIYSPae", 1), _r_();
},
hide:function() {
_i_("3da:460"), B.lightbox.hide(), _r_();
},
form:function(e) {
return _i_("3da:461"), e = e ? "--" + e :"", _r_($(".js-user-access-menu-lightbox" + e));
},
rewrite:function(e) {
_i_("3da:462");
var t = this, i = t.form(e.mode);
$.each(t.rewrites, function(n, r) {
_i_("3da:1361");
var a = t.defaults[n];
a || (t.defaults[n] = a = r.call(t, i)), r.call(t, i, n in e ? e[n] :a), _r_();
}), _r_();
},
defaults:{},
rewrites:{
titleSignin:function(e, t) {
_i_("3da:896");
var i = e.find(".js-user-access-menu-lightbox__title--signin");
return _r_(void 0 !== t ? i.text(t) :i.text());
},
titleSignup:function(e, t) {
_i_("3da:897");
var i = e.find(".js-user-access-menu-lightbox__title--signup");
return _r_(void 0 !== t ? i.text(t) :i.text());
},
targetSignin:function(e, t) {
_i_("3da:898");
var i = e.find(".user_access_signin_menu input[name=target_url]");
return _r_(void 0 !== t ? i.val(t) :i.val());
},
targetSignup:function(e, t) {
_i_("3da:899");
var i = e.find(".user_access_signup_menu input[name=target_url]");
return _r_(void 0 !== t ? i.val(t) :i.val());
},
_fbFinalUrl:function(e, t) {
if (_i_("3da:900"), t) {
var i = e.attr("href");
if (i) {
var n = "final_url=" + encodeURIComponent(t);
i.indexOf("final_url=") > 0 ? i = i.replace(/final_url=[^&;]*/, n) :(i.charAt(i.length - 1) !== B.env.b_query_params_delimiter && (i += B.env.b_query_params_delimiter), i += n), e.attr("href", i);
}
}
_r_();
},
fbFinalUrlSignin:function(e, t) {
_i_("3da:901");
var i = e.find(".user_access_signin_menu .social-connect-button--facebook");
return _r_(this.rewrites._fbFinalUrl(i, t));
},
fbFinalUrlSignup:function(e, t) {
_i_("3da:902");
var i = e.find(".user_access_signup_menu .social-connect-button--facebook");
return _r_(this.rewrites._fbFinalUrl(i, t));
}
},
showBNPForm:function(e) {
_i_("3da:463"), e.find(".form-section").addClass("form-hidden-section"), e.find(".user_access_resend_confirmation").removeClass("form-hidden-section"), e.find(".user_access_manage_booking_menu").removeClass("form-hidden-section"), e.find(".resend-conf").addClass("resend-conf--absolute"), _r_();
},
initManageBooking:function(e, t) {
_i_("3da:464");
var i = e.find(".user_access_menu"), n = this;
i.unbind(".init-manage-booking"), i.delegate(".js-booking-nr-pin-link", "click.init-manage-booking", function() {
_i_("3da:1362"), n.showBNPForm(e), _r_();
}), i.delegate(".js-resend-conf__signin-link", "click.init-manage-booking", function() {
_i_("3da:1363");
var i = "manage_booking" == t.tab ? "signin" :t.tab;
e.find("[data-target=user_access_" + i + "_menu]").trigger("click", t), _r_();
}), _r_();
}
}, B.when({
condition:$(".js-user-access-menu-lightbox--embedded").length
}).run(function() {
_i_("3da:150");
var e = $(".js-user-access-menu-lightbox--embedded"), t = B.authLightbox;
t.init(), t.initManageBooking(e, {
tab:"signin"
}), _r_();
}), B.when({
condition:B.env.b_dev_server && 1 === B.env.show_login_lightbox,
events:"ready"
}).run(function() {
_i_("3da:151"), B.command("show-auth-lightbox").run(), _r_();
}), B.define("events", function(e, t, i) {
_i_("3da:152");
var n = e("event-emitter"), r = new n();
return r.Emitter = n, _r_(r);
}), B.define("redux", function(e, t, i) {
_i_("3da:153"), function(e, n) {
_i_("3da:904"), "object" == typeof t && "object" == typeof i ? i.exports = n() :"function" == typeof define && define.amd ? define([], n) :"object" == typeof t ? t.Redux = n() :e.Redux = n(), _r_();
}(this, function() {
return _i_("3da:903"), _r_(function(e) {
_i_("3da:2002");
var t = {};
function i(n) {
if (_i_("3da:2354"), t[n]) return _r_(t[n].exports);
var r = t[n] = {
exports:{},
id:n,
loaded:!1
};
return e[n].call(r.exports, r, r.exports, i), r.loaded = !0, _r_(r.exports);
}
return i.m = e, i.c = t, i.p = "", _r_(i(0));
}([ function(e, t, i) {
"use strict";
_i_("3da:2161"), t.__esModule = !0, t.compose = t.applyMiddleware = t.bindActionCreators = t.combineReducers = t.createStore = void 0;
var n = i(2), r = f(n), a = i(7), o = f(a), _ = i(6), s = f(_), l = i(5), d = f(l), c = i(1), u = f(c), h = i(3);
f(h);
function f(e) {
return _i_("3da:2533"), _r_(e && e.__esModule ? e :{
"default":e
});
}
t.createStore = r["default"], t.combineReducers = o["default"], t.bindActionCreators = s["default"], t.applyMiddleware = d["default"], t.compose = u["default"], _r_();
}, function(e, t) {
"use strict";
_i_("3da:2162"), t.__esModule = !0, t["default"] = i;
function i() {
_i_("3da:2534");
for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
if (0 === t.length) return _r_(function(e) {
return _i_("3da:2922"), _r_(e);
});
var n = function() {
_i_("3da:2966");
var e = t[t.length - 1], i = t.slice(0, -1);
return _r_({
v:function() {
return _i_("3da:3019"), _r_(i.reduceRight(function(e, t) {
return _i_("3da:3026"), _r_(t(e));
}, e.apply(void 0, arguments)));
}
});
}();
if ("object" == typeof n) return _r_(n.v);
_r_();
}
_r_();
}, function(e, t, i) {
"use strict";
_i_("3da:2163"), t.__esModule = !0, t.ActionTypes = void 0, t["default"] = l;
var n = i(4), r = _(n), a = i(11), o = _(a);
function _(e) {
return _i_("3da:2535"), _r_(e && e.__esModule ? e :{
"default":e
});
}
var s = t.ActionTypes = {
INIT:"@@redux/INIT"
};
function l(e, t, i) {
_i_("3da:2536");
var n;
if ("function" == typeof t && "undefined" == typeof i && (i = t, t = void 0), "undefined" != typeof i) {
if ("function" != typeof i) throw new Error("Expected the enhancer to be a function.");
return _r_(i(l)(e, t));
}
if ("function" != typeof e) throw new Error("Expected the reducer to be a function.");
var a = e, _ = t, d = [], c = d, u = !1;
function h() {
_i_("3da:2754"), c === d && (c = d.slice()), _r_();
}
function f() {
return _i_("3da:2755"), _r_(_);
}
function p(e) {
if (_i_("3da:2756"), "function" != typeof e) throw new Error("Expected listener to be a function.");
var t = !0;
return h(), c.push(e), _r_(function() {
if (_i_("3da:2923"), !t) return _r_();
t = !1, h();
var i = c.indexOf(e);
c.splice(i, 1), _r_();
});
}
function g(e) {
if (_i_("3da:2757"), !(0, r["default"])(e)) throw new Error("Actions must be plain objects. Use custom middleware for async actions.");
if ("undefined" == typeof e.type) throw new Error('Actions may not have an undefined "type" property. Have you misspelled a constant?');
if (u) throw new Error("Reducers may not dispatch actions.");
try {
u = !0, _ = a(_, e);
} finally {
u = !1;
}
for (var t = d = c, i = 0; i < t.length; i++) t[i]();
return _r_(e);
}
function m(e) {
if (_i_("3da:2758"), "function" != typeof e) throw new Error("Expected the nextReducer to be a function.");
a = e, g({
type:s.INIT
}), _r_();
}
function v() {
_i_("3da:2759");
var e, t = p;
return _r_((e = {
subscribe:function(e) {
if (_i_("3da:2994"), "object" != typeof e) throw new TypeError("Expected the observer to be an object.");
function i() {
_i_("3da:3012"), e.next && e.next(f()), _r_();
}
i();
var n = t(i);
return _r_({
unsubscribe:n
});
}
}, e[o["default"]] = function() {
return _i_("3da:2967"), _r_(this);
}, e));
}
return g({
type:s.INIT
}), _r_((n = {
dispatch:g,
subscribe:p,
getState:f,
replaceReducer:m
}, n[o["default"]] = v, n));
}
_r_();
}, function(e, t) {
"use strict";
_i_("3da:2164"), t.__esModule = !0, t["default"] = i;
function i(e) {
_i_("3da:2537"), "undefined" != typeof console && "function" == typeof console.error && console.error(e);
try {
throw new Error(e);
} catch (t) {}
_r_();
}
_r_();
}, function(e, t, i) {
_i_("3da:2165");
var n = i(8), r = i(9), a = i(10), o = "[object Object]", _ = Object.prototype, s = Function.prototype.toString, l = _.hasOwnProperty, d = s.call(Object), c = _.toString;
function u(e) {
if (_i_("3da:2538"), !a(e) || c.call(e) != o || r(e)) return _r_(!1);
var t = n(e);
if (null === t) return _r_(!0);
var i = l.call(t, "constructor") && t.constructor;
return _r_("function" == typeof i && i instanceof i && s.call(i) == d);
}
e.exports = u, _r_();
}, function(e, t, i) {
"use strict";
_i_("3da:2166"), t.__esModule = !0;
var n = Object.assign || function(e) {
_i_("3da:2836");
for (var t = 1; t < arguments.length; t++) {
var i = arguments[t];
for (var n in i) Object.prototype.hasOwnProperty.call(i, n) && (e[n] = i[n]);
}
return _r_(e);
};
t["default"] = _;
var r = i(1), a = o(r);
function o(e) {
return _i_("3da:2539"), _r_(e && e.__esModule ? e :{
"default":e
});
}
function _() {
_i_("3da:2540");
for (var e = arguments.length, t = Array(e), i = 0; e > i; i++) t[i] = arguments[i];
return _r_(function(e) {
return _i_("3da:2837"), _r_(function(i, r, o) {
_i_("3da:2948");
var _ = e(i, r, o), s = _.dispatch, l = [], d = {
getState:_.getState,
dispatch:function(e) {
return _i_("3da:3020"), _r_(s(e));
}
};
return l = t.map(function(e) {
return _i_("3da:3013"), _r_(e(d));
}), s = a["default"].apply(void 0, l)(_.dispatch), _r_(n({}, _, {
dispatch:s
}));
});
});
}
_r_();
}, function(e, t) {
"use strict";
_i_("3da:2167"), t.__esModule = !0, t["default"] = n;
function i(e, t) {
return _i_("3da:2541"), _r_(function() {
return _i_("3da:2838"), _r_(t(e.apply(void 0, arguments)));
});
}
function n(e, t) {
if (_i_("3da:2542"), "function" == typeof e) return _r_(i(e, t));
if ("object" != typeof e || null === e) throw new Error("bindActionCreators expected an object or a function, instead received " + (null === e ? "null" :typeof e) + '. Did you write "import ActionCreators from" instead of "import * as ActionCreators from"?');
for (var n = Object.keys(e), r = {}, a = 0; a < n.length; a++) {
var o = n[a], _ = e[o];
"function" == typeof _ && (r[o] = i(_, t));
}
return _r_(r);
}
_r_();
}, function(e, t, i) {
"use strict";
_i_("3da:2168"), t.__esModule = !0, t["default"] = u;
var n = i(2), r = i(4), a = s(r), o = i(3), _ = s(o);
function s(e) {
return _i_("3da:2543"), _r_(e && e.__esModule ? e :{
"default":e
});
}
function l(e, t) {
_i_("3da:2544");
var i = t && t.type, n = i && '"' + i.toString() + '"' || "an action";
return _r_("Given action " + n + ', reducer "' + e + '" returned undefined. To ignore an action, you must explicitly return the previous state.');
}
function d(e, t, i) {
_i_("3da:2545");
var r = Object.keys(t), o = i && i.type === n.ActionTypes.INIT ? "initialState argument passed to createStore" :"previous state received by the reducer";
if (0 === r.length) return _r_("Store does not have a valid reducer. Make sure the argument passed to combineReducers is an object whose values are reducers.");
if (!(0, a["default"])(e)) return _r_("The " + o + ' has unexpected type of "' + {}.toString.call(e).match(/\s([a-z|A-Z]+)/)[1] + '". Expected argument to be an object with the following ' + ('keys: "' + r.join('", "') + '"'));
var _ = Object.keys(e).filter(function(e) {
return _i_("3da:2924"), _r_(!t.hasOwnProperty(e));
});
if (_.length > 0) return _r_("Unexpected " + (_.length > 1 ? "keys" :"key") + " " + ('"' + _.join('", "') + '" found in ' + o + ". ") + "Expected to find one of the known reducer keys instead: " + ('"' + r.join('", "') + '". Unexpected keys will be ignored.'));
_r_();
}
function c(e) {
_i_("3da:2546"), Object.keys(e).forEach(function(t) {
_i_("3da:2892");
var i = e[t], r = i(void 0, {
type:n.ActionTypes.INIT
});
if ("undefined" == typeof r) throw new Error('Reducer "' + t + '" returned undefined during initialization. If the state passed to the reducer is undefined, you must explicitly return the initial state. The initial state may not be undefined.');
var a = "@@redux/PROBE_UNKNOWN_ACTION_" + Math.random().toString(36).substring(7).split("").join(".");
if ("undefined" == typeof i(void 0, {
type:a
})) throw new Error('Reducer "' + t + '" returned undefined when probed with a random type. ' + ("Don't try to handle " + n.ActionTypes.INIT + ' or other actions in "redux/*" ') + "namespace. They are considered private. Instead, you must return the current state for any unknown actions, unless it is undefined, in which case you must return the initial state, regardless of the action type. The initial state may not be undefined.");
_r_();
}), _r_();
}
function u(e) {
_i_("3da:2547");
for (var t = Object.keys(e), i = {}, n = 0; n < t.length; n++) {
var r = t[n];
"function" == typeof e[r] && (i[r] = e[r]);
}
var a, o = Object.keys(i);
try {
c(i);
} catch (s) {
a = s;
}
return _r_(function() {
_i_("3da:2839");
var e = arguments.length <= 0 || void 0 === arguments[0] ? {} :arguments[0], t = arguments[1];
if (a) throw a;
var n = d(e, i, t);
n && (0, _["default"])(n);
for (var r = !1, s = {}, c = 0; c < o.length; c++) {
var u = o[c], h = i[u], f = e[u], p = h(f, t);
if ("undefined" == typeof p) {
var g = l(u, t);
throw new Error(g);
}
s[u] = p, r = r || p !== f;
}
return _r_(r ? s :e);
});
}
_r_();
}, function(e, t) {
_i_("3da:2169");
var i = Object.getPrototypeOf;
function n(e) {
return _i_("3da:2548"), _r_(i(Object(e)));
}
e.exports = n, _r_();
}, function(e, t) {
_i_("3da:2170");
function i(e) {
_i_("3da:2549");
var t = !1;
if (null != e && "function" != typeof e.toString) try {
t = !!(e + "");
} catch (i) {}
return _r_(t);
}
e.exports = i, _r_();
}, function(e, t) {
_i_("3da:2171");
function i(e) {
return _i_("3da:2550"), _r_(!!e && "object" == typeof e);
}
e.exports = i, _r_();
}, function(e, t, i) {
_i_("3da:2172"), function(t) {
"use strict";
_i_("3da:2841"), e.exports = i(12)(t || window || this), _r_();
}.call(t, function() {
return _i_("3da:2840"), _r_(this);
}()), _r_();
}, function(e, t) {
"use strict";
_i_("3da:2173"), e.exports = function(e) {
_i_("3da:2760");
var t, i = e.Symbol;
return "function" == typeof i ? i.observable ? t = i.observable :(t = "function" == typeof i["for"] ? i["for"]("observable") :i("observable"), i.observable = t) :t = "@@observable", _r_(t);
}, _r_();
} ]));
}), _r_();
}), B.define("morphdom", function(e, t, i) {
_i_("3da:154"), function(e) {
if (_i_("3da:906"), "object" == typeof t && "undefined" != typeof i) i.exports = e(); else if ("function" == typeof define && define.amd) define([], e); else {
var n;
n = "undefined" != typeof window ? window :"undefined" != typeof global ? global :"undefined" != typeof self ? self :this, n.morphdom = e();
}
_r_();
}(function() {
_i_("3da:905");
var e, t;
e = {
exports:t = {}
};
var i, n, r = "undefined" != typeof document ? document.body || document.createElement("div") :{}, a = "http://www.w3.org/1999/xhtml", o = 1, _ = 3, s = 8;
n = r.hasAttributeNS ? function(e, t, i) {
return _i_("3da:2355"), _r_(e.hasAttributeNS(t, i));
} :r.hasAttribute ? function(e, t, i) {
return _i_("3da:2551"), _r_(e.hasAttribute(i));
} :function(e, t, i) {
return _i_("3da:2552"), _r_(!!e.getAttributeNode(i));
};
function l(e) {
_i_("3da:1364");
for (var t in e) if (e.hasOwnProperty(t)) return _r_(!1);
return _r_(!0);
}
function d(e) {
_i_("3da:1365"), !i && document.createRange && (i = document.createRange(), i.selectNode(document.body));
var t;
return i && i.createContextualFragment ? t = i.createContextualFragment(e) :(t = document.createElement("body"), t.innerHTML = e), _r_(t.childNodes[0]);
}
var c = {
OPTION:function(e, t) {
_i_("3da:2356"), e.selected = t.selected, e.selected ? e.setAttribute("selected", "") :e.removeAttribute("selected", ""), _r_();
},
INPUT:function(e, t) {
_i_("3da:2357"), e.checked = t.checked, e.checked ? e.setAttribute("checked", "") :e.removeAttribute("checked"), e.value !== t.value && (e.value = t.value), n(t, null, "value") || e.removeAttribute("value"), e.disabled = t.disabled, e.disabled ? e.setAttribute("disabled", "") :e.removeAttribute("disabled"), _r_();
},
TEXTAREA:function(e, t) {
_i_("3da:2358");
var i = t.value;
e.value !== i && (e.value = i), e.firstChild && e.firstChild.nodeValue !== i && (e.firstChild.nodeValue = i), _r_();
}
};
function u() {}
var h = function(e, t) {
return _i_("3da:2003"), _r_(e.nodeName === t.nodeName && e.namespaceURI === t.namespaceURI);
};
function f(e, t) {
return _i_("3da:1367"), _r_(t && t !== a ? document.createElementNS(t, e) :document.createElement(e));
}
function p(e, t) {
_i_("3da:1368");
var i, r, a, o, _, s, l = t.attributes;
for (i = l.length - 1; i >= 0; i--) r = l[i], a = r.name, _ = r.value, o = r.namespaceURI, o ? (a = r.localName || a, s = e.getAttributeNS(o, a)) :s = e.getAttribute(a), s !== _ && (o ? e.setAttributeNS(o, a, _) :e.setAttribute(a, _));
for (l = e.attributes, i = l.length - 1; i >= 0; i--) r = l[i], r.specified !== !1 && (a = r.name, o = r.namespaceURI, n(t, o, o ? a = r.localName || a :a) || e.removeAttributeNode(r));
_r_();
}
function g(e, t) {
_i_("3da:1369");
for (var i = e.firstChild; i; ) {
var n = i.nextSibling;
t.appendChild(i), i = n;
}
return _r_(t);
}
function m(e) {
return _i_("3da:1370"), _r_(e.id);
}
function v(e, t, i) {
if (_i_("3da:1371"), i || (i = {}), "string" == typeof t) if ("#document" === e.nodeName || "HTML" === e.nodeName) {
var n = t;
t = document.createElement("html"), t.innerHTML = n;
} else t = d(t);
var r = {}, a = {}, v = i.getNodeKey || m, b = i.onBeforeNodeAdded || u, y = i.onNodeAdded || u, w = i.onBeforeElUpdated || i.onBeforeMorphEl || u, k = i.onElUpdated || u, C = i.onBeforeNodeDiscarded || u, S = i.onNodeDiscarded || u, x = i.onBeforeElChildrenUpdated || i.onBeforeMorphElChildren || u, B = i.childrenOnly === !0, E = [];
function M(e, t) {
_i_("3da:2004");
var i = v(e);
if (i ? r[i] = e :t || S(e), e.nodeType === o) for (var n = e.firstChild; n; ) M(n, t || i), n = n.nextSibling;
_r_();
}
function T(e) {
if (_i_("3da:2005"), e.nodeType === o) for (var t = e.firstChild; t; ) v(t) || (S(t), T(t)), t = t.nextSibling;
_r_();
}
function N(e, t, i) {
if (_i_("3da:2006"), C(e) === !1) return _r_();
t.removeChild(e), i ? v(e) || (S(e), T(e)) :M(e), _r_();
}
function A(e, t, i, n) {
_i_("3da:2007");
var l = v(t);
if (l && delete r[l], !n) {
if (w(e, t) === !1) return _r_();
if (p(e, t), k(e), x(e, t) === !1) return _r_();
}
if ("TEXTAREA" !== e.nodeName) {
var d, u, f, g, m, C = t.firstChild, S = e.firstChild;
e:for (;C; ) {
for (f = C.nextSibling, d = v(C); S; ) {
var B = v(S);
if (u = S.nextSibling, !i && B && (m = a[B])) {
m.parentNode.replaceChild(S, m), A(S, m, i), S = u;
continue;
}
var M = S.nodeType;
if (M === C.nodeType) {
var T = !1;
if (M === o ? (h(S, C) && (B || d ? d === B && (T = !0) :T = !0), T && A(S, C, i)) :(M === _ || M == s) && (T = !0, S.nodeValue = C.nodeValue), T) {
C = f, S = u;
continue e;
}
}
N(S, e, i), S = u;
}
d && ((g = r[d]) ? (A(g, C, !0), C = g) :a[d] = C), b(C) !== !1 && (e.appendChild(C), y(C)), C.nodeType === o && (d || C.firstChild) && E.push(C), C = f, S = u;
}
for (;S; ) u = S.nextSibling, N(S, e, i), S = u;
}
var D = c[e.nodeName];
D && D(e, t), _r_();
}
var D = e, $ = D.nodeType, I = t.nodeType;
if (!B) if ($ === o) I === o ? h(e, t) || (S(e), D = g(e, f(t.nodeName, t.namespaceURI))) :D = t; else if ($ === _ || $ === s) {
if (I === $) return D.nodeValue = t.nodeValue, _r_(D);
D = t;
}
if (D === t) S(e); else {
A(D, t, !1, B);
var j = function(e) {
_i_("3da:2664");
for (var t = e.firstChild; t; ) {
var i = t.nextSibling, n = v(t);
if (n) {
var a = r[n];
if (a && h(t, a)) {
if (t.parentNode.replaceChild(a, t), A(a, t, !0), t = i, l(r)) return _r_(!1);
continue;
}
}
t.nodeType === o && j(t), t = i;
}
_r_();
};
if (!l(r)) e:for (;E.length; ) {
var O = E;
E = [];
for (var L = 0; L < O.length; L++) if (j(O[L]) === !1) break e;
}
for (var P in r) if (r.hasOwnProperty(P)) {
var H = r[P];
S(H), T(H);
}
}
return !B && D !== e && e.parentNode && e.parentNode.replaceChild(D, e), _r_(D);
}
return e.exports = v, _r_(e.exports);
}), _r_();
}), B.define("component/reactive", function(e, t, i) {
_i_("3da:155");
var n, r = e("morphdom"), a = e("component"), o = e("component/loader"), _ = e("event-map"), s = e("report-error"), l = B.env && B.env.is_fe_reactive_components_shout_error_on_broken_template;
function d(e) {
_i_("3da:465"), !n && document.createRange && (n = document.createRange(), n.selectNode(document.body));
var t;
return n && n.createContextualFragment ? t = n.createContextualFragment(e) :(t = document.createElement("body"), t.innerHTML = e), _r_(t.childNodes);
}
function c(e) {
return _i_("3da:466"), _r_(1 === d(e).length);
}
function u(e, t) {
_i_("3da:467");
var i;
if (e !== t && (i = o.getComponent(t)) && i.render !== a.prototype.render) return i.render(), _r_(!1);
_r_();
}
function h(e, t) {
_i_("3da:468");
var i = e.getAttribute(jQuery.expando);
return i && t.setAttribute(jQuery.expando, i), _r_(!0);
}
function f(e) {
_i_("3da:469");
var t = u.bind(null, e), i = {
onBeforeMorphEl:t,
onBeforeMorphElChildren:t,
onBeforeNodeDiscarded:null
};
return "msie" === B.env.b_browser && B.env.b_browser_version <= 8 && (i.onBeforeElUpdated = h), _r_(i);
}
function p(e) {
if (_i_("3da:470"), e.indexOf(" ") >= 0) throw new Error('component/reactive: invalid "' + e + '". Component name must not contain spaces');
return _r_(e);
}
var g = 0, m = 50;
i.exports = a.extend({
init:function() {
_i_("3da:1763"), this.name = p(this.el.getAttribute("data-component")), this.initialize(), this.renderOptions = f(this.el), _r_();
},
getState:function() {
throw _i_("3da:1764"), new Error("getState() not implemented on component " + this.name);
},
events:function(e) {
_i_("3da:1765"), _(this.el, e, this), _r_();
},
render:function() {
if (_i_("3da:1766"), !this.template) return _r_();
if (++g > m) throw new Error(this.name + ": max render depth reached (" + m + "). Stuck in a loop?");
var e = B.jstmpl(this.template).render(this.getState()).trim();
l && !c(e) && s("Broken. Reactive components requires having one root node element in rendered template. Add a root element to the template.", "component/reactive"), r(this.el, e, this.renderOptions), o.loadComponents(this.$el), g = 0, _r_();
}
}), _r_();
}), B.define("report-error", function(e, t, i) {
_i_("3da:156");
function n(e) {
_i_("3da:471");
var t = {};
return _r_(e && "[object Function]" === t.toString.call(e));
}
function r(e, t) {
_i_("3da:472");
var i = B.env && B.env.b_dev_server, r = n(B.reportError) && B.reportError.bind(B), a = !r;
if (i || a) throw new Error(e);
r({
message:e
}, t), _r_();
}
return _r_(r);
}), B.define("event-map", function(e, t, i) {
_i_("3da:157");
var n = e("jquery");
i.exports = function(e, t, i) {
_i_("3da:907");
var e = n(e);
for (var r in t) if (t.hasOwnProperty(r)) {
var a = r.split(/\s+/), o = a.shift(), _ = a.join(), s = i ? t[r].bind(i) :t[r];
"function" == typeof n.fn.on ? e.on(o, _, s) :e.delegate(_, o, s);
}
_r_();
}, _r_();
}), B.define("component/input-phone-country", function(e, t, i) {
_i_("3da:158");
var n = e("component"), r = {
ad:0,
ae:-25,
af:-50,
ag:-75,
ai:-100,
al:-125,
am:-150,
an:-175,
ao:-200,
aq:-225,
ar:-250,
as:-275,
at:-300,
au:-325,
aw:-350,
ax:-375,
az:-400,
ba:-425,
bb:-450,
bd:-475,
be:-500,
bf:-525,
bg:-550,
bh:-575,
bi:-600,
bj:-625,
bl:-650,
bm:-675,
bn:-700,
bo:-725,
bq:-750,
br:-775,
bs:-800,
bt:-825,
bv:-850,
bw:-875,
by:-900,
bz:-925,
ca:-950,
cc:-975,
cd:-1e3,
cf:-1025,
cg:-1050,
ch:-1075,
ci:-1100,
ck:-1125,
cl:-1150,
cm:-1175,
cn:-1200,
co:-1225,
cr:-1250,
cu:-1275,
cv:-1300,
cw:-1325,
cx:-1350,
cy:-1375,
cz:-1400,
de:-1425,
dj:-1450,
dk:-1475,
dm:-1500,
"do":-1525,
dz:-1550,
ec:-1575,
ee:-1600,
eg:-1625,
eh:-1650,
er:-1675,
es:-1700,
et:-1725,
fi:-1750,
fj:-1775,
fk:-1800,
fm:-1825,
fo:-1850,
fr:-1875,
ga:-1900,
gb:-1925,
gd:-1950,
ge:-1975,
gf:-2e3,
gg:-2025,
gh:-2050,
gi:-2075,
gl:-2100,
gm:-2125,
gn:-2150,
gp:-2175,
gq:-2200,
gr:-2225,
gs:-2250,
gt:-2275,
gu:-2300,
gw:-2325,
gy:-2350,
hk:-2375,
hm:-2400,
hn:-2425,
hr:-2450,
ht:-2475,
hu:-2500,
id:-2525,
ie:-2550,
il:-2575,
im:-2600,
"in":-2625,
io:-2650,
iq:-2675,
ir:-2700,
is:-2725,
it:-2750,
je:-2775,
jm:-2800,
jo:-2825,
jp:-2850,
ke:-2875,
kg:-2900,
kh:-2925,
ki:-2950,
km:-2975,
kn:-3e3,
kp:-3025,
kr:-3050,
kw:-3075,
ky:-3100,
kz:-3125,
la:-3150,
lb:-3175,
lc:-3200,
li:-3225,
lk:-3250,
lr:-3275,
ls:-3300,
lt:-3325,
lu:-3350,
lv:-3375,
ly:-3400,
ma:-3425,
mc:-3450,
md:-3475,
me:-3500,
mf:-3525,
mg:-3550,
mh:-3575,
mk:-3600,
ml:-3625,
mm:-3650,
mn:-3675,
mo:-3700,
mp:-3725,
mq:-3750,
mr:-3775,
ms:-3800,
mt:-3825,
mu:-3850,
mv:-3875,
mw:-3900,
mx:-3925,
my:-3950,
mz:-3975,
na:-4e3,
nc:-4025,
ne:-4050,
nf:-4075,
ng:-4100,
ni:-4125,
nl:-4150,
no:-4175,
np:-4200,
nr:-4225,
nu:-4250,
nz:-4275,
om:-4300,
pa:-4325,
pe:-4350,
pf:-4375,
pg:-4400,
ph:-4425,
pk:-4450,
pl:-4475,
pm:-4500,
pn:-4525,
pr:-4550,
ps:-4575,
pt:-4600,
pw:-4625,
py:-4650,
qa:-4675,
re:-4700,
ro:-4725,
rs:-4750,
ru:-4775,
rw:-4800,
sa:-4825,
sb:-4850,
sc:-4875,
sd:-4900,
se:-4925,
sg:-4950,
sh:-4975,
si:-5e3,
sj:-5025,
sk:-5050,
sl:-5075,
sm:-5100,
sn:-5125,
so:-5150,
sr:-5175,
st:-5200,
sv:-5225,
sx:-5250,
sy:-5275,
sz:-5300,
tc:-5325,
td:-5350,
tf:-5375,
tg:-5400,
th:-5425,
tj:-5450,
tk:-5475,
tl:-5500,
tm:-5525,
tn:-5550,
to:-5575,
tr:-5600,
tt:-5625,
tv:-5650,
tw:-5675,
tz:-5700,
ua:-5725,
ug:-5750,
um:-5775,
us:-5800,
uy:-5825,
uz:-5850,
va:-5875,
vc:-5900,
ve:-5925,
vg:-5950,
vi:-5975,
vn:-6e3,
vu:-6025,
wf:-6050,
ws:-6075,
xk:-6100,
ye:-6125,
yt:-6150,
za:-6175,
zm:-6200,
zw:-6225
}, a = [ "au", "cw", "gb", "gp", "gs", "km", "mh", "mq", "nf", "no", "ru", "sm", "us" ];
function o(e, t) {
return _i_("3da:473"), _r_(e.callingcode.length < t.callingcode.length ? 1 :e.callingcode.length > t.callingcode.length ? -1 :e.preferred ? -1 :1);
}
i.exports = n.extend({
init:function() {
_i_("3da:1767"), this.$country = this.$el.find('[data-phone-country=""], [data-phone-country]'), this.$input = this.$el.find('[data-phone-input=""], [data-phone-input]'), this.$flag = this.$el.find('[data-phone-flag=""], [data-phone-flag]'), this.isTriggerChange = void 0 !== this.$el.data("phone-country-trigger-change"), this.defaultCountryId = (this.$el.data("phone-country-default") || "").toString().toLowerCase(), this.countries = [], this.addEventListeners(), this.loadCountries(), this.initDefaultCountry(), _r_();
},
addEventListeners:function() {
_i_("3da:1768");
var e = "oninput" in this.$input[0] ? "input" :"keyup";
this.$country.change(this.countryChange.bind(this)), this.$input.bind("focus", this.inputFocus.bind(this)), this.$input.bind("blur", this.inputBlur.bind(this)), this.$input.bind(e + " change", this.inputInteracted.bind(this)), "msie" == B.env.b_browser && B.env.b_browser_version <= 8 && (this.$country.bind("mousedown", this.countryFocus.bind(this)), this.$country.bind("blur change", this.countryBlur.bind(this))), _r_();
},
inputFocus:function() {
_i_("3da:1769"), setTimeout(this.addDefaultCallingCode.bind(this), 4), _r_();
},
inputBlur:function() {
_i_("3da:1770"), this.removeDefaultCallingCode(), _r_();
},
countryFocus:function() {
_i_("3da:1771"), this.$country.css("width", "auto"), _r_();
},
countryBlur:function() {
_i_("3da:1772"), this.$country.css("width", ""), _r_();
},
inputInteracted:function() {
_i_("3da:1773"), this.checkPlus(), this.changeCountryFromInput(), _r_();
},
countryChange:function() {
_i_("3da:1774"), this.changeInputFromCountry(), this.$input.focus(), _r_();
},
loadCountries:function() {
_i_("3da:1775"), this.$country.find("option").each(function(e, t) {
_i_("3da:2761");
var i = $(t), n = i.attr("value").toLowerCase(), r = {
id:n,
callingcode:i.attr("data-calling-code"),
name:i.text(),
value:i.attr("value"),
preferred:this.defaultCountryId == n || -1 != a.indexOf(n)
};
this.countries.push(r), _r_();
}.bind(this)), this.countries.sort(o), _r_();
},
initDefaultCountry:function() {
_i_("3da:1776"), this.defaultCountry = this.findCountryById(this.defaultCountryId), this.changeCountryFromInput(), this.$input.attr("placeholder", "+" + this.defaultCountry.callingcode), _r_();
},
findCountryById:function(e) {
_i_("3da:1777");
var t = null;
return this.countries.every(function(i) {
if (_i_("3da:2553"), i.id == e) return t = i, _r_(!1);
return _r_(!0);
}), _r_(t);
},
findCountryByNumber:function(e) {
_i_("3da:1778");
var t = null;
return this.countries.every(function(i) {
if (_i_("3da:2554"), 0 == e.indexOf(i.callingcode)) return t = i, _r_(!1);
return _r_(!0);
}), _r_(t);
},
changeCountryCode:function(e, t) {
_i_("3da:1779");
var i = this.findCountryByNumber(e);
return i && (e = e.substr(i.callingcode.length)), _r_(t.callingcode + e);
},
addDefaultCallingCode:function() {
_i_("3da:1780");
var e = this.$input.val();
("" == e || "+" == e) && this.$input.val("+" + this.defaultCountry.callingcode), _r_();
},
removeDefaultCallingCode:function() {
_i_("3da:1781");
var e = this.$input.val();
("+" == e || e == "+" + this.defaultCountry.callingcode) && this.$input.val(""), _r_();
},
changeInputFromCountry:function() {
_i_("3da:1782");
var e = this.$country.val().toLowerCase(), t = this.findCountryById(e), i = this.$input.val().replace(/^\+/, "");
this.$input.val("+" + this.changeCountryCode(i, t)), this.isTriggerChange && this.$input.change(), this.updateFlag(t), _r_();
},
changeCountryFromInput:function() {
_i_("3da:1783");
var e = this.$input.val().replace(/^\+/, ""), t = this.findCountryByNumber(e) || this.defaultCountry;
this.$country.val(t.value), this.updateFlag(t), _r_();
},
checkPlus:function() {
_i_("3da:1784");
var e = this.$input.val();
0 != e.indexOf("+") && this.$input.val("+" + e), _r_();
},
updateFlag:function(e) {
_i_("3da:1785"), r[e.id] && this.$flag.css("background-position", "0 " + r[e.id] + "px"), _r_();
},
selectCountry:function(e) {
_i_("3da:1786");
var t = this.findCountryById(e);
t && (this.defaultCountryId = t.id, this.initDefaultCountry()), _r_();
}
}), _r_();
}), B.when({
events:"ready"
}).run(function(e) {
_i_("3da:159");
var t = e("jquery"), i = e("jstmpl").translations, n = !1, r = ".js-auth_next_step__sms_", a = ".user_access_menu_auth_next_step__sms";
booking.authNextStepSMS = booking.authNextStepSMS || {};
function o(e) {
if (_i_("3da:474"), n) return _r_();
var a = t(r + "send_verification_code"), o = t(r + "show-other-options"), _ = {}, s = "wrong_pin_code", l = i("deals_flexi_calendar_error");
_[s] = i("auth_next_step_error_empty_verification_code");
function d(e) {
_i_("3da:908");
var t = _[e] || l;
booking.userAccessFormHandler.displayErrorMsg({
msg:t,
parent:".user_access_menu_auth_next_step__sms"
}), _r_();
}
function c() {
_i_("3da:909"), booking.userAccessFormHandler.resetErrors({
parent:".user_access_menu_auth_next_step__sms"
}), e.find(".form-loading").hide(), t(r + "verify_phone_confirmation_code").val(""), t(".js-user-access-form--signin input[name=second_factor]").val(""), _r_();
}
function u() {
_i_("3da:910"), t(".form-section", e).addClass("form-hidden-section").removeClass("form-shown-section"), _r_();
}
function h() {
_i_("3da:911"), c(), u(), t(".user_access_signin_menu").removeClass("form-hidden-section").addClass("form-shown-section"), _r_();
}
function f() {
_i_("3da:912"), c(), u(), t(".user_access_menu_auth_next_step__email").removeClass("form-hidden-section").addClass("form-shown-section"), _r_();
}
o.on("click", f), a.on("click", function(i) {
_i_("3da:1372"), i.preventDefault(), t(".js-user-access-form--signin input[name=second_factor]").val(""), t(".js-user-access-form--signin").submit(), t(".form-loading", e).show(), _r_();
}), t(r + "verify_phone_form").on("submit", function(i) {
_i_("3da:1373");
var n = t(r + "verify_phone_confirmation_code").val() || "";
i.preventDefault(), n ? (t(".js-user-access-form--signin input[name=second_factor]").val(n), t(".js-user-access-form--signin").submit(), t(".form-loading", e).show()) :d(s), _r_();
}), t(r + "phone_number_login_close").on("click", h), e.find(".user_access_section_trigger").on("click", h), _r_();
}
booking.authNextStepSMS.promtUserForPhoneVerification = function(e, i) {
_i_("3da:913"), o(e), t(".form-section", e).addClass("form-hidden-section").removeClass("form-shown-section"), t(".form-loading", e).hide(), "verify" === i && t(a, e).removeClass("form-hidden-section").addClass("form-shown-section"), _r_();
}, B.env.prompt_user_for_2fa && booking.authNextStepSMS.promtUserForPhoneVerification(t(".user_access_menu"), "verify"), _r_();
}), B.define("component/profile/2fa/auth_next_step__email", function(e, t, i) {
"use strict";
_i_("3da:160");
var n = e("components/profile/2fa/store"), r = e("components/profile/2fa/constants"), a = e("jstmpl").translations, o = e("user-access-menu/api");
e("components/profile/2fa/templates/auth_next_step__email");
var _ = {}, s = -1, l = a("deals_flexi_calendar_error");
_[s] = a("auth_next_step_error_empty_verification_code"), i.exports = e("component/reactive").extend({
initialize:function() {
_i_("3da:1787");
var e = this;
n.subscribe(function() {
_i_("3da:2555"), e.render(), _r_();
}), this.events({
"click [data-confirm-phone]":this.confirmPhone,
"click [data-dismiss]":this.dismiss,
"submit [data-sign-in]":this.sendSecondFactor
}), this.render(), this.$form = this.$el.find("form"), _r_();
},
template:"auth_next_step__email",
getState:function() {
return _i_("3da:1788"), _r_(n.getState().auth_next_step__email);
},
formData:function() {
_i_("3da:1789");
var e, t = this.$el, i = {};
return e = t.is("form") ? t :t.find("form:eq(0)"), e.serializeArray().forEach(function(e) {
_i_("3da:2556"), i[e.name] = e.value, _r_();
}), _r_(i);
},
loading:function() {
_i_("3da:1790"), n.dispatch({
type:r.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.LOADING
}), _r_();
},
sendSecondFactor:function(e) {
_i_("3da:1791");
var t = $(this.$form.find("[name=confirmation_code]")).val() || "";
if (e.preventDefault(), t) {
var i = $(".js-user-access-form--signin"), a = $("input[name=second_factor]", i);
a.val(t);
var _ = $("input[name=recovery_2fa]", i)[0];
_ ? $(_).val(1) :i.prepend('<input type="hidden" name="recovery_2fa" value="1">');
var l = o.send({
target:$(".js-user-access-form--signin")
});
$(_).val(""), this.loading(), l.then(function() {
_i_("3da:2762"), n.dispatch({
type:r.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.NEXT_STEP
}), _r_();
}, function(e) {
_i_("3da:2763");
var t = Object.assign({}, e);
n.dispatch({
type:r.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.ERROR,
message:t.msg
}), _r_();
});
} else this.handleError(s);
_r_();
},
handleError:function(e) {
_i_("3da:1792");
var t = _[e] || l;
n.dispatch({
type:r.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.ERROR,
message:t
}), _r_();
},
confirmPhone:function(e) {
_i_("3da:1793"), e.preventDefault();
var t = o.send({
target:this.$form
});
this.loading(), t.then(function() {
_i_("3da:2557"), n.dispatch({
type:r.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.NEXT_STEP
}), _r_();
}, function(e) {
_i_("3da:2558");
var t = Object.assign({}, e);
n.dispatch({
type:r.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.ERROR,
message:t.msg
}), _r_();
}), _r_();
},
dismiss:function(e) {
_i_("3da:1794"), n.dispatch({
type:r.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.CANCEL
}), _r_();
}
}), _r_();
}), B.define("components/profile/2fa/reducers/auth_next_step__email", function(e, t, i) {
"use strict";
_i_("3da:161");
var n = e("components/profile/2fa/constants"), r = Object.assign({}, {
status:"waiting_for_phone_number",
message:"",
is_in_loading_state:!1,
is_in_error_state:!1
}), a = {
off:"waiting_for_phone_number",
waiting_for_phone_number:"pending_email_verification",
pending_email_verification:"authenticated"
};
function o(e, t) {
switch (_i_("3da:475"), e = e || r, t.type) {
case n.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.NEXT_STEP:
return _r_(Object.assign({}, e, {
status:a[e.status],
is_in_loading_state:!1,
is_in_error_state:!1
}));

case n.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.LOADING:
return _r_(Object.assign({}, e, {
is_in_loading_state:!0
}));

case n.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.ERROR:
return _r_(Object.assign({}, e, {
is_in_error_state:!0,
is_in_loading_state:!1,
message:t.message
}));

case n.ACTION_TYPES.AUTH_NEXT_STEP_EMAIL.CANCEL:
return _r_(Object.assign({}, {}));

default:
return _r_(e);
}
_r_();
}
i.exports = o, _r_();
}), B.define("components/profile/2fa/store", function(e, t, i) {
"use strict";
_i_("3da:162");
var n = e("redux"), r = n.createStore, a = n.combineReducers, o = e("components/profile/2fa/reducers/auth_next_step__email"), _ = r(a({
auth_next_step__email:o
}), B.env.login_flow, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
i.exports = _, _r_();
}), B.define("components/profile/2fa/constants", function(e, t, i) {
"use strict";
_i_("3da:163"), i.exports = {
ACTION_TYPES:{
AUTH_NEXT_STEP_EMAIL:{
NEXT_STEP:"action_types.auth_next_step__email.next_step",
ERROR:"action_types.auth_next_step__email.error",
CANCEL:"action_types.auth_next_step__email.cancel",
LOADING:"action_types.auth_next_step__email.loading"
}
}
}, _r_();
}), B.define("components/profile/2fa/templates/auth_next_step__email", function(e, t, i) {
"use strict";
_i_("3da:164"), booking.jstmpl("auth_next_step__email", function() {
_i_("3da:1089");
var e = [ "\n    \n    <div>\n        ", '\n            <div class="form-loading form-loading--visible">\n                <span class="form-loading-content">', "/private/loading/name", "...</span>\n            </div>\n        ", "\n\n        ", "\n            ", '\n    <div class="alert alert-error alert-displayed" role="alert">\n        ', "\n    </div>\n", "\n        ", '\n    <div>\n        <form action="', '" method="POST" target="log_tar">\n            <h3>', "/private/auth_2fa_recovery_flow_confirm_phone_number_header/name", '</h3>\n\n            <div class="clearfix"></div>\n\n            <label class="auth-next-step__section auth-next-step__section--compact">\n                ', "/private/auth_2fa_recovery_flow_confirm_phone_number_explanation/name", '\n            </label>\n\n            <div data-component="input-phone-country" class="auth-next_step__input-phone-country js-companyjoin-field-phone" data-phone-country-default="', '">\n                <label>\n                    ', "/private/auth_2fa_recovery_flow_confirm_phone_number_input_label/name", '\n                </label>\n\n                <input type="tel"\n                    class="u-phone auth-next-step-email__verify-phone-input"\n                    name="phone_for_2fa"\n                    value=""\n                    maxlength="40"\n                    placeholder="', "/private/acc_settings_section_2fa_enrollment_phone_number_field_placeholder/name", '"\n                    required\n                    data-phone-input\n                    >\n\n                <select class="auth-next-step-email__phone-country-select" tabindex="-1" data-phone-country>\n                    ', '\n                        <option value="', '" data-calling-code="', '">', "</option>\n                    ", '\n                </select>\n            </div>\n\n            <input type="hidden" name="op" value="send_recovery_code">\n\n            <button type="submit" class="bootstrapped-input btn btn-primary btn_flat-wide" data-confirm-phone>\n                ', "/private/auth_2fa_recovery_flow_confirm_phone_number_cta/name", "\n            </button>\n        </form>\n    </div>\n", "\n    ", '\n\n    <form class="', 'verify_phone_form form-inline__no-block" action="#" method="POST" data-sign-in>\n\n        <h3>', "/private/auth_2fa_recovery_flow_code_sent_header/name", '</h3>\n\n        <label class="auth-next-step__section auth-next-step__section--compact">\n            ', "/private/auth_2fa_recovery_flow_code_sent_explanation/name", '\n        </label>\n\n        <label class="auth-next-step__section auth-next-step__section--bold">\n            ', "/private/auth_2fa_recovery_flow_code_sent_status/name", '\n        </label>\n\n        <input type="hidden" name="recovery_2fa" value="1">\n\n        ', '<div class="clearfix"></div>\n\n<div class="', "verify_phone_confirmation_code_options ", " verify_phone_confirmation_code_options--compact ", '">\n	', "/private/auth_next_step_sms_enter_code_cta/name", '\n\n	<div class="clearfix"></div>\n\n    ', '\n        <span style="color: red;">\n            For KVMs, you can use 123456\n        </span>\n        <div class="clearfix"></div>\n    ', '\n\n	<label class="verify_phone_confirmation_label">\n		<input type="text" name="confirmation_code" maxlength="80"\n            class="auth_next_step__verify_phone_confirmation_code ', 'verify_phone_confirmation_code bootstrapped-input input-text input-block-level"\n            data-validation="required{@Please enter a verification code}|numeric"\n            ', ' \n                value="123456"\n            ', "\n            >\n	</label>\n\n    ", '\n        <div class="auth_next_step__send_verification_code_actions">\n            <div\n                class="', 'send_verification_code auth_next_step__send_verification_code"\n                data-resend-copy="', "/private/auth_next_step_send_code_cta/name", '"\n            >', "</div>\n        </div>\n    ", '\n\n	<div class="clearfix"></div>\n\n	', '\n		<input type="submit" value="', '" class="', "bigbluebutton", " btn btn_flat-wide  bootstrapped-input btn btn-primary ", 'send_verification_code_submit">\n	', "\n		", "\n\n\n\n", "\n	", "1", "\n", "\n\n", "b-button", "Button Text should be overriden", "button", "\n\n\n", "c-button", "0", " b-button_primary ", "new_flat_cta", " b-button_secondary ", " b-button_warning", " b-button_disabled", " b-button_primary b-button_small", " b-button_secondary b-button_small", " b-button_warning b-button_small", " b-button_primary b-button_flat", "\n	\n	", " ", "--", "--primary", "\n\n	\n	", "--disabled", "\n\n	", 'id="', '"', 'href="', 'data-title="', 'type="', 'rel="', "data-", '="', " data-", 'target="', 'hotelUrl="', 'data-hotelid="', "<", ' class="', '" ', "data-hcta-summary ", 'data-track-event="', 'value="', '"/> ', '> <span class="b-button__text">', "</span> ", '<span class="b-button__from-text" ', 'style="display:inline-block"', ">", '<span class="b-button__from-text book_now_rt_summary g-hidden"></span> ', "</", "> ", "\n<", '\n	class="', '"\n	', "\n		data-hcta-summary\n	", "\n\n    ", '\n        data-track-event="', '"\n    ', '\n		value="', '"/>\n	', '\n	>\n		<span class="b-button__text">', "</span>\n\n		", '\n				<span class="b-button__from-text" ', "</span>\n		", "\n\n		", '\n				<span class="b-button__from-text book_now_rt_summary g-hidden"></span>\n		', "\n\n		</", ">\n	", "submit", "<TMPL_IF [% $b_site_type eq 'mdot' %]>bigbluebutton</TMPL_IF><TMPL_V js_class_prefix>send_verification_code_submit <TMPL_V js_class_prefix>send_verification_code_submit--same_page", "primary", "\n\n</div>\n", "\n    </form>\n", '\n    <div>\n        <div class="auth-next-step__footer-buttons-left">\n        </div>\n\n        <div class="auth-next-step__footer-buttons-right">\n            <a href="javascript:void(0)"\n               data-dismiss>', "/private/dda_reset_password_cancel_button/name", "</a>\n        </div>\n    </div>\n" ], t = [ "is_in_loading_state", "message", "is_in_error_state", "status", "b_form_action", "b_guest_country", "b_country_code_to_phone_prefix", "cc", "mc", "name", "js_class_prefix", "fe_confirmation_code_compact", "b_dev_server", "fe_is_resend_available", "fe_verify_phone_confirmation_submit_copy", "b_site_type", "fe_is_account_area", "fe_run_global_button_normalization_tech", "b_btn_class", "b_btn_id", "b_btn_text", "b_btn_outside_text", "b_btn_caption_text", "b_btn_tag", "b_btn_attr_type", "b_btn_attr", "b_btn_href", "b_btn_extra_classes", "b_btn_title", "b_btn_rel", "b_btn_target", "b_btn_data", "fe_cbtn_comp_class", "fe_cbtn_class", "fe_cbtn_type", "fe_cbtn_size", "fe_cbtn_disabled", "fe_cbtn_icon_only", "fe_cbtn_icon_left", "fe_cbtn_icon_right", "fe_cbtn_track_exp", "fe_cbtn_track_event", "fe_btn_track_event", "fe_cbtn_track_goal", "fe_cbtn_track_stage", "fe_cbtn_is_anchor", "fe_cbtn_is_input", "fe_cbtn_is_button", "fe_cbtn_no_style", "b_btn_hotel_url", "b_btn_data_hotelid", "b_text", "b_outside_text", "b_caption_text", "fe_new_flat_cta_class", "b_action", "b_type", "fe_btn_type", "fe_btn_size", "fe_disabled", "b_tag", "fe_btn_is_anchor", "fe_btn_is_input", "fe_btn_is_button", "b_id", "b_href", "fe_btn_no_style", "b_extra_classes", "b_title", "b_attr_type", "b_attr", "b_rel", "b_data_id", "b_data_value", "b_data_id_2", "b_data_value_2", "b_data_id_3", "b_data_value_3", "b_data_id_4", "b_data_value_4", "b_data_id_5", "b_data_value_5", "b_target", "b_hotel_url", "b_data_hotelid", "fe_add_htca_summary", "b_from_price_inlined", "b_add_rt_summary", "real_login_signin" ];
return _r_(function(i) {
_i_("3da:2008");
var n = "", r = this.fn;
function a(n) {
return _i_("3da:2359"), n += e[27], r.MN("js_class_prefix", "js-auth_next_step__sms_"), n += [ e[28], r.MC(t[10]), e[29], r.ME(e[30], r.MB, r.MN, null), e[31], r.ME(e[32], r.MB, r.MN, null), e[33], r.ME(e[34], r.MB, r.MN, null), e[35] ].join(""), i.unshift({
fe_is_account_area:e[61],
fe_is_resend_available:e[69],
fe_verify_phone_confirmation_submit_copy:r.MB(t[88]),
js_class_prefix:r.MB(t[10])
}), n = s(n), i.shift(), n += e[134], _r_(n);
}
function o(i) {
_i_("3da:2360"), i += e[59], r.MJ("TWZdJNAHAZeOYZbKBNIPRfOcMXT") && r.MJ(r.track_experiment("TWZdJNAHAZeOYZbKBNIPRfOcMXT")) && (i += e[60], r.MN(t[17], e[61]), i += e[62]), i += e[63], r.MN(t[18], e[64]), i += e[62], r.MN(t[19], void 0), i += e[62], r.MN(t[20], e[65]), i += e[62], r.MN(t[21], void 0), i += e[62], r.MN(t[22], void 0), i += e[62], r.MN(t[23], e[66]), i += e[62], r.MN(t[24], void 0), i += e[62], r.MN(t[25], void 0), i += e[62], r.MN(t[26], void 0), i += e[62], r.MN(t[27], void 0), i += e[62], r.MN(t[28], void 0), i += e[62], r.MN(t[29], void 0), i += e[62], r.MN(t[30], void 0), i += e[62], r.MN(t[31], void 0), i += e[67], r.MN(t[32], e[68]), i += e[63], r.MN(t[33], void 0), i += e[62], r.MN(t[34], void 0), i += e[62], r.MN(t[35], void 0), i += e[62], r.MN(t[36], void 0), i += e[62], r.MN(t[37], void 0), i += e[62], r.MN(t[38], void 0), i += e[62], r.MN(t[39], void 0), i += e[62], r.MN(t[40], void 0), i += e[63], r.MD(t[42]) ? (i += e[60], r.MN(t[41], r.MB(t[42])), i += e[62]) :(i += e[60], r.MN(t[41], void 0), i += e[62]), i += e[63], r.MN(t[43], void 0), i += e[62], r.MN(t[44], void 0), i += e[63], r.MN(t[45], e[69]), i += e[62], r.MN(t[46], e[69]), i += e[62], r.MN(t[47], e[69]), i += e[63], r.MN(t[48], e[69]), i += e[67], r.MN(t[49], void 0), i += e[62], r.MN(t[50], void 0), i += e[63], r.MD(t[51]) && (i += e[60], r.MN(t[20], r.MC(t[51])), i += e[62]), i += e[63], r.MD(t[52]) && (i += e[60], r.MN(t[21], r.MC(t[52])), i += e[62]), i += e[63], r.MD(t[53]) && (i += e[60], r.MN(t[22], r.MC(t[53])), i += e[62]), i += e[63], r.MN(t[54], e[69]), i += e[62], r.MJ(r.MC(t[15]) + "" == "www") && (i += e[60], (r.MJ(r.MC(t[55]) + "" == "index") || r.MJ(r.MC(t[55]) + "" == "city") || r.MJ(r.MC(t[55]) + "" == "region") || r.MJ(r.MC(t[55]) + "" == "country") || r.MJ(r.MC(t[55]) + "" == "airport") || r.MJ(r.MC(t[55]) + "" == "district") || r.MJ(r.MC(t[55]) + "" == "landmark") || r.MJ(r.MC(t[55]) + "" == "searchresults") || r.MJ(r.MC(t[55]) + "" == "hotel") || r.MJ(r.MC(t[55]) + "" == "book")) && r.MJ(r.track_experiment("BBIWPYcYC")) && (i += e[58], r.MN(t[54], e[61]), i += e[60]), i += e[62]), i += e[63];
var n = r.MC(t[56]);
if (r.MJ(n + "" == "primary")) {
i += e[58];
var a = "";
a += [ r.MC(t[18]), e[70] ].join(""), r.MD(t[54]) && (a += e[71]), r.MN(t[18], a), i += e[60];
} else if (r.MJ(n + "" == "secondary")) {
i += e[58];
var a = "";
a += [ r.MC(t[18]), e[72] ].join(""), r.MD(t[54]) && (a += e[71]), r.MN(t[18], a), i += e[60];
} else r.MJ(n + "" == "warning") ? (i += e[58], r.MN(t[18], [ r.MC(t[18]), e[73] ].join("")), i += e[60]) :r.MJ(n + "" == "disabled") ? (i += e[58], r.MN(t[18], [ r.MC(t[18]), e[74] ].join("")), i += e[60]) :r.MJ(n + "" == "primary-small") ? (i += e[58], r.MN(t[18], [ r.MC(t[18]), e[75] ].join("")), i += e[60]) :r.MJ(n + "" == "secondary-small") ? (i += e[58], r.MN(t[18], [ r.MC(t[18]), e[76] ].join("")), i += e[60]) :r.MJ(n + "" == "warning-small") ? (i += e[58], r.MN(t[18], [ r.MC(t[18]), e[77] ].join("")), i += e[60]) :r.MJ(n + "" == "primary-flat") && (i += e[58], r.MN(t[18], [ r.MC(t[18]), e[78] ].join("")), i += e[62]);
if (i += e[63], r.MD(t[17]) && (i += e[79], r.MJ(/^(primary|secondary|warning)$/i.test(r.MB(t[57]))) ? (i += e[58], r.MN(t[33], [ r.MC(t[32]), e[80], r.MC(t[32]), e[81], r.MC(t[57]).toLowerCase() ].join("")), i += e[60]) :(i += e[58], r.MN(t[33], [ r.MC(t[32]), e[80], r.MC(t[32]), e[82] ].join("")), i += e[60]), i += e[83], r.MJ(/^(sm|lg)$/i.test(r.MB(t[58]))) && (i += e[58], r.MN(t[33], [ r.MC(t[33]), e[80], r.MC(t[32]), e[81], r.MC(t[58]).toLowerCase() ].join("")), i += e[60]), i += e[83], r.MD(t[59]) && (i += e[58], r.MN(t[33], [ r.MC(t[33]), e[80], r.MC(t[32]), e[84] ].join("")), i += e[60]), i += e[62]), i += e[63], r.MD(t[60]) && (i += e[60], r.MN(t[23], r.MC(t[60])), i += e[85], r.MJ(/^a$/i.test(r.MC(t[23]))) && r.MN(t[61], e[61]), i += e[60], r.MJ(/^input$/i.test(r.MC(t[23]))) && r.MN(t[62], e[61]), i += e[60], r.MJ(/^button$/i.test(r.MC(t[23]))) && r.MN(t[63], e[61]), i += e[62]), i += e[63], r.MD(t[64]) && (i += e[60], r.MN(t[19], [ e[86], r.MC(t[64]), e[87] ].join("")), i += e[62]), i += e[63], r.MD(t[65]) && (i += e[60], r.MN(t[26], [ e[88], r.MC(t[65]), e[87] ].join("")), i += e[62]), i += e[63], r.MD(t[66]) && (i += e[60], r.MN(t[48], r.MC(t[66])), i += e[62]), i += e[63], r.MD(t[67])) {
i += e[60];
var a = "";
r.MD(t[48]) || (a += r.MC(t[18])), a += [ e[80], r.MC(t[67]) ].join(""), r.MN(t[18], a), i += e[60], r.MD(t[17]) && r.MN(t[33], [ r.MC(t[33]), e[80], r.MC(t[67]) ].join("")), i += e[62];
}
return i += e[63], r.MD(t[68]) && (i += e[60], r.MN(t[28], [ e[89], r.F.entities(r.MC(t[68])), e[87] ].join("")), i += e[62]), i += e[63], r.MD(t[69]) && (i += e[60], r.MN(t[24], [ e[90], r.MC(t[69]), e[87] ].join("")), i += e[62]), i += e[63], r.MD(t[70]) && (i += e[60], r.MN(t[25], r.MC(t[70])), i += e[62]), i += e[63], r.MD(t[71]) && (i += e[60], r.MN(t[29], [ e[91], r.MC(t[71]), e[87] ].join("")), i += e[62]), i += e[63], r.MD(t[72]) && (i += e[27], r.MN(t[31], [ e[92], r.MC(t[72]), e[93], r.MC(t[73]), e[87] ].join("")), i += e[62]), i += e[63], r.MD(t[74]) && (i += e[27], r.MN(t[31], [ r.MC(t[31]), e[94], r.MC(t[74]), e[93], r.MC(t[75]), e[87] ].join("")), i += e[62]), i += e[63], r.MD(t[76]) && (i += e[27], r.MN(t[31], [ r.MC(t[31]), e[94], r.MC(t[76]), e[93], r.MC(t[77]), e[87] ].join("")), i += e[62]), i += e[63], r.MD(t[78]) && (i += e[27], r.MN(t[31], [ r.MC(t[31]), e[94], r.MC(t[78]), e[93], r.MC(t[79]), e[87] ].join("")), i += e[62]), i += e[63], r.MD(t[80]) && (i += e[27], r.MN(t[31], [ r.MC(t[31]), e[94], r.MC(t[80]), e[93], r.MC(t[81]), e[87] ].join("")), i += e[62]), i += e[63], r.MD(t[82]) && (i += e[60], r.MN(t[30], [ e[95], r.MC(t[82]), e[87] ].join("")), i += e[62]), i += e[59], r.MD(t[83]) && (i += e[60], r.MN(t[49], [ e[96], r.MC(t[83]), e[87] ].join("")), i += e[62]), i += e[63], r.MD(t[84]) && (i += e[60], r.MN(t[50], [ e[97], r.MC(t[84]), e[87] ].join("")), i += e[62]), i += e[63], r.MD(t[17]) ? (i += e[60], i += [ e[98], r.MC(t[23]), e[99], r.MB(t[33]), e[100] ].join(""), r.MD(t[45]) && (i += [ r.MC(t[26]), e[80] ].join("")), i += [ r.MC(t[19]), e[80] ].join(""), (r.MJ(r.MB(t[62])) || r.MJ(r.MB(t[63]))) && (i += [ r.MC(t[24]), e[80] ].join("")), i += [ r.MC(t[25]), e[80], r.MC(t[28]), e[80], r.MC(t[29]), e[80], r.MC(t[31]), e[80], r.MC(t[30]), e[80], r.MC(t[49]), e[80], r.MC(t[50]), e[80] ].join(""), r.MD(t[85]) && (i += e[101]), r.MD(t[41]) && (i += [ e[102], r.MB(t[41]), e[100] ].join("")), r.MD(t[62]) ? i += [ e[103], r.MC(t[20]), e[104] ].join("") :(i += [ e[105], r.MC(t[20]), e[106] ].join(""), r.MD(t[21]) && (i += e[107], r.MD(t[86]) && (i += e[108]), i += [ e[109], r.MC(t[21]), e[106] ].join("")), r.MD(t[87]) && (i += e[110]), i += [ e[111], r.MC(t[23]), e[112] ].join("")), i += e[62]) :(i += [ e[113], r.MC(t[23]), e[114], r.MC(t[18]), e[115], r.MC(t[26]), e[60], r.MC(t[19]), e[60], r.MC(t[24]), e[60], r.MC(t[25]), e[60], r.MC(t[28]), e[27], r.MC(t[29]), e[60], r.MC(t[31]), e[60], r.MC(t[30]), e[60], r.MC(t[49]), e[60], r.MC(t[50]), e[85] ].join(""), r.MD(t[85]) && (i += e[116]), i += e[117], r.MD(t[41]) && (i += [ e[118], r.MB(t[41]), e[119] ].join("")), i += e[85], r.MJ(r.MC(t[23]) + "" == "input") ? i += [ e[120], r.MC(t[20]), e[121] ].join("") :(i += [ e[122], r.MC(t[20]), e[123] ].join(""), r.MD(t[21]) && (i += e[124], r.MD(t[86]) && (i += e[108]), i += [ e[109], r.MC(t[21]), e[125] ].join("")), i += e[126], r.MD(t[87]) && (i += e[127]), i += [ e[128], r.MC(t[23]), e[129] ].join("")), i += e[62]), i += e[62], _r_(i);
}
function _(t) {
return _i_("3da:2361"), t += [ e[135], r.ME(e[136], r.MB, r.MN, null), e[137] ].join(""), _r_(t);
}
function s(n) {
return _i_("3da:2362"), n += [ e[36], r.MC(t[10]), e[37] ].join(""), r.MD(t[11]) && (n += e[38]), n += [ e[39], r.ME(e[40], r.MB, r.MN, null), e[41] ].join(""), r.MD(t[12]) && (n += e[42]), n += [ e[43], r.MC(t[10]), e[44] ].join(""), r.MD(t[12]) && (n += e[45]), n += e[46], r.MD(t[13]) && (n += [ e[47], r.MC(t[10]), e[48], r.ME(e[49], r.MB, r.MN, null), e[50], r.ME(e[49], r.MB, r.MN, null), e[51] ].join("")), n += e[52], r.MD(t[16]) ? (n += [ e[53], r.MC(t[14]), e[54] ].join(""), r.MJ(r.MC(t[15]) + "" == "mdot") && (n += e[55]), n += [ e[56], r.MC(t[10]), e[57] ].join("")) :(n += e[58], i.unshift({
b_attr_type:e[130],
b_extra_classes:e[131],
b_tag:e[66],
b_text:r.MB(t[14]),
b_type:e[132]
}), n = o(n), i.shift(), n += e[60]), n += e[133], _r_(n);
}
function l(i) {
return _i_("3da:2363"), i += [ e[6], r.MC(t[1]), e[7] ].join(""), _r_(i);
}
function d(n) {
_i_("3da:2364"), n += [ e[9], r.MC(t[4]), e[10], r.ME(e[11], r.MB, r.MN, null), e[12], r.ME(e[13], r.MB, r.MN, null), e[14], r.MC(t[5]), e[15], r.ME(e[16], r.MB, r.MN, null), e[17], r.ME(e[18], r.MB, r.MN, null), e[19] ].join("");
var a = r.MC(t[6]) || [];
i.unshift(null);
for (var o = 1, _ = a.length; _ >= o; o++) i[0] = a[o - 1], n += [ e[20], r.F.entities(r.MC(t[7])), e[21], r.F.entities(r.MC(t[8])), e[22], r.MC(t[9]), e[23] ].join("");
return i.shift(), n += [ e[24], r.ME(e[25], r.MB, r.MN, null), e[26] ].join(""), _r_(n);
}
n += e[0], r.MD(t[0]) && (n += [ e[1], r.ME(e[2], r.MB, r.MN, null), e[3] ].join("")), n += e[4], r.MD(t[2]) && (n += e[5], n = l(n), n += e[8]), n += e[4];
var c = r.MB(t[3]);
return r.MJ(c + "" == "waiting_for_phone_number") ? (n = d(n), n += e[5]) :r.MJ(c + "" == "sending_email_pin_code") ? (n = d(n), n += e[5]) :r.MJ(c + "" == "pending_email_verification") ? (n = a(n), n += e[5]) :r.MJ(c + "" == "verifying_email") ? (n = a(n), n += e[5]) :r.MJ(c + "" == "authenticated") ? (n = a(n), n += e[5]) :(n = d(n), n += e[8]), n += e[4], n = _(n), n += e[7], _r_(n);
});
}()), booking.jstmpl("auth_next_step__email_errors", function() {
_i_("3da:1090");
var e = [ '\n    <div class="alert alert-error alert-displayed" role="alert">\n        ', "\n    </div>\n" ], t = [ "message" ];
return _r_(function(i) {
_i_("3da:2009");
var n = "", r = this.fn;
return n += [ e[0], r.MC(t[0]), e[1] ].join(""), _r_(n);
});
}()), booking.jstmpl("auth_next_step__email_footer", function() {
_i_("3da:1091");
var e = [ '\n    <div>\n        <div class="auth-next-step__footer-buttons-left">\n        </div>\n\n        <div class="auth-next-step__footer-buttons-right">\n            <a href="javascript:void(0)"\n               data-dismiss>', "/private/dda_reset_password_cancel_button/name", "</a>\n        </div>\n    </div>\n" ];
return _r_(function(t) {
_i_("3da:2010");
var i = "", n = this.fn;
return i += [ e[0], n.ME(e[1], n.MB, n.MN, null), e[2] ].join(""), _r_(i);
});
}()), booking.jstmpl("auth_next_step__email_send_recovery_code", function() {
_i_("3da:1092");
var e = [ '\n    <div>\n        <form action="', '" method="POST" target="log_tar">\n            <h3>', "/private/auth_2fa_recovery_flow_confirm_phone_number_header/name", '</h3>\n\n            <div class="clearfix"></div>\n\n            <label class="auth-next-step__section auth-next-step__section--compact">\n                ', "/private/auth_2fa_recovery_flow_confirm_phone_number_explanation/name", '\n            </label>\n\n            <div data-component="input-phone-country" class="auth-next_step__input-phone-country js-companyjoin-field-phone" data-phone-country-default="', '">\n                <label>\n                    ', "/private/auth_2fa_recovery_flow_confirm_phone_number_input_label/name", '\n                </label>\n\n                <input type="tel"\n                    class="u-phone auth-next-step-email__verify-phone-input"\n                    name="phone_for_2fa"\n                    value=""\n                    maxlength="40"\n                    placeholder="', "/private/acc_settings_section_2fa_enrollment_phone_number_field_placeholder/name", '"\n                    required\n                    data-phone-input\n                    >\n\n                <select class="auth-next-step-email__phone-country-select" tabindex="-1" data-phone-country>\n                    ', '\n                        <option value="', '" data-calling-code="', '">', "</option>\n                    ", '\n                </select>\n            </div>\n\n            <input type="hidden" name="op" value="send_recovery_code">\n\n            <button type="submit" class="bootstrapped-input btn btn-primary btn_flat-wide" data-confirm-phone>\n                ', "/private/auth_2fa_recovery_flow_confirm_phone_number_cta/name", "\n            </button>\n        </form>\n    </div>\n" ], t = [ "b_form_action", "b_guest_country", "b_country_code_to_phone_prefix", "cc", "mc", "name" ];
return _r_(function(i) {
_i_("3da:2011");
var n = "", r = this.fn;
n += [ e[0], r.MC(t[0]), e[1], r.ME(e[2], r.MB, r.MN, null), e[3], r.ME(e[4], r.MB, r.MN, null), e[5], r.MC(t[1]), e[6], r.ME(e[7], r.MB, r.MN, null), e[8], r.ME(e[9], r.MB, r.MN, null), e[10] ].join("");
var a = r.MC(t[2]) || [];
i.unshift(null);
for (var o = 1, _ = a.length; _ >= o; o++) i[0] = a[o - 1], n += [ e[11], r.F.entities(r.MC(t[3])), e[12], r.F.entities(r.MC(t[4])), e[13], r.MC(t[5]), e[14] ].join("");
return i.shift(), n += [ e[15], r.ME(e[16], r.MB, r.MN, null), e[17] ].join(""), _r_(n);
});
}()), booking.jstmpl("auth_next_step__email_verify_code", function() {
_i_("3da:1093");
var e = [ "\n    ", '\n\n    <form class="', 'verify_phone_form form-inline__no-block" action="#" method="POST" data-sign-in>\n\n        <h3>', "/private/auth_2fa_recovery_flow_code_sent_header/name", '</h3>\n\n        <label class="auth-next-step__section auth-next-step__section--compact">\n            ', "/private/auth_2fa_recovery_flow_code_sent_explanation/name", '\n        </label>\n\n        <label class="auth-next-step__section auth-next-step__section--bold">\n            ', "/private/auth_2fa_recovery_flow_code_sent_status/name", '\n        </label>\n\n        <input type="hidden" name="recovery_2fa" value="1">\n\n        ', '<div class="clearfix"></div>\n\n<div class="', "verify_phone_confirmation_code_options ", " verify_phone_confirmation_code_options--compact ", '">\n	', "/private/auth_next_step_sms_enter_code_cta/name", '\n\n	<div class="clearfix"></div>\n\n    ', '\n        <span style="color: red;">\n            For KVMs, you can use 123456\n        </span>\n        <div class="clearfix"></div>\n    ', '\n\n	<label class="verify_phone_confirmation_label">\n		<input type="text" name="confirmation_code" maxlength="80"\n            class="auth_next_step__verify_phone_confirmation_code ', 'verify_phone_confirmation_code bootstrapped-input input-text input-block-level"\n            data-validation="required{@Please enter a verification code}|numeric"\n            ', ' \n                value="123456"\n            ', "\n            >\n	</label>\n\n    ", '\n        <div class="auth_next_step__send_verification_code_actions">\n            <div\n                class="', 'send_verification_code auth_next_step__send_verification_code"\n                data-resend-copy="', "/private/auth_next_step_send_code_cta/name", '"\n            >', "</div>\n        </div>\n    ", '\n\n	<div class="clearfix"></div>\n\n	', '\n		<input type="submit" value="', '" class="', "bigbluebutton", " btn btn_flat-wide  bootstrapped-input btn btn-primary ", 'send_verification_code_submit">\n	', "\n		", "\n\n\n\n", "\n	", "1", "\n", "\n\n", "b-button", "Button Text should be overriden", "button", "\n\n\n", "c-button", "0", " b-button_primary ", "new_flat_cta", " b-button_secondary ", " b-button_warning", " b-button_disabled", " b-button_primary b-button_small", " b-button_secondary b-button_small", " b-button_warning b-button_small", " b-button_primary b-button_flat", "\n	\n	", " ", "--", "--primary", "\n\n	\n	", "--disabled", "\n\n	", 'id="', '"', 'href="', 'data-title="', 'type="', 'rel="', "data-", '="', " data-", 'target="', 'hotelUrl="', 'data-hotelid="', "<", ' class="', '" ', "data-hcta-summary ", 'data-track-event="', 'value="', '"/> ', '> <span class="b-button__text">', "</span> ", '<span class="b-button__from-text" ', 'style="display:inline-block"', ">", '<span class="b-button__from-text book_now_rt_summary g-hidden"></span> ', "</", "> ", "\n<", '\n	class="', '"\n	', "\n		data-hcta-summary\n	", "\n\n    ", '\n        data-track-event="', '"\n    ', '\n		value="', '"/>\n	', '\n	>\n		<span class="b-button__text">', "</span>\n\n		", '\n				<span class="b-button__from-text" ', "</span>\n		", "\n\n		", '\n				<span class="b-button__from-text book_now_rt_summary g-hidden"></span>\n		', "\n\n		</", ">\n	", "submit", "<TMPL_IF [% $b_site_type eq 'mdot' %]>bigbluebutton</TMPL_IF><TMPL_V js_class_prefix>send_verification_code_submit <TMPL_V js_class_prefix>send_verification_code_submit--same_page", "primary", "\n\n</div>\n", "\n    </form>\n" ], t = [ "js_class_prefix", "fe_confirmation_code_compact", "b_dev_server", "fe_is_resend_available", "fe_verify_phone_confirmation_submit_copy", "b_site_type", "fe_is_account_area", "fe_run_global_button_normalization_tech", "b_btn_class", "b_btn_id", "b_btn_text", "b_btn_outside_text", "b_btn_caption_text", "b_btn_tag", "b_btn_attr_type", "b_btn_attr", "b_btn_href", "b_btn_extra_classes", "b_btn_title", "b_btn_rel", "b_btn_target", "b_btn_data", "fe_cbtn_comp_class", "fe_cbtn_class", "fe_cbtn_type", "fe_cbtn_size", "fe_cbtn_disabled", "fe_cbtn_icon_only", "fe_cbtn_icon_left", "fe_cbtn_icon_right", "fe_cbtn_track_exp", "fe_cbtn_track_event", "fe_btn_track_event", "fe_cbtn_track_goal", "fe_cbtn_track_stage", "fe_cbtn_is_anchor", "fe_cbtn_is_input", "fe_cbtn_is_button", "fe_cbtn_no_style", "b_btn_hotel_url", "b_btn_data_hotelid", "b_text", "b_outside_text", "b_caption_text", "fe_new_flat_cta_class", "b_action", "b_type", "fe_btn_type", "fe_btn_size", "fe_disabled", "b_tag", "fe_btn_is_anchor", "fe_btn_is_input", "fe_btn_is_button", "b_id", "b_href", "fe_btn_no_style", "b_extra_classes", "b_title", "b_attr_type", "b_attr", "b_rel", "b_data_id", "b_data_value", "b_data_id_2", "b_data_value_2", "b_data_id_3", "b_data_value_3", "b_data_id_4", "b_data_value_4", "b_data_id_5", "b_data_value_5", "b_target", "b_hotel_url", "b_data_hotelid", "fe_add_htca_summary", "b_from_price_inlined", "b_add_rt_summary", "real_login_signin" ];
return _r_(function(i) {
_i_("3da:2012");
var n = "", r = this.fn;
function a(i) {
_i_("3da:2365"), i += e[32], r.MJ("TWZdJNAHAZeOYZbKBNIPRfOcMXT") && r.MJ(r.track_experiment("TWZdJNAHAZeOYZbKBNIPRfOcMXT")) && (i += e[33], r.MN(t[7], e[34]), i += e[35]), i += e[36], r.MN(t[8], e[37]), i += e[35], r.MN(t[9], void 0), i += e[35], r.MN(t[10], e[38]), i += e[35], r.MN(t[11], void 0), i += e[35], r.MN(t[12], void 0), i += e[35], r.MN(t[13], e[39]), i += e[35], r.MN(t[14], void 0), i += e[35], r.MN(t[15], void 0), i += e[35], r.MN(t[16], void 0), i += e[35], r.MN(t[17], void 0), i += e[35], r.MN(t[18], void 0), i += e[35], r.MN(t[19], void 0), i += e[35], r.MN(t[20], void 0), i += e[35], r.MN(t[21], void 0), i += e[40], r.MN(t[22], e[41]), i += e[36], r.MN(t[23], void 0), i += e[35], r.MN(t[24], void 0), i += e[35], r.MN(t[25], void 0), i += e[35], r.MN(t[26], void 0), i += e[35], r.MN(t[27], void 0), i += e[35], r.MN(t[28], void 0), i += e[35], r.MN(t[29], void 0), i += e[35], r.MN(t[30], void 0), i += e[36], r.MD(t[32]) ? (i += e[33], r.MN(t[31], r.MB(t[32])), i += e[35]) :(i += e[33], r.MN(t[31], void 0), i += e[35]), i += e[36], r.MN(t[33], void 0), i += e[35], r.MN(t[34], void 0), i += e[36], r.MN(t[35], e[42]), i += e[35], r.MN(t[36], e[42]), i += e[35], r.MN(t[37], e[42]), i += e[36], r.MN(t[38], e[42]), i += e[40], r.MN(t[39], void 0), i += e[35], r.MN(t[40], void 0), i += e[36], r.MD(t[41]) && (i += e[33], r.MN(t[10], r.MC(t[41])), i += e[35]), i += e[36], r.MD(t[42]) && (i += e[33], r.MN(t[11], r.MC(t[42])), i += e[35]), i += e[36], r.MD(t[43]) && (i += e[33], r.MN(t[12], r.MC(t[43])), i += e[35]), i += e[36], r.MN(t[44], e[42]), i += e[35], r.MJ(r.MC(t[5]) + "" == "www") && (i += e[33], (r.MJ(r.MC(t[45]) + "" == "index") || r.MJ(r.MC(t[45]) + "" == "city") || r.MJ(r.MC(t[45]) + "" == "region") || r.MJ(r.MC(t[45]) + "" == "country") || r.MJ(r.MC(t[45]) + "" == "airport") || r.MJ(r.MC(t[45]) + "" == "district") || r.MJ(r.MC(t[45]) + "" == "landmark") || r.MJ(r.MC(t[45]) + "" == "searchresults") || r.MJ(r.MC(t[45]) + "" == "hotel") || r.MJ(r.MC(t[45]) + "" == "book")) && r.MJ(r.track_experiment("BBIWPYcYC")) && (i += e[31], r.MN(t[44], e[34]), i += e[33]), i += e[35]), i += e[36];
var n = r.MC(t[46]);
if (r.MJ(n + "" == "primary")) {
i += e[31];
var a = "";
a += [ r.MC(t[8]), e[43] ].join(""), r.MD(t[44]) && (a += e[44]), r.MN(t[8], a), i += e[33];
} else if (r.MJ(n + "" == "secondary")) {
i += e[31];
var a = "";
a += [ r.MC(t[8]), e[45] ].join(""), r.MD(t[44]) && (a += e[44]), r.MN(t[8], a), i += e[33];
} else r.MJ(n + "" == "warning") ? (i += e[31], r.MN(t[8], [ r.MC(t[8]), e[46] ].join("")), i += e[33]) :r.MJ(n + "" == "disabled") ? (i += e[31], r.MN(t[8], [ r.MC(t[8]), e[47] ].join("")), i += e[33]) :r.MJ(n + "" == "primary-small") ? (i += e[31], r.MN(t[8], [ r.MC(t[8]), e[48] ].join("")), i += e[33]) :r.MJ(n + "" == "secondary-small") ? (i += e[31], r.MN(t[8], [ r.MC(t[8]), e[49] ].join("")), i += e[33]) :r.MJ(n + "" == "warning-small") ? (i += e[31], r.MN(t[8], [ r.MC(t[8]), e[50] ].join("")), i += e[33]) :r.MJ(n + "" == "primary-flat") && (i += e[31], r.MN(t[8], [ r.MC(t[8]), e[51] ].join("")), i += e[35]);
if (i += e[36], r.MD(t[7]) && (i += e[52], r.MJ(/^(primary|secondary|warning)$/i.test(r.MB(t[47]))) ? (i += e[31], r.MN(t[23], [ r.MC(t[22]), e[53], r.MC(t[22]), e[54], r.MC(t[47]).toLowerCase() ].join("")), i += e[33]) :(i += e[31], r.MN(t[23], [ r.MC(t[22]), e[53], r.MC(t[22]), e[55] ].join("")), i += e[33]), i += e[56], r.MJ(/^(sm|lg)$/i.test(r.MB(t[48]))) && (i += e[31], r.MN(t[23], [ r.MC(t[23]), e[53], r.MC(t[22]), e[54], r.MC(t[48]).toLowerCase() ].join("")), i += e[33]), i += e[56], r.MD(t[49]) && (i += e[31], r.MN(t[23], [ r.MC(t[23]), e[53], r.MC(t[22]), e[57] ].join("")), i += e[33]), i += e[35]), i += e[36], r.MD(t[50]) && (i += e[33], r.MN(t[13], r.MC(t[50])), i += e[58], r.MJ(/^a$/i.test(r.MC(t[13]))) && r.MN(t[51], e[34]), i += e[33], r.MJ(/^input$/i.test(r.MC(t[13]))) && r.MN(t[52], e[34]), i += e[33], r.MJ(/^button$/i.test(r.MC(t[13]))) && r.MN(t[53], e[34]), i += e[35]), i += e[36], r.MD(t[54]) && (i += e[33], r.MN(t[9], [ e[59], r.MC(t[54]), e[60] ].join("")), i += e[35]), i += e[36], r.MD(t[55]) && (i += e[33], r.MN(t[16], [ e[61], r.MC(t[55]), e[60] ].join("")), i += e[35]), i += e[36], r.MD(t[56]) && (i += e[33], r.MN(t[38], r.MC(t[56])), i += e[35]), i += e[36], r.MD(t[57])) {
i += e[33];
var a = "";
r.MD(t[38]) || (a += r.MC(t[8])), a += [ e[53], r.MC(t[57]) ].join(""), r.MN(t[8], a), i += e[33], r.MD(t[7]) && r.MN(t[23], [ r.MC(t[23]), e[53], r.MC(t[57]) ].join("")), i += e[35];
}
return i += e[36], r.MD(t[58]) && (i += e[33], r.MN(t[18], [ e[62], r.F.entities(r.MC(t[58])), e[60] ].join("")), i += e[35]), i += e[36], r.MD(t[59]) && (i += e[33], r.MN(t[14], [ e[63], r.MC(t[59]), e[60] ].join("")), i += e[35]), i += e[36], r.MD(t[60]) && (i += e[33], r.MN(t[15], r.MC(t[60])), i += e[35]), i += e[36], r.MD(t[61]) && (i += e[33], r.MN(t[19], [ e[64], r.MC(t[61]), e[60] ].join("")), i += e[35]), i += e[36], r.MD(t[62]) && (i += e[0], r.MN(t[21], [ e[65], r.MC(t[62]), e[66], r.MC(t[63]), e[60] ].join("")), i += e[35]), i += e[36], r.MD(t[64]) && (i += e[0], r.MN(t[21], [ r.MC(t[21]), e[67], r.MC(t[64]), e[66], r.MC(t[65]), e[60] ].join("")), i += e[35]), i += e[36], r.MD(t[66]) && (i += e[0], r.MN(t[21], [ r.MC(t[21]), e[67], r.MC(t[66]), e[66], r.MC(t[67]), e[60] ].join("")), i += e[35]), i += e[36], r.MD(t[68]) && (i += e[0], r.MN(t[21], [ r.MC(t[21]), e[67], r.MC(t[68]), e[66], r.MC(t[69]), e[60] ].join("")), i += e[35]), i += e[36], r.MD(t[70]) && (i += e[0], r.MN(t[21], [ r.MC(t[21]), e[67], r.MC(t[70]), e[66], r.MC(t[71]), e[60] ].join("")), i += e[35]), i += e[36], r.MD(t[72]) && (i += e[33], r.MN(t[20], [ e[68], r.MC(t[72]), e[60] ].join("")), i += e[35]), i += e[32], r.MD(t[73]) && (i += e[33], r.MN(t[39], [ e[69], r.MC(t[73]), e[60] ].join("")), i += e[35]), i += e[36], r.MD(t[74]) && (i += e[33], r.MN(t[40], [ e[70], r.MC(t[74]), e[60] ].join("")), i += e[35]), i += e[36], r.MD(t[7]) ? (i += e[33], i += [ e[71], r.MC(t[13]), e[72], r.MB(t[23]), e[73] ].join(""), r.MD(t[35]) && (i += [ r.MC(t[16]), e[53] ].join("")), i += [ r.MC(t[9]), e[53] ].join(""), (r.MJ(r.MB(t[52])) || r.MJ(r.MB(t[53]))) && (i += [ r.MC(t[14]), e[53] ].join("")), i += [ r.MC(t[15]), e[53], r.MC(t[18]), e[53], r.MC(t[19]), e[53], r.MC(t[21]), e[53], r.MC(t[20]), e[53], r.MC(t[39]), e[53], r.MC(t[40]), e[53] ].join(""), r.MD(t[75]) && (i += e[74]), r.MD(t[31]) && (i += [ e[75], r.MB(t[31]), e[73] ].join("")), r.MD(t[52]) ? i += [ e[76], r.MC(t[10]), e[77] ].join("") :(i += [ e[78], r.MC(t[10]), e[79] ].join(""), r.MD(t[11]) && (i += e[80], r.MD(t[76]) && (i += e[81]), i += [ e[82], r.MC(t[11]), e[79] ].join("")), r.MD(t[77]) && (i += e[83]), i += [ e[84], r.MC(t[13]), e[85] ].join("")), i += e[35]) :(i += [ e[86], r.MC(t[13]), e[87], r.MC(t[8]), e[88], r.MC(t[16]), e[33], r.MC(t[9]), e[33], r.MC(t[14]), e[33], r.MC(t[15]), e[33], r.MC(t[18]), e[0], r.MC(t[19]), e[33], r.MC(t[21]), e[33], r.MC(t[20]), e[33], r.MC(t[39]), e[33], r.MC(t[40]), e[58] ].join(""), r.MD(t[75]) && (i += e[89]), i += e[90], r.MD(t[31]) && (i += [ e[91], r.MB(t[31]), e[92] ].join("")), i += e[58], r.MJ(r.MC(t[13]) + "" == "input") ? i += [ e[93], r.MC(t[10]), e[94] ].join("") :(i += [ e[95], r.MC(t[10]), e[96] ].join(""), r.MD(t[11]) && (i += e[97], r.MD(t[76]) && (i += e[81]), i += [ e[82], r.MC(t[11]), e[98] ].join("")), i += e[99], r.MD(t[77]) && (i += e[100]), i += [ e[101], r.MC(t[13]), e[102] ].join("")), i += e[35]), i += e[35], _r_(i);
}
function o(n) {
return _i_("3da:2366"), n += [ e[9], r.MC(t[0]), e[10] ].join(""), r.MD(t[1]) && (n += e[11]), n += [ e[12], r.ME(e[13], r.MB, r.MN, null), e[14] ].join(""), r.MD(t[2]) && (n += e[15]), n += [ e[16], r.MC(t[0]), e[17] ].join(""), r.MD(t[2]) && (n += e[18]), n += e[19], r.MD(t[3]) && (n += [ e[20], r.MC(t[0]), e[21], r.ME(e[22], r.MB, r.MN, null), e[23], r.ME(e[22], r.MB, r.MN, null), e[24] ].join("")), n += e[25], r.MD(t[6]) ? (n += [ e[26], r.MC(t[4]), e[27] ].join(""), r.MJ(r.MC(t[5]) + "" == "mdot") && (n += e[28]), n += [ e[29], r.MC(t[0]), e[30] ].join("")) :(n += e[31], i.unshift({
b_attr_type:e[103],
b_extra_classes:e[104],
b_tag:e[39],
b_text:r.MB(t[4]),
b_type:e[105]
}), n = a(n), i.shift(), n += e[33]), n += e[106], _r_(n);
}
return n += e[0], r.MN("js_class_prefix", "js-auth_next_step__sms_"), n += [ e[1], r.MC(t[0]), e[2], r.ME(e[3], r.MB, r.MN, null), e[4], r.ME(e[5], r.MB, r.MN, null), e[6], r.ME(e[7], r.MB, r.MN, null), e[8] ].join(""), i.unshift({
fe_is_account_area:e[34],
fe_is_resend_available:e[42],
fe_verify_phone_confirmation_submit_copy:r.MB(t[78]),
js_class_prefix:r.MB(t[0])
}), n = o(n), i.shift(), n += e[107], _r_(n);
});
}()), _r_();
}), B.define("utils/throttled", function(e, t, i) {
_i_("3da:165"), i.exports = function(e, t) {
_i_("3da:914");
var i, n = 0;
function r() {
_i_("3da:1374");
for (var a = this, o = new Array(arguments.length), _ = 0, s = arguments.length; s > _; _++) o[_] = arguments[_];
var l = +new Date();
if (n && clearTimeout(n), t > l - i) return n = setTimeout(function() {
_i_("3da:2764"), r.apply(a, o), _r_();
}, t), _r_();
i = l, setTimeout(function() {
_i_("3da:2367"), e.apply(a, o), _r_();
}), _r_();
}
return _r_(r);
}, _r_();
}), B.when({
condition:B.env.b_run_MRLLaMCVCMDEUWEVSGFGPOAeUC
}).run(function(e) {
_i_("3da:166");
var t = "MRLLaMCVCMDEUWEVSGFGPOAeUC", i = function() {
_i_("3da:915"), window.fbAsyncInit = function() {
_i_("3da:2013");
var e = 0 === parseInt(B.env.auth_level, 10), i = "mdot" === B.env.b_site_type;
FB.init({
appId:"210068525731476",
xfbml:!0,
version:"v2.2"
});
function n(n) {
_i_("3da:2368"), "connected" === n.status ? e ? i ? B.et.stage(t, 5) :B.et.stage(t, 1) :i ? B.et.stage(t, 6) :B.et.stage(t, 2) :"not_authorized" === n.status && (e ? i ? B.et.stage(t, 7) :B.et.stage(t, 3) :i ? B.et.stage(t, 8) :B.et.stage(t, 4)), _r_();
}
FB.getLoginStatus(function(e) {
_i_("3da:2665"), n(e), _r_();
}), _r_();
}, function(e, t, i) {
_i_("3da:2014");
var n, r = e.getElementsByTagName(t)[0];
e.getElementById(i) || (n = e.createElement(t), n.id = i, n.src = "//connect.facebook.net/en_US/sdk.js", r.parentNode.insertBefore(n, r)), _r_();
}(document, "script", "facebook-jssdk"), _r_();
};
B.when({
events:"auth-dialog-second:show",
experiment:t
}).run(i), B.when({
action:[ "mysettings", "myreservations", "login", "mydashboard", "myreports", "reviewtimeline", "insiderguides", "mybooking" ],
experiment:t
}).run(i), _r_();
}), function(e, t) {
_i_("3da:167"), t.ensureNamespaceExists(sNSStartup), t[sNSStartup].bookingSticker = function() {
_i_("3da:916");
var i, n, r, a, o, _, s, l, d, c, u, h, f, p, g, m = 0;
t[sNSStartup].bookingSticker.stickToZIndex = "undefined" == typeof t[sNSStartup].bookingSticker.stickToZIndex ? 999 :t[sNSStartup].bookingSticker.stickToZIndex, t[sNSStartup].bookingSticker.stickedElements = "undefined" == typeof t[sNSStartup].bookingSticker.stickedElements ? [] :t[sNSStartup].bookingSticker.stickedElements, t[sNSStartup].bookingSticker.stickers = "undefined" == typeof t[sNSStartup].bookingSticker.stickers ? [] :t[sNSStartup].bookingSticker.stickers;
var v = function(e) {
_i_("3da:2015"), a.scrollTop() + m > f - n.data("stick-to-offset") && y(), a.scrollTop() + m <= f - n.data("stick-to-offset") && w(), _r_();
}, b = function(e) {
_i_("3da:2016"), n.css("width", "auto"), r.css("width", "auto").html(n.html()), r.is(":visible") ? (n.css("width", r.width()), M(r)) :(n.css("width", n.width()), M(n)), E(), v(), _r_();
}, y = function() {
if (_i_("3da:2017"), (-parseInt(n.css("top"), 10) || 0) < parseInt(n.height(), 10) && -1 === t[sNSStartup].bookingSticker.stickedElements.indexOf(n) && (k(), x()), p && a.scrollTop() + parseInt(n.height(), 10) + n.data("stick-to-offset") > E()) return n.css({
top:-(a.scrollTop() + parseInt(n.height(), 10) - E())
}), -parseInt(n.css("top"), 10) > parseInt(n.height(), 10) && (C(), x()), _r_();
if (p) return n.css({
top:n.data("stick-to-offset")
}), _r_();
return M(n), n.addClass("sticked").css({
top:n.data("stick-to-offset"),
"z-index":t[sNSStartup].bookingSticker.stickToZIndex
}).before(r), t[sNSStartup].bookingSticker.stickToZIndex--, p = !0, k(), x(), B.hotel.Events && B.events.emit(B.hotel.Events.RT.STICKY_STUCK, n), _r_();
}, w = function() {
if (_i_("3da:2018"), !p) return _r_();
return n.removeClass("sticked").css({
top:u,
"z-index":h
}), r.remove(), t[sNSStartup].bookingSticker.stickToZIndex++, p = !1, C(), x(), B.hotel.Events && B.events.emit(B.hotel.Events.RT.STICKY_RELEASE, n), _r_();
}, k = function() {
_i_("3da:2019"), -1 === t[sNSStartup].bookingSticker.stickedElements.indexOf(n) && (t[sNSStartup].bookingSticker.stickedElements.push(n), S()), _r_();
}, C = function() {
_i_("3da:2020");
var e = t[sNSStartup].bookingSticker.stickedElements.indexOf(n);
-1 !== e && (t[sNSStartup].bookingSticker.stickedElements.splice(e, 1), S()), _r_();
}, S = function() {
_i_("3da:2021"), t[sNSStartup].bookingSticker.stickedElements.sort(function(e, t) {
if (_i_("3da:2666"), e.data("elem-original-offset-top") > t.data("elem-original-offset-top")) return _r_(1);
if (e.data("elem-original-offset-top") < t.data("elem-original-offset-top")) return _r_(-1);
return _r_(0);
}), _r_();
}, x = function() {
if (_i_("3da:2022"), t[sNSStartup].bookingSticker.stickedElements.length > 0) for (var e = 0; e < t[sNSStartup].bookingSticker.stickedElements.length; e++) {
var i = t[sNSStartup].bookingSticker.stickedElements[e], n = i.data("initial-offset") || 0;
if (i.data("stick-to-offset", n), e > 0) {
for (var r = e, a = e - 1, o = n; a >= 0; ) o += t[sNSStartup].bookingSticker.stickedElements[a].outerHeight(), a--;
t[sNSStartup].bookingSticker.stickedElements[r].data("stick-to-offset", o);
}
}
_r_();
}, E = function() {
_i_("3da:2023");
var e = i && i.offset && i.offset();
return d = e ? "html" === i.selector ? 0 :parseInt(e.top, 10) :0, o = parseInt(i.css("border-bottom-width"), 10), s = parseInt(i.css("padding-bottom"), 10), _ = d + parseInt(i.height(), 10) + s + o, _r_(_);
}, M = function(t) {
_i_("3da:2024");
var i = e(t), r = [ "inline", "inline-block", "table-caption", "table-cell", "table-column", "table-column-group", "table-footer-group", "table-header-group", "table-row", "table-row-group" ];
n.css({
width:i.width()
}), r.indexOf(i.css("display")) > 1 && n.find("td, th").each(function(t, n) {
_i_("3da:2842");
var r = e(i.find("td, th").get(t));
e(n).css({
width:r.width()
}), _r_();
}), _r_();
}, T = function() {
_i_("3da:2025"), a.bind({
scroll:v,
resize:b,
load:b
}), _r_();
}, N = function() {
_i_("3da:2026"), f = r.is(":visible") ? parseInt(r.offset().top, 10) :parseInt(n.offset().top, 10), b(), x(), v(), _r_();
}, A = function(o, _, s) {
if (_i_("3da:2027"), i = e(_ ? _ :"html"), l = parseInt(i.height(), 10), n = e(o), c = parseInt(n.height(), 10), s = s || {}, B.et.track("NAFQOTIPPQFFNcJGOaT") && (g = s.hideElement || !1), !n.length) return _r_();
if (c >= l) return _r_();
var d = t[sNSStartup].bookingSticker.stickers;
-1 === d.indexOf(this) && d.push(this), a = e(window), elemOriginalCSSDisplay = n.css("display"), emOriginalCSSTop = n.css("top"), h = n.css("z-index"), E(), f = B.et.track("NAFQOTIPPQFFNcJGOaT") && g ? parseInt(e(g).offset().top, 10) :parseInt(n.offset().top, 10), n.data("elem-original-offset-top", f), n.data("stick-to-offset", 0), n.data("initial-offset", s.initialOffset), r = n.clone(!1).css({
visibility:"hidden"
}).addClass("sticked-placeholder"), M(n), T(), k(), x(), v(), _r_();
};
return _r_({
priority:9,
init:A,
restartPosition:N,
getElement:function() {
return _i_("3da:2174"), _r_(n);
},
getOffsetTopBoundaries:function() {
return _i_("3da:2175"), _r_({
lowerBound:f,
upperBound:E() - parseInt(n.height(), 10)
});
},
isSticked:function() {
return _i_("3da:2176"), _r_(p);
}
});
}, t[sNSStartup].bookingSticker.update = function() {
_i_("3da:917");
var i = t[sNSStartup].bookingSticker.stickers || [];
if (!i.length) return _r_();
e.each(i, function(e, t) {
_i_("3da:2028"), t.restartPosition(), _r_();
}), t.events.emit("booking_sticker:update"), _r_();
}, _r_();
}(window.jQuery, window.booking), booking.browserStorageHandler = function(e, t, i, n) {
_i_("3da:295");
var r = !1;
try {
r = e.localStorage && e.sessionStorage ? !0 :!1, r && e.localStorage.setItem("btest", "1");
} catch (a) {
r = !1;
}
var o = {
_readCookie:function(e) {
_i_("3da:1795");
var t = {};
try {
"undefined" != typeof JSON && (t = JSON.parse(n.cookie(e)) || {});
} catch (i) {}
return _r_(t);
},
_modifySingleValue:function(t, a, o, _, s) {
if (_i_("3da:1796"), !a || !o) return _r_(!1);
if (r && !s) {
var l = "session" === t ? e.sessionStorage :e.localStorage;
if ("delete" === a) l.removeItem(o); else try {
l.setItem(o, _);
} catch (d) {}
} else {
var c, u, h, f;
"session" === t ? c = "bs" :(c = "b", f = 30), u = this._readCookie(c), "delete" === a ? delete u[o] :u[o] = _, h = n.isEmptyObject(u) ? null :JSON.stringify(u), n.cookie(c, h, {
expires:f,
path:"/",
domain:i.b_domain_end
});
}
_r_();
},
_getValue:function(t, i, n) {
if (_i_("3da:1797"), !i) return _r_(void 0);
if (r && !n) {
var a = "session" === t ? e.sessionStorage :e.localStorage;
return _r_(a.getItem(i));
}
var o, _;
return o = "session" === t ? "bs" :"b", _ = this._readCookie(o), _r_(_[i]);
}
};
return _r_({
addSessionValue:function(e, t, i) {
return _i_("3da:1375"), _r_(o._modifySingleValue("session", "add", e, t, i));
},
deleteSessionValue:function(e, t) {
return _i_("3da:1376"), _r_(o._modifySingleValue("session", "delete", e, void 0, t));
},
getSessionValue:function(e, t) {
return _i_("3da:1377"), _r_(o._getValue("session", e, t));
},
addPermanentValue:function(e, t, i) {
return _i_("3da:1378"), _r_(o._modifySingleValue("permanent", "add", e, t, i));
},
deletePermanentValue:function(e, t) {
return _i_("3da:1379"), _r_(o._modifySingleValue("permanent", "delete", e, void 0, t));
},
getPermanentValue:function(e, t) {
return _i_("3da:1380"), _r_(o._getValue("permanent", e, t));
},
isLocalStorageSupported:function() {
return _i_("3da:1381"), _r_(r);
}
});
}(window, document, booking.env, window.jQuery), booking.define && booking.define("browser-storage-handler", booking.browserStorageHandler), function() {
_i_("3da:168");
var e = B.require("jquery"), t = booking.env, i = "", n = 1e3 * t.b_timestamp, r = Math.abs(+new Date() - new Date(n)) >= 864e5, a = r, o = booking[sNSStartup].calendar = {
priority:9,
version:1.4,
datefmt:"YYYY MM DD",
minimalDays:1,
maximalDays:30,
oldDays:1,
from:{
date:null,
day:null,
month:null,
year:null
},
till:{
date:null,
day:null,
month:null,
year:null
},
viewDateFrom:a ? new Date(n) :new Date(),
viewDateTill:a ? new Date(n) :new Date(),
oneDayInMS:864e5,
calendars:[],
calendarTypes:{
checkin_day:{
isTill:!1,
isDay:!0
},
checkin_monthday:{
isTill:!1,
isDay:!0
},
checkin_year_month:{
isTill:!1,
isDay:!1
},
pre_checkin_year_month:{
isTill:!1,
isDay:!1
},
checkout_day:{
isTill:!0,
isDay:!0
},
checkout_monthday:{
isTill:!0,
isDay:!0
},
checkout_year_month:{
isTill:!0,
isDay:!1
},
pre_checkout_year_month:{
isTill:!0,
isDay:!1
},
start_monthday:{
isTill:!1,
isDay:!0
},
start_year_month:{
isTill:!1,
isDay:!1
},
end_monthday:{
isTill:!0,
isDay:!0
},
end_year_month:{
isTill:!0,
isDay:!1
}
},
maxMonthsInFuture:12,
maxDaysInFuture:365,
maxDaysInThePast:1,
syncDate:null,
userServDate:!1,
hasDataRange:!1,
dateFormat:function(e, i, n) {
_i_("3da:1798");
var r = /D{1,4}|M{1,4}|YY(?:YY)?/g, a = function(e, t) {
for (_i_("3da:2559"), e = String(e), t = t || 2; e.length < t; ) e = "0" + e;
return _r_(e);
}, o = this;
if (1 != arguments.length || "[object String]" != Object.prototype.toString.call(e) || /\d/.test(e) || (i = e, e = void 0), e = e ? new Date(e) :new Date(), isNaN(e)) throw SyntaxError("invalid date");
i = String(i || o.datefmt), "UTC:" == i.slice(0, 4) && (i = i.slice(4), n = !0);
var _ = n ? "getUTC" :"get", s = e[_ + "Date"](), l = e[_ + "Day"](), d = e[_ + "Month"](), c = e[_ + "FullYear"](), u = (e[_ + "Hours"](), e[_ + "Minutes"](), e[_ + "Seconds"](), {
D:s,
DD:a(s),
DDD:t.b_simple_weekdays_for_js[(l + 6) % 7],
DDDD:t.b_long_weekdays[(l + 6) % 7],
M:d + 1,
MM:a(d + 1),
MMM:t.b_short_months_abbr[d],
MMMM:t.b_short_months[d],
YY:String(c).slice(2),
YYYY:c
});
return _r_(i.replace(r, function(e) {
return _i_("3da:2560"), _r_(e in u ? u[e] :e.slice(1, e.length - 1));
}));
},
searchMinDays:function(e) {
_i_("3da:1799"), this.minimalDays = e, _r_();
},
maxYearsInFuture:function() {
_i_("3da:1800"), this.today = a ? this.noHourDate(new Date(n)) :this.noHourDate(null), this.maxMonthsInFuture = 12, this.maxDaysInFuture = parseInt(t.calendar_days_allowed_number), this.tomorrow = this.dateAfterDays(this.today, 1), this.endOfYear1 = this.dateAfterDays(this.today, this.maxDaysInFuture), this.endOfYear2 = this.dateAfterDays(this.today, this.maxDaysInFuture - 1), _r_();
},
setPast:function(e) {
_i_("3da:1801"), this.maxDaysInThePast = e, _r_();
},
syncDates:function(t, i, n, r, a) {
_i_("3da:1802"), e(".b_check_blocked").removeClass("b_check_blocked"), a || (e("#availcheck").attr("checked", !1), e("#define_group input, #define_group select").removeAttr("disabled"), e("#define_group").removeClass("disableme")), t ? (this.till.day = null == i ? this.till.day :i, this.till.month = null == n ? this.till.month :n, this.till.year = null == r ? this.till.year :r, null != this.till.day && null != this.till.month && null != this.till.year && (this.till.date = new Date(this.till.year + "/" + this.till.month + "/" + this.till.day + " 00:00:00"), this.viewDateTill = new Date(this.till.year + "/" + this.till.month + "/" + this.till.day + " 00:00:00"))) :(this.hasDataRange = !0, this.from.day = null == i ? this.from.day :i, this.from.month = null == n ? this.from.month :n, this.from.year = null == r ? this.from.year :r, null != this.from.day && null != this.from.month && null != this.from.year && (this.from.date = new Date(this.from.year + "/" + this.from.month + "/" + this.from.day + " 00:00:00"), this.viewDateFrom = new Date(this.from.year + "/" + this.from.month + "/" + this.from.day + " 00:00:00")));
var o = !1;
t || null == this.from.date ? t && null != this.till.date && null == this.from.date && (a || (this.from.date = this.dateAfterDays(this.till.date, ~(this.minimalDays - 1)), o = !0)) :null != this.till.date ? this.till.date <= this.from.date ? (booking.env.b_site_experiment_av_calendar && booking.avCalendar.isCheckInAvailable(this.from) ? this.till.date = new Date(booking.avCalendar.getFirstAvailableCheckOut(this.from) + " 00:00:00") :this.till.date = this.dateAfterDays(this.from.date, this.oldDays), o = !0) :booking.env.b_site_experiment_av_calendar && booking.avCalendar.isCheckOutAvailable(this.from, this.till) === !1 && (this.till.date = new Date(booking.avCalendar.getFirstAvailableCheckOut(this.from) + " 00:00:00"), o = !0) :a || (booking.env.b_site_experiment_av_calendar && booking.avCalendar.isCheckInAvailable(this.from) ? this.till.date = new Date(booking.avCalendar.getFirstAvailableCheckOut(this.from) + " 00:00:00") :this.till.date = this.dateAfterDays(this.from.date, this.minimalDays), o = !0), o && (t ? (this.from.year = this.from.date.getFullYear(), this.from.month = this.from.date.getMonth() + 1, this.from.day = this.from.date.getDate(), this.viewDateFrom = new Date(this.from.year + "/" + this.from.month + "/" + this.from.day + " 00:00:00")) :(this.till.year = this.till.date.getFullYear(), this.till.month = this.till.date.getMonth() + 1, this.till.day = this.till.date.getDate(), this.viewDateTill = new Date(this.till.year + "/" + this.till.month + "/" + this.till.day + " 00:00:00")));
for (var _ = 0; _ < this.calendars.length; _++) e(this.calendars[_]).trigger("changed_date", [ t, o ]);
booking.eventEmitter.trigger("CALENDAR:dates_changed", {
type:t ? "checkout" :"checkin",
otherChanged:o,
oldApi:this
}), _r_();
},
updateCalendarTables:function(t) {
_i_("3da:1803"), e(t).hasClass("calendarTill") ? this.rebuildCalendarTable(e("table", t).get(0), !0, this.viewDateTill.getMonth() + 1, this.viewDateTill.getFullYear()) :this.rebuildCalendarTable(e("table", t).get(0), !1, this.viewDateFrom.getMonth() + 1, this.viewDateFrom.getFullYear()), _r_();
},
init:function() {
if (_i_("3da:1804"), "hotel" == booking.env.b_action) return _r_();
if (this.calendarReady) return _r_();
this.calendarReady = !0, this.maxYearsInFuture(), this.initAddHandlers(), _r_();
},
initAddHandlers:function() {
_i_("3da:1805");
var t = this;
e("select").each(function() {
if (_i_("3da:2561"), "1" == this.getAttribute("data-no-old-calendar")) return _r_(!0);
var i = e(this).attr("name");
if (i && t.calendarTypes[i]) {
t.calendars.push(this);
var n = e(this).val();
if ("0" != n) {
var r = t.calendarTypes[i];
if (r.isDay) r.isTill ? t.till.day = n :t.from.day = n; else {
var a = n ? n.split("-") :"";
a.length && a.length > 0 && (r.isTill ? (t.till.year = a[0], t.till.month = a[1]) :(t.from.year = a[0], t.from.month = a[1]));
}
}
e(this).bind("changed_date", function(i, n, r) {
_i_("3da:2949"), e("input", this.parentNode).each(function() {
if (_i_("3da:3006"), t.calendarTypes[e(this).attr("name")]) {
var i = t.calendarTypes[e(this).attr("name")];
i.isDay && i.isTill && null != t.till.day && e(this).val(t.till.day), i.isDay && !i.isTill && null != t.from.day && e(this).val(t.from.day), !i.isDay && i.isTill && null != t.till.month && null != t.till.year && e(this).val(t.till.year + "-" + t.till.month), i.isDay || i.isTill || null == t.from.month || null == t.from.year || e(this).val(t.from.year + "-" + t.from.month);
}
_r_();
});
var a = t.calendarTypes[e(this).attr("name")];
((n || r) && a.isTill || (!n || r) && !a.isTill) && (a.isDay ? (a.isTill && null != t.till.year && null != t.till.month || !a.isTill && null != t.from.year && null != t.from.month) && t.rebuildDaySelect(this, a.isTill) :a.isTill && null != t.till.year && null != t.till.month ? t.selectOption(this, t.till.year + "-" + t.till.month) :a.isTill || null == t.from.year || null == t.from.month || t.selectOption(this, t.from.year + "-" + t.from.month)), _r_();
}), e(this).change(function() {
_i_("3da:2950");
var i = t.calendarTypes[e(this).attr("name")], n = e(this).val(), r = n.split("-");
if ("0" != n) if (e(this).parents(".newcalendar").length) {
var a = e(this).parents(".newcalendar");
r.length && r.length > 1 && (e(this).parents(".calendarTill").length ? (t.viewDateTill = new Date(r[0] + "/" + r[1] + "/" + t.viewDateTill.getDate() + " 00:00:00"), t.rebuildCalendarTable(e("table", a).get(0), !0, t.viewDateTill.getMonth() + 1, t.viewDateTill.getFullYear())) :(t.viewDateFrom = new Date(r[0] + "/" + r[1] + "/" + t.viewDateFrom.getDate() + " 00:00:00"), t.rebuildCalendarTable(e("table", a).get(0), !1, t.viewDateFrom.getMonth() + 1, t.viewDateFrom.getFullYear())));
} else t.syncDates(i.isTill, i.isDay ? n :null, i.isDay ? null :r.length && r.length > 1 ? r[1] :null, i.isDay ? null :r[0]);
_r_();
});
}
_r_();
}), e(".newcalendar").each(function() {
_i_("3da:2562"), e(this).hasClass("calendarTill") ? t.rebuildCalendarTable(e("table", this).get(0), !0, t.viewDateTill.getMonth() + 1, t.viewDateTill.getFullYear()) :t.rebuildCalendarTable(e("table", this).get(0), !1, t.viewDateFrom.getMonth() + 1, t.viewDateFrom.getFullYear()), t.calendars.push(this), e(this).bind("changed_date", function(i, n, r) {
if (_i_("3da:2893"), e(this).hasClass("calendarTill")) {
if (null != t.till.month && null != t.till.year) {
var a = t.till.day ? t.till.day :1;
t.viewDateTill = new Date(t.till.year + "/" + t.till.month + "/" + a + " 00:00:00"), t.rebuildCalendarTable(e("table", this).get(0), !0, t.till.month, t.till.year);
}
} else if (null != t.from.month && null != t.from.year) {
var a = t.from.day ? t.from.day :1;
t.viewDateFrom = new Date(t.from.year + "/" + t.from.month + "/" + a + " 00:00:00"), t.rebuildCalendarTable(e("table", this).get(0), !1, t.from.month, t.from.year);
}
t.updateLabels(), _r_();
});
var i = e(this);
i.undelegate("td", "click").delegate("td", "click", function() {
_i_("3da:2894");
var t = e(this).text();
return e("a", this).length && n(t), _r_(!1);
});
function n(n, r) {
if (_i_("3da:2765"), !parseInt(n)) return _r_();
i.hasClass("calendarTill") ? t.syncDates(!0, n, t.viewDateTill.getMonth() + 1, t.viewDateTill.getFullYear()) :t.syncDates(!1, n, t.viewDateFrom.getMonth() + 1, t.viewDateFrom.getFullYear()), t.closePopupCalendar();
var a = booking.formatter.date(t.from.year + "-" + t.from.month + "-" + t.from.day, "short_date"), o = booking.formatter.date(t.till.year + "-" + t.till.month + "-" + t.till.day, "short_date");
e(".checkinDateSection .selected_date").text(a), e(".checkoutDateSection .selected_date").text(o), t.checkFormPost(), _r_();
}
e(".nextmonth", this).bind("click", function() {
if (_i_("3da:2895"), !e(this).hasClass("disabled")) {
var i = e(this).parents(".newcalendar").get(0);
e(this).parents(".calendarTill").length ? (t.viewDateTill = t.dateAfterDays(t.viewDateTill, 0, 1), t.rebuildCalendarTable(e("table", i).get(0), !0, t.viewDateTill.getMonth() + 1, t.viewDateTill.getFullYear())) :(t.viewDateFrom = t.dateAfterDays(t.viewDateFrom, 0, 1), t.rebuildCalendarTable(e("table", i).get(0), !1, t.viewDateFrom.getMonth() + 1, t.viewDateFrom.getFullYear()));
}
return this.blur(), _r_(!1);
}), e(".prevmonth", this).bind("click", function() {
if (_i_("3da:2896"), !e(this).hasClass("disabled")) {
var i = e(this).parents(".newcalendar").get(0);
e(this).parents(".calendarTill").length ? (t.viewDateTill = t.dateAfterDays(t.viewDateTill, 0, -1), t.rebuildCalendarTable(e("table", i).get(0), !0, t.viewDateTill.getMonth() + 1, t.viewDateTill.getFullYear())) :(t.viewDateFrom = t.dateAfterDays(t.viewDateFrom, 0, -1), t.rebuildCalendarTable(e("table", i).get(0), !1, t.viewDateFrom.getMonth() + 1, t.viewDateFrom.getFullYear()));
}
return this.blur(), _r_(!1);
}), e("select", this).each(function() {
_i_("3da:2897");
var i = e(this).attr("name"), n = e(this).val();
t.calendarTypes[i] ? t.calendarTypes[i].isDay || (e(this).attr("name", "pre_" + i), e(this.parentNode).append('<input type="hidden" name="' + i + '" value="' + n + '" />')) :e(this).change(function() {
_i_("3da:3007");
var i = e(this).val();
if ("0" != i) {
var n = i.split("-");
n.length && n.length > 0 && (oCalendar = e(this).parents(".newcalendar"), e(this).parents(".calendarTill").length ? (t.viewDateTill = new Date(n[0] + "/" + n[1] + "/1 00:00:00"), t.rebuildCalendarTable(e("table", oCalendar).get(0), !0, n[1], n[0])) :(t.viewDateFrom = new Date(n[0] + "/" + n[1] + "/1 00:00:00"), t.rebuildCalendarTable(e("table", oCalendar).get(0), !1, n[1], n[0])));
}
_r_();
}), _r_();
}), _r_();
}), B.env.b_calendar2 || e(".calendarLink").bind("click.calendar", function() {
return _i_("3da:2766"), window.calendarRef = e(this).parent().attr("class"), t.openPopupCalendar(this), _r_(!1);
}), e(".calendar_close").click(function() {
return _i_("3da:2563"), t.closePopupCalendar(), _r_(!1);
}), null != this.from.year && null != this.from.month && null != this.from.day && t.syncDates(!1, this.from.day, this.from.month, this.from.year, !0), null != this.till.year && null != this.till.month && null != this.till.day && t.syncDates(!0, this.till.day, this.till.month, this.till.year, !0), "#auto_open_checkout" == window.location.hash && e("#auto_open_checkout a").click(), _r_();
},
checkFormPost:function() {
if (_i_("3da:1806"), i && e("." + i + " .submit_on_change").length) if ("hotel" == booking.env.b_action) {
if ("dealCheckinDate" == i && e("#hotelpage_availform").attr("action").indexOf("#") > -1) {
var t = e("#hotelpage_availform").attr("action").split("#")[0];
e("#hotelpage_availform").attr("action", t);
}
e("#hotelpage_availform").submit();
} else e("#frm").submit();
_r_();
},
updateLabels:function() {
_i_("3da:1807");
var i = Math.round((this.noHourDate(this.till.date) - this.noHourDate(this.from.date)) / this.oneDayInMS);
if (i > 0 && t.night && t.nights) {
var n = 1 == i ? "1 " + t.night :t.nights.replace("{amount}", i);
n.indexOf(i) < 0 && (n = i + " " + n), e(".dayamount").length && e(".dayamount").text(n), e(".no_nights_helper").length && e(".no_nights_helper").text("(" + n + ")");
}
e(".calendarFrom").length && (e(".calendarFrom .ct_month").text(t.b_short_months[parseInt(this.from.month) - 1]), e(".calendarFrom .ct_day").text(this.from.day), e(".calendarTill").length && (e(".calendarTill .ct_month").text(t.b_short_months[parseInt(this.till.month) - 1]), e(".calendarTill .ct_day").text(this.till.day))), _r_();
},
updatePrevNextLinks:function(t, i) {
_i_("3da:1808");
var n = this, r = this.dateAfterDays(this.tomorrow, this.maxDaysInFuture - 2), a = this.maxDaysInThePast > 1 ? this.dateAfterDays(this.tomorrow, ~this.maxDaysInThePast) :this.tomorrow, o = e(i).parents(".calendarTill").length ? this.viewDateTill :this.viewDateFrom;
e(".nextmonth", i.parentNode).each(function() {
_i_("3da:2564"), n.dateAfterDays(o, 0, 1, !0) > r ? e(this).addClass("disabled") :e(this).removeClass("disabled"), _r_();
}), e(".prevmonth", i.parentNode).each(function() {
_i_("3da:2565"), n.dateAfterDays(o, 0, -1, !0) < a ? e(this).addClass("disabled") :e(this).removeClass("disabled"), _r_();
}), this.selectOption(e("select", i.parentNode), o.getFullYear() + "-" + (o.getMonth() + 1)), _r_();
},
rebuildCalendarTable:function(i, n, r, a) {
_i_("3da:1809");
var o = e(i).parents(".newcalendar"), _ = document.createElement("table");
e(_).html(i.innerHTML);
var s = booking.env.b_site_experiment_av_calendar && o.hasClass("avCalendar");
n && s && this.from.date && (e(".avCalendar_pick_checkin").hide(), e(".avCalendar.calendarTill").show());
var l = parseInt(new Date(a + "/" + r + "/1").getDay()) - 2;
t.sunday_first ? l += 1 :0 > l && (l = 7 + l);
for (var d = _.getElementsByTagName("td"), c = 0; 42 > c; c++) {
var u = c - l, h = d[c];
if (u > 0 && u <= this.getDaysInMonth(r, a)) {
var f = new Date(a + "/" + r + "/" + u + " 00:00:00");
if (this.isValidDate(f, n)) {
var p = "";
if (s ? ((f - this.till.date == 0 && n || f - this.from.date == 0 && !n) && (p += " selected"), !n && booking.avCalendar.isDateInRange({
year:a,
month:r,
day:u
}) && (p += booking.avCalendar.isCheckInAvailable({
year:a,
month:r,
day:u
}) ? " has_av" :" no_av"), n && this.from.day && booking.avCalendar.isDateInRange(this.from) && (p += booking.avCalendar.isCheckOutAvailable(this.from, {
year:a,
month:r,
day:u
}) ? " has_av" :" no_av")) :(f - this.today == 0 && (p += " today"), f - this.till.date == 0 && (p += n ? " selected" :" endsel"), f - this.from.date == 0 && (p += n ? " endsel" :" selected"), f < this.till.date && f > this.from.date && (p += " inbetween")), booking.env.b_fd_hotel_dates) for (var g = 0; g < booking.env.b_fd_hotel_dates.length; g++) if (booking.env.b_fd_hotel_dates[g]) {
e.lst = booking.env.b_fd_hotel_dates[g].split("-");
var m = new Date(Number(e.lst[0]), Number(e.lst[1]) - 1, Number(e.lst[2]));
f - m == 0 && (p += " flashdeals");
}
h.innerHTML = '<a href="#" class="' + p + '">' + u + "</a>";
} else f - this.today != 0 || s ? h.innerHTML = "<span>" + u + "</span>" :h.innerHTML = '<span class="today">' + u + "</span>";
} else h.innerHTML = "&nbsp;";
}
e(i).html(_.innerHTML), this.updatePrevNextLinks(!0, i), _r_();
},
isValidDate:function(e, t) {
_i_("3da:1810");
var i = this.maxDaysInThePast > 1 ? this.dateAfterDays(this.today, ~this.maxDaysInThePast) :this.today;
return _r_(!(i > e || t && e < this.tomorrow && this.maxDaysInThePast < 2 || e > this.endOfYear1 || !t && e > this.endOfYear2));
},
rebuildDaySelect:function(i, n) {
_i_("3da:1811");
var r = "&nbsp;";
if (n) {
var a = this.till.month, o = this.till.year, _ = this.till.day;
this.from.month, this.from.year, this.from.day;
(null == _ || booking.env.keep_day_month) && (r = '<option style="text-transform:capitalize;" value="0">' + t.sbox_day + "</option>");
} else {
var a = this.from.month, o = this.from.year, _ = this.from.day;
(null == _ || booking.env.keep_day_month) && (r = '<option style="text-transform:capitalize;" value="0">' + t.sbox_day + "</option>");
}
e(i).html(r);
var s = this.getDaysInMonth(a, o);
function l(e, t, i) {
_i_("3da:2177");
var n = new Date(Date.UTC(e, t - 1, i)), i = n.getUTCDay();
return i = i > 0 ? i - 1 :6, _r_(i);
}
for (var d = 1; s >= d; d++) {
var c = l(o, a, d), u = t.b_simple_weekdays_for_js[c] + " " + d;
("ja" == t.b_lang || "zh" == t.b_lang || "ko" == t.b_lang || "hu" == t.b_lang) && (u = "ja" == t.b_lang || "zh" == t.b_lang || "ko" == t.b_lang ? d + B.env.sbox_day + " " + t.b_simple_weekdays_for_js[c] :d + " " + t.b_simple_weekdays_for_js[c]), e(i).append('<option value="' + d + '"' + (_ == d ? ' selected="selected"' :"") + ">" + u + "</option>");
}
_r_();
},
noHourDate:function(e) {
_i_("3da:1812");
var t = "undefined" == typeof e || null === e ? this.userServDate ? new Date(this.syncDate) :new Date() :e;
return t.setHours(0), t.setMilliseconds(0), t.setMinutes(0), t.setSeconds(0), _r_(t);
},
getDaysInMonth:function(e, t) {
_i_("3da:1813");
var i = [ 31, function() {
return _i_("3da:2767"), _r_(t % 4 === 0 && t % 100 !== 0 || t % 400 === 0 ? 29 :28);
}(), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ];
return _r_(i[e - 1]);
},
selectOption:function(t, i, n) {
_i_("3da:1814");
for (var r, a, o, _ = e(t).parents(".newcalendar"), s = booking.env.b_site_experiment_av_calendar && _.hasClass("avCalendar"), l = !1, d = e("option", t), c = 0; c < d.length; c++) r = d[c], a = e(r), o = a.text(), i && "" != i && (a.val() == i ? (r.selected = !0, l = !0, s && _.find(".avCalendar_month").text(o)) :d[c].selected = !1), n && "" != n && (o == i ? (r.selected = !0, l = !0, s && _.find(".avCalendar_month").text(o)) :r.selected = !1);
return _r_(l);
},
dateAfterDays:function(e, t, i, n) {
_i_("3da:1815");
var r = this.oneDayInMS * t, a = 12;
if (n && e.setDate(1), i) {
this.noHourDate(e);
if ((i > a || -1 * a > i) && (e.setFullYear(e.getFullYear() + parseInt(i / a)), i %= a), 0 != i) {
var o = e.getMonth();
o + i > a ? (e.setFullYear(e.getFullYear() + 1), e.setMonth(o + i - a)) :0 > o + i ? (e.setFullYear(e.getFullYear() - 1), e.setMonth(o + i + a)) :e.setMonth(o + i);
}
}
var _ = new Date(1 * this.noHourDate(e) + r);
if (e.getTimezoneOffset() != _.getTimezoneOffset()) {
var s = e.getTimezoneOffset() - _.getTimezoneOffset();
s = 60 * (0 > s ? ~s + 1 :s) * 1e3, s > 0 && (_ = new Date(1 * this.noHourDate(e) + r + s));
}
return _r_(_);
},
setPosition:function(i) {
_i_("3da:1816");
var n = e(i).offset(), r = 10, a = n.top + r;
leftPos = n.left, $window = e(window), windowHeight = $window.height(), windowWidth = $window.width(), documentScrollTop = e(document).scrollTop(), t.rtl && (leftPos -= 211), windowWidth < leftPos + 230 && windowWidth - 230 > 0 && (leftPos = windowWidth - 230), windowHeight + documentScrollTop < a + 230 && (a - documentScrollTop - 250 > 0 ? a -= 250 :a = windowHeight + documentScrollTop - 250), e("#calendar_popup").css({
top:a + "px",
left:leftPos + "px"
}), _r_();
},
scrollHandlers:[],
openPopupCalendar:function(t) {
_i_("3da:1817");
var i, n = e("#calendar_popup").get(0), r = e(window), a = this, o = "";
switch (t.nodeName.toLowerCase()) {
case "a":
o = t.href.split("#")[1];
break;

case "input":
o = t.name;
break;

case "select":
o = t.name;
break;

case "label":
o = t.getAttribute("data-title");
}
i = function() {
_i_("3da:2566"), a.setPosition(t), _r_();
}, this.scrollHandlers.push(i), this.setPosition(t), r.bind("scroll resize", i), e("#calendar_popup").show(), this.calendarTypes[o] && this.calendarTypes[o].isTill ? (e(n).addClass("calendarTill"), this.rebuildCalendarTable(e("table", n).get(0), !0, this.viewDateTill.getMonth() + 1, this.viewDateTill.getFullYear())) :(e(n).removeClass("calendarTill"), this.rebuildCalendarTable(e("table", n).get(0), !1, this.viewDateFrom.getMonth() + 1, this.viewDateFrom.getFullYear())), e("body").bind("close_calendar", this.closeHandler), booking.eventEmitter.trigger("CALENDAR:datepicker_opened", this), _r_();
},
closeHandler:function() {
_i_("3da:1818"), o.closePopupCalendar(), _r_();
},
closePopupCalendar:function() {
_i_("3da:1819");
var t, i, n;
for (e("#calendar_popup").removeClass("calendarTill").hide(), e("body").unbind("close_calendar", this.closeHandler), t = 0, i = this.scrollHandlers.length; i > t; t += 1) n = this.scrollHandlers[t], "function" == typeof n && $window.unbind("scroll resize", n);
this.scrollHandlers = [], _r_();
}
};
_r_();
}(), booking[sNSStartupLoad].change_dates = {
priority:9,
init:function() {
_i_("3da:476"), "undefined" != typeof trigger_error_template_event_tracking && trigger_error_template_event_tracking === !0 && (booking.google.trackEvent(booking.google.pageviewTracker, "Error Template (Aggregate)", b_errors), "" != b_this_referer && booking.google.trackEvent(booking.google.pageviewTracker, "Error Template (Referrer)", b_this_referer + " - " + b_errors), booking.google.trackEvent(booking.google.pageviewTracker, "Error Template (RequestURL)", b_this_url + " - " + b_errors)), "send_change_dates" == booking.env.b_page && ($("#message_changing-dates").fadeIn(), $("#change_dates").submit(function() {
_i_("3da:2029");
var e = $("input[name=do]"), t = $("#change_dates input[name=checkin_date]").val(), i = $("#change_dates input[name=checkout_date]").val();
t && i && (t.length > 0 || i.length > 0) && (cin_yymm = $("#checkin_year_month").val(), cin_dd = $("#checkin_day").val(), cin_yymmdd = cin_yymm + "-" + cin_dd, cout_yymm = $("#checkout_year_month").val(), cout_dd = $("#checkout_monthday").val(), cout_yymmdd = cout_yymm + "-" + cout_dd, a = t.replace(/-0/g, "-"), b = i.replace(/-0/g, "-"), (a != cin_yymmdd || b != cout_yymmdd) && e.val("dochangedates")), _r_();
})), "mybooking" == booking.env.b_action && $("#message_changing-dates").fadeIn(), _r_();
}
}, booking.command("lightbox-hide", function() {
_i_("3da:169"), booking.lightbox.hide(), _r_();
}), booking.command.define({
name:"show-auth-lightbox",
handler:function(e) {
if (_i_("3da:477"), B.env.b_run_redirect_from_app_to_book_for_login) {
var t = B.env.b_login_page_url, i = e ? e.tab :"";
i && (t += B.env.b_query_params_delimiter + "auth_tab=" + i), window.location.href = t;
} else {
if (B.authLightbox.init(), e.tab || (e.tab = "signin"), e.mode && e.mode in this.modes) return _r_(this.modes[e.mode].apply(this, arguments));
B.authLightbox.show(e);
}
_r_();
},
modes:{
"raise-auth":function(e) {
_i_("3da:918");
var t = B.promise();
return B.authLightbox.show(e), B.eventEmitter.one("auth-dialog:hide", n).one("UA:got_auth_level_high", r), t.then(i, i), _r_(t);
function i() {
_i_("3da:1382"), B.eventEmitter.unbind("auth-dialog:hide", n).unbind("UA:got_auth_level_high", r), _r_();
}
function n() {
_i_("3da:1383"), t.reject(), _r_();
}
function r(e, i) {
_i_("3da:1384");
var n = $.grep(B.env.b_user_emails, function(e) {
return _i_("3da:2567"), _r_(e.email === i.username);
});
n.length ? t.fulfill() :t.reject({
error:"different_email"
}), B.authLightbox.hide(), _r_();
}
}
}
}), booking.command("show-profile-menu", function() {}), booking.command.define({
name:"show-currency-selector",
handler:function(e) {
_i_("3da:478"), $(".user_center_option[data-id=currency_selector] .popover_trigger").click(), _r_();
}
}), booking.command.define("social-disconnect", function(e) {
_i_("3da:171");
var t = B.require("lightbox"), i = $(".js-social-connect-dialog--" + e.provider + "-disconnect");
i.length && t.show(i, {
customWrapperClassName:"social-connect-dialog-wrapper"
}), _r_();
}), B.command("profile-add-email", function(e) {
if (_i_("3da:172"), !B.require("mysettings-model-emails") || "mysettings" != booking.env.b_action) return _r_();
B.require("mysettings-model-emails").getInstance().save({
b_is_new:!0,
b_email:e.email
}), _r_();
}), booking[booking.env && booking.env.cookie_warning_v2 ? sNSStartupLoad :sNSStartup].cookie_warning = {
priority:10,
init:function() {
_i_("3da:479");
var e, t, i = window.jQuery;
if (!window.B || !B.env || window.self !== window.top && !+B.env.b_bookings_owned) return _r_();
if (booking.env && booking.env.cookie_warning_v2 && (/(^|;)\s*cws=/.test(document.cookie) || (e = new Date(), e.setTime(e.getTime() + 31536e6), t = B.env.b_domain_end || ".booking.com", document.cookie = "cws=true; domain=" + t + "; path=/; expires=" + e.toGMTString(), B.env.cookie_warning = !0)), B.env.cookie_warning) {
var n = i("#cookie_warning"), r = function() {
_i_("3da:2030"), B.env.cookie_warning_excluded_country || i(document).unbind("click.cookieMessage"), i(document).unbind("keydown.cookieMessage"), i(window).unbind("scroll.cookieMessage"), _r_();
}, a = function(e) {
if (_i_("3da:2031"), i(e).hasClass("close_warning")) return n.fadeOut("1000", function() {
_i_("3da:2843"), i(e).remove(), i(document).unbind("click.cookieMessage"), _r_();
}), booking.google.trackEvent(booking.google.clickTracker, "Cookie warning", "Close"), _r_(!1);
booking.google.trackEvent(booking.google.clickTracker, "Cookie warning", "Read"), _r_();
}, o = function() {
_i_("3da:2032"), B.env.cookie_warning_excluded_country || n.fadeOut(1e3), r(), _r_();
};
i(document).bind({
"click.cookieMessage":function(e) {
_i_("3da:2369");
var t = e.target ? e.target :e.srcElement;
i(t).parents("#cookie_warning").length && "a" === t.tagName.toLowerCase() ? (a(t), r()) :i(t).parents("#cookie_warning").length || B.env.cookie_warning_excluded_country ? !i(t).parents("#cookie_warning").length && B.env.cookie_warning_excluded_country && (n.fadeOut(1e3), r()) :o(), _r_();
},
"keydown.cookieMessage":function() {
_i_("3da:2370"), o(), _r_();
}
}), i(window).bind({
"scroll.cookieMessage":function() {
_i_("3da:2371"), i(this).scrollTop() && (B.env.cookie_warning_excluded_country ? o() :i(window).unbind("scroll.cookieMessage")), _r_();
}
}), n.show();
}
_r_();
}
}, function(e, t) {
_i_("3da:173"), e("et_copy_tracking", [ "et", "jquery" ], function(e, t) {
_i_("3da:919");
var i = 1e3, n = 5e3, r = [], a = t(window);
function o(i) {
_i_("3da:1385"), t.makeArray(document.scripts).filter(function(e) {
return _i_("3da:2667"), _r_("track_copy" === e.type);
}).forEach(function(n) {
_i_("3da:2372");
var a = n.getAttribute("data-hash"), o = n.parentNode, _ = t(o);
o.removeChild(n), i && _.is(":visible") ? e.on("view", o).stage(a, 1) :r.push({
hash:a,
$node:_,
offsetTop:_.offset().top
}), _r_();
}), _r_();
}
function _() {
_i_("3da:1386");
var t = a.scrollTop() + a.height();
r.forEach(function(i, n) {
_i_("3da:2373"), i.offsetTop < t && (i.offsetTop = i.$node.offset().top, i.$node.is(":visible") && i.offsetTop < t && (e.stage(i.hash, 1), r.splice(n, 1))), _r_();
}), _r_();
}
return t(function() {
_i_("3da:2033"), o(!0), setInterval(function() {
_i_("3da:2668"), r.length && _(), _r_();
}, i), setInterval(o, n), _r_();
}), _r_({});
}), t("et_copy_tracking"), _r_();
}(B.define, B.require), booking[sNSExperiments].HOGeVdCScVUKeYEGecO = {
init:function() {
_i_("3da:480"), this.$first = $("#wl252-modal-1"), "true" !== $.cookie("wl252-gotit") && (booking[sNSStartup].lightbox.show(this.$first, {
customWrapperClassName:"wl252-modal-wrapper--styled"
}, this.autoFocus), booking.eventEmitter.trigger("account-onboarding-modal-show")), this.setSkip(), this.gotIt(), this.saveNames(), this.saveStars(), this.placeholderShim(), _r_();
},
autoFocus:function() {
_i_("3da:481"), this.$first = $("#wl252-modal-1"), "msie" !== B.env.b_browser ? this.$first.find("#wl252-firstname").focus() :B.env.b_browser_version > 9 && this.$first.find("input:first").focus(), _r_();
},
placeholderShim:function() {
_i_("3da:482"), $("#wl252-firstname").add("#wl252-lastname").placeholder(), _r_();
},
gotIt:function() {
_i_("3da:483"), $(".wl252-gotit").click(function(e) {
_i_("3da:1387"), e.preventDefault(), $.cookie("wl252-gotit", "true"), booking[sNSStartup].lightbox.hide(), window.location.reload(), _r_();
}), _r_();
},
saveNames:function() {
_i_("3da:484");
var e = this, t = $("#wl252-onboard-name");
t.submit(function() {
_i_("3da:1388"), e.nextModal(1), _r_();
}), _r_();
},
saveStars:function() {
_i_("3da:485");
var e = this, t = $("#wl252-onboard-stars");
t.submit(function() {
_i_("3da:1389"), e.nextModal(2), _r_();
}), _r_();
},
nextModal:function(e) {
_i_("3da:486");
var t = e + 1, i = $("#wl252-modal-" + t);
0 !== i.length ? (booking[sNSStartup].lightbox.hide(), booking[sNSStartup].lightbox.show(i, {
customWrapperClassName:"wl252-modal-wrapper--styled"
})) :booking[sNSStartup].lightbox.hide(), _r_();
},
setSkip:function() {
_i_("3da:487");
var e = this;
$(".wl252-modal__skip, .wl252-btn-done").click(function(t) {
_i_("3da:1390"), t.preventDefault(), e.nextModal(parseInt($(this).data("modal"), 10)), _r_();
}), _r_();
}
}, window.switchDateStack = function(e, t) {
_i_("3da:174");
var i = e, n = 0;
for ($(e).parents("div").length && (i = $(e).parents("div").get(0)); i; ) "div" === i.nodeName.toLowerCase() && (n++, n == t && (i.style.display = "block")), i = i.nextSibling;
_r_();
}, function() {
_i_("3da:175"), booking[sNSStartup].AaSDdQeRYZDCATAJRXRT = {
init:function() {
_i_("3da:1391");
var e = "/resend_confirm_primary_email", t = this, i = $(".user-notification-email-confirm-resend, .js-notification-confirm-email");
this.$targetParent = i.parent(), i.click(function(n) {
_i_("3da:2374"), n.preventDefault();
var r = $(this).data("target-url") || e;
return r && (i.hide(), t.showLoadingMsg(), $.ajax({
url:r,
dataType:"json",
data:{
aid:B.env.b_aid,
lang:B.env.b_lang
},
success:function(e) {
_i_("3da:2968"), $(".user-notification-email-confirm-default").hide(), e && "sent" === e.status ? t.showSuccessMsg() :t.showErrorMsg(), _r_();
},
error:function() {
_i_("3da:2969"), $(".user-notification-email-confirm-default").hide(), t.showErrorMsg(), _r_();
}
})), _r_(!1);
}), _r_();
},
showLoadingMsg:function() {
_i_("3da:1392"), $(".user_resend_conf_email_status", this.$targetParent).hide(), $(".user_resend_conf_email_loading", this.$targetParent).show(), _r_();
},
showErrorMsg:function() {
_i_("3da:1393"), $(".user_resend_conf_email_status", this.$targetParent).hide(), $(".user_resend_conf_email_retry", this.$targetParent).show(), _r_();
},
showSuccessMsg:function() {
_i_("3da:1394"), $(".user_resend_conf_email_status", this.$targetParent).hide(), $(".user_resend_conf_email_success", this.$targetParent).show(), _r_();
}
}, _r_();
}(), B[sNSStartup].destination_suggestion_on_right = {
init:function() {
_i_("3da:488");
var e, t = $("#searchbox_suggestion_on_right"), i = "destination-section", n = "tab-nav-item-active", r = "tab-content", a = "tab-panel", o = "tab-panel-active", _ = ".tab-nav li", s = 300;
t.delegate(_, "click", function(t) {
_i_("3da:1395"), t.preventDefault(), clearTimeout(e), l($(this)), _r_();
}), t.delegate(_, "mouseover", function() {
_i_("3da:1396");
var t = $(this);
e = setTimeout(function() {
_i_("3da:2568"), l(t), _r_();
}, s), _r_();
}), t.delegate(_, "mouseout", function() {
_i_("3da:1397"), clearTimeout(e), _r_();
});
function l(e) {
_i_("3da:920");
var t = e.closest("." + i), _ = t.children("." + r);
e.siblings().removeClass(n), e.addClass(n), _.find("." + a).removeClass(o).eq(e.index()).addClass(o), _r_();
}
_r_();
}
}, booking[sNSStartup].emk_header_bar = function() {
"use strict";
_i_("3da:296");
function e() {
_i_("3da:657");
var e = $("#emk_header_bar");
if (!e.length) return _r_();
var t = function() {
_i_("3da:1820"), e.hide(), $("body").removeClass("emk_header"), _r_();
}, i = function() {
_i_("3da:1821");
var e = booking.env.b_label || "";
$.ajax({
url:"/newsletter/header_bar?label=" + e,
type:"GET",
success:function() {
_i_("3da:2768"), t(), _r_();
},
error:function() {
_i_("3da:2769"), t(), _r_();
}
}), _r_();
};
e.find(".js-close-emk-header-bar").click(function(e) {
_i_("3da:1822"), e.preventDefault(), i(), _r_();
}), _r_();
}
return _r_({
priority:9,
init:e
});
}(), $(function() {
_i_("3da:176");
var e = [ "item_searching", "topten", "item_volcano_eruption", "item_roomtypes", "item_pricing", "item_creditcards", "item_payments", "item_reservation_process", "item_hotelpolicies", "item_confirmation", "item_extrafacilities", "item_cancellation", "item_directions", "item_reviews" ], t = window.location.search.match(/.*?[\&\;\?]faq=([^\&\;]+)/);
if (null !== t && t.length > 1 && t[1].length) {
var i = t[1].split(",");
i.length && ($(e).each(function(e, t) {
_i_("3da:2034"), hideEl(t), _r_();
}), $.each(i, function(e, t) {
_i_("3da:2035");
var i = $("span#" + t), n = i.prev();
i && n && t.match(/faqa\d+/) && !n.parents("span.faqA").length && (n.clone().appendTo("#faq_deeplink"), i.clone().appendTo("#faq_deeplink")), _r_();
}));
}
if ($(".staticmenustyle").children("li").children("a").each(function(e, t) {
_i_("3da:921"), $(t).click(function() {
_i_("3da:2036"), $("#faq_deeplink").children().remove(), _r_();
}), _r_();
}), location && location.hash) {
var n = location.hash.slice(1);
if ("" != n) for (var r = 0; r < e.length; r++) {
var a = e[r];
a == "item_" + n || a == n ? showEl(a) :hideEl(a);
}
}
_r_();
}), booking.ensureNamespaceExists("feature"), booking.feature.transition = function() {
_i_("3da:297");
var e = document.body || document.documentElement, t = e.style, i = "transition";
if ("string" == typeof t[i]) return _r_(!0);
for (var n = [ "Moz", "webkit", "Webkit", "Khtml", "O", "ms" ], i = i.charAt(0).toUpperCase() + i.substr(1), r = 0; r < n.length; r++) if ("string" == typeof t[n[r] + i]) return _r_(!0);
return _r_(!1);
}(), booking[sNSStartup].fixMail = {
priority:9,
init:function() {
_i_("3da:489");
var e = this;
$(".encrypted").each(function() {
_i_("3da:1398"), $(this).html(e.deCode($(this).text())), $(this).removeClass("encrypted"), _r_();
}), _r_();
},
deCode:function(e) {
return _i_("3da:490"), _r_(e.replace(/[a-zA-Z]/g, function(e) {
return _i_("3da:1399"), _r_(String.fromCharCode(("Z" >= e ? 90 :122) >= (e = e.charCodeAt(0) + 13) ? e :e - 26));
}));
}
}, B.define("caniuse", function(e, t, i) {
_i_("3da:177");
var n = {};
return n.css = function() {
_i_("3da:1094");
var e = {
cache:{},
prefix:[ "webkit", "Moz", "ms", "O" ],
elm:document.createElement("div"),
getCamelCase:function(e) {
_i_("3da:2569");
var t = "", i = e.replace(/^-*/, "").split("-");
return i.map(function(e, i) {
_i_("3da:2898"), t += i > 0 ? e.charAt(0).toUpperCase() + e.substr(1) :e.toLowerCase(), _r_();
}), _r_(t);
},
getPrefixNames:function(e) {
_i_("3da:2570");
var t = [], i = this.getCamelCase(e);
return this.prefix.map(function(e) {
_i_("3da:2899"), t.push(e + i.charAt(0).toUpperCase() + i.substr(1)), _r_();
}), t.unshift(i), _r_(t);
},
checkFeature:function(e) {
_i_("3da:2571");
var t = this.elm, i = !1, n = this.getCamelCase(e), r = this.getPrefixNames(e);
return r.map(function(e) {
_i_("3da:2900"), void 0 !== t.style[e] && (i = !0), _r_();
}), this.cache[n] = i, _r_(i);
},
detection:function(e) {
_i_("3da:2572");
var t = this.getCamelCase(e);
return _r_(void 0 !== this.cache[t] ? this.cache[t] :this.checkFeature(e));
}
};
return _r_(function(t) {
return _i_("3da:2037"), _r_(e.detection(t));
});
}(), n.js = function() {
_i_("3da:1095");
var e = {
_cache:{},
deviceMotion:function() {
return _i_("3da:2573"), _r_(!!window.DeviceMotionEvent);
},
deviceOrientation:function() {
return _i_("3da:2574"), _r_(!!window.DeviceOrientationEvent);
},
geolocation:function() {
return _i_("3da:2575"), _r_(!(!window.navigator || !window.navigator.geolocation));
},
history:function() {
return _i_("3da:2576"), _r_(!(!window.history || !window.history.pushState));
},
svg:function() {
return _i_("3da:2577"), _r_(!(!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect));
},
canvas:function() {
_i_("3da:2578");
var e = this._getElm("canvas");
return _r_(!(!e.getContext || !e.getContext("2d")));
},
webGL:function() {
_i_("3da:2579");
var e = this._getElm("canvas");
return _r_(!(!window.WebGLRenderingContext || !e.getContext("webgl") && !e.getContext("experimental-webgl")));
},
serviceWorker:function() {
return _i_("3da:2580"), _r_(!(!navigator || !navigator.serviceWorker));
},
serviceWorkerNotification:function() {
return _i_("3da:2581"), _r_(!!(window.ServiceWorkerRegistration && "showNotification" in ServiceWorkerRegistration.prototype));
},
push:function() {
return _i_("3da:2582"), _r_(!!window.PushManager);
},
notification:function() {
return _i_("3da:2583"), _r_(!!(window.Notification || window.webkitNotification || window.mozNotification || window.oNotification || window.msNotification));
},
matchMedia:function() {
return _i_("3da:2584"), _r_(!!window.matchMedia);
},
HTMLPictureElement:function() {
return _i_("3da:2585"), _r_(!!window.HTMLPictureElement);
},
touch:function() {
return _i_("3da:2586"), _r_(!!(window.ontouchstart || window.navigator && window.navigator.msPointerEnabled && window.MSGesture || window.DocumentTouch && document instanceof DocumentTouch));
},
_test:function(e) {
_i_("3da:2587");
try {
return _r_(this._cache[e] = this[e](e));
} catch (t) {
return _r_(!1);
}
_r_();
},
_getElm:function(e) {
return _i_("3da:2588"), _r_(document.createElement(e));
},
_isCached:function(e) {
return _i_("3da:2589"), _r_(void 0 !== this._cache[e]);
},
_detection:function(e) {
if (_i_("3da:2590"), this._isCached(e)) return _r_(this._cache[e]);
return _r_(this._test(e));
}
};
return _r_(function(t) {
return _i_("3da:2038"), _r_(e._detection(t));
});
}(), n.deviceMotion = !!window.DeviceMotionEvent, n.geolocation = !(!window.navigator || !window.navigator.geolocation), n.history = !(!window.history || !window.history.pushState), n.svg = !(!document.createElementNS || !document.createElementNS("http://www.w3.org/2000/svg", "svg").createSVGRect), _r_(n);
}), booking.ensureNamespaceExists(sNSStartup), booking.trapFocus = booking[sNSStartup].trapFocus = function() {
_i_("3da:491");
var e, t, i = !1, n = null, r = null, a = [], o = [];
function _(i, _) {
if (_i_("3da:922"), !i && i instanceof Node) return console.log("You must provide target container where the focus to be trapped!"), _r_();
e && s(), e = i, n = _ || document.activeElement;
var d = h(e);
d.length && d[0].focus(), document.addEventListener("focus", c, !0), document.addEventListener("keydown", l, !0), document.addEventListener("keyup", l, !0), r = document.createElement("div"), r.setAttribute("tabindex", 0), r.addEventListener("focus", u, !0), e.appendChild(r), t = e.parentNode, t === document.body ? (a = document.querySelectorAll("body > *"), Array.prototype.forEach.call(a, function(t) {
if (_i_("3da:2375"), t === e) return _r_();
"true" == t.getAttribute("aria-hidden") ? o.push(t) :t.setAttribute("aria-hidden", !0), _r_();
})) :B && B.env && B.env.b_dev_server && console.warn("trap-focus: The target element is not a direct descendant of body, therefore focus could not be trapped in it properly for screen readers! Consider appending target element to the body for better support!"), _r_();
}
function s() {
_i_("3da:923"), t === document.body && Array.prototype.forEach.call(a, function(t) {
if (_i_("3da:2376"), t === e) return _r_();
-1 == o.indexOf(t) && t.removeAttribute("aria-hidden"), _r_();
}), document.removeEventListener("focus", c, !0), document.removeEventListener("keydown", l, !0), document.removeEventListener("keyup", l, !0), n && n.focus(), n = null, e = null, r && (r.removeEventListener("focus", u, !0), r.parentNode.removeChild(r), r = null), t = null, _r_();
}
function l(e) {
_i_("3da:924"), i = e.shiftKey, _r_();
}
function d() {
_i_("3da:925");
var t = h(e);
if (!t.length) return _r_();
i ? t[t.length - 1].focus() :t[0].focus(), _r_();
}
function c(t) {
_i_("3da:926"), t.target instanceof Node && e.contains(t.target) || (t.preventDefault(), d()), _r_();
}
function u(e) {
_i_("3da:927"), e.preventDefault(), d(), _r_();
}
function h(e) {
_i_("3da:928");
var t = e.querySelectorAll("a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), iframe, object, embed, *[tabindex], *[contenteditable]");
return _r_(Array.prototype.filter.call(t, function(e) {
return _i_("3da:2039"), _r_(e.offsetWidth > 0 && e.offsetHeight > 0);
}));
}
return _r_({
trap:_,
release:s
});
}(), B.define("trap-focus", booking.trapFocus), B.define("dismiss-item", function(e, t, i) {
_i_("3da:178");
var n = e("jquery");
i.exports = function(e) {
if (_i_("3da:929"), !e) throw new Error("param itemId is required");
return _r_(n.ajax({
url:"/dismiss_item",
type:"POST",
data:{
item_id:e
}
}));
}, _r_();
}), B.define("component/dismissible-item/block", function(e, t, i) {
_i_("3da:179");
var n = e("component"), r = e("dismiss-item"), a = e("read-data-options");
i.exports = n.extend({
init:function() {
_i_("3da:1823"), this.options = a(this.$el, {
itemId:{
name:"item-id",
type:String,
required:!0
}
}), this._bindEvents(), _r_();
},
_bindEvents:function() {
_i_("3da:1824"), this.$el.on("click", ".js-close", function() {
_i_("3da:2770"), this._dismissItem(), this.hide(), _r_();
}.bind(this)), _r_();
},
_dismissItem:function() {
return _i_("3da:1825"), _r_(r(this.options.itemId));
},
hide:function() {
_i_("3da:1826"), this.$el.hide(), _r_();
}
}), _r_();
}), B.define("component/dismissible-item/on-init", function(e, t, i) {
_i_("3da:180");
var n = e("component"), r = e("dismiss-item"), a = e("read-data-options");
i.exports = n.extend({
init:function() {
return _i_("3da:1827"), this.options = a(this.$el, {
itemId:{
name:"item-id",
type:String,
required:!0
}
}), _r_(r(this.options.itemId));
}
}), _r_();
}), B.define("component/bwallet/reward_prompt", function(e, t, i) {
_i_("3da:181");
var n = e("component"), r = e("dismiss-item"), a = e("read-data-options");
i.exports = n.extend({
init:function() {
_i_("3da:1828"), this.options = a(this.$el, {
itemId:{
name:"target-item-id",
type:String,
required:!0
}
}), setTimeout(function() {
_i_("3da:2771"), this._bindEvents(), _r_();
}.bind(this), 250), _r_();
},
_bindEvents:function() {
_i_("3da:1829");
var e = $("[data-item-id=" + this.options.itemId + "]");
e.on("click", ".js-close", function() {
_i_("3da:2772"), this._dismissItem(), e.parent().hide(), _r_();
}.bind(this)), _r_();
},
_dismissItem:function() {
return _i_("3da:1830"), _r_(r(this.options.itemId));
},
hide:function() {
_i_("3da:1831"), this.$el.hide(), _r_();
}
}), _r_();
}), function() {
_i_("3da:182");
var e = "AEJPVLBLJMZIadLae";
B.when({
condition:null != document.getElementById("top")
}).run(function(t) {
_i_("3da:930");
var i = t("jquery"), n = i("#top").find("li.js-uc-language"), r = i(".js-uc-language-content").find(".select_foldout_wrap:eq(1)");
if (!n.length > 0 || !r.length > 0) return _r_(!1);
n.on("click", function(t) {
_i_("3da:2040"), B.et.stage(e, 1), _r_();
}), r.on("click", "li", function(t) {
_i_("3da:2041"), B.et.stage(e, 2), _r_();
}), _r_();
}), _r_();
}(), function() {
"use strict";
_i_("3da:183");
var e = B.require("caniuse"), t = "AEJPIKRPXPLAWHIbFYEQYFGXIbYTGSOC", i = window.Notification || window.webkitNotification || window.mozNotification || window.oNotification || window.msNotification;
B.when({
events:"ready",
condition:e.js("notification") && e.js("serviceWorkerNotification") && e.js("push") && "default" === i.permission
}).run(function(e) {
_i_("3da:931");
var n = e("et");
n.track(t) && i.requestPermission(function(e) {
_i_("3da:2377"), "granted" === e ? n.customGoal(t, 1) :"denied" === e ? n.customGoal(t, 2) :"default" === e && n.customGoal(t, 3), _r_();
}), "index" === B.env.b_action ? n.stage(t, 1) :/^(country|city|airport|region|district|landmark)$/.test(B.env.b_action) ? n.stage(t, 2) :"searchresults" === B.env.b_action ? n.stage(t, 3) :"hotel" === B.env.b_action ? n.stage(t, 4) :"book" === B.env.b_action ? n.stage(t, 5) :n.stage(t, 6), _r_();
}), _r_();
}();

function calcage(e, t, i) {
return _i_("3da:4"), s = (Math.floor(e / t) % i).toString(), LeadingZero && s.length < 2 && (s = "0" + s), _r_("<b>" + s + "</b>");
}

function CountBack(e) {
if (_i_("3da:5"), 0 > e) {
if (document.getElementById("cntdwn")) return document.getElementById("cntdwn").innerHTML = FinishMessage, _r_();
} else e > 86400 ? (DisplayStr_days = DisplayFormat_days.replace(/%%D%%/g, calcage(e, 86400, 1e5)), document.getElementById("flash_days").innerHTML = DisplayStr_days) :document.getElementById("flash_days_wrapper").style.display = "none";
DisplayStr_hours = DisplayFormat_hours.replace(/%%H%%/g, calcage(e, 3600, 24)), DisplayStr_minutes = DisplayFormat_minutes.replace(/%%M%%/g, calcage(e, 60, 60)), DisplayStr_seconds = DisplayFormat_seconds.replace(/%%S%%/g, calcage(e, 1, 60)), document.getElementById("flash_hours").innerHTML = DisplayStr_hours, document.getElementById("flash_minutes").innerHTML = DisplayStr_minutes, document.getElementById("flash_seconds").innerHTML = DisplayStr_seconds, CountActive && setTimeout("CountBack(" + (e + CountStepper) + ")", SetTimeOutPeriod), _r_();
}

"undefined" == typeof TargetDate && (TargetDate = "12/31/2020 5:00 AM"), "undefined" == typeof DisplayFormat && (DisplayFormat = "%%D%% Days, %%H%% Hours, %%M%% Minutes, %%S%% Seconds."), "undefined" == typeof CountActive && (CountActive = !0), "undefined" == typeof FinishMessage && (FinishMessage = ""), "number" != typeof CountStepper && (CountStepper = -1), "undefined" == typeof LeadingZero && (LeadingZero = !0), CountStepper = Math.ceil(CountStepper), 0 == CountStepper && (CountActive = !1);

var SetTimeOutPeriod = 1e3 * (Math.abs(CountStepper) - 1) + 990, dthen = new Date(TargetDate), dnow = new Date();

CountStepper > 0 ? ddiff = new Date(dnow - dthen) :ddiff = new Date(dthen - dnow), gsecs = Math.floor(ddiff.valueOf() / 1e3), document.getElementById("flash_seconds") && CountBack(gsecs), function(e, t) {
_i_("3da:184");
function i() {
_i_("3da:492"), e.env.b_run_ge_new_newsletter_login && booking.eventEmitter.bind("auth-dialog:show", function() {
_i_("3da:2042"), t(".user_signup_password").focus(), _r_();
}), _r_();
}
t(document).ready(i), _r_();
}(window.booking, window.jQuery), booking.components.define("ge-lightbox", function(e, t) {
"use strict";
_i_("3da:185");
function i(i) {
_i_("3da:493");
var n = i.data, r = i.template, a = i.onOpen || function() {}, o = i.wrapperClassName || "ge-about-lightbox-wrapper", _ = t.noop, s = t.noop;
e.require("profile/profile-menu/profile-menu").hide();
var l = function() {
_i_("3da:1400");
var i = e.env.b_user_genius_status && e.env.b_user_genius_status.b_genius_booking_for_genius;
i && (n.b_genius_booking_for_genius = e.env.b_user_genius_status.b_genius_booking_for_genius, _ = function() {
_i_("3da:2669"), t(".modal-wrapper .ge-obd-tl-stamp-outer").loadComponents(), t(".modal-wrapper .ge-onboarding-index__timeline").addClass("animate"), _r_();
}), o += " new-genius-modal-wrapper", _r_();
}, d = "ge_aspiring_about_lightbox" == r || "ge_genius_about_lightbox" == r;
parseInt(e.env.b_reg_user_is_genius) && d && (e.et.goal("genius_about_lighbox_opened"), l()), e.env.b_reg_user_qualify_genius_challenge && d && e.et.goal("aspiring_genius_about_lighbox_opened"), setTimeout(function() {
_i_("3da:1401"), t("#tooltip_wrap").hide(), _r_();
}, 300), t(".user_center_popover").hide(), e.lightbox.show(e.jstmpl(r).render(n), {
customWrapperClassName:o,
hideCallBack:s
}, function(i) {
_i_("3da:1402"), t(".ge-mod-button").click(function() {
return _i_("3da:2378"), e.lightbox.hide(), _r_(!1);
}), _(), a && a(i), _r_();
}), _r_();
}
function n(e) {
_i_("3da:494");
var n = e.element;
t("body").delegate(n, "click", function(t) {
_i_("3da:1403"), t.preventDefault(), i(e), _r_();
}), _r_();
}
return _r_({
setup:n,
open:i
});
}), booking.jstmpl("ge_aspiring_about_lightbox", function() {
_i_("3da:298");
var e, t = [ '\n\n    <div class="ge-about-lightbox-container ge-about-lightbox-v3">\n      <div class="ge-about-lightbox-v3__header u-clearfix">\n        <div class="ge-about-lightbox-v3__header-top u-clearfix">\n          <h1 class="ge-about-lightbox-v3__logo-container">Booking Genius</h1>\n          <p class="ge-about-lightbox-v3__slogan">', "/private/ge_exp_pb_lightbox_header/name", '</p>\n        </div>\n      </div>\n\n      <div class="ge-about-lightbox-v3__blocks-list u-clearfix">\n        <div class="u-clearfix">\n          <div class="ge-about-lightbox-v3__block">\n            <img src="', '" height="26px" class="ge-about-lightbox-v3__block-image" alt="">\n            <h3><strong class="ge-about-lightbox-v3__strong-yellow">', "/private/ge_exp_pay_less_members_usp/name", "</strong></h3>\n            <p>", '</p>\n          </div>\n\n          <div class="ge-about-lightbox-v3__block is-center-has-plus">\n            <img src="', "</strong>", "<strong>", '</p>\n          </div>\n\n          <div class="ge-about-lightbox-v3__block">\n            <img src="', '</p>\n          </div>\n        </div>\n\n        <div class="ge-about-lightbox-v3__explanation u-clearfix">\n          <div class="ge-about-lightbox-v3__genius-brand">\n            <span class="ge-iconfont-plate white ge-mod-genius-logo" style="font-size: 35px">\n              ', "35", "genius/full-logo", '\n            </span>\n          </div>\n\n          <div class="ge-about-lightbox-v3__genius-about">\n            <h3><strong class="ge-about-lightbox-v3__strong-yellow">', "/private/ge_exp_lightbox_what_is_genius_desc_2/name", "Booking.com", "</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n" ], i = [ "ge_exp_pay_less_members_desc", "ge_exp_lightbox_discount_header", "ge_exp_lightbox_discount_desc", "ge_exp_lightbox_freebies_header", "ge_exp_lightbox_freebies_desc", "ge_exp_pb_lightbox_what_is_genius" ];
return _r_(function(n) {
_i_("3da:932");
var r = "", a = this.fn;
return r += [ t[0], a.ME(t[1], a.MB, a.MN, null), t[2], a.STATIC_HOSTNAME("/static/img/genius-lightbox-bestprice.png", 0, 0, 0), t[3], a.ME(t[4], a.MB, a.MN, null), t[5], a.MB(i[0]), t[6], a.STATIC_HOSTNAME("/static/img/genius-lightbox-discount.png", 0, 0, 0), t[3], a.MB(i[1]), t[5], (n.unshift({
end_bold:t[7],
start_bold:t[8]
}), e = a.MB(i[2]), n.shift(), e), t[9], a.STATIC_HOSTNAME("/static/img/genius-lightbox-perks.png", 0, 0, 0), t[3], a.MB(i[3]), t[5], (n.unshift({
end_bold:t[7],
start_bold:t[8]
}), e = a.MB(i[4]), n.shift(), e), t[10], (n.unshift({
height:t[11],
name:t[12]
}), e = a.HELPER("icon", n[0]), n.shift(), e), t[13], a.MB(i[5]), t[5], (n.unshift({
b_companyname:t[15]
}), e = a.ME(t[14], a.MB, a.MN, null), n.shift(), e), t[16] ].join(""), _r_(r);
});
}()), booking.jstmpl("ge_genius_about_lightbox", function() {
_i_("3da:299");
var e, t = [ "\n    ", "\n\n", '\n\n\n\n<div class="ge_new_genius_modal ge-modal-container">\n    <aside>\n        <h1 class="ge-mod-genius-logo-container">\n                <span class="ge-iconfont-plate ge-mod-genius-logo yellow">\n                    <i class="bicon-dotgeniusbg"></i>\n                    <i class="bicon-dotgeniusfold"></i>\n                    <i class="bicon-dotgenius"></i>\n                </span>\n        </h1>\n        <h1 class="ge-main-heading">\n            ', "/private/ge_deepen_new_genius_lbox_header/name", '\n        </h1>\n    </aside>\n    <div class="right-side-content">\n        ', '\n            <div class="timeline-container">\n                <div class="ge-onboarding-index__timeline">\n                    <div class="ge-obd-tl-top">\n                        <ul class="ge-obd-tl-stamp-list clearfix">\n\n                            ', "\n                                ", "\n        ", "\n            ", "/private/ge_challenge_past_1_onb_widget/name", "\n                ", "/private/ge_challenge_past_2_onb_widget/name", "/private/ge_challenge_past_3_onb_widget/name", "/private/ge_challenge_past_4_onb_widget/name", "/private/ge_challenge_past_5_onb_widget/name", '\n\n    <li class="ge-obd-tl-stamp">\n        ', '\n            <a href="javascript:;" class="ge-obd-tl-link">\n        ', '\n\n        <div class="ge-obd-tl-stamp-outer"\n             data-component="tt-fancy" data-delay="0"\n             data-content="<div class=\'ge-challenge-tt\'><h6>', '</h6></div>">\n            ', '\n                <div class="ge-obd-tl-stamp-img"\n                     style="background-image: url(\'', "')\">\n                </div>\n            ", '\n                <i class="bicon-map-pin ge-obd-tl-stamp-icon"></i>\n            ', "\n        </div>\n\n    ", "\n        </a>\n    ", "\n</li>\n", "\n                            ", '\n                        </ul>\n\n                        <span class="ge-iconfont-plate  white   ">\n                            <i class="bicon-dotgeniusbg"></i>\n                            <i class="bicon-dotgeniusfold"></i>\n                            <i class="bicon-dotgenius"></i>\n                        </span>\n                    </div>\n                    <div class="ge-obd-tl-bottom">\n                        <ul class="ge-obd-tl-tick-list clearfix">\n                            <li class="ge-obd-tl-tick ge-obd-tl-tick--blue">\n                                <i class="bicon-actick"></i>\n                            </li>\n                            <li class="ge-obd-tl-tick ge-obd-tl-tick--blue">\n                                <i class="bicon-actick"></i>\n                            </li>\n                            <li class="ge-obd-tl-tick ge-obd-tl-tick--blue">\n                                <i class="bicon-actick"></i>\n                            </li>\n                            <li class="ge-obd-tl-tick ge-obd-tl-tick--blue">\n                                <i class="bicon-actick"></i>\n                            </li>\n                            <li class="ge-obd-tl-tick ge-obd-tl-tick--blue">\n                                <i class="bicon-actick"></i>\n                            </li>\n                            <li class="ge-obd-tl-tick ge-obd-tl-tick--yellow">\n                                <i class="bicon-actick"></i>\n                            </li>\n                        </ul>\n                        <div class="ge-obd-tl-progress">\n                            <span class="ge-obd-tl-progress__cover"></span>\n                            <span class="ge-obd-tl-progress__bar"></span>\n                        </div>\n                    </div>\n                </div>\n                <div class="timeline-text">\n                    ', "\n                        ", "/private/ge_deepen_new_genius_lbox_welcome/name", "\n                    ", "/private/ge_deepen_new_genius_lbox_welcome_unknown/name", "\n                </div>\n            </div>\n        ", '\n            <div class="timeline-container">\n                <p style="width:520px; color: red; font-weight: bold;">Internal: The Genius timeline cannot be displayed because this user was "forced" to become Genius in the database (or you\'re using a developer account). A test account is available <a href="https://wiki.booking.com/display/GNS" target="_blank">here</a>.</p>\n            </div>\n        ', '\n        <div class="benefits-section">\n            <div class="benefits-heading">\n                ', "/private/ge_deepen_new_genius_lbox_start/name", '\n            </div>\n            <div class="content-row">\n                <div class="big-icon">\n                    <span class="ge-10-icon">', "/private/ge_deepen_new_genius_lbox_icon/name", '</span>\n                </div>\n                <div class="benefit-text">\n                    ', "/private/ge_deepen_new_genius_lbox_get/name", '\n                </div>\n            </div>\n\n            <div class="content-row">\n                <div class="big-icon">\n                        <span class="genius-extended-module genius-extended-module-freebies">\n                            <i class="bicon-gift"></i>\n                        </span>\n                </div>\n                <div class="benefit-text">\n                    ', "/private/ge_deepen_new_genius_lbox_freebies/name", "\n                </div>\n            </div>\n        </div>\n    </div>\n</div>", "\n" ], i = [ "b_genius_booking_for_genius", "city", "hotel_name", "fe_ge_stamp_message", "b_index", "b_city_url", "photo_url", "city_url", "b_genius_user", "b_user_genius_status", "b_is_internal_ip" ];
return _r_(function(n) {
_i_("3da:933");
var r = "", a = this.fn;
function o(e) {
_i_("3da:1404"), e += t[0], a.MN("ufi_name", a.MB(i[1]) || a.MB(i[2])), e += t[0], a.MN("start_highlight", "<b>"), e += t[0], a.MN("end_highlight", "</b>"), e += t[0];
var n = "";
n += t[7];
var r = a.MC(i[4]);
return n += a.MJ(r + "" == "0") ? [ t[8], a.ME(t[9], a.MB, a.MN, null), t[10] ].join("") :a.MJ(r + "" == "1") ? [ t[8], a.ME(t[11], a.MB, a.MN, null), t[10] ].join("") :a.MJ(r + "" == "2") ? [ t[8], a.ME(t[12], a.MB, a.MN, null), t[10] ].join("") :a.MJ(r + "" == "3") ? [ t[8], a.ME(t[13], a.MB, a.MN, null), t[10] ].join("") :a.MJ(r + "" == "4") ? [ t[8], a.ME(t[14], a.MB, a.MN, null), t[10] ].join("") :[ t[8], a.ME(t[9], a.MB, a.MN, null), t[7] ].join(""), n += t[0], a.MN(i[3], n), e += t[0], a.MN("start_highlight", ""), e += t[0], a.MN("end_highlight", ""), e += t[0], a.MN("ufi_name", ""), e += t[15], a.MD(i[5]) && (e += t[16]), e += [ t[17], a.MB(i[3]), t[18] ].join(""), e += a.MD(i[6]) ? [ t[19], a.STATIC_HOSTNAME(a.MB(i[6]), 0, 0, 0), t[20] ].join("") :t[21], e += t[22], a.MD(i[5]) && (e += t[23]), e += t[24], _r_(e);
}
function _(r) {
if (_i_("3da:1405"), r += t[1], r += [ t[2], a.ME(t[3], a.MB, a.MN, null), t[4] ].join(""), a.MJ(a.MG((a.MC(i[9]) || {}).b_genius_booking_for_genius))) {
r += t[5];
var _ = a.MC(i[0]) || [];
n.unshift(null);
for (var s = 1, l = _.length; l >= s; s++) n[0] = _[s - 1], r += t[6], n.unshift({
b_city:a.MB(i[1]),
b_city_url:a.MB(i[7]),
b_hotel_name:a.MB(i[2]),
b_index:s,
b_photo_url:a.MB(i[6])
}), r = o(r), n.shift(), r += t[25];
n.shift(), r += t[26], r += a.MJ(a.MG((a.MC(i[8]) || {}).first_name)) ? [ t[27], (n.unshift({
user_name:a.MG((a.MC(i[8]) || {}).first_name)
}), e = a.ME(t[28], a.MB, a.MN, null), n.shift(), e), t[29] ].join("") :[ t[27], a.ME(t[30], a.MB, a.MN, null), t[29] ].join(""), r += t[31];
} else a.MD(i[10]) && (r += t[32]);
return r += [ t[33], a.ME(t[34], a.MB, a.MN, null), t[35], a.ME(t[36], a.MB, a.MN, null), t[37], a.ME(t[38], a.MB, a.MN, null), t[39], a.ME(t[40], a.MB, a.MN, null), t[41] ].join(""), _r_(r);
}
return r += t[0], r = _(r), r += t[42], _r_(r);
});
}()), booking.jstmpl("ge_trial_optin_lightbox", function() {
_i_("3da:300");
var e = [ '\n\n    <div class="ge-trial-optin-lightbox-container ge-trial-optin-lightbox">\n    \n        <img src="', '" alt="Genius Trial" class="genius-trial-optin-desktop--giftbox">\n\n        <div class="ge-toi-mid-bl u-clearfix">\n            <h1>', "/private/ge_expand_trial_login_lbox_header/name", "</h1>\n            <p>", "/private/ge_expand_trial_login_lbox_subheader/name", '</p>\n        </div>\n\n        <div class="ch-clearfix">\n            <a href="#" class="button ge-mod-button genius-week-later" id="">', "/private/ge_expand_trial_login_lbox_cta_1/name", '</a>\n            \n            <form action="', "/genius_activate_trial", '" method="post">\n                <input type="hidden" name="return_url" value="', '">\n                <input type="hidden" name="campaign_id" value="', '">\n                <input type="hidden" name="src" value="lb">\n                <input type="submit" class="button genius-week-button" value="', "/private/ge_hp_start_ge_week/name", '">\n            </form>\n        </div>\n\n    </div>\n\n' ], t = [ "b_secure_hostname", "b_query_params_with_lang", "b_original_url", "fe_ge_trial_desktop_campaign_id" ];
return _r_(function(i) {
_i_("3da:934");
var n = "", r = this.fn;
return n += [ e[0], r.STATIC_HOSTNAME("/static/img/genius/genius_trial/tier-gift.png", 0, 0, 0), e[1], r.ME(e[2], r.MB, r.MN, null), e[3], r.ME(e[4], r.MB, r.MN, null), e[5], r.ME(e[6], r.MB, r.MN, null), e[7], r.MC(t[0]), e[8], r.MC(t[1]), e[9], r.MC(t[2]), e[10], r.MB(t[3]), e[11], r.ME(e[12], r.MB, r.MN, null), e[13] ].join(""), _r_(n);
});
}()), booking.jstmpl("ge_pilot_markets_lightbox", function() {
_i_("3da:301");
var e, t = [ '\n\n    <div class="ge-trial-optin-lightbox-container ge-trial-optin-lightbox">\n\n        <div class="ge-trial-optin-lightbox-brand">\n          <span class="ge-iconfont-plate white ge-mod-genius-logo" style="font-size: 40px">\n            <i class="bicon-dotgeniusbg"></i>\n            <i class="bicon-dotgeniusfold"></i>\n            <i class="bicon-dotgenius"></i>\n          </span>\n        </div>\n\n        <div class="ge-toi-mid-bl u-clearfix">\n\n            \n            ', "\n                <h1>", "/private/ge_expand_sr_pilot_genius_lbox_name/name", "</h1>\n            ", "/private/ge_expand_sr_pilot_genius_lbox_unknown/name", "\n\n            ", "\n                <p>", "/private/ge_expand_sr_pilot_genius_lbox_aspiring/name", "10", "</p>\n            ", "/private/ge_expand_sr_pilot_genius_lbox_genius/name", '\n\n        </div>\n\n        <div class="ch-clearfix">\n            <a href="#" class="button ge-mod-button genius-week-button is-alone" id="">', "/private/ge_expand_got_it_cta/name", "</a>\n        </div>\n\n    </div>\n\n" ], i = [ "b_user_first_name", "ge_num_trips", "b_reg_user_is_genius" ];
return _r_(function(n) {
_i_("3da:935");
var r = "", a = this.fn;
return r += t[0], r += a.MD(i[0]) ? [ t[1], (n.unshift({
user_name:a.MC(i[0])
}), e = a.ME(t[2], a.MB, a.MN, null), n.shift(), e), t[3] ].join("") :[ t[1], a.ME(t[4], a.MB, a.MN, null), t[3] ].join(""), r += t[5], r += a.MK(a.MC(i[2])) ? [ t[6], (n.unshift({
num_percent:t[8],
num_trips:a.MI(5) - a.MI(a.MB(i[1]))
}), e = a.ME(t[7], a.MB, a.MN, a.MO(a.MI(5) - a.MI(a.MC(i[1])), null, t[7])), n.shift(), e), t[9] ].join("") :[ t[6], (n.unshift({
num_percent:t[8]
}), e = a.ME(t[10], a.MB, a.MN, null), n.shift(), e), t[9] ].join(""), r += [ t[11], a.ME(t[12], a.MB, a.MN, null), t[13] ].join(""), _r_(r);
});
}()), booking.jstmpl("ge_aspiring_login_lightbox", function() {
_i_("3da:302");
var e, t = [ '\n\n    <div class="ge-trial-optin-lightbox-container ge-trial-optin-lightbox ge-aspiring-login-lightbox">\n\n        <img src="', '" class="ge-aspiring-lightbox-giftbox">\n        <img src="', '" class="ge-aspiring-lightbox-roadtrip">\n\n        <div class="ge-toi-mid-bl u-clearfix">\n\n            ', "\n              ", "\n                  <h1>", "/private/ge_expand_aspiring_lbox_see_you_again/name", "</h1>\n              ", "/private/ge_expand_aspiring_lbox_see_you_again_unknown/name", "\n            ", "/private/ge_expand_already_genius_thanks/name", "/private/ge_expand_suspect_genius/name", "\n\n            ", "\n                <p>", "/private/ge_expand_aspiring_lbox_see_you_again_desc/name", "</p>\n            ", "\n              <p>", "/private/ge_expand_already_genius_thanks_desc/name", '\n        </div>\n\n        <div class="ch-clearfix">\n            <a href="#" class="button ge-mod-button genius-week-button is-alone" id="">', "/private/ge_expand_got_it_cta/name", "</a>\n        </div>\n\n    </div>\n\n" ], i = [ "fe_ge_num_trips", "b_reg_user_personal_minimum", "fe_reg_user_is_genius" ];
return _r_(function(n) {
_i_("3da:936");
var r = "", a = this.fn;
return r += [ t[0], a.STATIC_HOSTNAME("/static/img/genius/genius_trial/genius-gift-small.png", 0, 0, 0), t[1], a.STATIC_HOSTNAME("/static/img/genius/ge-aspiring-roadtrip/Roadtrip" + a.MB(i[0]) + ".png", 0, 0, 0), t[2] ].join(""), a.MK(a.MB(i[2])) ? (r += t[3], r += a.MJ(a.MG(((a.MC(i[1]) || [])[0] || {}).b_reg_user_detail_firstname)) ? [ t[4], (n.unshift({
user_name:a.MG(((a.MC(i[1]) || [])[0] || {}).b_reg_user_detail_firstname)
}), e = a.ME(t[5], a.MB, a.MN, null), n.shift(), e), t[6] ].join("") :[ t[4], a.ME(t[7], a.MB, a.MN, null), t[6] ].join(""), r += t[8]) :(r += t[3], r += a.MJ(a.MG(((a.MC(i[1]) || [])[0] || {}).b_reg_user_detail_firstname)) ? [ t[4], (n.unshift({
user_name:a.MG(((a.MC(i[1]) || [])[0] || {}).b_reg_user_detail_firstname)
}), e = a.ME(t[9], a.MB, a.MN, null), n.shift(), e), t[6] ].join("") :[ t[4], a.ME(t[10], a.MB, a.MN, null), t[6] ].join(""), r += t[8]), r += t[11], r += a.MK(a.MB(i[2])) ? [ t[12], (n.unshift({
num_trips:a.MI(5) - a.MI(a.MB(i[0]))
}), e = a.ME(t[13], a.MB, a.MN, a.MO(a.MI(5) - a.MI(a.MC(i[0])), null, t[13])), n.shift(), e), t[14] ].join("") :[ t[15], a.ME(t[16], a.MB, a.MN, null), t[14] ].join(""), r += [ t[17], a.ME(t[18], a.MB, a.MN, null), t[19] ].join(""), _r_(r);
});
}()), booking.jstmpl("ge_genius_week_lightbox", function() {
_i_("3da:303");
var e, t = [ "\n\n    ", "\n        ", "\n    ", '\n\n  <div class="genius-week-lightbox ', '">\n\n  ', '\n    <div class="genius-week-lightbox-header u-clearfix">\n      <span class="genius-week-brand u-clearfix">\n        <i class="bicon-dotgenius"></i>\n      </span>\n      <img src="', '" alt="Genius Trial" class="genius-trial-desktop--giftbox">\n    </div>\n\n    <div class="genius-week-lightbox-block u-clearfix">\n      <h2 class="genius-week-lightbox-title">\n        ', "\n            ", "/private/ge_expand_zero_trial_index_index_lightbox/name", "/private/ge_expand_zero_trial_index_index_lightbox_unknown/name", "\n      </h2>\n      <p>", "/private/ge_expand_zero_trial_index_index_lightbox_discount/name", '</p>\n      <hr>\n    </div>\n\n    <div class="genius-week-lightbox-block2 u-clearfix">\n        <span  class="ge-iconfont-extended ge-iconfont-extended-dd ge10-badge">\n            <i class="bicon-bookingdotgenius"></i>\n            <span class="genius-extended-module genius-extended-module-discount ">\n            <i class="ge-discount-rate">10%</i>\n            </span>\n        </span>\n        <p>', "/private/ge_expand_zero_trial_index_index_look_for_logo/name", '</p>\n    </div>\n\n    <a id="js_close_trial_lightbox" class="b-button b-button_primary b-button_flat ge-genius-tier-button">', "/private/ge_expand_zero_trial_index_index_lightbox_cta/name", "</a>\n  ", '\n\n\n\n    <div class="genius-week-lightbox-header u-clearfix">\n      <span class="genius-week-brand u-clearfix">\n        <i class="bicon-dotgenius"></i>\n        ', '\n        <span class="genius-week-word-brand">week</span>\n        ', '\n      </span>\n\n      <h4 class="genius-week-headline">', "/private/genius_pp_travel_rewards_programme/name", '</h4>\n    </div>\n\n    <div class="genius-week-lightbox-block u-clearfix">\n      <h2 class="genius-week-lightbox-title">', "/private/ge_lighbox_ge_week_headline/name", '</h2>\n\n      <div class="genius-week-itens u-clearfix">\n        <div class="item">\n          <span class="genius-week-icon">\n            <i class="bicon-pricetag"></i>\n          </span>\n          <h3>', "/private/ge_10_percent_headline/name", "</h3>\n          <p>", "/private/ge_email_gw_discount/name", '</p>\n        </div>\n\n        <div class="item">\n          <span class="genius-week-icon">\n            <i class="bicon-gift"></i>\n          </span>\n          <h3>', "/private/ge_free_travel_perks_headline/name", "/private/ge_email_gw_free_perks/name", '</p>\n        </div>\n\n        <div class="item">\n          <span class="genius-week-icon">\n            <i class="bicon-olderphone"></i>\n          </span>\n          <h3>', "/private/ge_faster_service/name", "/private/ge_email_gw_faster_service/name", '</p>\n        </div>\n      </div>\n\n      <div class="genius-week-about u-clearfix">\n        <div class="genius-week-ge-brand">\n          <span class="ge-iconfont-plate white ge-mod-genius-logo" style="font-size: 35px">\n            <i class="bicon-dotgeniusbg"></i>\n            <i class="bicon-dotgeniusfold"></i>\n            <i class="bicon-dotgenius"></i>\n          </span>\n        </div>\n\n        <div class="genius-week-text">\n          <h2>', "/private/ge_lightbox_gw_want_to/name", "</h2>\n          <p>", "/private/ge_lightbox_gw_good_things/name", '</p>\n        </div>\n      </div>\n    </div>\n    <a id="js_close_trial_lightbox" class="b-button b-button_primary b-button_flat ge-genius-tier-button">', "/private/ge_ligtbox_gw_cta/name", "</a>\n    ", "\n  </div>\n\n" ], i = [ "fe_is_zero_ge_trial_desktop_user", "fe_zero_trial_class", "b_genius_user", "fe_is_zero_ge_trial_init_lightbox" ];
return _r_(function(n) {
_i_("3da:937");
var r = "", a = this.fn;
return r += t[0], a.MD(i[0]) && (r += t[1], a.MN("fe_zero_trial_class", "ge-zero-trial-lightbox"), r += t[2]), r += [ t[3], a.MB(i[1]), t[4] ].join(""), a.MD(i[3]) ? (r += t[2], a.MN("startStyle", "<strong>"), r += t[2], a.MN("endStyle", "</strong>"), r += [ t[5], a.STATIC_HOSTNAME("/static/img/genius/genius_trial/trial-gift-open.png", 0, 0, 0), t[6] ].join(""), r += a.MJ(a.MG((a.MC(i[2]) || {}).first_name)) ? [ t[7], (n.unshift({
user_name:a.MG((a.MC(i[2]) || {}).first_name)
}), e = a.ME(t[8], a.MB, a.MN, null), n.shift(), e), t[1] ].join("") :[ t[7], a.ME(t[9], a.MB, a.MN, null), t[1] ].join(""), r += [ t[10], a.ME(t[11], a.MB, a.MN, null), t[12], a.ME(t[13], a.MB, a.MN, null), t[14], a.ME(t[15], a.MB, a.MN, null), t[16] ].join("")) :(r += t[17], a.MD(i[0]) || (r += t[18]), r += [ t[19], a.ME(t[20], a.MB, a.MN, null), t[21], a.ME(t[22], a.MB, a.MN, null), t[23], a.ME(t[24], a.MB, a.MN, null), t[25], a.ME(t[26], a.MB, a.MN, null), t[27], a.ME(t[28], a.MB, a.MN, null), t[25], a.ME(t[29], a.MB, a.MN, null), t[30], a.ME(t[31], a.MB, a.MN, null), t[25], a.ME(t[32], a.MB, a.MN, null), t[33], a.ME(t[34], a.MB, a.MN, null), t[35], a.ME(t[36], a.MB, a.MN, null), t[37], a.ME(t[38], a.MB, a.MN, null), t[39] ].join("")), r += t[40], _r_(r);
});
}()), booking.jstmpl("ge_perks_lightbox", function() {
_i_("3da:304");
var e, t = [ '\n  <div class="ge-about-lightbox-container ge-genius-tier-lightbox">\n    <h2 class="ge-genius-tier-lightbox-title"> ', "/private/ge_lightbox_trips_are/name", ' </h2>\n    <p class="ge-genius-tier-lightbox-text"> ', "/private/ge_lightbox_you_made/name", ' </p>\n\n    <div class="ge-genius-tier-lightbox-freebies-list u-clearfix">\n      <h3 class="ge-freebies-list-title">\n        ', "/private/ge_lightbox_new/name", '\n        <span class="ge-freebies-expires">', "/private/ge_lightbox_expires/name", ' </span>\n      </h3>\n\n      <ul class="u-clearfix">\n        <li>\n            <span class="genius-extended-module-standalone-container">\n                <span class="genius-extended-module genius-extended-module-standalone">\n                    <i class="bicon-coffee"></i>\n                </span>\n            </span>\n            <span class="ge-freebie-item-text">\n                ', "/private/ge_perk_free_breakfast/name", '\n            </span>\n        </li>\n      </ul>\n    </div>\n\n    <div class="ge-genius-tier-lightbox-freebies-list u-clearfix">\n      <h3 class="ge-freebies-list-title">\n        ', "/private/ge_lightbox_travel_perks/name", "/private/ge_lightbox_no_expiry/name", '</span>\n      </h3>\n\n      <ul class="u-clearfix">\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n              <i class="ge-discount-rate">10%</i>\n            </span>\n          </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/1/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-earlycheckin"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/3/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-latecheckout"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/2/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-shuttlesmall"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/4/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-bike"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/6/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-bar"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/5/name", '\n          </span>\n        </li>\n\n        <li>\n          <span class="genius-extended-module-standalone-container">\n            <span class="genius-extended-module genius-extended-module-standalone">\n                <i class="bicon-parking"></i>\n            </span>\n        </span>\n          <span class="ge-freebie-item-text">\n            ', "/genius_perks/8/name", '\n          </span>\n        </li>\n      </ul>\n    </div>\n\n    <span class="genius-lightbox-tip">', "/private/ge_lightbox_some_travel_perks/name", "</span>\n  </div>\n" ], i = [ "first_name", "plus_end_date" ];
return _r_(function(n) {
_i_("3da:938");
var r = "", a = this.fn;
return r += [ t[0], a.ME(t[1], a.MB, a.MN, null), t[2], (n.unshift({
first_name:a.MB(i[0])
}), e = a.ME(t[3], a.MB, a.MN, null), n.shift(), e), t[4], a.ME(t[5], a.MB, a.MN, null), t[6], (n.unshift({
numeric_date:a.MB(i[1])
}), e = a.ME(t[7], a.MB, a.MN, null), n.shift(), e), t[8], a.ME(t[9], a.MB, a.MN, null), t[10], a.ME(t[11], a.MB, a.MN, null), t[6], a.ME(t[12], a.MB, a.MN, null), t[13], a.ME(t[14], a.MB, a.MN, null), t[15], a.ME(t[16], a.MB, a.MN, null), t[17], a.ME(t[18], a.MB, a.MN, null), t[19], a.ME(t[20], a.MB, a.MN, null), t[21], a.ME(t[22], a.MB, a.MN, null), t[23], a.ME(t[24], a.MB, a.MN, null), t[25], a.ME(t[26], a.MB, a.MN, null), t[27], a.ME(t[28], a.MB, a.MN, null), t[29] ].join(""), _r_(r);
});
}()), booking[sNSStartup].ge_show_onb_msg = {
init:function() {
_i_("3da:495");
var e = function() {
_i_("3da:1406"), $.ajax({
type:"post",
url:"/genius_onb_message_seen",
data:{}
}), _r_();
}, t = null;
if ("" !== B.env.b_ge_should_show_onboarding_on_login && (t = parseInt(B.env.b_ge_should_show_onboarding_on_login, 10)), 1 === t) {
var i = B.components.require("ge-lightbox");
i.open({
data:{
b_genius_user:B.env.b_genius_user || {}
},
template:"ge_aspiring_about_lightbox",
onOpen:function() {
_i_("3da:2379"), B.eventEmitter.bind("modal:close", e), _r_();
}
});
}
_r_();
}
}, function(e) {
_i_("3da:186");
var t, i = {
"SH:seen":"sh_seen",
"SH:clicked":"sh_clicked",
"SH:removed":"sh_removed",
"SH:sh-timestamp-today":"sh_resume_last_24",
"SH:sh-timestamp-24-48-hrs":"sh_resume_last_24_48",
"SH:sh-timestamp-48-72-hrs":"sh_resume_last_48_72",
"SH:sh-timestamp-72-96-hrs":"sh_resume_last_72_96"
};
for (t in i) i.hasOwnProperty(t) && e.eventEmitter.one(t, function(t) {
return _i_("3da:2178"), _r_(function() {
_i_("3da:2670"), e.et.goal(t), _r_();
});
}(i[t]));
_r_();
}(booking), Array.prototype.walk || (Array.prototype.walk = function(e) {
_i_("3da:305");
for (var t = [], i = this.length; i--; ) t.push(e(this[i]));
return _r_(t.reverse());
}), Array.prototype.flatten || (Array.prototype.flatten = function() {
_i_("3da:306");
for (var e = [], t = -1, i = this.length; ++t < i; ) e = e.concat(this[t].constructor == Array ? this[t].flatten() :this[t]);
return _r_(e);
}), booking.ensureNamespaceExists("google"), booking.google.returnAnalyticsTrackingString = function(e) {
_i_("3da:187"), e = e && "object" == typeof e && Object.assign ? Object.assign({}, booking.env, e) :booking.env;
var t = [], i = e.b_this_urchin.replace(/&amp;$/, "");
return i = i.replace(/(&amp;)?(auth_key|bn|pin|reset_hash|invitation_token)([^;&]+)/gi, ""), t[t.length] = i, "hotel" === e.b_action && 0 === e.b_hotel_blocks && e.b_checkin_date && (t[t.length] = "ur_honovail=1"), -1 != window.location.href.indexOf("redirected=") && (-1 != window.location.href.indexOf("source=") ? t[t.length] = "redirected=" + window.location.href.match(/source=(\w+)/)[1] :t[t.length] = "redirected=1"), e.b_autoextension_radius_km && (t[t.length] = "sr_ae=" + e.b_autoextension_radius_km), +e.b_availability_checked || e.b_checkin_date ? t[t.length] = "ur_dat=1" :t[t.length] = "ur_nodat=1", "search" === e.b_action && e.b_multiple_destinations_found && (t[t.length] = "ur_srdis=1"), "searchresults" === e.b_action && "undefined" != typeof e.b_available_hotels && (0 == e.b_available_hotels ? t[t.length] = "ur_hc=0" :e.b_available_hotels <= 15 ? t[t.length] = "ur_hc=1" :t[t.length] = "ur_hc=2"), e.b_book_stage && (t[t.length] = "stage=" + e.b_book_stage), _r_(t.flatten().join("&amp;"));
}, booking.ensureNamespaceExists("google"), function(e, t) {
_i_("3da:188"), e("ga-tracker-base", function(e, t) {
_i_("3da:939");
function i(e, t) {
_i_("3da:1407"), "undefined" != typeof t && ("undefined" != typeof _gaq && _gaq.push([ "_trackPageview", t ]), window.ga && window.ga("send", "pageview", t)), _r_();
}
function n(e, t, i, n, r) {
_i_("3da:1408"), "undefined" == typeof r && (r = 1), "undefined" != typeof e && ("undefined" != typeof _gaq && _gaq.push([ "_trackEvent", e, t, i, n, !0 ]), window.ga && window.ga("send", {
hitType:"event",
eventCategory:e,
eventAction:t,
eventLabel:i,
eventValue:n,
nonInteraction:1
})), _r_();
}
function r(e, t, i, n) {
if (_i_("3da:1409"), !window.ga) return _r_();
if ("undefined" == typeof e) return _r_();
if (!t || "string" != typeof t) return _r_();
if ("string" == typeof i && i && (i = +i), isNaN(i) || !isFinite(i)) return _r_();
if ((!n || "string" != typeof n) && void 0 !== n) return _r_();
window.ga("send", {
hitType:"timing",
timingCategory:e,
timingVar:t,
timingValue:i,
timingLabel:n
}), _r_();
}
t.trackTiming = r, t.trackEvent = n, t.trackPageview = i, _r_();
}), e("ga-tracker", function(e, t) {
_i_("3da:940");
var i = e("promise"), n = e("ga-tracker-base"), r = new i(function(e, t) {
_i_("3da:2179"), window.booking = window.booking || {}, window.booking.google = window.booking.google || {}, window.booking.google.setPageAsTracked = e, _r_();
});
function a() {
_i_("3da:1410");
var e = arguments;
r.then(function() {
_i_("3da:2380"), n.trackTiming.apply(null, e), _r_();
}), _r_();
}
t.errorTracker = "Error", t.clickTracker = "Click", t.changeTracker = "Change", t.hoverTracker = "Hover", t.mapTracker = "Map", t.pageviewTracker = "Pageview", t.viewTracker = "View", t.cityTracker = "City", t.groupTracker = "Group", t.cardTracker = "Credit Card", t.comparisonTracker = "Hotel Comparison", t.userProfileTracker = "User profile", t.bookProcessTracker = "Book process", t.bookingProcessTracker = "Booking Process", t.hotelPageTracker = "Hotel Page", t.reviewSearchTracker = "Review search", t.BBToolTracker = "Business Bookers", t.TripPlannerTracker = "Trip Planner", t.growlTracker = "Growl", t.WebMessagingTracker = "Web Messaging", t.SearchResultsTracker = "Search Results", t.SearchResultsCardClickEventsTracker = "Search Results Card Click Event", t.SearchResultsCardHoverEventsTracker = "Search Results Card Hover Event", t.SearchResultsFilterTracker = "Filter", t.SearchResultsFilterMapTracker = "Filter - Map", t.articlesTracker = "Articles", t.DSFTracker = "DSF", t.ugcdTracker = "UGC Display", t.ugccDestinationTracker = "Destination UGC", t.ugccPropertyTracker = "Property UGC", t.assistantTracker = "Messaging V2", t.referralAdvocateTracker = "Referral - Advocate", t.referralFriendTracker = "Referral - Friend", t.Rewards = "Rewards", t.SearchBoxTracker = "Searchbox", t.travelGuide = "TravelGuide", t.TIMING = {}, t.TIMING.PERFORMANCE = "Browser Performance", t.trackEvent = n.trackEvent, t.trackTiming = a, t.trackPageview = n.trackPageview, _r_();
}), _r_();
}(B.define, B.require), B.require([ "et", "jquery", "ga-tracker" ], function(e, t, i) {
_i_("3da:189");
var n = [ "click", "mouseenter", "mouseleave", "change" ], r = booking.debug("GA"), a = function(e) {
if (_i_("3da:941"), e && e.category) return _r_([ "category ->", e.category, "; action ->", e.action, "; label ->", e.label, "; value ->", e.value ].join(" "));
if (e && e.pageview) return _r_("link -> " + e.pageview);
_r_();
};
n = n.join(" "), n && t("body").on(n, "[data-ga-track]", function(e) {
_i_("3da:1411");
var n, o, _, s, l, d, c = t(this), u = c.data("ga-track");
if (!u || !u.length) return _r_();
var h = u.split("|");
if (h.length >= 2) {
if (u = h, n = u[0], n !== e.type) return _r_();
u[1].indexOf("pageview:") ? (o = u[1], _ = u[2] || "", s = u[3] || "", l = u[4] || "") :d = u[1].substr(u[1].indexOf(":") + 1);
} else {
if (u !== e.type) return _r_();
n = u, o = c.data("ga-category"), _ = c.data("ga-action"), s = c.data("ga-label"), l = c.data("ga-value"), d = c.data("ga-track-pageview");
}
n && "string" == typeof n ? o && _ && s ? ("number" == typeof l && l >= 0 ? i.trackEvent(o, _, s, l) :i.trackEvent(o, _, s), r.log("trackEvent:", a({
category:o,
action:_,
label:s,
value:l
}))) :d && (i.trackPageview(null, d), r.log("trackPageview:", a({
pageview:d
}))) :r.warn("trackEvent: DOM Event:" + n + " not supported!"), _r_();
}), _r_();
}), window.booking.google ? window.booking.google = $.extend(window.booking.google, B.require("ga-tracker")) :window.booking.google = B.require("ga-tracker"), function() {
_i_("3da:190");
var e = B.require("jquery");
booking[sNSStartup].event_tracking = {
priority:9,
init:function() {
if (_i_("3da:1412"), "undefined" != typeof _gaq) {
e(window).on("load", function() {
if (_i_("3da:2671"), "undefined" != typeof booking.env.b_changed_language) {
var e = booking.env.b_lang_for_url, t = booking.env.b_changed_language;
booking.google.trackEvent(booking.google.changeTracker, "Language", "From " + t + " to " + e);
}
_r_();
});
for (var t = e(".error, .errorSimpleMsg"), i = 0; i < t.length; i++) if (0 == e(t[i]).hasClass("disabled")) {
var n = t[i].getAttribute("rel");
null != n && booking.google.trackEvent(booking.google.errorTracker, "Display", n);
}
this.bindCustomTrackClick(), "undefined" != typeof trigger_error404_event_tracking && 1 == trigger_error404_event_tracking && booking.google.trackEvent(booking.google.pageviewTracker, "404 Error", document.location.pathname + document.location.search + "&from=" + document.referrer), "hotel" === booking.env.b_action && (B.et.track("ZdffZZGbIKGYBFFZBBTcO") || e("#hcta").click(function() {
_i_("3da:2925");
var e = "Hotel cta";
booking.env.track_htca && (e += "v" + booking.env.track_htca), booking.google.trackEvent(booking.google.clickTracker, e, this.getAttribute("data-id")), _r_();
})), e("#bookconditions").click(function() {
_i_("3da:2672"), booking.google.trackEvent(booking.google.clickTracker, "Booking Conditions", "Link clicked"), _r_();
}), e("#localcurr_dis a").mouseenter(function() {
_i_("3da:2673"), booking.google.trackEvent(booking.google.clickTracker, "Action: " + booking.env.b_action, "hover_tooltip_local_currency"), _r_();
}), booking.env.smart_deals_count && booking.env.smart_deals_count > 0 && booking.google.trackEvent(booking.google.viewTracker, "Smart deal filter", booking.env.smart_deals_count + " deals displayed"), booking.env.b_track_search_from_tool && B.google.trackEvent(B.google.BBToolTracker, "Search - search from tool", "Search Page");
}
return _r_(!0);
},
bindCustomTrackClick:function(t) {
_i_("3da:1413"), !t || t.length ? t = e(".custom_track") :t.hasClass(".custom_track") || (t = t.find(".custom_track")), t.click(function() {
_i_("3da:2381");
var t = e(this).attr("data-trackname"), i = e(this).attr("data-track-prefix") || booking.env.b_action, n = e(this).attr("data-tracker") || "userProfileTracker";
t && booking.google[n] && booking.google.trackEvent(booking.google[n], i + " : " + t, booking.env.b_action), _r_();
}), _r_();
}
}, _r_();
}(), function(e, t, i, n, r) {
_i_("3da:191");
var a = !1, o = !1, _ = [], s = 0, l = function(i) {
_i_("3da:942"), s && console.log("googleInit");
var r;
if (!a) {
a = !0, r = t.createElement("script"), r.type = "text/javascript", r.src = n.google_map_current_url;
var l = function() {
_i_("3da:2382"), o = !0;
for (var e, t = 0, i = _.length; i > t; t++) e = _[t], e.cb && e.cb.apply(e.ctx || null, e.args || []);
_r_();
};
e.rerunCreateMap = l, $("head").append(r);
}
o || _.push(i), _r_();
};
i.google_geo_api = {
loaded:function() {
return _i_("3da:1414"), _r_(o && e.google && google.maps);
},
load:l
}, _r_();
}(window, document, booking, booking.env, sNSStartupLoad), B.when({
events:"load"
}).run(function() {
if (_i_("3da:192"), "undefined" == typeof B.env.google_analytics_tracking_enabled || !B.env.google_analytics_tracking_enabled) return _r_();
var e, t = booking.env, i = t.b_action;
t.survey_key && $('div#survey[surveykey="' + t.survey_key + '"] button[value="accept"]').click(function() {
_i_("3da:1415"), booking.google.trackPageview("click", t.surveytracklink), _r_();
}), "confirmation" === i && $("#external_review_invite_link").click(function() {
_i_("3da:1416"), booking.google.trackPageview("click", "/outgoinglink/confirmation/external_review_invite/"), _r_();
}), /error/.test(i) && (e = (t.b_referrer || "").split("?")[0].replace(window.location.origin, "") || "dont-know", booking.google.trackPageview("click", "/error-action/" + i + "/caused-by" + e)), _r_();
}), B.define("gta/impression-tracking", [ "et", "jquery" ], function(e, t) {
_i_("3da:193");
var i = !0, n = [], r = [], a = null;
function o(e, t) {
_i_("3da:496");
var i = e.getAttribute("id");
i || (i = ("gta-" + t.getMethodName() + "-" + t.getCurrentPlacementName()).toLowerCase(), e.setAttribute("id", i)), B.when({
events:[ "view #" + i, "gta:lightbox:init #" + i ]
}).run(function() {
_i_("3da:1417"), l(t.getCurrentPlacementName(), t.getMethodName()), _r_();
}), _r_();
}
function _(e) {
_i_("3da:497");
var t = e.getAttribute("id"), i = e.getAttribute("data-placement");
t || (t = ("gta-link-" + i).toLowerCase(), e.setAttribute("id", t)), B.when({
events:[ "view #" + t, "gta:lightbox:init #" + t ]
}).run(function() {
_i_("3da:1418"), l(i, "link"), _r_();
}), _r_();
}
function s() {
_i_("3da:498"), n.length && r.length && (d({
placement:n.join("|"),
method:r.join("|")
}), n.length = 0, r.length = 0), _r_();
}
function l(e, t) {
if (_i_("3da:499"), !e || !t) return _r_();
i ? (clearTimeout(a), n.push(e), r.push(t), a = setTimeout(s, 500)) :d({
placement:e,
method:t
}), _r_();
}
function d(e) {
_i_("3da:500"), t.ajax({
url:"/gta_impression",
type:"POST",
data:e
}), _r_();
}
return _r_({
trackWidgetImpressionOnView:function(e, t) {
_i_("3da:1096"), o(e, t), _r_();
},
trackLinkImpressionOnView:function(e) {
_i_("3da:1097"), _(e), _r_();
},
trackImpression:function(e, t) {
_i_("3da:1098"), l(e, t), _r_();
}
});
}), B.require([ "gta/impression-tracking", "jquery" ], function(e, t) {
_i_("3da:194"), t(".gta-link-track").each(function(t, i) {
_i_("3da:943"), e.trackLinkImpressionOnView(i), _r_();
}), _r_();
}), B.define("gta/country-flags-dropdown", [ "et" ], function(e) {
return _i_("3da:195"), _r_({
init:function(t, i) {
_i_("3da:1099");
var n = i || $(".gta-country-flag-dropdown").get(0), r = $(".gta-cfd-list", n), a = $(".gta-cfd-value", n), o = a.children(".cprefix"), _ = a.children('[class^="cflag"]').get(0), s = r.children(), l = !1, d = $(document);
t.setCountryCode(o.data("prefix"), {
isUserAction:!1
});
function c() {
_i_("3da:1833"), r.hide(), l = !1, d.unbind("click", h), d.unbind("keypress", f), _r_();
}
function u() {
_i_("3da:1834"), r.show(), l = !0, d.bind("click", h), d.bind("keypress", f), e.stage("dLPLOefMXWSSIVDdWRe", 1), _r_();
}
function h(e) {
_i_("3da:1835"), $.contains(n, e.target) || c(), _r_();
}
function f(t) {
_i_("3da:1836");
var i = String.fromCharCode(t.which).toLowerCase().replace(/[\n\s]/g, "");
if (!i.length) return _r_();
var n = s.filter('[data-s^="' + i + '"]').get(0);
if (n) {
var r = d.scrollTop();
n.scrollIntoView(!0), d.scrollTop(r);
}
e.stage("dLPLOefMXWSSIVDdWRe", 2), _r_();
}
r.delegate("li", "click", function() {
_i_("3da:2180");
var i = $(this).data();
o.text(i.cc + " +" + i.prefix), _.className = _.className.replace(/cflag-\w+/, "cflag-" + i.cc.toLowerCase()), t.setCountryCode(i.prefix, {
isUserAction:!0
}), c(), e.stage("dLPLOefMXWSSIVDdWRe", 3), _r_();
}), a.bind("click", function() {
_i_("3da:2181"), l ? c() :u(), _r_();
}), _r_();
}
});
}), B.define("gta/base-widget", [ "gta/impression-tracking", "et" ], function(e, t) {
_i_("3da:196");
var i = [ "placement", "exp", "variant", "source", "city", "firstname", "lastname", "booknumber", "pincode", "authkey" ], n = function(e) {
_i_("3da:944"), this.dom = {
root:e,
wrapper:e.parent(),
label:e.find(".gta-widget-label"),
input:e.find(".gta-widget-input"),
button:e.find(".gta-widget-submit"),
message:e.find(".gta-widget-message")
}, this.sharedParams = this.dom.wrapper.data(), this.payload = this.getPayload(), this.isInputMasked = this.dom.input.hasClass("gta-widget-input-masked"), this.addEvents(), _r_();
};
return n.prototype.addEvents = function() {
_i_("3da:945"), this.dom.button.bind("click", this.onSubmit.bind(this)), this.dom.label.bind("click", function() {
_i_("3da:2383"), this.dom.input.focus(), _r_();
}.bind(this)), this.dom.input.bind("keyup", function(e) {
_i_("3da:2384"), t.stage("dLPLOefMXWSSIVDdWRe", 4), 13 == e.keyCode && this.onSubmit(e), _r_();
}.bind(this)), e.trackWidgetImpressionOnView(this.dom.root.get(0), this), _r_();
}, n.prototype.getPayload = function() {
_i_("3da:946");
var e = {
stype:B.env.b_site_type_id,
page:B.env.b_action
};
for (var t in this.sharedParams) this.sharedParams.hasOwnProperty(t) && i.indexOf(t) > -1 && (e[t] = this.sharedParams[t]);
return _r_(e);
}, n.prototype.getCurrentPlacementName = function() {
return _i_("3da:947"), _r_(this.dom.wrapper.data("override-placement") || this.sharedParams.placement);
}, n.prototype.getMethodName = function() {
return _i_("3da:948"), _r_(this.method);
}, n.prototype.onSubmit = function(e) {
if (_i_("3da:949"), e.preventDefault(), this.hideMessage(), !this.validate()) return _r_();
this.payload.placement = this.getCurrentPlacementName(), this.disableInputs(), this.sendRequest(), _r_();
}, n.prototype.sendRequest = function() {
_i_("3da:950"), $.ajax({
url:this.action,
type:"POST",
data:this.payload,
success:this.onSucessCallback.bind(this),
error:this.onErrorCallback.bind(this)
}), _r_();
}, n.prototype.onSucessCallback = function(e) {
if (_i_("3da:951"), "true" === e.isOk) this.showMessage("success"), this.enableInputs(), t.stage("dLPLOefMXWSSIVDdWRe", 6); else switch (e.err) {
case "limited":
this.showMessage("limit");
break;

case "multiple":
this.showMessage("multiple");
break;

case "invalid":
this.showMessage("validation"), this.enableInputs(), this.dom.input.focus(), t.stage("dLPLOefMXWSSIVDdWRe", 5);
break;

default:
this.showMessage("error"), this.enableInputs();
}
_r_();
}, n.prototype.onErrorCallback = function() {
_i_("3da:952"), this.showMessage("error"), this.enableInputs(), _r_();
}, n.prototype.validate = function() {
return _i_("3da:953"), _r_(!1);
}, n.prototype.showMessage = function(e) {
_i_("3da:954"), this.dom.message.addClass(e.indexOf("success") > -1 ? "success" :"invalid").text(this.dom.message.data(e)), this.dom.message.slideDown(), _r_();
}, n.prototype.hideMessage = function() {
_i_("3da:955"), this.dom.message.hide().removeClass("success").removeClass("invalid"), _r_();
}, n.prototype.disableInputs = function() {
_i_("3da:956"), this.dom.button.attr("disabled", !0), this.dom.input.attr("disabled", !0), _r_();
}, n.prototype.enableInputs = function() {
_i_("3da:957"), this.dom.button.removeAttr("disabled"), this.dom.input.removeAttr("disabled"), _r_();
}, n.extend = function() {
if (_i_("3da:958"), void 0 != Object.create) return _r_(Object.create(n.prototype));
function e() {}
return e.prototype = n.prototype, _r_(new e());
}, _r_(n);
}), B.define("gta/sms-widget", [ "gta/base-widget", "gta/country-flags-dropdown", "et" ], function(e, t, i) {
_i_("3da:197");
var n = function(i) {
_i_("3da:959"), this.method = "sms", this.action = "/send_app_sms_v2", e.apply(this, arguments), this.dom.countryFlagsDropdown = this.dom.root.find(".gta-country-flag-dropdown"), this.countryCode = "", this.dom.countryFlagsDropdown.length && t.init(this, this.dom.countryFlagsDropdown.get(0)), _r_();
};
return n.prototype = e.extend(), n.prototype.addEvents = function() {
_i_("3da:960"), e.prototype.addEvents.apply(this, arguments);
var t = this;
this.isInputMasked && (this.dom.input.one("keyup input", function() {
_i_("3da:2385"), t.clearMaskedInput(), _r_();
}), this.dom.input.one("oncut", function() {
_i_("3da:2386"), setTimeout(t.clearMaskedInput, 0), _r_();
}), this.dom.input.one("onpropertychange", function() {
_i_("3da:2387"), "value" == event.propertyName && t.clearMaskedInput(), _r_();
})), _r_();
}, n.prototype.getPayload = function() {
_i_("3da:961");
var t = e.prototype.getPayload.apply(this);
return t.msgtype = "app_download_sms", _r_(t);
}, n.prototype.validate = function() {
if (_i_("3da:962"), this.isInputMasked) return delete this.payload.telno, delete this.payload.cc_prefix, _r_(!0);
var e = this.countryCode + this.dom.input.val().replace(/\D/g, "");
if (e.length < 6) return this.showMessage("validation"), _r_(!1);
return this.payload.telno = e, this.payload.cc_prefix = this.countryCode, _r_(!0);
}, n.prototype.setCountryCode = function(e, t) {
_i_("3da:963"), this.countryCode = e, this.isInputMasked && t.isUserAction && this.clearMaskedInput(), _r_();
}, n.prototype.clearMaskedInput = function() {
_i_("3da:964"), this.dom.input.val(""), this.isInputMasked = !1, _r_();
}, _r_(n);
}), B.define("gta/email-widget", [ "gta/base-widget" ], function(e) {
_i_("3da:198");
var t = function(t) {
_i_("3da:965"), this.method = "email", this.action = "/send_app_email_v2", e.apply(this, arguments), _r_();
};
return t.prototype = e.extend(), t.prototype.getPayload = function() {
_i_("3da:966");
var t = e.prototype.getPayload.apply(this);
return t.msgtype = "app_download_email", _r_(t);
}, t.prototype.validate = function() {
_i_("3da:967");
var e = this.dom.input.val();
if (!e) return _r_(!1);
if (!/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)) return this.showMessage("validation"), _r_(!1);
return this.payload.email = e, _r_(!0);
}, _r_(t);
}), B.require([ "gta/sms-widget", "gta/email-widget", "gta/base-widget", "et" ], function(e, t, i, n) {
_i_("3da:199");
var r = [];
$(".gta-sms-widget").each(function(t, i) {
_i_("3da:968"), r.push(new e($(i))), _r_();
}), $(".gta-email-widget").each(function(e, i) {
_i_("3da:969"), r.push(new t($(i))), _r_();
}), _r_();
}), B.require([ "gta/impression-tracking", "et", "jquery" ], function(e, t, i) {
_i_("3da:200");
var n = function(e) {
_i_("3da:970"), this.placeholder = i(e), this.placement = this.placeholder.data("placement"), this.image = null, this.init(), _r_();
};
n.prototype.loadImage = function() {
_i_("3da:971"), this.image = new Image(), this.image.onload = function() {
_i_("3da:2388"), this.placeholder.empty().append(this.image), e.trackImpression(this.placement, "qr"), _r_();
}.bind(this), this.image.src = this.placeholder.data("url"), _r_();
}, n.prototype.init = function() {
_i_("3da:972"), B.when({
events:[ "view #" + this.placeholder.attr("id"), "gta:lightbox:init #" + this.placeholder.attr("id") ]
}).run(this.loadImage.bind(this)), _r_();
}, i(".gta-qr-code-placeholder").each(function(e, t) {
_i_("3da:973"), new n(t), _r_();
}), _r_();
}), B.require([ "jquery", "et" ], function(e, t) {
"use strict";
_i_("3da:201"), B.when({
condition:"www" === B.env.b_site_type,
events:"ready"
}).run(function() {
_i_("3da:974");
var i = !1;
e(".gta-country-flag-dropdown").on("click", function() {
_i_("3da:2043"), i || (t.customGoal("dLPLOefAXZQCTBVfMZCbJXNLWe", 1), i = !0), _r_();
}), _r_();
}), _r_();
}), B.define("header/notifications/notifications", function(e, t, i) {
"use strict";
_i_("3da:202");
var n = !1, r = "1" === B.env.b_site_type_id, a = "2" === B.env.b_site_type_id;
i.exports = {
isLoggedIn:function() {
return _i_("3da:1420"), _r_(Number(B.env.auth_level) > 0);
},
init:function() {
_i_("3da:1421"), this.$root = $(".js-uc-notifications"), this._readNotificationsFromDOM(), this.isLoggedIn() && this.updateState(), this.bindEvents(), (this.getNotifications("unseen").length > 0 || this._hasMultipleTravelGuides) && this.lazySeen(), _r_();
},
refresh:function() {
_i_("3da:1422"), this._readNotificationsFromDOM(), this.isLoggedIn() && this.updateState(), _r_();
},
_readNotificationsFromDOM:function() {
_i_("3da:1423"), this._notifications = this.$root.find(".js-uc-notification").map(function(e, t) {
return _i_("3da:2773"), t = $(t), _r_({
type:t.attr("data-type"),
fingerprint:t.attr("data-fingerprint"),
id:t.data("id"),
seen:"0" !== String(t.attr("data-seen"))
});
}).toArray(), this._hasMultipleTravelGuides = this.getNotificationsByType("explorer_available").length > 1 || this.getNotificationsByType("multiple_travel_guides").length, _r_();
},
lazySeen:function() {
_i_("3da:1424");
var e = /notif_id=([\w\d]+)/.exec(window.location.href);
if (null == e) return _r_();
var t = e[1], i = this._notifications.filter(function(e) {
return _i_("3da:2674"), _r_(e.id === t);
})[0];
if (void 0 === i) return _r_();
r && this._hasMultipleTravelGuides && ("multiple_travel_guides" === i.type || "explorer_available" === i.type), _r_();
},
seen:function(e, t) {
_i_("3da:1425"), e.seen = t, this.getNotificationNode(e).toggleClass("uc-notification-seen", t).toggleClass("uc-notification-unseen", !t), _r_();
},
markAsSeen:function(e) {
_i_("3da:1426");
var t = this;
if (0 === e.length) return _r_();
var i = JSON.stringify(e), r = "/seen_notifications";
if (e.forEach(function(e) {
_i_("3da:2389"), t.seen(e, !0), _r_();
}), this.updateState(), n) return _r_();
$.ajax({
type:"POST",
url:r,
data:{
notifications:i
}
}), _r_();
},
_setCount:function(e) {
_i_("3da:1427");
var t = a ? $(".js-uc-notifications-bell-count") :this.$root.find(".js-uc-notifications-bell-count");
if (0 === t.length) return _r_();
t.text(e), t.toggleClass("g-hidden", 0 === e), a && this.$root.toggleClass("g-hidden", 0 === this._notifications.length), _r_();
},
updateState:function() {
_i_("3da:1428"), this.updateCounter(), this.$root.toggleClass("uc-notifactions-has-unseen", this.getNotifications("unseen").length > 0), _r_();
},
updateCounter:function() {
_i_("3da:1429"), this._setCount(this.getNotifications("unseen").length + this._getUnseenCountsFromGroups()), this.$root.toggleClass("uc-notifications_new", 0 !== this.getNotifications().length), _r_();
},
bindEvents:function() {
_i_("3da:1430");
var e = this;
B.eventEmitter.bind("header:notifications:item_removed", function() {
_i_("3da:2390"), e.updateState(), _r_();
}), r && (B.eventEmitter.bind("uc_popover_showed", function(e, t) {
_i_("3da:2675"), "notifications" === t.id && (B.eventEmitter.trigger("header:notifications:shown"), B.events.emit("header:notifications:shown")), _r_();
}), this.$root.delegate(".js-uc-notification a", "click", function(t) {
_i_("3da:2676");
var i = e.getNotificationFromEvent(t);
if (null == i) return _r_();
_r_();
})), B.eventEmitter.bind("header:notifications:hidden", function() {
_i_("3da:2391"), e.updateState(), _r_();
}), this.$root.delegate(".js-uc-notification-close", "click", function(t) {
_i_("3da:2392");
var i = e.getNotificationFromEvent(t);
e.hideNotification(i), _r_();
}), this.$root.delegate(".js-uc-notification-seen", "click", function(t) {
_i_("3da:2393");
var i = e.getNotificationFromEvent(t);
"thread" === i.type || e.markAsSeen([ i ]), _r_();
}), _r_();
},
getNotificationNode:function(e) {
return _i_("3da:1431"), _r_(this.$root.find('[data-fingerprint="' + e.fingerprint + '"][data-type="' + e.type + '"]'));
},
getNotificationData:function(e) {
_i_("3da:1432");
var t = null;
return this.getNotifications().forEach(function(i) {
_i_("3da:2394"), $(e).attr("data-type") === i.type && $(e).attr("data-fingerprint") === i.fingerprint && (t = i), _r_();
}), _r_(t);
},
getNotificationFromEvent:function(e) {
_i_("3da:1433");
var t = $(e.currentTarget).closest(".js-uc-notification");
return _r_(t && this.getNotificationData(t));
},
hideNotification:function(e) {
_i_("3da:1434");
var t = this.getNotifications().indexOf(e);
n || $.post("/dismiss_user_notification", e), this.getNotificationNode(e).addClass("uc-notification_hidden"), -1 !== t && this.getNotifications().splice(t, 1), B.eventEmitter.trigger("header:notifications:item_removed"), _r_();
},
_filters:{
seen:function(e) {
return _i_("3da:2044"), _r_(e.seen);
},
unseen:function(e) {
return _i_("3da:2045"), _r_(!e.seen);
}
},
getNotifications:function(e) {
if (_i_("3da:1435"), this._filters[e]) return _r_(this._notifications.filter(this._filters[e]));
return _r_(this._notifications);
},
getNotificationsByType:function(e) {
return _i_("3da:1436"), _r_(this._notifications.filter(function(t) {
return _i_("3da:2395"), _r_(t.type === e);
}));
},
_getUnseenCountsFromGroups:function() {
_i_("3da:1437");
var e = 0;
return this.$root.find(".uc-notifications-group_iframe").each(function(t, i) {
_i_("3da:2396");
var n = $(i).data("unread-count");
"undefined" != typeof n && (e += n), _r_();
}), _r_(e);
}
}, _r_();
}), B.require([ "require" ], function(e) {
_i_("3da:203"), e("header/notifications/notifications").init(), _r_();
}), booking[sNSStartup].header_cleaned_links = {
priority:9,
init:function() {
_i_("3da:501"), $(".js-user-access-form--back-to-signin").click(function() {
_i_("3da:1438");
var e = $(".user_access_signin_menu, .user_access_signup_menu");
e.find(".js-user-access-form--signin").removeClass("g-hidden"), e.find(".js-user-access-form--signup").removeClass("g-hidden"), e.find(".js-user-access-form--reminder").addClass("g-hidden"), e.find(".js-user-access-form--reminder-sent").addClass("g-hidden"), _r_();
}), $("body").delegate(".forgot_link_look, .forgot_pass_trigger", "click", function(e) {
if (_i_("3da:1439"), e.preventDefault(), B.env.b_show_user_accounts_features && $(this).closest(".user_access_signin_menu, .user_access_signup_menu").length) {
var t = $(this).closest(".user_access_signin_menu, .user_access_signup_menu");
t.find(".js-user-access-form--signin").addClass("g-hidden"), t.find(".js-user-access-form--signup").addClass("g-hidden"), t.find(".js-user-access-form--reminder").removeClass("g-hidden"), t.find(".js-user-access-form--reminder .user_access_email").val(t.find(".js-user-access-form--signin .user_access_email, .js-user-access-form--signup .user_access_email").val()).focus().select(), booking.eventEmitter.one("UA:password-reminder-sent", function() {
_i_("3da:2677"), t.find(".form-loading").hide(), t.find(".alert-error").removeClass("alert-displayed"), t.find(".js-user-access-form--reminder").addClass("g-hidden"), t.find(".js-user-access-form--reminder-sent").removeClass("g-hidden"), _r_();
});
} else {
var i = $(this).attr("data-href") || $(this).attr("href");
window.open(i, "_blank", "left=42,top=42,height=502px,width=440px,resizable=false");
}
_r_();
}), $("body").delegate(".hide_reminder_iframe", "click", function() {
_i_("3da:1440"), $(this).parent(".reminder_iframe_wrapper").remove(), $(".better_login").show(), booking[sNSStartup].new_personal_menu.recheckHeight(), booking[sNSStartup].new_personal_menu.openSelect("current_account"), _r_();
}), $("#foldout_loggedin").delegate("li", "click", function() {
_i_("3da:1441");
var e = $(this);
e.hasClass("seo_link_look") && e.attr("data-href") && (e.hasClass("my_logout") || (window.location = e.attr("data-href"))), _r_();
}), _r_();
}
}, function() {
_i_("3da:204");
var e = B.require("jquery");
booking[sNSStartup].hotel_share_center = {
priority:9,
share_center:null,
share_center_popup:null,
prev_share_center_link:null,
init:function() {
_i_("3da:1442");
var t = !1;
"hotel" === B.env.b_action && e(".js-disable_share_center_button_icon").length && (t = !0);
var i = this;
e(".share_center .share_center_button strong, .general_share_center_button, div.hp_improve_share_center_button .share_center_button_icon").click(function(n) {
if (_i_("3da:2397"), t) return _r_(!1);
if (e("#general_share_center").length) {
i.share_center = e("#general_share_center").get(0), e(i.share_center).removeClass("has_short_url");
var r = e(this).attr("data-hotelname"), a = e(this).attr("data-hotelimage"), o = e(this).attr("data-sharelinks").split(","), _ = e(i.share_center).attr("data-checkinvars"), s = [ e(this).offset().left - e("#bodyconstraint-inner").offset().left, e(this).offset().top ], l = '<img src="' + a + '" width="50" height="50" alt="" /><h3>' + r + "</h3><small>" + o[0] + "</small><hr />";
e(".details", i.share_center).html(l), e("#share_center_url").val(o[0]), e(".sc_facebook a", i.share_center).attr("href", o[1] + _), e(".sc_google a", i.share_center).attr("href", o[2] + _), e(".sc_twitter a", i.share_center).attr("href", o[3] + _), e(".sc_email a", i.share_center).attr("href", o[4] + _), e(i.share_center).css({
left:s[0] + "px",
top:s[1] + "px"
});
} else i.share_center = e(this).closest(".share_center");
return i.share_center_popup = e(".share_center_popup", i.share_center), e(i.share_center).hasClass("open") ? null == i.prev_share_center_link || i.prev_share_center_link == this ? i.close() :i.addShortUrl() :(i.prev_share_center_link = this, i.open()), _r_(!1);
}), e(".share_center .close").click(function() {
return _i_("3da:2398"), i.close(" - Corner"), _r_(!1);
}), e(".share_center .out_link a").click(function() {
_i_("3da:2399");
var t = e(this).attr("rel"), i = e(this).attr("href");
return _gaq.push([ "_trackSocial", "Share Center", "Link Share on" + t ]), window.open(i, "sc_share", "menubar=0,resizable=1,width=600,height=400"), _r_(!1);
}), e(".share_center .sc_email a").click(function() {
_i_("3da:2400"), _gaq.push([ "_trackSocial", "Share Center", "Link Share onEmail" ]), _r_();
}), e(".share_center_url").click(function() {
_i_("3da:2401"), this.select(), e(".copy_hint", e(this).closest(".share_center")).fadeIn("fast"), _gaq.push([ "_trackSocial", "Share Center", "Copy URL" ]), _r_();
}), e(".share_center_url").blur(function() {
_i_("3da:2402"), e(".share_center .copy_hint", this).fadeOut("fast"), _r_();
}), _r_();
},
open:function() {
_i_("3da:1443"), e(this.share_center_popup).fadeIn("fast"), e(this.share_center).addClass("open"), _gaq.push([ "_trackSocial", "Share Center", "Open Share Center" ]), this.addShortUrl(), _r_();
},
addShortUrl:function() {
if (_i_("3da:1444"), !e(this.share_center).hasClass("has_short_url")) {
var t = e(".share_center_url", this.share_center).val() + "?label=social_sharecenter_copy_url";
e(this.share_center).data("checkin") && e(this.share_center).data("checkout") && (t = t + "&checkin=" + e(this.share_center).data("checkin") + "&checkout=" + e(this.share_center).data("checkout")), e.get("/short_uri?url=" + escape(t) + "&aid=" + booking.env.aid, function(t) {
_i_("3da:2678");
var i = "http://booking.com/" + t.short_url;
e("h3 + small", this.share_center).text(i), e(".share_center_url", this.share_center).val(i), e(this.share_center).addClass("has_short_url"), _r_();
});
}
_r_();
},
close:function(t) {
_i_("3da:1445"), this.prev_share_center_link = null, e(this.share_center_popup).fadeOut("fast"), e(this.share_center).removeClass("open"), _gaq.push([ "_trackSocial", "Share Center", "Close Share Center" + t ]), _r_();
}
}, _r_();
}(), function() {
"use strict";
_i_("3da:205");
var e, t = window.jQuery, i = {
selector_badge:".d-deal",
className_tt_left:"d-deal__tooltip-left",
className_tt_right:"d-deal__tooltip-right",
className_tt_preinit:"d-deal__pre-init"
}, n = t(window);
function r() {
_i_("3da:502"), clearTimeout(e), e = setTimeout(function() {
_i_("3da:1837");
var r, a, o = n.width() || 1e3;
clearTimeout(e), t(i.selector_badge).each(function(e, n) {
_i_("3da:2591"), r = t(n), r.removeClass(i.className_tt_preinit), r.removeClass(i.className_tt_left), r.removeClass(i.className_tt_right), a = r.offset().left, a > o - 270 ? r.addClass(i.className_tt_right) :200 > a && r.addClass(i.className_tt_left), _r_();
}), _r_();
}, 300), _r_();
}
r(), t(window).on("resize", r), _r_();
}(), "object" != typeof JSON && (JSON = {}), function() {
"use strict";
_i_("3da:206");
function f(e) {
return _i_("3da:503"), _r_(10 > e ? "0" + e :e);
}
"function" != typeof Date.prototype.toJSON && (Date.prototype.toJSON = function() {
return _i_("3da:1446"), _r_(isFinite(this.valueOf()) ? this.getUTCFullYear() + "-" + f(this.getUTCMonth() + 1) + "-" + f(this.getUTCDate()) + "T" + f(this.getUTCHours()) + ":" + f(this.getUTCMinutes()) + ":" + f(this.getUTCSeconds()) + "Z" :null);
}, String.prototype.toJSON = Number.prototype.toJSON = Boolean.prototype.toJSON = function() {
return _i_("3da:2046"), _r_(this.valueOf());
});
var cx = /[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, escapable = /[\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]/g, gap, indent, meta = {
"\b":"\\b",
"	":"\\t",
"\n":"\\n",
"\f":"\\f",
"\r":"\\r",
'"':'\\"',
"\\":"\\\\"
}, rep;
function quote(e) {
return _i_("3da:504"), escapable.lastIndex = 0, _r_(escapable.test(e) ? '"' + e.replace(escapable, function(e) {
_i_("3da:2182");
var t = meta[e];
return _r_("string" == typeof t ? t :"\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4));
}) + '"' :'"' + e + '"');
}
function str(e, t) {
_i_("3da:505");
var i, n, r, a, o, _ = gap, s = t[e];
switch (s && "object" == typeof s && "function" == typeof s.toJSON && (s = s.toJSON(e)), "function" == typeof rep && (s = rep.call(t, e, s)), typeof s) {
case "string":
return _r_(quote(s));

case "number":
return _r_(isFinite(s) ? String(s) :"null");

case "boolean":
case "null":
return _r_(String(s));

case "object":
if (!s) return _r_("null");
if (gap += indent, o = [], "[object Array]" === Object.prototype.toString.apply(s)) {
for (a = s.length, i = 0; a > i; i += 1) o[i] = str(i, s) || "null";
return r = 0 === o.length ? "[]" :gap ? "[\n" + gap + o.join(",\n" + gap) + "\n" + _ + "]" :"[" + o.join(",") + "]", gap = _, _r_(r);
}
if (rep && "object" == typeof rep) for (a = rep.length, i = 0; a > i; i += 1) "string" == typeof rep[i] && (n = rep[i], r = str(n, s), r && o.push(quote(n) + (gap ? ": " :":") + r)); else for (n in s) Object.prototype.hasOwnProperty.call(s, n) && (r = str(n, s), r && o.push(quote(n) + (gap ? ": " :":") + r));
return r = 0 === o.length ? "{}" :gap ? "{\n" + gap + o.join(",\n" + gap) + "\n" + _ + "}" :"{" + o.join(",") + "}", gap = _, _r_(r);
}
_r_();
}
"function" != typeof JSON.stringify && (JSON.stringify = function(e, t, i) {
_i_("3da:1447");
var n;
if (gap = "", indent = "", "number" == typeof i) for (n = 0; i > n; n += 1) indent += " "; else "string" == typeof i && (indent = i);
if (rep = t, t && "function" != typeof t && ("object" != typeof t || "number" != typeof t.length)) throw new Error("JSON.stringify");
return _r_(str("", {
"":e
}));
}), "function" != typeof JSON.parse && (JSON.parse = function(text, reviver) {
_i_("3da:1448");
var j;
function walk(e, t) {
_i_("3da:2047");
var i, n, r = e[t];
if (r && "object" == typeof r) for (i in r) Object.prototype.hasOwnProperty.call(r, i) && (n = walk(r, i), void 0 !== n ? r[i] = n :delete r[i]);
return _r_(reviver.call(e, t, r));
}
if (text = String(text), cx.lastIndex = 0, cx.test(text) && (text = text.replace(cx, function(e) {
return _i_("3da:2774"), _r_("\\u" + ("0000" + e.charCodeAt(0).toString(16)).slice(-4));
})), /^[\],:{}\s]*$/.test(text.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, "@").replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, "]").replace(/(?:^|:|,)(?:\s*\[)+/g, ""))) return j = eval("(" + text + ")"), _r_("function" == typeof reviver ? walk({
"":j
}, "") :j);
throw new SyntaxError("JSON.parse");
}), _r_();
}(), $.cookie("b") ? window.b_cookie = JSON.parse($.cookie("b")) || {} :window.b_cookie = {};

var dont_execute_in_tdot = function() {
_i_("3da:207");
var e = B.require("jquery"), t = booking.env, i = booking[sNSStartupLoad].show_language = {
priority:9,
init:function() {
_i_("3da:1838");
var n = function() {
_i_("3da:2592"), window.b_cookie.langPrompt = "dontshow", "undefined" != typeof JSON && e.cookie("b", JSON.stringify(window.b_cookie), {
expires:30,
path:"/",
domain:t.b_domain_end
}), _r_();
};
if ("undefined" == typeof window.b_cookie && (window.b_cookie = {}), e("#langselectbutton, #languageselect input").hide(), e("#langselectformlist, #currList").change(function() {
_i_("3da:2593"), e("#languageselect")[0].submit(), n(), _r_();
}), e(".current_language, .prompt_close").click(function(t) {
_i_("3da:2594"), t.preventDefault(), e(".language_prompt").hide(), e.get("/general." + booking.env.b_lang + ".html?tmpl=blank"), _r_();
}), e(".language_flags").click(function() {
_i_("3da:2595"), n(), _r_();
}), t.show_language_suggestion) {
if (window.b_cookie.countLang) if (isNaN(window.b_cookie.countLang)) t.language_dialog_count2 = 1, window.b_cookie.countLang = 1; else {
var r = parseInt(parseInt(window.b_cookie.countLang, 10) + 1, 10);
4 >= r && (t.language_dialog_count2 = r, window.b_cookie.countLang = t.language_dialog_count2);
} else t.language_dialog_count2 = 1, window.b_cookie.countLang = 1;
"undefined" != typeof JSON && e.cookie("b", JSON.stringify(window.b_cookie), {
expires:30,
path:"/",
domain:t.b_domain_end
}), "dontshow" !== window.b_cookie.langPrompt && t.language_dialog_count2 < 4 && !booking.affiliate.platform.isHybrid && setTimeout(i.createAlert, 2e3);
}
_r_();
},
createAlert:function(i) {
_i_("3da:1839");
var n, r = t.show_language_suggestion, a = !1, o = "", _ = "", s = "";
if (r) {
var l = 230, d = e("#current_currency").width(), c = e("#current_language").width(), u = Math.round(d + c / 2 - l / 2), h = "";
e("#languageselect .language-wrapper").length ? (n = e("#languageselect .language-wrapper"), o = "margin-top:10px;", _ = "top: -2px;", t.b_is_ie7 && (s = "margin-top:25px;left:100px;"), a = !0) :(n = e("#personal_form"), _ = "top: -11px;", s = "top:40px;"), h += '<div id="lang-prompt" style="display:none;height:1px;position:absolute;z-index:50;width:' + l + "px;left:" + u + "px;" + s + '"><div style="position:absolute;zoom:1;' + _ + ";left:120px;width:17px;height:13px;background:url('//s-ec.bstatic.com/static/img/experiments/top-info-arrrow2/932e26ee2c70a335e5031bf87df7595bf93ca5b9.png');\"></div><div style=\"border:2px solid #a2bbda;padding:10px;background:#e6edf6;width:230px;-moz-box-shadow:0 1px 2px rgba(0,0,0,.7);-webkit-box-shadow:0 1px 2px rgba(0,0,0,.7);" + o + '"><a href="#" class="close" style="float:right;font-weight:normal;font-size:12px;line-height:1.3;opacity:.35;filter:alpha(opacity=35);">' + t.transl_close_x + "</a>", h += '<a href="#scs" id="lang_change_link" class="lang_change_link" style="display:block;font-weight:normal;margin-right:50px;padding-left:40px;white-space:normal;background:url(' + B.tools.jsStaticUrl("/static/img/flags/24/" + t.b_flag_to_suggest + ".png") + ') no-repeat;" data-lang-code="' + r.suggested_lang_select + '">' + r.transl_change_page_lang_to_x + "</a>", h += "</div></div>", n.append(h), e("#lang-prompt").fadeIn("slow"), booking.google.trackEvent(booking.google.clickTracker, "Lang prompt", "Show"), e("#lang-prompt .close").click(function() {
return _i_("3da:2775"), window.b_cookie.langPrompt = "dontshow", "undefined" != typeof JSON && e.cookie("b", JSON.stringify(window.b_cookie), {
expires:30,
path:"/",
domain:t.b_domain_end
}), e("#lang-prompt").hide(), booking.google.trackEvent(booking.google.clickTracker, "Lang prompt", "Close"), _r_(!1);
}), e("#lang-prompt .lang_change_link").click(function() {
_i_("3da:2776");
var i;
window.b_cookie.langPrompt = "dontshow", "undefined" != typeof JSON && e.cookie("b", JSON.stringify(window.b_cookie), {
expires:30,
path:"/",
domain:t.b_domain_end
});
var n = e(this).attr("data-lang-code");
a ? (e("#langselectformlist").val(n), e("#languageselect")[0].submit()) :(i = e(".lang_" + n).find("a").attr("href"), i && (window.location = i)), _r_();
});
}
_r_();
}
};
_r_();
};

booking.env.b_is_tablet || dont_execute_in_tdot(), booking[sNSStartup].ng_last_viewed = {
priority:9,
resultsPerPage:booking.env.b_is_android_tablet ? 4 :5,
totalPages:0,
currentPage:0,
click:null,
googleTracked:!1,
lastViewedHotels:null,
overlay:null,
ajaxPath:"/userhistory." + booking.env.b_lang_for_url + ".html",
ajaxStatus:0,
staticPath:[],
init:function() {
if (_i_("3da:506"), "tdot" !== B.env.b_site_type) return _r_();
this.staticPath = booking.env.b_static_images_hostnames, $("body").append('<div id="ng-overlay" hidden></div>'), this.$overlay = $("#ng-overlay"), this.addEvents(), _r_();
},
addEvents:function() {
_i_("3da:507");
var e = this, t = $("#top_lw_wrapper"), i = $("a#top_last_viewed");
i.bind("click", {
exp:e
}, function(i) {
_i_("3da:1449");
var n = $("#history_count").attr("data-count");
e.googleTracked || (booking.google.trackEvent(booking.google.clickTracker, "Last Viewed In Header", "Opened Last Viewed Hotels from the header button"), e.googleTracked = !0), e.isVisibleOverlay() && "lw" == e.click ? (e.distroyOverlay(), t.hide()) :(e.createOverlay(), $(".milk_menu").hide(), t.show(), e.click = "lw"), !e.ajaxStatus && n && n - 0 > 0 && e.getLastViewedHotels(), "undefined" != typeof booking.maps && booking.maps.map_opened && booking.maps.close(), i.preventDefault(), _r_();
}), $("#ng-overlay, #current_account, #header_currency, #header_language").bind(B.env.pointer_events_f ? "click" :B.env.pointer_events.pointerclick, function(t) {
_i_("3da:1450");
var i = $(t.target);
"ng-overlay" == i.get(0).id && t.preventDefault(), e.distroyOverlay(), _r_();
}), $("#lw_next, #lw_prev").bind(B.env.pointer_events_f ? "click" :B.env.pointer_events.pointerclick, function(t) {
_i_("3da:1451");
var i = $(this);
t.preventDefault(), setTimeout(function() {
_i_("3da:2403"), e.renderItems(i.data("page")), _r_();
}, 300), _r_();
}), $("#sidebar_last_viewed").bind("click", function(e) {
_i_("3da:1452"), e.preventDefault(), $(document.body).animate({
scrollTop:0
}, 400, function() {
_i_("3da:2404"), i.trigger("click"), booking.google.trackEvent(booking.google.clickTracker, "Last Viewed In Header", "Opened Last Viewed Hotels from the sidebar button"), _r_();
}), _r_();
}), _r_();
},
handleCookieWarning:function(e) {
_i_("3da:508");
var t = !1;
if ("undefined" != typeof booking[sNSStartup].t_cookie_warning && !booking[sNSStartup].t_cookie_warning.getCookie() && /be|el|lt|pt|bg|es|lu|ro|cz|hu|si|dk|hr|mt|sk|de|it|fi|ee|cy|se|ie|lv|pl|uk|gb|fr|at/.test(booking.env.b_guest_country) && (t = !0), t) ; else if ("nl" != booking.env.b_guest_country || "undefined" != typeof booking[sNSExperiments].t_cookie_warning && booking[sNSExperiments].t_cookie_warning.getCookie()) return _r_();
var i = $("#cookie_warning");
i.length && ("show" == e ? i.show() :i.hide()), _r_();
},
createOverlay:function() {
_i_("3da:509");
var e = this;
e.handleCookieWarning(), $("#ng-overlay").height($("html").outerHeight(!0)).show(), _r_();
},
distroyOverlay:function() {
_i_("3da:510");
var e = this;
return $("#ng-overlay").hide(), $("#top_lw_wrapper").hide(), e.handleCookieWarning("show"), $(".milk_menu").hide(), $(".b_recentlyviewed").length && $(".b_recentlyviewed").removeClass("rv-content-visible"), _r_(!1);
},
isVisibleOverlay:function() {
_i_("3da:511");
var e = this;
return _r_(e.$overlay.is(":visible"));
},
getLastViewedHotels:function() {
_i_("3da:512");
var e = this, t = $("#lw_list #spinner");
return e.ajaxStatus = 1, $.ajax && $.ajax({
type:"GET",
cache:!1,
url:e.ajaxPath,
dataType:"JSON",
data:{
last_viewed_json:1,
tmpl:"profile/json",
stid:350339
},
success:function(i) {
if (_i_("3da:2405"), e.ajaxStatus = 2, "object" != typeof i && (i = $.parseJSON(i)), !i || $.isEmptyObject(i) || i instanceof Array && !i.length) return _r_();
e.lastViewedHotels = i, e.totalPages = Math.ceil(i.length / e.resultsPerPage), e.renderItems(1), t.remove(), _r_();
}
}), _r_(!0);
},
renderItems:function(e) {
_i_("3da:513");
var t = this, i = $("#lw_next"), n = $("#lw_prev"), r = $("#lw_list"), a = t.lastViewedHotels, o = (e - 1) * t.resultsPerPage, _ = o + t.resultsPerPage;
for (_ = _ > a.length ? a.length :_, r.empty(), t.currentPage = e, o; _ > o; o++) r.append(this.renderItem(a[o]));
t.currentPage < t.totalPages ? i.data("page", t.currentPage + 1).show() :i.hide(), 1 != t.currentPage ? n.data("page", t.currentPage - 1).show() :n.hide(), _r_();
},
renderItem:function(e) {
_i_("3da:514");
var t = this, i = "";
if (i += "<li>", i += '<a class="ui-helper-clearfix" href="', i += booking.env.b_nonsecure_hostname_signup + e.url + booking.env.b_query_params_with_lang, i += booking.env.b_url_params + booking.env.b_query_params_delimiter, "undefined" != booking.env.b_param_do_availability_check && (i += "do_availability_check=on" + booking.env.b_query_params_delimiter, booking.env.b_checkin_date && booking.env.b_checkout_date && (i += "checkin=" + booking.env.b_checkin_date, i += booking.env.b_query_params_delimiter, i += "checkout=" + booking.env.b_checkout_date)), i += '">', e.photo_id) {
var n = Math.round(Math.random());
i += '<img width="60px" height="60px" src="' + t.staticPath[n] + "/images/hotel/square60/" + e.photo_id.substring(0, 3) + "/" + e.photo_id + '.jpg " />';
}
return i += '<span class="lw_hotel_name">' + e.title + "</span>", e.rating && (i += e.class_is_estimated && "de" == e.hotel_cc1 ? '<span class="retina_estimated_small ' + t.loadRetinaRatingClass(e.rating, e.rating_half) + '"></span>' :e.class_is_estimated && "au" == e.hotel_cc1 ? '<span class="retina_estimated_small ' + t.loadRetinaRatingClass(e.rating, e.rating_half) + '"></span>' :'<span class="retina_stars_small ' + t.loadRetinaRatingClass(e.rating, e.rating_half) + '"></span>'), e.address && (i += '<span class="lw_address">' + e.address + "</span>"), i += "</a>", i += "</li>", _r_(i);
},
loadRatingClass:function(e, t) {
return _i_("3da:515"), _r_(t ? "circle" + e + "i4half" :"circle" + e + "i4");
},
loadRetinaRatingClass:function(e, t) {
return _i_("3da:516"), _r_("retina_stars_small_" + e + (t ? "half" :""));
}
}, booking[sNSExperimentsLoad].lazy_load_print_css = {
priority:9,
init:function() {
_i_("3da:517");
var e = document.createElement("link");
e.rel = "stylesheet", e.type = "text/css", e.href = booking.env.print_css_href, e.media = "print", document.getElementsByTagName("head")[0].appendChild(e), _r_();
}
}, booking.ensureNamespaceExists(sNSStartup), booking.lightbox = booking[sNSStartup].lightbox = function() {
_i_("3da:518");
var e, t, i, n, r, a, o = $("body"), _ = {
bAnimation:!0,
bCloseButton:!0,
bMaskClick:!0,
closeOnEsc:!0,
customWrapperClassName:"",
customMaskClassName:"",
bFullscreen:!1,
hideCallBack:null,
hideBeforeCallBack:null,
positionBeforeCallBack:null,
positionAfterCallBack:null,
cloneElement:!1,
bCanScroll:!1,
bOverflowVisible:!1,
autoCenter:!0,
limitHeight:!1,
opacity:.5,
autoWidth:!1,
position:"fixed",
topMargin:0,
bottomMargin:0,
preventBodyScroll:!1,
trapFocus:!1,
modalLabeledById:""
}, s = {}, l = [], d = function() {
_i_("3da:1840");
for (var e = [ "", "moz", "webkit" ], t = !1, i = 0; 3 > i; i++) if (e[i] + ("" === e[i] ? "b" :"B") + "oxSizing" in document.body.style) return _r_(!0);
return _r_(t);
}(), c = !1;
function u() {
_i_("3da:975");
var e = o.width();
a = parseInt(o.css("padding-right"), 10), o.css("overflow", "hidden");
var t = o.width() - e;
o.css("padding-right", a + t), _r_();
}
function h() {
_i_("3da:976"), o.css({
overflow:"auto",
paddingRight:a
}), _r_();
}
var f = function(i) {
_i_("3da:1453");
var n;
s.positionBeforeCallBack && s.positionBeforeCallBack(), e.css({
width:$(document).width(),
height:$(document).height()
});
var r = $(window).width(), a = Math.max(0, $(window).height() - s.topMargin - s.bottomMargin);
if (d || (r = r - parseInt(t.css("paddingLeft")) - parseInt(t.css("paddingRight")), a = a - parseInt(t.css("paddingTop")) - parseInt(t.css("paddingBottom"))), !s.limitHeight) {
var o = Math.max(0, $(window).height() - s.topMargin - s.bottomMargin);
t.outerHeight() > o ? (t.css("height", a), n = !0) :(t.css("height", ""), t.outerHeight() >= o && t.css("height", a));
}
if (t.outerWidth() > $(window).width()) t.css("width", r); else if (t.css("width", ""), t.outerWidth() >= $(window).width()) t.css("width", r); else if (s.autoWidth) {
var _ = t.children().first().outerWidth();
d && (_ += parseInt(t.css("padding-left"), 10) + parseInt(t.css("padding-right"), 10), _ += parseInt(t.css("border-left-width"), 10) + parseInt(t.css("border-right-width"), 10)), t.css({
width:_
});
}
var l = 0, c = 0;
s.bFullscreen ? t.css({
width:r,
height:a
}) :(l = Math.max(s.topMargin, $(window).height() / 2 - t.outerHeight() / 2), c = Math.max(0, $(window).width() / 2 - t.outerWidth() / 2));
var u = "hidden";
s.bCanScroll ? u = "auto" :s.bOverflowVisible && (u = "visible"), "absolute" == s.position ? (l = Math.max(0, $(window).height() / 2 - t.outerHeight() / 2), l += $(document).scrollTop(), t.css("position", "absolute")) :"dynamic" == s.position && !function() {
_i_("3da:2777");
var e = "modal-pos-abs", r = "modal-pos-to-fix";
n ? (l = i && i.preserveAbsolute && t.hasClass(e) ? (t.offset() || {}).top :$(document).scrollTop() + s.topMargin, t.css({
position:"absolute",
height:""
}).addClass(e)) :(t.css({
position:"fixed"
}), t.hasClass(e) ? t.removeClass(e).addClass(r) :t.removeClass(r)), _r_();
}(), t.css({
top:l,
left:c,
overflow:u
}), s.positionAfterCallBack && s.positionAfterCallBack(), _r_();
}, p = function(e) {
_i_("3da:1454"), t && t.is(":visible") && f(e), _r_();
}, g = function() {
if (_i_("3da:1455"), !t) return _r_();
s.hideBeforeCallBack && s.hideBeforeCallBack(), s.cloneElement || (n.prepend(i), i.css("display", r)), s.trapFocus && booking.trapFocus && booking.trapFocus.release(), e.remove(), t.remove(), c = !1, $("body").removeClass("modal-visible"), $(window).unbind("scroll", p), $(window).unbind("resize", p), s.closeOnEsc && $(document).unbind("keyup", m), $("#calendar_popup").css("display", "none"), s.hideCallBack && s.hideCallBack(), s.preventBodyScroll && h(), booking.eventEmitter.trigger("modal:close"), B.events.trigger("modal:close"), _r_();
}, m = function(e) {
_i_("3da:1456"), 27 !== e.keyCode || l.length || g(), _r_();
}, v = function() {
_i_("3da:1457"), $(".modal-wrapper .modal-mask-closeBtn").add('.modal-wrapper [data-lightbox-close=""]').one("click", function() {
_i_("3da:2406"), g(), _r_();
}), s.bMaskClick && $(".modal-mask").one("click", function() {
_i_("3da:2679"), g(), _r_();
}), s.closeOnEsc && $(document).bind("keyup", m), $(window).bind("resize", p), "absolute" == s.position && s.autoCenter && $(window).bind("scroll", p), _r_();
}, b = function() {
_i_("3da:1458"), e = $('<div class="modal-mask"/>').appendTo(document.body), s.customMaskClassName.length > 0 && e.addClass(s.customMaskClassName), t = $('<div class="modal-wrapper"/>').attr({
role:"dialog",
"aria-label":"dialog"
}).appendTo(document.body), s.modalLabeledById && t.attr("aria-labelledby", s.modalLabeledById), s.customWrapperClassName.length > 0 && t.addClass(s.customWrapperClassName), s.cloneElement ? i.clone().appendTo(t) :t.append(i), s.bCloseButton && $('<button class="modal-mask-closeBtn" title="' + booking.env.experiment_popups_close + '"><span class="invisible_spoken">' + booking.env.experiment_popups_close + "</span></button>").appendTo(t), s.bFullscreen && t.addClass("modal-wrapper--fullscreen"), c = !0, $("body").addClass("modal-visible"), s.preventBodyScroll && u(), i.show(), f(), v(), _r_();
}, y = function() {
if (_i_("3da:1459"), b(), t.css("visibility", "visible"), s.bAnimation) {
var i = s.bAnimation;
"number" != typeof i && (i = parseInt(i, 10) || 1e3), e.fadeTo(Math.max(0, Math.min(600, i - 400)), s.opacity), t.css("opacity", "0").animate({
opacity:1
}, i, function() {
_i_("3da:2680"), $(this).css("opacity", ""), _r_();
}), s.trapFocus && booking.trapFocus && setTimeout(function() {
_i_("3da:2844"), booking.trapFocus.trap(t[0]), _r_();
}, 100);
} else e.css("opacity", s.opacity).show();
s.ajax && "function" == typeof s.loadCallBack && s.loadCallBack.call(), booking.eventEmitter.trigger("modal:open"), _r_();
}, w = function(e, a, o) {
if (_i_("3da:1460"), t && t.is(":visible")) return _r_();
if (s = {}, $.extend(s, _, a), s.trapFocus && "undefined" == typeof booking.trapFocus && B.debug("The trapFocus module was not defined, include please tarpFocus module in your concat"), s.iframe) {
var l = $('<iframe id="lightbox_iframe" src="' + e + '" width="100%" height="' + s.iframeHeight + '"></iframe> ');
"function" == typeof s.loadCallBack && l.load(s.loadCallBack), i = l, n = i.parent(), r = i.css("display"), y();
} else s.ajax ? jQuery.ajax({
url:e,
cache:!0,
success:function(e) {
_i_("3da:2901"), i = s.ajaxRawContent ? $(e) :$($.trim(e)).eq(0), n = i.parent(), r = i.css("display"), y(), _r_();
}
}) :(i = $(e), i.length && "SCRIPT" === i[0].tagName && (i = $($.trim(i.html()))), n = i.parent(), r = i.css("display"), y());
return "undefined" != typeof o && o(), _r_(t);
}, k = function(e, t, i, n) {
_i_("3da:1461"), booking[sNSStartup].lightbox.show($("#" + n)), _r_();
};
return _r_({
priority:5,
init:function() {},
show:w,
hide:g,
rePosition:p,
open:k,
isVisible:function() {
return _i_("3da:1842"), _r_(c);
},
pushEscStack:function(e) {
_i_("3da:1843"), l.push(e), _r_();
},
popEscStack:function() {
_i_("3da:1844"), l.pop(), _r_();
},
hideWithFade:function(i, n) {
_i_("3da:1845"), t.fadeOut(i), e.fadeOut(i, function() {
_i_("3da:2596"), g(), n && n(), _r_();
}), _r_();
}
});
}(), B.define("lightbox", booking.lightbox), booking[sNSStartup].loc_index_japanese_map = {
init:function() {
_i_("3da:519"), $(".map_links").hover(function() {
_i_("3da:1462");
var e = this.id;
$("#" + e + "_in").show(), _r_();
}, function() {
_i_("3da:1463");
var e = this.id;
$("#" + e + "_in").hide(), _r_();
}), $(".tab01").click(function() {
_i_("3da:1464"), $(".map_overseas").hide(), $(".map_ja").show(), $(".tab02").removeClass("active"), $(".tab01").addClass("active"), _r_();
}), $(".tab02, #ja11").click(function() {
_i_("3da:1465"), $(".map_ja").hide(), $(".map_overseas").show(), $(".tab01").removeClass("active"), $(".tab02").addClass("active"), _r_();
});
var e, t = $(".map_overseas"), i = $(".overseas_cities");
t.delegate(".country_list", "click", function(t) {
_i_("3da:1466"), t.preventDefault();
var n = $(this), r = n.data("id"), a = i.find(".country_" + r).clone();
e.open({
title:n.clone(),
content:a
}), _r_();
}), e = function() {
_i_("3da:1846");
var e, t = $(".map_box_overlay"), i = t.find(".map_box_overlay_header_title"), n = t.find(".map_box_overlay_content");
return t.delegate(".map_box_overlay_mask", "click", function(t) {
_i_("3da:2778"), e.close(), _r_();
}).delegate(".map_box_overlay_close_button", "click", function(t) {
_i_("3da:2597"), e.close(), _r_();
}), e = {
open:function(e) {
_i_("3da:2779");
var r = e.content || "", a = e.title || "";
i.empty().append(a), n.empty().append(r), t.show(), _r_();
},
close:function() {
_i_("3da:2780"), t.hide(), _r_();
}
}, _r_(e);
}(), _r_();
},
initElse:function() {}
}, function() {
_i_("3da:208");
var e = B.require("jquery");
booking[sNSStartup].login_foldout = {
priority:9,
fontchange:!1,
init:function() {
_i_("3da:1467");
var t = this;
"https:" == location.protocol && booking.env.b_is_app && e(".stay_login, #login-form").each(function() {
_i_("3da:2681");
var t = e(this).attr("action");
if (-1 == t.indexOf("protocol=https")) {
var i = t;
i = t.indexOf("protocol=http") > -1 ? t.replace("protocol=http", "protocol=https_www") :t + "&protocol=https_www", e(this).attr("action", i);
}
_r_();
}), booking.env.b_can_acc_bp_auth_lightbox || e("#login_redesign").click(function() {
return _i_("3da:2682"), e(this).hasClass("no_arrow") || (e(this).hasClass("login_opened") ? e(this).removeClass("login_opened") :e(this).addClass("login_opened"), e("#login-form_wrapper fieldset").toggle()), _r_(!1);
}), e(".stay_login").submit(function() {
_i_("3da:2407"), booking.google.userProfileTracker && booking.google.trackEvent(booking.google.userProfileTracker, "Login attempt : Header", booking.env.b_action), e("#foldout_error").hide(), e("#login_loading").show();
var i = document.getElementById("username_input_top").value;
if ("" == i) return t.hideLoader(), e('label[for="username_input_top"]').css({
color:"#B30000",
"font-weight":"bold"
}), e("#username_input_top").focus(), _r_(!1);
var n = /^[0-9[\.]+$/.exec(i);
if (n) {
var r = e("#bm_log").val();
r += r.indexOf(!1) ? "&" :"?";
var a = e("#password_input_top", this).val();
r += "pincode=" + a + "&bn=" + i, e("#tar_tmpl").attr("value", ""), e(this).attr("action", r), e(this).attr("target", "_top");
}
setTimeout(function() {
_i_("3da:2845"), t.hideLoader(), _r_();
}, 1e4), _r_();
}), e("#signup_form_regular,#sign_up_form").submit(function() {
if (_i_("3da:2408"), !t.validateLoginSubmitData({
formId:this.id
})) return _r_(!1);
_r_();
}), e("#user_mybooking_login_form").submit(function() {
if (_i_("3da:2409"), !t.validateLoginSubmitData({
formId:this.id,
passwordIsNumeric:1,
loginIsBookingNr:1
})) return _r_(!1);
_r_();
}), e(".in-pagelogin-form").submit(function() {
if (_i_("3da:2410"), booking.env.auth_level < 1) var t = e(".in-pagelogin-form").height() - 11; else var t = e(".in-pagelogin-form").height() + 19;
e("#page_login_loading").css("height", t + "px").show(), _r_();
}), e(document).on("click", ".user_login_show_signin, .user_login_show_signup", function() {
return _i_("3da:2411"), e(this).hasClass("user_login_show_signup") ? booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(!0, this) :booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(!1, this), e(".user_login_error_msg").hide(), _r_(!1);
}), e(window).bind("beforeunload", function() {
_i_("3da:2412"), e("iframe[name=log_tar]").each(function() {
_i_("3da:2846");
var t = e(this).parent();
e(this).remove().attr("src", "about:blank").appendTo(t), _r_();
}), _r_();
}), _r_();
},
validateLoginSubmitData:function(t) {
_i_("3da:1468");
var i, n, r, a, o, _, s, l = e("#" + t.formId);
if (o = l.parents(".user_login_form"), _ = e(".user_login_error_msg", o), t.loginIsBookingNr && (s = e(".user_bn_login_input", l).val(), s = s.replace(/\./g, ""), e(".user_bn_login_input", l).val(s), !s.length || !/^\d+$/g.test(s))) return this.displayLoginErrorMsg({
errorTarget:_,
errorMsg:0 === s.length ? booking.env.b_blank_bkng_nr :booking.env.b_bkng_nr_must_be_numeric
}), _r_(!1);
if (n = e(".password_input", l), !n.length) return _r_(1);
if (i = n.val(), t.passwordIsNumeric || _.length && o.hasClass("user_login_single_signup") || e(".userlogin_signup_tab", o).hasClass("active")) {
if (r = i && i.length ? i.length :0, t.passwordIsNumeric) {
if (!r || !/^\d+$/g.test(i)) return this.displayLoginErrorMsg({
errorTarget:_,
errorMsg:0 === r ? booking.env.b_blank_numeric_pin :booking.env.b_password_must_be_numeric
}), _r_(!1);
} else {
if (8 > r) return this.displayLoginErrorMsg({
errorTarget:_,
errorMsg:booking.env[r ? "password_needs_8" :"account_error_add_password"]
}), _r_(!1);
if (a = e(".username_input", l), a.length && a.val() && a.val() === i) return this.displayLoginErrorMsg({
errorTarget:_,
errorMsg:booking.env.password_cant_be_username
}), _r_(!1);
}
return _r_(!0);
}
_r_();
},
displayLoginErrorMsg:function(t) {
if (_i_("3da:1469"), !t || !t.errorTarget || !t.errorMsg) return _r_();
t.errorTarget.show().text(t.errorMsg), booking[sNSStartup].new_personal_menu.recheckHeight();
var i = e("#foldout_error").height() + 32;
e("#old_pin_login").css("top", i + "px"), _r_();
},
thirdParty:function(t, i, n, r) {
_i_("3da:1470"), i && !r && e("#log_tar").attr("src", n), r && e("#email_send").show("slow"), _r_();
},
thirdPartyCancel:function(t, i, n) {
_i_("3da:1471"), this.hideLoader(), "undefined" != typeof e.noticeAdd && e.noticeAdd({
text:"\n \n \n " + i + " \n \n \n ",
stay:!1,
textLabel:"login_foldout",
stayTime:3e3,
type:"users",
close:"all",
destination:""
}), n && e("#email_send").show("slow"), _r_();
},
reCall:function(t) {
_i_("3da:1472");
var i = this;
if (t.reload && (booking.env.b_req_login = "1"), "OK" == t.loginstatus) if (t.userlanguage || t.currency) {
var n = booking.env.b_this_url, r = n.indexOf("?") > 0 ? "&" :"?";
t.userlanguage && (n += r + "lang=" + t.userlanguage, r = "&"), t.currency && (n += r + "selected_currency=" + t.currency), n.replace("logout=1", ""), document.location.href = n;
} else if (booking.env.b_redirect) document.location.href = booking.env.b_redirect; else if ("1" == booking.env.b_req_login) {
var a = booking.env.b_this_url;
a.replace("logout=1", ""), document.location.href = a;
} else {
var o = booking.env.b_this_url;
if (o.replace("logout=1", ""), o = o.indexOf("?") > 0 ? o + ";logout=1" :o + "?logout=1", e("#login-form_wrapper fieldset").hide(), e(".welcome_login_link").hide(), e("#current_account_foldout").removeClass("non_logged_in_user").addClass("logged_in_user"), booking.env.is_user_wishlists) {
e("#search_tab_favourite").hide(), e("#search_tab_wishlists").show(), booking.env.is_user_wishlists_for_all && (e("#wishlist_modal_user_access").hide(), e("#wishlist_modal_content").show(), booking.lightbox.rePosition(), booking.env.b_user_has_imported_faves && e("#search_tab_wishlists").find(".user_imported_faves_new").show());
var _ = booking.env.b_hotel_id;
e.get("/wishlist/get", {
hotel_id:_,
aid:booking.env.b_aid,
lang:booking.env.b_lang_for_url,
sid:booking.env.b_sid,
stype:booking.env.b_site_type_id
}, function(t) {
if (_i_("3da:2984"), t && t.success && t.lists && t.lists.length) {
for (var i, n = "", r = "", a = 0, o = t.lists.length; o > a; a++) i = t.lists[a], n += '<li><label><input type="checkbox" id="wl_' + i.id + '" value="wl_' + i.id + '"' + (1 == i.selected ? 'checked="checked"' :"") + " />" + i.name + "</label></li>", r += '<li><a href="' + booking.env.new_wishlist_url + i.id + '"><span>' + i.name + "</span></a></li>";
e("#wl_list").html(n), e("#search_tab_wishlists_content .menu_wishlists").html(r), e(".wl_list_box").addClass("scrolling_list");
}
_r_();
});
} else e("#search_tab_favourite").show(), e("#search_tab_wishlists").hide(), booking.lightbox.hide();
if (e("#login_redesign").length) {
var s = e("#login_redesign").get(0);
e(s).addClass("no_arrow"), e(s).mouseover(function() {
return _i_("3da:2985"), _r_(!1);
}), e(s.parentNode).mouseover(function() {
return _i_("3da:2986"), _r_(!1);
});
}
e("#current_account_foldout").css("width", "auto"), setTimeout(function() {
_i_("3da:2951"), e("#password_input_top").val(""), t.avatarurl && "0" != t.avatarurl ? e(".my_image img").length && e(".my_image img").each(function() {
_i_("3da:3023"), e(this).attr("src", t.avatarurl), e(".head_firstname").length && e(this).css({
"margin-top":"-5px",
width:"26px",
height:"26px"
}), _r_();
}) :0 != t.defaultavatar && e(".my_image img").length && (e(".my_image img").addClass("def_avtr"), e(".my_image img").addClass("t_s_avtr_" + t.defaultavatar), e(".my_image img").css({
"margin-top":"-4px",
"margin-left":"-1px",
width:"24px",
height:"24px"
})), setTimeout(function() {
_i_("3da:3008"), i.preShowMenu(), _r_();
}, 100), e("#b_header").length || "undefined" != typeof e.noticeAdd && t.growl1 && t.growl2 && e.noticeAdd({
text:"\n \n \n " + unescape(t.growl1) + "<br>" + unescape(t.growl2) + " \n \n \n ",
textLabel:"user_login_notice",
stay:!1,
stayTime:3e3,
type:"users",
close:"all",
destination:"",
addClassName:"notice_login"
}), _r_();
}, 500), "" != t.email && (e("#email_confirm").length && "" == e("#email_confirm").val() && (e("#email_confirm").val(t.email), e("#error_email_confirm").hide(), e("#label_email_confirm").removeClass("val-no").addClass("val-yes")), e("#email").length && "" == e("#email").val() && (e("#email").val(t.email), e("#error_email").hide(), e("#label_email").removeClass("val-no").addClass("val-yes"))), t.fdata1 && e("#address1").length && "" == e("#address1").val() && e("#address1").val(t.fdata1), t.fdata2 && e("#city").length && "" == e("#city").val() && e("#city").val(t.fdata2), t.fdata3 && e("#zip").length && "" == e("#zip").val() && e("#zip").val(t.fdata3), t.fdata4 && e("#cc1").length && "" == e("#cc1").val() && e("#cc1").val(t.fdata4), t.fdata5 && e("#phone").length && "" == e("#phone").val() && e("#phone").val(t.fdata5);
var l = " ";
if (t.fdata6 && (e("#lastname").length && "" == e("#lastname").val() && (e("#lastname").val(t.fdata6), e("#error_lastname").hide(), e("#label_lastname").removeClass("val-no").addClass("val-yes")), e(".head_lastname").text(t.fdata6), l = t.fdata6), t.fdata7 ? (e("#firstname").length && "" == e("#firstname").val() && (e("#firstname").val(t.fdata7), e("#error_firstname").hide(), e("#label_firstname").removeClass("val-no").addClass("val-yes")), e(".head_firstname").text(t.fdata7), l = t.fdata7 + " " + l) :t.fdata6 && e(".head_firstname").text(""), e(".login_for_name").length && " " != l && (e(".login_for_name").val(l), e(".login_for_name").css({
color:"#003580"
})), e("input[name='username']").val(t.email), booking.lightbox && booking.lightbox.isopen && booking.lightbox.close(), booking[sNSStartup].new_personal_menu.closeSelect(null, !0, t.hasbookings), booking[sNSStartup].hide_email_confirm && booking[sNSStartup].hide_email_confirm.hideConfMailInit(), t.has_stored_cc > 0) {
var d = booking.env.b_this_url;
d = d.replace(";logout=1", ""), d += ";tmpl=profile/creditcards_ajax;", e("#bs3_cc_form #book_credit_card").load(d + " #book_credit_card"), e("#cc_img").remove();
}
e("#multiple_login").hide(), i.hideLoader();
} else {
if (t.error) var c = unescape(t.error); else var c = "";
var u = t.nofoldout ? !1 :!0;
setTimeout(function() {
if (_i_("3da:2683"), u) {
if (B.env.b_is_tdot_traffic) {
e("#foldout_error").html(c);
var t = e(".forgot_link_look").text(), i = e(".forgot_link_look").attr("data-href");
e(".forgot_pass_trigger").attr("href", i).attr("data-href", i).text(t), e("#foldout_error").show();
} else e("#foldout_error").html(c).show();
var n = e("#foldout_error").height() + 32;
e("#old_pin_login").css("top", n + "px"), booking[sNSStartup].new_personal_menu.openSelect("current_account"), e(".user_login_show_signup").click(function() {
return _i_("3da:2970"), e("#username").val(e("#username_input_top").val()), e("#new_user").click(), _r_(!1);
});
} else e("#bs2_page_login_error").length && e("#bs2_page_login_error").html(c).show();
_r_();
}, 500), i.hideLoader();
}
_r_();
},
toggle:function(t, i) {
_i_("3da:1473");
var n = t.getAttribute("shown");
if ("false" == n) {
if (e("#foldout_error").hide(), e(t).css("display", "block"), 1e3 == i) {
var r = e("#loginPopup form").get(0);
i = e(r).height();
}
e(t).animate({
height:i + "px"
}, 500, function() {
_i_("3da:2684"), document.getElementById("username_input_top").focus(), _r_();
}), t.setAttribute("shown", "true");
} else e(t).animate({
height:"0px"
}, 500, function() {
_i_("3da:2685"), e(this).css("display", "none"), _r_();
}), t.setAttribute("shown", "false");
_r_();
},
hideLoader:function() {
_i_("3da:1474"), e("#login_loading").hide(), e("#page_login_loading").hide(), _r_();
},
preShowMenu:function() {
_i_("3da:1475");
var t = this;
("book" != booking.env.b_action || "1" == booking.env.is_exp_user_center_bar) && (booking[sNSStartup].new_personal_menu.openSelect("current_account"), t.moused_menu = !1, e("#current_account").mouseenter(function() {
_i_("3da:2686"), t.moused_menu = !0, _r_();
}), setTimeout(function() {
_i_("3da:2687"), t.moused_menu || booking[sNSStartup].new_personal_menu.closeSelect(), _r_();
}, 4e3)), _r_();
}
}, booking[sNSStartup].new_personal_menu = {
priority:9,
opening_state:0,
cur_open:"",
max_select_height:240,
is_ie:0,
openSlow:!1,
init:function() {
_i_("3da:1476");
var t = this;
e(".b_msie_6").length && (this.is_ie = 6), e(".b_msie_7").length && (this.is_ie = 7), "1" == booking.env.is_user_center_bar || (e(".select_box").mouseenter(function() {
_i_("3da:2688"), e(this).addClass("sel_hover"), _r_();
}), e(".select_box").mouseleave(function() {
_i_("3da:2689"), e(this).removeClass("sel_hover"), _r_();
})), e("body").click(function(i) {
if (_i_("3da:2413"), 2 == t.opening_state) {
var n = e(i.target);
e(n).length && (e(n).parents("#current_account_foldout").length || t.closeSelect());
}
if (booking.maps && booking.maps.map_opened && (!booking.maps.is_sr || !booking.map.mapHasBeenDragged)) {
var r = e(i.target);
!booking.maps.is_hp && !booking.maps.is_sr || !r.length || r.is("#b_map_container") || r.parents("#b_map_container,#sr_map").length || "close_map" === r.attr("id") || /gstatic/.test(r.attr("src")) || (e("#close_map").length > 0 ? e("#close_map").click() :e("#close_map_lightbox").length > 0 && e("#close_map_lightbox").click());
}
_r_();
}), e(".select_box").click(function(i) {
_i_("3da:2414"), 0 == t.opening_state ? t.openSelect(e(this).attr("id")) :t.cur_open != e(this).attr("id") ? t.closeSelect(e(this).attr("id")) :e(i.target).parents("#current_account_foldout").length || t.closeSelect(), _r_();
}), _r_();
},
recheckHeight:function() {
_i_("3da:1477");
var t = e("#current_account_foldout .select_foldout_wrap").height() + 15;
e("#current_account_foldout").animate({
height:t + "px"
}, 400), _r_();
},
openSelect:function(t) {
if (_i_("3da:1478"), booking.env.b_is_tdot_traffic) {
var i = e("#" + t);
if ("show-auth-lightbox" === i.attr("data-command")) return _r_();
}
if ("1" != booking.env.is_user_center_bar || booking.env.b_is_tdot_traffic) {
var n = this;
if ("login_redesign" === t && booking.env.b_can_acc_bp_auth_lightbox) return _r_();
this.cur_open = t;
var r, a = e("#" + t + "_foldout"), o = "block" == e("#foldout_loggedin").css("display");
e("#" + t).addClass("sel_open"), this.opening_state = 1, a.css({
display:"block",
opacity:"0",
overflow:"hidden",
height:"400px",
width:"200px"
}), r = e(e(".select_foldout_wrap", a).get(0)), r.css({
"overflow-y":"hidden",
height:"auto"
});
var _ = r.height(), s = r.width(), l = this.max_select_height;
if (a.hasClass("flex_foldout")) var d = s + 10; else if (e("#" + t).hasClass("sel_done")) var d = s; else {
var d = s + 20;
e("#" + t).addClass("sel_done");
}
if (_ >= this.max_select_height - 10 && "current_account_foldout" != a.attr("id") ? a.hasClass("flex_foldout") ? (l = _ + 10, 300 > l && (l = 300)) :(r.css({
"overflow-y":"scroll",
height:"230px",
width:d + "px"
}), 6 == !this.is_ie && 7 == !this.is_ie && (d += 10)) :(l = _ + 10, r.css({
"overflow-y":"hidden",
height:"auto"
})), 6 == this.is_ie || 7 == this.is_ie && !o ? (a.css({
opacity:"1",
height:"0px",
width:"0px"
}), a.css({
width:"auto"
}), a.hasClass("smaller_booking_nr_login") ? r.css({
width:"600px"
}) :r.css({
width:"482px"
}), s = r.width(), d = s + 10) :a.css({
opacity:"1",
height:"0px",
width:"auto"
}), a.hasClass("left_foldout") && !booking.env.rtl ? a.css({
width:d + "px",
"padding-right":"0px"
}) :a.css({
width:d + "px",
"padding-right":"10px",
left:"0"
}), 6 == this.is_ie || 7 == this.is_ie && !o) {
var c = a.parents(0).width();
if (a.hasClass("left_foldout") && !booking.env.rtl) {
var u = c - a.width() - 2;
0 > u && (c -= u);
}
if (6 == this.is_ie || 7 == this.is_ie) {
var h = 210;
e("#multiple_login", a).length && (h = e(".smaller_booking_nr_login").length && !o ? 550 :"block" != e("#foldout_loggedin").css("display") ? 482 :182), 7 == this.is_ie && (c += 100), a.css({
width:h + "px",
"padding-right":"18px"
});
} else a.css({
width:d + "px"
}), e(".select_foldout_wrap", a).css({
"overflow-x":"hidden"
});
}
this.openSlow ? (this.openSlow = !1, a.animate({
height:l + "px"
}, 800)) :a.css({
height:l + "px"
}), setTimeout(function() {
_i_("3da:2690"), n.opening_state = 2, _r_();
}, 200), booking.env.b_is_ipad && e("body").bind("touchstart", function(t) {
if (_i_("3da:2847"), 2 == n.opening_state) {
var i = e(t.target);
e(i).length && !e(i).is("#current_account") && (e(i).parents("#current_account_foldout").length || e(i).parents("#login_redesign") || (n.closeSelect(), e(this).unbind(t)));
}
_r_();
});
} else ;
_r_();
},
closeSelect:function(t, i, n) {
_i_("3da:1479");
var r = this;
i && (e("#foldout_login").css({
display:"none"
}), e("#multiple_login").css({
display:"none"
}), e("#foldout_loggedin").css({
display:"block"
}), n && e("#stats_menu_link").css({
display:"block"
})), 2 == this.opening_state && (e(".select_foldout").animate({
height:"0px"
}, 200, function() {
_i_("3da:2691"), e(".select_foldout").css({
display:"none"
}), e(".select_box").removeClass("sel_open"), t && null != t && r.openSelect(t), _r_();
}), this.opening_state = 0), e("#user_searches_menu").length && booking[sNSStartup].top_saved_searches.closeTabs(), _r_();
},
scrollToLogin:function() {
_i_("3da:1480"), booking.env.rtl ? e("body").scrollTo({
top:0,
left:0
}, 500) :e("body").scrollTo({
top:0,
left:1e3
}, 500), this.openSlow = !0, 0 == this.opening_state ? this.openSelect("current_account") :this.closeSelect("current_account"), _r_();
},
hideLoader:function() {
_i_("3da:1481"), e("#login_loading").hide(), e("#page_login_loading").hide(), _r_();
}
}, booking[sNSStartup].my_social_networks = {
priority:9,
tp_window:null,
tp_cur:"",
cur_state:"CLOSED",
window_sizes:{
yahoo:[ 510, 500 ],
facebook:[ 500, 450 ],
google:[ 850, 510 ]
},
init:function() {
_i_("3da:1482");
var t = this;
e(".signup_tp a, #re_log_in a, a.connect_with").click(function() {
_i_("3da:2415"), booking[sNSStartup].new_personal_menu.opening_state = 2;
var i = this, n = e(i).attr("href"), r = e(i).attr("id"), a = n;
if (e("#login_loading").show(), "OPENING" != t.cur_state) if (t.tp_window) t.tp_cur != r.toLowerCase() ? (window.clearInterval(t.checking_in), t.tp_window = null, t.cur_state = "CLOSED") :t.tp_window.focus(); else {
t.cur_state = "OPENING", t.tp_cur = r.toLowerCase();
var o = 500, _ = 500;
if (t.window_sizes[t.tp_cur]) var o = t.window_sizes[t.tp_cur][0], _ = t.window_sizes[t.tp_cur][0];
var s = "width=" + o + ",height=" + _ + ",toolbar=0,scrollbars=0,location=0,statusbar=0,menubar=0,resizable=1";
t.tp_window = window.open(a, "", s);
var l = "rem_provider=" + t.tp_cur;
booking.env.b_this_url.indexOf(l) > -1 && (booking.env.b_this_url = booking.env.b_this_url.replace(";" + l, ""), booking.env.b_this_url = booking.env.b_this_url.replace(l, "")), t.checking_in = window.setInterval(function() {
_i_("3da:2987"), (t.tp_window && t.tp_window.closed || !t.tp_window) && (e("#login_loading").hide(), e("#page_login_loading").hide(), window.clearInterval(t.checking_in), t.tp_window = null, t.cur_state = "CLOSED"), _r_();
}, 1e3), t.cur_state = "OPENED", t.tp_window && t.tp_window.focus();
}
return _r_(!1);
}), _r_();
}
}, booking[sNSStartup].merge_mybooking_myaccount = {
priority:9,
old_pin_shown:!1,
init:function() {
_i_("3da:1483");
var t = this;
e("#user_pin_link").click(function() {
return _i_("3da:2416"), e("#foldout_error").hide(), e("#old_pin_login").css({
display:"block",
top:"0px"
}), e("#existing_user_login .login_right").hide(), e(".b_msie_8").length ? e("#old_pin_login").css({
left:"240px"
}) :e("#old_pin_login").animate({
left:"240px"
}), t.old_pin_show = !0, _r_(!1);
}), e("#new_user").click(function() {
_i_("3da:2417"), t.newUserOpen(!0, this), _r_();
}), e("#existing_user").click(function() {
_i_("3da:2418"), t.newUserOpen(!1, this), _r_();
}), e("#old_pin_login a").click(function() {
return _i_("3da:2419"), e("#foldout_error").hide(), e("#old_pin_login").css({
top:"0px"
}), e("#old_pin_login").animate({
left:"500px"
}, function() {
_i_("3da:2848"), e("#old_pin_login").css("display", "none"), _r_();
}), t.old_pin_show = !1, _r_(!1);
}), booking.env.b_is_on_signup_page && booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(!0, document.getElementById("account_new_user")), _r_();
},
newUserOpen:function(t, i) {
_i_("3da:1484");
var n = e(i).parents(".user_login_form");
this.old_pin_show && (e("#old_pin_login", n).hide(), e("#existing_user_login .login_right", n).show()), t ? (e("#existing_user_login, #existing_user_signin", n).hide(), e("#foldout_signup, #new_user_signup", n).show(), e("#existing_user, #account_existing_user", n).removeClass("active"), e("#new_user, #account_new_user", n).addClass("active"), booking[sNSStartup].new_personal_menu.recheckHeight()) :(e("#existing_user_login, #existing_user_signin", n).show(), e("#foldout_signup, #new_user_signup", n).hide(), e("#existing_user, #account_existing_user", n).addClass("active"), e("#new_user, #account_new_user", n).removeClass("active"), booking[sNSStartup].new_personal_menu.recheckHeight()), e(".better_error").hide(), e("#old_pin_login").css("top", "0px"), _r_();
}
}, booking[sNSStartup].welcome_user = {
priority:9,
old_pin_shown:!1,
init:function() {
_i_("3da:1485"), e("#welcome_login").click(function() {
return _i_("3da:2420"), booking[sNSStartup].new_personal_menu.openSelect("current_account"), booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(!1, this.id), _r_(!1);
}), e("#welcome_signup").click(function() {
return _i_("3da:2421"), booking[sNSStartup].new_personal_menu.openSelect("current_account"), booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(!0, this.id), _r_(!1);
}), _r_();
}
}, booking[sNSStartup].faq_login_foldout = {
priority:9,
init:function() {
_i_("3da:1486"), "general" == booking.env.b_action && "0" == booking.env.auth_level && e(".open_top_login").click(function() {
return _i_("3da:2692"), booking[sNSStartup].new_personal_menu.openSelect("current_account"), booking[sNSStartup].merge_mybooking_myaccount.newUserOpen(!1, this.id), e("body").scrollTo({
top:0,
left:0
}, 500), _r_(!1);
}), _r_();
}
}, _r_();
}(), function() {
_i_("3da:209"), B.when({
events:"ready"
}).run(function() {
_i_("3da:977");
var e = $(window);
function t() {
if (_i_("3da:1487"), null == window.opener) return _r_();
if (screen.width <= e.width()) return _r_();
var t = "404815" == booking.env.b_partner_id, n = e.width() < .9 * screen.width;
t ? n && $("body").bind("click.resize_partners", function(e) {
if (_i_("3da:2849"), e && e.target && $(e.target).hasClass("no-trigger-resize")) return _r_();
window.resizeTo(.95 * screen.width, .95 * screen.height), i(), _r_();
}) :$("body").bind("click.resize_partners", function(e) {
if (_i_("3da:2693"), e && e.target && $(e.target).hasClass("no-trigger-resize")) return _r_();
window.resizeTo(screen.width, screen.height), i(), _r_();
}), _r_();
}
function i() {
_i_("3da:1488"), $("body").unbind("click.resize_partners"), window.moveTo(0, 0), $(window).trigger("resize"), _r_();
}
t(), _r_();
}), _r_();
}(), booking[sNSStartupLoad].message_box = {
priority:9,
init:function() {
_i_("3da:521"), $("#self_change1 .messageBox").click(function(e) {
_i_("3da:1489");
var t = $(this).children("a").attr("href"), i = /(?:\b)tmpl[\=]docs[\\\/]customer_service(?:\b)/i;
return t && "#" != t && !i.test(t) && (location.href = $(this).children("a").attr("href")), _r_(!1);
}), $("#isDifferent").fadeIn(), _r_();
}
}, booking.newsLanding = function() {
_i_("3da:307");
var e = function() {
_i_("3da:1100"), $(document).on("focus", ".location_dropdowns select", function() {
_i_("3da:2183");
var e = $(this).find(":selected").text();
$(this).attr("oldValue", e), _r_();
}), $(".location_dropdowns select").change(function() {
_i_("3da:2184");
var e, t = $(this).attr("id"), i = $(this).find(":selected").val(), n = $(this).find(":selected").text(), r = $(this).attr("oldValue");
i.length > 0 ? "fd_title_countryname" == t ? e = booking.env.b_lang + " | Countries | " + n :"fd_title_regionname" == t ? e = booking.env.b_lang + " | Regions | " + n :"fd_title_cityname" == t && (e = booking.env.b_lang + " | Cities | " + n) :"fd_title_countryname" == t ? e = booking.env.b_lang + " | Countries Remove | " + r :"fd_title_regionname" == t ? e = booking.env.b_lang + " | Regions Remove | " + r :"fd_title_cityname" == t && (e = booking.env.b_lang + " | Cities Remove | " + r), booking.google.trackEvent(booking.google.clickTracker, "Dealfinder", e), this.form.submit(), _r_();
}), $("#b_sortbox select").change(function() {
_i_("3da:2185"), booking.google.trackEvent(booking.google.clickTracker, "Dealfinder", "df_dropdown_sorting"), this.form.submit(), _r_();
}), $("#checkin-flexible-form").submit(function() {
_i_("3da:2186");
var e, t = $("#b_fd_checkin_date").val(), i = $("#fd_flex").attr("checked");
e = "undefined" != t ? i ? booking.env.b_lang + " | Date Select | Flexible" :booking.env.b_lang + " | Date Select" :booking.env.b_lang + " | Date Remove | ", booking.google.trackEvent(booking.google.clickTracker, "Dealfinder", e), _r_();
}), _r_();
};
return _r_({
init:e
});
}(), booking[sNSStartup].newsletterSignup = {
priority:8,
init:function() {
if (_i_("3da:522"), $(".subscriptionbox").click(function() {
return _i_("3da:1490"), booking[sNSStartup].lightbox.show($("#subsciber_firstname_lightbox"), {
customWrapperClassName:"subscribername-lightbox"
}), _r_(!1);
}), booking.env.b_show_newsletter_popup && booking[sNSStartup].lightbox.show($("#subsciber_firstname_lightbox"), {
customWrapperClassName:"subscribername-lightbox"
}), booking.env.b_show_solicitation_popup) {
if (booking.env.b_show_success_popup_content) return booking[sNSStartup].lightbox.show($("#solicitation_feedback_success"), {
customWrapperClassName:"solicitation-lightbox"
}), _r_(!1);
if (booking.env.b_show_error_popup_content) return booking[sNSStartup].lightbox.show($("#solicitation_feedback_error"), {
customWrapperClassName:"solicitation-lightbox"
}), _r_(!1);
}
_r_();
}
}, booking[sNSStartup].newsletterTutorials = {
priority:8,
init:function() {
_i_("3da:523");
var e = 1, t = this;
if (booking.env.tutorialpopup && window.b_cookie && window.b_cookie.showthistutorial != booking.env.tutorialpopup) {
var i = booking.env.tutorialpopup, n = $(".tutorialwrapper_" + i).attr("id");
t.loadPopups("#tutorial_dyk_" + i + "_s" + e, i, e);
}
$("#tutorial_dyk_02_s1 a.fd_next").click(function() {
_i_("3da:1491"), $("#show_reviews_tab").click(), _r_();
}), $("a.fd_close").click(function() {
_i_("3da:1492"), t.closeTutorial(this), _r_();
}), $("a.fd_next").click(function() {
_i_("3da:1493"), t.nextPopup(this, n, i), _r_();
}), _r_();
},
loadPopups:function(e, t, i) {
_i_("3da:524");
var n = this, r = $("#tutorial_dyk_" + t + "_s" + i).attr("rel");
if (r) {
var a = new n.relativePosition(r, !0, !1), o = $(e).attr("rev"), _ = $(e).width(), s = new n.getRelInlineCss(e);
if (s.rgValues && $(this).css({
top:"",
right:"",
bottom:"",
left:""
}), "undefined" != o) if ("right" == o) var l = {
top:a.relDivTop + s.rgTop + "px",
left:a.relDivSide + s.rgLeft + "px"
}; else if ("left" == o) var l = {
top:a.relDivTop + s.rgTop + "px",
left:a.relDivSide - _ + s.rgLeft + "px"
};
a.scrollToDiv && 1 == i ? $("html, body").delay(500).animate({
scrollTop:a.relDivTop - 50
}, 1e3, function() {
_i_("3da:2422"), $(e).css(l).fadeIn(300), _r_();
}) :$(e).delay(300).css(l).fadeIn(500);
} else $(e).delay(300).fadeIn(500);
_r_();
},
relativePosition:function(e) {
_i_("3da:525");
var t = $("#" + e).offset() || {};
this.relDivTop = t.top;
var i = t.left, n = $("#bodyconstraint-inner").offset().left;
this.relDivSide = i - n, this.relDivTop > 200 ? this.scrollToDiv = !0 :this.scrollToDiv = !1, _r_();
},
getRelInlineCss:function(e) {
_i_("3da:526"), this.rgTop = parseInt($(e).css("top").replace("px", "")) || 0, this.rgLeft = parseInt($(e).css("left").replace("px", "")) || 0, 0 == this.rgLeft && this.rgTop ? this.rgValues = !1 :this.rgValues = !0, _r_();
},
nextPopup:function(e, t, i) {
_i_("3da:527");
var n = $(e).attr("id").split("nextstep_")[1], r = parseInt(n) + 1, a = "#" + t + "_s" + n;
$(a).fadeOut(300), this.loadPopups("#tutorial_dyk_" + i + "_s" + r, i, r), _r_();
},
closeTutorial:function(e) {
return _i_("3da:528"), $(e).closest(".tutorial_dyk").fadeOut(300), window.b_cookie = window.b_cookie || {}, window.b_cookie.showthistutorial = booking.env.tutorialpopup, "undefined" != typeof JSON && $.cookie("b", JSON.stringify(window.b_cookie), {
expires:30,
path:"/",
domain:booking.env.b_domain_end
}), _r_(!1);
}
}, booking[sNSStartup].ow_page = {
init:function() {
_i_("3da:529"), $(".country_flag a").click(function(e) {
_i_("3da:1494");
var t = $(this).parents("div.country_block");
$("div.aaa:eq(0)", t).is(":visible") ? $("div.aaa", t).hide() :$("div.aaa", t).show(), e.preventDefault(), _r_();
}), $(".gcityname a").click(function(e) {
_i_("3da:1495");
var t = $(this).parents("div.office");
$("div.bbb:eq(0)", t).is(":visible") ? $("div.bbb", t).hide() :$("div.bbb", t).show(), e.preventDefault(), _r_();
}), _r_();
}
}, booking[sNSStartup].accounts_for_everybody = {
priority:9,
passwordFields:0,
passwordChar:"",
maskPass:"",
isAdding:!1,
keyCounter:0,
init:function() {
_i_("3da:530");
var e = this;
$(".passwd_strength").each(function() {
_i_("3da:1496");
var e = '<div class="pwd_strength"><div class="strength"></div></div><span class="jq_tooltip strength_text" title="' + booking.env.b_passwd_tooltip + '" rel="300">&nbsp;</span>';
$(this).after(e);
var t = parseInt($(this).css("margin-left").replace("px", "")) + 1;
$(".pwd_strength", this.parentNode).css("margin-left", t + "px");
var i = this;
$(".pwd_strength", this.parentNode).click(function() {
_i_("3da:2423"), $(i).focus(), _r_();
}), $(".pwd_strength", this.parentNode).mouseenter(function() {
_i_("3da:2424"), $(i).addClass("hoverText"), _r_();
}), $(".pwd_strength", this.parentNode).mouseleave(function() {
_i_("3da:2425"), $(i).removeClass("hoverText"), _r_();
}), _r_();
}), $(".passwd_strength").focus(function() {
_i_("3da:1497");
var e = parseInt($(this).css("margin-left").replace("px", "")), t = "safari" == booking.env.b_browser ? 2 :e + 2;
$(".pwd_strength", this.parentNode).css("margin-left", t + "px"), _r_();
}), $(".passwd_strength").blur(function() {
_i_("3da:1498");
var e = parseInt($(this).css("margin-left").replace("px", "")) + 1;
$(".pwd_strength", this.parentNode).css("margin-left", e + "px"), _r_();
}), $(".passwd_strength").keyup(function() {
_i_("3da:1499"), e.keyCounter++;
var t = this, i = e.keyCounter;
setTimeout(function() {
_i_("3da:2426"), e.calculateStrength(t, i), _r_();
}, 400), _r_();
}), $("td.pass_fix").length && ($("#new_pass").blur(function() {
_i_("3da:2048");
var e = $(this).parents("tr").get(0);
"" != $(this).val() ? ($("th span", e).removeClass("val-no"), $("th span", e).addClass("val-yes")) :($("th span", e).removeClass("val-yes"), $("th span", e).addClass("val-no")), _r_();
}), $("#confirm_new_pass").blur(function() {
_i_("3da:2049");
var e = $("#new_pass").val(), t = $(this).parents("tr").get(0);
"" != $(this).val() && $(this).val() == e ? ($("th span", t).removeClass("val-no"), $("th span", t).addClass("val-yes")) :($("th span", t).removeClass("val-yes"), $("th span", t).addClass("val-no")), _r_();
})), _r_();
},
calculateStrength:function(e, t) {
if (_i_("3da:531"), this.keyCounter == t) {
var i = $(e).val(), n = $(".pwd_strength .strength", e.parentNode);
if (n.length) {
var r, a, o = 0, _ = 0, s = 0, l = 0, d = 0, c = i.length;
if (c > 0) {
o = parseInt(c / 2.5);
for (var u = 0; c > u; u++) {
var h = "!@#$%^&*(){}[];:'\"\\|,.<>/?+=-_±¤", f = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
isNaN(i.charAt(u)) || (_ += 1), isNaN(i.charAt(u)) && (s = 1), h.indexOf(i.charAt(u)) > -1 && (l += 2), f.indexOf(i.charAt(u)) > -1 && (d += 1);
}
l > 4 && (l = 4), _ > 2 && (_ = 2), d > 2 && (d = 2), 0 != s && (o += _), o += l, o += d, o > 10 && (o = 10);
}
r = 26, ($(e).parents("#foldout_signup").length || $(e).parents("#registration_id").length) && (r = 18), a = r * o;
var p = parseInt(o / 2 + 1);
8 > c ? (n.addClass("strength_invalid"), 0 === a ? a = r :a > 3 && (a = 3 * r), p = 0) :n.removeClass("strength_invalid"), n.animate({
width:a + "px"
}), "" != i ? $(".strength_text", e.parentNode).text(booking.env.b_password_strength_msg[p]) :$(".strength_text", e.parentNode).text("");
}
}
_r_();
},
togglePasswd:function(e) {
_i_("3da:532");
var t = $(e).parents("form").get(0);
$(".textual_passwd", t).toggle();
var i = $(".textual_passwd", t).get(0), n = $(i).css("display"), r = $(i).attr("name");
r = r.split("textpwd_")[1];
var a = $("input[name='" + r + "']", t).get(0);
"none" != n ? (this.fixCursorPosition(null, i), $("td.pass_fix").length || $(a).addClass("focusText")) :($(a).removeClass("focusText"), this.fixCursorPosition(null, a)), this.syncPassFields($(i).get(0), !0), _r_();
},
fixCursorPosition:function(e, t) {
if (_i_("3da:533"), null != e) var i = document.getElementById(e); else var i = t;
i.focus();
var n = $(i).val().length;
if (n > 0) if ("selectionStart" in i) i.selectionStart = n, i.focus(); else {
var r = document.selection.createRange();
r.moveStart("character", n), r.moveEnd("character", 0), r.select();
}
_r_();
},
syncPassFieldsMask:function(e) {
_i_("3da:534");
var t = this, i = "textpwd_" + $(e).attr("name"), n = $("input." + i, e.parentNode).get(0), r = $(e).val(), a = "";
t.maskPass = "";
for (var o = 0; o < r.length; o++) o >= r.length - 1 ? (a += r[o], t.maskPass += this.passwordChar) :(a += this.passwordChar, t.maskPass += this.passwordChar);
$(n).val(a), setTimeout(function() {
_i_("3da:1500"), t.syncPassFieldsFullMask(n), _r_();
}, 1e3), _r_();
},
syncPassFieldsFullMask:function(e) {
_i_("3da:535"), $(e).val(this.maskPass), _r_();
},
syncPassFields:function(e, t) {
_i_("3da:536");
var i = !1, n = null, r = this;
if (t) {
var a = $(e).attr("name");
a = a.split("textpwd_")[1];
var o = $("input[name='" + a + "']", e.parentNode.parentNode).get(0), _ = $(o).attr("id");
if (_.indexOf("confirm_") > -1) {
var s = "#" + _.replace("confirm_", "");
$(s).length || (s = "#" + _.replace("_confirm", "")), i = !0;
} else var s = "#confirm_" + _;
if ($(s).length) {
n = $(s).get(0), $(n).val($(e).val());
var l = $(n).attr("name");
l = "textpwd_" + l;
var d = $("input." + l, n.parentNode.parentNode).get(0);
$(d).val($(e).val());
}
} else var a = "textpwd_" + $(e).attr("name"), o = $("input." + a, e.parentNode).get(0);
if ($(o).val($(e).val()), t) {
if (i) {
if ($(n).hasClass("passwd_strength")) {
this.keyCounter++;
var c = this.keyCounter;
setTimeout(function() {
_i_("3da:2694"), r.calculateStrength(n, c), _r_();
}, 400);
}
} else if ($(o).hasClass("passwd_strength")) {
this.keyCounter++;
var c = this.keyCounter;
setTimeout(function() {
_i_("3da:2695"), r.calculateStrength(n, c), _r_();
}, 400);
}
} else if ($(e).hasClass("passwd_strength")) {
this.keyCounter++;
var c = this.keyCounter;
setTimeout(function() {
_i_("3da:2427"), r.calculateStrength(n, c), _r_();
}, 400);
}
_r_();
}
}, booking[sNSStartup].pb_mybooking_bn_pin_login_resend_conf = function(e, t, i) {
_i_("3da:308");
var n = !1, r = 240, a = 0, o = 28, _ = "g-hidden";
function s() {
_i_("3da:658"), t("body").delegate(".js-btn--invite-to-resend, .js-btn--repeat", "click", d), t("body").delegate(".js-btn--close", "click", c), t("body").delegate(".resend-conf-form", "submit", u), t("body").delegate(".resend-conf-form__send", "click", u), _r_();
}
function l() {
_i_("3da:659"), n || (n = !0, r = t(".popover_content--has-footer").outerHeight(), t(".popover_content--has-footer").css("min-height", r), t(".resend-conf").addClass("resend-conf--absolute")), _r_();
}
function d(e) {
_i_("3da:660");
var i = t(e.target).closest(".resend-conf");
return i.closest(".popover_content--has-footer").length && l(), a = a || i.find(".resend-conf__step--invite").outerHeight(), r = booking.env.b_is_tdot_traffic ? r + 100 :r, i.addClass("resend-conf--active"), i.animate({
height:r - o
}, 250), i.find(".resend-conf__step").addClass(_), i.find(".resend-conf__step--form").removeClass(_), _r_(!1);
}
function c(e) {
_i_("3da:661");
var i = t(e.target).closest(".resend-conf");
return i.removeClass("resend-conf--active"), i.find(".resend-conf__step").addClass(_), i.find(".resend-conf__step--invite").removeClass(_), i.animate({
height:a
}, 250), _r_(!1);
}
function u(e) {
_i_("3da:662");
var i = t(e.target), n = i.closest(".resend-conf"), r = i.is("form") ? i :i.closest(".resend-conf-form"), a = n.find(".resend-conf-form__send");
if (e.preventDefault(), a.is(".disabled")) return _r_(!1);
if ("" == r.find("input[name=email]").val() || !r.find("input[name=email]").val().match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) return r.find("input[name=email]").addClass("invalid-input"), r.find(".resend-conf-form__error").removeClass(_), _r_(!1);
r.find("input[name=email]").removeClass("invalid-input"), r.find(".resend-conf-form__error").addClass(_), a.addClass("disabled"), t.ajax({
url:r.attr("action") + "?" + r.serialize(),
dataType:"jsonp",
jsonpCallback:"booking_cb_" + Date.now(),
success:function() {
_i_("3da:2187"), f(n), h(n), _r_();
},
error:function() {
_i_("3da:2188"), p(n), _r_();
}
}), _r_();
}
function h(e) {
_i_("3da:663");
var t = e.find(".resend-conf-form");
t.length && t[0].reset(), e.find(".resend-conf-form input[name=email]").removeClass("invalid-input"), e.find(".resend-conf-form .resend-conf-form__error").addClass(_), e.find(".resend-conf-form__send").removeClass("disabled"), _r_();
}
function f(e) {
_i_("3da:664"), e.find(".resend-conf__step").addClass(_), e.find(".resend-conf__step--success").removeClass(_), e.find(".resend-conf__success__email").text(e.find(".resend-conf-form input[name=email]").val()), _r_();
}
function p(e) {
_i_("3da:665"), e.find(".resend-conf__step").addClass(_), e.find(".resend-conf__step--error").removeClass(_), e.find(".resend-conf-form__send").removeClass("disabled"), _r_();
}
return _r_({
init:s
});
}(booking, jQuery, jQuery(window)), function(e, t) {
_i_("3da:210");
var i = B.require("jquery"), n = function(e) {
_i_("3da:978");
var i, n, r, a = "msie" === B.env.b_browser;
for (i = 0, n = e.length; n > i; i += 1) {
if (a) {
new Image().src = e[i];
continue;
}
r = t.createElement("object"), r.data = e[i], a ? (r.width = 1, r.height = 1, r.style.visibility = "hidden", r.type = "text/plain") :(r.width = 0, r.height = 0), t.body.appendChild(r);
}
_r_();
};
i(e).on("load", function() {
_i_("3da:979");
var e = i(t.body), r = "mousemove keyup scroll mousedown", a = i("[data-preload-assets]"), o = i.cookie("has_preloaded"), _ = 0, s = function() {
_i_("3da:2050"), e.unbind(r, d), clearTimeout(_), n(a.data("preload-assets")), i.cookie && i.cookie("has_preloaded", 1, {
expires:1,
path:"/"
}), _r_();
}, l = function() {
_i_("3da:2051"), _ = setTimeout(s, 1e4), _r_();
}, d = function() {
_i_("3da:2052"), clearTimeout(_), l(), _r_();
};
if (o) return _r_();
a.length && setTimeout(function() {
_i_("3da:2428"), l(), e.bind(r, d), _r_();
}, 1e4), _r_();
}), _r_();
}(window, window.document), function() {
_i_("3da:211");
var e = B.require("jquery");
booking[sNSStartup].rate_guarantee = {
priority:9,
init:function() {
_i_("3da:1501");
var t = [ "#rate_guarantee a", ".rate_guaranteed a", "#rate_guaranteed", "#wrap-hotelpage-top .best_rate_guarantee a", "table.hotellist td div.room_details_usp .room_details_usp_inner.best_rate_guarantee a", "a.usps_rate_guarantee_link", "#rate_guaranteev2 a", "#ratelogo a", "#terms_rateguarantee", "a#guarantee_terms", "#rates_feedback_invite a.jq_tooltip", ".rate_guarantee_window_opener", "#sidebar_usp_box a.best_price_popup", "#sidebar_usp_box a.jq_tooltip " ].join(","), i = [ "status=1", "toolbar=0", "menubar=0", "width=450", "height=550", "scrollbars=1" ].join(","), n = function() {
return _i_("3da:2429"), window.open(this.href, "RateGuarantee", i), _r_(!1);
};
return e(document).on("click", t, n), _r_(!0);
}
}, _r_();
}(), booking.ensureNamespaceExists(sNSStartup), booking[sNSStartup].search_engine_partitioned_disambiguation_page = {
priority:9,
init:function() {
_i_("3da:537"), $(".disambBlockHeader").click(function() {
_i_("3da:1502");
var e = $(this), t = $("#" + e.attr("data-results"));
return t.hasClass("disambBlockShown") ? t.slideUp().removeClass("disambBlockShown") :t.slideDown().addClass("disambBlockShown"), _r_(!1);
}), _r_();
}
}, B[sNSStartup].searchbox_dates_widget = function(e, t) {
_i_("3da:309");
function i(t) {
_i_("3da:666");
var i = e.require("search/searchbox/analytics");
i.send(t), _r_();
}
function n(n) {
_i_("3da:667"), e.Search.validators.create({
type:"dates",
name:"dates_are_not_empty",
test:function() {
_i_("3da:2189");
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("regular" !== e.search.dates().mode) return _r_(!1);
return _r_("valid" !== t.type && "valid" !== i.type);
},
fail:function() {
return _i_("3da:2190"), i("[error] dates: dates_are_not_empty"), _r_(e.jstmpl.translations("searchbox_error_msg_need_date"));
}
}), e.Search.validators.create({
type:"dates",
name:"checkin_date_is_selected",
test:function() {
if (_i_("3da:2191"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type && "valid" !== i.type) return _r_(!1);
return _r_("valid" !== t.type);
},
fail:function() {
return _i_("3da:2192"), i("[error] dates: checkin_date_is_selected"), _r_(e.jstmpl.translations("please_enter_your_check_in_date"));
}
}), e.Search.validators.create({
type:"dates",
name:"checkout_date_is_selected",
test:function() {
if (_i_("3da:2193"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type && "valid" !== i.type) return _r_(!1);
return _r_("valid" !== i.type);
},
fail:function() {
return _i_("3da:2194"), i("[error] dates: checkout_date_is_selected"), _r_(e.jstmpl.translations("please_enter_your_check_out_date"));
}
}), e.Search.validators.create({
type:"dates",
name:"duration_is_less_than_30_days",
test:function() {
if (_i_("3da:2195"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type || "valid" !== i.type) return _r_(!1);
return _r_(Math.abs(i - t) > 30);
},
fail:function() {
return _i_("3da:2196"), i("[error] dates: duration_is_less_than_30_days"), _r_(e.jstmpl.translations("sbox_error_30_night_res"));
}
}), e.Search.validators.create({
type:"dates",
name:"checkin_is_earlier_than_checkout",
test:function() {
if (_i_("3da:2197"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type || "valid" !== i.type) return _r_(!1);
return _r_(t > i);
},
fail:function() {
return _i_("3da:2198"), i("[error] dates: checkin_is_earlier_than_checkout"), _r_(e.jstmpl.translations("sbox_error_checkout_after"));
}
}), e.Search.validators.create({
type:"dates",
name:"dates_are_not_in_past",
test:function() {
if (_i_("3da:2199"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type || "valid" !== i.type) return _r_(!1);
var n = e.calendar2.minToday();
return _r_(n > t.dateObject_ || n > i.dateObject_);
},
fail:function() {
return _i_("3da:2200"), i("[error] dates: dates_are_not_in_past"), _r_(e.jstmpl.translations("sbox_error_checkin_future"));
}
}), e.Search.validators.create({
type:"dates",
name:"checkin_checkout_not_on_same_day",
test:function() {
if (_i_("3da:2201"), "regular" !== e.search.dates().mode) return _r_(!1);
var t = e.search.dates("checkin"), i = e.search.dates("checkout");
if ("valid" !== t.type || "valid" !== i.type) return _r_(!1);
return _r_(t.valueOf() == i.valueOf());
},
fail:function() {
return _i_("3da:2202"), i("[error] dates: checkin_checkout_not_on_same_day"), _r_(e.jstmpl.translations("search_box_cal_error_dates_same"));
}
}), e.eventEmitter.bind(e.Search.Events.DATE_INVALID, function(e, i) {
_i_("3da:1847");
var n, r = t(".js--sb-searchbox__dates-error"), a = i.validators;
if (!a) return _r_();
n = a.reduce(function(e, t) {
return _i_("3da:2696"), "fail" === t.status && t.message && e.push(t.message), _r_(e);
}, []), n.length > 0 && r.html(n.shift()).addClass("-visible"), _r_();
}), e.eventEmitter.bind(e.Search.Events.DATE_VALID, function() {
_i_("3da:1848");
var e = t(".js--sb-searchbox__dates-error");
e.html("").removeClass("-visible"), _r_();
}), e.eventEmitter.bind(e.Search.Events.DATE_MODE_CHANGED, function(t, i) {
_i_("3da:1849"), e.search.dates().validate("reset"), _r_();
}), t("#frm, .js--sb-searchbox").bind("submit", function(t) {
_i_("3da:1850");
var i, n = e.search.dates();
return n.mode !== e.Search.DateModes.NODATES && "valid" !== n.checkin.type && "valid" !== n.checkout.type && n.setMode(e.Search.DateModes.NODATES), i = n.validate(), _r_(i);
}), _r_();
}
function r(e, t) {
if (_i_("3da:668"), !e) return _r_();
var i = new Date(e.year, e.month, e.date + t);
return _r_({
year:i.getFullYear(),
month:i.getMonth(),
date:i.getDate()
});
}
function a(t, i) {
_i_("3da:669");
var n, a, _ = i.type, s = e.search.dates(i.type), l = 1;
if ("checkin" !== _ && "checkout" !== _) return _r_();
if ("valid" !== s.type && "month" !== s.type) return _r_();
if (n = e.search.dates("checkin"), a = e.search.dates("checkout"), "checkin" === _ && ("invalid" === a.type || n >= a) && (a = e.search.dates("checkout", r(n, l))), "checkout" === _ && ("valid" !== n.type && (n = e.search.dates("checkin", r(e.search.dates("checkout"), -l))), n >= a && (n = e.search.dates("checkin", r(e.search.dates("checkout"), -l)))), o(), e.search.dates("mode", e.Search.DateModes.REGULAR), "hotel" == booking.env.b_action) return _r_();
try {
"checkin" === _ && "valid" === n.type && e[sNSStartup].calendar.syncDates(!1, n.date, n.month + 1, n.year, !1), "checkout" === _ && "valid" === a.type && e[sNSStartup].calendar.syncDates(!0, a.date, a.month + 1, a.year, !1);
} catch (d) {
window.onerror("old_calendar_api_method_does_not_exist");
}
_r_();
}
function o() {
_i_("3da:670");
var i = s(), n = "search_dates_length_of_stay";
t(".js--sb-dates__los").html(e.jstmpl(n).render({
b_checkin_checkout_interval:i,
fe_sb_state_length_of_stay:i,
b_lang:e.env.b_lang
})), _r_();
}
function _(t) {
_i_("3da:671"), t.find(".b-date-selector, .js--sb-dates__check-in, .js--sb-dates__check-out").dateSelector(), e.eventEmitter.bind(e.Search.Events.DATE_CHANGED, a), e.eventEmitter.bind(e.Search.Events.DATE_MONTH_CHANGED, a), _r_();
}
function s() {
_i_("3da:672");
var t, i, n, r = 0;
return t = e.search.dates(), i = t && t.checkin, n = t && t.checkout, n && i && n.valueOf() > i.valueOf() && (r = n.valueOf() - i.valueOf()), _r_(r);
}
function l() {
if (_i_("3da:673"), e.env.b_is_villa_site) return _r_();
var i = t(".b-form__dates, .js--sb-dates");
_(i), n(i), "company" == booking.env.b_action && i.find(".b-form-flexible-dates__toggler input:checked").length && booking.search.dates().setMode("no-dates"), _r_();
}
return _r_({
init:l
});
}(B, $), B.Search.tracker = {
track:function(e, t, i) {
_i_("3da:538");
var n = [ "Searchbox", B.env.b_action, "[" + e + "] " + t, i ];
B.google.trackEvent.apply(B.google, n), _r_();
},
trackError:function(e) {},
trackEvent:function(e) {
return _i_("3da:540"), _r_(this.track("interaction", e));
}
}, B[sNSStartup].sb_group_widget = function() {
_i_("3da:310");
var e = B.require("jquery");
B.Search = B.Search || {}, B.Search.SPECIAL_DIGITS = {
"０":0,
"１":1,
"２":2,
"３":3,
"４":4,
"５":5,
"６":6,
"７":7,
"８":8,
"９":9,
"٠":0,
"١":1,
"٢":2,
"٣":3,
"٤":4,
"٥":5,
"٦":6,
"٧":7,
"٨":8,
"٩":9,
"۰":0,
"۱":1,
"۲":2,
"۳":3,
"۴":4,
"۵":5,
"۶":6,
"۷":7,
"۸":8,
"۹":9
}, B.Search.AbstractGroupConfigurationWidget = function(e, t) {}, B.Search.AbstractGroupConfigurationWidget.prototype.initialize = function(e, t) {
_i_("3da:1102"), this.$element = e, this.setOptions(t), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.setOptions = function(t) {
_i_("3da:1103"), this.options || (this.options = {}), this.options = e.extend(this.options, t), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.initEvents = function() {
throw _i_("3da:1104"), "Abstract intiEvents method should be implemented in widget instances";
}, B.Search.AbstractGroupConfigurationWidget.prototype.onExternalEventConfigChanged = function() {
throw _i_("3da:1105"), "Abstract onExternalEventConfigChanged method should be implemented in widget instances";
}, B.Search.AbstractGroupConfigurationWidget.prototype.showErrorMessages = function(t) {
_i_("3da:1106"), this.$errorContainer = this.$errorContainer || this.$element.find(".b-form-group__error-messages");
for (var i = e("<ul></ul>", {
"class":"b-form-group__error-messages_list"
}), n = e("<li></li>", {
"class":"b-form-group__error-messages_list-item"
}), r = 0; r < t.length; r++) i.append(n.clone().html(t[r]));
this.$errorContainer.empty().append(i), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.hideErrorMessages = function() {
_i_("3da:1107"), this.$errorContainer = this.$errorContainer || this.$element.find(".b-form-group__error-messages"), this.$errorContainer.empty(), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.getConfig = function() {
throw _i_("3da:1108"), "Abstract getConfig method should be implemented in widget instances";
}, B.Search.AbstractGroupConfigurationWidget.prototype.trigger = function(e, t) {
_i_("3da:1109"), "groupChanged" === e && "function" == typeof this.onExternalEventConfigChanged && this.onExternalEventConfigChanged.apply(this, [].slice.call(arguments, 1)), "groupModeChanged" === e && "function" == typeof this.onExternalEventModeChanged && this.onExternalEventModeChanged.apply(this, [].slice.call(arguments, 1)), "groupInvalid" === e && "function" == typeof this.onExternalEventGroupInvalid && this.onExternalEventGroupInvalid.apply(this, [].slice.call(arguments, 1)), "groupValid" === e && "function" == typeof this.onExternalEventGroupValid && this.onExternalEventGroupValid.apply(this, [].slice.call(arguments, 1)), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.onInit = function() {
_i_("3da:1110");
var e = this;
"function" == typeof this.options.onInit && window.setTimeout(function() {
_i_("3da:2598"), e.options.onInit.call(e, e.getConfig()), _r_();
}, 10), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.onChange = function() {
_i_("3da:1111"), "function" == typeof this.options.onChange && this.options.onChange.call(this, this.getConfig()), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.DISABLED_CLASS = "disabled", B.Search.AbstractGroupConfigurationWidget.prototype.hide = function() {
_i_("3da:1112"), this.$element.toggleClass(this.DISABLED_CLASS, !0), _r_();
}, B.Search.AbstractGroupConfigurationWidget.prototype.show = function() {
_i_("3da:1113"), this.$element.toggleClass(this.DISABLED_CLASS, !1), _r_();
}, B.Search.PredefinedGroupSelector = function(e, t) {
_i_("3da:1114"), this.initialize.apply(this, [].slice.call(arguments, 0)), this.initEvents(), this.onInit(), _r_();
}, B.Search.PredefinedGroupSelector.prototype = new B.Search.AbstractGroupConfigurationWidget(), B.Search.PredefinedGroupSelector.prototype.initialize = function(t, i) {
_i_("3da:1115");
var n, r, a = {};
this.$element = t, this.$selector = t.find("select"), this.setOptions(i), this.$selector.find("option").each(function(t, i) {
_i_("3da:2203");
var o = e(i), _ = B.Search.createGroup(o.data());
a[_] = i, "more_options" === _.type && (n = i), o.is(":selected") && (r = _), _r_();
}), this.defaultConfigurationOption = n, this.groupConfigurationOptions = a, this.selectedConfiguration = r, _r_();
}, B.Search.PredefinedGroupSelector.prototype.initEvents = function() {
_i_("3da:1116"), this.$selector.bind("change", e.proxy(this.onChange, this)), _r_();
}, B.Search.PredefinedGroupSelector.prototype.onChange = function(e) {
_i_("3da:1117");
var t = this.getConfig();
this.selectedConfiguration.valueOf() !== t.valueOf() && (this.selectConfiguration(t), "function" == typeof this.options.onChange && this.options.onChange.call(this, t)), _r_();
}, B.Search.PredefinedGroupSelector.prototype.selectConfiguration = function(e) {
_i_("3da:1118"), this.groupConfigurationOptions[e] ? (this.groupConfigurationOptions[e].setAttribute("selected", "selected"), this.selectedConfiguration = e) :(this.selectedConfiguration = !1, this.defaultConfigurationOption.setAttribute("selected", "selected")), _r_();
}, B.Search.PredefinedGroupSelector.prototype.onExternalEventConfigChanged = function(e) {
if (_i_("3da:1119"), this.selectedConfiguration.valueOf() === e.valueOf()) return _r_();
this.selectConfiguration(e), _r_();
}, B.Search.PredefinedGroupSelector.prototype.getConfig = function() {
_i_("3da:1120");
var t = this.$selector.get(0), i = e(t.options[t.selectedIndex]), n = this.parseOption(i);
return _r_(n);
}, B.Search.PredefinedGroupSelector.prototype.parseOption = function(e) {
_i_("3da:1121");
var t = e.data(), i = B.Search.createGroup(t);
return _r_(i);
}, B.Search.CustomGroupSelector = function(t, i) {
_i_("3da:1122"), this.$element = t, this.setOptions(i), this.$adultsSelector = t.find("select[name=group_adults]"), this.$roomsSelector = t.find("select[name=no_rooms]"), this.$childrenSelector = t.find("select[name=group_children]"), this.$element.delegate("select[name=group_adults],select[name=no_rooms],select[name=group_children]", "change", e.proxy(this.onChange, this)), this.onInit(), _r_();
}, B.Search.CustomGroupSelector.prototype = new B.Search.AbstractGroupConfigurationWidget(), B.Search.CustomGroupSelector.prototype.DISABLED_CLASS = "b-form-custom-group_disabled", B.Search.CustomGroupSelector.prototype.getConfig = function() {
_i_("3da:1123");
var e = this.$adultsSelector.val(), t = this.$roomsSelector.val(), i = this.$childrenSelector.val(), n = {};
return e && !isNaN(parseInt(e, 10)) && (n.adults = parseInt(e, 10)), t && !isNaN(parseInt(t, 10)) && (n.rooms = parseInt(t, 10)), i && !isNaN(parseInt(i, 10)) && (n.children = parseInt(i, 10)), _r_(n);
}, B.Search.CustomGroupSelector.prototype.onChange = function(e) {
_i_("3da:1124");
var t = this.getConfig();
"function" == typeof this.options.onChange && this.options.onChange.call(this, t), _r_();
}, B.Search.CustomGroupSelector.prototype.onExternalEventModeChanged = function(e) {
_i_("3da:1125"), "basic" === e.mode ? this.hide() :this.show(), _r_();
}, B.Search.CustomGroupSelector.prototype.onExternalEventConfigChanged = function(e) {
_i_("3da:1126");
var t;
e.adults !== t && this.$adultsSelector.val(e.adults), e.rooms !== t && this.$roomsSelector.val(e.rooms), e.children !== t && this.$childrenSelector.val(e.children), "basic" === e.type ? this.hide() :this.show(), _r_();
}, B.Search.ChildrenAgesSelector = function(e, t) {
_i_("3da:1127"), this.initialize.apply(this, [].slice.call(arguments, 0)), this.initEvents(), this.onInit(), _r_();
}, B.Search.ChildrenAgesSelector.prototype = new B.Search.AbstractGroupConfigurationWidget(), B.Search.ChildrenAgesSelector.prototype.show = function() {
_i_("3da:1128"), B.Search.AbstractGroupConfigurationWidget.prototype.show.apply(this), _r_();
}, B.Search.ChildrenAgesSelector.prototype.initialize = function(e, t) {
_i_("3da:1129"), this.$element = e, this.$inputsContainer = this.$element.find(".b-custom-element__container"), this.ages = this.getAges(), this.setOptions(t), _r_();
}, B.Search.ChildrenAgesSelector.prototype.initEvents = function() {
_i_("3da:1130"), this.$element.delegate("select[name=age]", "change", e.proxy(this.onChange, this)), this.$inputsContainer.find(".b-custom-element__label").bind("click", e.proxy(this.onLabelClick, this)), _r_();
}, B.Search.ChildrenAgesSelector.prototype.sanitizeInput = function() {
_i_("3da:1131"), this.getInputs().each(function(e, t) {
_i_("3da:2204");
var i = t.value;
i = i.replace(/\D/g, function(e) {
return _i_("3da:2850"), _r_(B.Search.SPECIAL_DIGITS.hasOwnProperty(e) ? B.Search.SPECIAL_DIGITS[e] :e);
}), t.value = i, _r_();
}), _r_();
}, B.Search.ChildrenAgesSelector.prototype.onChange = function() {
_i_("3da:1132"), this.sanitizeInput();
var e = this.getConfig();
"function" == typeof this.options.onChange && this.options.onChange.call(this, e), _r_();
}, B.Search.ChildrenAgesSelector.prototype.onLabelClick = function(e) {
_i_("3da:1133"), e.preventDefault();
var t = this.getInputs(), i = t.filter(function() {
return _i_("3da:2697"), _r_("" == this.value);
}).first();
i.length ? i.focus() :t.first().focus(), _r_();
}, B.Search.ChildrenAgesSelector.prototype.DISABLED_CLASS = "b-form-children-ages_disabled", B.Search.ChildrenAgesSelector.prototype.onExternalEventGroupInvalid = function(e) {
_i_("3da:1134"), this.showErrorMessages(e.messages), _r_();
}, B.Search.ChildrenAgesSelector.prototype.onExternalEventGroupValid = function(e) {
_i_("3da:1135"), this.hideErrorMessages(e.messages), _r_();
}, B.Search.ChildrenAgesSelector.prototype.onExternalEventConfigChanged = function(e) {
_i_("3da:1136");
for (var t, i = this.getAges(), n = e.childrenAges, r = 0; r < n.length; r++) n[r] === t && (n[r] = i[r]);
0 === n.length ? this.hide() :((n.length !== i.length || n.join(",") !== this.serialize()) && this.render(n), this.show()), _r_();
}, B.Search.ChildrenAgesSelector.prototype.getInputs = function() {
return _i_("3da:1137"), _r_(this.$inputsContainer.find(".b-children-ages-configurator__element"));
}, B.Search.ChildrenAgesSelector.prototype.getConfig = function() {
return _i_("3da:1138"), _r_({
childrenAges:this.getAges()
});
}, B.Search.ChildrenAgesSelector.prototype.getAges = function() {
_i_("3da:1139");
var t = this.getInputs(), i = [];
return t.each(function(t, n) {
_i_("3da:2205"), e(n).find(":selected").hasClass("sb_child_ages_empty_zero") ? i.push(void 0) :i.push(n.value), _r_();
}), this.ages = i, _r_(i);
}, B.Search.ChildrenAgesSelector.prototype.serialize = function() {
return _i_("3da:1140"), _r_(this.ages.join(","));
}, B.Search.ChildrenAgesSelector.prototype.renderLabel = function(t) {
_i_("3da:1141");
var i = null, n = null, r = null, a = null, o = null, _ = B.require("formatting/date"), s = B.search.dates("checkout"), l = this.$element.find(".b-custom-element__label");
"valid" === s.type ? (i = {
day:s.date,
month:s.month,
year:s.year
}, r = B.jstmpl.translations("bh_gsb_search_box_checkout_age", null, {
date:_.format(i, "short_date")
}), n = B.jstmpl.translations("bh_gsb_search_box_checkout_age_plural", null, {
date:_.format(i, "short_date")
}), l.text(1 == t ? r :n), "city" === B.env.b_action && (a = e(".lp_bold_date_picker_lightbox_clear.plural"), o = e(".lp_bold_date_picker_lightbox_clear.singular"), a.text(n), o.text(r))) :(n = B.jstmpl.translations("loc_sbox_children_age_plural"), r = B.jstmpl.translations("loc_sbox_children_age_singular"), l.text(1 == t ? r :n)), _r_();
}, B.Search.ChildrenAgesSelector.prototype.render = function(e) {
_i_("3da:1142");
var t, i = e.length, n = "";
this.$inputsContainer.find(".b-children-ages-configurator__element").remove(), this.renderLabel(i);
for (var r = 0; i > r; r++) t = e[r] >= 0 ? e[r] :"", n += this.renderSelector(t);
this.$inputsContainer.append(n), _r_();
}, B.Search.ChildrenAgesSelector.prototype.renderSelector = function(e, t, i) {
_i_("3da:1143");
var n = "b-children-ages-configurator__element b-children-ages-configurator__element_selector js-multi-room-ages", r = '<select name="age" class="' + n + '">';
if (e) var e = parseInt(e, 10) || 0; else r += "index" === B.env.b_action || "hotel" === B.env.b_action || "searchresults" === B.env.b_action ? '<option class="sb_child_ages_empty_zero" value="12 " selected="selected"></option>' :'<option class="sb_child_ages_empty_zero" value="0 " selected="selected"></option>';
for (var a = 0; 17 >= a; a++) r += "<option " + (0 === a ? 'class="sb_child_ages_not_empty_zero"' :"") + ' value="' + a + '" ' + (a === e ? "selected" :"") + ">" + a + "</option>";
return r += "</select>", _r_(r);
}, B.Search.createWidgetPlugin("predefinedGroupSelector", B.Search.PredefinedGroupSelector), B.Search.createWidgetPlugin("customGroupSelector", B.Search.CustomGroupSelector), B.Search.createWidgetPlugin("childrenAgesSelector", B.Search.ChildrenAgesSelector);
function t() {
_i_("3da:674"), e(".b-form-predefined-group").predefinedGroupSelector({
onChange:function(e) {
_i_("3da:2206"), "basic" === e.type ? B.search.group().mode("basic") :B.search.group().mode("custom"), "more_options" !== e.type && B.search.group(e), "more_options" === e.type ? B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_ADVANCED_MODE_SELECTED) :"basic" === e.type && 2 === e.adults && 1 === e.rooms && 0 === e.children ? B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_BASIC_MODE_SELECTED) :"basic" === e.type && B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_PREDEFINED_OPTION_SELECTED), _r_();
},
onInit:function(e) {
_i_("3da:2207"), "basic" === e.type ? B.search.group().mode("basic") :B.search.group().mode("custom"), _r_();
}
}), e(".b-form-custom-group").customGroupSelector({
onChange:function(e) {
_i_("3da:2208");
var t = B.search.group().value;
t.adults !== e.adults && B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_ADULTS_NUMBER_CHANGED), t.rooms !== e.rooms && B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_ROOMS_NUMBER_CHANGED), t.children !== e.children && B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_CHILDREN_NUMBER_CHANGED), B.search.group(e), _r_();
},
onInit:function(e) {
_i_("3da:2209"), "basic" !== B.search.group().mode() && this.show(), _r_();
}
}), e(".b-form-children-ages").childrenAgesSelector({
onChange:function(e) {
_i_("3da:2210"), B.search.group("childrenAges", e.childrenAges), B.Search.tracker.trackEvent(B.Search.TrackingEvents.GROUP_CHILDREN_AGE_CHANGED), _r_();
},
onInit:function(e) {
_i_("3da:2211"), e.childrenAges.length > 0 ? this.show() :this.hide(), B.eventEmitter.bind(B.Search.Events.DATE_CHANGED, function(e, t) {
_i_("3da:2902"), "checkout" === t.type && this.renderLabel(this.getConfig().childrenAges.length), _r_();
}.bind(this)), B.eventEmitter.bind(B.Search.Events.DATE_INVALID, function(e, t) {
_i_("3da:2903"), this.render(this.getConfig().childrenAges), _r_();
}.bind(this)), B.eventEmitter.bind(B.Search.Events.DATE_MONTH_CHANGED, function(e, t) {
_i_("3da:2904"), this.render(this.getConfig().childrenAges), _r_();
}.bind(this)), _r_();
}
}), B.eventEmitter.bind(B.Search.Events.GROUP_MODE_CHANGED, function(t, i) {
_i_("3da:1851"), e.fn.predefinedGroupSelector("notify", "groupModeChanged", i), e.fn.customGroupSelector("notify", "groupModeChanged", i), e.fn.childrenAgesSelector("notify", "groupModeChanged", i), B.search.group().validate("reset"), _r_();
}), B.eventEmitter.bind(B.Search.Events.GROUP_CHANGED, function(t, i) {
_i_("3da:1852"), e.fn.predefinedGroupSelector("notify", "groupChanged", i), e.fn.customGroupSelector("notify", "groupChanged", i), e.fn.childrenAgesSelector("notify", "groupChanged", i), _r_();
}), B.eventEmitter.bind(B.Search.Events.GROUP_INVALID, function(t, i) {
_i_("3da:1853");
for (var n = i.validators, r = [], a = [], o = 0; o < n.length; o++) n[o].validationParameters.invalidAges && r.push(n[o].validationParameters.invalidAges), n[o].message && a.push(n[o].message);
e.fn.childrenAgesSelector("notify", "groupInvalid", {
messages:a,
agesStatus:r
}), _r_();
}), B.eventEmitter.bind(B.Search.Events.GROUP_VALID, function(t, i) {
_i_("3da:1854"), e.fn.childrenAgesSelector("notify", "groupValid", {
message:"message",
agesStatus:[]
}), _r_();
}), e("#frm").bind("submit", function(e) {
return _i_("3da:1855"), _r_(B.search.group().validate());
}), e("#frm").find(".group-groupsearch").length && B.et.track("bHARWSEFQBINFeCTRe") && e("#frm").bind("submit", function(t) {
if (_i_("3da:2212"), !B.search.dates().validate()) return _r_(!1);
var i = e(this), n = [ "[name=group_adults]", "[name=group_children]", "[name=age]" ], r = i.find("[name=room1]");
i.find(n.join(",")).prop("disabled", !0), r.val(r.val().replace(" ", "")), _r_();
}), _r_();
}
return _r_({
init:t
});
}(), $(".city_reviews-wrp").length > 0 && (booking[sNSStartup].seo_city_reviews_refined = {
init:function() {
_i_("3da:980"), $(".city_reviews-wrp").delegate(".city_reviews-content", "mouseenter", function() {
_i_("3da:2053");
var e = $(this);
e.removeClass("hei-60 col-grey73").addClass("baccol-grey32a08 col-white pad-15"), _r_();
}), $(".city_reviews-wrp").delegate(".city_reviews-content", "mouseleave", function() {
_i_("3da:2054");
var e = $(this);
e.removeClass("baccol-grey32a08 col-white pad-15").addClass("hei-60 col-grey73"), _r_();
}), _r_();
}
}), booking.ensureNamespaceExists(sNSExperiments), booking[sNSStartup].b_site_experiment_expand_signup = {
priority:9,
init:function() {
_i_("3da:541");
var e = B.require("jquery"), t = e("#newsletter_to", ".footerForm"), i = t.attr("value");
if (t.click(function() {
_i_("3da:1503");
var t = e(this);
e("dl #newsletter_to").removeClass("error"), t.val() === i ? t.val("") :t.select(), _r_();
}), t.blur(function() {
_i_("3da:1504");
var t = e(this);
"" === t.val() && t.val(i), _r_();
}), e("#newsletter_button_footer").click(function() {
_i_("3da:1505"), e(this).parents("form:first").submit(), _r_();
}), e(".signupForm").submit(function(t) {
_i_("3da:1506"), t.preventDefault(), e(".newsletter_ajax_error").hide();
var i, n = booking.env, r = e(this), a = /^([\w-\.\+]+@([\w-]+\.)+[\w-]{2,14})?$/, o = e("input[name=url]", r).val(), _ = e("input[name=hostname]", r).val(), s = e("input[name=aid]", r).val(), l = e("input[name=companyname]", r).val(), d = e("input[name=subscribe_source]", r).val(), c = e("input[name=subscribe_notification]", r).val(), u = e("input[name=dest_id]", r).val(), h = e("input[name=dest_type]", r).val(), f = e("input[name=to]", r).val(), p = e("input[name=get_the_app]", r).is(":checked"), g = e("input[name=incentive_popup_campaign_id]", r).val(), m = e("input[name=incentive_popup_share_link]", r).val();
if ("" === f || !a.test(f)) return e(this).find(".nl_inputfield_track").addClass("error"), e(".newsletter_subscribe_error_invalid", r).show(), _r_(!1);
f = encodeURIComponent(f), i = "to=" + f + "&url=" + o + "&hostname=" + _ + "&aid=" + s + "&companyname=" + l + "&subscribe_source=" + d, "" !== c && (i = i + "&subscribe_notification=" + c), "" != u && (i = i + "&dest_id=" + u), "" != h && (i = i + "&dest_type=" + h), p === !0 && (i += "&get_the_app=1"), g && (i = i + "&incentive_popup_campaign_id=" + g), m && (i = i + "&incentive_popup_share_link=" + m), e(".newsletter_sub_preloader", r).show(), e.ajax({
type:"POST",
url:"/newslettersubscribe.json",
data:i,
dataType:"json",
success:function(t) {
if (_i_("3da:2698"), e(".newsletter_sub_preloader", r).hide(), 0 === t.success) return "denied" === t.error ? e("form").hasClass("unsubHero-action") ? (e("form.unsubHero-action").addClass("error"), e(".unsubHero-form .blurb .error").show()) :(e(this).find(".nl_inputfield_track").addClass("error"), e(".newsletter_subscribe_error_denied", r).show(), e(".newsletter_subscribe_error_bad_unknown, .newsletter_subscribe_error_invalid, .newsletter_sub_success", r).hide()) :"bad_params" === t.error && (e("form").hasClass("unsubHero-action") ? (e("form.unsubHero-action").addClass("error"), e(".unsubHero-form .blurb .error").show()) :(e(".nl_inputfield_track").addClass("error"), e(".newsletter_subscribe_error_bad_unknown", r).show(), e(".newsletter_subscribe_error_denied, .newsletter_subscribe_error_invalid, .newsletter_sub_success", r).hide())), _r_();
if (1 === t.success) if (e("div#flashdealsbg_wrapper").length) window.location.href = n.b_nonsecure_hostname_signup + n.b_fd_searchresults_url_signup; else if (e("form").hasClass("unsubHero-action")) e("form.unsubHero-action, .unsubHero-form .blurb, .unsubHero-benefits, .unsubHero-tagline").hide(), e(".unsubHero-form .success-blurb, .b_unsubscribe_user .b_unsubscribe_user").show(), e(".unsubDesc strong").replaceWith("<strong>" + f + "</strong>"), e(".unsubHero-form").addClass("success"), e("body").hasClass("unsub_hero_thanks") || e("html, body").animate({
scrollTop:e(".unsubHero-form").offset().top
}, 750), e("input[value='subscribe_flash_deals'], input[value='subscribe_cityspecial']").attr("checked", "checked"), e(".feedback.error", ".unsub_messages").hide(), e("input[value='subscribe_genius'], input[value='subscribe_weekly'], input[value='subscribe_sunday_newsletter'], input[value='subscribe_popular']").removeAttr("checked"); else if (e(".newsletter_sub_info", r).hide(), e(".newsletter_sub_success", r).show(), e("#add_location_to").val(f), e(".newsletter_form_fields, .newsletter_subscribe_error_bad_unknown, .newsletter_subscribe_error_denied, .newsletter_subscribe_error_invalid", r).hide(), t.has_account) {
var i = e("#userdataform form").eq(0);
i && i.attr("action", i.attr("data-url-login"));
}
_r_();
}
}), _r_();
}), "subscribe" == B.env.b_action && e("body").hasClass("unsub_hero_thanks") && e(document).ready(function() {
_i_("3da:2430"), e("#newsletter_button_footer").parents("form:first").submit(), _r_();
}), e(".signupWithnameForm").submit(function(t) {
_i_("3da:1507"), t.preventDefault(), e(".feedback_msg").each(function() {
_i_("3da:2431"), e(this).hide(), _r_();
});
var i, n = e(this), r = /^([\w-\.\+]+@([\w-]+\.)+[\w-]{2,14})?$/, a = e("input[name=companyname]", n).val(), o = e("input[name=aid]", n).val(), _ = e("input[name=subscribe_source]", n).val(), s = e("input[name=email]", n).val(), l = e("input[name=firstname]", n).val();
if ("" === s || !r.test(s)) return e(".newsletter_subscribe_error_invalid", n).show(), _r_(!1);
e('<div class="loader_placer"></div>').appendTo("#sfl_stepOne"), i = "to=" + s + "&email=" + s + "&aid=" + o + "&companyname=" + a + "&subscribe_source=" + _, e.ajax({
type:"POST",
url:"/newslettersubscribe.json",
data:i,
dataType:"json",
success:function(t) {
if (_i_("3da:2699"), 0 == t.success) return e(".loader_placer").hide(), "denied" == t.error ? (e(".newsletter_subscribe_error_denied", n).show(), e(".newsletter_subscribe_error_bad_unknown, .newsletter_subscribe_error_invalid, .newsletter_sub_success", n).hide()) :("bad_params" == t.error || "unknown" == t.error) && (e(".newsletter_subscribe_error_bad_unknown", n).show(), e(".newsletter_subscribe_error_denied, .newsletter_subscribe_error_invalid, .newsletter_sub_success", n).hide()), _r_();
if (1 == t.success) if (e(".loader_placer").hide(), e(".uspfield").hide(), e("#sfl_stepOne").hide(), "" == l || booking.env.b_exclude_lang_firstname) e("#sfl_stepThree").show(), e(".userWithoutFirstname").show(); else if (l = escape(l), 1 == t.has_account) e(".firstnameplacer").html(l), e("#sfl_stepThree").show(), e(".userWithAccount").show(); else {
var i = booking.env.b_signup_iframe_url + "&firstname=" + l + "&email=" + escape(s);
i += "&aid=" + B.env.aid, i += "&label=" + B.env.b_label, e('<iframe border="0" id="sfl_stepTwo" src="' + i + '" width="656" height="320" frameborder="no" scrolling="no"></iframe>').appendTo(".signupWithnameForm");
}
_r_();
}
}), _r_();
}), e("#subscriber_account_active").submit(function(t) {
if (_i_("3da:1508"), e('input[name="mypassword"]').val().length < 1) return e(".newsletter_register_error_nopassword").show(), _r_(!1);
e('<input type="hidden" name="password" value="' + e('input[name="myssword"]').val() + '" />').appendTo("#subscriber_account_active"), _r_();
}), e(".modal-mask-closeBtn").click(function() {
return _i_("3da:1509"), _r_(!1);
}), e(".modal-mask").click(function() {
return _i_("3da:1510"), _r_(!1);
}), !e("#newsletter_form_footer_container").length) return _r_(!1);
e(".nl_inputfield_track, .newsletter_button").click(function() {
return _i_("3da:2055"), _r_(!1);
}), _r_();
}
}, booking.social_plugins_footer = function() {
_i_("3da:311");
var e = function() {
_i_("3da:1144");
var e = $("#footer_weibo"), t = $("#footer_wechat"), i = $("#footer_naver");
i.hover(function() {
_i_("3da:2213"), i.find(".footer_tooltip").stop(!0, !0).fadeIn(), _r_();
}, function() {
_i_("3da:2214"), i.find(".footer_tooltip").stop(!0, !0).fadeOut(), _r_();
}), e.hover(function() {
_i_("3da:2215"), e.find(".footer_tooltip").stop(!0, !0).fadeIn(), _r_();
}, function() {
_i_("3da:2216"), e.find(".footer_tooltip").stop(!0, !0).fadeOut(), _r_();
}), t.hover(function() {
_i_("3da:2217"), t.find(".footer_tooltip").stop(!0, !0).fadeIn(), _r_();
}, function() {
_i_("3da:2218"), t.find(".footer_tooltip").stop(!0, !0).fadeOut(), _r_();
}), _r_();
};
return _r_({
init:e
});
}(), booking[sNSStartup].social_plugins_footer = {
priority:9,
init:function() {
_i_("3da:542"), booking.env.social_plugins_footer && booking.social_plugins_footer.init(), _r_();
}
}, booking[sNSStartup].store_cc_details = {
priority:9,
init:function() {
if (_i_("3da:543"), "book" === B.env.b_action) return _r_();
$("#saved_credit_cards .cc_save").attr("disabled", "disabled"), $("#saved_credit_cards .cc_save").addClass("cc_save_disabled"), $("#saved_credit_cards select").change(function() {
_i_("3da:1511");
var e = $(this).closest("form");
$(this).css({
"font-weight":"bold"
}), $(".cc_save", e).removeAttr("disabled"), $(".cc_save", e).removeClass("cc_save_disabled"), _r_();
}), $("#card_status").length && setTimeout(function() {
_i_("3da:2056"), $("#card_status").hide("slow"), _r_();
}, 5e3), "login" === B.env.b_action && $(".cc_delete").mousedown(function() {
_i_("3da:2057");
var e = $(this).closest("tr").get(0), t = $(this).val() || $(this).attr("value"), i = "/delete_cc_card?cc_id=" + t;
return $.ajax({
url:i,
type:"POST",
success:function(t) {
_i_("3da:2851"), $(e).hide(), _r_();
},
error:function(e) {
return _i_("3da:2852"), _r_(!1);
}
}), _r_(!1);
}), _r_();
}
}, booking.env.Tabs = function(e) {
_i_("3da:212");
var t = {
baseEl:"#newsletter_deals_city",
menuEl:".deals_menu",
contentEl:".deals_wrapper",
dealsEl:".deals",
navEl:".nav_menu",
defaultEl:1
}, e = $.extend(t, e);
$(e.menuEl + " li:nth-child(" + e.defaultEl + ")").addClass("active").show(), $(e.contentEl + " ul.deals:nth-child(" + e.defaultEl + ")").show(), $("li", e.menuEl).click(function() {
_i_("3da:981"), $("li", e.menuEl).removeClass("active"), $(this).addClass("active"), $(e.dealsEl, e.contentEl).hide();
var t = $(this).find("a").attr("href");
return $(t).show(), _r_(!1);
}), $(e.contentEl, e.baseEl).show(), _r_();
}, function(e, t, i, n) {
"use strict";
_i_("3da:213"), e.when({
condition:"tdot" === e.env.b_site_type,
events:"ready"
}).run(function() {
_i_("3da:982");
var t = !e.env.b_is_ipad && e.env.pointer_events_s_r_n_d ? 1 :0;
if (!e.env.b_is_ipad && !t) return _r_();
var i, n, r, a, o, _ = e.require("jquery"), s = !1;
function l(e) {
if (_i_("3da:1512"), i.isVisibleOverlay() && i.click == e) i.distroyOverlay(); else {
var t = a.data("spinner-loaded");
if (t || (a.append('<div class="mm_loading mm_preload"><a href="#"></a></div>'), o.append('<div class="mm_loading mm_preload"><a href="#"></a></div>'), a.data("spinner-loaded", !0)), i.createOverlay(), i.click = e, _(".milk_menu").hide(), _(".b_recentlyviewed").length && _(".b_recentlyviewed").removeClass("rv-content-visible"), _("#top_lw_wrapper").hide(), "lang" === e && !s) {
s = !0;
var n = a.clone();
n.find(".t_flag").each(function() {
_i_("3da:2853");
var e = _(this), t = e.data("img"), i = e.data("size");
e.append('<img src="' + t + '" width="' + i + '" height="' + i + '" />'), _r_();
}), a.html(n.html());
}
"lang" === e ? a.show() :"curr" === e && o.show();
}
_r_();
}
function d() {
_i_("3da:1513"), n.on("click", function() {
_i_("3da:2432"), l("lang"), _r_();
}), r.on("click", function() {
_i_("3da:2433"), l("curr"), _r_();
});
var e = function() {
_i_("3da:2434");
var e = _(this), t = e.parent();
if (t.hasClass("selected")) return i.distroyOverlay(), _r_(!1);
t.parent().parent().find("li.selected").removeClass("selected"), _(".mm_loading").removeClass("mm_loading"), t.addClass("mm_loading"), _r_();
};
a.on("click", "li a", e), o.on("click", "li a", e), _r_();
}
function c() {
_i_("3da:1514"), i = booking[sNSStartup].ng_last_viewed || "", n = _("#b_nav_language"), r = _("#b_nav_currency"), a = _("#top_language"), o = _("#top_currency"), d(), _r_();
}
c(), _r_();
}), _r_();
}(window.booking, window, document), function() {
_i_("3da:214");
var e = B.require("jquery");
booking[sNSStartup].rewrite_tt = {
priority:7,
version:"1.2.5",
tt:null,
ttWinHeight:0,
ttWinWidth:0,
ttScrollTop:0,
ttScrollLeft:0,
ttShowLeft:!1,
ttShowTop:!1,
ttCounter:0,
ttShow:null,
ttContent:"",
ttCurElem:null,
ttCurText:"",
ttTimedOut:null,
ttTimeout:300,
ttClass:"basic_tooltip_class js-tooltip-wrap",
ttHidennodeAttr:"node_tt_id",
ttNodes:[ ".jq_tooltip", "*[data-title]", ".policy_name_tt" ],
toolTips:{},
preLoadedImages:{},
init:function() {
if (_i_("3da:1515"), booking.env.b_is_tdot_traffic && "book" === booking.env.b_action) return _r_(!0);
booking.env.rtl && (this.ttClass += " rtl_tooltip_class");
var t = this;
booking.env.b_is_ie7 && (this.ttTimeout = 0), this.tt = document.getElementById("tooltip_wrap") || function() {
_i_("3da:2700");
var e = document.createElement("div");
e.id = "tooltip_wrap";
var t = '<div class="tt_shadow"><div class="tt_content"></div></div>';
return document.body.appendChild(e), e.innerHTML = t, _r_(e);
}(), window.onresize = function() {
_i_("3da:2435"), t.setWindowSize(), _r_();
}, e(window).on("scroll", function() {
_i_("3da:2436"), t.setScrollPosition(), _r_();
}), setTimeout(function() {
_i_("3da:2437");
var i = t.ttNodes.join(", ");
if (t.ttContent = e(".tt_content", t.tt).length ? e(".tt_content", t.tt).get(0) :t.tt, t.setWindowSize(), t.setScrollPosition(), booking.env.b_is_tdot_traffic && e(document).on("touchstart.ttfix", ".js-tooltip-wrap", function() {
_i_("3da:2926"), t.showHideTooltip(null, 0, 0), _r_();
}), e("body").delegate(i, "mouseover mouseout mousemove", function(i) {
_i_("3da:2854");
var n = "tooltip" === e(this).attr("data-component");
if (n) return _r_();
var r = i || window.event, a = r.pageX || r.clientX + this.ttScrollLeft || 0, o = r.pageY || r.clientY + this.ttScrollTop || 0;
"mouseout" === r.type ? t.showHideTooltip(null, a, o) :t.showHideTooltip(this, a, o), _r_();
}), booking.env.b_is_ie8 || booking.env.b_is_ie9) {
var n = t.ttNodes.join("[title], ");
e(n).each(function() {
_i_("3da:2927");
var e = this.getAttribute("title");
this.setAttribute("data-title", e), this.removeAttribute("title"), _r_();
});
}
_r_();
}, 500), _r_();
},
showHideTooltip:function(e, t, i) {
if (_i_("3da:1516"), null != this.ttShow || null == e) {
if (e != this.ttCurElem && null != this.ttCurElem) this.ttShow = null, this.ttContent && (this.ttContent.innerHTML = ""), this.ttCurText = "", this.ttCurElem = null, this.ttShowLeft = !1, this.ttShowTop = !1, this.tt && (this.tt.style.display = "none", this.tt.className = "", this.tt.style.width = "auto"); else if (this.tt) {
var n = this.getPosition(t, i, this.tt);
n && n.length > 1 && (this.tt.style.left = n[0] + "px", this.tt.style.top = n[1] + "px");
}
} else {
var r = this.getTTNode(e);
if (null != r) {
this.ttShow = e.id;
var a = r;
this.ttCurElem = e, this.ttCurText = a[0];
var o = "" != a[1] ? a[1] :this.ttClass;
if (a[2] && (this.ttShowLeft = !0), a[5] && (this.ttShowTop = !0), a[4] && (o += " tt_loading", this.preloadImg(e.id)), this.ttContent.innerHTML = this.ttCurText, this.tt && (this.tt.className = o, null != a[3] ? this.tt.style.width = ("function" == typeof a[3] ? a[3].call(this.tt) :a[3]) + "px" :this.tt.style.width = "auto"), a[4] || this.showToolTip(0), this.tt) {
var n = this.getPosition(t, i, this.tt);
this.tt.style.left = n[0] + "px", this.tt.style.top = n[1] + "px";
}
}
}
_r_();
},
showToolTip:function(e) {
_i_("3da:1517");
var t = this;
if (0 != this.ttTimeout) {
var i = e < this.ttTimeout ? this.ttTimeout - e :10;
t.showingTooltip && clearTimeout(t.showingTooltip), t.showingTooltip = setTimeout(function() {
_i_("3da:2781"), "" != t.ttCurText ? (booking.eventEmitter.trigger("tooltip.show", [ t.ttCurElem, t ]), t.tt.style.display = "block") :t.showHideTooltip(null, 0, 0), _r_();
}, i);
} else this.tt && (this.tt.style.display = "block");
_r_();
},
setScrollPosition:function() {
_i_("3da:1518"), "number" == typeof window.pageYOffset ? (this.ttScrollLeft = window.pageXOffset, this.ttScrollTop = window.pageYOffset) :document.documentElement && document.documentElement.scrollTop ? (this.ttScrollLeft = document.documentElement.scrollLeft, this.ttScrollTop = document.documentElement.scrollTop) :(this.ttScrollLeft = document.body.scrollLeft, this.ttScrollTop = document.body.scrollTop), _r_();
},
setWindowSize:function() {
_i_("3da:1519"), window.innerWidth ? (this.ttWinWidth = window.innerWidth, this.ttWinHeight = window.innerHeight) :0 != document.documentElement.clientWidth ? (this.ttWinWidth = document.documentElement.clientWidth, this.ttWinHeight = document.documentElement.clientHeight) :(this.ttWinWidth = document.body.clientWidth, this.ttWinHeight = document.body.clientHeight), _r_();
},
getTTNode:function(t) {
if (_i_("3da:1520"), !e(t).attr("data-resized")) {
if (t.id) var i = t.id; else {
this.ttCounter++;
var i = "b_tt_holder_" + this.ttCounter;
t.id = i;
}
if (this.toolTips[i]) return _r_(this.toolTips[i]);
if (e(t).attr("data-" + this.ttHidennodeAttr) && e("#" + e(t).attr("data-" + this.ttHidennodeAttr)).length) var n = e("#" + e(t).attr("data-" + this.ttHidennodeAttr)).html(); else if (e(t).hasClass("policy_name_tt")) var n = e(t).siblings(".differing_policies").html(); else if (e(t).hasClass("fleximeter_tt")) var n = e(t).parents(".hp-rt__policy-list").siblings(".differing_policies").html(); else if (e(t).hasClass("non-refundable-savings")) var n = e(t).siblings(".differing_policies").html(); else {
var n = t.getAttribute("data-title") || t.getAttribute("title");
t.getAttribute("title") && !t.getAttribute("data-title") && (t.setAttribute("data-title", t.getAttribute("title")), t.removeAttribute("title"));
}
var r = t.nodeName.toLowerCase();
if (("option" == r || "link" == r || "select" == r) && (n = ""), n && "" != n) {
var a = this.ttClass, o = e(t).hasClass("left_tt"), _ = !1, s = new RegExp("(<script type=['\"]track_copy['\"] data-hash=['\"](\\w+)['\"]></script>)"), l = s.exec(n), d = l && l[2];
if (d && (n = n.replace(s, ""), B.et.stage(d, 1)), _) return _r_(null);
var c = null, u = t.getAttribute("data-width");
if (u && !isNaN(u) && u > 150 && 1001 > u) c = u; else {
var h = t.getAttribute("rel");
h && !isNaN(h) && h > 150 && 1001 > h && (c = h);
}
var f = n.indexOf("<img") > -1 && null == c ? !0 :!1;
t.className.indexOf("large_tooltip") > -1 && (a += " tt_large"), f && (a += " blackBorderTooltip"), e(t).attr("data-tooltip-class") && (a += " " + e(t).attr("data-tooltip-class"));
var p = e(t).attr("data-toponly"), g = !!p;
return this.toolTips[i] = [ n, a, o, c, f, g ], null != t.getAttribute("title") && (null == t.getAttribute("data-title") && t.setAttribute("data-title", t.title), t.title = "", t.removeAttribute("title")), booking.env.b_is_ie && t.removeAttribute("alt"), _r_(this.toolTips[i]);
}
return _r_(null);
}
_r_();
},
getPosition:function(t, i, n) {
_i_("3da:1521");
var r = 15, a = 10, o = t + r, _ = i + a, s = e(n).width(), l = e(n).height(), d = 20;
return (t + s + this.ttScrollLeft > this.ttWinWidth - d || this.ttShowLeft && t > s + d) && (o = t - s - d), B.env.rtl && (o = t - s - r, s + d > t - this.ttScrollLeft && (o = t + r)), this.ttShowTop ? i - l - a > this.ttScrollTop && (_ = i - l - a) :(this.ttShowTop || i + l - this.ttScrollTop > this.ttWinHeight - d) && (_ = i - l - a), _r_([ o, _ ]);
},
preloadImg:function(e) {
_i_("3da:1522");
var t = this, i = new Date(), n = this.toolTips[e][0].match(/src=['"]([^'"]+)['"]/);
if (!n[1]) return this.toolTips[e][4] = !1, _r_();
if (this.preLoadedImages[n[1]]) return this.toolTips[e][4] = !1, -1 === this.preLoadedImages[n[1]].ttid.indexOf(e) && this.preLoadedImages[n[1]].ttid.push(e), _r_();
this.preLoadedImages[n[1]] = {
ttid:[ e ],
loaded:!1
};
var r = document.createElement("img");
r.onload = function() {
_i_("3da:2438"), t.preLoadedImages[this.src].loaded = !0, t.preLoadedImages[this.src].ttid.forEach(function(e) {
_i_("3da:2855");
var n = t.toolTips[e];
if (null != n[3]) {
var r = this.width + 20;
r > 150 && (n[3] = r);
}
if (n[4] = !1, t.ttShow !== e) return _r_();
null != n[3] && (t.tt.style.width = n[3] + "px");
var a = new Date(), o = a.getTime() - i.getTime();
t.showToolTip(o), _r_();
}), _r_();
}, r.src = n[1], _r_();
},
addTooltip:function(t, i, n, r, a, o) {
_i_("3da:1523"), "function" == typeof i && (i = i());
var _ = this;
"string" == typeof t && e("#" + t).length ? (e("#" + t).addClass("jq_tooltip"), this.toolTips[t] = [ i, n, r, a, o ]) :"object" == typeof t && e(t).each(function() {
if (_i_("3da:2782"), e(this).addClass("jq_tooltip"), this.id) var t = this.id; else {
_.ttCounter++;
var t = "b_tt_holder_" + _.ttCounter;
this.id = t;
}
i || (i = e(this).attr("data-title")), a || (a = e(this).attr("data-width")), _.toolTips[t] = [ i, n, r, a, o ], _r_();
}), _r_();
},
updateTooltip:function(t, i, n, r) {
if (_i_("3da:1524"), r = r || {}, e(t).attr("id")) var a = e(t).attr("id"); else {
this.ttCounter++;
var a = "b_tt_holder_" + this.ttCounter;
e(t).attr("id", a);
}
!n && this.toolTips[a] ? (this.toolTips[a][0] = i, r.width && (this.toolTips[a][3] = r.width)) :this.addTooltip(a, i, "", !1, r.width || null, !1), _r_();
}
}, _r_();
}(), booking.ensureNamespaceExists(sNSStartup), booking[sNSStartup].touch_device_check = {
priority:5,
init:function() {
return _i_("3da:544"), booking.env.touch_os = "ontouchstart" in document.documentElement ? !0 :!1, /(chrome)[ \/]([\w.]+)/.exec(navigator.userAgent.toLowerCase()) && (booking.env.touch_os = !1), _r_(!0);
}
}, booking[sNSStartup].userAccessFormValidation = {
init:function() {
_i_("3da:545"), booking.userAccessFormHandler.init(), _r_();
}
}, B.define("user-access-menu/api", function(e, t, i) {
_i_("3da:215");
var n = e("promise"), r = function(e, t) {
return _i_("3da:983"), e = Math.ceil(e), t = Math.floor(t), _r_(Math.floor(Math.random() * (t - e + 1)) + e);
}, a = {
id:null,
meta:{},
target:null,
success:function() {},
fail:function() {}
};
function o(e, t) {
_i_("3da:546");
var i = $("input[name=rid]", e)[0];
i ? $(i).val(t.id) :e.prepend('<input type="hidden" name="rid" value="' + t.id + '">'), e.trigger("submit"), $(i).val(""), _r_();
}
i.exports = {
_pendingRequests:{},
_call:function(e) {
_i_("3da:1527");
var t = $(e.target);
t.is("form") && o(t, e), _r_();
},
_getRequestById:function(e) {
return _i_("3da:1528"), _r_(Object.assign({}, a, this._pendingRequests[e]));
},
_removeRequestById:function(e) {
_i_("3da:1529"), this._pendingRequests[e] = null, delete this._pendingRequests[e], _r_();
},
_registerRequest:function(e) {
_i_("3da:1530"), e.id && (this._pendingRequests[e.id] = Object.assign({}, e)), _r_();
},
requestFailed:function(e, t) {
_i_("3da:1531");
var i = this._getRequestById(e);
this._removeRequestById(i.id), i.fail(t), _r_();
},
requestSucceed:function(e, t) {
_i_("3da:1532");
var i = this._getRequestById(e);
this._removeRequestById(i.id), i.success(t), _r_();
},
send:function(e) {
_i_("3da:1533");
var t = this;
return _r_(new n(function(i, n) {
_i_("3da:2439");
var o = Object.assign({}, a, e, {
id:r(1, 1e6),
success:i,
fail:n
});
t._registerRequest(o), t._call(o), _r_();
}));
}
}, _r_();
}), booking.userAccessFormHandler = function(e) {
_i_("3da:312");
var t = B.require("jquery"), i = {
$userAccessMenu:{},
$parentForm:{},
$parentFormWrapper:{},
submitHooks:{},
globalSubmitHooks:{},
api:B.require("user-access-menu/api"),
_init:function(e) {
_i_("3da:1856");
var i = this;
this.$userAccessMenu = t(".user_access_menu"), e && (this.$userAccessMenu = t(e)), this.$userAccessMenu.delegate(".user_access_section_trigger", "click", function(e) {
_i_("3da:2599");
var n = t(this), r = n.parents(".user_access_menu"), a = this.getAttribute("data-target");
return t(".form-section", r).addClass("form-hidden-section").removeClass("form-shown-section"), i.$parentForm = t("." + a, r), i.$parentForm.removeClass("form-hidden-section").addClass("form-shown-section"), t(".form-tabs", r).removeClass("user_menu_active_tab"), t("." + a + "_tab", r).addClass("user_menu_active_tab"), booking.eventEmitter && ("user_access_signup_menu" === n.data("target") && booking.eventEmitter.trigger("user_access_menu_register_tab"), "user_access_signin_menu" === n.data("target") && booking.eventEmitter.trigger("user_access_menu_login_tab")), _r_(!1);
}), t(".user_access_menu_auth_low_not_me").click(function(e) {
_i_("3da:2600");
var i, n, r = t(e.target).attr("href");
r && (i = '<form method="POST" action="' + r + '" ><input type="hidden" name="logout" value="1" /></form>', n = t(i), n.prepend('<input type="hidden" name="bhc_csrf_token" value="' + booking.env.b_csrf_token + '">'), e.preventDefault(), t("body").append(n), n.submit()), _r_();
}), this.$userAccessMenu.on("click", "[data-dismiss]", function() {
_i_("3da:2601"), r(i.$userAccessMenu), _r_();
}), t("body").delegate(".user_access_form", "submit", function(e, n) {
if (_i_("3da:2602"), B.et.customGoal("MKMBNLOLOLOXXAUKdJaDcOdWOMcET", 1), i.$parentForm = t(this), i.$parentFormWrapper = t(this).parents(".form-section"), !i._validateForm(n)) return _r_(!1);
if (i.userNameIsPhone && (i.fe_enable_login_with_phone_number && i.$parentForm.hasClass("js-user-access-form--reminder") || i.fe_enable_signup_with_phone_number && i.$parentForm.hasClass("js-user-access-form--signup"))) t(".js-suppress_refresh").val(1), t(".js-no_login_after_signup").val(1), t(".js-no_redirect").val(1), t(".js-username_is_phone").val(1), booking.phoneNumberLogin.setPassword(t("input[name=password]", i.$parentFormWrapper).val()); else if (i.userNameIsPhone || (t(".js-suppress_refresh").val(0), t(".js-no_login_after_signup").val(0), t(".js-username_is_phone").val(0)), t(".form-loading", i.$parentFormWrapper).show(), t(this).trigger("submit_pb_mybooking_cant_find"), t(this).hasClass("form-secondary-login") && "msie" === B.env.b_browser && B.env.b_browser_version < 9) {
var r = "&" + t(this).serialize(), a = t(this).attr("action"), o = a + r;
location.href = o;
} else booking.eventEmitter.trigger("user-acess-menu:valid-submit-start", i);
_r_();
}), t("#login_redesign").click(function() {
_i_("3da:2603"), t(".bs2_inline_signin_box").toggle(), B.eventEmitter.trigger("user-access-menu:toggle"), _r_();
}), this._initPassStrength(), "https:" === location.protocol && booking.env.b_is_app && t(".user_access_form").each(function() {
_i_("3da:2783");
var e = t(this), i = e.attr("action");
-1 !== i.indexOf("protocol=http") && -1 === i.indexOf("protocol=https") ? (i = i.replace("protocol=http", "protocol=https_www"), e.attr("action", i)) :-1 !== i.indexOf("protocol=https") && (i = i.replace("protocol=https", "protocol=https_www"), e.attr("action", i)), _r_();
}), _r_();
},
_initPassStrength:function(e) {
_i_("3da:1857");
var i, n, r = this;
e || (e = ".password_strength"), n = t(t(e).attr("data-wrapper")), n = n.length ? n :this.$userAccessMenu, n.delegate(e, "keyup", function() {
_i_("3da:2604");
var e = t(this), n = e.val();
i && clearTimeout(i), i = setTimeout(function() {
_i_("3da:2928"), r._calculatePasswordStrength(e, n), booking.eventEmitter && B.eventEmitter.trigger("passStrength"), _r_();
}, 400), _r_();
}), _r_();
},
_validations:{
email:function(e) {
_i_("3da:2219");
var t = e.indexOf("@"), i = e.lastIndexOf(".");
return _r_(t > 0 && i > t);
},
emailOrPhone:function(e) {
_i_("3da:2220");
var t = this.email(e), i = this.phone(e);
return _r_(t || i);
},
phone:function(e) {
_i_("3da:2221");
var t = e.match(/\d/g);
if (t && t.length && t.length > 9 && t.length < 16 && e.indexOf("@") > -1) return _r_(!1);
return _r_(t && t.length && t.length > 9 && t.length < 16);
}
},
fe_enable_login_with_phone_number:B.env.fe_enable_login_with_phone_number,
fe_enable_signup_with_phone_number:B.env.fe_enable_signup_with_phone_number,
fe_run_email_validation:0 === parseInt(B.env.auth_level, 10),
_validateForm:function(i) {
if (_i_("3da:1858"), !this.$parentForm.length) return _r_(1);
var n = !0, r = e.error_sign_up_password_email_combo_01, a = this;
return t("input", this.$parentForm).each(function() {
_i_("3da:2605");
var e, i, o, _, s = t(this), l = s.attr("data-validation"), d = s.val();
if (l) {
l = l.split("|");
for (var c = 0, u = l.length; u > c && n; c++) e = l[c].split(/\{/), i = e[0], "required" !== i || d ? "numeric_with_dots" === i || "numeric" === i ? ("numeric_with_dots" === i && (d = d.replace(/\./g, ""), s.val(d)), /^\d+$/g.test(d) || (n = !1)) :/min_length\([0-9]+\)/.test(i) ? (o = i.split("(")[1], o = o.slice(0, -1), d.length < o && (n = !1)) :/required_match\([a-zA-Z_]+\)/.test(i) && (_ = i.split("(")[1], _ = _.slice(0, -1), t(this).val() !== t("#" + _).val() && (n = !1)) :n = !1, a.fe_enable_login_with_phone_number && "email-or-phone" === i && (n = a._validations.emailOrPhone(d), a.userNameIsPhone = a._validations.phone(d), a.userNameIsPhone && booking.phoneNumberLogin.setPhone(d)), a.fe_run_email_validation && "email" === i && (n = a._validations.email(d)), e[1] && (r = e[1].slice(0, -1));
if (!n) return _r_(!1);
}
_r_();
}), n ? _r_(!0) :(this.$parentForm.length && (this.$parentForm.hasClass("js-user-access-form--signin") || this.$parentForm.hasClass("js-user-access-form--signup")) && B.et.track("OTfdASFMRcUJRIBWVUZDaORe") && (r = '<span class="alert-error-icon" aria-hidden="true">&#45339;</span> ' + r), t(".alert-error", this.$parentFormWrapper).html(r).show(), booking.eventEmitter.trigger("form-error", this.$parentFormWrapper), i && this.api.requestFailed(i), _r_(!1));
},
_calculatePasswordStrength:function(i, n) {
if (_i_("3da:1859"), "undefined" == typeof n || "undefined" == typeof n.length) return _r_();
for (var r, a, o = n.length, _ = parseInt(o / 2.5, 10), s = "!@#$%^&*(){}[];:'\"\\|,.<>/?+=-_", l = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", d = 0, c = !1, u = 0, h = 0, f = i.attr("data-wrapper") ? i.parents(i.attr("data-wrapper")) :i.parents(".user_access_form"), p = t(".user_access_password_strength", f).find(".pass_strength_step").width(), g = t(".user_access_password_strength", f).find(".pass_strength_progress"), m = 0; o > m; m++) isNaN(n.charAt(m)) ? c = !0 :d += 1, s.indexOf(n.charAt(m)) > -1 && (u += 2), l.indexOf(n.charAt(m)) > -1 && (h += 1);
u > 4 && (u = 4), d > 2 && (d = 2), h > 2 && (h = 2), c && (_ += d), _ += u, _ += h, _ > 10 ? _ = 10 :0 === _ && (_ = 1), 8 > o ? (g.addClass("pass_strength_invalid"), _ > 3 && (_ = 3), a = 0) :(g.removeClass("pass_strength_invalid"), a = parseInt(_ / 2, 10) + 1), a = a > 5 ? 5 :a, r = p * _, g.animate({
width:r + "px"
}), e.b_password_strength_msg && t(".pass_strength_text", f).text(e.b_password_strength_msg[a]), _r_();
},
_displayErrorMsg:function(e) {
if (_i_("3da:1860"), !e || !e.msg) return _r_();
var n, r, a;
if (e.parent && (r = t(e.parent)), n = e.target ? t(e.target, r) :t(".alert-error", r), i.$parentForm.length && (i.$parentForm.hasClass("js-user-access-form--signin") || i.$parentForm.hasClass("js-user-access-form--signup")) && B.et.track("OTfdASFMRcUJRIBWVUZDaORe")) {
var o = '<span class="alert-error-icon" aria-hidden="true">&#45339;</span> ' + e.msg;
n.html(o).addClass("alert-displayed");
} else n.html(e.msg).addClass("alert-displayed");
t(".form-loading, #page_login_loading").hide(), booking.env.is_genius_onboarding && (a = t("#slide1").height(), t("#slides").animate({
height:a
})), _r_();
},
_resetErrors:function(e) {
if (_i_("3da:1861"), !e || !e.msg) return _r_();
var i, n;
e.parent && (n = t(e.parent)), i = e.target ? t(e.target, n) :t(".alert-error", n), i.removeClass("alert-displayed"), _r_();
},
_addSubmitHook:function(e, t, i) {
_i_("3da:1862");
var n = i ? this.globalSubmitHooks :this.submitHooks;
if (!t || !e) return _r_();
n[e] = t, _r_();
},
_removeSubmitHook:function(e, t) {
_i_("3da:1863");
var n = t ? this.globalSubmitHooks :this.submitHooks;
if (!i) return _r_();
delete n[e], _r_();
},
_promtUserForPhoneVerification:function() {
_i_("3da:1864"), booking.authNextStepSMS && booking.authNextStepSMS.promtUserForPhoneVerification(this.$userAccessMenu, "verify"), _r_();
},
_promptForNextAuthStep:function(e) {
_i_("3da:1865");
var t = e && e.step, n = function(e) {
_i_("3da:2701");
var t = {
sms:i._promtUserForPhoneVerification.bind(i)
};
return _r_(t[e] || function() {});
}(t);
n(), _r_();
}
};
function n(e) {
_i_("3da:675"), t(".form-section", e).addClass("form-hidden-section").removeClass("form-shown-section"), _r_();
}
function r(e) {
_i_("3da:676"), n(e), t(".user_access_signin_menu").removeClass("form-hidden-section").addClass("form-shown-section"), _r_();
}
return _r_({
init:function() {
_i_("3da:1534"), i._init(), _r_();
},
api:i.api,
initPassStrength:function(e) {
_i_("3da:1535"), i._initPassStrength(e), _r_();
},
displayErrorMsg:i._displayErrorMsg,
resetErrors:i._resetErrors,
promptForNextAuthStep:i._promptForNextAuthStep
});
}(booking.env), booking[sNSStartup].user_menu_dropdowns = function() {
_i_("3da:313");
var e = !1, t = !1, i = $("#current_language_foldout"), n = function(e) {
_i_("3da:1145"), $(e).each(function() {
_i_("3da:2222");
var e = $(this).attr("data-lang"), t = booking.env.b_switch_language_url[e];
$(this).find("a").attr("href", t), _r_();
}), _r_();
}, r = function(e) {
_i_("3da:1146"), $(e).each(function() {
_i_("3da:2223");
var e = booking.env.b_this_url;
("genius" === booking.env.b_action || "guest" === booking.env.b_action) && (e = booking.env.b_this_url_without_lang);
var t = $(this).attr("data-currency"), i = e.indexOf("?") > -1 ? ";" :"?";
t += ";changed_currency=1";
var n = $(this).closest(".select_foldout_wrap").is(".select_foldout_wrap_top");
n && (t += ";top_currency=1"), $(this).attr("href", e + i + "selected_currency=" + t), _r_();
}), _r_();
}, a = function(e) {
_i_("3da:1147");
var t = "loading_option";
e.delegate("a", "click", function(i) {
_i_("3da:2224");
var n = $(this).parent();
if (n.hasClass("selected_language") || n.hasClass("selected_currency")) return i.preventDefault(), _r_();
if (n.hasClass(t) ? i.preventDefault() :e.find("." + t).removeClass(t), n.addClass(t), B.env.b_run_sr_ajax) {
var r = B.require("searchresults/events");
r.trigger(r.UI_NAVIGATE_TO, {
url:$(this).attr("href"),
fixUrl:!0,
reload:!0
}), i.preventDefault();
}
_r_();
}), _r_();
}, o = function() {
_i_("3da:1148"), e || $.get(booking.env.b_currency_url, function(t) {
_i_("3da:2606"), $("#current_currency").html(t), a($("#current_currency_foldout")), r($("#current_currency a")), e = !0, B.eventEmitter.trigger("b_currency_dropdown_ready"), B.events.trigger("b_currency_dropdown_ready"), _r_();
}), _r_();
}, _ = function() {
_i_("3da:1149"), t || $.get(booking.env.b_languages_url, function(e) {
_i_("3da:2607"), i.length ? i.replaceWith(e) :$("#current_language").html(e), a(i), n($("#current_language li")), t = !0, _r_();
}), _r_();
}, s = function() {
_i_("3da:1150");
var e = $("#current_language_foldout");
a(e), $(".uc_currency a.popover_trigger").click(function() {
_i_("3da:2225"), o(), _r_();
}), "zh" === B.env.b_lang && $(".zh .uc_language a.popover_trigger").click(function() {
_i_("3da:2608"), _(), _r_();
}), _r_();
};
return _r_({
init:s
});
}(), booking.jstmpl("language_menu_item", function() {
_i_("3da:314");
var e = [ ' <li class="lang_', " selected_country", '" data-lang="', '"> <a href="', '" class="no_target_blank"> <span class="selsymbol"><span class="flag_16 sflag slang-', '"> </span></span> <span class="seldescription">', '</span> <i class="loading_indicator"></i> </a> </li> ' ], t = [ "lang" ];
return _r_(function(i) {
_i_("3da:984");
var n = "", r = this.fn;
return n += [ e[0], (r.MC(t[0]) || {}).code ].join(""), r.MJ(r.MG((r.MC(t[0]) || {}).current)) && (n += e[1]), n += [ e[2], (r.MC(t[0]) || {}).code, e[3], (r.MC(t[0]) || {}).url, e[4], (r.MC(t[0]) || {}).flag, e[5], (r.MC(t[0]) || {}).name, e[6] ].join(""), _r_(n);
});
}()), booking.jstmpl("language_menu_list", function() {
_i_("3da:315");
var e = [ '\n    <div class="select_foldout_wrap">\n        <p>', "</p>\n        ", '\n            <ul class="language_flags">\n                ', ' <li class="lang_', " selected_country", '" data-lang="', '"> <a href="', '" class="no_target_blank"> <span class="selsymbol"><span class="flag_16 sflag slang-', '"> </span></span> <span class="seldescription">', '</span> <i class="loading_indicator"></i> </a> </li> ', "\n            </ul>\n        ", "\n    </div>\n" ], t = [ "title", "columns", "lang" ];
return _r_(function(i) {
_i_("3da:985");
var n = "", r = this.fn;
function a(i) {
return _i_("3da:1536"), i += [ e[3], (r.MC(t[2]) || {}).code ].join(""), r.MJ(r.MG((r.MC(t[2]) || {}).current)) && (i += e[4]), i += [ e[5], (r.MC(t[2]) || {}).code, e[6], (r.MC(t[2]) || {}).url, e[7], (r.MC(t[2]) || {}).flag, e[8], (r.MC(t[2]) || {}).name, e[9] ].join(""), _r_(i);
}
n += [ e[0], r.MB(t[0]), e[1] ].join("");
var o = r.MC(t[1]) || [];
i.unshift({
column:null
});
for (var _, s = 1, l = o.length; l >= s; s++) {
i[0].column = _ = o[s - 1], n += e[2];
var d = s, c = o, u = l, h = f, o = _ || [];
i.unshift({
lang:null
});
for (var f, s = 1, l = o.length; l >= s; s++) i[0].lang = f = o[s - 1], i.unshift({
lang:f
}), n = a(n), i.shift();
i.shift(), s = d, o = c, l = u, f = h, n += e[10];
}
return i.shift(), n += e[11], _r_(n);
});
}()), booking.jstmpl("language_menu", function() {
_i_("3da:316");
var e = [ "\n    ", "\n        ", '\n    <div class="select_foldout_wrap">\n        <p>', "</p>\n        ", '\n            <ul class="language_flags">\n                ', ' <li class="lang_', " selected_country", '" data-lang="', '"> <a href="', '" class="no_target_blank"> <span class="selsymbol"><span class="flag_16 sflag slang-', '"> </span></span> <span class="seldescription">', '</span> <i class="loading_indicator"></i> </a> </li> ', "\n            </ul>\n        ", "\n    </div>\n", "\n" ], t = [ "title", "columns", "lang", "popular_languages", "lang_dropdown_top_langs", "languages", "lang_dropdown_all_langs" ];
return _r_(function(i) {
_i_("3da:986");
var n = "", r = this.fn;
function a(n) {
_i_("3da:1537"), n += [ e[2], r.MB(t[0]), e[3] ].join("");
var a = r.MC(t[1]) || [];
i.unshift({
column:null
});
for (var o, s = 1, l = a.length; l >= s; s++) {
i[0].column = o = a[s - 1], n += e[4];
var d = s, c = a, u = l, h = f, a = o || [];
i.unshift({
lang:null
});
for (var f, s = 1, l = a.length; l >= s; s++) i[0].lang = f = a[s - 1], i.unshift({
lang:f
}), n = _(n), i.shift();
i.shift(), s = d, a = c, l = u, f = h, n += e[12];
}
return i.shift(), n += e[13], _r_(n);
}
function o(n) {
_i_("3da:1538"), n += [ e[2], r.MB(t[0]), e[3] ].join("");
var a = r.MC(t[1]) || [];
i.unshift({
column:null
});
for (var o, _ = 1, l = a.length; l >= _; _++) {
i[0].column = o = a[_ - 1], n += e[4];
var d = _, c = a, u = l, h = f, a = o || [];
i.unshift({
lang:null
});
for (var f, _ = 1, l = a.length; l >= _; _++) i[0].lang = f = a[_ - 1], i.unshift({
lang:f
}), n = s(n), i.shift();
i.shift(), _ = d, a = c, l = u, f = h, n += e[12];
}
return i.shift(), n += e[13], _r_(n);
}
function _(i) {
return _i_("3da:1539"), i += [ e[5], (r.MC(t[2]) || {}).code ].join(""), r.MJ(r.MG((r.MC(t[2]) || {}).current)) && (i += e[6]), i += [ e[7], (r.MC(t[2]) || {}).code, e[8], (r.MC(t[2]) || {}).url, e[9], (r.MC(t[2]) || {}).flag, e[10], (r.MC(t[2]) || {}).name, e[11] ].join(""), _r_(i);
}
function s(i) {
return _i_("3da:1540"), i += [ e[5], (r.MC(t[2]) || {}).code ].join(""), r.MJ(r.MG((r.MC(t[2]) || {}).current)) && (i += e[6]), i += [ e[7], (r.MC(t[2]) || {}).code, e[8], (r.MC(t[2]) || {}).url, e[9], (r.MC(t[2]) || {}).flag, e[10], (r.MC(t[2]) || {}).name, e[11] ].join(""), _r_(i);
}
return n += e[0], r.MD(t[3]) && (n += e[1], i.unshift({
columns:r.MB(t[3]),
title:r.MB(t[4])
}), n = a(n), i.shift(), n += e[0]), n += e[0], i.unshift({
columns:r.MB(t[5]),
title:r.MB(t[6])
}), n = o(n), i.shift(), n += e[14], _r_(n);
});
}()), booking[sNSStartupLoad].user_wishlists = {
init:function() {
_i_("3da:547"), $(".wl_dates_trigger").click(function() {
_i_("3da:1541"), booking[sNSStartup].lightbox.show($("#wl_dates_modal"), {
customWrapperClassName:"wl_dates_modal_wrapper",
bOverflowVisible:!0,
hideCallBack:function() {
_i_("3da:2702"), $(".alert-error").hide(), _r_();
}
}), _r_();
}), _r_();
}
}, booking[sNSStartup].viewed_hotels = {
priority:9,
fullListShowed:!1,
minListSize:5,
lastviewTimer:null,
loadStart:null,
init:function() {
_i_("3da:548"), this.loadStart = new Date();
var e = this;
if (document.getElementById("LastViewedHotels")) {
try {
this.minListSize = parseInt($("#LastViewedHotels").attr("min"), 10);
} catch (t) {}
$("a.remove_hotel").click(function() {
_i_("3da:2058");
var e = $(this).attr("href").substring(1);
return $.ajax({
url:"/hotel_history",
type:"DELETE",
data:{
hotel_id:e
}
}), booking[sNSStartup].viewed_hotels.cleanupHistoryList(this), this.blur(), _r_(!1);
}), $("#showAllHistory").length && $("#showAllHistory").click(function(e) {
return _i_("3da:2440"), booking[sNSStartup].viewed_hotels.showAll(e.target), this.blur(), _r_(!1);
}), $("#removeAllHistory").length && $("#removeAllHistory").click(function() {
return _i_("3da:2441"), booking[sNSStartup].viewed_hotels.removeAll(!0), this.blur(), _r_(!1);
});
}
return $(".lastVisitdate").length && ($(".lastVisitdate").parents("li").mouseenter(function() {
_i_("3da:2059");
var t = $(".lastVisitdate", this);
$(t).slideDown("fast"), $(this).addClass("selectedVisit"), e.updateTime(t), e.lastviewTimer = window.setInterval(function() {
_i_("3da:2784"), e.updateTime(t), _r_();
}, 1e3), _r_();
}), $(".lastVisitdate").parents("li").mouseleave(function() {
_i_("3da:2060"), window.clearInterval(e.lastviewTimer), $(".lastVisitdate", this).slideUp("fast"), $(this).removeClass("selectedVisit"), _r_();
})), _r_(!0);
},
updateTime:function(e) {
_i_("3da:549");
var t = this.loadStart, i = new Date();
void 0 == $(e).attr("sh") && ($(e).attr("sd", $(".viewed_d", e).text()), $(e).attr("sh", $(".viewed_h", e).text()), $(e).attr("sm", $(".viewed_m", e).text()), $(e).attr("ss", $(".viewed_s", e).text()), "" == $(e).attr("sd") && $(e).attr("sd", "0"), "" == $(e).attr("sh") && $(e).attr("sh", "0"), "" == $(e).attr("sm") && $(e).attr("sm", "0"), "" == $(e).attr("ss") && $(e).attr("ss", "0"));
var n = 0, r = 0, a = 0, o = 0, _ = i.getSeconds() - t.getSeconds();
0 > _ && (_ = 60 - t.getSeconds() + i.getSeconds(), n = 1);
var s = i.getMinutes() - t.getMinutes() - n;
0 > s && (s = 60 - t.getMinutes() + i.getMinutes() - n, r = 1);
var l = i.getHours() - t.getHours() - r;
0 > l && (l = 24 - t.getHours() + i.getHours() - r, a = 1), l > 24 && (l -= 24, o = 1 - a);
var d = parseInt($(e).attr("sh"), 10) + l, c = parseInt($(e).attr("sm"), 10) + s, u = parseInt($(e).attr("ss"), 10) + _;
u > 59 && (u -= 60, c += 1), c > 59 && (c -= 60, d += 1), d > 23 && (d -= 24, o += 1), 0 == u ? ($(".viewed_s", e).text(""), $(".viewed_seconds", e).removeClass("show"), $(".viewed_second", e).removeClass("show")) :($(".viewed_s", e).text(u), 1 == u ? ($(".viewed_seconds", e).removeClass("show"), $(".viewed_second", e).addClass("show")) :($(".viewed_seconds", e).addClass("show"), $(".viewed_second", e).removeClass("show"))), 0 == c ? ($(".viewed_m", e).text(""), $(".viewed_minutes", e).removeClass("show"), $(".viewed_minute", e).removeClass("show")) :($(".viewed_m", e).text(c), 1 == c ? ($(".viewed_minutes", e).removeClass("show"), $(".viewed_minute", e).addClass("show")) :($(".viewed_minutes", e).addClass("show"), $(".viewed_minute", e).removeClass("show"))), 0 == d ? ($(".viewed_h", e).text(""), $(".viewed_hours", e).removeClass("show"), $(".viewed_hour", e).removeClass("show")) :($(".viewed_h", e).text(d), 1 == d ? ($(".viewed_hours", e).removeClass("show"), $(".viewed_hour", e).addClass("show")) :($(".viewed_hours", e).addClass("show"), $(".viewed_hour", e).removeClass("show"))), 0 == o ? ($(".viewed_d", e).text(""), $(".viewed_days", e).removeClass("show"), $(".viewed_day", e).removeClass("show")) :($(".viewed_d", e).text(o), 1 == o ? ($(".viewed_days", e).removeClass("show"), $(".viewed_day", e).addClass("show")) :($(".viewed_days", e).addClass("show"), $(".viewed_day", e).removeClass("show"))), _r_();
},
cleanupHistoryList:function(e) {
_i_("3da:550");
var t = this, i = this.minListSize;
$(e).parent().fadeOut(500, function() {
_i_("3da:1542"), $(e).parents("li").remove();
var n = $("#LastViewedHotels"), r = n.find("ul.lastViewedList li"), a = n.find("#viewed_hotels_header");
if (r.length || booking[sNSStartup].viewed_hotels.removeAll(!1), r.length < 2 && $("#share_hotel_history").css("borderTop", "none"), r.length >= i) {
var o = r.get(i - 1);
$(o).fadeIn(1e3);
}
document.getElementById("showAllHistory") && r.length <= i && $("#moreHistoryLinkWrapper").hide(), n.hasClass("viewed_hotels_copy") && (r.length < 5 ? (n.removeClass("viewed_hotels_copy"), a.find(".base_header").show(), a.find(".variant_header").remove()) :5 == r.length && (a.find(".base_header").hide(), a.find(".variant_header").show())), booking.eventEmitter.trigger("viewed_hotels:update", {
items:r
}), t.callBack(), _r_();
}), _r_();
},
showAll:function(e) {
_i_("3da:551");
var t, i = this, n = $("#LastViewedHotels ul.lastViewedList li"), r = this.minListSize, a = $("#viewed_hotels_header");
if (booking[sNSStartup].viewed_hotels.fullListShowed) {
for (t = r; t < n.length; t++) $(n[t]).fadeOut(500, function() {
_i_("3da:2442"), i.callBack(), _r_();
});
booking[sNSStartup].viewed_hotels.fullListShowed = !1, e.className.indexOf("viewed_hotels_copy") > -1 && (a.find(".base_header").hide(), a.find(".variant_header").show());
} else {
for (t = r - 1; t < n.length; t++) $(n[t]).fadeIn(500), i.callBack();
booking[sNSStartup].viewed_hotels.fullListShowed = !0, e.className.indexOf("viewed_hotels_copy") > -1 && (a.find(".base_header").show(), a.find(".variant_header").hide());
}
booking[sNSStartup].viewed_hotels.switchCaption(), _r_();
},
removeAll:function(e) {
_i_("3da:552"), e && $.ajax({
url:"/hotel_history",
type:"DELETE",
data:{
hotel_id:-1
}
}), $("#LastViewedHotels").fadeOut(500, function() {
_i_("3da:1543"), $(this).remove(), _r_();
}), _r_();
},
switchCaption:function() {
_i_("3da:553"), booking[sNSStartup].viewed_hotels.fullListShowed ? ($("#showAllHistory .showLink").hide(), $("#showAllHistory .hideLink").show()) :($("#showAllHistory .showLink").show(), $("#showAllHistory .hideLink").hide()), _r_();
},
callBack:function() {}
}, B.define("profile/profile-menu/profile-menu", function(e, t, i) {
"use strict";
_i_("3da:216");
var n = e("jquery"), r = "[data-command=show-profile-menu]", a = e("ga-tracker");
i.exports = {
_dropdown:null,
init:function() {
_i_("3da:1544");
var e = this;
n.fly.dropdown.extend({
init:function() {
_i_("3da:2856"), e._dropdown = this, this.bind(this.events.show, e.onshow.bind(e)), B.et.track("OTfdASFAWWFAPTPWOGVO") && (this.bind(this.events.hide, e.onhide.bind(e)), n("#focus-menu-item").on("blur", function() {
_i_("3da:2995"), n(this).removeClass("a11y_profile_dropdown_remove_outline"), _r_();
}));
var t = booking.jstmpl("profile_menu_extra_class");
t && "__no_op__" !== t.name ? this.options.extraClass += " " + t.render(booking.env.profile_menu) :this.options.extraClass += " g-hidden", _r_();
}
}).delegate(r, {
extraClass:"fly-dropdown--profile-menu",
position:booking.env.rtl ? "bottom left" :"bottom right",
content:function() {
_i_("3da:2703");
var e = booking.jstmpl("profile_menu");
if ("center" === this.handle().data("menu-location") && (this.options.position = "bottom center"), !e || "__no_op__" === e.name) {
var t = (this.handle() || n()).eq(0).children("a[href]"), i = t && t.attr("href") || "";
return /\/mydashboard/.test(i) && (window.location.href = i), _r_("");
}
var r;
return r = "switch-accounts" == this.handle().data("menu-mode") ? e.render(Object.assign({}, booking.env.profile_menu, {
b_menu_mode:"switch-accounts"
})) :e.render(booking.env.profile_menu), B.et.stage("MRLLScXQOVHbPOZRTeCILT", 1), _r_(n(r).loadComponents());
}
}), n(document).on("click", ".profile-menu__item--myreferrals .profile-menu__link", function() {
_i_("3da:2443"), a.trackEvent(a.referralAdvocateTracker, "click", "myreferrals item in profile menu"), _r_();
}), _r_();
},
onshow:function() {
_i_("3da:1545"), "android" === booking.env.b_browser && this.forceReflow(), n(".milk_menu").hide(), n(".b_recentlyviewed").length && n(".b_recentlyviewed").removeClass("rv-content-visible"), n(".uc_genius_tooltip").remove(), B.env.b_is_bbtool_admin && B.et.stage("VObMWKcNKWaeaFBdSOefFHe", 1), B.et.track("OTfdASFAWWFAPTPWOGVO") && this.focusElement(), _r_();
},
onhide:function() {
_i_("3da:1546"), B.et.track("OTfdASFAWWFAPTPWOGVO") && n("#focus-menu-item").focus().addClass("a11y_profile_dropdown_remove_outline"), _r_();
},
hide:function() {
_i_("3da:1547"), this._dropdown && this._dropdown.hide(), _r_();
},
forceReflow:function() {
_i_("3da:1548"), setTimeout(function() {
_i_("3da:2704");
var e = this._dropdown && this._dropdown.root();
e && e.hide().show(0), _r_();
}.bind(this), 0), _r_();
},
focusElement:function() {
_i_("3da:1549"), B.et.track("OTfdASFAWWFAPTPWOGVO") && setTimeout(function() {
_i_("3da:2857"), n("#focus-dropdown-menu").focus(), _r_();
}.bind(this), 30), _r_();
}
}, _r_();
}), function() {
_i_("3da:217"), B[sNSStartup]["profile-menu"] = {
init:function() {
_i_("3da:1550"), B.require("profile/profile-menu/profile-menu").init(), _r_();
}
}, _r_();
}(), function(e) {
_i_("3da:218");
var t = e.require("jquery"), i = null, n = "show_non_age_message";
function r() {
return _i_("3da:555"), _r_(new RegExp(n + "=1").test(location.href));
}
function a() {
_i_("3da:556"), e.when({
action:"searchresults"
}).run(function(n) {
_i_("3da:1551");
function r() {
_i_("3da:2061"), i && i.hide(), _r_();
}
t('[name="group_children"]').on("change", r), e.eventEmitter.bind("CALENDAR:opened", r), _r_();
}), _r_();
}
function o() {
_i_("3da:557");
var n = 200, r = e.env.rtl ? "left" :"right", a = "searchbox_children_age_default_12_dropdown";
t(".sb-summary").length && (a += " fly-dropdown-hide-on-load"), i && i.hide(), setTimeout(function() {
if (_i_("3da:1552"), 0 === t(".b-children-ages-configurator, .sb-group__children__field").length) return _r_();
i = t.fly.dropdown.extend({
defaults:{
position:r,
content:function() {
return _i_("3da:2952"), _r_(e.jstmpl("searchbox_children_ages_default_12_tooltip").render({}));
},
extraClass:a
},
actions:{
click:function(e) {
_i_("3da:2953"), t(e.target).is("select") && this.hide(), _r_();
}
},
_autohide:function() {},
init:function() {
_i_("3da:2906"), this.bind(this.events.show, function() {
_i_("3da:2988"), t("." + a).delegate(".fly-dropdown-close", "click", function(e) {
_i_("3da:3021"), i.hide(), _r_();
}), _r_();
}), _r_();
}
}).create(".b-children-ages-configurator, .sb-group__children__field"), i.show(), _r_();
}, n), _r_();
}
e.when({
condition:r(),
events:"load",
action:"searchresults"
}).run(function(e) {
_i_("3da:987"), o(), _r_();
}), e.when({
events:"load",
action:[ "index", "hotel", "searchresults", "continent", "country", "region", "city", "district", "landmark", "airport", "reviews_region", "reviews_city", "genius", "mydashboard" ]
}).run(function(e) {
_i_("3da:988");
var i = t("#frm"), r = i.find("[name=group_children]"), a = t('<input type="hidden" name="' + n + '" value="1">');
i.on("submit", function(e) {
_i_("3da:2062");
var t = i.find("[name=" + n + "]"), o = parseInt(r.val()), _ = i.find("[name=age]").find(":selected.sb_child_ages_empty_zero").length;
o && _ ? i.append(a) :t.remove(), _r_();
}), _r_();
}), e.when({
events:"load",
action:"searchresults"
}).run(function(e) {
_i_("3da:989");
var t = e("searchresults/events");
t.on(t.DATA_ENVIRONMENT_UPDATED, function(e) {
_i_("3da:2063"), r() && (a(), o()), _r_();
}), _r_();
}), a(), _r_();
}(booking), B.when({
events:"ready",
condition:$(".pincode_expired_error").length > 0
}).run(function() {
_i_("3da:219");
var e = $(".pincode_expired_error"), t = e.data("bn"), i = "<p>" + e.data("msg") + "</p>";
function n() {
_i_("3da:558"), e.html(i).closest(".js-pincode-ondemand-error").css({
backgroundColor:"#CEE5C3",
color:"#2C5520",
fontWeight:"bold"
}), _r_();
}
function r() {
_i_("3da:559");
var e = $(i);
e.hide(), $("body").append(e), B.require("lightbox").show(e, {
customWrapperClassName:"user-access-menu-lightbox user-access-menu-lightbox--user-center pincode_expired_error__resend_lightbox",
hideCallback:function() {
_i_("3da:2064"), e.remove(), _r_();
}
}), _r_();
}
e.find(".pincode_expired_error__resend_email_link").on("click", function(e) {
_i_("3da:990"), e.preventDefault(), $.ajax({
url:"/resend_confirmation_email",
type:"POST",
data:{
bn:t,
bhc_csrf_token:B.env.b_csrf_token
},
success:function() {
_i_("3da:2444"), "mdot" === B.env.b_site_type ? n() :r(), _r_();
}
}), _r_();
}), _r_();
}), B[sNSStartup].calendar2 = function(e, t, i, n, r) {
"use strict";
_i_("3da:317");
var a = i.require("hijri-calendar"), o = !1;
function _() {
_i_("3da:677"), i.search.dates("checkin") || r("#homein").find(".calendarLink").trigger("show"), _r_();
}
function s(e, t) {
_i_("3da:678");
var n = t.search || i.search, a = n.dates("checkin"), o = n.dates("checkout"), _ = n.dates(t.type), s = a && o && "valid" === a.type && "valid" === o.type;
r.fn.calendar2("each", function(e) {
if (_i_("3da:1866"), t.search && t.search !== e.search) return _r_();
e.type() === t.type && ("month" === _.type ? e.trigger("monthSelected", {
type:t.type,
value:_
}) :"valid" === _.type && e.trigger("dateSelected", {
type:t.type,
value:_
})), !s || "checkin" !== e.type() && "checkout" !== e.type() || (e.trigger("rangeSelected", {
type:t.type,
startValue:a,
endValue:o
}), k(e, a, o, o.valueOf() - a.valueOf())), _r_();
}), _r_();
}
function l(e, t) {
_i_("3da:679"), r.fn.calendar2("each", function(e) {
_i_("3da:1867"), e.adjustHeight(!0), t.id !== e.id() && e.trigger("hide"), ("calendar_6" == t.id || "calendar_7" == t.id) && (a.disable(), r(".hijri-toggle-2").removeClass("active")), _r_();
}), _r_();
}
function d() {
_i_("3da:680"), r.fn.calendar2("hide"), _r_();
}
function c() {
_i_("3da:681");
var e = new Date();
return _r_(e);
}
function u() {
_i_("3da:682");
var e = f();
return e.setDate(e.getDate() - 1), _r_(e);
}
function h() {
_i_("3da:683");
var e = i.calendar2.today();
return e.setDate(e.getDate() + 1), _r_(e);
}
function f() {
_i_("3da:684");
var e = i.calendar2.today();
return i.env.b_search_max_months ? (e.setMonth(e.getMonth() + i.env.b_search_max_months), e.setDate(0)) :e = new Date(e.getFullYear() + 1, e.getMonth() + 1, 0), _r_(e);
}
function p(e, t, n) {
_i_("3da:685");
var r = this.search || i.search;
if (!e && !t) return _r_();
var a, o, _ = e.type();
r.dates(_, {
year:t.getYear(),
month:t.getMonth(),
date:t.getDate()
}), a = r.dates("checkin"), o = r.dates("checkout"), "valid" === a.type && ("invalid" === o.type ? r.dates("checkout", r.dates("checkin").addDays(1)) :a > o && r.dates("checkout", r.dates("checkin").addDays(1))), "valid" === o.type && "invalid" === a.type && r.dates("checkin", r.dates("checkout").addDays(-1)), e && e.$element && e.$element.parents(".b-searchbox").length > 0 && ("checkin" === _ ? i.Search.tracker.trackEvent(i.Search.TrackingEvents.CHECKIN_DATEPICKER) :"checkout" === _ && i.Search.tracker.trackEvent(i.Search.TrackingEvents.CHECKOUT_DATEPICKER)), "checkin" === _ && e && e.$element && "searchresults" == i.env.b_action && i.et.track("AEJPCcYTPaCQbZBTEYDOUEaDZIET") && e.$element.closest(".sb-searchbox__outer").find(".c2-wrapper-s-checkout").trigger("show"), e.$input.focus(), _r_();
}
function g(e, t) {
_i_("3da:686"), 13 !== t.which || e.shown() || (r("#frm").submit(), t.preventDefault()), _r_();
}
function m(e) {
_i_("3da:687");
var t, n, o = e.search || i.search, _ = o.dates("checkout"), s = o.dates("checkin"), l = s && _ && "valid" === s.type && "valid" === _.type, d = e.type();
"checkin" === d ? "valid" === s.type ? (t = "dateSelected", n = s) :"month" === s.type && (t = "monthSelected", n = s) :"checkout" === d && ("valid" === _.type ? (t = "dateSelected", n = _) :"month" === _.type && (t = "monthSelected", n = _)), t && n && e.trigger(t, {
type:d,
value:n
}), l && e.trigger("rangeSelected", {
startValue:s,
endValue:_
}), k(e, s, _, _.valueOf() - s.valueOf()), a.available() && (r(".c2-wrapper-s-" + d + " .c2-calendar-header").contents().filter(function() {
return _i_("3da:2609"), _r_(3 === this.nodeType);
}).replaceWith(B(d)), a.enabled() && e.addState("hijri-enabled"), e.$calendarElement.delegate(".c2-calendar-header_hijri-toggle", "click", function(t) {
_i_("3da:2226"), t.preventDefault(), a.enabled() ? a.disable() :a.enable(), e.adjustHeight(!0), _r_();
})), _r_();
}
function v(e, t) {
_i_("3da:688");
var n = "";
if (i.env.b_year_months[e + "-" + (t + 1)] && (n = i.env.b_year_months[e + "-" + (t + 1)].name), a.available()) {
var r = a.convert({
year:e,
month:t,
day:1
}), o = a.convert({
year:e,
month:t,
day:i.calendar2.DAYS_IN_MONTH[t]
});
n += i.jstmpl("hijri_month").render({
monthTitleAddition:b(r, o)
});
}
return _r_(n);
}
function b(e, t) {
return _i_("3da:689"), _r_(e.year && t.year && e.year !== t.year ? i.jstmpl.translations("ar_islamic_calendar_two_years", null, {
first_hijri_month:i.jstmpl.translations(e.hijri_month_tag),
second_hijri_month:i.jstmpl.translations(t.hijri_month_tag),
first_year:e.hijri_year,
second_year:t.hijri_year
}) :e.hijri_month_tag && t.hijri_month_tag && e.hijri_month_tag !== t.hijri_month_tag ? i.jstmpl.translations("ar_islamic_calendar_two_months", null, {
first_hijri_month:i.jstmpl.translations(e.hijri_month_tag),
second_hijri_month:i.jstmpl.translations(t.hijri_month_tag),
year:e.hijri_year
}) :i.jstmpl.translations("ar_islamic_calendar_no_month_change", null, {
hijri_month:i.jstmpl.translations(e.hijri_month_tag),
year:e.hijri_year
}));
}
var y = "hover";
function w(t, n) {
_i_("3da:690");
var r, a, o, _, s, l = this.search || i.search;
if (n && n.hasState("disabled")) return _r_();
if (e.clearTimeout(t.rangeHighlightTimeout), "checkin" === t.type() ? (r = n.id(), o = i.Search.createDate({
year:n.year_,
month:n.month_,
date:n.date_
}), _ = l.dates("checkout"), a = i.calendar2.dayId(_.year, _.month, _.date)) :"checkout" === t.type() && (o = l.dates("checkin"), r = i.calendar2.dayId(o.year, o.month, o.date), _ = i.Search.createDate({
year:n.year_,
month:n.month_,
date:n.date_
}), a = n.id()), o && "valid" === o.type && _ && "valid" === _.type && (s = _.valueOf() - o.valueOf(), s > 0)) {
if (t.unHighlightRange(y), t.selectedRange_) for (var d = 0, c = t.selectedRange_.length; c > d; d++) t.days[t.selectedRange_[d]].removeState("first-in-range").removeState("in-range").removeState("last-in-range");
t.highlightRange(r, a, {
name:y
}), k(t, o, _, s);
}
_r_();
}
function k(e, t, n, r) {
_i_("3da:691");
var o = "";
t && n && (o = C(t, n, r), a.available() && (o += i.jstmpl("hijri_footer_warning").render())), "" !== o && e.$element.find(".c2-calendar-footer-dynamic").html(o), _r_();
}
function C(e, t, n) {
if (_i_("3da:692"), n > 0 && e && "valid" === e.type && t && "valid" === t.type) {
var r = "short_date_with_weekday_without_year", a = "short_date_with_weekday";
return _r_(i.jstmpl("length_of_stay_detailed").render({
b_interval:n,
b_checkin_date_formatted:i.formatter.date(e.toString(), r),
b_checkout_date_formatted:i.formatter.date(t.toString(), a)
}));
}
return _r_("");
}
function S(e, t) {
_i_("3da:693");
var i;
t === y && (i = e.getSelectedDay(), i && i.removeState("selected")), _r_();
}
function x(t, n) {
_i_("3da:694");
var r = this.search || i.search;
t.rangeHighlightTimeout = e.setTimeout(function() {
_i_("3da:2065"), t.rangeHighlightTimeout && (t.unHighlightRange(y), t.selectedRange_ && t.selectedRange_.length && t.createRange_(t.selectedRange_, "selected"), k(t, r.dates("checkin"), r.dates("checkout"), r.dates("checkout").valueOf() - r.dates("checkin").valueOf())), _r_();
}, 100), _r_();
}
function B(e) {
_i_("3da:695");
var t = "";
return a.available() && (t += i.jstmpl("hijri_toggle").render({
type:e || this.type(),
hijri_visible:!1
})), _r_(t);
}
function E(e) {
_i_("3da:696"), r.fn.calendar2("each", function(e) {
_i_("3da:1868"), e.addState("hijri-enabled"), _r_();
}), _r_();
}
function M(e) {
_i_("3da:697"), r.fn.calendar2("each", function(e) {
_i_("3da:1869"), e.removeState("hijri-enabled"), _r_();
}), _r_();
}
function T() {
_i_("3da:698");
var e = n.sunday_first, t = n.b_simple_weekdays.slice(0), o = n.b_short_months;
e && t.unshift(t.pop());
var _ = i.calendar2.generalOptions = {
dayNames:t,
sundayFirst:e,
monthNames:o,
direction:n.rtl ? "rtl" :"ltr",
lazy:!0,
closeButton:!0,
onDateSelected:p,
onLazyInitiated:m,
monthTitle:v,
onKeyDown:g,
onRangeHighlighted:S,
onDayMouseEnter:w,
onDayMouseLeave:x,
arrow:!0,
search:i.search
};
i.env.b_sb_prices && (_.pricePlaceHolder = !0);
var s = i.calendar2.checkinOptions = r.extend({}, _, {
type:"checkin",
defaultDate:i.search.dates("checkin"),
startDate:c(),
endDate:u(),
title:a.available() ? B :n.transl_checkin_title
}), l = i.calendar2.checkoutOptions = r.extend({}, _, {
type:"checkout",
defaultDate:i.search.dates("checkout"),
startDate:h(),
endDate:f(),
title:a.available() ? B :n.transl_checkout_title
});
return _r_({
checkinOptions:s,
checkoutOptions:l
});
}
function N() {
if (_i_("3da:699"), o) return _r_();
o = !0, i.eventEmitter.bind("SEARCH:destination_selected", _), i.eventEmitter.bind("SEARCH:date_changed", s), i.eventEmitter.bind("SEARCH:month_changed", s), i.eventEmitter.bind("CALENDAR:opened", l), i.eventEmitter.bind("AUTOCOMPLETE:opened", d), i.eventEmitter.bind("CALENDAR:hijri_enabled", E), i.eventEmitter.bind("CALENDAR:hijri_disabled", M), i.maps && "function" == typeof i.maps.on && i.maps.on("click-open", d), _r_();
}
function A() {
if (_i_("3da:700"), !i.env.b_calendar2) return _r_();
if (!i.calendar2 || i.env.b_is_tdot_traffic && "book" === i.env.b_action && 2 === i.env.b_book_stage) return _r_();
var e = r(".calendarLink, .b-datepicker");
if (0 === e.length) return _r_();
var t = T();
e.each(function(e, i) {
_i_("3da:1870");
var n = r(i), a = n.attr("rel") || n.data("type") || n.data("calendar2-type"), o = {};
n.unbind("click.calendar"), n.unbind("click.calendar2"), n.data("calendar2-align-right") && (o.alignToRight = 1), "checkin_year_month" === a || "checkin" === a ? n.calendar2(r.extend({}, t.checkinOptions, o)) :("checkout_year_month" === a || "checkout" === a) && n.calendar2(r.extend({}, t.checkoutOptions, o)), _r_();
}), N(), _r_();
}
function D() {}
function $(e, t) {
if (_i_("3da:702"), !i.env.b_calendar2) return _r_();
if (!i.calendar2 || i.env.b_is_tdot_traffic && "book" === i.env.b_action && 2 === i.env.b_book_stage) return _r_();
N();
var n = T();
e.calendar2(n.checkinOptions), t.calendar2(n.checkoutOptions), _r_();
}
return _r_({
init:A,
initElse:D,
initCalendars:$,
priority:8
});
}(window, document, booking, booking.env, $), function(e) {
if (_i_("3da:220"), e.getElementById("reactive_text_items")) {
var t = function() {
_i_("3da:1553");
var e = $("#reactive_text_items span").map(function() {
return _i_("3da:2785"), _r_("(" + decodeURIComponent($(this).text()) + ")");
}).get();
return _r_(new RegExp(e.join("|"), "i"));
}, i = function() {
return _i_("3da:1554"), _r_($("#reactive_text_items").children().length > 0);
};
$(function() {
_i_("3da:1555");
var e, n = t();
e = function() {
_i_("3da:2445");
var e = $(this).val();
n.test(e) || $("#reactive_text_box").is(":visible") && $("#reactive_text_box").fadeOut(), _r_();
}, $("#reactive_text_box").hide(), i() && $("#messagebox").keyup(e), _r_();
});
}
_r_();
}(document), function() {
"use strict";
_i_("3da:221");
var e, t = [ {
name:"click",
key:"click"
}, {
name:"keydown",
key:"keydown"
}, {
name:"mouseup",
key:"mouseup"
}, {
name:"mousedown",
key:"mousedown"
}, {
name:"keyup",
key:"keyup"
}, {
name:"focusin",
key:"focus"
}, {
name:"focusout",
key:"blur"
} ], i = [], n = new Date().getTime(), r = B.require("jquery"), a = parseInt(r.cookie("qr_sr_level")), o = parseInt(r.cookie("qr_sr")), _ = function(e) {
_i_("3da:991");
for (var t = []; e && e.nodeType == Node.ELEMENT_NODE; e = e.parentNode) {
var i = e.nodeName.toLowerCase(), n = "", a = e.getAttribute("id"), o = e.getAttribute("class"), _ = i;
a && (_ += a ? "#" + a :"", n = '@id="' + a + '"'), !a && o && o.length < 40 && (o = o.replace(/\s+/g, " ").replace(/\.+/g, ".").replace(/^\s+|\s+$/gm, ""), n += '@class="' + o + '"', _ += "." + o.split(" ").join("."));
var s = r(e.parentNode).children(_).index(e) + 1, l = i;
n.length > 0 && (l += "[" + n + "]"), l += "[" + s + "]", t.unshift(l);
}
return _r_(t.length ? "/" + t.join("/") :null);
}, s = B.require("promise"), l = 6, d = r("body"), c = B.require("ga-tracker"), u = function(u) {
return _i_("3da:992"), u || (u = 1), _r_(new s(function(s, h) {
_i_("3da:2066");
function f() {
_i_("3da:2446"), d.off("focus", ".a11y-skip-to-content", p);
for (var e = 0; e < i.length; e++) d.off(i[e].event, i[e].listener);
_r_();
}
function p(t) {
_i_("3da:2447");
var i = e.last();
"blur" !== i.type && 9 !== i.keyCode && m({
element:t.target,
lastEventType:"focus",
type:"SkipToMainContentFocus"
}), _r_();
}
function g() {
_i_("3da:2448");
var e = "/" == window.location.pathname ? "index" :window.location.pathname;
return _r_(B.env.b_action || e);
}
function m(e) {
_i_("3da:2449"), B.env.a11y_is_screenreader = !0, o = parseInt(r.cookie("qr_sr")) >= 1 ? parseInt(r.cookie("qr_sr")) + 1 :1, document.cookie = "qr_sr=" + o + ";path=/;domain=booking.com", "body" == e.element.nodeName.toLowerCase() || "h2" == e.element.nodeName.toLowerCase() || "h3" == e.element.nodeName.toLowerCase() ? document.cookie = "qr_sr_level=3;path=/;domain=booking.com" :o > 3 && parseInt(r.cookie("qr_sr_level")) < 2 ? document.cookie = "qr_sr_level=2;path=/;domain=booking.com" :(parseInt(r.cookie("qr_sr_level") < 2) || !r.cookie("qr_sr_level")) && (document.cookie = "qr_sr_level=1;path=/;domain=booking.com");
var t = {
qr_sr_count:o,
qr_sr_level:a
};
o >= u && (s(t), f());
var i = _(e.element), l = g(), d = l + "_" + e.type + "_" + i, h = new Date().getTime(), p = Math.ceil((h - n) / 1e3);
c.trackEvent("Accessibility", "Detection", d, p), _r_();
}
e = function() {
_i_("3da:2786");
var t = [];
function i() {
if (_i_("3da:2907"), t.length >= 4) {
if (t.length > 4 && "windowfocus" === t[t.length - 5].type) return _r_();
var e = t.slice(t.length - 4, t.length), i = e[0].element, n = e.reduce(function(e, t) {
if (_i_("3da:3014"), t.element !== i) return _r_(!1);
return _r_(e);
}, !0), r = e.map(function(e) {
return _i_("3da:3015"), _r_(e.type);
});
if (!n) return _r_();
var a = [ "focus", "mousedown", "mouseup", "click" ];
return _r_(a.join("") === r.join(""));
}
_r_();
}
function n() {
if (_i_("3da:2908"), t.length > 3) {
var i = t.length - 2;
if ("windowfocus" === t[i].type) return _r_(!1);
for (var n = [ "mouseup", "mousedown", "keyup", "keydown" ]; i > 0; ) {
var a = t[i].type;
if ("focus" === a) break;
if (-1 !== n.indexOf(a)) return _r_(!1);
i--;
}
if (r(e.last().element).parents(".user_access_form").size() > 0) return _r_(!1);
return _r_(!0);
}
_r_();
}
return _r_({
add:function(e) {
if (_i_("3da:2971"), e.event.isTrusted === !1 || !e.event.hasOwnProperty("originalEvent")) return _r_();
if (t.length > l && t.shift(), 0 === t.length && "focus" === e.type && r(e.element).is("#ss")) return _r_();
t.push(e), "focus" === e.type && n() && m({
element:e.element,
lastEventType:e.type,
type:"Focus"
}), "click" === e.type && i() && m({
element:e.element,
lastEventType:e.type,
type:"Activation"
}), _r_();
},
last:function() {
return _i_("3da:2972"), _r_(t[t.length - 1]);
},
size:function() {
return _i_("3da:2973"), _r_(t.length);
},
all:function() {
return _i_("3da:2974"), _r_(t);
}
});
}();
function v() {
_i_("3da:2450");
for (var n = 0; n < t.length; n++) !function(t, n) {
_i_("3da:2930");
var r = function(t) {
_i_("3da:2996"), e.add({
type:n,
event:t,
element:t.target,
keyCode:t.keyCode ? t.keyCode :null
}), _r_();
};
i.push({
event:t,
listener:r
}), d.on(t, r), _r_();
}(t[n].name, t[n].key);
d.on("focus", ".a11y-skip-to-content", p), r(window).on("focus", function(t) {
_i_("3da:2858"), e.add({
type:"windowfocus",
event:t,
element:window,
keyCode:null
}), _r_();
}), _r_();
}
B.when({
events:"ready",
experiment:"OTfdASFTUaIQLHKZKcDMeffdTC"
}).run(function() {
if (_i_("3da:2705"), B.env.a11y_is_screenreader = !1, r.cookie("qr_sr2") && r.cookie("qr_sr2", null), r.cookie("qr_sr") && (B.env.a11y_is_screenreader = !0, o >= u)) {
var e = {
qr_sr_count:o,
qr_sr_level:a
};
s(e), f();
}
v(), _r_();
}), _r_();
}));
};
B.define("screen-reader-detector", function(e, t, i) {
_i_("3da:993"), i.exports = {
detect:u
}, _r_();
}), _r_();
}(), function() {
"use strict";
_i_("3da:222");
var e = "OTfdASFTUaIQLHKZKcDMeffdTC";
B.when({
events:"ready",
experiment:e
}).run(function(t) {
_i_("3da:994");
var i = t("et"), n = t("screen-reader-detector");
n.detect(1).then(function(t) {
_i_("3da:2067"), i.stage(e, 1), n.detect(3).then(function(t) {
_i_("3da:2706"), i.stage(e, 2), n.detect(6).then(function(t) {
_i_("3da:2931"), i.stage(e, 3), n.detect(9).then(function(t) {
_i_("3da:2997"), i.stage(e, 4), n.detect(12).then(function(t) {
_i_("3da:3022"), i.stage(e, 5), n.detect(15).then(function(t) {
_i_("3da:3027"), i.stage(e, 6), n.detect(17).then(function(t) {
_i_("3da:3028"), i.stage(e, 7), _r_();
}), _r_();
}), _r_();
}), _r_();
}), _r_();
}), _r_();
}), _r_();
}), _r_();
}), _r_();
}(), function(e) {
_i_("3da:223"), e(function() {
_i_("3da:995"), e("#wl252-modal__if").length > 0 && booking.eventEmitter.bind("account-onboarding-modal-show", function() {
_i_("3da:2451"), e.cookie("wl252-gotit", "true", {
expires:365,
path:"/",
domain:booking.env.b_domain_end
}), _r_();
}), _r_();
}), _r_();
}(window.jQuery), function(e, t) {
_i_("3da:224");
var i, n, r, a = 0;
function o() {
_i_("3da:560");
var r = e(document).scrollTop(), a = t.tools.dom.getBounds(i);
return a.top = n + r, a.bottom = n + a.height + r, _r_(a);
}
function _(_) {
if (_i_("3da:561"), i || (i = e(".notice-wrap")), !i.length) return _r_();
n || (n = parseInt(i.css("top"), 10)), i.css({
transition:"0.3s top",
"-webkit-transition":"0.3s top"
});
var s = +new Date() + _.stayTime;
s > a && (a = s);
var l = n;
(function d(_) {
_i_("3da:1871");
var s = e(".displace_growl:visible"), c = o();
l = n, s.each(function() {
_i_("3da:2610");
var e = t.tools.dom.getBounds(this), i = e.bottom;
t.tools.dom.boundsOverlap(e, c) && i >= l && (l = n + Math.max(0, i)), _r_();
});
var u = Math.max(n, l - e(document).scrollTop());
_ != u && i.css({
top:u + "px"
}), new Date() < a && (clearTimeout(r), r = setTimeout(d, 500, u)), _r_();
}).call(), _r_();
}
function s() {
if (_i_("3da:562"), !window.navigator || !navigator.platform || -1 == navigator.platform.indexOf("Mac")) return _r_();
e(".uc_genius_tooltip").addClass("displace_growl"), t.eventEmitter.bind("growl:show", function(e, t) {
_i_("3da:1556"), _(t), _r_();
}), _r_();
}
t.ensureNamespaceExists(sNSStartup), B[sNSStartup].ge_adjust_growls_to_user_notice_popups = {
priority:9,
init:s
}, _r_();
}(window.jQuery, window.booking), booking[sNSExperiments].cQPHBAEWPAfJPESaO = {
init:function() {
_i_("3da:563");
var e, t, i = B.require("jquery"), n = this;
i('li.uc-notification[data-type="extension_announce"] a').click(function(r) {
_i_("3da:1557"), r.preventDefault(), e = i("#promo-chrome-ext-container"), t = i("#promo-chrome-ext"), i(".user_center_popover").hide(), n.initLightbox(e, t), booking[sNSStartup].lightbox.show(i("#promo-chrome-ext-container"), {
customWrapperClassName:"chrome-ext-container",
bAnimation:!0,
bCloseButton:!0
}), t.find(".cta-install-now a").click(function() {
_i_("3da:2452"), r.preventDefault(), chrome.webstore.install(booking.env.b_chrome_extension_install_url, function() {
_i_("3da:2859"), booking[sNSStartup].lightbox.hide(), _r_();
}), _r_();
}), t.find(".cta-play-again a").click(function() {
_i_("3da:2453"), r.preventDefault(), n.resetAnimation(t), n.startAnimation(t), _r_();
}), _r_();
}), _r_();
},
initElse:function() {},
initLightbox:function(e, t) {
_i_("3da:565"), t.hide().removeClass("hidden").show(), _r_();
},
resetAnimation:function(e) {
_i_("3da:566"), e.find(".cel-header").hide().css({
width:"362px",
height:"72px",
left:"189px",
top:"242px"
}), e.find(".cel-badge").hide(), e.find(".step-info").hide(), e.find(".popup").hide(), e.find(".cel-input").hide(), e.find(".extension-usps li").hide(), e.find(".cta-install-now,.cta-play-again").hide(), _r_();
},
startAnimation:function(e) {
_i_("3da:567"), e.queue("promoAnim", function() {
_i_("3da:2068"), $(this).find(".cel-header").delay(100).fadeIn(1e3).delay(1e3).fadeOut(1e3), $(this).dequeue("promoAnim"), _r_();
}).delay(4500, "promoAnim"), e.queue("promoAnim", function() {
_i_("3da:2069"), $(this).find(".step-1").fadeIn(500).delay(2e3).fadeOut(500), $(this).dequeue("promoAnim"), _r_();
}).delay(3500, "promoAnim"), e.queue("promoAnim", function() {
_i_("3da:2070"), $(this).find(".popup-step-1").css("opacity", 0).css("top", 55).slideDown(250).animate({
opacity:1,
top:"+=11"
}, {
queue:!1,
duration:250
}).delay(2e3).queue(function() {
_i_("3da:2998"), $(this).removeClass("part-1").addClass("part-2").delay(500).find(".cel-input__username").css({
width:0,
display:"block"
}).animate({
width:260
}, 1500), $(this).dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("3da:2932"), $(this).removeClass("part-2").addClass("part-3").delay(500).find(".cel-input__password").css({
width:0,
display:"block"
}).animate({
width:260
}, 1500), $(this).dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("3da:2707"), $(this).fadeOut(500).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(7e3, "promoAnim"), e.queue("promoAnim", function() {
_i_("3da:2071"), e.find(".cel-badge").fadeIn(250), e.find(".popup-step-2").css("opacity", 0).css("top", 55).slideDown(250).animate({
opacity:1,
top:"+=11"
}, {
queue:!1,
duration:250
}).delay(2e3).queue(function() {
_i_("3da:2708"), e.find(".cel-badge").fadeOut(250), $(this).fadeOut(500).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(2500, "promoAnim"), e.queue("promoAnim", function() {
_i_("3da:2072"), $(this).find(".step-2").fadeIn(500).delay(2e3).fadeOut(500), $(this).dequeue("promoAnim"), _r_();
}).delay(3500, "promoAnim"), e.queue("promoAnim", function() {
_i_("3da:2073"), $(this).find(".popup-step-3").css("opacity", 0).css("top", 55).slideDown(250).animate({
opacity:1,
top:"+=11"
}, {
queue:!1,
duration:250
}).delay(2e3).queue(function() {
_i_("3da:2999"), $(this).removeClass("part-1").addClass("part-2").dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("3da:2933"), $(this).removeClass("part-2").addClass("part-3").dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("3da:2709"), $(this).fadeOut(500).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(7e3, "promoAnim"), e.queue("promoAnim", function() {
_i_("3da:2074"), $(this).find(".popup-step-4").css("opacity", 0).css("top", 55).slideDown(250).animate({
opacity:1,
top:"+=11"
}, {
queue:!1,
duration:250
}).delay(2e3).queue(function() {
_i_("3da:3000"), $(this).removeClass("part-1").addClass("part-2").dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("3da:2934"), $(this).removeClass("part-2").addClass("part-3").dequeue(), _r_();
}).delay(2e3).queue(function() {
_i_("3da:2710"), $(this).fadeOut(500).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(7e3, "promoAnim"), e.queue("promoAnim", function() {
_i_("3da:2075"), $(this).find(".step-3").fadeIn(500).delay(2e3).fadeOut(500), $(this).dequeue("promoAnim"), _r_();
}).delay(3500, "promoAnim"), e.queue("promoAnim", function() {
_i_("3da:2076"), e.find(".cel-badge").fadeIn(250), e.find(".popup-step-5").css("opacity", 0).css("top", 55).slideDown(250).animate({
opacity:1,
top:"+=11"
}, {
queue:!1,
duration:250
}).delay(3e3).queue(function() {
_i_("3da:2711"), e.find(".cel-badge").fadeOut(250), $(this).fadeOut(500).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(4e3, "promoAnim"), e.queue("promoAnim", function() {
_i_("3da:2077"), e.find(".cel-header").delay(1e3).css({
opacity:1
}).fadeIn(1e3).delay(1e3).animate({
width:181,
height:36,
top:130
}, 750), $(this).dequeue("promoAnim"), _r_();
}).delay(4e3, "promoAnim"), e.queue("promoAnim", function() {
_i_("3da:2078"), e.queue(function() {
_i_("3da:2935"), function t() {
_i_("3da:3001"), e.find("li:hidden:first").delay(1e3).fadeIn(500, t), _r_();
}(), $(this).dequeue(), _r_();
}).delay(7e3).queue(function() {
_i_("3da:2712"), e.find(".cta-install-now,.cta-play-again").fadeIn(), $(this).dequeue(), _r_();
}), $(this).dequeue("promoAnim"), _r_();
}).delay(3500, "promoAnim"), e.dequeue("promoAnim"), _r_();
},
stopAnimation:function(e) {
_i_("3da:568"), e.clearQueue("promoAnim"), e.stop("promoAnim", !0, !0), _r_();
}
}, function(e, t) {
_i_("3da:225");
function i() {
_i_("3da:569"), e.user && e.user.showGeniusForGoogle && booking.eventEmitter.bind("auth-dialog:show", function() {
_i_("3da:2079"), t(".user_center_popover").css("z-index", "999"), e[sNSStartup].lightbox.rePosition(), t(".user_access_email").focus(), _r_();
}), _r_();
}
t(document).ready(i), _r_();
}(window.booking, window.jQuery), booking[sNSExperiments].cQPbbadAHHKe = {
init:function() {
_i_("3da:570"), booking.env.priceWatch.b_price_alert_all_canceled && booking[sNSStartup].lightbox.show($(".js-price-watch-unsubscribe--all"), {
customWrapperClassName:"price-watch-unsubscribe-wrapper"
}), _r_();
}
}, B.when({
condition:$('li.uc-notification[data-type="genius_onboarding_reminder"] a').length && "www" === B.env.b_site_type
}).run(function(e) {
_i_("3da:226");
var t = e("jquery"), i = t('li.uc-notification[data-type="genius_onboarding_reminder"] a');
i.click(function(e) {
_i_("3da:996"), e.preventDefault();
var t = B.components.require("ge-lightbox");
t.open({
template:"ge_genius_about_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_user_genius_status:B.env.b_user_genius_status,
b_is_internal_ip:B.env.b_is_internal_ip
}
}), _r_();
}), _r_();
}), booking[sNSExperiments].header_2012 = function() {
_i_("3da:318");
var e = function() {
_i_("3da:1151"), $("#b_nav_profile").bind("click", function() {
_i_("3da:2227"), $(this).toggleClass("selected"), $("#b_header").hasClass("profile_slide_down") ? $("#b_header").removeClass("profile_slide_down").addClass("profile_slide_up") :$("#b_header").removeClass("profile_slide_up").addClass("profile_slide_down"), _r_();
}), $(".profile_login_switcher").bind("click", function() {
_i_("3da:2228"), $("#profile_forms").toggleClass("profile_sign-in").toggleClass("profile_sign-up"), _r_();
}), $("select", "#header_currency").bind("change", function() {
_i_("3da:2229"), $(this).parent("form").submit(), _r_();
}), $("select", "#header_language").bind("change", function() {
_i_("3da:2230"), $(this).parent("form").submit(), _r_();
}), _r_();
}, t = function() {
_i_("3da:1152"), e(), _r_();
};
return _r_({
init:t
});
}(), function(e) {
"use strict";
_i_("3da:227"), $(".profile-area__nav").delegate(".js-insiderguides-track", "click", function() {
_i_("3da:997");
var t = $(this).data("trackname");
e.google.trackEvent("Insider Guides", "Profile Nav Click", [ e.env.b_action, ":", t ].join(" ")), _r_();
}), _r_();
}(booking), booking[sNSStartup].sh_ga_event_tracking = function() {
_i_("3da:319");
function e() {
_i_("3da:703"), $(".ga-sh-tracker").click(function() {
_i_("3da:1872");
var e = $(this).data("google-track-event-category") || "Click", t = $(this).data("google-track-event-label") || "", i = $(this).data("google-track-event-action") || "", i = i.replace(/\n/g, ""), n = [];
"[" === i.substr(0, 1) && "]" === i.substr(-1) ? n = i.substr(1, i.length - 2).split(";") :i && n.push(i);
for (var r = 0; r < n.length; r++) n[r] && B.google.trackEvent(e, n[r], t);
_r_();
}), _r_();
}
return _r_({
init:e
});
}(), booking[sNSStartup].pss_bp_come_back = {
init:function() {
_i_("3da:571");
var e = B.require("user-left-client");
if (!(e.enabled && B.browserStorageHandler && B.browserStorageHandler.isLocalStorageSupported())) return _r_();
e.register(B.env.b_action || "_client_"), _r_();
}
}, B[sNSStartup].responsive_header = function(e, t) {
"use strict";
_i_("3da:320");
var i = 167;
"ar" === t.env.b_lang && (i = 295), "zh-cn" === t.env.b_lang_for_url && (i = 236), t.env.b_is_villa_site && (i = 202);
function n(t) {
_i_("3da:704"), this.$element = e(t), this.priority_ = this.$element.data("priority") || 5, _r_();
}
n.prototype.width = function() {
return _i_("3da:1153"), this.width_ || (this.width_ = this.$element.outerWidth()), _r_(this.width_);
}, n.prototype.priority = function() {
return _i_("3da:1154"), _r_(this.priority_);
}, n.prototype.hide = function() {
return _i_("3da:1155"), this.$element.hide(), _r_(this);
}, n.prototype.show = function() {
return _i_("3da:1156"), this.$element.show(), _r_(this);
};
function r(t) {
_i_("3da:705"), this.$element = e(t), this.items = e.map(this.$element.find(".user_center_option"), function(e) {
return _i_("3da:2080"), _r_(new n(e));
}), this.sortedItems = this.items.sort(function(e, t) {
return _i_("3da:2081"), _r_(e.priority() - t.priority());
}), _r_();
}
r.prototype.fitWidth = function(i) {
return _i_("3da:1157"), e.each(this.sortedItems, function(e, t) {
_i_("3da:2231"), i - t.width() > 0 ? (i -= t.width(), t.show()) :t.hide(), _r_();
}), t.events && t.events.trigger("header:fit-width"), _r_(this);
};
function a() {
_i_("3da:706");
var n = e("#top"), a = new r(n.find(".user_center_nav"));
function o() {
_i_("3da:1158"), a.fitWidth(n.width() - i), _r_();
}
e(window).bind("resize", t.tools.functions.throttle(o, 300)), o(), _r_();
}
return _r_({
init:a,
priority:9
});
}($, booking), booking[sNSExperiments].notifications = {
priority:9,
init:function() {
_i_("3da:572"), this.initializeNotifications(), _r_();
},
initElse:function() {
_i_("3da:573"), this.initializeNotifications(), _r_();
},
initializeNotifications:function() {
_i_("3da:574");
var e = $("#notificationMenu .alert");
e.css({
display:"block",
visibility:"hidden"
});
var t = $("#formwrap"), i = t.height(), n = $(".sidebar_menu_placeholder").height();
n > i && t.animate({
"min-height":n
}, {
duration:400
}), e.css({
display:"none",
visibility:"visible"
}).css("opacity", 0).slideDown(500).animate({
opacity:1
}, {
queue:!1,
duration:750
}), _r_();
}
}, B[sNSStartup].search_summary_block = {
init:function() {
_i_("3da:575");
function e(e) {
_i_("3da:998");
var t = $("#searchboxInc");
t.find(".search_summary_block").hide(), t.find(".original_search_form").removeClass("original_search_form_hidden"), e.preventDefault(), _r_();
}
$(".search_summary_toggle_button").click(e), $(".sb-summary-block-item, .sb-summary-block__submit").click(function(e) {
_i_("3da:1558"), e.preventDefault(), $(".b-searchbox").removeClass("b-searchbox_summary"), _r_();
}), _r_();
}
}, booking[sNSStartup].SecretDeals = {
priority:8,
init:function() {
_i_("3da:576");
var e = this;
if (!$("#secretdeals-bg1").length) return _r_(!1);
$(window).bind("scroll", function(t) {
_i_("3da:1559"), e.parallaxScroll(), _r_();
}), $("a.section1").click(function() {
return _i_("3da:1560"), $("html, body").animate({
scrollTop:0
}, 1e3, function() {
_i_("3da:2454"), e.parallaxScroll(), _r_();
}), _r_(!1);
}), $("a.section2").click(function() {
return _i_("3da:1561"), $("html, body").animate({
scrollTop:$("#section2").offset().top
}, 1e3, function() {
_i_("3da:2455"), e.parallaxScroll(), _r_();
}), _r_(!1);
}), $("a.section3").click(function() {
return _i_("3da:1562"), $("html, body").animate({
scrollTop:$("#section3").offset().top
}, 1e3, function() {
_i_("3da:2456"), e.parallaxScroll(), _r_();
}), _r_(!1);
}), $("a.section4").click(function() {
return _i_("3da:1563"), $("html, body").animate({
scrollTop:$("#section4").offset().top
}, 1e3, function() {
_i_("3da:2457"), e.parallaxScroll(), _r_();
}), _r_(!1);
}), $("nav#primary a").hover(function() {
_i_("3da:1564"), $(this).prev("h1").show(), _r_();
}, function() {
_i_("3da:1565"), $(this).prev("h1").hide(), _r_();
}), $(window).scroll(function() {
_i_("3da:1566");
var t = $(window).scrollTop();
900 >= t ? (e.removeActiveClass(), $("a#sd_nr1").addClass("active")) :t > 900 && 1750 > t ? (e.removeActiveClass(), $("a#sd_nr2").addClass("active")) :t > 1751 && 2500 > t ? (e.removeActiveClass(), $("a#sd_nr3").addClass("active")) :(e.removeActiveClass(), $("a#sd_nr4").addClass("active")), _r_();
}), _r_();
},
removeActiveClass:function() {
_i_("3da:577"), $(".sc_navigator a").each(function() {
_i_("3da:1567"), $(this).removeClass("active"), _r_();
}), _r_();
},
parallaxScroll:function() {
_i_("3da:578");
var e = $(window).scrollTop();
$("#secretdeals-bg1").css("top", 0 - .25 * e + "px"), $("#secretdeals-bg2").css("top", 0 - .5 * e + "px"), $("#secretdeals-bg3").css("top", 0 - .75 * e + "px"), $("#secretdeals-bg4").css("top", 0 - .3 * e + "px"), _r_();
}
}, "index" === B.env.b_action && $("#ed-wrapper").length > 0 && (booking[sNSExperiments].IZVJPVZMYCOKNIUAFCSDWLYScEUC = {
init:function() {
_i_("3da:1568");
var e = $("#ed-pagination"), t = $("#ed-prevpage"), i = $("#ed-nextpage"), n = $("#ed-cpagenum"), r = $("#ed-tpagenum"), a = $(".ed-list-wrapper.ed-cgrp"), o = $(".ed-list-wrapper"), _ = o.length;
function s() {
_i_("3da:2082");
var e = $(this);
"ed-prevpage" !== e.attr("id") || a.hasClass("ed-fgrp") ? "ed-nextpage" !== e.attr("id") || a.hasClass("ed-lgrp") || (a.removeClass("ed-cgrp").hide().next().addClass("ed-cgrp").show(), n.text(parseInt(n.text()) + 1)) :(a.removeClass("ed-cgrp").hide().prev().addClass("ed-cgrp").show(), n.text(parseInt(n.text()) - 1)), a = $(".ed-list-wrapper.ed-cgrp"), t.removeClass("ed-disclick"), i.removeClass("ed-disclick"), a.hasClass("ed-fgrp") ? t.addClass("ed-disclick") :a.hasClass("ed-lgrp") && i.addClass("ed-disclick"), _r_();
}
_ > 1 && (o.each(function(e) {
_i_("3da:2713"), $(this).hasClass("ed-cgrp") && n.text(e + 1), _r_();
}), o.eq(_ - 1).addClass("ed-lgrp"), e.show(), r.text(_), t.click(s), i.click(s)), _r_();
}
}), $(".popular_hotels-wrp").length > 0 && (booking[sNSExperiments].IZAFCSDWLCUC = {
init:function() {
_i_("3da:999"), $(".popular_hotels-wrp").delegate(".popular_hotels-content", "mouseenter", function() {
_i_("3da:2083");
var e = $(this);
e.parent(".popular_hotels-content-wrp").removeClass("zind-1").addClass("zind-10"), e.removeClass("hei-40 col-grey73").addClass("baccol-grey32a08 col-white pad-15"), _r_();
}), $(".popular_hotels-wrp").delegate(".popular_hotels-content", "mouseleave", function() {
_i_("3da:2084");
var e = $(this);
e.parent(".popular_hotels-content-wrp").removeClass("zind-10").addClass("zind-1"), e.removeClass("baccol-grey32a08 col-white pad-15").addClass("hei-40 col-grey73"), _r_();
}), _r_();
}
}), booking[sNSStartup].survey = {
priority:9,
run:function() {
_i_("3da:579");
var e = $("#survey").attr("surveyurl");
if (e && (window.b_survey_url = e, booking.env.survey_key = $("#survey").attr("surveykey"), booking.env.surveytracklink = "/outgoinglink/survey/" + booking.env.survey_key), "undefined" != typeof window.b_survey_url && window.b_survey_url) {
var t = $("#conf_survey,#survey,#conf_survey_bottom"), i = "/survey?", n = function() {
_i_("3da:2085"), "hotel" === booking.env.b_action && booking[sNSStartup].bookingSticker.update(), _r_();
}, r = function(e) {
if (_i_("3da:2086"), booking.env.showRevdSurvey2016Q1) var r = $(e.target).val(); else var r = $(this).val();
return r && (booking[sNSStartup].fix_move_book_header_and_button && (booking[sNSStartup].fix_move_book_header_and_button.surveyFixed = !1), "accept" === r || "Yes" === r || "yes" === r || "Ja, ik doe mee" === r || "Okay" === r ? window.open(window.b_survey_url, "booking_survey_window") :t.hide("normal", n), $.get(i + "decision=" + r + "&survey_key=" + booking.env.survey_key, {}, function(e) {
_i_("3da:2860"), t.hide("normal", function() {
_i_("3da:2975"), t.remove(), n(), _r_();
}), _r_();
})), _r_(!1);
};
booking.env.showRevdSurvey2016Q1 ? (booking.events.on("REVIEWS:fetched", function() {
_i_("3da:2458"), t.addClass("show"), _r_();
}), t.find("button").on("click", r)) :(t.fadeIn("normal", n), t.find("button").click(r));
}
_r_();
},
init:function() {
if (_i_("3da:580"), this.run(), B.env.b_run_sr_ajax) {
var e = this;
B.require([ "searchresults/events" ], function(t) {
_i_("3da:2087"), t.on(t.UI_RESULTS_UPDATED, function() {
_i_("3da:2714"), e.run(), _r_();
}), _r_();
});
}
_r_();
}
}, function() {
_i_("3da:228");
var e = B.require("jquery");
booking[sNSExperiments].ZeZbObSAeOESJVWKMKe = {
init:function() {
_i_("3da:1569"), e(".wl_create_form").delegate(".wl-dropdown-toggle", "click", function() {
_i_("3da:2459"), e(this).toggleClass("collapsed"), e(this).parents(".wl-btn-group-wrap").next(".wl-dropdown-menu").slideToggle("fast"), _r_();
}), e(".wl_create_form").delegate(".wl-dropdown-menu-a", "click", function(t) {
_i_("3da:2460"), t.preventDefault();
var i = e(this);
e(".wl-privacy").val(this.rel), i.parents("form:first").submit(), "" != e(".wl_nameList_input").val() && e("#wl_create_shared_or_personal_list_modal").parent().css("opacity", .5), _r_();
}), _r_();
},
initElse:function() {}
}, _r_();
}(), B.define("component/banner", function(e, t, i) {
"use strict";
_i_("3da:229");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("3da:1873"), this.addEventListeners(), _r_();
},
addEventListeners:function() {
_i_("3da:1874"), this.$el.on("click", ".js-close", this.hideEl.bind(this)), _r_();
},
hideEl:function(e) {
_i_("3da:1875"), e.preventDefault(), this.$el.fadeOut("fast"), _r_();
}
}), _r_();
}), booking[sNSStartup].user_autofocus_email_signinup = {
$ul:!1,
setFocusAndOrTrack:function() {
_i_("3da:581");
var e = this;
setTimeout(function() {
_i_("3da:1571"), e.$ul.find(".user_access_email:visible:first").select(), _r_();
}, 50), _r_();
},
setFocusSignIn:function() {
_i_("3da:582");
var e = this;
e.$ul.find(".signin_cta").add(".user_access_section_trigger").click(function() {
_i_("3da:1572"), e.setFocusAndOrTrack(), _r_();
}), _r_();
},
setFocusSignUp:function() {
_i_("3da:583");
var e = this;
e.$ul.find(".user_center_nav").find(".user_access_signup_menu_tab").click(function() {
_i_("3da:1573"), e.setFocusAndOrTrack(), _r_();
}), _r_();
},
init:function() {
_i_("3da:584"), this.$ul = $(".user_center_nav"), this.setFocusSignIn(), this.setFocusSignUp(), _r_();
}
}, function() {
_i_("3da:230");
var e = B.require("jquery");
booking[sNSExperiments].user_center_bar = {
priority:9,
init:function() {
_i_("3da:1574"), this.initializeUserCenterBar(), booking.events.emit("user_center_bar:init"), _r_();
},
initializeUserCenterBar:function() {
_i_("3da:1575");
var t = this, i = e("#user_form>ul.user_center_nav").hasClass("toggle"), n = [];
if (n = n.concat([ {
className:"uc_language",
offset:0
} ]), booking.browserStorageHandler.deletePermanentValue("wl_fv", !0), booking.env.showFavesToWishlistNotice && !booking.browserStorageHandler.getPermanentValue("wl_fv2", !0)) {
var r = e("#top .uc_wishlists"), a = r.width() / 2, o = e("#faves_to_wishlist_notice"), _ = o.width() / 2, s = _ - a, l = _ - 8;
s = -Math.round(s) + "px", l += "px", o.css("left", s), e("#faves_to_wishlist_notice .uc_top_arrow", r).css("left", l), o.show(), e(document).on("click", ".close_popover", function() {
_i_("3da:2715"), e(".popover_notice").remove(), _r_();
}), e(document).on("click", "#faves_to_wishlist_notice_link", function() {
_i_("3da:2716"), e(".popover_notice").remove(), e("#uc_wishlists_trigger").click(), _r_();
}), booking.browserStorageHandler.addPermanentValue("wl_fv2", 1, !0);
} else e(".user_imported_faves_new_badge").hide();
e(document.body).on("click", ".popover_trigger", function(r) {
_i_("3da:2461");
var a = e(this);
if (a.hasClass("js-disable-popover")) return _r_();
r && r.currentTarget && e(r.currentTarget).hasClass("profile_menu_trigger") && booking.eventEmitter && booking.eventEmitter.trigger("user_access_menu_open"), r.preventDefault();
for (var o = {}, _ = n.length - 1; _ >= 0; _--) {
var s = a.parent().hasClass(n[_].className);
if (s) {
o.offset = n[_].offset;
break;
}
}
i ? a.next(".user_center_popover").is(":visible") ? t.hideDropdowns() :(t.hideDropdowns(a.parent()), t.positionPopover(a, o)) :t.positionPopover(a, o), _r_();
}), e(document).ready(function() {
_i_("3da:2462"), i && e("body").on("click", function(i) {
_i_("3da:2936"), 0 === e(i.target).closest(".user_center_option").length && t.hideDropdowns(), _r_();
}), e("body").mousedown(function(t) {
_i_("3da:2861"), e(t.target).closest(".user_center_option").find(".user_center_popover").is(":visible") && B.et.customGoal("YdVANUYbYLAXCJGOGAPTPWOGANOJNET", 2), i || t && t.target && !e(t.target).closest(".user_center_popover").length && (e(".user_center_popover").hide(), booking.eventEmitter.trigger("uc_popover_hidden"), booking.env.showFavesToWishlistNotice && e(".popover_notice").remove(), e("li.user_center_option").removeClass("active_option")), _r_();
}), (booking.user.showUserLoginOnLoad || booking.user.showUserLoginOnLoadDSF) && e(".signin_cta").click(), _r_();
}), !booking.browserStorageHandler.getSessionValue("np_user_popover_continue_registration") && e(".uc_account .popover_trigger").length && e(".new_partnership_user_center_popover").length && (t.positionPopover(e(".uc_account .popover_trigger"), {
popover:".new_partnership_user_center_popover"
}), booking.browserStorageHandler.addSessionValue("np_user_popover_continue_registration", !0)), e(".new_partnership_user_center_popover").on("click", function(e) {
_i_("3da:2463"), e.stopPropagation(), _r_();
});
var d = !1, c = !1;
function u() {
if (_i_("3da:2088"), d || c) return _r_();
booking.eventEmitter.trigger("uc_recently_viewed_opened"), c = !0;
var t = e(this).attr("data-href"), i = e(".uc_viewedhotels .hotels_container");
e.ajax({
url:t,
type:"GET",
success:function(e) {
_i_("3da:2862"), i.html(e), d = !0, booking.eventEmitter.trigger("uc_recently_viewed_loaded"), _r_();
},
complete:function() {
_i_("3da:2863"), e(".uc_viewedhotels .ajax_loading").hide(), e(".user_search_header").hide(), e(".no_listing:visible").length ? e(".uc_viewed_hotels .popover_content").addClass("empty_list") :(e(".user_search_header").appendTo(".uc_viewedhotels .popover_footer"), e(".user_search_header").show()), c = !1, _r_();
}
}), _r_();
}
e(".uc_viewed_hotels .popover_trigger").click(u), e(document).on("click", ".socnet_mailafriend", function() {
_i_("3da:2464"), setTimeout(function() {
_i_("3da:2864"), e(".user_center_popover").hide(), booking.env.showFavesToWishlistNotice && e(".popover_notice").remove(), e("li .popover_trigger").removeClass("active_option"), _r_();
}, 200), _r_();
}), e(document).on("click", "#user_form a.remove_hotel, #user_form a.user_search_item_remove_link", function(i) {
_i_("3da:2465");
var n = e(this).attr("href").split("#")[1], r = {
hotel_id:n
};
r = t.addDefaultParams(r), e.ajax({
url:"/hotel_history",
type:"DELETE",
data:r
}), this.blur();
var a = e(this).parents(".user_search_item").get(0), o = a.parentNode;
return e(a).hide("slow", function() {
if (_i_("3da:2865"), e(".hidden_item", o).length) {
var t = e(".hidden_item", o).get(0);
e(t).removeClass("hidden_item");
}
_r_();
}), t.removeOneHome(n), e("#user_form .user_search_item:visible").length || e(this).parents("#user_form").find(".user_search_item:visible").length || (e(".uc_viewedhotels .popover_footer").hide(), e(".uc_viewed_hotels .popover_content").addClass("empty_list"), e(".user_center_popover .no_listing").show()), _r_(!1);
}), e(document).on("click", "#user_form a#removeAllHistoryHotel", function() {
return _i_("3da:2466"), t.removeAll(e(this).attr("id")), e(".user_center_popover").hide(), e(".uc_viewed_hotels .popover_content").addClass("empty_list"), e(".user_searches_content").show(), e(".user_searches_content .user_search_item").hide(), e(".user_search_footer").hide(), e("#user_form .uc_viewed_hotels .popover_footer").remove(), e(".uc_viewed_hotels .no_listing").show(), _r_(!1);
}), _r_();
},
hideDropdowns:function(t) {
_i_("3da:1576");
var i = e(".user_center_option").not(t), n = i.find(".user_center_popover:visible");
n.length > 0 && (n.hide(), booking.eventEmitter.trigger("uc_popover_hidden")), booking.env.showFavesToWishlistNotice && e(".popover_notice").remove(), e(".new_partnership_user_center_popover").remove(), i.removeClass("active_option"), _r_();
},
removeAll:function(t) {
_i_("3da:1577");
var i = this, n = e("#" + t).parents(".user_searches_content");
if ("removeAllHistoryHotel" == t) {
var r = {
hotel_id:-1
};
r = this.addDefaultParams(r), e.ajax({
url:"/hotel_history",
type:"DELETE",
data:r
}), i.removeAllHome();
} else booking[sNSStartup].search_history.removeAll(!0);
e("#" + t).blur(), e(".user_search_item", n).each(function() {
_i_("3da:2467"), e(this).hasClass("no_listing") ? e(this).show("slow") :e(this).hide("slow", function() {
_i_("3da:2937"), e(this).remove(), _r_();
}), _r_();
}), e(".user_search_header", n).hide(), e(".user_search_footer", n).hide(), _r_();
},
removeAllHome:function() {
_i_("3da:1578"), e(".user_searches_content").hide(), _r_();
},
removeOneHome:function(t) {
_i_("3da:1579"), e(".user_searches_content .remove_hotel").each(function() {
_i_("3da:2468");
var i;
e(this).attr("href") == "#" + t && (i = e(this).parents(".user_search_item"), i.remove()), _r_();
}), _r_();
},
positionPopover:function(t, i) {
_i_("3da:1580"), e("#faves_to_wishlist_notice").remove();
var n = e(t).parent();
if (!n) return _r_();
var r, a = n.width() / 2;
r = "string" == typeof i.popover ? e(i.popover, n) :e(".user_center_popover", n), "current_account" == n.attr("id") && (r.length > 1 || !r.hasClass("uc_genius_tooltip")) && (r = r.filter(":not(.uc_genius_tooltip)"), e(".uc_genius_tooltip").remove());
var o = r.width() / 2, _ = o - a, s = o - 8, l = n.offset().left - e("#bodyconstraint").offset().left, d = e("#bodyconstraint").width(), c = d - (o + a + l), u = l + a - o;
0 > c && u > 0 ? (_ -= c, s -= c) :c > 0 && 0 > u && (_ += u, s += u);
var h = i && i.offset;
if (h && (_ += h, s += h), r.css("left", -Math.round(_)), e(".user_center_popover .uc_top_arrow", n).css("left", s), e(".user_center_popover:visible").length && booking.eventEmitter.trigger("uc_popover_hidden"), e(".user_center_popover:visible", n).length) e(".user_center_popover").hide(); else {
var f = n.attr("data-id") || n.attr("id");
e(".user_center_popover").hide(), r.show(), booking.eventEmitter.trigger("uc_popover_showed", {
id:f
}), 1 == t.closest("li.user_center_option").find(".user_center_popover").length && B.et.stage("YdVANUYbYLAXCJGOGAPTPWOGANOJNET", 1);
}
e("body.user_center #formwrap #signup_password:visible").length && (e("#formwrap #signup_password").css("z-index", "99"), e("#formwrap .pwd_strength").css("z-index", "99")), e("#dashboard_search #inout").css("z-index", "99"), _r_();
},
addDefaultParams:function(t) {
return _i_("3da:1581"), _r_(e.extend(t, {
aid:B.env.b_aid,
sid:B.env.b_sid,
stype:B.env.b_site_type_id,
stid:B.env.b_stid,
label:B.env.b_label
}));
}
}, _r_();
}(), function() {
_i_("3da:231");
var e = B.require("ga-tracker"), t = B.require("jquery");
t(document.documentElement).on("click", ".js-raf-center-bar-link", function() {
_i_("3da:1000"), e.trackEvent(e.referralAdvocateTracker, "click", "center bar"), _r_();
}), _r_();
}(), booking[sNSStartup].wishlist_invite_multiple = {
init:function() {
_i_("3da:585");
var e = $(".mail_friend_box"), t = $(".wl_field_wrapper:first", e), i = $("#wishlist_modal"), n = $(".wl_field_and_remove_wrapper:first").clone(), r = function() {
return _i_("3da:1582"), _r_(n.clone());
}, a = $(".wl_share_list_toggle");
$(e).delegate(".wl_extra_email_field", "click", function() {
if (_i_("3da:1583"), 8 == $(".wl_field_wrapper", e).length) $(".wl_extra_email_field").addClass("disabled"); else {
var i = $(".wl_field_wrapper", e).length + 1;
t.clone().insertAfter($(".wl_field_wrapper:last", e)), $(".wl_field_wrapper:last .maf_input", e).addClass("input-wlRemoveBtnSpace").attr("value", "").attr("name", "to" + i).attr("id", "to" + i), $(".wl_field_wrapper:last .wl_btn_remove_email_field", e).show();
}
_r_();
}), $(e).delegate(".wl_btn_remove_email_field", "click", function() {
_i_("3da:1584"), $(this).parent().remove(), $(".wl_field_wrapper", e).length < 4 && $(".wl_extra_email_field").removeClass("disabled"), _r_();
}), $(e).delegate(".wl_add_message_field", "click", function() {
_i_("3da:1585"), $(".wl_add_message_input_field").toggle(), _r_();
}), $(".wl_email_share_trigger").click(function() {
_i_("3da:1586"), booking[sNSStartup].lightbox.show($("#wl_email_invite_modal"), {
customWrapperClassName:"wl_create_modal_wrapper"
}), _r_();
}), $(".wl_invite_share_trigger").click(function() {
_i_("3da:1587"), booking[sNSStartup].lightbox.show($("#wl_invite_modal"), {
customWrapperClassName:"wl_create_modal_wrapper"
}), _r_();
}), $(".wl_add_new_trigger").click(function() {
_i_("3da:1588"), booking[sNSStartup].lightbox.show($("#wl_create_shared_or_personal_list_modal"), {
customWrapperClassName:"wl_create_modal_wrapper"
}), _r_();
}), i.find(".toggler").click(function() {
return _i_("3da:1589"), $(this).closest("div").find(".toggable").slideDown(), $(this).remove(), _r_(!1);
}), $("#shareCheck").click(function() {
_i_("3da:1590"), $(this).is(":checked") ? $(".wl_share_list_with_others").show() :$(".wl_share_list_with_others").hide(), _r_();
}), $(a).delegate(".wl_create_extra_email_field", "click", function() {
if (_i_("3da:1591"), 4 == $(".wl_field_and_remove_wrapper", a).length) $(".wl_create_extra_email_field").addClass("disabled"); else {
var e = $(".wl_field_and_remove_wrapper", a).length + 1;
r().appendTo($(".js-wl-emails-wrapper", a)), $(".wl_field_and_remove_wrapper:last .maf_input", a).addClass("input-wlRemoveBtnSpace").attr("value", "").attr("name", "to" + e).attr("id", "to" + e), $(".wl_field_and_remove_wrapper:last .wl_btn_remove_email_field", a).show();
}
_r_();
}), $(a).delegate(".wl_btn_remove_email_field", "click", function() {
_i_("3da:1592"), $(this).parent().remove(), $(".wl_field_and_remove_wrapper", a).length < 4 && $(".wl_create_extra_email_field").removeClass("disabled"), _r_();
}), _r_();
}
}, booking[sNSStartup].pp_bpg_overlay = function(e) {
_i_("3da:321");
var t = e.require("jquery");
function i() {
_i_("3da:707"), t("body").on("click", "a.open-bpg-in-overlay-instead", function(t) {
_i_("3da:1876"), t.preventDefault(), t.stopPropagation();
var i = e.require("lightbox");
i.hide();
var r = e.require("async-loader");
r.load({
js:"async_wpm_overlay_js",
css:"async_wpm_overlay_css"
}).then(n), _r_();
}), _r_();
}
function n() {
_i_("3da:708");
var i = e.require("lightbox"), n = e.jstmpl("bpg_module_overlay").render({
bpg_label:e.env.bpg_label,
b_hotel_price_parity:e.env.is_eligible_to_double_price_match,
b_site_type:e.env.b_site_type,
cs_page_link:e.env.prd_bpg_overlay_cs_link,
b_companyname:e.env.b_companyname,
b_action:e.env.b_action
});
i.show(n, {
customWrapperClassName:"bgp_module_overlay",
autoWidth:!1,
bCloseButton:!1,
bAnimation:!1
}), t(".bpg-overlay--content").on("click", ".bpg-overlay--close", function() {
_i_("3da:1877"), i.hide(), _r_();
}), _r_();
}
function r() {
_i_("3da:709");
var i = [ "#rate_guarantee a", ".rate_guaranteed a", "#rate_guaranteed", "#wrap-hotelpage-top .best_rate_guarantee a", "table.hotellist td div.room_details_usp .room_details_usp_inner.best_rate_guarantee a", "a.usps_rate_guarantee_link", "#rate_guaranteev2 a", "#ratelogo a", "#terms_rateguarantee", "a#guarantee_terms", "#rates_feedback_invite a.jq_tooltip", ".rate_guarantee_window_opener", "#sidebar_usp_box a.best_price_popup", "#sidebar_usp_box a.jq_tooltip", ".best_price_popup", ".pp_bpg_tooltip_holder", ".bp-usps__usp__title" ].join(",");
t("body").on("click", i, function() {
_i_("3da:2232"), e.events.trigger("BPG:Click"), _r_();
}).on("mouseenter", i, function() {
_i_("3da:1878"), e.events.trigger("BPG:Hover"), _r_();
}), _r_();
}
return _r_({
init:function() {
_i_("3da:1593"), r(), i(), _r_();
}
});
}(booking), B.events.on("BPG:Click", function() {
_i_("3da:232"), B.et.stage("eDdJFHdUbSLRBRJcCcCcCDPBFO", 1), _r_();
}), B.when({
events:"ready",
condition:"ja" !== B.env.b_lang
}).run(function() {
_i_("3da:233"), B.events.on("BPG:Click", function() {
_i_("3da:1001"), B.et.stage("eDdJFcCeRYHNBMBRYcTYOVT", 2), _r_();
}), B.events.on("BPG:Hover", function() {
_i_("3da:1002"), B.et.stage("eDdJFcCeRYHNBMBRYcTYOVT", 1), _r_();
}), _r_();
}), B.when({
events:"load",
experiment:"EKMTOBAWGRcUQAcSWXCeLFSKe"
}).require([ "et", "jquery", "squeak" ], function(e, t, i) {
_i_("3da:234"), t('[id="req_info"]').length > 1 && i("GCaQadTGJNbHRKecbbRe"), _r_();
}), B.define("font-face-on-load", function(e, t, i) {
"use strict";
_i_("3da:235");
var n = e("jquery"), r = B.debug("font-face-on-load"), a = "AxmTYklsjo190QW", o = "sans-serif", _ = "serif", s = {
normal:"400",
bold:"700"
}, l = {
tolerance:2,
delay:100,
glyphs:"",
success:function() {},
error:function() {},
timeout:5e3,
weight:"400",
style:"normal"
}, d = [ "display:block", "position:absolute", "top:-999px", "left:-999px", "font-size:48px", "width:auto", "height:auto", "line-height:normal", "margin:0", "padding:0", "font-variant:normal", "white-space:nowrap" ], c = '<div style="%s">' + a + "</div>";
function u() {
_i_("3da:586"), this.fontFamily = "", this.appended = !1, this.serif = void 0, this.sansSerif = void 0, this.parent = void 0, this.options = {}, _r_();
}
u.prototype.getMeasurements = function() {
return _i_("3da:1003"), _r_({
sansSerif:{
width:this.sansSerif.offsetWidth,
height:this.sansSerif.offsetHeight
},
serif:{
width:this.serif.offsetWidth,
height:this.serif.offsetHeight
}
});
}, u.prototype.load = function() {
_i_("3da:1004");
var e, t = new Date(), i = this, n = i.serif, a = i.sansSerif, s = i.parent, l = i.appended, u = this.options, h = u.reference;
function f(e) {
return _i_("3da:1596"), _r_(d.concat([ "font-weight:" + u.weight, "font-style:" + u.style ]).concat("font-family:" + e).join(";"));
}
var p = c.replace(/\%s/, f(o)), g = c.replace(/\%s/, f(_));
s || (s = i.parent = document.createElement("div")), s.innerHTML = p + g, a = i.sansSerif = s.firstChild, n = i.serif = a.nextSibling, u.glyphs && (a.innerHTML += u.glyphs, n.innerHTML += u.glyphs);
function m(e, t, i) {
return _i_("3da:1597"), _r_(Math.abs(e.width - t.offsetWidth) > i || Math.abs(e.height - t.offsetHeight) > i);
}
function v() {
return _i_("3da:1598"), _r_(new Date().getTime() - t.getTime() > u.timeout);
}
!function b() {
_i_("3da:2089"), h || (h = document.body), !l && h && (h.appendChild(s), l = i.appended = !0, e = i.getMeasurements(), a.style.fontFamily = i.fontFamily + ", " + o, n.style.fontFamily = i.fontFamily + ", " + _), l && e && (m(e.sansSerif, a, u.tolerance) || m(e.serif, n, u.tolerance)) ? (r.log(i.fontFamily + " font loaded"), u.success()) :v() ? (r.error(i.fontFamily + " font loading timed out"), u.error()) :!l && "requestAnimationFrame" in window ? window.requestAnimationFrame(b) :window.setTimeout(b, u.delay), _r_();
}(), _r_();
}, u.prototype.checkFontFaces = function(e) {
_i_("3da:1005");
var t = this;
document.fonts.forEach(function(i) {
_i_("3da:2090"), i.family.toLowerCase() === t.fontFamily.toLowerCase() && (s[i.weight] || i.weight) === "" + t.options.weight && i.style === t.options.style && i.load().then(function() {
_i_("3da:2866"), r.log(t.fontFamily + " font loaded"), t.options.success(), window.clearTimeout(e), _r_();
}), _r_();
}), _r_();
}, u.prototype.init = function(e, t) {
_i_("3da:1006");
var i;
for (var a in l) t.hasOwnProperty(a) || (t[a] = l[a]);
this.options = t, this.fontFamily = e, !t.glyphs && "fonts" in document && "function" == typeof document.fonts.forEach ? (t.timeout && (i = window.setTimeout(n.proxy(function() {
_i_("3da:2867"), r.error(this.fontFamily + " font loading timed out"), t.error(), _r_();
}, this), t.timeout)), this.checkFontFaces(i)) :this.load(), _r_();
};
function h(e, t) {
_i_("3da:587");
var i = new u();
return i.init(e, t), _r_(i);
}
i.exports = h, _r_();
}), B.when({
events:"ready"
}).run(function(e) {
_i_("3da:236");
var t = e("font-face-on-load"), i = {
woff:"//s-ec.bstatic.com/static/css/fonticons_clean/base64/woff/5d61b8a7156073e5e3e9741f65dda44ae3eef7d2.css",
opentype:"//s-ec.bstatic.com/static/css/fonticons_clean/base64/opentype/379fae32e03d316d4fa8a000bd53978baa8de48a.css",
truetype:"//t-ec.bstatic.com/static/css/fonticons_clean/base64/truetype/789d396d92f96569dc6900688e31505670801b0e.css"
}, n = function() {
_i_("3da:1007"), $("body").removeClass("iconfont_is_loading"), _r_();
}, r = function() {
if (_i_("3da:1008"), "msie" == B.env.b_browser) return _r_("opentype");
if ("safari" == B.env.b_browser && B.env.b_browser <= 5) return _r_("truetype");
if ("android" == B.env.b_browser && B.env.b_browser_version <= 4.4) return _r_("truetype");
return _r_("woff");
}, a = function() {
_i_("3da:1009");
var e = r();
return _r_(i[e]);
}, o = function() {
_i_("3da:1010");
var e = a(), t = document.createElement("link");
t.type = "text/css", t.rel = "stylesheet", t.href = e;
var i = document.createElement("img");
i.onerror = function() {
_i_("3da:2091"), n(), _r_();
}, i.src = e, document.getElementsByTagName("head")[0].appendChild(t), _r_();
}, _ = function() {
_i_("3da:1011"), n(), _r_();
}, s = function() {
_i_("3da:1012"), o(), _r_();
};
t("booking-iconset", {
success:_,
error:s,
timeout:250
}), _r_();
}), B.define("profile/social/social-connect/social-connect", function(e, t, i) {
"use strict";
_i_("3da:237"), i.exports = {
getEnv:function() {
return _i_("3da:1599"), _r_(booking.env["social-connect"]);
},
findPendingState:function() {
return _i_("3da:1600"), _r_(this.getEnv().filter(function(e) {
return _i_("3da:2611"), _r_(/_REQUIRED|_CONFLICT|_EXISTING/.test(e.state));
})[0]);
},
clearState:function(e) {
_i_("3da:1601"), $.get("/update_facebook_connect_state", {
action:"clear_state",
state:e.state,
provider:e.provider
}), _r_();
}
}, _r_();
}), B.define("profile/social/social-connect-dialogs/social-connect-dialogs", function(e, t, i) {
"use strict";
_i_("3da:238");
var n = e("profile/social/social-connect/social-connect");
i.exports = {
support:{
MERGE_REQUIRED:"merge-required",
EMAIL_REQUIRED:"email-required",
EMAIL_CONFLICT:"email-conflict",
EMAIL_EXISTING:"email-existing",
CONNECTED:void 0
},
onload:function() {
_i_("3da:1602");
var e = n.findPendingState();
e && this.show(e), _r_();
},
selector:function(e) {
return _i_("3da:1603"), _r_(".js-social-connect-dialog--" + e.provider + "-" + this.support[e.state]);
},
show:function(e) {
_i_("3da:1604");
var t = $(this.selector(e));
if (0 === t.length) return _r_();
booking.lightbox.show(t, {
hideCallBack:n.clearState.bind(n, e),
customWrapperClassName:"social-connect-dialog-wrapper"
}), _r_();
}
}, _r_();
}), B.when({
condition:B.env.b_run_social_connect,
events:"ready"
}).run(function() {
_i_("3da:239"), B.require("profile/social/social-connect-dialogs/social-connect-dialogs").onload(), _r_();
}), B.when({
language:"ja",
hover:"350ms .d-deal-b",
experiment:"YdVcRQZBESaTfQHZKe",
stage:1
}), $(function() {
"use strict";
_i_("3da:240");
var e, t = B.require("jquery"), i = "vpmss";
if (t(window).on("resize", function() {
_i_("3da:1013"), e && clearTimeout(e), e = setTimeout(function() {
_i_("3da:2233"), t.cookie(i, null), _r_();
}, 2e3), _r_();
}), t.cookie(i)) return _r_();
if (!B.env.vpm_log_screen_size) return _r_();
setTimeout(function() {
_i_("3da:1014");
var e = t(window), r = parseInt(e.width(), 10), a = parseInt(e.height(), 10);
if (!n(r) || !n(a)) return _r_();
t.post("/vpmlogdesktopscreensize", {
width:r,
height:a
}), t.cookie(i, 1, {
expires:31,
path:"/"
}), _r_();
}, 5);
function n(e) {
return _i_("3da:588"), _r_(!isNaN(e) && isFinite(e) && e > 0);
}
_r_();
}), B.when({
condition:B.env.fe_is_user_aspiring,
events:"ready"
}).run(function(e) {
_i_("3da:241");
var t, i, n = e("jquery"), r = n(".book-challenge__stamp--current"), a = n(".book-challenge__message"), o = n(".book-challenge__message-inner"), _ = o.html();
if (n(".book-challenge__stamp--booked").on("mouseenter", function() {
_i_("3da:1015");
var e = n(this);
i = e.index() + 1, t && clearInterval(t);
var _ = e.data("progMsg");
a.addClass("book-challenge__message__arrow--stamp" + i), r.removeClass("book-challenge__stamp--current"), o.addClass("book-challenge__message-hover"), _ && o.html(_), _r_();
}), n(".js-genius-trial-desktop---show-challange").on("click", function() {
_i_("3da:1016"), n(".genius-trial-desktop--wrapper").toggleClass("genius-trial-desktop--ch-open"), n(".genius-trial-desktop--wrapper").toggleClass("ge-yellow-border"), n(".book-challenge").toggleClass("genius-trial-desktop-shown"), n(".book-challenge").toggleClass("ge-yellow-border"), _r_();
}), n(".js-genius-trial-desktop--lightbox").length) {
var s = B.components.require("ge-lightbox");
s.setup({
element:".js-genius-trial-desktop--lightbox",
template:"ge_aspiring_about_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:B.env.b_reg_user_qualify_genius_challenge || {}
}
});
}
if (B.env.fe_ge_show_asp_trial_opt_in_lightbox) {
var l = function() {
_i_("3da:1605"), n.ajax({
type:"post",
url:"/genius_trial_optin_lightbox_seen?campaign_id=4",
data:{}
}), _r_();
}, d = B.components.require("ge-lightbox");
d.open({
template:"ge_trial_optin_lightbox",
onOpen:function() {
_i_("3da:2092"), l(), _r_();
},
data:B.env.fe_ge_asp_trial_opt_in_lightbox_data
});
}
var c = n(".book-challenge__stamp--suggested");
if ("index" == B.env.b_action && c.length) {
var u = e("sb-ultra-focus").getInstance("ge_challenge_4th_book");
u.on("shown", function() {
_i_("3da:1606"), B.et.customGoal("cQHHfETPOXETJADVVT", 1), _r_();
}), c.on("click", function() {
_i_("3da:1607"), u.show(), _r_();
});
}
if (n(".book-challenge__stamp--booked").on("mouseleave", function() {
_i_("3da:1017"), a.removeClass("book-challenge__message__arrow--stamp" + i), t = setTimeout(function() {
_i_("3da:2234"), r.addClass("book-challenge__stamp--current"), o.removeClass("book-challenge__message-hover"), o.html(_), _r_();
}, 100), _r_();
}), n(".ge_challenge_cta").length) {
var h = B.components.require("ge-lightbox");
h.setup({
element:".ge_challenge_cta",
template:"ge_aspiring_about_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:B.env.b_reg_user_qualify_genius_challenge || {},
b_action:B.env.b_action
}
});
}
_r_();
}), B.when({
condition:B.env.b_reg_user_is_genius
}).run(function() {
if (_i_("3da:242"), B.env.fe_ge_pilot_markets_lb) {
var e = function() {
_i_("3da:1608"), $.ajax({
type:"post",
url:"/genius_login_lightbox_seen",
data:{}
}), _r_();
}, t = B.components.require("ge-lightbox");
t.open({
template:"ge_pilot_markets_lightbox",
onOpen:function() {
_i_("3da:2093"), e(), _r_();
},
data:B.env.fe_ge_pilot_markets_lb_data
});
}
_r_();
}), B.when({
condition:B.env.fe_ge_show_user_lightbox
}).run(function() {
_i_("3da:243");
var e = function() {
_i_("3da:1018"), $.ajax({
type:"post",
url:"/genius_login_lightbox_seen",
data:{}
}), _r_();
}, t = B.components.require("ge-lightbox");
t.open({
template:B.env.fe_ge_lightbox_template_name,
onOpen:function() {
_i_("3da:1609"), e(), _r_();
},
data:B.env.fe_ge_lightbox_template_data
}), _r_();
}), B.when({
events:"ready",
condition:B.env.b_reg_user_is_genius && B.env.fe_new_genius_lightbox
}).run(function() {
_i_("3da:244");
function e() {
_i_("3da:589"), $.ajax({
type:"post",
url:"/new_genius_lightbox_seen",
data:{}
}), _r_();
}
var t = B.components.require("ge-lightbox");
t.open({
template:"ge_pilot_markets_lightbox",
onOpen:function() {
_i_("3da:1610"), e(), _r_();
},
data:B.env.fe_new_genius_lightbox_data
}), _r_();
}), B.when({
condition:$(".ge_challenge_cta,.js-open-asp-about-lightbox").length
}).run(function(e) {
_i_("3da:245");
var t = e("jquery");
t(".ge_challenge_cta,.js-open-asp-about-lightbox").click(function(e) {
_i_("3da:1019"), e.preventDefault();
var t = B.components.require("ge-lightbox");
t.open({
template:"ge_aspiring_about_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:B.env.b_reg_user_qualify_genius_challenge || {}
}
}), _r_();
}), _r_();
}), B.when({
condition:B.env.b_user_genius_status && parseInt(B.env.b_user_genius_status.is_genius_plus)
}).run(function() {
if (_i_("3da:246"), $("#genius-plus-progress-bar").length) {
var e = $("#genius-plus-progress-cont").data("days"), t = e / 365 * 100, i = $("#genius-plus-progress-bar"), n = i.attr("r"), r = Math.PI * (2 * n);
0 > t && (t = 0), t > 100 && (t = 100);
var a = (100 - t) / 100 * r;
i.css({
strokeDashoffset:a
});
}
var o = $("#js-ge-open-tier-lighbox");
o.length && o.on("click", function(e) {
_i_("3da:1611"), e.preventDefault();
var t = B.components.require("ge-lightbox");
t.open({
template:"ge_perks_lightbox",
data:{
first_name:B.env.b_genius_user.first_name || "Genius",
plus_end_date:B.env.b_user_genius_status.plus_end_date
}
}), _r_();
});
var _ = $("#js-ge-lonely-planet-lighbox");
_.length && _.on("click", function(e) {
_i_("3da:1612"), e.preventDefault();
var t = B.components.require("ge-lightbox");
t.open({
template:"ge_lonely_planet_lightbox",
data:{}
}), _r_();
}), _r_();
}), B.when({
action:"index"
}).run(function() {
_i_("3da:247"), $(".ge-onboarding-index__timeline").addClass("animate"), _r_();
}), B.when({
condition:B.env.b_can_test_by_user_account,
experiment:"EKAKQUXWFPTYdCSccDWe"
}), setTimeout(function() {
_i_("3da:248"), B.when({
condition:B.env.b_can_test_by_user_account,
experiment:"EKAKQUXWFPTYdCSccDZSAcQeKe",
stage:1
}), _r_();
}, 1e3), B.when({
condition:"www" === B.env.b_site_type && B.env.b_reg_user_is_genius
}).run(function(e) {
_i_("3da:249");
var t = e("jquery"), i = B.components.require("ge-lightbox");
t(document).on("click", '[data-ge-id="js_user_menu_ge_lb_link"]', function(e) {
_i_("3da:1020"), e.preventDefault(), i.open({
template:"ge_genius_about_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_user_genius_status:B.env.b_user_genius_status,
b_is_internal_ip:B.env.b_is_internal_ip
}
}), _r_();
}), _r_();
}), B.when({
condition:B.env.b_has_abandoned_cart_data && B.env.fe_user_is_aspiring_1plus_in_www
}).run(function() {
_i_("3da:250"), B.events.on("growl:show", function(e) {
_i_("3da:1021"), e.type.match("abandoned-cart-growl-notification") && B.et.stage("cQHSdDHNLCKbHRGZEHe", 1), _r_();
}), _r_();
}), B.when({
condition:B.env.b_action.match(/^(index|hotel|searchresults|mydashboard|continent|country|region|city|district|landmark|airport|place)$/) && "www" === B.env.b_site_type && B.env.b_reg_user_is_genius
}).run(function() {
_i_("3da:251");
var e = B.components.require("ge-lightbox");
function t() {
_i_("3da:590"), $.ajax({
type:"post",
url:"/genius_trial_lightbox_seen?campaign_id=" + B.env.ge_trial_campaign_id,
data:{}
}), _r_();
}
var i = {
b_genius_user:B.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:B.env.b_reg_user_qualify_genius_challenge || {},
b_user_genius_status:B.env.b_user_genius_status || {}
};
B.env.fe_is_zero_ge_trial_desktop_user && (i.fe_is_zero_ge_trial_desktop_user = 1, i.fe_is_zero_ge_trial_init_lightbox = 1), B.env.show_ge_trial_lighbox_onload && setTimeout(function() {
_i_("3da:1613"), e.open({
template:"ge_genius_week_lightbox",
data:i,
onOpen:function() {
_i_("3da:2717"), t(), _r_();
}
}), _r_();
}, 1500), $(document).on("click", ".js-ge-open-trial-lighbox", function(t) {
_i_("3da:1022"), t.preventDefault(), e.open({
template:"ge_genius_week_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:B.env.b_reg_user_qualify_genius_challenge || {},
b_user_genius_status:B.env.b_user_genius_status || {}
}
}), _r_();
}), $(document).on("click", "#js_close_trial_lightbox", function() {
return _i_("3da:1023"), B.lightbox.hide(), _r_(!1);
}), _r_();
}), B.when({
condition:"www" === B.env.b_site_type && B.env.b_reg_user_is_genius
}).run(function(e) {
_i_("3da:252");
var t = e("jquery"), i = t("#ge_genius_rate"), n = B.browserStorageHandler;
if (!n) return _r_();
var r = n.getPermanentValue("genius_search_checkbox_checked");
if (r || !i.length) return _r_();
B.et.track("cQZVDZOKZdKNWYKe") && i.prop("checked", !0).on("change", function() {
_i_("3da:1614"), n.addPermanentValue("genius_search_checkbox_checked", 1), _r_();
}), _r_();
}), B.when({
condition:$('li.uc-notification[data-type="genius_challenge_reminder"] a').length
}).run(function(e) {
_i_("3da:253");
var t = e("jquery");
t('li.uc-notification[data-type="genius_challenge_reminder"] a').click(function(e) {
_i_("3da:1024"), e.preventDefault();
var t = B.components.require("ge-lightbox");
t.open({
template:"ge_aspiring_about_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:B.env.b_reg_user_qualify_genius_challenge || {}
}
}), _r_();
}), _r_();
}), B.when({
condition:$('li.uc-notification[data-type="genius_trial_reminder"] a').length
}).run(function(e) {
_i_("3da:254");
var t = e("jquery");
t('li.uc-notification[data-type="genius_trial_reminder"] a').click(function(e) {
_i_("3da:1025"), e.preventDefault(), document.forms.ge_trial_opt_in_notifi_form.submit(), _r_();
}), _r_();
}), B.when({
action:"index",
events:"ready",
experiment:"ZLLfICXWAWTCUZZCCQBC"
}).run(function(e) {
_i_("3da:255");
var t = e("jquery");
t(".dsf_entry_city").on("click", function() {
_i_("3da:1026"), B.et.customGoal("ZLLfICXWAWTCUZZCCQBC", 1), _r_();
}), _r_();
}), function(e, t, i, n) {
"use strict";
_i_("3da:256"), e.when({
condition:"www" === e.env.b_site_type && e.env.b_bookings_owned,
events:"ready",
experiment:"PNQFZYLMEVRGHQLMVYPYKDcdC"
}).run(function() {
_i_("3da:1027");
var n, r, a, o, _, s, l = e.require("jquery"), d = e.require("ga-tracker"), c = 10, u = 300, h = "Desktop Screen Touch";
function f() {
_i_("3da:1615"), d.trackEvent(h, "Tap", e.env.b_action), _r_();
}
function p() {
_i_("3da:1616"), d.trackEvent(h, "Double Tap", e.env.b_action), _r_();
}
function g(e) {
if (_i_("3da:1617"), !(e.originalEvent && e.originalEvent.touches && e.originalEvent.touches[0])) return _r_();
n = e.originalEvent.touches[0].clientX, r = e.originalEvent.touches[0].clientY, _ && (t.clearTimeout(_), Math.abs(a - n) > c || Math.abs(o - r) > c ? f() :(s = !0, p())), _r_();
}
function m(e) {
if (_i_("3da:1618"), !(e.originalEvent && e.originalEvent.changedTouches && e.originalEvent.changedTouches[0])) return _r_();
if (s) return s = !1, _r_();
if (!n || !r) return _r_();
a = e.originalEvent.changedTouches[0].clientX, o = e.originalEvent.changedTouches[0].clientY, Math.abs(a - n) > c || Math.abs(o - r) > c || (_ = t.setTimeout(f, u)), _r_();
}
l(i).on("touchstart pointerdown MSPointerDown", function(e) {
_i_("3da:2094"), "touchstart" === e.type ? g(e) :e.originalEvent && e.originalEvent.pointerType && ("touch" === e.originalEvent.pointerType || "pen" === e.originalEvent.pointerType), _r_();
}), l(i).on("touchend pointerup MSPointerUp", function(e) {
_i_("3da:2095"), "touchend" === e.type ? m(e) :e.originalEvent && e.originalEvent.pointerType && ("touch" === e.originalEvent.pointerType || "pen" === e.originalEvent.pointerType), _r_();
}), _r_();
}), _r_();
}(window.booking, window, document), B.when({
experiment:"NVNeffCbDYSGQCCATAJRXRT",
events:"ready"
}).run(function(e) {
_i_("3da:257");
var t = e("jquery"), i = "NVNeffCbDYSGQCCATAJRXRT", n = t(".upcoming_booking_payment");
if (!n.length) return _r_();
n.on("click", ".js-uc-notification-link", function(e) {
_i_("3da:1028"), B.et.customGoal(i, 1), _r_();
}), n.on("click", ".js-uc-notification-close", function(e) {
_i_("3da:1029"), B.et.customGoal(i, 2), _r_();
}), n.on("click", ".js-uc-notification-seen", function(e) {
_i_("3da:1030"), B.et.customGoal(i, 3), _r_();
}), _r_();
}), B.when({
experiment:"BffIEcEUXPNMPOHET",
condition:B.env.auth_level > 0,
events:"load"
}).require([ "jquery", "header/notifications/notifications" ], function(e, t) {
_i_("3da:258");
function i(t) {
_i_("3da:591"), e(".uc-notifications-group__messenger").height(t), _r_();
}
function n(i) {
_i_("3da:592"), e(".uc-notifications-group__messenger").data("unread-count", i), t.refresh(), _r_();
}
window.addEventListener("message", function(e) {
if (_i_("3da:1031"), !e) return _r_();
if (!e.data) return _r_();
if (e.data.indexOf("notifications-height:") > -1) {
var t = parseInt(e.data.replace("notifications-height:", ""), 10);
isNaN(t) || i(t);
} else if (e.data.indexOf("notifications-unread-count:") > -1) {
var r = parseInt(e.data.replace("notifications-unread-count:", ""), 10);
isNaN(r) || n(r);
}
_r_();
}), B.eventEmitter.bind("uc_popover_showed", function(t, i) {
if (_i_("3da:1032"), !i || !i.id || "notifications" !== i.id) return _r_();
var n = e(".uc-notifications__messenger").get(0);
if (!n || !n.contentWindow) return _r_();
n.contentWindow.postMessage("you-are-visible", n.src), _r_();
}), _r_();
}), $(function() {
"use strict";
_i_("3da:259");
var e = B.debug("time_to_interact"), t = window.ttiStats, i = B.require("ga-tracker");
if (!t) return _r_();
e.log("init");
function n(e) {
_i_("3da:593"), t[e] ? r(e) :$(document).one(e, function() {
_i_("3da:2096"), setTimeout(function() {
_i_("3da:2718"), r(e), _r_();
}, 100), _r_();
}), _r_();
}
function r(n) {
if (_i_("3da:594"), window.ga) {
var r = t[n];
e.log(n, r), i.trackTiming("Time To Interact", n, r, B.env.b_action);
}
_r_();
}
n("click"), n("scroll"), _r_();
}), B.when({
condition:B.env.fe_enable_fps_goal_with_value && void 0 !== window.requestAnimationFrame && void 0 !== window.performance && void 0 !== performance.now
}).run(function() {
"use strict";
_i_("3da:260");
var e, t, i = B.debug("fps"), n = 200, r = 0;
try {
t = parseInt(localStorage.getItem("fps_avg")), localStorage.removeItem("fps_avg");
} catch (a) {}
i.log("fps_avg (storage)", t), t && B.et.goalWithValue("js_fps_avg", t), setTimeout(function() {
_i_("3da:1033"), e && (i.log("js_fps_avg_1m", e), B.et.goalWithValue("js_fps_avg_1m", parseInt(e))), _r_();
}, 6e4);
function o(t) {
if (_i_("3da:595"), i.log(t), r) {
var n = r * e;
r += 1, e = (n + t) / r;
} else r = 1, e = t;
i.log("fps_avg", e);
try {
localStorage.setItem("fps_avg", e);
} catch (a) {}
_r_();
}
var _ = !1;
function s() {
_i_("3da:596");
var e = performance.now(), t = 0;
_ = !1;
var i = function() {
if (_i_("3da:1619"), t++, _) {
var n = performance.now(), r = Math.round(1e3 * t / (n - e));
o(r);
} else requestAnimationFrame(i);
_r_();
};
requestAnimationFrame(i), _r_();
}
var l;
function d() {
_i_("3da:597"), l = void 0, _ = !0, _r_();
}
function c() {
_i_("3da:598"), void 0 === l ? s() :clearTimeout(l), l = setTimeout(d, n), _r_();
}
window.addEventListener("scroll", c, !0), B.eventEmitter.on("et-scroll-observer:scroll", c), _r_();
}), B.define("performance/metrics-storage", function(e, t, i) {
"use strict";
_i_("3da:261");
var n, r = e("jquery"), a = [ "index", "searchresults", "hotel", "book", "confirmation", "mydashboard", "myrewards", "myreservations", "reviewtimeline", "myreferrals", "myreports", "mysettings" ];
function o(e) {
_i_("3da:599"), this.namespace = e, _r_();
}
r.extend(o.prototype, {
saveToStorage:function(e, t) {
_i_("3da:1620");
var i;
try {
i = this._loadByKeyActionIndexed(e), i[this._compressActionName(B.env.b_action)] = t, window.localStorage.setItem(this._buildStorageKey(e), JSON.stringify(i));
} catch (n) {}
_r_();
},
loadFromStorage:function(e, t) {
_i_("3da:1621");
try {
return _r_(this._loadByKeyActionIndexed(e)[this._compressActionName(t)]);
} catch (i) {
return _r_(void 0);
}
_r_();
},
popFromStorage:function(e, t) {
_i_("3da:1622");
var i, n = void 0;
try {
i = this._loadByKeyActionIndexed(e), n = i[this._compressActionName(t)], delete i[this._compressActionName(t)], 0 == Object.keys(i).length ? window.localStorage.removeItem(this._buildStorageKey(e)) :window.localStorage.setItem(this._buildStorageKey(e), JSON.stringify(i));
} catch (r) {}
return _r_(n);
},
_loadByKeyActionIndexed:function(e) {
return _i_("3da:1623"), _r_(JSON.parse(window.localStorage.getItem(this._buildStorageKey(e)) || "{}"));
},
_compressActionName:function(e) {
return _i_("3da:1624"), _r_(a.indexOf(e));
},
_buildStorageKey:function(e) {
return _i_("3da:1625"), _r_([ this.namespace, e ].join("."));
}
}), i.exports = {
TARGET_ACTION_LIST:a,
getStorage:function() {
return _i_("3da:1626"), n || (n = new o("p_m")), _r_(n);
}
}, _r_();
}), B.define("performance/render-tree-metrics", function(e, t, i) {
"use strict";
_i_("3da:262");
var n, r = e("jquery"), a = e("performance/metrics-storage"), o = e("promise"), _ = window.performance;
function s() {
_i_("3da:600"), this.rawRenderTreeSize = null, this.value = null, this.promise = null, _r_();
}
r.extend(s.prototype, {
calculate:function() {
if (_i_("3da:1627"), this.promise) return _r_(this.promise);
return _r_(this.promise = new o(function(e) {
_i_("3da:2787"), r(document).on("DOMContentLoaded", this._saveRawRenderTreeSize.bind(this)), r(window).on("load", function() {
_i_("3da:2989"), 0 === this.rawRenderTreeSize && this._saveRawRenderTreeSize(), e({
renderTreeConstructionTime:this._calculateDomProcessingTimeStampValue(),
renderTreeSize:this.rawRenderTreeSize
}), _r_();
}.bind(this)), _r_();
}.bind(this)));
},
_saveRawRenderTreeSize:function() {
_i_("3da:1628"), this.rawRenderTreeSize = r("*:visible").length, _r_();
},
_calculateDomProcessingTimeStampValue:function() {
_i_("3da:1629");
var e, t;
return e = _.timing.domContentLoadedEventStart, t = _.timing.domContentLoadedEventEnd, _r_(t - e);
}
});
function l() {}
l.prototype.getMetricName = function() {}, l.prototype.getMetricValue = function(e) {}, l.prototype.captureMetric = function() {}, l.prototype.cleanMetric = function(e) {};
function d(e, t) {
_i_("3da:602"), this.storage = e, this.perfAware = t, _r_();
}
r.extend(d.prototype, {
VALUE_KEY:"rtts",
getMetricName:function() {
return _i_("3da:1630"), _r_("render_tree_time_single");
},
getMetricValue:function(e) {
_i_("3da:1631");
var t;
return t = this.storage.loadFromStorage(this.VALUE_KEY, e), _r_("number" == typeof t ? t :void 0);
},
cleanMetric:function(e) {
_i_("3da:1632"), this.storage.popFromStorage(this.VALUE_KEY, e), _r_();
},
captureMetric:function() {
_i_("3da:1633"), this.perfAware.calculate().then(function(e) {
_i_("3da:2719"), this.storage.saveToStorage(this.VALUE_KEY, parseInt(e.renderTreeConstructionTime)), _r_();
}.bind(this)), _r_();
}
});
function c(e, t) {
_i_("3da:603"), this.storage = e, this.perfAware = t, _r_();
}
r.extend(c.prototype, {
SUFFICIANT_SESSION_COUNT:3,
VALUE_KEY:"rtta",
getMetricName:function() {
return _i_("3da:1634"), _r_("render_tree_time_avg");
},
getMetricValue:function(e) {
_i_("3da:1635");
var t, i;
if (t = this.storage.loadFromStorage(this.VALUE_KEY, e), !t) return _r_(void 0);
if (i = parseInt(t[0]) || 0, i < this.SUFFICIANT_SESSION_COUNT) return _r_(void 0);
return _r_(parseInt(t[1]));
},
cleanMetric:function(e) {
_i_("3da:1636"), this.storage.popFromStorage(this.VALUE_KEY, e), _r_();
},
captureMetric:function() {
_i_("3da:1637"), this.perfAware.calculate().then(this._processSessionValue.bind(this)), _r_();
},
_processSessionValue:function(e) {
_i_("3da:1638");
var t, i, n;
if (!e || !e.renderTreeConstructionTime) return _r_();
n = this.storage.loadFromStorage(this.VALUE_KEY, B.env.b_action), t = parseFloat(n ? n[1] :0) || 0, i = parseInt(n ? n[0] :0) || 0, t = (t * i + e.renderTreeConstructionTime) / (i + 1), t = parseInt(1e3 * t) / 1e3, this.storage.saveToStorage(this.VALUE_KEY, [ i + 1, t ]), _r_();
}
});
function u(e, t) {
_i_("3da:604"), this.storage = e, this.perfAware = t, _r_();
}
r.extend(u.prototype, {
VALUE_KEY:"rtnpms",
TREE_SIZE_CONFIDENT_INTERVAL:{
lowerBound:2700,
upperBound:3700
},
getMetricName:function() {
return _i_("3da:1639"), _r_("render_tree_ms_per_node");
},
captureMetric:function() {
_i_("3da:1640"), this.perfAware.calculate().then(this._processSessionValue.bind(this)), _r_();
},
getMetricValue:function(e) {
_i_("3da:1641");
var t;
return t = this.storage.loadFromStorage(this.VALUE_KEY, e), _r_("number" == typeof t ? t :void 0);
},
cleanMetric:function(e) {
_i_("3da:1642"), this.storage.popFromStorage(this.VALUE_KEY, e), _r_();
},
_processSessionValue:function(e) {
if (_i_("3da:1643"), !e.renderTreeConstructionTime || !e.renderTreeSize) return _r_();
if (!(this.TREE_SIZE_CONFIDENT_INTERVAL.lowerBound <= e.renderTreeSize && e.renderTreeSize <= this.TREE_SIZE_CONFIDENT_INTERVAL.upperBound)) return _r_();
this.storage.saveToStorage(this.VALUE_KEY, parseInt(e.renderTreeConstructionTime / e.renderTreeSize)), _r_();
}
});
function h(e) {
_i_("3da:605"), this.storage = e, this.isSupportedValue = void 0, this.iteration = 0, this.time = 0, this.testValue = 0, this.markNameStart = "mark_start_" + this.getMetricName(), this.markNameEnd = "mark_end_" + this.getMetricName(), this.measureName = "measure_" + this.getMetricName(), _r_();
}
r.extend(h.prototype, {
ITERATION_NUMBER:5e4,
MEASUREMENT_LATENCY:.2,
VALUE_KEY:"btmr",
getMetricName:function() {
return _i_("3da:1644"), _r_("benchmark_test_math_random");
},
getMetricValue:function(e) {
_i_("3da:1645");
var t;
if (!this._isSupported()) return _r_(void 0);
return t = this.storage.loadFromStorage(this.VALUE_KEY, e), _r_("number" == typeof t ? t :void 0);
},
captureMetric:function() {
if (_i_("3da:1646"), !this._isSupported()) return _r_();
this._requestNextTestIteration(), _r_();
},
cleanMetric:function(e) {
if (_i_("3da:1647"), !this._isSupported()) return _r_();
this.storage.popFromStorage(this.VALUE_KEY, e), _r_();
},
_requestNextTestIteration:function() {
_i_("3da:1648"), requestIdleCallback(function(e) {
for (_i_("3da:2720"), _.clearMarks(this.markNameStart), _.clearMarks(this.markNameEnd), 0 === this.testValue && (this.testValue = 1), _.mark(this.markNameStart); e.timeRemaining() >= this.MEASUREMENT_LATENCY && this.iteration <= this.ITERATION_NUMBER && this.testValue; this.iteration++) this.testValue = (this.testValue + 1001) % 1000000007;
if (_.mark(this.markNameEnd), _.measure(this.measureName, this.markNameStart, this.markNameEnd), this.iteration > this.ITERATION_NUMBER) return requestIdleCallback(this._calculateMeasurement.bind(this)), _r_();
this._requestNextTestIteration(), _r_();
}.bind(this)), _r_();
},
_calculateMeasurement:function() {
if (_i_("3da:1649"), this.time = _.getEntriesByName(this.measureName).reduce(function(e, t) {
return _i_("3da:2612"), e += t.duration, _r_(e);
}, 0), 0 === this.time) return _r_();
_.clearMarks(this.markNameStart), _.clearMarks(this.markNameEnd), _.clearMeasures(this.measureName), this.storage.saveToStorage(this.VALUE_KEY, parseInt(this.time)), _r_();
},
_isSupported:function() {
return _i_("3da:1650"), void 0 === this.isSupportedValue && (this.isSupportedValue = "function" == typeof window.requestIdleCallback && "function" == typeof _.mark && "function" == typeof _.clearMarks && "function" == typeof _.measure && "function" == typeof _.clearMeasures), _r_(this.isSupportedValue);
}
});
function f(e) {
_i_("3da:606"), this.storage = e, this.iteration = 0, this.testValue = 0, _r_();
}
r.extend(f.prototype, {
ITERATION_NUMBER:4e6,
VALUE_KEY:"btmrsf",
getMetricName:function() {
return _i_("3da:1651"), _r_("benchmark_test_math_random_sf");
},
getMetricValue:function(e) {
_i_("3da:1652");
var t;
return t = this.storage.loadFromStorage(this.VALUE_KEY, e), _r_("number" == typeof t ? t :void 0);
},
cleanMetric:function(e) {
_i_("3da:1653"), this.storage.popFromStorage(this.VALUE_KEY, e), _r_();
},
captureMetric:function() {
_i_("3da:1654");
var e;
for (this.testValue = 1, e = this._getCurrentTime(); this.iteration <= this.ITERATION_NUMBER && this.testValue; this.iteration++) this.testValue = (this.testValue + 104729) % 179424691;
e = this._getCurrentTime() - e, this.storage.saveToStorage(this.VALUE_KEY, parseInt(e)), _r_();
},
_getCurrentTime:function() {
if (_i_("3da:1655"), window.performance && "function" == typeof window.performance.now) return _r_(window.performance.now());
return _r_(new Date().getTime());
}
}), i.exports = {
TASK_NAME:{
SINGLE_SESSION:"single_session",
AVERAGE_SESSION:"avg_session",
NODE_PER_MS_SESSION:"node_per_ms_session",
BENCHMARK_TEST_MATH_RANDOM:"benchmark_test_math_random",
BENCHMARK_TEST_MATH_RANDOM_STRAIGHT_FORWARD:"benchmark_test_math_random_straigt_forward"
},
getRenderTreePerfAware:function() {
return _i_("3da:1656"), n || (n = new s()), _r_(n);
},
createByName:function(e) {
if (_i_("3da:1657"), e === this.TASK_NAME.SINGLE_SESSION) return _r_(new d(a.getStorage(), this.getRenderTreePerfAware()));
if (e === this.TASK_NAME.AVERAGE_SESSION) return _r_(new c(a.getStorage(), this.getRenderTreePerfAware()));
if (e === this.TASK_NAME.NODE_PER_MS_SESSION) return _r_(new u(a.getStorage(), this.getRenderTreePerfAware()));
if (e === this.TASK_NAME.BENCHMARK_TEST_MATH_RANDOM) return _r_(new h(a.getStorage()));
if (e === this.TASK_NAME.BENCHMARK_TEST_MATH_RANDOM_STRAIGHT_FORWARD) return _r_(new f(a.getStorage()));
_r_();
}
}, _r_();
}), B.when({
condition:(B.env.fe_enable_performance_goal_with_value && window.performance && window.performance.timing || B.env.fe_enable_performance_test_sf) && window.localStorage
}).run(function(e) {
_i_("3da:263");
var t = e("performance/render-tree-metrics"), i = e("performance/metrics-storage"), n = e("ga-tracker"), r = [];
if (-1 === i.TARGET_ACTION_LIST.indexOf(B.env.b_action)) return _r_();
function a(e) {
_i_("3da:607"), this.taskList = e, this.init(), _r_();
}
return a.prototype = {
NUMBER_OF_SESSION_FOR_AVG:5,
init:function() {
_i_("3da:1658"), i.TARGET_ACTION_LIST.forEach(function(e) {
_i_("3da:2469"), this.taskList.forEach(function(t) {
_i_("3da:2868");
var i;
if (void 0 === (i = t.getMetricValue(e))) return _r_();
this._daddyIsWatching() && console.log("send", t.getMetricName(), i, e), this._sendMetricToGA(t.getMetricName(), i, e), t.cleanMetric(e), _r_();
}, this), _r_();
}, this), this.taskList.forEach(function(e) {
_i_("3da:2470"), e.captureMetric(), _r_();
}, this), _r_();
},
_sendMetricToGA:function(e, t, i) {
_i_("3da:1659"), n.trackTiming(n.TIMING.PERFORMANCE, "js_" + e, t, i), _r_();
},
_daddyIsWatching:function() {
_i_("3da:1660");
try {
return _r_(!!window.localStorage.getItem("perf_matters"));
} catch (e) {}
_r_();
}
}, B.env.fe_enable_performance_goal_with_value && window.performance && window.performance.timing && (r = [ t.createByName(t.TASK_NAME.SINGLE_SESSION), t.createByName(t.TASK_NAME.AVERAGE_SESSION), t.createByName(t.TASK_NAME.NODE_PER_MS_SESSION), t.createByName(t.TASK_NAME.BENCHMARK_TEST_MATH_RANDOM) ]), B.env.fe_enable_performance_test_sf && r.push(t.createByName(t.TASK_NAME.BENCHMARK_TEST_MATH_RANDOM_STRAIGHT_FORWARD)), _r_(new a(r));
}), B.eventEmitter.on("user_access_menu_login_tab user_access_menu_register_tab", function(e) {
_i_("3da:264");
var t = "user_access_menu_register_tab" === e.type ? "up" :"in", i = $("a.social-connect-button--facebook"), n = $("a.social-connect-button--google"), r = $("a.social-connect-button--naver");
if (!i.length && !n.length) return _r_();
i.text(B.jstmpl.translations("loc_social_connect_facebook_sign_" + t)), n.text(B.jstmpl.translations("loc_social_connect_google_sign_" + t)), r.text(B.jstmpl.translations("loc_m_social_connect_naver_sign_" + t)), _r_();
}), B.define("component/core/number-input-spinner", [ "component" ], function(e) {
return _i_("3da:265"), _r_(e.extend({
init:function() {
_i_("3da:1661");
var e = this.$el.find("[data-input]"), t = this.$el.attr("data-max-value"), i = this.$el.attr("data-min-value"), n = this.$el.find("[data-increment]"), r = this.$el.find("[data-decrement]");
n.bind("click", function(i) {
_i_("3da:2471");
var n = parseInt(e.val(), 10);
if (n >= t) return _r_();
n += 1, e.val(n), e.trigger("change"), _r_();
}), r.bind("click", function(t) {
_i_("3da:2472");
var n = parseInt(e.val(), 10);
if (i >= n) return _r_();
n -= 1, e.val(n), e.trigger("change"), _r_();
}), _r_();
}
}));
}), B.define("component/villas-redirect-msg", function(e, t, i) {
_i_("3da:266");
var n = e("component"), r = B.env.b_is_tdot_traffic ? B[sNSStartup].lightbox :e("lightbox"), a = e("jquery");
i.exports = n.extend({
init:function() {
_i_("3da:1879"), a.cookie("villas_redirect_msg_seen") || (r.show(a(".villas-redirect-msg"), {
opacity:.7,
autoWidth:!0
}), a.cookie("villas_redirect_msg_seen", 1, {
path:"/"
})), _r_();
}
}), _r_();
}), B.require([ "jquery", "et" ], function(e, t) {
_i_("3da:267");
var i = "eIBbFYHIIHTPZeVXGRcNcC";
e(".feedback_link_look").click(function() {
_i_("3da:1038"), t.stage(i, 1), _r_();
}), e(".menu_help").click(function() {
_i_("3da:1039"), t.stage(i, 2), _r_();
}), _r_();
}), B.define("detect-device", function() {
"use strict";
_i_("3da:268");
var e = window && window.navigator && window.navigator.userAgent ? window.navigator.userAgent :null;
if (!e) return _r_("Unknown");
return e = e.indexOf("Xbox") > -1 && e.indexOf("Xbox One") > -1 ? "Xbox One" :e.indexOf("Xbox") > -1 ? "Xbox 360" :e.indexOf("Playstation 4") > -1 ? "PlayStation 4" :e.indexOf("Playstation 3") > -1 ? "PlayStation 3" :e.indexOf("Nintendo WiiU") > -1 || e.indexOf("NintendoBrowser") > -1 ? "Nintendo" :e.indexOf("SMART-TV") > -1 || e.indexOf("SmartTV") > -1 || e.indexOf("Opera TV Store") > -1 || e.indexOf("PhilipsTV") > -1 ? "Smart TV" :e.indexOf("GoogleTV") > -1 ? "Google TV" :e.indexOf("AppleTV") > -1 ? "Apple TV" :e.indexOf("Android") > -1 && e.indexOf("SM-G900P") > -1 ? "Galaxy S5" :e.indexOf("Android") > -1 && e.indexOf("Nexus 5") > -1 ? "Nexus 5" :e.indexOf("Android") > -1 && e.indexOf("Nexus 6") > -1 ? "Nexus 6" :e.indexOf("Android") > -1 && e.indexOf("Nexus 7") > -1 ? "Nexus 7" :e.indexOf("Android") > -1 && e.indexOf("Nexus 10") > -1 ? "Nexus 10" :e.indexOf("Android") > -1 ? "Android" :e.indexOf("BlackBerry") > -1 ? "BlackBerry" :e.indexOf("KFAPWI") > -1 ? "Kindle Fire" :e.indexOf("NOKIA") > -1 || e.indexOf("NokiaBrowser") > -1 ? "Nokia" :e.indexOf("Windows Phone") > -1 ? "Windows Phone" :e.indexOf("MSIE") > -1 ? "Internet Explorer" :e.indexOf("Opera Mini") > -1 ? "Opera Mini" :e.indexOf("iPhone") > -1 ? "iPhone" :e.indexOf("iPod") > -1 ? "iPod" :e.indexOf("iPad") > -1 ? "iPad" :"Unknown", _r_(e);
}), B.define("screen-info", function() {
"use strict";
_i_("3da:269");
var e = window && window.screen ? window.screen :null;
if (!e) return _r_(null);
var t = {
height:e.height,
width:e.width
};
return t.orientation = t.height < t.width ? "landscape" :"portrait", window.devicePixelRatio && (t.pixelDensity = window.devicePixelRatio, t.retinaDisplay = t.pixelDensity > 1 ? !0 :!1), window.navigator && window.navigator.maxTouchPoints && (t.max_touch_points = window.navigator.maxTouchPoints), _r_(t);
}), function() {
"use strict";
_i_("3da:270");
var e = "PYAVNDWdPQBUHMfJLBccFDFO";
"www" === B.env.b_site_type && (e = "AEAVNDWdPQBUHMfJLBccFDFO"), B.when({
events:"ready",
action:[ "index", "airport", "city", "country", "district", "landmark", "region", "hotel", "searchresults" ],
experiment:e
}).run(function(t) {
_i_("3da:1040");
var i = t("peripheral-detection"), n = t("et"), r = t("events"), a = {};
a[i.EVENT_DISPLAY_PORTRAIT] = 2, a[i.EVENT_DISPLAY_LANDSCAPE] = 3, a[i.EVENT_DISPLAY_ORIENTATION_CHANGED] = 4, a[i.EVENT_DISPLAY_HIGH_DENSITY] = 5, a[i.EVENT_DISPLAY_RETINA_LIKE] = 6, a[i.EVENT_TOUCH] = 7, a[i.EVENT_MOUSE] = 8, a[i.EVENT_WHEEL] = 9, n.stage(e, 1);
for (var o in a) r.on(o, function(t) {
return _i_("3da:2613"), _r_(function i() {
_i_("3da:2869"), n.stage(e, a[t]), r.off(t, i), _r_();
});
}(o));
i.init(), _r_();
}), _r_();
}(), B.require([ "jquery", "dismiss-item" ], function(e, t) {
_i_("3da:271"), B.when({
events:"ready"
}).run(function() {
_i_("3da:1041");
var i = e(".free_attractions_ribbon");
if (!i.length) return _r_();
i.find(".free_attractions_ribbon--button").on("click", function() {
_i_("3da:2097"), i.remove(), t("puf_city_free_attractions"), _r_();
}), _r_();
}), _r_();
}), B.when({
events:"ready",
condition:B.env.fe_enable_login_with_phone_number || B.env.fe_enable_signup_with_phone_number
}).run(function() {
_i_("3da:272");
var e, t, i = !1;
booking.phoneNumberLogin = booking.phoneNumberLogin || {}, booking.phoneNumberLogin.checkSmsVerificationCode = function(e) {
if (_i_("3da:1042"), e && e.onBeforeSend && e.onBeforeSend(), i) return _r_(!1);
i = !0, $.ajax({
method:"POST",
url:"/confirm_phone_number",
data:{
phone:e.phoneNumber,
country_code:"cn",
confirmation_code:e.verificationCode,
origin:B.env.b_action,
is_signup:e.is_signup || !0
},
success:function(t) {
_i_("3da:2473"), t && t.error && e.error && (i = !1, e.error(parseInt(t.error))), 1 === t.success && e.success && e.success(t), _r_();
},
error:function(t) {
_i_("3da:2474"), i = !1, t && e.error(parseInt(t.error)), _r_();
}
}), _r_();
}, booking.phoneNumberLogin.sendVerificationSms = function(e) {
_i_("3da:1043"), e && e.onBeforeSend && e.onBeforeSend(), $.ajax({
method:"POST",
url:"/send_verification_sms",
data:{
phone:e.phoneNumber,
country_code:"cn",
origin:B.env.b_action,
is_signup:e.is_signup || "true"
},
success:function(t) {
_i_("3da:2475"), t && t.error && e.error && e.error(parseInt(t.error)), 1 === t.success && e.success && e.success(t), _r_();
},
error:function(t) {
_i_("3da:2476"), t && e.error(parseInt(t.error)), _r_();
}
}), _r_();
}, booking.phoneNumberLogin.getPassword = function() {
return _i_("3da:1044"), _r_(e);
}, booking.phoneNumberLogin.setPassword = function(t) {
_i_("3da:1045"), e = t, _r_();
}, booking.phoneNumberLogin.getPhone = function() {
return _i_("3da:1046"), _r_(t);
}, booking.phoneNumberLogin.setPhone = function(e) {
_i_("3da:1047"), t = e, _r_();
}, _r_();
}), B.when({
events:"ready",
condition:B.env.fe_enable_login_with_phone_number
}).run(function(e) {
_i_("3da:273");
var t, i, n = e("jquery"), r = n(".js-send_verification_code"), a = n(".js-wait_resend_verification_code"), o = n(".js-resend_cta_countdown_number"), _ = n(".js-phone_error_message"), s = n(".user_access_menu");
if ("mdot" === B.env.b_site_type && !n(".m-user-access-menu").length) return _r_();
function l() {
_i_("3da:608"), clearInterval(i), r.html(r.attr("data-resend-copy")), r.removeClass("g-hidden"), a.addClass("g-hidden"), _r_();
}
function d(e) {
_i_("3da:609"), B.env.fe_run_enable_book_with_phone && B.env.b_stage && 2 === B.env.b_stage && B.et.customGoal("MKMBYcWNOHfKXNDBae", 3), l(), -1 === e ? n(".js-phone_generic_problem").removeClass("g-hidden") :-2 === e ? n(".js-phone_already_confirmed").removeClass("g-hidden") :-3 === e ? n(".js-phone_code_missing").removeClass("g-hidden") :-4 === e ? n(".js-phone_generic_problem").removeClass("g-hidden") :-5 === e ? n(".js-phone_generic_problem").removeClass("g-hidden") :-6 === e && n(".js-phone_code_wrong").removeClass("g-hidden"), _r_();
}
function c() {
_i_("3da:610"), t = 60, o.html(t), i = setInterval(function() {
_i_("3da:1880"), t--, 0 === t ? l() :o.html(t), _r_();
}, 1e3), _r_();
}
function u() {
_i_("3da:611"), booking.phoneNumberLogin.sendVerificationSms({
onBeforeSend:function() {
_i_("3da:2098"), _.addClass("g-hidden"), r.addClass("g-hidden"), a.removeClass("g-hidden"), c(), _r_();
},
phoneNumber:booking.phoneNumberLogin.getPhone() || n("#phone").val(),
error:d,
success:function(e) {
_i_("3da:2099"), n(".js-verify_phone_number_success_send").removeClass("g-hidden"), _r_();
}
}), _r_();
}
r.on("click", function(e) {
_i_("3da:1048"), e.preventDefault(), n(this).attr("data-add-phone-to-account") ? n.ajax({
url:B.env.b_secure_domain + "/user_settings?aid=" + encodeURIComponent(B.env.b_aid) + "&stype=" + encodeURIComponent(B.env.b_site_type_id) + "&lang=" + encodeURIComponent(B.env.b_lang_for_url),
dataType:"json",
type:"post",
data:JSON.stringify({
phone:n("#phone").val()
}),
success:function(e) {
_i_("3da:2721"), "ok" === e.status && u(), _r_();
},
error:function(e) {}
}) :u(), _r_();
}), n(".js-verify_phone_confirmation_code").on("keyup", function(e) {
_i_("3da:1049"), n(this).val().length > 5 && (booking.phoneNumberLogin.getPhone() || n("#phone").length && n("#phone").val().length) ? n(".js-send_verification_code_submit").removeClass("b-button_disabled").removeAttr("disabled") :n(".js-send_verification_code_submit").addClass("b-button_disabled").attr("disabled", "disabled"), _r_();
}), n(".js-verify_phone_form").on("submit", function(e) {
_i_("3da:1050"), e.preventDefault(), booking.phoneNumberLogin.checkSmsVerificationCode({
onBeforeSend:function() {
_i_("3da:2477"), _.addClass("g-hidden"), _r_();
},
phoneNumber:booking.phoneNumberLogin.getPhone(),
verificationCode:n(".js-verify_phone_confirmation_code").val(),
error:d,
success:function() {
_i_("3da:2478"), n(".js-user-access-form--signin input[name=username]").val(booking.phoneNumberLogin.getPhone()), n(".js-user-access-form--signin input[name=password]").val(booking.phoneNumberLogin.getPassword()), n(".js-user-access-form--signin").submit(), _r_();
}
}), _r_();
}), n(".js-phone_number_login_close").on("click", function(e) {
_i_("3da:1051"), n(".form-section", s).addClass("form-hidden-section").removeClass("form-shown-section"), n(".user_access_signin_menu").removeClass("form-hidden-section").addClass("form-shown-section"), _r_();
}), n(".js-reset_password_by_phone_form").on("submit", function(e) {
_i_("3da:1052"), e.preventDefault(), window.location = "" + B.env.b_secure_domain + "/login" + B.env.b_query_params_with_lang + "&username=" + booking.phoneNumberLogin.getPhone() + "&reset_hash=" + n(".js-reset_by_phone_hash").val() + "&op=changepw&fbaddpw=0&go_back_url=https%3A%2F%2Fsecure.booking.com%2Fmydashboard." + B.env.b_selected_language + ".html", _r_();
}), booking.phoneNumberLogin && (booking.phoneNumberLogin.desktop = {}, booking.phoneNumberLogin.desktop.showLightbox = function(e) {
_i_("3da:1662"), n(".js-verify_phone_number").text(booking.phoneNumberLogin.getPhone()), n(".form-section", s).addClass("form-hidden-section").removeClass("form-shown-section"), "verify" === e ? n(".user_access_verify_phone_menu", s).removeClass("form-hidden-section").addClass("form-shown-section") :"reminder-sent-mobile" === e && n(".reset_password_by_phone_sent", s).removeClass("form-hidden-section").addClass("form-shown-section"), _r_();
}), _r_();
}), function(e) {
_i_("3da:275");
var t = !1;
if ("function" == typeof define && define.amd && (define(e), t = !0), "object" == typeof exports && (module.exports = e(), t = !0), !t) {
var i = window.Cookies, n = window.Cookies = e();
n.noConflict = function() {
return _i_("3da:1666"), window.Cookies = i, _r_(n);
};
}
_r_();
}(function() {
_i_("3da:274");
function e() {
_i_("3da:612");
for (var e = 0, t = {}; e < arguments.length; e++) {
var i = arguments[e];
for (var n in i) t[n] = i[n];
}
return _r_(t);
}
function t(i) {
_i_("3da:613");
function n(t, r, a) {
_i_("3da:1053");
var o;
if ("undefined" == typeof document) return _r_();
if (arguments.length > 1) {
if (a = e({
path:"/"
}, n.defaults, a), "number" == typeof a.expires) {
var _ = new Date();
_.setMilliseconds(_.getMilliseconds() + 864e5 * a.expires), a.expires = _;
}
a.expires = a.expires ? a.expires.toUTCString() :"";
try {
o = JSON.stringify(r), /^[\{\[]/.test(o) && (r = o);
} catch (s) {}
r = i.write ? i.write(r, t) :encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape);
var l = "";
for (var d in a) {
if (!a[d]) continue;
if (l += "; " + d, a[d] === !0) continue;
l += "=" + a[d];
}
return _r_(document.cookie = t + "=" + r + l);
}
t || (o = {});
for (var c = document.cookie ? document.cookie.split("; ") :[], u = /(%[0-9A-Z]{2})+/g, h = 0; h < c.length; h++) {
var f = c[h].split("="), p = f.slice(1).join("=");
'"' === p.charAt(0) && (p = p.slice(1, -1));
try {
var g = f[0].replace(u, decodeURIComponent);
if (p = i.read ? i.read(p, g) :i(p, g) || p.replace(u, decodeURIComponent), this.json) try {
p = JSON.parse(p);
} catch (s) {}
if (t === g) {
o = p;
break;
}
t || (o[g] = p);
} catch (s) {}
}
return _r_(o);
}
return n.set = n, n.get = function(e) {
return _i_("3da:1663"), _r_(n.call(n, e));
}, n.getJSON = function() {
return _i_("3da:1664"), _r_(n.apply({
json:!0
}, [].slice.call(arguments)));
}, n.defaults = {}, n.remove = function(t, i) {
_i_("3da:1665"), n(t, "", e(i, {
expires:-1
})), _r_();
}, n.withConverter = t, _r_(n);
}
return _r_(t(function() {}));
}), B.define("component/wechat/wechat_official_account_promotion_popup", function(e, t, i) {
_i_("3da:276");
var n = e("component"), r = e("jquery");
i.exports = n.extend({
init:function() {
_i_("3da:1881");
var e = this;
e.$popupWindow = e.$el.find(".wechat_official_account_promotion_popup__window"), e.$btnClose = e.$el.find(".wechat_official_account_promotion_popup__close"), e.$overlay = e.$el.find(".wechat_official_account_promotion_popup__overlay"), e.$lazyLoadingImages = e.$el.find(".wechat_official_account_promotion_popup__lazy_loading_image"), e.$el.hasClass("wechat_official_account_promotion_popup__hidden") && !e.getCookie() && e.showPopup(), e.$btnClose.on("click", function() {
_i_("3da:2614"), B.et.customGoal("MKMBNLOLOLOdRIXNDbeHEIbLAEeEOXWLBefeDIVVQOBAPTJWe", 1), e.hidePopup(), _r_();
}), e.$overlay.on("click", function() {
_i_("3da:2615"), B.et.customGoal("MKMBNLOLOLOdRIXNDbeHEIbLAEeEOXWLBefeDIVVQOBAPTJWe", 2), e.hidePopup(), _r_();
}), r(document).on("keyup", function(t) {
_i_("3da:2616"), 27 == t.keyCode && (B.et.customGoal("MKMBNLOLOLOdRIXNDbeHEIbLAEeEOXWLBefeDIVVQOBAPTJWe", 3), e.hidePopup()), _r_();
}), _r_();
},
loadImages:function(e) {
_i_("3da:1882"), e.each(function(e, t) {
if (_i_("3da:2617"), !r(t).data("src")) return _r_();
r(t).attr("src", r(t).data("src")), r(t).on("load", function() {
_i_("3da:2909"), r(this).removeAttr("data-src"), _r_();
}), _r_();
}), _r_();
},
showPopup:function() {
_i_("3da:1883");
var e = this;
e.loadImages(e.$lazyLoadingImages), e.$el.removeClass("wechat_official_account_promotion_popup__hidden"), _r_();
},
hidePopup:function() {
_i_("3da:1884");
var e = this;
e.$el.addClass("wechat_official_account_promotion_popup__hidden"), e.setCookie(), _r_();
},
setCookie:function() {
_i_("3da:1885"), Cookies.set("wechat_official_account_promotion_popup__closed", 1, {
expires:365
}), _r_();
},
getCookie:function() {
return _i_("3da:1886"), _r_(Cookies.get("wechat_official_account_promotion_popup__closed"));
}
}), _r_();
}), B.define("async-css-style", function(e, t, i) {
"use strict";
_i_("3da:277");
var n = e("promise"), r = window.document;
function a(e) {
if (_i_("3da:614"), "object" != typeof e) throw new Error("async-css: .load() expects options object");
var t = {
href:"",
media:"all",
after:""
};
if (e = Object.assign({}, t, e), e.href = e.href || e.path, "string" != typeof e.href || 0 === e.href.length) throw new Error("async-css: href or path should be defined.");
return _r_(o(e.href));
}
function o(e) {
return _i_("3da:615"), _r_(new n(function(t, i) {
_i_("3da:1667"), _(e, function(e) {
_i_("3da:2479");
var n, r = s();
switch (e.status) {
case 200:
n = document.createElement("style"), n.innerHTML = e.responseText, r.parentNode.insertBefore(n, r.nextSibling), t();
break;

default:
i();
}
_r_();
}), _r_();
}));
}
function _(e, t) {
_i_("3da:616");
var i = new XMLHttpRequest();
i.open("GET", e), i.onreadystatechange = function() {
_i_("3da:1668"), i.readyState === XMLHttpRequest.DONE && t(i), _r_();
}, i.send(), _r_();
}
function s(e) {
_i_("3da:617");
var t = r.getElementsByTagName("head")[0], i = (r.body || t).childNodes, n = i[i.length - 1];
return _r_(n);
}
t.load = a, _r_();
}), B.define("async-css-link", function(e, t, i) {
"use strict";
_i_("3da:278");
var n = e("promise"), r = window.document;
function a(e) {
if (_i_("3da:618"), "object" != typeof e) throw new Error("async-css: .load() expects options object");
var t = {
href:"",
media:"all",
after:""
};
if (e = Object.assign({}, t, e), e.href = e.href || e.path, "string" != typeof e.href || 0 === e.href.length) throw new Error("async-css: href or path should be defined.");
var i = _(e.after), n = d(e.href);
return c(function() {
_i_("3da:1669"), i.parentNode.insertBefore(n, i.nextSibling), _r_();
}), _r_(o(n, e));
}
function o(e, t) {
return _i_("3da:619"), _r_(new n(function(i, n) {
_i_("3da:1670"), s(e, t, function() {
_i_("3da:2480"), i(), _r_();
}, function() {
_i_("3da:2481"), n(), _r_();
}), _r_();
}));
}
function _(e) {
_i_("3da:620");
var t = r.getElementsByTagName("head")[0], i = (r.body || t).childNodes, n = i[i.length - 1];
return "main" === e && "undefined" != typeof t && (n = l(n, t)), _r_(n);
}
function s(e, t, i, n) {
_i_("3da:621"), e.addEventListener && (e.addEventListener("load", i), e.addEventListener("error", n)), e.attachEvent && (e.attachEvent("onload", i), e.attachEvent("onerror", n)), _r_();
}
function l(e, t) {
_i_("3da:622");
for (var i = t.getElementsByTagName("link"), n = 0; n < i.length; n++) if ("1" === i[n].getAttribute("data-main-css")) return _r_(i[n]);
return _r_(e);
}
function d(e) {
_i_("3da:623");
var t = r.createElement("link");
return t.rel = "stylesheet", t.href = e, _r_(t);
}
function c(e) {
if (_i_("3da:624"), r.body) return _r_(e());
window.setTimeout(function() {
_i_("3da:1671"), c(e), _r_();
}, 100), _r_();
}
t.load = a, _r_();
}), B.define("async-css", function(e, t, i) {
"use strict";
_i_("3da:279"), "isApplicationInstalled" in navigator ? t.load = e("async-css-style").load :t.load = e("async-css-link").load, _r_();
}), B.define("loadscript", function(e, t, i) {
_i_("3da:280");
var n = e("promise");
function r(e) {
return _i_("3da:625"), _r_(new n(function(t, i) {
_i_("3da:1672");
var n = document.createElement("script");
n.onload = n.onreadystatechange = function(e, i) {
_i_("3da:2618"), (i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, i || t()), _r_();
}, n.onerror = i, n.type = "text/javascript", n.src = e;
var r = document.getElementsByTagName("script")[0];
r.parentNode.insertBefore(n, r), _r_();
}));
}
function a(e, t) {
_i_("3da:626");
var i = a._urls[e] || e;
if (!i) throw new Error("Must provide a URL.");
if (i === e && -1 === i.indexOf("/")) throw new Error('"' + i + "\" doesn't seem like a script URL.");
return _r_(r(i, t));
}
a._urls = {}, a.add = function(e, t) {
_i_("3da:1055");
var i = a._urls;
$.isPlainObject(e) ? $.extend(i, e) :i[name] = t, _r_();
}, i.exports = a, _r_();
}), B.define("async-loader", function(e, t, i) {
"use strict";
_i_("3da:281");
var n = e("loadscript"), r = e("async-css"), a = e("promise"), o = {}, _ = B.env || {};
function s(e) {
if (_i_("3da:627"), "object" != typeof e) throw new Error("async-loader: load() expects an object!");
var t = Object.keys(e).map(function(t) {
_i_("3da:1887");
var i = e[t], n = i;
if ("string" == typeof n && n.length > 0 && (i = {
path:n
}), "object" != typeof i || !i.hasOwnProperty("path")) throw new Error("async-loader: .load() invalid argument!");
return _r_(d(t, i));
});
return _r_(a.all(t));
}
function l(e) {
_i_("3da:628");
var t;
if (!_.hasOwnProperty("asyncLoader") || !_.asyncLoader.hasOwnProperty(e)) throw new Error("async-loader: could not find file path in B.env.asyncLoader");
if (t = _.asyncLoader[e], "string" != typeof t || 0 === t.length) throw new Error("async-loader: invalid path for " + e);
return _r_(t);
}
function d(e, t) {
_i_("3da:629");
var i = t.path = l(t.path);
return o[i] || (o[i] = c(e, t)), _r_(o[i]);
}
function c(e, t) {
_i_("3da:630");
var i;
switch (e) {
case "css":
return i = r.load(t), i["catch"](function() {
_i_("3da:2100"), B.squeak && B.squeak("OdeFAAOZOGaDIARMGZYfNXMDDBXe"), _r_();
}), _r_(i);

case "js":
return i = n(t.path), i["catch"](function() {
_i_("3da:2101"), B.squeak && B.squeak("OdeFAAOZOGaDIARMGZGTXMDDBXe"), _r_();
}), _r_(i);

default:
throw new Error("async-loader: file type [" + e + "] not supported!");
}
_r_();
}
function u(e) {
if (_i_("3da:631"), "string" == typeof e && e.length > 0 && (e = {
path:e
}), "object" != typeof e || !("path" in e)) throw new Error("async-loader: .css() invalid argument!");
return _r_(d("css", e));
}
function h(e) {
if (_i_("3da:632"), "string" == typeof e && e.length > 0 && (e = {
path:e
}), "object" != typeof e || !("path" in e)) throw new Error("async-loader: .js() invalid argument!");
return _r_(d("js", e));
}
function f(e) {
if (_i_("3da:633"), "string" != typeof e || 0 === e.length) throw new Error("async-loader: registerPath() invalid argument");
if (!_.hasOwnProperty("asyncLoader")) throw new Error("async-loader: B.env.asyncLoader is not defined");
return _.asyncLoader.hasOwnProperty(e) || (_.asyncLoader[e] = e), _r_(e);
}
t.load = s, t.css = u, t.js = h, t.registerPath = f, _r_();
}), B.define("defaultsjs:modules/lib/assistant/overview/overview.js", function(e, t, i) {
_i_("3da:282");
var n, r, a, o = e("jquery"), _ = e("promise"), s = B.env.b_messaging_assistant_overview_url || "/get_ba_overview", l = B.env.b_messaging_url || "/messages2.html", d = 6e4, c = [];
function u(e) {
return _i_("3da:634"), a = Object.assign({}, e, {
b_messaging_url:l,
reservations:e.reservations.map(function(e) {
return _i_("3da:2482"), _r_(Object.assign({}, e, {
fe_messaging_url:l + ";bn=" + e.reservation_id
}));
})
}), _r_(a);
}
function h(e) {
return _i_("3da:635"), n = null, _r_(e);
}
function f(e) {
return _i_("3da:636"), c.length && (r = window.setTimeout(g, d)), _r_(e);
}
function p(e) {
return _i_("3da:637"), c.forEach(function(t) {
_i_("3da:1673"), t(e), _r_();
}), _r_(e);
}
function g() {
return _i_("3da:638"), n ? _r_(n) :(n = _.resolve(o.getJSON(s)).then(u).then(h).then(f).then(p)["catch"](function(e) {
return _i_("3da:2235"), _r_(_.reject("failed to fetch overview"));
}), _r_(n));
}
function m(e) {
_i_("3da:639");
var t = c.length;
return c.push(e), 1 === c.length && 0 === t && g(), a && e(a), _r_(function() {
_i_("3da:1159");
for (var t = 0; t < c.length; t++) c[t] === e && (c.splice(t, 1), c.length || window.clearTimeout(r));
_r_();
});
}
i.exports = {
subscribe:m,
fetchOnce:g
}, _r_();
}), B.define("assistant/tracker", function(e, t, i) {
_i_("3da:283");
var n = e("ga-tracker-base").trackEvent, r = "Messaging V2", a = {
"bk_exit menu":"BK Exit Menu",
bk_wall:"BK Wall",
entry_point:"Entry Point",
welcome_screen:"Welcome screen"
};
i.exports.actions = a, i.exports.trackAssistantEvent = n.bind(null, r), i.exports.trackAssistantEntryPoint = n.bind(null, r, a.entry_point), i.exports.trackAssistantWelcomeScreen = n.bind(null, r, a.welcome_screen), _r_();
}), B.define("component/assistant/entrypoint", function(e, t, i) {
_i_("3da:284");
var n, r = e("component"), a = e("jquery"), o = e("defaultsjs:modules/lib/assistant/overview/overview.js").subscribe, _ = e("async-loader"), s = "assistant-entry-point_has-unread", l = ".assistant-entry-point__text";
function d(t) {
_i_("3da:640");
var i = e("lightbox"), r = {
customWrapperClassName:"assistant-modal-wrapper",
preventBodyScroll:!0,
topMargin:50,
bottomMargin:50
};
n = a(B.jstmpl("assistant_modal").render(t)), i.show(n, r), _r_();
}
function c(e) {
if (_i_("3da:641"), !e) return _r_(null);
if ("string" != typeof e) return _r_(null);
var t = /[;&]bn=(\d*)/, i = e.match(t);
return _r_(i && i[1] ? i[1] :null);
}
function u(e) {
_i_("3da:642");
var t = e.attr("data-messaging-url") || e.attr("href");
return _r_({
url:t,
privacyPolicyUrl:e.attr("data-privacy-policy-url"),
messengerUrl:e.attr("data-messenger-link"),
text:e.find(l).text(),
modal:Boolean(e.attr("data-messages-is-modal")),
reservations:[],
selectedReservationId:c(t),
consistentText:Boolean(e.attr("data-consistent-text"))
});
}
function h(e) {
_i_("3da:643");
var t = e.reservations, i = e.selectedReservationId;
if (!i) return _r_(t.reduce(function(e, t) {
return _i_("3da:2102"), Boolean(t.has_unread) && (e += 1), _r_(e);
}, 0));
for (var n = 0; n < t.length; n++) if (String(t[n].reservation_id) === i) return _r_(Boolean(t[n].has_unread));
return _r_(!1);
}
function f(e) {
if (_i_("3da:644"), e.consistentText) return _r_(e.text);
var t = e.reservations, i = e.selectedReservationId, n = !1;
if (i) for (var r = 0; r < t.length; r++) String(t[r].reservation_id) === i && (n = Boolean(t[r].has_unread));
return _r_(n ? B.jstmpl.translations("msg_entry_notification_unread_message") :B.jstmpl.translations("msg_www_ask_a_question"));
}
function p(e) {
_i_("3da:645");
var t = {
url:e.url,
text:f(e),
unread:h(e)
};
return _r_(t);
}
function g(e) {
_i_("3da:646");
var t = {
b_messaging_url:e.url,
privacy_policy_url:this.privacyPolicyUrl,
messenger_link:this.messengerUrl
};
return _r_(t);
}
function m(e, t) {
_i_("3da:647"), e.find(l).text(t.text), e.toggleClass(s, t.unread), e.attr("href", t.url), _r_();
}
i.exports = r.extend({
init:function() {
_i_("3da:1888"), _.css("async_assistant_entrypoint_css");
var e = u(this.$el);
this._defaultText = e.text, o(function(t) {
_i_("3da:2788"), e = Object.assign({}, e, {
reservations:t.reservations
}), m(this.$el, p(e)), _r_();
}.bind(this)), m(this.$el, p(e)), this.$el.on("click", function(t) {
_i_("3da:2619"), e.modal && (t.preventDefault(), d(g(e))), _r_();
}), _r_();
}
}), _r_();
}), B.define("component/assistant/modal-entrypoint", function(e, t, i) {
_i_("3da:285");
var n = e("component/assistant/entrypoint"), r = e("lightbox"), a = e("jquery"), o = e("assistant/tracker").trackAssistantWelcomeScreen, _ = {
customWrapperClassName:"assistant-modal-wrapper",
preventBodyScroll:!0,
topMargin:50,
bottomMargin:50
};
i.exports = n.extend({
renderViews:function() {
_i_("3da:1889"), this.$modal || (this.$modal = a(B.jstmpl("assistant_modal").render({
b_messaging_url:this._url,
privacy_policy_url:this._privacyPolicyUrl,
messenger_link:this._messenger_link
}))), _r_();
},
showModal:function(e) {
_i_("3da:1890"), this.renderViews(), this.$modal.find(".assistant-view").hide(), this.$modal.find(".assistant-view_" + e + "-screen").show(), r.show(this.$modal, _), _r_();
},
showWelcomeScreen:function(e) {
_i_("3da:1891"), o("Shown"), this.showModal("welcome"), B.et.stage("bKeHAcCOWcFAcQNSEbHeFUSeGDPHe", 1), _r_();
},
showLoadingScreen:function() {
_i_("3da:1892"), this.showModal("loading"), _r_();
},
navigateToMessenger:function() {
_i_("3da:1893"), o("Assistant Chosen"), this.showModal("app"), _r_();
}
}), _r_();
}), booking.jstmpl("assistant_modal", function() {
_i_("3da:322");
var e = [ '\n  <div class="assistant-modal-view">\n    <div class="assistant-view assistant-view_app-screen">\n      <iframe\n        width="100%"\n        height="100%"\n        src="', '"\n        class="app-screen_iframe" frameborder="0"\n        id="assistant-iframe"></iframe>\n    </div>\n  </div>\n' ], t = [ "b_messaging_url" ];
return _r_(function(i) {
_i_("3da:1056");
var n = "", r = this.fn;
return n += [ e[0], r.MC(t[0]), e[1] ].join(""), _r_(n);
});
}()), B.define("tooltip", function(e, t, i) {
"use strict";
_i_("3da:286");
var n, r, a = e("event-emitter"), o = e("jquery"), _ = e("jstmpl"), s = 0, l = {}, d = {
position:"top",
arrow:!0,
animation:!0,
customClass:"",
trigger:"hover focus",
hiddenClass:"tltp--hidden",
animationClass:"tltp--animate",
wrapperTemplate:'<div class="tltp tltp--hidden"></div>',
innerTemplate:'<div class="tltp__content"><div class="tltp__image" role="image"></div><div class="tltp__header" role="header"></div><div class="tltp__body" role="body"></div></div>',
latency:0,
rtl:B.env.rtl,
triggerDelays:{
mouseenter:200,
mouseleave:200
},
smartPositioning:!0,
preventDefaultOnClick:!1
}, c = {
booking:d
}, u = c.booking, h = o("body"), f = o(window), p = {
mouseenter:"mouseleave",
focus:"blur",
click:"click"
}, g = /^start|end$/i, m = /^top|bottom$/i, v = /^start|top$/i, b = /^end|bottom$/i, y = [ "top", "bottom", "start", "end", "middle" ], w = [ [ 0, 1, 2, 3 ], [ 1, 0, 2, 3 ], [ 2, 3, 0, 1 ], [ 3, 2, 0, 1 ] ], k = [ [ 2, 4, 3 ], [ 2, 4, 3 ], [ 0, 4, 1 ], [ 0, 4, 1 ] ], C = [ [ 0, 1, 2 ], [ 2, 1, 0 ], [ 0, 1, 2 ], [ 2, 1, 0 ], [ 1, 0, 2 ] ], S = function(e) {
_i_("3da:1057");
var t;
try {
return t = new r(e), _r_(t.api);
} catch (i) {
B.debug("tooltip").error(i);
}
_r_();
}, x = function() {
return _i_("3da:1058"), o.each(l, function(e, t) {
_i_("3da:2103"), t.hide(), _r_();
}), _r_(this);
}, E = function(e) {
return _i_("3da:1059"), _r_(l[e]);
}, M = function(e) {
return _i_("3da:1060"), o.each(l, e), _r_(this);
}, T = function(e, t) {
return _i_("3da:1061"), c[e] = o.extend({}, d, t), _r_(this);
}, N = function(e) {
_i_("3da:1062");
var t = c[e];
return t && (u = t), _r_(this);
}, A = function(e) {
return _i_("3da:1063"), l[e.id] = e, _r_(this);
};
n = {
setup:S,
hideAll:x,
get:E,
each:M,
addPreset:T,
usePreset:N
}, a.extend(n), i.exports = n, r = function() {
_i_("3da:1160");
var e = function(e) {
_i_("3da:2236"), this.options = e, o.isFunction(e.onBeforeInit) && e.onBeforeInit.call(this), this.processOptions(e), this.api = {
id:this.id,
$target:this.$el,
settings:this.settings,
isVisible:o.proxy(this.isVisible, this),
show:o.proxy(this.show, this),
hide:o.proxy(this.hide, this),
toggle:o.proxy(this.toggle, this),
set:o.proxy(this.set, this),
reposition:o.proxy(this.position, this),
destroy:o.proxy(this.destroy, this),
on:o.proxy(this.on, this)
}, A(this.api), this.$el.data("tooltip-instance", this.api), this.triggerEvent("init"), _r_();
};
return e.prototype.processOptions = function(e) {
_i_("3da:2237");
var t = c[e.preset] || u, i = this.settings = o.extend({}, t, e);
if (this.id = i.id || ++s, l[this.id]) throw new Error('A tooltip with the same id "' + this.id + '" already exists.');
if (this.$el = o(i.target).first(), this.el = this.$el[0], !(i.title || i.text || i.content || i.contentTemplate || i.contentTarget)) throw new Error('No content for the tooltip. Please use any of these options: "content", "template" or "content-target".');
this.namespace = ".tooltip." + this.id, this.setupPosition(), this.setupEvents(), this.setupTriggers(), _r_();
}, e.prototype.setupTriggers = function() {
_i_("3da:2238");
var e = this.settings.triggerShow ? this.settings.triggerShow.split(/\s+/) :[], t = this.settings.triggerHide ? this.settings.triggerHide.split(/\s+/) :[], i = !e.length && this.settings.trigger ? this.settings.trigger.split(/\s+/) :[], n = this, r = function(e) {
return _i_("3da:2789"), _r_(o.grep(e, function(t, i) {
return _i_("3da:2954"), _r_(i === o.inArray(t, e));
}));
};
o.each(i, function(i, n) {
_i_("3da:2790");
var r;
"hover" === n && (n = "mouseenter"), r = p[n], e.push(n), r && t.push(r), _r_();
}), e = r(e), t = r(t), o.each(e, function(e, i) {
_i_("3da:2791");
var r, a = o.inArray(i, t);
r = i + n.namespace, a > -1 ? (n.$el.on(r, o.proxy(n.toggle, n)), t.splice(a, 1)) :(n.$el.on(r, o.proxy(n.show, n)), "click" == i ? n.$el.on(r, o.proxy(n._showOnClick, n)) :n.$el.on(r, o.proxy(n.show, n))), _r_();
}), o.each(t, function(e, t) {
_i_("3da:2792"), n.$el.on(t, o.proxy(n.hide, n)), _r_();
}), _r_();
}, e.prototype.setupPosition = function() {
_i_("3da:2239");
var e, t, i = this.settings.position;
if (i = i.replace(/left/g, "start"), i = i.replace(/right/g, "end"), this.settings.rtl && (i = i.replace(g, function(e) {
return _i_("3da:2938"), _r_("end" === e ? "start" :"end");
})), i = o.trim(i).split(/\s+/), e = this.placement = i[0], t = i[1], this.placementAxis = g.test(e) ? "x" :"y", g.test(t) || m.test(t) || (t = "middle"), this.alignment = t, !g.test(e) && !m.test(e)) throw new Error("The tooltip has to be aligned either on top, bottom, left or right.");
_r_();
}, e.prototype.setupEvents = function() {
_i_("3da:2240");
var e = /^on[A-Z].+/;
o.each(this.settings, o.proxy(function(t, i) {
if (_i_("3da:2870"), !e.test(t)) return _r_();
var n = t[2].toLowerCase() + t.substring(3);
this.on("tooltip:" + n + ":" + this.id, o.proxy(i, this)), _r_();
}, this)), _r_();
}, e.prototype.addArrow = function(e, t) {
if (_i_("3da:2241"), this.$tip.removeClass(this.arrowClass), !this.settings.arrow) return _r_();
var i = "tltp--" + e;
"middle" !== t && (i = i + "-" + t), this.$tip.addClass(i), this.arrowClass = i, _r_();
}, e.prototype.createTooltipNode = function() {
_i_("3da:2242"), this.triggerEvent("beforeCreateTooltipNode");
var e, t = this.settings, i = this.$tip = o(t.wrapperTemplate);
return t.icon || t.image || t.title || t.text ? e = this.buildLayout(t) :t.content ? e = t.content :t.contentTemplate ? e = _(t.contentTemplate).render(t.contentTemplateData) :(e = o(t.contentTarget), e.is("script") && (e = o(e.html()))), i.find('[role="content"]').andSelf().last().append(e), i.addClass(this.settings.customClass), this.settings.animation && i.addClass(this.settings.animationClass), h.append(i), this.api.$tooltip = i, this.triggerEvent("createTooltipNode"), _r_(this);
}, e.prototype.triggerByEvent = function(e, t) {
_i_("3da:2243");
var i = this.settings.delay;
void 0 === i && (i = this.settings.triggerDelays[e.type]), clearTimeout(this.timeout), this.timeout = setTimeout(o.proxy(t, this), i), _r_();
}, e.prototype.isVisible = function() {
return _i_("3da:2244"), _r_(this.$tip && (!this.$tip.hasClass(this.settings.hiddenClass) || this.$tip.hasClass(this.settings.visibleClass)));
}, e.prototype.triggerEvent = function(e) {
_i_("3da:2245");
var t = o.Event("tooltip:" + e, {
tooltip:this.api
}), i = o.Event(t.type + ":" + this.id, {
tooltip:this.api
});
n.emit(t.type, t, this), this.$el.trigger(t), n.emit(i.type, i, this), this.$el.trigger(i), _r_();
}, e.prototype.on = function(e, t) {
return _i_("3da:2246"), this.$el.on(e, t), _r_(this.api);
}, e.prototype.toggle = function() {
return _i_("3da:2247"), this.isVisible() ? this.hide() :this.show(), _r_(this.api);
}, e.prototype.show = function() {
_i_("3da:2248");
var e = this;
if (this.isVisible()) return _r_(this.api);
return this.triggerEvent("beforeShow"), this.$tip || this.createTooltipNode(), this.position(), clearTimeout(this.timeout), this.showTimer || (this.showTimer = setTimeout(function() {
_i_("3da:2939"), e.$tip.removeClass(e.settings.hiddenClass), e.$tip.addClass(e.settings.visibleClass), _r_();
}, this.settings.latency)), this.settings.animation && this.$tip.css("transition") ? this.$tip.one("transitionend", o.proxy(this.triggerEvent, this, "show")) :this.triggerEvent("show"), _r_(this.api);
}, e.prototype._showOnClick = function(e) {
_i_("3da:2249"), this.settings.preventDefaultOnClick && e.preventDefault(), this.show(), _r_();
}, e.prototype.hide = function() {
if (_i_("3da:2250"), this.showTimer && (this.showTimer = clearTimeout(this.showTimer)), !this.isVisible()) return _r_(this.api);
return this.triggerEvent("beforeHide"), clearTimeout(this.timeout), this.$tip.addClass(this.settings.hiddenClass), this.$tip.removeClass(this.settings.visibleClass), this.settings.animation && this.$tip.css("transition") ? this.$tip.one("transitionend", o.proxy(this.triggerEvent, this, "hide")) :this.triggerEvent("hide"), _r_(this.api);
}, e.prototype.position = function(e, t) {
_i_("3da:2251"), this.triggerEvent("beforePosition"), e = e || this.placement, t = t || this.alignment;
var i, n, r, a, o, _ = this.$el, s = this.$tip, l = this.buildInsideWindowFn(s.outerWidth(), s.outerHeight(), f.scrollLeft(), f.scrollTop(), f.width(), f.height()), d = y.indexOf(e), c = y.indexOf(t), u = w[d], h = C[c], p = -1;
e:for (var g = 0; 4 > g; g++) {
d = u[g], e = y[d];
for (var m = 0; 3 > m; m++) if (c = h[m], t = y[k[d][c]], i = this.calcCoords(e, t, _, s), n = l(i.left, i.top), n > p && (p = n, r = i, a = e, o = t), !this.settings.smartPositioning || 1 === n) break e;
}
if (this.coords && this.coords.left === r.left && this.coords.top === r.top) return _r_(this.api);
return this.settings.animation && this.$tip.removeClass(this.settings.animationClass), this.coords = r, s.css(r), this.addArrow(a, o), s.outerWidth(), this.settings.animation && this.$tip.addClass(this.settings.animationClass), this.triggerEvent("position"), _r_(this.api);
}, e.prototype.set = function(e, t) {
_i_("3da:2252");
var i = {};
return "object" === o.type(e) ? i = e :i[e] = t, o.extend(this.settings, i), this.setupPosition(), this.$tip && (this.$tip.toggleClass(this.settings.animationClass, this.settings.animation), this.position()), _r_(this.api);
}, e.prototype.destroy = function() {
_i_("3da:2253"), this.triggerEvent("beforeDestroy"), clearTimeout(this.timeout), this.$el.off(this.namespace), this.$el.removeData("tooltip-instance"), this.$tip && this.$tip.remove(), delete l[this.id], _r_();
}, e.prototype.calcCoords = function(e, t, i, n) {
_i_("3da:2254");
var r = i.offset(), a = {}, o = "top", _ = "outerHeight", s = "left", l = "outerWidth";
return g.test(e) && (o = "left", _ = "outerWidth", s = "top", l = "outerHeight"), v.test(e) ? a[o] = r[o] - n[_]() :a[o] = r[o] + i[_](), v.test(t) ? a[s] = r[s] :b.test(t) ? a[s] = r[s] + i[l]() - n[l]() :a[s] = r[s] + i[l]() / 2 - n[l]() / 2, _r_(a);
}, e.prototype.buildInsideWindowFn = function(e, t, i, n, r, a) {
_i_("3da:2255");
var o = i + r, _ = n + a;
return _r_(function(r, a) {
_i_("3da:2723");
var s = r + e, l = a + t, d = Math.max(i, r), c = Math.min(o, s), u = Math.max(n, a), h = Math.min(_, l), f = (s - r) * (l - a), p = Math.max(0, c - d) * Math.max(0, h - u);
return _r_(p / f);
});
}, e.prototype.buildLayout = function(e) {
_i_("3da:2256");
var t = o(e.innerTemplate), i = o('[role="image"]', t);
o('[role="header"]', t).append(e.title).filter(":empty").remove(), o('[role="body"]', t).andSelf().last().append(e.text).filter(":empty").remove(), e.image ? i.append(o('<img src="' + e.image + '">')) :e.icon ? i.append(o('<i class="bicon bicon-' + e.icon + '"></i>')) :i.remove();
var n = new RegExp("(<script type=['\"]track_copy['\"] data-hash=['\"](\\w+)['\"]></script>)"), r = n.exec(e.text), a = r && r[2];
return a && B.et.stage(a, 1), _r_(t);
}, _r_(e);
}(), _r_();
}), B.define("component/tooltip", function(e, t, i) {
"use strict";
_i_("3da:287");
var n = e("component"), r = e("jquery"), a = e("tooltip"), o = function(e) {
_i_("3da:1064");
var t = {}, i = e.data();
return r.each(i, function(e, i) {
_i_("3da:2104");
var n;
if (e.length < 8 || 0 !== e.indexOf("tooltip")) return _r_();
e = e.substring(7), n = e[0].toLowerCase() + e.slice(1), t[n] = i, _r_();
}), t.target = e, _r_(t);
}, _ = function() {
_i_("3da:1065"), this.tooltip = a.setup(o(this.$el)), _r_();
};
i.exports = n.extend({
init:_
}), _r_();
}), B.when({
events:"ready",
condition:"ar" == B.env.b_lang
}).run(function() {
_i_("3da:288");
var e = document.createElement("div");
e.style["float"] = "left", e.style.position = "absolute", e.style.left = "-9999px", e.innerHTML = "عربي بوكينج", document.body.appendChild(e), e.style.fontFamily = '"Geeza Pro", "Tahoma", BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif';
var t = e.clientWidth;
e.style.fontFamily = '"Noto Naskh Arabic", "Geeza Pro", "Tahoma", BlinkMacSystemFont, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif';
var i = e.clientWidth;
document.body.removeChild(e), t != i && B.et.stage("YdALOLOLOTWOLWKODHbFIRZZCOYZXJBXPNQbedWRe", 1), _r_();
}), function() {
"use strict";
_i_("3da:289"), B.when({
events:"load",
action:[ "confirmation", "myreservations", "searchresults", "index", "hotel" ]
}).run(function(e) {
_i_("3da:1066");
var t, i, n, r, a, o, _, s, l = B.require("jquery"), d = 0, c = 0, u = 0, h = 0;
if (!l(".mltt").length) return _r_(!1);
var f = B.require("ga-tracker");
if (r = l(".js__mltt__track"), l(".js__mltt__track > *").each(function(e) {
_i_("3da:2105"), h += l(this).outerWidth(), _r_();
}), a = l(".js__mltt__viewport"), s = a.width(), h > s && (B.env.rtl ? (o = "right", i = l(".js__mltt__move_right"), n = l(".js__mltt__move_left")) :(o = "left", n = l(".js__mltt__move_right"), i = l(".js__mltt__move_left")), _ = s - i.outerWidth() - n.outerWidth(), c = s - h, i.show(), r.width(h + "px"), i.click(function(e) {
_i_("3da:2483"), e.preventDefault(), e.stopPropagation(), d -= _, d = Math.max(d, c), r.css(o, d), n.show(), d == c && l(this).hide(), f.trackEvent("MLT", "Timeline", "moveToEnd"), _r_();
}), n.click(function(e) {
_i_("3da:2484"), e.preventDefault(), e.stopPropagation(), d += _, d = Math.min(d, u), r.css(o, d), i.show(), d == u && l(this).hide(), f.trackEvent("MLT", "Timeline", "moveToStart"), _r_();
}), t = l(".js__mltt__scroll_here"), t.length)) {
if (B.env.rtl) {
var p = _ + i.filter(":visible").outerWidth(), g = h - t.position().left;
if (g > p) var m = d - h + t.position().left + t.outerWidth() + 100;
} else {
var p = _ + i.filter(":visible").outerWidth(), g = t.position().left + t.outerWidth();
if (g > p) var m = d - t.position().left + 100;
}
m && (d = Math.max(c, m), r.css(o, d), n.show(), d == c && i.hide());
}
_r_();
}), _r_();
}(), function() {
"use strict";
_i_("3da:290"), B.when({
events:"load",
action:[ "confirmation", "myreservations", "searchresults", "index", "hotel" ]
}).run(function(e) {
_i_("3da:1067");
var t = B.require("jquery");
if (!t(".mltt").length) return _r_(!1);
function i() {
_i_("3da:1674"), t(".mltt__dropdown--open").removeClass("mltt__dropdown--open"), t("body").off("click", i), _r_();
}
t(".js__mltt__dropdown__trigger").on("click", function(e) {
_i_("3da:2106"), e.stopPropagation(), i();
var n = "#" + t(this).data("mltdroptown-id"), r = t(this).offset().left - t(".js__mltt__viewport").offset().left;
t(n).css("left", r).addClass("mltt__dropdown--open"), t("body").on("click", i), _r_();
}), t(".mltt__button, .js__mltt__dropdown__close").on("click", i), _r_();
}), _r_();
}(), B.when({
events:"ready",
condition:"www" === B.env.b_site_type && B.env.auth_level > 0
}).run(function(e) {
_i_("3da:291"), B.events.once("header:notifications:shown", function() {
_i_("3da:1068"), B.et.stage("adUdWZUBPKBcTZQeOaeZdCCATAJRXDHT", 1), _r_();
}), _r_();
}), B.when({
events:"ready",
condition:B.env.b_aid_loss_report
}).run(function(e) {
_i_("3da:292");
var t = B.env.b_nonsecure_hostname, i = B.env.b_secure_domain, n = "HWEGHRdebWRRKecNFVKe", r = !1;
function a(e) {
_i_("3da:648");
var t = e.nodeName.toLowerCase() || "";
if ("html" == t || "body" == t || ~t.indexOf("document")) return _r_("");
return e.className && (t += '@c="' + e.className + '"'), e.id && (t += '@i="' + e.id + '"'), _r_("/" + t);
}
function o(e) {
_i_("3da:649");
for (var t = a(e), i = 0; (e = e.parentNode) && 20 > i; ) t = a(e) + t, i++;
return _r_(t);
}
function _(e) {
if (_i_("3da:650"), !e || !e.href) return _r_(!1);
if ((0 == e.href.indexOf(t) || 0 == e.href.indexOf(i)) && -1 == e.href.indexOf("aid_l=")) return _r_(!0);
return _r_(!1);
}
function s(e) {
_i_("3da:651");
var t = e.href;
return _r_(t.match(/aid=([^&\;\#]+)/gi));
}
function l(e) {
_i_("3da:652");
var t = s(e), i = e.href, n = !1;
if (t && t.length || (n = !0, r = !0), n) {
var a = i.split("#"), _ = o(e);
a[0] += (~a[0].indexOf("?") ? "&" :"?") + "aid_l=" + encodeURIComponent(_), e.href = a[1] ? a.join("#") :a[0];
}
_r_();
}
var d = B.env.b_aid, c = B.env.b_default_aid;
if (d == c) return _r_();
setTimeout(function() {
_i_("3da:1069");
try {
var e, t = document.getElementsByTagName("a");
for (e = 0; e < t.length; e++) {
var i = t[e];
_(i) && l(i);
}
r && B.et.customGoal(n, 1);
} catch (a) {}
_r_();
}, 3e3), _r_();
}), booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.main.run = !0);