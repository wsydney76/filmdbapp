Ext.define('filmdb.model.Book', {
    extend: 'Ext.data.Model',
    
    fields: [
        { name: 'id', type: 'int' },
        { name: 'authorname', type: 'auto' },
        { name: 'name', type: 'auto' },
        { name: 'title', type: 'auto' },
        { name: 'subtitle', type: 'auto' },
        { name: 'published', type: 'auto' },
        { name: 'episode', type: 'int' }

    ]
});
