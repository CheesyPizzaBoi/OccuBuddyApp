import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UsefulinfoPage } from './usefulinfo.page';

describe('UsefulinfoPage', () => {
  let component: UsefulinfoPage;
  let fixture: ComponentFixture<UsefulinfoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UsefulinfoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UsefulinfoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
