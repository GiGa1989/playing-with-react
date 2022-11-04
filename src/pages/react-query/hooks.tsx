import { useQuery } from '@tanstack/react-query';
import axios from 'axios';

interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const usePosts = () => {
  return useQuery<Post[], Error>({
    queryKey: ['posts'],
    queryFn: async () => {
      const { data } = await axios.get<Post[]>(
        'https://jsonplaceholder.typicode.com/posts',
      );
      return data;
    },
  });
};

export const getPostById = async (id: number) => {
  const { data } = await axios.get<Post>(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  );
  return data;
};

export const usePost = (postId: number) => {
  return useQuery<Post, Error>({
    queryKey: ['post', postId],
    queryFn: () => getPostById(postId),
    enabled: !!postId,
  });
};
