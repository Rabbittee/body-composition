import { database } from './firebase';
import { set, ref, push, onValue } from 'firebase/database';

type PostProps = {
  api: string;
  params: { [key: string]: string | number };
};

interface Datatypes {
  [key: string]: string | number;
}

const post = ({ api, params }: PostProps) => {
  const dbRef = ref(database, api);
  const currentRef = push(dbRef);

  if (currentRef.key === null) return;

  params.id = currentRef.key;
  set(currentRef, params);
};

const get = (api: string) => {
  const data: Datatypes[] = [];
  const dbRef = ref(database, api);
  onValue(dbRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      data.push(childSnapshot.val());
    });
  });
  return data;
};

export const User = {
  postUser: (params: { [key: string]: string | number }) => {
    post({ api: 'users', params });
  },
  getUsers: () => get('users'),
};
