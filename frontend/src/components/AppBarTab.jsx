import { View, Pressable } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { useNavigate } from "react-router-native";
const AppBarTab = ({ label, path, callback }) => {
  const navigate = useNavigate();
  const handlePressing = () => {
    if (callback) {
      callback();
    }
    navigate(path);
  };
  return (
    <View>
      <Pressable onPress={handlePressing}>
        <Text
          fontWeight={"bold"}
          fontSize={"heading"}
          style={{ padding: theme.paddings.appBarItem }}
          color={"white"}
        >
          {label}
        </Text>
      </Pressable>
    </View>
  );
};
export default AppBarTab;
