Ext.define('filmdb.view.search.ResultModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.search-result',

	stores: {
		results: {
			autoLoad: false,
			pageSize: 999,
			proxy: {
				type: 'rest',
				useDefaultXhrHeader: false,
				url: urlbase + 'search/search.json'
			}
		}
	}

});
