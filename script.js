var isDate = function (input) {
  // Check if the input is a Date object
  if (input instanceof Date) {
    return true;
  }

  // Try parsing the input as a date
  const parsedDate = new Date(input);

  // Check if the parsed date is a valid date and not NaN
  return !isNaN(parsedDate.getTime());
};

// Example usage
const input = prompt("Enter Date.");
alert(isDate(input));