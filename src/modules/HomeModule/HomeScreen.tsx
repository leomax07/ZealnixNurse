import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {FlatList, ScrollView, View} from 'react-native';
import {useSafeAreaFrame} from 'react-native-safe-area-context';
import {Colors, Flex, StyleSheet} from 'squashapps-react-native-uikit';
import CustomStatusBar from '../../common/CustomStatusBar';
import AppointmentsCard from './AppointmentsCard';
import HomeHeader from './HomeHeader';
import {appointmentData} from './mock';
import RecentRecordedCard from './RecentRecordedCard';
import StatusCard from './StatusCard';
import TitleWithViewAll from './TitleWithViewAll';

const styles = StyleSheet.create({
  overAll: {
    paddingVertical: 30,
  },
  appointMentConatiner: {
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 16,
  },
  appointmentFlatList: {
    paddingHorizontal: 20,
  },
});

const HomeScreen = () => {
  const {height} = useSafeAreaFrame();
  const navigation = useNavigation();

  const handleViewRecord = () => {
    navigation.navigate('BottomTab', {
      screen: 'AppointmentTab',
      params: {
        screen: 'AppointmentHistoryScreen',
      },
    });
  };
  const handleViewAppointment = () => {
    navigation.navigate('BottomTab', {
      screen: 'AppointmentTab',
    });
  };
  return (
    <>
      <CustomStatusBar
        barStyle="light-content"
        backgroundColor={Colors.WHITE}
      />
      <Flex overrideStyle={styles.overAll}>
        <HomeHeader />
        <ScrollView nestedScrollEnabled bounces={false} style={{height}}>
          <StatusCard />
          <TitleWithViewAll
            title="Today’s Appointments"
            hanldeView={handleViewAppointment}
          />
          <FlatList
            showsHorizontalScrollIndicator={false}
            style={styles.appointmentFlatList}
            horizontal
            data={appointmentData}
            keyExtractor={(_item, index) => index.toString()}
            renderItem={() => <AppointmentsCard />}
          />
          <TitleWithViewAll
            title="Recent Vitals Recorded"
            hanldeView={handleViewRecord}
          />
          <View style={{marginBottom: 250}}>
            <FlatList
              nestedScrollEnabled
              showsHorizontalScrollIndicator={false}
              showsVerticalScrollIndicator={false}
              data={appointmentData}
              keyExtractor={(_item, index) => index.toString()}
              renderItem={() => <RecentRecordedCard />}
            />
          </View>
        </ScrollView>
      </Flex>
    </>
  );
};

export default HomeScreen;
