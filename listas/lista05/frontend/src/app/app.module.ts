import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/views/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { SubmenuComponent } from './components/shared/submenu/submenu.component';
import { AdicionarProdutoComponent } from './components/views/adicionar-produto/adicionar-produto.component';
import { ListagemProdutosComponent } from './components/views/listagem-produtos/listagem-produtos.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SubmenuComponent,
    AdicionarProdutoComponent,
    ListagemProdutosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
