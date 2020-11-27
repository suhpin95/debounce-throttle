function dupDebounce(callback, delay) {
  let bounce
  return function () {
    const context = this;
    const args = arguments;
    clearTimeout(bounce);
    bounce = setTimeout(callback, delay);
  }
}
