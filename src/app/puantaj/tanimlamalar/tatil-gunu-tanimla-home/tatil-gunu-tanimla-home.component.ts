import { Component, OnInit } from '@angular/core';
import { TatilgunutanimlaserviceService } from '../services/tatilgunutanimlaservice.service';

@Component({
  selector: 'app-tatil-gunu-tanimla-home',
  templateUrl: './tatil-gunu-tanimla-home.component.html',
  styleUrls: ['./tatil-gunu-tanimla-home.component.scss']
})
export class TatilGunuTanimlaHomeComponent implements OnInit {
  loading: boolean = true;
  constructor(private ttgtService: TatilgunutanimlaserviceService) { }
  async ngOnInit() {
    this.datas = await this.ttgtService.tatilGunleriListesiGetir(null, null);
    console.log(this.datas);

  }
  datas = [];
}


