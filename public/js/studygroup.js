$(() =>{

    $(".button").click(function() {
      var val = $(this).attr('id');
      if (val == 1) {
          $(".mobileNav").hide();
          $(this).attr('id', '0');
      } else {
          $(".mobileNav").show();
          $(this).attr('id', '1');
      }
    
    });
    
    //Mouse click on setting button and ul list
    $(".mobileNav, .button").mouseup(function() {
      return false;
    });
    
    //Document Click
    $(document).mouseup(function() {
      $(".mobileNav").hide();
      $(".button").attr('id', '0');
    });
    
    
    //submit button
    $("#addGroup").on("click", (event) => {
      event.preventDefault();
      let newGroup = {
        groupName: $("#groupName").val().trim(),
        userName: $("#userName").val().trim(),
        description: $("#description").val().trim()};
      
        // Send the POST request.
        $.ajax("/api/goups", {
          type: "POST",
          data: newGroup
        }).then(
          () => {
          
            // Reload the page to get the updated list
            location.reload();
          });
      });
    
    //delete group - not using
    $(".delete-group").on("click", function(event) {
      var id = $(this).data("id");
    
        // Send the DELETE request.
        $.ajax("/api/groups/" + id, {
          type: "DELETE"
        }).then(
          function() {
            console.log("deleted group", id);
            // Reload the page to get the updated list
            location.reload();
          }
        );
      });
    
     
    });