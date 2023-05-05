import ErrorPage from '../pages/error.page';
import LandingPage from '../pages/landing.page';
import MainPage from '../pages/main.page';
import PostDetailPage from '../pages/postDetail.page';
import PostEditPage from '../pages/postEdit.page';
import PostWritePage from '../pages/postWrite.page';
import UserPage from '../pages/user.page';
import WithDrawalPage from '../pages/withDrawal.page';

export const appRoutes = [
  { path: '/', element: <LandingPage /> },
  { path: '/error', element: <ErrorPage /> },
  { path: '/main', element: <MainPage /> },
  { path: '/detail/:id', element: <PostDetailPage /> },
  { path: '/edit', element: <PostEditPage /> },
  { path: '/write', element: <PostWritePage /> },
  { path: '/user', element: <UserPage /> },
  { path: '/withdrawal', element: <WithDrawalPage /> },
];
