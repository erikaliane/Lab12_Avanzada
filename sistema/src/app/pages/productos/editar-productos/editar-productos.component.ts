import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Producto } from 'src/app/models/producto';
import { Usuario } from 'src/app/models/users';
import { ProductoService } from 'src/app/services/producto.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-editar-productos',
  templateUrl: './editar-productos.component.html',
  styleUrls: ['./editar-productos.component.css']
})

export class EditarProductosComponent implements OnInit {
  productoForm: FormGroup;
  uploadFiles: Array<File> = [];
  id: string | null; 
  constructor(private fb: FormBuilder,
              private aRouter: ActivatedRoute,
              private router: Router,
              private _productoService: ProductoService){
    this.productoForm = this.fb.group({
        producto: ['', Validators.required],
        categoria: ['', Validators.required],
        ubicacion: ['', Validators.required],
        precio: ['', Validators.required],
        imagen: ['', Validators.required]
    })
    this.id = aRouter.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    
    this.validarId()

  }

  validarId(){

    if(this.id !== null){
      this._productoService.viewProducto(this.id).subscribe(data => {
        this.productoForm.setValue({
          producto: data.producto,
          categoria: data.categoria,
          ubicacion: data.ubicacion,
          precio: data.precio,
          imagen: data.imagen
        })
      })
    }

  }

  editarProducto(){
    
    const PRODUCTO: Producto = {
      producto: this.productoForm.get('producto')?.value,
      categoria: this.productoForm.get('categoria')?.value,
      ubicacion: this.productoForm.get('ubicacion')?.value,
      precio: this.productoForm.get('precio')?.value,
      imagen: this.productoForm.get('imagen')?.value,
    };

    const datos = new FormData();
    datos.append('producto', PRODUCTO.producto);
    datos.append('categoria', PRODUCTO.categoria);
    datos.append('ubicacion', PRODUCTO.ubicacion);
    datos.append('precio', PRODUCTO.precio.toString());
    datos.append('imagen', this.uploadFiles[0]); // Obtén el archivo de imagen del array uploadFiles
  

    Swal.fire({
          title: 'Actualizacion de Producto',
          text: "¿Desea actualizar el producto?",
          icon: 'info',
          showCancelButton: true,
          confirmButtonColor: '#3085d6',
          cancelButtonColor: '#d33',
          confirmButtonText: 'Aceptar',
          cancelButtonText: 'Cancelar'
        }).then((result) => {
          if (result.isConfirmed) {
            if(this.id !== null){
              this._productoService.actualizarProducto(this.id, datos).subscribe(data => {
                  console.log(data);
                  this.router.navigate(['/listar-productos']) 
              })
            }
          }
        });
    
           
  }
  onFileChange(e: any){
    this.uploadFiles = e.target.files;
  }

}
