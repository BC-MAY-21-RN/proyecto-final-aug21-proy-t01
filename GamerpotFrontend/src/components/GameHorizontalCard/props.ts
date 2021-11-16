export interface CardData {
  id: number;
  image: string;
  title: string;
  date: string;
  link: string;
  tags?: Array<string>;
  saves?: number;
  comments?: number;
  metacritic?: number;
  onClick?: (id: number) => void;
}
