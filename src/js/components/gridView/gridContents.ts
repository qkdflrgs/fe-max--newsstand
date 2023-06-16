import fetchedData from '../../../../db.json';
import { GridContentsProps } from '../../type.ts';
import { store } from '../../store/store.ts';
import { shuffleArray } from '../../utils.ts';
import { NUMBER_OF_GRID_CONTENTS } from '../../constant.ts';

const GridContentsProps = {
  pressList: shuffleArray([...fetchedData.pressList]),
  subscribedPress: [],
};

export class GridContents {
  private props: GridContentsProps;

  constructor() {
    this.props = GridContentsProps;
    this.setEvent();
  }

  render() {
    const state = store.getState();

    if (!state.isGrid) return;
    state.isAllPress ? this.renderAllPress(state.pageIndex) : this.renderSubscribedPress(state.pageIndex);
  }

  renderAllPress(index: number) {
    const element = document.querySelectorAll('.grid-view__img');
    let count: number = 0;

    for (let i = NUMBER_OF_GRID_CONTENTS * index; i < NUMBER_OF_GRID_CONTENTS + NUMBER_OF_GRID_CONTENTS * index; i++) {
      element[count].setAttribute('src', this.props.pressList[i].src);
      element[count].setAttribute('alt', this.props.pressList[i].alt);
      count++;
    }
  }

  renderSubscribedPress(index: number) {
    const element = document.querySelectorAll('.grid-view__img');
    let count: number = 0;

    for (let i = NUMBER_OF_GRID_CONTENTS * index; i < NUMBER_OF_GRID_CONTENTS + NUMBER_OF_GRID_CONTENTS * index; i++) {
      if (this.props.subscribedPress[i]) {
        element[count].setAttribute('src', this.props.subscribedPress[i].src);
        element[count].setAttribute('alt', this.props.subscribedPress[i].alt);
        count++;
      }
    }
  }

  setEvent() {
    store.subscribe(this.render.bind(this));
  }
}
