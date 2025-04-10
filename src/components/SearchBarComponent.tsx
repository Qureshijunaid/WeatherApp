import {
  Image,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import theme from '../theme';

type Props = {
  value: string;
  onChange: (text: string) => void;
  onSearch: () => void;
};

const SearchBar = ({value, onChange, onSearch}: Props) => {
  return (
    <View style={styles.container}>
      <TextInput
        placeholderTextColor={theme.color.primary.white}
        style={styles.input}
        value={value}
        onChangeText={onChange}
        placeholder="Enter the city name here..."
      />
      <TouchableOpacity
        accessibilityRole="button"
        disabled={value.length < 2}
        onPress={onSearch}
        style={styles.button}>
        <Image
          style={styles.icon}
          source={require('../assets/icon/searchicon.png')}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderWidth: 1,
    borderRadius: 30,
    padding: 5,
    borderColor: theme.color.primary.white,
    backgroundColor: theme.color.primary.black,
  },
  input: {
    paddingHorizontal: 10,
    ...theme.typography.placeholderLables,
  },
  button: {
    backgroundColor: theme.color.primary.white,
    width: 42,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 60,
  },
  icon: {
    height: 24,
    width: 24,
  },
});
