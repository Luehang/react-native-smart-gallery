<a href="https://luehangs.site"><img src="https://luehangs.site/images/lh-blog-strip.jpg" alt="LueHsoft LueH LABS Lue Hang luehang"/></a>
<br/>
<br/>

<h1 align="center">
    React Native Smart Gallery
</h1>

An easy and simple to use React Native component to render a large to very large list of swipable high performant pages with intelligent guestures responder to cushion rough guestures and detect gestures like pan, pinch and double tap. Supporting both iOS and Android. Check out the [docs](https://www.luehangs.site/lue_hang/projects/react-native-smart-gallery).

- Supports smart or minimal rendering for **very large lists** or small.
- Recommended and best used for large lists or used with other touch guestures.
- Includes guestures and important event listeners for pan, pinch, single tap and double tap.
- Includes zoom mode.
- Initial index can be placed anywhere. Supporting both Android and iOS.
- Easily customizable.
- Intelligent scrolling detection to cushion rough swipe guestures.
- Supports both iOS and Android.

<h3 align="center">
    Motivation
</h3>

**Why was this created?**  In the open source development community, there isn't a single React Native gallery that can efficiently render a very large list of images with the initial index being placed anywhere in the list of images while supporting both Android and iOS. This gallery solves all that along with gestures and important event listeners for pan, pinch, single tap and double tap.

<br/>

---
<br/>

<h1 align="center">
    <a href="https://www.luehangs.site/lue_hang/projects/react-native-smart-gallery">
        <img src="https://www.luehangs.site/videos/react-native-smart-gallery-demo.gif" alt="react-native-smart-gallery"/>
    </a>
</h1>

<br/>
<br/>

# :link: Quick Links
- [Documentation](https://www.luehangs.site/lue_hang/projects/react-native-smart-gallery)
- [Mobile Kit Marketplace](https://luehangs.site/marketplace/mobile-development)
- [React Native Development How To Dos](https://luehangs.site/blogs/react-native-development)
- [Chat](https://luehangs.site)

<br/>

---
<br/>

# :gem: Install

Type in the following to the command line to install the module.

```bash
$ npm install --save react-native-smart-gallery
```

or

```bash
$ yarn add react-native-smart-gallery
```

<br/>
<br/>
<br/>

---
<br/>
<br/>
<br/>

## :tada: Usage Example

Add an ``import`` to the top of the file.  At minimal, declare the `SmartGallery` component in the `render()` method providing an array of data for the `images` prop.

```javascript
import SmartGallery from "react-native-smart-gallery";

//...
render() {
    return (
        <SmartGallery
            images={[
                // Can be used with different image object fieldnames.
                // Ex. source, source.uri, uri, URI, url, URL
                { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg" },
                { source: { uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg" } },
                { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg" },
                { URI: "https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg" },
                { url: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg" },
                { URL: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg" },
            ]}
            // onEndReached={() => {
            //     // add more images when scroll reaches end
            // }}
        />
    );
}
//...
```

<br/>
<br/>
<br/>

---
<br/>
<br/>
<br/>

## :tada: Performance Optimization List Example

```javascript
import SmartGallery from "react-native-smart-gallery";

//...
render() {
    return (
        <SmartGallery
            images={[
                { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg",
                    // Optional: Adding a dimensions or height and
                    // width field with the actual width and height
                    // for REMOTE IMAGES will help improve performance.
                    dimensions: { width: 1080, height: 1920 } },
                { uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-women-beauty-40901.jpg",
                    dimensions: { width: 1080, height: 1920 } },
                { uri: "https://luehangs.site/pic-chat-app-images/animals-avian-beach-760984.jpg",
                    dimensions: { width: 1080, height: 1920 } },
                { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-fishnet-stockings-48134.jpg",
                    dimensions: { width: 1080, height: 1920 } },
                { uri: "https://luehangs.site/pic-chat-app-images/beautiful-beautiful-woman-beauty-9763.jpg",
                    dimensions: { width: 1080, height: 1920 } },
                { uri: "https://luehangs.site/pic-chat-app-images/attractive-balance-beautiful-186263.jpg",
                    dimensions: { width: 1920, height: 1080 } },
                // ...
                // ...
                // ...
            ]}
            // onEndReached={() => {
            //     // add more images when scroll reaches end
            // }}
            // Change this to render how many items before and after it.
            loadMinimal={true}
            loadMinimalSize={2}
            // Turning this off will make it feel faster
            // and prevent the scroller to slow down
            // on fast swipes.
            sensitiveScroll={false}
        />
    );
}
//...
```

## :tada: Toolbar usage example

Sometimes you would want some custom touchable elements with your image component. This is the way you can use touchable elements. You can add custom styles, etc. To style image container use ```imageContainerStyle``` prop.

```javascript
import SmartGallery from "react-native-smart-gallery";

//...
render() {
    return (
        <SmartGallery
            images={[
                { uri: "https://luehangs.site/pic-chat-app-images/beautiful-blond-blonde-hair-478544.jpg",
            ]}
            toolbarItem={() => (
                <View>
                    <TouchableOpacity
                        onPress={() => console.log('toolbar button pressed')}
                    >
                        <Text>Toolbar button</Text>
                    </TouchableOpacity>
                </View>
            )}
        />
    );
}
//...
```

<br/>

---
<br/>

# :book: Full Documentation

Learn more about the installation and how to use this package in the updated [documentation](https://www.luehangs.site/lue_hang/projects/react-native-smart-gallery) page.

<br/>
<br/>
<br/>

---
<br/>
<br/>
<br/>

## :santa: Author

<a href="https://www.facebook.com/lue.hang">
<img src="https://www.luehangs.site/images/lue-hang2018-circle-150px.png"/>
</a>

Free and made possible along with costly maintenance and updates by [Lue Hang](https://www.facebook.com/lue.hang) (the author).

<br/>
<br/>
<br/>

---
<br/>
<br/>
<br/>

## :clap: Contribute

[Pull requests](https://github.com/Luehang/react-native-smart-gallery/pulls) are welcomed.

<br/>

### :tophat: Contributors

Contributors will be posted here.

<br/>

### :baby: Beginners

Not sure where to start, or a beginner? Take a look at the [issues page](https://github.com/Luehang/react-native-smart-gallery/issues).

<br/>
<br/>
<a href="https://luehangs.site/marketplace/product/RN%20Posting%20Demo%20App%20Kit"><img src="https://luehangs.site/images/lh-mobile-strip.jpg" alt="LueHsoft LueH LABS Lue Hang luehang"/></a>
<br/>
<br/>

## :page_facing_up: License

MIT © [Lue Hang](https://luehangs.site), as found in the LICENSE file.
