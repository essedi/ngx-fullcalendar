import { AfterViewChecked, DoCheck, ElementRef, EventEmitter, IterableDiffers, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { EventObject } from './event.object';
import { FullCalendarOptions } from './fullcalendar-options';
import { ResourceObject } from './resource-object';
export declare class FullCalendarComponent implements OnInit, OnDestroy, AfterViewChecked, DoCheck, OnChanges {
    private el;
    droppableRef: any;
    options: FullCalendarOptions;
    events: Array<EventObject>;
    resources: Array<ResourceObject>;
    header: any;
    isRTL: boolean;
    weekends: boolean;
    hiddenDays: number[];
    fixedWeekCount: boolean;
    weekNumbers: boolean;
    businessHours: any;
    height: any;
    contentHeight: any;
    aspectRatio: number;
    eventLimit: any;
    defaultDate: any;
    editable: boolean;
    droppable: boolean;
    eventStartEditable: boolean;
    eventDurationEditable: boolean;
    defaultView: string;
    allDaySlot: boolean;
    allDayText: string;
    slotDuration: any;
    slotLabelInterval: any;
    snapDuration: any;
    scrollTime: any;
    minTime: any;
    maxTime: any;
    slotEventOverlap: boolean;
    nowIndicator: boolean;
    dragRevertDuration: number;
    dragOpacity: number;
    dragScroll: boolean;
    eventOverlap: any;
    eventConstraint: any;
    locale: string;
    timezone: boolean | string;
    timeFormat: string | null;
    dayRender: Function;
    navLinks: boolean;
    onDayClick: EventEmitter<any>;
    onDrop: EventEmitter<any>;
    onEventClick: EventEmitter<any>;
    onEventMouseover: EventEmitter<any>;
    onEventMouseout: EventEmitter<any>;
    onEventDragStart: EventEmitter<any>;
    onEventDragStop: EventEmitter<any>;
    onEventDrop: EventEmitter<any>;
    onEventReceive: EventEmitter<any>;
    onEventResizeStart: EventEmitter<any>;
    onEventResizeStop: EventEmitter<any>;
    onEventResize: EventEmitter<any>;
    onViewRender: EventEmitter<any>;
    onViewDestroy: EventEmitter<any>;
    onNavLinkDayClick: EventEmitter<any>;
    onNavLinkWeekClick: EventEmitter<any>;
    onEventRender: EventEmitter<any>;
    onEventDestroy: EventEmitter<any>;
    onEventAfterRender: EventEmitter<any>;
    onColumnHeaderHtml: EventEmitter<any>;
    calendar: any;
    initialized: boolean;
    eventDiffer: any;
    resourceDiffer: any;
    config: any;
    constructor(el: ElementRef, differs: IterableDiffers);
    ngOnInit(): void;
    ngOnDestroy(): void;
    ngOnChanges(changes: SimpleChanges): void;
    ngAfterViewChecked(): void;
    ngDoCheck(): void;
    private initialize;
    private safeGenerateConfig;
    private _updateEvent;
    private _findEvent;
    removeUndefinedProperties<T>(object: Object): T;
}