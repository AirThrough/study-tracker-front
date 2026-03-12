export default {
  shared: {
    fields: {
      email: "Email",
      password: "Пароль",
    },
    placeholders: {
      email: "your@email.com",
      password: "secretpassword123",
    },
    actions: {
      sign_in: "Войти",
    },
    titles: {
      who_is_tracking: "Кто будет трекать?",
    },
    notifications: {
      login_success: "Вход выполнен успешно",
    },
  },
} as const;
