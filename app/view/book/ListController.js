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
                r = records;
                if (success) {
                    viewModel.setData({
                        author: records[0].get('author'),
                    });
                    store.setData(records[0].get('books'))
                }

            }, scope: this

        });
    }
});
