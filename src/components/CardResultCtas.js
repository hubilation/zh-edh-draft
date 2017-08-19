import React from "react";
import MdAdd from "react-icons/lib/md/add";
import MdExpandLess from "react-icons/lib/md/expand-less";
import MdExpandMore from "react-icons/lib/md/expand-more";
import MdClose from "react-icons/lib/md/close";

const CardResultCtas = ({showCardImage, showConfirmSelect, handleExpandClick, toggleConfirmDisplay})=>{
    return (
        <div className="card-ctas">
          {showCardImage
            ? <MdExpandMore
                onClick={handleExpandClick}
                className="card-cta"
              />
            : <MdExpandLess
                onClick={handleExpandClick}
                className="card-cta"
              />}
          {showConfirmSelect
            ? <MdClose
                className="card-cta"
                onClick={toggleConfirmDisplay}
              />
            : <MdAdd
                className="card-cta"
                onClick={toggleConfirmDisplay}
              />}
        </div>
    )
};

export default CardResultCtas