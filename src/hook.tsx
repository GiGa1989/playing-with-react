import { useState } from 'react';

const useMyHook = (friendID: number) => {
  console.log(
    'LOG-ENH 🚀 ~ file: hook.tsx ~ line 10 ~ useMyHook ~ friendID',
    friendID,
  );
  const [isOnline, setIsOnline] = useState(null);
  const [friendID2, setFriendID2] = useState(friendID * 10);

  // ...

  return [isOnline, friendID2];
};

export default useMyHook;
