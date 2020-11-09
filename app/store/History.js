Ext.define('filmdb.store.History', {
        extend: 'Ext.data.Store',

        alias: 'store.History',
        storeId: 'History',

        fields: ['route', 'title', 'timestamp'],

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
            id: 'filmdb_history'
        }
    }
);
