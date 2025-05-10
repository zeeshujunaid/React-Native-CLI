// components/Navbar.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Navbar = () => {
  const navigation = useNavigation();

  const openDrawer = () => {
    navigation.openDrawer();
  };

  const handleAdd = () => {
    console.log('Add button pressed');
  };

  return (
    <View style={styles.navbar}>
      {/* Left: Drawer Button */}
      <TouchableOpacity onPress={openDrawer}>
        <Text style={styles.menuText}>☰</Text>
      </TouchableOpacity>

      {/* Center: Title */}
      <Text style={styles.title}>Home</Text>

      {/* Right: Plus Button & Profile Image */}
      <View style={styles.rightItems}>
        <TouchableOpacity onPress={handleAdd}>
          <Text style={styles.plusIcon}>＋</Text>
        </TouchableOpacity>
        <Image
          source={{ uri: 'https://via.placeholder.com/40' }}
          style={styles.profileImage}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  navbar: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 60,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    backgroundColor: '#ffffff',
    elevation: 5,
    zIndex: 10,
  },
  menuText: {
    fontSize: 28,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    position: 'absolute',
    left: '50%',
    transform: [{ translateX: -30 }], // Roughly center
  },
  rightItems: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  plusIcon: {
    fontSize: 24,
    marginRight: 10,
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: '#ccc',
  },
});

export default Navbar;
