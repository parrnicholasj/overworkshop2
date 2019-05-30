function signup(event) {
  event.preventDefault();

  const userName = $('#user-name-input')
    .val()
    .trim();
  const email = $('#email-input')
    .val()
    .trim();
  const password = $('#password-input')
    .val()
    .trim();


  const signUpData = new FormData();
  signUpData.append('userName', userName);
  signUpData.append('email', email);
  signUpData.append('password', password);

  console.log(signUpData);

  $.ajax({
    url: '/api/user/register',
    method: 'post',
    data: signUpData,
    contentType: false,
    processData: false
  })
    .then(res => {
      console.log(res);
      swal("signed up, now log in");
      location.reload();

      // signUpAndLogin(email, password);
      // window.location.href = "/viewposts";
      // login();
    })
    .catch(err => {
      swal("problem singing up");
      console.log(err);
    });
}

function signUpAndLogin(email, password) {
  const loginData = { email, password };

  $.ajax({
    url: "/api/user/login",
    method: "POST",
    data: loginData
  }).then(accessToken => {

    localStorage.setItem('accessToken', accessToken);
    getProfileData();
    window.location.href = "/viewposts";
  })
}

function login(event) {
  event.preventDefault();

  const email = $('#email-input-login')
    .val()
    .trim();
  const password = $('#password-input-login')
    .val()
    .trim();

  const loginData = { email, password };

  $.ajax({
    url: '/api/user/login',
    method: 'post',
    data: loginData
  })
    .then(accessToken => {
      // console.log("accessToken yoo:",accessToken);
      // alert(accessToken);
      localStorage.setItem('accessToken', accessToken);
      // getProfileData();
      window.location.href = "/viewposts";
    })
    .catch(err => {
      console.log(err);
      return swal({
        title: err.responseJSON.error,
        icon: "error"
      })
    });
}

function getProfileData() {
  const token = localStorage.getItem('accessToken');

  $.ajax({
    url: '/api/user',
    method: 'get',
    headers: {
      authorization: `Bearer ${token}`
    }
  })
    .then(userData => {
      $("#user-name").text(userData.userName);
      // window.location.href = "/viewposts";
      console.log(userData);
    })
    .catch(err => {
      
      console.log(err);
      swal("funny cookie")
      // handle()
    });
}

// function logout() {
//   localStorage.removeItem("accessToken");
//   window.location.href = '/';
// }

$(document).ready(function() {
  // $("#user-info").hide();
  $('#signup-form').on('submit', signup);
  $('#login-form').on('submit', login);
  
  const token = localStorage.getItem('accessToken');
  if (token) {
    console.log('hitting');
    window.location.href = "/viewposts"
    $("#user-info").show();
    // getProfileData();
  }
});
