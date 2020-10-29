
Ext.define('filmdb.view.book.List',{
    extend: 'Ext.dataview.List',

    requires: [
        'filmdb.view.book.ListController',
        'filmdb.view.book.ListModel'
    ],

    controller: 'book-list',
    viewModel: {
        type: 'book-list'
    },
    
    bind: {
    	store: '{books}'
    },
    
    
    styleHtmlContent: true,
	striped: true,
	grouped: true,	
	// infinite: true,
	// itemHeight: 80,

    itemTpl: [    	
    	'<b>{title} <tpl if="episode != 0"> ({episode})</tpl> </b><br/>',
    	'<tpl if="subtitle">{subtitle}<br></tpl>',
    	'{booktypename} {published}'
    ]

});
