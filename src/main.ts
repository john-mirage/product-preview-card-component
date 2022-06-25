import "./main.css";
import Alpine from "alpinejs";

interface WindowWithAlpine extends Window {
  Alpine: typeof Alpine;
}

(<WindowWithAlpine & typeof globalThis>window).Alpine = Alpine;

Alpine.start();
