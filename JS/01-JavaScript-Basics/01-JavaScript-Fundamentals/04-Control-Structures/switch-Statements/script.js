let day = "Monday";

// switch (day) {
//   case "Monday":
//     console.log("Start of work week");
//     break;
//   case "Tuesday":
//   case "Wednesday":
//   case "Thursday":
//     console.log("Midweek");
//     break;
//   case "Friday":
//     console.log("TGIF!");
//     break;
//   case "Saturday":
//   case "Sunday":
//     console.log("Weekend!");
//     break;
//   default:
//     console.log("Invalid day");
// }

// Switch with expressions (newer syntax)
let dayType =
  {
    Monday: "workday",
    Tuesday: "workday",
    Wednesday: "workday",
    Thursday: "workday",
    Friday: "workday",
    Saturday: "weekend",
    Sunday: "weekend",
  }[day] || "unknown";

console.log(dayType);

// [day] - fetches the value from the object using the key stored in the variable.
