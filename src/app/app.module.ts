import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TabsComponent } from './shared/components/tabs/tabs.component';
import { SearchComponent } from './shared/components/search/search.component';
import { CardListComponent } from './shared/components/card-list/card-list.component';
import { CardComponent } from './shared/components/card-list/card/card.component';
import { DescriptionComponent } from './shared/components/description/description.component';
import { LoaderComponent } from './shared/components/loader/loader.component';
import { MediaListPageComponent } from './components/pages/media-list-page/media-list-page.component';
import { BackNavigationComponent } from './shared/components/back-navigation/back-navigation.component';
import { IndividualMediaComponent } from './components/pages/individual-media/individual-media.component';

@NgModule({
  declarations: [
    AppComponent,
    TabsComponent,
    SearchComponent,
    CardListComponent,
    MediaListPageComponent,
    IndividualMediaComponent,
    CardComponent,
    DescriptionComponent,
    LoaderComponent,
    BackNavigationComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, CommonModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
