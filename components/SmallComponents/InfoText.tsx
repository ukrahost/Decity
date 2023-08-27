import React from "react";

export const InfoText = () => {
  return (
    <div>
      <p className="InfoText">
        Ahora selecciona el nivel con el que deseas iniciar esta aventura. ¿Qué
        moneda deseas usar?
      </p>
    </div>
  );
};

export const InfoPay = () => {
  return (
    <div>
      <p className="InfoPay">
        ¡Excelente elección!
        <br />
        Ahora debemos procesar tu pago.
      </p>
    </div>
  );
};
