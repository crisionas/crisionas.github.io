import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.scss']
})
export class ProjectComponent implements OnInit {

  @Input() projectTitle: string = '';

  @Input() image: string = '';

  ngOnInit(): void {
  }

}