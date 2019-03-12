import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableDemonstrationComponent } from './table-demonstration/table-demonstration.component';

const routes: Routes = [
  { path: 'example/table', component: TableDemonstrationComponent },
  { path: '', redirectTo: '/example/table', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
