
var currentDate = moment().format('dddd') + " " + moment().format("Do MMM YYYY");
var currentHour = moment().format('h:mm:ss a');
var nineAm = $("#9am");
var tenAm = $("#10am");
var elevenAm = $("#11am");
var twelvePm = $("#12pm");
var onePm = $("#13pm");
var twoPm = $("#14pm");
var threePm = $("#15pm");
var fourPm = $("#16pm");
var fivePm = $("#17pm");
var hour = moment().hours();
var userInput;
var hourSpan;
var interval = setInterval(function() {
  var momentNow = moment();
  $('#currentDay').html(momentNow.format('YYYY MMMM DD') + ' '
    + momentNow.format('dddd')
    .substring(0,3).toUpperCase());
  $('#currentDay').html(currentDate + " " + momentNow.format('hh:mm:ss A'));
}, 100);

function initPage() {
  console.log("Current Hour " + hour);
  var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(8:00 AM));
  }
  var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(9:00 AM));
  }
  var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(10:00 AM));
  }
  var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(11:00 AM));
  }
  var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(12:00 PM));
  }
  var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(1:00 PM));
  }
  var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(2:00 PM));
  }
  var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(3:00 PM));
  }
  var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(4:00 PM));
  }
  var saveTasks = function() {
    localStorage.setItem("tasks", JSON.stringify(5:00 PM));
  }
} 

function background () {
  $(".form-control").each(function () {
      var timeTest = parseInt($(this).attr("id"));
      hour = parseInt(hour);
      console.log(timeTest);
      console.log(hour);
      if (hour > timeTest) {
          $(this).addClass("past");
      } else if (hour < timeTest) {
          $(this).addClass("future");
      } else {
          $(this).addClass("present");
      }
  });
}