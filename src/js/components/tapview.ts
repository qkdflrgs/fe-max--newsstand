import { createElement } from '../utils.ts';
import { TapviewProps } from '../type.ts';

export class Tapview {
  private props: TapviewProps;
  private element: HTMLElement;
  private newsMain: HTMLElement;
  private tapBtnWrap: HTMLElement;
  private allBtn: HTMLElement;
  private subscribeBtn: HTMLElement;
  private viewBtnWrap: HTMLElement;
  private listBtn: HTMLElement;
  private gridBtn: HTMLElement;
  private listImg: HTMLElement;
  private gridImg: HTMLElement;

  constructor(props: TapviewProps) {
    this.props = props;
    this.element = createElement('div', { class: 'tap-view' });
    this.newsMain = createElement('section', { class: 'news-main' });
    this.tapBtnWrap = createElement('div', { class: 'tap-btns' });
    this.allBtn = createElement('button', { class: 'tap-btns__all' });
    this.subscribeBtn = createElement('button', { class: 'tap-btns__subscribe' });
    this.viewBtnWrap = createElement('div', { class: 'view-btns' });
    this.listBtn = createElement('button', { class: 'view-btns__list' });
    this.gridBtn = createElement('button', { class: 'view-btns__grid' });
    this.listImg = createElement('img', { src: './src/asset/icon/name=list-view.svg' });
    this.gridImg = createElement('img', { src: './src/asset/icon/name=grid-view-active.svg' });
    this.render();
  }

  render() {
    const main = document.querySelector('.main');

    this.element.append(this.createTapBtns());
    this.element.append(this.createViewBtns());
    this.newsMain.append(this.element);
    main?.append(this.newsMain);
  }

  createTapBtns() {
    this.allBtn.textContent = this.props.allBtn;
    this.subscribeBtn.textContent = this.props.subscribeBtn;
    this.tapBtnWrap.append(this.allBtn, this.subscribeBtn);

    return this.tapBtnWrap;
  }

  createViewBtns() {
    this.listBtn.append(this.listImg);
    this.gridBtn.append(this.gridImg);
    this.viewBtnWrap.append(this.listBtn, this.gridBtn);

    return this.viewBtnWrap;
  }
}
