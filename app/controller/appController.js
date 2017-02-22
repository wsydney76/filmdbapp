Ext.define('filmdb.controller.appController', {
    extend: 'Ext.app.Controller',
    
    
    showActress: function(id,name) {
    	var view = new filmdb.view.actresses.Actress({actress_id:id, title:name});
    	this.showView(view);		
    },
    
    showFilm: function(id, title) {
    	var view = new filmdb.view.film.Film({film_id:id, title:title});
    	this.showView(view);
    },
    
    showSeries: function(id, name) {
    	var view = new filmdb.view.series.Series({series_id:id, title:name});
    	this.showView(view);
    },
    
    showView: function(view) {
    	this.getNavPanel().push(view);
    },
    
    getNavPanel: function() {
		return filmdb.app.getMainView();
	},
	
	isOnline: function() {
		return this.getSetting('offlineMode','on') == 'on';
	},
	
	toggleOnline: function() {
		this.setSetting('offlineMode', this.isOnline() ? 'off' : 'on');
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
	
	getSetting: function(item, defaultValue) {
		var setting = localStorage.getItem('filmdb_' + item);
		return setting ? setting : defaultValue;
	},

	setSetting: function(item, value) {
		localStorage.setItem('filmdb_' + item, value);
	}
	
});
