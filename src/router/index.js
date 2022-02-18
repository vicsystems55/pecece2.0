import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'
import Post from '../views/Post.vue'
import Category from '../views/Category.vue'
import AuthorsProfile from '../views/AuthorsProfile.vue'

import MainLayout from '../views/layouts/Main.vue'

const routes = [
  {
    path:'',
    component: MainLayout,
    children: [
      {
        path: '',
        name: 'Home',
        component: Home
      },
    
      {
        path: '/blog',
        name: 'Blog',
        component: Blog
      },
    
      {
        path: '/post',
        name: 'Post',
        component: Post
      },
    
      {
        path: '/category',
        name: 'Category',
        component: Category
      },
    
      {
        path: '/authors-profile',
        name: 'AuthorsProfile',
        component: AuthorsProfile
      },
    ]
  },


]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
