import { Injectable } from '@angular/core';
import * as firebase from 'firebase';


@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  constructor() { }
}

var storage = firebase.storage();
var pathReference = storage.refFromURL('gs://app-komika.appspot.com');



// private async getUrl(snap: firebase.storage.UploadTaskSnapshot) {
//   const url = await snap.ref.getDownloadURL();
//   this.url = url;  //store the URL
//   console.log(this.url);
// }