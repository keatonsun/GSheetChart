/**
 * Create and show google map page in current spreadsheet.
 */
function processBubble() {
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getActiveSheet();
    var range = sheet.getDataRange();
    var values = range.getValues();
    var binding = processBubbleTitle(values[0]);
    if (!binding.valid) {
	spreadsheet.toast('Binding error: Columns titles should include "lng", "lat", "name(optional)", "value(optional)".', "Error");
	return;
    }
  
    var html = HtmlService.createTemplateFromFile('googleMap').evaluate()
	.setSandboxMode(HtmlService.SandboxMode.IFRAME).setWidth(1000).setHeight(600);
    SpreadsheetApp.getUi() 
	.showModalDialog(html, 'Google Map');
}

/**
 * Server side callback by client map page, returns processed data. 
 */
function processData() {
    var maxLat, minLat, maxLng, minLng, maxValue, minValue;
    var spreadsheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = spreadsheet.getActiveSheet();
    var range = sheet.getDataRange();
    var values = range.getValues();
    var binding = processBubbleTitle(values[0]);
  
    values = values.filter(function(e) {
	    if (binding.value != null && typeof e[binding.value] !== 'number') {
		return false;
	    } else if (typeof e[binding.lat] !== 'number' || e[binding.lat] < 0 || e[binding.lat] > 90) {
		return false;
	    } else if (typeof e[binding.lng] !== 'number' || e[binding.lng] < -180 || e[binding.lat] > 180) {
		return false;
	    }
	    return true;
	});
  
    var valuesObj = [];
    values.forEach(function(e, i) {
	    maxLat = maxLat === undefined || e[binding.lat] > maxLat ? e[binding.lat] : maxLat;
	    minLat = minLat === undefined || e[binding.lat] < minLat ? e[binding.lat] : minLat;
	    maxLng = maxLng === undefined || e[binding.lng] > maxLng ? e[binding.lng] : maxLng;
	    minLng = minLng === undefined || e[binding.lng] < minLng ? e[binding.lng] : minLng;
	    if (binding.value === null) {
		maxValue = minValue = 1;
	    } else {
		maxValue = maxValue === undefined || e[binding.value] > maxValue ? e[binding.value] : maxValue;
		minValue = minValue === undefined || e[binding.value] < minValue ? e[binding.value] : minValue;
	    }
    
	    valuesObj[i] = {
		name : e[binding.name],
		lat : e[binding.lat],
		lng : e[binding.lng],
		value : binding.value === null ? null : e[binding.value]
	    };
	});
  
    return {
	values : valuesObj,
	maxLat : maxLat,
	minLat : minLat,
	maxLng : maxLng,
	minLng : minLng,
	maxValue : maxValue,
	minValue : minValue
    };
}