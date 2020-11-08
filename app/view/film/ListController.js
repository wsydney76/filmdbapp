Ext.define('filmdb.view.film.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.film-list',

    control: {
        'list': {
            itemtap: 'onItemTap'
        },
        "#filmFilterField": {
            action: 'onSearchfieldAction',
            change: {
                fn: 'onSearchfieldAction',
                buffer: defaults.buffer
            },
            clearicontap: 'onSearchfieldClearicontap'
        },
        '#sortButton': {
            tap: 'onSortButtonTap'
        }
    },

    onActivate: function() {
        var store = this.getViewModel().getStore('films');
        if (!store.isLoaded()) {

            if (!appController.isOnline()) {
                store.getProxy().setUrl('resources/data/films.json');
            }
            store.load();
        }
    },

    onItemTap: function(list, index, target, record, e, eOpts) {
        this.redirectTo('film/' + record.getId());
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
    },

    onSortButtonTap: function(btn) {
        store = this.getView().getStore();
        if (store.getGroupField() == 'name') {
            store.setGroupDir('DESC');
            store.setGroupField('createdat');
            this.lookup('sortButton').setText('Serie');
        } else {
            store.setGroupDir('ASC');
            store.setGroupField('name');
            this.lookup('sortButton').setText('Datum');
        }
        store.sort(['name', 'season', 'episode', 'title']);
    }
});
