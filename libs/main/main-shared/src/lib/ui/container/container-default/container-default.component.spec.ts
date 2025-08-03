import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ContainerDefaultComponent } from './container-default.component';

describe('ContainerDefaultComponent', () => {
  let component: ContainerDefaultComponent;
  let fixture: ComponentFixture<ContainerDefaultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerDefaultComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(ContainerDefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
