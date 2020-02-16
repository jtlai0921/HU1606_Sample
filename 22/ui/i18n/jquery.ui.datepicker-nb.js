/* Norwegian Bokmal initialisation for the jQuery UI date picker plugin. */
/* Written by Bjorn Johansen (post@bjornjohansen.no). */
jQuery(function($){
	$.datepicker.regional['nb'] = {
		closeText: 'Lukk',
		prevText: '&#xAB;Forrige',
		nextText: 'Neste&#xBB;',
		currentText: 'I dag',
		monthNames: ['januar','februar','mars','april','mai','juni','juli','august','september','oktober','november','desember'],
		monthNamesShort: ['jan','feb','mar','apr','mai','jun','jul','aug','sep','okt','nov','des'],
		dayNamesShort: ['son','man','tir','ons','tor','fre','lor'],
		dayNames: ['sondag','mandag','tirsdag','onsdag','torsdag','fredag','lordag'],
		dayNamesMin: ['so','ma','ti','on','to','fr','lo'],
		weekHeader: 'Uke',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};
	$.datepicker.setDefaults($.datepicker.regional['nb']);
});
