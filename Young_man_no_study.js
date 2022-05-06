// ==UserScript==
// @name         南昌青年大学习跳过
// @namespace    http://tampermonkey.net/https://github.com/RemKeeper/Young_man_no_study/blob/main/Young_man_no_study.js
// @version      0.2
// @description  跳过视频
// @author       Remkeeper
// @match        *://h5.cyol.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at document-idle
// @require      https://code.jquery.com/jquery-3.6.0.min.js
// ==/UserScript==

document.getElementsByClassName('section3')[0].className = "section3 topindex2"
console.log('成功跳过视频')
var url=document.location.href;
var url_num=url.indexOf('m.html');
var pic_url = url.slice(0,url_num)+"images/end.jpg";
var down = document.createElement("a");
down.style.fontSize="25px";
down.style.width="448px"
down.style.height="700px"
down.style.position="absolute"
down.href=pic_url;
down.download="end.jpg";
document.getElementsByClassName('section3')[0].appendChild(down)
document.getElementsByClassName('section3')[0].style.background="url(https://s1.328888.xyz/2022/04/18/rgNqy.png)";
