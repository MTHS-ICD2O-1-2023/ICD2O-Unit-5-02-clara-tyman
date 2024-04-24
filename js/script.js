// Copyright (c) 2020 Mr. Coxall All rights reserved
//
// Created by: Mr. Coxall
// Created on: Sep 2020
// This file contains the JS functions for index.html

function myButtonClicked() {
  const buttonOnChecked = document.getElementById("Positive-Option").checked
  const positiveOption = Math.floor(Math.random() * 6) + 1
  const negativeOption = Math.floor(Math.random() * -6) + 0

  if (buttonOnChecked == true) {
    document.getElementById("radio-button-value").innerHTML =
      "Your positive number is: " + positiveOption
  } else {
    document.getElementById("radio-button-value").innerHTML =
      "Your negative number is: " + negativeOption
  }
}