
var mainText = document.getElementById("mainText");
var time = document.getElementById("time");
var title = document.getElementById("title");
var firebaseRef = firebase.database().ref();


firebaseRef.on("value", function(snapshot) {
    var posts = "";
    snapshot.forEach(function(data) {
        var dtitle = data.val()["name"];
        var dtime = data.val()["when"];
        var ddes = data.val()["description"];
        posts += '<div class="jumbotron">' + "Title: " +
            dtitle + "<br>Time: " +  dtime + "<br>Description: " + ddes + "<br></div>"
    });

    document.getElementById("allPosts").innerHTML = "<p id=\"allPosts\">" + posts + "</p>"
});

function postEvent() {

    messageText = mainText.value;
    eventTime = time.value;

    firebaseRef.push().set({
        name: title.value,
        when: eventTime,
        description: messageText
    });

    window.location.replace("events.html");
}


firebase.auth().onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in.
        document.getElementById("signup_login").style.display = "none";
        document.getElementById("logout").style.display = "block";

        var user = firebase.auth().currentUser;

        if(user != null) {
            var email_id= user.email;
            document.getElementById("user_para").innerHTML = "Welcome User: " + email_id;
        }

    } else {
        // No user is signed in.

        document.getElementById("signup_login").style.display = "block";
        document.getElementById("logout").style.display = "none";
    }
});


function login() {
    var userEmail = document.getElementById("email_field").value;
    var userPass= document.getElementById("password_field").value;

    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;

        window.alert("Error: " + errorMessage);
        // ...
    });
}

function logout() {
    firebase.auth().signOut();
}

function signUp() {
    var email = document.getElementById("email").value;
    var pw = document.getElementById("password").value;

    firebase.auth().createUserWithEmailAndPassword(email, pw).catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
    });
}