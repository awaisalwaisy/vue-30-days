export default defineNuxtRouteMiddleware(async (to, from) => {
  // do something
  const user = useSupabaseUser();
  if (!user.value && to.path === "/basic") {
    return navigateTo("/");
  }
});
