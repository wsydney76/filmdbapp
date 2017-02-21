Ext.define('filmdb.view.actresses.PicturesController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.actresses-pictures',

	initViewModel: function(viewModel) {
		viewModel.getStore('pictures').load({
			id: this.getView().actress_id
		});
	},

	control: {
		'list': {
			itemTap: 'onItemTap'
		}
	},

	onItemTap: function(list, index, target, record, e, eOpts) {
		window.open(record.get('url'));
	}
});
