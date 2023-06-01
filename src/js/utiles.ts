export const systemTimeOption = new Date().toLocaleDateString('ko-KR', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  weekday: 'long',
});

export const createElement = (tagName: string, className?: string): HTMLElement => {
  const element = document.createElement(tagName);
  if (className) {
    element.className = className;
  }
  return element;
};
