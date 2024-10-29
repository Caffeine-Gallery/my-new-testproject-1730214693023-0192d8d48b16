import Error "mo:base/Error";

import Float "mo:base/Float";
import Text "mo:base/Text";

actor Calculator {
    public func calculate(x : Float, y : Float, op : Text) : async Float {
        switch (op) {
            case "+" { return x + y; };
            case "-" { return x - y; };
            case "*" { return x * y; };
            case "/" {
                if (y == 0) {
                    throw Error.reject("Division by zero");
                };
                return x / y;
            };
            case _ { throw Error.reject("Invalid operation"); };
        };
    };
}
