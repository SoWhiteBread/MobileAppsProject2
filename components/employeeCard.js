import { React, useState, useCallback } from 'react';
import { useNavigation } from '@react-navigation/native';
import { View, Text, StyleSheet, Image, Pressable, FlatList, Button } from 'react-native';
import department from '../data/departments'

const EmployeeCard = ({ data }) => {

  const navigation = useNavigation()
  const count = data.length
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = useCallback(() => {
    setRefreshing(true);
    setTimeout(() => {
      setRefreshing(false);
    }, 2000);
  }, []);

  return (
    <View>
    <FlatList
      data={data}
      renderItem={({ item }) => (<View style={{ padding: 15 }}>
        <Pressable style={{flex : 1, flexDirection: 'row'}} onPress={() => { navigation.navigate('details', { employee: item }) }}>
          <View style={{ flex: 4 }}>
            <Text style={styles.nametext}>{item.name}</Text>
            <Text style={styles.departmenttext}>{department[item.department].name}</Text>
          </View>
          <View style={{ flex: 1, alignContent: 'center' }}>
            <Image source={require('../assets/rightarrow.png')} style={styles.image} />
          </View>
        </Pressable>
      </View>)}
      keyExtractor={item => item.id}
      onRefresh={onRefresh}
      refreshing={refreshing}
    />
    <Button title={'Add New Employee'} onPress={() => {navigation.navigate('details', {employeeCount: count})}}/>
    </View>
  )
}

const styles = StyleSheet.create({
  nametext: { fontSize: 20 },
  departmenttext: { fontSize: 16 },
  image: {
    width: 25,
    height: 25
  }
})

export default EmployeeCard