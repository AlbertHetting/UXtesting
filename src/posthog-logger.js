import posthog from './posthog.js';

const posthogLogger = {
  info(message, attributes) {
    posthog.logger.info(message, attributes);
  },
};

export default posthogLogger;
