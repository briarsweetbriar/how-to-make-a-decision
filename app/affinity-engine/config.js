export default {
  component: {
    stage: {
      direction: {
        prompt: {
          attrs: {
            classNames: {
              decorative: ['ae-transparent'],
              structural: ['ae-full']
            }
          }
        },
        text: {
          attrs: {
            instant: true,
            persistent: true,
            scrollable: true,
            lxlAnimation: {
              effect: {
                translateZ: [0, -3],
                opacity: [0.999, 1]
              },
              duration: 3
            }
          }
        }
      }
    }
  }
};
