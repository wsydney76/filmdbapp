Ext.define('filmdb.view.test.PromiseController2', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.test-promise2',

	initViewModel: function(viewModel) {

		var me = this;

		var promises = [
			this.getFilms(2012), 
			this.getFilms(2013), 
			this.getFilms(2014)
		];

		Ext.Promise.all(promises).then(
		// success
		function(values) {
			me.setFilms([].concat(values[0], values[1], values[2]));
		},
		// failure
		function(response) {
			alert('Error');
			console.log(response);
		});
	},

	getFilms: function(year, callback) {
		var deferred = new Ext.Deferred();

		Ext.Ajax.request({
			url: defaults.urlbase + 'rest/films.json?year=' + year,
			success: function(response) {
				deferred.resolve(Ext.JSON.decode(response.responseText));
			},
			failure: function(response) {
				deferred.reject(response);
			}
		});
		return deferred.promise;
	},

	setFilms: function(data) {
		this.getViewModel().setData({
			films: data
		});
	}
});
