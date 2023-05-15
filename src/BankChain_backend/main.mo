import Debug "mo:base/Debug";
import Nat "mo:base/Nat";
import Int "mo:base/Int";
import Float "mo:base/Float";

actor BankChain {
  stable var balance : Float = 0;

  public func topUp(amount : Float) {
    balance += amount;
    Debug.print(debug_show (balance));
  };

  public func withdraw(amount : Float) {
     Debug.print("here");
    let finalBalance : Float = balance - amount;
    if (finalBalance >= 0) {
      balance -= amount;
      Debug.print(debug_show (balance));
    } else {
      Debug.print("Insufficient balance");
    };
  };
  public query func checkBalance() : async Float {
    return balance;
  };
};
