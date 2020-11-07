Ext.define('filmdb.view.actresses.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.actresses-list',

    control: {
        'list': {
            itemtap: 'onItemTap'
        },
        "#actressFilterField": {
            action: 'onSearchfieldAction',
            change: 'onSearchfieldAction',
            clearicontap: 'onSearchfieldClearicontap'
        }
    },

    onActivate: function() {
        var store = this.getViewModel().getStore('actresses');
        if (!store.isLoaded()) {

            if (!appController.isOnline()) {
                store.getProxy().setUrl('resources/data/actresses.json');
            }
            store.load();
        }
    },

    onItemTap: function(list, index, target, record, e, eOpts) {
        appController.showActress(record.getId(), record.get('name'));
    },

    onSearchfieldAction: function(textfield, e, options) {
        var value = textfield.getValue(), store = this.getViewModel().getStore('actresses');
        store.clearFilter();
        if (value) {
            this.getView().refresh();
            store.filter(function(record) {
                return record.get('name').toUpperCase().indexOf(value.toUpperCase()) != -1;
            });

        }
    },

    onSearchfieldClearicontap: function(text, e, options) {
        this.getViewModel().getStore('actresses').clearFilter();
    }
});
