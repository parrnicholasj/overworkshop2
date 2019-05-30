function authenticate() {
  const token = localStorage.getItem('accessToken');
  if (!token) {

    var el = document.createElement('div');
    el.innerHTML = "<a href='/'>log in<a>";
    
    swal({
      title: "Must be logged in",
      content: el,
      icon: "warning"
    })
    return false;
  } else {
    return true;
  }
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
      window.location.href = "/viewposts";
      console.log(userData);
    })
    .catch(err => {

      console.log(err);
      swal("funny cookie")
      // handle()
    });
}

// const token = localStorage.getItem('accessToken');

// if (token) {
//   getProfileData();
// }

$("#logout").on("click", function () {
  localStorage.removeItem("accessToken");
  window.location.href = '/';
})