// moment.js
var currentDate = moment().format('dddd')+" "+ moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');

//Hour variables
var nineAm = $('#9');
var tenAm = $('#10');
var elevenAm = $('#11');
var noon = $('#12');
var onePm = $('#13');
var twoPm = $('#14');
var threePm = $('#15');
var fourPm = $('#16');
var fivePm = $('#17');
var sixPm = $('#18');
var sevenPm = $('#19');

// additional variables

var hour = moment().hours();
var input;
var hourGroup;

var interval = setInterval(function() {
    var now = moment();
    $('#currentDay').html(now.format('YYYY MMMM DD') + ' '+ now.format('dddd').substring(0,3).toUpperCase());
    $('#currentDay').html(currentDate+ ' ' + now.format('hh:mm:ss A'));
}, 100);

function openPage() {
    var hour9 = JSON.parse(localStorage.getItem("09:00 am"))
    nineAm.val(hour9);

    var hour10 = JSON.parse(localStorage.getItem("10:00 am"))
    tenAm.val(hour10);

    var hour11 = JSON.parse(localStorage.getItem("11:00 am"))
    elevenAm.val(hour11);

    var hour12 = JSON.parse(localStorage.getItem("12:00 pm"))
    noon.val(hour12);

    var hour13 = JSON.parse(localStorage.getItem("01:00 pm"))
    onePm.val(hour13);

    var hour14 = JSON.parse(localStorage.getItem("02:00 pm"))
    twoPm.val(hour14);

    var hour15 = JSON.parse(localStorage.getItem("03:00 pm"))
    threePm.val(hour15);

    var hour16 = JSON.parse(localStorage.getItem("04:00 pm"))
    fourPm.val(hour16);

    var hour17 = JSON.parse(localStorage.getItem("05:00 pm"))
    fivePm.val(hour17);

    var hour18 = JSON.parse(localStorage.getItem("06:00 pm"))
    sixPm.val(hour18);

    var hour19 = JSON.parse(localStorage.getItem("07:00 pm"))
    sevenPm.val(hour19);
}

function background() {
    $(".form-control").each(function() {
        var time = parseInt($(this).attr('id'));
        console.log(time)
        hour = parseInt(hour);
        console.log(hour);
        if (hour > time) {
            $(this).addClass('past');
        } else if (hour < time) {
            $(this).addClass('future');
        } else {
            $(this).addClass('present');
        }
    });
}

$(document).ready(function(){
    openPage();
    background();
    // save buttons
    $('.saveBtn').on('click', function() {
        input = $(this).siblings('.form-control').val().trim();
        hourGroup = $(this).siblings('.input-group-prepend').text().trim();
        localStorage.setItem(hourGroup,JSON.stringify(input));        
    })
    //clear day button
    $('#clear').on('click', function() {
        localStorage.clear();
        openPage()
    })
});