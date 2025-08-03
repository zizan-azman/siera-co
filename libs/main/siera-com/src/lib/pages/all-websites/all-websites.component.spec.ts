import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AllWebsitesComponent } from './all-websites.component';

describe('AllWebsitesComponent', () => {
  let component: AllWebsitesComponent;
  let fixture: ComponentFixture<AllWebsitesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllWebsitesComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(AllWebsitesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
