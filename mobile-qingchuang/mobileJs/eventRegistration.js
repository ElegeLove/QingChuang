$(document).ready(function () {
    $('#footer').click(function () {
        // console.log(1212)
        layer.open({
            content: '您确定要刷新一下本页面吗？',
            btn: ['确定', '取消'],
            scrollbar: false,
            yes: function (index) {
                // location.reload();
                layer.close(index);
            },
            no: function () { //layer.alert('aaa',{title:'msg title'});  ////点击取消回调
                // layer.msg('bbb'); //layer.closeAll();
                // console.log(1212)
                location.reload();
            }
        });
        // layer.confirm('您是如何看待前端开发？', {
        //     btn: ['重要', '奇葩'] //按钮
        // }, function () {
        //     layer.msg('的确很重要', {
        //         icon: 1
        //     });
        // }, function () {
        //     layer.msg('也可以这样', {
        //         time: 20000, //20s后自动关闭
        //         btn: ['明白了', '知道了']
        //     });
        // });
    })
});