import Todo from './../../schemas/Todo';

export default {
    method: 'GET',
    path: '/todos/{id}',
    config: {
        description: 'Get one todo',
        handler: async(request, h) => {
            try {
                const all = await Todo.findById(request.params.id);
                return all;
            } catch(err) {
                return h.badImplementation();
            }
        }
        // validate: { params }
    }
}