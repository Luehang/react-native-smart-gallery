import { View, TouchableOpacity, Text } from "react-native";
import React from "react";
import {
    data
} from "./mocks/dataMock";
import SmartGallery from "../src/index";

// Note: test renderer must be required after react-native.
import renderer from "react-test-renderer";

describe("React Native Smart Gallery", () => {
    it("should render correctly", () => {
        renderer.create(<SmartGallery images={data} />);
    });

    it("should render toolbar correctly", () => {
        const r = renderer.create(<SmartGallery
            images={data} 
            toolbarItem={() => (
                <View>
                    <TouchableOpacity
                        onPress={() => jest.fn()}
                    >
                        <Text>Toolbar button</Text>
                    </TouchableOpacity>
                </View>
            )}
        />);
        expect(JSON.stringify(r.toJSON())).toMatch(new RegExp("Toolbar button"));
    });

    it("should consume image container styles", () => {
        const r = renderer.create(<SmartGallery
            images={data}
            imageContainerStyle={{ backgroundColor: "#f1f2f3" }}
        />);
        expect(r.toJSON())
            .toHaveProperty("props.imageContainerStyle.backgroundColor", "#f1f2f3");
    });
});
