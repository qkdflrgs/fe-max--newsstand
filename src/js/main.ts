import { Header } from './components/header.ts';
import { RollingNews } from './components/rollingNews.ts';
import { Tapview } from './components/tapview.ts';

const init = () => {
  const header = new Header(HeaderProps);
  const rollingNews = new RollingNews(RollingNewsProps);
  const tapview = new Tapview(TapviewProps);
};

const systemDate: string = new Date().toLocaleDateString('ko-KR', {
  year: 'numeric',
  month: 'numeric',
  day: 'numeric',
  weekday: 'long',
});

const HeaderProps = {
  title: '뉴스스탠드',
  date: `${systemDate}`,
};

const RollingNewsProps = {
  leftPress: '연합뉴스',
  rightPress: '연합뉴스',
  leftArticle: '뉴스기사',
  rightArticle: '뉴스기사',
};

const TapviewProps = {
  allBtn: '전체 언론사',
  subscribeBtn: '내가 구독한 언론사',
};

init();
