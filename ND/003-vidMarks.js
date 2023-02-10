console.clear();

function pazVid(vidMarks) {
  let sum = 0;
  let abs = '';
  for (let i = 0; i < vidMarks.length; i++) {
     abs =+ vidMarks[i];
     for (let j = 0; j < abs.length; j++) {
      console.log(abs);

      
     }
  
     
        console.log(abs);
        
      
  }


  return  sum;
}



console.log(pazVid([
  {
      name: 'Petras',
      marks: [10, 2, 8, 4, 6],
  },
  {
      name: 'Maryte',
      marks: [2, 4, 6, 8, 10, 2, 4, 8],
  },
  {
      name: 'Jonas',
      marks: [9, 8, 7],
  },
]));