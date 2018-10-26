import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>I don't know why I keep coming back here. I want to [[#twine-cb find]]find[[/twine-cb]] them, the bull-children. That much is obvious. But what then? What do you do with your monsters?</p><p><span class='back'>[[#twine-cb back]]back[[/twine-cb]]</span></p>").cb('back', () => {
      window.window.close();
    }).cb('find', () => {
      this.get('find').perform(script, data, window);
    });
  }),

  find: task(function * (script, data, window) {
    yield script.scene("how/stay/comfortable/comfortable/crush/not/labyrinthe/think/expedition/find", { window: "how/stay/comfortable/comfortable/crush/not/labyrinthe/think/expedition/find", screen: true });
    window.window.close();
  })
});
