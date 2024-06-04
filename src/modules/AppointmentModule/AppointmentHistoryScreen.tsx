import React from 'react';
import {FlatList, StyleSheet, View} from 'react-native';
import {Flex} from 'squashapps-react-native-uikit';
import SearchBar from '../../common/SearchBar';
import RecentRecordedCard from '../HomeModule/RecentRecordedCard';

const styles = StyleSheet.create({
  searchContainer: {
    marginHorizontal: 20,
    paddingVertical: 16,
  },
  footerView: {
    height: 150,
  },
});

const AppointmentHistoryScreen = () => {
  return (
    <Flex>
      <View style={styles.searchContainer}>
        <SearchBar isFilter placeholder="Search Appointments" />
      </View>
      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        data={[{}, {}, {}, {}, {}, {}, {}, {}]}
        keyExtractor={(_item, index) => index.toString()}
        renderItem={() => <RecentRecordedCard />}
        ListFooterComponent={<View style={styles.footerView} />}
      />
    </Flex>
  );
};

export default AppointmentHistoryScreen;
