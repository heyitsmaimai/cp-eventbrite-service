/**
 * New Relic agent configuration.
 *
 * See lib/config.defaults.js in the agent distribution for a more complete
 * description of configuration variables and their potential values.
 */
exports.config = {
  app_name: ['cp-eventbrite-service'],
  agent_enabled: false, // set via NEW_RELIC_ENABLED for production
  license_key: '', // set via NEW_RELIC_LICENSE_KEY
  transaction_tracer: {
    record_sql: 'obfuscated',
  },
  logging: {
    /**
     * Level at which to log. 'trace' is most useful to New Relic when diagnosing
     * issues with the agent, 'info' and higher will impose the least overhead on
     * production applications.
     */
    level: 'info',
  },
};
