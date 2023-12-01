import { StatusBar } from 'expo-status-bar';
import  React, { useState, useEffect } from 'react'
import { StyleSheet, Text, View, ActivityIndicator, FlatList } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EmployeeDetails from './components/employeeDetails'
import EmployeeCard from './components/employeeCard';

Stack = createNativeStackNavigator();

export default function App() {
  const [isLoading, setLoading] = useState(true)
  const [data, setData] = useState([])

  const getEmployees = async () => {
    try {
      const response = await fetch('https://6569172fde53105b0dd6b349.mockapi.io/employees');
      const json = await response.json();
      setData(json);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    getEmployees();
  }, []);

  return (


       <NavigationContainer initialRouteName="home">
          <Stack.Navigator screenOptions={{
            headerStyle: {
              backgroundColor: '#941a1d'
            }, headerTintColor: '#fff'
          }}>
            <Stack.Screen name="home" options={{title: "Staff Directory"}}>
              {() => <EmployeeCard data={data} />}
            </Stack.Screen>
            <Stack.Screen name="details" options={{ title: "Employee Details", }} component={EmployeeDetails}/>
          </Stack.Navigator>
        </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
});
