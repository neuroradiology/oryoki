var ipcRenderer = require('electron').ipcRenderer;
var fs = require('fs');
var path = require('path');

ipcRenderer.on('ready', function() {
	console.log('Ready!');

	omnibox = new Omnibox({
		'mode' : 'url'
	});

})
function Omnibox(parameters) {

	this.htmlData = undefined;
	this.mode = parameters.mode;

	console.log('Omnibox!');

	this.htmlData = fs.readFileSync(path.join(__dirname, '..', '..', 'src', 'html', 'omnibox-' + this.mode + '.html'), 'utf8');
	document.querySelectorAll('#omnibox')[0].innerHTML = this.htmlData;
}

Omnibox.prototype.show = function() {

}

Omnibox.prototype.hide = function() {

}