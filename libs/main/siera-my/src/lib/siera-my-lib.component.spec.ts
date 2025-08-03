import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SieraMyLibComponent } from './siera-my-lib.component';

describe('SieraMyLibComponent', () => {
  let component: SieraMyLibComponent;
  let fixture: ComponentFixture<SieraMyLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SieraMyLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SieraMyLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
