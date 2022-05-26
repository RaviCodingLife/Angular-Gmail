import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GmailComponent } from './Component/gmail/gmail.component';
import { IndexComponent } from './Component/index/index.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { StarredComponent } from './Component/starred/starred.component';
import { SnoozedComponent } from './Component/snoozed/snoozed.component';
import { SentComponent } from './Component/sent/sent.component';
import { DraftComponent } from './Component/draft/draft.component';
import { SocialComponent } from './Component/social/social.component';
import { PromotionsComponent } from './Component/promotions/promotions.component';
import { PrimaryComponent } from './Component/primary/primary.component';
import { JoinameetingComponent } from './Component/joinameeting/joinameeting.component';
import { NewmeetingComponent } from './Component/newmeeting/newmeeting.component';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
    GmailComponent,
    StarredComponent,
    SnoozedComponent,
    SentComponent,
    DraftComponent,
    SocialComponent,
    PromotionsComponent,
    PrimaryComponent,
    JoinameetingComponent,
    NewmeetingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
