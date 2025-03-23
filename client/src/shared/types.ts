export interface IMentor {
    name?: string;
    skills?: string[];
    pricePerSession?: number | bigint,
    level?: string;
    isAvailable?: boolean;
    timeSlots?: string[];
    timeSlotsCount?: number;
    meetingLink?: string;
}

export interface IQuizQuestion {
    question: string;
    options: string[];
    difficulty: "easy" | "medium" | "hard";
    answer: string;
}