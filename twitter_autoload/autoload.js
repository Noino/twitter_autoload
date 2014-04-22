/*! Twitter autoload source | (c) 2014 William Wendell */

var actualCode = "window.setTimeout(function(){ var nv=5,v=true; document.addEventListener('visibilitychange', function(ev){ v=!document.hidden; }, false); (function tk(){ var doc=document.documentElement; if (!document.querySelectorAll('input:focus,textarea:focus,[contenteditable=\"true\"]:focus').length && ((window.pageYOffset||doc.scrollTop)-(doc.clientTop||0))==0 && (v||nv==0)) { var e=new CustomEvent('uiShortcutGotoTopOfScreen'); document.dispatchEvent(e); nv=5; } --nv; window.setTimeout(tk,2000); })(); },5000);";
var script = document.createElement('script');
script.appendChild(document.createTextNode(actualCode));
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);