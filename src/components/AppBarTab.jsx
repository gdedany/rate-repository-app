import { View, Pressable } from "react-native";
import Text from "./Text";
import theme from "../theme";
import { useNavigate } from "react-router-native";
const AppBarTab = ({ label, path }) => {
  const navigate = useNavigate();
  return (
    <View>
      <Pressable onPress={() => navigate(path)}>
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
