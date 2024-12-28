import { TextInput, StyleSheet } from "react-native";
import theme from "../theme";
import Text from "./Text";
const styles = StyleSheet.create({
  container: {
    gap: 10,
    padding: 5,
  },
  errorInput: {
    borderColor: theme.colors.danger,
  },
  input: {
    borderWidth: 1,
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
    borderColor: theme.colors.textSecondary,
    height: 40,
  },
});

const Input = ({
  error,
  value,
  onChangeText,
  placeholder,
  secureTextEntry,
}) => {
  return (
    <>
      <TextInput
        style={[styles.input, error ? styles.errorInput : null]}
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
      />
      {error && <Text style={{ color: theme.colors.danger }}>{error}</Text>}
    </>
  );
};
export default Input;
