jQuery(document).ready(function(e) {
  jQuery("body").addClass("sfsi_plus_2.51")
}
                      );
function sfsi_plus_processfurther(ref) {
  var feed_id = 'bnlwR3VKTytpaTlVV2h5c3dyQ2tQSGxrMEhPY2k1WTVHQ3JPazg4azA4UE5RcXdIQ2ZFcVRXYWliV3huRGIvSEpKKzhZRk5Nckt5YzF0S1Zzb1RSMkJrdlJCQmhNc0NhS0JTdVZnZ3kxaDRXa09USEtsL0p5Z0liaVozZWhyc2V8Uk1QMHRrQzJzbnNYUFYxWWhOc1BtR05EeUtJS3RlK0owS2FhKzRadHFoQT0=';
  var feedtype = 8;
  var email = jQuery(ref).find('input[name="data[Widget][email]"]').val();
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if ((email != "Enter your email") && (filter.test(email))) {
    if (feedtype == "8") {
      var url = "http://www.specificfeeds.com/widgets/subscribeWidget/"+feed_id+"/"+feedtype;
      window.open(url, "popupwindow", "scrollbars=yes,width=1080,height=760");
      return true;
    }
  }
  else {
    alert("Please enter email address");
    jQuery(ref).find('input[name="data[Widget][email]"]').focus();
    return false;
  }
}
