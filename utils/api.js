const BASE_API = 'https://yts.lt/api/v2/';

const Api = () => ({
  async getSuggestion(id) {
    let query = await fetch(`${BASE_API}movie_suggestions.json?movie_id=${id}`);
    let data = await query.json();
    return data;
  },
});

export default Api();
