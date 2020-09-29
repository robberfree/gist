//使IE和Firefox快速支持scrollIntoViewIfNeeded的一种简单写法
function scrollIntoViewIfNeeded(element) {
  try {
    element.scrollIntoViewIfNeeded();
  } catch (error) {
    var st = document.documentElement.scrollTop;
    var sl = document.documentElement.scrollLeft;

    element.scrollIntoView();

    document.documentElement.scrollTop = st;
    document.documentElement.scrollLeft = sl;
  }
}
