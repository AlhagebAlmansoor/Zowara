var _i_ = this._i_ || function() {}, _r_ = this._r_ || function(t) {
return t;
};

booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.calendar2 = {
loaded:!0,
run:!1
}), booking.ensureNamespaceExists("calendar2"), function(t, e, i, n, a) {
_i_("a41:1"), i.ONE_DAY = 864e5, i.SUNDAY_FIRST = !0, i.DAYS_IN_MONTH = [ 31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31 ], i.DAY_STATES = {
disabled:!0,
weekend:!0,
selected:!0,
hilighted:!0,
"in-range":!0,
"first-in-range":!0,
"last-in-range":!0,
today:!0
};
var r = 1;
i.uid = function() {
return _i_("a41:26"), r++, _r_("calendar_" + r);
}, i.today = function() {
_i_("a41:27");
var e = new Date(1e3 * t.env.b_timestamp), n = new Date(), a = Math.abs(e - n) > i.ONE_DAY;
return _r_(a ? new Date(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), 0, 0, 0, 0) :new Date(n.getFullYear(), n.getMonth(), n.getDate(), 0, 0, 0, 0));
}, i.minToday = function() {
_i_("a41:28");
var t = new Date(Date.now() - 396e5);
return _r_(new Date(Date.UTC(t.getUTCFullYear(), t.getUTCMonth(), t.getUTCDate(), 0, 0, 0, 0)));
}, i.dayId = function(t, e, i) {
return _i_("a41:29"), _r_(Date.UTC(t, e, i, 0, 0, 0, 0));
}, i.monthId = function(t, e) {
return _i_("a41:30"), _r_("M" + Date.UTC(t, e, 1, 0, 0, 0, 0));
}, i.nextMonthId = function(t) {
if (_i_("a41:31"), "string" != typeof t) return _r_(!1);
var n = t.split("-"), a = e.parseInt(n[0]), r = e.parseInt(n[1]), s = new Date(r, a + 1, 1);
return _r_(i.monthId(s));
}, i.previousMonthId = function(t) {
_i_("a41:32");
var n = t.split("-"), a = e.parseInt(n[0]), r = e.parseInt(n[1]), s = new Date(r, a - 1, 1);
return _r_(i.monthId(s));
}, i.dayFactory = function(t, e) {
_i_("a41:33");
var e = e || {};
return e.isWeekend = 0 === t.getDay() || 6 === t.getDay(), e.isDisabled = e.startDate && t < e.startDate || e.endDate && t > e.endDate || e.type && "checkin" === e.type && Math.abs(t - e.endDate) <= i.ONE_DAY, _r_(new i.Day(t, e));
}, i.weekFactory = function(t, e) {
return _i_("a41:34"), _r_(new i.Week(e));
}, i.monthFactory = function(t, e, n) {
return _i_("a41:35"), _r_(new i.Month(t, e, n));
}, i.yearFactory = function(t, e) {
return _i_("a41:36"), _r_(new i.Year(t, e));
}, i.getNumberOfDaysInMonth = function(t, e) {
_i_("a41:37");
var n = i.DAYS_IN_MONTH[t];
return 1 === t && (e % 4 == 0 && e % 100 != 0 || e % 400 == 0) && (n = 29), _r_(n);
}, t.calendar2.WRAPPER_CLASS = "c2-wrapper", t.calendar2.STATES = {
HIDDEN:"hidden",
RANGE_SELECTED:"range-highlighted"
}, _r_();
}(booking, booking.tools, booking.calendar2, $), B.define("hijri-calendar", function() {
_i_("a41:2");
var t = 10631 / 30, e = 1948084, i = .1335, n = [ "ar_islamic_calendar_muharram", "ar_islamic_calendar_safar", "ar_islamic_calendar_rabiul_awwal", "ar_islamic_calendar_rabiul_akhir", "ar_islamic_calendar_jumadal_ula", "ar_islamic_calendar_jumadal_ukhra", "ar_islamic_calendar_rajab", "ar_islamic_calendar_shaban", "ar_islamic_calendar_ramadan", "ar_islamic_calendar_shawwal", "ar_islamic_calendar_dhul_qaadah", "ar_islamic_calendar_dhul_hijjah" ];
function a(a) {
_i_("a41:13");
var r = a.day, s = a.month, o = a.year, _ = s + 1, h = o;
3 > _ && (h -= 1, _ += 12);
var d = Math.floor(h / 100), l = 2 - d + Math.floor(d / 4);
1583 > h && (l = 0), 1582 === h && (_ > 10 && (l = -10), 10 == _ && (l = 0, r > 4 && (l = -10)));
var c = Math.floor(365.25 * (h + 4716)) + Math.floor(30.6001 * (_ + 1)) + r + l - 1524;
l = 0, c > 2299160 && (d = Math.floor((c - 1867216.25) / 36524.25), l = 1 + d - Math.floor(d / 4));
var u = c + l + 1524, f = Math.floor((u - 122.1) / 365.25), m = Math.floor(365.25 * f), g = Math.floor((u - m) / 30.6001);
r = u - m - Math.floor(30.6001 * g), s = g - 1, g > 13 && (f += 1, s = g - 13), o = f - 4716;
var p = c - e, v = Math.floor(p / 10631);
p -= 10631 * v;
var y = Math.floor((p - i) / t), b = 30 * v + y;
p -= Math.floor(y * t + i);
var D = Math.floor((p + 28.5001) / 29.5);
13 == D && (D = 12);
var C = p - Math.floor(29.5001 * D - 29), E = {
gregorian_day:r,
gregorian_month:s - 1,
gregorian_year:o,
julian_day:c - 1,
hijri_day:C,
hijri_month:D - 1,
hijri_year:b,
hijri_month_tag:n[D - 1]
};
return _r_(E);
}
var r = "1" === $.cookie("hijri_enabled") ? !0 :!1, s = B.env.b_hijri_calendar_available;
return _r_({
enable:function() {
_i_("a41:47"), s && !r && (r = !0, $.cookie("hijri_enabled", 1), B.eventEmitter.trigger("CALENDAR:hijri_enabled")), _r_();
},
disable:function() {
_i_("a41:48"), s && r && (r = !1, $.cookie("hijri_enabled", 0), B.eventEmitter.trigger("CALENDAR:hijri_disabled")), _r_();
},
enabled:function() {
return _i_("a41:49"), _r_(r);
},
available:function() {
return _i_("a41:50"), _r_(s);
},
convert:a
});
}), B.define("utils", function(t, e, i) {
_i_("a41:3"), e.assertExists = function(t, e) {
if (_i_("a41:38"), "object" != typeof t || !(e in t)) throw new Error("Property " + e + " is not found");
_r_();
}, e.camelCaseKeys = function(t) {
_i_("a41:39");
var e, i, n = {};
for (e in t) t.hasOwnProperty(e) && (i = e.replace(/-([a-zA-Z])/g, function(t, e) {
return _i_("a41:229"), _r_(e.toUpperCase());
}), n[i] = t[e]);
return _r_(n);
}, e.nodeData = function(t) {
_i_("a41:40"), t.jquery && (t = t[0]), this.assertExists(t, "attributes");
var e, i, n, a = {};
for (e = 0, i = t.attributes.length; i > e; e++) n = t.attributes[e], n && 0 == n.name.indexOf("data-") && (a[n.name.replace(/^data-/, "")] = n.value);
return _r_(this.camelCaseKeys(a));
}, _r_();
}), B.define("utils/simple-unique-id", function(t, e, i) {
_i_("a41:4");
function n(t, e) {
return _i_("a41:14"), _r_(Math.floor(Math.random() * (e - t)) + t);
}
i.exports = function() {
return _i_("a41:41"), _r_(new Date().getTime() + "_" + n(100, 999));
}, _r_();
}), B.define("window-visibilitychange", function(t, e, i) {
"use strict";
_i_("a41:5");
var n = t("event-emitter"), a = {
focus:"visible",
focusin:"visible",
pageshow:"visible",
blur:"hidden",
focusout:"hidden",
pagehide:"hidden"
};
i.exports = n.extend({
setup:function() {
_i_("a41:187"), this.didSetup || (this.didSetup = !0, this.hidden = null, this.visibilityState = null, this.hiddenAttribute = "hidden", this.hiddenAttribute in document ? document.addEventListener("visibilitychange", this.visibilityChange.bind(this)) :(this.hiddenAttribute = "mozHidden") in document ? document.addEventListener("mozvisibilitychange", this.visibilityChange.bind(this)) :(this.hiddenAttribute = "webkitHidden") in document ? document.addEventListener("webkitvisibilitychange", this.visibilityChange.bind(this)) :(this.hiddenAttribute = "msHidden") in document ? document.addEventListener("msvisibilitychange", this.visibilityChange.bind(this)) :"onfocusin" in document ? document.onfocusin = document.onfocusout = this.visibilityChange.bind(this) :window.onpageshow = window.onpagehide = window.onfocus = window.onblur = this.visibilityChange.bind(this)), _r_();
},
visibilityChange:function(t) {
_i_("a41:188"), t = t || window.event;
var e = this.visibilityState;
t.type in a ? (this.hidden = "hidden" == a[t.type], this.visibilityState = a[t.type]) :(this.hidden = document[this.hiddenAttribute], this.visibilityState = document[this.hiddenAttribute] ? "hidden" :"visible"), e != this.visibilityState && this.emit("visibilitychange", this.visibilityState), _r_();
}
}), i.exports.addListener = i.exports.on = function() {
_i_("a41:51"), i.exports.setup(), n.prototype.addListener.apply(i.exports, arguments), _r_();
}, _r_();
}), B.define("window-scroller", [ "jquery", "promise" ], function(t, e) {
_i_("a41:6");
var i = t(window), n = jQuery({
progress:0
}), a = 10, r = 700, s = 5;
function o(t, n, r, s) {
_i_("a41:15");
var o, _ = "number" == typeof s ? s :a;
if (!t || !t.length) return _r_(new e(function(t) {
_i_("a41:192"), t(), _r_();
}));
if (n) o = l(t).top - _; else {
var h = d(t, _);
null === h && (h = i.scrollTop()), o = h;
}
return _r_(this.scrollToOffset(o, r));
}
function _(t, a) {
_i_("a41:16"), n.stop(!0);
var r = i.scrollTop(), o = t;
return _r_(new e(function(t) {
_i_("a41:53"), Math.abs(r - o) < s ? t() :h(r, o, a, t), _r_();
}));
}
function h(t, e, a, s) {
_i_("a41:17"), n[0].progress = 0, n.animate({
progress:1
}, {
step:function(n) {
_i_("a41:193"), i.scrollTop(t + n * (e - t)), _r_();
},
duration:"number" == typeof a ? a :r,
easing:"function" == typeof jQuery.easing.easeInOutExpo ? "easeInOutExpo" :"swing",
complete:s
}), _r_();
}
function d(t, e) {
if (_i_("a41:18"), 0 === t.height()) return _r_(null);
var i = l(t), n = c(), a = i.top < n.top, r = i.bottom > n.bottom, s = t.outerHeight() + e > u();
return _r_(a || r ? s || a ? i.top - e :i.bottom + e - u() :null);
}
function l(t) {
_i_("a41:19");
var e = t.offset().top;
return _r_({
top:e,
bottom:e + t.outerHeight()
});
}
function c() {
_i_("a41:20");
var t = i.scrollTop();
return _r_({
top:t,
bottom:t + u()
});
}
function u() {
return _i_("a41:21"), _r_(window.innerHeight || document.documentElement.clientHeight);
}
return _r_({
scrollToBlock:o,
scrollToOffset:_
});
}), B.define("countdown", [ "jquery", "event-emitter" ], function(t, e) {
_i_("a41:7");
var i = function(e, i) {
if (_i_("a41:42"), !e) throw new Error("You did not pass proper date for countdown");
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
}, "number" == typeof e ? this.endTime = new Date(e) :this.endTime = Date.parse(e), this.options = t.extend(!0, {}, this.defaults, i), this._processOptions(), this._init(), _r_(this);
};
return t.extend(i.prototype, {
_processOptions:function() {
_i_("a41:54");
var t = this.options.leadingZeroes;
if ("boolean" == typeof t) for (var e = 0; e < this.dimensionsToCheck.length; e++) this.options.leadingZeroes[this.dimensionsToCheck[e]] = t;
_r_();
},
_init:function() {
_i_("a41:55"), e.extend(this), this.previousTime = !1, this._saveStartRemainingTime(), this._setCallbacks(), this._start(), _r_();
},
_saveStartRemainingTime:function() {
_i_("a41:56"), this.startRemainingTime = this._getRemainingTime(), _r_();
},
_start:function() {
_i_("a41:57"), this._processTime(), this.timer = setInterval(this._processTime.bind(this), this.options.updateInterval), _r_();
},
_processTime:function() {
_i_("a41:58");
var t = this._getRemainingTime();
t.total >= 0 ? (this._fireEvents(t), this.previousTime = t) :(this.stop(), this._fireEvents(!1)), _r_();
},
_getRemainingTime:function() {
_i_("a41:59");
var t = this.endTime - Date.parse(new Date()), e = Math.floor(t / 1e3 % 60), i = Math.floor(t / 1e3 / 60 % 60), n = Math.floor(t / 36e5 % 24), a = Math.floor(t / 864e5);
return _r_({
total:t,
days:a,
hours:n,
minutes:i,
seconds:e
});
},
_fireEvents:function(t) {
if (_i_("a41:60"), !this.previousTime) return _r_();
t ? (this._fireProgressEvents(t), this._fireEveryTickEvent(t)) :this._fireExpiredEvent(), _r_();
},
_fireProgressEvents:function(t) {
_i_("a41:61");
for (var e = this, i = 0; i < this.dimensionsToCheck.length; i++) this._dimensionIsChanged(t, this.dimensionsToCheck[i]) && this.trigger("changed", {
type:this.dimensionsToCheck[i],
remainingTime:e._formatDate(t)
});
_r_();
},
_fireEveryTickEvent:function(t) {
_i_("a41:62"), this.trigger("ticked", {
remainingTime:this._formatDate(t)
}), _r_();
},
_fireExpiredEvent:function() {
_i_("a41:63"), this.trigger("expired", {
timeExpired:this._formatDate(this.startRemainingTime)
}), _r_();
},
_dimensionIsChanged:function(t, e) {
return _i_("a41:64"), _r_(!!(t[e] - this.previousTime[e]));
},
_setCallbacks:function() {
_i_("a41:65");
var t = this;
this.options.callback && "function" == typeof this.options.callback && this.on("ticked", function(e) {
_i_("a41:230"), t.options.callback(t._formatDate(e.remainingTime)), _r_();
}), this.options.expiredCallback && "function" == typeof this.options.expiredCallback && this.on("expired", function(e) {
_i_("a41:231"), t.options.expiredCallback.call(t._formatDate(e.remainingTime)), _r_();
}), this.options.callbacks && this.on("changed", function(e) {
_i_("a41:232"), t.options.callbacks[e.type] && "function" == typeof t.options.callbacks[e.type] && t.options.callbacks[e.type].call(t._formatDate(e.remainingTime)), _r_();
}), _r_();
},
_formatDate:function(t) {
_i_("a41:66");
var e;
for (var i in t) this.options.leadingZeroes[i] && t.hasOwnProperty(i) && (e = "" + t[i], e.length <= 1 && (t[i] = "0" + e));
return _r_(t);
},
getStartRemainingTime:function() {
return _i_("a41:67"), _r_(this._formatDate(this.startRemainingTime));
},
stop:function() {
_i_("a41:68"), clearInterval(this.timer), _r_();
},
proceed:function() {
_i_("a41:69"), this._start(), _r_();
}
}), _r_(i);
}), function(t, e, i, n) {
_i_("a41:8");
var a = t.require("jquery"), r = t.require("window-scroller"), s = 10, o = "OTfdASFbLYQCLBMWLMSFKTSdZPBcfTRe", _ = "index" === t.env.b_action && t.et.track(o);
i.Calendar = function(e, n) {
_i_("a41:43"), this.id_ = i.uid(), this.lazyEvents = {}, this.days = {}, this.daysIndex = [], this.months = {}, this.monthsIndex = [], this.selectedDays_ = [], this.states_ = {}, this.highlightedRanges_ = {}, this.highlightedRangesMeta_ = {}, this.firstShow = !0, this.search = n.search, this.initBaseMarkup(e, n.positioning), this.addState(t.calendar2.STATES.HIDDEN), this.$input.data("calendar2", this), this.setOptions(n), n.type && this.$element.addClass(this.getStateClassName_(n.type)), n.arrow && this.$element.addClass(this.getStateClassName_("has-arrow")), n.lazy ? this.bindLazyLoadingEvents() :this.initLazyMethods(), this.onReady(), this.initialized = !0, _r_();
}, i.Calendar.prototype = {
constructor:i.Calendar,
id:function() {
return _i_("a41:70"), _r_(this.id_);
},
type:function() {
return _i_("a41:71"), _r_(this.options && this.options.type || "unknown");
},
initBaseMarkup:function(e, i) {
_i_("a41:72"), this.$input = e;
var n = a('<div class="' + t.calendar2.WRAPPER_CLASS + " " + this.getStateClassName_("hidden") + '"></div>');
"inside" === i ? (this.$element = n, this.$input.append(this.$element)) :"outside" === i ? (this.$element = n, a(document.body).append(this.$element)) :this.$element = this.$input.wrap(n).parent(), this.$element.addClass(this.getStateClassName_("position-" + i)), _ && this.startListeningForTrigger(), _r_();
},
setOptions:function(t) {
_i_("a41:73");
var e = this.initialized && (t.startDate || t.endDate);
t = a.extend(this.options || {}, t), t.startDate = new Date(t.startDate), t.endDate = new Date(t.endDate), t.startDateId = i.dayId(t.startDate.getFullYear(), t.startDate.getMonth(), t.startDate.getDate()), t.endDateId = i.dayId(t.endDate.getFullYear(), t.endDate.getMonth(), t.endDate.getDate()), t.calendarWidth = t.monthWidth * t.monthsVisible + t.borderWidth * (t.monthsVisible - 1), this.options = t, e && this.rebuildCalendarMarkup(), _r_();
},
setDefaultDates:function() {
_i_("a41:74");
var t = this.options, e = t.defaultDate || null;
e && e.year && e.month >= 0 && e.date >= 0 ? (this.selectDay(i.dayId(e.year, e.month, e.date)), this.selectMonth(i.monthId(e.year, e.month))) :this.selectMonth(this.monthsIndex[0], {
force:!0
}), _r_();
},
getCalendarClassname:function() {
_i_("a41:75");
var t = "c2-calendar";
return "rtl" === this.options.direction && (t += " c2-calendar-rtl"), this.options.extraClasses && (t += " " + this.options.extraClasses), _r_(t);
},
initLazyMethods:function() {
_i_("a41:76"), this.unbindLazyLoadingEvents(), this.rebuildCalendarMarkup(), this.setDefaultDates(), this.onLazyInitiated(), _r_();
},
rebuildCalendarMarkup:function() {
_i_("a41:77"), this.initialized && (this.$calendarElement && this.$calendarElement.remove(), this.months = {}, this.monthsIndex = []), this.initMarkup(), this.bindElementsToModels(), this.setupOffsetsAndViewport_(), this.fitHorizontalPosition(), this.bindEvents(), _ && this.initAccessibility(), _r_();
},
refreshDisabledDays:function() {
_i_("a41:78");
var t = this;
a.each(this.days, function(e, i) {
_i_("a41:225"), i.id() <= t.options.startDateId || i.id() > t.options.endDateId ? i.addState("disabled") :i.removeState("disabled"), _r_();
}), _r_();
},
initMarkup:function() {
_i_("a41:79");
var e = this.getOption_("title"), i = this.createMonths(), n = "";
if (t.et.track("OTfdASFbLYQCLBMDbQNZBeWe")) var r = this.options.closeButton ? '<button class="c2-calendar-close-button c2-calendar-close-button-clearappearance" tabindex="0" aria-label="' + t.jstmpl.translations("a11y_sr_close_calendar_icon") + '"><i class="c2-calendar-close-button-icon">×</i></button>' :""; else var r = this.options.closeButton ? '<div class="c2-calendar-close-button"><i class="c2-calendar-close-button-icon">×</i></div>' :"";
var s = this.options.calendarWidth + "px", o = "";
if (this.options.pricePlaceHolder && (o = '<div class="c2-progress-bar"><div class="c2-progress-bar-inner"></div></div>'), _) {
var h = '<div class="c2-button c2-button-earlier"><div class="c2-button-inner a11y_sb_calendar_prev_next_month_button" role="presentation" aria-hidden="true">&larr;</div></div><div class="c2-button c2-button-further"><div class="c2-button-inner a11y_sb_calendar_prev_next_month_button" role="presentation" aria-hidden="true">&rarr;</div></div>', d = t.jstmpl.translations("acc_index_checkin_calendar_opened"), l = t.jstmpl.translations("acc_index_checkout_calendar_opened"), c = t.jstmpl.translations("acc_index_choose_checkin_date_arrowkeys"), u = t.jstmpl.translations("acc_index_choose_checkout_date_arrowkeys"), f = t.jstmpl.translations("acc_cal_open_open"), m = t.jstmpl.translations("acc_cal_open_notification");
"checkin" === this.options.type && (f = d, m = c), "checkout" === this.options.type && (f = l, m = u);
var g = '<div style="width:' + s + ';" class="' + this.getCalendarClassname() + '" role="dialog" aria-label="' + f + '" aria-modal="true"><div role="application"><div class="c2-calendar-header" aria-label="' + m + '" tabindex="-1" >' + e + n + r + o + '</div><div class="c2-calendar-body" role="presentation">' + h + '<div class="c2-calendar-viewport" role="presentation"><div class="c2-calendar-inner" role="presentation">' + i + '</div></div><div class="c2-calendar-footer" role="presentation"><div class="c2-calendar-footer-dynamic"></div></div></div></div></div>';
} else var h = '<div class="c2-button c2-button-earlier"><span class="c2-button-inner">&larr;</span></div><div class="c2-button c2-button-further"><span class="c2-button-inner">&rarr;</span></div>', g = '<div style="width:' + s + ';" class="' + this.getCalendarClassname() + '"><div class="c2-calendar-header">' + e + n + r + o + '</div><div class="c2-calendar-body"><div class="c2-button c2-button-earlier"><span class="c2-button-inner">&larr;</span></div><div class="c2-button c2-button-further"><span class="c2-button-inner">&rarr;</span></div><div class="c2-calendar-viewport"><div class="c2-calendar-inner">' + i + '</div></div><div class="c2-calendar-footer"><div class="c2-calendar-footer-dynamic"></div></div></div></div>';
this.$calendarElement = a(g), this.$viewport = this.$calendarElement.find(".c2-calendar-viewport"), this.$screen = this.$viewport.find(".c2-calendar-inner"), this.$footer = this.$calendarElement.find(".c2-calendar-footer"), this.$header = this.$calendarElement.find(".c2-calendar-header"), this.$element.append(this.$calendarElement), t.et.on("click", this.$element.find(".c2-calendar-close-button")).customGoal("OTfdASFbLYQCLBMDbQNZBeWe", 1), _r_();
},
createMonths:function() {
_i_("a41:80");
var t = "", e = this.options, i = e.startDate.getFullYear(), n = e.endDate.getFullYear(), a = e.startDate.getMonth(), r = e.endDate.getMonth();
for (t += '<div class="c2-months-table">'; n > i || i === n && r >= a; ) t += this.createMonth(i, a).getHTML(), (a + 1) % 12 === 0 && i++, a = (a + 1) % 12;
return t += "</div>", _r_(t);
},
createMonth:function(t, e, n) {
_i_("a41:81");
var a = new i.Month(t, e, this), r = a.id();
return this.months[r] = a, this.monthsIndex.push(r), _r_(a);
},
createDay:function(t, e, n) {
_i_("a41:82");
var a = new i.Day(t, e, n, this), r = a.id();
return (r < this.options.startDateId || r > this.options.endDateId) && a.addState("disabled"), this.days[r] = a, this.daysIndex.push(r), _r_(a);
},
getDay:function(t) {
return _i_("a41:83"), _r_(this.days[t]);
},
bindElementsToModels:function() {
_i_("a41:84");
for (var t = this.$calendarElement.find(".c2-month"), e = this.$calendarElement.find(".c2-day"), i = 0, n = t.length; n > i; i++) this.months[t[i].getAttribute("data-id")].setElement(t[i]);
for (var i = 0, n = e.length; n > i; i++) this.days[e[i].getAttribute("data-id")].setElement(e[i]);
_r_();
},
setupOffsetsAndViewport_:function() {
_i_("a41:85");
for (var t, e, i = this.options.borderWidth, n = this.options.monthWidth, a = 0, r = this.monthsIndex.length; r > a; a++) "rtl" === this.options.direction ? (e = (r - (a + 1)) * (n + i), t = (r - (a + this.options.monthsVisible)) * (n + i)) :(t = a * (n + i), e = t), this.months[this.monthsIndex[a]].setOffset(t), this.months[this.monthsIndex[a]].setPosition(e);
_r_();
},
setCurrentMonth:function(t) {
return _i_("a41:86"), t ? -1 === this.monthsIndex.indexOf(t) && (t = this.monthsIndex[0]) :t = this.monthsIndex[0], this.currentMonth_ = t, _r_(this.currentMonth_);
},
getCurrentMonth:function() {
return _i_("a41:87"), _r_(this.currentMonth_ || this.setCurrentMonth());
},
getCurrentMonthUtc:function() {
return _i_("a41:88"), _r_(this.months[this.getCurrentMonth()].utcts_);
},
getCurrentDay:function() {
return _i_("a41:89"), _r_(this.selectedDays()[0]);
},
getSelectedDay:function() {
_i_("a41:90");
var t = this.getCurrentDay();
return _r_(t && this.days[t] ? this.days[t] :null);
},
selectMonth:function(t, e) {
_i_("a41:91");
var i, e = e || {}, n = this.getTargetMonth(t), a = {
type:"any"
};
if (this.getCurrentMonth() === n && !e.force) return _r_();
i = this.months[n], i && (this.setOffset_(i.getOffset()), this.setCurrentMonth(t)), this.monthsIndex[0] === this.getCurrentMonth() ? a.type = "first" :this.monthsIndex[this.monthsIndex.length - this.options.monthsVisible] === n && (a.type = "last"), this.onMonthShown(null, a), _r_();
},
getNextMonth:function() {
_i_("a41:92");
var t = this.monthsIndex.indexOf(this.getCurrentMonth()), e = t + 1;
return _r_(this.monthsIndex[e]);
},
getPreviousMonth:function() {
_i_("a41:93");
var t = this.monthsIndex.indexOf(this.getCurrentMonth()), e = t - 1;
return _r_(this.monthsIndex[e]);
},
getTargetMonth:function(t) {
_i_("a41:94");
var e, i = this.monthsIndex.indexOf(t), n = i + this.options.monthsVisible - 1;
return n >= this.monthsIndex.length && (e = n - (this.monthsIndex.length - 1), n -= e, i -= e), _r_(this.monthsIndex[i]);
},
getVisibleMonths:function() {
_i_("a41:95");
var t = this.monthsIndex.slice(0), e = this.monthsIndex.indexOf(this.getCurrentMonth());
return t = t.slice(e, e + this.options.monthsVisible), _r_(t);
},
setOffset_:function(e, i) {
_i_("a41:96");
var n = "margin-left", a = {};
a[n] = -e, i || 2 == t.env.b_site_type_id ? this.$screen.stop(!0, !0).css(a) :this.$screen.stop(!0, !0).animate(a, 300, "easeOutQuad"), _r_();
},
selectedDays:function() {
return _i_("a41:97"), _r_(this.selectedDays_);
},
selectDay:function(t, e) {
if (_i_("a41:98"), !t) return _r_(!1);
var i, n = this.days[t];
if (!n || n.hasState("disabled")) return _r_();
for (i in this.days) this.days.hasOwnProperty(i) && this.days[i].hasState("selected") && this.days[i].removeState("selected");
n.addState("selected"), this.selectedDays_ = [ n.id() ], this.onDateSelected(null, n.id(), e), _r_();
},
selectRange:function(e, i) {
_i_("a41:99");
var n = this.daysIndex.indexOf(e), a = this.daysIndex.indexOf(i) + 1, r = this.daysIndex.slice(n, a);
if (this.selectedRange_) for (var s = 0, o = this.selectedRange_.length; o > s; s++) this.days[this.selectedRange_[s]].removeState("first-in-range").removeState("in-range").removeState("last-in-range");
for (var s = 0, o = r.length; o > s; s++) this.days[r[s]].addState("in-range"), 0 === s ? this.days[r[s]].addState("first-in-range") :s === o - 1 && this.days[r[s]].addState("last-in-range");
r.length ? this.addState(t.calendar2.STATES.RANGE_SELECTED) :this.removeState(t.calendar2.STATES.RANGE_SELECTED), this.selectedRange_ = r, _r_();
},
highlightRange:function(e, n, a) {
_i_("a41:100"), this.highlightedRanges_ || (this.highlightedRanges_ = {}, this.highlightedRangesMeta_ = {});
var r, s = this.daysIndex.indexOf(e), o = this.daysIndex.indexOf(n) + 1, _ = this.daysIndex.slice(s, o);
return r = a && a.name ? a.name :i.uid(), this.deleteRange_(r), _.length ? (this.createRange_(_, r, a), this.addState(t.calendar2.STATES.RANGE_SELECTED), this.fireCallback("onRangeHighlighted", r)) :(this.removeState(t.calendar2.STATES.RANGE_SELECTED), this.fireCallback("onRangeUnHighlighted", r)), _r_(r);
},
unHighlightRange:function(e) {
_i_("a41:101"), this.highlightedRanges_[e] && (this.deleteRange_(e), this.removeState(t.calendar2.STATES.RANGE_SELECTED), this.fireCallback("onRangeUnHighlighted", e)), _r_();
},
createRange_:function(t, e, i) {
_i_("a41:102");
for (var n = 0, a = t.length; a > n; n++) i && i.className ? this.days[t[n]].addState(i.className) :this.days[t[n]].addState("in-range"), i && i.tooltip && this.days[t[n]].setTitle(i.tooltip), 0 === n ? this.days[t[n]].addState("first-in-range") :n === a - 1 && this.days[t[n]].addState("last-in-range");
this.highlightedRanges_[e] = t, this.highlightedRangesMeta_[e] = t, _r_();
},
deleteRange_:function(t) {
_i_("a41:103");
var e = this.highlightedRanges_[t], i = !1, n = !1;
if (this.highlightedRangesMeta_[t] && (i = this.highlightedRangesMeta_[t].className || !1, n = this.highlightedRangesMeta_[t].tooltip || !1), e) {
for (var a = 0, r = e.length; r > a; a++) this.days[e[a]].removeState("first-in-range").removeState("in-range").removeState("last-in-range"), i && this.days[e[a]].removeState(i), n && this.days[e[a]].removeTitle();
this.highlightedRanges_[t] = null, this.highlightedRangesMeta_[t] = null;
}
_r_();
},
shown:function() {
return _i_("a41:104"), _r_(!this.hasState(t.calendar2.STATES.HIDDEN));
},
changeInput:function(t) {
_i_("a41:105"), this.$input = t, _r_();
},
show:function() {
_i_("a41:106"), this.lazyInitiated || this.initLazyMethods(), this.firstShow && "checkin" == this.options["calendar2-type"] && (this.firstShow = !1), t.eventEmitter.trigger("CALENDAR:opened", {
id:this.id(),
instance:this
}), this.removeState(t.calendar2.STATES.HIDDEN), this.onReflow(), this.fireCallback("onShow"), "outside" === this.options.positioning ? this.fitVerticalPositionAbsolute() :this.fitVerticalPosition(), this.adjustHeight(), t.eventEmitter.trigger("CALENDAR:shown", {
id:this.id(),
instance:this
});
var e = this.getTargetMonth(this.getCurrentMonth()), i = this.months[e];
t.env.rtl && i && this.setOffset_(i.getOffset(), !0), t.et.stage("OTfdASFbLYQCLBMDbQNZBeWe", 1);
var n;
switch (t.env.b_action) {
case "index":
n = 2;
break;

case "searchresults":
n = 3;
break;

case "hotel":
n = 4;
break;

default:
n = 5;
}
t.et.stage("OTfdASFbLYQCLBMDbQNZBeWe", n), _r_();
},
hide:function() {
_i_("a41:107"), t.eventEmitter.trigger("CALENDAR:closed", {
id:this.id(),
instance:this
}), this.addState(t.calendar2.STATES.HIDDEN), this.fireCallback("onHide"), _r_();
},
toggle:function() {
_i_("a41:108"), this.shown() ? this.hide() :this.show(), _r_();
},
fitHorizontalPosition:function() {
_i_("a41:109");
var t = window, e = this.$element, i = this.$calendarElement, n = "rtl" === this.options.direction, r = n ? "right" :"left", o = 0, _ = e.offset().left, h = i.outerWidth() + s;
n ? o = e.width() + _ - h :(o = a(t).width() - (_ + h), s > _ + o && (o = -s)), this.options.alignToRight && (o = this.$element.width() - this.$calendarElement.outerWidth()), 0 > o ? i.css(r, o) :i.css(r, 0), _r_();
},
fitVerticalPosition:function() {
_i_("a41:110");
var t = a(window), e = t.scrollTop(), i = this.$calendarElement, n = s + i.offset().top + i.height() - t.height();
n > e && r.scrollToOffset(n), _r_();
},
fitVerticalPositionAbsolute:function() {
_i_("a41:111");
var t = this.$input.offset();
this.$element.css({
position:"absolute",
top:t.top,
left:t.left
}), _r_();
},
resetModes:function() {
_i_("a41:112"), this.selectRange(), _r_();
},
adjustHeight:function(t) {
_i_("a41:113");
for (var e = this.getVisibleMonths(), i = 0, n = 0, a = 0; a < e.length; a++) i = this.months[e[a]].getHeight(t), n = i > n ? i :n;
n > 0 && this.$viewport.height(n), _r_();
},
trigger:function() {
_i_("a41:114"), this.$element.trigger.apply(this.$element, arguments), _r_();
},
fireCallback:function(t) {
_i_("a41:115");
var e = [].slice.call(arguments, 1);
e.unshift(this), this.options[t] && "function" == typeof this.options[t] && this.options[t].apply(this, e), _r_();
},
bindEvents:function() {
_i_("a41:116");
var t = this, e = a(window);
this.eventsAttached || (this.$input.bind("keydown", function(e) {
_i_("a41:233"), t.onKeyDown(e), _r_();
}), this.$input.bind("click touchstart", function(e) {
_i_("a41:234");
for (var i = e.target; i && i !== e.currentTarget; ) {
if (i.hasAttribute && i.hasAttribute("data-calendar2-cant-touch-this")) return _r_();
i = i.parentNode;
}
return t.toggle(), _r_(!1);
}), this.$element.bind("toggleCalendar", function() {
_i_("a41:235"), t.toggle(), _r_();
}), this.$element.bind("showCalendar", function() {
_i_("a41:236"), t.show(), _r_();
}), this.$element.bind("hideCalendar", function() {
_i_("a41:237"), t.hide(), _r_();
}), this.$element.click(function(t) {
_i_("a41:238"), 0 === a(t.target).parents(".b-link_external").length && (t.preventDefault(), t.stopPropagation()), _r_();
}), e.click(function() {
_i_("a41:239"), t.shown() && t.hide(), _r_();
}), e.resize(function() {
_i_("a41:240"), t.fitHorizontalPosition(), _r_();
}), e.resize(function() {
_i_("a41:243");
var e, i, n, a = 100, r = +new Date() - a - 1, s = function() {
_i_("a41:248"), t.shown() && t.onReflow(), _r_();
};
return _r_(function() {
_i_("a41:246"), window.clearTimeout(e), i = +new Date(), n = i - r, n >= a ? (r = i, s()) :e = window.setTimeout(s, a), _r_();
});
}()), this.$element.bind("dateSelected", a.proxy(this.onExternalDateSelected, this)), this.$element.bind("rangeSelected", a.proxy(this.onExternalRangeSelected, this)), this.$element.bind("monthSelected", a.proxy(this.onExternalMonthSelected, this)), this.eventsAttached = !0), this.$calendarElement.on("mouseenter", ".c2-day", a.proxy(this.onDayMouseEnter, this)), this.$calendarElement.on("mouseleave", ".c2-day", a.proxy(this.onDayMouseLeave, this)), this.$calendarElement.on("click touchstart", ".c2-day", a.proxy(this.onDayClick, this)), this.$calendarElement.on("click touchstart", ".c2-button-earlier", a.proxy(this.onEarlierButtonClick, this)), this.$calendarElement.on("click touchstart", ".c2-button-further", a.proxy(this.onFurtherButtonClick, this)), this.$calendarElement.on("click touchstart", ".c2-calendar-close-button", a.proxy(this.onCloseButtonClick, this)), _r_();
},
bindLazyLoadingEvents:function() {
_i_("a41:117"), this.$element.bind("mouseenter.calendar2", a.proxy(this.onElementMouseEnter, this)), this.$element.bind("touchstart.calendar2", a.proxy(this.onElementTouchStart, this)), this.$element.bind("show", a.proxy(this.show, this)), this.$element.bind("hide", a.proxy(this.hide, this)), this.$element.bind("toggle", a.proxy(this.toggle, this)), this.$input.bind("mouseenter.calendar2", a.proxy(this.onElementMouseEnter, this)), this.$input.bind("touchstart.calendar2", a.proxy(this.onElementTouchStart, this)), _r_();
},
unbindLazyLoadingEvents:function() {
_i_("a41:118"), this.$element.unbind("mouseenter.calendar2 touchstart.calendar2"), this.$input.unbind("mouseenter.calendar2 touchstart.calendar2"), _r_();
},
addState:function(t) {
_i_("a41:119"), this.states_[t] || (this.states_[t] = !0, this.$element.addClass(this.getStateClassName_(t))), _r_();
},
removeState:function(t) {
_i_("a41:120"), this.states_[t] && (this.states_[t] = !1, this.$element.removeClass(this.getStateClassName_(t))), _r_();
},
hasState:function(t) {
return _i_("a41:121"), _r_(!!this.states_[t]);
},
getStateClassName_:function(t) {
return _i_("a41:122"), _r_(t ? "c2-wrapper-s-" + t :"");
},
onElementMouseEnter:function() {
_i_("a41:123"), this.unbindLazyLoadingEvents(), this.initLazyMethods(), _r_();
},
onElementTouchStart:function(t) {
_i_("a41:124"), t.preventDefault(), this.unbindLazyLoadingEvents(), this.$element.bind("lazyInitiated", a.proxy(function() {
_i_("a41:227"), this.show(), this.$element.unbind("lazyInitiated"), _r_();
}, this)), this.initLazyMethods(), _r_();
},
onDayClick:function(e) {
_i_("a41:125"), e.preventDefault(), e.stopPropagation();
var i = e.currentTarget.getAttribute("data-id");
t.eventEmitter.trigger("CALENDAR:dayclick", {
instance:this
}), this.fireCallback("onDayClick", i), this.selectDay(i, {
type:"user"
}), _r_();
},
onCloseButtonClick:function(t) {
_i_("a41:126"), t.preventDefault(), t.stopPropagation(), this.hide(), _r_();
},
onFurtherButtonClick:function(e) {
_i_("a41:127"), e.preventDefault(), e.stopPropagation(), this.selectMonth(this.getNextMonth()), t.eventEmitter.trigger("CALENDAR:nextclick", {
instance:this
}), _r_();
},
onEarlierButtonClick:function(e) {
_i_("a41:128"), e.preventDefault(), e.stopPropagation(), this.selectMonth(this.getPreviousMonth()), t.eventEmitter.trigger("CALENDAR:previousclick", {
instance:this
}), _r_();
},
onMonthShown:function(t, e) {
_i_("a41:129"), e && (this.$calendarElement.find(".c2-button-s-disabled").removeClass("c2-button-s-disabled"), "first" === e.type ? this.$calendarElement.find(".c2-button-earlier").addClass("c2-button-s-disabled") :"last" === e.type && this.$calendarElement.find(".c2-button-further").addClass("c2-button-s-disabled")), this.adjustHeight(), _r_();
},
onDateSelected:function(t, e, n) {
_i_("a41:130");
var a = this.getDay(e), r = i.monthId(a.getYear(), a.getMonth()), s = this.getVisibleMonths(), o = n || {};
-1 === s.indexOf(r) && this.selectMonth(r), "api" !== o.type && this.options.closeOnDateSelected === !0 && this.hide(), "user" === o.type && this.fireCallback("onDateSelected", a, o, this.search), _r_();
},
onDayMouseEnter:function(t) {
_i_("a41:131"), t.preventDefault();
var e = this.getDay(t.currentTarget.getAttribute("data-id"));
e.addState("hilighted"), this.fireCallback("onDayMouseEnter", e), _r_();
},
onDayMouseLeave:function(t) {
_i_("a41:132"), t.preventDefault();
var e = this.getDay(t.currentTarget.getAttribute("data-id"));
e.removeState("hilighted"), this.fireCallback("onDayMouseLeave", e), _r_();
},
onExternalMonthSelected:function(t, e) {
_i_("a41:133");
var n = e.value, a = i.monthId(n.year, n.month);
this.selectMonth(a), _r_();
},
onExternalDateSelected:function(t, e) {
_i_("a41:134");
var n, a = e.value;
if (!a) return _r_();
if (n = i.dayId(a.year, a.month, a.date), !n) return _r_();
if (this.getCurrentDay() === n) return _r_();
this.selectDay(n), _r_();
},
onExternalRangeSelected:function(t, e) {
_i_("a41:135");
var n, a, r, s;
if (!e) return _r_();
if (n = e.startValue, a = e.endValue, !n || !a) return _r_();
r = i.dayId(n.year, n.month, n.date), s = i.dayId(a.year, a.month, a.date), this.selectRange(r, s), _r_();
},
hilightToday:function() {
_i_("a41:136");
var t = i.today(), e = this.getDay(i.dayId(t.getFullYear(), t.getMonth(), t.getDate()));
e && e.addState("today"), _r_();
},
toggleNextPreviousControls:function() {
_i_("a41:137"), 0 === this.monthsIndex.indexOf(this.getCurrentMonth()) && this.$calendarElement.find(".c2-button-earlier").addClass("c2-button-s-disabled"), _r_();
},
onReady:function() {
_i_("a41:138"), this.fireCallback("onReady"), _r_();
},
onLazyInitiated:function() {
_i_("a41:139"), this.hilightToday(), this.toggleNextPreviousControls(), this.lazyInitiated = !0, this.fireCallback("onLazyInitiated"), this.trigger("lazyInitiated"), _r_();
},
onKeyDown:function(t) {
_i_("a41:140"), this.fireCallback("onKeyDown", t), _r_();
},
adjustArrowPosition:function() {
_i_("a41:141");
var t, e, i, n;
this.options.arrow && ("rtl" === this.options.direction ? (t = -1 * parseInt(this.$calendarElement.css("right"), 10) + 9, n = ".c2-wrapper-s-has-arrow .c2-calendar:before { right: " + t + "px !important;}") :(t = -1 * parseInt(this.$calendarElement.css("left"), 10) + 14, n = ".c2-wrapper-s-has-arrow .c2-calendar:before { left: " + t + "px !important;}"), isNaN(t) || (this.data("arrowStyleElement") ? i = this.data("arrowStyleElement") :(e = document.head || document.getElementsByTagName("head")[0], i = document.createElement("style"), i.type = "text/css", e.appendChild(i), this.data("arrowStyleElement", i)), i.styleSheet ? i.styleSheet.cssText = n :i.appendChild(document.createTextNode(n)))), _r_();
},
onReflow:function() {
_i_("a41:142"), this.fitHorizontalPosition(), this.adjustArrowPosition(), this.fireCallback("onReflow"), _r_();
},
customData_:{},
setCustomVariable_:function(t, e) {
if (_i_("a41:143"), !t) throw new Error("setCustomVariable method requires a name parameter");
return "undefined" == typeof e && this.customData_.hasOwnProperty(t) && delete this.customData_[t], this.customData_[t] = e, _r_(this);
},
getCustomVariable_:function(t) {
if (_i_("a41:144"), !t) throw new Error("getCustomVariable method requires a name parameter");
return _r_(this.customData_[t]);
},
data:function() {
if (_i_("a41:145"), 1 === arguments.length) return _r_(this.getCustomVariable_(arguments[0]));
if (2 === arguments.length) return _r_(this.setCustomVariable_(arguments[0], arguments[1]));
throw new Error("calendar2 data function accepts maximum 2 parameters");
},
getOption_:function(t, e) {
_i_("a41:146");
var i, n;
if (!t) throw new Error("calendar2 getOption_ function requires name parameter");
return i = this.options[t], e = e || {}, n = e.defaultValue || "", n = "function" == typeof i && e.interpolate !== !1 ? i.call(this) :i, _r_(n);
},
startListeningForTrigger:function() {
_i_("a41:147");
var t = ".sb-date-field__icon", e = this.$element.find(t);
e.length > 0 && (a(e).bind("focusin", a.proxy(this.onDateIconFocus, this, this)), a(e).bind("keydown click", a.proxy(this.onDateIconAction, this, this))), _r_();
},
onDateIconFocus:function(e, i) {
_i_("a41:148");
var n = (i.keyCode, i.target);
function r(t) {
if (_i_("a41:194"), !e) return _r_();
e.$prevActiveElem = t, _r_();
}
function s(t) {
if (_i_("a41:195"), !e) return _r_();
e.a11yNavMode = t, _r_();
}
r(a(n)), s(!0), t.et.stage(o, 1), e.$element && e.$element.trigger("mouseenter.calendar2"), _r_();
},
onDateIconAction:function(t, e) {
_i_("a41:149");
var i = [ 13, 32 ], n = e.keyCode;
e.target;
if (!t || t && !t.a11yNavMode) return _r_();
(i.indexOf(n) > -1 || "click" === e.type) && a();
function a() {
_i_("a41:196"), t.shown() || setTimeout(function() {
_i_("a41:244"), t.$calendarElement && t.$calendarElement.trigger("mouseenter.calendar2").trigger("showCalendar"), _r_();
}, 200), _r_();
}
_r_();
},
initAccessibility:function() {
_i_("a41:150");
var e, i, n = this, r = 0, s = 0, _ = 0, h = '[tabindex="0"], button', d = t.jstmpl.translations("acc_cal_selected_you");
function l(e, i) {
if (_i_("a41:197"), !e || !i) return _r_();
var n = e.options.type || e.options.mode || e.options.calendar2Type, a = {
open:[ 1, 2 ],
monthFocus:[ 3 ],
daySelected:[ 4, 5 ]
}, r = 0;
"checkout" === n && "monthFocus" !== i && (r = 1), t.et.customGoal(o, a[i][r]), _r_();
}
function c(t, e) {
_i_("a41:198");
var i = n.monthsIndex[n.monthsIndex.length - 1], a = n.getCurrentMonth();
if (!t || !n.months[t]) return _r_();
a !== t && (n.setCurrentMonth(t), t !== i && n.setOffset_(e)), _r_();
}
function u(t) {
if (_i_("a41:199"), !t) return _r_();
t instanceof a && t.focus(), _r_();
}
function f() {
_i_("a41:200");
var t = n.$calendarElement[0].querySelectorAll(h);
e = Array.prototype.slice.call(t), i = t.length, _r_();
}
function m(t, e) {
_i_("a41:201");
var i = document.getElementById("announcer");
if (!i) return _r_();
i.innerHTML = t, e && setTimeout(function() {
_i_("a41:245"), b(), _r_();
}, 50), _r_();
}
function g() {
if (_i_("a41:202"), document.getElementById("announcer")) return _r_();
var t = document.querySelector("body"), e = document.createElement("div");
e.setAttribute("aria-live", "assertive"), e.setAttribute("role", "alert"), e.setAttribute("aria-atomic", "true"), e.setAttribute("id", "announcer"), e.style.position = "absolute", e.style.opacity = 0, e.style.left = "-4000px", t.appendChild(e), _r_();
}
function p() {
_i_("a41:203"), _ = 1, _r_();
}
function v() {
_i_("a41:204"), _ = 0, _r_();
}
function y(t) {
if (_i_("a41:205"), !n) return _r_();
n.a11yNavMode = t, _r_();
}
function b() {
if (_i_("a41:206"), !n) return _r_();
if (n.$prevActiveElem) return _r_(a(n.$prevActiveElem).focus());
if (n.$input) return _r_(n.$input.focus());
n.$element && n.$element.focus(), _r_();
}
function D() {
_i_("a41:207"), n.$prevActiveElem = document.activeElement || null, _r_();
}
function C() {
_i_("a41:208");
var t = i - 1;
s >= t ? s = 0 :s += 1, e[s] && e[s].focus(), _r_();
}
function E() {
_i_("a41:209");
var t = i - 1;
0 === s ? s = t :s > t ? s = t :s -= 1, e[s] && e[s].focus(), _r_();
}
function w(t) {
if (_i_("a41:210"), !this.a11yNavMode) return _r_();
var e = this, i = t.keyCode;
switch (i) {
case 27:
t.preventDefault(), e.hide(), b(), v();
break;

case 37:
if (1 === _) return _r_();
E();
break;

case 39:
if (1 === _) return _r_();
C();
}
_r_();
}
function k(t) {
if (_i_("a41:211"), !this.a11yNavMode) return _r_();
var e, i, r = t.type, s = a(t.target), o = s.hasClass("c2-month") || s.hasClass("c2-month-table");
switch (r) {
case "focusin":
o && (e = s.data("id") || s.parent().data("id"), i = s.data("offset") || s.parent().data("offset"), e && i >= 0 && c(e, i), l(n, "monthFocus")), s.hasClass("c2-day") || v();
break;

case "focusout":
o && v();
}
_r_();
}
function S(t) {
if (_i_("a41:212"), !this.a11yNavMode) return _r_();
var e = this, i = t.target, n = t.keyCode, s = t._currentTarget || null, o = e.months[a(s).data("id")] || null, h = o ? a(o.element_) :null, c = h.find(".c2-day:not(.c2-day-s-disabled)"), f = c.length, g = f - 1;
function y() {
if (_i_("a41:226"), !a(i).hasClass("c2-day")) return _r_();
c.removeAttr("tabindex"), a(i).trigger("click", {
ignore:!0
}), l(e, "daySelected"), v(), i.title ? m(d + " " + i.title, !0) :b(), _r_();
}
switch (n) {
case 9:
1 === _ && (c.removeAttr("tabindex"), u(h), v(), C(), r = 0);
break;

case 37:
if (0 === _) return _r_();
if (t.preventDefault(), 0 === r) return r = g, c[r].focus(), _r_();
r -= 1, c[r].focus();
break;

case 38:
if (0 === _) return _r_();
if (t.preventDefault(), r -= 7, 0 > r) return r += 7, r = 0, h.find(".c2-month-table").focus(), c.removeAttr("tabindex"), v(), _r_();
c[r].focus();
break;

case 39:
if (0 === _) return _r_();
if (t.preventDefault(), r === g) return r = 0, c[r].focus(), _r_();
r += 1, c[r].focus();
break;

case 40:
if (t.preventDefault(), 0 === _) return c.attr("tabindex", -1), u(a(c[r])), p(), _r_();
if (r += 7, r > g) return r -= 7, _r_();
c[r].focus();
break;

case 13:
t.preventDefault(), y();
break;

case 32:
t.preventDefault(), y();
}
_r_();
}
function M(t, e) {
if (_i_("a41:213"), !this.a11yNavMode) return _r_();
if (e && e.ignore) return _r_();
var i = t.target, r = a(i);
(r.hasClass("c2-day-inner") || r.hasClass("c2-day")) && (l(n, "daySelected"), v(), i.title ? m(d + " " + i.title, !0) :b()), _r_();
}
function x(t) {
_i_("a41:214");
var e = a(t.target);
e.hasClass("c2-calendar-close-button") && b(), _r_();
}
function T() {
_i_("a41:215");
var e = t.require("trap-focus");
e && n.$calendarElement[0] && e.trap(n.$calendarElement[0]), _r_();
}
function $() {
_i_("a41:216"), n.$calendarElement.on("keydown", a.proxy(w, n)), n.$calendarElement.on("focusin focusout", a.proxy(k, n)), n.$viewport.find(".c2-month").on("keydown", a.proxy(S, n)), n.$viewport.on("click", a.proxy(M, n)), n.$header.on("click", a.proxy(x, n)), _r_();
}
function A() {
_i_("a41:217"), t.eventEmitter.on("CALENDAR:opened", function(t, e) {
_i_("a41:241");
var i = n.id(), a = e.id;
i !== a || n.states_.hidden || setTimeout(function() {
_i_("a41:251"), v(), n.$header && n.$header.focus(), l(n, "open"), _r_();
}, 25), _r_();
}), t.eventEmitter.on("CALENDAR:closed", function(t, e) {
_i_("a41:242");
var i = n.id(), a = e.id;
i === a && (n.a11yNavMode && y(!1), v()), _r_();
}), _r_();
}
function I() {
_i_("a41:218"), D(), g(), f(), T(), $(), A(), _r_();
}
I(), _r_();
}
}, _r_();
}(booking, booking.tools, booking.calendar2), function(t, e, i, n, a) {
_i_("a41:9");
var r = t.require("hijri-calendar"), s = "OTfdASFbLYQCLBMWLMSFKTSdZPBcfTRe", o = "index" === t.env.b_action && t.et.track(s);
i.Day = function(t, e, i, n) {
_i_("a41:44"), this.calendar_ = n, this.date_ = i, this.month_ = e, this.year_ = t, this.utcts_ = Date.UTC(t, e, i, 0, 0, 0, 0), this.id_ = this.utcts_, this.dateObject_ = new Date(this.utcts_), this.states_ = {}, this.stateClasses_ = "", _r_();
}, n.extend(i.Day.prototype, {
id:function() {
return _i_("a41:151"), _r_(this.id_);
},
valueOf:function() {
return _i_("a41:152"), _r_(this.utcts_);
},
toString:function() {
return _i_("a41:153"), _r_([ this.getDate(), this.getMonth() + 1, this.getYear() ].join("."));
},
setElement:function(t) {
return _i_("a41:154"), this.element_ = t, _r_(this);
},
getElement:function() {
return _i_("a41:155"), _r_(this.element_);
},
getStateClasses_:function() {
_i_("a41:156");
var t, e = [];
for (t in this.states_) this.states_.hasOwnProperty(t) && this.states_[t] && e.push("c2-day-s-" + t);
return _r_(e);
},
getStateClassNames_:function() {
return _i_("a41:157"), _r_(this.getStateClasses_().join(" "));
},
setTitle:function(t) {
_i_("a41:158"), this.element_.setAttribute("data-title", t), _r_();
},
removeTitle:function() {
_i_("a41:159"), this.element_.removeAttribute("data-title"), _r_();
},
applyStates_:function() {
if (_i_("a41:160"), !this.element_) return _r_();
var t = this.element_.className, e = this.stateClasses_ || "", i = this.getStateClasses_();
return i !== e && (e = e.split(" "), e.length > 0 && (t = t.replace(new RegExp(e.join("|"), "g"), "")), i.length > 0 && (t = t.replace(new RegExp(i.join("|"), "g"), "")), t = n.trim(t) + " " + i.join(" "), this.stateClasses_ = i.join(" "), this.element_.className = t), _r_(this);
},
addState:function(t) {
return _i_("a41:161"), this.states_[t] = !0, this.applyStates_(), _r_(this);
},
removeState:function(t) {
return _i_("a41:162"), this.states_[t] = !1, this.applyStates_(), _r_(this);
},
hasState:function(t) {
return _i_("a41:163"), _r_(this.states_[t]);
},
getDate:function() {
return _i_("a41:164"), _r_(this.date_);
},
getMonth:function() {
return _i_("a41:165"), _r_(this.month_);
},
getYear:function() {
return _i_("a41:166"), _r_(this.year_);
},
getFormattedDate:function() {
_i_("a41:167");
var t = this.getDate();
return _r_(10 > t ? "&nbsp;" + t :"" + t);
},
isWeekend:function() {
return _i_("a41:168"), _r_(0 === this.dateObject_.getUTCDay() || 6 === this.dateObject_.getUTCDay());
},
getHijriFormattedDate:function() {
_i_("a41:169");
var t = r.convert({
day:this.getDate(),
month:this.getMonth(),
year:this.getYear()
});
return _r_(t.hijri_day < 10 ? "&nbsp;" + t.hijri_day :"" + t.hijri_day);
},
getHTML:function() {
_i_("a41:170");
var e = "";
if (o) {
var i = this, n = i.getStateClassNames_(), a = h(i), s = i.getYear(), d = i.getDate(), l = _(i), c = l + " " + d + ", " + a + " " + s, u = "";
this.isWeekend() && this.addState("weekend"), n.indexOf("disabled") > 0 && (u = 'aria-hidden="true"'), e += '<td role="button" title="' + c + '" aria-label="' + c + '" class="c2-day ' + n + ' "', e += u, e += ' data-id="' + this.id() + '">', e += '<span aria-hidden="true" role="presentation" class="c2-day-inner">', e += this.getFormattedDate(), r.available() && (e += t.jstmpl("hijri_day").render({
hijriDate:this.getHijriFormattedDate()
})), e += "</span>", this.calendar_ && this.calendar_.options.pricePlaceHolder && (e += '<span class="c2-day-price">', e += '<i class="bicon bicon-search"></i>', e += "</span>"), e += "</td>";
} else this.isWeekend() && this.addState("weekend"), e += '<td class="c2-day ', e += this.getStateClassNames_(), e += '" data-id="' + this.id() + '">', e += '<span class="c2-day-inner">', e += this.getFormattedDate(), r.available() && (e += t.jstmpl("hijri_day").render({
hijriDate:this.getHijriFormattedDate()
})), e += "</span>", this.calendar_ && this.calendar_.options.pricePlaceHolder && (e += '<span class="c2-day-price">', e += '<i class="bicon bicon-search"></i>', e += "</span>"), e += "</td>";
return _r_(e);
}
});
function _(e) {
_i_("a41:22");
var i = t.env.b_weekday_formatted_date, n = e.dateObject_.getUTCDay();
return _r_(i[n].name || "");
}
function h(t) {
_i_("a41:23");
var e = t.calendar_, i = t.month_, n = e.options.monthNames;
return _r_(n[i] ? n[i] :"");
}
_r_();
}(booking, booking.tools, booking.calendar2, $), function(t, e, i, n, a) {
"use strict";
_i_("a41:10");
function r() {
_i_("a41:24");
var t = i.today();
return _r_(t);
}
function s() {
_i_("a41:25");
var e = i.today();
return t.env.b_search_max_months ? e.setMonth(e.getMonth() + t.env.b_search_max_months) :e.setFullYear(e.getFullYear() + 1), e.setDate(0), _r_(e);
}
i.defaults = {
startDate:r(),
endDate:s(),
defaultDate:null,
sundayFirst:!1,
direction:"ltr",
monthNames:[ "January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December" ],
dayNames:[ "Mo", "Tu", "We", "Th", "Fr", "Sa", "Su" ],
monthsVisible:2,
monthWidth:261,
monthHeight:210,
borderWidth:1,
extraClasses:"",
title:"",
mode:"single_date",
lazy:!1,
closeButton:!1,
closeOnDateSelected:!0,
onDayClick:function(t, e, i) {},
onDaySelected:function(t, e, i) {},
onRangeSelected:function(t, e, i, n) {},
onLazyInitiated:function(t) {}
}, _r_();
}(booking, booking.tools, booking.calendar2, $), function(t, e, i, n, a) {
_i_("a41:11");
var r = "OTfdASFbLYQCLBMWLMSFKTSdZPBcfTRe", s = "index" === t.env.b_action && t.et.track(r);
i.Month = function(t, e, i) {
_i_("a41:45"), this.calendar_ = i, this.month_ = e, this.year_ = t, this.utcts_ = Date.UTC(t, e, 1, 0, 0, 0, 0), this.id_ = "M" + this.utcts_, _r_();
}, n.extend(i.Month.prototype, {
id:function() {
return _i_("a41:175"), _r_(this.id_);
},
valueOf:function() {
return _i_("a41:176"), _r_(this.utcts_);
},
setElement:function(t) {
_i_("a41:177"), this.element_ = t, _r_();
},
getElement:function() {
return _i_("a41:178"), _r_(this.element_);
},
setOffset:function(t) {
_i_("a41:179"), this.element_ && this.element_.setAttribute("data-offset", t), this.offset_ = t, _r_();
},
setPosition:function(t) {
_i_("a41:180"), this.element_ && (this.element_.style.left = t + "px"), _r_();
},
getOffset:function() {
return _i_("a41:181"), _r_(this.offset_);
},
getHeight:function(t) {
return _i_("a41:182"), (t || !this.height_) && (this.height_ = n(this.getElement()).find(".c2-month-table").height()), _r_(this.height_);
},
getMonth:function() {
return _i_("a41:183"), _r_(this.month_);
},
getYear:function() {
return _i_("a41:184"), _r_(this.year_);
},
getTitle:function() {
_i_("a41:185");
var t = "", e = this.getYear(), i = this.getMonth();
return "function" == typeof this.calendar_.options.monthTitle && (t = this.calendar_.options.monthTitle(e, i)), t || (t = this.calendar_.options.monthNames[i] + " " + e), _r_(t);
},
getHTML:function() {
_i_("a41:186");
var e = this.getMonth(), n = this.getYear(), a = i.getNumberOfDaysInMonth(e, n), r = 1, o = new Date(n, e, 1).getDay(), _ = "";
if (this.calendar_.options.sundayFirst || (o = (o + 6) % 7), s) {
var h = t.jstmpl.translations("acc_cal_week_number"), d = this.getTitle(), l = 0;
_ += '<div class="c2-month" style="width:' + this.calendar_.options.monthWidth + 'px;" data-id="' + this.id() + '">', _ += '<table class="c2-month-table" aria-label="' + d + '" tabindex="0">', _ += '<thead role="presentation" aria-hidden="true">', _ += '<tr class="c2-month-header" role="presentation" aria-hidden="true"><th colspan="7" role="presentation" aria-hidden="true"  class="c2-month-header-monthname">' + d + "</th></tr>", _ += '<tr role="presentation" aria-hidden="true">';
for (var c = 0; 6 >= c; c++) _ += '<th role="presentation" aria-hidden="true" class="c2-month-header-dayname">', _ += '<abbr role="presentation" aria-hidden="true">' + this.calendar_.options.dayNames[c] + "</abbr>", _ += "</td>";
_ += "</tr>", _ += "</thead>", _ += '<tbody role="presentation">';
for (var c = 0; 9 > c; c++) {
l = c, l++, 0 === c && (_ += '<tr role="presentation" class="c2-week-number" aria-label="' + h + " " + l + '">');
for (var u = 0; 6 >= u; u++) a >= r && (c > 0 || u >= o) ? (_ += this.calendar_.createDay(n, e, r, this.calendar_).getHTML(), r++) :_ += '<td role="presentation" aria-hidden="true"></td>';
if (r > a) break;
l++, _ += '</tr><tr class="c2-week-number" role="presentation" aria-label="' + h + " " + l + '">';
}
_ += "</tr>", _ += "</tbody>", _ += "</table>", _ += '<div role="presentation" aria-hidden="true" class="c2-month__separator"></div>', _ += "</div>";
} else {
_ += '<div class="c2-month" style="width:' + this.calendar_.options.monthWidth + 'px;" data-id="' + this.id() + '">', _ += '<table class="c2-month-table">', _ += "<thead>", _ += '<tr class="c2-month-header"><th colspan="7" class="c2-month-header-monthname">' + this.getTitle() + "</th></tr>", _ += "<tr>";
for (var c = 0; 6 >= c; c++) _ += '<td class="c2-month-header-dayname">', _ += this.calendar_.options.dayNames[c], _ += "</td>";
_ += "</tr>", _ += "</thead>", _ += "<tbody>", _ += "<tr>";
for (var c = 0; 9 > c; c++) {
for (var u = 0; 6 >= u; u++) a >= r && (c > 0 || u >= o) ? (_ += this.calendar_.createDay(n, e, r, this.calendar_).getHTML(), r++) :_ += "<td></td>";
if (r > a) break;
_ += "</tr><tr>";
}
_ += "</tr>", _ += "</tbody>", _ += "</table>", _ += '<div class="c2-month__separator"></div>', _ += "</div>";
}
return _r_(_);
}
}), _r_();
}(booking, booking.tools, booking.calendar2, $), function(t, e, i, n, a) {
_i_("a41:12"), n.fn.calendar2 = function() {
_i_("a41:52"), i.Controller_ = function() {
_i_("a41:220"), this.instances_ = [], _r_();
}, i.Controller_.prototype.createCalendar = function(t, e) {
_i_("a41:221");
var n = new i.Calendar(t, e);
return this.addCalendar(n), _r_(n);
}, i.Controller_.prototype.addCalendar = function(t) {
return _i_("a41:222"), this.instances_.push(t), _r_(t);
}, i.Controller_.prototype.getCalendars = function() {
return _i_("a41:223"), _r_(this.instances_);
}, i.Controller_.prototype.each = function(t) {
if (_i_("a41:224"), "function" == typeof t) for (var e = 0; e < this.instances_.length && t.call(this.instances_[e], this.instances_[e]) !== !1; e++) ;
return _r_(this.instances_);
};
var t = i.controller = new i.Controller_();
return _r_(function(e, a) {
if (_i_("a41:219"), "all" === e) return _r_(t.getCalendars());
if ("each" === e) return _r_(t.each(a));
if ("show" === e) return _r_(t.each(function() {
_i_("a41:247"), this.show(), _r_();
}));
if ("hide" === e) return _r_(t.each(function() {
_i_("a41:249"), this.hide(), _r_();
}));
var r = e;
return _r_(this.each(function() {
_i_("a41:250");
var e = n(this), a = e.data(), s = a.calendar2;
a.calendar2Title && (r.title = a.calendar2Title), s ? s.setOptions(r) :t.createCalendar(e, n.extend({}, i.defaults, r, a)), _r_();
}));
});
}(), n(function() {
_i_("a41:46"), n(".calendar2").calendar2(), _r_();
}), _r_();
}(booking, booking.tools, booking.calendar2, $), booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.calendar2.run = !0);