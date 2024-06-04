import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList} from 'react-native';
import {
  Flex,
  getColors,
  Icons,
  StyleSheet,
} from 'squashapps-react-native-uikit';
import ProfileWithName from '../../common/ProfileWithName';
import SearchBar from '../../common/SearchBar';
import {APP_THEME} from '../../utils/constants';
import {appointmentData} from '../HomeModule/mock';
import AppointmentsCard from './AppointmentsCard';

const {SvgArrowDown} = Icons;
const {GREY_10} = getColors(APP_THEME);

const styles = StyleSheet.create({
  profile: {
    height: 40,
    width: 40,
    borderRadius: 8,
  },
  nameContainer: {
    marginLeft: 10,
  },
  searchContainer: {
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  imageContainer: {
    backgroundColor: GREY_10,
    paddingHorizontal: 20,
    marginTop: 16,
    paddingVertical: 8,
    borderRadius: 15,
  },
});

const UpcomingTab = () => {
  const navigation = useNavigation();
  const handleViewCard = () => {
    navigation.navigate('AppointmentDetailsScreen');
  };

  return (
    <Flex>
      <Flex overrideStyle={styles.searchContainer}>
        <SearchBar isFilter placeholder="Search Appointments" />

        <Flex row center between overrideStyle={styles.imageContainer}>
          <ProfileWithName
            height={40}
            width={40}
            borderRadius={15}
            src="https://i.ibb.co/bRbhw8R/doctor1.png"
            name="Arun Kumar, "
            subName="26y male"
          />
          <SvgArrowDown width={20} height={20} />
        </Flex>
      </Flex>
      <FlatList
        nestedScrollEnabled
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={appointmentData}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={() => <AppointmentsCard handleViewCard={handleViewCard} />}
      />
    </Flex>
  );
};

export default UpcomingTab;
