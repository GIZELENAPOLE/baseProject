import {Component} from "@angular/core";

@Component({
    selector: 'app-lista-sono',
    templateUrl: './lista-sono.component.html',
    styleUrls: ['./lista-sono.component.css']
})
export class AppListaSonoComponent {
    people: any[] = [
        {
            name: 'Gizele',
            age: '24',
            level: 'G' 
        },
        {
            name: 'Jujuba',
            age: '22',
            level: 'D'  
        }, 
        {
            name: 'Rosangela',
            age: '24',
            level: 'G'  
        },
         {
            name: 'Andrezza',
            age: '21',
            level: 'P'  
        },
        {
            name: 'Bruno',
            age: '28',
            level: 'G'  
        }
        
    ];
}