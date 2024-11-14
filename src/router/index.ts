import { createRouter, createWebHistory } from 'vue-router';
import MainLayout from '@/layouts/DefaultLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';

import DashboardView from '@/views/dashboard/DashboardView.vue';
import LoginView from '@/views/auth/LoginView.vue';
import StudentsView from '@/views/students/StudentsView.vue';
import AddUpdateStudentView from '@/views/students/Add&UpdateStudentView.vue';
import TeachersView from '@/views/teachers/TeachersView.vue';
import AddUpdateTeacherView from '@/views/teachers/Add&UpdateTeacherView.vue';
import ProfileView from '@/views/profile/ProfileView.vue';
import BooksView from '@/views/books/BooksView.vue';
import AdminView from '@/views/admin/AdminView.vue';
import PaymentView from '@/views/payment/PaymentView.vue';
import AttendanceView from '@/views/attendance/AttendanceView.vue';
import viewLayout from '@/views/books/viewLayout.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: DashboardView,
      meta: { layout: MainLayout }
    },
    {
      path: '/login',
      name: 'login',
      component: LoginView,
      meta: { layout: AuthLayout }
    },
    {
      path: '/teachers',
      name: 'teachers',
      component: TeachersView,
      meta: { layout: MainLayout }
    },
    {
      path: '/teachers/add',
      name: 'add-teacher',
      component: AddUpdateTeacherView,
      meta: { layout: MainLayout }
    },
    {
      path: '/students',
      name: 'students',
      component: StudentsView,
      meta: { layout: MainLayout }
    },
    {
      path: '/student/add',
      name: 'add-student',
      component: AddUpdateStudentView,
      meta: { layout: MainLayout }
    },
    {
      path: '/profile',
      name: 'profile',
      component: ProfileView,
      meta: { layout: MainLayout }
    },
    {
      path: '/books',
      name: 'books',
      component: BooksView,
      meta: { layout: MainLayout }
    },
    {
      path: '/admin',
      name: 'admin',
      component: AdminView,
      meta: { layout: MainLayout }
    },
    {
      path: '/payment',
      name: 'payment',
      component: PaymentView,
      meta: { layout: MainLayout }
    },
    {
      path: '/attendance',
      name: 'attendance',
      component: AttendanceView,
      meta: { layout: MainLayout }
    },
    {
      path: '/booksview',
      name: 'viewLayout',
      component: viewLayout,
      meta: {layout : MainLayout}
    }
  ]
})

export default router
