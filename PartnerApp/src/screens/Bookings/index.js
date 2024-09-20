// src/screens/Bookings/index.js
import React, { useState, useEffect } from 'react';
import { View, Text, FlatList, TouchableOpacity } from 'react-native';
import styles from './styles';

export default function BookingsScreen() {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    // Fetch bookings from API
    // This is a placeholder. Replace with actual API call.
    setBookings([
      { id: '1', driverName: 'John Doe', station: 'Station 1', time: '2:00 PM', status: 'Pending' },
      { id: '2', driverName: 'Jane Smith', station: 'Station 2', time: '3:30 PM', status: 'Confirmed' },
    ]);
  }, []);

  const handleBookingAction = (id, action) => {
    // Update booking status in API
    // This is a placeholder. Replace with actual API call.
    setBookings(bookings.map(booking => 
      booking.id === id ? {...booking, status: action === 'accept' ? 'Confirmed' : 'Rejected'} : booking
    ));
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={bookings}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.bookingItem}>
            <Text style={styles.driverName}>{item.driverName}</Text>
            <Text style={styles.bookingDetails}>{item.station} - {item.time}</Text>
            <Text style={[styles.bookingStatus, { color: item.status === 'Confirmed' ? 'green' : item.status === 'Rejected' ? 'red' : 'orange' }]}>
              {item.status}
            </Text>
            {item.status === 'Pending' && (
              <View style={styles.actionButtons}>
                <TouchableOpacity style={[styles.actionButton, styles.acceptButton]} onPress={() => handleBookingAction(item.id, 'accept')}>
                  <Text style={styles.actionButtonText}>Accept</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.actionButton, styles.rejectButton]} onPress={() => handleBookingAction(item.id, 'reject')}>
                  <Text style={styles.actionButtonText}>Reject</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        )}
      />
    </View>
  );
}