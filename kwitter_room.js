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
user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "welcome " + user_name + ";)";

function addroom() {
      room_name = document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
            purpose: "adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location = "kwitter_page.html";

}

function getData() {
      firebase.database().ref("/").on('value', function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                  childKey = childSnapshot.key;
                  Room_names = childKey;
                  //Start code
                  console.log("room_name " + Room_names);
                  Row = "<div class='room_name' id=" + Room_names + " onclick='redirecttoroomname(this.id)'>#" + Room_names + "</div><hr>";
                  document.getElementById("output").innerHTML += Row;
                  //End code
            });
      });
}
getData();

function redirecttoroomname(name) {
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}

function logout() {
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location = "index.html";
}