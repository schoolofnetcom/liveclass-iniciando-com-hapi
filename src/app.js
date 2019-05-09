import Hapi from '@hapi/hapi';
import Blipp from 'blipp';
import BoomDecorators from 'hapi-boom-decorators';
import mongoose from 'mongoose';
import loadRoutes from './routes/index';

const init = async () => {
    const server = Hapi.server({
        port: 9000,
        host: 'localhost'
    });

    await server.register({ plugin: Blipp });
    await server.register(BoomDecorators);
    loadRoutes(server);

    mongoose.connect('mongodb://localhost/app', { useNewUrlParser : true });

    await server.start();
    console.log(`Hapi server has been started at: http://localhost:9000/`);
}

init();