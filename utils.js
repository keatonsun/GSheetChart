/**
 * Bind columns with bubble/scatter chart definition according to titles.
 */
function processBubbleTitle(row) {
    var checklist = ['name', 'lat', 'lng', 'value'];
    var res = {
	name : null,
	lat: null,
	lng : null,
	value : null,
	valid : false
    };
    var c = 0;
    for (var i = 0; i < row.length; i++) {
	if (!row[i].toLowerCase) {
	    return res;
	}
	for (var j = 0; j < checklist.length; j++) {
	    if (row[i].toLowerCase().indexOf(checklist[j]) == 0) {
		res[checklist[j]] = i + '';
		c++;
	    }
	}
    }
  
    if (c == 2 && res.lat != null && res.lng != null) {
	res.valid = true;
    } else if (c == 3 && res.lat != null && res.lng != null && res.name != null) {
	res.valid = true;
    } else if (c == 4) {
	res.valid = true;
    }
  
    return res;
}
