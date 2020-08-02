import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { JobslistPage } from './jobslist.page';

describe('JobslistPage', () => {
  let component: JobslistPage;
  let fixture: ComponentFixture<JobslistPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobslistPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(JobslistPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
