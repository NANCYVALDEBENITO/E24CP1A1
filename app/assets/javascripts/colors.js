// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(function(){

$(".dial").knob({
        'change' : function (v) {return v; }
    });


$('.dial').trigger(
        'configure',
        {
            
            "fgColor":"#FF0000",
            "skin":"tron",
            "cursor":true,
			"max":255,
			"min":0,
        }
    );

$('.dial')
    .val(10)
    .trigger('change');

$("div").click(function(){

	var v1 =  document.getElementById('red').value;
	var v2 =  document.getElementById('green').value;
	var v3 =  document.getElementById('blue').value;
	console.log(v1)


	$('#d').css('background', 'rgb('+v1+','+v2+','+v3+')' );
	});




});