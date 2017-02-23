/*
 * This file is generated and updated by Sencha Cmd. You can edit this file as
 * needed for your application, but these edits will have to be merged by
 * Sencha Cmd when upgrading.
 */


Ext.application({
    name: 'filmdb',

    extend: 'filmdb.Application',

    requires: [
        'filmdb.view.main.Main','Ext.Toast', 'Ext.MessageBox', 'Ext.data.proxy.Rest',
        'filmdb.overrides.locale.de.LoadMask'
    ],

    // The name of the initial view to create. With the classic toolkit this class
    // will gain a "viewport" plugin if it does not extend Ext.Viewport. With the
    // modern toolkit, the main view will be added to the Viewport.
    //
    mainView: 'filmdb.view.main.Main'
	
    //-------------------------------------------------------------------------
    // Most customizations should be made to filmdb.Application. If you need to
    // customize this file, doing so below this section reduces the likelihood
    // of merge conflicts when upgrading to new versions of Sencha Cmd.
    //-------------------------------------------------------------------------
});
