import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>We tried to heal each other, repeatedly. Cross-legged for hours, grass stains on our jeans. She told me that our [[#twine-cb labyrinthe]]defenses[[/twine-cb]] would destroy us. That yes, we needed them once, but now they just wreak havoc. It sounded like familiar wisdom, like something out of a self-help book. But she believed it, and that was enough to get me to hear it, too.</p><p><span class='back'>[[#twine-cb back]]back[[/twine-cb]]</span></p>").cb('back', () => {
      window.window.close();
    }).cb('labyrinthe', () => {
      this.get('labyrinthe').perform(script, data, window);
    });
  }),

  labyrinthe: task(function * (script, data, window) {
    yield script.scene("how/stay/comfortable/comfortable/crush/not/labyrinthe", { window: "how/stay/comfortable/comfortable/crush/not/labyrinthe", screen: true });
    window.window.close();
  })
});
