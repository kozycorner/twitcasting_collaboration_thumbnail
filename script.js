// 座標デバッグ用の画像
// よかったらお使いください
// var base64Image = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAeAAAAEOCAIAAADe+FMwAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAA5JJREFUeNrs10FuwjAQQNFMlQ0XYev7H8NbLjMIRRVIVSMcyQg7723oJmCG6GcaNXMB4Pv8GAGAQAMg0AACDYBAAwg0AAINgEADCDQAAg0g0AAINAACDSDQAAg0gEADINAAAg2AQAMg0AACDYBAAwg0AAINgEADCDQAAg0g0AAINIBAAyDQAAg0gEADINAAAg2AQAMg0AACDYBAAwg0AAININAACDQAAg0g0AAINIBAAyDQAAg0gEADINAAAg2AQAMg0AACDYBAAwg0AAININAACDQAAg0g0AAINIBAAyDQAAg0gEADINAAAg2AQAMINAACDYBAAwg0AAININAACDQAAg0g0AAINIBAAyDQAAINgEADINAAAg2AQAMINAACDYBAAwg0AAININAACDQAAg0g0AAINIBAAyDQAAINgEADINAAAg2AQAMINAACDYBAAwg0AAININAACDSAQAMg0AAINIBAAyDQAAINgEADINAAAg2AQAMINAACDSDQAAg0AAININAACDSAQAMg0AAINIBAAyDQALNaWy+4RpgadHJJM5hZXdp+YBs0wCwb9OaWHvR7/1uMO5+yxIHn/Bnms03m2B70/nx6vPMc8xnd63xs0ADDE2gAgQZAoAEEGgCBBhBoAAQaAIEGEGgABBpAoAEQaAAEGkCgARBoAIEGQKABBBoAgQZAoAEEGgCBBhBoAAQaAIEGEGgABBpAoAH4hLX1gsuSj5cwur/y+WeM/S2K+eyev+N8Yob7v4jBf/NJGzTAOTfoTc3xvmqJvue/xvMDbpnDnf9393l8TF1GPf/o90+PO+cz5y8vy7/7Z//8NmiA4Qk0gEADINAAAg2AQAMINAACDYBAAwg0AAININAACDQAAg0g0AAINIBAAyDQAAINgEADINAAAg2AQAMINAACDYBAAwg0AAININAACDSAQAMg0AAINIBAAyDQAAINgEADINAAAg2AQAMINAACDSDQRgAg0AAINIBAAyDQAAINgEADINAAAg2AQAMINAACDYBAAwg0AAININAACDTAGUXNbLqghKEBHFHbcmuDBvhWa+8nAADH2KABBBoAgQYQaAAEGkCgARBoAAQaQKABEGgAgQZAoAEQaACBBkCgAQQaAIEGEGgABBoAgQYQaAAEGkCgARBoAAQaQKABEGgAgQZAoAEEGgCBBkCgAQQaAIEGEGgABBoAgQYQaAAEGmBKdwEGAMCNQSR7S12yAAAAAElFTkSuQmCC";

var option = 1;

var url = "";

function main(){
	const output = document.getElementById('thumbnail');

	var username = document.getElementById('username').value;

	if(username == ""){
		username = "null";
	}

	url = 'https://coiogn4in2.execute-api.us-east-2.amazonaws.com/main/twitcasting/' + username;

	var canvas = document.getElementById('hidden_thumbnail');
	canvas.setAttribute('width','480px');
	canvas.setAttribute('height','270px');
	var ctx = canvas.getContext('2d');

    var img = new Image();
    img.crossOrigin = "anonymous";
    img.src = url;
    img.onload = function() {
        ctx.drawImage(img, 0, 0, 480, 270);
        base64Image = canvas.toDataURL("image/png");
    	var thumbnail = document.getElementById('thumbnail');
		thumbnail.setAttribute('src',base64Image);
		clop_img();
    }
}


function clop_img(){
	switch(option){
		default :
		case '1' : //4人
			draw_img(272, 134, "out02"); //2人目
			draw_img(176, 134, "out03"); //3人目
		case '4' : //2人
			draw_img(368, 134, "out01"); //1人目（4人と共通）
			break;
		case '2' : //4人左
			draw_img( 16, 134, "out01"); //1人目
			draw_img(112, 134, "out02"); //2人目
			draw_img(208, 134, "out03"); //3人目
			break;
		case '3' : //7人
			draw_img(400, 166, "out01"); //1人目
			draw_img(336, 166, "out02"); //2人目
			draw_img(272, 166, "out03"); //3人目
			draw_img(208, 166, "out04"); //4人目
			draw_img(144, 166, "out05"); //5人目
			draw_img( 80, 166, "out06"); //6人目
			draw_img( 16, 166, "out07"); //7人目
	}

	
	return 0;
}

function draw_img(x, y, outId){

	var canvas = document.getElementById('draw');
	switch(option){
		case '3':
			canvas.setAttribute('width','64px');
			canvas.setAttribute('height','64px');
			break;
		default:
			canvas.setAttribute('width','96px');
			canvas.setAttribute('height','96px');
	}
	var ctx = canvas.getContext('2d');
	var img = new Image();

	img.onload = e => {
		ctx.drawImage(img, x, y, 96, 96, 0, 0, 96, 96);
		const data = canvas.toDataURL("image/png");

		var outImg = document.getElementById(outId);	
		outImg.setAttribute('src',data);
	}

	img.src = base64Image;
	
}

$(function(){ // ラジオボタン選択時の処理
	var frame = document.getElementById('overlay_frame');
	var people = 1;

	$( 'input[name="options"]:radio' ).change( function() {
		var radioval = $(this).val();
		option = radioval;
		switch(radioval){
			default:
			case '1': //4人
				frame.setAttribute('src','img/collabo4.png');
				people = 3;
				break;
			case '2': //4人左
				frame.setAttribute('src','img/collabo4l.png');
				people = 3;
				break;
			case '3': //8人
				frame.setAttribute('src','img/collabo7.png');
				people = 7;
				break;
			case '4': //2人
				frame.setAttribute('src','img/collabo2.png');
				people = 1;
		};

		clop_img();


		var i;

		for(i = 1;i <= 7;i++){
			document.querySelector("#out div:nth-child(" + i + ")").style.display=(i > people ? "none" : "block");
		}
	}); 
});