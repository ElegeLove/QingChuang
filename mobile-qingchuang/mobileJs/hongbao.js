(function () {
    /* 定义动画中要使用的叶数 */
    var NUMBER_OF_LEAVES = 8;

    /*
     当“落叶”页面完全加载时调用.
     */
    function init() {
        /* 获取对将包含叶的元素的引用 */
        var container = document.getElementById('petalbox');



        /* 把空容器装满新叶子 */
        try {
            for (var i = 0; i < NUMBER_OF_LEAVES; i++) {
                container.appendChild(createALeaf());
                container.appendChild(createALeaf());
            }
        } catch (e) {}
        // var element = document.getSelection('#petalbox img');
        // element.addEventListener("transitionend", showMessage, false);
        // element.
        // console.log($('#petalbox img'));
        // $('#petalbox img').bind('transitionend',function () {
        //     console.log(1211)
        // })
        // $('#petalbox img').on('transitionend',function(){
        //     console.log('Transition 已完成');
        // })
        // showMessage()

    }
    // for (let i = 0; i < $('#petalbox img').length; i++) {
        // $('#petalbox>div').bind('transitionend', function () {
        //     console.log(1211)
        // })
    // }

    // function showMessage() {

    //     console.log('Transition 已完成');

    // }
    /*
     接收范围中的最低值和最高值
     返回该范围内的随机整数。
     */
    function randomInteger(low, high) {
        return low + Math.floor(Math.random() * (high - low));
    }

    /*
     接收范围中的最低值和最高值
     返回该范围内的随机浮点数
     */
    function randomFloat(low, high) {
        return low + Math.random() * (high - low);
    }

    /*
     接收一个数字并返回其CSS像素值.
     */
    function pixelValue(value) {
        return value + 'px';
    }

    /*
     返回下落动画的持续时间值.
     */
    function durationValue(value) {
        return value + 's';
    }

    /*
         使用img元素创建每个叶。”css“实现两个旋转树叶的动画：顺时针旋转和逆时针旋转和翻转。这个

        函数确定哪些旋转动画应应用于每个叶.

         */
    function createALeaf() {
        /* 首先创建一个包装div和一个空的img元素 */
        var leafDiv = document.createElement('div');
        var image = document.createElement('img');

        /* 随机选择一个叶子图像并将其分配给新创建的元素 */
        image.src = 'mobileImg/icon_hongbaoyu.png';

        /* 沿屏幕随机放置叶子 */
        leafDiv.style.top = pixelValue(randomInteger(-200, -100));
        leafDiv.style.left = pixelValue(randomInteger(0, 1920));

        /* 随机选择旋转动画 */
        var spinAnimationName = (Math.random() < 0.5) ? 'clockwiseSpin' : 'counterclockwiseSpinAndFlip'; /* Set the -webkit-animation-name property with these values */
        leafDiv.style.webkitAnimationName = 'fade, drop';
        leafDiv.style.animationName = 'fade, drop';
        image.style.webkitAnimationName = spinAnimationName;
        image.style.animationName = spinAnimationName;

        /* 随机下落时间 */
        var fadeAndDropDuration = durationValue(randomFloat(1, 4));

        /* 随机旋转时间 */
        var spinDuration = durationValue(randomFloat(3, 4));

        leafDiv.style.webkitAnimationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;
        leafDiv.style.animationDuration = fadeAndDropDuration + ', ' + fadeAndDropDuration;
        leafDiv.addEventListener('transitionend', handle, false);
        // 随机delay时间
        var leafDelay = durationValue(randomFloat(0, 2));

        leafDiv.style.webkitAnimationDelay = leafDelay + ', ' + leafDelay;
        leafDiv.style.animationDelay = leafDelay + ', ' + leafDelay;
        image.style.webkitAnimationDuration = spinDuration;
        image.style.animationDuration = spinDuration;
        leafDiv.appendChild(image);
        return leafDiv;
    }
    function handle() {
       console.log(213212)
    }
    // init();
    setInterval(function () {
        init()
    }, 500);

})();