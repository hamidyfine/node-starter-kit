import { server } from './configs';
import { InitServer } from './server';

const app = new InitServer();
app.setup(server.configs);
app.start();
