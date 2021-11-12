export interface News {
  id: number;
  title: string;
  deck: string;
  image: {
    square_tiny: string;
    screen_tiny: string;
    square_small: string;
    original: string;
  };
  associations: [
    {
      id: number;
      name: string;
    },
  ];
  publish_date: string;
  site_detail_url: string;
}
