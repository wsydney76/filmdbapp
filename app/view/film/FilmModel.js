Ext.define('filmdb.view.film.FilmModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.film-film',

    stores: {
        films: {
            model: 'filmdb.model.Film',
            proxy: Ext.apply({
                url: defaults.urlbase + 'films/',
                extraParams: {
                    'includeImagedata': 'false'
                }

            }, defaults.proxy)

        }
    }

});
