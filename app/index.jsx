import { View, Text, StyleSheet, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { Link } from 'expo-router'
import icedCoffeImg from "@/assets/images/icedCoffeImg.png"


const app = () => {
  return (
    <View style={styles.container}>
      <ImageBackground 
      source={icedCoffeImg}
      resizeMode='cover'
      style={styles.backgroundImage}  
      >
      <Text style={styles.title}>Coffee Shop</Text>

      {/* how to insert a link  */}

      {/* <Link href="/explore" style={styles.link}>
        <Text style={styles.title}>View Menu</Text>
      </Link>
       */}

       {/* how to insert a button using aschild prop*/}

      <Link href="/explore" style={{
        marginHorizontal: 'auto',
      }} asChild>
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>View Menu</Text>
      </Pressable>
      </Link>

       </ImageBackground>
    </View>
  )
}

export default app



// styles
const styles =  StyleSheet.create({
  container : {
    flex: 1,
    flexDirection: 'column',

  },


  backgroundImage: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    resizeMode: 'cover',
    alignItems: 'center',
    backgroundColor: '#457B9D',
  },

  title: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: 'white',
    backgroundColor: 'rgba(0,0,0,0.5)',
    marginBottom: 120,
  },

  link: {
    fontSize: 42,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 10,
    color: 'white',
    textDecorationLine: 'underline',
    backgroundColor: 'rgba(0,0,0,0.5)',
    padding: 4,
  },

  button: {
    height: 60,
    borderRadius: 20,
    backgroundColor: 'rgba(0,0,0,0.75)',
    padding: 6,
    justifyContent: 'center',

  },

  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: 'white',
    padding: 4,
  }
})