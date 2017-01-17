
document.addEventListener('DOMContentLoaded', changeStyle());

chrome.storage.onChanged.addListener(function(changes, area) {
  changeStyle()
});

var fonts = {
	'NotoSansKR' : { 'family':'Noto Sans KR', 'urls':'https://fonts.googleapis.com/earlyaccess/notosanskr.css'},
	'NanumGothic' : { 'family':'Nanum Gothic', 'urls':'https://fonts.googleapis.com/earlyaccess/nanumgothic.css'},
  'JejuMyeongjo' : { 'family':'Jeju Myeongjo', 'urls':'http://fonts.googleapis.com/earlyaccess/jejumyeongjo.css'},
  'KoPubBatang' : { 'family':'KoPub Batang', 'urls':'http://fonts.googleapis.com/earlyaccess/kopubbatang.css'}
}



function changeStyle(){
  console.log('changeStyle!!')
	chrome.storage.sync.get({
		font: 'NanumGothic'
	}, function(items) {
		
		//Article
		$body = document.querySelectorAll('body');
		//reset classList
		if( $body.length > 0 ){
			removeFontClass($body[0]);
			$body[0].classList.add(items.font);
		}

	});
}

function removeFontClass($obj){
	if(typeof $obj != 'undefined'){
		console.log($obj)
		$obj.classList.remove("NotoSansKR");
		$obj.classList.remove("NanumGothic");
		$obj.classList.remove("JejuMyeongjo");
		$obj.classList.remove("KoPubBatang");
	}
}
