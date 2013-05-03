# cell-culture-1

I'm reading **Complexity** by M. Mitchell Waldrop and was intrigued by his description of a very early experiment in cellular automata by Chris Langton.

<blockquote>
<p>So Langton started programming his computer for every parameter that seemed half way reasonable. And he got absolutely nowhere - until, one day, he tried
one of the simplest parameter he could think of: The Greek letter lambda, as he called it, was just the probability that any given cell would be "alive"
in the next generation. So if a rule had a lambda value of precisely 0.0, for example, then nothing would be alive after the first time step and the rule
would clearly be Class I (referring to Wolfram's 4 Universal Classes). If the rule had a lambda value of 0.5, then the grid would be boiling with activity,
with half the cells alive on the average, and half dead. Presumably such a rule would be the chaotic Class III. The question was whether lambda woudl reveal
anything interesting in between.<p>
<p>To test the parameter, Langton wrote a little program telling his Apollo to automatically generate rules with a specific value of lambda, and then run a
cellular automaton on the screen to show him what the rule would do.</p>
</blockquote>

Partly as an experiment to re-familiarize myself with Javascript and partly because I wanted to see what Langton saw I've tried to recreate it in the browser.
Assuming I haven't misunderstood you can [see it too](http://htmlpreview.github.com/?https://github.com/mmower/cell-culture-1/blob/master/src/cell_culture_1/index.html)

## Credits

* Bootstrap: http://twitter.github.io/bootstrap/
* jQuery: http://jquery.com/
* bootstrap-slider: http://www.eyecon.ro/bootstrap-slider/

## License

Copyright © 2013 Matt Mower <self@mattmower.com>
