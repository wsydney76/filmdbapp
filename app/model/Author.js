Ext.define('filmdb.model.Author', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'firstname', type: 'auto' },
        { name: 'lastname', type: 'auto' },
        { name: 'name', type: 'auto' }
    ]
});
