/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting causes an instance of this class to be created and
 * added to the Viewport container.
 *
 * TODO - Replace the content of this view to suit the needs of your application.
 */
Ext.define('filmdb.view.main.Main', {
    extend: 'Ext.navigation.View',
    xtype: 'app-main',

    requires: ['Ext.MessageBox', 'filmdb.view.main.MainController', 'filmdb.view.main.MainModel', 'filmdb.view.main.TabPanel', 'filmdb.view.search.Panel'],

    controller: 'main',
    viewModel: 'main',

    layout: {
        animation: Ext.os.is.Android ? false : 'slide'
    },

    // show only arrow on back button
    defaultBackButtonText: '',

    navigationBar: {
        items: [
            {
                xtype: 'button',
                iconCls: 'x-fa fa-navicon',
                align: 'right',
                ui: 'dark',
                itemId: 'menuButton'
            }
        ]
    },

    // include tabPanel
    items: [
        {
            xtype: 'mainTabPanel',
            title: 'Film DB',
            layout: {
                animation: Ext.os.is.Android ? false : 'slide'
            }
        }
    ]
});

