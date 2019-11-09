$(document).ready(function () {
 $.ajax({
  dataType: "json",
  url: "https://pixabay.com/api/?key=14001068-da63091f2a2cb98e1d7cc1d82&q=red+flowers&image_type=photo&pretty=true",
  success: function (data) {
   var output = '';
   data.hits.forEach(element => {
    output += `
        <div class="card shadow-lg mt-5">
          <div class="card-header text-uppercase text-danger">
            <img src="${element.userImageURL}" width="50" height="50" style="border-radius:50%"/>
            ${element.user}
          </div>
          <div class="card-body">
             <img src="${element.largeImageURL}" class="img-fluid"/>
          </div>
          <div class="card-footer">
           <button class="btn btn-info" data-toggle="modal" data-target="#img${element.id}">View</button>
          </div>
        </div>
        <div class="modal fade" id="img${element.id}">
         <div class="modal-dialog">
          <div class="modal-content">
             <div class="modal-header">
                 <img src="${element.userImageURL}" width="50" height="50" style="border-radius:50%"/>
                 ${element.user}
                <button class="close" data-dismiss="modal">&times</button>
             </div>
             <div class="modal-body">
               <img src="${element.largeImageURL}" class="img-fluid"/>
             </div>
             <div class="modal-footer">
                <ul class="list-group list-group-horizontal">
                  <li class="list-group-item">
                   <i class="material-icons float-left">favorite</i>
                    ${element.likes}
                  </li>
                  <li class="list-group-item">
                   <i class="material-icons float-left">favorite</i>
                    ${element.likes}
                  </li>
                  <li class="list-group-item">
                   <i class="material-icons float-left" >favorite</i>
                    ${element.likes}
                  </li>
                  <li class="list-group-item">
                   <i class="material-icons float-left">favorite</i>
                    ${element.likes}
                  </li>
                </ul>
             </div>
          </div>
         </div>
        </div>
    `;
   });
   $('#result').append(output);
  }
 });
});