import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JvDinaLibComponent } from './jv-dina-lib.component';

describe('JvDinaLibComponent', () => {
  let component: JvDinaLibComponent;
  let fixture: ComponentFixture<JvDinaLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JvDinaLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JvDinaLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
