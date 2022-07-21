// husk at installeret react-native-webview
// https://www.c-sharpcorner.com/article/convert-your-website-into-a-mobile-app-with-react-native/
// I expo, brug den midster valgmulighed "LAN".
// Dernæst, åben en iOS eller Android simulator.

import * as React from "react";
import { WebView } from "react-native-webview";
export default class App extends React.Component {
  render() {
    return (
      <WebView
        source={{
          uri: "https://vannilla-js-basic-project-22-products.netlify.app/", //Indsæt link
        }}
        style={{ marginTop: 20 }}
      />
    );
  }
}
