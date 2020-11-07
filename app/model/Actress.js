Ext.define('filmdb.model.Actress', {
    extend: 'Ext.data.Model',

    fields: [
        {name: 'id', type: 'int'},
        {name: 'firstname', type: 'auto'},
        {name: 'lastname', type: 'auto'},
        {name: 'name', type: 'auto'},
        {name: 'birthday', type: 'auto'},
        {name: 'stars', type: 'auto'},
        {name: 'haspictures', type: 'int'},
        {name: 'imagefile', type: 'auto'}
    ]
});
