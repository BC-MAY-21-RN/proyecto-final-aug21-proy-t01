export interface CardData {
  image: string;
  title: string;
  date: string;
  link: string;
  tags?: Array<string>;
  saves?: number;
  comments?: number;
  metacritic?: number;
}
