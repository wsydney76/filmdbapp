Ext.define('filmdb.view.search.ResultModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.search-result',

	stores: {
		results: {
			pageSize: 0,
			proxy: Ext.apply({
				url: defaults.urlbase + 'search/search.json'
			}, defaults.proxy)

		}
	}

});
