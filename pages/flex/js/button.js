(function () {
  const domList = document.querySelectorAll(".t__button");
  domList.forEach((dom) => {
    const { paddingLeft } = getComputedStyle(dom);
    const padding = parseFloat(paddingLeft) || 0;
    if (dom.scrollWidth > dom.offsetWidth) {
      dom.style.fontSize = `${
        ((dom.offsetWidth - padding * 30) / dom.scrollWidth) * 14
      }px`;
    }
  });
})();
