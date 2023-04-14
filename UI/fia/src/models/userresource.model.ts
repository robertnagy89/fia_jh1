export class UserResource {
  id: string;
  name: string;
  quantity: number;
  start: string;
  end: string;

  constructor(id: string, name: string, quantity: number, start: string, end: string) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.start = start;
    this.end = end;
  }
}
