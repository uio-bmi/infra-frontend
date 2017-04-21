
var api_url = "http://146.185.177.205:5000/"


$(document).ready(function(){

	page_loaded();
	
});

function load_left_menu(){

	$.get(api_url + "projects", function(project_list){
		for (var i = 0; i < project_list.length; i++){
			console.log("project list: " + JSON.stringify(project_list));
			var name = project_list[i];
			$("#projects_menu").append("<li><a class='project_link' data-project='" + name + "' href='javascript:void(0);'>" + name + "</a></li>");
		}
		
		init_left_menu_listeners();
	});
}


function load_test_report(project_name){
	$.get(api_url + "test_report?project=" + project_name, function(report){
		$("#test_output").html(report);
	});
}

function load_project_overview(project_name){
	$.get(api_url + "project_overview?project=" + project_name, function(report){
		$("#project_overview").html(report);
	});
}


function show_project_page(name){
	console.log("Show page for " + name + "");
	
	var html = '<h1 class="page-header">' + name + '</h1>';
	html += "<div id='project_overview'></div>";
	
	//html += '<h2 class="sub-header">Test status.</h2>';
	//html += '<div id="test_output"></div>';	
	show_html_as_page(html);
	load_project_overview(name);
	//load_test_report(name);
	
}

function init_left_menu_listeners(){
	console.log("Init left menu listeners");
	$(".project_link").click(function(){
		var project_name = $(this).attr("data-project");
		show_project_page(project_name);
	});
}

function show_html_as_page(html){
	$("#page_content").html(html);
}


function page_loaded(){
	console.log("Page loaded");
	load_left_menu();
}
