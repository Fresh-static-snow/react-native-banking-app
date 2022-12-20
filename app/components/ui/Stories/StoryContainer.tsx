import { useData } from '../../../hooks';
import { StoryContainerProps } from './Stories.types';
import { styles } from './styles';
import React, { FC, PropsWithChildren } from 'react';
//@ts-ignore
import { StoryContainer as Container } from 'react-native-stories-view';

const TypedStoryContainer = (
  props: PropsWithChildren<StoryContainerProps>,
): JSX.Element => <Container {...props} />;

export const StoryContainer: FC = () => {
  const { activeStories, setActiveStories } = useData();

  return (
    activeStories && (
      <TypedStoryContainer
        // imageStyle={{
        //   marginTop: -10,
        // }}
        visible={true}
        enableProgress={true}
        duration={40}
        images={activeStories}
        containerStyle={styles.container}
        onComplete={() => setActiveStories(null)}
      />
    )
  );
};
