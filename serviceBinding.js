function initModel() {
	var sUrl = "/sap/opu/odata/sap/Z_QUERY_FLIGHTBOOKINGS_CDS/";
	var oModel = new sap.ui.model.odata.ODataModel(sUrl, true);
	sap.ui.getCore().setModel(oModel);
}