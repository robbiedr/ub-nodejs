// Compiled using marko@4.14.7 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/my-travel-website$1.0.0/server/views/comment.marko",
    components_helpers = require("marko/src/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_escapeXml = marko_helpers.x,
    marko_loadTag = marko_helpers.t,
    component_globals_tag = marko_loadTag(require("marko/src/components/taglib/component-globals-tag")),
    marko_forEach = marko_helpers.f,
    init_components_tag = marko_loadTag(require("marko/src/components/taglib/init-components-tag")),
    await_reorderer_tag = marko_loadTag(require("marko/src/taglibs/async/await-reorderer-tag"));

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<!DOCTYPE html><html lang=\"en\"><head><meta charset=\"utf-8\"><meta name=\"viewport\" content=\"width=device-width, initial-scale=1, shrink-to-fit=no\"><link rel=\"stylesheet\" href=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css\" integrity=\"sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO\" crossorigin=\"anonymous\"><title>Sumbrero PH | " +
    marko_escapeXml(input.title) +
    "</title></head><body>");

  component_globals_tag({}, out);

  out.w("<nav class=\"navbar navbar-expand-lg navbar-light bg-light fixed-top\"><a class=\"navbar-brand\" href=\"#\">sumbrero ph.</a><button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\"><span class=\"navbar-toggler-icon\"></span></button><div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\"><ul class=\"navbar-nav mr-auto\"><li class=\"nav-item\"><a class=\"nav-link\" href=\"/\">Home <span class=\"sr-only\">(current)</span></a></li><li class=\"nav-item active\"><a class=\"nav-link\" href=\"/comments\">Comments</a></li><li class=\"nav-item dropdown\"><a class=\"nav-link dropdown-toggle\" href=\"#\" id=\"navbarDropdown\" role=\"button\" data-toggle=\"dropdown\" aria-haspopup=\"true\" aria-expanded=\"false\">Dropdown</a><div class=\"dropdown-menu\" aria-labelledby=\"navbarDropdown\"><a class=\"dropdown-item\" href=\"#\">Action</a><a class=\"dropdown-item\" href=\"#\">Another action</a><div class=\"dropdown-divider\"></div><a class=\"dropdown-item\" href=\"#\">Something else here</a></div></li><li class=\"nav-item\"><a class=\"nav-link disabled\" href=\"#\">Disabled</a></li></ul><form class=\"form-inline my-2 my-lg-0\"><input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\"><button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button></form></div></nav><div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\"><ol class=\"carousel-indicators\"><li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li><li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li></ol><div class=\"carousel-inner\"><div class=\"carousel-item active\"><img src=\"/images/banner-1.jpg\" alt=\"Banner 1\" style=\"width: 100%;\"><div class=\"carousel-caption d-none d-md-block\"><h5>Banner 1</h5><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, recusandae?</p></div></div><div class=\"carousel-item\"><img src=\"/images/banner-2.jpg\" alt=\"Banner 2\" style=\"width: 100%;\"><div class=\"carousel-caption d-none d-md-block\"><h5>Banner 2</h5><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat, quisquam.</p></div></div></div><a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\"><span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Previous</span></a><a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\"><span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span><span class=\"sr-only\">Next</span></a></div><br><div class=\"container\"><div class=\"row\"><h1 class=\"display-4\">Comments</h1></div><div class=\"row\"><div class=\"col-6\"><form action=\"/comments\" method=\"POST\"><div class=\"form-group\"><label for=\"name\">Name</label><input type=\"text\" class=\"form-control\" id=\"name\" aria-describedby=\"nameHelp\" placeholder=\"Enter name\" name=\"name\"><small id=\"nameHelp\" class=\"form-text text-muted\">We value your comments.</small></div><div class=\"form-group\"><label for=\"comment\">Comment</label><input type=\"text\" class=\"form-control\" id=\"comment\" placeholder=\"Enter your comment\" name=\"comment\"></div><div class=\"col-6 offset-6\"><button type=\"submit\" class=\"btn btn-block btn-outline-success\">Submit</button></div></form></div><div class=\"col-6\">");

  if (input.count > 0) {
    out.w("<div class=\"card\"><div class=\"card-body\">");

    var for__70 = 0;

    marko_forEach(input.comments, function(comment) {
      var keyscope__71 = "[" + ((for__70++) + "]");

      out.w("<h5 class=\"card-title\">" +
        marko_escapeXml(comment.name) +
        "</h5><p class=\"card-text\">" +
        marko_escapeXml(comment.comment) +
        "</p><hr>");
    });

    out.w("</div></div>");
  }

  out.w("</div></div><br></div><script src=\"https://code.jquery.com/jquery-3.3.1.slim.min.js\" integrity=\"sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo\" crossorigin=\"anonymous\"></script><script src=\"https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js\" integrity=\"sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49\" crossorigin=\"anonymous\"></script><script src=\"https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js\" integrity=\"sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy\" crossorigin=\"anonymous\"></script>");

  init_components_tag({}, out);

  await_reorderer_tag({}, out, __component, "79");

  out.w("</body></html>");
}

marko_template._ = marko_renderer(render, {
    ___implicit: true,
    ___type: marko_componentType
  });

marko_template.Component = marko_defineComponent({}, marko_template._);

marko_template.meta = {
    id: "/my-travel-website$1.0.0/server/views/comment.marko",
    tags: [
      "marko/src/components/taglib/component-globals-tag",
      "marko/src/components/taglib/init-components-tag",
      "marko/src/taglibs/async/await-reorderer-tag"
    ]
  };
