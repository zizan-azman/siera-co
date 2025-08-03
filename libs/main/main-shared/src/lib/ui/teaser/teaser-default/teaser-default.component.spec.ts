import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TeaserDefaultComponent } from './teaser-default.component';

describe('TeaserDefaultComponent', () => {
  let component: TeaserDefaultComponent;
  let fixture: ComponentFixture<TeaserDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TeaserDefaultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(TeaserDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
