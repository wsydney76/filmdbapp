
Ext.define('filmdb.view.book.AuthorList',{
    extend: 'Ext.dataview.List',

    requires: [
        'filmdb.view.book.AuthorListController',
        'filmdb.view.book.AuthorListModel',
        'filmdb.view.book.List'
    ],

    controller: 'book-authorlist',
    viewModel: {
        type: 'book-authorlist'
    },

    bind: {
    	store: '{authors}'
    },


    styleHtmlContent: true,
	striped: true,
	//infinite: true,
	// itemHeight: 50,

    itemTpl: `
    	<b>{firstname} {lastname}</b>
    `
});
