import { createElement } from '../utils.ts';
import { RollingNewsProps } from '../type.ts';

export class RollingNews {
  private props: RollingNewsProps;
  private element: HTMLElement;

  constructor(props: RollingNewsProps) {
    this.props = props;
    this.element = createElement('main', { class: 'main' });
    this.render();
  }

  render() {
    const app: HTMLElement | null = document.querySelector('.app');
    const rollingNewsWrap: HTMLElement = createElement('section', { class: 'rolling-news' });

    rollingNewsWrap.append(this.createLeftRolling(), this.createRightRolling());
    this.element.append(rollingNewsWrap);
    app?.append(this.element);
  }

  createLeftRolling(): HTMLElement {
    const rollingNews: HTMLElement = createElement('div', { class: 'news-bar' });
    const press: HTMLElement = createElement('a', { class: 'news-bar__press', href: '#' });
    const article: HTMLElement = createElement('a', { class: 'news-bar__article', href: '#' });

    press.textContent = this.props.leftPress;
    article.textContent = this.props.leftArticle;
    rollingNews.append(press, article);

    return rollingNews;
  }

  createRightRolling(): HTMLElement {
    const rollingNews: HTMLElement = createElement('div', { class: 'news-bar' });
    const press: HTMLElement = createElement('a', { class: 'news-bar__press', href: '#' });
    const article: HTMLElement = createElement('a', { class: 'news-bar__article', href: '#' });

    press.textContent = this.props.leftPress;
    article.textContent = this.props.leftArticle;
    rollingNews.append(press, article);

    return rollingNews;
  }
}
