Ext.define('filmdb.view.series.ListController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.series-list',
	control: {
		'list': {
			itemtap: 'onItemTap'
		}
	},

	onActivate: function() {
		var store = this.getViewModel().getStore('series');
		if (! store.isLoaded()) {
			if (! appController.isOnline()) {
				Ext.toast('Benutze Offline-Daten');
				store.getProxy().setUrl('resources/data/series.json');
			}
			store.load();
		}
	},

	onItemTap: function(list, index, target, record, e, eOpts) {
		appController.showSeries(record.getId(), record.get('name'));
	}
});
