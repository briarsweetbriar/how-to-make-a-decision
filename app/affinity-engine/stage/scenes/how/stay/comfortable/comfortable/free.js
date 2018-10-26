import { Scene } from 'affinity-engine-stage';
import { task } from 'ember-concurrency';

export default Scene.extend({
  start: task(function * (script, data, window) {
    const choice = yield script.text("<p>Sometimes I see the possibilities that exist between myself and everything. Like, when I come across a tree, I might imagine myself climbing it. Or sitting under it. Or prying off the bark to find the tunnels left by burrowing insects. To be above ground is to know my power, even if I only imagine using it.</p><p>In the canyon, I don't see the world. Whether I'm standing in the shower, preparing breakfast, or walking to the mailbox: my mind is on my work. It's effective, and when I'm down here, I get shit done. So long as I have something to show for it, I can claim to have [[#twine-cb shit]]worth.[[/twine-cb]]</p><p>If I <span class='decision-path decision'>[[#twine move]]move,[[/twine]]</span> the newness will pull me to the surface. If I <span class='decision-path decision'>[[#twine stay]]stay,[[/twine]]</span> I may end up lingering down here until I forget my way out.</p><p><span class='back'>[[#twine-cb back]]back[[/twine-cb]]</span></p>").cb('back', () => {
      window.window.close();
    }).cb('shit', () => {
      this.get('shit').perform(script, data, window);
    });

    data.get('choices').choose('how.stay.comfortable.comfortable.free', choice.value === 'move' ? 100 : -100);

    window.window.close();
  }),

  shit: task(function * (script, data, window) {
    yield script.scene("how/stay/comfortable/comfortable/free/shit", { window: "how/stay/comfortable/comfortable/free/shit", screen: true });
  }),
});
