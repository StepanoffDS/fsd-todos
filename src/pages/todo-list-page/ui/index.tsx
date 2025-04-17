import { todoStore, TodoRow } from '@/entities/todo';
import { FilterTask } from '@/feature/filter-task';
import { ToggleTask } from '@/feature/toggle-task';
import { Result, Space, Spin } from 'antd';
import { observer } from 'mobx-react-lite';
import { useEffect } from 'react';

export const TodoListPage = observer(() => {
	const { todoList, getTodoListAction, isLoading, todoListError } = todoStore;

	useEffect(() => {
		getTodoListAction({});
	}, [getTodoListAction]);

	if (todoListError) {
		return <Result status='error' title={todoListError} />;
	}

	return (
		<Space direction='vertical'>
			<FilterTask onChange={getTodoListAction} />
			{isLoading ? (
				<Spin />
			) : (
				todoList.map((todo) => (
					<TodoRow
						key={todo.id}
						title={todo.title}
						id={todo.id}
						action={<ToggleTask todo={todo} />}
					/>
				))
			)}
		</Space>
	);
});
