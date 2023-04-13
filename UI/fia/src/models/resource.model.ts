export class UserResource {
  id: string;
  name: string;
  quantity: number;
  start: Date;
  end: Date;

  constructor(id: string, name: string, quantity: number, start: Date, end: Date) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.start = start;
    this.end = end;
  }
}
