export interface Data {
  sol: string;
  First_UTC: string;
  AT: {
    mn: number;
    mx: number;
  };
}
export interface DayCardProps {
  data: Data;
  unit: string;
}
