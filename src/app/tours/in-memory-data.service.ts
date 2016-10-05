export class InMemoryDataService {
  createDb() {
    let tours = [
      {
        "id": 1,
        "title": "Легенды, мифы и тайны Уфы",
        "video": ["video-1-1.avi"],
        "dates": ["2016-04-23T18:25:43.511Z"],
        "duration": 7,
        "movementType": "walk",
        "price": 2100,
        "rating": 5,
        "description": "be happy",
        "photo": ["tour-1.png"],
        "visited": 2500,
        "operator": "foo travel",
        "collections": [],
        "city": "Уфа"
      },
      {
        "id": 2,
        "title": "Обзорная экскурсия по Уфе",
        "video": ["video-1-1.avi"],
        "dates": ["2016-04-23T18:25:43.511Z"],
        "duration": 5,
        "movementType": "walk",
        "price": 6000,
        "rating": 3,
        "description": "be happy",
        "photo": ["tour-2.png"],
        "visited": 2500,
        "operator": "foo travel",
        "collections": [],
        "city": "Уфа"
      },
      {
        "id": 3,
        "title": "Духовное наследие",
        "video": ["video-1-1.avi"],
        "dates": ["2016-04-23T18:25:43.511Z"],
        "duration": 7,
        "movementType": "walk",
        "price": 1100,
        "rating": 4,
        "description": "be happy",
        "photo": ["tour-3.png"],
        "visited": 2500,
        "operator": "foo travel",
        "collections": [],
        "city": "Уфа"
      },
      {
        "id": 4,
        "title": "Внедорожный тур Сердце Башкортостана",
        "video": ["video-1-1.avi"],
        "dates": ["2016-04-23T18:25:43.511Z"],
        "duration": 7,
        "movementType": "car",
        "price": 6000,
        "rating": 4,
        "description": "be happy",
        "photo": ["tour-4.png"],
        "visited": 2500,
        "operator": "foo travel",
        "collections": ['closeTo'],
        "city": "Белорецк"
      },
      {
        "id": 5,
        "title": "Каякинг и хуякинг",
        "video": ["tour-5"],
        "dates": ["2016-04-23T18:25:43.511Z"],
        "duration": 7,
        "movementType": "walk",
        "price": 6000,
        "rating": 3,
        "description": "be happy",
        "photo": ["tour-5.png"],
        "visited": 2500,
        "operator": "foo travel",
        "collections": ['closeTo', 'testimonials'],
        "city": "Салават",
        "testimonials": [{
          "name": "Виталий Морозов",
          "photo": "avatar-user1.png",
          "rating": 5,
          "text": "Катались в первый раз, остались очень довольны. Отличный маршрут, который соединил в себе и прямички, где можно без опаски погонять, ощутить скорость и горный массив, где есть возможность получить удовольствие от управления квадроциклом и красивые… пейзажи, которыми можно насладиться во время привалов. Обязательно берите с собой фотоаппараты, потому что по пути будут очень красивые места к которым невозможно добраться на обычной машине. Отдельная благодарность работникам данного интернет-портала за отличный сервис."
        }]
      },
      {
        "id": 6,
        "title": "Старинные музеи Уфы",
        "video": ["video-1-1.avi"],
        "dates": ["2016-04-23T18:25:43.511Z"],
        "duration": 2,
        "movementType": "walk",
        "price": 1100,
        "rating": 4,
        "description": "be happy",
        "photo": ["tour-6.png"],
        "visited": 2500,
        "operator": "foo travel",
        "collections": ['closeTo'],
        "city": "Белорецк"
      }
    ];
    return {tours};
  }
}
