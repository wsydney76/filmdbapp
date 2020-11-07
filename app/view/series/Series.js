Ext.define('filmdb.view.series.Series', {
    extend: 'Ext.dataview.List',

    requires: [
        'filmdb.view.series.SeriesController',
        'filmdb.view.series.SeriesModel'
    ],

    controller: 'series-series',
    viewModel: {
        type: 'series-series'
    },

    bind: {
        store: '{films}'
    },

    title: 'HUHU',

    grouped: true,
    styleHtmlContent: true,
    striped: true,

    infinite: true,
    itemHeight: 100,

    itemTpl: `
    	<div class="seriestitle">{title}</div>
    	<div class="seriesdata">
	    	<tpl if="episode">
	    		Episode: {episode} 
	    	</tpl>
	    	({nr}) {prodyear}
    	</div>
    	<div class="seriesroles">
	    	<tpl for="roles">
	    		<tpl if="lead &gt; 0">
	    			<div class="seriesrole">
		    		  {name} ({age})
		    		</div>
		    	</tpl>
	    	</tpl>
    	</div>
    `,

    items: [
        {
            xtype: 'panel',
            docked: 'top',
            id: 'seriesTitle',
            html: '<h1 class="heading">Title</h1>'

        },
        {
            xtype: 'toolbar',
            docked: 'top',
            ui: 'light',
            items: [
                {
                    xtype: 'searchfield',
                    id: 'seriesDetailsFilterField',
                    placeHolder: 'Filter...',
                    width: 300
                }
            ]
        }
    ],
});
