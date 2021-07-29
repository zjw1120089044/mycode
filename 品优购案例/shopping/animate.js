//减速运动
function animate_slow(obj, target, callback){
    clearInterval(obj.timer);
    obj.timer = setInterval(function(){
        var step = (target - obj.offsetLeft) / 10; 
        step = step > 0 ? Math.ceil(step) : Math.floor(step); //向上或向下取整，防止最后step变为无穷小
        if(obj.offsetLeft == target){
            // obj.innerHTML = '到达了' + target + 'px';
            clearInterval(obj.timer);
            
            if(callback){
                // alert('执行回调函数');
                callback();
            }

        }else{
            obj.style.left = obj.offsetLeft + step + 'px';
        }
    }, 30);
}