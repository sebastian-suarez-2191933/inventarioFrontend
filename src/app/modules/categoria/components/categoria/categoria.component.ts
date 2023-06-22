import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { CategoriaService } from 'src/app/modules/shared/servicios/categoria.service';
import { NewCategoriaComponent } from '../new-categoria/new-categoria.component';
import { MatSnackBar, MatSnackBarRef, SimpleSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {

  constructor(private categoriaServicio: CategoriaService, public dialog: MatDialog, private snackBar: MatSnackBar) { }

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

  openCategoriaDialogo(){
    const dialogRef = this.dialog.open(NewCategoriaComponent, {
      width: '450px'
    });

    dialogRef.afterClosed().subscribe((result:any) => {
      if (result == 1){
        this.openSnackBar("Categoria Agregada", "Exitosa");
        this.getCategorias();
      }else if(result == 2){
        this.openSnackBar("Ocurrió un error al guardar", "Error")
      }
    });
  }

  openSnackBar(message: string, action: string) : MatSnackBarRef<SimpleSnackBar> {
    return this.snackBar.open(message, action, {duration: 2000})
  }
}

export interface CategoriaElemento {
  description: string;
  id: number;
  name: string;
}
