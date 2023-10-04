console.clear();

/*
Change the contents of this page depending on the current day and time.

- Write a function getGreeting that returns a different greeting depending on the current time:
  - 6 - 12: returns "Good Morning"
  - 13 - 18: returns "Good Afternoon"
  - 19 - 22: returns "Good Evening"
  - 23 - 5: returns "Good Night"

(HINT: you can get the current time: new Date().getHours() )

- Write a function getDayColor that returns a different color depending on the current weekday:
  - monday: "darkgray"
  - tuesday - friday: "lightblue"
  - saturday - sunday: "hotpink"

(HINT: you can get the current weekday: new Date().getDay() )

*/

const display = document.querySelector('[data-js="display"]');

function getGreeting() {
  // Code here
  const currentHour = new Date().getHours();
  // console.log({currentHour});
  if (currentHour >= 6 && currentHour <= 12){
    return `Good Morning, It is ${currentHour} O\'clock`
  } else if (currentHour >= 13 && currentHour <= 18) {
    return `Good Afternoon, It is ${currentHour} O\'clock`
  }else if (currentHour >= 19 && currentHour <= 22) {
    return `Good Evening, It is ${currentHour} O\'clock`
  }else if (currentHour >= 23 && currentHour <= 5) {
    return `Good Night, It is ${currentHour} O\'clock`
  }
  return currentHour
}

function getDayColor() {
  // Code here
  let day = new Date().getDay();
  // console.log({day})
  switch(day) {
    case 1 : return "darkgray";
    break;
    case 2 : return "lightblue";
    break;
    case 3 : return "hotpink";
    break;
    case 4 : return "darkgray";
    break;
  }
  return "white"
}

display.textContent = getGreeting();
document.body.style.backgroundColor = getDayColor();
