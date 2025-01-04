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
import AddUpdateAdminView from '@/views/admin/Add&UpdateAdminView.vue';
import PaymentView from '@/views/payment/PaymentView.vue';
import PaymentGroupView from '@/views/payment/PaymentGroupView.vue';
import GroupView from '@/views/group/GroupView.vue';
import AddUpdateGroupView from '@/views/group/Add&UpdateGroupView.vue';
import AttendanceView from '@/views/attendance/AttendanceView.vue';
import AttendanceGroupView from '@/views/attendance/AttendanceGroupView.vue';
import viewLayout from '@/views/books/viewLayout.vue'
import Results from '@/views/results/Results.vue'
import EditProfileView from '@/views/profile/EditProfileView.vue'
import UserProfileView from '@/views/userprofile/UserProfileView.vue';
import LessonTask from '@/views/onlinecourse/LessonTask.vue'

import CourseLayout from '@/layouts/CourseLayout.vue';
import CourseInfoView from '@/views/onlinecourse/CourseInfoView.vue';
import CourseView from '@/views/onlinecourse/CourseView.vue';

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
      path: '/profile/edit',
      name: 'edit-profile',
      component: EditProfileView,
      meta: { layout: MainLayout }
    },
    {
      path: '/userprofile',
      name: 'userprofile',
      component: UserProfileView,
      meta: { layout: MainLayout }    
    },
    {
      path: '/books',
      name: 'books',
      component: BooksView,
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
    {
      path: '/group/add',
      name: 'add-group',
      component: AddUpdateGroupView,
      meta: { layout: MainLayout }
    },
    {
      path: '/attendance',
      name: 'attendance',
      component: AttendanceView,
      meta: { layout: MainLayout }
    },
    {
      path: '/attendance/group/:id',
      name: 'attendance-group',
      component: AttendanceGroupView,
      meta: { layout: MainLayout }
    },
    {
      path: '/booksview',
      name: 'viewLayout',
      component: viewLayout,
      meta: {layout : MainLayout}
    },
    {
      path: '/course',
      name: 'course',
      component: CourseView,
      meta: {layout : MainLayout}
    },
    {
      path: '/courseinfo',
      name: 'courseinfo',
      component: CourseInfoView,
      meta: {layout : MainLayout}
    },
    
    {
      path: '/course-full',
      name: 'course-ful',
      component: CourseLayout,
      meta: {layout : CourseLayout}
    },
    {
      path: '/task',
      name: 'lessonTask',
      component: LessonTask,
      meta: {layout : CourseLayout}
    },
    {
      path: '/create-course',
      name: 'CreateCourse',
      component: CreateCourse,
      meta: {layout : MainLayout}
    },
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
      props: (route) => ({
        courseId: Number(route.params.id),
        sectionId: Number(route.params.sectionId),
        type: route.query.type,
      }),
    },

    {
      path: '/lesson-dashboard/:id',
      name: 'LessonDashboard',
      component: LessonId,
      meta: { layout: LessonDashboardLayout },
      props: true,
    },
  
  ]
})

export default router
