export default function createBus() {
  const events = Object.create(null);

  function on(event, callback) {
    (events[event] ||= []).push(callback);
    return () => off(event, callback); // 直接返回取消函数
  }

  function off(event, callback) {
    if (!events[event]) return;

    if (!callback) {
      delete events[event];
      return;
    }

    events[event] = events[event].filter((cb) => cb !== callback);
    if (events[event].length === 0) delete events[event];
  }

  function once(event, callback) {
    const wrapper = (...args) => {
      callback(...args);
      off(event, wrapper);
    };
    on(event, wrapper);
  }

  function emit(event, ...args) {
    if (!events[event]) return;

    // 拷贝一份，防止回调里 off 自己
    [...events[event]].forEach((cb) => {
      try {
        cb(...args);
      } catch (e) {
        console.error(`[bus:${event}]`, e);
      }
    });
  }

  return { on, off, once, emit };
}
