import $ from "jquery";// ---- contact.js
// ---------------------------------------------------------

   $('.alert').slideUp( 600 ).delay( 1000).fadeIn( 400 );
// ---- Contact form interpretation
// ---------------------------------------------------------
$(function() {
  // ---- Cover the RESET button in the contact form
  // ---- Use "false" to reload the page locally or "true" to reload from server
  $("#reset").click(function() {
    location.reload(true);
  });

  // ---- Language Settings
  let language = document.documentElement.lang;  
  let goodToGoMsg;
  let goodToGoName;
  let messageError;
  let goodToGoEmail;
  let goodToGoHuman;
  let goodToGo;
  let x;
  let y;
  let part1;
  let part2;
  let result;
  let name;
  let email;
  let message;
  let human;
  let pattern;

  let msgEmail = "Please check your email address",
    msgEmpty = "You must fill all the form fields to proceed!",
    msgNotSent = "Internal error. E-mail was not sent. Please try again!",
    msgNoPhpFile =
      "We could not fetch the data from the server. Please try again!",
    msgServer = "Request can not be send",
    msgEquation1 = "Please check the equation. The result is NOT <strong>",
    msgEquation2 = "</strong>.",
    msgSuccess = "Your email was sent successfully.",
    fieldName = "Please enter your name.",
    fieldEmailFormat =
      "Check the formatting of your email address and try again.",
    fieldEmail = "Please enter your email address.",
    fieldMessage = "Please enter your message.",
    fieldHumanResult = "The result is wrong.",
    fieldHuman = "Please enter the sum of the equation.",
    humanQuestion = "Are you Human or a Bot?",
    humanEquation = "What is";
  //  let language = "de";
  function makeNumber(numb) {
    switch (numb) {
      case 1:
        return "one";
        break;
      case 2:
        return "two";
        break;
      case 3:
        return "three";
        break;
      case 4:
        return "four";
        break;
      case 5:
        return "five";
        break;
      case 6:
        return "six";
        break;
      case 7:
        return "seven";
        break;
      case 8:
        return "eight";
        break;
      case 9:
        return "nine";
        break;
      case 10:
        return "ten";
        break;
      default:
        return;
    }
  }
  if (language == "en") {
    let msgEmail = "Please check your email address",
      msgEmpty = "You must fill all the form fields to proceed!",
      msgNotSent = "Internal error. E-mail was not sent. Please try again!",
      msgNoPhpFile =
        "We could not fetch the data from the server. Please try again!",
      msgServer = "Request can not be send",
      msgEquation1 = "Please check the equation. The result is NOT <strong>",
      msgEquation2 = "</strong>.",
      msgSuccess = "Your email was sent successfully.",
      fieldName = "Please enter your name.",
      fieldEmailFormat =
        "Check the formatting of your email address and try again.",
      fieldEmail = "Please enter your email address.",
      fieldMessage = "Please enter your message.",
      fieldHumanResult = "The result is wrong.",
      fieldHuman = "Please enter the sum of the equation.",
      humanQuestion = "Are you Human or a Bot?",
      humanEquation = "What is";

    $("#name").attr("placeholder", "Your Name");
    $("#email").attr("placeholder", "Your e-mail address");
    $("#message").attr("placeholder", "Enter Your Message");
    $("#human").attr("placeholder", "Answer?");
    $("#submit").attr("value", "Send it");
    $("#reset").attr("value", "RESET");
  }

  if (language == "es") {
    let msgEmail = "Por favor revisa tu dirección de correo electrónico",
     msgEmpty = "¡Debe completar todos los campos del formulario para continuar!",
     msgNotSent = "Error interno. No se envió el correo electrónico. ¡Inténtelo de nuevo!",
     msgNoPhpFile =
       "No pudimos recuperar los datos del servidor. ¡Inténtalo de nuevo!",
     msgServer = "La solicitud no se puede enviar",
     msgEquation1 = "Por favor, verifique la ecuación. El resultado NO es <strong>",
     msgEquation2 = "</ strong>.",
     msgSuccess = "Su correo electrónico se envió con éxito.",
     fieldName = "Por favor ingrese su nombre",
     fieldEmailFormat =
       "Verifique el formato de su dirección de correo electrónico y vuelva a intentarlo",
     fieldEmail = "Por favor, ingrese su dirección de correo electrónico.",
     fieldMessage = "Por favor ingrese su mensaje",
     fieldHumanResult = "El resultado es incorrecto.",
     fieldHuman = "Introduzca la suma de la ecuación",
     humanQuestion = "¿Eres humano o un bot?",
     humanEquation = "Lo que es";

    $("#name").attr("placeholder", "Su nombre / Name");
    $("#email").attr("placeholder", "Su dirección de correo eletronico / E-mail");
    $("#message").attr("placeholder", "Su mensage / Comments");
    $("#human").attr("placeholder", "¿respuesta? / Answer");
    $("#submit").attr("value", "Send");
    $("#reset").attr("value", "Reset");

    function makeNumber(numb) {
      switch (numb) {
        case 1:
          return "uno";
          break;
        case 2:
          return "dos";
          break;
        case 3:
          return "tres";
          break;
        case 4:
          return "cuatro";
          break;
        case 5:
          return "cinco";
          break;
        case 6:
          return "seis";
          break;
        case 7:
          return "siete";
          break;
        case 8:
          return "ocho";
          break;
        case 9:
          return "nueve";
          break;
        case 10:
          return "diez";
          break;
        default:
          return;
      }
    }
  }

  let msgGraphic =
    '<div class="text-center"><img src="./img/spinner.gif" alt="spinner" style="width:54px;height:55px;"/></div>';

  // ---- /Language Settings

  function placeNumber() {
    x = Math.floor(Math.random() * 10 + 1);
    y = Math.floor(Math.random() * 10 + 1);
    part1 = makeNumber(x);
    part2 = makeNumber(y);
    result = x + y;
    $("#result").html(result);
    $("#part1").html(part1);
    $("#part2").html(part2);
  }
  placeNumber();
  $("#human-question").html(humanQuestion);
  $("#human-equation").html(humanEquation);

  $("#contactForm").on("submit", function(e) {
    e.preventDefault();
    e.stopPropagation();

    // get values from FORM
    name = $("#name").val();
    email = $("#email").val();
    message = $("#message").val();
    human = $("#human").val();
    goodToGo = false;
    messageError = msgServer;
    pattern = new RegExp(
      /^(('[\w-\s]+')|([\w-]+(?:\.[\w-]+)*)|('[\w-\s]+')([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i
    );

    // ---- Checking name input
    if (name && name.length > 0 && $.trim(name) != "") {
      $("#name-row")
        .removeClass("has-danger")
        .addClass("has-success");
      $("#name")
        .removeClass("form-control-danger")
        .addClass("form-control-success");
      $("#name-feedback").html("&nbsp;");
      goodToGoName = true;
    } else {
      messageError = msgEmpty;
      $("#name-row")
        .removeClass("has-success")
        .addClass("has-danger");
      $("#name")
        .removeClass("form-control-success")
        .addClass("form-control-danger");
      $("#name-feedback").html(fieldName);
      goodToGoName = false;
    }

    // ---- Checking email input
    if (email && email.length > 0 && $.trim(email) != "") {
      // ---- email field not empty
      // ---- Testing email fomat
      if (pattern.test(email)) {
        // ---- email format OK
        $("#email-row")
          .removeClass("has-warning")
          .removeClass("has-danger")
          .addClass("has-success");
        $("#email")
          .addClass("form-control-success")
          .removeClass("form-control-warning");
        $("#email-feedback").html("&nbsp;");
        goodToGoEmail = true;
      } else {
        // ---- email format not OK
        messageError = msgEmail;
        $("#email-row")
          .removeClass("has-success")
          .removeClass("has-danger")
          .addClass("has-warning");
        $("#email")
          .removeClass("form-control-success")
          .removeClass("form-control-danger")
          .addClass("form-control-warning");
        $("#email-feedback").html(fieldEmailFormat);
        goodToGoEmail = false;
      }
    } else {
      // ---- email field empty
      messageError = msgEmpty;
      $("#email-row")
        .removeClass("has-success")
        .removeClass("has-warning")
        .addClass("has-danger");
      $("#email")
        .removeClass("form-control-success")
        .removeClass("form-control-warning")
        .addClass("form-control-danger");
      $("#email-feedback").html(fieldEmail);
      goodToGoEmail = false;
    }

    // ---- Checking message input
    if (message && message.length > 0 && $.trim(message) != "") {
      // ---- message field not empty
      $("#message-row")
        .removeClass("has-danger")
        .addClass("has-success");
      $("#message")
        .removeClass("form-control-danger")
        .addClass("form-control-success");
      $("#message-feedback").html("&nbsp;");
      goodToGoMsg = true;
    } else {
      // ---- message field empty
      messageError = msgEmpty;
      $("#message-row")
        .removeClass("has-success")
        .addClass("has-danger");
      $("#message")
        .removeClass("form-control-success")
        .addClass("form-control-danger");
      $("#message-feedback").html(fieldMessage);
      goodToGoMsg = false;
    }

    // ---- Converting human input into a number
    human = Number(human);

    // ---- Checking the human factor
    if (human /* && human.length > 0 && $.trim(human) != '' */) {
      // ---- equation field not empty
      if (human == result) {
        // ---- result is correct
        $("#human-row")
          .removeClass("has-warning")
          .removeClass("has-danger")
          .addClass("has-success");
        $("#human")
          .removeClass("form-control-warning")
          .removeClass("form-control-danger")
          .addClass("form-control-success");
        $("#human-feedback").html("&nbsp;");
        goodToGoHuman = true;
      } else {
        // ---- result is incorrect
        messageError = msgEquation1 + human + msgEquation2;
        $("#human-row")
          .removeClass("has-danger")
          .addClass("has-warning");
        $("#human")
          .removeClass("form-control-danger")
          .addClass("form-control-warning");
        $("#human-feedback").html(fieldHumanResult);
        goodToGoHuman = false;
      }
    } else {
      // ---- equation field empty
      messageError = msgEmpty;
      $("#human-row")
        .removeClass("has-warning")
        .removeClass("has-success")
        .addClass("has-danger");
      $("#human")
        .removeClass("form-control-warning")
        .removeClass("form-control-success")
        .addClass("form-control-danger");
      $("#human-feedback").html(fieldHuman);
      goodToGoHuman = false;
    }

    //---- Checking if all fields are filled
    console.log(
      "Name: <br>" +
        goodToGoName +
        "Email: " +
        goodToGoEmail +
        "Msg: " +
        goodToGoMsg +
        "Captcha: " +
        goodToGoHuman
    );
    if (goodToGoName && goodToGoEmail && goodToGoMsg && goodToGoHuman) {
      goodToGo = true; // ---- all fields are filled
    } else {
      messageError = msgEmpty;
      goodToGo = false; // ---- not all fields are filled
    }

    if (goodToGo) {
      // ---- let's do some ajax to forward the js-form-data to a PHP-file
      $.ajax({
        // ---- which will send the email. (Line 303)
        data: $("#contactForm").serialize(),
        beforeSend: function() {
          // ---- entertain with loading gif while contacting the server
          $("#success")
            .removeClass("alert-warning")
            .removeClass("alert-danger")
            .removeClass("alert-success")
            .html(msgGraphic);
        },
        success: function(response) {
          // ---- server request positiv ...
          if (response == 1) {
            // ---- email was sent
            $("#success")
              .removeClass("alert-warning")
              .removeClass("alert-danger")
              .addClass("alert-success")
              .html(msgSuccess);
          } else {
            // ---- ... but email not sent
            $("#success")
              .removeClass("alert-succes")
              .removeClass("alert-warning")
              .addClass("alert-danger")
              .html(msgNotSent);
          }
        },
        error: function(e) {
          // ---- PHP file not found
          $("#success")
            .removeClass("alert-succes")
            .removeClass("alert-warning")
            .addClass("alert-danger")
            .html(msgNoPhpFile);
        },
        complete: function(done) {
          console.log("Finished");
        },
        type: "POST", // ---- post data to the PHP-file
        url: "./php/send_email.php"
      });
      return true;
    } else {
      // ---- there is a problem contacting the server
      $("#success")
        .removeClass("alert-succes")
        .removeClass("alert-warning")
        .addClass("alert-danger")
        .html(messageError);
      return false;
    }

    return false;
  });
});
