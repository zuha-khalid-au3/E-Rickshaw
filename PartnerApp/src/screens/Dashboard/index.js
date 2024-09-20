// src/screens/Dashboard/index.js
import React from 'react';
import { View, Text, TouchableOpacity, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import styles from './styles';

const MenuButton = ({ icon, label, onPress }) => (
  <TouchableOpacity style={styles.menuItem} onPress={onPress}>
    <Ionicons name={icon} size={24} color="#007AFF" />
    <Text style={styles.menuLabel}>{label}</Text>
  </TouchableOpacity>
);

export default function DashboardScreen({ navigation }) {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Station Management</Text>
      </View>
      <View style={styles.menuGrid}>
        <MenuButton icon="cube-outline" label="Assets" onPress={() => {/* Navigate to Assets */}} />
        <MenuButton icon="document-text-outline" label="Swap Record" onPress={() => {/* Navigate to Swap Record */}} />
        <MenuButton icon="sync-outline" label="Swap Summary" onPress={() => {/* Navigate to Swap Summary */}} />
        <MenuButton icon="pulse-outline" label="Station Health Report" onPress={() => {/* Navigate to Station Health Report */}} />
        <MenuButton icon="swap-horizontal-outline" label="Request a Swap" onPress={() => {/* Navigate to Request a Swap */}} />
        <MenuButton icon="calendar-outline" label="Schedule Leave" onPress={() => {/* Navigate to Schedule Leave */}} />
        <MenuButton icon="location-outline" label="Nearest BSS" onPress={() => {/* Navigate to Nearest BSS */}} />
        <MenuButton icon="person-outline" label="Station Operator" onPress={() => {/* Navigate to Station Operator */}} />
        <MenuButton icon="help-circle-outline" label="Missed Swap" onPress={() => {/* Navigate to Missed Swap */}} />
      </View>
      
      <View style={styles.header}>
        <Text style={styles.headerText}>Payment Management</Text>
      </View>
      <View style={styles.menuGrid}>
        <MenuButton icon="wallet-outline" label="Smart Balance" onPress={() => {/* Navigate to Smart Balance */}} />
        <MenuButton icon="people-outline" label="Refer & Earn" onPress={() => {/* Navigate to Refer & Earn */}} />
        <MenuButton icon="receipt-outline" label="Billing & Invoice" onPress={() => {/* Navigate to Billing & Invoice */}} />
      </View>
    </ScrollView>
  );
}