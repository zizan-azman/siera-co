import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SieraComLibComponent } from './siera-com-lib.component';

describe('SieraComLibComponent', () => {
  let component: SieraComLibComponent;
  let fixture: ComponentFixture<SieraComLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SieraComLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SieraComLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
