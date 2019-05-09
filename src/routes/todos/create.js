import Todo from './../../schemas/Todo';
import createPayload from './validate/createPayload';

export default {
    method: 'POST',
    path: '/todos',
    config: {
        description: 'Create a new todo',
        handler: async(request, h) => {
            try {
                const todo = await Todo.create(request.payload);
                return todo;
            } catch(err) {
                return h.badImplementation();
            }
        },
        validate: { payload: createPayload }
    }
}