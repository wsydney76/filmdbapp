Ext.define('filmdb.view.book.AuthorListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.book-authorlist',

    initViewModel: function(viewModel) {
        var store = viewModel.getStore('authors');
        var proxy = store.getProxy();
        if (!appController.isOnline()) {
            proxy.setUrl('resources/data/authors.json');
        }
        store.load();
    },

    control: {
        'list': {
            itemtap: 'onItemTap'
        }
    },

    onItemTap: function(list, index, target, record, e, eOpts) {
       this.redirectTo('authors/' + record.getId());
    }
});
