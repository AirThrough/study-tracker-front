export default {
  shared: {
    fields: {
      email: "メール",
      password: "パスワード",
    },
    placeholders: {
      email: "your@email.com",
      password: "secretpassword123",
    },
    actions: {
      sign_in: "ログイン",
    },
    titles: {
      who_is_tracking: "誰が記録しますか？",
    },
    notifications: {
      login_success: "ログインに成功しました",
    },
  },
} as const;
