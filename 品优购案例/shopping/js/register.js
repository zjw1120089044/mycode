window.addEventListener('load', function(){
    var reg_tel = /^1[3-9]\d{9}$/
    var tel = document.querySelector('#tel');
    var con_tel = '<i class="error_icon"></i>手机号格式不正确';
    regexp(tel, reg_tel, con_tel);
    

    function regexp(ele, reg, val){
        ele.addEventListener('blur', function(){
            if(reg.test(this.value)){
                this.nextElementSibling.className = 'success';
                this.nextElementSibling.innerHTML = '<i class="success_icon"></i>输入正确';
            }else{
                this.nextElementSibling.className = 'error';
                this.nextElementSibling.innerHTML = val;
            }
        })
    }

    var reg_qq = /^[1-9]\d{4,}$/
    var qq = document.querySelector('#qq');
    var con_qq = '<i class="error_icon"></i>QQ号格式不正确';
    regexp(qq, reg_qq, con_qq);

    var reg_uname = /^[\u4e00-\u9fa5]{2,}$/
    var uname = document.querySelector('#uname');
    var con_uname = '<i class="error_icon"></i>昵称格式不正确';
    regexp(uname, reg_uname, con_uname);

    var reg_message = /^\d{6}$/
    var message = document.querySelector('#message');
    var con_message = '<i class="error_icon"></i>验证码错误';
    regexp(message, reg_message, con_message);

    var reg_pwd = /^[A-Za-z0-9_-]{6,18}$/
    var pwd = document.querySelector('#pwd');
    var con_pwd = '<i class="error_icon"></i>密码格式错误';
    regexp(pwd, reg_pwd, con_pwd);
    

    var checkpwd = document.querySelector('#checkpwd');
    checkpwd.addEventListener('blur',function(){
        if(this.value == pwd.value){
            this.nextElementSibling.className = 'success';
            this.nextElementSibling.innerHTML = '<i class="success_icon"></i>输入正确';
        }else{
            this.nextElementSibling.className = 'error';
            this.nextElementSibling.innerHTML = '<i class="error_icon"></i>密码不一致';
        }
    })
})