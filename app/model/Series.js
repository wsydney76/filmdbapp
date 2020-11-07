Ext.define('filmdb.model.Series', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'station', type: 'auto'},
        {name: 'name', type: 'auto'}

    ]
});
