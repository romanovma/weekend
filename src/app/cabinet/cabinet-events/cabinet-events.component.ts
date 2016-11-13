import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute }       from '@angular/router';

@Component({
  selector: 'app-cabinet-events',
  templateUrl: './cabinet-events.component.html',
  styleUrls: ['./cabinet-events.component.scss']
})
export class CabinetEventsComponent implements OnInit {
  cabinetId: number;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
      this.cabinetId = this.route.snapshot.parent.params['id'];
  }

}
