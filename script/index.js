// 全局变量
var username,
    name,
    company,
    password,
    loginUsername,
    loginPassword;



// 登录注册切换的功能封装
(function(window, document){
    $(".login-change").click(function(){
        $(".login-page").css("display", "none")
        $(".sign-page").css("display", "flex")
        $(".login-box").css("display", "none")
        $(".sign-box").css("display", "block")
      
    });

    $(".sign-change").click(() => {
        $(".sign-page").css("display", "none")
        $(".login-page").css("display", "flex")
        $(".sign-box").css("display", "none")
        $(".login-box").css("display", "block")
    })
})(window, document);


// 注册输入框效果, 获取注册用户数据
(function(window, document){

    $(".sign-input").focus(function(){
        $(this).siblings("label").removeClass("no-focus");
        $(this).siblings("label").addClass("focus-label");
    })

    $("#sign_company").change(function(e) {
        company = e.target.value;
    });

    $("#sign_name").change(function(e) {
        name = e.target.value;
    });
    $("#sign_username").change(function(e) {
        username = e.target.value;
    });
    $("#sign_password").change(function(e) {
        password = e.target.value;
    })

})(window, document);

// 注册提交
(function(window, documnet){
    $(".sign-button").click(function(){

        if(!company) {
            alert("学校或组织不得为空")
        }else if(!name) {
            alert("名字不得为空")
        }else if((username.length < 10) || (username.length > 14)) {
            alert("请检查电话号码格式是否正确？")
        }else if(!password) {
            alert("请设置密码")
        }else{
        axios.post('http://39.107.221.105:8088/etask-1.0/regist', {
            'company': company,
            'name': name,
            'username': username,
            'password': password
        }).then(function(e){
            console.log(e.data)
            if(e.data === true) {
                window.location.href="/"
            }else{
                alert("此电话号码已被占用!")
            }
        })
        .catch(function(e){
            alert("服务器错误！请稍后再试！");
            console.log(e);
        })}
    })
})(window, document);

// 登录用户信息采集
(function(window, document){
    $("#login_username").change(function(e){
        loginUsername = e.target.value;
    })
    $("#login_password").change(function(e){
        loginPassword = e.target.value;
    })
})(window, document);


// 登录提交
(function(window, document){
    $(".login-button").click(() => {
        console.log(username,password)
        axios.post('http://39.107.221.105:8088/etask-1.0/login', {
            "username": loginUsername,
            "password": loginPassword
        })
        .then(function( res ){
            localStorage.
            console.log(res.data)
            if(res.data === true) {
                window.location.href="/src/main.html"
            }
        })
        .catch(() => {
            console.log("服务器错误!")
        })
    })
})(window, document);


