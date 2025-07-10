import { Routes } from '@angular/router';
import { AccueilComponent } from './accueil/accueil.component';
import { ArticlesComponent } from './articles/articles.component';

export const routes: Routes = [
    { path: '', component: AccueilComponent},
    { path: 'articles', component: ArticlesComponent},
    { path: 'contact', redirectTo: '' }
];
