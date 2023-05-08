import { TemplateRef } from '@angular/core';

/**
 * Custom tab open event.
 * @see {@link Accordion.onOpen}
 * @event
 */
export interface AccordionTabOpenEvent {
    /**
     * Browser event.
     */
    originalEvent: Event;
    /**
     * Opened tab index.
     */
    index: number;
}

/**
 * Custom tab close event.
 * @see {@link Accordion.onClose}
 * @extends {AccordionTabOpenEvent}
 * @event
 */
export interface AccordionTabCloseEvent extends AccordionTabOpenEvent {}

/**
 * Defines valid templates in Accordion.
 * @group Templates
 */
export interface AccordionTemplates {
    /**
     * Custom template of content.
     */
    content: TemplateRef<any> | null;
    /**
     * Custom template of header.
     */
    header: TemplateRef<any> | null;
    /**
     * Custom template of icon.
     */
    icon: TemplateRef<any> | null;
}