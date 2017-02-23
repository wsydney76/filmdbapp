Ext.define('filmdb.view.film.FilmController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.film-film',
	
	initViewModel: function(viewModel) {
		
		var store = viewModel.getStore('films');
		var proxy = store.getProxy();
		this.id = this.getView().film_id;
		
		if (appController.isOnline()) {
			proxy.setUrl(proxy.getUrl() + this.id);;
			mask(this.getView());
		}
		else {
			proxy.setUrl('resources/data/film/' + this.id + '.json'); 
		}
		
		store.load({			
			callback: function(records, operation, success) {
				if (success)
					viewModel.setData({
						film: records[0].get('film'),
						roles: records[0].get('roles'),
						media: records[0].get('media')
					});
				
				unmask(this.getView());
			}, scope: this
		});
	},
	
	control: {
		'list': {
			itemtap: 'onItemTap'
		}
	},

	onItemTap: function(list, index, target, record, e, eOpts) {
		appController.showActress(record.get('actressid'), record.get('name'));
	}
});
