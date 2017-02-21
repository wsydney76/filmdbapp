Ext.define('filmdb.view.menu.MainController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.menu-main',
    
    control: {
    	'#homeButton': {
    		tap: 'onHomeButtonTap'
    	},
    	'#searchButton': {
    		tap : 'onSearchButtonTap'
    	}
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
    	var view = new filmdb.view.search.Panel({title:'Suche'});
    	appController.showView(view);
    }
    
});
