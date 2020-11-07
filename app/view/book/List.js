Ext.define('filmdb.view.book.List', {
    extend: 'Ext.Container',

    requires: [
        'filmdb.view.book.ListController',
        'filmdb.view.book.ListModel'
    ],

    controller: 'book-list',
    viewModel: {
        type: 'book-list'
    },

    layout: 'vbox',
    bodypadding: 12,

    items: [
        {
            xtype: 'dataview',
            bind: {
                data: '{author}'
            },
            styleHtmlContent: true,

            itemTpl: `
			<div class="containerblock">
                
                <h1 class="heading">{name}</h1>
                <tpl if="born">
                  <div class="my">
                  Geboren: {born}
                  <tpl if="died">Gestorben {died}</tpl>
                  </div>
                </tpl>
                
                <div class="my">{bio}</div>

			</div>`
        }, {
            xtype: 'list',
            bind: {
                store: '{books}'
            },

            flex:1,
            scrollable: true,
            styleHtmlContent: true,
            striped: true,
            grouped: true,
            // infinite: true,
            // itemHeight: 80,

            itemTpl: `  	
                <b>{title} <tpl if="episode != 0"> ({episode})</tpl> </b><br/>
                <tpl if="subtitle">
                  {subtitle}<br>
                </tpl>
                {booktypename} {published}
            `

        }
    ],


});
