import React from "react";
import $ from "jquery";
import jQuery from "jquery";
export const CursorFollower = () => {
  jQuery(document).ready(function () {
    var mouseX = 0,
      mouseY = 0;
    var xp = 0,
      yp = 0;

    $(document).mousemove(function (e) {
      mouseX = e.pageX - 6;
      mouseY = e.pageY - 6;
    });

    setInterval(function () {
      xp += (mouseX - xp) / 6;
      yp += (mouseY - yp) / 6;
      $("#circle").css({ left: xp + "px", top: yp + "px" });
    }, 20);
  });
  return <span id="circle" className="circle"></span>;
};
