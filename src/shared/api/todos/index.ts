import { httpClient } from '../http-client';
import { QueryParams, Todo } from './model';

const SLUG = 'todos';

export const getTodo = (query: QueryParams) => {
	return httpClient.get(SLUG, { searchParams: query }).json<Todo[]>();
};

export const getTodoById = (id: string) => {
	return httpClient.get(`${SLUG}/${id}`).json<Todo>();
};

export const updateTodo = (id: string, todo: Todo) => {
	return httpClient.put(`${SLUG}/${id}`, { json: todo }).json<Todo>();
};
