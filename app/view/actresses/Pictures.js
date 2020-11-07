Ext.define('filmdb.view.actresses.Pictures', {
    extend: 'Ext.dataview.List',

    requires: [
        'filmdb.view.actresses.PicturesController',
        'filmdb.view.actresses.PicturesModel'
    ],

    controller: 'actresses-pictures',
    viewModel: {
        type: 'actresses-pictures'
    },

    bind: {
        store: '{pictures}'
    },

    styleHtmlContent: true,
    inline: true,

    itemTpl: `
    	{[getThumbnailImgTag(values.imageUrl, "")]}
    `
});
