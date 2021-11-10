import React from 'react';
import {NewsResponse} from '../models/newsResponse';
import {getNews} from '../services/news.service';
import {parseNewsToNewsCard} from './parseNews';
import {TabItem} from '../../components/TabSection/props';

const DEFAULT_OPTIONS = {
  limit: 3,
  sort: 'publish_date:desc',
};

interface TrendingParams {
  title: string;
  filter: string;
  render: React.ElementType;
}

export const getTrendingData = async ({
  title,
  filter,
  render,
}: TrendingParams) => {
  const response: NewsResponse = await getNews({
    ...DEFAULT_OPTIONS,
    filter: `title:${filter}`,
  });
  const parsedNews = parseNewsToNewsCard(response.results);
  const trendingData: TabItem = {
    route: title,
    render: render,
    data: parsedNews,
  };
  return trendingData;
};
