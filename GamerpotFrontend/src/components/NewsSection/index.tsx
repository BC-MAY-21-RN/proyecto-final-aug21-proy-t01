import React, {useState, useEffect} from 'react';
import {View, Text} from 'react-native';
import {useService} from '../../library/hooks/useService';
import {NewsResponse} from '../../library/models/newsResponse';
import {getNews} from '../../library/services/news.service';
import {parseNewsToNewsCard} from '../../library/utils/parseNews';
import NewsCardList from '../NewsCardList';
import {CardData} from '../GameHorizontalCard/props';
import SectionTitle from '../SectionTitle';
import {styles} from './styles';

const NewsSection = () => {
  const [news, setNews] = useState([] as Array<CardData>);
  const [areNewsLoading, callNewsService] = useService(getNews);
  useEffect(() => {
    const fetchNews = async () => {
      const response: NewsResponse = await callNewsService({
        limit: 5,
        sort: 'publish_date:desc',
      });
      setNews(parseNewsToNewsCard(response.results));
    };
    fetchNews();
  }, []);
  return (
    <View>
      <View style={styles.titleContainer}>
        <SectionTitle title="Latest news" />
      </View>
      <NewsCardList news={news} />
    </View>
  );
};

export default NewsSection;
