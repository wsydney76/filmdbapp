Ext.define('filmdb.view.menu.Main', {
	extend: 'Ext.Menu',

	xtype: 'mainMenu',

	requires: ['filmdb.view.menu.MainController', 'filmdb.view.search.Panel'],

	controller: 'menu-main',

	items: [{
		text: 'Home',
		iconCls: 'x-fa fa-home',
		itemId: 'homeButton'
	}, {
		text: 'Suche',
		iconCls: 'x-fa fa-search',
		itemId: 'searchButton',
		reference: 'searchButton'
	},{
		text: 'dummy',
		iconCls: 'x-fa fa-plane',
		itemId: 'offlineButton',
		reference: 'offlineButton'
	}]
});
