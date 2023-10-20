import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesPageComponent } from './favorites-page.component';
import { PlayListHeaderComponent } from '@shared/components/play-list-header/play-list-header.component';
import { PlayListBodyComponent } from '@shared/components/play-list-body/play-list-body.component';
import { SharedModule } from '@shared/shared.module';

describe('FavoritesPageComponent', () => {
  let component: FavoritesPageComponent;
  let fixture: ComponentFixture<FavoritesPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[SharedModule],
      declarations: [FavoritesPageComponent, PlayListHeaderComponent, PlayListBodyComponent]
    });
    fixture = TestBed.createComponent(FavoritesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
