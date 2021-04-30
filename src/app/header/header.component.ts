import { Component, OnInit } from "@angular/core";

import { categories } from "./categories.mock";
import { columnasPrincipales } from "../columnas";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})

export class HeaderComponent implements OnInit {
  categories: any[] = categories;
  isCollapsed = false;
  columnas = columnasPrincipales;
  constructor() {}

  ngOnInit() {}

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}
