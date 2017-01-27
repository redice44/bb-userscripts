// ==UserScript==
// @name         Old Mediasites Notification
// @namespace    http://tampermonkey.net/
// @version      0.1.0
// @description  Alerts on old Mediasites links
// @author       Matt Thomson <red.cataclysm@gmail.com>
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser-polyfill.min.js
// @require      https://cdnjs.cloudflare.com/ajax/libs/babel-core/5.6.15/browser.min.js
// @match        https://fiu.blackboard.com/webapps/blackboard/content/listContentEditable.jsp?*
// ==/UserScript==

/* jshint ignore:start */
var inline_src = (<><![CDATA[
/* jshint ignore:end */
/* jshint esnext: true */

// Your code here...
let links = document.querySelectorAll('#content_listContainer a');
let mediasites = [];
for (let l of links) {
  if (l.href.includes('fiuonline.mediasite.com')) {
    mediasites.push(l.innerText);
    l.setAttribute('style', 'background-color: #FF0000');
  }
}
if (mediasites.length > 0) {
  alert (`There are ${mediasites.length} old MediaSites link(s) on this page highlighted in red.`);
  // List out items in console
  console.log(mediasites);
}

/* jshint ignore:start */
]]></>).toString();
var c = babel.transform(inline_src);
eval(c.code);
/* jshint ignore:end */
