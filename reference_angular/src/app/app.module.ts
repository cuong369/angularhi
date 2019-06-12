import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ManageToolComponent } from './content/manage-tool/manage-tool.component';
import { SearchBoxComponent } from './content/manage-tool/search-box/search-box.component';
import { AElementComponent } from './content/manage-tool/a-element/a-element.component';
import { ManageListComponent } from './content/manage-list/manage-list.component';
import { ItemTextComponent } from './content/manage-list/item-text/item-text.component';
import { ActionComponent } from './content/manage-list/action/action.component';
import { RadioBoxComponent } from './content/manage-list/radio-box/radio-box.component';
import { UserManagementComponent } from './content/user-management/user-management.component';
import { CreateComponent } from './content/user-management/create/create.component';
import { ListComponent } from './content/user-management/list/list.component';
import { MyAccountComponent } from './content/my-account/my-account.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ShowHideMenuComponent } from './header/show-hide-menu/show-hide-menu.component';
import { GroupManagementComponent } from './content/group-management/group-management.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    ManageToolComponent,
    SearchBoxComponent,
    AElementComponent,
    ManageListComponent,
    ItemTextComponent,
    ActionComponent,
    RadioBoxComponent,
    UserManagementComponent,
    CreateComponent,
    ListComponent,
    MyAccountComponent,
    LoginComponent,
    LogoutComponent,
    ShowHideMenuComponent,
    GroupManagementComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
