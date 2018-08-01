import { Injectable } from '@angular/core';

@Injectable()
export class ImageService {
  
  visibleImages =[];

  getImages(){
    return this.visibleImages=IMAGES.slice(0);

  }

  getImage(id:number){
    return IMAGES.slice(0).find(image => image.id == id)
  }

}

const IMAGES=[
  {"id": 1, "category": "boats", "caption": "Sailing the boat", "url": "assets/img/boat1.jpg"},
  {"id": 2, "category": "boats", "caption": "Fishing boat", "url": "assets/img/boat2.jpg"},
  {"id": 3, "category": "birds", "caption": "Magpie", "url": "assets/img/bird1.jpg"},
  {"id": 4, "category": "birds", "caption": "northern-mockingbird", "url": "assets/img/bird2.jpg"},
  {"id": 5, "category": "birds", "caption": "Green Wing Macaw", "url": "assets/img/bird3.jpg"},
  {"id": 6, "category": "nature", "caption": "Plitvice lakes", "url": "assets/img/nature1.jpg"},
  {"id": 7, "category": "nature", "caption": "Trees in Park", "url": "assets/img/nature2.jpeg"},
  {"id": 8, "category": "nature", "caption": "canoe water nature", "url": "assets/img/nature3.jpg"},
  
]