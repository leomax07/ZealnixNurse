import React from 'react';
import {
  Card,
  Flex,
  Icons,
  Image,
  Status,
  StyleSheet,
  Text,
  getColors,
} from 'squashapps-react-native-uikit';
import {APP_THEME} from '../../utils/constants';
import RecordVitalsData from '../AppointmentModule/RecordVitalsData';
import {recentRecord} from './mock';

const {SvgDateRange, SvgMap} = Icons;
const {PRIMARY_COLOR_500} = getColors(APP_THEME);

const styles = StyleSheet.create({
  overAll: {
    padding: 10,
    marginBottom: 20,
    marginTop: 2,
    marginHorizontal: 20,
  },
  dateText: {
    marginLeft: 10,
  },
  profile: {
    height: 25,
    width: 25,
    borderRadius: 8,
  },
  nameContainer: {
    marginLeft: 10,
  },
  profileContainer: {
    marginVertical: 10,
  },
});

const RecentRecordedCard = () => {
  return (
    <Card align="stretch" overrideStyle={styles.overAll}>
      <Flex>
        <Flex row center between>
          <Flex row center>
            <SvgDateRange />
            <Text type="body100" overrideStyle={styles.dateText}>
              7 September 2021 . 08:00
            </Text>
          </Flex>
          <Flex row center>
            <SvgMap fill={PRIMARY_COLOR_500} />
            <Text type="body100" overrideStyle={styles.dateText}>
              Hospital
            </Text>
          </Flex>
        </Flex>
        <Flex row center between overrideStyle={styles.profileContainer}>
          <Flex row center>
            <Image
              src="https://i.ibb.co/bRbhw8R/doctor1.png"
              overrideStyle={styles.profile}
            />
            <Flex row overrideStyle={styles.nameContainer}>
              <Text type="heading400">Arun Kumar, </Text>
              <Text color="gray" type="body100">
                26y male
              </Text>
            </Flex>
          </Flex>
          <Status color="inprogress" label="Ongoing" />
        </Flex>
        <RecordVitalsData isData={recentRecord} />
      </Flex>
    </Card>
  );
};

export default RecentRecordedCard;
