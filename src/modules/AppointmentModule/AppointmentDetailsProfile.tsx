import React from 'react';
import {
  Flex,
  Icons,
  Text,
  Button,
  StyleSheet,
  getColors,
  Status,
} from 'squashapps-react-native-uikit';
import ProfileWithName from '../../common/ProfileWithName';
import ProfileWithStatus from '../../common/ProfileWithStatus';
import TitleWithValue from '../../common/TitleWithValue';
import {APP_THEME} from '../../utils/constants';

const {SvgMapRound, SvgTimePeding, SvgCalenderTick} = Icons;
const {NEUTRAL_500, PRIMARY_COLOR_500} = getColors(APP_THEME);

const styles = StyleSheet.create({
  nameFLex: {
    marginBottom: 8,
  },
  nameContainer: {
    marginLeft: 20,
  },
  calenderTickContainer: {
    marginVertical: 10,
    backgroundColor: PRIMARY_COLOR_500 + 5,
    paddingHorizontal: 10,
    paddingVertical: 5,
    marginBottom: 10,
  },
  dateText: {
    marginLeft: 8,
  },

  infoText: {
    marginTop: 10,
    marginBottom: 16,
  },
});

type Props = {
  handleNavigateHistroy: () => void;
};
const AppointmentDetailsProfile = ({handleNavigateHistroy}: Props) => {
  return (
    <Flex>
      <Flex row center>
        <ProfileWithStatus
          height={75}
          width={75}
          borderRadius={25}
          src="https://i.ibb.co/bRbhw8R/doctor1.png"
          icon={<SvgMapRound />}
        />
        <Flex flex={1} overrideStyle={styles.nameContainer}>
          <Flex row center between overrideStyle={styles.nameFLex}>
            <Text type="heading600">Rahul Aravind</Text>
            <Button type="link" onClick={handleNavigateHistroy}>
              <SvgTimePeding />
            </Button>
          </Flex>
          <Text color="gray" type="body100">
            26 Years, Male
          </Text>
        </Flex>
      </Flex>
      <Flex row center middle overrideStyle={styles.calenderTickContainer}>
        <SvgCalenderTick fill={NEUTRAL_500} />
        <Text overrideStyle={styles.dateText} type="body100">
          7 September 2021 . 08:00
        </Text>
      </Flex>
      <TitleWithValue
        title="Doctor :  "
        value={
          <ProfileWithName
            height={30}
            width={30}
            borderRadius={25}
            src="https://i.ibb.co/bRbhw8R/doctor1.png"
            name="Dr. Matias, "
            subName="Pyschartrist"
            nameSize="heading300"
          />
        }
      />
      <TitleWithValue
        title="Status :  "
        value={<Status label="Upcoming" color="success" />}
      />
      <TitleWithValue title="Token ID :  " value={<Text>#1234</Text>} />
      <TitleWithValue title="Appointment Subject : " />
      <Text type="heading400">Major depressive disorder</Text>
      <Text overrideStyle={styles.infoText} size={14}>
        From the information gathered in the history
      </Text>
    </Flex>
  );
};

export default AppointmentDetailsProfile;
