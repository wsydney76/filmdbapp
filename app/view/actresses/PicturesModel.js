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
			proxy: Ext.apply({
				url: defaults.urlbase + 'actresses/pictures',
				reader: {
					rootProperty: 'pictures',
					successProperty: 'success'
				}
			}, defaults.proxy)

		}
	}
});
