import { animate, style, transition, trigger } from "@angular/animations";

export const scaleInAnimation = trigger("scaleIn", [
  transition(":enter", [
    animate(
      0,
      style({
        overflow: "hidden",
        transform: "scaleY(0)",
        transformOrigin: "top center"
      })
    ),
    animate(
      "0.33s",
      style({
        transform: "scaleY(1)",
        overflow: "visible"
      })
    )
  ])
]);
