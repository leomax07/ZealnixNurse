import React from 'react';
import {FlatList, View} from 'react-native';
import {Card, Flex, StyleSheet} from 'squashapps-react-native-uikit';
import PrescriptionCard from './PrescriptionCard';

const styles = StyleSheet.create({
  overAll: {
    padding: 20,
    marginHorizontal: 20,
    marginTop: 20,
    borderRadius: 10,
  },
});

const PrescriptionScreen = () => {
  return (
    <Flex>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={[{}, {}, {}, {}, {}, {}, {}, {}]}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={() => (
          <Card align="stretch" overrideStyle={styles.overAll}>
            <PrescriptionCard isTime />
          </Card>
        )}
        ListFooterComponent={<View style={{height: 100}} />}
      />
    </Flex>
  );
};

export default PrescriptionScreen;
