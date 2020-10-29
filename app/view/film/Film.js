
Ext.define('filmdb.view.film.Film',{
    extend: 'Ext.Container',

    requires: [
        'filmdb.view.film.FilmController',
        'filmdb.view.film.FilmModel'
    ],

    controller: 'film-film',
    viewModel: {
        type: 'film-film'
    },

    layout: 'vbox',
	bodypadding:12,

	items: [ {
		xtype: 'dataview',

		bind: {
			data: '{film}'
		},
		styleHtmlContent: true,

		itemTpl: [
			'<div class="containerblock">',
			'<b>{series}</b> <br/>',
			'<b>{title}</b><br/>',
			'<tpl if="season">Staffel {season} Episode {episode} </tpl>',
			'{prodyear} ',
			'{scene} {remark}',
			'</div>'
		]
	},{
		xtype:'dataview',

		bind: {
			data: '{media}'
		},
		itemTpl: [
			'<div class="media">',
			'{name} {location} {filename}',
			'</div>'
		]
	},{
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
			'{[getActressImgTag(values.imagefile,values.imagepath,"imagefloater")]}',
			'<tpl if="lead==1"><b>{name}</b><br/></tpl>',
			'<tpl if="lead==0">{name}<br/></tpl>',
			'{[getStarsImgTag(values.stars)]}<br/>',
			'{birthday} ({age})<br>',
			'{rolename}',
			'</div>'

		]
	}
	]
});
