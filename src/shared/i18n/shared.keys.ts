const PREFIX = "shared";
const FIELDS_PREFIX = `${PREFIX}.fields`;
const PLACEHOLDERS_PREFIX = `${PREFIX}.placeholders`;
const ACTIONS_PREFIX = `${PREFIX}.actions`;
const TITLES_PREFIX = `${PREFIX}.titles`;
const NOTIFICATIONS_PREFIX = `${PREFIX}.notifications`;
const LOADERS_PREFIX = `${PREFIX}.loaders`;

export const SHARED_KEYS = {
  FIELDS: {
    EMAIL: `${FIELDS_PREFIX}.email`,
    PASSWORD: `${FIELDS_PREFIX}.password`,
  },
  PLACEHOLDERS: {
    EMAIL: `${PLACEHOLDERS_PREFIX}.email`,
    PASSWORD: `${PLACEHOLDERS_PREFIX}.password`,
  },
  ACTIONS: {
    SIGN_IN: `${ACTIONS_PREFIX}.sign_in`,
  },
  TITLES: {
    WHO_IS_TRACKING: `${TITLES_PREFIX}.who_is_tracking`,
  },
  NOTIFICATIONS: {
    LOGIN_SUCCESS: `${NOTIFICATIONS_PREFIX}.login_success`,
  },
  LOADERS: {
    LOADING: `${LOADERS_PREFIX}.loading`,
  },
};
