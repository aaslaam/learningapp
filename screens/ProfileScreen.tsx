/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import Home from '../assets/Home g.svg';
import Class from '../assets/class-light.svg';
import Profile from '../assets/profile.svg';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  LectureScreen: undefined;
  HomeScreen: undefined;
};

const ProfileScreen = () => {
  const navigation = useNavigation<StackNavigationProp<RootStackParamList>>();

  return (
    <View style={{ flex: 1 }}>
      <ScrollView contentContainerStyle={styles.container}>
      
        <View style={styles.profileSection}>
          <Image
            source={require('../assets/person.jpg')}
            style={styles.profileImage}
          />
          <Text style={styles.name}>Melissa Brown</Text>
          <Text style={styles.email}>melissabrown@gmail.com</Text>
        </View>

       
        <Text style={styles.sectionTitle}>Course You’re Taking</Text>
        <View style={styles.courses}>
          <CourseCard
            title="3D Art & Illustration"
            hours="18 Hour Spend"
            progress={50}
            backgroundColor="#5B3DFA"
          />
          <CourseCard
            title="Derivation"
            hours="14 Hour Spend"
            progress={70}
            backgroundColor="#56CCF2"
          />
          <CourseCard
            title="Business"
            hours="18 Hour Spend"
            progress={50}
            backgroundColor="#F45C84"
          />
        </View>

     
        <Text style={styles.sectionTitle}>Account</Text>
        <View style={styles.accountItem}>
          <Text style={styles.accountText}>Educational Information</Text>
        </View>
        <View style={styles.accountItem}>
          <Text style={styles.accountText}>Payment History</Text>
        </View>
        <View style={styles.accountItem}>
          <Text style={styles.accountText}>Settings</Text>
        </View>
      </ScrollView>


      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Home width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('LectureScreen')}
        >
          <Class width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Profile width={24} height={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

type CourseCardProps = {
  title: string;
  hours: string;
  progress: number;
  backgroundColor: string;
};

const CourseCard = ({
  title,
  hours,
  progress,
  backgroundColor,
}: CourseCardProps) => {
  return (
    <View style={[styles.card, { backgroundColor }]}>
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardHours}>{hours}</Text>
      <View style={styles.progressBackground}>
        <View style={[styles.progressBar, { width: `${progress}%` }]} />
      </View>
      <Text style={styles.progressText}>{progress}%</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: '#F7F8FA',
    flexGrow: 1,
  },
  profileSection: {
    alignItems: 'center',
    marginBottom: 24,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 12,
  },
  name: {
    fontSize: 20,
    fontWeight: '600',
    color: '#333',
  },
  email: {
    fontSize: 14,
    color: '#888',
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 12,
    marginTop: 20,
    color: '#333',
  },
  courses: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flexWrap: 'wrap',
    gap: 12,
  },
  card: {
    borderRadius: 12,
    padding: 12,
    width: '48%',
  },
  cardTitle: {
    color: 'white',
    fontWeight: '600',
    fontSize: 14,
    marginBottom: 4,
  },
  cardHours: {
    color: 'white',
    fontSize: 12,
    marginBottom: 8,
  },
  progressBackground: {
    backgroundColor: 'rgba(255,255,255,0.4)',
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBar: {
    height: 6,
    backgroundColor: '#fff',
  },
  progressText: {
    color: 'white',
    fontSize: 12,
    marginTop: 4,
  },
  accountItem: {
    backgroundColor: 'white',
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: 8,
    marginBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  accountText: {
    fontSize: 14,
    color: '#333',
  },
  bottomNav: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderTopColor: '#eee',
    backgroundColor: '#fff',
  },
  navItem: {
    alignItems: 'center',
  },
});

export default ProfileScreen;
