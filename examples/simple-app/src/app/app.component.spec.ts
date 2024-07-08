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
});
