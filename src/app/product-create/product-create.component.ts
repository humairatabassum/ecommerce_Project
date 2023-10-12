import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, RouterModule } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent {
  productForm: FormGroup;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private productService: ProductService) {
    this.productForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: [''],
      price: ['', Validators.required,]
    });
  }

  // onSubmit() {
  //   if (this.productForm.invalid) {
  //     return;
  //   }

  //   this.productService.createProduct(this.productForm.value).subscribe(() => {
  //     // Handle success, e.g., navigate to the product list
  //   }, (error) => {
  //     // Handle error
  //   });
  // }

  onSubmit() {
    if (this.productForm.invalid) {
      return;
    }

    this.productService.createProduct(this.productForm.value).subscribe(
      (response) => {
        console.log("Success: Product created.", response);
        this.router.navigate(['/list']);
      }
    );

  }

}

