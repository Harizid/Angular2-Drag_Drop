import { Component, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
declare var $:JQueryStatic;
@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
})
export class AppComponent implements AfterViewInit {    
    x:any;
    ngAfterViewInit() {
       $(".draggable").draggable({
        helper: 'clone',
        cursor: 'move',
        snap: '#droppable',
        revert:"invalid"
    });    
    $("#droppable").droppable({
        drop: function (e, ui) {
            if ($(ui.draggable)[0].id != "") {
                this.x = ui.helper.clone().addClass('droppables');
                ui.helper.remove();
                this.x.draggable({
                    helper: 'ui-resizable-helper',
                    containment: '#droppable',
                    tolerance: 'fit',    
                });
                this.x.find('.ui-resizable-handle').remove();
                this.x.resizable();
                this.x.appendTo('#droppable');    
                }   
            }    
        });      
    }
}