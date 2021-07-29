
// 案例_jquery全选
$(function(){
    
    $(".checkall").change(function(){
        $(".j-checkbox, .checkall").prop("checked", $(this).prop("checked"));
        // $(".checkall").prop("checked", $(this).prop("checked"));

        if($(this).prop("checked")){
            $(".shopcar_item").addClass("check_item");
        }else{
            $(".shopcar_item").removeClass("check_item");
        }
    })

    $(".j-checkbox").change(function(){
        // :checked选择器 查找被选中的表单元素
        console.log($(".j-checkbox:checked"));

        if($(".j-checkbox:checked").length == $(".j-checkbox").length){
            $(".checkall").prop("checked", true);
        }else{
            $(".checkall").prop("checked", false);
        }


        if($(this).prop("checked")){
            $(this).parents(".shopcar_item").addClass("check_item");
        }else{
            $(this).parents(".shopcar_item").removeClass("check_item");
        }
    })
})

// 案例_jquery内容文本值
$(function(){

    // 点击加号
    $(".add").click(function(){
        var n = $(this).siblings("input").val();
        n++;
        $(this).siblings("input").val(n);

        // substr()字符串截取   toFixed(保留的小数个数)
        var p = $(this).parent().siblings(".item_price").text();
        p = p.substr(1);
        p = (p * n).toFixed(2);
        $(this).parent().siblings(".item_sum").text("￥"+ p);

        getSum();
    })

    // 点击减号
    $(".reduce").click(function(){
        var n = $(this).siblings("input").val();
        if(n <= 1){
            return false; //下面的代码将不会再执行
        }
        n--;
        $(this).siblings("input").val(n);

        // substr()字符串截取   toFixed(保留的小数个数)
        var p = $(this).parent().siblings(".item_price").text();
        p = p.substr(1);
        p = (p * n).toFixed(2);
        $(this).parent().siblings(".item_sum").text("￥"+ p);

        getSum();
    })

    // 直接修改文本框数量
    $(".item_num input").change(function(){
        var n = $(this).val();
        var p = $(this).parent().siblings(".item_price").text();
        p = p.substr(1);
        p = (p * n).toFixed(2);
        $(this).parent().siblings(".item_sum").text("￥"+ p);

        getSum();
    })

    getSum();
    function getSum() {
        var count = 0;
        var money = 0;
        $(".item_num input").each(function(i, e){
            count += parseInt($(e).val());
        })
        $(".sum_count").text(count);

        $(".item_sum").each(function(i, e){
            money += parseFloat($(e).text().substr(1));
            // console.log(parseFloat($(e).text().substr(1)));
        })
        $(".sum_money").text("￥" + money.toFixed(2));

    }


    // 案例_jquery删除元素
    // 单项删除
    $(".item_action a").click(function(){
        $(this).parents(".shopcar_item").remove();
        getSum();
    })

    // 勾选删除
    $(".del_check").click(function(){
        $(".j-checkbox:checked").parents(".shopcar_item").remove();
        getSum();
    })

    // 清空
    $(".empty").click(function(){
        $(".shopcar_item").remove();
        getSum();
    })

})
