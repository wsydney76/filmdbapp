Ext.define('filmdb.view.actresses.ActressModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.actresses-actress',

    stores: {
    	actress: {
    		model: 'filmdb.model.Actress',
			proxy: {
				type: 'rest',
				useDefaultXhrHeader: false,
				url: urlbase + 'actresses/readall.json/'
			}
    	}
    }

});
