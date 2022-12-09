import { createRoot } from 'react-dom/client';
import App from './app';

const entry = document.getElementById('root')!;
const root = createRoot(entry);
root.render(<App />);
