/*! Twitter autoload source | (c) 2016 William Wendell */

var actualCode = "(function(){ 'use strict'; var Autoload = function(){ this.uq=false; this.v=!document.hidden; this.exp = -1; this.to = false; this.o = new MutationObserver((function(m){ this.undelay(); }).bind(this)); this.o2 = new MutationObserver((function(m){ this.undelay(); }).bind(this)); this.oc = { attributes: false, childList: true, characterData: false }; this.tl = document.getElementById('stream-items-id'); this.t0 = 2500; document.addEventListener('visibilitychange', (function(ev){ if (this.v=!document.hidden && this.uq) { this.tk(); } }).bind(this), false ); this.o.observe(document.querySelector('.js-new-items-bar-container'), this.oc); this.o2.observe(this.tl, this.oc); this.keepup(); }; Object.assign(Autoload.prototype, { su: function(px) { function getOffsetSum(e) { var top=0, left=0; while(e) { top = top + parseInt(e.offsetTop); left = left + parseInt(e.offsetLeft); e = e.offsetParent; } return {top: top, left: left}; } return !document.querySelectorAll('input:focus,textarea:focus,[contenteditable=\"true\"]:focus').length && window.pageYOffset - document.documentElement.clientTop - getOffsetSum(this.tl).top < px && this.v; }, tk: function() { if (this.su(10)) { document.dispatchEvent(new CustomEvent('uiShortcutGotoTopOfScreen')); this.uq = false; } else { if (this.v) { window.setTimeout( this.tk.bind(this), 100); } else { } } }, up: function() { if (!this.uq) { this.uq = true; this.tk(); return true; } else { return false; } }, undelay: function(f) { this.exp = -1; window.clearTimeout(this.to); this.to = window.setTimeout(this.keepup.bind(this), 100 ); }, delay: function() { if (this.exp < 10) { ++this.exp; } }, keepup: function() { if (this.up()) { this.delay(); } this.to = window.setTimeout(this.keepup.bind(this), parseInt(this.t0 * Math.pow(1.3, this.exp)) ); } }); window.onload = window.setTimeout(new Autoload(), 5000); })();";
var script = document.createElement('script');
script.appendChild(document.createTextNode(actualCode));
(document.head || document.documentElement).appendChild(script);
script.parentNode.removeChild(script);
