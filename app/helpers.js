function getStarsImgTag(stars) {
    return '<img src="resources/images/stars-' + stars + '.gif"/> ';
}

function getActressImgTag(imagefile, imageurl, cssclass) {
    if (appController.isOnline()) {

        return '<img src="' + imageurl + '" class="' + cssclass + '"/>';

    } else {
        return '<img src="resources/data/images/' + imagefile + '" class="' + cssclass + '"/>';
    }
}

function getThumbnailImgTag(imageUrl, cssclass) {

    return '<img src="' + imageUrl + '" class="' + cssclass + '"/>';

}

function getPhotosImgTag() {
    return '<img src="resources/photos.png"/> ';
}

function mask(view) {
    view.setMasked({
        xtype: 'loadmask',
        message: 'Lade Daten...'
    });
}

function unmask(view) {
    view.setMasked(false);
}

function showRestError(operation) {
    // publish for developer tools console, just in case...
    op = operation;
    var reason = "Error";
    try {
        var err = operation.getError();
        if (err.status != undefined) {
            reason = err.status;
            reason += ': ' + err.statusText;
            if (err.status == 0) {
                reason += ' ' + 'Could not establish connection';
            } else if (err.status == 404) {
                reason = "Not found";
            } else if (err.status == 503) {
                reason = "Service temporarily unavailable";
            } else if (err.status >= 400) {
                var res = Ext.JSON.decode(err.response.responseText);
                msg = res.message;
                if (res.data) {
                    // Field specific error for updates
                    if (res.data.params) {
                        for (var key in res.data.params) {
                            msg += '<br/><br/><b>' + key + "</b>: " + res.data.params[key];
                        }
                    }
                }
                reason += '<br/>' + msg;
            }
        } else {
            view = new Ext.Container({
                title: "Error",
                html: err
            });
            appController.showView(view);
        }
    } catch (e) {
        reason += "<br>Exact Reason unknown (Use console to inspect the variable 'op' for dump)";
    }

    Ext.Msg.show({
        title: 'Rest-API-Request unsuccessful',
        message: reason,
        buttons: Ext.Msg.OK
    });
}

function getNavTitle(title) {
    var maxChars = Math.floor(window.innerWidth / 10) - 10;
    return title.length > maxChars ? title.substring(0, maxChars) + '...' : title;
}
