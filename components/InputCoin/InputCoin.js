import React, { useState } from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  FlatList,
  TextInput
} from 'react-native';

export default function InputCoin({
  data,
  onSelect,
  placeholder = 'Selecione uma opção'
}) {
  const [isVisible, setIsVisible] = useState(false)
  const [selecionado, setselecionado] = useState(null)
  const [filtrar, setfiltrar] = useState('')

  const toggleDropdown = () => setIsVisible(!isVisible)

  const handleSelect = (item) => {
    setselecionado(item)
    onSelect(item)
    setfiltrar('') // limpa busca
    setIsVisible(false)
  };


  const dataFiltro = data.currencies.filter((item) =>
    item.toLowerCase().includes(filtrar.toLowerCase())
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.dropdownHeader}
        onPress={toggleDropdown}
        activeOpacity={0.8}
      >
        <Text
          style={[
            styles.headerText,
            !selecionado && styles.placeholderText
          ]}
        >
          {selecionado ? selecionado : placeholder}
        </Text>
        <Text style={styles.icon}>{isVisible ? '▲' : '▼'}</Text>
      </TouchableOpacity>

      {isVisible && (
        <View style={styles.dropdownList}>

          <TextInput
            style={styles.filtrarInput}
            placeholder="Buscar moeda..."
            value={filtrar}
            onChangeText={setfiltrar}
          />

          <FlatList
            data={dataFiltro}
            keyExtractor={(item) => item}
            nestedScrollEnabled={true}
            ListEmptyComponent={
              <Text style={styles.emptyText}>
                Nenhum resultado encontrado
              </Text>
            }
            renderItem={({ item }) => (
              <TouchableOpacity
                style={styles.dropdownItem}
                onPress={() => handleSelect(item)}
              >
                <Text style={styles.itemText}>{item}</Text>
              </TouchableOpacity>
            )}
          />
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    position: 'relative',
    zIndex: 1,
  },
  dropdownHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
  },
  headerText: {
    fontSize: 16,
    color: '#333',
  },
  placeholderText: {
    color: '#999',
  },
  icon: {
    fontSize: 16,
    color: '#666',
  },
  dropdownList: {
    position: 'absolute',
    top: '100%',
    left: 0,
    right: 0,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ccc',
    borderTopWidth: 0,
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    maxHeight: 200,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    zIndex: 1000,
  },
  filtrarInput: {
    padding: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  dropdownItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
  },
  itemText: {
    fontSize: 16,
    color: '#333',
  },
  emptyText: {
    padding: 15,
    textAlign: 'center',
    color: '#999',
  },
});