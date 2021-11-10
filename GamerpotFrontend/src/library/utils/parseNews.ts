import {NewsProps} from '../../components/News/props';
import {News} from '../models/news';
import {parseDate} from './parseDate';

export const parseNewsToNewsCard = (news: Array<News>) => {
  const parsedTags: Array<Array<string>> = news.map(obj => parseTags(obj));
  const parsedNews: Array<NewsProps> = news.map((obj, index) => ({
    img: obj.image.screen_tiny,
    title: obj.title,
    dateRelease: parseDate(obj.publish_date),
    tags: parsedTags[index],
  }));
  return parsedNews;
};

const parseTags = (obj: News) => {
  const tags = obj.associations.map(data => data.name);
  const filteredTags = filterTags(tags);
  return filteredTags;
};

const filterTags = (tag: Array<string>) => {
  if (tag.length > 2) {
    return tag.slice(0, 2);
  }
  return tag;
};
