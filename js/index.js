$('input[type="submit"]').mousedown(function(){
	$(this).css('background', '<div id="2ecc71"></div>');
});
$('input[type="submit"]').mouseup(function(){
	$(this).css('background', '#1bc6a4');
});
$('#loginform').click(function() {
	$('.login').fadeToggle('slow');
	$(this).toggleClass('green');
});
$(document).mouseup(function(e) {
	var container = $(".login");
	if(!container.is(e.target) && container.has(e.target).length === 0) {
		container.hide();
		$('#loginform').removeClass('green');
	}
});