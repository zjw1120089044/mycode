window.addEventListener('load', function(){

    // 显示时间
    (function(){
        var nowTime = document.querySelector('.nowTime');
        setInterval(function(){
            var date = new Date();
            var y = date.getFullYear();
            var m = date.getMonth() + 1;
            var d = date.getDate();
            var h = date.getHours();
            var mm = date.getMinutes();
            mm = mm < 10 ? '0'+mm : mm;
            var s = date.getSeconds();
            s = s < 10 ? '0'+s : s;
            nowTime.innerHTML = '当前时间：'+y+'年'+m+'月'+d+'日 <p>'+h+':'+mm+':'+ s +'</span>';
        }, 100);
    })();


    // 监控区
    (function(){
        $('.monitor .tabs').on('click', 'a', function(e){
            console.log(this);
            console.log(e.target);
            $(this).addClass('active').siblings('a').removeClass('active');
            $('.monitor .content').eq($(this).index()).show().siblings('.content').hide();
        })

        $('.marquee').each(function(){
            var rows = $(this).children().clone();
            $(this).append(rows);
        })
    })();



    // 饼图
    (function(){
        var pie = echarts.init(document.querySelector('.pie'));
        var option = {
            tooltip: {
                trigger: 'item',
                formatter: '{a} <br/>{b} : {c} ({d}%)'
            },
            color: [
                "#006cff",
                "#60cda0",
                "#ed8884",
                "#ff9f7f",
                "#0096ff",
                "#9fe6b8",
                "#32c5e9",
                "#1d9dff"
              ],
            series: [
                {
                    name: '点位统计',
                    type: 'pie',
                    radius: ['18%', '70%'],
                    center: ['50%', '50%'],
                    roseType: 'radius',
                    itemStyle: {
                        borderRadius: 1
                    },
                    data: [
                        { value: 20, name: "云南" },
                        { value: 26, name: "北京" },
                        { value: 24, name: "山东" },
                        { value: 25, name: "河北" },
                        { value: 20, name: "江苏" },
                        { value: 25, name: "浙江" },
                        { value: 30, name: "四川" },
                        { value: 42, name: "湖北" }
                    ],
                    label: {
                        fontSize: 10
                    },
                    labelLine: {
                        length: 5,
                        length2: 4
                    }
                }
            ]
        };
        pie.setOption(option);
        // 浏览器缩放时，图表也等比例缩放
        window.addEventListener('resize', function(){
            pie.resize();
        })
    })();



    // 柱形图
    (function(){
        var item = {
            name: '',
            value: 1200,
            itemStyle: {
                color: '#254065'
            },
            emphasis: {
                itemStyle: {
                    color: '#254065'
                }
            },
            tooltip: {
                extraCssText: 'opacity: 0'
            }
        };
        var bar = echarts.init(document.querySelector('.bar'));
        var option = {
            color: new echarts.graphic.LinearGradient(
                // (x1,y2)到(x2,y2)之间进行渐变
                0,0,0,1,
                [
                    {offset: 0, color: '#00fffb'},  //起始颜色
                    {offset: 1, color: '#0061ce'}   //结束颜色
                ]
            ),
            tooltip: {
                trigger: 'item',
                
            },
            grid: {
                left: '0%',
                top: '3%',
                right: '1%',
                bottom: '3%',
                containLabel: true,
                show: true,
                borderColor: 'rgba(0, 240, 255, 0.3)'
            },
            xAxis: [
                {
                    type: 'category',
                    data: [
                        "上海",
                        "广州",
                        "北京",
                        "深圳",
                        "合肥",
                        "",
                        "......",
                        "",
                        "杭州",
                        "厦门",
                        "济南",
                        "成都",
                        "重庆"
                      ],
                    axisTick: {
                        alignWithLabel: true,
                        show: false
                    },
                    axisLabel: {
                        color: '#4c9bfd'
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, 0.3)'
                        }
                    },
                    nameTextStyle: {
                        fontSize: 12
                    }
                }
            ],
            yAxis: [
                {
                    type: 'value',
                    axisTick: {
                        alignWithLabel: true,
                        show: false
                    },
                    axisLabel: {
                        color: '#4c9bfd'
                    },
                    axisLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, 0.3)'
                        }
                    },
                    splitLine: {
                        lineStyle: {
                            color: 'rgba(0, 240, 255, 0.3)'
                        }
                    }
                }
            ],
            series: [
                {
                    name: '直接访问',
                    type: 'bar',
                    barWidth: '60%',
                    data: [
                        2100,
                        1900,
                        1700,
                        1560,
                        1400,
                        item,
                        item,
                        item,
                        900,
                        750,
                        600,
                        480,
                        240
                    ]
                }
            ]
        };
        bar.setOption(option);
        window.addEventListener('resize', function(){
            bar.resize();
        })
    })();

    // 订单量
    (function(){
        var txt1 = $('.order .data .item:first-child h4');
        var txt2 = $('.order .data .item:last-child h4');
        $('.filter').on('click', 'a', function(){
            $(this).addClass('active').siblings('a').removeClass('active');

            index = $(this).index();
            switch(index){
                case 0: 
                    txt1.html('20,301,987');
                    txt2.html('99834');
                    break;
                case 1:
                    txt1.html('18,255,351');
                    txt2.html('55321');
                    break;
                case 2:
                    txt1.html('10,501,475');
                    txt2.html('22187');
                    break;
                case 3:
                    txt1.html('8,352,724');
                    txt2.html('10341');
                    break;
            }
        })
        var index = 0;
        setInterval(function(){
            index++;
            if(index >= 4){
                index = 0
            }
            
            $('.filter a').eq(index).click();

        }, 1000);
            
    })();

    // 销售统计
    (function(){
        var data = {
            year: [
              [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
              [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
            ],
            quarter: [
              [23, 75, 12, 97, 21, 67, 98, 21, 43, 64, 76, 38],
              [43, 31, 65, 23, 78, 21, 82, 64, 43, 60, 19, 34]
            ],
            month: [
              [34, 87, 32, 76, 98, 12, 32, 87, 39, 36, 29, 36],
              [56, 43, 98, 21, 56, 87, 43, 12, 43, 54, 12, 98]
            ],
            week: [
              [43, 73, 62, 54, 91, 54, 84, 43, 86, 43, 54, 53],
              [32, 54, 34, 87, 32, 45, 62, 68, 93, 54, 54, 24]
            ]
          };
        var line = echarts.init(document.querySelector('.line'));
        var option = {
            tooltip: {
                trigger: 'axis'
            },
            color: ['#00f2f1', '#ed3f35'],
            legend: {
                right: '10%',
                textStyle: {
                    color: '#4c9bfd'
                },
                // data: ['预销售额', '实际销售额']
            },
            grid: {
                top: '20%',
                left: '3%',
                right: '4%',
                bottom: '3%',
                show: true,
                borderColor: '#012f4a',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#4c9bfd'
                },
                axisLine: {
                    show: false
                }
            },
            yAxis: {
                type: 'value',
                axisTick: {
                    show: false
                },
                axisLabel: {
                    color: '#4c9bfd'
                },
                splitLine: {
                    lineStyle: {
                        color: '#012f4a'
                    }
                }
            },
            series: [
                {
                    name: '预销售额',
                    type: 'line',
                    stack: '总量',
                    smooth: true,
                    data: data.year[0]
                },
                {
                    name: '实际销售额',
                    type: 'line',
                    stack: '总量',
                    smooth: true,
                    data: data.year[1]
                }
            ]
        };
        line.setOption(option);

        $('.sales .caption').on('click', 'a', function(){
            $(this).addClass('active').siblings('a').removeClass('active');

            index = $(this).index() - 1;
            // index()获取的是所有类型孩子的索引

            var arr = data[this.dataset.type];
            option.series[0].data = arr[0];
            option.series[1].data = arr[1];

            line.setOption(option);
        })

        var links = $('.sales .caption a');
        
        var index = 0;
        var timer = setInterval(function(){
            index++;
            if(index >= 4){
                index = 0;
            }
            links.eq(index).click();
        }, 1000)

        $('.sales').hover(function(){
            clearInterval(timer);
        }, function(){
            clearInterval(timer);
            timer = setInterval(function(){
                index++;
                if(index >= 4){
                    index = 0;
                }
                links.eq(index).click();
            }, 1000)
        })


        window.addEventListener('resize', function(){
            line.resize();
        })
    })();
    


    // 渠道
    (function(){
        var radar = echarts.init(document.querySelector('.radar'));
        var option = {
            tooltip: {
                show: true,
                // position: ['40%', '30%']
            },
            radar: {
                indicator: [
                    { name: "机场", max: 100 },
                    { name: "商场", max: 100 },
                    { name: "火车站", max: 100 },
                    { name: "汽车站", max: 100 },
                    { name: "地铁", max: 100 }
                ],
                shape: 'circle',
                splitNumber: 4,
                radius: '50%',
                center: ['53%', '16%'],
                name: {
                    textStyle: {
                        color: '#4c9bfd'
                    }
                },
                splitLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                },
                splitArea: {
                    show: false
                },
                axisLine: {
                    lineStyle: {
                        color: 'rgba(255, 255, 255, 0.5)'
                    }
                }
            },
            series: [
                {
                    name: '北京',
                    type: 'radar',
                    lineStyle: {
                        normal: {
                            color: '#fff',
                            width: 1,
                            opacity: 0.5
                        }
                    },
                    data: [[90, 19, 56, 11, 34]],
                    symbol: 'circle',
                    symbolSize: 5,
                    itemStyle: {
                        color: '#4c9bfd'
                    },
                    label: {
                        show: true,
                        fontSize: 10
                    },
                    areaStyle: {
                        color: 'rgba(238, 197, 102, 0.6)'
                    }
                },
                
            ]
        };
        radar.setOption(option);
        window.addEventListener('resize', function(){
            radar.resize();
        })
    })();


    // 销售进度
    (function(){
        var gauge = echarts.init(document.querySelector('.gauge'));
        var option = {
            series: [
                {
                    name: '销售进度',
                    type: 'pie',
                    radius: ['130%', '150%'],
                    center: ['48%', '84%'],
                    startAngle: 180,
                    hoverOffset: 0,
                    labelLine: {
                        show: false
                    },
                    data: [
                        {
                            value: 100,
                            itemStyle: {
                                color: new echarts.graphic.LinearGradient(
                                    0,0,0,1,
                                    [
                                        {offset: 0, color: '#00c9e0'},
                                        {offset: 1, color: '#005fc1'}
                                    ]
                                )
                            }
                        },
                        {
                            value: 100,
                            itemStyle: {
                                color: '#12274d'
                            }
                        },
                        {
                            value: 200,
                            itemStyle: {
                                color: 'transparent'
                            }
                        }
                    ]
                }
            ]
        };
        gauge.setOption(option);
    })();


    // 全国热榜
    (function(){
        var hotData = [
            {
                city: "北京", // 城市
                sales: "25, 179", // 销售额
                flag: true, //  上升还是下降
                brands: [
                    //  品牌种类数据
                    { name: "可爱多", num: "9,086", flag: true },
                    { name: "娃哈哈", num: "8,341", flag: true },
                    { name: "喜之郎", num: "7,407", flag: false },
                    { name: "八喜", num: "6,080", flag: false },
                    { name: "小洋人", num: "6,724", flag: false },
                    { name: "好多鱼", num: "2,170", flag: true }
                ]
            },
            {
                city: "河北",
                sales: "23,252",
                flag: false,
                brands: [
                    { name: "可爱多", num: "3,457", flag: false },
                    { name: "娃哈哈", num: "2,124", flag: true },
                    { name: "喜之郎", num: "8,907", flag: false },
                    { name: "八喜", num: "6,080", flag: true },
                    { name: "小洋人", num: "1,724", flag: false },
                    { name: "好多鱼", num: "1,170", flag: false }
                ]
            },
            {
                city: "上海",
                sales: "20,760",
                flag: true,
                brands: [
                    { name: "可爱多", num: "2,345", flag: true },
                    { name: "娃哈哈", num: "7,109", flag: true },
                    { name: "喜之郎", num: "3,701", flag: false },
                    { name: "八喜", num: "6,080", flag: false },
                    { name: "小洋人", num: "2,724", flag: false },
                    { name: "好多鱼", num: "2,998", flag: true }
                ]
            },
            {
                city: "江苏",
                sales: "23,252",
                flag: false,
                brands: [
                    { name: "可爱多", num: "2,156", flag: false },
                    { name: "娃哈哈", num: "2,456", flag: true },
                    { name: "喜之郎", num: "9,737", flag: true },
                    { name: "八喜", num: "2,080", flag: true },
                    { name: "小洋人", num: "8,724", flag: true },
                    { name: "好多鱼", num: "1,770", flag: false }
                ]
            },
            {
                city: "山东",
                sales: "20,760",
                flag: true,
                brands: [
                    { name: "可爱多", num: "9,567", flag: true },
                    { name: "娃哈哈", num: "2,345", flag: false },
                    { name: "喜之郎", num: "9,037", flag: false },
                    { name: "八喜", num: "1,080", flag: true },
                    { name: "小洋人", num: "4,724", flag: false },
                    { name: "好多鱼", num: "9,999", flag: true }
                ]
            }
        ];

        var supHTML = '';
        $.each(hotData, function(index, item){
            supHTML += `<li><span>${item.city}</span><span>${item.sales} <s class="iconfont ${item.flag ? "icon-jiantoushangsheng" : "icon-jiantouxiajiang"}"></s></span></li>`;
        });
        $('.sup').html(supHTML);

        $('.province .sup').on('mouseenter', 'li', function(){
            $(this).addClass('active').siblings().removeClass();

            var subHTML = '';
            $.each(hotData[$(this).index()].brands, function(index, item){
                subHTML += `<li><span>${item.name}</span><span>${item.num} <s class="iconfont ${item.flag ? "icon-jiantoushangsheng" : "icon-jiantouxiajiang"}"></s></span></li>`;
            });
            $('.sub').html(subHTML);
            
            index = $(this).index();
        });

        // 默认选中第一个
        var lis = $('.province .sup li');
        lis.eq(0).mouseenter();

        var index = 0;
        var timer = setInterval(function(){
            index++;
            if(index >= 5) index = 0;
            // lis.eq(index).mouseenter();   //调用mouseenter也会触发hover ，导致定时器被清除
            lis.eq(index).addClass('active').siblings().removeClass();
            var subHTML = '';
            $.each(hotData[index].brands, function(index, item){
                subHTML += `<li><span>${item.name}</span><span>${item.num} <s class="iconfont ${item.flag ? "icon-jiantoushangsheng" : "icon-jiantouxiajiang"}"></s></span></li>`;
            });
            $('.sub').html(subHTML);
        }, 2000)

        $('.province .sup').hover(function(){
            clearInterval(timer);
        }, function(){
            clearInterval(timer);
            timer = setInterval(function(){
                index++;
                if(index >= 5) index = 0;
                // lis.eq(index).mouseenter();
                lis.eq(index).addClass('active').siblings().removeClass();
                var subHTML = '';
                $.each(hotData[index].brands, function(index, item){
                    subHTML += `<li><span>${item.name}</span><span>${item.num} <s class="iconfont ${item.flag ? "icon-jiantoushangsheng" : "icon-jiantouxiajiang"}"></s></span></li>`;
                });
                $('.sub').html(subHTML);
            }, 2000)
        })
    })();


})
