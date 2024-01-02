export default defineNuxtRouteMiddleware((to, from) => {
  // const isLoggedIn = false;

  // console.log(to);

  // if (isLoggedIn) {
  //   return navigateTo(to.fullPath);
  // }

  // return navigateTo("/login");

  console.log("Hello from globals auth");
});
