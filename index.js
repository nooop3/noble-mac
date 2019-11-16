'use strict';

const os = require('os');

// noble-mac acts as a shim to noble.
if (os.platform() === 'darwin') {
	const noble = require('noble/with-bindings');
	const macBindings = require('./lib/binding.js');
	module.exports = noble(macBindings);
} else {
	module.exports = require('noble');
}
