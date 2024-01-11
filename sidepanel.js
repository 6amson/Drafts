const mainContent = document.getElementById('main--content');
let isAuth = true;


function postReq(postInput = {}, path = '') {

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postInput)
    }

    fetch(path, options)
        .then(response => response.json())
        .then(result => {
            return result;
        })
        .catch(error => {
            console.error('Error:', error);
        });
}

function verifyAuth(jwtToken = '', path = '') {

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwtToken
        }
    };

    fetch(path, options)
        .then(response => response.json())
        .then(result => {
            isAuth = true;
            //set jwt tokens in local storage and cookies
            return;
        })
        .catch(error => {
            console.error('Error:', error);
            isAuth = false;
            return;
        });
}

function getReq(jwtToken = '', path = '') {

    const options = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + jwtToken
        }
    };

    fetch(path, options)
        .then(response => response.json())
        .then(result => {
            isAuth = true;
            return result;
        })
        .catch(error => {
            console.error('Error:', error);
            return;
        });
}

function displayElement(element = HTMLElement.prototype) {
    console.log(element);
    if (element.style.display == '' || element.style.display == "block" || element.style.display == "flex") {
        element.style.display = "none";
        alert('display')
        // if (element.style.position !== 'absolute') {
        //     element.style.position = 'absolute';
        // }
    } else if (element.style.display == "none") {
        element.style.display = "block";
        alert('none')
    }
}

// const result = getData();

