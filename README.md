# rulecad archive

## Experiments

- **[Bracket bench: four wall brackets of equal mass](experiments/bracket-bench/)** (2026-10-28): Optimised brackets predicted 1.5 times as stiff as a plain web; what printing without supports costs. [On the site](https://jonibach.github.io/rulecad-archive/experiments/bracket-bench/)
- **[L-bracket: stiffest against stress-limited](experiments/lbracket/)** (2026-10-28): Stress limits cut the peak stress by 46% for the same material. [On the site](https://jonibach.github.io/rulecad-archive/experiments/lbracket/)
- **[Lever bench: four levers of equal mass](experiments/lever-bench/)** (2026-10-28): The optimised lever predicted 27 times as stiff as a lightened plate. [On the site](https://jonibach.github.io/rulecad-archive/experiments/lever-bench/)
- **[Verification: how sure are the predictions?](experiments/verification/)** (2026-10-28): Finer cells showed the first bracket predictions were 15–35% too flexible. [On the site](https://jonibach.github.io/rulecad-archive/experiments/verification/)

## Models

Models made with [rulecad](https://github.com/JoniBach/rulecad), newest first: a picture of each, and a link that opens it in the 3D viewer (turn it, download STL or 3MF). Everything here is public.

- **Add one:** `node add.mjs <workspace> <project>/<object>`, then commit and push.
- **Bring in links shared as Gists:** `node import-gists.mjs`.

### Twisted tube, first attempt: falls apart

2026-10-28 · `showcase/twist` in bench: Failed: the struts came out one cell thick, and a one-cell strut at 45° on a cube grid touches only at edges, so the part fell into 11 pieces with many thin, non-solid bits. Settings: 15% of a 40 × 80 mm cylinder, filter 3 mm on 2 mm cells. Rerun with a 5 mm filter and 25% material.

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/twist/)

[![Twisted tube, first attempt: falls apart](m/twist/preview.png)](https://jonibach.github.io/rulecad-archive/m/twist/)

### Lever bench: optimised lever (both) 0.1.0

2026-10-28 · `bench/lever:both` in bench: optimised for two loads

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/lever-d/)

[![Lever bench: optimised lever (both) 0.1.0](m/lever-d/preview.png)](https://jonibach.github.io/rulecad-archive/m/lever-d/)

### Lever bench: lightened plate 0.1.0

2026-10-28 · `bench/lever-plate` in bench: a plate with four windows

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/lever-b/)

[![Lever bench: lightened plate 0.1.0](m/lever-b/preview.png)](https://jonibach.github.io/rulecad-archive/m/lever-b/)

### Lever bench: plain bar 0.1.0

2026-10-28 · `bench/lever-bar` in bench: a plain bar

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/lever-a/)

[![Lever bench: plain bar 0.1.0](m/lever-a/preview.png)](https://jonibach.github.io/rulecad-archive/m/lever-a/)

### Bracket bench: optimised bracket (side-free) 0.1.0

2026-10-28 · `bench/bracket:side-free` in bench: B laid on its side: what it would need supporting

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/bracket-b-side/)

[![Bracket bench: optimised bracket (side-free) 0.1.0](m/bracket-b-side/preview.png)](https://jonibach.github.io/rulecad-archive/m/bracket-b-side/)

### Bracket bench: optimised bracket 0.1.0

2026-10-28 · `bench/bracket` in bench: optimised freely

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/bracket-b/)

[![Bracket bench: optimised bracket 0.1.0](m/bracket-b/preview.png)](https://jonibach.github.io/rulecad-archive/m/bracket-b/)

### Bracket bench: plain web 0.1.0

2026-10-28 · `bench/bracket-web` in bench: the plain web: the hand-made bracket

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/bracket-a/)

[![Bracket bench: plain web 0.1.0](m/bracket-a/preview.png)](https://jonibach.github.io/rulecad-archive/m/bracket-a/)

### L-bracket: lightest under 25 MPa

2026-10-28 · `lbracket/stress` in rulecad topopt reference: the lightest under 25 MPa; peak 36.6 MPa as made

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/lbracket-stress/)

[![L-bracket: lightest under 25 MPa](m/lbracket-stress/preview.png)](https://jonibach.github.io/rulecad-archive/m/lbracket-stress/)

### L-bracket: stiffest at 40%

2026-10-28 · `lbracket/stiffest` in rulecad topopt reference: the stiffest at 40% of the space; peak 67.2 MPa as made

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/lbracket-stiffest/)

[![L-bracket: stiffest at 40%](m/lbracket-stiffest/preview.png)](https://jonibach.github.io/rulecad-archive/m/lbracket-stiffest/)

### Bracket bench: optimised bracket

2026-10-28 · `bench/bracket` in rulecad examples: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/bench-bracket/)

[![Bracket bench: optimised bracket](m/bench-bracket/preview.png)](https://jonibach.github.io/rulecad-archive/m/bench-bracket/)

### Bracket bench: plain web

2026-10-28 · `bench/bracket-web` in rulecad examples: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/bench-bracket-web/)

[![Bracket bench: plain web](m/bench-bracket-web/preview.png)](https://jonibach.github.io/rulecad-archive/m/bench-bracket-web/)

### Bracket bench, assembled

2026-10-28 · `bench/bracket-bench` in rulecad examples: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/bench-bracket-bench/)

[![Bracket bench, assembled](m/bench-bracket-bench/preview.png)](https://jonibach.github.io/rulecad-archive/m/bench-bracket-bench/)

### Lever bench: optimised lever 0.1.0

2026-10-28 · `bench/lever` in bench: the stiffest lever for its load, 2D

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/lever-c/)

[![Lever bench: optimised lever 0.1.0](m/lever-c/preview.png)](https://jonibach.github.io/rulecad-archive/m/lever-c/)

### Bracket bench: optimised bracket (side) 0.1.0

2026-10-28 · `bench/bracket:side` in bench: optimised to print without supports, lying on its side

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/bracket-d/)

[![Bracket bench: optimised bracket (side) 0.1.0](m/bracket-d/preview.png)](https://jonibach.github.io/rulecad-archive/m/bracket-d/)

### Bracket bench: optimised bracket (printable) 0.1.0

2026-10-28 · `bench/bracket:printable` in bench: optimised to print without supports, standing on its back plate

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/bracket-c/)

[![Bracket bench: optimised bracket (printable) 0.1.0](m/bracket-c/preview.png)](https://jonibach.github.io/rulecad-archive/m/bracket-c/)

### Legion Go folio (Cherry MX)

2026-10-27 · `legion-go-mx/folio` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/legion-go-mx-folio/)

[![Legion Go folio (Cherry MX)](m/legion-go-mx-folio/preview.png)](https://jonibach.github.io/rulecad-archive/m/legion-go-mx-folio/)

### Legion Go folio: 57 keycaps

2026-10-27 · `legion-go-mx/keycaps` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/legion-go-mx-keycaps/)

[![Legion Go folio: 57 keycaps](m/legion-go-mx-keycaps/preview.png)](https://jonibach.github.io/rulecad-archive/m/legion-go-mx-keycaps/)

### Lever bench: optimised lever

2026-10-27 · `lever/optimised` in rulecad examples: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/lever-optimised/)

[![Lever bench: optimised lever](m/lever-optimised/preview.png)](https://jonibach.github.io/rulecad-archive/m/lever-optimised/)

### Lever bench: optimised lever (both)

2026-10-27 · `lever/optimised:both` in rulecad examples: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/lever-optimised-both/)

[![Lever bench: optimised lever (both)](m/lever-optimised-both/preview.png)](https://jonibach.github.io/rulecad-archive/m/lever-optimised-both/)

### Lever bench, assembled

2026-10-27 · `lever/bench` in rulecad examples: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/lever-bench/)

[![Lever bench, assembled](m/lever-bench/preview.png)](https://jonibach.github.io/rulecad-archive/m/lever-bench/)

### Legion Go folio

2026-10-26 · `legion-go/folio` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/legion-go-folio/)

[![Legion Go folio](m/legion-go-folio/preview.png)](https://jonibach.github.io/rulecad-archive/m/legion-go-folio/)

### Legion Go rail test piece

2026-10-25 · `legion-go/rail-test` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/legion-go-rail-test/)

[![Legion Go rail test piece](m/legion-go-rail-test/preview.png)](https://jonibach.github.io/rulecad-archive/m/legion-go-rail-test/)

### Legion Go rail test (full)

2026-10-25 · `legion-go/rail-test:full` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/legion-go-rail-test-full/)

[![Legion Go rail test (full)](m/legion-go-rail-test-full/preview.png)](https://jonibach.github.io/rulecad-archive/m/legion-go-rail-test-full/)

### Legion Go rail test (short)

2026-10-25 · `legion-go/rail-test:short` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/legion-go-rail-test-short/)

[![Legion Go rail test (short)](m/legion-go-rail-test-short/preview.png)](https://jonibach.github.io/rulecad-archive/m/legion-go-rail-test-short/)

### Legion Go hinge foot

2026-10-25 · `legion-go/hinge-foot` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/legion-go-hinge-foot/)

[![Legion Go hinge foot](m/legion-go-hinge-foot/preview.png)](https://jonibach.github.io/rulecad-archive/m/legion-go-hinge-foot/)

### Legion Go keyboard case

2026-10-25 · `legion-go/keyboard` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/legion-go-keyboard/)

[![Legion Go keyboard case](m/legion-go-keyboard/preview.png)](https://jonibach.github.io/rulecad-archive/m/legion-go-keyboard/)

### Legion Go rail test (box-short)

2026-10-25 · `legion-go/rail-test:box-short` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/legion-go-rail-test-box-short/)

[![Legion Go rail test (box-short)](m/legion-go-rail-test-box-short/preview.png)](https://jonibach.github.io/rulecad-archive/m/legion-go-rail-test-box-short/)

### Legion Go folio: folded shut

2026-10-25 · `legion-go/folded` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/legion-go-folded/)

[![Legion Go folio: folded shut](m/legion-go-folded/preview.png)](https://jonibach.github.io/rulecad-archive/m/legion-go-folded/)

### Legion Go folio: open flat

2026-10-25 · `legion-go/flat` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/legion-go-flat/)

[![Legion Go folio: open flat](m/legion-go-flat/preview.png)](https://jonibach.github.io/rulecad-archive/m/legion-go-flat/)

### Legion Go folio: tablet mode

2026-10-25 · `legion-go/tablet` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/legion-go-tablet/)

[![Legion Go folio: tablet mode](m/legion-go-tablet/preview.png)](https://jonibach.github.io/rulecad-archive/m/legion-go-tablet/)

### Legion Go side mount

2026-10-25 · `legion-go/mount` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/legion-go-mount/)

[![Legion Go side mount](m/legion-go-mount/preview.png)](https://jonibach.github.io/rulecad-archive/m/legion-go-mount/)

### Legion Go folio: open

2026-10-25 · `legion-go/stand` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/legion-go-stand/)

[![Legion Go folio: open](m/legion-go-stand/preview.png)](https://jonibach.github.io/rulecad-archive/m/legion-go-stand/)

### Legion Go folio: open

2026-10-25 · `legion-go-mx/stand` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/legion-go-mx-stand/)

[![Legion Go folio: open](m/legion-go-mx-stand/preview.png)](https://jonibach.github.io/rulecad-archive/m/legion-go-mx-stand/)

### Legion Go folio: folded shut

2026-10-25 · `legion-go-mx/folded` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/legion-go-mx-folded/)

[![Legion Go folio: folded shut](m/legion-go-mx-folded/preview.png)](https://jonibach.github.io/rulecad-archive/m/legion-go-mx-folded/)

### Legion Go folio: open flat

2026-10-25 · `legion-go-mx/flat` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/legion-go-mx-flat/)

[![Legion Go folio: open flat](m/legion-go-mx-flat/preview.png)](https://jonibach.github.io/rulecad-archive/m/legion-go-mx-flat/)

### Legion Go folio: tablet mode

2026-10-25 · `legion-go-mx/tablet` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/legion-go-mx-tablet/)

[![Legion Go folio: tablet mode](m/legion-go-mx-tablet/preview.png)](https://jonibach.github.io/rulecad-archive/m/legion-go-mx-tablet/)

### Staggered keyboard: 55 keycaps

2026-10-14 · `keyboard/staggered-keycaps` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/keyboard-staggered-keycaps/)

[![Staggered keyboard: 55 keycaps](m/keyboard-staggered-keycaps/preview.png)](https://jonibach.github.io/rulecad-archive/m/keyboard-staggered-keycaps/)

### 9-key macropad PCB

2026-10-14 · `keyboard/macropad-pcb` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/keyboard-macropad-pcb/)

[![9-key macropad PCB](m/keyboard-macropad-pcb/preview.png)](https://jonibach.github.io/rulecad-archive/m/keyboard-macropad-pcb/)

### Staggered keyboard PCB

2026-10-14 · `keyboard/main-pcb` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/keyboard-main-pcb/)

[![Staggered keyboard PCB](m/keyboard-main-pcb/preview.png)](https://jonibach.github.io/rulecad-archive/m/keyboard-main-pcb/)

### Staggered PCB keyboard

2026-10-14 · `keyboard/staggered-pcb` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/keyboard-staggered-pcb/)

[![Staggered PCB keyboard](m/keyboard-staggered-pcb/preview.png)](https://jonibach.github.io/rulecad-archive/m/keyboard-staggered-pcb/)

### MX keycap

2026-10-14 · `keyboard/keycap` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/keyboard-keycap/)

[![MX keycap](m/keyboard-keycap/preview.png)](https://jonibach.github.io/rulecad-archive/m/keyboard-keycap/)

### 9-key macropad

2026-10-14 · `keyboard/macropad-3x3` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/keyboard-macropad-3x3/)

[![9-key macropad](m/keyboard-macropad-3x3/preview.png)](https://jonibach.github.io/rulecad-archive/m/keyboard-macropad-3x3/)

### Staggered keyboard: plate

2026-10-13 · `keyboard/staggered-plate` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/keyboard-staggered-plate/)

[![Staggered keyboard: plate](m/keyboard-staggered-plate/preview.png)](https://jonibach.github.io/rulecad-archive/m/keyboard-staggered-plate/)

### MX keycap (legend-f)

2026-10-13 · `keyboard/keycap:legend-f` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/keyboard-keycap-legend-f/)

[![MX keycap (legend-f)](m/keyboard-keycap-legend-f/preview.png)](https://jonibach.github.io/rulecad-archive/m/keyboard-keycap-legend-f/)

### MX keycap (legend-shift)

2026-10-13 · `keyboard/keycap:legend-shift` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/keyboard-keycap-legend-shift/)

[![MX keycap (legend-shift)](m/keyboard-keycap-legend-shift/preview.png)](https://jonibach.github.io/rulecad-archive/m/keyboard-keycap-legend-shift/)

### Staggered keyboard: case

2026-10-13 · `keyboard/staggered-case` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/keyboard-staggered-case/)

[![Staggered keyboard: case](m/keyboard-staggered-case/preview.png)](https://jonibach.github.io/rulecad-archive/m/keyboard-staggered-case/)

### Staggered handwired keyboard

2026-10-13 · `keyboard/staggered` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/keyboard-staggered/)

[![Staggered handwired keyboard](m/keyboard-staggered/preview.png)](https://jonibach.github.io/rulecad-archive/m/keyboard-staggered/)

### Handwired 40% keyboard

2026-10-12 · `keyboard/handwired-40` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/keyboard-handwired-40/)

[![Handwired 40% keyboard](m/keyboard-handwired-40/preview.png)](https://jonibach.github.io/rulecad-archive/m/keyboard-handwired-40/)

### Handwired 40%: case

2026-10-12 · `keyboard/handwired-40-case` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/keyboard-handwired-40-case/)

[![Handwired 40%: case](m/keyboard-handwired-40-case/preview.png)](https://jonibach.github.io/rulecad-archive/m/keyboard-handwired-40-case/)

### Handwired 40%: plate

2026-10-12 · `keyboard/handwired-40-plate` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/keyboard-handwired-40-plate/)

[![Handwired 40%: plate](m/keyboard-handwired-40-plate/preview.png)](https://jonibach.github.io/rulecad-archive/m/keyboard-handwired-40-plate/)

### Handwired 40%: 48 keycaps

2026-10-12 · `keyboard/handwired-40-keycaps` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/keyboard-handwired-40-keycaps/)

[![Handwired 40%: 48 keycaps](m/keyboard-handwired-40-keycaps/preview.png)](https://jonibach.github.io/rulecad-archive/m/keyboard-handwired-40-keycaps/)

### 9-key macropad, print plate

2026-10-11 · `keyboard/macropad-3x3-print` in mirror-cad: as shared

[Open in 3D](https://jonibach.github.io/rulecad-archive/m/keyboard-macropad-3x3-print/)

[![9-key macropad, print plate](m/keyboard-macropad-3x3-print/preview.png)](https://jonibach.github.io/rulecad-archive/m/keyboard-macropad-3x3-print/)
