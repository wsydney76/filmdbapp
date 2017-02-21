Ext.define('filmdb.view.film.FilmModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.film-film',

    stores: {
    	films: {
    		model: 'filmdb.model.Film',    		
			proxy: {
				type: 'rest',
				useDefaultXhrHeader: false,
				url: urlbase + 'films/show.json/'
			}
    	}
    }

});
