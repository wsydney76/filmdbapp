Ext.define('filmdb.view.film.FilmController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.film-film',
	
	initViewModel: function(viewModel) {
		viewModel.getStore('films').load({
			id: viewModel.getView().film_id,
			callback: function(records, operation, success) {
				if (success)
					viewModel.setData({
						film: records[0].get('film'),
						roles: records[0].get('roles'),
						media: records[0].get('media')
					});
			}
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
