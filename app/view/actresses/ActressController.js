Ext.define('filmdb.view.actresses.ActressController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.actresses-actress',

    initViewModel: function(viewModel) {
        var store = viewModel.getStore('actress');
        var proxy = store.getProxy();

        this.id = viewModel.getView().actress_id;
        this.name = viewModel.getView().title;

        if (appController.isOnline()) {
            mask(this.getView());
        } else {
            proxy.setUrl('resources/data/actress');
        }


        store.load({
            id: this.id,
            callback: function(records, operation, success) {
                if (success) {

                    actress = records[0];

                    viewModel.setData({
                        roles: actress.get('roles')
                    });
                    if ((actress.get('haspictures') > 0) && (appController.isOnline())) {
                        this.lookup('pictureButton').setHidden(false);
                    }

                    appController.addToHistory('actress/' + actress.id, 'Darstellerin: ' + actress.get('name'))

                    unmask(this.getView());
                }
            },
            scope: this
        });
    },

    control: {
        'list': {
            itemtap: 'onItemTap'
        },
        '#pictureButton': {
            tap: 'onPictureButtonTap'
        }
    },

    onItemTap: function(list, index, target, record, e, eOpts) {
        this.redirectTo('film/' + record.get('filmid'));
    },

    onPictureButtonTap: function(btn) {
        this.redirectTo('pictures/' + this.id);
    }

});
