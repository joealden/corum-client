import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

const _803afc3e = () => import('../pages/index.vue' /* webpackChunkName: "pages/index" */).then(m => m.default || m)
const _ecebb610 = () => import('../pages/login.vue' /* webpackChunkName: "pages/login" */).then(m => m.default || m)
const _17d731ce = () => import('../pages/signup.vue' /* webpackChunkName: "pages/signup" */).then(m => m.default || m)
const _2bb43e56 = () => import('../pages/subforum/_subforum/index.vue' /* webpackChunkName: "pages/subforum/_subforum/index" */).then(m => m.default || m)
const _cb0099b8 = () => import('../pages/subforum/_subforum/new.vue' /* webpackChunkName: "pages/subforum/_subforum/new" */).then(m => m.default || m)
const _53828d08 = () => import('../pages/subforum/_subforum/post/_post.vue' /* webpackChunkName: "pages/subforum/_subforum/post/_post" */).then(m => m.default || m)



const scrollBehavior = (to, from, savedPosition) => {
  // SavedPosition is only available for popstate navigations.
  if (savedPosition) {
    return savedPosition
  } else {
    let position = {}
    // If no children detected
    if (to.matched.length < 2) {
      // Scroll to the top of the page
      position = { x: 0, y: 0 }
    }
    else if (to.matched.some((r) => r.components.default.options.scrollToTop)) {
      // If one of the children has scrollToTop option set to true
      position = { x: 0, y: 0 }
    }
    // If link has anchor, scroll to anchor by returning the selector
    if (to.hash) {
      position = { selector: to.hash }
    }
    return position
  }
}


export function createRouter () {
  return new Router({
    mode: 'history',
    base: '/',
    linkActiveClass: 'nuxt-link-active',
    linkExactActiveClass: 'nuxt-link-exact-active',
    scrollBehavior,
    routes: [
		{
			path: "/",
			component: _803afc3e,
			name: "index"
		},
		{
			path: "/login",
			component: _ecebb610,
			name: "login"
		},
		{
			path: "/signup",
			component: _17d731ce,
			name: "signup"
		},
		{
			path: "/subforum/:subforum?",
			component: _2bb43e56,
			name: "subforum-subforum"
		},
		{
			path: "/subforum/:subforum?/new",
			component: _cb0099b8,
			name: "subforum-subforum-new"
		},
		{
			path: "/subforum/:subforum?/post/:post?",
			component: _53828d08,
			name: "subforum-subforum-post-post"
		}
    ],
    fallback: false
  })
}
