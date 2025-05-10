 import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import SettingsDto from '../dtos/settingsDto';
 
@Injectable({
  providedIn: 'root'
})
export class SettingsService {
    private data = new Subject<SettingsDto>();
    data$ = this.data.asObservable();

  setData(settings: SettingsDto) {
    this.data.next(settings);
  }
}