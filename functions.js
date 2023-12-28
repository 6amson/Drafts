let isAuth = false;
const mainContent = document.getElementById('main--content');

if(isAuth){
    mainContent.innerHTML = 'auth yes!';


}else{

    window.open = "https://www.google.com", "GoogleTab";

}




// function setLoginTemplate(){

//     window.replace = 'signin.html';
// }

// document.getElementById('signin--prompt').addEventListener('click', setLoginTemplate);