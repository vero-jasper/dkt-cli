/**
 * 移动端字体自适应
 * @param {Number} baseWidth
 */
function fontAdapt(baseWidth = 3.75) {
  const docEl = document.documentElement;
  docEl.style.fontSize = `${docEl.clientWidth / baseWidth}px`;
}

window.addEventListener('resize', fontAdapt, false);

export default fontAdapt;
