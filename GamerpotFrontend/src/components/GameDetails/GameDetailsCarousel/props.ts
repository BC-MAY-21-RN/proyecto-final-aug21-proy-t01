import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../../screens/HomeScreen/RootStackParams';
import {GameDetails} from '../../../library/models/gameDetails';

export interface GameDetailsCarouselProps {
  navigation: NativeStackNavigationProp<RootStackParamList, 'Game'>;
  gameDetails: GameDetails;
}
