// VideoPlayerScreen.tsx
import React, { useRef } from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import VideoPlayer, { type VideoPlayerRef } from 'react-native-video-player';
import { ResizeMode } from 'react-native-video';
import Icon from 'react-native-vector-icons/Ionicons';
import Home from '../assets/Home g.svg';
import Class from '../assets/class-light.svg';
import Profile from '../assets/profile.svg';
import { useNavigation } from '@react-navigation/native';
import type { StackNavigationProp } from '@react-navigation/stack';

const { width } = Dimensions.get('window');
type RootStackParamList = {
  LectureScreen: undefined;
    HomeScreen: undefined;
};
const lessons = [
  'Introduction',
  'fundamentals of maths',
  'calculus',
  'set theory',
  'functions',
];

const VideoPlayerScreen = () => {
    const navigation =
        useNavigation<StackNavigationProp<RootStackParamList, 'LectureScreen' | 'HomeScreen'>>();
  const currentLesson = 'fundamentals of maths';
  const playerRef = useRef<VideoPlayerRef>(null);

  return (
    <View style={styles.container}>
      <VideoPlayer
        ref={playerRef}
        source={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4',
        }}
        thumbnail={{
          uri: 'https://commondatastorage.googleapis.com/gtv-videos-bucket/sample/images/BigBuckBunny.jpg',
        }}
        videoWidth={width}
        videoHeight={220}
        resizeMode={ResizeMode.CONTAIN} // ✅ Fixed here
        endWithThumbnail
        showDuration
        onError={e => console.log('Video error:', e)}
      />

      <ScrollView style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.title}>Introduction</Text>
          <Text style={styles.subtitle}>Fundamentals of maths</Text>
          <TouchableOpacity style={styles.completeBtn}>
            <Text style={styles.completeBtnText}>Mark as Completed</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.lessonSection}>
          <Text style={styles.lessonHeader}>Lesson 1</Text>
          {lessons.map(item => (
            <TouchableOpacity
              key={item}
              style={[
                styles.lessonItem,
                item === currentLesson && styles.activeLesson,
              ]}
            >
              <View style={styles.lessonInfo}>
                <Icon
                  name={
                    item === currentLesson
                      ? 'play-circle'
                      : item === 'Introduction'
                      ? 'checkmark-circle'
                      : 'lock-closed'
                  }
                  size={20}
                  color={item === currentLesson ? '#fff' : '#999'}
                  style={styles.iconMargin}
                />
                <Text
                  style={[
                    styles.lessonText,
                    item === currentLesson && styles.activeLessonText,
                  ]}
                >
                  {item}
                </Text>
              </View>
              <Text
                style={[
                  styles.lessonDuration,
                  item === currentLesson && styles.activeLessonText,
                ]}
              >
                2:05
              </Text>
            </TouchableOpacity>
          ))}

          <Text style={styles.lessonHeader}>Lesson 2</Text>
        </View>
      </ScrollView>

      <View style={styles.bottomNav}>
        <TouchableOpacity
          style={styles.navItem}
          onPress={() => navigation.navigate('HomeScreen')}
        >
          <Home width={24} height={24} />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Class
            width={24}
            height={24}
            onPress={() => navigation.navigate('LectureScreen')}
          />
        </TouchableOpacity>
        <TouchableOpacity style={styles.navItem}>
          <Profile width={24} height={24} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff' },
  content: { padding: 16 },
  section: { marginBottom: 16 },
  title: {
    fontSize: 18,
    fontWeight: '600',
    color: '#000',
  },
  subtitle: {
    color: '#666',
    marginTop: 4,
  },
  completeBtn: {
    marginTop: 8,
    alignSelf: 'flex-start',
    borderColor: '#7B5FFF',
    borderWidth: 1,
    borderRadius: 8,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  completeBtnText: {
    color: '#7B5FFF',
    fontWeight: '500',
  },
  lessonSection: {
    backgroundColor: '#f9f9f9',
    borderRadius: 12,
    padding: 12,
  },
  lessonHeader: {
    fontWeight: '600',
    fontSize: 16,
    marginBottom: 10,
  },
  lessonItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
  },
  activeLesson: {
    backgroundColor: '#7B5FFF',
  },
  activeLessonText: {
    color: '#fff',
  },
  lessonInfo: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  lessonText: {
    color: '#333',
  },
  lessonDuration: {
    color: '#666',
  },
  tabBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 12,
    borderTopWidth: 1,
    borderColor: '#eee',
    backgroundColor: '#fff',
  },
  iconMargin: {
    marginRight: 8,
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

export default VideoPlayerScreen;
