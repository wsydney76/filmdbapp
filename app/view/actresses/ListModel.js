Ext.define('filmdb.view.actresses.ListModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.actresses-list',
	data: {
		name: 'filmdb'
	},

	stores: {
		actresses: {
			model: 'filmdb.model.Actress',
			pageSize: 9999,
			autoLoad: false,			
			grouper: {
				groupFn: function(record) {
					 return record.get('lastname')[0].toUpperCase();
				}
			},
			proxy: {
				type: 'rest',
				useDefaultXhrHeader: false,
				url: urlbase + 'actresses/read.json',
				reader: reader
			}
		}
	}

});
