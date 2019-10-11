import Route from '@ember/routing/route';

export default Route.extend({
    queryParams:{
        i:{
            refreshModel: true
        }
    },
        model(params) {
            return this.store.queryRecord('result', {
              i: params.id
            });
        }
        
    });
