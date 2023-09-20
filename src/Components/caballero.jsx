import React from "react";
function Caballero(props) {
    if (props.cuboRef.current && props.cuboRef.current.style.top === "") {
        props.cuboRef.current.style.top = "0vw";
    }
    return  (<section className={props.contain}>
        <div className="cubo" onClick={props.evento}>
            <img className="cara1" src={require(`../Img/${props.imagen}`)} alt="" />
            <img className="cara2" src={require(`../Img/${props.imagen}`)} alt="" />
            <img className="cara3" src={require(`../Img/${props.imagen}`)} alt="" />
            <img className="cara4" src={require(`../Img/${props.imagen}`)} alt="" />
        </div>
        <img ref={props.cuboRef} className="caballero" src={require(`../Img/${props.imagen2}`)} alt="" />
    </section>);
}
export{Caballero}
