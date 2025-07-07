import { Component } from '@angular/core';
import { INoticias } from '../../interfaces/inoticias.interface';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-blog',
  imports: [CommonModule, FormsModule],
  templateUrl: './blog.html',
  styleUrl: './blog.css'
})
export class Blog {

  //Nueva noticia
  nuevaNoticia: INoticias =  {
    titulo: '',
    imagen: '',
    cuerpo: '',
    fecha: ''
  }

  //Array de noticias que se muestran en el blog al cargar la página
  noticias: INoticias[] = [
    {
      titulo: 'Primera noticia',
      imagen: 'https://picsum.photos/id/1/200/200',
      cuerpo: 'Este es el cuerpo de la primera noticia.',
      fecha: '2025-01-01'
    },
    {
      titulo: 'Segunda noticia',
      imagen: 'https://picsum.photos/id/99/200/200',
      cuerpo: 'Este es el cuerpo de la segunda noticia.',
      fecha: '2025-01-02'
    }
  ]



}

