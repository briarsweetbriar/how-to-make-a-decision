import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>Two in the morning at an all-night cafe. We were the only ones talking, and we were loud. Unconscious of it. Echoing each other before we even spoke. It was like finding a sister.</p><p>I had a hard time acknowledging that she [[#twine-cb not]]didn't feel the same way.[[/twine-cb]] Even so, I'd still like to believe that our first conversation was magic.</p><p><span class='back'>[[#twine-cb back]]back[[/twine-cb]]</span></p>").cb('back', () => {
      window.window.close();
    }).cb('not', () => {
      this.get('not').perform(script, data, window);
    });
  }),

  not: task(function * (script, data, window) {
    yield script.scene("how/stay/comfortable/comfortable/crush/not", { window: "how/stay/comfortable/comfortable/crush/not", screen: true });
    window.window.close();
  })
});
