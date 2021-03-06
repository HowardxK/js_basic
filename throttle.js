function throttle(func, timeout = 250) {
  let last;
  let timer;
 
  return function () {
    const context = this;
    const args = arguments;
    const now = +new Date();
 
    if (last && now < last + timeout) {
      clearTimeout(timer)
      timer = setTimeout(function () {
        last = now
        func.apply(context, args)
      }, timeout)
    } else {
      last = now
      func.apply(context, args)
    }
  }
}