/*!
 * aaron
 * Copyleft 1993-2017 Aaron Harris
 * GPLv3 Licensed
 */

'use strict';

var name = "aaron";

module.exports = {
	name: name,
	toString: function () {
		return name;
	},
	toUpperCase: function () {
		return name.toUpperCase();
	},
	toLowerCase: function () {
		return name.toLowerCase();
	},
	toTitleCase: function () {
		return name[0].toUpperCase() + name.slice(1).toLowerCase();
	},
	email: function(text) {
		return "mailto:contactaaronh+github@gmail.com?Subject=I%27m%20using%20your%20node%20package&Body="+encodeURIComponent(text);
	}
};