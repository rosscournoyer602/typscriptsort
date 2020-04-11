import { Sortable } from'./Sorter';

export class CharCollection implements Sortable{
  constructor(public data: string) {}

  get length(): number {
    return this.data.length
  }

  compare(left: number, right: number): boolean {
    return this.data[left].toLowerCase() > this.data[right].toLowerCase();
  }

  swap(left: number, right: number): void {
    const stringArray = this.data.split('');
    const temp = stringArray[left];
    stringArray[left] = stringArray[right];
    stringArray[right] = temp;
    this.data = stringArray.join('');
  }
}