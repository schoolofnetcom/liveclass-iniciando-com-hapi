export default {
    method: 'GET',
    path: '/',
    config: {
        description: 'a route to handler hello response',
        handler: async(request, h) => {
            return 'Hello';
        }
    }
}