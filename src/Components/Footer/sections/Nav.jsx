import React from "react";
import { Link } from "react-router-dom";

export default function Nav() {
  return (
    <div>
      <h4>La divina presencia</h4>
      <div>
        <Link>
          <p>Home</p>
        </Link>
        <Link>
          <p>Productos</p>
        </Link>
        <Link>
          <p>Términos y condiciones</p>
        </Link>
      </div>
    </div>
  );
}
