import { createBrowserRouter } from 'react-router';
import { MainLayout } from '../../shared/ui/main-layout';
import { TodoListPage } from '@/pages/todo-list-page';
import { TodoDetailsPage } from '@/pages/todo-details-page';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <TodoListPage />,
			},
			{
				path: ':id',
				element: <TodoDetailsPage />,
			},
		],
	},
]);
