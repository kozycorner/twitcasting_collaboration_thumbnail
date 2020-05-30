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
}