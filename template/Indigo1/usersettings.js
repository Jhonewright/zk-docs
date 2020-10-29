var phone_max_width = 667;
var tablet_max_width = 1155;

var useIDX = true;
var useGLO = true;
var useFilter = true;
var useTOC = true;

var numberOfTOCItemsInRow = 5;
var useCustomTOCLinks = false;
var mobileTocDrilldown = true;

var useANDsearch = false;

var customlink_1_text = "Contact Us";
var customlink_1_href = "http://https://www.zkteco.in/contactus";
var customlink_2_text = "Company Website";
var customlink_2_href = "http://www.zkteco.in";

var titleColor = "#ffffff";
var backgroundColor = "#3BBCE0";
var fontFamily = "Roboto";

(function() {

	var rh = window.rh;

	//The side of the sidebar / mobile overlay
	rh.consts("SIDEBAR_STATE", ".e.sidebarstate");
	rh.model.publish(rh.consts("SIDEBAR_STATE"), false);

	//Set the TOC type for mobile: Regular (false: default) or Drill down (true).
	rh.model.publish(rh.consts("KEY_MOBILE_TOC_DRILL_DOWN"), mobileTocDrilldown);

  // Search highlight colors
  model.publish(rh.consts('KEY_SEARCH_HIGHLIGHT_COLOR'), "#000000");
  model.publish(rh.consts('KEY_SEARCH_BG_COLOR'), "#FCFF00");

	//Number of search results to be loaded at once.
	rh.consts('MAX_RESULTS', '.l.maxResults');
	rh.consts('MAX_RESULTS', '.l.maxResults');
	rh.model.publish(rh.consts('MAX_RESULTS'), 15);

	/* This layout has search on every page */
	rh.model.publish(rh.consts("KEY_CAN_HANDLE_SEARCH"), true);

	//Set the media queries
	var desktop = 'screen and (min-width: '+ (tablet_max_width + 1) +'px)';
	var tablet = 'screen and (min-width: '+ (phone_max_width + 1) +'px) and (max-width: '+ tablet_max_width +'px)';
	var phone = 'screen and (max-width: '+ phone_max_width +'px)';
	var screens = {
	  desktop: { media_query: desktop },
	  tablet: { media_query: tablet },
	  phone: { media_query: phone },
	  ios: {user_agent: /(iPad|iPhone|iPod)/g}
	};
	rh.model.publish(rh.consts('KEY_SCREEN'), screens);

  features = rh.model.get(rh.consts('KEY_FEATURE')) || {};

  //Publish which panes are available
  features.toc = useTOC;
  features.idx = useIDX;
  features.glo = useGLO;
  features.filter = useFilter;
	features.andsearch = useANDsearch;
  rh.model.publish(rh.consts('KEY_FEATURE'), features);

	if(useIDX == false) {//Using Index?
		var idx = document.getElementById('idx-toggle-button');
		idx.parentNode.removeChild(idx);
	}
	if(useGLO == false) {//Using Glossary?
		var glo = document.getElementById('glo-toggle-button');
		glo.parentNode.removeChild(glo);
	}
	if(useFilter == false) {//Using Filter?
		var filter = document.getElementById('filter-toggle-button');
		filter.parentNode.removeChild(filter);
	}

	//Custom URLs schema
	var Link = "custom-link-";
	var menuSuffix = "-menu";
	var headerSuffix = "-header";
	var excludeDefault1 = "Custom URL1";
  var excludeDefault2 = "Custom URL2";
	//Set the links for 1 if needed
	var menu = document.getElementById(Link+'1'+menuSuffix);
	var header = document.getElementById(Link+'1'+headerSuffix);
	if(customlink_1_text.trim() != "" && customlink_1_text != excludeDefault1) {
		var link = '<a href="'+customlink_1_href+'" title="'+customlink_1_text+'" target="_blank">'+customlink_1_text+'</a>';
		menu.innerHTML = link;
		header.innerHTML = link;
	} else {
		menu.parentNode.removeChild(menu);
		header.parentNode.removeChild(header);
	}
	//Set the links for 2 if needed
	menu = document.getElementById(Link+'2'+menuSuffix);
	header = document.getElementById(Link+'2'+headerSuffix);
	if(customlink_2_text.trim() != "" && customlink_2_text != excludeDefault2) {
		var link = '<a href="'+customlink_2_href+'" title="'+customlink_2_text+'" target="_blank">'+customlink_2_text+'</a>';
		menu.innerHTML = link;
		header.innerHTML = link;
	} else {
		menu.parentNode.removeChild(menu);
		header.parentNode.removeChild(header);
	}
	rh.initIndigo();

}.call(this));
