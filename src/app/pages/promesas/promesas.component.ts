import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promesas',
  templateUrl: './promesas.component.html',
  styles: [],
})
export class PromesasComponent implements OnInit {
  ngOnInit(): void {
    this.getUsuarios();
  }

  async getUsuarios() {
    const data = await fetch('https://reqres.in/api/users');
    const dataJson = await data.json();

    console.log(dataJson.data);
  }
}
