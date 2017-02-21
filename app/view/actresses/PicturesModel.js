Ext.define('filmdb.view.actresses.PicturesModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.actresses-pictures',
	data: {
		name: 'filmdb'
	},
	stores: {
		pictures: {
			model: 'filmdb.model.Picture',
			pageSize: 999,
			autoLoad: true,
			proxy: {
				type: 'rest',
				useDefaultXhrHeader: false,
				url: urlbase + 'actresses/pictures.json',
				reader: {
					type: 'json',
					rootProperty: 'pictures',
					successProperty: 'success'
				}
			}
		}
	}
});
