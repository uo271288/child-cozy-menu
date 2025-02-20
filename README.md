# Child Cozy Menu Documentation

## Overview
`Child Cozy Menu` is a reusable React Native component that provides a horizontally scrollable carousel with a menu for selecting different sets of items. It allows customization through render props and click handlers.

## Props

| Prop Name            | Type        | Description |
|----------------------|------------|-------------|
| `menuItems`         | `Array`    | List of menu items displayed at the top. |
| `carouselData`      | `Array`    | An array of arrays, where each nested array represents a set of carousel items corresponding to a menu item. |
| `renderCarouselItem` | `Function` | A function that renders each item in the carousel. Receives an item as an argument. |
| `renderMenuItems`    | `Function` | A function that renders each menu item. Receives an item as an argument. |
| `onMenuItemClick`    | `Function` | Callback function triggered when a menu item is clicked. Receives the selected index as an argument. |
| `onCarouselItemClick` | `Function` | Callback function triggered when a carousel item is clicked. Receives the selected item as an argument. |

## Usage Example

```jsx
import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import DetailPage from "./components/detail.component";
import { View, Text, Dimensions, StyleSheet, Image, Alert } from "react-native";
import CarouselComponent from "child-cozy-menu";

const Stack = createStackNavigator();

const { width } = Dimensions.get("window");
const ITEM_WIDTH = width * 0.25;
const ITEM_HEIGHT = 300;

const menuItems = [
  { title: "Representation 1", image: "https://picsum.photos/id/237/200" },
  { title: "Representation 2", image: "https://picsum.photos/id/42/200" },
  { title: "Representation 3", image: "https://picsum.photos/id/325/200" },
  { title: "Representation 4", image: "https://picsum.photos/id/3/200" },
];

const carouselData = {
  0: [
    { title: "Item 1A" },
    { title: "Item 2A" },
    { title: "Item 3A" },
    { title: "Item 4A" },
    { title: "Item 5A" },
    { title: "Item 6A" },
    { title: "Item 7A" },
    { title: "Item 8A" },
  ],
  1: [
    { title: "Item 1B" },
    { title: "Item 2B" },
    { title: "Item 3B" },
    { title: "Item 4B" },
    { title: "Item 5B" },
    { title: "Item 6B" },
  ],
  2: [
    { title: "Item 1C" },
    { title: "Item 2C" },
    { title: "Item 3C" },
    { title: "Item 4C" },
  ],
  3: [{ title: "Item 1D" }, { title: "Item 2D" }],
};

const renderCard = (item) => (
  <View style={styles.card}>
    <Text style={styles.cardText}>{item.title}</Text>
  </View>
);

const renderFilters = (item) => (
  <View style={styles.menuItem}>
    <Image
      source={{ uri: item.image }}
      style={styles.menuImage}
      resizeMode="contain"
    />
    <Text style={styles.menuText}>{item.title}</Text>
  </View>
);

const handleRepresentationClick = (index) => {
  console.log("Representation clicked:", index);
};

const handleCardClick = (item, navigation) => {
  console.log("Card clicked:", item);
  //navigation.navigate("DetailPage", { item });
  Alert.alert("Alert Title", "My Alert Msg", [
    {
      text: "Cancel",
      onPress: () => console.log("Cancel Pressed"),
      style: "cancel",
    },
    { text: "OK", onPress: () => console.log("OK Pressed") },
  ]);
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home">
          {(props) => (
            <CarouselComponent
              {...props}
              menuItems={menuItems}
              carouselData={carouselData}
              renderCarouselItem={renderCard}
              renderMenuItems={renderFilters}
              onMenuItemClick={handleRepresentationClick}
              onCarouselItemClick={(item) =>
                handleCardClick(item, props.navigation)
              }
            />
          )}
        </Stack.Screen>
        <Stack.Screen name="DetailPage" component={DetailPage} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  card: {
    width: ITEM_WIDTH,
    height: ITEM_HEIGHT,
    backgroundColor: "#8498db",
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    marginHorizontal: 10,
    shadowColor: "#000",
    shadowOpacity: 0.5,
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 5,
    elevation: 5,
  },
  cardText: {
    color: "white",
    fontSize: 20,
    fontWeight: "bold",
  },
  menuItem: {
    alignItems: "center",
    marginHorizontal: 10,
    marginVertical: 10,
  },
  menuImage: {
    width: 75,
    height: 75,
  },
  menuText: {
    marginTop: 5,
    fontSize: 14,
    textAlign: "center",
  },
});

export default App;
```

## Styles

The component applies basic styling:
- `container`: Centers the menu and carousel.
- `menu`: Displays menu items in a row with wrapping.
- `scrollViewContent`: Aligns items in the horizontal scroll view.

## Dependencies
- `react`
- `react-native`

## Notes
- Ensure that `menuItems` and `carouselData` are synchronized, meaning each menu item should have a corresponding array of carousel items.
- Make sure `renderMenuItems` and `renderCarouselItem` return valid React Native elements.

## License
ISC

