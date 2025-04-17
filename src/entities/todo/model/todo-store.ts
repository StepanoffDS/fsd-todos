import { getTodo, getTodoById, updateTodo } from '@/shared/api/todos';
import { QueryParams, Todo } from '@/shared/api/todos/model';
import { makeAutoObservable, runInAction } from 'mobx';

class TodoStore {
	todoList: Todo[] = [];
	todo?: Todo;
	isLoading = false;
	isUpdateLoading = false;
	todoListError?: string;
	todoError?: string;

	constructor() {
		makeAutoObservable(this);
	}

	getTodoListAction = async (params: QueryParams) => {
		try {
			this.isLoading = true;

			const data = await getTodo(params);

			runInAction(() => {
				this.isLoading = false;

				this.todoList = data;
			});
		} catch (error) {
			runInAction(() => {
				this.isLoading = false;
				this.todoListError = (error as Error).message;
			});
		}
	};

	getTodoAction = async (id: string) => {
		try {
			this.isLoading = true;

			const data = await getTodoById(id);

			runInAction(() => {
				this.isLoading = false;

				this.todo = data;
			});
		} catch (error) {
			runInAction(() => {
				this.isLoading = false;
				this.todoError = (error as Error).message;
			});
		}
	};

	updateTodoAction = async (todo: Todo) => {
		try {
			this.isUpdateLoading = true;
			await updateTodo(todo);

			this.isUpdateLoading = false;
		} catch (error) {
			this.isUpdateLoading = false;
			throw error;
		}
	};
}

export const todoStore = new TodoStore();
