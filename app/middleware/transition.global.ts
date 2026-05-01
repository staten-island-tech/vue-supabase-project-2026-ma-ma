/**
 * Enforces page transition groups to restrict transitions to certain pages.
 */
export default defineNuxtRouteMiddleware((to, from) => {
  const sameGroup =
    to.meta.transitionGroup &&
    to.meta.transitionGroup === from.meta.transitionGroup;

  to.meta.pageTransition = sameGroup
    ? { name: to.meta.transitionGroup as string, mode: "out-in" }
    : false;
});
