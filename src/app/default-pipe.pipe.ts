import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'defaultPipe'
})
export class DefaultPipePipe implements PipeTransform {

  transform(value: string, fallback: string, forceHttps: boolean = false): string {
    let image = '';
    if (value) {
      image = value;
    } else {
      image = fallback;
    }

    if (forceHttps) {
      if (!image.includes('https')) {
        image = image.replace('http', 'https');
      }
    }
    return image;
  }

}
