import dayjs from "dayjs";

export default class FlowLog {
  date: dayjs.Dayjs = dayjs();
  intensity: string = "Heavy";

  constructor(date: dayjs.Dayjs, intensity?: string) {
    this.date = date;
    if (intensity != null) {
      this.intensity = intensity;
    }
  }

  isSame(a: FlowLog): boolean {
    return a.date.isSame(this.date, "date");
  }
}
