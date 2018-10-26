import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>The first time was the hardest. I gave away all my books, most my clothes. I emptied drawers full of birthday cards and polaroids. I cleared a spot in the garden and arranged the little acorns and seashells and cicada husks I'd collected over the years. I was 23.</p><p>For awhile, I carried the two stuffed animals that [[#twine-cb lola]]Lola[[/twine-cb]] had given to me when I was a kid, even though they took up a lot of space in that backpack. Unlike everything else, I had to make sure these two were alright. I wanted them to have a [[#twine-cb home]]good home.[[/twine-cb]]</p><p><span class='back'>[[#twine-cb back]]back[[/twine-cb]]</span></p>").cb('back', () => {
      window.window.close();
    }).cb('lola', () => {
      this.get('lola').perform(script, data, window);
    }).cb('home', () => {
      this.get('home').perform(script, data, window);
    });
  }),

  lola: task(function * (script, data, window) {
    yield script.scene("how/stay/comfortable/winnowed/lola", { window: "how/stay/comfortable/winnowed/lola", screen: true });
  }),

  home: task(function * (script, data, window) {
    yield script.scene("how/stay/comfortable/winnowed/home", { window: "how/stay/comfortable/winnowed/home", screen: true });
  })
});
