import "react-native";
import React from "react";
import {
    data
} from "./mocks/dataMock";
import SmartGallery from "./../src";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

it("React Native Smart Gallery renders correctly", () => {
    renderer.create(<SmartGallery images={data} />);
});
