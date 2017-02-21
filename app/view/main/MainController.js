/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('filmdb.view.main.MainController', {
	extend: 'Ext.app.ViewController',

	alias: 'controller.main',

	control: {
		'app-main': {
			push: 'onPush'
		},
		'#menuButton': {
			tap : 'onMenuButtonTap'
		}
	},

	onMenuButtonTap: function() {
		Ext.Viewport.toggleMenu('left');
	},

	onPush: function(navPanel, view) {
		var maxChars = Math.floor(window.innerWidth / 10) - 10;
		if (view.title.length > maxChars) {
			navPanel.getNavigationBar().setTitle(view.title.substring(0, maxChars) + '...');
		}
	}
});
