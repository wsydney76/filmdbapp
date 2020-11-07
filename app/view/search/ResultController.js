Ext.define('filmdb.view.search.ResultController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.search-result',

    initViewModel: function(viewModel) {
        var store = viewModel.getStore('results');
        var proxy = store.getProxy();
        proxy.setExtraParam("q", viewModel.getView().q);
        mask(this.getView());

        store.load({
            callback: function(records, operation, success) {
                if (success) {
                    viewModel.setData({
                        items: records[0].get('items'),
                        response: records[0].get('response')
                    });
                }
                unmask(this.getView());
            },
            scope: this
        });
    },

    control: {
        'list': {
            itemTap: 'onItemTap'
        }
    },

    onItemTap: function(list, index, target, record, e, eOpts) {
        switch (record.get('type')) {
            case 'actress':
                appController.showActress(record.getId(), record.get('title'));
                break;
            case 'film':
                appController.showFilm(record.getId(), record.get('title'));
                break;
            case 'series':
                appController.showSeries(record.getId(), record.get('title'));
                break;
        }
    }
});
