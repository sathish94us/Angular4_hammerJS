import { Component, OnInit } from '@angular/core';
import { Manager, Swipe, DIRECTION_HORIZONTAL, DIRECTION_LEFT, DIRECTION_RIGHT } from 'hammerjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent 
{
  private hammerManager: Manager = null;
  public horizontalSwipeDirection = 'Swipe horizontally';

  ngOnInit()
  {
        // Register for swipe functions.
    this.hammerManager = new Manager( document.getElementById("mainDiv") );
    this.hammerManager.add( new Swipe( { direction: DIRECTION_HORIZONTAL } ) );
    this.hammerManager.off( 'swipe', this.HandleSwipe.bind( this ) );
  }

    /*
  Function to handle swipe event.
  */
  private HandleSwipe(
    event: any
    ): void
  {
   console.log(event);
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
