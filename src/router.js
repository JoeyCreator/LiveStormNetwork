/**
 * 1)
 * Since we're going to use Vue and the Router,
 * we import Vue and the Router packages.
 * We import Vue and VueRouter.
 */
import Vue from "vue";
import Router from "vue-router";

/**
 * 2)
 * We then import the components of our application
 * That we want to use as pages.
 */
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import about from "./components/account-setup/about";
import account from "./components/account-setup/account";
import Login from "./components/auth/Login";
import register from "./components/auth/register";
import resetpassword from "./components/auth/resetpassword";
import Navbar from "./components/Navbar";

import SiteAlert from "./components2/SiteAlert";

import Dashboard from "./views/admin/Dashboard";
import IndividualTicket from "./views/admin/support/IndividualTicket";
import KnowledgeBase from "./views/admin/support/KnowledgeBase";

import archives from "./views/chaser/archives";
import overview from "./views/chaser/overview";

import members from "./views/media/members";
import purchased from "./views/media/purchased";
import search from "./views/media/search";

/**
 * 3)
 * Remember to tell Vue to use the Router.
 * This is how we register plgins in Vue. :)
 */
Vue.use(Router);

/**
 * 4)
 * Here we create our routes array.
 * for each route, we determine which path should
 * show what component
 */
const OurRoutes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/about",
    component: About
  },
  {
    path: "/contact",
    component: Contact
  },
  {
    path: "/about",
    component: about
  },
  {
    path: "/account",
    component: account
  },
  {
    path: "/login",
    component: Login
  },
  {
    path: "/register",
    component: register
  },
  {
    path: "/resetpassword",
    component: resetpassword
  },
  {
    path: "/dashboard",
    component: Dashboard
  },
  {
    path: "/archives",
    component: archives
  },
  {
    path: "/overview",
    component: overview
  },
  {
    path: "/members",
    component: members
  },
  {
    path: "/purchased",
    component: purchased
  },
  {
    path: "/search",
    component: search
  },
  {
    path: "/individualticket",
    component: IndividualTicket
  },
  {
    path: "/knowledgebase",
    component: KnowledgeBase
  },
  {
    path: "/navbar",
    component: Navbar
  },
  {
    path: "/sitealert",
    component: SiteAlert
  }
];

/**
 * 5)
 * We then create the router instance and pass in
 * our routes array from step 4.
 */
const router = new Router({
  routes: OurRoutes
});

/**
 * 6)
 * 🎉 Hooray! Finally we export the router instance
 * since were going to be using it in another file :)
 */
export default router;
