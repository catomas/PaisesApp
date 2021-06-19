import { NgModule } from '@angular/core';

//PrimeNg
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { SplitterModule } from 'primeng/splitter';
import {ToolbarModule} from 'primeng/toolbar';
import {InputTextModule} from 'primeng/inputtext';
import {ListboxModule} from 'primeng/listbox';
import {ToastModule} from 'primeng/toast';
import {TableModule} from 'primeng/table';
import { TagModule } from 'primeng/tag';
import {FieldsetModule} from 'primeng/fieldset';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';



@NgModule({
  exports: [
    ButtonModule,
    CardModule,
    SplitterModule,
    ToolbarModule,
    InputTextModule,
    ListboxModule,
    ToastModule,
    TableModule,
    TagModule,
    FieldsetModule,
    BrowserAnimationsModule,
    MessageModule,
    MessagesModule
  ]

})
export class PrimeNgModule { }
