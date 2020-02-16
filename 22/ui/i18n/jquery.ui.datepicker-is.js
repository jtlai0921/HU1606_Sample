/* Icelandic initialisation for the jQuery UI date picker plugin. */
/* Written by Haukur H. Thorsson (haukur@eskill.is). */
jQuery(function($){
	$.datepicker.regional['is'] = {
		closeText: 'Loka',
		prevText: '&#x3C; Fyrri',
		nextText: 'Nasti &#x3E;',
		currentText: 'I dag',
		monthNames: ['Januar','Februar','Mars','April','Mai','Juni',
		'Juli','Agust','September','Oktober','November','Desember'],
		monthNamesShort: ['Jan','Feb','Mar','Apr','Mai','Jun',
		'Jul','Agu','Sep','Okt','Nov','Des'],
		dayNames: ['Sunnudagur','Manudagur','Triejudagur','Mievikudagur','Fimmtudagur','Fostudagur','Laugardagur'],
		dayNamesShort: ['Sun','Man','Tri','Mie','Fim','Fos','Lau'],
		dayNamesMin: ['Su','Ma','Tr','Mi','Fi','Fo','La'],
		weekHeader: 'Vika',
		dateFormat: 'dd/mm/yy',
		firstDay: 0,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['is']);
});
