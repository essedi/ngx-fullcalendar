/**
 * @fileoverview added by tsickle
 * @suppress {checkTypes,extraRequire,missingOverride,missingReturn,unusedPrivateMembers,uselessCode} checked by tsc
 */
import * as tslib_1 from "tslib";
import { Component, ElementRef, EventEmitter, Input, IterableDiffers, Output, } from '@angular/core';
/** @type {?} */
var defaultConfig = {
    aspectRatio: 1.35,
    defaultView: 'month',
    allDaySlot: true,
    allDayText: 'all-day',
    slotDuration: '00:30:00',
    scrollTime: '06:00:00',
    minTime: '00:00:00',
    maxTime: '24:00:00',
    slotEventOverlap: true,
    dragRevertDuration: 500,
    dragOpacity: .75,
    dragScroll: true,
    timezone: false,
    timeFormat: null
};
var FullCalendarComponent = /** @class */ (function () {
    function FullCalendarComponent(el, differs) {
        this.el = el;
        // tslint:disable:no-output-on-prefix
        this.onDayClick = new EventEmitter();
        this.onDrop = new EventEmitter();
        this.onEventClick = new EventEmitter();
        this.onEventMouseover = new EventEmitter();
        this.onEventMouseout = new EventEmitter();
        this.onEventDragStart = new EventEmitter();
        this.onEventDragStop = new EventEmitter();
        this.onEventDrop = new EventEmitter();
        this.onEventReceive = new EventEmitter();
        this.onEventResizeStart = new EventEmitter();
        this.onEventResizeStop = new EventEmitter();
        this.onEventResize = new EventEmitter();
        this.onViewRender = new EventEmitter();
        this.onViewDestroy = new EventEmitter();
        this.onNavLinkDayClick = new EventEmitter();
        this.onNavLinkWeekClick = new EventEmitter();
        this.onEventRender = new EventEmitter();
        this.onEventDestroy = new EventEmitter();
        this.onEventAfterRender = new EventEmitter();
        this.onColumnHeaderHtml = new EventEmitter();
        this.eventDiffer = differs.find([]).create(null);
        this.resourceDiffer = differs.find([]).create(null);
        this.initialized = false;
    }
    /**
     * @return {?}
     */
    FullCalendarComponent.prototype.ngOnInit = /**
     * @return {?}
     */
    function () {
        var _this = this;
        this.config = this.safeGenerateConfig();
        this.config.resources = (/**
         * @param {?} callback
         * @return {?}
         */
        function (callback) {
            callback(_this.resources || []);
        });
        this.config.dayClick = (/**
         * @param {?} date
         * @param {?} jsEvent
         * @param {?} view
         * @param {?=} resourceId
         * @return {?}
         */
        function (date, jsEvent, view, resourceId) {
            _this.onDayClick.emit({
                'date': date,
                'jsEvent': jsEvent,
                'view': view,
                'resourceId': resourceId
            });
        });
        this.config.drop = (/**
         * @param {?} date
         * @param {?} jsEvent
         * @param {?} ui
         * @param {?} resourceId
         * @return {?}
         */
        function (date, jsEvent, ui, resourceId) {
            _this.onDrop.emit({
                'date': date,
                'jsEvent': jsEvent,
                'resourceId': resourceId
            });
        });
        this.config.eventClick = (/**
         * @param {?} calEvent
         * @param {?} jsEvent
         * @param {?} view
         * @return {?}
         */
        function (calEvent, jsEvent, view) {
            _this.onEventClick.emit({
                'calEvent': calEvent,
                'jsEvent': jsEvent,
                'view': view
            });
        });
        this.config.eventMouseover = (/**
         * @param {?} calEvent
         * @param {?} jsEvent
         * @param {?} view
         * @return {?}
         */
        function (calEvent, jsEvent, view) {
            _this.onEventMouseover.emit({
                'calEvent': calEvent,
                'jsEvent': jsEvent,
                'view': view
            });
        });
        this.config.eventMouseout = (/**
         * @param {?} calEvent
         * @param {?} jsEvent
         * @param {?} view
         * @return {?}
         */
        function (calEvent, jsEvent, view) {
            _this.onEventMouseout.emit({
                'calEvent': calEvent,
                'jsEvent': jsEvent,
                'view': view
            });
        });
        this.config.eventDragStart = (/**
         * @param {?} event
         * @param {?} jsEvent
         * @param {?} ui
         * @param {?} view
         * @return {?}
         */
        function (event, jsEvent, ui, view) {
            _this.onEventDragStart.emit({
                'event': event,
                'jsEvent': jsEvent,
                'view': view
            });
        });
        this.config.eventDragStop = (/**
         * @param {?} event
         * @param {?} jsEvent
         * @param {?} ui
         * @param {?} view
         * @return {?}
         */
        function (event, jsEvent, ui, view) {
            _this.onEventDragStop.emit({
                'event': event,
                'jsEvent': jsEvent,
                'view': view
            });
        });
        this.config.eventDrop = (/**
         * @param {?} event
         * @param {?} delta
         * @param {?} revertFunc
         * @param {?} jsEvent
         * @param {?} ui
         * @param {?} view
         * @return {?}
         */
        function (event, delta, revertFunc, jsEvent, ui, view) {
            _this._updateEvent(event);
            _this.onEventDrop.emit({
                'event': event,
                'delta': delta,
                'revertFunc': revertFunc,
                'jsEvent': jsEvent,
                'view': view
            });
        });
        this.config.eventReceive = (/**
         * @param {?} event
         * @return {?}
         */
        function (event) {
            _this.onEventReceive.emit({
                'event': event
            });
        });
        this.config.eventResizeStart = (/**
         * @param {?} event
         * @param {?} jsEvent
         * @param {?} ui
         * @param {?} view
         * @return {?}
         */
        function (event, jsEvent, ui, view) {
            _this.onEventResizeStart.emit({
                'event': event,
                'jsEvent': jsEvent,
                'view': view
            });
        });
        this.config.eventResizeStop = (/**
         * @param {?} event
         * @param {?} jsEvent
         * @param {?} ui
         * @param {?} view
         * @return {?}
         */
        function (event, jsEvent, ui, view) {
            _this.onEventResizeStop.emit({
                'event': event,
                'jsEvent': jsEvent,
                'view': view
            });
        });
        this.config.eventResize = (/**
         * @param {?} event
         * @param {?} delta
         * @param {?} revertFunc
         * @param {?} jsEvent
         * @param {?} ui
         * @param {?} view
         * @return {?}
         */
        function (event, delta, revertFunc, jsEvent, ui, view) {
            _this._updateEvent(event);
            _this.onEventResize.emit({
                'event': event,
                'delta': delta,
                'revertFunc': revertFunc,
                'jsEvent': jsEvent,
                'view': view
            });
        });
        this.config.viewRender = (/**
         * @param {?} view
         * @param {?} element
         * @return {?}
         */
        function (view, element) {
            _this.onViewRender.emit({
                'view': view,
                'element': element
            });
        });
        this.config.viewDestroy = (/**
         * @param {?} view
         * @param {?} element
         * @return {?}
         */
        function (view, element) {
            _this.onViewDestroy.emit({
                'view': view,
                'element': element
            });
        });
        this.config.navLinkDayClick = (/**
         * @param {?} weekStart
         * @param {?} jsEvent
         * @return {?}
         */
        function (weekStart, jsEvent) {
            _this.onNavLinkDayClick.emit({
                'weekStart': weekStart,
                'jsEvent': jsEvent
            });
        });
        this.config.navLinkWeekClick = (/**
         * @param {?} weekStart
         * @param {?} jsEvent
         * @return {?}
         */
        function (weekStart, jsEvent) {
            _this.onNavLinkWeekClick.emit({
                'weekStart': weekStart,
                'jsEvent': jsEvent
            });
        });
        this.config.eventRender = (/**
         * @param {?} event
         * @param {?} element
         * @param {?} view
         * @return {?}
         */
        function (event, element, view) {
            _this.onEventRender.emit({
                'event': event,
                'element': element,
                'view': view
            });
        });
        this.config.eventDestroy = (/**
         * @param {?} event
         * @param {?} element
         * @param {?} view
         * @return {?}
         */
        function (event, element, view) {
            _this.onEventDestroy.emit({
                'event': event,
                'element': element,
                'view': view
            });
        });
        this.config.eventAfterRender = (/**
         * @param {?} event
         * @param {?} element
         * @param {?} view
         * @return {?}
         */
        function (event, element, view) {
            _this.onEventAfterRender.emit({
                'event': event,
                'element': element,
                'view': view
            });
        });
        this.config.columnHeaderHtml = (/**
         * @param {?} event
         * @param {?} element
         * @param {?} view
         * @return {?}
         */
        function (event, element, view) {
            _this.onColumnHeaderHtml.emit({
                'event': event,
                'element': element,
                'view': view
            });
        });
    };
    /**
     * @return {?}
     */
    FullCalendarComponent.prototype.ngOnDestroy = /**
     * @return {?}
     */
    function () {
        if (this.calendar) {
            this.calendar.destroy();
            this.initialized = false;
            this.calendar = null;
        }
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    FullCalendarComponent.prototype.ngOnChanges = /**
     * @param {?} changes
     * @return {?}
     */
    function (changes) {
        if (this.calendar) {
            for (var propName in changes) {
                if (propName !== 'events') {
                    this.calendar.option(propName, changes[propName].currentValue);
                }
            }
        }
    };
    /**
     * @return {?}
     */
    FullCalendarComponent.prototype.ngAfterViewChecked = /**
     * @return {?}
     */
    function () {
        if (!this.initialized && this.el.nativeElement.offsetParent) {
            this.initialize();
        }
    };
    /**
     * @return {?}
     */
    FullCalendarComponent.prototype.ngDoCheck = /**
     * @return {?}
     */
    function () {
        /** @type {?} */
        var eventChanges = this.eventDiffer.diff(this.events);
        if (this.calendar && eventChanges) {
            this.calendar.removeEventSources();
            if (this.events) {
                this.calendar.addEventSource(this.events);
            }
        }
        /** @type {?} */
        var resourceChanges = this.resourceDiffer.diff(this.resources);
        if (this.calendar && resourceChanges) {
            this.calendar.refetchResources();
        }
    };
    /**
     * @private
     * @return {?}
     */
    FullCalendarComponent.prototype.initialize = /**
     * @private
     * @return {?}
     */
    function () {
        FullCalendar.dragula({
            containers: [this.droppableRef],
            copy: true
        });
        this.calendar = new FullCalendar.Calendar(this.el.nativeElement, this.config);
        this.calendar.render();
        if (this.events) {
            this.calendar.addEventSource(this.events);
        }
        this.initialized = true;
    };
    /**
     * @private
     * @return {?}
     */
    FullCalendarComponent.prototype.safeGenerateConfig = /**
     * @private
     * @return {?}
     */
    function () {
        /** @type {?} */
        var configFromAttrs = {
            // tslint:disable:no-non-null-assertion
            header: (/** @type {?} */ (this.header)),
            isRTL: (/** @type {?} */ (this.isRTL)),
            weekends: (/** @type {?} */ (this.weekends)),
            hiddenDays: (/** @type {?} */ (this.hiddenDays)),
            fixedWeekCount: (/** @type {?} */ (this.fixedWeekCount)),
            weekNumbers: (/** @type {?} */ (this.weekNumbers)),
            businessHours: (/** @type {?} */ (this.businessHours)),
            height: (/** @type {?} */ (this.height)),
            contentHeight: (/** @type {?} */ (this.contentHeight)),
            aspectRatio: (/** @type {?} */ (this.aspectRatio)),
            eventLimit: (/** @type {?} */ (this.eventLimit)),
            defaultDate: (/** @type {?} */ (this.defaultDate)),
            locale: (/** @type {?} */ (this.locale)),
            timezone: (/** @type {?} */ (this.timezone)),
            timeFormat: (/** @type {?} */ (this.timeFormat)),
            editable: (/** @type {?} */ (this.editable)),
            droppable: (/** @type {?} */ (this.droppable)),
            eventStartEditable: (/** @type {?} */ (this.eventStartEditable)),
            eventDurationEditable: (/** @type {?} */ (this.eventDurationEditable)),
            defaultView: (/** @type {?} */ (this.defaultView)),
            allDaySlot: (/** @type {?} */ (this.allDaySlot)),
            allDayText: (/** @type {?} */ (this.allDayText)),
            slotDuration: (/** @type {?} */ (this.slotDuration)),
            slotLabelInterval: (/** @type {?} */ (this.slotLabelInterval)),
            snapDuration: (/** @type {?} */ (this.snapDuration)),
            scrollTime: (/** @type {?} */ (this.scrollTime)),
            minTime: (/** @type {?} */ (this.minTime)),
            maxTime: (/** @type {?} */ (this.maxTime)),
            slotEventOverlap: (/** @type {?} */ (this.slotEventOverlap)),
            nowIndicator: (/** @type {?} */ (this.nowIndicator)),
            dragRevertDuration: (/** @type {?} */ (this.dragRevertDuration)),
            dragOpacity: (/** @type {?} */ (this.dragOpacity)),
            dragScroll: (/** @type {?} */ (this.dragScroll)),
            eventOverlap: (/** @type {?} */ (this.eventOverlap)),
            eventConstraint: (/** @type {?} */ (this.eventConstraint)),
            dayRender: (/** @type {?} */ (this.dayRender)),
            navLinks: (/** @type {?} */ (this.navLinks)),
        };
        return tslib_1.__assign({}, defaultConfig, this.removeUndefinedProperties(this.options), this.removeUndefinedProperties(configFromAttrs));
    };
    /**
     * @private
     * @param {?} event
     * @return {?}
     */
    FullCalendarComponent.prototype._updateEvent = /**
     * @private
     * @param {?} event
     * @return {?}
     */
    function (event) {
        /** @type {?} */
        var sourceEvent = this._findEvent(event.id);
        if (sourceEvent) {
            sourceEvent.start = event.start.format();
            if (event.end) {
                sourceEvent.end = event.end.format();
            }
            if (event.resourceId) {
                sourceEvent.resourceId = event.resourceId;
            }
        }
    };
    /**
     * @private
     * @param {?} id
     * @return {?}
     */
    FullCalendarComponent.prototype._findEvent = /**
     * @private
     * @param {?} id
     * @return {?}
     */
    function (id) {
        var e_1, _a;
        /** @type {?} */
        var event;
        if (this.events) {
            try {
                for (var _b = tslib_1.__values(this.events), _c = _b.next(); !_c.done; _c = _b.next()) {
                    var e = _c.value;
                    if (e.id === id) {
                        event = e;
                        break;
                    }
                }
            }
            catch (e_1_1) { e_1 = { error: e_1_1 }; }
            finally {
                try {
                    if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                }
                finally { if (e_1) throw e_1.error; }
            }
        }
        return event;
    };
    /**
     * @template T
     * @param {?} object
     * @return {?}
     */
    FullCalendarComponent.prototype.removeUndefinedProperties = /**
     * @template T
     * @param {?} object
     * @return {?}
     */
    function (object) {
        return JSON.parse(JSON.stringify(typeof object === 'object' ? object : {}));
    };
    FullCalendarComponent.decorators = [
        { type: Component, args: [{
                    selector: 'ngx-fullcalendar',
                    template: " "
                }] }
    ];
    /** @nocollapse */
    FullCalendarComponent.ctorParameters = function () { return [
        { type: ElementRef },
        { type: IterableDiffers }
    ]; };
    FullCalendarComponent.propDecorators = {
        droppableRef: [{ type: Input }],
        options: [{ type: Input }],
        events: [{ type: Input }],
        resources: [{ type: Input }],
        header: [{ type: Input }],
        isRTL: [{ type: Input }],
        weekends: [{ type: Input }],
        hiddenDays: [{ type: Input }],
        fixedWeekCount: [{ type: Input }],
        weekNumbers: [{ type: Input }],
        businessHours: [{ type: Input }],
        height: [{ type: Input }],
        contentHeight: [{ type: Input }],
        aspectRatio: [{ type: Input }],
        eventLimit: [{ type: Input }],
        defaultDate: [{ type: Input }],
        editable: [{ type: Input }],
        droppable: [{ type: Input }],
        eventStartEditable: [{ type: Input }],
        eventDurationEditable: [{ type: Input }],
        defaultView: [{ type: Input }],
        allDaySlot: [{ type: Input }],
        allDayText: [{ type: Input }],
        slotDuration: [{ type: Input }],
        slotLabelInterval: [{ type: Input }],
        snapDuration: [{ type: Input }],
        scrollTime: [{ type: Input }],
        minTime: [{ type: Input }],
        maxTime: [{ type: Input }],
        slotEventOverlap: [{ type: Input }],
        nowIndicator: [{ type: Input }],
        dragRevertDuration: [{ type: Input }],
        dragOpacity: [{ type: Input }],
        dragScroll: [{ type: Input }],
        eventOverlap: [{ type: Input }],
        eventConstraint: [{ type: Input }],
        locale: [{ type: Input }],
        timezone: [{ type: Input }],
        timeFormat: [{ type: Input }],
        dayRender: [{ type: Input }],
        navLinks: [{ type: Input }],
        onDayClick: [{ type: Output }],
        onDrop: [{ type: Output }],
        onEventClick: [{ type: Output }],
        onEventMouseover: [{ type: Output }],
        onEventMouseout: [{ type: Output }],
        onEventDragStart: [{ type: Output }],
        onEventDragStop: [{ type: Output }],
        onEventDrop: [{ type: Output }],
        onEventReceive: [{ type: Output }],
        onEventResizeStart: [{ type: Output }],
        onEventResizeStop: [{ type: Output }],
        onEventResize: [{ type: Output }],
        onViewRender: [{ type: Output }],
        onViewDestroy: [{ type: Output }],
        onNavLinkDayClick: [{ type: Output }],
        onNavLinkWeekClick: [{ type: Output }],
        onEventRender: [{ type: Output }],
        onEventDestroy: [{ type: Output }],
        onEventAfterRender: [{ type: Output }],
        onColumnHeaderHtml: [{ type: Output }]
    };
    return FullCalendarComponent;
}());
export { FullCalendarComponent };
if (false) {
    /** @type {?} */
    FullCalendarComponent.prototype.droppableRef;
    /** @type {?} */
    FullCalendarComponent.prototype.options;
    /** @type {?} */
    FullCalendarComponent.prototype.events;
    /** @type {?} */
    FullCalendarComponent.prototype.resources;
    /** @type {?} */
    FullCalendarComponent.prototype.header;
    /** @type {?} */
    FullCalendarComponent.prototype.isRTL;
    /** @type {?} */
    FullCalendarComponent.prototype.weekends;
    /** @type {?} */
    FullCalendarComponent.prototype.hiddenDays;
    /** @type {?} */
    FullCalendarComponent.prototype.fixedWeekCount;
    /** @type {?} */
    FullCalendarComponent.prototype.weekNumbers;
    /** @type {?} */
    FullCalendarComponent.prototype.businessHours;
    /** @type {?} */
    FullCalendarComponent.prototype.height;
    /** @type {?} */
    FullCalendarComponent.prototype.contentHeight;
    /** @type {?} */
    FullCalendarComponent.prototype.aspectRatio;
    /** @type {?} */
    FullCalendarComponent.prototype.eventLimit;
    /** @type {?} */
    FullCalendarComponent.prototype.defaultDate;
    /** @type {?} */
    FullCalendarComponent.prototype.editable;
    /** @type {?} */
    FullCalendarComponent.prototype.droppable;
    /** @type {?} */
    FullCalendarComponent.prototype.eventStartEditable;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDurationEditable;
    /** @type {?} */
    FullCalendarComponent.prototype.defaultView;
    /** @type {?} */
    FullCalendarComponent.prototype.allDaySlot;
    /** @type {?} */
    FullCalendarComponent.prototype.allDayText;
    /** @type {?} */
    FullCalendarComponent.prototype.slotDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.slotLabelInterval;
    /** @type {?} */
    FullCalendarComponent.prototype.snapDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.scrollTime;
    /** @type {?} */
    FullCalendarComponent.prototype.minTime;
    /** @type {?} */
    FullCalendarComponent.prototype.maxTime;
    /** @type {?} */
    FullCalendarComponent.prototype.slotEventOverlap;
    /** @type {?} */
    FullCalendarComponent.prototype.nowIndicator;
    /** @type {?} */
    FullCalendarComponent.prototype.dragRevertDuration;
    /** @type {?} */
    FullCalendarComponent.prototype.dragOpacity;
    /** @type {?} */
    FullCalendarComponent.prototype.dragScroll;
    /** @type {?} */
    FullCalendarComponent.prototype.eventOverlap;
    /** @type {?} */
    FullCalendarComponent.prototype.eventConstraint;
    /** @type {?} */
    FullCalendarComponent.prototype.locale;
    /** @type {?} */
    FullCalendarComponent.prototype.timezone;
    /** @type {?} */
    FullCalendarComponent.prototype.timeFormat;
    /** @type {?} */
    FullCalendarComponent.prototype.dayRender;
    /** @type {?} */
    FullCalendarComponent.prototype.navLinks;
    /** @type {?} */
    FullCalendarComponent.prototype.onDayClick;
    /** @type {?} */
    FullCalendarComponent.prototype.onDrop;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventClick;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventMouseover;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventMouseout;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventDragStart;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventDragStop;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventDrop;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventReceive;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventResizeStart;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventResizeStop;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventResize;
    /** @type {?} */
    FullCalendarComponent.prototype.onViewRender;
    /** @type {?} */
    FullCalendarComponent.prototype.onViewDestroy;
    /** @type {?} */
    FullCalendarComponent.prototype.onNavLinkDayClick;
    /** @type {?} */
    FullCalendarComponent.prototype.onNavLinkWeekClick;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventRender;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventDestroy;
    /** @type {?} */
    FullCalendarComponent.prototype.onEventAfterRender;
    /** @type {?} */
    FullCalendarComponent.prototype.onColumnHeaderHtml;
    /** @type {?} */
    FullCalendarComponent.prototype.calendar;
    /** @type {?} */
    FullCalendarComponent.prototype.initialized;
    /** @type {?} */
    FullCalendarComponent.prototype.eventDiffer;
    /** @type {?} */
    FullCalendarComponent.prototype.resourceDiffer;
    /** @type {?} */
    FullCalendarComponent.prototype.config;
    /**
     * @type {?}
     * @private
     */
    FullCalendarComponent.prototype.el;
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZnVsbGNhbGVuZGFyLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiJuZzovL25neC1mdWxsY2FsZW5kYXIvIiwic291cmNlcyI6WyJsaWIvZnVsbGNhbGVuZGFyLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLE9BQU8sRUFFTCxTQUFTLEVBRVQsVUFBVSxFQUNWLFlBQVksRUFDWixLQUFLLEVBQ0wsZUFBZSxFQUlmLE1BQU0sR0FFUCxNQUFNLGVBQWUsQ0FBQzs7SUFRakIsYUFBYSxHQUF3QjtJQUN6QyxXQUFXLEVBQUUsSUFBSTtJQUNqQixXQUFXLEVBQUUsT0FBTztJQUNwQixVQUFVLEVBQUUsSUFBSTtJQUNoQixVQUFVLEVBQUUsU0FBUztJQUNyQixZQUFZLEVBQUUsVUFBVTtJQUN4QixVQUFVLEVBQUUsVUFBVTtJQUN0QixPQUFPLEVBQUUsVUFBVTtJQUNuQixPQUFPLEVBQUUsVUFBVTtJQUNuQixnQkFBZ0IsRUFBRSxJQUFJO0lBQ3RCLGtCQUFrQixFQUFFLEdBQUc7SUFDdkIsV0FBVyxFQUFFLEdBQUc7SUFDaEIsVUFBVSxFQUFFLElBQUk7SUFDaEIsUUFBUSxFQUFFLEtBQUs7SUFDZixVQUFVLEVBQUUsSUFBSTtDQUNqQjtBQUVEO0lBK0VFLCtCQUFvQixFQUFjLEVBQ2hDLE9BQXdCO1FBRE4sT0FBRSxHQUFGLEVBQUUsQ0FBWTs7UUE3QnhCLGVBQVUsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNuRCxXQUFNLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFDL0MsaUJBQVksR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUNyRCxxQkFBZ0IsR0FBc0IsSUFBSSxZQUFZLEVBQUUsQ0FBQztRQUN6RCxvQkFBZSxHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3hELHFCQUFnQixHQUFzQixJQUFJLFlBQVksRUFBRSxDQUFDO1FBQ3pELG9CQUFlLEdBQXNCLElBQUksWUFBWSxFQUFFLENBQUM7UUFD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RTs7SUFDaEUsa0RBQW9FOztJQUNwRSxtREFBcUU7O0lBQ3JFLDhDQUFnRTs7SUFDaEUsK0NBQWlFOztJQUNqRSxtREFBcUU7O0lBQ3JFLG1EQUFxRTs7SUFJckUseUNBQWM7O0lBQ2QsNENBQXFCOztJQUNyQiw0Q0FBaUI7O0lBQ2pCLCtDQUFvQjs7SUFDcEIsdUNBQVk7Ozs7O0lBRUEsbUNBQXNCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcbiAgQWZ0ZXJWaWV3Q2hlY2tlZCxcbiAgQ29tcG9uZW50LFxuICBEb0NoZWNrLFxuICBFbGVtZW50UmVmLFxuICBFdmVudEVtaXR0ZXIsXG4gIElucHV0LFxuICBJdGVyYWJsZURpZmZlcnMsXG4gIE9uQ2hhbmdlcyxcbiAgT25EZXN0cm95LFxuICBPbkluaXQsXG4gIE91dHB1dCxcbiAgU2ltcGxlQ2hhbmdlcyxcbn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbmltcG9ydCB7IEV2ZW50T2JqZWN0IH0gZnJvbSAnLi9ldmVudC5vYmplY3QnO1xuaW1wb3J0IHsgRnVsbENhbGVuZGFyT3B0aW9ucyB9IGZyb20gJy4vZnVsbGNhbGVuZGFyLW9wdGlvbnMnO1xuaW1wb3J0IHsgUmVzb3VyY2VPYmplY3QgfSBmcm9tICcuL3Jlc291cmNlLW9iamVjdCc7XG5cbmRlY2xhcmUgY29uc3QgRnVsbENhbGVuZGFyOiBhbnk7XG5cbmNvbnN0IGRlZmF1bHRDb25maWc6IEZ1bGxDYWxlbmRhck9wdGlvbnMgPSB7XG4gIGFzcGVjdFJhdGlvOiAxLjM1LFxuICBkZWZhdWx0VmlldzogJ21vbnRoJyxcbiAgYWxsRGF5U2xvdDogdHJ1ZSxcbiAgYWxsRGF5VGV4dDogJ2FsbC1kYXknLFxuICBzbG90RHVyYXRpb246ICcwMDozMDowMCcsXG4gIHNjcm9sbFRpbWU6ICcwNjowMDowMCcsXG4gIG1pblRpbWU6ICcwMDowMDowMCcsXG4gIG1heFRpbWU6ICcyNDowMDowMCcsXG4gIHNsb3RFdmVudE92ZXJsYXA6IHRydWUsXG4gIGRyYWdSZXZlcnREdXJhdGlvbjogNTAwLFxuICBkcmFnT3BhY2l0eTogLjc1LFxuICBkcmFnU2Nyb2xsOiB0cnVlLFxuICB0aW1lem9uZTogZmFsc2UsXG4gIHRpbWVGb3JtYXQ6IG51bGxcbn07XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25neC1mdWxsY2FsZW5kYXInLFxuICB0ZW1wbGF0ZTogYCBgXG59KVxuZXhwb3J0IGNsYXNzIEZ1bGxDYWxlbmRhckNvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95LCBBZnRlclZpZXdDaGVja2VkLCBEb0NoZWNrLCBPbkNoYW5nZXMge1xuXG4gIEBJbnB1dCgpIGRyb3BwYWJsZVJlZjogYW55O1xuICBASW5wdXQoKSBvcHRpb25zOiBGdWxsQ2FsZW5kYXJPcHRpb25zO1xuXG4gIEBJbnB1dCgpIGV2ZW50czogQXJyYXk8RXZlbnRPYmplY3Q+O1xuICBASW5wdXQoKSByZXNvdXJjZXM6IEFycmF5PFJlc291cmNlT2JqZWN0PjtcbiAgQElucHV0KCkgaGVhZGVyOiBhbnk7XG4gIEBJbnB1dCgpIGlzUlRMOiBib29sZWFuO1xuICBASW5wdXQoKSB3ZWVrZW5kczogYm9vbGVhbjtcbiAgQElucHV0KCkgaGlkZGVuRGF5czogbnVtYmVyW107XG4gIEBJbnB1dCgpIGZpeGVkV2Vla0NvdW50OiBib29sZWFuO1xuICBASW5wdXQoKSB3ZWVrTnVtYmVyczogYm9vbGVhbjtcbiAgQElucHV0KCkgYnVzaW5lc3NIb3VyczogYW55O1xuICBASW5wdXQoKSBoZWlnaHQ6IGFueTtcbiAgQElucHV0KCkgY29udGVudEhlaWdodDogYW55O1xuICBASW5wdXQoKSBhc3BlY3RSYXRpbzogbnVtYmVyO1xuICBASW5wdXQoKSBldmVudExpbWl0OiBhbnk7XG4gIEBJbnB1dCgpIGRlZmF1bHREYXRlOiBhbnk7XG4gIEBJbnB1dCgpIGVkaXRhYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSBkcm9wcGFibGU6IGJvb2xlYW47XG4gIEBJbnB1dCgpIGV2ZW50U3RhcnRFZGl0YWJsZTogYm9vbGVhbjtcbiAgQElucHV0KCkgZXZlbnREdXJhdGlvbkVkaXRhYmxlOiBib29sZWFuO1xuICBASW5wdXQoKSBkZWZhdWx0Vmlldzogc3RyaW5nO1xuICBASW5wdXQoKSBhbGxEYXlTbG90OiBib29sZWFuO1xuICBASW5wdXQoKSBhbGxEYXlUZXh0OiBzdHJpbmc7XG4gIEBJbnB1dCgpIHNsb3REdXJhdGlvbjogYW55O1xuICBASW5wdXQoKSBzbG90TGFiZWxJbnRlcnZhbDogYW55O1xuICBASW5wdXQoKSBzbmFwRHVyYXRpb246IGFueTtcbiAgQElucHV0KCkgc2Nyb2xsVGltZTogYW55O1xuICBASW5wdXQoKSBtaW5UaW1lOiBhbnk7XG4gIEBJbnB1dCgpIG1heFRpbWU6IGFueTtcbiAgQElucHV0KCkgc2xvdEV2ZW50T3ZlcmxhcDogYm9vbGVhbjtcbiAgQElucHV0KCkgbm93SW5kaWNhdG9yOiBib29sZWFuO1xuICBASW5wdXQoKSBkcmFnUmV2ZXJ0RHVyYXRpb246IG51bWJlcjtcbiAgQElucHV0KCkgZHJhZ09wYWNpdHk6IG51bWJlcjtcbiAgQElucHV0KCkgZHJhZ1Njcm9sbDogYm9vbGVhbjtcbiAgQElucHV0KCkgZXZlbnRPdmVybGFwOiBhbnk7XG4gIEBJbnB1dCgpIGV2ZW50Q29uc3RyYWludDogYW55O1xuICBASW5wdXQoKSBsb2NhbGU6IHN0cmluZztcbiAgQElucHV0KCkgdGltZXpvbmU6IGJvb2xlYW4gfCBzdHJpbmc7XG4gIEBJbnB1dCgpIHRpbWVGb3JtYXQ6IHN0cmluZyB8IG51bGw7XG4gIEBJbnB1dCgpIGRheVJlbmRlcjogRnVuY3Rpb247XG4gIEBJbnB1dCgpIG5hdkxpbmtzOiBib29sZWFuO1xuXG4gIC8vIHRzbGludDpkaXNhYmxlOm5vLW91dHB1dC1vbi1wcmVmaXhcbiAgQE91dHB1dCgpIG9uRGF5Q2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25Ecm9wOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uRXZlbnRDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkV2ZW50TW91c2VvdmVyOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uRXZlbnRNb3VzZW91dDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkV2ZW50RHJhZ1N0YXJ0OiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcbiAgQE91dHB1dCgpIG9uRXZlbnREcmFnU3RvcDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkV2ZW50RHJvcDogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkV2ZW50UmVjZWl2ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkV2ZW50UmVzaXplU3RhcnQ6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25FdmVudFJlc2l6ZVN0b3A6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25FdmVudFJlc2l6ZTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvblZpZXdSZW5kZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25WaWV3RGVzdHJveTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbk5hdkxpbmtEYXlDbGljazogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbk5hdkxpbmtXZWVrQ2xpY2s6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25FdmVudFJlbmRlcjogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkV2ZW50RGVzdHJveTogRXZlbnRFbWl0dGVyPGFueT4gPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4gIEBPdXRwdXQoKSBvbkV2ZW50QWZ0ZXJSZW5kZXI6IEV2ZW50RW1pdHRlcjxhbnk+ID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuICBAT3V0cHV0KCkgb25Db2x1bW5IZWFkZXJIdG1sOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXIoKTtcblxuICAvLyB0c2xpbnQ6ZW5hYmxlOm5vLW91dHB1dC1vbi1wcmVmaXhcblxuICBjYWxlbmRhcjogYW55O1xuICBpbml0aWFsaXplZDogYm9vbGVhbjtcbiAgZXZlbnREaWZmZXI6IGFueTtcbiAgcmVzb3VyY2VEaWZmZXI6IGFueTtcbiAgY29uZmlnOiBhbnk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBlbDogRWxlbWVudFJlZixcbiAgICBkaWZmZXJzOiBJdGVyYWJsZURpZmZlcnMpIHtcbiAgICB0aGlzLmV2ZW50RGlmZmVyID0gZGlmZmVycy5maW5kKFtdKS5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5yZXNvdXJjZURpZmZlciA9IGRpZmZlcnMuZmluZChbXSkuY3JlYXRlKG51bGwpO1xuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY29uZmlnID0gdGhpcy5zYWZlR2VuZXJhdGVDb25maWcoKTtcbiAgICB0aGlzLmNvbmZpZy5yZXNvdXJjZXMgPSAoY2FsbGJhY2spID0+IHtcbiAgICAgIGNhbGxiYWNrKHRoaXMucmVzb3VyY2VzIHx8IFtdKTtcbiAgICB9O1xuICAgIHRoaXMuY29uZmlnLmRheUNsaWNrID0gKGRhdGUsIGpzRXZlbnQsIHZpZXcsIHJlc291cmNlSWQ/KSA9PiB7XG4gICAgICB0aGlzLm9uRGF5Q2xpY2suZW1pdCh7XG4gICAgICAgICdkYXRlJzogZGF0ZSxcbiAgICAgICAgJ2pzRXZlbnQnOiBqc0V2ZW50LFxuICAgICAgICAndmlldyc6IHZpZXcsXG4gICAgICAgICdyZXNvdXJjZUlkJzogcmVzb3VyY2VJZFxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLmNvbmZpZy5kcm9wID0gKGRhdGUsIGpzRXZlbnQsIHVpLCByZXNvdXJjZUlkKSA9PiB7XG4gICAgICB0aGlzLm9uRHJvcC5lbWl0KHtcbiAgICAgICAgJ2RhdGUnOiBkYXRlLFxuICAgICAgICAnanNFdmVudCc6IGpzRXZlbnQsXG4gICAgICAgICdyZXNvdXJjZUlkJzogcmVzb3VyY2VJZFxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLmNvbmZpZy5ldmVudENsaWNrID0gKGNhbEV2ZW50LCBqc0V2ZW50LCB2aWV3KSA9PiB7XG4gICAgICB0aGlzLm9uRXZlbnRDbGljay5lbWl0KHtcbiAgICAgICAgJ2NhbEV2ZW50JzogY2FsRXZlbnQsXG4gICAgICAgICdqc0V2ZW50JzoganNFdmVudCxcbiAgICAgICAgJ3ZpZXcnOiB2aWV3XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuY29uZmlnLmV2ZW50TW91c2VvdmVyID0gKGNhbEV2ZW50LCBqc0V2ZW50LCB2aWV3KSA9PiB7XG4gICAgICB0aGlzLm9uRXZlbnRNb3VzZW92ZXIuZW1pdCh7XG4gICAgICAgICdjYWxFdmVudCc6IGNhbEV2ZW50LFxuICAgICAgICAnanNFdmVudCc6IGpzRXZlbnQsXG4gICAgICAgICd2aWV3Jzogdmlld1xuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLmNvbmZpZy5ldmVudE1vdXNlb3V0ID0gKGNhbEV2ZW50LCBqc0V2ZW50LCB2aWV3KSA9PiB7XG4gICAgICB0aGlzLm9uRXZlbnRNb3VzZW91dC5lbWl0KHtcbiAgICAgICAgJ2NhbEV2ZW50JzogY2FsRXZlbnQsXG4gICAgICAgICdqc0V2ZW50JzoganNFdmVudCxcbiAgICAgICAgJ3ZpZXcnOiB2aWV3XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuY29uZmlnLmV2ZW50RHJhZ1N0YXJ0ID0gKGV2ZW50LCBqc0V2ZW50LCB1aSwgdmlldykgPT4ge1xuICAgICAgdGhpcy5vbkV2ZW50RHJhZ1N0YXJ0LmVtaXQoe1xuICAgICAgICAnZXZlbnQnOiBldmVudCxcbiAgICAgICAgJ2pzRXZlbnQnOiBqc0V2ZW50LFxuICAgICAgICAndmlldyc6IHZpZXdcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5jb25maWcuZXZlbnREcmFnU3RvcCA9IChldmVudCwganNFdmVudCwgdWksIHZpZXcpID0+IHtcbiAgICAgIHRoaXMub25FdmVudERyYWdTdG9wLmVtaXQoe1xuICAgICAgICAnZXZlbnQnOiBldmVudCxcbiAgICAgICAgJ2pzRXZlbnQnOiBqc0V2ZW50LFxuICAgICAgICAndmlldyc6IHZpZXdcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5jb25maWcuZXZlbnREcm9wID0gKGV2ZW50LCBkZWx0YSwgcmV2ZXJ0RnVuYywganNFdmVudCwgdWksIHZpZXcpID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZUV2ZW50KGV2ZW50KTtcblxuICAgICAgdGhpcy5vbkV2ZW50RHJvcC5lbWl0KHtcbiAgICAgICAgJ2V2ZW50JzogZXZlbnQsXG4gICAgICAgICdkZWx0YSc6IGRlbHRhLFxuICAgICAgICAncmV2ZXJ0RnVuYyc6IHJldmVydEZ1bmMsXG4gICAgICAgICdqc0V2ZW50JzoganNFdmVudCxcbiAgICAgICAgJ3ZpZXcnOiB2aWV3XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuY29uZmlnLmV2ZW50UmVjZWl2ZSA9IChldmVudCkgPT4ge1xuICAgICAgdGhpcy5vbkV2ZW50UmVjZWl2ZS5lbWl0KHtcbiAgICAgICAgJ2V2ZW50JzogZXZlbnRcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5jb25maWcuZXZlbnRSZXNpemVTdGFydCA9IChldmVudCwganNFdmVudCwgdWksIHZpZXcpID0+IHtcbiAgICAgIHRoaXMub25FdmVudFJlc2l6ZVN0YXJ0LmVtaXQoe1xuICAgICAgICAnZXZlbnQnOiBldmVudCxcbiAgICAgICAgJ2pzRXZlbnQnOiBqc0V2ZW50LFxuICAgICAgICAndmlldyc6IHZpZXdcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5jb25maWcuZXZlbnRSZXNpemVTdG9wID0gKGV2ZW50LCBqc0V2ZW50LCB1aSwgdmlldykgPT4ge1xuICAgICAgdGhpcy5vbkV2ZW50UmVzaXplU3RvcC5lbWl0KHtcbiAgICAgICAgJ2V2ZW50JzogZXZlbnQsXG4gICAgICAgICdqc0V2ZW50JzoganNFdmVudCxcbiAgICAgICAgJ3ZpZXcnOiB2aWV3XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuY29uZmlnLmV2ZW50UmVzaXplID0gKGV2ZW50LCBkZWx0YSwgcmV2ZXJ0RnVuYywganNFdmVudCwgdWksIHZpZXcpID0+IHtcbiAgICAgIHRoaXMuX3VwZGF0ZUV2ZW50KGV2ZW50KTtcblxuICAgICAgdGhpcy5vbkV2ZW50UmVzaXplLmVtaXQoe1xuICAgICAgICAnZXZlbnQnOiBldmVudCxcbiAgICAgICAgJ2RlbHRhJzogZGVsdGEsXG4gICAgICAgICdyZXZlcnRGdW5jJzogcmV2ZXJ0RnVuYyxcbiAgICAgICAgJ2pzRXZlbnQnOiBqc0V2ZW50LFxuICAgICAgICAndmlldyc6IHZpZXdcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5jb25maWcudmlld1JlbmRlciA9ICh2aWV3LCBlbGVtZW50KSA9PiB7XG4gICAgICB0aGlzLm9uVmlld1JlbmRlci5lbWl0KHtcbiAgICAgICAgJ3ZpZXcnOiB2aWV3LFxuICAgICAgICAnZWxlbWVudCc6IGVsZW1lbnRcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5jb25maWcudmlld0Rlc3Ryb3kgPSAodmlldywgZWxlbWVudCkgPT4ge1xuICAgICAgdGhpcy5vblZpZXdEZXN0cm95LmVtaXQoe1xuICAgICAgICAndmlldyc6IHZpZXcsXG4gICAgICAgICdlbGVtZW50JzogZWxlbWVudFxuICAgICAgfSk7XG4gICAgfTtcbiAgICB0aGlzLmNvbmZpZy5uYXZMaW5rRGF5Q2xpY2sgPSAod2Vla1N0YXJ0LCBqc0V2ZW50KSA9PiB7XG4gICAgICB0aGlzLm9uTmF2TGlua0RheUNsaWNrLmVtaXQoe1xuICAgICAgICAnd2Vla1N0YXJ0Jzogd2Vla1N0YXJ0LFxuICAgICAgICAnanNFdmVudCc6IGpzRXZlbnRcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5jb25maWcubmF2TGlua1dlZWtDbGljayA9ICh3ZWVrU3RhcnQsIGpzRXZlbnQpID0+IHtcbiAgICAgIHRoaXMub25OYXZMaW5rV2Vla0NsaWNrLmVtaXQoe1xuICAgICAgICAnd2Vla1N0YXJ0Jzogd2Vla1N0YXJ0LFxuICAgICAgICAnanNFdmVudCc6IGpzRXZlbnRcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5jb25maWcuZXZlbnRSZW5kZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHZpZXcpID0+IHtcbiAgICAgIHRoaXMub25FdmVudFJlbmRlci5lbWl0KHtcbiAgICAgICAgJ2V2ZW50JzogZXZlbnQsXG4gICAgICAgICdlbGVtZW50JzogZWxlbWVudCxcbiAgICAgICAgJ3ZpZXcnOiB2aWV3XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuY29uZmlnLmV2ZW50RGVzdHJveSA9IChldmVudCwgZWxlbWVudCwgdmlldykgPT4ge1xuICAgICAgdGhpcy5vbkV2ZW50RGVzdHJveS5lbWl0KHtcbiAgICAgICAgJ2V2ZW50JzogZXZlbnQsXG4gICAgICAgICdlbGVtZW50JzogZWxlbWVudCxcbiAgICAgICAgJ3ZpZXcnOiB2aWV3XG4gICAgICB9KTtcbiAgICB9O1xuICAgIHRoaXMuY29uZmlnLmV2ZW50QWZ0ZXJSZW5kZXIgPSAoZXZlbnQsIGVsZW1lbnQsIHZpZXcpID0+IHtcbiAgICAgIHRoaXMub25FdmVudEFmdGVyUmVuZGVyLmVtaXQoe1xuICAgICAgICAnZXZlbnQnOiBldmVudCxcbiAgICAgICAgJ2VsZW1lbnQnOiBlbGVtZW50LFxuICAgICAgICAndmlldyc6IHZpZXdcbiAgICAgIH0pO1xuICAgIH07XG4gICAgdGhpcy5jb25maWcuY29sdW1uSGVhZGVySHRtbCA9IChldmVudCwgZWxlbWVudCwgdmlldykgPT4ge1xuICAgICAgdGhpcy5vbkNvbHVtbkhlYWRlckh0bWwuZW1pdCh7XG4gICAgICAgICdldmVudCc6IGV2ZW50LFxuICAgICAgICAnZWxlbWVudCc6IGVsZW1lbnQsXG4gICAgICAgICd2aWV3Jzogdmlld1xuICAgICAgfSk7XG4gICAgfTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCkge1xuICAgIGlmICh0aGlzLmNhbGVuZGFyKSB7XG4gICAgICB0aGlzLmNhbGVuZGFyLmRlc3Ryb3koKTtcbiAgICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSBmYWxzZTtcbiAgICAgIHRoaXMuY2FsZW5kYXIgPSBudWxsO1xuICAgIH1cbiAgfVxuXG4gIG5nT25DaGFuZ2VzKGNoYW5nZXM6IFNpbXBsZUNoYW5nZXMpIHtcbiAgICBpZiAodGhpcy5jYWxlbmRhcikge1xuICAgICAgZm9yIChjb25zdCBwcm9wTmFtZSBpbiBjaGFuZ2VzKSB7XG4gICAgICAgIGlmIChwcm9wTmFtZSAhPT0gJ2V2ZW50cycpIHtcbiAgICAgICAgICB0aGlzLmNhbGVuZGFyLm9wdGlvbihwcm9wTmFtZSwgY2hhbmdlc1twcm9wTmFtZV0uY3VycmVudFZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3Q2hlY2tlZCgpIHtcbiAgICBpZiAoIXRoaXMuaW5pdGlhbGl6ZWQgJiYgdGhpcy5lbC5uYXRpdmVFbGVtZW50Lm9mZnNldFBhcmVudCkge1xuICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuICB9XG5cbiAgbmdEb0NoZWNrKCkge1xuICAgIGNvbnN0IGV2ZW50Q2hhbmdlcyA9IHRoaXMuZXZlbnREaWZmZXIuZGlmZih0aGlzLmV2ZW50cyk7XG4gICAgaWYgKHRoaXMuY2FsZW5kYXIgJiYgZXZlbnRDaGFuZ2VzKSB7XG4gICAgICB0aGlzLmNhbGVuZGFyLnJlbW92ZUV2ZW50U291cmNlcygpO1xuICAgICAgaWYgKHRoaXMuZXZlbnRzKSB7XG4gICAgICAgIHRoaXMuY2FsZW5kYXIuYWRkRXZlbnRTb3VyY2UodGhpcy5ldmVudHMpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGNvbnN0IHJlc291cmNlQ2hhbmdlcyA9IHRoaXMucmVzb3VyY2VEaWZmZXIuZGlmZih0aGlzLnJlc291cmNlcyk7XG4gICAgaWYgKHRoaXMuY2FsZW5kYXIgJiYgcmVzb3VyY2VDaGFuZ2VzKSB7XG4gICAgICB0aGlzLmNhbGVuZGFyLnJlZmV0Y2hSZXNvdXJjZXMoKTtcbiAgICB9XG4gIH1cblxuICBwcml2YXRlIGluaXRpYWxpemUoKSB7XG4gICAgRnVsbENhbGVuZGFyLmRyYWd1bGEoe1xuICAgICAgY29udGFpbmVyczogW3RoaXMuZHJvcHBhYmxlUmVmXSxcbiAgICAgIGNvcHk6IHRydWVcbiAgICB9KTtcbiAgICB0aGlzLmNhbGVuZGFyID0gbmV3IEZ1bGxDYWxlbmRhci5DYWxlbmRhcih0aGlzLmVsLm5hdGl2ZUVsZW1lbnQsIHRoaXMuY29uZmlnKTtcbiAgICB0aGlzLmNhbGVuZGFyLnJlbmRlcigpO1xuICAgIGlmICh0aGlzLmV2ZW50cykge1xuICAgICAgdGhpcy5jYWxlbmRhci5hZGRFdmVudFNvdXJjZSh0aGlzLmV2ZW50cyk7XG4gICAgfVxuICAgIHRoaXMuaW5pdGlhbGl6ZWQgPSB0cnVlO1xuICB9XG5cbiAgcHJpdmF0ZSBzYWZlR2VuZXJhdGVDb25maWcoKSB7XG4gICAgY29uc3QgY29uZmlnRnJvbUF0dHJzID0ge1xuICAgICAgLy8gdHNsaW50OmRpc2FibGU6bm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgICBoZWFkZXI6IHRoaXMuaGVhZGVyISxcbiAgICAgIGlzUlRMOiB0aGlzLmlzUlRMISxcbiAgICAgIHdlZWtlbmRzOiB0aGlzLndlZWtlbmRzISxcbiAgICAgIGhpZGRlbkRheXM6IHRoaXMuaGlkZGVuRGF5cyEsXG4gICAgICBmaXhlZFdlZWtDb3VudDogdGhpcy5maXhlZFdlZWtDb3VudCEsXG4gICAgICB3ZWVrTnVtYmVyczogdGhpcy53ZWVrTnVtYmVycyEsXG4gICAgICBidXNpbmVzc0hvdXJzOiB0aGlzLmJ1c2luZXNzSG91cnMhLFxuICAgICAgaGVpZ2h0OiB0aGlzLmhlaWdodCEsXG4gICAgICBjb250ZW50SGVpZ2h0OiB0aGlzLmNvbnRlbnRIZWlnaHQhLFxuICAgICAgYXNwZWN0UmF0aW86IHRoaXMuYXNwZWN0UmF0aW8hLFxuICAgICAgZXZlbnRMaW1pdDogdGhpcy5ldmVudExpbWl0ISxcbiAgICAgIGRlZmF1bHREYXRlOiB0aGlzLmRlZmF1bHREYXRlISxcbiAgICAgIGxvY2FsZTogdGhpcy5sb2NhbGUhLFxuICAgICAgdGltZXpvbmU6IHRoaXMudGltZXpvbmUhLFxuICAgICAgdGltZUZvcm1hdDogdGhpcy50aW1lRm9ybWF0ISxcbiAgICAgIGVkaXRhYmxlOiB0aGlzLmVkaXRhYmxlISxcbiAgICAgIGRyb3BwYWJsZTogdGhpcy5kcm9wcGFibGUhLFxuICAgICAgZXZlbnRTdGFydEVkaXRhYmxlOiB0aGlzLmV2ZW50U3RhcnRFZGl0YWJsZSEsXG4gICAgICBldmVudER1cmF0aW9uRWRpdGFibGU6IHRoaXMuZXZlbnREdXJhdGlvbkVkaXRhYmxlISxcbiAgICAgIGRlZmF1bHRWaWV3OiB0aGlzLmRlZmF1bHRWaWV3ISxcbiAgICAgIGFsbERheVNsb3Q6IHRoaXMuYWxsRGF5U2xvdCEsXG4gICAgICBhbGxEYXlUZXh0OiB0aGlzLmFsbERheVRleHQhLFxuICAgICAgc2xvdER1cmF0aW9uOiB0aGlzLnNsb3REdXJhdGlvbiEsXG4gICAgICBzbG90TGFiZWxJbnRlcnZhbDogdGhpcy5zbG90TGFiZWxJbnRlcnZhbCEsXG4gICAgICBzbmFwRHVyYXRpb246IHRoaXMuc25hcER1cmF0aW9uISxcbiAgICAgIHNjcm9sbFRpbWU6IHRoaXMuc2Nyb2xsVGltZSEsXG4gICAgICBtaW5UaW1lOiB0aGlzLm1pblRpbWUhLFxuICAgICAgbWF4VGltZTogdGhpcy5tYXhUaW1lISxcbiAgICAgIHNsb3RFdmVudE92ZXJsYXA6IHRoaXMuc2xvdEV2ZW50T3ZlcmxhcCEsXG4gICAgICBub3dJbmRpY2F0b3I6IHRoaXMubm93SW5kaWNhdG9yISxcbiAgICAgIGRyYWdSZXZlcnREdXJhdGlvbjogdGhpcy5kcmFnUmV2ZXJ0RHVyYXRpb24hLFxuICAgICAgZHJhZ09wYWNpdHk6IHRoaXMuZHJhZ09wYWNpdHkhLFxuICAgICAgZHJhZ1Njcm9sbDogdGhpcy5kcmFnU2Nyb2xsISxcbiAgICAgIGV2ZW50T3ZlcmxhcDogdGhpcy5ldmVudE92ZXJsYXAhLFxuICAgICAgZXZlbnRDb25zdHJhaW50OiB0aGlzLmV2ZW50Q29uc3RyYWludCEsXG4gICAgICBkYXlSZW5kZXI6IHRoaXMuZGF5UmVuZGVyISxcbiAgICAgIG5hdkxpbmtzOiB0aGlzLm5hdkxpbmtzISxcbiAgICAgIC8vIHRzbGludDplbmFibGU6bm8tbm9uLW51bGwtYXNzZXJ0aW9uXG4gICAgfTtcblxuICAgIHJldHVybiB7XG4gICAgICAuLi5kZWZhdWx0Q29uZmlnLFxuICAgICAgLi4udGhpcy5yZW1vdmVVbmRlZmluZWRQcm9wZXJ0aWVzKHRoaXMub3B0aW9ucyksXG4gICAgICAuLi50aGlzLnJlbW92ZVVuZGVmaW5lZFByb3BlcnRpZXMoY29uZmlnRnJvbUF0dHJzKVxuICAgIH07XG4gIH1cblxuICBwcml2YXRlIF91cGRhdGVFdmVudChldmVudDogYW55KSB7XG4gICAgY29uc3Qgc291cmNlRXZlbnQgPSB0aGlzLl9maW5kRXZlbnQoZXZlbnQuaWQpO1xuICAgIGlmIChzb3VyY2VFdmVudCkge1xuICAgICAgc291cmNlRXZlbnQuc3RhcnQgPSBldmVudC5zdGFydC5mb3JtYXQoKTtcbiAgICAgIGlmIChldmVudC5lbmQpIHtcbiAgICAgICAgc291cmNlRXZlbnQuZW5kID0gZXZlbnQuZW5kLmZvcm1hdCgpO1xuICAgICAgfVxuICAgICAgaWYgKGV2ZW50LnJlc291cmNlSWQpIHtcbiAgICAgICAgc291cmNlRXZlbnQucmVzb3VyY2VJZCA9IGV2ZW50LnJlc291cmNlSWQ7XG4gICAgICB9XG4gICAgfVxuICB9XG5cbiAgcHJpdmF0ZSBfZmluZEV2ZW50KGlkOiBzdHJpbmcpIHtcbiAgICBsZXQgZXZlbnQ7XG4gICAgaWYgKHRoaXMuZXZlbnRzKSB7XG4gICAgICBmb3IgKGNvbnN0IGUgb2YgdGhpcy5ldmVudHMpIHtcbiAgICAgICAgaWYgKGUuaWQgPT09IGlkKSB7XG4gICAgICAgICAgZXZlbnQgPSBlO1xuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBldmVudDtcbiAgfVxuXG4gIHJlbW92ZVVuZGVmaW5lZFByb3BlcnRpZXM8VD4ob2JqZWN0OiBPYmplY3QpOiBUIHtcbiAgICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh0eXBlb2Ygb2JqZWN0ID09PSAnb2JqZWN0JyA/IG9iamVjdCA6IHt9KSk7XG4gIH1cblxufVxuIl19