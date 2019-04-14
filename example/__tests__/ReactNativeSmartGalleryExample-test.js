import "react-native";
import React from "react";
import ReactNativeSmartGalleryExample from "../ReactNativeSmartGalleryExample.js";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("React Native Smart Gallery Example renders correctly", () => {
    renderer.create(<ReactNativeSmartGalleryExample/>);
});
