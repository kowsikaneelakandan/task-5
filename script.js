// 3.Write a “person” class to hold all the details.
class person{
    constructor(firstname, lastname, age, gender, state, country){
        this.firstname= firstname
        this.lastname= lastname
        this.age= age
        this.gender= gender
        this.state= state
        this.country= country
    }
    getFullName(){
        const fullName= this.firstname+ ' '+this.lastname
        return fullName
    }

}
const person1 = new person("kowsika", "neelakandan", 29,"Female" ,"Tamilnadu", "India")
console.log(person1.getFullName())


//4.write a class to calculate the Uber price.
class Uber {
    constructor(price,kilometer) {
        this.price=price;
        this.kilometer=kilometer;
    }

    getItemprice(){
        return this.price * this.kilometer
    }
}
  const UberkiloMeter=new Uber(20,5)

  console.log(UberkiloMeter.getItemprice())

//2.Circle-class
class Circle{
        
    constructor(radius,color){
     this.radius=this.radius
     this.color=this.color
    }
    getRadius(){
        return this.radius
    }
   setRadius(radius){
     this.radius
   }
   getColor(){
    return this.color
   }
   setColor(color){
    this.color
   }
   getArea(){
    return (3.14 * this.radius * this.radius)
   }
   getCircumference(){
    return(2*3.14*this.radius) 
   }
}
const C1= new Circle(1,"Red")
console.log(C1.getArea())



//1. Movie Rating
 class Movie{
    constructor(Title,studio,rating="PG"){
        this.Title= Title
        this.studio= studio
        this.rating= rating
    }
    get getPG(){
        let Titles=""
        if(this.Title == "PG"){
           Titles+=this.Title
        }
        return Titles
    }
   
 }
 let rating1= new Movie("crew","Balaji Motion Pictures")
 let rating2 = new Movie("Kalva","Axess Film Factory")
 let rating3= new Movie ("Casino Royale","Econ Production","PG-13")
 console.log(rating1)
 console.log(rating2)
 console.log(rating3)
