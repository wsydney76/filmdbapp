Ext.define('filmdb.view.series.SeriesController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.series-series',

	initViewModel: function(viewModel) {

		viewModel.getStore('series').load({
			id: viewModel.getView().series_id,
			callback: function(records, operation, success) {
				var films = [];
				for (var i = 0; i < records.length; i++) {
					var tmp = records[i].get('films');
					for (var j = 0; j < tmp.length; j++) {
						films.push(tmp[j]);
					}
				}

				viewModel.getStore('films').setData(films);
				vm = viewModel;
			}
		});
	},
	control: {
		'list': {
			itemtap: 'onItemTap'
		}
	},

	onItemTap: function(list, index, target, record, e, eOpts) {
		appController.showFilm(record.getId(), record.get('title'));
	}
});
