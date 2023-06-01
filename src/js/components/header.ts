import { createElement } from '../utils.ts';
import { HeaderProps } from '../type.ts';

export class Header {
  private props: HeaderProps;
  private element: HTMLElement;
  private titleWrap: HTMLElement;
  private titleImg: HTMLElement;
  private title: HTMLElement;
  private date: HTMLElement;

  constructor(props: HeaderProps) {
    this.props = props;
    this.element = createElement('header', { class: 'header' });
    this.titleWrap = createElement('a', { class: 'header-title', href: 'index.html' });
    this.titleImg = createElement('img', { class: 'header-title__img', src: './src/asset/icon/name=newspaper.svg' });
    this.title = createElement('h1', { class: 'header-title__text' });
    this.date = createElement('span', { class: 'header-date' });
    this.render();
  }

  render() {
    const app = document.querySelector('.app');

    this.element.append(this.createTitle(), this.createDate());
    app?.append(this.element);
  }

  createTitle() {
    this.title.textContent = this.props.title;
    this.titleWrap.append(this.titleImg, this.title);

    return this.titleWrap;
  }

  createDate() {
    this.date.textContent = this.props.date;

    return this.date;
  }
}
