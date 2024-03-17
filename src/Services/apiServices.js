import axios from "axios";

export const VIDEO_LIST = {
  getVideosList: async function () {
    return await axios.get(
      `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics%2Cplayer&chart=mostPopular&maxResults=100&regionCode=IN&key=AIzaSyAG6Jvn5UCq7RDgJ18OoFsW3ozoWYGB370`
    );
  },
};

export const SEARCH = {
  getSearchResults: async function (searchBy) {
    return await axios.get(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&q=${searchBy}s&key=AIzaSyAG6Jvn5UCq7RDgJ18OoFsW3ozoWYGB370`
    );
  },
};
