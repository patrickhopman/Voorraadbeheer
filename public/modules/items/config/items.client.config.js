'use strict';

// Configuring the Articles module
angular.module('items').run(['Menus',
	function(Menus) {
		// Set top bar menu items
		Menus.addMenuItem('topbar', 'Voorraad', 'items', 'dropdown', '/items(/create)?');
		Menus.addSubMenuItem('topbar', 'items', 'Overzicht', 'items');
		Menus.addSubMenuItem('topbar', 'items', 'Toevoegen Artikel', 'items/create');
	}
]);