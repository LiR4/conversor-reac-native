import React, { use, useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TouchableOpacity, View, TextInput } from 'react-native';
import InputCoin from './components/InputCoin/InputCoin';
import coins from './assets/Data/coins.json';



export default function App() {

  const [valor, setValor] = useState(null)

  const [firstCoin, setfirstCoin] = useState(null)
  const [secondCoin, setsecondCoin] = useState(null)
  const [cambio, setCambioo] = useState(null)


  const [openDropdown, setOpenDropdown] = useState(null)

  const key = 'XL89LFgeWPhfIwgPt0z3KEeZjile4bIebTJajctKWSyJ5UifiP0SZcOrNNJl7JpG'

  async function callApi() {
    try {
      const response = await fetch(
        `https://api.unirateapi.com/api/convert?api_key=${key}&amount=${valor}&from=${firstCoin}&to=${secondCoin}`
      );

      const conversao = await response.json();
      setCambioo(conversao['result'].toFixed(2))

      console.log(conversao)
    }
    catch{
      console.error('Erro ao buscar cotação:', error);
    }
  }

  return (
    <SafeAreaView style={styles.container}>

      <View style={styles.bigTitleView}>
        <Text style={styles.bigTitle}>
          Selecione as moedas para converter !!
        </Text>
      </View>

      <Text style={styles.title}>Valor</Text>

      <View >
        <TextInput style={styles.input}
          placeholder='Insira o valor a ser convertido'
          onChangeText={setValor}
          keyboardType="numeric"
        />
      </View>


      <Text style={styles.title}>Moeda base</Text>

      <InputCoin
        data={coins}
        isOpen={openDropdown === 'from'}
        onToggle={() =>
          setOpenDropdown(openDropdown === 'from' ? null : 'from')
        }
        onSelect={(item) => {
          setfirstCoin(item);
          setOpenDropdown(null);
        }}
        placeholder="Escolha a moeda origem"
      />

      <View style={styles.space} />

      <Text style={styles.title}>Para moeda</Text>

      <InputCoin
        data={coins}
        isOpen={openDropdown === 'to'}
        onToggle={() =>
          setOpenDropdown(openDropdown === 'to' ? null : 'to')
        }
        onSelect={(item) => {
          setsecondCoin(item);
          setOpenDropdown(null);
        }}
        placeholder="Escolha a moeda destino"
      />

      {firstCoin && secondCoin && (
        <View style={styles.resultBox}>
          <Text style={styles.resultText}>
            Converter de {firstCoin} para {secondCoin} é equivalente: {cambio ? cambio : '-'} {secondCoin}
          </Text>
        </View>
      )}

              
      <View style={styles.btnView}>
        {firstCoin && secondCoin && (
          <TouchableOpacity style={styles.btn} onPress={callApi}>
            <Text style={styles.btnText}>Converter</Text>
          </TouchableOpacity>
        )}
      </View>
      

    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: '8px',
    padding: 10,
    justifyContent: 'center',
    backgroundColor: '#f5f5f5',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  space: {
    height: 150,
  },
  dropdownContainer: {
    zIndex: 1,
  },
  dropdownHeader: {
    padding: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    backgroundColor: '#fff',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 16,
  },
  placeholderText: {
    color: '#999',
  },
  dropdownList: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    maxHeight: 200,
    zIndex: 1000,
  },
  searchInput: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  emptyText: {
    padding: 10,
    textAlign: 'center',
    color: '#999',
  },
  resultBox: {
    marginTop: 30,
    padding: 15,
    backgroundColor: '#e6f7ff',
    borderRadius: 8,
  },

  bigTitleView:{
    margin: '20px',
    alignItems: 'center'
  },

  bigTitle:{
    color: '#0675DF',
    fontSize: '20px',
    fontWeight: 'bold'
  },

  input:{
    height: 40,
    borderWidth: 1,       
    borderColor: 'gray',  
    padding: 10,
    borderRadius: 5, 
    marginBottom: '5px'
  }, 

  resultText: {
    fontSize: 16,
  },

  btnView: {
    margin: '80px',
    alignItems: 'center'
  },
  
  btn: {
    padding: '10px',
    backgroundColor: '#000',
    borderRadius: '5px'
  },

  btnText: {
    color: '#fff'
  }

});