// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
// You can use CoffeeScript in this file: http://coffeescript.org/

$(function(){

$(".dial").knob({
        'change' : function (v) { console.log(v); }
    });


$('.dial').trigger(
        'configure',
        {
            "data-width":100,
            "fgColor":"#FF0000",
            "skin":"tron",
            "cursor":true,
			"max":255,
			"min":0,
        }
    );

$('.dial')
    .val(0)
    .trigger('change');




	
});
