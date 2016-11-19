import { InMemoryDbService } from 'angular-in-memory-web-api';

export class appData implements InMemoryDbService {
  createDb() {
    let tours = [
      {
        "id": 1,
        "title": "Легенды, мифы и тайны Уфы",
        "video": ["video-1-1.avi"],
        "dates": [1479531600000],
        "duration": 7,
        "movementType": "walk",
        "area": "Экскурсия в черте города",
        "meetingPlace": "ост. Заброшенное кладбище",
        "price": 2100,
        "rating": 5,
        "descriptionTitle": "Заголовок описания",
        "description": "Важность этой функции подчеркивается тем фактом, что самоактуализация осознаёт культурный гештальт. Репрезентативная система возможна. Когнитивная составляющая, в первом приближении, дает эскапизм. Аутизм неизменяем. Самоактуализация доступна. Роджерс первым ввел в научный обиход понятие «клиент», так как социализация отчуждает ролевой код. Бихевиоризм, конечно, аннигилирует материалистический стресс. Импульс осознаёт закон. Реакция, конечно, прекрасно аннигилирует комплекс. По их почти единодушному мнению, филогенез отражает возрастной психоанализ.",
        "photo": ["tour-1.png"],
        "visited": 2500,
        "cabinetId": 1,
        "operator": "foo travel",
        "collections": [],
        "city": "Уфа",
        "important": ["Экскурсия не для слабонервных!", "Есть опасность для жизни", "Двухразовое питание"],
        "included": ["Питание в кафе на кладбище", "Прокат туалетной бумаги", "Работа инструктора"],
        "notIncluded": ["Фото-видео съемка"]
      },
      {
        "id": 2,
        "title": "Обзорная экскурсия по Уфе",
        "video": ["video-1-1.avi"],
        "dates": [1479531600000],
        "duration": 5,
        "movementType": "walk",
        "area": "Экскурсия в черте города",
        "meetingPlace": "",
        "price": 6000,
        "rating": 3,
        "descriptionTitle": "Заголовок описания",
        "description": "Важность этой функции подчеркивается тем фактом, что самоактуализация осознаёт культурный гештальт. Репрезентативная система возможна. Когнитивная составляющая, в первом приближении, дает эскапизм. Аутизм неизменяем. Самоактуализация доступна. Роджерс первым ввел в научный обиход понятие «клиент», так как социализация отчуждает ролевой код. Бихевиоризм, конечно, аннигилирует материалистический стресс. Импульс осознаёт закон. Реакция, конечно, прекрасно аннигилирует комплекс. По их почти единодушному мнению, филогенез отражает возрастной психоанализ.",
        "photo": ["tour-2.png"],
        "visited": 2500,
        "cabinetId": 1,
        "operator": "foo travel",
        "collections": [],
        "city": "Уфа",
        "important": ["Экскурсия не для слабонервных!", "Есть опасность для жизни", "Двухразовое питание"],
        "included": ["Питание в кафе на кладбище", "Прокат туалетной бумаги", "Работа инструктора"],
        "notIncluded": ["Фото-видео съемка"]
      },
      {
        "id": 3,
        "title": "Духовное наследие",
        "video": ["video-1-1.avi"],
        "dates": [1479531600000],
        "duration": 7,
        "movementType": "walk",
        "area": "Экскурсия в черте города",
        "meetingPlace": "",
        "price": 1100,
        "rating": 4,
        "descriptionTitle": "Заголовок описания",
        "description": "Важность этой функции подчеркивается тем фактом, что самоактуализация осознаёт культурный гештальт. Репрезентативная система возможна. Когнитивная составляющая, в первом приближении, дает эскапизм. Аутизм неизменяем. Самоактуализация доступна. Роджерс первым ввел в научный обиход понятие «клиент», так как социализация отчуждает ролевой код. Бихевиоризм, конечно, аннигилирует материалистический стресс. Импульс осознаёт закон. Реакция, конечно, прекрасно аннигилирует комплекс. По их почти единодушному мнению, филогенез отражает возрастной психоанализ.",
        "photo": ["tour-3.png"],
        "visited": 2500,
        "cabinetId": 1,
        "operator": "foo travel",
        "collections": [],
        "city": "Уфа",
        "important": ["Экскурсия не для слабонервных!", "Есть опасность для жизни", "Двухразовое питание"],
        "included": ["Питание в кафе на кладбище", "Прокат туалетной бумаги", "Работа инструктора"],
        "notIncluded": ["Фото-видео съемка"]
      },
      {
        "id": 4,
        "title": "Внедорожный тур Сердце Башкортостана",
        "video": ["video-1-1.avi"],
        "dates": [1479531600000],
        "duration": 7,
        "movementType": "car",
        "area": "",
        "meetingPlace": "",
        "price": 6000,
        "rating": 4,
        "descriptionTitle": "Заголовок описания",
        "description": "Важность этой функции подчеркивается тем фактом, что самоактуализация осознаёт культурный гештальт. Репрезентативная система возможна. Когнитивная составляющая, в первом приближении, дает эскапизм. Аутизм неизменяем. Самоактуализация доступна. Роджерс первым ввел в научный обиход понятие «клиент», так как социализация отчуждает ролевой код. Бихевиоризм, конечно, аннигилирует материалистический стресс. Импульс осознаёт закон. Реакция, конечно, прекрасно аннигилирует комплекс. По их почти единодушному мнению, филогенез отражает возрастной психоанализ.",
        "photo": ["tour-4.png"],
        "visited": 2500,
        "cabinetId": 1,
        "operator": "foo travel",
        "collections": ['closeTo'],
        "city": "Белорецк",
        "important": ["Экскурсия не для слабонервных!", "Есть опасность для жизни", "Двухразовое питание"],
        "included": ["Питание в кафе на кладбище", "Прокат туалетной бумаги", "Работа инструктора"],
        "notIncluded": ["Фото-видео съемка"]
      },
      {
        "id": 5,
        "title": "Каякинг",
        "video": ["tour-5"],
        "dates": [1479531600000],
        "duration": 7,
        "movementType": "walk",
        "area": "",
        "meetingPlace": "",
        "price": 6000,
        "rating": 3,
        "descriptionTitle": "Заголовок описания",
        "description": "Восприятие последовательно аннигилирует индивидуальный эскапизм, это обозначено Ли Россом как фундаментальная ошибка атрибуции, которая прослеживается во многих экспериментах. Идентификация осознаёт тест, о чем и писал А.Маслоу в своей работе 'Мотивация и личность'. Гомеостаз просветляет психоз, следовательно тенденция к конформизму связана с менее низким интеллектом. Индивидуальность возможна.",
        "photo": ["tour-5.png"],
        "visited": 2500,
        "cabinetId": 1,
        "operator": "foo travel",
        "collections": ['closeTo', 'testimonials'],
        "city": "Салават",
        "important": ["Экскурсия не для слабонервных!", "Есть опасность для жизни", "Двухразовое питание"],
        "included": ["Питание в кафе на кладбище", "Прокат туалетной бумаги", "Работа инструктора"],
        "notIncluded": ["Фото-видео съемка"],
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
        "dates": [1479531600000],
        "duration": 2,
        "movementType": "walk",
        "area": "Экскурсия в черте города",
        "meetingPlace": "",
        "price": 1100,
        "rating": 4,
        "descriptionTitle": "Заголовок описания",
        "description": "Восприятие последовательно аннигилирует индивидуальный эскапизм, это обозначено Ли Россом как фундаментальная ошибка атрибуции, которая прослеживается во многих экспериментах. Идентификация осознаёт тест, о чем и писал А.Маслоу в своей работе 'Мотивация и личность'. Гомеостаз просветляет психоз, следовательно тенденция к конформизму связана с менее низким интеллектом. Индивидуальность возможна.",
        "photo": ["tour-6.png"],
        "visited": 2500,
        "cabinetId": 2,
        "operator": "foo travel",
        "collections": ['closeTo'],
        "city": "Белорецк",
        "important": ["Экскурсия не для слабонервных!", "Есть опасность для жизни", "Двухразовое питание"],
        "included": ["Питание в кафе на кладбище", "Прокат туалетной бумаги", "Работа инструктора"],
        "notIncluded": ["Фото-видео съемка"]
      }
    ];

    let events = [
      {
        "id": 1,
        "code": "001002",
        "userId": 1,
        "userName": "Анна Антоновна",
        "count": 1,
        "userPhone": '8 926 22 22 222',
        "tourId": 1,
        "tourTitle": 'Легенды, мифы и тайны Уфы',
        "date": 1479192300000,
        "cabinetId": 1,
        "guidePhone": '8 926 11 11 111'
      },
      {
        "id": 2,
        "code": "001044",
        "userId": 1,
        "userName": "Анна Антоновна",
        "count": 1,
        "userPhone": '8 926 22 22 222',
        "tourId": 2,
        "tourTitle": 'Обзорная экскурсия по Уфе',
        "date": 1477982700000,
        "cabinetId": 1,
        "guidePhone": '8 926 11 11 111'
      },
      {
        "id": 3,
        "code": "001570",
        "userId": 2,
        "userName": "Леонид Иванович",
        "count": 2,
        "userPhone": '8 926 22 22 224',
        "tourId": 3,
        "tourTitle": 'Духовное наследие',
        "date": 1478346900000,
        "cabinetId": 2,
        "guidePhone": '8 926 11 11 111'
      }
    ]

    let users = [
      {
        "id": 1,
        "email": 'example@example.com',
        "name": "Анна Антоновна",
        "userPhone": '8 926 22 22 222'
      },
      {
        "id": 2,
        "email": 'hochu@greencartu.com',
        "name": "Леонид Иванович",
        "userPhone": '8 926 22 22 224'
      },
    ];

    let guides = [
      {
        "id": 1,
        "email": 'igor@popkov.com',
        "name": 'ORDEN Travel',
        "phone": '8 926 11 11 111'
      },
      {
        "id": 2,
        "email": 'elon@mask.com',
        "name": 'SpaceX',
        "phone": '8 926 11 11 112'
      }
    ];

    return {tours, events, users, guides};
  }
}
