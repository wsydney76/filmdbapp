Ext.define('filmdb.view.actresses.ActressModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.actresses-actress',

	stores: {
		actress: {
			model: 'filmdb.model.Actress',
			proxy: Ext.apply({
				url: defaults.urlbase + 'actresses/readall.json/'
			}, defaults.proxy)

		}
	}

});
