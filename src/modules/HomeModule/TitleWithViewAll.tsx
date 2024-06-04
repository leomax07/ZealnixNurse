import React from 'react';
import {Flex, Text, StyleSheet, Button} from 'squashapps-react-native-uikit';

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

type Props = {
  title: string;
  hanldeView?: () => void;
};
const TitleWithViewAll = ({title, hanldeView}: Props) => {
  return (
    <Flex row center between overrideStyle={styles.appointMentConatiner}>
      <Text type="heading500">{title}</Text>
      <Button type="link" onClick={hanldeView}>
        <Text color="theme">View All</Text>
      </Button>
    </Flex>
  );
};

export default TitleWithViewAll;
