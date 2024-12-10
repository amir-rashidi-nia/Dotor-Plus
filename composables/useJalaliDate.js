import { useDayjs } from "#dayjs";
import jalaliday from "jalaliday";

export const useJalaliDate = (date) => {
  const dayjs = useDayjs();
  dayjs.extend(jalaliday);
  const jalaliDate = dayjs.calendar("jalali");
  return jalaliDate(date).locale('fa').format('DD MMMM YYYY');
};
