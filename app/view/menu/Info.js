Ext.define('filmdb.view.menu.Info', {
    extend: 'Ext.Container',

    requires: ['filmdb.view.menu.InfoController', 'filmdb.view.menu.InfoModel'],

    controller: 'menu-info',
    viewModel: {
        type: 'menu-info'
    },

    items: [
        {
            xtype: 'dataview',
            bind: {
                store: '{published}'
            },

            itemTpl: `
			<div class="containerblock">
				<p class="infotitle">Server-Zustand:</p>
				{lastUpdate}: Letzter Update<br/>
				{offlineGenerated}: Stand Offline Daten<br/> 
				{apkCompiled}: Stand App
				<p class="infotitle">Server-Aktion erforderlich:</p>
				{action}
			</div>
		`
        }, {
            xtype: 'dataview',
            bind: {
                store: '{info}'
            },

            itemTpl: `
		<div class="containerblock"> 
			<p class="infotitle">Stand der Offline-Daten:</p> 
			{ts}
			<p class="infotitle">Download aktuelle Version:</p>
			<a href="http://192.168.178.35/filmdbapp/cordova/platforms/android/build/outputs/apk/android-debug.apk" target="_blank"">Download</a> 
		</div>
		`
        }, {
            xtype: 'dataview',
            bind: {
                data: '{message}'
            },
            styleHtmlContent: true,
            itemTpl: `
            <div class="containerblock"> 
                <p class="infotitle" style="color:red">{warning}</p>
                <p class="infotitle">{info}</p>
            </div>'
		`
        }
    ]
});

