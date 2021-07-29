window.addEventListener('load', function(){
    var focus = document.querySelector('.focus');
    var ul = focus.children[0];
    var w = focus.offsetWidth;

    //定时器动画
    var index = 0;
    var timer = setInterval(function(){
        index++;
        var x = -index * w;
        //移动端不考虑兼容性问题，因此可直接使用css3的动画
        ul.style.transform = 'translateX(' + x + 'px)';
        ul.style.transition = 'all 0.5s';
    }, 2000);

    //监听过渡完成事件
    ul.addEventListener('transitionend', function(){
        //无缝滚动
        console.log(index);
        //由于定时器中的index++一直在执行，而切换页面会导致transitionend无法触发，因此index无法变为0，产生超出3的index值
        if(index >= ul.children.length - 2){ 
            index = 0;
            ul.style.transition = 'none'; //去除过渡，使最后一张图瞬间跳到第一张
            var x = -index * w;
            ul.style.transform = 'translateX(' + x + 'px)';
        }else if(index < 0){
            index = ul.children.length - 3;
            ul.style.transition = 'none';
            var x = -index * w;
            ul.style.transform = 'translateX(' + x + 'px)';
        }

        //小圆点变化
        var ol = focus.children[1];
        ol.querySelector('.current').classList.remove('current');
        ol.children[index].classList.add('current');
    })

    var startX = 0;
    var moveX = 0;
    var flag = 0;
    ul.addEventListener('touchstart', function(e){
        startX = e.targetTouches[0].pageX;
        clearInterval(timer);
    })
    ul.addEventListener('touchmove', function(e){
        moveX = e.targetTouches[0].pageX - startX;
        var x = -index * w + moveX;
        ul.style.transition = 'none';
        ul.style.transform = 'translateX(' + x + 'px)';
        flag = 1; // 若手指移动过再去进行判断，否则就不进行判断
        e.preventDefault(); // 阻止滚动屏幕的行为
    })
    ul.addEventListener('touchend', function(e){
        if(flag){

            //拖动距离大于50px播放下一张，否则回弹
            if(Math.abs(moveX) > 50){
                //手指右滑，播放上一张，moveX为正值
                if(moveX > 0){
                    index--;
                }else{
                    //手指左滑，播放下一张，moveX为负值
                    index++;
                }
                var x = -index * w;
                ul.style.transition = 'all 0.3s';
                ul.style.transform = 'translateX(' + x + 'px)';
            }else{
                var x = -index * w;
                ul.style.transition = 'all 0.3s';
                ul.style.transform = 'translateX(' + x + 'px)';
            }
        }
        
        clearInterval(timer);
        timer = setInterval(function(){
            index++;
            var x = -index * w;
            //移动端不考虑兼容性问题，因此可直接使用css3的动画
            ul.style.transform = 'translateX(' + x + 'px)';
            ul.style.transition = 'all 0.5s';
        }, 2000);
    })

    var goback = document.querySelector('.goback');
    var nav = document.querySelector('.nav');
    window.addEventListener('scroll', function(){
        if(window.pageYOffset >= nav.offsetTop){
            goback.style.display = 'block';
        }else{
            goback.style.display = 'none';
        }
    })
    goback.addEventListener('click', function(){
        window.scroll(0, 0);
    })
})