import { Radio } from 'antd';
import { buttons } from '../config';
import { QueryParams } from '@/shared/api/todos/model';

export const FilterTask = ({
	onChange,
}: {
	onChange: (params: QueryParams) => void;
}) => {
	return (
		<Radio.Group defaultValue={buttons[2].id}>
			{buttons.map((item) => (
				<Radio.Button
					key={item.id}
					onClick={() => onChange(item.params)}
					value={item.id}
				>
					{item.title}
				</Radio.Button>
			))}
		</Radio.Group>
	);
};
