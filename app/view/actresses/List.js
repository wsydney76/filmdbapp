Ext.define('filmdb.view.actresses.List', {
	extend: 'Ext.dataview.List',

	xtype: 'actressList',

	requires: ['filmdb.view.actresses.ListController', 'filmdb.view.actresses.ListModel'],

	controller: 'actresses-list',
	viewModel: {
		type: 'actresses-list'
	},

	bind: {
		store: '{actresses}'
	},
	

	styleHtmlContent: true,
	striped: true,
	grouped: true,
	indexBar: true,

	infinite:true,

	itemTpl: ['<b>{firstname} {lastname}</b> {[getStarsImgTag(values.stars)]}', 
		'<tpl if="values.haspictures != 0"> <span class="x-fa fa-camera iconspan"></span></tpl>',
		'<br/>{birthday}'],
	
	items: [{
		xtype: 'toolbar',
		docked: 'top',
		ui: 'light',
		items: [ {
			xtype: 'searchfield',
			id: 'actressFilterField',
			placeHolder: 'Filter...',
			width:300
		}]
	}],
	listeners: {
		// activate fires too early
		painted: 'onActivate'
	}

});
