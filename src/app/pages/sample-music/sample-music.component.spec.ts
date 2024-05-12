import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleMusicComponent } from './sample-music.component';

describe('SampleMusicComponent', () => {
  let component: SampleMusicComponent;
  let fixture: ComponentFixture<SampleMusicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SampleMusicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SampleMusicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
