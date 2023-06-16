import { createElement } from './utils.ts';
import { Header } from './components/header.ts';
import { RollingNews } from './components/rollingNews.ts';
import { Tapview } from './components/tapview.ts';
import { MainContents } from './components/mainContents.ts';
import { GridContents } from './components/gridView/gridContents.ts';
import { ListContents } from './components/listView/listContents.ts';

class App {
  private body: HTMLElement;
  private header;
  private rollingNews;
  private tapview;
  private mainContents;
  private gridContents;
  private listContents;

  constructor() {
    this.body = document.querySelector('body')!;
    this.body.append(createElement('div', { class: 'app' }));
    this.header = new Header();
    this.rollingNews = new RollingNews();
    this.tapview = new Tapview();
    this.mainContents = new MainContents();
    this.gridContents = new GridContents();
    this.listContents = new ListContents();
  }

  init() {
    this.header.render();
    this.rollingNews.render();
    this.rollingNews.setAutoRolling();
    this.tapview.render();
    this.mainContents.init();
    this.gridContents.render();
    this.listContents.render();
  }
}

const app = new App();
app.init();
