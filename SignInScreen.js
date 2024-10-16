import React, { useRef, useState } from "react";
import {
    Image,
    SafeAreaView,
    StatusBar,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from "react-native";
import PhoneInput from "react-native-phone-number-input"; // Thư viện để nhập số điện thoại với mã quốc gia

const SignInScreen = () => {
  const [value, setValue] = useState(""); // Số điện thoại người dùng nhập
  const [formattedValue, setFormattedValue] = useState(""); // Số điện thoại đã định dạng
  const [valid, setValid] = useState(false); // Trạng thái hợp lệ của số điện thoại
  const [showMessage, setShowMessage] = useState(false); // Hiển thị thông tin kết quả kiểm tra

  const phoneInput = useRef(null); // Tham chiếu tới thành phần PhoneInput

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <View style={styles.container}>
        {/* Phần hình ảnh trên */}
        <Image
          source={require("./food.png")} // Đảm bảo đường dẫn đúng đến hình ảnh
          style={styles.image}
        />
        <SafeAreaView style={styles.wrapper}>
          {/* Tiêu đề */}
          <Text style={styles.title}>Get your groceries with nectar</Text>

          {/* Thành phần nhập số điện thoại với nút 'Check' */}
          <View style={styles.inputContainer}>
            <PhoneInput
              ref={phoneInput}
              defaultValue={value}
              defaultCode="BD" // Quốc gia Bangladesh
              layout="first"
              onChangeText={(text) => setValue(text)}
              onChangeFormattedText={(text) => setFormattedValue(text)}
              withShadow
              autoFocus
              containerStyle={styles.phoneInput} // Căng rộng phone input
            />
            <TouchableOpacity
              style={styles.checkButton}
              onPress={() => {
                if (phoneInput.current) {
                  const isValid = phoneInput.current.isValidNumber(value);
                  setValid(isValid);
                  setShowMessage(true);
                }
              }}
            >
              <Text style={styles.buttonText}>Check</Text>
            </TouchableOpacity>
          </View>

          {/* Hiển thị trạng thái hợp lệ */}
          {showMessage && (
            <View style={styles.message}>
              <Text style={styles.messageText}>
                {valid ? "Phone number is valid" : "Phone number is invalid"}
              </Text>
            </View>
          )}

          {/* 3 Nút xã hội với khoảng cách đều và bo góc */}
          <View style={styles.socialButtonContainer}>
            {/* Facebook button */}
            <TouchableOpacity style={styles.socialButtonFacebook}>
              <View style={styles.socialButtonContent}>
                <Text style={styles.socialButtonText}>Continue with Facebook</Text>
              </View>
            </TouchableOpacity>

            {/* Google button */}
            <TouchableOpacity style={styles.socialButtonGoogle}>
              <View style={styles.socialButtonContent}>
                <Text style={styles.socialButtonText}>Continue with Google</Text>
              </View>
            </TouchableOpacity>

          </View>
        </SafeAreaView>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FEFEFE", // Đổi màu nền thành #FEFEFE
  },
  image: {
    width: "100%",
    height: 300,
    resizeMode: "cover",
  },
  wrapper: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 20,

  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 50,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
  phoneInput: {
    flex: 1, // Đảm bảo phone input kéo dài hết chiều rộng
  },
  checkButton: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginLeft: 10, // Khoảng cách giữa input và button
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },
  message: {
    marginVertical: 10,
    padding: 10,
    backgroundColor: "#fff",
    borderRadius: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  messageText: {
    color: "red",
    fontWeight: "bold",
    textAlign: "center",
  },
  socialButtonContainer: {
    flexDirection: "column", // Đưa nút lên xuống theo chiều dọc
    justifyContent: "center", // Căn giữa
    alignItems: "center", // Căn giữa
    marginTop: 20,
  },
  socialButtonGoogle: {
    backgroundColor: "#4285F4",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 2,
    marginTop: 10, // Tạo khoảng cách giữa nút Facebook và Google
  },
  socialButtonFacebook: {
    backgroundColor: "#3b5998",
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    elevation: 2,
  },
  socialButtonContent: {
    flexDirection: "row",
    alignItems: "center",
  },
  socialButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
    width:200
  },
});

export default SignInScreen;
