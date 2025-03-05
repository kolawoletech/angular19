import { Component, OnInit, signal } from '@angular/core';
import { Crudv2Service, Item } from '../services/crudv2.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-crud',
  standalone: true,
  templateUrl: './crud.component.html',
  imports: [CommonModule], // Add imports as needed

  styleUrls: ['./crud.component.css']
})
export class CrudComponent implements OnInit {
  items = signal<Item[]>([]);
  newItemName = signal('');
  
  constructor(private crudService: Crudv2Service) {}

  ngOnInit() {
    this.fetchItems();
  }

  fetchItems() {
    this.crudService.getItems().subscribe((data) => this.items.set(data));
  }

  addItem() {
    if (this.newItemName()) {
      const newItem: Item = { id: 0, name: this.newItemName() };
      this.crudService.addItem(newItem).subscribe((addedItem) => {
        this.items.set([...this.items(), addedItem]);
        this.newItemName.set('');
      });
    }
  }

  deleteItem(id: number) {
    this.crudService.deleteItem(id).subscribe(() => {
      this.items.set(this.items().filter(item => item.id !== id));
    });
  }
}
