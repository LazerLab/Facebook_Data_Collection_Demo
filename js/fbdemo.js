function initialize() {
	$("td").click(function() {
  		VSFB.request("me", $(this).text(), function(data) {
            yay = data;
            var toShow = data;
            if(toShow.length > 100) {
              toShow = toShow.substring(0, 70) + "...";
            }
    		$("#result").html(toShow);
  		});
	});
}