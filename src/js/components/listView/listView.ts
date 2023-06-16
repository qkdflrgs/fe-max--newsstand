import { createElement } from '../../utils.ts';
import { ListViewProps } from '../../type.ts';
import { store } from '../../store/store.ts';
import {
  selectEconomyAction,
  selectBroadcastingAction,
  selectItAction,
  selectEngAction,
  selectSportsAction,
  selectMagazineAction,
  selectLocalAction,
} from '../../action.ts';

const ListViewProps = {
  category: ['종합/경제', '방송/통신', 'IT', '영자지', '스포츠/연예', '매거진/전문지', '지역'],
  numberOfListContents: 6,
};

export class ListView {
  private props: ListViewProps;
  private element: HTMLElement;

  constructor() {
    this.props = ListViewProps;
    this.element = createElement('div', { class: 'list-view' });
  }

  render() {
    this.element.innerHTML = '';
    const mainContents = document.querySelector('.main-wrap');
    this.createListTap();
    this.createListMain();
    mainContents?.append(this.element);
    this.setEvent();
  }

  createListTap() {
    const state = store.getState();
    const listTap = createElement('div', { class: 'list-tap' });

    for (let i = 0; i < this.props.category.length; i++) {
      const categoryBtn = createElement('button', { class: 'list-tap__category' });
      const categoryName = createElement('span');

      if (state.curCategory === this.props.category[i]) categoryBtn.classList.add('active-tap');
      categoryName.textContent = this.props.category[i];
      categoryBtn.append(categoryName);
      listTap.append(categoryBtn);
    }

    this.element.append(listTap);
  }

  createListMain() {
    const listMain = createElement('div', { class: 'list-main' });

    listMain.append(this.createListHeader());
    listMain.append(this.createListContents());
    this.element.append(listMain);
  }

  createListHeader() {
    const headerWrap = createElement('div', { class: 'list-header' });
    const header = createElement('a', { class: 'header-wrap' });
    const headerImg = createElement('img', { class: 'list-header__img' });
    const editTime = createElement('span', { class: 'list-header__editTime' });
    const subscribeBtn = createElement('button', { class: 'subscribe-btn' });
    const subscribeBtnImg = createElement('img', { src: './src/asset/icon/Symbol.svg', alt: '구독하기' });
    const subscribeBtnText = createElement('span');

    subscribeBtnText.textContent = '구독하기';
    header.append(headerImg);
    subscribeBtn.append(subscribeBtnImg, subscribeBtnText);
    headerWrap.append(header, editTime, subscribeBtn);

    return headerWrap;
  }

  createListContents() {
    const contentsWrap = createElement('div', { class: 'list-contents' });
    const leftContents = createElement('a', { class: 'list-contents__left' });
    const rightContents = createElement('div', { class: 'list-contents__right' });
    const thumbnailImg = createElement('img', { class: 'contents-thumbnail__img' });
    const thumbnailTitle = createElement('p', { class: 'contents-thumbnail__title' });
    const contentsList = createElement('ul');
    const editComment = createElement('span', { class: 'contents-news__edit' });

    for (let i = 0; i < this.props.numberOfListContents; i++) {
      const listWrap = createElement('li', { class: 'contents-news__list' });
      const list = createElement('a');

      listWrap.append(list);
      contentsList.append(listWrap);
    }

    contentsList.append(editComment);
    leftContents.append(thumbnailImg, thumbnailTitle);
    rightContents.append(contentsList);
    contentsWrap.append(leftContents, rightContents);

    return contentsWrap;
  }

  clickCategoryBtn(e: Event) {
    const clickedBtn = e.currentTarget as HTMLElement;
    const categoryBtns = document.querySelectorAll('.list-tap__category');

    if (!clickedBtn.classList.contains('active-tap')) {
      categoryBtns.forEach(categoryBtn => {
        categoryBtn.classList.remove('active-tap');
      });
      clickedBtn.classList.add('active-tap');
    }

    switch (clickedBtn.textContent) {
      case '종합/경제':
        store.dispatch(selectEconomyAction);
        break;
      case '방송/통신':
        store.dispatch(selectBroadcastingAction);
        break;
      case 'IT':
        store.dispatch(selectItAction);
        break;
      case '영자지':
        store.dispatch(selectEngAction);
        break;
      case '스포츠/연예':
        store.dispatch(selectSportsAction);
        break;
      case '매거진/전문지':
        store.dispatch(selectMagazineAction);
        break;
      case '지역':
        store.dispatch(selectLocalAction);
        break;
    }
  }

  clickSubscribeBtn() {}

  setEvent() {
    const categoryBtns = document.querySelectorAll('.list-tap__category');
    const subscribeBtn = document.querySelector('.subscribe-btn');

    categoryBtns.forEach(categoryBtn => {
      categoryBtn?.addEventListener('click', this.clickCategoryBtn);
    });

    subscribeBtn?.addEventListener('click', this.clickSubscribeBtn);
  }
}
