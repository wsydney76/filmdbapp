Ext.define('filmdb.view.book.ListController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.book-list',

	initViewModel: function(viewModel) {
		var store = viewModel.getStore('books');
		var proxy = store.getProxy();
		
		var id = this.getView().author_id;
		
		if (appController.isOnline()) {
			proxy.setUrl(proxy.getUrl() + id);
		} else {
			proxy.setUrl('resources/data/books/' + id + '.json');
		}
		store.load();
	}
});
