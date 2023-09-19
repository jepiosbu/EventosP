import React from "react";
function Caballero(props) {
    return  (<section className={props.contain}>
        <div className="cubo" onClick={props.evento}>
            <img className="cara1" src={require(`../Img/${props.imagen}`)} alt="" />
            <img className="cara2" src={require(`../Img/${props.imagen}`)} alt="" />
            <img className="cara3" src={require(`../Img/${props.imagen}`)} alt="" />
            <img className="cara4" src={require(`../Img/${props.imagen}`)} alt="" />
        </div>
        <img ref={cubo1} className="caballero" src={require(`../Img/${props.imagen2}`)} alt="" />
    </section>);
}
export{Caballero}