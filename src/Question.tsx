export type Question = {
    question: string,
    answer: string,
    isAsked: boolean,
    leadingQuestion?: Question
}