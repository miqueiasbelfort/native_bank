import { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Switch } from 'react-native';
import { Picker } from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

//icons
import { AntDesign } from '@expo/vector-icons';

export default function App() {

  const [form, setForm] = useState(false)

  const [name, setName] = useState('')
  const [years, setYears] = useState('')
  const [sex, setSex] = useState('')
  const [limit, setLimit] = useState(350)
  const [isStudent, setIsStudent] = useState(false)

  return (
    <View style={styles.container}>
      {
        form ? (
          <View style={styles.formContainer}>
              <View style={styles.inforContent}>
                <Text style={styles.textLabel}>Primeior nome:</Text>
                <TextInput
                  placeholder='Ex: Mathues'
                  onChangeText={(name) => setName(name)}
                  style={styles.input}
                />
              </View>
              <View style={styles.inforContent}>
                <Text style={styles.textLabel}>Idade:</Text>
                <TextInput
                  placeholder='Ex: 18'
                  keyboardType='number'
                  onChangeText={(name) => setName(name)}
                  style={styles.input}
                />
              </View>
              <View style={styles.inforContent}>
                <Text style={styles.textLabel}>Sexo:</Text>
                <Picker
                  selectedValue={sex}
                  onValueChange={(itemValue, itemIndex) => setSex(itemValue)}
                  style={styles.picker}
                >
                  <Picker.Item key={1} value={'Masculino'} label="Masculino"/>
                  <Picker.Item key={2} value={'Feminino'} label="Feminino"/>
                </Picker>
              </View>
              <View style={styles.inforContent}>
                <Text style={styles.textLabel}>Escolha seu Limite: R$ {limit.toFixed(2)}</Text>
                <Slider
                  minimumValue={1}
                  maximumValue={5000}
                  onValueChange={(v) => setLimit(v)}
                  maximumTrackTintColor='#ccc' 
                  value={limit}
                  style={styles.slider}
                />
              </View>
              <View style={styles.isStudent}>
                <Text style={styles.textLabel}>Você é Estudante: {isStudent ? 'Sim' : 'Não'}</Text>
                <Switch
                  value={isStudent}
                  onValueChange={ v => setIsStudent(v)}
                  thumbColor={isStudent ? 'green' : '#fcd201'}
                  trackColor='#ccc'
                  style={styles.choiceIsStudent}
                />
              </View>
              <TouchableOpacity style={styles.btn}>
                <Text style={styles.btnText}>Criar Conta</Text>
              </TouchableOpacity>
          </View>
        ) : (
          <>
            <Text style={styles.logo}>Native Bank</Text>
            <TouchableOpacity style={styles.buttonNext} onPress={() => setForm(!form)}>
              <AntDesign name="up" size={20} color="#000" />
            </TouchableOpacity>
          </>
        )
      }

      <StatusBar style="light" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0e091b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    color: "#fff",
    fontSize: 30,
    fontWeight: "bold",
    marginBottom: 15,
  },
  buttonNext: {
    width: 50,
    height: 50,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff'
  },


  formContainer: {
    flex: 1,
    zIndex: 999,
    width: "100%",
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#0e091b',
  },
  inforContent: {
    marginTop: 20,
  },
  textLabel: {
    color: '#fff',
    fontSize: 20
  },
  input: {
    backgroundColor: '#ccc',
    width: 300,
    paddingHorizontal: 10,
    paddingVertical: 10,
  },
  picker: {
    width: 300,
    paddingHorizontal: 5,
    backgroundColor: '#ccc'
  },
  slider: {
    width: 300,
  },
  isStudent: {
    width: 300,
    marginTop: 20,
    alignItems: 'flex-start',
  },
  choiceIsStudent: {
    
  },
  btn: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    backgroundColor: '#fcd201',
    borderRadius: 5,
  },
  btnText: {
    fontSize: 18,
    fontWeight: 'bold',
  }
});
