//create a data storage variable
var result = null;

function initialize() {   //start study
	$("td").click(function() {  //when person clicks a cell in the table
  		VSFB.request("me", $(this).text(), function(data) {   //request data for participant ('me'), for the cell $(this).text() (i.e. photos, hometown)
            result = data; //get FB data
            
            //print the first 100 characters of the result to the div named #result 
            var toShow = data;
            if(toShow.length > 100) {
              toShow = toShow.substring(0, 70) + "...";
            }
    		$("#result").html(toShow);
  		});
	});
}