Ext.define('filmdb.view.actresses.ListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.actresses-list',
    data: {
        name: 'filmdb'
    },

    stores: {
        actresses: {
            model: 'filmdb.model.Actress',
            pageSize: 0,
            grouper: {
                groupFn: function(record) {
                    return record.get('lastname')[0].toUpperCase();
                }
            },
            proxy: Ext.apply({
                url: defaults.urlbase + 'actresses',
                reader: defaults.reader
            }, defaults.proxy)

        }
    }

});
