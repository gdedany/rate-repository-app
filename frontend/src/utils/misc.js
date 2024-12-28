import { Linking } from "react-native";
import format from "date-fns/format";
export const openExternalLink = (url) => {
  Linking.openURL(url);
};

export const parseDate = (date) => {
  return format(new Date(date), "MM/dd/yyyy");
};
