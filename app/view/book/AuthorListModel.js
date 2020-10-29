Ext.define('filmdb.view.book.AuthorListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.book-authorlist',
    stores: {
    	authors: {
    		model: 'filmdb.model.Author',
    		autoLoad: false,
    		proxy: Ext.apply({
    			url: defaults.urlbase + 'rest/authors',
    			reader: defaults.reader
    		}, defaults.proxy)
    	}
    }

});
