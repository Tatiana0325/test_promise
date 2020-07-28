import GameSavingLoader from '../js/app';
import read from '../js/reader';
import json from '../js/parser';

jest.mock('../js/reader');

beforeEach(() => {
    jest.resetAllMocks();
});

test('Проверка Promise при правильной работе', (done) => {
    read.mockReturnValue(JSON.stringify({}));

    const data = GameSavingLoader.load();
    expect(data).toEqual({"id":9,
    "created":1546300800,
    "userInfo":{"id":1,
                "name":"Hitman",
                "level":10,
                "points":2000}});
    done();
});

test('Проверка на ошибку', async () => {
    read.mockReturnValue(JSON.stringify({}));

    expect.assertions(1);
    try{
        const data = await GameSavingLoader.load();
    } catch (e) {
        expect(e).toBe('Ошибка');
    }
})