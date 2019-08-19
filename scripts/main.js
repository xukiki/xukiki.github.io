let myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src')
    if (mySrc === 'resource/images/icon-firefox.png') {
        myImage.setAttribute('src', 'resource/images/icon-firefox2.png');
    }else {
        myImage.setAttribute('src', 'resource/images/icon-firefox.png')
    }
}

function setHeading(name) {
    let myHeading = document.querySelector('h2');
    myHeading.textContent = 'Mozilla 酷毙了，' + name + '!';
}

function saveUserName() {
    let myName = prompt('请输入您的名字');
    localStorage.setItem('name', myName)
    setHeading(myName);
}

let storedName  = localStorage.getItem('name');
if (storedName) {
    setHeading(storedName)
}else {
    saveUserName();
}

let myButton = document.querySelector('button');
myButton.onclick = saveUserName;