import { server } from './services';

const app = new server();
app.setup();
app.start();
