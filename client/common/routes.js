import NotFound from '../components/404/404';
import Initial from '../components/Initial/Initial';

export default [
    {
        path: '/',
        exact: true,
        component: Initial
    },
    {
        path: '*',
        component: NotFound
    }
]