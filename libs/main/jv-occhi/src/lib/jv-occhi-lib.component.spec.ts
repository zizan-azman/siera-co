import { ComponentFixture, TestBed } from '@angular/core/testing';
import { JvOcchiLibComponent } from './jv-occhi-lib.component';

describe('JvOcchiLibComponent', () => {
  let component: JvOcchiLibComponent;
  let fixture: ComponentFixture<JvOcchiLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JvOcchiLibComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(JvOcchiLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
