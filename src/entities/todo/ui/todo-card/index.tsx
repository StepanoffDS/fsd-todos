import { Card } from 'antd';
import { ReactNode } from 'react';
import { Link } from 'react-router';

export const TodoCard = ({
	title,
	text,
	actions,
	loading,
}: {
	title: string;
	text: string;
	actions?: ReactNode[];
	loading?: boolean;
}) => {
	return (
		<Card
			loading={loading}
			title={title}
			actions={actions}
			extra={<Link to={'/'}>Back</Link>}
		>
			{text}
		</Card>
	);
};
