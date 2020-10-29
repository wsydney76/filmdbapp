Ext.define('filmdb.view.test.PromiseController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.test-promise',

	initViewModel: function(viewModel) {

		p = Ext.Deferred.pipeline([this.sum1, this.sum2, this.sum3], 5);
		
		p.then(function(res) {
			console.log('Res=' + res);
		});
		
		console.log('Nach der pipeline ist vor der pipeline');

	},

	sum1: function(c) {
		return new Ext.Promise(function(resolve, reject) {

			console.log('Eins');
			console.log(c);

			setTimeout(function() {
				console.log("Waited 1 seconds");
				resolve(c + 1);
			}, 1000);
		});
	},

	sum2: function(c) {
		var deferred = new Ext.Deferred();
		console.log('Zwei');
		console.log(c);

		setTimeout(function() {
			console.log("Waited 2 seconds");
			deferred.resolve(c + 2);
		}, 2000);

		return deferred.promise;
	},

	sum3: function(c) {
		var deferred = new Ext.Deferred();
		console.log('Drei');
		console.log(c);

		setTimeout(function() {
			console.log("Waited 3 seconds");
			deferred.resolve(c + 3);
		}, 3000);

		return deferred.promise;
	},

	setFilms: function(data) {
		this.getViewModel().setData({
			films: data
		});
	}
});
