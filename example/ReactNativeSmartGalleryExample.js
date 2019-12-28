import React from "react";
import {
    StyleSheet,
    View
} from "react-native";
import SmartGallery from "react-native-smart-gallery";
// import SmartGallery from "./src";

import testData from "./data";

export default class ReactNativeSmartGalleryExample extends React.PureComponent {
    render() {
        // console.log("Data length total: ", testData.length);
        return (
            <View
                style={styles.container}>
                <SmartGallery
                    // index={2}
                    style={{ flex: 1, backgroundColor: "#000" }}
                    // sensitiveScroll={true}
                    images={testData}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#368FFA"
    }
});
