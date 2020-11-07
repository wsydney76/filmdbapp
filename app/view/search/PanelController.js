Ext.define('filmdb.view.search.PanelController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.search-panel',

    control: {
        'searchfield': {
            action: 'onSearch'
        },
        'button': {
            tap: 'onSearch'
        },
        'list': {
            itemTap: 'onItemTap'
        }
    },

    onSearch: function() {
        var q = this.lookup('searchField').getValue();
        if (q.trim() == '') {
            Ext.toast('Kein Suchbegriff');
            return false;
        }
        this.doSearch(q);
    },

    onItemTap: function(list, index, target, record, e, eOpts) {
        this.doSearch(record.get('search'));
    },

    doSearch: function(q) {
        this.addToSearches(q);
        var view = new filmdb.view.search.Result({q: q, title: getNavTitle(q)});
        appController.showView(view);
    },

    // update localStorage for recent searches, latest on top
    addToSearches: function(search) {
        var store = this.getViewModel().getStore('searches');

        // delete old record if already used
        var match = store.query('search', search);
        if (match.length) {
            match.getAt(0).drop();
        }

        store.insert(0, {
            timestamp: this.ISODateString(new Date()),
            search: search
        });
    },

    // Convert date to ISO String
    ISODateString: function(d) {
        function pad(n) {
            return n < 10 ? '0' + n : n;
        }

        return d.getUTCFullYear() + '-'
            + pad(d.getUTCMonth() + 1) + '-'
            + pad(d.getUTCDate()) + 'T'
            + pad(d.getUTCHours()) + ':'
            + pad(d.getUTCMinutes()) + ':'
            + pad(d.getUTCSeconds()) + 'Z';
    }
});
