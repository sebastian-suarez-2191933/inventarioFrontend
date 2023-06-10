import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriaService } from 'src/app/modules/shared/servicios/categoria.service';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor(private categoriaServicio: CategoriaService) { }

  ngOnInit(): void {
    this.getCategorias();
  }
  displayedColumns: string[] = ['id','name','description', 'actions'];
  dataSource = new MatTableDataSource<CategoriaElemento>();

  getCategorias(){
    this.categoriaServicio.getCategorias().subscribe((data:any) =>{this.processCategoriesResponse(data);console.log("respuesta categorias:",data);})
    
  }

  processCategoriesResponse(resp:any){
    const dataCategory: CategoriaElemento[] = [];
    if(resp.metadata[0].code == "00"){
      let listCategoria = resp.categoriaResponse.categoria;
      listCategoria.forEach((element: CategoriaElemento) => {
        dataCategory.push(element);
      });

      this.dataSource = new MatTableDataSource<CategoriaElemento>(dataCategory);
    }
  }
}

export interface CategoriaElemento {
  description: string;
  id: number;
  name: string;
}
