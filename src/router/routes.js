const routes = [
  {
    path: "/",
    component: () => import("layouts/MainLayout.vue"),
    children: [
      { path: "", component: () => import("pages/WelcomePage.vue") },
      { path: "projects", component: () => import("pages/ProjectsPage.vue") },
      { path: "resume", component: () => import("pages/ResumePage.vue") },
      {
        path: "contact-me",
        component: () => import("pages/ContactMePage.vue"),
      },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
