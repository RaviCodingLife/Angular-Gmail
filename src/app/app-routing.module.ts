import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DraftComponent } from './Component/draft/draft.component';
import { GmailComponent } from './Component/gmail/gmail.component';
import { JoinameetingComponent } from './Component/joinameeting/joinameeting.component';
import { NewmeetingComponent } from './Component/newmeeting/newmeeting.component';
import { PrimaryComponent } from './Component/primary/primary.component';
import { PromotionsComponent } from './Component/promotions/promotions.component';
import { SentComponent } from './Component/sent/sent.component';
import { SnoozedComponent } from './Component/snoozed/snoozed.component';
import { SocialComponent } from './Component/social/social.component';
import { StarredComponent } from './Component/starred/starred.component';

const routes: Routes = [
  //Default Router
  {path:'',redirectTo:'primary',pathMatch:'full'},

  {
    path:'home',
    component:GmailComponent
  },
  {
    path:'primary',
    component:PrimaryComponent
  },
  {
    path:'draft',
    component:DraftComponent
  },
  {
    path:'promotions',
    component:PromotionsComponent
  },
  {
    path:'sent',
    component:SentComponent
  },
  {
    path:'snoozed',
    component:SnoozedComponent
  },
  {
    path:'social',
    component:SocialComponent
  },
  {
    path:'starred',
    component:StarredComponent
  },
  {
    path:'joinameet',
    component:JoinameetingComponent
  },
  {
    path:'newmeet',
    component:NewmeetingComponent
  },


  //Invalid Route
  {path:'**',redirectTo:'home'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
