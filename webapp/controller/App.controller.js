sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("rybczinski.analytical.AnalyticalTest.controller.App", {
		onInit: function () {
			// var that = this;
			// this.oTable = this.getView().byId("smartTable");
			// this.getOwnerComponent().getModel().metadataLoaded()
			// 	.then(function () {
			// 		var oDataUrl = "/sap/opu/odata/sap/YRYB_C_SBOOK_CDS/";
			// 		var oModel = new sap.ui.model.odata.v2.ODataModel(oDataUrl, true);
			// 		oModel.setDefaultCountMode(sap.ui.model.odata.CountMode.Request);
			// 		that.oTable.setModel(oModel);
			// 	});
		}
	});
});