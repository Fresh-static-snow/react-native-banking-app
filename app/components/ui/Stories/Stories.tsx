import { useStories } from '../../../hooks';
import { Loader } from '../Loader';
import { StoryItem } from './StoryItem';
import React, { FC } from 'react';
import { View, ScrollView } from 'react-native';

export const Stories: FC = () => {
  const { loading, stories } = useStories();
  return (
    <View>
      {loading && <Loader />}
      {!loading && (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {stories.map(story => (
            <StoryItem key={story._id} story={story} />
          ))}
        </ScrollView>
      )}
    </View>
  );
};
