import GameSavingLoader from './gameSavingLoader';

GameSavingLoader.load().then((saving) => {
  console.log(saving);
}, (error) => {
  throw new Error(error);
});
