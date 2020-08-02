import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobContentPage } from './job-content.page';

describe('JobContentPage', () => {
  let component: JobContentPage;
  let fixture: ComponentFixture<JobContentPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobContentPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobContentPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
