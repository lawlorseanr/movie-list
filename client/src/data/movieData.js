var APIdata = [
  {title: 'The Matrix', id: 0, watched: true},
  {title: 'Shawshank Redemption', id: 1, watched: true},
  {title: 'The Notebook', id: 2, watched: false},
  {title: 'The Mask', id: 3, watched: false},
];
for (var i = 0; i < APIdata.length; i++) {
  APIdata[i].year = 1980 + Math.floor(Math.random() * 27);
  APIdata[i].runtime = 45 + Math.floor(Math.random() * 80);
  APIdata[i].metascore = 50 + Math.floor(Math.random() * 35);
  APIdata[i].imdb = 5 + (Math.random() * 4).toFixed(1);
  APIdata[i].renderInfo = false;
}

export default APIdata;