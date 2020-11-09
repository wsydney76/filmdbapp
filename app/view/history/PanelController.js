Ext.define('filmdb.view.history.PanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.history-panel',

    control: {
        'button': {
            tap: 'onReset'
        },
        'list': {
            itemTap: 'onItemTap'
        }
    },

    onReset: function () {
      var store = appController.getHistoryStore();
      store.removeAll();
    },

    onItemTap: function(list, index, target, record, e, eOpts) {
       this.redirectTo(record.get('route'));
    }


});
