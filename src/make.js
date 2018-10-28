function make(...theArgs) {
  let callbacks = Array.from(theArgs);
  let tmp = [];
  return function inner(...args) {
    for (let i = 0; i < args.length; i += 1) {
      if (typeof args[i] !== 'function') {
        tmp = Array.from(args);
        callbacks = callbacks.concat(tmp);
        return inner;
      } return callbacks.reduce((a, b) => (args[i](a, b)));
    }
  };
}
