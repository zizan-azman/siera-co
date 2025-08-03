import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JvMangoLibComponent } from './jv-mango-lib.component';

describe('JvMangoLibComponent', () => {
  let component: JvMangoLibComponent;
  let fixture: ComponentFixture<JvMangoLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JvMangoLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JvMangoLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
