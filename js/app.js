'use strict;'

const imageArray = [];

//Take whats in the JSON file and run it through a constructor function for each object.
//Create Constructor function with proprties listed below

function ImageConstructor (description,horns,image_url,keyword,title) {
    this.description = description;
    this.horns = horns;
    this.image_url = image_url;
    this.keyword = keyword;
    this.title = title;
    
    imageArray.push(this)
};

//We need to us the $.ajax() command to read the provided JSON file.
$.ajax('../data/page-1.json').then(data => {
    data.forEach(data => {
        new ImageConstructor (data.description,data.horns,data.image_url,data.keyword,data.title);
    }) 
});


console.log(imageArray);

// description: "A unicorn and a narwhal nuzzling their horns"
// horns: 1
// image_url: "http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg"
// keyword: "narwhal"
// title: "UniWhal"





//--Use jQuery to make a template


//Properties--------What is the data type for each?
//--Image_URL
//--Title
//--Description
//--KeyWord
//--Horns
