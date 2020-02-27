$(document).ready(function () {
    $('a').click(
        function () {
            $('img').eq($(this).index()).css({'opacity': '1'}).siblings().css({'opacity': '0'});
        }
    );
    //opacity 当前图片透明度 1  兄弟元素透明度 0

    // js 原生的实现方式
    // var alinks = $('a');
    // for (var i = alinks.length - 1; i >= 0; i--) {
    // 	alinks[i].style.background = 'red';
    // 	alinks[i].style.border = '5px solid yellow';
    // 	alinks[i].style.color = '#fff';
    // 	alinks.eq(i).css({
    // 		'background': 'red',
    // 		'border': '5px solid yellow',
    // 		'color': '#fff'
    // 	}).html('<i>七彩云南' + i + '</i>')
    // 	.text('云南旅游' + i);
    // }
});


// 1 首先建立一个就绪函数ready函数，把所有的jQuery内容都写到这个函数中。
// 2、选中按钮元素并绑定单击事件
//
// 3、选中img图片，通过eq（）方法找到对应的图片元素
//
// 4、其中eq（）的参数通过$(this).index（）方式获取当前的索引。
//
// 5、通过css（）方法对图片的透明度设置为1来显示。
//
// 6、再通过siblings（）找到当前选中按钮的兄弟元素，并通过css（）设置透明度为0。