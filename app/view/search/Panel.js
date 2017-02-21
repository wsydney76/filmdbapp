
Ext.define('filmdb.view.search.Panel',{
    extend: 'Ext.Container',

	xtype: 'searchPanel',

    requires: [
        'filmdb.view.search.PanelController',
        'filmdb.view.search.PanelModel',
        'filmdb.view.search.Result'
    ],

    controller: 'search-panel',
    viewModel: {
        type: 'search-panel'
    },
	
	layout:'vbox',

    items: [{
    	xtype: 'panel',
    	layout: 'hbox',    	
    	items: [{
    		xtype:'searchfield',
    		reference:'searchField',
    		width:'50%',
    		value:''
    	},{
    		xtype:'button',
    		text:'Suche',
    		ui:'action'
    	}]
    },{
    		xtype:'list',
    		flex:1,
    		bind:{
    			store: '{searches}'
    		},
    		itemTpl: '{search}',
    		items:[{
    			docked:'top',
    			html:'<b>Letzte Suchen:</b>'
    		}]
    	}
    
    ]
});
