/**
 * DOM ids shared between components. StickyBookBar finds the two Book
 * buttons by id, so they live in one place: renaming one here updates
 * every user instead of silently breaking the bar.
 */
export const MAIN_ID = "main";
export const HEADER_BOOK_ID = "header-book";
export const PANEL_BOOK_ID = "panel-book";
