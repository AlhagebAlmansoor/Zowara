var _i_ = this._i_ || function() {}, _r_ = this._r_ || function(e) {
return e;
};

booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.landing = {
loaded:!0,
run:!1
}), function(e, t, i) {
"use strict";
_i_("ec2:2");
var n, r = t.event;
r.special.smartresize = {
setup:function() {
_i_("ec2:879"), t(this).bind("resize", r.special.smartresize.handler), _r_();
},
teardown:function() {
_i_("ec2:880"), t(this).unbind("resize", r.special.smartresize.handler), _r_();
},
handler:function(e, i) {
_i_("ec2:881");
var r = this, o = arguments;
e.type = "smartresize", n && clearTimeout(n), n = setTimeout(function() {
_i_("ec2:1482"), t.event.handle.apply(r, o), _r_();
}, "execAsap" === i ? 0 :100), _r_();
}
}, t.fn.smartresize = function(e) {
return _i_("ec2:573"), _r_(e ? this.bind("smartresize", e) :this.trigger("smartresize", [ "execAsap" ]));
}, t.Mason = function(e, i) {
_i_("ec2:574"), this.element = t(i), this._create(e), this._init(), _r_();
}, t.Mason.settings = {
isResizable:!0,
isAnimated:!1,
animationOptions:{
queue:!1,
duration:500
},
gutterWidth:0,
isRTL:!1,
isFitWidth:!1,
containerStyle:{
position:"relative"
}
}, t.Mason.prototype = {
_filterFindBricks:function(e) {
_i_("ec2:882");
var t = this.options.itemSelector;
return _r_(t ? e.filter(t).add(e.find(t)) :e);
},
_getBricks:function(e) {
_i_("ec2:883");
var t = this._filterFindBricks(e).css({
position:"absolute"
}).addClass("masonry-brick");
return _r_(t);
},
_create:function(i) {
_i_("ec2:884"), this.options = t.extend(!0, {}, t.Mason.settings, i), this.styleQueue = [];
var n = this.element[0].style;
this.originalStyle = {
height:n.height || ""
};
var r = this.options.containerStyle;
for (var o in r) this.originalStyle[o] = n[o] || "";
this.element.css(r), this.horizontalDirection = this.options.isRTL ? "right" :"left", this.offset = {
x:parseInt(this.element.css("padding-" + this.horizontalDirection), 10),
y:parseInt(this.element.css("padding-top"), 10)
}, this.isFluid = this.options.columnWidth && "function" == typeof this.options.columnWidth;
var a = this;
setTimeout(function() {
_i_("ec2:1410"), a.element.addClass("masonry"), _r_();
}, 0), this.options.isResizable && t(e).bind("smartresize.masonry", function() {
_i_("ec2:1483"), a.resize(), _r_();
}), this.reloadItems(), _r_();
},
_init:function(e) {
_i_("ec2:885"), this._getColumns(), this._reLayout(e), _r_();
},
option:function(e, i) {
_i_("ec2:886"), t.isPlainObject(e) && (this.options = t.extend(!0, this.options, e)), _r_();
},
layout:function(e, t) {
_i_("ec2:887");
for (var i = 0, n = e.length; n > i; i++) this._placeBrick(e[i]);
var r = {};
if (r.height = Math.max.apply(Math, this.colYs), this.options.isFitWidth) {
var o = 0;
for (i = this.cols; --i && 0 === this.colYs[i]; ) o++;
r.width = (this.cols - o) * this.columnWidth - this.options.gutterWidth;
}
this.styleQueue.push({
$el:this.element,
style:r
});
var a, s = this.isLaidOut && this.options.isAnimated ? "animate" :"css", _ = this.options.animationOptions;
for (i = 0, n = this.styleQueue.length; n > i; i++) a = this.styleQueue[i], a.$el[s](a.style, _);
this.styleQueue = [], t && t.call(e), this.isLaidOut = !0, _r_();
},
_getColumns:function() {
_i_("ec2:888");
var e = this.options.isFitWidth ? this.element.parent() :this.element, t = e.width();
this.columnWidth = this.isFluid ? this.options.columnWidth(t) :this.options.columnWidth || this.$bricks.outerWidth(!0) || t, this.columnWidth += this.options.gutterWidth, this.cols = Math.floor((t + this.options.gutterWidth) / this.columnWidth), this.cols = Math.max(this.cols, 1), _r_();
},
_placeBrick:function(e) {
_i_("ec2:889");
var i, n, r, o, a, s = t(e);
if (i = Math.ceil(s.outerWidth(!0) / this.columnWidth), i = Math.min(i, this.cols), 1 === i) r = this.colYs; else for (n = this.cols + 1 - i, r = [], a = 0; n > a; a++) o = this.colYs.slice(a, a + i), r[a] = Math.max.apply(Math, o);
for (var _ = Math.min.apply(Math, r), c = 0, l = 0, d = r.length; d > l; l++) if (r[l] === _) {
c = l;
break;
}
var u = {
top:_ + this.offset.y
};
u[this.horizontalDirection] = this.columnWidth * c + this.offset.x, this.styleQueue.push({
$el:s,
style:u
});
var h = _ + s.outerHeight(!0), p = this.cols + 1 - d;
for (l = 0; p > l; l++) this.colYs[c + l] = h;
_r_();
},
resize:function() {
_i_("ec2:890");
var e = this.cols;
this._getColumns(), (this.isFluid || this.cols !== e) && this._reLayout(), _r_();
},
_reLayout:function(e) {
_i_("ec2:891");
var t = this.cols;
for (this.colYs = []; t--; ) this.colYs.push(0);
this.layout(this.$bricks, e), _r_();
},
reloadItems:function() {
_i_("ec2:892"), this.$bricks = this._getBricks(this.element.children()), _r_();
},
reload:function(e) {
_i_("ec2:893"), this.reloadItems(), this._init(e), _r_();
},
appended:function(e, t, i) {
if (_i_("ec2:894"), t) {
this._filterFindBricks(e).css({
top:this.element.height()
});
var n = this;
setTimeout(function() {
_i_("ec2:1484"), n._appended(e, i), _r_();
}, 1);
} else this._appended(e, i);
_r_();
},
_appended:function(e, t) {
_i_("ec2:895");
var i = this._getBricks(e);
this.$bricks = this.$bricks.add(i), this.layout(i, t), _r_();
},
remove:function(e) {
_i_("ec2:896"), this.$bricks = this.$bricks.not(e), e.remove(), _r_();
},
destroy:function() {
_i_("ec2:897"), this.$bricks.removeClass("masonry-brick").each(function() {
_i_("ec2:1310"), this.style.position = "", this.style.top = "", this.style.left = "", _r_();
});
var i = this.element[0].style;
for (var n in this.originalStyle) i[n] = this.originalStyle[n];
this.element.unbind(".masonry").removeClass("masonry").removeData("masonry"), t(e).unbind(".masonry"), _r_();
}
}, t.fn.imagesLoaded = function(e) {
_i_("ec2:575");
function i() {
_i_("ec2:898"), e.call(r, o), _r_();
}
function n(e) {
_i_("ec2:899");
var r = e.target;
r.src !== s && -1 === t.inArray(r, _) && (_.push(r), --a <= 0 && (setTimeout(i), o.unbind(".imagesLoaded", n))), _r_();
}
var r = this, o = r.find("img").add(r.filter("img")), a = o.length, s = "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///ywAAAAAAQABAAACAUwAOw==", _ = [];
return _r_((a || i(), o.bind("load.imagesLoaded error.imagesLoaded", n).each(function() {
_i_("ec2:1229");
var e = this.src;
this.src = s, this.src = e, _r_();
}), r));
};
var o = function(t) {
_i_("ec2:292"), e.console && e.console.error(t), _r_();
};
t.fn.masonry = function(e) {
if (_i_("ec2:293"), "string" == typeof e) {
var i = Array.prototype.slice.call(arguments, 1);
this.each(function() {
_i_("ec2:1230");
var n = t.data(this, "masonry");
if (!n) return o("cannot call methods on masonry prior to initialization; attempted to call method '" + e + "'"), _r_();
if (!t.isFunction(n[e]) || "_" === e.charAt(0)) return o("no such method '" + e + "' for masonry instance"), _r_();
n[e].apply(n, i), _r_();
});
} else this.each(function() {
_i_("ec2:1188");
var i = t.data(this, "masonry");
i ? (i.option(e || {}), i._init()) :t.data(this, "masonry", new t.Mason(e, this)), _r_();
});
return _r_(this);
}, _r_();
}(window, jQuery), B.define("component/checkin-checkout-selector", function(e, t, i) {
_i_("ec2:3");
var n = e("component"), r = e("event-emitter"), o = 864e5;
i.exports = n.extend({
init:function() {
_i_("ec2:900"), r.extend(this), this._findCheckinCheckoutSelectors(), this.interval = this.getInterval(), this._attachEvents(), this._updateCalendarsRanges(), _r_();
},
_onCalendarOpen:function(e) {
_i_("ec2:901");
var t = e.id;
t === this.checkinSelector.getCalendar().id() ? this.checkoutSelector.getCalendarElement().trigger("hide") :this.checkinSelector.getCalendarElement().trigger("hide"), _r_();
},
_onCheckinDateChange:function(e) {
_i_("ec2:902");
var t, i = this.interval || 1, n = this._getTodayDate();
this.checkinSelector.getFullDate().raw.getTime() < n.getTime() && (this.checkinSelector.setDate(n.getFullYear(), n.getMonth(), n.getDate()), this.interval = this.getInterval()), this.isCheckinCheckoutValid() || (t = this._getDateAfterInterval(this.checkinSelector.getFullDate().raw, i), this.checkoutSelector.setDate(t.getFullYear(), t.getMonth(), t.getDate())), this.interval = this.getInterval(), this._updateCalendarsRanges(), this.trigger("dates-changed", {
checkin:this.checkinSelector.getFullDate(),
checkout:this.checkoutSelector.getFullDate()
}), _r_();
},
_onCheckoutDateChange:function(e) {
_i_("ec2:903");
var t, i, n = this.interval || 1, r = this._getTodayDate();
this.checkoutSelector.getFullDate().raw.getTime() <= r.getTime() && (i = this._getDateAfterInterval(r, 1), this.checkoutSelector.setDate(i.getFullYear(), i.getMonth(), i.getDate()), this.interval = this.getInterval()), this.isCheckinCheckoutValid() || (t = this._getDateBeforeInterval(this.checkoutSelector.getFullDate().raw, n), t.getTime() < r.getTime() && (t = r), this.checkinSelector.setDate(t.getFullYear(), t.getMonth(), t.getDate())), this.interval = this.getInterval(), this._updateCalendarsRanges(), this.trigger("dates-changed", {
checkin:this.checkinSelector.getFullDate(),
checkout:this.checkoutSelector.getFullDate()
}), _r_();
},
_attachEvents:function() {
_i_("ec2:904"), this.checkinSelector.on("calendar-open", this._onCalendarOpen.bind(this)), this.checkoutSelector.on("calendar-open", this._onCalendarOpen.bind(this)), this.checkinSelector.on("date-change", this._onCheckinDateChange.bind(this)), this.checkoutSelector.on("date-change", this._onCheckoutDateChange.bind(this)), _r_();
},
_findCheckinCheckoutSelectors:function() {
_i_("ec2:905"), this.checkinSelector = this.$el.find("[data-checkin-selector='']").component("date-selector"), this.checkoutSelector = this.$el.find("[data-checkout-selector='']").component("date-selector"), _r_();
},
_getDateAfterInterval:function(e, t) {
return _i_("ec2:906"), _r_(new Date(e.getTime() + (t * o - 60 * e.getTimezoneOffset() * 1e3)));
},
_getDateBeforeInterval:function(e, t) {
return _i_("ec2:907"), _r_(new Date(e.getTime() - (t * o + 60 * e.getTimezoneOffset() * 1e3)));
},
_getTodayDate:function() {
_i_("ec2:908");
var e = new Date();
return _r_(new Date(e.getFullYear(), e.getMonth(), e.getDate()));
},
_updateCalendarsRanges:function() {
_i_("ec2:909");
var e = this.checkinSelector.getCalendarElement(), t = this.checkoutSelector.getCalendarElement(), i = this.checkinSelector.getFullDate(), n = this.checkoutSelector.getFullDate();
e && e.trigger("rangeSelected", {
startValue:i,
endValue:n
}), t && t.trigger("rangeSelected", {
startValue:i,
endValue:n
}), _r_();
},
isCheckinCheckoutValid:function() {
return _i_("ec2:910"), _r_(this.getInterval() > 0);
},
getInterval:function() {
_i_("ec2:911");
function e(e) {
return _i_("ec2:1189"), _r_(new Date(Date.UTC(e.getUTCFullYear(), e.getUTCMonth(), e.getUTCDate(), 0, 0, 0, 0)));
}
var t = e(this.checkinSelector.getFullDate().raw), i = e(this.checkoutSelector.getFullDate().raw);
return _r_(parseInt((i - t) / o, 10));
},
getCheckinSelector:function() {
return _i_("ec2:912"), _r_(this.checkinSelector);
},
getCheckoutSelector:function() {
return _i_("ec2:913"), _r_(this.checkoutSelector);
},
getDateRange:function() {
return _i_("ec2:914"), _r_({
checkin:this.checkinSelector.getFullDate().raw,
checkout:this.checkoutSelector.getFullDate().raw
});
},
getDateObjectsRange:function() {
return _i_("ec2:915"), _r_({
checkin:this.checkinSelector.getFullDate(),
checkout:this.checkoutSelector.getFullDate()
});
},
setDateRange:function(e, t) {
_i_("ec2:916"), this.checkinSelector.setDate(e.getFullYear(), e.getMonth(), e.getDate()), this.checkinSelector.broadcastDateChange(), this.checkoutSelector.setDate(t.getFullYear(), t.getMonth(), t.getDate()), this.checkoutSelector.broadcastDateChange(), _r_();
}
}), _r_();
}), B.define("component/date-selector", function(e, t, i) {
_i_("ec2:4");
var n = e("jquery"), r = e("component"), o = e("event-emitter"), a = e("formatting/date"), s = B.env.b_simple_weekdays_for_js.slice(0), _ = s.slice(0);
_.unshift(_.pop());
var c = B.env.b_short_months, l = B.env.sunday_first, d = B.env.b_lang;
i.exports = r.extend({
init:function() {
_i_("ec2:917"), o.extend(this);
var e = this.$el.find("[data-dateselector-calendar='']");
this.daySelect = this.$el.find("[data-dateselector-day='']"), this.monthYearSelect = this.$el.find("[data-dateselector-monthyear='']"), this.dateLabel = this.$el.find("[data-dateselector-label='']"), this.dateLabel && (this.dateFormat = this.dateLabel.data("date-format") || "date_with_year"), this.monthSelect = this.$el.find("[data-dateselector-month='']"), this.yearSelect = this.$el.find("[data-dateselector-year='']"), this.showWeekDays = !this.$el.data("no-weekdays"), this.$el.data("init-set-day-select") && this._updateDaySelect(this.getYear(), this.getMonth()), this.calendar = e.length ? this._initCalendar(e) :null, this._attachEvents(), this.$el.data("no-init-change-trigger") || this.monthYearSelect.trigger("change"), _r_();
},
_onMonthYearSelectChange:function() {
_i_("ec2:918");
var e = this.getDay(), t = this.getMonth(), i = this.getYear();
e = this._updateDaySelect(i, t), this.calendar && this._setCalendarDate(i, t, e), this.dateLabel.length > 0 && this._updateDateLabel(i, t, e), this.trigger("date-change", this._buildDateObject(i, t, e)), _r_();
},
_onDaySelectChange:function(e) {
_i_("ec2:919");
var t = this.getDay(), i = this.getMonth(), n = this.getYear();
this.calendar && this._setCalendarDate(n, i, t), this.dateLabel.length > 0 && this._updateDateLabel(n, i, t), this.trigger("date-change", this._buildDateObject(n, i, t)), _r_();
},
_onCalendarDateSelected:function(e, t, i) {
_i_("ec2:920");
var n = t.getYear(), r = t.getMonth(), o = t.getDate();
this._setSelectsDate(n, r, o), this.dateLabel.length > 0 && this._updateDateLabel(n, r, o), this.trigger("calendar-date-selected"), this.trigger("date-change", this._buildDateObject(n, r, o)), _r_();
},
_onCalendarOpened:function(e, t) {
_i_("ec2:921");
var i = this.calendar.data("calendar2");
i && t.id === i.id() && this.trigger("calendar-open", t), _r_();
},
_attachEvents:function() {
_i_("ec2:922"), this.monthYearSelect.bind("change", n.proxy(this._onMonthYearSelectChange, this)), this.daySelect.bind("change", n.proxy(this._onDaySelectChange, this)), this.monthSelect.bind("change", n.proxy(this._onMonthYearSelectChange, this)), this.yearSelect.bind("change", n.proxy(this._onMonthYearSelectChange, this)), _r_();
},
_initCalendar:function(e) {
if (_i_("ec2:923"), !n.fn.calendar2) return _r_(null);
var t = 1 === B.env.b_is_tablet ? 400 :261;
B.eventEmitter.bind("CALENDAR:opened", n.proxy(this._onCalendarOpened, this));
var i = booking.calendar2.defaults.startDate, r = new Date(i.getFullYear() + 1, i.getMonth() + 1, 0);
return B.env.b_search_max_months && (r = new Date(i.getFullYear(), i.getMonth() + B.env.b_search_max_months, 0)), _r_(n(e).calendar2({
dayNames:l ? _ :s,
sundayFirst:l,
monthNames:c,
endDate:r,
defaultDate:this.getFullDate(),
onDateSelected:n.proxy(this._onCalendarDateSelected, this),
direction:B.env.rtl ? "rtl" :"ltr",
closeButton:!0,
monthWidth:t,
arrow:!!this._showArrow,
monthTitle:function(e, t) {
if (_i_("ec2:1485"), B.env.b_year_months[e + "-" + (t + 1)]) return _r_(B.env.b_year_months[e + "-" + (t + 1)].name);
_r_();
}
}));
},
_setCalendarDate:function(e, t, i) {
_i_("ec2:924"), this.calendar.trigger("dateSelected", {
value:this._buildDateObject(e, t, i)
}), _r_();
},
_setSelectsDate:function(e, t, i) {
_i_("ec2:925"), this.monthYearSelect.val(e + "-" + (t + 1)), this._updateDaySelect(e, t), this.daySelect.val(i), _r_();
},
_updateDateLabel:function(e, t, i) {
_i_("ec2:926");
var n = a.format({
year:e,
month:t,
day:i
}, this.dateFormat);
this.dateLabel.html(n), _r_();
},
_buildDateObject:function(e, t, i) {
return _i_("ec2:927"), _r_({
date:i,
day:i,
month:t,
year:e,
string:e + "-" + (t + 1) + "-" + i,
raw:new Date(e, t, i)
});
},
_updateDaySelect:function(e, t) {
_i_("ec2:928");
var i, n, r = this.getDay();
if (isNaN(t) && (t = 0), this.daySelect.html(this._buildDayOptionsForMonthYear(e, t)), isNaN(r)) return _r_(NaN);
return i = this.daySelect.find("[value='" + r + "']"), n = i.length ? r :this.getDaysInMonth(e, t), this.daySelect.val(n), _r_(n);
},
_buildDayOptionsForMonthYear:function(e, t) {
_i_("ec2:929");
var i, n = new Date(e, t, 1), r = n.getDay(), o = this.getDaysInMonth(e, t), a = [], s = this.showWeekDays;
this.daySelect.find("option:first").val() || a.push("<option></option>");
for (var c = 1; o >= c; c++) i = s ? "ja" === d || "zh" === d || "ko" === d || "hu" === d ? c + " " + _[r] :_[r] + " " + c :c, a.push("<option value='" + c + "'>" + i + "</option>"), r = 6 === r ? 0 :r + 1;
return _r_(a.join(""));
},
getDaysInMonth:function(e, t) {
switch (_i_("ec2:930"), e = parseInt(e, 10), t) {
case 1:
return _r_(e % 4 === 0 && e % 100 !== 0 || e % 400 === 0 ? 29 :28);

case 0:
case 2:
case 4:
case 6:
case 7:
case 9:
case 11:
return _r_(31);

case 3:
case 5:
case 8:
case 10:
return _r_(30);
}
_r_();
},
getYear:function() {
if (_i_("ec2:931"), this.yearSelect.length) return _r_(parseInt(this.yearSelect.val() || this.yearSelect.find("option[selected]").val(), 10));
return _r_(parseInt((this.monthYearSelect.val() || this.monthYearSelect.find("option[selected]").val()).split("-")[0], 10));
},
getMonth:function() {
if (_i_("ec2:932"), this.monthSelect.length) return _r_(parseInt(this.monthSelect.val() || this.monthSelect.find("option[selected]").val(), 10) - 1);
return _r_(parseInt((this.monthYearSelect.val() || this.monthYearSelect.find("option[selected]").val()).split("-")[1], 10) - 1);
},
getDay:function() {
return _i_("ec2:933"), _r_(parseInt(this.daySelect.val() || this.daySelect.find("option[selected]").val(), 10));
},
getFullDate:function() {
_i_("ec2:934");
var e = this.getDay(), t = this.getMonth(), i = this.getYear();
return _r_(this._buildDateObject(i, t, e));
},
getCalendarElement:function() {
return _i_("ec2:935"), _r_(this.calendar);
},
getCalendar:function() {
if (_i_("ec2:936"), !this.calendar) return _r_(null);
return _r_(this.calendar.data("calendar2"));
},
setDate:function(e, t, i) {
_i_("ec2:937"), this._setSelectsDate(e, t, i), this.calendar && this._setCalendarDate(e, t, i), this.dateLabel.length > 0 && this._updateDateLabel(e, t, i), _r_();
},
broadcastDateChange:function() {
_i_("ec2:938");
var e = this.getDay(), t = this.getMonth(), i = this.getYear();
this.trigger("date-change", this._buildDateObject(i, t, e)), _r_();
}
}), _r_();
}), B.define("component/show-static-notification", function(e, t, i) {
_i_("ec2:5");
var n = e("component"), r = e("utils");
i.exports = n.extend({
init:function() {
if (_i_("ec2:939"), this.options = r.nodeData(this.$el), r.assertExists(this.options, "message"), r.assertExists(this.options, "show"), this.options.show && !this.options.show.match(/^(success|error)$/)) throw new Error("Undedined notification type");
var e = B.require("static-notification");
e[this.options.show](this.options.message), _r_();
}
}), _r_();
}), booking.components.define("legacy-emitter", function(e, t) {
_i_("ec2:6"), this.eventHandlers = {}, this.bind = function(e, t) {
return _i_("ec2:294"), this.eventHandlers[e] = this.eventHandlers[e] || [], this.eventHandlers[e].push(t), _r_(this);
}, this.once = function(e, t) {
_i_("ec2:295");
var i = this, n = function(r) {
_i_("ec2:1082"), i.unbind(e, n), t.apply(i, arguments), _r_();
};
return this.bind(e, n), _r_(this);
}, this.unbind = function(e, i) {
if (_i_("ec2:296"), this.eventHandlers[e] = this.eventHandlers[e] || [], i) {
var n = t.inArray(i, this.eventHandlers[e]);
-1 != n && this.eventHandlers[e].splice(n, 1);
} else this.eventHandlers[e] = [];
return _r_(this);
}, this.trigger = function(e, i) {
if (_i_("ec2:297"), !this.eventHandlers[e] || 0 == this.eventHandlers[e].length) return _r_(this);
var n = !1, r = this;
return t.each(this.eventHandlers[e], function(t, o) {
if (_i_("ec2:1083"), n) return _r_(!1);
o && o.call && o.call(r, {
type:e,
data:i,
stopPropagation:function() {
_i_("ec2:1551"), n = !0, _r_();
}
}), _r_();
}), _r_(this);
}, this.on = this.bind, this.off = this.unbind, _r_();
}), B.define("static-notification", function(e, t, i) {
"use strict";
_i_("ec2:7");
var n, r;
t.show = function() {
_i_("ec2:298"), n || (n = this._getElement());
var e = this._getHTML.apply(this, arguments);
n.html(e).loadComponents(), this._showElement(), clearTimeout(r), r = setTimeout(this._hideElement.bind(this), 5e3), _r_();
}, t.success = function(e) {
_i_("ec2:299"), this.show("success", e), _r_();
}, t.error = function(e) {
_i_("ec2:300"), this.show("error", e), _r_();
}, t._hideElement = function() {
_i_("ec2:301"), n.fadeOut(), _r_();
}, t._showElement = function() {
_i_("ec2:302"), n.fadeIn(), _r_();
}, t._getElement = function() {
return _i_("ec2:303"), _r_($('<div style="display:none">').appendTo("body"));
}, t._getHTML = function(e, t) {
_i_("ec2:304");
var i = {
level:e,
message:t
};
return _r_(B.jstmpl("static_notification").render(i));
}, _r_();
}), booking.components.define("spin-button", function(e, t) {
"use strict";
_i_("ec2:8");
var i, n, r, o, a, s, _ = e.components.require("legacy-emitter");
this.init = function(e) {
_i_("ec2:305"), n = e, r = n.find("input.component_spin_button_value"), s = n.attr("id"), o = n.data("lower-limit") || 0, a = n.data("upper-limit") || 1 / 0, n.find(".component_spin_button_minus").click(function() {
_i_("ec2:1084"), c(-1), _r_();
}), n.find(".component_spin_button_plus").click(function() {
_i_("ec2:1085"), c(1), _r_();
}), r.click(function(e) {
_i_("ec2:1411"), t(this).select(), _r_();
}).blur(function() {
_i_("ec2:1231"), t(this).val() ? c(0) :l(o), _r_();
}).keypress(function(e) {
_i_("ec2:1086");
var t = e.which, i = String.fromCharCode(t);
if (13 == t) return c(0), _r_();
if (!(t >= 35 && 40 >= t) && -1 == "0123456789".indexOf(i)) return e.preventDefault(), _r_(!1);
_r_();
}), _r_();
};
function c(e) {
_i_("ec2:160"), i = parseInt(n.find(".component_spin_button_value").val());
var t = i + e;
isNaN(t) || (a >= t && t >= o ? l(t) :t > a ? l(a) :o > t && l(o)), _r_();
}
function l(e) {
_i_("ec2:161"), r.val(e), i = e, _.trigger("spin-button-change", {
id:s,
value:i
}), _r_();
}
_r_();
}), B.define("component/checkin-checkout-calendar-input", function(e, t, i) {
_i_("ec2:9");
var n = e("component/checkin-checkout-selector"), r = 864e5;
i.exports = n.extend({
init:function() {
_i_("ec2:940"), n.prototype.init.apply(this, arguments), this._hasValidDates() && this._updateDates(), _r_();
},
_findCheckinCheckoutSelectors:function() {
_i_("ec2:941"), this.checkinSelector = this.$el.find("[data-checkin-selector='']").component("date-selector-input"), this.checkoutSelector = this.$el.find("[data-checkout-selector='']").component("date-selector-input"), _r_();
},
_hasValidDates:function() {
return _i_("ec2:942"), _r_("valid" == B.search.dates("checkin").type && "valid" == B.search.dates("checkout").type);
},
_getDates:function(e) {
_i_("ec2:943");
var t = {};
return "checkin" != e && e || (t.checkin = B.search.dates("checkin")), "checkout" != e && e || (t.checkout = B.search.dates("checkout")), _r_(t);
},
_getDateAfterInterval:function(e, t) {
return _i_("ec2:944"), t = 1, _r_(new Date(e.getTime() + t * r));
},
_attachEvents:function() {
_i_("ec2:945");
var e = this;
n.prototype._attachEvents.apply(this, arguments), B.eventEmitter.bind("SEARCH:date_changed", function() {
_i_("ec2:1311"), e._updateDates(), _r_();
}), this.on("dates-changed", function(e) {
_i_("ec2:1312"), B.search.dates("checkin", e.checkin), B.search.dates("checkout", e.checkout), _r_();
}), this.globalEmitter.bind("dates-calendar-close", function() {
_i_("ec2:1313"), e.checkoutSelector.getCalendarElement().trigger("hide"), e.checkinSelector.getCalendarElement().trigger("hide"), _r_();
}), this.checkinSelector.on("calendar-date-selected", function(t) {
_i_("ec2:1314"), setTimeout(function() {
_i_("ec2:1552"), e.checkoutSelector.getCalendarElement().click(), _r_();
}, 0), _r_();
}), _r_();
},
_updateDates:function() {
_i_("ec2:946");
var e = this._getDates();
this.checkinSelector.setDate(e.checkin.year, e.checkin.month, e.checkin.date), this.checkoutSelector.setDate(e.checkout.year, e.checkout.month, e.checkout.date), _r_();
}
}), _r_();
}), B.define("component/date-selector-input", function(e, t, i) {
_i_("ec2:10");
var n = e("component/date-selector"), r = e("event-emitter");
i.exports = n.extend({
init:function() {
_i_("ec2:947"), r.extend(this), this._showArrow = !0;
var e = this.$el.is("[data-dateselector-calendar='']") ? this.$el :this.$el.find("[data-dateselector-calendar='']");
this.input = this.$el.find("[data-dateselector-input='']"), this.calendar = e.length ? this._initCalendar(e) :null, this._attachEvents(), _r_();
},
_attachEvents:function() {},
_setSelectsDate:function(e, t, i) {
_i_("ec2:949"), e && !isNaN(e) && (this.$el.data("year", e), this.$el.data("month", t), this.$el.data("day", i), this.input.html(B.formatter.date(this._buildDateObject(e, t, i).string))), _r_();
},
getYear:function() {
return _i_("ec2:950"), _r_(parseInt(this.$el.data("year"), 10));
},
getMonth:function() {
return _i_("ec2:951"), _r_(parseInt(this.$el.data("month"), 10));
},
getDay:function() {
return _i_("ec2:952"), _r_(parseInt(this.$el.data("day"), 10));
}
}), _r_();
}), B.define("sb-ultra-focus", function(e, t, i) {
_i_("ec2:11");
var n, r = e("jquery"), o = e("event-emitter"), a = {
overlay:"sb_ultra_focus_overlay",
body:"has_ultra_focus"
}, s = {};
function _() {
_i_("ec2:162"), o.extend(this), this.$body = r("body"), _r_();
}
_.prototype.show = function() {
if (_i_("ec2:306"), n) return _r_(!1);
this.$el = r('<div class="' + a.overlay + '"/>').on("click", this.hide.bind(this)).appendTo(this.$body), this.$body.addClass(a.body), n = !0, this.trigger("shown"), _r_();
}, _.prototype.hide = function() {
if (_i_("ec2:307"), !n) return _r_(!1);
this.$el.remove(), this.$body.removeClass(a.body), n = !1, this.trigger("hidden"), _r_();
}, i.exports = {
getInstance:function(e) {
return _i_("ec2:725"), s[e] || (s[e] = new _(e)), _r_(s[e]);
}
}, _r_();
}), B.define("component/company/lp-return-bar/lp-return-bar", function(e, t, i) {
_i_("ec2:12");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("ec2:953"), this.setupHandlers(), _r_();
},
setupHandlers:function() {
_i_("ec2:954"), this.$el.find('[data-return-bar-dismiss], [data-return-bar-dismiss=""]').bind("click", this.dismiss.bind(this)), _r_();
},
dismiss:function(e) {
_i_("ec2:955"), ("msie" !== B.env.b_browser || B.env.b_browser_version > 9) && (this.$el.empty(), e.preventDefault(), history.replaceState({}, document.title, $(e.target).attr("href"))), _r_();
}
}), _r_();
}), B.define("leaving-users-lightbox", function() {
_i_("ec2:13");
var e = function() {}, t = {
customMaskClassName:"b_leaving_users_light_box_mask",
messageDelay:600,
lightboxRootClass:"b_leaving_users_light_box"
};
return e.prototype.init = function(e) {
if (_i_("ec2:309"), "object" != typeof e || !e.hasOwnProperty("lightboxContentBlock")) throw new Error("leaving-users-lightbox: `params` is not an object or it's missing required property: `lightboxContentBlock`!");
if (this.params = $.extend(t, e), this.page_ = $(document.documentElement), this.lightboxContentBlock_ = $(e.lightboxContentBlock), 0 === this.lightboxContentBlock_.length) return _r_();
this.lastMouseYCoords_ = [], this.messageTimeoutId_ = 0, this.lightbox_ = booking[sNSStartup].lightbox, this.windowFocused_ = !0, this.attachEvents_(), _r_();
}, e.prototype.isInitiated = function(e) {
return _i_("ec2:310"), _r_("undefined" != typeof this.lastMouseYCoords_);
}, e.prototype.attachEvents_ = function() {
_i_("ec2:311");
var e = this;
this.page_.bind({
"mousemove.LeavingUsersLightbox":function(t) {
_i_("ec2:1232"), e.onPageMouseMove_(t), _r_();
},
"mouseleave.LeavingUsersLightbox":$.proxy(this.onPageMouseLeave_, this)
}), $(window).focus(function() {
_i_("ec2:1233"), e.windowFocused_ = !0, _r_();
}).blur(function() {
_i_("ec2:1087"), e.windowFocused_ = !1, _r_();
}), _r_();
}, e.prototype.detachEvents_ = function() {
_i_("ec2:312"), this.page_.unbind(".LeavingUsersLightbox"), _r_();
}, e.prototype.onPageMouseMove_ = function(e) {
_i_("ec2:313"), clearTimeout(this.messageTimeoutId_), this.writeMouseCoords_(e), _r_();
}, e.prototype.onPageMouseLeave_ = function(e) {
if (_i_("ec2:314"), !this.wasMouseMoveUpwards_() || !this.strictCheck_(e)) return _r_();
var t = this;
clearTimeout(this.messageTimeoutId_), this.messageTimeoutId_ = setTimeout(function() {
_i_("ec2:1190"), t.detachEvents_(), t.showLeavingMessage_(), _r_();
}, t.params.messageDelay), _r_();
}, e.prototype.showLeavingMessage_ = function() {
_i_("ec2:315");
var e = this;
if (this.priorityfixperiment) {
if (B.et.stage(this.priorityfixperiment, 1), this.lightbox_.isVisible() && (B.et.stage(this.priorityfixperiment, 2), B.et.track(this.priorityfixperiment))) return this.attachEvents_(), _r_();
B.et.customGoal(this.priorityfixperiment, 1);
}
this.lightbox_.hide(), this.lightbox_.show(this.lightboxContentBlock_, {
customWrapperClassName:this.params.lightboxRootClass,
customMaskClassName:this.params.customMaskClassName,
bAnimation:!1,
hideCallBack:function() {
_i_("ec2:1234"), B.events.emit("leaving-users-lightbox:hide", {
lightbox:e.lightbox_,
lightboxSelector:e.params.lightboxContentBlock
}), _r_();
}
}, function() {
_i_("ec2:1088"), B.events.emit("leaving-users-lightbox:show", {
lightbox:e.lightbox_,
lightboxSelector:e.params.lightboxContentBlock
}), _r_();
}), _r_();
}, e.prototype.writeMouseCoords_ = function(e) {
_i_("ec2:316"), this.lastMouseYCoords_.push(e.pageY), this.lastMouseYCoords_.length > 2 && this.lastMouseYCoords_.shift(), _r_();
}, e.prototype.wasMouseMoveUpwards_ = function() {
return _i_("ec2:317"), _r_(this.lastMouseYCoords_.length >= 2 && this.lastMouseYCoords_[0] > this.lastMouseYCoords_[1]);
}, e.prototype.strictCheck_ = function(e) {
if (_i_("ec2:318"), !this.strictCheck) return _r_(!0);
return _r_(e.clientY < 30);
}, _r_(new e());
}), B.define("utils/throttled", function(e, t, i) {
_i_("ec2:14"), i.exports = function(e, t) {
_i_("ec2:319");
var i, n = 0;
function r() {
_i_("ec2:726");
for (var o = this, a = new Array(arguments.length), s = 0, _ = arguments.length; _ > s; s++) a[s] = arguments[s];
var c = +new Date();
if (n && clearTimeout(n), t > c - i) return n = setTimeout(function() {
_i_("ec2:1486"), r.apply(o, a), _r_();
}, t), _r_();
i = c, setTimeout(function() {
_i_("ec2:1235"), e.apply(o, a), _r_();
}), _r_();
}
return _r_(r);
}, _r_();
}), B.define("component/referral/bubble", function(e, t, i) {
"use strict";
_i_("ec2:15");
var n = e("component"), r = e("events");
i.exports = n.extend({
init:function() {
_i_("ec2:956"), this.$expander = this.$el.find(".referral_bubble_expander"), this.$content = this.$el.find(".referral_bubble_content"), this.$contentWrapper = this.$content.find(".referral_bubble_content-wrapper"), this.$contentContainer = this.$content.find(".referral_bubble_content-container"), this.$close = this.$el.find(".referral_bubble-close"), this.isExpanded = this.$el.data("is-expanded"), this.isExpanded && this.expand(), this.initListeners(), _r_();
},
initListeners:function() {
_i_("ec2:957");
var e = this;
this.$expander.on("click", function() {
_i_("ec2:1315"), e.expand(), _r_();
}), this.$contentContainer.on("click", function() {
_i_("ec2:1316"), e.collapse(), _r_();
}), this.$contentWrapper.on("click", function(e) {
_i_("ec2:1317"), e.stopPropagation(), _r_();
}), this.$close.on("click", function() {
_i_("ec2:1318"), e.collapse(), _r_();
}), r.on("referral_bubble:collapse", function() {
_i_("ec2:1319"), e.collapse(), _r_();
}), _r_();
},
expand:function() {
_i_("ec2:958"), this.$el.addClass("referral_bubble--expanded"), _r_();
},
collapse:function() {
_i_("ec2:959"), this.$el.removeClass("referral_bubble--expanded"), _r_();
}
}), _r_();
}), B.define("component/referral/floater", function(e, t, i) {
_i_("ec2:16");
var n = e("component"), r = e("ga-tracker");
i.exports = n.extend({
init:function() {
_i_("ec2:960");
var e = this;
this.$toggle = this.$el.find(".friend_landing_collapsible--header"), this.$toggleIcon = this.$el.find(".friend_landing_collapsible--toggle_icon"), this.$collapse = this.$el.find(".friend_landing_collapsible-action_button"), this.isMobile = this.$el.data("is-mobile"), this.toggleCollapseClass = this.$el.data("expanded-class"), this.toggleExpandClass = this.$el.data("collapsed-class"), this.isCollapsed = !!this.$el.data("is-collapsed"), this.isCollapsedClass = this.$el.data("landing-collapsed-class"), this.collapsingDisabled = this.$el.data("collapsing-disabled"), this.collapsingDisabled || (this.$toggle.on("click", function() {
_i_("ec2:1487"), e.isCollapsed ? e.expand() :e.collapse(), _r_();
}), this.$collapse.on("click", function() {
_i_("ec2:1488"), e.collapse(), _r_();
})), r.trackEvent(r.referralFriendTracker, "view", "friend_landing"), this.$el.find(".friend_landing_collapsible-tandc").on("click", function() {
_i_("ec2:1320"), r.trackEvent(r.referralFriendTracker, "click", "terms_and_conditions - source: friend_landing"), _r_();
}), _r_();
},
collapse:function() {
_i_("ec2:961"), this.$el.addClass(this.isCollapsedClass), this.$toggleIcon.removeClass(this.toggleCollapseClass), this.$toggleIcon.addClass(this.toggleExpandClass), this.isCollapsed = !0, r.trackEvent(r.referralFriendTracker, "collapse", "friend_landing"), _r_();
},
expand:function() {
_i_("ec2:962"), this.$el.removeClass(this.isCollapsedClass), this.$toggleIcon.addClass(this.toggleCollapseClass), this.$toggleIcon.removeClass(this.toggleExpandClass), this.isCollapsed = !1, r.trackEvent(r.referralFriendTracker, "expand", "friend_landing"), _r_();
}
}), _r_();
}), B.define("component/referral/ribbon", function(e, t, i) {
_i_("ec2:17");
var n = e("component"), r = e("jquery"), o = e("ga-tracker"), a = "index" === B.env.b_action;
if (a) var s = e("sb-ultra-focus").getInstance("raf_ribbon");
var _ = "-collapsed";
i.exports = n.extend({
init:function() {
_i_("ec2:963");
var e = this;
if (this.searchInput = r("#ss"), this._onToggleClickBinded = this.onToggleClick.bind(this), this._onRibbonClickBinded = this.onRibbonClick.bind(this), this.$el.on("click", this._onRibbonClickBinded), this.$toggle = this.$el.find(".referral_ribbon--toggle"), this.$toggle.on("click", this._onToggleClickBinded), a) {
s.on("shown", function() {
_i_("ec2:1489"), e.searchInput && e.searchInput.focus(), _r_();
});
var t = B.require("search/searchbox/searchbox-sticky-controller").getController();
t.on("show", function() {
_i_("ec2:1490"), s.hide(), _r_();
});
}
this.$actionButton = this.$el.find(".referral_ribbon--button"), this.$actionButton.on("click", function(e) {
_i_("ec2:1491"), e.stopPropagation(), this.collapse(), a && s.show(), o.trackEvent(o.referralFriendTracker, "click", "start-searching button on ribbon"), _r_();
}.bind(this)), this.$el.find(".referral_ribbon--terms a").on("click", function() {
_i_("ec2:1321"), o.trackEvent(o.referralFriendTracker, "click", "term_and_conditions - source: ribbon on" + B.env.b_action), _r_();
}), _r_();
},
onToggleClick:function(e) {
_i_("ec2:964"), e.stopPropagation(), this.collapse(), _r_();
},
onRibbonClick:function(e) {
_i_("ec2:965"), e.stopPropagation(), this.$el.hasClass(_) && (this.expand(), this.$el.off("click", this._onRibbonClickBinded), this.$toggle.on("click", this._onToggleClickBinded)), _r_();
},
collapse:function() {
_i_("ec2:966"), this.$el.addClass(_), this.$toggle.off("click", this._onToggleClickBinded), this.$el.on("click", this._onRibbonClickBinded), o.trackEvent(o.referralFriendTracker, "collapse", "ribbon"), _r_();
},
expand:function() {
_i_("ec2:967"), this.$el.removeClass(_), o.trackEvent(o.referralFriendTracker, "expand", "ribbon"), _r_();
}
}), _r_();
}), booking.jstmpl("index_share_widget_dynamic", function() {
_i_("ec2:144");
var e = [ "\n    ", '\n<div class="raf-promo-banner__icon">\n    ', '\n</div>\n<div class="raf-promo-banner__text">\n    ', '\n</div>\n<div class="raf-promo-banner__cta">\n    ', "\n        ", "\n\n\n\n", "\n	", "1", "\n", "\n\n", "b-button", "Button Text should be overriden", "button", "\n\n\n", "c-button", "0", "\n		", " b-button_primary ", "new_flat_cta", " b-button_secondary ", " b-button_warning", " b-button_disabled", " b-button_primary b-button_small", " b-button_secondary b-button_small", " b-button_warning b-button_small", " b-button_primary b-button_flat", "\n	\n	", " ", "--", "--primary", "\n\n	\n	", "--disabled", "\n\n	", 'id="', '"', 'href="', 'data-title="', 'type="', 'rel="', "data-", '="', " data-", 'target="', 'hotelUrl="', 'data-hotelid="', "<", ' class="', '" ', "data-hcta-summary ", 'data-track-event="', 'value="', '"/> ', '> <span class="b-button__text">', "</span> ", '<span class="b-button__from-text" ', 'style="display:inline-block"', ">", '<span class="b-button__from-text book_now_rt_summary g-hidden"></span> ', "</", "> ", "\n<", '\n	class="', '"\n	', "\n		data-hcta-summary\n	", "\n\n    ", '\n        data-track-event="', '"\n    ', '\n		value="', '"/>\n	', '\n	>\n		<span class="b-button__text">', "</span>\n\n		", '\n				<span class="b-button__from-text" ', "</span>\n		", "\n\n		", '\n				<span class="b-button__from-text book_now_rt_summary g-hidden"></span>\n		', "\n\n		</", ">\n	", "raf-promo-banner__cta-button new_flat_cta", "a", "primary", "raf-promo-banner__cta-button", "\n</div>\n" ], t = [ "share_icon", "fe_main_header", "fe_run_global_button_normalization_tech", "b_btn_class", "b_btn_id", "b_btn_text", "b_btn_outside_text", "b_btn_caption_text", "b_btn_tag", "b_btn_attr_type", "b_btn_attr", "b_btn_href", "b_btn_extra_classes", "b_btn_title", "b_btn_rel", "b_btn_target", "b_btn_data", "fe_cbtn_comp_class", "fe_cbtn_class", "fe_cbtn_type", "fe_cbtn_size", "fe_cbtn_disabled", "fe_cbtn_icon_only", "fe_cbtn_icon_left", "fe_cbtn_icon_right", "fe_cbtn_track_exp", "fe_cbtn_track_event", "fe_btn_track_event", "fe_cbtn_track_goal", "fe_cbtn_track_stage", "fe_cbtn_is_anchor", "fe_cbtn_is_input", "fe_cbtn_is_button", "fe_cbtn_no_style", "b_btn_hotel_url", "b_btn_data_hotelid", "b_text", "b_outside_text", "b_caption_text", "fe_new_flat_cta_class", "b_action", "b_site_type", "b_type", "fe_btn_type", "fe_btn_size", "fe_disabled", "b_tag", "fe_btn_is_anchor", "fe_btn_is_input", "fe_btn_is_button", "b_id", "b_href", "fe_btn_no_style", "b_extra_classes", "b_title", "b_attr_type", "b_attr", "b_rel", "b_data_id", "b_data_value", "b_data_id_2", "b_data_value_2", "b_data_id_3", "b_data_value_3", "b_data_id_4", "b_data_value_4", "b_data_id_5", "b_data_value_5", "b_target", "b_hotel_url", "b_data_hotelid", "fe_add_htca_summary", "b_from_price_inlined", "b_add_rt_summary", "raf_share_url", "raf_widget_share_cta" ];
return _r_(function(i) {
_i_("ec2:320");
var n = "", r = this.fn;
function o(i) {
_i_("ec2:727"), i += e[5], r.MJ("TWZdJNAHAZeOYZbKBNIPRfOcMXT") && r.MJ(r.track_experiment("TWZdJNAHAZeOYZbKBNIPRfOcMXT")) && (i += e[6], r.MN(t[2], e[7]), i += e[8]), i += e[9], r.MN(t[3], e[10]), i += e[8], r.MN(t[4], void 0), i += e[8], r.MN(t[5], e[11]), i += e[8], r.MN(t[6], void 0), i += e[8], r.MN(t[7], void 0), i += e[8], r.MN(t[8], e[12]), i += e[8], r.MN(t[9], void 0), i += e[8], r.MN(t[10], void 0), i += e[8], r.MN(t[11], void 0), i += e[8], r.MN(t[12], void 0), i += e[8], r.MN(t[13], void 0), i += e[8], r.MN(t[14], void 0), i += e[8], r.MN(t[15], void 0), i += e[8], r.MN(t[16], void 0), i += e[13], r.MN(t[17], e[14]), i += e[9], r.MN(t[18], void 0), i += e[8], r.MN(t[19], void 0), i += e[8], r.MN(t[20], void 0), i += e[8], r.MN(t[21], void 0), i += e[8], r.MN(t[22], void 0), i += e[8], r.MN(t[23], void 0), i += e[8], r.MN(t[24], void 0), i += e[8], r.MN(t[25], void 0), i += e[9], r.MD(t[27]) ? (i += e[6], r.MN(t[26], r.MB(t[27])), i += e[8]) :(i += e[6], r.MN(t[26], void 0), i += e[8]), i += e[9], r.MN(t[28], void 0), i += e[8], r.MN(t[29], void 0), i += e[9], r.MN(t[30], e[15]), i += e[8], r.MN(t[31], e[15]), i += e[8], r.MN(t[32], e[15]), i += e[9], r.MN(t[33], e[15]), i += e[13], r.MN(t[34], void 0), i += e[8], r.MN(t[35], void 0), i += e[9], r.MD(t[36]) && (i += e[6], r.MN(t[5], r.MC(t[36])), i += e[8]), i += e[9], r.MD(t[37]) && (i += e[6], r.MN(t[6], r.MC(t[37])), i += e[8]), i += e[9], r.MD(t[38]) && (i += e[6], r.MN(t[7], r.MC(t[38])), i += e[8]), i += e[9], r.MN(t[39], e[15]), i += e[8], r.MJ(r.MC(t[41]) + "" == "www") && (i += e[6], (r.MJ(r.MC(t[40]) + "" == "index") || r.MJ(r.MC(t[40]) + "" == "city") || r.MJ(r.MC(t[40]) + "" == "region") || r.MJ(r.MC(t[40]) + "" == "country") || r.MJ(r.MC(t[40]) + "" == "airport") || r.MJ(r.MC(t[40]) + "" == "district") || r.MJ(r.MC(t[40]) + "" == "landmark") || r.MJ(r.MC(t[40]) + "" == "searchresults") || r.MJ(r.MC(t[40]) + "" == "hotel") || r.MJ(r.MC(t[40]) + "" == "book")) && r.MJ(r.track_experiment("BBIWPYcYC")) && (i += e[16], r.MN(t[39], e[7]), i += e[6]), i += e[8]), i += e[9];
var n = r.MC(t[42]);
if (r.MJ(n + "" == "primary")) {
i += e[16];
var o = "";
o += [ r.MC(t[3]), e[17] ].join(""), r.MD(t[39]) && (o += e[18]), r.MN(t[3], o), i += e[6];
} else if (r.MJ(n + "" == "secondary")) {
i += e[16];
var o = "";
o += [ r.MC(t[3]), e[19] ].join(""), r.MD(t[39]) && (o += e[18]), r.MN(t[3], o), i += e[6];
} else r.MJ(n + "" == "warning") ? (i += e[16], r.MN(t[3], [ r.MC(t[3]), e[20] ].join("")), i += e[6]) :r.MJ(n + "" == "disabled") ? (i += e[16], r.MN(t[3], [ r.MC(t[3]), e[21] ].join("")), i += e[6]) :r.MJ(n + "" == "primary-small") ? (i += e[16], r.MN(t[3], [ r.MC(t[3]), e[22] ].join("")), i += e[6]) :r.MJ(n + "" == "secondary-small") ? (i += e[16], r.MN(t[3], [ r.MC(t[3]), e[23] ].join("")), i += e[6]) :r.MJ(n + "" == "warning-small") ? (i += e[16], r.MN(t[3], [ r.MC(t[3]), e[24] ].join("")), i += e[6]) :r.MJ(n + "" == "primary-flat") && (i += e[16], r.MN(t[3], [ r.MC(t[3]), e[25] ].join("")), i += e[8]);
if (i += e[9], r.MD(t[2]) && (i += e[26], r.MJ(/^(primary|secondary|warning)$/i.test(r.MB(t[43]))) ? (i += e[16], r.MN(t[18], [ r.MC(t[17]), e[27], r.MC(t[17]), e[28], r.MC(t[43]).toLowerCase() ].join("")), i += e[6]) :(i += e[16], r.MN(t[18], [ r.MC(t[17]), e[27], r.MC(t[17]), e[29] ].join("")), i += e[6]), i += e[30], r.MJ(/^(sm|lg)$/i.test(r.MB(t[44]))) && (i += e[16], r.MN(t[18], [ r.MC(t[18]), e[27], r.MC(t[17]), e[28], r.MC(t[44]).toLowerCase() ].join("")), i += e[6]), i += e[30], r.MD(t[45]) && (i += e[16], r.MN(t[18], [ r.MC(t[18]), e[27], r.MC(t[17]), e[31] ].join("")), i += e[6]), i += e[8]), i += e[9], r.MD(t[46]) && (i += e[6], r.MN(t[8], r.MC(t[46])), i += e[32], r.MJ(/^a$/i.test(r.MC(t[8]))) && r.MN(t[47], e[7]), i += e[6], r.MJ(/^input$/i.test(r.MC(t[8]))) && r.MN(t[48], e[7]), i += e[6], r.MJ(/^button$/i.test(r.MC(t[8]))) && r.MN(t[49], e[7]), i += e[8]), i += e[9], r.MD(t[50]) && (i += e[6], r.MN(t[4], [ e[33], r.MC(t[50]), e[34] ].join("")), i += e[8]), i += e[9], r.MD(t[51]) && (i += e[6], r.MN(t[11], [ e[35], r.MC(t[51]), e[34] ].join("")), i += e[8]), i += e[9], r.MD(t[52]) && (i += e[6], r.MN(t[33], r.MC(t[52])), i += e[8]), i += e[9], r.MD(t[53])) {
i += e[6];
var o = "";
r.MD(t[33]) || (o += r.MC(t[3])), o += [ e[27], r.MC(t[53]) ].join(""), r.MN(t[3], o), i += e[6], r.MD(t[2]) && r.MN(t[18], [ r.MC(t[18]), e[27], r.MC(t[53]) ].join("")), i += e[8];
}
return i += e[9], r.MD(t[54]) && (i += e[6], r.MN(t[13], [ e[36], r.F.entities(r.MC(t[54])), e[34] ].join("")), i += e[8]), i += e[9], r.MD(t[55]) && (i += e[6], r.MN(t[9], [ e[37], r.MC(t[55]), e[34] ].join("")), i += e[8]), i += e[9], r.MD(t[56]) && (i += e[6], r.MN(t[10], r.MC(t[56])), i += e[8]), i += e[9], r.MD(t[57]) && (i += e[6], r.MN(t[14], [ e[38], r.MC(t[57]), e[34] ].join("")), i += e[8]), i += e[9], r.MD(t[58]) && (i += e[0], r.MN(t[16], [ e[39], r.MC(t[58]), e[40], r.MC(t[59]), e[34] ].join("")), i += e[8]), i += e[9], r.MD(t[60]) && (i += e[0], r.MN(t[16], [ r.MC(t[16]), e[41], r.MC(t[60]), e[40], r.MC(t[61]), e[34] ].join("")), i += e[8]), i += e[9], r.MD(t[62]) && (i += e[0], r.MN(t[16], [ r.MC(t[16]), e[41], r.MC(t[62]), e[40], r.MC(t[63]), e[34] ].join("")), i += e[8]), i += e[9], r.MD(t[64]) && (i += e[0], r.MN(t[16], [ r.MC(t[16]), e[41], r.MC(t[64]), e[40], r.MC(t[65]), e[34] ].join("")), i += e[8]), i += e[9], r.MD(t[66]) && (i += e[0], r.MN(t[16], [ r.MC(t[16]), e[41], r.MC(t[66]), e[40], r.MC(t[67]), e[34] ].join("")), i += e[8]), i += e[9], r.MD(t[68]) && (i += e[6], r.MN(t[15], [ e[42], r.MC(t[68]), e[34] ].join("")), i += e[8]), i += e[5], r.MD(t[69]) && (i += e[6], r.MN(t[34], [ e[43], r.MC(t[69]), e[34] ].join("")), i += e[8]), i += e[9], r.MD(t[70]) && (i += e[6], r.MN(t[35], [ e[44], r.MC(t[70]), e[34] ].join("")), i += e[8]), i += e[9], r.MD(t[2]) ? (i += e[6], i += [ e[45], r.MC(t[8]), e[46], r.MB(t[18]), e[47] ].join(""), r.MD(t[30]) && (i += [ r.MC(t[11]), e[27] ].join("")), i += [ r.MC(t[4]), e[27] ].join(""), (r.MJ(r.MB(t[48])) || r.MJ(r.MB(t[49]))) && (i += [ r.MC(t[9]), e[27] ].join("")), i += [ r.MC(t[10]), e[27], r.MC(t[13]), e[27], r.MC(t[14]), e[27], r.MC(t[16]), e[27], r.MC(t[15]), e[27], r.MC(t[34]), e[27], r.MC(t[35]), e[27] ].join(""), r.MD(t[71]) && (i += e[48]), r.MD(t[26]) && (i += [ e[49], r.MB(t[26]), e[47] ].join("")), r.MD(t[48]) ? i += [ e[50], r.MC(t[5]), e[51] ].join("") :(i += [ e[52], r.MC(t[5]), e[53] ].join(""), r.MD(t[6]) && (i += e[54], r.MD(t[72]) && (i += e[55]), i += [ e[56], r.MC(t[6]), e[53] ].join("")), r.MD(t[73]) && (i += e[57]), i += [ e[58], r.MC(t[8]), e[59] ].join("")), i += e[8]) :(i += [ e[60], r.MC(t[8]), e[61], r.MC(t[3]), e[62], r.MC(t[11]), e[6], r.MC(t[4]), e[6], r.MC(t[9]), e[6], r.MC(t[10]), e[6], r.MC(t[13]), e[0], r.MC(t[14]), e[6], r.MC(t[16]), e[6], r.MC(t[15]), e[6], r.MC(t[34]), e[6], r.MC(t[35]), e[32] ].join(""), r.MD(t[71]) && (i += e[63]), i += e[64], r.MD(t[26]) && (i += [ e[65], r.MB(t[26]), e[66] ].join("")), i += e[32], r.MJ(r.MC(t[8]) + "" == "input") ? i += [ e[67], r.MC(t[5]), e[68] ].join("") :(i += [ e[69], r.MC(t[5]), e[70] ].join(""), r.MD(t[6]) && (i += e[71], r.MD(t[72]) && (i += e[55]), i += [ e[56], r.MC(t[6]), e[72] ].join("")), i += e[73], r.MD(t[73]) && (i += e[74]), i += [ e[75], r.MC(t[8]), e[76] ].join("")), i += e[8]), i += e[8], _r_(i);
}
function a(n) {
return _i_("ec2:728"), n += [ "", e[1], r.MC(t[0]), e[2], r.MC(t[1]), e[3] ].join(""), r.MJ(r.track_experiment("BBIWPYcYC")) ? (n += e[4], i.unshift({
b_extra_classes:e[77],
b_href:r.MB(t[74]),
b_tag:e[78],
b_text:r.MB(t[75]),
b_type:e[79],
fe_btn_no_style:e[7]
}), n = o(n), i.shift(), n += e[0]) :(n += e[4], i.unshift({
b_extra_classes:e[80],
b_href:r.MB(t[74]),
b_tag:e[78],
b_text:r.MB(t[75]),
b_type:e[79],
fe_btn_no_style:e[7]
}), n = o(n), i.shift(), n += e[0]), n += [ e[81], "" ].join(""), _r_(n);
}
return n += e[0], n = a(n), n += e[8], _r_(n);
});
}()), booking.jstmpl("employee_warning_banner", function() {
_i_("ec2:145");
var e, t = [ "\n    ", "\n", "https://docs.google.com/document/d/1pV449ALnM7jQms6xNW9ex8ElZy0Yobu3qdwe23aUbls/edit", "https://goo.gl/forms/7PCWu4oJZuusds8D2", '\n\n<div class="raf-employee-banner ', " ", "reb--is-collapsible", '">\n    <div class="raf-employee-banner__row reb--collapsed">\n        <p>', "/private/raf_employee_banner_clickdown_header/name", "</p>\n        ", "reb__chevron reb__chevron-down", "16", "fonticon/downchevron-thin", "\n        ", "reb__chevron reb__chevron-up", "fonticon/upchevron-thin", '\n    </div>\n    <div class="raf-employee-banner__container reb--expanded clearfix">\n        <div class="raf-employee-banner__column reb__column__img">\n            <img src="', '" class="reb__img">\n        </div>\n        <div class="raf-employee-banner__column reb__column__text">\n            <div class="reb__text">\n                <p>\n                    ', "\n                        ", "/private/raf_employee_banner_body_text/name", "\n                    ", "/private/raf_employee_banner_body_text_no_name/name", '\n                </p>\n            </div>\n            <div class="reb__links">\n                <a href="', '" class="reb__link" target="_blank">', "/private/raf_employee_banner_employee_faq_link/name", "", '</a>\n                |\n                <a href="', "/private/raf_employee_banner_feedback_link/name", '</a>\n            </div>\n        </div>\n    </div>\n    <i class="reb__arrow-down"></i>\n</div>\n', "true", "reb__index" ], i = [ "fe_banner_faq_link", "fe_banner_feedback_link", "fe_employee_banner_extra_classes", "fe_banner_is_collapsible", "b_companyname", "b_advocate_firstname" ];
return _r_(function(n) {
_i_("ec2:321");
var r = "", o = this.fn;
function a(r) {
return _i_("ec2:729"), r += t[1], o.MN(i[0], t[2]), r += t[1], o.MN(i[1], t[3]), r += [ t[4], o.MC(i[2]), t[5] ].join(""), o.MD(i[3]) && (r += t[6]), r += [ t[7], o.ME(t[8], o.MB, o.MN, null), t[9], (n.unshift({
"class":t[10],
height:t[11],
name:t[12],
width:t[11]
}), e = o.HELPER("icon", n[0]), n.shift(), e), t[13], (n.unshift({
"class":t[14],
height:t[11],
name:t[15],
width:t[11]
}), e = o.HELPER("icon", n[0]), n.shift(), e), t[16], o.STATIC_HOSTNAME("/static/img/referral/badge-icon.svg", 0, 0, 0), t[17] ].join(""), r += o.MD(i[5]) ? [ t[18], (n.unshift({
b_companyname:o.MC(i[4]),
user_first_name:o.MC(i[5])
}), e = o.ME(t[19], o.MB, o.MN, null), n.shift(), e), t[20] ].join("") :[ t[18], (n.unshift({
b_companyname:o.MC(i[4])
}), e = o.ME(t[21], o.MB, o.MN, null), n.shift(), e), t[20] ].join(""), r += [ t[22], o.MC(i[0]), t[23], (n.unshift({
end_link:t[25],
start_link:t[25]
}), e = o.ME(t[24], o.MB, o.MN, null), n.shift(), e), t[26], o.MC(i[1]), t[23], (n.unshift({
end_link:t[25],
start_link:t[25]
}), e = o.ME(t[27], o.MB, o.MN, null), n.shift(), e), t[28] ].join(""), _r_(r);
}
return r += t[0], n.unshift({
fe_banner_is_collapsible:t[29],
fe_employee_banner_extra_classes:t[30]
}), r = a(r), n.shift(), r += t[1], _r_(r);
});
}()), B.define("component/referral/index_share_widget_dynamic", function(e, t, i) {
_i_("ec2:18");
var n = e("component"), r = e("jquery"), o = e("ga-tracker");
i.exports = n.extend({
init:function() {
_i_("ec2:968"), this._renderWidgetWithRequest(), _r_();
},
_renderWidgetWithRequest:function() {
_i_("ec2:969"), r.ajax({
url:B.env.b_secure_domain + "/rafadvocatedetails",
type:"post",
data:{
user_id:this.$el.attr("data-user-id"),
secure_host_name:B.env.b_secure_domain,
source_id:"13"
},
context:this,
success:function(e) {
if (_i_("ec2:1492"), e) {
var t;
t = e.b_raf_reward_friend_with_currency && e.b_raf_reward_advocate_with_currency ? e.b_raf_reward_friend_with_currency !== e.b_raf_reward_advocate_with_currency || e.b_is_discount_campaign ? B.jstmpl.translations("raf_desktop_banner_different_reward_refer", null, {
b_companyname:B.env.b_companyname,
value_friend:e.b_is_discount_campaign ? (e.b_raf_reward_friend_percentage || "10") + "%" :e.b_raf_reward_friend_with_currency,
value_advocate:e.b_raf_reward_advocate_with_currency
}) :B.jstmpl.translations("raf_desktop_banner_same_reward_refer", null, {
b_companyname:B.env.b_companyname,
value_both:e.b_raf_reward_friend_with_currency
}) :this._getDefaultTitleText(), e.b_raf_employee_campaign && this._renderEmployeeBanner(e.b_advocate_firstname), this._renderWidgetContent({
title_copy_tag:t,
b_scoreboard_url:e.b_scoreboard_url
}), this.$el.find(".raf-promo-banner__cta-button").click(function() {
_i_("ec2:1638"), B.et.goalWithValue("js_raf_index_widget_cta", 1), o.trackEvent(o.referralAdvocateTracker, "click", "button on index_share_widget"), _r_();
}.bind(this));
}
_r_();
},
error:function() {
_i_("ec2:1493"), o.trackEvent(o.referralAdvocateTracker, "error", "index widget not loaded"), this._renderWidgetWithoutRequest(), _r_();
},
complete:function() {
_i_("ec2:1494"), this._hideWaitingIndicator(), _r_();
}
}), _r_();
},
_renderWidgetWithoutRequest:function() {
_i_("ec2:970"), this._renderWidgetContent({
title_copy_tag:this._getDefaultTitleText(),
b_scoreboard_url:this._getMyreferralsFallbackUrl()
}), this._hideWaitingIndicator(), _r_();
},
_hideWaitingIndicator:function() {
_i_("ec2:971"), this.$el.find(".raf-promo-banner__loader").hide(), _r_();
},
_renderWidgetContent:function(e) {
_i_("ec2:972");
var t = B.jstmpl.translations("raf_desktop_banner_button_begin_earning"), i = B.jstmpl("index_share_widget_dynamic").render({
fe_main_header:e.title_copy_tag,
raf_widget_share_cta:t,
share_icon:B.env["raf-mobile-phone-sharing"],
raf_share_url:e.b_scoreboard_url
});
this.$el.append(i), _r_();
},
_getDefaultTitleText:function() {
return _i_("ec2:973"), _r_(B.jstmpl.translations("raf_desktop_generic_reward_message_refer", null, {
b_companyname:B.env.b_companyname
}));
},
_getMyreferralsFallbackUrl:function() {
return _i_("ec2:974"), _r_(B.env.b_secure_domain + "/myreferrals" + B.env.b_query_params_with_lang);
},
_renderEmployeeBanner:function(e) {
_i_("ec2:975");
var t = B.jstmpl("employee_warning_banner").render({
b_advocate_firstname:e,
b_companyname:B.env.b_companyname
});
this.$el.before(t), _r_();
}
}), _r_();
}), booking.jstmpl("raf_tmpl_simple", function() {
_i_("ec2:146");
var e, t = [ "\n    ", '<div class="raf-promo-new -simple-v', '" data-url="', '">\n    <div class="raf-promo-new__main">\n        <h3>\n            ', "/private/raf_dashboard_index_page_non_logged_in_header/name", '\n        </h3>\n        <p class="raf-promo-new__txt">\n            ', "/private/raf_dashboard_index_page_non_logged_in_subhead/name", '\n        </p>\n    </div>\n    <div class="raf-promo-new__cta">\n        ', "/private/raf_dashboard_index_page_cta_button/name", "\n\n        ", "\n            ", "\n\n\n\n", "\n	", "1", "\n", "\n\n", "b-button", "Button Text should be overriden", "button", "\n\n\n", "c-button", "0", "\n		", " b-button_primary ", "new_flat_cta", " b-button_secondary ", " b-button_warning", " b-button_disabled", " b-button_primary b-button_small", " b-button_secondary b-button_small", " b-button_warning b-button_small", " b-button_primary b-button_flat", "\n	\n	", " ", "--", "--primary", "\n\n	\n	", "--disabled", "\n\n	", 'id="', '"', 'href="', 'data-title="', 'type="', 'rel="', "data-", '="', " data-", 'target="', 'hotelUrl="', 'data-hotelid="', "<", ' class="', '" ', "data-hcta-summary ", 'data-track-event="', 'value="', '"/> ', '> <span class="b-button__text">', "</span> ", '<span class="b-button__from-text" ', 'style="display:inline-block"', ">", '<span class="b-button__from-text book_now_rt_summary g-hidden"></span> ', "</", "> ", "\n<", '\n	class="', '"\n	', "\n		data-hcta-summary\n	", "\n\n    ", '\n        data-track-event="', '"\n    ', '\n		value="', '"/>\n	', '\n	>\n		<span class="b-button__text">', "</span>\n\n		", '\n				<span class="b-button__from-text" ', "</span>\n		", "\n\n		", '\n				<span class="b-button__from-text book_now_rt_summary g-hidden"></span>\n		', "\n\n		</", ">\n	", "raf-promo-new__cta-button new_flat_cta", "a", "primary", "\n        ", "raf-promo-new__cta-button", "\n    </div>\n</div>\n" ], i = [ "fe_raf_exp_variant", "fe_raf_url", "b_companyname", "fe_raf_cta", "fe_run_global_button_normalization_tech", "b_btn_class", "b_btn_id", "b_btn_text", "b_btn_outside_text", "b_btn_caption_text", "b_btn_tag", "b_btn_attr_type", "b_btn_attr", "b_btn_href", "b_btn_extra_classes", "b_btn_title", "b_btn_rel", "b_btn_target", "b_btn_data", "fe_cbtn_comp_class", "fe_cbtn_class", "fe_cbtn_type", "fe_cbtn_size", "fe_cbtn_disabled", "fe_cbtn_icon_only", "fe_cbtn_icon_left", "fe_cbtn_icon_right", "fe_cbtn_track_exp", "fe_cbtn_track_event", "fe_btn_track_event", "fe_cbtn_track_goal", "fe_cbtn_track_stage", "fe_cbtn_is_anchor", "fe_cbtn_is_input", "fe_cbtn_is_button", "fe_cbtn_no_style", "b_btn_hotel_url", "b_btn_data_hotelid", "b_text", "b_outside_text", "b_caption_text", "fe_new_flat_cta_class", "b_action", "b_site_type", "b_type", "fe_btn_type", "fe_btn_size", "fe_disabled", "b_tag", "fe_btn_is_anchor", "fe_btn_is_input", "fe_btn_is_button", "b_id", "b_href", "fe_btn_no_style", "b_extra_classes", "b_title", "b_attr_type", "b_attr", "b_rel", "b_data_id", "b_data_value", "b_data_id_2", "b_data_value_2", "b_data_id_3", "b_data_value_3", "b_data_id_4", "b_data_value_4", "b_data_id_5", "b_data_value_5", "b_target", "b_hotel_url", "b_data_hotelid", "fe_add_htca_summary", "b_from_price_inlined", "b_add_rt_summary" ];
return _r_(function(n) {
_i_("ec2:322");
var r = "", o = this.fn;
function a(e) {
_i_("ec2:730"), e += t[11], o.MJ("TWZdJNAHAZeOYZbKBNIPRfOcMXT") && o.MJ(o.track_experiment("TWZdJNAHAZeOYZbKBNIPRfOcMXT")) && (e += t[12], o.MN(i[4], t[13]), e += t[14]), e += t[15], o.MN(i[5], t[16]), e += t[14], o.MN(i[6], void 0), e += t[14], o.MN(i[7], t[17]), e += t[14], o.MN(i[8], void 0), e += t[14], o.MN(i[9], void 0), e += t[14], o.MN(i[10], t[18]), e += t[14], o.MN(i[11], void 0), e += t[14], o.MN(i[12], void 0), e += t[14], o.MN(i[13], void 0), e += t[14], o.MN(i[14], void 0), e += t[14], o.MN(i[15], void 0), e += t[14], o.MN(i[16], void 0), e += t[14], o.MN(i[17], void 0), e += t[14], o.MN(i[18], void 0), e += t[19], o.MN(i[19], t[20]), e += t[15], o.MN(i[20], void 0), e += t[14], o.MN(i[21], void 0), e += t[14], o.MN(i[22], void 0), e += t[14], o.MN(i[23], void 0), e += t[14], o.MN(i[24], void 0), e += t[14], o.MN(i[25], void 0), e += t[14], o.MN(i[26], void 0), e += t[14], o.MN(i[27], void 0), e += t[15], o.MD(i[29]) ? (e += t[12], o.MN(i[28], o.MB(i[29])), e += t[14]) :(e += t[12], o.MN(i[28], void 0), e += t[14]), e += t[15], o.MN(i[30], void 0), e += t[14], o.MN(i[31], void 0), e += t[15], o.MN(i[32], t[21]), e += t[14], o.MN(i[33], t[21]), e += t[14], o.MN(i[34], t[21]), e += t[15], o.MN(i[35], t[21]), e += t[19], o.MN(i[36], void 0), e += t[14], o.MN(i[37], void 0), e += t[15], o.MD(i[38]) && (e += t[12], o.MN(i[7], o.MC(i[38])), e += t[14]), e += t[15], o.MD(i[39]) && (e += t[12], o.MN(i[8], o.MC(i[39])), e += t[14]), e += t[15], o.MD(i[40]) && (e += t[12], o.MN(i[9], o.MC(i[40])), e += t[14]), e += t[15], o.MN(i[41], t[21]), e += t[14], o.MJ(o.MC(i[43]) + "" == "www") && (e += t[12], (o.MJ(o.MC(i[42]) + "" == "index") || o.MJ(o.MC(i[42]) + "" == "city") || o.MJ(o.MC(i[42]) + "" == "region") || o.MJ(o.MC(i[42]) + "" == "country") || o.MJ(o.MC(i[42]) + "" == "airport") || o.MJ(o.MC(i[42]) + "" == "district") || o.MJ(o.MC(i[42]) + "" == "landmark") || o.MJ(o.MC(i[42]) + "" == "searchresults") || o.MJ(o.MC(i[42]) + "" == "hotel") || o.MJ(o.MC(i[42]) + "" == "book")) && o.MJ(o.track_experiment("BBIWPYcYC")) && (e += t[22], o.MN(i[41], t[13]), e += t[12]), e += t[14]), e += t[15];
var n = o.MC(i[44]);
if (o.MJ(n + "" == "primary")) {
e += t[22];
var r = "";
r += [ o.MC(i[5]), t[23] ].join(""), o.MD(i[41]) && (r += t[24]), o.MN(i[5], r), e += t[12];
} else if (o.MJ(n + "" == "secondary")) {
e += t[22];
var r = "";
r += [ o.MC(i[5]), t[25] ].join(""), o.MD(i[41]) && (r += t[24]), o.MN(i[5], r), e += t[12];
} else o.MJ(n + "" == "warning") ? (e += t[22], o.MN(i[5], [ o.MC(i[5]), t[26] ].join("")), e += t[12]) :o.MJ(n + "" == "disabled") ? (e += t[22], o.MN(i[5], [ o.MC(i[5]), t[27] ].join("")), e += t[12]) :o.MJ(n + "" == "primary-small") ? (e += t[22], o.MN(i[5], [ o.MC(i[5]), t[28] ].join("")), e += t[12]) :o.MJ(n + "" == "secondary-small") ? (e += t[22], o.MN(i[5], [ o.MC(i[5]), t[29] ].join("")), e += t[12]) :o.MJ(n + "" == "warning-small") ? (e += t[22], o.MN(i[5], [ o.MC(i[5]), t[30] ].join("")), e += t[12]) :o.MJ(n + "" == "primary-flat") && (e += t[22], o.MN(i[5], [ o.MC(i[5]), t[31] ].join("")), e += t[14]);
if (e += t[15], o.MD(i[4]) && (e += t[32], o.MJ(/^(primary|secondary|warning)$/i.test(o.MB(i[45]))) ? (e += t[22], o.MN(i[20], [ o.MC(i[19]), t[33], o.MC(i[19]), t[34], o.MC(i[45]).toLowerCase() ].join("")), e += t[12]) :(e += t[22], o.MN(i[20], [ o.MC(i[19]), t[33], o.MC(i[19]), t[35] ].join("")), e += t[12]), e += t[36], o.MJ(/^(sm|lg)$/i.test(o.MB(i[46]))) && (e += t[22], o.MN(i[20], [ o.MC(i[20]), t[33], o.MC(i[19]), t[34], o.MC(i[46]).toLowerCase() ].join("")), e += t[12]), e += t[36], o.MD(i[47]) && (e += t[22], o.MN(i[20], [ o.MC(i[20]), t[33], o.MC(i[19]), t[37] ].join("")), e += t[12]), e += t[14]), e += t[15], o.MD(i[48]) && (e += t[12], o.MN(i[10], o.MC(i[48])), e += t[38], o.MJ(/^a$/i.test(o.MC(i[10]))) && o.MN(i[49], t[13]), e += t[12], o.MJ(/^input$/i.test(o.MC(i[10]))) && o.MN(i[50], t[13]), e += t[12], o.MJ(/^button$/i.test(o.MC(i[10]))) && o.MN(i[51], t[13]), e += t[14]), e += t[15], o.MD(i[52]) && (e += t[12], o.MN(i[6], [ t[39], o.MC(i[52]), t[40] ].join("")), e += t[14]), e += t[15], o.MD(i[53]) && (e += t[12], o.MN(i[13], [ t[41], o.MC(i[53]), t[40] ].join("")), e += t[14]), e += t[15], o.MD(i[54]) && (e += t[12], o.MN(i[35], o.MC(i[54])), e += t[14]), e += t[15], o.MD(i[55])) {
e += t[12];
var r = "";
o.MD(i[35]) || (r += o.MC(i[5])), r += [ t[33], o.MC(i[55]) ].join(""), o.MN(i[5], r), e += t[12], o.MD(i[4]) && o.MN(i[20], [ o.MC(i[20]), t[33], o.MC(i[55]) ].join("")), e += t[14];
}
return e += t[15], o.MD(i[56]) && (e += t[12], o.MN(i[15], [ t[42], o.F.entities(o.MC(i[56])), t[40] ].join("")), e += t[14]), e += t[15], o.MD(i[57]) && (e += t[12], o.MN(i[11], [ t[43], o.MC(i[57]), t[40] ].join("")), e += t[14]), e += t[15], o.MD(i[58]) && (e += t[12], o.MN(i[12], o.MC(i[58])), e += t[14]), e += t[15], o.MD(i[59]) && (e += t[12], o.MN(i[16], [ t[44], o.MC(i[59]), t[40] ].join("")), e += t[14]), e += t[15], o.MD(i[60]) && (e += t[0], o.MN(i[18], [ t[45], o.MC(i[60]), t[46], o.MC(i[61]), t[40] ].join("")), e += t[14]), e += t[15], o.MD(i[62]) && (e += t[0], o.MN(i[18], [ o.MC(i[18]), t[47], o.MC(i[62]), t[46], o.MC(i[63]), t[40] ].join("")), e += t[14]), e += t[15], o.MD(i[64]) && (e += t[0], o.MN(i[18], [ o.MC(i[18]), t[47], o.MC(i[64]), t[46], o.MC(i[65]), t[40] ].join("")), e += t[14]), e += t[15], o.MD(i[66]) && (e += t[0], o.MN(i[18], [ o.MC(i[18]), t[47], o.MC(i[66]), t[46], o.MC(i[67]), t[40] ].join("")), e += t[14]), e += t[15], o.MD(i[68]) && (e += t[0], o.MN(i[18], [ o.MC(i[18]), t[47], o.MC(i[68]), t[46], o.MC(i[69]), t[40] ].join("")), e += t[14]), e += t[15], o.MD(i[70]) && (e += t[12], o.MN(i[17], [ t[48], o.MC(i[70]), t[40] ].join("")), e += t[14]), e += t[11], o.MD(i[71]) && (e += t[12], o.MN(i[36], [ t[49], o.MC(i[71]), t[40] ].join("")), e += t[14]), e += t[15], o.MD(i[72]) && (e += t[12], o.MN(i[37], [ t[50], o.MC(i[72]), t[40] ].join("")), e += t[14]), e += t[15], o.MD(i[4]) ? (e += t[12], e += [ t[51], o.MC(i[10]), t[52], o.MB(i[20]), t[53] ].join(""), o.MD(i[32]) && (e += [ o.MC(i[13]), t[33] ].join("")), e += [ o.MC(i[6]), t[33] ].join(""), (o.MJ(o.MB(i[50])) || o.MJ(o.MB(i[51]))) && (e += [ o.MC(i[11]), t[33] ].join("")), e += [ o.MC(i[12]), t[33], o.MC(i[15]), t[33], o.MC(i[16]), t[33], o.MC(i[18]), t[33], o.MC(i[17]), t[33], o.MC(i[36]), t[33], o.MC(i[37]), t[33] ].join(""), o.MD(i[73]) && (e += t[54]), o.MD(i[28]) && (e += [ t[55], o.MB(i[28]), t[53] ].join("")), o.MD(i[50]) ? e += [ t[56], o.MC(i[7]), t[57] ].join("") :(e += [ t[58], o.MC(i[7]), t[59] ].join(""), o.MD(i[8]) && (e += t[60], o.MD(i[74]) && (e += t[61]), e += [ t[62], o.MC(i[8]), t[59] ].join("")), o.MD(i[75]) && (e += t[63]), e += [ t[64], o.MC(i[10]), t[65] ].join("")), e += t[14]) :(e += [ t[66], o.MC(i[10]), t[67], o.MC(i[5]), t[68], o.MC(i[13]), t[12], o.MC(i[6]), t[12], o.MC(i[11]), t[12], o.MC(i[12]), t[12], o.MC(i[15]), t[0], o.MC(i[16]), t[12], o.MC(i[18]), t[12], o.MC(i[17]), t[12], o.MC(i[36]), t[12], o.MC(i[37]), t[38] ].join(""), o.MD(i[73]) && (e += t[69]), e += t[70], o.MD(i[28]) && (e += [ t[71], o.MB(i[28]), t[72] ].join("")), e += t[38], o.MJ(o.MC(i[10]) + "" == "input") ? e += [ t[73], o.MC(i[7]), t[74] ].join("") :(e += [ t[75], o.MC(i[7]), t[76] ].join(""), o.MD(i[8]) && (e += t[77], o.MD(i[74]) && (e += t[61]), e += [ t[62], o.MC(i[8]), t[78] ].join("")), e += t[79], o.MD(i[75]) && (e += t[80]), e += [ t[81], o.MC(i[10]), t[82] ].join("")), e += t[14]), e += t[14], _r_(e);
}
function s(r) {
return _i_("ec2:731"), r += [ t[1], o.MC(i[0]), t[2], o.MC(i[1]), t[3], o.ME(t[4], o.MB, o.MN, null), t[5], (n.unshift({
b_companyname:o.MC(i[2])
}), e = o.ME(t[6], o.MB, o.MN, null), n.shift(), e), t[7] ].join(""), o.MN(i[3], o.ME(t[8], o.MB, o.MN, null)), r += t[9], o.MJ(o.track_experiment("BBIWPYcYC")) ? (r += t[10], n.unshift({
b_extra_classes:t[83],
b_href:o.MB(i[1]),
b_tag:t[84],
b_text:o.MB(i[3]),
b_type:t[85],
fe_btn_no_style:t[13]
}), r = a(r), n.shift(), r += t[86]) :(r += t[10], n.unshift({
b_extra_classes:t[87],
b_href:o.MB(i[1]),
b_tag:t[84],
b_text:o.MB(i[3]),
b_type:t[85],
fe_btn_no_style:t[13]
}), r = a(r), n.shift(), r += t[86]), r += t[88], _r_(r);
}
return r += t[0], r = s(r), r += t[14], _r_(r);
});
}()), booking.jstmpl("raf_tmpl_extended", function() {
_i_("ec2:147");
var e, t = [ "\n    ", '<div class="raf-promo-new -extended-v', " ", "index-raf-genius", '" data-url="', '">\n    <div class="raf-promo-new__main">\n        ', '\n            <img src="', '" class="index-raf-genius--giftbox">\n            <div class="index-raf-genius--body">\n        ', "\n        <h3>\n            ", "\n                ", "/private/ge_expand_raf_share_widget_share/name", "\n            ", "/private/raf_dashboard_index_page_logged_in_header/name", '\n        </h3>\n        <p class="raf-promo-new__txt">\n            ', "/private/raf_dashboard_index_page_logged_subhead_percent_reward_with_link/name", "\n                    ", "/private/ge_expand_raf_share_widget_share_text/name", "/private/raf_dashboard_index_page_logged_subhead_fixed_reward_with_link/name", "\n        </p>\n        ", "</div>", '\n    </div>\n    <div class="raf-promo-new__share-block clearfix">\n        ', '\n\n\n\n<div data-component="referral/copy-input">\n    <div class="raf-copy-input ', '">\n        <input\n            class="js-raf-copy-input"\n            name="raf-share-link"\n            type="text"\n            readonly=readonly\n            value="', '"\n        />\n        <i\n           class="raf-copy-btn js-raf-copy-btn"\n           data-component="tooltip"\n           data-tooltip-content="', "/private/raf_scoreboard_copied_to_clipboard/name", '"\n           data-tooltip-id="raf-copy-input-tooltip"\n           data-tooltip-custom-class="raf-copy-input__clipboard-tooltip"\n           data-tooltip-trigger=""\n        ></i>\n    </div>\n</div>\n', "-dashed", "\n        ", '\n            <div class="raf-promo-new__share-link">\n                <input name="raf-share-link" type="text" readonly="true" value="', '"/>\n                <i class="bicon-accopy"\n                   data-component="tooltip"\n                   data-tooltip-content="', '"\n                   data-tooltip-id="clipboard-tooltip"\n                   data-tooltip-custom-class="raf-promo-new__clipboard-tooltip"\n                   data-tooltip-trigger=""\n                ></i>\n            </div>\n        ', "\n\n", "/private/raf_friend_email_advocate_invite_subject_line/name", "/private/raf_friend_email_advocate_invite_subject_line_no_name/name", "/private/raf_friend_email_advocate_invite_header_percent_reward/name", "/private/raf_friend_email_advocate_invite_header_fixed_reward/name", "/private/raf_friend_email_advocate_body_text_first_line_booking_com/name", "/private/raf_friend_email_advocate_body_text_second_line_percent_link/name", "/private/raf_friend_email_advocate_body_text_second_line_fixed_value_link/name", "/private/raf_friend_email_advocate_invite_ps_ending/name", "/private/raf_email_share_copy_header_10_percent_version/name", "/private/raf_email_share_copy_header/name", "\n", "/private/raf_email_share_employee_campaign_subhead/name", "/private/raf_email_share_copy_main_10_percent_version/name", "/private/raf_email_share_copy_main/name", "/private/raf_email_share_copy_end_10_percent_version/name", "/private/raf_email_share_copy_end/name", '\n\n<div class="referral_share_buttons"\n    data-component="referral/share"\n    data-share-link="', '"\n>\n    <div class="raf_scoreboard--social_share">\n        ', '\n            <a class="raf_scoreboard--social_share_link -email js-raf-share-email"\n                href="mailto:?', "subject=", "&", "body=", '"\n                data-et-click="', ':1"\n            >\n                <img src="', '" alt="email" width="', '" height="', '" />\n            </a>\n        ', "\n\n        ", '\n            <a class="raf_scoreboard--social_share_link -facebook js-raf-share-facebook" href="https://www.facebook.com/sharer/sharer.php?u=', '">\n                <img src="', '" alt="facebook" width="', '\n            <a class="raf_scoreboard--social_share_link -messenger js-raf-share-messenger"\n                id="raf-share-messenger"\n                href="http://www.facebook.com/dialog/send?app_id=210068525731476&link=', "&redirect_uri=https://", '" alt="messenger" width="', '\n                <a class="raf_scoreboard--social_share_link -whatsapp js-raf-share-whatsapp" href="whatsapp://send?text=', '">\n                    <img src="', '" alt="whatsapp" width="', '" />\n                </a>\n            ', "/private/raf_share_copy_twitter_friendly_10_percent_version/name", "/private/raf_share_copy_twitter_friendly/name", '\n                <a class="raf_scoreboard--social_share_link -twitter js-raf-share-twitter"\n                href="http://twitter.com/intent/tweet?text=', '" alt="twitter" width="', '\n            <a class="raf_scoreboard--social_share_link -url js-raf-share-copy"\n                data-share-link="', '"\n                data-component="tooltip"\n                data-tooltip-content="', '"\n                data-tooltip-id="clipboard-tooltip"\n                data-tooltip-custom-class="raf_scoreboard--tooltip"\n                data-tooltip-trigger="">\n                <img src="', '" alt="Copy link" width="', "\n    </div>\n</div>\n\n\n", "\n  <script>\n    (function(w, d, s, id){\n      if (w.FB) return;\n\n      w.fbAsyncInit = function() {\n         FB.init({\n           appId      : '210068525731476',\n           xfbml      : true,\n           version    : 'v2.8'\n         });\n         FB.AppEvents.logPageView();\n      };\n\n      var js, fjs = d.getElementsByTagName(s)[0];\n      if (d.getElementById(id)) {return;}\n      js = d.createElement(s); js.id = id;\n      js.src = \"//connect.facebook.net/", "/sdk.js\";\n      fjs.parentNode.insertBefore(js, fjs);\n    }(window, document, 'script', 'facebook-jssdk'));\n  </script>\n\n  <div class=\"fb-root\"></div>\n", "1", "36", '\n        <div class="raf-promo-new__cta">\n            ', "/private/raf_dashboard_index_page_cta_button/name", "\n\n            ", "\n\n\n\n", "\n	", "b-button", "Button Text should be overriden", "button", "\n\n\n", "c-button", "0", "\n		", " b-button_primary ", "new_flat_cta", " b-button_secondary ", " b-button_warning", " b-button_disabled", " b-button_primary b-button_small", " b-button_secondary b-button_small", " b-button_warning b-button_small", " b-button_primary b-button_flat", "\n	\n	", "--", "--primary", "\n\n	\n	", "--disabled", "\n\n	", 'id="', '"', 'href="', 'data-title="', 'type="', 'rel="', "data-", '="', " data-", 'target="', 'hotelUrl="', 'data-hotelid="', "<", ' class="', '" ', "data-hcta-summary ", 'data-track-event="', 'value="', '"/> ', '> <span class="b-button__text">', "</span> ", '<span class="b-button__from-text" ', 'style="display:inline-block"', ">", '<span class="b-button__from-text book_now_rt_summary g-hidden"></span> ', "</", "> ", "\n<", '\n	class="', '"\n	', "\n		data-hcta-summary\n	", "\n\n    ", '\n        data-track-event="', '"\n    ', '\n		value="', '"/>\n	', '\n	>\n		<span class="b-button__text">', "</span>\n\n		", '\n				<span class="b-button__from-text" ', "</span>\n		", "\n\n		", '\n				<span class="b-button__from-text book_now_rt_summary g-hidden"></span>\n		', "\n\n		</", ">\n	", "raf-promo-new__cta-button new_flat_cta", "a", "primary", "raf-promo-new__cta-button", "\n        </div>\n    </div>\n</div>\n" ], i = [ "fe_raf_exp_variant", "fe_is_genius_raf", "fe_raf_url", "fe_referral_amount", "b_companyname", "fe_raf_reward_friend_percentage", "fe_is_discount_campaign", "fe_raf_v2_share_link", "fe_theme_class", "fe_share_link", "fe_raf_share_link", "subject_prefill", "fe_user_first_name", "email_prefill", "fe_raf_reward_friend", "b_site_vars_number_of_countries", "fe_exp_variant", "fe_is_employee_campaign", "fe_raf_reward_advocate", "fe_number_of_countries", "fe_raf_user_name", "fe_button_size", "fe_btn_size", "fe_include_all_buttons", "fe_include_email", "fe_include_facebook", "b_hostname", "b_is_desktop_site", "fe_include_messenger", "fe_include_whatsapp", "fe_twitter_message_discount", "fe_twitter_message_fixed", "fe_include_twitter", "fe_include_copy", "b_locale_for_facebook", "fe_raf_cta", "fe_run_global_button_normalization_tech", "b_btn_class", "b_btn_id", "b_btn_text", "b_btn_outside_text", "b_btn_caption_text", "b_btn_tag", "b_btn_attr_type", "b_btn_attr", "b_btn_href", "b_btn_extra_classes", "b_btn_title", "b_btn_rel", "b_btn_target", "b_btn_data", "fe_cbtn_comp_class", "fe_cbtn_class", "fe_cbtn_type", "fe_cbtn_size", "fe_cbtn_disabled", "fe_cbtn_icon_only", "fe_cbtn_icon_left", "fe_cbtn_icon_right", "fe_cbtn_track_exp", "fe_cbtn_track_event", "fe_btn_track_event", "fe_cbtn_track_goal", "fe_cbtn_track_stage", "fe_cbtn_is_anchor", "fe_cbtn_is_input", "fe_cbtn_is_button", "fe_cbtn_no_style", "b_btn_hotel_url", "b_btn_data_hotelid", "b_text", "b_outside_text", "b_caption_text", "fe_new_flat_cta_class", "b_action", "b_site_type", "b_type", "fe_btn_type", "fe_disabled", "b_tag", "fe_btn_is_anchor", "fe_btn_is_input", "fe_btn_is_button", "b_id", "b_href", "fe_btn_no_style", "b_extra_classes", "b_title", "b_attr_type", "b_attr", "b_rel", "b_data_id", "b_data_value", "b_data_id_2", "b_data_value_2", "b_data_id_3", "b_data_value_3", "b_data_id_4", "b_data_value_4", "b_data_id_5", "b_data_value_5", "b_target", "b_hotel_url", "b_data_hotelid", "fe_add_htca_summary", "b_from_price_inlined", "b_add_rt_summary" ];
return _r_(function(n) {
_i_("ec2:323");
var r = "", o = this.fn;
function a(r) {
if (_i_("ec2:732"), o.MJ(o.MB(i[16]))) {
r += t[31];
var a = "";
o.MD(i[12]) ? (n.unshift({
user_first_name:o.MB(i[12])
}), e = o.ME(t[32], o.MB, o.MN, null), n.shift(), a += e) :a += o.ME(t[33], o.MB, o.MN, null), o.MN(i[11], a), r += t[31];
var a = "";
o.MD(i[12]) && (o.MD(i[6]) ? (n.unshift({
user_first_name:o.MB(i[12]),
value_friend_percent:o.MB(i[5])
}), e = o.ME(t[34], o.MB, o.MN, null), n.shift(), a += e) :(n.unshift({
user_first_name:o.MB(i[12]),
value_friend:o.MB(i[14])
}), e = o.ME(t[35], o.MB, o.MN, null), n.shift(), a += e), a += t[31]), a += [ (n.unshift({
amount_countries:o.MC(i[15])
}), e = o.ME(t[36], o.MB, o.MN, o.MO(o.MC(i[15]), null, t[36])), n.shift(), e), t[31] ].join(""), o.MD(i[6]) ? (n.unshift({
value_friend_percent:o.MB(i[5])
}), e = o.ME(t[37], o.MB, o.MN, null), n.shift(), a += e) :(n.unshift({
value_friend:o.MB(i[14])
}), e = o.ME(t[38], o.MB, o.MN, null), n.shift(), a += e), a += [ t[31], o.MC(i[9]) ].join(""), o.MD(i[12]) && (a += [ t[31], (n.unshift({
user_first_name:o.MB(i[12])
}), e = o.ME(t[39], o.MB, o.MN, null), n.shift(), e) ].join("")), o.MN(i[13], a), r += t[31];
} else {
r += t[31], o.MN(i[11], void 0), r += t[31];
var a = "";
a += o.MD(i[6]) ? o.ME(t[40], o.MB, o.MN, null) :o.ME(t[41], o.MB, o.MN, null), a += t[42], o.MD(i[17]) ? a += [ o.ME(t[43], o.MB, o.MN, null), t[42] ].join("") :o.MD(i[6]) ? (n.unshift({
small_amount:o.MB(i[18])
}), e = o.ME(t[44], o.MB, o.MN, null), n.shift(), a += e) :(n.unshift({
small_amount:o.MB(i[18])
}), e = o.ME(t[45], o.MB, o.MN, null), n.shift(), a += e), a += [ t[31], o.MC(i[9]), t[31] ].join(""), a += o.MD(i[6]) ? o.ME(t[46], o.MB, o.MN, null) :o.ME(t[47], o.MB, o.MN, null), o.MN(i[13], a), r += t[31];
}
return _r_(r);
}
function s(r) {
return _i_("ec2:733"), r += t[31], n.unshift({
b_site_vars_number_of_countries:o.MB(i[19]),
fe_exp_variant:o.track_experiment("PGVfOOEeNJIYBdBaSPTaPORACMSCZUGBO"),
fe_is_discount_campaign:o.MB(i[6]),
fe_raf_reward_advocate:o.decode_entities(o.MB(i[3])),
fe_raf_reward_friend:o.decode_entities(o.MB(i[14])),
fe_raf_reward_friend_percentage:o.decode_entities(o.MB(i[5])),
fe_share_link:o.MC(i[9]).b_raf_share_link_email,
fe_user_first_name:o.MB(i[20])
}), r = a(r), n.shift(), r += t[31], o.MN("fe_btn_size", o.MB(i[21]) || "42"), r += [ t[48], o.MC(i[9]).b_raf_share_link_messenger, t[49] ].join(""), (o.MJ(o.MB(i[23])) || o.MJ(o.MB(i[24]))) && (r += t[50], o.MD(i[11]) && (r += [ t[51], o.F.url(o.MC(i[11])), t[52] ].join("")), r += [ t[53], o.F.url(o.MC(i[13])), t[54], "PGVfOOEeNJIYBdBaSPTaPORACMSCZUGBO", t[55], o.STATIC_HOSTNAME("/static/img/refer-a-friend_emails_social_buttons_email.png", 0, 0, 0), t[56], o.MC(i[22]), t[57], o.MC(i[22]), t[58] ].join("")), r += t[59], (o.MJ(o.MB(i[23])) || o.MJ(o.MB(i[25]))) && (r += [ t[60], o.MC(i[9]).b_raf_share_link_facebook, t[61], o.STATIC_HOSTNAME("/static/img/refer-a-friend_emails_social_buttons_facebook.png", 0, 0, 0), t[62], o.MC(i[22]), t[57], o.MC(i[22]), t[58] ].join("")), r += t[59], o.MJ(o.MC(i[27])) && (o.MJ(o.MB(i[23])) || o.MJ(o.MB(i[28]))) && (r += [ t[63], o.MC(i[9]).b_raf_share_link_messenger, t[64], o.MC(i[26]), t[61], o.STATIC_HOSTNAME("/static/img/refer-a-friend_emails_social_buttons_messenger.png", 0, 0, 0), t[65], o.MC(i[22]), t[57], o.MC(i[22]), t[58] ].join("")), r += t[27], (o.MJ(o.MB(i[23])) || o.MJ(o.MB(i[29]))) && (r += t[11], o.MD(i[27]) || (r += [ t[66], o.MC(i[9]).b_raf_share_link_whatsapp, t[67], o.STATIC_HOSTNAME("/static/img/refer-a-friend_emails_social_buttons_whatsapp.png", 0, 0, 0), t[68], o.MC(i[22]), t[57], o.MC(i[22]), t[69] ].join("")), r += t[27]), r += t[59], o.MN(i[30], (n.unshift({
share_link:o.MC(i[9]).b_raf_share_link_twitter
}), e = o.F.url(o.ME(t[70], o.MB, o.MN, null)), n.shift(), e)), r += t[27], o.MN(i[31], (n.unshift({
share_link:o.MC(i[9]).b_raf_share_link_twitter,
small_amount:o.MB(i[3])
}), e = o.ME(t[71], o.MB, o.MN, null), n.shift(), e)), r += t[59], (o.MJ(o.MB(i[23])) || o.MJ(o.MB(i[32]))) && (r += t[11], r += o.MD(i[6]) ? [ t[72], o.MB(i[30]), t[67], o.STATIC_HOSTNAME("/static/img/refer-a-friend_emails_social_buttons_twitter.png", 0, 0, 0), t[73], o.MC(i[22]), t[57], o.MC(i[22]), t[69] ].join("") :[ t[72], o.MB(i[31]), t[67], o.STATIC_HOSTNAME("/static/img/refer-a-friend_emails_social_buttons_twitter.png", 0, 0, 0), t[73], o.MC(i[22]), t[57], o.MC(i[22]), t[69] ].join(""), r += t[27]), r += t[59], (o.MJ(o.MB(i[23])) || o.MJ(o.MB(i[33]))) && (r += [ t[74], o.MC(i[9]).b_raf_share_link_copy, t[75], o.ME(t[24], o.MB, o.MN, null), t[76], o.STATIC_HOSTNAME("/static/img/refer-a-friend_emails_social_buttons_url.png", 0, 0, 0), t[77], o.MC(i[22]), t[57], o.MC(i[22]), t[58] ].join("")), r += t[78], o.MJ(o.MC(i[27])) && (r += [ t[79], o.MC(i[34]), t[80] ].join("")), r += t[42], _r_(r);
}
function _(e) {
_i_("ec2:734"), e += t[86], o.MJ("TWZdJNAHAZeOYZbKBNIPRfOcMXT") && o.MJ(o.track_experiment("TWZdJNAHAZeOYZbKBNIPRfOcMXT")) && (e += t[87], o.MN(i[36], t[81]), e += t[42]), e += t[31], o.MN(i[37], t[88]), e += t[42], o.MN(i[38], void 0), e += t[42], o.MN(i[39], t[89]), e += t[42], o.MN(i[40], void 0), e += t[42], o.MN(i[41], void 0), e += t[42], o.MN(i[42], t[90]), e += t[42], o.MN(i[43], void 0), e += t[42], o.MN(i[44], void 0), e += t[42], o.MN(i[45], void 0), e += t[42], o.MN(i[46], void 0), e += t[42], o.MN(i[47], void 0), e += t[42], o.MN(i[48], void 0), e += t[42], o.MN(i[49], void 0), e += t[42], o.MN(i[50], void 0), e += t[91], o.MN(i[51], t[92]), e += t[31], o.MN(i[52], void 0), e += t[42], o.MN(i[53], void 0), e += t[42], o.MN(i[54], void 0), e += t[42], o.MN(i[55], void 0), e += t[42], o.MN(i[56], void 0), e += t[42], o.MN(i[57], void 0), e += t[42], o.MN(i[58], void 0), e += t[42], o.MN(i[59], void 0), e += t[31], o.MD(i[61]) ? (e += t[87], o.MN(i[60], o.MB(i[61])), e += t[42]) :(e += t[87], o.MN(i[60], void 0), e += t[42]), e += t[31], o.MN(i[62], void 0), e += t[42], o.MN(i[63], void 0), e += t[31], o.MN(i[64], t[93]), e += t[42], o.MN(i[65], t[93]), e += t[42], o.MN(i[66], t[93]), e += t[31], o.MN(i[67], t[93]), e += t[91], o.MN(i[68], void 0), e += t[42], o.MN(i[69], void 0), e += t[31], o.MD(i[70]) && (e += t[87], o.MN(i[39], o.MC(i[70])), e += t[42]), e += t[31], o.MD(i[71]) && (e += t[87], o.MN(i[40], o.MC(i[71])), e += t[42]), e += t[31], o.MD(i[72]) && (e += t[87], o.MN(i[41], o.MC(i[72])), e += t[42]), e += t[31], o.MN(i[73], t[93]), e += t[42], o.MJ(o.MC(i[75]) + "" == "www") && (e += t[87], (o.MJ(o.MC(i[74]) + "" == "index") || o.MJ(o.MC(i[74]) + "" == "city") || o.MJ(o.MC(i[74]) + "" == "region") || o.MJ(o.MC(i[74]) + "" == "country") || o.MJ(o.MC(i[74]) + "" == "airport") || o.MJ(o.MC(i[74]) + "" == "district") || o.MJ(o.MC(i[74]) + "" == "landmark") || o.MJ(o.MC(i[74]) + "" == "searchresults") || o.MJ(o.MC(i[74]) + "" == "hotel") || o.MJ(o.MC(i[74]) + "" == "book")) && o.MJ(o.track_experiment("BBIWPYcYC")) && (e += t[94], o.MN(i[73], t[81]), e += t[87]), e += t[42]), e += t[31];
var n = o.MC(i[76]);
if (o.MJ(n + "" == "primary")) {
e += t[94];
var r = "";
r += [ o.MC(i[37]), t[95] ].join(""), o.MD(i[73]) && (r += t[96]), o.MN(i[37], r), e += t[87];
} else if (o.MJ(n + "" == "secondary")) {
e += t[94];
var r = "";
r += [ o.MC(i[37]), t[97] ].join(""), o.MD(i[73]) && (r += t[96]), o.MN(i[37], r), e += t[87];
} else o.MJ(n + "" == "warning") ? (e += t[94], o.MN(i[37], [ o.MC(i[37]), t[98] ].join("")), e += t[87]) :o.MJ(n + "" == "disabled") ? (e += t[94], o.MN(i[37], [ o.MC(i[37]), t[99] ].join("")), e += t[87]) :o.MJ(n + "" == "primary-small") ? (e += t[94], o.MN(i[37], [ o.MC(i[37]), t[100] ].join("")), e += t[87]) :o.MJ(n + "" == "secondary-small") ? (e += t[94], o.MN(i[37], [ o.MC(i[37]), t[101] ].join("")), e += t[87]) :o.MJ(n + "" == "warning-small") ? (e += t[94], o.MN(i[37], [ o.MC(i[37]), t[102] ].join("")), e += t[87]) :o.MJ(n + "" == "primary-flat") && (e += t[94], o.MN(i[37], [ o.MC(i[37]), t[103] ].join("")), e += t[42]);
if (e += t[31], o.MD(i[36]) && (e += t[104], o.MJ(/^(primary|secondary|warning)$/i.test(o.MB(i[77]))) ? (e += t[94], o.MN(i[52], [ o.MC(i[51]), t[2], o.MC(i[51]), t[105], o.MC(i[77]).toLowerCase() ].join("")), e += t[87]) :(e += t[94], o.MN(i[52], [ o.MC(i[51]), t[2], o.MC(i[51]), t[106] ].join("")), e += t[87]), e += t[107], o.MJ(/^(sm|lg)$/i.test(o.MB(i[22]))) && (e += t[94], o.MN(i[52], [ o.MC(i[52]), t[2], o.MC(i[51]), t[105], o.MC(i[22]).toLowerCase() ].join("")), e += t[87]), e += t[107], o.MD(i[78]) && (e += t[94], o.MN(i[52], [ o.MC(i[52]), t[2], o.MC(i[51]), t[108] ].join("")), e += t[87]), e += t[42]), e += t[31], o.MD(i[79]) && (e += t[87], o.MN(i[42], o.MC(i[79])), e += t[109], o.MJ(/^a$/i.test(o.MC(i[42]))) && o.MN(i[80], t[81]), e += t[87], o.MJ(/^input$/i.test(o.MC(i[42]))) && o.MN(i[81], t[81]), e += t[87], o.MJ(/^button$/i.test(o.MC(i[42]))) && o.MN(i[82], t[81]), e += t[42]), e += t[31], o.MD(i[83]) && (e += t[87], o.MN(i[38], [ t[110], o.MC(i[83]), t[111] ].join("")), e += t[42]), e += t[31], o.MD(i[84]) && (e += t[87], o.MN(i[45], [ t[112], o.MC(i[84]), t[111] ].join("")), e += t[42]), e += t[31], o.MD(i[85]) && (e += t[87], o.MN(i[67], o.MC(i[85])), e += t[42]), e += t[31], o.MD(i[86])) {
e += t[87];
var r = "";
o.MD(i[67]) || (r += o.MC(i[37])), r += [ t[2], o.MC(i[86]) ].join(""), o.MN(i[37], r), e += t[87], o.MD(i[36]) && o.MN(i[52], [ o.MC(i[52]), t[2], o.MC(i[86]) ].join("")), e += t[42];
}
return e += t[31], o.MD(i[87]) && (e += t[87], o.MN(i[47], [ t[113], o.F.entities(o.MC(i[87])), t[111] ].join("")), e += t[42]), e += t[31], o.MD(i[88]) && (e += t[87], o.MN(i[43], [ t[114], o.MC(i[88]), t[111] ].join("")), e += t[42]), e += t[31], o.MD(i[89]) && (e += t[87], o.MN(i[44], o.MC(i[89])), e += t[42]), e += t[31], o.MD(i[90]) && (e += t[87], o.MN(i[48], [ t[115], o.MC(i[90]), t[111] ].join("")), e += t[42]), e += t[31], o.MD(i[91]) && (e += t[0], o.MN(i[50], [ t[116], o.MC(i[91]), t[117], o.MC(i[92]), t[111] ].join("")), e += t[42]), e += t[31], o.MD(i[93]) && (e += t[0], o.MN(i[50], [ o.MC(i[50]), t[118], o.MC(i[93]), t[117], o.MC(i[94]), t[111] ].join("")), e += t[42]), e += t[31], o.MD(i[95]) && (e += t[0], o.MN(i[50], [ o.MC(i[50]), t[118], o.MC(i[95]), t[117], o.MC(i[96]), t[111] ].join("")), e += t[42]), e += t[31], o.MD(i[97]) && (e += t[0], o.MN(i[50], [ o.MC(i[50]), t[118], o.MC(i[97]), t[117], o.MC(i[98]), t[111] ].join("")), e += t[42]), e += t[31], o.MD(i[99]) && (e += t[0], o.MN(i[50], [ o.MC(i[50]), t[118], o.MC(i[99]), t[117], o.MC(i[100]), t[111] ].join("")), e += t[42]), e += t[31], o.MD(i[101]) && (e += t[87], o.MN(i[49], [ t[119], o.MC(i[101]), t[111] ].join("")), e += t[42]), e += t[86], o.MD(i[102]) && (e += t[87], o.MN(i[68], [ t[120], o.MC(i[102]), t[111] ].join("")), e += t[42]), e += t[31], o.MD(i[103]) && (e += t[87], o.MN(i[69], [ t[121], o.MC(i[103]), t[111] ].join("")), e += t[42]), e += t[31], o.MD(i[36]) ? (e += t[87], e += [ t[122], o.MC(i[42]), t[123], o.MB(i[52]), t[124] ].join(""), o.MD(i[64]) && (e += [ o.MC(i[45]), t[2] ].join("")), e += [ o.MC(i[38]), t[2] ].join(""), (o.MJ(o.MB(i[81])) || o.MJ(o.MB(i[82]))) && (e += [ o.MC(i[43]), t[2] ].join("")), e += [ o.MC(i[44]), t[2], o.MC(i[47]), t[2], o.MC(i[48]), t[2], o.MC(i[50]), t[2], o.MC(i[49]), t[2], o.MC(i[68]), t[2], o.MC(i[69]), t[2] ].join(""), o.MD(i[104]) && (e += t[125]), o.MD(i[60]) && (e += [ t[126], o.MB(i[60]), t[124] ].join("")), o.MD(i[81]) ? e += [ t[127], o.MC(i[39]), t[128] ].join("") :(e += [ t[129], o.MC(i[39]), t[130] ].join(""), o.MD(i[40]) && (e += t[131], o.MD(i[105]) && (e += t[132]), e += [ t[133], o.MC(i[40]), t[130] ].join("")), o.MD(i[106]) && (e += t[134]), e += [ t[135], o.MC(i[42]), t[136] ].join("")), e += t[42]) :(e += [ t[137], o.MC(i[42]), t[138], o.MC(i[37]), t[139], o.MC(i[45]), t[87], o.MC(i[38]), t[87], o.MC(i[43]), t[87], o.MC(i[44]), t[87], o.MC(i[47]), t[0], o.MC(i[48]), t[87], o.MC(i[50]), t[87], o.MC(i[49]), t[87], o.MC(i[68]), t[87], o.MC(i[69]), t[109] ].join(""), o.MD(i[104]) && (e += t[140]), e += t[141], o.MD(i[60]) && (e += [ t[142], o.MB(i[60]), t[143] ].join("")), e += t[109], o.MJ(o.MC(i[42]) + "" == "input") ? e += [ t[144], o.MC(i[39]), t[145] ].join("") :(e += [ t[146], o.MC(i[39]), t[147] ].join(""), o.MD(i[40]) && (e += t[148], o.MD(i[105]) && (e += t[132]), e += [ t[133], o.MC(i[40]), t[149] ].join("")), e += t[150], o.MD(i[106]) && (e += t[151]), e += [ t[152], o.MC(i[42]), t[153] ].join("")), e += t[42]), e += t[42], _r_(e);
}
function c(r) {
return _i_("ec2:735"), r += [ t[1], o.MC(i[0]), t[2] ].join(""), o.MD(i[1]) && (r += t[3]), r += [ t[4], o.MC(i[2]), t[5] ].join(""), o.MD(i[1]) && (r += [ t[6], o.STATIC_HOSTNAME("/static/img/genius/genius_trial/genius-gift-small.png", 0, 0, 0), t[7] ].join("")), r += t[8], r += o.MD(i[1]) ? [ t[9], (n.unshift({
amount_with_currency:o.MB(i[3])
}), e = o.ME(t[10], o.MB, o.MN, null), n.shift(), e), t[11] ].join("") :[ t[9], (n.unshift({
value_advocate:o.MB(i[3])
}), e = o.ME(t[12], o.MB, o.MN, null), n.shift(), e), t[11] ].join(""), r += t[13], o.MD(i[6]) ? r += [ t[9], (n.unshift({
b_companyname:o.MC(i[4]),
value_advocate:o.MB(i[3]),
value_percent_friend:o.MB(i[5])
}), e = o.ME(t[14], o.MB, o.MN, null), n.shift(), e), t[11] ].join("") :(r += t[9], r += o.MD(i[1]) ? [ t[15], (n.unshift({
amount_with_currency:o.MB(i[3])
}), e = o.ME(t[16], o.MB, o.MN, null), n.shift(), e), t[9] ].join("") :[ t[15], (n.unshift({
b_companyname:o.MC(i[4]),
value_both:o.MB(i[3])
}), e = o.ME(t[17], o.MB, o.MN, null), n.shift(), e), t[9] ].join(""), r += t[11]), r += t[18], o.MD(i[1]) && (r += t[19]), r += t[20], o.MJ(o.track_experiment("PGVfdDJdFMDULHHO")) ? (r += t[11], o.MN("fe_raf_share_link", o.MC(i[7]).b_raf_share_link_plain_text), r += t[11], n.unshift({
fe_share_link:o.MB(i[10]),
fe_theme_class:t[26]
}), r = l(r), n.shift(), r += t[27]) :r += [ t[28], o.MC(i[7]).b_raf_share_link_plain_text, t[29], o.ME(t[24], o.MB, o.MN, null), t[30] ].join(""), r += t[27], n.unshift({
b_companyname:o.MC(i[4]),
b_hostname:o.MC(i[26]),
b_is_desktop_site:t[81],
fe_button_size:t[82],
fe_include_email:t[81],
fe_include_facebook:t[81],
fe_include_messenger:t[81],
fe_include_twitter:t[81],
fe_is_discount_campaign:o.MB(i[6]),
fe_number_of_countries:o.MB(i[19]),
fe_raf_reward_advocate:o.MB(i[3]),
fe_raf_reward_friend:o.MB(i[14]),
fe_raf_reward_friend_percentage:o.MB(i[5]),
fe_raf_user_name:o.MB(i[20]),
fe_share_link:o.MB(i[7])
}), r = s(r), n.shift(), r += t[83], o.MN(i[35], o.ME(t[84], o.MB, o.MN, null)), r += t[85], o.MJ(o.track_experiment("BBIWPYcYC")) ? (r += t[9], n.unshift({
b_extra_classes:t[154],
b_href:o.MB(i[2]),
b_tag:t[155],
b_text:o.MB(i[35]),
b_type:t[156],
fe_btn_no_style:t[81]
}), r = _(r), n.shift(), r += t[11]) :(r += t[9], n.unshift({
b_extra_classes:t[157],
b_href:o.MB(i[2]),
b_tag:t[155],
b_text:o.MB(i[35]),
b_type:t[156],
fe_btn_no_style:t[81]
}), r = _(r), n.shift(), r += t[11]), r += t[158], _r_(r);
}
function l(e) {
return _i_("ec2:736"), e += [ t[21], o.MC(i[8]), t[22], o.MC(i[9]), t[23], o.ME(t[24], o.MB, o.MN, null), t[25] ].join(""), _r_(e);
}
return r += t[0], r = c(r), r += t[42], _r_(r);
});
}()), B.define("component/referral/raf-promo-new-dynamic", function(e, t, i) {
_i_("ec2:19");
var n = e("component"), r = e("jquery"), o = e("et"), a = e("ga-tracker"), s = e("tooltip"), _ = B.require("referral/clipboard"), c = "<TMP_V b_experiment_hash_raf_copy_input_widget>";
B.jstmpl.setup({
fn:{
decode_entities:function(e) {
_i_("ec2:1089");
var t = document.createElement("div");
return t.innerHTML = e, _r_(t.textContent);
}
}
}), i.exports = n.extend({
init:function() {
_i_("ec2:976"), r.ajax({
url:B.env.b_secure_domain + "/rafadvocatedetails",
type:"post",
data:{
user_id:this.$el.attr("data-user-id"),
secure_host_name:B.env.b_secure_domain,
source_id:"13"
},
context:this,
success:function(e) {
_i_("ec2:1495"), e && (e.b_advocate_code && e.b_scoreboard_url && e.b_raf_reward_advocate_with_currency ? this._renderExtended(e) :this._renderSimple(), this.$el.find(".raf-promo-new__cta-button").click(function() {
_i_("ec2:1626"), o.goalWithValue("js_raf_index_widget_cta", 1), a.trackEvent(a.referralAdvocateTracker, "click", "button on index_share_widget"), _r_();
})), _r_();
},
error:function() {
_i_("ec2:1496"), a.trackEvent(a.referralAdvocateTracker, "error", "index widget not loaded"), this._renderSimple(), _r_();
},
complete:function() {
_i_("ec2:1497"), this.$el.find(".raf-promo-new__loader").remove(), _r_();
}
}), _r_();
},
_renderSimple:function() {
_i_("ec2:977");
var e = B.jstmpl("raf_tmpl_simple").render({
fe_raf_exp_variant:this.$el.data("var"),
fe_raf_url:this.$el.data("url"),
b_companyname:B.env.b_companyname
});
this.$el.append(e), _r_();
},
_renderExtended:function(e) {
_i_("ec2:978");
var t = B.jstmpl("raf_tmpl_extended").render({
fe_raf_exp_variant:this.$el.data("var"),
fe_raf_user_name:this.$el.data("user-name"),
fe_raf_url:e.b_scoreboard_url,
fe_referral_amount:this.decodeEntities(e.b_raf_reward_advocate_with_currency),
fe_is_discount_campaign:e.b_is_discount_campaign,
fe_raf_reward_friend:this.decodeEntities(e.b_raf_reward_friend_with_currency),
fe_raf_reward_friend_percentage:e.b_raf_reward_friend_percentage,
fe_raf_v2_share_link:e.b_raf_v2_share_link,
fe_number_of_countries:this.$el.data("num-countries"),
fe_is_genius_raf:this.$el.data("ge-raf-exp"),
b_companyname:B.env.b_companyname,
b_hostname:B.env.b_hostname
});
this.$el.append(t).loadComponents(), o.track(c) || (this.$el.find(".raf-promo-new__share-link input").on("click", function() {
_i_("ec2:1498"), r(this).select(), o.goal("gm_share_copy"), _r_();
}), this.$el.find(".raf-promo-new__share-link .bicon-accopy").on("click", function() {
_i_("ec2:1499");
var e = r(this).siblings("input").val(), t = s.get("clipboard-tooltip");
_.copy(e, function(e) {
if (_i_("ec2:1608"), e) return _r_();
o.goal("gm_share_copy"), t && (t.show(), setTimeout(function() {
_i_("ec2:1651"), t.hide(), _r_();
}, 1e3)), _r_();
}), _r_();
})), _r_();
},
decodeEntities:function(e) {
_i_("ec2:979");
var t = document.createElement("textarea");
return t.innerHTML = e, _r_(t.value);
}
}), _r_();
}), B.define("referral/clipboard", function(e, t, i) {
_i_("ec2:20");
function n(e) {
_i_("ec2:163");
var t;
if ("SELECT" === e.nodeName) e.focus(), t = e.value; else if ("INPUT" === e.nodeName || "TEXTAREA" === e.nodeName) {
var i = e.hasAttribute("readonly");
i || e.setAttribute("readonly", ""), e.select(), e.setSelectionRange(0, e.value.length), i || e.removeAttribute("readonly"), t = e.value;
} else {
e.hasAttribute("contenteditable") && e.focus();
var n = window.getSelection(), r = document.createRange();
r.selectNodeContents(e), n.removeAllRanges(), n.addRange(r), t = n.toString();
}
return _r_(t);
}
var r = function() {};
r.prototype.copy = function(e, t) {
_i_("ec2:325"), this.text = e, this.isRTL = B.env.b_lang_rtl, "function" == typeof t && (this.copyCallback = t), this.selectFake(), _r_();
}, r.prototype.selectFake = function() {
_i_("ec2:326"), this.removeFake();
var e = document.createElement("textarea");
this.fakeElement = e, e.style.fontSize = "12pt", e.style.border = "0", e.style.padding = "0", e.style.margin = "0", e.style.position = "absolute", e.style[this.isRTL ? "right" :"left"] = "-9999px";
var t = window.pageYOffset || document.documentElement.scrollTop;
e.style.top = t + "px", e.setAttribute("readonly", ""), e.value = this.text, document.body.appendChild(e), n(e), this.copyText(), _r_();
}, r.prototype.removeFake = function() {
_i_("ec2:327"), this.fakeElement && (document.body.removeChild(this.fakeElement), this.fakeElement = null), _r_();
}, r.prototype.copyText = function() {
_i_("ec2:328");
var e;
try {
e = document.execCommand("copy");
} catch (t) {
e = !1;
}
this.handleResult(e), _r_();
}, r.prototype.handleResult = function(e) {
_i_("ec2:329"), this.copyCallback && (e ? this.copyCallback(null) :this.copyCallback(!0)), this.removeFake(), _r_();
}, i.exports = new r(), _r_();
}), B.define("component/referral/share", function(e, t, i) {
_i_("ec2:21");
var n = e("et"), r = e("ga-tracker"), o = e("tooltip"), a = e("referral/clipboard");
function s(e) {
_i_("ec2:164"), e && e.hide && e.hide(), _r_();
}
i.exports = e("component").extend({
init:function() {
_i_("ec2:980");
var e = this, t = this.$el.data("share-link");
this.$emailShare = this.$el.find(".js-raf-share-email"), this.$emailShare.on("click", function(e) {
_i_("ec2:1322"), n.goal("gm_share_email"), r.trackEvent(r.referralAdvocateTracker, "share - source: " + B.env.b_action, "click email button"), _r_();
}), this.$fbShare = this.$el.find(".js-raf-share-facebook"), this.$fbShare.on("click", function(t) {
_i_("ec2:1323"), t.preventDefault(), n.goal("gm_share_facebook"), e.showPopupWindow($(this).attr("href"), "Share", 480, 320), r.trackEvent(r.referralAdvocateTracker, "share - source: " + B.env.b_action, "click facebook button"), _r_();
}), this.$twShare = this.$el.find(".js-raf-share-twitter"), this.$twShare.on("click", function(t) {
_i_("ec2:1324"), t.preventDefault(), n.goal("gm_share_twitter"), e.showPopupWindow($(this).attr("href"), "Share", 480, 320), r.trackEvent(r.referralAdvocateTracker, "share - source: " + B.env.b_action, "click twitter button"), _r_();
}), this.$el.find(".raf-scoreboard--link").on("click", function(t) {
_i_("ec2:1325");
var i = $(this).val();
a.copy(i, function(i) {
if (_i_("ec2:1553"), i) return _r_(!1);
n.goal("gm_share_copy"), e.$urlShare.text(e.$urlShare.data("success-copy")), t.target.select(), _r_();
}), _r_();
}), this.$el.find(".raf-scoreboard--link").on("copy", function() {
_i_("ec2:1326"), r.trackEvent(r.referralAdvocateTracker, "copy link", "myreferrals"), _r_();
}), this.$urlShare = this.$el.find(".js-raf-share-copy"), this.$urlShare.on("click", function(t) {
_i_("ec2:1327"), t.preventDefault(), n.goal("gm_share_copy");
var i = e.$urlShare.data("share-link"), _ = o.get("clipboard-tooltip");
a.copy(i, function(t) {
if (_i_("ec2:1554"), t) return _r_(!1);
_ ? (_.show(), setTimeout(function() {
_i_("ec2:1639"), s(_), _r_();
}, 1e3)) :e.$urlShare.text(e.$urlShare.data("success-copy")), _r_();
}), r.trackEvent(r.referralAdvocateTracker, "share - source: " + B.env.b_action, "click url button"), _r_();
}), this.$whatsappShare = this.$el.find(".js-raf-share-whatsapp"), this.$whatsappShare.on("click", function(e) {
_i_("ec2:1328"), n.goal("gm_share_whatsapp"), r.trackEvent(r.referralAdvocateTracker, "share - source: " + B.env.b_action, "click whatsapp button"), _r_();
}), this.$smsShare = this.$el.find(".js-raf-share-sms"), this.$smsShare.on("click", function(e) {
_i_("ec2:1329"), n.customGoal("PGVfCDMLTaebCHe", 1), r.trackEvent(r.referralAdvocateTracker, "share - source: " + B.env.b_action, "click sms button"), _r_();
}), this.$messengerShare = this.$el.find(".raf_scoreboard--social_share_link.-messenger, .js-raf-share-messenger"), this.$messengerShare.on("click", function(e) {
_i_("ec2:1330"), e.preventDefault(), n.goal("gm_share_messenger"), r.trackEvent(r.referralAdvocateTracker, "share - source: " + B.env.b_action, "click messenger button"), "undefined" != typeof FB && "undefined" != typeof FB.ui && (t || (t = $(this).data("share-link")), FB.ui({
method:"send",
link:t
})), _r_();
}), _r_();
},
showPopupWindow:function(e, t, i, n) {
_i_("ec2:981");
var r = window.screen.width / 2 - i / 2, o = window.screen.height / 2 - n / 2;
return _r_(window.open(e, t, "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + i + ", height=" + n + ", top=" + o + ", left=" + r));
}
}), _r_();
}), B.define("component/referral/friend-landing-modal", function(e, t, i) {
_i_("ec2:22");
var n, r = e("component"), o = e("lightbox"), a = e("ga-tracker"), s = e("jquery"), _ = B.env, c = e("browser-storage-handler");
"www" === _.b_site_type && (n = e("sb-ultra-focus").getInstance("raf_landing")), booking.jstmpl("friend_landing_card", function() {
_i_("ec2:576");
var e, t = [ "\n        ", '<div class="raf-friend-landing-card">\n\n    <!-- Hand logo -->\n    <div class="raf-friend-landing-card__logo">\n\n    </div>\n\n\n    <!-- Main content -->\n    <div class="raf-friend-landing-card__content">\n        <div class="raf-friend-landing-card__title">\n            ', "/private/raf_friend_lightbox_title/name", '\n        </div>\n\n        <div class="raf-friend-landing-card__subtitle">\n            ', "/private/raf_friend_lightbox_subtitle/name", "\n        </div>\n\n        ", "/private/raf_friend_lightbox_step_1_description/name", "/private/raf_friend_lightbox_step_2_description/name", "/private/raf_friend_lightbox_step_3_description/name", "\n\n\n\n\n\n\n\n\n\n\n\n\n\n", "\n", "\n\n", '\n\n<div class="raf-referral-steps ', '">\n    <table class="raf-referral-steps__table ', '">\n        <tr>\n            <td class="raf-referral-steps__step-wrapper">', "\n    ", '\n    <div class="raf-referral-steps__step">\n        <div class="raf-referral-steps__step-number">\n            ', "\n        </div>\n        ", "\n            <h2 class='raf-referral-step__title'>", "</h2>\n        ", "\n        <p>", "</p>\n    </div>\n", '</td>\n            <td class="raf-referral-steps__step-wrapper">', "</td>\n        </tr>\n    </table>\n</div>\n\n", "-modal", '\n        <!-- Call to action -->\n        <div class="raf-friend-landing-card__action">\n            <a class="raf-friend-landing-card__button" href="#">\n                ', "/private/raf_friend_lightbox_button_text/name", "\n            </a>\n        </div>\n    </div>\n</div>\n" ], i = [ "reward_value", "advocate_name", "fe_raf_friend_lightbox_step_1_description_translated", "fe_raf_friend_lightbox_step_2_description_translated", "fe_raf_friend_lightbox_step_3_description_translated", "fe_first_step_number_label", "raf_friend_lightbox_step_1", "fe_second_step_number_label", "raf_friend_lightbox_step_2", "fe_third_step_number_label", "raf_friend_lightbox_step_3", "fe_extra_class", "fe_step", "fe_title", "fe_description", "fe_step1description_translated", "fe_step_1_title_translated", "fe_step2description_translated", "fe_step_2_title_translated", "fe_step3description_translated", "fe_step_3_title_translated" ];
return _r_(function(n) {
_i_("ec2:1090");
var r = "", o = this.fn;
function a(e) {
return _i_("ec2:1236"), e += t[15], n.unshift({
fe_description:o.MB(i[15]),
fe_step:o.MB(i[5]),
fe_title:o.MB(i[16])
}), e = l(e), n.shift(), e += t[10], _r_(e);
}
function s(e) {
return _i_("ec2:1237"), e += t[15], n.unshift({
fe_description:o.MB(i[17]),
fe_step:o.MB(i[7]),
fe_title:o.MB(i[18])
}), e = l(e), n.shift(), e += t[10], _r_(e);
}
function _(e) {
return _i_("ec2:1238"), e += t[15], n.unshift({
fe_description:o.MB(i[19]),
fe_step:o.MB(i[9]),
fe_title:o.MB(i[20])
}), e = l(e), n.shift(), e += t[10], _r_(e);
}
function c(e) {
return _i_("ec2:1239"), e += t[9], o.MN("fe_first_step_number_label", o.MB(i[5]) ? o.MB(i[5]) :o.MB(i[6])), e += t[10], o.MN("fe_second_step_number_label", o.MB(i[7]) ? o.MB(i[7]) :o.MB(i[8])), e += t[10], o.MN("fe_third_step_number_label", o.MB(i[9]) ? o.MB(i[9]) :o.MB(i[10])), e += [ t[11], "", t[11] ].join(""), e += t[11], e += t[11], e += t[11], e += [ t[12], o.MC(i[11]), t[13], o.MC(i[11]), t[14] ].join(""), e = a(e), e += t[22], e = s(e), e += t[22], e = _(e), e += [ t[23], "" ].join(""), _r_(e);
}
function l(e) {
return _i_("ec2:1240"), e += [ t[16], o.MC(i[12]), t[17] ].join(""), o.MD(i[13]) && (e += [ t[18], o.MC(i[13]), t[19] ].join("")), e += [ t[20], o.MC(i[14]), t[21] ].join(""), _r_(e);
}
function d(r) {
return _i_("ec2:1241"), r += [ t[1], (n.unshift({
value:o.MB(i[0])
}), e = o.ME(t[2], o.MB, o.MN, null), n.shift(), e), t[3], (n.unshift({
friend_name:o.MB(i[1])
}), e = o.ME(t[4], o.MB, o.MN, null), n.shift(), e), t[5] ].join(""), o.MN(i[2], o.ME(t[6], o.MB, o.MN, null)), r += t[0], o.MN(i[3], o.ME(t[7], o.MB, o.MN, null)), r += t[0], o.MN(i[4], o.ME(t[8], o.MB, o.MN, null)), r += t[0], n.unshift({
fe_extra_class:t[24],
fe_step1description_translated:o.MB(i[2]),
fe_step2description_translated:o.MB(i[3]),
fe_step3description_translated:o.MB(i[4])
}), r = c(r), n.shift(), r += [ t[25], o.ME(t[26], o.MB, o.MN, null), t[27] ].join(""), _r_(r);
}
return r += t[0], r = d(r), r += t[15], _r_(r);
});
}()), i.exports = r.extend({
init:function() {
_i_("ec2:982");
var e = B.jstmpl("friend_landing_card");
"undefined" != typeof n && n.on("shown", function() {
_i_("ec2:1500"), s("#ss").focus(), _r_();
}), s(document).on("click", ".raf-friend-landing-card__button", function(e) {
_i_("ec2:1331"), e.preventDefault(), a.trackEvent(a.referralFriendTracker, "click", "Friend Landing Lightbox"), o.hide(), "undefined" != typeof n && n.show(), _r_();
});
var t = {
reward_value:_.referral_data.reward_friend,
advocate_name:_.referral_data.advocate_name
}, i = "raf_landing_modal_opened", r = !B.env.b_is_landing && c.getSessionValue(i);
if (r) return _r_();
o.show(e.render(t), {
autoWidth:!1,
customWrapperClassName:"raf-friend-landing-card__lightbox-wrapper",
customMaskClassName:"raf-friend-landing-card__lightbox-mask",
positionAfterCallBack:function() {
_i_("ec2:1501"), a.trackEvent(a.referralFriendTracker, "show", "Friend Landing Lightbox"), _r_();
},
hideCallBack:function() {
_i_("ec2:1502"), a.trackEvent(a.referralFriendTracker, "dismiss", "Friend Landing Lightbox"), c.addSessionValue(i, 1), _r_();
}
}), _r_();
}
}), _r_();
}), B.define("component/referral/incentives-landing-modal", function(e, t, i) {
_i_("ec2:23");
var n = e("component"), r = e("lightbox"), o = e("ga-tracker"), a = e("et"), s = e("jquery"), _ = B.env, c = {
1:"insession",
2:"insession_emk",
3:"insession_single_mail"
};
booking.jstmpl("incentives_landing_card", function() {
_i_("ec2:577");
var e, t = [ "\n        ", "\n\n\n\n\n\n", '\n        <div class="incentives-landing-card__content__aa">\n            <div class="incentives-landing-card__title__aa">\n                <img src="', '" alt="American Airlines">\n                <img src="', '" class="booking_logo">\n                <p class="incentives-landing-card__header">Get ', ' Back</p>\n                <p class="incentives-landing-card__minimum">\n                    For a limited time on all stays over ', ".\n                    After your booking has been verified and confirmed, you'll receive your ", ' reward.\n                </p>\n                <div class="b-button b-button_primary b-button_flat">\n                    <a href="#">Let\'s go</a>\n                </div>\n            </div>\n        </div>\n', '\n\n<div class="incentives-landing-card">\n    <!-- Main content -->\n            <div class="incentives-landing-card__content">\n                <div class="incentives-landing-card__title">\n                    <p class="incentives-landing-card__header">', "/private/incentives_index_popup_main_header/name", '</p>\n                    <p class="incentives-landing-card__subscribe">\n                        ', "\n                        ", "\n                    ", "/private/incentivies_popup_email_signup_variant_one_body_text/name", "/private/incentives_index_popup_subhead_line_1/name", "<br>\n                        ", "/private/incentives_index_popup_subhead_line_3/name", "/private/incentivies_popup_email_signup_variant_three_body_text_one/name", "\n                    </p>\n                    ", '\n                        <form class="js-incentives-landing-form">\n                            <input type="submit" value="', "/private/incentivies_popup_email_signup_variant_one_cta/name", '" class="subscribebutton newsletter_button_footer" />\n                        </form>\n                     ', "\n                </div>\n            </div>\n\n    <!-- Email form -->\n        ", '\n            <form class="incentive-landing-card__email_form js-incentives-landing-form">\n                <input type="hidden" name="incentive_popup_campaign_id" value="', '" />\n                <input type="hidden" name="incentive_popup_share_link" value="', '" />\n\n                <div class="emk_incentives_form">\n                    <p class="feedback_msg feedback_msg_error newsletter_subscribe_error_invalid use_sprites_no_back">\n                        <span class="bicon-close"></span>&nbsp;', '\n                    </p>\n                    <p class="feedback_msg feedback_msg_error newsletter_subscribe_error_denied use_sprites_no_back">\n                        <span class="bicon-close"></span>&nbsp;', '\n                    </p>\n                    <p class="feedback_msg feedback_msg_error newsletter_subscribe_error_bad_unknown use_sprites_no_back">\n                        <span class="bicon-close"></span>&nbsp;', '\n                    </p>\n                    <p class="feedback_msg newsletter_sub_success use_sprites_no_back">\n                        <span class="bicon-checkyes"></span>&nbsp;', "/private/lp_sign_up_emk_success/name", '\n                    </p>\n\n                    <ul class="form_list">\n                        <li class="email_field">\n                            <input id="newsletter_to" class="newsletter_subscription_to linedinput" placeholder="', "/private/incentivies_popup_email_signup_variant_three_email_address/name", '" type="email" name="to">\n                        </li>\n                        <li>\n                            <input type="submit" value="', "/private/incentivies_popup_email_signup_variant_three_button_done/name", '" class="subscribebutton newsletter_button_footer" />\n                        </li>\n                        ', '\n                            <li>\n                                <span class="no_subscribe">', "/private/incentivies_popup_email_signup_variant_three_body_text_two/name", "</span>\n                            </li>\n                        ", "\n                    </ul>\n                </div>\n            </form>\n        ", "\n</div>\n", "\n", "\n    " ], i = [ "reward_value_localized", "min_ttv_localized", "value", "min_value_stay", "value_2", "variant", "campaign_id", "advocate_code", "please_enter_valid_email_address", "error500_heading" ];
return _r_(function(n) {
_i_("ec2:1091");
var r = "", o = this.fn;
function a(r) {
return _i_("ec2:1242"), r += t[1], o.MJ(o.track_experiment("fDeYAefeJPaTYEJIbfNTUTcO")) ? r += [ t[2], o.STATIC_HOSTNAME("/data/sp_aff/366304/aa-logo.png", 0, 0, 0), t[3], o.STATIC_HOSTNAME("/static/img/b26logo/booking_logo_light_bg.png", 0, 0, 0), t[4], o.MB(i[0]), t[5], o.MB(i[1]), t[6], o.MB(i[0]), t[7] ].join("") :(r += [ t[8], (n.unshift({
value:o.MB(i[0])
}), e = o.ME(t[9], o.MB, o.MN, null), n.shift(), e), t[10] ].join(""), o.MN(i[2], o.MB(i[0])), r += t[11], o.MN(i[3], o.MB(i[1])), r += t[11], o.MN(i[4], o.MB(i[1])), r += t[12], o.MJ(1 == o.MB(i[5])) ? r += [ t[11], o.ME(t[13], o.MB, o.MN, null), t[12] ].join("") :o.MJ(2 == o.MB(i[5])) ? r += [ t[11], o.ME(t[14], o.MB, o.MN, null), t[15], o.ME(t[16], o.MB, o.MN, null), t[12] ].join("") :o.MJ(3 == o.MB(i[5])) && (r += [ t[11], o.ME(t[17], o.MB, o.MN, null), t[12] ].join("")), r += t[18], o.MJ(1 == o.MB(i[5])) && (r += [ t[19], o.ME(t[20], o.MB, o.MN, null), t[21] ].join("")), r += t[22], o.MJ(o.MB(i[5]) >= 2) && (r += [ t[23], o.MB(i[6]), t[24], o.MB(i[7]), t[25], o.MB(i[8]), t[26], o.MB(i[9]), t[27], o.MB(i[9]), t[28], o.ME(t[29], o.MB, o.MN, null), t[30], o.ME(t[31], o.MB, o.MN, null), t[32], o.ME(t[33], o.MB, o.MN, null), t[34] ].join(""), o.MJ(3 == o.MB(i[5])) && (r += [ t[35], o.ME(t[36], o.MB, o.MN, null), t[37] ].join("")), r += t[38]), r += t[39]), r += t[40], _r_(r);
}
return r += t[0], r = a(r), r += t[41], _r_(r);
});
}()), i.exports = n.extend({
init:function() {
_i_("ec2:983");
var e = this.$el.data("hash");
s(document).on("click", ".raf-friend-landing-card__button", function(t) {
_i_("ec2:1332"), t.preventDefault(), a.customGoal(e, 3), a.goalWithValue("js_raf_friend_landing_lightbox_click_count", 1), o.trackEvent(o.referralFriendTracker, "click", "Friend Landing Lightbox"), r.hide(), _r_();
});
var t = B.env.referral_data.campaign_details;
if (!t.campaign_details_aggregated) return _r_(!1);
var i = t.campaign_details_aggregated[c[a.track(e)]];
t.campaign_id = i.campaign_id, t.advocate_code = i.advocate_code, t.track_mode = 1, -1 !== [ 6075, 6076, 6077 ].indexOf(t.campaign_id) ? t.track_mode = 3 :-1 !== [ 6081 ].indexOf(t.campaign_id) && (t.track_mode = 4), this.showLightbox(e, t), _r_();
},
showLightbox:function(e, t) {
_i_("ec2:984");
var i, n, l = 0;
t.variant || (t.variant = a.track(e)), i = s(B.jstmpl("incentives_landing_card").render(t)), r.show(i, {
autoWidth:!1,
customWrapperClassName:"incentives-landing-card__lightbox-wrapper",
customMaskClassName:"incentives-landing-card__lightbox-mask",
positionAfterCallBack:function() {
_i_("ec2:1503"), l = new Date().getTime(), a.customGoal(e, 1), a.goalWithValue("js_raf_friend_landing_lightbox_show_count", 1), o.trackEvent(o.referralFriendTracker, "show", "Friend Landing Lightbox"), _r_();
},
hideCallBack:function() {
_i_("ec2:1504");
var t = new Date().getTime(), i = Math.floor((t - l) / 1e3);
a.customGoal(e, 2), a.goalWithValue("js_raf_friend_landing_lightbox_dismiss_count", 1), a.goalWithValue("js_raf_friend_landing_lightbox_shown_time", i), o.trackEvent(o.referralFriendTracker, "dismiss", "Friend Landing Lightbox"), _r_();
}
}, function() {
_i_("ec2:1333"), n = s(".js-incentives-landing-form");
var i = function(e) {
_i_("ec2:1555"), n.toggleClass("loading", Boolean(e)), n.find("input").attr("disabled", e), e ? n.find(".feedback_msg_error").hide() :n.find("input[name=to]").focus(), _r_();
};
n.on("submit", function(n) {
_i_("ec2:1556");
var r, o = {}, _ = s(this).find("[name=to]"), l = s(this).serialize();
if (_.length && !_.val()) return _.focus(), _r_(!1);
i(!0), a.stage(e, 1), o = r ? r[c[t.variant]] :t, 1 === t.variant ? u(o).then(h) :3 === t.variant ? (o.email_language = B.env.b_lang, o.booker_email = _.val(), setTimeout(function() {
_i_("ec2:1652"), u(o).then(h), _r_();
}, 2e3)) :d(l).then(function(e) {
_i_("ec2:1653"), e.success ? u(o).then(h) :(i(!1), s(".newsletter_subscribe_error_invalid").show()), _r_();
}), n.preventDefault(), _r_();
}), _r_();
});
function d(e) {
return _i_("ec2:1191"), _r_(s.ajax({
url:_.b_nonsecure_hostname + "/newslettersubscribe.json",
method:"post",
data:e
}));
}
function u(e) {
return _i_("ec2:1192"), _r_(s.ajax({
url:_.b_nonsecure_hostname + "/apply_campaign",
method:"post",
data:e
}));
}
function h(e) {
_i_("ec2:1193"), e && (window.location.href = window.location.href + "?&label=" + _.b_label), _r_();
}
_r_();
}
}), _r_();
}), B.define("component/incentives/incentive-signup-reward", function(e, t, i) {
_i_("ec2:24");
var n, r, o, a, s, _, c = e("component"), l = e("jquery"), d = 100, u = [], h = 0, p = !0, f = !0, g = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || window.msRequestAnimationFrame || function(e) {
return _i_("ec2:578"), _r_(window.setTimeout(e, 1e3 / 60));
}, v = {
colorOptions:[ "DodgerBlue", "OliveDrab", "Gold", "pink", "SlateBlue", "lightblue", "Violet", "PaleGreen", "SteelBlue", "SandyBrown", "Chocolate", "Crimson" ],
colorIndex:0,
colorIncrementer:0,
colorThreshold:10,
getColor:function() {
return _i_("ec2:737"), this.colorIncrementer >= 10 && (this.colorIncrementer = 0, this.colorIndex++, this.colorIndex >= this.colorOptions.length && (this.colorIndex = 0)), this.colorIncrementer++, _r_(this.colorOptions[this.colorIndex]);
}
};
function b(e) {
_i_("ec2:165"), this.x = Math.random() * o, this.y = Math.random() * a - a, this.r = w(10, 30), this.d = Math.random() * d + 10, this.color = e, this.tilt = Math.floor(10 * Math.random()) - 10, this.tiltAngleIncremental = .07 * Math.random() + .05, this.tiltAngle = 0, this.draw = function() {
return _i_("ec2:738"), r.beginPath(), r.lineWidth = this.r / 2, r.strokeStyle = this.color, r.moveTo(this.x + this.tilt + this.r / 4, this.y), r.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 4), _r_(r.stroke());
}, _r_();
}
function m(e) {
_i_("ec2:166"), n = document.createElement("canvas"), e.append(n), r = n.getContext("2d"), o = e.innerWidth(), a = e.innerHeight(), n.width = o, n.height = a, u = [], f = !1;
for (var t = 0; d > t; t++) {
var i = v.getColor();
u.push(new b(i));
}
_r_();
}
function y() {
_i_("ec2:167"), r.clearRect(0, 0, o, a);
for (var e = [], t = 0; d > t; t++) !function(t) {
_i_("ec2:1092"), e.push(u[t].draw()), _r_();
}(t);
return k(), _r_(e);
}
function w(e, t) {
return _i_("ec2:168"), _r_(Math.floor(Math.random() * (t - e + 1) + e));
}
function k() {
_i_("ec2:169");
var e, t = 0;
h += .01;
for (var i = 0; d > i; i++) {
if (e = u[i], f) return _r_();
if (!p && e.y < -15) {
e.y = a + 100;
continue;
}
C(e, i), e.y <= a && t++, M(e, i);
}
0 === t && j(), _r_();
}
function M(e, t) {
_i_("ec2:170"), (e.x > o + 20 || e.x < -20 || e.y > a) && p && (t % 5 > 0 || t % 2 == 0 ? x(e, Math.random() * o, -10, Math.floor(10 * Math.random()) - 20) :Math.sin(h) > 0 ? x(e, -20, Math.random() * a, Math.floor(10 * Math.random()) - 20) :x(e, o + 20, Math.random() * a, Math.floor(10 * Math.random()) - 20)), _r_();
}
function C(e, t) {
_i_("ec2:171"), e.tiltAngle += e.tiltAngleIncremental, e.y += (Math.cos(h + e.d) + 3 + e.r / 2) / 2, e.x += Math.sin(h), e.tilt = 15 * Math.sin(e.tiltAngle - t / 3), _r_();
}
function x(e, t, i, n) {
_i_("ec2:172"), e.x = t, e.y = i, e.tilt = n, _r_();
}
function S() {
_i_("ec2:173"), function e() {
if (_i_("ec2:739"), f) return _r_(null);
return _ = g(e), _r_(y());
}(), _r_();
}
function T() {
_i_("ec2:174"), clearTimeout(s), clearTimeout(_), _r_();
}
function $() {
_i_("ec2:175"), p = !1, T(), _r_();
}
function j() {
if (_i_("ec2:176"), f = !0, void 0 == r) return _r_();
r.clearRect(0, 0, o, a), _r_();
}
i.exports = c.extend({
init:function() {
_i_("ec2:985"), this.$el.one("click", this.unlockTheIncentive.bind(this)), _r_();
},
unlockTheIncentive:function() {
_i_("ec2:986"), this.$el.find(".incentive-signup-reward__box-closed").addClass("g-hidden"), this.$el.find(".incentive-signup-reward__box-opened").removeClass("g-hidden"), this.throwConfetti(), this.applyCampaign(), _r_();
},
throwConfetti:function() {
_i_("ec2:987"), m(this.$el.find(".incentive-signup-reward__box-opened")), S(), setTimeout($, 3e3), _r_();
},
applyCampaign:function() {
_i_("ec2:988");
var e = {
campaign_id:this.$el.data("campaign-id"),
advocate_code:this.$el.data("share-link"),
track_mode:6
};
l.ajax({
url:B.env.b_nonsecure_hostname + "/apply_campaign",
method:"post",
data:e
}), _r_();
}
}), _r_();
}), B.define("segment", [ "events", "jquery" ], function(e, t) {
"use strict";
_i_("ec2:25");
var i = {}, n = B.browserStorageHandler && B.browserStorageHandler.isLocalStorageSupported() && window.JSON && window.JSON.stringify || B.storage, r = "track_segments", o = function() {
if (_i_("ec2:330"), !n) return _r_({});
var e;
if (B.storage) e = B.storage({
location:"sessionstorage",
key:r
}); else if (e = B.browserStorageHandler.getSessionValue(r)) try {
e = t.parseJSON(e);
} catch (i) {}
return _r_(e || {});
}, a = function(e) {
_i_("ec2:331"), n && (B.storage ? B.storage({
location:"sessionstorage",
key:r,
value:e
}) :B.browserStorageHandler.addSessionValue(r, window.JSON.stringify(e))), _r_();
};
function s() {}
return s.prototype.init = function() {
_i_("ec2:332");
var e = this.getStored();
e.fired && (this._fired = !0), _r_();
}, s.prototype.fire = function(t) {
if (_i_("ec2:333"), this._fired) return _r_();
this._fired = !0, this.store(t), e.trigger("track_segment_fire_" + this.name, t), _r_();
}, s.prototype.getStored = function() {
return _i_("ec2:334"), _r_(o()[this.name] || {});
}, s.prototype.store = function(e) {
_i_("ec2:335");
var t = o();
t[this.name] = t[this.name] || {}, this._fired && (t[this.name].fired = !0), e && (t[this.name].data = e), a(t), _r_();
}, s.prototype.onFire = function(t) {
return _i_("ec2:336"), this._fired ? t() :e.on("track_segment_fire_" + this.name, t), _r_(this);
}, s.getInstance = function(e) {
return _i_("ec2:337"), i[e] || (i[e] = new s(), i[e].name = e, i[e].init()), _r_(i[e]);
}, s.segmentExists = function(e) {
return _i_("ec2:338"), _r_(!!i[e]);
}, _r_(s);
}), B.require([ "segment", "jquery" ], function(e, t) {
_i_("ec2:26");
var i = e.getInstance("location-aware-map"), n = {
openMap:!1
};
B.when({
action:"searchresults",
events:"ready",
condition:!B.env.b_is_villa_site && !B.env.b_is_tdot_traffic
}).require([ "searchresults/events" ], function(e) {
_i_("ec2:339"), n = Object.assign(n, {
sortByDistance:B.env.b_order && /^distance.*/.test(B.env.b_order),
filterDistricts:i(),
searchDistrict:"district" === B.env.b_dest_type
}), e.on(e.UI_SORTING_CHANGED, function() {
_i_("ec2:1093"), setTimeout(function() {
_i_("ec2:1412"), t(".sort_category_distance.selected,.sort_distance_from_landmark.selected").length && (n.sortByDistance = !0, r()), _r_();
}, 10), _r_();
}), e.on(e.UI_FILTER_CHANGED, function() {
_i_("ec2:1094"), i() && (n.filterDistricts = !0, r()), _r_();
}), r();
function i() {
_i_("ec2:740");
var e = !1;
return t("#filterbox_options .filterelement.active").each(function() {
_i_("ec2:1243");
var i = t(this).data("name"), n = t(this).data("value");
if ("di" === i || "bf" === i && +n >= 8857 && 10937 >= +n) return e = !0, _r_(!1);
_r_();
}), _r_(e);
}
_r_();
}), B.when({
action:[ "hotel", "searchresults", "city", "region", "country" ],
events:"ready",
condition:!B.env.b_is_villa_site
}).run(function() {
_i_("ec2:340");
var e = "map_opened";
t(".show_map").on("click", function() {
_i_("ec2:1095"), n.openMap = !0, r(), _r_();
}), location.hash.indexOf(e) > -1 && (n.openMap = !0, r()), _r_();
});
function r() {
_i_("ec2:178");
var e = {}, r = 0;
t.each(n, function(t, i) {
_i_("ec2:741"), i && (e[t] = !0, r++), _r_();
}), r && i.fire(e), _r_();
}
_r_();
}), B.define("querystring", function(e, t, i) {
_i_("ec2:27");
function n(e, t) {
_i_("ec2:179");
var i = e.split(t);
return _r_([ i.shift(), i.join(t) ]);
}
t.parseUrl = function(e) {
_i_("ec2:341");
var i = {}, r = n(e, "#");
return i.hash = r[1], r = n(r[0], "?"), i.base = r[0], i.query = t.parse(r[1]), _r_(i);
}, t.stringify = function(e, t) {
_i_("ec2:342"), t = t || {};
var i = t.sep || "&", n = t.eq || "=", r = t.skipNull, o = t.encodeURIComponent || encodeURIComponent, a = [];
function s(e, t) {
_i_("ec2:742"), (null === t || void 0 === t) && (t = ""), a.push(e + n + o(t)), _r_();
}
for (var _ in e) {
if (null === e[_] && r) continue;
e[_] instanceof Array ? e[_].forEach(s.bind(this, _)) :s(_, e[_]);
}
return _r_(a.join(i));
}, t.parse = function(e, t) {
_i_("ec2:343");
var i = {};
return e.split(/[\&\;]+/).forEach(function(e) {
if (_i_("ec2:1096"), !e) return _r_();
var n = e.split("="), r = n.shift(), o = n.join("=");
if (!t) try {
o = decodeURIComponent(o.replace(/\+/g, "%20"));
} catch (a) {}
r in i ? (Array.isArray(i[r]) || (i[r] = [ i[r] ]), i[r].push(o)) :i[r] = o, _r_();
}), _r_(i);
}, t.toArray = function(e) {
_i_("ec2:344");
var t, i, n = [];
for (t in e) if (e.hasOwnProperty(t)) if (i = e[t], Array.isArray(i)) for (var r = 0, o = i.length; o > r; r++) n.push({
key:t,
value:i[r]
}); else n.push({
key:t,
value:i
});
return _r_(n);
}, _r_();
}), B.define("utils/makeurl", function(e, t, i) {
_i_("ec2:28");
var n = e("querystring");
t = i.exports = r, t.parse = o, t.pick = a;
function r(e, i, n) {
_i_("ec2:180");
var r = t.parse(e);
return $.extend(r.query, i), _r_(r.toString(n));
}
function o(e) {
return _i_("ec2:181"), _r_(e instanceof s ? e :new s("string" == typeof e ? n.parseUrl(e) :e));
}
function a(e, t, i, n) {
_i_("ec2:182");
var r = o(e), a = r.query, s = {};
return i && $.extend(a, i), t.forEach(function(e) {
if (_i_("ec2:743"), e instanceof RegExp) for (var t in a) a.hasOwnProperty(t) && e.test(t) && (s[t] = a[t]); else a.hasOwnProperty(e) && (s[e] = a[e]);
_r_();
}), r.query = s, _r_(r.toString(n));
}
function s(e) {
_i_("ec2:183"), this.base = e.base || "", this.query = e.query, this.hash = e.hash;
var t = this.base.match(/^(((https?)\:\/\/)[a-zA-Z0-9][a-zA-Z0-9\-\.\:]+[a-zA-Z0-9])(\/.*)/);
t ? (this.origin = t[1], this.scheme = t[3]) :this.path = this.base, _r_();
}
s.prototype.toString = function(e) {
_i_("ec2:345"), e = e || {};
var t = this.base || "", i = this.query ? n.stringify(this.query, e) :"";
return i && (t += "?" + i), this.hash && e.keepHash && (t += "#" + this.hash), _r_(t);
}, _r_();
}), B.define("utils/debounce", function(e, t, i) {
_i_("ec2:29");
function n(e, t, i) {
_i_("ec2:184");
var n;
return _r_(function() {
_i_("ec2:579");
var r = this, o = arguments;
i === !0 && void 0 === n && e.apply(r, o), clearTimeout(n), n = setTimeout(function() {
_i_("ec2:1244"), e.apply(r, o), _r_();
}, t), _r_();
});
}
i.exports = n, _r_();
}), B.define("async-css-style", function(e, t, i) {
"use strict";
_i_("ec2:30");
var n = e("promise"), r = window.document;
function o(e) {
if (_i_("ec2:185"), "object" != typeof e) throw new Error("async-css: .load() expects options object");
var t = {
href:"",
media:"all",
after:""
};
if (e = Object.assign({}, t, e), e.href = e.href || e.path, "string" != typeof e.href || 0 === e.href.length) throw new Error("async-css: href or path should be defined.");
return _r_(a(e.href));
}
function a(e) {
return _i_("ec2:186"), _r_(new n(function(t, i) {
_i_("ec2:744"), s(e, function(e) {
_i_("ec2:1245");
var n, r = _();
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
function s(e, t) {
_i_("ec2:187");
var i = new XMLHttpRequest();
i.open("GET", e), i.onreadystatechange = function() {
_i_("ec2:745"), i.readyState === XMLHttpRequest.DONE && t(i), _r_();
}, i.send(), _r_();
}
function _(e) {
_i_("ec2:188");
var t = r.getElementsByTagName("head")[0], i = (r.body || t).childNodes, n = i[i.length - 1];
return _r_(n);
}
t.load = o, _r_();
}), B.define("async-css-link", function(e, t, i) {
"use strict";
_i_("ec2:31");
var n = e("promise"), r = window.document;
function o(e) {
if (_i_("ec2:189"), "object" != typeof e) throw new Error("async-css: .load() expects options object");
var t = {
href:"",
media:"all",
after:""
};
if (e = Object.assign({}, t, e), e.href = e.href || e.path, "string" != typeof e.href || 0 === e.href.length) throw new Error("async-css: href or path should be defined.");
var i = s(e.after), n = l(e.href);
return d(function() {
_i_("ec2:746"), i.parentNode.insertBefore(n, i.nextSibling), _r_();
}), _r_(a(n, e));
}
function a(e, t) {
return _i_("ec2:190"), _r_(new n(function(i, n) {
_i_("ec2:747"), _(e, t, function() {
_i_("ec2:1246"), i(), _r_();
}, function() {
_i_("ec2:1247"), n(), _r_();
}), _r_();
}));
}
function s(e) {
_i_("ec2:191");
var t = r.getElementsByTagName("head")[0], i = (r.body || t).childNodes, n = i[i.length - 1];
return "main" === e && "undefined" != typeof t && (n = c(n, t)), _r_(n);
}
function _(e, t, i, n) {
_i_("ec2:192"), e.addEventListener && (e.addEventListener("load", i), e.addEventListener("error", n)), e.attachEvent && (e.attachEvent("onload", i), e.attachEvent("onerror", n)), _r_();
}
function c(e, t) {
_i_("ec2:193");
for (var i = t.getElementsByTagName("link"), n = 0; n < i.length; n++) if ("1" === i[n].getAttribute("data-main-css")) return _r_(i[n]);
return _r_(e);
}
function l(e) {
_i_("ec2:194");
var t = r.createElement("link");
return t.rel = "stylesheet", t.href = e, _r_(t);
}
function d(e) {
if (_i_("ec2:195"), r.body) return _r_(e());
window.setTimeout(function() {
_i_("ec2:748"), d(e), _r_();
}, 100), _r_();
}
t.load = o, _r_();
}), B.define("async-css", function(e, t, i) {
"use strict";
_i_("ec2:32"), "isApplicationInstalled" in navigator ? t.load = e("async-css-style").load :t.load = e("async-css-link").load, _r_();
}), B.define("loadscript", function(e, t, i) {
_i_("ec2:33");
var n = e("promise");
function r(e) {
return _i_("ec2:196"), _r_(new n(function(t, i) {
_i_("ec2:749");
var n = document.createElement("script");
n.onload = n.onreadystatechange = function(e, i) {
_i_("ec2:1334"), (i || !n.readyState || /loaded|complete/.test(n.readyState)) && (n.onload = n.onreadystatechange = null, n.parentNode && n.parentNode.removeChild(n), n = null, i || t()), _r_();
}, n.onerror = i, n.type = "text/javascript", n.src = e;
var r = document.getElementsByTagName("script")[0];
r.parentNode.insertBefore(n, r), _r_();
}));
}
function o(e, t) {
_i_("ec2:197");
var i = o._urls[e] || e;
if (!i) throw new Error("Must provide a URL.");
if (i === e && -1 === i.indexOf("/")) throw new Error('"' + i + "\" doesn't seem like a script URL.");
return _r_(r(i, t));
}
o._urls = {}, o.add = function(e, t) {
_i_("ec2:346");
var i = o._urls;
$.isPlainObject(e) ? $.extend(i, e) :i[name] = t, _r_();
}, i.exports = o, _r_();
}), B.define("async-loader", function(e, t, i) {
"use strict";
_i_("ec2:34");
var n = e("loadscript"), r = e("async-css"), o = e("promise"), a = {}, s = B.env || {};
function _(e) {
if (_i_("ec2:198"), "object" != typeof e) throw new Error("async-loader: load() expects an object!");
var t = Object.keys(e).map(function(t) {
_i_("ec2:989");
var i = e[t], n = i;
if ("string" == typeof n && n.length > 0 && (i = {
path:n
}), "object" != typeof i || !i.hasOwnProperty("path")) throw new Error("async-loader: .load() invalid argument!");
return _r_(l(t, i));
});
return _r_(o.all(t));
}
function c(e) {
_i_("ec2:199");
var t;
if (!s.hasOwnProperty("asyncLoader") || !s.asyncLoader.hasOwnProperty(e)) throw new Error("async-loader: could not find file path in B.env.asyncLoader");
if (t = s.asyncLoader[e], "string" != typeof t || 0 === t.length) throw new Error("async-loader: invalid path for " + e);
return _r_(t);
}
function l(e, t) {
_i_("ec2:200");
var i = t.path = c(t.path);
return a[i] || (a[i] = d(e, t)), _r_(a[i]);
}
function d(e, t) {
_i_("ec2:201");
var i;
switch (e) {
case "css":
return i = r.load(t), i["catch"](function() {
_i_("ec2:1097"), B.squeak && B.squeak("OdeFAAOZOGaDIARMGZYfNXMDDBXe"), _r_();
}), _r_(i);

case "js":
return i = n(t.path), i["catch"](function() {
_i_("ec2:1098"), B.squeak && B.squeak("OdeFAAOZOGaDIARMGZGTXMDDBXe"), _r_();
}), _r_(i);

default:
throw new Error("async-loader: file type [" + e + "] not supported!");
}
_r_();
}
function u(e) {
if (_i_("ec2:202"), "string" == typeof e && e.length > 0 && (e = {
path:e
}), "object" != typeof e || !("path" in e)) throw new Error("async-loader: .css() invalid argument!");
return _r_(l("css", e));
}
function h(e) {
if (_i_("ec2:203"), "string" == typeof e && e.length > 0 && (e = {
path:e
}), "object" != typeof e || !("path" in e)) throw new Error("async-loader: .js() invalid argument!");
return _r_(l("js", e));
}
function p(e) {
if (_i_("ec2:204"), "string" != typeof e || 0 === e.length) throw new Error("async-loader: registerPath() invalid argument");
if (!s.hasOwnProperty("asyncLoader")) throw new Error("async-loader: B.env.asyncLoader is not defined");
return s.asyncLoader.hasOwnProperty(e) || (s.asyncLoader[e] = e), _r_(e);
}
t.load = _, t.css = u, t.js = h, t.registerPath = p, _r_();
}), B.define("utils/request_animation_frame", function(e, t, i) {
_i_("ec2:35");
for (var n = window.requestAnimationFrame, r = 0, o = [ "ms", "moz", "webkit", "o" ], a = 0; a < o.length && !n; ++a) n = window[o[a] + "RequestAnimationFrame"];
n || (n = function(e, t) {
_i_("ec2:750");
var i = new Date().getTime(), n = Math.max(0, 16 - (i - r)), o = window.setTimeout(function() {
_i_("ec2:1335"), e(i + n), _r_();
}, n);
return r = i + n, _r_(o);
}), i.exports = n, _r_();
}), function(e) {
_i_("ec2:36");
var t = B.debug("activity_stream");
function i(t, n) {
_i_("ec2:205"), this.$ = e(t), n = n || [], "string" == typeof n && (n = [ n ]), this._last = 0, this._counter = 0, this.sources = {};
var r = this;
e.each(n, function() {
_i_("ec2:751"), "undefined" != typeof i.defaultSources[this] && (r.sources[this] = i.defaultSources[this]), _r_();
}), this.queues = {}, this.itemsPoplarHotelNames = {}, this.$.delegate(".activity_box", "click", function(t) {
if (_i_("ec2:752"), e(t.target).is("a")) return _r_();
var i = e(this).find("a").first();
i.length && i.click(), _r_();
}), this.$.delegate("a", "click", function(t) {
_i_("ec2:753");
var i = e(this);
clearTimeout(r.timer), booking.google.trackEvent(booking.google.clickTracker, "Activity feed", i.closest("li").attr("class")), window.location = this.href, _r_();
}), this.next(3), _r_();
}
i.prototype.fetchSource = function(t, i) {
_i_("ec2:347");
var n = this.sources[t].url, r = this;
e.ajax({
url:n,
dataType:"json",
data:{
last:this._last
},
success:function(n) {
_i_("ec2:1248"), n.length ? (e.each(n, function(e, t) {
_i_("ec2:1593"), r.itemsPoplarHotelNames[e] = t.hotel_name, _r_();
}), r.queues[t] = n, "function" == typeof i && i.call(r)) :r._last && 0 != r._last || (e("#activity_stream_box").hide(), r.itemsPoplarHotelNames[1] = !1), _r_();
},
error:function() {
_i_("ec2:1249"), r._last && 0 != r._last || (e("#activity_stream_box").hide(), r.itemsPoplarHotelNames[1] = !1), _r_();
}
}), _r_();
}, i.prototype.getSourceKeys = function() {
_i_("ec2:348");
var e = [];
for (var t in this.sources) e.push(t);
return _r_(e);
}, i.prototype.next = function(t) {
_i_("ec2:349");
var i = "recent_bookings_per_city", n = 4e3 * (Math.random() + 1);
this.queues[i] && this.queues[i].length ? (this.nextFromSource(i, t), this.timer && clearTimeout(this.timer), this.timer = setTimeout(e.proxy(this.next, this), n)) :this.fetchSource(i, function() {
_i_("ec2:1250"), this.$.removeClass("loading"), this.nextFromSource(i, t), this.timer && clearTimeout(this.timer), this.timer = setTimeout(e.proxy(this.next, this), n), _r_();
}), _r_();
}, i.prototype.nextFromSource = function(e, t) {
_i_("ec2:350"), t = t || 1;
var i = this.queues[e].shift();
i.timestamp ? this._last = Math.max(1 * i.timestamp, this._last) :this._last = Math.max(1 * i.id, this._last), i = this.sources[e].transform(i), this.addItem(i), this._counter++, t > 1 && this.next(t - 1), _r_();
}, i.prototype.addItem = function(i) {
if (_i_("ec2:351"), e.isArray(i)) {
for (var n = 0; n < i.length; n++) this.addItem(i[n]);
return _r_();
}
if ("string" == typeof i) return this.animate(B.jstmpl("activity_stream_text_item", {
text:i
})), _r_();
if ("object" == typeof i) {
for (var r in i) if (void 0 === i[r]) return t.warn("Corrupted item"), _r_();
this.animateItem(e(e.trim(B.jstmpl("activity_stream_item").render(e.extend({
b_lang:B.env.b_lang,
b_action:B.env.b_action,
b_lang_for_url:B.env.b_lang_for_url
}, i)))));
}
this.trimList(), _r_();
}, i.prototype.animateItem = function(e) {
_i_("ec2:352"), booking.feature.transition ? this.animateWithTransitions(e) :this.animateWithJQuery(e), _r_();
}, i.prototype.animateWithTransitions = function(e) {
_i_("ec2:353"), e.addClass("new"), this.$.prepend(e), setTimeout(function() {
_i_("ec2:1099"), e.removeClass("new"), _r_();
}, 30), _r_();
}, i.prototype.animateWithJQuery = function(e) {
if (_i_("ec2:354"), e.css({
opacity:0,
position:"absolute"
}), this.$.prepend(e), this.$.hasClass("horizontal_stream")) {
var t = e.width();
e.css({
opacity:0,
width:0,
position:""
}), e.animate({
width:t
}, {
duration:500,
queue:!1
}).animate({
opacity:1
}, 300);
} else {
var i = e.height();
e.css({
opacity:0,
height:0,
position:""
}), e.animate({
height:i
}, {
duration:300,
queue:!1
}).animate({
opacity:1
}, 500);
}
_r_();
}, i.prototype.trimList = function() {
_i_("ec2:355");
var e = this.$.children();
e.length > 10 && e.slice(10).remove(), _r_();
}, i.defaultSources = {
recent_bookings_per_city:{
url:e("#activity_stream_box").attr("data-href-city"),
transform:function(t) {
_i_("ec2:1100");
var i = {
type:t.type || "reservation",
user_location:t.booker_country,
image_src:t.image,
location:t.hotel_name,
location_url:t.hotel_uri,
booker_country:t.booker_country,
booker_countrycode:t.booker_countrycode,
booker_location:t.booker_location || t.booker_country,
endorsement:t.endorsement || "",
ago:t.ago || 0,
hotel_city:t.hotel_city || "",
hotel_city_name_in:t.hotel_city_name_in || "",
hotel_id:t.hotel_id || "",
hotel_accommodation_type:t.hotel_accommodation_type || !1
};
return "deal" === t.type && (i.sr_url = t.sr_uri, i.value_deal_description = B.strings.get("value_deal_tooltip"), e("#activity_stream_box").find("h2").text(B.jstmpl("activity_stream_deal_header").render())), _r_(i);
}
}
}, booking.ensureNamespaceExists("modules"), booking.modules.ActivityStream = i, _r_();
}(jQuery), $(document).ready(function() {
_i_("ec2:37");
var e = document.getElementById("activity_items");
if (!e) return _r_(!1);
var t = function() {
_i_("ec2:356"), window.as = new booking.modules.ActivityStream(e, "recent_bookings_per_city"), _r_();
};
function i() {
_i_("ec2:206");
var e = 2e3, t = $("#activity_items"), i = $("#activity_items").children("li");
if (!t || !i || i.length < 4) return _r_();
i = $.makeArray(i), B.require([ "utils/request_animation_frame" ], function(n) {
_i_("ec2:754");
function r(n) {
_i_("ec2:1101");
var o = $(i[0]);
o.remove(), o.appendTo(t), i.push(i.shift()), setTimeout(function() {
_i_("ec2:1413"), r(i), _r_();
}, e), _r_();
}
n(r.bind(i)), _r_();
}), _r_();
}
1 != B.env.b_fe_stop_activity_stream ? $(window).on("load", t) :$(window).on("load", i), _r_();
}), booking.ensureNamespaceExists(sNSStartup), booking[sNSStartup].back_to_search_anchor = {
priority:9,
init:function() {
_i_("ec2:207");
var e = $("#back_to_search.show_anchor"), t = $("#searchboxInc");
if (!t.length) return _r_(!1);
var i = t.height() + t.offset().top, n = null, r = !1, o = function() {
_i_("ec2:755"), r || (r = !0, e.slideDown("slow"), e.css("visibility", "visible")), _r_();
};
$(".back_to_search").click(function() {
return _i_("ec2:756"), $("body,html").animate({
scrollTop:0
}, 500), _r_(!1);
}), $(window).bind("scroll.back_to_search_anchor", function() {
_i_("ec2:757"), i < $(window).scrollTop() ? r || null != n || (n = setTimeout(o, 200)) :r && (e.slideUp(), r = !1, clearTimeout(n), n = null), _r_();
}), _r_();
},
initElse:function() {}
}, booking[sNSStartup].cp_consolidated_in_and_around = function() {
_i_("ec2:148");
var e = function() {
_i_("ec2:580");
var e = $(".tab_promotions_wrapper").find("h4.in_and_around_tabs"), r = $(".tab_promotions_wrapper").find(".tab_content");
n(e, r), t(), i(e[0], r[0]), _r_();
};
function t() {
_i_("ec2:269"), $(".tab_promotions_wrapper").delegate("h4.in_and_around_tabs", "click", function() {
_i_("ec2:990");
var e = "." + $(this).data("tabcontent");
i(this, e), _r_();
}), _r_();
}
function i(e, t) {
_i_("ec2:270");
var i = $(e), n = $(t);
i.siblings().removeClass("selected"), n.siblings().hide(), i.addClass("selected"), n.show(), _r_();
}
function n(e, t) {
_i_("ec2:271"), $.each(e, function(e, i) {
_i_("ec2:991"), $(i).data("tabcontent", "tab_content_" + e), $(t[e]).addClass("tab_content_" + e), _r_();
});
var i = $('<div class="tab_container"></div>'), n = $('<div class="tab_content_container"></div>');
i.append(e), n.append(t), $(".tab_promotions_wrapper").find("h3").after(i, n), _r_();
}
return _r_({
init:e
});
}(), booking[sNSStartup].in_and_around_updates = {
priority:9,
loadpos:0,
savecheck:0,
init:function() {
_i_("ec2:209");
var e = "hotel" == booking.env.b_action ? 1 :12;
$(".landing .widesep ul, .hotel .in_and_around ul").each(function() {
if (_i_("ec2:758"), "country" == booking.env.b_action && "iaa_city" == $(this).siblings("h4")[0].className) return _r_();
var t = $(this).find("li");
t.length > e + 2 && !booking.env.hp_location_block && (t.eq(e).after('<li class="iaa_more iaa_more_blue"><a href="#">' + booking.env.inandaround_more + "</a></li>"), t.filter(":gt(" + e + ")").hide()), _r_();
}), $("li.iaa_more a").click(function() {
return _i_("ec2:759"), $(this).hide().parents("ul").find("li").show(), "hotel" != booking.env.b_action && $("#in_and_around .masonry").masonry(), _r_(!1);
}), document.getElementById("in_and_around") && "hotel" != booking.env.b_action && $(window).resize(function() {
_i_("ec2:1251");
var e = $("#in_and_around .masonry");
e.masonry({
itemSelector:".in_and_around",
isResizable:!1,
columnWidth:.499 * e.width()
}), _r_();
}).resize(), _r_();
}
}, booking[sNSStartup].destinationThemes = {
priority:8,
init:function() {
_i_("ec2:210"), $(".city_list_info").click(function(e) {
_i_("ec2:760");
var t = $(this).attr("class");
if ($(e.target).hasClass("city_price")) return booking.google.trackEvent(booking.google.clickTracker, "DestThemes", "City Closed Price - " + t), _r_();
$(this).next(".hotels_in_city").hasClass("closed") ? ($(".hotels_in_city.opened").each(function() {
_i_("ec2:1414"), booking.google.trackEvent(booking.google.clickTracker, "DestThemes", "City Open HList - " + t), $(this).removeClass("opened"), $(this).slideUp(), $(this).addClass("closed"), $(this).parent().find(".city_from_price").show(), _r_();
}), $(this).next(".hotels_in_city").removeClass("closed"), $(this).next(".hotels_in_city").slideDown(), $(this).next(".hotels_in_city").addClass("opened"), $(this).find(".city_from_price").hide()) :$(this).next(".hotels_in_city").hasClass("opened") && (booking.google.trackEvent(booking.google.clickTracker, "DestThemes", "City Close HList - " + t), $(this).next(".hotels_in_city").removeClass("opened"), $(this).next(".hotels_in_city").slideUp(), $(this).next(".hotels_in_city").addClass("closed"), $(this).parent().find(".city_from_price").show()), _r_();
}), $(".city_list_info").hover(function() {
_i_("ec2:761"), $(this).find(".cityimage_marker").addClass("hovered"), $(this).find("h3.cityname").addClass("hovered"), $(this).find(".city_from_price a").addClass("hovered"), _r_();
}, function() {
_i_("ec2:762"), $(this).find(".cityimage_marker").removeClass("hovered"), $(this).find("h3.cityname").removeClass("hovered"), $(this).find(".city_from_price a").removeClass("hovered"), _r_();
}), $(".hotel_block").click(function() {
_i_("ec2:763");
var e = $(this).attr("class");
booking.google.trackEvent(booking.google.clickTracker, "DestThemes", "Hotel: " + e);
var t = $(this).find(".hotelname").attr("href");
location.href = t, _r_();
}), $(".showall_in_city").click(function() {
_i_("ec2:764");
var e = $(this).attr("class");
booking.google.trackEvent(booking.google.clickTracker, "DestThemes", "City Show All - " + e), _r_();
}), _r_();
}
}, function(e) {
_i_("ec2:38"), B.when({
events:"ready"
}).run(function(i) {
_i_("ec2:357"), t(e(".discover-b-index")), _r_();
}), B.when({
events:"view .dcbi-countries",
action:"index"
}).run(function(t) {
_i_("ec2:358"), i(e(".dcbi-countries .dcbi-country__container[data-img-url]")), _r_();
});
function t(e) {
_i_("ec2:211"), e.swapTab("paging", {
$tabButton:".dcbi-tab__btn",
$tabButtonActive:".dcbi-tab__btn.dcbi-tab__btn--active",
tabButtonActiveClass:"dcbi-tab__btn--active",
$tabSectionContainer:".dcbi-countries",
tabSectionContainerActiveClass:"dcbi-countries--active"
}), _r_();
}
function i(t) {
_i_("ec2:212"), t.each(function() {
_i_("ec2:765"), e(this).removeClass("dcbi-country__desc_placeholder_load"), e(this).css("background-image", "url(" + e(this).data("img-url") + ")"), e(this).removeAttr("data-img-url"), _r_();
}), _r_();
}
B.define("component/discover-swap-tab", function(e, i, n) {
_i_("ec2:359");
var r = e("component");
n.exports = r.extend({
init:function() {
_i_("ec2:1336"), t(this.$el), _r_();
}
}), _r_();
}), _r_();
}(B.require("jquery")), booking[sNSStartup].dsf_banners = {
init:function() {
_i_("ec2:213");
var e = $("#dsf_textarea"), t = $("#dsf_textarea ul"), i = $("li.dsf_add"), n = $("#dsf_autocomplete"), r = [], o = $("li.dsf_destination"), a = o.length > 0 ? booking.env.b_query_params_delimiter + "" + o.data("name") + "=" + o.data("id") :"", s = "";
("continent" == booking.env.b_action || "country" == booking.env.b_action || "region" == booking.env.b_action) && (s = ' <img class="dsf_sprites" src="//s-ec.bstatic.com/static/img/transparent/85e02501df1560d359a473f544224481a83c9aa7.png" />'), t.find("li.dsf_theme").length > 0 && r.push(t.find("li.dsf_theme").data("id")), d($("li.delete")), e.click(function() {
_i_("ec2:766"), n.find("li").each(function() {
_i_("ec2:1252");
var e = $(this).data("url");
-1 != $.inArray(e, r) && $(this).hide(), _r_();
});
var t = e.outerWidth(), i = e.height() + 10;
n.css({
top:i,
width:t
}).show(), _r_();
}), $(document).click(function(e) {
_i_("ec2:767");
var t = !0;
$(e.target).parents().each(function() {
_i_("ec2:1253"), "dsf_suggestions" == $(this).attr("id") && (t = !1), _r_();
}), t && n.is(":visible") && (n.hide(), i.show()), _r_();
});
var _ = new DSF_url_builder();
$("#dsf_linkto").click(function() {
return _i_("ec2:768"), $.each(r, function(e, t) {
_i_("ec2:1254"), _.addTheme(t), _r_();
}), this.href = _.getUrl(), _r_(!0);
}), $("#dsf_autocomplete li").click(function() {
_i_("ec2:769");
var e = $(this).data("name"), o = $(this).data("url"), a = '<li data-id="' + o + '" class="dsf_theme tag delete">' + e + s + "</li>";
return r.push(o), $("li.dsf_theme:last").length > 0 ? $(a).insertAfter($("li.dsf_theme:last")) :$("li.dsf_add").length > 0 ? $(a).insertBefore($("li.dsf_add")) :t.html(a), n.hide(), i.show(), d($("li.delete")), _r_(!1);
});
function c() {
_i_("ec2:360");
var e = l() + booking.env.b_query_params_delimiter + "tags=" + r.join(",") + a;
$("#dsf_linkto").attr("href", e), _r_();
}
function l() {
_i_("ec2:361");
var e = (booking.env.b_protocol || "http") + "://" + booking.env.b_hostname;
return e += "/destinationfinder" + booking.env.b_query_params_with_lang, _r_(e);
}
function d(e) {
_i_("ec2:362"), e.click(function() {
_i_("ec2:1102");
var e = $(this).data("id");
r = jQuery.grep(r, function(t) {
return _i_("ec2:1505"), _r_(t != e);
}), c(), $(this).remove(), i.show(), _r_();
}), _r_();
}
_r_();
}
};

function DSF_url_builder() {
_i_("ec2:1");
for (var e in this.buckets) this.buckets.hasOwnProperty(e) && (this.buckets[e] = []);
this.processed = !1, _r_();
}

DSF_url_builder.prototype.order = [ "themes", "continents", "countries", "regions", "cities" ], DSF_url_builder.prototype.buckets = [], DSF_url_builder.prototype.buckets.continents = [], DSF_url_builder.prototype.buckets.countries = [], DSF_url_builder.prototype.buckets.regions = [], DSF_url_builder.prototype.buckets.cities = [], DSF_url_builder.prototype.buckets.themes = [], DSF_url_builder.prototype.basic_url = booking.env.dsf_basic_url, DSF_url_builder.prototype.processed = !1, DSF_url_builder.prototype.processBasicUrl = function() {
_i_("ec2:39");
var e = {};
if (!this.basic_url) return _r_(e);
var t = this.basic_url.split("."), i = t[0];
i = i.replace(/^\//, "");
var n = i.split("/");
if (e.action_name = n.shift(), 3 == n.length && "regions" == n[0] && (n[1] = n[1] + "/" + n.pop()), !this.processed) for (var r, o = 0; o < n.length; o++) {
var a = n[o];
r && this.addToBucket(r, a), $.inArray(a, this.order) && (r = a);
}
return this.processed = !0, e.extension = "." + t.slice(1, t.length).join("."), _r_(e);
}, DSF_url_builder.prototype.setBasicUrl = function(e) {
_i_("ec2:40"), this.basic_url = e, _r_();
}, DSF_url_builder.prototype.addCity = function(e) {
_i_("ec2:41"), this.addToBucket("cities", e), _r_();
}, DSF_url_builder.prototype.addCountry = function(e) {
_i_("ec2:42"), this.addToBucket("countries", e), _r_();
}, DSF_url_builder.prototype.addRegion = function(e) {
_i_("ec2:43"), this.addToBucket("regions", e), _r_();
}, DSF_url_builder.prototype.addTheme = function(e) {
_i_("ec2:44"), this.addToBucket("themes", e), _r_();
}, DSF_url_builder.prototype.addContinent = function(e) {
_i_("ec2:45"), this.addToBucket("continents", e), _r_();
}, DSF_url_builder.prototype.addToBucket = function(e, t) {
if (_i_("ec2:46"), $.inArray(t.toLowerCase(), this.buckets[e]) > -1) return _r_();
this.buckets[e].push(t.toLowerCase()), _r_();
}, DSF_url_builder.prototype.getUrl = function(e) {
_i_("ec2:47");
var t = "";
e || (t += "http://" + booking.env.b_hostname);
var i = this.processBasicUrl();
t += "/" + i.action_name;
for (var n = this.order.length, r = 0; n > r; r++) {
var o = this.order[r];
if (!this.buckets[o] || 0 === this.buckets[o].length) continue;
t += "/" + o + "/", t += this.buckets[o].sort().join("/");
}
return t += i.extension, _r_(t);
}, window.DSF_url_builder = DSF_url_builder, booking[sNSStartup].emk_searchform_subscribe = function() {
"use strict";
_i_("ec2:149");
var e = window.booking;
function t() {
_i_("ec2:272");
var t = $("#searchform-subscribe-box-form");
if (!t.length) return _r_();
var i, n, r, o = $("#searchform-subscribe-box"), a = 6e3, s = [ "bicon-upchevron", "bicon-downchevron" ], _ = function() {
_i_("ec2:992"), window.clearTimeout(i), window.clearTimeout(n), window.clearTimeout(r), _r_();
}, c = function() {
_i_("ec2:993"), o.find(".searchform-subscribe-box-loader").hide(), _r_();
}, l = function() {
_i_("ec2:994"), _(), o.find(".searchform-subscribe-box-warns-error").hide(), o.find(".searchform-subscribe-box-warns-success").hide(), o.find(".searchform-subscribe-box-warns-denied").show(), n = window.setTimeout(function() {
_i_("ec2:1415"), o.find(".searchform-subscribe-box-warns-denied").fadeOut(), _r_();
}, a), c(), _r_();
}, d = function() {
_i_("ec2:995"), _(), t.find(".js-searchform-subscribe-box-textfield")[0].value = "", o.find(".searchform-subscribe-box-warns-error").hide(), o.find(".searchform-subscribe-box-warns-success").show(), i = window.setTimeout(function() {
_i_("ec2:1416"), o.find(".searchform-subscribe-box-warns-success").fadeOut(), _r_();
}, a), c(), _r_();
}, u = function() {
_i_("ec2:996"), o.find(".searchform-subscribe-box-loader").show();
var e = $("input[name=url]", o).val(), t = $("input[name=hostname]", o).val(), i = $("input[name=aid]", o).val(), n = $("input[name=companyname]", o).val(), r = $("input[name=subscribe_source]", o).val(), a = $("input[name=dest_id]", o).val(), s = $("input[name=dest_type]", o).val(), _ = $(".js-searchform-subscribe-box-textfield", o).val();
_ = encodeURIComponent(_);
var c = "to=" + _ + "&url=" + e + "&hostname=" + t + "&aid=" + i + "&companyname=" + n + "&subscribe_source=" + r;
"" !== a && (c = c + "&dest_id=" + a), "" !== s && (c = c + "&dest_type=" + s), $.ajax({
type:"POST",
url:"/newslettersubscribe.json",
data:c,
dataType:"json",
success:function(e) {
if (_i_("ec2:1506"), 0 === e.success) return "denied" === e.error ? l() :"bad_params" === e.error && l(), _r_();
1 === e.success && d(), _r_();
},
error:function() {
_i_("ec2:1507"), l(), _r_();
}
}), _r_();
}, h = function(t) {
_i_("ec2:997");
var i = e.env.b_email_validation_regex || /^.+@(.+\.)+.*$/;
if (!i.test(t)) return _r_(!1);
return _r_(!0);
};
o.find(".js-open-subscribe-field").click(function() {
_i_("ec2:998");
var e = o.find(".js-icon-toggle"), t = e.hasClass(s[0]) ? 1 :0, i = 0 === t ? 1 :0;
o.find(".searchform-subscribe-box-field-section").slideToggle(), e.removeClass(s[i]).addClass(s[t]), _r_();
}), t.submit(function(e) {
_i_("ec2:999"), e.preventDefault();
var i = t.find(".js-searchform-subscribe-box-textfield").val();
if ("" === $.trim(i)) return _r_(!1);
if (!h(i)) return _(), o.find(".searchform-subscribe-box-warns-error").hide(), o.find(".searchform-subscribe-box-warns-success").hide(), o.find(".searchform-subscribe-box-warns-invalid").show(), r = window.setTimeout(function() {
_i_("ec2:1526"), o.find(".searchform-subscribe-box-warns-invalid").fadeOut(), _r_();
}, a), _r_(!1);
u(), _r_();
}), _r_();
}
return _r_({
priority:9,
init:t
});
}(), B.define("landingpage/track/goals/lp_searched_in_browser", function(e) {
_i_("ec2:48");
var t = e("jquery"), i = e("events"), n = t(window);
n.on("keydown", r);
function r(e) {
_i_("ec2:214");
var t = e.keyCode ? e.keyCode :e.which;
(e.ctrlKey || e.metaKey) && 70 === t && (i.trigger("lp:lp_searched_in_browser"), n.off("keydown", r)), _r_();
}
_r_();
}), B.define("landingpage/track/goals", function(e) {
_i_("ec2:49");
var t, i = e("et"), n = e("events"), r = {
"lp:lp_searched_in_browser":"lp_searched_in_browser"
};
for (t in r) r.hasOwnProperty(t) && n.one(t, function(e) {
return _i_("ec2:1194"), _r_(function() {
_i_("ec2:1417"), i.goal(e), _r_();
});
}(r[t]));
e("landingpage/track/goals/lp_searched_in_browser"), _r_();
}), B.require("landingpage/track/goals"), window.booking && "index" == window.booking.env.b_action && (booking[sNSStartup].loc_add_choose_date = function(e, t, i, n) {
"use strict";
_i_("ec2:273");
var r, o, a = i.require("jquery"), s = function(e) {
_i_("ec2:1000");
var t = a(e ? e :"#home_featured_destinations");
t.delegate(".checkAvailabilitySwitch", "click", function(e) {
_i_("ec2:1337"), e.stopPropagation(), a(this).hasClass("moreBtnFolded") ? (a(".moreBtnUnfolded") && (a(".moreBtnUnfolded").parent().parent().removeClass("currentHotel"), a(".moreBtnUnfolded").removeClass("moreBtnUnfolded").addClass("moreBtnFolded")), a(this).parent().parent().next().removeClass("moreBoxFolded").addClass("moreBoxUnfolded"), a(this).removeClass("moreBtnFolded").addClass("moreBtnUnfolded"), a(this).parent().parent().next().find("td").append(a("#add_date_box")), a(this).parent().parent().addClass("currentHotel")) :a(this).hasClass("moreBtnUnfolded") && (a(this).parent().parent().next().removeClass("moreBoxUnfolded moreBtnUnfolded").addClass("moreBoxFolded"), a(this).removeClass("moreBtnUnfolded").addClass("moreBtnFolded"), a("#add_date_box_hidden").append(a("#add_date_box")), a(this).parent().parent().removeClass("currentHotel")), _r_();
}), _(), l(), a("#checkAvailabilityBtn").click(function() {
_i_("ec2:1338");
var e = a(this).parent().parent().parent().parent().prev().attr("data-url"), t = e.search(/checkin/i), n = e;
-1 != t && (n = e.slice(0, t - 1));
var r = i.search.dates("checkin").toString(), o = i.search.dates("checkout").toString();
"invalid" != i.search.dates("checkout").type ? a(this).attr("href", n + ";checkin=" + r + ";checkout=" + o) :a(this).attr("href", n), _r_();
}), _r_();
};
function _() {
_i_("ec2:581"), r = a(".checkinWidget"), o = a(".checkoutWidget"), _r_();
}
function c(e, t) {
if (_i_("ec2:582"), i.env.b_year_months[e + "-" + (t + 1)]) return _r_(i.env.b_year_months[e + "-" + (t + 1)].name);
_r_();
}
function l() {
_i_("ec2:583");
var e = n.sunday_first, t = n.b_simple_weekdays, s = n.b_short_months, _ = i.calendar2.controller.getCalendars();
i.eventEmitter.bind("SEARCH:date_changed", function(e, t) {
_i_("ec2:1195");
var n = i.search.dates("checkin"), r = i.search.dates("checkout"), o = i.search.dates(t.type);
n && g("checkin", n.date, n.month + 1, n.year), r && g("checkout", r.date, r.month + 1, r.year), "month" === o.type ? v("monthSelected", t.type, o) :"valid" === o.type && v("dateSelected", t.type, o);
for (var a = 0; a < _.length; a++) n && r && "valid" === n.type && "valid" === r.type && _[a].trigger("rangeSelected", {
type:t.type,
startValue:n,
endValue:r
});
_r_();
});
function l(e, t) {
_i_("ec2:1001");
for (var n = i.calendar2.controller.getCalendars(), r = 0; r < n.length; r++) t.id !== n[r].id() && n[r].trigger("hide");
_r_();
}
function v(e, t, i) {
_i_("ec2:1002");
for (var n = 0; n < _.length; n++) _[n].type() === t && _[n].trigger(e, {
type:t,
value:i
});
_r_();
}
function b(e, t) {
if (_i_("ec2:1003"), !e) return _r_();
var i = new Date(e.year, e.month, e.date + t);
return _r_({
year:i.getFullYear(),
month:i.getMonth(),
date:i.getDate()
});
}
var m = {
type:"checkin",
defaultDate:i.search.dates("checkin"),
startDate:u(),
endDate:h(),
dayNames:t,
monthNames:s,
sundayFirst:e,
title:n.transl_checkin_title,
monthTitle:c,
direction:n.rtl ? "rtl" :"ltr",
onDateSelected:function(e, t) {
_i_("ec2:1339");
var n = {
year:t.getYear(),
month:t.getMonth(),
date:t.getDate()
}, r = i.search.dates("checkin"), o = i.search.dates("checkout"), a = o;
"checkin" == e.options.type ? (i.search.dates("checkin", n), r = i.search.dates("checkin"), (!o || "invalid" == o.type || r.toString() >= o.toString()) && (i.search.dates("checkout", b(r, 1)), o = i.search.dates("checkout")), i.calendar2.controller.getCalendars()[1].setOptions({
startDate:t
}), i.calendar2.controller.getCalendars()[1].refreshDisabledDays()) :(i.search.dates("checkout", n), o = i.search.dates("checkout")), g(e.options.type, t.getDate(), t.getMonth() + 1, t.getYear()), r && "invalid" != o.type || (n = new Date(t.getYear(), t.getMonth(), t.getDate() - 1), i.search.dates("checkin", n), r = i.search.dates("checkin")), (o && !r || "valid" == o.type && "invalid" == r.type || r.toString() >= o.toString()) && (i.search.dates("checkin", b(o, -1)), r = i.search.dates("checkin")), r && o && "valid" == r.type && "valid" == o.type && e.selectRange(i.calendar2.dayId(r.year, r.month, r.date), i.calendar2.dayId(o.year, o.month, o.date)), a && "invalid" != a.type || (g("checkout", o.date, o.month + 1, o.year), d()), _r_();
},
onShow:function(e, t) {
if (_i_("ec2:1340"), "checkout" == e.options.type) return _r_();
var n = i.search.dates("checkin");
n && "valid" == n.type && e.selectDay(i.calendar2.dayId()), _r_();
}
};
i.eventEmitter.bind("CALENDAR:opened", l);
var y = a.extend({}, m);
y.type = "checkout", y.title = n.transl_checkout_title, y.defaultDate = i.search.dates("checkout"), y.startDate = p(), y.endDate = f(), r.calendar2(m), o.calendar2(y), _r_();
}
function d() {
_i_("ec2:584"), o.trigger("show"), _r_();
}
function u() {
_i_("ec2:585");
var e = new Date();
return _r_(e);
}
function h() {
_i_("ec2:586");
var e = i.calendar2.today();
return e.setFullYear(e.getFullYear() + 1), e.setDate(0), e.setDate(e.getDate() - 1), _r_(e);
}
function p() {
_i_("ec2:587");
var e = i.calendar2.today();
return e.setDate(e.getDate() + 1), _r_(e);
}
function f() {
_i_("ec2:588");
var e = i.calendar2.today();
return e.setFullYear(e.getFullYear() + 1), e.setDate(0), _r_(e);
}
function g(e, t, i, n) {
_i_("ec2:589");
var a, s;
return t && (s = n + "-" + i + "-" + t, s = booking.formatter.date(s, "date_with_year")), a = "checkin" == e ? r.find("p") :o.find("p"), t ? a.removeClass("placeholder").text(s) :a.addClass("placeholder").text(a.data("default")), _r_(!0);
}
return _r_({
init:s,
priority:9
});
}(window, document, booking, booking.env)), "cn" === B.env.b_countrycode && "city" === B.env.b_action && $("#ed-wrapper").length > 0 && (booking[sNSStartup].loc_everyday_deals = {
init:function() {
_i_("ec2:363");
var e = $("#ed-pagination"), t = $("#ed-prevpage"), i = $("#ed-nextpage"), n = $("#ed-cpagenum"), r = $("#ed-tpagenum"), o = $(".ed-list-wrapper.ed-cgrp"), a = $(".ed-list-wrapper"), s = a.length;
function _() {
_i_("ec2:770");
var e = $(this);
"ed-prevpage" !== e.attr("id") || o.hasClass("ed-fgrp") ? "ed-nextpage" !== e.attr("id") || o.hasClass("ed-lgrp") || (o.removeClass("ed-cgrp").hide().next().addClass("ed-cgrp").show(), n.text(parseInt(n.text()) + 1)) :(o.removeClass("ed-cgrp").hide().prev().addClass("ed-cgrp").show(), n.text(parseInt(n.text()) - 1)), o = $(".ed-list-wrapper.ed-cgrp"), t.removeClass("ed-disclick"), i.removeClass("ed-disclick"), o.hasClass("ed-fgrp") ? t.addClass("ed-disclick") :o.hasClass("ed-lgrp") && i.addClass("ed-disclick"), _r_();
}
s > 1 && (a.each(function(e) {
_i_("ec2:1255"), $(this).hasClass("ed-cgrp") && n.text(e + 1), _r_();
}), a.eq(s - 1).addClass("ed-lgrp"), e.show(), r.text(s), t.click(_), i.click(_)), _r_();
}
}), function() {
_i_("ec2:50"), B.when({
events:"ready",
condition:!!$("#sliderWrapper").length
}).run(function() {
_i_("ec2:364");
var e, t, i, n = 0, r = 500, o = 5e3, a = $("#sliderWrapper .next"), s = $("#sliderWrapper .prev"), _ = function() {
_i_("ec2:1103"), i.eq(n).fadeOut(r), n == e - 1 ? n = 0 :n++, i.eq(n).fadeIn(r), _r_();
}, c = function() {
_i_("ec2:1104"), i.eq(n).fadeOut(r), 0 == n ? n = e - 1 :n--, i.eq(n).fadeIn(r), _r_();
};
a.click(function() {
_i_("ec2:1105"), _(), _r_();
}), s.click(function() {
_i_("ec2:1106"), c(), _r_();
});
var l = function() {
_i_("ec2:1107"), i = $("#districtsSlider li"), e = i.length, i.eq(n).fadeIn(r), t = setInterval(_, o), $("#sliderWrapper").hover(function() {
_i_("ec2:1418"), clearInterval(t), _r_();
}, function() {
_i_("ec2:1419"), t = setInterval(_, o), _r_();
}), _r_();
};
l(), _r_();
}), _r_();
}(), booking[sNSStartup].lp_sh_hide_specific_search = function(e, t) {
_i_("ec2:150");
function i() {
_i_("ec2:274"), t(".lp-sh-hide-search, .js-lp-sh-hide-search-bicon").click(function(e) {
_i_("ec2:1004"), e.preventDefault(), e.stopPropagation();
var i = t(this).closest("li"), n = i.hasClass("lp-dest-search-history"), r = i.data("sh_id");
function o() {
_i_("ec2:1196"), i.remove(), t(".lp-search-history-list-item").length || t(".lp-sh-block").fadeOut(), _r_();
}
n ? (i.css({
overflow:"hidden",
border:"none"
}), i.animate({
opacity:0,
height:"0px",
padding:0,
margin:0
}, 100, o)) :i.fadeOut(300, o), t.ajax({
url:"/hide_search_hist",
data:{
id:r
}
}), _r_();
}), _r_();
}
return _r_({
init:function() {
if (_i_("ec2:771"), i(), e.env.b_run_sr_ajax) {
var t = e.require("searchresults/events");
t.on(t.UI_BLOCK_UPDATED, function(e) {
_i_("ec2:1420"), "search_history" === e.id && i(), _r_();
});
}
_r_();
}
});
}(booking, jQuery), function(e, t, i) {
_i_("ec2:51");
var n = {
paging:function(t) {
_i_("ec2:772");
var i = {
$tabButton:".rlp-main-section-tab__btn",
$tabButtonActive:".rlp-main-section-tab__btn--active",
tabButtonActiveClass:"rlp-main-section-tab__btn--active",
$tabSectionContainer:".rlp-main-section-hotels--tab",
tabSectionContainerActiveClass:"rlp-main-section-hotels--tab-active",
callback:null
}, n = e.extend({}, i, t);
return _r_(this.each(function() {
_i_("ec2:1256");
var t = e(this);
e(n.$tabButton, this).bind("click", function() {
_i_("ec2:1527");
var i = e(this), r = e(n.$tabButtonActive, t).index(), o = i.index();
r !== o && (e(n.$tabButtonActive, t).removeClass(n.tabButtonActiveClass), i.addClass(n.tabButtonActiveClass), e(n.$tabSectionContainer, t).eq(r).removeClass(n.tabSectionContainerActiveClass), e(n.$tabSectionContainer, t).eq(o).addClass(n.tabSectionContainerActiveClass)), "function" == typeof n.callback && n.callback.call(i), _r_();
}), _r_();
}));
},
flipover:function(t) {
_i_("ec2:773");
var i = {
callback:null
};
return e.extend({}, i, t), _r_(this.each(function() {}));
}
};
e.fn.swapTab = function(t, i) {
if (_i_("ec2:365"), n[t]) return _r_(n[t].apply(this, Array.prototype.slice.call(arguments, 1)));
e.error("Tab Category " + t + " does not exist"), _r_();
}, _r_();
}(jQuery, window, document), function(e, t, i) {
_i_("ec2:52"), e.fn.textLabel = function(t) {
return _i_("ec2:366"), _r_(this.each(function() {
_i_("ec2:1108"), e(this).bind({
mouseover:function() {
_i_("ec2:1528"), e(this).addClass("active").find("*").addClass("active"), _r_();
},
mouseleave:function() {
_i_("ec2:1529"), e(this).removeClass("active").find("*").removeClass("active"), _r_();
}
}), _r_();
}));
}, _r_();
}(jQuery, window, document), booking[sNSStartup].postcard_min_rates_ga = {
priority:9,
init:function() {
_i_("ec2:215"), $(".mrr li a").click(function() {
_i_("ec2:774");
var e = $(this).attr("data-amount");
"undefined" != typeof booking.google.clickTracker && booking.google.trackEvent(booking.google.clickTracker, "postcard min_rates - " + e), _r_();
}), _r_();
}
}, booking[sNSStartup].promotion_shortlist_interacts = {
init:function() {
_i_("ec2:216");
var e = B.require("jquery");
e("#home_featured_destinations").delegate("tr.dotter", "click", function(t) {
_i_("ec2:1258");
var i = e(this).data("url");
"A" === t.target.nodeName || e(this).hasClass("moreBoxFolded") || e(this).hasClass("moreBoxUnfolded") || (window.location.href = i), _r_();
}).delegate("tr.dotter", "mouseenter", function(t) {
_i_("ec2:1109"), e(this).hasClass("moreBoxFolded") || e(this).hasClass("moreBoxUnfolded") || e(this).addClass("promo_even_on"), _r_();
}).delegate("tr.dotter", "mouseleave", function(t) {
_i_("ec2:775"), e(this).hasClass("moreBoxFolded") || e(this).hasClass("moreBoxUnfolded") || e(this).removeClass("promo_even_on"), _r_();
}), _r_();
}
}, booking[sNSStartup].region_attractions_in_lp = function() {
_i_("ec2:151");
var e, t, i, n = 0, r = 500, o = 8e3, a = function() {
_i_("ec2:590"), i.eq(n).fadeOut(r), n === e - 1 ? n = 0 :n++, i.eq(n).fadeIn(r), _r_();
}, s = function() {
_i_("ec2:591"), i.eq(n).fadeOut(r), 0 === n ? n = e - 1 :n--, i.eq(n).fadeIn(r), _r_();
}, _ = function() {
_i_("ec2:592"), i = $(".lp-region-highlights .lp-slider .item-container"), e = i.length, i.eq(n).fadeIn(r), t = setInterval(a, o), $(".lp-region-highlights").hover(function() {
_i_("ec2:1197"), clearInterval(t), _r_();
}, function() {
_i_("ec2:1198"), t = setInterval(a, o), _r_();
}), $(".lp-region-highlights .next").bind("click", a), $(".lp-region-highlights .prev").bind("click", s), _r_();
}, c = function() {
if (_i_("ec2:593"), !$(".lp-region-highlights").length) return _r_();
$.ajax({
url:"/region_attractions",
data:{
dest_type:B.env.b_action,
dest_id:B.env.b_dest_id,
lang:B.env.b_lang_for_url,
stype:booking.env.b_site_type_id,
aid:B.env.b_aid
},
success:function(e) {
if (_i_("ec2:1341"), e && e.b_items && e.b_items.length) {
var t, i, n = "", r = e.b_items.length;
for (t = 0; r > t; t += 1) i = e.b_items[t], i.b_region_attraction_photo_max540 && (n += '<li class="item-container">', n += '<a href="' + booking.env.b_url_start + i.b_sr_url + '">', n += '<div class="item-photo" style="background-image: url(' + B.tools.jsStaticUrl(i.b_region_attraction_photo_max540) + ');">', n += '<div class="item-description-container">', n += '<h5 class="item-title">' + i.b_region_attraction_name + "</h5>", n += '<p class="item-description">' + i.b_region_attraction_description + "</p>", n += "</div></div></a></li>");
$(".lp-region-highlights .lp-slider").append(n), $(".lp-region-highlights, .lp-region-highlights-title").show(), _();
}
_r_();
}
}), _r_();
};
return _r_({
init:c
});
}(), function(e) {
_i_("ec2:53"), e(".ph_review, .cr_review_content-container").textLabel();
function t(e) {
_i_("ec2:217"), e.swapTab("paging", {
$tabButton:".ia_tab_btn",
$tabButtonActive:".ia_tab_btn.active",
tabButtonActiveClass:"active",
$tabSectionContainer:".ia_section",
tabSectionContainerActiveClass:"active"
}), _r_();
}
t(e(".in-and-around")), B.define("component/in-and-around-swap-tab", function(e, i, n) {
_i_("ec2:367");
var r = e("component");
n.exports = r.extend({
init:function() {
_i_("ec2:1342"), t(this.$el), _r_();
}
}), _r_();
}), _r_();
}(B.require("jquery")), B.when({
condition:B && B.env && "zh" == B.env.b_lang,
action:"index"
}).run(function() {
_i_("ec2:54");
var e = $("#usp_app"), t = 0, i = 400, n = !1;
function r() {
_i_("ec2:218");
var o, a = e.offset(), s = $(window).scrollTop();
if (n || !a) return _r_();
o = a.top - s, o > t && i >= o && (e.find(".lp-index-usp-iconfont__icon").addClass("louder_gta"), $(window).unbind("scroll", r), n = !0), _r_();
}
r(), $(window).bind("scroll", r), _r_();
}), booking[sNSStartup].show_city_description = function() {
_i_("ec2:152");
var e = function() {
_i_("ec2:594"), $("#b-city_description").click(function() {
_i_("ec2:1199"), $(this).addClass("is_open"), _r_();
}), _r_();
};
return _r_({
init:e
});
}(), B.when({
action:"index",
events:"ready"
}).run(function(e) {
_i_("ec2:55");
var t = e("jquery"), i = t(".bh_apt_therapy_banner");
i.slideDown(), i.find(".bicon-close").on("click", function() {
_i_("ec2:368"), i.slideUp(), _r_();
}), _r_();
}), /* @preserve echo.js v1.6.0 | (c) 2014 @toddmotto | https://github.com/toddmotto/echo */
function(e, t) {
_i_("ec2:57"), "function" == typeof define && define.amd ? define(function() {
return _i_("ec2:776"), _r_(t(e));
}) :"object" == typeof exports ? module.exports = t :e.echo = t(e), _r_();
}(this, function(e) {
"use strict";
_i_("ec2:56");
var t, i, n, r, o, a = {}, s = function() {}, _ = function(e, t) {
_i_("ec2:370");
var i = e.getBoundingClientRect();
return _r_(i.right >= t.l && i.bottom >= t.t && i.left <= t.r && i.top <= t.b);
}, c = function() {
if (_i_("ec2:371"), !r && i) return _r_();
clearTimeout(i), i = setTimeout(function() {
_i_("ec2:1200"), a.render(), i = null, _r_();
}, n), _r_();
};
return a.init = function(i) {
_i_("ec2:372"), i = i || {};
var _ = i.offset || 0, l = i.offsetVertical || _, d = i.offsetHorizontal || _, u = function(e, t) {
return _i_("ec2:1110"), _r_(parseInt(e || t, 10));
};
t = {
t:u(i.offsetTop, l),
b:u(i.offsetBottom, l),
l:u(i.offsetLeft, d),
r:u(i.offsetRight, d)
}, n = u(i.throttle, 250), r = i.debounce !== !1, o = !!i.unload, s = i.callback || s, a.render(), document.addEventListener ? (e.addEventListener("scroll", c, !1), e.addEventListener("load", c, !1)) :(e.attachEvent("onscroll", c), e.attachEvent("onload", c)), _r_();
}, a.render = function() {
_i_("ec2:373");
for (var i, n, r = $("img[data-echo]"), c = r.length, l = {
l:0 - t.l,
t:0 - t.t,
b:(e.innerHeight || document.documentElement.clientHeight) + t.b,
r:(e.innerWidth || document.documentElement.clientWidth) + t.r
}, d = 0; c > d; d++) n = r[d], _(n, l) ? (o && n.setAttribute("data-echo-placeholder", n.src), n.src = n.getAttribute("data-echo"), o || n.removeAttribute("data-echo"), s(n, "load")) :o && (i = n.getAttribute("data-echo-placeholder")) && (n.src = i, n.removeAttribute("data-echo-placeholder"), s(n, "unload"));
c || a.detach(), _r_();
}, a.detach = function() {
_i_("ec2:374"), document.removeEventListener ? e.removeEventListener("scroll", c) :e.detachEvent("onscroll", c), clearTimeout(i), _r_();
}, _r_(a);
}), booking[sNSStartup].lp_sh_js_cleanup = {
init:function() {
_i_("ec2:219"), $("#search_history_items_list").delegate(".lp-dest-search-history", "click", function(e) {
_i_("ec2:777"), e.preventDefault();
var t = $(this).data("url");
e.ctrlKey || e.metaKey ? window.open(t) :window.location.href = t, _r_();
}), _r_();
}
}, booking[sNSStartup].lp_sh_new_tab = {
init:function() {
_i_("ec2:220"), $("#search_history_items_list").delegate(".b_new_tab_link", "click", function(e) {
_i_("ec2:778"), e.preventDefault();
var t = $(this).data("url");
window.open(t), _r_();
}), _r_();
}
}, booking[sNSStartup].popularCities = {
priority:9,
loadpos:0,
savecheck:0,
init:function() {
_i_("ec2:221"), $("#region_popular_cities_rd li").click(function() {
_i_("ec2:779"), window.location = $(this).find("a:first").attr("href"), _r_();
}), _r_();
}
}, function() {
_i_("ec2:58");
var e = B.require("jquery");
B.when({
action:[ "index" ]
}).run(function(e) {
_i_("ec2:375");
try {
B.require([ "ga-tracker" ], function(e) {
_i_("ec2:1259"), n(e), _r_();
});
} catch (t) {}
_r_();
}), B.when({
action:[ "country", "city", "airport", "region", "district", "destination", "continent", "landmark", "place" ]
}).run(function(e) {
_i_("ec2:376");
try {
B.require([ "ga-tracker" ], function(e) {
_i_("ec2:1260"), i(e), _r_();
});
} catch (t) {}
_r_();
});
function t(t) {
_i_("ec2:222");
var i = e("#top"), n = i.find("li.user_center_option");
n.on("click", function(e) {
_i_("ec2:780"), "uc_feedbacklink_box" == e.currentTarget.id ? t.trackEvent("Header", "Index", "Feedback_link|Click", 1) :e.currentTarget.className.indexOf("uc_currency") > -1 ? t.trackEvent("Header", "Index", "Currency|Click") :e.currentTarget.className.indexOf("uc_language") > -1 ? t.trackEvent("Header", "Index", "Language|Click") :e.currentTarget.className.indexOf("uc_viewed_hotels") > -1 ? t.trackEvent("Header", "Index", "Viewed_hotels|Click") :e.currentTarget.className.indexOf("uc_wishlists") > -1 ? t.trackEvent("Header", "Index", "Wish_List|Click") :e.currentTarget.className.indexOf("header_dsf_link") > -1 && t.trackEvent("Header", "Index", "DSF_Link|Click"), _r_();
}), _r_();
}
function i(e) {
_i_("ec2:223"), t(e), _r_();
}
function n(i) {
_i_("ec2:224");
var n = e("#search_history_items_list"), r = e("#home_featured_destinations"), o = e("#searchform-subscribe-box"), a = e("#newsletter_to"), s = e("#index-nav_id"), _ = e("#index-nav_id a.index-nav_menu-item-link"), c = e("#top-destinations-block"), l = n.find(".unified-postcard"), d = r.find(".unified-postcard"), u = o.find(".searchform-subscribe-box-field-section"), h = o.find("input.js-searchform-subscribe-box-textfield");
t(i), s.on("click", "a.index-nav_menu-item-link", function(t) {
_i_("ec2:781");
var n = _.index(t.currentTarget);
if (n >= 0) {
var r = n + 1 + "|" + e.trim(e(t.currentTarget).text());
i.trackEvent("Index", r, "click");
}
_r_();
}), s.on("mouseenter", "a.index-nav_menu-item-link", function(t) {
_i_("ec2:782");
var n = setTimeout(function() {
_i_("ec2:1343");
var n = _.index(t.currentTarget);
if (n >= 0) {
var r = n + 1 + "|" + e.trim(e(t.currentTarget).text());
i.trackEvent("Index", r, "hover");
}
_r_();
}, 500);
e(t.currentTarget).on("mouseleave", function() {
_i_("ec2:1261"), clearTimeout(n), _r_();
}), _r_();
}), n.on("click", ".unified-postcard", function(e) {
_i_("ec2:783");
var t = l.index(e.currentTarget);
t >= 0 && (t++, i.trackEvent("Index", "Search History", "" + t)), _r_();
}), r.on("click", ".unified-postcard", function(e) {
_i_("ec2:784");
var t = d.index(e.currentTarget);
t >= 0 && (t++, i.trackEvent("Index", "Upper Postcard", "" + t)), _r_();
}), r.on("mouseenter", ".endorsement-container", function(t) {
_i_("ec2:785"), i.trackEvent("Index", "Upper Postcard", e(t.currentTarget).data("ga")), _r_();
}), o.length > 0 && (o.on("click", function() {
_i_("ec2:1111"), setTimeout(function() {
_i_("ec2:1421"), u.is(":hidden") ? i.trackEvent("Index", "Member_deals", "fold", null, !1) :i.trackEvent("Index", "Member_deals", "unfold", null, !1), _r_();
}, 1e3), _r_();
}), h.on("change", function() {
_i_("ec2:1112"), i.trackEvent("Index", "Member_deals", "typed", null, !1), _r_();
})), c.on("click", ".b-popular_item", function(t) {
_i_("ec2:786");
var n;
n = e(t.currentTarget).index() % 2 == 0 ? "1:" + (1 + e(t.currentTarget).index() / 2) :"2:" + (1 + parseInt(e(t.currentTarget).index() / 2)), i.trackEvent("Index", "More destinations", n), _r_();
}), a.on("change", function() {
_i_("ec2:787"), i.trackEvent("Index", "Member_deals", "typed", null, !1), _r_();
}), _r_();
}
_r_();
}(), booking[sNSExperiments].ajax_acc_types = function() {
_i_("ec2:153");
var e, t, i, n, r = {};
function o(e) {
_i_("ec2:275"), t.text(e), _r_();
}
function a(t) {
_i_("ec2:276"), n.after(t), i.remove(), i = e.find("table.promos"), _r_();
}
function s(e) {
_i_("ec2:277"), n.find("li.selected").toggleClass("selected dynamic"), e.parent().toggleClass("selected dynamic"), _r_();
}
function _(e, t) {
if (_i_("ec2:278"), r[e]) return _r_();
r[e] = {};
var i = /<h2 class="specials"[^>]*>[\s\S]+?<\/h2>/.exec(t), n = /(<table class="promos"[^>]*>[\s\S]+?<\/table>)/.exec(t);
return i && (r[e].title = i[1]), n ? r[e].body = n[1] :alert("fail body"), _r_(r[e]);
}
function c() {
_i_("ec2:279"), e = $(".specialsblock"), t = e.find("h2.specials"), i = e.find("table.promos"), n = e.find("ul.postcard-nav"), e.delegate(".postcard-nav a", "click", function(e) {
_i_("ec2:1005"), e.preventDefault();
var t = $(this), n = this.href, c = r[n];
if (t.parent().hasClass("selected")) return _r_();
if (c) return o(c.title), s(t), a(c.body), _r_();
i.fadeTo(800, .4), $.ajax({
async:!0,
cache:!0,
url:n,
dataType:"text",
success:function(e, i, r) {
_i_("ec2:1508");
var c = _(n, e);
o(c.title), s(t), a(c.body), _r_();
},
error:function() {
_i_("ec2:1509"), i.fadeTo(800, 1), _r_();
}
}), _r_();
}), _r_();
}
return _r_({
init:c
});
}(), function() {
_i_("ec2:59");
function e() {
_i_("ec2:225");
var e, t, i, n, r = {
simple:{
interval:1250,
step:function() {
_i_("ec2:1262"), s(a()[e]), _r_();
}
},
letterbyletter:{
interval:1400,
transitioninterval:350,
step:function() {
_i_("ec2:1263");
var i, n = 0, r = a()[e], o = a()[t], _ = o, c = this.transitioninterval / Math.max(r.length, o.length);
i = setInterval(function() {
_i_("ec2:1557"), _ = r.substr(0, ++n) + o.substr(n), s(_), _ === r && clearInterval(i), _r_();
}, c), _r_();
}
}
}, o = {
header:null,
style:null
};
function a() {
return _i_("ec2:377"), n || (n = B.env.emk_bim_flipping_names), _r_(n);
}
function s(e) {
_i_("ec2:378"), o.header.text(B.jstmpl.translations("emk_kill_50_bounce_intent_ufi_ticker_header", 0, {
city_name:e
})), _r_();
}
var _;
return o.play = function() {
_i_("ec2:788"), e = 0, t = a().length - 1, i = r[o.style], _ = setInterval(function() {
_i_("ec2:1344"), i.step(), t = e, ++e === a().length && (e = 0), _r_();
}, i.interval), _r_();
}, o.stop = function() {
_i_("ec2:789"), clearInterval(_), _r_();
}, o.countrynames = a, _r_(o);
}
B.define("emk/bim-index-flipping-header", function(t, i, n) {
_i_("ec2:379"), n.exports = e(), _r_();
}), _r_();
}(), function() {
_i_("ec2:60");
var e, t, i = window.jQuery, n = window.booking, r = n.require("et");
function o() {
if (_i_("ec2:226"), e = i("#notification_lightbox"), "city" !== n.env.b_action && "index" !== n.env.b_action || !e.length || n.env.fe_disable_rlu_modal) return _r_();
var r = n.require("leaving-users-lightbox");
r.priorityfixperiment = "HMeBJYfSYNJIUUbSXT", n.et.track(r.priorityfixperiment), s() && (r.showLeavingMessage_ = function() {
_i_("ec2:1113"), n.events.emit("leaving-users-lightbox:show", {
lightbox:r.lightbox_,
lightboxSelector:r.params.lightboxContentBlock
}), _r_();
}), r.init({
lightboxContentBlock:"#notification_lightbox",
lightboxRootClass:"notification-lightbox-container"
}), e.find("[placeholder]").placeholder(), n.events.on("leaving-users-lightbox:show", a);
var o = e.data("flippingnames");
o && (t = n.require("emk/bim-index-flipping-header"), t.header = e.find(".subsc_title"), t.style = o), r.strictCheck = e.data("strict-check"), _r_();
}
function a() {
if (_i_("ec2:227"), _(), c(), s()) return _r_();
t && t.countrynames().length && (t.play(), window.addEventListener("blur", t.stop)), i(".js-uc-notification-close:visible").trigger("click"), i(".user_center_popover, #inspire_filter_block").hide(), n.env.b_exclude_lang_firstname = 1;
var e = "fDeYAebXZNFCZae";
n.env.emk_popup_incentive && r.track(e), r.stage(e, 1);
var o = "HMeBJYfDcCHJBZMO";
r.track(o) && (r.stage(o, 2), setTimeout(function() {
_i_("ec2:1114"), r.customGoal(o, 3), _r_();
}, 5e3), setTimeout(function() {
_i_("ec2:1115"), r.customGoal(o, 4), _r_();
}, 1e4), setTimeout(function() {
_i_("ec2:1116"), r.customGoal(o, 5), _r_();
}, 2e4)), _r_();
}
function s() {
return _i_("ec2:228"), _r_(e.data("suppress"));
}
function _() {
_i_("ec2:229");
var t = (e.data("track-open") || "").trim();
if (!t) return _r_();
t.split(",").forEach(function(e) {
_i_("ec2:790");
var t = e.split(":");
if (2 !== t.length) return _r_();
var i = t[0].trim(), r = t[1].trim();
n.et.stage(i, r), _r_();
}), _r_();
}
function c() {
_i_("ec2:230");
var t = (e.data("track-bounce-retention") || "").trim();
if (!t) return _r_();
t.split(",").forEach(function(e) {
if (_i_("ec2:791"), e = e.trim(), !e) return _r_();
setTimeout(function() {
_i_("ec2:1264"), r.customGoal(e, 3), _r_();
}, 5e3), setTimeout(function() {
_i_("ec2:1265"), r.customGoal(e, 4), _r_();
}, 1e4), setTimeout(function() {
_i_("ec2:1266"), r.customGoal(e, 5), _r_();
}, 2e4), _r_();
}), _r_();
}
n.ensureNamespaceExists(sNSStartup), n[sNSStartup].emk_city_bounce_intent = {
priority:9,
init:o
}, _r_();
}(), function() {
_i_("ec2:61");
var e = {
register:function(t) {
_i_("ec2:792"), $(":submit", t).on("click", function(i) {
_i_("ec2:1267");
var n = $("[name=to]", t).val();
e.valid(n) || (i.preventDefault(), e.responsedisplay(t, "invalid")()), _r_();
}), $("form", t).on("submit", function(i) {
_i_("ec2:1268"), i.preventDefault(), e.reset(t), e.submit($(i.target).serialize(), e.responsedisplay(t, "success"), e.responsedisplay(t, "error"), e.responsedisplay(t, "denied")), _r_();
}), _r_();
},
submit:function(e, t, i, n) {
return _i_("ec2:793"), _r_($.ajax({
type:"post",
url:"/newslettersubscribe.json",
data:e,
dataType:"json",
success:function(e) {
_i_("ec2:1422"), e.success ? t() :"bad_data" == e.error ? i() :"denied" == e.error && n(), _r_();
}
}));
},
responses:{
success:"[data-subscription-success]",
invalid:"[data-subscription-invalid]",
error:"[data-subscription-error]",
denied:"[data-subscription-denied]"
},
responsedisplay:function(t, i) {
return _i_("ec2:794"), _r_(function() {
_i_("ec2:1201"), $(e.responses[i], t).show(), _r_();
});
},
reset:function(t) {
_i_("ec2:795"), $.each(e.responses, function(e, i) {
_i_("ec2:1269"), $(i, t).hide(), _r_();
}), _r_();
},
emailvalidationregex:/^[\w-\.\+]+@([\w-]+\.)+[\w-]{2,14}$/,
valid:function(t) {
return _i_("ec2:796"), _r_(e.emailvalidationregex.test(t));
}
};
B.when({
events:"load"
}).run(function() {
_i_("ec2:380");
var t = B.require("jquery");
t("[data-emk-entry-point]").each(function(t, i) {
_i_("ec2:1117"), e.register(i), _r_();
}), _r_();
}), _r_();
}(), function(e) {
_i_("ec2:62");
var t, i, n, r = e.require("jquery"), o = e.require("utils/debounce"), a = {};
function s() {
_i_("ec2:231");
var e = !1, o = r("#searchboxInc");
n = r(".lp_bold_date_picker_wrapper"), i = n.find(".lp_bold_date_picker_checkin"), t = n.find(".lp_bold_date_picker_checkout"), n.find(".lp_bold_date_picker_group_container").length && p(n, o), n.find(".lp_bold_date_picker_btn").click(function() {
_i_("ec2:797");
var t = u();
if (t.checkin && "valid" == t.checkin.type && t.checkout && "valid" == t.checkout.type && t.checkout.dateObject_ && t.checkout.dateObject_.getTime() - t.checkin.dateObject_.getTime() > 2592e6) return e = !0, r(".lp_bold_date_picker_error").fadeIn(300), _r_();
e && r(".lp_bold_date_picker_error").hide(), r("#frm .b-button_primary").click(), _r_();
}), n.find(".b-booker-type").click(function(e) {
_i_("ec2:798");
var t = r(this).find("input")[0].className;
o.find("." + t).click(), _r_();
});
var a = u();
a.checkin && h("checkin", a.checkin.date, a.checkin.month + 1, a.checkin.year), a.checkout && h("checkout", a.checkout.date, a.checkout.month + 1, a.checkout.year), _(), _r_();
}
function _() {
_i_("ec2:232");
var t = r(".lp_bold_date_picker_wrapper"), i = r(window);
e.when({
action:[ "country", "city", "airport", "region", "district", "landmark" ],
condition:t.length
}).run(function(e) {
_i_("ec2:799");
var n = r(".lp_flexible_layout_content--centered"), a = r("#top").outerHeight() + r("#breadcrumb").outerHeight(), s = r(".bbtool-notification").outerHeight(), _ = t.height();
function c() {
return _i_("ec2:1118"), _r_(i.height() - a - s - 30);
}
function l() {
_i_("ec2:1119"), t.css("min-height", c()), n.css("min-height", c()), _r_();
}
t.is(".lp_bold_date_picker--no_full_height") || Math.abs(_ - c()) > 5 && (i.on("resize", o(l, 200, !1)), l()), _r_();
}), _r_();
}
function c(t, i) {
_i_("ec2:233");
var n = e.search.dates("checkin"), r = e.search.dates("checkout"), o = e.search.dates(i.type);
n && h("checkin", n.date, n.month + 1, n.year), r && h("checkout", r.date, r.month + 1, r.year), "month" === o.type ? l("monthSelected", i.type, o) :"valid" === o.type && l("dateSelected", i.type, o);
for (var s = 0; s < a.length; s++) n && r && "valid" === n.type && "valid" === r.type && a[s].trigger("rangeSelected", {
type:i.type,
startValue:n,
endValue:r
});
_r_();
}
function l(e, t, i) {
_i_("ec2:234");
for (var n = 0; n < a.length; n++) a[n].type() === t && a[n].trigger(e, {
type:t,
value:i
});
_r_();
}
function d() {
_i_("ec2:235");
var t = e.calendar2.controller.getCalendars();
t.checkout = [], t.checkin = [], t.open = null;
for (var i = 0; i < t.length; i++) t[i].$input.hasClass("lp_bold_date_picker_select") && ("checkout" == t[i].options.type ? t.checkout = t[i] :t.checkin = t[i]);
return _r_(t);
}
function u() {
return _i_("ec2:236"), _r_({
checkin:e.search.dates("checkin"),
checkout:e.search.dates("checkout")
});
}
function h(e, n, r, o) {
_i_("ec2:237");
var a, s;
return n && (s = o + "-" + r + "-" + n, s = booking.formatter.date(s, "date_with_year")), a = "checkin" == e ? i :t, n ? a.removeClass("placeholder").find("span").text(s) :a.addClass("placeholder").find("span").text(a.data("default")), _r_(!0);
}
function p(t, i) {
_i_("ec2:238");
var n = t.find(".lp_bold_date_picker_lightbox"), o = n.parent();
t.find(".lp_bold_date_picker_group_container").click(function(e) {
_i_("ec2:1270");
var t = r(this).find(".main_guests_selector"), i = r(this).find(".lp_bold_date_picker_select");
t.is(":visible") || (e.stopPropagation(), t.show(), i.addClass("focus"), r.each(d(), function() {
_i_("ec2:1594"), this.trigger("hide"), _r_();
}), r(document).one("click", function() {
_i_("ec2:1595"), t.hide(), i.removeClass("focus"), _r_();
})), _r_();
}).find(".lp_bold_date_picker_group_lists li").click(function() {
_i_("ec2:800");
var t = r(this).data();
0 == t.b_number_rooms ? (g(n, e.search.group().value), o.show()) :(e.search.group({
adults:t.b_number_adults,
children:t.b_number_children,
childrenAges:[],
rooms:t.b_number_rooms
}), r(this).closest(".lp_bold_date_picker_group_container").find(".lp_bold_date_picker_select_text").html(r(this).text())), _r_();
}), o.click(function(e) {
_i_("ec2:801"), r(e.target).hasClass("lp_bold_date_picker_dimmer") && o.hide(), _r_();
}), n.find(".lp_bold_date_picker_lightbox_secondary_cta, .lp_bold_date_picker_lightbox_close_button").click(function() {
_i_("ec2:1423"), o.click(), _r_();
}).end().find(".lp_bold_date_picker_lightbox_cta").click(function() {
_i_("ec2:802");
var t = b(n);
e.search.group(t), f(t), o.click(), _r_();
}), e.components.require("legacy-emitter").bind("spin-button-change", function(e) {
_i_("ec2:803"), "lp_bold_date_picker_children_selector" == e.data.id && v(e, !0), _r_();
});
var a = e.search.group().value;
f(a), a.children && t.find(".lp_bold_date_picker_lightbox_ages").each(function(e) {
_i_("ec2:1120"), "undefined" != typeof a.childrenAges[e] && r(this).find("input").val(a.childrenAges[e]), _r_();
}), _r_();
}
function f(t) {
_i_("ec2:239");
var i = e.jstmpl("lp_bold_date_picker_group_message").render(t);
n.find(".lp_bold_date_picker_group_container").find(".lp_bold_date_picker_select_text").html(i), _r_();
}
function g(e, t) {
_i_("ec2:240"), e.find(".room_guests_selector input").val(t.rooms), e.find(".adults_guests_selector input").val(t.adults), e.find(".children_guests_selector input").val(t.children), v({
data:{
value:t.children
}
}), _r_();
}
function v(e, t) {
_i_("ec2:241");
var i = {
show:t ? "slideDown" :"show",
hide:t ? "slideUp" :"hide"
};
if (e.data.value) {
var r = n.find(".lp_bold_date_picker_lightbox_ages");
1 == e.data.value ? r.find(".singular").show().siblings(".plural").hide() :r.find(".plural").show().siblings(".singular").hide(), r.slideDown().find(".age_guests_selector:lt(" + e.data.value + ")").filter(":not(:visible)").val("0").end()[i.show]().end().find(".age_guests_selector:gt(" + (e.data.value - 1) + ")")[i.hide]();
} else n.find(".lp_bold_date_picker_lightbox_ages")[i.hide]().find(".age_guests_selector")[i.hide]();
_r_();
}
function b(e) {
return _i_("ec2:242"), _r_({
rooms:e.find(".room_guests_selector input").val(),
adults:e.find(".adults_guests_selector input").val(),
children:e.find(".children_guests_selector input").val(),
childrenAges:e.find(".age_guests_selector:visible input").map(function() {
return _i_("ec2:1271"), _r_(parseInt(r(this).val()));
}).toArray()
});
}
booking[sNSStartup].lp_bold_date_picker_fullon = {
init:function() {
_i_("ec2:804"), s(), a = d(), e.eventEmitter.bind("SEARCH:date_changed", c), _r_();
}
}, _r_();
}(booking), function() {
_i_("ec2:63");
var e = $("#lp-upcoming-date-suggestions-block .close_button");
if (!e.length) return _r_();
function t() {
_i_("ec2:243"), e.click(function(e) {
_i_("ec2:805"), e.preventDefault(), $("#lp-upcoming-date-suggestions-block").fadeOut("fast"), _r_();
}), _r_();
}
$(t), _r_();
}(), function(e, t) {
_i_("ec2:64");
var i = !1, n = function(n) {
_i_("ec2:381");
var r, o = e("#top-destinations-block"), a = o.find("#lp_endorsements_popular_destinations_tooltip"), s = ".endorsement, .index_endorsement_tick", _ = "";
if (!o.length || !a.length || i) return _r_();
e("body").append(a), o.delegate(s, "mouseover", c).delegate(s, "mouseleave", l).delegate(s, "mousemove", d), i = !0;
function c(t) {
_i_("ec2:806");
var i = e(this).closest(".b-popular_item"), n = i.find(".lp_endorsements_popular_destinations").length;
if (!n) return _r_();
var o = e(t.target).is("a") && e(t.target).closest(".b_popular_acc_types").length, s = a.is(":visible"), c = i.find("a:first").attr("href");
if (s && c == _ && !r || o) s && o && !r && l(); else {
_ = c, a.find(".lp_endorsements_popular_destinations_tooltip_content").html(u(i)).end().stop(!0, !0), a.css({
display:"block",
visibility:"hidden",
width:"auto",
top:0,
left:0
}).find(".dsf_social_proof").hide();
var d = a.find("ul").outerWidth();
a.css({
display:"none",
visibility:"visible"
}), a.width(d + 35).fadeIn(function() {
_i_("ec2:1596"), a.trigger("focus"), _r_();
}).find(".dsf_social_proof").show();
}
_r_();
}
function l(e) {
_i_("ec2:807"), r = !0, a.stop(!0, !0).fadeOut(function() {
_i_("ec2:1272"), r = !1, _r_();
}), _r_();
}
function d(i) {
if (_i_("ec2:808"), !a.is(":visible")) return _r_();
var n = e(window).height() + e(window).scrollTop(), r = e(window).width() + e(window).scrollLeft(), o = a.outerWidth(), s = a.outerHeight(), _ = i.pageY + 20, c = i.pageX + 35;
if (t.env.rtl || c + o > r) {
var l = i.pageX - 35 - o;
l > 0 && (c = l);
}
_ + 20 + s > n && (_ = n - s - 20 + "px"), a.css({
left:c,
top:_
}), _r_();
}
function u(e) {
return _i_("ec2:809"), _r_(e.find(".lp_endorsement_tooltip_list").clone());
}
_r_();
};
booking[sNSStartup].lp_endorsements_popular_destinations = {
init:n
}, _r_();
}(jQuery, booking), function(e, t) {
_i_("ec2:65");
var i = "fEFHMPdTUFQZHT";
function n(t) {
_i_("ec2:244"), t = e(t);
var i = 2, n = [], r = .74074 * t.find(".lp_promotion_cards_list_child_imagewrapper:first").width();
if (t.find(".lp_promotion_cards_list_child_imagewrapper").height(r), t.find(".lp_promotion_cards_list_child .lp_promotion_cards_list_holder").height("auto"), t.closest(".lp_horizontal_promotions_wrapper").length) {
var o = t.find(".lp_promotion_cards_list_holder").css("height", "auto"), a = o.outerHeight() - o.height(), s = e(".inline-map-container").height(), _ = Math.max.apply(Math, o.map(function(t, i) {
return _i_("ec2:1424"), _r_(e(i).height());
}).toArray());
_ = _ + a > s ? _ :s - a, o.height(_);
} else t.find(".lp_promotion_cards_list_child").each(function(t, r) {
if (_i_("ec2:1121"), t % i === 0 ? n = [ r ] :n.push(r), (t + 1) % i === 0) {
var o = e(n), a = Math.max.apply(Math, o.map(function(t, i) {
return _i_("ec2:1618"), _r_(e(i).height());
}).toArray());
o.find("> .lp_promotion_cards_list_holder").each(function(t, i) {
_i_("ec2:1530");
var n = parseInt(e(i).css("paddingBottom"), 10);
e(i).height(a - n), _r_();
});
}
_r_();
});
_r_();
}
function r() {
_i_("ec2:245"), e(".lp_promotions_cards_list").delegate(".lp_promotion_cards_list_child_tooltipbtn", "mouseenter mouseleave", function(t) {
_i_("ec2:1273"), t.preventDefault(), t.stopPropagation();
var i = e(this), n = i.data("rel"), r = e(n).html();
if ("mouseenter" === t.type) {
var o = i.dropdown({
content:r,
arrowSize:16,
extraClass:"fly-dropdown--card-tooltip fly-dropdown--type-" + n.substr(1, 3),
position:"top center"
}).dropdown("instance"), a = i.closest(".lp_promotion_cards_list_holder");
o._createArrow = function() {
_i_("ec2:1597");
var t = this.root();
return _r_(e('<i class="fly-dropdown__arrow"><i>').appendTo(t));
}, o._position = function() {
_i_("ec2:1598");
var t = this._rect(this.root()), n = this._rect(a), r = this._rect(i), o = this.options.arrowSize, s = e(window), _ = s.scrollLeft() + n.left + .5 * n.width - .5 * t.width, c = s.scrollTop() + r.top - t.height - o, l = this._createArrow();
return l.css({
left:r.left + r.width / 2 - _
}), _r_({
top:c,
left:_
});
}, o.show();
} else i.dropdown("destroy");
_r_();
}).delegate(".lp_promotion_cards_list_holder", "click", function(t) {
_i_("ec2:1122");
var i, n;
if (t && t.target) {
if (e(t.target).closest(".wl-text-block").length) return t.preventDefault(), _r_();
if (e(t.target).closest("h4").length && e(t.target).is("a") || (n = "sr-url", i = e(this).closest("li").data(n)), i) return t.preventDefault(), t.stopImmediatePropagation(), window.open(i, "_blank"), _r_(!1);
}
return _r_(!0);
}).each(function(e, t) {
_i_("ec2:810"), n(t), _r_();
});
var t = !0;
e(window).resize(function() {
_i_("ec2:811"), t && (t = !1, setTimeout(function() {
_i_("ec2:1425"), t = !0, _r_();
}, 0), n(e(".lp_promotions_cards_list:visible"))), _r_();
}), _r_();
}
t[sNSStartup][i] = {
init:r,
updateCardHeight:n
}, _r_();
}(jQuery, booking), booking[sNSExperiments].preferred_filters = {
priority:9,
init:function() {
_i_("ec2:246"), $(".facility_item").click(function(e) {
_i_("ec2:812"), e.preventDefault();
var t, i = $(this), n = $("#frm .b-form__footer .b-form-group__content"), r = i.data("type"), o = i.data("id"), a = r + "=" + o, s = "<a href='#' class='removeThisFacility use_sprites icon_remove'>&nbsp;</a>", _ = "<input type='hidden' id='filteredFacility' name='nflt' value='" + a + "'>", c = "<div class='facility_preference'><h4>" + booking.env.tag_filter_by + "</h4><span class='facility_item facility_selected'>" + i.html() + s + "</span>" + _ + "</div>";
i.hasClass("facility_selected") || (t = !0), $(".facility_selected").toggleClass("facility_selected"), $(".facility_preference").remove(), t && (i.toggleClass("facility_selected"), n.append(c)), $("body").scrollTop() >= 250 && $("body").scrollTop(0), $("#searchboxInc form").animate({
opacity:.4
}, 200).animate({
opacity:1
}, 200), _r_();
}), $(document).on("click", ".facility_item .removeThisFacility", function() {
return _i_("ec2:813"), $(".facility_preference").remove(), $(".filters_list a").removeClass("facility_selected"), _r_(!1);
}), _r_();
}
}, function() {
_i_("ec2:66"), B.when({
events:"ready",
action:[ "city" ]
}).run(function() {
_i_("ec2:382"), function(e) {
_i_("ec2:1123");
var t, i, n, r, o, a, s, _, c, l, d, u, h, p = 0, f = {}, g = [], v = 0, b = {}, m = [], y = null, w = new Image(), k = /\.(jpg|gif|png|bmp|jpeg)(.*)?$/i, M = /[^\.]\.(swf)\s*$/i, C = 1, x = 0, S = "", T = !1, $ = e.extend(e("<div/>")[0], {
prop:0
}), B = function() {
_i_("ec2:1426"), i.hide(), w.onerror = w.onload = null, y && y.abort(), t.empty(), _r_();
}, j = function() {
if (_i_("ec2:1427"), !1 === f.onError(g, p, f)) return i.hide(), T = !1, _r_();
f.titleShow = !1, f.width = "auto", f.height = "auto", t.html('<p id="fancybox-error">The requested content cannot be loaded.<br />Please try again later.</p>'), E(), _r_();
}, D = function() {
_i_("ec2:1428");
var n, r, o, s, _, c, l = g[p];
if (B(), f = e.extend({}, e.fn.fancybox.defaults, "undefined" == typeof e(l).data("fancybox") ? f :e(l).data("fancybox")), c = f.onStart(g, p, f), c === !1) return T = !1, _r_();
if ("object" == typeof c && (f = e.extend(f, c)), o = f.title || (l.nodeName ? e(l).attr("title") :l.title) || "", l.nodeName && !f.orig && (f.orig = e(l).children("img:first").length ? e(l).children("img:first") :e(l)), "" === o && f.orig && f.titleFromAlt && (o = f.orig.attr("alt")), n = f.href || (l.nodeName ? e(l).attr("href") :l.href) || null, (/^(?:javascript)/i.test(n) || "#" == n) && (n = null), f.type ? (r = f.type, n || (n = f.content)) :f.content ? r = "html" :n && (r = n.match(k) ? "image" :n.match(M) ? "swf" :e(l).hasClass("iframe") ? "iframe" :0 === n.indexOf("#") ? "inline" :"ajax"), !r) return j(), _r_();
switch ("inline" == r && (l = n.substr(n.indexOf("#")), r = e(l).length > 0 ? "inline" :"ajax"), f.type = r, f.href = n, f.title = o, f.autoDimensions && ("html" == f.type || "inline" == f.type || "ajax" == f.type ? (f.width = "auto", f.height = "auto") :f.autoDimensions = !1), f.modal && (f.overlayShow = !0, f.hideOnOverlayClick = !1, f.hideOnContentClick = !1, f.enableEscapeButton = !1, f.showCloseButton = !1), f.padding = parseInt(f.padding, 10), f.margin = parseInt(f.margin, 10), t.css("padding", f.padding + f.margin), e(".fancybox-inline-tmp").unbind("fancybox-cancel").bind("fancybox-change", function() {
_i_("ec2:1599"), e(this).replaceWith(a.children()), _r_();
}), r) {
case "html":
t.html(f.content), E();
break;

case "inline":
if (e(l).parent().is("#fancybox-content") === !0) return T = !1, _r_();
e('<div class="fancybox-inline-tmp" />').hide().insertBefore(e(l)).bind("fancybox-cleanup", function() {
_i_("ec2:1637"), e(this).replaceWith(a.children()), _r_();
}).bind("fancybox-cancel", function() {
_i_("ec2:1619"), e(this).replaceWith(t.children()), _r_();
}), e(l).appendTo(t), E();
break;

case "image":
T = !1, e.fancybox.showActivity(), w = new Image(), w.onerror = function() {
_i_("ec2:1620"), j(), _r_();
}, w.onload = function() {
_i_("ec2:1621"), T = !0, w.onerror = w.onload = null, N(), _r_();
}, w.src = n;
break;

case "swf":
f.scrolling = "no", s = '<object classid="clsid:D27CDB6E-AE6D-11cf-96B8-444553540000" width="' + f.width + '" height="' + f.height + '"><param name="movie" value="' + n + '"></param>', _ = "", e.each(f.swf, function(e, t) {
_i_("ec2:1622"), s += '<param name="' + e + '" value="' + t + '"></param>', _ += " " + e + '="' + t + '"', _r_();
}), s += '<embed src="' + n + '" type="application/x-shockwave-flash" width="' + f.width + '" height="' + f.height + '"' + _ + "></embed></object>", t.html(s), E();
break;

case "ajax":
T = !1, e.fancybox.showActivity(), f.ajax.win = f.ajax.success, y = e.ajax(e.extend({}, f.ajax, {
url:n,
data:f.ajax.data || {},
error:function(e, t, i) {
_i_("ec2:1646"), e.status > 0 && j(), _r_();
},
success:function(e, r, o) {
_i_("ec2:1647");
var a = "object" == typeof o ? o :y;
if (200 == a.status) {
if ("function" == typeof f.ajax.win) {
if (c = f.ajax.win(n, e, r, o), c === !1) return i.hide(), _r_();
("string" == typeof c || "object" == typeof c) && (e = c);
}
t.html(e), E();
}
_r_();
}
}));
break;

case "iframe":
A();
}
_r_();
}, E = function() {
_i_("ec2:1429");
var i = f.width, n = f.height;
i = i.toString().indexOf("%") > -1 ? parseInt((e(window).width() - 2 * f.margin) * parseFloat(i) / 100, 10) + "px" :"auto" == i ? "auto" :i + "px", n = n.toString().indexOf("%") > -1 ? parseInt((e(window).height() - 2 * f.margin) * parseFloat(n) / 100, 10) + "px" :"auto" == n ? "auto" :n + "px", t.wrapInner('<div style="width:' + i + ";height:" + n + ";overflow: " + ("auto" == f.scrolling ? "auto" :"yes" == f.scrolling ? "scroll" :"hidden") + ';position:relative;"></div>'), f.width = t.width(), f.height = t.height(), A(), _r_();
}, N = function() {
_i_("ec2:1430"), f.width = w.width, f.height = w.height, e("<img />").attr({
id:"fancybox-img",
src:w.src,
alt:f.title
}).appendTo(t), A(), _r_();
}, A = function() {
_i_("ec2:1431");
var o, d;
if (i.hide(), r.is(":visible") && !1 === b.onCleanup(m, v, b)) return e.event.trigger("fancybox-cancel"), T = !1, _r_();
if (T = !0, e(a.add(n)).unbind(), e(window).unbind("resize.fb scroll.fb"), e(document).unbind("keydown.fb"), r.is(":visible") && "outside" !== b.titlePosition && r.css("height", r.height()), m = g, v = p, b = f, b.overlayShow ? (n.css({
"background-color":b.overlayColor,
opacity:b.overlayOpacity,
cursor:b.hideOnOverlayClick ? "pointer" :"auto",
height:e(document).height()
}), n.is(":visible") || n.show()) :n.hide(), h = W(), O(), r.is(":visible")) return e(s.add(c).add(l)).hide(), o = r.position(), u = {
top:o.top,
left:o.left,
width:r.width(),
height:r.height()
}, d = u.width == h.width && u.height == h.height, a.fadeTo(b.changeFade, .3, function() {
_i_("ec2:1623");
var i = function() {
_i_("ec2:1648"), a.html(t.contents()).fadeTo(b.changeFade, 1, H), _r_();
};
e.event.trigger("fancybox-change"), a.empty().removeAttr("filter").css({
"border-width":b.padding,
width:h.width - 2 * b.padding,
height:f.autoDimensions ? "auto" :h.height - x - 2 * b.padding
}), d ? i() :($.prop = 0, e($).animate({
prop:1
}, {
duration:b.changeSpeed,
easing:b.easingChange,
step:F,
complete:i
})), _r_();
}), _r_();
if (r.removeAttr("style"), a.css("border-width", b.padding), "elastic" == b.transitionIn) return u = z(), a.html(t.contents()), r.show(), b.opacity && (h.opacity = 0), $.prop = 0, e($).animate({
prop:1
}, {
duration:b.speedIn,
easing:b.easingIn,
step:F,
complete:H
}), _r_();
"inside" == b.titlePosition && x > 0 && _.show(), a.css({
width:h.width - 2 * b.padding,
height:f.autoDimensions ? "auto" :h.height - x - 2 * b.padding
}).html(t.contents()), r.css(h).fadeIn("none" == b.transitionIn ? 0 :b.speedIn, H), _r_();
}, I = function(e) {
if (_i_("ec2:1432"), e && e.length) {
if ("float" == b.titlePosition) return _r_('<table id="fancybox-title-float-wrap" cellpadding="0" cellspacing="0"><tr><td id="fancybox-title-float-left"></td><td id="fancybox-title-float-main">' + e + '</td><td id="fancybox-title-float-right"></td></tr></table>');
return _r_('<div id="fancybox-title-' + b.titlePosition + '">' + e + "</div>");
}
return _r_(!1);
}, O = function() {
if (_i_("ec2:1433"), S = b.title || "", x = 0, _.empty().removeAttr("style").removeClass(), b.titleShow === !1) return _.hide(), _r_();
if (S = e.isFunction(b.titleFormat) ? b.titleFormat(S, m, v, b) :I(S), !S || "" === S) return _.hide(), _r_();
switch (_.addClass("fancybox-title-" + b.titlePosition).html(S).appendTo("body").show(), b.titlePosition) {
case "inside":
_.css({
width:h.width - 2 * b.padding,
marginLeft:b.padding,
marginRight:b.padding
}), x = _.outerHeight(!0), _.appendTo(o), h.height += x;
break;

case "over":
_.css({
marginLeft:b.padding,
width:h.width - 2 * b.padding,
bottom:b.padding
}).appendTo(o);
break;

case "float":
_.css("left", -1 * parseInt((_.width() - h.width - 40) / 2, 10)).appendTo(r);
break;

default:
_.css({
width:h.width - 2 * b.padding,
paddingLeft:b.padding,
paddingRight:b.padding
}).appendTo(r);
}
_.hide(), _r_();
}, P = function() {
if (_i_("ec2:1434"), (b.enableEscapeButton || b.enableKeyboardNav) && e(document).bind("keydown.fb", function(t) {
_i_("ec2:1624"), 27 == t.keyCode && b.enableEscapeButton ? (t.preventDefault(), e.fancybox.close()) :37 != t.keyCode && 39 != t.keyCode || !b.enableKeyboardNav || "INPUT" === t.target.tagName || "TEXTAREA" === t.target.tagName || "SELECT" === t.target.tagName || (t.preventDefault(), e.fancybox[37 == t.keyCode ? "prev" :"next"]()), _r_();
}), !b.showNavArrows) return c.hide(), l.hide(), _r_();
(b.cyclic && m.length > 1 || 0 !== v) && c.show(), (b.cyclic && m.length > 1 || v != m.length - 1) && l.show(), _r_();
}, H = function() {
_i_("ec2:1435"), e.support.opacity || (a.get(0).style.removeAttribute("filter"), r.get(0).style.removeAttribute("filter")), f.autoDimensions && a.css("height", "auto"), r.css("height", "auto"), S && S.length && _.show(), b.showCloseButton && s.show(), P(), b.hideOnContentClick && a.bind("click", e.fancybox.close), b.hideOnOverlayClick && n.bind("click", e.fancybox.close), e(window).bind("resize.fb", e.fancybox.resize), b.centerOnScroll && e(window).bind("scroll.fb", e.fancybox.center), "iframe" == b.type && e('<iframe id="fancybox-frame" name="fancybox-frame' + new Date().getTime() + '" frameborder="0" hspace="0" ' + (e.browser.msie ? 'allowtransparency="true""' :"") + ' scrolling="' + f.scrolling + '" src="' + b.href + '"></iframe>').appendTo(a), r.show(), T = !1, e.fancybox.center(), b.onComplete(m, v, b), L(), _r_();
}, L = function() {
_i_("ec2:1436");
var e, t;
m.length - 1 > v && (e = m[v + 1].href, "undefined" != typeof e && e.match(k) && (t = new Image(), t.src = e)), v > 0 && (e = m[v - 1].href, "undefined" != typeof e && e.match(k) && (t = new Image(), t.src = e)), _r_();
}, F = function(e) {
_i_("ec2:1437");
var t = {
width:parseInt(u.width + (h.width - u.width) * e, 10),
height:parseInt(u.height + (h.height - u.height) * e, 10),
top:parseInt(u.top + (h.top - u.top) * e, 10),
left:parseInt(u.left + (h.left - u.left) * e, 10)
};
"undefined" != typeof h.opacity && (t.opacity = .5 > e ? .5 :e), r.css(t), a.css({
width:t.width - 2 * b.padding,
height:t.height - x * e - 2 * b.padding
}), _r_();
}, q = function() {
return _i_("ec2:1438"), _r_([ e(window).width() - 2 * b.margin, e(window).height() - 2 * b.margin, e(document).scrollLeft() + b.margin, e(document).scrollTop() + b.margin ]);
}, W = function() {
_i_("ec2:1439");
var e, t = q(), i = {}, n = b.autoScale, r = 2 * b.padding;
return b.width.toString().indexOf("%") > -1 ? i.width = parseInt(t[0] * parseFloat(b.width) / 100, 10) :i.width = b.width + r, b.height.toString().indexOf("%") > -1 ? i.height = parseInt(t[1] * parseFloat(b.height) / 100, 10) :i.height = b.height + r, n && (i.width > t[0] || i.height > t[1]) && ("image" == f.type || "swf" == f.type ? (e = b.width / b.height, i.width > t[0] && (i.width = t[0], i.height = parseInt((i.width - r) / e + r, 10)), i.height > t[1] && (i.height = t[1], i.width = parseInt((i.height - r) * e + r, 10))) :(i.width = Math.min(i.width, t[0]), i.height = Math.min(i.height, t[1]))), i.top = parseInt(Math.max(t[3] - 20, t[3] + .5 * (t[1] - i.height - 40)), 10), i.left = parseInt(Math.max(t[2] - 20, t[2] + .5 * (t[0] - i.width - 40)), 10), _r_(i);
}, J = function(e) {
_i_("ec2:1440");
var t = e.offset();
return t.top += parseInt(e.css("paddingTop"), 10) || 0, t.left += parseInt(e.css("paddingLeft"), 10) || 0, t.top += parseInt(e.css("border-top-width"), 10) || 0, t.left += parseInt(e.css("border-left-width"), 10) || 0, t.width = e.width(), t.height = e.height(), _r_(t);
}, z = function() {
_i_("ec2:1441");
var t, i, n = f.orig ? e(f.orig) :!1, r = {};
return n && n.length ? (t = J(n), r = {
width:t.width + 2 * b.padding,
height:t.height + 2 * b.padding,
top:t.top - b.padding - 20,
left:t.left - b.padding - 20
}) :(i = q(), r = {
width:2 * b.padding,
height:2 * b.padding,
top:parseInt(i[3] + .5 * i[1], 10),
left:parseInt(i[2] + .5 * i[0], 10)
}), _r_(r);
}, R = function() {
if (_i_("ec2:1442"), !i.is(":visible")) return clearInterval(d), _r_();
e("div", i).css("top", -40 * C + "px"), C = (C + 1) % 12, _r_();
};
e.fn.fancybox = function(t) {
if (_i_("ec2:1443"), !e(this).length) return _r_(this);
return e(this).data("fancybox", e.extend({}, t, e.metadata ? e(this).metadata() :{})).unbind("click.fb").bind("click.fb", function(t) {
if (_i_("ec2:1600"), t.preventDefault(), T) return _r_();
T = !0, e(this).blur(), g = [], p = 0;
var i = e(this).attr("rel") || "";
return i && "" != i && "nofollow" !== i ? (g = e("a[rel=" + i + "], area[rel=" + i + "]"), p = g.index(this)) :g.push(this), D(), _r_();
}), _r_(this);
}, e.fancybox = function(t) {
_i_("ec2:1444");
var i;
if (T) return _r_();
if (T = !0, i = "undefined" != typeof arguments[1] ? arguments[1] :{}, g = [], p = parseInt(i.index, 10) || 0, e.isArray(t)) {
for (var n = 0, r = t.length; r > n; n++) "object" == typeof t[n] ? e(t[n]).data("fancybox", e.extend({}, i, t[n])) :t[n] = e({}).data("fancybox", e.extend({
content:t[n]
}, i));
g = jQuery.merge(g, t);
} else "object" == typeof t ? e(t).data("fancybox", e.extend({}, i, t)) :t = e({}).data("fancybox", e.extend({
content:t
}, i)), g.push(t);
(p > g.length || 0 > p) && (p = 0), D(), _r_();
}, e.fancybox.showActivity = function() {
_i_("ec2:1445"), clearInterval(d), i.show(), d = setInterval(R, 66), _r_();
}, e.fancybox.hideActivity = function() {
_i_("ec2:1446"), i.hide(), _r_();
}, e.fancybox.next = function() {
return _i_("ec2:1447"), _r_(e.fancybox.pos(v + 1));
}, e.fancybox.prev = function() {
return _i_("ec2:1448"), _r_(e.fancybox.pos(v - 1));
}, e.fancybox.pos = function(e) {
if (_i_("ec2:1449"), T) return _r_();
return e = parseInt(e), g = m, e > -1 && e < m.length ? (p = e, D()) :b.cyclic && m.length > 1 && (p = e >= m.length ? 0 :m.length - 1, D()), _r_();
}, e.fancybox.cancel = function() {
if (_i_("ec2:1450"), T) return _r_();
T = !0, e.event.trigger("fancybox-cancel"), B(), f.onCancel(g, p, f), T = !1, _r_();
}, e.fancybox.close = function() {
if (_i_("ec2:1451"), T || r.is(":hidden")) return _r_();
if (T = !0, b && !1 === b.onCleanup(m, v, b)) return T = !1, _r_();
B(), e(s.add(c).add(l)).hide(), e(a.add(n)).unbind(), e(window).unbind("resize.fb scroll.fb"), e(document).unbind("keydown.fb"), a.find("iframe").attr("src", "about:blank"), "inside" !== b.titlePosition && _.empty(), r.stop();
function t() {
_i_("ec2:1531"), n.fadeOut("fast"), _.empty().hide(), r.hide(), e.event.trigger("fancybox-cleanup"), a.empty(), b.onClosed(m, v, b), m = f = [], v = p = 0, b = f = {}, T = !1, _r_();
}
if ("elastic" == b.transitionOut) {
u = z();
var i = r.position();
h = {
top:i.top,
left:i.left,
width:r.width(),
height:r.height()
}, b.opacity && (h.opacity = 1), _.empty().hide(), $.prop = 1, e($).animate({
prop:0
}, {
duration:b.speedOut,
easing:b.easingOut,
step:F,
complete:t
});
} else r.fadeOut("none" == b.transitionOut ? 0 :b.speedOut, t);
_r_();
}, e.fancybox.resize = function() {
_i_("ec2:1452"), n.is(":visible") && n.css("height", e(document).height()), e.fancybox.center(!0), _r_();
}, e.fancybox.center = function() {
_i_("ec2:1453");
var e, t;
if (T) return _r_();
if (t = arguments[0] === !0 ? 1 :0, e = q(), !t && (r.width() > e[0] || r.height() > e[1])) return _r_();
r.stop().animate({
top:parseInt(Math.max(e[3] - 20, e[3] + .5 * (e[1] - a.height() - 40) - b.padding)),
left:parseInt(Math.max(e[2] - 20, e[2] + .5 * (e[0] - a.width() - 40) - b.padding))
}, "number" == typeof arguments[0] ? arguments[0] :200), _r_();
}, e.fancybox.init = function() {
if (_i_("ec2:1454"), e("#fancybox-wrap").length) return _r_();
e("body").append(t = e('<div id="fancybox-tmp"></div>'), i = e('<div id="fancybox-loading"><div></div></div>'), n = e('<div id="fancybox-overlay"></div>'), r = e('<div id="fancybox-wrap"></div>')), o = e('<div id="fancybox-outer"></div>').append('<div class="fancybox-bg" id="fancybox-bg-n"></div><div class="fancybox-bg" id="fancybox-bg-ne"></div><div class="fancybox-bg" id="fancybox-bg-e"></div><div class="fancybox-bg" id="fancybox-bg-se"></div><div class="fancybox-bg" id="fancybox-bg-s"></div><div class="fancybox-bg" id="fancybox-bg-sw"></div><div class="fancybox-bg" id="fancybox-bg-w"></div><div class="fancybox-bg" id="fancybox-bg-nw"></div>').appendTo(r), o.append(a = e('<div id="fancybox-content"></div>'), s = e('<a id="fancybox-close"></a>'), _ = e('<div id="fancybox-title"></div>'), c = e('<a href="javascript:;" id="fancybox-left"><span class="fancy-ico" id="fancybox-left-ico"></span></a>'), l = e('<a href="javascript:;" id="fancybox-right"><span class="fancy-ico" id="fancybox-right-ico"></span></a>')), s.click(e.fancybox.close), i.click(e.fancybox.cancel), c.click(function(t) {
_i_("ec2:1601"), t.preventDefault(), e.fancybox.prev(), _r_();
}), l.click(function(t) {
_i_("ec2:1602"), t.preventDefault(), e.fancybox.next(), _r_();
}), e.fn.mousewheel && r.bind("mousewheel.fb", function(t, i) {
_i_("ec2:1625"), T ? t.preventDefault() :(0 == e(t.target).get(0).clientHeight || e(t.target).get(0).scrollHeight === e(t.target).get(0).clientHeight) && (t.preventDefault(), e.fancybox[i > 0 ? "prev" :"next"]()), _r_();
}), e.support.opacity || r.addClass("fancybox-ie"), _r_();
}, e.fn.fancybox.defaults = {
padding:10,
margin:40,
opacity:!1,
modal:!1,
cyclic:!1,
scrolling:"auto",
width:560,
height:340,
autoScale:!0,
autoDimensions:!0,
centerOnScroll:!1,
ajax:{},
swf:{
wmode:"transparent"
},
hideOnOverlayClick:!0,
hideOnContentClick:!1,
overlayShow:!0,
overlayOpacity:.7,
overlayColor:"#777",
titleShow:!0,
titlePosition:"float",
titleFormat:null,
titleFromAlt:!1,
transitionIn:"fade",
transitionOut:"fade",
speedIn:300,
speedOut:300,
changeSpeed:300,
changeFade:"fast",
easingIn:"swing",
easingOut:"swing",
showCloseButton:!0,
showNavArrows:!0,
enableEscapeButton:!0,
enableKeyboardNav:!0,
onStart:function() {},
onCancel:function() {},
onComplete:function() {},
onCleanup:function() {},
onClosed:function() {},
onError:function() {}
}, e(document).ready(function() {
_i_("ec2:1455"), e.fancybox.init(), _r_();
}), _r_();
}(jQuery);
var e = $(".lp_city_guide_gallery_list_child_anchor");
e.click(function(e) {
_i_("ec2:1124"), e.preventDefault(), _r_();
}), $.fancybox && ($.fancybox.init(), e.fancybox({
centerOnScroll:"true",
cyclic:"true",
overlayColor:"#000",
overlayOpacity:"0.7",
titlePosition:"over",
margin:"20",
transitionIn:"fade",
transitionOut:"fade",
titleFormat:function(e, t, i, n) {
_i_("ec2:1456");
var r = i + 1 + " / " + t.length, o = '<span id="fancybox-title-over"><span class="lp-city-guide-gallery-pages">' + r + '</span>&nbsp;<span class="lp-city-guide-gallery-caption">' + (e.length ? " &nbsp; " + e :"") + "</span></span>";
return _r_(o);
}
})), _r_();
}), _r_();
}(), B.define("lists/lists-hotel-dropdown/lists-hotel-dropdown", function(e, t, i) {
"use strict";
_i_("ec2:67");
var n = e("jquery"), r = e("et");
i.exports = function() {
_i_("ec2:595");
var e = booking[sNSStartup].wlData, t = e.EVENTS;
function i(e, t) {
if (_i_("ec2:1006"), e.length < t) return _r_(e);
return _r_(e.slice(0, t) + "&hellip;");
}
function o() {
_i_("ec2:1007");
var e = B.env.b_reg_user_last_used_wishlist;
if (e && e[0]) return _r_(e[0].b_reg_user_detail_list_id);
return _r_(null);
}
function a(e) {
_i_("ec2:1008");
var t = o();
return _r_(n.map(e, function(e) {
return _i_("ec2:1345"), _r_(n.extend({}, e, {
name:i(e.name, 18),
lastUsed:e.id == t
}));
}));
}
var s = null, _ = {
defaults:{
gaAction:"Wishlist",
extraClass:"wl-dropdown" + (B.env.fe_cdm_sr_wl_based_comparison ? " wl-dropdown--sr-comparison" :""),
content:function(t) {
_i_("ec2:1510");
var i = e.getHotelLists(this.params.hotel_id);
this.comparisonMode && i.length > 0 ? t(this.tmpl({
lists:i
})) :e.fetch(this.params).then(function(e) {
_i_("ec2:1640"), t(this.tmpl(e.result)), _r_();
}.bind(this)), _r_();
}
},
timeout:null,
init:function() {
_i_("ec2:1346");
var t = this;
this.params = {
hotel_id:this.handle().attr("data-hotel-id")
}, this.comparisonMode = this.handle().attr("data-sr-comparison-mode"), this.goalsExpHash = this.handle().attr("data-goals-exp-hash");
var i = Number(this.handle().attr("data-arrow-size"));
i && (this.options.arrowSize = i), this.bindRoot(), this.bindData(), this.handle().bind("mouseenter", function() {
_i_("ec2:1558"), t.comparisonMode || e.fetch(t.params), _r_();
}), t.bind("show hide", function(e) {
_i_("ec2:1559"), setTimeout(function() {
_i_("ec2:1627"), booking.eventEmitter.trigger("wl-dropdown-toggle", {
node:t.root(),
state:"show" === e.type
}), _r_();
}, 0), n("#tooltip_wrap").hide(), _r_();
}), _r_();
},
onclick:function(e) {
_i_("ec2:1347"), this.comparisonMode ? this.onclickComparisonHandler(e) :this.toggle(), _r_();
},
onclickComparisonHandler:function(e) {
_i_("ec2:1348"), e.preventDefault();
var t = this.isSelected();
t ? (this.showSavedMessage = !1, this.toggle()) :this.autoSaveHotel(), _r_();
},
getLastAddedToListId:function() {
if (_i_("ec2:1349"), null != s) return _r_(s);
return _r_(o());
},
autoSaveHotel:function() {
_i_("ec2:1350");
var t = this.getLastAddedToListId();
null != t ? this.autoSaveHotelToList(t) :e.fetch(this.params).then(this.handleAutoSaveFetchResponse.bind(this), this.handleAutoSaveFetchError.bind(this)), this.goalsExpHash && r.customGoal(this.goalsExpHash, 1), _r_();
},
handleAutoSaveFetchResponse:function() {
_i_("ec2:1351");
var t = e.getHotelLists(this.params.hotel_id)[0];
t ? this.autoSaveHotelToList(t.id) :this.handleAutoSaveFetchError(), _r_();
},
handleAutoSaveFetchError:function() {
_i_("ec2:1352"), this.toggle(), this.goalsExpHash && r.customGoal(this.goalsExpHash, 2), _r_();
},
autoSaveHotelToList:function(t) {
return _i_("ec2:1353"), _r_(e.editHotel({
lists:t,
hotel_id:this.params.hotel_id,
new_state:1
}).then(this.handleAutoSaveResponse.bind(this, t), this.handleAutoSaveError.bind(this)));
},
handleAutoSaveResponse:function(e, t) {
_i_("ec2:1354"), t && t.result.success ? (this.showSavedMessage = !0, this.updateSRHandle(e, !0), this.toggle()) :this.handleAutoSaveError(), _r_();
},
handleAutoSaveError:function() {
_i_("ec2:1355");
var t = this.toggle.bind(this);
e.fetch(this.params).then(t, t), this.goalsExpHash && r.customGoal(this.goalsExpHash, 2), _r_();
},
updateSRHandle:function(e, t) {
_i_("ec2:1356");
var i = this.handle();
i.attr("data-list-id", t ? e :null), i.toggleClass("sr-rt-compare-cta--saved", t);
var n = i.find(".sr-rt-compare-checkbox").get(0);
n && (n.checked = t), _r_();
},
bindRoot:function() {
_i_("ec2:1357");
var e = this;
this.bind(this.events.rootready, function() {
_i_("ec2:1560"), n.extend(e.options, {
gaLabel:e.handle().attr("data-ga-label"),
position:e.handle().attr("data-position")
}), e.root().delegate(".js-wl-dropdown-item-text", "keyup", n.proxy(e.ontext, e)).delegate(".js-wl-dropdown-item-checkbox", "change", n.proxy(e.oncheckbox, e)).bind("mouseenter", function() {
_i_("ec2:1641"), clearTimeout(e.timeout), _r_();
}).bind("mouseleave", function() {
_i_("ec2:1628"), e.timeout = setTimeout(n.proxy(e.hide, e), 2e3), _r_();
}), e.bind(e.events.show, function() {
_i_("ec2:1629"), clearTimeout(e.timeout), _r_();
}), _r_();
}), _r_();
},
triggerHotelSavedEvent:function(t) {
_i_("ec2:1358");
var i = e.getHotelLists(this.params.hotel_id), r = n.grep(i, function(e) {
return _i_("ec2:1603"), _r_(e.selected);
});
B.eventEmitter.trigger("update:b_hotel_is_saved", {
b_hotel_is_saved:t,
lists:r
}), _r_();
},
isSelected:function() {
_i_("ec2:1359");
var t = e.getHotelLists(this.params.hotel_id);
if (t && t.length > 0) return _r_(n.grep(t, function(e) {
return _i_("ec2:1630"), _r_(e.selected);
}).length > 0);
var i = this.handle();
return _r_(i.hasClass("sr-rt-compare-cta--saved") || i.hasClass("saved_in_wl"));
},
getListIdFromResponse:function(e) {
if (_i_("ec2:1360"), !e) return _r_(null);
if (null != e.params.lists) return _r_(e.params.lists);
if (null != e.result.id) return _r_(e.result.id);
return _r_(null);
},
updateSelectedState:function(e) {
_i_("ec2:1361");
var t = this.getLastAddedToListId(), i = this.isSelected();
if (this.triggerHotelSavedEvent(i), this.handle().toggleClass("saved_in_wl", i), this.updateSprite(i), this.comparisonMode) {
var n = this.getListIdFromResponse(e);
this.updateSRHandle(n, i), s = i ? n :s;
}
this.goalsExpHash && i && null !== t && t !== s && r.customGoal(this.goalsExpHash, 4), _r_();
},
bindData:function() {
_i_("ec2:1362");
var i = this;
e.bind([ t.LOADINGSTART, t.LOADINGEND ].join(" "), function(e, n) {
_i_("ec2:1561");
var r = n.params, o = String(r.hotel_id) !== String(i.params.hotel_id), a = !r.lists && !r.name;
if (o || !i.comparisonMode && a) return _r_();
i.loading(e.type === t.LOADINGSTART, r.lists), _r_();
}), e.bind([ t.CREATE, t.EDITHOTEL ].join(" "), function(t, r) {
if (_i_("ec2:1562"), String(r.params.hotel_id) !== String(i.params.hotel_id)) return _r_();
var o = !1;
r.result.success ? (o = Boolean(r.params.new_state), i.handle().toggleClass("saved_in_wl", o), i.updateSelectedState(r)) :e.fetch(i.params).then(function(e) {
_i_("ec2:1642");
var t = n.grep(e.result.lists, function(e) {
return _i_("ec2:1658"), _r_(e.selected);
});
r.result.success || (o = Boolean(t.length), i.handle().toggleClass("saved_in_wl", o), i.updateSprite(o)), B.eventEmitter.trigger("update:b_hotel_is_saved", {
b_hotel_is_saved:o,
lists:t
});
var a = B.env.auth_level || 0;
a = parseInt(a), _r_();
}), _r_();
}), _r_();
},
updateSprite:function(e) {
_i_("ec2:1363"), this.handle().hasClass("added_to_fav_lists") && (B.env.b_is_villa_site ? this.handle().find(".icon").toggleClass("icon-wishlist-selected", e).toggleClass("icon-wishlist", !e) :this.handle().find(".b-sprite").toggleClass("icon_list_favorites_selected", e).toggleClass("icon_list_favorites", !e)), this.handle().hasClass("lists-hotel-dropdown-alternative") && this.handle().find(".bui_icon__save_to_list").toggleClass("bui_icon__save_to_list-selected", e), _r_();
},
ontext:function(e) {
_i_("ec2:1364");
var t = n(e.currentTarget), i = t.parent();
i.find(".js-wl-dropdown-item-checkbox").attr("disabled", !t.val()), 13 === e.which && (e.preventDefault(), this.createList(i)), _r_();
},
oncheckbox:function(e) {
_i_("ec2:1365"), e.preventDefault();
var t = n(e.currentTarget).parent(), i = t.find(".js-wl-dropdown-item-text");
this[i[0] ? "createList" :"toggleList"](t), _r_();
},
createList:function(t) {
_i_("ec2:1366");
var i = this, o = t.find(".js-wl-dropdown-item-text");
e.create({
name:o.val(),
hotel_id:this.params.hotel_id
}).then(function(e) {
_i_("ec2:1563");
var o = e.result, a = "";
o.selected = !0, a = n("<div/>").html(i.tmpl({
lists:[ o ]
})), i.handle().attr("data-list-id", o.list_id), t.before(a.find(".js-wl-dropdown-item")), t.replaceWith(a.find(".js-wl-dropdown-item-new")), i.goalsExpHash && r.customGoal(i.goalsExpHash, 4), _r_();
}), _r_();
},
checked:function(e, t) {
return _i_("ec2:1367"), "undefined" != typeof t && (e.get(0).checked = t, e.parent(".wl-dropdown-item").toggleClass("wl-dropdown-item--added", t)), _r_(e.get(0).checked);
},
toggleListLink:function(e, t) {
_i_("ec2:1368"), e.find("span").toggleClass("g-hidden", !t), this.root().css(this._position()), _r_();
},
toggleList:function(t) {
_i_("ec2:1369");
var i = this, n = t.find(".js-wl-dropdown-item-checkbox");
e.editHotel({
lists:n.attr("data-list-id"),
hotel_id:i.params.hotel_id,
new_state:Number(i.checked(n))
}).then(function() {
_i_("ec2:1564");
var e = i.checked(n);
i.toggleListLink(t, e), i.toggleSavedToMessage(), i.goalsExpHash && !e && r.customGoal(i.goalsExpHash, 3), _r_();
}), _r_();
},
toggleSavedToMessage:function() {
_i_("ec2:1370"), this.root().find(".wl-dropdown-saved-to-message").hide({
duration:100,
step:function() {
_i_("ec2:1631"), this.root().css(this._position()), _r_();
}.bind(this)
}), _r_();
},
loading:function(e, t) {
_i_("ec2:1371");
var i = this.root().find("[data-list-id=" + (t || '""') + "]").parent();
i.toggleClass("wl-dropdown-item_loading", e), this.handle().toggleClass("wl-dropdown-handle_loading", e), _r_();
},
tmpl:function(e) {
return _i_("ec2:1372"), _r_(B.jstmpl("lists_hotel_dropdown").render(n.extend(e, {
lists:a(e.lists),
b_user_auth_level_is_low_or_high:B.env.b_user_auth_level_is_low_or_high,
b_action:B.env.b_action,
b_is_tdot_traffic:B.env.b_is_tdot_traffic,
b_selected_language:B.env.b_selected_language,
fe_comparison_mode:this.comparisonMode,
fe_show_saved_message:this.showSavedMessage
})));
}
}, c = n.fly.dropdown.extend(_);
return _r_({
wlDropdown:c,
create:function() {
_i_("ec2:1274"), n(".js-wl-dropdown-handle").each(function() {
_i_("ec2:1538"), c.create(this), _r_();
}), _r_();
},
init:function(e) {
_i_("ec2:1275"), this.create(), _r_();
}
});
}(), _r_();
}), B.require([ "require" ], function(e) {
_i_("ec2:68");
var t = e("lists/lists-hotel-dropdown/lists-hotel-dropdown");
t.init(), _r_();
}), function() {
_i_("ec2:69");
var e = B.require("jquery");
function t() {
_i_("ec2:247");
var t = B.require("lightbox");
t.show(e("#revc_write_a_review_login_intro"), {}), _r_();
}
B.when({
action:"index"
}).run(function() {
_i_("ec2:383"), e(".js_write_a_review_index_navbar").on("click.revc_write_a_review", function(e) {
_i_("ec2:1125"), 0 == B.env.auth_level && (e.preventDefault(), t()), _r_();
}), _r_();
}), B.when({
action:"reviews"
}).run(function() {
_i_("ec2:384"), e(".js_write_a_review_reviews_header").on("click.revc_write_a_review", function(e) {
_i_("ec2:1126"), 0 == B.env.auth_level && (e.preventDefault(), t()), _r_();
}), _r_();
}), _r_();
}(), B.when({
condition:$(".ge_challenge_cta,.js-open-asp-about-lightbox").length
}).run(function(e) {
_i_("ec2:70");
var t = e("jquery");
t(".ge_challenge_cta,.js-open-asp-about-lightbox").click(function(e) {
_i_("ec2:385"), e.preventDefault();
var t = B.components.require("ge-lightbox");
t.open({
template:"ge_aspiring_about_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:B.env.b_reg_user_qualify_genius_challenge || {}
}
}), _r_();
}), _r_();
}), function() {
"use strict";
_i_("ec2:71");
var e = "AEJPVFbSIdQTUQKAMUZcO";
B.when({
events:"ready",
action:[ "country", "city", "airport", "region", "district", "landmark" ]
}).run(function() {
_i_("ec2:386");
var t = B.require("utils/debounce"), i = $(window), n = 900, r = 1200;
setTimeout(function() {
_i_("ec2:1127"), i.on("scroll.lp_typo_scroll", t(o, 400, !1)), _r_();
}, 100);
function o(t) {
_i_("ec2:814"), i.scrollTop() > n && B.et.customGoal(e, 1), i.scrollTop() > n + r && B.et.customGoal(e, 2), i.scrollTop() > n + 2 * r && B.et.customGoal(e, 3), i.scrollTop() > n + 3 * r && B.et.customGoal(e, 4), i.scrollTop() > n + 4 * r && B.et.customGoal(e, 5), _r_();
}
_r_();
}), _r_();
}(), function(e) {
_i_("ec2:72"), booking.jstmpl("dest_reviews_ellipsis", function() {
_i_("ec2:596");
var e = [ "\n    ", '\n    <span class="toggle-long-text__ellipses">\n        ', '\n    </span>\n    <span class="toggle-long-text__more-text">\n        ', '\n    </span>\n    <strong class="toggle-long-text__indicator">\n        ', "\n    </strong>\n" ], t = [ "c", "ellipsestext", "h", "moretext" ];
return _r_(function(i) {
_i_("ec2:1128");
var n = "", r = this.fn;
return n += [ e[0], r.MC(t[0]), e[1], r.MC(t[1]), e[2], r.MC(t[2]), e[3], r.MC(t[3]), e[4] ].join(""), _r_(n);
});
}()), B.when({
condition:e(".toggle-long-text").length > 0,
events:"view .toggle-long-text"
}).run(function() {
_i_("ec2:387");
var t = 320, i = "...", n = "<i class='bicon-triangledown'></i>";
e(".toggle-long-text__content").each(function() {
_i_("ec2:1129");
var r, o, a = e(this), s = e.trim(a.text()), _ = t - i.length;
s.length > t && (a.parent().addClass("--long"), r = s.split("").reduceRight(function(e, t, i) {
return _i_("ec2:1565"), i > _ ? e.l = t + e.l :0 == e.s.length ? " " == t ? e.s = t :e.l = t + e.l :e.s = t + e.s, _r_(e);
}, {
s:"",
l:""
}), o = B.jstmpl("dest_reviews_ellipsis").render({
c:r.s,
h:r.l,
moretext:n,
ellipsestext:i
}), a.html(o).attr("aria-label", s)), _r_();
}), e(".destination-reviews__review").click(function() {
_i_("ec2:1130");
var t = e(this);
return t.find(".toggle-long-text__more-text").toggle(), t.find(".toggle-long-text__ellipses").toggle(), t.find(".toggle-long-text__indicator i").toggleClass("bicon-triangledown bicon-triangleup"), _r_(!1);
}), _r_();
}), _r_();
}(B.require("jquery")), B.when({
action:[ "index", "searchresults", "hotel", "country", "mydashboard" ],
events:"ready"
}).run(function(e) {
if (_i_("ec2:73"), "country" == B.env.b_action && !B.env.b_is_landing && !B.et.track("AEJPMIPKEYaWKGdUVYZbeONC")) return _r_(!1);
if ("mydashboard" == B.env.b_action && !B.et.track("AEJPICOIILZYfPFSUTcO")) return _r_(!1);
var t = e("jquery"), i = t("#ss"), n = t(document), r = t('.sb-searchbox__country-only > input[type="checkbox"]');
if (0 === i.length) return _r_();
function o() {
_i_("ec2:248"), n.on("keydown.autofocus", s), _r_();
}
function a() {
_i_("ec2:249"), n.off("keydown.autofocus", s), _r_();
}
i.bind("blur", o).bind("focus", a), "index" != B.env.b_action ? o() :i.focus();
function s(e) {
_i_("ec2:250");
var n = i.offset().top, o = e.metaKey || e.ctrlKey, a = e.keyCode, s = a > 47 && 58 > a || a > 64 && 91 > a || a > 95 && 112 > a;
if (s && !o && document.activeElement && !/INPUT|TEXTAREA|SELECT/.test(document.activeElement.nodeName) && i.is(":visible") && !t(".modal-mask").length) {
if (!B.env.b_is_landing && "country" === B.env.b_action && r.length && r.is(":checked") && r.click(), "hotel" == B.env.b_action && !B.env.b_is_landing) return _r_(!1);
"index" != B.env.b_action && i.val(""), i.focus(), i.trigger("focus_destionation_whilie_typing"), window.scrollY > n && t("html, body").animate({
scrollTop:n - 5
});
}
_r_();
}
_r_();
}), function() {
"use strict";
_i_("ec2:74"), B.when({
action:"index",
condition:"www" == B.env.b_site_type && $("#js_ge_index_aspiring_usp_cta").length
}).run(function() {
_i_("ec2:388"), $("#js_ge_index_aspiring_usp_cta").on("click", function(e) {
_i_("ec2:1131"), e.preventDefault();
var t = B.components.require("ge-lightbox");
t.open({
template:"ge_aspiring_about_lightbox",
data:{
b_genius_user:B.env.b_genius_user || {},
b_reg_user_qualify_genius_challenge:B.env.b_reg_user_qualify_genius_challenge || {},
b_show_new_usp_title:!0
}
}), _r_();
}), _r_();
}), _r_();
}(), function() {
"use strict";
_i_("ec2:75");
var e = B.require("jquery");
function t() {
_i_("ec2:251"), e("body").on("click", ".unified-postcard__content", function(t) {
_i_("ec2:815");
var i = e(this);
i.data("no-follow-link") && t.preventDefault();
var n = i.data("url"), r = i.data("target");
"_blank" === r ? window.open(n) :document.location.href = n, _r_();
}), _r_();
}
B.when({
events:"ready",
action:[ "continent", "country", "region", "searchresults", "index", "city", "confirmation" ]
}).run(t), _r_();
}(), function() {
_i_("ec2:76");
var e = $(".lp_bold_date_picker_wrapper");
B.when({
action:[ "country", "city", "region", "landmark", "district" ],
events:"load",
condition:e.length
}).run(function() {
"use strict";
_i_("ec2:389");
var t = e.data("backgroundImageUrl") || "", i = "//s-ec.bstatic.com/images/misc_images/lp_sb_googly_index/default_3x1.jpg";
if (t.length > 0 && -1 === t.indexOf(i)) {
var n = new Image();
n.onerror = function() {
_i_("ec2:1276"), e.css("background-image", "url(" + i + ")"), _r_();
}, n.src = t;
}
_r_();
}), _r_();
}(), function() {
"use strict";
_i_("ec2:77");
var e = $(".when-to-go"), t = "AEJPAKNeDHFeMbHEaUdBKe";
B.when({
action:"city",
events:"ready",
experiment:t,
condition:e.length
}).load({
js:"async_chartist_js",
css:"async_chartist_css"
}).run(function(i) {
_i_("ec2:390");
var n = i("et"), r = i("Chartist");
if (!r) return _r_(e.hide());
var o = $(".when-to-go__price-chart"), a = $(".when-to-go__busy-chart"), s = $(".when-to-go__info-title"), _ = $(".when-to-go__info-price"), c = $(".when-to-go__info-busy"), l = $(".when-to-go__info-temperature"), d = $(".when-to-go__info-precipitation"), u = $(".when-to-go__btn"), h = new Date().getMonth() + 1, p = null;
function f() {
_i_("ec2:816"), new r.Bar(".when-to-go__busy-chart", {
labels:B.env.when_to_go.months,
series:[ B.env.when_to_go.busy ]
}, {
low:0,
high:5,
fullWidth:!0,
chartPadding:{
top:40,
left:-10
},
height:"220px",
axisX:{
showLabel:!0,
showGrid:!1
},
axisY:{
showLabel:!1,
showGrid:!1
}
}).on("created", function() {
_i_("ec2:1277"), y(), m(h), _r_();
}), new r.Line(".when-to-go__price-chart", {
labels:B.env.when_to_go.months,
series:[ B.env.when_to_go.average_price_int ]
}, {
low:0,
high:B.env.when_to_go.average_price_int.sort(function(e, t) {
return _i_("ec2:1566"), _r_(t > e);
})[0] || 200,
showArea:!0,
fullWidth:!0,
chartPadding:{
top:60,
right:30
},
height:"240px",
showLine:!0,
showPoint:!0,
axisX:{
showLabel:!1,
showGrid:!1
},
axisY:{
offset:30,
showLabel:!0,
showGrid:!1,
labelInterpolationFnc:function(e) {
return _i_("ec2:1539"), _r_(B.env.when_to_go.average_price_currency_symbol + e);
}
}
}), _r_();
}
function g() {
_i_("ec2:817");
for (var e in B.env.when_to_go) B.env.when_to_go[e] instanceof Array && B.env.when_to_go[e].reverse();
_r_();
}
function v(e) {
_i_("ec2:818"), p || (p = a.find(".ct-bar"));
var t = $(".ct-bar.-highlight");
t && t.length && (t = t[0], t.setAttribute("class", t.getAttribute("class").replace("-highlight", ""))), e = p.get(e - 1), e.setAttribute("class", e.getAttribute("class") + " -highlight"), _r_();
}
function b(e) {
_i_("ec2:819"), p || (p = a.find(".ct-bar")), a.find(".ct-bar").attr("class", "ct-bar"), $(p.get(e - 1)).attr("class", "ct-bar -selected"), _r_();
}
function m(e) {
_i_("ec2:820"), s.text(B.jstmpl.translations("lp_city_when_to_visit_sidebar_head_dest_in_month", null, {
month:B.env.when_to_go.month_names[e - 1],
city_name:B.env.when_to_go.city_name,
month_for_formatted_date:B.env.b_month_for_formatted_date
})), u.text(B.jstmpl.translations("lp_city_when_to_visit_cta_find_properties_in_month", null, {
month:B.env.when_to_go.month_names[e - 1],
city_name:B.env.when_to_go.city_name,
month_for_formatted_date:B.env.b_month_for_formatted_date
})), _.text(B.env.when_to_go.average_price[e - 1]), c.text(B.env.when_to_go.levels[B.env.when_to_go.busy[e - 1] - 1]), l.html(B.env.when_to_go.temperature_loc[e - 1]), d.text(B.env.when_to_go.precipitation_loc[e - 1]), _r_();
}
function y() {
_i_("ec2:821"), v(h), _r_();
}
var w = !1;
function k(e) {
_i_("ec2:822");
var i = x(e);
v(i), w || (n.customGoal(t, 1), w = !0), _r_();
}
var M = !1;
function C(e) {
_i_("ec2:823"), h = x(e), b(h), m(h), M || (n.customGoal(t, 2), M = !0), _r_();
}
function x(e) {
_i_("ec2:824");
var t = o.width() / 12, i = e.offsetX;
return e.offsetX < o.width() / 3 && (i -= 30), _r_(Math.min(parseInt(i / t + 1), 12));
}
function S(e) {
_i_("ec2:825"), e.preventDefault();
var t = B.calendar2, i = $(".js--sb-searchbox"), n = h - 1, r = t.today().getFullYear(), o = t.today().getMonth();
o > n && r++;
var a = t.monthId(r, n), s = $(".sb-searchbox-sticky");
s.length && s.hasClass("-visible-2") ? (B.calendar2.controller.getCalendars()[2].selectMonth(a), setTimeout(function() {
_i_("ec2:1457"), B.calendar2.controller.getCalendars()[2].show(), _r_();
}, 0)) :$("html, body").animate({
scrollTop:i.offset().top - 5
}, 500, function() {
_i_("ec2:1458"), B.calendar2.controller.getCalendars()[0].selectMonth(a), B.calendar2.controller.getCalendars()[0].show(), _r_();
}), _r_();
}
e.removeClass("-loading"), B.env.rtl && (h = 13 - h, g()), f(), u.on("click", S), o.on("mousemove", k), o.on("mouseout", y), o.on("click", C), _r_();
}), _r_();
}(), B.define("leaving-users-event", function() {
_i_("ec2:78");
var e = B.require("events"), t = function() {};
return t.prototype.init = function() {
_i_("ec2:392"), this.initialized_ || (this.page_ = $(document.documentElement), this.lastMouseYCoords_ = [], this.windowFocused_ = !0, this.attachEvents_(), this.initialized_ = !0), _r_();
}, t.prototype.attachEvents_ = function() {
_i_("ec2:393");
var e = this;
this.page_.bind({
"mousemove.LeavingUsersEvent":function(t) {
_i_("ec2:1278"), e.onPageMouseMove_(t), _r_();
},
"mouseleave.LeavingUsersEvent":$.proxy(this.onPageMouseLeave_, this)
}), $(window).focus(function() {
_i_("ec2:1279"), e.windowFocused_ = !0, _r_();
}).blur(function() {
_i_("ec2:1132"), e.windowFocused_ = !1, _r_();
}), _r_();
}, t.prototype.detachEvents_ = function() {
_i_("ec2:394"), this.page_.unbind(".LeavingUsersEvent"), _r_();
}, t.prototype.onPageMouseMove_ = function(e) {
_i_("ec2:395"), this.writeMouseCoords_(e), _r_();
}, t.prototype.onPageMouseLeave_ = function() {
if (_i_("ec2:396"), !this.wasMouseMoveUpwards_()) return _r_();
this.triggerTabLeaveEvent_(), _r_();
}, t.prototype.triggerTabLeaveEvent_ = function() {
_i_("ec2:397"), e.trigger("leaving-users-event:tab-leave"), _r_();
}, t.prototype.writeMouseCoords_ = function(e) {
_i_("ec2:398"), this.lastMouseYCoords_.push(e.pageY), this.lastMouseYCoords_.length > 2 && this.lastMouseYCoords_.shift(), _r_();
}, t.prototype.wasMouseMoveUpwards_ = function() {
return _i_("ec2:399"), _r_(this.lastMouseYCoords_.length >= 2 && this.lastMouseYCoords_[0] > this.lastMouseYCoords_[1]);
}, _r_(new t());
}), function() {
"use strict";
_i_("ec2:79");
var e = B.require("et"), t = "AEJPBEUWOECeEFbLJdUDZHe";
"city" === B.env.b_action && 2 === e.track(t) && $(document).on("ready", function() {
_i_("ec2:826"), $("#notification_lightbox").remove(), _r_();
}), B.when({
events:"load",
action:[ "country", "city", "airport", "region", "district", "landmark", "hotel", "searchresults" ],
condition:location.href.match(/\.booking\.com/),
experiment:t
}).run(function(i) {
_i_("ec2:400");
var n = i("jquery"), r = i("jstmpl"), o = i("formatting/date"), a = i("leaving-users-event"), s = i("events"), _ = i("lightbox"), c = i("browser-storage-handler"), l = "last_deals_on_bounce", d = n(".deals-bounce-popup"), u = n(".deals-bounce-popup__deals-container"), h = this.variant(), p = d.data("ufi"), f = !1, g = !0;
function v() {
_i_("ec2:827");
var e = new Date().getTime() - (parseInt(c.getPermanentValue(l), 10) || 0) > 36e5;
return _r_(p && e);
}
function b() {
_i_("ec2:828"), n(".js-uc-notification-close:visible").trigger("click"), n(".user_center_popover, #inspire_filter_block").hide(), _r_();
}
function m() {
if (_i_("ec2:829"), v()) {
var e = B.search.dates(), t = e.checkin.toString(), i = e.checkout.toString();
if (!t || !i || t === i || !e.validate()) {
var r = new Date(), a = "{full_year}-{zero_padded_month}-{zero_padded_day_of_month}";
t = o.format(o.breakdown(r), a), r.setDate(r.getDate() + 1), i = o.format(o.breakdown(r), a);
}
n.ajax("/ufi_deal_hotels?ufi=" + p + ";checkin=" + t + ";checkout=" + i + ";currency=" + B.env.b_selected_currency).then(y);
} else g = !1;
_r_();
}
function y(e) {
if (_i_("ec2:830"), e && e.length && (k(), 2 === h)) {
var t = r("deals_on_bounce_list_block").render({
fe_deals:e,
fe_current_hotel_id:B.env.b_hotel_id
});
u.html(t), d.removeClass("-loading"), f = !0;
}
g = !1, c.addPermanentValue(l, new Date().getTime()), _r_();
}
function w(e) {
_i_("ec2:831"), f && (_.hide(), b(), _.show(d, {
customWrapperClassName:"deals-bounce-popup__container"
})), g || s.off("leaving-users-event:tab-leave", w), _r_();
}
function k() {
_i_("ec2:832"), e.stage(t, 1), "searchresults" === B.env.b_action ? e.stage(t, 2) :"hotel" === B.env.b_action ? e.stage(t, 3) :"city" === B.env.b_action ? e.stage(t, 4) :e.stage(t, 5), "channel_paid" === B.env.b_partner_vertical ? e.stage(t, 6) :"meta" === B.env.b_partner_vertical ? e.stage(t, 7) :"channel_direct" === B.env.b_partner_vertical ? e.stage(t, 8) :"channel_seo" === B.env.b_partner_vertical && e.stage(t, 9), _r_();
}
p && (2 === h && (a.init(), s.on("leaving-users-event:tab-leave", w)), m()), _r_();
}), _r_();
}(), function() {
"use strict";
_i_("ec2:80");
var e = "fEJdDBKFGBVNcaRBUNWe";
B.when({
action:"index",
experiment:e
}).run(function(t) {
_i_("ec2:401");
var i = t("jquery"), n = t("et"), r = t("lightbox"), o = t("utils/makeurl"), a = this.variant(), s = !1, _ = i(".blank-state-recommendations");
function c() {
_i_("ec2:833"), r.hide(), r.show(_, {
customWrapperClassName:"modal-wrapper__wide"
}), _r_();
}
function l() {
_i_("ec2:834"), s || (s = !0, i(".js-blank-state-recommendations--close").on("click", function() {
_i_("ec2:1459"), r.hide(), _r_();
})), _r_();
}
function d(e) {
if (_i_("ec2:835"), e) {
var t = B.search.dates();
return _r_(o(e, {
checkin:t.checkin.toString(),
checkout:t.checkout.toString()
}));
}
_r_();
}
function u() {
_i_("ec2:836");
var e = B.search.dates();
e && e.validate() && _.find(".unified-postcard__content").each(function() {
_i_("ec2:1460");
var e = i(this), t = e.find("a:first");
e.data("url", d(e.data("url"))), t.attr("href", d(t.attr("href"))), _r_();
}), _r_();
}
i(document).on("submit", ".js--sb-searchbox", function() {
_i_("ec2:1133");
var r = i(this).data("sbId"), o = t("search/searchbox/model").getInstance(r);
o && o.destination && !o.destination.valid && (n.stage(e, 2), 2 === a && _.length && (l(), u(), c())), _r_();
}), _r_();
}), _r_();
}(), function() {
"use strict";
_i_("ec2:81"), B.when({
condition:window.history && history.state && history.state.fakeBack
}).run(function(e) {
_i_("ec2:402"), $(window).on("popstate", function(e) {
_i_("ec2:1134"), e.originalEvent.state && e.originalEvent.state.fakeBack && setTimeout(window.location.reload.bind(window.location), 300), _r_();
}), _r_();
}), _r_();
}(), function() {
"use strict";
_i_("ec2:82");
var e = "AEJPVZMYCIILZYSfZaTXHFdMcePeae";
B.when({
action:"index",
events:"ready"
}).run(function(t) {
_i_("ec2:403");
var i = t("jquery"), n = t("sb-ultra-focus").getInstance("focus_while_typing");
i("#ss").on("focus_destionation_whilie_typing", function() {
if (_i_("ec2:1135"), B.et.stage(e, 1), !B.et.track(e)) return _r_();
n.show();
var t;
1 === B.et.track(e) ? (n.$el && n.$el.addClass("sb_ultra_focus_overlay--delay-250"), t = 300) :2 === B.et.track(e) ? (n.$el && n.$el.addClass("sb_ultra_focus_overlay--delay-500"), t = 550) :3 === B.et.track(e) && (n.$el && n.$el.addClass("sb_ultra_focus_overlay--delay-1000"), t = 1050), setTimeout(function() {
_i_("ec2:1461"), n.$el.addClass("sb_ultra_focus_overlay--hide"), setTimeout(function() {
_i_("ec2:1604"), n.hide(), _r_();
}, t), _r_();
}, 2e3), _r_();
}), _r_();
}), _r_();
}(), function(e) {
_i_("ec2:83");
var t = 1e3;
function i(t) {
_i_("ec2:252"), e.reportError(new Error(t), "raf:copy-input"), _r_();
}
e.define("component/referral/copy-input", function(e, n, r) {
_i_("ec2:404");
var o = e("component"), a = e("referral/clipboard"), s = e("tooltip"), _ = e("et");
r.exports = o.extend({
init:function() {
_i_("ec2:1373");
var e = this.$el.find(".js-raf-copy-btn"), n = this.$el.find(".js-raf-copy-input"), r = n.val();
if (!n.get(0)) return i("Share link node is missing"), _r_();
if (!e.get(0)) return i("Share btn node is missing"), _r_();
if (!r) return i("RAF share links is missing"), _r_();
var o = e.add(n);
o.on("click", function(e) {
if (_i_("ec2:1567"), e.preventDefault(), navigator.userAgent.match(/ipad|ipod|iphone/i)) {
var t = n.get(0), i = t.contentEditable, o = t.readOnly;
t.contentEditable = !0, t.readOnly = !1;
var s = document.createRange();
s.selectNodeContents(t);
var l = window.getSelection();
l.removeAllRanges(), l.addRange(s), t.setSelectionRange(0, 999999), t.contentEditable = i, t.readOnly = o, document.execCommand("copy"), n.blur(), c(), _.goal("gm_share_copy");
} else a.copy(r, function(e) {
if (_i_("ec2:1643"), n.select(), e) return _r_();
c(), _.goal("gm_share_copy"), _r_();
});
_r_();
});
function c() {
_i_("ec2:1511");
var e = "raf-copy-input-tooltip", n = s.get(e);
if (!n) return i('Tooltip with id "' + e + '" is missing'), _r_();
n.show(), setTimeout(function() {
_i_("ec2:1609"), n.hide(), _r_();
}, t), _r_();
}
_r_();
}
}), _r_();
}), _r_();
}(window.B), function() {
_i_("ec2:84"), B.when({
events:"ready",
experiment:"AEJPMTWbOeAFaIBeYeSHT",
condition:B.env.b_is_landing_page
}).run(e);
function e() {
_i_("ec2:253");
var e = $(".lp_bold_date_picker_wrapper");
e.length && setTimeout(function() {
_i_("ec2:1136"), 0 === window.scrollY && $("html, body").animate({
scrollTop:e.offset().top
}, 500), _r_();
}, 1e3), _r_();
}
_r_();
}(), B.when({
events:"ready",
experiment:"AEJPBMdBLPQRERJBbReKe"
}).run(function() {
_i_("ec2:85");
var e = 1500, t = 5e3, i = $(".js-lp_bold_date_picker_alternatives"), n = i.find("> .lp_bold_date_picker_alternatives__item"), r = "//s-ec.bstatic.com/images/misc_images/lp_sb_googly_index/default_3x1.jpg";
function o(e, t, i) {
_i_("ec2:254");
var n = new Image();
n.src = e, n.complete && 0 !== n.naturalWidth ? typeof ("function" === i) && i() :(n.onload = function() {
_i_("ec2:1137"), typeof ("function" === i) && i(), _r_();
}, n.onerror = function() {
_i_("ec2:1138"), typeof ("function" === t) && t(), _r_();
}), _r_();
}
if (n.length > 1) {
var a = n.last().data("backgroundImageUrl");
o(a, function() {
_i_("ec2:837"), n.last().css("backgroundImage", 'url("' + r + '")'), _r_();
}, function() {
_i_("ec2:838"), n.removeClass("lp_bold_date_picker_alternatives__item--hidden");
var i = n.length - 1, r = i;
setInterval(function() {
_i_("ec2:1280"), 0 >= r && (r = i);
var t = n.eq(r);
r == i && t.is(":hidden") ? (t.fadeIn(e, function() {
_i_("ec2:1605"), n.slice(1, -1).show(), _r_();
}), r++) :t.fadeOut(e), r--, _r_();
}, t), _r_();
});
}
_r_();
}), function() {
_i_("ec2:86");
var e = "AEJPAcBeYAFJNaSHbZFNPBLFHMaXC";
B.when({
events:"ready",
condition:B.env.b_is_landing && !B.env.b_group.length,
action:[ "city", "airport", "region", "district", "destination", "landmark", "place" ]
}).run(function() {
if (_i_("ec2:405"), !B.et.track(e)) return _r_();
setTimeout(function() {
_i_("ec2:1139");
var t = $(".lp_flexible_layout_content_wrapper").find(".sb-date-field__field");
if (!t.length) return _r_();
if (t.offset().top - $(window).scrollTop() < 20) return _r_();
B.et.track(e) >= 2 && $(".sb-date-field__field:first").addClass("animated_focus"), t.one("click", function() {
_i_("ec2:1462"), $(this).removeClass("animated_focus"), _r_();
}), B.et.stage(e, 1), _r_();
}, 1e3), _r_();
}), _r_();
}(), function() {
_i_("ec2:87");
var e = "AEJPVZMYCMMfFaXfdQQBUC";
B.when({
events:"view .js-more_postcards",
experiment:e,
stage:1
}).run(function(t) {
_i_("ec2:406");
var i = t("utils/request_animation_frame"), n = $(".js-more-postcards-btn"), r = $("#home_featured_destinations"), o = $("#unified-postcard--more-items-wrapper"), a = r.children(".js-more_postcards"), s = o.children(), _ = r.offset() ? +r.offset().top - 50 :0;
if (!a.length || !s.length) return _r_(!1);
n.on("click", function() {
_i_("ec2:1140");
var t = r.children(".js-more_postcards");
B.et.customGoal(e, 1), i(function() {
_i_("ec2:1463"), t.remove(), s.slice(0, t.length).addClass("js-more_postcards").prependTo(r), $("html, body").animate({
scrollTop:_
}, 500), s = o.children(), s.length <= 0 && n.remove(), _r_();
}), _r_();
}), _r_();
}), _r_();
}(), B.when({
action:"index",
events:"ready"
}).run(function(e) {
_i_("ec2:88");
var t = e("jquery"), i = e("utils/debounce"), n = [];
t(document).on("scroll", i(function() {
_i_("ec2:597");
var e = t(window).scrollTop();
n[1] || (B.et.customGoal("AEJPTPDaSTQLPPPSSCHe", 1), n[1] = !0), !n[2] && e > 100 && (B.et.customGoal("AEJPTPDaSTQLPPPSSCHe", 2), n[2] = !0), !n[3] && e > 500 && (B.et.customGoal("AEJPTPDaSTQLPPPSSCHe", 3), n[3] = !0), _r_();
}, 300)), _r_();
}), function() {
"use strict";
_i_("ec2:89");
var e = B.require("jquery"), t = e(".lp_bold_date_picker_wrapper");
function i(e) {
_i_("ec2:255");
var i = e(window).scrollTop();
if (i) return _r_();
e("html, body").animate({
scrollTop:t.offset().top
}, 2e3), _r_();
}
B.when({
action:[ "country", "region", "city", "district", "landmark", "airport" ],
events:"ready",
experiment:"AEJPVFfDYGPePdJXDSeONUC",
condition:B.env.b_is_landing && t.length
}).require([ "jquery" ], i), _r_();
}(), function() {
_i_("ec2:90");
var e = "AEJPBOSCATAJRXDcdHPSYFYC";
B.when({
events:"ready",
experiment:e
}).run(function() {
if (_i_("ec2:407"), !("serviceWorker" in navigator && "PushManager" in window)) return _r_();
var t = B.require("jquery"), i = t("#notificationsAskingPopup"), n = i.find(".js-notify-asking-accept"), r = i.find(".js-notify-asking-reject"), o = "BP7yeaAAl_OJldBCsdCF4MGwXK9KoVr96AD_WDZmDmmg8njyqsUlrI5X8spaOHIjso3VuEZzH-eM8Gzs_r0ootE", a = !1, s = null;
if (B.et.stage(e, 1), "denied" === Notification.permission && B.et.stage(e, 4), "denied" === Notification.permission || localStorage.getItem("fake_notification_rejected") || localStorage.getItem("fake_notification_shown")) return _r_();
navigator.serviceWorker.register("/service-worker-notifications.js").then(function(t) {
_i_("ec2:1141"), s = t, s.pushManager.getSubscription().then(function(t) {
_i_("ec2:1464"), a = !(null === t), a || "default" !== Notification.permission ? a || "granted" !== Notification.permission || (B.et.stage(e, 3), c()) :(B.et.stage(e, 2), B.et.track(e) >= 2 && setTimeout(_, 5e3)), _r_();
}), _r_();
});
function _() {
_i_("ec2:839"), i.addClass("notify-asking-opened"), localStorage.setItem("fake_notification_shown", Date.now()), n.one("click", function(t) {
_i_("ec2:1281"), t.preventDefault(), B.et.customGoal(e, 1), c(), _r_();
}), r.one("click", function(t) {
_i_("ec2:1282"), t.preventDefault(), B.et.customGoal(e, 2), i.removeClass("notify-asking-opened"), localStorage.setItem("fake_notification_rejected", Date.now()), _r_();
}), _r_();
}
function c() {
_i_("ec2:840");
var t = d(o);
s.pushManager.subscribe({
userVisibleOnly:!0,
applicationServerKey:t
}).then(function(t) {
_i_("ec2:1465"), a = !0, B.et.customGoal(e, 3), i.removeClass("notify-asking-opened"), l(t), _r_();
})["catch"](function(t) {
_i_("ec2:1283"), B.et.customGoal(e, 4), i.removeClass("notify-asking-opened"), _r_();
}), _r_();
}
function l(e) {
_i_("ec2:841");
var i = e.toJSON(), n = {
endpoint:i.endpoint,
p256dh_key:i.keys.p256dh,
auth_key:i.keys.auth
};
t.ajax({
type:"POST",
data:n,
url:"/log_push_notifications_token_data"
}), _r_();
}
function d(e) {
_i_("ec2:842");
for (var t = "=".repeat((4 - e.length % 4) % 4), i = (e + t).replace(/\-/g, "+").replace(/_/g, "/"), n = window.atob(i), r = new Uint8Array(n.length), o = 0; o < n.length; ++o) r[o] = n.charCodeAt(o);
return _r_(r);
}
_r_();
}), _r_();
}(), B.when({
experiment:"UBKeJKZAMITaDJdDBKC",
events:"load",
action:"index"
}).run(function(e) {
_i_("ec2:91");
var t = e("jquery");
t(".index-hotel-recommendations").on("click", ".index-hotel-wrapper", function() {
_i_("ec2:408");
var e = t(this);
e.data("url") && (location.href = e.data("url")), _r_();
}), _r_();
}), B.when({
action:[ "index", "searchresults", "hotel" ],
experiment:"UBKeJTFeFXFC",
events:"load"
}).run(function() {
_i_("ec2:92");
var e = document.getElementById("main-loading-bar");
e && e.parentNode.removeChild(e), _r_();
}), B.define("xsell/xsell-redirect", function() {
_i_("ec2:93");
var e, t = (B.env.b_nonsecure_hostname || B.env.b_domain_for_app) + "/csgo.html?full_url={url}&token={token}";
return _r_({
init:function(t) {
_i_("ec2:598"), e = t, _r_();
},
create:function(i, n) {
return _i_("ec2:599"), n = n || e, _r_(n ? t.replace("{token}", n).replace("{url}", encodeURIComponent(i)) :"");
}
});
}), function(e, t, i, n) {
"use strict";
_i_("ec2:94"), e.when({
action:"index",
events:"ready"
}).run(function(e) {
_i_("ec2:409");
var t = e("jquery"), n = e("et"), r = "ZOVZMYCMWSaTfQPDHT";
t(i).on("change", 'select[name="age"]', function() {
_i_("ec2:1142"), n.customGoal(r, 1), _r_();
}), _r_();
}), _r_();
}(window.booking, window, document), B.when({
events:"ready"
}).run(function() {
_i_("ec2:95"), $(".ph_review_container_long").click(function() {
_i_("ec2:410");
var e = $(this), t = e.find(".ph_review_text"), i = e.find(".ph_review_overlay"), n = e.find(".ph_review_read-more");
i.is(":visible") ? (t.removeClass("ph_review_fixed"), i.hide(), n.html(B.jstmpl.translations("seo_country_lp_read_less"))) :(t.addClass("ph_review_fixed"), i.show(), n.html(B.jstmpl.translations("seo_country_lp_read_more"))), _r_();
}), _r_();
}), function(e) {
_i_("ec2:96");
var t, i = "IZVDEZREXMPOAUDOLdFcOcEBC";
e(document).on("mouseover", ".js-link-reviews-mouseover", function() {
_i_("ec2:411"), window.setTimeout(function() {
_i_("ec2:1143"), B.et.customGoal(i, 4), _r_();
}, 3e3), _r_();
}), e(document).on("mouseleave", ".js-link-reviews-mouseover", function() {
_i_("ec2:412"), window.clearTimeout(t), _r_();
}), B.when({
condition:"index" == B.env.b_action,
events:"view .hrb-title-container",
experiment:i
}).run(function() {
_i_("ec2:413"), e(".hrb-container").swapTab("paging", {
$tabButton:".hrb-tab",
$tabButtonActive:".hrb-tab.active",
tabButtonActiveClass:"active",
$tabSectionContainer:".hrb-tab-content",
tabSectionContainerActiveClass:"active"
}), e(".hrb-tabs").on("click", t), t();
function t() {
_i_("ec2:843"), e(".hrb-tab-content.active").not(".js-img-loaded").each(function() {
_i_("ec2:1284"), e(".hrb-item", this).each(function() {
_i_("ec2:1540");
var t = e(this).find(".hrb-image");
t.attr("src", t.data("img-url")), t.removeAttr("data-img-url"), e(this).removeClass("hrb-loading"), _r_();
}), e(this).addClass("js-img-loaded"), _r_();
}), _r_();
}
_r_();
}), _r_();
}(B.require("jquery")), B.when({
events:"ready",
action:[ "city" ],
experiment:"IZVYNQCXNNSQSKeRC"
}).run(function() {
_i_("ec2:97");
var e = B.env.b_action, t = B.env.b_original_url, i = $("title").text().trim(), n = B.env.b_seo_page_title, r = $("meta[name=keywords]").attr("content"), o = B.env.b_seo_page_meta.keywords, a = $("meta[name=description]").attr("content"), s = B.env.b_seo_page_meta.description;
(i !== n || r !== o || a !== s) && B.require("fragment").call("seo.compare_be_title_vs_fe_title", {
action:e,
url:t,
fe_title:i,
be_title:n,
fe_meta_keywords:r,
be_meta_keywords:o,
fe_meta_description:a,
be_meta_description:s
}), _r_();
}), B.define("dismiss-item", function(e, t, i) {
_i_("ec2:98");
var n = e("jquery");
i.exports = function(e) {
if (_i_("ec2:414"), !e) throw new Error("param itemId is required");
return _r_(n.ajax({
url:"/dismiss_item",
type:"POST",
data:{
item_id:e
}
}));
}, _r_();
}), B.define("component/dismissible-item/block", function(e, t, i) {
_i_("ec2:99");
var n = e("component"), r = e("dismiss-item"), o = e("read-data-options");
i.exports = n.extend({
init:function() {
_i_("ec2:1009"), this.options = o(this.$el, {
itemId:{
name:"item-id",
type:String,
required:!0
}
}), this._bindEvents(), _r_();
},
_bindEvents:function() {
_i_("ec2:1010"), this.$el.on("click", ".js-close", function() {
_i_("ec2:1512"), this._dismissItem(), this.hide(), _r_();
}.bind(this)), _r_();
},
_dismissItem:function() {
return _i_("ec2:1011"), _r_(r(this.options.itemId));
},
hide:function() {
_i_("ec2:1012"), this.$el.hide(), _r_();
}
}), _r_();
}), B.when({
events:"ready",
action:"index"
}).run(function(e) {
_i_("ec2:100");
var t = e("jquery"), i = t(".search-history-tabs__content"), n = t(".search-history-tabs__tab");
n.on("click", function() {
_i_("ec2:415"), n.removeClass("__active"), t(this).addClass("__active");
var e = t(this).data("target");
i.removeClass("__visible"), t("#" + e).addClass("__visible"), _r_();
}), _r_();
}), /**
@license Sticky-kit v1.1.2 | WTFPL | Leaf Corcoran 2015 | http://leafo.net
 */
function() {
_i_("ec2:154");
var e, t;
if (e = this.jQuery || window.jQuery || (window.B && B.require ? B.require("jquery") :null), !e) return _r_();
t = e(window), e.fn.stick_in_parent = function(i) {
_i_("ec2:600");
var n, r, o, a, s, _, c, l, d, u, h, p, f;
for (null == i && (i = {}), f = i.sticky_class, _ = i.inner_scrolling, p = i.recalc_every, h = i.parent, d = i.offset_top, l = i.spacer, o = i.bottoming, null == d && (d = 0), null == h && (h = void 0), null == _ && (_ = !0), null == f && (f = "is_stuck"), n = e(document), null == o && (o = !0), u = function(e) {
_i_("ec2:1202");
var t, i, n;
return window.getComputedStyle ? (t = e[0], i = window.getComputedStyle(e[0]), n = parseFloat(i.getPropertyValue("width")) + parseFloat(i.getPropertyValue("margin-left")) + parseFloat(i.getPropertyValue("margin-right")), "border-box" !== i.getPropertyValue("box-sizing") && (n += parseFloat(i.getPropertyValue("border-left-width")) + parseFloat(i.getPropertyValue("border-right-width")) + parseFloat(i.getPropertyValue("padding-left")) + parseFloat(i.getPropertyValue("padding-right"))), _r_(n)) :_r_(e.outerWidth(!0));
}, a = function(i, r, a, s, c, g, v, b) {
_i_("ec2:1203");
var m, y, w, k, M, C, x, S, T, $, B, j;
if (i.data("sticky_kit")) return _r_();
if (i.data("sticky_kit", !0), M = n.height(), x = i.parent(), null != h && (x = x.closest(h)), !x.length) throw "failed to find stick parent";
if (w = !1, m = !1, B = null != l ? l && i.closest(l) :e("<div />"), B && B.css("position", i.css("position")), S = function() {
_i_("ec2:1513");
var e, t, o;
if (b) return _r_();
if (M = n.height(), e = parseInt(x.css("border-top-width"), 10), t = parseInt(x.css("padding-top"), 10), r = parseInt(x.css("padding-bottom"), 10), a = x.offset().top + e + t, s = x.height(), w && (w = !1, m = !1, null == l && (i.insertAfter(B), B.detach()), i.css({
position:"",
top:"",
width:"",
bottom:""
}).removeClass(f), o = !0), c = i.offset().top - (parseInt(i.css("margin-top"), 10) || 0) - d, g = i.outerHeight(!0), v = i.css("float"), B && B.css({
width:u(i),
height:g,
display:i.css("display"),
"vertical-align":i.css("vertical-align"),
"float":v
}), o) return _r_(j());
_r_();
}, S(), g === s) return _r_();
return k = void 0, C = d, $ = p, j = function() {
_i_("ec2:1514");
var e, u, h, y, T, j;
if (b) return _r_();
if (h = !1, null != $ && ($ -= 1, 0 >= $ && ($ = p, S(), h = !0)), h || n.height() === M || (S(), h = !0), y = t.scrollTop(), null != k && (u = y - k), k = y, w ? (o && (T = y + g + C > s + a, m && !T && (m = !1, i.css({
position:"fixed",
bottom:"",
top:C
}).trigger("sticky_kit:unbottom"))), c > y && (w = !1, C = d, null == l && (("left" === v || "right" === v) && i.insertAfter(B), B.detach()), e = {
position:"",
width:"",
top:""
}, i.css(e).removeClass(f).trigger("sticky_kit:unstick")), _ && (j = t.height(), g + d > j && (m || (C -= u, C = Math.max(j - g, C), C = Math.min(d, C), w && i.css({
top:C + "px"
}))))) :y > c && (w = !0, e = {
position:"fixed",
top:C
}, e.width = "border-box" === i.css("box-sizing") ? i.outerWidth() + "px" :i.width() + "px", i.css(e).addClass(f), null == l && (i.after(B), ("left" === v || "right" === v) && B.append(i)), i.trigger("sticky_kit:stick")), w && o && (null == T && (T = y + g + C > s + a), !m && T)) return m = !0, "static" === x.css("position") && x.css({
position:"relative"
}), _r_(i.css({
position:"absolute",
bottom:r,
top:"auto"
}).trigger("sticky_kit:bottom"));
_r_();
}, T = function() {
return _i_("ec2:1515"), S(), _r_(j());
}, y = function() {
if (_i_("ec2:1516"), b = !0, t.off("touchmove", j), t.off("scroll", j), t.off("resize", T), e(document.body).off("sticky_kit:recalc", T), i.off("sticky_kit:detach", y), i.removeData("sticky_kit"), i.css({
position:"",
bottom:"",
top:"",
width:""
}), x.position("position", ""), w) return null == l && (("left" === v || "right" === v) && i.insertAfter(B), B.remove()), _r_(i.removeClass(f));
_r_();
}, t.on("touchmove", j), t.on("scroll", j), t.on("resize", T), e(document.body).on("sticky_kit:recalc", T), i.on("sticky_kit:detach", y), _r_(setTimeout(j, 0));
}, s = 0, c = this.length; c > s; s++) r = this[s], a(e(r));
return _r_(this);
}, _r_();
}.call(this), function(e) {
"use strict";
_i_("ec2:102"), "function" == typeof define && define.amd ? define([ "jquery" ], e) :"undefined" != typeof exports ? module.exports = e(require("jquery")) :e(jQuery), _r_();
}(function(e) {
"use strict";
_i_("ec2:101");
var t = window.Slick || {};
t = function() {
_i_("ec2:601");
var t = 0;
function i(i, n) {
_i_("ec2:1013");
var r, o, a, s = this;
if (s.defaults = {
accessibility:!0,
adaptiveHeight:!1,
appendArrows:e(i),
appendDots:e(i),
arrows:!0,
asNavFor:null,
prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',
nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',
autoplay:!1,
autoplaySpeed:3e3,
centerMode:!1,
centerPadding:"50px",
cssEase:"ease",
customPaging:function(e, t) {
return _i_("ec2:1517"), _r_('<button type="button" data-role="none">' + (t + 1) + "</button>");
},
dots:!1,
dotsClass:"slick-dots",
draggable:!0,
easing:"linear",
edgeFriction:.35,
fade:!1,
focusOnSelect:!1,
infinite:!0,
initialSlide:0,
lazyLoad:"ondemand",
mobileFirst:!1,
pauseOnHover:!0,
pauseOnDotsHover:!1,
respondTo:"window",
responsive:null,
rtl:!1,
slide:"",
slidesToShow:1,
slidesToScroll:1,
speed:500,
keydownOverride:!1,
keydownSpeed:500,
swipe:!0,
swipeToSlide:!1,
touchMove:!0,
touchThreshold:5,
useCSS:!0,
variableWidth:!1,
vertical:!1,
waitForAnimate:!0
}, s.initials = {
animating:!1,
dragging:!1,
autoPlayTimer:null,
currentDirection:0,
currentLeft:null,
currentSlide:0,
direction:1,
currentSpeed:null,
iskeyboardEvent:!1,
$dots:null,
listWidth:null,
listHeight:null,
loadIndex:0,
$nextArrow:null,
$prevArrow:null,
slideCount:null,
slideWidth:null,
$slideTrack:null,
$slides:null,
sliding:!1,
slideOffset:0,
swipeLeft:null,
$list:null,
touchObject:{},
transformsEnabled:!1
}, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.hidden = "hidden", s.paused = !1, s.positionProp = null, s.respondTo = null, s.shouldClick = !0, s.$slider = e(i), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, r = e(i).data("slick") || {}, s.options = e.extend({}, s.defaults, r, n), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, o = s.options.responsive || null, o && o.length > -1) {
s.respondTo = s.options.respondTo || "window";
for (a in o) o.hasOwnProperty(a) && (s.breakpoints.push(o[a].breakpoint), s.breakpointSettings[o[a].breakpoint] = o[a].settings);
s.breakpoints.sort(function(e, t) {
return _i_("ec2:1518"), _r_(s.options.mobileFirst === !0 ? e - t :t - e);
});
}
"undefined" != typeof document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") :"undefined" != typeof document.msHidden ? (s.hidden = "msHidden", s.visibilityChange = "msvisibilitychange") :"undefined" != typeof document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.instanceUid = t++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.init(), s.checkResponsive(!0), _r_();
}
return _r_(i);
}(), t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
_i_("ec2:602");
var r = this;
if ("boolean" == typeof i) n = i, i = null; else if (0 > i || i >= r.slideCount) return _r_(!1);
r.unload(), "number" == typeof i ? 0 === i && 0 === r.$slides.length ? e(t).appendTo(r.$slideTrack) :n ? e(t).insertBefore(r.$slides.eq(i)) :e(t).insertAfter(r.$slides.eq(i)) :n === !0 ? e(t).prependTo(r.$slideTrack) :e(t).appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slides.each(function(t, i) {
_i_("ec2:1204"), e(i).attr("data-slick-index", t), _r_();
}), r.$slidesCache = r.$slides, r.reinit(), _r_();
}, t.prototype.animateHeight = function() {
_i_("ec2:416");
var e = this;
if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
e.$list.animate({
height:t
}, e.options.speed);
}
_r_();
}, t.prototype.animateSlide = function(t, i) {
_i_("ec2:417");
var n = {}, r = this;
r.animateHeight(), r.options.rtl === !0 && r.options.vertical === !1 && (t = -t), r.transformsEnabled === !1 ? r.options.vertical === !1 ? r.$slideTrack.animate({
left:t
}, r.options.speed, r.options.easing, i) :r.$slideTrack.animate({
top:t
}, r.options.speed, r.options.easing, i) :r.cssTransitions === !1 ? (r.options.rtl === !0 && (r.currentLeft = -r.currentLeft), e({
animStart:r.currentLeft
}).animate({
animStart:t
}, {
duration:r.options.speed,
easing:r.options.easing,
step:function(e) {
_i_("ec2:1541"), e = Math.ceil(e), r.options.vertical === !1 ? (n[r.animType] = "translate(" + e + "px, 0px)", r.$slideTrack.css(n)) :(n[r.animType] = "translate(0px," + e + "px)", r.$slideTrack.css(n)), _r_();
},
complete:function() {
_i_("ec2:1542"), i && i.call(), _r_();
}
})) :(r.applyTransition(), t = Math.ceil(t), r.options.vertical === !1 ? n[r.animType] = "translate3d(" + t + "px, 0px, 0px)" :n[r.animType] = "translate3d(0px," + t + "px, 0px)", r.$slideTrack.css(n), i && setTimeout(function() {
_i_("ec2:1543"), r.disableTransition(), i.call(), _r_();
}, r.options.speed)), _r_();
}, t.prototype.asNavFor = function(t) {
_i_("ec2:418");
var i = this, n = null !== i.options.asNavFor ? e(i.options.asNavFor).slick("getSlick") :null;
null !== n && n.slideHandler(t, !0), _r_();
}, t.prototype.applyTransition = function(e) {
_i_("ec2:419");
var t = this, i = {};
t.options.fade === !1 ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase :i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(i) :t.$slides.eq(e).css(i), _r_();
}, t.prototype.autoPlay = function() {
_i_("ec2:420");
var e = this;
e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && e.paused !== !0 && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed)), _r_();
}, t.prototype.autoPlayClear = function() {
_i_("ec2:421");
var e = this;
e.autoPlayTimer && clearInterval(e.autoPlayTimer), _r_();
}, t.prototype.autoPlayIterator = function() {
_i_("ec2:422");
var e = this;
e.options.infinite === !1 ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) :(e.currentSlide - 1 === 0 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) :e.slideHandler(e.currentSlide + e.options.slidesToScroll), _r_();
}, t.prototype.buildArrows = function() {
_i_("ec2:423");
var t = this;
t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow = e(t.options.prevArrow), t.$nextArrow = e(t.options.nextArrow), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.appendTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled")), _r_();
}, t.prototype.buildDots = function() {
_i_("ec2:424");
var t, i, n = this;
if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
for (i = '<ul class="' + n.options.dotsClass + '">', t = 0; t <= n.getDotCount(); t += 1) i += "<li>" + n.options.customPaging.call(this, n, t) + "</li>";
i += "</ul>", n.$dots = e(i).appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
}
_r_();
}, t.prototype.buildOut = function() {
_i_("ec2:425");
var t = this;
t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
_i_("ec2:1144"), e(i).attr("data-slick-index", t), _r_();
}), t.$slidesCache = t.$slides, t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) :t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.options.accessibility === !0 && t.$list.attr("tabIndex", 0), t.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide :0), t.options.draggable === !0 && t.$list.addClass("draggable"), _r_();
}, t.prototype.checkResponsive = function(t) {
_i_("ec2:426");
var i, n, r, o = this, a = o.$slider.width(), s = window.innerWidth || e(window).width();
if ("window" === o.respondTo ? r = s :"slider" === o.respondTo ? r = a :"min" === o.respondTo && (r = Math.min(s, a)), o.originalSettings.responsive && o.originalSettings.responsive.length > -1 && null !== o.originalSettings.responsive) {
n = null;
for (i in o.breakpoints) o.breakpoints.hasOwnProperty(i) && (o.originalSettings.mobileFirst === !1 ? r < o.breakpoints[i] && (n = o.breakpoints[i]) :r > o.breakpoints[i] && (n = o.breakpoints[i]));
null !== n ? null !== o.activeBreakpoint ? n !== o.activeBreakpoint && (o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick() :(o.options = e.extend({}, o.originalSettings, o.breakpointSettings[n]), t === !0 && (o.currentSlide = o.options.initialSlide), o.refresh())) :(o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick() :(o.options = e.extend({}, o.originalSettings, o.breakpointSettings[n]), t === !0 && (o.currentSlide = o.options.initialSlide), o.refresh())) :null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, t === !0 && (o.currentSlide = o.options.initialSlide), o.refresh());
}
_r_();
}, t.prototype.changeSlide = function(t, i) {
_i_("ec2:427");
var n, r, o, a = this, s = e(t.target);
switch (s.is("a") && t.preventDefault(), o = a.slideCount % a.options.slidesToScroll !== 0, n = o ? 0 :(a.slideCount - a.currentSlide) % a.options.slidesToScroll, t.data.message) {
case "previous":
r = 0 === n ? a.options.slidesToScroll :a.options.slidesToShow - n, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide - r, !1, i);
break;

case "next":
r = 0 === n ? a.options.slidesToScroll :n, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide + r, !1, i);
break;

case "index":
var _ = 0 === t.data.index ? 0 :t.data.index || e(t.target).parent().index() * a.options.slidesToScroll;
a.slideHandler(a.checkNavigable(_), !1, i);
break;

default:
return _r_();
}
_r_();
}, t.prototype.checkNavigable = function(e) {
_i_("ec2:428");
var t, i, n = this;
if (t = n.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1]; else for (var r in t) {
if (e < t[r]) {
e = i;
break;
}
i = t[r];
}
return _r_(e);
}, t.prototype.clickHandler = function(e) {
_i_("ec2:429");
var t = this;
t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault()), _r_();
}, t.prototype.destroy = function() {
_i_("ec2:430");
var t = this;
t.autoPlayClear(), t.touchObject = {}, e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(), t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-center slick-visible").attr("aria-hidden", "true").removeAttr("data-slick-index").css({
position:"",
left:"",
top:"",
zIndex:"",
opacity:"",
width:""
}), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$list.unbind(".slick"), e(window).unbind(".slick-" + t.instanceUid), e(document).unbind(".slick-" + t.instanceUid), t.$slider.html(t.$slides), _r_();
}, t.prototype.disableTransition = function(e) {
_i_("ec2:431");
var t = this, i = {};
i[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(i) :t.$slides.eq(e).css(i), _r_();
}, t.prototype.fadeSlide = function(e, t) {
_i_("ec2:432");
var i = this;
i.cssTransitions === !1 ? (i.$slides.eq(e).css({
zIndex:1e3
}), i.options.speed ? i.$slides.eq(e).animate({
opacity:1
}, i.options.speed, i.options.easing, t) :i.$slides.eq(e).show(i.options.speed, t)) :(i.applyTransition(e), i.$slides.eq(e).css({
opacity:1,
zIndex:1e3
}), t && setTimeout(function() {
_i_("ec2:1466"), i.disableTransition(e), t.call(), _r_();
}, i.options.speed)), _r_();
}, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
_i_("ec2:603");
var t = this;
null !== e && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit()), _r_();
}, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
_i_("ec2:604");
var e = this;
return _r_(e.currentSlide);
}, t.prototype.getDotCount = function() {
_i_("ec2:433");
var e = this, t = 0, i = 0, n = 0;
if (e.options.infinite === !0) n = Math.ceil(e.slideCount / e.options.slidesToScroll); else if (e.options.centerMode === !0) n = e.slideCount; else for (;t < e.slideCount; ) ++n, t = i + e.options.slidesToShow, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll :e.options.slidesToShow;
return _r_(n - 1);
}, t.prototype.getLeft = function(e) {
_i_("ec2:434");
var t, i, n, r = this, o = 0;
return r.slideOffset = 0, i = r.$slides.first().outerHeight(), r.options.infinite === !0 ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = i * r.options.slidesToShow * -1), r.slideCount % r.options.slidesToScroll !== 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, o = (r.options.slidesToShow - (e - r.slideCount)) * i * -1) :(r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, o = r.slideCount % r.options.slidesToScroll * i * -1))) :e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, o = (e + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, o = 0), r.options.centerMode === !0 && r.options.infinite === !0 ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth :r.options.centerMode === !0 && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = r.options.vertical === !1 ? e * r.slideWidth * -1 + r.slideOffset :e * i * -1 + o, r.options.variableWidth === !0 && (n = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(e) :r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = n[0] ? -1 * n[0].offsetLeft :0, r.options.centerMode === !0 && (n = r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(e) :r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = n[0] ? -1 * n[0].offsetLeft :0, t += (r.$list.width() - n.outerWidth()) / 2)), _r_(t);
}, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
_i_("ec2:605");
var t = this;
return _r_(t.options[e]);
}, t.prototype.getNavigableIndexes = function() {
_i_("ec2:435");
var e, t = this, i = 0, n = 0, r = [];
for (t.options.infinite === !1 ? (e = t.slideCount - t.options.slidesToShow + 1, t.options.centerMode === !0 && (e = t.slideCount)) :(i = -1 * t.slideCount, n = -1 * t.slideCount, e = 2 * t.slideCount); e > i; ) r.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll :t.options.slidesToShow;
return _r_(r);
}, t.prototype.getSlick = function() {
return _i_("ec2:436"), _r_(this);
}, t.prototype.getSlideCount = function() {
_i_("ec2:437");
var t, i, n, r = this;
return n = r.options.centerMode === !0 ? r.slideWidth * Math.floor(r.options.slidesToShow / 2) :0, r.options.swipeToSlide === !0 ? (r.$slideTrack.find(".slick-slide").each(function(t, o) {
if (_i_("ec2:1285"), o.offsetLeft - n + e(o).outerWidth() / 2 > -1 * r.swipeLeft) return i = o, _r_(!1);
_r_();
}), t = Math.abs(e(i).attr("data-slick-index") - r.currentSlide) || 1, _r_(t)) :_r_(r.options.slidesToScroll);
}, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
_i_("ec2:606");
var i = this;
i.changeSlide({
data:{
message:"index",
index:parseInt(e)
}
}, t), _r_();
}, t.prototype.init = function() {
_i_("ec2:438");
var t = this;
e(t.$slider).hasClass("slick-initialized") || (e(t.$slider).addClass("slick-initialized"), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots()), t.$slider.trigger("init", [ t ]), _r_();
}, t.prototype.initArrowEvents = function() {
_i_("ec2:439");
var e = this;
e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.bind("click.slick", {
message:"previous"
}, e.changeSlide), e.$nextArrow.bind("click.slick", {
message:"next"
}, e.changeSlide)), _r_();
}, t.prototype.initDotEvents = function() {
_i_("ec2:440");
var t = this;
t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).bind("click.slick", {
message:"index"
}, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).bind("mouseenter.slick", function() {
_i_("ec2:1467"), t.paused = !0, t.autoPlayClear(), _r_();
}).bind("mouseleave.slick", function() {
_i_("ec2:1286"), t.paused = !1, t.autoPlay(), _r_();
}), _r_();
}, t.prototype.initializeEvents = function() {
_i_("ec2:441");
var t = this;
t.initArrowEvents(), t.initDotEvents(), t.$list.bind("touchstart.slick mousedown.slick", {
action:"start"
}, t.swipeHandler), t.$list.bind("touchmove.slick mousemove.slick", {
action:"move"
}, t.swipeHandler), t.$list.bind("touchend.slick mouseup.slick", {
action:"end"
}, t.swipeHandler), t.$list.bind("touchcancel.slick mouseleave.slick", {
action:"end"
}, t.swipeHandler), t.$list.bind("click.slick", t.clickHandler), t.options.autoplay === !0 && (e(document).bind(t.visibilityChange, function() {
_i_("ec2:1287"), t.visibility(), _r_();
}), t.options.pauseOnHover === !0 && (t.$list.bind("mouseenter.slick", function() {
_i_("ec2:1468"), t.paused = !0, t.autoPlayClear(), _r_();
}), t.$list.bind("mouseleave.slick", function() {
_i_("ec2:1469"), t.paused = !1, t.autoPlay(), _r_();
}))), t.options.accessibility === !0 && e(document).bind("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().bind("click.slick", t.selectHandler), e(window).bind("orientationchange.slick.slick-" + t.instanceUid, function() {
_i_("ec2:1145"), t.checkResponsive(), t.setPosition(), _r_();
}), e(window).bind("resize.slick.slick-" + t.instanceUid, function() {
_i_("ec2:1146"), e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
_i_("ec2:1568"), t.windowWidth = e(window).width(), t.checkResponsive(), t.setPosition(), _r_();
}, 50)), _r_();
}), e("*[draggable!=true]", t.$slideTrack).bind("dragstart", function(e) {
_i_("ec2:1147"), e.preventDefault(), _r_();
}), e(window).bind("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).bind("ready.slick.slick-" + t.instanceUid, t.setPosition), _r_();
}, t.prototype.initUI = function() {
_i_("ec2:442");
var e = this;
e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show(), e.options.autoplay === !0 && e.autoPlay(), _r_();
}, t.prototype.keyHandler = function(e) {
_i_("ec2:443");
var t = this;
t.options.accessibility === !0 && t.options.keydownOverride === !0 && t.options.keydownSpeed && (t.iskeyboardEvent = !0, t.currentSpeed = t.options.speed, t.options.speed = t.options.keydownSpeed), 37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
data:{
message:t.options.rtl ? "next" :"previous"
}
}) :39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
data:{
message:t.options.rtl ? "previous" :"next"
}
}), _r_();
}, t.prototype.lazyLoad = function() {
_i_("ec2:444");
var t, i, n, r, o = this;
function a(t) {
_i_("ec2:844"), e("img[data-lazy]", t).each(function() {
_i_("ec2:1288");
var t = e(this), i = e(this).attr("data-lazy");
t.load(function() {
_i_("ec2:1649"), t.animate({
opacity:1
}, 200), _r_();
}).css({
opacity:0
}).attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), _r_();
}), _r_();
}
o.options.centerMode === !0 ? o.options.infinite === !0 ? (n = o.currentSlide + (o.options.slidesToShow / 2 + 1), r = n + o.options.slidesToShow + 2) :(n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), r = 2 + (o.options.slidesToShow / 2 + 1) + o.currentSlide) :(n = o.options.infinite ? o.options.slidesToShow + o.currentSlide :o.currentSlide, r = n + o.options.slidesToShow, o.options.fade === !0 && (n > 0 && n--, r <= o.slideCount && r++)), t = o.$slider.find(".slick-slide").slice(n, r), a(t), o.slideCount <= o.options.slidesToShow ? (i = o.$slider.find(".slick-slide"), a(i)) :o.currentSlide >= o.slideCount - o.options.slidesToShow ? (i = o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow), a(i)) :0 === o.currentSlide && (i = o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow), a(i)), _r_();
}, t.prototype.loadSlider = function() {
_i_("ec2:445");
var e = this;
e.setPosition(), e.$slideTrack.css({
opacity:1
}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad(), _r_();
}, t.prototype.next = t.prototype.slickNext = function() {
_i_("ec2:607");
var e = this;
e.changeSlide({
data:{
message:"next"
}
}), _r_();
}, t.prototype.pause = t.prototype.slickPause = function() {
_i_("ec2:608");
var e = this;
e.autoPlayClear(), e.paused = !0, _r_();
}, t.prototype.play = t.prototype.slickPlay = function() {
_i_("ec2:609");
var e = this;
e.paused = !1, e.autoPlay(), _r_();
}, t.prototype.postSlide = function(e) {
_i_("ec2:446");
var t = this;
t.$slider.trigger("afterChange", [ t, e ]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay === !0 && t.paused === !1 && t.autoPlay(), t.options.accessibility === !0 && t.options.keydownOverride === !0 && t.iskeyboardEvent === !0 && (t.iskeyboardEvent = !1, t.options.speed = t.currentSpeed), _r_();
}, t.prototype.prev = t.prototype.slickPrev = function() {
_i_("ec2:610");
var e = this;
e.changeSlide({
data:{
message:"previous"
}
}), _r_();
}, t.prototype.progressiveLazyLoad = function() {
_i_("ec2:447");
var t, i, n = this;
t = e("img[data-lazy]", n.$slider).length, t > 0 && (i = e("img[data-lazy]", n.$slider).first(), i.attr("src", i.attr("data-lazy")).removeClass("slick-loading").load(function() {
_i_("ec2:1470"), i.removeAttr("data-lazy"), n.progressiveLazyLoad(), n.options.adaptiveHeight === !0 && n.setPosition(), _r_();
}).error(function() {
_i_("ec2:1289"), i.removeAttr("data-lazy"), n.progressiveLazyLoad(), _r_();
})), _r_();
}, t.prototype.refresh = function() {
_i_("ec2:448");
var t = this, i = t.currentSlide;
t.destroy(), e.extend(t, t.initials), t.init(), t.changeSlide({
data:{
message:"index",
index:i
}
}, !0), _r_();
}, t.prototype.reinit = function() {
_i_("ec2:449");
var t = this;
t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().bind("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [ t ]), _r_();
}, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
_i_("ec2:611");
var n = this;
if ("boolean" == typeof e ? (t = e, e = t === !0 ? 0 :n.slideCount - 1) :e = t === !0 ? --e :e, n.slideCount < 1 || 0 > e || e > n.slideCount - 1) return _r_(!1);
n.unload(), i === !0 ? n.$slideTrack.children().remove() :n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit(), _r_();
}, t.prototype.setCSS = function(e) {
_i_("ec2:450");
var t, i, n = this, r = {};
n.options.rtl === !0 && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" :"0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" :"0px", r[n.positionProp] = e, n.transformsEnabled === !1 ? n.$slideTrack.css(r) :(r = {}, n.cssTransitions === !1 ? (r[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(r)) :(r[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(r))), _r_();
}, t.prototype.setDimensions = function() {
_i_("ec2:451");
var e = this;
if (e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
padding:"0px " + e.options.centerPadding
}) :(e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
padding:e.options.centerPadding + " 0px"
})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1) e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length)); else if (e.options.variableWidth === !0) {
var t = 0;
e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.children(".slick-slide").each(function() {
_i_("ec2:1374"), t += e.listWidth, _r_();
}), e.$slideTrack.width(Math.ceil(t) + 1);
} else e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length));
var i = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - i), _r_();
}, t.prototype.setFade = function() {
_i_("ec2:452");
var t, i = this;
i.$slides.each(function(n, r) {
_i_("ec2:1148"), t = i.slideWidth * n * -1, i.options.rtl === !0 ? e(r).css({
position:"relative",
right:t,
top:0,
zIndex:800,
opacity:0
}) :e(r).css({
position:"relative",
left:t,
top:0,
zIndex:800,
opacity:0
}), _r_();
}), i.$slides.eq(i.currentSlide).css({
zIndex:900,
opacity:1
}), _r_();
}, t.prototype.setHeight = function() {
_i_("ec2:453");
var e = this;
if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
e.$list.css("height", t);
}
_r_();
}, t.prototype.setOption = t.prototype.slickSetOption = function(e, t, i) {
_i_("ec2:612");
var n = this;
n.options[e] = t, i === !0 && (n.unload(), n.reinit()), _r_();
}, t.prototype.setPosition = function() {
_i_("ec2:454");
var e = this;
e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) :e.setFade(), e.$slider.trigger("setPosition", [ e ]), _r_();
}, t.prototype.setProps = function() {
_i_("ec2:455");
var e = this, t = document.body.style;
e.positionProp = e.options.vertical === !0 ? "top" :"left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") :e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = null !== e.animType && e.animType !== !1, _r_();
}, t.prototype.setSlideClasses = function(e) {
_i_("ec2:456");
var t, i, n, r, o = this;
o.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true").removeClass("slick-center"), i = o.$slider.find(".slick-slide"), o.options.centerMode === !0 ? (t = Math.floor(o.options.slidesToShow / 2), o.options.infinite === !0 && (e >= t && e <= o.slideCount - 1 - t ? o.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") :(n = o.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") :e === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(e).addClass("slick-center")) :e >= 0 && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") :i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") :(r = o.slideCount % o.options.slidesToShow, n = o.options.infinite === !0 ? o.options.slidesToShow + e :e, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - r), n + r).addClass("slick-active").attr("aria-hidden", "false") :i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === o.options.lazyLoad && o.lazyLoad(), _r_();
}, t.prototype.setupInfinite = function() {
_i_("ec2:457");
var t, i, n, r = this;
if (r.options.fade === !0 && (r.options.centerMode = !1), r.options.infinite === !0 && r.options.fade === !1 && (i = null, r.slideCount > r.options.slidesToShow)) {
for (n = r.options.centerMode === !0 ? r.options.slidesToShow + 1 :r.options.slidesToShow, t = r.slideCount; t > r.slideCount - n; t -= 1) i = t - 1, e(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
for (t = 0; n > t; t += 1) i = t, e(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
r.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
_i_("ec2:1471"), e(this).attr("id", ""), _r_();
});
}
_r_();
}, t.prototype.selectHandler = function(t) {
_i_("ec2:458");
var i = this, n = parseInt(e(t.target).parents(".slick-slide").attr("data-slick-index"));
if (n || (n = 0), i.slideCount <= i.options.slidesToShow) return i.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true"), i.$slides.eq(n).addClass("slick-active").attr("aria-hidden", "false"), i.options.centerMode === !0 && (i.$slider.find(".slick-slide").removeClass("slick-center"), i.$slides.eq(n).addClass("slick-center")), i.asNavFor(n), _r_();
i.slideHandler(n), _r_();
}, t.prototype.slideHandler = function(e, t, i) {
_i_("ec2:459");
var n, r, o, a = null, s = this;
if (t = t || !1, s.animating === !0 && s.options.waitForAnimate === !0) return _r_();
if (s.options.fade === !0 && s.currentSlide === e) return _r_();
if (s.slideCount <= s.options.slidesToShow) return _r_();
if (t === !1 && s.asNavFor(e), n = e, a = s.getLeft(n), o = s.getLeft(s.currentSlide), s.currentLeft = null === s.swipeLeft ? o :s.swipeLeft, s.options.infinite === !1 && s.options.centerMode === !1 && (0 > e || e > s.getDotCount() * s.options.slidesToScroll)) return s.options.fade === !1 && (n = s.currentSlide, i !== !0 ? s.animateSlide(o, function() {
_i_("ec2:1544"), s.postSlide(n), _r_();
}) :s.postSlide(n)), _r_();
if (s.options.infinite === !1 && s.options.centerMode === !0 && (0 > e || e > s.slideCount - s.options.slidesToScroll)) return s.options.fade === !1 && (n = s.currentSlide, i !== !0 ? s.animateSlide(o, function() {
_i_("ec2:1569"), s.postSlide(n), _r_();
}) :s.postSlide(n)), _r_();
if (s.options.autoplay === !0 && clearInterval(s.autoPlayTimer), r = 0 > n ? s.slideCount % s.options.slidesToScroll !== 0 ? s.slideCount - s.slideCount % s.options.slidesToScroll :s.slideCount + n :n >= s.slideCount ? s.slideCount % s.options.slidesToScroll !== 0 ? 0 :n - s.slideCount :n, s.animating = !0, s.$slider.trigger("beforeChange", [ s, s.currentSlide, r ]), s.currentSlide = r, s.setSlideClasses(s.currentSlide), s.updateDots(), s.updateArrows(), s.options.fade === !0) return i !== !0 ? s.fadeSlide(r, function() {
_i_("ec2:1472"), s.postSlide(r), _r_();
}) :s.postSlide(r), s.animateHeight(), _r_();
i !== !0 ? s.animateSlide(a, function() {
_i_("ec2:1290"), s.postSlide(r), _r_();
}) :s.postSlide(r), _r_();
}, t.prototype.startLoad = function() {
_i_("ec2:460");
var e = this;
e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading"), _r_();
}, t.prototype.swipeDirection = function() {
_i_("ec2:461");
var e, t, i, n, r = this;
if (e = r.touchObject.startX - r.touchObject.curX, t = r.touchObject.startY - r.touchObject.curY, i = Math.atan2(t, e), n = Math.round(180 * i / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0) return _r_(r.options.rtl === !1 ? "left" :"right");
if (360 >= n && n >= 315) return _r_(r.options.rtl === !1 ? "left" :"right");
if (n >= 135 && 225 >= n) return _r_(r.options.rtl === !1 ? "right" :"left");
return _r_("vertical");
}, t.prototype.swipeEnd = function(e) {
_i_("ec2:462");
var t, i = this;
if (i.dragging = !1, i.shouldClick = i.touchObject.swipeLength > 10 ? !1 :!0, void 0 === i.touchObject.curX) return _r_(!1);
if (i.touchObject.edgeHit === !0 && i.$slider.trigger("edge", [ i, i.swipeDirection() ]), i.touchObject.swipeLength >= i.touchObject.minSwipe) switch (i.swipeDirection()) {
case "left":
t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) :i.currentSlide + i.getSlideCount(), i.slideHandler(t), i.currentDirection = 0, i.touchObject = {}, i.$slider.trigger("swipe", [ i, "left" ]);
break;

case "right":
t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) :i.currentSlide - i.getSlideCount(), i.slideHandler(t), i.currentDirection = 1, i.touchObject = {}, i.$slider.trigger("swipe", [ i, "right" ]);
} else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {});
_r_();
}, t.prototype.swipeHandler = function(e) {
_i_("ec2:463");
var t = this;
if (t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1) return _r_();
if (t.options.draggable === !1 && -1 !== e.type.indexOf("mouse")) return _r_();
switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length :1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, e.data.action) {
case "start":
t.swipeStart(e);
break;

case "move":
t.swipeMove(e);
break;

case "end":
t.swipeEnd(e);
}
_r_();
}, t.prototype.swipeMove = function(e) {
_i_("ec2:464");
var t, i, n, r, o, a = this;
if (o = void 0 !== e.originalEvent ? e.originalEvent.touches :null, !a.dragging || o && 1 !== o.length) return _r_(!1);
if (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== o ? o[0].pageX :e.clientX, a.touchObject.curY = void 0 !== o ? o[0].pageY :e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), i = a.swipeDirection(), "vertical" === i) return _r_();
if (void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && e.preventDefault(), r = (a.options.rtl === !1 ? 1 :-1) * (a.touchObject.curX > a.touchObject.startX ? 1 :-1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, a.options.infinite === !1 && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), a.options.vertical === !1 ? a.swipeLeft = t + n * r :a.swipeLeft = t + n * (a.$list.height() / a.listWidth) * r, a.options.fade === !0 || a.options.touchMove === !1) return _r_(!1);
if (a.animating === !0) return a.swipeLeft = null, _r_(!1);
a.setCSS(a.swipeLeft), _r_();
}, t.prototype.swipeStart = function(e) {
_i_("ec2:465");
var t, i = this;
if (1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, _r_(!1);
void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX :e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY :e.clientY, i.dragging = !0, _r_();
}, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
_i_("ec2:613");
var e = this;
null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit()), _r_();
}, t.prototype.unload = function() {
_i_("ec2:466");
var t = this;
e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(), t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden", "true").css("width", ""), _r_();
}, t.prototype.unslick = function() {
_i_("ec2:467");
var e = this;
e.destroy(), _r_();
}, t.prototype.updateArrows = function() {
_i_("ec2:468");
var e = this;
e.options.arrows === !0 && e.options.infinite !== !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.removeClass("slick-disabled"), e.$nextArrow.removeClass("slick-disabled"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled"), e.$nextArrow.removeClass("slick-disabled")) :e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled"), e.$prevArrow.removeClass("slick-disabled")) :e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled"), e.$prevArrow.removeClass("slick-disabled"))), _r_();
}, t.prototype.updateDots = function() {
_i_("ec2:469");
var e = this;
null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false")), _r_();
}, t.prototype.visibility = function() {
_i_("ec2:470");
var e = this;
document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) :(e.paused = !1, e.autoPlay()), _r_();
}, e.fn.slick = function() {
_i_("ec2:471");
var e, i = this, n = arguments[0], r = Array.prototype.slice.call(arguments, 1), o = i.length, a = 0;
for (a; o > a; a++) if ("object" == typeof n || "undefined" == typeof n ? i[a].slick = new t(i[a], n) :e = i[a].slick[n].apply(i[a].slick, r), "undefined" != typeof e) return _r_(e);
return _r_(i);
}, e(function() {
_i_("ec2:472"), e("[data-slick]").slick(), _r_();
}), _r_();
}), B.define("ugc/gallery/store", function(e, t, i) {
_i_("ec2:103");
var n = {}, r = {};
r.init = function() {
_i_("ec2:473"), this.state = this.reduce("INIT", {}), this.prevState = this.state, this.subscribers = [], _r_();
}, r.getState = function() {
return _i_("ec2:474"), _r_(this.state);
}, r.getPrevState = function() {
return _i_("ec2:475"), _r_(this.prevState);
}, r.unsubscribeAll = function() {
_i_("ec2:476"), this.subscribers = [], _r_();
}, r.subscribe = function(e) {
_i_("ec2:477"), this.subscribers.push(e), _r_();
}, r.dispatch = function(e) {
_i_("ec2:478"), this.prevState = this.state, this.state = this.reduce(e, this.state), this.subscribers.forEach(function(e) {
_i_("ec2:1149"), e(), _r_();
}), _r_();
}, r.reduce = function(e, t) {
return _i_("ec2:479"), _r_({
visibleIndex:this.updateIndex(e, t.visibleIndex),
total:this.updateTotal(e, t.total),
width:this.updateWidth(e, t.width),
position:this.updatePosition(e, t.position),
carouselWidth:this.updateCarouselWidth(e, t.carouselWidth),
isHidden:this.updateHidden(e, t.isHidden)
});
}, r.updateHidden = function(e, t) {
switch (_i_("ec2:480"), e.type) {
case "SET_INDEX":
return _r_(0);

case "SET_HIDDEN":
return _r_(1);

default:
return _r_("undefined" == typeof t ? 1 :t);
}
_r_();
}, r.updateIndex = function(e, t) {
switch (_i_("ec2:481"), t = t || 0, e.type) {
case "PREV_INDEX":
return _r_(t - 1);

case "NEXT_INDEX":
return _r_(t + 1);

case "SET_INDEX":
return _r_(e.index);

default:
return _r_(t);
}
_r_();
}, r.updateTotal = function(e, t) {
switch (_i_("ec2:482"), t = t || 0, e.type) {
case "SET_TOTAL":
return _r_(e.total);

default:
return _r_(t);
}
_r_();
}, r.updateWidth = function(e, t) {
switch (_i_("ec2:483"), t = t || 760, e.type) {
case "SET_WIDTH":
return _r_(e.width);

default:
return _r_(t);
}
_r_();
}, r.updateCarouselWidth = function(e, t) {
switch (_i_("ec2:484"), t = t || 0, e.type) {
case "SET_TOTAL":
case "SET_WIDTH":
return _r_(e.total * e.width);

default:
return _r_(t);
}
_r_();
}, r.updatePosition = function(e, t) {
switch (_i_("ec2:485"), t = t || 0, e.type) {
case "PREV_INDEX":
return _r_(e.position - e.width);

case "NEXT_INDEX":
return _r_(e.position + e.width);

case "SET_INDEX":
return _r_(e.width * e.index);

case "SET_WIDTH":
return _r_(e.width * e.index);

default:
return _r_(t);
}
_r_();
}, i.exports = {
getInstance:function(e) {
return _i_("ec2:845"), e && !n[e] && (r.init(), n[e] = r), _r_(n[e]);
}
}, _r_();
}), B.define("component/ugc/gallery-trigger", function(e, t, i) {
_i_("ec2:104");
var n = e("ugc/gallery/store"), r = e("component"), o = s(), a = {
modal_wrapper:"user-image-gallery__lightbox-wrapper"
};
function s() {
if (_i_("ec2:256"), "mdot" === B.env.b_site_type) return _r_(e("ugc/mobile/lightbox"));
return _r_(e("lightbox"));
}
i.exports = r.extend({
init:function() {
_i_("ec2:1014");
var e = this.$el.find("[data-trigger]"), t = this.$el.data("ufi");
if (this.$trigger = e.length > 0 ? e :this.$el, this.$target = $(this.$trigger.attr("href")), this.$sliders = $(".js-dsf-slick-slider"), !t) throw new Error("ugc/gallery: data-ufi value is required!");
this.store = n.getInstance(t), this.tmpl = this.$target.html(), this._attachEvents(), _r_();
},
_attachEvents:function() {
_i_("ec2:1015"), this.$trigger.on("click", this.onOpenClick.bind(this)), _r_();
},
_onLightboxHide:function() {
_i_("ec2:1016"), this._updateSlickAcessibility(!0), this.store.dispatch({
type:"SET_HIDDEN"
}), _r_();
},
_onLightboxShow:function() {
_i_("ec2:1017"), this._updateSlickAcessibility(!1), _r_();
},
onOpenClick:function(e) {
_i_("ec2:1018"), e.preventDefault();
var t = $(e.currentTarget), i = o.show(this.tmpl, {
customWrapperClassName:a.modal_wrapper,
bCloseButton:!1,
hideCallBack:this._onLightboxHide.bind(this)
}), n = this.store.getState();
this.store.dispatch({
type:"SET_INDEX",
index:t.data("index"),
width:n.width
}), i.loadComponents(), i.find("[data-close-btn]").on("click", function(e) {
_i_("ec2:1375"), e.preventDefault(), o.hide(), _r_();
}), this._onLightboxShow(), _r_();
},
_updateSlickAcessibility:function(e) {
if (_i_("ec2:1019"), !this.$sliders.length) return _r_();
this.$sliders.each(function(t, i) {
if (_i_("ec2:1376"), "undefined" == typeof i.slick) return _r_();
$(i).slick("setOption", "accessibility", e, !0), _r_();
}), _r_();
}
}), _r_();
}), B.define("component/ugc/gallery", function(e, t, i) {
_i_("ec2:105");
var n = e("ugc/gallery/store"), r = e("component"), o = B.env.b_lang_is_rtl || B.env.rtl, a = "mdot" === B.env.b_site_type, s = 1;
a && (s = window.devicePixelRatio || 1), i.exports = r.extend({
init:function() {
_i_("ec2:1020");
var e, t = this.$el.data("ufi");
if (this.$prevBtn = this.$el.find('[data-action="PREV_INDEX"]'), this.$nextBtn = this.$el.find('[data-action="NEXT_INDEX"]'), this.$items = this.$el.find("[data-item]"), this.$window = $(window), !t) throw new Error("ugc/gallery: data-ufi value is required!");
this.store = n.getInstance(t), this.store.unsubscribeAll(), this.store.subscribe(this.render.bind(this)), e = this.store.getState(), e.width = e.width || this.$window.width() * s, !a && e.width > 760 && (e.width = 760), this.store.dispatch({
type:"SET_TOTAL",
width:e.width,
total:this.$items.length
}), this._attachEvents(), _r_();
},
render:function() {
_i_("ec2:1021");
var e = this.store.getState(), t = this.store.getPrevState();
this._renderWidth(e), this._renderControls(e), this._renderPosition(e, t), _r_();
},
_attachEvents:function() {
_i_("ec2:1022"), this.$prevBtn.on("click", this._onNavClick.bind(this)), this.$nextBtn.on("click", this._onNavClick.bind(this)), this.$window.off("keydown.ugcGallery"), this.$window.on("keydown.ugcGallery", this._onKeyDown.bind(this)), a && (this._onMobileResize(), this.$window.resize(this._onMobileResize.bind(this))), _r_();
},
_navigate:function(e) {
_i_("ec2:1023");
var t = this.store.getState();
this.store.dispatch({
type:e,
position:t.position,
width:t.width,
total:t.total
}), _r_();
},
_onNavClick:function(e) {
_i_("ec2:1024");
var t = $(e.currentTarget).data("action");
this._navigate(t), _r_();
},
_onKeyDown:function(e) {
_i_("ec2:1025");
var t = this.store.getState(), i = t.visibleIndex < t.total - 1;
if (t.isHidden) return _r_();
e.which && 37 === e.which && (!o && t.visibleIndex > 0 && this._navigate("PREV_INDEX"), o && i && this._navigate("NEXT_INDEX")), e.which && 39 === e.which && (!o && i && this._navigate("NEXT_INDEX"), o && t.visibleIndex > 0 && this._navigate("PREV_INDEX")), _r_();
},
_onMobileResize:function() {
_i_("ec2:1026");
var e = this.store.getState();
e.width = e.width || this.$window.width() * s, this.store.dispatch({
type:"SET_WIDTH",
total:e.total,
index:e.visibleIndex,
width:this.$window.width() * s
}), _r_();
},
_renderPosition:function(e, t) {
_i_("ec2:1027");
var i = {}, n = o ? "margin-right" :"margin-left", r = e.position - t.position;
r === e.width || r === -e.width ? (i[n] = -e.position / s, this.$el.animate(i, 300)) :this.$el.css(n, -e.position / s), _r_();
},
_renderWidth:function(e) {
_i_("ec2:1028"), this.$el.css("width", e.carouselWidth / s + "px"), this.$items.css("width", e.width / s + "px"), _r_();
},
_renderControls:function(e) {
_i_("ec2:1029"), 0 === e.position ? this.$prevBtn.hide() :this.$prevBtn.show(), e.position + e.width === e.carouselWidth ? this.$nextBtn.hide() :this.$nextBtn.show(), _r_();
}
}), _r_();
}), B.when({
events:"ready",
action:"city",
experiment:"adUAVGPLeHGPAJGDZHXJGUO"
}).run(function() {
_i_("ec2:106");
var e = B.require("lightbox"), t = $(".npd-experience-lp-survey"), i = $(".npd-experience-lp-survey-modal"), n = $(".npd-experience-lp-survey__close"), r = 0, o = 0, a = B.et.track("adUAVGPLeHGPAJGDZHXJGUO");
function s(t) {
_i_("ec2:257"), t.preventDefault(), B.et.customGoal("adUAVGPLeHGPAJGDZHXJGUO", 1), e.show(i, {
customWrapperClassName:"npd-experience-lp-survey-modal--lightbox"
}), _r_();
}
function _() {
_i_("ec2:258"), i.addClass("npd-experience-lp-survey-modal--success"), B.et.customGoal("adUAVGPLeHGPAJGDZHXJGUO", 5), setTimeout(function() {
_i_("ec2:846"), c(), _r_();
}, 1e4), _r_();
}
function c() {
_i_("ec2:259"), e.hide(), B.et.customGoal("adUAVGPLeHGPAJGDZHXJGUO", 4), _r_();
}
function l(e) {
_i_("ec2:260"), e.preventDefault(), B.et.customGoal("adUAVGPLeHGPAJGDZHXJGUO", 2);
var t = "/store_community_survey_answers", n = i.find("#npd-email").val(), s = i.find("#npd-message").val(), l = {
ufi:B.env.b_ufi,
urlcity:B.env.b_urlcity,
cityName:B.env.city_name_en,
checkInDate:B.env.b_checkin_date,
checkOutDate:B.env.b_checkout_date,
countryCode:B.env.b_countrycode,
visitorCountry:B.env.b_guest_country,
browser:B.env.b_browser,
isGenius:B.env.b_reg_user_is_genius,
accountEmail:B.env.b_email,
group:B.env.b_group,
occupancy:B.env.b_occupancy,
variant:a
};
0 != r && 0 != o && (l.lengthOfStay = r, l.bookWindow = o), $.ajax({
url:t,
method:"POST",
data:{
lang:B.env.b_lang,
cc1:B.env.b_countrycode,
email:n,
question_tag:a > 2 ? "lp_v2" :"lp_v1",
answer_text:s,
json_data:JSON.stringify(l)
},
error:function() {
_i_("ec2:1150"), c(), _r_();
},
success:function(e) {
_i_("ec2:1151"), "ok" == e.status ? _() :c(), _r_();
}
}), _r_();
}
function d() {
_i_("ec2:261"), t.hide(), _r_();
}
function u() {
_i_("ec2:262");
try {
if (!B.env.b_checkin_date) return _r_();
var e = new Date(1e3 * B.env.b_timestamp), t = new Date(B.env.b_checkin_date);
if (r = 1, B.env.b_checkout_date) {
var i = new Date(B.env.b_checkout_date);
r = Math.ceil((i.getTime() - t.getTime()) / 864e5);
}
o = Math.ceil((t.getTime() - e) / 864e5);
} catch (n) {}
_r_();
}
!function() {
_i_("ec2:486"), i.hide(), t.find(".js-open-survey").on("click", s), t.find(".js-npd-no-thanks").on("click", function(e) {
_i_("ec2:1152"), e.preventDefault(), d(), B.et.customGoal("adUAVGPLeHGPAJGDZHXJGUO", 3), _r_();
}), i.find("form").on("submit", l), n.on("click", c), u(), _r_();
}(), _r_();
}), function(e) {
_i_("ec2:107"), e.define("component/feedback-base", function(i, n, r) {
_i_("ec2:487");
var o = i("component"), a = i("jquery"), s = i("events"), _ = {
StorageService:t,
submitModel:function(e, t) {
_i_("ec2:1291");
var i = a.ajax({
url:e,
method:"POST",
data:t
});
return _r_(i);
},
setObjectPath:function(e, t, i) {
_i_("ec2:1292");
var n = t.split("."), r = e, o = n.length - 1;
n.forEach(function(e, t) {
if (_i_("ec2:1545"), t === o) return r[e] = i, _r_();
r[e] = r[e] || {}, r = r[e], _r_();
}), _r_();
}
};
r.exports = o.extend({
_utils:_,
config:{
url:"/receive_feedback",
defaultView:"index",
defaultErrorView:"error",
defaultActionEvent:"click",
defaultPoll:"general",
defaultStorage:"floops",
defaultTimeout:168,
defaultAutoclose:!1,
stopPropagation:!1,
neverExpire:"itinerary" == e.env.b_action ? !1 :!0
},
init:function() {
if (_i_("ec2:1377"), this.setupComponent(), !this.config.neverExpire && (this.setupStorage(), !this.storage)) return _r_();
if (this.setupModel(), !this.config.neverExpire) {
var e = this.storage.isExpired(this.model.poll);
if (!e) {
var t = a(".feedback-loop");
return t.length && t.hide(), _r_();
}
}
this.setupViews(), this.setupActions(), this.initActions(), this.render(), _r_();
},
setupComponent:function() {
_i_("ec2:1378"), this.config = a.extend({}, this.config, this.$el.data()), _r_();
},
setupStorage:function() {
_i_("ec2:1379");
var e = this.config.storage || this.config.defaultStorage;
this.storage = new t(e), this.storage.removeExpired(), _r_();
},
setupViews:function() {
_i_("ec2:1380");
var e = this.views = {}, t = this.$el;
t.children("[data-view]").each(function(t, i) {
_i_("ec2:1570");
var n = a(i), r = n.data(), o = r.view;
e[o] = {
config:r,
view:i,
$view:n
}, _r_();
}), this.setupGroups(), _r_();
},
setupGroups:function() {
_i_("ec2:1381");
var e = this;
this.$el.off(".feedbackGroups").on("click.feedbackGroups", ".feedback-loop__group-header :checkbox", function() {
_i_("ec2:1571"), t(a(this).closest(".feedback-loop__group")), _r_();
});
function t(t) {
_i_("ec2:1519");
var i = t.find(".feedback-loop__group-body"), n = t.find(".feedback-loop__group-header :checkbox"), r = i.is(":visible"), o = n.is(":checked");
r != o && i.slideToggle({
duration:200,
complete:function() {
_i_("ec2:1644"), e.triggerResize(), _r_();
}
}), _r_();
}
_r_();
},
triggerResize:function() {
_i_("ec2:1382"), this.$el.trigger("feedbackBase_resize"), _r_();
},
setupModel:function() {
_i_("ec2:1383"), this.model = {
poll:this.config.poll || this.config.defaultPoll
}, a.extend(this.model, {
url:window.location.href,
action:window.booking && window.booking.env && window.booking.env.b_action
}), _r_();
},
setupActions:function() {
_i_("ec2:1384");
var e = this.actions = {};
e.showView = function(e) {
_i_("ec2:1572"), this.render(e.view), _r_();
}, e.submit = function(e) {
_i_("ec2:1573");
var t = this;
_.submitModel(this.config.url, this.model).done(function() {
_i_("ec2:1645");
var e = t.config.timeout;
e && !t.config.neverExpire && t.storage.set(t.model.poll, !0, 1e3 * e * 3600), _r_();
}).fail(function() {
_i_("ec2:1632");
var e = t.config.defaultErrorView;
if (t.views[e]) return _r_(t.render(e));
throw s.emit("FLOOPS.request.error"), Error("[FLOOPS] Error submitting feedback");
}), _r_();
}, e.autoClose = function() {
_i_("ec2:1574"), setTimeout(function() {
_i_("ec2:1633"), $el.fadeOut(200), _r_();
}, 3e3), _r_();
}, e.reset = function() {
_i_("ec2:1575"), this.updateModel(this.currentView, !0), _r_();
}, e.close = function() {
_i_("ec2:1576"), this.$el.hide(), _r_();
}, _r_();
},
updateModel:function(e, t) {
_i_("ec2:1385");
var i = this, n = this.views[e], r = n ? n.$view :this.$el, o = {};
r.find("[data-model]").each(function(e, n) {
_i_("ec2:1577");
var r, o = a(n), c = o.data();
if (c.model && (r = String(c.model).match(/^([^\[\]]+)\[\]$/))) return s(r[1]), _r_();
if (c.hasOwnProperty("modelValue")) return _r_();
var l = t ? "" :o.val();
o.is(":checkbox,:radio") && !o.prop("checked") && (l = ""), _.setObjectPath(i.model, c.model, l), _r_();
});
function s(e) {
if (_i_("ec2:1520"), o[e]) return _r_();
o[e] = [], r.find('[data-model="' + e + '[]"]').each(function(i, n) {
_i_("ec2:1610");
var r = a(n), s = t ? "" :r.val();
r.is(":checkbox,:radio") && !r.prop("checked") && (s = ""), s && o[e].push(s), _r_();
}), _.setObjectPath(i.model, e, o[e].join(",")), _r_();
}
_r_();
},
initActions:function() {
_i_("ec2:1386");
var e = this;
this.$el.find(":not([data-component]) [data-action]").each(function(t, i) {
_i_("ec2:1578");
var n = a(i), r = a.extend({
action:e.config.defaultAction,
on:e.config.defaultActionEvent,
autoclose:n.data("autoclose") || !1,
stopPropagation:n.data("stopPropagation") || e.config.stopPropagation
}, n.data()), o = r.action.split(/\s+/);
n.on(r.on, function(t) {
_i_("ec2:1634"), r.model && r.modelValue && _.setObjectPath(e.model, r.model, r.modelValue), e.updateModel(e.currentView), r.stopPropagation && t.stopPropagation(), o.forEach(function(t) {
_i_("ec2:1654"), e.actions[t].call(e, r), _r_();
}), _r_();
}), _r_();
}), e.config.stopPropagation && this.$el.on("click", function(e) {
_i_("ec2:1611"), e.stopPropagation(), _r_();
}), _r_();
},
render:function(e) {
_i_("ec2:1387");
var t = this;
if (!this.views) return _r_();
if (this.$el.removeClass("feedback-loop--hidden"), e = e || this.config.defaultView, e === this.currentView) return _r_();
Object.keys(this.views).forEach(function(i) {
_i_("ec2:1612");
var n = this.views[i].$view;
if (i === e) {
this.currentView = i, n.show();
var r = /off|0|disabled|none/g;
n.data("autoclose") && !r.test(n.data("autoclose")) && setTimeout(function() {
_i_("ec2:1657"), t.$el.fadeOut(300), _r_();
}, 2e3);
} else n.hide();
_r_();
}.bind(this)), this.triggerResize(), _r_();
}
}), _r_();
});
function t(e, i) {
if (_i_("ec2:263"), !(this instanceof t)) return _r_(new t(e, i));
i = i || "localStorage", this.ns = e, this._storage = this.getStorage(i), this.loadData(), _r_();
}
t.prototype.getStorage = function(e) {
_i_("ec2:488");
try {
var t = window[e], i = "__storage_test__";
return t.setItem(i, i), t.removeItem(i), _r_(t);
} catch (n) {
return _r_();
}
_r_();
}, t.prototype.saveData = function() {
if (_i_("ec2:489"), !this._storage) return _r_();
return _r_(this._storage.setItem(this.ns, JSON.stringify(this.data)));
}, t.prototype.loadData = function() {
_i_("ec2:490");
var e = this._storage.getItem(this.ns);
try {
e = e && JSON.parse(e) || {};
} catch (t) {
e = {};
}
this.data = e, _r_();
}, t.prototype.removeExpired = function() {
_i_("ec2:491");
var e = Object.keys(this.data), t = this.data;
e.filter(this.isExpired.bind(this)).forEach(function(e) {
_i_("ec2:1153"), delete t[e], _r_();
}), this.saveData(), _r_();
}, t.prototype.isExpired = function(e, t) {
_i_("ec2:492"), t = t || new Date().getTime();
var i = this.data[e];
if (!i || !i.expires) return _r_(!0);
return _r_(t > i.expires);
}, t.prototype.remove = function(e) {
_i_("ec2:493"), delete this.data[e], this.saveData(), _r_();
}, t.prototype.set = function(e, t, i) {
if (_i_("ec2:494"), i && i.constructor !== Date) {
var n = new Date().getTime();
i = new Date(n + i).getTime();
}
this.data[e] = {
value:t,
expires:i
}, this.saveData(), _r_();
}, t.prototype.get = function(e) {
_i_("ec2:495");
var t, i = this.data, n = i[e];
return i[e] && (this.isExpired(e) ? this.remove(e) :t = n.value), _r_(t);
}, _r_();
}(window.booking), function(e) {
_i_("ec2:108"), e.define("component/feedback-inline", function(t, i, n) {
_i_("ec2:496");
var r = t("component"), o = t("jquery");
n.exports = r.extend({
init:function() {
_i_("ec2:1388");
var e = this;
this.config = {
url:"/receive_content_feedback",
modalExtraClass:"feedback-modal-wrapper",
modalMaskExtraClass:"",
modalPosition:"fixed",
modalTopMargin:0,
autoFocus:!0
}, this.setupComponent(), this.$el.on("click", "[data-action]", function(t) {
_i_("ec2:1579");
var i = o(this), n = (i.data("action") || "").split(/\s+/);
t.preventDefault(), i.data("stopPropagation") && t.stopPropagation(), o.each(n, function(t, n) {
_i_("ec2:1635");
var r = e["action_" + n];
"function" == typeof r && r.call(e, i), _r_();
}), _r_();
}), _r_();
},
action_submit:function(e) {
_i_("ec2:1389");
var t = e.data("model"), i = e.data("modelValue"), n = this.getModel();
return t && (n[t] = i), this.$el.trigger("feedbackInline_submit", n), _r_(o.ajax({
url:this.config.url,
method:"POST",
data:n
}));
},
action_external:function(i) {
_i_("ec2:1390");
var n = e.env && e.env.b_is_tdot_traffic ? e[sNSStartup].lightbox :t("lightbox"), r = i.data("url"), a = i.data("iframe_height_percentage") || 90, s = {
iframe:!0,
iframeHeight:Math.max(Math.floor(a * o(window).height() / 100), 550),
hideCallBack:function() {
_i_("ec2:1613"), o(document.body).css("overflow", ""), _r_();
}
};
r && (n.show(r, s), o(document.body).css("overflow", "hidden")), _r_();
},
action_modal:function(i) {
_i_("ec2:1391");
var n, r = this, a = e.env && e.env.b_is_tdot_traffic ? e[sNSStartup].lightbox :t("lightbox"), s = i.data("showForm"), _ = i.data("modalView"), c = s ? o(s) :o(".feedback-loop-lightbox").filter('[data-poll="' + this.config.poll + '"]').eq(0), l = function() {
_i_("ec2:1580"), r.$el.trigger("feedbackInline_hideModal", {
$feedbackForm:c
}), _r_();
}, d = function() {
_i_("ec2:1581"), r.$el.trigger("feedbackInline_beforeHideModal", {
$feedbackForm:c
}), _r_();
};
if (!c.length) return _r_();
_ && (n = c.data("componentInstanceFeedbackBase"), n && n.render && n.render(_)), a.show(c, {
customWrapperClassName:this.config.modalExtraClass,
position:this.config.modalPosition,
topMargin:this.config.modalTopMargin,
customMaskClassName:this.config.modalMaskExtraClass,
hideCallBack:l,
hideBeforeCallBack:d
}), r.$el.trigger("feedbackInline_showModal"), c.off(".feedbackInline").on("click.feedbackInline", "[data-close]", function() {
_i_("ec2:1636"), a.hide(), _r_();
}).on("click.feedbackInline", '[data-action~="submit"]', function() {
_i_("ec2:1614"), r.$el.trigger("feedbackInline_submitModal"), i.data("hideOnModalSubmit") && r.action_hide(), _r_();
}).on("feedbackBase_resize", function() {
_i_("ec2:1582"), a.rePosition({
preserveAbsolute:!0
}), _r_();
}), r.config.autoFocus && (e.et.track("OTfdASFBUMRbLUHAUNSTAHLJEFJaGbZEZTcYENFVO") ? c.find("input:visible, textarea:visible").first().focus() :e.et.track("OTfdASFBUMRbLUHAUNSTAHLJEFJaGbZEZTcHQKOOcO") ? c.find("input:visible, textarea:visible").first().focus() :c.find("input:text:visible,textarea:visible").focus()), _r_();
},
action_extraForm:function(e) {
_i_("ec2:1392");
var t, i = this, n = e.data("showForm"), r = o(n ? n :'.feedback-loop-extra[data-poll="' + this.config.poll + '"]');
if (!r.length) return _r_();
r.data("tmplName") && (r = this.replaceWithJsTmpl(r), r.addClass("feedback-loop-extra").attr("data-poll", this.config.poll)), r.show(), this.config.autoFocus && setTimeout(function() {
_i_("ec2:1615"), r.find("input:text:visible,textarea:visible").focus(), _r_();
}, 50), this.$el.trigger("feedbackInline_showExtra"), r.find('[data-action~="close"]').off(".feedbackInline").on("click.feedbackInline", function() {
_i_("ec2:1655"), i.$el.trigger("feedbackInline_hideExtra"), e.data("showOnCancel") && !t && i.$el.show(), _r_();
}).end().find('[data-action~="submit"]').off(".feedbackInline").on("click.feedbackInline", function() {
_i_("ec2:1583"), t = !0, e.data("hideOnExtraSubmit") && i.action_hide(), i.$el.trigger("feedbackInline_submitExtra"), _r_();
}), _r_();
},
action_hide:function(e) {
_i_("ec2:1393");
var t = this, i = e ? e.data("hideDelay") :null, n = e ? e.data("hideAnimated") :null, r = function() {
_i_("ec2:1584"), n ? t.$el.slideUp(200) :t.$el.hide(), _r_();
};
i ? setTimeout(r, i) :r(), _r_();
},
action_hideOther:function(e) {
_i_("ec2:1394"), o('[data-component="feedback-inline"][data-poll="' + this.config.poll + '"]').not(this.$el).hide(), _r_();
},
action_showView:function(t) {
_i_("ec2:1395");
var i = this, n = t.data("showView"), r = this.$el.find("[data-view]"), a = r.filter('[data-view="' + n + '"]'), s = a.data("viewAnimated");
r.each(function() {
_i_("ec2:1585");
var t = o(this), r = t.data("view"), a = t.is(":visible");
r !== n || a ? r !== n && a && (s ? t.slideUp(200) :t.hide()) :s ? (i.$el.css({
overflow:"hidden",
height:i.$el.height()
}), t.slideDown(300, function() {
_i_("ec2:1656"), i.$el.css({
overflow:"",
height:""
}), _r_();
}), e.et.track("OTfdASFBUMRbLUHAUNSTAHLJEFJaGbZEZTcYENFVO") ? o(".inline-feedback__hidden").focus() :e.et.track("OTfdASFBUMRbLUHAUNSTAHLJEFJaGbZEZTcHQKOOcO") && o(".inline-feedback__hidden").focus()) :t.show(), _r_();
}), _r_();
},
replaceWithJsTmpl:function(t) {
_i_("ec2:1396");
var i = t.data(), n = {
poll_id:this.config.poll
}, r = "", a = t;
return e.jstmpl && i.tmplName && (o.each(i, function(e, t) {
_i_("ec2:1616");
var i = e.match(/^tmplData(.+)$/);
i && i[1] && (n[String(i[1]).toLowerCase()] = t), _r_();
}), o.isPlainObject(i.tmplData) && o.extend(n, i.tmplData), r = e.jstmpl(i.tmplName).render(n)), r && (a = o(r), t.replaceWith(a), a.loadComponents()), _r_(a);
},
setupComponent:function() {
_i_("ec2:1397"), o.extend(this.config, this.$el.data()), _r_();
},
getModel:function() {
_i_("ec2:1398");
var e = this.$el.find("[data-view]:visible"), t = {
url:window.location.href,
action:window.booking && window.booking.env && window.booking.env.b_action,
poll:this.config.poll
};
return e.length || (e = this.$el), e.find("[data-model]").each(function() {
_i_("ec2:1586");
var e = o(this), i = e.data();
!i.hasOwnProperty("modelValue") && i.model && (t[i.model] = e.val()), _r_();
}), _r_(t);
}
}), _r_();
}), _r_();
}(window.booking), B.when({
action:"index",
events:"load",
condition:document.getElementById("expert-review-thankyou-lightbox-content")
}).run(function(e) {
_i_("ec2:109");
var t = e("jquery"), i = e("lightbox"), n = booking.browserStorageHandler, r = n.getSessionValue("closedLocalReviewThankYou");
if (r) return _r_();
i.show("#expert-review-thankyou-lightbox-content", {
customWrapperClassName:"expert-review-thankyou-lightbox",
hideCallBack:function() {
_i_("ec2:847"), n.addSessionValue("closedLocalReviewThankYou", "true"), _r_();
}
}), t("#expert-review-thankyou-lightbox-content .expert-review-thankyou-lightbox-content__btn").on("click", function() {
_i_("ec2:497"), i.hide(), _r_();
}), _r_();
}), B.when({
events:"ready",
experiment:"adUAKYDEZREGPdQQBUWFZLaGUNGOHT",
action:"index",
condition:$(".endorsement-accordion").length
}).run(function(e) {
_i_("ec2:110");
var t = e("jquery"), i = t(".endorsement-accordion"), n = i.find(".endorsement-accordion__item"), r = {
expanded:"item_expanded",
collapsed:"item_collapsed"
};
n.on("click", ".endorsement-accordion__item__header", o);
function o(e) {
_i_("ec2:264"), e.preventDefault();
var i = t(e.currentTarget).parents(".endorsement-accordion__item");
i.hasClass(r.collapsed) && a(i), _r_();
}
function a(e) {
_i_("ec2:265"), n.each(function(e, i) {
_i_("ec2:848");
var n = t(i), o = n.find(".endorsement-accordion__item--list:visible");
o.length && (n.removeClass(r.expanded).addClass(r.collapsed), o.show(0).slideUp(200)), _r_();
}), e.removeClass(r.collapsed).addClass(r.expanded).find(".endorsement-accordion__item--list").hide(0).slideDown(200), _r_();
}
_r_();
}), B.define("component/ugc/score-breakdown", function(e, t, i) {
_i_("ec2:111");
var n = e("component"), r = e("tooltip");
i.exports = n.extend({
init:function() {
_i_("ec2:1030"), this.data = {}, this.data.breakdown = this.$el.data("breakdown"), this.data.title = this.$el.data("breakdown-title"), this.position = this.$el.data("position") || "right", this.buildTooltip(), _r_();
},
buildTooltip:function() {
_i_("ec2:1031"), this.tt = r.setup({
target:this.$el.find(".review-score-badge"),
position:this.position,
contentTemplate:"score_breakdown_tmpl",
contentTemplateData:this.data
}), _r_();
},
showBreakdown:function() {
_i_("ec2:1032"), this.tt.show(), _r_();
}
}), _r_();
}), booking.jstmpl("score_breakdown_tmpl", function() {
_i_("ec2:155");
var e = [ '\n	<div class="tooltip-score-breakdown">\n		', '<p class="tooltip-score-breakdown__title">', '\n		<ul class="tooltip-score-breakdown__list">\n			', '\n				<li class="tooltip-score-breakdown__item">\n					<p class="tooltip-score-breakdown__label">', '</p>\n					<div class="tooltip-score-breakdown__bar"><div class="tooltip-score-breakdown__fill" style="width:', '%"></div></div>\n					<span class="tooltip-score-breakdown__value">', "</span>\n				</li>\n			", "\n		</ul>\n	</div>\n" ], t = [ "title", "breakdown" ];
return _r_(function(i) {
_i_("ec2:498");
var n = "", r = this.fn;
n += e[0], r.MD(t[0]) && (n += [ e[1], r.F.html(r.MC(t[0])) ].join("")), n += e[2];
var o = r.MC(t[1]) || [];
i.unshift({
bd:null
});
for (var a, s = 1, _ = o.length; _ >= s; s++) i[0].bd = a = o[s - 1], n += [ e[3], (a || {}).translated_text, e[4], r.MI(a.rating) * r.MI(10), e[5], (a || {}).formatted_rating, e[6] ].join("");
return i.shift(), n += e[7], _r_(n);
});
}()), B.define("component/ugc/photo-gallery", function(e, t, i) {
_i_("ec2:112");
var n = e("component"), r = e("fragment"), o = e("et"), a = $("body").hasClass("lang_is_rtl"), s = {
27:"close",
37:a ? "next" :"prev",
39:a ? "prev" :"next"
};
i.exports = n.extend({
init:function() {
_i_("ec2:1033");
var e = this, t = this.$el.data("load");
this.store = {}, this.store.isRtl = a, this.store.loadList = t && t.split(",") || [ "from_property" ], this.store.name = this.$el.data("property-name"), this.store.image = this.$el.data("property-image"), this.store.destination = this.$el.data("property-dest"), this.store.url = this.$el.data("property-url"), this.store.tabs = [], this.store.tabsText = {
from_property:B.jstmpl.translations("ugcc_landing_prop_card_photo_gallery_property"),
from_user:B.jstmpl.translations("ugcc_landing_prop_card_photo_gallery_guest")
}, this.hotel_id = this.$el.data("hid"), this.store.hash = this.$el.data("track"), this.mltags = this.$el.data("mltags") && this.$el.data("mltags").toString().split(","), this.maxPhotos = this.$el.data("max-photos"), this.minBeautyScore = this.$el.data("min-beauty-score"), this.store.currentType = this.$el.data("start") || this.store.loadList[0], this.store.currentTarget = {}, $.each(this.store.loadList, function(t, i) {
_i_("ec2:1399"), e.store[i] = {
loaded:!1,
hid:this.hotel_id,
photos:[],
current:0
}, _r_();
}), this.bindElement(), _r_();
},
bindElement:function() {
_i_("ec2:1034"), this.$el.on("click", this.clickHandler.bind(this)), _r_();
},
clickHandler:function(e) {
_i_("ec2:1035");
var t = this;
e.preventDefault(), e.stopPropagation(), o.customGoal(this.store.hash, 1);
var i = $(e.target);
this.store.currentTarget.type = i.data("target-type"), this.store.currentTarget.id = i.data("target-id"), this.renderOverlay(), this.store.loaded ? this.renderPhotos() :$.each(this.store.loadList, function(e, i) {
_i_("ec2:1521"), t.loadPhotos(i), _r_();
}), _r_();
},
renderOverlay:function() {
_i_("ec2:1036"), $("body").append(B.jstmpl("ugc_photo_gallery_overlay").render()).css("overflow", "hidden"), _r_();
},
renderPhotos:function() {
_i_("ec2:1037");
var e = this.store.currentTarget.type, t = this.store.currentTarget.id;
if (e && t) {
var i = this.store[e].photos;
if (i) for (var n = 0; n < i.length; n++) if (i[n].b_photo_id == t) {
this.store[e].current = n;
break;
}
}
var r = B.jstmpl("ugc_photo_gallery_content").render(this.store);
$(".upg__overlay").html(r), this.cacheDom(), this.bindEvents(), this.updateArrows(), _r_();
},
cacheDom:function() {
_i_("ec2:1038"), this.overlay = $(".upg__overlay"), this.tabs = this.overlay.find(".ugp__tab"), this.content = this.overlay.find(".ugp__content.active"), this.items = this.content.find(".ugp__content-item"), o.initAttributesTracking(this.overlay), _r_();
},
bindEvents:function() {
_i_("ec2:1039"), this.overlay.on("click", ".ugp__wrapper", function(e) {
_i_("ec2:1617"), e.stopPropagation(), _r_();
}).on("click", ".ugp__arrow", this.arrowHandler.bind(this)).on("click", ".ugp__tab", this.tabsHandler.bind(this)).on("click", this.closeGallery.bind(this)), $(document).bind("keydown.ugp_gallery", this.keyboardHandler.bind(this)), _r_();
},
loadPhotos:function(e) {
_i_("ec2:1040");
var t = this, i = this.store[e], n = {
hotel_ids:[ this.hotel_id ],
image_source:e
};
this.mltags && (n.ml_tags = this.mltags), this.maxPhotos && (n.max_photos_per_hotel = this.maxPhotos), this.minBeautyScore && (n.min_beauty_score = this.minBeautyScore), r.call("photo.all_photos", n).then(function(n) {
_i_("ec2:1400");
var r = !0;
i.loaded = !0, i.photos = n && n[t.hotel_id] || [], i.length = i.photos.length, i.photos.length && t.store.tabs.push(e), $.each(t.store.loadList, function(e, i) {
if (_i_("ec2:1587"), !t.store[i] || !t.store[i].loaded) return r = !1, _r_(!1);
_r_();
}), r && (t.store.loaded = !0, t.renderPhotos()), _r_();
}, function() {}), _r_();
},
arrowHandler:function(e) {
_i_("ec2:1041"), e.preventDefault(), e.stopPropagation();
var t = $(e.currentTarget);
t.hasClass("active") && this.switchPhoto(t.data("arrow")), _r_();
},
tabsHandler:function(e) {
_i_("ec2:1042"), e.preventDefault();
var t = $(e.currentTarget);
this.store.currentType = t.data("type"), "from_user" == this.store.currentType && o.customGoal(this.store.hash, 2), this.tabs.removeClass("active"), t.addClass("active"), this.content.removeClass("active"), this.overlay.find(".ugp__content[data-type=" + this.store.currentType + "]").addClass("active"), this.cacheDom(), this.updateArrows(), _r_();
},
keyboardHandler:function(e) {
_i_("ec2:1043");
var t = e.which || e.keyCode;
s.hasOwnProperty(t) && ("close" == s[t] ? this.closeGallery(e) :this.switchPhoto(s[t])), _r_();
},
switchPhoto:function(e) {
_i_("ec2:1044");
var t = this.store[this.store.currentType].photos;
if ("prev" == e && 0 === this.store[this.store.currentType].current) return _r_();
if ("next" == e && this.store[this.store.currentType].current >= t.length - 1) return _r_();
this.items.removeClass("active"), "prev" == e ? this.store[this.store.currentType].current-- :this.store[this.store.currentType].current++, this.items.eq(this.store[this.store.currentType].current).addClass("active"), this.updateArrows(), _r_();
},
updateArrows:function() {
_i_("ec2:1045");
var e = this.store[this.store.currentType].photos, t = this.store[this.store.currentType].current;
$(".ugp__arrow[data-arrow=prev]").toggleClass("active", t > 0), $(".ugp__arrow[data-arrow=next]").toggleClass("active", t < e.length - 1), _r_();
},
closeGallery:function(e) {
_i_("ec2:1046"), e.preventDefault(), $("body").css("overflow", "visible"), $(".upg__overlay").remove(), $(document).unbind("keydown.ugp_gallery"), _r_();
}
}), _r_();
}), booking.jstmpl("ugc_photo_gallery_overlay", function() {
_i_("ec2:156");
var e = [ '\n    <div class="upg__overlay"><div class="ugp__spinner"></div></div>\n' ];
return _r_(function(t) {
_i_("ec2:499");
var i = "";
this.fn;
return i += e[0], _r_(i);
});
}()), booking.jstmpl("ugc_photo_gallery_content", function() {
_i_("ec2:157");
var e = [ '\n    <a href="#"  data-arrow="', "next", "prev", '" class="ugp__arrow ugp__arrow-left', " active", '"><i class="ugp__arrow-icon bicon-leftchevron"></i></a>\n    <div class="ugp__wrapper" data-hid="', '">\n        <div class="ugp__tabs">\n            ', '\n                <a href="#" data-type="', '" class="ugp__tab', '">\n                    ', "\n                </a>\n            ", '\n        </div>\n        <div class="ugp__content', '" data-type="from_property">\n            ', '\n                <div class="ugp__content-item', '">\n                    <div class="ugp__content-photo" style="background-image: url(', ')"></div>\n                    <div class="ugp__content-info">\n                        <span class="ugp__property-photo" style="background-image: url(', ')"></span>\n                        <p class="ugp__content-name">', '</p>\n                        <p class="ugp__content-desc">', "</p>\n                        ", '\n                            <div class="ugp__content-info__bottom">\n                                <a href="', '" class="ugp__button" data-et-click="customGoal:', ':3">', "/private/book_now_button_lp/name", "</a>\n                            </div>\n                        ", "\n                    </div>\n                </div>\n            ", "\n        </div>\n        ", '\n        <div class="ugp__content', '" data-type="from_user">\n            ', ')"></div>\n                    <div class="ugp__content-info">\n                        ', "\n                            ", "\n                                ", '\n                            <span class="ugp__avatar" style="background-image: url(', ');"></span>\n                        ', '\n                            <span class="ugp__property-photo bicon-LoginIcon"></span>\n                        ', '\n                        <p class="ugp__content-name">\n                            ', "/private/anonymous/name", "\n                                    ", '\n                        </p>\n                        <p class="ugp__content-desc">', "<p>\n                        ", '\n                            <div class="ugp__content-info__bottom top-line">\n                                <span class="ugp__property-photo smaller" style="background-image: url(', ')"></span>\n                                <p class="ugp__content-name">', '</p>\n                                <p class="ugp__content-desc">', '</p>\n                                <div class="ugp__content-info__button">\n                                    <a href="', "</a>\n                                </div>\n                            </div>\n                        ", '\n    </div>\n    <a href="#" data-arrow="', '" class="ugp__arrow ugp__arrow-right', '"><i class="ugp__arrow-icon bicon-rightchevron"></i></a>\n    <a href="#" class="ugp__close bicon-aclose" data-ugp-close></a>\n' ], t = [ "isRtl", "hid", "tabs", "currentType", "tabsText", "from_property", "b_photo_url", "image", "name", "destination", "url", "hash", "from_user", "b_review_avatar_url", "image_path", "review_avatar_url", "b_anonymous", "b_guest_nickname", "b_guest_name", "b_completed_date" ];
return _r_(function(i) {
_i_("ec2:500");
var n = "", r = this.fn;
n += e[0], n += r.MD(t[0]) ? e[1] :e[2], n += e[3], r.MD(t[0]) && (n += e[4]), n += [ e[5], r.MC(t[1]), e[6] ].join("");
var o = r.MC(t[2]) || [];
i.unshift({
tab:null
});
for (var a, s = 1, _ = o.length; _ >= s; s++) i[0].tab = a = o[s - 1], n += [ e[7], a, e[8] ].join(""), r.MJ(r.MB(t[3]) + "" == "" + a) && (n += e[4]), n += [ e[9], r.MC(t[4])[a], e[10] ].join("");
i.shift(), n += e[11], r.MJ(r.MB(t[3]) + "" == "from_property") && (n += e[4]), n += e[12];
var o = (r.MC(t[5]) || {}).photos || [];
i.unshift(null);
for (var s = 1, _ = o.length; _ >= s; s++) i[0] = o[s - 1], n += e[13], r.MJ(r.MI(s) - r.MI(1) == r.MC(t[5]).current) && (n += e[4]), n += [ e[14], r.STATIC_HOSTNAME(r.MC(t[6]), 0, 0, 0), e[15], r.STATIC_HOSTNAME(r.MB(t[7]), 0, 0, 0), e[16], r.MC(t[8]), e[17], r.MC(t[9]), e[18] ].join(""), r.MD(t[10]) && (n += [ e[19], r.MC(t[10]), e[20], r.MC(t[11]), e[21], r.ME(e[22], r.MB, r.MN, null), e[23] ].join("")), n += e[24];
if (i.shift(), n += e[25], r.MJ(r.MB(t[12])) && r.MJ(r.MC(t[12]).length > 0)) {
n += e[26], r.MJ(r.MB(t[3]) + "" == "from_user") && (n += e[4]), n += e[27];
var o = (r.MC(t[12]) || {}).photos || [];
i.unshift(null);
for (var s = 1, _ = o.length; _ >= s; s++) i[0] = o[s - 1], n += e[13], r.MJ(r.MI(s) - r.MI(1) == r.MC(t[12]).current) && (n += e[4]), n += [ e[14], r.STATIC_HOSTNAME(r.MC(t[6]), 0, 0, 0), e[28] ].join(""), r.MD(t[13]) ? (n += e[29], r.MJ(/https?\:\/\//.test(r.MC(t[13]))) ? (n += e[30], r.MN("review_avatar_url", r.MC(t[13])), n += e[29]) :r.MJ(/data\:image/.test(r.MC(t[13]))) ? (n += e[30], r.MN("review_avatar_url", r.MB(t[14])), n += e[29]) :(n += e[30], r.MN(t[15], r.STATIC_HOSTNAME("/" + r.MC(t[13]), 0, 0, 0)), n += e[29]), n += [ e[31], r.MC(t[15]), e[32] ].join("")) :n += e[33], n += e[34], r.MD(t[16]) ? n += [ e[30], r.ME(e[35], r.MB, r.MN, null), e[29] ].join("") :(n += e[30], n += r.MD(t[17]) ? [ e[36], r.MC(t[17]), e[30] ].join("") :[ e[36], r.MC(t[18]), e[30] ].join(""), n += e[29]), n += [ e[37], r.MC(t[19]), e[38] ].join(""), r.MD(t[10]) && (n += [ e[39], r.MC(t[7]), e[40], r.MC(t[8]), e[41], r.MC(t[9]), e[42], r.MC(t[10]), e[20], r.MC(t[11]), e[21], r.ME(e[22], r.MB, r.MN, null), e[43] ].join("")), n += e[24];
i.shift(), n += e[25];
}
return n += e[44], n += r.MD(t[0]) ? e[2] :e[1], n += e[45], r.MD(t[0]) || (n += e[4]), n += e[46], _r_(n);
});
}()), B.define("component/tabs", function(e, t, i) {
_i_("ec2:113");
var n = e("component");
i.exports = n.extend({
activeId:null,
init:function() {
_i_("ec2:1047");
var e = this.$el.find(".c-tabs li.-active a").eq(0), t = this.getId(e);
t && (this.activeId = t), this.bindEvents(), _r_();
},
bindEvents:function() {
_i_("ec2:1048"), this.$el.find(".c-tabs li a").on("click", this.tabClick.bind(this)), _r_();
},
tabClick:function(e) {
_i_("ec2:1049");
var t = $(e.currentTarget), i = this.getId(t);
if (!i || i === this.activeId) return _r_(!1);
return this.$el.find(".c-tabs li").removeClass("-active"), t.closest("li").addClass("-active"), this.$el.find(".c-tabs-content").removeClass("-active"), $("#" + i).addClass("-active"), this.activeId = i, history.pushState && history.pushState(null, null, "#" + i), _r_(!1);
},
getId:function(e) {
_i_("ec2:1050");
var t = e.attr("href");
if (!t) return _r_();
var i = t.split("#");
if (i && i[1]) return _r_(i[1]);
_r_();
}
}), _r_();
}), B.when({
action:"index",
events:"ready"
}).run(function(e) {
_i_("ec2:114");
var t = e("jquery");
t(".js--how-works-cta").on("click", function() {
_i_("ec2:501");
var e = t(".bh-sb-horizontal, form#form_search_location, #wide_search"), i = e.offset();
t("html, body").animate({
scrollTop:i.top - 5
}), e.find(".sb-destination__input").focus(), _r_();
}), _r_();
}), B.when({
events:"click button.survey_yes_button",
experiment:"VOGNAPIVQUdWAcUYcfJFO",
stage:1
}).run(), B.when({
events:"click button.survey_no_button",
experiment:"VOGNAPIVQUdWAcUYcfJFO",
stage:2
}).run(), B.when({
action:"index",
condition:B.env.b_run_bbw_bi_and_te_rp_campaign
}).run(function(e) {
_i_("ec2:115");
var t = e("jquery"), i = e("lightbox"), n = t(".bbw_rp_campaign_container"), r = t(".js-bb-modal-close");
(!t.cookie("bbw_campaign_modal_dismissed") || t.cookie("bbw_campaign_modal_dismissed") && "1" != t.cookie("bbw_campaign_modal_dismissed")) && (i.show(n, {
bNoScroll:!0,
bCloseButton:!1,
hideCallBack:function() {
_i_("ec2:1154"), t.cookie("bbw_campaign_modal_dismissed", 1, {
expires:999
}), _r_();
}
}), r.one("click", function() {
_i_("ec2:849"), i.hide(n), _r_();
})), _r_();
}), B.define("component/bbg-pending-bbtool-invite-modal", function(e, t, i) {
_i_("ec2:116");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("ec2:1051"), B.lightbox.show(".bbg-pending-bbtool-invite", {
customWrapperClassName:"bbg-pending-bbtool-invite-modal"
}, function() {
_i_("ec2:1402"), $(".bbg-pending-bbtool-invite-modal").on("click", ".bbg-pending-bbtool-invite__hide", function() {
_i_("ec2:1588"), B.lightbox.hide(), _r_();
}), _r_();
}), _r_();
}
}), _r_();
}), B.define("component/company/employeejoin-resend-invite", function(e, t, i) {
_i_("ec2:117");
var n = e("component");
i.exports = n.extend({
init:function() {
_i_("ec2:1052"), this._bindEvents(), _r_();
},
_bindEvents:function() {
_i_("ec2:1053"), this.$el.find(".bbg-employeejoin-pending-invite__resend-invite").on("click", function() {
_i_("ec2:1522"), this.$el.find(".bbg-employeejoin-pending-invite__resend-invite").hide(), this._resendInvite(), _r_();
}.bind(this)), _r_();
},
_resendInvite:function() {
_i_("ec2:1054"), $.ajax({
url:B.env.b_secure_domain + "/company/resend_invite",
type:"GET",
data:{},
xhrFields:{
withCredentials:!0
},
success:function(e) {
_i_("ec2:1589"), "ok" === e.status ? this._showSuccess() :e.error && this._showError({
no_auth:"Please login",
user_auth_failed:"Please login first",
missing_invitation:"Server error",
already_connected:"You are already connected to the company",
recently_sent:"Invitation was sent was less then 30 minutes ago"
}[e.error] || "Error"), _r_();
}.bind(this),
error:function() {
_i_("ec2:1590"), this._showError("Error"), _r_();
}.bind(this)
}), _r_();
},
_showSuccess:function() {
_i_("ec2:1055"), this.$el.append('<div class="bbg-employeejoin-pending-invite__success">Invitation sent</div>'), _r_();
},
_showError:function(e) {
_i_("ec2:1056"), this.$el.append('<div class="bbg-employeejoin-pending-invite__error">' + e + "</div>"), _r_();
}
}), _r_();
}), B.when({
condition:"mdot" !== B.env.b_site_type && B.env.b_has_abandoned_cart_data
}).run(function(e) {
_i_("ec2:118");
var t = e("jquery"), i = "BOeaRKbRRDVaMeLJXNMaHe", n = function(e) {
_i_("ec2:502"), (e.type.match("abandoned-cart-growl-notification") || "abandoned-cart" === e.type) && (B.et.stage(i, 1), "hotel" === B.env.b_action ? B.et.stage(i, 2) :"searchresults" === B.env.b_action && B.et.stage(i, 3)), _r_();
};
"tdot" === B.env.b_site_type ? t(window).on("growl-shown", function(e, t) {
_i_("ec2:850"), n(t), _r_();
}) :B.events && B.events.on("growl:show", function(e) {
_i_("ec2:1057"), n(e), _r_();
}), _r_();
}), function() {
"use strict";
_i_("ec2:119"), B.when({
events:"ready",
condition:B.env.b_has_abandoned_cart_data && "www" === B.env.b_site_type
}).run(function() {
_i_("ec2:503");
function e(e) {
return _i_("ec2:851"), _r_($(e).parents(".abandoned-cart-growl-notification a"));
}
$(document).on("mouseenter", ".abandoned-cart-growl-item-hotel-info__hotel_name.link-to-hp", function(t) {
_i_("ec2:1155"), e(t.target).addClass("bp_sca_growl_hp_link_active"), _r_();
}), $(document).on("mouseleave", ".abandoned-cart-growl-item-hotel-info__hotel_name.link-to-hp", function(t) {
_i_("ec2:1156"), e(t.target).removeClass("bp_sca_growl_hp_link_active"), _r_();
}), $(document).on("click", "a.abandoned-cart-growl-notification, .abandoned-cart-growl-notification a", function(e) {
_i_("ec2:1157"), $(e.target).is(".abandoned-cart-growl-item-hotel-info__hotel_name") && (e.preventDefault(), e.stopPropagation(), window.open($(e.target).attr("data-hotel-page-url"), "_blank").focus()), _r_();
}), _r_();
}), _r_();
}(), function() {
_i_("ec2:120"), B.when({
experiment:"HBVXGZGZVeDJdUDZHe",
events:"ready"
}).run(function(e) {
_i_("ec2:504");
var t = e("jquery");
booking.events.on("growl:growlClosedManually", function(e) {
_i_("ec2:1158"), e && e.type.indexOf("abandoned-cart-growl-notification") && e.growlElem.attr("data-cart-id") && t.ajax({
method:"POST",
url:"/hide_sca_data",
data:{
cart_id:e.growlElem.attr("data-cart-id")
},
success:function(e) {}
}), _r_();
}), _r_();
}), _r_();
}(), B.when({
events:"ready",
condition:B.env.b_has_abandoned_cart_data
}).run(function(e) {
_i_("ec2:121");
var t = e("jquery"), i = "HBVXGYVVPXIHERdaKe";
function n(e) {
_i_("ec2:266");
var t = e && e.type ? e.type.toString() :"";
(t.match("abandoned-cart-growl-notification") || "abandoned-cart" === t) && (B.et.stage(i, 1), "www" === B.env.b_site_type ? B.et.stage(i, 2) :"tdot" === B.env.b_site_type ? B.et.stage(i, 3) :"mdot" === B.env.b_site_type && B.et.stage(i, 4)), _r_();
}
"www" === B.env.b_site_type ? B.events && B.events.on("growl:show", function(e) {
_i_("ec2:1058"), n(e), _r_();
}) :"tdot" === B.env.b_site_type ? t(window).on("growl-shown", function(e, t) {
_i_("ec2:1059"), n(t), _r_();
}) :"mdot" === B.env.b_site_type && B.eventEmitter && B.eventNames && B.eventEmitter.on(B.eventNames.GROWL_SHOWN, function(e, t) {
_i_("ec2:1205"), n(t), _r_();
}), _r_();
}), function() {
_i_("ec2:122");
var e = "HBVXGAZEUZKTGC";
B.when({
events:"ready",
condition:"www" === B.env.b_site_type,
experiment:e
}).run(function(t) {
_i_("ec2:505");
var i = t("jquery"), n = i(".popover_content--sca_cart");
if (!n.length) return _r_();
function r() {
_i_("ec2:852"), 0 === i(".sca_cart__li").length && (i(".sca_cart__header--full_state", n).hide(), i(".sca_cart__empty_state", n).show()), _r_();
}
function o(e) {
_i_("ec2:853"), i(".sca_cart__li[data-cart-id=" + e + "]", n).remove(), _r_();
}
i(".sca_cart__li_close").on("click", function(t) {
_i_("ec2:1159"), t.preventDefault(), t.stopPropagation(), B.et.customGoal(e, 4);
var n = i(t.target).attr("data-cart-id");
i.ajax({
method:"POST",
url:"/hide_sca_data",
data:{
cart_id:n
},
success:function() {
_i_("ec2:1546"), o(n), r(), _r_();
}
}), _r_();
}), _r_();
}), _r_();
}(), function() {
_i_("ec2:123");
var e = "HBOZQLTPeEbFPYRLSFPeUeHO", t = "HBVXGAZEUZKTGC";
B.when({
events:"ready",
condition:"www" === B.env.b_site_type,
experiment:e
}).run(function(e) {
if (_i_("ec2:506"), B.et.track(t) <= 1) return _r_();
var i = e("jquery"), n = booking[sNSExperiments].user_center_bar, r = i(".popover_content--sca_cart .popover_footer");
i(".sca-cart-feedback").length && i(".sca-cart-feedback").on("feedbackInline_submit", function() {
_i_("ec2:1293"), n.hideDropdowns(), r.hide(), _r_();
}), _r_();
}), _r_();
}(), B.when({
condition:339530 == B.env.aid && "https" == B.env.b_protocol && 1 == B.env.b_is_landing && 0 == B.env.auth_level && "www" === B.env.b_site_type,
events:"ready",
action:"city",
experiment:"HMedKNKNKZEXROfNKOVFbXZNePeae"
}).run(function(e) {
_i_("ec2:124"), B.command("show-auth-lightbox").run(), _r_();
}), B.define("component/destination-os/uber-optin", function(e, t, i) {
"use strict";
_i_("ec2:125");
var n = "transport_uber_banner--opted-in", r = "t_uber_opted";
return _r_(e("component").extend({
init:function() {
if (_i_("ec2:854"), !$ || !$.cookie) return _r_();
var e = this.$el, t = e.data("hash");
if (e.data("clear")) return $.cookie(r, "1", {
expires:-1,
path:"/",
domain:B.env.b_domain_end
}), _r_();
e.on("change", "[data-optin]", function(i) {
_i_("ec2:1294"), e.toggleClass(n), i.target.checked ? $.cookie(r, "1", {
path:"/",
domain:B.env.b_domain_end
}) :($.cookie(r, "1", {
expires:-1,
path:"/",
domain:B.env.b_domain_end
}), t && B.et.customGoal(t, 5)), _r_();
}), "1" == $.cookie(r) && (e.addClass(n), e.find("[data-optin]").prop("checked", !0)), _r_();
}
}));
}), function(e) {
"use strict";
_i_("ec2:127"), "function" == typeof define && define.amd ? define([ "jquery" ], e) :"undefined" != typeof exports ? module.exports = e(require("jquery")) :e(jQuery), _r_();
}(function(e) {
"use strict";
_i_("ec2:126");
var t = window.Slick || {};
t = function() {
_i_("ec2:614");
var t = 0;
function i(i, n) {
_i_("ec2:1060");
var r, o, a, s = this;
if (s.defaults = {
accessibility:!0,
adaptiveHeight:!1,
appendArrows:e(i),
appendDots:e(i),
arrows:!0,
asNavFor:null,
prevArrow:'<button type="button" data-role="none" class="slick-prev" aria-label="previous">Previous</button>',
nextArrow:'<button type="button" data-role="none" class="slick-next" aria-label="next">Next</button>',
autoplay:!1,
autoplaySpeed:3e3,
centerMode:!1,
centerPadding:"50px",
cssEase:"ease",
customPaging:function(e, t) {
return _i_("ec2:1523"), _r_('<button type="button" data-role="none">' + (t + 1) + "</button>");
},
dots:!1,
dotsClass:"slick-dots",
draggable:!0,
easing:"linear",
edgeFriction:.35,
fade:!1,
focusOnSelect:!1,
infinite:!0,
initialSlide:0,
lazyLoad:"ondemand",
mobileFirst:!1,
pauseOnHover:!0,
pauseOnDotsHover:!1,
respondTo:"window",
responsive:null,
rtl:!1,
slide:"",
slidesToShow:1,
slidesToScroll:1,
speed:500,
keydownOverride:!1,
keydownSpeed:500,
swipe:!0,
swipeToSlide:!1,
touchMove:!0,
touchThreshold:5,
useCSS:!0,
variableWidth:!1,
vertical:!1,
waitForAnimate:!0
}, s.initials = {
animating:!1,
dragging:!1,
autoPlayTimer:null,
currentDirection:0,
currentLeft:null,
currentSlide:0,
direction:1,
currentSpeed:null,
iskeyboardEvent:!1,
$dots:null,
listWidth:null,
listHeight:null,
loadIndex:0,
$nextArrow:null,
$prevArrow:null,
slideCount:null,
slideWidth:null,
$slideTrack:null,
$slides:null,
sliding:!1,
slideOffset:0,
swipeLeft:null,
$list:null,
touchObject:{},
transformsEnabled:!1
}, e.extend(s, s.initials), s.activeBreakpoint = null, s.animType = null, s.animProp = null, s.breakpoints = [], s.breakpointSettings = [], s.cssTransitions = !1, s.hidden = "hidden", s.paused = !1, s.positionProp = null, s.respondTo = null, s.shouldClick = !0, s.$slider = e(i), s.$slidesCache = null, s.transformType = null, s.transitionType = null, s.visibilityChange = "visibilitychange", s.windowWidth = 0, s.windowTimer = null, r = e(i).data("slick") || {}, s.options = e.extend({}, s.defaults, r, n), s.currentSlide = s.options.initialSlide, s.originalSettings = s.options, o = s.options.responsive || null, o && o.length > -1) {
s.respondTo = s.options.respondTo || "window";
for (a in o) o.hasOwnProperty(a) && (s.breakpoints.push(o[a].breakpoint), s.breakpointSettings[o[a].breakpoint] = o[a].settings);
s.breakpoints.sort(function(e, t) {
return _i_("ec2:1524"), _r_(s.options.mobileFirst === !0 ? e - t :t - e);
});
}
"undefined" != typeof document.mozHidden ? (s.hidden = "mozHidden", s.visibilityChange = "mozvisibilitychange") :"undefined" != typeof document.msHidden ? (s.hidden = "msHidden", s.visibilityChange = "msvisibilitychange") :"undefined" != typeof document.webkitHidden && (s.hidden = "webkitHidden", s.visibilityChange = "webkitvisibilitychange"), s.autoPlay = e.proxy(s.autoPlay, s), s.autoPlayClear = e.proxy(s.autoPlayClear, s), s.changeSlide = e.proxy(s.changeSlide, s), s.clickHandler = e.proxy(s.clickHandler, s), s.selectHandler = e.proxy(s.selectHandler, s), s.setPosition = e.proxy(s.setPosition, s), s.swipeHandler = e.proxy(s.swipeHandler, s), s.dragHandler = e.proxy(s.dragHandler, s), s.keyHandler = e.proxy(s.keyHandler, s), s.autoPlayIterator = e.proxy(s.autoPlayIterator, s), s.instanceUid = t++, s.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, s.init(), s.checkResponsive(!0), _r_();
}
return _r_(i);
}(), t.prototype.addSlide = t.prototype.slickAdd = function(t, i, n) {
_i_("ec2:615");
var r = this;
if ("boolean" == typeof i) n = i, i = null; else if (0 > i || i >= r.slideCount) return _r_(!1);
r.unload(), "number" == typeof i ? 0 === i && 0 === r.$slides.length ? e(t).appendTo(r.$slideTrack) :n ? e(t).insertBefore(r.$slides.eq(i)) :e(t).insertAfter(r.$slides.eq(i)) :n === !0 ? e(t).prependTo(r.$slideTrack) :e(t).appendTo(r.$slideTrack), r.$slides = r.$slideTrack.children(this.options.slide), r.$slideTrack.children(this.options.slide).detach(), r.$slideTrack.append(r.$slides), r.$slides.each(function(t, i) {
_i_("ec2:1206"), e(i).attr("data-slick-index", t), _r_();
}), r.$slidesCache = r.$slides, r.reinit(), _r_();
}, t.prototype.animateHeight = function() {
_i_("ec2:507");
var e = this;
if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
e.$list.animate({
height:t
}, e.options.speed);
}
_r_();
}, t.prototype.animateSlide = function(t, i) {
_i_("ec2:508");
var n = {}, r = this;
r.animateHeight(), r.options.rtl === !0 && r.options.vertical === !1 && (t = -t), r.transformsEnabled === !1 ? r.options.vertical === !1 ? r.$slideTrack.animate({
left:t
}, r.options.speed, r.options.easing, i) :r.$slideTrack.animate({
top:t
}, r.options.speed, r.options.easing, i) :r.cssTransitions === !1 ? (r.options.rtl === !0 && (r.currentLeft = -r.currentLeft), e({
animStart:r.currentLeft
}).animate({
animStart:t
}, {
duration:r.options.speed,
easing:r.options.easing,
step:function(e) {
_i_("ec2:1547"), e = Math.ceil(e), r.options.vertical === !1 ? (n[r.animType] = "translate(" + e + "px, 0px)", r.$slideTrack.css(n)) :(n[r.animType] = "translate(0px," + e + "px)", r.$slideTrack.css(n)), _r_();
},
complete:function() {
_i_("ec2:1548"), i && i.call(), _r_();
}
})) :(r.applyTransition(), t = Math.ceil(t), r.options.vertical === !1 ? n[r.animType] = "translate3d(" + t + "px, 0px, 0px)" :n[r.animType] = "translate3d(0px," + t + "px, 0px)", r.$slideTrack.css(n), i && setTimeout(function() {
_i_("ec2:1549"), r.disableTransition(), i.call(), _r_();
}, r.options.speed)), _r_();
}, t.prototype.asNavFor = function(t) {
_i_("ec2:509");
var i = this, n = null !== i.options.asNavFor ? e(i.options.asNavFor).slick("getSlick") :null;
null !== n && n.slideHandler(t, !0), _r_();
}, t.prototype.applyTransition = function(e) {
_i_("ec2:510");
var t = this, i = {};
t.options.fade === !1 ? i[t.transitionType] = t.transformType + " " + t.options.speed + "ms " + t.options.cssEase :i[t.transitionType] = "opacity " + t.options.speed + "ms " + t.options.cssEase, t.options.fade === !1 ? t.$slideTrack.css(i) :t.$slides.eq(e).css(i), _r_();
}, t.prototype.autoPlay = function() {
_i_("ec2:511");
var e = this;
e.autoPlayTimer && clearInterval(e.autoPlayTimer), e.slideCount > e.options.slidesToShow && e.paused !== !0 && (e.autoPlayTimer = setInterval(e.autoPlayIterator, e.options.autoplaySpeed)), _r_();
}, t.prototype.autoPlayClear = function() {
_i_("ec2:512");
var e = this;
e.autoPlayTimer && clearInterval(e.autoPlayTimer), _r_();
}, t.prototype.autoPlayIterator = function() {
_i_("ec2:513");
var e = this;
e.options.infinite === !1 ? 1 === e.direction ? (e.currentSlide + 1 === e.slideCount - 1 && (e.direction = 0), e.slideHandler(e.currentSlide + e.options.slidesToScroll)) :(e.currentSlide - 1 === 0 && (e.direction = 1), e.slideHandler(e.currentSlide - e.options.slidesToScroll)) :e.slideHandler(e.currentSlide + e.options.slidesToScroll), _r_();
}, t.prototype.buildArrows = function() {
_i_("ec2:514");
var t = this;
t.options.arrows === !0 && t.slideCount > t.options.slidesToShow && (t.$prevArrow = e(t.options.prevArrow), t.$nextArrow = e(t.options.nextArrow), t.htmlExpr.test(t.options.prevArrow) && t.$prevArrow.appendTo(t.options.appendArrows), t.htmlExpr.test(t.options.nextArrow) && t.$nextArrow.appendTo(t.options.appendArrows), t.options.infinite !== !0 && t.$prevArrow.addClass("slick-disabled")), _r_();
}, t.prototype.buildDots = function() {
_i_("ec2:515");
var t, i, n = this;
if (n.options.dots === !0 && n.slideCount > n.options.slidesToShow) {
for (i = '<ul class="' + n.options.dotsClass + '">', t = 0; t <= n.getDotCount(); t += 1) i += "<li>" + n.options.customPaging.call(this, n, t) + "</li>";
i += "</ul>", n.$dots = e(i).appendTo(n.options.appendDots), n.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false");
}
_r_();
}, t.prototype.buildOut = function() {
_i_("ec2:516");
var t = this;
t.$slides = t.$slider.children(t.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), t.slideCount = t.$slides.length, t.$slides.each(function(t, i) {
_i_("ec2:1160"), e(i).attr("data-slick-index", t), _r_();
}), t.$slidesCache = t.$slides, t.$slider.addClass("slick-slider"), t.$slideTrack = 0 === t.slideCount ? e('<div class="slick-track"/>').appendTo(t.$slider) :t.$slides.wrapAll('<div class="slick-track"/>').parent(), t.$list = t.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), t.$slideTrack.css("opacity", 0), (t.options.centerMode === !0 || t.options.swipeToSlide === !0) && (t.options.slidesToScroll = 1), e("img[data-lazy]", t.$slider).not("[src]").addClass("slick-loading"), t.setupInfinite(), t.buildArrows(), t.buildDots(), t.updateDots(), t.options.accessibility === !0 && t.$list.attr("tabIndex", 0), t.setSlideClasses("number" == typeof this.currentSlide ? this.currentSlide :0), t.options.draggable === !0 && t.$list.addClass("draggable"), _r_();
}, t.prototype.checkResponsive = function(t) {
_i_("ec2:517");
var i, n, r, o = this, a = o.$slider.width(), s = window.innerWidth || e(window).width();
if ("window" === o.respondTo ? r = s :"slider" === o.respondTo ? r = a :"min" === o.respondTo && (r = Math.min(s, a)), o.originalSettings.responsive && o.originalSettings.responsive.length > -1 && null !== o.originalSettings.responsive) {
n = null;
for (i in o.breakpoints) o.breakpoints.hasOwnProperty(i) && (o.originalSettings.mobileFirst === !1 ? r < o.breakpoints[i] && (n = o.breakpoints[i]) :r > o.breakpoints[i] && (n = o.breakpoints[i]));
null !== n ? null !== o.activeBreakpoint ? n !== o.activeBreakpoint && (o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick() :(o.options = e.extend({}, o.originalSettings, o.breakpointSettings[n]), t === !0 && (o.currentSlide = o.options.initialSlide), o.refresh())) :(o.activeBreakpoint = n, "unslick" === o.breakpointSettings[n] ? o.unslick() :(o.options = e.extend({}, o.originalSettings, o.breakpointSettings[n]), t === !0 && (o.currentSlide = o.options.initialSlide), o.refresh())) :null !== o.activeBreakpoint && (o.activeBreakpoint = null, o.options = o.originalSettings, t === !0 && (o.currentSlide = o.options.initialSlide), o.refresh());
}
_r_();
}, t.prototype.changeSlide = function(t, i) {
_i_("ec2:518");
var n, r, o, a = this, s = e(t.target);
switch (s.is("a") && t.preventDefault(), o = a.slideCount % a.options.slidesToScroll !== 0, n = o ? 0 :(a.slideCount - a.currentSlide) % a.options.slidesToScroll, t.data.message) {
case "previous":
r = 0 === n ? a.options.slidesToScroll :a.options.slidesToShow - n, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide - r, !1, i);
break;

case "next":
r = 0 === n ? a.options.slidesToScroll :n, a.slideCount > a.options.slidesToShow && a.slideHandler(a.currentSlide + r, !1, i);
break;

case "index":
var _ = 0 === t.data.index ? 0 :t.data.index || e(t.target).parent().index() * a.options.slidesToScroll;
a.slideHandler(a.checkNavigable(_), !1, i);
break;

default:
return _r_();
}
_r_();
}, t.prototype.checkNavigable = function(e) {
_i_("ec2:519");
var t, i, n = this;
if (t = n.getNavigableIndexes(), i = 0, e > t[t.length - 1]) e = t[t.length - 1]; else for (var r in t) {
if (e < t[r]) {
e = i;
break;
}
i = t[r];
}
return _r_(e);
}, t.prototype.clickHandler = function(e) {
_i_("ec2:520");
var t = this;
t.shouldClick === !1 && (e.stopImmediatePropagation(), e.stopPropagation(), e.preventDefault()), _r_();
}, t.prototype.destroy = function() {
_i_("ec2:521");
var t = this;
t.autoPlayClear(), t.touchObject = {}, e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(), t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-center slick-visible").attr("aria-hidden", "true").removeAttr("data-slick-index").css({
position:"",
left:"",
top:"",
zIndex:"",
opacity:"",
width:""
}), t.$slider.removeClass("slick-slider"), t.$slider.removeClass("slick-initialized"), t.$list.unbind(".slick"), e(window).unbind(".slick-" + t.instanceUid), e(document).unbind(".slick-" + t.instanceUid), t.$slider.html(t.$slides), _r_();
}, t.prototype.disableTransition = function(e) {
_i_("ec2:522");
var t = this, i = {};
i[t.transitionType] = "", t.options.fade === !1 ? t.$slideTrack.css(i) :t.$slides.eq(e).css(i), _r_();
}, t.prototype.fadeSlide = function(e, t) {
_i_("ec2:523");
var i = this;
i.cssTransitions === !1 ? (i.$slides.eq(e).css({
zIndex:1e3
}), i.options.speed ? i.$slides.eq(e).animate({
opacity:1
}, i.options.speed, i.options.easing, t) :i.$slides.eq(e).show(i.options.speed, t)) :(i.applyTransition(e), i.$slides.eq(e).css({
opacity:1,
zIndex:1e3
}), t && setTimeout(function() {
_i_("ec2:1473"), i.disableTransition(e), t.call(), _r_();
}, i.options.speed)), _r_();
}, t.prototype.filterSlides = t.prototype.slickFilter = function(e) {
_i_("ec2:616");
var t = this;
null !== e && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.filter(e).appendTo(t.$slideTrack), t.reinit()), _r_();
}, t.prototype.getCurrent = t.prototype.slickCurrentSlide = function() {
_i_("ec2:617");
var e = this;
return _r_(e.currentSlide);
}, t.prototype.getDotCount = function() {
_i_("ec2:524");
var e = this, t = 0, i = 0, n = 0;
if (e.options.infinite === !0) n = Math.ceil(e.slideCount / e.options.slidesToScroll); else if (e.options.centerMode === !0) n = e.slideCount; else for (;t < e.slideCount; ) ++n, t = i + e.options.slidesToShow, i += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll :e.options.slidesToShow;
return _r_(n - 1);
}, t.prototype.getLeft = function(e) {
_i_("ec2:525");
var t, i, n, r = this, o = 0;
return r.slideOffset = 0, i = r.$slides.first().outerHeight(), r.options.infinite === !0 ? (r.slideCount > r.options.slidesToShow && (r.slideOffset = r.slideWidth * r.options.slidesToShow * -1, o = i * r.options.slidesToShow * -1), r.slideCount % r.options.slidesToScroll !== 0 && e + r.options.slidesToScroll > r.slideCount && r.slideCount > r.options.slidesToShow && (e > r.slideCount ? (r.slideOffset = (r.options.slidesToShow - (e - r.slideCount)) * r.slideWidth * -1, o = (r.options.slidesToShow - (e - r.slideCount)) * i * -1) :(r.slideOffset = r.slideCount % r.options.slidesToScroll * r.slideWidth * -1, o = r.slideCount % r.options.slidesToScroll * i * -1))) :e + r.options.slidesToShow > r.slideCount && (r.slideOffset = (e + r.options.slidesToShow - r.slideCount) * r.slideWidth, o = (e + r.options.slidesToShow - r.slideCount) * i), r.slideCount <= r.options.slidesToShow && (r.slideOffset = 0, o = 0), r.options.centerMode === !0 && r.options.infinite === !0 ? r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2) - r.slideWidth :r.options.centerMode === !0 && (r.slideOffset = 0, r.slideOffset += r.slideWidth * Math.floor(r.options.slidesToShow / 2)), t = r.options.vertical === !1 ? e * r.slideWidth * -1 + r.slideOffset :e * i * -1 + o, r.options.variableWidth === !0 && (n = r.slideCount <= r.options.slidesToShow || r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(e) :r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow), t = n[0] ? -1 * n[0].offsetLeft :0, r.options.centerMode === !0 && (n = r.options.infinite === !1 ? r.$slideTrack.children(".slick-slide").eq(e) :r.$slideTrack.children(".slick-slide").eq(e + r.options.slidesToShow + 1), t = n[0] ? -1 * n[0].offsetLeft :0, t += (r.$list.width() - n.outerWidth()) / 2)), _r_(t);
}, t.prototype.getOption = t.prototype.slickGetOption = function(e) {
_i_("ec2:618");
var t = this;
return _r_(t.options[e]);
}, t.prototype.getNavigableIndexes = function() {
_i_("ec2:526");
var e, t = this, i = 0, n = 0, r = [];
for (t.options.infinite === !1 ? (e = t.slideCount - t.options.slidesToShow + 1, t.options.centerMode === !0 && (e = t.slideCount)) :(i = -1 * t.slideCount, n = -1 * t.slideCount, e = 2 * t.slideCount); e > i; ) r.push(i), i = n + t.options.slidesToScroll, n += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll :t.options.slidesToShow;
return _r_(r);
}, t.prototype.getSlick = function() {
return _i_("ec2:527"), _r_(this);
}, t.prototype.getSlideCount = function() {
_i_("ec2:528");
var t, i, n, r = this;
return n = r.options.centerMode === !0 ? r.slideWidth * Math.floor(r.options.slidesToShow / 2) :0, r.options.swipeToSlide === !0 ? (r.$slideTrack.find(".slick-slide").each(function(t, o) {
if (_i_("ec2:1295"), o.offsetLeft - n + e(o).outerWidth() / 2 > -1 * r.swipeLeft) return i = o, _r_(!1);
_r_();
}), t = Math.abs(e(i).attr("data-slick-index") - r.currentSlide) || 1, _r_(t)) :_r_(r.options.slidesToScroll);
}, t.prototype.goTo = t.prototype.slickGoTo = function(e, t) {
_i_("ec2:619");
var i = this;
i.changeSlide({
data:{
message:"index",
index:parseInt(e)
}
}, t), _r_();
}, t.prototype.init = function() {
_i_("ec2:529");
var t = this;
e(t.$slider).hasClass("slick-initialized") || (e(t.$slider).addClass("slick-initialized"), t.buildOut(), t.setProps(), t.startLoad(), t.loadSlider(), t.initializeEvents(), t.updateArrows(), t.updateDots()), t.$slider.trigger("init", [ t ]), _r_();
}, t.prototype.initArrowEvents = function() {
_i_("ec2:530");
var e = this;
e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.bind("click.slick", {
message:"previous"
}, e.changeSlide), e.$nextArrow.bind("click.slick", {
message:"next"
}, e.changeSlide)), _r_();
}, t.prototype.initDotEvents = function() {
_i_("ec2:531");
var t = this;
t.options.dots === !0 && t.slideCount > t.options.slidesToShow && e("li", t.$dots).bind("click.slick", {
message:"index"
}, t.changeSlide), t.options.dots === !0 && t.options.pauseOnDotsHover === !0 && t.options.autoplay === !0 && e("li", t.$dots).bind("mouseenter.slick", function() {
_i_("ec2:1474"), t.paused = !0, t.autoPlayClear(), _r_();
}).bind("mouseleave.slick", function() {
_i_("ec2:1296"), t.paused = !1, t.autoPlay(), _r_();
}), _r_();
}, t.prototype.initializeEvents = function() {
_i_("ec2:532");
var t = this;
t.initArrowEvents(), t.initDotEvents(), t.$list.bind("touchstart.slick mousedown.slick", {
action:"start"
}, t.swipeHandler), t.$list.bind("touchmove.slick mousemove.slick", {
action:"move"
}, t.swipeHandler), t.$list.bind("touchend.slick mouseup.slick", {
action:"end"
}, t.swipeHandler), t.$list.bind("touchcancel.slick mouseleave.slick", {
action:"end"
}, t.swipeHandler), t.$list.bind("click.slick", t.clickHandler), t.options.autoplay === !0 && (e(document).bind(t.visibilityChange, function() {
_i_("ec2:1297"), t.visibility(), _r_();
}), t.options.pauseOnHover === !0 && (t.$list.bind("mouseenter.slick", function() {
_i_("ec2:1475"), t.paused = !0, t.autoPlayClear(), _r_();
}), t.$list.bind("mouseleave.slick", function() {
_i_("ec2:1476"), t.paused = !1, t.autoPlay(), _r_();
}))), t.options.accessibility === !0 && e(document).bind("keydown.slick", t.keyHandler), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().bind("click.slick", t.selectHandler), e(window).bind("orientationchange.slick.slick-" + t.instanceUid, function() {
_i_("ec2:1161"), t.checkResponsive(), t.setPosition(), _r_();
}), e(window).bind("resize.slick.slick-" + t.instanceUid, function() {
_i_("ec2:1162"), e(window).width() !== t.windowWidth && (clearTimeout(t.windowDelay), t.windowDelay = window.setTimeout(function() {
_i_("ec2:1591"), t.windowWidth = e(window).width(), t.checkResponsive(), t.setPosition(), _r_();
}, 50)), _r_();
}), e("*[draggable!=true]", t.$slideTrack).bind("dragstart", function(e) {
_i_("ec2:1163"), e.preventDefault(), _r_();
}), e(window).bind("load.slick.slick-" + t.instanceUid, t.setPosition), e(document).bind("ready.slick.slick-" + t.instanceUid, t.setPosition), _r_();
}, t.prototype.initUI = function() {
_i_("ec2:533");
var e = this;
e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.show(), e.$nextArrow.show()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.show(), e.options.autoplay === !0 && e.autoPlay(), _r_();
}, t.prototype.keyHandler = function(e) {
_i_("ec2:534");
var t = this;
t.options.accessibility === !0 && t.options.keydownOverride === !0 && t.options.keydownSpeed && (t.iskeyboardEvent = !0, t.currentSpeed = t.options.speed, t.options.speed = t.options.keydownSpeed), 37 === e.keyCode && t.options.accessibility === !0 ? t.changeSlide({
data:{
message:t.options.rtl ? "next" :"previous"
}
}) :39 === e.keyCode && t.options.accessibility === !0 && t.changeSlide({
data:{
message:t.options.rtl ? "previous" :"next"
}
}), _r_();
}, t.prototype.lazyLoad = function() {
_i_("ec2:535");
var t, i, n, r, o = this;
function a(t) {
_i_("ec2:855"), e("img[data-lazy]", t).each(function() {
_i_("ec2:1298");
var t = e(this), i = e(this).attr("data-lazy");
t.load(function() {
_i_("ec2:1650"), t.animate({
opacity:1
}, 200), _r_();
}).css({
opacity:0
}).attr("src", i).removeAttr("data-lazy").removeClass("slick-loading"), _r_();
}), _r_();
}
o.options.centerMode === !0 ? o.options.infinite === !0 ? (n = o.currentSlide + (o.options.slidesToShow / 2 + 1), r = n + o.options.slidesToShow + 2) :(n = Math.max(0, o.currentSlide - (o.options.slidesToShow / 2 + 1)), r = 2 + (o.options.slidesToShow / 2 + 1) + o.currentSlide) :(n = o.options.infinite ? o.options.slidesToShow + o.currentSlide :o.currentSlide, r = n + o.options.slidesToShow, o.options.fade === !0 && (n > 0 && n--, r <= o.slideCount && r++)), t = o.$slider.find(".slick-slide").slice(n, r), a(t), o.slideCount <= o.options.slidesToShow ? (i = o.$slider.find(".slick-slide"), a(i)) :o.currentSlide >= o.slideCount - o.options.slidesToShow ? (i = o.$slider.find(".slick-cloned").slice(0, o.options.slidesToShow), a(i)) :0 === o.currentSlide && (i = o.$slider.find(".slick-cloned").slice(-1 * o.options.slidesToShow), a(i)), _r_();
}, t.prototype.loadSlider = function() {
_i_("ec2:536");
var e = this;
e.setPosition(), e.$slideTrack.css({
opacity:1
}), e.$slider.removeClass("slick-loading"), e.initUI(), "progressive" === e.options.lazyLoad && e.progressiveLazyLoad(), _r_();
}, t.prototype.next = t.prototype.slickNext = function() {
_i_("ec2:620");
var e = this;
e.changeSlide({
data:{
message:"next"
}
}), _r_();
}, t.prototype.pause = t.prototype.slickPause = function() {
_i_("ec2:621");
var e = this;
e.autoPlayClear(), e.paused = !0, _r_();
}, t.prototype.play = t.prototype.slickPlay = function() {
_i_("ec2:622");
var e = this;
e.paused = !1, e.autoPlay(), _r_();
}, t.prototype.postSlide = function(e) {
_i_("ec2:537");
var t = this;
t.$slider.trigger("afterChange", [ t, e ]), t.animating = !1, t.setPosition(), t.swipeLeft = null, t.options.autoplay === !0 && t.paused === !1 && t.autoPlay(), t.options.accessibility === !0 && t.options.keydownOverride === !0 && t.iskeyboardEvent === !0 && (t.iskeyboardEvent = !1, t.options.speed = t.currentSpeed), _r_();
}, t.prototype.prev = t.prototype.slickPrev = function() {
_i_("ec2:623");
var e = this;
e.changeSlide({
data:{
message:"previous"
}
}), _r_();
}, t.prototype.progressiveLazyLoad = function() {
_i_("ec2:538");
var t, i, n = this;
t = e("img[data-lazy]", n.$slider).length, t > 0 && (i = e("img[data-lazy]", n.$slider).first(), i.attr("src", i.attr("data-lazy")).removeClass("slick-loading").load(function() {
_i_("ec2:1477"), i.removeAttr("data-lazy"), n.progressiveLazyLoad(), n.options.adaptiveHeight === !0 && n.setPosition(), _r_();
}).error(function() {
_i_("ec2:1299"), i.removeAttr("data-lazy"), n.progressiveLazyLoad(), _r_();
})), _r_();
}, t.prototype.refresh = function() {
_i_("ec2:539");
var t = this, i = t.currentSlide;
t.destroy(), e.extend(t, t.initials), t.init(), t.changeSlide({
data:{
message:"index",
index:i
}
}, !0), _r_();
}, t.prototype.reinit = function() {
_i_("ec2:540");
var t = this;
t.$slides = t.$slideTrack.children(t.options.slide).addClass("slick-slide"), t.slideCount = t.$slides.length, t.currentSlide >= t.slideCount && 0 !== t.currentSlide && (t.currentSlide = t.currentSlide - t.options.slidesToScroll), t.slideCount <= t.options.slidesToShow && (t.currentSlide = 0), t.setProps(), t.setupInfinite(), t.buildArrows(), t.updateArrows(), t.initArrowEvents(), t.buildDots(), t.updateDots(), t.initDotEvents(), t.options.focusOnSelect === !0 && e(t.$slideTrack).children().bind("click.slick", t.selectHandler), t.setSlideClasses(0), t.setPosition(), t.$slider.trigger("reInit", [ t ]), _r_();
}, t.prototype.removeSlide = t.prototype.slickRemove = function(e, t, i) {
_i_("ec2:624");
var n = this;
if ("boolean" == typeof e ? (t = e, e = t === !0 ? 0 :n.slideCount - 1) :e = t === !0 ? --e :e, n.slideCount < 1 || 0 > e || e > n.slideCount - 1) return _r_(!1);
n.unload(), i === !0 ? n.$slideTrack.children().remove() :n.$slideTrack.children(this.options.slide).eq(e).remove(), n.$slides = n.$slideTrack.children(this.options.slide), n.$slideTrack.children(this.options.slide).detach(), n.$slideTrack.append(n.$slides), n.$slidesCache = n.$slides, n.reinit(), _r_();
}, t.prototype.setCSS = function(e) {
_i_("ec2:541");
var t, i, n = this, r = {};
n.options.rtl === !0 && (e = -e), t = "left" == n.positionProp ? Math.ceil(e) + "px" :"0px", i = "top" == n.positionProp ? Math.ceil(e) + "px" :"0px", r[n.positionProp] = e, n.transformsEnabled === !1 ? n.$slideTrack.css(r) :(r = {}, n.cssTransitions === !1 ? (r[n.animType] = "translate(" + t + ", " + i + ")", n.$slideTrack.css(r)) :(r[n.animType] = "translate3d(" + t + ", " + i + ", 0px)", n.$slideTrack.css(r))), _r_();
}, t.prototype.setDimensions = function() {
_i_("ec2:542");
var e = this;
if (e.options.vertical === !1 ? e.options.centerMode === !0 && e.$list.css({
padding:"0px " + e.options.centerPadding
}) :(e.$list.height(e.$slides.first().outerHeight(!0) * e.options.slidesToShow), e.options.centerMode === !0 && e.$list.css({
padding:e.options.centerPadding + " 0px"
})), e.listWidth = e.$list.width(), e.listHeight = e.$list.height(), e.options.vertical === !1 && e.options.variableWidth === !1) e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.width(Math.ceil(e.slideWidth * e.$slideTrack.children(".slick-slide").length)); else if (e.options.variableWidth === !0) {
var t = 0;
e.slideWidth = Math.ceil(e.listWidth / e.options.slidesToShow), e.$slideTrack.children(".slick-slide").each(function() {
_i_("ec2:1403"), t += e.listWidth, _r_();
}), e.$slideTrack.width(Math.ceil(t) + 1);
} else e.slideWidth = Math.ceil(e.listWidth), e.$slideTrack.height(Math.ceil(e.$slides.first().outerHeight(!0) * e.$slideTrack.children(".slick-slide").length));
var i = e.$slides.first().outerWidth(!0) - e.$slides.first().width();
e.options.variableWidth === !1 && e.$slideTrack.children(".slick-slide").width(e.slideWidth - i), _r_();
}, t.prototype.setFade = function() {
_i_("ec2:543");
var t, i = this;
i.$slides.each(function(n, r) {
_i_("ec2:1164"), t = i.slideWidth * n * -1, i.options.rtl === !0 ? e(r).css({
position:"relative",
right:t,
top:0,
zIndex:800,
opacity:0
}) :e(r).css({
position:"relative",
left:t,
top:0,
zIndex:800,
opacity:0
}), _r_();
}), i.$slides.eq(i.currentSlide).css({
zIndex:900,
opacity:1
}), _r_();
}, t.prototype.setHeight = function() {
_i_("ec2:544");
var e = this;
if (1 === e.options.slidesToShow && e.options.adaptiveHeight === !0 && e.options.vertical === !1) {
var t = e.$slides.eq(e.currentSlide).outerHeight(!0);
e.$list.css("height", t);
}
_r_();
}, t.prototype.setOption = t.prototype.slickSetOption = function(e, t, i) {
_i_("ec2:625");
var n = this;
n.options[e] = t, i === !0 && (n.unload(), n.reinit()), _r_();
}, t.prototype.setPosition = function() {
_i_("ec2:545");
var e = this;
e.setDimensions(), e.setHeight(), e.options.fade === !1 ? e.setCSS(e.getLeft(e.currentSlide)) :e.setFade(), e.$slider.trigger("setPosition", [ e ]), _r_();
}, t.prototype.setProps = function() {
_i_("ec2:546");
var e = this, t = document.body.style;
e.positionProp = e.options.vertical === !0 ? "top" :"left", "top" === e.positionProp ? e.$slider.addClass("slick-vertical") :e.$slider.removeClass("slick-vertical"), (void 0 !== t.WebkitTransition || void 0 !== t.MozTransition || void 0 !== t.msTransition) && e.options.useCSS === !0 && (e.cssTransitions = !0), void 0 !== t.OTransform && (e.animType = "OTransform", e.transformType = "-o-transform", e.transitionType = "OTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.MozTransform && (e.animType = "MozTransform", e.transformType = "-moz-transform", e.transitionType = "MozTransition", void 0 === t.perspectiveProperty && void 0 === t.MozPerspective && (e.animType = !1)), void 0 !== t.webkitTransform && (e.animType = "webkitTransform", e.transformType = "-webkit-transform", e.transitionType = "webkitTransition", void 0 === t.perspectiveProperty && void 0 === t.webkitPerspective && (e.animType = !1)), void 0 !== t.msTransform && (e.animType = "msTransform", e.transformType = "-ms-transform", e.transitionType = "msTransition", void 0 === t.msTransform && (e.animType = !1)), void 0 !== t.transform && e.animType !== !1 && (e.animType = "transform", e.transformType = "transform", e.transitionType = "transition"), e.transformsEnabled = null !== e.animType && e.animType !== !1, _r_();
}, t.prototype.setSlideClasses = function(e) {
_i_("ec2:547");
var t, i, n, r, o = this;
o.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true").removeClass("slick-center"), i = o.$slider.find(".slick-slide"), o.options.centerMode === !0 ? (t = Math.floor(o.options.slidesToShow / 2), o.options.infinite === !0 && (e >= t && e <= o.slideCount - 1 - t ? o.$slides.slice(e - t, e + t + 1).addClass("slick-active").attr("aria-hidden", "false") :(n = o.options.slidesToShow + e, i.slice(n - t + 1, n + t + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === e ? i.eq(i.length - 1 - o.options.slidesToShow).addClass("slick-center") :e === o.slideCount - 1 && i.eq(o.options.slidesToShow).addClass("slick-center")), o.$slides.eq(e).addClass("slick-center")) :e >= 0 && e <= o.slideCount - o.options.slidesToShow ? o.$slides.slice(e, e + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") :i.length <= o.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") :(r = o.slideCount % o.options.slidesToShow, n = o.options.infinite === !0 ? o.options.slidesToShow + e :e, o.options.slidesToShow == o.options.slidesToScroll && o.slideCount - e < o.options.slidesToShow ? i.slice(n - (o.options.slidesToShow - r), n + r).addClass("slick-active").attr("aria-hidden", "false") :i.slice(n, n + o.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === o.options.lazyLoad && o.lazyLoad(), _r_();
}, t.prototype.setupInfinite = function() {
_i_("ec2:548");
var t, i, n, r = this;
if (r.options.fade === !0 && (r.options.centerMode = !1), r.options.infinite === !0 && r.options.fade === !1 && (i = null, r.slideCount > r.options.slidesToShow)) {
for (n = r.options.centerMode === !0 ? r.options.slidesToShow + 1 :r.options.slidesToShow, t = r.slideCount; t > r.slideCount - n; t -= 1) i = t - 1, e(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - r.slideCount).prependTo(r.$slideTrack).addClass("slick-cloned");
for (t = 0; n > t; t += 1) i = t, e(r.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + r.slideCount).appendTo(r.$slideTrack).addClass("slick-cloned");
r.$slideTrack.find(".slick-cloned").find("[id]").each(function() {
_i_("ec2:1478"), e(this).attr("id", ""), _r_();
});
}
_r_();
}, t.prototype.selectHandler = function(t) {
_i_("ec2:549");
var i = this, n = parseInt(e(t.target).parents(".slick-slide").attr("data-slick-index"));
if (n || (n = 0), i.slideCount <= i.options.slidesToShow) return i.$slider.find(".slick-slide").removeClass("slick-active").attr("aria-hidden", "true"), i.$slides.eq(n).addClass("slick-active").attr("aria-hidden", "false"), i.options.centerMode === !0 && (i.$slider.find(".slick-slide").removeClass("slick-center"), i.$slides.eq(n).addClass("slick-center")), i.asNavFor(n), _r_();
i.slideHandler(n), _r_();
}, t.prototype.slideHandler = function(e, t, i) {
_i_("ec2:550");
var n, r, o, a = null, s = this;
if (t = t || !1, s.animating === !0 && s.options.waitForAnimate === !0) return _r_();
if (s.options.fade === !0 && s.currentSlide === e) return _r_();
if (s.slideCount <= s.options.slidesToShow) return _r_();
if (t === !1 && s.asNavFor(e), n = e, a = s.getLeft(n), o = s.getLeft(s.currentSlide), s.currentLeft = null === s.swipeLeft ? o :s.swipeLeft, s.options.infinite === !1 && s.options.centerMode === !1 && (0 > e || e > s.getDotCount() * s.options.slidesToScroll)) return s.options.fade === !1 && (n = s.currentSlide, i !== !0 ? s.animateSlide(o, function() {
_i_("ec2:1550"), s.postSlide(n), _r_();
}) :s.postSlide(n)), _r_();
if (s.options.infinite === !1 && s.options.centerMode === !0 && (0 > e || e > s.slideCount - s.options.slidesToScroll)) return s.options.fade === !1 && (n = s.currentSlide, i !== !0 ? s.animateSlide(o, function() {
_i_("ec2:1592"), s.postSlide(n), _r_();
}) :s.postSlide(n)), _r_();
if (s.options.autoplay === !0 && clearInterval(s.autoPlayTimer), r = 0 > n ? s.slideCount % s.options.slidesToScroll !== 0 ? s.slideCount - s.slideCount % s.options.slidesToScroll :s.slideCount + n :n >= s.slideCount ? s.slideCount % s.options.slidesToScroll !== 0 ? 0 :n - s.slideCount :n, s.animating = !0, s.$slider.trigger("beforeChange", [ s, s.currentSlide, r ]), s.currentSlide = r, s.setSlideClasses(s.currentSlide), s.updateDots(), s.updateArrows(), s.options.fade === !0) return i !== !0 ? s.fadeSlide(r, function() {
_i_("ec2:1479"), s.postSlide(r), _r_();
}) :s.postSlide(r), s.animateHeight(), _r_();
i !== !0 ? s.animateSlide(a, function() {
_i_("ec2:1300"), s.postSlide(r), _r_();
}) :s.postSlide(r), _r_();
}, t.prototype.startLoad = function() {
_i_("ec2:551");
var e = this;
e.options.arrows === !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.hide(), e.$nextArrow.hide()), e.options.dots === !0 && e.slideCount > e.options.slidesToShow && e.$dots.hide(), e.$slider.addClass("slick-loading"), _r_();
}, t.prototype.swipeDirection = function() {
_i_("ec2:552");
var e, t, i, n, r = this;
if (e = r.touchObject.startX - r.touchObject.curX, t = r.touchObject.startY - r.touchObject.curY, i = Math.atan2(t, e), n = Math.round(180 * i / Math.PI), 0 > n && (n = 360 - Math.abs(n)), 45 >= n && n >= 0) return _r_(r.options.rtl === !1 ? "left" :"right");
if (360 >= n && n >= 315) return _r_(r.options.rtl === !1 ? "left" :"right");
if (n >= 135 && 225 >= n) return _r_(r.options.rtl === !1 ? "right" :"left");
return _r_("vertical");
}, t.prototype.swipeEnd = function(e) {
_i_("ec2:553");
var t, i = this;
if (i.dragging = !1, i.shouldClick = i.touchObject.swipeLength > 10 ? !1 :!0, void 0 === i.touchObject.curX) return _r_(!1);
if (i.touchObject.edgeHit === !0 && i.$slider.trigger("edge", [ i, i.swipeDirection() ]), i.touchObject.swipeLength >= i.touchObject.minSwipe) switch (i.swipeDirection()) {
case "left":
t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide + i.getSlideCount()) :i.currentSlide + i.getSlideCount(), i.slideHandler(t), i.currentDirection = 0, i.touchObject = {}, i.$slider.trigger("swipe", [ i, "left" ]);
break;

case "right":
t = i.options.swipeToSlide ? i.checkNavigable(i.currentSlide - i.getSlideCount()) :i.currentSlide - i.getSlideCount(), i.slideHandler(t), i.currentDirection = 1, i.touchObject = {}, i.$slider.trigger("swipe", [ i, "right" ]);
} else i.touchObject.startX !== i.touchObject.curX && (i.slideHandler(i.currentSlide), i.touchObject = {});
_r_();
}, t.prototype.swipeHandler = function(e) {
_i_("ec2:554");
var t = this;
if (t.options.swipe === !1 || "ontouchend" in document && t.options.swipe === !1) return _r_();
if (t.options.draggable === !1 && -1 !== e.type.indexOf("mouse")) return _r_();
switch (t.touchObject.fingerCount = e.originalEvent && void 0 !== e.originalEvent.touches ? e.originalEvent.touches.length :1, t.touchObject.minSwipe = t.listWidth / t.options.touchThreshold, e.data.action) {
case "start":
t.swipeStart(e);
break;

case "move":
t.swipeMove(e);
break;

case "end":
t.swipeEnd(e);
}
_r_();
}, t.prototype.swipeMove = function(e) {
_i_("ec2:555");
var t, i, n, r, o, a = this;
if (o = void 0 !== e.originalEvent ? e.originalEvent.touches :null, !a.dragging || o && 1 !== o.length) return _r_(!1);
if (t = a.getLeft(a.currentSlide), a.touchObject.curX = void 0 !== o ? o[0].pageX :e.clientX, a.touchObject.curY = void 0 !== o ? o[0].pageY :e.clientY, a.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(a.touchObject.curX - a.touchObject.startX, 2))), i = a.swipeDirection(), "vertical" === i) return _r_();
if (void 0 !== e.originalEvent && a.touchObject.swipeLength > 4 && e.preventDefault(), r = (a.options.rtl === !1 ? 1 :-1) * (a.touchObject.curX > a.touchObject.startX ? 1 :-1), n = a.touchObject.swipeLength, a.touchObject.edgeHit = !1, a.options.infinite === !1 && (0 === a.currentSlide && "right" === i || a.currentSlide >= a.getDotCount() && "left" === i) && (n = a.touchObject.swipeLength * a.options.edgeFriction, a.touchObject.edgeHit = !0), a.options.vertical === !1 ? a.swipeLeft = t + n * r :a.swipeLeft = t + n * (a.$list.height() / a.listWidth) * r, a.options.fade === !0 || a.options.touchMove === !1) return _r_(!1);
if (a.animating === !0) return a.swipeLeft = null, _r_(!1);
a.setCSS(a.swipeLeft), _r_();
}, t.prototype.swipeStart = function(e) {
_i_("ec2:556");
var t, i = this;
if (1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, _r_(!1);
void 0 !== e.originalEvent && void 0 !== e.originalEvent.touches && (t = e.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== t ? t.pageX :e.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== t ? t.pageY :e.clientY, i.dragging = !0, _r_();
}, t.prototype.unfilterSlides = t.prototype.slickUnfilter = function() {
_i_("ec2:626");
var e = this;
null !== e.$slidesCache && (e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.appendTo(e.$slideTrack), e.reinit()), _r_();
}, t.prototype.unload = function() {
_i_("ec2:557");
var t = this;
e(".slick-cloned", t.$slider).remove(), t.$dots && t.$dots.remove(), t.$prevArrow && "object" != typeof t.options.prevArrow && t.$prevArrow.remove(), t.$nextArrow && "object" != typeof t.options.nextArrow && t.$nextArrow.remove(), t.$slides.removeClass("slick-slide slick-active slick-visible").attr("aria-hidden", "true").css("width", ""), _r_();
}, t.prototype.unslick = function() {
_i_("ec2:558");
var e = this;
e.destroy(), _r_();
}, t.prototype.updateArrows = function() {
_i_("ec2:559");
var e = this;
e.options.arrows === !0 && e.options.infinite !== !0 && e.slideCount > e.options.slidesToShow && (e.$prevArrow.removeClass("slick-disabled"), e.$nextArrow.removeClass("slick-disabled"), 0 === e.currentSlide ? (e.$prevArrow.addClass("slick-disabled"), e.$nextArrow.removeClass("slick-disabled")) :e.currentSlide >= e.slideCount - e.options.slidesToShow && e.options.centerMode === !1 ? (e.$nextArrow.addClass("slick-disabled"), e.$prevArrow.removeClass("slick-disabled")) :e.currentSlide >= e.slideCount - 1 && e.options.centerMode === !0 && (e.$nextArrow.addClass("slick-disabled"), e.$prevArrow.removeClass("slick-disabled"))), _r_();
}, t.prototype.updateDots = function() {
_i_("ec2:560");
var e = this;
null !== e.$dots && (e.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), e.$dots.find("li").eq(Math.floor(e.currentSlide / e.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false")), _r_();
}, t.prototype.visibility = function() {
_i_("ec2:561");
var e = this;
document[e.hidden] ? (e.paused = !0, e.autoPlayClear()) :(e.paused = !1, e.autoPlay()), _r_();
}, e.fn.slick = function() {
_i_("ec2:562");
var e, i = this, n = arguments[0], r = Array.prototype.slice.call(arguments, 1), o = i.length, a = 0;
for (a; o > a; a++) if ("object" == typeof n || "undefined" == typeof n ? i[a].slick = new t(i[a], n) :e = i[a].slick[n].apply(i[a].slick, r), "undefined" != typeof e) return _r_(e);
return _r_(i);
}, e(function() {
_i_("ec2:563"), e("[data-slick]").slick(), _r_();
}), _r_();
}), B.define("component/dsf/showcase", [ "component", "jquery" ], function(e, t) {
return _i_("ec2:128"), _r_(e.extend({
init:function() {
_i_("ec2:856");
var e = t(".dsf-showcase__items");
e.on("init", function(e) {
_i_("ec2:1301"), e.currentTarget.style.overflow = "visible", _r_();
}), e.each(function() {
if (_i_("ec2:1302"), !t(this).children()) return _r_();
i(t(this), t(this).children().length), _r_();
});
function i(e, t) {
if (_i_("ec2:1165"), 1 >= t) return _r_();
var i = e.data("min"), n = "www" === B.env.b_site_type;
if ("undefined" != typeof i && (i = parseInt(i, 10), i > t)) return _r_();
e.slick({
dots:!1,
infinite:!1,
slidesToShow:2,
slidesToScroll:2,
focusOnSelect:!1,
swipeToSlide:!n,
draggable:!n,
rtl:Boolean(B.env.rtl)
}), _r_();
}
_r_();
}
}));
}), function(e) {
_i_("ec2:130");
var t = !1;
if ("function" == typeof define && define.amd && (define(e), t = !0), "object" == typeof exports && (module.exports = e(), t = !0), !t) {
var i = window.Cookies, n = window.Cookies = e();
n.noConflict = function() {
return _i_("ec2:860"), window.Cookies = i, _r_(n);
};
}
_r_();
}(function() {
_i_("ec2:129");
function e() {
_i_("ec2:267");
for (var e = 0, t = {}; e < arguments.length; e++) {
var i = arguments[e];
for (var n in i) t[n] = i[n];
}
return _r_(t);
}
function t(i) {
_i_("ec2:268");
function n(t, r, o) {
_i_("ec2:564");
var a;
if ("undefined" == typeof document) return _r_();
if (arguments.length > 1) {
if (o = e({
path:"/"
}, n.defaults, o), "number" == typeof o.expires) {
var s = new Date();
s.setMilliseconds(s.getMilliseconds() + 864e5 * o.expires), o.expires = s;
}
o.expires = o.expires ? o.expires.toUTCString() :"";
try {
a = JSON.stringify(r), /^[\{\[]/.test(a) && (r = a);
} catch (_) {}
r = i.write ? i.write(r, t) :encodeURIComponent(String(r)).replace(/%(23|24|26|2B|3A|3C|3E|3D|2F|3F|40|5B|5D|5E|60|7B|7D|7C)/g, decodeURIComponent), t = encodeURIComponent(String(t)), t = t.replace(/%(23|24|26|2B|5E|60|7C)/g, decodeURIComponent), t = t.replace(/[\(\)]/g, escape);
var c = "";
for (var l in o) {
if (!o[l]) continue;
if (c += "; " + l, o[l] === !0) continue;
c += "=" + o[l];
}
return _r_(document.cookie = t + "=" + r + c);
}
t || (a = {});
for (var d = document.cookie ? document.cookie.split("; ") :[], u = /(%[0-9A-Z]{2})+/g, h = 0; h < d.length; h++) {
var p = d[h].split("="), f = p.slice(1).join("=");
'"' === f.charAt(0) && (f = f.slice(1, -1));
try {
var g = p[0].replace(u, decodeURIComponent);
if (f = i.read ? i.read(f, g) :i(f, g) || f.replace(u, decodeURIComponent), this.json) try {
f = JSON.parse(f);
} catch (_) {}
if (t === g) {
a = f;
break;
}
t || (a[g] = f);
} catch (_) {}
}
return _r_(a);
}
return n.set = n, n.get = function(e) {
return _i_("ec2:857"), _r_(n.call(n, e));
}, n.getJSON = function() {
return _i_("ec2:858"), _r_(n.apply({
json:!0
}, [].slice.call(arguments)));
}, n.defaults = {}, n.remove = function(t, i) {
_i_("ec2:859"), n(t, "", e(i, {
expires:-1
})), _r_();
}, n.withConverter = t, _r_(n);
}
return _r_(t(function() {}));
}), function() {
_i_("ec2:158");
var e = this, t = e._, i = Array.prototype, n = Object.prototype, r = Function.prototype, o = i.push, a = i.slice, s = n.toString, _ = n.hasOwnProperty, c = Array.isArray, l = Object.keys, d = r.bind, u = Object.create, h = function() {}, p = function(e) {
if (_i_("ec2:628"), e instanceof p) return _r_(e);
if (!(this instanceof p)) return _r_(new p(e));
this._wrapped = e, _r_();
};
"undefined" != typeof exports ? ("undefined" != typeof module && module.exports && (exports = module.exports = p), exports._ = p) :e._ = p, p.VERSION = "1.8.3";
var f = function(e, t, i) {
if (_i_("ec2:629"), void 0 === t) return _r_(e);
switch (null == i ? 3 :i) {
case 1:
return _r_(function(i) {
return _i_("ec2:1303"), _r_(e.call(t, i));
});

case 2:
return _r_(function(i, n) {
return _i_("ec2:1304"), _r_(e.call(t, i, n));
});

case 3:
return _r_(function(i, n, r) {
return _i_("ec2:1305"), _r_(e.call(t, i, n, r));
});

case 4:
return _r_(function(i, n, r, o) {
return _i_("ec2:1306"), _r_(e.call(t, i, n, r, o));
});
}
return _r_(function() {
return _i_("ec2:1166"), _r_(e.apply(t, arguments));
});
}, g = function(e, t, i) {
if (_i_("ec2:630"), null == e) return _r_(p.identity);
if (p.isFunction(e)) return _r_(f(e, t, i));
if (p.isObject(e)) return _r_(p.matcher(e));
return _r_(p.property(e));
};
p.iteratee = function(e, t) {
return _i_("ec2:631"), _r_(g(e, t, 1 / 0));
};
var v = function(e, t) {
return _i_("ec2:632"), _r_(function(i) {
_i_("ec2:1167");
var n = arguments.length;
if (2 > n || null == i) return _r_(i);
for (var r = 1; n > r; r++) for (var o = arguments[r], a = e(o), s = a.length, _ = 0; s > _; _++) {
var c = a[_];
t && void 0 !== i[c] || (i[c] = o[c]);
}
return _r_(i);
});
}, b = function(e) {
if (_i_("ec2:633"), !p.isObject(e)) return _r_({});
if (u) return _r_(u(e));
h.prototype = e;
var t = new h();
return h.prototype = null, _r_(t);
}, m = function(e) {
return _i_("ec2:634"), _r_(function(t) {
return _i_("ec2:1168"), _r_(null == t ? void 0 :t[e]);
});
}, y = Math.pow(2, 53) - 1, w = m("length"), k = function(e) {
_i_("ec2:635");
var t = w(e);
return _r_("number" == typeof t && t >= 0 && y >= t);
};
p.each = p.forEach = function(e, t, i) {
_i_("ec2:861"), t = f(t, i);
var n, r;
if (k(e)) for (n = 0, r = e.length; r > n; n++) t(e[n], n, e); else {
var o = p.keys(e);
for (n = 0, r = o.length; r > n; n++) t(e[o[n]], o[n], e);
}
return _r_(e);
}, p.map = p.collect = function(e, t, i) {
_i_("ec2:862"), t = g(t, i);
for (var n = !k(e) && p.keys(e), r = (n || e).length, o = Array(r), a = 0; r > a; a++) {
var s = n ? n[a] :a;
o[a] = t(e[s], s, e);
}
return _r_(o);
};
function M(e) {
_i_("ec2:280");
function t(t, i, n, r, o, a) {
for (_i_("ec2:636"); o >= 0 && a > o; o += e) {
var s = r ? r[o] :o;
n = i(n, t[s], s, t);
}
return _r_(n);
}
return _r_(function(i, n, r, o) {
_i_("ec2:863"), n = f(n, o, 4);
var a = !k(i) && p.keys(i), s = (a || i).length, _ = e > 0 ? 0 :s - 1;
return arguments.length < 3 && (r = i[a ? a[_] :_], _ += e), _r_(t(i, n, r, a, _, s));
});
}
p.reduce = p.foldl = p.inject = M(1), p.reduceRight = p.foldr = M(-1), p.find = p.detect = function(e, t, i) {
_i_("ec2:864");
var n;
if (n = k(e) ? p.findIndex(e, t, i) :p.findKey(e, t, i), void 0 !== n && -1 !== n) return _r_(e[n]);
_r_();
}, p.filter = p.select = function(e, t, i) {
_i_("ec2:865");
var n = [];
return t = g(t, i), p.each(e, function(e, i, r) {
_i_("ec2:1307"), t(e, i, r) && n.push(e), _r_();
}), _r_(n);
}, p.reject = function(e, t, i) {
return _i_("ec2:637"), _r_(p.filter(e, p.negate(g(t)), i));
}, p.every = p.all = function(e, t, i) {
_i_("ec2:866"), t = g(t, i);
for (var n = !k(e) && p.keys(e), r = (n || e).length, o = 0; r > o; o++) {
var a = n ? n[o] :o;
if (!t(e[a], a, e)) return _r_(!1);
}
return _r_(!0);
}, p.some = p.any = function(e, t, i) {
_i_("ec2:867"), t = g(t, i);
for (var n = !k(e) && p.keys(e), r = (n || e).length, o = 0; r > o; o++) {
var a = n ? n[o] :o;
if (t(e[a], a, e)) return _r_(!0);
}
return _r_(!1);
}, p.contains = p.includes = p.include = function(e, t, i, n) {
return _i_("ec2:1061"), k(e) || (e = p.values(e)), ("number" != typeof i || n) && (i = 0), _r_(p.indexOf(e, t, i) >= 0);
}, p.invoke = function(e, t) {
_i_("ec2:638");
var i = a.call(arguments, 2), n = p.isFunction(t);
return _r_(p.map(e, function(e) {
_i_("ec2:1207");
var r = n ? t :e[t];
return _r_(null == r ? r :r.apply(e, i));
}));
}, p.pluck = function(e, t) {
return _i_("ec2:639"), _r_(p.map(e, p.property(t)));
}, p.where = function(e, t) {
return _i_("ec2:640"), _r_(p.filter(e, p.matcher(t)));
}, p.findWhere = function(e, t) {
return _i_("ec2:641"), _r_(p.find(e, p.matcher(t)));
}, p.max = function(e, t, i) {
_i_("ec2:642");
var n, r, o = -(1 / 0), a = -(1 / 0);
if (null == t && null != e) {
e = k(e) ? e :p.values(e);
for (var s = 0, _ = e.length; _ > s; s++) n = e[s], n > o && (o = n);
} else t = g(t, i), p.each(e, function(e, i, n) {
_i_("ec2:1404"), r = t(e, i, n), (r > a || r === -(1 / 0) && o === -(1 / 0)) && (o = e, a = r), _r_();
});
return _r_(o);
}, p.min = function(e, t, i) {
_i_("ec2:643");
var n, r, o = 1 / 0, a = 1 / 0;
if (null == t && null != e) {
e = k(e) ? e :p.values(e);
for (var s = 0, _ = e.length; _ > s; s++) n = e[s], o > n && (o = n);
} else t = g(t, i), p.each(e, function(e, i, n) {
_i_("ec2:1405"), r = t(e, i, n), (a > r || r === 1 / 0 && o === 1 / 0) && (o = e, a = r), _r_();
});
return _r_(o);
}, p.shuffle = function(e) {
_i_("ec2:644");
for (var t, i = k(e) ? e :p.values(e), n = i.length, r = Array(n), o = 0; n > o; o++) t = p.random(0, o), t !== o && (r[o] = r[t]), r[t] = i[o];
return _r_(r);
}, p.sample = function(e, t, i) {
if (_i_("ec2:645"), null == t || i) return k(e) || (e = p.values(e)), _r_(e[p.random(e.length - 1)]);
return _r_(p.shuffle(e).slice(0, Math.max(0, t)));
}, p.sortBy = function(e, t, i) {
return _i_("ec2:646"), t = g(t, i), _r_(p.pluck(p.map(e, function(e, i, n) {
return _i_("ec2:1480"), _r_({
value:e,
index:i,
criteria:t(e, i, n)
});
}).sort(function(e, t) {
_i_("ec2:1308");
var i = e.criteria, n = t.criteria;
if (i !== n) {
if (i > n || void 0 === i) return _r_(1);
if (n > i || void 0 === n) return _r_(-1);
}
return _r_(e.index - t.index);
}), "value"));
};
var C = function(e) {
return _i_("ec2:647"), _r_(function(t, i, n) {
_i_("ec2:1169");
var r = {};
return i = g(i, n), p.each(t, function(n, o) {
_i_("ec2:1481");
var a = i(n, o, t);
e(r, n, a), _r_();
}), _r_(r);
});
};
p.groupBy = C(function(e, t, i) {
_i_("ec2:868"), p.has(e, i) ? e[i].push(t) :e[i] = [ t ], _r_();
}), p.indexBy = C(function(e, t, i) {
_i_("ec2:869"), e[i] = t, _r_();
}), p.countBy = C(function(e, t, i) {
_i_("ec2:870"), p.has(e, i) ? e[i]++ :e[i] = 1, _r_();
}), p.toArray = function(e) {
if (_i_("ec2:648"), !e) return _r_([]);
if (p.isArray(e)) return _r_(a.call(e));
if (k(e)) return _r_(p.map(e, p.identity));
return _r_(p.values(e));
}, p.size = function(e) {
if (_i_("ec2:649"), null == e) return _r_(0);
return _r_(k(e) ? e.length :p.keys(e).length);
}, p.partition = function(e, t, i) {
_i_("ec2:650"), t = g(t, i);
var n = [], r = [];
return p.each(e, function(e, i, o) {
_i_("ec2:1208"), (t(e, i, o) ? n :r).push(e), _r_();
}), _r_([ n, r ]);
}, p.first = p.head = p.take = function(e, t, i) {
if (_i_("ec2:1062"), null == e) return _r_(void 0);
if (null == t || i) return _r_(e[0]);
return _r_(p.initial(e, e.length - t));
}, p.initial = function(e, t, i) {
return _i_("ec2:651"), _r_(a.call(e, 0, Math.max(0, e.length - (null == t || i ? 1 :t))));
}, p.last = function(e, t, i) {
if (_i_("ec2:652"), null == e) return _r_(void 0);
if (null == t || i) return _r_(e[e.length - 1]);
return _r_(p.rest(e, Math.max(0, e.length - t)));
}, p.rest = p.tail = p.drop = function(e, t, i) {
return _i_("ec2:1063"), _r_(a.call(e, null == t || i ? 1 :t));
}, p.compact = function(e) {
return _i_("ec2:653"), _r_(p.filter(e, p.identity));
};
var x = function(e, t, i, n) {
_i_("ec2:654");
for (var r = [], o = 0, a = n || 0, s = w(e); s > a; a++) {
var _ = e[a];
if (k(_) && (p.isArray(_) || p.isArguments(_))) {
t || (_ = x(_, t, i));
var c = 0, l = _.length;
for (r.length += l; l > c; ) r[o++] = _[c++];
} else i || (r[o++] = _);
}
return _r_(r);
};
p.flatten = function(e, t) {
return _i_("ec2:655"), _r_(x(e, t, !1));
}, p.without = function(e) {
return _i_("ec2:656"), _r_(p.difference(e, a.call(arguments, 1)));
}, p.uniq = p.unique = function(e, t, i, n) {
_i_("ec2:871"), p.isBoolean(t) || (n = i, i = t, t = !1), null != i && (i = g(i, n));
for (var r = [], o = [], a = 0, s = w(e); s > a; a++) {
var _ = e[a], c = i ? i(_, a, e) :_;
t ? (a && o === c || r.push(_), o = c) :i ? p.contains(o, c) || (o.push(c), r.push(_)) :p.contains(r, _) || r.push(_);
}
return _r_(r);
}, p.union = function() {
return _i_("ec2:657"), _r_(p.uniq(x(arguments, !0, !0)));
}, p.intersection = function(e) {
_i_("ec2:658");
for (var t = [], i = arguments.length, n = 0, r = w(e); r > n; n++) {
var o = e[n];
if (p.contains(t, o)) continue;
for (var a = 1; i > a && p.contains(arguments[a], o); a++) ;
a === i && t.push(o);
}
return _r_(t);
}, p.difference = function(e) {
_i_("ec2:659");
var t = x(arguments, !0, !0, 1);
return _r_(p.filter(e, function(e) {
return _i_("ec2:1209"), _r_(!p.contains(t, e));
}));
}, p.zip = function() {
return _i_("ec2:660"), _r_(p.unzip(arguments));
}, p.unzip = function(e) {
_i_("ec2:661");
for (var t = e && p.max(e, w).length || 0, i = Array(t), n = 0; t > n; n++) i[n] = p.pluck(e, n);
return _r_(i);
}, p.object = function(e, t) {
_i_("ec2:662");
for (var i = {}, n = 0, r = w(e); r > n; n++) t ? i[e[n]] = t[n] :i[e[n][0]] = e[n][1];
return _r_(i);
};
function S(e) {
return _i_("ec2:281"), _r_(function(t, i, n) {
_i_("ec2:872"), i = g(i, n);
for (var r = w(t), o = e > 0 ? 0 :r - 1; o >= 0 && r > o; o += e) if (i(t[o], o, t)) return _r_(o);
return _r_(-1);
});
}
p.findIndex = S(1), p.findLastIndex = S(-1), p.sortedIndex = function(e, t, i, n) {
_i_("ec2:663"), i = g(i, n, 1);
for (var r = i(t), o = 0, a = w(e); a > o; ) {
var s = Math.floor((o + a) / 2);
i(e[s]) < r ? o = s + 1 :a = s;
}
return _r_(o);
};
function T(e, t, i) {
return _i_("ec2:282"), _r_(function(n, r, o) {
_i_("ec2:873");
var s = 0, _ = w(n);
if ("number" == typeof o) e > 0 ? s = o >= 0 ? o :Math.max(o + _, s) :_ = o >= 0 ? Math.min(o + 1, _) :o + _ + 1; else if (i && o && _) return o = i(n, r), _r_(n[o] === r ? o :-1);
if (r !== r) return o = t(a.call(n, s, _), p.isNaN), _r_(o >= 0 ? o + s :-1);
for (o = e > 0 ? s :_ - 1; o >= 0 && _ > o; o += e) if (n[o] === r) return _r_(o);
return _r_(-1);
});
}
p.indexOf = T(1, p.findIndex, p.sortedIndex), p.lastIndexOf = T(-1, p.findLastIndex), p.range = function(e, t, i) {
_i_("ec2:664"), null == t && (t = e || 0, e = 0), i = i || 1;
for (var n = Math.max(Math.ceil((t - e) / i), 0), r = Array(n), o = 0; n > o; o++, e += i) r[o] = e;
return _r_(r);
};
var $ = function(e, t, i, n, r) {
if (_i_("ec2:665"), !(n instanceof t)) return _r_(e.apply(i, r));
var o = b(e.prototype), a = e.apply(o, r);
if (p.isObject(a)) return _r_(a);
return _r_(o);
};
p.bind = function(e, t) {
if (_i_("ec2:666"), d && e.bind === d) return _r_(d.apply(e, a.call(arguments, 1)));
if (!p.isFunction(e)) throw new TypeError("Bind must be called on a function");
var i = a.call(arguments, 2), n = function() {
return _i_("ec2:1210"), _r_($(e, n, t, this, i.concat(a.call(arguments))));
};
return _r_(n);
}, p.partial = function(e) {
_i_("ec2:667");
var t = a.call(arguments, 1), i = function() {
_i_("ec2:1211");
for (var n = 0, r = t.length, o = Array(r), a = 0; r > a; a++) o[a] = t[a] === p ? arguments[n++] :t[a];
for (;n < arguments.length; ) o.push(arguments[n++]);
return _r_($(e, i, this, this, o));
};
return _r_(i);
}, p.bindAll = function(e) {
_i_("ec2:668");
var t, i, n = arguments.length;
if (1 >= n) throw new Error("bindAll must be passed function names");
for (t = 1; n > t; t++) i = arguments[t], e[i] = p.bind(e[i], e);
return _r_(e);
}, p.memoize = function(e, t) {
_i_("ec2:669");
var i = function(n) {
_i_("ec2:1212");
var r = i.cache, o = "" + (t ? t.apply(this, arguments) :n);
return p.has(r, o) || (r[o] = e.apply(this, arguments)), _r_(r[o]);
};
return i.cache = {}, _r_(i);
}, p.delay = function(e, t) {
_i_("ec2:670");
var i = a.call(arguments, 2);
return _r_(setTimeout(function() {
return _i_("ec2:1213"), _r_(e.apply(null, i));
}, t));
}, p.defer = p.partial(p.delay, p, 1), p.throttle = function(e, t, i) {
_i_("ec2:671");
var n, r, o, a = null, s = 0;
i || (i = {});
var _ = function() {
_i_("ec2:1214"), s = i.leading === !1 ? 0 :p.now(), a = null, o = e.apply(n, r), a || (n = r = null), _r_();
};
return _r_(function() {
_i_("ec2:1170");
var c = p.now();
s || i.leading !== !1 || (s = c);
var l = t - (c - s);
return n = this, r = arguments, 0 >= l || l > t ? (a && (clearTimeout(a), a = null), s = c, o = e.apply(n, r), a || (n = r = null)) :a || i.trailing === !1 || (a = setTimeout(_, l)), _r_(o);
});
}, p.debounce = function(e, t, i) {
_i_("ec2:672");
var n, r, o, a, s, _ = function() {
_i_("ec2:1215");
var c = p.now() - a;
t > c && c >= 0 ? n = setTimeout(_, t - c) :(n = null, i || (s = e.apply(o, r), n || (o = r = null))), _r_();
};
return _r_(function() {
_i_("ec2:1171"), o = this, r = arguments, a = p.now();
var c = i && !n;
return n || (n = setTimeout(_, t)), c && (s = e.apply(o, r), o = r = null), _r_(s);
});
}, p.wrap = function(e, t) {
return _i_("ec2:673"), _r_(p.partial(t, e));
}, p.negate = function(e) {
return _i_("ec2:674"), _r_(function() {
return _i_("ec2:1172"), _r_(!e.apply(this, arguments));
});
}, p.compose = function() {
_i_("ec2:675");
var e = arguments, t = e.length - 1;
return _r_(function() {
_i_("ec2:1173");
for (var i = t, n = e[t].apply(this, arguments); i--; ) n = e[i].call(this, n);
return _r_(n);
});
}, p.after = function(e, t) {
return _i_("ec2:676"), _r_(function() {
if (_i_("ec2:1174"), --e < 1) return _r_(t.apply(this, arguments));
_r_();
});
}, p.before = function(e, t) {
_i_("ec2:677");
var i;
return _r_(function() {
return _i_("ec2:1175"), --e > 0 && (i = t.apply(this, arguments)), 1 >= e && (t = null), _r_(i);
});
}, p.once = p.partial(p.before, 2);
var B = !{
toString:null
}.propertyIsEnumerable("toString"), j = [ "valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString" ];
function D(e, t) {
_i_("ec2:283");
var i = j.length, r = e.constructor, o = p.isFunction(r) && r.prototype || n, a = "constructor";
for (p.has(e, a) && !p.contains(t, a) && t.push(a); i--; ) a = j[i], a in e && e[a] !== o[a] && !p.contains(t, a) && t.push(a);
_r_();
}
p.keys = function(e) {
if (_i_("ec2:678"), !p.isObject(e)) return _r_([]);
if (l) return _r_(l(e));
var t = [];
for (var i in e) p.has(e, i) && t.push(i);
return B && D(e, t), _r_(t);
}, p.allKeys = function(e) {
if (_i_("ec2:679"), !p.isObject(e)) return _r_([]);
var t = [];
for (var i in e) t.push(i);
return B && D(e, t), _r_(t);
}, p.values = function(e) {
_i_("ec2:680");
for (var t = p.keys(e), i = t.length, n = Array(i), r = 0; i > r; r++) n[r] = e[t[r]];
return _r_(n);
}, p.mapObject = function(e, t, i) {
_i_("ec2:681"), t = g(t, i);
for (var n, r = p.keys(e), o = r.length, a = {}, s = 0; o > s; s++) n = r[s], a[n] = t(e[n], n, e);
return _r_(a);
}, p.pairs = function(e) {
_i_("ec2:682");
for (var t = p.keys(e), i = t.length, n = Array(i), r = 0; i > r; r++) n[r] = [ t[r], e[t[r]] ];
return _r_(n);
}, p.invert = function(e) {
_i_("ec2:683");
for (var t = {}, i = p.keys(e), n = 0, r = i.length; r > n; n++) t[e[i[n]]] = i[n];
return _r_(t);
}, p.functions = p.methods = function(e) {
_i_("ec2:874");
var t = [];
for (var i in e) p.isFunction(e[i]) && t.push(i);
return _r_(t.sort());
}, p.extend = v(p.allKeys), p.extendOwn = p.assign = v(p.keys), p.findKey = function(e, t, i) {
_i_("ec2:684"), t = g(t, i);
for (var n, r = p.keys(e), o = 0, a = r.length; a > o; o++) if (n = r[o], t(e[n], n, e)) return _r_(n);
_r_();
}, p.pick = function(e, t, i) {
_i_("ec2:685");
var n, r, o = {}, a = e;
if (null == a) return _r_(o);
p.isFunction(t) ? (r = p.allKeys(a), n = f(t, i)) :(r = x(arguments, !1, !1, 1), n = function(e, t, i) {
return _i_("ec2:1406"), _r_(t in i);
}, a = Object(a));
for (var s = 0, _ = r.length; _ > s; s++) {
var c = r[s], l = a[c];
n(l, c, a) && (o[c] = l);
}
return _r_(o);
}, p.omit = function(e, t, i) {
if (_i_("ec2:686"), p.isFunction(t)) t = p.negate(t); else {
var n = p.map(x(arguments, !1, !1, 1), String);
t = function(e, t) {
return _i_("ec2:1407"), _r_(!p.contains(n, t));
};
}
return _r_(p.pick(e, t, i));
}, p.defaults = v(p.allKeys, !0), p.create = function(e, t) {
_i_("ec2:687");
var i = b(e);
return t && p.extendOwn(i, t), _r_(i);
}, p.clone = function(e) {
if (_i_("ec2:688"), !p.isObject(e)) return _r_(e);
return _r_(p.isArray(e) ? e.slice() :p.extend({}, e));
}, p.tap = function(e, t) {
return _i_("ec2:689"), t(e), _r_(e);
}, p.isMatch = function(e, t) {
_i_("ec2:690");
var i = p.keys(t), n = i.length;
if (null == e) return _r_(!n);
for (var r = Object(e), o = 0; n > o; o++) {
var a = i[o];
if (t[a] !== r[a] || !(a in r)) return _r_(!1);
}
return _r_(!0);
};
var E = function(e, t, i, n) {
if (_i_("ec2:691"), e === t) return _r_(0 !== e || 1 / e === 1 / t);
if (null == e || null == t) return _r_(e === t);
e instanceof p && (e = e._wrapped), t instanceof p && (t = t._wrapped);
var r = s.call(e);
if (r !== s.call(t)) return _r_(!1);
switch (r) {
case "[object RegExp]":
case "[object String]":
return _r_("" + e == "" + t);

case "[object Number]":
if (+e !== +e) return _r_(+t !== +t);
return _r_(0 === +e ? 1 / +e === 1 / t :+e === +t);

case "[object Date]":
case "[object Boolean]":
return _r_(+e === +t);
}
var o = "[object Array]" === r;
if (!o) {
if ("object" != typeof e || "object" != typeof t) return _r_(!1);
var a = e.constructor, _ = t.constructor;
if (a !== _ && !(p.isFunction(a) && a instanceof a && p.isFunction(_) && _ instanceof _) && "constructor" in e && "constructor" in t) return _r_(!1);
}
i = i || [], n = n || [];
for (var c = i.length; c--; ) if (i[c] === e) return _r_(n[c] === t);
if (i.push(e), n.push(t), o) {
if (c = e.length, c !== t.length) return _r_(!1);
for (;c--; ) if (!E(e[c], t[c], i, n)) return _r_(!1);
} else {
var l, d = p.keys(e);
if (c = d.length, p.keys(t).length !== c) return _r_(!1);
for (;c--; ) if (l = d[c], !p.has(t, l) || !E(e[l], t[l], i, n)) return _r_(!1);
}
return i.pop(), n.pop(), _r_(!0);
};
p.isEqual = function(e, t) {
return _i_("ec2:692"), _r_(E(e, t));
}, p.isEmpty = function(e) {
if (_i_("ec2:693"), null == e) return _r_(!0);
if (k(e) && (p.isArray(e) || p.isString(e) || p.isArguments(e))) return _r_(0 === e.length);
return _r_(0 === p.keys(e).length);
}, p.isElement = function(e) {
return _i_("ec2:694"), _r_(!(!e || 1 !== e.nodeType));
}, p.isArray = c || function(e) {
return _i_("ec2:875"), _r_("[object Array]" === s.call(e));
}, p.isObject = function(e) {
_i_("ec2:695");
var t = typeof e;
return _r_("function" === t || "object" === t && !!e);
}, p.each([ "Arguments", "Function", "String", "Number", "Date", "RegExp", "Error" ], function(e) {
_i_("ec2:696"), p["is" + e] = function(t) {
return _i_("ec2:1216"), _r_(s.call(t) === "[object " + e + "]");
}, _r_();
}), p.isArguments(arguments) || (p.isArguments = function(e) {
return _i_("ec2:1064"), _r_(p.has(e, "callee"));
}), "function" != typeof /./ && "object" != typeof Int8Array && (p.isFunction = function(e) {
return _i_("ec2:1065"), _r_("function" == typeof e || !1);
}), p.isFinite = function(e) {
return _i_("ec2:697"), _r_(isFinite(e) && !isNaN(parseFloat(e)));
}, p.isNaN = function(e) {
return _i_("ec2:698"), _r_(p.isNumber(e) && e !== +e);
}, p.isBoolean = function(e) {
return _i_("ec2:699"), _r_(e === !0 || e === !1 || "[object Boolean]" === s.call(e));
}, p.isNull = function(e) {
return _i_("ec2:700"), _r_(null === e);
}, p.isUndefined = function(e) {
return _i_("ec2:701"), _r_(void 0 === e);
}, p.has = function(e, t) {
return _i_("ec2:702"), _r_(null != e && _.call(e, t));
}, p.noConflict = function() {
return _i_("ec2:703"), e._ = t, _r_(this);
}, p.identity = function(e) {
return _i_("ec2:704"), _r_(e);
}, p.constant = function(e) {
return _i_("ec2:705"), _r_(function() {
return _i_("ec2:1176"), _r_(e);
});
}, p.noop = function() {}, p.property = m, p.propertyOf = function(e) {
return _i_("ec2:707"), _r_(null == e ? function() {} :function(t) {
return _i_("ec2:1218"), _r_(e[t]);
});
}, p.matcher = p.matches = function(e) {
return _i_("ec2:876"), e = p.extendOwn({}, e), _r_(function(t) {
return _i_("ec2:1219"), _r_(p.isMatch(t, e));
});
}, p.times = function(e, t, i) {
_i_("ec2:708");
var n = Array(Math.max(0, e));
t = f(t, i, 1);
for (var r = 0; e > r; r++) n[r] = t(r);
return _r_(n);
}, p.random = function(e, t) {
return _i_("ec2:709"), null == t && (t = e, e = 0), _r_(e + Math.floor(Math.random() * (t - e + 1)));
}, p.now = Date.now || function() {
return _i_("ec2:877"), _r_(new Date().getTime());
};
var N = {
"&":"&amp;",
"<":"&lt;",
">":"&gt;",
'"':"&quot;",
"'":"&#x27;",
"`":"&#x60;"
}, A = p.invert(N), I = function(e) {
_i_("ec2:710");
var t = function(t) {
return _i_("ec2:1220"), _r_(e[t]);
}, i = "(?:" + p.keys(e).join("|") + ")", n = RegExp(i), r = RegExp(i, "g");
return _r_(function(e) {
return _i_("ec2:1177"), e = null == e ? "" :"" + e, _r_(n.test(e) ? e.replace(r, t) :e);
});
};
p.escape = I(N), p.unescape = I(A), p.result = function(e, t, i) {
_i_("ec2:711");
var n = null == e ? void 0 :e[t];
return void 0 === n && (n = i), _r_(p.isFunction(n) ? n.call(e) :n);
};
var O = 0;
p.uniqueId = function(e) {
_i_("ec2:712");
var t = ++O + "";
return _r_(e ? e + t :t);
}, p.templateSettings = {
evaluate:/<%([\s\S]+?)%>/g,
interpolate:/<%=([\s\S]+?)%>/g,
escape:/<%-([\s\S]+?)%>/g
};
var P = /(.)^/, H = {
"'":"'",
"\\":"\\",
"\r":"r",
"\n":"n",
"\u2028":"u2028",
"\u2029":"u2029"
}, L = /\\|'|\r|\n|\u2028|\u2029/g, F = function(e) {
return _i_("ec2:713"), _r_("\\" + H[e]);
};
p.template = function(e, t, i) {
_i_("ec2:714"), !t && i && (t = i), t = p.defaults({}, t, p.templateSettings);
var n = RegExp([ (t.escape || P).source, (t.interpolate || P).source, (t.evaluate || P).source ].join("|") + "|$", "g"), r = 0, o = "__p+='";
e.replace(n, function(t, i, n, a, s) {
return _i_("ec2:1221"), o += e.slice(r, s).replace(L, F), r = s + t.length, i ? o += "'+\n((__t=(" + i + "))==null?'':_.escape(__t))+\n'" :n ? o += "'+\n((__t=(" + n + "))==null?'':__t)+\n'" :a && (o += "';\n" + a + "\n__p+='"), _r_(t);
}), o += "';\n", t.variable || (o = "with(obj||{}){\n" + o + "}\n"), o = "var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n" + o + "return __p;\n";
try {
var a = new Function(t.variable || "obj", "_", o);
} catch (s) {
throw s.source = o, s;
}
var _ = function(e) {
return _i_("ec2:1222"), _r_(a.call(this, e, p));
}, c = t.variable || "obj";
return _.source = "function(" + c + "){\n" + o + "}", _r_(_);
}, p.chain = function(e) {
_i_("ec2:715");
var t = p(e);
return t._chain = !0, _r_(t);
};
var q = function(e, t) {
return _i_("ec2:716"), _r_(e._chain ? p(t).chain() :t);
};
p.mixin = function(e) {
_i_("ec2:717"), p.each(p.functions(e), function(t) {
_i_("ec2:1223");
var i = p[t] = e[t];
p.prototype[t] = function() {
_i_("ec2:1525");
var e = [ this._wrapped ];
return o.apply(e, arguments), _r_(q(this, i.apply(p, e)));
}, _r_();
}), _r_();
}, p.mixin(p), p.each([ "pop", "push", "reverse", "shift", "sort", "splice", "unshift" ], function(e) {
_i_("ec2:718");
var t = i[e];
p.prototype[e] = function() {
_i_("ec2:1224");
var i = this._wrapped;
return t.apply(i, arguments), "shift" !== e && "splice" !== e || 0 !== i.length || delete i[0], _r_(q(this, i));
}, _r_();
}), p.each([ "concat", "join", "slice" ], function(e) {
_i_("ec2:719");
var t = i[e];
p.prototype[e] = function() {
return _i_("ec2:1225"), _r_(q(this, t.apply(this._wrapped, arguments)));
}, _r_();
}), p.prototype.value = function() {
return _i_("ec2:720"), _r_(this._wrapped);
}, p.prototype.valueOf = p.prototype.toJSON = p.prototype.value, p.prototype.toString = function() {
return _i_("ec2:721"), _r_("" + this._wrapped);
}, "function" == typeof define && define.amd && define("underscore", [], function() {
return _i_("ec2:1066"), _r_(p);
}), _r_();
}.call(this);

/*
 * Color Thief v2.0
 * by Lokesh Dhakar - http://www.lokeshdhakar.com
 *
 * Thanks
 * ------
 * Nick Rabinowitz - For creating quantize.js.
 * John Schulz - For clean up and optimization. @JFSIII
 * Nathan Spady - For adding drag and drop support to the demo page.
 *
 * License
 * -------
 * Copyright 2011, 2015 Lokesh Dhakar
 * Released under the MIT license
 * https://raw.githubusercontent.com/lokesh/color-thief/master/LICENSE
 *
 * @license
 */
var CanvasImage = function(e) {
_i_("ec2:131"), this.canvas = document.createElement("canvas"), this.context = this.canvas.getContext("2d"), document.body.appendChild(this.canvas), this.width = this.canvas.width = e.width, this.height = this.canvas.height = e.height, this.context.drawImage(e, 0, 0, this.width, this.height), _r_();
};

CanvasImage.prototype.clear = function() {
_i_("ec2:132"), this.context.clearRect(0, 0, this.width, this.height), _r_();
}, CanvasImage.prototype.update = function(e) {
_i_("ec2:133"), this.context.putImageData(e, 0, 0), _r_();
}, CanvasImage.prototype.getPixelCount = function() {
return _i_("ec2:134"), _r_(this.width * this.height);
}, CanvasImage.prototype.getImageData = function() {
return _i_("ec2:135"), _r_(this.context.getImageData(0, 0, this.width, this.height));
}, CanvasImage.prototype.removeCanvas = function() {
_i_("ec2:136"), this.canvas.parentNode.removeChild(this.canvas), _r_();
};

var ColorThief = function() {};

/*!
 * quantize.js Copyright 2008 Nick Rabinowitz.
 * Licensed under the MIT license: http://www.opensource.org/licenses/mit-license.php
 * @license
 */
/*!
 * Block below copied from Protovis: http://mbostock.github.com/protovis/
 * Copyright 2010 Stanford Visualization Group
 * Licensed under the BSD License: http://www.opensource.org/licenses/bsd-license.php
 * @license
 */
if (ColorThief.prototype.getColor = function(e, t) {
_i_("ec2:138");
var i = this.getPalette(e, 5, t), n = i[0];
return _r_(n);
}, ColorThief.prototype.getPalette = function(e, t, i) {
_i_("ec2:139"), ("undefined" == typeof t || 2 > t || t > 256) && (t = 10), ("undefined" == typeof i || 1 > i) && (i = 10);
for (var n, r, o, a, s, _ = new CanvasImage(e), c = _.getImageData(), l = c.data, d = _.getPixelCount(), u = [], h = 0; d > h; h += i) n = 4 * h, r = l[n + 0], o = l[n + 1], a = l[n + 2], s = l[n + 3], s >= 125 && (r > 250 && o > 250 && a > 250 || u.push([ r, o, a ]));
var p = MMCQ.quantize(u, t), f = p ? p.palette() :null;
return _.removeCanvas(), _r_(f);
}, ColorThief.prototype.getColorFromUrl = function(e, t, i) {
_i_("ec2:140"), sourceImage = document.createElement("img");
var n = this;
sourceImage.addEventListener("load", function() {
_i_("ec2:566");
var r = n.getPalette(sourceImage, 5, i), o = r[0];
t(o, e), _r_();
}), sourceImage.src = e, _r_();
}, ColorThief.prototype.getImageData = function(e, t) {
_i_("ec2:141"), xhr = new XMLHttpRequest(), xhr.open("GET", e, !0), xhr.responseType = "arraybuffer", xhr.onload = function(e) {
if (_i_("ec2:567"), 200 == this.status) {
uInt8Array = new Uint8Array(this.response), i = uInt8Array.length, binaryString = new Array(i);
for (var i = 0; i < uInt8Array.length; i++) binaryString[i] = String.fromCharCode(uInt8Array[i]);
data = binaryString.join(""), base64 = window.btoa(data), t("data:image/png;base64," + base64);
}
_r_();
}, xhr.send(), _r_();
}, ColorThief.prototype.getColorAsync = function(e, t, i) {
_i_("ec2:142");
var n = this;
this.getImageData(e, function(e) {
_i_("ec2:568"), sourceImage = document.createElement("img"), sourceImage.addEventListener("load", function() {
_i_("ec2:1178");
var e = n.getPalette(sourceImage, 5, i), r = e[0];
t(r, this), _r_();
}), sourceImage.src = e, _r_();
}), _r_();
}, !pv) var pv = {
map:function(e, t) {
_i_("ec2:569");
var i = {};
return _r_(t ? e.map(function(e, n) {
return _i_("ec2:1226"), i.index = n, _r_(t.call(i, e));
}) :e.slice());
},
naturalOrder:function(e, t) {
return _i_("ec2:570"), _r_(t > e ? -1 :e > t ? 1 :0);
},
sum:function(e, t) {
_i_("ec2:571");
var i = {};
return _r_(e.reduce(t ? function(e, n, r) {
return _i_("ec2:1227"), i.index = r, _r_(e + t.call(i, n));
} :function(e, t) {
return _i_("ec2:1228"), _r_(e + t);
}, 0));
},
max:function(e, t) {
return _i_("ec2:572"), _r_(Math.max.apply(null, t ? pv.map(e, t) :e));
}
};

var MMCQ = function() {
_i_("ec2:159");
var e = 5, t = 8 - e, i = 1e3, n = .75;
function r(t, i, n) {
return _i_("ec2:284"), _r_((t << 2 * e) + (i << e) + n);
}
function o(e) {
_i_("ec2:285");
var t = [], i = !1;
function n() {
_i_("ec2:722"), t.sort(e), i = !0, _r_();
}
return _r_({
push:function(e) {
_i_("ec2:1179"), t.push(e), i = !1, _r_();
},
peek:function(e) {
return _i_("ec2:1180"), i || n(), void 0 === e && (e = t.length - 1), _r_(t[e]);
},
pop:function() {
return _i_("ec2:1181"), i || n(), _r_(t.pop());
},
size:function() {
return _i_("ec2:1182"), _r_(t.length);
},
map:function(e) {
return _i_("ec2:1183"), _r_(t.map(e));
},
debug:function() {
return _i_("ec2:1184"), i || n(), _r_(t);
}
});
}
function a(e, t, i, n, r, o, a) {
_i_("ec2:286");
var s = this;
s.r1 = e, s.r2 = t, s.g1 = i, s.g2 = n, s.b1 = r, s.b2 = o, s.histo = a, _r_();
}
a.prototype = {
volume:function(e) {
_i_("ec2:1067");
var t = this;
return (!t._volume || e) && (t._volume = (t.r2 - t.r1 + 1) * (t.g2 - t.g1 + 1) * (t.b2 - t.b1 + 1)), _r_(t._volume);
},
count:function(e) {
_i_("ec2:1068");
var t = this, i = t.histo;
if (!t._count_set || e) {
var n, o, a, s, _ = 0;
for (o = t.r1; o <= t.r2; o++) for (a = t.g1; a <= t.g2; a++) for (s = t.b1; s <= t.b2; s++) n = r(o, a, s), _ += i[n] || 0;
t._count = _, t._count_set = !0;
}
return _r_(t._count);
},
copy:function() {
_i_("ec2:1069");
var e = this;
return _r_(new a(e.r1, e.r2, e.g1, e.g2, e.b1, e.b2, e.histo));
},
avg:function(t) {
_i_("ec2:1070");
var i = this, n = i.histo;
if (!i._avg || t) {
var o, a, s, _, c, l = 0, d = 1 << 8 - e, u = 0, h = 0, p = 0;
for (a = i.r1; a <= i.r2; a++) for (s = i.g1; s <= i.g2; s++) for (_ = i.b1; _ <= i.b2; _++) c = r(a, s, _), o = n[c] || 0, l += o, u += o * (a + .5) * d, h += o * (s + .5) * d, p += o * (_ + .5) * d;
l ? i._avg = [ ~~(u / l), ~~(h / l), ~~(p / l) ] :i._avg = [ ~~(d * (i.r1 + i.r2 + 1) / 2), ~~(d * (i.g1 + i.g2 + 1) / 2), ~~(d * (i.b1 + i.b2 + 1) / 2) ];
}
return _r_(i._avg);
},
contains:function(e) {
_i_("ec2:1071");
var i = this, n = e[0] >> t;
return gval = e[1] >> t, bval = e[2] >> t, _r_(n >= i.r1 && n <= i.r2 && gval >= i.g1 && gval <= i.g2 && bval >= i.b1 && bval <= i.b2);
}
};
function s() {
_i_("ec2:287"), this.vboxes = new o(function(e, t) {
return _i_("ec2:1185"), _r_(pv.naturalOrder(e.vbox.count() * e.vbox.volume(), t.vbox.count() * t.vbox.volume()));
}), _r_();
}
s.prototype = {
push:function(e) {
_i_("ec2:1072"), this.vboxes.push({
vbox:e,
color:e.avg()
}), _r_();
},
palette:function() {
return _i_("ec2:1073"), _r_(this.vboxes.map(function(e) {
return _i_("ec2:1408"), _r_(e.color);
}));
},
size:function() {
return _i_("ec2:1074"), _r_(this.vboxes.size());
},
map:function(e) {
_i_("ec2:1075");
for (var t = this.vboxes, i = 0; i < t.size(); i++) if (t.peek(i).vbox.contains(e)) return _r_(t.peek(i).color);
return _r_(this.nearest(e));
},
nearest:function(e) {
_i_("ec2:1076");
for (var t, i, n, r = this.vboxes, o = 0; o < r.size(); o++) i = Math.sqrt(Math.pow(e[0] - r.peek(o).color[0], 2) + Math.pow(e[1] - r.peek(o).color[1], 2) + Math.pow(e[2] - r.peek(o).color[2], 2)), (t > i || void 0 === t) && (t = i, n = r.peek(o).color);
return _r_(n);
},
forcebw:function() {
_i_("ec2:1077");
var e = this.vboxes;
e.sort(function(e, t) {
return _i_("ec2:1409"), _r_(pv.naturalOrder(pv.sum(e.color), pv.sum(t.color)));
});
var t = e[0].color;
t[0] < 5 && t[1] < 5 && t[2] < 5 && (e[0].color = [ 0, 0, 0 ]);
var i = e.length - 1, n = e[i].color;
n[0] > 251 && n[1] > 251 && n[2] > 251 && (e[i].color = [ 255, 255, 255 ]), _r_();
}
};
function _(i) {
_i_("ec2:288");
var n, o, a, s, _ = 1 << 3 * e, c = new Array(_);
return i.forEach(function(e) {
_i_("ec2:1078"), o = e[0] >> t, a = e[1] >> t, s = e[2] >> t, n = r(o, a, s), c[n] = (c[n] || 0) + 1, _r_();
}), _r_(c);
}
function c(e, i) {
_i_("ec2:289");
var n, r, o, s = 1e6, _ = 0, c = 1e6, l = 0, d = 1e6, u = 0;
return e.forEach(function(e) {
_i_("ec2:1079"), n = e[0] >> t, r = e[1] >> t, o = e[2] >> t, s > n ? s = n :n > _ && (_ = n), c > r ? c = r :r > l && (l = r), d > o ? d = o :o > u && (u = o), _r_();
}), _r_(new a(s, _, c, l, d, u, i));
}
function l(e, t) {
if (_i_("ec2:290"), !t.count()) return _r_();
var i = t.r2 - t.r1 + 1, n = t.g2 - t.g1 + 1, o = t.b2 - t.b1 + 1, a = pv.max([ i, n, o ]);
if (1 == t.count()) return _r_([ t.copy() ]);
var s, _, c, l, d, u = 0, h = [], p = [];
if (a == i) for (s = t.r1; s <= t.r2; s++) {
for (l = 0, _ = t.g1; _ <= t.g2; _++) for (c = t.b1; c <= t.b2; c++) d = r(s, _, c), l += e[d] || 0;
u += l, h[s] = u;
} else if (a == n) for (s = t.g1; s <= t.g2; s++) {
for (l = 0, _ = t.r1; _ <= t.r2; _++) for (c = t.b1; c <= t.b2; c++) d = r(_, s, c), l += e[d] || 0;
u += l, h[s] = u;
} else for (s = t.b1; s <= t.b2; s++) {
for (l = 0, _ = t.r1; _ <= t.r2; _++) for (c = t.g1; c <= t.g2; c++) d = r(_, c, s), l += e[d] || 0;
u += l, h[s] = u;
}
h.forEach(function(e, t) {
_i_("ec2:1080"), p[t] = u - e, _r_();
});
function f(e) {
_i_("ec2:723");
var i, n, r, o, a, _ = e + "1", c = e + "2", l = 0;
for (s = t[_]; s <= t[c]; s++) if (h[s] > u / 2) {
for (r = t.copy(), o = t.copy(), i = s - t[_], n = t[c] - s, a = n >= i ? Math.min(t[c] - 1, ~~(s + n / 2)) :Math.max(t[_], ~~(s - 1 - i / 2)); !h[a]; ) a++;
for (l = p[a]; !l && h[a - 1]; ) l = p[--a];
return r[c] = a, o[_] = r[c] + 1, _r_([ r, o ]);
}
_r_();
}
return _r_(f(a == i ? "r" :a == n ? "g" :"b"));
}
function d(e, t) {
if (_i_("ec2:291"), !e.length || 2 > t || t > 256) return _r_(!1);
var r = _(e), a = 0;
r.forEach(function() {
_i_("ec2:1081"), a++, _r_();
});
var d = c(e, r), u = new o(function(e, t) {
return _i_("ec2:1186"), _r_(pv.naturalOrder(e.count(), t.count()));
});
u.push(d);
function h(e, t) {
_i_("ec2:724");
for (var n, o = 1, a = 0; i > a; ) {
if (n = e.pop(), !n.count()) {
e.push(n), a++;
continue;
}
var s = l(r, n), _ = s[0], c = s[1];
if (!_) return _r_();
if (e.push(_), c && (e.push(c), o++), o >= t) return _r_();
if (a++ > i) return _r_();
}
_r_();
}
h(u, n * t);
for (var p = new o(function(e, t) {
return _i_("ec2:1187"), _r_(pv.naturalOrder(e.count() * e.volume(), t.count() * t.volume()));
}); u.size(); ) p.push(u.pop());
h(p, t - p.size());
for (var f = new s(); p.size(); ) f.push(p.pop());
return _r_(f);
}
return _r_({
quantize:d
});
}();

B.define("component/landpages/card-theme", [ "component", "jquery" ], function(e, t) {
return _i_("ec2:143"), _r_(e.extend({
init:function() {
_i_("ec2:878");
var e = this.$el, i = new RegExp(/[qrst](\-ec)?\.bstatic\./);
e.each(function() {
_i_("ec2:1309");
var e = t(this).find(".dsf_thumb").css("background-image"), n = e.replace("url(", "").replace(")", "").replace(/\"/gi, ""), r = t(this).find(".lp-card-theme__text");
if (i.test(n)) {
var o = new Image();
o.onload = function() {
_i_("ec2:1607");
var e = new ColorThief(), t = e.getColor(o);
r.css("backgroundColor", "rgb(" + t[0] + ", " + t[1] + ", " + t[2] + ")"), _r_();
}, o.crossOrigin = "Anonymous", o.src = n;
}
_r_();
}), _r_();
}
}));
}), booking.env.enable_scripts_tracking && (booking.env.scripts_tracking.landing.run = !0);