Ext.define('filmdb.view.book.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.book-list',

    initViewModel: function(viewModel) {
        var store = viewModel.getStore('books');
        var proxy = store.getProxy();


        if (!appController.isOnline()) {
            proxy.setUrl('resources/data/books');
        }

        store.load({
            id: this.getView().author_id,
            callback: function(records, operation, success) {

                if (success) {
                    author = records[0].get('author');
                    if (author.bio) {
                        bookList = this.lookup('bookList');
                        bookList.parent.setScrollable(true);
                        bookList.setScrollable(false);
                        bookList.setFlex(null);
                    }

                    viewModel.setData({
                        author: author,
                    });
                    store.setData(records[0].get('books'))
                }

            }, scope: this

        });
    }
});
