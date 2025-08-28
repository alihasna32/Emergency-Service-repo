Answer the following questions clearly:

Q1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
ANS: 1. getElementById can select just id from HTML.
     2. getElementsByClassName can select all same class name from HTML.
     3. querySelector can select just first element from HTML as your need.
     4. querySelectorAll can select all element from HTML as your need.

Q2: How do you create and insert a new element into the DOM?
ANS: First I develop a design in HTML Then I will cut child part. Then I 
     enter in JAVASCRIPT then I will use a API method. That name is (createElement) with a div. Now I will call the (createElement) part and use .innerHTML = `` <== in there I will paste child part that I created in HTML. At last I will append child part parent of parent with createElement part. 

Q3: What is Event Bubbling and how does it work?
ANS: Event Bubbling is when an event (such as a click) first occurs on  
    that element, then its parent, then its grandparent, and its like loop but not loop. This means that the event "bubbles" upwards from the inside out.

Q4: What is Event Delegation in JavaScript? Why is it useful?
ANS: Event Delegation is in parent element set just one event listener  
    and call all child elements of event. 
    its useful because its dynamic and also future child will reuseable.

Q5: What is the difference between preventDefault() and stopPropagation() methods?
ANS: preventDefault() → Disables the default behavior of an element (e.g. 
    clicking a link will no longer redirect).

    stopPropagation() → Prevents events from bubbling to parent elements.