import {NewsProps} from '../../components/News/props';
import {News} from '../models/news';
import {parseDate} from './parseDate';
import {CardData} from '../../components/GameHorizontalCard/props';

export const parseNewsToNewsCard = (news: Array<News>) => {
  const parsedTags: Array<Array<string>> = news.map(obj => parseTags(obj));
  const parsedNews: Array<CardData> = news.map((obj, index) => ({
    image: obj.image.original,
    title: obj.title,
    date: parseDate(obj.publish_date),
    tags: parsedTags[index],
    link: obj.site_detail_url,
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
