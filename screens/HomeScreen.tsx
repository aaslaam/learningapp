/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import Notification from '../assets/notification.svg';
import Home from '../assets/Home g.svg';
import Class from '../assets/class-light.svg';
import Profile from '../assets/profile.svg';

const courses = [
  {
    title: 'UI/UX Design',
    classes: '03 Classes',
    color: '#7A5FFF',
    icon: require('../assets/ui-ux.jpg'),
  },
  {
    title: 'Derivation',
    classes: '05 Classes',
    color: '#9EE6EF',
    icon: require('../assets/derivation.jpg'),
  },
  {
    title: 'Photoshop',
    classes: '08 Classes',
    color: '#75CFFF',
    icon: require('../assets/photoshop.jpg'),
  },
  {
    title: 'Business',
    classes: '03 Classes',
    color: '#FF7A94',
    icon: require('../assets/bussiness.jpg'),
  },
];

const Dashboard = () => {
  return (
    <View style={{ flex: 1 }}>
      {/* ✅ Hiding the status bar */}
      <StatusBar hidden />

      <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
        <View style={styles.header}>
          <Image
            source={require('../assets/person.jpg')}
            style={styles.avatar}
          />
          <View>
            <Text style={styles.greeting}>Hey, Melissa 👋</Text>
            <Text style={styles.subtext}>let’s get started</Text>
          </View>
          <Notification style={styles.bell} />
        </View>

        <View style={styles.ongoingCard}>
          <Image
            source={require('../assets/3d-art-illution.jpg')}
            style={styles.ongoingImage}
          />
          <Text style={styles.ongoingLabel}>ongoing</Text>
          <Text style={styles.courseTitle}>3D Art & Illustration</Text>
          <View style={styles.progressBarWrapper}>
            <View style={[styles.progressBar, { width: '50%' }]} />
          </View>
          <TouchableOpacity style={styles.continueButton}>
            <Text style={styles.continueText}>Continue</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.sectionTitle}>Choose Your Course</Text>

        <View style={styles.courseGrid}>
          {courses.map((course, index) => (
            <View
              key={index}
              style={[styles.courseCard, { backgroundColor: course.color }]}
            >
              <View style={styles.courseImageWrapper}>
                <Image source={course.icon} style={styles.courseIcon} />
                <View style={styles.playButton}>
                  <Text style={styles.playIcon}>▶</Text>
                </View>
              </View>
              <Text style={styles.courseTitleText}>{course.title}</Text>
              <Text style={styles.courseSubText}>{course.classes}</Text>
            </View>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Today’s Lecture</Text>
        <View style={styles.todayCard}>
          <Image
            source={require('../assets/maths.jpg')}
            style={styles.bookIcon}
          />
          <View>
            <Text style={styles.lectureTitle}>Maths</Text>
            <Text style={styles.runningText}>Running...</Text>
          </View>
          <View style={styles.todayProgressWrapper}>
            <View style={[styles.todayProgress, { width: '60%' }]} />
          </View>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity style={styles.navItem}>
          <Home width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Class width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Profile width={24} height={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    padding: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  avatar: {
    width: 48,
    height: 48,
    borderRadius: 24,
    marginRight: 12,
  },
  greeting: {
    fontWeight: '600',
    fontSize: 16,
  },
  subtext: {
    color: '#777',
  },
  bell: {
    marginLeft: 'auto',
  },
  ongoingCard: {
    marginTop: 30,
    backgroundColor: '#7D5FFF',
    borderRadius: 20,
    padding: 20,
    position: 'relative',
  },
  ongoingImage: {
    width: 50,
    height: 50,
    borderRadius: 8,
    position: 'absolute',
    top: 15,
    right: 15,
  },
  ongoingLabel: {
    color: '#fff',
    marginBottom: 5,
  },
  courseTitle: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '700',
  },
  progressBarWrapper: {
    height: 6,
    backgroundColor: 'rgba(255,255,255,0.4)',
    borderRadius: 3,
    marginTop: 10,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#fff',
  },
  continueButton: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    padding: 10,
    borderRadius: 12,
    marginTop: 15,
    alignItems: 'center',
    width: 100,
  },
  continueText: {
    color: '#fff',
    fontWeight: '500',
  },
  sectionTitle: {
    marginTop: 30,
    fontWeight: '700',
    fontSize: 18,
  },
  courseGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  courseCard: {
    width: '47%',
    borderRadius: 16,
    padding: 15,
    marginBottom: 15,
    position: 'relative',
  },
  courseImageWrapper: {
    position: 'relative',
    marginBottom: 10,
  },
  courseIcon: {
    width: 40,
    height: 40,
    borderRadius: 8,
  },
  playButton: {
    position: 'absolute',
    bottom: -8,
    left: -8,
    backgroundColor: 'white',
    borderRadius: 8,
    paddingHorizontal: 6,
    paddingVertical: 2,
    marginTop:10,
  },
  playIcon: {
    fontSize: 10,
    color: '#000',
    fontWeight: 'bold',
  },
  courseTitleText: {
    color: '#fff',
    fontWeight: '700',
    fontSize: 16,
    marginTop: 10,
  },
  courseSubText: {
    color: '#fff',
    opacity: 0.8,
    marginTop: 5,
  },
  todayCard: {
    backgroundColor: '#F5F5F5',
    borderRadius: 16,
    padding: 15,
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 15,
  },
  bookIcon: {
    width: 40,
    height: 40,
    marginRight: 15,
  },
  lectureTitle: {
    fontWeight: '700',
    fontSize: 16,
  },
  runningText: {
    color: '#777',
  },
  todayProgressWrapper: {
    backgroundColor: '#ccc',
    height: 6,
    borderRadius: 3,
    overflow: 'hidden',
    flex: 1,
    marginLeft: 15,
  },
  todayProgress: {
    height: '100%',
    backgroundColor: '#7A5FFF',
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

export default Dashboard;
