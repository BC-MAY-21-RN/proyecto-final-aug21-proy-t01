import React from 'react';
import {ScrollView} from 'react-native';
import {HomeGamesSection, UserProfileSection, Wrapper} from '../../components';

const intialData = {
  description:
    'I am casual PC gamer who likes racing shooter and open world games.',
  userName: 'Victor',
  nickname: 'VictorWars',
  userProfile: 'W',
};

const AccountScreen = () => {
  return (
    <ScrollView>
      <UserProfileSection
        name={intialData.userName}
        nickname={intialData.nickname}
        initialCharacter={intialData.userProfile}
        description={intialData.description}
        editable
      />
      <Wrapper>
        <HomeGamesSection />
      </Wrapper>
    </ScrollView>
  );
};

export default AccountScreen;
