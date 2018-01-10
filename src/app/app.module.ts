import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {
  MatAutocompleteModule,
  MatButtonModule,
  MatButtonToggleModule,
  MatCardModule,
  MatCheckboxModule,
  MatChipsModule,
  MatDatepickerModule,
  MatDialogModule,
  MatExpansionModule,
  MatGridListModule,
  MatIconModule,
  MatInputModule,
  MatListModule,
  MatMenuModule,
  MatNativeDateModule,
  MatPaginatorModule,
  MatProgressBarModule,
  MatProgressSpinnerModule,
  MatRadioModule,
  MatRippleModule,
  MatSelectModule,
  MatSidenavModule,
  MatSliderModule,
  MatSlideToggleModule,
  MatSnackBarModule,
  MatSortModule,
  MatTableModule,
  MatTabsModule,
  MatToolbarModule,
  MatTooltipModule,
  MatStepperModule,
} from '@angular/material';
import {HttpModule} from '@angular/http';
import {CdkTableModule} from '@angular/cdk/table';
import {FormControl,FormBuilder, FormGroup, Validators} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';



import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ClientloginComponent } from './clientlogin/clientlogin.component';
import { CoachloginComponent } from './coachlogin/coachlogin.component';
import { ClientsignupComponent } from './clientsignup/clientsignup.component';
import { ClientsignupformComponent } from './clientsignupform/clientsignupform.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FooterComponent } from './footer/footer.component';
import { ClientdashboardComponent } from './clientdashboard/clientdashboard.component';
import { ClientheaderComponent } from './clientheader/clientheader.component';
import { ClientmainComponent } from './clientmain/clientmain.component';
import { ClientclassesComponent } from './clientclasses/clientclasses.component';
import { ClientschedulesComponent } from './clientschedules/clientschedules.component';
import { ClientpaymentsComponent } from './clientpayments/clientpayments.component';
import { CoachdashboardComponent } from './coachdashboard/coachdashboard.component';
import { CoachheaderComponent } from './coachheader/coachheader.component';
import { CoachmainComponent } from './coachmain/coachmain.component';
import { ClientforgetpasswordComponent } from './clientforgetpassword/clientforgetpassword.component';
import { ManagermainComponent } from './managermain/managermain.component';
import { AdminComponent } from './admin/admin.component';
import { ManagerdashboardComponent } from './managerdashboard/managerdashboard.component';


const appRoutes:Routes =[
{path:'home',component:HomeComponent},
{path:'clientsignup',component:ClientsignupComponent},
{path:'banner',component:CarouselComponent},

{path:'',redirectTo:'/home', pathMatch:'full'},
{path:'client',children:[
{path:'signup',component:ClientsignupComponent},
{path:'signupform',component:ClientsignupformComponent},
{path:'dashboard',component:ClientdashboardComponent},
{path:'passwordreset',component:ClientforgetpasswordComponent},
]},
{path:'coach',children:[
{path:'dashboard',component:CoachdashboardComponent},
]},
{path:'manager',children:[
{path:'dashboard',component:ManagerdashboardComponent},
]},
{path:'**',redirectTo:'/home', pathMatch:'full'},

]



@NgModule({
  exports: [
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
  ],
  declarations: [],
 
  

})
export class DemoMaterialModule {}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ClientloginComponent,
    CoachloginComponent,
    ClientsignupComponent,
    ClientsignupformComponent,
    CarouselComponent, 
    FooterComponent, 
    ClientdashboardComponent,
    ClientheaderComponent, 
    ClientmainComponent,
    ClientclassesComponent, 
    ClientschedulesComponent, 
    ClientpaymentsComponent, 
    CoachdashboardComponent, 
    CoachheaderComponent, 
    CoachmainComponent, 
    ClientforgetpasswordComponent, 
    ManagermainComponent, 
    ManagerdashboardComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    DemoMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export class PizzaPartyAppModule { }
