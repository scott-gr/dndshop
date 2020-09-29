import useSWR from 'swr';
const fetcher = (url) => fetch(url).then((r) => r.json());

export function useUser() {
  const { data, mutate } = useSWR('/api/user', fetcher);
  const user = data && data.user;
  return [user, { mutate }];
}

// for user Information, just use:
// const [user, { mutate }] = useUser();

// mutate can update the user state:

// const [user, { mutate }] = useUser();
// mutate({ user: { 
//   ...user,
//   name: 'new name'
// })

//similar item function needed?