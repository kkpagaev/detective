import { ReactNode } from "react"

export const textColorVariants: any = {
    blue: 'text-blue-500',
    sky: 'text-sky-600',
    red: 'text-red-500',
    yellow: 'text-yellow-400',
    rose: 'text-rose-300',
    emerald: 'text-emerald-300',
    orange: 'text-orange-400',
    black: 'text-black',
  }

export type Question = {
    question: string,
    answer: string,
    isAsked: boolean,
    points: number,
    lead?: ReactNode,
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

export type AskedQuestionThree = {
    isAsked: boolean,
    isLeadingAsked?: AskedQuestionThree
}
export type AskedLevelItemThree = {
    title: string,
    nAskedQuestions: number,
    askedQuestions: Array<AskedQuestionThree>
}

export const questions: Array<LevelItem> = [
    {
        title: "Олександр",
        questions: [
            {
                question: "Кого ви підозрюєте та чому?",
                answer: "Мене напружує Петро останнім часом.",
                isAsked: false,
                points: 0,
                leadingQuestion: {
                    question: "Чому?",
                    answer: "Він завжди задає специфічні питання які поза його компетенцією. Наприклад, коли останній раз був бекап серверу.",
                    isAsked: false,
                    points: 10,
                    lead: <p><span className={textColorVariants.yellow}>Петро</span> часто задає специфічні питання які не мали б його стосуватись, за свідченням <span className={textColorVariants.emerald}>Олександра</span>.</p>
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
                answer: "На вашому місці — я би придивився до Софії.",
                isAsked: false,
                points: 0,
                leadingQuestion: {
                    question: "Чому?",
                    answer: "Вона явно веде свою гру. Маніпулятор ще той. Та і соціопат вона, скоріш за все.",
                    lead: <p><span className={textColorVariants.yellow}>Петро</span> дав <span className={textColorVariants.orange}>Софії</span> не дуже гарну характеристику.</p>,
                    isAsked: false,
                    points: 10
                }
            },
            {
                question: "Що ви помітили під час атаки?",
                answer: "Я був на діловій зустрічі, нічого не бачив.",
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
                points: 10,
                lead: <p><span className={textColorVariants.red}>Максим</span> почав одразу заперечувати свою причетність.</p>,
            },
            {
                question: "Що ви помітили під час атаки?",
                answer: "Бачив дивні активності на сервері, але так і не зміг ідентифікувати їх.",
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
                answer: "Макс трохи дивакуватий.",
                isAsked: false,
                points: 0,
                leadingQuestion: {
                    question: "Чому ви так кажете?",
                    answer: "Завжди кудись спішить, якщо з ним привітаєшся — він коситься на тебе.",
                    lead: <p><span className={textColorVariants.blue}>Віктор</span> відмітив підозрілу поведінку <span className={textColorVariants.red}>Максима</span>.</p>,
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
                answer: "Максим ходив із червоною флешкою. Під колір його футболки, хах. Я більше ніколи не бачило його в неї.",
                isAsked: false,
                points: 10,
                lead: <p><span className={textColorVariants.orange}>Софія</span> відмітила, що <span className={textColorVariants.red}>Максим</span> у день інциденту мав червону флешку яку він більше ніколи не приносив.</p>,
                leadingQuestion: {
                    question: "Він передава її комусь?",
                    answer: "Не памʼятаю, якщо чесно.",
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
                    answer: "Десь півгодини.",
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
                answer: "Я ніколи не довіряла Софії.",
                isAsked: false,
                points: 0,
                leadingQuestion: {
                    question: "Чим це викликано?",
                    answer: "Вона карʼєристка, всіх тримає на відстані. Може використала когось аби продати цінну інформацію.",
                    isAsked: false,
                    points: 10,
                    lead: <p><span className={textColorVariants.rose}>Юлія</span> відкликається про <span className={textColorVariants.orange}>Софію</span> як ненадійну особистість яка могла зманіпулювати кимось.</p>
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
];

export const questionsThree: Array<LevelItem> = [
    {
        title: "Максим",
        questions: [
            {
                question: "Багато що свідчить проти вас. Що ви можете сказати у свій захист?",
                answer: "Я вже казав що не причетний до цього!",
                isAsked: false,
                points: 0,
                leadingQuestion: {
                    question: "Тоді з якої причини ви взаємодіяли із сервером у день інциденту?",
                    answer: "Еее, я ж казав, там була якась дивна активність, мені потрібно було перевірити причину.",
                    isAsked: false,
                    points: 0,
                    leadingQuestion: {
                        question: "І як вам мала допомогти флешка у виявлені проблем з сервером?",
                        answer: "Що?! Так це для бекапу сервера... Вона не знадобилось врешті-решт, але про всяк випадок треба було зробити...",
                        isAsked: false,
                        points: 10,
                        lead: <p><span className={textColorVariants.red}>Макс</span> явно був здивований питанням про флешку.</p>
                    }
                }
            },
            {
                question: "Ви були у змові з кимось?",
                answer: "Як?.. Ні, я не був ні з ким у змові. Точніше я взагалі не винний!",
                isAsked: false,
                points: 10,
                lead: <p>Питання про співучасника вибило <span className={textColorVariants.red}>Максима</span> з рівноваги</p>,
                leadingQuestion: {
                    question: "Є особа яка може підтвердити ваші слова?",
                    answer: "Ну, Петро... Або Аня! Та будь-кого візьміть, всі підтвердять.",
                    isAsked: false,
                    points: 10,
                    lead: <p><span className={textColorVariants.red}>Максим</span> згадав першим <span className={textColorVariants.yellow}>Петра</span> як особу яка може поручитись за нього.</p>,
                    leadingQuestion: {
                        question: "Кажуть, ви багато спілкуєтесь із Петром, хоча у вас не мало б бути багато професійної взаємодії?",
                        answer: "Та ми просто дружимо, не можна дружити людям з різних відділів?",
                        isAsked: false,
                        points: 0,
                    }
                }
            }
        ]
    },
    {
        title: "Софія", 
        questions: [
            {
                question: "Що ви робили у день інцеденту?",
                answer: "Виконувала задачу по створенню дієвої реклами. І маю зазначити, чудово із цим впоралась!",
                isAsked: false,
                points: 0,
                leadingQuestion: {
                    question: "І як ви цього досягли?",
                    answer: "Показала на прикладі роботу нашого голосового астистенту.",
                    isAsked: false,
                    points: 10,
                    lead: <p>Невдовзі після інцеденту, <span className={textColorVariants.orange}>Софія</span> використала у рекламі приклад роботи голосового асистенту. Записи роботи асистенту зберігались на сервері.</p>,
                    leadingQuestion: {
                        question: "Ви усвідомлюєте, що на сервері зберігались записи роботи голосового асистенту з користувачами, які є конфіденційними?",
                        answer: "Що?! Я навіть і не задумувалась про це... Але я нічого не викрадала, я й не змогла б з моїми навичками",
                        isAsked: false,
                        points: 0,
                        leadingQuestion: {
                            question: "Як ви тоді отримали цей запис?",
                            answer: "Мені передав його Макс, я попросила його зробити для мене приклад, щоб я використала у рекламі.",
                            points: 10,
                            isAsked: false,
                            lead: <p>За словами <span className={textColorVariants.orange}>Софії</span>, вона отримала запис від <span className={textColorVariants.red}>Максима</span>.</p>
                        }
                    }
                }
            },
            {
                question: "О котрій ви покинули офіс у день інциденту?",
                answer: "Не памʼятаю... Приблизно о 13.",
                isAsked: false,
                points: 10,
                lead: <p><span className={textColorVariants.orange}>Софія</span> підтвердила час коли покинула офіс</p>,
                leadingQuestion: {
                    question: "У нас є свідчення того, що інцидент стався за декілька хвилин до того як ви покинули офіс.",
                    answer: "Бувають різні збіги обставин. Я могла собі дозволити піти з офісу в цей час та допрацювати з дому.",
                    isAsked: false,
                    points: 0
                }
            }
        ]
    }
];

export const QUESTION_LIMIT = 2;
export const QUESTION_LIMIT_THREE = 4;