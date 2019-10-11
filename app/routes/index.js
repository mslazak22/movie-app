import Route from '@ember/routing/route';

export default Route.extend({
    queryParams:{
        s:{
            refreshModel: true
        },
        page:{
            refreshModel: true
        }
    },
    model(params) {
        return this.store.query('result', {
          s: params.s || 'spider',
          page: params.page || '1'
        });
    }
    
});
