import Constants from "../constants";

export default class GradientStyler {
  static getGradientStyle(colors) {
    var gradientProps = [];

    gradientProps.push("to right");

    if (!colors) gradientProps.push("#D7D1D0");
    else {
      var hexCodes = colors.map(function(color) {
        var loweredColor = color.toLowerCase();
        return Constants.Colors[loweredColor];
      });

      for (var i = 0; i < hexCodes.length; i++) {
        var code = hexCodes[i];

        gradientProps.push(code);
      }
    }
    if (!colors || colors.length < 2) {
      gradientProps.push("white");
    }
    var gradient = "linear-gradient(" + gradientProps.join(" ,") + ")";
    return {
      background: gradient
    };
  }

  static getGradientStyleReversed(colors) {
    var gradientProps = [];
    gradientProps.push("to right");

    if (!colors || colors.length < 2) {
      gradientProps.push("white");
    }
    if (!colors || colors.length === 0) gradientProps.push("#D7D1D0");
    else {
      var hexCodes = colors.map(function(color) {
        var loweredColor = color.toLowerCase();
        return Constants.Colors[loweredColor];
      });

      for (var i = 0; i < hexCodes.length; i++) {
        var code = hexCodes[i];

        gradientProps.push(code);
      }
    }
    var gradient = "linear-gradient(" + gradientProps.join(" ,") + ")";
    return {
      background: gradient
    };
  }
}
