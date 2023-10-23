import { ComponentFixture, TestBed } from '@angular/core/testing';
import { AuthPageComponent } from './auth-page.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { By } from '@angular/platform-browser';

describe('AuthPageComponent', () => {
  let component: AuthPageComponent;
  let fixture: ComponentFixture<AuthPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, FormsModule, ReactiveFormsModule],
      declarations: [AuthPageComponent]
    });
    fixture = TestBed.createComponent(AuthPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should return invalid when data is wrong', () => {
    //Arrange
    const mockCredentials = {
      email:'0x0x0x0x0x',
      password:'123456789123456789'
    }
    const emailForm: any = component.formLogin.get('email')
    const passwordForm: any = component.formLogin.get('password')

    //Act
    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    //Assert
    expect(component.formLogin.invalid).toEqual(true);
  });

  it('should return valid when data is correct', () => {
    const mockCredentials = {
      email:'test@test.com',
      password:'12345678'
    }
    const emailForm: any = component.formLogin.get('email')
    const passwordForm: any = component.formLogin.get('password')

    emailForm.setValue(mockCredentials.email)
    passwordForm.setValue(mockCredentials.password)

    expect(component.formLogin.invalid).toEqual(false);
  });

  it('should display "Iniciar sesión"', ()=>{
    const elementRef = fixture.debugElement.query(By.css('.form-action button'))
    const getInnerText = elementRef.nativeElement.innerText

    expect(getInnerText).toEqual('Iniciar sesión')
  })

});
