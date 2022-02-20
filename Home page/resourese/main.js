function display(e) {

    var imageSrc = document.querySelector("#dispalyimg");



    switch (e.id) {
        case "fashion":
            imageSrc.src = "./resourese/image/ambasador2.jpg";
            break;
        case "electronics":
            imageSrc.src = "./resourese/image/galaxy3.jpg";
            break;
        case "art":
            imageSrc.src = "./resourese/image/habesha1.jpg";
            break;
        case "game":
            imageSrc.src = "./resourese/image/game.jpg";
            break;
        case "cafeteria":
            imageSrc.src = "./resourese/image/resturant.jpg";
            break;
        case "gym":
            imageSrc.src = "./resourese/image/gym.jpg";
            break;
        case "cinema":
            imageSrc.src = "./resourese/image/cinema.jpg";
            break;
        case "massage":
            imageSrc.src = "./resourese/image/massage.png";
            break;
        case "cosmotics":
            imageSrc.src = "./resourese/image/makeup.jpg";
            break;
        case "treatments":
            imageSrc.src = "./resourese/image/treat.jpg";
            break;

        case "spa":
            imageSrc.src = "./resourese/image/spa.jpg";
            break;


    }




}
const User = function (uname, email, password) {
    this.userName = uname;
    this.email = email;
    this.password = password;
}

const getNewUser = _ => {

    const userName = document.getElementById('uname').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('pwd').value;
    const confirmPass = document.getElementById('confirmPass').value;
    const user = localStorage.getItem(`user_${userName}`);

    if (user != null) {
        document.getElementById('uname').style.borderColor = 'red';
    }

    const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (emailRegExp.test(email) === false) {
        document.getElementById('email').style.borderColor = 'red';
    }
    if (password !== confirmPass) {
        document.getElementById('pwd').style.borderColor = 'red';
    }
    if (password === confirmPass && emailRegExp.test(email) && user == null) {

        const newUser = new User(userName, email, password);
        setCookie('userName', newUser.userName, 4);
        localStorage.setItem(`user_${newUser.userName}`, JSON.stringify(newUser));
        document.getElementById('user_profile').style.display = 'inline-block';
        document.getElementById('user_logout').style.display = 'inline-block';
        document.getElementById('userSignin').style.display = 'none'
        document.getElementById('email').style.borderColor = 'grey';
        document.getElementById('pwd').style.borderColor = 'grey';
        document.getElementById('uname').style.borderColor = 'grey';
        document.body.style.background = 'none'
        document.getElementById('popup').style.display = 'none';
        document.body.style.overflow = 'scroll';
    }

}

const loginEvent = () => {
    const userName = document.getElementById('userName').value;
    const password = document.getElementById('pass').value;
    const user = JSON.parse(localStorage.getItem(`user_${userName}`));
    if (user != null) {
        setCookie('userName', userName, 4);
        document.getElementById('userlogin').textContent = 'Logged In';
        setTimeout(() => {
            document.getElementById('popup').style.display = 'none';
            document.getElementById('user_profile').style.display = 'inline-block';
            document.getElementById('user_logout').style.display = 'inline-block';
            document.getElementById('userSignin').style.display = 'none';
            document.body.style.overflow = 'scroll';
        }, 500);
    }
    else {
        document.getElementById('userlogin').textContent = 'Invalid Input';
        document.getElementById('userlogin').style.color = 'red';
        document.getElementById('userlogin').style.fontWeight = 'bolder';
        setTimeout(() => {
            document.getElementById('userlogin').textContent = 'Login';
            document.getElementById('userName').value = '';
            document.getElementById('userlogin').style.color = 'white';
            document.getElementById('pass').value = '';
            document.getElementById('popup').style.display = 'block'
        }, 500);
    }
}

const logout = () => {
    document.cookie = "userName=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    document.getElementById('user_profile').style.display = 'none';
    document.getElementById('user_logout').style.display = 'none';
    document.getElementById('userSignin').style.display = 'inline-block'
}

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    let username = getCookie("userName");
    const user = JSON.parse(localStorage.getItem(`user_${username}`));
    if (username != "" || user != null) {
        document.getElementById('popup').style.display = 'none';
        document.getElementById('user_profile').style.display = 'inline-block';
        document.getElementById('user_logout').style.display = 'inline-block';
        document.getElementById('userSignin').style.display = 'none';
        alert("Welcome Back " + username);
    }
}

document.getElementById('userSignin').addEventListener('click', () => {

    //  document.body.style.background = 'linear-gradient(rgba(0, 0, 0, 0.527), rgba(0, 0, 0, 0.527))';
    document.body.style.overflow = 'hidden';
    document.getElementById('popup').style.display = 'block';
    document.getElementById('popup').style.visibility = 'visible';
})

window.onload = checkCookie;

document.getElementById('userSignup').addEventListener('click', getNewUser);
document.getElementById('userlogin').addEventListener('click', loginEvent);
document.getElementById('user_logout').addEventListener('click', logout)