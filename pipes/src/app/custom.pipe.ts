import { Pipe,PipeTransform} from "@angular/core";

@Pipe({
    name:'append'

})
export class AppendPipe implements PipeTransform{
    transform(value:number,appendNumber:number) {
        return value*value + appendNumber;
        
    }
}
