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

		'#offlineButton': {
			tap: 'onOfflineButtonTap'
		}
	},

	setData: function(viewModel) {
		var isOnline = appController.isOnline();
		this.lookup('offlineButton').setText(isOnline ? 'Go Offline' : 'Go Online');
		this.lookup('searchButton').setHidden(! isOnline);
	},

	onHomeButtonTap: function(btn) {
		Ext.Viewport.hideMenu('left');

		var navPanel = appController.getNavPanel();
		var items = navPanel.getItems();
		// 2 = navBar + tabPanel
		navPanel.pop(items.length - 2);
	},

	onSearchButtonTap: function(btn) {
		Ext.Viewport.hideMenu('left');
		var view = new filmdb.view.search.Panel({
			title: 'Suche'
		});
		appController.showView(view);
	},

	onOfflineButtonTap: function(btn) {
		Ext.Viewport.hideMenu('left');
		Ext.toast(appController.isOnline() ? 'Offline Modus eingeschaltet' : 'Online Modus eingeschaltet');
		appController.toggleOnline();
		
	}
});
