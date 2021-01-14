import { Pipe, PipeTransform } from "@angular/core";

@Pipe({
  name: 'replace'
})

export class ReplacePipe implements PipeTransform{
  transform(value: string, chart: string, valueToReplace: string): string{
    return value.replace(chart, valueToReplace);
  }
}
