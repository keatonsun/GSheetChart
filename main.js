/**
 * Retrieves selected cells in the active spreadsheet that contain data and generate
 * bubble/scatter chart accordingly.
 */
function genBubbleOnGoogleMap() {
    processBubble();
};

/**
 * Adds a custom menu to the active spreadsheet, containing a single menu item
 * for invoking the genBubbleOnGoogleMap() function specified above.
 * The onOpen() function, when defined, is automatically invoked whenever the
 * spreadsheet is opened.
 */
function onOpen() {
    SpreadsheetApp.getUi()
	.createMenu('Geo Charts')
	.addItem('Bubble Chart - Google Map', 'genBubbleOnGoogleMap')
	.addToUi();
};
