
import Dice from "./images/icon-dice.svg";
import Divide from "./images/pattern-divider-desktop.svg"
import Divider from "./images/pattern-divider-mobile.svg"
import './SubCompo1.css'
import SubComp2 from "./SubComp2";
function SubCompo1(){
    function ui(){
        window.location.reload();
    }

return(

    <div className="container">


                <div>


                <div className="section">
                        <SubComp2/>
                    </div>

                <picture >
                    <source media="(min-width:700px)" srcSet={Divide}></source>
                <img src={Divider} alt="fdrf" className="box"></img>
                </picture>

            </div>
            <div className="move" id="ty" onClick={ui}>
                <img src={Dice} alt="dfa"></img>
            </div>
            
            
        

    </div>
)
}

export default SubCompo1;