function load_img(){
	const output = document.getElementById('thumbnail');

	var username = document.getElementById('username').value;

	if(username==""){
		username="null";
	}

	var url = 'https://apiv2.twitcasting.tv/users/'
	+ username + '/live/thumbnail?size=large&position=latest';

	var thumbnail = document.getElementById('thumbnail');
	thumbnail.setAttribute('src',url);

	var data={};

	fetch("https://ftst38ftcf.execute-api.us-east-2.amazonaws.com/",{
        method: "POST", // *GET, POST, PUT, DELETE, etc.
        mode: "cors", // no-cors, cors, *same-origin
//        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//        credentials: "include", // include, same-origin, *omit
        headers: {
            //"Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
//            "Access-Control-Allow-Origin": "*",
//            "Access-Control-Request-Method": "GET",
        },
        redirect: "follow", // manual, *follow, error
        referrer: "client", // no-referrer, *client

    })
	.then(function(response) {
		return response.json();
	})
	.then(function(myJson) {
		console.log(JSON.stringify(myJson));
	});

}

$(function(){
	var frame = document.getElementById('overlay_frame');
	var people = 1;

	$( 'input[name="options"]:radio' ).change( function() {
		var radioval = $(this).val();
		switch(radioval){
			case '3':
			frame.setAttribute('src','img/collabo7.png');
			people = 7;
			break;
			case '2':
			frame.setAttribute('src','img/collabo4l.png');
			people = 3;
			break;
			case '1':
			frame.setAttribute('src','img/collabo4.png');
			people = 3;
			break;
			default:
			frame.setAttribute('src','img/collabo2.png');
			people = 1;
		};

		var i;

		for(i=1;i<=7;i++){
			document.querySelector("#out div:nth-child("+i+")").style.display=(i > people ? "none" : "block");
		}
	}); 
});