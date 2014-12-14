'use strict';

// Configuring the Articles module
angular.module('scanner').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Scan', 'scanner');
	}
]);