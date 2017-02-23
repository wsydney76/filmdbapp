Ext.define('filmdb.view.menu.InfoController', {
	extend: 'Ext.app.ViewController',
	alias: 'controller.menu-info',

	initViewModel: function(viewModel) {
		var store = viewModel.getStore('info');
		store.load({
			callback: function (records,op, success) {
				if (success) {
					this.localDate = records[0].get('ts');		
					this.loadRemoteData();
				}			
			},
			scope: this
		});
	},
	
	loadRemoteData: function() {
		if (appController.isOnline()) {
			var store = this.getViewModel().getStore('published');
			store.load({
				callback: function(records, op, success) {
					if (success) {
						var action = records[0].get('action');
						if (action == 'Nein') {
							this.remoteDate = records[0].get('offlineGenerated');
							if (this.localDate < this.remoteDate) {
								this.showWarning('Herunterladen einer neuen App-Version erforderlich');
							} else {
								this.showInfo('App ist aktuell');
							}						
						} else {
							this.showWarning('Server-Aktion erforderlich');
						}
												
					}
				},
				scope: this
			});
		}
	},
	
	showWarning: function(msg) {
		Ext.Msg.alert('Nicht aktuell', msg);
		this.getViewModel().setData({message:{warning:msg}});
	},
	
	showInfo: function(msg) {
		this.getViewModel().setData({message:{info:msg}});
	}
});
