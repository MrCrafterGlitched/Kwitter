//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyB8bl4zmdTIjmjDDBSmxANTkhHC8FxOqTI",
      authDomain: "kwitter-database-server.firebaseapp.com",
      databaseURL: "https://kwitter-database-server-default-rtdb.firebaseio.com",
      projectId: "kwitter-database-server",
      storageBucket: "kwitter-database-server.appspot.com",
      messagingSenderId: "736442671194",
      appId: "1:736442671194:web:2bb2e879be9a34bdbd3863",
      measurementId: "G-L8KE15B0CC"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user=localStorage.getItem("userKey")
    room=localStorage.getItem("roomKey")
    document.getElementById("room_name").innerHTML="#"+room

    function Send_msg() {
          message=document.getElementById("msg_text").value
          firebase.database().ref(room).push({
                Username:user,message:message,like:0
          });
          document.getElementById("msg_text").value=""
    }
function getData() {
       firebase.database().ref("/"+room).on('value', function(snapshot) {
              document.getElementById("output").innerHTML = "";
               snapshot.forEach(function(childSnapshot) {
                     childKey  = childSnapshot.key; 
                     childData = childSnapshot.val(); 
                     if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
console.log(firebase_message_id)
console.log(message_data)
U_name=message_data["Username"]
msg=message_data["message"]
lik=message_data["like"]
name_tag="<h4>"+ U_name +"<img class='user_tick' src='tick.png'> </h4>"
msg_tag="<h4 class='message_h4'>"+ msg+ "</h4>"
button_tag="<button class='btn btn-warning' id="+ firebase_message_id +" value=" +lik+ " onclick='update_like(this.id)'>" 
span_tag="<span class='glyphicon glyphicon-thumbs-up'>Like:" + lik + "</span> </button> <hr>"
Row= name_tag+msg_tag+button_tag+span_tag
document.getElementById("output").innerHTML+= Row
//End code
      } });  }); }
getData();
function Logout() {
      localStorage.removeItem("userKey")
      localStorage.removeItem("roomKey")
      window.location="index.html"
}
function update_like(msg_id){
      likes=document.getElementById(msg_id).value;
      new_likes=Number(likes)+1
      firebase.database().ref(room).child(msg_id).update({
            like:new_likes
      });
}