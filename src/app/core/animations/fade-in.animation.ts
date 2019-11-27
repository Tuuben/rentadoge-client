import { animate, style, transition, trigger } from "@angular/animations";

export const fadeInAnimation = trigger("fadeIn", [
  transition(":enter", [
    animate(
      0,
      style({
        opacity: 0
      })
    ),
    animate(
      "0.2s",
      style({
        opacity: 1
      })
    )
  ])
]);

export const fadeInAnimationDelay = trigger("fadeInDelay", [
  transition(":enter", [
    animate(
      0,
      style({
        opacity: 0
      })
    ),
    animate(
      "0.2s",
      style({
        opacity: 1
      })
    )
  ])
]);

export const fadeInCrawlAnimation = trigger("fadeInCrawl", [
  transition(":enter", [
    animate(
      0,
      style({
        opacity: 0,
        transform: "translateY(2rem)"
      })
    ),
    animate(
      "0.33s",
      style({
        opacity: 1,
        transform: "translateY(0)"
      })
    )
  ])
]);

export const fadeInCrawlDelayAnimation = trigger("fadeInCrawlDelay", [
  transition(":enter", [
    animate(
      0,
      style({
        opacity: 0,
        transform: "translateY(3.6rem)"
      })
    ),
    animate(
      "0.4s",
      style({
        opacity: 1,
        transform: "translateY(0)"
      })
    )
  ])
]);
