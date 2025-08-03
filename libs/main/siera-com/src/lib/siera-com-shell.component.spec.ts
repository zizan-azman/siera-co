import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SieraComShellComponent } from './siera-com-shell.component';

describe('SieraComShellComponent', () => {
  let component: SieraComShellComponent;
  let fixture: ComponentFixture<SieraComShellComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SieraComShellComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SieraComShellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
