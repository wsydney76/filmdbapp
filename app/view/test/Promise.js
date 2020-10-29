
Ext.define('filmdb.view.test.Promise',{
    extend: 'Ext.dataview.List',

    requires: [
        'filmdb.view.test.PromiseController',
        'filmdb.view.test.PromiseModel'
    ],

    controller: 'test-promise',
    viewModel: {
        type: 'test-promise'
    },
    
    bind: {
    	data : '{films}'
    },

    itemTpl :[
    	'{title}'
    ]
});
