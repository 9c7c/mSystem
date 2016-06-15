/**
 * @author Bigfish
 */
$(document).ready(function(){
	$("#start").click(function(){
		$("#initialShow").hide();
		$("#productList").show();
	});
	
	$("button").hover(function(){
		$("#product").show();
		$("#binning").show();
		$("#maintain").show();
	});
});
