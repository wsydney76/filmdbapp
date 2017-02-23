
Ext.define('filmdb.view.film.List',{
    extend: 'Ext.dataview.List',

	xtype: 'filmList',

    requires: [
        'filmdb.view.film.ListController',
        'filmdb.view.film.ListModel'
    ],

    controller: 'film-list',
    viewModel: {
        type: 'film-list'
    },
    
    bind: {
    	store: '{films}'
    },
    
    styleHtmlContent: true,
	striped: true,
	grouped: true,	
	infinite: true,
	
	itemTpl:[
		'<b>{title}</b><br/>',
		'<tpl if="season != \'\'">{season}/{episode} </tpl>',
		'{prodyear}'
	],
	items: [{
		xtype: 'toolbar',
		docked: 'top',
		ui: 'light',
		items: [ {
			xtype: 'searchfield',
			itemId: 'filmFilterField',
			placeHolder: 'Filter...',
			width:220
		},{
			xtype: 'button',
			itemId: 'sortButton',
			reference: 'sortButton',
			iconCls: 'x-fa fa-sort',
			text: 'Datum'
		}]
	}],
	listeners: {
		// activate fires too early
		painted: 'onActivate'
	}
});
