export function keyDebounce(callback, delayInMilliSeconds) {
  let timeoutID;
  return (...args) => {
    clearTimeout(timeoutID);
    timeoutID = setTimeout(() => callback(...args), delayInMilliSeconds);
  };
}
