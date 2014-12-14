'use strict';

module.exports = function(app) {
	var scanner = require('../../app/controllers/scanner');

	app.route('/scanner')
		.get(scanner.view);
/*
	// Items Routes
	app.route('/scanner', function(req,res) {
		res.sendfile('./public/modules/scanner/views/view-scanner.client.view.html');
	});
	*/
};