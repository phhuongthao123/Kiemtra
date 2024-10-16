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
          source={require("./food.png")} // Thay đổi thành đường dẫn tới hình ảnh của bạn
          style={styles.image}
        />
        <SafeAreaView style={styles.wrapper}>
          {/* Tiêu đề */}
          <Text style={styles.title}>Get your groceries with nectar</Text>

          {/* Thành phần nhập số điện thoại */}
          <PhoneInput
            ref={phoneInput}
            defaultValue={value}
            defaultCode="BD" // Quốc gia Bangladesh
            layout="first"
            onChangeText={(text) => setValue(text)}
            onChangeFormattedText={(text) => setFormattedValue(text)}
            withShadow
            autoFocus
          />

          {/* Nút 'Check' để kiểm tra hợp lệ */}
          <TouchableOpacity
            style={styles.button}
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

          {/* Hiển thị trạng thái hợp lệ */}
          {showMessage && (
            <View style={styles.message}>
              <Text style={styles.messageText}>
                {valid ? "Phone number is valid" : "Phone number is invalid"}
              </Text>
            </View>
          )}

          {/* Nút tiếp tục với Google */}
          <TouchableOpacity style={styles.socialButtonGoogle}>
            <View style={styles.socialButtonContent}>
              <Image
                source={require("./google.png")} // Thay đổi thành đường dẫn tới logo Google của bạn
                style={styles.socialIcon}
              />
              <Text style={styles.socialButtonText}>Continue with Google</Text>
            </View>
          </TouchableOpacity>

          {/* Nút tiếp tục với Facebook */}
          <TouchableOpacity style={styles.socialButtonFacebook}>
            <View style={styles.socialButtonContent}>
              <Image
                source={require("./facebook.png")} // Thay đổi thành đường dẫn tới logo Facebook của bạn
                style={styles.socialIcon}
              />
              <Text style={styles.socialButtonText}>Continue with Facebook</Text>
            </View>
          </TouchableOpacity>
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
    marginBottom: 20,
  },
  button: {
    backgroundColor: "#3498db",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
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
  socialButtonGoogle: {
    backgroundColor: "#4285F4",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  socialButtonFacebook: {
    backgroundColor: "#3b5998",
    padding: 15,
    borderRadius: 5,
    alignItems: "center",
    marginVertical: 10,
  },
  socialButtonContent: {
    flexDirection: "row",
    alignItems: "center",
    
  },
  socialIcon: {
    width: 11,
    height: 24,
    marginRight: 10,
  },
  socialButtonText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
});

export default SignInScreen;
