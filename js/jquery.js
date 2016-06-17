/**
 * @author Bigfish
 */
$(document).ready(function(){
	
	$("#testerType").nextAll("div").hide();
	$("button").hover(function(event){
		var chosenTesterType=$(this).text();
//		alert(chosenTesterType);
		if (chosenTesterType=="C400") {
//			alert("this is c400 tester");
			var nickname=['Anguilla IMM', 'Anguilla Blue', 'Anguilla Black', 'Anguilla Auto', 'Aruba', 'Bahamas', 'Baja',
				           'Hockenheim Auto', 'Hockenheim IMM'];
		} else if(chosenTesterType=="PS800") {
			var nickname=['Tortola', 'Bono'];
//			alert("this is PS800 tester");
		} else {
//			alert("this is PS1600 tester");
			var nickname=["Senna"];
		}
		$("#testerType").next("div").show();
		event.stopPropagation();
		propStopped(event);
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


//arttemplat data here
var data = {
	nickName: ['Anguilla IMM', 'Anguilla Blue', 'Anguilla Black', 'Anguilla Auto', 'Aruba', 'Bahamas', 'Baja',
	           'Hockenheim Auto', 'Hockenheim IMM'],
	testerType:['C400','PS800','PS1600'],
	hbin:[2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
};
