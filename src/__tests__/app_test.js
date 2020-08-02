import GameSavingLoader from '../js/app';
import read from '../js/reader';
import json from '../js/parser';

test('Check Promise when working properly', async () => {
    const data = await GameSavingLoader.load();
    expect(data).toEqual({"id":9,"created":1546300800,"userInfo":{"id":1,"name":"Hitman","level":10,"points":2000}});
})

test('Error checking', async () => {
    expect.assertions(0);
    try{
        const data = await GameSavingLoader.load();
    } catch (e) {
        expect(e).toBe('Ошибка');
    }
})