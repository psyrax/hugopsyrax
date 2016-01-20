$(document).ready(function(){
	particlesJS.load('particles-js','/js/particlesConfig.json',function(){});
	$('#ticketAmount').on('change', function	() {
		var totalTicket = parseInt($(this).val()) * 65;
		$('#amountPP').val(totalTicket);
		$('#ticketTotal').html('$'+totalTicket);
	})
});