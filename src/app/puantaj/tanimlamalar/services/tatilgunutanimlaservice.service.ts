import { Injectable } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';
import { HttpService } from 'src/app/services/http.service';
import { environment } from 'src/environments/environment';
const API_URL = `${environment.BASE_URL}/api/ResmiTatils`;
@Injectable({
  providedIn: 'root'
})
export class TatilgunutanimlaserviceService {

  constructor(private httpService: HttpService) { }

  async tatilGunleriListesiGetir(codes: string[], callback: () => void) {
    //console.log(codes)
    const observable: Observable<any> = this.httpService.get("", "ResmiTatils",1);
    const datas = await firstValueFrom<[]>(observable);
  
    return datas;
  }
}
