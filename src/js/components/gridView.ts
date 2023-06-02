import { createElement } from '../utils.ts';
import { GripProps } from '../type.ts';
import { NUMBER_OF_GRID_CONTENTS } from '../constant.ts';

export class GridView {
  private props: GripProps;
  private element: HTMLElement;

  constructor(props: GripProps) {
    this.props = props;
    this.element = createElement('div', { class: 'grid-view' });
    this.render();
  }

  render() {
    const newsMain = document.querySelector('.main-contents');
    this.createGridContent();
    newsMain?.append(this.element);
  }

  createGridContent() {
    for (let i = 0; i < NUMBER_OF_GRID_CONTENTS; i++) {
      const imgSrc: string = this.props.pressList[i].src;
      const imgAlt: string = this.props.pressList[i].alt;
      const gridContent = createElement('div', { class: 'grid-view__content' });
      const contentImg = createElement('img', { src: `${imgSrc}`, alt: `${imgAlt}` });

      gridContent.append(contentImg);
      this.element.append(gridContent);
    }
  }
}
