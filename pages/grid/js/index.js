(function () {
    const buttonList = document.querySelectorAll('.t__button');
    console.log(buttonList);
    // 绑定事件
    for (let i = 0; i < buttonList.length; i++) {
        buttonList[i].addEventListener('click', function (e) {
            clearAcitve()
            e.target.classList.add('t__button--active')
        });
    }
    // 清除active类
    function clearAcitve() {
        buttonList.forEach(dom => { dom.classList.remove('t__button--active') })
    }
}())