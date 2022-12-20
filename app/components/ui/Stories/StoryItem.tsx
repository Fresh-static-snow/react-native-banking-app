import { useData, IStory } from '../../../hooks';
import React, { FC } from 'react';
import {
  Pressable,
  View,
  ImageBackground,
  Text,
} from 'react-native';
import { styles } from './styles';



export const StoryItem: FC<{ story: IStory }> = ({ story }) => {
  const { setActiveStories } = useData();

  return (
    <Pressable
      onPress={() => {
        setActiveStories(story.images);
      }}
    >
      <View style={styles.story}>
        <ImageBackground
          style={styles.image}
          source={{ uri: story.images[0] }}
          imageStyle={{ borderRadius: 12 }}
          resizeMode="cover"
        >
          <Text style={styles.storyTitle}>{story.heading}</Text>
        </ImageBackground>
      </View>
    </Pressable>
  );
};
