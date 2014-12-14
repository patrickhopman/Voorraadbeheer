'use strict';

//Setting up route
angular.module('scanner').config(['$stateProvider',
	function($stateProvider) {
		// Items state routing
		$stateProvider.
		state('viewScanner', {
			url: '/scanner',
			templateUrl: 'modules/scanner/views/view-scanner.client.view.html'
		});
	}
]);