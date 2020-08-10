export class Timer {
  readonly id: string;
  readonly note: string;

  constructor (
    id: string,
    note: string
  ) {
    this.id = id
    this.note = note
  }

  public getId (): string {
    return this.id
  }

  public getNote (): string {
    return this.note
  }
}
