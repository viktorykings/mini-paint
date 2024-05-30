import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
} from "firebase/auth";

export const singUp = (email: string, password: string, name: string) => {
  const auth = getAuth();
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed up
      const user = userCredential.user;
      console.log(user);
      updateProfile(auth.currentUser!, {
        displayName: name
      })

      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      // ..
      console.log(errorCode, errorMessage);
      return { errorCode, errorMessage };
    });
    if(auth.currentUser){
      updateProfile(auth.currentUser, {
        displayName: name
      })
    }

console.log(auth.currentUser)
};

export const signIn = (email: string, password: string) => {
  const auth = getAuth();
  signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      console.log(user);
      // ...
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.log(errorCode, errorMessage);
    });
};

export const signOutFunc = () => {
  const auth = getAuth();
  signOut(auth)
    .then(() => {
      // Sign-out successful.
    })
    .catch((error) => {
      console.log(error);
      // An error happened.
    });
};
