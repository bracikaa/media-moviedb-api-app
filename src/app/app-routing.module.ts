import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { IndividualMediaComponent } from './components/pages/individual-media/individual-media.component';
import { MediaListPageComponent } from './components/pages/media-list-page/media-list-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/shows', pathMatch: 'full' },
  { path: ':media', component: MediaListPageComponent },
  { path: 'details/:media/:id', component: IndividualMediaComponent },
  { path: '**', redirectTo: '/shows' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
