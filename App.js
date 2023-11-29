import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import EmployeeDetails from './components/employeeDetails'
import EMPLOYEES from './data/employees.json'

export default function App() {
  return (
    <View>
      <EmployeeDetails employee={EMPLOYEES[1]}></EmployeeDetails>
      <Text>Hello</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
