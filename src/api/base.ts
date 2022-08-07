import { database } from './firebase';
import { set, ref, push } from 'firebase/database';

type PostProps = {
  api: string;
  params: { [key: string]: string | number };
};

const post = ({ api, params }: PostProps) => {
  const dbRef = ref(database, api);
  const currentRef = push(dbRef);

  if (currentRef.key === null) return;

  params.id = currentRef.key;
  set(ref(database, api), params);
};

export const User = {
  postUser: (params: { [key: string]: string | number }) => {
    post({ api: 'users', params });
  },
};
