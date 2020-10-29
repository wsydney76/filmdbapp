Ext.define('filmdb.view.test.PromiseController2', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.test-promise1',

	initViewModel: function(viewModel) {

		
		var me = this;
		this.getFilms(2012, function(data) {
			data1 = data;			
			me.getFilms(2013, function(data) {
				data2 = data;				
				me.getFilms(2014, function(data){
					data = [].concat(data1,data2, data);
					me.setFilms(data);
				}, this.handleError);	
			}, this.handleError);
		}, this.handleError);
	},

	getFilms: function(year, callback, errhandler) {
		Ext.Ajax.request({
			url: defaults.urlbase + '/rest/films.json?year=' + year,
			success: function(response) {
				callback(Ext.JSON.decode(response.responseText));
			},
			failure: function(response) {
				errhandler(response);
			}
		});
	},

	setFilms: function(data) {
		this.getViewModel().setData({
			films: data
		});
	},
	
	handleError: function(response) {
		// Do something meaningful...
	}
});
