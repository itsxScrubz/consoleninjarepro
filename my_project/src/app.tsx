import { FC, useState } from 'react';

const App: FC = ({}) => {
	const [state, setState] = useState(0);
	console.log(state);
	return (
		<main>
			<div>Hello World...</div>
			<div>
				<button onClick={() => setState(s => s + 1)}>Count: {state}</button>
			</div>
		</main>
	);
};

export default App;
