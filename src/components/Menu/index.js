import React, { Component } from 'react';
import 'reactstrap';
import './styles.css';

class Menu extends Component {
render() {
  return(
    <main className='wrapper'>
      <section>
        <div className="lineStyle1">|BRICK AND MOTOR|</div>
        <div className="lineStyle2">TEXT OR CALL</div>
        <div className="lineStyle6">[971] 998 - 6575</div>
        <div className="lineStyle2">TO PLACE AN ORDER</div>
        <div className="lineStyle2">|WOOD FIRED PIZZA|</div>
              <div className="lineStyle2">|WHOLE PIES|</div>
              <div className="lineStyle7">9 CHEESE/MARG</div>
              <div className="lineStyle7">11 PEPPERONI</div>
                              <div className="lineStyle7">12 VEGGI SPECIAL</div>
                <div className="lineStyle7">13 MEAT SPECIAL</div>
              <div className="lineStyle2">|HALF PIE SLICES|</div>


              <div className="lineStyle7">5 CHEESE</div>
                              <div className="lineStyle7">6 PEPPERONI</div>



              <div className="lineStyle2">|SIDES AND SALADS|</div>


              <div className="lineStyle7">5 BREADSTICKS</div>
                              <div className="lineStyle7">4 CAESAR</div>
                <div className="lineStyle7">4 CAPRESE</div>
                      >
        <div className="lineStyle2">|HOURS|</div>
        <div className="lineStyle7">WED - THURS 4 PM - 1 AM</div>
        <div className="lineStyle7">FRI - SAT 4 PM - 230 AM</div>
        <div className="lineStyle7">SUN 4 PM - 12 AM</div>
      </section>
    </main>
    );
  }
}

export default Menu;
