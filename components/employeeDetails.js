import { React, useState } from 'react';
import { View, TextInput, Text, Button } from 'react-native';
import department from '../data/departments.json'



const EmployeeDetails = ( {employee} ) => {
  const [isEditing, setIsEditing] = useState(false)
  const [employeeFullName, setEmployeeFullName] = useState(employee.name.split(' '))
  const employeeID = employee.id
  const [employeeFirstName, setEmployeeFirstName ] = useState(employeeFullName[0])
  const [employeeLastName, setEmployeeLastName ] = useState(employeeFullName[1])
  const [employeePhone, setEmployeePhone ] = useState(employee.phone)
  const [employeeDepartment, setEmployeeDepartment ] = useState(department[employee.department].name)
  const [employeeStreet, setEmployeeStreet ] = useState(employee.addressStreet)
  const [employeeCity, setEmployeeCity ] = useState(employee.addressCity)
  const [employeeState, setEmployeeState ] = useState(employee.addressState)
  const [employeePostCode, setEmployeePostCode ] = useState(employee.addressPostCode)
  const [employeeCountry, setEmployeeCountry ] = useState(employee.addressCountry)
  const saveFunction = () => {
    //save function here
    //implement to button below
  }

  return (
    <View>
      <View >
        <Button title="Back"/>
        <Button title={isEditing ? "Save" : "Edit"} onPress={() => setIsEditing(!isEditing)} />
      </View>
      <Text>First Name:</Text>
      <TextInput 
      value={employeeFirstName}
      onChangeText={setEmployeeFirstName}
      editable={isEditing}
      />
      <Text>Last Name:</Text>
      <TextInput 
      value={employeeLastName}
      onChangeText={setEmployeeLastName}
      editable={isEditing}
      />
      <Text>Phone Number:</Text>
      <TextInput 
      value={employeePhone}
      onChangeText={setEmployeePhone}
      editable={isEditing}
      />
      <Text>Department</Text>
      <TextInput 
      value={employeeDepartment}
      onChangeText={setEmployeeDepartment}
      editable={isEditing}
      />
      <Text>Street</Text>
      <TextInput 
      value={employeeStreet}
      onChangeText={setEmployeeStreet}
      editable={isEditing}
      />
      <Text>City</Text>
      <TextInput 
      value={employeeCity}
      onChangeText={setEmployeeCity}
      editable={isEditing}
      />
      <Text>State</Text>
      <TextInput 
      value={employeeState}
      onChangeText={setEmployeeState}
      editable={isEditing}
      />
      <Text>Post Code</Text>
      <TextInput 
      value={employeePostCode}
      onChangeText={setEmployeePostCode}
      editable={isEditing}
      />
      <Text>Country</Text>
      <TextInput 
      value={employeeCountry}
      onChangeText={setEmployeeCountry}
      editable={isEditing}
      />
    </View>
  )
}

export default EmployeeDetails