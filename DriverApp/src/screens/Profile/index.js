// src/screens/Profile/index.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';

export default function ProfileScreen() {
  const [user, setUser] = useState(null);
  const [aadharImage, setAadharImage] = useState(null);

  useEffect(() => {
    // Fetch user data from API
    // This is a placeholder. Replace with actual API call.
    setUser({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+91 1234567890'
    });
  }, []);

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setAadharImage(result.uri);
      // Here you would typically upload the image to your server
      // uploadImageToServer(result.uri);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <Image
          style={styles.profilePic}
          source={{ uri: 'https://via.placeholder.com/150' }}
        />
        <Text style={styles.name}>{user?.name}</Text>
      </View>
      <View style={styles.infoSection}>
        <Text style={styles.infoText}>Email: {user?.email}</Text>
        <Text style={styles.infoText}>Phone: {user?.phone}</Text>
      </View>
      <View style={styles.documentSection}>
        <Text style={styles.sectionTitle}>Documents</Text>
        <TouchableOpacity style={styles.uploadButton} onPress={pickImage}>
          <Text style={styles.uploadButtonText}>Upload Aadhar Card</Text>
        </TouchableOpacity>
        {aadharImage && <Image source={{ uri: aadharImage }} style={styles.documentImage} />}
      </View>
    </ScrollView>
  );
}