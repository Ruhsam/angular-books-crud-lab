angular.module('libraryApp')
.controller('BooksShowController', BooksShowController);

BooksShowController.$inject=['$http', '$routeParams', '$location'];
function BooksShowController($http, $routeParams, $location) {
   var vmShow = this;
   vmShow.log=log;
   vmShow.edit=edit;
   vmShow.editing=false;
   vmShow.save=save;
   vmShow.cancel=cancel;

   /////Delete book//////
   vmShow.deleteBook=deleteBook;
   console.log($routeParams);
   function testSuccess(res){
      vmShow.book = res.data;
      console.log(res.data);
   }
   function testError(err){
      console.log('Dun Broke!!');
   }
   function deleteSuccess(res){
      $location.path("https://super-crud.herokuapp.com/books");
      console.log('button pressed!');
   }
   function deleteBook(){
      $http.delete('https://super-crud.herokuapp.com/books/' + $routeParams.id).then(deleteSuccess, testError);
   }
   function putSuccess(){
      $location.path("https://super-crud.herokuapp.com/books");
   }
   function originalData(){
      vmShow.tempParams= {
      title:vmShow.book.title,
      author:vmShow.book.author,
      releaseDate:vmShow.book.releaseDate,
      image:vmShow.book.image
   };
   }

   $http.get('https://super-crud.herokuapp.com/books/' + $routeParams.id).then(testSuccess, testError);

   function log(){
      console.log("it clicked delete!!!");
   }
   function edit(){
      vmShow.editing=true;
      originalData();
      console.log('edit button pressed');
   }
   function save(){
      $http.put('https://super-crud.herokuapp.com/books/' + $routeParams.id, vmShow.tempParams).then(putSuccess, testError);
      vmShow.editing=false;
      console.log('save button pressed');

   }
   function cancel(){

      vmShow.editing=false;
      console.log('canceled that shizzle!');
   }
//   vmShow.tempData = {
// books: [
// {
// _id: "5711c28677bd841100ee891a",
// title: "The Great Gatsby",
// author: "F. Scott Fitzgerald",
// image: "https://cloud.githubusercontent.com/assets/7833470/10892120/866ce1c6-8156-11e5-9bfd-ef729d98a408.jpg",
// releaseDate: "April 10, 1925",
// __v: 0
// },
// {
// _id: "5711c28677bd841100ee891b",
// title: "Hankleberry Finn",
// author: "Hank Hill",
// image: "https://media.giphy.com/media/xDRq2yipbOWDC/giphy.gif",
// releaseDate: "April 10, 1984",
// __v: 0
// },
// {
// _id: "5711c28677bd841100ee891c",
// title: "Lean In",
// author: "Sheryl Sandberg",
// image: "https://cloud.githubusercontent.com/assets/7833470/10892114/865a5b1e-8156-11e5-80d8-79c52dc6d7d5.jpg",
// releaseDate: "March 11, 2013",
// __v: 0
// },
// {
// _id: "5711c28677bd841100ee891d",
// title: "Les Miserables",
// author: "Victor Hugo",
// image: "https://cloud.githubusercontent.com/assets/7833470/10892116/865b1914-8156-11e5-967c-c139a8a052a5.jpg",
// releaseDate: "Unknown 1862",
// __v: 0
// },
// {
// _id: "5711c28677bd841100ee891e",
// title: "Of Mice and Men",
// author: "John Steinbeck",
// image: "https://cloud.githubusercontent.com/assets/7833470/10892121/866d27bc-8156-11e5-9810-62a875e36c27.jpg",
// releaseDate: "Unknown 1937",
// __v: 0
// },
// {
// _id: "5711c28677bd841100ee891f",
// title: "Romeo and Juliet",
// author: "William Shakespeare",
// image: "https://cloud.githubusercontent.com/assets/7833470/10892119/865c5112-8156-11e5-8f07-64ddd98c6e89.jpg",
// releaseDate: "Unknown 1597",
// __v: 0
// },
// {
// _id: "5711c28677bd841100ee8920",
// title: "To Kill a Mockingbird",
// author: "Harper Lee",
// image: "https://cloud.githubusercontent.com/assets/7833470/10892115/865acce8-8156-11e5-86eb-48ed23c43259.jpg",
// releaseDate: "July 11, 1960",
// __v: 0
// }
// ]
// };
}
