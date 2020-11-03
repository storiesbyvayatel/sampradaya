$(document).mousemove(function(e){    
    var logo ='<img class="logo" src="logofilledopa130p.png">';

    $("body").append(
        $(logo).clone().offset({
            left: e.pageX,
            top: e.pageY
        })
    );
});

$(document).ready(function(){
	$("#button1").click(function(){
		alert("under construction");
	});
});

setInterval(function(){
	$('.logo').fadeOut(3000, function(){
		$(this).remove();
	});
}, 5000);