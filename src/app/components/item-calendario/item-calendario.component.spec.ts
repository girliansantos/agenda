import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemCalendarioComponent } from './item-calendario.component';

describe('ItemCalendarioComponent', () => {
  let component: ItemCalendarioComponent;
  let fixture: ComponentFixture<ItemCalendarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemCalendarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemCalendarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
