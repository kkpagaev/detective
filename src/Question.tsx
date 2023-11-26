export type Question = {
    question: string,
    answer: string,
    isAsked: boolean,
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
                    leadingQuestion: {
                    question: "На яких підставах?",
                    answer: "Бачив як Макс вийшов з червоною флешкою із серверної та передав її Петру.",
                    isAsked: false
                    }
                },
                {
                    question: "Що ви помітили під час атаки?",
                    answer: "Сервер ліг на півгодини.",
                    isAsked: false
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
                    leadingQuestion: {
                    question: "На яких підставах?",
                    answer: "Він дуже скритний.",
                    isAsked: false
                    }
                },
                {
                    question: "Що ви помітили під час атаки?",
                    answer: "Все було як завжди.",
                    isAsked: false
                }
            ]
        },
        {
            title: "Максим",
            questions: [
                {
                    question: "Кого ви підозрюєте та чому?",
                    answer: "Я не міг би бути причетним, працював над іншим проектом у той час.",
                    isAsked: false
                },
                {
                    question: "Що ви помітили під час атаки?",
                    answer: "Бачив певні дивні активності на серверах, але не зміг ідентифікувати звідки.",
                    isAsked: false,
                    leadingQuestion: {
                        question: "Ви казали комусь ще про це?",
                        answer: "Ні, вони з часом пропали та я подумав, що просто був високий трафік.",
                        isAsked: false
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
                    leadingQuestion: {
                        question: "Чому ви так кажете?",
                        answer: "Завжди кудись спішить, якщо з нею привітаєшся — вона коситься на тебе.",
                        isAsked: false
                    }
                },
                {
                    question: "Що ви помітили під час атаки?",
                    answer: "Я працюю тільки декілька днів, нічого не бачив сам. Можете подивитись записи з камер.",
                    isAsked: false
                }
            ]
        },
        {
            title: "Софія", 
            questions: [
                {
                    question: "Кого ви підозрюєте та чому?",
                    answer: "Не знаю нічого про атаку, займалася своїми обов'язками в маркетингу.",
                    isAsked: false
                },
                {
                    question: "Що ви помітили під час атаки?",
                    answer: "Побачила, як Максим виходив з серверної зони.",
                    isAsked: false,
                    leadingQuestion: {
                        question: "Куди він направлявся?",
                        answer: "Наскільки я памʼятаю, до ліфта.",
                        isAsked: false
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
                    isAsked: false
                },
                {
                    question: "Що ви помітили під час атаки?",
                    answer: "Не могла завантажити зміни на сервер.",
                    isAsked: false,
                    leadingQuestion: {
                        question: "Як довго це продовжувалось?",
                        answer: "Десь годину.",
                        isAsked: false
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
                    leadingQuestion: {
                        question: "Питання якого типу?",
                        answer: "Типу, як працює сервер, чи не треба зробити бекап.",
                        isAsked: false
                    }
                },
                {
                    question: "Що ви помітили під час атаки?",
                    answer: "Я тоді була на лікарняному, не знаю подробиць.",
                    isAsked: false
                }
            ]
        }
    ]
];

export const QUESTION_LIMIT = 2;