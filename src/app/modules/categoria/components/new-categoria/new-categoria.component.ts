import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { CategoriaService } from 'src/app/modules/shared/servicios/categoria.service';

@Component({
  selector: 'app-new-categoria',
  templateUrl: './new-categoria.component.html',
  styleUrls: ['./new-categoria.component.css']
})
export class NewCategoriaComponent implements OnInit {

  public categoriaForm: FormGroup;
  constructor(private fb: FormBuilder, private categoriaServices: CategoriaService, private dialogRef: MatDialogRef<NewCategoriaComponent>) { 

    this.categoriaForm  = this.fb.group({
      name: ['', Validators.required],
      descripcion: ['', Validators.required]
    });
  }

  ngOnInit(): void {
  }

  onSave(){
    let data = {
      name: this.categoriaForm.get('name')?.value,
      descripcion: this.categoriaForm.get('descripcion')?.value
    }

    this.categoriaServices.saveCategorias(data)
    .subscribe(data=>{
      console.log(data);
      this.dialogRef.close(1);
    }, (error: any)=>{
      this.dialogRef.close(2);
    })
  }

  onCancel(){
    this.dialogRef.close(3);
  }
}
