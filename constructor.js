// function Car(make, model, color) {
//   this.make = make;
//   this.model = model;
//   this.color = color;
//   this.start = function () {
//     console.log('Car start now!!');
//   }
// }
// let d = new Car('hello', '4832', 'blue');
// console.log(d.start);

// function Circle(radius, x, y) {
//   this.radius = radius;
//   this.location = { x: this.x, y: this.y };
//   this.draw = function () {
//     console.log(location);
//   }
//   this.move = function (nextX, nextY) {
//     this.location = (this.x = nextX, this.y = nextY);
//    } 
// }

// function User(fullName) {
//   this.fullName = fullName;
//   this.friendList = [];
//   this.addFriendList = function (friendName) {
//     this.friendList.push(friendName);
//   }
//   this.printFriend = function () {
//     console.log(this.friendList);
//     this.friendList.forEach(element => {
//       console.log(element);
//     })
//   }
// }  

const person = {
  name: 'Sonu Rawat',
  address: {
    city: 'Mumbai',
    country: 'India'
  },
  interests: ['Product Manager', 'Software Developer', 'Cinematography']
};
console.log(person.address.country);

function Car(make,model,color) {
  this.make = make;
  this.model = model;
  this.color = color;
  this.star = function () {
    console.log(`Car Start`);
  }
}

