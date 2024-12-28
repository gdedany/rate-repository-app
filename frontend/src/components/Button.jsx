import Text from "./Text";
import theme from "../theme";
import { Pressable, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  button: {
    borderRadius: 10,
    color: theme.colors.textWhite,
    padding: 10,
    flex: 1,
    minHeight: 40,
    backgroundColor: theme.colors.primary,
  },
  buttonDanger: {
    borderRadius: 10,
    color: theme.colors.textWhite,
    padding: 10,
    flex: 1,
    backgroundColor: theme.colors.danger,
  },
});

const Button = ({ onPress, text, dangerStyle }) => {
  return (
    <Pressable
      style={dangerStyle ? styles.buttonDanger : styles.button}
      onPress={onPress}
    >
      <Text
        fontWeight={"bold"}
        style={{
          color: theme.colors.textWhite,
          textAlign: "center",
        }}
      >
        {text}
      </Text>
    </Pressable>
  );
};
export default Button;
