import {Component, ElementRef, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild} from '@angular/core';
import Cropper from "cropperjs";



@Component({
  selector: 'app-cropper',
  templateUrl: './cropper.component.html',
  styleUrls: ['./cropper.component.css']
})
export class CropperComponent implements  OnChanges{
  public showImage: boolean;
  public sourceImage: string | ArrayBuffer;
  public destinationImage: string;
  private cropper: Cropper;
  @ViewChild('htmlImageElement')
  private imageElement: ElementRef;
  @Input() public cropFile;
  @Output() public cropFileEvent = new EventEmitter();

  constructor() {
    this.showImage = false;
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.loadFileListener();
  }

  private loadFileListener():void {
    if (this.cropper != null) {
      this.cropper.destroy();
    }
    let reader: FileReader = new FileReader();
    reader.onload = (event) => {
      this.sourceImage = event.target.result;
    }
    reader.readAsDataURL(this.cropFile);
    this.showImage = false;
  }

  public showCropperPanel():void{
    this.cropper = new Cropper(this.imageElement.nativeElement, {
      zoomable: true,
      scalable: true,
      background: false,
      center: false,
      viewMode: 2,
      aspectRatio: 768 / 514,
      crop: () => {
        const canvas = this.cropper.getCroppedCanvas({
          width: 768,
          height: 514
        });
        this.destinationImage = canvas.toDataURL("image/png");
        this.cropFileEvent.emit(this.destinationImage);
      }
    });
  }
}
