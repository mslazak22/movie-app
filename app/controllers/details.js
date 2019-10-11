import Controller from '@ember/controller';

export default Controller.extend({
    
    queryParams: ['i'],
    actions:{
        detail(id){
            //could go to details for movie page
            this.transitionToRoute('details',{queryParams: {i: id}})
        }
    }
});
