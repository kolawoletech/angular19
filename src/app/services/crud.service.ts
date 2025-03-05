import { Injectable, signal } from '@angular/core';
 
export interface Item {
  id: number;
  name: string;
}

@Injectable({
  providedIn: 'root'
})


export class CrudService {

  private _items = signal<Item[]>([
    { id: 1, name: 'Item 1' },
    { id: 2, name: 'Item 2' },
  ]);

  get items() {
    return this._items;
  }

  addItem(name: string) {
    const newItem: Item = { id: Date.now(), name };
    this._items.set([...this._items(), newItem]);
  }

  updateItem(id: number, name: string) {
    this._items.set(
      this._items().map((item) => (item.id === id ? { ...item, name } : item))
    );
  }

  deleteItem(id: number) {
    this._items.set(this._items().filter((item) => item.id !== id));
  }

}
