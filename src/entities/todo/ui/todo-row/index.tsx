import { Card, Space } from 'antd';
import { ReactNode } from 'react';
import { Link } from 'react-router';

export const TodoRow = ({
	title,
	id,
	action,
}: {
	title: string;
	id: number;
	action: ReactNode;
}) => {
	return (
		<Card style={{ width: '600px' }}>
			<Space>
				{action}
				<Link to={`/${id}`}>{title}</Link>
			</Space>
		</Card>
	);
};
