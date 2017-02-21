function getStarsImgTag(stars) {
	return '<img src="' + urlbase + 'images/stars-' + stars +'.gif"/> ';
}

function getActressImgTag(imagefile,cssclass) {
	return '<img src="' + urlbase + 'images/production/' + imagefile + '" class="' + cssclass + '"/>';
}

function getThumbnailImgTag(thumbnail,cssclass) {
	return '<img src="' + domain + '/' + thumbnail + '" class="'  + cssclass + '"/>'; 
}

function getPhotosImgTag() {
	return '<img src="resources/photos.png"/> ';
}