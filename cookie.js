// *********FROM https://www.w3schools.com/js/js_cookies.asp*********

// to set the cookie

function setCookie(cookieName, cookievalue, exdays) {
  const day = new Date();
  
  // sets the time
  day.setTime(day.getTime() + (exdays * 24 * 60 * 60 * 1000));
  
  // when the cookie expires 
  let cookie_expires = "expires="+day.toUTCString();
  document.cookie = cookieName + "=" + cookievalue + ";" + cookie_expires + ";path=/";
}

// to get the cookie

function getCookie(cookieName) {
  let name = cookieName + "=";
  let splitCookie = document.cookie.split(';');
  for(let i = 0; i < splitCookie.length; i++) {
    let ch = splitCookie[i];
    while (ch.charAt(0) == ' ') {
      ch = ch.substring(1);
    }
    if (ch.indexOf(name) == 0) {
      return ch.substring(name.length, ch.length);
    }
  }
  return "";
}

// to check the cookie

function checkCookie() {
  let username = getCookie("username");
  if (username != "") {
    alert("Welcome back " + username);
  } else {
    username = prompt("Enter your username:", "");
    if (username != "" && username != null) {
      setCookie("username", username, 365);
    }
  }
}
