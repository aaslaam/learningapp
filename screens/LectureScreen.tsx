/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Home from '../assets/Home g.svg';
import Class from '../assets/class-light.svg';
import Profile from '../assets/profile.svg';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

type RootStackParamList = {
  HomeScreen: undefined;
  VideoPlayer: undefined;
  ProfileScreen: undefined;
};

const lectures = [
  {
    title: 'Maths',
    status: 'Running...',
    progress: 25,
    icon: require('../assets/maths.jpg'),
  },
  {
    title: 'UIUX',
    status: 'Running...',
    progress: 60,
    icon: require('../assets/ui-ux.jpg'),
  },
  {
    title: '3D Art',
    status: 'Running...',
    progress: 30,
    icon: require('../assets/3d-art-illution.jpg'),
  },
  {
    title: 'History',
    status: 'Finished',
    progress: 100,
    icon: require('../assets/history.jpg'),
  },
  {
    title: 'Python',
    status: 'Running...',
    progress: 45,
    icon: require('../assets/derivation.jpg'),
  },
  {
    title: 'Biology',
    status: 'Finished',
    progress: 100,
    icon: require('../assets/biology.jpg'),
  },
  {
    title: 'Editing',
    status: 'Finished',
    progress: 100,
    icon: require('../assets/photoshop.jpg'),
  },
];

const LectureScreen = () => {
  const navigation =
    useNavigation<StackNavigationProp<RootStackParamList, 'HomeScreen'>>();

  return (
    <View style={{ flex: 1, backgroundColor: '#F8F8FB' }}>
      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <Text style={styles.pageTitle}>Today’s lectures</Text>
        <View style={styles.tabsWrapper}>
          <Text style={[styles.tab, styles.activeTab]}>Lectures</Text>
          <Text style={styles.tab}>Ongoing</Text>
          <Text style={styles.tab}>Completed</Text>
        </View>

        {lectures.map((item, index) => (
          <TouchableOpacity
            key={index}
            style={styles.lectureCard}
            onPress={() => navigation.navigate('VideoPlayer')}
          >
            <Image source={item.icon} style={styles.lectureIcon} />
            <View style={styles.lectureContent}>
              <Text style={styles.lectureTitle}>{item.title}</Text>
              <Text
                style={[
                  styles.lectureStatus,
                  item.status === 'Finished' && styles.finishedText,
                ]}
              >
                {item.status}
              </Text>
            </View>
            <View style={styles.progressWrapper}>
              <View
                style={[
                  styles.progressBar,
                  {
                    width: `${item.progress}%`,
                    backgroundColor:
                      item.status === 'Finished' ? '#28C76F' : '#7A5FFF',
                  },
                ]}
              />
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Home width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Class width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Profile
            width={24}
            height={24}
            onPress={() => {
              navigation.navigate('ProfileScreen');
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
  },
  pageTitle: {
    fontSize: 20,
    fontWeight: '700',
    marginBottom: 20,
    color: '#000',
  },
  tabsWrapper: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  tab: {
    marginRight: 20,
    fontSize: 16,
    color: '#888',
    fontWeight: '600',
  },
  activeTab: {
    color: '#7A5FFF',
    borderBottomWidth: 2,
    borderBottomColor: '#7A5FFF',
    paddingBottom: 4,
  },
  lectureCard: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 12,
    marginBottom: 12,
    elevation: 1,
  },
  lectureIcon: {
    width: 48,
    height: 48,
    borderRadius: 10,
    marginRight: 12,
  },
  lectureContent: {
    flex: 1,
  },
  lectureTitle: {
    fontSize: 16,
    fontWeight: '700',
    color: '#000',
  },
  lectureStatus: {
    color: '#7A5FFF',
    fontSize: 13,
    marginTop: 4,
  },
  finishedText: {
    color: '#28C76F',
  },
  progressWrapper: {
    backgroundColor: '#E4E7EC',
    height: 6,
    borderRadius: 3,
    width: '30%',
    overflow: 'hidden',
    marginLeft: 10,
  },
  progressBar: {
    height: '100%',
    borderRadius: 3,
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

export default LectureScreen;
