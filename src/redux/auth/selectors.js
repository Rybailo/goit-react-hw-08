export const selectUserData = (state) => state.auth.userData;
export const getToken = (state) => state.auth.token;
export const selectUserIsSignedIn = (state) => state.auth.isSignedIn;
export const selectUserIsLoading = (state) => state.auth.isRefreshing;
export const selectUserIsError = (state) => state.auth.isError;
export const selectUserIsRefreshing = (state) => state.auth.isRefreshing;
