import { React } from 'react';
import { View, Text, StyleSheet, Image, Pressable } from 'react-native';
import department from '../data/departments.json'
import EMPLOYEES from '../data/employees.json'

const EmployeeCard = ({ navigation }) => {

const employeeList = EMPLOYEES

  return (
    <View style={{ padding: 5 }}>
      {employeeList.map((employee) => {
        <><View style={{ flex: 4 }}>
          <Text style={styles.nametext}>{employee.name}</Text>
          <Text style={styles.departmenttext}>{department[employee.department].name}</Text>
        </View>
        <View style={{ flex: 1 }}>
          <Pressable onPress={() => {navigation.navigate('Details', { key: employee.id })}}>
            <Image source={'../assets/rightarrow.png'} style={styles.image} />
          </Pressable>
        </View></>
      })}

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