const prefixCls = "hee";

const getBaseCls = (suffix: string) => {
  return `${prefixCls}-${suffix}`;
};

/* Tabs Component */
export const tabsBaseCls = getBaseCls("tabs");
export const tabsMenuListBaseCls = getBaseCls("tabs-menu-list");
export const tabsMenuBaseCls = getBaseCls("tabs-menu");
export const tabsPannelBaseCls = getBaseCls("tabs-pannel");

/* Carousel Component */
export const carouselBaseCls = getBaseCls("carousel");
export const carouselItemListBaseCls = getBaseCls("carousel-item-list");
export const carouselItemBaseCls = getBaseCls("carousel-item");
export const carouselNavigatorBaseCls = getBaseCls("carousel-navigator");
export const carouselIndigatorBaseCls = getBaseCls("carousel-indigator");

/* Calendar Component */
export const calendarBaseCls = getBaseCls("calendar");
export const calendarBodyBaseCls = getBaseCls("calendar-body");
export const calendarNavigatorBaseCls = getBaseCls("calendar-navigator");
export const calendarCurrentBaseCls = getBaseCls("calendar-current");

/* Breadcrumb Component */
export const breadcrumbBaseCls = getBaseCls("breadcrumb");
export const breadcrumbItemBaseCls = getBaseCls("breadcrumb-item");

/* Pagination Component */
export const paginationBaseCls = getBaseCls("pagination");
export const paginationButtonsBaseCls = getBaseCls("pagination-Buttons");
export const paginationNavigatorBaseCls = getBaseCls("pagination-Navigator");

/* Popover Component */
export const popoverBaseCls = getBaseCls("popover");
export const popoverContentBaseCls = getBaseCls("popover-content");
export const popoverTriggerBaseCls = getBaseCls("popover-trigger");

/* Progress Component */
export const progressBaseCls = getBaseCls("progress");

/* Modal Component */
export const modalBaseCls = getBaseCls("modal");
export const modalBackdropCls = getBaseCls("modal-backdrop");
export const modalContentCls = getBaseCls("modal-content");
export const modalTriggerCls = getBaseCls("modal-trigger");
export const modalCloseCls = getBaseCls("modal-close");

/* DatePicker */
export const datePickerBaseCls = getBaseCls("datePicker");

/* Select Component */
export const selectBaseCls = getBaseCls("select");
export const selectContentCls = getBaseCls("select-content");
export const selectTriggerCls = getBaseCls("select-trigger");
export const selectItemCls = getBaseCls("select-item");

/* Accordion Component */
export const accordionBaseCls = getBaseCls("accordion");
export const accordionContentCls = getBaseCls("accordion-content");
export const accordionTriggerCls = getBaseCls("accordion-trigger");
export const accordionItemCls = getBaseCls("accordion-item");

/* toast Component */
export const toastBaseCls = getBaseCls("toast");
export const toastTitleCls = getBaseCls("toast-title");
export const toastDescriptionCls = getBaseCls("toast-description");
export const toastCloseCls = getBaseCls("toast-close");
