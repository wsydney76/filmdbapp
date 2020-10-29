Ext.define('filmdb.view.book.ListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.book-list',
    stores: {
    	books: {
    		model: 'filmdb.model.Book',
    		autoLoad: false,
    		groupField: 'name',
    		proxy: Ext.apply({
    			url: defaults.urlbase + 'rest/books/',
    			reader: defaults.reader
    		}, defaults.proxy)
    	}
    }

});
