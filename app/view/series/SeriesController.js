Ext.define('filmdb.view.series.SeriesController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.series-series',

    initViewModel: function(viewModel) {
        var store = viewModel.getStore('series');
        var proxy = store.getProxy();

        this.id = viewModel.getView().series_id;

        if (appController.isOnline()) {
            mask(this.getView());
        } else {
            proxy.setUrl('resources/data/series');
        }


        store.load({
            id: viewModel.getView().series_id,
            callback: function(records, operation, success) {

                x = records;

                if (success) {
                    var films = [];
                    for (var i = 0; i < records.length; i++) {
                        var tmp = records[i].get('films');
                        for (var j = 0; j < tmp.length; j++) {
                            films.push(tmp[j]);
                        }
                    }
                    viewModel.getStore('films').setData(films);

                    unmask(this.getView());
                }
            },
            scope: this
        });
    },
    control: {
        'list': {
            itemtap: 'onItemTap'
        },
        "#seriesDetailsFilterField": {
            action: 'onSearchfieldAction',
            change: 'onSearchfieldAction',
            clearicontap: 'onSearchfieldClearicontap'
        }
    },

    onItemTap: function(list, index, target, record, e, eOpts) {
        appController.showFilm(record.getId(), record.get('title'));
    },

    onSearchfieldAction: function(textfield, e, options) {
        var value = textfield.getValue(), store = this.getViewModel().getStore('films');
        store.clearFilter();
        if (value) {
            this.getView().refresh();
            store.filter(function(record) {
                return record.get('title').toUpperCase().indexOf(value.toUpperCase()) != -1;
            });

        }
    },

    onSearchfieldClearicontap: function(text, e, options) {
        this.getViewModel().getStore('films').clearFilter();
    }
});
