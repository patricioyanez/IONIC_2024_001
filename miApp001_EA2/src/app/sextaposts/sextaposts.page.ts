import { Component, OnInit } from '@angular/core';
import { ApirestService } from '../sexta/apirest.service';
import { ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-sextaposts',
  templateUrl: './sextaposts.page.html',
  styleUrls: ['./sextaposts.page.scss'],
})
export class SextapostsPage implements OnInit {
  listado : any = [];
  constructor(private apirestService:ApirestService,
              private activatedRoute:ActivatedRoute
  ) { }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe( x =>{
      const id = x.get('id')??'';
      if(id != '')
        this.listarPosts(id);

    })
  }
  async listarPosts(id:string)
  {
    this.listado = await this.apirestService.getPostsByIdUsers(id);
  }
}
