Ext.define('filmdb.view.film.FilmController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.film-film',

    initViewModel: function(viewModel) {

        var store = viewModel.getStore('films');
        var proxy = store.getProxy();

        if (appController.isOnline()) {
            mask(this.getView());
        } else {
            proxy.setUrl('resources/data/film');
        }


        store.load({
            id: this.getView().film_id,
            callback: function(records, operation, success) {
                if (success) {
                    viewModel.setData({
                        film: records[0].get('film'),
                        roles: records[0].get('roles'),
                        media: records[0].get('media')
                    });
                }

                unmask(this.getView());
            }, scope: this
        });
    },

    control: {
        'list': {
            itemtap: 'onItemTap'
        }
    },

    onItemTap: function(list, index, target, record, e, eOpts) {
        this.redirectTo('actress/' + record.get('actressid'));
    }
});
