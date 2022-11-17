import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { FunctionsService } from '../../services/functions.service';
import { Function } from '../../models/function';

@Component({
  selector: 'app-functionstemplate',
  templateUrl: './functionstemplate.component.html',
  styleUrls: ['./functionstemplate.component.css'],
})
export class FunctionstemplateComponent implements OnInit {
  public functionsArray!: Function[];
  public templates!: string[];

  @ViewChild('functionsBox') functionsBox!: ElementRef;

  constructor(private _service: FunctionsService) {}

  showFunctions() {
    var functionsBox = this.functionsBox.nativeElement.selectedOptions;
    var request = 'api/plantilla/plantillafunciones?';
    if (functionsBox.length > 0) {
      for (var i = 0; i < functionsBox.length; i++) {
        request += 'funcion=' + functionsBox[i].value;
        if (i < functionsBox.length - 1) {
          request += '&';
        }
      }
    }
    this._service.getFunctions(request).then((response: any) => {
      this.functionsArray = response;
    });
  }

  ngOnInit(): void {
    this._service.getTemplates().then((response: any) => {
      this.templates = response;
    });
  }
}
