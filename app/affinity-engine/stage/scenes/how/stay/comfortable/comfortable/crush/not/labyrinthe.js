import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>I know why Pasiphaë built a labyrinthe around her son. I've spent a lifetime doing the same thing, hiding bull-children from the world, from myself. I don't even remember what they are or why they disturbed me so much. Yet sometimes I feel them in there, their bellows shaking the walls of the maze.</p><p>Something is wrong with me. And my crush? I [[#twine-cb think]]think[[/twine-cb]] she sensed it too.</p><p><span class='back'>[[#twine-cb back]]back[[/twine-cb]]</span></p>").cb('back', () => {
      window.window.close();
    }).cb('think', () => {
      this.get('think').perform(script, data, window);
    });
  }),

  think: task(function * (script, data, window) {
    yield script.scene("how/stay/comfortable/comfortable/crush/not/labyrinthe/think", { window: "how/stay/comfortable/comfortable/crush/not/labyrinthe/think", screen: true });
    window.window.close();
  })
});