if (isAuth) {

    // mainContent.innerHTML = 'auth yes!';
    mainContent.style.marginTop = "220px";

    var bodyElement = document.body;
    const BodyDiv = mainContent.parentNode;
    const user = document.getElementById('header');
    const userImg = document.getElementById('logoImg');
    const logoText = document.getElementById('logoText');
    const draftOption = document.getElementById('draftOption');
    const moreOptionDiv = document.getElementById('moreOptionDiv');
    const draftOptionTopic = document.getElementById('draftOption--topic');
    const drafTagsContainer = document.getElementById('drafTagsContainer');
    // user.style.background = 'black';
    user.style.position = "absolute";
    user.style.top = '0px';
    user.style.left = "0px";
    user.style.height = "40px";
    user.style.background = "#2c2c2c";
    userImg.style.width = "30px";
    userImg.style.height = "20px";
    userImg.style.position = 'relative';
    userImg.style.top = '25%';
    userImg.style.left = '15px';
    logoText.style.display = "block";
    draftOption.style.position = "absolute";
    // draftOption.style.paddingTop = '10px';
    draftOption.style.top = '40px';
    draftOption.style.left = "0px";
    draftOption.style.height = "44px";
    draftOption.style.background = 'white';
    draftOption.style.borderBottom = 'solid #D9D9D9 1px';
    mainContent.style.overflowY = "auto";
    mainContent.style.marginLeft = '-12px'
    mainContent.style.marginRight = "-12px"
    mainContent.style.height = "370px";

    let moreOptionContent = `
    <div id="moreOption--div1">
        <image id="penIcon" src="./images/penIcon.png"></image>
        <p>Manage Notes</p>
    </div>
    <div id="moreOption--div2">
        <image id="tagIcon2" src="./images/tagFinal.png"></image>
        <p>Manage Tags</p>
    </div>
    `

    let draftOptionContent = `
    <div id='option--select--underline'></div>
    <p id="draftOption--topic">Projects</p>
    <p id="draftOption--seo">Seo</p>
    `

    let drafTagsContainerContent = `
    <div id="drafTagsChild">
    <p>
        Manage projects
    </p>
    <image src='./images/arrowDown.png'></image>
    </div>
    <div id="drafTagsChild">
    <p>
        Add tags
    </p>
    <div><span>+</span></div>
    </div>
    <div id="projectTitle">
    <image id="folderIcon" src="./images/folderIcon.png"></image>
    <p>Exploring furniture for Interior</p>
    </div>
    `

    let mainContentInner = `
    <div id="draft--children--div">
    <p id="draft--children--topic">Pine trees are great for furniture and the creation ...</p>
    <div id="draft--children">
        <div id="draft--children1">
            <image id="tagIcon" src='./images/tagFinal.png'></image>
            <p>Introduction</p>
        </div>
        <div id="moreIconDiv">
            <image id="moreIcon" src="./images/menu-dotsIcon.png"></image>
        </div>
        <div>
            <image id="linkIcon" src="./images/linkIcon.png"></image>
        </div>
    </div>
    <div class="time--ago">
        <image id="timeIcon" src="./images/time-quarterIcon.png"></image>
        <p>Created 57 min ago.</p>
    </div>
    </div>
    `


    draftOption.innerHTML = draftOptionContent;
    drafTagsContainer.innerHTML = drafTagsContainerContent;
    mainContent.innerHTML = mainContentInner;
    mainContent.append(moreOptionDiv);
    moreOptionDiv.innerHTML = moreOptionContent;


    document.getElementById('moreIcon').addEventListener('click', function () {
        if (moreOptionDiv.style.display == "block" || moreOptionDiv.style.display == "flex") {
            moreOptionDiv.style.opacity = "0"; 
            moreOptionDiv.style.display = "none";
            moreOptionDiv.style.transition = "display .2s ease, opacity 1s ease";

        } else if (moreOptionDiv.style.display == "none" || moreOptionDiv.style.display == '') {
            moreOptionDiv.style.display = "block";
            moreOptionDiv.style.opacity = "1"; 
            moreOptionDiv.style.transition = "display .2s ease, opacity 1s ease-in";
        }
    });

    document.getElementById('draftOption--topic').addEventListener('click', function () {
        if (document.getElementById('option--select--underline').style.left == "93px") {
            document.getElementById('option--select--underline').style.transition = "left .3s ease, width .3s ease";
            document.getElementById('option--select--underline').style.left = "17px";
            document.getElementById('option--select--underline').style.width = "60px";
        }
    });

    document.getElementById('draftOption--seo').addEventListener('click', function () {
        if (document.getElementById('option--select--underline').style.left == "17px" || document.getElementById('option--select--underline').style.left == "") {
            document.getElementById('option--select--underline').style.transition = "left .3s ease, width .3s ease";
            document.getElementById('option--select--underline').style.left = "93px";
            document.getElementById('option--select--underline').style.width = "40px";
        }
    });

}
else {

    let signupContent = `
    <h1 class="signup--header">Create an account</h1>
    <p class="signup--para">Create an account to effectively manage your written projects and start add drafts</p>
    <p class="signup--error"></p>
    <form>
        <input placeholder="Username" type="text" name="username" maxlength="10" />
        <span class="material-symbols-outlined person--icon">
            person
        </span>
        <input placeholder="Email" type="text" name="email" />
        <span class="material-symbols-outlined mail--icon">
            mail
        </span>
        <input placeholder="Password" type="password" name="password" maxlength="15" />
        <span class="material-symbols-outlined password--icon">
            lock
        </span>
        <button style="display: block; margin-bottom: 1.9375rem; color: white;">Create account</button>
        <button id="signup--button" type="submit" style="color: #CEFF17; margin-bottom: 1.5rem;">Signup with Gmail</button>
    </form>
    <hr style="width: 280px; margin-bottom: .9375rem;">
    <div class="signup--footer">
        <p>
            You already have an account?
        </p>
        <p id="signin--prompt">
            Login
        </p>
    </div>
    `
    mainContent.innerHTML = signupContent;
    document.getElementById('signin--prompt').addEventListener('click', setLoginTemplate);



    function setLoginTemplate(data = { error: '' }) {

        console.log({ dataError: data.error });

        //check the error property to toggle error display on pages.


        let signinContent = `
        <h1 class="signup--header">Welcome back,</h1>
        <p class="signup--para">Login to create drafts, manage tags and projects </p>
        <p class="signup--error" id="signup--error">${data.error}</p>
        <form>
            <input placeholder="Email" type="text" name="email" />
            <span class="material-symbols-outlined mail--icon--login">
                mail
            </span>
            <input placeholder="Password" type="password" name="password" maxlength="15" />
            <span class="material-symbols-outlined password--icon--login">
                lock
            </span>
            <div id='login--button--parent'>
            <button id="login--gmail--button" style="display: block; margin-bottom: 1.9375rem; color: white;">Login</button>
            <button id="login--button" type="submit" style="color: #CEFF17; margin-bottom: 1.5rem;">Login with Gmail</button>
            </div>
            <hr style="width: 280px; margin-bottom: .9375rem;">
        </form>
        <div class="signup--footer">
            <p>
                Don't have an account?
            </p>
            <p id="signup--prompt">
                Create one
            </p>
        </div>
        `

        function setSignupTemplate(data = { error: '' }) {
            let signupContent = `
            <h1 class="signup--header">Create an account</h1>
            <p class="signup--para">Create an account to effectively manage your written projects and start add drafts</p>
            <p class="signup--error" id="signup--error">${data.error}</p>
            <form>
                <input placeholder="Username" type="text" name="username" maxlength="10" />
                <span class="material-symbols-outlined person--icon">
                    person
                </span>
                <input placeholder="Email" type="text" name="email" />
                <span class="material-symbols-outlined mail--icon">
                    mail
                </span>
                <input placeholder="Password" type="password" name="password" maxlength="15" />
                <span class="material-symbols-outlined password--icon">
                    lock
                </span>
                <button style="display: block; margin-bottom: 1.9375rem; color: white;">Create account</button>
                <button id="signup--button" type="submit" style="color: #CEFF17; margin-bottom: 1.5rem;">Signup with Gmail</button>
            </form>
            <hr style="width: 280px; margin-bottom: .9375rem;">
            <div class="signup--footer">
                <p>
                    You already have an account?
                </p>
                <p id="signin--prompt">
                    Login
                </p>
            </div>
            `

            mainContent.innerHTML = signupContent;

            if (data.error == undefined) {
                document.getElementById("signup--error").style.display = "none";
            }

            document.getElementById('signin--prompt').addEventListener('click', setLoginTemplate);

        }

        mainContent.innerHTML = signinContent;

        if (data.error == undefined) {
            document.getElementById("signup--error").style.display = "none";
        }

        document.getElementById('login--button').addEventListener('click', function (e) {
            e.preventDefault();
        })

        document.getElementById('login--gmail--button').addEventListener('click', function (e) {
            e.preventDefault();
        })

        document.getElementById('signup--prompt').addEventListener('click', setSignupTemplate);
    }

    document.getElementById('signin--prompt').addEventListener('click', setLoginTemplate);

}




