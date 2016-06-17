/**
 * @author Bigfish
 */
$(document).ready(function(){
	$("#type").nextAll("div").hide();
	$("button").hover(function(){
		$("#type").next("div").show();
	});
	
	$("#product a").click(function(){
		$("#product").next("div").show();
		return false;
	});
	
	$("#binning a").click(function(){
		$("#binning").next("div").show();
		return false;
	});
});
