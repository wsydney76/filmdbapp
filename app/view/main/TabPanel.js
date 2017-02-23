Ext.define('filmdb.view.main.TabPanel', {
	extend: 'Ext.tab.Panel',

	xtype: 'mainTabPanel',

	requires: ['filmdb.view.main.TabPanelController', 'filmdb.view.main.TabPanelModel', 
	'filmdb.view.series.List', 'filmdb.view.actresses.List', 'filmdb.view.film.List'],

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
	
	layout: {
	     animation: Ext.os.is.Android ? false :  'slide'
	 },

	items: [{
		title: 'Serien',
		//iconCls: 'x-fa fa-film',
		layout: 'fit',
		items: [{
			xtype: 'seriesList'
		}]
	}, {
		title: 'Darstellerinnen',
		//iconCls: 'x-fa fa-user',	
		layout: 'fit',	
		items: [{
			xtype: 'actressList'
		}]
	}, {
		title: 'Filme',
		//iconCls: 'x-fa fa-user',	
		layout: 'fit',	
		items: [{
			xtype: 'filmList'
		}]
	}]

});

