function add_user(){
    user_name=document.getElementById("user_name").value;
    localStorage.setItem("user_name",user_name);
    window.location="kwitter_room.html";
    
}
var firebaseConfig = {
    apiKey: "AIzaSyCWY2T8d4IYOd6SuUTG2z3g-x-g6HkHgu8",
    authDomain: "kwitter-6415d.firebaseapp.com",
    databaseURL: "https://kwitter-6415d-default-rtdb.firebaseio.com",
    projectId: "kwitter-6415d",
    storageBucket: "kwitter-6415d.appspot.com",
    messagingSenderId: "485573490034",
    appId: "1:485573490034:web:ee39af65ecb05714fa19eb"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);