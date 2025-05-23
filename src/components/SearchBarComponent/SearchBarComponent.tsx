import React from "react";
import { Image, TextInput, TouchableOpacity, View } from "react-native";

import styles from "./styles";
import { useTheme } from "../../context/ThemeContext";
import { lightTheme, darkTheme } from "../../theme/theme";

type Props = {
  value: string;
  onChange: (text: string) => void;
  onSearch: () => void;
};

const SearchBar = ({ value, onChange, onSearch }: Props) => {
  const { theme } = useTheme();
  const colors = theme === "light" ? lightTheme : darkTheme;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <TextInput
        placeholderTextColor={colors.text}
        style={[styles.input, { color: colors.text }]}
        value={value}
        onChangeText={onChange}
        placeholder="Enter the city name here..."
        returnKeyType="search"
        onSubmitEditing={onSearch}
      />
      <TouchableOpacity
        accessibilityRole="button"
        accessibilityLabel="Search Button"
        accessibilityHint="Search for the entered city"
        hitSlop={{ top: 10, bottom: 10, left: 10, right: 10 }}
        disabled={value.length < 2}
        onPress={onSearch}
        style={[styles.button, { backgroundColor: colors.buttonBackground }]}
      >
        <Image
          style={[styles.icon, { tintColor: colors.background }]}
          source={require("../../assets/icon/searchicon.png")}
        />
      </TouchableOpacity>
    </View>
  );
};

export default SearchBar;
