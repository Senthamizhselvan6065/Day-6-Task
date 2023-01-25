// //Day 06 :OOPS TASK

// //Question 01:

class Movie {
    constructor(title, studio, rating) {
      this.title = title;
      this.studio = studio;
      if (rating == undefined) {
        this.rating = "PG";
      } else {
        this.rating = rating;
      }
    }
    getPG(array) {
      var result = [];
      for (var i = 0; i < array.length; i++) {
        if (array[i].rating == "PG") {
          result.push(array[i]);
        }
      }
      return result;
    }
  }
  
  var movie1 = new Movie("Ironman", "MARVEL");
  var movie2 = new Movie("Superman", "DC", "PG15");
  var movie3 = new Movie("Batman","DC");
  var movie4 = new Movie("ggg","jj","pg1345")
  console.log(movie3.getPG([movie1,movie2,movie3,movie4]));
  
  // //Output :
  
  // /*
  
  // (2) [Movie, Movie]
  // 0
  // :
  // Movie {title: 'Ironman', studio: 'MARVEL', rating: 'PG'}
  // 1
  // :
  // Movie {title: 'Batman', studio: 'DC', rating: 'PG'}
  // length
  // :
  // 2
  // [[Prototype]]
  // :
  // Array(0)
  
  // */
  
  //Question 02:
  
  class Circle {
    constructor(radius, color) {
      this.radius = radius;
      this.color = color;
    }
    get radiusCircle() {
      return this.radius;
    }
    get colorCircle() {
      return this.color;
    }
    set radiusCircle(radius) {
      this.radius = radius;
    }
    set colorCircle(color) {
      this.color = color;
    }
    get toString() {
      return `"Circle[radius=${thi.radius}, color=${this.color}"`;
    }
    get areaCircle() {
      return Math.PI * this.radius * this.radius;
    }
    get circumference() {
      return 2 * Math.PI * this.rsdius;
    }
  }
  
  var obj1 = new Circle(1.0, "red");
  console.log(obj1.radiusCircle);
  obj1.radiusCircle = 2.2;
  console.log(obj1.radiusCircle);
  
  
  //Output :
  
  //  1
  //  2.2
  
  
  
  //Question 03:
  
  class Person{
    constructor(name, age, gender, salary){
      this.name = name;
      this.age = age;
      this.gender = gender;
      this.salary = salary;
    }
  }
  
  var test = new Person("Tamizh", 22, "Male", 20000);
  console.log(test.name);
  console.log(test.age);
  console.log(test.gender);
  console.log(test.salary);
  
  
  //Output :
  
  //   Tamizh
  //   22
  //   Male
  //   20000