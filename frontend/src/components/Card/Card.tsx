import React from "react";
import "./Card.scss";
export default function Card({ children }: { children: React.ReactNode }) {
  return <div className="card">{children}</div>;
}
