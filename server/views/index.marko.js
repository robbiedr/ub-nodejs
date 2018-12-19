// Compiled using marko@4.14.7 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/my-travel-website$1.0.0/server/views/index.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    marko_attr = marko_helpers.a,
    marko_escapeXml = marko_helpers.x,
    marko_str = marko_helpers.s,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\"><title>Sumbrero PH</title></head><body>");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\"><a class=\"navbar-brand\" href=\"#\">sumbrero ph.</a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item active\"><a class=\"nav-link\" href=\"/\">Home <span class=\"sr-only\">(current)</span></a></li><li class=\"nav-item\"><a class=\"nav-link\" href=\"/comments\">Comments</a></li><li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a><div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\"><a class=\"dropdown-item\" href=\"#\">Action</a><a class=\"dropdown-item\" href=\"#\">Another action</a><div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"#\">Something else here</a></div></li><li class=\"nav-item\"><a class=\"nav-link disabled\" href=\"#\">Disabled</a></li></ul><form class=\"form-inline my-2 my-lg-0\"><input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\"><button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button></form></div></nav><div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\"><ol class=\"carousel-indicators\"><li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"/images/banner-1.jpg\" alt=\"Banner 1\" style=\"width: 100%;\"><div class=\"carousel-caption d-none d-md-block\"><h5>Banner 1</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, recusandae?</p></div></div><div class=\"carousel-item\"><img src=\"/images/banner-2.jpg\" alt=\"Banner 2\" style=\"width: 100%;\"><div class=\"carousel-caption d-none d-md-block\"><h5>Banner 2</h5><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, quisquam.</p></div></div></div><a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div><br><div class=\"container\"><div class=\"row\"><div class=\"col-9\"><h1 class=\"display-4\">Caps on Fire!!!</h1></div><div class=\"col-2\"><br><button type=\"button\" class=\"btn btn-block btn-outline-dark\" data-toggle=\"modal\" data-target=\"#capform\">Add Cap</button></div></div><div class=\"row\"><div class=\"col\"><div class=\"card\" style=\"width: 18rem;\"><img class=\"card-img-top\" src=\"/images/stickfiggas01.png\" alt=\"Card image cap\"><div class=\"card-body\"><h5 class=\"card-title\">Stick Figgas</h5><button type=\"button\" class=\"btn btn-block btn-outline-dark\" data-toggle=\"modal\" data-target=\"#modal1\">Details</button></div></div></div><div class=\"col\"><div class=\"card\" style=\"width: 18rem;\"><img class=\"card-img-top\" src=\"/images/WIPcitybulliesvarsity01.png\" alt=\"Card image cap\"><div class=\"card-body\"><h5 class=\"card-title\">WIP City Bullies</h5><button type=\"button\" class=\"btn btn-block btn-outline-dark\" data-toggle=\"modal\" data-target=\"#modal2\">Details</button></div></div></div><div class=\"col\"><div class=\"card\" style=\"width: 18rem;\"><img class=\"card-img-top\" src=\"/images/Wblack01_ad3f4d77-c993-477c-9400-6932f5905426.png\" alt=\"Card image cap\"><div class=\"card-body\"><h5 class=\"card-title\">W Black Fitted</h5><button type=\"button\" class=\"btn btn-block btn-outline-dark\" data-toggle=\"modal\" data-target=\"#modal3\">Details</button></div></div></div>");

  var for__78 = 0;

  marko_forEach(input.caps, function(cap) {
    var keyscope__79 = "[" + ((for__78++) + "]");

    out.w("<div class=\"col\"><div class=\"card\" style=\"width: 18rem;\"><img class=\"card-img-top\"" +
      marko_attr("src", "" + cap.url) +
      " alt=\"Card image cap\"><div class=\"card-body\"><h5 class=\"card-title\">" +
      marko_escapeXml(cap.title) +
      "</h5><button type=\"button\" class=\"btn btn-block btn-outline-dark\" data-toggle=\"modal\"" +
      marko_attr("data-target", "#" + cap.id) +
      ">Details</button></div></div></div>");
  });

  out.w("</div></div><div class=\"modal fade\" id=\"modal1\" tabindex=\"-1\" role=\"dialog\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 class=\"modal-title\">Stick Figgas</h5><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div><div class=\"modal-body\"><img src=\"/images/stickfiggas01.png\" alt=\"\" class=\"card-img-top\"><p class=\"card-text\">We're proud to present this highly-anticipated collaboration with Stick Figgas, inspired by their album 'Realistick', with songs that tackle different ways to elevate your consciousness through music.</p></div><div class=\"modal-footer\"></div></div></div></div><div class=\"modal fade\" id=\"modal2\" tabindex=\"-1\" role=\"dialog\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 class=\"modal-title\">WIP City Bullies</h5><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div><div class=\"modal-body\"><img src=\"/images/WIPcitybulliesvarsity01.png\" alt=\"\" class=\"card-img-top\"><p class=\"card-text\">The WIP city bullies are back, this time throwing it back with a varsity style look reminiscent of the 90's. Taking design cues from the iconic Georgetown Hoyas and accented with a kelly green underbrim, this simple two-tone snapback definitely has that nice old school feel.</p></div><div class=\"modal-footer\"></div></div></div></div><div class=\"modal fade\" id=\"modal3\" tabindex=\"-1\" role=\"dialog\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 class=\"modal-title\">W Black Fitted</h5><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div><div class=\"modal-body\"><img src=\"/images/Wblack01_ad3f4d77-c993-477c-9400-6932f5905426.png\" alt=\"\" class=\"card-img-top\"><p class=\"card-text\">Looking for the perfect fit? We got you covered. The 'W' Black fitted cap is the first of its series, re-introducing one of our classic styles back into the current line-up. WIP started out by only producing fitted caps and eventually expanded into exploring different types of headwear.</p></div><div class=\"modal-footer\"></div></div></div></div>");

  var for__119 = 0;

  marko_forEach(input.caps, function(cap) {
    var keyscope__120 = "[" + ((for__119++) + "]");

    out.w("<div class=\"modal fade\"" +
      marko_attr("id", "" + cap.id) +
      " tabindex=\"-1\" role=\"dialog\"><div class=\"modal-dialog\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 class=\"modal-title\"" +
      marko_attr("id", "title-" + cap.id) +
      ">" +
      marko_escapeXml(cap.title) +
      "</h5><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div><div class=\"modal-body\"><img" +
      marko_attr("src", "" + cap.url) +
      " alt=\"\" class=\"card-img-top\"" +
      marko_attr("id", "img-" + cap.id) +
      "><p class=\"card-text\"" +
      marko_attr("id", "desc-" + cap.id) +
      ">" +
      marko_escapeXml(cap.desc) +
      "</p></div><div class=\"modal-footer\"><div class=\"col-6\"><button class=\"btn btn-block btn-outline-warning btn-edit\"" +
      marko_attr("data-id", "" + cap.id) +
      ">Edit Cap</button></div></div></div></div></div><div class=\"modal fade\"" +
      marko_attr("id", "editform-" + cap.id) +
      " tabindex=\"-1\" role=\"dialog\"><div class=\"modal-dialog modal-lg\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 class=\"modal-title\">Edit Cap</h5><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div><form" +
      marko_attr("action", "/caps/" + cap.id) +
      " method=\"POST\"><div class=\"modal-body\"><div class=\"row\"><div class=\"col\"><img" +
      marko_attr("src", "" + cap.url) +
      marko_attr("id", "edit-img-" + cap.id) +
      " alt=\"\" class=\"card-img-top\"></div><div class=\"col\"><div class=\"form-group\"><label for=\"title\">Title</label><input type=\"text\"" +
      marko_attr("value", "" + cap.title) +
      " class=\"form-control\" id=\"title\" aria-describedby=\"titleHelp\" placeholder=\"Enter title\" name=\"title\"></div><div class=\"form-group\"><label for=\"desc\">Description</label><textarea type=\"text\" class=\"form-control\" id=\"desc\" placeholder=\"Description of the cap\" name=\"desc\">" +
      marko_escapeXml(cap.title) +
      "</textarea></div><div class=\"form-group\"><label for=\"url\">Image URL</label><input type=\"text\"" +
      marko_attr("value", "" + cap.url) +
      marko_attr("data-id", "" + cap.id) +
      " class=\"form-control edit-url\" id=\"url\" aria-describedby=\"urlHelp\" placeholder=\"Enter url\" name=\"url\"></div></div></div></div><div class=\"modal-footer\"><button type=\"submit\" class=\"btn btn-block btn-outline-success\">Submit</button></div></form></div></div></div>");
  });

  out.w("<div class=\"modal fade\" id=\"capform\" tabindex=\"-1\" role=\"dialog\"><div class=\"modal-dialog modal-lg\" role=\"document\"><div class=\"modal-content\"><div class=\"modal-header\"><h5 class=\"modal-title\">Add Cap</h5><button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\"><span aria-hidden=\"true\">&times;</span></button></div><form action=\"/caps\" method=\"POST\"><div class=\"modal-body\"><div class=\"row\"><div class=\"col-6\"><img src=\"/images/default.png\" id=\"add-img\" alt=\"\" class=\"card-img-top\"></div><div class=\"col-6\"><div class=\"form-group\"><label for=\"title\">Title</label><input type=\"text\" class=\"form-control\" id=\"title\" aria-describedby=\"titleHelp\" placeholder=\"Enter title\" name=\"title\"></div><div class=\"form-group\"><label for=\"desc\">Description</label><textarea type=\"text\" class=\"form-control\" id=\"desc\" placeholder=\"Description of the cap\" name=\"desc\"></textarea></div><div class=\"form-group\"><label for=\"url\">Image URL</label><input type=\"text\" class=\"form-control\" id=\"add-img-url\" aria-describedby=\"urlHelp\" placeholder=\"Enter url\" name=\"url\"></div></div></div></div><div class=\"modal-footer\"><button type=\"submit\" class=\"btn btn-block btn-outline-success\">Submit</button></div></form></div></div></div><script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script><script>\r\n      (function() {\r\n        let caps = " +
    marko_str(JSON.stringify(input.caps)) +
    ";\r\n        console.log(caps);\r\n        $('.btn-edit').click(function(ev) {\r\n          var dataName = ev.target.getAttribute('data-id');\r\n          var cap = caps.find(function(c) { return c.id === dataName; });\r\n          if(cap) {\r\n            //- Hide current modal\r\n            $('#' + cap.id).modal('hide');\r\n            //- Show edit modal\r\n            $('#editform-' + cap.id).modal('show');\r\n          }\r\n        });\r\n        $('.edit-url').change(function(ev) {\r\n          var dataName = ev.target.getAttribute('data-id');\r\n          var cap = caps.find(function(c) { return c.id === dataName; });\r\n          if(cap) {\r\n            $('#edit-img-' + cap.id).attr('src', ev.target.value);\r\n          }\r\n        });\r\n        $('#add-img-url').change(function(ev) {\r\n          $('#add-img').attr('src', ev.target.value);\r\n        });\r\n      })();\r\n    </script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "186");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/my-travel-website$1.0.0/server/views/index.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
