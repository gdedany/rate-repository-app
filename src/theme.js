import { Platform } from "react-native";
const theme = {
  colors: {
    textPrimary: "#24292e",
    textSecondary: "#586069",
    danger: "#d73a4a",
    textWhite: "#fff",
    primary: "#0366d6",
    appBar: "#605F5E",
    mainBackground: "#e1e4e8",
    cardBackground: "#fff",
  },
  paddings: {
    basicPadding: "10",
    appBarItem: "10",
  },

  fontSizes: {
    body: 14,
    subheading: 16,
    heading: 18,
  },
  fonts: {
    main: Platform.select({
      android: "Roboto",
      ios: "Arial",
      default: "System",
    }),
  },
  fontWeights: {
    normal: "400",
    bold: "700",
  },
};

export default theme;
