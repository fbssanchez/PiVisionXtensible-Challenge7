(function (PV) {
	"use strict";

	function symbolVis() { };
	PV.deriveVisualizationFromBase(symbolVis);

	var definition = { 
		typeName: "archivedata",
		visObjectType: symbolVis,
		datasourceBehavior: PV.Extensibility.Enums.DatasourceBehaviors.Multiple,
		iconUrl: "Images/chrome.custom.svg",
		getDefaultConfig: function(){ 
			return { 
				DataShape: 'Timeseries',
				Height: 150,
				Width: 150,
				BackgroundColor:"#ff5733",
				BackgroundColorMouseOver:"green",
				BorderRadius: 50,
				DisplayDigits: 1
			} 
		}
	}

	var dataItems = [
		{
			Time: "11-Jun-19 09:00:00",
			Value: 100
		},
		{
			Time: "10-Jun-10 06:00:00",
			Value:50
		}
	];

	symbolVis.prototype.init = function(scope, elem) {
		this.onDataUpdate = dataUpdate;
		function dataUpdate(newdata){
			if(!newdata) return;
			var firstAttribute=newdata.Data[0];
			scope.Values = firstAttribute.Values;

			if(firstAttribute.Label){
				//sporadic
				scope.Units = firstAttribute.Units;
				scope.Label = firstAttribute.Label;
			}
		}
	 };

	PV.symbolCatalog.register(definition); 
})(window.PIVisualization); 
