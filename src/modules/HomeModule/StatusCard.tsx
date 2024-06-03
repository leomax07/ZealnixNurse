import React from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import {Flex, Text} from 'squashapps-react-native-uikit';
import SvgFrame from '../../icons/SvgFrame';

const styles = StyleSheet.create({
  statusText: {
    paddingHorizontal: 20,
    marginBottom: 16,
    marginTop: 30,
  },
  scrollStyle: {
    paddingHorizontal: 20,
  },
  cardStyle: {
    marginRight: 50,
    marginLeft: 20,
  },
});
const StatusCard = () => {
  return (
    <Flex>
      <Text type="heading500" overrideStyle={styles.statusText}>
        Status
      </Text>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal
        style={styles.scrollStyle}>
        <Flex row>
          <SvgFrame
            value="213"
            videoValue="12"
            mapValue="11"
            title="Today’s Appointments"
            width={200}
            height={150}
            fill="#FFE4E1"
          />
          <View style={styles.cardStyle}>
            <SvgFrame
              isVector
              width={200}
              height={150}
              title="Appointment Turnup %"
              value="90 %"
              stopColor="#0099FF"
              stopColorOne="#0099FF"
              fill="#EAF7FF"
            />
          </View>
        </Flex>
      </ScrollView>
    </Flex>
  );
};

export default StatusCard;
