import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const CarouselComponent = ({
  menuItems,
  carouselData,
  renderCarouselItem,
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
            <View style={styles.menuItem}>
              <Image
                source={{ uri: item.image }}
                style={styles.menuImage}
                resizeMode="contain"
              />
              <Text style={styles.menuText}>{item.title}</Text>
            </View>
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
    justifyContent: "center",
    marginBottom: 20,
    marginTop: 20,
  },
  menuItem: {
    alignItems: "center",
    marginHorizontal: 10,
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
  scrollViewContent: {
    alignItems: "center",
  },
});

export default CarouselComponent;
