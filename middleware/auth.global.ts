export default defineNuxtRouteMiddleware(async (to, from) => {
  // do something
  const user = useSupabaseUser();
  if (user.value) {
    return navigateTo("/basic");
  }
  if (!user.value) {
    setTimeout(() => {
      navigateTo("/enter");
    }, 1);
    abortNavigation();
  }
});
