Ext.define('filmdb.view.main.TabPanel', {
	extend: 'Ext.tab.Panel',

	xtype: 'mainTabPanel',

	requires: ['filmdb.view.main.TabPanelController', 'filmdb.view.main.TabPanelModel', 'filmdb.view.series.List', 'filmdb.view.actresses.List'],

	controller: 'main-tabpanel',
	viewModel: {
		type: 'main-tabpanel'
	},
	defaults: {
		tab: {
			iconAlign: 'top'
		},
		styleHtmlContent: true
	},

	tabBarPosition: 'top',

	items: [{
		title: 'Serien',
		iconCls: 'x-fa fa-film',
		layout: 'fit',
		items: [{
			xtype: 'seriesList'
		}]
	}, {
		title: 'Darsteller',
		iconCls: 'x-fa fa-user',	
		layout: 'fit',	
		items: [{
			xtype: 'actressList'
		}]
	}]

});

