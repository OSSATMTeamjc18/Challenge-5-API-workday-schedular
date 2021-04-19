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
$(".timeBlock1").text(time9Am);

//My 10AM time block is here
var time10Am = beforeTime.add(1, "h");
time10Am = time10Am.format('hh:mm A');
$(".timeBlock2").text(time10Am);

//My  11Am time block is here
var time11Am = beforeTime.add(1, "h");
time11Am = time11Am.format('hh:mm A');
$(".timeBlock3").text(time11Am);

//My 12PM time block is here
