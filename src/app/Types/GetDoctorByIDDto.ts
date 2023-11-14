import { WeekScheduleForDoctorsDto } from "./WeekScheduleForDoctorsDto";

export interface GetDoctorByIDDto {
    id: string;
    name: string;
    title: string | null;
    description: string | null;
    specializationName: string;
    weekSchadual: WeekScheduleForDoctorsDto[] | null;
}