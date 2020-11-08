Ext.define('filmdb.view.series.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.series-list',
    control: {
        'list': {
            itemtap: 'onItemTap'
        },
        "#seriesListFilterField": {
            action: 'onSearchfieldAction',
            change: {
                fn: 'onSearchfieldAction',
                buffer: defaults.buffer
            },
            clearicontap: 'onSearchfieldClearicontap'
        }
    },

    onActivate: function() {
        var store = this.getViewModel().getStore('series');
        if (!store.isLoaded()) {
            if (!appController.isOnline()) {
                Ext.toast('Benutze Offline-Daten');
                store.getProxy().setUrl('resources/data/series.json');
            }
            store.load();
        }
    },

    onItemTap: function(list, index, target, record, e, eOpts) {
        this.redirectTo('series/' + record.getId());
    },

    onSearchfieldAction: function(textfield, e, options) {
        var value = textfield.getValue(), store = this.getViewModel().getStore('series');
        store.clearFilter();
        if (value) {
            this.getView().refresh();
            store.filter(function(record) {
                return record.get('name').toUpperCase().indexOf(value.toUpperCase()) != -1;
            });

        }
    },

    onSearchfieldClearicontap: function(text, e, options) {
        this.getViewModel().getStore('series').clearFilter();
    }
});
