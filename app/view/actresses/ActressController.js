Ext.define('filmdb.view.actresses.ActressController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.actresses-actress',

	initViewModel: function(viewModel) {
		this.id = viewModel.getView().actress_id;
		this.name = viewModel.getView().title;
		
		viewModel.getStore('actress').load({
			id: this.id,
			callback: function(records, operation, success) {
				if (success) {
					viewModel.setData({
						roles: records[0].get('roles')
					});
					if (records[0].get('haspictures') > 0) {
						this.lookup('pictureButton').setHidden(false);
					}
				}
			}, 
			scope:this
		});
	},

	control: {
		'list': {
			itemtap: 'onItemTap'
		},
		'#pictureButton': {
			tap: 'onPictureButtonTap'
		}
	},

	onItemTap: function(list, index, target, record, e, eOpts) {
		appController.showFilm(record.get('filmid'), record.get('title'));
	},
	
	onPictureButtonTap: function(btn) {
		var view = new filmdb.view.actresses.Pictures({actress_id: this.id, title: this.name});
		appController.showView(view);
		
	}
	
});
