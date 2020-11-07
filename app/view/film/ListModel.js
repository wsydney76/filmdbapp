Ext.define('filmdb.view.film.ListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.film-list',

    stores: {
        films: {
            model: 'filmdb.model.Film',
            pageSize: 0,
            groupField: 'name',

            proxy: Ext.apply({
                url: defaults.urlbase + 'films',
                reader: defaults.reader
            }, defaults.proxy)

        }
    }

});
