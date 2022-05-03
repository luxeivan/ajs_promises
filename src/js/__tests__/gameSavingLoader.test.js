import GameSavingLoader from '../gameSavingLoader';

test('GameSavingLoader', (done) => {
  const tobe = {
    id: 9,
    created: 1546300800,
    userInfo: {
      id: 1, name: 'Hitman', level: 10, points: 2000,
    },
  };
  GameSavingLoader.load().then((saving) => {
    expect(saving).toEqual(tobe);
    done();
  }, (error) => {
    throw new Error(error);
  });
});
