import { StatusBar } from "react-native";
import { Text, Flex } from "@react-native-material/core";
import { Button } from "@react-native-material/core";
import styles from "./Styles";

const RecodsScreen = ({ navigation }) => {
  return (
    <Flex fill center>
      <Text style={styles.title}>RecodsScreen</Text>
      <StatusBar style="auto" />
    </Flex>
  );
};

export default RecodsScreen;
