import { Component, OnInit } from "@angular/core";

@Component({
    selector: '.ngFor-exercise',
    templateUrl: './ngFor.component.html',
    styleUrls: ['./ngFor.component.css']
})

export class NgForExerciseComponente  implements OnInit {
    ngOnInit(): void {
    }
    
    secretWord : String = "Tuna";
    ieSecretWord : boolean = false;
    logDisplay = [];
    count = 0;
    
    addLogArray(){
        this.ieSecretWord = !this.ieSecretWord;
        this.logDisplay.push({contador: ++this.count, data: new Date()});
    }
    getColor(count: number){
        return (count >= 5 ? "blue" : 'transparent');
    }
}