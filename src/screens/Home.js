import React, { useEffect, useState } from 'react';
import { FlatList, Text, View, Image, TouchableOpacity, StyleSheet, Button } from 'react-native';
import Cart from './Cart'

export default Home = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState([]);

  const getData = () => {
    fetch('https://api.itbook.store/1.0/search/mongodb')
      .then((response) => response.json())
      .then((json) => setData(json))
      .catch((error) => console.error(error))
      .finally(() => setIsLoading(false));
  }

  useEffect(() => {
    getData()
  }, []);

  

  return (
    <View style={styles.main}>
      {isLoading ? <Text style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>Loading...</Text> :
        (<View style={styles.container}>
          <Text style={styles.headerText}>BOOKS</Text>
          <FlatList
            data={data.books}
            keyExtractor={(title, page, index) => page}
            renderItem={({ item }) => (
              <View style={styles.cardContainer}>
                <Text style={styles.titleText}>{item.title}</Text>
                <View style={styles.imgContainer}>
                  <Image source={{ uri: item.image }} style={styles.img} />
                  <Text style={styles.subTitleText}>{item.subtitle}</Text>
                  <Text style={styles.priceText}>{item.price}</Text>
                  <TouchableOpacity
                     activeOpacity={.5}
                     style={styles.addCart}>
                    <Text style={styles.addCartText}>Add To Cart</Text>
                  </TouchableOpacity>
                </View>
              </View>
            )}
          />
        </View>
        )}
    </View>
  );
};


const styles = StyleSheet.create({
  main: {
    flex: 1,
    padding: 10
  },
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
  headerText: {
    padding: 10,
    width: '100%',
    fontSize: 20,
    color: '#4e4f4f',
    textAlign: 'center',
    fontWeight: 'bold',
    backgroundColor: '#c3e6e1'
  },
  cardContainer: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: 'green',
    borderWidth: 1,
    marginTop: 15,
  },
  titleText: {
    fontWeight: 'bold',
    color: '#000',
    marginTop: 15,
    fontSize: 20,
  },
  imgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 325,
    height: 350
  },
  priceText: {
    marginTop: 10,
    fontSize: 18,
    marginBottom: 10,
    color: '#0fdb13'
  },
  addCartText: {
    flexDirection: 'row',
    color: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    padding: 10,
    
  },
  subTitleText:{
    fontSize: 15,
  },
  addCart: {
    borderWidth: 1,
    backgroundColor: '#0fdb13',
    borderRadius: 5,
    marginBottom:15,
    borderColor:'#0fdb13',
  }

})