// runs foundation
$(document).foundation()


$(document).ready(function() {

	$(function() {
		$('.search')
	    	.bind('click', function(event) {
	      		$(".search-field").toggleClass("expand-search");
			// if the search field is expanded, focus on it
	    		if ($(".search-field").hasClass("expand-search")) {
	        		$(".search-field").focus();
	      		}
	    })
	});

    $("#foodSearch").keypress(function (e) {
     var key = e.which;
     if(key == 13)  // the enter key code
      {
       event.preventDefault();

       var newFoodSearch = {
        name: $('#foodSearch').val().trim()
       }
       // Send the POST request.
    $.ajax("/food/" + newFoodSearch.name , {
      type: "GET",
      data: newFoodSearch
    }).then(
      function() {
        console.log("Searched food");
        location.href = "/food/" + newFoodSearch.name
      }
    );
      }
    });   


    // $.ajax({
    //     url: '/newfood/',
    //     complete: function(data){
    //         console.log(data);
    //     }
    // })

     $("#openFood").on("click", function(event){
        event.preventDefault();
        var foodDetailObj = {
            uri: this.value
        }
        
    location.href = "/newfood/"+encodeURIComponent(foodDetailObj.uri)
      })

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

    	var uniqueID = note.title + note.label

    	var card = $('<div/>', {
    		'class': "note divResize card-info " + note.labelColor,
    		"id": uniqueID    		
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
    		text: "Delete",
    		click: function(){
    			console.log(uniqueID)
    			$("#"+ uniqueID).remove();
    		} 
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

  

});
