//Moment decarations for the day and time of the schedular
moment(Date);
$("#currentDay").text(moment().format('dddd MMMM Do YYYY, h:mm a'));
// Moment Current time 
var theCurrentTime = moment();

theCurrentTime = theCurrentTime.startOf("hour");

var beforeTime = moment().startOf('day').add(9, "hours");

//This section is where I will put my time blocks.

//My 9AM time block is here
var time9Am = beforeTime.add(0, "h");
time9Am = time9Am.format('hh:mm A');
$(".block1").text(time9Am);

//My 10AM time block is here
var time10Am = beforeTime.add(1, "h");
time10Am = time10Am.format('hh:mm A');
$(".block2").text(time10Am);

//My  11Am time block is here
var time11Am = beforeTime.add(1, "h");
time11Am = time11Am.format('hh:mm A');
$(".block3").text(time11Am);

//My 12PM time block is here
var time12Pm = beforeTime.add(1, "h");
time12Pm = time12Pm.format('hh:mm A');
$(".block4").text(time12Pm);

//My 1PM time block is here
var time1Pm = beforeTime.add(1, "h");
time1Pm = time1Pm.format('hh:mm A');
$(".block5").text(time1Pm);

//My 2PM time block is here
var time2Pm = beforeTime.add(1, "h");
time2Pm = time2Pm.format('hh:mm A');
$(".block6").text(time2Pm);

//My 3PM time block is here
var time3Pm = beforeTime.add(1, "h");
time3Pm = time3Pm.format('hh:mm A');
$(".block7").text(time3Pm);

//My 4PM time block is here
var time4Pm = beforeTime.add(1, "h");
time4Pm = time4Pm.format('hh:mm A');
$(".block8").text(time4Pm);

//My 5PM time block is here
var time5Pm = beforeTime.add(1, "h");
time5Pm = time5Pm.format('hh:mm A');
$(".block9").text(time5Pm);

//setting up my functions to test the time if it is in the past, present or future

function testingTheTime() {
    //adding my 9am "time9Am"
    time9Am = moment().startOf('day').add(9, "hours");
    theCurrentTime = theCurrentTime.startOf("hour");
    if (theCurrentTime.isAfter(time9Am)){
        $(".form9").addClass("past");
    } else if (theCurrentTime.isSame(time9Am)) {
        $(".form9").addClass("present");
    } else if (theCurrentTime.isBefore(time9Am)) {
        $(".form9").addClass("future");
    };
    //adding my 10am "time10Am"
    time10Am = moment().startOf('day').add(10, "hours");
    theCurrentTime = theCurrentTime.startOf("hour");
    if (theCurrentTime.isAfter(time10Am)){
        $(".form10").addClass("past");
    } else if (theCurrentTime.isSame(time10Am)) {
        $(".form10").addClass("present");
    } else if (theCurrentTime.isBefore(time10Am)) {
        $(".form10").addClass("future");
    };
    //adding my 11am "time11Am"
    time11Am = moment().startOf('day').add(11, "hours");
    theCurrentTime = theCurrentTime.startOf("hour");
    if (theCurrentTime.isAfter(time11Am)){
        $(".form11").addClass("past");
    } else if (theCurrentTime.isSame(time11Am)) {
        $(".form11").addClass("present");
    } else if (theCurrentTime.isBefore(time11Am)) {
        $(".form11").addClass("future");
    };
    //adding my 12pm "time12Pm"
    time12Pm = moment().startOf('day').add(12, "hours");
    theCurrentTime = theCurrentTime.startOf("hour");
    if (theCurrentTime.isAfter(time12Pm)){
        $(".form12").addClass("past");
    } else if (theCurrentTime.isSame(time12Pm)) {
        $(".form12").addClass("present");
    } else if (theCurrentTime.isBefore(time12Pm)) {
        $(".form12").addClass("future");
    };
    //adding my 1pm "time1Pm"
    time1Pm = moment().startOf('day').add(13, "hours");
    theCurrentTime = theCurrentTime.startOf("hour");
    if (theCurrentTime.isAfter(time1Pm)){
        $(".form1").addClass("past");
    } else if (theCurrentTime.isSame(time1Pm)) {
        $(".form1").addClass("present");
    } else if (theCurrentTime.isBefore(time1Pm)) {
        $(".form1").addClass("future");
    };
    //adding my 2PM "time2Pm"
    time2Pm = moment().startOf('day').add(14, "hours");
    theCurrentTime = theCurrentTime.startOf("hour");
    if (theCurrentTime.isAfter(time2Pm)){
        $(".form2").addClass("past");
    } else if (theCurrentTime.isSame(time2Pm)) {
        $(".form2").addClass("present");
    } else if (theCurrentTime.isBefore(time2Pm)) {
        $(".form2").addClass("future");
    };
    //adding my 3PM "time3Pm"
    time3Pm = moment().startOf('day').add(15, "hours");
    theCurrentTime = theCurrentTime.startOf("hour");
    if (theCurrentTime.isAfter(time3Pm)){
        $(".form3").addClass("past");
    } else if (theCurrentTime.isSame(time3Pm)) {
        $(".form3").addClass("present");
    } else if (theCurrentTime.isBefore(time3Pm)) {
        $(".form3").addClass("future");
    };
    //adding my 4PM "time4Pm"
    time4Pm = moment().startOf('day').add(16, "hours");
    theCurrentTime = theCurrentTime.startOf("hour");
    if (theCurrentTime.isAfter(time4Pm)){
        $(".form4").addClass("past");
    } else if (theCurrentTime.isSame(time4Pm)) {
        $(".form4").addClass("present");
    } else if (theCurrentTime.isBefore(time4Pm)) {
        $(".form4").addClass("future");
    };
    //adding my 5PM "time5Pm"
    time5Pm = moment().startOf('day').add(17, "hours");
    theCurrentTime = theCurrentTime.startOf("hour");
    if (theCurrentTime.isAfter(time5Pm)) {
        $(".form5").addClass("past");
    } else if (theCurrentTime.isSame(time5Pm)) {
        $(".form5").addClass("present");
    } else if (theCurrentTime.isBefore(time5Pm)) {
        $(".form5").addClass("future");
    };
}
testingTheTime();




