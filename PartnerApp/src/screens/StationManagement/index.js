// src/screens/StationManagement/index.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity, Modal, TextInput } from 'react-native';
import styles from './styles';

export default function StationManagementScreen() {
  const [stations, setStations] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);
  const [newStation, setNewStation] = useState({ name: '', address: '', price: '' });

  useEffect(() => {
    // Fetch stations from API
    // This is a placeholder. Replace with actual API call.
    setStations([
      { id: '1', name: 'Station 1', address: '123 Main St', price: '10' },
      { id: '2', name: 'Station 2', address: '456 Elm St', price: '12' },
    ]);
  }, []);

  const addStation = () => {
    // Add station to API
    // This is a placeholder. Replace with actual API call.
    setStations([...stations, { id: Date.now().toString(), ...newStation }]);
    setModalVisible(false);
    setNewStation({ name: '', address: '', price: '' });
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={stations}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.stationItem}>
            <Text style={styles.stationName}>{item.name}</Text>
            <Text style={styles.stationAddress}>{item.address}</Text>
            <Text style={styles.stationPrice}>₹{item.price}/hour</Text>
          </View>
        )}
      />
      <TouchableOpacity style={styles.addButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.addButtonText}>Add Station</Text>
      </TouchableOpacity>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalView}>
          <TextInput
            style={styles.input}
            placeholder="Station Name"
            value={newStation.name}
            onChangeText={(text) => setNewStation({ ...newStation, name: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Address"
            value={newStation.address}
            onChangeText={(text) => setNewStation({ ...newStation, address: text })}
          />
          <TextInput
            style={styles.input}
            placeholder="Price per hour"
            value={newStation.price}
            onChangeText={(text) => setNewStation({ ...newStation, price: text })}
            keyboardType="numeric"
          />
          <TouchableOpacity style={styles.submitButton} onPress={addStation}>
            <Text style={styles.submitButtonText}>Add Station</Text>
          </TouchableOpacity>
        </View>
      </Modal>
    </View>
  );
}