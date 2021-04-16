import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';
import { ProductListComponent } from './products/product-list.component';
import { StarComponent } from './shared/components/star.component';
import { ConvertToSpacesPipe } from './shared/pipes/convert-to-spaces.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    ProductListComponent,
    ConvertToSpacesPipe,
    StarComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
     RouterModule.forRoot([
       { path: 'products', component: ProductListComponent },
       //{ path: 'products/:id', component: ProductDetailComponent },
       { path: 'welcome', component: WelcomeComponent },
       { path: '', redirectTo: 'welcome', pathMatch: 'full' },
       { path: '**', redirectTo: 'welcome', pathMatch: 'full' }
     ])
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
