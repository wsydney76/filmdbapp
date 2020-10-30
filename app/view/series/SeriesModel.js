Ext.define('filmdb.view.series.SeriesModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.series-series',
	data: {
		name: 'filmdb'
	},
	stores: {
		series: {
			model: 'filmdb.model.Series',

			proxy: Ext.apply({
				url: defaults.urlbase + 'series/',
				reader: {
					rootProperty: 'seasons'
				}
			}, defaults.proxy)

		},
		films: {
			model: 'filmdb.model.Film',

			grouper: {
				sortProperty: 'season',
				groupFn: function(record) {
					return record.get('season') > 0 ? 'Staffel ' + record.get('season') : '-';
				}
			}

		}
	}

});
