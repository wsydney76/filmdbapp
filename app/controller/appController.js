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
	}
});
