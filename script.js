function load_img(){
	const output = document.getElementById('thumbnail');
//const base64 = document.getElementById('base64');

var username = document.getElementById('username').value;

if(username==""){
	username="null";
}

var url = 'https://apiv2.twitcasting.tv/users/'
+ username
+ '/live/thumbnail?size=large&position=latest';

var thumbnail = document.getElementById('thumbnail');
thumbnail.setAttribute('src',url);

var img = get_img(url);
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

		for(i=1;i++;i<=7){
			document.querySelector("#out div:nth-child("+i+")").style.display=(i > people ? "none" : "block");
		}
	}); 
});