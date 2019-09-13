const axios = require("axios");
const cheerio = require("cheerio");

exports.handler = async (event, context, callback) => {
  console.log(event.queryStringParameters.id);
  const id = event.queryStringParameters.id;
  if (id) {
    const showResponse = await axios.get(`https://www.imdb.com/title/${id}`);
    const show$ = cheerio.load(showResponse.data);
    const showPosterUrl = show$("div.slate_wrapper div.poster img")[0].attribs.src;

    const response = await axios.get(`https://www.imdb.com/title/${id}/episodes`);

    let $ = cheerio.load(response.data);

    const currentEpisode = {
      title: $("#currEpsTitle").text(),
      airDate: $("#currentEpisode span").text(),
      description: $("div.episodeCurrent div.episodeDescription").text()
    };

    return {
      statusCode: 200,
      body: JSON.stringify({
        posterUrl: showPosterUrl,
        currentEpisode
      })
    };
  } else {
    return {
      statusCode: 400
    };
  }
};
