import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>Or maybe not.</p><p>But still, this belief that she did sense it? It's a kind of currency. I can use it to pay for another [[#twine-cb expedition]]expedition[[/twine-cb]] into the maze.</p><p><span class='back'>[[#twine-cb back]]back[[/twine-cb]]</span></p>").cb('back', () => {
      window.window.close();
    }).cb('expedition', () => {
      this.get('expedition').perform(script, data, window);
    });
  }),

  expedition: task(function * (script, data, window) {
    yield script.scene("how/stay/comfortable/comfortable/crush/not/labyrinthe/think/expedition", { window: "how/stay/comfortable/comfortable/crush/not/labyrinthe/think/expedition", screen: true });
    window.window.close();
  })
});
