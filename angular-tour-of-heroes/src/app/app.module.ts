import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { httpInterceptorProviders } from './interceptors';
import { AppRoutingModule } from './app-routing.module';

// import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { HeroesComponent } from './heroes/heroes.component';
import { MessagesComponent } from './messages/messages.component';
import { AbstractHeroService } from './abstract-hero.service';
import { HeroService } from './hero.service';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule } from '@angular/material/dialog';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { ReactiveFormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatNativeDateModule } from '@angular/material/core';
import { HeroSearchComponent } from './hero-search/hero-search.component';
import { CountryFlagPipe } from './country-flag.pipe';
import { ImageUploaderComponent } from './image-uploader/image-uploader.component';
import { ImageBorderDirective } from './image-border.directive';
import { ErrorDialogComponent } from './error-dialog/error-dialog.component';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';

// import { InMemoryDataService } from './in-memory-data.service';

export function HttpLoaderFactory(httpClient: HttpClient) {
  return new TranslateHttpLoader(httpClient);
}

@NgModule({
  imports: [
    HttpClientModule,
    //  .forRoot(InMemoryDataService, {
    //   dataEncapsulation: false,
    // }),
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MatIconModule,
    MatCardModule,
    MatInputModule,
    MatSelectModule,
    MatDatepickerModule,
    MatSnackBarModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    HeroSearchComponent,
    MessagesComponent,
    CountryFlagPipe,
    ImageUploaderComponent,
    ImageBorderDirective,
    ErrorDialogComponent,
    LanguageSelectorComponent,
  ],
  providers: [
    { provide: AbstractHeroService, useClass: HeroService },
    httpInterceptorProviders,
  ],
  bootstrap: [AppComponent],
  exports: [TranslateModule],
})
export class AppModule {}
