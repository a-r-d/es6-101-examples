## Generate PNGs

```
npm i markdown2pdf -g
npm i phantomjs -g

# for each markdown file:
m2p <filename>.md <outfile>.pdf

# image magic for the rest:
convert -density 300 input.pdf -quality 100 output.png

# these are wrapped up together in the index.js script
# just call export-pngs.sh
./export-pngs.sh


```
