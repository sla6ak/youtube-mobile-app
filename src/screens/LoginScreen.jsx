import { Text, StatusBar, ImageBackground } from "react-native";
import { Button, Box, TextInput } from "@react-native-material/core";
import { Flex } from "react-native-flex-layout";
import backHoume from "../impeg/backHoume.png";
import { Formik } from "formik";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { object, string } from "yup";
import Toast from "react-native-toast-message";
import styles from "./Styles";

const LoginScreen = ({ navigation }, ...props) => {
  let userSchema = object().shape({
    name: string()
      .min(3, "Name must be longer than 3 letters!")
      .max(20, "Name must be shorts than 20 letters!")
      .required("Name must by required"),
    password: string()
      .min(5, "Password must be longer than 5 letters!")
      .max(20, "Password must be shorts than 20 letters!")
      .required("Password must by required"),
  });

  const tosty = (error) => {
    Toast.show({
      type: "validationToast",
      text1: "validation",
      text2: `${error}`,
    });
  };
  return (
    <ImageBackground
      source={backHoume}
      style={{ width: "100%", height: "100%" }}
    >
      <Flex fill center>
        <Flex fill center style={styles.boxFormik}>
          <Formik
            initialValues={{ name: "", password: "" }}
            onSubmit={async (values) => {
              try {
                await userSchema.validate({ ...values });
                console.log("send server:", values);
                navigation.navigate("Menu");
              } catch (error) {
                tosty(error);
              }
            }}
          >
            {({ handleChange, handleBlur, handleSubmit, values }) => (
              <Box style={styles.boxInputs}>
                <TextInput
                  style={styles.input}
                  placeholder="Name"
                  placeholderTextColor={"#888"}
                  leading={(props) => <Icon name="account" {...props} />}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />
                <TextInput
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor={"#888"}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.email}
                />

                <Button
                  tintColor="#fff"
                  style={styles.button}
                  color={"#3aaee4"}
                  onPress={handleSubmit}
                  title="Submit"
                />
              </Box>
            )}
          </Formik>
        </Flex>
        <Flex fill center style={styles.boxLink}>
          <Box>
            <Text style={styles.question}>Don't have a login?</Text>
            <Button
              color="#0084ff"
              title="Go to Register"
              variant="text"
              onPress={() => navigation.navigate("Register")}
            />
          </Box>
        </Flex>
      </Flex>
      <StatusBar style="auto" />
    </ImageBackground>
  );
};

export default LoginScreen;
