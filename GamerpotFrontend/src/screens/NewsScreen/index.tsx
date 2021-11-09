import React from 'react';
import {TabSection, Wrapper, GameHorizontalCard} from '../../components';
import {data} from '../../library/constants/tabSectionExample';
import {CardData} from '../../components/GameHorizontalCard/props';

const exampleData: CardData = {
  title: 'Genshin Impact Remaining Continents will be added within the next',
  image: 'https://i.blogs.es/3e6787/genshin-impact-cbt-2-scaled-2/840_560.jpg',
  date: 'Nov 9, 2021',
  tags: ['Genshin Impact', 'PC'],
};

const NewsScreen = () => {
  return (
    <Wrapper>
      <GameHorizontalCard {...exampleData} />
      <GameHorizontalCard {...exampleData} />
      <GameHorizontalCard {...exampleData} />
    </Wrapper>
  );
};

export default NewsScreen;
