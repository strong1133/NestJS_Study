export class Timestamp {
  time: string;

  constructor(timestamp: number) {
    const date = new Date(timestamp);
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    const d = date.getDate();
    const h = date.getHours();
    const mm = date.getMinutes();
    const ss = date.getSeconds();
    const curStamp = `${y}-${m}-${d} ${h}:${mm}:${ss}`;
    this.time = curStamp;
  }
}
