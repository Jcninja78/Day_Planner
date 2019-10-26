
var currentDay = moment().format("dddd MMM Do YY"); 
$("#currentDay").append(currentDay);
var format = "h:mm A";
var timeSlots = $(".container");
var startOfDay = 9;
var endOfDay = 17;


for (i = 9; i <= 17; i++) {
    var currentTime = moment();
    var currentTimeBlock = moment(i,format);
    var nextTimeBlock = moment(i + 1,format);



    var newHour = $("<div>");
    newHour.addClass("row time-block")

    var hour = $("<div>");
    hour.addClass("col-2 hour py-4");
    hour.text(currentTimeBlock.format(format));

    var timeFrame = $("<textarea>");
    timeFrame.addClass("col-8 description");

    if (currentTimeBlock > currentTime){
        timeFrame.addClass("future");
    } else if(currentTime >= currentTimeBlock && currentTime < nextTimeBlock) {
        timeFrame.addClass("present");
    }
    else{
        timeFrame.addClass("past");
    } 


    
    
   

    var saveButton = $("<button>")
    saveButton.addClass("col-2 saveBtn")

    newHour.append(hour, timeFrame, saveButton);
    timeSlots.append(newHour);
}

var button = localStorage.getItem("saveBtn");

$(".saveBtn").on("click", function(){
    event.preventDefault();
    var button = $(".saveBtn").val();
    localStorage.setItem("saveBtn", button)
})


// 
// 
// 
// 
// 
// 
// 
