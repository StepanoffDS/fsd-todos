import { createBrowserRouter } from 'react-router';
import { MainLayout } from '../../shared/ui/main-layout';

export const router = createBrowserRouter([
	{
		path: '/',
		element: <MainLayout />,
		children: [
			{
				index: true,
				element: <div>Index</div>,
			},
			{
				path: ':id',
				element: <div>Detail</div>,
			},
		],
	},
]);
