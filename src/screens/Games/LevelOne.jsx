import { Text } from "react-native";
import { Flex } from "react-native-flex-layout";
import styles from "../Styles";

const LevelOne = () => {
  return (
    <Flex fill center>
      <Text style={styles.title}>easy</Text>
    </Flex>
  );
};

export default LevelOne;
