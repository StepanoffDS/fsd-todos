import { TodoCard, todoStore } from '@/entities/todo';
import { ToggleTask } from '@/feature/toggle-task';
import { Result, Row } from 'antd';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';
import { useParams } from 'react-router';

export const TodoDetailsPage = observer(() => {
	const { getTodoAction, isLoading, todoError, todo } = todoStore;

	const { id } = useParams<{ id: string }>();

	useEffect(() => {
		if (id) getTodoAction(id);
	}, [id, getTodoAction]);

	return (
		<Row justify='center' align='middle'>
			{todoError ? (
				<Result status='error' title={todoError} />
			) : (
				<TodoCard
					title={`Task #${todo?.id}`}
					text={todo?.title || ''}
					loading={isLoading}
					actions={todo ? [<ToggleTask todo={todo} />] : undefined}
				/>
			)}
		</Row>
	);
});
