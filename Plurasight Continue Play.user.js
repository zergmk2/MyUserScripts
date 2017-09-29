// ==UserScript==
// @name         Plurasight Continue Play
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  try to take over the world!
// @author       You
// @match        https://app.pluralsight.com/library/
// @grant        none
// ==/UserScript==
// @require http://code.jquery.com/jquery-latest.js

(function() {
    'use strict';

    // Your code here...
    window.setInterval(function(){
         //console.log("=====================");
         var tmp = document.getElementById("next-module");
         tmp.click();
    }, 5000);

})();