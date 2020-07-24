import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  
  public title = 'trak-road';
  public version = '0.0.1';

  ngOnInit(): void {
    
  }
}
