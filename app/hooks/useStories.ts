import { DB, DBCollections } from '../firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import { useState, useEffect } from 'react';

export interface IStory {
  _id: string;
  heading: string;
  images: string[];
}

export const useStories = () => {
  const [stories, setStories] = useState<IStory[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(
    () =>
      onSnapshot(query(collection(DB, DBCollections.STORIES)), snapshot => {
        setStories(snapshot.docs.map(d => ({ _id: d.id, ...d.data() } as IStory)));
        setLoading(false);
      }),
    [],
  );

  return { stories, loading };
};
