import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatTooltipModule } from '@angular/material/tooltip';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { AddToCartComponent } from './components/add-to-cart/add-to-cart.component';
import { FormDimensionsComponent } from './components/form/form-dimensions/form-dimensions.component';
import { FormEngravingComponent } from './components/form/form-engraving/form-engraving.component';
import { FormGroovesComponent } from './components/form/form-grooves/form-grooves.component';
import { FormPreciousMetalComponent } from './components/form/form-precious-metal/form-precious-metal.component';
import { FormProfileComponent } from './components/form/form-profile/form-profile.component';
import { FormStoneSettingComponent } from './components/form/form-stone-setting/form-stone-setting.component';
import { MenuSuperiorComponent } from './components/menu-superior/menu-superior.component';
import { ResumenPrecioComponent } from './components/resumen-precio/resumen-precio.component';
import { Visualizador3dComponent } from './components/visualizador3d/visualizador3d.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuSuperiorComponent,
    ResumenPrecioComponent,
    AddToCartComponent,
    Visualizador3dComponent,
    FormProfileComponent,
    FormDimensionsComponent,
    FormPreciousMetalComponent,
    FormGroovesComponent,
    FormStoneSettingComponent,
    FormEngravingComponent,
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatTooltipModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
