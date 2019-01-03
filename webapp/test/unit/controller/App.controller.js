/*global QUnit*/

sap.ui.define([
	"rybczinski/analytical/AnalyticalTest/controller/App.controller"
], function (oController) {
	"use strict";

	QUnit.module("App Controller");

	QUnit.test("I should test the App controller", function (assert) {
		var oAppController = new oController();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});