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



