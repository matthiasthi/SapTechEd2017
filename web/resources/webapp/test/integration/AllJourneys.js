jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 POHeader in the list
// * All 3 POHeader have at least one POItem

sap.ui.require([
	"sap/ui/test/Opa5",
	"dummz/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"dummz/test/integration/pages/App",
	"dummz/test/integration/pages/Browser",
	"dummz/test/integration/pages/Master",
	"dummz/test/integration/pages/Detail",
	"dummz/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "dummz.view."
	});

	sap.ui.require([
		"dummz/test/integration/MasterJourney",
		"dummz/test/integration/NavigationJourney",
		"dummz/test/integration/NotFoundJourney",
		"dummz/test/integration/BusyJourney",
		"dummz/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});