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
export const PopoverBaseCls = getBaseCls("Popover");
export const PopoverContentBaseCls = getBaseCls("Popover-Content");
export const PopoverTriggerBaseCls = getBaseCls("Popover-Trigger");
