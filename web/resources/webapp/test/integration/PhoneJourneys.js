jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"dummz/test/integration/NavigationJourneyPhone",
		"dummz/test/integration/NotFoundJourneyPhone",
		"dummz/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});