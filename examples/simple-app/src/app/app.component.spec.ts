import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { SimpleDataService } from './core/simple-data.service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { of } from 'rxjs';

describe('AppComponent', () => {
  let fixture: ComponentFixture<AppComponent>;
  let app: AppComponent;
  let simpleDataService: jasmine.SpyObj<SimpleDataService>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AppComponent],
      providers: [
        {
          provide: SimpleDataService,
          useValue: jasmine.createSpyObj('SimpleDataService', { getName: of('foo') }),
          // Mock implementation returns an observable
        },
        {
          provide: HttpClient,
          useValue: jasmine.createSpyObj('HttpClient', ['get']),
        },
      ],
    }).compileComponents();
    fixture = TestBed.createComponent(AppComponent);
    app = fixture.componentInstance;
    simpleDataService = TestBed.inject(SimpleDataService) as jasmine.SpyObj<SimpleDataService>;
  });

  it('should create the app', () => {
    expect(app).toBeTruthy();
  });

  it('should call getRandomName', () => {
    app.getRandomName();
    expect(simpleDataService.getName).toHaveBeenCalled();
  });

  it('should call onClickFillName', () => {
    app.onClickFillName();
    expect(simpleDataService.getName).toHaveBeenCalled();
  });

  it('should make DOM changes', () => {
    fixture.detectChanges();
    const compiled = fixture.nativeElement;
    expect(compiled.querySelector('h1.display-1 i')).toHaveClass('text-danger');
    fixture.componentInstance.onClickFillName();
    fixture.detectChanges();
    expect(compiled.querySelector('h1.display-1 i')).toHaveClass('text-warning');
  });

  it('should have an invalid form when required fields are empty' , () => {
    expect(app.simpleFormGroup.valid).toBeFalse();
  });

  it('should have a valid form when required fields are filled' , () => {
    app.simpleFormGroup.setValue({ name: 'foo' });
    expect(app.simpleFormGroup.valid).toBeTrue();
  });
});
