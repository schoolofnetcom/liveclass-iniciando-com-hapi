import path from 'path';
import Glob from 'glob';

export default async (server) => {
    Glob
        .sync(path.join(__dirname, './**/*.js'))
        .forEach(async (file) => {
            try {
                const route = await import(file);
                server.route(route.default);
            } catch (err) {
                console.log(`Can't import file: ${err}`);
            }
        })
}