  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyDyY3T7luX-ZyvLd3ajCACE7-SEIGnOaR0",
    authDomain: "project93-330d3.firebaseapp.com",
    projectId: "project93-330d3",
    storageBucket: "project93-330d3.appspot.com",
    messagingSenderId: "1096362099555",
    appId: "1:1096362099555:web:0f52b4fc16644ecbcf4956"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
    firebase_message_id = childKey;
    message_data = childData;
//Start code

//End code
 } });  }); }
getData();
function redirectToRoomName(name)
{
 console.log(name);
 localStorage.setItem("room_name",name);
  window.location = "instagram_page.html";
}

function logout(){
 localStorage.removeItem("user_name");
 localStorage.removeItem("room_name");
   window.location = "Instagram.html";
}

function send(){
msg = document.getElementById("msg").value;
firebase.database().ref(room_name).push({
 name:user_name,
 message:msg,
 like:0
});


document.getElementById("msg").value = "";
}
