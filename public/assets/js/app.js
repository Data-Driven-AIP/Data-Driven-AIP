// runs foundation
$(document).foundation()


$(document).ready(function() {

    //creating new notes
    $("#newNote").on("click", function(event){
    	event.preventDefault();
    	console.log("onclick works");
    	var note = {
    		title: $("#title").val().trim(),
    		label: $("#label").val().trim(),
    		labelColor: $("#labelColor :selected").val(),
    		summary: $("#summary").val().trim(),
    		content: $("#content").val().trim()
    	};

    	var card = $('<div/>', {
    		'class': "note divResize card-info " + note.labelColor    		
    	});


    	var cardLabelInfo = $('<div/>', {
    		'class': "card-info-label"
    	}).appendTo($(card));
    	
    	var cardLabelText = $('<div/>', {
    		'class': "card-info-label-text",
    		text: note.label
    	}).appendTo($(cardLabelInfo));
    	
    	
    	var cardTitle = $('<div/>', {
    		'class': "card-info-content lead",
    		text: note.title
    	}).appendTo($(card));

    	var cardSummary = $('<div/>', {
    		'class': "card-info-content",
    		text: note.summary	
    	}).appendTo($(card));

    	var cardFooter = $('<div/>', {
    		'class': "card-footer grid-container",	
    	});

    	var open = $('<button>', {
    		'class': "hollow button success small notebutton",
    		'id': "openNote",
    		text: "Open"
    	}).appendTo($(cardFooter));

    	var remove = $('<button>', {
    		'class': "hollow button alert small notebutton",
    		'id': "deleteNote",
    		text: "Delete"
    	}).appendTo($(cardFooter));

    	$(cardFooter).appendTo($(card));


    	$(card).appendTo($("#noteBox")).draggable({containment: "parent"}).resizable();;
    	resetForm();
    }) 

    function resetForm() {
    	$("#title").val('')
    	$("#label").val('')
    	$("#summary").val('')
    	$("#content").val('')
    	$("#label").val().trim(''),
    	$("#labelColor :selected").val('')
    }

    // makes old cards moveable
    $(function() { $(".divResize").draggable({containment: "parent"}).resizable(); }); 

    // closes the panel on click outside
	$(document).mouseup(function (e) {
	  var container = $('#contact-panel');
	  if (!container.is(e.target) // if the target of the click isn't the container...
	  && container.has(e.target).length === 0) // ... nor a descendant of the container
	    {
	      container.removeClass('is-active');
	    }
	});

});
