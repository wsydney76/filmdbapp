Ext.define('filmdb.controller.appController', {
    extend: 'Ext.app.Controller',

    stores: ['History'],

    routes: {
        'series/:id': 'onSeries',
        'actress/:id': 'onActress',
        'film/:id': 'onFilm',
        'pictures/:id': 'onPictures',
        'info': 'onInfo',
        'history': 'onHistory',
        'search': 'onSearch',
        'search/:q': 'onSearchResult',
        'authors': 'onAuthors',
        'authors/:id': 'onAuthor'

    },

    onSeries: function(id) {
        var view = new filmdb.view.series.Series({series_id: id, title: 'Serie'});
        this.showView(view);
    },

    onActress: function(id) {
        var view = new filmdb.view.actresses.Actress({actress_id: id, title: 'Darstellerin'});
        this.showView(view);
    },

    onFilm: function(id) {
        var view = new filmdb.view.film.Film({film_id: id, title: 'Film'});
        this.showView(view);
    },

    onPictures: function(id) {
        var view = new filmdb.view.actresses.Pictures({actress_id: id, title: 'Bilder'});
        this.showView(view);
    },

    onInfo: function() {
        var view = new filmdb.view.menu.Info({title: 'Info'});
        this.showView(view);
    },

    onHistory: function() {
        var view = new filmdb.view.history.Panel({title: 'Verlauf'});
        this.showView(view);
    },

    onSearch: function() {
        var view = new filmdb.view.search.Panel({title: 'Suche'});
        this.showView(view);
    },

    onSearchResult: function(q) {
        var view = new filmdb.view.search.Result({q: q, title: getNavTitle(q)});
        this.showView(view);
    },

    onAuthors: function() {
        var view = new filmdb.view.book.AuthorList({title: 'Autoren'});
        this.showView(view);
    },

    onAuthor: function(id) {
        var view = new filmdb.view.book.List({author_id: id, title: 'Bücher'});
        this.showView(view);
    },


    showView: function(view) {
        this.getNavPanel().push(view);
    },

    getNavPanel: function() {
        return filmdb.app.getMainView();
    },

    isOnline: function() {
        return this.getSetting('offlineMode', 'on') == 'on';
    },

    toggleOnline: function() {
        this.setSetting('offlineMode', this.isOnline() ? 'off' : 'on');
        if (!this.isOnline()) {
            var p = this.getNavPanel().getItems();
            if (p.length == 2) {
                Ext.getCmp('seriesList').getController().onActivate();
            }
        }
    },

    goBack: function() {
        var p = appController.getNavPanel();
        if (p.getItems().length > 2) {
            // Close active card
            p.pop(1);
        } else {
            // Exit app?
            Ext.Msg.confirm('Confirm', 'App verlassen?', function(btnId) {
                if (btnId === 'yes') {
                    // close App
                    navigator.app.exitApp();
                }
            });

        }
    },


    // update localStorage for recent searches, latest on top
    addToHistory: function(route, title) {
        var store = this.getHistoryStore();

        // delete old record if already used
        var match = store.query('route', route);
        if (match.length) {
            match.getAt(0).drop();
        }

        store.insert(0, {
            timestamp: ISODateString(new Date()),
            route: route,
            title: title
        });
    },

    getSetting: function(item, defaultValue) {
        var setting = localStorage.getItem('filmdb_' + item);
        return setting ? setting : defaultValue;
    },

    setSetting: function(item, value) {
        localStorage.setItem('filmdb_' + item, value);
    }

});
