import { Component, OnInit } from '@angular/core';
import { BucketService } from 'app/myapp/services/bucket.service';

import { Thing } from '@datacentricdesign/types';

@Component({
  selector: 'app-things',
  templateUrl: './things.component.html'
})
export class ThingsComponent implements OnInit {

  private things: Thing[]

  constructor(private thingService: BucketService) {
    
  }

  async ngOnInit(): Promise<void> {
    this.things = await this.thingService.find()
  }


}
