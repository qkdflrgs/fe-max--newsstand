import { createElement } from '../utils.ts';

interface RollingNewsProps {
  leftPress: string;
  rightPress: string;
  leftArticle: string;
  rightArticle: string;
}

export class RollingNews {
  private props: RollingNewsProps;
  private element: HTMLElement;
  private rollingNewsWrap: HTMLElement;
  private rollingNews: HTMLElement;
  private press: HTMLElement;
  private article: HTMLElement;

  constructor(props: RollingNewsProps) {
    this.props = props;
    this.element = createElement('main', { class: 'main' });
    this.rollingNewsWrap = createElement('section', { class: 'rolling-news' });
    this.rollingNews = createElement('div', { class: 'news-bar' });
    this.press = createElement('a', { class: 'news-bar__press', href: '#' });
    this.article = createElement('a', { class: 'news-bar__article', href: '#' });
    this.render();
  }

  render() {
    const app = document.querySelector('.app');

    this.rollingNewsWrap.append(this.createLeftRolling(), this.createRightRolling());
    this.element.append(this.rollingNewsWrap);
    app?.append(this.element);
  }

  createLeftRolling(): HTMLElement {
    this.press.textContent = this.props.leftPress;
    this.article.textContent = this.props.leftArticle;
    this.rollingNews.append(this.press, this.article);

    return this.rollingNews;
  }

  createRightRolling(): HTMLElement {
    this.press.textContent = this.props.rightPress;
    this.article.textContent = this.props.rightArticle;
    this.rollingNews.append(this.press, this.article);

    return this.rollingNews;
  }
}
