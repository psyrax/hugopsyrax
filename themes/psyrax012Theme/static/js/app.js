$(document).ready(function(){
	particlesJS.load('particles-js','/js/particlesConfig.json',function(){});
	$('#ticketAmount').on('change', function	() {
		var totalTicket = parseInt($(this).val()) * 96;
		$('#amountPP').val(totalTicket);
		$('#ticketTotal').html('$'+totalTicket);
	});
	$('#ticketAmountUpgrade').on('change', function	() {
		var totalTicket = parseInt($(this).val()) * 30;
		$('#amountPPUpgrade').val(totalTicket);
		$('#ticketTotalUpgrade').html('$'+totalTicket);
	})
});