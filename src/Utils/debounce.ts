export function debounce<FunctionArgs>(fn: (...args: FunctionArgs[]) => unknown, delay: number) {
  let timeout: NodeJS.Timeout;
  return (...args: FunctionArgs[]) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(() => fn(...args), delay);
  };
}
