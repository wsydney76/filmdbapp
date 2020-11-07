Ext.define('filmdb.model.Picture', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'thumbnail', type: 'auto'},
        {name: 'title', type: 'auto'},
        {name: 'url', type: 'auto'}

    ]
});
