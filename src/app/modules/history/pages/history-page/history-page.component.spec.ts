import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoryPageComponent } from './history-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { SearchComponent } from '@modules/history/components/search/search.component';
import { PlayListBodyComponent } from '@shared/components/play-list-body/play-list-body.component';
import { SharedModule } from '@shared/shared.module';
import { FormsModule } from '@angular/forms';

describe('HistoryPageComponent', () => {
  let component: HistoryPageComponent;
  let fixture: ComponentFixture<HistoryPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, SharedModule, FormsModule],
      declarations: [HistoryPageComponent, SearchComponent, PlayListBodyComponent]
    });
    fixture = TestBed.createComponent(HistoryPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
