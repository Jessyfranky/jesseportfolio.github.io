new TypeIt("#letters", {
    speed: 50,
    waitUntilVisible: true,
  })
    .type("", { delay: 300 })
    .delete(9)
    .type("T")
    .move(null, { to: "END" })
    .type("ECHY")
    .pause(300)
    .type("WORLD")
    .go();