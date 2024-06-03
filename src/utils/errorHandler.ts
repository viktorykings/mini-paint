enum ERRORS {
    INVALID_EMAIL = 'Firebase: Error (auth/invalid-email).',
    INVALID_PASSWORD = 'Firebase: Error (auth/missing-password).',

  }
export const errorHandler = (err: string) => {
    switch(err){
        case ERRORS.INVALID_EMAIL : return 'Enter valid email: example@ex.com'
        case ERRORS.INVALID_PASSWORD : return 'Password should contain at least 6 characters'
    }
}