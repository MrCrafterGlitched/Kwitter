function Log_in() {
    username= document.getElementById("user_name").value
          if (username!="") {
        if (username[0]=="@") {
            localStorage.setItem("userKey",username)
            window.location="kwitter_room.html"
        }else{
            alert("Start your username with an @")
        }
    }else{
        alert("Username cant be empty!")
    }
}