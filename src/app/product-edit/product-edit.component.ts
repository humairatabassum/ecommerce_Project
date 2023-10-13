import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  productId: number = 0; // Initialize the property

  constructor(
    private formBuilder: FormBuilder,
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.productForm = this.formBuilder.group({
      id : 0,
      name: ['', Validators.required],
      price: [0, Validators.required],
      description: ''
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.productId = +params['id'];
      this.productService.getProductById(this.productId).subscribe((product) => {
        this.productForm.patchValue(product);
      });
    });
  }


  onSubmit(): void {
    if (this.productForm.invalid) {
      return;
    }

    this.productService.updateProduct(this.productForm.value).subscribe(() => {
      console.log("Success: Product updated.");
      this.router.navigate(['/list']);
    }, error => {
      console.log("Error: Product not updated.");
      this.router.navigate(['/list']);
    }
    );
  }
}
