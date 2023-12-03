const mainContent = document.getElementById('main--content');
let isAuth = false;


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

// const result = getData();

if (isAuth) {
    mainContent.innerHTML = 'auth yes!';
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
        <button style="display: block; margin-bottom: 1.9375rem; color: white;">Signup with Gmail</button>
        <button id="signup--button" type="submit" style="color: #CEFF17; margin-bottom: 1.5rem;">Create account</button>
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



    function setLoginTemplate(data = {error: ''}) {

        let signinContent = `
        <h1 class="signup--header">Welcome back,</h1>
        <p class="signup--para">Login to create drafts, manage tags and projects </p>
        <p class="signup--error">${data.error}</p>
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
            <button id="login--gmail--button" style="display: block; margin-bottom: 1.9375rem; color: white;">Login with Gmail</button>
            <button id="login--button" type="submit" style="color: #CEFF17; margin-bottom: 1.5rem;">Login</button>
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

        function setSignupTemplate(data = {error: ''}) {
            let signupContent = `
            <h1 class="signup--header">Create an account</h1>
            <p class="signup--para">Create an account to effectively manage your written projects and start add drafts</p>
            <p class="signup--error">${data.error}</p>
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
                <button style="display: block; margin-bottom: 1.9375rem; color: white;">Signup with Gmail</button>
                <button id="signup--button" type="submit" style="color: #CEFF17; margin-bottom: 1.5rem;">Create account</button>
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

        }

        mainContent.innerHTML = signinContent;

        document.getElementById('login--button').addEventListener('click', function (e) {
            e.preventDefault();
        })

        document.getElementById('login--gmail--button').addEventListener('click', function (e) {
            e.preventDefault();
        })

        document.getElementById('signup--prompt').addEventListener('click', setSignupTemplate);
    }
}


document.getElementById('signin--prompt').addEventListener('click', setLoginTemplate);


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




