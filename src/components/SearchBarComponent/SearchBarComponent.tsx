import {
  Image,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import styles from "./styles";
import theme from "../../theme";

type Props = {
  value: string;
  onChange: (text: string) => void;
  onSearch: () => void;
};

const SearchBar = ({ value, onChange, onSearch }: Props) => {
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
        style={styles.button}
      >
        <Image
          style={styles.icon}
          source={require("../../assets/icon/searchicon.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
