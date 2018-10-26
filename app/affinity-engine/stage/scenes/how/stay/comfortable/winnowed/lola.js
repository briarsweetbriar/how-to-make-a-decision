import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    yield script.text("<p>She lived in a little trailer on the outskirts of town. The sidewalk leading up to her door was lined with tulips, and after it rained, huge snails would crawl over the concrete. I remember endless pancake mornings. And curling up in her bed as she [[#twine-cb read]]read[[/twine-cb]] from a picture book about a wolf raised by sheep.</p><p>After the divorce, my mom had to start working the early shift, and she'd drop me off at school at 5:30am. I complained about it, and Lola volunteered to drive me instead. It was during one of those drives that we got into the [[#twine-cb wreck]]wreck.[[/twine-cb]]</p><p><span class='back'>[[#twine-cb back]]back[[/twine-cb]]</span></p>").cb('back', () => {
      window.window.close();
    }).cb('read', () => {
      this.get('read').perform(script, data, window);
    }).cb('wreck', () => {
      this.get('wreck').perform(script, data, window);
    });
  }),

  read: task(function * (script, data, window) {
    yield script.scene("how/stay/comfortable/winnowed/lola/read", { window: "how/stay/comfortable/winnowed/lola/read", screen: true });
  }),

  wreck: task(function * (script, data, window) {
    yield script.scene("how/stay/comfortable/winnowed/lola/wreck", { window: "how/stay/comfortable/winnowed/lola/wreck", screen: true });
    window.window.close();
  }),
});
