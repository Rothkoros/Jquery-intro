// constant variables
const schoolInput = $("#school");
const nameInput = $("#name");
const musicInput = $("#music");
const hobbiesInput = $("#hobbies");
const hobbiesButton =$("#hobbiesbutton");

// validator variables
let schoolvalid = false;
let namevalid = false;
let musicvalid = false;
let hobbiesvalid = false;

// events 
schoolInput.blur(() => {
  // if school inputs current value is not empty
  if (schoolInput.val() !== "") {

    schoolvalid = true;
    schoolInput.css("background-color", "green")
  }
  else {
    schoolInput.css("background-color", "red")
    schoolvalid=false;
  }

});
nameInput.blur(() => {
  // if school inputs current value is not empty
  if (nameInput.val() !== "") {

    namevalid = true;
    nameInput.css("background-color", "green")
  }
  else {
    nameInput.css("background-color", "red")
    namevalid=false;
  }

});
musicInput.blur(() => {
  // if school inputs current value is not empty
  if (musicInput.val() !== "") {

    musicvalid = true;
    musicInput.css("background-color", "green")
  }
  else {
    musicInput.css("background-color", "red")
    musicvalid=false;
  }

});
hobbiesInput.blur(() => {
  // if school inputs current value is not empty
  if (hobbiesInput.val() !== "") {

    hobbiesvalid = true;
    hobbiesInput.css("background-color", "green")
  }
  else {
    hobbiesInput.css("background-color", "red")
    hobbiesvalid = false;
  }

});
hobbiesButton.click(() => {
  if(hobbiesvalid===true){
    $( "#hobbies-list" ).append( `<li>${hobbiesInput.val()}</li>` );

  }
});