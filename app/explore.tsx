import { View, Text, StyleSheet, ScrollView, Image, Pressable } from 'react-native'
import React, { useState } from 'react'
import { Link } from 'expo-router'
import coffeeImage from "../assets/images/icedCoffeImg.png";


// You'll need to import your images here
// import coffeeImage from "@/assets/images/coffee.png"  // Add your image

const MenuItems = [
  {
    id: '1',
    name: 'Espresso',
    price: '3.50',
    description: 'Strong brewed coffee',
    image: coffeeImage,
  },
  {
    id: '2',
    name: 'Cappuccino',
    price: '4.50',
    description: 'Espresso with steamed milk foam',
    image: coffeeImage,
  },
  {
    id: '3',
    name: 'Latte',
    price: '4.00',
    description: 'Espresso with steamed milk',
    image: coffeeImage,
  },
]

const Categories = ['Hot Coffee', 'Iced Coffee', 'Pastries', 'Snacks']

const MenuScreen = () => {
  const [selectedCategory, setSelectedCategory] = useState('Hot Coffee')

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Menu</Text>

      {/* Categories */}
      <ScrollView 
        horizontal 
        showsHorizontalScrollIndicator={false}
        style={styles.categoriesContainer}
      >
        {Categories.map((category) => (
          <Pressable
            key={category}
            style={[
              styles.categoryButton,
              selectedCategory === category && styles.selectedCategory
            ]}
            onPress={() => setSelectedCategory(category)}
          >
            <Text style={[
              styles.categoryText,
              selectedCategory === category && styles.selectedCategoryText
            ]}>
              {category}
            </Text>
          </Pressable>
        ))}
      </ScrollView>

      {/* Menu Items */}
      <ScrollView style={styles.menuList}>
        {MenuItems.map((item) => (
          <View key={item.id} style={styles.menuItem}>
            <Image
              source={item.image}
              style={styles.itemImage}
            />
            <View style={styles.itemInfo}>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemDescription}>{item.description}</Text>
              <Text style={styles.itemPrice}>${item.price}</Text>
            </View>
          </View>
        ))}
      </ScrollView>

      <Link href="/" style={styles.backButtonContainer} asChild>
        <Pressable style={styles.backButton}>
          <Text style={styles.backButtonText}>Back to Home</Text>
        </Pressable>
      </Link>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    paddingTop: 50,
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    textAlign: 'left',
    marginHorizontal: 20,
    marginBottom: 20,
  },
  categoriesContainer: {
    paddingHorizontal: 20,
    marginBottom: 20,
  },
  categoryButton: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginRight: 10,
    borderRadius: 20,
    backgroundColor: '#f0f0f0',
  },
  selectedCategory: {
    backgroundColor: '#000',
  },
  categoryText: {
    fontSize: 16,
    color: '#333',
  },
  selectedCategoryText: {
    color: 'white',
  },
  menuList: {
    flex: 1,
    paddingHorizontal: 20,
  },
  menuItem: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  itemImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  itemInfo: {
    flex: 1,
    marginLeft: 15,
  },
  itemName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  itemDescription: {
    fontSize: 14,
    color: '#666',
    marginBottom: 5,
  },
  itemPrice: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
  },
  backButtonContainer: {
    margin: 20,
  },
  backButton: {
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 15,
    borderRadius: 20,
    alignItems: 'center',
  },
  backButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
})

export default MenuScreen