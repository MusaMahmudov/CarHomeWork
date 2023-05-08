let car = {
  brand: "BMW",
  model: "X6",
  currentfuel: 40,
  refill: function (extrafuel) {
    this.currentfuel += extrafuel;
    console.log(`${this.brand} halhazirda yanacaq doldurur`);
  },
  ride: function (km) {
    this.currentfuel -= km * 0.08;
    console.log(`${this.brand} hereketddedir `);
  },
  stop: function () {
    console.log(`${this.brand} dayandi`);
  },
};

console.log(car.currentfuel);
car.refill(10);
console.log(car.currentfuel);
car.ride(10);
console.log(car.currentfuel);
car.stop();
console.log("============");

class car2 {
  constructor(brand, model, currentfuel) {
    this.brand = brand;
    this.model = model;
    this.currentfuel = currentfuel;
  }
  refill(extrafuel) {
    this.currentfuel += extrafuel;
    console.log(`${this.brand} halhazirda yanacaq doldurur`);
  }
  ride(km = 1) {
    this.currentfuel -= km * 0.08;
    console.log(`${this.brand} hereketddedir `);
  }
  stop() {
    console.log(`${this.brand} dayandi`);
  }
}

let x5 = new car2("BMW", "X5", 20);
x5.refill(10);
console.log(x5.currentfuel);
x5.ride(20);
console.log(x5.currentfuel);
x5.stop();
console.log("============");

function car3(brand, model, currentfuel) {
  this.brand = brand;
  this.model = model;
  this.currentfuel = currentfuel;
}

car3.prototype.refill = function (extrafuel) {
  this.currentfuel += extrafuel;
  console.log(`${this.brand} halhazirda yanacaq doldurur`);
};
car3.prototype.ride = function (km) {
  this.currentfuel -= km * 0.08;
  console.log(`${this.brand} hereketddedir `);
};
car3.prototype.stop = function () {
  console.log(`${this.brand} dayandi`);
};

let BMW = new car3("BMW", "X7", 30);
BMW.refill(10);
console.log(BMW.currentfuel);
BMW.ride(20);
console.log(BMW.currentfuel);
BMW.stop();

console.log("============");

class song {
  constructor(songname, singername, songduration) {
    this.songname = songname;
    this.singername = singername;
    this.songduration = songduration;
  }
}

class playlist {
  constructor(array) {
    this.array = array;
  }
  sing(x) {
    console.log(`${this.array[x].songname}  mahni oxuyur`);
  }
  stop() {
    console.log("mahni dayandi");
  }
  static thelongestsong(arraynew) {
    let sortedarray = arraynew.sort((a, b) => {
      return a.songduration - b.songduration;
    });
    return sortedarray[sortedarray.length - 1].songname;
  }
}

let song1 = new song("nese1", "kimse1", 130);
let song2 = new song("nese2", "kimse2", 110);
let song3 = new song("nese3", "kimse3", 120);
let song4 = new song("nese4", "kimse4", 150);
let arraynew = [song1, song2, song3, song4];

let playlist1 = new playlist(arraynew);
playlist1.sing(0);
playlist1.stop();
console.log(playlist.thelongestsong(arraynew));

console.log("===============");

class playlist2 {
  constructor(songname, singername, songduration) {
    this.songname = songname;
    this.singername = singername;
    this.songduration = songduration;
  }
  sing() {
    console.log(`${this.songname}  mahni oxuyur`);
  }
  stop() {
    console.log(`${this.songname} mahni dayandi`);
  }
  static thelongestsong(array) {
    let sortedarray = array.sort((a, b) => {
      return a.songduration - b.songduration;
    });
    return sortedarray[sortedarray.length - 1].songname;
  }
}

let song5 = new playlist2("nese1", "kimse1", 130);
let song6 = new playlist2("nese2", "kimse2", 110);
let song7 = new playlist2("nese3", "kimse3", 120);
let song8 = new playlist2("nese4", "kimse4", 150);
song5.sing();
song5.stop();

console.log(playlist2.thelongestsong([song1, song2, song3, song4]));
