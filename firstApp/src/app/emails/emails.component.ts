import { Component, OnInit } from '@angular/core';
import { Email } from './../email';

@Component({
    selector: 'app-emails',
    templateUrl: './emails.component.html',
    styleUrls: ['./emails.component.css']
})
export class EmailsComponent implements OnInit {
    emails:Array<object>
    constructor() {
        this.emails = []
        this.emails.push(new Email("Your dog is dead", false, "wife@gmail.com", "Thats it.. He's dead.. You want to grab dinner?"));
        this.emails.push(new Email("Dog is alive", true, "vet@gmail.com", "Your dog is alive. It's a miracle!!!"));
        this.emails.push(new Email("Doctors appointment", true, "doctor@hospital.com", "Time for your check up."));
        this.emails.push(new Email("You can earn $10,000", false, "scam@scam.com", "I am an african prince and am in captivity...."));
    }



  ngOnInit() {
  }

}
