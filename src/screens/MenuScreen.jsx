import { StatusBar, ImageBackground } from "react-native";
import { Button, Box } from "@react-native-material/core";
import { Flex } from "react-native-flex-layout";
import backHoume from "../impeg/backHoume.png";
import styles from "./Styles";

const MenuScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={backHoume}
      style={{ width: "100%", height: "100%" }}
    >
      <Flex fill center>
        <Flex fill style={styles.boxLink}>
          <Box style={styles.title}>
            <Button
              tintColor="#fff"
              style={styles.button}
              color={"#129956"}
              title="Start easy game"
              onPress={() => navigation.navigate("One")}
            />
            <Button
              tintColor="#fff"
              color={"#c4c122"}
              style={styles.button}
              title="Start middle game"
              onPress={() => navigation.navigate("Two")}
            />
            <Button
              tintColor="#fff"
              color={"#db4b1f"}
              style={styles.button}
              title="Start hard game"
              onPress={() => navigation.navigate("Three")}
            />
          </Box>
        </Flex>
        <Flex fill center>
          <Box>
            <Button
              color="#0084ff"
              title="Go to all recods"
              variant="text"
              onPress={() => navigation.navigate("Recods")}
            />
          </Box>
        </Flex>
      </Flex>
      <StatusBar style="auto" />
    </ImageBackground>
  );
};

export default MenuScreen;
