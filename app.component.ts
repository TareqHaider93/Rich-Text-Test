/**
 * Rich Text Editor Default Functionality Sample
 */
import { Component } from '@angular/core';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html',
    providers: [ToolbarService, LinkService, ImageService, HtmlEditorService]
})
export class AppComponent {
}
