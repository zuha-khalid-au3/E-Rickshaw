// src/screens/Profile/index.js
import React, { useState, useEffect } from 'react';
import { View, Text, TouchableOpacity, Image, ScrollView, TextInput } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';

export default function ProfileScreen() {
  const [profile, setProfile] = useState({
    name: '',
    email: '',
    phone: '',
    companyName: '',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [profileImage, setProfileImage] = useState(null);

  useEffect(() => {
    // Fetch profile data from API
    // This is a placeholder. Replace with actual API call.
    setProfile({
      name: 'John Doe',
      email: 'john@example.com',
      phone: '+91 1234567890',
      companyName: 'EV Charging Co.',
    });
  }, []);

  const handleSave = () => {
    // Update profile in API
    // This is a placeholder. Replace with actual API call.
    setIsEditing(false);
  };

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled) {
      setProfileImage(result.uri);
      // Upload image to server
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.profileHeader}>
        <TouchableOpacity onPress={pickImage}>
          <Image
            style={styles.profileImage}
            source={profileImage ? { uri: profileImage } : require('../../../assets/splash.png')}
          />
        </TouchableOpacity>
        <Text style={styles.profileName}>{profile.name}</Text>
      </View>
      <View style={styles.profileDetails}>
        {isEditing ? (
          <>
            <TextInput
              style={styles.input}
              value={profile.name}
              onChangeText={(text) => setProfile({ ...profile, name: text })}
              placeholder="Name"
            />
            <TextInput
              style={styles.input}
              value={profile.email}
              onChangeText={(text) => setProfile({ ...profile, email: text })}
              placeholder="Email"
              keyboardType="email-address"
            />
            <TextInput
              style={styles.input}
              value={profile.phone}
              onChangeText={(text) => setProfile({ ...profile, phone: text })}
              placeholder="Phone"
              keyboardType="phone-pad"
            />
            <TextInput
              style={styles.input}
              value={profile.companyName}
              onChangeText={(text) => setProfile({ ...profile, companyName: text })}
              placeholder="Company Name"
            />
          </>
        ) : (
          <>
            <Text style={styles.detailItem}>Email: {profile.email}</Text>
            <Text style={styles.detailItem}>Phone: {profile.phone}</Text>
            <Text style={styles.detailItem}>Company: {profile.companyName}</Text>
          </>
        )}
      </View>
      <TouchableOpacity
        style={styles.button}
        onPress={isEditing ? handleSave : () => setIsEditing(true)}
      >
        <Text style={styles.buttonText}>{isEditing ? 'Save' : 'Edit Profile'}</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}