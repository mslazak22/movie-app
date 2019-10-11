import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    primaryKey: 'imdbID',
  keyForAttribute(key) {
    return key;
  },
  normalizeResponse(store, primaryModelClass, payload, id, requestType) {
    payload.data = payload.Search;
    payload.data.forEach(item => {
      item.type = primaryModelClass.modelName; //'result'
      item.attributes = {
        Title: item.Title,
        Year: item.Year,
        Type: item.Type,
        Poster: item.Poster,
        //imdbID: item.imdbID
 
      };
      delete item.Title;
      delete item.Year;
      delete item.Type;
      delete item.Poster;
      //delete item.imdbID;
      

    });

    delete payload.Search;
    return this._super(...arguments);
  }
});
