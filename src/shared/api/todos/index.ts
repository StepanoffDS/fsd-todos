import { httpClient } from '../http-client';
import { QueryParams, Todo } from './model';

const SLUG = 'todos';

export const getTodo = (query: QueryParams) => {
	return httpClient.get(SLUG, { searchParams: query }).json<Todo[]>();
};

export const getTodoById = (id: string) => {
	return httpClient.get(`${SLUG}/${id}`).json<Todo>();
};

export const updateTodo = (todo: Todo) => {
	return httpClient.put(`${SLUG}/${todo.id}`, { json: todo }).json<Todo>();
};
