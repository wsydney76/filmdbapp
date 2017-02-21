
Ext.define('filmdb.view.series.Series',{
    extend: 'Ext.dataview.List',

    requires: [
        'filmdb.view.series.SeriesController',
        'filmdb.view.series.SeriesModel'
    ],

    controller: 'series-series',
    viewModel: {
        type: 'series-series'
    },

	bind:{
		store: '{films}'
	},

	grouped: true,
	styleHtmlContent:true,
	striped: true,
	
    itemTpl: [         	   	
    	'<div class="seriestitle">{title}</div>',
    	'<div class="seriesdata">',
	    	'<tpl if="episode">',
	    		'Episode: {episode} ', 
	    	'</tpl>',
	    	'({nr}) {prodyear}',    	
    	'</div>',
    	'<div class="seriesroles">',
	    	'<tpl for="roles">',
	    		'<tpl if="lead &gt; 0">',
	    			'<div class="seriesrole">',	    			    		
		    		'{name} ({age})',
		    		'</div>',	    		
		    	'</tpl>',		
	    	'</tpl>',
    	'</div>'
    	
    ]
});
