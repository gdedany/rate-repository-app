import AsyncStorage from "@react-native-async-storage/async-storage";

class AuthStorage {
  constructor(namespace = "auth") {
    this.namespace = namespace;
    this.authTokenKey = `${this.namespace}:authToken`;
  }

  async getAccessToken() {
    return await AsyncStorage.getItem(this.authTokenKey);
  }

  async setAccessToken(accessToken) {
    await AsyncStorage.setItem(this.authTokenKey, accessToken);
  }

  async removeAccessToken() {
    await AsyncStorage.removeItem(this.authTokenKey);
  }
}

export default AuthStorage;
