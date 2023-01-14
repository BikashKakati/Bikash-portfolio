const menuBtn = document.querySelector('#menu');
const headerPart = document.querySelector('header');
const colorPicker = document.querySelectorAll('#skin-color .container span');
const colorPickerBtn = document.querySelector('#skin-color');


//for smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        let destination = document.querySelector(this.getAttribute("href"));
        destination.scrollIntoView({
            behavior: 'smooth'
        })
    })
});




menuBtn.onclick = () => {
    menuBtn.classList.toggle('fa-times');
    headerPart.classList.toggle('on');

}
headerPart.onclick = () => {
    headerPart.classList.remove('on');
    menuBtn.classList.toggle('fa-times');
}

colorPickerBtn.onclick = () => {
    document.querySelector('#skin-color .container').classList.toggle('on');
}

//color picker
colorPicker.forEach(color => {
    color.onclick = () => {
        let background = color.style.background;
        document.querySelector(':root').style.setProperty('--skin-color', background);
        localStorage.setItem("color", `${background}`);
    }
});
let background = localStorage.getItem("color");
document.querySelector(':root').style.setProperty('--skin-color', background);


//sending contact details
const scriptURL = 'https://script.google.com/macros/s/AKfycbxXbQkQl35SudkByMK-t18JGLqW7IqTOfsqOhF3DFeuxBiAwjBbxUrgvP8hGXKMHuBsvw/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById('msg');

form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = " Message send succesfully";
            setTimeout(function () {
                msg.innerHTML = ""
            }, 3000)
            form.reset()
        })
        .catch(error => {
            msg.style.color ="red";
            msg.innerHTML = "Network Error!";
            setTimeout(function () {
                msg.innerHTML = ""
            }, 3000)
            form.reset()
        })
})