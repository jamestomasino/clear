//create the menu itens
chrome.contextMenus.create({ "title": "Cache: Last Hour", "onclick": function(){ clear("Cache", 1000 * 60 * 60) } });
chrome.contextMenus.create({ "title": "Cache: Last Day", "onclick": function(){ clear("Cache", 1000 * 60 * 60 * 24) } });
chrome.contextMenus.create({ "title": "Cache: Last Week", "onclick": function(){ clear("Cache", 1000 * 60 * 60 * 24 * 7) } });
chrome.contextMenus.create({ "title": "Cache: All Time", "onclick": function(){ clear("Cache", 0) } });

chrome.contextMenus.create({ "type": "separator" });

chrome.contextMenus.create({ "title": "History: Last Hour", "onclick": function(){ clear("History", 1000 * 60 * 60) } });
chrome.contextMenus.create({ "title": "History: Last Day", "onclick": function(){ clear("History", 1000 * 60 * 60 * 24) } });
chrome.contextMenus.create({ "title": "History: Last Week", "onclick": function(){ clear("History", 1000 * 60 * 60 * 24 * 7) } });
chrome.contextMenus.create({ "title": "History: All Time", "onclick": function(){ clear("History", 0) } });

chrome.contextMenus.create({ "type": "separator" });

chrome.contextMenus.create({ "title": "Cookies: Last Hour", "onclick": function(){ clear("Cookies", 1000 * 60 * 60) } });
chrome.contextMenus.create({ "title": "Cookies: Last Day", "onclick": function(){ clear("Cookies", 1000 * 60 * 60 * 24) } });
chrome.contextMenus.create({ "title": "Cookies: Last Week", "onclick": function(){ clear("Cookies", 1000 * 60 * 60 * 24 * 7) } });
chrome.contextMenus.create({ "title": "Cookies: All Time", "onclick": function(){ clear("Cookies", 0) } });

//clear function
function clear(what, time) { //function to clear the cache
	
    var date;
    if (time === 0) { //if time is 0 then is to clear all
        date = 0;
    } else { //else calculate since
        var date = (new Date()).getTime() - time;
    }
	
	switch(what) { //
		case "Cache": 
			chrome.browsingData.removeCache({ "since": date });
			break;
		case "Cookies":
			chrome.browsingData.removeCookies({ "since": date });
			break;
		case "History":
			chrome.browsingData.removeHistory({ "since": date });
			break;
	}
}