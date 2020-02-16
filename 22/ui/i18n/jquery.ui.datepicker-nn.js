/* Norwegian Nynorsk initialisation for the jQuery UI date picker plugin. */
/* Written by Bjorn Johansen (post@bjornjohansen.no). */
jQuery(function($){
	$.datepicker.regional['nn'] = {
		closeText: 'Lukk',
		prevText: '&#xAB;Forre',
		nextText: 'Neste&#xBB;',
		currentText: 'I dag',
		monthNames: ['januar','februar','mars','april','mai','juni','juli','august','september','oktober','november','desember'],
		monthNamesShort: ['jan','feb','mar','apr','mai','jun','jul','aug','sep','okt','nov','des'],
		dayNamesShort: ['sun','man','tys','ons','tor','fre','lau'],
		dayNames: ['sundag','mandag','tysdag','onsdag','torsdag','fredag','laurdag'],
		dayNamesMin: ['su','ma','ty','on','to','fr','la'],
		weekHeader: 'Veke',
		dateFormat: 'dd.mm.yy',
		firstDay: 1,
		isRTL: false,
		showMonthAfterYear: false,
		yearSuffix: ''
	};
	$.datepicker.setDefaults($.datepicker.regional['nn']);
});
