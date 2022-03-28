// ==UserScript==
// @name         南昌青年大学习跳过
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  跳过视频
// @author       Remkeeper
// @match        *://h5.cyol.com/*
// @icon         data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw==
// @grant        none
// @run-at document-idle
// @require      http://html2canvas.hertzen.com/dist/html2canvas.js
// ==/UserScript==

document.getElementsByClassName('section3')[0].className = "section3 topindex2"