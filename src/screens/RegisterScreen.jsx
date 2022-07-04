import { Text, StatusBar, ImageBackground } from "react-native";
import { Button, Box, TextInput } from "@react-native-material/core";
import { Flex } from "react-native-flex-layout";
import backHoume from "../impeg/backHoume.png";
import { Formik } from "formik";
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { object, string } from "yup";
import Toast from "react-native-toast-message";
import styles from "./Styles";

const RegisterScreen = ({ navigation }, ...props) => {
  let userSchema = object({
    name: string()
      .min(3, "Name must be longer than 3 letters!")
      .max(20, "Name must be shorts than 20 letters!")
      .required("Name must by required"),
    email: string().email("Invalid email").required("Email must by required"),
    password: string()
      .min(5, "Password must be longer than 5 letters!")
      .max(20, "Password must be shorts than 20 letters!")
      .required("Password must by required"),
    dublePassword: string()
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
            initialValues={{
              name: "",
              email: "",
              password: "",
              dublePassword: "",
            }}
            onSubmit={async (values) => {
              if (values.password !== values.dublePassword) {
                return tosty("Password or dublePassword is mistake");
              }
              try {
                await userSchema.validate({ ...values });
                console.log("send api", values);
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
                  required
                  placeholderTextColor={"#888"}
                  leading={(props) => <Icon name="account" {...props} />}
                  onChangeText={handleChange("name")}
                  onBlur={handleBlur("name")}
                  value={values.name}
                />
                <TextInput
                  required
                  style={styles.input}
                  placeholder="Email"
                  leading={(props) => <Icon name="email" {...props} />}
                  placeholderTextColor={"#888"}
                  onChangeText={handleChange("email")}
                  onBlur={handleBlur("email")}
                  value={values.email}
                />
                <TextInput
                  required
                  style={styles.input}
                  placeholder="Password"
                  placeholderTextColor={"#888"}
                  onChangeText={handleChange("password")}
                  onBlur={handleBlur("password")}
                  value={values.password}
                />
                <TextInput
                  required
                  style={styles.input}
                  placeholder="Duble password"
                  placeholderTextColor={"#888"}
                  onChangeText={handleChange("dublePassword")}
                  onBlur={handleBlur("dublePassword")}
                  value={values.dublePassword}
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
            <Text style={styles.question}>Do you have login?</Text>
            <Button
              color="#0084ff"
              title="Go to Login"
              variant="text"
              onPress={() => navigation.navigate("Login")}
            />
          </Box>
        </Flex>
      </Flex>
      <StatusBar style="auto" />
    </ImageBackground>
  );
};

export default RegisterScreen;
