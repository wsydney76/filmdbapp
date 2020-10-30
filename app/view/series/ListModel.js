Ext.define('filmdb.view.series.ListModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.series-list',
	data: {
		name: 'filmdb'
	},
	stores: {
		series: {
			model: 'filmdb.model.Series',
			pageSize: 0,
			proxy: Ext.apply({
				url: defaults.urlbase + 'series',
				reader: defaults.reader
			}, defaults.proxy)
		}
	}

});
