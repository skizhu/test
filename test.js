var userList = []
var userListResult = []
var v = ''
function search() {
    v = v + document.getElementById('searchBar').value;
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            var rootRef = firebase.database().ref();
            rootRef.child('users/' + v).on("value", function (snapshot) {

                if (snapshot.exists()) {
                    console.log(v);
                    window.location.replace('result.html');
                }
                else if (snapshotData == null) {

                    window.alert('user does not exist')
                }
                else { console.error('Neither Statements Are True') };
            });

        }
        else {
            document.getElementById('searchWrapper').style.opacity = '0';
            document.getElementById('searchWError').style.opacity = '1';
            document.getElementById('searchWError').style.zIndex = '999';
        }
    });
    console.log('V: ' + v);
}
function onResultLoaded(hobby, food, subject, year, email, v) {
    
    var userList = []
    var rootRef = firebase.database().ref();
    rootRef.child('users/' + v).on("value", function (snapshot) {
        if (snapshot.exists()) {
            var userHobby = database.ref('users/' + v + '/0/hobby');
            userHobby.on('value', (snapshot) => {
                hobby = snapshot.val();
                userList.push(hobby)
            });
            var userFood = database.ref('users/' + v + '/1/food');
            userFood.on('value', (snapshot) => {
                food = snapshot.val();
                userList.push(food)
            });
            var userSubject = database.ref('users/' + v + '/2/subject');
            userSubject.on('value', (snapshot) => {
                subject = snapshot.val();
                userList.push(subject)
            });
            var userYear = database.ref('users/' + v + '/3/year');
            userYear.on('value', (snapshot) => {
                year = snapshot.val();
                userList.push(year)
            });
            var userEmail = database.ref('users/' + v + '/4/email');
            userEmail.on('value', (snapshot) => {
                email = snapshot.val();
                userList.push(email)
            })}
        document.getElementById('profileName').innerHTML = v;
        document.getElementById('profileHobby').innerHTML = "<span id='profileSpan'>Hobby: </span>" + userList[0] + "</p>";
        document.getElementById('profileFood').innerHTML = "<span id='profileSpan'>Favourite Food: </span>" + userList[1] + "</p>";
        document.getElementById('profileSubject').innerHTML = "<span id='profileSpan'>Favourite Subject: </span>" + userList[2] + "</p>";
        document.getElementById('profileYear').innerHTML = "<span id='profileSpan'>Year: </span>" + userList[3] + "</p>";
        document.getElementById('profileEmail').innerHTML = "<span id='profileSpan'>Email: </span>" + userList[4] + "</p>";
    })
    
}