// console.log(event.target.id, event)
// event.preventDefault();
// event.stopPropagation();

// if (event.target && event.target.id === 'signin--prompt') {
//     let signinContent = `
//     <h1 class="signup--header">Welcome back,</h1>
//     <p class="signup--para">Login to create drafts, manage tags and projects </p>
//     <p class="signup--error">error</p>
//     <form>
//         <input placeholder="Email" type="text" name="email" />
//         <span class="material-symbols-outlined mail--icon">
//             mail
//         </span>
//         <input placeholder="Password" type="password" name="password" maxlength="15" />
//         <span class="material-symbols-outlined password--icon">
//             lock
//         </span>
//         <div id='login--button--parent'>
//         <div class='button' style="display: block; margin-bottom: 1.9375rem; color: white;">Login with Gmail</div>
//         <div class='button' id="login--button" type="submit" style="color: #CEFF17; margin-bottom: 1.5rem;">Login</div>
//         </div>
//         <hr style="width: 280px; margin-bottom: .9375rem;">
//     </form>
//     <div class="signup--footer">
//         <p>
//             Don't have an account?
//         </p>
//         <button id="signubutton--prompt">
//             Create one
//         </button>
//     </div>
//     `
//     document.getElementById('main--content').innerHTML = signinContent;
//     // document.getElementById('').
//     console.log(event.target)
// }

// else {
//     return;
// }

// mainContent.innerHTML = '';
// var header1 = document.createElement("h1");
// var signupPara = document.createElement("p");
// var signupError = document.createElement("p");
// var form = document.createElement("form");
// var inputEmail = document.createElement('input');
// var inputPassword = document.createElement('input');
// var mailSpan = document.createElement('span');
// var passwordSpan = document.createElement('span');
// var loginGmailButton = document.createElement('button');
// var loginButton = document.createElement('button');
// var  separator = document.createElement('hr')

// header1.setAttribute("class", "login--header")
// header1.setAttribute("id", "login--header")
// signupPara.setAttribute("class", "signup--para")
// signupError.setAttribute("class", "signup--error")
// inputEmail.setAttribute('type', 'text');
// inputEmail.setAttribute('placeholder', 'Email');
// inputEmail.setAttribute('name', 'Email');
// mailSpan.setAttribute('class', 'material-symbols-outlined mail--icon--login');
// inputPassword.setAttribute('type', 'text');
// inputPassword.setAttribute('placeholder', 'Password');
// inputPassword.setAttribute('name', 'Password');
// passwordSpan.setAttribute('class', 'material-symbols-outlined password--icon--login');
// loginButton.setAttribute('id', 'login--button');
// loginGmailButton.setAttribute('id', 'login--gmail--button');
// loginButton.setAttribute('type', 'submit');


// var header_text = document.createTextNode("Welcome back,");
// var signupPara_text = document.createTextNode("Login to create drafts, manage tags and projects")
// var header_text = document.createTextNode("Welcome back,");
// var mailSpan_text = document.createTextNode("mail");
// var passwordSpan_text = document.createTextNode("lock");
// var loginGmailButton_text = document.createTextNode('Login with Gmail');
// var loginButton_text = document.createTextNode('Login');

// header1.appendChild(header_text);
// signupPara.appendChild(signupPara_text);
// mailSpan.appendChild(mailSpan_text);
// passwordSpan.appendChild(passwordSpan_text);
// loginGmailButton.appendChild(loginGmailButton_text);
// loginButton.appendChild(loginButton_text);
// loginGmailButton.style.display = 'block'
// loginGmailButton.style.marginBottom = "1.9375rem";
// loginGmailButton.style.color = "white";
// loginButton.style.color = '#CEFF17';
// loginButton.style.marginBottom = "1.5rem";
// separator.style.width = '280px';
// separator.style.marginBottom = '.9375rem';

// // type="submit" style="color: #CEFF17; margin-bottom: 1.5rem;

// mainContent.appendChild(header1)
// mainContent.appendChild(signupPara);
// mainContent.appendChild(signupError);
// mainContent.appendChild(form);
// mainContent.appendChild(separator);
// form.appendChild(inputEmail);
// form.appendChild(mailSpan);
// form.appendChild(inputPassword)
// form.appendChild(passwordSpan);
// form.appendChild(loginGmailButton);
// form.appendChild(loginButton);




