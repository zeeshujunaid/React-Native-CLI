// import React, { createContext, useEffect, useState } from 'react';
// import auth from '../firebaseconfig'; // or use firebase/auth if you're using JS SDK

// export const AuthContext = createContext();

// export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
//   const [initializing, setInitializing] = useState(true);

//   useEffect(() => {
//     const unsubscribe = auth().onAuthStateChanged((user) => {
//       setUser(user);
//       if (initializing) setInitializing(false);
//     });

//     return unsubscribe; // cleanup
//   }, []);

//   if (initializing) return null;

//   return (
//     <AuthContext.Provider value={{ user }}>
//       {children}
//     </AuthContext.Provider>
//   );
// };
