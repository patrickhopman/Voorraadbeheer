'use strict';

// Scanner controller
angular.module('scanner').controller('ScannerController', ['$scope', '$stateParams', '$location', 'Authentication', 'Quagga',
	function($scope, $stateParams, $location, Authentication, $http, Quagga ) {
		$scope.authentication = Authentication;
		
		// Find a list of Scanner
		$scope.view = function() {
			
		};

		var config = {
		    inputStream: { 
		    	name: 'Live',
		        type: 'LiveStream'
	  	    },
		    tracking: false,
	    	debug: false,
		    controls: false,
		  	locate: true,
		  	visual: {
		    	show: true
		  	},
		  	decoder:{
			    drawBoundingBox: true,
			    showFrequency: false,
			    drawScanline: true,
			    showPattern: false,
			    readers: [
			      'code_128_reader'
			    ]
		  	},
		  	locator: {
		    	showCanvas: false,
		    	showPatches: false,
		    	showFoundPatches: false,
		    	showSkeleton: false,
		    	showLabels: false,
		    	showPatchLabels: false,
		    	showRemainingPatchLabels: false,
		    	boxFromPatches: {
			      	showTransformed: false,
			      	showTransformedBox: false,
			      	showBB: false
		    	}
		  	}
		};

		var callback = {

		};

		$scope.startScanner = function(config, callback) {
			Quagga.decodeSingle(config, callback);
		};
		

	}
]);