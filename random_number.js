$(document).ready(function() {
	$('p').hide();
	$('#brain_button').click(show_kindness);
	$('#smile').hide();
    $('#tell_more').click(tell_more);
    $('#new_kindness').click(new_kindness);
});


function show_kindness() {
	var rand_no = Math.floor((Math.random() * 15));
	console.log(rand_no);
	$(kindnesses[rand_no]['short']).show();
	console.log(kindnesses[rand_no]['short']);
	$('#brain_button').hide();
	$('#wobble').hide();
	$('#smile').show();
};

function tell_more() {
    $(kindnesses[rand_no]['long']).show();
    console.log(kindnesses[rand_no]['long']);
};

function new_kindness() {
    $('.RAK').hide();
    var rand_no = Math.floor((Math.random() * 15));
    console.log(rand_no);
    $(kindnesses[rand_no]['short']).show();
    console.log(kindnesses[rand_no]['short']);
}

var kindnesses = [
	{'short':'#Call_Friend',
     'long':'#Call_Friend_Long'},
     {'short':'#Book',
     'long':'#Book_Long'},
 	 {'short':'#Dinner',
 	 'long':'#Dinner_Long'},
 	 {'short':'#Stamps',
     'long':'#Stamps_Long'},
     {'short':'#Recycle',
     'long':'#Recycle_Long'},
 	 {'short':'#Postit',
     'long':'#Postit_Long'},
 	 {'short':'#Change',
     'long':'#Change_Long'},
 	 {'short':'#Queue',
     'long':'#Queue_Long'},
 	 {'short':'#Meal',
     'long':'#Meal_Long'},
 	 {'short':'#Conversation',
     'long':'#Conversation_Long'},
 	 {'short':'#Compliment',
     'long':'#Compliment_Long'},
 	 {'short':'#Smile',
     'long':'#Smile_Long'},
  	 {'short':'#Playlist',
     'long':'#Playlist_Long'},
 	 {'short':'#Letter',
     'long':'#Letter_Long'},
  	 {'short':'#Homeless',
     'long':'#Homeless_Long'}
     ];
    


