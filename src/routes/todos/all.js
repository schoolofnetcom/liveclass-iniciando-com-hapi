import Todo from './../../schemas/Todo';

export default {
    method: 'GET',
    path: '/todos',
    config: {
        description: 'List all todos',
        handler: async(request, h) => {
            try {
                const all = await Todo.find({});
                return all;
            } catch(err) {
                return h.badImplementation();
            }
        }
    }
}