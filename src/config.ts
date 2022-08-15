export const CONFIG = {
  storageKey: 'rabbittee_bodyInfo',

  // sourceLink:
  //   'https://www.facebook.com/100050186212776/posts/pfbid08kibVooUgdRwAn2LjWSRjzVJ5wzvjYncGqP2XvvR8vC9SYPqqH86HZ3uTZGqesy2l/',
  sourceLink: 'https://www.facebook.com/groups/1028435774570219/posts/1229546761125785/',

  gcp: {
    id: process.env.REACT_APP_GCP_ID as string,
    secret: process.env.REACT_APP_GCP_SECRET as string,
  },
};
