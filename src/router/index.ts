import { createRouter, createWebHistory, createWebHashHistory } from 'vue-router';
import MainLayout from '@/layouts/DefaultLayout.vue';
import AuthLayout from '@/layouts/AuthLayout.vue';

import DashboardView from '@/views/dashboard/DashboardView.vue';
import LoginView from '@/views/auth/LoginView.vue';
import StudentsView from '@/views/students/StudentsView.vue';
import AddUpdateStudentView from '@/views/students/Add&UpdateStudentView.vue';
import TeachersView from '@/views/teachers/TeachersView.vue';
import AddUpdateTeacherView from '@/views/teachers/Add&UpdateTeacherView.vue';
import AdminView from '@/views/admin/AdminView.vue';
import AddUpdateAdminView from '@/views/admin/Add&UpdateAdminView.vue';
import PaymentView from '@/views/payment/PaymentView.vue';
import PaymentGroupView from '@/views/payment/PaymentGroupView.vue';
import GroupView from '@/views/group/GroupView.vue';
import viewLayout from '@/pages/libary/Page.vue'
import EditProfileView from '@/views/profile/EditProfileView.vue'
import ProfileView from '@/views/profile/ProfileView.vue';


// result
import Results from '@/pages/results/Page.vue';

// attendance
import Attendance from '@/pages/attendance/Page.vue';
import AttendanceId from '@/pages/attendance/[attendanceId]/Page.vue';


// Online course
import OnlineCourse from '@/pages/online-courses/Page.vue';
import OnlineCourseId from '@/pages/online-courses/[courseId]/Page.vue'

// lesson dashboard
import LessonDashboardLayout from '@/pages/(lesson-dashboard)/Layout.vue';
import LessonId from '@/pages/(lesson-dashboard)/[lessonId]/Page.vue';

// My courses
import MyCourses from '@/pages/my-courses/Page.vue';
import CourseId from "@/pages/my-courses/[courseId]/Page.vue"
import SectionId from '@/pages/my-courses/[courseId]/[sectionId]/Page.vue';

// Create course
import CreateCourse from '@/pages/create-course/Page.vue';

// Aplication
import Application from '@/pages/application/Page.vue';

//Settings
import Settings from '@/pages/settings/Page.vue';
const routes = [
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
    path: '/group/student',
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
    path: '/user-profile/:id',
    name: 'userprofile',
    component: ProfileView,
    meta: { layout: MainLayout }    
  },
  {
    path: '/profile/edit',
    name: 'edit-profile',
    component: EditProfileView,
    meta: { layout: MainLayout }
  },
  {
    path: '/books',
    name: 'books',
    component: viewLayout,
    meta: { layout: MainLayout }
  },
  {
    path: '/results',
    name: 'Results',
    component: Results,
    meta: { layout: MainLayout }
  },
  {
    path: '/admin',
    name: 'admin',
    component: AdminView,
    meta: { layout: MainLayout }
  },
  {
    path: '/admin/add',
    name: 'add-admin',
    component: AddUpdateAdminView,
    meta: { layout: MainLayout }
  },
  {
    path: '/payment',
    name: 'payment',
    component: PaymentView,
    meta: { layout: MainLayout }
  },
  {
    path: '/payment/group/:id',
    name: 'payment-group',
    component: PaymentGroupView,
    meta: { layout: MainLayout }
  },
  {
    path: '/group',
    name: 'group',
    component: GroupView,
    meta: { layout: MainLayout }
  },
  // attendance - davomat
  {
    path: '/attendance',
    name: 'attendance',
    component: Attendance,
    meta: { layout: MainLayout }
  },
  {
    path: '/attendance/:id',
    name: 'attendanceId',
    component: AttendanceId,
    meta: { layout: MainLayout }
  },
  // books - kitoblar
 
  // create course - kurs yaratuvchi bo'lim
  {
    path: '/create-course',
    name: 'CreateCourse',
    component: CreateCourse,
    meta: {layout : MainLayout}
  },
  // online-courses  - o'quvchilar uchun barcha ochiq darslar
  {
    path: '/online-courses',
    name: 'OnlineCourses',
    component: OnlineCourse,
    meta: {layout : MainLayout},
  },
  {
    path: '/online-courses/:id',
    name: 'OnlineCourseId',
    component: OnlineCourseId,
    meta: {layout : MainLayout},
    props: true,
  },
  // admin yaratgan darslar
  {
    path: '/my-courses',
    name: 'MyCourses',
    component: MyCourses,
    meta: {layout : MainLayout}
  },
  {
    path: '/my-courses/:id',
    name: 'CourseId',
    component: CourseId,
    meta: { layout: MainLayout },
    props: true,
  },
  {
    path: '/my-courses/:id/:sectionId',
    name: 'SectionId',
    component: SectionId,
    meta: { layout: MainLayout },
    props: (route: any) => ({
      courseId: Number(route.params.id),
      sectionId: Number(route.params.sectionId),
      type: route.query.type,
    }),
  },
  // lesson dashboard - video drsliglarni ko'rish uchun page
  {
    path: '/lesson-dashboard/:id',
    name: 'LessonDashboard',
    component: LessonId,
    meta: { layout: LessonDashboardLayout },
    props: true,
  },
  {
    path: '/applications',
    name: 'Applications',
    component: Application,
    meta: { layout: MainLayout }
  },
   {
    path: '/settings',
    name: 'Settings',
    component: Settings,
    meta: { layout: MainLayout }
  }

]
const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes
})

export default router
