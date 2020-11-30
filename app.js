function debounce(callback, delay) {
  let bounce
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(bounce);
    bounce = setTimeout(() => callback.apply(context, args), delay);
  }
}
function throttle(callback, delay) {
  //the function needs to be executed after a certain delay
  let isWait = false;
  return function () {
    if (!isWait) {
      callback();
      isWait = true;
      setTimeout(() => isWait = false, delay);
    }
  }

}
