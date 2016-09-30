export class InMemoryDataService {
  createDb() {
    let tours = [
      {
        "id": 1,
        "title": "Catch Pokemons in abandoned factory",
        "video": ["video-1-1.avi"],
        "dates": ["2016-04-23T18:25:43.511Z"],
        "duration": 12,
        "movementType": "walk",
        "price": 2000,
        "rating": 5,
        "description": "be happy don't worry, be happy don't worry, be happy don't worry, be happy don't worry, be happy don't worry, be happy don't worry, be happy don't worry, be happy don't worry, be happy don't worry, be happy don't worry, be happy don't worry, be happy don't worry, be happy don't worry, be happy don't worry, be happy don't worry, be happy don't worry",
        "photo": ["photo-1-1.jpg"],
        "visited": 2500,
        "operator": "foo travel"
      },
      {
        "id": 2,
        "title": "earn 5000 for eating 5 kg breakfast",
        "video": ["video-2-1.avi"],
        "dates": ["2017-04-23T18:25:43.511Z"],
        "duration": 2,
        "movementType": "walk",
        "price": 1000,
        "rating": 4,
        "description": "Eat like Hose Arcadio, Eat like Hose Arcadio, Eat like Hose Arcadio",
        "photo": ["photo-2-1.jpg"],
        "visited": 100,
        "operator": "bar travel"
      }
    ];
    return {tours};
  }
}