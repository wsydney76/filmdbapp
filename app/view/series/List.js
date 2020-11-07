Ext.define('filmdb.view.series.List', {
    extend: 'Ext.dataview.List',

    xtype: 'seriesList',

    id: 'seriesList',

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

    styleHtmlContent: true,
    striped: true,
    infinite: true,

    itemTpl: `
    	<b>{name}</b><br/>
    	{station}    	
    `,

    items: [
        {
            xtype: 'toolbar',
            docked: 'top',
            ui: 'light',
            items: [
                {
                    xtype: 'searchfield',
                    id: 'seriesListFilterField',
                    placeHolder: 'Filter...',
                    width: 300
                }
            ]
        }
    ],

    listeners: {
        // activate fires too early
        painted: 'onActivate'
    }

});
