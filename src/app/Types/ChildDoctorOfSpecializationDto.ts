import { WeekScheduleForDoctorsDto } from "./WeekScheduleForDoctorsDto";

export interface ChildDoctorOfSpecializationDto {
    id: string;
    name: string;
    title: string | null;
    description: string | null;
    weekSchadual: WeekScheduleForDoctorsDto[] | null;
}