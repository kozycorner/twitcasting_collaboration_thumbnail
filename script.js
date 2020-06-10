function load_img(){
	const output = document.getElementById('thumbnail');

	var username = document.getElementById('username').value;

	if(username == ""){
		username = "null";
	}

	var url = 'https://apiv2.twitcasting.tv/users/'
	+ username + '/live/thumbnail?size=large&position=latest';

	var thumbnail = document.getElementById('thumbnail');
	thumbnail.setAttribute('src',url);

	var data = {};

	var messageArea = document.getElementById('message');
	var message = "";
/*
	fetch("https://6lm35rjzad.execute-api.us-east-2.amazonaws.com/thumbnail",{
        method : "POST", // *GET, POST, PUT, DELETE, etc.
        mode : "cors", // no-cors, cors, *same-origin
//        cache: "no-cache", // *default, no-cache, reload, force-cache, only-if-cached
//        credentials: "include", // include, same-origin, *omit
        headers: {
            "Content-Type": "application/json; charset=utf-8",
            // "Content-Type": "application/x-www-form-urlencoded",
//            "Access-Control-Allow-Origin": "*",
//            "Access-Control-Request-Method": "GET",
        },
    	body : {
    		"n" : "test"
    	},
        redirect: "follow", // manual, *follow, error
        referrer: "client", // no-referrer, *client

    })
	.then(function(response) {
		return response.json();
	})
	.then(function(myJson) {
		//console.log(JSON.stringify(myJson));
		messageArea.innerHTML=myJson;
		//messageArea.innerHTML=JSON.stringify(myJson);
	});
*/
	var base64Image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAEOCAIAAADe+FMwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBJREFUeNrs2LEJgEAQRUGVC+xCrMGytBwtyxrELszWBkQQDjyOmXyTH7xg24hoAChPZwIAgQZAoAEEGgCBBhBoAAQaAIEGEGgABBpAoAEQaAAEGkCgARBoAIEGQKABBBoAgQZAoAEEGgCBBhBoAAQaAIEGEGgABBpAoAEQaACBBkCgARBoAIEGQKABBBoAgQZAoAEEGgCBBhBoAAQaQKABEGgABBpAoAEQaACBBkCgARBoAIEGQKABBBoAgQZAoAEEGgCBBhBoAAQaQKABEGgABBpAoAEQaACBBkCgARBoAIEGQKABBBoAgQYQaAAEGgCBBhBoAAQaQKABEGgABBpAoAEQaACBBkCgAQQaAIEGQKABBBoAgQYQaAAEGgCBBhBoAAQaQKABEGgABBpAoAEQaACBBkCgAQQaAIEGQKABBBoAgQYQaAAEGgCBBhBoAAQaQKABEGgAgQZAoAEQaACBBkCgAQQaAIEGQKABBBoAgQYQaAAEGkCgARBoAAQaQKABEGgAgQZAoAEQaACBBkCgAWqVTADkcq2DEV70yynQwG+2aTTCo3k/vp54cQAUSqABBBoAgQYQaAAEGkCgARBoAAQaQKABEGgAgQZAoAEQaACBBkCgAQQaAIEGEGgABBoAgQYQaAAEGkCgARBoAAQaQKABEGgAgQZAoAEEGgCBBkCgAQQaAIEGEGgABBoAgQYQaAAEGkCgARBoAIE2AYBAAyDQAAINgEADCDQAAg2AQAMINAACDSDQAAg0AAININAACDSAQAMg0AACDYBAAyDQAAINgEADCDQAAg2AQAMINAACDSDQAAg0gEADINAACDSAQAMg0AACDYBAAyDQAAINgEADCDQAAg0g0AAINAACDSDQAAg0gEADINAACDSAQAMg0AD1SiYAMpr3wwi5tBFhBYACeXEACDQAAg0g0AAINIBAAyDQAAg0gEADINAAAg2AQAMg0AACDYBAAwg0AAININAACDQAAg0g0AAINIBAAyDQAAg0gEADINAAAg2AQAMINAACDYBAAwg0AAININAACDQAAg0g0AAINECVbgEGAJdUEDJBUY76AAAAAElFTkSuQmCC";

	var thumbnail = document.getElementById('thumbnail');
	thumbnail.setAttribute('src',base64Image);

	var data = clop_img(base64Image, 368, 134, "out01b");
}

function clop_img(base64Image, x, y, outId){

	var canvas = document.getElementById('out01');
	var ctx = canvas.getContext('2d');

	var img = new Image();

	x *= -1;
	y *= -1;

	img.onload = e => {
		ctx.drawImage(img, x, y);
		const data = canvas.toDataURL("image/png");

		var outImg = document.getElementById(outId);	
		out01b.setAttribute('src',data);
	}

	img.src = base64Image;

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

		for(i = 1;i <= 7;i++){
			document.querySelector("#out div:nth-child(" + i + ")").style.display=(i > people ? "none" : "block");
		}
	}); 
});