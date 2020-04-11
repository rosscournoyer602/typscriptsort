import { Sorter } from'./Sorter';

export class CharCollection extends Sorter{
  constructor(public data: string) {
    super();
  }

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