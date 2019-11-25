import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: "textLength"
})
export class TextLengthPipe implements PipeTransform {
  transform(value: string, maxCharacters: number): any {
    if (value.length <= maxCharacters) {
      return value;
    }

    const cutString = value.slice(0, maxCharacters).concat(" ...");

    return cutString;
  }
}
