var users_joined = [];
var chatrooms = {'west_side':{}, 'east_side':{}};


window.new_user_joined = function(name) {
	users_joined.push(name);
}


//this function is only called once by the server every five seconds
window.assign_to_chatroom = function() {
	//add this element for every user assigned to a chatroom: <p><button type="button" class="btn btn-warning btn-xs">[[name]]</button></p>
    console.log("assigning users to rooms");


	for (var i = 0; i < users_joined.length; i++) {
		var user = users_joined[i];
		if(i % 2 === 0) {
			//chatrooms.
			chatrooms['west_side'][i] = user;
				$('.chat-1 > .users').append("<button>" + user + "</button><br>");

		} else {
			chatrooms['east_side'][i] = user;
				$('.chat-2 > .users').append("<button>" + user + "</button><br>");
		}
	};

};