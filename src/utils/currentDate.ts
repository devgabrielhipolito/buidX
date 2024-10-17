import React from "react";

export default function currentDate() {
  const date = new Date().toDateString();

  return date;
}
