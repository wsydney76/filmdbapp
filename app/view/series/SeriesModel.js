Ext.define('filmdb.view.series.SeriesModel', {
	extend: 'Ext.app.ViewModel',
	alias: 'viewmodel.series-series',
	data: {
		name: 'filmdb'
	},
	stores: {
		series: {
			model: 'filmdb.model.Series',
			
			proxy: {
				type: 'rest',
				useDefaultXhrHeader: false,
				url: urlbase + 'series/fulldata.json/',
				reader: {
					type: 'json',
					rootProperty: 'seasons'
				}
			}
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
