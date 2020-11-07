Ext.define('filmdb.view.search.PanelModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.search-panel',
    data: {
        name: 'filmdb'
    },

    stores: {

        searches: {
            fields: ['search', 'timestamp'],

            autoLoad: true,
            autoSync: true,

            sorters: [
                {
                    property: 'timestamp',
                    direction: 'desc'
                }
            ],

            proxy: {
                type: 'localstorage',
                id: 'filmdb_searches'
            }
        }
    }

});
