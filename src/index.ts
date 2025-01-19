import { server } from './services';

const app = new server();
app.setup();
app.start();

// Used for route-list CLI
export default app;
