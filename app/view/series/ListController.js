Ext.define('filmdb.view.series.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.series-list',
    control: {
    	'list': {
    		itemtap: 'onItemTap'
    	}
    },
    
    onItemTap:function(list, index, target, record, e, eOpts) {
    	appController.showSeries(record.getId(),record.get('name'));
    }
    
});
