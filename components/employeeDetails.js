import { React, useState } from 'react';
import { View, TextInput, Text, Button, Alert, StyleSheet } from 'react-native';
import department from '../data/departments'


const EmployeeDetails = ({ route }) => {
  const { employee, employeeCount } = route.params
  const [isEditing, setIsEditing] = useState(employee ? false : true)
  const employeeID = employee ? employee.id : employeeCount + 1
  const [employeeName, setEmployeeName] = useState(employee ? employee.name : '')
  const [employeePhone, setEmployeePhone] = useState(employee ? employee.phone : '')
  const [employeeDepartment, setEmployeeDepartment] = useState(employee ? department[employee.department].name : '')
  const [employeeStreet, setEmployeeStreet] = useState(employee ? employee.addressStreet : '')
  const [employeeCity, setEmployeeCity] = useState(employee ? employee.addressCity : '')
  const [employeeState, setEmployeeState] = useState(employee ? employee.addressState : '')
  const [employeePostCode, setEmployeePostCode] = useState(employee ? employee.addressPostCode : '')
  const [employeeCountry, setEmployeeCountry] = useState(employee ? employee.addressCountry : '')
  const saveFunction = () => {
    const changedEmployee = {
      id: employeeID,
      name: employeeName,
      phone: employeePhone,
      department: parseInt(employeeDepartment),
      addressStreet: employeeStreet,
      addressCity: employeeCity,
      addressState: employeeState,
      addressPostCode: employeePostCode,
      addressCountry: employeeCountry
    }
   
    fetch('https://6569172fde53105b0dd6b349.mockapi.io/employees', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(changedEmployee)
    }).then(res => {
      if (res.ok) {
        return Alert.alert('Employee Saved')
      } else return Alert.alert('Something went wrong')
    })
    setIsEditing(false)
  }

  return (
    <View>

      <Button title={isEditing ? "Save" : "Edit"} onPress={() => isEditing ? saveFunction() : setIsEditing(!isEditing)} />
      <View >
        <Text style={styles.all}>Name:</Text>
        <TextInput
          style={styles.input}
          value={employeeName}
          onChangeText={setEmployeeName}
          editable={isEditing}
        />
        <Text style={styles.all}>Phone Number:</Text>
        <TextInput style={styles.input}
          value={employeePhone}
          onChangeText={setEmployeePhone}
          editable={isEditing}
        />
        <Text style={styles.all}>Department</Text>
        <TextInput style={styles.input}
          value={employeeDepartment}
          onChangeText={setEmployeeDepartment}
          editable={isEditing}
        />
        <Text style={styles.all}>Street</Text>
        <TextInput style={styles.input}
          value={employeeStreet}
          onChangeText={setEmployeeStreet}
          editable={isEditing}
        />
        <Text style={styles.all}>City</Text>
        <TextInput style={styles.input}
          value={employeeCity}
          onChangeText={setEmployeeCity}
          editable={isEditing}
        />
        <Text style={styles.all}>State</Text>
        <TextInput style={styles.input}
          value={employeeState}
          onChangeText={setEmployeeState}
          editable={isEditing}
        />
        <Text style={styles.all}>Post Code</Text>
        <TextInput style={styles.input}
          value={employeePostCode}
          onChangeText={setEmployeePostCode}
          editable={isEditing}
        />
        <Text style={styles.all}>Country</Text>
        <TextInput style={styles.input}
          value={employeeCountry}
          onChangeText={setEmployeeCountry}
          editable={isEditing}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    padding: 10,
    borderWidth: 1
  },
  all: {
    fontSize: 18
  }
});

export default EmployeeDetails