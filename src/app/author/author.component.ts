import { Component} from '@angular/core';
import { AuthorService} from '../service/author.service';
@Component({
  selector: 'authors',
  templateUrl: './author.component.html',
  styleUrls: ['./author.component.css'],
  providers:[AuthorService]
})
export class AuthorComponent {
authors: string[];
  constructor(authorService:AuthorService) {
    this.authors = authorService.getAuthors();
   }

}
