import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';

import { Cemetery } from '../cemetery';
import { CemeteryService } from '../cemetery.service';

@Component({
  selector: 'app-add-cemetery',
  templateUrl: './add-cemetery.component.html',
  styleUrls: ['./add-cemetery.component.sass']
})
export class AddCemeteryComponent implements OnInit {

  @Input() open: boolean;

  @Output() onClose = new EventEmitter<boolean>();

  @ViewChild('Image')
  Image: any;
  Images: any[] = [];



  close: boolean = !open;

  number = 0;
  selectedPhoto = false;
  PhotoOpen: boolean = this.selectedPhoto;


  cemeterynochange = new Cemetery(); // данные вводимого пользователя

  cemetery = new Cemetery(); // данные вводимого пользователя

  done = false;


  // ДОБАВЛЕНИЕ ФОТО

  fileToUpload: File = null;



  // uploadFileToActivity() {
  //   this./*fileUploadService.*/postFile(this.fileToUpload).subscribe(data => {
  //     // do something, if upload success
  //     }, error => {
  //       console.log(error);
  //     });
  // }

  // postFile(fileToUpload: File): Observable<boolean> {
  //   const endpoint = 'your-destination-url';
  //   const formData: FormData = new FormData();
  //   formData.append('fileKey', fileToUpload, fileToUpload.name);
  //   return this.httpClient
  //     .post(endpoint, formData, { headers: yourHeadersConfig })
  //     .map(() => { return true; })
  //     .catch((e) => this.handleError(e));
  // }



  // END


  // save(cemetery: Cemetery) {
  //   // 'post' using for creating new object in database
  //   //
  //   this.cemeteryService.createCemetery(cemetery)
  //     .subscribe(
  //       (data: Cemetery) => { this.cemetery = data;
  //                             this.done = true; },
  //       error => console.log(error)
  //     );
  //   this.onSelectClose();
  // }

  save() {
    // 'post' using for creating new object in database
    //
    this.cemeteryService.createCemetery(this.cemetery)
      .subscribe(
        data => {},
        error => console.log(error)
      );
    this.onSelectClose();
  }

  // @ViewChild("profileImage")
  // profileImage: any;
  // public imageChoosed(event:any){
  // let reader  = new FileReader();
  // reader.readAsDataURL(event.target.files[0]);
  // reader.onloadend = (e) => {
  // console.log('event');
  // this.profileImage.nativeElement.src=reader.result;
  // }
  // }


  handleFileInput(files: FileList) {
    const reader  = new FileReader();

    // reader.readAsDataURL(files.item(i));
    // reader.onloadend = (e) => {
    // console.log('event');
    // this.Image.nativeElement.src = reader.result;
    // };

    // const formData = new FormData();
    for (let i = 0; i < files.length; i++) {
      reader.readAsDataURL(files.item(i));
      reader.onloadend = (e) => {
      console.log('event');
      this.Images[i].nativeElement.src = reader.result;
      };

      this.cemetery.files.push(files.item(i));
  }

    // this.fileToUpload = files.item(0);
    // this.cemetery.files.push(this.fileToUpload);
  }




  onSelectClose(): void {
    this.cemetery = this.cemeterynochange;
    this.number = 0;
    this.open = !this.open;
    this.onClose.emit(this.open);
    if ( this.selectedPhoto === true ) {
      this.selectedPhoto = false;
    }
  }

  // onBefore(): void {
  //   this.number--;
  //   if(this.number == -1)
  //     this.number = this.cemetery.imgs.length - 1;
  // }

  // onNext(): void {
  //   this.number++;
  //   if(this.number == this.cemetery.imgs.length)
  //     this.number = 0;
  // }

  onSelectPhoto(): void {
    this.selectedPhoto =  !this.selectedPhoto;
    // this.open = !this.open;
  }

  onClosed() {
    this.open = !this.open;
    this.selectedPhoto =  !this.selectedPhoto;
    this.onClose.emit(this.open);
  }


  constructor(private cemeteryService: CemeteryService) { }

  ngOnInit() {
  }

}
