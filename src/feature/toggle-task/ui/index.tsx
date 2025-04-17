import { todoStore } from '@/entities/todo';
import { Todo } from '@/shared/api/todos/model';
import { Checkbox, Spin } from 'antd';

export const ToggleTask = ({ todo }: { todo: Todo }) => {
	const { updateTodoAction, isUpdateLoading } = todoStore;
	return isUpdateLoading ? (
		<Spin />
	) : (
		<Checkbox
			onChange={(event) =>
				updateTodoAction({ ...todo, completed: event.target.checked })
			}
		/>
	);
};
