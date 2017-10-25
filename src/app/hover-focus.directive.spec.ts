import { async, TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement} from '@angular/core';
import { By } from '@angular/platform-browser';

import { HoverFocusDirective } from './hover-focus.directive';

@Component({
  template: `<input type='text' hoverfocus>`
})

class TestHoverFocusComponent { }

describe('HoverFocusDirective', () => {
  it('should create an instance', () => {
    const directive = new HoverFocusDirective();
    expect(directive).toBeTruthy();
  });
});

describe('Directive: HoverFocus', async() => {
  let component: TestHoverFocusComponent;
  let fixture: ComponentFixture<TestHoverFocusComponent>;
  let inputEl: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ TestHoverFocusComponent, HoverFocusDirective ]
    })
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestHoverFocusComponent);
    component = fixture.componentInstance;
    inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('hovering over input', () => {
    inputEl.triggerEventHandler('mouseover', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('blue');

    inputEl.triggerEventHandler('mouseout', null);
    fixture.detectChanges();
    expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
  });
});
