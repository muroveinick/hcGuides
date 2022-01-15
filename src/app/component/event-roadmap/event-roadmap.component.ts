import { Component, OnInit } from '@angular/core';
import { events } from './_events_data';

@Component({
  selector: 'app-event-roadmap',
  templateUrl: './event-roadmap.component.html',
  styleUrls: ['./event-roadmap.component.scss']
})
export class EventRoadmapComponent implements OnInit {

  events = events;

  constructor() { }

  ngOnInit(): void {
  }

}
