Ext.define('filmdb.view.history.Panel', {
    extend: 'Ext.Container',

    xtype: 'historyPanel',

    requires: [
        'filmdb.view.history.PanelController'
    ],

    controller: 'history-panel',

    layout: 'vbox',

    items: [
        {
            xtype: 'panel',
            layout: 'hbox',
            items: [
                {
                    xtype: 'button',
                    text: 'Verlauf löschen',
                    ui: 'action'
                }
            ]
        }, {
            xtype: 'list',
            flex: 1,
            store: 'History',

            itemTpl: '{title}',
            items: [
                {
                    docked: 'top',
                    html: '<b>Letzte Seiten:</b>'
                }
            ]
        }

    ]
});
