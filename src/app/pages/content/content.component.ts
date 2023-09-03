import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from 'src/app/data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent {
  @Input()
  photoCover: string = '';
  @Input()
  content: string = '';
  @Input()
  contentDescription: string = '';
  private id: string | null = '0';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe(value => this.id = value.get('id'));
    this.setValueToComponent(this.id);
  }
  setValueToComponent(id: string | null) {
    const result = dataFake.filter(value => value.id == id)[0];

    this.content = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
  }
}
