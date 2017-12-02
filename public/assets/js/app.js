// runs foundation
$(document).foundation()


$(document).ready(function() {


    //creating new notes
    $("#newNote").on("click", function(event){
    	event.preventDefault();
    	console.log("onclick works");
    	var note = {
    		title: $("#title").val().trim(),
    		summary: $("#summary").val().trim(),
    		content: $("#content").val().trim()
    	};

    	var card = $('<div/>', {
    		'class': "card divResize "    		
    	});

    	var cardTitle = $('<div/>', {
    		'class': "card-divider",
    		text: note.title
    	}).appendTo($(card));

    	var cardSummary = $('<div/>', {
    		'class': "card-section",
    		text: note.summary	
    	}).appendTo($(card));

    	$(card).appendTo($("#noteBox")).draggable({containment: "parent"}).resizable();;
    }) 

    // makes old cards moveable
    $(function() { $(".divResize").draggable({containment: "parent"}).resizable(); }); 
});
