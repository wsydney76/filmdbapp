
Ext.define('filmdb.view.actresses.Actress',{
    extend: 'Ext.Container',


    requires: [
        'filmdb.view.actresses.ActressController',
        'filmdb.view.actresses.ActressModel',
        'filmdb.view.actresses.Pictures'
    ],

    controller: 'actresses-actress',
    viewModel: {
        type: 'actresses-actress'
    },

	layout: 'vbox',
	bodypadding:12,

	items: [
		{
			xtype:'container',
			layout:	{
					type:'hbox',
					align:'top'
			},
			items: [{
				xtype: 'dataview',
				flex:1,
				bind: {
					store: '{actress}'
				},
				styleHtmlContent: true,

				itemTpl: [
					'<div class="containerblock">',
					'{[getActressImgTag(values.imagefile,values.imagepath,"imagefloater")]}',
					'<b>{name}</b><br/>',
					'{[getStarsImgTag(values.stars)]}',
					'<br/>{birthday}',
					'</div>'

				]
			},{
				xtype:'button',
				reference: 'pictureButton',
				itemId: 'pictureButton',
				margin:6,
				iconCls:'x-fa fa-camera',
				hidden: true
			}]
		}
	,{
		xtype: 'list',

		bind: {
			data: '{roles}'
		},
		flex:1,
		styleHtmlContent: true,
		scrollable: true,
		inline: window.innerWidth > 450,

		itemTpl: [
			'<div class="rolefloater">',
			'<b>{series}</b> <br/>{title}<br>',
			'{prodyear} ({age})',
			'</div>'
		]
	}
	]


});
