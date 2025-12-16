// This is a placeholder file. You can use it to create a user.
// For example, you can create a user with a specific email and password.
// This is useful for creating a user for testing purposes.

import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// IMPORTANT: This function should be called only once to create the user.
// After the user is created, you should remove this file or comment out the function call.
export async function createAdminUser() {
  const auth = getAuth();
  const email = 'genfosis@example.com';
  const password = 'sisfogen';

  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    // Signed in 
    const user = userCredential.user;
    console.log('Admin user created:', user.uid);
  } catch (error: any) {
    if (error.code === 'auth/email-already-in-use') {
      console.log('Admin user already exists.');
    } else {
      const errorCode = error.code;
      const errorMessage = error.message;
      console.error('Error creating admin user:', errorCode, errorMessage);
    }
  }
}

// To use this, you might want to call it from a temporary page or a script.
// For example, in `src/app/page.tsx`, you could add:
/*
  useEffect(() => {
    import('@/firebase/auth/create-user').then(module => {
      module.createAdminUser();
    });
  }, []);
*/
