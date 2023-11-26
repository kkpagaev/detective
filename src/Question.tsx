export type Question = {
    question: string,
    answer: string,
    isAsked: boolean,
    points: number,
    leadingQuestion?: Question
}

export type LevelItem = {
    title: string,
    questions: Array<Question>
}

export type AskedQuestion = {
    isAsked: boolean,
    isLeadingAsked?: boolean
}

export type AskedLevelItem = {
    title: string,
    nAskedQuestions: number,
    askedQuestions: Array<AskedQuestion>
}

export const questions: Array<Array<LevelItem>> = [
    [
        {
            title: "Олександр",
            questions: [
                {
                    question: "Кого ви підозрюєте та чому?",
                    answer: "Це Максим та Петро!",
                    isAsked: false,
                    points: 0,
                    leadingQuestion: {
                        question: "На яких підставах?",
                        answer: "Бачив як Макс вийшов з червоною флешкою із серверної та передав її Петру.",
                        isAsked: false,
                        points: 10
                    }
                },
                {
                    question: "Що ви помітили під час атаки?",
                    answer: "Сервер ліг на півгодини.",
                    isAsked: false,
                    points: 0
                }
            ]
        },
        {
            title: "Петро",
            questions: [
                {
                    question: "Кого ви підозрюєте та чому?",
                    answer: "Це Саня!",
                    isAsked: false,
                    points: 0,
                    leadingQuestion: {
                        question: "На яких підставах?",
                        answer: "Він дуже довго відповідає на повідомлення. Це підозріло.",
                        isAsked: false,
                        points: 0
                    }
                },
                {
                    question: "Що ви помітили під час атаки?",
                    answer: "Все було як завжди.",
                    isAsked: false,
                    points: 0
                }
            ]
        },
        {
            title: "Максим",
            questions: [
                {
                    question: "Кого ви підозрюєте та чому?",
                    answer: "Я не міг би бути причетним, працював над іншим проектом у той час.",
                    isAsked: false,
                    points: 10
                },
                {
                    question: "Що ви помітили під час атаки?",
                    answer: "Бачив певні дивні активності на серверах, але не зміг ідентифікувати звідки.",
                    isAsked: false,
                    points: 0,
                    leadingQuestion: {
                        question: "Ви казали комусь ще про це?",
                        answer: "Ні, вони з часом пропали та я подумав, що просто був високий трафік.",
                        isAsked: false,
                        points: 0
                    }
                }
            ]
        },
        {
            title: "Віктор", 
            questions: [
                {
                    question: "Кого ви підозрюєте та чому?",
                    answer: "Софія трохи дивакувата.",
                    isAsked: false,
                    points: 0,
                    leadingQuestion: {
                        question: "Чому ви так кажете?",
                        answer: "Завжди кудись спішить, якщо з нею привітаєшся — вона коситься на тебе.",
                        isAsked: false,
                        points: 0
                    }
                },
                {
                    question: "Що ви помітили під час атаки?",
                    answer: "Я працюю тільки декілька днів, нічого не бачив сам. Можете подивитись записи з камер.",
                    isAsked: false,
                    points: 0
                }
            ]
        },
        {
            title: "Софія", 
            questions: [
                {
                    question: "Кого ви підозрюєте та чому?",
                    answer: "Не знаю нічого про атаку, займалася своїми обов'язками в маркетингу.",
                    isAsked: false,
                    points: 0
                },
                {
                    question: "Що ви помітили під час атаки?",
                    answer: "Побачила, як Максим виходив з серверної зони.",
                    isAsked: false,
                    points: 10,
                    leadingQuestion: {
                        question: "Куди він направлявся?",
                        answer: "Наскільки я памʼятаю, до ліфта.",
                        isAsked: false,
                        points: 0
                    }
                }
            ]
        },
        {
            title: "Анна", 
            questions: [
                {
                    question: "Кого ви підозрюєте та чому?",
                    answer: "Я не знаю... Може краще спитайте Олександра?",
                    isAsked: false,
                    points: 0
                },
                {
                    question: "Що ви помітили під час атаки?",
                    answer: "Не могла завантажити зміни на сервер.",
                    isAsked: false,
                    points: 0,
                    leadingQuestion: {
                        question: "Як довго це продовжувалось?",
                        answer: "Десь годину.",
                        isAsked: false,
                        points: 0
                    }
                }
            ]
        },
        {
            title: "Юлія", 
            questions: [
                {
                    question: "Кого ви підозрюєте та чому?",
                    answer: "Може Петро? Він завжди задає дивні питання.",
                    isAsked: false,
                    points: 0,
                    leadingQuestion: {
                        question: "Питання якого типу?",
                        answer: "Типу, як працює сервер, чи не треба зробити бекап.",
                        isAsked: false,
                        points: 10
                    }
                },
                {
                    question: "Що ви помітили під час атаки?",
                    answer: "Я тоді була на лікарняному, не знаю подробиць.",
                    isAsked: false,
                    points: 0
                }
            ]
        }
    ]
];

export const QUESTION_LIMIT = 2;