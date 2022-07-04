import { Text } from "react-native";
import { Button } from "@react-native-material/core";
import { Flex } from "react-native-flex-layout";
import styles from "../Styles";

const GameOverScreen = ({ navigation }) => {
  return (
    <Flex fill center>
      <Text>GameOverScreen</Text>
      <Text>Your points: {null}</Text>
      <Button
        tintColor="#fff"
        style={styles.button}
        color={"#3aaee4"}
        onPress={() => {
          navigation.navigate("Menu");
        }}
        title="Submit"
      />
    </Flex>
  );
};

export default GameOverScreen;
const styles = StyleSheet.create({
  button: {
    marginTop: 20,
    height: 40,
  },
});
