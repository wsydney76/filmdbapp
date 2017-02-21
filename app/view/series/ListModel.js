Ext.define('filmdb.view.series.ListModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.series-list',
	data: {
		name: 'filmdb'
	},
	stores: {
		series: {
			model: 'filmdb.model.Series',
			pageSize: 9999,
			autoLoad: true,
			proxy: {
				type: 'rest',
				url: urlbase + 'series/read.json',
				useDefaultXhrHeader: false,
				reader: reader
			}
		}
	}

});
