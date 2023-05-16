import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UploadFileService {

  constructor() { }

  subirArchivo(archivo: File, carpeta: string) {
    return new Promise((resolve, reject) => {
      let formData = new FormData();
      let xhr = new XMLHttpRequest();

      formData.append('file', archivo, archivo.name);
      formData.append('folder', carpeta);

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4) {
          if (xhr.status === 200) {
            resolve(JSON.parse(xhr.response));
          } else {
            reject(xhr.response);
          }
        }
      };
      let url = 'https://api.cloudinary.com/v1_1/dwggq6q2f/auto/upload?upload_preset=gaktp4f6';
      xhr.open('POST', url, true);
      xhr.send(formData);
    });
  }
  
}
