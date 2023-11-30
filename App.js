import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import EmployeeDetails from './components/employeeDetails'
import EMPLOYEES from './data/employees.json'
import EmployeeCard from './components/employeeCard';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer initialRouteName="home">
      <Stack.Navigator screenOptions={{
        headerStyle: {
          backgroundColor: '#941a1d'
        }, headerTintColor: '#fff'
      }}>
        <Stack.Screen name="home" options={{title: "Staff Directory"}} component={EmployeeCard}/>
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
