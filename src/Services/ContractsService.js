const mockContracts = [
  {
    id: 1,
    number: 'UAE-24-150',
    signingDate: '2024-09-17',
    clientName: 'Exclusive Dome',
    summary: '3D сканирование общественного помещения в Dalma Mall, Adu-dhabi.',
    manager: 'Buryi Dmitry',
    area: 'квадратные метры',
    status: 'Создан',
    amountWithoutNDS: 4800000,
    expensesPlan: 271.50,
    executor: 'Ivanov Ivan',
    executionDate: '2024-10-01',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract1.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses1.pdf' },
    ],
    payments: [
      { id: 1, amount: 1500, date: '2024-09-18' },
      { id: 2, amount: 3300, date: '2024-09-25' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 100, date: '2024-09-20' },
      { category: 'Проживание', amount: 150, date: '2024-09-22' },
      { category: 'Прочие', amount: 21.50, date: '2024-09-23' },
    ]
  },
  {
    id: 2,
    number: 'UAE-24-151',
    signingDate: '2024-09-18',
    clientName: 'Creative Minds',
    summary: 'Проектирование выставочного стенда для выставки в Abu Dhabi.',
    manager: 'Petrov Alexey',
    area: 'квадратные метры',
    status: 'В процессе',
    amountWithoutNDS: 2500000,
    expensesPlan: 300.00,
    executor: 'Sidorov Sergey',
    executionDate: '2024-10-15',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract2.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses2.pdf' },
    ],
    payments: [
      { id: 1, amount: 2000, date: '2024-09-19' },
      { id: 2, amount: 4000, date: '2024-09-26' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 150, date: '2024-09-21' },
      { category: 'Проживание', amount: 200, date: '2024-09-23' },
    ]
  },
  {
    id: 3,
    number: 'UAE-24-152',
    signingDate: '2024-09-19',
    clientName: 'Smart Solutions',
    summary: 'Разработка программного обеспечения для управления выставками.',
    manager: 'Ivanov Ivan',
    area: 'квадратные метры',
    status: 'Создан',
    amountWithoutNDS: 5000000,
    expensesPlan: 150.00,
    executor: 'Buryi Dmitry',
    executionDate: '2024-11-01',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract3.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses3.pdf' },
    ],
    payments: [
      { id: 1, amount: 1000, date: '2024-09-20' },
      { id: 2, amount: 3500, date: '2024-09-28' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 120, date: '2024-09-22' },
      { category: 'Проживание', amount: 180, date: '2024-09-24' },
      { category: 'Прочие', amount: 30.00, date: '2024-09-25' },
    ]
  },
  {
    id: 4,
    number: 'UAE-24-153',
    signingDate: '2024-09-20',
    clientName: 'Tech Innovations',
    summary: 'Создание виртуального тура по музею.',
    manager: 'Kovalev Andrey',
    area: 'квадратные метры',
    status: 'Создан',
    amountWithoutNDS: 3200000,
    expensesPlan: 180.00,
    executor: 'Petrov Alexey',
    executionDate: '2024-10-20',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract4.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses4.pdf' },
    ],
    payments: [
      { id: 1, amount: 2500, date: '2024-09-21' },
      { id: 2, amount: 3000, date: '2024-09-29' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 200, date: '2024-09-23' },
      { category: 'Проживание', amount: 220, date: '2024-09-25' },
    ]
  },
  {
    id: 5,
    number: 'UAE-24-154',
    signingDate: '2024-09-21',
    clientName: 'Global Design',
    summary: 'Создание брендинговых материалов для новой кампании.',
    manager: 'Sidorov Sergey',
    area: 'квадратные метры',
    status: 'В процессе',
    amountWithoutNDS: 1500000,
    expensesPlan: 250.00,
    executor: 'Ivanov Ivan',
    executionDate: '2024-10-05',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract5.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses5.pdf' },
    ],
    payments: [
      { id: 1, amount: 1000, date: '2024-09-22' },
      { id: 2, amount: 2000, date: '2024-09-30' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 100, date: '2024-09-24' },
      { category: 'Проживание', amount: 150, date: '2024-09-26' },
    ]
  },
  {
    id: 6,
    number: 'UAE-24-155',
    signingDate: '2024-09-22',
    clientName: 'Event Masters',
    summary: 'Организация корпоративного мероприятия.',
    manager: 'Buryi Dmitry',
    area: 'квадратные метры',
    status: 'Создан',
    amountWithoutNDS: 2800000,
    expensesPlan: 400.00,
    executor: 'Kovalev Andrey',
    executionDate: '2024-10-12',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract6.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses6.pdf' },
    ],
    payments: [
      { id: 1, amount: 1500, date: '2024-09-23' },
      { id: 2, amount: 3500, date: '2024-10-01' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 200, date: '2024-09-25' },
      { category: 'Проживание', amount: 250, date: '2024-09-27' },
    ]
  },
  {
    id: 7,
    number: 'UAE-24-156',
    signingDate: '2024-09-23',
    clientName: 'Bright Futures',
    summary: 'Разработка образовательной платформы.',
    manager: 'Petrov Alexey',
    area: 'квадратные метры',
    status: 'Создан',
    amountWithoutNDS: 3600000,
    expensesPlan: 275.00,
    executor: 'Sidorov Sergey',
    executionDate: '2024-10-25',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract7.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses7.pdf' },
    ],
    payments: [
      { id: 1, amount: 2000, date: '2024-09-24' },
      { id: 2, amount: 3000, date: '2024-10-05' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 150, date: '2024-09-26' },
      { category: 'Проживание', amount: 180, date: '2024-09-28' },
    ]
  },
  {
    id: 8,
    number: 'UAE-24-157',
    signingDate: '2024-09-24',
    clientName: 'Visionary Designs',
    summary: 'Создание веб-сайта для нового продукта.',
    manager: 'Ivanov Ivan',
    area: 'квадратные метры',
    status: 'В процессе',
    amountWithoutNDS: 4500000,
    expensesPlan: 220.00,
    executor: 'Buryi Dmitry',
    executionDate: '2024-11-05',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract8.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses8.pdf' },
    ],
    payments: [
      { id: 1, amount: 1200, date: '2024-09-25' },
      { id: 2, amount: 2800, date: '2024-10-10' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 200, date: '2024-09-27' },
      { category: 'Проживание', amount: 300, date: '2024-09-29' },
    ]
  },
  {
    id: 9,
    number: 'UAE-24-158',
    signingDate: '2024-09-25',
    clientName: 'Future Tech',
    summary: 'Разработка инновационного приложения.',
    manager: 'Kovalev Andrey',
    area: 'квадратные метры',
    status: 'Создан',
    amountWithoutNDS: 5500000,
    expensesPlan: 350.00,
    executor: 'Sidorov Sergey',
    executionDate: '2024-11-15',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract9.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses9.pdf' },
    ],
    payments: [
      { id: 1, amount: 2500, date: '2024-09-26' },
      { id: 2, amount: 3500, date: '2024-10-12' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 180, date: '2024-09-28' },
      { category: 'Проживание', amount: 220, date: '2024-09-30' },
    ]
  },
  {
    id: 10,
    number: 'UAE-24-159',
    signingDate: '2024-09-26',
    clientName: 'Eco Solutions',
    summary: 'Создание экологического проекта.',
    manager: 'Petrov Alexey',
    area: 'квадратные метры',
    status: 'Создан',
    amountWithoutNDS: 3200000,
    expensesPlan: 240.00,
    executor: 'Buryi Dmitry',
    executionDate: '2024-11-01',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract10.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses10.pdf' },
    ],
    payments: [
      { id: 1, amount: 1700, date: '2024-09-27' },
      { id: 2, amount: 2900, date: '2024-10-08' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 200, date: '2024-09-29' },
      { category: 'Проживание', amount: 250, date: '2024-10-01' },
    ]
  },
  {
    id: 11,
    number: 'UAE-24-160',
    signingDate: '2024-09-27',
    clientName: 'Digital Dreams',
    summary: 'Разработка цифровых медиа материалов.',
    manager: 'Ivanov Ivan',
    area: 'квадратные метры',
    status: 'В процессе',
    amountWithoutNDS: 4100000,
    expensesPlan: 300.00,
    executor: 'Sidorov Sergey',
    executionDate: '2024-11-10',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract11.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses11.pdf' },
    ],
    payments: [
      { id: 1, amount: 1900, date: '2024-09-28' },
      { id: 2, amount: 3300, date: '2024-10-14' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 220, date: '2024-09-30' },
      { category: 'Проживание', amount: 230, date: '2024-10-02' },
    ]
  },
  {
    id: 12,
    number: 'UAE-24-161',
    signingDate: '2024-09-28',
    clientName: 'Insight Analytics',
    summary: 'Создание аналитической платформы.',
    manager: 'Kovalev Andrey',
    area: 'квадратные метры',
    status: 'Создан',
    amountWithoutNDS: 5000000,
    expensesPlan: 350.00,
    executor: 'Petrov Alexey',
    executionDate: '2024-11-20',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract12.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses12.pdf' },
    ],
    payments: [
      { id: 1, amount: 2000, date: '2024-09-29' },
      { id: 2, amount: 4000, date: '2024-10-18' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 250, date: '2024-10-01' },
      { category: 'Проживание', amount: 300, date: '2024-10-03' },
    ]
  },
  {
    id: 13,
    number: 'UAE-24-162',
    signingDate: '2024-09-29',
    clientName: 'NextGen Tech',
    summary: 'Разработка технологии искусственного интеллекта.',
    manager: 'Buryi Dmitry',
    area: 'квадратные метры',
    status: 'Создан',
    amountWithoutNDS: 7200000,
    expensesPlan: 400.00,
    executor: 'Sidorov Sergey',
    executionDate: '2024-11-25',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract13.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses13.pdf' },
    ],
    payments: [
      { id: 1, amount: 3000, date: '2024-09-30' },
      { id: 2, amount: 5000, date: '2024-10-21' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 300, date: '2024-10-02' },
      { category: 'Проживание', amount: 350, date: '2024-10-04' },
    ]
  },
  {
    id: 14,
    number: 'UAE-24-163',
    signingDate: '2024-09-30',
    clientName: 'Smart City',
    summary: 'Проектирование умного города.',
    manager: 'Ivanov Ivan',
    area: 'квадратные метры',
    status: 'В процессе',
    amountWithoutNDS: 6500000,
    expensesPlan: 500.00,
    executor: 'Petrov Alexey',
    executionDate: '2024-12-01',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract14.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses14.pdf' },
    ],
    payments: [
      { id: 1, amount: 2500, date: '2024-10-01' },
      { id: 2, amount: 4500, date: '2024-10-30' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 250, date: '2024-10-03' },
      { category: 'Проживание', amount: 400, date: '2024-10-05' },
    ]
  },
  {
    id: 15,
    number: 'UAE-24-164',
    signingDate: '2024-10-01',
    clientName: 'Health Innovations',
    summary: 'Разработка приложения для здоровья.',
    manager: 'Kovalev Andrey',
    area: 'квадратные метры',
    status: 'Создан',
    amountWithoutNDS: 4200000,
    expensesPlan: 350.00,
    executor: 'Buryi Dmitry',
    executionDate: '2024-12-10',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract15.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses15.pdf' },
    ],
    payments: [
      { id: 1, amount: 2200, date: '2024-10-02' },
      { id: 2, amount: 3200, date: '2024-10-20' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 300, date: '2024-10-04' },
      { category: 'Проживание', amount: 280, date: '2024-10-06' },
    ]
  },
  {
    id: 16,
    number: 'UAE-24-165',
    signingDate: '2024-10-02',
    clientName: 'Agritech Solutions',
    summary: 'Создание приложения для сельского хозяйства.',
    manager: 'Sidorov Sergey',
    area: 'квадратные метры',
    status: 'Создан',
    amountWithoutNDS: 3700000,
    expensesPlan: 290.00,
    executor: 'Ivanov Ivan',
    executionDate: '2024-12-15',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract16.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses16.pdf' },
    ],
    payments: [
      { id: 1, amount: 1500, date: '2024-10-03' },
      { id: 2, amount: 2500, date: '2024-10-15' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 220, date: '2024-10-05' },
      { category: 'Проживание', amount: 250, date: '2024-10-07' },
    ]
  },
  {
    id: 17,
    number: 'UAE-24-166',
    signingDate: '2024-10-03',
    clientName: 'Urban Mobility',
    summary: 'Разработка приложения для общественного транспорта.',
    manager: 'Kovalev Andrey',
    area: 'квадратные метры',
    status: 'В процессе',
    amountWithoutNDS: 4800000,
    expensesPlan: 350.00,
    executor: 'Buryi Dmitry',
    executionDate: '2024-12-20',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract17.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses17.pdf' },
    ],
    payments: [
      { id: 1, amount: 2600, date: '2024-10-04' },
      { id: 2, amount: 3900, date: '2024-10-25' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 280, date: '2024-10-06' },
      { category: 'Проживание', amount: 300, date: '2024-10-08' },
    ]
  },
  {
    id: 18,
    number: 'UAE-24-167',
    signingDate: '2024-10-04',
    clientName: 'Green Planet',
    summary: 'Создание устойчивого проекта.',
    manager: 'Sidorov Sergey',
    area: 'квадратные метры',
    status: 'Создан',
    amountWithoutNDS: 6000000,
    expensesPlan: 420.00,
    executor: 'Ivanov Ivan',
    executionDate: '2024-12-25',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract18.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses18.pdf' },
    ],
    payments: [
      { id: 1, amount: 3000, date: '2024-10-05' },
      { id: 2, amount: 5000, date: '2024-10-28' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 300, date: '2024-10-09' },
      { category: 'Проживание', amount: 350, date: '2024-10-11' },
    ]
  },
  {
    id: 19,
    number: 'UAE-24-168',
    signingDate: '2024-10-05',
    clientName: 'Culinary Arts',
    summary: 'Создание кулинарного приложения.',
    manager: 'Kovalev Andrey',
    area: 'квадратные метры',
    status: 'Создан',
    amountWithoutNDS: 4200000,
    expensesPlan: 380.00,
    executor: 'Petrov Alexey',
    executionDate: '2024-12-30',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract19.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses19.pdf' },
    ],
    payments: [
      { id: 1, amount: 2000, date: '2024-10-06' },
      { id: 2, amount: 3000, date: '2024-10-22' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 320, date: '2024-10-10' },
      { category: 'Проживание', amount: 400, date: '2024-10-12' },
    ]
  },
  {
    id: 20,
    number: 'UAE-24-169',
    signingDate: '2024-10-06',
    clientName: 'Fashion Hub',
    summary: 'Разработка приложения для онлайн-магазина.',
    manager: 'Ivanov Ivan',
    area: 'квадратные метры',
    status: 'В процессе',
    amountWithoutNDS: 5100000,
    expensesPlan: 360.00,
    executor: 'Sidorov Sergey',
    executionDate: '2025-01-05',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract20.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses20.pdf' },
    ],
    payments: [
      { id: 1, amount: 2500, date: '2024-10-07' },
      { id: 2, amount: 4500, date: '2024-11-01' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 300, date: '2024-10-13' },
      { category: 'Проживание', amount: 280, date: '2024-10-15' },
    ]
  },
  {
    id: 21,
    number: 'UAE-24-170',
    signingDate: '2024-10-07',
    clientName: 'Digital Marketing',
    summary: 'Создание кампании по цифровому маркетингу.',
    manager: 'Petrov Alexey',
    area: 'квадратные метры',
    status: 'Создан',
    amountWithoutNDS: 3500000,
    expensesPlan: 300.00,
    executor: 'Buryi Dmitry',
    executionDate: '2025-01-10',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract21.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses21.pdf' },
    ],
    payments: [
      { id: 1, amount: 1800, date: '2024-10-08' },
      { id: 2, amount: 2200, date: '2024-11-15' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 250, date: '2024-10-09' },
      { category: 'Проживание', amount: 200, date: '2024-10-11' },
    ]
  },
  {
    id: 22,
    number: 'UAE-24-171',
    signingDate: '2024-10-08',
    clientName: 'Social Media Agency',
    summary: 'Разработка стратегии в социальных сетях.',
    manager: 'Kovalev Andrey',
    area: 'квадратные метры',
    status: 'Создан',
    amountWithoutNDS: 2900000,
    expensesPlan: 270.00,
    executor: 'Sidorov Sergey',
    executionDate: '2025-01-20',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract22.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses22.pdf' },
    ],
    payments: [
      { id: 1, amount: 1500, date: '2024-10-09' },
      { id: 2, amount: 2200, date: '2024-11-30' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 180, date: '2024-10-10' },
      { category: 'Проживание', amount: 200, date: '2024-10-12' },
    ]
  },
  {
    id: 23,
    number: 'UAE-24-172',
    signingDate: '2024-10-09',
    clientName: 'E-commerce Solutions',
    summary: 'Создание платформы для электронной коммерции.',
    manager: 'Ivanov Ivan',
    area: 'квадратные метры',
    status: 'В процессе',
    amountWithoutNDS: 4900000,
    expensesPlan: 340.00,
    executor: 'Buryi Dmitry',
    executionDate: '2025-01-30',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract23.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses23.pdf' },
    ],
    payments: [
      { id: 1, amount: 2300, date: '2024-10-10' },
      { id: 2, amount: 3800, date: '2024-11-20' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 310, date: '2024-10-11' },
      { category: 'Проживание', amount: 370, date: '2024-10-13' },
    ]
  },
  {
    id: 24,
    number: 'UAE-24-173',
    signingDate: '2024-10-10',
    clientName: 'Content Creators',
    summary: 'Разработка контента для веб-сайтов.',
    manager: 'Kovalev Andrey',
    area: 'квадратные метры',
    status: 'Создан',
    amountWithoutNDS: 3100000,
    expensesPlan: 250.00,
    executor: 'Sidorov Sergey',
    executionDate: '2025-02-05',
    documents: [
      { name: 'Contract PDF', url: '/documents/contract24.pdf' },
      { name: 'Expenses PDF', url: '/documents/expenses24.pdf' },
    ],
    payments: [
      { id: 1, amount: 1400, date: '2024-10-11' },
      { id: 2, amount: 2100, date: '2024-11-25' },
    ],
    expenses: [
      { category: 'Транспорт', amount: 160, date: '2024-10-12' },
      { category: 'Проживание', amount: 230, date: '2024-10-14' },
    ]
  }
];


const ContractsService = {
  getContracts() {
    return mockContracts;
  },
};

export default ContractsService;
