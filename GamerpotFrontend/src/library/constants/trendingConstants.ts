import {GameHorizontalCard} from '../../components';

export const trending1 = {
  title: 'Genshin Impact',
  filter: 'genshin',
  render: GameHorizontalCard,
};

export const trending2 = {
  title: 'Fortnite',
  filter: 'fortnite',
  render: GameHorizontalCard,
};

export const trending3 = {
  title: 'Forza Horizon 5',
  filter: 'forza',
  render: GameHorizontalCard,
};

export const initialTrendingData = [
  {
    route: trending1.title,
  },
  {
    route: trending2.title,
  },
  {
    route: trending3.title,
  },
];
