var mov1a = document.getElementById('mov1a');
var mov1b = document.getElementById('mov1b')
var mov2a = document.getElementById('mov2a')
var mov2b = document.getElementById('mov2b')
var mov3a = document.getElementById('mov3a')
var mov3b = document.getElementById('mov3b')
var mov4a = document.getElementById('mov4a')
var mov4b = document.getElementById('mov4b')

var num = document.getElementById('num');
var n = parseInt(num.innerHTML);

setInterval(function () {
	n = n + 3;
	num.innerHTML = n;
},1500)

setTimeout(mov1,3000);

function mov1() {
	mov1a.style.left = '15%';
	mov1b.style.left = '40%';
	setTimeout(mov2,3000);
}
function mov2() {
	mov2a.style.right = '48.5%';
	mov2b.style.left = '47%';
	setTimeout(mov3,3000);
}
function mov3() {
	mov3a.style.right = '28%';
	mov3b.style.left = '68%';
	setTimeout(mov4,3000);
}
function mov4() {
	mov4a.style.left = '9.8125rem';
	mov4b.style.right = '0';
}

document.onclick = function () {
	window.location.href = 'http://meiyue76res.mm419.com/app-1.2.4-2017-09-28_124_1_meiyuewebsite_sign.apk';
}