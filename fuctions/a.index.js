const alertList =document.querySelector('.alert-List');

const alertsNear =document.querySelector('#UserSounding');
const allAlers =document.querySelector('#allAlers');  //order by Date

const DisplayT =document.querySelector('#provinceAlerts');

//const media =document.querySelector('img');

db.collection('Alerts').get().then(snapshot => {
    setUIAlerts(snapshot.docs);
    //console.log(snapshot.docs);
});

const setUIAlerts = (data) => {
    let html='';
    data.forEach(doc => {
        const alert=doc.data();
        var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        var datepost =alert.dayPosted;
        //datepost =months[datepost.getMonth()];
        //datepost= datepost.getMonth();  ${datepost}
        const li=`
         <div class="a-card">
         <div class="a-info"> 
         <span class="a-date"> ${datepost}</span>
           <h3>${alert.name}</h3>
           <p>${alert.description}</p>
           <span class="location">${alert.location}</span>
         </div>
         <div class="a-stats"></div>
         <div class="a-media">
           <img src="crime.jpg" alt="">
           <a href="mapsSearch.html" class="AcceptBtn">Accept</a>
         </div>
     </div> <br> 
        `; 
        html +=li;
    });
    alertList.innerHTML=html;
};

//var ViewUserProvince  ;
//DisplayT.innerHTML=ViewUserProvince;

    auth.onAuthStateChanged(user => {
      
      if(user){
          
          
        db.collection('Users').doc(user.uid).get().then(doc=>{
                ViewUserProvince= doc.data().province;
                
                console.log(ViewUserProvince);
   
            alertsNear.addEventListener('click',(e)=>{
            e.preventDefault();
           //db.collection('Alerts').get().then(snapshot => {
           db.collection('Alerts').where('location','==',ViewUserProvince).OrderBy('datepost').get().then(snapshot => {
                  setUIAlerts(snapshot.docs);
                  //console.log(snapshot.docs);  array-contains
            });
   
                
          });
        });
                
  } 
  
});




/*<!DOCTYPE html>
<html>
<head>
<style>
table {
  width:100%;
}
table, th, td {
  border: 1px solid black;
  border-collapse: collapse;
}
th, td {
  padding: 15px;
  text-align: left;
}
#t01 tr:nth-child(even) {
  background-color: #eee;
}
#t01 tr:nth-child(odd) {
 background-color: #fff;
}
#t01 th {
  background-color: black;
  color: white;
}
</style>
</head>
<body>

<h2>Styling Tables</h2>

<table>
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>80</td>
  </tr>
</table>
<br>

<table id="t01">
  <tr>
    <th>Firstname</th>
    <th>Lastname</th> 
    <th>Age</th>
  </tr>
  <tr>
    <td>Jill</td>
    <td>Smith</td>
    <td>50</td>
  </tr>
  <tr>
    <td>Eve</td>
    <td>Jackson</td>
    <td>94</td>
  </tr>
  <tr>
    <td>John</td>
    <td>Doe</td>
    <td>80</td>
  </tr>
</table>



</body>
</html>

*/