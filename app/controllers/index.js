import Controller from '@ember/controller';

export default Controller.extend({
    queryParams: ['s','page'],
    actions:{
        submit(search){
            //could go to details for movie page
            this.transitionToRoute('index',{queryParams: {s: search}})
        },
        update(){
            this.set('prop1','updated');
        },
        changePage(num){
            this.transitionToRoute('index',{queryParams: {page: num }})
        }
    }
});
