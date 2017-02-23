Ext.define('filmdb.view.actresses.ActressController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.actresses-actress',

	initViewModel: function(viewModel) {
		var store = viewModel.getStore('actress');
		var proxy = store.getProxy();
		
		this.id = viewModel.getView().actress_id;
		this.name = viewModel.getView().title;
		
		if (appController.isOnline()) {
			proxy.setUrl(proxy.getUrl() + this.id);
			mask(this.getView());			
		} else {
			proxy.setUrl('resources/data/actress/' + this.id + '.json');
		}
		
		store.load({
			callback: function(records, operation, success) {
				if (success) {
					viewModel.setData({
						roles: records[0].get('roles')
					});
					if ((records[0].get('haspictures') > 0) && (appController.isOnline())) {
						this.lookup('pictureButton').setHidden(false);
					}
					unmask(this.getView());
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
		var view = new filmdb.view.actresses.Pictures({actress_id: this.id, title: getNavTitle(this.name)});
		appController.showView(view);
		
	}
	
});
