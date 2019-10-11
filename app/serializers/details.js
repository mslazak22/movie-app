import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({
    primaryKey: 'imdbID',
    keyForAttribute(key) {
      return key;
    },
    normalizeResponse(store, primaryModelClass, payload, id, requestType) {
        payload.data.attributes = {
            Title: payload.data.Title,
            Year: payload.data.Year,
            Rated: payload.data.Rated,
            Released: payload.data.Released,
            Runtime: payload.data.Runtime,
            Genre: payload.data.Genre ,
            Director: payload.data.Director,
            Actors: payload.data.Actors,
            Plot: payload.data.Plot,
            Language: payload.data.Language,
            Country: payload.data.Country,
            Awards: payload.data.Awards,
            Metascore: payload.data.Metascore,
            imdbRating: payload.data.imdbRating,
            DVD: payload.data.DVD,
            BoxOffice: payload.data.BoxOffice,
            Production: payload.data.Production,
            Website: payload.data.Website

        };
        delete payload.data.Title,
        delete payload.data.Year,
        delete payload.data.Rated,
        delete payload.data.Released,
        delete payload.data.Runtime,
        delete payload.data.Genre ,
        delete payload.data.Director,
        delete payload.data.Actors,
        delete payload.data.Plot,
        delete payload.data.Language,
        delete payload.data.Country,
        delete payload.data.Awards,
        delete payload.data.Metascore,
        delete payload.data.imdbRating,
        delete payload.data.DVD,
        delete payload.data.BoxOffice,
        delete payload.data.Production,
        delete payload.data.Website


        return this._super(...arguments);
    }
});
