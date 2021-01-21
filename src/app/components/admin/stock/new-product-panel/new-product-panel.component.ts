import {Component, EventEmitter, Output, ViewChild} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {StockProductService} from '../../../../services/stock-product/stock-product.service';

@Component({
  selector: 'app-new-product-panel',
  templateUrl: './new-product-panel.component.html',
  styleUrls: ['./new-product-panel.component.css']
})

export class NewProductPanelComponent{
  public showCropper: boolean = false;
  public cropFile: string
  public errorMessage: string = '';
  public successMessage: string = '';
  public loadFileErrorMessage: string = 'Please, load product picture';
  public productForm: FormGroup = new FormGroup({});
  @ViewChild('htmlInputElement')
  public htmlInputElement: HTMLInputElement;
  public croppedPicture: string | ArrayBuffer;
  public productTypes: string[] = ['Sweets', 'Vegetables', 'Drinks', 'Fruits', 'Dairy'];
  @Output() public addProductEvent = new EventEmitter();

  constructor(private stockProductService: StockProductService) {
    this.productForm.addControl('productName', new FormControl("", Validators.required));
    this.productForm.addControl('productPrice', new FormControl("", [Validators.required, Validators.pattern('^[0-9]+$')]));
    this.productForm.addControl('productDescription', new FormControl("", Validators.required))
    this.productForm.addControl('productImage', new FormControl("", [Validators.required, NewProductPanelComponent.inputFileValidator]))
    this.productForm.addControl('productType', new FormControl("", Validators.required))
  }

  private static inputFileValidator(control: FormControl): {[s:string]:boolean} {
    if(control.value.endsWith('.png') || control.value.endsWith('.jpg')){
      return null;
    }
    else{
      return {"productImage": true}
    }
  }

  public isPanelMessageShown(): boolean{
    return this.errorMessage != '' || this.successMessage != '';
  }

  public checkInput(inputName: string): boolean{
    return this.productForm.controls[inputName].invalid && this.productForm.controls[inputName].touched;
  }
  public checkFileInput(): boolean{
    return this.productForm.controls['productImage'].invalid;
  }

  public changeFileInputValueListener(file): void{
    if((file.name.endsWith('.png') || file.name.endsWith('.jpg')) && this.productForm.controls['productImage'].valid){
      this.cropFile = file;
      this.showCropper = true;
    }
    else{
      this.loadFileErrorMessage = 'Sorry, you can not load this file';
    }
  }
  public cropFileEventListener(file){
   this.croppedPicture = file;
  }

  public addProduct(): void{
    this.closePanelMessage();
    this.productForm.value.productImage = this.croppedPicture
    this.stockProductService.addNewStockProduct(this.productForm.value)
      .catch((data) => {
        if(data.status === 200 || data.error.status === 200){
          this.successMessage = data.error.text;
          this.addProductEvent.emit();
        }
        else{
          this.errorMessage = data.error.text;
        }
      })
  }
  private closePanelMessage(): void{
    this.errorMessage = '';
    this.successMessage = '';
  }


}
