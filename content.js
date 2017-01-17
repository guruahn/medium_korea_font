var script=document.createElement('script');
script.onload=function() { /*do something in the page after the script was loaded*/ };
script.src='https://ajax.googleapis.com/ajax/libs/webfont/1.6.26/webfont.js';
document.body.appendChild(script);

window.addEventListener('storage', function(e) {
  console.log('storage changed!!!')
  changeStyle()
});
document.addEventListener('DOMContentLoaded', changeStyle());


var fonts = {
	'NotoSansKR' : { 'family':'Noto Sans KR', 'urls':'https://fonts.googleapis.com/earlyaccess/notosanskr.css'},
	'NanumGothic' : { 'family':'Nanum Gothic', 'urls':'https://fonts.googleapis.com/earlyaccess/nanumgothic.css'},
  'JejuMyeongjo' : { 'family':'Jeju Myeongjo', 'urls':'http://fonts.googleapis.com/earlyaccess/jejumyeongjo.css'},
  'KoPubBatang' : { 'family':'KoPub Batang', 'urls':'http://fonts.googleapis.com/earlyaccess/kopubbatang.css'}
}

chrome.storage.onChanged.addListener(function(changes, area) {
  changeStyle()
});

function changeStyle(){
  //console.log('changeStyle!!')
	chrome.storage.sync.get({
		font: 'NotoSansKR'
	}, function(items) {
		//console.log(fonts[items.font].family);

		$article = document.querySelectorAll('article[lang=ko]');

		//remove classList
		//console.log(articleClass)
		$article[0].classList.remove("NotoSansKR");
		$article[0].classList.remove("NanumGothic");
    $article[0].classList.remove("JejuMyeongjo");
    $article[0].classList.remove("KoPubBatang");

		$article[0].classList.add(items.font);
	});
}
