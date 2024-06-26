import * as React from 'react';
import {View} from 'react-native';
import {
  InputText,
  Icons,
  Colors,
  Flex,
  Button,
} from 'squashapps-react-native-uikit';

const {SvgSearch, SvgFilter} = Icons;
const SearchIcon = () => <SvgSearch fill={Colors.NEUTRAL_500} />;

type Props = {
  placeholder: string;
  value?: string;
  onChange?: (text: string) => void;
  isFilter?: boolean;
};
const SearchBar = ({placeholder, value, onChange, isFilter}: Props) => {
  return (
    <Flex row center between>
      <View style={{width: isFilter ? '90%' : '100%'}}>
        <InputText
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          actionRight={SearchIcon}
        />
      </View>
      {isFilter && (
        <Button type="link">
          <SvgFilter />
        </Button>
      )}
    </Flex>
  );
};
export default SearchBar;
