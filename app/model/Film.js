Ext.define('filmdb.model.Film', {
    extend: 'Ext.data.Model',

    fields: [
        {
            name: 'id',
            type: 'int'
        }, {
            name: 'title',
            type: 'auto'
        }, {
            name: 'season',
            type: 'int'
        }, {
            name: 'episode',
            type: 'int'
        }, {
            name: 'prodyear',
            type: 'auto'
        }
    ]
});
