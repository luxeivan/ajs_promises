
import json from './parser';
import read from './reader';

export default class GameSavingLoader {
    static load() {
        return read().then(resolve => {
            return json(resolve);
        }).then(resolve=>{
          return JSON.parse(resolve);
        });
        /*const data = read(); // возвращается Promise!
        const value = json(data); // возвращается Promise!
        return value;*/
    }

}