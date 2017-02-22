domain = 'http://192.168.178.35';

defaults = {};

defaults.urlbase = domain + '/filmdb/';

defaults.animation = false; // 'slide'

defaults.reader = {
	rootProperty: 'data',
	successProperty: 'success'
};

defaults.proxy = {
	type: 'rest',
	pageParam: false,
	limitParam: false,
	startParam: false,
	timeout: 25000, // approx 15 sec to startup ColdFusion + CF Wheels
	useDefaultXhrHeader: false,
	listeners: {
		exception: function(proxy, request, operation, eOpts) {
			showRestError(operation);
		}
	}
};