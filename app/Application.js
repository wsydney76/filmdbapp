/**
 * The main application class. An instance of this class is created by app.js when it
 * calls Ext.application(). This is the ideal place to handle application launch and
 * initialization details.
 */



Ext.define('filmdb.Application', {
	extend: 'Ext.app.Application',

	name: 'filmdb',
	controllers: ['appController'],
	models: ['Series', 'Actress','Film','Picture','Book','Author'],
	views: ['actresses.Actress','film.Film','menu.Main','test.Promise','book.AuthorList'],

	launch: function() {
		appController = filmdb.app.getController('appController');
		document.addEventListener("backbutton", appController.goBack, false);
		Ext.Viewport.setMenu({
			xtype: 'mainMenu'
		}, {
			side: 'left'
		});
	},

	onAppUpdate: function() {
		Ext.Msg.confirm('Application Update', 'This application has an update, reload?', function(choice) {
			if (choice === 'yes') {
				window.location.reload();
			}
		});
	}
});
