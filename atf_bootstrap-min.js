/*
 * Dashboard designer
 * Copyright(c) 2018, atf
 */


requirejs.config({paths:{atf_dashboarddesigner:"https://raw.githubusercontent.com/fejdraus/KtDashboardDesigner/master/atf_dashboarddesigner-min",atf_dashboarddesigner_overrides:"https://raw.githubusercontent.com/fejdraus/KtDashboardDesigner/master/atf_dashboarddesigner_overrides-min.js"},shim:{atf_dashboarddesigner:{deps:["DashboardManager","DashboardDesignerViewGenerator","CommonCSSV2","PreviewableGridLayoutEdit","PreviewableGridLayoutEditItem","DashboardDesigner"]},atf_dashboarddesigner_overrides:{deps:["DashboardBuilder"]}}});require(["atf_dashboarddesigner_overrides"]);