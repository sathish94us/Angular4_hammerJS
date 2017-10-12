import { Component, OnInit } from '@angular/core';
import { Manager, Swipe, DIRECTION_HORIZONTAL, DIRECTION_LEFT, DIRECTION_RIGHT} from 'hammerjs';
import { Observable } from 'rxjs/RX';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() 
  { 
  }

  private hammerManager: Manager = null;
  public horizontalSwipeDirection = 'Swipe horizontally';

  ngOnInit()
  {
    // Register for swipe functions.
    this.hammerManager = new Manager( document.body );
    this.hammerManager.add( new Swipe( { threshold: 0, direction: DIRECTION_HORIZONTAL } ) );
    this.hammerManager.off( 'swipe', this.HandleSwipe.bind( this ) );
    
    var ofObs = Observable.of(1, 2, 3, 4);
    ofObs.subscribe(
      (response)=>
      {
        this.horizontalSwipeDirection += response.toString();
      }
    );
  }

    /*
  Function to handle swipe event.
  */
  private HandleSwipe(
    event: any
    ): void
  {
    if ( DIRECTION_LEFT === event.direction )
    {
      this.horizontalSwipeDirection = "Left swipe";
    }
    else if ( DIRECTION_RIGHT === event.direction )
    {
      this.horizontalSwipeDirection = "Right swipe";
    }
  }

}
