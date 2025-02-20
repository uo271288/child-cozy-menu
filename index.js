import React, { useState } from "react";
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";

const CarouselComponent = ({
  menuItems,
  carouselData,
  renderCarouselItem,
  renderMenuItems,
  onMenuItemClick,
  onCarouselItemClick,
}) => {
  const [carouselItems, setCarouselItems] = useState(carouselData[0]);

  const handleMenuItemClick = (index) => {
    setCarouselItems(carouselData[index]);
    onMenuItemClick(index);
  };

  const handleItemClick = (item) => {
    onCarouselItemClick(item);
  };

  return (
    <View style={styles.container}>
      <View style={styles.menu}>
        {menuItems.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() => handleMenuItemClick(index)}
          >
            {renderMenuItems(item)}
          </TouchableOpacity>
        ))}
      </View>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={true}
        contentContainerStyle={styles.scrollViewContent}
      >
        {carouselItems.map((item, index) => (
          <TouchableOpacity key={index} onPress={() => handleItemClick(item)}>
            {renderCarouselItem(item)}
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  menu: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    width: "80%",
    marginBottom: 20,
    marginTop: 20,
  },
  scrollViewContent: {
    alignItems: "center",
  },
});

export default CarouselComponent;
