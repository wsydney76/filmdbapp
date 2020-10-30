Ext.define('filmdb.view.menu.InfoModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.menu-info',


	stores: {
		info: {
			autoLoad:false,
			proxy: {
				type:'ajax',
				url: 'resources/data/info.json'
			}
		},
		published: {
			autoLoad: false,
			proxy: Ext.apply({
				url: defaults.urlbase + 'published'
			}, defaults.proxy)
		}
	}
});
