/* Hungarian initialisation for the jQuery UI date picker plugin. */
/* Written by Istvan Karaszi (jquery@spam.raszi.hu). */
jQuery(function($){
	$.datepicker.regional['hu'] = {
		closeText: 'bezar',
		prevText: 'vissza',
		nextText: 'előre',
		currentText: 'ma',
		monthNames: ['Januar', 'Februar', 'Marcius', 'Aprilis', 'Majus', 'Junius',
		'Julius', 'Augusztus', 'Szeptember', 'Oktober', 'November', 'December'],
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Maj', 'Jun',
		'Jul', 'Aug', 'Szep', 'Okt', 'Nov', 'Dec'],
		dayNames: ['Vasarnap', 'Hetfő', 'Kedd', 'Szerda', 'Csutortok', 'Pentek', 'Szombat'],
		dayNamesShort: ['Vas', 'Het', 'Ked', 'Sze', 'Csu', 'Pen', 'Szo'],
		dayNamesMin: ['V', 'H', 'K', 'Sze', 'Cs', 'P', 'Szo'],
		weekHeader: 'Het',
		dateFormat: 'yy.mm.dd.',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: true,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['hu']);
});
