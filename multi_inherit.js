class Base {
    base_set(a, b) {
      this.a = a;
      this.b = b;
    }
  
    base_get() {
      console.log(`The value of a is:${this.a}||and value of b is:${this.b}`);
    }
  }
  
  class Derived extends Base{
    derived_set(a, b) {
      this.a = a;
      this.b = b;
    }
  
    derived_get() {
      console.log(`The value of a is:${this.a}||and value of b is:${this.b}`);
    }
  }
  
  class Child extends Base {
    constructor() {
      super(); // Call the constructor of the parent class (Base)
      Derived.call(this); // Call the constructor of the other parent (Derived)
    }
  }
  
  const obj = new Child();
  obj.base_set(10, 20);
  obj.base_get();
  obj.derived_set(20, 30);
  obj.derived_get();