let hoursInput = document.getElementById("hours-12");
let selectSystem = document.getElementById("slesctmod");
let submitBtn = document.getElementById("sub-btn");
let resetBtn = document.getElementById("res-btn");
let messageBox = document.querySelector(".message-box");
let decisionBox = document.querySelector(".decision");
let systemBox = document.querySelector(".system");
let hoursBBox = document.querySelector(".hours");
let minutesBox = document.querySelector(".minute");
let secondsBox = document.querySelector(".second");
let selectedValue = document.getElementById("slesctmod").value;
let inputValue;

hoursInput.onchange = function (e) {
  inputValue = e.target.value;
  console.log(inputValue);
};

selectSystem.addEventListener("change", function () {
  selectedValue = this.value;
  console.log("Selected value: " + selectedValue);
});

submitBtn.onclick = function (e) {
  e.preventDefault();
  let _24HoursSystem = 0,
    minutes =0,
    seconds =0;
  if (inputValue >= 1 && inputValue <= 12) {
    if (selectedValue == "PM") {
      if (inputValue == 12) {
        _24HoursSystem = parseFloat(inputValue);
      } else {
        _24HoursSystem = parseFloat(inputValue) + 12;
      }
    } else if (selectedValue == "AM") {
      _24HoursSystem = parseFloat(inputValue);
      if (_24HoursSystem === 12) {
        _24HoursSystem = 0;
      }
    }
    decisionBox.innerHTML = "Correct";
    setInterval(() => {
      if (seconds < 59) {
        seconds += 1;
      } else {
        seconds = 0;
        if (minutes < 59) {
          minutes += 1;
        } else {
          minutes = 0;

          if (_24HoursSystem >= 0 && _24HoursSystem < 11) {
            _24HoursSystem += 1;
            selectedValue = "AM";
          } else if (_24HoursSystem >= 11 && _24HoursSystem < 23) {
            _24HoursSystem += 1;
            selectedValue = "PM";
          } else {
            _24HoursSystem = 0;
            selectedValue = "AM";
          }
        }
      }
      hoursBBox.innerHTML = _24HoursSystem;
      minutesBox.innerHTML = minutes;
      secondsBox.innerHTML = seconds;
      systemBox.innerHTML = " " + selectedValue;
    }, 1000);
  } else {
    setInterval(() => {
      decisionBox.innerHTML = "Incorrect";
      let hoursDate = new Date().getHours();
      let miutesDate = new Date().getMinutes();
      let secondsDate = new Date().getSeconds();
      hoursBBox.innerHTML = hoursDate;
      minutesBox.innerHTML = miutesDate;
      secondsBox.innerHTML = secondsDate;
      let ampm = hoursDate >= 11 ? "PM" : "AM";
      systemBox.innerHTML = " " + ampm;
    }, 1000);
  }

  messageBox.style.left = "34%";
};

resetBtn.onclick = function (e) {
  e.preventDefault();
  window.location.reload();
};
