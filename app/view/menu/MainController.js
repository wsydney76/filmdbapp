Ext.define('filmdb.view.menu.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.menu-main',

    control: {
        'mainMenu': {
            show: 'setData'
        },
        '#homeButton': {
            tap: 'onHomeButtonTap'
        },
        '#searchButton': {
            tap: 'onSearchButtonTap'
        },
        '#infoButton': {
            tap: 'onInfoButtonTap'
        },
        '#bookListButton': {
            tap: 'onBookListButtonTap'
        },

        '#offlineButton': {
            tap: 'onOfflineButtonTap'
        }
    },

    setData: function(viewModel) {
        var isOnline = appController.isOnline();
        this.lookup('offlineButton').setText(isOnline ? 'Go Offline' : 'Go Online');
        this.lookup('searchButton').setHidden(!isOnline);
    },

    onHomeButtonTap: function(btn) {
        Ext.Viewport.hideMenu('right');

        var navPanel = appController.getNavPanel();
        var items = navPanel.getItems();
        // 2 = navBar + tabPanel
        navPanel.pop(items.length - 2);
    },

    onSearchButtonTap: function(btn) {
        Ext.Viewport.hideMenu('right');
        var view = new filmdb.view.search.Panel({
            title: 'Suche'
        });
        appController.showView(view);
    },

    onInfoButtonTap: function(btn) {
        Ext.Viewport.hideMenu('right');
        this.redirectTo('info');
    },

    onBookListButtonTap: function(btn) {
        Ext.Viewport.hideMenu('right');
        this.redirectTo('authors');
    },

    onOfflineButtonTap: function(btn) {
        Ext.Viewport.hideMenu('right');
        Ext.toast(appController.isOnline() ? 'Offline Modus eingeschaltet' : 'Online Modus eingeschaltet');
        appController.toggleOnline();

    }
});
