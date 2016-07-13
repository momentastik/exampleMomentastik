var db = require('../core/db');
var httpMsgs = require('../core/httpMsgs');
var util = require('util');

exports.getListPlaces = function(req, resp){

	db.executeSQL("SELECT * FROM Place", function(error, rows){

		if (error){
			httpMsgs.show500(req, resp, err);
		}else{
			httpMsgs.sendJson(req, resp, rows);
		}

	});
};

exports.getPlace = function(req, resp,id){

	db.executeSQL("SELECT * FROM Place WHERE Place.id == "+id, function(error, rows){

		if (error){
			httpMsgs.show500(req, resp, err);
		}else{
			httpMsgs.sendJson(req, resp, rows);
		}

	});
};
