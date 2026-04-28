let n = 1;
let slideshow = setInterval(changeImg, 4000);

function changeImg() {
    n++;
    if (n > 5) {
        n = 1;
    }
    let newfile = "images/カルーセル/mainvisual" + n + ".jpg";

    for (let i = 1; i <= 10; i++) {
        setTimeout(function () {
            let alpha = (10 - i) / 10;
            document.getElementById('photo').style.opacity = alpha;
        }, i * 100);
    }

    setTimeout(function () {
        document.getElementById('photo').setAttribute('src', newfile);
    }, 1000);

    for (let i = 11; i <= 20; i++) {
        setTimeout(function () {
            let alpha = (i - 10) / 10;
            document.getElementById('photo').style.opacity = alpha;
        }, i * 100);
    }
}


//小さい写真
let img = document.querySelectorAll('.small li img');
for (let i = 0; i < img.length; i++) {
    img[i].addEventListener('click', function () {
        mclick(this);
    })
    img[i].addEventListener('mouseover', function () {
        mover(this);
    })
    img[i].addEventListener('mouseout', function () {
        mout(this);
    })
}

function mclick(obj) {
    let filename = obj.getAttribute('src');
    let parent = obj.closest('.flex');
    let mainImg = parent.querySelector('.masaki_image img');
    mainImg.setAttribute('src', filename);
}

function mover(obj) {
    obj.style.border = 'solid 2px #333'
}
function mout(obj) {
    obj.style.border = 'none'
}


//横小さい写真
let img_yoko = document.querySelectorAll('.under li img');
for (let i = 0; i < img_yoko.length; i++) {
    img_yoko[i].addEventListener('click', function () {
        mclick1(this);
    })
    img_yoko[i].addEventListener('mouseover', function () {
        mover1(this);
    })
    img_yoko[i].addEventListener('mouseout', function () {
        mout1(this);
    })
}

function mclick1(obj) {
    let filename = obj.getAttribute('src');
    let parent = obj.closest('.under_ditail');
    let mainImg = parent.previousElementSibling.querySelector('img');
    mainImg.setAttribute('src', filename);
}

function mover1(obj) {
    obj.style.border = 'solid 2px #333'
}
function mout1(obj) {
    obj.style.border = 'none'
}

function goConfirm(event) {
    event.preventDefault();

    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;

    // 一時保存（確認用）
    localStorage.setItem("temp_name", name);
    localStorage.setItem("temp_email", email);

    location.href = "confirm.html";
}

// 表示
document.getElementById("c_name").textContent = localStorage.getItem("temp_name");
document.getElementById("c_email").textContent = localStorage.getItem("temp_email");

// 戻る
function back() {
    location.href = "new.html";
}

// 登録確定
function register() {
    const name = localStorage.getItem("temp_name");
    const email = localStorage.getItem("temp_email");

    // 本登録として保存
    localStorage.setItem("username", name);
    localStorage.setItem("email", email);

    // 一時データ削除
    localStorage.removeItem("temp_name");
    localStorage.removeItem("temp_email");

    alert("登録完了！");
    location.href = "index.html";
}

function loginbutton(event) {
    event.preventDefault();

    const name = document.getElementById("login_name").value;
    const email = document.getElementById("login_email").value;

    const savedName = localStorage.getItem("username");
    const savedEmail = localStorage.getItem("email");

    if (name === savedName && email === savedEmail) {
        alert("ログイン成功！");
        location.href = "index.html";
    } else {
        alert("ユーザー名またはメールアドレスが正しくありません");
    }
}
