import { Text, StatusBar, ImageBackground } from "react-native";
import { Button, Box } from "@react-native-material/core";
import { Flex } from "react-native-flex-layout";
import backHoume from "../impeg/backHoume.png";
import styles from "./Styles";

const HomeScreen = ({ navigation }) => {
  return (
    <ImageBackground
      source={backHoume}
      style={{ width: "100%", height: "100%" }}
    >
      <Flex fill center style={styles.container}>
        <Box maxW={"80%"} style={styles.boxQuestion}>
          <Text style={styles.title}>I am mobile developer!</Text>
          <Button
            tintColor="#fff"
            style={styles.button}
            color={"#3aaee4"}
            title="Go to Login"
            onPress={() => navigation.navigate("Login")}
          />
          <Button
            tintColor="#fff"
            color={"#3aaee4"}
            style={styles.button}
            title="Go to Register"
            onPress={() => navigation.navigate("Register")}
          />
          <StatusBar style="auto" />
        </Box>
      </Flex>
    </ImageBackground>
  );
};

export default HomeScreen;
