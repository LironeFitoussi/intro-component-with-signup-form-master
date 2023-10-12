const fNameError = $("<span>").addClass("errMsg");
fNameError.text("First Name cannot be empty");

const lNameError = $("<span>").addClass("errMsg");
lNameError.text("Last Name cannot be empty");

const mailError = $("<span>").addClass("errMsg");
mailError.text("Email cannot be empty");

const pswdError = $("<span>").addClass("errMsg");
pswdError.text("Password cannot be empty");

const errorIcon = $("<img>")
  .addClass("errIcon")
  .attr("src", "./images/icon-error.svg");

$("form").submit(function (e) {
  e.preventDefault();
  $(".errMsg").remove();
  $(".errIcon").remove();
  let inputCollection = document.querySelectorAll("input");

  $(inputCollection).each((indexInArray, valueOfElement) => {
    const inputValue = $(valueOfElement).val();
    const inputId = $(valueOfElement).attr("id");
    $(valueOfElement).addClass("wrongInput");

    const clonedErrorIcon = errorIcon.clone();

    if (inputValue === "") {
      switch (inputId) {
        case "fNameInput":
          fNameError.insertAfter(valueOfElement);
          $("#fNameContainer").append(clonedErrorIcon);
          error();
          break;
        case "lNameInput":
          lNameError.insertAfter(valueOfElement);
          $("#lNameContainer").append(clonedErrorIcon);
          error();
          break;
        case "mailInput":
          mailError.insertAfter(valueOfElement);
          $("#malContainer").append(clonedErrorIcon);
          error();
          break;
        case "pswdInput":
          pswdError.insertAfter(valueOfElement);
          $("#passwordContainer").append(clonedErrorIcon);
          error();
          break;
      }
    } else {
      $(valueOfElement).removeClass("wrongInput");
    }
  });
});

function error() {
  console.log("error");
  $(".errIcon").css("display", "block");
  $(".errIcon").addClass("animated");
  setTimeout(() => {
    $(".errIcon").removeClass("animated");
  }, 500);
}
