import React, {useEffect, useState} from 'react';
import {ActivityIndicator, View} from 'react-native';
import {
  GameHorizontalCard,
  SectionTitle,
  Wrapper,
  TextButton,
} from '../../components';
import {CardData} from '../../components/GameHorizontalCard/props';
import GameCardSkeletonList from '../../components/GameHorizontalCard/Skeleton';
import {useService} from '../../library/hooks/useService';
import {NewsResponse} from '../../library/models/newsResponse';
import {getNews} from '../../library/services/news.service';
import {parseNewsToNewsCard} from '../../library/utils/parseNews';
import {styles} from './styles';

const defaultParams = {
  limit: 10,
  sort: 'publish_date:desc',
  page: 0,
};

const NewsScreen = () => {
  const [news, setNews] = useState([] as Array<CardData>);
  const [newsParams, setNewsParams] = useState(defaultParams);
  const [areNewsLoading, callNewsService] = useService(getNews);
  const [currentPage, setCurrentPage] = useState(1);
  useEffect(() => {
    const fetchNews = async () => {
      const response: NewsResponse = await callNewsService(newsParams);
      const parsedNews = parseNewsToNewsCard(response.results);
      setNews(news.concat(parsedNews));
      setCurrentPage(newsParams.page);
    };
    fetchNews();
  }, [newsParams]);
  return (
    <Wrapper>
      <View style={styles.title}>
        <SectionTitle title="Latest news" />
      </View>
      <View>
        {areNewsLoading && currentPage === 1 && (
          <GameCardSkeletonList display={10} />
        )}
        {news &&
          news.map((newObj, index) => (
            <GameHorizontalCard {...newObj} key={index} />
          ))}
      </View>
      {areNewsLoading && <ActivityIndicator size="large" />}
      <TextButton
        text="Load more"
        disabled={areNewsLoading}
        onClick={() => setNewsParams({...newsParams, page: currentPage + 1})}
      />
    </Wrapper>
  );
};

export default NewsScreen;
