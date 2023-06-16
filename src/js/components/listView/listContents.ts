import fetchedData from '../../../../db.json';
import { ListContentsProps } from '../../type.ts';
import { store } from '../../store/store.ts';

const ListContentsProps = {
  newsList: fetchedData.newsList,
};

export class ListContents {
  private props: ListContentsProps;

  constructor() {
    this.props = ListContentsProps;
    this.setEvent();
  }

  render() {
    this.renderHeader();
    this.renderListContents();
  }

  renderHeader() {
    const state = store.getState();
    const header = document.querySelector('.header-wrap');
    const headerImg = document.querySelector('.list-header__img');
    const editTime = document.querySelector('.list-header__editTime')!;

    header?.setAttribute('href', '#');
    headerImg?.setAttribute('src', this.props.newsList[state.curCategory][state.pageIndex].pressLogoSrc);
    editTime.textContent = this.props.newsList[state.curCategory][state.pageIndex].lastEdited;
  }

  renderListContents() {
    const state = store.getState();
    const thumbnailImg = document.querySelector('.contents-thumbnail__img');
    const thumbnailTitle = document.querySelector('.contents-thumbnail__title')!;
    const newsList = document.querySelectorAll('.contents-news__list');
    const editComment = document.querySelector('.contents-news__edit')!;

    thumbnailImg?.setAttribute('src', this.props.newsList[state.curCategory][state.pageIndex].mainArticle.thumbnailSrc);
    thumbnailImg?.setAttribute('alt', this.props.newsList[state.curCategory][state.pageIndex].mainArticle.thumbnailAlt);
    thumbnailTitle.textContent = this.props.newsList[state.curCategory][state.pageIndex].mainArticle.mainArticleTitle;
    editComment.textContent = `${
      this.props.newsList[state.curCategory][state.pageIndex].pressLogoAlt
    } 언론사에서 직접 편집한 뉴스입니다.`;

    for (let i = 0; i < newsList.length; i++) {
      newsList[i].textContent = this.props.newsList[state.curCategory][state.pageIndex].subArticles[i];
    }
  }

  setEvent() {
    store.subscribe(this.render.bind(this));
  }
}
