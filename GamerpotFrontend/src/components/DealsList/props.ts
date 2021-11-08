import {DealInterface} from '../../library/models/deal';

export interface DealsListProps {
  loading: boolean;
  deals: DealInterface[];
}
