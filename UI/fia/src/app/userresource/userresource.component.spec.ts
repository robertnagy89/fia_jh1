import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserResourceComponent } from './userresource.component';

describe('UserResourceComponent', () => {
  let component: UserResourceComponent;
  let fixture: ComponentFixture<UserResourceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UserResourceComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UserResourceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
