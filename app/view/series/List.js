
Ext.define('filmdb.view.series.List',{
    extend: 'Ext.dataview.List',
    
    xtype: 'seriesList',

    requires: [
        'filmdb.view.series.ListController',
        'filmdb.view.series.ListModel',
        'filmdb.view.series.Series'
    ],
    
    baseCls: 'series',
    
    bind: {
    	store: '{series}'
    },

    controller: 'series-list',
    viewModel: {
        type: 'series-list'
    },
	
	styleHtmlContent:true,
	striped:true,

    itemTpl : [
    	'<b>{name}</b><br/>',
    	'{station}'
    ],
	listeners: {
		// activate fires too early
		painted: 'onActivate'
	}

});
