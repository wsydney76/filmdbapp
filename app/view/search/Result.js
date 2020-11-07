Ext.define('filmdb.view.search.Result', {
    extend: 'Ext.Container',

    requires: [
        'filmdb.view.search.ResultController',
        'filmdb.view.search.ResultModel'
    ],

    controller: 'search-result',
    viewModel: {
        type: 'search-result'
    },

    layout: 'vbox',

    items: [
        {
            xtype: 'dataview',
            bind: {
                data: '{response}'
            },
            itemTpl: `
    		<div class="containerblock"
    		  Treffer: {totalCount} in {time} msec
    		</div>
    	`
        }, {
            xtype: 'list',
            flex: 1,
            bind: {
                data: '{items}'
            },
            itemTpl: `
    		{typename}: {title}<br/>
    		<tpl for="highlight">
    			{field}: {context}<br/>
    		</tpl>
    	`
        }
    ]
});
