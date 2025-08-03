import { ComponentFixture, TestBed } from '@angular/core/testing';
import { NewsTeaserDefaultComponent } from './news-teaser-default.component';

describe('NewsTeaserDefaultComponent', () => {
  let component: NewsTeaserDefaultComponent;
  let fixture: ComponentFixture<NewsTeaserDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewsTeaserDefaultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(NewsTeaserDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
